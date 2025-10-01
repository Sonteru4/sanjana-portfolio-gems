import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="py-20" aria-labelledby="education-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="education-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Academic foundation in computer science and data science
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {siteConfig.education.map((edu, index) => (
                <div key={`${edu.degree}-${index}`} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-royal hidden md:block"></div>
                  
                  <Card className="md:ml-16 card-hover transition-all duration-300 border-primary/10 shadow-royal">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
                          <p className="text-lg font-medium text-foreground mb-2">{edu.school}</p>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>

                      {edu.details && edu.details.length > 0 && (
                        <div className="mb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.details[0]}
                          </p>
                        </div>
                      )}

                      {edu.details && edu.details.length > 1 && (
                        <div>
                          <h4 className="font-medium mb-3 flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                            Details
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.details.slice(1).map((d) => (
                              <Badge key={d} variant="outline" className="text-xs border-primary/30">
                                {d}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}