(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{532:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"antd使用注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antd使用注意点"}},[t._v("#")]),t._v(" antd使用注意点")]),t._v(" "),a("h2",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" from")]),t._v(" "),a("p",[t._v("如何使表单受控？-- "),a("code",[t._v("getFieldDecorator")]),t._v(" --- 用于和表单进行双向绑定，详见下方描述")]),t._v(" "),a("p",[t._v("父级如何控制子级? -- "),a("code",[t._v("wrappedComponentRef")])]),t._v(" "),a("p",[t._v("联动关系如何设置？ -- "),a("code",[t._v("setFieldsValue")]),t._v(" --- 设置一组输入控件的值（注意：不要在 componentWillReceiveProps 内使用，否则会导致死循环)")]),t._v(" "),a("p",[t._v("滚动到指定的错误位置 -- "),a("code",[t._v("validateFieldsAndScroll")]),t._v(" --- 如果错误不在可视区域")]),t._v(" "),a("p",[t._v("表单里的默认数据 -- "),a("code",[t._v("initialValue")]),t._v(" --- 通过options里面的initialValue去设置")]),t._v(" "),a("p",[t._v("把父组件的属性映射到表单项上 -- "),a("code",[t._v("mapPropsToFields")]),t._v(" --- 方便父组件控制")]),t._v(" "),a("p",[t._v("父级元素给自己传入表单的值的时候")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapPropsToFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用上层组件的scope的值作为表单的数据")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" scope "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nickname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFormField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nickname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      phone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFormField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phone"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFormField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      agreement"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createFormField")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" scope"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("agreement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'base_form'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("诸如有些默认值设置不上的时候，其实是在初始化的时候还没有对应的值，而是通过接口拿到之后给set的这个时候对于tab，tree给默认值的时候可能不会生效，修改方式，在请求的时候不去加载dom而是使用spin去添加loading解决初始化没值的问题")]),t._v(" "),a("h2",{attrs:{id:"antd-mobile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#antd-mobile"}},[t._v("#")]),t._v(" antd-mobile")]),t._v(" "),a("p",[t._v("这个组件库可以说是相当的不好用，所以我使用react的开发，有90%是没有使用这个开发的，样式基本需要再二次开发，需要的功能也比较少")])])}),[],!1,null,null,null);s.default=e.exports}}]);