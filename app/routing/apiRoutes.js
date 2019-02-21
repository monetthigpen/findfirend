var friendsData = require("../data/friends.js");

module.exports = function(app) {
    
  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  

  
    
  
    app.post("/api/friends", function(req, res) {
        var friendName = "";
        var friendPhoto = "";
        var diff = 100;
        var friendResponse = req.body;
        console.log("here1s");
        
      for(var i = 0; i < friendsData.length; i++){
          //console.log(friendResponse.scores);

          var calc = 0;
          for(var c = 0; c< friendResponse.scores; i++){
            calc += Math.abs(parseInt(friendsData[i].scores[c] - friendResponse[c]));
            ;
            console.log(calc);
          }
        
        if (calc < diff) {
          console.log('Closest match found = ' + calc);
          console.log('Friend name = ' + friendsData[i].name);
          console.log('Friend image = ' + friendsData[i].photo);
  
          diff = calc;
          friendName = friendsData[i].name;
          friendPhoto = friendsData[i].photo;
        }
      }
        friendsData.push(req.body);
        res.json(true);
        res.json({status: true, friendName: friendName, friendPhoto: friendPhoto});
      
    });
  
    
  
    
};
  