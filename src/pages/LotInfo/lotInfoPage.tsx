import React from "react";
import "./lotInfoPage.css";
import PhotoViewer from "./../../components/photoViewer/photoViewer.tsx";
import InfoPanel from "./../../components/infoPanel/infoPanel.tsx"
import { AuctionLotPartialResponse } from "../../types.ts";


function lotInfoPage() {
  return (
   <div className="info-page">
    <PhotoViewer/>
    <InfoPanel  /> 
   </div>
   
  );
}

export default lotInfoPage;
