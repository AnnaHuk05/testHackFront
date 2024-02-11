import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LotInfoPage from "./pages/LotInfo/LotInfoPage.tsx";
import MainAuctionPage from "./pages/mainAuction/mainAuctionPage.tsx";
import Header from "./components/header/Header.tsx";
import UserProfilePage from "./pages/userProfile/userProfilePage.tsx";
import './App.css';
import { SERVER_URL } from "./constants.ts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAuctionPage from "./pages/addAuction/addAuctionPage.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<MainAuctionPage/>} />
        <Route path="/lotInfo" element={<LotInfoPage />} />
        <Route path="/user-info" element={<UserProfilePage />} />
        <Route path="/add-lot" element={<AddAuctionPage />} />
      </Routes>
    </Router>
  );
}

export default App;