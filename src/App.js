import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LotInfoPage from "./pages/LotInfo/lotInfoPage.tsx";
import MainAuctionPage from "./pages/mainAuction/mainAuctionPage.tsx";
import Header from "./components/header/header.tsx";
import './App.css';
import UserProfilePage from "./pages/userProfile/userProfilePage.tsx";

/*
export interface AuctionLotPartialResponse {
  id: number;
  name: string;
  startPrice: number;
  minIncrease: number;
  description: string;
  currentBid: AuctionBid;
  endDateTime: string;
  startDateTime: string;
  imageNames: string[];
  categories: string[];
}
*/

function App() {
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const response = await fetch('http://localhost:8080/auction-lots/');
        const data = await response.json();
        const adaptedAuctions = data.response.content.map(auction => ({
          id: auction.id,
          name: auction.name,
          startPrice: auction.startPrice,
          minIncrease: auction.minIncrease,
          description: auction.description,
          currentBid: auction.currentBid ? {
            id: auction.currentBid.id,
            price: auction.currentBid.price,
            dateTime: auction.currentBid.dateTime
          } : null,
          endDateTime: auction.endDateTime,
          startDateTime: auction.startDateTime,
          imageNames: auction.imageNames,
          categories: auction.categories
        }));
        setAuctions(adaptedAuctions);
      } catch (error) {
        console.error("Failed to fetch auctions", error);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainAuctionPage auctions={auctions}/>} />
        <Route path="/lotInfo" element={<LotInfoPage />} />
        <Route path="/user-info" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );


}

export default App;
