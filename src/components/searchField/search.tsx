import React from "react";
import "./Search.css"

function Search()
{
    return(
        <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td"><input type="text" placeholder="Search" required/></div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Search;