import axios from "axios";


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '0d4f1fd0-047f-4b36-b472-fbdf692f71b9',
        'Authorization': 'Bearer 6a2e06de-33cf-4b65-9356-26f818587a89'
    }
});

// Profile
export const getProfile = (userId) => {
    return instance.get (baseUrl + `profile/` + userId);
}

export const getStatusApi = (userId) => {
    return instance.get(baseUrl + `profile/status/` + userId);
}
export let updateStatusApi = (status) => {
    return instance.put(baseUrl + `profile/status`, {status: status});
}

// Profile



//Users
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get (baseUrl + `users?page=${currentPage}&count=${pageSize}`, {

    })
    .then(responce => {
        return responce.data
    });
}

export const unFollow = (id) => {
    return instance.delete(baseUrl + `follow/${id}`, {
    })
}

export const follow = (id) => {
    return instance.post(baseUrl + `follow/${id}`, {})

}
//Users

export const authAPI = {
    me() {
       return instance.get(baseUrl + `auth/me`, {
        })
    }
}


