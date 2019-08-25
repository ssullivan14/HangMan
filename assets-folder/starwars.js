window.onload = function() {
    // Create an array of starwars words for users to guess. - global variable
    var words = ["skywalker","tatooine","chewbacca","lightsaber","skywalker","naboo","alderaan","hoth"];

    //global variable
    var word = words[Math.floor(Math.random()* words.length)];
    console.log(word);

    // Create a variable 
    var guesses = 12; //allowable guesses
    var remaining = 0; //guesses remaining
    var winCounter = 0;

    //document.GetElementByID has to be defined before using
    let answer = document.getElementById ("answer");
    let lettersGuessed = document.getElementById ("letters guessed");
    let winning  = document.getElementById ("wins");
    let guessesRemaining = document.getElementById ("guesses-remaining");

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_ ";
        answer.innerHTML += answerArray[i];
    }

    // User inputs a letter using onkeyup.
    document.onkeyup = function(event) {
        answer.innerHTML = "";
        for (var i = 0; i < word.length; i++) {
            if (word[i] == event.key) {
                answerArray[i] = event.key;
            }
            answer.innerHTML += answerArray[i];
        }
        
         if (answer.innerHTML === word) {
            winCounter++;
            console.log (winCounter)
            winning.innerHTML = "Wins:" + winCounter;
           
        }  
        

        
        console.log(answerArray[i]);
    } 
} 

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
//  })












