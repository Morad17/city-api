import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CityDetails from "./pages/CityDetails";

import { getCities } from './api'
import Navbar from "./components/Navbar";

const App = () => {

  const [cities, setCities] = useState([])
  
  useEffect(()=> {
    getCities()
      .then((data) => {
        console.log(data)
        setCities(data)
      })
  }, [])
  

return (
  <div className="app">
    <Navbar />
    <Home />
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cityDetails" element={<CityDetails />}></Route>
      </Routes>
    </div>
  </div>
)}
export default App;
