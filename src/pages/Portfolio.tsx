import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

type ProjectCategory = "All" | "Web" | "Mobile" | "AI" | "Branding";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description: "Modern e-commerce solution with AI-powered product recommendations",
    tags: ["React", "Node.js", "AI/ML", "Stripe"],
    metrics: { metric1: "+250% Sales", metric2: "40K Users" },
    color: "from-accent-gold/20 to-accent-gold/5",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile",
    description: "Patient management and telemedicine platform for UAE hospitals",
    tags: ["React Native", "Healthcare", "Real-time"],
    metrics: { metric1: "50K+ Downloads", metric2: "4.8★ Rating" },
    color: "from-surface to-background",
  },
  {
    title: "AI Chatbot Solution",
    category: "AI",
    description: "Intelligent customer service chatbot with 95% accuracy",
    tags: ["NLP", "Machine Learning", "Python", "Integration"],
    metrics: { metric1: "95% Accuracy", metric2: "-60% Support Cost" },
    color: "from-accent-gold/20 to-accent-gold/5",
  },
  {
    title: "Real Estate Portal",
    category: "Web",
    description: "Property listing platform with virtual tours and AI matching",
    tags: ["Next.js", "3D Tours", "AI Matching"],
    metrics: { metric1: "10K+ Listings", metric2: "+180% Conversions" },
    color: "from-surface to-background",
  },
  {
    title: "Fintech Mobile App",
    category: "Mobile",
    description: "Digital banking solution with advanced security features",
    tags: ["Flutter", "Blockchain", "Security"],
    metrics: { metric1: "100K+ Users", metric2: "Bank-Grade Security" },
    color: "from-accent-gold/20 to-accent-gold/5",
  },
  {
    title: "Brand Identity Suite",
    category: "Branding",
    description: "Complete rebrand for leading UAE hospitality group",
    tags: ["Brand Strategy", "Visual Identity", "Guidelines"],
    metrics: { metric1: "+45% Recognition", metric2: "Award Winning" },
    color: "from-surface to-background",
  },
];

const categories: ProjectCategory[] = ["All", "Web", "Mobile", "AI", "Branding"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-base-white to-surface hero-parallax">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <AnimatedSection direction="blur">
            <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
              Our <span className="text-accent-gold">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our successful projects and see how we've helped businesses across the UAE 
              achieve their digital transformation goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-pill font-semibold transition-all duration-base ${
                  selectedCategory === category
                    ? "bg-accent-gold text-ink shadow-gold"
                    : "bg-surface text-muted-foreground hover:bg-surface/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`card tilt overflow-hidden border border-border cursor-pointer group bg-gradient-to-br ${project.color}`}
                data-tilt-strength="10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image Placeholder */}
                <div
                  className="aspect-video reveal-wrap bg-surface/50 flex items-center justify-center border-b border-border"
                  data-reveal-duration="0.7"
                >
                  <div className="reveal-overlay" />
                  <div className="reveal-img flex items-center justify-center w-full h-full">
                    <ExternalLink className="h-12 w-12 text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-ink mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div>
                      <div className="text-lg font-bold text-accent-gold">
                        {project.metrics.metric1}
                      </div>
                      <div className="text-xs text-muted-foreground">Result</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-gold">
                        {project.metrics.metric2}
                      </div>
                      <div className="text-xs text-muted-foreground">Impact</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help achieve similar results for your business.
          </p>
          <Button3D variant="primary" size="lg" asChild>
            <Link
              to="/contact"
              className="link-reveal inline-flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button3D>
        </div>
      </section>
    </main>
  );
}
