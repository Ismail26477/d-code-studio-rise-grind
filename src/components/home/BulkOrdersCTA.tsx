import { Link } from "react-router-dom";
import { ArrowRight, Building2, Truck, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BulkOrdersCTA() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=1200&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 p-8 md:p-16">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
                  🏢 For Businesses
                </span>
                
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Bulk Orders & Wholesale Pricing
                </h2>
                
                <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl">
                  Whether you're a restaurant, hotel, caterer, or retailer, we offer competitive bulk pricing and reliable supply. Get custom quotes tailored to your business needs.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  <div className="flex items-center gap-3 text-primary-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <BadgePercent className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Wholesale Rates</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <Truck className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary-foreground">
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="font-medium">B2B Support</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
                  asChild
                >
                  <Link to="/bulk-orders">
                    Request a Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
