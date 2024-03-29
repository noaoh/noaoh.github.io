"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1],{7001:function(e,n,t){t.r(n),t.d(n,{default:function(){return p},headerID:function(){return v}});var r=t(5893),i=t(6546),a=t(728),s=t(1561),o=t(4184),c=t.n(o),u=t(1664),l=t.n(u),d=t(7294),f=t(1348),m=function(e,n){(0,d.useEffect)(function(){var t=document.querySelectorAll(e.filter(function(e){return e.isOnHomepage}).map(function(e){return e.urlName}).join(",")),r=Array.from(t),i=document.getElementById(v),a=new IntersectionObserver(function(e){e.forEach(function(e){var t=e.boundingClientRect.y,a=e.target.getAttribute("id");if(i){var s={id:a,currentIndex:r.findIndex(function(e){return e.getAttribute("id")===a}),isIntersecting:e.isIntersecting,currentRatio:e.intersectionRatio,aboveToc:t<i.getBoundingClientRect().y,belowToc:!(t<i.getBoundingClientRect().y)};if(s.isIntersecting)n(Object.values(f.sy).find(function(e){return e.urlName===s.id}));else if(!s.isIntersecting&&s.currentRatio<1&&s.currentRatio>0&&s.belowToc){var o,c=null===(o=r[s.currentIndex-1])||void 0===o?void 0:o.getAttribute("id");n(Object.values(f.sy).find(function(e){return e.urlName===c}))}}})},{root:null,threshold:.1,rootMargin:"0px 0px -70% 0px"});return t.forEach(function(e){a.observe(e)}),function(){a.disconnect()}},[])},v="headerNav",g=(0,d.memo)(function(e){var n=e.sections,t=(0,d.useState)(null),i=t[0],a=t[1],s=(0,d.useMemo)(function(){return Object.values(n).filter(function(e){return e.isOnNavBar})},[n]);return m(s,(0,d.useCallback)(function(e){e&&a(e)},[])),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{currentSection:i,navSections:s}),(0,r.jsx)(x,{currentSection:i,navSections:s})]})}),x=(0,d.memo)(function(e){var n=e.navSections,t=e.currentSection,i="-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bright-red sm:hover:text-bright-red text-neutral-100",a=c()(i,"text-bright-red"),s=c()(i,"text-neutral-100");return(0,r.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-4 backdrop-blur sm:block",id:v,children:(0,r.jsx)("nav",{className:"flex justify-center gap-x-8",children:n.map(function(e){return(0,r.jsx)(h,{activeClass:a,current:e===t,inactiveClass:s,section:e},e.urlName)})})})}),b=(0,d.memo)(function(e){var n=e.navSections,t=e.currentSection,o=(0,d.useState)(!1),u=o[0],l=o[1],f=(0,d.useCallback)(function(){l(!u)},[u]),m="p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-bright-red",v=c()(m,"bg-neutral-900 text-white font-bold"),g=c()(m,"text-neutral-200 font-medium");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{"aria-label":"Menu Button",className:"fixed top-2 right-2 z-40 rounded-md bg-bright-red p-2 ring-offset-gray-800/60 hover:bg-bright-red focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-bright-red focus-visible:ring-offset-2 sm:hidden",onClick:f,children:[(0,r.jsx)(s.Z,{className:"h-8 w-8 text-white"}),(0,r.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,r.jsx)(i.u.Root,{as:d.Fragment,show:u,children:(0,r.jsxs)(a.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:f,children:[(0,r.jsx)(i.u.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(a.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,r.jsx)(i.u.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,r.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,r.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:n.map(function(e){return(0,r.jsx)(h,{activeClass:v,current:e===t,inactiveClass:g,onClick:f,section:e},e.urlName)})})})})]})})]})}),h=(0,d.memo)(function(e){var n=e.section,t=e.current,i=e.inactiveClass,a=e.activeClass,s=e.onClick;return(0,r.jsx)(l(),{href:n.isOnGatsby?n.urlName:n.isOnHomepage?"/#".concat(n.urlName):"/".concat(n.urlName),passHref:!0,children:(0,r.jsx)("a",{className:c()(t?a:i),onClick:s,children:n.displayName},n.urlName)})});g.displayName="Header";var p=g}}]);