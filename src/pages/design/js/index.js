
$(document).ready(function(){

    var mn = $(".main_nav");

    $(window).scroll(function(){
      if ($(this).scrollTop() > 250) {
          mn.addClass("main_nav_scrolled");
      }else {
          mn.removeClass("main_nav_scrolled");
      }
    });

});

function myFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "main_nav") {
    x.className += " responsive";
  } else {
    x.className = "main_nav";
  }
}
