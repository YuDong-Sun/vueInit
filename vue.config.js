const ENV = process.env.NODE_ENV,
  isDevelopment = ENV === 'development'; //开发环境

module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: false,
  lintOnSave: isDevelopment,
  transpileDependencies: [],
  devServer: (isDevelopment && require('./config/devServer')) || {},
  configureWebpack: {
    plugins: (isDevelopment && []) || require('./config/uglifyjs')
  }
};
