require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
 


  // var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);

  var command = process.argv[2];

// if (command == "my-tweets") {

    client.get('statuses/user_timeline', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets[0].text);  // The favorites. 
    //console.log(response);  // Raw response object. 
    });
// }
// @Funnyoneliners