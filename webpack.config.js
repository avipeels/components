const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  entry: './server.js',
  mode: 'development',
  target: 'node',
  externals: {
    express: 'express'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new NodePolyfillPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
        include: [path.resolve(__dirname, '../'), path.resolve(__dirname, '../node_modules/')]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ],
        include: [path.resolve(__dirname, '../'), path.resolve(__dirname, '../node_modules/')]
      },
      {
        test: /\.(stories|story)\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            // may or may not need this line depending on your app's setup
            options: {
              plugins: ['@babel/plugin-transform-react-jsx']
            }
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})]
            }
          }
        ]
      },
      {
        test: /\.(stories|story)\.[j]sx?$/,
        loader: require.resolve('@storybook/source-loader'),
        exclude: [/node_modules/],
        enforce: 'pre'
      }
    ]
  }
};
