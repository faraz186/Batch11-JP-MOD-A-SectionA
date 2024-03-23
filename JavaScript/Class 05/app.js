var text =
  "The New Yorker magazine doesn't allow the phrase World war II. They say it should be World war II";

var indexNumber = text.lastIndexOf("World war II");

var firstText = text.slice(0, indexNumber);

var replaceText = "tHE sECOND WORLD WAR";

var remainText = text.slice(indexNumber + 12);

console.log(firstText + replaceText + remainText);

console.log(text.replace("World war II", "The Seond world War"));

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 7) === "British") {
    text = text.slice(0, i) + "Pakistan" + text.slice(i + 7);
  }
}

console.log(text);

var name = "abc";

name = name + 123;

name += 123;

console.log(name);

palindrome words

civic
refer
level
deed.
peep.
wow.
noon.

faraz  civic

zaraf  civic

var word = prompt("Enter a word....");
var update = "";

for (var i = word.length - 1; i >= 0; i--) {
  update += word[i];
}

if (word === update) {
  console.log("it is a plaindrome word..");
} else {
  console.log("it is not a plaindrome word..");
}

var number = 12.912;

console.log(Math.floor(number));

console.log(Math.ceil(number));

console.log(Math.round(number));

console.log(Math.random() * 10);

var headUser = prompt("Enter your name");
var tailUser = prompt("Enter your name");

var toss = Math.random() * 2;

var convert = Math.floor(toss);

if (convert === 0) {
  console.log(headUser, " win the toss");
} else {
  console.log(tailUser, " win the toss");
}

var randomValues =
  "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

console.log(randomValues.length);

for (var i = 0; i <= 10; i++) {
  var randomNum = Math.floor(Math.random() * randomValues.length);
  console.log(randomValues[randomNum]);
}

var password = " ";
var char;
for (var i = 0; i < 10; i++) {
  char = Math.floor(Math.random() * randomValues.length + 1);
  password += randomValues.charAt(char);
}
document.write(password);

for (var i = 0; i < 10; i++) {
  console.log(i);
}

var name = "faraz";

console.log(name[0]);

var random = Math.random() * 10;

console.log(random.toFixed(6));

var number = 10;

console.log(typeof number.toString());

var name = "hello my name is john..";

console.log(name.slice(6, 16));

console.log(name[6]);

var located = name.charAt(14);

console.log(located);