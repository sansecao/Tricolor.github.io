(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{412:function(t,s,a){t.exports=a.p+"assets/img/event-position.8e448636.png"},413:function(t,s,a){t.exports=a.p+"assets/img/canvas.19949994.jpg"},414:function(t,s,a){t.exports=a.p+"assets/img/matrixMulti.497cbe39.png"},415:function(t,s,a){t.exports=a.p+"assets/img/readme.b94fd381.jpg"},529:function(t,s,a){"use strict";a.r(s);var e=a(43),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"js-中的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-中的问题"}},[t._v("#")]),t._v(" js 中的问题")]),t._v(" "),e("p",[t._v("js，vue，react 的问题就都写在这个地方了，因为 vue 和 react 也是可以拆分为 html、css、js 的")]),t._v(" "),e("h2",{attrs:{id:"_1-react-中-setstate-的第二个参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-react-中-setstate-的第二个参数"}},[t._v("#")]),t._v(" 1. react 中 setState 的第二个参数")]),t._v(" "),e("p",[t._v("最近在表单设计器中，需要在打印的时候去改变页面样式，再打印完成之后再修改回来，所以需要一个值去判断用哪一种样式渲染，什么时候修改完成，"),e("font",{attrs:{color:"red"}},[t._v("setState 有第二个参数表示页面更新之后的回调")]),t._v("，这个地方的第二个参数同"),e("code",[t._v("vue")]),t._v("中的"),e("code",[t._v("nextTick()")]),t._v("函数")],1),t._v(" "),e("blockquote",[e("p",[t._v("扩展一点：setState()方法在正常的声明周期里面是异步的，但是在 setTImeout 等中式同步的,主要因为 isBatchingUpdates 为 false，会直接更新数据")])]),t._v(" "),e("h2",{attrs:{id:"_2-鼠标的坐标问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-鼠标的坐标问题"}},[t._v("#")]),t._v(" 2. 鼠标的坐标问题")]),t._v(" "),e("p",[t._v("刚做了一个关于元素拖动的东西，以前也做过一些关于位置的东西，总是搞容易搞混淆一些含义，今天有点时间，想把这个东西搞得透一点")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("clientX/clientY ------ 相对于浏览器可视区左上角（0，0）的坐标")])]),t._v(" "),e("li",[e("p",[t._v("screenX/screenY ------ 相对于设备屏幕左上角（0，0）的坐标 （在这个地方，也就是说，clientY-screenY 是一个定值，一般使用 clientY，和 client 都要注意滚动条的情况）")])]),t._v(" "),e("li",[e("p",[t._v("offsetX/offsetY ------ 相对于事件源左上角（0，0）的坐标（target 和 currentTarget 的区别）（这个用的也是比较多的）")])]),t._v(" "),e("li",[e("p",[t._v("pageX/pageY ---------- 相对于整个网页的左上角（0，0）的坐标")])]),t._v(" "),e("li",[e("p",[t._v("X/Y ------------------ 本来是 IE 的属性，相对于用 css 动态定位（position）的最内层包含元素")])])]),t._v(" "),e("p",[e("img",{attrs:{src:a(412),alt:"图解如下"}})]),t._v(" "),e("h2",{attrs:{id:"_3-html2canvas-还是-canvas-的所占内存的问题-在转化为-canvas-的时候有一个最大的宽高的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-html2canvas-还是-canvas-的所占内存的问题-在转化为-canvas-的时候有一个最大的宽高的问题"}},[t._v("#")]),t._v(" 3. html2canvas 还是 canvas 的所占内存的问题，在转化为 canvas 的时候有一个最大的宽高的问题")]),t._v(" "),e("p",[e("img",{attrs:{src:a(413),alt:"图解"}})]),t._v(" "),e("p",[t._v("针对这个问题在打印的时候做了分段打印的改变，开始做的是每一页调用一次 html2canvas，但是发现了另一个问题，html2canvas 没调用一次都会请求页面上所有的静态资源（除了 js），所以减小颗粒度，每次在不超多最大宽高的时候调用一次，但是在调用超过 3 次的时候，需要等待的时间很长，整个生成的时候就到 20 秒左右，因为是图片系统打印的时间有还需要一段时间，大概也是 10s 左右，这个是无法忍受的，所以最后我选择弃用了这种方案")]),t._v(" "),e("h2",{attrs:{id:"_4-git-push-10054-git-提交的时候因为提交文件过大-报错-按照道理来讲不该把-git-的问题放在这的-但是又懒得单独去开一个-tab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-git-push-10054-git-提交的时候因为提交文件过大-报错-按照道理来讲不该把-git-的问题放在这的-但是又懒得单独去开一个-tab"}},[t._v("#")]),t._v(" 4. "),e("code",[t._v("git push 10054")]),t._v(" git 提交的时候因为提交文件过大，报错（按照道理来讲不该把 git 的问题放在这的，但是又懒得单独去开一个 tab）")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v("git config http.postBuffer 524288000")]),t._v(" 默认只有 1M 的上传大小，在这先设成 500M")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch <file/dir>' HEAD")]),t._v(" 把缓存清一下")])]),t._v(" "),e("li",[e("p",[e("code",[t._v('git config --global http.sslVerify "false"')]),t._v(" 这个是干嘛的，我还真不知道，反正他生效了")])])]),t._v(" "),e("h2",{attrs:{id:"_5-git-push-403-权限问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-git-push-403-权限问题"}},[t._v("#")]),t._v(" 5. "),e("code",[t._v("git push")]),t._v(" 403 权限问题")]),t._v(" "),e("ol",[e("li",[e("p",[e("code",[t._v('ssh-keygen -t rsa -C "1066788870@qq.com"')]),t._v(" 生成 ssh")])]),t._v(" "),e("li",[e("p",[t._v("将"),e("code",[t._v(".ssh/id_rsa.pub")]),t._v("里面的内容添加到 github 中的 ssh 中")])]),t._v(" "),e("li",[e("p",[t._v("修改项目内的"),e("code",[t._v(".git/config")]),t._v("中的 url 为："),e("code",[t._v("url = https://用户名:密码@github.com/0227vera/blog.git")])])])]),t._v(" "),e("p",[t._v("可以先按照这三步试一下")]),t._v(" "),e("h2",{attrs:{id:"_6-做完公文流转之后的收获和反思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-做完公文流转之后的收获和反思"}},[t._v("#")]),t._v(" 6. 做完公文流转之后的收获和反思")]),t._v(" "),e("ol",[e("li",[t._v("先说一下收获吧")])]),t._v(" "),e("p",[t._v("① "),e("code",[t._v("keep-alive")]),t._v("的使用，因为自己平常写代码，习惯不是很好，在写组件的时候不喜欢加上"),e("code",[t._v("name")]),t._v("属性，在文档中有明显的说明\n"),e("font",{attrs:{color:"red"}},[t._v("匹配首先检查组件自身的"),e("code",[t._v("name")]),t._v("选项，如果"),e("code",[t._v("name")]),t._v("选项不可用，\n则匹配它的局部注册名称 (父组件"),e("code",[t._v("components")]),t._v("选项的键值)。匿名组件不能被匹配。")]),t._v("也即是说我自己写的组件是匿名组件，\n"),e("code",[t._v("keep-alive")]),t._v("不会识别，也不会缓存，"),e("font",{attrs:{color:"red"}},[e("code",[t._v("include")]),t._v("中的 name 为组件内部的 name 而非 router 中的 name")])],1),t._v(" "),e("p",[t._v("② 针对视图上面的一些处理，canvas 还是有很多好用的组件或者是库，eg："),e("code",[t._v("echarts.js")]),t._v("、"),e("code",[t._v("fabric.js")])]),t._v(" "),e("p",[t._v("③ 具备基本的数学思想，在计算 canvas 中的一些问题的时候会方便一些，eg：算一个点和一个矩形是否相交（碰撞）")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hitArea")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plane")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" plane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" plane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" plane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" plane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("\n    point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" plane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("top "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" plane"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("④ 合理的使用"),e("code",[t._v("slot")]),t._v("，个人的理解：如果某个"),e("code",[t._v("vue")]),t._v("子组件中使用了过多的"),e("code",[t._v("$emit")]),t._v("，我个人觉得或许可以尝试着去使用一下"),e("code",[t._v("slot")]),t._v("，\n比较方便后期的维护和扩展 eg：构造自己的"),e("code",[t._v("dialog")]),t._v("的时候，如果使用"),e("code",[t._v("slot")]),t._v("既可以保证自己使用的调用的方便，\n又可以保证其灵活性，更重要是可以保证整个项目中的 dialog 风格是一致的")]),t._v(" "),e("p",[t._v("⑤ 不要滥用 "),e("code",[t._v("vuex store")]),t._v("，这个纯属是自己的习惯，就是觉得如果使用太多 store 之后不太方面后来人的维护，\n但有一些对于整个项目用的比较少的请求，又建议写在"),e("code",[t._v("action")]),t._v("里面去，在适当的时候去调取")]),t._v(" "),e("p",[t._v("⑥ 项目发版打一下分支，并且锁一下"),e("code",[t._v("package.json")]),t._v("里面的版本")]),t._v(" "),e("p",[t._v("⑦ git 提交规范")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("当然，更多的地方是需要取反思的")])]),t._v(" "),e("p",[t._v("① 有一些公共的方法们应该使用"),e("code",[t._v("mixins")]),t._v("的，但是没有使用，eg：在打开详情的时候所有的方法其实都是一样的，只是有一些判断的不一致，完全可以使用"),e("code",[t._v("mixins")])]),t._v(" "),e("p",[t._v("② 在开始项目之前没有充分去了解项目一些需求，导致后面的项目扩展和维护比较被动")]),t._v(" "),e("p",[t._v("③ 项目中的注释比较少，不方面后来者去维护，当然后来有所改变，个人建议，根据自己习惯写一下，不然很容易过段时间自己都看不懂自己写的代码")]),t._v(" "),e("p",[e("img",{attrs:{src:a(414),alt:"示例1"}}),t._v(" "),e("img",{attrs:{src:a(415),alt:"示例2"}})]),t._v(" "),e("p",[t._v("④ 该封装组件的地方一定要封装，该封装方法的时候一定要封装方法，真的是为了自己之后的维护好，也省得被之后维护的同学喷")]),t._v(" "),e("back-to-top"),t._v(" "),e("gitask")],1)}),[],!1,null,null,null);s.default=v.exports}}]);