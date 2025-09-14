# VueLand - Vue.js Landing Page with SendGrid Integration

A modern, responsive landing page built with Vue.js, Vite, Tailwind CSS, and integrated with SendGrid for email functionality.

## 🚀 Features

- **Modern Vue.js 3** with Composition API
- **Vue Router** for single-page application navigation
- **Tailwind CSS** for responsive, utility-first styling
- **SendGrid Integration** for contact form email handling
- **Express.js Backend** for API endpoints
- **Professional Email Templates** with HTML formatting
- **Mobile-First Design** with responsive layouts
- **Contact Form** with validation and success feedback

## 📁 Project Structure

```
vueland/
├── src/
│   ├── pages/
│   │   ├── Home.vue          # Landing page
│   │   └── Contact.vue       # Contact page with form
│   ├── router/
│   │   └── index.js          # Vue Router configuration
│   ├── App.vue               # Main app component
│   ├── main.js               # App entry point
│   └── style.css             # Global styles
├── server/
│   ├── index.js              # Express server
│   ├── package.json          # Server dependencies
│   └── config.example.js     # Configuration template
├── dist/                     # Build output
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and dev server
- **Vue Router** - Official router for Vue.js
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Express.js** - Web framework for Node.js
- **SendGrid** - Email delivery service
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development server with auto-reload

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- SendGrid account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd vueland
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Configure SendGrid**
   ```bash
   # Copy the config template
   cp server/config.example.js server/config.js
   
   # Edit server/config.js with your SendGrid API key and email addresses
   ```

4. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev:all
   
   # Or start separately:
   # Terminal 1: Frontend
   npm run dev
   
   # Terminal 2: Backend
   npm run server
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000 (or 3001/3002 if ports are busy)
   - Backend API: http://localhost:3001

## 📧 SendGrid Setup

1. **Create SendGrid Account**
   - Sign up at [sendgrid.com](https://sendgrid.com)
   - Verify your account

2. **Get API Key**
   - Go to Settings > API Keys
   - Create a new API key with "Mail Send" permissions
   - Copy the API key

3. **Configure Email Settings**
   - Update `server/config.js` with your API key
   - Set your FROM_EMAIL and CONTACT_EMAIL addresses
   - Verify your sender domain (recommended)

4. **Test Integration**
   - Submit the contact form
   - Check your email for the contact form submission
   - Check the user's email for the confirmation

## 🎨 Customization

### Styling
- Edit `src/style.css` for global styles
- Modify Tailwind classes in Vue components
- Update `tailwind.config.js` for theme customization

### Content
- Update `src/pages/Home.vue` for landing page content
- Modify `src/pages/Contact.vue` for contact form
- Change navigation links in `src/App.vue`

### Email Templates
- Customize email templates in `server/index.js`
- Update HTML and text versions
- Modify styling and branding

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

3. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Backend Deployment (Railway/Heroku)

1. **Deploy to Railway**
   ```bash
   # Install Railway CLI
   npm install -g @railway/cli
   
   # Login and deploy
   railway login
   railway init
   railway up
   ```

2. **Deploy to Heroku**
   ```bash
   # Install Heroku CLI
   # Create Heroku app
   heroku create your-app-name
   
   # Set environment variables
   heroku config:set SENDGRID_API_KEY=your_api_key
   heroku config:set FROM_EMAIL=your_email
   heroku config:set CONTACT_EMAIL=contact_email
   
   # Deploy
   git push heroku main
   ```

### Environment Variables

Set these environment variables in your deployment platform:

```env
SENDGRID_API_KEY=your_sendgrid_api_key
FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=hello@yourdomain.com
PORT=3001
```

## 📝 API Endpoints

### POST /api/contact
Submit contact form data

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Hello",
  "message": "This is a test message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! We'll get back to you soon."
}
```

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🔧 Development Scripts

```bash
# Frontend development
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Backend development
npm run server       # Start Express server with nodemon
cd server && npm start  # Start Express server

# Full development
npm run dev:all      # Start both frontend and backend
```

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend server is running on port 3001
   - Check that frontend is calling the correct API URL

2. **SendGrid Errors**
   - Verify API key is correct
   - Check SendGrid account status
   - Ensure email addresses are verified

3. **Port Conflicts**
   - Frontend will automatically find available ports
   - Backend runs on port 3001 by default

### Debug Mode

Enable debug logging by setting:
```bash
DEBUG=vueland:*
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the troubleshooting section
- Review the SendGrid documentation

---

Built with ❤️ using Vue.js, Tailwind CSS, and SendGrid