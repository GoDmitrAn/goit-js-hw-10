!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e=function(t){fetch("https://restcountries.com/v3.1/name/".concat(t,"?").concat("fields=name,capital,population,flags,languages")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){!function(t){var n="";if(t.length>10)o(),console.log("too many matches");else if(1==t.length){o(),console.log(t);var e=t[0];n='<div> <img src="'.concat(e.flags.svg,'" alt="country flag" style="width:30px;height:15px">\n                                 <h1>').concat(e.name.official,"</h1></div>")}else o(),t.map((function(t){console.log(t);var e='<li><span style="margin-right:20px;display:inlone-block">\n            <img src="'.concat(t.flags.svg,'" alt="country flag" style="width:30px;height:15px"></span><p style="display: inline-block">').concat(t.name.official,"</p></li>");n+=e}));i.insertAdjacentHTML("afterbegin",n)}(t)})).catch((function(t){console.log("Country not found ",t)}))};function o(){i.innerHTML="555555"}var i=document.querySelector(".country-list"),r=(document.querySelector(".country-info"),{}),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var c=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,p=d||v||Function("return this")(),y=Object.prototype.toString,g=Math.max,m=Math.min,h=function(){return p.Date.now()};function b(t){var e=void 0===t?"undefined":n(u)(t);return!!t&&("object"==e||"function"==e)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(u)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var o=f.test(t);return o||l.test(t)?s(t.slice(2),o?2:8):a.test(t)?NaN:+t}r=function(t,n,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function p(t){return f=t,c=setTimeout(w,n),l?v(t):u}function y(t){var e=t-a;return void 0===a||e>=n||e<0||s&&t-f>=r}function w(){var t=h();if(y(t))return x(t);c=setTimeout(w,function(t){var e=n-(t-a);return s?m(e,r-(t-f)):e}(t))}function x(t){return c=void 0,d&&o?v(t):(o=i=void 0,u)}function T(){var t=h(),e=y(t);if(o=arguments,i=this,a=t,e){if(void 0===c)return p(a);if(s)return c=setTimeout(w,n),v(a)}return void 0===c&&(c=setTimeout(w,n)),u}return n=j(n)||0,b(e)&&(l=!!e.leading,r=(s="maxWait"in e)?g(j(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},T.flush=function(){return void 0===c?u:x(h())},T};var w=document.querySelector("#search-box");i.style.listStyle="none",w.addEventListener("input",r((function(t){var n=t.target.value.trim();if(!n)return;e(n)}),300))}();
//# sourceMappingURL=index.3e51ee6b.js.map