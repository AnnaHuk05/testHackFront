import React from "react";
import Search from "../searchField/search.tsx";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <div className="logo">
            <img
              src="logo-icon.svg"
              width={"140px"}
              height={"100px"}
              alt="Edit icon"
            />
          </div>
          <div className="header-nav">
           
            <a href="#!">
              <img
                src="chat-icon.png"
                alt="chat-item"
                width={"35px"}
                height={"35px"}
              />
            </a>
            <Search />
            <a href="#!">
              <img
                src="profile-icon.svg"
                alt="profile-item"
                width={"35px"}
                height={"35px"}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
