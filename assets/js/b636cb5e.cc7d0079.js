"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1493],{167:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(5721);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(y,r(r({ref:t},d),{},{components:n})):o.createElement(y,r({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(744),l=n(4690),a=(n(5721),n(167)),r=["components"],i={title:"DropDownActions",sidebar_position:2},c=void 0,s={unversionedId:"actions/drop-down-actions",id:"actions/drop-down-actions",title:"DropDownActions",description:"deselectAll (locator)",source:"@site/docs/api/actions/drop-down-actions.md",sourceDirName:"actions",slug:"/actions/drop-down-actions",permalink:"/boyka-framework/api/actions/drop-down-actions",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/actions/drop-down-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1661773160,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:2,frontMatter:{title:"DropDownActions",sidebar_position:2},sidebar:"api",previous:{title:"DriverActions",permalink:"/boyka-framework/api/actions/driver-actions"},next:{title:"ElementActions",permalink:"/boyka-framework/api/actions/element-actions"}},d={},p=[{value:"<code>deselectAll (locator)</code>",id:"deselect-all",level:2},{value:"<code>deselectByIndex (locator, index)</code>",id:"deselect-by-index",level:2},{value:"<code>deselectByText (locator, text)</code>",id:"deselect-by-text",level:2},{value:"<code>deselectByValue (locator, value)</code>",id:"deselect-by-value",level:2},{value:"<code>selectByIndex (locator, index)</code>",id:"select-by-index",level:2},{value:"<code>selectByText (locator, text)</code>",id:"select-by-text",level:2},{value:"<code>selectByValue (locator, value)</code>",id:"select-by-value",level:2},{value:"<code>selectedItem (locator)</code>",id:"selected-item",level:2},{value:"<code>selectedItems (locator)</code>",id:"selected-items",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deselect-all"},(0,a.kt)("inlineCode",{parentName:"h2"},"deselectAll (locator)")),(0,a.kt)("p",null,"This method will deselect all the options of the given multi-select element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.deselectAll;\n. . .\ndeselectAll (multiSelectLocator);\n")),(0,a.kt)("h2",{id:"deselect-by-index"},(0,a.kt)("inlineCode",{parentName:"h2"},"deselectByIndex (locator, index)")),(0,a.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.deselectByIndex;\n. . .\ndeselectByIndex (dropdownLocator, 1);\n")),(0,a.kt)("h2",{id:"deselect-by-text"},(0,a.kt)("inlineCode",{parentName:"h2"},"deselectByText (locator, text)")),(0,a.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given text."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.deselectByText;\n. . .\ndeselectByText (dropdownLocator, "Option 1");\n')),(0,a.kt)("h2",{id:"deselect-by-value"},(0,a.kt)("inlineCode",{parentName:"h2"},"deselectByValue (locator, value)")),(0,a.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.deselectByValue;\n. . .\ndeselectByValue (dropdownLocator, "val1");\n')),(0,a.kt)("h2",{id:"select-by-index"},(0,a.kt)("inlineCode",{parentName:"h2"},"selectByIndex (locator, index)")),(0,a.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.selectByIndex;\n. . .\nselectByIndex (dropdownLocator, 2);\n")),(0,a.kt)("h2",{id:"select-by-text"},(0,a.kt)("inlineCode",{parentName:"h2"},"selectByText (locator, text)")),(0,a.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given text."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.selectByText;\n. . .\nselectByText (dropdownLocator, "Option 2");\n')),(0,a.kt)("h2",{id:"select-by-value"},(0,a.kt)("inlineCode",{parentName:"h2"},"selectByValue (locator, value)")),(0,a.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.selectByValue;\n. . .\nselectByValue (dropdownLocator, "value-2");\n')),(0,a.kt)("h2",{id:"selected-item"},(0,a.kt)("inlineCode",{parentName:"h2"},"selectedItem (locator)")),(0,a.kt)("p",null,"This method will return the selected item text of the given dropdown / multi-select element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.selectedItem;\n. . .\nString itemText = selectedItem (dropdownLocator);\n")),(0,a.kt)("h2",{id:"selected-items"},(0,a.kt)("inlineCode",{parentName:"h2"},"selectedItems (locator)")),(0,a.kt)("p",null,"This method will return the list of selected item texts of the given multi-select element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.selectedItems;\n. . .\nList<String> itemTexts = selectedItems (dropdownLocator);\n")))}m.isMDXComponent=!0}}]);