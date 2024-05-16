var firebaseConfig = {
  apiKey: "******************************************",
  authDomain: "*************************",
  projectId: "******************",
  databaseURL: "******************************",
  storageBucket: "***********************",
  messagingSenderId: "**************",
  appId: "*************************************************",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);  

var db = firebase.database();

// console.log(db);

var auth = firebase.auth();

// Store data in firebase database

// set()

// push()

function getVal() {
  var name = document.getElementById("name");
  var rollno = document.getElementById("rollno");

  var obj = {
    name: name.value,
    rollno: rollno.value,  
  };

  //   console.log(obj);

  var key = Date.now().toString(25);

  firebase
    .database()
    .ref("users/" + key)
    .set(obj);
}

// Get data from firebase database

// on()

// once()

function getDataFromDatabase() {
  firebase
    .database()  
    .ref("users")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();

// delete user from database...

function deleteuserFromDatabase() {
  firebase.database().ref("users").remove();
}

deleteuserFromDatabase();

// update user from database...

function updateUserFromDatabase() {
  firebase.database().ref("users/b635fmc9e").set({
    rollno: 456,
    name: "ali",
  });
}

updateUserFromDatabase();

//                  Google Auth

// function LoginWithGoogle() {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       console.log(errorMessage);
//     });
// }

//                  Github Auth

// function LoginWithGithub() {
//   var provider = new firebase.auth.GithubAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;

//       // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//       var token = credential.accessToken;

//       // The signed-in user info.
//       var user = result.user;
//       console.log(user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       console.log(errorMessage);
//     });
// }
