(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{398:function(t,e,a){"use strict";a.r(e);var s=a(4),v=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"_01-key的作用和原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-key的作用和原理"}},[t._v("#")]),t._v(" 01-key的作用和原理")]),t._v(" "),e("p",[t._v("要确保key值的唯一，事实上如果key值不唯一的话，react只会渲染第一个，剩下的react会认为是同一项，直接忽略。其次，尽量避免使用index值作为组件的key值，虽然显式使用index作为key值可以消除warning，")]),t._v(" "),e("p",[t._v("核心基于两个假设 1. 相同的组件产生相同的DOM结构,不同的组件产生不同的DOM结构,不同的组件产生不同的DOM结构,2 同一层级的一组节点,他们可以通过唯一的key进行区分")]),t._v(" "),e("p",[t._v("作用:")]),t._v(" "),e("ol",[e("li",[t._v("key的作用主要是为了高效的更新虚拟DOM,在patch过程中通过key来判断两个节点是否相同,提高patch过程,减少DOM操作,提高性能")]),t._v(" "),e("li",[t._v("若不设置解key可能在列表更新时引发一些隐蔽的bug(按钮少一个)")]),t._v(" "),e("li",[t._v("Vue在使用相同标签名元素的过渡切换时,也会用到key,使Vue便于区分元素,从而触发过渡效果")])]),t._v(" "),e("h3",{attrs:{id:"_02-refs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-refs"}},[t._v("#")]),t._v(" 02-refs")]),t._v(" "),e("p",[t._v("React提供的这个ref属性，表示为对组件真正实例的引用，其实就是"),e("code",[t._v("ReactDOM.render()")]),t._v("返回的组件实例；")]),t._v(" "),e("p",[e("code",[t._v("ReactDOM.render()")]),t._v("渲染组件时返回的是组件实例；\n渲染"),e("code",[t._v("dom")]),t._v("元素时，返回是具体的"),e("code",[t._v("dom")]),t._v("节点。\n"),e("code",[t._v("ref")]),t._v("可以挂载到组件上也可以是"),e("code",[t._v("dom")]),t._v("元素上；")]),t._v(" "),e("p",[t._v("挂到组件(class声明的组件)上的"),e("code",[t._v("ref")]),t._v("表示对组件实例的引用。不能在函数式组件上使用 ref 属性，因为它们没有实例：\n挂载到"),e("code",[t._v("dom")]),t._v("元素上时表示具体的"),e("code",[t._v("dom")]),t._v("元素节点。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("获取ref引用组件对应的dom节点\n不管ref设置值是回调函数还是字符串，都可以通过"),e("code",[t._v("ReactDOM.findDOMNode(ref)")]),t._v("来获取组件挂载后真正的dom节点。")])]),t._v(" "),e("li",[e("p",[t._v("ref属性可以设置为一个回调函数\nReact 支持给任意组件添加特殊属性。ref 属性接受一个回调函数，它在组件被加载或卸载时会立即执行。")]),t._v(" "),e("ul",[e("li",[t._v("当给 HTML 元素添加 ref 属性时，ref 回调接收了底层的 DOM 元素作为参数。")]),t._v(" "),e("li",[t._v("当给组件添加 ref 属性时，ref 回调接收当前组件实例作为参数。")]),t._v(" "),e("li",[t._v("当组件卸载的时候，会传入"),e("code",[t._v("null")])]),t._v(" "),e("li",[e("code",[t._v("ref")]),t._v(" 回调会在"),e("code",[t._v("componentDidMount")]),t._v(" 或 "),e("code",[t._v("componentDidUpdate")]),t._v(" 这些生命周期回调之前执行。")])])])]),t._v(" "),e("h3",{attrs:{id:"_03-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-生命周期"}},[t._v("#")]),t._v(" 03-生命周期")]),t._v(" "),e("h4",{attrs:{id:"react-16-前的生命周期函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-16-前的生命周期函数"}},[t._v("#")]),t._v(" React 16 前的生命周期函数")]),t._v(" "),e("p",[e("img",{attrs:{src:"/React/lifescale16.png",alt:"React 16 前的生命周期函数"}})]),t._v(" "),e("ol",[e("li",[t._v("组件初始化("),e("code",[t._v("Initialization")]),t._v(")阶段\n"),e("ul",[e("li",[t._v("初始化"),e("code",[t._v("state")]),t._v("和"),e("code",[t._v("props")]),t._v("的数据")])])]),t._v(" "),e("li",[t._v("组件的挂载("),e("code",[t._v("Mounting")]),t._v(")阶段\n"),e("ul",[e("li",[e("code",[t._v("componentWillMount")]),t._v(" (React v16 弃用)")]),t._v(" "),e("li",[e("code",[t._v("render")])]),t._v(" "),e("li",[e("code",[t._v("componentDidMount")])])])]),t._v(" "),e("li",[t._v("组件的更新("),e("code",[t._v("Updation")]),t._v(")阶段 (1.父组件重新 "),e("code",[t._v("render")]),t._v(" 导致的重传 "),e("code",[t._v("props")]),t._v(" 2. 组件本身调用 "),e("code",[t._v("setState")]),t._v("，无论 "),e("code",[t._v("state")]),t._v(" 有没有变化。)\n"),e("ul",[e("li",[e("code",[t._v("componentWillReceiveProps")]),t._v(" (React v16 弃用)")]),t._v(" "),e("li",[e("code",[t._v("shouldComponentUpdate")])]),t._v(" "),e("li",[e("code",[t._v("componentWillUpdate")])]),t._v(" "),e("li",[e("code",[t._v("render")]),t._v("(这里只是重新调用)")]),t._v(" "),e("li",[e("code",[t._v("componentDidUpdate")])])])]),t._v(" "),e("li",[t._v("组件的卸载("),e("code",[t._v("Unmounting")]),t._v(")阶段\n"),e("ul",[e("li",[e("code",[t._v("componentWillUnmount")])])])])]),t._v(" "),e("h4",{attrs:{id:"react-v16-4-的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-v16-4-的生命周期"}},[t._v("#")]),t._v(" React v16.4 的生命周期")]),t._v(" "),e("p",[e("img",{attrs:{src:"/React/lifescale16.1.png",alt:"React v16.4 的生命周期"}})]),t._v(" "),e("ol",[e("li",[t._v("挂载阶段\n"),e("ul",[e("li",[e("code",[t._v("constructor")])]),t._v(" "),e("li",[e("code",[t._v("getDrivedStateFromProps")])]),t._v(" "),e("li",[e("code",[t._v("render")])]),t._v(" "),e("li",[e("code",[t._v("componentDidMount")])])])]),t._v(" "),e("li",[t._v("更新阶段\n"),e("ul",[e("li",[e("code",[t._v("getDrivedStateFromProps")])]),t._v(" "),e("li",[e("code",[t._v("shouldComponentUpdate")])]),t._v(" "),e("li",[e("code",[t._v("getShanpshotBeforeUpdate")])]),t._v(" "),e("li",[e("code",[t._v("componentDidUpdate")])])])]),t._v(" "),e("li",[t._v("卸载阶段\n"),e("ul",[e("li",[e("code",[t._v("componentWillUnmount")])])])])]),t._v(" "),e("p",[e("code",[t._v("React")]),t._v(" 以前是同步更新，如果更新的组件过多，就会阻塞线程，用户有操作无法立即响应，界面卡顿，影响用户体验。然后React v16推出的 "),e("code",[t._v("React Fiber")]),t._v(", 原来（React v16.0前）的生命周期再"),e("code",[t._v("React Fiber")]),t._v("后就不合适了, 在 "),e("code",[t._v("render")]),t._v(" 函数执行之前的所有函数都有可能执行多次。")]),t._v(" "),e("h3",{attrs:{id:"_04-事件系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_04-事件系统"}},[t._v("#")]),t._v(" 04-事件系统")]),t._v(" "),e("p",[e("img",{attrs:{src:"/React/react_evenr_flow.jpeg",alt:"事件流程图"}})]),t._v(" "),e("p",[t._v("React自己实现了一套高效的事件注册，存储，分发和重用逻辑，在DOM事件体系基础上做了很大改进，减少了内存消耗，简化了事件逻辑，并最大化的解决了IE等浏览器的不兼容问题。与DOM事件体系相比，它有如下特点")]),t._v(" "),e("p",[t._v("React组件上声明的事件最终绑定到了document这个DOM节点上，而不是React组件对应的DOM节点。故只有document这个节点上面才绑定了DOM原生事件，其他节点没有绑定事件。这样简化了DOM原生事件，减少了内存开销\nReact以队列的方式，从触发事件的组件向父组件回溯，调用它们在JSX中声明的"),e("code",[t._v("callback")]),t._v("。也就是React自身实现了一套事件冒泡机制。我们没办法用event."),e("code",[t._v("stopPropagation()")]),t._v("来停止事件传播，应该使用"),e("code",[t._v("event.preventDefault()")]),t._v("\nReact有一套自己的合成事件"),e("code",[t._v("SyntheticEvent")]),t._v("，不同类型的事件会构造不同的"),e("code",[t._v("SyntheticEvent")]),t._v("\nReact使用对象池来管理合成事件对象的创建和销毁，这样减少了垃圾的生成和新对象内存的分配，大大提高了性能")]),t._v(" "),e("h4",{attrs:{id:"主要的几个类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要的几个类"}},[t._v("#")]),t._v(" 主要的几个类")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("ReactEventListener")]),t._v("：负责事件注册和事件分发。React将DOM事件全都注册到"),e("code",[t._v("document")]),t._v("这个节点上，这个我们在事件注册小节详细讲。事件分发主要调用"),e("code",[t._v("dispatchEvent")]),t._v("进行，从事件触发组件开始，向父元素遍历。我们在事件执行小节详细讲。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("ReactEventEmitter")]),t._v("：负责每个组件上事件的执行。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("EventPluginHub")]),t._v("：负责事件的存储，合成事件以对象池的方式实现创建和销毁，大大提高了性能。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("SimpleEventPlugin")]),t._v("等plugin：根据不同的事件类型，构造不同的合成事件。如focus对应的React合成事件为"),e("code",[t._v("SyntheticFocusEvent")])])])]),t._v(" "),e("h3",{attrs:{id:"_05-setstate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05-setstate"}},[t._v("#")]),t._v(" 05-setState")]),t._v(" "),e("p",[t._v("由React控制的事件处理程序，以及生命周期函数调用setState不会同步更新state 。")]),t._v(" "),e("p",[t._v("React控制之外的事件中调用setState是同步更新的。比如原生js绑定的事件，setTimeout/setInterval等。")]),t._v(" "),e("p",[t._v("setstate第二个参数回调")]),t._v(" "),e("p",[t._v("多个setstate会被合并")]),t._v(" "),e("h3",{attrs:{id:"_06-组件通讯"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_06-组件通讯"}},[t._v("#")]),t._v(" 06-组件通讯")]),t._v(" "),e("ul",[e("li",[t._v("父子: props, refs")]),t._v(" "),e("li",[t._v("子父: 回调, 冒泡(父组件监听click, e.target)")]),t._v(" "),e("li",[t._v("子子: 共用父级")]),t._v(" "),e("li",[t._v("不限层级: 观察者,全局变量,context(provide/consumer)")])]),t._v(" "),e("h3",{attrs:{id:"_07-class与function对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_07-class与function对比"}},[t._v("#")]),t._v(" 07-class与function对比")]),t._v(" "),e("ol",[e("li",[t._v("状态: class可定义生命周期和私有属性state。在hooks出来之前，函数组件就是无状态组件，不能保管组件的状态。")]),t._v(" "),e("li",[t._v("生命周期: 在函数组件中，并不存在生命周期，这是因为这些生命周期钩子都来自于继承的React.Component所以，如果用到生命周期，就只能使用类组件")]),t._v(" "),e("li",[t._v("语法: 两者最明显的不同就是在语法上，函数组件是一个纯函数，它接收一个props对象返回一个react元素。而类组件需要去继承React.Component并且创建render函数返回react元素，这将会要更多的代码，虽然它们实现的效果相同。")]),t._v(" "),e("li",[t._v("获取渲染值:this会改变")])]),t._v(" "),e("p",[t._v("分别按下面的顺序来操作Follow按钮：")]),t._v(" "),e("ul",[e("li",[t._v("先点击Follow按钮")]),t._v(" "),e("li",[t._v("在3s之前更改下拉选择项的选项")]),t._v(" "),e("li",[t._v("阅读弹出的警告框内容")]),t._v(" "),e("li",[t._v("你会发现函数组件和类组件是有区别的：")])]),t._v(" "),e("p",[t._v("函数组件：按上面所列的三个步骤操作时，当用户在3s前更改下拉选择框的选项时，h1的用户名会立马改变，而3s后弹出的警告框中的用户名并不会改变\n类组件：按上面所列的三个步骤操作时，当用户在3s前更改下拉选择框的选项时，h1中的用户名会立马改变，而3s后弹出的警告框中的用户名也会改变")]),t._v(" "),e("p",[t._v("调用方式:")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果SayHi是一个函数，React需要调用它：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// React内部")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("SayHi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// » <p>Hello, React</p>")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果SayHi是一个类，React需要先用new操作符将其实例化，然后调用刚才生成实例的render方法：")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SayHi")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// React内部")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SayHi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// » SayHi {}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// » <p>Hello, React</p>")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br")])]),e("h3",{attrs:{id:"_08-react优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_08-react优化"}},[t._v("#")]),t._v(" 08-React优化")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("减少不必要的渲染.shouldComponentUpdate, pureComponent, react.memo")])]),t._v(" "),e("li",[e("p",[t._v("数据缓存 useCallback useMemo")])]),t._v(" "),e("li",[e("p",[t._v("不要滥用功能项 context props")])]),t._v(" "),e("li",[e("p",[t._v("懒加载")])]),t._v(" "),e("li",[e("p",[t._v("减少http请求")])]),t._v(" "),e("li",[e("p",[t._v("webpack")]),t._v(" "),e("ul",[e("li",[t._v("① include 或 exclude 限制 loader 范围。")]),t._v(" "),e("li",[t._v("② happypack多进程编译")]),t._v(" "),e("li",[t._v("③缓存babel编译过的文件")]),t._v(" "),e("li",[t._v("④tree Shaking 删除冗余代码")]),t._v(" "),e("li",[t._v("⑤按需加载，按需引入。")])])]),t._v(" "),e("li",[e("p",[t._v("优化项目结构")])]),t._v(" "),e("li",[e("p",[t._v("路由懒加载")])]),t._v(" "),e("li",[e("p",[t._v("受控性组件颗粒化 ，独立请求服务渲染单元")]),t._v(" "),e("ul",[e("li",[t._v("受控性组件颗粒化: 将频繁变更组件更新由组件单元自行控制，不需要父组件的更新，所以不需要父组件设置独立state保留状态。")]),t._v(" "),e("li",[t._v("独立请求服务渲染单元:直接理解就是，如果我们把页面，分为请求数据展示部分(通过调用后端接口，获取数据)，和基础部分(不需要请求数据，已经直接写好的)，对于一些逻辑交互不是很复杂的数据展示部分，我推荐用一种独立组件，独立请求数据，独立控制渲染的模式。至于为什么我们可以慢慢分析。")])])]),t._v(" "),e("li",[e("p",[t._v("性能调优")]),t._v(" "),e("ul",[e("li",[t._v("①绑定事件尽量不要使用箭头函数(每次都会被渲染)")]),t._v(" "),e("li",[t._v("②循环正确使用key")]),t._v(" "),e("li",[t._v("③无状态组件hooks-useMemo 避免重复声明。")])])]),t._v(" "),e("li",[e("p",[t._v("避免重复渲染")]),t._v(" "),e("ul",[e("li",[t._v("① 学会使用的批量更新")]),t._v(" "),e("li",[t._v("② 合并state")]),t._v(" "),e("li",[t._v("③ useMemo React.memo隔离单元")]),t._v(" "),e("li",[t._v("⑤ useCallback回调")])])]),t._v(" "),e("li",[e("p",[t._v("中规中矩的使用状态管理")])]),t._v(" "),e("li",[e("p",[t._v("海量数据优化-时间分片，虚拟列表\n*时间分片 setTimeout 可以用 window.requestAnimationFrame() 代替\n*虚拟列表:react-tiny-virtual-list")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);