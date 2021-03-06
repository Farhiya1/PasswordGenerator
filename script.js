// Targeting button to generate password
var generateBtn = document.querySelector("#generate");

//Variable arrays which includes characters for user to choose from
var lowerCaseAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = [
  "!",
  ".",
  "#",
  "$",
  "%",
  "&",
  "*",
  "(",
  "^",
  ":",
  "?",
  "+",
  "=",
  ";",
  "±",
  "_",
  "-",
  "@",
  ")",
  "}",
  "{",
  "[",
  "]",
  "/",
  ">",
  "<",
];
var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Variables used for users input to confirm choice of character and to generate password
var lowerCase;
var upperCase;
var numberChar;
var specialChar;
var passwordLength;

// Genrating random characters through formula
function randomNumberGenerator(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

// Generating password
function generatePassword() {
  var availableCharacters = [];
  var generatedPassword = "";

  if (lowerCase) {
    availableCharacters = availableCharacters.concat(lowerCaseAlphabet);

    var randomNumber = randomNumberGenerator(lowerCaseAlphabet.length);

    generatedPassword += lowerCaseAlphabet[randomNumber];
  }

  if (upperCase) {
    availableCharacters = availableCharacters.concat(upperCaseAlphabet);

    var randomNumber = randomNumberGenerator(upperCaseAlphabet.length);

    generatedPassword += upperCaseAlphabet[randomNumber];
  }

  if (specialChar) {
    availableCharacters = availableCharacters.concat(specialCharacters);

    var randomNumber = randomNumberGenerator(specialCharacters.length);

    generatedPassword += specialCharacters[randomNumber];
  }

  if (numberChar) {
    availableCharacters = availableCharacters.concat(numberCharacters);

    var randomNumber = randomNumberGenerator(numberCharacters.length);

    generatedPassword += numberCharacters[randomNumber];
  }

  // A loop to generate random passwords depending on selected password length and selected characters from users input
  for (var i = generatedPassword.length; i < parseInt(passwordLength); i++) {
    var randomNumber = randomNumberGenerator(upperCaseAlphabet.length);

    generatedPassword += availableCharacters[randomNumber];
  }

  return generatedPassword;
}

// Asking user for password length using a prompt.
function promptForPasswordLength() {
  passwordLength = prompt("How long would you like your password to be?");
}

// Asking for user to input password based on the condition below.
function writePassword() {
  promptForPasswordLength();

  // Condition for password set. If not met, it will prompt password lenght until it is.
  while (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Please enter a number between 8 and 128, you entered: " + passwordLength
    );

    promptForPasswordLength();
  }

  // Asking user to confirm their choices in characters available.
  lowerCase = confirm(
    "Would you like to add a lowercase character ? Press ok if 'yes' or cancel if 'no'"
  );

  upperCase = confirm(
    "Would you like to add an uppercase character?Press ok if 'yes' or cancel if 'no'"
  );

  numberChar = confirm(
    "Would you like to add a number? Press ok if 'yes' or cancel if 'no'"
  );

  specialChar = confirm(
    "Would you like to add a special character?Press ok if 'yes' or cancel if 'no'"
  );

  // Generating password
  var password = generatePassword();
  // This targets the id "password" in html to display password in browser
  var passwordText = document.querySelector("#password");
  // This line takes the value from your generated password and plugs it into what is displayed on the screen
  passwordText.value = password;
}

// When you click the generate button the writePassword function gets called.
generateBtn.addEventListener("click", writePassword);
