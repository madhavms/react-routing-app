/*! For license information please see 655.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunknested_routes=self.webpackChunknested_routes||[]).push([[655],{655:function(e,t,n){n.d(t,{VK:function(){return c},rU:function(){return f}});var r=n(497),o=n(250),a=n(599);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const i=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function c(e){let{basename:t,children:n,window:l}=e,i=r.useRef();null==i.current&&(i.current=(0,a.lX)({window:l,v5Compat:!0}));let c=i.current,[s,u]=r.useState({action:c.action,location:c.location});return r.useLayoutEffect((()=>c.listen(u)),[c]),r.createElement(o.F0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:c})}const s="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,u=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f=r.forwardRef((function(e,t){let n,{onClick:c,relative:f,reloadDocument:p,replace:v,state:d,target:h,to:w,preventScrollReset:m}=e,b=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i),{basename:g}=r.useContext(o.Us),R=!1;if("string"==typeof w&&u.test(w)&&(n=w,s)){let e=new URL(window.location.href),t=w.startsWith("//")?new URL(e.protocol+w):new URL(w),n=(0,a.Zn)(t.pathname,g);t.origin===e.origin&&null!=n?w=n+t.search+t.hash:R=!0}let y=(0,o.oQ)(w,{relative:f}),S=function(e,t){let{target:n,replace:l,state:i,preventScrollReset:c,relative:s}=void 0===t?{}:t,u=(0,o.s0)(),f=(0,o.TH)(),p=(0,o.WU)(e,{relative:s});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==l?l:(0,a.Ep)(f)===(0,a.Ep)(p);u(e,{replace:n,state:i,preventScrollReset:c,relative:s})}}),[f,u,p,l,i,n,e,c,s])}(w,{replace:v,state:d,target:h,preventScrollReset:m,relative:f});return r.createElement("a",l({},b,{href:n||y,onClick:R||p?c:function(e){c&&c(e),e.defaultPrevented||S(e)},ref:t,target:h}))}));var p,v;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(p||(p={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(v||(v={}))}}]);