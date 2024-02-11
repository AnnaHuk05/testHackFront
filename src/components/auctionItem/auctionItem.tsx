import React from "react";
import "./auctionItem.css";
import { AuctionLotPartialResponse } from "../../types";
import placeholder from "../../image-na.png";

function AuctionItem(lot : AuctionLotPartialResponse) {
  return (
    <div className="auction-item">
      <img src={lot.imageNames[0]? lot.imageNames[0]: placeholder} alt={lot.name} className="auction-item-img"/>
      <div className="auction-item-content">
        <h3 className="auction-item-title">{lot.name}</h3>
        <div className="auction-item-detail">
          <span className="auction-item-label">Current price:</span>
          <span>{lot.currentBid?.price}</span>
        </div>
        <div className="auction-item-detail">
          <span className="auction-item-label">End date:</span>
          <span>{lot.endDateTime}</span>
        </div>
        <div className="auction-item-detail">
          <span className="auction-item-label">Bids:</span>
          <span>{5}</span>
        </div>
        <button className="auction-item-button">View Details</button>
      </div>
    </div>
  );
}

export default AuctionItem;
