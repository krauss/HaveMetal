$(document).ready(function(){

    //Creates the JQuery date picker
    $("#dob").datepicker({
      changeMonth: true,
      changeYear: true
    });



    //Creates the JQuery checkbox radio
    $("input[type='radio']").checkboxradio();

    // Check if the page has loaded completely
    $(document).ready( function() {
      setTimeout( function() {
          $('.div_success_bloke').load('../index.php');
      }, 3000);
    });

    //The home button on the login page
    $("#back_index_page").click(function(){
      window.location = 'index.php';
    });

});

function getErrorDiv(){
    $("#signup_msg").addClass('ui-state-error ui-corner-all');
}
