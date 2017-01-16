let program = require('commander');


// My Goal is to lay out the instructions for the game
// Then let the user input coordinates
// When the user inputs coordinates, I will use commander to pick up the command
// Then I'll toggle the appropriate piece in the board.
//

let makeBoard = function(toggle) {
  let boardArray = [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']];
  let count = 0;

  toggleBoard(toggle);

  return boardArray;
};

function toggleBoard(coordinates) {
  return coordinates;
}


console.log('Welcome to this tic tac toe game. Please enjoy your time here responsibly.');
console.log('If you have any questions feel free to write --help');
console.log('here is your board, if you want to add a tic or tac, input a number coordinates like so [0,0]');
console.log('This will toggle an O to an X and back again');

console.log(makeBoard());


program
  .version('0.0.1')
  .command('toggle [name]', 'toggles a tic');

// program
//   .on('toggle', )

program.parse(process.argv);
