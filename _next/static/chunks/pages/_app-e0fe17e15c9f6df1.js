(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(2476)}])},2199:function(e,t,n){"use strict";var i=n(7294);i.useState;var o=function(){var e=(0,i.useState)(0),t=e[0],n=e[1];return(0,i.useEffect)(function(){var e=function(){n(window.pageYOffset)};return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}},[]),t};t.Z=o},1210:function(e,t){"use strict";function n(e,t,n,i){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,o=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l=e.src,c=e.sizes,g=e.unoptimized,v=void 0!==g&&g,x=e.priority,C=void 0!==x&&x,k=e.loading,z=e.lazyRoot,N=e.lazyBoundary,A=e.className,L=e.quality,O=e.width,R=e.height,M=e.style,P=e.objectFit,I=e.objectPosition,q=e.onLoadingComplete,T=e.placeholder,B=void 0===T?"empty":T,Z=e.blurDataURL,D=s(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),F=u.useContext(p.ImageConfigContext),U=u.useMemo(function(){var e=m||F||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[F]),H=c?"responsive":"intrinsic";"layout"in D&&(D.layout&&(H=D.layout),delete D.layout);var W=S;if("loader"in D){if(D.loader){var V=D.loader;W=function(e){e.config;var t=s(e,["config"]);return V(t)}}delete D.loader}var G="";if(function(e){var t;return"object"==typeof e&&(j(e)||void 0!==e.src)}(l)){var J=j(l)?l.default:l;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(Z=Z||J.blurDataURL,G=J.src,(!H||"fill"!==H)&&(R=R||J.height,O=O||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}l="string"==typeof l?l:G;var K=!C&&("lazy"===k||void 0===k);(l.startsWith("data:")||l.startsWith("blob:"))&&(v=!0,K=!1),b.has(l)&&(K=!1),U.unoptimized&&(v=!0);var Q=o(u.useState(!1),2),X=Q[0],Y=Q[1],$=o(h.useIntersection({rootRef:void 0===z?null:z,rootMargin:N||"200px",disabled:!K}),3),ee=$[0],et=$[1],en=$[2],ei=!K||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=_(O),ec=_(R),es=_(L),eu=Object.assign({},M,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:I}),ed="blur"!==B||X?{}:{backgroundSize:P||"cover",backgroundPosition:I||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(Z,'")')};if("fill"===H)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==el&&void 0!==ec){var ef=ec/el,eh=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===H?(eo.display="block",eo.position="relative",ea=!0,er.paddingTop=eh):"intrinsic"===H?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",ea=!0,er.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(ec,"%27/%3e")):"fixed"===H&&(eo.display="inline-block",eo.position="relative",eo.width=el,eo.height=ec)}var ep={src:y,srcSet:void 0,sizes:void 0};ei&&(ep=w({config:U,src:l,unoptimized:v,layout:H,width:el,quality:es,sizes:c,loader:W}));var eg=l,ev="imagesizes";ev="imageSizes";var em=(i(n={},"imageSrcSet",ep.srcSet),i(n,ev,ep.sizes),i(n,"crossOrigin",D.crossOrigin),n),eb=u.default.useLayoutEffect,ey=u.useRef(q),ex=u.useRef(l);u.useEffect(function(){ey.current=q},[q]),eb(function(){ex.current!==l&&(en(),ex.current=l)},[en,l]);var ej=a({isLazy:K,imgAttributes:ep,heightInt:ec,widthInt:el,qualityInt:es,layout:H,className:A,imgStyle:eu,blurStyle:ed,loading:k,config:U,unoptimized:v,placeholder:B,loader:W,srcString:eg,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:ei,noscriptSizes:c},D);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:eo},ea?u.default.createElement("span",{style:er},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(E,Object.assign({},ej))),C?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ep.src+ep.srcSet+ep.sizes,rel:"preload",as:"image",href:ep.srcSet?void 0:ep.src},em))):null)};var a=n(6495).Z,l=n(2648).Z,c=n(1598).Z,s=n(7273).Z,u=c(n(7294)),d=l(n(5443)),f=n(9309),h=n(7190),p=n(9977);n(3794);var g=n(2392);function v(e){return"/"===e[0]?e.slice(1):e}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,o=e.quality,r=new URL("".concat(t.path).concat(v(n))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t,n=e.config,i=e.src,o=e.width,r=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(r).concat(v(i))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(v(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function j(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,i=e.unoptimized,o=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var o=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(i);s)c.push(parseInt(s[2]));if(c.length){var s,u,d=.01*(u=Math).min.apply(u,r(c));return{widths:a.filter(function(e){return e>=o[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,c),d=u.widths,f=u.kind,h=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map(function(e,i){return"".concat(s({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)}).join(", "),src:s({config:t,src:n,quality:l,width:d[h]})}}function _(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function C(e,t,n,i,o,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===i&&r(!0),null==o?void 0:o.current)){var n=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:n,naturalHeight:a})}}))}var E=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,c=e.blurStyle,d=e.isLazy,f=e.placeholder,h=e.loading,p=e.srcString,g=e.config,v=e.unoptimized,m=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,_=e.onError,S=(e.isVisible,e.noscriptSizes),E=s(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=d?"lazy":h,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},E,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,c),ref:u.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&C(e,p,o,f,b,y)},[x,p,o,f,b,y,]),onLoad:function(e){C(e.currentTarget,p,o,f,b,y),j&&j(e)},onError:function(e){"blur"===f&&y(!0),_&&_(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},E,w({config:g,src:p,unoptimized:v,layout:o,width:n,quality:i,sizes:S,loader:m}),{decoding:"async","data-nimg":o,style:l,className:r,loading:h}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,a=o(n(7294)),l=n(6273),c=n(2725),s=n(3462),u=n(1018),d=n(7190),f=n(1210),h=n(8684),p={};function g(e,t,n,i){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,i)).catch(function(e){});var o=i&&void 0!==i.locale?i.locale:e&&e.locale;p[t+"%"+n+(o?"%"+o:"")]=!0}}var v=a.default.forwardRef(function(e,t){var n,o,v=e.href,m=e.as,b=e.children,y=e.prefetch,x=e.passHref,j=e.replace,w=e.shallow,_=e.scroll,S=e.locale,C=e.onClick,E=e.onMouseEnter,k=e.onTouchStart,z=e.legacyBehavior,N=void 0===z?!0!==Boolean(!1):z,A=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,N&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var L=!1!==y,O=a.default.useContext(s.RouterContext),R=a.default.useContext(u.AppRouterContext);R&&(O=R);var M=a.default.useMemo(function(){var e=i(l.resolveHref(O,v,!0),2),t=e[0],n=e[1];return{href:t,as:m?l.resolveHref(O,m):n||t}},[O,v,m]),P=M.href,I=M.as,q=a.default.useRef(P),T=a.default.useRef(I);N&&(o=a.default.Children.only(n));var B=N?o&&"object"==typeof o&&o.ref:t,Z=i(d.useIntersection({rootMargin:"200px"}),3),D=Z[0],F=Z[1],U=Z[2],H=a.default.useCallback(function(e){(T.current!==I||q.current!==P)&&(U(),T.current=I,q.current=P),D(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[I,B,P,U,D]);a.default.useEffect(function(){var e=F&&L&&l.isLocalURL(P),t=void 0!==S?S:O&&O.locale,n=p[P+"%"+I+(t?"%"+t:"")];e&&!n&&g(O,P,I,{locale:t})},[I,P,F,S,L,O]);var W={ref:H,onClick:function(e){N||"function"!=typeof C||C(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,c,s,u,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(h=(f=e).currentTarget.target)||"_self"===h)&&!f.metaKey&&!f.ctrlKey&&!f.shiftKey&&!f.altKey&&(!f.nativeEvent||2!==f.nativeEvent.which)&&l.isLocalURL(n)){e.preventDefault();var f,h,p=function(){"beforePopState"in t?t[o?"replace":"push"](n,i,{shallow:r,locale:s,scroll:c}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!d})};u?a.default.startTransition(p):p()}}(e,O,P,I,j,w,_,S,Boolean(R),L)},onMouseEnter:function(e){N||"function"!=typeof E||E(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!L&&R)&&l.isLocalURL(P)&&g(O,P,I,{priority:!0})},onTouchStart:function(e){N||"function"!=typeof k||k(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!L&&R)&&l.isLocalURL(P)&&g(O,P,I,{priority:!0})}};if(!N||x||"a"===o.type&&!("href"in o.props)){var V=void 0!==S?S:O&&O.locale,G=O&&O.isLocaleDomain&&f.getDomainLocale(I,V,O.locales,O.domainLocales);W.href=G||h.addBasePath(c.addLocale(I,V,O&&O.defaultLocale))}return N?a.default.cloneElement(o,W):a.default.createElement("a",Object.assign({},A,W),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,s=e.rootMargin,u=e.disabled||!a,d=i(o.useState(!1),2),f=d[0],h=d[1],p=i(o.useState(null),2),g=p[0],v=p[1];return o.useEffect(function(){if(a){if(!u&&!f&&g&&g.tagName){var e,t,i,o,d,p,v;return t=function(e){return e&&h(e)},d=(o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find(function(e){return e.root===n.root&&e.margin===n.margin});if(i&&(t=l.get(i)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},c.push(n),l.set(n,t),t}(i={root:null==n?void 0:n.current,rootMargin:s})).id,p=o.observer,(v=o.elements).set(g,t),p.observe(g),function(){if(v.delete(g),p.unobserve(g),0===v.size){p.disconnect(),l.delete(d);var e=c.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&c.splice(e,1)}}}}else if(!f){var m=r.requestIdleCallback(function(){return h(!0)});return function(){return r.cancelIdleCallback(m)}}},[g,u,s,n,f]),[v,f,o.useCallback(function(){h(!1)},[])]};var o=n(7294),r=n(9311),a="function"==typeof IntersectionObserver,l=new Map,c=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var i=(0,n(2648).Z)(n(7294)),o=i.default.createContext(null);t.AppRouterContext=o;var r=i.default.createContext(null);t.LayoutRouterContext=r;var a=i.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=i.default.createContext(null);t.TemplateContext=l},2476:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return b}});var o=n(5893),r=n(1664),a=n.n(r),l=n(7294),c=n(2806),s=n.n(c),u=function(){return(0,o.jsxs)("footer",{className:s().footer,children:[(0,o.jsxs)("div",{className:s().content,children:["2022 Dise\xf1ado y construido por  ",(0,o.jsx)("span",{className:s().highlight,children:"Jes\xfas Medina"})]}),(0,o.jsxs)("ul",{className:s().list,children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)("li",{children:"Inicio"})}),(0,o.jsx)(a(),{href:"/acerca_de",children:(0,o.jsx)("li",{children:"Acerca de"})}),(0,o.jsx)(a(),{href:"/portfalio",children:(0,o.jsx)("li",{children:"Portfolio"})}),(0,o.jsx)(a(),{href:"/contacto",children:(0,o.jsx)("li",{children:"Contacto"})})]})]})},d=n(5675),f=n.n(d),h=n(7777),p=n.n(h),g=n(1163),v=n(2199),m=function(){var e,t,n,i=(0,g.useRouter)(),r=(0,l.useState)(),c=r[0],s=r[1],u=(0,v.Z)(),d=(t=(e=(0,l.useState)({width:void 0,height:void 0}))[0],n=e[1],(0,l.useEffect)(function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}},[]),t),h=(0,l.useState)(!1),m=h[0],b=h[1],y=(0,l.useState)(!0),x=y[0],j=y[1];if((0,l.useEffect)(function(){"/"===i.pathname?s(0):"/acerca_de"===i.pathname?s(1):"/portfolio"===i.pathname?s(2):s(3)},[i]),(0,l.useEffect)(function(){0==u&&j(!1)},[u]),!x)return(0,o.jsx)("div",{className:"".concat(p().navbar," ").concat(0!=!u||m?"":p().opacity),children:d.width<660?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{onClick:function(){b(!m)},className:p().logo,children:(0,o.jsx)(f(),{layout:"fill",src:"/hamburguer.svg",alt:"twitter"})}),(0,o.jsx)("div",{className:"".concat(p().navbar_aside," ").concat(m&&p().open),children:(0,o.jsx)("div",{children:(0,o.jsxs)("ul",{className:p().ulMobile,children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)("li",{onClick:function(){b(!1)},className:0==c?p().active:"",children:"Inicio"})}),(0,o.jsx)(a(),{href:"/acerca_de",children:(0,o.jsx)("li",{onClick:function(){b(!1)},className:1==c?p().active:"",children:"Acerca"})}),(0,o.jsx)(a(),{href:"/portfolio",children:(0,o.jsx)("li",{onClick:function(){b(!1)},className:2==c?p().active:"",children:"Portfolio"})}),(0,o.jsx)(a(),{href:"/contacto",children:(0,o.jsx)("li",{onClick:function(){b(!1)},className:3==c?p().active:"",children:"Contacto"})})]})})})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(f(),{width:32,height:32,src:"/logo_white.png",alt:"twitter"})}),(0,o.jsx)("div",{children:(0,o.jsxs)("ul",{className:p().ul,children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)("li",{className:0==c?p().active:"",children:"Inicio"})}),(0,o.jsx)(a(),{href:"/acerca_de",children:(0,o.jsx)("li",{className:1==c?p().active:"",children:"Acerca"})}),(0,o.jsx)(a(),{href:"/portfolio",children:(0,o.jsx)("li",{className:2==c?p().active:"",children:"Portfolio"})}),(0,o.jsx)(a(),{href:"/contacto",children:(0,o.jsx)("li",{className:3==c?p().active:"",children:"Contacto"})})]})}),(0,o.jsxs)("div",{className:p().logo_container,children:[(0,o.jsx)("a",{target:"_blank",href:"https://twitter.com/MedinaVilla23",rel:"noopener noreferrer",className:p().logo,children:(0,o.jsx)(f(),{layout:"fill",src:"/twitter.svg",alt:"twitter"})}),(0,o.jsx)("a",{target:"_blank",href:"https://github.com/MedinaVilla",rel:"noopener noreferrer",className:p().logo,children:(0,o.jsx)(f(),{layout:"fill",src:"/github.svg",alt:"github"})}),(0,o.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/josue-de-jesus-medina-villa/",rel:"noopener noreferrer",className:p().logo,children:(0,o.jsx)(f(),{layout:"fill",src:"/linkedin.svg",alt:"linkedin"})})]})]})});o.Fragment};n(906);var b=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100vh"},children:[(0,o.jsx)("div",{style:{flex:"1"},children:(0,o.jsx)(m,{})}),(0,o.jsx)("div",{children:(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}({},n))}),(0,o.jsx)(u,{})]})}},2806:function(e){e.exports={footer:"Footer_footer__AaBZs",highlight:"Footer_highlight__ED9s9",list:"Footer_list__SiePl"}},7777:function(e){e.exports={navbar:"Navbar_navbar__LTdqG",opacity:"Navbar_opacity__g3LHF",ul:"Navbar_ul__fcxLL",logo_container:"Navbar_logo_container__oqTiF",logo:"Navbar_logo__FG2oB",active:"Navbar_active__BnZTl",navbar_aside:"Navbar_navbar_aside__TbF56",open:"Navbar_open__8cQdO",ulMobile:"Navbar_ulMobile__lPmkJ"}},906:function(){},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(387)}),_N_E=e.O()}]);