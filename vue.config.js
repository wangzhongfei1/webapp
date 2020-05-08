module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        //   ws: true,
        changeOrigin: true
      },
      '/gateway': {
        target: 'https://m.maizuo.com',
        //   ws: true,
        changeOrigin: true
      }
    }
  }
}
