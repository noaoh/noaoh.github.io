(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,l=n(7273).Z,i=o(n(7294)),u=n(6273),a=n(2725),s=n(3462),c=n(1018),f=n(7190),d=n(1210),p=n(8684),v={};function m(e,t,n,r){if(e&&u.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=i.default.forwardRef(function(e,t){var n,o,h=e.href,E=e.as,g=e.children,b=e.prefetch,y=e.passHref,w=e.replace,T=e.shallow,C=e.scroll,P=e.locale,R=e.onClick,x=e.onMouseEnter,F=e.onTouchStart,L=e.legacyBehavior,S=void 0===L?!0!==Boolean(!1):L,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,S&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));var A=!1!==b,k=i.default.useContext(s.RouterContext),D=i.default.useContext(c.AppRouterContext);D&&(k=D);var M=i.default.useMemo(function(){var e=r(u.resolveHref(k,h,!0),2),t=e[0],n=e[1];return{href:t,as:E?u.resolveHref(k,E):n||t}},[k,h,E]),N=M.href,j=M.as,H=i.default.useRef(N),_=i.default.useRef(j);S&&(o=i.default.Children.only(n));var Y=S?o&&"object"==typeof o&&o.ref:t,B=r(f.useIntersection({rootMargin:"200px"}),3),I=B[0],V=B[1],U=B[2],z=i.default.useCallback(function(e){(_.current!==j||H.current!==N)&&(U(),_.current=j,H.current=N),I(e),Y&&("function"==typeof Y?Y(e):"object"==typeof Y&&(Y.current=e))},[j,Y,N,U,I]);i.default.useEffect(function(){var e=V&&A&&u.isLocalURL(N),t=void 0!==P?P:k&&k.locale,n=v[N+"%"+j+(t?"%"+t:"")];e&&!n&&m(k,N,j,{locale:t})},[j,N,V,P,A,k]);var $={ref:z,onClick:function(e){S||"function"!=typeof R||R(e),S&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,l,a,s,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:s,scroll:a}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};c?i.default.startTransition(v):v()}}(e,k,N,j,w,T,C,P,Boolean(D),A)},onMouseEnter:function(e){S||"function"!=typeof x||x(e),S&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!A&&D)&&u.isLocalURL(N)&&m(k,N,j,{priority:!0})},onTouchStart:function(e){S||"function"!=typeof F||F(e),S&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!A&&D)&&u.isLocalURL(N)&&m(k,N,j,{priority:!0})}};if(!S||y||"a"===o.type&&!("href"in o.props)){var q=void 0!==P?P:k&&k.locale,Z=k&&k.isLocaleDomain&&d.getDomainLocale(j,q,k.locales,k.domainLocales);$.href=Z||p.addBasePath(a.addLocale(j,q,k&&k.defaultLocale))}return S?i.default.cloneElement(o,$):i.default.createElement("a",Object.assign({},O,$),n)});t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var l=r.default.createContext(null);t.LayoutRouterContext=l;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i;var u=r.default.createContext(null);t.TemplateContext=u},1664:function(e,t,n){e.exports=n(8418)},728:function(e,t,n){"use strict";n.d(t,{V:function(){return eR}});var r,o,l=n(7294),i=n(2984),u=n(2351),a=n(3784),s=((o=s||{}).Space=" ",o.Enter="Enter",o.Escape="Escape",o.Backspace="Backspace",o.Delete="Delete",o.ArrowLeft="ArrowLeft",o.ArrowUp="ArrowUp",o.ArrowRight="ArrowRight",o.ArrowDown="ArrowDown",o.Home="Home",o.End="End",o.PageUp="PageUp",o.PageDown="PageDown",o.Tab="Tab",o),c=n(6723),f=n(2180);let d=0;function p(){return++d}let v=null!=(r=l.useId)?r:function(){let e=(0,f.H)(),[t,n]=l.useState(e?p:null);return(0,c.e)(()=>{null===t&&n(p())},[t]),null!=t?""+t:void 0};var m,h=((m=h||{})[m.None=1]="None",m[m.Focusable=2]="Focusable",m[m.Hidden=4]="Hidden",m);let E=(0,u.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,u.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var g=n(3393);function b(e){return g.s?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var w,T,C,P,R=((w=R||{})[w.First=1]="First",w[w.Previous=2]="Previous",w[w.Next=4]="Next",w[w.Last=8]="Last",w[w.WrapAround=16]="WrapAround",w[w.NoScroll=32]="NoScroll",w),x=((T=x||{})[T.Error=0]="Error",T[T.Overflow=1]="Overflow",T[T.Success=2]="Success",T[T.Underflow=3]="Underflow",T),F=((C=F||{})[C.Previous=-1]="Previous",C[C.Next=1]="Next",C),L=((P=L||{})[P.Strict=0]="Strict",P[P.Loose=1]="Loose",P);function S(e){null==e||e.focus({preventScroll:!0})}function O(e,t,n=!0,r=null){var o,l,i;let u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(y))}(e);r=null!=r?r:u.activeElement;let s=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},d=0,p=a.length,v;do{if(d>=p||d+p<=0)return 0;let m=c+d;if(16&t)m=(m+p)%p;else{if(m<0)return 3;if(m>=p)return 1}null==(v=a[m])||v.focus(f),d+=s}while(v!==u.activeElement);return 6&t&&null!=(i=null==(l=null==(o=v)?void 0:o.matches)?void 0:l.call(o,"textarea,input"))&&i&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}var A,k=n(3781),D=n(3855),M=((A=M||{})[A.Forwards=0]="Forwards",A[A.Backwards=1]="Backwards",A),N=n(4879);function j(...e){return(0,l.useMemo)(()=>b(...e),[...e])}function H(e,t,n,r){let o=(0,D.E)(n);(0,l.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}var _=n(1021);function Y(e,t){let n=(0,l.useRef)([]),r=(0,k.z)(e);(0,l.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let i=r(t,e);return n.current=t,i}},[r,...t])}var B,I=((B=I||{})[B.None=1]="None",B[B.InitialFocus=2]="InitialFocus",B[B.TabLock=4]="TabLock",B[B.FocusLock=8]="FocusLock",B[B.RestoreFocus=16]="RestoreFocus",B[B.All=30]="All",B);let V=Object.assign((0,u.yV)(function(e,t){var n,r,o;let s=(0,l.useRef)(null),c=(0,a.T)(s,t),{initialFocus:d,containers:p,features:v=30,...m}=e;(0,f.H)()||(v=1);let g=j(s);!function({ownerDocument:e},t){let n=(0,l.useRef)(null);H(null==e?void 0:e.defaultView,"focusout",e=>{!t||n.current||(n.current=e.target)},!0),Y(()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&S(n.current),n.current=null)},[t]);let r=(0,l.useRef)(!1);(0,l.useEffect)(()=>(r.current=!1,()=>{r.current=!0,(0,_.Y)(()=>{r.current&&(S(n.current),n.current=null)})}),[])}({ownerDocument:g},Boolean(16&v));let b=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,l.useRef)(null),i=(0,N.t)();return Y(()=>{if(!r)return;let l=t.current;l&&(0,_.Y)(()=>{if(!i.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(l.contains(t)){o.current=t;return}null!=n&&n.current?S(n.current):O(l,R.First)===x.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:g,container:s,initialFocus:d},Boolean(2&v));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,N.t)();H(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let i=new Set(null==n?void 0:n.current);i.add(t);let u=r.current;if(!u)return;let a=e.target;a&&a instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(i,a)?(r.current=a,S(a)):(e.preventDefault(),e.stopPropagation(),S(u)):S(r.current)},!0)}({ownerDocument:g,container:s,containers:p,previousActiveElement:b},Boolean(8&v));let y,w,T=(y=(0,l.useRef)(0),n="keydown",r=e=>{"Tab"===e.key&&(y.current=e.shiftKey?1:0)},w=(0,D.E)(r),(0,l.useEffect)(()=>{function e(e){w.current(e)}return window.addEventListener(n,e,!0),()=>window.removeEventListener(n,e,!0)},[n,!0]),y),C=(0,k.z)(()=>{let e=s.current;e&&(0,i.E)(T.current,{[M.Forwards]:()=>O(e,R.First),[M.Backwards]:()=>O(e,R.Last)})});return l.createElement(l.Fragment,null,Boolean(4&v)&&l.createElement(E,{as:"button",type:"button",onFocus:C,features:h.Focusable}),(0,u.sY)({ourProps:{ref:c},theirProps:m,defaultTag:"div",name:"FocusTrap"}),Boolean(4&v)&&l.createElement(E,{as:"button",type:"button",onFocus:C,features:h.Focusable}))}),{features:I}),U=new Set,z=new Map;function $(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function q(e){let t=z.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var Z=n(3935);let W=(0,l.createContext)(!1);function G(e){return l.createElement(W.Provider,{value:e.force},e.children)}let K=l.Fragment,J=(0,u.yV)(function(e,t){let n=(0,l.useRef)(null),r=(0,a.T)((0,a.h)(e=>{n.current=e}),t),o=j(n),i=function(e){let t=(0,l.useContext)(W),n=(0,l.useContext)(X),r=j(e),[o,i]=(0,l.useState)(()=>{if(!t&&null!==n||g.s)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,l.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,l.useEffect)(()=>{t||null!==n&&i(n.current)},[n,i,t]),o}(n),[s]=(0,l.useState)(()=>{var e;return g.s?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),d=(0,f.H)(),p=(0,l.useRef)(!1);return(0,c.e)(()=>{if(p.current=!1,!(!i||!s))return i.contains(s)||(s.setAttribute("data-headlessui-portal",""),i.appendChild(s)),()=>{p.current=!0,(0,_.Y)(()=>{var e;p.current&&i&&s&&(i.removeChild(s),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i)))})}},[i,s]),d&&i&&s?(0,Z.createPortal)((0,u.sY)({ourProps:{ref:r},theirProps:e,defaultTag:K,name:"Portal"}),s):null}),Q=l.Fragment,X=(0,l.createContext)(null),ee=(0,u.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,a.T)(t)};return l.createElement(X.Provider,{value:n},(0,u.sY)({ourProps:o,theirProps:r,defaultTag:Q,name:"Popover.Group"}))}),et=Object.assign(J,{Group:ee}),en=(0,l.createContext)(null),er=(0,u.yV)(function(e,t){let n=v(),{id:r=`headlessui-description-${n}`,...o}=e,i=function e(){let t=(0,l.useContext)(en);if(null===t){let n=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return t}(),s=(0,a.T)(t);(0,c.e)(()=>i.register(r),[r,i.register]);let f={ref:s,...i.props,id:r};return(0,u.sY)({ourProps:f,theirProps:o,slot:i.slot||{},defaultTag:"p",name:i.name||"Description"})});var eo=n(6567);let el=(0,l.createContext)(()=>{});el.displayName="StackContext";var ei=((es=ei||{})[es.Add=0]="Add",es[es.Remove=1]="Remove",es);function eu({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=(0,l.useContext)(el),u=(0,k.z)((...e)=>{null==t||t(...e),i(...e)});return(0,c.e)(()=>{let e=void 0===o||!0===o;return e&&u(0,n,r),()=>{e&&u(1,n,r)}},[u,n,r,o]),l.createElement(el.Provider,{value:u},e)}function ea(e,t,n){let r=(0,D.E)(t);(0,l.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var es,ec,ef,ed=n(9362),ep=((ec=ep||{})[ec.Open=0]="Open",ec[ec.Closed=1]="Closed",ec),ev=((ef=ev||{})[ef.SetTitleId=0]="SetTitleId",ef);let em={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eh=(0,l.createContext)(null);function eE(e){let t=(0,l.useContext)(eh);if(null===t){let n=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,eE),n}return t}function eg(e,t){return(0,i.E)(t.type,em,e,t)}eh.displayName="DialogContext";let eb=u.AN.RenderStrategy|u.AN.Static,ey=(0,u.yV)(function(e,t){var n,r;let o=v(),{id:d=`headlessui-dialog-${o}`,open:p,onClose:m,initialFocus:g,__demoMode:w=!1,...T}=e,[C,P]=(0,l.useState)(0),R=(0,eo.oJ)();void 0===p&&null!==R&&(p=(0,i.E)(R,{[eo.ZM.Open]:!0,[eo.ZM.Closed]:!1}));let x=(0,l.useRef)(new Set),F=(0,l.useRef)(null),S=(0,a.T)(F,t),O=(0,l.useRef)(null),A=j(F),D=e.hasOwnProperty("open")||null!==R,M=e.hasOwnProperty("onClose");if(!D&&!M)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!D)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!M)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof p)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${p}`);if("function"!=typeof m)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${m}`);let N=p?0:1,[_,Y]=(0,l.useReducer)(eg,{titleId:null,descriptionId:null,panelRef:(0,l.createRef)()}),B=(0,k.z)(()=>m(!1)),I=(0,k.z)(e=>Y({type:0,id:e})),Z=!!(0,f.H)()&&!w&&0===N,W=C>1,K=null!==(0,l.useContext)(eh);(function(e,t=!0){(0,c.e)(()=>{if(!t||!e.current)return;let n=e.current,r=b(n);if(r){for(let o of(U.add(n),z.keys()))o.contains(n)&&(q(o),z.delete(o));return r.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let t of U)if(e.contains(t))return;1===U.size&&(z.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),$(e))}}),()=>{if(U.delete(n),U.size>0)r.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!z.has(e)){for(let t of U)if(e.contains(t))return;z.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),$(e)}});else for(let e of z.keys())q(e),z.delete(e)}}},[t])})(F,!!W&&Z),function(e,t,n=!0){let r=(0,l.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),u=o(n);if(null!==u&&u.getRootNode().contains(u)){for(let a of l){if(null===a)continue;let s=a instanceof HTMLElement?a:a.current;if(null!=s&&s.contains(u)||n.composed&&n.composedPath().includes(s))return}return!function(e,t=0){var n;return e!==(null==(n=b(e))?void 0:n.body)&&(0,i.E)(t,{0:()=>e.matches(y),1(){let t=e;for(;null!==t;){if(t.matches(y))return!0;t=t.parentElement}return!1}})}(u,L.Loose)&&-1!==u.tabIndex&&n.preventDefault(),t(n,u)}}(0,l.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let u=(0,l.useRef)(null);ea("mousedown",e=>{var t,n;r.current&&(u.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),ea("click",e=>{u.current&&(o(e,()=>u.current),u.current=null)},!0),ea("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(()=>{var e,t;return[...Array.from(null!=(e=null==A?void 0:A.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(!(e instanceof HTMLElement)||e.contains(O.current)||_.panelRef.current&&e.contains(_.panelRef.current))),null!=(t=_.panelRef.current)?t:F.current]},B,Z&&!W),H(null==A?void 0:A.defaultView,"keydown",e=>{e.defaultPrevented||e.key===s.Escape&&0===N&&(W||(e.preventDefault(),e.stopPropagation(),B()))}),r=0===N&&!K,(0,l.useEffect)(()=>{var e;if(!r||!A)return;let t=(0,ed.k)();function n(e,n,r){let o=e.style.getPropertyValue(n);return Object.assign(e.style,{[n]:r}),t.add(()=>{Object.assign(e.style,{[n]:o})})}let o=A.documentElement,l=(null!=(e=A.defaultView)?e:window).innerWidth-o.clientWidth;if(n(o,"overflow","hidden"),l>0){let i=o.clientWidth-o.offsetWidth;n(o,"paddingRight",`${l-i}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){let u=window.pageYOffset;n(o,"position","fixed"),n(o,"marginTop",`-${u}px`),n(o,"width","100%"),t.add(()=>window.scrollTo(0,u))}return t.dispose},[A,r]),(0,l.useEffect)(()=>{if(0!==N||!F.current)return;let e=new IntersectionObserver(e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&B()});return e.observe(F.current),()=>e.disconnect()},[N,F,B]);let[J,Q]=function(){let[e,t]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)(()=>function(e){let n=(0,k.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,l.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return l.createElement(en.Provider,{value:r},e.children)},[t])]}(),X=(0,l.useMemo)(()=>[{dialogState:N,close:B,setTitleId:I},_],[N,_,B,I]),ee=(0,l.useMemo)(()=>({open:0===N}),[N]),er={ref:S,id:d,role:"dialog","aria-modal":0===N||void 0,"aria-labelledby":_.titleId,"aria-describedby":J};return l.createElement(eu,{type:"Dialog",enabled:0===N,element:F,onUpdate:(0,k.z)((e,t,n)=>{"Dialog"===t&&(0,i.E)(e,{[ei.Add](){x.current.add(n),P(e=>e+1)},[ei.Remove](){x.current.add(n),P(e=>e-1)}})})},l.createElement(G,{force:!0},l.createElement(et,null,l.createElement(eh.Provider,{value:X},l.createElement(et.Group,{target:F},l.createElement(G,{force:!1},l.createElement(Q,{slot:ee,name:"Dialog.Description"},l.createElement(V,{initialFocus:g,containers:x,features:Z?(0,i.E)(W?"parent":"leaf",{parent:V.features.RestoreFocus,leaf:V.features.All&~V.features.FocusLock}):V.features.None},(0,u.sY)({ourProps:er,theirProps:T,slot:ee,defaultTag:"div",features:eb,visible:0===N,name:"Dialog"})))))))),l.createElement(E,{features:h.Hidden,ref:O}))}),ew=(0,u.yV)(function(e,t){let n=v(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:i,close:s}]=eE("Dialog.Overlay"),c=(0,a.T)(t),f=(0,k.z)(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),s()}}),d=(0,l.useMemo)(()=>({open:0===i}),[i]);return(0,u.sY)({ourProps:{ref:c,id:r,"aria-hidden":!0,onClick:f},theirProps:o,slot:d,defaultTag:"div",name:"Dialog.Overlay"})}),eT=(0,u.yV)(function(e,t){let n=v(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:i},s]=eE("Dialog.Backdrop"),c=(0,a.T)(t);(0,l.useEffect)(()=>{if(null===s.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let f=(0,l.useMemo)(()=>({open:0===i}),[i]);return l.createElement(G,{force:!0},l.createElement(et,null,(0,u.sY)({ourProps:{ref:c,id:r,"aria-hidden":!0},theirProps:o,slot:f,defaultTag:"div",name:"Dialog.Backdrop"})))}),eC=(0,u.yV)(function(e,t){let n=v(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:i},s]=eE("Dialog.Panel"),c=(0,a.T)(t,s.panelRef),f=(0,l.useMemo)(()=>({open:0===i}),[i]),d=(0,k.z)(e=>{e.stopPropagation()});return(0,u.sY)({ourProps:{ref:c,id:r,onClick:d},theirProps:o,slot:f,defaultTag:"div",name:"Dialog.Panel"})}),eP=(0,u.yV)(function(e,t){let n=v(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:i,setTitleId:s}]=eE("Dialog.Title"),c=(0,a.T)(t);(0,l.useEffect)(()=>(s(r),()=>s(null)),[r,s]);let f=(0,l.useMemo)(()=>({open:0===i}),[i]);return(0,u.sY)({ourProps:{ref:c,id:r},theirProps:o,slot:f,defaultTag:"h2",name:"Dialog.Title"})}),eR=Object.assign(ey,{Backdrop:eT,Panel:eC,Overlay:ew,Title:eP,Description:er})},6546:function(e,t,n){"use strict";n.d(t,{u:function(){return A}});var r,o=n(7294),l=n(2351),i=n(6567),u=n(2984),a=n(4879),s=n(6723),c=n(3855),f=n(2180),d=n(3784),p=n(9362);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function m(e,...t){e&&t.length>0&&e.classList.remove(...t)}function h(){let[e]=(0,o.useState)(p.k);return(0,o.useEffect)(()=>()=>e.dispose(),[e]),e}var E=n(3781);function g(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let b=(0,o.createContext)(null);b.displayName="TransitionContext";var y=((r=y||{}).Visible="visible",r.Hidden="hidden",r);let w=(0,o.createContext)(null);function T(e){return"children"in e?T(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function C(e,t){let n=(0,c.E)(e),r=(0,o.useRef)([]),i=(0,a.t)(),s=h(),f=(0,E.z)((e,t=l.l4.Hidden)=>{let o=r.current.findIndex(({el:t})=>t===e);-1!==o&&((0,u.E)(t,{[l.l4.Unmount](){r.current.splice(o,1)},[l.l4.Hidden](){r.current[o].state="hidden"}}),s.microTask(()=>{var e;!T(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,E.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,l.l4.Unmount)}),p=(0,o.useRef)([]),v=(0,o.useRef)(Promise.resolve()),m=(0,o.useRef)({enter:[],leave:[],idle:[]}),g=(0,E.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(m.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,E.z)((e,t,n)=>{Promise.all(m.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:r,register:d,unregister:f,onStart:g,onStop:b,wait:v,chains:m}),[d,f,r,g,b,m,v])}function P(){}w.displayName="NestingContext";let R=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function x(e){var t;let n={};for(let r of R)n[r]=null!=(t=e[r])?t:P;return n}let F=l.AN.RenderStrategy,L=(0,l.yV)(function(e,t){var n;let{beforeEnter:r,afterEnter:y,beforeLeave:P,afterLeave:R,enter:L,enterFrom:S,enterTo:O,entered:A,leave:k,leaveFrom:D,leaveTo:M,...N}=e,j=(0,o.useRef)(null),H=(0,d.T)(j,t),_=N.unmount?l.l4.Unmount:l.l4.Hidden,{show:Y,appear:B,initial:I}=function(){let e=(0,o.useContext)(b);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[V,U]=(0,o.useState)(Y?"visible":"hidden"),z=function(){let e=(0,o.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:$,unregister:q}=z,Z=(0,o.useRef)(null);(0,o.useEffect)(()=>$(j),[$,j]),(0,o.useEffect)(()=>{if(_===l.l4.Hidden&&j.current){if(Y&&"visible"!==V){U("visible");return}return(0,u.E)(V,{hidden:()=>q(j),visible:()=>$(j)})}},[V,j,$,q,Y,_]);let W,G=(0,c.E)({enter:g(L),enterFrom:g(S),enterTo:g(O),entered:g(A),leave:g(k),leaveFrom:g(D),leaveTo:g(M)}),K=(n={beforeEnter:r,afterEnter:y,beforeLeave:P,afterLeave:R},W=(0,o.useRef)(x(n)),(0,o.useEffect)(()=>{W.current=x(n)},[n]),W),J=(0,f.H)();(0,o.useEffect)(()=>{if(J&&"visible"===V&&null===j.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[j,V,J]);let Q=I&&!B,X=!J||Q||Z.current===Y?"idle":Y?"enter":"leave",ee=(0,E.z)(e=>(0,u.E)(e,{enter:()=>K.current.beforeEnter(),leave:()=>K.current.beforeLeave(),idle(){}})),et=(0,E.z)(e=>(0,u.E)(e,{enter:()=>K.current.afterEnter(),leave:()=>K.current.afterLeave(),idle(){}})),en=C(()=>{U("hidden"),q(j)},z);(function({container:e,direction:t,classes:n,onStart:r,onStop:o}){let l=(0,a.t)(),i=h(),f=(0,c.E)(t);(0,s.e)(()=>{let t=(0,p.k)();i.add(t.dispose);let a=e.current;if(a&&"idle"!==f.current&&l.current){var s,c,d,h,E;let g,b,y,w,T,C,P;return t.dispose(),r.current(f.current),t.add((s=a,c=n.current,d="enter"===f.current,h=()=>{t.dispose(),o.current(f.current)},b=d?"enter":"leave",y=(0,p.k)(),w=void 0!==h?(g={called:!1},(...e)=>{if(!g.called)return g.called=!0,h(...e)}):()=>{},"enter"===b&&(s.removeAttribute("hidden"),s.style.display=""),T=(0,u.E)(b,{enter:()=>c.enter,leave:()=>c.leave}),C=(0,u.E)(b,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),P=(0,u.E)(b,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),m(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),v(s,...T,...P),y.nextFrame(()=>{m(s,...P),v(s,...C),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[l,i]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(l+i!==0){let u=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),u())})}else t();n.add(()=>t()),n.dispose}(s,()=>(m(s,...T),v(s,...c.entered),w()))}),y.dispose)),t.dispose}},[t])})({container:j,classes:G,direction:X,onStart:(0,c.E)(e=>{en.onStart(j,e,ee)}),onStop:(0,c.E)(e=>{en.onStop(j,e,et),"leave"!==e||T(en)||(U("hidden"),q(j))})}),(0,o.useEffect)(()=>{Q&&(_===l.l4.Hidden?Z.current=null:Z.current=Y)},[Y,Q,V]);let er=N;return B&&Y&&("undefined"==typeof window||"undefined"==typeof document)&&(er={...er,className:function(...e){return e.filter(Boolean).join(" ")}(N.className,...G.current.enter,...G.current.enterFrom)}),o.createElement(w.Provider,{value:en},o.createElement(i.up,{value:(0,u.E)(V,{visible:i.ZM.Open,hidden:i.ZM.Closed})},(0,l.sY)({ourProps:{ref:H},theirProps:er,defaultTag:"div",features:F,visible:"visible"===V,name:"Transition.Child"})))}),S=(0,l.yV)(function(e,t){let{show:n,appear:r=!1,unmount:a,...c}=e,p=(0,o.useRef)(null),v=(0,d.T)(p,t);(0,f.H)();let m=(0,i.oJ)();if(void 0===n&&null!==m&&(n=(0,u.E)(m,{[i.ZM.Open]:!0,[i.ZM.Closed]:!1})),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,E]=(0,o.useState)(n?"visible":"hidden"),g=C(()=>{E("hidden")}),[y,P]=(0,o.useState)(!0),R=(0,o.useRef)([n]);(0,s.e)(()=>{!1!==y&&R.current[R.current.length-1]!==n&&(R.current.push(n),P(!1))},[R,n]);let x=(0,o.useMemo)(()=>({show:n,appear:r,initial:y}),[n,r,y]);(0,o.useEffect)(()=>{if(n)E("visible");else if(T(g)){let e=p.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&E("hidden")}else E("hidden")},[n,g]);let S={unmount:a};return o.createElement(w.Provider,{value:g},o.createElement(b.Provider,{value:x},(0,l.sY)({ourProps:{...S,as:o.Fragment,children:o.createElement(L,{ref:v,...S,...c})},theirProps:{},defaultTag:o.Fragment,features:F,visible:"visible"===h,name:"Transition"})))}),O=(0,l.yV)(function(e,t){let n=null!==(0,o.useContext)(b),r=null!==(0,i.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(S,{ref:t,...e}):o.createElement(L,{ref:t,...e}))}),A=Object.assign(S,{Child:O,Root:S})},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7294),o=n(3855);let l=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},4879:function(e,t,n){"use strict";n.d(t,{t:function(){return l}});var r=n(7294),o=n(6723);function l(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return o}});var r=n(7294);let o=n(3393).s?r.useEffect:r.useLayoutEffect},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(7294),o=n(6723);function l(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return l}});var r=n(7294);let o={serverHandoffComplete:!1};function l(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)},[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return u},h:function(){return i}});var r=n(7294),o=n(3781);let l=Symbol();function i(e,t=!0){return Object.assign(e,{[l]:t})}function u(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[l]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return i},oJ:function(){return u},up:function(){return a}});var r,o=n(7294);let l=(0,o.createContext)(null);l.displayName="OpenClosedContext";var i=((r=i||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r);function u(){return(0,o.useContext)(l)}function a({value:e,children:t}){return o.createElement(l.Provider,{value:e},t)}},9362:function(e,t,n){"use strict";n.d(t,{k:function(){return o}});var r=n(1021);function o(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[r]=e.splice(n,1);r()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let o=t[e];return"function"==typeof o?o(...n):o}let l=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,r),l}n.d(t,{E:function(){return r}})},1021:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return u},l4:function(){return a},sY:function(){return s},yV:function(){return d}});var r,o,l=n(7294),i=n(2984),u=((r=u||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),a=((o=a||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:u}){let a=f(t,e);if(l)return c(a,n,r,u);let s=null!=o?o:0;if(2&s){let{static:d=!1,...p}=a;if(d)return c(p,n,r,u)}if(1&s){let{unmount:v=!0,...m}=a;return(0,i.E)(v?0:1,{0:()=>null,1:()=>c({...m,hidden:!0,style:{display:"none"}},n,r,u)})}return c(a,n,r,u)}function c(e,t={},n,r){let{as:o=n,children:i,refName:u="ref",...a}=v(e,["unmount","static"]),s=void 0!==e.ref?{[u]:e.ref}:{},c="function"==typeof i?i(t):i;a.className&&"function"==typeof a.className&&(a.className=a.className(t));let d={};if(t){let m=!1,h=[];for(let[E,g]of Object.entries(t))"boolean"==typeof g&&(m=!0),!0===g&&h.push(E);m&&(d["data-headlessui-state"]=h.join(" "))}if(o===l.Fragment&&Object.keys(p(a)).length>0){if(!(0,l.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,l.cloneElement)(c,Object.assign({},f(c.props,p(v(a,["ref"]))),d,s,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(c.ref,s.ref)))}return(0,l.createElement)(o,Object.assign({},v(a,["ref"]),o!==l.Fragment&&s,o!==l.Fragment&&d),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let l in n)Object.assign(t,{[l](e,...t){let r=n[l];for(let o of r){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;o(e,...t)}}});return t}function d(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}},3393:function(e,t,n){"use strict";n.d(t,{s:function(){return r}});let r="undefined"==typeof window||"undefined"==typeof document},1561:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16m-7 6h7"}))});t.Z=o}}]);