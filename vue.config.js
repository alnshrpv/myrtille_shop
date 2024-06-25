const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].hash = true;
      return args;
    });
  },

  configureWebpack: {
    output: {
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: 'js/[name].[contenthash:8].js'
    }
  },

  devServer: {
    historyApiFallback: true,
  },

  outputDir: 'dist',

  assetsDir: 'assets',

  filenameHashing: true,

  productionSourceMap: false,
});
