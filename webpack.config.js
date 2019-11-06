const path = require('path');

module.exports = {
    entry: {
        home: './src/pages/home.js',
        news: './src/pages/news.js',
        mentors: './src/pages/mentors.js',
        contacts: './src/pages/contacts.js',
        signin: './src/pages/signin.js',
        findmentor: './src/pages/findmentor.js',
        becomementor: './src/pages/becomementor.js'
    },
    output: {
        path: path.join(__dirname, '/assets/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /node-modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};