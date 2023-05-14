import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Puppy from './Puppy';
import Search from './Search';
const AllRoutes = () => {


  return (
    <div>
       <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/puppy/:breed' element={<Puppy/>} />
            <Route path='/search' element={<Search/>} />
        </Routes>
    </div>
  )
}


export default AllRoutes
