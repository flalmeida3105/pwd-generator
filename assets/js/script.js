// Assignment code here

// requesting the number of characters to the end-user
var numberCharacters = function () {
  var number = window.prompt("How many characters would you want your password to be?");
  var number =  parseInt(number);
  console.log(number);
  return number;
}

// console.log(numberCharacters());
// var selectedNumbers = parseInt(numberCharacters());

var includeLetter = function (n) {
  // debugger;
  var letters = window.confirm("Do you want to include upper case and lower case letters?");
  var numbers = window.confirm("Do you want to include numbers?");
  var specialCharacters = window.confirm("Do you want to include special characters?");
    if(letters == true && numbers == true && specialCharacters == true) {
      // var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var results = "";
      for (var i = 0; i < n; i++) {
        // results += letters.charAt(Math.floor(Math.random() * letters.length));
        results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
        // console.log(results);
      }
    } else if (letters == true && numbers == false && specialCharacters == false) {
      var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var results = "";
        for (var i = 0; i < n; i++) {
          results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
          // results += letters.charAt(Math.floor(Math.random() * letters.length) + (Math.floor(Math.random() * numbers.length)));
          // console.log(results);
        }
    } else if (letters == true && numbers == true && specialCharacters == false) {
      var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var results = "";
      for (var i = 0; i < n; i++) {
        // results += letters.charAt(Math.floor(Math.random() * letters.length));
        results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
        // console.log(results);
      }
    } else if (letters == true && numbers == false && specialCharacters == true) {
      var randomCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var results = "";
      for (var i = 0; i < n; i++) {
        // results += letters.charAt(Math.floor(Math.random() * letters.length));
        results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
        // console.log(results);
      }
    } else if (letters == false && numbers == true && specialCharacters == true) {
      var randomCharacters = "012345689!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      var results = "";
      for (var i = 0; i < n; i++) {
        // results += letters.charAt(Math.floor(Math.random() * letters.length));
        results += randomCharacters.charAt(Math.floor(Math.random() * randomCharacters.length));
        // console.log(results);
      }
    }
  return results;
  // return letter;
}

console.log(includeLetter(numberCharacters()));


// var wantLetter = function () {
//   var letter2 = Math.random().toString(26);
//   console.log(letter2); 
// }

// wantLetter();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
