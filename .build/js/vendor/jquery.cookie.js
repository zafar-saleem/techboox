/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function t(e){return u.raw?e:encodeURIComponent(e)}function n(e){return u.raw?e:decodeURIComponent(e)}function r(e){return t(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),u.json?JSON.parse(e):e}catch(t){}}function s(t,n){var r=u.raw?t:i(t);return e.isFunction(n)?n(r):r}var o=/\+/g,u=e.cookie=function(i,o,l){if(void 0!==o&&!e.isFunction(o)){if(l=e.extend({},u.defaults,l),"number"==typeof l.expires){var p=l.expires,v=l.expires=new Date;v.setTime(+v+864e5*p)}return document.cookie=[t(i),"=",r(o),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var m=i?void 0:{},g=document.cookie?document.cookie.split("; "):[],y=0,w=g.length;w>y;y++){var E=g[y].split("="),S=n(E.shift()),x=E.join("=");if(i&&i===S){m=s(x,o);break}i||void 0===(x=s(x))||(m[S]=x)}return m};u.defaults={},e.removeCookie=function(t,n){return void 0===e.cookie(t)?!1:(e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t))}});