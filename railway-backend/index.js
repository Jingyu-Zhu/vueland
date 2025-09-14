const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware
app.use(cors({
  origin: [
    'https://jingyu-zhu.github.io',
    'https://jingyu-zhu.github.io/vueland',
    'https://railway.com',
    'http://localhost:5173',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'VueLand Backend API',
    version: '1.0.0',
    endpoints: ['/api/health', '/api/contact']
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    const { firstName, lastName, email, subject, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY || !process.env.FROM_EMAIL || !process.env.CONTACT_EMAIL) {
      console.log('SendGrid not configured, returning success without sending email');
      return res.json({
        success: true,
        message: 'Message received! SendGrid not configured, but we got your message.'
      });
    }

    // Prepare email content
    const emailContent = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #1f2937; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #374151;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              This message was sent from the VueLand contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Details:
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}
Time: ${new Date().toLocaleString()}

Message:
${message}

---
This message was sent from the VueLand contact form.
      `
    };

    // Send email to contact email
    await sgMail.send(emailContent);
    console.log('Contact email sent successfully');

    // Send confirmation email to the user
    const confirmationEmail = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Thank you for contacting VueLand!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          
          <p>Hi ${firstName},</p>
          
          <p>Thank you for contacting VueLand. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #ffffff; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to reach out to us directly.</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #eff6ff; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              Best regards,<br>
              The VueLand Team
            </p>
          </div>
        </div>
      `,
      text: `
Thank you for reaching out!

Hi ${firstName},

Thank you for contacting VueLand. We've received your message and will get back to you within 24 hours.

Your Message Summary:
Subject: ${subject}
Message: ${message}

If you have any urgent questions, please don't hesitate to reach out to us directly.

Best regards,
The VueLand Team
      `
    };

    await sgMail.send(confirmationEmail);
    console.log('Confirmation email sent successfully');

    res.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    // Handle SendGrid specific errors
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`SendGrid configured: ${process.env.SENDGRID_API_KEY ? 'Yes' : 'No'}`);
});
