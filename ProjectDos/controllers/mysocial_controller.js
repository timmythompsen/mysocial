var express = require('express');
var db = require('../models');
var path = require("path");
var Request = require('request-promise');
var fs = require('mz/fs');
var Twitter = require('twitter');
var Keys = require('../controllers/keys.js');
var FB = require('fb');

var client = new Twitter(Keys.twitterKeys);
FB.setAccessToken('access_token');

// Routes
// =============================================================
module.exports = function(app) {


  // Route to get landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // GET route for getting all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    var id = req.params.id;
    db.User.findAll({
      where: {
        email : id
      }
    }).then(function(dbpost){
      res.json(dbpost);
    })
   }); 
  
  app.get("/api/twitter/:id", function(req, res) {
    var id = req.params.id;
    db.User.findAll({
      where: {
        email : id
      }
    }).then(function(dbpost) {
      var twitterID=dbpost.twitterID;
      var params = {screen_name: twitterID, count:20};
      client.get('favorites/list', params,function(error, tweets, response) {
        if (!error) {
              res.json(tweets);
            
        } else {
          console.log("error");
          }
      });
    });
   }); 

  app.get("/api/facebook/:id", function(req, res) {
    var id = req.params.id;
    db.User.findAll({
      //where: {
        //email : id
      //}
    }).then(function(dbpost) {
      var fbID=dbpost.FaceBookID;
      FB.api('4', function (data) {
        if(!data || data.error) {
         console.log(!data ? 'error occurred' : data.error);
         return;
        }
        console.log(data.id);
        console.log(data.name);
        res.json(data);
      });
    });
   }); 

  // POST route for saving a new user - Brian 11/19/17 
  app.post("/api/users", function(req,res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      facebook_name: req.body.facebook_name,
      twitter_name: req.body.twitter_name,
      insta_name: req.body.insta_name
    }).then(function(post){
      res.json(post);
    });
  });

  /* // POST route for saving a new post
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
