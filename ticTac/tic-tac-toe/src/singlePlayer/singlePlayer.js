import React from 'react'
import Schema from '../schema/schema';
import "./singlePlayer.css"

function SinglePlayer() {
  return (
    <div className='startScreen'>
        <h1 className='startTitle'>Comincia tu</h1>
        <Schema segno={"O"}></Schema>
    </div>
  )
}

export default SinglePlayer;