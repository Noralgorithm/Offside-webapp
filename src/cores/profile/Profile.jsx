import React from 'react'
import Navbar from '../../components/Navbar'
import UserProfile from './UserProfile'

function Profile() {
  return (
    <div className='w-screen h-screen flex flex-col'>
        <Navbar />
        <UserProfile />
    </div>
  )
}

export default Profile