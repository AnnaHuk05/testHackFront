// AuctionItem.tsx
import React from "react";
import "./auctionItem.css";

interface AuctionItemProps {
  image: string;
  name: string;
  currentPrice: string;
  endDate: string;
  numOfBids: number;
}

function AuctionItem({ image, name, currentPrice, endDate, numOfBids }: AuctionItemProps) {
  return (
    <div className="auction-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Current price: {currentPrice}</p>
      <p>End date: {endDate}</p>
      <p>Bids: {numOfBids}</p>
      <button>View Details</button>
    </div>
  );
}

export default AuctionItem;
