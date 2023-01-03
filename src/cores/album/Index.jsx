import React from 'react'
import Navbar from '../../components/Navbar'
import PreAlbum from './PreAlbum'

function Index() {
  return (
    <div className='flex flex-col w-screen md:h-screen h-[1200px]'>
        <Navbar />
        <PreAlbum />
    </div>
  )
}

export default Index