import mergeDeepRight from'ramda/src/mergeDeepRight';import AnnotationBaseShape from'./annotation-base';import{toRaphaelColor,getDashStyle,pluckNumber,pluck,getFirstValue,pluckBoolean}from'./utils';let selectionGroup,UNDEF;const DEFAULT_COLOR='#FF0000',DEFAULT_BORDER_COLOR='#000000',DEFAULT_ALPHA=100,DEFAULT_SHOW_BORDER=0,DEFAULT_BORDER_THICKNESS=2,DEFAULT_DASH_LEN=5,DEFAULT_DASH_GAP=3,FULL_ANGLE_DEGREES=360,DEFAULT_IS_DASHED=0,DEFAULT_SHOW_SHADOW=0,DEFAULT_TOOLTEXT='',RADIAL='radial',DEFAULT_FILL_ANGLE=0,DEFAULT_IS_VISIBLE=!0,DEFAULT_ANIM_DURATION=1e3,getComputedImagePosition=a=>{let{height:b,width:c,vAlign:d,align:e,x:f,y:g}=a,h={x:f,y:g};return'center'===e?h.x=f-c/2:'right'===e?h.x=f-c:void 0,'middle'===d?h.y=g-b/2:'bottom'===d?h.y=g-b:void 0,h},isDefined=a=>a===UNDEF?UNDEF:1;class AnnotationShape extends AnnotationBaseShape{setAttribute(a){let b=this,c={},d=b.config,e=b._getFromStore('annotation-group');null!=e&&(this.groupConfig.x=e._getConfig('x'),this.groupConfig.y=e._getConfig('y'),this.groupConfig.grpXShift=e._getConfig('grpXShift'),this.groupConfig.grpYShift=e._getConfig('grpYShift'),this.groupConfig.color=e._getConfig('color'),this.groupConfig.alpha=e._getConfig('alpha'),this.groupConfig.font=e._getConfig('font'),this.groupConfig.fontSize=e._getConfig('fontSize'),this.groupConfig.textAlign=e._getConfig('textAlign'),this.groupConfig.textVAlign=e._getConfig('textVAlign'),this.groupConfig.rotateText=e._getConfig('rotateText'),this.groupConfig.wrapText=e._getConfig('wrapText'),this.groupConfig.toolText=e._getConfig('toolText'),this.groupConfig.scaleX=e._getConfig('scaleX'),this.groupConfig.scaleY=e._getConfig('scaleY'),this.groupConfig.scaleImageX=e._getConfig('scaleImageX'),this.groupConfig.scaleImageY=e._getConfig('scaleImageY'),this.groupConfig.link=e._getConfig('link')),c=mergeDeepRight(b.rawConfig,a),b.rawConfig=c,d.id=pluck(b.rawConfig.id,b.getId('shape')),d.type=b.rawConfig.type,d.color=b._getFillColor(b.rawConfig,this.groupConfig),d.link=pluck(b.rawConfig.link,b.groupConfig.link),d.borderThickness=pluckNumber(parseFloat(b.rawConfig.borderThickness),parseFloat(b.rawConfig.thickness),DEFAULT_BORDER_THICKNESS),d.showBorder=pluckNumber(b.rawConfig.showBorder,parseFloat(b.rawConfig.borderThickness),parseFloat(b.rawConfig.thickness),isDefined(b.rawConfig.borderColor),isDefined(b.rawConfig.borderAlpha),DEFAULT_SHOW_BORDER),d.borderColor=b._getBorderColor(b.rawConfig),d.dashed=pluckNumber(b.rawConfig.dashed,DEFAULT_IS_DASHED),d.dashLen=pluckNumber(b.rawConfig.dashLen,DEFAULT_DASH_LEN),d.dashGap=pluckNumber(parseFloat(b.rawConfig.dashGap),DEFAULT_DASH_GAP),d.dashArrayStr=d.dashed?getDashStyle(d.dashLen,d.dashGap):'none',d.x=pluckNumber(b.rawConfig.x,b.rawConfig.xPos,0),d.y=pluckNumber(b.rawConfig.y,b.rawConfig.yPos,0),d.tox=pluckNumber(b.rawConfig.toX,d.x,0),d.toy=pluckNumber(b.rawConfig.toY,d.y,0),0<=d.toy&&0<=d.y&&d.toy<d.y&&([d.y,d.toy]=[d.toy,d.y]),0<=d.tox&&0<=d.x&&d.tox<d.x&&([d.x,d.tox]=[d.tox,d.x]),d.showShadow=pluckNumber(b.rawConfig.showShadow,e.config.showShadow,DEFAULT_SHOW_SHADOW),d.toolText=getFirstValue(b.rawConfig.toolText,this.groupConfig.toolText,DEFAULT_TOOLTEXT),d.isVisible=pluckBoolean(b.rawConfig.isVisible,DEFAULT_IS_VISIBLE),d.animConfig.animDuration=pluckNumber(b.rawConfig.animConfig&&b.rawConfig.animConfig.animDuration,DEFAULT_ANIM_DURATION),b._configureShape(b.rawConfig)}_getEditorConfig(){let a=this;return a}_getBorderColor(a){let b=this,c=b.getType(),d='none',e={color:'',alpha:''};return'line'!==c&&(e.color=b.config.rawBorderColor=pluck(a.borderColor,a.fillColor,a.color,DEFAULT_BORDER_COLOR),0===b.config.showBorder?(e.alpha=1,b.config.borderThickness=DEFAULT_BORDER_THICKNESS):e.alpha=b.config.rawBorderAlpha=pluckNumber(parseFloat(a.borderAlpha),parseFloat(a.alpha),DEFAULT_ALPHA),d=toRaphaelColor(e)),d}_getFillColor(a,b){let c=this,d=c.getType(),e={color:'',alpha:'',angle:'',ratio:'',radialGradient:'circle'===d||'arc'===d};return'line'===d||'image'===d?(e.color=a.color||b.color||DEFAULT_COLOR,e.alpha=pluckNumber(parseFloat(a.alpha),b.alpha,DEFAULT_ALPHA)):(e.color=a.fillColor||a.color||b.color||DEFAULT_COLOR,e.alpha=pluck(a.fillAlpha,parseFloat(a.alpha),b.alpha,DEFAULT_ALPHA),e.angle=FULL_ANGLE_DEGREES-pluckNumber(a.fillAngle,DEFAULT_FILL_ANGLE),e.ratio=pluck(a.fillRatio),a.fillPattern&&(e.radialGradient=a.fillPattern.toLowerCase()===RADIAL||pluckNumber(a.fillPattern)),e.radialGradient&&(e.gradientUnits='objectBoundingBox',e.cx=.5,e.cy=.5,e.fx=.5,e.fy=.5)),c.config.rawColor=e.color,c.config.rawAlpha=e.alpha,c.config.rawAngle=e.angle,c.config.rawFillPattern=e.radialGradient?'radial':'linear',c.config.rawRatio=e.ratio,toRaphaelColor(e)}static destroySelectionBox(){selectionGroup&&selectionGroup.remove()}_applyAttr(a){var b,c=this,d=c._getFromStore('annotation-group'),e=c.rawConfig.animationLabel,f=d.rawConfig.animationLabel,g=c.store,h=c._getFromStore('animationManager'),i=c.config.elementType,j=c._getFromStore('element'),k=c._getFromStore('toolTipController'),l=c._getConfig('toolText');('image'!==i||c.config.url)&&(b=c.rawConfig.css||{},c.config.link&&(b.cursor=b.cursor||'pointer'),j=h.setAnimation({el:j||i,attr:a,css:b,container:c._getGroupElement(),component:c._getFromStore('component'),label:e||f||i}),j.shadow({opacity:0===c.config.showShadow?0:1,useFilter:'path'===i?0:1}),j.on('click',function(){c.config.link&&c._getFromStore('clickFN').call({link:c.config.link},!0)}),g.element||'image'!==i||(j.on('load',function(){let a=j._.RefImg,b=a.height,d=a.width,e=c._getConfig('align'),f=c._getConfig('vAlign'),g=c._getConfig('xScale'),h=c._getConfig('yScale'),i=b*h,k=d*g,l=getComputedImagePosition({x:j.attr('x'),y:j.attr('y'),height:i,width:k,align:e,vAlign:f});j.attr({x:l.x,y:l.y,height:i,width:k}),c.rawConfig.onload&&c.rawConfig.onload.call(c,j.getBBox())}),j.on('error',function(){c.rawConfig.onerror&&c.rawConfig.onerror.call(c,j)})),g.element=j,c.config.isVisible?j.show():j.hide(),j&&(l&&''!==l?k&&k.enableToolTip(j,l):k&&k.disableToolTip(j)))}getScaledVal(a,b){let c=this._getFromStore('annotation-group');return c?c.getScaledVal(a,b):a}getScaledFont(a){let b=this._getFromStore('annotation-group');return b?b.getScaledFont(a):a}getScaledImageVal(a,b){let c=this._getFromStore('annotation-group');return c?c.getScaledImageVal(a,b):a}_draw(){var a=this,b=a._getFromStore('paper'),c={};c=a._getAnnotationAttrs(b),a._applyAttr(c)}}export default AnnotationShape;