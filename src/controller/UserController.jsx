import { API } from './Config';

export const login = (user, password) => {
    return fetch(API + "noauth/user/login", {
        method: 'POST',
        body: JSON.stringify({
            username: user,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const register = (user, password) => {
    return fetch(API + "noauth/user/register", {
        method: 'POST',
        body: JSON.stringify({
            username: user,
            password: password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};

export const salt = () => {
    return fetch(API + "qr/salt", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

export const myHistory = () => {
    return fetch(API + "history/mine", {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

export const history = (username, salt) => {
    return fetch(API + "noauth/history/" + username + "/" + salt, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}