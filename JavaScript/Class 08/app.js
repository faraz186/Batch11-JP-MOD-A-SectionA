function abc() {
  alert("onclick event call");
}

function over(e) {
console.log(e);
  var image = document.getElementById("img");
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzMvVqWGqvRosk_WpMeXx7bIEUdeywb9LTAFb91d0rw&s";  
  
  image.style.transform = scale(2.5);
  console.log("over call");
}

function out(e) {
console.log(e);

  var image = document.getElementById("img");
  image.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-NgFp9NUXZ9sDLcn5z9T2AJBfyTODDMnubQOnPaIMw&s";  
  image.style.transform = scale(1);

  console.log("out call");
}

console.log(document);

var anchor = document.getElementById("link");

anchor.href = "https://www.google.com";

anchor.style.color = "red";

console.log(anchor);

function submit() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value && password.value) {
    console.log(username.value);
    console.log(password.value);
  } else {
    alert("please fill input fields...");
  }
}

function set() {
  var input = document.getElementById("field");
  input.value = "faraz";
}

set();

// function submit() {
//   // var select = document.getElementById("dropdown");
//   var radio = document.getElementsByName("gender");

//   for (var i = 0; i <= radio.length; i++) {

//     if (radio[i].checked) {
//       console.log(radio[i].value);
//     }
//   }
// }

// var para = document.getElementById("para");

// para.innerText = "<h1>this is an example..</h1>";

// console.log(para);

function expandPara() {
  var shortText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  var CompleteText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugit praesentium illo ab omnis cumque. Mollitia consequatur corrupti quae enim laborum iste doloribus officiis unde quibusdam recusandae, cupiditate expedita praesentium soluta dolores blanditiis? Quidem itaque minima in ducimus fugiat, vel repellat laboriosam quod magni consectetur animi, natus omnis! Voluptatem, dolorum?";
  var para = document.getElementById("para");
  var link = document.getElementById("link");

  if (link.innerHTML === "Read more") {
    para.innerHTML = CompleteText;
    link.innerHTML = "Read less";
  } else {
    para.innerHTML = shortText;
    link.innerHTML = "Read more";
  }
}
