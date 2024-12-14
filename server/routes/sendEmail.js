const express = require('express');
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact'); // Contact model
const router = express.Router();

router.post('/sendEmail', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  const contact = new Contact({ name, email, message });

  try {
    await transporter.sendMail(mailOptions);  // Send email
    await contact.save();  // Save contact in DB
    res.status(200).json({ message: 'Message sent and saved!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to send or save.' });
  }
});

module.exports = router;
