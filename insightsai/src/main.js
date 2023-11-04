import '../style.css'
import './script.js';

$(document).ready(function() {
    // Select the "welcome" element
    var $welcome = $("#welcome");
  
    // Fade out the "welcome" element over a duration of 2 seconds
    $welcome.fadeOut(2000, function() {
        // Once the fade out is complete, you can perform additional actions here if needed
    });
  });
  
// Path: insightsai/src/script.js

