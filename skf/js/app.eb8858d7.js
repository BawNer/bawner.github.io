(function(t){function e(e){for(var i,n,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},o=[];function n(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-ed317e18":"77f6edfa"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=r[t]=[e,i]}));e.push(a[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=n(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}r[t]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/skf/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"pl-5",attrs:{app:"",dense:"",flat:"","clipped-left":""}},[a("v-toolbar-title",[a("v-badge",{attrs:{color:"red darken-4",content:"Alpha",inline:""}},[t._v("СКФ МТУСИ")])],1),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.switchVuetifyTheme}},[a("v-icon",[t._v(t._s(t.getVuetifyTypeTheme?"mdi-weather-sunny":"mdi-weather-night"))])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setShared("Данная функция появится в ближайшем времени!")}}},[a("v-icon",[t._v("mdi-cog-outline")])],1),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",[t._v("mdi-account")])],1)]}}])},[a("v-list",[a("v-list-item",{attrs:{link:"",to:"/auth"}},[a("v-list-item-title",[t._v("Авторизация")])],1)],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",clipped:"",width:"320"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",{attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Приемная комиссия")]),a("v-list-item-subtitle",[t._v("priеm@skf-mtusi.ru")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:"",shaped:""}},t._l(t.siteRoutes,(function(e,i){return a("v-list-item",{key:i,attrs:{link:"",to:e.path}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1),a("v-divider"),a("v-list",{attrs:{nav:""}},t._l(t.menuLinks,(function(e,i){return a("v-list-item",{key:i,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),a("v-content",[a("v-container",[a("router-view")],1)],1),a("v-bottom-navigation",{staticClass:"d-md-none",attrs:{app:"",grow:"",color:"teal"}},[a("v-btn",{on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",[t._v("mdi-menu")])],1),t._l(t.siteRoutes,(function(e){return a("v-btn",{key:e.title,attrs:{to:e.path}},[a("span",[t._v(t._s(e.title))]),a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1)}))],2),a("v-snackbar",{attrs:{color:"indigo darken-2",vertical:"",top:"",timeout:t.getShared.timeToHide},model:{value:t.getShared.isShow,callback:function(e){t.$set(t.getShared,"isShow",e)},expression:"getShared.isShow"}},[t._v(" "+t._s(t.getShared.message)+" "),a("v-btn",{attrs:{text:""},on:{click:t.closeShared}},[t._v(" Закрыть ")])],1)],1)},o=[],n=(a("c975"),a("b0c0"),{name:"App",data:function(){return{drawer:null,siteRoutes:[{title:"Главная",path:"/",icon:"compass-outline"},{title:"Новости",path:"/feed",icon:"newspaper-variant-outline"},{title:"Bug",path:"/bug",icon:"bug-outline"}],menuLinks:[{title:"Очень длинная ссылка на какой-либо ресурс будет выглядеть примерно вот так",path:"",icon:"folder"},{title:"Обычная ссылка",path:"",icon:"folder"}]}},methods:{switchVuetifyTheme:function(){this.$vuetify.theme.dark=!this.getVuetifyTypeTheme},closeShared:function(){this.$store.dispatch("closeShared")},setShared:function(t){this.$store.dispatch("setShared",t)}},computed:{getVuetifyTypeTheme:function(){return this.$vuetify.theme.dark},getShared:function(){return this.$store.getters.getSharedInfo}},beforeMount:function(){this.drawer=-1===["xs","sm"].indexOf(this.$vuetify.breakpoint.name)}}),s=n,c=(a("5c0b"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),m=a("40dc"),v=a("4ca6"),p=a("b81c"),f=a("8336"),h=a("a523"),b=a("a75b"),g=a("ce7e"),y=a("132d"),w=a("8860"),x=a("da13"),_=a("5d23"),C=a("34c3"),V=a("e449"),k=a("f774"),S=a("2db4"),T=a("2fa4"),j=a("2a7f"),L=Object(c["a"])(s,r,o,!1,null,null,null),O=L.exports;d()(L,{VApp:u["a"],VAppBar:m["a"],VBadge:v["a"],VBottomNavigation:p["a"],VBtn:f["a"],VContainer:h["a"],VContent:b["a"],VDivider:g["a"],VIcon:y["a"],VList:w["a"],VListItem:x["a"],VListItemContent:_["a"],VListItemIcon:C["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VMenu:V["a"],VNavigationDrawer:k["a"],VSnackbar:S["a"],VSpacer:T["a"],VToolbarTitle:j["a"]});var I=a("9483");Object(I["a"])("".concat("/skf/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var B=a("8c4f"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeComponent")],1)},E=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{xs:"12",md:"10"}},[a("v-carousel",t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1),a("v-col",{staticClass:"mt-4 text-center",attrs:{xs:"12",md:"10"}},[a("v-alert",{attrs:{width:"100%",border:"left",color:"red accent-4","colored-border":"",elevation:"3"}},[a("p",{staticClass:"display-2 ma-4"},[t._v("День открытых дверей 00.00.0000 в 00:00")]),a("br"),a("p",[t._v("ссылка на веб ресурс проведения дня открытых дверей")])])],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("v-row",{staticClass:"flex-nowrap",staticStyle:{"overflow-x":"auto"}},t._l(t.news,(function(e){return a("v-col",{key:e.id,staticClass:"mt-2",attrs:{cols:"11",md:"4"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("v-card-title",[t._v(t._s(e.title))])],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.subtitle))]),a("v-card-text",{staticClass:"text--primary"},t._l(e.text,(function(e,i){return a("div",{key:i},[t._v(t._s(e))])})),0),a("v-card-actions",[a("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Share ")]),a("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Explore ")])],1)],1)],1)})),1)],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("v-alert",{attrs:{width:"100%",border:"left",color:"green accent-4","colored-border":"",elevation:"3"}},[a("p",{staticClass:"display-2 ma-4 text-center"},[t._v("У нас есть мобильное приложение!")])])],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("iframe",{staticStyle:{border:"0"},attrs:{width:"100%",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8669302229528!2d39.71031331561711!3d47.21918597916086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b91286d80e3b%3A0xa80a645ed8e1ba37!2z0KHQtdCy0LXRgNC-LdCa0LDQstC60LDQt9GB0LrQuNC5INCk0LjQu9C40LDQuyDQnNCi0KPQodCY!5e0!3m2!1sru!2sru!4v1586893834906!5m2!1sru!2sru",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})]),a("v-col",{staticClass:"mt-4",attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"primary white--text"},[t._v("Остались вопросы?")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{sols:"12",md:"6"}},[a("v-text-field",{attrs:{"hide-details":"",solo:"",label:"Имя"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{"hide-details":"",solo:"",label:"E-mail"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"hide-details":"",solo:"",label:"Тема обращения"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"hide-details":"",solo:"",label:"Опишите свой вопрос"}})],1)],1)],1)],1)],1)],1)],1)},D=[],H={name:"HomeComponent",data:function(){return{items:[{src:"https://kp.ru/share/i/12/10735288/"},{src:"https://www.vsedomarossii.ru/photos/area_61/city_2433/street_3757/062_1.jpg"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0shzBs-cMP8qDxLa0pHumMyTspHULAy5VOUa1aewY08PejQYw&usqp=CAU"}],news:[{id:"1",title:"Последняя новость",subtitle:"Внешний вид будет изменен ближе к продакшену",text:["Whitehaven Beach","Whitsunday Island, Whitsunday Islands"]},{id:"2",title:"Последняя новость",subtitle:"Внешний вид будет изменен ближе к продакшену",text:["Whitehaven Beach","Whitsunday Island, Whitsunday Islands"]},{id:"3",title:"Последняя новость",subtitle:"Внешний вид будет изменен ближе к продакшену",text:["Whitehaven Beach","Whitsunday Island, Whitsunday Islands"]}]}}},$=H,Q=a("0798"),W=a("b0af"),M=a("99d9"),P=a("5e66"),F=a("3e35"),N=a("62ad"),J=a("4bd4"),R=a("adda"),z=a("0fd9"),U=a("8654"),Y=a("a844"),G=Object(c["a"])($,A,D,!1,null,null,null),K=G.exports;d()(G,{VAlert:Q["a"],VBtn:f["a"],VCard:W["a"],VCardActions:M["a"],VCardSubtitle:M["b"],VCardText:M["c"],VCardTitle:M["d"],VCarousel:P["a"],VCarouselItem:F["a"],VCol:N["a"],VContainer:h["a"],VForm:J["a"],VImg:R["a"],VRow:z["a"],VTextField:U["a"],VTextarea:Y["a"]});var X={name:"Home",components:{HomeComponent:K}},Z=X,tt=Object(c["a"])(Z,q,E,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("p",{staticClass:"display-2"},[t._v("Страница не найдена!")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v(" Назад в будущее! "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-car-hatchback")])],1)],1)],1)],1)},it=[],rt={},ot=Object(c["a"])(rt,at,it,!1,null,null,null),nt=ot.exports;d()(ot,{VBtn:f["a"],VCol:N["a"],VContainer:h["a"],VIcon:y["a"],VRow:z["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},t._l(t.feedData,(function(t,e){return a("v-col",{key:e,staticClass:"mb-2",attrs:{sm:"12",md:"7"}},[a("FeedComponent",{attrs:{date:t.date,text:t.text,images:t.images,isShowFullText:!1}})],1)})),1)},ct=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("v-list-item",[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("СКФ МТУСИ")]),a("v-list-item-subtitle",{staticClass:"font-weight-light"},[t._v(t._s(t.date))])],1)],1)],1),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},t._l(t.images,(function(e,i){return a("v-col",{key:e,attrs:{cols:t.getCols(i+1)}},[a("v-card",{staticClass:"d-flex ma-1",attrs:{flat:"",tile:""}},[a("v-img",{attrs:{height:"280",contained:"",src:e},on:{click:function(e){return t.setShared("Просмотр фотографий в полный экран скоро появится")}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1),a("div",{staticClass:"text--primary",style:{height:t.isShowFullText?"auto":"40px",overflow:"hidden"}},[t._v(" "+t._s(t.text)+" ")])],1),a("v-divider"),a("v-card-actions",[t.isShowFullText?t._e():a("v-btn",{attrs:{text:"",color:"blue darken-2"},on:{click:function(e){t.isShowFullText=!0}}},[t._v(" Подробнее ")]),a("v-spacer"),a("v-btn",{attrs:{text:""}},[a("v-icon",[t._v("mdi-eye-settings-outline")]),t._v(" 1231 ")],1)],1)],1)},dt=[],ut={props:{date:String,title:String,text:String,images:Array,isShowFullText:Boolean},data:function(){return{breakpoint:""}},methods:{setShared:function(t){this.$store.dispatch("setShared",t)},getCols:function(t){return-1===["sm","xs"].indexOf(this.$vuetify.breakpoint.name)?t%4===0?12:4:t%3===0?12:6}}},mt=ut,vt=a("8270"),pt=a("490a"),ft=Object(c["a"])(mt,lt,dt,!1,null,null,null),ht=ft.exports;d()(ft,{VBtn:f["a"],VCard:W["a"],VCardActions:M["a"],VCardText:M["c"],VCardTitle:M["d"],VCol:N["a"],VContainer:h["a"],VDivider:g["a"],VIcon:y["a"],VImg:R["a"],VListItem:x["a"],VListItemAvatar:vt["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VProgressCircular:pt["a"],VRow:z["a"],VSpacer:T["a"]});var bt={name:"Feed",data:function(){return{feedData:[{date:"18.04.2020 17:47",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel architecto et odit officiis fuga, doloremque dolore ab sequi, provident cupiditate corrupti assumenda fugit quasi numquam. Error repudiandae similique tempore?",images:["https://images.unsplash.com/photo-1587142198902-27b362ec78e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1587133075282-9ea4b0bbdef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1587140599254-d780483afdc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"]},{date:"18.04.2020 17:47",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel architecto et odit officiis fuga, doloremque dolore ab sequi, provident cupiditate corrupti assumenda fugit quasi numquam. Error repudiandae similique tempore?",images:["https://images.unsplash.com/photo-1587142198902-27b362ec78e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1587133075282-9ea4b0bbdef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1587140599254-d780483afdc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"]}]}},components:{FeedComponent:ht}},gt=bt,yt=Object(c["a"])(gt,st,ct,!1,null,null,null),wt=yt.exports;d()(yt,{VCol:N["a"],VRow:z["a"]}),i["a"].use(B["a"]);var xt=[{path:"/",name:"Home",component:et},{path:"/feed",name:"Feed",component:wt},{path:"/auth",name:"Authorization",component:function(){return a.e("chunk-ed317e18").then(a.bind(null,"2fef"))}},{path:"/404",name:"404",component:nt},{path:"*",redirect:"/404"}],_t=new B["a"]({mode:"history",base:"/skf/",routes:xt}),Ct=_t,Vt=a("2f62"),kt={state:{shared:{isShow:!1,timeToHide:6e3,message:""}},mutations:{setShared:function(t,e){var a=t.shared;a.isShow=!0,a.message=e},clearShared:function(t){var e=t.shared;e.isShow=!1,e.message=""}},actions:{setShared:function(t,e){var a=t.commit;t.state;a("setShared",e)},closeShared:function(t){var e=t.commit;e("clearShared")}},getters:{getSharedInfo:function(t){return t.shared}}};i["a"].use(Vt["a"]);var St=new Vt["a"].Store({state:{},mutations:{},actions:{},modules:{shared:kt}}),Tt=a("f309");a("bf40");i["a"].use(Tt["a"]);var jt=new Tt["a"]({icons:{iconfont:"mdi"},theme:{dark:!1}});i["a"].config.productionTip=!1,new i["a"]({router:Ct,store:St,vuetify:jt,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var i=a("7694"),r=a.n(i);r.a},7694:function(t,e,a){}});
//# sourceMappingURL=app.eb8858d7.js.map