import{useState as o,useEffect as t}from"react";function n(){var n=o({latitude:null,longitude:null}),i=n[0],e=n[1],l=o(null),r=l[0],a=l[1];return t((function(){console.log("COMING"),"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(o){e({latitude:o.coords.latitude,longitude:o.coords.longitude})}),(function(o){a(o.message)})):(console.log("Geolocation is not available in your browser."),a("Geolocation is not supported by this browser."))}),[]),{position:i,error:r}}export{n as default};
//# sourceMappingURL=index.mjs.map
