import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl text-center text-subtle mb-16">
            Let's connect and discuss opportunities
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities, challenging projects, and 
                collaborations. Whether you're looking for an AI/ML engineer, need 
                consultation on data science projects, or just want to connect, I'd 
                love to hear from you.
              </p>

              <div className="space-y-4">
                {siteConfig.email && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-primary transition-colors duration-200">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                )}
                {siteConfig.social.linkedin && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">LinkedIn</p>
                      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
                        {siteConfig.social.linkedin}
                      </a>
                    </div>
                  </div>
                )}
                {siteConfig.social.github && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">GitHub</p>
                      <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors duration-200">
                        {siteConfig.social.github}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-primary mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to emails within 24 hours. For urgent matters, 
                  feel free to connect with me on LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-royal border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full hero-gradient shadow-royal hover:shadow-lg transition-all duration-300">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}