import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "B.Tech in Computer Science",
    company: "Shri Vishnu Engineering College for Women",
    location: "Bhimavaram, Andhra Pradesh",
    period: "2022 - 2026 (Expected)",
    description: "Currently pursuing Bachelor of Technology in Computer Science with a strong academic record. GPA: 8.89/10. Focus on software development, machine learning, and data analysis.",
    technologies: ["Data Structures", "Algorithms", "Machine Learning", "Software Engineering"],
    current: true
  },
  {
    type: "education",
    title: "Intermediate (Class XII)",
    company: "VidyaVikas Junior College",
    location: "Jangareddygudem, Andhra Pradesh",
    period: "2020 - 2022",
    description: "Completed intermediate education with 93% marks, demonstrating strong academic foundation in science and mathematics.",
    technologies: ["Mathematics", "Physics", "Chemistry"],
    current: false
  },
  {
    type: "work",
    title: "Class Representative",
    company: "Shri Vishnu Engineering College for Women",
    location: "Bhimavaram, Andhra Pradesh",
    period: "2022 - Present",
    description: "Representing class interests, facilitating communication between students and faculty, organizing academic events and coordinating class activities.",
    technologies: ["Leadership", "Communication", "Event Management"],
    current: true
  },
  {
    type: "work",
    title: "Coordinator, Sahaya Club",
    company: "Shri Vishnu Engineering College for Women",
    location: "Bhimavaram, Andhra Pradesh",
    period: "2023 - Present",
    description: "Coordinating social service activities and community outreach programs, organizing volunteering events and managing club operations.",
    technologies: ["Project Management", "Community Service", "Team Coordination"],
    current: true
  },
  {
    type: "work",
    title: "GDG UI/UX Team Member",
    company: "Google Developer Groups",
    location: "Remote",
    period: "2023 - Present",
    description: "Contributing to UI/UX design projects, participating in design workshops, and collaborating with developers on user-centered design solutions.",
    technologies: ["Figma", "UI/UX Design", "Design Thinking", "Prototyping"],
    current: true
  }
]

const achievements = [
  {
    title: "NPTEL - Data Analytics with Python",
    issuer: "NPTEL",
    date: "2024",
    credentialId: "NPTEL-DA-PY-2024"
  },
  {
    title: "Oracle Java Certification",
    issuer: "Oracle",
    date: "2024",
    credentialId: "ORACLE-JAVA-2024"
  },
  {
    title: "Algorithms: Design and Analysis",
    issuer: "Stanford University",
    date: "2024",
    credentialId: "STANFORD-ALGO-2024"
  },
  {
    title: "Data Science with Python",
    issuer: "Harvard University",
    date: "2024",
    credentialId: "HARVARD-DS-2024"
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Great Learning",
    date: "2024",
    credentialId: "GL-ML-2024"
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="bg-hero-gradient bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through education and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-medium"></div>
                
                <div className="ml-20">
                  <Card className="bg-card-gradient border-border/50 shadow-medium hover:shadow-large transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="flex items-start space-x-3">
                          {experience.type === 'work' ? (
                            <Briefcase className="w-5 h-5 text-primary mt-1" />
                          ) : (
                            <GraduationCap className="w-5 h-5 text-accent mt-1" />
                          )}
                          <div>
                            <CardTitle className="text-lg">{experience.title}</CardTitle>
                            <p className="text-primary font-semibold">{experience.company}</p>
                          </div>
                        </div>
                        {experience.current && (
                          <Badge className="bg-accent text-accent-foreground">Current</Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Achievements & <span className="bg-hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center bg-card-gradient border-border/50 shadow-medium">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.issuer}</p>
                  <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  <Badge variant="outline" className="mt-3 text-xs">
                    {achievement.credentialId}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}