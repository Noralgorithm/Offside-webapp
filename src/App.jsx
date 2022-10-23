import React from 'react'
import { Routes, Route, Link} from "react-router-dom";
import Registration from './pages/Registration';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<h1>home c: <br/><Link to='/signup'>registrate mi loco</Link></h1>} />
      <Route path='/signup' element={<Registration />}/> 
    </Routes>
  )
}

export default App