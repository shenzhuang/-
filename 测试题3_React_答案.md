1. 说说你对模块与组件, 模块化与组件化的理解
	* 模块与组件
		* 模块:
		  * 理解: 向外提供特定功能的js程序, 一般就是一个js文件
		  * 为什么: js代码更多更复杂
		  * 作用: 简化js的编写, 阅读, 提高运行效率
		* 组件: 
		  * 理解: 用来实现特定功能效果的代码集合(html/css/js)
		  * 为什么: 一个界面的功能更复杂
		  * 作用: 复用, 简化项目编码, 提高运行效率
	* 模块化与组件化
		* 模块化:
		  * 当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
		* 组件化:
		  * 当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用

2. 说说你对React的理解
	* Facebook开源的一个js库
		* 一个用来动态构建用户界面的js库
		* React的特点
		* Declarative(声明式编码)
		* Component-Based(组件化编码)
		* Learn Once, Write Anywhere(支持客户端与服务器渲染)
		* 高效
		* 单向数据流
	* React高效的原因
		* 虚拟(virtual)DOM, 不总是直接操作DOM(批量更新, 减少更新的次数) 
		* 高效的DOM Diff算法, 最小化页面重绘(减小页面更新的区域)

3. 说说你对虚拟DOM的理解
	* 虚拟DOM是什么?
		* 一个虚拟DOM(元素)是一个一般的js对象, 准确的说是一个对象树(倒立的)
		* 虚拟DOM保存了真实DOM的层次关系和一些基本属性，与真实DOM一一对应
		* 如果只是更新虚拟DOM, 页面是不会重绘的
	* Virtual DOM 算法的基本步骤
		* 用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中
		* 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
		* 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了
    
4. 说说React组件的三大属性
	* props
		* 用来存储组件标签的所有属性数据的对象
		* 实现将数据从组件外部传递到组件内部
	* refs
		* 用来存储组件内部所有定义的ref属性的dom元素对象
		* 作用: 用来操作组件内部的标签对象
	* state
		* 用来存储组件内部可变的数据, 页面的显示就是根据state数据显示的
		* 作用: 通过更新state来更新界面
5. 用2种方式定义组件
	* function方式: 无状态组件
	  ```
      function MyComponent1() {
        return <h1>自定义组件标题11111</h1>;
      }
      ```
	* class方式: 有状态组件
	  ```
      class MyComponent3 extends React.Component {
        render () {
          return <h1>自定义组件标题33333</h1>;
        }
      }
      ```
6. 说几个React常用的ES6语法
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
  * ES6模块化(Babel)
7. 说说React的生命周期
	* 第一次初始化显示
        ```
        constructor()
        componentWillMount() : 将要插入回调
        render() : 用于插入虚拟DOM回调
        componentDidMount() : 已经插入回调
        ```
	* 每次更新state
        ```
        componentWillReceiveProps(): 接收父组件新的属性
        componentWillUpdate() : 将要更新回调
        render() : 更新(重新渲染)
        componentDidUpdate() : 已经更新回调
        ```
	* 删除组件
        ```
        ReactDOM.unmountComponentAtNode(document.getElementById('example')) : 移除组件
        componentWillUnmount() : 组件将要被移除回调
        ```
8. 说说你是如何使用React组件化一个页面功能的
	* 拆分组件
	* 确定state/props
	* 编写静态组件
	* 编写
9. 说说你对声明式编程与命令式编程的理解
	* 命令式
		* 流程+具体逻辑计算
		* 问答题
	* 声明式
		* 对命令式的包装, 已实现流程
		* 我们只需要实现具体逻辑
		* 填空题
10. 说说你在React组件如何与服务器进行交互
	* React没有ajax封装
	* 需要集成其它的js库(如axios/fetch/jQuery/), 发送ajax请求
	* 在哪个方法去发送ajax请求
	  * 只显示一次(请求一次): componentDidMount()
	  * 显示多次(请求多次): componentWillReceiveProps()