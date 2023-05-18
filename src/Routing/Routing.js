import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from '../pages/About/About';


const Routing= () => {
  return (
    <Router>
      <Routes>
        <Route path = '/about' element={<About/>}></Route>
      </Routes>
    </Router>
  )
}

export default Routing