module.exports = {
  assetsDir: 'out',
  indexPath: 'index.html',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  devServer: {},
  runtimeCompiler: true,

  configureWebpack: {
    module: {
      rules: [
        // {
        //     test: /\.css$/,
        //     use: [
        //         'postcss-loader'
        //     ]
        // },
        {
          test: /\.pug$/,
          oneOf: [
            {
              resourceQuery: /^\?vue/,
              use: ['pug-plain-loader']
            },
            {
              use: ['raw-loader', 'pug-plain-loader']
            }
          ]
        }
      ]
    }
  },

  chainWebpack: config => {
    config.plugin('html').tap(args => {
      // change the title in index.html: htmlWebpackPlugin.options.title
      args[0].title = 'Complete D&D'
      return args
    })
  },

  productionSourceMap: false,

  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/settings.scss";'
      },
      sass: {
        data: '@import "@/scss/settings.scss";'
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
