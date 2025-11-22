import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { StructuredData } from "@/components/StructuredData";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });

  const fieldClasses =
    "bg-background/80 border-border/60 shadow-md transform transition-all duration-medium focus:-translate-y-[2px] focus:shadow-gold focus-visible:ring-accent-gold";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <StructuredData type="contact" />
      <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-base-white to-surface">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-6 animate-fade-in">
            Let's Build Something <span className="text-accent-gold">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
            Ready to transform your business with AI-powered solutions? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6 border border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-gold/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-gold/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Email Us</h3>
                    <a
                      href="mailto:info@billionets.com"
                      className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                    >
                      info@billionets.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-border hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-gold/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">Call Us</h3>
                    <a
                      href="tel:+971501234567"
                      className="text-sm text-muted-foreground hover:text-accent-gold transition-colors"
                    >
                      +971 50 123 4567
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border border-accent-gold bg-accent-gold/5">
                <h3 className="font-semibold text-ink mb-2">Business Hours</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Friday - Saturday: Closed</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="up">
                <div className="relative group">
                  <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-tr from-accent-gold/60 via-accent-gold/10 to-transparent opacity-60 group-hover:opacity-100 blur-xl transition-all duration-slow" />
                  <div className="pointer-events-none absolute -top-32 -right-16 h-56 w-56 rounded-full bg-accent-gold/10 blur-3xl" />
                  <Card className="relative p-8 lg:p-10 rounded-3xl border border-border/60 bg-background/90 backdrop-blur-xl shadow-gold transition-all duration-medium transform group-hover:-translate-y-1 group-hover:shadow-lg group-hover:scale-[1.01]">
                    <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">Send Us a Message</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl">
                      Share a few details about your project and our team will get back to you within one business day.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={fieldClasses}
                        required
                        aria-required="true"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={fieldClasses}
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className={fieldClasses}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={fieldClasses}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, projectType: value })
                      }
                    >
                      <SelectTrigger id="projectType" className={fieldClasses}>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="ai">AI Solutions</SelectItem>
                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                        <SelectItem value="seo">SEO & Analytics</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className={fieldClasses}
                      required
                      aria-required="true"
                    />
                  </div>

                  <Button3D variant="primary" type="submit" className="w-full md:w-auto">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button3D>
                    </form>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ink mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              2606, Regal Tower, Business Bay, Dubai, UAE
            </p>
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border shadow-md">
            <iframe
              title="Billionets Office Location"
              src="https://www.google.com/maps?q=2606,+Regal+Tower,+Business+Bay,+Dubai,+UAE&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
