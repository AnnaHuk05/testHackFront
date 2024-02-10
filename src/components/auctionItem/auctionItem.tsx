// AuctionItem.tsx
import React from "react";
import "./auctionItem.css";
import { AuctionLotPartialResponse } from "../../types";

function AuctionItem(lot : AuctionLotPartialResponse) {
  return (
    <div className="auction-item">
      <img src={lot.imageNames[0]} alt={lot.name} className="auction-item-img"/>
      <h3>{lot.name}</h3>
      <p>Current price: {lot.currentBid?.price}</p>
      <p>End date: {lot.endDateTime}</p>
      <p>Bids: {5}</p>
      <button>View Details</button>
    </div>
  );
}

export default AuctionItem;
