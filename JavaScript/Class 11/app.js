var list = document.getElementById("list");

function addTodo() {
  var input = document.getElementById("todoInput");

  //   console.log(input.value);

  var liElement = document.createElement("li");

  var liText = document.createTextNode(input.value);
  
  liElement.appendChild(liText);

  list.appendChild(liElement);

  //   console.log(liElement);

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

function EditItem(e) {
  var updateValue = prompt(
    "Enter updated value",
    e.parentNode.firstChild.nodeValue
  );

  e.parentNode.firstChild.nodeValue = updateValue;
}

var text = "How are you doing today?";

var myArray = text.split("  ");

var combine = myArray.join(",");

console.log(combine);

var arr = [1, "faraz", true];

console.log(typeof arr);

console.log(arr);

var Studentobj = {
  name: "Muhammad faraz",
  age: 23,
  email: "faraz@gmail.com",
  address: "karachi",
};

Studentobj.section = "A";

console.log(Studentobj);
