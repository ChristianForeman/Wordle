//List of possible words
const words = ["chill", "mommy", "frank", "ocean"];

var word; // Selected word for game

// Select a random word in words
function selectWord() {
    word = words[Math.floor(Math.random() * words.length)];
}

function attempt(guess){
    
}

var array;
function buildArray(array){
    array = [];
    for(let i = 0; i < 5; ++i) {
        for(let j = 0; i < 6; ++i) {
            array[i][j] = 0; //needs to be a class
        }
    }
}





