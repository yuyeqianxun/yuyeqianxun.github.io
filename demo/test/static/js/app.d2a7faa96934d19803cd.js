webpackJsonp([1],{B0P3:function(t,e){},LEjg:function(t,e){},MvUa:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},t._l(t.menus,function(e,n){return i("router-link",{key:n,attrs:{to:e.link}},[t._v(t._s(e.name))])}))},staticRenderFns:[]};var o={name:"App",components:{LinkTo:i("VU/8")({name:"HelloWorld",data:function(){return{menus:[{name:"案例一",link:"/"},{name:"案例二",link:"/second"},{name:"案例三",link:"/third"}]}}},s,!1,function(t){i("MvUa")},"data-v-2721be45",null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("link-to"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=i("VU/8")(o,a,!1,function(t){i("B0P3")},null,null).exports,l=i("/ocq"),r={name:"HelloWorld",data:function(){return{boxes:[{content:""}],message:"",add:!1,del:!1,position:{top:0,left:0},sign:null,origin:null,target:null}},mounted:function(){document.oncontextmenu=function(t){t.preventDefault()}},methods:{boxSwitch:function(){this.add=!this.add},showDel:function(t,e){this.del=!this.del,this.sign=e,this.$set(this.position,"top",t.pageY),this.$set(this.position,"left",t.pageX)},addBox:function(){this.boxes.unshift({content:this.message}),this.add=!1,this.message=""},delBox:function(){this.boxes.splice(this.sign,1),this.del=!this.del},dragStart:function(t){this.origin=t},dragEnter:function(t){this.target=t},exchange:function(t){if(t.preventDefault(),this.target!==this.boxes.length-1){var e=this.boxes[this.origin];this.boxes.splice(this.origin,1,this.boxes[this.target]),this.boxes.splice(this.target,1,e)}},allowDrop:function(t){t.preventDefault()}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"first"},[t._l(t.boxes,function(e,n){return i("div",{key:n,staticClass:"box",attrs:{draggable:!!e.content},on:{dragenter:function(e){t.dragEnter(n)},dragstart:function(e){t.dragStart(n)},drop:function(e){t.exchange(e)},dragover:function(e){t.allowDrop(e)}}},[e.content?i("div",{staticClass:"content",on:{contextmenu:function(e){t.showDel(e,n)}}},[t._v(t._s(e.content))]):i("div",{staticClass:"plus",on:{click:function(e){t.boxSwitch()}}})])}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.add,expression:"add"}],staticClass:"add"},[i("p",{staticClass:"message"},[t._v("新增")]),t._v(" "),i("div",{staticClass:"text"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请填写信息"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"button"},[i("div",{staticClass:"cancel",on:{click:function(e){t.boxSwitch(e)}}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"confirm",on:{click:function(e){t.addBox()}}},[t._v("确定")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.del,expression:"del"}],staticClass:"del",style:{top:t.position.top+"px",left:t.position.left+"px"},on:{click:function(e){t.delBox()}}},[t._v("删除")])],2)},staticRenderFns:[]};var u=i("VU/8")(r,d,!1,function(t){i("Npr5")},"data-v-49f99c8b",null).exports,h=i("Icdr");i("Vb+l"),i("80cc"),i("miEh");var v={name:"HelloWorld",data:function(){return{position:{top:0,left:0},add:!1,addName:"",addValue:"",chooseIndex:[],edit:!1,box:!1,option:{title:{show:!0,text:"某站点用户访问数据来源",textStyle:{color:"#333"},x:"center"},legend:{orient:"vertical",x:"left",data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"]},series:[{name:"访问来源",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"outline"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!0}},data:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]}]}}},mounted:function(){var t=this;this.drawLine(),document.oncontextmenu=function(t){t.preventDefault()},document.addEventListener("click",function(){t.edit=!1})},methods:{drawLine:function(){var t=h.init(document.querySelector(".charts"));t.setOption(this.option),window.onresize=t.resize},showButton:function(){this.edit=!this.edit,this.$set(this.position,"top",event.pageY),this.$set(this.position,"left",event.pageX)},showEdit:function(t,e){this.box=!this.box},choose:function(t,e){if(!0===t.target.checked)this.chooseIndex.push(e);else{var i=this.chooseIndex.indexOf(e);this.chooseIndex.splice(i,1)}},changeData:function(){this.box=!this.box,this.option.series[0].data.push({value:this.addValue,name:this.addName}),this.option.legend.data.push(this.addName),this.addName="",this.addValue="",this.add=!1;var t=h.init(document.querySelector(".charts"));t.clear(),t.setOption(this.option)},addData:function(t){this.add=1===t},cancelData:function(){this.box=!1}},watch:{}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"second",on:{contextmenu:function(e){t.showButton()}}},[i("div",{staticClass:"charts"}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}],staticClass:"edit",style:{top:t.position.top+"px",left:t.position.left+"px"},on:{click:function(e){t.showEdit()}}},[t._v("修改")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.box,expression:"box"}],staticClass:"box"},[i("p",{staticClass:"message"},[t._v("图标编辑")]),t._v(" "),i("div",{staticClass:"title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.option.title.text,expression:"option.title.text"}],attrs:{type:"text"},domProps:{value:t.option.title.text},on:{input:function(e){e.target.composing||t.$set(t.option.title,"text",e.target.value)}}})]),t._v(" "),i("span",{on:{click:function(e){t.addData(1)}}},[t._v("+")]),i("span",{on:{click:function(e){t.addData(2)}}},[t._v("-")]),t._v(" "),i("table",{attrs:{width:"100"}},[t._m(0),t._v(" "),t._l(t.option.series[0].data,function(e,n){return i("tr",{key:n},[i("td",{attrs:{width:"20%"}},[i("input",{attrs:{type:"checkbox",name:"",id:""},on:{click:function(e){t.choose(e,n)}}})]),t._v(" "),i("td",{attrs:{width:"40%"}},[t._v(t._s(e.name))]),t._v(" "),i("td",{attrs:{width:"40%"}},[t._v(t._s(e.value))])])}),t._v(" "),i("tr",{directives:[{name:"show",rawName:"v-show",value:t.add,expression:"add"}],staticClass:"add-data"},[i("td",{attrs:{width:"20%"}},[i("input",{attrs:{type:"checkbox",name:"",id:""},on:{click:function(e){t.choose(e,t.option.series[0].data.length)}}})]),t._v(" "),i("td",{attrs:{width:"40%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.addName,expression:"addName"}],staticClass:"add-text",attrs:{type:"text"},domProps:{value:t.addName},on:{input:function(e){e.target.composing||(t.addName=e.target.value)}}})]),t._v(" "),i("td",{attrs:{width:"40%"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.addValue,expression:"addValue"}],staticClass:"add-text",attrs:{type:"text"},domProps:{value:t.addValue},on:{input:function(e){e.target.composing||(t.addValue=e.target.value)}}})])])],2),t._v(" "),i("div",{staticClass:"button"},[i("div",{staticClass:"cancel",on:{click:function(e){t.cancelData()}}},[t._v("取消")]),t._v(" "),i("div",{staticClass:"confirm",on:{click:function(e){t.changeData()}}},[t._v("确定")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{attrs:{width:"20%"}},[this._v("选择")]),this._v(" "),e("th",{attrs:{width:"40%"}},[this._v("选项名")]),this._v(" "),e("th",{attrs:{width:"40%"}},[this._v("值")])])}]};var f=i("VU/8")(v,p,!1,function(t){i("LEjg")},"data-v-fe145ae4",null).exports,m=i("mvHQ"),x=i.n(m),g={name:"Third",data:function(){return{types:["triangle","round","react"],boxList:[{type:0,left:0,top:0,width:0,height:0}],cloneDom:!1,cloneX:null,cloneY:null,startX:null,startY:null,originX:null,originY:null,active:null,coping:!1,dargging:!1,moving:!1,del:!1,position:{top:0,left:0}}},mounted:function(){document.oncontextmenu=function(t){t.preventDefault()},document.addEventListener("mousemove",this.adjust,!1),document.addEventListener("mousemove",this.reset,!1),document.addEventListener("mousemove",this.resize,!1),this.isData()},methods:{showDom:function(t,e){this.active=e,this.coping=!0,this.cloneDom=!0,this.cloneX=t.clientX-10,this.cloneY=t.clientY-20},adjust:function(t){this.coping&&(this.cloneX=t.clientX-10,this.cloneY=t.clientY-20)},cloneDown:function(t){this.cloneDom=!1,this.coping=!1;var e=document.querySelector(".content").offsetLeft,i=document.querySelector(".content").offsetTop,n=t.currentTarget.offsetLeft,s=t.currentTarget.offsetTop;n-e>0&&s-i>0&&this.boxList.push({type:this.active,left:this.cloneX-e,top:this.cloneY-i,width:40,height:40})},resize:function(t){if(this.dargging){var e=document.querySelector(".content").offsetLeft,i=document.querySelector(".content").offsetTop,n=t.clientX-this.boxList[this.active].left-e,s=t.clientY-this.boxList[this.active].top-i-10;this.out?this.out=!1:(this.$set(this.boxList[this.active],"width",n),this.$set(this.boxList[this.active],"height",s))}},openResize:function(t,e){t.stopPropagation(),this.dargging=!0,this.active=e},closeResize:function(){this.dargging=!1,this.active=null},reset:function(t){if(this.moving){var e=this.originX+t.clientX-this.startX,i=this.originY+t.clientY-this.startY;this.$set(this.boxList[this.active],"left",e),this.$set(this.boxList[this.active],"top",i)}},openReset:function(t,e){this.moving=!0,this.active=e,this.startX=t.clientX,this.startY=t.clientY,this.originX=this.boxList[e].left,this.originY=this.boxList[e].top},closeReset:function(t){this.moving=!1,this.startX=null,this.startY=null,this.active=null},showDel:function(t,e){this.del=!this.del,this.active=e,this.$set(this.position,"top",t.clientY),this.$set(this.position,"left",t.clientX)},delBox:function(){this.boxList.splice(this.active,1),this.del=!this.del,this.active=null},save:function(){var t=x()(this.boxList);localStorage.setItem("test",t),alert("保存成功了")},isData:function(){if(localStorage.getItem("test")){var t=JSON.parse(localStorage.getItem("test"));this.boxList=t}}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"third"},[i("div",{staticClass:"save",on:{click:function(e){t.save()}}},[t._v("保存")]),t._v(" "),i("div",{staticClass:"tool"},t._l(t.types,function(e,n){return i("div",{key:n,staticClass:"component",class:e,on:{mousedown:function(e){t.showDom(e,n)}}},[i("div")])})),t._v(" "),i("div",{staticClass:"content"},t._l(t.boxList,function(e,n){return e.width?i("div",{key:n,staticClass:"item",class:t.types[e.type],style:{width:e.width+"px",height:e.height+"px",left:e.left+"px",top:e.top+"px"},on:{contextmenu:function(e){t.showDel(e,n)},mousedown:function(e){t.openReset(e,n)},mouseup:function(e){t.closeReset(e)}}},[i("div"),t._v(" "),i("span",{staticClass:"resize",on:{mousedown:function(e){t.openResize(e,n)},mouseup:function(e){t.closeResize()}}})]):t._e()})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.del,expression:"del"}],staticClass:"del",style:{top:t.position.top+"px",left:t.position.left+"px"},on:{click:function(e){t.delBox()}}},[t._v("删除")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.cloneDom,expression:"cloneDom"}],class:t.types[t.active],style:{left:t.cloneX+"px",top:t.cloneY+"px"},attrs:{id:"clone"},on:{mouseup:function(e){t.cloneDown(e)}}})])},staticRenderFns:[]};var _=i("VU/8")(g,w,!1,function(t){i("iMo3")},"data-v-1c885f96",null).exports;n.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"First",component:u},{path:"/second",name:"Second",component:f},{path:"/third",name:"Third",component:_}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:b,components:{App:c},template:"<App/>"})},Npr5:function(t,e){},iMo3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d2a7faa96934d19803cd.js.map