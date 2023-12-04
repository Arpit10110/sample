import React from 'react'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Nav from "./components/Nav.jsx"
import Cart from "./components/Cart.jsx"
const App = () => {
  return  ( 
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    )
  
}

export default App
