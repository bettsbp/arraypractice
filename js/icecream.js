$(document).ready(function() {
  $("#flavors").submit(function(event) {


    var creamFlavor = $("input#flavor").val();
    var flavors = [creamFlavor]
    $("#answers").show();

    event.preventDefault();
  })
})
