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
  FolderOpen,
  Sun,
  Moon,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

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
    { id: "about", label: "About Me", icon: User },
    { id: "projects", label: "VA Toolkit", icon: FolderOpen },
    { id: "tools", label: "Tools & Integrations", icon: Wrench },
    { id: "service-packages", label: "SERVICE PACKAGES", icon: Cpu },
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
                  onClick={() =>
                    item.id === "home"
                      ? window.scrollTo({ top: 0, behavior: "smooth" })
                      : scrollToSection(item.id)
                  }
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </div>
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
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
                      if (item.id === "home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        scrollToSection(item.id);
                      }
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
            src="/hero-ai-interface.jpg"
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
          <Badge className="mb-6 px-6 py-2 text-sm font-mono animate-glow-pulse bg-primary/20 border-primary/50 text-black dark:text-white hover:text-white dark:hover:text-black">
            <User className="w-4 h-4 mr-2" />
            PROFESSIONAL VIRTUAL ASSISTANT
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="gradient-text glow-text">VIRTUAL-ASSISTANT</span>
            <br />
            <span className="text-foreground">ZRNCRBLLN</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Computer Engineering graduate and skilled Virtual Assistant offering
            administrative and technical support to help you improve workflow
            and productivity
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
              onClick={() => scrollToSection("service-packages")}
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

      {/* About Me Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-secondary/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-primary/20 border-primary/50 text-black dark:text-white hover:text-white dark:hover:text-black">
              <User className="w-4 h-4 mr-2" />
              ABOUT ME
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Zoren Corbillon
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Computer Engineering graduate and skilled Virtual Assistant
              bringing both administrative and technical expertise to help you
              improve workflow and productivity
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass-card p-8 md:p-12 text-center">
              <div className="mb-8">
                <img
                  src="/profile.png"
                  alt="Zoren Corbillon"
                  className="w-32 h-32 mx-auto mb-6 rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold mb-4">Zoren Corbillon</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  As a Computer Engineering graduate, I combine technical
                  proficiency with administrative excellence to deliver reliable
                  and efficient virtual support. My goal is to help clients
                  streamline their operations and achieve greater productivity
                  through organized, adaptable, and tech-savvy virtual
                  assistance.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/20 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">Organized</h4>
                  <p className="text-sm text-muted-foreground">
                    Meticulous attention to detail and systematic approach to
                    task management
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-bold mb-2">Adaptable</h4>
                  <p className="text-sm text-muted-foreground">
                    Quick to learn new tools and adapt to changing client needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold mb-2">Tech-Savvy</h4>
                  <p className="text-sm text-muted-foreground">
                    Leveraging cutting-edge technology to enhance productivity
                    and efficiency
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 bg-gradient-to-br from-accent/5 to-accent/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-accent/20 border-accent/50 text-black dark:text-white hover:text-white dark:hover:text-black">
              <FolderOpen className="w-4 h-4 mr-2" />
              VA TOOLKIT
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Essential Online Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              As a Virtual Assistant, I leverage a comprehensive toolkit of
              online tools to deliver reliable support in administrative tasks,
              scheduling, data management, research, and social media
              management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto transform-3d">
            {[
              {
                title: "Preliminaries",
                description:
                  "Basic setup tools and accounts needed for VA work",
                tools: [
                  "Email Setup",
                  "Professional Profiles",
                  "Security Tools",
                ],
                icon: Shield,
              },
              {
                title: "Communication Tools",
                description:
                  "Platforms for collaboration and client communication",
                tools: ["Zoom", "Slack", "WhatsApp", "Teams", "Viber"],
                icon: MessageSquare,
              },
              {
                title: "Productivity Tools",
                description: "Applications for managing workflow and tasks",
                tools: [
                  "Google Drive",
                  "Google Calendar",
                  "Trello",
                  "Dropbox",
                  "LastPass",
                  "Clockify",
                  "Calendly",
                ],
                icon: Workflow,
              },
              {
                title: "AI Tools",
                description:
                  "Modern AI assistants for automating and enhancing tasks",
                tools: ["DeepSeek", "Gemini", "ChatGPT"],
                icon: Cpu,
              },
              {
                title: "Creative Tools",
                description: "Content creation platforms",
                tools: ["Canva", "CapCut", "Photoshop"],
                icon: Code2,
              },
              {
                title: "Global Payment Tools",
                description: "Systems for handling international transactions",
                tools: ["PayPal", "Payoneer", "Wise"],
                icon: Globe,
              },
              {
                title: "Digital Career Toolkit",
                description: "Professional growth and job-hunting platforms",
                tools: ["TealHQ", "FinalRound AI", "Jobscan", "LinkedIn"],
                icon: TrendingUp,
              },
            ].map((category, idx) => {
              const Icon = category.icon;
              return (
                <Card
                  key={idx}
                  className="glass-card p-8 group hover-glow overflow-hidden relative depth-shadow transform-3d transition-transform duration-300"
                  style={{
                    transform: `rotateX(${
                      Math.sin(idx * 0.3) * 2
                    }deg) rotateY(${Math.cos(idx * 0.3) * 2}deg)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `rotateX(${
                      Math.sin(idx * 0.3) * 2
                    }deg) rotateY(${
                      Math.cos(idx * 0.3) * 2
                    }deg) translateZ(25px) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotateX(${
                      Math.sin(idx * 0.3) * 2
                    }deg) rotateY(${Math.cos(idx * 0.3) * 2}deg)`;
                  }}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">
                        Tools Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.tools.map((tool, toolIdx) => (
                          <Badge
                            key={toolIdx}
                            variant="secondary"
                            className="text-xs font-mono"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section
        id="tools"
        className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-accent/20 border-accent/50 text-black dark:text-white hover:text-white dark:hover:text-black">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Metrics */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-secondary/10">
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

      {/* Service Packages Section */}
      <section
        id="service-packages"
        className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 bg-secondary/20 border-secondary/50 text-black dark:text-white hover:text-white dark:hover:text-black">
              <Cpu className="w-4 h-4 mr-2" />
              SERVICE PACKAGES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Virtual Assistant Service Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Mail,
                name: "Basic VA Package",
                price: "₱10,000/month",
                desc: "Focused on admin support like email, calendar, data entry, and scheduling.",
                features: [
                  "Email Management",
                  "Calendar Scheduling",
                  "Data Entry",
                  "Basic Administrative Tasks",
                ],
              },
              {
                icon: Database,
                name: "Tech & Data Support Package",
                price: "₱15,000/month",
                desc: "For technical clients; includes spreadsheets, dashboards, database management, and KPI tracking.",
                features: [
                  "Spreadsheet Management",
                  "Dashboard Creation",
                  "Database Handling",
                  "KPI Tracking",
                ],
              },
              {
                icon: Code2,
                name: "Web & Systems Assistant Package",
                price: "₱20,000/month",
                desc: "Includes web updates, basic coding, testing, and troubleshooting.",
                features: [
                  "Web Content Updates",
                  "Basic Coding",
                  "System Testing",
                  "Troubleshooting",
                ],
              },
              {
                icon: Workflow,
                name: "Premium All-in-One Virtual Operations Package",
                price: "₱25,000/month",
                desc: "Combines all services with workflow automation, analytics integration, and weekly reporting.",
                features: [
                  "Workflow Automation",
                  "Analytics Integration",
                  "Weekly Reporting",
                  "Full Support",
                ],
              },
            ].map((pkg, idx) => (
              <Card
                key={idx}
                className="glass-card p-8 group hover-glow overflow-hidden relative depth-shadow transform-3d transition-transform duration-300"
                style={{
                  transform: `rotateX(${Math.sin(idx * 0.3) * 2}deg) rotateY(${
                    Math.cos(idx * 0.3) * 2
                  }deg)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = `rotateX(${
                    Math.sin(idx * 0.3) * 2
                  }deg) rotateY(${
                    Math.cos(idx * 0.3) * 2
                  }deg) translateZ(25px) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = `rotateX(${
                    Math.sin(idx * 0.3) * 2
                  }deg) rotateY(${Math.cos(idx * 0.3) * 2}deg)`;
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <pkg.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  </div>
                  <div className="text-3xl font-black gradient-text mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground mb-4">{pkg.desc}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-accent/5 to-accent/10"
      >
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
                    <option>Basic VA Package</option>
                    <option>Tech & Data Support Package</option>
                    <option>Web & Systems Assistant Package</option>
                    <option>
                      Premium All-in-One Virtual Operations Package
                    </option>
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
      <footer className="py-12 px-4 border-t border-border/50 bg-gradient-to-br from-primary/5 to-primary/10">
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
