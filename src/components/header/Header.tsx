// Header.tsx
import React from "react";
import Search from "../searchField/search.tsx";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="logo" >
            <img
              src="logo-icon.svg"
              alt="Logo"
            />
          </div>
          <Search />
          <div className="chat-profile-container">
          <a href="#!">
              <img
                src="chat-icon.png"
                alt="Chat"
              />
            </a>
            <a href="#!">
              <img
                src="profile-icon.svg"
                alt="Profile"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
