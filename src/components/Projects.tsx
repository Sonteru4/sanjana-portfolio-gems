import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, ExternalLink, Search, Filter } from "lucide-react";
import { PROJECTS } from "@/data/content";

type FilterType = "All" | "Data/ML" | "Other";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const normalized = PROJECTS.map(p => ({
    title: p.title,
    subtitle: p.subtitle ?? "",
    description: p.description,
    techStack: p.tags,
    category: p.type === "data" ? "Data/ML" : "Other",
    repoUrl: p.links?.repo ?? p.links?.url,
    demoUrl: p.links?.demo,
    impact: p.impact ?? "",
  }));

  const filteredProjects = normalized.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-center text-subtle mb-12">
            Innovative solutions that drive real-world impact
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {["All", "Data/ML", "Other"].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter as typeof activeFilter)}
                  className={activeFilter === filter ? "hero-gradient" : "border-primary text-primary hover:bg-primary/10"}
                  size="sm"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
              <Card key={idx} className="card-hover transition-all duration-300 border-primary/10 shadow-royal">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  {project.subtitle && <p className="text-primary font-medium">{project.subtitle}</p>}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.impact && (
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-medium text-primary mb-1">Impact</p>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <Button asChild size="sm" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Repository
                        </a>
                      </Button>
                    )}
                    {project.demoUrl && (
                      <Button asChild size="sm" className="flex-1 hero-gradient">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}