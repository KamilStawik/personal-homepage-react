(this["webpackJsonppersonal-homepage-react"]=this["webpackJsonppersonal-homepage-react"]||[]).push([[0],{39:function(e,t,n){"use strict";n.r(t);var r,i,o,a,l,c,s,d,p,u,f=n(0),h=n.n(f),m=n(15),x=n.n(m),b=n(10),g=n(21),j=n(4),O=n(5),C=Object(j.createGlobalStyle)(r||(r=Object(O.a)(["\n\n    html {\n        box-sizing: border-box;\n    }\n    \n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        margin: 0;\n        background-color: ",';\n        font-family: "Inter", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n'])),(function(e){return e.theme.colors.background})),w={colors:{background:"#FFFFFF",mainFont:"#6E7E91",secondFont:"#252525",mainBlue:"#0366D6",tileHeader:"#0366D6",tileBackground:"#FFFFFF",tileBorder:"rgba(209, 213, 218, 0.3)",tileBorderOnHover:"rgba(3, 102, 214, 0.2)",white:"#FFFFFF"},breakPoints:{mobileMax:"767"}},v={colors:{background:"#252525",mainFont:"#FFFFFF",secondFont:"#FFFFFF",mainBlue:"#2188FF",tileHeader:"#FFFFFF",tileBackground:"#363636",tileBorder:"rgba(209, 213, 218, 0.1)",tileBorderOnHover:"rgba(3, 102, 214, 0.5)",white:"#FFFFFF"},breakPoints:{mobileMax:"767"}},y=j.default.main(i||(i=Object(O.a)(["\n\tmax-width: 1216px;\n    margin: 66px auto;\n\n    @media (max-width: ","px) {\n        margin: 16px;\n    }\n"])),(function(e){return e.theme.breakPoints.mobileMax})),E=n.p+"static/media/kamilStawik.098d43c6.jpg",k=j.default.div(o||(o=Object(O.a)(['\n  \tdisplay: grid;\n\tgrid-gap: 66px;\n\tgrid-template-rows: 32px 1fr;\n\tgrid-template-areas: \n\t\t"photo themeToggler"\n\t\t"photo personalInfo"\n\t;\n\n\t@media (max-width: ','px) {\n\t\tgrid-gap: 12px;\n\t\tgrid-template-rows: auto;\n\t\tgrid-template-areas: \n\t\t\t"photo themeToggler"\n\t\t\t"personalInfo personalInfo"\n\t\t;\n    }\n'])),(function(e){return e.theme.breakPoints.mobileMax})),F=j.default.div(a||(a=Object(O.a)(["\n\tgrid-area: photo;\n\tbackground-image: url(",");\n\tbackground-size: cover;\n\theight: 400px;\n\twidth: 400px;\n\tborder-radius: 50%;\n\n\t@media (max-width: ","px) {\n\t\theight: 132px;\n\t\twidth: 132px;\n    }\n"])),E,(function(e){return e.theme.breakPoints.mobileMax})),M=j.default.div(l||(l=Object(O.a)(["\n\tgrid-area: personalInfo;\n\tdisplay: flex;\n\tflex-direction: column;\n\t\n"]))),S=j.default.h1(c||(c=Object(O.a)(["\n\tfont-weight: 900;\n\tfont-size: 38px;\n\tmargin: 12px 0px 0px 0px;\n\tletter-spacing: 0.05em;\n\tcolor: ",";\n\n\t@media (max-width: ","px) {\n\t\tfont-size: 22px;\n    }\n"])),(function(e){return e.theme.colors.secondFont}),(function(e){return e.theme.breakPoints.mobileMax})),P=j.default.p(s||(s=Object(O.a)(["\n\tmax-width: 85%;\n\tmargin: 32px 0px;\n\tfont-size: 20px;\n\tline-height: 1.4;\n\tletter-spacing: 0.05em;\n\tcolor: ",";\n\n\t@media (max-width: ","px) {\n\t\tmax-width: 100%;\n\t\tmargin: 16px 0px;\n\t\tfont-size: 17px;\n    }\n"])),(function(e){return e.theme.colors.mainFont}),(function(e){return e.theme.breakPoints.mobileMax})),I=j.default.span(d||(d=Object(O.a)(["\n\tmargin-right: 12px;\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 1.3;\n\ttext-transform: uppercase;\n\tcolor: ",";\n"])),(function(e){return e.theme.colors.mainFont})),B=n(18),H="darkTheme",Z=function(e){return localStorage.setItem(H,JSON.stringify(e))},L=Object(B.b)({name:"homepage",initialState:{repositories:[],darkTheme:JSON.parse(localStorage.getItem(H))||null},reducers:{fetchRepositoriesFromApi:function(){},setRepositories:function(e,t){var n=e.repositories,r=t.payload;n.push(r)},toggleDarkTheme:function(e){e.darkTheme=!e.darkTheme}}}),R=L.actions,z=R.fetchRepositoriesFromApi,T=R.setRepositories,A=R.toggleDarkTheme,D=function(e){return e.homepage.repositories},V=function(e){return e.homepage.darkTheme},G=L.reducer,_=["title","titleId"];function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function W(e,t){var n=e.title,r=e.titleId,i=N(e,_);return f.createElement("svg",J({width:48,height:26,viewBox:"0 0 48 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,p||(p=f.createElement("g",{clipPath:"url(#clip0)"},f.createElement("path",{d:"M13.1765 0.5H34.8235C41.8309 0.5 47.5 6.10278 47.5 13C47.5 19.8972 41.8309 25.5 34.8235 25.5H13.1765C6.16907 25.5 0.5 19.8972 0.5 13C0.5 6.10278 6.16907 0.5 13.1765 0.5Z",fill:"white",stroke:"#6E7E91"}),f.createElement("path",{d:"M34.8236 0.464233H13.1766C6.15932 0.464233 0.470703 6.07666 0.470703 12.9999C0.470703 19.9232 6.15932 25.5357 13.1766 25.5357H34.8236C41.8409 25.5357 47.5295 19.9232 47.5295 12.9999C47.5295 6.07666 41.8409 0.464233 34.8236 0.464233Z",fill:"#E5E5E5",stroke:"#D1D5DA",strokeOpacity:.3}),f.createElement("path",{d:"M13 23C18.5228 23 23 18.5228 23 13C23 7.47715 18.5228 3 13 3C7.47715 3 3 7.47715 3 13C3 18.5228 7.47715 23 13 23Z",fill:"#6E7E91"}),f.createElement("g",{clipPath:"url(#clip1)"},f.createElement("path",{d:"M12.9999 8.7179C10.635 8.7179 8.71777 10.6351 8.71777 13C8.71777 15.365 10.635 17.2821 12.9999 17.2821C15.3648 17.2821 17.282 15.365 17.282 13C17.282 10.6351 15.3648 8.7179 12.9999 8.7179ZM12.9999 16.5V9.50002C14.6617 9.4956 16.0949 10.6667 16.4217 12.2961C16.526 12.7596 16.526 13.2404 16.4217 13.7039C16.0949 15.3334 14.6617 16.5045 12.9999 16.5Z",fill:"white"}),f.createElement("path",{d:"M16.4412 9.55866C16.5134 9.63235 16.6118 9.67449 16.7149 9.67599C16.8181 9.67453 16.9165 9.63235 16.9887 9.55866L17.9468 8.60056C18.1196 8.47095 18.1546 8.22585 18.025 8.05306C17.8954 7.88026 17.6503 7.84527 17.4775 7.97484C17.4478 7.99707 17.4215 8.02341 17.3993 8.05306L16.4412 9.01116C16.29 9.14986 16.2799 9.38489 16.4186 9.53605C16.4258 9.54391 16.4333 9.55144 16.4412 9.55866Z",fill:"white"}),f.createElement("path",{d:"M9.48036 16.4415C9.34132 16.3372 9.15011 16.3372 9.01107 16.4415L8.05297 17.3996C7.90177 17.5383 7.89167 17.7733 8.03041 17.9245C8.03759 17.9323 8.04515 17.9399 8.05297 17.9471C8.19167 18.0983 8.42671 18.1084 8.57787 17.9696C8.58573 17.9624 8.59325 17.9549 8.60044 17.9471L9.55854 16.9889C9.68815 16.8162 9.65315 16.5711 9.48036 16.4415Z",fill:"white"}),f.createElement("path",{d:"M17.9471 17.3995L16.989 16.4414C16.8162 16.3118 16.5711 16.3468 16.4415 16.5196C16.3372 16.6587 16.3372 16.8499 16.4415 16.9889L17.3996 17.947C17.5383 18.0982 17.7733 18.1083 17.9245 17.9696C17.9323 17.9624 17.9399 17.9548 17.947 17.947C18.0982 17.8083 18.1083 17.5733 17.9696 17.4221C17.9625 17.4142 17.9549 17.4067 17.9471 17.3995Z",fill:"white"}),f.createElement("path",{d:"M9.01095 9.55866C9.14965 9.70986 9.38468 9.71997 9.53585 9.58123C9.54371 9.57404 9.55123 9.56648 9.55842 9.55866C9.70962 9.41996 9.71972 9.18493 9.58098 9.03377C9.5738 9.02591 9.56624 9.01838 9.55842 9.0112L8.60031 8.0531C8.42752 7.92349 8.18242 7.95852 8.05281 8.13132C7.94854 8.27035 7.94854 8.46156 8.05281 8.6006L9.01095 9.55866Z",fill:"white"}),f.createElement("path",{d:"M12.9999 8.13129C13.2159 8.13129 13.391 7.95621 13.391 7.74023V6.39106C13.391 6.17508 13.2159 6 12.9999 6C12.784 6 12.6089 6.17508 12.6089 6.39106V7.74023C12.6089 7.95621 12.784 8.13129 12.9999 8.13129Z",fill:"white"}),f.createElement("path",{d:"M12.9999 17.8688C12.784 17.8688 12.6089 18.0439 12.6089 18.2598V19.609C12.6089 19.825 12.784 20.0001 12.9999 20.0001C13.2159 20.0001 13.391 19.825 13.391 19.609V18.2598C13.391 18.0439 13.2159 17.8688 12.9999 17.8688Z",fill:"white"}),f.createElement("path",{d:"M19.6089 12.609H18.2597C18.0437 12.609 17.8687 12.7841 17.8687 13.0001C17.8687 13.2161 18.0437 13.3911 18.2597 13.3911H19.6089C19.8249 13.3911 19.9999 13.2161 19.9999 13.0001C19.9999 12.7841 19.8248 12.609 19.6089 12.609Z",fill:"white"}),f.createElement("path",{d:"M8.13129 13.0001C8.13129 12.7841 7.95621 12.609 7.74023 12.609H6.39106C6.17508 12.609 6 12.7841 6 13.0001C6 13.2161 6.17508 13.3911 6.39106 13.3911H7.74023C7.95621 13.3911 8.13129 13.2161 8.13129 13.0001Z",fill:"white"})))),u||(u=f.createElement("defs",null,f.createElement("clipPath",{id:"clip0"},f.createElement("rect",{width:48,height:26,fill:"white"})),f.createElement("clipPath",{id:"clip1"},f.createElement("rect",{width:14,height:14,fill:"white",transform:"translate(6 6)"})))))}var U,K,q=f.forwardRef(W),Q=(n.p,["title","titleId"]);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function $(e,t){var n=e.title,r=e.titleId,i=Y(e,Q);return f.createElement("svg",X({width:48,height:26,viewBox:"0 0 48 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,U||(U=f.createElement("g",{clipPath:"url(#clip0)"},f.createElement("path",{d:"M13.1765 0.5H34.8235C41.8309 0.5 47.5 6.10278 47.5 13C47.5 19.8972 41.8309 25.5 34.8235 25.5H13.1765C6.16907 25.5 0.5 19.8972 0.5 13C0.5 6.10278 6.16907 0.5 13.1765 0.5Z",fill:"white",stroke:"white"}),f.createElement("g",{filter:"url(#filter0_dd)"},f.createElement("path",{d:"M34.8236 0.464233H13.1766C6.15932 0.464233 0.470703 6.07666 0.470703 12.9999C0.470703 19.9232 6.15932 25.5357 13.1766 25.5357H34.8236C41.8409 25.5357 47.5295 19.9232 47.5295 12.9999C47.5295 6.07666 41.8409 0.464233 34.8236 0.464233Z",fill:"#363636",fillOpacity:.72})),f.createElement("path",{d:"M35 23C40.5228 23 45 18.5228 45 13C45 7.47715 40.5228 3 35 3C29.4772 3 25 7.47715 25 13C25 18.5228 29.4772 23 35 23Z",fill:"white"}),f.createElement("g",{clipPath:"url(#clip1)"},f.createElement("path",{d:"M34.9999 8.7179C32.635 8.7179 30.7178 10.6351 30.7178 13C30.7178 15.365 32.635 17.2821 34.9999 17.2821C37.3648 17.2821 39.282 15.365 39.282 13C39.282 10.6351 37.3648 8.7179 34.9999 8.7179ZM34.9999 16.5V9.50002C36.6617 9.4956 38.0949 10.6667 38.4217 12.2961C38.526 12.7596 38.526 13.2404 38.4217 13.7039C38.0949 15.3334 36.6617 16.5045 34.9999 16.5Z",fill:"#252525"}),f.createElement("path",{d:"M38.4417 9.55866C38.5139 9.63235 38.6123 9.67449 38.7154 9.67599C38.8186 9.67453 38.917 9.63235 38.9891 9.55866L39.9473 8.60056C40.1201 8.47095 40.155 8.22585 40.0255 8.05306C39.8959 7.88026 39.6508 7.84527 39.478 7.97484C39.4483 7.99707 39.422 8.02341 39.3998 8.05306L38.4416 9.01116C38.2904 9.14986 38.2803 9.38489 38.4191 9.53605C38.4263 9.54391 38.4338 9.55144 38.4417 9.55866Z",fill:"#252525"}),f.createElement("path",{d:"M31.4804 16.4415C31.3413 16.3372 31.1501 16.3372 31.0111 16.4415L30.053 17.3996C29.9018 17.5383 29.8917 17.7733 30.0304 17.9245C30.0376 17.9323 30.0452 17.9399 30.053 17.9471C30.1917 18.0983 30.4267 18.1084 30.5779 17.9696C30.5857 17.9624 30.5933 17.9549 30.6004 17.9471L31.5585 16.9889C31.6881 16.8162 31.6532 16.5711 31.4804 16.4415Z",fill:"#252525"}),f.createElement("path",{d:"M39.9471 17.3995L38.989 16.4414C38.8162 16.3118 38.5711 16.3468 38.4415 16.5196C38.3372 16.6587 38.3372 16.8499 38.4415 16.9889L39.3996 17.947C39.5383 18.0982 39.7733 18.1083 39.9245 17.9696C39.9323 17.9624 39.9399 17.9548 39.947 17.947C40.0982 17.8083 40.1083 17.5733 39.9696 17.4221C39.9625 17.4142 39.9549 17.4067 39.9471 17.3995Z",fill:"#252525"}),f.createElement("path",{d:"M31.0109 9.55866C31.1497 9.70986 31.3847 9.71997 31.5358 9.58123C31.5437 9.57404 31.5512 9.56648 31.5584 9.55866C31.7096 9.41996 31.7197 9.18493 31.581 9.03377C31.5738 9.02591 31.5662 9.01838 31.5584 9.0112L30.6003 8.0531C30.4275 7.92349 30.1824 7.95852 30.0528 8.13132C29.9485 8.27035 29.9485 8.46156 30.0528 8.6006L31.0109 9.55866Z",fill:"#252525"}),f.createElement("path",{d:"M35.0004 8.13129C35.2164 8.13129 35.3915 7.95621 35.3915 7.74023V6.39106C35.3915 6.17508 35.2164 6 35.0004 6C34.7845 6 34.6094 6.17508 34.6094 6.39106V7.74023C34.6094 7.95621 34.7845 8.13129 35.0004 8.13129Z",fill:"#252525"}),f.createElement("path",{d:"M35.0004 17.8688C34.7845 17.8688 34.6094 18.0439 34.6094 18.2598V19.609C34.6094 19.825 34.7845 20.0001 35.0004 20.0001C35.2164 20.0001 35.3915 19.825 35.3915 19.609V18.2598C35.3915 18.0439 35.2164 17.8688 35.0004 17.8688Z",fill:"#252525"}),f.createElement("path",{d:"M41.6094 12.609H40.2602C40.0442 12.609 39.8691 12.7841 39.8691 13.0001C39.8691 13.2161 40.0442 13.3911 40.2602 13.3911H41.6094C41.8254 13.3911 42.0004 13.2161 42.0004 13.0001C42.0004 12.7841 41.8253 12.609 41.6094 12.609Z",fill:"#252525"}),f.createElement("path",{d:"M30.1313 13.0001C30.1313 12.7841 29.9562 12.609 29.7402 12.609H28.3911C28.1751 12.609 28 12.7841 28 13.0001C28 13.2161 28.1751 13.3911 28.3911 13.3911H29.7402C29.9562 13.3911 30.1313 13.2161 30.1313 13.0001Z",fill:"#252525"})))),K||(K=f.createElement("defs",null,f.createElement("filter",{id:"filter0_dd",x:-57.5293,y:-51.5358,width:163.059,height:151.071,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},f.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dy:16}),f.createElement("feGaussianBlur",{stdDeviation:29}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.0341667 0 0 0 0 0.0408 0 0 0 0 0.2 0 0 0 0.03 0"}),f.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),f.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),f.createElement("feOffset",{dy:-2}),f.createElement("feGaussianBlur",{stdDeviation:25}),f.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.0352941 0 0 0 0 0.0392157 0 0 0 0 0.2 0 0 0 0.02 0"}),f.createElement("feBlend",{mode:"normal",in2:"effect1_dropShadow",result:"effect2_dropShadow"}),f.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow",result:"shape"})),f.createElement("clipPath",{id:"clip0"},f.createElement("rect",{width:48,height:26,fill:"white"})),f.createElement("clipPath",{id:"clip1"},f.createElement("rect",{width:14,height:14,fill:"white",transform:"translate(28 6)"})))))}var ee,te,ne,re,ie,oe,ae=f.forwardRef($),le=(n.p,j.default.button(ee||(ee=Object(O.a)(["\n\tgrid-area: themeToggler;\n\tborder: none;\n\tbackground-color: inherit;\n\tcursor: pointer;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: flex-end;\n\talign-self: flex-start;\n"])))),ce=j.default.span(te||(te=Object(O.a)(["\n\tmargin-right: 12px;\n\tfont-weight: bold;\n\tfont-size: 12px;\n\tline-height: 1.3;\n\ttext-transform: uppercase;\n\tcolor: ",";\n\n    @media (max-width: ","px) {\n\t\tdisplay: none;\n    }\n"])),(function(e){return e.theme.colors.mainFont}),(function(e){return e.theme.breakPoints.mobileMax})),se=n(2),de=function(){var e=Object(b.b)(),t=Object(b.c)(V);return Object(se.jsxs)(le,{onClick:function(){return e(A())},children:[Object(se.jsx)(ce,{children:t?"dark mode on":"dark mode off"}),t?Object(se.jsx)(ae,{}):Object(se.jsx)(q,{})]})},pe=j.default.a(ne||(ne=Object(O.a)(["\n    background-color: ",";\n    color: ",";\n    text-decoration: none;\n    padding: 12px 16px;\n    border: 1px solid rgba(209, 213, 218, 0.3);\n    border-radius: 4px;\n    line-height: 24px;\n    letter-spacing: 0.05em;\n    cursor: pointer;\n    display: flex;\n    align-self: flex-start;\n\n    &:hover {\n        box-shadow: 2px -2px 0px #8CC2FF,\n        -2px 2px 0px #8CC2FF,\n        2px 2px 0px #8CC2FF,\n        -2px -2px 0px #8CC2FF;\n    }\n\n    &:active {\n        box-shadow: inset 0px 2px 0px #144620;\n    }\n"])),(function(e){return e.theme.colors.mainBlue}),(function(e){return e.theme.colors.white})),ue=j.default.span(re||(re=Object(O.a)(["\n    font-size: 20px;\n    margin-left: 12px;\n    \n    @media (max-width: ","px) {\n        font-size: 18px;\n    }\n"])),(function(e){return e.theme.breakPoints.mobileMax})),fe=["title","titleId"];function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function xe(e,t){var n=e.title,r=e.titleId,i=me(e,fe);return f.createElement("svg",he({width:"auto",height:"auto",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,ie||(ie=f.createElement("path",{d:"M17.2678 9.56104L13.0024 12.9953C12.1952 13.6282 11.0636 13.6282 10.2564 12.9953L5.95435 9.56104",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),oe||(oe=f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.88787 4H16.3158C17.6752 4.01525 18.969 4.58993 19.896 5.5902C20.823 6.59048 21.3022 7.92903 21.222 9.29412V15.822C21.3022 17.1871 20.823 18.5256 19.896 19.5259C18.969 20.5262 17.6752 21.1009 16.3158 21.1161H6.88787C3.96796 21.1161 2 18.7407 2 15.822V9.29412C2 6.37545 3.96796 4 6.88787 4Z",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var be,ge,je=f.forwardRef(xe),Oe=(n.p,Object(j.default)(je)(be||(be=Object(O.a)(["\n        width: 24px;\n        height: 25px;\n\n    @media (max-width: ","px) {\n        width: 20px;\n        height: 21px;\n    }\n"])),(function(e){return e.theme.breakPoints.mobileMax}))),Ce="kamil_stawik@op.pl",we=function(){return Object(se.jsxs)(pe,{href:"mailto:".concat(Ce),children:[Object(se.jsx)(Oe,{}),Object(se.jsx)(ue,{children:"Hire Me"})]})},ve=function(){return Object(se.jsxs)(k,{children:[Object(se.jsx)(F,{}),Object(se.jsx)(de,{}),Object(se.jsxs)(M,{children:[Object(se.jsx)(I,{children:"this is"}),Object(se.jsx)(S,{children:"Kamil Stawik"}),Object(se.jsx)(P,{children:"\ud83d\udc68\ud83c\udffb\u200d\ud83d\udcbb I\u2019m a passionate Frontend Developer in love with React, currently looking for new job opportunities."}),Object(se.jsx)(we,{})]})]})},ye=["title","titleId"];function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ke(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Fe(e,t){var n=e.title,r=e.titleId,i=ke(e,ye);return f.createElement("svg",Ee({width:9,height:9,viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,ge||(ge=f.createElement("circle",{cx:4.5,cy:4.5,r:4.5,fill:"auto"})))}var Me,Se,Pe,Ie,Be,He,Ze,Le,Re=f.forwardRef(Fe),ze=(n.p,Object(j.default)(Re)(Me||(Me=Object(O.a)(["\n    fill: ",";\n"])),(function(e){return e.theme.colors.mainBlue}))),Te=j.default.section(Se||(Se=Object(O.a)(["\n\tmax-width: 1216px;\n\tpadding: 32px;\n\tmargin: 66px auto;\n\tbox-shadow: 0px -2px 50px rgba(9, 10, 51, 0.04), 0px 16px 58px rgba(9, 10, 51, 0.06);\n\tborder-radius: 4px;\n"]))),Ae=j.default.ul(Pe||(Pe=Object(O.a)(["\n\tlist-style-type: none;\n\tpadding-left: 20px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]))),De=j.default.li(Ie||(Ie=Object(O.a)(["\n\tline-height: 1.4;\n\tmargin: 4px 0px;\n\tflex-basis: 33%;\n"]))),Ve=j.default.span(Be||(Be=Object(O.a)(["\n\tmargin-left: 12px;\n\tletter-spacing: 0.05em;\n\tcolor: ",";\n"])),(function(e){return e.theme.colors.mainFont})),Ge=j.default.h2(He||(He=Object(O.a)(["\n    font-weight: 900;\n    font-size: 30px;\n    margin: 0px 0px 48px 0px;\n    letter-spacing: 0.05em;\n    color: ",";\n\n    ","\n"])),(function(e){return e.theme.colors.secondFont}),(function(e){return e.portfolio&&Object(j.css)(Ze||(Ze=Object(O.a)(["\n        text-align: center;\n        margin-top: 12px;\n        margin-bottom: 8px;\n    "])))})),_e=function(e){var t=e.title,n=e.portfolio;return Object(se.jsx)(Ge,{portfolio:n,children:t})},Je=function(e){var t=e.title,n=e.content;return Object(se.jsxs)(Te,{children:[Object(se.jsx)(_e,{title:t}),Object(se.jsx)(Ae,{children:n.map((function(e){return Object(se.jsxs)(De,{children:[Object(se.jsx)(ze,{}),Object(se.jsx)(Ve,{children:e.content})]},e.id)}))})]})},Ne=[{id:1,content:"Semantic & accessible HTML"},{id:2,content:"React Router"},{id:3,content:"Promises, Async/Await"},{id:4,content:"Responsive Web Design"},{id:5,content:"Redux-Saga"},{id:6,content:"GitHub Pull Requests & Review"},{id:7,content:"Teamwork"},{id:8,content:"Redux (Toolkit)"},{id:9,content:"Trello"},{id:10,content:"Markdown"},{id:11,content:"React Hooks"},{id:12,content:"Scrum"},{id:13,content:"Immutability"},{id:14,content:"Error handling"},{id:15,content:"NPM"},{id:16,content:"CSS BEM convention"},{id:17,content:"Working with API (fetch, axios)"},{id:18,content:"React"},{id:19,content:"CSS Grid"},{id:20,content:"JavaScript: ES6+"},{id:21,content:"Git"},{id:22,content:"CSS Flexbox"}],We=[{id:1,content:"React Context"},{id:2,content:"Cypress"},{id:3,content:"TypeScript"},{id:4,content:"Node.js"},{id:5,content:"Unit testing"},{id:6,content:"JS classes"}],Ue=n(26),Ke=["title","titleId"];function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Qe(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Xe(e,t){var n=e.title,r=e.titleId,i=Qe(e,Ke);return f.createElement("svg",qe({width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),n?f.createElement("title",{id:r},n):null,Le||(Le=f.createElement("path",{d:"M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z",fill:"auto"})))}var Ye,$e,et,tt,nt,rt,it,ot,at,lt,ct,st,dt,pt=f.forwardRef(Xe),ut=(n.p,Object(j.default)(pt)(Ye||(Ye=Object(O.a)(["\n    fill: ",";\n    display: block;\n    margin: auto;\n\n    ","\n"])),(function(e){return e.theme.colors.mainBlue}),(function(e){return e.socialMediaSection&&Object(j.css)($e||($e=Object(O.a)(["\n        margin: 0px;\n        width: 48px;\n        fill: ",";\n\n        &:hover{\n            transition: 0.5s linear;\n            fill: ",";\n        }\n    "])),(function(e){return e.theme.colors.secondFont}),(function(e){return e.theme.colors.mainBlue}))}))),ft=j.default.div(et||(et=Object(O.a)(["\n    padding: 56px;\n    background-color: ",";\n    border: 6px solid ",";\n    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);\n    border-radius: 4px;\n\n    &:hover {\n        transition: border 1s;\n        border: 6px solid ",";\n    }\n"])),(function(e){return e.theme.colors.tileBackground}),(function(e){return e.theme.colors.tileBorder}),(function(e){return e.theme.colors.tileBorderOnHover})),ht=j.default.header(tt||(tt=Object(O.a)(["\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 29px;\n    letter-spacing: 0.05em;\n    color: ",";\n"])),(function(e){return e.theme.colors.tileHeader})),mt=j.default.span(nt||(nt=Object(O.a)(["\n    display: block;\n    font-size: 18px;\n    line-height: 1.4;\n    letter-spacing: 0.05em;\n    color: ",";\n    margin: 24px 0px;\n"])),(function(e){return e.theme.colors.mainFont})),xt=j.default.span(rt||(rt=Object(O.a)(["\n    font-size: 18px;\n    line-height: 1.4;\n    letter-spacing: 0.05em;\n    color: ",";\n    margin: 8px 0px;\n"])),(function(e){return e.theme.colors.mainFont})),bt=j.default.a(it||(it=Object(O.a)(["\n    font-size: 18px;\n    line-height: 1.4;\n    letter-spacing: 0.05em;\n    color: ",";\n    margin: 8px 0px;\n"])),(function(e){return e.theme.colors.mainBlue})),gt=function(e){var t=e.title,n=e.repositoryAdress,r=e.demoAdress,i=e.description;return Object(se.jsxs)(ft,{children:[Object(se.jsx)(ht,{children:t}),Object(se.jsx)(mt,{children:i}),Object(se.jsxs)("div",{children:[Object(se.jsx)(xt,{children:"Demo: "}),Object(se.jsx)(bt,{href:r,children:r})]}),Object(se.jsxs)("div",{children:[Object(se.jsx)(xt,{children:"Code: "}),Object(se.jsx)(bt,{href:n,children:n})]})]})},jt=j.default.span(ot||(ot=Object(O.a)(["\n    display: block;\n    text-align: center;\n    font-size: 20px;\n    line-height: 1.4;\n    letter-spacing: 0.05em;\n    color: ",";\n    margin-bottom: 24px;\n"])),(function(e){return e.theme.colors.secondFont})),Ot=j.default.div(at||(at=Object(O.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 32px;\n"]))),Ct=function(){var e=Object(b.b)(),t=Object(b.c)(D),n=Object(Ue.a)(t,1)[0];return console.log(n),Object(f.useEffect)((function(){return e(z())}),[]),Object(se.jsxs)(se.Fragment,{children:[Object(se.jsx)(ut,{}),Object(se.jsx)(_e,{title:"Portfolio",portfolio:!0}),Object(se.jsx)(jt,{children:"My recent projects"}),Object(se.jsx)(Ot,{children:n&&n.map((function(e){return Object(se.jsx)(gt,{title:e.name,repositoryAdress:e.html_url,demoAdress:"https://kamilstawik.github.io/".concat(e.name,"/"),description:e.description},e.id)}))})]})},wt=j.default.div(lt||(lt=Object(O.a)(["\n    margin-top: 120px;\n    width: 60%;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n"]))),vt=j.default.a(ct||(ct=Object(O.a)(["\n    font-weight: 900;\n    margin: 24px 0px;\n    font-size: 32px;\n    line-height: 39px;\n    letter-spacing: 0.05em;\n    text-decoration: none;\n    color: ",";\n    cursor: pointer;\n\n    &:hover {\n        transition: color 0.5s;\n        color: ",";\n    }\n"])),(function(e){return e.theme.colors.secondFont}),(function(e){return e.theme.colors.mainBlue})),yt=j.default.p(st||(st=Object(O.a)(["\n    margin: 0px;\n    font-size: 18px;\n    line-height: 1.4;\n    letter-spacing: 0.05em;\n    color: ",";\n"])),(function(e){return e.theme.colors.secondFont})),Et=j.default.div(dt||(dt=Object(O.a)(["\n    margin: 56px 0px;\n    display: flex;\n"]))),kt=function(){return Object(se.jsxs)(wt,{children:[Object(se.jsx)(I,{children:"let's talk!"}),Object(se.jsx)(vt,{href:"mailto:".concat(Ce),children:Ce}),Object(se.jsx)(yt,{children:"I\u2019m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me "}),Object(se.jsx)(Et,{children:Object(se.jsx)(ut,{socialMediaSection:!0})})]})},Ft=function(){return Object(se.jsxs)(y,{children:[Object(se.jsx)(ve,{}),Object(se.jsx)(Je,{title:"My skillset includes \ud83d\udee0\ufe0f",content:Ne}),Object(se.jsx)(Je,{title:"What I want to learn next",content:We}),Object(se.jsx)(Ct,{}),Object(se.jsx)(kt,{})]})};var Mt=function(){var e=Object(b.c)(V);return Object(se.jsxs)(j.ThemeProvider,{theme:!0===e?v:w,children:[Object(se.jsx)(g.Normalize,{}),Object(se.jsx)(C,{}),Object(se.jsx)(Ft,{})]})},St=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))},Pt=n(27),It=n(7),Bt=n.n(It),Ht=n(17),Zt=n(12),Lt=n(25),Rt=function(){var e=Object(Lt.a)(Bt.a.mark((function e(){var t;return Bt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/KamilStawik/repos");case 2:return(t=e.sent).ok||new Error(t.statusText),e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),zt=Bt.a.mark(At),Tt=Bt.a.mark(Dt);function At(){var e;return Bt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Zt.a)(Rt);case 3:return e=t.sent,t.next=6,Object(Zt.b)(T(e));case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),zt,null,[[0,8]])}function Dt(){return Bt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)(z.type,At);case 2:case"end":return e.stop()}}),Tt)}var Vt=Bt.a.mark(_t),Gt=Bt.a.mark(Jt);function _t(){var e;return Bt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Zt.c)(V);case 2:return e=t.sent,t.next=5,Object(Zt.a)(Z,e);case 5:case"end":return t.stop()}}),Vt)}function Jt(){return Bt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Zt.d)("*",_t);case 2:case"end":return e.stop()}}),Gt)}var Nt=Bt.a.mark(Wt);function Wt(){return Bt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ht.a)([Dt(),Jt()]);case 2:case"end":return e.stop()}}),Nt)}var Ut=Object(Pt.a)(),Kt=Object(B.a)({reducer:{homepage:G},middleware:[Ut]});Ut.run(Wt);var qt=Kt;x.a.render(Object(se.jsx)(h.a.StrictMode,{children:Object(se.jsx)(b.a,{store:qt,children:Object(se.jsx)(Mt,{})})}),document.getElementById("root")),St()}},[[39,1,2]]]);
//# sourceMappingURL=main.894bfdc2.chunk.js.map