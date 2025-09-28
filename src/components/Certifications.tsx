import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Award } from "lucide-react";
import { CERTS } from "@/data/content";

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
            {CERTS.map((cert, idx) => (
              <Card key={idx} className="card-hover transition-all duration-300 border-primary/10 shadow-royal">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight">
                    {cert.name}
                  </h3>
                  
                  <p className="text-primary font-medium mb-2">{cert.org}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="mr-2 h-4 w-4" />
                    Year: {cert.year}
                  </div>

                  {cert.url && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Button>
                  )}
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