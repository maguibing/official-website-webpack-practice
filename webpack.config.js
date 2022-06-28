const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://stackoverflow.com/questions/56567930/typeerror-cleanwebpackplugin-is-not-a-constructor
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',

  // 入口文件
  entry: {
    // shared: 'lodash',
    index: './src/index.js',
    // print: './src/print.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
  },

  // 生产环境不建议使用
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  // optimization 优化 因为在这个示例中单个 HTML 页面有多个入口，所以添加了 optimization.runtimeChunk: 'single' 配置.
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      //   include all types of chunks
      //   chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },

  plugins: [
    // new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
    new HtmlWebpackPlugin({
      title: 'caching Management',
    }),
  ],

  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/,
  //         use: ['style-loader', 'css-loader'],
  //       },
  //       {
  //         test: /\.(png|svg|jpg|gif)$/,
  //         use: ['file-loader'],
  //       },
  //       {
  //         test: /\.(csv|tsv)$/,
  //         use: ['csv-loader'],
  //       },
  //       {
  //         test: /\.xml$/,
  //         use: ['xml-loader'],
  //       },
  //     ],
  //   },
}
