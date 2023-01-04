import React from 'react'
import { useSelector } from 'react-redux'

function StickersCounter() {
  const currentTeam = useSelector(state => state.album.currentTeam)

  return (
    <h1 className='text-xl font-semibold'>{currentTeam.currentPage}/{currentTeam.pages}</h1>
  )
}

export default StickersCounter