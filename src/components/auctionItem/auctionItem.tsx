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
          <span className="auction-item-label">Поточна ставка:</span>
          <span>{lot.currentBid?.price}</span>
        </div>
        <div className="auction-item-detail">
          <span className="auction-item-label">Кінцева дата:</span>
          <span>{new Date(lot.endDateTime).toLocaleString()}</span>
        </div>
        <div className="auction-item-detail">
          <span className="auction-item-label">Кількість ставок:</span>
          <span>{lot.bidsCount?lot.bidsCount:"Ставок поки що немає"}</span>
        </div>
        <button className="auction-item-button">Детальніше</button>
      </div>
    </div>
  );
}

export default AuctionItem;
