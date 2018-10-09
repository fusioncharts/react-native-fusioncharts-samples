import{pluck,getValidValue,BLANK,getDashStyle,getFirstValue,parseUnsafeString,pluckNumber,stableSort,componentFactory,datasetFactory}from'../_internal/lib/lib';import{convertColor}from'../_internal/lib/lib-graphics';import ColorGradient from'../_internal/color-utils/color-gradient';import LinearGauge from'./lineargauge';import HlineargaugeDataset from'../_internal/datasets/hlineargauge';import{_getData,_setData,_getDataForId,_setDataForId}from'../_internal/common-chart-api/angular-hlinear-common';var BLANKSTRING=BLANK;class Hlineargauge extends LinearGauge{static getName(){return'Hlineargauge'}constructor(){super(),this.showRTvalue=!1,this.canvasPadding=!1,this.isHorizontal=!0,this.isAxisOpposite=!1,this.drawPlotlines=!1,this.drawPlotBands=!1,this.isAxisReverse=!1,this.minorTMNumber=4,this.isRealTime=!0,this.colorRange=!0,this.rtParserModify=!0,this.registerFactory('dataset',function(a){let b=a.getFromEnv('dataSource'),c=b.pointers;datasetFactory(a,HlineargaugeDataset,'dataset',1,[c])},['vCanvas'])}getName(){return'Hlineargauge'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='Horizontal Linear Gauge',a.hasLegend=!1,a.defaultDatasetType='hlineargauge',a.skipCanvasDrawing=!0}configure(a){super.configure(a);let b=this,c=b.getFromEnv('dataSource'),d=c.colorrange;d&&d.color&&d.color.length?(componentFactory(b,ColorGradient,'colorRange',1,[{colorRange:d,numberFormatter:b.getFromEnv('number-formatter')}]),b.addToEnv('colorRange',b.getChildren('colorRange')[0])):b.deleteFromEnv('colorRange')}_configueTrendPoints(){var a,b,c,d,e,f=this,g=f.getFromEnv('dataSource'),h=f.config,j=h.style,k=g.trendpoints&&g.trendpoints.point,l=f.getFromEnv('scale'),m=l.config,n=m.axisRange,o=n.max,p=n.min,q=m.scaleFactor||1,r=f.getFromEnv('color-manager'),s=h.trendPointConfig=[],t=g.chart,u=k.length;for(j.trendStyle={fontFamily:j.outCanfontFamily,color:j.outCancolor,fontSize:j.outCanfontSize},b=0;b<u;b++)a=k[b],c=pluckNumber(a.startvalue,a.value),d=pluckNumber(a.endvalue,c),e=c!==d,c<=o&&c>=p&&d<=o&&d>=p&&s.push({startValue:c,endValue:d,tooltext:getValidValue(parseUnsafeString(a.markertooltext)),displayValue:getValidValue(parseUnsafeString(a.displayvalue),e?BLANKSTRING:f.getFromEnv('number-formatter').scale(c)),showOnTop:pluckNumber(a.showontop,t.ticksbelowgauge,1),color:pluck(a.color,r.getColor('trendLightColor')),textColor:a.color,alpha:pluckNumber(a.alpha,99),thickness:pluckNumber(a.thickness,1),dashStyle:+a.dashed?getDashStyle(a.dashlen||2,a.dashgap||2):BLANK,useMarker:pluckNumber(a.usemarker,0),markerColor:convertColor(pluck(a.markercolor,a.color,r.getColor('trendLightColor')),100),markerBorderColor:convertColor(pluck(a.markerbordercolor,a.bordercolor,r.getColor('trendDarkColor')),100),markerRadius:pluckNumber(pluckNumber(a.markerradius)*q,5),markerToolText:getFirstValue(a.markertooltext),trendValueDistance:pluckNumber(pluckNumber(a.trendvaluedistance)*q,n.tickInterval),isTrendZone:e});stableSort&&stableSort(h.trendPointConfig,function(c,a){return c.startValue-a.startValue})}_getData(a,b){return _getData.call(this,a,b)}_setData(a,b){_setData.call(this,a,b)}_getDataForId(a,b){return _getDataForId.call(this,a,b)}_setDataForId(a,b){_setDataForId.call(this,a,b)}}export default Hlineargauge;