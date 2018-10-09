!function(e){"object"==typeof module&&"undefined"!=typeof module.exports?module.exports=e:e()}(function(){(window.webpackJsonpFusionCharts=window.webpackJsonpFusionCharts||[]).push([[5],{669:function(e,t,o){"use strict";t.__esModule=!0,t.ZoomLineDY=t.ZoomLine=undefined;var n=r(o(670)),i=r(o(675)),a=r(o(677));function r(e){return e&&e.__esModule?e:{"default":e}}t.ZoomLine=n["default"],t.ZoomLineDY=i["default"],t["default"]={name:"zoomline",type:"package",requiresFusionCharts:!0,extension:function(e){e.addDep(a["default"]),e.addDep(n["default"]),e.addDep(i["default"])}}},670:function(e,t,o){"use strict";t.__esModule=!0;var n=o(118),i=o(122),a=d(o(454)),r=d(o(671)),s=d(o(673)),l=o(129),c=o(405),u=o(674),p=o(125);function d(e){return e&&e.__esModule?e:{"default":e}}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),n=0;n<o.length;n++){var i=o[n],a=Object.getOwnPropertyDescriptor(t,i);a&&a.configurable&&e[i]===undefined&&Object.defineProperty(e,i,a)}}(e,t))}var f=window.navigator.userAgent,g=(0,p.getDep)("redraphael","plugin"),m=window.doc,v="rgba(192,192,192,"+(/msie/i.test(f)&&!window.opera?.002:1e-6)+")",b=window.parseFloat,y=window.parseInt,x=Math,C=x.max,w=x.min,k=x.ceil,E=x.floor,P=0;g.addSymbol(u.symbolList);var M=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.canvasborderthickness=1,o.zoomX=!0,o.hasScroll=!0,o.eiMethods={zoomOut:function(e){var t,o=this.apiInstance,n=o.getChildren&&o.getChildren("canvas")[0],i=n&&n.getChildren("inputManager");i=i&&i[0],o&&i&&o.addJob("zoomOut"+P++,function(){t=i.zoomOut(),"function"==typeof e&&e(t)},l.priorityList.postRender)},zoomTo:function(e,t,o){var n,i=this.apiInstance,a=i.getChildren&&i.getChildren("canvas")[0],r=a&&a.getChildren("inputManager");if(e!==undefined&&t!==undefined&&(r=r&&r[0],i&&r))return o?void i.addJob("zoomTo"+P++,function(){n=r.zoomTo(e,t),"function"==typeof o&&o(n)},l.priorityList.postRender):r.zoomTo(e,t)},resetChart:function(){var e=this.apiInstance,t=e.getChildren&&e.getChildren("canvas")[0],o=t&&t.getChildren("inputManager");o=o&&o[0],e&&o&&e.addJob("resetChart"+P++,function(){o.resetChart()},l.priorityList.postRender)},setZoomMode:function(e){var t=this.apiInstance,o=t.getChildren&&t.getChildren("canvas")[0],n=o&&o.getChildren("inputManager");n=n&&n[0],t&&n&&t.addJob("setZoomMode"+P++,function(){n.setZoomMode(e)},l.priorityList.postRender)},getViewStartIndex:function(e){var t,o,n,i=this.apiInstance;if(!e)return t=i.getChildren("xAxis")[0],o=t.getVisibleConfig().minValue,0===(n=Math.ceil(o))?0:n;i.addJob("getViewStartIndex"+P++,function(){"function"==typeof e&&(t=i.getChildren("xAxis")[0],o=t.getVisibleConfig().minValue,n=Math.ceil(o),e(0===n?0:n))},l.priorityList.postRender)},getViewEndIndex:function(e){var t,o,n=this.apiInstance;if(!e)return t=n.getChildren("xAxis")[0],o=t.getVisibleConfig().maxValue,Math.floor(o);n.addJob("getViewEndIndex"+P++,function(){"function"==typeof e&&(t=n.getChildren("xAxis")[0],o=t.getVisibleConfig().maxValue,e(Math.floor(o)))},l.priorityList.postRender)}},o.eiMethods.scrollTo=c.scrollTo,o.registerFactory("dataset",s["default"],["vCanvas"]),o}return h(t,e),t.getName=function(){return"ZoomLine"},t.includeInputOptions=function(){return["DragZoomIn","DragPin","ZoomResetButton","ZoomOutButton"]},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Zoomable and Panable Multi-series Line Chart",t.defaultDatasetType="zoomline",t.showValues=0,t.zeroplanethickness=1,t.zeroplanealpha=40,t.showzeroplaneontop=0,t.enablemousetracking=!0,t.skipAttr=!0,t.showvalues=0},t.prototype.getName=function(){return"ZoomLine"},t.prototype.parseChartAttr=function(t){e.prototype.parseChartAttr.call(this,t);var o=this.config,i=(t||this.getFromEnv("dataSource")).chart;o.useCrossline=Number(i.usecrossline)||i.usecrossline===n.UNDEF?1:0,o.drawTrendRegion=0},t.prototype.getInputConfigurations=function(){var e=this,t=e.config,o=function(o,n){e.addJob("inputZoom",function(){var i=t.viewPortConfig;i.dsi=o,i.dei=n,e.updateManager(),e.getChildren("xAxis")[0].prepareAttributes()},l.priorityList.configure)};return{dragZoomIn:{scaleX:!0,scaleY:!1,drawButton:!1,boxStyle:{stroke:t.zoomPaneStroke,fill:t.zoomPaneFill,"stroke-width":0},catZoomLimit:2,skipGraphics:!0,dragendFn:function(){return o(arguments.length<=1?undefined:arguments[1],arguments.length<=2?undefined:arguments[2])}},zoomResetButton:{hookFn:o,tooltext:t.btnResetChartTooltext},zoomOutButton:{hookFn:o,tooltext:t.btnZoomOutTooltext},dragPin:{orientation:"horizontal",attr:{stroke:t.zoomPaneStroke,fill:t.zoomPaneFill,"stroke-width":0},skipGraphics:!t.allowPinMode,pinAttr:{"stroke-width":0,stroke:"none",fill:t.pinPaneFill,"shape-rendering":"crisp"},strokeWidth:0,tooltext:t.showToolBarButtonTooltext&&t.btnSwitchToPinModeTooltext||""}}},t.prototype._setCategories=function(){var e,t,o,i,a=this.config,r=this.getFromEnv("dataSource"),s=r.chart||{},l=this.getChildren("xAxis"),c=a.cdm,u=a.cdmchar,p=r.categories&&r.categories[0].category||[];if(a.cdm=c=(0,n.pluckNumber)(s.compactdatamode,0),a.cdmchar=u=(0,n.pluck)(s.dataseparator,"|"),(c||"string"==typeof p)&&p.split){for(t=[],o=0,i=(e=p.split(u)).length;o<i;o+=1)t.push({label:e[o]});this.config.categories=r.categories[0].category=t}l[0].setAxisPadding(0,0),l[0].setTickValues(t||p)},t.prototype.isWithinCanvas=function(e,t){return function(e,t){var o=t.get("config"),i=(0,n.getMouseCoordinate)(t.get("linkedItems","container"),e,t),a=i.chartX,r=i.chartY,s=o.canvasLeft,l=o.canvasTop,c=o.canvasLeft+o.canvasWidth,u=o.canvasHeight+o.canvasTop;return i.insideCanvas=!1,i.originalEvent=e,a>s&&a<c&&r>l&&r<u&&(i.insideCanvas=!0),i}.call(this,e,t)},t.prototype.highlightPoint=function(e,t,o,n,i,a){var r,s,l,c,u,p=this,d=p.config,h=p.getFromEnv("animationManager"),f=p.components,g=p.graphics,b=Number(e),y=g.tracker,x=f.dataset[i],C=x&&x.config,w=x&&C.zoomedRadius||0,k=x&&C.hoverCosmetics,E=k&&k.fill,P=k&&k.borderColor,M=k&&k.borderThickness,L=function(e){p.plotEventHandler(this,e)},_=function(e){p.plotEventHandler(this,e,"dataplotRollover")},T=function(e){p.plotEventHandler(this,e,"dataplotRollout")};y||(r=g.tracker=h.setAnimation({el:"circle",attr:{cx:0,cy:0,r:w,fill:b?E:v,stroke:b?P:v,"stroke-width":b?M:0,"clip-rect":d.canvasLeft+","+d.canvasTop+","+d.canvasWidth+","+d.canvasHeight},container:g.trackerGroup,component:p}).click(L).hover(_,T)),n&&r.data("eventArgs",{x:n.x,y:n.y,tooltip:n.tooltip,link:n.link}),d.lastHoveredPoint=n,p.getFromEnv("toolTipController").enableToolTip(r,a),r.transform("t"+(t+d.canvasLeft)+","+(o+d.canvasTop)),n&&(s="mouseover",l=r&&r.node,c=d.lastMouseEvent,l&&s&&(c||(c={}),c.originalEvent&&(c=c.originalEvent),c.touches&&(c=c.touches[0]),l.dispatchEvent?(MouseEvent?u=new MouseEvent(s,{bubbles:!!c.bubbles,cancelable:!!c.cancelable,clientX:c.clientX||c.pageX&&c.pageX-m.body.scrollLeft-m.documentElement.scrollLeft||0,clientY:c.clientY||c.pageY&&c.pageY-m.body.scrollTop-m.documentElement.scrollTop||0,screenX:c.screenX||0,screenY:c.screenY||0,pageX:c.pageX||0,pageY:c.pageY||0}):m.createEvent&&(u=m.createEvent("HTMLEvents")).initEvent(s,!!c.bubbles,!!c.cancelable),u.eventName=s,u&&l.dispatchEvent(u)):m.createEventObject&&l.fireEvent&&((u=m.createEventObject()).eventType=s,u.eventName=s,l.fireEvent("on"+s,u))))},t.prototype.configureAttributes=function(t){e.prototype.configureAttributes.call(this,t);var o,a,r=this.getFromEnv("dataSource").chart||{},s=this.getFromEnv("color-manager"),l=s.getColor("canvasBorderColor");o=(a=this.config).style,a.stepZoom=400/(100-(0,n.pluckNumber)(r.stepzoom,25)),a.stepZoom<=2&&(a.stepZoom=1.9),(0,n.extend2)(a,{useRoundEdges:(0,n.pluckNumber)(r.useroundedges,0),zoomType:"x",canvasPadding:(0,n.pluckNumber)(r.canvaspadding,0),scrollColor:(0,i.getFirstColor)((0,n.pluck)(r.scrollcolor,s.getColor("altHGridColor"))),scrollShowButtons:!!(0,n.pluckNumber)(r.scrollshowbuttons,1),scrollHeight:(0,n.pluckNumber)(r.scrollheight,16)||16,scrollBarFlat:(0,n.pluckNumber)(r.flatscrollbars,0),allowPinMode:(0,n.pluckNumber)(r.allowpinmode,1),skipOverlapPoints:(0,n.pluckNumber)(r.skipoverlappoints,1),showToolBarButtonTooltext:(0,n.pluckNumber)(r.showtoolbarbuttontooltext,1),btnResetChartTooltext:(0,n.pluck)(r.btnresetcharttooltext,"Reset Chart"),btnZoomOutTooltext:(0,n.pluck)(r.btnzoomouttooltext,"Zoom out one level"),btnSwitchToZoomModeTooltext:(0,n.pluck)(r.btnswitchtozoommodetooltext,"<strong>Switch to Zoom Mode</strong><br/>Select a subset of data to zoom into it for detailed view"),btnSwitchToPinModeTooltext:(0,n.pluck)(r.btnswitchtopinmodetooltext,"<strong>Switch to Pin Mode</strong><br/>Select a subset of data and compare with the rest of the view"),pinPaneFill:(0,i.convertColor)((0,n.pluck)(r.pinpanebgcolor,l),(0,n.pluckNumber)(r.pinpanebgalpha,15)),zoomPaneFill:(0,i.convertColor)((0,n.pluck)(r.zoompanebgcolor,"#b9d5f1"),(0,n.pluckNumber)(r.zoompanebgalpha,30)),zoomPaneStroke:(0,i.convertColor)((0,n.pluck)(r.zoompanebordercolor,"#3399ff"),(0,n.pluckNumber)(r.zoompaneborderalpha,80)),showPeakData:(0,n.pluckNumber)(r.showpeakdata,0),maxPeakDataLimit:(0,n.pluckNumber)(r.maxpeakdatalimit,r.maxpeaklimit,null),minPeakDataLimit:(0,n.pluckNumber)(r.minpeakdatalimit,r.minpeaklimit,null),crossline:{enabled:(0,n.pluckNumber)(r.showcrossline,1),line:{"stroke-width":(0,n.pluckNumber)(r.crosslinethickness,1),stroke:(0,i.getFirstColor)((0,n.pluck)(r.crosslinecolor,"#000000")),"stroke-opacity":(0,n.pluckNumber)(r.crosslinealpha,20)/100},labelEnabled:(0,n.pluckNumber)(r.showcrosslinelabel,r.showcrossline,1),labelstyle:{fontSize:b(r.crosslinelabelsize)?b(r.crosslinelabelsize)+"px":o.outCanfontSize,fontFamily:(0,n.pluck)(r.crosslinelabelfont,o.outCanfontFamily)},valueEnabled:(0,n.pluckNumber)(r.showcrosslinevalues,r.showcrossline,1),valuestyle:{fontSize:b(r.crosslinevaluesize)?b(r.crosslinevaluesize)+"px":o.inCanfontSize,fontFamily:(0,n.pluck)(r.crosslinevaluefont,o.inCanvasStyle.fontFamily)}},useCrossline:(0,n.pluckNumber)(r.usecrossline,1),tooltipSepChar:(0,n.pluck)(r.tooltipsepchar,", "),showTerminalValidData:(0,n.pluckNumber)(r.showterminalvaliddata,0)})},t.prototype.getValuePixel=function(e){var t=this.config.viewPortConfig;return t.ddsi+E(e/t.ppp)},t.prototype.getDatasets=function(){var e=[];return this.iterateComponents(function(t){t.getType&&"dataset"===t.getType()&&e.push(t)}),e},t.prototype.__preDraw=function(){var e,t,o,i,a,r=this.config,s=this.getFromEnv("dataSource").chart,l=r.cdm,c=this.getChildren("xAxis")[0],u=r.viewPortConfig,p=this.getChildren("canvas")[0].config,d=C(p.canvasPadding,p.canvasPaddingLeft,p.canvasPaddingRight),h=this.getChildren("yAxis")[0],f=r.canvasHeight,g=this.getFromEnv("dataSource").chart,m=c.getTicksLen(),v=c.getVisibleConfig(),b=v.minValue,x=v.maxValue,w=(0,n.pluckNumber)(s.displaystartindex,b,1),k=(0,n.pluckNumber)(s.displayendindex,x,m||2),E=y(w,10)-1,P=y(k,10)-1,M=0;if(a=(i=this.getDatasets()).length,r.borderWidth=(0,n.pluckNumber)(g.showborder,1)?(0,n.pluckNumber)(g.borderthickness,1):0,r.updateAnimDuration=500,r.status="zoom",r.maxZoomLimit=(0,n.pluckNumber)(s.maxzoomlimit,1e3),r.viewPortHistory=[],(t=(0,n.pluckNumber)(s.pixelsperpoint,15))<1&&(t=1),(o=(0,n.pluckNumber)(s.pixelsperlabel,s.xaxisminlabelwidth,c.getAxisConfig("labels").rotation?20:60))<t&&(o=t),(E<0||E>=(m-1||1))&&(E=0),(P<=E||P>(m-1||1))&&(P=m-1||1),(u=r.viewPortConfig=(0,n.extend2)(r.viewPortConfig,{amrd:(0,n.pluckNumber)(s.anchorminrenderdistance,20),nvl:(0,n.pluckNumber)(s.numvisiblelabels,0),cdm:l,oppp:t,oppl:o,dsi:E,dei:P,vdl:P-E,clen:m,offset:0,step:1,llen:0,alen:0,ddsi:E,ddei:P,ppc:0})).clen){for(;a--;)e=i[a].config,M=C(M,e.drawanchors&&(e.anchorradius||0)+(Number(e.anchorborderthickness)||0)||0);r.overFlowingMarkerWidth=M,d=r.canvasPadding=C(M,d),r._prezoomed=u.dei-u.dsi<u.clen-1,r._visw=Math.max(1,r.canvasWidth-2*d),r._visx=r.canvasLeft+d,r._visout=-(r.height+f+1e3),r._yminValue=h.getLimit().min,r._ymin=h.getPixel(r._yminValue),(0,n.pluckNumber)(s.displaystartindex,s.displayendindex)&&c.setVisibleConfig(w,k),this.updateManager()}},t.prototype.resetZoom=function(){var e=this.config.viewPortHistory,t=e[0];return!!e.length&&(e.length=0,this.zoomTo(t.dsi,t.dei,t)&&this.fireChartInstanceEvent("zoomReset",this._zoomargs,[this.getFromEnv("chartInstance").id]),!0)},t.prototype.zoomOut=function(){var e,t,o,n,i,a=this.config,r=a.viewPortHistory;return e=r.pop(),t=r[0]||a.viewPortConfig,e?(o=e.dsi,n=e.dei):a._prezoomed&&(o=0,n=t.clen-1),(i=this.zoomTo(o,n,e))&&this.fireChartInstanceEvent("zoomedout",i),!0},t.prototype.zoomRangePixels=function(e,t){var o,n,i=this.config.viewPortConfig,a=i.ppp,r=i.ddsi;o=r+E(e/a),n=r+E(t/a),i.dsi=o,i.dei=n,this.updateManager()},t.prototype.prepareAttributes=function(){this.config.hasChartMessage||(this.__preDraw(),e.prototype.prepareAttributes.call(this))},t.prototype.getValue=function(e){var t=this.config,o=t.viewPortConfig,n=this.getOriginalPositions(e.x,e.y,e.x,e.y),i=n[0],a=n[1],r=this.getChildren("xAxis")[0],s=this.getChildren("yAxis")[0],l=r.config.axisRange,c=s.config.axisRange,u=l.min,p=l.max,d=c.max,h=c.min,f=t.canvasWidth*o.scaleX/(p-u),g=t.canvasHeight*o.scaleY/(d-h);return{x:u+(i-t.canvasLeft)/f,y:d-(a-t.canvasTop)/g}},t.prototype.getOriginalPositions=function(e,t,o,n){var i=this.config,a=i.viewPortConfig,r=a.scaleX,s=a.scaleY,l=a.x,c=a.y,u=w(e,o),p=C(e,o),d=w(t,n),h=C(t,n);return p=p>i.canvasWidth?i.canvasWidth:p,h=h>i.canvasHeight?i.canvasHeight:h,[l+(u=u<0?0:u)/r,c+(d=d<0?0:d)/s,(p-u)/r,(h-d)/s]},t.prototype.updateManager=function(){var e,t,o,n,i,a,r,s,l,c,u,p,d,h,f,g,m,v=this.getDatasets(),y=v.length,x=this.config,w=x.viewPortConfig,E=x._visw,P=this.getChildren("xAxis")[0],M=function(e){return P.getPixel(e,{wrtVisible:!0})},L=P.getAxisConfig("labels").style;if(x.legendClicked)for(e=0;e<y;e+=1)v[e].draw();else!w&&(w=x.viewPortConfig),i=w.oppp,g=w.nvl,p=w.dsi,d=w.dei,a=w.vdl=d-p,r=w.ppl=g?E/g:w.oppl,l=w.step=(s=w.ppp=E/a)<i?k(i/s):1,c=w.lskip=k(C(r,b(L.lineHeight))/s/l),h=w.dsi,f=w.dei,w.offset=0,u=w.norm=h%l,w.ddsi=h-=u,w.ddei=f=f+2*l-u,w._ymin=x._ymin,w._yminValue=x._yminValue,w.x=(M(h)-M(P.getVisibleConfig().minValue)+w.offset)/w.scaleX,f-h>P.getTicksLen()?w.scaleX=1:w.scaleX=P.getTicksLen()/Math.abs(f-h-l-.9),m=P.getVisibleConfig(),o=Math.ceil((m.maxValue-m.minValue+1)/g),n=x.viewPortConfig&&x.viewPortConfig.scaleX,t=Math.max(Math.round(P.getAxisConfig("labelStep")/n),g?o:c*l),P.setLabelConfig({step:t})},t.prototype.getParsedLabel=function(e){var t=this.xlabels;return t.parsed[e]||(t.parsed[e]=(0,n.parseUnsafeString)(t.data[e]||""))},t.prototype._setAxisScale=function(){this.getChildren("xAxis")[0].setScrollType("always")},t.prototype.getDSdef=function(){return r["default"]},t}(a["default"]);t["default"]=M},671:function(e,t,o){"use strict";t.__esModule=!0;var n=o(118),i=s(o(346)),a=o(125),r=s(o(672));function s(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),n=0;n<o.length;n++){var i=o[n],a=Object.getOwnPropertyDescriptor(t,i);a&&a.configurable&&e[i]===undefined&&Object.defineProperty(e,i,a)}}(e,t))}var c=n.hasTouch?n.TOUCH_THRESHOLD_PIXELS:n.CLICK_THRESHOLD_PIXELS;(0,a.addDep)({name:"zoomlineAnimation",type:"animationRule",extension:r["default"]});var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return l(t,e),t.prototype.getType=function(){return"dataset"},t.prototype.getName=function(){return"zoomLine"},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this),this.config.skipIgnorerIndices=[],this.config.showPeakData=0,this.config.showTerminalValidData=0,this.config.minPeakDataLimit=null,this.config.maxPeakDataLimit=null},t.prototype._plotConfigure=function(t,o,n){e.prototype._plotConfigure.call(this,t,o,n);var i=this.config,a=this.components.data[t].config.setValue,r=n||this.getFromEnv("xAxis").getTicksLen(),s=i.showTerminalValidData,l=i.showPeakData,c=i.maxPeakDataLimit,u=i.minPeakDataLimit,p=c>u,d=a>c||a<u;l&&(c<u&&(a>c&&a<u)?i.skipIgnorerIndices.push(t):p&&d&&i.skipIgnorerIndices.push(t)),s&&t===r-1&&i.skipIgnorerIndices.push(t)},t.prototype.drawPlots=function(){var t=this.getFromEnv("xAxis"),o=this.getFromEnv("chartConfig").viewPortConfig;t.getPixel(o.step)-t.getPixel(0)>=o.amrd?e.prototype.drawPlots.call(this):this.hideAllAnchors()},t.prototype._setConfigure=function(t,o){var i=this.config,a=this.getFromEnv("chart"),r=a.config,s=a.getFromEnv("dataSource").chart,l=this.config.JSONData;i.drawanchors=(0,n.pluckNumber)(s.drawanchors,s.showanchors,1),i.anchorradius=(0,n.pluckNumber)(l.anchorradius,s.anchorradius,i.linethickness+2),i.showTerminalValidData=(0,n.pluckNumber)(r.showTerminalValidData,0),i.showPeakData=(0,n.pluckNumber)(r.showPeakData,0),i.showPeakData&&(r.maxPeakDataLimit||r.minPeakDataLimit)&&(i.maxPeakDataLimit=(0,n.pluckNumber)(r.maxPeakDataLimit,Number.MIN_SAFE_INTEGER),i.minPeakDataLimit=(0,n.pluckNumber)(r.minPeakDataLimit,Number.MAX_SAFE_INTEGER)),e.prototype._setConfigure.call(this,t,o)},t.prototype.configureAttributes=function(t){e.prototype.configureAttributes.call(this,t);var o,i,a={},r=this.getFromEnv("chart").getFromEnv("dataSource").chart;o=(i=this.config).linethickness+(0,n.pluckNumber)(r.pinlinethicknessdelta,1),a["stroke-width"]=o>0&&o||0,a["stroke-dasharray"]=[3,2],a.stroke=(0,n.hashify)(i.linecolor),a["stroke-opacity"]=i.alpha/100,a["stroke-linejoin"]=i["stroke-linejoin"]="round",a["stroke-linecap"]=i["stroke-linecap"]="round",i.pin=a,i.animation=!1,i.transposeanimduration=0,i.defaultPadding={left:0,right:0}},t.prototype.drawLabel=function(){return this},t.prototype.isWithinShape=function(e,t,o,i){var a,r,s,l,u,p,d,h,f,g,m,v;if(e)return a=e.config.anchorProps,r=e.config,l=a.borderThickness,this,u=this.components.data,p=(0,n.pluckNumber)(r.dragTolerance,0),d=e._xPos,null!==(h=e._yPos)?(v=e.config.hoverEffects,s=Math.max(a.radius,v&&v.anchorRadius||0,c)+l/2,f=o-d,g=i-h,((m=Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))<=s||m<=p)&&{pointIndex:t,hovered:!0,pointObj:u[t]}):void 0},t.prototype.hideAllAnchors=function(){var e,t,o,n=this.components.data;for(t=0,o=n.length;t<o;t++)(e=n[t])&&e.graphics&&e.graphics.element&&e.graphics.element.hide()},t.prototype._firePlotEvent=function(e,t,o){var n,i,a,r=this.getFromEnv("chart"),s=this.components.data,l=this.getFromEnv("toolTipController"),c=s[t],u=c.graphics.element,p=this.config.currentToolTip,d=!r.config.useCrossline;switch(a=(n=c.config).setLink,i=n.eventArgs,e){case"mouseover":d&&this._decideTooltipType(t,o),this._rolloverResponseSetter(r,c,o),a&&(u.node.style.cursor="pointer");break;case"mouseout":l.hide(p),this._rolloutResponseSetter(r,c,o),a&&(u.node.style.cursor="default");break;case"click":r.plotEventHandler(u,o,"dataplotclick",i);break;case"mousemove":d&&this._decideTooltipType(t,o)}},t.prototype.calculateScrollRange=function(){var e=this.config,t=this.getFromEnv("xAxis"),o=t.getTicksLen(),n=this.getFromEnv("chartConfig").viewPortConfig.step||1;e.scrollMinVal=Math.max(Math.round(t.getVisibleConfig().minValue),0)-n,e.scrollMaxVal=Math.min(Math.round(t.getVisibleConfig().maxValue)+1,o)+n,e.scrollMinValForLabel=Math.max(Math.round(t.getVisibleConfig().minValue),0)-n,e.scrollMaxValForLabel=Math.min(Math.round(t.getVisibleConfig().maxValue)+1,o)+n,e.scrollMinVal-=e.scrollMinVal%n,e.scrollMinValForLabel-=e.scrollMinValForLabel%n},t}(i["default"]);t["default"]=u},672:function(e,t,o){"use strict";t.__esModule=!0;var n,i=o(349),a=(n=i)&&n.__esModule?n:{"default":n};t["default"]={"initial.dataset.zoomLine":a["default"]["initial.dataset.line"]}},673:function(e,t,o){"use strict";t.__esModule=!0,t["default"]=function(e){var t,o,a=e.getFromEnv("dataSource"),r=a.chart||{},s=e.config,l=a.dataset,c=void 0,u=void 0,p=void 0,d=void 0,h=void 0,f=void 0,g=e.getChildren().canvas[0].getChildren("vCanvas")[0];for(s.cdm=t=(0,n.pluckNumber)(r.compactdatamode,0),s.cdmchar=o=(0,n.pluck)(r.dataseparator,i),l||e.setChartMessage(),u=0;u<l.length;u++)if(c=l[u],t&&c.data&&c.data.split){for(p=[],d=0,f=(h=c.data.split(o)).length;d<f;d++)p.push({value:h[d]});c.data=p}(0,n.datasetFactory)(g,e.getDSdef(),"dataset",l.length,l),e.iterateComponents(function(e){e.getType&&"dataset"===e.getType()&&e.createPinElem&&e.addEventListener("createpinelements",e.createPinElem)})};var n=o(118),i="|"},675:function(e,t,o){"use strict";t.__esModule=!0;var n=s(o(670)),i=o(383),a=s(o(384)),r=s(o(676));function s(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),n=0;n<o.length;n++){var i=o[n],a=Object.getOwnPropertyDescriptor(t,i);a&&a.configurable&&e[i]===undefined&&Object.defineProperty(e,i,a)}}(e,t))}var c=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.getSpecificxAxisConf=i.getSpecificxAxisConf,o.getSpecificyAxisConf=i.getSpecificyAxisConf,o.registerFactory("axis",a["default"],["canvas"]),o.registerFactory("dataset",r["default"],["vCanvas"]),o}return l(t,e),t.getName=function(){return"ZoomLineDy"},t.prototype.getName=function(){return"ZoomLineDy"},t.prototype.__setDefaultConfig=function(){e.prototype.__setDefaultConfig.call(this);var t=this.config;t.friendlyName="Zoomable and Panable Multi-series Dual-axis Line Chart",t.defaultDatasetType="zoomline",t.isdual=!0,t.syncaxislimits=0},t.prototype._feedAxesRawData=function(){return i._feedAxesRawData.call(this)},t}(n["default"]);c.prototype.setAxisDimention=i.setAxisDimention,t["default"]=c},676:function(e,t,o){"use strict";t.__esModule=!0,t["default"]=function(e){var t,o,r=e.getFromEnv("dataSource"),s=r.chart||{},l=e.config,c=r.dataset,u=void 0,p=void 0,d=void 0,h=void 0,f=void 0,g=void 0,m=void 0,v=[],b=[],y=[],x=[],C=e.getChildren().canvas[0].getChildren("vCanvas");for(l.cdm=t=(0,n.pluckNumber)(s.compactdatamode,0),l.cdmchar=o=(0,n.pluck)(s.dataseparator,i),c||e.setChartMessage(),p=0;p<c.length;p++)if(u=c[p],t&&u.data&&u.data.split){for(d=[],h=0,g=(f=u.data.split(o)).length;h<g;h++)d.push({value:f[h]});u.data=d}for(p=0;p<c.length;p++)"s"===((m=c[p]).parentyaxis||"").toLowerCase()?(x.push(m),b.push(p)):(y.push(m),v.push(p));y.length?(0,n.datasetFactory)(C[0],e.getDSdef(),"dataset_line",y.length,y,v):a(C[0]),x.length?(0,n.datasetFactory)(C[1],e.getDSdef(),"dataset_line",x.length,x,b):a(C[1]),e.iterateComponents(function(e){e.getType&&"dataset"===e.getType()&&e.createPinElem&&e.addEventListener("createpinelements",e.createPinElem)})};var n=o(118),i="|",a=function(e){e&&e.iterateComponents(function(e){"dataset"===e.getType()&&e.remove()})}},677:function(e,t,o){"use strict";t.__esModule=!0;var n=o(118),i=r(o(131)),a=r(o(120));function r(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var o=Object.getOwnPropertyNames(t),n=0;n<o.length;n++){var i=o[n],a=Object.getOwnPropertyDescriptor(t,i);a&&a.configurable&&e[i]===undefined&&Object.defineProperty(e,i,a)}}(e,t))}var c=Math,u=c.max,p=c.min,d=void 0,h=void 0,f=0,g=void 0,m=void 0,v="ontouchstart"in window,b=window.document,y={zoomlinedy:!0,zoomline:!0},x=function(e,t,o){return o.getFromEnv("animationManager").setAnimation({el:"group",attr:{name:e},container:t,state:"appearing",component:o,label:"group"})},C=function(e){var t,o,n,i={},a=Number.POSITIVE_INFINITY;for(t=0;t<this.length;t++)n=(o=this[t]-e)<0?h.NEG:h.POS,(o=Math.abs(o))<=a&&(a=o,i.absValue=o,i.noScaleSide=n);return i},w=function(e){return{onWindowTouch:function(t){var o,i=e.getLinkedParent(),a=e.config;if(i){if(o=(0,n.getMouseCoordinate)(i.getFromEnv("chart-container"),t,i.getFromEnv("chart")),i.isWithinCanvas(o.chartX,o.chartY))return;e.hide(),e.position=d,a.docEventOutput&&a.docEventOutput.unlisten(),a.docEventOutput=d}},onMouseOut:function(){e.hide(),e.position=d},onMouseMove:function(t){var o,i,r,s,l,c,u,p,d,h,f,g,m,y;e.disabled||e._mouseIsDown&&!v||(e.config.docEventOutput||(m=e.config.handlers.onWindowTouch,v?e.config.docEventOutput=a["default"].listen(b,"touchstart",m):n.isIE11&&(e.config.docEventOutput=a["default"].listen(b,"mousedown",m))),i=e.getZoomInfo(),r=e.getGraphicalElement("line"),s=i.step,c=(l=e.chart).getChildren("xAxis")[0],p=(u=l.get("config")).canvasLeft,d=c.getAxisConfig("axisDimention"),h=(0,n.getMouseCoordinate)(e.getFromEnv("chart-container"),t,l).chartX,f=c.getVisibleConfig(),g=d.x-p,y=(y=e.getDataIndexFromPixel(Math.round(h)))+((o=y%s)>s/2?s-o:-o),h=c.getPixel(y,{wrtVisible:!0})-g-p,h-=i.offset,r.transform(["T",Math.round(h),0]),e.hidden&&0!==u.crossline.enabled&&e.show(),(y<f.minValue||y>f.maxValue)&&e.hide(),(y!==e.position||e.hidden)&&(e.position=y,e.lineX=h,e.updateLabels()))}}},k=function(e){function t(){s(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this));return o.config.handlers=w(o),o}return l(t,e),t.prototype.configureAttributes=function(e){this.config.options=e},t.prototype.draw=function(){var e,t,o=void 0,i=void 0,a=void 0,r=void 0,s={},l=this.getFromEnv("chart"),c=l.getFromEnv()["number-formatter"],u=l.config,p=this.left=l.getChildren("xAxis")[0].getAxisConfig("axisDimention").x,d=this.top=u.canvasTop,h=this.height=u.canvasHeight,f=this._visout=u._visout,g=[],m=this.getFromEnv("animationManager"),v=void 0,b=this.getGraphicalElement("line"),y=this.config.options,C=y.labelstyle,w=y.valuestyle,k=l.getChildren("yAxis")[0],E=k.getLimit(),P=l.getChildren("yAxis")[1],M=P&&P.getLimit(),L=this.getGraphicalElement("labels"),_=[],T=void 0,O=this.getGraphicalElement("positionLabel"),N=this.getLinkedParent().getChildContainer("crosslineBottom"),S=this.getLinkedParent().getChildContainer("crosslineTop"),D=function(){this.remove()};if(l.iterateComponents(function(e){e.getType&&"dataset"===e.getType()&&!e.getState("removed")&&g.push(e)}),this.plots=g,this.width=u._visw,v=this.group,(v=this.getContainer("valueGroup"))||(v=this.addContainer("valueGroup",x("crossline-value-group",S,this))),(T=this.getContainer("labelGroup"))||(T=this.addContainer("labelGroup",x("crossline-label-group",S,this))).insertBefore(l.getChildContainer("plotGroup")),this.container=N,v.attr({transform:["T",p,u._ymin]}).css(w),e=m.setAnimation({el:b||"path",container:N,doNotRemove:!0,attr:(0,n.extend2)({path:["M",p,d,"l",0,h]},y.line)}).toBack(),b||this.addGraphicalElement("line",e,!1),y.labelEnabled&&(s.x=f,s.y=d+h+(u.scrollHeight||0)+2.5,s["vertical-align"]="top",s.direction=u.textDirection,s.text=""),t=m.setAnimation({el:O||"text",attr:y.labelEnabled&&s,css:y.labelEnabled&&C,container:T,doNotRemove:!0,callback:!y.labelEnabled&&function(){this.remove()}}),!O&&y.labelEnabled&&this.addGraphicalElement("positionLabel",t,!1),this.hide(),this.ppixelRatio=-k.config.axisDimention.axisLength/k.getVisibleLength(),this.spixelRatio=P&&-P.config.axisDimention.axisLength/P.getVisibleLength(),this.yminValue=u._yminValue,this.pyaxisminvalue=E.min,this.pyaxismaxvalue=E.max,this.syaxisminvalue=M&&M.min,this.syaxismaxvalue=M&&M.max,this.positionLabels=u.xlabels||{data:[],parsed:[]},this.chart=l,o=0,y.valueEnabled){for(i=g.length;o<i;o+=1)a=g[o],r=(0,n.hashify)(a.config.linecolor),s.x=0,s.y=f,s.fill=r,s.direction=u.textDirection,s.text="",s["text-bound"]=w["text-bound"],s.lineHeight=w.lineHeight,_[o]=m.setAnimation({el:L&&L[o]||"text",container:v,doNotRemove:!0,attr:s}),(!L||!L[o])&&this.addGraphicalElement("labels",_[o],!0);this.numberFormatter=c}for(i=L&&L.length;o<i;o++)m.setAnimation({el:L[o],component:this,doNotRemove:!0,callback:D});L&&L.splice(g.length)},t.prototype.getType=function(){return"crossline"},t.prototype.getName=function(){return"crossLine"},t.prototype.getZoomInfo=function(){return this.getFromEnv("chartConfig").viewPortConfig},t.prototype.getDataIndexFromPixel=function(e){var t=this.getFromEnv("chart").getChildren("xAxis")[0];return Math.round(t.getValue(e,{wrtVisible:!0}))},t.prototype.getPositionLabel=function(e){var t=this.getFromEnv("chart").getChildren("xAxis")[0].getLabel(e);return t&&t.label||""},t.prototype.disable=function(e){return e!==d&&(this.disabled=!!e,this.disabled&&this.visible&&this.hide()),this.disabled},t.prototype.updateLabels=function(){var e=this,t=e.getFromEnv("animationManager"),o=e.getGraphicalElement("labels"),n=e.getGraphicalElement("positionLabel"),i=e.plots,a=e.width,r=e.position,s=e.lineX,l=Math.floor(s),c=e.dummyText,v=e.numberFormatter,b=e.pyaxisminvalue,y=e.pyaxismaxvalue,x=e.syaxisminvalue,C=e.syaxismaxvalue,w=function(e){var t=e.yminValue,o=e.getFromEnv("chart").getChildren("yAxis")[0].getPixel(t),n=void 0,i={},a=void 0;h={},g=-1*e.height;try{Object.defineProperty(h,"POS",{enumerable:!1,configurable:!1,get:function(){return 1}}),Object.defineProperty(h,"NEG",{enumerable:!1,configurable:!1,get:function(){return-1}})}catch(r){h.POS=1,h.NEG=-1}try{Object.defineProperty(i,"top",{enumerable:!1,configurable:!1,get:function(){return g}}),Object.defineProperty(i,"bottom",{enumerable:!1,configurable:!1,get:function(){return o}})}catch(r){i.top=g,i.bottom=o}return i.init=function(e){var t;for(g+=(f=e+2)/2,a=Math.floor(Math.abs(g)/f),n=new P(a),t=0;t<a;t++)n.pos.push(0)},i.occupy=function(e,t){var o=Math.floor(Math.abs(g-e)/f);n&&n.attachShift(e,o,t)},i}(e);m=e._visout,o&&(c||(c=e.dummyText=e.getFromEnv("paper").text().hide()),c.attr({text:v.yAxis("0")}),c&&w.init(c.getBBox().height,o.length),o.forEach(function(t,o){if(!i[o].getState("removed")){var n,a=i[o],s=a.components.data[r]&&a.components.data[r].config.setValue,l=a.config.parentYAxis;n=s===d||!a.getState("visible")||(l?s>C||s<x:s>y||s<b)?m:l?(s-x)*e.spixelRatio:(s-b)*e.ppixelRatio,w.occupy(n,t)}})),o&&o.forEach(function(o,n){if(!i[n].getState("removed")){var c,h,f,g,m,b,y=i[n],x=y.components.data[r]&&y.components.data[r].config.setValue,C=v[y.config.parentYAxis?"sYAxis":"yAxis"](x);C?(o.attr({text:C}),g=(f=(h=(c=o.getBBox())&&c.width)&&.5*h)&&f+10,b=o.calcY,m=u(0,p(l,a)),b!==d&&m!==d&&t.setAnimation({el:o,attr:{x:m,y:b,"text-anchor":(s<=g?"start":s+g>=a&&"end")||"middle","text-bound":["rgba(255,255,255,0.8)","rgba(0,0,0,0.2)",1,2.5]},doNotRemove:!0,component:e})):o.attr({x:-a})}}),n&&t.setAnimation({el:n,attr:{x:s+e.left,text:e.getPositionLabel(r),"text-bound":["rgba(255,255,255,1)","rgba(0,0,0,1)",1,2.5]},component:e})},t.prototype.show=function(){if(!this.disabled){this.hidden=!1;var e=this.getContainer("valueGroup"),t=this.getGraphicalElement("positionLabel"),o=this.getGraphicalElement("line");e&&e.show(),t&&t.show(),o&&o.show()}},t.prototype.hide=function(){this.hidden=!0;var e=this.getContainer("valueGroup"),t=this.getGraphicalElement("positionLabel"),o=this.getGraphicalElement("line");e&&e.hide(),t&&t.hide(),o&&o.hide()},t.prototype.dispose=function(){var e;for(e in this)this.hasOwnProperty(e)&&delete this[e]},t}(i["default"]);var E=function(){function e(){s(this,e),this.y=0,this.lRef=d,this.__shift=0,this.__index=0}return e.prototype.applyShift=function(e){this.__shift=e,this.lRef.calcY=this.y+=e*f},e.prototype.applyDirectIndex=function(e){this.__index=e,this.lRef.calcY=this.y=g-e*f*-1},e}(),P=function(){function e(t){s(this,e),this.holes=[],this.pos=[];for(var o=0;o<t;o++)this.holes.push(o)}return e.prototype.repositionHoles=function(){var e,t=0,o=this.pos;for(this.holes.length=0,e=0;e<o.length;e++)!o[e]&&(this.holes[t++]=e)},e.prototype.attachShift=function(e,t,o){var n,i,a,r,s,l,c,u=this.pos,p=u.length;if(e!==m){if(n=u[l=t>p-1?p-1:t],(r=new E).y=e,r.lRef=o,!n)return r.applyDirectIndex(l),u.splice(l,1,r),void this.holes.splice(this.holes.indexOf(l),1);if(i=l+(c=C.call(this.holes,l)).absValue*c.noScaleSide,c.noScaleSide===h.POS)return r.applyDirectIndex(i),u.splice(i,1,r),this.holes.splice(this.holes.indexOf(i),1),i;if(c.noScaleSide===h.NEG){for(a=u.splice(i+1,u.length-1),u.pop(),a.forEach(function(e){e&&e.applyShift(-1)}),[].push.apply(u,a),s=i;u[s];)s++;return u.push(0),this.repositionHoles(),s+=(c=C.call(this.holes,s)).absValue*c.noScaleSide,r.applyDirectIndex(s),u.splice(s,1,r),this.repositionHoles(),u.length-1}}else o.calcY=m},e}();t["default"]={extension:function(e){e.addEventListener("instantiated",function(e){if("canvas"===e.sender.getName()){var t=e.sender,o=void 0,i=void 0,a=void 0;t.registerFactory("crossLineManager-zoomline",function(){var r=e.sender.getFromEnv("chart"),s=r&&r.getName(),l=void 0,c=void 0;if(s&&y[s.toLowerCase()])if((i=r.config.crossline)&&0!==i.enabled&&1===r.config.useCrossline?a=1:(i&&(i.enabled=0),a=0),(0,n.componentFactory)(t,k,"crossLine",a,[i]),a)c=t.getChildren("crossLine")[0],o=c.config.handlers,c.addExtEventListener("mousemove",o.onMouseMove,t),c.addExtEventListener("dragmove",function(e){var n=e.originalEvent,i=n.pageX||n.data[2];Math.abs(l-Math.round(i))<=2||(o.onMouseOut(e),c.removeExtEventListener("mousemove",o.onMouseMove,t))},t),c.addExtEventListener("dragstart",function(e){var t=e.originalEvent;l=Math.round(t.pageX||t.data[0])},t),c.addExtEventListener("dragend",function(){c.addExtEventListener("mousemove",o.onMouseMove,t)},t),c.addExtEventListener("mouseout",function(e){Math.abs(l-Math.round(e.originalEvent.pageX))<=2||o.onMouseOut(e)},t),c.addExtEventListener("touchstart",o.onMouseMove,t);else if(v&&o){var u=c.config;u.docEventOutput&&u.docEventOutput.unlisten(),u.docEventOutput=d}})}})},name:"crossline-manager",type:"extension",requiresFusionCharts:!0}}}])});
//# sourceMappingURL=http://localhost:3052/3.13.1-sr.2/map/eval/fusioncharts.zoomline.js.map