$(function() {
  // We can attach the `fileselect` event to all file inputs on the page
  $(document).on('change', ':file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
  });

  // We can watch for our custom `fileselect` event like this
  $(document).ready( function() {
      $(':file').on('fileselect', function(event, numFiles, label) {

          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }

      });
  });
});

//thank you

$('form').submit(function(){
  $('.thanks').show();
  $('.thanks').delay(2000).fadeOut();
  window.setInterval(function() {
    window.location.reload();
    $('form input#name').focus();
    }, 2500);
  event.preventDefault(); 
});

// updates data in db on click of setting.html/stgSubmit
stgSubmit.addEventListener('click', e=> {
  console.log('stgSubmit button clicked');
  updateUser();
});

// update fullnametest 
$(document).ready(function() {
  console.log('setting page ready');
  $("#stgFullName").val(sessionStorage.getItem("FullName"));
  $("#stgFirstName").val(sessionStorage.getItem("name_first"));
  $("#stgLastName").val(sessionStorage.getItem("name_last"));
  $("#stgEmail").val(sessionStorage.getItem("email"));
  $("#stgInt1").val(sessionStorage.getItem("interest1"));
  $("#stgInt2").val(sessionStorage.getItem("interest2"));
  $("#stgInt3").val(sessionStorage.getItem("interest3"));
  $("#stgProfilePic").val(sessionStorage.getItem("profile_pic"));
  $("#stgNameFB").val(sessionStorage.getItem("FaceBookID"));
  $("#stgNameTwitter").val(sessionStorage.getItem("TwitterID"));
  $("#stgNameInsta").val(sessionStorage.getItem("InstaID"));
  $("#stgNameLI").val(sessionStorage.getItem("LinkedInID"));
});