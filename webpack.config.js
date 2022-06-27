const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://stackoverflow.com/questions/56567930/typeerror-cleanwebpackplugin-is-not-a-constructor
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',

  // 入口文件
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },

  devtool: 'inline-source-map',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    // new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] }),
    new HtmlWebpackPlugin({
      title: 'Active Management',
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
