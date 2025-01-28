"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitMessage("Failed to send message. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-accent-foreground">Contact Me</h2>
        <Card className="max-w-lg mx-auto bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-primary">Get in Touch</CardTitle>
            <CardDescription className="text-muted-foreground">
              Fill out the form below to send me a message
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input text-foreground"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input text-foreground"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-input text-foreground"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitMessage && <p className="text-center text-green-500">{submitMessage}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
