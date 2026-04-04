const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },

    mode: 'development',

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: 'public', to: '.', noErrorOnMissing: true }],
        }),
    ],

    devServer: {
        static: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
        port: 3000,
        open: true,
        hot: true,
    },
}
