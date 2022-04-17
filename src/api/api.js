import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '48241a7b-867d-4a3c-8b63-547021115f67'}
});
export const usersAPI = {
        requestUsers(currentPage = 1, pageSize = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`);
        },
        follow(userId) {
            return instance.post(`follow/${userId}`);
        },
        unFollow(userId) {
            return instance.delete(`follow/${userId}`);
        }
    },
    profileAPI = {
        getProfile(userId) {
            return instance.get(`profile/${userId}`);
        },
        getUserStatus(userId) {
            return instance.get(`profile/status/${userId}`)
        },
        updateUserStatus(status) {
            return instance.put(`profile/status`, {status: status})
        }
    },
    authAPI = {
        me() {
            return instance.get(`auth/me`);
        },
        login(email, password, rememberMe) {
            return instance.post(`auth/login`, {email, password, rememberMe});
        },
        logout() {
            return instance.delete(`auth/login`);
        },
    };