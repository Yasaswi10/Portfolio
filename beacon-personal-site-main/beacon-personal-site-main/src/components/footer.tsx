import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/Yasaswi10", label: "GitHub" }, // replace with your actual GitHub username if different
    { icon: Linkedin, href: "https://linkedin.com/in/yasaswi-sabbisetti", label: "LinkedIn" }, // update to your LinkedIn URL
    { icon: Mail, href: "mailto:yasaswisabbisetti123@gmail.com", label: "Email" } // replace with your actual email
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Naga Yasaswi Sabbisetti
            </button>
            <p className="text-muted-foreground mt-1">Aspiring Software Engineer | ML & Data Science Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© {currentYear} Naga Yasaswi Sabbisetti. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
