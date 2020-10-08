// Collaborated with Ethan Wager on this assignment.

// Assignment Code
let generateBtn = document.querySelector("#generate");

// when click Generate password it alerts for the following criteria
// first alert = userFeedback2 ( should be able to select between 8 and 128 characters)
// second alert = Character types ( lowercase, upperCase, numeric, and/or special characters.) Should be able to select more than one
// Then password is generated and shown on screen

// Write password to the #password input

/*
let numArr = [0,1,2,3,4,5,6,7.8.9];
let lowercase = str.toLocaleLowerCase();
let upperCase = str.toLocaleupperCase();
let specialCharacters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let passwordOption = passwordText.concat(numeric,lowercase,upperCase,specialCharacters)
let passwordOption = passwordText.join (passwordText(''))
*/

/*
numeric.push();
lowercase.push();
upperCase.unshift();
specialCharacters.unshift();
*/

// Prompt questions and answer section
function userFeedback2() {
  let userFeedback2 = prompt(
    "Between 8 and 128 characters, how long would you like your password to be?"
  );
  //User determines how many characters they would like the PW to be
  if (userFeedback2 < 8 || userFeedback2 > 128) {
    alert("Please enter a number between 8 and 128.");
  } else {
    let lowerCase = confirm("Would you like to use lowerCase characters?");
    let upperCase = confirm("Would you like to use upperCase characters?");
    let specialCharacters = confirm("Would you like to use specialCharacters?");
    let numbers = confirm("Would you like to use numbers?");
    let userAnswers = {
      userFeedback2: userFeedback2,
      lowerCase: lowerCase,
      upperCase: upperCase,
      specialCharacters: specialCharacters,
      numbers: numbers,
    };
    console.log(userAnswers);
    return userAnswers;
  }
}

function writePassword() {
  let userFeedback22 = userFeedback2();
  console.log(userFeedback22);
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //let passwordOption = Math.floor(Math.random() * numArr.userFeedback2);
  return passwordOption;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
