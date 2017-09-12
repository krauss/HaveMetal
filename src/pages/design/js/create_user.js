
$(document).ready(function(){

    //Vertically alignment function for Login and Sig-In divs
    $(function() {

      $('.container').css({
        'top' : '50%',
        'margin-top' : -$('.container').outerHeight()/2
      });

    });

    //Check if the page has loaded completely
    $(document).ready( function() {
      setTimeout( function() {
         window.location = '../index.php';
      }, 3500);
    });

});
