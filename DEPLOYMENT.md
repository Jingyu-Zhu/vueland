# Deployment Guide

This guide will help you deploy VueLand to production with both frontend and backend services.

## 🚀 Quick Deployment Options

### Option 1: Vercel + Railway (Recommended)

**Frontend (Vercel):**
- ✅ Free tier available
- ✅ Automatic deployments from GitHub
- ✅ Global CDN
- ✅ Easy custom domain setup

**Backend (Railway):**
- ✅ Free tier available
- ✅ Easy environment variable setup
- ✅ Automatic deployments from GitHub
- ✅ Built-in health checks

### Option 2: Netlify + Heroku

**Frontend (Netlify):**
- ✅ Free tier available
- ✅ Great for static sites
- ✅ Form handling built-in

**Backend (Heroku):**
- ✅ Popular platform
- ✅ Easy deployment
- ⚠️ Free tier discontinued

## 📋 Pre-Deployment Checklist

- [ ] SendGrid account created
- [ ] SendGrid API key obtained
- [ ] Domain verified in SendGrid (optional but recommended)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub

## 🎯 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `vueland` or your preferred name
3. Don't initialize with README (we already have one)
4. Copy the repository URL

### Step 2: Push Code to GitHub

```bash
# Add remote origin (replace with your GitHub URL)
git remote add origin https://github.com/yourusername/vueland.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy Backend to Railway

1. **Go to [Railway](https://railway.app)**
2. **Sign up/Login** with GitHub
3. **Create New Project** → "Deploy from GitHub repo"
4. **Select your repository** and choose the `server` folder
5. **Set Environment Variables:**
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=noreply@yourdomain.com
   CONTACT_EMAIL=hello@yourdomain.com
   PORT=3001
   ```
6. **Deploy** - Railway will automatically build and deploy
7. **Copy the deployment URL** (e.g., `https://your-app.railway.app`)

### Step 4: Deploy Frontend to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Sign up/Login** with GitHub
3. **Import Project** → Select your repository
4. **Configure Build Settings:**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **Set Environment Variables:**
   ```
   VITE_API_URL=https://your-app.railway.app
   ```
6. **Deploy** - Vercel will build and deploy automatically

### Step 5: Test Your Deployment

1. **Visit your Vercel URL** (e.g., `https://vueland.vercel.app`)
2. **Navigate to the Contact page**
3. **Submit a test message**
4. **Check your email** for the contact form submission
5. **Check the user's email** for the confirmation

## 🔧 Alternative Deployment Methods

### Deploy Backend to Heroku

1. **Install Heroku CLI**
2. **Login to Heroku**
   ```bash
   heroku login
   ```
3. **Create Heroku App**
   ```bash
   heroku create your-app-name
   ```
4. **Set Environment Variables**
   ```bash
   heroku config:set SENDGRID_API_KEY=your_api_key
   heroku config:set FROM_EMAIL=your_email
   heroku config:set CONTACT_EMAIL=contact_email
   ```
5. **Deploy**
   ```bash
   git subtree push --prefix=server heroku main
   ```

### Deploy Frontend to Netlify

1. **Go to [Netlify](https://netlify.com)**
2. **Connect GitHub** and select your repository
3. **Set Build Settings:**
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. **Set Environment Variables:**
   ```
   VITE_API_URL=https://your-backend-url.herokuapp.com
   ```
5. **Deploy**

## 🌐 Custom Domain Setup

### Vercel Custom Domain

1. **Go to your Vercel project dashboard**
2. **Settings** → **Domains**
3. **Add your domain** (e.g., `vueland.com`)
4. **Follow DNS configuration instructions**
5. **SSL certificate** will be automatically provisioned

### Railway Custom Domain

1. **Go to your Railway project**
2. **Settings** → **Domains**
3. **Add custom domain**
4. **Configure DNS** as instructed
5. **SSL certificate** will be automatically provisioned

## 🔒 Security Considerations

### Environment Variables
- ✅ Never commit `.env` files
- ✅ Use platform-specific environment variable settings
- ✅ Rotate API keys regularly
- ✅ Use different keys for development and production

### SendGrid Security
- ✅ Use restricted API keys with minimal permissions
- ✅ Verify your sender domain
- ✅ Set up domain authentication
- ✅ Monitor email activity

### CORS Configuration
- ✅ Update CORS settings for production domains
- ✅ Remove localhost from allowed origins
- ✅ Use HTTPS in production

## 📊 Monitoring and Maintenance

### Health Checks
- **Backend**: `https://your-backend.railway.app/api/health`
- **Frontend**: Check Vercel deployment status

### Logs
- **Railway**: View logs in the Railway dashboard
- **Vercel**: View function logs in Vercel dashboard
- **SendGrid**: Monitor email delivery in SendGrid dashboard

### Updates
- **Automatic**: Both platforms support automatic deployments from GitHub
- **Manual**: Push changes to GitHub to trigger new deployments

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check that frontend is calling the correct backend URL
   - Verify backend CORS configuration

2. **SendGrid Errors**
   - Verify API key is correct
   - Check SendGrid account status
   - Ensure email addresses are verified

3. **Build Failures**
   - Check build logs in deployment platform
   - Verify all dependencies are installed
   - Check for TypeScript/JavaScript errors

4. **Environment Variables**
   - Verify all required variables are set
   - Check variable names and values
   - Restart deployment after adding variables

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=vueland:*
```

## 📈 Performance Optimization

### Frontend
- ✅ Enable Vercel's automatic optimizations
- ✅ Use Vercel's image optimization
- ✅ Enable compression and caching

### Backend
- ✅ Use Railway's automatic scaling
- ✅ Monitor memory and CPU usage
- ✅ Set up proper logging

## 💰 Cost Estimation

### Free Tiers
- **Vercel**: 100GB bandwidth, unlimited static sites
- **Railway**: $5 credit monthly, 500 hours runtime
- **SendGrid**: 100 emails/day free

### Paid Plans
- **Vercel Pro**: $20/month for team features
- **Railway**: Pay-as-you-go after free tier
- **SendGrid**: $19.95/month for 50,000 emails

## 🎉 Success!

Once deployed, you'll have:
- ✅ A live, professional landing page
- ✅ Working contact form with email integration
- ✅ Automatic deployments from GitHub
- ✅ Professional email templates
- ✅ Mobile-responsive design
- ✅ Fast global CDN delivery

Your VueLand application is now live and ready for users! 🚀
