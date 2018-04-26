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
