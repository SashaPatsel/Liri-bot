require("dotenv").config();
var keys = require("./keys.js");

//Twitter
var Twitter = require('twitter');
var client = new Twitter(keys.twitter); 

//Spotify
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);


//Omdb
var request = require('request');

  var command = process.argv[2];

if (command === "my-tweets") {

    client.get('statuses/user_timeline', function(error, tweets, response) {
    if(error) throw error;
    console.log("\nMy latest tweets:")
    // console.log(tweets[0])
    for (var i = 1 ; i < 22 ; i++) {
      console.log("\nTweet " + i + ", created at" + tweets[i].created_at + ": " + tweets[i].text);
    }

    });
}


if (command === "spotify-this-song") {
    var song = process.argv[3];
  spotify.search({ type: 'track', query: song, limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   

  //Artist(s)
  console.log("Here are some possible artists: " + data.tracks.items[0].artists[0].name);
  // The song's name
   console.log("Song Name: "  + data.tracks.items[0].name); 
  // A preview link of the song from Spotify
  console.log("Here's a link to the song: " + data.tracks.items[0].album.href);
  // The album that the song is from
  console.log("Your song is from the " + data.tracks.items[0].album.name + " album");
  });

}

if (command === "movie-this") {
  var movie = process.argv[3];
  request('https://www.omdbapi.com/?apikey=trilogy&t=' + movie , function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
}
