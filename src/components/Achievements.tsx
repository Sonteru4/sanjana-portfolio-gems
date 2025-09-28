import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/data/content";

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
            {ACHIEVEMENTS.length === 0 && (
              <div className="md:col-span-2 lg:col-span-3 text-center text-muted-foreground">
                No achievements added yet.
              </div>
            )}
            {ACHIEVEMENTS.map((achievement, idx) => (
              <Card key={idx} className="card-hover transition-all duration-300 border-primary/10 shadow-royal group hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.detail}
                  </p>
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