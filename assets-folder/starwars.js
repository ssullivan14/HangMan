window.onload = function () {
    // Create an array of starwars words for users to guess. - global variable
    var words = ["skywalker", "tatooine", "chewbacca", "lightsaber", "skywalker", "naboo", "alderaan", "hoth"];

    //global variable random word selected
    var word;
    console.log(word);

    // Create a variable 
    var guesses = 12; //allowable guesses
    var winCounter = 0;
    var lossCounter = 0;

    //document.GetElementByID has to be defined before using
    let answer = document.getElementById("answer");
    let lettersGuessed = document.getElementById("lettersGuessed");
    let winning = document.getElementById("wins");
    let losses = document.getElementById("losses");
    let guessesRemaining = document.getElementById("guesses-remaining");

    var answerArray = [];
        reset()

    // User inputs a letter using onkeyup.
    document.onkeyup = function (event) {
        answer.innerHTML = "";

        for (var i = 0; i < word.length; i++) {
            if (word[i] == event.key) {
                answerArray[i] = event.key;
            }
            answer.innerHTML += answerArray[i];
        }

        //if the word is not included in the word then subtract guess and add letter to guessed letters
        if (!word.includes(event.key)) {
            guesses--;
            guessesRemaining.textContent = guesses;
            lettersGuessed.innerHTML += " " + event.key;
        if (guesses === 0) {
            reset()
            lossCounter++;
            console.log(lossCounter)
            losses.innerHTML = lossCounter;
        }
        };


        // if the word is guessed add +1 to counter else add +1 losses
        if (answer.innerHTML === word) {
            winCounter++;
            console.log(winCounter)
            winning.innerHTML = winCounter;
            reset()

        }
        //  else {
        //             lossCounter++;
        //             console.log(lossCounter)
        //             losses.innerHTML=lossCounter;

        //         }reset();

        // };
    }
    
    function reset() {
        answer.innerHTML = "";
        lettersGuessed.innerHTML = "";
        guesses = 12;
        guessesRemaining.textContent = guesses;
        word = words[Math.floor(Math.random() * words.length)];
        answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_ ";
            answer.innerHTML += answerArray[i];
        }

    }
    // function win() {
    //     wincounter++;
    // }

    // function loss() {

    // }


    //What is a win


    // Display the random word tiles.
    // var answerArray = [];
    // for (var i = 0; i < word.length; i++) {
    //     answerArray[i] = "_ ";
    //     console.log (answerArray);
    //     answer.innerHTML += answerArray[i];
    // }


    //Wins

    //check lettersGuessed are correct/wrong and guesses remaining
    //function checkLetter
    // document.onkeyup = function (event)

    //if (word[i]) != userGuess) {
    //  if (remainingGuesses === 0);
    //console.log ("Game Over");
    //}
    //  else {
    //    remainingGuesses
    // }

    //lettersGuessed




    // Create a click button to start game
    // document.addEventListener("click",function(){
    //     document.getElementById ("start");
    //     console.log (start);
}