import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Minus, Plus, Leaf, Star } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProductById, getRelatedProducts } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { ProductCard } from "@/components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id || "");
  const relatedProducts = getRelatedProducts(id || "");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <Link to="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="aspect-square rounded-3xl overflow-hidden bg-muted">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* Details */}
            <div>
              <div className="flex gap-2 mb-4">
                {product.isOrganic && <Badge variant="outline" className="gap-1"><Leaf className="h-3 w-3" />Organic</Badge>}
                {product.isBestSeller && <Badge className="bg-accent text-accent-foreground gap-1"><Star className="h-3 w-3 fill-current" />Best Seller</Badge>}
              </div>
              
              <h1 className="font-montserrat text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-6">{product.weight}</p>
              
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                {product.originalPrice && <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>}
              </div>

              <p className="text-muted-foreground mb-8">{product.longDescription}</p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 border rounded-lg p-1">
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></Button>
                </div>
                <Button size="lg" className="flex-1 gap-2" onClick={() => addToCart(product, quantity)}>
                  <ShoppingCart className="h-5 w-5" /> Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-montserrat text-2xl font-bold mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
