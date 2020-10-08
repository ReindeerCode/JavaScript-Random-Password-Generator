// Assignment Code
let generateBtn = document.querySelector("#generate");

// when click Generate password it alerts for the following criteria
// first alert = length ( should be able to select between 8 and 128 characters)
// second alert = Character types ( lowercase, uppercase, numeric, and/or special characters.) Should be able to select more than one
// Then password is generated and shown on screen

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let passwordOption = Math.floor(Math.random() * Array.length);
  return passwordOption;
}

function length() {
  var length = prompt("How long would you like your password to be? Character MIN is 8 and MAX is 128",);
  if (length > 8 < 128) {
    function type = prompt(What kind of characters would you like to use?);
  } else {
    txt = "Please enter a number between 8 and 128";
  }
/*
numeric.push();
lowercase.push();
uppercase.unshift();
specialcharacters.unshift();

let lowercase = str.toLocaleLowerCase();
let uppercase = str.toLocaleUpperCase();
let specialcharacters = (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
let passwordOption = passwordText.concat(numeric,lowercase,uppercase,specialcharacters)
let passwordOption = passwordText.join (passwordText(''))
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
