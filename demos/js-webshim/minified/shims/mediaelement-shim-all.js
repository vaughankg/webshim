jQuery.webshims.ready("dom-support",function(e,f,p,r){var l=r.createElement("a");["poster","src"].forEach(function(n){f.defineNodeNamesProperty(n=="src"?["audio","video","source"]:["video"],n,{prop:{get:function(){var g=this.getAttribute(n);if(g==null)return"";l.setAttribute("href",g+"");return!e.support.hrefNormalized?l.getAttribute("href",4):l.href},set:function(g){e.attr(this,n,g)}}})});["autoplay","controls"].forEach(function(e){f.defineNodeNamesBooleanProperty(["audio","video"],e)});f.defineNodeNamesProperties(["audio",
"video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop")});
jQuery.webshims.register("mediaelement-swf",function(e,f,p,r,l,n){var g=f.mediaelement,D=p.swfobject,A=Modernizr.audio&&Modernizr.video,E=D.hasFlashPlayerVersion("9.0.115"),x={paused:!0,ended:!1,currentSrc:"",duration:p.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(a){if(a)f.error("buffered index size error");else return 0},end:function(a){if(a)f.error("buffered index size error");else return 0},length:0}},h=Object.keys(x),z={currentTime:0,volume:1,
muted:!1};Object.keys(z);var y=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_callMeta:!1,currentTime:0,_ppFlag:l},x,z),u=/^jwplayer-/,o=function(a){if(a=r.getElementById(a.replace(u,"")))return a=f.data(a,"mediaelement"),a.isActive=="flash"?a:null},m=function(a){return(a=f.data(a,"mediaelement"))&&a.isActive=="flash"?a:null},j=function(a,b){b=e.Event(b);b.preventDefault();e.event.trigger(b,l,a)},t,B=f.cfg.basePath+"jwplayer/player.swf",
v=f.cfg.basePath+"swf/jwwebshims.swf";f.extendUNDEFProp(n.jwParams,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"});f.extendUNDEFProp(n.jwVars,{screencolor:"ffffffff"});f.extendUNDEFProp(n.jwAttrs,{bgcolor:"#000000"});g.jwEvents={View:{PLAY:function(a){var b=o(a.id);if(b&&!b.stopPlayPause&&(b._ppFlag=!0,b.paused==a.state)){b.paused=!a.state;if(b.ended)b.ended=!1;j(b._elem,a.state?"play":"pause")}}},Model:{BUFFER:function(a){var b=o(a.id);if(b&&b._bufferedEnd!=a.percentage){b.networkState=
a.percentage==100?1:2;if(!b.duration){try{if(b.duration=b.jwapi.getPlaylist()[0].duration,b.duration<=0)b.duration=p.NaN}catch(c){}b.duration&&(j(b._elem,"durationchange"),(b._elemNodeName=="audio"||b._callMeta)&&this.META(e.extend({duration:b.duration},a),b))}if(b.ended)b.ended=!1;if(b.duration){if(a.percentage>1&&b.readyState<3)b.readyState=3,j(b._elem,"canplay");if(b._bufferedEnd&&b._bufferedEnd>a.percentage)b._bufferedStart=b.currentTime||0;b._bufferedEnd=a.percentage;b.buffered.length=1;if(a.percentage==
100)b.networkState=1,b.readyState=4;e.event.trigger("progress",l,b._elem,!0)}}},META:function(a,b){b=b&&b.networkState?b:o(a.id);if("duration"in a){if(b&&!b._metadata){b._metadata=!0;var c=b.duration;b.duration=a.duration;b.videoHeight=a.height||0;b.videoWidth=a.width||0;if(!b.networkState)b.networkState=2;if(b.readyState<1)b.readyState=1;c!==b.duration&&j(b._elem,"durationchange");j(b._elem,"loadedmetadata")}}else b._callMeta=!0},TIME:function(a){var b=o(a.id);if(b&&b.currentTime!==a.position){b.currentTime=
a.position;if(b.readyState<2)b.readyState=2;if(b.ended)b.ended=!1;j(b._elem,"timeupdate")}},STATE:function(a){var b=o(a.id);if(b)switch(a.newstate){case "BUFFERING":if(b.readyState>1)b.readyState=1;if(b.ended)b.ended=!1;j(b._elem,"waiting");break;case "PLAYING":b.paused=!1;b._ppFlag=!0;if(b.readyState<3)b.readyState=3,j(b._elem,"canplay");if(b.ended)b.ended=!1;j(b._elem,"playing");break;case "PAUSED":if(!b.paused&&!b.stopPlayPause)b.paused=!0,b._ppFlag=!0,j(b._elem,"pause");break;case "COMPLETED":if(b.readyState<
4)b.readyState=4;b.ended=!0;j(b._elem,"ended")}}},Controller:{ERROR:function(a){var b=o(a.id);b&&g.setError(b._elem,a.message)},SEEK:function(a){var b=o(a.id);if(b){if(b.ended)b.ended=!1;if(b.paused)try{b.jwapi.sendEvent("play","false")}catch(c){}if(b.currentTime!=a.position)b.currentTime=a.position,j(b._elem,"timeupdate")}},VOLUME:function(a){var b=o(a.id);if(b&&(a=a.percentage/100,b.volume!=a))b.volume=a,j(b._elem,"volumechange")},MUTE:function(a){if(!t||!a.state){var b=o(a.id);if(b&&b.muted!=a.state)b.muted=
a.state,j(b._elem,"volumechange")}}}};var c=function(a){e.each(g.jwEvents,function(b,c){e.each(c,function(c){a.jwapi["add"+b+"Listener"](c,"jQuery.webshims.mediaelement.jwEvents."+b+"."+c)})})},d=function(a){a&&(a._ppFlag===l&&e.prop(a._elem,"autoplay")||!a.paused)&&setTimeout(function(){if(a.isActive=="flash"&&(a._ppFlag===l||!a.paused))try{e(a._elem).play()}catch(b){}},1)},k=function(a){if(a&&a._elemNodeName=="video"){var b,c,d,k={},q,s,i,g=function(g,f){if(f&&g&&!(f<1||g<1||a.isActive!="flash"))if(b&&
(b.remove(),b=!1),k.width=g,k.height=f,clearTimeout(s),c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d){q=q||e(a._elem).getShadowElement();var h;c&&!d?(h=q.height(),g*=h/f,f=h):!c&&d&&(h=q.width(),f*=h/g,g=h);i=!0;setTimeout(function(){i=!1},9);q.css({width:g,height:f})}},f=function(){if(!(a.isActive!="flash"||e.prop(a._elem,"readyState")&&e.prop(this,"videoWidth"))){var q=e.prop(a._elem,"poster");if(q&&(c=a._elem.style.width=="auto",d=a._elem.style.height=="auto",c||d))b&&(b.remove(),
b=!1),b=e('<img style="position: absolute; height: auto; width: auto; top: 0px; left: 0px; visibility: hidden;" />'),b.bind("load error alreadycomplete",function(){clearTimeout(s);var a=this,c=a.naturalWidth||a.width||a.offsetWidth,d=a.naturalHeight||a.height||a.offsetHeight;d&&c?(g(c,d),a=null):setTimeout(function(){c=a.naturalWidth||a.width||a.offsetWidth;d=a.naturalHeight||a.height||a.offsetHeight;g(c,d);b&&(b.remove(),b=!1);a=null},9);e(this).unbind()}).prop("src",q).appendTo("body").each(function(){this.complete||
this.error?e(this).triggerHandler("alreadycomplete"):(clearTimeout(s),s=setTimeout(function(){e(a._elem).triggerHandler("error")},9999))})}};e(a._elem).bind("loadedmetadata",function(){g(e.prop(this,"videoWidth"),e.prop(this,"videoHeight"))}).bind("emptied",f).bind("swfstageresize",function(){i||g(k.width,k.height)}).bind("emptied",function(){k={}}).triggerHandler("swfstageresize");f();e.prop(a._elem,"readyState")&&g(e.prop(a._elem,"videoWidth"),e.prop(a._elem,"videoHeight"))}};g.playerResize=function(a){a&&
(a=r.getElementById(a.replace(u,"")))&&e(a).triggerHandler("swfstageresize")};e(r).bind("emptied",function(a){a=m(a.target);d(a)});var i;g.jwPlayerReady=function(a){var b=o(a.id);if(b&&b.jwapi){clearTimeout(i);b.jwData=a;b.wasSwfReady?e(b._elem).mediaLoad():(a=parseFloat(a.version,10),(a<5.6||a>=6)&&f.warn("mediaelement-swf is only testet with jwplayer 5.6+"),e.prop(b._elem,"volume",b.volume),e.prop(b._elem,"muted",b.muted),c(b));b.wasSwfReady=!0;var a=b.actionQueue.length,g=0,k;if(a&&b.isActive==
"flash")for(;b.actionQueue.length&&a>g;)g++,k=b.actionQueue.shift(),b.jwapi[k.fn].apply(b.jwapi,k.args);if(b.actionQueue.length)b.actionQueue=[];d(b)}};var C=e.noop;if(A){var H={play:1,playing:1},F=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],G=F.map(function(a){return a+".webshimspolyfill"}).join(" "),I=function(a){var b=f.data(a.target,"mediaelement");b&&(a.originalEvent&&a.originalEvent.type===a.type)==(b.activating=="flash")&&(a.stopImmediatePropagation(),
H[a.type]&&b.isActive!=b.activating&&e(a.target).pause())},C=function(a){e(a).unbind(G).bind(G,I);F.forEach(function(b){f.moveToFirstEvent(a,b)})};C(r)}g.setActive=function(a,b,c){c||(c=f.data(a,"mediaelement"));if(c&&c.isActive!=b){b!="html5"&&b!="flash"&&f.warn("wrong type for mediaelement activating: "+b);var d=f.data(a,"shadowData");c.activating=b;e(a).pause();c.isActive=b;b=="flash"?(d.shadowElement=d.shadowFocusElement=c.shadowElem[0],e(a).hide().getShadowElement().show()):(e(a).show().getShadowElement().hide(),
d.shadowElement=d.shadowFocusElement=!1)}};var J=function(){var a=["_bufferedEnd","_bufferedStart","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta"],b=a.length;return function(c){if(c){for(var d=b,e=c.networkState;--d;)delete c[a[d]];c.actionQueue=[];c.buffered.length=0;e&&j(c._elem,"emptied")}}}();g.createSWF=function(a,b,c){if(E){var d=e.extend({},n.jwVars,{image:e.prop(a,"poster")||"",file:b.srcProp}),h=e(a).data("jwvars")||
{};if(c&&c.swfCreated)g.setActive(a,"flash",c),J(c),c.currentSrc=b.srcProp,e.extend(d,h),n.changeJW(d,a,b,c,"load"),w(a,"sendEvent",["LOAD",d]);else{var q=e.prop(a,"controls"),s="jwplayer-"+f.getID(a),j=e.extend({},n.jwParams,e(a).data("jwparams")),l=a.nodeName.toLowerCase(),o=e.extend({},n.jwAttrs,{name:s,id:s},e(a).data("jwattrs")),m=e('<div class="polyfill-'+l+' polyfill-mediaelement" id="wrapper-'+s+'"><div id="'+s+'"></div>').css({position:"relative",overflow:"hidden"});l=="audio"&&!q?m.css({width:0,
height:0}):m.css({width:a.style.width||e(a).width(),height:a.style.height||e(a).height()});m.insertBefore(a);c=f.data(a,"mediaelement",f.objectCreate(y,{actionQueue:{value:[]},shadowElem:{value:m},_elemNodeName:{value:l},_elem:{value:a},currentSrc:{value:b.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(b){if(b>=c.buffered.length)f.error("buffered index size error");else return 0},end:function(b){if(b>=c.buffered.length)f.error("buffered index size error");else return(c.duration-c._bufferedStart)*
c._bufferedEnd/100+c._bufferedStart},length:0}}}));A&&e.extend(c,{volume:e.prop(a,"volume"),muted:e.prop(a,"muted")});e.extend(d,{id:s,controlbar:q?n.jwVars.controlbar||(l=="video"?"over":"bottom"):"none",icons:""+(q&&l=="video")},h,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"});d.plugins?d.plugins+=","+v:d.plugins=v;f.addShadowDom(a,m);C(a);g.setActive(a,"flash",c);n.changeJW(d,a,b,c,"embed");k(c);D.embedSWF(B,s,"100%","100%","9.0.0",!1,d,j,o,function(b){if(b.success)c.jwapi=b.ref,q||
e(b.ref).attr("tabindex","-1").css("outline","none"),i||(clearTimeout(i),i=setTimeout(function(){var a=e(b.ref).css({minHeight:"2px",minWidth:"2px",display:"block"});a[0].offsetWidth>1&&a[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?f.warn("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(a[0].offsetWidth<2||a[0].offsetHeight<2)&&f.info("JS-SWF connection can't be established on hidden or unconnected flash objects")},
8E3))})}}else setTimeout(function(){e(a).mediaLoad()},1)};var w=function(a,b,c,d){return(d=d||m(a))?(d.jwapi&&d.jwapi[b]?d.jwapi[b].apply(d.jwapi,c||[]):(d.actionQueue.push({fn:b,args:c}),d.actionQueue.length>10&&setTimeout(function(){d.actionQueue.length>5&&d.actionQueue.shift()},99)),d):!1};["audio","video"].forEach(function(a){var b={},c,d=function(d){a=="audio"&&(d=="videoHeight"||d=="videoWidth")||(b[d]={get:function(){var b=m(this);return b?b[d]:A&&c[d].prop._supget?c[d].prop._supget.apply(this):
y[d]},writeable:!1})},g=function(a,c){d(a);delete b[a].writeable;b[a].set=c};g("volume",function(b){var a=m(this);if(a){if(b*=100,!isNaN(b)){(b<0||b>100)&&f.error("volume greater or less than allowed "+b/100);a.muted&&(t=!0);w(this,"sendEvent",["VOLUME",b],a);if(t){try{a.jwapi.sendEvent("mute","true")}catch(d){}t=!1}setTimeout(function(){b/=100;if(!(a.volume==b||a.isActive!="flash"))a.volume=b,j(a._elem,"volumechange"),a=null},1)}}else if(c.volume.prop._supset)return c.volume.prop._supset.apply(this,
arguments)});g("muted",function(b){var a=m(this);if(a)b=!!b,w(this,"sendEvent",["mute",""+b],a),setTimeout(function(){if(!(a.muted==b||a.isActive!="flash"))a.muted=b,j(a._elem,"volumechange"),a=null},1);else if(c.muted.prop._supset)return c.muted.prop._supset.apply(this,arguments)});g("currentTime",function(b){var a=m(this);if(a){if(b*=1,!isNaN(b)){if(a.paused)clearTimeout(a.stopPlayPause),a.stopPlayPause=setTimeout(function(){a.paused=!0;a.stopPlayPause=!1},50);w(this,"sendEvent",["SEEK",""+b],a);
if(a.paused){if(a.readyState>0)a.currentTime=b,j(a._elem,"timeupdate");try{a.jwapi.sendEvent("play","false")}catch(d){}}}}else if(c.currentTime.prop._supset)return c.currentTime.prop._supset.apply(this,arguments)});["play","pause"].forEach(function(a){b[a]={value:function(){var b=m(this);if(b)b.stopPlayPause&&clearTimeout(b.stopPlayPause),w(this,"sendEvent",["play",a=="play"],b),setTimeout(function(){if(b.isActive=="flash"&&(b._ppFlag=!0,b.paused!=(a!="play")))b.paused=a!="play",j(b._elem,a)},1);
else if(c[a].prop._supvalue)return c[a].prop._supvalue.apply(this,arguments)}}});h.forEach(d);f.onNodeNamesPropertyModify(a,"controls",function(b,c){var d=w(this,c?"showControls":"hideControls",[a]);e(this)[c?"addClass":"removeClass"]("webshims-controls");d&&e(d.jwapi).attr("tabindex",c?"0":"-1")});c=f.defineNodeNameProperties(a,b,"prop")});if(E){var K=e.cleanData;e.cleanData=function(a){a&&a[0]&&a[0].nodeType==1&&e(a).filter("object").each(function(){if("sendEvent"in this)try{this.sendEvent("play",
!1)}catch(b){}try{for(var a in this)typeof this[a]=="function"&&(this[a]=null)}catch(c){}});return K.apply(this,arguments)}}});
(function(e,f,p){var r=f.audio&&f.video,l=!1;if(r){var n=document.createElement("video");f.videoBuffered="buffered"in n;l="loop"in n;p.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]);f.videoBuffered||(p.addPolyfill("mediaelement-native-fix",{feature:"mediaelement",test:f.videoBuffered,dependencies:["dom-support"]}),p.cfg.waitReady&&e.readyWait++,p.loader.loadScript("mediaelement-native-fix",function(){p.cfg.waitReady&&e.ready(!0)}))}e.webshims.ready("dom-support swfobject",
function(e,f,n,p,x){var h=f.mediaelement,z=f.cfg.mediaelement,y=function(c,d){var c=e(c),k={src:c.attr("src")||"",elem:c,srcProp:c.prop("src")};if(!k.src)return k;var i=c.attr("type");if(i)k.type=i,k.container=e.trim(i.split(";")[0]);else if(d||(d=c[0].nodeName.toLowerCase(),d=="source"&&(d=(c.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i=h.getTypeForSrc(k.src,d))k.type=i,k.container=i,f.warn("you should always provide a proper mime-type using the source element. "+k.src+
" detected as: "+i),e.nodeName(c[0],"source")&&c.attr("type",i);if(i=c.attr("media"))k.media=i;return k},u=swfobject.hasFlashPlayerVersion("9.0.115"),o=function(){f.ready("mediaelement-swf",function(){if(!h.createSWF)f.modules["mediaelement-swf"].test=!1,delete e.event.special["mediaelement-swfReady"],f.loader.loadList(["mediaelement-swf"])})};u&&f.ready("WINDOWLOAD",o);h.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r"],"audio/wav":["wav"],
"audio/x-m4a":["m4a"],"audio/x-m4p":["m4p"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"]}};h.mimeTypes.source=e.extend({},h.mimeTypes.audio,h.mimeTypes.video);h.getTypeForSrc=function(c,d){if(c.indexOf("youtube.com/watch?")!=
-1)return"video/youtube";var c=c.split("?")[0].split("."),c=c[c.length-1],f;e.each(h.mimeTypes[d],function(d,e){if(e.indexOf(c)!==-1)return f=d,!1});return f};h.srces=function(c,d){c=e(c);if(d)c.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(d)||(d=[d]),d.forEach(function(d){var e=p.createElement("source");typeof d=="string"&&(d={src:d});e.setAttribute("src",d.src);d.type&&e.setAttribute("type",d.type);d.media&&e.setAttribute("media",d.media);c.append(e)});else{var d=[],f=
c[0].nodeName.toLowerCase(),i=y(c,f);i.src?d.push(i):e("source",c).each(function(){i=y(this,f);i.src&&d.push(i)});return d}};e.fn.loadMediaSrc=function(c,d){return this.each(function(){d!==x&&(e(this).removeAttr("poster"),d&&e.attr(this,"poster",d));h.srces(this,c);e(this).mediaLoad()})};h.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla",
"audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube"];h.canSwfPlaySrces=function(c,d){var f="";u&&(c=e(c),d=d||h.srces(c),e.each(d,function(c,d){if(d.container&&d.src&&h.swfMimeTypes.indexOf(d.container)!=-1)return f=d,!1}));return f};var m={};h.canNativePlaySrces=function(c,d){var f="";if(r){var c=e(c),i=(c[0].nodeName||"").toLowerCase();if(!m[i])return f;d=d||h.srces(c);e.each(d,function(d,e){if(e.type&&m[i].prop._supvalue.call(c[0],e.type))return f=e,!1})}return f};h.setError=function(c,
d){d||(d="can't play sources");e(c).data("mediaerror",d);f.warn("mediaelementError: "+d);setTimeout(function(){e(c).data("mediaerror")&&e(c).trigger("mediaerror")},1)};var j=function(){var c;return function(d,e,i){f.ready("mediaelement-swf",function(){h.createSWF?h.createSWF(d,e,i):c||(c=!0,o(),j(d,e,i))})}}(),t=function(c,d,e,f,g){e||e!==!1&&d&&d.isActive=="flash"?(e=h.canSwfPlaySrces(c,f))?j(c,e,d):g?h.setError(c,!1):t(c,d,!1,f,!0):(e=h.canNativePlaySrces(c,f))?d&&d.isActive=="flash"&&h.setActive(c,
"html5",d):g?h.setError(c,!1):t(c,d,!0,f,!0)},B=/^(?:embed|object)$/i,v=function(c,d){var k=f.data(c,"mediaelementBase")||f.data(c,"mediaelementBase",{}),i=h.srces(c),j=c.parentNode;clearTimeout(k.loadTimer);e.data(c,"mediaerror",!1);if(i.length&&j&&!B.test(j.nodeName||""))d=d||f.data(c,"mediaelement"),t(c,d,z.preferFlash||x,i)};e(p).bind("ended",function(c){var d=f.data(c.target,"mediaelement");(!l||d&&d.isActive!="html5"||e.prop(c.target,"loop"))&&setTimeout(function(){!e.prop(c.target,"paused")&&
e.prop(c.target,"loop")&&e(c.target).prop("currentTime",0).play()},1)});l||f.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(c){var d=f.defineNodeNameProperty(c,"load",{prop:{value:function(){var c=f.data(this,"mediaelement");v(this,c);r&&(!c||c.isActive=="html5")&&d.prop._supvalue&&d.prop._supvalue.apply(this,arguments)}}});m[c]=f.defineNodeNameProperty(c,"canPlayType",{prop:{value:function(d){var f="";r&&m[c].prop._supvalue&&(f=m[c].prop._supvalue.call(this,
d),f=="no"&&(f=""));!f&&u&&(d=e.trim((d||"").split(";")[0]),h.swfMimeTypes.indexOf(d)!=-1&&(f="maybe"));return f}}})});f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var c=this,d=f.data(c,"mediaelementBase")||f.data(c,"mediaelementBase",{});clearTimeout(d.loadTimer);d.loadTimer=setTimeout(function(){v(c);c=null},9)}});f.addReady(function(c,d){e("video, audio",c).add(d.filter("video, audio")).each(function(){v(this)})});f.isReady("mediaelement-core",!0)})})(jQuery,Modernizr,
jQuery.webshims);
