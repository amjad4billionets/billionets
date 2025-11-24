import { Target, Eye, Users, Award, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StructuredData } from "@/components/StructuredData";
import { AnimatedSection } from "@/components/AnimatedSection";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Empowering businesses through innovative AI solutions that drive measurable results.",
  },
  {
    icon: Eye,
    title: "Visionary Thinking",
    description: "Staying ahead of technology trends to deliver future-proof digital solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We partner with you every step of the way.",
  },
];

const capabilities = [
  { name: "React & Next.js", category: "Frontend" },
  { name: "Node.js & Python", category: "Backend" },
  { name: "AI & Machine Learning", category: "AI/ML" },
  { name: "AWS & Cloud Infrastructure", category: "DevOps" },
  { name: "UI/UX Design", category: "Design" },
  { name: "Mobile Development", category: "Mobile" },
  { name: "SEO & Digital Marketing", category: "Marketing" },
  { name: "Data Analytics", category: "Analytics" },
];

const timeline = [
  { year: "2016", title: "Founded in Dubai", description: "Started with a vision to transform digital experiences" },
  { year: "2018", title: "AI Integration", description: "Became one of the first agencies to integrate AI solutions" },
  { year: "2020", title: "100+ Projects", description: "Reached milestone of 100 successful projects" },
  { year: "2023", title: "Industry Leader", description: "Recognized as a leading AI-first agency in the UAE" },
];

export default function About() {
  return (
    <>
      <StructuredData type="about" />
      <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-base-white to-surface hero-parallax">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection direction="blur">
            <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
              Building the Future of{" "}
              <span className="text-accent-gold">Digital Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Billionets is an AI-first digital agency based in Dubai, dedicated to helping modern businesses 
              scale through intelligent automation and high-performance digital solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="card tilt p-8 hover-lift cursor-pointer border border-border"
                data-tilt-strength="10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="mb-6 reveal-wrap inline-block rounded-lg"
                  data-reveal-duration="0.7"
                >
                  <div className="reveal-overlay" />
                  <div className="reveal-img inline-flex p-4 bg-surface rounded-lg">
                    <value.icon className="h-8 w-8 text-accent-gold" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-ink mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink">Our Story</h2>
          </AnimatedSection>
          <AnimatedSection direction="up" className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2016 in the heart of Dubai, Billionets emerged from a simple yet powerful vision: 
              to help businesses harness the power of artificial intelligence and modern technology to achieve 
              unprecedented growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              What started as a small team of passionate developers and designers has grown into a leading 
              digital agency serving clients across the UAE and MENA region. We've delivered over 200 projects, 
              from AI-powered chatbots to complex enterprise solutions, always staying true to our commitment 
              to innovation and excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we're proud to be recognized as one of the region's premier AI-first agencies, combining 
              cutting-edge technology with deep business understanding to deliver solutions that truly make a difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies & Capabilities */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">
              Technologies & Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((capability) => (
              <div
                key={capability.name}
                className="p-4 bg-surface border border-border rounded-lg hover:border-accent-gold hover:shadow-gold transition-all duration-base cursor-pointer"
              >
                <div className="text-xs text-accent-gold font-semibold mb-1">
                  {capability.category}
                </div>
                <div className="text-sm font-semibold text-ink">{capability.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-16 text-center">
            Our Journey
          </h2>

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={event.year}
                className="flex gap-6 items-start group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-24">
                  <div className="text-2xl font-bold text-accent-gold">{event.year}</div>
                </div>
                <div className="flex-grow">
                  <div className="card tilt p-6 bg-background border border-border rounded-lg hover-lift cursor-pointer" data-tilt-strength="8">
                    <h3 className="text-xl font-bold text-ink mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Our diverse team of 25+ experts brings together deep technical knowledge, creative vision, 
            and business acumen. Based in Dubai, we serve clients across the UAE and beyond, always 
            delivering exceptional results with a personal touch.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Developers", "Designers", "AI Specialists", "Project Managers"].map((role) => (
              <Card
                key={role}
                className="card tilt p-6 border border-border hover-lift cursor-pointer"
                data-tilt-strength="10"
              >
                <div className="w-16 h-16 bg-accent-gold/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-accent-gold" />
                </div>
                <div className="font-semibold text-ink">{role}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
