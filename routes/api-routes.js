const db = require("../models");

//Routes

module.exports = (app) => {
  app.get("/api/posts", (req, res) => {
    db.Post.findAll({}).then((dbPost) => res.json(dbPost));
  });
}


