let initialState = {
    friendsList: [
        {
            id: 1,
            name: "Abdulaziz Kholdarov",
            userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"
        },
        {id: 2, name: "Mr. Gucci", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
        {id: 3, name: "Doni", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
        {id: 4, name: "Murod Musaev", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
        {id: 5, name: "Jamshid", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"},
        {id: 6, name: "Mamarayim", userPhoto: "https://cdn-icons-png.flaticon.com/512/147/147140.png"}
    ]
};
const sidebarReducer = (state = initialState, action) => {
    return state;
}
export default sidebarReducer;