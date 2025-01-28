import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Full Stack Web Developer</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">Turning ideas into reality through code</p>
        <Button asChild variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

