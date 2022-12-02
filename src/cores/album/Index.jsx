import React from 'react'
import Navbar from '../../components/Navbar'
import Album from './Album'

function Index() {
  return (
    <div className='flex flex-col w-screen h-screen'>
        <Navbar />
        <Album />
    </div>
  )
}

export default Index