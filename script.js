// Assignment Code
var generateBtn = document.querySelector("#generate");


var characterUpper = ["A", "B", "C"]  //This is creating an array... look into this
var characterLower = ["a", "b", "c"]
var numbers = ["1", "2", "3", "4", "5"]
var characterSpecial = ["@", "!", "#"]
var allElements = []
var num = 0

generateBtn.addEventListener("click", myFunction);


function myFunction() {
  console.log("button pushed");
  //Question 1: how many characters
  //parseInt chosen to ensure that only integers are used
  var characterCount = parseInt(prompt ("How many characters would you like your password to be? Your selection 8 or greater, and is not to exceed 128" ));
    if (characterCount < 8 || characterCount > 128) {
    alert ("You must select a number that is 8 or greater, but does not exceed 128 characters. Please select the \"Generate Password\" button and re-start.");
    event.preventDefault()
    return
    }
  
    //area of question
  var lowers = confirm("would you like to include lowercase characters?");
    if (lowers) allElements=[...allElements,...characterLower], (num += 1);
  var uppers = confirm("would you like to include uppercase characters?");
  if (uppers) allElements=[...allElements,...characterUpper], (num += 1);
  var numerics = confirm("would you like to include numeric characters?");
    if (numerics) allElements=[...allElements,...numbers], (num += 1);
  var specials = confirm("would you like to include special characters?");
  if (specials) allElements=[...allElements,...characterSpecial], (num += 1);

  if (num < 3) {
    alert("you must select three character types, please re-start.")
    myFunction();
  }
    //area of question

  var testing = ""
    for (var i = 0; i <= characterCount; i++) {
    var randomElement = allElements[Math.floor(Math.random() * allElements.length)];
    testing += randomElement;}
    console.log(testing); //moved this outside of for function so that I didn't get every iteration
  

  var confirmation = confirm("Please Confirm");
    //when number of characters chosen does not satisfy criteria
    if (confirmation) {
      writePassword();} 

        function writePassword() {
          generatePassword();
          //setting variables for randomly selected characters
    //var randomUpper = Math.floor(Math.random() * characterUpper.length);
    //var randomLower = Math.floor(Math.random() * characterLower.length);
    //var randomSpecial = Math.floor(Math.random() * characterSpecial.length);
    //var randomNumbers = Math.floor(Math.random() * numbers.length);
    //creating array of random variables above
    //var passwordValues = [characterUpper[randomUpper], characterLower[randomLower], characterSpecial[randomSpecial], numbers[randomNumbers]];
    //console.log(passwordValues);
    //setting variable that chooses random value from passwordValues array
    //var password = generatePassword();{ 
            function generatePassword () {
                console.log("generating");
                var password = testing;
                var passwordText = document.querySelector("#password"); //this will return textarea element in lines 21-24
                passwordText.value = password;}
        }
}

  //TOMORROW - add one new element -- numbers -- and see if you can produce the same results
  //perhaps start a new variable after var characterCount, before else function
  
 
 
  


// Write password to the #password input
//Code to randomly generate numbers