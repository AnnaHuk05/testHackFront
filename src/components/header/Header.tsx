import React, { useState, useEffect } from "react";
import Search from "../searchField/search.tsx";
import "./header.css";
import { SERVER_URL } from "../../constants.ts";

function Header() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const response = await fetch(`${SERVER_URL}check-login`, {
          credentials: "include",
        });
        if (response.redirected) {
          setIsUserLoggedIn(false);
        } else {
          setIsUserLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking login status", error);
      }
    };

    checkUserLoggedIn();
  }, []);

  const handleSignIn = async () => {
    try {
      const response = await fetch(SERVER_URL + "car", {
        method: "GET",
        redirect: "follow",
        credentials: "include",
      }).then((response) => response);

      if (response.redirected) {
        window.location.href = response.url;
      }
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <a className="logo" href="/">
            <img src="logo-icon.svg" alt="Logo" />
          </a>
          <Search />
          <div className="chat-profile-container">
            {isUserLoggedIn ? (
              <>
                <a href="/chat">
                  <img src="chat-icon.png" alt="Chat" />
                </a>
                <a href="/user-info">
                  <img src="profile-icon.svg" alt="Profile" />
                </a>
              </>
            ) : (
              <div onClick={handleSignIn}>Sign In</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
