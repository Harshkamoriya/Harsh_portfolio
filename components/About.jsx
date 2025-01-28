import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">About Me</h2>
        <Card className="overflow-hidden bg-card text-card-foreground">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-[400px] md:h-auto">
                <Image
                  src="/icons/harsh.jpg"
                  alt="Your Name"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Hello, I'm Harsh Kamoriya</h3>
                <p className="text-muted-foreground mb-4">
                  I'm a passionate full-stack web developer with expertise in the MERN stack.I specialize in creating efficient, scalable, and user-friendly web applications that
                  solve real-world problems.
                </p>
                <p className="text-muted-foreground mb-4">
                  My strong foundation in both frontend and backend technologies allows me to bring ideas to life by
                  crafting robust server-side applications and intuitive user interfaces.
                </p>
                <p className="text-muted-foreground mb-6">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through tech blogs and community events.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Problem Solver</Badge>
                  <Badge variant="secondary">Team Player</Badge>
                  <Badge variant="secondary">Continuous Learner</Badge>
                  <Badge variant="secondary">Tech Enthusiast</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

