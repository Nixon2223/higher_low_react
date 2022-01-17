import React, {useEffect, useState} from 'react';
import LifeList from './LifeList';
import './Score.css';

const Score = ({onHigherClick, onLowerClick, card, nextCard, gameOver, onGameOver}) => {

    const [score, setScore] = useState(0)
    const [lives, setLives] = useState([1,1,1,1,1])

    const scoreArr = ["2", "3", "4", "5", "6,", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

    useEffect(() => {
        if (Number(lives.length) === 0){
            onGameOver()}
        onHigherClick()
    },[lives], [score])

    const handleHigherClick = () => {
            onHigherClick()
            if(scoreArr.indexOf(card.value) <= scoreArr.indexOf(nextCard.value)){
            setScore(score + 1)
            }else{
                let redArr
                redArr = [...lives]
                redArr.pop()
                setLives(redArr)
            }
        }
          
    const handleLowerClick = () => {
        onLowerClick()
        if(scoreArr.indexOf(card.value) >= scoreArr.indexOf(nextCard.value)){
        setScore(score + 1)
        }else{
            let redArr
            redArr = [...lives]
            redArr.pop()
            setLives(redArr)
        }
    }

    return (
        <>
        <div id = "score">
        {gameOver === false?<button onClick={handleHigherClick}>higher</button> : null}
        {gameOver === false?<button onClick={handleLowerClick}>lower</button> : null}
        <p id ="score-box">{gameOver === true? "Score: " : null}{score}</p>
        <LifeList lives = {lives}/>
        </div>
        </>
    )
}

export default Score;