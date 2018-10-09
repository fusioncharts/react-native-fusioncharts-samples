import{_setDefaultConfig}from'./areabase';import RealtimeColumn from'./realtimecolumn';import RealtimeLineDataset from'../_internal/datasets/realtimeline';import{_feedAxesRawData,getSpecificxAxisConf,getSpecificyAxisConf,setAxisDimention}from'./msdybasecartesian';import axesFactory from'../_internal/factories/cartesian-axis-dual-y';import datasetFactory from'../_internal/factories/combi-dual-y-dataset';class RealtimeLineDy extends RealtimeColumn{static getName(){return'RealtimeLineDy'}constructor(){super(),this.isRealTime=!0,this.axisPaddingLeft=0,this.isDual=!0,this.axisPaddingRight=0,this.getSpecificxAxisConf=getSpecificxAxisConf,this.getSpecificyAxisConf=getSpecificyAxisConf,this.registerFactory('axis',axesFactory,['canvas']),this.registerFactory('dataset',datasetFactory,['vCanvas'])}getName(){return'RealtimeLineDy'}__setDefaultConfig(){super.__setDefaultConfig(),_setDefaultConfig.call(this);let a=this.config;a.defaultDatasetType='RealtimeLine',a.zeroplanethickness=1,a.zeroplanealpha=40,a.showzeroplaneontop=0,a.enablemousetracking=!0,a.isdual=!0,a.syncaxislimits=0}_feedAxesRawData(){return _feedAxesRawData.call(this)}getDSdef(){return RealtimeLineDataset}getDSType(){return'RealtimeLine'}getDSGroupdef(){}}RealtimeLineDy.prototype.setAxisDimention=setAxisDimention;export default RealtimeLineDy;