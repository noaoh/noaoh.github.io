(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{437:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vinylCollection",function(){return e(2058)}])},2058:function(n,t,e){"use strict";e.r(t);var r=e(7568),i=e(414),c=e(5893),o=e(9008),s=e.n(o),u=e(5675),a=e.n(u),l=e(7294),d=e(9384),h=function(n){var t=new Date(n.dateAdded).toLocaleDateString();return(0,c.jsx)("div",{children:(0,c.jsxs)("p",{children:[(0,c.jsx)(a(),{alt:"Image didn't load",height:"200",src:n.thumbnail,width:"200"})," ",(0,c.jsx)("strong",{children:n.album})," ","by ",(0,c.jsx)("strong",{children:(0,d.x)(n.artists,"and")})," added to my collection on ",(0,c.jsx)("strong",{children:t})]})})},f=function(){var n,t=(0,l.useState)([]),e=t[0],o=t[1],u=(n=(0,r.Z)(function(){var n,t,e,r,c;return(0,i.__generator)(this,function(e){switch(e.label){case 0:n="https://ch9mysodje.execute-api.us-east-1.amazonaws.com/vinyl-collection",t={method:"GET"},e.label=1;case 1:return e.trys.push([1,4,,5]),[4,fetch(n,t)];case 2:return[4,e.sent().json()];case 3:return o(e.sent()),[3,5];case 4:return c=e.sent(),console.log(c),[3,5];case 5:return[2]}})}),function(){return n.apply(this,arguments)});return(0,l.useEffect)(function(){u()},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s(),{children:(0,c.jsx)("title",{children:"My Vinyl Collection"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("strong",{children:(0,c.jsx)("h1",{children:"My Vinyl Collection"})}),(0,c.jsx)("ol",{children:e&&e.map(function(n,t){return(0,c.jsx)("li",{children:(0,c.jsx)(h,{album:n.album,artists:n.artists,dateAdded:n.dateAdded,thumbnail:n.thumbnail})},t)})})]})]})};t.default=f},9384:function(n,t,e){"use strict";e.d(t,{x:function(){return r}});var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.length,i=n.pop();return n.length?"".concat(n.join(", ")).concat(e&&r>2?",":""," ").concat(t," ").concat(i).trim():i}},7568:function(n,t,e){"use strict";function r(n,t,e,r,i,c,o){try{var s=n[c](o),u=s.value}catch(a){e(a);return}s.done?t(u):Promise.resolve(u).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise(function(i,c){var o=n.apply(t,e);function s(n){r(o,i,c,s,u,"next",n)}function u(n){r(o,i,c,s,u,"throw",n)}s(void 0)})}}e.d(t,{Z:function(){return i}})}},function(n){n.O(0,[959,774,888,179],function(){return n(n.s=437)}),_N_E=n.O()}]);