var key = "YWqCp1j5LkqKAMf7HknJi73S1AkpeelC"; 
var secret = "cAA8ehlkyJzw2WXi";
let access_token;
function getOAuthToken(){
    return fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`
    }).then(response => response.json()).then(response => {
        return response.access_token
    })
}
async function getAccessToken(){
    access_token = await getOAuthToken()
    //restOfApp()
    //this is for sample call
    restOfApp('SYD','BKK','2021-05-10','2','ECONOMY')
}
getAccessToken()
function restOfApp(depPort,arrPort,depDate,adults,cabinClass){
    fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${depPort}&destinationLocationCode=${arrPort}&departureDate=${depDate}&adults=${adults}&travelClass=${cabinClass}`, {
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => response.json()).then(response => {
        console.log(response)
    })
}