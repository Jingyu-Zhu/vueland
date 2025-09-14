# SendGrid Integration Setup

This guide will help you set up SendGrid email integration for the VueLand contact form.

## Prerequisites

1. A SendGrid account (sign up at [sendgrid.com](https://sendgrid.com))
2. Node.js installed on your system

## Step 1: Get Your SendGrid API Key

1. Log in to your SendGrid account
2. Go to **Settings** > **API Keys**
3. Click **Create API Key**
4. Choose **Restricted Access** and give it the following permissions:
   - **Mail Send**: Full Access
5. Copy the generated API key (you won't be able to see it again!)

## Step 2: Configure Your Domain (Optional but Recommended)

1. In SendGrid, go to **Settings** > **Sender Authentication**
2. Click **Authenticate Your Domain**
3. Follow the instructions to verify your domain
4. This allows you to send emails from your own domain instead of SendGrid's

## Step 3: Set Up Environment Variables

### Option A: Using Environment Variables

Create a `.env` file in the root directory:

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=hello@yourdomain.com
PORT=3001
```

### Option B: Using Config File

1. Copy `server/config.example.js` to `server/config.js`
2. Update the values in `server/config.js`:

```javascript
module.exports = {
  SENDGRID_API_KEY: 'your_actual_sendgrid_api_key',
  FROM_EMAIL: 'noreply@yourdomain.com',
  CONTACT_EMAIL: 'hello@yourdomain.com',
  PORT: 3001
};
```

## Step 4: Start the Backend Server

```bash
cd server
npm install
npm run dev
```

The server will start on port 3001.

## Step 5: Start the Frontend

In a new terminal:

```bash
npm run dev
```

The frontend will start on port 3000 (or 3001 if 3000 is busy).

## Step 6: Test the Integration

1. Go to `http://localhost:3000/vue-landing-page/contact`
2. Fill out the contact form
3. Submit the form
4. Check your email for:
   - The contact form submission (sent to CONTACT_EMAIL)
   - The confirmation email (sent to the user)

## Email Templates

The system sends two emails:

1. **Contact Form Email** (to you):
   - Contains all form details
   - Professional HTML formatting
   - Reply-to set to the user's email

2. **Confirmation Email** (to user):
   - Thank you message
   - Summary of their submission
   - Professional branding

## Troubleshooting

### Common Issues

1. **"SendGrid not configured" message**
   - Check that your API key is correct
   - Ensure the config file or environment variables are set

2. **"Failed to send message" error**
   - Check SendGrid account status
   - Verify API key permissions
   - Check server logs for detailed error messages

3. **CORS errors**
   - Make sure the backend server is running on port 3001
   - Check that the frontend is calling the correct API URL

### Testing SendGrid

You can test your SendGrid setup by visiting:
`http://localhost:3001/api/health`

This should return a JSON response confirming the server is running.

## Production Deployment

For production deployment:

1. Set up proper environment variables on your hosting platform
2. Use a verified domain for FROM_EMAIL
3. Consider rate limiting for the contact endpoint
4. Set up monitoring for email delivery

## Security Notes

- Never commit your `.env` file or `config.js` to version control
- Use environment variables in production
- Consider adding rate limiting to prevent spam
- Validate all form inputs on the backend

## Support

If you encounter issues:
1. Check the server console for error messages
2. Verify your SendGrid account status
3. Test with a simple email first
4. Check SendGrid's activity feed for delivery status
