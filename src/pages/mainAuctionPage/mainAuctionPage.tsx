import React from "react";
import AuctionItem from "../../components/auctionItem/auctionItem.tsx";
import SidePanel from "../../components/sidePanel/sidePanel.tsx";
import "./mainAuctionPage.css";

interface Auction {
  id: number;
  image: string;
  name: string;
  currentPrice: string;
  endDate: string;
  numOfBids: number;
}

interface MainAuctionPageProps {
  auctions: Auction[];
}

const MainAuctionPage: React.FC<MainAuctionPageProps> = ({ auctions }) => (
  <div className="main-auction-container">
    <SidePanel />
    <div className="auction-items-container">
      {auctions.map((auction) => (
        <AuctionItem key={auction.id} {...auction} />
      ))}
    </div>
  </div>
);

export default MainAuctionPage;
