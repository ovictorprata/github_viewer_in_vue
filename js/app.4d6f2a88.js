(function(){"use strict";var t={9023:function(t,e,n){var s=n(144),o=n(1096),r=n(3250),i=n(7179),a=n(5057),u=n(2469),l=n(3551),c=n(5234),p=function(){var t=this,e=t._self._c;return e(o.Z,[e(r.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(u.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(c.Z),e(i.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],f=n(6035),d=function(){var t=this,e=t._self._c;return e(f.Z,[e("GithubRepo",{on:{reposelected:t.onRepoSelected}}),e("RepoContent",{attrs:{repo:t.repo}})],1)},m=[],g=n(4177),v=n(4437),b=n(5294),y=n(6514),w=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,{staticClass:"text-center"},[e(v.Z,{attrs:{cols:"6"}},[e(g.Z,{attrs:{label:"Encontre seu usuário",items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login",clearable:""},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(v.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,"item-text":"name",label:"Selecione o repositorio","return-object":"","single-line":"",clearable:""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1)],1)},_=[];function Z(t,e){let n=null;function s(){n&&clearTimeout(n);const s=this,o=arguments;n=setTimeout((()=>{t.apply(s,o),n=null}),e)}return s}async function k(t){let e=!0,n=[],s=1;while(e){const o=await fetch(`${t}?page=${s}`),r=await o.json();r.length>0?(n=n.concat(r),s++):e=!1}return n}const x={async search_users(t){const e=`https://api.github.com/search/users?q=${t}`,n=await fetch(e);return await n.json()},async lista_repos(t){const e=`https://api.github.com/users/${t}/repos`,n=await k(e);return n},async lista_issues(t,e,n){const s=`https://api.github.com/repos/${t}/${e}/issues?page=${n}`,o=await fetch(s),r=await o.json();return r},async lista_contents(t,e,n=""){const s=`https://api.github.com/repos/${t}/${e}/contents/${n}`,o=await fetch(s),r=await o.json();return r}};var j={data:()=>({user:null,repo:null,usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1}),methods:{procuraUsuariosGithub:Z((async function(){this.userloading=!0;const t=await x.search_users(this.usersearch);this.userlist=t.items,this.userloading=!1}),500),async listaRepositorios(){this.repoloading=!0;const t=await x.lista_repos(this.user);this.repolist=t,this.repoloading=!1}},watch:{usersearch(){this.procuraUsuariosGithub()},user(){this.user&&this.listaRepositorios()},repo(){this.$emit("reposelected",this.repo)}}},C=j,P=n(3736),O=(0,P.Z)(C,w,_,!1,null,null,null),$=O.exports,S=n(261),R=n(8324),T=n(6275),G=n(4397),M=function(){var t=this,e=t._self._c;return e("div",[e(b.Z,[e(v.Z,{attrs:{cols:"12"}},[[e(R.Z,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.contents,"items-per-page":10}})],e(G.Z,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[t.actualPath?e(S.Z,[t._v(" 📂 "+t._s(t.actualPath)+" ")]):t._e(),e("tr",[e("th",{staticClass:"text-left"},[t._v("Content")])])],1),e("tbody",t._l(t.contents,(function(n,s){return e("tr",{key:n.name+s},[e("td"),"file"==n.type?e(a.Z,[t._v(" mdi-file ")]):e(a.Z,{on:{click:function(e){return t.openPath(n.path)}}},[t._v(" mdi-folder ")]),e("td",{on:{click:function(e){return t.openPath(n.path)}}},[t._v(" "+t._s(n.name)+" ")])],1)})),0)]},proxy:!0}])})],2)],1),e(b.Z,[e(v.Z,{attrs:{cols:"12"}},[t.loading?e(T.Z,{attrs:{indeterminate:"",color:"primary"}}):t._e(),t.temmais?e(i.Z,{attrs:{color:"primary"},on:{click:t.listContents}},[t._v("MAIS")]):t._e()],1)],1)],1)},V=[],A=(n(7658),{props:["repo"],data:()=>({contents:[],loading:!1,temmais:!1,actualPath:null,headers:[{text:"File",align:"start",sortable:!1,value:"name"}]}),methods:{async listContents(){this.loading=!0;const t=await x.lista_contents(this.repo.owner.login,this.repo.name);this.contents=this.contents.concat(t),this.loading=!1},async openPath(t){let e=[];const n=await x.lista_contents(this.repo.owner.login,this.repo.name,t);this.contents=n,e.push(this.repo.owner.login,this.repo.name,t),this.actualPath=e.join("/")}},watch:{repo(){console.log("repo watch!"),this.repo&&(this.contents=[],this.listContents())}}}),E=A,F=(0,P.Z)(E,M,V,!1,null,null,null),I=F.exports,L={components:{GithubRepo:$,RepoContent:I},data:()=>({repo:null}),methods:{onRepoSelected(t){this.repo=t}}},U=L,q=(0,P.Z)(U,d,m,!1,null,null,null),N=q.exports,z={name:"App",components:{GithubVuewer:N},data:()=>({})},B=z,D=(0,P.Z)(B,p,h,!1,null,null,null),H=D.exports,J=n(2250);s.ZP.use(J.Z);var K=new J.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:K,render:t=>t(H)}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(c=0;c<t.length;c++){s=t[c][0],o=t[c][1],r=t[c][2];for(var a=!0,u=0;u<s.length;u++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(a=!1,r<i&&(i=r));if(a){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],a=s[1],u=s[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(e&&e(s);l<i.length;l++)r=i[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},s=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(9023)}));s=n.O(s)})();
//# sourceMappingURL=app.4d6f2a88.js.map