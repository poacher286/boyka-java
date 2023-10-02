"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9131],{8570:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var a=n(3262),i=(n(79),n(8570));const l={title:"ElementActions",sidebar_position:3},o=void 0,r={unversionedId:"actions/elements/element-actions",id:"actions/elements/element-actions",title:"ElementActions",description:"Static methods",source:"@site/docs/api/actions/elements/element-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/element-actions",permalink:"/boyka-framework/api/actions/elements/element-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/element-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696155521,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:3,frontMatter:{title:"ElementActions",sidebar_position:3},sidebar:"api",previous:{title:"DropDownActions",permalink:"/boyka-framework/api/actions/elements/drop-down-actions"},next:{title:"FingerActions",permalink:"/boyka-framework/api/actions/elements/finger-actions"}},s={},c=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onElement</code>",id:"on-element",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>getAttribute (attribute)</code>",id:"get-attribute",level:3},{value:"<code>clear</code>",id:"clear",level:3},{value:"<code>isDisplayed</code>",id:"is-displayed",level:3},{value:"<code>isEnabled</code>",id:"is-enabled",level:3},{value:"<code>isSelected</code>",id:"is-selected",level:3},{value:"<code>scrollIntoView</code>",id:"scroll-into-view",level:3},{value:"<code>getStyle (attribute)</code>",id:"get-style",level:3},{value:"<code>tap</code>",id:"tap",level:3},{value:"<code>getText</code>",id:"get-text",level:3},{value:"<code>verifyAttribute (attribute)</code>",id:"verify-attribute",level:3},{value:"<code>verifyIsDisplayed</code>",id:"verify-is-displayed",level:3},{value:"<code>verifyIsEnabled</code>",id:"verify-is-enabled",level:3},{value:"<code>verifyIsSelected</code>",id:"verify-is-selected",level:3},{value:"<code>verifyStyle (attribute)</code>",id:"verify-style",level:3},{value:"<code>verifyText</code>",id:"verify-text",level:3}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"static-methods"},"Static methods"),(0,i.kt)("h3",{id:"on-element"},(0,i.kt)("inlineCode",{parentName:"h3"},"onElement")),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"IElementActions")," which will expose different methods to handle all other element actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"IElementActions elementActions = ElementActions.onElement ();\n")),(0,i.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,i.kt)("h3",{id:"get-attribute"},(0,i.kt)("inlineCode",{parentName:"h3"},"getAttribute (attribute)")),(0,i.kt)("p",null,"This method is used to get the attribute of the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nString attribute = onElement (locator).getAttribute ("href");\n')),(0,i.kt)("h3",{id:"clear"},(0,i.kt)("inlineCode",{parentName:"h3"},"clear")),(0,i.kt)("p",null,"This method is used to clear the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).clear ();\n")),(0,i.kt)("h3",{id:"is-displayed"},(0,i.kt)("inlineCode",{parentName:"h3"},"isDisplayed")),(0,i.kt)("p",null,"This method is used to check whether the given element is displayed or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nboolean displayed = onElement (locator).isDisplayed ();\n")),(0,i.kt)("h3",{id:"is-enabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"isEnabled")),(0,i.kt)("p",null,"This method is used to check whether the given element is enabled or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nboolean enabled = onElement (locator).isEnabled ();\n")),(0,i.kt)("h3",{id:"is-selected"},(0,i.kt)("inlineCode",{parentName:"h3"},"isSelected")),(0,i.kt)("p",null,"This method is used to check whether the given element is selected or not."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nboolean selected = onElement (locator).isSelected ();\n")),(0,i.kt)("h3",{id:"scroll-into-view"},(0,i.kt)("inlineCode",{parentName:"h3"},"scrollIntoView")),(0,i.kt)("p",null,"This method will scroll the element into the viewport."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).scrollIntoView ();\n")),(0,i.kt)("h3",{id:"get-style"},(0,i.kt)("inlineCode",{parentName:"h3"},"getStyle (attribute)")),(0,i.kt)("p",null,"This method will return the style of the given element for the given attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nString backgroundColor = onElement (locator).getStyle ("background-color");\n')),(0,i.kt)("h3",{id:"tap"},(0,i.kt)("inlineCode",{parentName:"h3"},"tap")),(0,i.kt)("p",null,"This method will tap on element on the Mobile screen using W3C actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).tap ();\n")),(0,i.kt)("h3",{id:"get-text"},(0,i.kt)("inlineCode",{parentName:"h3"},"getText")),(0,i.kt)("p",null,"This method is used to get the text of the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nString text = onElement (locator).getText ();\n")),(0,i.kt)("h3",{id:"verify-attribute"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyAttribute (attribute)")),(0,i.kt)("p",null,"This method is used to verify the given attribute of the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyAttribute ("attribute-name").isEqualTo ("Swag Labs");\n')),(0,i.kt)("h3",{id:"verify-is-displayed"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyIsDisplayed")),(0,i.kt)("p",null,"This method is used to verify the given element is displayed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyIsDisplayed ().isTrue();\n")),(0,i.kt)("h3",{id:"verify-is-enabled"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyIsEnabled")),(0,i.kt)("p",null,"This method is used to verify the given element is enabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyIsEnabled ().isTrue();\n")),(0,i.kt)("h3",{id:"verify-is-selected"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyIsSelected")),(0,i.kt)("p",null,"This method is used to verify the given element is selected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyIsSelected ().isTrue();\n")),(0,i.kt)("h3",{id:"verify-style"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyStyle (attribute)")),(0,i.kt)("p",null,"This method is used to verify the style of the given element locator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyStyleOf ("color").isEqualTo ("Red");\n')),(0,i.kt)("h3",{id:"verify-text"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyText")),(0,i.kt)("p",null,"This method is used to verify the text of the given element."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyText ().isEqualTo ("Swag Labs");\n')))}p.isMDXComponent=!0}}]);