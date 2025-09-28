import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Award, CheckCircle } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  skills: string[];
  verifyUrl?: string;
  status: "Active" | "Expired";
  expiryDate?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "March 2023",
    credentialId: "AWS-ML-12345",
    description: "Validates expertise in building, training, tuning, and deploying machine learning models on AWS.",
    skills: ["AWS SageMaker", "ML Deployment", "Data Engineering", "Model Optimization"],
    verifyUrl: "https://aws.amazon.com/verification",
    status: "Active",
    expiryDate: "March 2026"
  },
  {
    id: 2,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "January 2023",
    credentialId: "GCP-DE-67890",
    description: "Demonstrates ability to design, build, operationalize, secure, and monitor data processing systems.",
    skills: ["BigQuery", "Dataflow", "Cloud ML Engine", "Data Pipeline Design"],
    verifyUrl: "https://cloud.google.com/certification",
    status: "Active",
    expiryDate: "January 2025"
  },
  {
    id: 3,
    title: "Certified Analytics Professional (CAP)",
    issuer: "INFORMS",
    date: "September 2022",
    credentialId: "CAP-54321",
    description: "Validates end-to-end understanding of the analytics process, from framing business problems to implementing solutions.",
    skills: ["Analytics Strategy", "Data Management", "Model Development", "Model Deployment"],
    verifyUrl: "https://www.certifiedanalytics.org",
    status: "Active",
    expiryDate: "September 2025"
  },
  {
    id: 4,
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "June 2022",
    credentialId: "TF-DEV-11111",
    description: "Demonstrates proficiency in using TensorFlow to solve deep learning and machine learning problems.",
    skills: ["TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    verifyUrl: "https://www.tensorflow.org/certificate",
    status: "Active",
    expiryDate: "June 2025"
  },
  {
    id: 5,
    title: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "November 2021",
    description: "Validates skills in designing and implementing AI solutions using Azure Cognitive Services and Azure Machine Learning.",
    skills: ["Azure ML", "Cognitive Services", "AI Solutions", "MLOps"],
    verifyUrl: "https://learn.microsoft.com/credentials",
    status: "Active",
    expiryDate: "November 2024"
  }
];

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
            {certifications.map((cert) => (
              <Card key={cert.id} className="card-hover transition-all duration-300 border-primary/10 shadow-royal">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <Badge 
                        variant={cert.status === "Active" ? "default" : "secondary"}
                        className={cert.status === "Active" ? "hero-gradient" : ""}
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {cert.status}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="mr-2 h-4 w-4" />
                    Issued: {cert.date}
                    {cert.expiryDate && (
                      <span className="ml-2">• Expires: {cert.expiryDate}</span>
                    )}
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground mb-3">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs border-primary/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {cert.verifyUrl && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Committed to continuous learning and staying current with industry best practices
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Award className="mr-2 h-4 w-4" />
              View All Credentials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}