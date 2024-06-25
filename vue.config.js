const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  chainWebpack: config => {
    // Убедитесь, что devtool соответствует требованиям Webpack 5
    config.devtool('source-map');
  },

  transpileDependencies: true,

  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    hot: true,
    open: true
  },

  pluginOptions: {
    vuetify: {
      // настройки Vuetify, если необходимо
    }
  }
});
