/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// create JS function that generate DOM structure for tweet, given tweet obj
// take obj directly from initial-tweets.json
// use jQuery to construct new elements using $ function

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Mark",
      "avatars": "https://i.ibb.co/gDfksWz/users-1M.png",
      "handle": "@JSknight" },
    "content": {
      "text": "Christmas is just around the corner!"
    },
    "created_at": 1628618888939
  },
  {
    "user": {
      "name": "Carmin",
      "avatars": "https://i.ibb.co/j6rMTyt/users-12-F.png",
      "handle": "CSSguru" },
    "content": {
      "text": "OMG!!! My project is overdue :("
    },
    "created_at": 1628618888939
  },
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.ibb.co/4M2fCM8/users-7M.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.ibb.co/7RS0tCM/users-14-F.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {
  
  const createTweetElement = function(tweetObj) {
    //const $tweet = $(`<article class="tweet">Hello world</article>`);
    
    // create HTMl markup using template literals or template strings
    const { name, avatars, handle } = tweetObj.user;
    const { text } = tweetObj.content;
    const time  = tweetObj.created_at;
    const convertTime = timeago.format(time);
    console.log(convertTime);
    
    let $tweet =$(`
    <article class="tweet">
    <header>
    <span class="tweeter"><img class="users-avatar" src=${avatars}>${name}</span>
    <span class="handle">${handle}</span>
    </header>
    <p class="tweet-body">${text}</p>
    <footer class="tweet-info">
    <span>${convertTime}</span>
    <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </div>
    </footer>
    </article>
    `);
    return $tweet;
  };
  
  const renderTweets = function(tweets) {
    // loop through tweets
    // call createTweetElement for each tweet
    // take return value & appends it to tweet container (.all-tweets)
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.all-tweets').append($tweet); // to add to pg to make sure it's got all right elements, classes, etc.
    }
  };

  renderTweets(data);
  
  // Test / driver code (temp)
  //console.log($tweet); // to see what it looks like

  //return tweet<article> element;
  // contain entire HTML structure of tweet
});