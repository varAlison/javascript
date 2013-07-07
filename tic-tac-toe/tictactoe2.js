// global variables
var madeMove = new Array();
var content = new Array();
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var boxPlayed = 0;
var winner = false;

// creates 9 properties for the arrays madeMove and content and initializes them to false or empty
window.onload = function(){
	for (var i = 0; i <= 9; i++) {
	madeMove[i] = false;
	content[i] ='';
	}
}

// user's play
function boxClicked(boxNumber){
	var whichBox = "box" + boxNumber;
	var c = document.getElementById(whichBox);
	if (madeMove[boxNumber-1] === false){
		c.innerHTML = "X";
		content[boxNumber-1] = "You";
		madeMove[boxNumber-1] = true;
		checkForWinner(content[boxNumber-1]);
		boxPlayed ++;	
		computerPlay();	 
	} else {
		alert("That box is occupied already!");
	}
	if (boxPlayed === 9){
			alert("The game is over!");
			location.reload(true);
		}
}

// computer's play
function computerPlay(){
	var computerBoxNumber = Math.floor(Math.random()*9+1);
	if (madeMove[computerBoxNumber-1] === false){
		var whichBox = "box" + computerBoxNumber; 
		var c = document.getElementById(whichBox);	
		c.innerHTML = "O";
		content[computerBoxNumber-1] = "Computer";
		madeMove[computerBoxNumber-1] = true;
		checkForWinner(content[computerBoxNumber-1]);
		boxPlayed ++;
	} else {
		computerPlay();
	}	
}

// check for winner
function checkForWinner(player){
	for (var j = 0; j < winningCombinations.length; j++){
		if (content[winningCombinations[j][0]]===player
			&&content[winningCombinations[j][1]]===player
			&&content[winningCombinations[j][2]]===player){
			winner = true;
			alert(playerMark+ " won!");
		}
	}
}

// play again button
var playAgain = document.getElementById("playAgain");
playAgain.onclick = function(){
	if(boxPlayed < 9){
		var playAgainConfirm = confirm("The game has not ended.\nAre you sure you want to restart?");
		if (playAgainConfirm === true){
			location.reload(true);
		} 
	} else {
		location.reload(true);
	}
}