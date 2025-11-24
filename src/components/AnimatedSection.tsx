import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  /** base delay multiplier; 0,1,2... becomes 0s, 0.1s, 0.2s... */
  delay?: number;
  /**
   * up/left/right/scale/blur = entrance animations.
   * parallax = scroll-scrubbed y movement.
   */
  direction?: "up" | "left" | "right" | "scale" | "blur" | "parallax";
  /** strength for parallax (1 = default, >1 = stronger) */
  speed?: number;
  /** stagger between children when animating a group */
  stagger?: number;
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  speed = 1,
  stagger = 0,
}: AnimatedSectionProps) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" });
      return;
    }

    const ctx = gsap.context(() => {
      // Base from-variables for entrance animations
      let fromVars: gsap.TweenVars = {
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: delay * 0.1,
      };

      switch (direction) {
        case "up":
          fromVars = { ...fromVars, y: 50 };
          break;
        case "left":
          fromVars = { ...fromVars, x: -50 };
          break;
        case "right":
          fromVars = { ...fromVars, x: 50 };
          break;
        case "scale":
          fromVars = { ...fromVars, scale: 0.9, y: 20 };
          break;
        case "blur":
          fromVars = { ...fromVars, filter: "blur(10px)", scale: 0.95, y: 20 };
          break;
        case "parallax":
          // Scroll-scrubbed parallax. No entrance tween, just continuous motion.
          gsap.fromTo(
            el,
            { y: 40 * speed, opacity: 0 },
            {
              y: -40 * speed,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
          return;
      }

      // Group animation with stagger for lists / grids
      if (stagger > 0 && el.children.length > 0) {
        gsap.from(el.children, {
          ...fromVars,
          opacity: 0,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
        gsap.set(el, { opacity: 1 });
      } else {
        // Single element entrance animation
        gsap.fromTo(
          el,
          fromVars,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            delay: delay * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, elRef);

    return () => ctx.revert();
  }, [delay, direction, speed, stagger]);

  return (
    <div ref={elRef} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
};

