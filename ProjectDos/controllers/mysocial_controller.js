var express = require('express');
var db = require('../models');
var path = require("path");
var Request = require('request-promise');
var fs = require('mz/fs');
var Twitter = require('twitter');
var Keys = require('../controllers/keys.js');


var client = new Twitter(Keys.twitterKeys);


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

  // POST route for saving a new user - Brian 11/19/17 
  app.post("/api/users", function(req,res) {
    console.log(req.body);
    db.User.create({
      name: req.body.name,
      name_last: req.body.name_last,
      name_first: req.body.name_first,  
      email: req.body.email,
      facebook_name: req.body.facebook_name,
      twitter_name: req.body.twitter_name,
      insta_name: req.body.insta_name,
      li_name: req.body.li_name,
      interest1: req.body.interest1,
      interest2: req.body.interest2,
      interest3: req.body.interest3
    }).then(function(post){
      res.json(post);
    });
  });

  // UPDATE route for updating user - Brian 11/23/17 
  app.put("/api/users/:id", function(req,res) {
    var id = req.params.id;    
    console.log(req.body);
    db.User.update({
      name: req.body.name,
      name_last: req.body.name_last,
      name_first: req.body.name_first,  
      facebook_name: req.body.facebook_name,
      twitter_name: req.body.twitter_name,
      insta_name: req.body.insta_name,
      li_name: req.body.li_name,
      interest1: req.body.interest1,
      interest2: req.body.interest2,
      interest3: req.body.interest3,
      profile_pic: req.body.profile_pic
    },{
      where: {
        email: id
      },
      returning: true,
      plain: true
    }).then(function(update){
      res.json(update);
    });
  });

  app.delete("/api/users/:id", function(req,res) {
    var id=req.params.id;
    db.User.destroy({
      where : {
        email: id 
      }
    }).then(function(data) {
      res.json(data);
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
