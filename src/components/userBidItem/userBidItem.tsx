import React from 'react';
import { useNavigate } from 'react-router-dom';
import './userBidItem.css';
import { UserBidItemProps } from '../../types';
import { format } from 'date-fns';



function UserBidItem (bid: UserBidItemProps) {
    const navigate = useNavigate();
    const isHighestBid = bid.price >= bid.biggestBid;
    const bidDate = format(new Date(bid.bidAt), 'yyyy-MM-dd HH:mm:ss');
  
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