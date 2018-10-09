import Base from'./input-base';import{getMouseCoordinate}from'../../_internal/lib/lib';class InputSwipeGesture extends Base{constructor(){super();var a=this;a.controlArr=[{nativeInteraction:['dragend'],callback:a.end.bind(a),component:a},{nativeInteraction:['dragmove'],callback:a.move.bind(a),component:a},{nativeInteraction:['dragstart'],callback:a.start.bind(a),component:a}]}getName(){return'swipeGesture'}configure(){super.configure(),this.enable()}getPresentScrollValue(){var a=this,b=a.config.xAxis,c=b.getVisibleConfig(),d=b.getLimit(),e=c.maxValue-c.minValue,f=d.max-d.min;return(c.minValue-d.min)/(f-e)}start(a){var b,c,d=this,e=d.getFromEnv('chart'),f=d.config;b=getMouseCoordinate(e.getFromEnv('chart-container'),a.originalEvent,e),f.previousX=b.chartX,f.presentScrollValue=c=d.getPresentScrollValue(),e.fireChartInstanceEvent('scrollStart',{scrollPosition:c})}move(a){var b=this,c=b.config,d=b.getFromEnv('chart'),e=c.xAxis,f=getMouseCoordinate(d.getFromEnv('chart-container'),a.originalEvent,d),g=f.chartX,h=(g-c.previousX)/c.plotDifference,i=e.getVisibleConfig(),j=c.previousScrollValue=c.presentScrollValue,k=i.minValue-h,l=c.axisMin,m=c.axisMax,n=i.maxValue-h;k<l&&l===i.minValue||n>m&&m===i.maxValue||(k<l?(n+=h,h=i.minValue-l,n-=h,k=l):m<n&&(k+=h,h=m-i.maxValue,k+=h,n=m),d.getFromEnv('animationManager').setAnimationState('scroll'),e.setVisibleConfig(k,n),d.fireChartInstanceEvent('onScroll',{scrollPosition:j}),c.previousX=g,c.presentScrollValue=b.getPresentScrollValue())}end(){var a=this,b=a.config,c=a.getFromEnv('chart');c.fireChartInstanceEvent('scrollEnd',{previousScrollPosition:b.previousScrollValue,scrollPosition:b.presentScrollValue})}setControl(){var a=this,b=a.getLinkedParent(),c=a.controlArr,d=a.config,e=a.getFromEnv('canvas').getAxes().filter(a=>!a.isY),f=d.xAxis=e&&e[0]&&e[0].axis,g=f.config.axisRange;d.plotDifference=f.getPixel(1)-f.getPixel(0),d.axisMin=g.min,d.axisMax=g.max,b.releaseControl(c),a.isEnabled()&&b.getControl(c)}}export default InputSwipeGesture;