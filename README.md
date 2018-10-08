# NumberGuesserDouble
First paired project
The application should have the following user interface components:

Zero State:
Two inputs to set a custom range for the random number to fall within
A button to update the custom range
An input field for guessing the number
A button for submitting a guess
A button for clearing the input field, which does not reset the random number
A button that resets the game and generates a new random number
User’s Guess State:
Display the user’s most recent guess
Display results and feedback:
If their guess is too high, it should display the error message: “Sorry, that is too high”
If their guess is too low, it should display the error message: “Sorry, that is too low”
If the guess is correct, it should display the success message: “BOOM!”
Some things to consider:
Input fields,regardless of their “type” attribute, store their values in strings. You’ll need to use parseInt() to turn it back into a number.
You’ll need a strategy for generating random numbers.
Phase Two: More Better
All input fields should only accept numerical entries
The Guess field should only accept values that fall within the defined min and max range.
The application should display an error message if the value entered in the Max Range input is less than the value in the Min Range input
The application should display an error message if the value entered in the Min Range input is greater than the value in the Max Range input
The application should display an error message if the guess is not a number (e.g. parseInt() returns NaN).
The application should display an error if the guess is outside of the range of possible answers.
The application should display an error if the Update or Submit Guess buttons are clicked then their associated input fields do not have a value entered
The clear button should be disabled if there is nothing to clear.
The reset button should be disabled if there is nothing to reset.
Phase Three: Level Up
Upon successful win, user’s range is updated:
Every time the user wins a round increase the maximum number by 10.
Every time the user wins a round decrease the minimum number by 10.
Incorporate a scoring system based on how quickly user guesses correct number (NOTE: this may take some UI tweaks to incorporate – make sure you’re honoring the comp and visual patterns that already exist!)
![week1-numberguesser-01](https://user-images.githubusercontent.com/41968928/46637558-f764cf00-cb19-11e8-801a-c5e64c8480a0.jpg)
