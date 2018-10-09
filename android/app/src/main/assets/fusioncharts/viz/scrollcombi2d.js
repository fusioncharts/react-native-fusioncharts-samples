import ScrollArea2D from'./scrollarea2d';import ColumnDataset from'../_internal/datasets/column';import AreaDataset from'../_internal/datasets/area';import LineDataset from'../_internal/datasets/line';import SplineAreaDataset from'../_internal/datasets/mssplinearea';import SplineLineDataset from'../_internal/datasets/msspline';import ColumnMultiSeriesGroup from'../_internal/datasets/groups/column.multiseries';import datasetFactory from'../_internal/factories/combi-dual-y-dataset';var UNDEFINED;class ScrollCombi2D extends ScrollArea2D{static getName(){return'ScrollCombi2D'}constructor(){super(),this.hasScroll=!0,this.canvasborderthickness=1,this.avgScrollPointWidth=40,this.defaultPlotShadow=1,this.registerFactory('dataset',datasetFactory,['vCanvas'])}getName(){return'ScrollCombi2D'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='Scrollable Combination Chart',a.defaultDatasetType='column',a.zeroplanethickness=1,a.zeroplanealpha=80,a.enablemousetracking=!0,a.showzeroplaneontop=0}getDSdef(a){if('splinearea'===a)return SplineAreaDataset;return'spline'===a?SplineLineDataset:'area'===a?AreaDataset:'line'===a?LineDataset:ColumnDataset}getDSGroupdef(a){return'column'===a?ColumnMultiSeriesGroup:UNDEFINED}getDSType(a=''){if('splinearea'===a.toLowerCase())return'splinearea';return'spline'===a.toLowerCase()?'spline':'area'===a.toLowerCase()?'area':'line'===a.toLowerCase()?'line':'column'}}export default ScrollCombi2D;