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
  });

})