import React from 'react'
import FantasyPlayer from "../FantasyPlayer";
import EmptyFantasyPlayer from '../EmptyFantasyPlayer';

function Defenders() {
  return (
    <div className='w-full flex justify-center items-end gap-2'>
        <FantasyPlayer />
        <EmptyFantasyPlayer />
        <FantasyPlayer />
        <FantasyPlayer />
    </div>
  )
}

export default Defenders