// GitHub API 调用脚本
// 这个脚本会通过 GitHub API 触发 repository_dispatch 事件

const https = require('https');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'Jingyu-Zhu';
const REPO_NAME = 'vueland';

function sendContactForm(formData) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      event_type: 'contact-form',
      client_payload: formData
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/dispatches`,
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'User-Agent': 'VueLand-Contact-Form',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve({ success: true, data });
        } else {
          reject(new Error(`GitHub API error: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// 如果直接运行此脚本
if (require.main === module) {
  const formData = {
    firstName: process.argv[2] || 'Test',
    lastName: process.argv[3] || 'User',
    email: process.argv[4] || 'test@example.com',
    subject: process.argv[5] || 'Test Subject',
    message: process.argv[6] || 'Test message'
  };

  sendContactForm(formData)
    .then(result => {
      console.log('Contact form sent successfully:', result);
    })
    .catch(error => {
      console.error('Error sending contact form:', error);
      process.exit(1);
    });
}

module.exports = { sendContactForm };
