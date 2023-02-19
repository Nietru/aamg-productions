$(document).ready(function () {
  // sticky think makes the nav bar change color on scroll, .sticky was from html and stickyadd was added dynamically here with jquery
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });
});
