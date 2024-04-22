function makeInvisible() {
  var imageElement = document.getElementById("img");
  imageElement.className += " hidden";
  console.log(imageElement);
}

// function over(e) {
//   e.src =
//     "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960";
// }

// function out(e) {
//   e.src =
//     "https://i.natgeofe.com/n/10fae74b-e7f8-4c72-8250-1165232e3da6/dive1470.great_.fish_.web2__3x2.jpg";
// }

// function changeImage(EleID, ImgSrc) {
//   document.getElementById(EleID).src = ImgSrc;
// }

// var paras = document.getElementsByClassName("para");

// for (var i = 0; i <= paras.length - 1; i++) {
//   console.log(paras[i]);
// }
// console.log(paras);

// var paras = document.getElementsByTagName("p");

// console.log(paras);

// var div = document.getElementById("main");

// console.log(div);

// var p = div.getElementsByTagName("p");

// console.log(p);

// var paras = document.querySelectorAll(".para");

// console.log(paras);

// setInterval

// var interval;

// function timer() {
//   console.log("test...");
// }

// setTimeout(timer, 5000);

// interval = setInterval(timer, 500);

// function stop() {
//   clearInterval(interval);
// }

// setTimeout(() => {}, timeout);

console.log(document.childNodes[1].childNodes[2].childNodes);
