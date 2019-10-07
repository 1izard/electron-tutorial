const path = require('path');

var main = {
    mode: 'development',
    target: 'electron-main',
    entry: path.join(__dirname, 'src', 'main'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],
            loader: 'ts-loader'
        }],
    },
    resolve: {
        extensions: ['.js', '.ts']
    }
};

var renderer = {
    mode: 'development',
    target: 'electron-renderer',
    entry: path.join(__dirname, 'src', 'renderers', 'index'),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist', 'scripts')
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            use: [
                'ts-loader'
            ],
            include: [
                path.resolve(__dirname, 'src')
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ]
        }]
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.css', '.ts', '.tsx']
    }
};

module.exports = [
    main, renderer
];