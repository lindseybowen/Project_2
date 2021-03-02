//const express = require('express');

// Sets up the Express App
//const app = express();
//const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
//const db = require('./models');

// Sets up the Express app to handle data parsing
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

// Syncing our sequelize models and then starting our express app
//db.sequelize.sync({ force: true }).then(() => {
 // app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
//});

const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/member', (req, res) => {
  res.render('member');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/flights', (req, res) => {
  res.render('flights');
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);



