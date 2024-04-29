var list = document.getElementById("list");

function addTodo() {
  var input = document.getElementById("todoInput");

  //   console.log(input.value);

  var liElement = document.createElement("li");

  var liText = document.createTextNode(input.value);

  liElement.appendChild(liText);

  list.appendChild(liElement);

    console.log(liElement);

  var EditBtnELement = document.createElement("button");

  var EditBtnText = document.createTextNode("Edit");

  EditBtnELement.appendChild(EditBtnText);

  var DeleteBtnELement = document.createElement("button");

  var DeleteBtnText = document.createTextNode("Delete");

  DeleteBtnELement.appendChild(DeleteBtnText);

  liElement.appendChild(EditBtnELement);

  liElement.appendChild(DeleteBtnELement);

  EditBtnELement.setAttribute("class", "Editbtn");
  DeleteBtnELement.style.backgroundColor = "lightcoral";

  DeleteBtnELement.setAttribute("onclick", "deleteItem(this)");

  EditBtnELement.setAttribute("onclick", "EditItem(this)");
  input.value = "";
}

function deleteAll() {
  list.innerHTML = "";
}

function deleteItem(e) {
  console.log(e.parentNode.remove());
}

// function EditItem(e) {
//   var updateValue = prompt(
//     "Enter updated value",
//     e.parentNode.firstChild.nodeValue
//   );

//   e.parentNode.firstChild.nodeValue = updateValue;
// }

// var text = "How are you doing today?";

// var myArray = text.split("  ");

// var combine = myArray.join(",");

// console.log(combine);

// var arr = [1, "faraz", true];

// console.log(typeof arr);

// console.log(arr);

// var Studentobj = {
//   name: "Muhammad faraz",
//   age: 23,
//   email: "faraz@gmail.com",
//   address: "karachi",
// };

// Studentobj.section = "A";

// console.log(Studentobj);

//                         Simplify todo-App

function addTodo() {
  var input = document.getElementById("todoInput");

  console.log(input.value);

  var list = document.getElementById("list");

  list.innerHTML += `<li>${input.value}
  <button onclick="EditItem(this)">Edit</button>
  <button onclick="deleteItem(this)">Delete</button>
  </li>`;

  input.value = "";
}

function deleteAll() {
  var list = document.getElementById("list");

  list.innerHTML = "";
}

function deleteItem(e) {
  console.log(e.parentNode.remove());
}

function EditItem(e) {
  var updateValue = prompt(
    "Enter updated value",
    e.parentNode.firstChild.nodeValue
  );

  e.parentNode.firstChild.nodeValue = updateValue;
}

// Object

var obj = ["faraz", 23, true];

var studentObj = {
  name: "faraz",
  age: 23,
  status: true,
  courses: ["html", "css"],
  Education: {
    qualification: "Bachelors",
    CGPA: "3.6",
    Roll_No: "2020-186",
    city: {
      address: "gulshan",
      longitude: "2.15",
      latitude: "16.21",
    },
  },
};

var arr = ["faraz", { age: 23, city: "karachi" }];

console.log(arr[1].city);

var studentObj = {
  name: "faraz",
  age: 23,
  status: true,
  getName: function (e) {
    console.log(e);
  },
};

studentObj.getName("hello students");

console.dir(document);

// alert()

// console.log()

// document.write()

// Function Declaration

function abc() {}

// ananoymous function

var func = function () {
  console.log("ananoymous function call...");
};

// func();

// abc()

delete studentObj.Education;

delete studentObj.status;

console.log(studentObj);

console.log("email" in studentObj);

console.log(studentObj.Education.city.latitude);

studentObj.courses = ["html", "css"];

studentObj.courses.push("js");

// studentObj.courses.unshift("react"); 

console.log(studentObj.courses[1]);
