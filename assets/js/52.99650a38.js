(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{381:function(e,t,v){"use strict";v.r(t);var n=v(4),_=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[e._v("#")]),e._v(" 事件循环")]),e._v(" "),t("blockquote",[t("p",[e._v("浏览器为了协调事件处理,脚本执行,网络请求和渲染等任务而指定的一套工作机制")])]),e._v(" "),t("p",[e._v("宏任务: 代表一个个离散的,独立工作单元,浏览器完成一个宏任务,在下一个宏任务执行开始前,会对页面进行重新渲染,主要包括创建文档对,解析HTML,执行主线JS代码以及各种事件如页面加载,输入,网络事件和定时器等")]),e._v(" "),t("p",[e._v("微任务: 微任务为更小的任务,是在当前宏任务执行结束后立即执行的任务,如果存在微任务,浏览器会清空微任务之后,在重新渲染页面")]),e._v(" "),t("h2",{attrs:{id:"vue异步更新策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue异步更新策略"}},[e._v("#")]),e._v(" Vue异步更新策略")]),e._v(" "),t("ul",[t("li",[e._v("异步: 只要监听到数据变化,Vue将会开启一个队列,并缓存在同一事件循环中发生的所有数据变更")]),e._v(" "),t("li",[e._v("批量: 如果同一个watcher被多次触发,只会被推入到队列中一个,然后在下一个时间循环tick中,Vue会刷新队列执行更新")]),e._v(" "),t("li",[e._v("异步策略: Vue内部对异步队列尝试使用 promise.then > mutationobserver > setImmmediate > settimeout")])]),e._v(" "),t("h2",{attrs:{id:"虚拟dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[e._v("#")]),e._v(" 虚拟DOM")]),e._v(" "),t("blockquote",[t("p",[e._v("虚拟DOM 是对DOM的js抽象表示,能够描述DOM结构个关系,应用的各种状态变化会作用域虚拟DOM,最终映射到DOM上.Vdom是js对DOM的抽象,用js模拟DOM的结构,DOM的变化对比放在JS层才做,提高重绘性能")])]),e._v(" "),t("p",[e._v("优点: 轻量,快捷,跨平台,兼容性")]),e._v(" "),t("p",[e._v("数据改变 => watcher.run() => componentUpdate() => render() => update() => patch()")]),e._v(" "),t("p",[e._v("patchVnode")]),e._v(" "),t("p",[e._v("核心基于两个假设 1. 相同的组件产生相同的DOM结构,不同的组件产生不同的DOM结构,不同的组件产生不同的DOM结构,2 同一层级的一组节点,他们可以通过唯一的key进行区分\n策略: 深度优先 同级比较")]),e._v(" "),t("p",[e._v("先根据真实DOM生成一棵virtual DOM 当 virtual DOM 某个节点发生改变时生成一个Vnode,然后 Vnode与oldVnode进行对比,发现不一样的之低昂直接修改咋真是的DOM上,然后使oldVnode的值为Vnode, diff的过程是调用patch函数,一边比较一边给真实的DOM打补丁")]),e._v(" "),t("p",[e._v("当数据发生改变时, set会调用notify通知所有的Watcher, Watcher会调用patch给真实的DOM打补丁,更新相应的视图")]),e._v(" "),t("p",[e._v("patch :")]),e._v(" "),t("ol",[t("li",[e._v("先判断两个节点是否值得比较, 如果两个节点一样则深入检查他们的子节点,如不一样则用Vnode直接替换oldVnode\nsameVnode\n. key (key值)\n. tag (标签名)\n. isComment (是否为注释节点)\n. isDef(a.data) (是否都定义了data onclick style 标签上的属性)\n. sameInput(a, b) (当标签是input的时候，type必须相同)")]),e._v(" "),t("li",[e._v("如果值得比较则调用patchVnode方法\n· 找到对应的真是dom 成为el\n· 判断 Vnode 与 oldVnode是否指向同一个对象,如果是直接return\n· 如果他们的文本节点不相等 则将el的文本节点设置为Vnode的文本节点\n· 如果oldVnode有子节点,而Vnode没有 则删除el的子节点\n· 如果oldVnode没有子节点, 而Vnode有, 则将Vnode的子节点真实化添加到el\n· 如果都有子节点则执行updateChildren比较子节点")]),e._v(" "),t("li",[e._v("updateChildren\n· 将"),t("code",[e._v("Vnode")]),e._v("的子节点"),t("code",[e._v("Vchildren")]),e._v("和"),t("code",[e._v("oldVnode")]),e._v("的子节点"),t("code",[e._v("oldChildren")]),e._v("提取出来\n· "),t("code",[e._v("oldChildren")]),e._v("和"),t("code",[e._v("vChildren")]),e._v("各有两个头尾的变量"),t("code",[e._v("StartIdx")]),e._v("和"),t("code",[e._v("EndIdx")]),e._v("，它们的2个变量相互比较，一共有4种比较方式。如果4种比较都没匹配，如果设置了"),t("code",[e._v("key")]),e._v("，就会用"),t("code",[e._v("key")]),e._v("进行比较，在比较的过程中，变量会往中间靠，一旦"),t("code",[e._v("StartIdx>EndIdx")]),e._v("表明"),t("code",[e._v("oldChildren")]),e._v("和"),t("code",[e._v("vChildren")]),e._v("至少有一个已经遍历完了，就会结束比较。")])]),e._v(" "),t("p",[e._v("现在分别对"),t("code",[e._v("oldS")]),e._v("、"),t("code",[e._v("oldE")]),e._v("、"),t("code",[e._v("S")]),e._v("、"),t("code",[e._v("E")]),e._v("两两做"),t("code",[e._v("sameVnode")]),e._v("比较，有四种比较方式，当其中两个能匹配上那么真实"),t("code",[e._v("dom")]),e._v("中的相应节点会移到"),t("code",[e._v("Vnode")]),e._v("相应的位置，这句话有点绕，打个比方\n如果是"),t("code",[e._v("oldS")]),e._v("和"),t("code",[e._v("E")]),e._v("匹配上了，那么真实"),t("code",[e._v("dom")]),e._v("中的第一个节点会移到最后\n如果是"),t("code",[e._v("oldE")]),e._v("和"),t("code",[e._v("S")]),e._v("匹配上了，那么真实"),t("code",[e._v("dom")]),e._v("中的最后一个节点会移到最前，匹配上的两个指针向中间移动\n如果四种匹配没有一对是成功的，那么遍历"),t("code",[e._v("oldChild")]),e._v("，"),t("code",[e._v("S")]),e._v("挨个和他们匹配，匹配成功就在真实"),t("code",[e._v("dom")]),e._v("中将成功的节点移到最前面，如果依旧没有成功的，那么将"),t("code",[e._v("S")]),e._v("对应的节点插入到"),t("code",[e._v("dom")]),e._v("中对应的"),t("code",[e._v("oldS")]),e._v("位置，"),t("code",[e._v("oldS")]),e._v("和"),t("code",[e._v("S")]),e._v("指针向中间移动。")]),e._v(" "),t("h2",{attrs:{id:"模板编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板编译"}},[e._v("#")]),e._v(" 模板编译")]),e._v(" "),t("blockquote",[t("p",[e._v("模板编译的主要目的是将模板(template)转为渲染函数(render)生成Vnode")])]),e._v(" "),t("p",[e._v("_c 别名 createElement\n_v 别名 createTextVnode\n_s 别名 toString")]),e._v(" "),t("p",[e._v("解析: 解析模板商城AST")]),e._v(" "),t("p",[e._v("优化:标记静态节点 静态根节点,patch时可以进行跳过")]),e._v(" "),t("p",[e._v("生成: 将AST转换成渲染函数")]),e._v(" "),t("p",[t("code",[e._v("parseIf")]),e._v("\n生成if ifConditions 记录if条件 genifConditions生成三元表达式\nparseFor\n生成for (原数组) alias(别名items) 记录for条件  genFor生成renderList使用for循环\nparseOnce")]),e._v(" "),t("h2",{attrs:{id:"组件机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件机制"}},[e._v("#")]),e._v(" 组件机制")]),e._v(" "),t("p",[e._v("vue.component()")]),e._v(" "),t("p",[e._v("组件注册使用extends方法将配置转化为构造函数并添加到components选项")]),e._v(" "),t("p",[e._v("创建根组件,首次render()时,会得到整棵树的Vnode结构\n整体流程: new Vue() => $mount() => vm._render() => createdElement() => createComponent()")]),e._v(" "),t("p",[e._v("事件处理程序: 生成on{'ckick':'onClick'}")]),e._v(" "),t("ol",[t("li",[e._v("原生事件")])]),e._v(" "),t("ul",[t("li",[e._v("事件也作为属性处理")]),e._v(" "),t("li",[e._v("整体流程 patch() => createElm() => invodeCreateHooks() => updateDOMListteners()")])]),e._v(" "),t("p",[e._v("自定义事件, 自定义事件的真正事件监听者为事件派发者自己,也就是子组件实例, 自定义事件中一定伴随原生事件的监听与处理")]),e._v(" "),t("ul",[t("li",[e._v("整体流程 patch() => createElm() => createComponent() => hook.init() => createComponent() => init() => initEvents() => updateComponentListeners()")])]),e._v(" "),t("ol",[t("li",[e._v("Vue.$on  循环传入的事件,把时间名称和回调函数存入vm._events中")]),e._v(" "),t("li",[e._v("Vue.$once 执行一次并调用$oof进行解绑")]),e._v(" "),t("li",[e._v("Vue.$off 无参数 则清除所有的事件监听 vm._events = Object.create(null)")]),e._v(" "),t("li",[e._v("有参数 则清除对应的事件监听 vm._events[fn] = Object.create(null)")]),e._v(" "),t("li",[e._v("Vue.$emit 发布订阅")])]),e._v(" "),t("p",[e._v("hookEvent")]),e._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Table")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("@hook:")]),e._v("upadte")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),e._v("updateLoading")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("Table")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])}),[],!1,null,null,null);t.default=_.exports}}]);