// Assignment code here

// requesting the number of characters to the end-user
var numberCharacters = function () {
  var number = window.prompt(
    "How many characters would you want your password to be?\n"
    + "Password length (8-128)"
  );
  if (number === null) {
    alert(
      "Canceled by a mistake? No worries, hit the button again.\n" 
      + "Bye for now!"
    )
    throw new Error("User cancelled the prompt");
  }
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

var selectCharacters = function() {
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
  
  
  // Concatenating all possible selections to a big string 
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

// function to build the password based on the length and characters type chose 
var generatePassword = function (pwdSize, chars) {
  var results = "";
  for (var i = 0; i < pwdSize; i++) {
      results += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return results;
}

// console.log(generatePassword())

// var generatePassword = function (n, randChar) {
//   // debugger;
  
//   // Only LETTERS = TRUE
//   if (letters == true && numbers == false && specialCharacters == false) {
//     var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // LETTERS and NUMBERS = TRUE

//   else if (letters == true && numbers == true && specialCharacters == false) {
//     var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // LETTERS, NUMBERS and SPECIAL CHARACTERS = TRUE
//   else if (letters == true && numbers == true && specialCharacters == true) {
//     var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // LETTERS and SPECIAL CHARACTERS = TRUE
//   else if (letters == true && numbers == false && specialCharacters == true) {
//     var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // NUMBERS and SPECIAL CHARACTERS = TRUE
//   else if (letters == false && numbers == true && specialCharacters == true) {
//     var randomCharacters = "012345689!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // Only SPECIAL CHARACTERS = TRUE
//   else if (letters == false && numbers == false && specialCharacters == true) {
//     var randomCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // Only NUMBERS = TRUE
//   else if (letters == false && numbers == true && specialCharacters == false) {
//     var randomCharacters = "012345689";
//     var results = "";
//     for (var i = 0; i < n; i++) {
//       results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
//     }
//   } // catch all rule 
//   else {
//     alert("Please ensure to select Letters, Numbers or Special Characters to build your password");
//     var results = "";
//     var letters = "";
//     var numbers = "";
//     var specialCharacters = "";
//     numberCharacters();
//   }
//   return results;
//   // return letter;
// }

// console.log(generatePassword(numberCharacters()));


// var wantLetter = function () {
//   var letter2 = Math.random().toString(26);
//   console.log(letter2); 
// }

// wantLetter();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwdSize = numberCharacters();
  var chars = selectCharacters();
  var password = generatePassword(pwdSize, chars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);