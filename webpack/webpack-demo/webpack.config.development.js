/*
    在这个文件中设置我们自定义的打包规则
       1.所有的规则都写在 module.exports={} 中
*/

// 导入node中的路径模块（node内置模块）
let path = require('path');

// 导入 html-webpack-plugin 插件
let HtmlWebpackPlugin = require('html-webpack-plugin');  // 每一导入进来的插件的是一个类 

let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // 配置优化规则
    optimization: {
        // 压缩优化
        minimizer: [
            // 压缩 css ( 产生问题：JS压缩不再执行自己默认的压缩方式了，走的是这个插件，从而导致无法使用默认方法压缩 js )
            new OptimizeCssAssetsWebpackPlugin(),
            // 压缩 js
            new UglifyjsWebpackPlugin({
                // 是否使用缓存
                cache: true,
                // 是否是并发编译（一次性编译多个js）
                parallel: true,
                // 启动源码映射（方便调试）
                sourceMap: true
            })
        ]
    },
    // 打包模式  开发环境 development   生产环境 production
    mode: 'production',
    // 入口
    entry: ['@babel/polyfill','./src/index-my.js'],
    //输出
    output: {
        // 输出文件的文件名
        // 在文件名中添加 [hash],如：bundle.min.[hash].js ，可以让每一次生成的文件名都带有 HASH值
        filename: 'bundle.min.[hash].js',
        // 输出的目录必须是绝对路径  
        path: path.resolve(__dirname, 'dist')
    },
    // 关于 webpack-dev-server 的一些配置     执行命令： webpack-dev-server  --config xxx.js
    devServer: {
        port: 3000,  // 创建服务指定的端口号
        progress: true,  // 显示打包编译的进度
        contentBase: './build',   // 指定当前服务处理资源的目录(默认找该目录下面的 index.html )
        open: false   // 编译完会自动打开浏览器(打开电脑默认浏览器)
    },
    // 使用插件（数组，可使用多个插件）
    plugins: [
        new HtmlWebpackPlugin({  // HtmlWebpackPlugin使用： https://github.com/jantimon/html-webpack-plugin#configuration
            // 指定需要编译的文件（不指定模板会按照默认模板创建一个HTML页面，在项目中一般都是把自己写好的HTML进行编译）
            template: './src/index.html',
            // 编译后输出的文件名
            filename: 'index.html',
            // 让我们引入JS后面加上 HASH戳 ( 用于清除缓存 )，但是真实项目中一般都是每一次编译生成不同的 JS文件名引入,可以在 output中设置 filename：bundle.min.[hash].js 来生成不同的文件

            // hash: true,

            // 控制压缩 html 规则

            minify: { // minify使用  https://github.com/jantimon/html-webpack-plugin#minification
                // 去掉空格
                collapseWhitespace: true,
                // 去掉注释
                removeComments: true,
                // 去掉标签属性的双引号
                removeAttributeQuotes: true,
                // 去掉没有属性值的属性
                removeEmptyAttributes: true
            }
        }),
        new MiniCssExtractPlugin({
            // 指定输出的文件名
            filename: 'main.mon.css',
            hash: true
        })
    ],
    // 使用加载器 loader 处理规则,所有的加载器都需要安装（ https://www.webpackjs.com/loaders/ ）
    module: {
        // 模块规则（每一个规则的是一个对象）：使用加载器（ 默认从右向左，从上向下 ）
        rules: [{//处理样式规则
            // 基于正则表达式匹配那些模块需要处理
            test: /\.(css|less)$/,
            // 控制使用的 loader（有顺序的：从右向左执行）
            use: [ //使用加载器
                // 把编译好的 css 插入到页面的 HEAD 中（内嵌式样式）
                // "style-loader", 

                //配合 mini-css-extract-plugin 插件使用，将 css 以外链的形式导入
                MiniCssExtractPlugin.loader,
                // 编译解析 @import/URL() 这种语法
                "css-loader",
                // 设置前缀
                {
                    loader: "postcss-loader",
                    options: {
                        ident: "postcss",
                        plugins: [
                            require("autoprefixer")
                        ]
                    }
                },
                //  编译 LESS
                {
                    loader: "less-loader",
                    options: {
                        // 加载器额外的配置
                    }
                }
            ]
        }, { // 处理js规则
            test: /\.js$/i,
            use: [{
                loader: 'babel-loader',
                options: {
                    // 基于babel的语法解析包，实现语法转换预设 （ ES6-->ES5 ）
                    presets: ['@babel/preset-env'],
                    // 基于插件处理 >=ES6中的class的特殊语法 (js中没有class特殊语法可以不写)
                    plugins: [
                        ["@babel/plugin-proposal-decorators", {
                            "legacy": true
                        }],
                        ["@babel/plugin-proposal-class-properties", {
                            "loose": true
                        }],
                        "@babel/plugin-transform-runtime"
                    ]
                }
            }],
            // "eslint-loader"
            // 设置编译时忽略的文件和指定编译目录
            include:path.resolve(__dirname,'sec'),
            // 编译时忽略的文件
            exclude:/node_modules/ 
        }]
    }
}