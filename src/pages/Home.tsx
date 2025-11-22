import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, Award } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { Card } from "@/components/ui/card";
import { StructuredData } from "@/components/StructuredData";
import heroImage from "@/assets/hero-3d.png";

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
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-base-white to-surface overflow-hidden pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight">
                AI-Powered Digital Solutions for the{" "}
                <span className="text-accent-gold">Modern Business</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                We help companies in Dubai and across the UAE scale faster with intelligent
                automation and high-performance digital products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button3D variant="primary" size="lg" asChild>
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button3D>
                <Button3D variant="secondary" size="lg" asChild>
                  <Link to="/contact">Get an Instant AI Quote</Link>
                </Button3D>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="relative z-10 animate-float">
                <img
                  src={heroImage}
                  alt="3D illustration of AI and digital innovation"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Strip */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.label}
                className="flex flex-col items-center gap-3 text-center group cursor-pointer"
              >
                <div className="p-4 bg-background rounded-lg shadow-sm group-hover:shadow-gold transition-all duration-base group-hover:scale-110">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <span className="text-sm font-semibold text-ink">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Billionets */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Why Choose Billionets
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with business expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBillionets.map((item, index) => (
              <Card
                key={item.title}
                className="p-8 hover-lift cursor-pointer border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-4 bg-surface rounded-lg">
                  <item.icon className="h-8 w-8 text-accent-gold" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent-gold mb-2">
                  {stat.value}+
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading businesses across Dubai and the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover-lift cursor-pointer border border-border"
              >
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-ink">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-gradient-to-r from-accent-gold to-accent-gold/80">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
            Ready to Upgrade Your Digital Presence?
          </h2>
          <p className="text-lg text-ink/80 mb-8">
            Let's discuss how AI-powered solutions can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button3D variant="secondary" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button3D>
            <Button3D variant="ghost" size="lg" asChild>
              <Link to="/services">Explore Services</Link>
            </Button3D>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
