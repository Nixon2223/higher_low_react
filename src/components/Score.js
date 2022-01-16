import React, {useState} from 'react';
import LifeList from './LifeList';

const Score = ({onHigherClick, onLowerClick, card, nextCard}) => {

    const [score, setScore] = useState(0)
    const [lives, setLives] = useState([1,1,1,1,1])

    const scoreArr = ["2", "3", "4", "5", "6,", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]

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
        <button onClick={handleHigherClick}>higher</button>
        <button onClick={handleLowerClick}>lower</button>
        <p>{score}</p>
        <LifeList lives = {lives}/>
        </>
    )
}

export default Score;