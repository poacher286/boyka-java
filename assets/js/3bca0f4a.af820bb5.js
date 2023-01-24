"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1934],{167:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(8533),o=(r(5721),r(167));const a={sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},i=void 0,s={unversionedId:"guides/api/compose-request",id:"guides/api/compose-request",title:"\ud83c\udfd7\ufe0f Compose Request",description:"For API automation, we have created ApiRequest class which you can utilize to build API requests.",source:"@site/docs/framework-docs/guides/api/compose-request.md",sourceDirName:"guides/api",slug:"/guides/api/compose-request",permalink:"/boyka-framework/docs/guides/api/compose-request",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/compose-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1672684738,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup API Configuration",permalink:"/boyka-framework/docs/guides/api/setup-config"},next:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"}},u={},p=[{value:"Example",id:"example",level:2}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For API automation, we have created ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiRequest")," class which you can utilize to build API requests."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,o.kt)("a",{parentName:"p",href:"/api/builders/api-request"},"ApiRequest"),".")),(0,o.kt)("p",null,"This class has a builder pattern which allows you to build API requests in a fluent way."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Let's create an instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiRequest")," and build a request for ",(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/users")," with body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// This key refers to config key under API section.\nfinal String API_CONFIG_KEY = "test_reqres";\n\n// Create request body object.\nfinal User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\n// Build API request.\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .configKey (API_CONFIG_KEY)\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Similarly, you can build a request for other types of requests by modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"RequestMethod")," enum.")))}l.isMDXComponent=!0}}]);