$(document).ready(function() {
var topics = ["Family Guy", "The Simpsons", "Bob's Burgers", "Archer", "Spongebob Squarepants"];

function renderButtons() {
  $("#buttons-view").empty();
  for (var i=0; i < topics.length; i++) {
    $("#buttons-view").append("<button class='btn btn-success data-giphy'" + topics[i] + ">" + topics[i] + "<button>");
    }
  }
renderButtons();

$("#add-giphy").on("click", function() {
  event.preventDefault();
  var giphy = $("#giphy-input").val().trim();
  topics.push(giphy);
  renderButtons();
  return;
})

$(".data-giphy").on("click", function() {
  var topic = $(this).attr("data-topic");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  topic + "&api_key=TSUNPTa6z2tklGuh4PZEaPMuEogApupk&=10";
  

  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    var results = response.data;

    for(var i=0; i<10; i++) {
      var gifDiv = $("<div>");

      var rating = results[i].rating;
      
      var p = $("<p>").text("Rating: " + rating);

      var topicImage = $("<img>");
      topicImage.attr("src", results[i].images.fixed_height.url);

      gifDiv.prepend(p);
      gifDiv.prepend(topicImage);

      $("#giphy-view").prepend(gifDiv);
    }
  })
})
});