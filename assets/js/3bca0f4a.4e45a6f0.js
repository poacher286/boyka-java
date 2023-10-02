"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1934],{8570:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=a,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(3262),a=(r(79),r(8570));const o={sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},i=void 0,s={unversionedId:"guides/api/compose-request",id:"guides/api/compose-request",title:"\ud83c\udfd7\ufe0f Compose Request",description:"For API automation, we have created ApiRequest class which you can utilize to build API requests.",source:"@site/docs/framework-docs/guides/api/compose-request.md",sourceDirName:"guides/api",slug:"/guides/api/compose-request",permalink:"/boyka-framework/docs/guides/api/compose-request",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/compose-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696155521,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup API Configuration",permalink:"/boyka-framework/docs/guides/api/setup-config"},next:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"}},u={},p=[{value:"Example",id:"example",level:2}],c={toc:p},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For API automation, we have created ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequest")," class which you can utilize to build API requests."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,a.kt)("a",{parentName:"p",href:"/api/builders/api-request"},"ApiRequest"),".")),(0,a.kt)("p",null,"This class has a builder pattern which allows you to build API requests in a fluent way."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Let's create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiRequest")," and build a request for ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/users")," with body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.createSession;\n\n// Create API session using the config key.\ncreateSession (PlatformType.API, "test_reqres");\n\n// Create request body object.\nfinal User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\n// Build API request.\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Similarly, you can build a request for other types of requests by modifying ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestMethod")," enum.")))}d.isMDXComponent=!0}}]);