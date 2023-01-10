// Array of special characters to be included in password
var specialCharacters = [
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

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Initialize variables
let myPassword, validator;

// Function that prompts user for password
function getPasswordOptions() {

  // Prompt user for password 
  myPassword = prompt("Please enter password: ");
  
  // Validate lower limit of password length
  if(myPassword.length >= 10) {
    
    // Validate for upper limit of password length
    if(myPassword.length <= 16) {
      
      // Validate for numeric characters in password
      for(let i = 0; i < numericCharacters.length; i++) {
        if(myPassword.includes(numericCharacters[i])) validator = true;
      }
      
      if(validator) {
        validator = false;
        
        // Validate for lower case letters in password
        for(let i = 0; i < lowerCasedCharacters.length; i++) {
          if(myPassword.includes(lowerCasedCharacters[i])) validator = true;
        }
        
        if(validator) {
          validator = false;
          
          // Validate for upper case letters in password
          for(var i = 0; i < upperCasedCharacters.length; i++) {
            if(myPassword.includes(upperCasedCharacters[i])) validator = true;
          }
          
          if(validator) validator = false;
          else {
            alert("Password must include upper cased characters characters!");
            getPasswordOptions();
          }
        } else {
          alert("Password must include lower cased characters characters!");
          getPasswordOptions();
        }
      } else {
        alert("Password must include numeric characters!");
        getPasswordOptions();
      }
    } else {
      alert("Password must not exceed 16 characters!");
      getPasswordOptions();
    } 
  } else {
    alert("Password must contain 10 characters or more!");
    getPasswordOptions();
  }
    
}

// Function for getting a random element from an array
function getRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Function to generate password with user input
function generatePassword() {
  // Prompt user for password input
  getPasswordOptions();

  let newPassword = [];
  // Generate password
  for(let i = 0; i < myPassword.length; i++) {
    newPassword.push(myPassword[getRandom(myPassword)]);
  }
  return newPassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);