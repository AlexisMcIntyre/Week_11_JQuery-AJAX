/* Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.

    Create a Tic-Tac-Toe game grid using your HTML element of choice.

    When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.

    A heading should say whether it is X's or O's turn and change with each move made.

    A button should be available to clear the grid and restart the game.

    When a player has won, or the board is full and the game results in a draw,
    a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
 */


/* When the page loads, the function is run, displaying the turn number 1 and the player X. It does not update, but is replaced by new text in the function below. */
window.onload = function() {
    let turnCounter = document.getElementById('turnText');
    turnCounter.innerHTML = "It is turn number 1. It is X's turn.";

    console.log(turnCounter.textContent);
}

/* In this function, i is incremented and an id is passed into the function. The text on the HTML document is displaying the turn number and player (X or O) in the id "turnText". It keeps track of whose turn it is by incrementing with i.
The if statement determines which character is used on a play; if the turn counter text used in the statement above includes "O", then it will change the statement to X's turn and put an "O" in the box that is clicked. The else statement handles the opposite situation. Then the function verifyWinner is run and i is console logged.*/

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

/*Below are all the conditional statements that determine the winner in the game. An if or else if statement is used to capture all the win situations. In the first one, the cell ids of "play1", "play2" and "play3" are used with conditions of 1 and 2 being equal AND 2 and 3 being equal for a win. Then an alert is used to announce the winner and the page is reloaded. The last elseif says if 11 turns are played and none of the conditions above are met, there are no winners and reloads the page.*/

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

/* Finally, a button in the HTML document of id "restartGame" is given the function to reload the page via the event handler "click".*/

document.getElementById('restartGame').addEventListener('click', function refreshGrid() {

    location.reload();

})