1. 说说你对对象属性的get和set方法的理解
	* get方法: 当读取属性值时执行的回调函数, 用来得到当前属性值
	* set方法: 当修改属性值时执行的回调函数, 用来监视当前属性值变化
2. 说说你对命令式编程和声明编程的理解, 并举例说明
	* 命令式: 问答题: 如何做(流程) + 做什么(具体的逻辑) 
    * 声明式: 填空题: 做什么(具体的逻辑) : 对命令式编码的封装: 将流程封装起来, 而让变化的逻辑由调用者实现
3. 说说bind()与call()和apply()的区别
	* fn.bind(obj) : 指定函数中的this, 并返回函数
    * fn.call(obj)/bind(obj) : 指定函数中的this,并调用函数
4. 说说let, const与var的区别
    * 块作用域
    * 没有变量提升
    * 不能重复定义
    * 值不可变
5. 编码演示箭头函数的使用, 并说说他的特点
	* setTimeout(() => {console.log('-----')})
	* 编码简单
	* 没有this
6. 说说你对promise的理解
	* 解决`回调地狱`(回调函数的层层嵌套, 编码是不断向右扩展, 阅读性很差)
    * 能以同步编码的方式实现异步调用
    * 在es6之前原生的js中是没这种实现的, 一些第三方框架(jQuery/angular)实现了promise
7. 说说你对Angular的理解
	* Google开源的前端JS结构化MMVM框架
	* 动态展示页面数据, 并与用户进行交互
	* AngularJS特性(优点)
		* 双向数据绑定
		* 声明式依赖注入
		* 完善的页面模板技术: 指令/表达式
		* 解耦应用逻辑, 数据模型和视图
		* 定制表单验证
		* Ajax封装
8. 说说Angular中的四个重要概念
	* 双向数据绑定
	* 依赖注入
	* MVC模式
	* MVVM模式
9. 说说Angular中的五个重要对象
	* 作用域
	* 控制器
	* 模块
	* 服务
	* angular
10. 说说Angular中的三个重要语法
	* 表达式: 从作用域对象中读取对应的属性数据来显示数据
	* 指令: Angular为HTML页面扩展的属性/标签, 与Angular的Model交互,扩展页面的动态表现力
	* 过滤器: 对单个数据进行格式化, 对多个数据进行格式化/过滤操作
11. 说说你对MVC与MVVM的理解
	* MVC
	  * **M: Model, 即模型**, 在angular中: 
	    * 为scope
	    * 储存数据的容器
	    * 提供操作数据的方法
	  * **V: View, 即视图**, 在angular中:
	    * 为页面: html/css/directive/expression
	    * 显示Model的数据
	    * 将数据同步到Model
	    * 与用户交互
	  * **C: Controller, 即控制器**, 在angular中:
	    * 为angular的Controller
	    * 初始化Model数据
	    * 为Model添加行为方法
	* MVVM
	  * M: Model, 即数据模型, 在angular中:
	    * 为scope中的各个数据对象
	  * V: View, 即视图, 在angular中:
	    * 为页面
	  * VM: ViewModel, 即视图模型, 在angular中:
	    * 为scope对象 