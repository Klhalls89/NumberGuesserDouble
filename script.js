//number input accepting e
var genNum = genRanNum(0, 100);
var minNum = document.querySelector('.min-number');
var maxNum = document.querySelector('.max-number');
var updateBtn = document.querySelector('.update-btn');
var rangeStart = document.querySelector('.range-start');
var rangeEnd = document.querySelector('.range-end');
var guessInput = document.querySelector('.guess-input');
var submitBtn = document.querySelector('.submit-btn');
var clearBtn = document.querySelector('.clear-btn');
var resetBtn = document.querySelector('.reset-btn');
var recentGuess = document.querySelector('.recent-guess');
var guessMessage = document.querySelector('.guess-message');


console.log(genNum);


// this function grab the value of the user guess upon a button click and update the inner text of our h4

submitBtn.addEventListener('click', guessCaller);
updateBtn.addEventListener('click', customRange);
resetBtn.addEventListener('click', resetGame);


// this function should take the user guess and compare it to the computer generated number. Then display appropriate message.
function guessNumberUpdate(){
    recentGuess.innerText = guessInput.value;
    console.log(recentGuess);
}

  function guessMessageUpdate(){
    var parsedNum = parseInt(guessInput.value);
    if(parsedNum < genNum){
    guessMessage.innerText = "That guess is too low!"
  } else if(parsedNum > genNum){
    guessMessage.innerText = "That guess is too high!"
  } else if(parsedNum === genNum){
    guessMessage.innerText = "BOOM!"
  };
}

function guessChecker(){
  var guessParse = parseInt(guessInput.value);
  var minParse = parseInt(minNum.value);
  var maxParse = parseInt(maxNum.value);

  if(guessParse < minParse || guessParse > maxParse){
      guessMessage.innerText = "ERROR! Guess is outside of set range.";
    } else {
      guessMessageUpdate();
    };
}


//why can't we take this out and just pass in guess checker
function guessCaller(){
  guessChecker();
  guessNumberUpdate();
}

// in guess input check if entered value is less then min range or greater then max range to display message indicating the error




function customRange(event){
  event.preventDefault();
  // Grabbing the min and max from the inputs. They are being stored as string values. 
  var min = minNum.value;
  var max = maxNum.value;
  // Changing the text on the DOM to match inputs
  rangeStart.innerText = min;
  rangeEnd.innerText = max;
  // Calling genRanNum function to generate a new number between our min max values and reassigning the genNum to the new number
  genNum = genRanNum(min, max);
  console.log(genNum);
};

function genRanNum(min, max){
  // Changing the string values of min and max to numberic values.
  min = parseInt(min);
  max = parseInt(max);
  return Math.ceil(Math.random() * (max - min) + min);
};

function resetGame(event){
  event.preventDefault();
  minNum.value = '';
  maxNum.value = '';
  guessInput.value = '';
  genNum = genRanNum(0, 100);
  console.log(genNum);
  rangeStart.innerText = 0;
  rangeEnd.innerText = 100;

}





