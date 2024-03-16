// var userInput = prompt("Enter Where do you live??");

// var firstChar = userInput.slice(0,1).toUpperCase();

// var remainChar = userInput.slice(1).toLowerCase();

// var combineInput = firstChar + remainChar

// var cityArr = ["Karachi","Lahore","Peshawar","Islamabad"];

// var faraz = "false";

// for(var i = 0;i<cityArr.length;i++) 
// {
//     if(combineInput === cityArr[i]){
//         faraz = "true"
//     }

// }

// if(faraz === 'true'){
//     console.log("city found..")
// }
// else{
//     console.log("not found")
// }



// var name = "MR. johnson";

// console.log(name.slice(0,4))


// var text = "My name is Muhammad Faraz"

// for(var i = 0; i<text.length;i++)
// {
//     if(text.slice(i,i+2) === "  "){
//         alert("double spaces found...")
//     }
// }



// var text = "The New Yorker magazine doesn't allow the phrase World War II.";

var name = "my name is Muhammad faraz";

for(var i =0;i<text.length;i++)
{
    if(text.slice(i,i+12)=== "World War II"){
        text = text.slice(0,i) + "The Second world war";
        console.log(text)
    }
}