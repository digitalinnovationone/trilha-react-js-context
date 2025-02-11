interface GamePrice {
  discountPercentage: number;
  value: number;
  valueWithDiscount: number;
}

export interface Game {
  id: number;
  src: string;
  devices: string[];
  name: string;
  prices: GamePrice;
}
