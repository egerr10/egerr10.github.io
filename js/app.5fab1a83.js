(function(t){function e(e){for(var r,n,o=e[0],l=e[1],u=e[2],h=0,d=[];h<o.length;h++)n=o[h],s[n]&&d.push(s[n][0]),s[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},s={app:0},a=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("64a9"),s=i.n(r);s.a},"3adf":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var r=i("2b0e"),s=i("5c96"),a=i.n(s),n=(i("0fae"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticClass:"app",class:{default:!t.changeTheme,dark:t.changeTheme},attrs:{id:"app"}},[i("el-header",{attrs:{height:"0"}},[i("div",{staticClass:"theme",attrs:{title:"Сменить тему"}},[i("div",{staticClass:"them-item-body"},[i("div",{staticClass:"theme-item-inner",class:{default:t.changeTheme,dark:!t.changeTheme},on:{click:t.test}})])])]),i("el-main",[i("router-view")],1)],1)}),o=[],l={name:"App",data:function(){var t=!0,e=!1,i=!1;return{defaultTheme:t,darkTheme:e,changeTheme:i}},methods:{test:function(){this.changeTheme=!1===this.changeTheme},def:function(){this.defaultTheme=!0,this.darkTheme=!1},dark:function(){this.defaultTheme=!1,this.darkTheme=!0}}},u=l,c=(i("034f"),i("2877")),h=Object(c["a"])(u,n,o,!1,null,null,null),d=h.exports,f=i("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:18}},[r("div",{staticClass:"logo-block"},[r("a",{attrs:{title:"https://www.naumen.ru",href:"https://www.naumen.ru",target:"_blank"}},[r("div",{staticClass:"n-logo"})]),r("a",{attrs:{title:"https://ru.wikipedia.org/wiki/Naumen",href:"https://ru.wikipedia.org/wiki/Naumen",target:"_blank"}},[r("div",{staticClass:"w-logo"},[r("img",{attrs:{src:i("c3e9"),alt:""}})])])])]),r("el-col",{attrs:{span:18}},[r("el-form",{staticClass:"form-inline",attrs:{inline:!0,"status-icon":""},nativeOn:{submit:function(e){return e.preventDefault(),t.getWiki(e)}}},[r("el-autocomplete",{attrs:{id:"input","select-when-unmatched":!0,clearable:!0,"trigger-on-focus":!1,"popper-class":"my-autocomplete","fetch-suggestions":t.querySearch,placeholder:"Wiki поиск"},on:{focus:t.historyShow,select:t.handleSelect},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[r("div",{staticClass:"value"},[t._v(t._s(i))])]}}]),model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),t.calc?r("div",{staticClass:"result-info"},[t._v("Среднее количество\n        символов в статье: "+t._s(t.calc))]):t._e(),t.historyView?r("div",{staticClass:"history-body",attrs:{id:"history"}},[r("div",{staticClass:"history-container"},[t._l(t.history,function(e,i){return r("div",{key:e,staticClass:"history-body-item"},[r("div",{staticClass:"history-item",on:{click:function(i){t.getFromHistoryQuery(e)}}},[t._v(t._s(e))]),r("div",{staticClass:"history-item-delete",on:{click:function(e){t.deleteHistoryQuery(i)}}},[t._v("удалить")])])}),r("div",{staticClass:"history-title",on:{click:t.deleteHistoryAll}},[t._v("\n            Очистить историю поиска\n          ")])],2)]):t._e(),t.queryError?r("div",{staticClass:"fail"},[t._v("Поздравляем! Вы нашли то, чего в Википедии нет!")]):t._e()],1),r("el-col",{attrs:{span:2}},[r("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.getWiki}},[t._v("Найти")])],1)],1),r("div",{staticClass:"search-body"},[t.loading?r("loading"):t._e(),r("div",{staticClass:"result-container"},t._l(t.result,function(e){return r("div",{key:e.pageid},[r("div",{staticClass:"item-container"},[r("div",{staticClass:"item-link"},[r("a",{attrs:{href:e.fullurl,target:"_blank"}},[t._v(t._s(e.title))])]),r("div",{staticClass:"item-ext"},[r("div",[e.thumbnail?r("img",{attrs:{src:e.thumbnail.source,alt:""}}):t._e()]),r("div",{staticClass:"item-ext-text",domProps:{innerHTML:t._s(e.extract)}})])])])}),0)],1)],1)},y=[],m=i("f499"),g=i.n(m),v=i("bc3a"),w=i.n(v),b=i("1157"),k=i.n(b),x=k.a,_={name:"HelloNaumen",data:function(){var t="",e="",i={},r=[],s=[],a=!1,n=!1,o=!1;return{query:e,result:i,historyView:a,question:t,exampleResult:s,history:r,loading:n,queryError:o}},mounted:function(){var t=this;x(document).mouseup(function(e){var i=x("#input"),r=x("#history");i.is(e.target)||0!==i.has(e.target).length||r.is(e.target)||0!==r.has(e.target).length||(t.historyView=!1)}),JSON.parse(localStorage.getItem("history"))?this.history=JSON.parse(localStorage.getItem("history")):localStorage.setItem("history",g()(this.history))},computed:{calc:function(){var t=0,e=0,i=0;for(var r in this.result)Object.prototype.hasOwnProperty.call(this.result,r)&&(t+=this.result[r].length,e+=1);return i=t/e,Math.round(i)}},methods:{historyShow:function(){!this.query&&this.history.length>0&&(this.historyView=!0)},handleSelect:function(t){t.value||""===t.value?this.query=t.value:this.query=t,this.getWiki()},checkHistory:function(){for(var t=this.query,e=this.history.slice(),i=0;i<e.length;i+=1)e[i]=e[i].toLowerCase();return-1!==e.indexOf(t.toLowerCase())},pushHistory:function(){this.query=this.query.trim(),this.history.length<15&&!this.checkHistory()&&this.query.length>0?(this.history.unshift(this.query),this.saveHistory()):this.history.length>=15&&!this.checkHistory()&&this.query.length>0&&(this.history.unshift(this.query),this.history.pop(),this.saveHistory())},saveHistory:function(){localStorage.setItem("history",g()(this.history))},deleteHistoryAll:function(){this.historyView=!1,this.history=[],this.saveHistory()},deleteHistoryQuery:function(t){this.history.splice(t,1),this.saveHistory()},getFromHistoryQuery:function(t){this.query=t,this.historyView=!1,this.getWiki()},querySearch:function(t,e){var i=this;this.historyView=!1,w()({url:"https://ru.wikipedia.org/w/api.php?origin=*&action=opensearch&search=".concat(this.query,"&format=json&limit=20"),method:"GET"}).then(function(t){i.exampleResult=t.data[1],e(t.data[1])}).catch(function(t){console.log(t)})},getWiki:function(){var t=this;this.query=this.query.trim(),this.query.length>0&&(this.queryError=!1,this.loading=!0,this.result=[],this.pushHistory(),w()({url:"https://ru.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=1\n        &gsrlimit=20&prop=pageimages|info|extracts&pilimit=max&exintro&exsentences=1&exlimit=max&gsrsearch=".concat(this.query,"&inprop=url"),method:"GET"}).then(function(e){t.loading=!1,t.result=e.data.query.pages}).catch(function(e){t.loading=!1,t.queryError=!0,console.log(e)}))}}},q=_,C=(i("7572"),Object(c["a"])(q,p,y,!1,null,null,null)),T=C.exports;r["default"].use(f["a"]);var S=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Naumen",component:T}]}),H=i("2f62");r["default"].use(H["a"]);var O=new H["a"].Store({state:{},mutations:{},actions:{}}),j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loader loader--style2"},[i("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[i("path",{attrs:{fill:"#000",d:"M25.251,6.461c-10.318,0-18.683,8.365-18.683,\n        18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"}},[i("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])])},E=[],P={name:"loading"},V=P,M=(i("6e4c"),Object(c["a"])(V,j,E,!1,null,"34f732b7",null)),N=M.exports;r["default"].use(a.a),r["default"].component("Loading",N),r["default"].config.productionTip=!1,new r["default"]({router:S,store:O,render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,i){},"6e4c":function(t,e,i){"use strict";var r=i("3adf"),s=i.n(r);s.a},7572:function(t,e,i){"use strict";var r=i("e5ce"),s=i.n(r);s.a},c3e9:function(t,e,i){t.exports=i.p+"img/wikilogo.224aafe0.png"},e5ce:function(t,e,i){}});
//# sourceMappingURL=app.5fab1a83.js.map