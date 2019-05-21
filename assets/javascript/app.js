$(document).ready(function() {
var topics = ["Family Guy", "The Simpsons", "Bob's Burgers", "Archer", "Spongebob Squarepants"];



// $(".topic").on("click", function() {
  function displayTopicInfo(){
  var topic = $(this).attr("data-topic");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  topic + "&api_key=TSUNPTa6z2tklGuh4PZEaPMuEogApupk&=10";
  
  // $("#theme-view").empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    var results = response.data;
    console.log(response);

    
    for(var i=0; i<10; i++) {
      var gifDiv = $("<div>");

      var rating = results[i].rating;
      
      var p = $("<p>").text("Rating: " + rating);

      var topicImage = $("<img>");
      topicImage.attr("src", results[i].images.fixed_height_still.url);
      topicImage.attr("class", "gif");
      topicImage.attr("data-animate", results[i].images.fixed_height.url);
      topicImage.attr("data-still", results[i].images.fixed_height_still.url);
      topicImage.attr("data-state", "data-still");
      

      gifDiv.prepend(p);
      gifDiv.prepend(topicImage);

      $("#giphy-view").prepend(gifDiv);
    }
    $(".gif").on("click", function(){
      var state = $(this).attr("data-state");
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    })
  })
}

function renderButtons() {
  $("#buttons-view").empty();
  for (var i=0; i < topics.length; i++) {
    var button = $("<button>");
    button.addClass("topic");
    button.attr("data-topic", topics[i]);
    button.text(topics[i]);
    $("#buttons-view").append(button);
  }
}
renderButtons();

$("#add-giphy").on("click", function(event){
  event.preventDefault();
  var topic = $("#giphy-input").val().trim();
  topics.push(topic);
  renderButtons();
})
$(document).on("click", ".topic", displayTopicInfo);

renderButtons();
});