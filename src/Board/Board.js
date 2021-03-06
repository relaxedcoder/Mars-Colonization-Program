import React, { useEffect } from 'react'
import styles from './Board.module.css'

export default function Board(props) {
    const { suggestions, bestMove } = props

    useEffect(() => {
        let cellsArray = document.getElementsByClassName('cell')
        for (var i = 0; i < 9; i++) {
            if (i === bestMove) {
                if (suggestions) cellsArray[i].style.backgroundColor = 'palegreen'
                else cellsArray[i].style.backgroundColor = '#ffd460'
            }
            else cellsArray[i].style.backgroundColor = '#ffd460'
        }
    }, [suggestions, bestMove])

    return (
        <div className={styles.board}>
            <div className={styles.row}>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(0)}>{props.board[0]}</div>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(1)}>{props.board[1]}</div>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(2)}>{props.board[2]}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(3)}>{props.board[3]}</div>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(4)}>{props.board[4]}</div>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(5)}>{props.board[5]}</div>
            </div>
            <div className={styles.row}>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(6)}>{props.board[6]}</div>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(7)}>{props.board[7]}</div>
                <div className={styles.cell + ' cell'} onClick={() => props.playMove(8)}>{props.board[8]}</div>
            </div>
        </div>
    )
}