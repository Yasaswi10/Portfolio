import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border/50 shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm Naga Yasaswi Sabbisetti, a Computer Science undergraduate at Shri Vishnu Engineering College for Women, Bhimavaram, 
                  with a strong academic record (GPA: 8.89/10). My passion lies in software development, 
                  machine learning, and data analysis, where I enjoy turning complex problems into elegant solutions.
                </p>
                <p>
                  I have hands-on experience with full-stack development using the MERN stack, machine learning 
                  model development, and data visualization. My recent projects include building a DDoS attack 
                  detection system with 99.95% accuracy and developing interactive educational platforms.
                </p>
                <p>
                  As a Class Representative and active member of technical clubs like GDG UI/UX Team, I've developed strong leadership 
                  and communication skills. I'm seeking internship opportunities where I can contribute to 
                  impactful real-world projects while continuing to grow my technical expertise.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <h4 className="font-semibold mb-3 text-foreground">What drives me:</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Applying ML and data science to solve real problems</li>
                  <li>• Continuous learning and skill development</li>
                  <li>• Leading and coordinating technical initiatives</li>
                  <li>• Building impactful software solutions</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
