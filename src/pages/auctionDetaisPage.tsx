import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {Carousel} from '../components/caorusel/carousel.tsx';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import { SERVER_URL } from '../constants.ts';
//import './AuctionDetailsPage.css'; // Assume your CSS file is named this
import { AuctionLotPartialResponse } from '../types.ts';

const AuctionDetailsPage = () => {
  const [auction, setAuction] = useState<AuctionLotPartialResponse|undefined>();
  const [bidAmount, setBidAmount] = useState('');
  const { lot_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        console.log(`${SERVER_URL}auction-lots/1`);
        const response = await fetch(`${SERVER_URL}auction-lots/${lot_id}/`, {
            credentials: "include",
          });
        console.log(response);
        const data = await response.json();
        console.log(data);
        setAuction(data);
      } catch (error) {
        console.error('Error fetching auction details:', error);
        toast.error('Could not fetch auction details.');
      }
    };

    fetchAuctionDetails();
  }, [lot_id]);

  const handleBidSubmit = async () => {
    // Validate bid
    if (new Date(auction?.endDateTime) < new Date()) {
      toast.error('The auction has already ended.');
      return;
    }
    if (parseFloat(bidAmount) <= (auction?.currentBid?.price || 0) + auction.minIncrease) {
      toast.error(`Your bid must be higher than the current bid by at least ${auction?.minIncrease}.`);
      return;
    }

    // Submit bid
    try {
      const response = await fetch(`${SERVER_URL}auction-lots/${lot_id}/bids/`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: bidAmount }),
      });

      if (response.ok) {
        toast.success('Your bid was successful!');
        navigate('/user-info');
      } else {
        toast.error('Failed to place bid. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting bid:', error);
      toast.error('There was an error placing your bid.');
    }
  };

  if (!auction) {
    return <div>Loading...</div>;
  }

  return (
    <div className="auction-details">
      <Carousel data={auction.imageNames.map((src, index) => {
              return {
                src,
                alt: `Slide ${index + 1}`,
              };
            })}>
      </Carousel>
      <div className="auction-info">
        <h1>{auction.name}</h1>
        <p>{auction.description}</p>
        <p>Number of bids: {auction?.auctionBids?.length}</p>
        <p>Current bid: {auction.currentBid?.price}</p>
        <p>Time remaining: {/* Render the time remaining here */}</p>
        <div className="bid-input">
          <Input
            placeholder="Your bid"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            type="number"
          />
          <Button onClick={handleBidSubmit}>Place bid</Button>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetailsPage;
