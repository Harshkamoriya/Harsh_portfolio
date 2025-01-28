const express = require("express")
const router = express.Router()
const Contact = require("../models/Contact")

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body
    const newContact = new Contact({ name, email, message })
    await newContact.save()
    res.status(201).json({ message: "Message sent successfully" })
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error: error.message })
  }
})

module.exports = router

