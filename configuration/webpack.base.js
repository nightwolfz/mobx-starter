const path = require('path')
const ExtractCSS = require('extract-text-webpack-plugin')
const sources = path.join(__dirname, '../src')

export default {
    entry: {},
    node: {
        global: true,
        fs: 'empty'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: sources,
                babelrc: false,
                query: {
                    cacheDirectory: true,
                    presets: [],
                    plugins: [
                        "add-module-exports",
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "transform-es2015-arrow-functions",
                        "transform-es2015-block-scoping",
                        "transform-es2015-block-scoped-functions",
                        "transform-es2015-classes",
                        "transform-es2015-computed-properties",
                        "transform-es2015-destructuring",
                        "transform-es2015-literals",
                        "transform-es2015-template-literals",
                        "transform-es2015-parameters",
                        "transform-es2015-shorthand-properties",
                        "transform-es2015-spread",
                        "transform-async-to-generator",
                        "transform-react-jsx"
                    ]
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include: sources
            },
            {
                test: /\.(jpg|png|ttf|svg|woff2?)(\?.+)?$/,
                loader: 'file-loader',
                include: path.join(sources, 'assets')
            },
            {
                test: /\.(css|scss)(\?.+)?$/,
                loader: ExtractCSS.extract(['css?sourceMap', 'sass?sourceMap']),
                include: path.join(sources, 'assets')
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../build')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractCSS('bundle.css', { allChunks: true })
    ]
};
