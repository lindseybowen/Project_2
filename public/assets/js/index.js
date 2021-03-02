//const auth = require('')

var key = "YWqCp1j5LkqKAMf7HknJi73S1AkpeelC"; 
var secret = "cAA8ehlkyJzw2WXi";
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');
    //autocomplete
   var format = {
    formatting: `<div class="$(unique-result)" "single-result" data-index="$(i)">$(city),$(IATA) </div>`
  };

    AirportInput("departure-input",format)
    AirportInput("destination-input",format)
    
    //search
    var searchFlight = document.getElementById('search-flights');
    searchFlight.addEventListener('click', (e) => {
        e.preventDefault();
        const search ={
            depPort: document.getElementById('departure-input').value.split(" ")[0],
            arrPort: document.getElementById('destination-input').value.split(" ")[0],
            depDate: document.getElementById('depDate').value,
            reDate: document.getElementById('reDate').value,
            adults: document.getElementById('adults').value,
            cabinClass: document.getElementById('class').value,
        }   
        window.location.href = `/flights?depPort=${search.depPort}&arrPort=${search.arrPort}&depDate=${search.depDate}&reDate=${search.reDate}&adults=${search.adults}&cabinClass=${search.cabinClass}`
    if(searchFlight){searchFlight.addEventListener('click', (e) => {
            e.preventDefault();
            var depPort = document.getElementById('departure-input').value.split(" ")[0]
            var arrPort = document.getElementById('destination-input').value.split(" ")[0]
            var depDate = document.getElementById('depDate').value
            var reDate = document.getElementById('reDate').value
            var adults = document.getElementById('adults').value
            var cabinClass = document.getElementById('class').value
            let searchResult = [depPort,arrPort,depDate,reDate,adults,cabinClass]
        console.log("search:"+searchResult)   
        getAccessToken(depPort,arrPort,depDate,reDate,adults,cabinClass)  
        })}
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
        async function getAccessToken(depPort,arrPort,depDate,reDate,adults,cabinClass){
            access_token = await getOAuthToken()
            //restOfApp()
            //this is for sample call
            restOfApp(depPort,arrPort,depDate,reDate,adults,cabinClass)
        }
        function restOfApp(depPort,arrPort,depDate,reDate,adults,cabinClass){
            fetch(`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${depPort}&destinationLocationCode=${arrPort}&departureDate=${depDate}&returnDate=${reDate}&adults=${adults}&travelClass=${cabinClass}`, {
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(response => response.json()).then(response => {
               // console.log(response.data[0].price.total)
                localStorage.setItem( 'apiRes',JSON.stringify(response))
                window.location.href = "/flights";
                //cosnsole.log(response)
                
            })
        }
  });

})