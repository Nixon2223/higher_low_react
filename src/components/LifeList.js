import React from 'react'
import Life from './Life'

const LifeList = ({lives}) => {
    const lifeNodes = lives.map((life, index) => {
        return <Life life = {life} key = {index}/>
    })


return (
    <>
        {lifeNodes}
    </>
    
)
}


export default LifeList;