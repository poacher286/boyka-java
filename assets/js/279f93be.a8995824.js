"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[243],{167:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(4715),o=(r(5721),r(167));const a={sidebar_position:3,title:"\ud83d\udd2b Execute Request"},i=void 0,s={unversionedId:"guides/api/execute-request",id:"guides/api/execute-request",title:"\ud83d\udd2b Execute Request",description:"Once you have composed your API request, you can execute it using class ApiActions and method withRequest.",source:"@site/docs/framework-docs/guides/api/execute-request.md",sourceDirName:"guides/api",slug:"/guides/api/execute-request",permalink:"/boyka-framework/docs/guides/api/execute-request",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/execute-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1689839584,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udd2b Execute Request"},sidebar:"docs",previous:{title:"\ud83c\udfd7\ufe0f Compose Request",permalink:"/boyka-framework/docs/guides/api/compose-request"},next:{title:"\u2705 Verify Response",permalink:"/boyka-framework/docs/guides/api/verify-response"}},p={},c=[{value:"Example",id:"example",level:2},{value:"API Response class",id:"api-response-class",level:2}],u={toc:c},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once you have composed your API request, you can execute it using class ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiActions")," and method ",(0,o.kt)("inlineCode",{parentName:"p"},"withRequest"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,o.kt)("a",{parentName:"p",href:"/api/actions/api/api-actions"},"ApiActions"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.api.ApiActions.withRequest;\n. . .\n// Using request created in previous example.\nfinal ApiResponse response = withRequest (request).execute ();\n")),(0,o.kt)("h2",{id:"api-response-class"},"API Response class"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"withRequest")," method will return ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class object which contains methods to verify the response body and status code."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,o.kt)("a",{parentName:"p",href:"/api/builders/api-response"},"ApiResponse"),".")))}d.isMDXComponent=!0}}]);