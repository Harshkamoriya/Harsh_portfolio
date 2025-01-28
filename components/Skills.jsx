import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express.js", icon: "/icons/express.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "RESTful APIs", icon: "/icons/restapi.svg" },
    { name: "GraphQL", icon: "/icons/graphql.svg" },
    { name: "Webpack", icon: "/icons/webpack.svg" },
    { name: "Jest", icon: "/icons/jest.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "NextJs", icon: "/icons/nextjs.svg" },

  ]

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Skills</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 relative mb-2">
                    <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} layout="fill" objectFit="contain" />
                  </div>
                  <Badge variant="secondary" className="text-center">
                    {skill.name}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

