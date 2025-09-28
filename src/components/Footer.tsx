import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sanjanaonteru",
    icon: Github
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/sanjanaonteru",
    icon: Linkedin
  },
  {
    name: "Email",
    href: "mailto:sanjana.onteru@email.com",
    icon: Mail
  }
];

export default function Footer() {
  return (
    <footer className="py-12 bg-section border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Brand */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Sanjana Onteru
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                AI/ML Engineer • Data Storyteller • ENTJ-A
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              © 2025 Sanjana Onteru. Built with 
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}