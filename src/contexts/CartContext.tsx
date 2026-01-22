import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem, getCart, addToCart as addToCartLib, removeFromCart as removeFromCartLib, updateQuantity as updateQuantityLib, clearCart as clearCartLib, getCartTotal, getCartItemCount } from "@/lib/cart";
import { Product } from "@/lib/products";

interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartItemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const addToCart = (product: Product, quantity = 1) => {
    const updatedCart = addToCartLib(product, quantity);
    setCart(updatedCart);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = removeFromCartLib(productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = updateQuantityLib(productId, quantity);
    setCart(updatedCart);
  };

  const clearCart = () => {
    clearCartLib();
    setCart([]);
  };

  const cartTotal = getCartTotal(cart);
  const cartItemCount = getCartItemCount(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
