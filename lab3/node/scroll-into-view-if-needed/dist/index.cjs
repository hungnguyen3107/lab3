"use strict";var t=require("compute-scroll-into-view");const o=t=>!1===t?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&0!==Object.keys(t).length)(t)?t:{block:"start",inline:"nearest"};module.exports=function(e,r){if(!e.isConnected||!(t=>{let o=t;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;const n=(t=>{const o=window.getComputedStyle(t);return{top:parseFloat(o.scrollMarginTop)||0,right:parseFloat(o.scrollMarginRight)||0,bottom:parseFloat(o.scrollMarginBottom)||0,left:parseFloat(o.scrollMarginLeft)||0}})(e);if((t=>"object"==typeof t&&"function"==typeof t.behavior)(r))return r.behavior(t.compute(e,r));const l="boolean"==typeof r||null==r?void 0:r.behavior;for(const{el:a,top:i,left:c}of t.compute(e,o(r))){const t=i-n.top+n.bottom,o=c-n.left+n.right;a.scroll({top:t,left:o,behavior:l})}};//# sourceMappingURL=index.cjs.map