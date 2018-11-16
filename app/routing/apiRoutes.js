var express = require('express');
var router = express.Router();
var friends = require('../data/friends');



router.get('/friends', function(req, res){
   res.send(friends);
});


router.post('/friends', function(req, res){
   var newFriend = req.body;
   var lowestDiff = null;
   var bestMatch = null;
   for( var i =0; i < friends.length; i++ ){
      var currentFriend = friends[i];
      var totalDiff = 0;
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