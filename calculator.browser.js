/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"gasometria-arterial","title":"Interpretação da gasometria arterial","fields":[["ph","pH","num",{"min":6.8,"max":7.8,"step":0.01,"ph":"7,40"}],["paco2","PaCO₂","num",{"min":10,"max":150,"unit":"mmHg","ph":"40"}],["hco3","HCO₃⁻","num",{"min":3,"max":60,"step":0.1,"unit":"mEq/L","ph":"24"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
a.def("gasometria-arterial",function(a){var e=a.ph,i=a.paco2,r=a.hco3,n=6.1+Math.log(r/(.03*i))/Math.LN10,c=Math.abs(n-e)>.04?"pH, PaCO₂ e HCO₃⁻ não são coerentes entre si pela equação de Henderson-Hasselbalch (pH calculado "+o(n,2)+"): confira os valores.":"",s=function(a,i,r,s,l){return l.phcalc=n,l.mixed=r?1:0,l.primary=a,{main:[o(e,2),"pH"],label:"Distúrbio ácido-base",level:r||e<7.2||e>7.6?"high":"mid",verdict:a.charAt(0).toUpperCase()+a.slice(1)+(i?" "+i:""),rows:s,note:c,raw:l}};if(e>=7.35&&e<=7.45){if(i>=35&&i<=45&&r>=22&&r<=26)return{main:[o(e,2),"pH"],label:"Distúrbio ácido-base",level:"low",verdict:"Gasometria sem distúrbio ácido-base",note:c,raw:{primary:"normal",phcalc:n}};var l=i>45&&r>26?"acidose respiratória com alcalose metabólica (ou acidose respiratória crônica compensada)":i<35&&r<22?"alcalose respiratória com acidose metabólica (ou alcalose respiratória crônica compensada)":"PaCO₂ ou HCO₃⁻ alterado";return{main:[o(e,2),"pH"],label:"Distúrbio ácido-base",level:"mid",verdict:"pH normal com "+l+": distúrbio misto ou compensado",note:c,raw:{primary:"misto ou compensado",phcalc:n}}}if(e<7.35){var d=r<24,t=i>40;if(!d&&!t)return{error:"pH ácido sem HCO₃⁻ baixo nem PaCO₂ alta: valores incoerentes, confira a gasometria."};if(d&&t&&r<22&&i>45)return s("acidose mista (metabólica e respiratória)","",!0,[],{});if("met"==(d&&t?(24-r)/24>=(i-40)/40?"met":"resp":d?"met":"resp")){var m=1.5*r+8,p=i>m+2?"com acidose respiratória associada":i<m-2?"com alcalose respiratória associada":"com compensação respiratória adequada";return s("acidose metabólica",p,p.indexOf("associada")>0,[["PaCO₂ esperada (Winter: 1,5 × HCO₃⁻ + 8 ± 2)",o(m-2,0)+" a "+o(m+2,0)+" mmHg"],["Próximo passo","calcule o ânion gap"]],{exp:m})}var u=i-40,v=24+.1*u,g=24+.35*u,f=r<v-2?"com acidose metabólica associada":r>g+2?"com alcalose metabólica associada":r<=(v+g)/2?"aguda":"crônica";return s("acidose respiratória",f,f.indexOf("associada")>0,[["HCO₃⁻ esperado se aguda (+1 por 10 mmHg)",o(v,0)+" mEq/L"],["HCO₃⁻ esperado se crônica (+3,5 por 10 mmHg)",o(g,0)+" mEq/L"]],{expAguda:v,expCronica:g})}var h=r>24,b=i<40;if(!h&&!b)return{error:"pH alcalino sem HCO₃⁻ alto nem PaCO₂ baixa: valores incoerentes, confira a gasometria."};if(h&&b&&r>26&&i<35)return s("alcalose mista (metabólica e respiratória)","",!0,[],{});if("met"==(h&&b?(r-24)/24>=(40-i)/40?"met":"resp":h?"met":"resp")){var w=40+.7*(r-24),C=i>w+2?"com acidose respiratória associada":i<w-2?"com alcalose respiratória associada":"com compensação respiratória adequada";return s("alcalose metabólica",C,C.indexOf("associada")>0,[["PaCO₂ esperada (40 + 0,7 × ΔHCO₃⁻ ± 2)",o(w-2,0)+" a "+o(w+2,0)+" mmHg"]],{exp:w})}var _=40-i,O=24-.2*_,x=24-.4*_,L=r>O+2?"com alcalose metabólica associada":r<x-2?"com acidose metabólica associada":r>=(O+x)/2?"aguda":"crônica";return s("alcalose respiratória",L,L.indexOf("associada")>0,[["HCO₃⁻ esperado se aguda (−2 por 10 mmHg)",o(O,0)+" mEq/L"],["HCO₃⁻ esperado se crônica (−4 por 10 mmHg)",o(x,0)+" mEq/L"]],{expAguda:O,expCronica:x})});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
