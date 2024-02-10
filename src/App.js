import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LotInfoPage from "./pages/LotInfo/LotInfoPage.tsx";
import MainAuctionPage from "./pages/mainAuctionPage/mainAuctionPage.tsx";
//import Header from "./components/header/header.tsx";
import './App.css';

function App() {
  const auctions = [
    {
      image: "https://www.bonhams.com/media/lot/lot/634/17/1/634_17_l.jpg",
      name: "Lot 1",
      currentPrice: "£100",
      endDate: "2021-10-10",
      numOfBids: 5
    },
    {
      image: "https://www.bonhams.com/media/lot/lot/634/17/1/634_17_l.jpg",
      name: "Lot 2",
      currentPrice: "£200",
      endDate: "2021-10-10",
      numOfBids: 5
    },
    {
      image: "https://www.bonhams.com/media/lot/lot/634/17/1/634_17_l.jpg",
      name: "Lot 3",
      currentPrice: "£300",
      endDate: "2021-10-10",
      numOfBids: 5
    },
    {
      image: "https://www.bonhams.com/media/lot/lot/634/17/1/634_17_l.jpg",
      name: "Lot 4",
      currentPrice: "£400",
      endDate: "2021-10-10",
      numOfBids: 5
    },
    {
      image: "https://www.bonhams.com/media/lot/lot/634/17/1/634_17_l.jpg",
      name: "Lot 5",
      currentPrice: "£500",
      endDate: "2021-10-10",
      numOfBids: 5
    }
  ]
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<MainAuctionPage auctions={auctions}/>} />
        <Route path="/lotInfo" element={<LotInfoPage />} />
      </Routes>
    </Router>
  );


}

export default App;
