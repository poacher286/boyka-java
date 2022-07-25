"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3311],{167:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return y}});var n=t(5721);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),y=i,d=p["".concat(c,".").concat(y)]||p[y]||f[y]||o;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2390:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var n=t(744),i=t(4690),o=(t(5721),t(167)),a=["components"],s={title:"VerifyDriverActions",sidebar_position:5},c=void 0,l={unversionedId:"actions/verify-driver-actions",id:"actions/verify-driver-actions",title:"VerifyDriverActions",description:"verifyBrowserTitle",source:"@site/docs/api/actions/verify-driver-actions.md",sourceDirName:"actions",slug:"/actions/verify-driver-actions",permalink:"/boyka-framework/api/actions/verify-driver-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/verify-driver-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1658655399,formattedLastUpdatedAt:"Jul 24, 2022",sidebarPosition:5,frontMatter:{title:"VerifyDriverActions",sidebar_position:5},sidebar:"api",previous:{title:"MouseActions",permalink:"/boyka-framework/api/actions/mouse-actions"},next:{title:"VerifyElementActions",permalink:"/boyka-framework/api/actions/verify-element-actions"}},u={},f=[{value:"<code>verifyBrowserTitle</code>",id:"verifybrowsertitle",level:2},{value:"<code>verifyBrowserUrl</code>",id:"verifybrowserurl",level:2}],p={toc:f};function y(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"verifybrowsertitle"},(0,o.kt)("inlineCode",{parentName:"h2"},"verifyBrowserTitle")),(0,o.kt)("p",null,"This method is used to verify the browser title."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserTitle;\n. . .\nverifyBrowserTitle (title).isEqualTo ("Swag Labs");\n')),(0,o.kt)("h2",{id:"verifybrowserurl"},(0,o.kt)("inlineCode",{parentName:"h2"},"verifyBrowserUrl")),(0,o.kt)("p",null,"This method is used to verify the browser url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserUrl;\n. . .\nverifyBrowserUrl (url).isEqualTo ("https://www.swaglabs.com/");\n')))}y.isMDXComponent=!0}}]);