import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerNavigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Apps", href: "/services" },
    { name: "AI Solutions", href: "/services" },
    { name: "Digital Marketing", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-ink">
                Billionets<span className="text-accent-gold">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-6">
              AI-powered digital solutions for modern businesses in Dubai and the UAE.
            </p>
            <div className="flex space-x-4">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent-gold transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-ink mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-sm font-semibold text-ink mb-4">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-ink mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-gold flex-shrink-0" />
                <a
                  href="mailto:info@billionets.com"
                  className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                >
                  info@billionets.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-gold flex-shrink-0" />
                <a
                  href="tel:+971501234567"
                  className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                >
                  +971 50 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Billionets. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs text-muted-foreground hover:text-accent-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
