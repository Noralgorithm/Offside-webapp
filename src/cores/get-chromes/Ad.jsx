import React from 'react'

const Ad = ({ imgSource, adLink }) => {

  return (
    <div>
      <a target='_blank' rel='noreferrer' href={adLink}><img src={imgSource} alt='an add :p' /></a>
    </div>
  )
}

export default Ad