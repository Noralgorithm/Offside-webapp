import React from 'react'
import RankingCard from './RankingCard'

function RankingList() {
  return (
    <div className='w-full md:h-[75%] h-[82%] grid grid-cols-1 content-start gap-8 overflow-y-scroll banca'>
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
        <RankingCard />
    </div>
  )
}

export default RankingList