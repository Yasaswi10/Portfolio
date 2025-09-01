import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  GitBranch, 
  Users,
  Lightbulb,
  MessageSquare 
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "C", "JavaScript", "SQL", "HTML", "CSS"],
    color: "text-blue-500"
  },
  {
    title: "Frameworks & Libraries", 
    icon: Globe,
    skills: ["React", "Node.js", "TensorFlow", "scikit-learn", "Pandas", "NumPy"],
    color: "text-green-500"
  },
  {
    title: "Database & Visualization",
    icon: Database,
    skills: ["MySQL", "MongoDB", "Matplotlib", "Seaborn", "Tableau", "Power BI"],
    color: "text-purple-500"
  },
  {
    title: "Machine Learning & Data Science",
    icon: Lightbulb,
    skills: ["Data Cleaning", "EDA", "Feature Engineering", "Model Training", "Classification", "Clustering"],
    color: "text-orange-500"
  },
  {
    title: "Tools & Design",
    icon: GitBranch,
    skills: ["Git", "Figma", "Data Visualization", "Hyperparameter Tuning"],
    color: "text-red-500"
  },
  {
    title: "Leadership & Activities",
    icon: Users,
    skills: ["Class Representative", "Club Coordinator", "UI/UX Design", "Team Collaboration"],
    color: "text-indigo-500"
  }
]

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I love tackling complex challenges and finding elegant solutions"
  },
  {
    icon: MessageSquare,
    title: "Team Player", 
    description: "Strong communication skills and experience in collaborative environments"
  },
  {
    icon: Code2,
    title: "Full Stack",
    description: "Comfortable working across the entire technology stack"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-hero-gradient bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The technologies and skills I use to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="bg-card-gradient border-border/50 shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`h-6 w-6 mr-3 ${category.color}`} />
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={highlight.title} className="text-center bg-card-gradient border-border/50 shadow-medium">
              <CardContent className="p-6">
                <highlight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}