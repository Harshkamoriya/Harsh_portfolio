const express = require("express")
const router = express.Router()
const Project = require("../models/Project")

// Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 })
    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error: error.message })
  }
})

// Add a new project (you might want to add authentication for this route later)
router.post("/", async (req, res) => {
  try {
    const { title, description, image, liveLink, codeLink, technologies } = req.body
    const newProject = new Project({ title, description, image, liveLink, codeLink, technologies })
    await newProject.save()
    res.status(201).json(newProject)
  } catch (error) {
    res.status(400).json({ message: "Error adding project", error: error.message })
  }
})

module.exports = router

