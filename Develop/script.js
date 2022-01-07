// Assignment Code
// This variable targets the generate button id in html line 29. Which refers to the red button. See line 15 on JS.
var generateBtn = document.querySelector("#generate");

// Creating generatePaswword function
function generatePassword(){ 
    prompt ("Password criteria?")
    prompt ("length of the password")
    prompt ("character types to include in the password")

    // Testing to see if button works
    console.log("This button works!")

    /**
     
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
     * 
     * */ 

// 1. Prompt the user for password criteria
//  a. Password length (8 <128)
//  b. Lowercase, Uppercase, Numbers, Special Characters.


// 2. Validate the input.


// 3. Generate password based on criteria.


// 4. Display password to page (Done with return)
    return "Pius123#!"
}

// Write password to the #password input
// What happens in this function "writePassword" is that we are calling the "generatePassword function" and storing the value in the variable "password". So you need to create a generate password function.
function writePassword() {
  var password = generatePassword();
// This line targets the id "password" in html line 22. On the browser it's the text box that will display the generated password.
  var passwordText = document.querySelector("#password");
// This line takes the value from your generated password and plugs it into what is displayed on the screen
  passwordText.value = password;

}

// Add event listener to generate button
// When you click the generate button the writePassword function gets called.
generateBtn.addEventListener("click", writePassword);
