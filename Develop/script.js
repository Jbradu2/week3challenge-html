// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//-Will need a varaible for: passwordLength, lowercase, uppercase, and special characters 
var passwordLength;
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialCharacters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//will need to make functions to determine length, and if user wants uppercase, numeric(numbers) lowercase, and special characters
//need to include list of each to define in variable

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of "prompts"-(instructs the browser to display a dialog with an 
//     optional message prompting the user to input some text, and to wait until the user either 
//     submits the text or cancels the dialog.) for password criteria

//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
function chooseLength(){
 passwordLength = prompt ("Password must be at least 8 characters and no more than 128 characters")
}
//WHEN asked for character types to include in the password
// can use alert()?
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//                       make prompts required
                prompt ("Do you want to use lowercase?")
                prompt ("Do you want to use uppercase?")
                prompt ("Do you want to use numeric?")
                prompt ("Do you want to use special characters?")
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page\\



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
