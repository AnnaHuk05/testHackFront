import React from "react";
import AuctionItem from "../../components/auctionItem/auctionItem.tsx";
import SidePanel from "../../components/sidePanel/sidePanel.tsx";
import "./mainAuctionPage.css";
import { AuctionLotPartialResponse } from "../../types.ts";


interface MainAuctionPageProps {
  auctions: AuctionLotPartialResponse[];
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
