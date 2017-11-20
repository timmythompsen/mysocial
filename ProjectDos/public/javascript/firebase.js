  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9P_pwSntEpaYayjDHdv3qjf4NPtcqVTg",
    authDomain: "social-dash-2dce0.firebaseapp.com",
    databaseURL: "https://social-dash-2dce0.firebaseio.com",
    projectId: "social-dash-2dce0",
    storageBucket: "social-dash-2dce0.appspot.com",
    messagingSenderId: "1087841028961"
  };
  firebase.initializeApp(config);

  /******/
 //Login Modal Function
 /******/
 // Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
var loginBtn = $("#btnLogin");
loginBtn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
$(".close").on('click', function(){
  modal.style.display = "none";
})
// span.onclick = function() {
//     modal.style.display = "none";
// }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/******/
 //Signup Modal Function
 /******/
 // Get the modal
var modalSignUp = document.getElementById('signUpModal');
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
    modalSignUp.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
$(".close").on('click', function(){
  modalSignUp.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modalSignUp) {
        modalSignUp.style.display = "none";
    }
}


