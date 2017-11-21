var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require('path');


//requireing our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));


app.use(methodOverride('_method'));

// Parse application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// add routes file
require("./controllers/mysocial_controller.js")(app);

//syncing our sequlize models and then starting our express app
db.sequelize.sync().then(function(){
	app.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
});
});