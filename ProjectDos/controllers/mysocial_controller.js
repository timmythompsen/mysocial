var express = require('express');
var db = require('../models');
var path = require("path");
var Keys = require('./keys.js');
var Twitter = require('twitter');
var Request = require('request-promise');
var fs = require('mz/fs');

var client = new Twitter(Keys.twitterKeys);

getFavTweets();

function getFavTweets() {
	var params = {screen_name: 'HafnerTest', count:20};
	// console.log("before client get");
	client.get('favorites/list', params,function(error, tweets, response) {
	 	if (!error) {
		    	console.log("\n\n" + "MY MOST FAVORITE TWEETS");
			    for (var i=0; i<tweets.length; i++) {
			    	console.log(`Tweet ${i+1}. posted by ${tweets[i].user.name.underline} at ${tweets[i].created_at} `);
					console.log(`Tweet Text: ${tweets[i].text}`);
					console.log(`=============================`);
				}
		} else {
			console.log("error");
			}
	});
};

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/api/posts", function(req, res) {
    db.User.findAll({}).then(function(data){
      res.json(data);
    });
  });
  /*
  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {

    db.Post.findAll({
      where: {
        category : req.params.category
      }
    }).then(function(dbpost){
      res.json(dbpost);
    })
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {

    db.Post.findAll({
      where: {
        id : req.params.id
      }
    }).then(function(dbpost){
      res.json(dbpost);
    })
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {

    console.log(req.body);
    db.Post.create({
      title : req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(function(post){
      res.json(post);
    })
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {

    db.Post.destroy({
      where : {
        id: req.params.id
      }
    }).then(function(post){
      res.json(post);
    });
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update({
      title : req.body.title,
      body: req.body.body,
      category: req.body.category
    },
    {
      where: {
        id: req.body.id
      }
    }).then(function(post){
      res.json(post);
    }).catch(function(err){
      res.json(err);
    });
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });*/
};
