var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{n?r({position:e,delay:t}):o({position:e,delay:t})}))}function u(e,t){return o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)}function l(e,t){return o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}document.querySelector(".form").addEventListener("submit",(function(){event.preventDefault();const{elements:{delay:e,step:t,amount:n}}=event.currentTarget;for(let r=1;r<=n.value;r+=1){const n=Number(e.value)+(r-1)*Number(t.value);setTimeout((()=>{i(r,n).then((({position:e,delay:t})=>{u(e,t)})).catch((({position:e,delay:t})=>{l(e,t)}))}),n)}event.currentTarget.reset()}));
//# sourceMappingURL=03-promises.ed7d4920.js.map
