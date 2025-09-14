// 简单的 Express 服务器，用于本地开发和 GitHub API 调用
const express = require('express');
const cors = require('cors');
const { sendContactForm } = require('./scripts/send-contact');

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 健康检查端点
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 联系表单端点
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // 验证必填字段
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // 检查是否有 GitHub Token（生产环境）
    if (process.env.GITHUB_TOKEN) {
      // 使用 GitHub API 发送邮件
      await sendContactForm({ firstName, lastName, email, subject, message });
    } else {
      // 本地开发环境，只记录日志
      console.log('Contact form submission (local):', {
        firstName, lastName, email, subject, message
      });
    }

    res.json({
      success: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
