import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      {/* Floating Rice Grains */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-5 bg-accent/40 rounded-full blur-[1px]"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        ))}
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
              🌾 Premium Quality Rice
            </span>
            
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Rice for{" "}
              <span className="text-primary relative">
                Every Kitchen
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 150 4 298 10" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              From the fertile fields to your table, experience the finest quality rice. 
              Trusted by families and top chefs across the nation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-premium text-lg px-8 gap-2" asChild>
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link to="/about">
                  <Play className="h-4 w-4" />
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <p className="font-montserrat font-bold text-2xl text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-montserrat font-bold text-2xl text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Rice Varieties</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-montserrat font-bold text-2xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Quality Certified</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&q=80"
                  alt="Premium Basmati Rice"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>

              {/* Floating Product Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl animate-bounce-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=200&q=80"
                      alt="Organic Brown Rice"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Organic Brown</p>
                    <p className="text-primary font-bold">$18.99</p>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <span className="text-lg">⭐</span>
                <span className="font-bold">4.9</span>
                <span className="text-sm opacity-80">(2.5k)</span>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10 transform translate-x-8 translate-y-8">
              <div className="w-full h-full rounded-3xl bg-primary/10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
