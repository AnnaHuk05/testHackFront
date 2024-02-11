import React from 'react';
import { useNavigate } from 'react-router-dom';
import './userBidItem.css';
import { UserBidItemProps } from '../../types';



function UserBidItem (bid: UserBidItemProps) {
    const navigate = useNavigate();
    const isHighestBid = bid.price >= bid.biggestBid;
    const bidDate = new Date(bid.bidAt).toLocaleString();
  
    const goToLotDetail = () => {
      navigate(`/lot-detail/${bid.lotId}`);
    };
  
    return (
      <div className={`user-bid-item ${isHighestBid ? 'highest-bid' : ''}`}>
        <span className="user-bid-item-lot-name" onClick={goToLotDetail}>{bid.lotName}</span>
        <span className="user-bid-item-price">{bid.price} UAH</span>
        <span className="user-bid-item-status">{isHighestBid ? 'Leading' : 'Outbid'}</span>
        <span className="user-bid-item-date">{bidDate}</span>
      </div>
    );
  };

export default UserBidItem;