import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW",
    UN_FOLLOW = "UN_FOLLOW",
    SET_USERS = "SET_USERS",
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (
        action.type
        ) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users, //adding new users which came from action.users to old users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)//read about filter

            };
        default:
            return state;
    }
};


export const applyFollow = (userId) => ({type: FOLLOW, userId}),
    applyUnfollow = (userId) => ({type: UN_FOLLOW, userId}),
    setUsers = (users) => ({type: SET_USERS, users}),
    setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}),
    setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount}),
    toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching}),
    toggleFollowingProgress = (isFetching, userId) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    });

export const getUsers = (currentPage, pageSize) => {
        return (dispatch) => {
            dispatch(toggleIsFetching(true));
            usersAPI.getUsers(currentPage, pageSize).then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount));
            });
            dispatch(setCurrentPage(currentPage));
        }
    },
    follow = (userId) => {
        return (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            usersAPI.follow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(applyFollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
        }
    },
    unFollow = (userId) => {
        return (dispatch) => {
            dispatch(toggleFollowingProgress(true, userId))
            usersAPI.unFollow(userId).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(applyUnfollow(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
        }
    }

export default usersReducer;
