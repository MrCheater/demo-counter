// eslint-disable-next-line import/no-extraneous-dependencies
require('babel-register')({
    babelrc: false,
    presets: ['react'],
    ignore: /node_modules/,
    plugins: [
        'transform-es2015-modules-commonjs',
        'transform-export-extensions',
        'transform-object-rest-spread'
    ],
    retainLines: true
});
