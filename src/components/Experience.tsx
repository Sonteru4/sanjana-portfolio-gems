import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Professional journey in AI/ML and data science
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {siteConfig.experience.map((exp, index) => (
                <div key={`${exp.company}-${index}`} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-royal hidden md:block"></div>
                  
                  <Card className="group md:ml-16 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 dark:bg-neutral-900 dark:border-neutral-800">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Company Logo */}
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="h-10 w-10 object-contain rounded-lg grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
                              <p className="text-lg font-medium text-foreground">{exp.company}</p>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground mt-2 md:mt-0">
                              <Calendar className="mr-2 h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>

                          <div className="mt-4">
                            <h4 className="font-medium mb-2">Key Responsibilities</h4>
                            <ul className="space-y-1">
                              {exp.bullets.map((item, i) => (
                                <li key={i} className="text-muted-foreground text-sm flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
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