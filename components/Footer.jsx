import { Linkedin, Github, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Logo or Title */}
          <h2 className="text-2xl font-bold text-primary mb-6 lg:mb-0">Your Name</h2>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-border"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm mx-2 transition">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm mx-2 transition">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm mx-2 transition">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

