import React, { useState, useEffect } from 'react'
import './App.css'

import { isGameOver, generateBestMove } from './utils/gameFunctions'

import Board from './Board/Board'
import GameOver from './GameOver/GameOver'

import Rover from './assets/rover.gif'

export default () => {
    /* Game Settings */
    const [numPlayers, setNumPlayers] = useState(1)
    const [p1Name, setP1Name] = useState('Human')
    const [p2Name, setP2Name] = useState('Computer')
    const [difficulty, setDifficulty] = useState(4)
    const [suggestions, setSuggestions] = useState(false)

    /* Game State */
    const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
    const [moves, setMoves] = useState(0)
    const [bestMove, setBestMove] = useState(0)
    const [winner, setWinner] = useState('')

    /* Execute on Game Settings change */
    useEffect(() => {
        if (numPlayers === 2) {
            setP1Name('Player 1')
            setP2Name('Player 2')
        }
        restartGame()
    }, [numPlayers, p1Name, p2Name])

    /* Function to play a move */
    function playMove(position) {
        if (!winner && moves < 9 && !board[position]) {
            let move = (moves % 2) ? 'O' : 'X'
            board[position] = move
            setBoard(board.map((value, index) => {
                if (index === position) return move
                else return value
            }))
            setMoves(moves + 1)
        }
    }

    /* Execute on Board state change */
    useEffect(() => {
        setWinner(isGameOver(board))
        let win = isGameOver(board)
        if (moves === 9 || win) {
            if (win) setWinner(win)
            else setWinner('No one')
        }
        else {
            if (numPlayers === 1) {
                if ((p1Name === 'Human' && !(moves % 2)) || (p2Name === 'Human' && moves % 2)) {
                    setBestMove(generateBestMove(board, moves, false))
                }
                else playMove(generateBestMove(board, moves, true, difficulty))
            }
            else setBestMove(generateBestMove(board, moves, false))
        }
    }, [board, moves, difficulty, numPlayers, p1Name, p2Name])

    /* Restart Game */
    function restartGame() {
        setBoard(['', '', '', '', '', '', '', '', ''])
        setMoves(0)
        setWinner('')
    }

    /* Display winner name */
    useEffect(() => {
        if (winner === 'X') setWinner(p1Name)
        else if (winner === 'O') setWinner(p2Name)
    }, [winner, p1Name, p2Name])

    return (
        <div id='container'>
            {winner && <GameOver
                winner={winner}
                restartGame={restartGame} />
            }
            <div id='header'>
                <p style={{ fontSize: 'xxx-large', margin: '20px' }}>AI</p>
                <img src={Rover} height='100px' alt='Mars Rover Gif' />
                <p style={{ fontSize: 'xxx-large', margin: '20px' }}>Tic Tac Toe</p>
            </div>
            <div id='main'>
                <div id='settings'>
                    <p style={{ fontSize: 'xx-large' }}>Settings</p>
                    <div>
                        <div>
                            <p>Number of Players: {numPlayers} Player</p>
                            <button onClick={() => setNumPlayers(1)}>1 Player</button>
                            <button onClick={() => setNumPlayers(2)}>2 Player</button>
                        </div>
                        {numPlayers === 1 && <div>
                            <p>First move: {p1Name}</p>
                            <button onClick={() => {
                                setP1Name('Human')
                                setP2Name('Computer')
                            }}>Human</button>
                            <button onClick={() => {
                                setP1Name('Computer')
                                setP2Name('Human')
                            }}>Computer</button>
                        </div>}
                        {numPlayers === 1 && <div>
                            <p>Difficulty: {difficulty < 9 ? difficulty : 'Infinity'}</p>
                            <input
                                type='range'
                                min='1'
                                max='9'
                                value={difficulty}
                                onChange={event => setDifficulty(event.target.value)} />
                        </div>}
                        <div>
                            <p>Display suggestions?</p>
                            <input
                                type='checkbox'
                                checked={suggestions}
                                onChange={(event) => setSuggestions(event.target.value === 'on' ? true : false)}
                            />
                        </div>
                    </div>
                    <button onClick={restartGame}>Restart Game</button>
                </div>
                <div id='game'>
                    <Board
                        board={board}
                        playMove={playMove}
                    />
                </div>
                <div id='suggestions'>
                    {suggestions && <p
                        style={{ fontSize: 'x-large' }}
                        onClick={() => setSuggestions(false)}
                    >Best move: {bestMove}</p>}
                    {!suggestions && <p
                        style={{ fontSize: 'x-large' }}
                        onClick={() => setSuggestions(true)}
                    >Click to Display Suggestions</p>}
                </div>
            </div>
        </div >
    )
}