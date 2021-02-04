/* Constants */
const MOVESET = ['scissors', 'paper', 'rock']; //don't change this.. it's in all caps

/* Game Logic Variables and State */
let humanWins = 0;
let aiWins = 0;
let ties = 0;
let playerMsg = "";
let aiMsg = "";
let statusMsg = "";

/* DOM References */
const playControls = document.querySelector('#left');
const gameMessageBox = document.querySelector('#game-messages');

/* Functions and Game Logic */

// Runs at the start of the game
// Reset all the state variables
// Update the DOM to reflect to the user that we have a fresh game ready
const initialize = (event) => {
    humanWins = 0;
    aiWins = 0;
    ties = 0;
    playerMsg = "";
    aiMsg = "";
    statusMsg = "";
}

const handleClick = (event) => {
    // Reject clicks to the parent div
    if (event.target.id == 'left') return;

    let playerMove = event.target.alt;

    // 1) AI makes a move
    let aiMove = randAiMove();

    // Step 1.5 - update state variables
    playerMsg = `I play ${playerMove}`
    aiMsg = `AI plays ${aiMove}`

    // console.log(`player move: ${playerMove} ai move: ${aiMove}`)
    // 2) Check if AI wins or Player wins
    checkForWin(playerMove, aiMove);
    // 3) Reflect the results in the state and the DOM
    updateDisplay();
}

const updateDisplay = () => {
    // Wipe the contents of the game message box
    while (gameMessageBox.firstChild) {
        gameMessageBox.removeChild(gameMessageBox.firstChild)
    }

    let msg1 = document.createElement('h3');
    msg1.textContent = playerMsg;

    let msg2 = document.createElement('h3');
    msg2.textContent = aiMsg;

    let msg3 = document.createElement('h3');
    msg3.textContent = statusMsg;

    let p = document.createElement('p')
    p.textContent = `Human wins: ${humanWins} AI wins: ${aiWins} Ties: ${ties}`;

    gameMessageBox.appendChild(msg1)
    gameMessageBox.appendChild(msg2)
    gameMessageBox.appendChild(msg3)
    gameMessageBox.appendChild(p)
}

const checkForWin = (playerMove, aiMove) => {
    let combo = playerMove + aiMove;
    switch (combo) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            statusMsg = "Game is Tied!";
            ties++;
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            statusMsg = "You won!"
            humanWins++;
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            statusMsg = "Ai won."
            aiWins++;
            break;
    }
}

// This function returns either "rock" / "paper" / or "scissors"
const randAiMove = () => {
    let randIdx = Math.floor(Math.random() * 3);
    let selectedAiMove = MOVESET[randIdx];
    return selectedAiMove;
}



/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
playControls.addEventListener('click', handleClick); // Event Delegation