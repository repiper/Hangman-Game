// Variables
//=============================================================
//Create an array of words
const words = ['beyonce', 'elizabeth', 'rupaul', 'Moms everywhere']

// Choose word randomly
let randNum = Math.floor(Math.random() * words.length);
const rightWord = [];
const wrongWord = [];
let chosenWord = words[randNum];
const underScore = [];

// Dom manipulation
let docUnderScore = document.getElementById('underscore');
let rightGuess = document.getElementById('rightGuess');
let wrongGuess = document.getElementById('wrongGuess');
let picture = document.getElementById('picture');
console.log(docUnderScore); 


//Main
//==========================================



// Create underscores based on length of word
const generateUnderscore = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    let data=underScore.join(" ")
    docUnderScore.innerHTML=data
    console.log(data);
}
generateUnderscore()

// Get user's guess
console.log("hello");

document.onkeyup = function (event) {
    let keyword = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(chosenWord);
    console.log(keyword);

    // If users guess is right
    if (chosenWord.indexOf(keyword) > -1) {
        //add to right words array
        rightWord.push(keyword);

        // replace underscore with right letter 
        underScore[chosenWord.indexOf(keyword)] = keyword;
        console.log(underScore);
        docUnderScore.innerHTML = underScore.join(' ');
        rightGuess.innerHTML = rightWord;

        // Check if users guess is right
        
        if (rightWord.join('') == chosenWord) {
            if (chosenWord="beyonce"){
            picture.innerHTML= '<img src="./assets/images/beyonce.jpg">'
            }
            else if(chosenWord="rupaul"){
            picture.innerHTML= '<img src="./assets/images/rupaul.jpg">'
            }
            else if(chosenWord="elizabeth"){
            picture.innerHTML= '<img src="./assets/images/elizabeth.jpg">'
            }
            else if(chosenWord="moms everywhere"){
                picture.innerHTML= '<img src="./assets/images/moms.jpg">'
                }
            alert('You Win');
        }
    }
    else {
        wrongWord.push(keyword);
    }

};
// If guess is right push to right array
// If guess is wrong, push to wrong array
// if (rightWord.push(keyword);

// Create counting system showing remaining guesses (15 tries)


// I need user to choose a letter
// Computer to display that letter
// Computer to determine if correct letter was chosen
// If correct letter was chosen, it will be displayted in the word
// Display the nuber of turns left that the user has
// Determine if the user won or lost 


// var options = ["beyonce ", "elizabeth ", "ruPaul ", "Moms everywhere "];

// document.onkeyup = function (event) {
//     console.log(event)
//     var userguess = String.fromCharCode(event.keyCode).body
//     toLowerCase();
//     var computerdisplay = String.fromCharCode(event.keyCode).body
//     toLowerCase();

//     console.log(userguess);
//     console.log(computerdisplay)

//     if (userguess == 'beyonce' || userguess == 'elizabeth' || userguess == 'ruPaul' || userguess == 'Moms everywhere') {
        
//     alert("nice job! ");
// }  else {
//     alert("try again");
// }}



// object.addEventListener("click", myScript())



/* <div id="beyonce">
    <p style="float: left; clear: left">
        <a id="beyonce_appear" href="#" onclick="myClick()">
            <img id="beyonce_img" src="My_Code/Hangman-Game/assets/images/beyonce.jpg" height="50" width="50" />

        </a> */
