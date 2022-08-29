"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3634],{167:function(e,t,i){i.d(t,{Zo:function(){return m},kt:function(){return u}});var n=i(5721);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=c(i),u=o,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return i?n.createElement(h,l(l({ref:t},m),{},{components:i})):n.createElement(h,l({ref:t},m))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8143:function(e,t,i){i.r(t),i.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var n=i(744),o=i(4690),a=(i(5721),i(167)),l=["components"],r={title:"\ud83d\udce9 Commit steps",sidebar_position:6},s=void 0,c={unversionedId:"project-details/commit-steps",id:"project-details/commit-steps",title:"\ud83d\udce9 Commit steps",description:"We are using Conventional Commits to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:",source:"@site/docs/contributing/project-details/commit-steps.md",sourceDirName:"project-details",slug:"/project-details/commit-steps",permalink:"/boyka-framework/contributing/project-details/commit-steps",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/contributing/project-details/commit-steps.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1661773160,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:6,frontMatter:{title:"\ud83d\udce9 Commit steps",sidebar_position:6},sidebar:"contributing",previous:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"},next:{title:"\ud83e\udd1d Get your PR ready",permalink:"/boyka-framework/contributing/project-details/ready-your-pr"}},m={},p=[{value:"Add Conventional Commits extension",id:"add-conventional-commits-extension",level:2},{value:"Disable auto commit",id:"disable-auto-commit",level:2},{value:"Build commit message",id:"build-commit-message",level:2},{value:"Add commit type",id:"add-commit-type",level:3},{value:"Add commit scope",id:"add-commit-scope",level:3},{value:"Add relatable Emoji",id:"add-relatable-emoji",level:3},{value:"Add short description",id:"add-short-description",level:3},{value:"Add long description (optional)",id:"add-long-description-optional",level:3},{value:"Add breaking changes details (optional)",id:"add-breaking-changes-details-optional",level:3},{value:"Commit the changes",id:"commit-the-changes",level:2},{value:"Pre-commit checks",id:"pre-commit-checks",level:2},{value:"Push your commit",id:"push-your-commit",level:2},{value:"Create draft PR",id:"create-draft-pr",level:2}],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are using ",(0,a.kt)("a",{parentName:"p",href:"https://conventionalcommits.org/"},"Conventional Commits")," to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:"),(0,a.kt)("h2",{id:"add-conventional-commits-extension"},"Add Conventional Commits extension"),(0,a.kt)("p",null,"Search for ",(0,a.kt)("inlineCode",{parentName:"p"},"Conventional Commits")," in the VSCode Marketplace and install it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commits Extension",src:i(3280).Z,width:"3296",height:"1898"})),(0,a.kt)("h2",{id:"disable-auto-commit"},"Disable auto commit"),(0,a.kt)("p",null,"After installing the extension, you can disable the auto commit feature in the settings."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commits Extension Setting",src:i(2139).Z,width:"3296",height:"1898"})),(0,a.kt)("p",null,"To access the settings, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," icon as shown in the screenshot above."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commits Extension Setting Page",src:i(9136).Z,width:"3296",height:"1898"})),(0,a.kt)("p",null,"Once you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," icon, you will see a list of settings for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Conventional Commits")," extension. Here you can uncheck the ",(0,a.kt)("inlineCode",{parentName:"p"},"Auto commit")," option."),(0,a.kt)("h2",{id:"build-commit-message"},"Build commit message"),(0,a.kt)("p",null,"When you are ready to commit, press on Conventional commit icon in source control tab to open the commit prompt."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Prompt",src:i(7765).Z,width:"3296",height:"1898"})),(0,a.kt)("h3",{id:"add-commit-type"},"Add commit type"),(0,a.kt)("p",null,"When you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Conventional Commit")," button, you will see a list of available commit types. Select the one that best describes your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Type",src:i(8205).Z,width:"3296",height:"1898"})),(0,a.kt)("h3",{id:"add-commit-scope"},"Add commit scope"),(0,a.kt)("p",null,"After you select the commit type, you will see a list of available scopes. Select the one that best describes your changes. If you don't see any scope, you can let the ",(0,a.kt)("inlineCode",{parentName:"p"},"boyka-core")," team know about it and we will add it for you."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Scope",src:i(7722).Z,width:"3296",height:"1898"})),(0,a.kt)("h3",{id:"add-relatable-emoji"},"Add relatable Emoji"),(0,a.kt)("p",null,"After you select the commit scope, you will see a list of available Emoji's. Select the one that best describes your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Emoji",src:i(2046).Z,width:"3296",height:"1898"})),(0,a.kt)("h3",{id:"add-short-description"},"Add short description"),(0,a.kt)("p",null,"After you select the commit emoji, you will see a text field where you can write a short description of your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Description",src:i(4082).Z,width:"3296",height:"1898"})),(0,a.kt)("h3",{id:"add-long-description-optional"},"Add long description (optional)"),(0,a.kt)("p",null,"After you write the short description, you will see a text field where you can write a long description of your changes. This is optional, but it is recommended to write a detailed description of your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Long Description",src:i(2348).Z,width:"3296",height:"1898"})),(0,a.kt)("h3",{id:"add-breaking-changes-details-optional"},"Add breaking changes details (optional)"),(0,a.kt)("p",null,"After you write the long description, you will see a text field where you can write a detailed description of the breaking changes. This is optional, but it is recommended to write a detailed description of the breaking changes."),(0,a.kt)("p",null,"Make sure to append the ",(0,a.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," tag before the description."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Breaking Changes",src:i(9715).Z,width:"3296",height:"1898"})),(0,a.kt)("h2",{id:"commit-the-changes"},"Commit the changes"),(0,a.kt)("p",null,"Once the commit message is built, you can copy it and paste it on the terminal and commit using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> git commit -m "<copied-message>"\n')),(0,a.kt)("h2",{id:"pre-commit-checks"},"Pre-commit checks"),(0,a.kt)("p",null,"When you try to commit using the command in previous step, pre-commit checks will get triggered."),(0,a.kt)("p",null,"Following checks will happen when you commit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Commit message lint to check if the commit message is in correct format"),(0,a.kt)("li",{parentName:"ul"},"ESLint to check if the website code complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")," rules. It will only run if there is change to ",(0,a.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".jsx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,a.kt)("inlineCode",{parentName:"li"},".tsx")," files."),(0,a.kt)("li",{parentName:"ul"},"Prettier to check if the website code complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")," rules. It will only run if there is change to ",(0,a.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".jsx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,a.kt)("inlineCode",{parentName:"li"},".tsx")," files."),(0,a.kt)("li",{parentName:"ul"},"Build the documentation website to check if the website builds successfully."),(0,a.kt)("li",{parentName:"ul"},"Build and run tests from the Java project to check if the check style, code compilation is successful and overall code coverage is above ",(0,a.kt)("inlineCode",{parentName:"li"},"70%"),".")),(0,a.kt)("h2",{id:"push-your-commit"},"Push your commit"),(0,a.kt)("p",null,"You can push your changes from the Terminal by executing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> git push\n")),(0,a.kt)("p",null,"Or, from VSCode, you can click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Push")," button in the source control tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push Commit",src:i(7003).Z,width:"3296",height:"1898"})),(0,a.kt)("p",null,"When you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Push")," button, you will see a pop-up asking you to confirm your push."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push Commit",src:i(6897).Z,width:"3296",height:"1898"})),(0,a.kt)("h2",{id:"create-draft-pr"},"Create draft PR"),(0,a.kt)("p",null,"As soon as you push your commit, you must create a draft PR on GitHub. Because our workflows will only get triggered on PR's that are raised against ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch."))}u.isMDXComponent=!0},9715:function(e,t,i){t.Z=i.p+"assets/images/commit-breaking-changes-13be928032a05c737ce1b7dc2c6e8826.png"},4082:function(e,t,i){t.Z=i.p+"assets/images/commit-description-86a28b51f291d01b11c285c414c6765f.png"},2046:function(e,t,i){t.Z=i.p+"assets/images/commit-emoji-d346fe1d4451028f12c650e5e1de44bf.png"},9136:function(e,t,i){t.Z=i.p+"assets/images/commit-ext-setting-page-2e83931462de6cb4ad428b07f43db572.png"},2139:function(e,t,i){t.Z=i.p+"assets/images/commit-ext-setting-600211599783cbf06cdf21f21f96339c.png"},3280:function(e,t,i){t.Z=i.p+"assets/images/commit-ext-ffc28705533aba0554282c73096c98f5.png"},2348:function(e,t,i){t.Z=i.p+"assets/images/commit-long-description-0e0d31c1554976026ff7db799b9a1b48.png"},7765:function(e,t,i){t.Z=i.p+"assets/images/commit-prompt-e99c617ecfc57e1445b0629c81f38f5a.png"},7003:function(e,t,i){t.Z=i.p+"assets/images/commit-push-1-f174647c129749791c90f8813c2847e9.png"},6897:function(e,t,i){t.Z=i.p+"assets/images/commit-push-2-71345d8c85bd24c15156b822510da4f9.png"},7722:function(e,t,i){t.Z=i.p+"assets/images/commit-scope-96a1c0a750d2231faa55f624c4b113ce.png"},8205:function(e,t,i){t.Z=i.p+"assets/images/commit-type-d8b7196f11269b9e0231b00213996220.png"}}]);