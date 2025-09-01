import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "DDoS Attack Detection using Machine Learning",
    description: "Built a multi-class classification model for 12 DDoS attack types using KNN, RF, XGBoost, and Decision Tree. Applied Hybrid Feature Selection to reduce 46 features to 20, achieving 99.95% accuracy with XGBoost.",
    image: "/project-1-placeholder.jpg",
    technologies: ["Python", "XGBoost", "Random Forest", "scikit-learn", "Feature Selection"],
    githubUrl: "https://github.com/yasaswi10/ddos-detection",
    featured: true
  },
  {
    title: "Expense Tracker",
    description: "Developed a full-stack expense tracking application using MERN stack with category-wise tracking and interactive data visualization charts in React.",
    image: "/project-2-placeholder.jpg",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    githubUrl: "https://github.com/yasaswi10/expense-tracker",
    liveUrl: "https://expense-tracker-demo.com"
  },
  {
    title: "AutiVoyage",
    description: "Created an educational game platform featuring jigsaw puzzles, trash sorting, and sliding games. Built with HTML, CSS animations, and JavaScript for interactive learning experiences.",
    image: "/project-3-placeholder.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animations", "Game Development"],
    githubUrl: "https://github.com/yasaswi10/autivoyage",
    liveUrl: "https://autivoyage.com"
  },
  {
    title: "Student Management System",
    description: "GUI-based Python application using Tkinter and SQLite for comprehensive student record management with add, view, delete, reset, and database clearing functions.",
    image: "/project-4-placeholder.jpg",
    technologies: ["Python", "Tkinter", "SQLite", "GUI Development"],
    githubUrl: "https://github.com/yasaswi10/student-management"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`bg-card-gradient border-border/50 shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-[1.02] overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'md:flex' : ''}`}>
                <div className={`${project.featured ? 'md:w-1/2' : ''} relative overflow-hidden`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground">Project Screenshot</p>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className={`p-6 ${project.featured ? 'md:w-1/2' : ''}`}>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/yasaswi10" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}