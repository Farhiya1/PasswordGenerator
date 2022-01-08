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
