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
                {
                    test: /\.css$/,
                    use: [
                        'postcss-loader'
                    ]
                }
            ]
        }
    },

    productionSourceMap: false
}
