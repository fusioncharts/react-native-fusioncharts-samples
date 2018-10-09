import{stubFN,pluckNumber,pluck,toRaphaelColor,dehashify,hashify,isIE}from'../../lib/lib';import{convertColor,getLightColor,getValidColor}from'../../lib/lib-graphics';import ComponentInterface from'../../../core/component-interface';let UNDEF,legendManager,toolTipController,gLegendRef,compositionKeys={},TRACKER_FILL='rgba(192,192,192,'+(isIE?.002:1e-6)+')',FORMER_SLIDER_INDEX=!1,LATER_SLIDER_INDEX=!0,PERCENT_STR='%',COMMA_STR=',',DEF_COLOR='#000000',hasOwnProp={}.hasOwnProperty,M='M',L='L';function merge(e,t){return function e(t,o){var n,i;for(i in t)hasOwnProp.call(t,i)&&(n=t[i],o[i]===UNDEF?o[i]=n:'object'==typeof n&&null!==n&&e(n,o[i]))}(e,t),t}function getValidHexColor(e){return getValidColor(e||DEF_COLOR)||DEF_COLOR}function getOppositeColor(e){return getLightColor(e,1)}function normalizeFontSizeAppend(e){var t,o=e.fontSize+'';return o?(t=o.replace(/(\d+)(px)*/,'$1px'),e.fontSize=t,e):e}function isInvalid(e){return!!(e===UNDEF||'undefined'==typeof e||null===e||isNaN(e))}compositionKeys.CAPTION='CAPTION',compositionKeys.LEGEND_BODY='LEGEND_BODY',compositionKeys.AXIS_LABEL='LEGEND_LABEL',compositionKeys.LEGEND_AXIS='LEGEND_AXIS',compositionKeys.RANGE='RANGE',compositionKeys.AXIS_VALUE='AXIS_VALUE',legendManager=function(){function e(e){var o,n,i,a=t.getFromEnv('number-formatter');for(o=0,n=e.length;o<n;o++)(i=e[o].maxvalue,!!i)&&(e[o].maxvalue=a.getCleanValue(i))}var t,o={};return o.legendCarpetConf={spreadFactor:.85,allowDrag:!1,captionAlignment:'center',padding:{v:3,h:3},style:{fill:'#e4d9c1',stroke:'#c4b89d'}},o.legendCaptionConf={spreadFactor:.2,padding:{v:2,h:2},style:{fill:'#786B50',fontFamily:'sans-serif',fontSize:'12px',fontWeight:'bold',fontStyle:'normal'},bound:{style:{stroke:'none'}}},o.legendBodyConf={spreadFactor:.8,padding:{v:2,h:2},bound:{style:{stroke:'none'}}},o.legendAxisConf={legendAxisHeight:11,spreadFactor:.4,padding:{v:1,h:1},style:{stroke:'none',"stroke-opacity":0,"stroke-width":1},line:{grooveLength:3,offset:8,style:{stroke:'rgba(255, 255, 255, 0.65)',"stroke-width":1.5}},shadow:{style:{stroke:'none',fill:toRaphaelColor({FCcolor:{alpha:'25,0,0',angle:360,color:'000000,FFFFFF,FFFFFF',ratio:'0,30,40'}})}},bound:{style:{stroke:'none'}}},o.sliderGroupConf={showTooltip:1,outerCircle:{rFactor:1.4,style:{fill:TRACKER_FILL,stroke:'#757575',"stroke-width":3}},innerCircle:{rFactor:.65,style:{fill:TRACKER_FILL,stroke:'#FFFFFF'}}},o.axisTextItemConf={spreadFactor:.3,padding:{v:1,h:1},style:{fill:'#786B50',fontFamily:'sans-serif',fontSize:'12px',fontWeight:'normal',fontStyle:'normal'}},{init:function(e){t=e.chart},legacyDataParser:function(o,n){var i,a,r,l,d,g,s,c,h,p,m,u,f={},x=t.getFromEnv('number-formatter');if(!o)return!1;for(f.mapByPercent=m=!!pluckNumber(o.mapbypercent,0),i=o.color||[],o.minvalue===UNDEF&&(o.minvalue=n.min===UNDEF?0:m?0:n.min),o.maxvalue===UNDEF&&(o.maxvalue=n.max===UNDEF?100:m?100:n.max),u=!1,(d=0,s=i.length);d<s;d++)if(i[d].maxvalue){u=!0;break}for(u||(i=[]),r=o.code,c=f.colorRange=[],f.gradient=!!pluckNumber(o.gradient,1),i.length?r=getValidHexColor(r):(r?(l=getValidHexColor(r),r=getValidHexColor()):(r=getValidHexColor(),l=getOppositeColor(r)),i.push({code:l,maxvalue:o.maxvalue,label:UNDEF})),e(i),i=i.sort(function(e,t){return e.maxvalue-t.maxvalue}),h=p=o.minvalue&&x.getCleanValue(o.minvalue),p=(h!==UNDEF||null!==h)&&(m?h+PERCENT_STR:x.legendValue(h)),c.push({code:dehashify(r),value:h,displayValue:p,label:o.startlabel}),(d=0,s=i.length);d<s;d++)(a=i[d],g=getValidHexColor(a.code||a.color),h=p=a.maxvalue,!isNaN(parseInt(h,10)))&&(p=(h!==UNDEF||null!==h)&&(m?h+PERCENT_STR:x.legendValue(h)),c.push({code:dehashify(g),value:h,displayValue:p,label:a.label||a.displayvalue}));return c[c.length-1].label=o.endlabel||a.label,f},getDefaultConf:function(e){return o[e]}}}();class GLegend extends ComponentInterface{getType(){return'gradientLegend'}getName(){return'gLegend'}constructor(){super(),gLegendRef=this,this.enabled=!1,this.drawOptions={},this.components={}}setColorRange(e){let t=this.drawOptions.colorRange=e;t&&t._preparationGoneWrong&&(this._dontPlot=!0)}configureAttributes(){var e,t,o,n,i,a,r,l,d,g,s=this,c=s.getFromEnv('chart'),h=s.getFromEnv('dataSource').chart,p=s.conf={},m=h.outcnvbasefont,u=h.outcnvbasefontsize,f=h.outcnvbasefontcolor,x=c.config.dataLabelStyle;legendManager.init({chart:c}),s.data=s.getFromEnv('dataSource').colorrange;s._dontPlot||(s.drawOptions={smartLabel:s.getFromEnv('smartLabel'),gLegend:s},s._dontPlot=!1,s._recalculateLogicalSpace=!0,toolTipController=s.getFromEnv('toolTipController'),p.caption=pluck(h.legendcaption),p.legendPosition=pluck(h.legendposition,'bottom').toLowerCase(),p.showLegend=pluckNumber(h.showlegend,1),p.interactiveLegend=pluckNumber(h.interactivelegend,1),p.showLegendLabels=pluckNumber(h.showlegendlabels,1),e=h.legenditemfontcolor||f,t=h.legenditemfont||m,o=h.legenditemfontsize||u,n=pluckNumber(h.legenditemfontbold,0),i=h.legendcaptionfontcolor||f,a=h.legendcaptionfont||m,r=h.legendcaptionfontsize||u,l=pluckNumber(h.legendcaptionfontbold,1),d=h.legendaxisbordercolor?hashify(dehashify(h.legendaxisbordercolor)):UNDEF,g=d?pluckNumber(h.legendaxisborderalpha,100)/100:UNDEF,p.axisTextItemConf={style:{fill:e?convertColor(pluck(e)):x.color,fontFamily:t?pluck(t):x.fontFamily,fontSize:o?pluckNumber(o):x.fontSize.match(/\d+/)[0],fontWeight:n?'bold':x.fontWeight}},p.legendCaptionConf={style:{fill:i?convertColor(pluck(i)):x.color,fontFamily:a?pluck(a):x.fontFamily,fontSize:r?pluckNumber(r):x.fontSize.match(/\d+/)[0],fontWeight:l?'bold':x.fontWeight,fontStyle:'normal'}},p.legendAxisConf={legendAxisHeight:11,style:{stroke:d,"stroke-opacity":g},line:{style:{stroke:convertColor(pluck(h.legendscalelinecolor,'FFF8E9'),pluckNumber(h.legendscalelinealpha,100)),"stroke-width":pluckNumber(h.legendscalelinethickness)}}},p.sliderGroupConf={showTooltip:pluckNumber(h.showtooltip,1),outerCircle:{rFactor:pluckNumber(h.sliderdiameterfactor),style:{stroke:convertColor(pluck(h.legendpointerbordercolor,'757575'),pluckNumber(h.legendpointerborderalpha,100))}},innerCircle:{rFactor:pluckNumber(h.sliderholediameterfactor),style:{stroke:convertColor(pluck(h.legendpointercolor,'FFFFFF'),pluckNumber(h.legendpointeralpha,100))}}},p.legendCarpetConf={spreadFactor:pluckNumber(h.legendspreadfactor),allowDrag:!!pluckNumber(h.legendallowdrag,0),captionAlignment:pluck(h.legendcaptionalignment,'center'),style:{fill:convertColor(pluck(h.legendbgcolor,'e4d9c1'),pluckNumber(h.legendbgalpha,100)),stroke:convertColor(pluck(h.legendbordercolor,'c4b89d'),pluckNumber(h.legendborderalpha,100)),"stroke-width":pluckNumber(h.legendborderthickness,1)}})}postConfigureInit(){var e,t,o,n,i,a,r,l,d,g,s,c,h=this,p=h.conf;h.elem={},p.interactiveLegend?(i=merge(legendManager.getDefaultConf('sliderGroupConf'),p.sliderGroupConf),this.sGroup?(n=h.elem.sGroup=this.sGroup,n.configure(i),h.elem.sGroup.gLegend=h):(this.sGroup=h.elem.sGroup=n=new SliderGroup(i),n.configure(i),h.elem.sGroup.gLegend=h)):(this.sGroup&&this.sGroup.dispose(),this.sGroup&&delete this.sGroup),i=merge(legendManager.getDefaultConf('legendCarpetConf'),p.legendCarpetConf),i.legendPosition=p.legendPosition,c=legendManager.getDefaultConf('legendBodyConf'),'bottom'===p.legendPosition?(h.drawOptions.refSideKey='canvasWidth',h.drawOptions.refOffsetKey='canvasLeft',a=merge(legendManager.getDefaultConf('axisTextItemConf'),p.axisTextItemConf),c.legendPosition='bottom',s=merge(legendManager.getDefaultConf('legendAxisConf'),p.legendAxisConf),s.legendPosition='bottom',a.legendPosition='bottom'):(h.drawOptions.refSideKey='canvasHeight',h.drawOptions.refOffsetKey='canvasTop',a=merge(legendManager.getDefaultConf('axisTextItemConf'),p.axisTextItemConf),c.legendPosition='right',s=merge(legendManager.getDefaultConf('legendAxisConf'),p.legendAxisConf),s.legendPosition='right',a.legendPosition='right'),Object.keys(this.components).length||(this.components.LegendCarpet=new LegendCarpet,this.components.LegendBody=new LegendBody,this.components.LegendAxis=new LegendAxis,this.components.LegendValues=new LegendValues,p.showLegendLabels&&(this.components.LegendLabels=new LegendLabels)),o=this.components.LegendAxis,d=this.components.LegendValues,t=this.components.LegendCarpet,r=this.components.LegendBody,p.showLegendLabels&&(l=this.components.LegendLabels),this.components.LegendCarpet.configure(i),this.components.LegendValues.configure(a),this.components.LegendAxis.configure(s),this.components.LegendBody.configure(h.drawOptions.colorRange,c,a),p.showLegendLabels&&l.configure(a),p.caption?(g=merge(legendManager.getDefaultConf('legendCaptionConf'),p.legendCaptionConf),this.componentCaption&&Object.keys(this.componentCaption).length?this.componentCaption.configure(p.caption,g):(e=this.componentCaption=new LegendCaption,e.configure(p.caption,g)),t.addCompositions(this.componentCaption,compositionKeys.CAPTION)):(t.removeCompositions(compositionKeys.CAPTION),this.componentCaption&&this.componentCaption.dispose(),delete this.componentCaption),n&&o.addCompositions(n,compositionKeys.RANGE),l&&r.addCompositions(l,compositionKeys.AXIS_LABEL),r.addCompositions(o,compositionKeys.LEGEND_AXIS),r.addCompositions(d,compositionKeys.AXIS_VALUE),t.addCompositions(r,compositionKeys.LEGEND_BODY),h.elem.gl=new LegendBase(t)}getValueRange(){var e,t,o=this,n=o.elem&&o.elem.sGroup,i=n.sliders,a=n.extremes;return e=i['false'].currPos,t=a[1]-a[0]+i['true'].currPos,[{min:n.getValueFormPixel(e),max:n.getValueFormPixel(t)}]}_dispose(){var e=this;e.elem&&e.elem.gl&&e.elem.gl.dispose(),e.elem={},super._dispose()}getCalculatedLogicalSpace(){return this._logicalArea}setCalculatedLogicalSpace(e){this._logicalArea=e}getLogicalSpace(e){var t,o,n,i=this,a=i.conf,r={height:0,width:0},l=i.drawOptions,d=i.getFromEnv('chartConfig');return i._recalculateLogicalSpace?i._dontPlot?r:(i._recalculateLogicalSpace=!1,i.postConfigureInit(),!a.showLegend)?r:(o=l.refSideKey,n=l.refOffsetKey,i.drawOptions.refSide=d[o],i.drawOptions.refOffset=d[n],i.drawOptions.maxOtherSide=e||i.drawOptions.maxOtherSide,i.elem.gl&&(t=i.elem.gl.getLogicalSpace(i.drawOptions,!0),i.elem.gl&&i.setCalculatedLogicalSpace(t)),i.getCalculatedLogicalSpace()):(o=l.refSideKey,n=l.refOffsetKey,i.drawOptions.refSide=d[o],i.drawOptions.refOffset=d[n],i.drawOptions.maxOtherSide=e||i.drawOptions.maxOtherSide,t=i.elem.gl.getLogicalSpace(i.drawOptions,!0),i.setCalculatedLogicalSpace(t),i.getCalculatedLogicalSpace()||r)}resetLegend(){var e,t=this;e=t.elem&&t.elem.sGroup,e&&e.reset()}allocatePosition(){var e,t,o,n,i,a,r=this.getFromEnv('chart'),l=r.config,d=this,g=d.conf||{},s=g.legendPosition,c=l.canvasLeft,h=l.canvasTop,p=l.canvasWidth,m=l.canvasHeight,u=l.marginBottom,f=l.marginRight;r.config.gLegendEnabled&&(e=this.getCalculatedLogicalSpace(),o=g.width=e.width,n=g.height=e.height,'bottom'===s?(t=p-o,i=c+(0>t?0:t/2),a=l.height-e.height-u-(l.actionBarHeight||0)):(t=m-n,a=h+(0>t?0:t/2),i=l.width-e.width-f),g.xPos=i,g.yPos=a)}draw(){var e=this.getFromEnv('chart'),t=e.getFromEnv('dataSource').colorrange,o=this,n=o.conf||{},i=e.hasGradientLegend;!e.config.gLegendEnabled||t&&i&&o.drawLegendComponent(n.xPos,n.yPos,{parentGroup:e.getContainer('parentgroup'),animationManager:e.getFromEnv('animationManager')})}drawLegendComponent(e,t,o){var n,i,a=this,r=a.conf;return a._dontPlot?void 0:r.showLegend?void(a.drawOptions.animationManager=o.animationManager,a.drawOptions.parentGroup=o.parentGroup,a.drawOptions.x=e,a.drawOptions.y=t,a.drawOptions.maxOtherSide=a.drawOptions.maxOtherSide||o.maxOtherSide,i=a.elem.gl.draw(a.drawOptions),n=i.getBBox(),r.xPos=n.x,r.yPos=n.y,r.height=n.height,r.width=n.width,a.enabled=!0):void(a.enabled=!1)}}class LegendBase{constructor(e){this.carpet=e}draw(e){return this.carpet.draw(e)}getLogicalSpace(e,t){return this.carpet.getLogicalSpace(e,t)}dispose(){this.carpet&&this.carpet.group&&this.carpet.group.remove()}}class LegendCarpet{constructor(e){this.conf=e,this._id='GL_CARPET',this.compositionsByCategory={},this.node=UNDEF,this.group=UNDEF,this._lSpace=UNDEF,this.autoRecalculate=!1,this.groupName='fc-gradient-legend',this.moveInstructions={}}configure(e){this.conf=e}getName(){return'LegendCarpet'}getType(){return'legend'}addCompositions(e,t){this.compositionsByCategory[t]=e}removeCompositions(e){delete this.compositionsByCategory[e]}getBoundingBox(e){var t,o,n=this.conf,i=n.spreadFactor,a=e.refSide,r=e.alignment,l=e.refOffset,d=e.x,g=e.y;return'bottom'===this.conf.legendPosition?(t=n.width=a*i,o=e.maxOtherSide,r&&(d===UNDEF||null===d)&&(d=(l+a)/2-t/2)):(o=n.height=a*i,t=e.maxOtherSide,r&&(g===UNDEF||null===g)&&(g=(l+a)/2-o/2)),{width:t,height:o,x:d,y:g}}getPostCalcDecisionsH(e,t){var o,n=this.conf,i=n.padding,a=0;for(o in this.moveInstructions={},t)a+=t[o].height||0;e.height=a+2*i.v}getLogicalSpace(e,t){var o,n,a,r,l,i=this._lSpace,d=['CAPTION','LEGEND_BODY'],g=this.conf,s=g.padding,c=this.compositionsByCategory,h=0,p={},m=0;if(i&&!t)return i.isImpure=!0,i;i=this._lSpace=n=this.getBoundingBox(e),(isInvalid(i.x)||isInvalid(i.y)||isInvalid(i.height)||isInvalid(i.width))&&(this.autoRecalculate=!0),a=merge(n,{}),a.height-=2*s.v,a.width-=2*s.h,a.x+=s.h,a.y+=s.v;for(let n=0;n<d.length;n++)o=c[d[n]],o&&(l=merge(a,{}),l.y+=h,h=a.height*o.conf.spreadFactor,l.height=h+m,r=o.getLogicalSpace(merge(l,{}),e,t),m=l.height-r.height,p[d[n]]=r,h=r.height);return this.getPostCalcDecisions(n,p),this._lSpace=n,n}setupDragging(){var e=this.group,t=0,o=0,n=0,i=0;e.css({cursor:'move'}),e.drag(function(a,r){t=a,o=r,e.attr({transform:'t'+(n+t)+','+(i+o)})},function(){n+=t,i+=o},stubFN)}draw(e){var t,o,n,a,r=this.conf,i=this,l=['CAPTION','LEGEND_BODY'],d=this.compositionsByCategory,g=e.animationManager,s=e.parentGroup;this.getLogicalSpace(e,this.autoRecalculate),a=this._lSpace,this.group=t=g.setAnimation({el:this.group||'group',attr:{name:i.groupName},component:gLegendRef,container:s,label:'carpetGroup'}),this.node=g.setAnimation({el:this.node||'rect',attr:a,css:r.style,component:gLegendRef,container:t,label:'rect'});for(let s=0;s<l.length;s++)n=d[l[s]],n&&n.draw(r.captionAlignment,a,{animationManager:g,colorRange:e.colorRange,numberFormatter:e.numberFormatter,parentLayer:t,smartLabel:e.smartLabel,moveInstructions:this.moveInstructions[o],gLegend:e.gLegend});return r.allowDrag&&this.setupDragging(),this.node}getPostCalcDecisions(e,t){return'bottom'===this.conf.legendPosition?this.getPostCalcDecisionsH(e,t):this.getPostCalcDecisionsV(e,t)}getPostCalcDecisionsV(e,t){var o,n,i,a=this.conf,r=a.padding,l=Number.NEGATIVE_INFINITY,d=this.moveInstructions;for(n in this.getPostCalcDecisionsH(e,t),t)o=t[n].width,l=l<o?o:l;for(n in e.width=l+2*r.h,t)o=t[n].width,i=l-o,i&&(d[n]='t'+i/2+',0')}}class LegendCaption{constructor(e,t){this.rawText=e,this.conf=t,this._id='GL_CAPTION',this.node=UNDEF,this.bound=UNDEF,this._lSpace=UNDEF,this.LegendCaption={},this.LegendCaption.LEFT={x:function(e,t){return t.x+e.width/2+2}},this.LegendCaption.RIGHT={x:function(e,t){return t.x+t.width-e.width/2-2}},this.LegendCaption.CENTER={x:function(){let e=arguments[1];return e.x+e.width/2}}}configure(e,t){this.rawText=e,this.conf=t}getName(){return'LegendCaption'}getType(){return'caption'}getLogicalSpace(e,t,o){var n,i,a,r,l=this.conf,d=l.padding,g=this._lSpace,s=this.rawText,c=t.gLegend.getFromEnv('chartConfig');return g&&!o?(g.isImpure=!0,g):(g=this._lSpace={bound:{height:0,width:0},node:{logicArea:UNDEF,smartText:UNDEF}},n=t.smartLabel,!s)?g.bound:(i=merge(e,{}),i.height-=2*d.v,i.width-=2*d.h,i.x+=d.h,i.y+=d.v,n.useEllipsesOnOverflow(c.useEllipsesWhenOverflow),r=merge(this.conf.style,{}),normalizeFontSizeAppend(r),n.setStyle(this._metaStyle=r),a=n.getSmartText(s,i.width,i.height),i.height=a.height,i.width=a.width,e.height=a.height+2*d.v,e.width=a.width+2*d.h,g.node.smartText=a,g.node.logicArea=i,g.bound=e,e)}draw(){var e,t,o,n,i,a,r,l,d,g,s,c=this.conf,h=c.bound||{};return 3<=arguments.length?(r=arguments[0],l=arguments[1],d=arguments[2]):2<=arguments.length&&(r=arguments[0],d=arguments[1]),e=d.parentLayer,s=d.animationManager,this.group=t=s.setAnimation({el:this.group||'group',attr:{name:'legend-caption'},css:c.style,component:gLegendRef,container:e}),this.getLogicalSpace(l,d),i=this._lSpace,g=i.node,n=i.bound,this.bound=o=s.setAnimation({el:this.bound||'rect',attr:n,css:h.style,container:t,component:gLegendRef}),a='string'==typeof r?this.LegendCaption[r.toUpperCase()].x(g.smartText,l||g.logicArea):r,this.node=s.setAnimation({el:this.node||'text',attr:{text:g.smartText.text,x:a,y:g.logicArea.y+g.smartText.height/2,lineHeight:this._metaStyle.lineHeight,fill:c.style.fill},container:t,component:gLegendRef}),{group:t,bound:o,node:this.node}}dispose(){this.group.remove(),this.bound.remove(),this.node.remove()}}class LegendBody{constructor(e,t,o){this.colorRange=e,this.conf=t,this.childTextConf=o,this._id='GL_BODY',this.bound=UNDEF,this.group=UNDEF,this.compositionsByCategory={},this._lSpace=UNDEF,this.SC_STACK=[compositionKeys.AXIS_LABEL,compositionKeys.LEGEND_AXIS,compositionKeys.AXIS_VALUE],this.DARW_STACK=[compositionKeys.AXIS_VALUE,compositionKeys.LEGEND_AXIS,compositionKeys.AXIS_LABEL]}configure(e,t,o){this.colorRange=e,this.conf=t,this.childTextConf=o,this.compositionsByCategory={}}getName(){return'LegendBody'}getType(){return'legend'}addCompositions(e,t){this.compositionsByCategory[t]=e}getSpaceTaken(e){return'bottom'===this.conf.legendPosition?e.height:e.width}getLogicalSpace(e,t,o){var n,i,a,r,l,d,g,s=this._lSpace,c=this.conf,h=c.padding,p=this.compositionsByCategory,m=0;if(s&&!o)return s.isImpure=!0,s;for(s=this._lSpace={bound:{height:0,width:0},node:{logicArea:UNDEF}},r=merge(e,{}),r.height-=2*h.v,r.width-=2*h.h,r.x+=h.h,r.y+=h.v,l=this.getCompositionPlotAreaFor(r),t.colorRange=this.colorRange,(d=0,g=this.SC_STACK.length);d<g;d++)(n=p[this.SC_STACK[d]])&&(i=l(a,n.conf.spreadFactor),a=n.getLogicalSpace(merge(i,{}),t,o),m+=this.getSpaceTaken(a));return this.updateEffectivePlotArea(e,r,m),s.node.logicArea=r,s.bound=e,e}draw(){var e,t,o,n,i,a,r,l,d,g,s=this.childTextConf,c=this.conf,h=c.bound.style||{},p=this.compositionsByCategory;for(3<=arguments.length?(a=arguments[1],l=arguments[2]):2<=arguments.length&&(l=arguments[1]),t=l.parentLayer,e=l.animationManager,this.getLogicalSpace(a,l),r=this._lSpace,this.group=i=e.setAnimation({el:this.group||'group',attr:{name:'legend-body',transform:'t0,0'},css:s.style,container:t,component:gLegendRef}),this.bound=o=e.setAnimation({el:this.bound||'rect',attr:r.bound,css:h,container:i,component:gLegendRef}),l.colorRange=this.colorRange,l.parentLayer=i,(d=0,g=this.DARW_STACK.length);d<g;d++)(n=p[this.DARW_STACK[d]])&&n.draw(l);return l.moveInstructions&&i.attr({transform:l.moveInstructions}),{bound:o,group:i}}getCompositionPlotAreaFor(e){var t,o='bottom'===this.conf.legendPosition;return t=merge(e,{}),function(n,i){return n=n||{},o?(t.y+=n.height||0,t.height=e.height*i):(t.x+=n.width||0,t.width=e.width*i),t}}updateEffectivePlotArea(e,t,o){var n=this.conf,i=n.padding;'bottom'===this.conf.legendPosition?(t.height=o,e.height=o+2*i.v):(t.width=o,e.width=o+2*i.h)}}class LegendLabels{constructor(e){this.conf=e,this.node=[],this._id='GL_LABELS'}configure(e){this.conf=e}getType(){return'label'}getName(){return'LegendLabel'}getEffectivePlotArea(e){var t=this.conf,o=t.padding;return e.height-=2*o.v,e.width-=2*o.h,e.x+=o.h,e.y+=o.v,e}getLogicalSpace(e,t,o){var n,i,a,r,l,d,g,s,c,h,p,m,u,f,x,y,w,C,L,S,b,v,_,F=Math.max,A='bottom'===this.conf.legendPosition,E=this._lSpace,P=this.conf,I=P.padding,R=[],O=t.gLegend.getFromEnv('chartConfig'),T=[];if(E&&!o)return E.isImpure=!0,E;for(n=t.colorRange,i=t.smartLabel,h=n.getCumulativeValueRatio(),a=n.colorRange,E=this._lSpace={bound:{height:0,width:0},node:{logicArea:UNDEF,smartTexts:[]}},u=E.node.smartTexts,s=merge(e,{}),x=this.getEffectivePlotArea(s),_=A?x.width:x.height,i.useEllipsesOnOverflow(O.useEllipsesWhenOverflow),v=merge(P.style,{}),normalizeFontSizeAppend(this._metaStyle=v),i.setStyle(v),y=i.getSmartText('W'),(r=0,l=a.length);r<l;r++){if(c=a[r].label,!c){u[r]=UNDEF;continue}T.push({oriIndex:r,label:c})}if(l=T.length,0===l)return{height:0,width:0};for(p=1<l?(h[T[l-1].oriIndex]-h[T[0].oriIndex])/2*_/100:F(h[T[0].oriIndex],100-h[T[0].oriIndex])/2*_/100,m=p,A?(S=i.getSmartText(T[0].label,m,x.height),S.x=h[T[0].oriIndex]*x.width/100,d=S.x+S.width):(S=i.getSmartText(T[0].label,m,x.width),S.y=h[T[0].oriIndex]*x.height/100,d=S.y+S.width),R.push(S.height),u[T[0].oriIndex]=S,A?(S=i.getSmartText(T[l-1].label,m,x.height),S.x=h[T[l-1].oriIndex]*x.width/100,g=S.x-S.width):(S=i.getSmartText(T[l-1].label,m,x.width),S.y=h[T[l-1].oriIndex]*x.height/100,g=S.y-S.width),R.push(S.height),u[T[l-1].oriIndex]=S,L=d,r=1;r<l-1;r++)c=T[r].label,b=T[r].oriIndex,S=UNDEF,w=r+1===l-1?g:h[T[r+1].oriIndex]*_/100,C=h[T[r].oriIndex]*_/100,p=Math.min(C-L,w-C),p>2*y.width&&(A?(S=i.getSmartText(c,p,x.height),S.x=h[b]*x.width/100):(S=i.getSmartText(c,p,x.width),S.y=h[b]*x.height/100),L=p,R.push(S.height)),u[T[r].oriIndex]=S;return f=F.apply(Math,R),A?(x.height=f,e.height=f+2*I.v):(x.width=f,e.width=f+2*I.v),E.node.logicArea=x,E.bound=e,e}draw(){var e,t,o,n,i,a,r,l,d,g,s,c,h='bottom'===this.conf.legendPosition,p=this.conf,m=p.bound&&p.bound.style||{stroke:'none'},u={};2<=arguments.length&&arguments[1]?(n=arguments[0],r=arguments[1]):1<=arguments.length&&(r=arguments[0]),c=r.animationManager,e=r.parentLayer,this.getLogicalSpace(n,r),a=this._lSpace,d=a.node.logicArea,g=a.node.smartTexts,this.group=o=c.setAnimation({el:this.group||'group',attr:{name:'legend-labels'},container:e,component:gLegendRef}),this.bound=t=c.setAnimation({el:this.bound||'rect',attr:a.bound,css:m,container:o,component:gLegendRef});for(let e=0;e<this.node.length;e++)this.node[e].remove();for(this.node=[],l=0,s=g.length;l<s;l++)(i=g[l],!!i)&&(h?(u.y=d.y+i.height/2,u.x=l===s-1?d.x+i.x-i.width/2:l?d.x+i.x:d.x+i.x+i.width/2):(u.x=d.x+i.height/2,u.y=l===s-1?d.y+i.y-i.width/2:l?d.y+i.y:d.y+i.y+i.width/2),this.node.push(c.setAnimation({el:'text',attr:{text:i.text,x:u.x,y:u.y,lineHeight:this._metaStyle.lineHeight,fill:p.style.fill,transform:h?'R0':'R270,'+u.x+','+u.y},container:o,component:gLegendRef})));return{group:o,bound:t,node:this.node}}}class LegendAxis{constructor(e){this.conf=e,this._id='FL_AXIS',this.node=UNDEF,this.group=UNDEF,this.shadow=UNDEF,this.markerLine=UNDEF,this.compositionsByCategory={}}configure(e){this.conf=e}getName(){return'LegendAxis'}getType(){return'axis'}addCompositions(e,t){this.compositionsByCategory[t]=e}getLogicalSpace(){var e,t,o,n,i,a,r,l='bottom'===this.conf.legendPosition,d=arguments[0],g=arguments[2],s=this._lSpace,c=this.conf,h=c.padding,p=c.legendAxisHeight,m=this.compositionsByCategory,u=0;return s&&!g?(s.isImpure=!0,s):(s=this._lSpace={bound:{height:0,width:0},node:{logicArea:UNDEF}},i=merge(d,{}),i.height-=2*h.v,i.width-=2*h.h,i.x+=h.h,i.y+=h.v,e=p/2+c.line.offset,t=p/2,n=m[compositionKeys.RANGE],n&&(a=n.sliders['false'],r=a.conf.outerCircle.rFactor*p,t+=u=Math.max(r/2-p/2,0)),l?(i.y+=u,i.height=o=t+e+u,d.height=o+2*h.v):(i.x+=u,i.width=o=t+e+u,d.width=o+2*h.v),s.node.logicArea=i,s.bound=d,d)}getDrawableAxisArea(e){var t=this.conf,o='bottom'===this.conf.legendPosition,n=e.x,i=e.y,a=o?e.width:t.legendAxisHeight,l=o?t.legendAxisHeight:e.height,d=t.legendAxisHeight/2;return{x:n,y:i,width:a,height:l,r:d}}preDrawingRangeParamV(e){var t=e.x+e.width/2,o=e.width;return{x:t,calculationBase:o,rangeStart:e.y,rangeEnd:e.y+e.height,prop:'x'}}preDrawingRangeParamH(e){var t=e.y+e.height/2,o=e.height;return{y:t,calculationBase:o,rangeStart:e.x,rangeEnd:e.x+e.width,prop:'y'}}preDrawingRangeParam(e){return'bottom'===this.conf.legendPosition?this.preDrawingRangeParamH(e):this.preDrawingRangeParamV(e)}getScaleMarkerPathStrH(e,t){var o,n,i,a,r,l=merge(e,{}),d=this.conf,g=d.line,s='',c='';for(l.x+=l.r,l.width-=2*l.r,r=l.y+l.height,(o=0,n=t.length);o<n;o++)i=t[o],a=l.x+i*l.width/100,s+=M+a+COMMA_STR+(r-g.grooveLength)+L+a+COMMA_STR+(r+g.offset);return c+=M+l.x+COMMA_STR+(r+g.offset)+L+(l.x+l.width)+COMMA_STR+(r+g.offset),s+c}getColorGradientH(e){return{axis:e.getBoxFill(),shadow:toRaphaelColor({FCcolor:{alpha:'25,0,0',angle:90,color:'000000,FFFFFF,FFFFFF',ratio:'0,30,40'}})}}draw(){var e,t,o,n,i,a,r,l,d,g,s,c,h,p,m=this.conf,u=m.bound||{},f=m.line,x=u.style||{},y=this.compositionsByCategory;for(o in 2<=arguments.length?(t=arguments[0],c=arguments[1]):1<=arguments.length&&(c=arguments[0]),h=c.animationManager,e=c.parentLayer,n=c.colorRange,i=n.getCumulativeValueRatio(),this.getLogicalSpace(t,c),s=this._lSpace,this.group=r=h.setAnimation({el:this.group||'group',attr:{name:'legend-axis'},container:e,component:gLegendRef}),this.bound=h.setAnimation({el:this.bound||'rect',attr:s.bound,css:x,component:gLegendRef,container:r}),g=this.getDrawableAxisArea(s.node.logicArea),d=this.getColorGradient(n),m.style.fill=d.axis,m.shadow.style.fill=d.shadow,this.node=h.setAnimation({el:this.node||'rect',attr:g,css:m.style,container:r,component:gLegendRef}),this.shadow=h.setAnimation({el:this.shadow||'rect',attr:g,css:m.shadow.style,container:r,component:gLegendRef}),p=this.getScaleMarkerPathStr(g,i),this.path=h.setAnimation({el:this.path||'path',attr:{path:p},css:f.style,container:r,component:gLegendRef}),y)a=y[o],o===compositionKeys.RANGE?(l=this.preDrawingRangeParam(g),c[l.prop]=l[l.prop],c.key=l.prop,c.rCalcBase=l.calculationBase,c.parentLayer=r,a.draw(l.rangeStart,l.rangeEnd,c)):void 0}getScaleMarkerPathStr(e,t){return'bottom'===this.conf.legendPosition?this.getScaleMarkerPathStrH(e,t):this.getScaleMarkerPathStrV(e,t)}getColorGradient(e){return'bottom'===this.conf.legendPosition?this.getColorGradientH(e):this.getColorGradientV(e)}getScaleMarkerPathStrV(e,t){var o,n,i,a,r,l=merge(e,{}),d=this.conf,g=d.line,s='',c='';for(l.y+=l.r,l.height-=2*l.r,a=l.x+l.width,(o=0,i=t.length);o<i;o++)n=t[o],r=l.y+n*l.height/100,s+=M+(a-g.grooveLength)+COMMA_STR+r+L+(a+g.offset)+COMMA_STR+r;return c+=M+(a+g.offset)+COMMA_STR+l.y+L+(a+g.offset)+COMMA_STR+(l.y+l.height),s+c}getColorGradientV(e){return{axis:e.getBoxFill(!0),shadow:toRaphaelColor({FCcolor:{alpha:'25,0,0',angle:360,color:'000000,FFFFFF,FFFFFF',ratio:'0,30,40'}})}}}class Slider{constructor(e,t,o){this.conf=t.conf,this.sliderIndex=e,this.rangeGroup=t.sliderGroup,this._id=o,this.node=UNDEF,this.tracker=UNDEF,this.currPos=0,this.swing=[]}configure(e,t,o){this.conf=t.conf,this.sliderIndex=e,this.rangeGroup=t.sliderGroup,this._id=o,this.currPos=0,this.swing=[]}getType(){return'slider'}getName(){return'Slider'}updateSwingRange(e,t){this.swing[+e]=t}draw(e,t,o,n){var i,a,r,l,d,g,s=Math.ceil,c=n.parentLayer,h=this,p=n.animationManager,m=this.conf,u=m.outerCircle,f=m.innerCircle,w=s(u.rFactor*n.rCalcBase/2),C=s(f.rFactor*n.rCalcBase/2),L=w-C,S=this.sliderIndex;return m.outerRadius=w,m.innerRadius=C,this._scaleVal=t,f.style['stroke-width']=L,r=s(u.style['stroke-width']/2),C+=r,i=this.node=p.setAnimation({el:this.node||'group',attr:{name:'fc-gl-slider',cursor:'pointer',transform:'t0,0'},container:c,component:gLegendRef}),'x'===n.key?(l=o,d=e,d+=S?-C:+C):(l=e,d=o,l+=S?-C:+C),this.oCircle=p.setAnimation({el:this.oCircle||'circle',attr:{cx:l,cy:d,r:w},css:u.style,container:i,component:gLegendRef}),this.iCircle=p.setAnimation({el:this.iCircle||'circle',attr:{cx:l,cy:d,r:C},css:f.style,container:i,component:gLegendRef}),g=this.tracker=p.setAnimation({el:this.tracker||'circle',attr:{cx:l,cy:d,r:w+5,fill:TRACKER_FILL,stroke:TRACKER_FILL,cursor:'pointer'},container:i,component:gLegendRef}),i.attr({transform:'x'===n.key?'t0,'+h.currPos:'t'+h.currPos+','+0}),toolTipController.enableToolTip(g,t),this._dragAPI=a=this.getDragAPI('x'===n.key),g.undrag(),g.drag(a.dragging,a.dragStart,a.dragEnd),{translateAscending:w+r}}getDragAPI(e){var t,o,n,i,a=this,r=a.node,l=a.sliderIndex,g=a.rangeGroup,d=a.conf.innerRadius,s=d;return{dragging:function(c){var h,p,m,u,f;return c.stopPropagation(),c.preventDefault(),m=e?c.data[1]:c.data[0],l?(h=t[0]-t[1]+s,p=0):(h=0,p=t[1]-t[0]-s),f=a.currPos+m,f<h?m+=h-f:f>p&&(m-=f-p),r.attr({transform:e?'t0,'+(a.currPos+m):'t'+(a.currPos+m)+','+0}),o=m,n&&clearTimeout(n),n=setTimeout(function(){g.updateWhenInRest(a,a.currPos+m)},100),u=g.updateWhenInMove(a,a.currPos+m),a.tracker.data('__FC_tooltipText',u),i=!0,!0},dragStart:function(e){e.stopPropagation(),e.preventDefault(),t=a.swing,i=!1,g.dragStarted(a)},dragEnd:function(){var e;g.dragCompleted(a,i,a.currPos+o);i&&(n&&clearTimeout(n),n=setTimeout(function(){g.updateWhenInRest(a,a.currPos)},100),a.currPos+=o,e=t[+l]+a.currPos,g.updateRange(a,e))}}}dispose(){this.node.remove(),this.oCircle.remove(),this.iCircle.remove(),this.tracker.remove(),delete this}}class SliderGroup{constructor(e){var t={};this._id='GL_SG1',this.conf=e,t.conf=e,this.extremes=[],this.sliders={},this.min=void 0,this.max=void 0,t.sliderGroup=this,this.valueRange=[],this.callbacks=[],this.sliders[FORMER_SLIDER_INDEX]=new Slider(FORMER_SLIDER_INDEX,t,this._id+'_'+0),this.sliders[LATER_SLIDER_INDEX]=new Slider(LATER_SLIDER_INDEX,t,this._id+'_'+1)}configure(e){var t={};this.min=void 0,this.max=void 0,this.conf=e,t.conf=e,t.sliderGroup=this,this.sliders[FORMER_SLIDER_INDEX].configure(FORMER_SLIDER_INDEX,t,this._id+'_'+0),this.sliders[LATER_SLIDER_INDEX].configure(LATER_SLIDER_INDEX,t,this._id+'_'+1)}getType(){return'slider'}getName(){return'SliderGroup'}initRange(e,t){var o=e.sliderIndex;this.extremes[+o]=t}updateRange(e,t){var o=e.sliderIndex,n=this.sliders,i=n[!o];i.updateSwingRange(o,t)}reset(){var e={};e.conf=this.conf,e.sliderGroup=this,this.min=void 0,this.max=void 0,this.sliders[FORMER_SLIDER_INDEX].configure(FORMER_SLIDER_INDEX,e,this._id+'_'+0),this.sliders[LATER_SLIDER_INDEX].configure(LATER_SLIDER_INDEX,e,this._id+'_'+1),this.draw.apply(this,this._drawParams)}draw(e,t,o){var n,i,a,r,l,d,g=Math.ceil,s=this.sliders,c=s[!1],h=s[!0],p=o.colorRange,m=p.colorRange,u=p.data.mapByPercent,f=o.gLegend.getFromEnv('number-formatter');return this._fcChart=o.gLegend.getFromEnv('chart'),this.getValueFormPixel=function(e,t,o,n){this.getValueFormPixel=function(i){return e+(t-e)/(n-o)*i}},this.updateWhenInMove=function(e,t){this.updateWhenInMove=function(o,n){var i,a,r=this.extremes,l=o.sliderIndex;return i=l?r[1]-r[0]+n:n,a=this.getValueFormPixel(i),a=t?parseFloat(a).toFixed(2)+PERCENT_STR:e.legendValue(a),a}},this._drawParams=[e,t,o],this.updateWhenInMove(f,u),a=c.conf.outerCircle,i=c.conf.innerCircle,r=g(i.rFactor*o.rCalcBase/2),r+=g(a.style['stroke-width']/2),this.extremes[0]=e+r,this.extremes[1]=t-r,l=this.extremes[1]-this.extremes[0],this.min=this.min?this.min:m[0].value,this.max=this.max?this.max:m[m.length-1].value,d=m[m.length-1].value-m[0].value,c.currPos=l*(this.min-m[0].value)/d,h.currPos=l*(this.max-m[0].value)/d-l,n=c.draw(e,u?f.legendPercentValue(this.min):f.legendValue(this.min),o[o.key],o),n=h.draw(t,u?f.legendPercentValue(this.max):f.legendValue(this.max),o[o.key],o),c.swing=this.extremes.slice(0),h.swing=this.extremes.slice(0),c.swing[1]+=h.currPos,h.swing[0]+=c.currPos,this.getValueFormPixel(m[0].value,m[m.length-1].value,this.extremes[0],this.extremes[1]),n}updateWhenInRest(e,t){var o,n,i=this.sliders,a=this.extremes,r=e.sliderIndex;r?(o=i[!r].currPos,n=a[1]-a[0]+t):(o=t,n=a[1]-a[0]+i[!r].currPos),this.min=+this.getValueFormPixel(o).toFixed(2),this.max=+this.getValueFormPixel(n).toFixed(2),this.gLegend.fireEvent('rangeUpdated',[{min:this.min,max:this.max}])}dragStarted(e){var t=this.sliders,o=this.extremes,n=e.conf,i=this._fcChart;i.fireChartInstanceEvent('legendpointerdragstart',{pointerIndex:+e.sliderIndex,pointers:[{value:this.getValueFormPixel(t['false'].currPos)},{value:this.getValueFormPixel(o[1]-o[0]+t['true'].currPos)}],legendPointerHeight:n.outerRadius,legendPointerWidth:n.innerRadius,outerRadius:n.outerRadius,innerRadius:n.innerRadius},[i.id])}dragCompleted(e,t,o){var n,i,a=this.sliders,r=this.extremes,l=e.conf,d=this.getValueFormPixel(a['false'].currPos),g=this.getValueFormPixel(r[1]-r[0]+a['true'].currPos),s=this._fcChart;e.sliderIndex?(n=d,i=this.getValueFormPixel(r[1]-r[0]+o)):(n=this.getValueFormPixel(o),i=g),t&&s.fireChartInstanceEvent('legendrangeupdated',{previousMinValue:d,previousMaxValue:g,minValue:n,maxValue:i},[s.id]),s.fireChartInstanceEvent('legendpointerdragstop',{pointerIndex:+e.sliderIndex,pointers:[{value:n},{value:i}],legendPointerHeight:l.outerRadius,legendPointerWidth:l.innerRadius,outerRadius:l.outerRadius,innerRadius:l.innerRadius},[s.id])}dispose(){this.sliders[FORMER_SLIDER_INDEX].dispose(),this.sliders[LATER_SLIDER_INDEX].dispose()}}class LegendValues extends LegendLabels{constructor(){super(arguments[0]),this._id='GL_VALUES',this.node=[]}configure(e){this.conf=e}getName(){return'LegendValues'}getType(){return'legend'}getLogicalSpace(e,t,o){var n,i,a,r,l,d,g,s,c,h,p,m,u,f,x,y,w,C,L,S,b,v,_,F,A,E=Math.min,P=Math.max,I='bottom'===this.conf.legendPosition,R=this._lSpace,O=this.conf,T=O.padding,D=t.gLegend.getFromEnv('chartConfig'),G=[],V=[];if(R&&!o)return R.isImpure=!0,R;for(n=t.colorRange,i=t.smartLabel,a=n.colorRange,g=n.getCumulativeValueRatio(),R=this._lSpace={bound:{height:0,width:0},node:{logicArea:UNDEF,smartTexts:[]}},A=R.node.smartTexts,S=merge(e,{}),S.height-=2*T.v,S.width-=2*T.h,S.x+=T.h,S.y+=T.v,i.useEllipsesOnOverflow(D.useEllipsesWhenOverflow),F=merge(O.style,{}),normalizeFontSizeAppend(this._metaStyle=F),i.setStyle(F),_=i.getSmartText('W'),d=a.length,I?(p=s=(g[d-1]-g[0])/2*S.width/100,v=a[0].displayValue,r=i.getSmartText('string'!=typeof v&&v!==UNDEF&&v.toString()||v,p,S.height),r.x=g[0]*S.width/100,m=r.x+r.width,G.push(r.height)):(p=s=(g[d-1]-g[0])/2*S.height/100,r=i.getSmartText(a[0].displayValue,S.width,p),r.y=g[0]*S.height/100,x=r.y+r.width,V.push(r.width)),A[0]=r,I?(r=i.getSmartText(a[d-1].displayValue,p,S.height),r.x=g[d-1]*S.width/100,f=r.x-r.width,G.push(r.height),u=m):(r=i.getSmartText(a[d-1].displayValue,S.width,p),r.y=g[d-1]*S.height/100,w=r.y-r.height,V.push(r.width),y=x),A[d-1]=r,l=1;l<d-1;l++)r=UNDEF,b=a[l].displayValue,I?(c=l+1===d-1?f:g[l+1]*S.width/100,h=g[l]*S.width/100,s=E(h-u,c-h),s>1.5*_.width&&(r=i.getSmartText(b,2*s,S.height),r.x=g[l]*S.width/100,u=s,G.push(r.height))):(c=l+1===d-1?w:g[l+1]*S.height/100,h=g[l]*S.height/100,s=E(h-y,c-h),s>2*_.height&&(r=i.getSmartText(b,S.width,2*s),r.y=g[l]*S.height/100,y=s,V.push(r.width))),A[l]=r;return I?(C=P.apply(Math,G),S.height=C,e.height=C+2*T.v):(L=P.apply(Math,V),S.width=L,e.width=L+2*T.h),R.node.logicArea=S,R.bound=e,e}draw(){var e,t,o,n,i,a,r,l,d,g,s,c,h,p,m=this.conf,u='bottom'===m.legendPosition,f=m.bound&&m.bound.style||{stroke:'none'},x={};2<=arguments.length&&arguments[1]?(n=arguments[0],r=arguments[1]):1<=arguments.length&&(r=arguments[0]),p=r.animationManager,e=r.parentLayer,l=r.colorRange,d=l.getCumulativeValueRatio(),this.getLogicalSpace(n,r),i=this._lSpace,a=i.node.logicArea,c=i.node.smartTexts,this.group=o=p.setAnimation({el:this.group||'group',attr:{name:'legend-values'},container:e,component:gLegendRef}),this.bound=t=p.setAnimation({el:this.bound||'rect',attr:i.bound,css:f,container:o,component:gLegendRef});for(let e=0;e<this.node.length;e++)this.node[e].remove();for(this.node=[],g=0,s=d.length;g<s;g++)(h=c[g],!!h)&&(u?(x.y=a.y+h.height/2,x.x=g===s-1?a.x+h.x-h.width/2:g?a.x+h.x:a.x+h.x+h.width/2):(x.x=a.x+h.width/2,x.y=g===s-1?a.y+h.y-h.height/2:g?a.y+h.y:a.y+h.y+h.height/2),this.node.push(p.setAnimation({el:'text',attr:{text:h.text,x:x.x,y:x.y,lineHeight:this._metaStyle.lineHeight,fill:m.style.fill},container:o,component:gLegendRef})));return{group:o,bound:t}}}export default GLegend;