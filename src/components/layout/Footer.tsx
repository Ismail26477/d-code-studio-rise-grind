import { Link } from "react-router-dom";
import { Wheat, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  shop: [
    { name: "All Products", path: "/shop" },
    { name: "Basmati Rice", path: "/shop?category=Basmati" },
    { name: "Brown Rice", path: "/shop?category=Brown" },
    { name: "Organic Rice", path: "/shop?category=Organic" },
    { name: "Specialty Rice", path: "/shop?category=Specialty" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Story", path: "/about#story" },
    { name: "Quality Promise", path: "/about#quality" },
    { name: "Bulk Orders", path: "/bulk-orders" },
    { name: "Contact", path: "/contact" },
  ],
  support: [
    { name: "FAQs", path: "/contact#faq" },
    { name: "Shipping Info", path: "/contact#shipping" },
    { name: "Return Policy", path: "/contact#returns" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Wheat className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-2xl leading-tight">
                  Rise & Grind
                </span>
                <span className="text-xs tracking-widest uppercase opacity-80">
                  Premium Rice
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              From our fields to your table, we bring you the finest quality rice. 
              Trusted by families and restaurants across the nation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@riseandgrind.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                hello@riseandgrind.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                123 Rice Field Lane, Harvest City
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Subscribe for recipes, tips, and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Rise & Grind. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
