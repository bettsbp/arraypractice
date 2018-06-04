$(document).ready(function() {

  // $("h1").click(function() {
  //   alert("This is a header.");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });

  // --------------
  // Simplified to below code using looping and forEach functions
  // vvvvvvvvvvvvvv

  var elements = ["h1", "p", "img"];
  elements.forEach(function(element) {
    $(element).click(function() {
      alert("This is a " + element + " tag.");
    });
  });
});
