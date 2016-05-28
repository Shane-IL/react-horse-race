module.exports = {
    entry: './js/src/app.js',
    output: {
        filename: './js/build/app.js'
    },
    module: {
        noParse: ['ws'],
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ]
    },
    externals: ['ws']
};
