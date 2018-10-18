var cardHalf = document.querySelector('.card-half');
var counter = 0;
var challengerName = document.querySelector('.challenger-name');
var challengerName2 = document.querySelector('.challenger-name2');
var clearBtn = document.querySelector('.clear-btn');
var genNum = genRanNum(1, 100);
var guessInput = document.querySelector('.guess-input');
var guessInput2 = document.querySelector('.guess-input2');
var guessMessage = document.querySelector('.guess-message');
var guessMessage2 = document.querySelector('.guess-message2');
var guessParse = parseInt(guessInput.value);
var nameInput = document.querySelector('.name-input');
var nameInput2 = document.querySelector('.name-input2');
var maxNum = document.querySelector('.max-number');
var minNum = document.querySelector('.min-number');
var rangeEnd = document.querySelector('.range-end');
var rangeStart = document.querySelector('.range-start');
var resetBtn = document.querySelector('#reset-btn');
var recentGuess = document.querySelector('.recent-guess');
var recentGuess2 = document.querySelector('.recent-guess2');
var submitBtn = document.querySelector('.submit-btn');
var updateBtn = document.querySelector('.update-btn');

console.log(genNum);

clearBtn.addEventListener('click', clearFields);
resetBtn.addEventListener('click', resetGame);
submitBtn.addEventListener('click', guessCaller);
updateBtn.addEventListener('click', rangeChecker);

guessInput.addEventListener('input', enableClear);
maxNum.addEventListener('input', enableReset);
minNum.addEventListener('input', enableReset);

cardHalf.addEventListener('click', function(event) {
  if(event.target.classList.contains('delete-btn')) {
    deleteCard(event);
  }
});

function challengerNameUpdate() {
  challengerName.innerText = nameInput.value || 'Challenger 1';
  challengerName2.innerText = nameInput2.value || 'Challenger 2';
}

function clearFields() {
  guessInput.value = '';
  guessInput2.value = '';
  disableClear();
}

function countReset() {
  if(guessMessage.innerText === 'BOOM!' 
    || guessMessage2.innerText === 'BOOM!'){
    counter = 0;
  }
}

function countTracker() {
  counter++
}

function createCard () {
var challenger1 = nameInput.value || 'Challenger 1';
var challenger2 = nameInput2.value || 'Challenger 2';
var cardHalf = document.querySelector('.card-half');
var nameOfWinner = winnerName();
cardHalf.insertAdjacentHTML('afterbegin', 
 `<section class="card">
  <article class="card-head">
    <p class="chal1-name-update">${challenger1}</p>
    <p>vs</p>
    <p class="chal2-name-update">${challenger2}</p>
  </article>
  <article class="card-body">
    <p class="winner-name-update">${nameOfWinner}</p>
    <p>Winner</p>
  </article>
  <article class="card-foot">
    <div class="card-foot-div">
      <p class="num-guess-update">${counter}</p>
      <p>guesses</p>
    </div>
    <div class="card-foot-div">
      <p class="num-minutes-update">#</p>
      <p>minutes</p>
    </div>
    <button class="delete-btn">X</button>
  </article>
</section>`)
countReset();
}

function customRange() { 
  var min = minNum.value;
  var max = maxNum.value;
  rangeStart.innerText = min;
  rangeEnd.innerText = max;
  genNum = genRanNum(min, max);
  console.log(genNum);
}

function deleteCard(event) {
  event.target.closest('.card').remove();
}

function disableClear() {
  document.getElementById('clear-disable').setAttribute('disabled', 'disabled');
  document.getElementById('clear-disable').classList.remove('enabled-state');
}

function disableReset() {
  document.getElementById('reset-btn').setAttribute('disabled', 'disabled');
  document.getElementById('reset-btn').classList.remove('enabled-state');
}

function enableClear() {
  document.getElementById('clear-disable').removeAttribute('disabled');
  document.getElementById('clear-disable').classList.add('enabled-state');
  enableReset();  
}

function enableReset() {
  if(minNum.value !== '' || maxNum.value !== '' || guessInput.value !== ''){
    document.getElementById('reset-btn').removeAttribute('disabled');
    document.getElementById('reset-btn').classList.add('enabled-state');
  } 
}

function emptyGuess() {
  if(guessInput.value === '' || guessInput2.value === '') {
    alert('Please enter a number for your guess!')
  }
}

function emptyMinMax() {
  if(minNum.value === '' || maxNum.value === '') {
    alert('Please enter a minimum AND maximum number!');
  }
}

function genRanNum(min, max) {
    min = parseInt(min);
    max = parseInt(max);
  return Math.ceil(Math.random() * (max - min) + min);
}

function guessCaller() {
  guessChecker();
  guessNumberUpdate();
  countTracker();
  winnerRange();
  challengerNameUpdate();
  clearFields();
}

function guessChecker() {
  emptyGuess();
  var guessParse = parseInt(guessInput.value);
  var guessParse2 = parseInt(guessInput2.value);
  var minParse = parseInt(minNum.value) || 1;
  var maxParse = parseInt(maxNum.value) || 100;
  if(guessParse < minParse || guessParse > maxParse) {
      guessMessage.innerText = 'NOPE! Guess is out of range!';
    } else {
      guessMessageUpdate();
    };

    if(guessParse2 < minParse || guessParse2 > maxParse) {
      guessMessage2.innerText = 'NOPE! Guess is out of range!';
    } else {
      guessMessageUpdate2();
    };
}

function guessNumberUpdate() {
    recentGuess.innerText = guessInput.value;
    recentGuess2.innerText = guessInput2.value;
}

function guessMessageUpdate() {
  var parsedNum = parseInt(guessInput.value);
  if(parsedNum < genNum) {
    guessMessage.innerText = 'That guess is too low!'
  } else if(parsedNum > genNum) {
    guessMessage.innerText = 'That guess is too high!'
  } else if(parsedNum === genNum) {
    guessMessage.innerText = 'BOOM!'
  };
 } 
 
function guessMessageUpdate2 () {
  var parsedNum2 = parseInt(guessInput2.value);
  if(parsedNum2 < genNum) {
    guessMessage2.innerText = 'That guess is too low!'
  } else if(parsedNum2 > genNum) {
    guessMessage2.innerText = 'That guess is too high!'
  } else if(parsedNum2 === genNum) {
    guessMessage2.innerText = 'BOOM!'
  };
}

function rangeChecker() {
  emptyMinMax();
  var minParse = parseInt(minNum.value);
  var maxParse = parseInt(maxNum.value);
  if( minParse > maxParse ) {
  document.getElementById('hidden').classList.remove('hiddenP');
   } else {
  removeRangeError();
  customRange();
  }
}

function removeRangeError () {
  document.getElementById('hidden').classList.add('hiddenP');
}

function resetGame(event) {
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

function winnerName() {
  var challenger1 = nameInput.value || 'Challenger 1';
  var challenger2 = nameInput2.value || 'Challenger 2';
  var winner;
  if(guessMessage.innerText === 'BOOM!') {
    winner = challenger1;
  } else if (guessMessage2.innerText === 'BOOM!') {
    winner = challenger2;
  }
  console.log(winner);
  return winner;
}

function winnerRange() {
  var parsedNum = parseInt(guessInput.value);
  var parsedNum2 = parseInt(guessInput2.value);
  if (parsedNum === genNum || parsedNum2 === genNum) {
    minNum = parseInt(rangeStart.innerText) - 10;
    maxNum = parseInt(rangeEnd.innerText) + 10;
    genNum = genRanNum(minNum, maxNum);
    rangeStart.innerText = minNum;
    rangeEnd.innerText = maxNum;
    createCard();
    guessInput.value = '';
    guessInput2.value = '';
    console.log(genNum);
  }
}