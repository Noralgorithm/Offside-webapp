import React from 'react'
import FantasyPlayer from "../FantasyPlayer";
import EmptyFantasyPlayer from '../EmptyFantasyPlayer';

function Midfielders() {
  return (
    <div className='w-full flex justify-evenly items-end'>
        <EmptyFantasyPlayer />
        <FantasyPlayer />
        <FantasyPlayer />
    </div>
  )
}

export default Midfielders