import{pluck,isIE9}from'../lib/lib';export default function(a){var b,c,d=window,e=Math,f=e.sqrt,g=d.parseFloat,h=d.parseInt,i=d.SVGFilterElement||d.SVGFEColorMatrixElement&&2===d.SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE,j={"drop-shadow":'drop-shadow',stroke:'stroke',fill:'fill',"stroke-width":'stroke-width',"stroke-opacity":'stroke-opacity',"stroke-linecap":'stroke-linecap',"stroke-linejoin":'stroke-linejoin',"shape-rendering":'shape-rendering',opacity:'opacity',"fill-opacity":'fill-opacity'};a.svg?(i&&(a.filterShadow=function(b,c){var d,e,h,i,j=b.dx||1,k=b.dy||1,l=b.spread||3,m=b.color||'rgb(64,64,64)',n=b.paper,o=n.cacheShadows||(n.cacheShadows={}),p=b.id||'drop-shadow-'+(c?'layered':'non-layered')+'-'+[j,k,l,m].join(' '),q=b.id||a.getElementID(p.replace(/[\(\)\s%:,\xb0#]/g,'_')),r=b.id?!!a._g.doc.getElementById(q):!!o[p];return n&&!r?(m=a.color(m),m.error&&(m=a.color('rgba(0,0,0,1)')),h=pluck(m.opacity,1),h=b.opacity||h,d=n.addDefs({filter:{tagName:'filter',id:q,width:'200%',height:'200%',children:[{tagName:'feOffset',result:'offOut',in:'SourceGraphic',dx:g(j),dy:g(k)},{tagName:'feColorMatrix',result:'matrixOut',in:'offOut',type:'matrix',values:'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 '+h+' 0'},{tagName:'feGaussianBlur',result:'blurOut',in:'matrixOut',stdDeviation:c?1:f(g(l))},{tagName:'feComposite',in:'SourceGraphic',in2:'blurOut',operator:'over'}]}}),e=d.filter.children,i=o[p]={use:1,hash:p,id:q,filter:d.filter.element,offset:e[0].element,matrix:e[1].element,blur:e[2].element,blend:e[3].element}):(i=o[p],i.use+=1),i},a.el.dropshadow=function(b,d,e,f,g,h){var j,k,l,m,n,p,q,r,s=this,o=s._.shadowFilter,t=s.paper,u=t.cacheShadows||(t.cacheShadows={}),v='drop-shadow'+[b,d,e,f].join(' ');for(n=m=.05*g,q=1;3>=q;q++)n+=m*q*(g-n);if(j=h?s.shadowElem||s.clone({fill:'none',stroke:'rgb(51, 51, 51)',"stroke-width":s.attr('stroke-width')||1,opacity:n},h).translate(b,d).follow(s,c,!h&&'before'):s,k=j.shadowElem&&j.shadowElem.node||j.node,'none'!==b)h&&!s.shadowElem&&(p=!0),h&&(s.shadowElem=j),o=o&&u[v]?u[v]:s._.shadowFilter=a.filterShadow({paper:t,dx:b,dy:d,spread:e,color:f,opacity:!h&&n},!!h),!p&&s.shadowElem&&s.shadowElem.attr('opacity',n),k.setAttribute('filter','url("'+a._url+'#'+o.id+'")');else if(o){if(o.use-=1,k.removeAttribute('filter'),s.shadowElem&&s.shadowElem.attr('opacity',0),!o.use){for(l in v=o.hash,o)r=o[l],r.parentNode&&r.parentNode.removeChild(r),delete o[l];r=null,delete u[v]}o=null,delete s._.shadowFilter}return this}),c=function(a,b){var c,d,e=this,f={};for(d in a)j[d]&&(f[d]=a[d],delete a[d]),'transform'===d?(c=b.matrix.clone(),c.translate(e.__shadowx,e.__shadowy),e.transform(c.toTransformString())):'stroke-width'===d?a[d]=f[d]||1:void 0;for(d in e.attr(a),f)a[d]=f[d]},a.ca['drop-shadow']=function(b,d,e,f,g,j){var k,l,m,n,p,q,r,s=this,o=s._.shadows||(s._.shadows=[]);if(s.__shadowblocked)return!1;if('none'===b)for(;l=o.pop();)l.remove();else for(f=a.color(f),f.error&&(f=a.color('rgba(0,0,0,1)')),g instanceof Array?(p=g[0],q=g[1]):p=q=g,p=1/pluck(p,1),q=1/pluck(q,1),b=pluck(b,1)*p,d=pluck(d,1)*p,k=.05*pluck(f.opacity,1),m=h(s.attr('stroke-width')||1,10)+6,n=s.matrix.clone(),n.translate(b,d),r=1;3>=r;r++)l=(o[r-1]||s.clone().follow(s,c,!j&&'before')).attr({stroke:f.hex,"stroke-opacity":k*r,opacity:'1',"stroke-width":(m-2*r)*q,transform:n.toTransformString(),"stroke-linecap":'round',"stroke-linejoin":'round',fill:'none'}),l.__shadowlevel=r,l.__shadowscale=q,l.__shadowx=b,l.__shadowy=d,j&&j.appendChild(l),o.push(l);return!1},a.el.shadow=function(b,c,d,e){var f;if(d&&d.constructor===a.el.constructor&&(e=d,d=void 0),'object'==typeof b&&(c&&c.constructor===a.el.constructor&&(e=c),c=b.opacity,d=b.scalefactor,f=void 0===b.useFilter?!isIE9:!!b.useFilter,b=void 0===b.apply?!!c:b.apply),void 0===c&&(c=1),this.dropshadow){if(f&&!this.ca.hasOwnProperty('drop-shadow'))return b&&this.dropshadow(1,1,3,'rgb(64,64,64)',c,e)||this.dropshadow('none'),this;this._.shadowFilter&&this.dropshadow('none')}return this.attr('drop-shadow',b?[1,1,3,'rgba(64,64,64,'+c+')',d,e]:'none')}):a.vml?(a.ca['drop-shadow']=function(c,d,e,f,h,i){var j,k,l,m,n=this,o=n._.shadow;return!n.isShadow&&('none'===c?o&&(o=n._.shadow=o.remove()):(!o&&(o=n._.shadow=n.clone(),i&&i.appendChild(o.follow(n))||o.follow(n,b,'before'),o.attr({fill:'none',"fill-opacity":.5,"stroke-opacity":1}).isShadow=!0,0>=o.attr('stroke-width')&&o.attr('stroke-width',1)),j=o.node.runtimeStyle,k=j.filter.replace(/ progid:\S+Blur\([^\)]+\)/g,''),f=a.color(f),f.error&&(f=a.color('rgba(0,0,0,1)')),m=pluck(f.opacity,1)/5,l=h instanceof Array?h[0]:h,l=1/pluck(h,1),c=pluck(c,1)*l,d=pluck(d,1)*l,o.translate(c,d),j.filter=k+' progid:DXImageTransform.Microsoft.Blur(pixelRadius='+g(.4*e)+' makeShadow=True Color='+f.hex+' shadowOpacity="'+m+'");'),!1)},a.el.shadow=function(c,d,e,f){var g=this;return e&&e.constructor===a.el.constructor&&(f=e,e=b),'object'==typeof c&&(d&&'group'===d.type&&(f=d),d=c.opacity,e=c.scalefactor,c=c.apply===b?!!d:c.apply),d===b&&(d=1),g.attr('drop-shadow',c||!d?[1,1,5,'rgba(64,64,64,'+d+')',e,f]:'none')}):a.canvas&&(a.el.shadow=function(){return this})}