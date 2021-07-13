// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = window.confirm ("Do you want to include lowercase letters?")
var upperCase = window.confirm ("Do you want to include uppercase letters?")
var numeric = window.confirm ("Do you want to include numeric characters?")
var special = window.confirm ("Do you want to include special characters?")
var length = window.prompt ("How many characters, 8-128") 
function checklength() {
  if (length < 8 || length > 128) {
    length = window.prompt ("Value must be greater than 8 and less than 128")
    checklength()
  }
  else return
}
checklength()
console.log(length)
//store all character sets 
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()-_=+,./<>?;:";






  function generatePassword() {    
    //Store the password that returns
    var newpassword = ""

    //store string array of possible characters in password
    var possibleCharacters = ""
    //check if user wants lowercase and if yes, add lowercase to possible characters
    if (lowerCase) {
    //only execute if the condintion is true
      possibleCharacters += lowerCaseChars 
    } 

    if (upperCase) {
      possibleCharacters += upperCaseChars
    }

    if (numeric) {
      possibleCharacters += numericChars
    }

    if (special) {
      possibleCharacters += specialChars
    }

    for (var i = 0; i < length; i++) {
      newpassword += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    return newpassword;
    




//Return password string
//Check user's characters responces if yes password var includes the character if no password var doesnt include the character
  

}

// Write password to the #password input 

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  /*

  function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

}

*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
