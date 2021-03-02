var results= JSON.parse(localStorage.getItem('apiRes'));

localStorage.removeItem( 'apiRes' ); // Clear the localStorage
console.log(results)
console.log(results.data.length)
var numbers=results.data.length
if (numbers==0 || !results){
    $("#alert").html('No flights found')
}else{
  
}

