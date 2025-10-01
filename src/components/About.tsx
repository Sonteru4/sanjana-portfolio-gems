import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart3, Users, Lightbulb } from "lucide-react";
import { siteConfig } from "@/data/site";

const skills = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Deep expertise in ML algorithms, neural networks, and model optimization"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Advanced data visualization and statistical analysis for business insights"
  },
  {
    icon: Users,
    title: "Leadership",
    description: "ENTJ-A personality with strong project management and team collaboration skills"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creative problem-solving approach to complex technical challenges"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Passionate technologist with a strategic mindset
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {siteConfig.bio.long}
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Core Strengths</h3>
              {skills.map((skill) => (
                <Card key={skill.title} className="card-hover transition-all duration-300 border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <skill.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                        <p className="text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}