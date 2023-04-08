"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1161],{167:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var i=o(5721);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),k=l(o),m=n,u=k["".concat(c,".").concat(m)]||k[m]||p[m]||r;return o?i.createElement(u,a(a({ref:t},d),{},{components:o})):i.createElement(u,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}k.displayName="MDXCreateElement"},1117:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=o(8533),n=(o(5721),o(167));const r={title:"CookieActions",sidebar_position:3},a=void 0,s={unversionedId:"actions/drivers/cookie-actions",id:"actions/drivers/cookie-actions",title:"CookieActions",description:"Static methods",source:"@site/docs/api/actions/drivers/cookie-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/cookie-actions",permalink:"/boyka-framework/api/actions/drivers/cookie-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/cookie-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1679245869,formattedLastUpdatedAt:"Mar 19, 2023",sidebarPosition:3,frontMatter:{title:"CookieActions",sidebar_position:3},sidebar:"api",previous:{title:"ContextActions",permalink:"/boyka-framework/api/actions/drivers/context-actions"},next:{title:"DriverActions",permalink:"/boyka-framework/api/actions/drivers/driver-actions"}},c={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withCookies</code>",id:"with-cookies",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>cookie (name)</code>",id:"cookie-name",level:3},{value:"<code>cookies</code>",id:"cookies",level:3},{value:"<code>deleteAll</code>",id:"delete-all",level:3},{value:"<code>delete (name)</code>",id:"delete-name",level:3}],d={toc:l};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"static-methods"},"Static methods"),(0,n.kt)("h3",{id:"with-cookies"},(0,n.kt)("inlineCode",{parentName:"h3"},"withCookies")),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"ICookieActions")," which will expose different methods to handle Cookies."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"ICookieActions cookiesActions = CookieActions.withCookies ();\n")),(0,n.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,n.kt)("h3",{id:"cookie-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"cookie (name)")),(0,n.kt)("p",null,"This method will get the cookie from the browser based on it's name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\nimport org.openqa.selenium.Cookie;\n. . .\nCookie c = withCookies ().cookie ("cookie-name");\n')),(0,n.kt)("h3",{id:"cookies"},(0,n.kt)("inlineCode",{parentName:"h3"},"cookies")),(0,n.kt)("p",null,"This method will get all the cookie from the browser and return all the cookie names as list."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\n. . .\nList<String> cookieNames = withCookies ().cookies ();\n")),(0,n.kt)("h3",{id:"delete-all"},(0,n.kt)("inlineCode",{parentName:"h3"},"deleteAll")),(0,n.kt)("p",null,"This method will delete all the cookies from the browser."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\n. . .\nwithCookies ().deleteAll ();\n")),(0,n.kt)("h3",{id:"delete-name"},(0,n.kt)("inlineCode",{parentName:"h3"},"delete (name)")),(0,n.kt)("p",null,"This method will delete the cookie from the browser based on it's name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\n. . .\nwithCookies ().delete ("cookie-name");\n')))}p.isMDXComponent=!0}}]);