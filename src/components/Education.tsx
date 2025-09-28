import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface EducationItem {
  id: number;
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  description: string;
  coursework: string[];
  honors: string[];
}

const education: EducationItem[] = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2017 - 2019",
    gpa: "3.9/4.0",
    description: "Specialized in machine learning, statistical modeling, and big data analytics with focus on practical applications in business intelligence.",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Statistical Inference",
      "Big Data Analytics",
      "Computer Vision",
      "Natural Language Processing"
    ],
    honors: [
      "Dean's List (4 semesters)",
      "Graduate Research Assistant",
      "Outstanding Student in Data Science Award"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2013 - 2017",
    gpa: "3.8/4.0",
    description: "Strong foundation in computer science fundamentals with concentration in algorithms, data structures, and software engineering principles.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Computer Networks",
      "Operating Systems",
      "Artificial Intelligence"
    ],
    honors: [
      "Magna Cum Laude",
      "Phi Beta Kappa Honor Society",
      "ACM Programming Contest Finalist"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Academic foundation in computer science and data science
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-emerald hidden md:block"></div>
                  
                  <Card className="md:ml-16 card-hover transition-all duration-300 border-primary/10 shadow-emerald">
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
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4" />
                            {edu.location}
                          </div>
                          {edu.gpa && (
                            <div className="flex items-center text-sm text-primary font-medium">
                              <Award className="mr-2 h-4 w-4" />
                              GPA: {edu.gpa}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-3 flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                            Relevant Coursework
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.coursework.map((course) => (
                              <Badge key={course} variant="outline" className="text-xs border-primary/30">
                                {course}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3 flex items-center">
                            <Award className="mr-2 h-4 w-4 text-primary" />
                            Honors & Awards
                          </h4>
                          <ul className="space-y-1">
                            {edu.honors.map((honor, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {honor}
                              </li>
                            ))}
                          </ul>
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