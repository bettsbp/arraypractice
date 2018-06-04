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

    newArray.push(favArray[1], favArray[0], favArray[2])

    event.preventDefault();
  });

});
