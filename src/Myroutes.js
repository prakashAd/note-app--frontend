import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Signin from './pages/Signin'
import ReactNotes from './pages/ReactNotes'
const Myroutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reactnotes' element={<ReactNotes/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Myroutes