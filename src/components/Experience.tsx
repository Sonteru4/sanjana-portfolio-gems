import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: [
      "Lead a team of 5 data scientists and ML engineers in developing production-ready AI solutions",
      "Architected and deployed scalable ML pipelines processing 10M+ data points daily",
      "Collaborated with product teams to translate business requirements into technical solutions"
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Kubernetes", "Apache Spark", "MLflow"],
    achievements: [
      "Improved model accuracy by 15% through advanced feature engineering",
      "Reduced infrastructure costs by 30% via model optimization",
      "Led the adoption of MLOps practices across the organization"
    ]
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "DataVantage Inc",
    location: "Austin, TX",
    period: "2020 - 2022",
    description: [
      "Developed predictive models for customer behavior analysis and recommendation systems",
      "Created interactive dashboards and reports for C-level executives",
      "Mentored junior analysts and established data science best practices"
    ],
    technologies: ["Python", "Scikit-learn", "SQL", "Tableau", "Git", "Docker"],
    achievements: [
      "Built recommendation engine increasing user engagement by 40%",
      "Automated 80% of manual reporting processes",
      "Presented findings to board of directors resulting in $5M strategic investment"
    ]
  },
  {
    id: 3,
    title: "Junior Data Analyst",
    company: "Analytics Pro",
    location: "Remote",
    period: "2019 - 2020",
    description: [
      "Performed statistical analysis on large datasets to identify business insights",
      "Developed ETL pipelines for data processing and warehouse management",
      "Created data visualizations and reports for stakeholder communication"
    ],
    technologies: ["Python", "SQL", "Power BI", "Excel", "Apache Airflow"],
    achievements: [
      "Identified data quality issues saving 200+ hours monthly",
      "Developed automated anomaly detection reducing false positives by 60%",
      "Completed advanced statistics and machine learning certification"
    ]
  }
];

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
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-royal hidden md:block"></div>
                  
                  <Card className="md:ml-16 card-hover transition-all duration-300 border-primary/10 shadow-royal">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary mb-1">{exp.title}</h3>
                          <p className="text-lg font-medium text-foreground mb-2">{exp.company}</p>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Responsibilities</h4>
                          <ul className="space-y-1">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
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