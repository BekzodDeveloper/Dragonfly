import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '48241a7b-867d-4a3c-8b63-547021115f67'}
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}
export const profileAPI = {
    getProfile(userId=7255) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    setAuthUser(){
        return instance.get(`auth/me/`).then(response => response.data);
    }
}
export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);
    }
}