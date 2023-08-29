"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5553],{167:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>x});var o=n(5721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,x=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(x,i(i({ref:t},p),{},{components:n})):o.createElement(x,i({ref:t},p))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(4715),r=(n(5721),n(167));const a={title:"TextBoxActions",sidebar_position:6},i=void 0,s={unversionedId:"actions/elements/textbox-actions",id:"actions/elements/textbox-actions",title:"TextBoxActions",description:"Static methods",source:"@site/docs/api/actions/elements/textbox-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/textbox-actions",permalink:"/boyka-framework/api/actions/elements/textbox-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/textbox-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1689839584,formattedLastUpdatedAt:"Jul 20, 2023",sidebarPosition:6,frontMatter:{title:"TextBoxActions",sidebar_position:6},sidebar:"api",previous:{title:"FingersActions",permalink:"/boyka-framework/api/actions/elements/fingers-actions"},next:{title:"IApiActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/api/api-actions-listener"}},c={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onTextBox (locator)</code>",id:"on-textbox-locator",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>enterText (text)</code>",id:"enter-text",level:3},{value:"<code>pressKey (key)</code>",id:"press-key",level:3}],p={toc:l},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"static-methods"},"Static methods"),(0,r.kt)("h3",{id:"on-textbox-locator"},(0,r.kt)("inlineCode",{parentName:"h3"},"onTextBox (locator)")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"ITextBoxActions")," which will expose different methods to handle all text box related actions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"ITextBoxActions textBoxActions = TextBoxActions.onTextBox (locator);\n")),(0,r.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,r.kt)("h3",{id:"enter-text"},(0,r.kt)("inlineCode",{parentName:"h3"},"enterText (text)")),(0,r.kt)("p",null,"This method is used to enter the given text to the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.TextBoxActions.onTextBox;\n. . .\nonTextBox (locator).enterText (text);\n")),(0,r.kt)("h3",{id:"press-key"},(0,r.kt)("inlineCode",{parentName:"h3"},"pressKey (key)")),(0,r.kt)("p",null,"This method is used to press the given key to the given element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.TextBoxActions.onTextBox;\n. . .\nonTextBox (locator).pressKey (key);\n")))}m.isMDXComponent=!0}}]);