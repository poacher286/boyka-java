"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4537],{167:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return w}});var i=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),w=o,m=p["".concat(l,".").concat(w)]||p[w]||u[w]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var i=n(744),o=n(4690),r=(n(5721),n(167)),a=["components"],c={title:"DriverActions",sidebar_position:1},l=void 0,s={unversionedId:"actions/driver-actions",id:"actions/driver-actions",title:"DriverActions",description:"currentWindowHandle",source:"@site/docs/api/actions/driver-actions.md",sourceDirName:"actions",slug:"/actions/driver-actions",permalink:"/boyka-framework/api/actions/driver-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/driver-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1658655399,formattedLastUpdatedAt:"Jul 24, 2022",sidebarPosition:1,frontMatter:{title:"DriverActions",sidebar_position:1},sidebar:"api",previous:{title:"Introduction",permalink:"/boyka-framework/api/intro"},next:{title:"ElementActions",permalink:"/boyka-framework/api/actions/element-actions"}},d={},u=[{value:"<code>currentWindowHandle</code>",id:"currentwindowhandle",level:2},{value:"<code>navigateTo</code>",id:"navigateto",level:2},{value:"<code>switchToNewWindow</code>",id:"switchtonewwindow",level:2},{value:"<code>switchToWindow</code>",id:"switchtowindow",level:2},{value:"<code>title</code>",id:"title",level:2},{value:"<code>url</code>",id:"url",level:2},{value:"<code>windowHandles</code>",id:"windowhandles",level:2}],p={toc:u};function w(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"currentwindowhandle"},(0,r.kt)("inlineCode",{parentName:"h2"},"currentWindowHandle")),(0,r.kt)("p",null,"This method returns the current window handle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.currentWindowHandle;\n. . .\nSystem.out.println (currentWindowHandle ());\n")),(0,r.kt)("h2",{id:"navigateto"},(0,r.kt)("inlineCode",{parentName:"h2"},"navigateTo")),(0,r.kt)("p",null,"This method is used to navigate to the given URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.navigateTo;\n. . .\nnavigateTo ("https://google.com");\n')),(0,r.kt)("h2",{id:"switchtonewwindow"},(0,r.kt)("inlineCode",{parentName:"h2"},"switchToNewWindow")),(0,r.kt)("p",null,"This method is used to switch to new window of given type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.switchToNewWindow;\nimport org.openqa.selenium.WindowType;\n. . .\nswitchToNewWindow (WindowType.TAB);\n")),(0,r.kt)("h2",{id:"switchtowindow"},(0,r.kt)("inlineCode",{parentName:"h2"},"switchToWindow")),(0,r.kt)("p",null,"This method is used to switch to window of given handle."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.switchToWindow;\n. . .\nswitchToWindow ("window-handle");\n')),(0,r.kt)("h2",{id:"title"},(0,r.kt)("inlineCode",{parentName:"h2"},"title")),(0,r.kt)("p",null,"This method will get the title of the browser window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.title;\n. . .\nSystem.out.println (title ());\n")),(0,r.kt)("h2",{id:"url"},(0,r.kt)("inlineCode",{parentName:"h2"},"url")),(0,r.kt)("p",null,"This method will get the URL of the browser window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.url;\n. . .\nSystem.out.println (url ());\n")),(0,r.kt)("h2",{id:"windowhandles"},(0,r.kt)("inlineCode",{parentName:"h2"},"windowHandles")),(0,r.kt)("p",null,"This method will get the list of all open window handles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DriverActions.windowHandles;\n. . .\nSystem.out.println (windowHandles ());\n")))}w.isMDXComponent=!0}}]);