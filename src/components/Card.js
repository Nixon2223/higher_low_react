import React from 'react';

const Card = ({card}) => {

    return (
        <>
        <img id="card-img" src ={card.image}/>
        </>
    )
}

export default Card;