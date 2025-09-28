import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { PROFILE } from "@/data/content";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8">
            <img
              src={PROFILE.avatar || "/avatar.jpg"}
              alt={PROFILE.name || "Profile avatar"}
              className="w-40 h-40 rounded-full mx-auto shadow-royal glow-royal object-cover border-4 border-primary/20"
            />
          </div>

          {/* Name & Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {PROFILE.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-subtle mb-8 max-w-2xl mx-auto">
            {PROFILE.tagline}
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming complex data into actionable insights and building 
            intelligent systems that solve real-world problems. I combine technical expertise 
            with strategic thinking to deliver impactful AI/ML solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {PROFILE.socials?.github && (
              <Button asChild size="lg" className="hero-gradient shadow-royal hover:shadow-lg transition-all duration-300">
                <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            )}
            {PROFILE.socials?.linkedin && (
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            )}
            {PROFILE.email && (
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href={`mailto:${PROFILE.email}`} aria-label="Email">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            )}
            {PROFILE.resumeUrl && (
              <Button asChild size="lg" variant="secondary" className="hover:shadow-md transition-all duration-300">
                <a href={PROFILE.resumeUrl} download>
                  <FileDown className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            )}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full mx-auto">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}