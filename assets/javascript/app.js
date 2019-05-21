$(document).ready(function() {
var topics = ["Family Guy", "The Simpsons", "Bob's Burgers", "Archer", "Spongebob Squarepants"];

function renderButtons() {
  $("#buttons-view").empty();
  for (var i=0; i < topics.length; i++) {
    $("#buttons-view").append("<button class='btn btn-success' data-giphy='" + topics[i] + "'>" + topics[i] + "<button>");
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
});