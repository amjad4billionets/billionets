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

  const isOnDarkHero = location.pathname === "/" && !isScrolled;

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
              <span className={cn("text-2xl font-bold", isOnDarkHero ? "text-base-white" : "text-ink")}>
                Billionets<span className="text-accent-gold">.</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={cn(
                "inline-flex items-center justify-center rounded-md p-2.5",
                isOnDarkHero ? "text-base-white" : "text-ink"
              )}
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
                  "text-sm font-semibold leading-6 transition-all duration-base relative group",
                  location.pathname === item.href
                    ? "text-accent-gold"
                    : isOnDarkHero
                      ? "text-base-white hover:text-accent-gold"
                      : "text-ink hover:text-accent-gold"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-base group-hover:w-full",
                    location.pathname === item.href && "w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button3D
              variant="primary"
              size="sm"
              className={isOnDarkHero ? "text-base-white" : undefined}
              asChild
            >
              <Link to="/contact">Start Your Project</Link>
            </Button3D>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 top-20 bg-background transition-all duration-medium ease-smooth",
            mobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col px-6 py-8 gap-4">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-lg font-semibold py-3 border-b border-border transition-all duration-base transform",
                  location.pathname === item.href
                    ? "text-accent-gold translate-x-2"
                    : "text-ink hover:text-accent-gold hover:translate-x-2"
                )}
                style={{
                  animationDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
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
