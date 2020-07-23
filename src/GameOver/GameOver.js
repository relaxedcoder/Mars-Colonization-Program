import React, { useState } from 'react'
import styles from './GameOver.module.css'

export default (props) => {
    const [hidden, setHidden] = useState(false)

    return (
        <div>
            {!hidden && <div className={styles.container} id='contain'>
                <p className={styles.gameover}>Game Over</p>
                <p className={styles.message}>{props.winner} wins</p>
                <button onClick={() => setHidden(true)}>Okay</button>
                <button onClick={() => props.restartGame()}>Restart</button>
            </div>}
        </div >
    )
}