/* Function to determine game winner */
export const isGameOver = (board) => {
    /* Check for row victory */
    for (let i = 0; i < 3; i++) {
        if (board[3 * i]) if (board[3 * i] === board[3 * i + 1] && board[3 * i] === board[3 * i + 2]) return board[3 * i]
    }

    /* Check for column victory */
    for (let i = 0; i < 3; i++) {
        if (board[i]) if (board[i] === board[i + 3] && board[i] === board[i + 6]) return board[i]
    }

    /* Check for diagonal victory */
    if (
        (board[0] === board[4] && board[0] === board[8]) ||
        (board[2] === board[4] && board[2] === board[6])
    ) return board[4]
}

/* Minimax algorithm for determining best move */
const minimax = (board, depth, isMax, numMoves, player, difficulty) => {
    if (depth > difficulty) return 0
    var score = isGameOver(board)
    if (score === player) return 10
    else if (score) return -10

    if (numMoves === 9) return 0

    var i
    if (isMax) {
        let best = -1000
        for (i = 0; i < 9; i++) {
            if (!board[i]) {
                board[i] = (numMoves % 2) ? 'O' : 'X'
                best = Math.max(best, minimax(board, depth + 1, !isMax, numMoves + 1, player, difficulty))
                board[i] = ''
            }
        }
        return best
    }
    else {
        let best = 1000;
        for (i = 0; i < 9; i++) {
            if (!board[i]) {
                board[i] = (numMoves % 2) ? 'O' : 'X'
                best = Math.min(best, minimax(board, depth + 1, !isMax, numMoves + 1, player, difficulty))
                board[i] = ''
            }
        }
        return best
    }
}

/* Function that tries all possible moves and determines best one */
export const generateBestMove = (board, numMoves, isComputer, difficulty) => {
    var bestVal = -1000
    var bestMove
    for (var i = 0; i < 9; i++) {
        if (!board[i]) {
            let player = (numMoves % 2) ? 'O' : 'X'
            board[i] = player
            var moveVal
            if (isComputer) moveVal = minimax(board, 0, false, numMoves + 1, player, difficulty)
            else moveVal = minimax(board, 0, false, numMoves + 1, player, 9)
            board[i] = ''
            if (moveVal > bestVal) {
                bestMove = i
                bestVal = moveVal
            }
        }
    }
    return bestMove
}