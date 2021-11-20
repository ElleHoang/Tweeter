/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// create JS function that generate DOM structure for tweet, given tweet obj
// take obj directly from initial-tweets.json
// use jQuery to construct new elements using $ function

// Test /driver code (temp). Eventually will get from server
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(document).ready(function() {

  const createTweetElement = function(tweetObj) {
    //const $tweet = $(`<article class="tweet">Hello world</article>`);

    // create HTMl markup using template literals or template strings
    
    const { name, avatars, handle } = tweetObj.user;
    const { text } = tweetObj.content;
    const time  = tweetObj.created_at;
    const convertTime = timeago.format(time);
    console.log(convertTime);

    const $tweet =$(`
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

  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temp)
  console.log($tweet); // to see what it looks like
  
  $('.all-tweets').append($tweet); // to add to pg to make sure it's got all right elements, classes, etc.
});

/*
return tweet<article> element; // contain entire HTML structure of tweet
};
*/
