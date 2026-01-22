import { useState } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollReveal } from "@/components/ScrollReveal";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate subscription
    setIsSubmitted(true);
    toast.success("Thanks for subscribing! Check your email for confirmation.");
    
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-accent font-medium uppercase tracking-widest text-sm">
              Stay Updated
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-2 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe for exclusive recipes, cooking tips, special offers, and be the first to know about new rice varieties.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 px-5"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 px-6 gap-2"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-muted-foreground text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
