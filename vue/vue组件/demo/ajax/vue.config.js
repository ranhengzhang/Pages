const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/macabaca': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/macabaca': ''},
        // ws: true,
        // changeOrigin: true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo': ''},
        // ws: true,
        // changeOrigin: true
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
