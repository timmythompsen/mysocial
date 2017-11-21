window.onload=(function() {
  console.log("auth.js function called");
  var UserID;
  var loggedInAs;  

  // input from signup screen
  const txtDispName=document.getElementById('txtDispName')
  const txtEmail=document.getElementById('txtEmail');
  const txtPassword=document.getElementById('txtPassword');
  const txtTwitterName=document.getElementById('txtTwitterName');
  const txtFBName=document.getElementById('txtFBName');
  const txtInstagramName=document.getElementById('txtInstagramName');

  // login,signup, logout buttons on modals
  const btnLogin=document.getElementById('btnLogin');
  const btnSignUp=document.getElementById('btnSignUp');
  const btnLogout=document.getElementById('btnLogout');

  // login, signup, logout buttons on home page nav bar
  const nbBtnLogin=document.getElementById('nbBtnLogin');
  const nbBtnLogout=document.getElementById('nbBtnLogout');
  const nbBtnSignUp=document.getElementById('nbBtnSignUp');

  // open login modal
  nbBtnLogin.addEventListener('click', e=> {
    console.log("login button clicked");
    modal.style.display = "block";    
  })

    // open sign-up modal
  nbBtnSignUp.addEventListener('click', e=> {
    console.log("Sign Up button clicked");
    modalSignUp.style.display = "block";
  });

  // add login event
  btnLogin.addEventListener('click', e=> {
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));
    promise.catch(e=> location.reload());
    modal.style.display = "none";
  });

  btnSignUp.addEventListener('click',e=> {
    // get email and password
    // TODO: check for real email
    const dispName = txtDispName.value;
    const email = txtEmail2.value;
    const pass = txtPassword2.value;
    const auth = firebase.auth();
    modalSignUp.style.display = "none";    
    console.log(dispName);
    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass).then(function(user){
      console.log("user created ", user);
        // [END createwithemail]
        // callSomeFunction(); Optional
        // var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: dispName
        }).then(function() {
            // Update successful.
            insertUser(); // inserts record into mysql using sequelize
            $("#loggedInAs").html("Logged in as: " + user.displayName + "   ");
        }, function(error) {
            // An error happened.
        });        
    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            console.error(error);
            alert(error);
            
        }     
        
    })
  });

  nbBtnLogout.addEventListener('click',e=> {
    console.log("btnLogout clicked");
    $("#loggedInAs").html("");
    firebase.auth().signOut();
    location.reload();

  });

  nbUpdateFeeds.addEventListener('click', e=> {
    console.log("nbUpdateFeeds clicked");
    getAllFeeds();
  });

  // add real time listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      sessionStorage.setItem("UniqueID",firebaseUser.uid);
      console.log("Unique Id (sessionStorage: UniqueID): " + sessionStorage.getItem("UniqueID"));
      sessionStorage.setItem("UserID",firebaseUser.email);
      console.log("User email/login (sessionStorage: UserID): " + sessionStorage.getItem("UserID"));
      // sessionStorage.setItem("TwitterID",txtTwitterName.value);
      // console.log("TwitterName (sessionStorage: TwitterID): " + sessionStorage.getItem("TwitterID"));      
      // var favorite=database.ref("/userSpots/"+ sessionStorage.getItem("UniqueID")+"/");
      // console.log(favorite);
      // btnLogout.classList.remove('hide');
      nbBtnLogout.classList.remove('hide');
      nbUpdateFeeds.classList.remove('hide');
      nbBtnLogin.classList.add('hide');
      nbBtnSignUp.classList.add('hide');
      console.log(firebaseUser.hasOwnProperty('displayName'), firebaseUser.displayName);
      if(firebaseUser.displayName === undefined || firebaseUser.displayName === null) {
        return;
      } else {
        $("#loggedInAs").html("Logged in as: " + firebaseUser.displayName + "   ");
        findUser();
        // var loggedIn = $("#nbBtnLogin");
        // $(loggedIn).replaceWith("<button class='btn btn-outline-success my-2 my-sm-0 btn-static'>" + "<span class='glyphicon glyphicon-tint blue'></span>" + "Username: " + firebaseUser.displayName + "</button>");
      }
    } else {
      console.log('not logged in'); 
      nbBtnLogout.classList.add('hide');
      nbUpdateFeeds.classList.add('hide');
      nbBtnLogin.classList.remove('hide');
      nbBtnSignUp.classList.remove('hide');  
    }
  });

  // ===== FEEDS ===== //

  // Function to get feeds
  function getAllFeeds() {
    getFavTweets();
    // get FB, Instagram, etc functions go here
  };

 });
