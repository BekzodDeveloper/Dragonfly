import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '48241a7b-867d-4a3c-8b63-547021115f67'}
});
export const usersAPI = {
        getUsers(currentPage = 1, pageSize = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`);
        },
        follow(userId) {
            return instance.post(`follow/${userId}`);
        },
        unFollow(userId) {
            return instance.delete(`follow/${userId}`);
        },
        getProfile(userId = 7255) {
            return instance.get(`profile/${userId}`);
        }
    },
    authAPI = {
        me() {
            return instance.get(`auth/me/`);
        }
    };