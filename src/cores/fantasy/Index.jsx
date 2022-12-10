import React from 'react'
import Navbar from '../../components/Navbar'
import Fantasy from './Fantasy'

export function Index() {
  return (
    <div className='w-screen h-screen flex flex-col'>
        <Navbar />
        <Fantasy />
    </div>
  )
}
