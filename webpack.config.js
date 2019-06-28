const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');



const htmlPlugin = new HtmlWebPackPlugin({
  template:path.join(__dirname,'./src/index.html'),
  filename:'index.html'
})

//向外暴露一个打包的配置对象
module.exports = {

  mode:'development', //    production 可以进行代码压缩     //webpack 4.x新增属性

  //webpack 4.x，约定默认的打包入口路径是src -> index.js
  plugins:[
    htmlPlugin
  ],
  module:{      //所有第三方 模块的配置规则
    rules:[
      {
        test:/\.js|\.jsx$/,     //匹配规则
        use:'babel-loader',
        exclude:/node_modules/      //排除项
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],   //?modules为普通样式表启用模块化 ，只有css-loader才能这样设置
        //css模块化只针对类选择器和ID选择器生效

      },
      {
        test:/\.scss$/,
        use:['style-loader','css-loader?modules','scss-loader']     //为scss启用模块化
      },
      {
        test:/\.ttf|woff|woff2|eot|svg$/,
        use:'url-loader'
      }
    ]
  },
  resolve:{       //表示，这几个文件的后缀名，可以省略不写
    extensions:['.js','.jsx','.json','.css'],
    alias:{
      '@':path.join(__dirname,'./src')
    }
  }
}
