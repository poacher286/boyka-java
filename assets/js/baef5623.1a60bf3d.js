"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1616],{167:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(5721);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8167:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var a=n(744),i=n(4690),r=(n(5721),n(167)),o=["components"],s={title:"\u2705 Write Test for Web",sidebar_position:3},c=void 0,l={unversionedId:"guides/web/write-test",id:"guides/web/write-test",title:"\u2705 Write Test for Web",description:"Once the page object class is created, we can use it to interact with the page in our tests by passing the locators to static action methods exposed by Boyka framework.",source:"@site/docs/framework-docs/guides/web/write-test.md",sourceDirName:"guides/web",slug:"/guides/web/write-test",permalink:"/boyka-framework/docs/guides/web/write-test",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/framework-docs/guides/web/write-test.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1661773160,formattedLastUpdatedAt:"Aug 29, 2022",sidebarPosition:3,frontMatter:{title:"\u2705 Write Test for Web",sidebar_position:3},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/web/create-page-object"}},p={},m=[{value:"Example",id:"example",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once the page object class is created, we can use it to interact with the page in our tests by passing the locators to static action methods exposed by Boyka framework."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out all the available static methods to interact with the page in your tests. Following are the available action classes:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/driver-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"DriverActions")),": Contains all driver related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/drop-down-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"DropDownActions")),": Contains all drop down related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/element-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"ElementActions")),": Contains all element related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/keyboard-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"KeyboardActions")),": Contains all keyboard related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/mouse-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"MouseActions")),": Contains all mouse related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/verify-driver-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"VerifyDriverActions")),": Contains all verification methods for driver related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/verify-drop-down-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"VerifyDropDownActions")),": Contains all verification methods for drop down related actions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/actions/verify-element-actions"},(0,r.kt)("inlineCode",{parentName:"a"},"VerifyElementActions")),": Contains all verification methods for element related actions"))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.navigateTo;\nimport static com.github.wasiqb.boyka.actions.KeyboardActions.enterText;\nimport static com.github.wasiqb.boyka.actions.MouseActions.clickOn;\nimport static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserTitle;\nimport static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserUrl;\nimport static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementDisplayed;\nimport static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementEnabled;\nimport static com.github.wasiqb.boyka.manager.DriverManager.closeDriver;\nimport static com.github.wasiqb.boyka.manager.DriverManager.createDriver;\nimport static com.github.wasiqb.boyka.testng.web.pages.LoginPage.loginPage;\n\nimport com.github.wasiqb.boyka.enums.ApplicationType;\nimport org.testng.annotations.AfterClass;\nimport org.testng.annotations.BeforeClass;\nimport org.testng.annotations.Test;\n\npublic class TestWeb {\n    private static final String URL = "https://www.saucedemo.com";\n\n    @BeforeClass (description = "Setup test class")\n    public void setupTestClass () {\n        createDriver (ApplicationType.WEB, "test_local_chrome");\n    }\n\n    @AfterClass (description = "Tear down test class")\n    public void tearDownTestClass () {\n        closeDriver ();\n    }\n\n    @Test (description = "Test login functionality")\n    public void testLogin () {\n        navigateTo (URL);\n        verifyBrowserUrl ().startsWith (URL);\n        enterText (loginPage ().getUsername (), "standard_user");\n        enterText (loginPage ().getPassword (), "secret_sauce");\n        clickOn (loginPage ().getLoginButton ());\n        verifyBrowserTitle ().isEqualTo ("Swag Labs");\n        verifyElementDisplayed (homePage ().getMenuButton ()).isTrue ();\n        verifyElementEnabled (homePage ().getMenuButton ()).isTrue ();\n    }\n}\n')))}d.isMDXComponent=!0}}]);