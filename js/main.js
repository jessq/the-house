$(function() {
  // maybe? preload all files but hidden...
  $("#main")
    .load("home.html")
    .hide()
    .fadeIn("slow");

  const array = [
    "home",
    "room_one",
    "room_two",
    "room_three",
    "room_four",
    "bathrooms",
    "kitchen",
    "garden",
    "roommates",
    "application"
  ];

  array.forEach(function(page) {
    $(`#${page}`).click(function() {
      $(`#main`)
        .load(`${page}.html`)
        .hide()
        .fadeIn("slow");
    });
  });
});
