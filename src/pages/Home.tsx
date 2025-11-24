import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, Award } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { Card } from "@/components/ui/card";
import { StructuredData } from "@/components/StructuredData";
import { AnimatedSection } from "@/components/AnimatedSection";
import { StatCounter } from "@/components/StatCounter";

const services = [
  { icon: Sparkles, label: "AI Solutions", color: "text-accent-gold" },
  { icon: Zap, label: "Web Development", color: "text-accent-gold" },
  { icon: Target, label: "Digital Marketing", color: "text-accent-gold" },
  { icon: TrendingUp, label: "SEO & Analytics", color: "text-accent-gold" },
];

const whyBillionets = [
  {
    title: "AI-First Approach",
    description: "We leverage cutting-edge AI to automate workflows and create intelligent solutions that scale.",
    icon: Sparkles,
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 200+ projects for businesses across the UAE and MENA region.",
    icon: Award,
  },
  {
    title: "Expert Team",
    description: "Our Dubai-based team combines deep technical expertise with business acumen.",
    icon: Users,
  },
];

const stats = [
  { label: "Projects Delivered", value: 200 },
  { label: "Happy Clients", value: 150 },
  { label: "Team Members", value: 25 },
  { label: "Years Experience", value: 8 },
];

const testimonials = [
  {
    quote: "Billionets transformed our digital presence with an AI-powered solution that increased our efficiency by 300%.",
    author: "Mohammed Al-Rashid",
    role: "CEO, Tech Innovations LLC",
  },
  {
    quote: "The team's expertise in AI and automation helped us scale faster than we ever imagined possible.",
    author: "Sarah Johnson",
    role: "Director, Digital Ventures",
  },
  {
    quote: "Outstanding service and innovative solutions. They truly understand modern business challenges.",
    author: "Ahmed Hassan",
    role: "Founder, Gulf Enterprises",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData type="home" />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ink text-base-white hero-parallax">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/intro.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink/95" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-accent-gold">
                AI-first digital studio
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                Precision
                <br className="hidden sm:block" />
                Automation for Modern Business
              </h1>
              <p className="text-sm sm:text-lg text-base-white/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We help companies in Dubai and across the UAE scale faster with intelligent automation
                and high-performance digital products crafted with precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button3D
                  variant="primary"
                  size="lg"
                  className="text-base-white w-full sm:w-auto"
                  asChild
                >
                  <Link
                    to="/contact"
                    className="link-reveal inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button3D>
                <Button3D
                  variant="secondary"
                  size="lg"
                  className="border-base-white text-base-white hover:bg-base-white/10 w-full sm:w-auto"
                  asChild
                >
                  <Link
                    to="/services"
                    className="link-reveal inline-flex items-center gap-1"
                  >
                    Explore Services
                  </Link>
                </Button3D>
              </div>
            </div>

            {/* Supporting copy / stats */}
            <AnimatedSection
              direction="up"
              className="lg:col-span-5 mt-10 lg:mt-16 space-y-6 text-base-white/70 text-center sm:text-left"
            >
              <p className="text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                In a world where businesses exist to solve human problems, we exist to solve the
                problems businesses face. Your challenges become ours to solve – with precision,
                creativity, and intent.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm">
                <div>
                  <div className="text-2xl font-semibold text-accent-gold">200+</div>
                  <div className="text-xs uppercase tracking-wide text-base-white/60">
                    Projects delivered
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-accent-gold">8+</div>
                  <div className="text-xs uppercase tracking-wide text-base-white/60">
                    Years experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-accent-gold">Dubai</div>
                  <div className="text-xs uppercase tracking-wide text-base-white/60">
                    Based, UAE-wide
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 text-sm justify-center sm:justify-start text-base-white/80">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-base-white/30">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <Link
                  to="/about"
                  className="link-reveal text-sm text-base-white/80"
                >
                  Read more about how we help teams ship smarter, faster, and with less risk.
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Services Strip */}
      {false && (
        <section className="py-12 bg-surface border-y border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <AnimatedSection key={service.label} delay={index} direction="up">
                  <div className="flex flex-col items-center gap-3 text-center group cursor-pointer">
                    <div className="p-4 bg-background rounded-lg shadow-sm group-hover:shadow-gold transition-all duration-base group-hover:scale-110">
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <span className="text-sm font-semibold text-ink">{service.label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Billionets */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Why Choose Billionets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with business expertise to deliver exceptional results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBillionets.map((item, index) => (
              <AnimatedSection key={item.title} delay={index} direction="up">
                <Card
                  className="card tilt p-8 hover-lift cursor-pointer border border-border"
                  data-tilt-strength="10"
                >
                  <div
                    className="mb-6 reveal-wrap inline-block rounded-lg"
                    data-reveal-duration="0.7"
                  >
                    <div className="reveal-overlay" />
                    <div className="reveal-img inline-flex p-4 bg-surface rounded-lg">
                      <item.icon className="h-8 w-8 text-accent-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading businesses across Dubai and the UAE.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index} direction="up">
                <Card
                  className="card tilt p-8 hover-lift cursor-pointer border border-border"
                  data-tilt-strength="8"
                >
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-ink">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-gradient-to-r from-accent-gold to-accent-gold/80">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedSection direction="scale" className="relative">
            <div className="group relative">
              {/* Outer gradient border glow */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-accent-gold/80 via-accent-gold/40 to-accent-gold/80 opacity-70 group-hover:opacity-100 blur-lg transition-all duration-slow" />

              {/* Main CTA card */}
              <div
                className="relative rounded-3xl border border-accent-gold/60 bg-background/95 px-8 py-10 sm:px-12 sm:py-14 shadow-gold transform transition-all duration-medium group-hover:-translate-y-1 group-hover:shadow-lg group-hover:scale-[1.01] card tilt"
                data-tilt-strength="6"
              >
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-ink">
                      Ready to Upgrade Your Digital Presence?
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
                      Let's discuss how AI-powered solutions can transform your business.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                    <Button3D variant="primary" size="lg" asChild>
                      <Link
                        to="/contact"
                        className="link-reveal inline-flex items-center gap-2"
                      >
                        Start Your Project
                      </Link>
                    </Button3D>
                    <Button3D
                      variant="secondary"
                      size="lg"
                      className="border-ink/20 text-ink hover:bg-ink hover:text-base-white"
                      asChild
                    >
                      <Link
                        to="/services"
                        className="link-reveal inline-flex items-center gap-1"
                      >
                        Explore Services
                      </Link>
                    </Button3D>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
    </>
  );
}
