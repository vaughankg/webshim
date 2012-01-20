(function(c){if(!Modernizr.genericDOM){var f=document,k,h,n=/<([\w:]+)/,q={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};c.webshims.fixHTML5=function(c){if("string"!=typeof c||q[(n.exec(c)||["",""])[1].toLowerCase()])return c;if(!h){k=f.body;if(!k)return c;h=f.createElement("div");h.style.display="none"}var o=h.cloneNode(!1);k.appendChild(o);o.innerHTML=c;k.removeChild(o);return o.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(c,f,k,h,n){var q=f.modules,x=/\s*,\s*/,o={},t={},p={},l={},u={},s=c.fn.val,y=function(b,a,e,g,r){return r?s.call(c(b)):s.call(c(b),e)};c.fn.val=function(b){var a=this[0];arguments.length&&null==b&&(b="");if(!arguments.length)return!a||1!==a.nodeType?s.call(this):c.prop(a,"value",b,"val",!0);if(c.isArray(b))return s.apply(this,arguments);var e=c.isFunction(b);return this.each(function(g){a=this;1===a.nodeType&&(e?(g=b.call(a,g,c.prop(a,"value",n,"val",
!0)),null==g&&(g=""),c.prop(a,"value",g,"val")):c.prop(a,"value",b,"val"))})};var w="_webshimsLib"+Math.round(1E3*Math.random()),v=function(b,a,e){b=b.jquery?b[0]:b;if(!b)return e||{};var g=c.data(b,w);e!==n&&(g||(g=c.data(b,w,{})),a&&(g[a]=e));return a?g&&g[a]:g};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){c.fn[b.name]=function(){return this.map(function(){var a=v(this,
"shadowData");return a&&a[b.prop]||this})}});["removeAttr","prop","attr"].forEach(function(b){o[b]=c[b];c[b]=function(a,e,g,r,d){var j="val"==r,f=!j?o[b]:y;if(!a||!t[e]||1!==a.nodeType||!j&&r&&"attr"==b&&c.attrFn[e])return f(a,e,g,r,d);var z=(a.nodeName||"").toLowerCase(),q=p[z],m="attr"==b&&(!1===g||null===g)?"removeAttr":b,i,h,l;q||(q=p["*"]);q&&(q=q[e]);q&&(i=q[m]);if(i){if("value"==e)h=i.isVal,i.isVal=j;if("removeAttr"===m)return i.value.call(a);if(g===n)return i.get?i.get.call(a):i.value;i.set&&
("attr"==b&&!0===g&&(g=e),l=i.set.call(a,g));if("value"==e)i.isVal=h}else l=f(a,e,g,r,d);if((g!==n||"removeAttr"===m)&&u[z]&&u[z][e]){var k;k="removeAttr"==m?!1:"prop"==m?!!g:!0;u[z][e].forEach(function(e){if(!e.only||(e.only="prop"==b)||"attr"==e.only&&"prop"!=b)e.call(a,g,k,j?"val":m,b)})}return l};l[b]=function(a,e,g){p[a]||(p[a]={});p[a][e]||(p[a][e]={});var r=p[a][e][b],d=function(a,c,r){return c&&c[a]?c[a]:r&&r[a]?r[a]:"prop"==b&&"value"==e?function(a){return g.isVal?y(this,e,a,!1,0===arguments.length):
o[b](this,e,a)}:"prop"==b&&"value"==a&&g.value.apply?function(a){var c=o[b](this,e);c&&c.apply&&(c=c.apply(this,arguments));return c}:function(a){return o[b](this,e,a)}};p[a][e][b]=g;if(g.value===n){if(!g.set)g.set=g.writeable?d("set",g,r):f.cfg.useStrict&&"prop"==e?function(){throw e+" is readonly on "+a;}:c.noop;if(!g.get)g.get=d("get",g,r)}["value","get","set"].forEach(function(a){g[a]&&(g["_sup"+a]=d(a,r))})}});var d=!c.browser.msie||8<parseInt(c.browser.version,10),m=function(){var b=f.getPrototypeOf(h.createElement("foobar")),
a=Object.prototype.hasOwnProperty;return function(e,c,r){var q=h.createElement(e),m=f.getPrototypeOf(q);if(d&&m&&b!==m&&(!q[c]||!a.call(q,c))){var i=q[c];r._supvalue=function(){return i&&i.apply?i.apply(this,arguments):i};m[c]=r.value}else r._supvalue=function(){var a=v(this,"propValue");return a&&a[c]&&a[c].apply?a[c].apply(this,arguments):a&&a[c]},j.extendValue(e,c,r.value);r.value._supvalue=r._supvalue}}(),j=function(){var b={};f.addReady(function(a,e){var g={},d=function(b){g[b]||(g[b]=c(a.getElementsByTagName(b)),
e[0]&&c.nodeName(e[0],b)&&(g[b]=g[b].add(e)))};c.each(b,function(a,b){d(a);!b||!b.forEach?f.warn("Error: with "+a+"-property. methods: "+b):b.forEach(function(b){g[a].each(b)})});g=null});var a,e=c([]),g=function(e,g){b[e]?b[e].push(g):b[e]=[g];c.isDOMReady&&(a||c(h.getElementsByTagName(e))).each(g)};return{createTmpCache:function(b){c.isDOMReady&&(a=a||c(h.getElementsByTagName(b)));return a||e},flushTmpCache:function(){a=null},content:function(a,b){g(a,function(){var a=c.attr(this,b);null!=a&&c.attr(this,
b,a)})},createElement:function(a,b){g(a,b)},extendValue:function(a,b,e){g(a,function(){c(this).each(function(){v(this,"propValue",{})[b]=this[b];this[b]=e})})}}}(),i=function(b,a){if(b.defaultValue===n)b.defaultValue="";if(!b.removeAttr)b.removeAttr={value:function(){b[a||"prop"].set.call(this,b.defaultValue);b.removeAttr._supvalue.call(this)}}};c.extend(f,{getID:function(){var b=(new Date).getTime();return function(a){var a=c(a),e=a.attr("id");e||(b++,e="ID-"+b,a.attr("id",e));return e}}(),extendUNDEFProp:function(b,
a){c.each(a,function(a,c){a in b||(b[a]=c)})},createPropDefault:i,data:v,moveToFirstEvent:function(){var b=c._data?"_data":"data";return function(a,e,g){if((a=(c[b](a,"events")||{})[e])&&1<a.length)e=a.pop(),g||(g="bind"),"bind"==g&&a.delegateCount?a.splice(a.delegateCount,0,e):a.unshift(e)}}(),addShadowDom:function(b,a,e){e=e||{};b.jquery&&(b=b[0]);a.jquery&&(a=a[0]);if(!e.shadowFocusElement)e.shadowFocusElement=a;var g=c.data(b,w)||c.data(b,w,{}),d=c.data(a,w)||c.data(a,w,{});g.hasShadow=a;d.nativeElement=
b;d.shadowData=g.shadowData={nativeElement:b,shadowElement:a,shadowFocusElement:e.shadowFocusElement};e.shadowChilds&&e.shadowChilds.each(function(){v(this,"shadowData",d.shadowData)});if(e.data)g.shadowData.data=e.data,d.shadowData.data=e.data;e=null},propTypes:{standard:function(b){i(b);if(!b.prop)b.prop={set:function(a){b.attr.set.call(this,""+a)},get:function(){return b.attr.get.call(this)||b.defaultValue}}},"boolean":function(b){i(b);if(!b.prop)b.prop={set:function(a){a?b.attr.set.call(this,
""):b.removeAttr.value.call(this)},get:function(){return null!=b.attr.get.call(this)}}}},reflectProperties:function(b,a){"string"==typeof a&&(a=a.split(x));a.forEach(function(a){f.defineNodeNamesProperty(b,a,{prop:{set:function(b){c.attr(this,a,b)},get:function(){return c.attr(this,a)||""}}})})},defineNodeNameProperty:function(b,a,e){t[a]=!0;if(e.reflect)f.propTypes[e.propType||"standard"](e);["prop","attr","removeAttr"].forEach(function(g){var d=e[g];d&&(d="prop"===g?c.extend({writeable:!0},d):c.extend({},
d,{writeable:!0}),l[g](b,a,d),"*"!=b&&f.cfg.extendNative&&"prop"==g&&d.value&&c.isFunction(d.value)&&m(b,a,d),e[g]=d)});e.initAttr&&j.content(b,a);return e},defineNodeNameProperties:function(b,a,e,c){for(var d in a)!c&&a[d].initAttr&&j.createTmpCache(b),e&&(a[d][e]?f.log("override: "+b+"["+d+"] for "+e):(a[d][e]={},["value","set","get"].forEach(function(b){b in a[d]&&(a[d][e][b]=a[d][b],delete a[d][b])}))),a[d]=f.defineNodeNameProperty(b,d,a[d]);c||j.flushTmpCache();return a},createElement:function(b,
a,e){var g;c.isFunction(a)&&(a={after:a});j.createTmpCache(b);a.before&&j.createElement(b,a.before);e&&(g=f.defineNodeNameProperties(b,e,!1,!0));a.after&&j.createElement(b,a.after);j.flushTmpCache();return g},onNodeNamesPropertyModify:function(b,a,e,g){"string"==typeof b&&(b=b.split(x));c.isFunction(e)&&(e={set:e});b.forEach(function(b){u[b]||(u[b]={});"string"==typeof a&&(a=a.split(x));e.initAttr&&j.createTmpCache(b);a.forEach(function(a){u[b][a]||(u[b][a]=[],t[a]=!0);if(e.set){if(g)e.set.only=g;
u[b][a].push(e.set)}e.initAttr&&j.content(b,a)});j.flushTmpCache()})},defineNodeNamesBooleanProperty:function(b,a,e){e||(e={});if(c.isFunction(e))e.set=e;f.defineNodeNamesProperty(b,a,{attr:{set:function(b){this.setAttribute(a,b);e.set&&e.set.call(this,!0)},get:function(){return null==this.getAttribute(a)?n:a}},removeAttr:{value:function(){this.removeAttribute(a);e.set&&e.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:e.initAttr||!1})},contentAttr:function(b,a,e){if(b.nodeName){if(e===
n)return e=(b.attributes[a]||{}).value,null==e?n:e;"boolean"==typeof e?e?b.setAttribute(a,a):b.removeAttribute(a):b.setAttribute(a,e)}},activeLang:function(){var b=[],a={},e,g,d=/:\/\/|^\.*\//,j=function(a,b,e){return b&&e&&-1!==c.inArray(b,e.availabeLangs||[])?(a.loading=!0,e=e.langSrc,d.test(e)||(e=f.cfg.basePath+e),f.loader.loadScript(e+b+".js",function(){a.langObj[b]?(a.loading=!1,i(a,!0)):c(function(){a.langObj[b]&&i(a,!0);a.loading=!1})}),!0):!1},m=function(b){a[b]&&a[b].forEach(function(a){a.callback()})},
i=function(a,b){if(a.activeLang!=e&&a.activeLang!==g){var c=q[a.module].options;if(a.langObj[e]||g&&a.langObj[g])a.activeLang=e,a.callback(a.langObj[e]||a.langObj[g],e),m(a.module);else if(!b&&!j(a,e,c)&&!j(a,g,c)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],e),m(a.module)}};return function(d){if("string"==typeof d&&d!==e)e=d,g=e.split("-")[0],e==g&&(g=!1),c.each(b,function(a,b){i(b)});else if("object"==typeof d)if(d.register)a[d.register]||(a[d.register]=[]),a[d.register].push(d),
d.callback();else{if(!d.activeLang)d.activeLang="";b.push(d);i(d)}return e}}()});c.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(b,a){f[b]=function(b,c,d,j){"string"==typeof b&&(b=b.split(x));var i={};b.forEach(function(b){i[b]=f[a](b,c,d,j)});return i}});f.isReady("webshimLocalization",!0)});
(function(c,f){var k=c.webshims.browserVersion;if(!(c.browser.mozilla&&5<k)&&(!c.browser.msie||12>k&&7<k)){var h={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(c,f){c.getAttribute("role")||c.setAttribute("role",f)};c.webshims.addReady(function(q,k){c.each(h,function(f,h){for(var t=c(f,q).add(k.filter(f)),p=0,o=t.length;p<o;p++)n(t[p],h)});if(q===f){var o=f.getElementsByTagName("header")[0],t=f.getElementsByTagName("footer"),p=t.length;
o&&!c(o).closest("section, article")[0]&&n(o,"banner");p&&(o=t[p-1],c(o).closest("section, article")[0]||n(o,"contentinfo"))}})}})(jQuery,document);
(function(c,f,k){var h=f.audio&&f.video,n=!1;if(h)c=document.createElement("video"),f.videoBuffered="buffered"in c,n="loop"in c,k.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),f.videoBuffered||(k.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:f.videoBuffered,d:["dom-support"]}),k.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(c,f,k,t,p){var l=f.mediaelement,u=f.cfg.mediaelement,
s=function(b,a){var b=c(b),e={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!e.src)return e;var d=b.attr("type");if(d)e.type=d,e.container=c.trim(d.split(";")[0]);else if(a||(a=b[0].nodeName.toLowerCase(),"source"==a&&(a=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),d=l.getTypeForSrc(e.src,a))e.type=d,e.container=d,f.warn("you should always provide a proper mime-type using the source element. "+e.src+" detected as: "+d),c.nodeName(b[0],"source")&&b.attr("type",
d);if(d=b.attr("media"))e.media=d;return e},y=swfobject.hasFlashPlayerVersion("9.0.115"),w=function(){f.ready("mediaelement-swf",function(){if(!l.createSWF)f.modules["mediaelement-swf"].test=c.noop,f.reTest(["mediaelement-swf"],h)})};l.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8",
"m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};l.mimeTypes.source=c.extend({},l.mimeTypes.audio,l.mimeTypes.video);l.getTypeForSrc=function(b,a){if(-1!=b.indexOf("youtube.com/watch?"))return"video/youtube";var b=
b.split("?")[0].split("."),b=b[b.length-1],e;c.each(l.mimeTypes[a],function(a,c){if(-1!==c.indexOf(b))return e=a,!1});return e};l.srces=function(b,a){b=c(b);if(a)b.removeAttr("src").removeAttr("type").find("source").remove(),c.isArray(a)||(a=[a]),a.forEach(function(a){var c=t.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var a=[],e=b[0].nodeName.toLowerCase(),d=s(b,
e);d.src?a.push(d):c("source",b).each(function(){d=s(this,e);d.src&&a.push(d)});return a}};c.fn.loadMediaSrc=function(b,a){return this.each(function(){a!==p&&(c(this).removeAttr("poster"),a&&c.attr(this,"poster",a));l.srces(this,b);c(this).mediaLoad()})};l.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");
l.canSwfPlaySrces=function(b,a){var e="";y&&(b=c(b),a=a||l.srces(b),c.each(a,function(a,b){if(b.container&&b.src&&-1!=l.swfMimeTypes.indexOf(b.container))return e=b,!1}));return e};var v={};l.canNativePlaySrces=function(b,a){var e="";if(h){var b=c(b),d=(b[0].nodeName||"").toLowerCase();if(!v[d])return e;a=a||l.srces(b);c.each(a,function(a,c){if(c.type&&v[d].prop._supvalue.call(b[0],c.type))return e=c,!1})}return e};l.setError=function(b,a){a||(a="can't play sources");c(b).pause().data("mediaerror",
a);f.warn("mediaelementError: "+a);setTimeout(function(){c(b).data("mediaerror")&&c(b).trigger("mediaerror")},1)};var d=function(){var b;return function(a,c,g){f.ready("mediaelement-swf",function(){l.createSWF?l.createSWF(a,c,g):b||(b=!0,w(),d(a,c,g))})}}(),m=function(b,a,c,g,f){c||!1!==c&&a&&"flash"==a.isActive?(c=l.canSwfPlaySrces(b,g))?d(b,c,a):f?l.setError(b,!1):m(b,a,!1,g,!0):(c=l.canNativePlaySrces(b,g))?a&&"flash"==a.isActive&&l.setActive(b,"html5",a):f?(l.setError(b,!1),a&&"flash"==a.isActive&&
l.setActive(b,"html5",a)):m(b,a,!0,g,!0)},j=/^(?:embed|object)$/i,i=function(b,a){var e=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{}),d=l.srces(b),i=b.parentNode;clearTimeout(e.loadTimer);c.data(b,"mediaerror",!1);if(d.length&&i&&!j.test(i.nodeName||""))a=a||f.data(b,"mediaelement"),m(b,a,u.preferFlash||p,d)};c(t).bind("ended",function(b){var a=f.data(b.target,"mediaelement");(!n||a&&"html5"!=a.isActive||c.prop(b.target,"loop"))&&setTimeout(function(){!c.prop(b.target,"paused")&&c.prop(b.target,
"loop")&&c(b.target).prop("currentTime",0).play()},1)});n||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(b){var a=f.defineNodeNameProperty(b,"load",{prop:{value:function(){var b=f.data(this,"mediaelement");i(this,b);h&&(!b||"html5"==b.isActive)&&a.prop._supvalue&&a.prop._supvalue.apply(this,arguments)}}});v[b]=f.defineNodeNameProperty(b,"canPlayType",{prop:{value:function(a){var d="";h&&v[b].prop._supvalue&&(d=v[b].prop._supvalue.call(this,a),"no"==
d&&(d=""));!d&&y&&(a=c.trim((a||"").split(";")[0]),-1!=l.swfMimeTypes.indexOf(a)&&(d="maybe"));return d}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var b=this,a=f.data(b,"mediaelementBase")||f.data(b,"mediaelementBase",{});clearTimeout(a.loadTimer);a.loadTimer=setTimeout(function(){i(b);b=null},9)}});h&&f.isReady("mediaelement-core",!0);f.addReady(function(b,a){c("video, audio",b).add(a.filter("video, audio")).each(function(){c.browser.msie&&8<f.browserVersion&&
c.prop(this,"paused")&&!c.prop(this,"readyState")&&c(this).is('audio[preload="none"][controls]:not([autoplay])')?c(this).prop("preload","metadata").mediaLoad():i(this);if(h){var a,b,d=this,j=function(){var a=c.prop(d,"buffered");if(a){for(var b="",e=0,g=a.length;e<g;e++)b+=a.end(e);return b}},m=function(){var a=j();a!=b&&(b=a,c(d).triggerHandler("progress"))};c(this).bind("play loadstart progress",function(c){"progress"==c.type&&(b=j());clearTimeout(a);a=setTimeout(m,999)}).bind("emptied stalled mediaerror abort suspend",
function(c){"emptied"==c.type&&(b=!1);clearTimeout(a)})}})});h&&y&&f.ready("WINDOWLOAD mediaelement",w)})})(jQuery,Modernizr,jQuery.webshims);jQuery.webshims.gcEval=function(c,f){with(f&&f.form||window)with(f||window)return function(c){eval(c)}.call(f||window,c)};
(function(c){var f=window.Modernizr,k=c.webshims;k.capturingEventPrevented=function(f){if(!f._isPolyfilled){var h=f.isDefaultPrevented,k=f.preventDefault;f.preventDefault=function(){clearTimeout(c.data(f.target,f.type+"DefaultPrevented"));c.data(f.target,f.type+"DefaultPrevented",setTimeout(function(){c.removeData(f.target,f.type+"DefaultPrevented")},30));return k.apply(this,arguments)};f.isDefaultPrevented=function(){return!(!h.apply(this,arguments)&&!c.data(f.target,f.type+"DefaultPrevented"))};
f._isPolyfilled=!0}};if(f.formvalidation){var h=c('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select /><input type="date" required name="a" /><input type="submit" /></form>');f.bugfreeformvalidation=f.requiredSelect=!!("required"in c("select",h)[0]);if(window.opera||c.browser.webkit||window.testGoodWithFix){var n=c("input",h).eq(0),q,x=function(o){var p=["form-extend","form-native-fix"];o&&(o.preventDefault(),o.stopImmediatePropagation());clearTimeout(q);setTimeout(function(){h&&
(h.remove(),h=n=null)},9);if(!f.bugfreeformvalidation||!f.requiredSelect)k.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),k.modules["form-extend"].test=c.noop;k.isReady("form-number-date-api")&&p.push("form-number-date-api");k.bugs.validationMessage&&p.push("form-message");k.reTest(p);if(c.browser.opera||window.testGoodWithFix)k.loader.loadList(["dom-extend"]),k.ready("dom-extend",function(){var h=function(c){c.preventDefault()};["form","input","textarea","select"].forEach(function(f){var n=
k.defineNodeNameProperty(f,"checkValidity",{prop:{value:function(){k.fromSubmit||c(this).bind("invalid.checkvalidity",h);k.fromCheckValidity=!0;var f=n.prop._supvalue.apply(this,arguments);k.fromSubmit||c(this).unbind("invalid.checkvalidity",h);k.fromCheckValidity=!1;return f}}})});f.input.list&&!(c("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&k.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var f=this.options||[];if(!f.length){var h=
c("select",this);if(h[0]&&h[0].options&&h[0].options.length)f=h[0].options}return f}}})})};h.appendTo("head");if(window.opera||window.testGoodWithFix){k.bugs.validationMessage=!n.prop("validationMessage");if((f.inputtypes||{}).date){try{n.prop("valueAsNumber",0)}catch(o){}k.bugs.valueAsNumberSet="1970-01-01"!=n.prop("value")}n.prop("value","")}h.bind("submit",function(c){f.bugfreeformvalidation=!1;x(c)});q=setTimeout(function(){h&&h.triggerHandler("submit")},9);k.capturingEvents(["input"]);k.capturingEvents(["invalid"],
!0);c("input, select",h).bind("invalid",x).filter('[type="submit"]').bind("click",function(c){c.stopImmediatePropagation()}).trigger("click")}else k.capturingEvents(["input"]),k.capturingEvents(["invalid"],!0)}})(jQuery);
jQuery.webshims.register("form-core",function(c,f,k,h,n,q){var x={radio:1},o={checkbox:1,radio:1},t=c([]),p=function(d){var d=c(d),f=d[0].name;return x[d[0].type]&&f?c(d[0].form&&d[0].form[f]||h.getElementsByName(f)).not(d[0]):t},l=f.getContentValidationMessage=function(d,m){var j=d.getAttribute("x-moz-errormessage")||d.getAttribute("data-errormessage")||"";if(j&&-1!=j.indexOf("{")){try{j=jQuery.parseJSON(j)}catch(i){return j}"object"==typeof j&&(m=m||c.prop(d,"validity")||{valid:1},m.valid||c.each(m,
function(b,a){if(a&&"valid"!=b&&j[b])return j=j[b],!1}));f.data(d,"contentErrorMessage",j);if("object"==typeof j)j=j.defaultMessage}return j||""},u={number:1,range:1,date:1,time:1,"datetime-local":1,datetime:1,month:1,week:1};c.extend(c.expr.filters,{"valid-element":function(d){return!(!c.prop(d,"willValidate")||!(c.prop(d,"validity")||{valid:1}).valid)},"invalid-element":function(d){return!(!c.prop(d,"willValidate")||(c.prop(d,"validity")||{valid:1}).valid)},"required-element":function(d){return!(!c.prop(d,
"willValidate")||!c.prop(d,"required"))},"optional-element":function(d){return!!(c.prop(d,"willValidate")&&!1===c.prop(d,"required"))},"in-range":function(d){if(!u[c.prop(d,"type")]||!c.prop(d,"willValidate"))return!1;d=c.prop(d,"validity");return!(!d||d.rangeOverflow||d.rangeUnderflow)},"out-of-range":function(d){if(!u[c.prop(d,"type")]||!c.prop(d,"willValidate"))return!1;d=c.prop(d,"validity");return!(!d||!d.rangeOverflow&&!d.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(d){c.expr.filters[d]=
c.expr.filters[d+"-element"]});var s=c.event.customEvent||{},y=c.prop,w={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};c.prop=function(d,f,j){var i=y.apply(this,arguments);if(d&&"form"in d&&w[f]&&j!==n&&c(d).hasClass("form-ui-invalid")&&(c.prop(d,"validity")||{valid:1}).valid)c(d).getShadowElement().removeClass("form-ui-invalid"),"checked"==f&&j&&p(d).removeClass("form-ui-invalid").removeAttr("aria-invalid");return i};var v=function(d,f){var j;c.each(d,function(d,b){if(b)return j="customError"==
d?c.prop(f,"validationMessage"):d,!1});return j};c(h).bind("focusout change refreshvalidityui",function(d){if(d.target&&"submit"!=d.target.type&&c.prop(d.target,"willValidate")){var f=c.data(d.target,"webshimsswitchvalidityclass");f&&clearTimeout(f);c.data(d.target,"webshimsswitchvalidityclass",setTimeout(function(){var f=c(d.target).getNativeElement()[0],i=c.prop(f,"validity"),b=c(f).getShadowElement(),a,e,g,h;i.valid?b.hasClass("form-ui-valid")||(a="form-ui-valid",e="form-ui-invalid",h="changedvaliditystate",
g="changedvalid",o[f.type]&&f.checked&&p(f).removeClass(e).addClass(a).removeAttr("aria-invalid"),c.removeData(f,"webshimsinvalidcause")):(i=v(i,f),c.data(f,"webshimsinvalidcause")!=i&&(c.data(f,"webshimsinvalidcause",i),h="changedvaliditystate"),b.hasClass("form-ui-invalid")||(a="form-ui-invalid",e="form-ui-valid",o[f.type]&&!f.checked&&p(f).removeClass(e).addClass(a),g="changedinvalid"));a&&(b.addClass(a).removeClass(e),setTimeout(function(){c(f).trigger(g)},0));h&&setTimeout(function(){c(f).trigger(h)},
0);c.removeData(d.target,"webshimsswitchvalidityclass")},9))}});s.changedvaliditystate=!0;s.changedvalid=!0;s.changedinvalid=!0;s.refreshvalidityui=!0;f.triggerInlineForm=function(d,h){d.jquery&&(d=d[0]);var j="on"+h,i=d[j]||d.getAttribute(j)||"",b,a,h=c.Event({type:h,target:d,currentTarget:d});i&&(f.warn(j+" used. we will drop inline event handler support, with next release. use event binding: $.bind instead"),"string"==typeof i&&(a=f.gcEval(i,d),d[j]&&(b=!0,d[j]=!1)));!1===a&&(h.stopPropagation(),
h.preventDefault());c(d).trigger(h);b&&(d[j]=i);return a};s=function(){f.scrollRoot=c.browser.webkit||"BackCompat"==h.compatMode?c(h.body):c(h.documentElement)};s();f.ready("DOM",s);f.getRelOffset=function(d,f){var d=c(d),h=c(f).offset(),i;c.swap(c(d)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=d.offset()});h.top-=i.top;h.left-=i.left;return h};f.validityAlert=function(){var d=!c.browser.msie||7<parseInt(c.browser.version,10)?"span":"label",m,j=!1,i=!1,b,a={hideDelay:5E3,
showFor:function(e,d,f,h){a._create();var e=c(e),l=c(e).getShadowElement(),n=a.getOffsetFromBody(l);a.clear();h?this.hide():(this.getMessage(e,d),this.position(l,n),m.css({fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily")}),this.show(),this.hideDelay&&(j=setTimeout(b,this.hideDelay)),c(k).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(i);i=setTimeout(function(){a.position(l)},9)}));f||this.setFocus(l,n)},getOffsetFromBody:function(a){return f.getRelOffset(m,
a)},setFocus:function(a,g){var i=c(a).getShadowFocusElement(),j=f.scrollRoot.scrollTop(),k=(g||i.offset()).top-30,l;f.getID&&"label"==d&&m.attr("for",f.getID(i));j>k&&(f.scrollRoot.animate({scrollTop:k-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(j-k)),80)}),l=!0);try{i[0].focus()}catch(n){}l&&(f.scrollRoot.scrollTop(j),setTimeout(function(){f.scrollRoot.scrollTop(j)},0));setTimeout(function(){c(h).bind("focusout.validityalert",b)},10)},getMessage:function(a,b){c("span.va-box",m).text(b||l(a[0])||
a.prop("validationMessage"))},position:function(b,d){d=d?c.extend({},d):a.getOffsetFromBody(b);d.top+=b.outerHeight();m.css(d)},show:function(){"none"===m.css("display")&&m.css({opacity:0}).show();m.addClass("va-visible").fadeTo(400,1)},hide:function(){m.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(j);c(h).unbind(".validityalert");c(k).unbind(".validityalert");m.stop().removeAttr("for")},_create:function(){if(!m)m=a.errorBubble=c("<"+d+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
d+">").css({position:"absolute",display:"none"}),f.ready("DOM",function(){m.appendTo("body");c.fn.bgIframe&&c.browser.msie&&7>parseInt(c.browser.version,10)&&m.bgIframe()})}};b=c.proxy(a,"hide");return a}();(function(){var d,f=[],j;c(h).bind("invalid",function(i){if(!i.wrongWebkitInvalid){var b=c(i.target),a=b.getShadowElement();a.hasClass("form-ui-invalid")||(a.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){c(i.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!d)d=c.Event("firstinvalid"),d.isInvalidUIPrevented=i.isDefaultPrevented,a=c.Event("firstinvalidsystem"),c(h).triggerHandler(a,{element:i.target,form:i.target.form,isInvalidUIPrevented:i.isDefaultPrevented}),b.trigger(d);d&&d.isDefaultPrevented()&&i.preventDefault();f.push(i.target);i.extraData="fix";clearTimeout(j);j=setTimeout(function(){var a={type:"lastinvalid",cancelable:!1,invalidlist:c(f)};d=!1;f=[];c(i.target).trigger(a,a)},9);a=b=null}})})();q.replaceValidationUI&&f.ready("DOM",function(){c(h).bind("firstinvalid",
function(d){d.isInvalidUIPrevented()||(d.preventDefault(),c.webshims.validityAlert.showFor(d.target,c(d.target).prop("customValidationMessage")))})})});
