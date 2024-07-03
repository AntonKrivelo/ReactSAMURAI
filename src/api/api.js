import axios from "axios"


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '98b61ebb-197c-44de-b79a-25e7dcdaea1a'
    }
});


export const usersProfile = (userId) => {
    return instance.get (baseUrl + `profile/` + userId);
}


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get (baseUrl + `users?page=${currentPage}&count=${pageSize}`, {
        
    })
    .then(responce => {
        return responce.data
    
    });
}

export const unFollow = (u) => {
    return instance.delete(baseUrl + `follow/${u.id}`, {
    })
}

export const follow = (u) => {
    return instance.post(baseUrl + `follow/${u.id}`, {}, {
    })
}


