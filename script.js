// Assignment code here
const UPPERCASEARRY = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
const LOWERCASEARRY= [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
const SPECIALCHARARRY = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
const NUMERICVALUEARRY = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

 function passwordCredentials () {
   //password length
 var password_length = parseInt(window.prompt("Choose length 8-128 characters"));
 if(Number.isNaN(password_length)) {
   alert("Must put a value in!");
   return null;
 }

 if (password_length < 8) {
   alert("Password must be atleast eight characters!");
   return null;
 }

 if (password_length > 128) {
   alert("Password must be less than 128 characters!");
   return null;
 }
 console.log(password_length);
 //Uppercase
var hasUpperCase = confirm("Do you want Uppercase letters?");
console.log(hasUpperCase);
 //lowercase
 var hasLowerCase = confirm("Do you want Lowercase letters?");
console.log(hasLowerCase);
 //numeric
 var hasNumericValue = confirm("Do you want to include Numeric Values?");
console.log(hasNumericValue);
 //special characters
 var hasSpecialChar = confirm("Do you want to include Special Characters?");
console.log(hasSpecialChar);
if (hasUpperCase === false && hasLowerCase=== false && hasNumericValue === false && hasSpecialChar === false) {
  alert("You must select at least One option.");
  return null;
}
const passwordOption  = {
  passLength: password_length, 
  hasUpperCase: hasUpperCase,
  hasLowerCase: hasLowerCase,
  hasNumericValue: hasNumericValue,
  hasSpecialChar: hasSpecialChar,
};
return passwordOption;

}

 function generatePassword () {
var openQuestion = passwordCredentials();
let allChars = [];
let passwordResults = [];
if (openQuestion.hasUpperCase) {
allChars = allChars.concat(UPPERCASEARRY);
console.log("uppercase", allChars);
}

if (openQuestion.hasLowerCase) {
  allChars = allChars.concat(LOWERCASEARRY);
  console.log("uppercase +lowercase", allChars);
  }

  if (openQuestion.hasNumericValue) {
    allChars = allChars.concat(NUMERICVALUEARRY);
    console.log("uppercase +lowercase + numeric", allChars);
    }

    if (openQuestion.hasSpecialChar) {
      allChars = allChars.concat(SPECIALCHARARRY);
      console.log("uppercase +lowercase + numeric + special", allChars);
      }
    

//console.log("What is my password option", openQuestion);
 for (var i =0; i < openQuestion.passLength; i++) {
   var getCharacter = getRandom(allChars);
  // console.log(getCharacter);
  passwordResults.push(getCharacter);
  console.log(passwordResults);
 }
return passwordResults.join("");
//numeric
  //symbol
}
function getRandom (array) {
  //console.log("array length", array.length);
  var index = Math.floor(Math.random () * array.length);
  return array[index];
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
