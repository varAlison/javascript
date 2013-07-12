// global variables
var madeMove = new Array();
var content = new Array();
var turn = 0;
var boxPlayed = 0;
var winner = false;

// creates 9 properties for the arrays madeMove and content and initializes them to false or empty
window.onload = function(){
	for (var i = 0; i <= 9; i++) {
	madeMove[i] = false;
	content[i] ='';
	}
}

// when boxes are played
function boxClicked(boxNumber){
	var whichBox = "box" + boxNumber;
	var c = document.getElementById(whichBox);
	if (winner === true){
		var gameoverClickConfirm = confirm("The game is already over. Would you like to play again?");
		if (gameoverClickConfirm === true){
			location.reload(true);
		}
	}	
	if (madeMove[boxNumber-1] === false){
		if(turn % 2 === 0){
			c.innerHTML = "X";
			content[boxNumber-1] = "X";
		} else {
			c.innerHTML = "O";
			content[boxNumber-1] = "0";
		}
		turn++;
		madeMove[boxNumber-1] = true;
		boxPlayed++;
		checkForWinner(content[boxNumber-1]);
		if (boxPlayed === 9 && winner === false){
			alert("The game is over!");
		}
	} else {
		alert("Someone has played that box already!");
	}	
}

// check for winner
function checkForWinner(player){
	var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	for (var j = 0; j < winningCombinations.length; j++){
		if (content[winningCombinations[j][0]]===player
			&&content[winningCombinations[j][1]]===player
			&&content[winningCombinations[j][2]]===player){
			winner = true;
			alert(player+ " WON!");
		}
	}
}

// play again button
var playAgain = document.getElementById("playAgain");
playAgain.onclick = function(){
	if(boxPlayed < 9 && winner === false){
		var playAgainConfirm = confirm("The game has not ended.\nAre you sure you want to restart?");
		if (playAgainConfirm === true){
			location.reload(true);
		} 
	} else {
		location.reload(true);
	}
}