import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuctionLotItem from "../../components/auctionItem/auctionItem.tsx";
import { SERVER_URL } from "../../constants.ts";
import {
  UserResponse,
  AuctionLotListResponse,
  UserBidItemProps,
} from "../../types";
import UserBidItem from "../../components/userBidItem/userBidItem.tsx";

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [auctionLots, setAuctionLots] = useState<
    AuctionLotListResponse["response"]
  >([]);
  const [userBids, setUserBids] = useState<UserBidItemProps[]>([]);
  const [view, setView] = useState<"lots" | "bids">("lots");
  const navigate = useNavigate();
  const tempUserBids: UserBidItemProps[] = [
    {
      id: 1,
      lotName: "Lot 1",
      price: 100,
      user: {
        id: 1,
        username: "User 1",
      },
      biggestBid: 1120,
      bidAt: "2021-05-01T12:00:00",
      lotId: 1,
    },
    {
      id: 2,
      lotName: "Lot 2",
      price: 200,
      user: {
        id: 1,
        username: "User 1",
      },
      biggestBid: 200,
      bidAt: "2021-05-01T12:00:00",
      lotId: 2,
    },
    {
      id: 3,
      lotName: "Lot 3",
      price: 300,
      user: {
        id: 1,
        username: "User 1",
      },
      biggestBid: 300,
      bidAt: "2021-05-01T12:00:00",
      lotId: 3,
    },
  ];

  useEffect(() => {
    fetch(`${SERVER_URL}users/`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);

        fetch(`${SERVER_URL}auction-lots/users/${data.id}`, {
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => setAuctionLots(data.response));

        fetch(`${SERVER_URL}auction-lots/users/${data.id}/bids/`, {
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => setUserBids(tempUserBids));
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const goToBids = () => {
    setView("bids");
  };

  const goToLots = () => {
    setView("lots");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-page">
      <div className="header-container">
        <h1>З поверненням, {user.username}!</h1>
        <div>
          <button onClick={goToLots}>Переглянути аукціони</button>
          <button onClick={goToBids}>Переглянути ставки</button>
        </div>
      </div>
      <section>
        {view === "lots" ? (
          <div className="auction-items-profile-container">
            {auctionLots.map((lot) => (
              <AuctionLotItem key={lot.id} {...lot} />
            ))}
          </div>
        ) : (
          <div className="auction-items-profile-container">
            {userBids.map((bid) => (
              <UserBidItem key={bid.id} {...bid} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default UserProfilePage;
