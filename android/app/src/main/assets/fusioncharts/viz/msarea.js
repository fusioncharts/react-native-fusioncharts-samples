import AreaDataset from'../_internal/datasets/area';import AreaBase from'./areabase';class MSArea extends AreaBase{static getName(){return'MSArea'}constructor(){super(),this.defaultPlotShadow=0}getName(){return'MSArea'}getDSdef(){return AreaDataset}getDSGroupdef(){}__setDefaultConfig(){super.__setDefaultConfig();let a=this.config;a.friendlyName='Multi-series Area Chart',a.defaultDatasetType='area',a.defaultcrosslinethickness=1}}export default MSArea;