## 配置sass预编译器环境
  * 使用工具包: create-react-app-sass
  * npm install create-react-app-sass --save-dev
  * 修改package.json
    ```
    "scripts": {
      "start": "react-scripts-with-sass start",
      "build": "react-scripts-with-sass build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
    },
    ```
  * 在js中引入样式文件时, 不引入*.scss文件, 而是引入*.css文件
    * 原因: 在构建项目时, 会先将.scss文件转译为.css文件
    
## 编写静态页面
  * HTML
  * CSS
    
## 拆分组件
  ```
  App-------------应用组件
    TodoHeader---------------头部组件
    TodoMain-----------------主体组件
      TodoItem---------------------todo项组件
    TodoFooter---------------尾部组件
  ```
## 实现静态组件
  * 拆分页面
  * 拆分样式(就近原则)

## 分析确定组件的state和props
  * App:
    * state: 
      * todos: [{isDone: false, title: '吃饭'}, {isDone: false, title: '睡觉'}]
      * isAllChecked: boolean
  * TodoHeader
    * props: addTodo/func
  * todoMain
    * props: 
      * todos/array   
      * deleteTodo/func
      * changeTodoState/func
  * todoItem
    * props: 
      * todo/object  
      * deleteTodo/func 
      * index/number
      * changeTodoState/func
  * TodoFooter
    * props: 
      * isAllChecked/boolean 
      * doneCount/number 
      * totalCount/number
      * deleteDone/func
      * changeAllState/func
      
## 实现动态组件
  * 动态显示初始化todos列表数据
    * App  state--> todos
    * 初始化todos: constructor()
    * todos的结构: [{title:'xx', isDone:false}, {}]
    * 通过标签属性向-->TodoMain-->TodoItem传递todos
  * 添加新的todo, 显示在列表首位
  * 勾选指定todo
  * 删除指定todo
  * 显示完成的/所有的todo的数量
  * 全选/全不选
  * 删除所有选中的

## 组件间通信总结
  * 方式一: 通过props传递
    * 共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
    * 通过props可以传递一般数据和函数数据, 只能一层一层传递
    * 一般数据-->父组件传递数据给子组件-->子组件读取数据
    * 函数数据-->子组件传递数据给父组件-->子组件调用函数
  * 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制
    * 工具库: PubSubJS
    * 下载: npm install pubsub-js --save
    * 使用: 
      ```
      import PubSub from 'pubsub-js' //引入
      PubSub.subscribe('delete', function(data){ }); //订阅
      PubSub.publish('delete', data) //发布消息
      ```
      
## ES6新语法
  * const/let
  * 解构赋值: let {a, b} = this.props
  * 箭头函数: 
     * 组件的自定义方法: xxx = () => {}
     * map/filter的回调方法: (item, index) => {}
     * 优点:
      * 简洁
      * 没有自己的this,使用引用this查找的是外部this
  * 扩展运算符(...)
    解构对象:  const MyProps = {}, <Xxx {...MyProps}>
  * class/extends/constructor/super
  * ES模块化

## 项目打包运行
  * 项目编译打包并运行
    * npm build
    * npm install -g pushstate-server
    * pushstate-server build
    * 访问: http://localhost:9000