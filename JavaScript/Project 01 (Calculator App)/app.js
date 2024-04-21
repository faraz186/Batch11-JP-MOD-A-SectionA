function getValue(e) {
  var input = document.getElementById("inputField");
  input.value += e;
  //   console.log(e);
}

function clrAll() {
  var input = document.getElementById("inputField");
  input.value = "";
}

function deletechar() {  
  var input = document.getElementById("inputField");
  input.value = input.value.slice(0, -2);
}

function square() {
  var input = document.getElementById("inputField");
  input.value = input.value * input.value;
}  

function equal() {
  var input = document.getElementById("inputField");

  if (!input.value) {
    alert("Enter expression..");
  } else {
    input.value = eval(input.value);
  }
}
