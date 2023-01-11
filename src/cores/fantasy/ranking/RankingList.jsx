import React from 'react'
import RankingCard from './RankingCard'

function RankingList() {
  return (
    <div className='w-[95%] md:h-[75%] h-[82%] bg-white rounded grid grid-cols-1 content-start overflow-y-scroll banca'>
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
    </div>
  )
}

export default RankingList