# GitHub-Only Solution with SendGrid Setup Guide

This guide will help you set up a complete GitHub-only solution for sending emails via SendGrid using GitHub Actions.

## 🚀 Overview

This solution uses:
- **Frontend**: GitHub Pages (hosted on GitHub)
- **Backend**: GitHub Actions (serverless functions)
- **Email Service**: SendGrid
- **No external hosting required** (except SendGrid for email)

## 📋 Prerequisites

1. GitHub account
2. SendGrid account
3. Node.js (for local development)

## 🔧 Setup Steps

### Step 1: Configure SendGrid

1. **Create SendGrid Account**:
   - Go to [https://sendgrid.com/](https://sendgrid.com/)
   - Sign up for a free account
   - Verify your email address

2. **Create API Key**:
   - Go to Settings → API Keys
   - Click "Create API Key"
   - Choose "Restricted Access"
   - Give it a name like "VueLand Contact Form"
   - Grant permissions for "Mail Send"
   - Copy the API key (you won't see it again!)

3. **Verify Sender Email**:
   - Go to Settings → Sender Authentication
   - Click "Verify a Single Sender"
   - Add your email address
   - Check your email and click the verification link

### Step 2: Configure GitHub Secrets

1. **Go to Repository Settings**:
   - Visit [https://github.com/Jingyu-Zhu/vueland/settings/secrets/actions](https://github.com/Jingyu-Zhu/vueland/settings/secrets/actions)

2. **Add Required Secrets**:
   - Click "New repository secret"
   - Add these secrets:
     ```
     SENDGRID_API_KEY=your_sendgrid_api_key_here
     FROM_EMAIL=your_verified_email@example.com
     CONTACT_EMAIL=contact@yourdomain.com
     ```

### Step 3: Create GitHub Personal Access Token

1. **Go to GitHub Settings**:
   - Visit [https://github.com/settings/tokens](https://github.com/settings/tokens)
   - Click "Generate new token" → "Generate new token (classic)"

2. **Configure Token**:
   - Give it a name like "VueLand Contact Form"
   - Select scopes:
     - `repo` (Full control of private repositories)
     - `workflow` (Update GitHub Action workflows)
   - Click "Generate token"
   - Copy the token (you won't see it again!)

3. **Add Token to Repository Secrets**:
   - Go back to [https://github.com/Jingyu-Zhu/vueland/settings/secrets/actions](https://github.com/Jingyu-Zhu/vueland/settings/secrets/actions)
   - Add secret:
     ```
     PAT_TOKEN=your_github_personal_access_token_here
     ```

### Step 4: Update Frontend Environment

1. **Create .env file** (for local development):
   ```bash
   # Copy from env.example
   cp env.example .env
   ```

2. **Edit .env file**:
   ```
   VITE_PAT_TOKEN=your_github_personal_access_token_here
   VITE_API_URL=http://localhost:3001
   ```

### Step 5: Deploy to GitHub Pages

1. **Push Changes**:
   ```bash
   git add .
   git commit -m "Add GitHub-only SendGrid integration"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to [https://github.com/Jingyu-Zhu/vueland/settings/pages](https://github.com/Jingyu-Zhu/vueland/settings/pages)
   - Source: "Deploy from a branch"
   - Branch: "main" / "/ (root)"
   - Click "Save"

3. **Wait for Deployment**:
   - Go to [https://github.com/Jingyu-Zhu/vueland/actions](https://github.com/Jingyu-Zhu/vueland/actions)
   - Wait for "Deploy to GitHub Pages" to complete

## 🧪 Testing

### Test Contact Form

1. **Visit Your Site**:
   - Go to [https://jingyu-zhu.github.io/vueland/contact](https://jingyu-zhu.github.io/vueland/contact)

2. **Fill Out Form**:
   - Enter your name, email, subject, and message
   - Click "Send Message"

3. **Check Email**:
   - Check the email address you set as `CONTACT_EMAIL`
   - You should receive the contact form submission

4. **Check GitHub Actions**:
   - Go to [https://github.com/Jingyu-Zhu/vueland/actions](https://github.com/Jingyu-Zhu/vueland/actions)
   - Look for "Send Contact Email" workflow runs

## 🔍 Troubleshooting

### Common Issues

1. **"GitHub authentication failed"**:
   - Check if `PAT_TOKEN` is set correctly
   - Ensure the token has `repo` and `workflow` permissions

2. **"Missing required environment variables"**:
   - Check if all SendGrid secrets are set in GitHub
   - Ensure `SENDGRID_API_KEY`, `FROM_EMAIL`, `CONTACT_EMAIL` are configured

3. **"Failed to send message"**:
   - Check SendGrid API key is valid
   - Ensure sender email is verified in SendGrid
   - Check GitHub Actions logs for detailed error messages

4. **Form submits but no email received**:
   - Check spam folder
   - Verify `CONTACT_EMAIL` is correct
   - Check SendGrid activity logs

### Debug Steps

1. **Check GitHub Actions Logs**:
   - Go to [https://github.com/Jingyu-Zhu/vueland/actions](https://github.com/Jingyu-Zhu/vueland/actions)
   - Click on the latest "Send Contact Email" run
   - Check the logs for error messages

2. **Check Browser Console**:
   - Open browser developer tools
   - Go to Console tab
   - Submit the form and check for error messages

3. **Check SendGrid Logs**:
   - Go to SendGrid dashboard
   - Check Activity → Email Activity
   - Look for your test emails

## 📁 File Structure

```
vueland/
├── .github/
│   └── workflows/
│       ├── contact-email.yml      # Email sending workflow
│       └── pages-deploy.yml       # GitHub Pages deployment
├── src/
│   └── pages/
│       └── Contact.vue            # Contact form component
├── railway-backend/               # Not used in this solution
├── .env.example                   # Environment variables template
└── README.md
```

## 🎯 How It Works

1. **User submits contact form** on GitHub Pages
2. **Frontend calls GitHub API** to trigger `repository_dispatch` event
3. **GitHub Actions workflow** is triggered automatically
4. **Workflow sends email** via SendGrid using stored secrets
5. **User receives confirmation** and you get the email

## 💡 Benefits

- ✅ **100% GitHub-based** - No external hosting needed
- ✅ **Free** - GitHub Pages and Actions are free for public repos
- ✅ **Secure** - Secrets are encrypted and only accessible to workflows
- ✅ **Reliable** - GitHub's infrastructure is highly available
- ✅ **Scalable** - Can handle high traffic without issues

## 🔄 Updates

To update the solution:

1. Make changes to the code
2. Push to GitHub
3. GitHub Actions automatically deploys the changes
4. No manual deployment needed!

## 📞 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check SendGrid dashboard
4. Open an issue on GitHub

---

**Happy coding! 🚀**
