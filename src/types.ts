export interface UserResponse {
  id: number;
  email: string;
  username: string;
  role: string;
  auctionBids: AuctionBid[];
}

export interface AuctionItemProps {
  image: string;
  name: string;
  currentPrice: string;
  endDate: string;
  numOfBids: number;
}


export interface AuctionLotPartialResponse {
  id: number;
  name: string;
  startPrice: number;
  minIncrease: number;
  description: string;
  currentBid?: AuctionBid;
  endDateTime: string;
  startDateTime: string;
  bidsCount: number;
  imageNames: string[];
  categories: string[];
}

export interface AuctionLotListResponse {
  response: AuctionLotPartialResponse[];
  recordsCount: number;
}

export interface AuctionBid {
  id: number;
  price: number;
  bidAt: string;
}

export interface UserBidItemProps {
  id: number;
  price: number;
  user: {
    id: number;
    username: string;
  };
  bidAt: string;
  lotId: number;
  lotName: string;
  biggestBid: number;
}

export interface AuctionCategory {
  title: string;
}

export const auctionCategories: string[] = [
  "ART",
  "ANTIQUES",
  "JEWELRY",
  "FURNITURE",
  "ELECTRONICS",
  "CLOTHING",
  "COLLECTIBLES",
  "TOYS",
  "SPORTS",
  "OTHER"
];

