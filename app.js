// constants

// variables and state

// DOM references
const playControls = document.querySelector('#left');
// functions

// runs at start of game
// need to reset all teh state variables and update DOM
const initialize = event => {

}

const handleClick = event => {
    let playerMove = event.target.alt

}
// event listeners
document.addEventListener('DOMContentLoaded', initialize)
playControls.addEventListener('click', handleClick);