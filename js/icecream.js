$(document).ready(function() {
    var flavors = ["chocolate", "vanilla", "mint", "oreo", "cookies n cream", "rocky road", "ice cream"];

    flavors.forEach(function(flavor) {
      $("ul").append("<li>" + flavor + "</li>");
    });
  });
