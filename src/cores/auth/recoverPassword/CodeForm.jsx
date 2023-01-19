import React from 'react'
import { BiLockAlt } from "react-icons/bi";

function CodeForm({ setRecoverCode }) {
  return (
    <form
      onSubmit={(e) => {setRecoverCode(false)}}
      className="h-[65%] w-10/12 flex flex-col justify-around items-center"
    >
      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center">
      <BiLockAlt size="1.5rem" color="#808080" />
        <input
          type="number"
          required
          placeholder="Código"
          name="email"
          className="w-full p-2 rounded border-none font-semibold focus:outline-none"
        />
      </label>

      <button
        type="submit"
        className="md:w-4/5 w-full bg-gradient-offside border-none p-3 text-white text-lg hover:cursor-pointer font-semibold rounded-full"
      >
        Enviar
      </button>
    </form>
  )
}

export default CodeForm