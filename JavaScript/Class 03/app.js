// For loop basically an iteration   

// basic syntax
    
// for(initiALIZATION,CONDITION,INCREMENT/DECREMENT){

// }

for (var i = 1; i < 10; i++) {
  console.log("Hello World");
}

var userInput = +prompt("Enter a number to generate a multiplication table");      

var tableRange = +prompt("Enter table range..");
    
for (var i = 1; i <= tableRange; i++) {   
  document.write(userInput + "x" + i + "=" + userInput * i + "<br>");        
}

var arr = ["karachi", "islamabad", "quetta", "lahore"];

console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var userInput = prompt("Where do you live??");

var cityArr = ["karachi", "lahore", "islamabad", "quetta"];

for (var i = 0; i < cityArr.length; i++) {
  if (userInput === cityArr[i]) {
    console.log("it is one of the cleanest city..");
  }
}

var userInput = prompt("Where do you live??");

var CapitalUserInput = userInput.toLowerCase();

var faraz = false;

var cityArr = ["karachi", "lahore", "islamabad", "quetta"];

for (var i = 0; i < cityArr.length; i++) {
  if (CapitalUserInput === cityArr[i]) {
    faraz = true;
  }
}

if (faraz) {
  console.log("it is one of the cleanest city..");
} else {
  console.log("not found..");
}

var arr = [
  ["abc", "xyz"],
  [true, 15],
];

for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

var arr = ["faraz", "hamza", "abc", 12, true];

console.log(arr[2]);

var str = "Muhammad Faraz";

var copy = str.slice(0, 8);

console.log(copy);

arr.push(false, 50);

arr.pop();

arr.unshift("faraz", "hamza");

var arr = ["apple", "banana", "orange", "mango", "water mallan"];

var copy = arr.slice(1, 5);

console.log(copy);

// array methods

// pop()
// shift()
// unshift()
// splice()
// slice()
