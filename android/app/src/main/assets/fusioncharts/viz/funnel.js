import FunnelPyramidBase from'./funnelpyramidbase';import FunnelDataset from'../_internal/datasets/funnel';import{pluckNumber}from'../_internal/lib/lib';class Funnel extends FunnelPyramidBase{static getName(){return'Funnel'}constructor(){super(),this.useSortedData=!0}getName(){return'funnel'}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='Funnel Chart',a.defaultDatasetType='funnel',a.enablemousetracking=!0}configureAttributes(){super.configureAttributes();let a=this,b=a.getFromEnv('dataSource'),c=pluckNumber(b.chart.streamlineddata,1);a.config.PLOT_COLOR_INDEX_START=c?-1:0}getDSdef(){return FunnelDataset}}export default Funnel;