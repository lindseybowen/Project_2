var results= JSON.parse(localStorage.getItem('apiRes'));

localStorage.removeItem( 'apiRes' ); // Clear the localStorage
console.log(results)
console.log(results.data.length)
var numbers=results.data.length
if (numbers==0 || !results){
    $("#alert").html('No flights found')
}else{
    for(i=0;i<results.data.length;i++){
      var carCode = results.data[i].itineraries[0].segments[0].carrierCode
      console.log(carCode)
      var carrier = results.dictionaries.carriers[carCode]
      
       $('#app').append(`<div class="column is-4">
        <div class="card large">
              <div class="media-content">
                <p class="title is-4 no-padding">${carrier}</p>
                <p><span class="title is-6">${results.data[i].itineraries[0].duration}</span></p>
                <p class="title is-3 no-padding">$ ${results.data[i].price.base}</p>
               
              </div>
            </div>
</div> `)
    }
}

