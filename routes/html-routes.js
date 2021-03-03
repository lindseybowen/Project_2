const { request } = require("http");
var path = require("path");
const fetch = require('node-fetch')
module.exports = function(app){

  app.get('/', (req, res) => {
    res.render('index');
  });

      // app.post("/flights", function(req, res){
      //   res.render("flights",{
      //     hello: 'hello',
      //     bye: 'bye'
      //   })
      // })

      app.get("/flights", function(req, res){
        var key = "YWqCp1j5LkqKAMf7HknJi73S1AkpeelC"; 
        var secret = "cAA8ehlkyJzw2WXi";
        console.log(req.query)
        getAccessToken(req.query.depPort,req.query.arrPort,req.query.depDate,req.query.reDate,req.query.adults,req.query.cabinClass)  
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
          console.log(depPort,arrPort,depDate,reDate,adults,cabinClass)
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
            }).then(response =>response.json()).then(flights => {
              // const flightsArray = Object.keys(flights).map(i => flights[i])
              console.log(flights.data.length)

              res.render('flights', {
                hello: 'hello',
                flights: flights.data
              })
            })
          }
      })
    
      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

      app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
      });
      app.get("/members", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/members.html"));
      });
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

}

