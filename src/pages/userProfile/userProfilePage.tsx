import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import AuctionLotItem from "../../components/auctionItem/auctionItem.tsx";
import "./userProfilePage.css";
import {
  AuctionItemProps,
  UserResponse,
  AuctionLotListResponse,
} from "../../types";

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [auctionLots, setAuctionLots] = useState<
    AuctionLotListResponse["response"]
  >([]);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    fetch("http://localhost:8080/users/", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        fetch(`http://localhost:8080/auction-lots/users/${data.id}`, {
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => setAuctionLots(data.response));
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const goToBids = () => {
    navigate("/your-bids-route"); // Replace '/your-bids-route' with the actual path
  };

  if (!user || !auctionLots) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-page">
      <div className="header-container">
        <h1>Welcome back, {user.username}!</h1>
        <button className="go-to-bids-btn" onClick={goToBids}>
          Перейти до ваших ставок
        </button>
      </div>
      <section>
        <h2>Your Auction Lots</h2>
        <div className="auction-items-container">
          {auctionLots.map((lot) => (
            <AuctionLotItem key={lot.id} {...lot} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default UserProfilePage;
