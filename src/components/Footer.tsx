import { Link, useLocation } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      document.body.classList.add("no-pointer-tilt");
    }

    let removeCursorListener: (() => void) | undefined;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // 1. Card Tilt
      if (!isTouchDevice) {
        const tiltCards = document.querySelectorAll(".card.tilt");
        tiltCards.forEach((card) => {
          const strength = parseFloat(card.getAttribute("data-tilt-strength") || "14");

          card.addEventListener("mousemove", (e: any) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPct = x / rect.width - 0.5;
            const yPct = y / rect.height - 0.5;

            gsap.to(card, {
              rotationY: xPct * strength,
              rotationX: -yPct * strength,
              transformPerspective: 900,
              transformOrigin: "center center",
              duration: 0.25,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              rotationY: 0,
              rotationX: 0,
              transformPerspective: 900,
              transformOrigin: "center center",
              duration: 0.35,
              ease: "power2.out",
            });
          });
        });
      }

      // 2. Reveal Mask/Image Sweep
      const revealWraps = document.querySelectorAll(".reveal-wrap");
      revealWraps.forEach((wrap) => {
        const overlay = wrap.querySelector(".reveal-overlay");
        const img = wrap.querySelector(".reveal-img");
        const duration = parseFloat(wrap.getAttribute("data-reveal-duration") || "0.6");

        if (overlay && img) {
          gsap.set(img, { opacity: 0 });
          gsap.set(overlay, { xPercent: -101 });

          ScrollTrigger.create({
            trigger: wrap,
            start: "top 80%",
            once: true,
            onEnter: () => {
              const tl = gsap.timeline();
              tl.to(overlay, {
                xPercent: 0,
                duration: duration,
                ease: "power2.inOut",
              })
                .set(img, { opacity: 1 })
                .to(overlay, {
                  xPercent: 101,
                  duration: duration,
                  ease: "power2.inOut",
                });
            },
          });
        }
      });

      // 3. Hero Pointer Parallax (desktop)
      if (!isTouchDevice) {
        const heroes = document.querySelectorAll(".hero-parallax");
        heroes.forEach((hero) => {
          hero.addEventListener("mousemove", (e: any) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            gsap.to(hero.children, {
              x,
              y,
              duration: 1,
              ease: "power2.out",
              stagger: 0.05,
            });
          });
        });
      }

      // 3b. Hero Scroll Parallax (mobile / touch)
      if (isTouchDevice) {
        const heroes = document.querySelectorAll(".hero-parallax");
        heroes.forEach((hero) => {
          const heroElement = hero as HTMLElement;
          const children = Array.from(heroElement.children) as HTMLElement[];

          children.forEach((child, index) => {
            const strength = 8 + index * 4;

            gsap.fromTo(
              child,
              { y: strength },
              {
                y: -strength,
                ease: "none",
                scrollTrigger: {
                  trigger: heroElement,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              }
            );
          });
        });
      }

      // 4. Cursor Follower
      if (!isTouchDevice) {
        let cursor = document.querySelector(".cursor-dot");
        if (!cursor) {
             cursor = document.createElement("div");
             cursor.classList.add("cursor-dot");
             document.body.appendChild(cursor);
        }

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };
        
        window.addEventListener("mousemove", onMouseMove);
        removeCursorListener = () => window.removeEventListener("mousemove", onMouseMove);

        const interactives = document.querySelectorAll("a, button, .card.tilt, input, textarea");
        interactives.forEach((el) => {
            el.addEventListener("mouseenter", () => cursor?.classList.add("active"));
            el.addEventListener("mouseleave", () => cursor?.classList.remove("active"));
        });
      }

    }); // End gsap.context

    return () => {
        ctx.revert();
        if (removeCursorListener) removeCursorListener();
        const cursor = document.querySelector(".cursor-dot");
        if (cursor) cursor.remove();
    };
  }, [location.pathname]);

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
