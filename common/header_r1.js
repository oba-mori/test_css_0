$(document).ready(function() {
  $('header').load('../common/header_r1.html header', function(response, status, xhr) {
      if (status == "error") {
          console.log("Error: " + xhr.status + ": " + xhr.statusText);
      }
  });
});