import OverlapperColumn2D from'../viz/overlappedcolumn2d';import crossline from'../features/crossline-adapter/index';export{OverlapperColumn2D};export default{name:'overlappedcolumn2d',type:'package',requiresFusionCharts:!0,extension:a=>{a.addDep(crossline),a.addDep(OverlapperColumn2D)}};