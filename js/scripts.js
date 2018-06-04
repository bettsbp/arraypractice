$(document).ready(function() {
  $("#favorite-things").submit(function(event) {

    var inputFood = $("input#favFood").val();
    var inputAnimal = $("input#favAnimal").val();
    var inputColor = $("input#favColor").val();
    var inputMusic = $("input#favMusic").val();
    var inputMovie = $("input#favMovie").val();
    var favArray = [];
    var newArray = [];

    favArray.push(inputFood, inputAnimal, inputColor, inputMusic, inputMovie);

    newArray.push(favArray[1], favArray[0], favArray[2]);

    $("ul").append("<li>" + newArray[0] + "</li>");
    $("ul").append("<li>" + newArray[1] + "</li>");
    $("ul").append("<li>" + newArray[2] + "</li>");

    event.preventDefault();
  });
  //
  //   $("#tagprac h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  //   $("#tagprac p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  //   $("#tagprac img").click(function() {
  //   alert("This is an image.");
  // });

  });
});
