import { ShoppingCart, Eye, Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div
      className={cn(
        "group product-card bg-card rounded-2xl overflow-hidden",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBestSeller && (
            <Badge className="bg-accent text-accent-foreground gap-1">
              <Star className="h-3 w-3 fill-current" />
              Best Seller
            </Badge>
          )}
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground">
              New
            </Badge>
          )}
          {product.isOrganic && (
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm gap-1">
              <Leaf className="h-3 w-3" />
              Organic
            </Badge>
          )}
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Button
              size="icon"
              className="rounded-full bg-background text-foreground hover:bg-background/90 shadow-lg"
              asChild
            >
              <Link to={`/product/${product.id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-primary text-primary-foreground shadow-lg"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-montserrat font-semibold text-lg mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Price & Weight */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-xl text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-sm text-muted-foreground">{product.weight}</span>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full mt-4 gap-2"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
