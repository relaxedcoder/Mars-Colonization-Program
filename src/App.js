import React, { useState, useEffect } from 'react'
import './App.css'

import { isGameOver, generateBestMove } from './utils/gameFunctions'

import Board from './Board/Board'
import GameOver from './GameOver/GameOver'

export default () => {
    /* Game Settings */
    const [numPlayers, setNumPlayers] = useState(1)
    const [player1Name, setPlayer1Name] = useState('')
    const [player2Name, setPlayer2Name] = useState('')
    const [difficulty, setDifficulty] = useState(4)

    /* Game State */
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
    const [move, setMove] = useState(true)
    const [moves, setMoves] = useState(0)
    const [isFinished, setIsFinished] = useState(false)
    const [winner, setWinner] = useState('')

    /* Function to play a Move on the Board */
    const playMove = (position) => {
        if (!isFinished && !board[position]) {
            board[position] = 'X'
            setBoard(board.map((value, index) => {
                if (index === position) return (move ? 'X' : 'O')
                else return value
            }))
            setMoves(moves + 1)
            setMove(!move)
        }
    }

    /* Function to reset game */
    function restartGame() {
        setBoard(['', '', '', '', '', '', '', '', ''])
        if (numPlayers === 1 && player1Name === 'Computer') setMove(false)
        setIsFinished(false)
        setMoves(0)
        setWinner('')
    }

    /* Execute on Board state change */
    useEffect(() => {
        let finished = isGameOver(board)
        if (moves === 9 || finished) {
            setIsFinished(true)
            setWinner(finished)
        }
        else {
            let player = move ? 'X' : 'O'
            let bestMove = generateBestMove(board, moves, player, difficulty)
            if (numPlayers === 1 && !move) playMove(bestMove)
        }
    }, [board, moves, move, difficulty, numPlayers])

    /* Execute on game finish */
    useEffect(() => {
        if (winner === 'X') setWinner(player1Name)
        else if (winner === 'O') setWinner(player2Name)
        else if (moves === 9) setWinner('No one')
    }, [isFinished, winner, moves, player1Name, player2Name])

    /* Change name of players */
    useEffect(() => {
        if (numPlayers === 1) {
            setPlayer1Name('Human')
            setPlayer2Name('Computer')
        }
        else {
            setPlayer1Name('Player 1')
            setPlayer2Name('Player 2')
        }
    }, [numPlayers])

    /* Execute on change of number of players */
    useEffect(() => {
        restartGame()
    }, [numPlayers])

    /* Execute if first player changes */
    useEffect(() => {
        if (player1Name === 'Computer') setMove(false)
    }, [player1Name, player2Name])

    return (
        <div>
            {winner && <GameOver
                winner={winner}
                restartGame={restartGame} />
            }
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ fontSize: 'xxx-large' }}>Tic Tac Toe</p>
            </div>
            <div className='main'>
                <div className='settings'>
                    <div>
                        <p style={{ fontSize: 'x-large' }}>Settings</p>
                        <div>
                            <p>Number of Players: {`${numPlayers} Player`}</p>
                            <button onClick={() => setNumPlayers(1)}>1 Player</button>
                            <button onClick={() => setNumPlayers(2)}>2 Player</button>
                        </div>
                        {numPlayers === 1 &&
                            <div>
                                <p>First move: {player1Name}</p>
                                <button onClick={() => {
                                    setPlayer1Name('Human')
                                    setPlayer2Name('Computer')
                                    restartGame()
                                }}>Human</button>
                                <button onClick={() => {
                                    setPlayer1Name('Computer')
                                    setPlayer2Name('Human')
                                    restartGame()
                                }}>Computer</button>
                            </div>
                        }
                        {numPlayers === 1 &&
                            <div>
                                <p>Difficulty: {difficulty < 9 ? difficulty : 'Infinity'}</p>
                                <input
                                    type='range'
                                    min='1'
                                    max='9'
                                    value={difficulty}
                                    onChange={event => setDifficulty(event.target.value)} />
                            </div>
                        }
                        <div>
                            <p>Display suggestions?</p>
                            <input type='checkbox' />
                        </div>
                        <button onClick={restartGame}>Restart Game</button>
                    </div>
                </div>
                <div className='game'>
                    <Board
                        board={board}
                        playMove={playMove}
                    />
                </div>
            </div>

        </div>
    )
}