(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{497:function(e,n,t){"use strict";t.r(n);var s=t(15),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"webpack-编译过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-编译过程"}},[e._v("#")]),e._v(" webpack 编译过程")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("接受一份配置webpack.config.js")])]),e._v(" "),t("li",[t("p",[e._v("分析出入口模块的位置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("* 读取入口模块的内容,分析内容\n* 哪些是依赖\n* 哪些是源码\n\n      * es6,jsx处理需要编译成浏览器能够执行\n* 分析其他模块\n")])])])]),e._v(" "),t("li",[t("p",[e._v("拿到对象的数据结构")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("* 模块路径\n* 处理好内容\n")])])])]),e._v(" "),t("li",[t("p",[e._v("创建bundle.js\n* 启动器函数,来补充代码里可能出现的 module exports require,让浏览器能够顺利的执行")])]),e._v(" "),t("li",[t("p",[e._v("创建bundle.js")])])]),e._v(" "),t("h2",{attrs:{id:"简易版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简易版本"}},[e._v("#")]),e._v(" 简易版本")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('```js\n// webpack.js\nconst fs = require("fs")\nconst path = require("path")\nconst parser = require(\'@babel/parser\')\nconst traverse = require(\'@babel/traverse\').default\n\nconst { transformFromAst } = require("@babel/core")\n\nmodule.exports = class Webpack {\n  constructor(option){\n    const { entry, output } = option\n    this.entry =entry\n    this.output =output\n    this.modules = []\n  }\n  run(){\n    // 拿到入口模块的内容\n    const info = this.parse(this.entry)\n    // 递归分析其他文件\n    this.modules.push(info)\n    for (let i = 0; i <  this.modules.length; i++) {\n      const module =  this.modules[i];\n      const { dependencies } = module\n      if(dependencies) {\n        for (const key in dependencies) {\n          const dependenciesInfo =  this.parse(dependencies[key])\n          this.modules.push(this.parse(dependencies[key]))\n        }\n      }\n    }\n\n    const obj = {}\n    this.modules.forEach( item => {\n      obj[item.entryFile] = {\n        dependencies : item.dependencies,\n        code :item.code\n      }\n    })\n\n    this.file(obj)\n  }\n  parse(entryFile){\n    const content = fs.readFileSync(entryFile, "utf-8")\n    // 生成ast 抽象语法数\n    let ast = parser.parse(content, {\n      sourceType: "module"\n    })\n    // 保存路径\n    const dependencies = {}\n    traverse(ast, {\n      // 遍历此类的节点\n      ImportDeclaration({node}){\n        // node.source.value 引入模块的相对路径\n        // path.dirname(entryFile) 相对项目的根路径\n        let pathName = path.join( path.dirname(entryFile), node.source.value)\n        dependencies[node.source.value] = pathName\n      }\n    })\n    const { code } = transformFromAst(ast, null, {\n      presets: ["@babel/preset-env"]\n    })\n    // code\n    // "use strict";\n    // var _a = _interopRequireDefault(require("./a.js"));\n    // function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n    return {\n      entryFile,\n      dependencies,\n      code\n    }\n  }\n\n  file(code) {\n    // 创建自运行函数, 处理 require, module, exports\n    // 生成main.js 放到 dist目录下\n    let filePath = path.join( this.output.path,this.output.filename)\n    const stringCode = JSON.stringify(code)\n    const bundle = `(\n      function (graph){\n        function require(module){\n          function _require( _path ){\n            return require(graph[module].dependencies[_path])\n          }\n          var exports = {};\n          (function(require, exports, modulecode){\n            eval(modulecode)\n          })(_require, exports, graph[module].code)\n        }\n        require(\'${this.entry}\')\n      })(${stringCode})`\n\n    fs.writeFileSync(filePath, bundle, \'utf-8\')\n  }\n}\n\n// bundle.js\nconst config = require("./webpack.config")\nconst Webpack = require("./lib/webpack")\nnew Webpack(config).run()\n```\n')])])]),t("h2",{attrs:{id:"构建流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建流程"}},[e._v("#")]),e._v(" 构建流程")]),e._v(" "),t("p",[e._v("webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),e._v(" "),t("ul",[t("li",[e._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；")]),e._v(" "),t("li",[e._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；")]),e._v(" "),t("li",[e._v("确定入口：根据配置中的 entry 找出所有的入口文件")]),e._v(" "),t("li",[e._v("编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；")]),e._v(" "),t("li",[e._v("完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；")]),e._v(" "),t("li",[e._v("输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；")]),e._v(" "),t("li",[e._v("输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。")]),e._v(" "),t("li",[e._v("在以上过程中，webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 webpack 提供的 API 改变 webpack 的运行结果。")])]),e._v(" "),t("h2",{attrs:{id:"手写一个loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写一个loader"}},[e._v("#")]),e._v(" 手写一个loader")]),e._v(" "),t("p",[e._v("Loader就是一个函数,拿到模块内容进行转换")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```js\n  // webpack.config.js\n  // 指定loader寻找的目录\n  resolveLoader: {\n    modules: ['node_modules', './myloader']\n  }\n\n  module.exports = function (source, ast, map) {\n    // this\n    //  this.query拿到外部传入的参数\n    console.log(this, this.query, source)\n\n    return source.replace('loader', 'webpack')\n    // callback，我们看上面的代码，只是返回了一个替换后的结果，想返回其他值的话，我们就需要用到callback了\n    // this.callback(\n    //   err: Error | null, // 错误信息\n    //   content: string | Buffer, // 最终生成的源码\n    //   sourceMap?: SourceMap, // 对应的sourcemap\n    //   meta?: any // 其他额外的信息\n    // );\n    // 异步 传递给下一个loader  最后一个loader要有return\n     const callback = this.async()\n    setTimeout(() => {\n        const result = source.replace('loader', options.name)\n        // this.callback(null, result)\n        callback(null, result) // 实际上为this.callback\n    }, 1000)\n  }\n```\n")])])]),t("h2",{attrs:{id:"手写一个plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手写一个plugin"}},[e._v("#")]),e._v(" 手写一个plugin")]),e._v(" "),t("p",[e._v("在webpack运行的声明周期中会广播许多事件，plugin可以监听这些事件，在特定的时刻调用webpack提供的API执行相应的操作。webpack在打包前会去调用所有插件的apply方法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("```js\nclass firstPlugin {\n  constructor (options) {\n    console.log('firstPlugin options', options)\n  }\n  apply (compiler) {\n    compiler.plugin('done', compilation => {\n      console.log('firstPlugin')\n    ))\n  }\n}\n\nmodule.exports = firstPlugin\n```\n")])])]),t("ul",[t("li",[e._v("compiler 对象包含了 Webpack 环境所有的的配置信息。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。")]),e._v(" "),t("li",[e._v("compilation对象包含了当前的模块资源、编译生成资源、变化的文件等。当运行webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。")])])])}),[],!1,null,null,null);n.default=r.exports}}]);