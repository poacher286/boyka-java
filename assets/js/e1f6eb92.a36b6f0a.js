"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1304],{167:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(5721);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8533),o=(r(5721),r(167));const i={sidebar_position:4,title:"\u2705 Verify Response"},a=void 0,s={unversionedId:"guides/api/verify-response",id:"guides/api/verify-response",title:"\u2705 Verify Response",description:"Once the ApiResponse object is returned from the execute method, it can be used to verify that the response is valid.",source:"@site/docs/framework-docs/guides/api/verify-response.md",sourceDirName:"guides/api",slug:"/guides/api/verify-response",permalink:"/boyka-framework/docs/guides/api/verify-response",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/verify-response.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1672684738,formattedLastUpdatedAt:"Jan 2, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u2705 Verify Response"},sidebar:"docs",previous:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"},next:{title:"\ud83e\ude9b Setup Configuration file",permalink:"/boyka-framework/docs/guides/web/setup-config"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiResponse")," object is returned from the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method, it can be used to verify that the response is valid."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'final ApiResponse response = ApiManager.execute (request);\n\nresponse.verifyStatusCode ()\n    .isEqualTo (201);\nresponse.verifyTextField ("id")\n    .isNotNull ();\nresponse.verifyTextField ("name")\n    .isEqualTo (user.getName ());\nresponse.verifyTextField ("job")\n    .isEqualTo (user.getJob ());\nresponse.verifyTextField ("createdAt")\n    .isNotNull ();\nresponse.verifySchema("CreateUserSchema.json");\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All the verification methods in ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class uses ",(0,o.kt)("a",{parentName:"p",href:"https://truth.dev/"},"Google Truth library")," and exposes it's methods to verify the response.")))}u.isMDXComponent=!0}}]);