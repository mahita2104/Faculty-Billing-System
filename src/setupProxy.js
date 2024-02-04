const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/login2.php',
    createProxyMiddleware({
      target: 'http://localhost:3000',  // Change this to your PHP server address
      changeOrigin: true,
    })
  );
};
