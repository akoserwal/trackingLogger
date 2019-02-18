var path = require('path');

module.exports = {
    // Change to your "entry-point".
    entry: './src/trackinglogger.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'trackinglogger.bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'trackingLogger'
    },
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
        }],
    }
};