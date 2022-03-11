// requesting the number of characters to the end-user
function numberCharacters() {
  var number = window.prompt(
    "How many characters would you want your password to be?\n"
    + "Password length (8-128)"
  );
  // if user cancels, application will stop running
  if (number === null) {
    alert(
      "Canceled by a mistake? No worries, hit the button again.\n" 
      + "Bye for now!"
    )
    return null;
  }
  // enforces user to select a minimum of 8 characters
  if (number < 8 || number > 128) {
    number = parseInt(number);
    alert(
      "Your password should have a minimum of 8 and not more than 128 characters.\n"
      + "Reminder: Password length (8-128)"
    );
    return numberCharacters();
  } else {
    return number;
  }
}

function selectCharacters() {
  var randomCharacters = "";
  // prompting user which characters type they want
  var upperCase = window.confirm(
    "Do you want to include upper case letters?\n"
    + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  var lowerCase = window.confirm(
    "Do you want to include lower case letters?\n"
    + "abcdefghijklmnopqrstuvwxyz"
  );
  var numbers = window.confirm(
    "Do you want to include numbers?\n"
    + "0123456789"
  );
  var specialCharacters = window.confirm(
    "Do you want to include special characters?\n"
    + "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  );
  
  
  // Concatenating all possible selections from selectCharacters function to create string based on the selections
  if (upperCase === true) {
    randomCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCase === true) {
    randomCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers === true) {
    randomCharacters += "0123456789";
  }
  if (specialCharacters === true) {
    randomCharacters += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  // Return all possible selections as a single string 
  return randomCharacters;
}

// function to build the password based on the length and characters type chosen 
function generatePassword(pwdSize, chars) {
  var results = "";
  for (var i = 0; i < pwdSize; i++) {
      results += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return results;
}

// Write password to the #password input
function writePassword() {
  var pwdSize = numberCharacters();
  if (!pwdSize) return;
  var chars = selectCharacters();
  var password = generatePassword(pwdSize, chars);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);