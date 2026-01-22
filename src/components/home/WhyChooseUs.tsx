import { Leaf, Truck, Award, Shield, Package, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Certified organic rice grown without harmful pesticides or chemicals.",
  },
  {
    icon: Truck,
    title: "Farm Direct",
    description: "Sourced directly from trusted farmers, ensuring freshness and fair prices.",
  },
  {
    icon: Award,
    title: "Quality Tested",
    description: "Every batch undergoes rigorous quality testing for purity and taste.",
  },
  {
    icon: Shield,
    title: "Guaranteed Fresh",
    description: "Vacuum-sealed packaging keeps rice fresh from our warehouse to your kitchen.",
  },
  {
    icon: Package,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your doorstep, nationwide coverage.",
  },
  {
    icon: Users,
    title: "Wholesale Prices",
    description: "Competitive bulk pricing for restaurants, hotels, and retailers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">
              Our Promise
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Choose Rise & Grind?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to bringing you the finest rice with unmatched quality and service.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-card border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
