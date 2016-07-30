// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendData = require('../data/friends.js');
var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

  app.get('/api/friends', function(req, res){
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res)  {

    friendData.push(req.body);

  });
}