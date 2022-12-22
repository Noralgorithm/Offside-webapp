import React from 'react'
import Filter from './Filter'
import { BiSearch } from "react-icons/bi"

function FilterPlayer() {
  return (
    <div className='w-full h-full flex justify-evenly gap-2 items-center'>
        <label htmlFor="" className='flex bg-black bg-opacity-30 rounded p-2 gap-1' >
            <input type="text" placeholder='Buscar... ' className='rounded bg-black bg-opacity-0 text-white text-center font-semibold' /><BiSearch size="1.5rem" color='white' />
        </label>
        <Filter />
        <Filter />
    </div>
  )
}

export default FilterPlayer