
// initial page load

$( document).ready(function() {
    
    // async load css by flipping the media attribute to all
    $('link[rel="stylesheet"]').attr('media', 'all');
    
    //Turbolinks.ProgressBar.start();
    
    console.log("blajfdlksjalaskdfjfasd");

    
});


// page loaded via turbolinks

$(document).on('page:load', function(event) {
  
 	console.log("this was loaded on turbolinks page load");
  
});