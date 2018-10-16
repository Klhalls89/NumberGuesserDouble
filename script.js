//number input accepting e
var genNum = genRanNum(1, 100);
var minNum = document.querySelector('.min-number');
var maxNum = document.querySelector('.max-number');
var updateBtn = document.querySelector('.update-btn');
var rangeStart = document.querySelector('.range-start');
var rangeEnd = document.querySelector('.range-end');
var guessInput = document.querySelector('.guess-input');
var guessInput2 = document.querySelector('.guess-input2');
var submitBtn = document.querySelector('.submit-btn');
var clearBtn = document.querySelector('.clear-btn');
var resetBtn = document.querySelector('#reset-btn');
var recentGuess = document.querySelector('.recent-guess');
var recentGuess2 = document.querySelector('.recent-guess2');
var guessMessage = document.querySelector('.guess-message');
var guessMessage2 = document.querySelector('.guess-message2');
var nameInput = document.querySelector('.name-input');
var nameInput2 = document.querySelector('.name-input2');
var challengerName = document.querySelector('.challenger-name');
var challengerName2 = document.querySelector('.challenger-name2');
var guessParse = parseInt(guessInput.value);
var minParse = parseInt(minNum.value);
var maxParse = parseInt(maxNum.value);


console.log(genNum);


submitBtn.addEventListener('click', guessCaller);
updateBtn.addEventListener('click', rangeChecker);
resetBtn.addEventListener('click', resetGame);
clearBtn.addEventListener('click', clearFields);
guessInput.addEventListener('input', enableClear);
minNum.addEventListener('input', enableReset);
maxNum.addEventListener('input', enableReset);

// this function should take the user guess and compare it to the computer generated number. Then display appropriate message.
function guessNumberUpdate(){
    recentGuess.innerText = guessInput.value;
    recentGuess2.innerText = guessInput2.value;
}

  function guessMessageUpdate(){
    var parsedNum = parseInt(guessInput.value);
    var parsedNum2 = parseInt(guessInput2.value);
    if(parsedNum < genNum){
    guessMessage.innerText = "That guess is too low!"
  } else if(parsedNum > genNum){
    guessMessage.innerText = "That guess is too high!"
  } else if(parsedNum === genNum){
    guessMessage.innerText = "BOOM!"
  };
   if(parsedNum2 < genNum){
    guessMessage2.innerText = "That guess is too low!"
  } else if(parsedNum2 > genNum){
    guessMessage2.innerText = "That guess is too high!"
  } else if(parsedNum2 === genNum){
    guessMessage2.innerText = "BOOM!"
  };
}

function winnerRange(){
  var parsedNum = parseInt(guessInput.value);
  if (parsedNum === genNum){
    minNum.value = parseInt(minNum.value) - 10;
    maxNum.value = parseInt(maxNum.value) + 10;
    genNum = genRanNum(minNum.value, maxNum.value);
    rangeStart.innerText = minNum.value;
    rangeEnd.innerText = maxNum.value;
    guessInput.value = '';
    guessInput2.value = '';
    console.log(genNum);
    guessMessage.innerText = 'A new, harder game has started!';
  }
}

function guessChecker(){
  emptyGuess();
  var guessParse = parseInt(guessInput.value);
  var guessParse2 = parseInt(guessInput2.value);
  var minParse = parseInt(minNum.value) || 1;
  var maxParse = parseInt(maxNum.value) || 100;

  if(guessParse < minParse || guessParse > maxParse){
      guessMessage.innerText = "NOPE! Guess is out of range!";
    } else {
      guessMessageUpdate();
    };

    if(guessParse2 < minParse || guessParse2 > maxParse){
      guessMessage2.innerText = "NOPE! Guess is out of range!";
    } else {
      guessMessageUpdate();
    };
}

function emptyGuess(){
  if(guessInput.value === '' || guessInput2.value === ''){
    alert('Please enter a number for your guess!')
  }
}

//why can't we take this out and just pass in guess checker
function guessCaller(){
  guessChecker();
  guessNumberUpdate();
  winnerRange();
  challengerNameUpdate();
}

// in guess input check if entered value is less then min range or greater then max range to display message indicating the error

function challengerNameUpdate(){
  challengerName.innerText = nameInput.value;
  challengerName2.innerText = nameInput2.value;
}



function customRange(){
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
  guessInput2.value = '';
  nameInput.value = '';
  nameInput2.value = '';
  genNum = genRanNum(1, 100);
  console.log(genNum);
  rangeStart.innerText = 1;
  rangeEnd.innerText = 100;
  guessMessage.innerText = 'A new game has started!';
  guessMessage2.innerText = 'A new game has started!';
  recentGuess.innerText = '??';
  recentGuess2.innerText = '??';
  disableReset();
}

function enableReset(){
  if(minNum.value !== '' || maxNum.value !== '' || guessInput.value !== ''){
    document.getElementById('reset-btn').removeAttribute('disabled');
  } 
}

function disableReset(){
  document.getElementById('reset-btn').setAttribute('disabled', 'disabled');
}
// if player enters a min or max or guess, the reset button should be enabled. Otherwise the button should be disabled. 

function rangeChecker(){
  emptyMinMax();
  var minParse = parseInt(minNum.value);
  var maxParse = parseInt(maxNum.value);
  if( minParse > maxParse ){
  document.getElementById('hidden').classList.remove('hiddenP');
   } else {
    customRange();
    }
}

function emptyMinMax(){
  if(minNum.value === '' || maxNum.value === ''){
    alert('Please enter a minimum AND maximum number!');
  }
}

function clearFields(){
  guessInput.value = '';
  guessInput2.value = '';
  minNum.value = '';
  maxNum.value = '';
  document.getElementById('clear-disable').setAttribute('disabled', 'disabled');
}

function enableClear(){
  document.getElementById('clear-disable').removeAttribute('disabled');
  enableReset();
}







