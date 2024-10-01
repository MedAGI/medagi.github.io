const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './docs',
  publicPath: "/",
  devServer: { // 배포하는 서버에 옵션을 추가해야 함.
    historyApiFallback: true // index.html로 fallback
  },
  chainWebpack: (config) => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'assets/papers/'
      });
  }
})
