const HtmlWebPackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const backendConfig = {
  target: 'node',
  entry: './server',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  externals: [nodeExternals()],
  resolve: {
    alias: {
      '@routes': path.resolve(__dirname, './server/routes'),
      '@services': path.resolve(__dirname, './server/services'),
      '@middleware': path.resolve(__dirname, './server/middleware'),
    },
  },
};

const frontendConfig = {
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@actions': path.resolve(__dirname, './src/actions'),
    },
  },
};

module.exports = [backendConfig, frontendConfig];
