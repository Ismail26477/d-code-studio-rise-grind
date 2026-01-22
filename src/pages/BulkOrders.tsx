import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Truck, BadgePercent } from "lucide-react";
import { toast } from "sonner";

export default function BulkOrders() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! Our team will contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-montserrat text-4xl font-bold mb-4">Bulk Orders & Wholesale</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">Special pricing for restaurants, hotels, caterers, and retailers.</p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card p-6 rounded-2xl border text-center">
              <BadgePercent className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Wholesale Rates</h3>
              <p className="text-muted-foreground text-sm">Up to 30% off on bulk orders</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border text-center">
              <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Free Delivery</h3>
              <p className="text-muted-foreground text-sm">On orders over $500</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
              <p className="text-muted-foreground text-sm">Personal account manager</p>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-2xl border">
            <h2 className="font-montserrat text-2xl font-bold mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Business Name" required />
                <Input placeholder="Contact Person" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email" required />
                <Input placeholder="Phone" required />
              </div>
              <Select>
                <SelectTrigger><SelectValue placeholder="Business Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="hotel">Hotel</SelectItem>
                  <SelectItem value="caterer">Caterer</SelectItem>
                  <SelectItem value="retailer">Retailer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger><SelectValue placeholder="Preferred Rice Type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="basmati">Basmati Rice</SelectItem>
                  <SelectItem value="brown">Brown Rice</SelectItem>
                  <SelectItem value="jasmine">Jasmine Rice</SelectItem>
                  <SelectItem value="mixed">Mixed/Multiple Types</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Estimated Monthly Quantity (kg)" type="number" />
              <Textarea placeholder="Additional Requirements" rows={4} />
              <Button type="submit" size="lg" className="w-full">Submit Quote Request</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
