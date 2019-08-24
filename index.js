$(document).ready(function() {
 $('.image').click(function(event) {
   const x = $(this).css('background-image');
   $('#exampleModal').modal('toggle');
   $('.modal-body').css("background-image", x);
 });
});

