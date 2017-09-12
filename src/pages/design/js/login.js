
$(document).ready(function(){

    //The home button on the login page
    $("#back_index_page").click(function(){
      window.location = 'index.php';
    });

});

function getErrorDiv(){
    $("#login_msg").addClass('ui-state-error ui-corner-all');
}
