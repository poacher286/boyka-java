"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9549],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(3262),r=(n(79),n(8570));const o={title:"IFingerActionsListener",sidebar_position:4},a=void 0,l={unversionedId:"actions/interfaces/listeners/elements/finger-actions-listener",id:"actions/interfaces/listeners/elements/finger-actions-listener",title:"IFingerActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/finger-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/finger-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/finger-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/finger-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696155521,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:4,frontMatter:{title:"IFingerActionsListener",sidebar_position:4},sidebar:"api",previous:{title:"IElementActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/element-actions-listener"},next:{title:"IFingersActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/fingers-actions-listener"}},s={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onDragTo (source, destination)</code>",id:"on-drag-to",level:2},{value:"<code>onSwipe (locator, direction)</code>",id:"on-swipe",level:2},{value:"<code>onSwipeTill (locator, direction)</code>",id:"on-swipe-till",level:2},{value:"<code>onTap (locator)</code>",id:"on-tap",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling the single finger related actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,r.kt)("h2",{id:"on-drag-to"},(0,r.kt)("inlineCode",{parentName:"h2"},"onDragTo (source, destination)")),(0,r.kt)("p",null,"This method will get executed after dragging the source element located by using the provided source element locator to destination element located by using the provided destination locator."),(0,r.kt)("h2",{id:"on-swipe"},(0,r.kt)("inlineCode",{parentName:"h2"},"onSwipe (locator, direction)")),(0,r.kt)("p",null,"This method will get executed after swiping on the element located by using the provided element locator in the provided direction."),(0,r.kt)("h2",{id:"on-swipe-till"},(0,r.kt)("inlineCode",{parentName:"h2"},"onSwipeTill (locator, direction)")),(0,r.kt)("p",null,"This method will get executed after swiping till the element located by using the provided element locator is visible in the provided direction."),(0,r.kt)("h2",{id:"on-tap"},(0,r.kt)("inlineCode",{parentName:"h2"},"onTap (locator)")),(0,r.kt)("p",null,"This method will get executed after tapping on the element located by using the provided element locator."))}m.isMDXComponent=!0}}]);