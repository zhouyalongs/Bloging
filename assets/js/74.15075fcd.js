(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{403:function(v,_,a){"use strict";a.r(_);var t=a(4),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"前端性能优化的难点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化的难点"}},[v._v("#")]),v._v(" 前端性能优化的难点")]),v._v(" "),_("p",[v._v("在实际工作当中，前端性能优化往往比较繁杂，防布局抖动、HTML 优化、CSS 优化、图片加载优化等等，许多细节都需要顾及。而想要学习和掌握前端性能优化，人们会有许多难点。")]),v._v(" "),_("h3",{attrs:{id:"第一个难点-成体系的性能优化资料严重缺失"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一个难点-成体系的性能优化资料严重缺失"}},[v._v("#")]),v._v(" 第一个难点：成体系的性能优化资料严重缺失")]),v._v(" "),_("p",[v._v("市面上的“武器库”有很多，你 Google 搜索性能优化体系会出来很多站点，里面提到各种各样的优化思路，如缓存请求、服务端响应优化、页面解析与处理、静态资源优化等。但这些优化手段充其量只是性能优化中的一个点或几个点，很难形成一个完整的体系，让人一目了然。")]),v._v(" "),_("p",[v._v("举个例子来说，你通过接入离线包来对页面进行优化，使用这种优化方式的目的是什么，围绕什么指标做的优化，优化完有什么收益，你看完那些资料之后还是回答不了这几个问题。")]),v._v(" "),_("h3",{attrs:{id:"第二个难点-性能监控预警平台没有开源-需要自己去开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二个难点-性能监控预警平台没有开源-需要自己去开发"}},[v._v("#")]),v._v(" 第二个难点：性能监控预警平台没有开源，需要自己去开发")]),v._v(" "),_("p",[v._v("有一定优化经验的前端工程师都知道，性能优化的一个重中之重在于性能监控预警平台。通过它，我们可以第一时间发现问题。但这么一个重要工具，需要你自己去开发。")]),v._v(" "),_("p",[v._v("有人说了，市面上不是有类似 7 天开发一个监控平台这样的教程文章，它不行吗？不行！虽然里面提到一些方法步骤，但如何与公司现有前端性能基建对接，性能平台上包含哪些东西，需要对哪些内容做预警，应该设定什么样的预警策略，等等，这些关键问题并没有任何资料提及。")]),v._v(" "),_("h3",{attrs:{id:"第三个难点-实践中有许多坑-别人并不会公开分享"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三个难点-实践中有许多坑-别人并不会公开分享"}},[v._v("#")]),v._v(" 第三个难点：实践中有许多坑，别人并不会公开分享")]),v._v(" "),_("p",[v._v("前端指标的制定、采集和上报，你在网上会看到一些资料，比如行业会议上阿里巴巴分享的采集方案，但是实践过程中，会有各种各样的坑，这个坑别人是不会分享的。")]),v._v(" "),_("p",[v._v("比如说，有一个搜索页面，用户在页面还没加载完成的时候，发起了搜索。这时候，你会发现采集到的首屏时间比实际的要长很多。又比如，采集到的异常数据该怎么处理，上报策略怎么设定，这些需要多次趟坑才能了解到。")]),v._v(" "),_("h3",{attrs:{id:"第四个难点-性能优化立项沟通"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第四个难点-性能优化立项沟通"}},[v._v("#")]),v._v(" 第四个难点：性能优化立项沟通")]),v._v(" "),_("p",[v._v("性能优化中的立项是个难题，如何从业务的角度来思考性能优化的价值，并说服业务去发起这个项目，这中间有很多的方法。但这些方法你很难通过自己短期思考去获得，而在市面上也很难找到这样的知识。")]),v._v(" "),_("p",[v._v("比如立项正推和反推。所谓正推，就是性能线索 -> 性能问题 -> 性能优化方案 -> 性能收益 ，根据这个思路来开展立项沟通；反推是预估需要的性能收益 -> 性能优化方案 -> 性能问题 -> 性能线索，以此来确定立项。")]),v._v(" "),_("h2",{attrs:{id:"性能优化体系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化体系"}},[v._v("#")]),v._v(" 性能优化体系")]),v._v(" "),_("p",[v._v("它主要包括三部分：性能优化流程、性能指标采集及上报、性能监控预警平台。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/performance/system.png",alt:"system"}})]),v._v(" "),_("h3",{attrs:{id:"第一部分-性能优化流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第一部分-性能优化流程"}},[v._v("#")]),v._v(" 第一部分，性能优化流程")]),v._v(" "),_("p",[v._v("对应图中灰色部分，主要包括性能指标设定、性能标准确定、收益评估、诊断清单、优化手段、性能立项、性能实践。")]),v._v(" "),_("p",[v._v("其中，性能指标设定，说的是我们要选择什么样的指标。比如页面打开慢，我们想要优化它，该从哪些地方入手，优化完后怎么知道问题解决了？这些就需要明确的指标来衡量。")]),v._v(" "),_("p",[v._v("在设定指标之后，接下就是确定性能标准。也就是我们性能优化目标是怎样的，优化到什么程度合适。例如，我们要优化 App 里面的 H5 页面打开速度，确定的指标是秒开率，那一秒内可以打开的请求比例就是它的性能标准。")]),v._v(" "),_("p",[v._v("如果仅仅判断性能指标是否优化到位还好，但很多时候，为了让产品同学感觉我们是为产品服务，而不是又在造轮子，我们还需要关联产品目标进行收益评估。比如，列表页到详情页的转化率能不能提升？用户跳出率可不可降低？")]),v._v(" "),_("p",[v._v("接下来，我们就可以把业务代码接入性能监控预警平台，根据性能标准给出诊断清单。假如诊断出性能问题，我们就可以结合性能标准和诊断清单，确定相应的优化手段。")]),v._v(" "),_("p",[v._v("接着该落地实践了吗？不。还要有个性能项目立项。不要小视了这个环节哦，这是你赢得产品经理、后端同事支持，让优化顺利执行下去不可或缺的内容。许多人就是忽略了这一点，导致优化迟迟无法落地。")]),v._v(" "),_("p",[v._v("最后是性能实践，即经过优化之后发起项目上线，并跟踪进行效果评估，结合场景把这些项目成果以文档或代码的形式沉淀下来，给后来者使用参考。")]),v._v(" "),_("p",[v._v("不要小看这个沉淀文档的重要性，攻城不易，守城更难，制订优化实践，确保新人也可以执行，是优化成果得以长期保持的必要保障。比如之前有个同事通过懒加载解决了滚动列表下拉慢的问题，后来的新同事再遇到同样问题，就可以通过查看这个文档快速解决。")]),v._v(" "),_("h3",{attrs:{id:"第二部分-性能指标采集与上报"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第二部分-性能指标采集与上报"}},[v._v("#")]),v._v(" 第二部分，性能指标采集与上报")]),v._v(" "),_("p",[v._v("对应着图中紫色部分，它的主要内容是把前面提到的性能指标以代码的形式分解落地，确保可以采集，然后在 SDK 封装后集合统计埋点，最后根据实际情况，制定上报策略。")]),v._v(" "),_("p",[v._v("在上报之前，我们还需要注意将一些“脏数据”（也就是明显异常的数据）丢弃掉，避免占用用户网络带宽。")]),v._v(" "),_("h3",{attrs:{id:"第三部分-性能监控预警平台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第三部分-性能监控预警平台"}},[v._v("#")]),v._v(" 第三部分，性能监控预警平台")]),v._v(" "),_("p",[v._v("对应图中橙色部分，主要是通过分析上一步采集到的性能数据，再对比性能标准进行监控。当指标超过某一监控阈值时，性能监控预警平台会通过邮件或者短信，给我们发送预警信息。")]),v._v(" "),_("p",[v._v("在构造上，性能监控预警平台包括：性能数据处理后台和性能可视化展现前台两部分。")]),v._v(" "),_("p",[v._v("其中，性能数据处理后台，主要是在性能采集数据上报到性能平台后，对数据进行预处理、数据清洗和数据计算，然后生成前台可视化所需数据。")]),v._v(" "),_("p",[v._v("性能可视化展现前台包括性能展示、性能监控预警，主要是对核心数据指标进行可视化展现，对性能数据波动进行监控，对超出阈值的数据给出短信或邮件报警。\n如何设定性能关键指标？\n这里，我也分两部分来介绍，一个是关注什么样的指标，一个是关键指标的设定及标准。")]),v._v(" "),_("h2",{attrs:{id:"什么样的指标值得我们关注"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么样的指标值得我们关注"}},[v._v("#")]),v._v(" 什么样的指标值得我们关注？")]),v._v(" "),_("p",[v._v("根据我的经验和业界情况，要确定关键的性能指标，必须满足两点：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("可衡量，就是可以通过代码来度量；")])]),v._v(" "),_("li",[_("p",[v._v("关注以用户为中心的关键结果和真实体验。")])])]),v._v(" "),_("p",[v._v("第一点好理解，无法衡量就无法优化，而第二点说的“关键结果和真实体验”是什么意思呢？")]),v._v(" "),_("p",[v._v("所谓关键结果，就是用户真正关心什么。举例来说，当用户进入商品详情页面，他关心的是这个商品怎么样，什么价格，具体到页面上就是商品描述、商品头图、商品价格和购买按钮这些关键信息。我们要保证无论什么情况下都能让用户看到这些信息。")]),v._v(" "),_("p",[v._v("而真实体验，就是用户使用产品的感受。比如当用户进入列表页，在滑动过程中，页面加载突然跳出一个弹窗，他会不会觉得烦？这就是一种真实体验。")]),v._v(" "),_("p",[v._v("所以，基于这两点，在性能指标方面，我选定加载、交互性和视觉稳定性这三个方向，来带你一起了解性能指标及其标准设定。")]),v._v(" "),_("h3",{attrs:{id:"性能优化关键指标设定及标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化关键指标设定及标准"}},[v._v("#")]),v._v(" 性能优化关键指标设定及标准")]),v._v(" "),_("p",[v._v("所谓加载，就是进入页面时，页面内容的载入过程。比如，当你打开一些网站时，你会发现，有的网站首页上的文字、图片出现很缓慢，而有的则很快，这个内容出现的过程就是加载。加载缓慢严重消耗用户的耐心，会让用户离开页面。")]),v._v(" "),_("p",[v._v("所谓交互，就是用户点击网站或 App 的某个功能，页面给出的回应。比如我们点击了一个“点赞”按钮，立刻给出了点赞数加一的展示，这就是交互体验好，反之如果很长时间都没回应，这就是交互体验不好。")]),v._v(" "),_("p",[v._v("视觉稳定性指标，我们叫它 CLS（Cumulative Layout Shift），也就是布局偏移量，它是指页面从一帧切换到另外一帧时，视线中不稳定元素的偏移情况。")]),v._v(" "),_("p",[v._v("比如，你想要购买的商品正在参加抢购活动，而且时间快要到了。在你正要点击页面链接购买的时候，原来的位置插入了一条 9.9 元包邮的商品广告。结果会怎样？你点成了那个广告商品。如果等你再返回购买的时候，你心仪商品的抢购活动结束了，你是不是很气？所以，CLS也非常重要。")]),v._v(" "),_("p",[v._v("在性能优化关键指标方面，目前业界主要集中在加载方面，特别是白屏时间和首屏时间。它们直接和用户体验相关，且相关的衡量标准已经达成共识。在采集方式上，除了手动采集之外，还可以自动化采集。而交互性和视觉稳定性关键指标，业界还在探索，没有统一的衡量标准，且必须手动采集。")]),v._v(" "),_("p",[v._v("比如交互方面，有的公司用 FID 指标 （First Input Delay，首次输入延迟）， 指标必须尽量小于 100ms，如果过长会给人页面卡顿的感觉。还有的公司使用 PSI（Perceptual Speed Index，视觉变化率），衡量标准是小于20%。")]),v._v(" "),_("p",[v._v("而视觉稳定性指标CLS 比较前沿，2020 年 5 月 Google 公司才发布了一篇文章关于 CLS 指标定义及相关介绍的文章。它的采集方法，除了依赖 Google 的 Lighthouse 做本地采集，目前还没有好的方案。在应用上，其他公司或者沿用 Google 的或者很少使用。")]),v._v(" "),_("p",[v._v("因为这两个方向还没统一的标准，我们也在实验，就不赘述了，接下来我就重点介绍这目前已经确定的加载关键指标，具体就是白屏时间和首屏时间的设定及其标准。")]),v._v(" "),_("p",[v._v("什么叫白屏时间呢？它指的是从输入内容回车（包括刷新、跳转等方式）后，到页面开始出现第一个字符的时间。这个过程包括 DNS 查询，建立 TCP 连接，发送首个HTTP请求（如果使用HTTPS还要介入 TLS 的验证时间），返回HTML文档，HTML文档 Head 解析完毕。它的标准时间是 300ms。")]),v._v(" "),_("p",[v._v("如果白屏时间过长，用户会认为我们的页面不可用，或者可用性差。如果超过一定时间（如 1s），用户注意力就会转移到其他页面。")]),v._v(" "),_("p",[v._v("哪些因素会导致白屏时间过长？原因有很多，有可能是 DNS 查询时间长，建立 TCP 请求链接太慢，或者是服务器处理请求速度太慢，客户端下载、解析、渲染时长过长，没有做 Gzip 压缩，缺乏本地离线化处理，等等。")]),v._v(" "),_("p",[v._v("接下来我们看首屏时间，它是怎么计算的？")]),v._v(" "),_("p",[v._v("首屏时间=白屏时间+渲染时间。它是指从浏览器输入地址并回车后，到首屏内容渲染完毕的时间。这期间不需要滚动鼠标或者下拉页面，否则无效。")]),v._v(" "),_("p",[v._v("怎么理解呢？我们来看，下面是网站速度和性能优化 GTmetrix 官网的一个首屏时间示意图。从开始加载到第二帧时，这段时间是白屏时间，到第三帧时，首屏才开始加载，到第四帧结束时，这段时间是首屏时间。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/performance/Drawing_1.png",alt:"Drawing1.png"}})]),v._v(" "),_("h3",{attrs:{id:"首屏时间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首屏时间"}},[v._v("#")]),v._v(" 首屏时间")]),v._v(" "),_("p",[v._v("在加载性能指标方面，相比于白屏时间，首屏时间更重要。为什么？")]),v._v(" "),_("p",[v._v("从重要性角度看，打开页面后，第一眼看到的内容一般都非常关键，比如电商的头图、商品价格、购买按钮等。这些内容即便在最恶劣的网络环境下，我们也要确保用户能看得到。")]),v._v(" "),_("p",[v._v("从体验完整性角度看，进入页面后先是白屏，随着第一个字符加载，到首屏内容显示结束，我们才会认为加载完毕，用户可以使用了。")]),v._v(" "),_("p",[v._v("白屏加载完成后，仅仅意味着页面内容开始加载，但我们还是没法完成诸如下单购买等实际操作，首屏时间结束后则可以。")]),v._v(" "),_("p",[v._v("首屏时间的标准，最初只是根据这个页面对时间是否敏感来判定，主要以用户平均首屏加载时间来计算，并没有详细区分 2G/3G/4G/WiFi 这些网络环境。比如，下图是我 2011 年在百度文库做性能优化项目时，跟团队定的性能标准。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/performance/Drawing_2.png",alt:"Drawing2.png"}})]),v._v(" "),_("h3",{attrs:{id:"白屏首屏早期标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#白屏首屏早期标准"}},[v._v("#")]),v._v(" 白屏首屏早期标准")]),v._v(" "),_("p",[v._v("如果一个站点对时间敏感，首屏时间在 1s 内，用户感觉会很快；如果首屏时间超过 2.5s，用户就会感觉很慢。但是在 1s 内打开页面，人们对这么短的时间并不敏感，体验不出 10ms 和 50ms 有什么差别。")]),v._v(" "),_("p",[v._v("但当到了 2G/3G 弱网环境，或者网络不稳定的环境（如坐火车或乘飞机时），用户联网加载的时间会特别长，严重影响整体指标。就好像 100 个穷人和马云一起，看平均资产差不多每人 5 个亿，但实际上多数人并没有那么多钱。性能也如此，前端工程师在使用过程中，越来越觉得用平均值来表示加载时间并不准确可靠。")]),v._v(" "),_("p",[v._v("于是，人们又开始采用中位数，做正态分布，看分位值统计。在对首屏时间进行数据分析和可视化展现时，经常用到的是 P50（50分位值）、P90（90分位值）、P99（99分位值）。它们是怎么得出的呢？以 P99 为例，我们是把所有首屏时间排序，得出排在第 99 位的首屏时间就是 P99。")]),v._v(" "),_("p",[v._v("不过这样处理起来还是比较麻烦，后来为了计算简单，也便于理解，我们引入了秒开率的指标，即 1s 内打开用户的占比。这个概念最早来自阿里巴巴，后来被业界普遍采用。")]),v._v(" "),_("p",[v._v("下面是我在带领团队做 App 性能优化项目时，按照秒开率建立的首屏时间标准。")]),v._v(" "),_("p",[_("img",{attrs:{src:"/performance/Drawing_3.png",alt:"Drawing3.png"}})]),v._v(" "),_("h3",{attrs:{id:"首屏时间秒开率标准"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首屏时间秒开率标准"}},[v._v("#")]),v._v(" 首屏时间秒开率标准")]),v._v(" "),_("p",[v._v("可以说，性能指标和标准建立到这里，已经 OK了，业界能做到这一点的公司屈指可数。")]),v._v(" "),_("p",[v._v("但还有一个问题，首屏时间毕竟粒度太粗了，如果首屏时间长，白屏时间短，到底是哪里的问题？是数据接口的问题，还是页面渲染问题？所以我们还必须把这个指标进一步拆解细化。")]),v._v(" "),_("p",[v._v("首屏时间可以拆分为白屏时间、数据接口响应时间、图片加载资源等。 白屏时间前面已经提到了，数据接口响应时间可以直接从后端服务中获取，不需要前端再重复计算，我们只需取完放在性能平台即可。最后的图片资源需要我们单独采集。")]),v._v(" "),_("p",[v._v("以上就是前端性能体系中的关键指标，还有一些不太重要的指标，如卡顿、完全加载时间、资源加载时间等。")]),v._v(" "),_("h2",{attrs:{id:"web-前端都有哪些性能瓶颈点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web-前端都有哪些性能瓶颈点"}},[v._v("#")]),v._v(" Web 前端都有哪些性能瓶颈点")]),v._v(" "),_("p",[v._v("在浏览器输入 URL 并回车后，为了把 URL 解析为 IP 地址，浏览器会向 DNS 服务器发起 DNS 查询，获取 IP 地址。然后浏览器通过 IP 地址找到目标服务器，发起 TCP 三次握手和 TLS 协商，从而建立起 TCP 连接。")]),v._v(" "),_("p",[v._v("在建立连接后，浏览器就可以发起 HTTP 请求，而服务端接收到后，对请求进行响应。浏览器从响应结果中拿到数据，并进行解析和渲染，最后在用户面前就出现了一个网页。")]),v._v(" "),_("p",[v._v("以上的整个过程大致可以分为三个阶段：客户端发起请求阶段、服务端数据处理请求阶段、客户端页面渲染阶段。")]),v._v(" "),_("h3",{attrs:{id:"客户端请求阶段的瓶颈点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#客户端请求阶段的瓶颈点"}},[v._v("#")]),v._v(" 客户端请求阶段的瓶颈点")]),v._v(" "),_("p",[v._v("客户端发起请求阶段，是指用户在浏览器输入 URL，经过本地缓存确认是否已经存在这个网站，如果没有，接着会由 DNS 查询从域名服务器获取这个 IP 地址，接下来就是客户端通过 TCP 的三次握手和TLS协商向服务器发起 HTTP 请求建立连接的过程。")]),v._v(" "),_("p",[v._v("在这个过程中，本地缓存、DNS查询、HTTP 请求很容易成为影响前端性能的瓶颈点。")]),v._v(" "),_("h4",{attrs:{id:"本地缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#本地缓存"}},[v._v("#")]),v._v(" 本地缓存")]),v._v(" "),_("p",[v._v("为什么说本地缓存会成为前端性能的瓶颈点之一呢？")]),v._v(" "),_("p",[v._v("我们知道，本地缓存可以让静态资源加载更快，当客户端发起一个请求时，静态资源可以直接从客户端中获取，不需要再向服务器请求。而想要让本地缓存发挥这个作用，就需要先在服务器上进行配置。")]),v._v(" "),_("p",[v._v("但在实际当中，许多前端同学往往会忽视这点。这会出现一个什么情况呢？")]),v._v(" "),_("p",[v._v("以 58 同城的列表页项目为例，在客户端请求阶段，DNS 查询时间大概是 385 ms，TCP 三次握手及 TLS 协商时间 436 ms，数据返回 412 ms。一个请求下来大约是 1233 ms，这还是强网（WIFI/4G）情况下。如果是弱网（3G/2G）情况，一个请求连接都需要 2s 。但使用缓存的话，几乎可以说是几毫秒内完成请求，对比非常明显。")]),v._v(" "),_("p",[v._v("怎么实现本地缓存呢？")]),v._v(" "),_("p",[v._v("本地缓存一般包括强缓存和协商缓存两种形式。")]),v._v(" "),_("p",[v._v("强缓存是指浏览器在加载资源时，根据请求头的 expires 和 cache-control 判断是否命中客户端缓存。如果命中，则直接从缓存读取资源，不会发请求到服务器，反之还需要走完整的资源请求流程。")]),v._v(" "),_("p",[v._v("协商缓存是指，浏览器会先发送一个请求到服务器，通过 last-modified 和 etag 验证资源是否命中客户端缓存。如果命中，服务器会将这个请求返回，但不会返回这个资源的数据，依然是从缓存中读取资源。 如果没有命中，无论是资源过期或者没有相关资源，都需要向服务器发起请求，等待服务器返回这个资源。")]),v._v(" "),_("h4",{attrs:{id:"dns-查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns-查询"}},[v._v("#")]),v._v(" DNS 查询")]),v._v(" "),_("p",[v._v("DNS 之所以会成为前端性能瓶颈点，是因为每进行一次 DNS 查询，都要经历从手机到移动信号塔，再到认证 DNS 服务器的过程。这中间需要很长的时间。但用户是不想等待的。")]),v._v(" "),_("p",[v._v("想要节省时间，一个办法就是让 DNS 查询走缓存。幸好浏览器提供了 DNS 预获取的接口，我们可以在打开浏览器或者 WebView 的同时就进行配置。这样真正请求时，DNS 域名解析可以检查一下浏览器缓存，一旦缓存命中，就不需要去 DNS 服务器查询了。")]),v._v(" "),_("h4",{attrs:{id:"http-请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-请求"}},[v._v("#")]),v._v(" HTTP 请求")]),v._v(" "),_("p",[v._v("在 HTTP 请求阶段，最大的瓶颈点来源于请求阻塞。所谓请求阻塞，就是浏览器为保证访问速度，会默认对同一域下的资源保持一定的连接数，请求过多就会进行阻塞。")]),v._v(" "),_("p",[v._v("那么，浏览器同域名的连接数限制是多少呢？一般是 6 个。如果当前请求书多于 6 个，只能 6 个并发，其余的得等最先返回的请求后，才能做下一次请求。")]),v._v(" "),_("p",[v._v("所以我们在项目之初，做一些域名规划很重要。我们可以先看看当前页面需要用到哪些域名，最关键的首屏中需要用到哪些域名，规划一下这些域名发送的顺序。")]),v._v(" "),_("p",[v._v("除了域名规划，为了解决同域名下的阻塞问题，还可以做域名散列，通过不同的域名，增加请求并行连接数。常见做法是，将静态服务器地址 pic.google.com，做成支持 pic0-5 的 6 个域名，每次请求时随机选一个域名地址进行请求。因为有 6 个域名同时可用，最多可以并行 36 个连接。当然，这个域名个数不是越多越好，太分散的话，又会涉及多域名之间无法缓存的问题。")]),v._v(" "),_("h3",{attrs:{id:"服务端数据处理阶段的瓶颈点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务端数据处理阶段的瓶颈点"}},[v._v("#")]),v._v(" 服务端数据处理阶段的瓶颈点")]),v._v(" "),_("p",[v._v("服务端数据处理阶段，是指 WebServer 接收到请求后，从数据存储层取到数据，再返回给前端的过程。")]),v._v(" "),_("p",[v._v("具体来说，服务端程序接收到 HTTP 请求后，会做一些请求参数处理以及权限校验。校验完成后，它会将请求参数发送到数据存储服务。然后服务端程序会从数据存储中取到数据，进行数据加工聚合处理，最后再通过 jsonp 或者 ajax 接口返回给前端。")]),v._v(" "),_("p",[v._v("这个过程中的瓶颈点，就在于是否做了数据缓存处理、是否做了 Gip 压缩，以及是否有重定向。")]),v._v(" "),_("p",[v._v("其中，Gzip 压缩是一种压缩技术，服务器端通过使用 Gzip，传输到浏览器端的文本类资源（有别于图片等二进制等资源）的大小可以变为原来的 1/3 左右。因此通过 Gzip 压缩，资源的下载速度会快很多，能大大提升页面的展示速度。")]),v._v(" "),_("p",[v._v("因为多数情况下，运维团队都会默认开启 Gzip 压缩，所以在这里我就不展开介绍了，接下来我会重点介绍一下数据缓存和重定向，这两个瓶颈点。")]),v._v(" "),_("h4",{attrs:{id:"数据缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数据缓存"}},[v._v("#")]),v._v(" 数据缓存")]),v._v(" "),_("p",[v._v("数据缓存分为两种：借助 Service Worker 的数据接口缓存、借助本地存储的接口缓存和CDN（Content Delivery Network，内容分发网络）")]),v._v(" "),_("p",[v._v("其中 Service Worker 是浏览器的一个高级属性，本质上是一个请求代理层，它存在的目的就是拦截和处理网络数据请求。如果没有 Service Worker，请求每次直接落到 WebServer 上，需要走一次后端数据存取链路的流程，这会延长页面打开时间。")]),v._v(" "),_("p",[v._v("借助本次存储的接口缓存是指，在一些对数据时效性要求不高的页面，第一次请求到数据后，程序将数据存储到本地存储（store 或者 localStorage、甚至客户端本身的存储），下一次请求的时候，先去缓存里面取将取数据，如果没有的话，再向服务器发起请求。")]),v._v(" "),_("p",[v._v("所谓 CDN，它的基本思路是，通过在网络各处放置节点服务器，构造一个智能虚拟网络，将用户的请求导向离用户最近的服务节点上")]),v._v(" "),_("p",[v._v("比如，一个深圳的用户想要访问京东电商首图的资源，如果没有使用 CDN ，图片服务器有可能在北京。但如果使用了CDN 的话，因为 CDN 的节点遍布全国，它就可以选择距离深圳最近的节点返回首图数据。")]),v._v(" "),_("p",[v._v("为什么数据缓存会成为性能瓶颈点呢？这是因为每请求一次数据接口，需要从客户端到后端服务器，再到更后端的数据存储层，一层一层返回数据，最后再给到客户端，耗时很长，如果能够减少一次这个请求，为首屏时间争取了宝贵的时间。")]),v._v(" "),_("h4",{attrs:{id:"重定向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重定向"}},[v._v("#")]),v._v(" 重定向")]),v._v(" "),_("p",[v._v("前面我们介绍了数据缓存是如何影响性能的，接下来我们聊一下另外一个瓶颈点——页面重定向。")]),v._v(" "),_("p",[v._v("所谓重定向，是指网站资源（如表单，整个站点等）迁移到其他位置后，用户访问站点时，程序自动将用户请求从一个页面转移到另外一个页面的过程。")]),v._v(" "),_("p",[v._v("在服务端处理阶段，重定向分为三类：服务端发挥的302重定向，META 标签实现的重定向和前端 Javasript 通过window.location 实现的重定向。")]),v._v(" "),_("p",[v._v("它们都会引发新的 DNS 查询，导致新的 TCP 三次握手和 TLS 协商，以及产生新的 HTTP 请求。而这些都会导致请求过程中更多的时间，进而影响前端性能。所以重定向也是一个需要注意的性能瓶颈点，在优化的时候需要注意。")]),v._v(" "),_("h3",{attrs:{id:"页面解析和渲染阶段的瓶颈点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面解析和渲染阶段的瓶颈点"}},[v._v("#")]),v._v(" 页面解析和渲染阶段的瓶颈点")]),v._v(" "),_("p",[v._v("在页面加载过程中，当前服务端对数据加工聚合处理后，客户端拿到数据，接下来就会进入解析和渲染阶段。")]),v._v(" "),_("p",[v._v("所谓解析，就是 HTML 解析器把页面内容转换为 DOM 树和 CSSOM树的过程。")]),v._v(" "),_("p",[v._v("什么叫 DOM 树呢？DOM 树全称为 Document Object Model 即文档对象模型，它描述了标签之间的层次和结构。HTML 解析器通过词法分析获得开始和结束标签，生成相应的节点和创建节点之间的父子关系结构，直到完成 DOM 树的创建。")]),v._v(" "),_("p",[v._v("而 CSSOM 树，即 CSS 对象模型。主要描述样式集的层次和结构，HTML 解析器遇到内联的 style 标签时，会触发 CSS 解析器对样式内容进行解析，与上面解析器解析 HTML 过程类似，CSS 解析器遍历其中每个规则，将 CSS 规则解析浏览器可解析和处理的样式集合，最终结合浏览器里面的默认样式，汇总形成具有父子关系的 CSSOM 树。")]),v._v(" "),_("p",[v._v("解析完后就是渲染。主线程会计算 DOM 节点的最终样式，生成布局树。布局树会记录参与页面布局的节点和样式。完成布局后，紧跟着就是绘制。绘制就是把各个节点绘制到屏幕上的过程，绘制结果以层的方式保存。当文档中各个部分以不同的层绘制时，相互重叠时，就必须进行合成，以确保他们可以以正确的顺序绘制和展示。")]),v._v(" "),_("p",[v._v("以上就是解析和渲染阶段，这个阶段流程环节多，逻辑复杂，瓶颈点也多，比如，DOM 树构建过程，CSSOM 树生成阶段，重排和重绘过程等。但因为篇幅所限，在这里我会重点介绍一下 DOM 树构建和布局两个环节的瓶颈点。")]),v._v(" "),_("h4",{attrs:{id:"构建-dom-树的瓶颈点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#构建-dom-树的瓶颈点"}},[v._v("#")]),v._v(" 构建 DOM 树的瓶颈点")]),v._v(" "),_("p",[v._v("解析器构建 DOM 树的过程中，有三点会严重影响前端性能。")]),v._v(" "),_("p",[v._v("一个是当 HTML 标签不满足 Web 语义化时，浏览器就需要更多时间去解析 DOM 标签的含义。特别解析器是对标签的容错，比如将 "),_("code",[v._v("<br>")]),v._v(" 写成了"),_("code",[v._v("</br>")]),v._v("，又或者表格嵌套不标准，标签层次结构复杂等。遇到这些情况时，浏览器会进行语法纠错。这就会导致页面总的解析和渲染阶段需要更长的时间，严重影响页面展示性能。")]),v._v(" "),_("p",[v._v("另一个是 DOM 节点的数量越多，构建 DOM 树的时间就会变长，进而延长解析时间，拖慢页面展示速度。")]),v._v(" "),_("p",[v._v("最后一个是文档中包含"),_("code",[v._v("<SCRIPT>")]),v._v(" 标签时的情况。因为无论是 DOM 或者 CSSOM 都可以被 JavaScript 所访问并修改，所以一旦在页面解析时遇到 "),_("code",[v._v("<SCRIPT>")]),v._v(" 标签，DOM 的构造过程就会暂停，等待服务器请求脚本。在脚本加载完成后，还要等取回所有的 CSS 及完成 CSSOM 之后才继续执行。")]),v._v(" "),_("p",[v._v("这个过程中用户看到的是白色的屏幕。因此外部"),_("code",[v._v("<SCRIPT>")]),v._v(" 常被称为“解析”阶段的拦路虎。有时就因为解析过程中多了一个 "),_("code",[v._v("<SCRIPT>")]),v._v("，造成页面解析阶段从 200ms 变为 1s。")]),v._v(" "),_("p",[v._v("所以，外部脚本的加载时机一定要确定好，能够延迟加载就选用延迟加载。另外，我们可以通过使用 defer 和 async，告诉浏览器在等待脚本下载期间不阻止解析过程，这样做可以明显提升性能。")]),v._v(" "),_("h4",{attrs:{id:"布局中的瓶颈点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布局中的瓶颈点"}},[v._v("#")]),v._v(" 布局中的瓶颈点")]),v._v(" "),_("p",[v._v("在布局阶段，浏览器会根据样式解析器给出的样式规则，来计算某个元素需要占据的空间大小和屏幕中的位置（比如电商详情页一张 banner图片的高度、宽度和位置），借助结算结果，来进行布局。而主线程布局时，使用的是流模型的布局方式。所谓流模型，就是像水流一样，需要从左到右，从上到下遍历一遍所有元素。")]),v._v(" "),_("p",[v._v("假设我们在页面渲染过程运行时修改了一个元素的属性，比如在电商的商品详情页加入一条广告数据。这时布局阶段受到了影响。浏览器必须检查所有其他区域的元素，然后自动重排页面，受到影响的元素需要重新绘制，最后还得合成，相当于整个渲染流程再来了一遍。")]),v._v(" "),_("p",[v._v("除此之外，因为浏览器每次布局计算都要作用于整个 DOM，如果元素量大，计算出所有元素的位置和尺寸会花很长的时间。所以布局阶段很容易成为性能瓶颈点。")]),v._v(" "),_("p",[v._v("说一个我之前实际工作中遇到的布局问题。在做 58 列表页性能优化项目时，我们一开始布局的时候，并没有确定列表页图片的初始大小，只给定了一个基础的占位尺寸。这就导致了，当图片加载完毕后，主线程才知道了图片的大小，不得不重新进行布局计算，然后再次进行页面渲染，也就是重排或重绘，无疑这大大延长了页面展示时间。")]),v._v(" "),_("p",[v._v("小结")]),v._v(" "),_("p",[_("img",{attrs:{src:"/performance/web_url_load.png",alt:"小结1"}})]),v._v(" "),_("h2",{attrs:{id:"案例分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#案例分析"}},[v._v("#")]),v._v(" 案例分析")]),v._v(" "),_("h3",{attrs:{id:"性能立项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能立项"}},[v._v("#")]),v._v(" 性能立项")]),v._v(" "),_("p",[v._v("性能立项就是通过成立一个项目组，用项目化的运作方式来解决性能问题。整个立项流程包括团队成员确定、技术调研开展、项目目标制定、获取业务侧支持、项目名字选定，需求范围和优先级确定等过程。")]),v._v(" "),_("p",[v._v("不知道你有没有发现，这个立项不是先定需求范围和优先级，然后再制定项目目标和成立项目团队。为什么呢？")]),v._v(" "),_("p",[v._v("因为这个性能优化项目，是探索性的项目需求。")]),v._v(" "),_("p",[v._v("探索性项目需求，有别于日常的业务项目。业务项目一般都有明确的项目目标和需求修改范围。比如，修改首页金刚位模块，提升首页到列表页的转户率。这个项目，需求文档和 UI 图会给出具体模块修改点、样式、内容等，前端开发完成后，产品和 UI 进行验收即可。而探索性项目需求，目标不确定，一般需要先选定项目团队，做完技术调研，才能确定出项目目标。")]),v._v(" "),_("p",[v._v("因为探索性项目需求中的项目目标制定、获取业务侧支持、项目立项时机这三点和常规项目不太一样，下面我就为你重点介绍一下。")]),v._v(" "),_("h4",{attrs:{id:"项目目标制定"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目目标制定"}},[v._v("#")]),v._v(" 项目目标制定")]),v._v(" "),_("p",[v._v("性能项目的目标制定是一个正推和反推结合的过程。")]),v._v(" "),_("p",[v._v("正推是指，从线索 -> 本质或痛点问题 -> 解决方案 -> 目标。我们寻找到项目线索，找到性能具体问题，试验了解决方案，得到一个结果。")]),v._v(" "),_("p",[v._v("这个项目中，最终项目首屏时间可以减少 10%，对应 VPPV 可以提升 3%。但是我判断，3%的收入提升这个结果对公司来说，吸引力不够，因为平时波动都有 2%，要达成一个“性感”的目标，至少需要提升 10%的收入提升。")]),v._v(" "),_("p",[v._v("什么叫 VPPV 呢？VPPV 就是详情页的 UV 除以列表页的 PV，这个指标和最终收入正相关，通俗一点来说就是，来店里的用户中，有多少最后买了东西。为了方便介绍，这里我省去了VPPV 到广告收入的转化过程，用 VPPV 代替收益。")]),v._v(" "),_("p",[v._v("那么，怎么实现 10% 的收入提升呢？这时候就需要反推的过程。")]),v._v(" "),_("p",[v._v("什么叫反推呢？这是它的过程：从目标->解决方案->本质或痛点->线索。想要 10% 的收入提升（VPPV），至少需要 30% 的性能提升，对应的方案、问题痛点、性能线索都要能支持这个结果。")]),v._v(" "),_("p",[v._v("最后，我把正推和反推结合起来就能得出一个目标，即通过性能提升 30%，实现收入提升 10%。")]),v._v(" "),_("h3",{attrs:{id:"获取业务侧支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取业务侧支持"}},[v._v("#")]),v._v(" 获取业务侧支持")]),v._v(" "),_("p",[v._v("项目目标制定完，接下来就是如何说服业务侧支持这个项目。因为前端团队一般都投入在各个业务方向，要做性能优化，就需要说服业务将部分前端资源投到这个性能优化项目上来。")]),v._v(" "),_("p",[v._v("此时，为了评估值不值得花时间在这上面，前端同学会和你提到项目收益，比如，他会问，加载时间提升了多少，可以学习新技术 react hook，vue3等。")]),v._v(" "),_("p",[v._v("一般业务同事想到项目收益，通常是流量增加多少、转化率提升多少，跳失率降低多少等。要想让对方理解性能优化项目的收益，我们就要了解业务的关注点，从业务的角度去思考，去回答。")]),v._v(" "),_("p",[v._v("以这个项目为例，我们给项目起了名字叫奥林匹亚项目，更高更快更强的意思。")]),v._v(" "),_("p",[v._v("有关它的预期收益，我们最初想的是，通过请求资源优化，将首屏时间提升 30%。后来为了让业务同事更直观理解项目收益，我们就把目标修改成了“通过性能提升 30%，提升页面 VPPV 10%”。")]),v._v(" "),_("p",[v._v("业务看到后面一个目标很有共鸣，觉得我们不是为了自己做一个技术项目，而是实实在在想提升业务体验，帮助达成业务收入指标。")]),v._v(" "),_("h4",{attrs:{id:"立项时机"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#立项时机"}},[v._v("#")]),v._v(" 立项时机")]),v._v(" "),_("p",[v._v("看到这个小标题，你可能要问了，什么时候立项合适，这有什么讲的呀，不是项目之初就开始立项吗？")]),v._v(" "),_("p",[v._v("对此，我的理解是，一定要先做好技术可行性调研，性能优化是横向项目，会涉及多个业务，最好在试点两个业务后，再正式立项。否则，会出现你用了一个列表页筛选优化的方案，适合 A 业务场景，却不适合 B 业务场景的问题。")]),v._v(" "),_("p",[v._v("做完这些后，我们就可以正式开始立项了。以下是我们的立项信息。")]),v._v(" "),_("p",[v._v("投入资源：前端 FE10 人，后端RD 4 人，UI设计 4 人，测试 2 人。\n投入价值：20 人，2 个月，40 人月，约 XXw。\n收获价值：访问量，VPPV 提升 10%，订单提升 8%，约 XXX 万美金/季度。")]),v._v(" "),_("p",[v._v("立项完成后，接下来我们就可以去找性能线索，有针对性地去优化。此时，就需要依赖于性能监控预警平台。")]),v._v(" "),_("p",[v._v("当时我们一开始也想过从 0 到 1 完整做一个性能监控平台，但因为时间和人力关系，只能作罢。最后，我们直接选取了一个运维同事已经在用的一个开源展示平台，来做数据展示，至于具体的数据指标定义和采集，就需要我们自己来做了。")]),v._v(" "),_("h3",{attrs:{id:"性能诊断优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能诊断优化"}},[v._v("#")]),v._v(" 性能诊断优化")]),v._v(" "),_("p",[v._v("有了性能监控平台，也有了性能数据，接下来就是结合页面加载过程，进行性能问题诊断和优化了。")]),v._v(" "),_("p",[v._v("页面加载的性能瓶颈点在上一讲我已经介绍过了，在这里就不多说了。当时我们主要是通过本地缓存方案来减少客户端请求数，同时让运维同事对静态资源配置了合理的过期时间，实现静态资源的强缓存方案。另外还对页面做了 DNS 预解析处理，也对一些广告和帮帮页（58 同城的 WebIM 应用，用于用户的咨询使用）做了懒加载。")]),v._v(" "),_("p",[v._v("为了确保页面解析不会中断，我们还对列表页的加载资源做了处理，也制定了 CSS 相关的规范，确保嵌套层次更少，让规则解析更简单。原先列表页的筛选功能使用的是同步技术，每次完成筛选，整个页面都需要重新加载一次，这一次我们把它修改成了 SPA 单页面应用，每次筛选后，只请求数据接口即可，不用整个页面都请求。")]),v._v(" "),_("p",[v._v("现在回过头来看，列表页改成单页面应用的方案，对我们最终 VPPV 的提升贡献最大，且在当时的情况下，属于比较前沿的解决方案。而弱网下的性能优化，当时我们花了很长时间才发现问题原因，它是当时的一个难点，也是前端优化中的盲区。所以，接下来我向你重点介绍一下这两个。")]),v._v(" "),_("h4",{attrs:{id:"列表页改单页面应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#列表页改单页面应用"}},[v._v("#")]),v._v(" 列表页改单页面应用")]),v._v(" "),_("p",[v._v("列表页主要用来展示分类下的列表信息，根据用户的筛选项，将搜索结果展示给用户。")]),v._v(" "),_("p",[v._v("把列表页改成单页面，面临的第一个难题就是 VUE/React 还处于早期阶段，贸然给业务同事使用，会趟不少坑。还有就是，这些页面都在搜索引擎和其他 App 做了广告投放，需要考虑 SEO， 也就是说，URL 要和原来的页面保持一致的同时，支持爬虫够抓取和解析。")]),v._v(" "),_("p",[v._v("我调研过程中发现，与直接切换 VUE/React 技术栈相比，现有的列表页模板修改成单页面应用，风险上要小很多，所以最终采用的是列表页模板的单页面实现。")]),v._v(" "),_("p",[v._v("另外我还发现，浏览器的 History API 方案刚好能够支持单页面应用和原页面URL保持一致。具体来说，通过其中的 pushState 修改 URL 和历史记录，能确保筛选后的 URL 和原来保持一致，通过它的回退等功能操作，也可以回到上一个页面。")]),v._v(" "),_("p",[v._v("对于SEO这块儿，为了确保爬虫能够抓取解析这个页面，如果页面逻辑和数据展现是通过JavaScript 动态获取加载数据，那么爬虫就无法解析抓取到的页面。为此，我额外提供了一套服务端模板，如果页面访问头是爬虫的话，就走服务端模板，反之如果是个人用户的话，就走单页面应用。")]),v._v(" "),_("h4",{attrs:{id:"弱网下性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#弱网下性能优化"}},[v._v("#")]),v._v(" 弱网下性能优化")]),v._v(" "),_("p",[v._v("当时上线前夕刚好遇到招聘业务，最后发现数据并不及预期，怎么回事呢？我们怎么测试都没发现问题，后来在家里 2G 网络下测试了一下，发现白屏了。问题是不是出在这里呢？")]),v._v(" "),_("p",[v._v("接下来，我就针对用户网络分布做了网络测速，网络测速过程中，发现我们的弱网（2G、 3G）用户超过 50%。")]),v._v(" "),_("p",[v._v("于是，接下来我们就针对弱网环境做了以下优化手段。")]),v._v(" "),_("p",[v._v("因为弱网下一个请求都需要 2s，而原来的列表页数据接口请求大约26个请求，于是我们就尽可能合并请求，最后合并到了 11个。")]),v._v(" "),_("p",[v._v("小图标采用 Base64 Encoding 的方式，内嵌于页面中，不用额外发网络请求来获取。")]),v._v(" "),_("p",[v._v("针对弱网（特别是移动网络），不自动加载图片，只显示本占位图。")]),v._v(" "),_("p",[v._v("通过以上优化方式后，首屏时间从 2.5s 提升到 1.5s。")]),v._v(" "),_("p",[v._v("最后，还有一个教训就是，如果性能优化涉及多条业务线，最好是先把一条业务打透，确保收入数据确实提升了，再推广到其他业务。")]),v._v(" "),_("p",[v._v("当时我们的性能优化涉及五条业务线：二手，房产，招聘，黄页，二手车。我在做优化的时候同时选了招聘和房产业务，结果因为一个问题，业务收入没有如预期的那样提升 10%，而是直接降低了 20%，并且是两条业务数据一起降，业务部门对此意见很大。")]),v._v(" "),_("p",[v._v("我印象中每天晚上 12 点计算出统计数据后，发一封邮件告诉业务同学和老板，今天的数据是利好还是利空。如果是利空，还需要顶着业务同学压力，通过性能优化，把收入数据优化提升上去，这个过程中非常艰难。")]),v._v(" "),_("p",[v._v("小结")]),v._v(" "),_("p",[_("img",{attrs:{src:"/performance/mobile_case.png",alt:"小结2"}})])])}),[],!1,null,null,null);_.default=r.exports}}]);