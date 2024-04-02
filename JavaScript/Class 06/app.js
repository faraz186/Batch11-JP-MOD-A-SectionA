var Newyeardate = new Date("1 january 2025").getTime();    
                 
var currentDate = new Date().getTime();   
      
var diff = Newyeardate - currentDate;      

var days = diff / (1000 * 60 * 60 * 24);  

var months = diff / (1000 * 60 * 60 * 24 * 30);
      
console.log("days left==>", days);
   
// console.log("months left==>", months);  
   
console.log("Newyeardate==>", Newyeardate);

console.log("currentDate==>", currentDate);   


var DaysArr = ["sunday", "Monday", "Tuesday", "Wednesday", "thursday", "friday", "Saturday"];

console.log(date.getTime());


var date = new Date();

console.log(date.setFullYear(2020));


// Switch Case

var userInput = +prompt("Enter what day is today?");

switch (userInput) {
    case 17:
        alert("Boring day");
        break;
    case 18:
        alert("Eligible..");
        break;
    default:
        alert("not found..")
// }

// FOR LOOP

for (var i = 0; i < 0; i++) {
    console.log(i);
}

// WHILE LOOP

var i = 0;
while (i < 1) {
    console.log(i);
    i++
}

// DO-WHILE LOOP

var i = 0;
        
do {
    console.log(i);
    i++;
} while (i < 0)


// FUNCTIONS

function faraz() {  // parameter

    var firstName = prompt("Enter first name");

    var lastname = prompt("Enter last name");

    console.log(firstName + ' ' + lastname);

    // console.log(num1 + num2);
}

faraz()  // argument






