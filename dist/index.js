"use strict";var o=require("react");module.exports=function(){var t=o.useState({latitude:null,longitude:null}),e=t[0],n=t[1],i=o.useState(null),r=i[0],l=i[1];return o.useEffect((function(){console.log("COMING"),"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(o){n({latitude:o.coords.latitude,longitude:o.coords.longitude})}),(function(o){l(o.message)})):(console.log("Geolocation is not available in your browser."),l("Geolocation is not supported by this browser."))}),[]),{position:e,error:r}};
//# sourceMappingURL=index.js.map
