webpackJsonp([0],{BrSd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"user-info"},[n("Badge",{staticClass:"badge",attrs:{count:"3"}},[n("Icon",{attrs:{type:"ios-bell-outline",size:"30",color:"#fff"}})],1),t._v(" "),n("Avatar",{staticClass:"avatar",attrs:{src:"http://blog.gdfengshuo.com/example/work/static/img/img.jpg",size:"large"}}),t._v(" "),n("Dropdown",{staticClass:"name"},[n("a",[t._v("\n\t\t\t\tadmin\n\t\t\t\t"),n("Icon",{attrs:{type:"arrow-down-b"}})],1),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",[t._v("个人信息")]),t._v(" "),n("DropdownItem",{attrs:{"on-click":t.logout}},[t._v("退出")])],1)],1)],1)])},staticRenderFns:[]};var i=n("VU/8")({name:"top",data:function(){return{name:"233132"}},methods:{logout:function(){this.$router.push("/login")}}},a,!1,function(t){n("pfkl")},"data-v-3218db06",null).exports,o={name:"left",props:{menus:{type:Array,default:function(){return[]}},activeName:{type:String,default:"/"}},data:function(){return{theme3:"dark",active:"/"}},methods:{handleSelect:function(t){this.$emit("on-select",t)}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Menu",{attrs:{theme:"dark",width:"auto",name:"1","active-name":t.activeName},on:{"on-select":t.handleSelect}},[t._l(t.menus,function(e,a){return[e.children?t._e():n("MenuItem",{key:a,attrs:{name:e.url}},[n("Icon",{key:a,attrs:{type:e.icon}}),t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")],1),t._v(" "),e.children&&e.children.length>1?n("Submenu",{key:a,attrs:{name:e.url}},[n("template",{slot:"title"},[n("Icon",{key:a,attrs:{type:e.icon}}),t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")],1),t._v(" "),t._l(e.children,function(e,a){return[n("MenuItem",{key:a,attrs:{name:e.url}},[t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")])]})],2):t._e()]})],2)],1)},staticRenderFns:[]};var l=n("VU/8")(o,r,!1,function(t){n("wK1O")},"data-v-316e3fbc",null).exports,s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(5,function(e,a){return[n("Tag",{key:a,attrs:{closable:"",color:"blue"}},[t._v("标签"+t._s(a))])]})],2)},staticRenderFns:[]},u=n("VU/8")({props:["datas"]},s,!1,null,null,null).exports,c=(n("fAbP"),{name:"dashboard",components:{sideMenu:l,iTag:u,top:i},data:function(){return{title:"欢迎回来",menus:[{title:"系统首页",url:"/",icon:"ios-home"},{title:"Tabs",url:"/tabs",icon:"ios-pricetag"},{title:"表格",url:"/tables",icon:"ios-list"},{title:"上传",url:"/upload",icon:"upload"},{title:"按钮",url:"/button",icon:"social-youtube"},{title:"图表",url:"10",icon:"stats-bars",children:[{title:"折线图",url:"2",icon:"document-text"},{title:"饼图",url:"2",icon:"document-text"}]},{title:"表单相关",url:"7",icon:"share",children:[{title:"富文本编辑器",url:"2",icon:"document-text"},{title:"markdown",url:"3",icon:"document-text"},{title:"文件上传",url:"4",icon:"document-text"}]}],isCollapsed:!1,active:"/",breads:[{name:"首页"},{name:"Dashboard"}]}},watch:{$route:function(t,e){}},computed:{},mounted:function(){this.active=this.$route.path},methods:{handleSelect:function(t){this.gotoPage(t)},gotoPage:function(t){this.$router.push(t)}}}),d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("Layout",{style:{height:"100%"}},[n("Header",[n("div",{staticClass:"layout-logo"}),t._v(" "),n("div",{staticClass:"layout-nav"},[n("top")],1)]),t._v(" "),n("Layout",[n("Sider",{style:{background:"#4a505e"},attrs:{"hide-trigger":""}},[n("side-menu",{attrs:{menus:t.menus,"active-name":t.active},on:{"on-select":t.handleSelect}})],1),t._v(" "),n("Layout",{style:{padding:"0 14px 24px"}},[n("Breadcrumb",{style:{margin:"14px 0"}},[t._l(t.breads,function(e,a){return[n("BreadcrumbItem",{key:a},[t._v(t._s(e.name))])]})],2),t._v(" "),n("Content",{style:{padding:"10px",minHeight:"280px",background:"#fff",height:"100%",overflow:"auto"}},[n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},m=n("VU/8")(c,d,!1,null,null,null);e.default=m.exports},fAbP:function(t,e){},pfkl:function(t,e){},wK1O:function(t,e){}});
//# sourceMappingURL=0.afef8aec61476a276b34.js.map