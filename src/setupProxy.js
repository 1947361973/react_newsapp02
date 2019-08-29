const proxy = require('http-proxy-middleware'); //需要安装中间件

module.exports = function(app) {
  app.use(
    proxy("/api", {
      target: 'http://localhost:3000',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/mock", {
      target: 'http://localhost:3333',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/v2", {
      target: "https://douban.uieee.com",
      changeOrigin: true
    })
  );

};