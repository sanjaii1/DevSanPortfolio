require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL if different
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
};
app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  // Configure your transporter (use your real email and app password or SMTP config)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: subject || 'New Contact Form Submission',
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b><br/>${message}</p>`,
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));