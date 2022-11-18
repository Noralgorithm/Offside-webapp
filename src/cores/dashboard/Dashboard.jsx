import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const { userInfo } = useSelector(state => state.user);

  return (
    <>
    <h1>{userInfo.name}</h1>
    <h1>{userInfo.id}</h1>
    <h1>{userInfo.email}</h1>
    </>
  )
}

export default Dashboard