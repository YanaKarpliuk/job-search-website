(self.webpackChunkjobs_test_task=self.webpackChunkjobs_test_task||[]).push([[2],{794:function(e,t,r){"use strict";r(791);t.Z=r.p+"static/media/bookmark-colored.7db0a5d61e532619e82ec116cda599f5.svg"},520:function(e,t,r){"use strict";r(791);t.Z=r.p+"static/media/bookmark.d567adf120bc1e4e4c543e67059eaadc.svg"},700:function(e,t,r){"use strict";r(791);t.Z=r.p+"static/media/location.1c093ca173a538132f1ce31ab6296061.svg"},663:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(184);function a(e){var t=e.id,r=e.image,a=e.imageColor,o=e.text,s=e.mrImage,l=e.onClick,i=e.favorite;return(0,n.jsxs)("button",{onClick:function(){return l(t)},className:"flex items-center",children:[i?(0,n.jsx)("img",{className:"mr-[".concat(s,"] h-[25px]"),src:a,alt:"icon"}):(0,n.jsx)("img",{className:"mr-[".concat(s,"] h-[25px]"),src:r,alt:"icon"}),(0,n.jsx)("p",{className:"text-darkGrayText xl:normalText",children:o})]})}},177:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(426),a=r.n(n);function o(e){return a()(e,"YYYYMMDD").fromNow()}},2:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(885),a=r(791);var o=r.p+"static/media/star.b0c3fad699a08ab3e13d756a2be42d12.svg";var s=r.p+"static/media/star-colored.889dcbc0b176c4bbd8952e0eaaf630eb.svg",l=r(520),i=r(794);var c=r.p+"static/media/Arrow.81b0f26cb6486aa14408fc44c9104536.svg",x=r(663),d=r(177),p=r(184);function u(){return(0,p.jsx)("button",{className:"applyBtn",children:"APPLY NOW"})}function m(e){var t=e.salary,r=e.mb;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("p",{className:"boldText text-darkText",children:["\u20ac ",t]}),(0,p.jsx)("p",{className:"normalText text-darkGrayText mb-[".concat(r,"]"),children:"Brutto, per year"})]})}function f(e){var t=e.title,r=e.createdAt,a=e.description,o=e.salary,s=function(e){var t=(l=e,l.replace(/[\u0000-\u001F\u007F-\u009F]/g,"").replace(/\s+/g," ").trim()),r="Responsopilities:",n="Compensation & Benefits:",a=t.split(r)[0],o=t.substring(t.indexOf(r)+r.length,t.indexOf(n)),s=t.substring(t.indexOf(n)+n.length).split(".").filter((function(e){return e}));var l;return[a,o,s]}(a),l=(0,n.Z)(s,3),i=l[0],c=l[1],x=l[2];return(0,p.jsxs)("section",{className:"mt-[28px] mb-[135px] xl:mb-[86px]",children:[(0,p.jsx)("div",{className:"hidden xl:block",children:(0,p.jsx)(u,{})}),(0,p.jsxs)("div",{className:"flex justify-between mb-[5px] xl:mb-[7px] xl:mt-[32px]",children:[(0,p.jsx)("h4",{className:"largeBoldtext xl:mr-[60px]",children:t}),(0,p.jsx)("div",{className:"hidden xl:flex flex-col w-[30%]",children:(0,p.jsx)(m,{salary:o})})]}),(0,p.jsxs)("div",{className:"flex justify-between items-center mb-[14px] xl:mb-[7px]",children:[(0,p.jsxs)("p",{className:"smallLightText xl:normalText text-lightGrayText",children:["Posted ",(0,d.Z)(r)]}),(0,p.jsx)("div",{className:"flex flex-col-reverse items-end xl:hidden",children:(0,p.jsx)(m,{salary:o,mb:"4px"})})]}),(0,p.jsx)("p",{className:"normalText  text-darkGrayText mb-[43px]",children:i}),(0,p.jsx)("h4",{className:"boldText text-darkText mb-[5px]",children:"Responsibilities:"}),(0,p.jsx)("p",{className:"normalText text-darkGrayText",children:c}),(0,p.jsx)("h4",{className:"boldText text-darkText mt-[20px] mb-[25px]",children:"Compensation & Benefits:"}),(0,p.jsx)("ul",{className:"normalText text-darkGrayText list-square list-inside xl:list-outside",children:x.map((function(e){return(0,p.jsx)("li",{children:e},e)}))}),(0,p.jsx)("div",{className:"flex justify-center xl:justify-start mt-[20px]",children:(0,p.jsx)(u,{})})]})}function b(e){var t=e.pictures,r=e.id;return(0,p.jsx)("section",{className:"mt-[21px] mb-[63px] xl:mb-[97px] flex max-w-[767px] overflow-x-auto",children:t.map((function(e,t){return(0,p.jsx)("img",{className:"h-[200px] rounded-[8px] mr-[10px]",src:"".concat(e,"?random=").concat(r+t)},t)}))})}function h(e){var t=e.employment_type,r=e.benefits;return(0,p.jsxs)("section",{className:"mt-[15px] mb-[53px] xl:mb-[87px]",children:[(0,p.jsxs)("div",{className:"mb-[13px]",children:[(0,p.jsx)("p",{className:"normalText text-darkGrayText mb-[10px]",children:"Employment type"}),(0,p.jsx)("ul",{className:"flex flex-wrap",children:t.map((function(e){return(0,p.jsx)("li",{className:"general-box blue-box general-box-text blue-box-text",children:e},e)}))})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"normalText text-darkGrayText mb-[10px]",children:"Benefits"}),(0,p.jsx)("ul",{className:"flex",children:r.map((function(e){return(0,p.jsx)("li",{className:"general-box yellow-box general-box-text yellow-box-text",children:e},e)}))})]})]})}var y=r(700);function j(e){var t=e.name,r=e.address,o=e.phone,s=e.email,l=e.location,i=String(l.lat),c=String(l.long),x=(0,a.useState)(!0),d=(0,n.Z)(x,2),u=d[0],m=d[1],f="https://maps.geoapify.com/v1/staticmap?style=dark-matter-brown&height=800&zoom=3&center=lonlat:".concat(c,",").concat(i,"&apiKey=").concat("764b520e04a14ebb92020395f16144d5");return(0,p.jsxs)("section",{className:"bg-darkBg rounded-[8px] h-[430px] max-w-[400px] xl:w-[402px] overflow-hidden",children:[(0,p.jsxs)("div",{className:"py-[30px] px-[60px] circle relative",children:[(0,p.jsxs)("p",{className:"relative z-50 text-[16px] leading-[20px] tracking-[0.24px] xl:boldText text-lightTextColor font-bold mb-[14px]",children:["Department name.",(0,p.jsx)("br",{})," ",t]}),(0,p.jsx)("img",{src:y.Z,className:"relative z-50 mr-[8px] mb-[8px] inline",alt:"location pointer"}),(0,p.jsx)("p",{className:"relative z-50 inline text-lightTextColor text-[16px] leading-[23px] tracking-[-0.5px] xl:normalText",children:r}),(0,p.jsxs)("address",{className:"text-transparentWhiteText xl:text-[#E8EBF3] not-italic mt-[6px] xl:normalText",children:[(0,p.jsx)("a",{className:"relative z-50 block",href:"tel:+430140400-12090",children:o}),(0,p.jsx)("a",{className:"relative z-50 block",href:"mailto:post_akh_diz@akhwien.at",children:s})]})]}),(0,p.jsxs)("div",{className:"flex justify-center items-center w-[100%]",children:[(0,p.jsx)("img",{src:f,onLoad:function(){return m(!1)},alt:"map"}),u&&(0,p.jsx)("p",{className:"normalText text-white p-[30px]",children:"Map is loading..."})]})]})}var v=r.p+"static/media/carbon_close.dbebf11ed721c90f7c3c4d0e42c61287.svg",g=r(29);function N(e){var t=e.onClick,r=e.value,o=(0,a.useState)(!1),s=(0,n.Z)(o,2),l=s[0],i=s[1];return(0,p.jsxs)("div",{className:"modal z-[100]",children:[(0,p.jsxs)("div",{className:"flex justify-between border-b-[1px] mb-[10px]",children:[(0,p.jsx)("h2",{className:"largeBoldtext",children:"Share"}),(0,p.jsx)("button",{onClick:t,children:(0,p.jsx)("img",{src:v,alt:"close"})})]}),(0,p.jsx)("p",{className:"normalText",children:"Page link"}),(0,p.jsx)(g.CopyToClipboard,{text:r,onCopy:function(){return i(!0)},children:(0,p.jsx)("input",{className:"smallNormalTextTwo text-darkGrayText w-[100%] bg-gray-300 p-[5px]",readOnly:!0,value:r})}),l?(0,p.jsx)("span",{className:"text-red-500 lightLext",children:"copied"}):null]})}var w=r.p+"static/media/share.14f9ee50b9d134666b10f63dc344ff6b.svg";function C(e){var t=e.onClick;return(0,p.jsxs)("button",{className:"text-darkGrayText xl:normalText flex items-center",onClick:t,children:[(0,p.jsx)("img",{className:"mr-[11px] h-[20px]",src:w,alt:"share icon"}),(0,p.jsx)("p",{children:"Share"})]})}function k(e){var t=e.title;return(0,p.jsx)("div",{className:"border-b-[1px]",children:(0,p.jsx)("h2",{className:"extraLargeBoldText",children:t})})}var T=r(689),O=r(87);function S(e){var t=e.jobData,r=e.favorites,d=e.handleSaveToLS,u=(0,a.useState)(!1),m=(0,n.Z)(u,2),y=m[0],v=m[1],g=(0,a.useState)(window.location.href),w=(0,n.Z)(g,2),S=w[0],D=(w[1],(0,T.UO)().id),P=t.find((function(e){return e.id===D}));if(!P)return null;function E(){v((function(e){return!e}))}return(0,p.jsxs)("main",{className:"py-[24px] xl:pt-[56px] xl:pb-[162px] px-[15px] max-w-[740px] xl:max-w-maxWList mx-auto",children:[(0,p.jsxs)("div",{className:" xl:flex max-w-maxWDetails mx-auto ",children:[(0,p.jsxs)("div",{className:"xl:mr-[131px]",children:[(0,p.jsxs)("div",{className:"border-b-[1px] mb-[20px] xl:mb-[39px] flex items-center justify-between",children:[(0,p.jsx)("h2",{className:"extraLargeBoldText",children:"Job Details"}),(0,p.jsxs)("div",{className:"hidden xl:flex",children:[(0,p.jsx)("div",{className:"mr-[24px]",children:(0,p.jsx)(x.Z,{id:P.id,image:l.Z,imageColor:i.Z,text:"Save to my list",mrImage:"8px",onClick:d,favorite:r.includes(P.id)})}),(0,p.jsx)(C,{onClick:E})]})]}),(0,p.jsxs)("div",{className:"flex my-[4px] xl:hidden",children:[(0,p.jsx)("div",{className:"mr-[36px]",children:(0,p.jsx)(x.Z,{id:P.id,image:o,imageColor:s,text:"Save to my list",mrImage:"11px",onClick:d,favorite:r.includes(P.id)})}),(0,p.jsx)(C,{onClick:E})]}),(0,p.jsx)(f,{title:P.title,createdAt:P.createdAt,description:P.description,salary:P.salary}),(0,p.jsxs)("div",{className:"flex flex-col xl:flex-col-reverse",children:[(0,p.jsxs)("div",{children:[(0,p.jsx)(k,{title:"Attached images"}),(0,p.jsx)(b,{pictures:P.pictures,id:P.id})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)(k,{title:"Additional info"}),(0,p.jsx)(h,{employment_type:P.employment_type,benefits:P.benefits})]})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:"xl:hidden mb-[21px]",children:(0,p.jsx)(k,{title:"Contacts"})}),(0,p.jsx)(j,{name:P.name,address:P.address,phone:P.phone,email:P.email,location:P.location})]}),y&&(0,p.jsx)(N,{onClick:E,value:S})]}),(0,p.jsxs)(O.rU,{to:"/",className:"returnBtn",children:[(0,p.jsx)("img",{className:"mr-[19px]",src:c,alt:"arrow"}),(0,p.jsx)("p",{className:"semiBoldSmallText text-darkText",children:"RETURN TO JOB BOARD"})]})]})}},998:function(e,t,r){"use strict";var n=r(458),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,o,s,l,i,c,x=!1;t||(t={}),r=t.debug||!1;try{if(s=n(),l=document.createRange(),i=document.getSelection(),(c=document.createElement("span")).textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=a[t.format]||a.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),i.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");x=!0}catch(d){r&&console.error("unable to copy using execCommand: ",d),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),x=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{i&&("function"==typeof i.removeRange?i.removeRange(l):i.removeAllRanges()),c&&document.body.removeChild(c),s()}return x}},568:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var a=l(r(791)),o=l(r(998)),s=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var a=h(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f(this,r)}}function f(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(i,e);var t,r,n,l=m(i);function i(){var e;d(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return y(b(e=l.call.apply(l,[this].concat(r))),"onClick",(function(t){var r=e.props,n=r.text,s=r.onCopy,l=r.children,i=r.options,c=a.default.Children.only(l),x=(0,o.default)(n,i);s&&s(n,x),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(t)})),e}return t=i,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=x(e,s),n=a.default.Children.only(t);return a.default.cloneElement(n,c(c({},r),{},{onClick:this.onClick}))}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.default.PureComponent);t.CopyToClipboard=j,y(j,"defaultProps",{onCopy:void 0,options:void 0})},29:function(e,t,r){"use strict";var n=r(568).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=2.0b091a9a.chunk.js.map