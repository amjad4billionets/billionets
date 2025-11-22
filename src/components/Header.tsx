import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button3D } from "./ui/button-3d";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-medium",
        isScrolled ? "glass shadow-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center gap-2 -m-1.5 p-1.5">
              <span className="text-2xl font-bold text-ink">
                Billionets<span className="text-accent-gold">.</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-ink"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-semibold leading-6 transition-colors duration-base",
                  location.pathname === item.href
                    ? "text-accent-gold"
                    : "text-ink hover:text-accent-gold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button3D variant="primary" size="sm" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button3D>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 top-20 bg-background transition-all duration-medium",
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          )}
        >
          <div className="flex flex-col px-6 py-8 gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-lg font-semibold py-3 border-b border-border transition-colors",
                  location.pathname === item.href
                    ? "text-accent-gold"
                    : "text-ink"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button3D variant="primary" className="mt-4" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button3D>
          </div>
        </div>
      </nav>
    </header>
  );
};
