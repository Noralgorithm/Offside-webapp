import React from 'react'
import { BiLockAlt } from "react-icons/bi";
import { verifyCode } from '../../../services/auth.services';

function CodeForm({ setRecoverCode, code, setCode, verifyCode }) {
  return (
    <form
      onSubmit={verifyCode}
      className="h-[65%] w-10/12 flex flex-col justify-around items-center"
    >
      <label className="w-full border-b-2 border-black border-opacity-20 flex items-center">
      <BiLockAlt size="1.5rem" color="#808080" />
        <input
          type="text"
          required
          placeholder="Código"
          name="email"
          value={code}
          onChange={(e) => setCode(e.target.value)}
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