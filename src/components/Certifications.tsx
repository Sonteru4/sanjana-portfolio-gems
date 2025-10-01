import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Award } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Professional credentials and continuous learning
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.skills.certifications.map((cert, idx) => (
              <Card key={idx} className="group rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-900 dark:border-neutral-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.name} certification logo`}
                      className="h-10 w-10 object-contain rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {cert.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <Award className="mr-2 h-4 w-4" />
                        Professional Certification
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12"></div>
        </div>
      </div>
    </section>
  );
}