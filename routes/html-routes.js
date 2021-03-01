var path = require("path");

module.exports = function(app){

      app.get("/flights", function(req, res){
        res.render("flights",{})
      })
      app.get("/login", function(req, res){
        res.render("login",{})
      })
      app.get("/signin", function(req, res){
        res.render("singin",{})
      })
      app.get("/contact", function(req, res){
        res.render("contact",{})
      })
      app.get("/members", function(req, res){
        res.render("members",{})
      })
}

