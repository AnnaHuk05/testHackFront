import React from "react";
import "./Search.css";
import { TfiSearch } from "react-icons/tfi";

function Search() {
  return (
    <div id="cover">
      <form method="get" action="">
        <div className="tb">
          <div className="td">
            <input
              type="text"
              placeholder="Search"
              required
              className="search-input"
            />
          </div>
          <div className="td" id="s-cover">
            <button type="submit" className="search-button">
              <div id="s-circle">
                <TfiSearch className="fa-search"></TfiSearch>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Search;
