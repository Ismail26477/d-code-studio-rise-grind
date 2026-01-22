import { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
}

const CART_STORAGE_KEY = "rise-and-grind-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveCart(cart: CartItem[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product, quantity = 1): CartItem[] {
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.product.id === product.id);
  
  if (existingIndex >= 0) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter(item => item.product.id !== productId);
  saveCart(cart);
  return cart;
}

export function updateQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.product.id === productId);
  
  if (itemIndex >= 0) {
    if (quantity <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = quantity;
    }
  }
  
  saveCart(cart);
  return cart;
}

export function clearCart(): void {
  saveCart([]);
}

export function getCartTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export function getCartItemCount(cart: CartItem[]): number {
  return cart.reduce((count, item) => count + item.quantity, 0);
}

export function generateWhatsAppMessage(cart: CartItem[]): string {
  const items = cart
    .map(item => `• ${item.product.name} (${item.product.weight}) x${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}`)
    .join("\n");
  
  const total = getCartTotal(cart);
  
  return encodeURIComponent(
    `🌾 *Rise & Grind Order Request*\n\n` +
    `*Order Details:*\n${items}\n\n` +
    `*Total: $${total.toFixed(2)}*\n\n` +
    `Please confirm availability and delivery options.`
  );
}
