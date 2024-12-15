import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Gadget from './Components/Gadget';
import Laptops from './Components/Gadget/Laptops.jsx';
import SmartDevices from './Components/Gadget/SmartDevices.jsx';
import Watchs from './Components/Gadget/Watchs.jsx';
import EarBuds from './Components/Gadget/EarBuds.jsx';

const App = () => {
 
  return (
    <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gadgets" element={<Gadget />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/smartdevices" element={<SmartDevices />} />
            <Route path="/watchs" element={<Watchs />} />
            <Route path="/earBuds" element={<EarBuds />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
  )
}

export default App
