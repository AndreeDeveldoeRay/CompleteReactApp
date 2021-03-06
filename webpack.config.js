/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: webpack.config.js
 * @Last modified by:   andreeray
 * @Last modified time: 2017-06-01T20:41:29+02:00
*/



var webpack = require('webpack')
var path    = require('path')
var envFile = require('node-env-file')

/**
 * To optimize for production run: NODE_ENV=production webpack -p
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {
    console.log("enfFile error:",e)
}

console.log("========== ENVIRONMENT CONFIGURATION =================")
console.log("Environment:",process.env.NODE_ENV)
console.log("API_KEY:",process.env.API_KEY)
console.log("AUTH_DOMAIN:",process.env.AUTH_DOMAIN)
console.log("DATABASE_URL:",process.env.DATABASE_URL)
console.log("STORAGE_BUCKET:",process.env.STORAGE_BUCKET)
console.log("MESSAGING_SENDER_ID:",process.env.MESSAGING_SENDER_ID)
console.log("GITHUB_ACCESS_TOKEN:",process.env.GITHUB_ACCESS_TOKEN)
console.log("======================================================")

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/entry'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
                GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
            }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components/todo'
        ],
        alias: {
            app: 'app',
            routing: 'app/router/routing',
            login: 'app/components/login',
            styles: 'app/styles/app',
            api: 'app/api/index',
            actions: 'app/redux/actions',
            reducers: 'app/redux/reducers',
            store: 'app/redux/store'
        },
        extensions: ['','.js','.jsx','.scss']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool:  process.env.NODE_ENV === 'production' ? undefined :   'cheep-module-eval-source-map'
}
