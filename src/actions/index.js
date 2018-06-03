const API_ENDPOINT = 'http://192.168.0.11:3000';

export function getLocation() {
    return fetch(API_ENDPOINT + '/location/2', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => {
        return response.json();
    })
}

export function getLocations(){
    return fetch(API_ENDPOINT + '/location', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(response => {
        return response.json();
    })
}

export function createRequest(request){
    console.log(request)
    return fetch(API_ENDPOINT + '/requests', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    }).then(response => {
        return response.json();
    })
}

export function registerUser(user){
    console.log(user)
    return fetch(API_ENDPOINT + '/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    })
}

export function loginUser(user){
    console.log(user)
    return fetch(API_ENDPOINT + '/users/sign_in', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json();
    })
}
