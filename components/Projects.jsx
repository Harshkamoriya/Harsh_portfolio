"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      _id: "1",
      title: "Salon Appointment Website",
      description: "A web application for booking salon appointments with payment integration.",
      image: "/icons/salonEase.png",
      liveLink: "https://salon-appointment.example.com",
      codeLink: "https://github.com/username/salon-appointment",
      technologies: ["React", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      _id: "2",
      title: "Employee Management System",
      description: "A system for managing tasks and tracking employee performance.",
      image: "/icons/ems.jpg",
      liveLink: "https://employee-management.example.com",
      codeLink: "https://github.com/username/employee-management",
      technologies: ["React", "Node.js", "MongoDB", "Bootstrap"],
    },
    {
      _id: "3",
      title: "Weather Predicting App",
      description: "A simple app to get accurate weather forecasts for any location.",
      image: "/icons/weather.jpg",
      liveLink: "https://weather-predicting.example.com",
      codeLink: "https://github.com/username/weather-app",
      technologies: ["React", "OpenWeather API", "CSS"],
    },
    {
      _id: "4",
      title: "To-Do List",
      description: "A lightweight and intuitive to-do list app for task management.",
      image: "/icons/todo.jpg",
      liveLink: "https://todo-list.example.com",
      codeLink: "https://github.com/username/todo-list",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      _id: "5",
      title: "News Blog Website",
      description: "A platform for publishing and reading blogs with categories and tags.",
      image: "/icons/news.jpg",
      liveLink: "https://news-blog.example.com",
      codeLink: "https://github.com/username/news-blog",
      technologies: ["Next.js", "Tailwind CSS", "Markdown"],
    },
    {
      _id: "6",
      title: "Real-Time Chat Application",
      description: "A chat application with real-time messaging using WebSockets.",
      image: "/icons/chat.jpg",
      liveLink: "https://chat-app.example.com",
      codeLink: "https://github.com/username/chat-app",
      technologies: ["React", "Socket.IO", "Node.js", "CSS"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project._id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transform transition-all"
            >
              <Card className="p-4 text-sm shadow-lg hover:shadow-xl">
                <CardHeader>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm mt-2">{project.description}</CardDescription>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className=" text-xs px-2 py-1 rounded-full font-medium text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between mt-4">
                  <Button asChild variant="outline" className="px-2 py-1 text-xs">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild className="px-2 py-1 text-xs">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
