# AI Tic Tac Toe
## Microsoft Mars Colonization Program - Engage 2020
A Tic Tac Toe Game that leverages Artificial Intelligence to calculate the best move and keep the Mars Crew entertained.

## Website Link
https://relaxedcoder.github.io/Mars-Colonization-Program/

## Algorithm Used
The minimax algorithm is used for calculating the best move.

## Game Functionality
### Number of Players
The player can select the number of players willing to play the game. The options available are **1 Player** and **2 Player**.
In the 1 Player option, the player plays against the computer which calculates the best move according to the current difficulty level.
In the 2 Player option, two players can play against each other.

### Change Player name
In the 2 Player mode, the players can change the default name provided, i.e., "Player 1" and "Player 2", to any name they want.

### Change First move
In the 1 Player mode, the player can decide who will go first in the game, the human or the computer.

### Change Difficulty level
In the 1 Player mode, the player can change the difficulty level of the computer. The difficulty in the game is adjusted by tweaking the ```max_depth``` parameter of the algorithm.

### Display suggestions
In both modes, the player(s) can check this option for display the best move possible in the current game state.

### Restart Game
At any point in the game, the player(s) can restart the game which will clear the board and make it ready for a new game.

## Tech stack
The entire game is built on the ReactJS framework. The latest featuers including ```useState``` and ```useEffect``` are used to ensure best practices and optimum performance.
Deployed with github pages.

## Mobile Responsive Design
The game is playable on mobile browsers including Chrome, Safari, Opera etc.
