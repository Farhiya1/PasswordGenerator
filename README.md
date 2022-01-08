# PasswordGenerator

An application that enables employees to generate random passwords based on criteria that they have selected.

<!--Why did I build this project-->

I built this project using a starter code so that I could apply the concepts of javascript that I have recently studied. Examples include: variables, functions, loops, if statements.

<!--Motivation behind this?-->

This project would allow me to learn how code written in jasavscript along side a html and css file would work. Specifically, understanding how interaction between a user and the browser works.

<!--What does this project solve and how was this achieved?-->

This project would solve the following.

1. When the generated button was clicked by the user the end result would result in a random password to be generated.

2. When the generate password button is clicked by user, for then to be an initial response from the broswer (first user-browser interaction).

3. When the user inputs response to browser the browser would respond with the criterias available for the user to include in their password.

This was achieved with an initial question that popped up on the browser. The question was "How long would you like your password to be?". This question had a condition for the lenght of the password which needed to be met to proceed. If condition wasn't met, the question would reappear in a loop.

This was also achieved with creating confirmation statements to choose from. In this case there were four different characters to include in their password (uppercase lowercase,special characters and numbers).

4. Once the criterias where set for the random characters to be included. The browser had to be able to return a random value that met all the criterias chosen by user.

This was achieved by using a formula to generate a random password.

<!--Criteria set to achieve this are the following:-->

```
GIVEN I need a new, secure password
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

<!--Instalation-->

To access this project the following links are provided:

<!--To access Github Repository -->

1. https://github.com/Farhiya1/PasswordGenerator

<!--To access Application deployed at live URL-->

2. https://farhiya1.github.io/PasswordGenerator/

<!--Screenshot changes made can be found in images-->

Screenshot of deployed application with initial starter code.

![Screenshot of deployed appliciation](./images/screenshot1.png)
![Screenshot of completed application](./images/screenshot2.png)

<!--References-->

1. https://birmingham.bootcampcontent.com/university-of-birmingham/
   UBHM-VIRT-FSF-PT-11-2021-U-LOL

2. https://coding-boot-camp.github.io/full-stack/github/
   professional-readme-guide

3. https://www.w3schools.com/js/js_loop_while.asp

4. https://www.javatpoint.com/random-string-generator-using-javascript

5. https://www.javascript.com/learn/conditionals

6. https://developer.mozilla.org/en-US/docs/Web/JavaScript/ReferenceStatements/if...else
