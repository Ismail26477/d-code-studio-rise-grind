import { Link } from "react-router-dom";
import { ArrowRight, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getFeaturedProducts } from "@/lib/products";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { BulkOrdersCTA } from "@/components/home/BulkOrdersCTA";

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-accent font-medium uppercase tracking-widest text-sm">
                Our Collection
              </span>
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-2 mb-4">
                Featured Rice Varieties
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked selection of premium rice, sourced from the finest farms around the world.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button size="lg" asChild className="gap-2">
                <Link to="/shop">
                  View All Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Bulk Orders CTA */}
      <BulkOrdersCTA />

      {/* Newsletter */}
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Index;
