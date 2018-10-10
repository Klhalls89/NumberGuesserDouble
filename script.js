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

submitBtn.addEventListener('click', guessMessageUpdate);

updateBtn.addEventListener('click', customRange)
// this function should take the user guess and compare it to the computer generated number. Then display appropriate message.
function guessMessageUpdate(event){
  event.preventDefault();
  var parsedNum = parseInt(guessInput.value);
    recentGuess.innerText = guessInput.value;
    console.log(recentGuess);
  if(parsedNum < genNum){
    guessMessage.innerText = "That guess is too low!"
  } else if(parsedNum > genNum){
    guessMessage.innerText = "That guess is too high!"
  } else if(parsedNum === genNum){
    guessMessage.innerText = "BOOM!"
  };
};

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






