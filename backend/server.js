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
      subject: subject ? `${subject} (from ${name})` : `New Contact Form Submission (from ${name})`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border:1px solid #eee; border-radius:8px; overflow:hidden;">
          <div style="background: #0ea5e9; color: #fff; padding: 20px 30px;">
            <h2 style="margin:0;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 30px; background: #fafbfc;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || '(No subject)'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 5px; margin-top: 5px; white-space: pre-line;">
              ${message}
            </div>
          </div>
          <div style="background: #f1f5f9; color: #64748b; padding: 15px 30px; font-size: 12px;">
            <p style="margin:0;">This message was sent from your portfolio contact form.</p>
          </div>
        </div>
      `,
    });

    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));