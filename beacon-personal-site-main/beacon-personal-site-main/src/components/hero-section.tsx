import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-bg.jpg"

export function HeroSection() {
  const handleDownloadResume = () => {
    // Create a downloadable PDF link (placeholder)
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add your actual resume PDF to the public folder
    link.download = 'Naga_Yasaswi_Sabbisetti_Resume.pdf'
    link.click()
  }

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Naga Yasaswi Sabbisetti
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Computer Science Student
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Seeking opportunities to apply skills in software development, machine learning, and data analysis. 
              Building impactful solutions through code.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-left">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium hover:shadow-large transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              View Resume
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}