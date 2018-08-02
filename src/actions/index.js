const API_ENDPOINT = 'http://goan.herokuapp.com';

export function getLocation(location_id) {
    return fetch(API_ENDPOINT + '/location/' + location_id, {
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
            'Content-Type': 'application/json'
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
    return fetch(API_ENDPOINT + '/users/sign_in', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        var res = response;
        if(!res.ok){
            throw res
        }
        return res.json();
    })
}

export function verifyUser(accessToken){
    console.log("Token is: "  + accessToken);
    return fetch (API_ENDPOINT + '/users/sessions/verify_access_token/' + accessToken, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => {
        var res = response;
        console.log(res);
        if(!res.ok){
            throw res
        }
        return res.json();
    })
}
