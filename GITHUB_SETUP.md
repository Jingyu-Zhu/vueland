# GitHub 设置说明

## 🚀 纯 GitHub 解决方案

这个项目现在完全使用 GitHub 生态系统：

- **GitHub Pages**: 前端托管
- **GitHub Actions**: 后端 API 和邮件发送
- **GitHub Secrets**: 安全存储 API 密钥

## 📋 设置步骤

### 1. 配置 GitHub Secrets

在 GitHub 仓库设置中添加以下 Secrets：

1. 进入仓库 → Settings → Secrets and variables → Actions
2. 添加以下 secrets：

```
SENDGRID_API_KEY=你的SendGrid_API密钥
FROM_EMAIL=noreply@yourdomain.com
CONTACT_EMAIL=hello@yourdomain.com
GITHUB_TOKEN=你的GitHub_Personal_Access_Token
```

### 2. 创建 GitHub Personal Access Token

1. 访问 [GitHub Settings](https://github.com/settings/tokens)
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 选择以下权限：
   - `repo` (完整仓库访问)
   - `workflow` (更新 GitHub Actions 工作流)
4. 复制生成的 token 并添加到 Secrets 中

### 3. 配置 SendGrid

1. 注册 [SendGrid](https://sendgrid.com/) 账号
2. 创建 API Key：
   - 进入 Settings → API Keys
   - 点击 "Create API Key"
   - 选择 "Restricted Access"
   - 给予 "Mail Send" 权限
3. 验证发送者邮箱：
   - 进入 Settings → Sender Authentication
   - 验证你的发送者邮箱

### 4. 部署

代码推送到 `main` 分支后会自动：

1. **GitHub Actions** 构建并部署到 GitHub Pages
2. **GitHub Actions** 处理联系表单提交
3. 通过 SendGrid 发送邮件

## 🔧 本地开发

### 启动前端
```bash
npm run dev
```

### 启动后端（可选）
```bash
npm run server
```

### 测试联系表单
```bash
npm run test:contact "John" "Doe" "john@example.com" "Test Subject" "Test message"
```

## 📁 项目结构

```
├── .github/
│   └── workflows/
│       ├── deploy.yml          # GitHub Pages 部署
│       └── api.yml            # 联系表单 API
├── scripts/
│   └── send-contact.js        # GitHub API 调用脚本
├── src/
│   ├── pages/
│   │   └── Contact.vue        # 联系表单页面
│   └── ...
├── server.js                  # 本地开发服务器
└── package.json
```

## 🌐 访问地址

- **GitHub Pages**: `https://jingyu-zhu.github.io/vueland/`
- **本地开发**: `http://localhost:5173/`

## ✨ 功能特性

- ✅ 响应式设计
- ✅ Vue Router 单页应用
- ✅ 联系表单（通过 GitHub Actions）
- ✅ 邮件发送（SendGrid）
- ✅ 自动部署（GitHub Actions）
- ✅ 完全免费（GitHub + SendGrid 免费额度）

## 🐛 故障排除

### 联系表单不工作
1. 检查 GitHub Secrets 是否正确配置
2. 检查 SendGrid API Key 是否有效
3. 查看 GitHub Actions 日志

### 部署失败
1. 检查 GitHub Pages 设置
2. 确保仓库是公开的
3. 检查 Actions 权限

### 邮件发送失败
1. 验证 SendGrid 发送者邮箱
2. 检查 API Key 权限
3. 查看 Actions 日志中的错误信息
