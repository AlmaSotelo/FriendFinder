// Require dependencies
var express = require('express');
var friends = require('../data/friends');
//separating the routes from the "server.js". This is declared in server.js
var router = express.Router();

//to display a JSON of all possible friends. 
router.get('/friends', function(req, res){
   res.send(friends);
});

//To handle incoming survey results. This route also is used to //handle the compatibility logic. 
// Looping to compare the scores of the user against the objets in array "friends" The gol is to find the object with the lower differencias in scores.
router.post('/friends', function(req, res){
   var newFriend = req.body; //obtaining the array of the user. 
   var lowestDiff = null;
   var bestMatch = null;
   // will go through all objects in the array "friends"
      for( var i =0; i < friends.length; i++ ){
      var currentFriend = friends[i]; 
      var totalDiff = 0;
      //will go through all scores in each object
      for(var j= 0; j < currentFriend.scores.length; j++){
            var diff = currentFriend.scores[j] - newFriend.scores[j];
            totalDiff += Math.abs(diff);
         }
        
         if( lowestDiff == null || totalDiff < lowestDiff){
            lowestDiff = totalDiff;
            bestMatch = currentFriend;
         }

   }
   
   friends.push(newFriend);
   
   res.send(bestMatch);
});


module.exports = router;