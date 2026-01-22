import { useState, useEffect } from "react";
import { Wheat } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        !isLoading && "opacity-0"
      )}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-6">
          <Wheat className="h-16 w-16 text-primary animate-bounce-subtle mx-auto" />
          
          {/* Floating Rice Grains */}
          <div className="absolute -inset-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-3 bg-accent/60 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Brand Name */}
        <h2 className="font-montserrat font-bold text-2xl text-primary mb-2">
          Rise & Grind
        </h2>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Loading goodness...
        </p>

        {/* Progress Bar */}
        <div className="mt-6 w-48 h-1 bg-muted rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-primary rounded-full transition-all duration-1000"
            style={{ width: isLoading ? "70%" : "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
