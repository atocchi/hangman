
// Possible Computer Guesses
let heroes = ["pudge","windranger","drow","doom"]
// RNG to decide which string to take from the array
let choice = Math.floor(Math.random() * 4)
// Computers pick is definted as heroChoice
let heroChoice = heroes[choice]
// create an array of letter guessed
let letterChoice = []
//creates a array of the computers choices
let compChoice = []
let incorrectLetters = 0
let guessKey = ""
//declares how many letters are correct durring the guess function, set to 0
let correct = 0
//keeps track of how many incorrect guess have been made
let wrong = 0
//keeps track of how many letters are correct
let correctLetter = 0
//sets lose, true state locking the game
let lose = false
//same for win
let win = false
//array to define what keystrokes the program expects
let okKeys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

//function to run last, checks for 12 wrongs, causes lose state (takes any argument)
function lossChecker (a) {
    if (a >= 12) {
        lose = true
    }
}
//function to check for win, compares length of compChoice to correct letters (takes any argument)
function winChecker (a) {
    if (a >= compChoice.length ) {
        win = true
    }
}

// creates a function to break strings up into it's individual characters
function letterMaker(a) {
for (let i = 0; i < a.length; i++) {
    //creates an array out of the computers word choice
    let letters = (a.charAt([i]))
   compChoice.push(letters)
}
}
//function that checks key inputed against the okKeys array (takes any argument)
function keyChecker(a) {
    goodKey = false;
    for (i =0; i <okKeys.length; i++){
        if (a === (okKeys[i])) {
            goodKey = true
            }
    }
}
// creates a function that tests the guess against the computer choice
function guess(a) {
    //resets correct to 0
correct = correct * 0
//for loop that checks argument against the compchoice array
for(i = 0; i < compChoice.length; i++){
    if (a == (compChoice[i])) {
        correct = correct + 1
        correctLetter = correctLetter + 1
    }
}
}
///// This function has been commented out, becasue the splice function does it better//////
// // Checks to see if key has been pressed before (can accept any argument)
// function pressedCheck(a) {
//     sameKey = false;
//     for(i = 0; i < letterChoice.length; i++) {
//     if (a === (letterChoice[i])) {
//         sameKey = true
//     }
// }
// }


//checks to see how many correct (can accept any argument), if 0, increments wrong by 1, else alerts the player they got a letter right
function check(a) {
    if (a == 0){
        wrong = wrong + 1
    }
    else {
        alert("You got a letter!")
    }
}
letterMaker(heroChoice)
// alert(compChoice)
// alert(letterChoice)
//checks the pressed key against the ids of the p tags
function replace (a) {
 for (i =0; i <compChoice.length; i++){
    let revealed = document.getElementById([i]) 
 }
}



//Grabs the whole html document to wait for key presses
let grabKey = document.getElementById("heroes");
//checks for key presses and translates them into strings
grabKey.onkeypress = function(e) {
e = e || window.event;
let charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    //checks for a lose, locking the game on loss
    if (lose == true) {
        alert("You Lose")
    }
    //checks for a win, locking the game on win
    else if (win == true) {
        alert("You Win")
    }



    else if (charCode > 0) {
        alert("You Guessed: " + String.fromCharCode(charCode))
     //Adds the keys pressed to the Array
        let guessKey = (String.fromCharCode(charCode));
        
        //checks to see if the key pressed is valid, forgiving case, then splices key out of okKeys array
        keyChecker(guessKey.toLowerCase())
        let n = okKeys.indexOf(guessKey.toLowerCase())
        okKeys.splice(n,1)
        alert(okKeys)

        if (goodKey == false) {
            alert("You have pressed an incorrect key, or you already guessed this letter!")
        }
        
       
       
         else {
        //calls the guess function to check the key pressed against (even converts it lower case)
        guess(guessKey.toLowerCase())
        check(correct)
        alert(wrong)
        letterChoice.push(guessKey);
        alert(letterChoice);
        //calls the losschecker function to see if the player lost
        lossChecker(wrong)
        alert(lose)

        //calls the winchecker function to see if the player won
        winChecker(correctLetter)
        alert(win)
    //checks again for a loss, to see if players input changed the status
    if (lose == true) {
        alert("You Lose")
    }
    //checks again for a win, to see if players input changed the status
    else if (win == true) {
        alert("You Win")
    }
        }
    }
    


}







