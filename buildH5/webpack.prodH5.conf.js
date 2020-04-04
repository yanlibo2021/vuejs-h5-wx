// 'use strict'
// const path = require('path')
// const utils = require('./utils')
// const webpack = require('webpack')
// const config = require('../configH5')
// const merge = require('webpack-merge')
// const baseWebpackConfig = require('./webpack.baseH5.conf')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// const env = process.env.NODE_ENV === 'testing'
//   ? require('../configH5/test.env')
//   : require('../configH5/prod.env')

// const webpackConfig = merge(baseWebpackConfig, {
//   module: {
//     rules: utils.styleLoaders({
//       sourceMap: config.build.productionSourceMap,
//       extract: false,
//       usePostCSS: false
//     })
//   },
//   devtool: config.build.productionSourceMap ? config.build.devtool : false,
//   output: {
//     path: config.build.assetsRoot,
//     filename: utils.assetsPath('js/[name].js?v=[chunkhash]'),
//     chunkFilename: utils.assetsPath('js/[id].js?v=[chunkhash]')
//   },
//   plugins: [
//     // http://vuejs.github.io/vue-loader/en/workflow/production.html
//     new webpack.DefinePlugin({
//       'process.env': env
//     }),
//     new UglifyJsPlugin({
//       uglifyOptions: {
//         compress: {
//           warnings: false
//         }
//       },
//       sourceMap: true,
//       parallel: true
//     }),
//     // extract css into its own file
//     // webpack3
//     // new ExtractTextPlugin({
//     //   filename: utils.assetsPath('css/[name].css?v=[contenthash]'),
//     //   // Setting the following option to `false` will not extract CSS from codesplit chunks.
//     //   // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
//     //   // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
//     //   // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
//     //   allChunks: true,
//     // }),
//     // webpack4
//     new MiniCssExtractPlugin({ // css打包配置
//       filename: utils.assetsPath('css/[name].css?v=[contenthash]'),
//       chunkFilename: 'static/css/[id].[contenthash].css'
//     }),
//     // Compress extracted CSS. We are using this plugin so that possible
//     // duplicated CSS from different components can be deduped.
//     new OptimizeCSSPlugin({
//       cssProcessorOptions: config.build.productionSourceMap
//         ? { safe: true, map: { inline: false } }
//         : { safe: true }
//     }),
//     // generate dist index.html with correct asset hash for caching.
//     // you can customize output by editing /index.html
//     // see https://github.com/ampedandwired/html-webpack-plugin
//     new HtmlWebpackPlugin({
//       filename: config.build.index,
//       template: 'index.html',
//       inject: true,
//       minify: false,
//       // minify: {
//       //   removeComments: true,
//       //   collapseWhitespace: true,
//       //   removeAttributeQuotes: true
//       //   // more options:
//       //   // https://github.com/kangax/html-minifier#options-quick-reference
//       // },
//       // necessary to consistently work with multiple chunks via CommonsChunkPlugin
//       chunksSortMode: 'dependency'
//     }),
//     // keep module.id stable when vendor modules does not change
//     new webpack.HashedModuleIdsPlugin(),
//     // enable scope hoisting
//     new webpack.optimize.ModuleConcatenationPlugin(),
//     // split vendor js into its own file
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: 'vendor',
//     //   minChunks(module) {
//     //     // any required modules inside node_modules are extracted to vendor
//     //     return (
//     //       module.resource &&
//     //       /\.js$/.test(module.resource) &&
//     //       module.resource.indexOf(
//     //         path.join(__dirname, '../node_modules')
//     //       ) === 0
//     //     )
//     //   }
//     // }),
//     // // extract webpack runtime and module manifest to its own file in order to
//     // // prevent vendor hash from being updated whenever app bundle is updated
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: 'manifest',
//     //   minChunks: Infinity
//     // }),
//     // // This instance extracts shared chunks from code splitted chunks and bundles them
//     // // in a separate chunk, similar to the vendor chunk
//     // // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: 'app',
//     //   async: 'vendor-async',
//     //   children: true,
//     //   minChunks: 3
//     // }),
//     // copy custom static assets
//     new CopyWebpackPlugin([
//       {
//         from: path.resolve(__dirname, '../static'),
//         to: config.build.assetsSubDirectory,
//         ignore: ['.*']
//       }
//     ])
//   ],
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         vendors: {
//           name: 'vendors',
//           chunks: 'all',
//           reuseExistingChunk: true,
//           priority: 1,
//           enforce: true,
//           test(module, chunks) {
//             return (
//               module.resource &&
//               /\.js$/.test(module.resource) &&
//               module.resource.indexOf(
//                 path.join(__dirname, '../node_modules')
//               ) === 0
//             )
//           }
//         },
//         manifest: {
//           name: 'manifest',
//           reuseExistingChunk: true,
//           priority: 1,
//           enforce: true,
//         },
//         app: {
//           name: 'app',
//           reuseExistingChunk: true,
//           priority: 1,
//           enforce: true,
//         }
//       }
//     }
//   }
// })

// if (config.build.productionGzip) {
//   const CompressionWebpackPlugin = require('compression-webpack-plugin')

//   webpackConfig.plugins.push(
//     new CompressionWebpackPlugin({
//       asset: '[path].gz[query]',
//       algorithm: 'gzip',
//       test: new RegExp(
//         '\\.(' +
//         config.build.productionGzipExtensions.join('|') +
//         ')$'
//       ),
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   )
// }

// if (config.build.bundleAnalyzerReport) {
//   const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//   webpackConfig.plugins.push(new BundleAnalyzerPlugin())
// }

// module.exports = webpackConfig




'use strict'
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.baseH5.conf')
const config = require("../configH5");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

// 因为要加入预先分析好的第三方库，所以这里的插件要独立出来写。
let plugins = [
  new webpack.DefinePlugin({
    "process.env": require("../configH5/prod.env")
  }),
  new CleanWebpackPlugin(), // 清理输出内容，自动根据output的内容来清理。
  new MiniCssExtractPlugin({ // css打包配置
    // filename: 'static/css/[name].[contenthash].css',
    // chunkFilename: 'static/css/[id].[contenthash].css'
    filename: 'static/css/[name].[contenthash].css',
    chunkFilename: 'static/css/[id].[contenthash].css'
  }),
  new UglifyJsPlugin({
    exclude: /\.min\.js$/,
    cache: true,
    parallel: true, // 开启并行压缩，充分利用cpu
    sourceMap: true,
    extractComments: false, // 移除注释
    uglifyOptions: {
      unused: true,
      warnings: false,
      // drop_debugger: true, //自动删除debugger
      // drop_console: true //自动删除console.log
      compress: {
        drop_debugger: true, //自动删除debugger
        drop_console: true //自动删除console.log
      }
    }
  }),
  new CompressionWebpackPlugin({
    filename: '[path].gz[query]',
    cache: true,
    algorithm: 'gzip',
    test: /\.(js|css|html|svg|png|jpg|jpeg)$/,
    threshold: 10240, // 只处理比这个值大的资源。按字节计算。
    minRatio: 0.8, // 只有压缩率比这个值小的资源才会被处理（minRatio = 压缩大小 / 原始大小）
    deleteOriginalAssets: false // 不删除原始资源. nginx会先判断是否有.gz后缀的相同文件(这就表示需要两个文件，一个是压缩前的，一个是压缩后的。)
    // 有的话，就直接返回，nginx自己不再进行压缩处理。 如果删除源文件，那么 NGINX 处理会有问题的！！！
  }),
  // Compress extracted CSS. We are using this plugin so that possible
  // duplicated CSS from different components can be deduped.
  new OptimizeCSSPlugin({
    assetNameRegExp: /\.css\.*(?!.*map)/g,  //注意不要写成 /\.css$/g
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: { removeAll: true }, // 移除注释
      // 避免 cssnano 重新计算 z-index
      safe: true,
      // cssnano 集成了autoprefixer的功能
      // 会使用到autoprefixer进行无关前缀的清理
      // 关闭autoprefixer功能
      // 使用postcss的autoprefixer功能
      autoprefixer: false
    },
    canPrint: true // 是否将插件信息打印到控制台
  }),

  new HtmlWebpackPlugin(
    Object.assign(
      {
        filename: 'index.html',
        template: "index.html",
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'auto'
      },
      config.build.cdn
    )
  ),
  // keep module.id stable when vendor modules does not change
  new webpack.HashedModuleIdsPlugin(),
  // enable scope hoisting
  new webpack.optimize.ModuleConcatenationPlugin()
]

// 动态添加第三方打包好的组件
// 引入 node.js 核心库，获取第三方库文件夹下的文件名数组
// const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
// // 遍历数组，根据指定的条件，生成插件的第三方库加载代码。
// files.forEach(file => {
//   if (/.*\.dll.js$/.test(file)) {
//     // // 添加指定的文件，到 html 文件中去。
//     plugins.push(new AddAssetHtmlWebpackPlugin({
//       filepath: path.resolve(__dirname, '../dll', file),
//       // 文件输出目录
//       outputPath: 'static/lib',
//       // 脚本或链接标记的公共路径
//       publicPath: 'static/lib'
//     }))

//   }
//   if (/.*\.manifest.json/.test(file)) {
//     // 这个插件避免 webpack 重复打包第三方库，如果要打包第三方库，会先到这个映射文件中去找，已经打包好的。
//     plugins.push(new webpack.DllReferencePlugin({
//       manifest: path.resolve(__dirname, '../dll', file)
//     }))
//   }
// })


const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../distH5'),
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[id].[contenthash].js'
  },
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {} // 使用默认配置，对异步代码做分割处理。tips：同步代码做分割意义不大。
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "less-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "sass-loader"]
      },
      {
        test: /\.(styl|stylus)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "stylus-loader"]
      }
    ]
  },
  plugins
})

// Run the build command with an extra argument to
// View the bundle analyzer report after build finishes:
// `npm run build --report`
// Set to `true` or `false` to always turn it on or off
if (process.env.npm_config_report) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
