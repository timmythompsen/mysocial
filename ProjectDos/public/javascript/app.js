// ===== FUNCTIONS TO COMMUNICATE WITH DB ===== //

// This function inserts a new user into the DB
function insertUser(event) {
  // event.preventDefault();
  var user = {
    name: txtDispName.value,
    email: txtEmail2.value,
    facebook_name: txtFBName.value,
    twitter_name: txtTwitterName.value,
    insta_name: txtInstagramName.value
  };

  $.post("api/users", user, function(result) {
    console.log('post result: ', result);
    console.log('post successful');
  });

};

// This function updates a user's info
function updateUser(event) {
  var id=sessionStorage.getItem("UserID");
  console.log('updateUser var id: ', id);
  console.log("/api/users/"+id);

  var user = {
    name: stgFullName.value,
    name_first: stgFirstName.value,
    name_last: stgLastName.value,
    facebook_name: stgNameFB.value,
    twitter_name: stgNameTwitter.value,
    insta_name: stgNameInsta.value,
    li_name: stgNameLI,
    interest1: stgInt1,
    interest2: stgInt2,
    interest3: stgInt3,
    profile_pic: stgProfilePic
  };  

  $.put("/api/users/"+id, user, function(result) {
    console.log('update result: ', result);
    console.log('update successful');

  })  
}

// This function retrieves the current user's record
function findUser(event) {
  // event.stopPropagation();
  var id = sessionStorage.getItem("UserID");
  console.log('findUser var id: ', id);
  console.log("/api/users/"+id);

  $.get("/api/users/"+id, function(data) {
    console.log('post result: ', data);
    console.log('post successful');
    console.log('twitter id ',data[0].twitter_name);

    // store values from mySql to session storage
    // UniqueID and UserID are stored to sessionStorage
    // from the Firebase API
    sessionStorage.setItem("email", data[0].email);    
    sessionStorage.setItem("FullName", data[0].name);
    sessionStorage.setItem("name_first", data[0].name_first); 
    sessionStorage.setItem("name_last", data[0].name_last);       
    sessionStorage.setItem("TwitterID",data[0].twitter_name);
    sessionStorage.setItem("FaceBookID",data[0].facebook_name);
    sessionStorage.setItem("InstaID",data[0].insta_name);
    sessionStorage.setItem("LinkedInID", data[0].li_name);
    sessionStorage.setItem("interest1", data[0].interest1);
    sessionStorage.setItem("interest2", data[0].interest2);
    sessionStorage.setItem("interest3", data[0].interest3);
    sessionStorage.setItem("profile_pic", data[0].profile_pic);                   
  });
  
};

