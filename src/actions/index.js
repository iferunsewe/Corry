export function getLocation() {
    return fetch('http://192.168.0.19:8080/location/2', {
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
    return fetch('http://192.168.0.19:8080/location', {
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
    return fetch('http://10.0.110.242:8080/requests', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            request
        )
    }).then(response => {
        return response.json();
    })
}
