import React from 'react'
import FantasyPlayer from "../FantasyPlayer";
import EmptyFantasyPlayer from '../EmptyFantasyPlayer';

function Strikers() {
  return (
    <div className='w-full flex justify-evenly items-end'>
        <FantasyPlayer />
        <FantasyPlayer />
        <FantasyPlayer />
    </div>
  )
}

export default Strikers