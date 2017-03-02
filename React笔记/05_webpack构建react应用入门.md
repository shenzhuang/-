1. 下载相关模块包
  * react相关库
    ```
    npm install --save react react-dom
    ```
  * babel相关库
    ```
    npm install --save-dev babel-core babel-preset-es2015 babel-preset-react
    ```
  * webpack相关库
    ```
    // 不使用webpck2.x的版本
    npm install --save-dev webpack@1.13.0 babel-loader
    ```
  * http服务器
    ```
    // http-server: 简易http服务器(通过命令就可以运行)
    npm install --save http-server
    ```
2. webpack配置文件: webpack.config.js
  ```
  module.exports = {
    entry: './src/main',  //指定入口js
    output: {             //指定编译输出
      path: __dirname + '/static/dist',
      filename: 'main.js'
    },
    module: {
      loaders: [ //声明使用某个(些)加载器对指定文件进行处理
        {
          test: /\.js$/,           //目标文件正则
          exclude: /node_modules/, //排除文件正则
          loaders: ['babel']  //指定使用的加载器
        }
      ]
    }
  }
  ```
3. babel配置文件: .babelrc
  ```
  {
    "presets": ["es2015", "react"]
  }
  ```
4. 编码
  * src/App.js: 应用组件
    ```
    import React from 'react'
    export default function App() {
      return <h1>Hello React Client Component</h1>
    }
    ```
  * src/main.js: 入口js
    ```
    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './App'
    
    //渲染组件标签到页面元素
    ReactDOM.render(<App />, document.getElementById('demo'))
    ```
* package.json: 添加编译/运行脚本
  ```
  "scripts": {
    "build": "webpack",                         //webpack编译
    "start": "webpack && http-server -p 3000"   //webpack编译并运行项目
  }
  ```