import React from 'react'
import Navbar from '../../components/Navbar'
import Homepage from './Homepage'

export function Index() {
  return (
    <div className='w-screen h-screen flex flex-col'>
        <Navbar />
        <Homepage />
    </div>
  )
}
