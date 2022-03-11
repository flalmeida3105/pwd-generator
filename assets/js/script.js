// Assignment code here

// requesting the number of characters to the end-user
var numberCharacters = function () {
  var number = window.prompt("How many characters would you want your password to be?");
  number = parseInt(number);
  // console.log(number);
  return number;
}

var selectCharacters = function() {
  var randomCharacters = "";
  // prompt usuário para escolher os chars
  var letters = window.confirm("Do you want to include upper case and lower case letters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var specialCharacters = window.confirm("Do you want to include special characters?");
  // criar um string gigante com os chars a serem usados
  if (letters === true) {
    randomCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }
  if (numbers === true) {
    randomCharacters += "0123456789";
  }
  if (specialCharacters === true) {
    randomCharacters += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  // retornar chars
  return randomCharacters;
}
// console.log(selectCharacters())


var generatePassword = function (pwdSize, chars) {
  var results = "";
  // console.log(chars)
  // console.log(pwdSize)
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