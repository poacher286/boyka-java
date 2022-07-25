"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9778],{167:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(5721);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6179:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=t(744),a=t(4690),o=(t(5721),t(167)),i=["components"],l={title:"ErrorHandler",sidebar_position:1},c=void 0,u={unversionedId:"utils/error-handler",id:"utils/error-handler",title:"ErrorHandler",description:"handleAndThrow",source:"@site/docs/api/utils/error-handler.md",sourceDirName:"utils",slug:"/utils/error-handler",permalink:"/boyka-framework/api/utils/error-handler",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/utils/error-handler.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1658655399,formattedLastUpdatedAt:"Jul 24, 2022",sidebarPosition:1,frontMatter:{title:"ErrorHandler",sidebar_position:1},sidebar:"api",previous:{title:"DriverManager",permalink:"/boyka-framework/api/manager/driver-manager"},next:{title:"JsonUtil",permalink:"/boyka-framework/api/utils/json-util"}},s={},p=[{value:"<code>handleAndThrow</code>",id:"handleandthrow",level:2}],d={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"handleandthrow"},(0,o.kt)("inlineCode",{parentName:"h2"},"handleAndThrow")),(0,o.kt)("p",null,"This method is used to handle errors, logs the framework specific stack traces and throw the wrapped framework error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.utils.ErrorHandler.handleAndThrow;\nimport static com.github.wasiqb.boyka.enums.Message.ERROR_PARSING_RESPONSE_BODY;\n. . .\ntry {\n    . . .\n} catch (IOException e) {\n    handleAndThrow (ERROR_PARSING_RESPONSE_BODY, e);\n}\n. . .\n")))}f.isMDXComponent=!0}}]);