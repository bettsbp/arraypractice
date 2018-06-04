$(document).ready(function() {
  $("#groceries").submit(function(event) {

    // var itemOne = $("input#item1").val();
    // var itemTwo = $("input#item2").val();
    // var itemThree = $("input#item3").val();
    // var itemFour = $("input#item4").val();
    var groceries = ["item1", "item2", "item3", "item4"]

    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      $("#" + grocery).text(userInput);
    });

    alert(groceries);

    event.preventDefault();

  });
});
