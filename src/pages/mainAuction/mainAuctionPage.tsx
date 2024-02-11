import React, { useState,useEffect } from "react";
import AuctionItem from "../../components/auctionItem/auctionItem.tsx";
import SidePanel from "../../components/sidePanel/sidePanel.tsx";
import "./mainAuctionPage.css";
import { AuctionLotPartialResponse } from "../../types.ts";
import { SERVER_URL } from "../../constants.ts";


interface MainAuctionPageProps {
  auctions: AuctionLotPartialResponse[];
}

const MainAuctionPage: React.FC = () => {
  const [auctions, setAuctions] = useState<AuctionLotPartialResponse[]>([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 4000],
  });
  
  const fetchFilteredAuctions = async (filterParams) => {
    if(filterParams.categories[0] === "RESET" || filterParams.priceRange.length === 0) {
      fetchAuctions();
      return;
    }
    try {
      const queryString = new URLSearchParams({
        categories: filterParams.categories.join(','),
        minPrice: filterParams.priceRange[0],
        maxPrice: filterParams.priceRange[1],
      }).toString();
      
      const response = await fetch(`${SERVER_URL}auction-lots/?${queryString}`);
      const data = await response.json();
      setAuctions(data.response.content);
    } catch (error) {
      console.error("Failed to fetch filtered auctions", error);
    }
  };

  const fetchAuctions = async () => {
    try {
      const response = await fetch(`${SERVER_URL}auction-lots/`);
      const data = await response.json();
      setAuctions(data.response.content);
    } catch (error) {
      console.error("Failed to fetch auctions", error);
    }
  }

  useEffect(() => {
    fetchAuctions();
  }, []);
  

  return (
    <div className="main-auction-container">
      <SidePanel onFilterApply={fetchFilteredAuctions} />
      <div className="auction-items-container">
        {auctions.map((auction) => (
          <AuctionItem key={auction.id} {...auction} />
        ))}
      </div>
    </div>
  );

}

export default MainAuctionPage;
