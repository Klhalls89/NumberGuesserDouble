var genNum = Math.ceil(Math.random() * 100);
var minNum = document.querySelector('.min-number').value;
var maxNum = document.querySelector('.max-number').value;
var update = document.querySelector('.update-btn');
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

// guessMessageUpdate();
