# Railway 后端部署指南

## 🚀 使用 Railway + SendGrid 实现真实邮件发送

### 架构概览
- **前端**: GitHub Pages (Vue.js)
- **后端**: Railway (Node.js + Express)
- **邮件**: SendGrid

## 📋 部署步骤

### 第一步：准备 SendGrid

1. **注册 SendGrid 账号**：
   - 访问 [https://sendgrid.com/](https://sendgrid.com/)
   - 点击 "Start for Free" 注册
   - 免费账号每月可发送 100 封邮件

2. **创建 API Key**：
   - 进入 SendGrid 控制台
   - Settings → API Keys → Create API Key
   - 选择 "Restricted Access"
   - 给予 "Mail Send" 权限
   - **复制 API Key（只显示一次！）**

3. **验证发送者邮箱**：
   - Settings → Sender Authentication
   - 选择 "Single Sender Verification"
   - 添加你的邮箱（如：noreply@yourdomain.com）
   - 检查邮箱并验证

### 第二步：部署到 Railway

1. **访问 Railway**：
   - 访问 [https://railway.app/](https://railway.app/)
   - 使用 GitHub 账号登录

2. **创建新项目**：
   - 点击 "New Project"
   - 选择 "Deploy from GitHub repo"
   - 选择 `vueland` 仓库
   - 选择 `railway-backend` 文件夹

3. **配置环境变量**：
   在 Railway 项目设置中添加：
   ```
   SENDGRID_API_KEY=你的SendGrid_API密钥
   FROM_EMAIL=你验证的发送者邮箱
   CONTACT_EMAIL=接收联系表单的邮箱
   NODE_ENV=production
   ```

4. **部署**：
   - Railway 会自动检测到 `package.json`
   - 运行 `npm install` 和 `npm start`
   - 等待部署完成

### 第三步：获取 Railway URL

1. **查看部署状态**：
   - 在 Railway 项目中查看部署日志
   - 确保没有错误

2. **获取 URL**：
   - Railway 会提供一个 URL，类似：
   - `https://vueland-backend-production.up.railway.app`

3. **测试 API**：
   - 访问 `https://your-railway-url.railway.app/api/health`
   - 应该返回 JSON 响应

### 第四步：更新前端配置

1. **更新环境变量**（可选）：
   - 在 `env.example` 中更新 `VITE_RAILWAY_URL`
   - 或者让前端使用默认 URL

2. **重新部署前端**：
   ```bash
   git add .
   git commit -m "Add Railway backend integration"
   git push
   ```

## 🧪 测试邮件发送

1. **访问网站**：
   - [https://jingyu-zhu.github.io/vueland/contact](https://jingyu-zhu.github.io/vueland/contact)

2. **填写联系表单**：
   - 填写所有字段
   - 点击 "Send Message"

3. **检查邮件**：
   - 检查你设置的 `CONTACT_EMAIL` 邮箱
   - 检查用户填写的邮箱（确认邮件）

## 🔧 故障排除

### 如果邮件没有发送：

1. **检查 Railway 日志**：
   - 在 Railway 项目中查看部署日志
   - 查看是否有错误信息

2. **检查环境变量**：
   - 确保所有环境变量都正确设置
   - 确保 SendGrid API Key 有效

3. **检查 SendGrid 日志**：
   - 进入 SendGrid 控制台
   - Activity → Email Activity
   - 查看邮件发送状态

### 如果 API 调用失败：

1. **检查 CORS 设置**：
   - 确保 Railway 后端允许 GitHub Pages 域名

2. **检查网络连接**：
   - 确保 Railway 服务正常运行
   - 检查防火墙设置

## ✨ 功能特性

- ✅ **真实邮件发送**：通过 SendGrid
- ✅ **自动确认邮件**：发送给用户
- ✅ **错误处理**：优雅降级
- ✅ **CORS 支持**：支持跨域请求
- ✅ **健康检查**：监控服务状态

## 📊 监控和维护

1. **Railway 监控**：
   - 查看 Railway 仪表板
   - 监控 CPU 和内存使用

2. **SendGrid 监控**：
   - 查看邮件发送统计
   - 监控 API 使用量

3. **日志查看**：
   - Railway 提供实时日志
   - 可以查看 API 请求和错误

## 💰 成本

- **Railway**: 免费额度（每月 $5 信用）
- **SendGrid**: 免费额度（每月 100 封邮件）
- **GitHub Pages**: 完全免费

总计：**完全免费**（在免费额度内）

## 🎯 下一步

1. 部署 Railway 后端
2. 配置 SendGrid
3. 测试邮件发送
4. 监控和维护

恭喜！你现在有一个完整的全栈应用了！🎉
