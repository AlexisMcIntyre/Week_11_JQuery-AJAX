/* Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

    Create a Tic-Tac-Toe game grid using your HTML element of choice.

    When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.

    A heading should say whether it is X's or O's turn and change with each move made.

    A button should be available to clear the grid and restart the game.

    When a player has won, or the board is full and the game results in a draw,
    a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
 */

window.onload = function() {
    let turnCounter = document.getElementById('turnText');
    turnCounter.innerHTML = "It is turn number 1. It is X's turn.";

    console.log(turnCounter.textContent);
}

let i = 2;

function button_Click(id){
    
    i++;

    let buttonClickedContent = document.getElementById(id);
    let turnCounter = document.getElementById('turnText'); 
    
    let turnNumber = "It is turn number " + i + ". ";

    if(turnCounter.textContent.includes("It is O's turn.")){
        turnCounter.innerHTML = turnNumber + "It is X's turn.";
        buttonClickedContent.innerHTML = 'O'
    }
    else{
        turnCounter.innerHTML = turnNumber + "It is O's turn.";
        buttonClickedContent.innerHTML = 'X'
    }    
   verifyWinner();
   console.log(i);

}


function verifyWinner(){
    
    if(document.getElementById('play1').textContent === document.getElementById('play2').textContent && document.getElementById('play2').textContent === document.getElementById('play3').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play4').textContent === document.getElementById('play5').textContent && document.getElementById('play5').textContent === document.getElementById('play6').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play7').textContent === document.getElementById('play8').textContent && document.getElementById('play8').textContent === document.getElementById('play9').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play1').textContent === document.getElementById('play4').textContent && document.getElementById('play4').textContent === document.getElementById('play7').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play2').textContent === document.getElementById('play5').textContent && document.getElementById('play5').textContent === document.getElementById('play8').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play3').textContent === document.getElementById('play6').textContent && document.getElementById('play6').textContent === document.getElementById('play9').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play1').textContent === document.getElementById('play5').textContent && document.getElementById('play5').textContent === document.getElementById('play9').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(document.getElementById('play3').textContent === document.getElementById('play5').textContent && document.getElementById('play5').textContent === document.getElementById('play7').textContent){
        alert("You WIN!")
        location.reload();
    }
    else if(i === 11){
        alert("No winners!")
        location.reload();
    } 


}

document.getElementById('restartGame').addEventListener('click', function refreshGrid() {

    location.reload();

})