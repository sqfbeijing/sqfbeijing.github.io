webpackJsonp([0],[,,function(t,e,i){"use strict";var n=i(0),s=i(12),a=i(9),r=i.n(a);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"home",component:r.a}]})},function(t,e,i){i(8);var n=i(1)(i(4),i(11),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{slides:["/static/img/slides1.jpg","/static/img/slides2.jpg","/static/img/slides3.jpg"],currentIndex:0,currentSlide:{},intervalId:null,itemDatas:[{img_url:"/static/img/item/51524.jpg",name:"四出弯滴箭"},{img_url:"/static/img/item/AOD0215.jpg",name:"可调式滴头"},{img_url:"/static/img/item/EL0314.jpg",name:"管用旁通"},{img_url:"/static/img/item/FD02120.jpg",name:"叠片过滤器"},{img_url:"/static/img/item/HMS02.jpg",name:"倒挂三件套"},{img_url:"/static/img/item/776673.jpg",name:"果树插杆微喷的运用"},{img_url:"/static/img/item/429747.jpg",name:"果树插杆微喷的运用"},{img_url:"/static/img/item/218921.jpg",name:"压力补偿滴头配四出弯滴箭的运用"},{img_url:"/static/img/item/341293.jpg",name:"倒挂式折射雾化微喷头的运用"},{img_url:"/static/img/item/MS1101A.jpg",name:"倒挂式折射微喷头"},{img_url:"/static/img/item/PCT0108.jpg",name:"可拆式压力补偿滴头"},{img_url:"/static/img/item/RS5022.jpg",name:"摇臂喷头"}]}},created:function(){this.runSlides()},methods:{runSlides:function(){var t=this;this.intervalId=setInterval(function(){t.currentIndex===t.slides.length-1?t.currentIndex=0:t.currentIndex++},3e3)},clickSlide:function(t){clearInterval(this.intervalId),this.currentIndex=t,this.runSlides()}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(0),s=i(3),a=i.n(s),r=i(2);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e,i){i(7);var n=i(1)(i(5),i(10),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"slides"},[i("ul",t._l(t.slides,function(e,n){return i("li",{directives:[{name:"show",rawName:"v-show",value:n===t.currentIndex,expression:"index === currentIndex"}]},[i("img",{attrs:{src:e,alt:""}})])})),t._v(" "),i("ul",{staticClass:"slides-dots"},t._l(t.slides,function(e,n){return i("li",{class:{active:n===t.currentIndex},on:{click:function(e){t.clickSlide(n)}}})}))]),t._v(" "),i("div",{staticClass:"g-container  display-items"},[t._m(2),t._v(" "),i("ul",{staticClass:"display-items-content"},t._l(t.itemDatas,function(e,n){return i("li",[i("img",{attrs:{src:e.img_url,alt:e.name}}),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"g-header "},[i("div",{staticClass:"g-container"},[i("div",{staticClass:"company fwb"},[i("a",{attrs:{href:"/"}},[t._v("\n\t\t\t\t\t四川·眉山·泷汇橡塑\n\t\t\t\t")])]),t._v(" "),i("div",{staticClass:"tel"},[i("a",{attrs:{href:"tel:13990328171"}},[t._v("\n\t\t\t\t\t联系电话: 13990328171\n\t\t\t\t")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"g-navs"},[i("li",{staticClass:"active"},[t._v("\n\t\t\t首页\n\t\t")]),t._v(" "),i("li",[t._v("\n\t\t\t产品列表\n\t\t")]),t._v(" "),i("li",[t._v("\n\t\t\t关于我们\n\t\t")]),t._v(" "),i("li",[t._v("\n\t\t\t联系我们\n\t\t")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"display-items-head df"},[i("div",{},[t._v("\n\t\t\t\t产品展示\n\t\t\t")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"g-footer"},[i("div",{staticClass:"g-container"},[i("ul",[i("li",[t._v("\n\t\t\t友情链接："),i("a",{attrs:{href:"https://www.baidu.com"}},[t._v("百度")]),t._v(" | "),i("a",{attrs:{href:"https://www.sohu.com"}},[t._v("搜狐")])]),t._v(" "),i("li",[t._v("\n\t\t\t\t网站首页｜ 公司介绍｜ 供应产品｜  荣誉资质｜  联系方式\n\t\t\t")]),t._v(" "),i("li",[t._v("\n\t\t\t\t©2017 泷汇橡塑 版权所有   \n\t\t\t")]),t._v(" "),i("li",[t._v("\n\t\t\t\t技术支持： giovanni\n\t\t\t")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.c6e14427a2b297b2f5b3.js.map