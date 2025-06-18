// api-caller.js
const axios = require('axios');

async function callApi() {
  try {
    const response = await axios.post(
      'https://your-api-endpoint.com/data', // 替换为你的API地址
      { key: 'value' }, // POST请求体数据
      {
        headers: {
          'Authorization': 'Bearer YOUR_TOKEN', // 替换你的认证token
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('✅ API调用成功! 状态码:', response.status);
    console.log('响应数据:', response.data);
  } catch (error) {
    console.error('❌ API调用失败:', error.message);
    // 非零退出码会标记Action为失败
    process.exit(1); 
  }
}

callApi();
