// API 配置文件
const config = {
  development: {
    railwayUrl: 'http://localhost:3001'
  },
  production: {
    railwayUrl: import.meta.env.VITE_RAILWAY_URL || 'https://vueland-backend-production.up.railway.app'
  }
}

// 根据环境选择配置
const isProduction = import.meta.env.PROD
const currentConfig = isProduction ? config.production : config.development

export default currentConfig
