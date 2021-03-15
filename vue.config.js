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
    }
}
