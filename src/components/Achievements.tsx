import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Users, Target, Zap, Star } from "lucide-react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  category: "Professional" | "Academic" | "Leadership" | "Innovation";
  year: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Employee of the Year 2023",
    description: "Recognized for exceptional performance and leadership in delivering critical ML solutions that generated $2.3M in cost savings.",
    icon: Trophy,
    category: "Professional",
    year: "2023"
  },
  {
    id: 2,
    title: "Published Research Paper",
    description: "Co-authored 'Advanced Ensemble Methods for Customer Churn Prediction' published in Journal of Machine Learning Research.",
    icon: Award,
    category: "Academic",
    year: "2023"
  },
  {
    id: 3,
    title: "AI Innovation Award",
    description: "Won company-wide innovation challenge for developing real-time fraud detection system with 99.7% accuracy.",
    icon: Zap,
    category: "Innovation",
    year: "2022"
  },
  {
    id: 4,
    title: "Team Leadership Excellence",
    description: "Successfully led cross-functional team of 12 members to deliver enterprise ML platform 2 weeks ahead of schedule.",
    icon: Users,
    category: "Leadership",
    year: "2022"
  },
  {
    id: 5,
    title: "Stanford Dean's List",
    description: "Maintained 3.9+ GPA throughout graduate program while conducting research in deep learning applications.",
    icon: Star,
    category: "Academic",
    year: "2019"
  },
  {
    id: 6,
    title: "Data Science Kaggle Master",
    description: "Achieved Kaggle Master rank with multiple top 10% finishes in machine learning competitions.",
    icon: Target,
    category: "Professional",
    year: "2021"
  }
];

const categoryColors = {
  Professional: "bg-blue-500/10 text-blue-500",
  Academic: "bg-purple-500/10 text-purple-500", 
  Leadership: "bg-primary/10 text-primary",
  Innovation: "bg-orange-500/10 text-orange-500"
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Recognition for excellence and innovation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="card-hover transition-all duration-300 border-primary/10 shadow-emerald group hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <achievement.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[achievement.category]}`}>
                        {achievement.category}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1">{achievement.year}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <Trophy className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">6+ Professional Awards</p>
                <p className="text-sm text-muted-foreground">Recognized for technical excellence and leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}