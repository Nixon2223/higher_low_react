import {useState, useEffect} from "react"
import Card from "../components/Card"
import Score from "../components/Score"
import './HighLow.css';

function HighLowBox() {

    const [deck, setDeck] = useState("")
    const [card, setCard] = useState("")
    const [nextCard, setNextCard] = useState("")


    useEffect(() => {
        if (deck === ""){fetchDeck()
        }else{drawCard()}
    }, [deck])

    useEffect(() => {
      if (card === "" & deck !== ""){drawCard()}
    },)

    useEffect(() => {
    if (nextCard === undefined){drawCard()}
    },)



    const fetchDeck =  () => {
      fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(response => response.json())
      .then(data => setDeck(data.deck_id))
      .catch(err => console.error)
    }

    const drawCard =  () => {
        setCard(nextCard)
        fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
        .then(response => response.json())
        .then(data => setNextCard(data.cards[0]))
        .catch(err => console.error)
      }



    const onHigherClick = () => {
      drawCard()

    }

    const onLowerClick = () => {
      drawCard()   
    }
    


  return (
    <div id="high-low">
    {/* <button onClick={drawCard}>Draw</button> */}
    <br></br>
    <Card card ={card}/>
    <Score onHigherClick= {onHigherClick} onLowerClick= {onLowerClick} card ={card} nextCard ={nextCard}/>
    </div>
  );
}

export default HighLowBox