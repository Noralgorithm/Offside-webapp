import React from 'react'
import Filter from './Filter'
import { BiSearch } from "react-icons/bi"
import { setBenchTeamFilter, setBenchPositionFilter, setBenchPlayerNameSearch } from '../../../features/fantasy/fantasySlice';
import { useSelector } from 'react-redux';

function FilterPlayer({ dispatch }) {

  const fantasyState = useSelector(state => state.fantasy);

  const handleTeamFilter = (e) => {
    dispatch(setBenchTeamFilter(e.target.value));
  }

  const handlePositionFilter = (e) => {
    dispatch(setBenchPositionFilter(e.target.value));
  }

  const handlePlayerNameSearch = (e) => {
    dispatch(setBenchPlayerNameSearch(e.target.value));
  }

  const positions = [
    {id: 'delantero', name: 'Delantero'},
    {id: 'defensa', name: 'Defensa'},
    {id: 'medio campo', name: 'Medio Campo'},
    {id: 'arquero', name: 'Arquero'}
  ]

  return (
    <div className='w-full h-full flex justify-evenly gap-2 items-center'>
        <label htmlFor="" className='flex bg-black bg-opacity-30 rounded p-2 gap-1' >
            <input type="text" onChange={handlePlayerNameSearch} placeholder='Buscar... ' className='rounded bg-black bg-opacity-0 text-white text-center font-semibold' /><BiSearch size="1.5rem" color='white' />
        </label>
        <Filter handleFilter={handleTeamFilter} options={fantasyState.teamList}>Equipo</Filter>
        <Filter handleFilter={handlePositionFilter} options={positions}>Posición</Filter>
    </div>
  )
}

export default FilterPlayer