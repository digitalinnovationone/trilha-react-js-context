import { createContext } from "react";
import { Game } from "../../types/interfaces/game";

export type CartContextProps = {
  items: Game[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: number) => void;
};

export const CartContext = createContext<CartContextProps | null>(null);
