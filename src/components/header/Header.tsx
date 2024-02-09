import React from "react";

function Header()
{
    return(
        <header className="header">
             <div className="container">
                <div className="header_row">
                    <div className="logo">
                    <img
                        src="../../../public/logo-icon.svg"
                        width={"24px"}
                        height={"24px"}
                        alt="Edit icon"
                         />
                       
                        </div> 
                    <nav className="header-nav"></nav>
                </div>
             </div>
        </header>
   
);
    }