var path = require("path");

module.exports = function(app){

    app.get("/Tickets", function(req, res) {
        res.render("index", {})
      });
    
      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signin.html"));
      });

      app.get("/singUp", function(req, res) {
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

