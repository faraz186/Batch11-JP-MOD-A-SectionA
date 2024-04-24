var heading = document.getElementById("heading");
var main = document.getElementById("main");
var link = document.getElementById("link");

console.log(main.attributes[0].value);

// link.setAttribute("href", "https://www.google.com");

// link.href = "https://www.google.com";

var paraElement = document.createElement("p");

var paraText = document.createTextNode("hello world");

paraElement.appendChild(paraText);

console.log(paraElement);

var main = document.getElementById("main");

main.appendChild(paraElement);

var anchorElement = document.createElement("a");

var anchorText = document.createTextNode("google");

anchorElement.appendChild(anchorText);

anchorElement.setAttribute("href", "https://www.google.com");

main.appendChild(anchorElement);

var divElement = document.createElement("div");

divElement.setAttribute("id", "main");

console.log(divElement);

// paraElement.innerHTML = paraText;
// console.log(paraText);
