import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Wheat, Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Hero */}
          <div className="text-center mb-16">
            <Wheat className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">From humble beginnings to your table, Rise & Grind is committed to bringing you the finest rice.</p>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800&q=80" alt="Rice fields" className="w-full h-[400px] object-cover" />
            </div>
            <div>
              <h2 className="font-montserrat text-3xl font-bold mb-6">The Rise & Grind Journey</h2>
              <p className="text-muted-foreground mb-4">Founded in 2018, Rise & Grind began with a simple mission: to connect families with the world's finest rice directly from trusted farmers.</p>
              <p className="text-muted-foreground mb-4">Today, we partner with over 50 farming communities across Asia, ensuring fair trade practices and sustainable agriculture.</p>
              <p className="text-muted-foreground">Every grain tells a story of dedication, tradition, and quality that spans generations.</p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-card p-8 rounded-2xl border">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-montserrat text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">To provide premium quality rice that enriches meals and supports sustainable farming communities worldwide.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-montserrat text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">To become the most trusted name in premium rice, known for quality, sustainability, and exceptional customer service.</p>
            </div>
          </div>

          {/* Quality Promise */}
          <div className="text-center bg-primary text-primary-foreground p-12 rounded-3xl">
            <Award className="h-16 w-16 mx-auto mb-6" />
            <h2 className="font-montserrat text-3xl font-bold mb-4">Our Quality Promise</h2>
            <p className="max-w-2xl mx-auto opacity-90">Every batch of Rise & Grind rice is tested for purity, aroma, and taste. We guarantee 100% satisfaction or your money back.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
