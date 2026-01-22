export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  weight: string;
  description: string;
  longDescription: string;
  image: string;
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbs: string;
    fiber: string;
  };
  features: string[];
  inStock: boolean;
  isOrganic: boolean;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "basmati-premium",
    name: "Premium Basmati Rice",
    category: "Basmati",
    price: 24.99,
    originalPrice: 29.99,
    weight: "5 kg",
    description: "Long-grain aromatic rice, perfect for biryanis and pilafs",
    longDescription: "Our Premium Basmati Rice is sourced from the fertile foothills of the Himalayas. Each grain is carefully aged for 12 months to develop its signature nutty aroma and fluffy texture. When cooked, the grains elongate to nearly twice their size while remaining separate and non-sticky.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&q=80",
    nutritionalInfo: {
      calories: "350 kcal/100g",
      protein: "7g",
      carbs: "78g",
      fiber: "1.5g",
    },
    features: ["Extra Long Grain", "Aged 12 Months", "Non-GMO", "Gluten Free"],
    inStock: true,
    isOrganic: false,
    isBestSeller: true,
  },
  {
    id: "brown-rice-organic",
    name: "Organic Brown Rice",
    category: "Brown",
    price: 18.99,
    weight: "3 kg",
    description: "Whole grain brown rice packed with fiber and nutrients",
    longDescription: "Our Organic Brown Rice retains its nutrient-rich bran layer, providing essential vitamins, minerals, and fiber. Certified organic and sustainably farmed, this wholesome rice has a slightly chewy texture and nutty flavor that pairs perfectly with stir-fries and grain bowls.",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&q=80",
    nutritionalInfo: {
      calories: "362 kcal/100g",
      protein: "7.5g",
      carbs: "76g",
      fiber: "3.5g",
    },
    features: ["Whole Grain", "High Fiber", "Certified Organic", "Heart Healthy"],
    inStock: true,
    isOrganic: true,
    isNew: true,
  },
  {
    id: "jasmine-thai",
    name: "Thai Jasmine Rice",
    category: "Specialty",
    price: 22.99,
    weight: "5 kg",
    description: "Fragrant long-grain rice with a subtle floral aroma",
    longDescription: "Imported directly from Thailand's rice paddies, our Thai Jasmine Rice is prized for its naturally sweet fragrance reminiscent of pandan and popcorn. Its soft, slightly sticky texture makes it the perfect companion for curries, stir-fries, and Asian cuisine.",
    image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=600&q=80",
    nutritionalInfo: {
      calories: "345 kcal/100g",
      protein: "6.5g",
      carbs: "79g",
      fiber: "1g",
    },
    features: ["Aromatic", "Soft Texture", "Thai Origin", "Versatile"],
    inStock: true,
    isOrganic: false,
  },
  {
    id: "parboiled-gold",
    name: "Golden Parboiled Rice",
    category: "Parboiled",
    price: 16.99,
    weight: "5 kg",
    description: "Pre-cooked rice that stays fluffy and separate",
    longDescription: "Our Golden Parboiled Rice undergoes a special steam-pressure process before milling, which drives nutrients from the bran into the grain. This results in rice that's more nutritious than regular white rice, with grains that stay separate and fluffy even when reheated.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&q=80",
    nutritionalInfo: {
      calories: "348 kcal/100g",
      protein: "7g",
      carbs: "77g",
      fiber: "2g",
    },
    features: ["Easy to Cook", "Stays Fluffy", "Nutrient Rich", "Great for Meal Prep"],
    inStock: true,
    isOrganic: false,
    isBestSeller: true,
  },
  {
    id: "broken-rice",
    name: "Broken Rice (Tấm)",
    category: "Specialty",
    price: 12.99,
    weight: "5 kg",
    description: "Traditional Vietnamese broken rice for com tam dishes",
    longDescription: "Broken Rice, or Tấm, consists of rice grains that have fractured during processing. Popular in Vietnamese cuisine, it has a unique texture that absorbs flavors beautifully. Perfect for the classic Cơm Tấm (broken rice) dishes served with grilled meats and pickled vegetables.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    nutritionalInfo: {
      calories: "340 kcal/100g",
      protein: "6g",
      carbs: "78g",
      fiber: "1g",
    },
    features: ["Traditional", "Great Absorption", "Budget Friendly", "Authentic"],
    inStock: true,
    isOrganic: false,
  },
  {
    id: "wild-rice-blend",
    name: "Wild Rice Blend",
    category: "Specialty",
    price: 28.99,
    weight: "2 kg",
    description: "Premium blend of wild rice with brown and red rice",
    longDescription: "Our Wild Rice Blend combines hand-harvested wild rice with nutty brown rice and antioxidant-rich red rice. This visually stunning blend offers a complex, earthy flavor and satisfying chewy texture. Rich in protein and fiber, it's perfect for salads, stuffings, and gourmet side dishes.",
    image: "https://images.unsplash.com/photo-1612257416648-ee7a6c533b4f?w=600&q=80",
    nutritionalInfo: {
      calories: "357 kcal/100g",
      protein: "8g",
      carbs: "74g",
      fiber: "4g",
    },
    features: ["Gourmet Blend", "High Protein", "Antioxidant Rich", "Artisan Quality"],
    inStock: true,
    isOrganic: true,
    isNew: true,
  },
  {
    id: "sushi-rice",
    name: "Premium Sushi Rice",
    category: "Specialty",
    price: 26.99,
    weight: "3 kg",
    description: "Short-grain Japanese rice perfect for sushi and onigiri",
    longDescription: "Our Premium Sushi Rice is a short-grain Japonica variety known for its perfect stickiness and glossy appearance. When seasoned with rice vinegar, it achieves the ideal balance of sweetness and tang. Essential for authentic sushi, onigiri, and Japanese rice bowls.",
    image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=600&q=80",
    nutritionalInfo: {
      calories: "352 kcal/100g",
      protein: "6.5g",
      carbs: "78g",
      fiber: "0.5g",
    },
    features: ["Perfect Stickiness", "Japanese Grade", "Sushi Quality", "Glossy Finish"],
    inStock: true,
    isOrganic: false,
  },
  {
    id: "black-rice",
    name: "Forbidden Black Rice",
    category: "Organic",
    price: 32.99,
    weight: "2 kg",
    description: "Ancient black rice loaded with antioxidants",
    longDescription: "Once reserved for Chinese emperors, our Forbidden Black Rice is a nutritional powerhouse. Its deep purple-black color comes from anthocyanins, the same antioxidants found in blueberries. With a slightly sweet, nutty flavor and chewy texture, it makes a stunning addition to any meal.",
    image: "https://images.unsplash.com/photo-1623066463831-c6c8a1a2b357?w=600&q=80",
    nutritionalInfo: {
      calories: "356 kcal/100g",
      protein: "9g",
      carbs: "72g",
      fiber: "5g",
    },
    features: ["Superfood", "Antioxidant Rich", "Ancient Grain", "Stunning Color"],
    inStock: true,
    isOrganic: true,
  },
];

export const categories = [
  { id: "all", name: "All Rice", count: products.length },
  { id: "Basmati", name: "Basmati", count: products.filter(p => p.category === "Basmati").length },
  { id: "Brown", name: "Brown Rice", count: products.filter(p => p.category === "Brown").length },
  { id: "Organic", name: "Organic", count: products.filter(p => p.category === "Organic").length },
  { id: "Specialty", name: "Specialty", count: products.filter(p => p.category === "Specialty").length },
  { id: "Parboiled", name: "Parboiled", count: products.filter(p => p.category === "Parboiled").length },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isBestSeller || p.isNew).slice(0, 6);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return products.slice(0, limit);
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}
