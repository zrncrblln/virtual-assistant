import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Zap,
  Database,
  Network,
  BarChart3,
  Workflow,
  MessageSquare,
  TrendingUp,
  Settings,
  Shield,
  Code2,
  Cpu,
  Mail,
  Github,
  Linkedin,
  Send,
  ArrowRight,
  CheckCircle2,
  Globe,
  Box,
  Link2,
  Home,
  User,
  Wrench,
  Phone,
  Menu,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import heroImage from "@/assets/hero-ai-interface.jpg";
import predictiveAnalytics from "@/assets/predictive-analytics.jpg";
import automatedWorkflows from "@/assets/automated-workflows.jpg";
import realtimeData from "@/assets/realtime-data.jpg";
import nlpChat from "@/assets/nlp-chat.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "tech-stack", label: "TECH STACK", icon: Cpu },
    { id: "about", label: "About", icon: User },
    { id: "tools", label: "Tools", icon: Wrench },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen perspective-container">
      {/* Navigation Bar */}
      <nav className="sticky top-0 left-0 right-0 z-50 glass-card border-b border-border/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <div className="bg-white p-2 rounded">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 hover-glow ${
                    activeSection === item.id
                      ? "bg-primary/20 text-primary border border-primary/50 glow-border"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className={`justify-start px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 hover-glow ${
                      activeSection === item.id
                        ? "bg-primary/20 text-primary border border-primary/50 glow-border"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                    }`}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20"
      >
        {/* Lively Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="AI-powered virtual assistant interface"
            className="w-full h-full object-cover opacity-20 animate-pulse-slow"
            style={{
              animation: "pulse-slow 8s ease-in-out infinite",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 px-6 py-2 text-sm font-mono animate-glow-pulse bg-primary/20 border-primary/50 text-white hover:text-black">
            <Sparkles className="w-4 h-4 mr-2" />
            ADVANCED AI TECHNOLOGY
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="gradient-text glow-text">AI-DRIVEN</span>
            <br />
            <span className="text-foreground">VA SOLUTIONS</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            From predictive analytics to automated workflows, explore how AI &
            technology can run your business ahead of the competition
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              size="lg"
              variant="glow"
              className="text-base font-bold group"
              style={{
                background:
                  "linear-gradient(135deg, hsl(190 100% 50%), hsl(258 90% 66%))",
                color: "white",
              }}
              onClick={() => scrollToSection("about")}
            >
              View Service
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
          </div>

          {/* Floating Feature Previews */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto transform-3d">
            {[
              { icon: CheckCircle2, text: "Checklist Automation" },
              { icon: MessageSquare, text: "AI Chat Interface" },
              { icon: Workflow, text: "Conditional Logic" },
              { icon: Database, text: "Auto-Stock Management" },
              { icon: Code2, text: "Formula Calculator" },
              { icon: Settings, text: "Variable Records" },
              { icon: TrendingUp, text: "Update Records" },
              { icon: Shield, text: "Security First" },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="glass-card p-4 hover-glow cursor-pointer animate-float depth-shadow group"
                style={{
                  animationDelay: `${idx * 0.2}s`,
                  transform: `rotateX(${Math.sin(idx) * 5}deg) rotateY(${
                    Math.cos(idx) * 5
                  }deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `rotateX(${
                    Math.sin(idx) * 5
                  }deg) rotateY(${
                    Math.cos(idx) * 5
                  }deg) translateZ(20px) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateX(${
                    Math.sin(idx) * 5
                  }deg) rotateY(${Math.cos(idx) * 5}deg)`;
                }}
              >
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:text-secondary transition-colors" />
                <p className="text-xs font-mono text-muted-foreground">
                  {feature.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech-stack" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-secondary/20 border-secondary/50 text-white hover:text-black">
              <Cpu className="w-4 h-4 mr-2" />
              TECH STACK
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Technology Capabilities
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { icon: Box, name: "Product", desc: "Database Management" },
              { icon: Zap, name: "Proline", desc: "API Integration" },
              { icon: Database, name: "Trace", desc: "Project Tracking" },
              { icon: Network, name: "Border", desc: "Workflow Automation" },
              { icon: Settings, name: "Invert", desc: "Data Processing" },
              { icon: Link2, name: "Chain", desc: "System Integration" },
            ].map((tech, idx) => (
              <Button
                key={idx}
                variant="glass"
                size="lg"
                className="group animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <tech.icon className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
                <span className="font-bold">{tech.name}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  ({tech.desc})
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section id="about" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/20 border-primary/50 text-white hover:text-black">
              <Settings
                className="w-4 h-4 mr-2 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              OUR AI CAPABILITIES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cutting-Edge AI Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the cutting-edge capabilities of our AI solutions
              designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transform-3d">
            {/* Predictive Analytics */}
            <Card
              className="glass-card p-8 group hover-glow overflow-hidden relative depth-shadow transform-3d transition-transform duration-300"
              style={{
                transform: "rotateX(2deg) rotateY(-2deg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(2deg) rotateY(-2deg) translateZ(30px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(2deg) rotateY(-2deg)";
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <img
                  src={predictiveAnalytics}
                  alt="Predictive analytics visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">Predictive Analytics</h3>
                </div>
                <div className="mb-4 p-4 bg-background/80 backdrop-blur rounded-lg border border-primary/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-mono text-muted-foreground">
                      ROI Forecast
                    </span>
                    <span className="text-2xl font-bold text-accent">+45%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-3/4 animate-shimmer" />
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Advanced forecasting to predict trends and make data-driven
                  decisions with confidence
                </p>
              </div>
            </Card>

            {/* Automated Workflows */}
            <Card
              className="glass-card p-8 group hover-glow overflow-hidden relative depth-shadow transform-3d transition-transform duration-300"
              style={{
                transform: "rotateX(-2deg) rotateY(2deg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(-2deg) rotateY(2deg) translateZ(30px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(-2deg) rotateY(2deg)";
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <img
                  src={automatedWorkflows}
                  alt="Automated workflow diagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="w-8 h-8 text-secondary" />
                  <h3 className="text-2xl font-bold">Automated Workflows</h3>
                </div>
                <div className="mb-4 flex items-center gap-2 font-mono text-sm bg-background/80 backdrop-blur p-4 rounded-lg border border-secondary/20">
                  <span className="text-primary">Trigger</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-secondary">Process</span>
                  <ArrowRight className="w-4 h-4" />
                  <span className="text-accent">Execute</span>
                </div>
                <p className="text-muted-foreground">
                  Streamline your business processes with our sophisticated
                  automation platform
                </p>
              </div>
            </Card>

            {/* Real-Time Data Analysis */}
            <Card
              className="glass-card p-8 group hover-glow overflow-hidden relative depth-shadow transform-3d transition-transform duration-300"
              style={{
                transform: "rotateX(1deg) rotateY(3deg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(1deg) rotateY(3deg) translateZ(30px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(1deg) rotateY(3deg)";
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <img
                  src={realtimeData}
                  alt="Real-time data dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold">
                    Real-Time Data Analysis
                  </h3>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-2">
                  {[85, 92, 78].map((val, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-background/80 backdrop-blur rounded border border-accent/20"
                    >
                      <div className="text-2xl font-bold text-accent">
                        {val}%
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        Metric {idx + 1}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  Make smarter, faster decisions with real-time data analysis
                  and instant insights
                </p>
              </div>
            </Card>

            {/* Natural Language Processing */}
            <Card
              className="glass-card p-8 group hover-glow overflow-hidden relative depth-shadow transform-3d transition-transform duration-300"
              style={{
                transform: "rotateX(-1deg) rotateY(-3deg)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(-1deg) rotateY(-3deg) translateZ(30px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "rotateX(-1deg) rotateY(-3deg)";
              }}
            >
              <div className="absolute inset-0 opacity-30">
                <img
                  src={nlpChat}
                  alt="Natural language processing interface"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold">
                    Natural Language Processing
                  </h3>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="bg-primary/20 border border-primary/30 rounded-lg p-3 text-sm">
                    <code className="font-mono">
                      {"// AI-powered communication"}
                    </code>
                  </div>
                  <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-3 text-sm">
                    <code className="font-mono">
                      {"if (context) { respond() }"}
                    </code>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Communicate naturally with AI-powered assistants that
                  understand context and deliver precise responses
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section id="tools" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-accent/20 border-accent/50 text-white hover:text-black">
              <Globe className="w-4 h-4 mr-2" />
              INTEGRATIONS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Connect Effortlessly
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Our AI solutions are designed to integrate seamlessly with your
              current technology stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto transform-3d">
            {[
              "Slack",
              "Notion",
              "Google Workspace",
              "Calendly",
              "Trello",
              "Figma",
              "GitHub",
            ].map((platform, idx) => (
              <Card
                key={idx}
                className="glass-card p-6 text-center hover-glow group cursor-pointer animate-scale-in depth-shadow transform-3d"
                style={{
                  animationDelay: `${idx * 0.05}s`,
                  transform: `rotateX(${Math.sin(idx * 0.5) * 3}deg) rotateY(${
                    Math.cos(idx * 0.5) * 3
                  }deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `rotateX(${
                    Math.sin(idx * 0.5) * 3
                  }deg) rotateY(${
                    Math.cos(idx * 0.5) * 3
                  }deg) translateZ(25px) scale(1.03)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateX(${
                    Math.sin(idx * 0.5) * 3
                  }deg) rotateY(${Math.cos(idx * 0.5) * 3}deg)`;
                }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{platform}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  Seamless integration
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs hover:bg-white"
                >
                  View website →
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Metrics */}
      <section className="py-20 px-4 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Performance Metrics
            </h2>
            <p className="text-xl text-muted-foreground">
              Engineering excellence by the numbers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {[
              { value: "99.9%", label: "Data Accuracy" },
              { value: "40%", label: "Workflow Speed ↑" },
              { value: "30%", label: "Processing Speed ↑" },
              { value: "60%", label: "Query Resolution ↓" },
              { value: "24/7", label: "AI Support" },
              { value: "200+", label: "Daily Tasks Automated" },
            ].map((metric, idx) => (
              <Card
                key={idx}
                className="glass-card glow-border p-6 text-center animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground font-mono">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your Automation Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build the future of your business together
            </p>
          </div>

          <Card className="glass-card glow-border p-8 md:p-12">
            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 gradient-text mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-muted-foreground">
                  Your message has been sent successfully. We'll get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  emailjs
                    .sendForm(
                      "service_jcxfhvo",
                      "template_tozuhff",
                      e.target as HTMLFormElement,
                      "tc11ouAgDn29MCN0Y"
                    )
                    .then(
                      (result) => {
                        console.log(result.text);
                        setFormSubmitted(true);
                      },
                      (error) => {
                        console.log(error.text);
                        alert("Failed to send message. Please try again.");
                      }
                    );
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      required
                      className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      required
                      className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Service Type
                  </label>
                  <select
                    name="service_type"
                    required
                    className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option>AI Workflow Automation</option>
                    <option>Database Management</option>
                    <option>API Integration</option>
                    <option>Full-Stack VA Support</option>
                    <option>Custom Technical Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-background/50 border border-primary/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    variant="glow"
                    className="flex-1 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Invitation
                  </Button>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <a
                      href="mailto:zorencorbillon@gmail.com"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="font-mono">Email</span>
                    </a>
                    <a
                      href="https://github.com/zrncrblln"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-mono">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zoren-corbillon-96719a138/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="font-mono">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-primary">Quick Access</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Tech Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-secondary">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    AI Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Database Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    System Integration
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-accent">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://github.com/zrncrblln"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/zoren-corbillon-96719a138/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Data Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground font-mono">
            <p>
              Built with advanced automation & AI | © 2024 Zoren Corbillon |
              Engineered for Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
