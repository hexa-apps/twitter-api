var Twitter = require("twitter");
require("dotenv/config");

const apikey = process.env.apikey;
const apikeysecret = process.env.apikeysecret;
const accesstoken = process.env.accesstoken;
const accesstokensecret = process.env.accesstokensecret;

var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apikeysecret,
  access_token_key: accesstoken,
  access_token_secret: accesstokensecret,
});

var params = { screen_name: "orucberkay" };


// Get all tweets for screen name
client.get(
  "statuses/user_timeline",
  params,
  function (error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  }
);

// Post new tweet
client.post(
  "statuses/update",
  { status: "I Love Twitter" },
  function (error, tweet, response) {
    if (error) throw error;
    console.log(tweet); // Tweet body.
    console.log(response); // Raw response object.
  }
);
