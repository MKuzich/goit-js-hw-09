!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i");document.querySelector(".form").addEventListener("submit",(function(){var e=function(e){var n=Number(t.value)+(e-1)*Number(o.value);setTimeout((function(){var t,o,r;(t=e,o=n,r=Math.random()>.3,new Promise((function(e,n){r?e({position:t,delay:o}):n({position:t,delay:o})}))).then((function(e){!function(e,n){i.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))}(e.position,e.delay)})).catch((function(e){!function(e,n){i.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}(e.position,e.delay)}))}),n)};event.preventDefault();for(var n=event.currentTarget.elements,t=n.delay,o=n.step,r=n.amount,a=1;a<=r.value;a+=1)e(a);event.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.95cb3ce5.js.map