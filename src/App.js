
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LotInfoPage from "./pages/LotInfo/lotInfoPage.tsx";
import './App.css';

function App() {
  return(
    <Router>
     
        <Routes>
          <Route path="/" element={<LotInfoPage />} />
         
        </Routes>
    </Router>
  );
  
 
}

export default App;
