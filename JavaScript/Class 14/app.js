//      Object

var objarr = [
  {
    id: 1,
    name: "abc",
    status: true,
  },
  {
    id: 2,
    name: "xyz",
    status: false,
  },
  {
    id: 3,
    name: "mno",
    status: true,
  },
];

console.log(objarr[1].name);

// Local Storage

var arr = [{ name: "faraz", age: 23 }, "abc", false];

localStorage.setItem("arr", JSON.stringify(arr));

var getData = localStorage.getItem("arr");

console.log(JSON.parse(getData));

function getValue() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var arr = [];
  var obj = {
    name,
    email,
  };
  arr.push(obj);

  localStorage.setItem("username", JSON.stringify(arr));
}
