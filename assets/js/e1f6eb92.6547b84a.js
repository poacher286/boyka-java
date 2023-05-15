"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1304],{167:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(5721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||c[f]||s;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(4715),i=(n(5721),n(167));const s={sidebar_position:4,title:"\u2705 Verify Response"},o=void 0,a={unversionedId:"guides/api/verify-response",id:"guides/api/verify-response",title:"\u2705 Verify Response",description:"Once the ApiResponse object is returned from the withRequest method, it can be used to verify that the response is valid.",source:"@site/docs/framework-docs/guides/api/verify-response.md",sourceDirName:"guides/api",slug:"/guides/api/verify-response",permalink:"/boyka-framework/docs/guides/api/verify-response",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/verify-response.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1684151568,formattedLastUpdatedAt:"May 15, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u2705 Verify Response"},sidebar:"docs",previous:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"},next:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/web/setup-config"}},p={},l=[{value:"Verification methods",id:"verification-methods",level:3},{value:"Methods to get response data",id:"methods-to-get-response-data",level:3}],d={toc:l},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," object is returned from the ",(0,i.kt)("inlineCode",{parentName:"p"},"withRequest")," method, it can be used to verify that the response is valid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.clearSession;\n\n// Execute request.\nfinal ApiResponse response = ApiManager.execute (request);\n\n// Verify response body.\nresponse.verifyStatusCode ()\n    .isEqualTo (201);\nresponse.verifyTextField ("id")\n    .isNotNull ();\nresponse.verifyTextField ("name")\n    .isEqualTo (user.getName ());\nresponse.verifyTextField ("job")\n    .isEqualTo (user.getJob ());\nresponse.verifyTextField ("createdAt")\n    .isNotNull ();\nresponse.verifySchema("CreateUserSchema.json");\n\n// Clear session after test is completed.\nclearSession ();\n')),(0,i.kt)("h3",{id:"verification-methods"},"Verification methods"),(0,i.kt)("p",null,"Following are the methods exposed in ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class to verify the response body and status code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyBooleanField"),": Verifies the boolean field in response body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyHeader"),": Verifies the header in response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyIntField"),": Verifies the integer field in response body."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifySchema"),": Verifies the response body against the given schema."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyStatusCode"),": Verifies the status code of response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyStatusMessage"),": Verifies the status message of response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"verifyTextField"),": Verifies the text field in response body.")),(0,i.kt)("h3",{id:"methods-to-get-response-data"},"Methods to get response data"),(0,i.kt)("p",null,"Following are the methods exposed in ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class to get response data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getResponseData (expression)"),": Returns the response data as String."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getResponseData (expression, type)"),": Returns the response data as per the specified class type.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All the verification methods in ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class uses ",(0,i.kt)("a",{parentName:"p",href:"https://truth.dev/"},"Google Truth library")," and exposes it's methods to verify the response.")))}c.isMDXComponent=!0}}]);