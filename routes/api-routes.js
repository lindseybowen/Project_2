const db = require("../models");

//Routes

module.exports = (app) => {
  // GET route for getting all of the posts
  app.get("/api/flights", (req, res) => {
    console.log("test")
    db.Flight.findAll({}).then((dbPost) => res.json(dbPost));
  });

  // Get route for returning posts of a specific category

  app.get("/api/flights/category/:category", (req, res) => {
    db.Flight.findAll({
      where: {
        catagory: req.params.category,
      },
    }).then((dbPost) => {
      res.json(dbPost);

    })
  });
  // Get route for retrieving a single post

  app.get("/api/flights/detail/:id", (req, res)=>{
    db.Flight.findOne({
      where:{
        id: req.params.id,
      },
    }).then((dbPost)=> res.json(dbPost));
  });
// POST route for saving a new post
  app.post("/api/flights", (req, res)=>{
    console.log(req.body);
    db.Flight.create(req.body).then((dbPost) => res.json(dbPost));
  });

  // DELETE route for deleting posts
  app.delete('/api/flights/:id', (req, res) => {
    db.Flight.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

  // PUT route for updating posts
  app.put('/api/flights', (req, res) => {
    db.Flight.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then((dbPost) => res.json(dbPost));
  });

}


