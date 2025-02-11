import { FC, PropsWithChildren, useState } from "react";
import { Game } from "../../../types/interfaces/game";
import { CartContext } from "..";

export const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [items, setItems] = useState<Game[]>([]);

  const addToCart = (game: Game) => {
    setItems((prevCart) => [...prevCart, game]);
  };

  const removeFromCart = (gameId: number) => {
    setItems((prevCart) => prevCart.filter((game) => game.id !== gameId));
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

