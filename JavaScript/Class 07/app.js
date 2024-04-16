// function

function abc() {
    console.log("hello function..")

}

abc() // function calling
abc() // function calling
abc() // function calling
abc() // function calling
abc() // function calling


function sum(a, b, c) {
    var result = a + b + c;
    return result
}

// var res = sum(10, 20, 30);
// console.log(res);


// var arr = [1, 2, 3, 4, 5, 6];

// var res = arr.slice(0, 3)

// console.log(res);


// function biodata(firstName, lastName, age, city) {
//     var completeData = "Hello my name is " + firstName + " " + lastName + ". my age is " + age + ". i live in " + city;
//     return completeData
// }

// console.log(biodata('Muhammad', "faraz", 20, 'karachi'));



// function multiplicationTable(number, len) {
//     var res = ""
//     for (var i = 1; i <= len; i++) {
//         res += number + "x" + i + "=" + number * i
//     }
//     return res
// }

// console.log(multiplicationTable(+prompt('enter a number'), +prompt('enter a length')));



// function calc(num1, opr, num2) {
//     if (opr === "+") {
//         return num1 + num2;
//     }
//     else if (opr === "-") {
//         return num1 - num2;

//     }
//     else if (opr === "*") {
//         return num1 * num2;

//     }
//     else if (opr === "/") {
//         return num1 / num2;
//     }
//     else {
//         return "invalid operator"
//     }


// }

// console.log(calc(2, "+", 6));

// console.log(calc(10, "-", 5));

// console.log(calc(12, "$", 3));





// Switch statement

// function calc(num1, opr, num2) {
//     switch (opr) {

//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//         case "%":
//             return num1 % num2;

//         default:
//             return "invalid operator"


//     }
// }

// console.log(calc(2, "+", 6));

// console.log(calc(10, "-", 5));

// console.log(calc(12, "$", 3));

// var a = 20;


function foo() {
    var a = 10;

}

console.log(a);
foo()

