var ANSWER = newAnswer(1, 100);
var GUESSCOUNT = 0;

$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game ---*/
  	$('.new').click(newGame);

  	/*--- Respond to user's guess ---*/
  	$('form').submit(function() {
  		var guess = $('#userGuess').val();

  		if (guess <= 0 || guess > 100 || isNaN(guess))
  		{
  			feedback("Guess 1 to 100");
  		}
  		else
  		{
  			checkAnswer(guess);
  			recordGuess(guess);
  		}

  		$('#userGuess').val("");
  		$('#userGuess').focus();
  		return false;
  	});
});

/*--- FUNCTION DECLARATIONS ---*/
function newAnswer(min, max) {
	return (Math.floor(Math.random() * (max-min+1)) + min);
}
function updateCount(){
	$('#count').html(GUESSCOUNT);
}
function feedback(message) {
	$('#feedback').html(message);
}
function newGame() {
	feedback("New Game!");
	$('#userGuess').val("");
	$('#guessList > li').remove();
	GUESSCOUNT = 0;
	updateCount();
	ANSWER = newAnswer(1, 100);
}
function checkAnswer(guess) {
	GUESSCOUNT++;
	updateCount();

	var difference = Math.abs(ANSWER - guess);

	if (difference == 0)
		feedback("You got it!");
	else if (difference >= 90)
		feedback("Antartica cold");
	else if (difference >= 70)
		feedback("Winter in NYC");
	else if (difference >= 50)
		feedback("Ice cold");
	else if (difference >= 30)
		feedback("Cold");
	else if (difference >= 20)
		feedback("Warm");
	else if (difference >= 10)
		feedback("Hot");
	else if (difference >= 1)
		feedback("Burning hot!");
}
function recordGuess(guess) {
	$('#guessList').prepend("<li>" + guess);
}