import React from 'react'
import FantasyPlayer from "../FantasyPlayer";
import EmptyFantasyPlayer from '../EmptyFantasyPlayer';

function GoalKeeper() {
  return (
    <div className='w-full flex justify-center items-end'>
        <EmptyFantasyPlayer />
    </div>
  )
}

export default GoalKeeper