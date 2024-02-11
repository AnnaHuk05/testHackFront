import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuctionLotItem from "../../components/auctionItem/auctionItem.tsx";
import { SERVER_URL } from "../../constants.ts";
import {
  UserResponse,
  AuctionLotPartialResponse,
  UserBidItemProps,
} from "../../types.ts";
import UserBidItem from "../../components/userBidItem/userBidItem.tsx";
import "./userProfilePage.css";
import { Button } from "react-day-picker";

const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [auctionLots, setAuctionLots] = useState<AuctionLotPartialResponse[]>(
    []
  );
  const [userBids, setUserBids] = useState<UserBidItemProps[]>([]);
  const [view, setView] = useState<"lots" | "bids">("lots");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${SERVER_URL}users/`, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);

        fetch(`${SERVER_URL}auction-lots/users/${data.id}/`, {
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => setAuctionLots(data.response));

        fetch(`${SERVER_URL}auction-lots/users/${data.id}/bids/`, {
          credentials: "include",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setUserBids(data.response.content);});
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const goToBids = () => {
    setView("bids");
  };

  const goToLots = () => {
    setView("lots");
  };

  const goToAddLot = () => {
    navigate("/add-lot");
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-page">
      <div className="">
        <div className="user-profile-header-row">
          <h1>З поверненням, {user.username}!</h1>
          {view === "lots" ? (
            <button className="add-new-lot-button" onClick={goToAddLot}>Додати новий лот</button>
          ) : ( <div></div>
          )}
        </div>
        <div>
          <section>
            {view === "lots" ? (
              <div className="header-container">
                <h2>Ваші лоти</h2>
                <h3 className="go-to-bids" onClick={goToBids}>
                  Перейти до ваших ставок
                </h3>
              </div>
            ) : (
              <div className="header-container">
                <h2>Ваші ставки</h2>
                <h3 className="go-to-bids" onClick={goToLots}>
                  Перейти до ваших лотів
                </h3>
              </div>
            )}
          </section>
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
          <div className="auction-bids-container">
            <div className="user-bid-item">
              <div>Назва лоту</div>
              <div>Ціна</div>
              <div>Статус</div>
              <div>Дата</div>
            </div>
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
