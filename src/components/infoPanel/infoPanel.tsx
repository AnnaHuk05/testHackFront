import React from "react";
import { AuctionLotPartialResponse } from "../../types";
import "./infoPanel.css";

const lot: AuctionLotPartialResponse = {
    id: 1,
    name: "Назва лоту",
    startPrice: 100,
    minIncrease: 10,
    description: "Опис лоту",
    endDateTime: "2024-12-31T23:59:59",
    startDateTime: "2024-12-01T00:00:00",
    imageNames: ["https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"],
    categories: ["категорія1", "категорія2"],
  }; 

function infoPanel()
{
    return(
    <div className="lot-info">
        <h3 className="auction-item-title">{lot.name}</h3>
        <div className="auction-item-detail">
          <span className="auction-item-label">End date:</span>
          <span>{lot.endDateTime}</span>
        </div>
        <div className="auction-item-detail">
          <span className="auction-item-label">Number of bids:</span>
          <span>{10}</span>
        </div>
        <div className="bid-info">
            <div className="price-info">
            <div className="current-price">
              <span className="auction-item-label">Current price:</span>
              <span>{6000}</span>
            </div >
            <div className="min-increment">
            <span className="auction-item-label">Min increase:</span>
              <span>{lot.minIncrease}</span>
            </div>
              <button className="make-bid-button">Make a bid</button>
            </div>
            <div className="popup-story">
                <button className="openPopUp">show bids story</button>
            </div>
        </div>
      </div>
    );
}

export default infoPanel;