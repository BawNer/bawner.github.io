(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,m=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-ed317e18":"77f6edfa"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=i[t]=[e,r]}));e.push(a[2]=r);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=i[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/skf/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"pl-5",attrs:{app:"",dense:"",flat:"","clipped-left":""}},[a("v-toolbar-title",[t._v("СКФ МТУСИ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:t.switchVuetifyTheme}},[a("v-icon",[t._v(t._s(t.getVuetifyTypeTheme?"mdi-weather-sunny":"mdi-weather-night"))])],1),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setShared("Данная функция появится в ближайшем времени!")}}},[a("v-icon",[t._v("mdi-cog-outline")])],1),a("v-menu",{attrs:{left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{icon:""}},r),[a("v-icon",[t._v("mdi-account")])],1)]}}])},[a("v-list",[a("v-list-item",{attrs:{link:"",to:"/auth"}},[a("v-list-item-title",[t._v("Авторизация")])],1)],1)],1)],1),a("v-navigation-drawer",{attrs:{app:"",clipped:"",width:"320"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",{attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v("Приемная комиссия")]),a("v-list-item-subtitle",[t._v("priеm@skf-mtusi.ru")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{nav:"",dense:"",shaped:""}},t._l(t.siteRoutes,(function(e,r){return a("v-list-item",{key:r,attrs:{link:"",to:e.path}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1),a("v-divider"),a("v-list",{attrs:{nav:""}},t._l(t.menuLinks,(function(e,r){return a("v-list-item",{key:r,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.title))])],1)})),1)],1),a("v-content",[a("v-container",[a("router-view")],1)],1),a("v-bottom-navigation",{staticClass:"d-md-none",attrs:{app:"",grow:"",horizontal:""}},[a("v-btn",{on:{click:function(e){t.drawer=!t.drawer}}},[a("v-icon",[t._v("mdi-menu")])],1),t._l(t.siteRoutes,(function(e){return a("v-btn",{key:e.title,attrs:{to:e.path}},[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1)}))],2),a("v-snackbar",{attrs:{color:"indigo darken-2",vertical:"",top:"",timeout:t.getShared.timeToHide},model:{value:t.getShared.isShow,callback:function(e){t.$set(t.getShared,"isShow",e)},expression:"getShared.isShow"}},[t._v(" "+t._s(t.getShared.message)+" "),a("v-btn",{attrs:{text:""},on:{click:t.closeShared}},[t._v(" Закрыть ")])],1)],1)},n=[],o=(a("c975"),a("b0c0"),{name:"App",data:function(){return{drawer:null,siteRoutes:[{title:"Главная",path:"/",icon:"compass-outline"},{title:"Новости",path:"/feed",icon:"newspaper-variant-outline"},{title:"Bug",path:"/bug",icon:"bug-outline"}],menuLinks:[{title:"Очень длинная ссылка на какой-либо ресурс будет выглядеть примерно вот так",path:"",icon:"folder"},{title:"Обычная ссылка",path:"",icon:"folder"}]}},methods:{switchVuetifyTheme:function(){this.$vuetify.theme.dark=!this.getVuetifyTypeTheme},closeShared:function(){this.$store.dispatch("closeShared")},setShared:function(t){this.$store.dispatch("setShared",t)}},computed:{getVuetifyTypeTheme:function(){return this.$vuetify.theme.dark},getShared:function(){return this.$store.getters.getSharedInfo}},beforeMount:function(){this.drawer=-1===["xs","sm"].indexOf(this.$vuetify.breakpoint.name)}}),s=o,c=(a("5c0b"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),m=a("40dc"),v=a("b81c"),f=a("8336"),p=a("a523"),h=a("a75b"),b=a("ce7e"),g=a("132d"),y=a("8860"),w=a("da13"),x=a("5d23"),_=a("34c3"),C=a("e449"),V=a("f774"),k=a("2db4"),S=a("2fa4"),j=a("2a7f"),T=Object(c["a"])(s,i,n,!1,null,null,null),O=T.exports;u()(T,{VApp:d["a"],VAppBar:m["a"],VBottomNavigation:v["a"],VBtn:f["a"],VContainer:p["a"],VContent:h["a"],VDivider:b["a"],VIcon:g["a"],VList:y["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemIcon:_["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VMenu:C["a"],VNavigationDrawer:V["a"],VSnackbar:k["a"],VSpacer:S["a"],VToolbarTitle:j["a"]});var I=a("9483");Object(I["a"])("".concat("/skf/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("d3b7");var L=a("8c4f"),B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeComponent")],1)},E=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"justify-center"},[a("v-col",{attrs:{xs:"12",md:"10"}},[a("v-carousel",t._l(t.items,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1),a("v-col",{staticClass:"mt-4 text-center",attrs:{xs:"12",md:"10"}},[a("v-alert",{attrs:{width:"100%",border:"left",color:"red accent-4","colored-border":"",elevation:"3"}},[a("p",{staticClass:"display-2 ma-4"},[t._v("Тут может быть важный текст")])])],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("v-row",{staticClass:"flex-nowrap",staticStyle:{"overflow-x":"auto"}},t._l(t.news,(function(e){return a("v-col",{key:e.id,staticClass:"mt-2"},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[a("v-card-title",[t._v(t._s(e.title))])],1),a("v-card-subtitle",{staticClass:"pb-0"},[t._v(t._s(e.subtitle))]),a("v-card-text",{staticClass:"text--primary"},t._l(e.text,(function(e,r){return a("div",{key:r},[t._v(t._s(e))])})),0),a("v-card-actions",[a("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Share ")]),a("v-btn",{attrs:{color:"orange",text:""}},[t._v(" Explore ")])],1)],1)],1)})),1)],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("v-alert",{attrs:{width:"100%",border:"left",color:"green accent-4","colored-border":"",elevation:"3"}},[a("p",{staticClass:"display-2 ma-4"},[t._v("Тут может быть важный текст")])])],1),a("v-col",{attrs:{cols:"12",md:"10"}},[a("iframe",{staticStyle:{border:"0"},attrs:{width:"100%",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8669302229528!2d39.71031331561711!3d47.21918597916086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b91286d80e3b%3A0xa80a645ed8e1ba37!2z0KHQtdCy0LXRgNC-LdCa0LDQstC60LDQt9GB0LrQuNC5INCk0LjQu9C40LDQuyDQnNCi0KPQodCY!5e0!3m2!1sru!2sru!4v1586893834906!5m2!1sru!2sru",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})]),a("v-col",{staticClass:"mt-4",attrs:{cols:"12",md:"6"}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",{staticClass:"primary white--text"},[t._v("Остались вопросы?")]),a("v-form",[a("v-container",[a("v-row",[a("v-col",{attrs:{sols:"12",md:"6"}},[a("v-text-field",{attrs:{"hide-details":"",solo:"",label:"Имя"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{"hide-details":"",solo:"",label:"E-mail"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{"hide-details":"",solo:"",label:"Тема обращения"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{"hide-details":"",solo:"",label:"Опишите свой вопрос"}})],1)],1)],1)],1)],1)],1)],1)},D=[],A={name:"HomeComponent",data:function(){return{items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"}],news:[{id:"1",title:"Top 10 Australian beaches",subtitle:"Number 10",text:["Whitehaven Beach","Whitsunday Island, Whitsunday Islands"]},{id:"2",title:"Top 10 Australian beaches",subtitle:"Number 10",text:["Whitehaven Beach","Whitsunday Island, Whitsunday Islands"]},{id:"3",title:"Top 10 Australian beaches",subtitle:"Number 10",text:["Whitehaven Beach","Whitsunday Island, Whitsunday Islands"]}]}}},H=A,$=a("0798"),W=a("b0af"),Q=a("99d9"),N=a("5e66"),M=a("3e35"),P=a("62ad"),F=a("4bd4"),J=a("adda"),R=a("0fd9"),z=a("8654"),K=a("a844"),G=Object(c["a"])(H,q,D,!1,null,null,null),X=G.exports;u()(G,{VAlert:$["a"],VBtn:f["a"],VCard:W["a"],VCardActions:Q["a"],VCardSubtitle:Q["b"],VCardText:Q["c"],VCardTitle:Q["d"],VCarousel:N["a"],VCarouselItem:M["a"],VCol:P["a"],VContainer:p["a"],VForm:F["a"],VImg:J["a"],VRow:R["a"],VTextField:z["a"],VTextarea:K["a"]});var Y={name:"Home",components:{HomeComponent:X}},U=Y,Z=Object(c["a"])(U,B,E,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"justify-center"},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("p",{staticClass:"display-2"},[t._v("Страница не найдена!")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.go(-1)}}},[t._v(" Назад в будущее! "),a("v-icon",{attrs:{right:"",dark:""}},[t._v("mdi-car-hatchback")])],1)],1)],1)],1)},at=[],rt={},it=Object(c["a"])(rt,et,at,!1,null,null,null),nt=it.exports;u()(it,{VBtn:f["a"],VCol:P["a"],VContainer:p["a"],VIcon:g["a"],VRow:R["a"]});var ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},t._l(t.feedData,(function(t,e){return a("v-col",{key:e,staticClass:"mb-2",attrs:{sm:"12",md:"7"}},[a("FeedComponent",{attrs:{date:t.date,text:t.text,images:t.images}})],1)})),1)},st=[],ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",[a("v-list-item",[a("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[a("v-img",{staticClass:"elevation-6",attrs:{src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("СКФ МТУСИ")]),a("v-list-item-subtitle",{staticClass:"font-weight-light"},[t._v(t._s(t.date))])],1)],1)],1),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},t._l(t.images,(function(e,r){return a("v-col",{key:e,attrs:{cols:t.getCols(r+1)}},[a("v-card",{staticClass:"d-flex ma-1",attrs:{flat:"",tile:""}},[a("v-img",{attrs:{height:"280",contained:"",src:e},on:{click:function(e){return t.setShared("Просмотр фотографий в полный экран скоро появится")}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1),a("div",{staticClass:"text--primary"},[t._v(" "+t._s(t.text)+" ")])],1),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"blue darken-2"},on:{click:function(e){return t.setShared("Данная функция скоро появится!")}}},[t._v(" Подробнее ")]),a("v-spacer"),a("v-btn",{attrs:{text:""}},[a("v-icon",[t._v("mdi-eye-settings-outline")]),t._v(" 1231 ")],1)],1)],1)},lt=[],ut={props:{date:String,title:String,text:String,images:Array},data:function(){return{breakpoint:""}},methods:{setShared:function(t){this.$store.dispatch("setShared",t)},getCols:function(t){return-1===["sm","xs"].indexOf(this.$vuetify.breakpoint.name)?t%4===0?12:4:t%3===0?12:6}}},dt=ut,mt=a("8270"),vt=a("490a"),ft=Object(c["a"])(dt,ct,lt,!1,null,null,null),pt=ft.exports;u()(ft,{VBtn:f["a"],VCard:W["a"],VCardActions:Q["a"],VCardText:Q["c"],VCardTitle:Q["d"],VCol:P["a"],VContainer:p["a"],VDivider:b["a"],VIcon:g["a"],VImg:J["a"],VListItem:w["a"],VListItemAvatar:mt["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VProgressCircular:vt["a"],VRow:R["a"],VSpacer:S["a"]});var ht={name:"Feed",data:function(){return{feedData:[{date:"18.04.2020 17:47",text:"      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel architecto et odit officiis fuga, doloremque dolore ab sequi, provident cupiditate corrupti assumenda fugit quasi numquam. Error repudiandae similique tempore?",images:["https://images.unsplash.com/photo-1587142198902-27b362ec78e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1587133075282-9ea4b0bbdef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1587140599254-d780483afdc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"]},{date:"18.04.2020 17:47",text:"      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel architecto et odit officiis fuga, doloremque dolore ab sequi, provident cupiditate corrupti assumenda fugit quasi numquam. Error repudiandae similique tempore?",images:["https://images.unsplash.com/photo-1587142198902-27b362ec78e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80","https://images.unsplash.com/photo-1587133075282-9ea4b0bbdef9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1587140599254-d780483afdc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"]}]}},components:{FeedComponent:pt}},bt=ht,gt=Object(c["a"])(bt,ot,st,!1,null,null,null),yt=gt.exports;u()(gt,{VCol:P["a"],VRow:R["a"]}),r["a"].use(L["a"]);var wt=[{path:"/",name:"Home",component:tt},{path:"/feed",name:"Feed",component:yt},{path:"/auth",name:"Authorization",component:function(){return a.e("chunk-ed317e18").then(a.bind(null,"2fef"))}},{path:"/404",name:"404",component:nt},{path:"*",redirect:"/404"}],xt=new L["a"]({mode:"history",base:"/skf/",routes:wt}),_t=xt,Ct=a("2f62"),Vt={state:{shared:{isShow:!1,timeToHide:6e3,message:""}},mutations:{setShared:function(t,e){var a=t.shared;a.isShow=!0,a.message=e},clearShared:function(t){var e=t.shared;e.isShow=!1,e.message=""}},actions:{setShared:function(t,e){var a=t.commit;t.state;a("setShared",e)},closeShared:function(t){var e=t.commit;e("clearShared")}},getters:{getSharedInfo:function(t){return t.shared}}};r["a"].use(Ct["a"]);var kt=new Ct["a"].Store({state:{},mutations:{},actions:{},modules:{shared:Vt}}),St=a("f309");a("bf40");r["a"].use(St["a"]);var jt=new St["a"]({icons:{iconfont:"mdi"},theme:{dark:!1}});r["a"].config.productionTip=!1,new r["a"]({router:_t,store:kt,vuetify:jt,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("7694"),i=a.n(r);i.a},7694:function(t,e,a){}});
//# sourceMappingURL=app.fba7a3b4.js.map