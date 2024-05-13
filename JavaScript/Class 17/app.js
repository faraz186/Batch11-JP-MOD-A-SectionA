// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
  
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "**************************************",
  authDomain: "***************************",
  projectId: "********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "**********************************",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();

// Form Validation using Regex..

function changeIcon() {
  var passwordInput = document.getElementById("password");
  var img = document.getElementById("img");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    img.src = "./images/invisible.png";
  } else {
    passwordInput.type = "password";
    img.src = "./images/show.png";
  }
}

function signUp() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var mobileNumber = document.getElementById("mobileNumber").value;

  var userCheck = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

  var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  var mobileCheck =
    /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

  if (userCheck.test(username)) {
    document.getElementById("usernameError").innerHTML = "";
  } else {
    document.getElementById("usernameError").innerHTML = "** Invalid username";
    return false;
  }

  if (emailCheck.test(email)) {
    document.getElementById("emailError").innerHTML = "";
  } else {
    document.getElementById("emailError").innerHTML = "** Invalid email";
    return false;
  }

  if (passwordCheck.test(password)) {
    document.getElementById("passwordError").innerHTML = "";
  } else {
    document.getElementById("passwordError").innerHTML = "** Invalid password";
    return false;
  }

  if (mobileCheck.test(mobileNumber)) {
    document.getElementById("mobileError").innerHTML = "";
  } else {
    document.getElementById("mobileError").innerHTML =
      "** Invalid mobileNumber";
    return false;
  }

  var obj = {
    username,
    mobileNumber,
  };

  localStorage.setItem("obj", JSON.stringify(obj));

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      firebase
        .auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          console.log("email sent");
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // window.location = "profile.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     if (location.pathname !== "/profile.html") {
//       window.location = "profile.html";
//     }
//     console.log(user);
//   } else {
//     if (
//       location.pathname !== "/login.html" &&
//       location.pathname !== "/signup.html"
//     ) {
//       window.location = "login.html";
//     }

//     console.log("not login");
//   }
// });

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logout successfully..");
    })
    .catch((error) => {
      console.log(error);
    });
}

function forgotPassword() {
  var email = document.getElementById("email").value;

  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      console.log("passsword reset email sent");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function LoginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorMessage);
    });
}

function LoginWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(errorMessage);
    });
}
  
