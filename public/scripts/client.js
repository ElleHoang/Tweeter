/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const createTweetElement = function(tweetObj) {
    const { name, avatars, handle } = tweetObj.user;
    const { text } = tweetObj.content;
    const time  = tweetObj.created_at;
    const convertTime = timeago.format(time);
    console.log(convertTime);
    
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };
    
    let $tweet = $(`
    <article class="tweet">
    <header>
    <span class="tweeter"><img class="users-avatar" src=${escape(avatars)}>${escape(name)}</span>
    <span class="handle">${escape(handle)}</span>
    </header>
    <p class="tweet-body">${escape(text)}</p>
    <footer class="tweet-info">
    <span>${escape(convertTime)}</span>
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
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.all-tweets').prepend($tweet);
    }
  };
  
  const loadTweets = function() {
    $.ajax("/tweets", { type: "GET"})
      .then(function(data) {
        renderTweets(data);
      });
  };
  loadTweets();

  $("#err-msg").hide();
  $("form").submit(function(event) {
    event.preventDefault();
    if ($("#tweet-text").val() === "" || $("#tweet-text").val() === null) {
      return $("#err-msg").slideDown().fadeOut(5000).find("p").text(`We can not see what you're humming about.`);
    }
    if ($("#tweet-text").val().length > 140) {
      return $("#err-msg").slideDown().fadeOut(5000).find("p").text(`Your humming is way too long.`);
    }
    const queryStr = $(this).serialize();
    console.log(queryStr);
    $.ajax("/tweets", { type: "POST", data: queryStr})
      .then(function() {
        loadTweets();
        $("#tweet-text").val("");
      });
  });
});