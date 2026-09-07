var zm=Object.defineProperty;var Hm=(i,t,e)=>t in i?zm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var un=(i,t,e)=>Hm(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cl="171",Gm=0,gh=1,Vm=2,Ff=1,Of=2,oi=3,gi=0,vn=1,mn=2,Li=0,Ns=1,ts=2,_h=3,bh=4,Wm=5,$i=100,Xm=101,jm=102,qm=103,Km=104,Ym=200,$m=201,Zm=202,Jm=203,Sc=204,Ec=205,Qm=206,tg=207,eg=208,ng=209,ig=210,sg=211,rg=212,ag=213,og=214,Ac=0,Tc=1,wc=2,zs=3,Rc=4,Cc=5,Pc=6,Ic=7,Pl=0,cg=1,lg=2,Di=0,hg=1,ug=2,dg=3,kf=4,fg=5,pg=6,mg=7,xh="attached",gg="detached",Bf=300,Hs=301,Gs=302,Lc=303,Dc=304,co=306,is=1e3,hi=1001,Ka=1002,gn=1003,zf=1004,Er=1005,Sn=1006,Oa=1007,ui=1008,_i=1009,Hf=1010,Gf=1011,Pr=1012,Il=1013,ss=1014,Gn=1015,zr=1016,Ll=1017,Dl=1018,Vs=1020,Vf=35902,Wf=1021,Xf=1022,In=1023,jf=1024,qf=1025,Fs=1026,Ws=1027,Ul=1028,Nl=1029,Kf=1030,Fl=1031,Ol=1033,ka=33776,Ba=33777,za=33778,Ha=33779,Uc=35840,Nc=35841,Fc=35842,Oc=35843,kc=36196,Bc=37492,zc=37496,Hc=37808,Gc=37809,Vc=37810,Wc=37811,Xc=37812,jc=37813,qc=37814,Kc=37815,Yc=37816,$c=37817,Zc=37818,Jc=37819,Qc=37820,tl=37821,Ga=36492,el=36494,nl=36495,Yf=36283,il=36284,sl=36285,rl=36286,al=2200,Va=2201,_g=2202,Ir=2300,Lr=2301,xo=2302,Is=2400,Ls=2401,Ya=2402,kl=2500,$f=2501,bg=0,Zf=1,ol=2,xg=3200,vg=3201,Bl=0,yg=1,Ri="",Fe="srgb",_n="srgb-linear",$a="linear",De="srgb",ls=7680,vh=519,Mg=512,Sg=513,Eg=514,Jf=515,Ag=516,Tg=517,wg=518,Rg=519,cl=35044,yh="300 es",di=2e3,Za=2001;class cs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const Tr=Math.PI/180,Xs=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function zl(i,t){return(i%t+t)%t}function Cg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pg(i,t,e){return i!==t?(e-i)/(t-i):0}function wr(i,t,e){return(1-e)*i+e*t}function Ig(i,t,e,n){return wr(i,t,1-Math.exp(-e*n))}function Lg(i,t=1){return t-Math.abs(zl(i,t*2)-t)}function Dg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ug(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ng(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fg(i,t){return i+Math.random()*(t-i)}function Og(i){return i*(.5-Math.random())}function kg(i){i!==void 0&&(Mh=i);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bg(i){return i*Tr}function zg(i){return i*Xs}function Hg(i){return(i&i-1)===0&&i!==0}function Gg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wg(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Qf={DEG2RAD:Tr,RAD2DEG:Xs,generateUUID:Wn,clamp:pe,euclideanModulo:zl,mapLinear:Cg,inverseLerp:Pg,lerp:wr,damp:Ig,pingpong:Lg,smoothstep:Dg,smootherstep:Ug,randInt:Ng,randFloat:Fg,randFloatSpread:Og,seededRandom:kg,degToRad:Bg,radToDeg:zg,isPowerOfTwo:Hg,ceilPowerOfTwo:Gg,floorPowerOfTwo:Vg,setQuaternionFromProperEuler:Wg,normalize:Pe,denormalize:Hn};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,r,a,o,c,l){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],m=n[8],b=s[0],g=s[3],f=s[6],x=s[1],E=s[4],v=s[7],T=s[2],w=s[5],R=s[8];return r[0]=a*b+o*x+c*T,r[3]=a*g+o*E+c*w,r[6]=a*f+o*v+c*R,r[1]=l*b+u*x+h*T,r[4]=l*g+u*E+h*w,r[7]=l*f+u*v+h*R,r[2]=d*b+p*x+m*T,r[5]=d*g+p*E+m*w,r[8]=d*f+p*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,m=e*h+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return t[0]=h*b,t[1]=(s*l-u*n)*b,t[2]=(o*n-s*a)*b,t[3]=d*b,t[4]=(u*e-s*c)*b,t[5]=(s*r-o*e)*b,t[6]=p*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vo=new ue;function tp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xg(){const i=Dr("canvas");return i.style.display="block",i}const Sh={};function Ps(i){i in Sh||(Sh[i]=!0,console.warn(i))}function jg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Eh=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yg(){const i={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===De&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===De&&(s.r=Os(s.r),s.g=Os(s.g),s.b=Os(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?$a:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_n]:{primaries:t,whitePoint:n,transfer:$a,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:De,toXYZ:Eh,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}const Me=Yg();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class $g{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hs===void 0&&(hs=Dr("canvas")),hs.width=t.width,hs.height=t.height;const n=hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Dr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zg=0;class ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(yo(s[a].image)):r.push(yo(s[a]))}else r=yo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$g.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jg=0;class qe extends cs{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=hi,s=hi,r=Sn,a=ui,o=In,c=_i,l=qe.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Wn(),this.name="",this.source=new ep(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Bf;qe.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],m=c[9],b=c[2],g=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(p+1)/2,T=(f+1)/2,w=(u+d)/4,R=(h+b)/4,L=(m+g)/4;return E>v&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=L/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=L/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-b)/x,this.z=(d-u)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qg extends cs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ep(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends Qg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class np extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class t_ extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],m=r[a+2],b=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=b;return}if(h!==b||c!==d||l!==p||u!==m){let g=1-o;const f=c*d+l*p+u*m+h*b,x=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const T=Math.sqrt(E),w=Math.atan2(T,f*x);g=Math.sin(g*w)/T,o=Math.sin(o*w)/T}const v=o*x;if(c=c*g+d*v,l=l*g+p*v,u=u*g+m*v,h=h*g+b*v,g===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+u*h+c*p-l*d,t[e+1]=c*m+u*d+l*h-o*p,t[e+2]=l*m+u*p+o*d-c*h,t[e+3]=u*m-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"YZX":this._x=d*u*h+l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h-d*p*m;break;case"XZY":this._x=d*u*h-l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mo=new U,Th=new sn;class ln{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(t.matrixWorld),this.union(Vr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Wr.subVectors(this.max,ir),us.subVectors(t.a,ir),ds.subVectors(t.b,ir),fs.subVectors(t.c,ir),vi.subVectors(ds,us),yi.subVectors(fs,ds),Ni.subVectors(us,fs);let e=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Ni.z,Ni.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Ni.z,0,-Ni.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Ni.y,Ni.x,0];return!So(e,us,ds,fs,Wr)||(e=[1,0,0,0,1,0,0,0,1],!So(e,us,ds,fs,Wr))?!1:(Xr.crossVectors(vi,yi),e=[Xr.x,Xr.y,Xr.z],So(e,us,ds,fs,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],On=new U,Vr=new ln,us=new U,ds=new U,fs=new U,vi=new U,yi=new U,Ni=new U,ir=new U,Wr=new U,Xr=new U,Fi=new U;function So(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);const o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),u=n.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const e_=new ln,sr=new U,Eo=new U;class Nn{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):e_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Eo)),this.expandByPoint(sr.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new U,Ao=new U,jr=new U,Mi=new U,To=new U,qr=new U,wo=new U;class lo{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ao.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,a=-this.direction.dot(jr),o=Mi.dot(this.direction),c=-Mi.dot(jr),l=Mi.lengthSq(),u=Math.abs(1-a*a);let h,d,p,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const b=1/u;h*=b,d*=b,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ao).addScaledVector(jr,d),p}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,s,r){To.subVectors(e,t),qr.subVectors(n,t),wo.crossVectors(To,qr);let a=this.direction.dot(wo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,t);const c=o*this.direction.dot(qr.crossVectors(Mi,qr));if(c<0)return null;const l=o*this.direction.dot(To.cross(Mi));if(l<0||c+l>a)return null;const u=-o*Mi.dot(wo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,c,l,u,h,d,p,m,b,g){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,p,m,b,g)}set(t,e,n,s,r,a,o,c,l,u,h,d,p,m,b,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,m=o*u,b=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+m*l,e[5]=d-b*l,e[9]=-o*c,e[2]=b-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,m=l*u,b=l*h;e[0]=d+b*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-m,e[6]=b+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,m=l*u,b=l*h;e[0]=d-b*o,e[4]=-a*h,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*u,e[9]=b-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,m=o*u,b=o*h;e[0]=c*u,e[4]=m*l-p,e[8]=d*l+b,e[1]=c*h,e[5]=b*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,m=o*c,b=o*l;e[0]=c*u,e[4]=b-d*h,e[8]=m*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+m,e[10]=d-b*h}else if(t.order==="XZY"){const d=a*c,p=a*l,m=o*c,b=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+b,e[5]=a*u,e[9]=p*h-m,e[2]=m*h-p,e[6]=o*u,e[10]=b*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(n_,t,i_)}lookAt(t,e,n){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Si.crossVectors(n,yn),Si.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Si.crossVectors(n,yn)),Si.normalize(),Kr.crossVectors(yn,Si),s[0]=Si.x,s[4]=Kr.x,s[8]=yn.x,s[1]=Si.y,s[5]=Kr.y,s[9]=yn.y,s[2]=Si.z,s[6]=Kr.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],m=n[2],b=n[6],g=n[10],f=n[14],x=n[3],E=n[7],v=n[11],T=n[15],w=s[0],R=s[4],L=s[8],S=s[12],M=s[1],I=s[5],z=s[9],H=s[13],W=s[2],et=s[6],B=s[10],X=s[14],D=s[3],nt=s[7],Y=s[11],J=s[15];return r[0]=a*w+o*M+c*W+l*D,r[4]=a*R+o*I+c*et+l*nt,r[8]=a*L+o*z+c*B+l*Y,r[12]=a*S+o*H+c*X+l*J,r[1]=u*w+h*M+d*W+p*D,r[5]=u*R+h*I+d*et+p*nt,r[9]=u*L+h*z+d*B+p*Y,r[13]=u*S+h*H+d*X+p*J,r[2]=m*w+b*M+g*W+f*D,r[6]=m*R+b*I+g*et+f*nt,r[10]=m*L+b*z+g*B+f*Y,r[14]=m*S+b*H+g*X+f*J,r[3]=x*w+E*M+v*W+T*D,r[7]=x*R+E*I+v*et+T*nt,r[11]=x*L+E*z+v*B+T*Y,r[15]=x*S+E*H+v*X+T*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],m=t[3],b=t[7],g=t[11],f=t[15];return m*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+b*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+g*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],m=t[12],b=t[13],g=t[14],f=t[15],x=h*g*l-b*d*l+b*c*p-o*g*p-h*c*f+o*d*f,E=m*d*l-u*g*l-m*c*p+a*g*p+u*c*f-a*d*f,v=u*b*l-m*h*l+m*o*p-a*b*p-u*o*f+a*h*f,T=m*h*c-u*b*c-m*o*d+a*b*d+u*o*g-a*h*g,w=e*x+n*E+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=x*R,t[1]=(b*d*r-h*g*r-b*s*p+n*g*p+h*s*f-n*d*f)*R,t[2]=(o*g*r-b*c*r+b*s*l-n*g*l-o*s*f+n*c*f)*R,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*R,t[4]=E*R,t[5]=(u*g*r-m*d*r+m*s*p-e*g*p-u*s*f+e*d*f)*R,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*R,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*p+e*c*p)*R,t[8]=v*R,t[9]=(m*h*r-u*b*r-m*n*p+e*b*p+u*n*f-e*h*f)*R,t[10]=(a*b*r-m*o*r+m*n*l-e*b*l-a*n*f+e*o*f)*R,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*R,t[12]=T*R,t[13]=(u*b*s-m*h*s+m*n*d-e*b*d-u*n*g+e*h*g)*R,t[14]=(m*o*s-a*b*s-m*n*c+e*b*c+a*n*g-e*o*g)*R,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,m=r*h,b=a*u,g=a*h,f=o*h,x=c*l,E=c*u,v=c*h,T=n.x,w=n.y,R=n.z;return s[0]=(1-(b+f))*T,s[1]=(p+v)*T,s[2]=(m-E)*T,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(d+f))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+E)*R,s[9]=(g-x)*R,s[10]=(1-(d+b))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ps.set(s[0],s[1],s[2]).length();const a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);const l=1/r,u=1/a,h=1/o;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,e.setFromRotationMatrix(kn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=di){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,m;if(o===di)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Za)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=di){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,p=(n+s)*u;let m,b;if(o===di)m=(a+r)*h,b=-2*h;else if(o===Za)m=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new U,kn=new ae,n_=new U(0,0,0),i_=new U(1,1,1),Si=new U,Kr=new U,yn=new U,wh=new ae,Rh=new sn;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rh.setFromEuler(this),this.setFromQuaternion(Rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s_=0;const Ch=new U,ms=new sn,ii=new ae,Yr=new U,rr=new U,r_=new U,a_=new sn,Ph=new U(1,0,0),Ih=new U(0,1,0),Lh=new U(0,0,1),Dh={type:"added"},o_={type:"removed"},gs={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Ne extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new U,e=new Un,n=new sn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new ue}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Ph,t)}rotateY(t){return this.rotateOnAxis(Ih,t)}rotateZ(t){return this.rotateOnAxis(Lh,t)}translateOnAxis(t,e){return Ch.copy(t).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ph,t)}translateY(t){return this.translateOnAxis(Ih,t)}translateZ(t){return this.translateOnAxis(Lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(rr,Yr,this.up):ii.lookAt(Yr,rr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ii),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dh),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(o_),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,r_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,a_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new U(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new U,si=new U,Co=new U,ri=new U,_s=new U,bs=new U,Uh=new U,Po=new U,Io=new U,Lo=new U,Do=new _e,Uo=new _e,No=new _e;class Pn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Bn.subVectors(s,e),si.subVectors(n,e),Co.subVectors(t,e);const a=Bn.dot(Bn),o=Bn.dot(si),c=Bn.dot(Co),l=si.dot(si),u=si.dot(Co),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Do.setScalar(0),Uo.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(t,e),Uo.fromBufferAttribute(t,n),No.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Do,r.x),a.addScaledVector(Uo,r.y),a.addScaledVector(No,r.z),a}static isFrontFacing(t,e,n,s){return Bn.subVectors(n,e),si.subVectors(t,e),Bn.cross(si).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Bn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;_s.subVectors(s,n),bs.subVectors(r,n),Po.subVectors(t,n);const c=_s.dot(Po),l=bs.dot(Po);if(c<=0&&l<=0)return e.copy(n);Io.subVectors(t,s);const u=_s.dot(Io),h=bs.dot(Io);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(_s,a);Lo.subVectors(t,r);const p=_s.dot(Lo),m=bs.dot(Lo);if(m>=0&&p<=m)return e.copy(r);const b=p*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(bs,o);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return Uh.subVectors(r,s),o=(h-u)/(h-u+(p-m)),e.copy(s).addScaledVector(Uh,o);const f=1/(g+b+d);return a=b*f,o=d*f,e.copy(n).addScaledVector(_s,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=zl(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fo(a,r,t+1/3),this.g=Fo(a,r,t),this.b=Fo(a,r,t-1/3)}return Me.toWorkingColorSpace(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Me.fromWorkingColorSpace(on.copy(this),t),Math.round(pe(on.r*255,0,255))*65536+Math.round(pe(on.g*255,0,255))*256+Math.round(pe(on.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.fromWorkingColorSpace(on.copy(this),e);const n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Me.workingColorSpace){return Me.fromWorkingColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Fe){Me.fromWorkingColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL($r);const n=wr(Ei.h,$r.h,e),s=wr(Ei.s,$r.s,e),r=wr(Ei.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new ne;ne.NAMES=sp;let c_=0;class Dn extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Ns,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=Ec,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ec&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ze extends Dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,Zr=new Zt;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class rp extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ap extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ge extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let l_=0;const An=new ae,Oo=new Ne,xs=new U,Mn=new ln,ar=new ln,$e=new U;class He extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tp(t)?ap:rp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Mn.min,ar.min),Mn.expandByPoint($e),$e.addVectors(Mn.max,ar.max),Mn.expandByPoint($e)):(Mn.expandByPoint(ar.min),Mn.expandByPoint(ar.max))}Mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$e.fromBufferAttribute(o,l),c&&(xs.fromBufferAttribute(t,l),$e.add(xs)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new U,c[L]=new U;const l=new U,u=new U,h=new U,d=new Zt,p=new Zt,m=new Zt,b=new U,g=new U;function f(L,S,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),u.sub(l),h.sub(l),p.sub(d),m.sub(d);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(b.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(I),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(I),o[L].add(b),o[S].add(b),o[M].add(b),c[L].add(g),c[S].add(g),c[M].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,S=x.length;L<S;++L){const M=x[L],I=M.start,z=M.count;for(let H=I,W=I+z;H<W;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new U,v=new U,T=new U,w=new U;function R(L){T.fromBufferAttribute(s,L),w.copy(T);const S=o[L];E.copy(S),E.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(w,S);const I=v.dot(c[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,S=x.length;L<S;++L){const M=x[L],I=M.start,z=M.count;for(let H=I,W=I+z;H<W;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),b=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*u;for(let f=0;f<u;f++)d[m++]=l[p++]}return new Ae(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nh=new ae,Oi=new lo,Jr=new Nn,Fh=new U,Qr=new U,ta=new U,ea=new U,ko=new U,na=new U,Oh=new U,ia=new U;class Se extends Ne{constructor(t=new He,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(ko.fromBufferAttribute(h,t),a?na.addScaledVector(ko,u):na.addScaledVector(ko.sub(e),u))}e.add(na)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Jr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Jr,Fh)===null||Oi.origin.distanceToSquared(Fh)>(t.far-t.near)**2))&&(Nh.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){const g=d[m],f=a[g.materialIndex],x=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,T=E;v<T;v+=3){const w=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);s=sa(this,f,t,n,l,u,h,w,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let g=m,f=b;g<f;g+=3){const x=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);s=sa(this,a,t,n,l,u,h,x,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){const g=d[m],f=a[g.materialIndex],x=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,T=E;v<T;v+=3){const w=v,R=v+1,L=v+2;s=sa(this,f,t,n,l,u,h,w,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let g=m,f=b;g<f;g+=3){const x=g,E=g+1,v=g+2;s=sa(this,a,t,n,l,u,h,x,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function h_(i,t,e,n,s,r,a,o){let c;if(t.side===vn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===gi,o),c===null)return null;ia.copy(o),ia.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:i}}function sa(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Qr),i.getVertexPosition(c,ta),i.getVertexPosition(l,ea);const u=h_(i,t,e,n,Qr,ta,ea,Oh);if(u){const h=new U;Pn.getBarycoord(Oh,Qr,ta,ea,h),s&&(u.uv=Pn.getInterpolatedAttribute(s,o,c,l,h,new Zt)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,o,c,l,h,new Zt)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};Pn.getNormal(Qr,ta,ea,d.normal),u.face=d,u.barycoord=h}return u}class Ui extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function m(b,g,f,x,E,v,T,w,R,L,S){const M=v/R,I=T/L,z=v/2,H=T/2,W=w/2,et=R+1,B=L+1;let X=0,D=0;const nt=new U;for(let Y=0;Y<B;Y++){const J=Y*I-H;for(let mt=0;mt<et;mt++){const kt=mt*M-z;nt[b]=kt*x,nt[g]=J*E,nt[f]=W,l.push(nt.x,nt.y,nt.z),nt[b]=0,nt[g]=0,nt[f]=w>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(mt/R),h.push(1-Y/L),X+=1}}for(let Y=0;Y<L;Y++)for(let J=0;J<R;J++){const mt=d+J+et*Y,kt=d+J+et*(Y+1),Q=d+(J+1)+et*(Y+1),at=d+(J+1)+et*Y;c.push(mt,kt,at),c.push(kt,Q,at),D+=6}o.addGroup(p,D,S),p+=D,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=js(i[e]);for(const s in n)t[s]=n[s]}return t}function u_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function op(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const Hl={clone:js,merge:fn};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=u_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class cp extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new U,kh=new Zt,Bh=new Zt;class pn extends cp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,kh,Bh),e.subVectors(Bh,kh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vs=-90,ys=1;class p_ extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(vs,ys,t,e);s.layers=this.layers,this.add(s);const r=new pn(vs,ys,t,e);r.layers=this.layers,this.add(r);const a=new pn(vs,ys,t,e);a.layers=this.layers,this.add(a);const o=new pn(vs,ys,t,e);o.layers=this.layers,this.add(o);const c=new pn(vs,ys,t,e);c.layers=this.layers,this.add(c);const l=new pn(vs,ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class lp extends qe{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class m_ extends rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ui(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Li});r.uniforms.tEquirect.value=e;const a=new Se(s,r),o=e.minFilter;return e.minFilter===ui&&(e.minFilter=Sn),new p_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Gl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new Gl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class g_ extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new U;class Vn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class hp extends Dn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ms;const or=new U,Ss=new U,Es=new U,As=new Zt,cr=new Zt,up=new ae,ra=new U,lr=new U,aa=new U,zh=new Zt,Bo=new Zt,Hh=new Zt;class __ extends Ne{constructor(t=new hp){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vl(e,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Vn(n,3,0,!1)),Ms.setAttribute("uv",new Vn(n,2,3,!1))}this.geometry=Ms,this.material=t,this.center=new Zt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),up.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Es.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;oa(ra.set(-.5,-.5,0),Es,a,Ss,s,r),oa(lr.set(.5,-.5,0),Es,a,Ss,s,r),oa(aa.set(.5,.5,0),Es,a,Ss,s,r),zh.set(0,0),Bo.set(1,0),Hh.set(1,1);let o=t.ray.intersectTriangle(ra,lr,aa,!1,or);if(o===null&&(oa(lr.set(-.5,.5,0),Es,a,Ss,s,r),Bo.set(0,1),o=t.ray.intersectTriangle(ra,aa,lr,!1,or),o===null))return;const c=t.ray.origin.distanceTo(or);c<t.near||c>t.far||e.push({distance:c,point:or.clone(),uv:Pn.getInterpolation(or,ra,lr,aa,zh,Bo,Hh,new Zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function oa(i,t,e,n,s,r){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(cr.x=r*As.x-s*As.y,cr.y=s*As.x+r*As.y):cr.copy(As),i.copy(t),i.x+=cr.x,i.y+=cr.y,i.applyMatrix4(up)}const Gh=new U,Vh=new _e,Wh=new _e,b_=new U,Xh=new ae,ca=new U,zo=new Nn,jh=new ae,Ho=new lo;class x_ extends Se{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xh,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ca),this.boundingSphere.expandByPoint(ca)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(s),t.ray.intersectsSphere(zo)!==!1&&(jh.copy(s).invert(),Ho.copy(t.ray).applyMatrix4(jh),!(this.boundingBox!==null&&Ho.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ho)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Vh.fromBufferAttribute(s.attributes.skinIndex,t),Wh.fromBufferAttribute(s.attributes.skinWeight,t),Gh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Wh.getComponent(r);if(a!==0){const o=Vh.getComponent(r);Xh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(b_.copy(Gh).applyMatrix4(Xh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class dp extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fp extends qe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=gn,u=gn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qh=new ae,v_=new ae;class Wl{constructor(t=[],e=[]){this.uuid=Wn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ae;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:v_;qh.multiplyMatrices(o,e[r]),qh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new fp(e,t,t,In,Gn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dp),this.bones.push(a),this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class ll extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ts=new ae,Kh=new ae,la=[],Yh=new ln,y_=new ae,hr=new Se,ur=new Nn;class M_ extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,y_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),Yh.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(Yh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ts),ur.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Kh.multiplyMatrices(n,Ts),hr.matrixWorld=Kh,hr.raycast(t,la);for(let a=0,o=la.length;a<o;a++){const c=la[a];c.instanceId=r,c.object=this,e.push(c)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fp(new Float32Array(s*this.count),s,this.count,Ul,Gn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Go=new U,S_=new U,E_=new ue;class ji{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Go.subVectors(n,e).cross(S_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Go),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||E_.getNormalMatrix(t),s=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Nn,ha=new U;class Xl{constructor(t=new ji,e=new ji,n=new ji,s=new ji,r=new ji,a=new ji){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=di){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],m=s[9],b=s[10],g=s[11],f=s[12],x=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-p,v-f).normalize(),n[1].setComponents(c+r,d+l,g+p,v+f).normalize(),n[2].setComponents(c+a,d+u,g+m,v+x).normalize(),n[3].setComponents(c-a,d-u,g-m,v-x).normalize(),n[4].setComponents(c-o,d-h,g-b,v-E).normalize(),e===di)n[5].setComponents(c+o,d+h,g+b,v+E).normalize();else if(e===Za)n[5].setComponents(o,h,b,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ha.x=s.normal.x>0?t.max.x:t.min.x,ha.y=s.normal.y>0?t.max.y:t.min.y,ha.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends Dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ja=new U,Qa=new U,$h=new ae,dr=new lo,ua=new Nn,Vo=new U,Zh=new U;class jl extends Ne{constructor(t=new He,e=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ja.fromBufferAttribute(e,s-1),Qa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ja.distanceTo(Qa);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(s),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;$h.copy(s).invert(),dr.copy(t.ray).applyMatrix4($h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let b=p,g=m-1;b<g;b+=l){const f=u.getX(b),x=u.getX(b+1),E=da(this,t,dr,c,f,x);E&&e.push(E)}if(this.isLineLoop){const b=u.getX(m-1),g=u.getX(p),f=da(this,t,dr,c,b,g);f&&e.push(f)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=p,g=m-1;b<g;b+=l){const f=da(this,t,dr,c,b,b+1);f&&e.push(f)}if(this.isLineLoop){const b=da(this,t,dr,c,m-1,p);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function da(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Ja.fromBufferAttribute(a,s),Qa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ja,Qa,Vo,Zh)>n)return;Vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vo);if(!(c<t.near||c>t.far))return{distance:c,point:Zh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jh=new U,Qh=new U;class A_ extends jl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Jh.fromBufferAttribute(e,s),Qh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jh.distanceTo(Qh);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T_ extends jl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class mp extends Dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const tu=new ae,hl=new lo,fa=new Nn,pa=new U;class w_ extends Ne{constructor(t=new He,e=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,t.ray.intersectsSphere(fa)===!1)return;tu.copy(s).invert(),hl.copy(t.ray).applyMatrix4(tu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=d,b=p;m<b;m++){const g=l.getX(m);pa.fromBufferAttribute(h,g),eu(pa,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,b=p;m<b;m++)pa.fromBufferAttribute(h,m),eu(pa,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eu(i,t,e,n,s,r,a){const o=hl.distanceSqToPoint(i);if(o<e){const c=new U;hl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ln extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Fn extends qe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gp extends qe{constructor(t,e,n,s,r,a,o,c,l,u=Fs){if(u!==Fs&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=ss),n===void 0&&u===Ws&&(n=Vs),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ql extends He{constructor(t=[new Zt(0,-.5),new Zt(.5,0),new Zt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new U,d=new Zt,p=new U,m=new U,b=new U;let g=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(m)}for(let x=0;x<=e;x++){const E=n+x*u*s,v=Math.sin(E),T=Math.cos(E);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*v,h.y=t[w].y,h.z=t[w].x*T,a.push(h.x,h.y,h.z),d.x=x/e,d.y=w/(t.length-1),o.push(d.x,d.y);const R=c[3*w+0]*v,L=c[3*w+1],S=c[3*w+0]*T;l.push(R,L,S)}}for(let x=0;x<e;x++)for(let E=0;E<t.length-1;E++){const v=E+x*t.length,T=v,w=v+t.length,R=v+t.length+1,L=v+1;r.push(T,w,L),r.push(R,L,w)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.points,t.segments,t.phiStart,t.phiLength)}}class Kl extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new U,u=new Zt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xn extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,p=[],m=[],b=[],g=[];for(let f=0;f<u;f++){const x=f*d-a;for(let E=0;E<l;E++){const v=E*h-r;m.push(v,-x,0),b.push(0,0,1),g.push(E/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const E=x+l*f,v=x+l*(f+1),T=x+1+l*(f+1),w=x+1+l*f;p.push(E,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(b,3)),this.setAttribute("uv",new Ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ho extends He{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new U,m=new Zt;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){const f=r+g/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let b=0;b<s;b++){const g=b*(n+1);for(let f=0;f<n;f++){const x=f+g,E=x,v=x+n+1,T=x+n+2,w=x+1;o.push(E,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class R_ extends He{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new U,r=new U;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,p=h.count;for(let m=d,b=d+p;m<b;m+=3)for(let g=0;g<3;g++){const f=o.getX(m+g),x=o.getX(m+(g+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,x),nu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),nu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ge(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function nu(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Hr extends Dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qn extends Hr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ur extends Dn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bl,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class C_ extends Dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P_ extends Dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Qi(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _p(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bp(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function ul(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=i[o+c]}return s}function Yl(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}function I_(i,t,e,n,s=30){const r=i.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let p=0;p<l.times.length;++p){const m=l.times[p]*s;if(!(m<e||m>=n)){h.push(l.times[p]);for(let b=0;b<u;++b)d.push(l.values[p*u+b])}}h.length!==0&&(l.times=Qi(h,l.times.constructor),l.values=Qi(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function L_(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let a=0;a<s;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const m=o.times.length-1;let b;if(r<=o.times[0]){const f=u,x=h-u;b=o.values.slice(f,x)}else if(r>=o.times[m]){const f=m*h+u,x=f+h-u;b=o.values.slice(f,x)}else{const f=o.createInterpolant(),x=u,E=h-u;f.evaluate(r),b=f.resultBuffer.slice(x,E)}c==="quaternion"&&new sn().fromArray(b).normalize().conjugate().toArray(b);const g=l.times.length;for(let f=0;f<g;++f){const x=f*p+d;if(c==="quaternion")sn.multiplyQuaternionsFlat(l.values,x,b,0,l.values,x);else{const E=p-d*2;for(let v=0;v<E;++v)l.values[x+v]-=b[v]}}}return i.blendMode=$f,i}const D_={convertArray:Qi,isTypedArray:_p,getKeyframeOrder:bp,sortedArray:ul,flattenJSON:Yl,subclip:I_,makeClipAdditive:L_};class Gr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class U_ extends Gr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Is,endingEnd:Is}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ls:r=t,o=2*e-n;break;case Ya:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ls:a=t,c=2*n-e;break;case Ya:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),b=m*m,g=b*m,f=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,E=(-1-p)*g+(1.5+p)*b+.5*m,v=p*g-p*b;for(let T=0;T!==o;++T)r[T]=f*a[u+T]+x*a[l+T]+E*a[c+T]+v*a[h+T];return r}}class xp extends Gr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class N_ extends Gr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ti{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qi(e,this.TimeBufferType),this.values=Qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qi(t.times,Array),values:Qi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new N_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new U_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case Lr:e=this.InterpolantFactoryMethodLinear;break;case xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&_p(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xo,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{const h=o*n,d=h-n,p=h+n;for(let m=0;m!==n;++m){const b=e[h+m];if(b!==e[d+m]||b!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Lr;class $s extends ti{constructor(t,e,n){super(t,e,n)}}$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Ir;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;class vp extends ti{}vp.prototype.ValueTypeName="color";class qs extends ti{}qs.prototype.ValueTypeName="number";class F_ extends Gr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e);let l=t*o;for(let u=l+o;l!==u;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Ks extends ti{InterpolantFactoryMethodLinear(t){return new F_(this.times,this.values,this.getValueSize(),t)}}Ks.prototype.ValueTypeName="quaternion";Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends ti{constructor(t,e,n){super(t,e,n)}}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Ir;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends ti{}Ys.prototype.ValueTypeName="vector";class dl{constructor(t="",e=-1,n=[],s=kl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(k_(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(ti.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=bp(c);c=ul(c,1,u),l=ul(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new qs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,m,b){if(p.length!==0){const g=[],f=[];Yl(p,g,f,m),g.length!==0&&b.push(new h(d,g,f))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)p[d[m].morphTargets[b]]=-1;for(const b in p){const g=[],f=[];for(let x=0;x!==d[m].morphTargets.length;++x){const E=d[m];g.push(E.time),f.push(E.morphTarget===b?1:0)}s.push(new qs(".morphTargetInfluence["+b+"]",g,f))}c=p.length*a}else{const p=".bones["+e[h].name+"]";n(Ys,p+".position",d,"pos",s),n(Ks,p+".quaternion",d,"rot",s),n(Ys,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function O_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return vp;case"quaternion":return Ks;case"bool":case"boolean":return $s;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function k_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=O_(i.type);if(i.times===void 0){const e=[],n=[];Yl(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Ci={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class B_{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const z_=new B_;class Js{constructor(t){this.manager=t!==void 0?t:z_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Js.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class H_ extends Error{constructor(t,e){super(t),this.response=e}}class yp extends Js{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ci.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:s});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ai[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0;let b=0;const g=new ReadableStream({start(f){x();function x(){h.read().then(({done:E,value:v})=>{if(E)f.close();else{b+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:p});for(let w=0,R=u.length;w<R;w++){const L=u[w];L.onProgress&&L.onProgress(T)}f.enqueue(v),x()}},E=>{f.error(E)})}}});return new Response(g)}else throw new H_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(m=>p.decode(m))}}}).then(l=>{Ci.add(t,l);const u=ai[t];delete ai[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ai[t];if(u===void 0)throw this.manager.itemError(t),l;delete ai[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class G_ extends Js{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ci.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Dr("img");function c(){u(),Ci.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class V_ extends Js{constructor(t){super(t)}load(t,e,n,s){const r=new qe,a=new G_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class uo extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class W_ extends uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new ae,iu=new U,su=new U;class $l{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;iu.setFromMatrixPosition(t.matrixWorld),e.position.copy(iu),su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(su),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class X_ extends $l{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Xs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class j_ extends uo{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new X_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ru=new ae,fr=new U,Xo=new U;class q_ extends $l{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Zt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fr.setFromMatrixPosition(t.matrixWorld),n.position.copy(fr),Xo.copy(n.position),Xo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xo),n.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru)}}class K_ extends uo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new q_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zl extends cp{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Y_ extends $l{constructor(){super(new Zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Y_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Rr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class $_ extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Z_ extends Js{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ci.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ci.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),Ci.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ci.add(t,c),r.manager.itemStart(t)}}class J_ extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Q_{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){sn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;sn.multiplyQuaternionsFlat(t,a,t,e,t,n),sn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const Jl="\\[\\]\\.:\\/",t0=new RegExp("["+Jl+"]","g"),Ql="[^"+Jl+"]",e0="[^"+Jl.replace("\\.","")+"]",n0=/((?:WC+[\/:])*)/.source.replace("WC",Ql),i0=/(WCOD+)?/.source.replace("WCOD",e0),s0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ql),r0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ql),a0=new RegExp("^"+n0+i0+s0+r0+"$"),o0=["material","materials","bones","map"];class c0{constructor(t,e,n){const s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class we{constructor(t,e,n){this.path=e,this.parsedPath=n||we.parseTrackName(e),this.node=we.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new we.Composite(t,e,n):new we(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(t0,"")}static parseTrackName(t){const e=a0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);o0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=we.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[s];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}we.Composite=c0;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class l0{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:Is,endingEnd:Is};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Va,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $f:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case kl:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===_g;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===al){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=Ls,s.endingEnd=Ls):(t?s.endingStart=this.zeroSlopeAtStart?Ls:Is:s.endingStart=Ya,e?s.endingEnd=this.zeroSlopeAtEnd?Ls:Is:s.endingEnd=Ya)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const h0=new Float32Array(1);class u0 extends cs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],p=d.name;let m=u[p];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,p));continue}const b=e&&e._propertyBindings[h].binding.parsedPath;m=new Q_(we.create(n,p,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,p),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new xp(new Float32Array(2),new Float32Array(2),1,h0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?dl.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=kl),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new l0(this,a,e,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?dl.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class fl extends Vl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const au=new U,ma=new U;class d0{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){au.subVectors(t,this.start),ma.subVectors(this.end,this.start);const n=ma.dot(ma);let r=ma.dot(au)/n;return e&&(r=pe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ou(i,t,e,n){const s=f0(n);switch(e){case Wf:return i*t;case jf:return i*t;case qf:return i*t*2;case Ul:return i*t/s.components*s.byteLength;case Nl:return i*t/s.components*s.byteLength;case Kf:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Xf:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case Ol:return i*t*4/s.components*s.byteLength;case ka:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nc:case Oc:return Math.max(i,16)*Math.max(t,8)/4;case Uc:case Fc:return Math.max(i,8)*Math.max(t,8)/2;case kc:case Bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Hc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Jc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yf:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f0(i){switch(i){case _i:case Hf:return{byteLength:1,components:1};case Pr:case Gf:case zr:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case ss:case Il:case Gn:return{byteLength:4,components:1};case Vf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sp(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function p0(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],b=h[p];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,h[d]=b)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const b=h[p];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var m0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,M0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,E0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,B0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ib=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ab=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,db=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ax=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ux=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:m0,alphahash_pars_fragment:g0,alphamap_fragment:_0,alphamap_pars_fragment:b0,alphatest_fragment:x0,alphatest_pars_fragment:v0,aomap_fragment:y0,aomap_pars_fragment:M0,batching_pars_vertex:S0,batching_vertex:E0,begin_vertex:A0,beginnormal_vertex:T0,bsdfs:w0,iridescence_fragment:R0,bumpmap_pars_fragment:C0,clipping_planes_fragment:P0,clipping_planes_pars_fragment:I0,clipping_planes_pars_vertex:L0,clipping_planes_vertex:D0,color_fragment:U0,color_pars_fragment:N0,color_pars_vertex:F0,color_vertex:O0,common:k0,cube_uv_reflection_fragment:B0,defaultnormal_vertex:z0,displacementmap_pars_vertex:H0,displacementmap_vertex:G0,emissivemap_fragment:V0,emissivemap_pars_fragment:W0,colorspace_fragment:X0,colorspace_pars_fragment:j0,envmap_fragment:q0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Y0,envmap_pars_vertex:$0,envmap_physical_pars_fragment:ob,envmap_vertex:Z0,fog_vertex:J0,fog_pars_vertex:Q0,fog_fragment:tb,fog_pars_fragment:eb,gradientmap_pars_fragment:nb,lightmap_pars_fragment:ib,lights_lambert_fragment:sb,lights_lambert_pars_fragment:rb,lights_pars_begin:ab,lights_toon_fragment:cb,lights_toon_pars_fragment:lb,lights_phong_fragment:hb,lights_phong_pars_fragment:ub,lights_physical_fragment:db,lights_physical_pars_fragment:fb,lights_fragment_begin:pb,lights_fragment_maps:mb,lights_fragment_end:gb,logdepthbuf_fragment:_b,logdepthbuf_pars_fragment:bb,logdepthbuf_pars_vertex:xb,logdepthbuf_vertex:vb,map_fragment:yb,map_pars_fragment:Mb,map_particle_fragment:Sb,map_particle_pars_fragment:Eb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Rb,morphnormal_vertex:Cb,morphtarget_pars_vertex:Pb,morphtarget_vertex:Ib,normal_fragment_begin:Lb,normal_fragment_maps:Db,normal_pars_fragment:Ub,normal_pars_vertex:Nb,normal_vertex:Fb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:kb,clearcoat_normal_fragment_maps:Bb,clearcoat_pars_fragment:zb,iridescence_pars_fragment:Hb,opaque_fragment:Gb,packing:Vb,premultiplied_alpha_fragment:Wb,project_vertex:Xb,dithering_fragment:jb,dithering_pars_fragment:qb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:$b,shadowmap_pars_vertex:Zb,shadowmap_vertex:Jb,shadowmask_pars_fragment:Qb,skinbase_vertex:tx,skinning_pars_vertex:ex,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:sx,specularmap_pars_fragment:rx,tonemapping_fragment:ax,tonemapping_pars_fragment:ox,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:hx,uv_pars_vertex:ux,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:bx,cube_frag:xx,depth_vert:vx,depth_frag:yx,distanceRGBA_vert:Mx,distanceRGBA_frag:Sx,equirect_vert:Ex,equirect_frag:Ax,linedashed_vert:Tx,linedashed_frag:wx,meshbasic_vert:Rx,meshbasic_frag:Cx,meshlambert_vert:Px,meshlambert_frag:Ix,meshmatcap_vert:Lx,meshmatcap_frag:Dx,meshnormal_vert:Ux,meshnormal_frag:Nx,meshphong_vert:Fx,meshphong_frag:Ox,meshphysical_vert:kx,meshphysical_frag:Bx,meshtoon_vert:zx,meshtoon_frag:Hx,points_vert:Gx,points_frag:Vx,shadow_vert:Wx,shadow_frag:Xx,sprite_vert:jx,sprite_frag:qx},Rt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},xn={basic:{uniforms:fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:fn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:fn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:fn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new ne(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:fn([Rt.points,Rt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:fn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:fn([Rt.common,Rt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:fn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:fn([Rt.sprite,Rt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:fn([Rt.common,Rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:fn([Rt.lights,Rt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};xn.physical={uniforms:fn([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const ga={r:0,b:0,g:0},Bi=new Un,Kx=new ae;function Yx(i,t,e,n,s,r,a){const o=new ne(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function m(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function b(E){let v=!1;const T=m(E);T===null?f(o,c):T&&T.isColor&&(f(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,v){const T=m(v);T&&(T.isCubeTexture||T.mapping===co)?(u===void 0&&(u=new Se(new Ui(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:js(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(Bi)),u.material.toneMapped=Me.getTransfer(T.colorSpace)!==De,(h!==T||d!==T.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Se(new Xn(2,2),new bi({name:"BackgroundMaterial",uniforms:js(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Me.getTransfer(T.colorSpace)!==De,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,v){E.getRGB(ga,op(i)),n.buffers.color.setClear(ga.r,ga.g,ga.b,v,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:b,addToRenderList:g,dispose:x}}function $x(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,I,z,H,W){let et=!1;const B=h(H,z,I);r!==B&&(r=B,l(r.object)),et=p(M,H,z,W),et&&m(M,H,z,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(et||a)&&(a=!1,v(M,I,z,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,I,z){const H=z.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let et=W[I.id];et===void 0&&(et={},W[I.id]=et);let B=et[H];return B===void 0&&(B=d(c()),et[H]=B),B}function d(M){const I=[],z=[],H=[];for(let W=0;W<e;W++)I[W]=0,z[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,I,z,H){const W=r.attributes,et=I.attributes;let B=0;const X=z.getAttributes();for(const D in X)if(X[D].location>=0){const Y=W[D];let J=et[D];if(J===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),Y===void 0||Y.attribute!==J||J&&Y.data!==J.data)return!0;B++}return r.attributesNum!==B||r.index!==H}function m(M,I,z,H){const W={},et=I.attributes;let B=0;const X=z.getAttributes();for(const D in X)if(X[D].location>=0){let Y=et[D];Y===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor));const J={};J.attribute=Y,Y&&Y.data&&(J.data=Y.data),W[D]=J,B++}r.attributes=W,r.attributesNum=B,r.index=H}function b(){const M=r.newAttributes;for(let I=0,z=M.length;I<z;I++)M[I]=0}function g(M){f(M,0)}function f(M,I){const z=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;z[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),W[M]!==I&&(i.vertexAttribDivisor(M,I),W[M]=I)}function x(){const M=r.newAttributes,I=r.enabledAttributes;for(let z=0,H=I.length;z<H;z++)I[z]!==M[z]&&(i.disableVertexAttribArray(z),I[z]=0)}function E(M,I,z,H,W,et,B){B===!0?i.vertexAttribIPointer(M,I,z,W,et):i.vertexAttribPointer(M,I,z,H,W,et)}function v(M,I,z,H){b();const W=H.attributes,et=z.getAttributes(),B=I.defaultAttributeValues;for(const X in et){const D=et[X];if(D.location>=0){let nt=W[X];if(nt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const Y=nt.normalized,J=nt.itemSize,mt=t.get(nt);if(mt===void 0)continue;const kt=mt.buffer,Q=mt.type,at=mt.bytesPerElement,ct=Q===i.INT||Q===i.UNSIGNED_INT||nt.gpuType===Il;if(nt.isInterleavedBufferAttribute){const Z=nt.data,vt=Z.stride,Ut=nt.offset;if(Z.isInstancedInterleavedBuffer){for(let Lt=0;Lt<D.locationSize;Lt++)f(D.location+Lt,Z.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Lt=0;Lt<D.locationSize;Lt++)g(D.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Lt=0;Lt<D.locationSize;Lt++)E(D.location+Lt,J/D.locationSize,Q,Y,vt*at,(Ut+J/D.locationSize*Lt)*at,ct)}else{if(nt.isInstancedBufferAttribute){for(let Z=0;Z<D.locationSize;Z++)f(D.location+Z,nt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<D.locationSize;Z++)g(D.location+Z);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Z=0;Z<D.locationSize;Z++)E(D.location+Z,J/D.locationSize,Q,Y,J*at,J/D.locationSize*Z*at,ct)}}else if(B!==void 0){const Y=B[X];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(D.location,Y);break;case 3:i.vertexAttrib3fv(D.location,Y);break;case 4:i.vertexAttrib4fv(D.location,Y);break;default:i.vertexAttrib1fv(D.location,Y)}}}}x()}function T(){L();for(const M in n){const I=n[M];for(const z in I){const H=I[z];for(const W in H)u(H[W].object),delete H[W];delete I[z]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const z in I){const H=I[z];for(const W in H)u(H[W].object),delete H[W];delete I[z]}delete n[M.id]}function R(M){for(const I in n){const z=n[I];if(z[M.id]===void 0)continue;const H=z[M.id];for(const W in H)u(H[W].object),delete H[W];delete z[M.id]}}function L(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Zx(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let b=0;b<h;b++)m+=u[b]*d[b];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Jx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==In&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_i&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function Qx(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ji,o=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,b=h.clipIntersection,g=h.clipShadows,f=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,E=x*4;let v=f.clippingState||null;c.value=v,v=u(m,d,E,p);for(let T=0;T!==E;++T)v[T]=e[T];f.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,m){const b=h!==null?h.length:0;let g=null;if(b!==0){if(g=c.value,m!==!0||g===null){const f=p+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let E=0,v=p;E!==b;++E,v+=4)a.copy(h[E]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}function tv(i){let t=new WeakMap;function e(a,o){return o===Lc?a.mapping=Hs:o===Dc&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lc||o===Dc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new m_(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ds=4,cu=[.125,.215,.35,.446,.526,.582],Zi=20,jo=new Zl,lu=new ne;let qo=null,Ko=0,Yo=0,$o=!1;const qi=(1+Math.sqrt(5))/2,ws=1/qi,hu=[new U(-qi,ws,0),new U(qi,ws,0),new U(-ws,0,qi),new U(ws,0,qi),new U(0,qi,-ws),new U(0,qi,ws),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,Ko,Yo),this._renderer.xr.enabled=$o,t.scissorTest=!1,_a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:zr,format:In,colorSpace:_n,depthBuffer:!1},s=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ev(r)),this._blurMaterial=nv(r,t,e)}return s}_compileMaterial(t){const e=new Se(this._lodPlanes[0],t);this._renderer.compile(e,jo)}_sceneToCubeUV(t,e,n,s){const o=new pn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(lu),u.toneMapping=Di,u.autoClear=!1;const p=new Ze({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),m=new Se(new Ui,p);let b=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,b=!0):(p.color.copy(lu),b=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const E=this._cubeSize;_a(s,x*E,f>2?E:0,E,E),u.setRenderTarget(s),b&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hs||t.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_a(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,jo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hu[(s-r-1)%hu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Se(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),b=r/m,g=isFinite(r)?1+Math.floor(u*b):Zi;g>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zi}`);const f=[];let x=0;for(let R=0;R<Zi;++R){const L=R/b,S=Math.exp(-L*L/2);f.push(S),R===0?x+=S:R<g&&(x+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const v=this._sizeLods[s],T=3*v*(s>E-Ds?s-E+Ds:0),w=4*(this._cubeSize-v);_a(e,T,w,3*v,2*v),c.setRenderTarget(e),c.render(h,jo)}}function ev(i){const t=[],e=[],n=[];let s=i;const r=i-Ds+1+cu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ds?c=cu[a-i+Ds-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,b=3,g=2,f=1,x=new Float32Array(b*m*p),E=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,L=w>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(S,b*m*w),E.set(d,g*m*w);const M=[w,w,w,w,w,w];v.set(M,f*m*w)}const T=new He;T.setAttribute("position",new Ae(x,b)),T.setAttribute("uv",new Ae(E,g)),T.setAttribute("faceIndex",new Ae(v,f)),t.push(T),s>Ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(i,t,e){const n=new rs(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nv(i,t,e){const n=new Float32Array(Zi),s=new U(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function fu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function pu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iv(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lc||c===Dc,u=c===Hs||c===Gs;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new uu(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new uu(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rv(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,m=h.attributes.position;let b=0;if(p!==null){const x=p.array;b=p.version;for(let E=0,v=x.length;E<v;E+=3){const T=x[E+0],w=x[E+1],R=x[E+2];d.push(T,w,w,R,R,T)}}else if(m!==void 0){const x=m.array;b=m.version;for(let E=0,v=x.length/3-1;E<v;E+=3){const T=E+0,w=E+1,R=E+2;d.push(T,w,w,R,R,T)}}else return;const g=new(tp(d)?ap:rp)(d,1);g.version=b;const f=r.get(h);f&&t.remove(f),r.set(h,g)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function av(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function u(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function h(d,p,m,b){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],b[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,b,0,m);let f=0;for(let x=0;x<m;x++)f+=p[x]*b[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ov(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function cv(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),m===!0&&(E=2),b===!0&&(E=3);let v=o.attributes.position.count*E,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*T*4*h),R=new np(w,v,T,h);R.type=Gn,R.needsUpdate=!0;const L=E*4;for(let M=0;M<h;M++){const I=g[M],z=f[M],H=x[M],W=v*T*4*M;for(let et=0;et<I.count;et++){const B=et*L;p===!0&&(s.fromBufferAttribute(I,et),w[W+B+0]=s.x,w[W+B+1]=s.y,w[W+B+2]=s.z,w[W+B+3]=0),m===!0&&(s.fromBufferAttribute(z,et),w[W+B+4]=s.x,w[W+B+5]=s.y,w[W+B+6]=s.z,w[W+B+7]=0),b===!0&&(s.fromBufferAttribute(H,et),w[W+B+8]=s.x,w[W+B+9]=s.y,w[W+B+10]=s.z,w[W+B+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Zt(v,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];const m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function lv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Ep=new qe,mu=new gp(1,1),Ap=new np,Tp=new t_,wp=new lp,gu=[],_u=[],bu=new Float32Array(16),xu=new Float32Array(9),vu=new Float32Array(4);function Qs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function pv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Ke(e,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),Ye(e,n)}}function mv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Ke(e,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Ye(e,n)}}function gv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Ke(e,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Ye(e,n)}}function _v(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function xv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function yv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Av(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mu.compareFunction=Jf,r=mu):r=Ep,e.setTexture2D(t||r,s)}function Tv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Tp,s)}function wv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wp,s)}function Rv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ap,s)}function Cv(i){switch(i){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return _v;case 35667:case 35671:return bv;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return yv;case 36294:return Mv;case 36295:return Sv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Tv;case 35680:case 36300:case 36308:case 36293:return wv;case 36289:case 36303:case 36311:case 36292:return Rv}}function Pv(i,t){i.uniform1fv(this.addr,t)}function Iv(i,t){const e=Qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Lv(i,t){const e=Qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Dv(i,t){const e=Qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Uv(i,t){const e=Qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nv(i,t){const e=Qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fv(i,t){const e=Qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ov(i,t){i.uniform1iv(this.addr,t)}function kv(i,t){i.uniform2iv(this.addr,t)}function Bv(i,t){i.uniform3iv(this.addr,t)}function zv(i,t){i.uniform4iv(this.addr,t)}function Hv(i,t){i.uniform1uiv(this.addr,t)}function Gv(i,t){i.uniform2uiv(this.addr,t)}function Vv(i,t){i.uniform3uiv(this.addr,t)}function Wv(i,t){i.uniform4uiv(this.addr,t)}function Xv(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ep,r[a])}function jv(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Tp,r[a])}function qv(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||wp,r[a])}function Kv(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Ke(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ap,r[a])}function Yv(i){switch(i){case 5126:return Pv;case 35664:return Iv;case 35665:return Lv;case 35666:return Dv;case 35674:return Uv;case 35675:return Nv;case 35676:return Fv;case 5124:case 35670:return Ov;case 35667:case 35671:return kv;case 35668:case 35672:return Bv;case 35669:case 35673:return zv;case 5125:return Hv;case 36294:return Gv;case 36295:return Vv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Kv}}class $v{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cv(e.type)}}class Zv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yv(e.type)}}class Jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function yu(i,t){i.seq.push(t),i.map[t.id]=t}function Qv(i,t,e){const n=i.name,s=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),a=Zo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yu(e,l===void 0?new $v(o,i,t):new Zv(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Jv(o),yu(e,h)),e=h}}}class Wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qv(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Mu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ty=37297;let ey=0;function ny(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Su=new ue;function iy(i){Me._getMatrix(Su,Me.workingColorSpace,i);const t=`mat3( ${Su.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case $a:return[t,"LinearTransferOETF"];case De:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Eu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ny(i.getShaderSource(t),a)}else return s}function sy(i,t){const e=iy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ry(i,t){let e;switch(t){case hg:e="Linear";break;case ug:e="Reinhard";break;case dg:e="Cineon";break;case kf:e="ACESFilmic";break;case pg:e="AgX";break;case mg:e="Neutral";break;case fg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ba=new U;function ay(){Me.getLuminanceCoefficients(ba);const i=ba.x.toFixed(4),t=ba.y.toFixed(4),e=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function cy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ly(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ar(i){return i!==""}function Au(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(i){return i.replace(hy,dy)}const uy=new Map;function dy(i,t){let e=fe[t];if(e===void 0){const n=uy.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}const fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(i){return i.replace(fy,py)}function py(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function my(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ff?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Of?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function gy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _y(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function by(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pl:t="ENVMAP_BLENDING_MULTIPLY";break;case cg:t="ENVMAP_BLENDING_MIX";break;case lg:t="ENVMAP_BLENDING_ADD";break}return t}function xy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vy(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=my(e),l=gy(e),u=_y(e),h=by(e),d=xy(e),p=oy(e),m=cy(r),b=s.createProgram();let g,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),f.length>0&&(f+=`
`)):(g=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),f=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?fe.tonemapping_pars_fragment:"",e.toneMapping!==Di?ry("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,sy("linearToOutputTexel",e.outputColorSpace),ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),a=pl(a),a=Au(a,e),a=Tu(a,e),o=pl(o),o=Au(o,e),o=Tu(o,e),a=wu(a),o=wu(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=x+g+a,v=x+f+o,T=Mu(s,s.VERTEX_SHADER,E),w=Mu(s,s.FRAGMENT_SHADER,v);s.attachShader(b,T),s.attachShader(b,w),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(I){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(b).trim(),H=s.getShaderInfoLog(T).trim(),W=s.getShaderInfoLog(w).trim();let et=!0,B=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(et=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,T,w);else{const X=Eu(s,T,"vertex"),D=Eu(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+X+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||W==="")&&(B=!1);B&&(I.diagnostics={runnable:et,programLog:z,vertexShader:{log:H,prefix:g},fragmentShader:{log:W,prefix:f}})}s.deleteShader(T),s.deleteShader(w),L=new Wa(s,b),S=ly(s,b)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(b,ty)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ey++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=w,this}let yy=0;class My{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sy(t),e.set(t,n)),n}}class Sy{constructor(t){this.id=yy++,this.code=t,this.usedTimes=0}}function Ey(i,t,e,n,s,r,a){const o=new ip,c=new My,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,I,z,H){const W=z.fog,et=H.geometry,B=S.isMeshStandardMaterial?z.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),D=X&&X.mapping===co?X.image.height:null,nt=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Y=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,J=Y!==void 0?Y.length:0;let mt=0;et.morphAttributes.position!==void 0&&(mt=1),et.morphAttributes.normal!==void 0&&(mt=2),et.morphAttributes.color!==void 0&&(mt=3);let kt,Q,at,ct;if(nt){const it=xn[nt];kt=it.vertexShader,Q=it.fragmentShader}else kt=S.vertexShader,Q=S.fragmentShader,c.update(S),at=c.getVertexShaderID(S),ct=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Ut=H.isInstancedMesh===!0,Lt=H.isBatchedMesh===!0,yt=!!S.map,Gt=!!S.matcap,Re=!!X,k=!!S.aoMap,Ie=!!S.lightMap,Qt=!!S.bumpMap,oe=!!S.normalMap,Mt=!!S.displacementMap,ge=!!S.emissiveMap,Wt=!!S.metalnessMap,P=!!S.roughnessMap,A=S.anisotropy>0,$=S.clearcoat>0,lt=S.dispersion>0,dt=S.iridescence>0,ot=S.sheen>0,Xt=S.transmission>0,Pt=A&&!!S.anisotropyMap,Nt=$&&!!S.clearcoatMap,ce=$&&!!S.clearcoatNormalMap,bt=$&&!!S.clearcoatRoughnessMap,Ft=dt&&!!S.iridescenceMap,Kt=dt&&!!S.iridescenceThicknessMap,ie=ot&&!!S.sheenColorMap,Ot=ot&&!!S.sheenRoughnessMap,de=!!S.specularMap,se=!!S.specularColorMap,Te=!!S.specularIntensityMap,j=Xt&&!!S.transmissionMap,C=Xt&&!!S.thicknessMap,_=!!S.gradientMap,G=!!S.alphaMap,q=S.alphaTest>0,N=!!S.alphaHash,ut=!!S.extensions;let tt=Di;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(tt=i.toneMapping);const rt={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:kt,fragmentShader:Q,defines:S.defines,customVertexShaderID:at,customFragmentShaderID:ct,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:_n,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:Gt,envMap:Re,envMapMode:Re&&X.mapping,envMapCubeUVHeight:D,aoMap:k,lightMap:Ie,bumpMap:Qt,normalMap:oe,displacementMap:d&&Mt,emissiveMap:ge,normalMapObjectSpace:oe&&S.normalMapType===yg,normalMapTangentSpace:oe&&S.normalMapType===Bl,metalnessMap:Wt,roughnessMap:P,anisotropy:A,anisotropyMap:Pt,clearcoat:$,clearcoatMap:Nt,clearcoatNormalMap:ce,clearcoatRoughnessMap:bt,dispersion:lt,iridescence:dt,iridescenceMap:Ft,iridescenceThicknessMap:Kt,sheen:ot,sheenColorMap:ie,sheenRoughnessMap:Ot,specularMap:de,specularColorMap:se,specularIntensityMap:Te,transmission:Xt,transmissionMap:j,thicknessMap:C,gradientMap:_,opaque:S.transparent===!1&&S.blending===Ns&&S.alphaToCoverage===!1,alphaMap:G,alphaTest:q,alphaHash:N,combine:S.combine,mapUv:yt&&b(S.map.channel),aoMapUv:k&&b(S.aoMap.channel),lightMapUv:Ie&&b(S.lightMap.channel),bumpMapUv:Qt&&b(S.bumpMap.channel),normalMapUv:oe&&b(S.normalMap.channel),displacementMapUv:Mt&&b(S.displacementMap.channel),emissiveMapUv:ge&&b(S.emissiveMap.channel),metalnessMapUv:Wt&&b(S.metalnessMap.channel),roughnessMapUv:P&&b(S.roughnessMap.channel),anisotropyMapUv:Pt&&b(S.anisotropyMap.channel),clearcoatMapUv:Nt&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(S.sheenRoughnessMap.channel),specularMapUv:de&&b(S.specularMap.channel),specularColorMapUv:se&&b(S.specularColorMap.channel),specularIntensityMapUv:Te&&b(S.specularIntensityMap.channel),transmissionMapUv:j&&b(S.transmissionMap.channel),thicknessMapUv:C&&b(S.thicknessMap.channel),alphaMapUv:G&&b(S.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(oe||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!et.attributes.uv&&(yt||G),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:vt,skinning:H.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:mt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&Me.getTransfer(S.map.colorSpace)===De,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&Me.getTransfer(S.emissiveMap.colorSpace)===De,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===vn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&S.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(x(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=m[S.type];let I;if(M){const z=xn[M];I=Hl.clone(z.uniforms)}else I=S.uniforms;return I}function T(S,M){let I;for(let z=0,H=u.length;z<H;z++){const W=u[z];if(W.cacheKey===M){I=W,++I.usedTimes;break}}return I===void 0&&(I=new vy(i,M,S,r),u.push(I)),I}function w(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:L}}function Ay(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Ty(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,m,b,g){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:b,group:g},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=b,f.group=g),t++,f}function o(h,d,p,m,b,g){const f=a(h,d,p,m,b,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,m,b,g){const f=a(h,d,p,m,b,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Ty),n.length>1&&n.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function wy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Pu,i.set(n,[a])):s>=r.length?(a=new Pu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ry(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new ne};break;case"SpotLight":e={position:new U,direction:new U,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Cy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Py=0;function Iy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ly(i){const t=new Ry,e=Cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new ae,a=new ae;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,b=0,g=0,f=0,x=0,E=0,v=0,T=0,w=0,R=0;l.sort(Iy);for(let S=0,M=l.length;S<M;S++){const I=l[S],z=I.color,H=I.intensity,W=I.distance,et=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*H,h+=z.g*H,d+=z.b*H;else if(I.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(I.sh.coefficients[B],H);R++}else if(I.isDirectionalLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,D=e.get(I);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=et,n.directionalShadowMatrix[p]=I.shadow.matrix,x++}n.directional[p]=B,p++}else if(I.isSpotLight){const B=t.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(z).multiplyScalar(H),B.distance=W,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,n.spot[b]=B;const X=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,X.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[b]=X.matrix,I.castShadow){const D=e.get(I);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,n.spotShadow[b]=D,n.spotShadowMap[b]=et,v++}b++}else if(I.isRectAreaLight){const B=t.get(I);B.color.copy(z).multiplyScalar(H),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=B,g++}else if(I.isPointLight){const B=t.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const X=I.shadow,D=e.get(I);D.shadowIntensity=X.intensity,D.shadowBias=X.bias,D.shadowNormalBias=X.normalBias,D.shadowRadius=X.radius,D.shadowMapSize=X.mapSize,D.shadowCameraNear=X.camera.near,D.shadowCameraFar=X.camera.far,n.pointShadow[m]=D,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=B,m++}else if(I.isHemisphereLight){const B=t.get(I);B.skyColor.copy(I.color).multiplyScalar(H),B.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[f]=B,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==m||L.spotLength!==b||L.rectAreaLength!==g||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=p,L.pointLength=m,L.spotLength=b,L.rectAreaLength=g,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=R,n.version=Py++)}function c(l,u){let h=0,d=0,p=0,m=0,b=0;const g=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const E=l[f];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(E.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(g),d++}else if(E.isHemisphereLight){const v=n.hemi[b];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function Iu(i){const t=new Ly(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Dy(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Iu(i),t.set(s,[o])):r>=a.length?(o=new Iu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fy(i,t,e){let n=new Xl;const s=new Zt,r=new Zt,a=new _e,o=new C_({depthPacking:vg}),c=new P_,l={},u=e.maxTextureSize,h={[gi]:vn,[vn]:gi,[mn]:mn},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Uy,fragmentShader:Ny}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new He;m.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Se(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ff;let f=this.type;this.render=function(w,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=f!==oi&&this.type===oi,W=f===oi&&this.type!==oi;for(let et=0,B=w.length;et<B;et++){const X=w[et],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const nt=D.getFrameExtents();if(s.multiply(nt),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,D.mapSize.y=r.y)),D.map===null||H===!0||W===!0){const J=this.type!==oi?{minFilter:gn,magFilter:gn}:{};D.map!==null&&D.map.dispose(),D.map=new rs(s.x,s.y,J),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const Y=D.getViewportCount();for(let J=0;J<Y;J++){const mt=D.getViewport(J);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),z.viewport(a),D.updateMatrices(X,J),n=D.getFrustum(),v(R,L,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===oi&&x(D,L),D.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,I)};function x(w,R){const L=t.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rs(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,p,b,null)}function E(w,R,L,S){let M=null;const I=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=M.uuid,H=R.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let et=W[H];et===void 0&&(et=M.clone(),W[H]=et,R.addEventListener("dispose",T)),M=et}if(M.visible=R.visible,M.wireframe=R.wireframe,S===oi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=L}return M}function v(w,R,L,S,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const H=t.update(w),W=w.material;if(Array.isArray(W)){const et=H.groups;for(let B=0,X=et.length;B<X;B++){const D=et[B],nt=W[D.materialIndex];if(nt&&nt.visible){const Y=E(w,nt,S,M);w.onBeforeShadow(i,w,R,L,H,Y,D),i.renderBufferDirect(L,null,H,Y,w,D),w.onAfterShadow(i,w,R,L,H,Y,D)}}}else if(W.visible){const et=E(w,W,S,M);w.onBeforeShadow(i,w,R,L,H,et,null),i.renderBufferDirect(L,null,H,et,w,null),w.onAfterShadow(i,w,R,L,H,et,null)}}const z=w.children;for(let H=0,W=z.length;H<W;H++)v(z[H],R,L,S,M)}function T(w){w.target.removeEventListener("dispose",T);for(const L in l){const S=l[L],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Oy={[Ac]:Tc,[wc]:Pc,[Rc]:Ic,[zs]:Cc,[Tc]:Ac,[Pc]:wc,[Ic]:Rc,[Cc]:zs};function ky(i,t){function e(){let j=!1;const C=new _e;let _=null;const G=new _e(0,0,0,0);return{setMask:function(q){_!==q&&!j&&(i.colorMask(q,q,q,q),_=q)},setLocked:function(q){j=q},setClear:function(q,N,ut,tt,rt){rt===!0&&(q*=tt,N*=tt,ut*=tt),C.set(q,N,ut,tt),G.equals(C)===!1&&(i.clearColor(q,N,ut,tt),G.copy(C))},reset:function(){j=!1,_=null,G.set(-1,0,0,0)}}}function n(){let j=!1,C=!1,_=null,G=null,q=null;return{setReversed:function(N){if(C!==N){const ut=t.get("EXT_clip_control");C?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const tt=q;q=null,this.setClear(tt)}C=N},getReversed:function(){return C},setTest:function(N){N?Z(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(N){_!==N&&!j&&(i.depthMask(N),_=N)},setFunc:function(N){if(C&&(N=Oy[N]),G!==N){switch(N){case Ac:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case wc:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case Rc:i.depthFunc(i.EQUAL);break;case Cc:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}G=N}},setLocked:function(N){j=N},setClear:function(N){q!==N&&(C&&(N=1-N),i.clearDepth(N),q=N)},reset:function(){j=!1,_=null,G=null,q=null,C=!1}}}function s(){let j=!1,C=null,_=null,G=null,q=null,N=null,ut=null,tt=null,rt=null;return{setTest:function(it){j||(it?Z(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(it){C!==it&&!j&&(i.stencilMask(it),C=it)},setFunc:function(it,Bt,Ct){(_!==it||G!==Bt||q!==Ct)&&(i.stencilFunc(it,Bt,Ct),_=it,G=Bt,q=Ct)},setOp:function(it,Bt,Ct){(N!==it||ut!==Bt||tt!==Ct)&&(i.stencilOp(it,Bt,Ct),N=it,ut=Bt,tt=Ct)},setLocked:function(it){j=it},setClear:function(it){rt!==it&&(i.clearStencil(it),rt=it)},reset:function(){j=!1,C=null,_=null,G=null,q=null,N=null,ut=null,tt=null,rt=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],m=null,b=!1,g=null,f=null,x=null,E=null,v=null,T=null,w=null,R=new ne(0,0,0),L=0,S=!1,M=null,I=null,z=null,H=null,W=null;const et=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(D)[1]),B=X>=1):D.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),B=X>=2);let nt=null,Y={};const J=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),kt=new _e().fromArray(J),Q=new _e().fromArray(mt);function at(j,C,_,G){const q=new Uint8Array(4),N=i.createTexture();i.bindTexture(j,N),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<_;ut++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,G,0,i.RGBA,i.UNSIGNED_BYTE,q):i.texImage2D(C+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,q);return N}const ct={};ct[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(zs),Qt(!1),oe(gh),Z(i.CULL_FACE),k(Li);function Z(j){u[j]!==!0&&(i.enable(j),u[j]=!0)}function vt(j){u[j]!==!1&&(i.disable(j),u[j]=!1)}function Ut(j,C){return h[j]!==C?(i.bindFramebuffer(j,C),h[j]=C,j===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=C),j===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=C),!0):!1}function Lt(j,C){let _=p,G=!1;if(j){_=d.get(C),_===void 0&&(_=[],d.set(C,_));const q=j.textures;if(_.length!==q.length||_[0]!==i.COLOR_ATTACHMENT0){for(let N=0,ut=q.length;N<ut;N++)_[N]=i.COLOR_ATTACHMENT0+N;_.length=q.length,G=!0}}else _[0]!==i.BACK&&(_[0]=i.BACK,G=!0);G&&i.drawBuffers(_)}function yt(j){return m!==j?(i.useProgram(j),m=j,!0):!1}const Gt={[$i]:i.FUNC_ADD,[Xm]:i.FUNC_SUBTRACT,[jm]:i.FUNC_REVERSE_SUBTRACT};Gt[qm]=i.MIN,Gt[Km]=i.MAX;const Re={[Ym]:i.ZERO,[$m]:i.ONE,[Zm]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[ig]:i.SRC_ALPHA_SATURATE,[eg]:i.DST_COLOR,[Qm]:i.DST_ALPHA,[Jm]:i.ONE_MINUS_SRC_COLOR,[Ec]:i.ONE_MINUS_SRC_ALPHA,[ng]:i.ONE_MINUS_DST_COLOR,[tg]:i.ONE_MINUS_DST_ALPHA,[sg]:i.CONSTANT_COLOR,[rg]:i.ONE_MINUS_CONSTANT_COLOR,[ag]:i.CONSTANT_ALPHA,[og]:i.ONE_MINUS_CONSTANT_ALPHA};function k(j,C,_,G,q,N,ut,tt,rt,it){if(j===Li){b===!0&&(vt(i.BLEND),b=!1);return}if(b===!1&&(Z(i.BLEND),b=!0),j!==Wm){if(j!==g||it!==S){if((f!==$i||v!==$i)&&(i.blendEquation(i.FUNC_ADD),f=$i,v=$i),it)switch(j){case Ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.ONE,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ts:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _h:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}x=null,E=null,T=null,w=null,R.set(0,0,0),L=0,g=j,S=it}return}q=q||C,N=N||_,ut=ut||G,(C!==f||q!==v)&&(i.blendEquationSeparate(Gt[C],Gt[q]),f=C,v=q),(_!==x||G!==E||N!==T||ut!==w)&&(i.blendFuncSeparate(Re[_],Re[G],Re[N],Re[ut]),x=_,E=G,T=N,w=ut),(tt.equals(R)===!1||rt!==L)&&(i.blendColor(tt.r,tt.g,tt.b,rt),R.copy(tt),L=rt),g=j,S=!1}function Ie(j,C){j.side===mn?vt(i.CULL_FACE):Z(i.CULL_FACE);let _=j.side===vn;C&&(_=!_),Qt(_),j.blending===Ns&&j.transparent===!1?k(Li):k(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);const G=j.stencilWrite;o.setTest(G),G&&(o.setMask(j.stencilWriteMask),o.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),o.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ge(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(j){M!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),M=j)}function oe(j){j!==Gm?(Z(i.CULL_FACE),j!==I&&(j===gh?i.cullFace(i.BACK):j===Vm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),I=j}function Mt(j){j!==z&&(B&&i.lineWidth(j),z=j)}function ge(j,C,_){j?(Z(i.POLYGON_OFFSET_FILL),(H!==C||W!==_)&&(i.polygonOffset(C,_),H=C,W=_)):vt(i.POLYGON_OFFSET_FILL)}function Wt(j){j?Z(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function P(j){j===void 0&&(j=i.TEXTURE0+et-1),nt!==j&&(i.activeTexture(j),nt=j)}function A(j,C,_){_===void 0&&(nt===null?_=i.TEXTURE0+et-1:_=nt);let G=Y[_];G===void 0&&(G={type:void 0,texture:void 0},Y[_]=G),(G.type!==j||G.texture!==C)&&(nt!==_&&(i.activeTexture(_),nt=_),i.bindTexture(j,C||ct[j]),G.type=j,G.texture=C)}function $(){const j=Y[nt];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function lt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ft(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ie(j){kt.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),kt.copy(j))}function Ot(j){Q.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Q.copy(j))}function de(j,C){let _=l.get(C);_===void 0&&(_=new WeakMap,l.set(C,_));let G=_.get(j);G===void 0&&(G=i.getUniformBlockIndex(C,j.name),_.set(j,G))}function se(j,C){const G=l.get(C).get(j);c.get(C)!==G&&(i.uniformBlockBinding(C,G,j.__bindingPointIndex),c.set(C,G))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,Y={},h={},d=new WeakMap,p=[],m=null,b=!1,g=null,f=null,x=null,E=null,v=null,T=null,w=null,R=new ne(0,0,0),L=0,S=!1,M=null,I=null,z=null,H=null,W=null,kt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:vt,bindFramebuffer:Ut,drawBuffers:Lt,useProgram:yt,setBlending:k,setMaterial:Ie,setFlipSided:Qt,setCullFace:oe,setLineWidth:Mt,setPolygonOffset:ge,setScissorTest:Wt,activeTexture:P,bindTexture:A,unbindTexture:$,compressedTexImage2D:lt,compressedTexImage3D:dt,texImage2D:Ft,texImage3D:Kt,updateUBOMapping:de,uniformBlockBinding:se,texStorage2D:ce,texStorage3D:bt,texSubImage2D:ot,texSubImage3D:Xt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Nt,scissor:ie,viewport:Ot,reset:Te}}function By(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,A){return p?new OffscreenCanvas(P,A):Dr("canvas")}function b(P,A,$){let lt=1;const dt=Wt(P);if((dt.width>$||dt.height>$)&&(lt=$/Math.max(dt.width,dt.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ot=Math.floor(lt*dt.width),Xt=Math.floor(lt*dt.height);h===void 0&&(h=m(ot,Xt));const Pt=A?m(ot,Xt):h;return Pt.width=ot,Pt.height=Xt,Pt.getContext("2d").drawImage(P,0,0,ot,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+ot+"x"+Xt+")."),Pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),P;return P}function g(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(P,A,$,lt,dt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ot=A;if(A===i.RED&&($===i.FLOAT&&(ot=i.R32F),$===i.HALF_FLOAT&&(ot=i.R16F),$===i.UNSIGNED_BYTE&&(ot=i.R8)),A===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.R8UI),$===i.UNSIGNED_SHORT&&(ot=i.R16UI),$===i.UNSIGNED_INT&&(ot=i.R32UI),$===i.BYTE&&(ot=i.R8I),$===i.SHORT&&(ot=i.R16I),$===i.INT&&(ot=i.R32I)),A===i.RG&&($===i.FLOAT&&(ot=i.RG32F),$===i.HALF_FLOAT&&(ot=i.RG16F),$===i.UNSIGNED_BYTE&&(ot=i.RG8)),A===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.RG8UI),$===i.UNSIGNED_SHORT&&(ot=i.RG16UI),$===i.UNSIGNED_INT&&(ot=i.RG32UI),$===i.BYTE&&(ot=i.RG8I),$===i.SHORT&&(ot=i.RG16I),$===i.INT&&(ot=i.RG32I)),A===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),$===i.UNSIGNED_INT&&(ot=i.RGB32UI),$===i.BYTE&&(ot=i.RGB8I),$===i.SHORT&&(ot=i.RGB16I),$===i.INT&&(ot=i.RGB32I)),A===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),$===i.UNSIGNED_INT&&(ot=i.RGBA32UI),$===i.BYTE&&(ot=i.RGBA8I),$===i.SHORT&&(ot=i.RGBA16I),$===i.INT&&(ot=i.RGBA32I)),A===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),A===i.RGBA){const Xt=dt?$a:Me.getTransfer(lt);$===i.FLOAT&&(ot=i.RGBA32F),$===i.HALF_FLOAT&&(ot=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ot=Xt===De?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(P,A){let $;return P?A===null||A===ss||A===Vs?$=i.DEPTH24_STENCIL8:A===Gn?$=i.DEPTH32F_STENCIL8:A===Pr&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ss||A===Vs?$=i.DEPTH_COMPONENT24:A===Gn?$=i.DEPTH_COMPONENT32F:A===Pr&&($=i.DEPTH_COMPONENT16),$}function T(P,A){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==gn&&P.minFilter!==Sn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function w(P){const A=P.target;A.removeEventListener("dispose",w),L(A),A.isVideoTexture&&u.delete(A)}function R(P){const A=P.target;A.removeEventListener("dispose",R),M(A)}function L(P){const A=n.get(P);if(A.__webglInit===void 0)return;const $=P.source,lt=d.get($);if(lt){const dt=lt[A.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&S(P),Object.keys(lt).length===0&&d.delete($)}n.remove(P)}function S(P){const A=n.get(P);i.deleteTexture(A.__webglTexture);const $=P.source,lt=d.get($);delete lt[A.__cacheKey],a.memory.textures--}function M(P){const A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(A.__webglFramebuffer[lt]))for(let dt=0;dt<A.__webglFramebuffer[lt].length;dt++)i.deleteFramebuffer(A.__webglFramebuffer[lt][dt]);else i.deleteFramebuffer(A.__webglFramebuffer[lt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[lt])}else{if(Array.isArray(A.__webglFramebuffer))for(let lt=0;lt<A.__webglFramebuffer.length;lt++)i.deleteFramebuffer(A.__webglFramebuffer[lt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let lt=0;lt<A.__webglColorRenderbuffer.length;lt++)A.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[lt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=P.textures;for(let lt=0,dt=$.length;lt<dt;lt++){const ot=n.get($[lt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove($[lt])}n.remove(P)}let I=0;function z(){I=0}function H(){const P=I;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),I+=1,P}function W(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function et(P,A){const $=n.get(P);if(P.isVideoTexture&&Mt(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const lt=P.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q($,P,A);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+A)}function B(P,A){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Q($,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+A)}function X(P,A){const $=n.get(P);if(P.version>0&&$.__version!==P.version){Q($,P,A);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+A)}function D(P,A){const $=n.get(P);if(P.version>0&&$.__version!==P.version){at($,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+A)}const nt={[is]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},Y={[gn]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[ui]:i.LINEAR_MIPMAP_LINEAR},J={[Mg]:i.NEVER,[Rg]:i.ALWAYS,[Sg]:i.LESS,[Jf]:i.LEQUAL,[Eg]:i.EQUAL,[wg]:i.GEQUAL,[Ag]:i.GREATER,[Tg]:i.NOTEQUAL};function mt(P,A){if(A.type===Gn&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Sn||A.magFilter===Oa||A.magFilter===Er||A.magFilter===ui||A.minFilter===Sn||A.minFilter===Oa||A.minFilter===Er||A.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,nt[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,nt[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,nt[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Y[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Y[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gn||A.minFilter!==Er&&A.minFilter!==ui||A.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function kt(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",w));const lt=A.source;let dt=d.get(lt);dt===void 0&&(dt={},d.set(lt,dt));const ot=W(A);if(ot!==P.__cacheKey){dt[ot]===void 0&&(dt[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),dt[ot].usedTimes++;const Xt=dt[P.__cacheKey];Xt!==void 0&&(dt[P.__cacheKey].usedTimes--,Xt.usedTimes===0&&S(A)),P.__cacheKey=ot,P.__webglTexture=dt[ot].texture}return $}function Q(P,A,$){let lt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(lt=i.TEXTURE_3D);const dt=kt(P,A),ot=A.source;e.bindTexture(lt,P.__webglTexture,i.TEXTURE0+$);const Xt=n.get(ot);if(ot.version!==Xt.__version||dt===!0){e.activeTexture(i.TEXTURE0+$);const Pt=Me.getPrimaries(Me.workingColorSpace),Nt=A.colorSpace===Ri?null:Me.getPrimaries(A.colorSpace),ce=A.colorSpace===Ri||Pt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let bt=b(A.image,!1,s.maxTextureSize);bt=ge(A,bt);const Ft=r.convert(A.format,A.colorSpace),Kt=r.convert(A.type);let ie=E(A.internalFormat,Ft,Kt,A.colorSpace,A.isVideoTexture);mt(lt,A);let Ot;const de=A.mipmaps,se=A.isVideoTexture!==!0,Te=Xt.__version===void 0||dt===!0,j=ot.dataReady,C=T(A,bt);if(A.isDepthTexture)ie=v(A.format===Ws,A.type),Te&&(se?e.texStorage2D(i.TEXTURE_2D,1,ie,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,ie,bt.width,bt.height,0,Ft,Kt,null));else if(A.isDataTexture)if(de.length>0){se&&Te&&e.texStorage2D(i.TEXTURE_2D,C,ie,de[0].width,de[0].height);for(let _=0,G=de.length;_<G;_++)Ot=de[_],se?j&&e.texSubImage2D(i.TEXTURE_2D,_,0,0,Ot.width,Ot.height,Ft,Kt,Ot.data):e.texImage2D(i.TEXTURE_2D,_,ie,Ot.width,Ot.height,0,Ft,Kt,Ot.data);A.generateMipmaps=!1}else se?(Te&&e.texStorage2D(i.TEXTURE_2D,C,ie,bt.width,bt.height),j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Kt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,ie,bt.width,bt.height,0,Ft,Kt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,C,ie,de[0].width,de[0].height,bt.depth);for(let _=0,G=de.length;_<G;_++)if(Ot=de[_],A.format!==In)if(Ft!==null)if(se){if(j)if(A.layerUpdates.size>0){const q=ou(Ot.width,Ot.height,A.format,A.type);for(const N of A.layerUpdates){const ut=Ot.data.subarray(N*q/Ot.data.BYTES_PER_ELEMENT,(N+1)*q/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_,0,0,N,Ot.width,Ot.height,1,Ft,ut)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_,ie,Ot.width,Ot.height,bt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_,0,0,0,Ot.width,Ot.height,bt.depth,Ft,Kt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_,ie,Ot.width,Ot.height,bt.depth,0,Ft,Kt,Ot.data)}else{se&&Te&&e.texStorage2D(i.TEXTURE_2D,C,ie,de[0].width,de[0].height);for(let _=0,G=de.length;_<G;_++)Ot=de[_],A.format!==In?Ft!==null?se?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,_,0,0,Ot.width,Ot.height,Ft,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,_,ie,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?j&&e.texSubImage2D(i.TEXTURE_2D,_,0,0,Ot.width,Ot.height,Ft,Kt,Ot.data):e.texImage2D(i.TEXTURE_2D,_,ie,Ot.width,Ot.height,0,Ft,Kt,Ot.data)}else if(A.isDataArrayTexture)if(se){if(Te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,C,ie,bt.width,bt.height,bt.depth),j)if(A.layerUpdates.size>0){const _=ou(bt.width,bt.height,A.format,A.type);for(const G of A.layerUpdates){const q=bt.data.subarray(G*_/bt.data.BYTES_PER_ELEMENT,(G+1)*_/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,G,bt.width,bt.height,1,Ft,Kt,q)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Kt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,bt.width,bt.height,bt.depth,0,Ft,Kt,bt.data);else if(A.isData3DTexture)se?(Te&&e.texStorage3D(i.TEXTURE_3D,C,ie,bt.width,bt.height,bt.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Kt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,ie,bt.width,bt.height,bt.depth,0,Ft,Kt,bt.data);else if(A.isFramebufferTexture){if(Te)if(se)e.texStorage2D(i.TEXTURE_2D,C,ie,bt.width,bt.height);else{let _=bt.width,G=bt.height;for(let q=0;q<C;q++)e.texImage2D(i.TEXTURE_2D,q,ie,_,G,0,Ft,Kt,null),_>>=1,G>>=1}}else if(de.length>0){if(se&&Te){const _=Wt(de[0]);e.texStorage2D(i.TEXTURE_2D,C,ie,_.width,_.height)}for(let _=0,G=de.length;_<G;_++)Ot=de[_],se?j&&e.texSubImage2D(i.TEXTURE_2D,_,0,0,Ft,Kt,Ot):e.texImage2D(i.TEXTURE_2D,_,ie,Ft,Kt,Ot);A.generateMipmaps=!1}else if(se){if(Te){const _=Wt(bt);e.texStorage2D(i.TEXTURE_2D,C,ie,_.width,_.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ft,Kt,bt)}else e.texImage2D(i.TEXTURE_2D,0,ie,Ft,Kt,bt);g(A)&&f(lt),Xt.__version=ot.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function at(P,A,$){if(A.image.length!==6)return;const lt=kt(P,A),dt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+$);const ot=n.get(dt);if(dt.version!==ot.__version||lt===!0){e.activeTexture(i.TEXTURE0+$);const Xt=Me.getPrimaries(Me.workingColorSpace),Pt=A.colorSpace===Ri?null:Me.getPrimaries(A.colorSpace),Nt=A.colorSpace===Ri||Xt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const ce=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Ft=[];for(let G=0;G<6;G++)!ce&&!bt?Ft[G]=b(A.image[G],!0,s.maxCubemapSize):Ft[G]=bt?A.image[G].image:A.image[G],Ft[G]=ge(A,Ft[G]);const Kt=Ft[0],ie=r.convert(A.format,A.colorSpace),Ot=r.convert(A.type),de=E(A.internalFormat,ie,Ot,A.colorSpace),se=A.isVideoTexture!==!0,Te=ot.__version===void 0||lt===!0,j=dt.dataReady;let C=T(A,Kt);mt(i.TEXTURE_CUBE_MAP,A);let _;if(ce){se&&Te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,C,de,Kt.width,Kt.height);for(let G=0;G<6;G++){_=Ft[G].mipmaps;for(let q=0;q<_.length;q++){const N=_[q];A.format!==In?ie!==null?se?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q,0,0,N.width,N.height,ie,N.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q,de,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q,0,0,N.width,N.height,ie,Ot,N.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q,de,N.width,N.height,0,ie,Ot,N.data)}}}else{if(_=A.mipmaps,se&&Te){_.length>0&&C++;const G=Wt(Ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,C,de,G.width,G.height)}for(let G=0;G<6;G++)if(bt){se?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,Ft[G].width,Ft[G].height,ie,Ot,Ft[G].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,de,Ft[G].width,Ft[G].height,0,ie,Ot,Ft[G].data);for(let q=0;q<_.length;q++){const ut=_[q].image[G].image;se?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q+1,0,0,ut.width,ut.height,ie,Ot,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q+1,de,ut.width,ut.height,0,ie,Ot,ut.data)}}else{se?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ie,Ot,Ft[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,de,ie,Ot,Ft[G]);for(let q=0;q<_.length;q++){const N=_[q];se?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q+1,0,0,ie,Ot,N.image[G]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,q+1,de,ie,Ot,N.image[G])}}}g(A)&&f(i.TEXTURE_CUBE_MAP),ot.__version=dt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ct(P,A,$,lt,dt,ot){const Xt=r.convert($.format,$.colorSpace),Pt=r.convert($.type),Nt=E($.internalFormat,Xt,Pt,$.colorSpace),ce=n.get(A),bt=n.get($);if(bt.__renderTarget=A,!ce.__hasExternalTextures){const Ft=Math.max(1,A.width>>ot),Kt=Math.max(1,A.height>>ot);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,ot,Nt,Ft,Kt,A.depth,0,Xt,Pt,null):e.texImage2D(dt,ot,Nt,Ft,Kt,0,Xt,Pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),oe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,dt,bt.__webglTexture,0,Qt(A)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,dt,bt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(P,A,$){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){const lt=A.depthTexture,dt=lt&&lt.isDepthTexture?lt.type:null,ot=v(A.stencilBuffer,dt),Xt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=Qt(A);oe(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,ot,A.width,A.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ot,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ot,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xt,i.RENDERBUFFER,P)}else{const lt=A.textures;for(let dt=0;dt<lt.length;dt++){const ot=lt[dt],Xt=r.convert(ot.format,ot.colorSpace),Pt=r.convert(ot.type),Nt=E(ot.internalFormat,Xt,Pt,ot.colorSpace),ce=Qt(A);$&&oe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Nt,A.width,A.height):oe(A)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Nt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(A.depthTexture);lt.__renderTarget=A,(!lt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),et(A.depthTexture,0);const dt=lt.__webglTexture,ot=Qt(A);if(A.depthTexture.format===Fs)oe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(A.depthTexture.format===Ws)oe(A)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function Ut(P){const A=n.get(P),$=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),lt){const dt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,lt.removeEventListener("dispose",dt)};lt.addEventListener("dispose",dt),A.__depthDisposeCallback=dt}A.__boundDepthTexture=lt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");vt(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[lt]),A.__webglDepthbuffer[lt]===void 0)A.__webglDepthbuffer[lt]=i.createRenderbuffer(),Z(A.__webglDepthbuffer[lt],P,!1);else{const dt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=A.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Z(A.__webglDepthbuffer,P,!1);else{const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(P,A,$){const lt=n.get(P);A!==void 0&&ct(lt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Ut(P)}function yt(P){const A=P.texture,$=n.get(P),lt=n.get(A);P.addEventListener("dispose",R);const dt=P.textures,ot=P.isWebGLCubeRenderTarget===!0,Xt=dt.length>1;if(Xt||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=A.version,a.memory.textures++),ot){$.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Pt]=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)$.__webglFramebuffer[Pt][Nt]=i.createFramebuffer()}else $.__webglFramebuffer[Pt]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)$.__webglFramebuffer[Pt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Xt)for(let Pt=0,Nt=dt.length;Pt<Nt;Pt++){const ce=n.get(dt[Pt]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&oe(P)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Pt=0;Pt<dt.length;Pt++){const Nt=dt[Pt];$.__webglColorRenderbuffer[Pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Pt]);const ce=r.convert(Nt.format,Nt.colorSpace),bt=r.convert(Nt.type),Ft=E(Nt.internalFormat,ce,bt,Nt.colorSpace,P.isXRRenderTarget===!0),Kt=Qt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ft,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,$.__webglColorRenderbuffer[Pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Z($.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),mt(i.TEXTURE_CUBE_MAP,A);for(let Pt=0;Pt<6;Pt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ct($.__webglFramebuffer[Pt][Nt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,Nt);else ct($.__webglFramebuffer[Pt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);g(A)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Xt){for(let Pt=0,Nt=dt.length;Pt<Nt;Pt++){const ce=dt[Pt],bt=n.get(ce);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),mt(i.TEXTURE_2D,ce),ct($.__webglFramebuffer,P,ce,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,0),g(ce)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Pt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,lt.__webglTexture),mt(Pt,A),A.mipmaps&&A.mipmaps.length>0)for(let Nt=0;Nt<A.mipmaps.length;Nt++)ct($.__webglFramebuffer[Nt],P,A,i.COLOR_ATTACHMENT0,Pt,Nt);else ct($.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,Pt,0);g(A)&&f(Pt),e.unbindTexture()}P.depthBuffer&&Ut(P)}function Gt(P){const A=P.textures;for(let $=0,lt=A.length;$<lt;$++){const dt=A[$];if(g(dt)){const ot=x(P),Xt=n.get(dt).__webglTexture;e.bindTexture(ot,Xt),f(ot),e.unbindTexture()}}}const Re=[],k=[];function Ie(P){if(P.samples>0){if(oe(P)===!1){const A=P.textures,$=P.width,lt=P.height;let dt=i.COLOR_BUFFER_BIT;const ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xt=n.get(P),Pt=A.length>1;if(Pt)for(let Nt=0;Nt<A.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let Nt=0;Nt<A.length;Nt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xt.__webglColorRenderbuffer[Nt]);const ce=n.get(A[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,$,lt,0,0,$,lt,dt,i.NEAREST),c===!0&&(Re.length=0,k.length=0,Re.push(i.COLOR_ATTACHMENT0+Nt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Re.push(ot),k.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,k)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pt)for(let Nt=0;Nt<A.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Xt.__webglColorRenderbuffer[Nt]);const ce=n.get(A[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Qt(P){return Math.min(s.maxSamples,P.samples)}function oe(P){const A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Mt(P){const A=a.render.frame;u.get(P)!==A&&(u.set(P,A),P.update())}function ge(P,A){const $=P.colorSpace,lt=P.format,dt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==_n&&$!==Ri&&(Me.getTransfer($)===De?(lt!==In||dt!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=et,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=D,this.rebindTextures=Lt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=oe}function zy(i,t){function e(n,s=Ri){let r;const a=Me.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===Ll)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hf)return i.BYTE;if(n===Gf)return i.SHORT;if(n===Pr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===Wf)return i.ALPHA;if(n===Xf)return i.RGB;if(n===In)return i.RGBA;if(n===jf)return i.LUMINANCE;if(n===qf)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===Kf)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===Ol)return i.RGBA_INTEGER;if(n===ka||n===Ba||n===za||n===Ha)if(a===De)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Nc||n===Fc||n===Oc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Bc||n===zc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kc||n===Bc)return a===De?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hc||n===Gc||n===Vc||n===Wc||n===Xc||n===jc||n===qc||n===Kc||n===Yc||n===$c||n===Zc||n===Jc||n===Qc||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return a===De?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return a===De?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yf||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Hy={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const g=e.getJointPose(b,n),f=this._getHandJoint(l,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bi({vertexShader:Gy,fragmentShader:Vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xy extends cs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,m=null;const b=new Wy,g=e.getContextAttributes();let f=null,x=null;const E=[],v=[],T=new Zt;let w=null;const R=new pn;R.viewport=new _e;const L=new pn;L.viewport=new _e;const S=[R,L],M=new J_;let I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let at=E[Q];return at===void 0&&(at=new Jo,E[Q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Q){let at=E[Q];return at===void 0&&(at=new Jo,E[Q]=at),at.getGripSpace()},this.getHand=function(Q){let at=E[Q];return at===void 0&&(at=new Jo,E[Q]=at),at.getHandSpace()};function H(Q){const at=v.indexOf(Q.inputSource);if(at===-1)return;const ct=E[at];ct!==void 0&&(ct.update(Q.inputSource,Q.frame,l||a),ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",et);for(let Q=0;Q<E.length;Q++){const at=v[Q];at!==null&&(v[Q]=null,E[Q].disconnect(at))}I=null,z=null,b.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,x=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new rs(p.framebufferWidth,p.framebufferHeight,{format:In,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,ct=null,Z=null;g.depth&&(Z=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?Ws:Fs,ct=g.stencil?Vs:ss);const vt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new rs(d.textureWidth,d.textureHeight,{format:In,type:_i,depthTexture:new gp(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function et(Q){for(let at=0;at<Q.removed.length;at++){const ct=Q.removed[at],Z=v.indexOf(ct);Z>=0&&(v[Z]=null,E[Z].disconnect(ct))}for(let at=0;at<Q.added.length;at++){const ct=Q.added[at];let Z=v.indexOf(ct);if(Z===-1){for(let Ut=0;Ut<E.length;Ut++)if(Ut>=v.length){v.push(ct),Z=Ut;break}else if(v[Ut]===null){v[Ut]=ct,Z=Ut;break}if(Z===-1)break}const vt=E[Z];vt&&vt.connect(ct)}}const B=new U,X=new U;function D(Q,at,ct){B.setFromMatrixPosition(at.matrixWorld),X.setFromMatrixPosition(ct.matrixWorld);const Z=B.distanceTo(X),vt=at.projectionMatrix.elements,Ut=ct.projectionMatrix.elements,Lt=vt[14]/(vt[10]-1),yt=vt[14]/(vt[10]+1),Gt=(vt[9]+1)/vt[5],Re=(vt[9]-1)/vt[5],k=(vt[8]-1)/vt[0],Ie=(Ut[8]+1)/Ut[0],Qt=Lt*k,oe=Lt*Ie,Mt=Z/(-k+Ie),ge=Mt*-k;if(at.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ge),Q.translateZ(Mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),vt[10]===-1)Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Wt=Lt+Mt,P=yt+Mt,A=Qt-ge,$=oe+(Z-ge),lt=Gt*yt/P*Wt,dt=Re*yt/P*Wt;Q.projectionMatrix.makePerspective(A,$,lt,dt,Wt,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function nt(Q,at){at===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(at.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let at=Q.near,ct=Q.far;b.texture!==null&&(b.depthNear>0&&(at=b.depthNear),b.depthFar>0&&(ct=b.depthFar)),M.near=L.near=R.near=at,M.far=L.far=R.far=ct,(I!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,z=M.far),R.layers.mask=Q.layers.mask|2,L.layers.mask=Q.layers.mask|4,M.layers.mask=R.layers.mask|L.layers.mask;const Z=Q.parent,vt=M.cameras;nt(M,Z);for(let Ut=0;Ut<vt.length;Ut++)nt(vt[Ut],Z);vt.length===2?D(M,R,L):M.projectionMatrix.copy(R.projectionMatrix),Y(Q,M,Z)};function Y(Q,at,ct){ct===null?Q.matrix.copy(at.matrixWorld):(Q.matrix.copy(ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(at.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(at.projectionMatrix),Q.projectionMatrixInverse.copy(at.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let J=null;function mt(Q,at){if(u=at.getViewerPose(l||a),m=at,u!==null){const ct=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Z=!1;ct.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let Ut=0;Ut<ct.length;Ut++){const Lt=ct[Ut];let yt=null;if(p!==null)yt=p.getViewport(Lt);else{const Re=h.getViewSubImage(d,Lt);yt=Re.viewport,Ut===0&&(t.setRenderTargetTextures(x,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(x))}let Gt=S[Ut];Gt===void 0&&(Gt=new pn,Gt.layers.enable(Ut),Gt.viewport=new _e,S[Ut]=Gt),Gt.matrix.fromArray(Lt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Lt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(yt.x,yt.y,yt.width,yt.height),Ut===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Z===!0&&M.cameras.push(Gt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const Ut=h.getDepthInformation(ct[0]);Ut&&Ut.isValid&&Ut.texture&&b.init(t,Ut,s.renderState)}}for(let ct=0;ct<E.length;ct++){const Z=v[ct],vt=E[ct];Z!==null&&vt!==void 0&&vt.update(Z,at,l||a)}J&&J(Q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}const kt=new Sp;kt.setAnimationLoop(mt),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}const zi=new Un,jy=new ae;function qy(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,op(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,x,E,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),h(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,x,E):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===vn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===vn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=t.get(f),E=x.envMap,v=x.envMapRotation;E&&(g.envMap.value=E,zi.copy(v),zi.x*=-1,zi.y*=-1,zi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(zi)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,x,E){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=E*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===vn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){const x=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ky(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const v=E.program;n.uniformBlockBinding(x,v)}function l(x,E){let v=s[x.id];v===void 0&&(m(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",g));const T=E.program;n.updateUBOMapping(x,T);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function u(x){const E=h();x.__bindingPointIndex=E;const v=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const E=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,R=v.length;w<R;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=L.length;S<M;S++){const I=L[S];if(p(I,w,S,T)===!0){const z=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let et=0;et<H.length;et++){const B=H[et],X=b(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,z+W,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,E,v,T){const w=x.value,R=E+"_"+v;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const L=T[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(x){const E=x.uniforms;let v=0;const T=16;for(let R=0,L=E.length;R<L;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,I=S.length;M<I;M++){const z=S[M],H=Array.isArray(z.value)?z.value:[z.value];for(let W=0,et=H.length;W<et;W++){const B=H[W],X=b(B),D=v%T,nt=D%X.boundary,Y=D+nt;v+=nt,Y!==0&&T-Y<X.storage&&(v+=T-Y),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=X.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function b(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function g(x){const E=x.target;E.removeEventListener("dispose",g);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Yy{constructor(t={}){const{canvas:e=Xg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),b=new Int32Array(4);let g=null,f=null;const x=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=Di,this.toneMappingExposure=1;const v=this;let T=!1,w=0,R=0,L=null,S=-1,M=null;const I=new _e,z=new _e;let H=null;const W=new ne(0);let et=0,B=e.width,X=e.height,D=1,nt=null,Y=null;const J=new _e(0,0,B,X),mt=new _e(0,0,B,X);let kt=!1;const Q=new Xl;let at=!1,ct=!1;const Z=new ae,vt=new ae,Ut=new U,Lt=new _e,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Re(){return L===null?D:1}let k=n;function Ie(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cl}`),e.addEventListener("webglcontextlost",G,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",N,!1),k===null){const F="webgl2";if(k=Ie(F,y),k===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Qt,oe,Mt,ge,Wt,P,A,$,lt,dt,ot,Xt,Pt,Nt,ce,bt,Ft,Kt,ie,Ot,de,se,Te,j;function C(){Qt=new sv(k),Qt.init(),se=new zy(k,Qt),oe=new Jx(k,Qt,t,se),Mt=new ky(k,Qt),oe.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),ge=new ov(k),Wt=new Ay,P=new By(k,Qt,Mt,Wt,oe,se,ge),A=new tv(v),$=new iv(v),lt=new p0(k),Te=new $x(k,lt),dt=new rv(k,lt,ge,Te),ot=new lv(k,dt,lt,ge),ie=new cv(k,oe,P),bt=new Qx(Wt),Xt=new Ey(v,A,$,Qt,oe,Te,bt),Pt=new qy(v,Wt),Nt=new wy,ce=new Dy(Qt),Kt=new Yx(v,A,$,Mt,ot,p,c),Ft=new Fy(v,ot,oe),j=new Ky(k,ge,oe,Mt),Ot=new Zx(k,Qt,ge),de=new av(k,Qt,ge),ge.programs=Xt.programs,v.capabilities=oe,v.extensions=Qt,v.properties=Wt,v.renderLists=Nt,v.shadowMap=Ft,v.state=Mt,v.info=ge}C();const _=new Xy(v,k);this.xr=_,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const y=Qt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(y){y!==void 0&&(D=y,this.setSize(B,X,!1))},this.getSize=function(y){return y.set(B,X)},this.setSize=function(y,F,V=!0){if(_.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=y,X=F,e.width=Math.floor(y*D),e.height=Math.floor(F*D),V===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(B*D,X*D).floor()},this.setDrawingBufferSize=function(y,F,V){B=y,X=F,D=V,e.width=Math.floor(y*V),e.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(J)},this.setViewport=function(y,F,V,K){y.isVector4?J.set(y.x,y.y,y.z,y.w):J.set(y,F,V,K),Mt.viewport(I.copy(J).multiplyScalar(D).round())},this.getScissor=function(y){return y.copy(mt)},this.setScissor=function(y,F,V,K){y.isVector4?mt.set(y.x,y.y,y.z,y.w):mt.set(y,F,V,K),Mt.scissor(z.copy(mt).multiplyScalar(D).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(y){Mt.setScissorTest(kt=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(y=!0,F=!0,V=!0){let K=0;if(y){let O=!1;if(L!==null){const st=L.texture.format;O=st===Ol||st===Fl||st===Nl}if(O){const st=L.texture.type,ft=st===_i||st===ss||st===Pr||st===Vs||st===Ll||st===Dl,_t=Kt.getClearColor(),pt=Kt.getClearAlpha(),gt=_t.r,Tt=_t.g,Ht=_t.b;ft?(m[0]=gt,m[1]=Tt,m[2]=Ht,m[3]=pt,k.clearBufferuiv(k.COLOR,0,m)):(b[0]=gt,b[1]=Tt,b[2]=Ht,b[3]=pt,k.clearBufferiv(k.COLOR,0,b))}else K|=k.COLOR_BUFFER_BIT}F&&(K|=k.DEPTH_BUFFER_BIT),V&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",G,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",N,!1),Kt.dispose(),Nt.dispose(),ce.dispose(),Wt.dispose(),A.dispose(),$.dispose(),ot.dispose(),Te.dispose(),j.dispose(),Xt.dispose(),_.dispose(),_.removeEventListener("sessionstart",It),_.removeEventListener("sessionend",xt),wt.stop()};function G(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=ge.autoReset,F=Ft.enabled,V=Ft.autoUpdate,K=Ft.needsUpdate,O=Ft.type;C(),ge.autoReset=y,Ft.enabled=F,Ft.autoUpdate=V,Ft.needsUpdate=K,Ft.type=O}function N(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ut(y){const F=y.target;F.removeEventListener("dispose",ut),tt(F)}function tt(y){rt(y),Wt.remove(y)}function rt(y){const F=Wt.get(y).programs;F!==void 0&&(F.forEach(function(V){Xt.releaseProgram(V)}),y.isShaderMaterial&&Xt.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,V,K,O,st){F===null&&(F=yt);const ft=O.isMesh&&O.matrixWorld.determinant()<0,_t=Yt(y,F,V,K,O);Mt.setMaterial(K,ft);let pt=V.index,gt=1;if(K.wireframe===!0){if(pt=dt.getWireframeAttribute(V),pt===void 0)return;gt=2}const Tt=V.drawRange,Ht=V.attributes.position;let le=Tt.start*gt,$t=(Tt.start+Tt.count)*gt;st!==null&&(le=Math.max(le,st.start*gt),$t=Math.min($t,(st.start+st.count)*gt)),pt!==null?(le=Math.max(le,0),$t=Math.min($t,pt.count)):Ht!=null&&(le=Math.max(le,0),$t=Math.min($t,Ht.count));const be=$t-le;if(be<0||be===1/0)return;Te.setup(O,K,_t,V,pt);let xe,he=Ot;if(pt!==null&&(xe=lt.get(pt),he=de,he.setIndex(xe)),O.isMesh)K.wireframe===!0?(Mt.setLineWidth(K.wireframeLinewidth*Re()),he.setMode(k.LINES)):he.setMode(k.TRIANGLES);else if(O.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),Mt.setLineWidth(qt*Re()),O.isLineSegments?he.setMode(k.LINES):O.isLineLoop?he.setMode(k.LINE_LOOP):he.setMode(k.LINE_STRIP)}else O.isPoints?he.setMode(k.POINTS):O.isSprite&&he.setMode(k.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)he.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))he.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const qt=O._multiDrawStarts,Le=O._multiDrawCounts,ve=O._multiDrawCount,hn=pt?lt.get(pt).bytesPerElement:1,rn=Wt.get(K).currentProgram.getUniforms();for(let Be=0;Be<ve;Be++)rn.setValue(k,"_gl_DrawID",Be),he.render(qt[Be]/hn,Le[Be])}else if(O.isInstancedMesh)he.renderInstances(le,be,O.count);else if(V.isInstancedBufferGeometry){const qt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Le=Math.min(V.instanceCount,qt);he.renderInstances(le,be,Le)}else he.render(le,be)};function it(y,F,V){y.transparent===!0&&y.side===mn&&y.forceSinglePass===!1?(y.side=vn,y.needsUpdate=!0,Dt(y,F,V),y.side=gi,y.needsUpdate=!0,Dt(y,F,V),y.side=mn):Dt(y,F,V)}this.compile=function(y,F,V=null){V===null&&(V=y),f=ce.get(V),f.init(F),E.push(f),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),y!==V&&y.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const K=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const _t=st[ft];it(_t,V,O),K.add(_t)}else it(st,V,O),K.add(st)}),E.pop(),f=null,K},this.compileAsync=function(y,F,V=null){const K=this.compile(y,F,V);return new Promise(O=>{function st(){if(K.forEach(function(ft){Wt.get(ft).currentProgram.isReady()&&K.delete(ft)}),K.size===0){O(y);return}setTimeout(st,10)}Qt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Bt=null;function Ct(y){Bt&&Bt(y)}function It(){wt.stop()}function xt(){wt.start()}const wt=new Sp;wt.setAnimationLoop(Ct),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(y){Bt=y,_.setAnimationLoop(y),y===null?wt.stop():wt.start()},_.addEventListener("sessionstart",It),_.addEventListener("sessionend",xt),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),_.enabled===!0&&_.isPresenting===!0&&(_.cameraAutoUpdate===!0&&_.updateCamera(F),F=_.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,F,L),f=ce.get(y,E.length),f.init(F),E.push(f),vt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(vt),ct=this.localClippingEnabled,at=bt.init(this.clippingPlanes,ct),g=Nt.get(y,x.length),g.init(),x.push(g),_.enabled===!0&&_.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&jt(st,F,-1/0,v.sortObjects)}jt(y,F,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(nt,Y),Gt=_.enabled===!1||_.isPresenting===!1||_.hasDepthSensing()===!1,Gt&&Kt.addToRenderList(g,y),this.info.render.frame++,at===!0&&bt.beginShadows();const V=f.state.shadowsArray;Ft.render(V,y,F),at===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=g.opaque,O=g.transmissive;if(f.setupLights(),F.isArrayCamera){const st=F.cameras;if(O.length>0)for(let ft=0,_t=st.length;ft<_t;ft++){const pt=st[ft];re(K,O,y,pt)}Gt&&Kt.render(y);for(let ft=0,_t=st.length;ft<_t;ft++){const pt=st[ft];St(g,y,pt,pt.viewport)}}else O.length>0&&re(K,O,y,F),Gt&&Kt.render(y),St(g,y,F);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(v,y,F),Te.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],at===!0&&bt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function jt(y,F,V,K){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Q.intersectsSprite(y)){K&&Lt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(vt);const ft=ot.update(y),_t=y.material;_t.visible&&g.push(y,ft,_t,V,Lt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Q.intersectsObject(y))){const ft=ot.update(y),_t=y.material;if(K&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Lt.copy(y.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(y.matrixWorld).applyMatrix4(vt)),Array.isArray(_t)){const pt=ft.groups;for(let gt=0,Tt=pt.length;gt<Tt;gt++){const Ht=pt[gt],le=_t[Ht.materialIndex];le&&le.visible&&g.push(y,ft,le,V,Lt.z,Ht)}}else _t.visible&&g.push(y,ft,_t,V,Lt.z,null)}}const st=y.children;for(let ft=0,_t=st.length;ft<_t;ft++)jt(st[ft],F,V,K)}function St(y,F,V,K){const O=y.opaque,st=y.transmissive,ft=y.transparent;f.setupLightsView(V),at===!0&&bt.setGlobalState(v.clippingPlanes,V),K&&Mt.viewport(I.copy(K)),O.length>0&&Jt(O,F,V),st.length>0&&Jt(st,F,V),ft.length>0&&Jt(ft,F,V),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function re(y,F,V,K){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[K.id]===void 0&&(f.state.transmissionRenderTarget[K.id]=new rs(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?zr:_i,minFilter:ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const st=f.state.transmissionRenderTarget[K.id],ft=K.viewport||I;st.setSize(ft.z,ft.w);const _t=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(W),et=v.getClearAlpha(),et<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&Kt.render(V);const pt=v.toneMapping;v.toneMapping=Di;const gt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),f.setupLightsView(K),at===!0&&bt.setGlobalState(v.clippingPlanes,K),Jt(y,V,K),P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Ht=0,le=F.length;Ht<le;Ht++){const $t=F[Ht],be=$t.object,xe=$t.geometry,he=$t.material,qt=$t.group;if(he.side===mn&&be.layers.test(K.layers)){const Le=he.side;he.side=vn,he.needsUpdate=!0,Et(be,V,K,xe,he,qt),he.side=Le,he.needsUpdate=!0,Tt=!0}}Tt===!0&&(P.updateMultisampleRenderTarget(st),P.updateRenderTargetMipmap(st))}v.setRenderTarget(_t),v.setClearColor(W,et),gt!==void 0&&(K.viewport=gt),v.toneMapping=pt}function Jt(y,F,V){const K=F.isScene===!0?F.overrideMaterial:null;for(let O=0,st=y.length;O<st;O++){const ft=y[O],_t=ft.object,pt=ft.geometry,gt=K===null?ft.material:K,Tt=ft.group;_t.layers.test(V.layers)&&Et(_t,F,V,pt,gt,Tt)}}function Et(y,F,V,K,O,st){y.onBeforeRender(v,F,V,K,O,st),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(v,F,V,K,y,st),O.transparent===!0&&O.side===mn&&O.forceSinglePass===!1?(O.side=vn,O.needsUpdate=!0,v.renderBufferDirect(V,F,K,O,y,st),O.side=gi,O.needsUpdate=!0,v.renderBufferDirect(V,F,K,O,y,st),O.side=mn):v.renderBufferDirect(V,F,K,O,y,st),y.onAfterRender(v,F,V,K,O,st)}function Dt(y,F,V){F.isScene!==!0&&(F=yt);const K=Wt.get(y),O=f.state.lights,st=f.state.shadowsArray,ft=O.state.version,_t=Xt.getParameters(y,O.state,st,F,V),pt=Xt.getProgramCacheKey(_t);let gt=K.programs;K.environment=y.isMeshStandardMaterial?F.environment:null,K.fog=F.fog,K.envMap=(y.isMeshStandardMaterial?$:A).get(y.envMap||K.environment),K.envMapRotation=K.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,gt===void 0&&(y.addEventListener("dispose",ut),gt=new Map,K.programs=gt);let Tt=gt.get(pt);if(Tt!==void 0){if(K.currentProgram===Tt&&K.lightsStateVersion===ft)return te(y,_t),Tt}else _t.uniforms=Xt.getUniforms(y),y.onBeforeCompile(_t,v),Tt=Xt.acquireProgram(_t,pt),gt.set(pt,Tt),K.uniforms=_t.uniforms;const Ht=K.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ht.clippingPlanes=bt.uniform),te(y,_t),K.needsLights=ht(y),K.lightsStateVersion=ft,K.needsLights&&(Ht.ambientLightColor.value=O.state.ambient,Ht.lightProbe.value=O.state.probe,Ht.directionalLights.value=O.state.directional,Ht.directionalLightShadows.value=O.state.directionalShadow,Ht.spotLights.value=O.state.spot,Ht.spotLightShadows.value=O.state.spotShadow,Ht.rectAreaLights.value=O.state.rectArea,Ht.ltc_1.value=O.state.rectAreaLTC1,Ht.ltc_2.value=O.state.rectAreaLTC2,Ht.pointLights.value=O.state.point,Ht.pointLightShadows.value=O.state.pointShadow,Ht.hemisphereLights.value=O.state.hemi,Ht.directionalShadowMap.value=O.state.directionalShadowMap,Ht.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ht.spotShadowMap.value=O.state.spotShadowMap,Ht.spotLightMatrix.value=O.state.spotLightMatrix,Ht.spotLightMap.value=O.state.spotLightMap,Ht.pointShadowMap.value=O.state.pointShadowMap,Ht.pointShadowMatrix.value=O.state.pointShadowMatrix),K.currentProgram=Tt,K.uniformsList=null,Tt}function Vt(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Wa.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function te(y,F){const V=Wt.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Yt(y,F,V,K,O){F.isScene!==!0&&(F=yt),P.resetTextureUnits();const st=F.fog,ft=K.isMeshStandardMaterial?F.environment:null,_t=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_n,pt=(K.isMeshStandardMaterial?$:A).get(K.envMap||ft),gt=K.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Tt=!!V.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ht=!!V.morphAttributes.position,le=!!V.morphAttributes.normal,$t=!!V.morphAttributes.color;let be=Di;K.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(be=v.toneMapping);const xe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,he=xe!==void 0?xe.length:0,qt=Wt.get(K),Le=f.state.lights;if(at===!0&&(ct===!0||y!==M)){const ze=y===M&&K.id===S;bt.setState(K,y,ze)}let ve=!1;K.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Le.state.version||qt.outputColorSpace!==_t||O.isBatchedMesh&&qt.batching===!1||!O.isBatchedMesh&&qt.batching===!0||O.isBatchedMesh&&qt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&qt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&qt.instancing===!1||!O.isInstancedMesh&&qt.instancing===!0||O.isSkinnedMesh&&qt.skinning===!1||!O.isSkinnedMesh&&qt.skinning===!0||O.isInstancedMesh&&qt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&qt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&qt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&qt.instancingMorph===!1&&O.morphTexture!==null||qt.envMap!==pt||K.fog===!0&&qt.fog!==st||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==bt.numPlanes||qt.numIntersection!==bt.numIntersection)||qt.vertexAlphas!==gt||qt.vertexTangents!==Tt||qt.morphTargets!==Ht||qt.morphNormals!==le||qt.morphColors!==$t||qt.toneMapping!==be||qt.morphTargetsCount!==he)&&(ve=!0):(ve=!0,qt.__version=K.version);let hn=qt.currentProgram;ve===!0&&(hn=Dt(K,F,O));let rn=!1,Be=!1,Je=!1;const ye=hn.getUniforms(),We=qt.uniforms;if(Mt.useProgram(hn.program)&&(rn=!0,Be=!0,Je=!0),K.id!==S&&(S=K.id,Be=!0),rn||M!==y){Mt.buffers.depth.getReversed()?(Z.copy(y.projectionMatrix),qg(Z),Kg(Z),ye.setValue(k,"projectionMatrix",Z)):ye.setValue(k,"projectionMatrix",y.projectionMatrix),ye.setValue(k,"viewMatrix",y.matrixWorldInverse);const Xe=ye.map.cameraPosition;Xe!==void 0&&Xe.setValue(k,Ut.setFromMatrixPosition(y.matrixWorld)),oe.logarithmicDepthBuffer&&ye.setValue(k,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ye.setValue(k,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Be=!0,Je=!0)}if(O.isSkinnedMesh){ye.setOptional(k,O,"bindMatrix"),ye.setOptional(k,O,"bindMatrixInverse");const ze=O.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ye.setValue(k,"boneTexture",ze.boneTexture,P))}O.isBatchedMesh&&(ye.setOptional(k,O,"batchingTexture"),ye.setValue(k,"batchingTexture",O._matricesTexture,P),ye.setOptional(k,O,"batchingIdTexture"),ye.setValue(k,"batchingIdTexture",O._indirectTexture,P),ye.setOptional(k,O,"batchingColorTexture"),O._colorsTexture!==null&&ye.setValue(k,"batchingColorTexture",O._colorsTexture,P));const Oe=V.morphAttributes;if((Oe.position!==void 0||Oe.normal!==void 0||Oe.color!==void 0)&&ie.update(O,V,hn),(Be||qt.receiveShadow!==O.receiveShadow)&&(qt.receiveShadow=O.receiveShadow,ye.setValue(k,"receiveShadow",O.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(We.envMap.value=pt,We.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&F.environment!==null&&(We.envMapIntensity.value=F.environmentIntensity),Be&&(ye.setValue(k,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&Ee(We,Je),st&&K.fog===!0&&Pt.refreshFogUniforms(We,st),Pt.refreshMaterialUniforms(We,K,D,X,f.state.transmissionRenderTarget[y.id]),Wa.upload(k,Vt(qt),We,P)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Wa.upload(k,Vt(qt),We,P),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ye.setValue(k,"center",O.center),ye.setValue(k,"modelViewMatrix",O.modelViewMatrix),ye.setValue(k,"normalMatrix",O.normalMatrix),ye.setValue(k,"modelMatrix",O.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ze=K.uniformsGroups;for(let Xe=0,xi=ze.length;Xe<xi;Xe++){const jn=ze[Xe];j.update(jn,hn),j.bind(jn,hn)}}return hn}function Ee(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function ht(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,F,V){Wt.get(y.texture).__webglTexture=F,Wt.get(y.depthTexture).__webglTexture=V;const K=Wt.get(y);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=V===void 0,K.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const V=Wt.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,V=0){L=y,w=F,R=V;let K=!0,O=null,st=!1,ft=!1;if(y){const pt=Wt.get(y);if(pt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(k.FRAMEBUFFER,null),K=!1;else if(pt.__webglFramebuffer===void 0)P.setupRenderTarget(y);else if(pt.__hasExternalTextures)P.rebindTextures(y,Wt.get(y.texture).__webglTexture,Wt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ht=y.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&Wt.has(Ht)&&(y.width!==Ht.image.width||y.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(y)}}const gt=y.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(ft=!0);const Tt=Wt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Tt[F])?O=Tt[F][V]:O=Tt[F],st=!0):y.samples>0&&P.useMultisampledRTT(y)===!1?O=Wt.get(y).__webglMultisampledFramebuffer:Array.isArray(Tt)?O=Tt[V]:O=Tt,I.copy(y.viewport),z.copy(y.scissor),H=y.scissorTest}else I.copy(J).multiplyScalar(D).floor(),z.copy(mt).multiplyScalar(D).floor(),H=kt;if(Mt.bindFramebuffer(k.FRAMEBUFFER,O)&&K&&Mt.drawBuffers(y,O),Mt.viewport(I),Mt.scissor(z),Mt.setScissorTest(H),st){const pt=Wt.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,pt.__webglTexture,V)}else if(ft){const pt=Wt.get(y.texture),gt=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,pt.__webglTexture,V||0,gt)}S=-1},this.readRenderTargetPixels=function(y,F,V,K,O,st,ft){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){Mt.bindFramebuffer(k.FRAMEBUFFER,_t);try{const pt=y.texture,gt=pt.format,Tt=pt.type;if(!oe.textureFormatReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-K&&V>=0&&V<=y.height-O&&k.readPixels(F,V,K,O,se.convert(gt),se.convert(Tt),st)}finally{const pt=L!==null?Wt.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(k.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,K,O,st,ft){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Wt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(_t=_t[ft]),_t){const pt=y.texture,gt=pt.format,Tt=pt.type;if(!oe.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-K&&V>=0&&V<=y.height-O){Mt.bindFramebuffer(k.FRAMEBUFFER,_t);const Ht=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ht),k.bufferData(k.PIXEL_PACK_BUFFER,st.byteLength,k.STREAM_READ),k.readPixels(F,V,K,O,se.convert(gt),se.convert(Tt),0);const le=L!==null?Wt.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(k.FRAMEBUFFER,le);const $t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await jg(k,$t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ht),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,st),k.deleteBuffer(Ht),k.deleteSync($t),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,V=0){y.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const K=Math.pow(2,-V),O=Math.floor(y.image.width*K),st=Math.floor(y.image.height*K),ft=F!==null?F.x:0,_t=F!==null?F.y:0;P.setTexture2D(y,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,ft,_t,O,st),Mt.unbindTexture()};const zt=k.createFramebuffer(),At=k.createFramebuffer();this.copyTextureToTexture=function(y,F,V=null,K=null,O=0,st=null){y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,y=arguments[1],F=arguments[2],st=arguments[3]||0,V=null),st===null&&(O!==0?(Ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=O,O=0):st=0);let ft,_t,pt,gt,Tt,Ht,le,$t,be;const xe=y.isCompressedTexture?y.mipmaps[st]:y.image;if(V!==null)ft=V.max.x-V.min.x,_t=V.max.y-V.min.y,pt=V.isBox3?V.max.z-V.min.z:1,gt=V.min.x,Tt=V.min.y,Ht=V.isBox3?V.min.z:0;else{const Oe=Math.pow(2,-O);ft=Math.floor(xe.width*Oe),_t=Math.floor(xe.height*Oe),y.isDataArrayTexture?pt=xe.depth:y.isData3DTexture?pt=Math.floor(xe.depth*Oe):pt=1,gt=0,Tt=0,Ht=0}K!==null?(le=K.x,$t=K.y,be=K.z):(le=0,$t=0,be=0);const he=se.convert(F.format),qt=se.convert(F.type);let Le;F.isData3DTexture?(P.setTexture3D(F,0),Le=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),Le=k.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),Le=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const ve=k.getParameter(k.UNPACK_ROW_LENGTH),hn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),rn=k.getParameter(k.UNPACK_SKIP_PIXELS),Be=k.getParameter(k.UNPACK_SKIP_ROWS),Je=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,gt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ht);const ye=y.isDataArrayTexture||y.isData3DTexture,We=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const Oe=Wt.get(y),ze=Wt.get(F),Xe=Wt.get(Oe.__renderTarget),xi=Wt.get(ze.__renderTarget);Mt.bindFramebuffer(k.READ_FRAMEBUFFER,Xe.__webglFramebuffer),Mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let jn=0;jn<pt;jn++)ye&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.get(y).__webglTexture,O,Ht+jn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.get(F).__webglTexture,st,be+jn)),k.blitFramebuffer(gt,Tt,ft,_t,le,$t,ft,_t,k.DEPTH_BUFFER_BIT,k.NEAREST);Mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Wt.has(y)){const Oe=Wt.get(y),ze=Wt.get(F);Mt.bindFramebuffer(k.READ_FRAMEBUFFER,zt),Mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,At);for(let Xe=0;Xe<pt;Xe++)ye?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,O,Ht+Xe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Oe.__webglTexture,O),We?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ze.__webglTexture,st,be+Xe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ze.__webglTexture,st),O!==0?k.blitFramebuffer(gt,Tt,ft,_t,le,$t,ft,_t,k.COLOR_BUFFER_BIT,k.NEAREST):We?k.copyTexSubImage3D(Le,st,le,$t,be+Xe,gt,Tt,ft,_t):k.copyTexSubImage2D(Le,st,le,$t,gt,Tt,ft,_t);Mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else We?y.isDataTexture||y.isData3DTexture?k.texSubImage3D(Le,st,le,$t,be,ft,_t,pt,he,qt,xe.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,st,le,$t,be,ft,_t,pt,he,xe.data):k.texSubImage3D(Le,st,le,$t,be,ft,_t,pt,he,qt,xe):y.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,st,le,$t,ft,_t,he,qt,xe.data):y.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,st,le,$t,xe.width,xe.height,he,xe.data):k.texSubImage2D(k.TEXTURE_2D,st,le,$t,ft,_t,he,qt,xe);k.pixelStorei(k.UNPACK_ROW_LENGTH,ve),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,hn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,rn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Be),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Je),st===0&&F.generateMipmaps&&k.generateMipmap(Le),Mt.unbindTexture()},this.copyTextureToTexture3D=function(y,F,V=null,K=null,O=0){return y.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,K=arguments[1]||null,y=arguments[2],F=arguments[3],O=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,V,K,O)},this.initRenderTarget=function(y){Wt.get(y).__webglFramebuffer===void 0&&P.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?P.setTextureCube(y,0):y.isData3DTexture?P.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?P.setTexture2DArray(y,0):P.setTexture2D(y,0),Mt.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,Mt.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}function Lu(i,t){if(t===bg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===ol||t===Zf){let e=i.getIndex();if(e===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===ol)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class $y extends Js{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new eM(e)}),this.register(function(e){return new nM(e)}),this.register(function(e){return new uM(e)}),this.register(function(e){return new dM(e)}),this.register(function(e){return new fM(e)}),this.register(function(e){return new sM(e)}),this.register(function(e){return new rM(e)}),this.register(function(e){return new aM(e)}),this.register(function(e){return new oM(e)}),this.register(function(e){return new tM(e)}),this.register(function(e){return new cM(e)}),this.register(function(e){return new iM(e)}),this.register(function(e){return new hM(e)}),this.register(function(e){return new lM(e)}),this.register(function(e){return new Jy(e)}),this.register(function(e){return new pM(e)}),this.register(function(e){return new mM(e)})}load(t,e,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Rr.extractUrlBase(t);a=Rr.resolveURL(l,this.path)}else a=Rr.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new yp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(u){e(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Rp){try{a[me.KHR_BINARY_GLTF]=new gM(t)}catch(h){s&&s(h);return}r=JSON.parse(a[me.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new CM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case me.KHR_MATERIALS_UNLIT:a[h]=new Qy;break;case me.KHR_DRACO_MESH_COMPRESSION:a[h]=new _M(r,this.dracoLoader);break;case me.KHR_TEXTURE_TRANSFORM:a[h]=new bM;break;case me.KHR_MESH_QUANTIZATION:a[h]=new xM;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function Zy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const me={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jy{constructor(t){this.parser=t,this.name=me.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const u=new ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],_n);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new K_(u),l.distance=h;break;case"spot":l=new j_(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Qy{constructor(){this.name=me.KHR_MATERIALS_UNLIT}getMaterialType(){return Ze}extendParams(t,e,n){const s=[];t.color=new ne(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],_n),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Fe))}return Promise.all(s)}}class tM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class eM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Zt(o,o)}return Promise.all(r)}}class nM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class iM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class sM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ne(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],_n)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Fe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class rM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class aM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new ne().setRGB(o[0],o[1],o[2],_n),Promise.all(r)}}class oM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class cM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new ne().setRGB(o[0],o[1],o[2],_n),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Fe)),Promise.all(r)}}class lM{constructor(t){this.parser=t,this.name=me.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class hM{constructor(t){this.parser=t,this.name=me.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Qn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class uM{constructor(t){this.parser=t,this.name=me.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class dM{constructor(t){this.parser=t,this.name=me.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class fM{constructor(t){this.parser=t,this.name=me.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class pM{constructor(t){this.name=me.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class mM{constructor(t){this.name=me.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const m of h){const b=new ae,g=new U,f=new sn,x=new U(1,1,1),E=new M_(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),E.setMatrixAt(v,b.compose(g,f,x));for(const v in c)if(v==="_COLOR_0"){const T=c[v];E.instanceColor=new ll(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);Ne.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),p.push(E)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Rp="glTF",pr=12,Du={JSON:1313821514,BIN:5130562};class gM{constructor(t){this.name=me.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,pr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-pr,r=new DataView(t,pr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Du.JSON){const l=new Uint8Array(t,pr+a,o);this.content=n.decode(l)}else if(c===Du.BIN){const l=pr+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _M{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=me.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=ml[u]||u.toLowerCase();o[h]=a[u]}for(const u in t.attributes){const h=ml[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[t.attributes[u]],p=ks[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(const m in p.attributes){const b=p.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}h(p)},o,l,_n,d)})})}}class bM{constructor(){this.name=me.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class xM{constructor(){this.name=me.KHR_MESH_QUANTIZATION}}class Cp extends Gr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-e,h=(n-e)/u,d=h*h,p=d*h,m=t*l,b=m-l,g=-2*p+3*d,f=p-d,x=1-g,E=f-d+h;for(let v=0;v!==o;v++){const T=a[b+v+o],w=a[b+v+c]*u,R=a[m+v+o],L=a[m+v]*u;r[v]=x*T+E*w+g*R+f*L}return r}}const vM=new sn;class yM extends Cp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return vM.fromArray(r).normalize().toArray(r),r}}const Cn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Uu={9728:gn,9729:Sn,9984:zf,9985:Oa,9986:Er,9987:ui},Nu={33071:hi,33648:Ka,10497:is},Qo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MM={CUBICSPLINE:void 0,LINEAR:Lr,STEP:Ir},tc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function SM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),i.DefaultMaterial}function Hi(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ci(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function EM(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,u=t.length;l<u;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function AM(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function TM(i){let t;const e=i.extensions&&i.extensions[me.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+ec(e.attributes):t=i.indices+":"+ec(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+ec(i.targets[n]);return t}function ec(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function gl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const RM=new ae;class CM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Zy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new V_(this.options.manager):this.textureLoader=new Z_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Hi(r,o,s),ci(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const a=e[s].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[me.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Rr.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const a=Qo[s.type],o=ks[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ae(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Qo[s.type],l=ks[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let b,g;if(p&&p!==h){const f=Math.floor(d/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let E=e.cache.get(x);E||(b=new l(o,f*p,s.count*p/u),E=new Vl(b,p/u),e.cache.add(x,E)),g=new Vn(E,c,d%p/u,m)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),g=new Ae(b,c,m);if(s.sparse!==void 0){const f=Qo.SCALAR,x=ks[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new x(a[1],E,s.sparse.count*f),w=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new Ae(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,L=T.length;R<L;R++){const S=T[R];if(g.setX(S,w[R*c]),c>=2&&g.setY(S,w[R*c+1]),c>=3&&g.setZ(S,w[R*c+2]),c>=4&&g.setW(S,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const s=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Uu[d.magFilter]||Sn,u.minFilter=Uu[d.minFilter]||ui,u.wrapS=Nu[d.wrapS]||is,u.wrapT=Nu[d.wrapT]||is,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==gn&&u.minFilter!==Sn,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const a=s.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let m=d;e.isImageBitmapLoader===!0&&(m=function(b){const g=new qe(b);g.needsUpdate=!0,d(g)}),e.load(Rr.resolveURL(h,r.path),m,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),ci(h,a),h.userData.mimeType=a.mimeType||wM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[me.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[me.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[me.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new mp,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new pp,Dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Hr}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[me.KHR_MATERIALS_UNLIT]){const h=s[me.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,e))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],_n),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",h.baseColorTexture,Fe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=mn);const u=r.alphaMode||tc.OPAQUE;if(u===tc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===tc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ze&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Zt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ze&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ze){const h=r.emissiveFactor;o.emissive=new ne().setRGB(h[0],h[1],h[2],_n)}return r.emissiveTexture!==void 0&&a!==Ze&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Fe)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ci(h,r),e.associations.set(h,{materials:t}),r.extensions&&Hi(s,h,r),h})}createUniqueName(t){const e=we.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[me.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Fu(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],u=TM(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[me.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Fu(new He,l,e),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?SM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,m=u.length;p<m;p++){const b=u[p],g=a[p];let f;const x=l[p];if(g.mode===Cn.TRIANGLES||g.mode===Cn.TRIANGLE_STRIP||g.mode===Cn.TRIANGLE_FAN||g.mode===void 0)f=r.isSkinnedMesh===!0?new x_(b,x):new Se(b,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Cn.TRIANGLE_STRIP?f.geometry=Lu(f.geometry,Zf):g.mode===Cn.TRIANGLE_FAN&&(f.geometry=Lu(f.geometry,ol));else if(g.mode===Cn.LINES)f=new A_(b,x);else if(g.mode===Cn.LINE_STRIP)f=new jl(b,x);else if(g.mode===Cn.LINE_LOOP)f=new T_(b,x);else if(g.mode===Cn.POINTS)f=new w_(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&AM(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),ci(f,r),g.extensions&&Hi(s,f,g),e.assignFinalMaterial(f),h.push(f)}for(let p=0,m=h.length;p<m;p++)e.associations.set(h[p],{meshes:t,primitives:p});if(h.length===1)return r.extensions&&Hi(s,h[0],r),h[0];const d=new Ln;r.extensions&&Hi(s,d,r),e.associations.set(d,{meshes:t});for(let p=0,m=h.length;p<m;p++)d.add(h[p]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new pn(Qf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Zl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ci(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new ae;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Wl(o,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],m=s.samplers[p.sampler],b=p.target,g=b.node,f=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],m=h[2],b=h[3],g=h[4],f=[];for(let x=0,E=d.length;x<E;x++){const v=d[x],T=p[x],w=m[x],R=b[x],L=g[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,T,w,R,L);if(S)for(let M=0;M<S.length;M++)f.push(S[M])}return new dl(r,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,RM)});for(let p=0,m=h.length;p<m;p++)u.add(h[p]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new dp:l.length>1?u=new Ln:l.length===1?u=l[0]:u=new Ne,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ci(u,r),r.extensions&&Hi(n,u,r),r.matrix!==void 0){const h=new ae;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new Ln;n.name&&(r.name=s.createUniqueName(n.name)),ci(r,n),n.extensions&&Hi(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Dn||d instanceof qe)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const a=[],o=t.name?t.name:t.uuid,c=[];Ti[r.path]===Ti.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ti[r.path]){case Ti.weights:l=qs;break;case Ti.rotation:l=Ks;break;case Ti.position:case Ti.scale:l=Ys;break;default:switch(n.itemSize){case 1:l=qs;break;case 2:case 3:default:l=Ys;break}break}const u=s.interpolation!==void 0?MM[s.interpolation]:Lr,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const m=new l(c[d]+"."+Ti[r.path],e.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=gl(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Ks?yM:Cp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function PM(i,t,e){const n=t.attributes,s=new ln;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){const u=gl(ks[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new U,c=new U;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){const b=gl(ks[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Fu(i,t,e){const n=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=ml[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!i.index){const a=e.getDependency("accessor",t.indices).then(function(o){i.setIndex(o)});s.push(a)}return Me.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Me.workingColorSpace}" not supported.`),ci(i,t),PM(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?EM(i,t.targets,e):i})}var IM=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var x=new Uint8Array(f.length),E=0;E<f.length;++E){var v=f.charCodeAt(E);x[E]=v>96?v-97:v>64?v-39:v+4}for(var T=0,E=0;E<f.length;++E)x[T++]=x[E]<60?n[x[E]]:(x[E]-60)*64+x[++E];return x.buffer.slice(0,T)}function c(f,x,E,v,T,w){var R=r.exports.sbrk,L=E+3&-4,S=R(L*v),M=R(T.length),I=new Uint8Array(r.exports.memory.buffer);I.set(T,M);var z=f(S,E,v,M,T.length);if(z==0&&w&&w(S,L,v),x.set(I.subarray(S,S+E*v)),R(S-R(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function p(f){var x={object:new Worker(f),pending:0,requests:{}};return x.object.onmessage=function(E){var v=E.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(f){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),E=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(E),T=0;T<f;++T)h[T]=p(v);URL.revokeObjectURL(v)}function b(f,x,E,v,T){for(var w=h[0],R=1;R<h.length;++R)h[R].pending<w.pending&&(w=h[R]);return new Promise(function(L,S){var M=new Uint8Array(E),I=d++;w.pending+=f,w.requests[I]={resolve:L,reject:S},w.object.postMessage({id:I,count:f,size:x,source:M,mode:v,filter:T},[M.buffer])})}function g(f){a.then(function(){var x=f.data;try{var E=new Uint8Array(x.count*x.size);c(r.exports[x.mode],E,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:E},[E.buffer])}catch(v){self.postMessage({id:x.id,count:x.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(f){m(f)},decodeVertexBuffer:function(f,x,E,v,T){c(r.exports.meshopt_decodeVertexBuffer,f,x,E,v,r.exports[l[T]])},decodeIndexBuffer:function(f,x,E,v){c(r.exports.meshopt_decodeIndexBuffer,f,x,E,v)},decodeIndexSequence:function(f,x,E,v){c(r.exports.meshopt_decodeIndexSequence,f,x,E,v)},decodeGltfBuffer:function(f,x,E,v,T,w){c(r.exports[u[T]],f,x,E,v,r.exports[l[w]])},decodeGltfBufferAsync:function(f,x,E,v,T){return h.length>0?b(f,x,E,u[v],l[T]):a.then(function(){var w=new Uint8Array(f*x);return c(r.exports[u[v]],w,f,x,E,r.exports[l[T]]),w})}}})();function eh(){return new $y().setMeshoptDecoder(IM)}let LM="";const po=i=>`${LM}${i}`,DM=.001,UM=.5,Ou={playing:!1,settling:!1,stillFor:0,pending:1},Pp=i=>i.playing||i.settling||i.pending>0,NM=i=>!i.playing&&!i.settling,FM=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),OM=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,kM=i=>Pp(i)?i:{...i,pending:1};function BM(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<DM?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<UM}}function ku(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const as="#c8f323",zM="#0b0f10";function HM(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const GM=HM(as),VM=as,WM="#7aa2ff",XM="#ffb340",jM="#b18cff",qM=as,KM=as,mr=new U;function Tn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;mr.copy(t),mr[n]=0,mr.normalize();const l=.5*a/(a+o),u=1-mr.angleTo(i)/c;return Math.sign(mr[e])===1?u*l:o/(a+o)+l+l*(1-u)}class YM extends Ui{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new U,c=new U,l=new U(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,m=new U,b=.5/s;for(let g=0,f=0;g<u.length;g+=3,f+=2)switch(o.fromArray(u,g),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),u[g+0]=l.x*Math.sign(o.x)+c.x*r,u[g+1]=l.y*Math.sign(o.y)+c.y*r,u[g+2]=l.z*Math.sign(o.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:m.set(1,0,0),d[f+0]=Tn(m,c,"z","y",r,n),d[f+1]=1-Tn(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[f+0]=1-Tn(m,c,"z","y",r,n),d[f+1]=1-Tn(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[f+0]=1-Tn(m,c,"x","z",r,t),d[f+1]=Tn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[f+0]=1-Tn(m,c,"x","z",r,t),d[f+1]=1-Tn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[f+0]=1-Tn(m,c,"x","y",r,t),d[f+1]=1-Tn(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[f+0]=Tn(m,c,"x","y",r,t),d[f+1]=1-Tn(m,c,"y","x",r,e);break}}}function $M(i){const t=new Hr({color:qM,roughness:.6,toneMapped:!1}),e=new Ln,n=new Se(new YM(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new Zt(.17,.06),new Zt(.15,.1)];for(let a=0;a<=8;a++)s.push(new Zt(.15-.11*a/8,.1+.31*a/8));for(let a=1;a<=4;a++){const o=a/4*(Math.PI/2);s.push(new Zt(.04*Math.cos(o),.41+.04*Math.sin(o)))}const r=new Se(new ql(s,24),t);return e.add(n,r),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.scale.setScalar(i),e}function Ip(i,t,e,n,s,r){let a=r;const o=()=>(a=a*1103515245+12345&2147483647)/2147483647,c=e/n,l=5*c;for(let u=Math.floor(s/5)*5;u<s+n;u+=5){const h=(u-s)*c,d=i.createLinearGradient(0,h,0,h+l);(Math.floor(u/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,h,t,l+1)}for(let u=0;u<20;u++){const h=(u%5+.15+o()*.7)*(t/5),d=(Math.floor(u/5)+.15+o()*.7)*(e/4),p=(40+o()*120)*(t/1024),m=o()>.5,b=i.createRadialGradient(h,d,0,h,d,p);b.addColorStop(0,m?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),b.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=b,i.fillRect(h-p,d-p,2*p,2*p)}Lp(i,t,e,o,1)}function Lp(i,t,e,n,s){const r=o=>(o*s).toFixed(3),a=t*e/1048576;for(let o=0;o<6400*a;o++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let o=0;o<9600*a;o++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function ZM(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Ip(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),Dp(n);const s=new Fn(e);return s.colorSpace=Fe,s.flipY=!1,s}function Dp(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const JM=2.5;function Up(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const nn=6;function QM(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Ip(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),Dp(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,a=e/(t+2*e)*1024,o=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,a],[0,1024,0,1024-a]];for(const[u,h,d,p]of o){const m=s.createLinearGradient(u,h,d,p);m.addColorStop(0,"rgba(0,0,0,0.55)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(0,0,1024,1024)}const c=JM*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",Up(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const l=new Fn(n);return l.colorSpace=Fe,l.flipY=!1,l}function tS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",Up(t,40,40,176,176,34),t.fill();const e=new Fn(i);return e.flipY=!1,e}let gr=null;function eS(){if(gr)return gr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),gr=new Fn(i),gr.userData.shared=!0,gr}function nS(i){const t=new Se(new Kl(i/2,24).rotateX(-Math.PI/2),new Ze({map:eS(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const Jn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},iS=.5;function Nr(i,t){const e=new Map;for(const r of i.equipment??[])r.type==="goal"&&e.set(r.at[1],(e.get(r.at[1])??0)+1);if(!e.size)return t;const n=Math.max(...e.values()),s=n+(n-1)*iS;return Math.min(t,i.pitch.width/(2*Jn.halfW*s))}let Bu=null;function sS(i){return Bu??(Bu=i.loadAsync(po("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw Bu=null,t}))}let zu=!1;function rS(i,t){if(zu||!t)return;zu=!0;const e=new ln().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-Jn.halfW)>.05||Math.abs(s-Jn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${Jn.halfW}, top ${s.toFixed(3)} vs ${Jn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function aS(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new U(n*(t/2+nn),0,s*(e/2+nn)))}function _l(i,t){const{width:e,length:n}=i.pitch,s=Nr(i,t),r=[];for(const a of i.equipment??[]){if(a.type!=="goal")continue;const o=a.at[0]-e/2,c=a.at[1]-n/2,l=a.at[1]>n/2?-1:1,u=[Jn.zMin*s*l,Jn.zMax*s*l];for(const h of[-3.348*s,Jn.halfW*s])for(const d of[0,Jn.top*s])for(const p of u)r.push(new U(o+h,d,c+p))}return r}const oS=600,Np=oS/2*Math.SQRT2,Hu=30,cS=-.06,lS=-.04,hS=660496,uS="#04170c",Gu=.7,Fp=1.2;function dS(i,t,e){const n=Math.max(t,e),s=n/2+nn,r=Fp*n;return r>s?1-(1-Gu)*nh((i-s)/(r-s)):i>=s?Gu:1}function nh(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const fS=1.6,pS=2.6;function mS(i,t){const e=Math.max(i,t);return{near:fS*e+nn,far:pS*e+nn}}const Vu="#0b1f22",nc="#010203",gS=1.02;function _S(i,t){return Math.hypot(i/2+nn,t/2+nn)*gS}const bS=.12,xS=1.15,ih=(i,t)=>Math.hypot(i/2,t/2),Op=(i,t)=>ih(i,t)*xS,xa=12,ic=18,Wu=.3,vS=2.4,Xu=1.2,yS=.4,MS=6;function SS(i,t,e=1/0){const n=i/2+nn,s=t/2+nn,r=t>=i?"z":"x",a=r==="z"?n:s,o=r==="z"?s:n,c=ES(a,o,e*AS),l=[-(o+c),o+c],u=-(a+c),h=l.map(d=>r==="z"?[u,d]:[d,u]);return{axis:r,masts:h}}function ES(i,t,e){if(!(e<Math.hypot(i+xa,t+xa)))return xa;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(xa,(-n+Math.sqrt(r))/2)):0}const AS=.97;function sh(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=uS,t.fillRect(0,0,512,512);let e=7;Lp(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new Fn(i);return n.colorSpace=Fe,n.wrapS=n.wrapT=is,n}function TS(){const i=new Ln,t=new Ur({color:1251867}),e=new Se(new Ui(Wu,ic,Wu),t);e.position.y=ic/2;const n=new Se(new Ui(vS,Xu,yS),t);n.position.y=ic+Xu/2;const s=new __(new hp({map:wS(),color:16772564,opacity:.18,blending:ts,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(MS),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let _r=null;function wS(){if(_r)return _r;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),_r=new Fn(i),_r.userData.shared=!0,_r}function RS(){return[[0,nc],[xl,Vu],[IS,Vu],[rh,nc],[1,nc]]}function CS(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of RS())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new Fn(i);return n.colorSpace=Fe,n.wrapS=n.wrapT=hi,n}const bl=.03,ju=.06,PS=.28,rh=1,xl=rh*ju/(ju+PS-bl),IS=.85;function LS(i,t={repeat:0,offset:0}){const e=Math.max(i,bl+.03);return t.repeat=(rh-xl)/(e-bl),t.offset=xl-t.repeat*(1-e),t}const DS=60,US=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<DS,NS=-1e3;function kp(i,t,e,n,s,r){const a=new Ur({map:e,vertexColors:!0}),o=new Ur({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=Fp*Math.max(i,t),l=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&l.push([n,s,16]);const u=[];for(const[h,d,p]of l){const m=h===n,b=new ho(h,d,128,p).rotateX(-Math.PI/2),g=b.getAttribute("position"),f=b.getAttribute("uv"),x=m?4:3,E=new Float32Array(g.count*x);for(let T=0;T<g.count;T++){const w=g.getX(T),R=g.getZ(T);f.setXY(T,w/Hu,R/Hu);const L=Math.hypot(w,R),S=dS(L,i,t);E[x*T]=E[x*T+1]=E[x*T+2]=S,m&&(E[x*T+3]=d>h?1-nh((L-h)/(d-h)):1)}f.needsUpdate=!0,b.setAttribute("color",new Ae(E,x));const v=new Se(b,m?o:a);v.userData[r]=m,v.position.y=cS,u.push(v)}return u}function FS(i,t,e=1,n=sh()){const s=new Ln;n.anisotropy=e;for(const r of kp(i,t,n,ih(i,t),Op(i,t),"floatRim"))s.add(r);return s}const sc=16;function OS(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),a=512/(t+2*e),o=ih(i,t),c=Op(i,t);s.save(),s.translate(256,256),s.scale(1,a/r);const l=s.createRadialGradient(0,0,o*r,0,0,c*r);for(let h=0;h<=sc;h++){const d=Math.round(255*(1-nh(h/sc)));l.addColorStop(h/sc,`rgb(${d},${d},${d})`)}s.fillStyle=l,s.fillRect(-4096,-4096,8192,8192),s.restore();const u=new Fn(n);return u.flipY=!1,u}function kS(i,t,e=1,n=Np,s=sh()){const r=new Ln;s.anisotropy=e;const a=Math.max(n,Math.max(i,t)/2+nn+1),o=a*(1-bS),c=Math.max(o,Math.max(i,t)/2+nn);for(const u of kp(i,t,s,c,a,"rimFade"))r.add(u);const{masts:l}=SS(i,t,a);for(const[u,h]of l){const d=TS();d.name="mast",d.position.set(u,0,h),r.add(d)}return r}async function BS(i,t,e=1,n=1,s=Np){const r=Nr(t,n),{width:a,length:o}=t.pitch,c=(S,M=0)=>new U(S[0]-a/2,M,S[1]-o/2),l=S=>(S.anisotropy=e,S),u=l(QM(a,o,nn)),h=()=>new Xn(a+2*nn,o+2*nn).rotateX(-Math.PI/2),d=new Se(h(),new Ur({map:u,transparent:!0})),p=new Se(h(),new Ur({map:u,alphaMap:OS(a,o,nn),transparent:!0}));for(const S of[d,p])S.position.y=-.02,S.renderOrder=-1,S.receiveShadow=!0;const m=new Se(new Xn((a+2*nn)*1.5,(o+2*nn)*1.5).rotateX(-Math.PI/2),new Ze({map:tS(),transparent:!0,depthWrite:!1}));m.position.y=lS,m.renderOrder=-2,i.add(m);const b=new Se(new Xn(a,o).rotateX(-Math.PI/2),new Hr({map:l(ZM(a,o)),roughness:.9}));b.receiveShadow=!0;const g=sh(),f=kS(a,o,e,s,g),x=FS(a,o,e,g);i.add(d,p,b,f,x);const E=S=>{f.visible=S,m.visible=S,d.visible=S,x.visible=!S,p.visible=!S};E(!0);const v=f.children.filter(S=>S.name==="mast"),T=S=>{for(const M of v)M.visible=S};T(!1);const w=eh(),R=[],L=[];for(const S of t.equipment??[])if(S.type==="cone"){const M=$M(n);M.position.copy(c(S.at,0)),i.add(M),L.push(M)}else{const M=(await sS(w)).clone();M.position.copy(c(S.at)),S.at[1]>o/2&&(M.rotation.y=Math.PI),M.scale.setScalar(r),i.add(M),R.push(M),rS(M,r)}return{toWorld:c,goals:R,cones:L,setWorld:E,setMasts:T}}const qu=new U(10,20,8).normalize(),zS=1.05,vl=2048,HS=1024,GS=1600,VS=(i,t)=>Math.max(i,t)>=GS?vl:HS,WS=5;function XS(i){const t=new ln().setFromPoints(i).getCenter(new U);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function jS(i,t=()=>new Yy({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=ku(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const a=e.domElement;a.style.width="100%",a.style.height="100%",a.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=Of,e.toneMapping=kf,e.toneMappingExposure=zS,e.outputColorSpace=Fe,i.appendChild(a);const o=new g_;o.background=new ne(zM);const c=new pn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const l=new Mp(16772564,WS);l.position.copy(qu).multiplyScalar(40),l.castShadow=!0,l.shadow.mapSize.set(vl,vl),l.shadow.radius=4,o.add(l,l.target,new W_(12571874,2902572,.9));let u=Math.min(devicePixelRatio,2);function h(){var vt;const Z=VS(s.width*u,s.height*u);l.shadow.mapSize.width!==Z&&(l.shadow.mapSize.set(Z,Z),(vt=l.shadow.map)==null||vt.dispose(),l.shadow.map=null)}h();function d(){const Z=ku(i,window,s),vt=Math.min(devicePixelRatio,2),Ut=vt!==u;if(Ut&&(u=vt,e.setPixelRatio(u)),Z.width!==s.width||Z.height!==s.height){s=Z,h(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),M();for(const Lt of[...r])Lt()}else Ut&&(e.setSize(s.width,s.height,!1),h(),M())}const p=typeof ResizeObserver=="function"?new ResizeObserver(d):null;p?p.observe(i):addEventListener("resize",d);let m=null;const b=()=>{g(),d()};function g(){m==null||m.removeEventListener("change",b),m=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,m==null||m.addEventListener("change",b)}g();let f=!0,x=!1,E=0;function v(){x||(x=!0,E=requestAnimationFrame(D))}function T(){f=!document.hidden,f&&(z=-1,v())}document.addEventListener("visibilitychange",T);let w=!0,R=Ou,L=0;const S=new U;function M(){R=kM(R),f&&(x||(z=-1),v())}let I=()=>{},z=-1,H=null,W=null,et=null,B=!0;function X(Z,vt){if(I(Z,vt),ct(),H&&o.fog){const Ut=c.position.length();o.fog.near=Ut+H.near,o.fog.far=Ut+H.far}e.render(o,c),L++}function D(Z){if(x=!1,!f)return;const vt=z<0?0:(Z-z)/1e3;z=Z,S.copy(c.position),X(vt,Z),R=BM(R,S.distanceTo(c.position),vt),w||Pp(R)?v():z=-1}function nt(Z){if(!Z.length)return;const{centre:vt,radius:Ut,distance:Lt,far:yt}=XS(Z);l.target.position.copy(vt),l.target.updateMatrixWorld(),l.position.copy(qu).multiplyScalar(Lt).add(vt);const Gt=l.shadow.camera;Gt.left=-Ut,Gt.right=Ut,Gt.top=Ut,Gt.bottom=-Ut,Gt.near=.5,Gt.far=yt,Gt.updateProjectionMatrix()}function Y(Z){if(H=Z,!Z){o.fog=null;return}o.fog??(o.fog=new Gl(hS,Z.near,Z.far))}function J(Z){if(et=Z,!Z){W&&(W.visible=!1);return}W||(W=new Se(new Xn(1,1),new Ze({map:CS(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),W.renderOrder=NS,W.frustumCulled=!1,o.add(W)),W.visible=B}function mt(Z){B=Z,W&&(W.visible=Z&&!!et)}const kt=new U,Q=new U,at={repeat:0,offset:0};function ct(){if(!W||!et)return;if(!B){W.visible=!1;return}if(c.getWorldDirection(kt),W.visible=US(kt.y),!W.visible)return;const Z=Math.hypot(c.position.x,c.position.z)||1;Q.set(-c.position.x/Z*et,0,-c.position.z/Z*et),Q.project(c);const vt=(1-Q.y)/2,Ut=c.near*1.5,Lt=2*Ut*Math.tan(c.fov*Math.PI/360);W.scale.set(Lt*c.aspect,Lt,1),W.quaternion.copy(c.quaternion),W.position.copy(c.position).addScaledVector(kt,Ut),LS(vt,at);const yt=W.material.map;yt.repeat.set(1,at.repeat),yt.offset.set(0,at.offset)}return{scene:o,camera:c,renderer:e,fitShadow:nt,setFog:Y,setHorizon:J,setSky:mt,size:()=>({...s}),remeasure:d,onBox(Z){return r.add(Z),()=>{r.delete(Z)}},start(Z){I=Z,v()},park(Z){I===Z&&(cancelAnimationFrame(E),x=!1,I=()=>{},R=Ou,L=0,z=-1)},step(Z,vt=performance.now()){X(Z,vt)},frames:()=>L,rule:{enable(){w=!1},play(){R=FM(R),M()},pause(){R=OM(R),M()},wake:M,snap:()=>NM(R)},dispose(){f=!1,r.clear(),m==null||m.removeEventListener("change",b),p?p.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",T),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function qS(i,t){for(const e of t)e.traverse(n=>{var r,a;const s=n;(r=s.skeleton)==null||r.dispose();for(const o of zp(s))o.userData.drillOwned&&o.dispose();(a=s.geometry)!=null&&a.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);Bp(i)}function Bp(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of zp(e)){for(const a of Object.values(r)){const o=a;o!=null&&o.isTexture&&!o.userData.shared&&o.dispose()}r.dispose()}})}const zp=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function KS(i){const t=new Map,e=new Map,n=i.clone();return Hp(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hp(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Hp(i.children[n],t.children[n],e)}const YS=["shirt","jersey","top","tshirt"];let Gi=null;async function $S(i,t,e=po("assets/ochi.glb"),n){if(!Gi||Gi.url!==e){const r=await eh().loadAsync(e),a=r.scene.children.filter(o=>{let c=!1;return o.traverse(l=>{c||(c=l.isSkinnedMesh)}),c});Gi={variants:a.length?a:[r.scene],clips:r.animations,url:e}}const s=[];for(let r=0;r<t;r++){const a=Gi.variants.length>1,o=KS(Gi.variants[r%Gi.variants.length]);o.traverse(l=>{l.castShadow=l.type==="SkinnedMesh",a&&l.isBone&&(l.name=l.name.replace(/_\d+$/,""))}),i.add(o);const c=new u0(o);s.push({root:o,mixer:c,clips:new Map(Gi.clips.map(l=>[l.name,l]))})}return s}const Ku=new WeakMap;function ZS(i){let t=Ku.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),Ku.set(i.root,t)),t}function ah(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const JS=ah(/^foot[LR]$/),QS=ah(/^hand[LR]$/),Yu=ah(/^spine00[12]$/),tE=.2016;function eE(i){const t=new ne(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/tE,1/e)):t}function nE(i,t){i.root.traverse(e=>{const n=e;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).forEach((r,a)=>{const o=(r.name||n.name).toLowerCase();if(YS.some(c=>o.includes(c))){const c=r.clone();c.userData.drillOwned=!0,c.color=eE(t),Array.isArray(n.material)?n.material[a]=c:n.material=c}})})}const $u=["technical","tactical","physical","social"],Zu=["auto","authored","off"],Ju=["save","beaten"],va=["throw","roll","kick"],Qu=["lofted","ground"],iE=3.35,sE=1,td=12,yl=["walk","jog","run","sprint"],ed=["walk","jog","run"],rE=new Set(["move","dribble","pass","shoot","tackle","collect"]),nd=/^#[0-9a-fA-F]{6}$/;function ee(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function wi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&ee(t,"expected [x, y] numbers"),i}function aE(i){var a,o,c,l,u;const t=i;t.version!==1&&ee("version","must be 1"),((a=t.pitch)==null?void 0:a.width)>0&&((o=t.pitch)==null?void 0:o.length)>0||ee("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&ee("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&ee("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||ee("teams","at least one team");for(const h of e){const d=(l=(c=t.teams[h])==null?void 0:c.kit)==null?void 0:l.primary;(typeof d!="string"||!nd.test(d))&&ee(`teams.${h}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||ee("players","expected an array");const n=new Set,s=new Set;t.players.forEach((h,d)=>{(!h.id||n.has(h.id))&&ee(`players[${d}].id`,"missing or duplicate"),n.add(h.id),e.has(h.team)||ee(`players[${d}].team`,`unknown team ${h.team}`),wi(h.start,`players[${d}].start`),h.role!==void 0&&h.role!=="keeper"&&ee(`players[${d}].role`,`expected "keeper" or absent, got ${String(h.role)}`),h.role==="keeper"&&s.add(h.id)}),wi((u=t.ball)==null?void 0:u.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&ee("ball.static","expected a boolean or absent"),(t.equipment??[]).forEach((h,d)=>{h.type!=="cone"&&h.type!=="goal"&&ee(`equipment[${d}].type`,String(h.type)),wi(h.at,`equipment[${d}].at`)});const r=(h,d)=>{n.has(h)||ee(d,`unknown player ${h}`)};if(Array.isArray(t.events)||ee("events","expected an array"),t.events.forEach((h,d)=>{var p;if((typeof h.t!="number"||h.t<0)&&ee(`events[${d}].t`,"seconds >= 0 required"),rE.has(h.type)||ee(`events[${d}].type`,`unknown type ${h.type}`),h.type==="move"&&(r(h.player,`events[${d}].player`),wi(h.to,`events[${d}].to`),h.gait!==void 0&&!yl.includes(h.gait)&&ee(`events[${d}].gait`,`expected one of ${yl.join("|")}, got ${String(h.gait)}`)),h.type==="dribble"&&(r(h.player,`events[${d}].player`),wi(h.to,`events[${d}].to`),h.gait!==void 0&&!ed.includes(h.gait)&&ee(`events[${d}].gait`,`expected one of ${ed.join("|")}, got ${String(h.gait)}`)),(h.type==="move"||h.type==="dribble")&&h.runPath!==void 0&&typeof h.runPath!="boolean"&&ee(`events[${d}].runPath`,`expected a boolean, got ${String(h.runPath)}`),h.type==="pass"){if(r(h.from,`events[${d}].from`),r(h.to,`events[${d}].to`),h.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(h.flightStyle)&&ee(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(h.flightStyle)}`),h.loft!==void 0&&!(typeof h.loft=="number"&&h.loft>0)&&ee(`events[${d}].loft`,"expected a number > 0 (metres)"),h.style!==void 0&&(va.includes(h.style)||ee(`events[${d}].style`,`expected one of ${va.join("|")}, got ${String(h.style)}`),s.has(h.from)||ee(`events[${d}].style`,`distribution styles are keeper-only; ${h.from} is not a keeper`)),h.toFeet!==void 0&&(typeof h.toFeet!="boolean"&&ee(`events[${d}].toFeet`,`expected a boolean, got ${String(h.toFeet)}`),s.has(h.to)||ee(`events[${d}].toFeet`,`toFeet is keeper-only; ${h.to} is not a keeper`),h.toFeet&&h.flightStyle!==void 0&&h.flightStyle!=="ground")){let m=[...((p=t.players.find(b=>b.id===h.to))==null?void 0:p.start)??[0,0]];for(let b=0;b<d;b++){const g=t.events[b];(g.type==="move"||g.type==="dribble")&&g.player===h.to&&(m=[...g.to])}for(const b of t.equipment??[]){if(b.type!=="goal")continue;const g=Math.hypot(m[0]-b.at[0],m[1]-b.at[1]);g<td&&ee(`events[${d}].toFeet`,`a ${h.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${h.to} meets it ${g.toFixed(1)} m from the goal at [${b.at[0]}, ${b.at[1]}] (needs ${td} m)`)}}h.fromFeet!==void 0&&(typeof h.fromFeet!="boolean"&&ee(`events[${d}].fromFeet`,`expected a boolean, got ${String(h.fromFeet)}`),s.has(h.from)||ee(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${h.from} is not a keeper`),h.fromFeet&&t.events.some((m,b)=>b<d&&m.type!=="move")&&ee(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((h.type==="pass"||h.type==="shoot")&&h.deflect!==void 0){const m=h.deflect;(typeof m!="object"||m===null||Array.isArray(m))&&ee(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),wi(m.to,`events[${d}].deflect.to`),Qu.includes(m.style)||ee(`events[${d}].deflect.style`,`expected one of ${Qu.join("|")}, got ${String(m.style)}`),h.type==="pass"&&!s.has(h.to)&&ee(`events[${d}].deflect`,`deflections are keeper-only; ${h.to} is not a keeper`),h.type==="shoot"&&!(h.flightStyle==="ground"&&m.style==="ground")&&!s.size&&ee(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const b of t.equipment??[]){if(b.type!=="goal"||Math.abs(m.to[0]-b.at[0])>iE)continue;(b.at[1]<=t.pitch.length/2?m.to[1]-b.at[1]:b.at[1]-m.to[1])<=sE&&ee(`events[${d}].deflect.to`,`[${m.to[0]}, ${m.to[1]}] is inside the goal mouth at [${b.at[0]}, ${b.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}h.type==="tackle"&&(r(h.player,`events[${d}].player`),r(h.from,`events[${d}].from`),h.from===h.player&&ee(`events[${d}].from`,"a player cannot tackle himself")),h.type==="collect"&&r(h.player,`events[${d}].player`),h.type==="shoot"&&(r(h.player,`events[${d}].player`),wi(h.at,`events[${d}].at`),h.flight!==void 0&&!(typeof h.flight=="number"&&h.flight>0)&&ee(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),h.corner!==void 0&&h.corner!=="left"&&h.corner!=="right"&&ee(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(h.corner)}`),h.flightStyle!==void 0&&h.flightStyle!=="ground"&&ee(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(h.flightStyle)}`),h.style!==void 0&&(va.includes(h.style)||ee(`events[${d}].style`,`expected one of ${va.join("|")}, got ${String(h.style)}`),s.has(h.player)||ee(`events[${d}].style`,`distribution styles are keeper-only; ${h.player} is not a keeper`),h.flightStyle!=="ground"&&ee(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(h.type==="pass"||h.type==="shoot")&&h.header!==void 0&&typeof h.header!="boolean"&&ee(`events[${d}].header`,`expected a boolean, got ${String(h.header)}`)}),t.overlays!==void 0){const h=t.overlays;(typeof h!="object"||h===null||Array.isArray(h))&&ee("overlays","expected an object"),h.runPaths!==void 0&&!Zu.includes(h.runPaths)&&ee("overlays.runPaths",`expected one of ${Zu.join("|")}, got ${String(h.runPaths)}`),h.zones!==void 0&&(Array.isArray(h.zones)||ee("overlays.zones","expected an array"),h.zones.forEach((d,p)=>{wi(d.at,`overlays.zones[${p}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||ee(`overlays.zones[${p}]`,"w/h metres > 0 required"),d.color!==void 0&&!$u.includes(d.color)&&!nd.test(d.color)&&ee(`overlays.zones[${p}].color`,`expected ${$u.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&ee(`overlays.zones[${p}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&ee("keeper","expected { outcome: save | beaten }"),Ju.includes(t.keeper.outcome)||ee("keeper.outcome",`expected one of ${Ju.join("|")}, got ${String(t.keeper.outcome)}`)),t}const oh=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function tr(i){const t=oh(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const a=(n*n-r*r)/(2*e),o=(n*n-s*s)/(2*e);if(a+o<=t){const l=t-a-o;return{D:t,t1:(n-r)/e,t2:l/n,t3:(n-s)/e,d1:a,d2:l,peak:n}}const c=Math.sqrt(e*t+(r*r+s*s)/2);return{D:t,t1:(c-r)/e,t2:0,t3:(c-s)/e,d1:(c*c-r*r)/(2*e),d2:0,peak:c}}function Ce(i){const t=tr(i);return t.t1+t.t2+t.t3}function En(i,t){const e=tr(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let a,o;if(s<=e.t1){const l=Math.min(i.startSpeed??0,i.cruise);a=l*s+.5*r*s*s,o=l+r*s}else if(s<=e.t1+e.t2)a=e.d1+e.peak*(s-e.t1),o=e.peak;else{const l=s-e.t1-e.t2;a=e.d1+e.d2+e.peak*l-.5*r*l*l,o=e.peak-r*l}const c=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:o}}const oE=.25;function id(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+Ce(n)){e=[0,0];continue}const s=oh(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=En(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function cE(i,t,e=oE){const n=id(i,t),s=id(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const lE=2.5;function hE(i,t){let e=0;for(const n of i)t>=n.t0&&(e=tr(n).peak);return Math.min(1,e/lE)}const uE=.035,dE=.1,sd=.4,fE=1;function pE(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||oh(s.from,s.to)<fE)continue;const r=s.t0+Ce(s)-dE,a=(t-r)/sd;a<=0||a>=1||i.some(o=>o.t0>s.t0&&o.t0<=r+sd)||(e=Math.max(e,uE*.5*(1-Math.cos(2*Math.PI*a))))}return e}function ke(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function mE(i,t=0){return i-t}function mo(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function gE(i,t=58*Math.PI/180,e=.85){const n=mo(i);return Math.min(t,Math.max(-t,n))*e}const _E=1.2,rc=180*Math.PI/180,ac=120*Math.PI/180,rd=70*Math.PI/180;function Gp(i){return i<=0?rc:i<=2.3?rc+(ac-rc)*i/2.3:i>=5.48?rd:ac+(rd-ac)*(i-2.3)/(5.48-2.3)}const bE=.12,ad=15*Math.PI/180;function xE(i){return Math.max(-ad,Math.min(ad,i*bE))}const vE=.001;function Ji(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=vE}function yE(i,t,e,n){return e||n||!Ji(i,t)?null:ke(i,t)}function od(i,t,e,n=Math.PI*2){const s=t-i,r=mo(s),a=r===Math.PI&&s<0?-Math.PI:r,o=n*e;return Math.abs(a)<=o?i+a:i+Math.sign(a)*o}const ME=2.3,ya=1.1,SE=1.15,cd=.6,ld=1.2,Xa=.88,EE=1-Xa,AE=.15,Ma=.28;function os(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?SE:ME),a=i.fromHeight??0,o=i.toHeight??(n==="shot"?cd:0),c=a*(1-e)+o*e;let l;if(n==="clipped"){const u=i.loft??ld;l=(e<Xa?u*Math.sin(Math.PI*e/Xa):AE*u*Math.sin(Math.PI*(e-Xa)/EE))+c}else if(n==="lofted")l=(i.loft??ld)*Math.sin(Math.PI*e)+c;else if(n==="shot")l=c;else if(n==="headed"){const u=i.loft??0;l=e<=Ma?a+(u-a)*Math.sin(Math.PI/2*(e/Ma)):o+(u-o)*Math.cos(Math.PI/2*((e-Ma)/(1-Ma)))}else n==="drop"?l=(i.fromHeight??cd)*(1-e*e):l=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:l,done:e>=1}}const hd=new WeakMap;function TE(i){const t=hd.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,os(i,i.t0+i.duration*n/32).height);return hd.set(i,e),e}function Vp(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=os(i,n),r=os(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}const Rn=2.52,Vi=4,br=.8,Sa=1,Ki=.3,xr=.6,wn=.15,wE=.5,Yn=.45,Wp=.4,Xp=.7,ud=Math.PI/12,Rs=4,RE=.6,dd=.4,CE=.3,PE=.15,IE=.4,LE=.35,Fr=.3,DE=Math.PI/4,UE=.25,NE={left:"gk_dive_a",right:"gk_dive_b"},jp=4,FE=.12,OE=.25,kE=.35;function fd(i){return Math.min(OE,Math.max(FE,i*kE))}const BE=1.3,zE=.15;function pd(i,t,e){const n=i-zE,s=i+t-n,r=Math.min(BE,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const HE=1.8,md=.3,GE=.7,VE=.9,WE=2.5,bn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},Ea={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},XE=.8;function jE(i,t,e){const n=jp*i,s=Math.sqrt(Math.max(0,n*n-e*e));return Math.max(0,s-(Or-tm)*t)}const qE=3;function KE(i,t,e){if(t<=0)return null;const n=Math.min(qE,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const zn=1,Aa=.25,oc=.5,gd=.8,YE=.4,qp=3,$E=.6,ZE=2.3,_d=.9,Cs=.3,bd=.4,JE=12,QE=8,tA=3,eA=.25;function xd(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Ml,r/QE),style:"ground",...t?{fromHeight:t}:{}};const a=Math.max(eA*r,tA)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Ml,r/JE),style:"lofted",loft:Math.max(.1,a-t/2),...t?{fromHeight:t}:{}}}const nA=.6,Ml=.2;function iA(i,t,e){const n=nA*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Ml,e/n)}const vd=16,sA=2.44;function Bs(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Kp(i,t,e){const n=Bs(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,a=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(a*a*(3-2*a))}const cc=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],yd="jog_back_a",vr=.5,rA=.5,Md=.5,aA=.2,Sd=.8,oA=.5,cA=1.6,Ta={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},lA=3,hA=.1,Ed=["walk","jog","run"],Yp=.5,uA=1.5*Yp,dA=.42*Math.SQRT1_2,fA=12,pA=.15;function mA(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=Or*t;e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function Ad(i,t,e){const n=o=>t.reduce((c,l)=>Math.min(c,Math.hypot(o[0]-l[0],o[1]-l[1])),1/0);let s=[...i],r=s,a=n(s);for(let o=0;o<8;o++){let c=null,l=0;for(const p of t){const m=Math.hypot(s[0]-p[0],s[1]-p[1]);e-m>l+1e-9&&(l=e-m,c=p)}if(!c)return s;const u=[s[0]-c[0],s[1]-c[1]],h=Math.hypot(u[0],u[1])>1e-6?je(u):[1,0];s=[c[0]+e*h[0],c[1]+e*h[1]];const d=n(s);d>a+1e-9&&(r=s,a=d)}return r}function Td(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function wd(i,t,e){let n=null;for(const s of i)s.t0<=e&&(!n||s.t0>=n.t0)&&(n=s);return n?{at:[...n.to],moving:e<n.t0+n.duration}:{at:[...t],moving:!1}}function Rd(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?je([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ue+hA?null:[t[0]-Ue*s[0],t[1]-Ue*s[1]],a=e?je([e[0]-t[0],e[1]-t[1]]):s,o=Math.min(Math.max(Ue,Wp),Xp);return{stepTo:r,set:[t[0]+o*a[0],t[1]+o*a[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function gA(i){return i<15?"roll":i<30?"throw":"kick"}function $p(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,a=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(a[0]-i[0],a[1]-i[1]),at:a}}function _A(i,t,e,n,s){const{reach:r,at:a}=$p(i,e,n);if(r>qp*s)return null;const o=je([e[0]-i[0],e[1]-i[1]]);if(r<=$E*s)return{kind:"catch",clip:bn.catch.id,clipDuration:bn.catch.duration,contactOffset:bn.catch.contact,contact:[i[0]+Ue*o[0],i[1]+Ue*o[1]],travelTo:null};const c=nm(i,t,n),l=bn.dive[c],u=je([a[0]-i[0],a[1]-i[1]]),h=Math.min(ZE*s,Math.max(0,r-l.reach*s));return{kind:"dive",clip:l.id,clipDuration:l.duration,contactOffset:l.contact,contact:a,side:c,travelTo:[i[0]+h*u[0],i[1]+h*u[1]]}}function bA(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],a=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,o=[t[0]+a*s[0],t[1]+a*s[1]];let c=[i[0]-o[0],i[1]-o[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const l=je(c);return[o[0]+md*n*l[0],o[1]+md*n*l[1]]}function Zp(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Jp(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let a=1/0;for(const o of t??[])o.t0>=r.t0&&o.t0<a&&(a=o.t0);n<a&&(s=Zp(r,n))}return s}const xA=[{id:"header_a",duration:1.9,contact:1}],vA=1.57,Cd=.1,Pd=.6,lc=2,wa=.02,hc=.6,yA=2.5,MA=.22,SA=3,EA=6.5;function uc(i,t){return Math.min(Math.max(MA*i,SA),EA)*t}const AA=10,TA=1.7;function wA(i,t,e,n){const s=e??[t[0],t[1]],r=je([s[0]-i[0],s[1]-i[1]]),a=[i[0]+Cd*n*r[0],i[1]+Cd*n*r[1]],o=xA[0];return{contact:a,height:vA*n,clip:o,set:[i[0]+Ue*r[0],i[1]+Ue*r[1]],faceAt:s}}const Id=.4,RA=.3,CA=18,PA=10,IA=.45,LA=.8,ja={id:"strike_jog_a",contact:.4},DA=1,UA={strike_jog_a:{loop:!1,category:"shoot",ballContact:ja.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Qp(i){var t;for(const[e,n]of Object.entries(UA))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Ld=.15,NA=.2,Or=3.35,tm=.5;function FA(i,t,e,n,s=1){let r=null,a=1/0;for(const p of e){const m=Math.hypot(p[0]-t[0],p[1]-t[1]);m<a&&(a=m,r=p)}if(!r||a>Or*s+1)return[...t];const o=(Or-tm)*s,c=[[r[0]-o,r[1]],[r[0]+o,r[1]]];if(n){const p=ke(i,r),m=b=>(b[0]-i[0])*Math.cos(p)-(b[1]-i[1])*Math.sin(p);return c.sort((b,g)=>m(g)-m(b)),n==="left"?c[0]:c[1]}const l=Math.hypot(c[0][0]-i[0],c[0][1]-i[1]),u=Math.hypot(c[1][0]-i[0],c[1][1]-i[1]);if(Math.abs(l-u)>1e-6)return l>u?c[0]:c[1];const h=Math.hypot(c[0][0]-t[0],c[0][1]-t[1]),d=Math.hypot(c[1][0]-t[0],c[1][1]-t[1]);return h<d-1e-6?c[0]:c[1]}function OA(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const em=.35;let Ue=em;function Dd(i){Ue=i}function kA(){return Ue/em}function Wi(i,t){return[i[0]+Ue*Math.sin(t),i[1]+Ue*Math.cos(t)]}function dc(i,t,e){const n=ke(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function nm(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function je(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Ud(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function BA(i,t,e){const n=je([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=je([e[0]-i[0],e[1]-i[1]]);const p=n[0]*s[1]-n[1]*s[0];r=Math.abs(p)<1e-6?1:Math.sign(p)}else r=1,s=Ud([-n[0],-n[1]],-r*ud);const a=Ud(n,r*ud),o=[i[0]+Ue*a[0],i[1]+Ue*a[1]],c=[i[0]+Ue*s[0],i[1]+Ue*s[1]],l=[c[0]-o[0],c[1]-o[1]],u=Math.hypot(l[0],l[1]),h=u>1e-6?[l[0]/u,l[1]/u]:s,d=Math.min(Math.max(u,Wp),Xp);return{contact:o,set:[o[0]+d*h[0],o[1]+d*h[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const zA=.5,HA=1.4,Nd={walk:.8,jog:1.2,run:2.2},GA=.25,VA=.7,WA=.3,XA=2,yr=.4,jA=10,qA=8,KA=2.5,Fd=6,YA=2,Od=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],kd=1.4;function Bd(i,t,e){const n=i.t0+Ce(i),s=fc(i,t);let r=0,a=Math.max(n-t,.001);if(fc(i,t+a)-s<=e)return a;for(let o=0;o<48;o++){const c=(r+a)/2;fc(i,t+c)-s>=e?a=c:r=c}return Math.max(a,.001)}function fc(i,t){const e=En(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function $A(i,t,e,n,s,r={}){const a=Ce(i);if(a<=0)return{flights:[],touches:[],restEnd:i.t0};const o=je([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=ke(i.from,i.to),l=[Math.cos(c),-Math.sin(c)],u=R=>(R[0]-i.from[0])*o[0]+(R[1]-i.from[1])*o[1],h=i.t0+a,d=u(e),p=kA(),m=(r.others??[]).filter(R=>Math.abs((R[0]-i.from[0])*Math.cos(c)-(R[1]-i.from[1])*Math.sin(c))<=YA).map(R=>u(R)),b=VA*p,g=GA*p,f=R=>u(En(i,R).pos),x=[],E=[];let v=i.t0,T=[...t];const w=Math.ceil(tr(i).D/(.5*Math.min(n,yr*3)))+8;for(let R=0;;R++){E.push(v);const L=u(T),S=d-L,M=r.turnOut?yr:n,I=yr*(1+kd),z=R===0&&!!r.turnIn||!!r.turnOut&&S<=I,H=z?Ue:b;if(S<=kd*M||R===w-1||d-(f(v)+H)<.05){const k=Math.hypot(e[0]-T[0],e[1]-T[1]);let Ie=v;if(k>1e-6){const Qt=Math.max(En(i,v).speed,zA*i.cruise),oe=Math.min(2*k/(Qt+ya*(k/Qt)/2),Math.max(h-v,.2));x.push({from:T,to:[...e],t0:v,duration:oe,style:"push",endFrac:0}),Ie=v+oe}return Ie<h&&x.push({from:[...e],to:[...e],t0:Ie,duration:h-Ie,style:"ground"}),{flights:x,touches:E,restEnd:Math.max(Ie,h)}}let W=z?yr:n;if(!z&&S>jA){let k=S;for(const Ie of m)Ie>L&&(k=Math.min(k,Ie-L));W*=Math.min(Math.max(k/qA,1),KA)}const et=W;W*=1+Od[R%Od.length],!z&&r.turnOut&&S-W<I&&(W=Math.max(S-I,yr));const B=Math.min(W,HA*i.cruise*i.cruise/ya),X=Bd(i,v,B),D=Math.max(i.cruise*X-B,0),nt=Math.min(H,L-f(v)+D),Y=f(v)+nt,J=Math.max(L,Y),mt=et>XA?s:s*(R%2?-1:1),kt=Math.min(g,WA*B),Q=(T[0]-i.from[0])*l[0]+(T[1]-i.from[1])*l[1],at=Math.abs(mt*kt-Q),ct=Math.sqrt(Math.max(Fd*Fd-at*at,0)),Z=Math.min(J+B,L+ct,d),vt=Bd(i,v,Z-Y),Ut=(Z-L)/vt,Lt=Ut+ya*vt/2,yt=Ut-ya*vt/2,Gt=[i.from[0]+o[0]*Z+l[0]*mt*kt,i.from[1]+o[1]*Z+l[1]*mt*kt],Re={from:T,to:Gt,t0:v,duration:vt,style:"push",endFrac:Math.max(yt,0)/Lt};x.push(Re),T=[...Gt],v+=vt}}function pi(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function $n(i,t,e){const n=pi(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const im=.3;function sm(i){const t=yl.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??Rn})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?im:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function ch(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function ZA(i,t){const e=tr(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=i.startSpeed??0,a=new Set([0,n]);for(const l of t)l.min>e.peak||(l.min>r&&a.add((l.min-r)/i.accel),l.min>s&&a.add(n-(l.min-s)/i.accel));const o=[...a].sort((l,u)=>l-u),c=[];for(let l=0;l+1<o.length;l++){if(o[l+1]-o[l]<1e-9)continue;const u=ch(t,En(i,i.t0+(o[l]+o[l+1])/2).speed);if(!u)continue;const h=c[c.length-1];h&&h.gait===u.gait&&Math.abs(h.t1-(i.t0+o[l]))<1e-9?h.t1=i.t0+o[l+1]:c.push({gait:u.gait,t0:i.t0+o[l],t1:i.t0+o[l+1]})}return QA(c)}const JA=.3;function QA(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=JA;for(let o=0;o<t.length;o++){const c=t[o].t1-t[o].t0;c<s-1e-9&&(s=c,n=o)}if(n<0)break;const r=t[n-1],a=t[n+1];a&&(!r||a.t1-a.t0>r.t1-r.t0)?a.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let o=0;o+1<t.length;)t[o].gait===t[o+1].gait?(t[o].t1=t[o+1].t1,t.splice(o+1,1)):o++}return t}const lh=.85,Pi=1.15,zd=.5;function rm(i){return zd+(lh-zd)*Math.min(1,Math.max(0,i))}function tT(i,t){const e=i/t;return e>Pi?Pi:Math.max(rm(e),e)}function eT(i,t){return Math.min(Pi,Math.max(lh,i/t))}function nT(i,t,e){const n=i.findIndex(l=>l.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=lh&&r<=Pi)return{timeScale:r,partner:null,weight:0};const a=i[r>Pi?n+1:n-1];if(!a)return{timeScale:r>Pi?Pi:Math.max(rm(r),r),partner:null,weight:0};const o=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),c=(1-o)*s.clipSpeed+o*a.clipSpeed;return{timeScale:eT(t,c),partner:a.gait,weight:o}}const iT=new Set(["pass","shoot","receive","header","defensive"]),to=new Set(["turn","transition"]),mi=.15,am=.1,om=.3,sT=.45,rT=.2,aT=.12,oT=.6;function hh(i,t){var e;return iT.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function cm(i,t,e){var r,a;if(hh(i,t))return am;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(a=i.clips[e])==null?void 0:a.category:void 0;return to.has(n??"")?mi:n==="idle"?s==="idle"?oT:s==="locomotion"?aT:eo:n==="locomotion"&&s==="locomotion"?rT:to.has(s??"")?mi:eo}function lm(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?sT:to.has(e??"")?mi:hh(i,t)?om:eo}function cT(i,t,e){var n;return hh(i,t)||to.has(((n=i.clips[t])==null?void 0:n.category)??"")?lm(i,t):cm(i,e,t)}const cn=Math.PI/180,li={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*cn,t50:.567,t90:.8,peak:159*cn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*cn,t50:.533,t90:.8,peak:213*cn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*cn,t50:.4,t90:.6,peak:366*cn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*cn,t50:.767,t90:1.033,peak:192*cn,standing:!1}};function pc(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[a,o]=e[n+1];if(t<=a)return a-s>1e-9?r+(o-r)*(t-s)/(a-s):o}return 1}function hm(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+mi&&(n=s);return n}function lT(i,t,e,n){const s=hm(i,t,e);if(!s)return null;const r=li[s.clip],a=s.end-s.t0,o=s.offset+Math.min(e-s.t0,a),c=pc(r,s.offset),l=pc(r,s.offset+a),u=pc(r,o),h=l-c>1e-9?(u-c)/(l-c):1,d=n??s.from,p=n===void 0?s.to-s.from:Yi(n,s.to),m=Math.min(1,(e-s.t0)/mi),b=e<=s.end?1:Math.max(0,1-(e-s.end)/mi),g=Math.max(0,Math.min(m,b));return{heading:d+p*h,clipYaw:r.yaw*u*g}}function hT(i,t){return i.peak+Gp(t)}function uT(i,t,e){const n=Math.abs(i);return n<Sl?null:n>MT&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Sl=45*cn,Hd=60*cn,dT=.3,fT=.5,pT=.7,mT=130*cn,Ra=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Gd={left:"strafe_l_a",right:"strafe_r_a"},gT=3.2,_T=3.2,um=60*cn,bT=120*cn,Vd=[{id:"jog_back_diag_a",axis:225.5*cn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*cn,speed:2.27}],xT=3;function vT(i,t){if(Math.abs(i)>um)return null;const e=i>=0?Vd[0]:Vd[1];return t<=e.speed*Pi?{id:e.id,axis:e.axis}:null}function yT(i,t){const e=Math.abs(i);return e<=um?t>gT?null:t>(Ra[0].speed+Ra[1].speed)/2?Ra[1].id:Ra[0].id:e>bT||t>_T?null:i>0?Gd.right:Gd.left}const MT=120*cn;function Yi(i,t){return mo(t-i)}const eo=.25;function Us(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?NA:0,s=t.contact??e.ballContact??0,r=t.offset??0,a=t.timeScale??1,o=lm(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/a-(e.loop?0:o)+n,(s-r)/a)}function ST(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function dm(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Us(t,r)&&(s=r);return s}const ET=.15;function AT(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const TT=.06,Wd=2,wT=6,RT=.4;function no(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Xd(i,t){return no(pi(i),20973)*t}function jd(i){return 1+TT*(2*no(pi(i),10196)-1)}function CT(i,t){return(Wd+no(pi(i),7047)*(wT-Wd))*(1+RT*(2*no(pi(i)+t*2654435761,28490)-1))}function PT(i,t){let e=0;for(let n=0;n<64;n++)if(e+=CT(i,n),t<e)return n;return 64}function IT(i,t,e){const n=i.length;if(n<=1)return i[0];const s=pi(t);let r=s%n;for(let a=1;a<=e;a++){const o=s+a*2654435761>>>0;r=(r+1+o%(n-1))%n}return i[r]}function LT(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const DT=new Set(["receive_a","pass_a","pass_b"]),fm=.8,UT=.7;function pm(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function uh(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+Ce(n)?0:En(n,t).speed);return e}function NT(i,t,e){for(const n of i)DT.has(n.clip)&&uh(t[n.player],pm(e,n))>=fm&&(n.additive=!0)}const FT=1,OT=2,kT=.025,qd=.2,BT=.4,Kd="idle_transition";function zT(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,a=s.t1-s.t0,o=Math.min(1,r/qd,(a-r)/qd);o<=0||(n=Math.max(n,kT*o*.5*(1-Math.cos(2*Math.PI*OT*r))))}return n}const HT="idle_b",GT=.5,VT=.3,WT=.15;function XT(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,GT*Math.min(1,(e-s.t0)/VT)*Math.min(1,(s.t1-e)/WT)));return n}function jT(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const a=pm(e,r)-FT,o=r.t0;if(o-a<BT||a<0)continue;let c=!1;for(let l=a;l<=o;l+=.1){if(uh(t[r.player],l)>im){c=!0;break}const u=dm(i,e,r.player,l);if(u&&u!==r){c=!0;break}}c||(n.push({player:r.player,t0:a,t1:o}),e.clips[Kd]&&s.push({player:r.player,clip:Kd,t0:a,loopUntil:o}))}return i.push(...s),i.sort((r,a)=>r.t0-a.t0),n}const qT=.6,mm=.5,gm=.6,Cr=2*mm/gm,io=Cr/gm,KT=mm-Fr;function YT(i){return(Cr-Math.sqrt(Math.max(0,Cr*Cr-2*io*i)))/io}function $T(){return Cr-io*YT(KT)}const ZT=.15,JT=.05;function QT(i,t,e){const n=ke(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(UE,s/2):Fr,a=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+DE;return[i[0]+r*Math.sin(a),i[1]+r*Math.cos(a)]}function t1(i,t,e,n,s,r){const a=Math.min(Fr,e*(n-Ki)/2);for(let o=a;o>=ZT-1e-9;o-=JT){const c=[i[0]+o*Math.sin(t),i[1]+o*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*o),startSpeed:e}}return null}function e1(i,t,e=1){var ot,Xt,Pt,Nt,ce,bt,Ft,Kt,ie,Ot,de,se,Te,j;LT(t),Qp(t);const n=sm(t),s={};i.players.forEach(C=>s[C.id]=[...C.start]);const r={},a=[],o=[],c=[],l=[],u=[],h=[],d=[],p=[],m={},b={},g=new Set,f={},x={},E={},v={};function T(C){c.push(C),f[C.player]=C.t0,Ji(s[C.player],C.at)&&(w[C.player]=ke(s[C.player],C.at))}const w={},R={},L={};function S(C){const _=m[C];let G=Math.max(_?_.t0+Ce(_):0,R[C]??0,0);for(const q of o)q.player===C&&t.clips[q.clip]&&(G=Math.max(G,Us(t,q)));return G}function M(C,_,G,q){if(Gt.has(C)||!Ji(s[C],G))return null;const N=w[C]??0,ut=Yi(N,ke(s[C],G));if(Math.abs(ut)<Hd)return null;const tt=li[ut>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[tt.id])return null;const rt=I(tt),it=S(C),Bt=Math.max(it,Math.min(_,q-rt));return Bt+rt>q+1e-9?null:(z(C,tt,Bt,0,N,N+ut),Bt)}function I(C,_=0){return C.duration-_-mi}function z(C,_,G,q,N,ut,tt){const rt=tt??I(_,q),it={player:C,clip:_.id,t0:G,offset:q,end:G+rt,from:N,to:ut},Bt={player:C,clip:_.id,t0:G,...q?{offset:q}:{},...tt!==void 0?{loopUntil:G+rt}:{}};d.push(it),o.push(Bt),L[C]={span:it,cue:Bt},R[C]=it.end+mi}function H(C,_){const G=L[C];return!G||G.span.end<=_+1e-9?!0:_-G.span.t0<dT?!1:(G.span.end=_,G.cue.loopUntil=_,R[C]=_+mi,!0)}function W(C,_){if(H(C,_))return;const G=L[C];d.splice(d.indexOf(G.span),1);const q=o.indexOf(G.cue);q>=0&&o.splice(q,1),delete L[C],R[C]=0}function et(C,_=1/0){const G=M(C.player,C.t0,C.at,_);T(G===null?C:{...C,t0:G})}const B=[];function X(C){var _;for(let G=0;G<B.length;G++){const q=B[G];q.afterT>=C||(B.splice(G--,1),(r[_=q.player]??(r[_]=[])).push(q.move),m[q.player]=q.move,b[q.player]=nt(q.move,q.player),T({player:q.player,at:q.faceBall,t0:q.move.t0}),T({player:q.player,at:q.faceSettle,t0:q.arrival}),s[q.player]=[...q.move.to])}}function D(C,_,G){let q=[...s[C]],N=[...s[C]];const ut=m[C];let tt=Math.max(ut?ut.t0+Ce(ut):0,x[C]??0),rt=-1/0,it=null;for(let Bt=_+1;Bt<Mt.length;Bt++){const Ct=Mt[Bt];if(Ct.t>=G)break;if((Ct.type==="pass"?Ct.from:Ct.player)!==C)continue;if(Ct.type!=="move"){it=`${Ct.type} at t=${Ct.t}`;break}const xt=t.groups[Ct.gait??"jog"]??t.groups.jog,wt=t.clips[$n(xt,C,Ct.t)].speed??Rn,jt={from:q,to:[...Ct.to],t0:Ct.t,cruise:wt,accel:Vi},St=Ct.t+Ce(jt);tt=Math.max(tt,St),q=[...Ct.to],N=St>G?En(jt,G).pos:[...Ct.to],rt=Ct.t}return{expected:q,atArrival:N,busyUntil:tt,afterT:rt,blocked:it}}function nt(C,_){const G=ZA(C,n).map(N=>({player:_,clip:$n(t.groups[N.gait],_,C.t0),t0:N.t0,loopUntil:N.t1})),q=L[_];if(q){let N=1/0;for(const ut of G)ut.t0>q.span.t0+1e-9&&ut.t0<q.span.end-1e-9&&(N=Math.min(N,ut.t0));N<1/0&&W(_,N)}return o.push(...G),G}function Y(C,_,G="event"){(Ie[C]??0)>_&&console.warn(`[engine3d] ${C} is on the ground until t=${Ie[C].toFixed(2)}s but has a ${G} at t=${_} — schedule it later`);const q=m[C];if(!q)return;const N=q.t0+Ce(q);if(_<N){const ut=`buildSchedule: player ${C} has an event at t=${_} while still moving from a move started at t=${q.t0} (in flight until t=${N.toFixed(3)})`;if(Qt.has(C))console.warn(`[engine3d] ${ut} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(ut)}}function J(C){let _=null,G=-1/0;for(const q of p)q.t<=C&&q.t>=G&&(_=q.player,G=q.t);return _}const mt=Object.fromEntries(i.players.map(C=>[C.id,C.team]));function kt(C,_,G,q,N){const ut=J(q);if(!ut||ut===C||Gt.has(C)||mt[C]==="coach"||mt[ut]===mt[C])return null;const tt=s[ut]?[...s[ut]]:wd(a,i.ball.start,q).at;if(!Ji(_,tt)||!Ji(_,G))return null;const rt=ke(_,G),it=Yi(ke(tt,_),rt),Bt=Math.hypot(tt[0]-_[0],tt[1]-_[1])<=xT?vT(it,N):null;if(Bt&&t.clips[Bt.id]){const It=rt-Bt.axis,xt=Math.hypot(tt[0]-_[0],tt[1]-_[1])||1;return{clip:Bt.id,ball:[_[0]+xt*Math.sin(It),_[1]+xt*Math.cos(It)]}}const Ct=yT(it,N);return Ct&&t.clips[Ct]?{clip:Ct,ball:tt}:null}const Q={};for(const C of i.events)C.type==="move"&&(Q[ot=C.player]??(Q[ot]=[])).push(C.t);function at(C,_,G){for(const q of Lt){const N=q.id;if(!ge.length||J(C)===N||!t.clips[Ea.left.id]||!t.clips[Ea.right.id])continue;const ut=m[N],tt=Math.max(C,k[N]??0,ut?ut.t0+Ce(ut):0);if(h.some(re=>re.player===N))continue;const rt=ge.reduce((re,Jt)=>Math.hypot(Jt[0]-q.start[0],Jt[1]-q.start[1])<Math.hypot(re[0]-q.start[0],re[1]-q.start[1])?Jt:re,ge[0]),it=jE(yt,e,Math.abs(s[N][1]-rt[1])),Ct=rt[0]+Math.min(it,Math.max(-it,(G[0]-rt[0])*XE))-s[N][0],It=ke(rt,[i.pitch.width/2,i.pitch.length/2]),xt=KE(Ct,Ea[Ct*Math.cos(It)>0?"left":"right"].dist*yt,Math.sign(Math.cos(It))||1);if(!xt)continue;const wt=Ea[xt.side],jt=Math.min(_,i.duration)-xt.steps*wt.duration;if(jt<tt-1e-9||(Q[N]??[]).some(re=>re>=jt-1e-9))continue;const St=Math.sign(Ct)*wt.dist*yt;for(let re=0;re<xt.steps;re++){const Jt=[...s[N]],Et=Td(Jt,[Jt[0]+St,Jt[1]],jt+re*wt.duration,wt.duration);(r[N]??(r[N]=[])).push(Et),s[N]=[...Et.to],m[N]=Et}o.push({player:N,clip:wt.id,t0:jt,loopUntil:jt+xt.steps*wt.duration}),b[N]=[]}}function ct(C,_){var ut;const G=(ut=i.players.find(tt=>tt.id===C))==null?void 0:ut.start;if(!G||!ge.length)return!1;let q=ge[0],N=1/0;for(const tt of ge){const rt=Math.hypot(tt[0]-G[0],tt[1]-G[1]);rt<N&&(N=rt,q=tt)}return Math.hypot(_[0]-q[0],_[1]-q[1])<=fA*yt}function Z(C,_){const G=m[C];if(!G||G.endSpeed)return;const q=G.t0+Ce(G);if(_-q>=Sa)return;G.endSpeed=br;const N=G.t0+Ce(G);for(const ut of b[C]??[]){const tt=o.indexOf(ut);tt>=0&&o.splice(tt,1)}if(b[C]=nt(G,C),N>_-Ki){if(Qt.has(C)){console.warn(`[engine3d] player ${C}'s move started at t=${G.t0} still arrives at t=${N.toFixed(3)}, less than ${Ki}s before their action at t=${_} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${C}'s move started at t=${G.t0} still arrives at t=${N.toFixed(3)} even flowing into their action at ${br} m/s, less than ${Ki}s before their action at t=${_} — move the event later or start the approach move earlier`)}}function vt(C,_,G,q,N){const ut=m[C],tt=ut?ut.t0+Ce(ut):0;if(ut&&(ut.endSpeed!==void 0||_-tt<Sa))return null;const rt=QT(s[C],G,N),it=t.groups.walk,Bt=it!=null&&it.length?t.clips[it[0]].speed??Rn:Rn,Ct={from:[...s[C]],to:rt,t0:0,cruise:Bt,accel:Vi};let It=_-q-Ce(Ct);return It<Math.max(tt,x[C]??0)||!H(C,It)?null:(Ct.t0=It,(r[C]??(r[C]=[])).push(Ct),N&&g.add(Ct),m[C]=Ct,b[C]=nt(Ct,C),s[C]=[...rt],It)}function Ut(C,_,G){const q=wd(a,i.ball.start,_);{const It=Ad(q.at,Wt,uA*yt);if(Math.hypot(It[0]-q.at[0],It[1]-q.at[1])>1e-6){const xt=a.filter(wt=>wt.t0<=_&&Math.hypot(wt.to[0]-q.at[0],wt.to[1]-q.at[1])<1e-9);if(xt.length){for(const wt of xt)Math.hypot(wt.from[0]-q.at[0],wt.from[1]-q.at[1])<1e-9&&(wt.from=[...It]),wt.to=[...It];q.at=It}}}const N=J(_);N&&N!==C&&p.push({t:_,player:null}),q.moving&&console.warn(`[engine3d] collect for ${C} at t=${_.toFixed(2)}s: the ball is still moving — he sets off for where it will stop; schedule it later`);let ut=null;for(let It=G+1;It<Mt.length;It++){const xt=lt[It];if(!(!xt||xt.actor!==C)){xt.t-_<=Rs+3&&(ut=xt.target);break}}let tt=Rd(s[C],q.at,ut);if(tt.stepTo){const It=Ad(tt.stepTo,Wt,dA*yt),xt=[It[0]-q.at[0],It[1]-q.at[1]];if(Math.hypot(xt[0],xt[1])>1e-6){const wt=je(xt),jt=Ue+1,St=Rd([q.at[0]+jt*wt[0],q.at[1]+jt*wt[1]],q.at,ut);St.stepTo&&P(St.stepTo)&&(tt=St)}}let rt=1/0;for(let It=G+1;It<Mt.length;It++){const xt=Mt[It];if((xt.type==="pass"?xt.from:xt.player)===C){rt=xt.t;break}}let it=_;if(tt.stepTo){const It=Math.hypot(tt.stepTo[0]-s[C][0],tt.stepTo[1]-s[C][1]);let xt;for(let wt=It<lA?0:1;wt<Ed.length;wt++){const jt=t.groups[Ed[wt]]??t.groups.jog,St=t.clips[$n(jt,C,_)].speed??Rn;if(xt={from:[...s[C]],to:tt.stepTo,t0:_,cruise:St,accel:Vi,endSpeed:br},_+Ce(xt)+Yn+Ki<=rt)break}(r[C]??(r[C]=[])).push(xt),Qt.set(C,_),m[C]=xt,b[C]=nt(xt,C),it=_+Ce(xt),s[C]=[...tt.stepTo]}T({player:C,at:[...q.at],t0:Math.max(_,f[C]??0),lock:[it-wn,it+wn]});const Bt=It=>{for(const xt of b[C]??[]){const wt=o.indexOf(xt);xt.t0>=It?wt>=0&&o.splice(wt,1):(xt.loopUntil??0)>It&&(xt.loopUntil=It)}};if(Gt.has(C)&&ct(C,q.at)){const It=bn.scoop[0],xt=it-It.contact;return xt<_&&console.warn(`[engine3d] keeper ${C}'s scoop at t=${it.toFixed(2)}s wants to start at t=${xt.toFixed(2)}s, before his collect at t=${_.toFixed(2)}s — schedule the collect earlier`),Bt(Math.max(xt,0)),o.push({player:C,clip:It.id,t0:Math.max(xt,0),contact:It.contact}),T({player:C,at:[...tt.faceAt],t0:it}),p.push({t:it,player:C}),u.push({player:C,at:it,carry:[...q.at],hand:{height:zn*yt,from:pA*yt,rise:gd,follow:!0}}),x[C]=it,k[C]=Math.max(xt,0)+It.duration+Cs,it}const Ct=$n(t.groups.pass,C,it);return Bt(it-(t.clips[Ct].ballContact??0)),o.push({player:C,clip:Ct,t0:it-(t.clips[Ct].ballContact??0)}),a.push({from:[...q.at],to:tt.set,t0:it,duration:Yn,style:"ground"}),T({player:C,at:[...tt.faceAt],t0:it}),p.push({t:it,player:C}),u.push({player:C,at:it+Yn,carry:tt.set}),x[C]=it+Yn,it+Yn}const Lt=i.players.filter(C=>C.role==="keeper"),yt=e,Gt=new Set(Lt.map(C=>C.id));i.players.forEach(C=>w[C.id]=C.role==="keeper"?ke(C.start,i.ball.start):0);const Re=((Xt=i.keeper)==null?void 0:Xt.outcome)==="save",k={},Ie={},Qt=new Map,oe={},Mt=[...i.events].sort((C,_)=>C.t-_.t);if(!i.ball.static){const C=i.ball.start,_=i.players.reduce((N,ut)=>Math.hypot(ut.start[0]-C[0],ut.start[1]-C[1])<Math.hypot(N.start[0]-C[0],N.start[1]-C[1])?ut:N,i.players[0]),G=Mt.find(N=>N.type!=="move"||N.player===(_==null?void 0:_.id)&&Gt.has(N.player)),q=G?G.type==="pass"?G.from:G.player:null;if((G==null?void 0:G.type)!=="collect")if(q&&Gt.has(q))p.push({t:0,player:q}),x[q]=0,(G==null?void 0:G.type)==="pass"&&!!G.fromFeet||u.push({player:q,at:0,carry:[...i.ball.start],hand:{height:zn*yt,follow:!0}});else{const N=i.players.filter(rt=>rt.role!=="keeper"),ut=N.length?N:i.players,tt=ut.reduce((rt,it)=>Math.hypot(it.start[0]-i.ball.start[0],it.start[1]-i.ball.start[1])<Math.hypot(s[rt.id][0]-i.ball.start[0],s[rt.id][1]-i.ball.start[1])?it:rt,ut[0]).id;p.push({t:0,player:tt}),x[tt]=0}}const ge=(i.equipment??[]).filter(C=>C.type==="goal").map(C=>C.at),Wt=mA(i.equipment,e),P=C=>C[0]>=0&&C[0]<=i.pitch.width&&C[1]>=0&&C[1]<=i.pitch.length,A=C=>Wt.every(_=>Math.hypot(_[0]-C[0],_[1]-C[1])>=Yp*yt),$={};i.players.forEach(C=>$[C.id]=[...C.start]);const lt=Mt.map(C=>{if(C.type==="move")return $[C.player]=[...C.to],null;if(C.type==="dribble")return $[C.player]=[...C.to],{actor:C.player,target:[...C.to],t:C.t};if(C.type==="collect"||C.type==="tackle")return null;const _=C.type==="pass"?C.from:C.player,G=C.type==="pass"?[...$[C.to]]:C.flightStyle==="ground"?[...C.at]:FA($[C.player],C.at,ge,C.corner,e);return{actor:_,target:G,t:C.t}});for(let C=0;C<Mt.length;C++){const _=Mt[C];X(_.t);const G=_.type==="pass"?_.from:_.player;if(_.type!=="dribble"&&_.type!=="move"&&delete v[G],_.type==="move"){Y(_.player,_.t,_.type);const N=Gt.has(_.player)&&(((Nt=(Pt=Bs(u,_.player,_.t))==null?void 0:Pt.hand)==null?void 0:Nt.height)??0)>0;J(_.t)===_.player&&!N&&console.warn(`[engine3d] move event for ${_.player} at t=${_.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const ut=t.groups[_.gait??"jog"]??t.groups.jog,tt=t.clips[$n(ut,_.player,_.t)].speed??Rn,rt=E[_.player],Bt={from:rt&&_.t<rt.t0?[...rt.at]:[...s[_.player]],to:_.to,t0:_.t,cruise:tt,accel:Vi},Ct=kt(_.player,Bt.from,_.to,_.t,tt),It=Ct?null:(()=>{const xt=ch(n,tt);if((xt==null?void 0:xt.gait)!=="run"&&(xt==null?void 0:xt.gait)!=="sprint"||!t.clips[li.turn_to_run_a.id]||Gt.has(_.player)||S(_.player)>_.t+1e-9||!Ji(Bt.from,_.to))return null;const wt=Yi(w[_.player]??0,ke(Bt.from,_.to));return Math.abs(wt)>=Hd?{delta:wt,gait:xt.gait}:null})();if((r[ce=_.player]??(r[ce]=[])).push(Bt),m[_.player]=Bt,b[_.player]=nt(Bt,_.player),Ct){for(const wt of b[_.player]??[]){const jt=o.indexOf(wt);jt>=0&&o.splice(jt,1)}const xt={player:_.player,clip:Ct.clip,t0:_.t,loopUntil:_.t+Ce(Bt)};o.push(xt),b[_.player]=[xt],T({player:_.player,at:Ct.ball,t0:_.t,until:_.t+Ce(Bt)})}else{if(It){const xt=Math.abs(It.delta)>mT,wt=It.gait==="run"?li.turn_180_a:null,jt=xt&&wt&&t.clips[wt.id]?wt:li.turn_to_run_a,St=jt.id===li.turn_to_run_a.id?fT:0,re=jt.id===li.turn_to_run_a.id?pT:I(jt,St),Jt=w[_.player]??0;z(_.player,jt,_.t,St,Jt,Jt+It.delta,re);const Et=_.t+re;b[_.player]=(b[_.player]??[]).filter(Dt=>{if(Dt.t0>=Et-1e-9)return!0;if((Dt.loopUntil??1/0)<=Et+1e-9){const Vt=o.indexOf(Dt);return Vt>=0&&o.splice(Vt,1),!1}return Dt.t0=Et,!0})}T({player:_.player,at:_.to,t0:_.t})}s[_.player]=[..._.to]}else if(_.type==="dribble"){Y(_.player,_.t,_.type),J(_.t)!==_.player&&console.warn(`[engine3d] dribble event for ${_.player} at t=${_.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const N=_.gait??"jog",ut=t.groups[N]??t.groups.jog,tt=t.clips[$n(ut,_.player,_.t)].speed??Rn,rt=ke(s[_.player],_.to),it=(((Ft=(bt=Bs(u,_.player,_.t))==null?void 0:bt.hand)==null?void 0:Ft.height)??0)>0,Bt=it?Kp(u,_.player,_.t):0,Ct=it?_.t+bd:_.t,It={from:[...s[_.player]],to:[..._.to],t0:Ct,cruise:tt,accel:Vi};let xt=null;for(let At=C+1;At<Mt.length;At++){const y=lt[At];if(!(!y||y.actor!==_.player)){xt={target:y.target,t:y.t};break}}const wt=Ct+Ce(It);let jt=null;for(let At=C+1;At<Mt.length;At++){const y=Mt[At];if((y.type==="pass"?y.from:y.player)===_.player){jt=y;break}}let St=null;if((jt==null?void 0:jt.type)==="dribble"&&jt.t-wt<=Rs){const At=Yi(rt,ke(_.to,jt.to)),y=uT(At,N),F=y?li[y]:null;if(F&&t.clips[F.id]){const V=F.standing?wt:Ct+Ce({...It,endSpeed:br});jt.t-V>=I(F)-1e-9&&(St={c:F,delta:At})}}xt&&xt.t-wt<Sa&&!(St!=null&&St.c.standing)&&(It.endSpeed=br),St&&z(_.player,St.c,jt.t-I(St.c),0,rt,rt+St.delta),(r[Kt=_.player]??(r[Kt]=[])).push(It),m[_.player]=It,b[_.player]=nt(It,_.player),T({player:_.player,at:[..._.to],t0:_.t});let re=null;for(const At of u)At.player===_.player&&(!re||At.at>re.at)&&(re=At);re&&re.at>_.t+1e-9&&console.warn(`[engine3d] dribble for ${_.player} at t=${_.t.toFixed(2)}s starts during their settle (ends t=${re.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let Jt=re?[...re.carry]:Wi(s[_.player],rt);it&&(Jt=Wi(s[_.player],rt),u.push({player:_.player,at:_.t,carry:[...Jt],hand:{height:0,from:Bt,rise:bd,follow:!0}}),x[_.player]=_.t);const Et=xt&&xt.t-wt<=Rs?Wi(_.to,ke(_.to,xt.target)):Wi(_.to,rt),Dt=pi(_.player)%2===0?1:-1;let Vt=Dt,te=!1;for(let At=C+1;At<Mt.length;At++){const y=Mt[At];if((y.type==="pass"?y.from:y.player)===_.player){if(y.type==="dribble"&&y.t-wt<=Rs){const V=je([_.to[0]-It.from[0],_.to[1]-It.from[1]]),K=je([y.to[0]-_.to[0],y.to[1]-_.to[1]]),O=V[0]*K[1]-V[1]*K[0],st=O<0?1:-1;Math.abs(O)>.05&&st===-Dt&&(Vt=st),te=Math.abs(Yi(ke(It.from,_.to),ke(_.to,y.to)))>Sl}break}}const Yt=v[_.player],Ee=!!Yt&&Ct-Yt.end<=Rs&&Math.abs(Yi(Yt.h,rt))>Sl;v[_.player]={h:rt,end:wt};const ht=Object.entries(s).filter(([At])=>At!==_.player).map(([,At])=>[...At]),zt=$A(It,Jt,Et,Nd[N]??Nd.jog,Vt,{turnIn:Ee,turnOut:te,others:ht});a.push(...zt.flights),u.push({player:_.player,at:zt.restEnd,carry:[...Et]}),x[_.player]=zt.restEnd,s[_.player]=[..._.to],at(zt.restEnd,((ie=Mt[C+1])==null?void 0:ie.t)??i.duration,[...Et])}else if(_.type==="collect")Y(_.player,_.t,_.type),Ut(_.player,_.t,C);else if(_.type==="tackle"){Y(_.player,_.t,_.type),Z(_.player,_.t);const N=_.from;J(_.t)!==N&&console.warn(`[engine3d] tackle by ${_.player} at t=${_.t.toFixed(2)}s from ${N}, but ${J(_.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const ut=Gt.has(_.player)&&!!t.clips[Ta.id],tt=_.t+(ut?Ta:cc[0]).contact;let rt=null,it=-1/0;for(const jt of u)jt.player===N&&jt.at<=tt&&jt.at>it&&(it=jt.at,rt=[...jt.carry]);rt||(rt=Wi(s[N],ke(s[N],s[_.player])));const Bt=Math.hypot(rt[0]-s[_.player][0],rt[1]-s[_.player][1]),Ct=ut?Ta.reach:cA;Bt>Ct*yt&&console.warn(`[engine3d] tackle by ${_.player} at t=${_.t.toFixed(2)}s: the ball is ${Bt.toFixed(2)} m away (reach ${(Ct*yt).toFixed(2)}) — move the tackler closer first`);const It=ut?Ta:cc[Math.abs(pi(_.player)+Math.floor(_.t*10))%cc.length],xt=_.t+It.contact,wt={player:_.player,clip:It.id,t0:_.t,contact:It.contact};if(o.push(wt),T({player:_.player,at:rt,t0:Math.max(_.t-xr,0,f[_.player]??0),lock:[_.t,_.t+It.duration]}),ut){const jt=Us(t,wt),St=Wi(s[_.player],ke(s[_.player],rt));p.push({t:xt,player:_.player});const re=dc(s[_.player],s[N],rt);u.push({player:_.player,at:xt,carry:[...rt],hand:{height:Aa*yt,follow:!0,bone:re}}),u.push({player:_.player,at:jt,carry:St,hand:{height:zn*yt,from:Aa*yt,rise:oc,follow:!0,bone:re}}),x[_.player]=xt,k[_.player]=_.t+It.duration+Cs}if(!ut){const jt=je([s[N][0]-s[_.player][0],s[N][1]-s[_.player][1]]),St=[-jt[1],jt[0]],re=(rt[0]-s[N][0])*St[0]+(rt[1]-s[N][1])*St[1]>=0?1:-1,Jt=[s[N][0]+re*Md*yt*St[0]+Sd*yt*jt[0],s[N][1]+re*Md*yt*St[1]+Sd*yt*jt[1]];a.push({from:rt,to:Jt,t0:xt,duration:oA,style:"ground",pop:!0}),p.push({t:xt,player:null})}if(t.clips[yd]){let jt=1/0;for(let Dt=C+1;Dt<Mt.length;Dt++){const Vt=Mt[Dt];if((Vt.type==="pass"?Vt.from:Vt.player)===N){jt=Vt.t;break}}const St=je([s[N][0]-rt[0],s[N][1]-rt[1]]),re=rA*yt,Jt=xt+aA,Et=Td([...s[N]],[s[N][0]+re*St[0],s[N][1]+re*St[1]],Jt,vr);if(Jt+vr+Ki<=jt){(r[N]??(r[N]=[])).push(Et),m[N]=Et,o.push({player:N,clip:yd,t0:Jt,loopUntil:Jt+vr}),b[N]=[];const Dt=Math.max(Jt,f[N]??0);Dt<Jt+vr&&T({player:N,at:[...rt],t0:Dt,until:Jt+vr}),s[N]=[...Et.to]}}ut||Ut(_.player,Us(t,wt),C)}else{const N=_.type==="pass"?_.from:_.player,ut=oe[N],tt=!!ut&&_.t>=ut.at-wa&&_.t-ut.at<=lc;ut&&!tt&&console.warn(`[engine3d] header for ${N} at t=${_.t} does not meet the cross at their forehead (t=${ut.at.toFixed(2)}s) — played as an ordinary ${_.type}`),delete oe[N],tt&&_.t-ut.at>Pd&&console.warn(`[engine3d] header for ${N} at t=${_.t} pulled to the ball's arrival (t=${ut.at.toFixed(2)}s) — the ball cannot wait in the air`),Y(N,_.t,_.type),tt||Z(N,_.t);const rt=_.type==="pass"?s[_.to]:lt[C].target,it=_.type==="shoot"&&_.flightStyle!=="ground",Bt=it?IA:LE,Ct=it?LA:xr,It=Gt.has(N)&&J(_.t)===N&&(((de=(Ot=Bs(u,N,_.t))==null?void 0:Ot.hand)==null?void 0:de.height)??0)>0;Gt.has(N)&&(k[N]??0)>_.t&&console.warn(`[engine3d] keeper ${N} is busy until t=${k[N].toFixed(2)}s (save / catch clip still playing) but has a ${_.type} at t=${_.t} — schedule it later`);const xt=ht=>{if(!tt)return null;const zt=Math.hypot(ht[0]-Yt[0],ht[1]-Yt[1]);return zt>=AA?{style:"headed",loft:uc(zt,yt)}:null};let wt=_.t;if(_.type==="shoot"){const ht=m[N],zt=ht?ht.t0+Ce(ht):-1/0;ht&&(ht.endSpeed??0)>0&&_.t-zt>Ld&&_.t-zt<Sa&&(wt=zt-Ld)}let jt="",St,re,Jt=0,Et=null,Dt=null;if(tt)St=ut.at,Jt=ut.height;else if(It&&(_.type==="pass"||_.flightStyle==="ground")){Et=_.style??gA(Math.hypot(rt[0]-s[N][0],rt[1]-s[N][1]));const ht=bn[Et];jt=ht.id,re=ht.contact,St=_.t+ht.contact,Jt=ht.release*yt,k[N]=_.t+ht.duration+Cs}else{const ht=m[N],zt=_.type==="shoot"&&ht&&(ht.endSpeed??0)>0&&wt<=ht.t0+Ce(ht)+1e-9?En(ht,wt).speed:0;Dt=vt(N,wt,rt,Bt,_.type==="pass"),zt>DA&&t.clips[ja.id]?(jt=ja.id,re=ja.contact):jt=$n(t.groups[it?"shoot":"pass"],N,_.t),St=wt+(re??t.clips[jt].ballContact??0)}let Vt=null;tt||(Vt={player:N,clip:jt,t0:wt,...re!==void 0?{contact:re}:{}},o.push(Vt),et({player:N,at:[...rt],t0:Math.max(wt-Ct,0,f[N]??0),lock:[wt,St+wn],until:St+wn,headUntil:St-ET},Math.min(wt,Dt??1/0)));const te=ke(s[N],rt),Yt=tt?[...ut.from]:Wi(s[N],te),Ee=_.type!=="pass"?0:Et==="throw"?Math.max(.4,Math.hypot(rt[0]-Yt[0],rt[1]-Yt[1])/vd):_.flight;if(!tt){const ht=Math.max(wt-wE,x[N]??0);ht>St&&console.warn(`[engine3d] departure window for ${N} is inverted (starts t=${ht.toFixed(2)}s, ball contact t=${St.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),l.push({player:N,windowStart:ht,contact:St,heading:te,...Et?{toHeight:Jt}:{}})}if(_.type==="pass"&&Gt.has(_.to)&&!_.toFeet){const ht=St+Ee,zt=D(_.to,C,ht);zt.blocked&&console.warn(`[engine3d] ball to the keeper ${_.to} at t=${_.t}: their authored ${zt.blocked} runs during the flight, so where they stand at t=${ht.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const At=zt.atArrival,y=je([Yt[0]-At[0],Yt[1]-At[1]]),F=[At[0]+Ue*y[0],At[1]+Ue*y[1]],V=_.flightStyle==="clipped"||_.flightStyle==="lofted",K=((se=_.deflect)==null?void 0:se.style)==="lofted",O=V?(_.loft??0)>WE||K?bn.catchHigh:bn.catch:bn.scoop[Math.abs(pi(_.to)+Math.floor(ht*10))%bn.scoop.length],st=V?Math.min(zn*(O===bn.catchHigh?2:1),sA)*yt:0,ft=ht-O.contact;ft<0&&console.warn(`[engine3d] receive cue for ${_.to} wants t0=${ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),ft<zt.busyUntil&&console.warn(`[engine3d] catch cue for ${_.to} at t=${ht.toFixed(2)}s wants t0=${ft.toFixed(2)}s but their move is still running (until t=${zt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),ft<St&&console.warn(`[engine3d] catch cue for ${_.to} at t=${ht.toFixed(2)}s wants t0=${ft.toFixed(2)}s, before the ball leaves ${N} at t=${St.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),o.push({player:_.to,clip:O.id,t0:ft,contact:O.contact});const _t=_.flightStyle==="lofted"?uc(Math.hypot(F[0]-Yt[0],F[1]-Yt[1]),yt)-(Jt+st)/2:_.loft;if(a.push({from:Yt,to:F,t0:St,duration:Ee,style:Et==="kick"?"clipped":V||Et==="throw"?"lofted":"ground",..._t!==void 0?{loft:_t}:{},...st?{toHeight:st}:{},...Jt?{fromHeight:Jt}:{}}),T({player:_.to,at:[...s[N]],t0:_.t,lock:[ht-wn,ht+wn]}),_.deflect)a.push(xd(F,st,_.deflect,ht,yt)),x[_.to]=ht;else{p.push({t:ht,player:_.to});const pt=dc(s[_.to],s[N],F);u.push({player:_.to,at:ht,carry:F,hand:V?{height:zn*yt,from:st,rise:oc,follow:!0,bone:pt}:{height:zn*yt,from:0,rise:gd,follow:!0,bone:pt}}),x[_.to]=ht}k[_.to]=ft+O.duration+Cs}else if(_.type==="pass"&&!_.toFeet&&_.flightStyle==="lofted"&&(_.loft??yA)>=TA){const ht=St+Ee;let zt=null,At=1/0,y=!1,F=!1,V;for(let pt=C+1;pt<Mt.length;pt++){const gt=lt[pt],Tt=Mt[pt];if((Tt.type==="move"||Tt.type==="collect")&&Tt.player===_.to&&V===void 0&&Tt.t>=ht-wa&&(V=Tt.t),!(!gt||gt.actor!==_.to)){zt=gt.target,At=gt.t,F=Tt.type==="pass"||Tt.type==="shoot",y=F&&!!Tt.header;break}}V!==void 0&&F&&At-ht<=lc&&console.warn(`[engine3d] ${_.to} has a move at t=${V.toFixed(2)}s between the cross landing on their forehead (t=${ht.toFixed(2)}s) and their strike at t=${At} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const K=F&&V===void 0&&At>=ht-wa&&(At-ht<=Pd||y&&At-ht<=lc),O=D(_.to,C,ht);O.blocked&&!K&&console.warn(`[engine3d] cross to ${_.to} at t=${_.t}: their authored ${O.blocked} runs during the flight, so where they stand at t=${ht.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const st=wA(O.atArrival,Yt,zt,yt),ft=ht-st.clip.contact;ft<0&&console.warn(`[engine3d] header cue for ${_.to} wants t0=${ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),ft<O.busyUntil&&console.warn(`[engine3d] header cue for ${_.to} wants t0=${ft.toFixed(2)}s but their move is still running (until t=${O.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),o.push({player:_.to,clip:st.clip.id,t0:ft,contact:st.clip.contact});const _t=Math.hypot(st.contact[0]-Yt[0],st.contact[1]-Yt[1]);a.push({from:Yt,to:st.contact,t0:St,duration:Ee,style:"lofted",loft:uc(_t,yt)-(Jt+st.height)/2,toHeight:st.height,...Jt?{fromHeight:Jt}:{}}),K?(oe[_.to]={at:ht,from:st.contact,height:st.height},T({player:_.to,at:[...zt],t0:Math.max(ft-xr,0,f[_.to]??0),lock:[ft,ht+wn],until:ht+wn})):(F&&At<ht-wa?console.warn(`[engine3d] ${_.to}'s own strike at t=${At} is ${(ht-At).toFixed(2)}s BEFORE the cross reaches their forehead (t=${ht.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):y&&console.warn(`[engine3d] header for ${_.to} at t=${At} is ${(At-ht).toFixed(2)}s after the ball arrives (t=${ht.toFixed(2)}s) — ignored, cushioned instead`),T({player:_.to,at:[...s[N]],t0:_.t,lock:[ht-wn,ht+wn]}),a.push({from:st.contact,to:st.set,t0:ht,duration:hc,style:"drop",fromHeight:st.height}),T({player:_.to,at:[...st.faceAt],t0:ht}),p.push({t:ht,player:_.to}),x[_.to]=ht+hc,u.push({player:_.to,at:ht+hc,carry:st.set}))}else if(_.type==="pass"){const ht=St+Ee,zt=$n(t.groups.receive,_.to,ht),At=t.clips[zt];let y=null,F=1/0;for(let _t=C+1;_t<Mt.length;_t++){const pt=Mt[_t];(pt.type==="pass"?pt.from:pt.player)===_.to&&F===1/0&&(F=pt.t);const Tt=lt[_t];if(!(!Tt||Tt.actor!==_.to)){Tt.t-ht<=Rs&&(y=Tt.target);break}}const V=BA(rt,Yt,y);let K=_.t;{const _t=D(_.to,C,ht),pt=_t.expected,gt=Math.max(_.t,_t.busyUntil),Tt=Math.max(_t.afterT,_.t),Ht=_t.blocked;K=gt;const le=Math.hypot(V.contact[0]-pt[0],V.contact[1]-pt[1]);if(le>RE)if(Ht)console.warn(`[engine3d] receive for ${_.to}: the ball lands ${le.toFixed(2)}m away at t=${ht.toFixed(2)}s, but their authored ${Ht} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const $t=je([V.contact[0]-pt[0],V.contact[1]-pt[1]]),be=[V.contact[0]-Ue*$t[0],V.contact[1]-Ue*$t[1]],xe=t.groups.walk,he=xe!=null&&xe.length?t.clips[xe[0]].speed??Rn:Rn,qt={from:pt,to:be,t0:0,cruise:he,accel:Vi},Le=ht-dd-Ce(qt);Le<gt-1e-9?console.warn(`[engine3d] receive adjustment for ${_.to}: the ${(le-Ue).toFixed(2)}m walk to the contact point would need to start at t=${Le.toFixed(2)}s but they're busy until t=${gt.toFixed(2)}s — skipped (the standing stretch stays)`):(qt.t0=Le,K=ht-dd,B.push({player:_.to,afterT:Tt,move:qt,faceBall:[...Yt],faceSettle:[...V.faceAt],arrival:ht}))}}const O=At.ballContact??0,st=Math.min(O,Math.max(PE,Math.min(CE,IE*Ee,ht-(K+eo)))),ft=ht-st;ft<0&&console.warn(`[engine3d] receive cue for ${_.to} wants t0=${ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),o.push({player:_.to,clip:zt,t0:ft,...O>st?{offset:O-st}:{}}),a.push({from:Yt,to:V.contact,t0:St,duration:Ee,style:Et==="throw"||_.flightStyle==="lofted"?"lofted":Et==="kick"||_.flightStyle==="clipped"?"clipped":"ground",...Et==="throw"?{loft:Math.max(1.5,_.loft??0)}:Et==="kick"?{loft:Math.max(3,_.loft??0)}:_.loft!==void 0?{loft:_.loft}:{},...Jt?{fromHeight:Jt}:{},...xt(V.contact)??{}}),a.push({from:V.contact,to:V.set,t0:ht,duration:Yn,style:"ground"}),T({player:_.to,at:[...s[N]],t0:_.t,lock:[ht-wn,ht+wn]}),et({player:_.to,at:[...V.faceAt],t0:ht},F),p.push({t:ht,player:_.to}),x[_.to]=ht+Yn,u.push({player:_.to,at:ht+Yn,carry:V.set}),at(ht+Yn,((Te=Mt[C+1])==null?void 0:Te.t)??i.duration,V.set)}else if(_.flightStyle==="ground"){const ht=Math.hypot(rt[0]-Yt[0],rt[1]-Yt[1]),zt=_.flight??(Et==="throw"?Math.max(.4,ht/vd):ht/PA);if(a.push({from:Yt,to:[...rt],t0:St,duration:zt,style:Et==="throw"?"lofted":Et==="kick"?"clipped":"ground",...Et==="throw"?{loft:1.5}:Et==="kick"?{loft:3}:{},...Jt?{fromHeight:Jt}:{},...xt(rt)??{}}),_.deflect){const At=Math.hypot(_.deflect.to[0]-rt[0],_.deflect.to[1]-rt[1]);a.push({from:[...rt],to:[..._.deflect.to],t0:St+zt,style:"ground",duration:iA(ht,zt,At)})}}else{const ht=Math.hypot(rt[0]-Yt[0],rt[1]-Yt[1]),zt=_.flight??ht/CA,At=je([rt[0]-Yt[0],rt[1]-Yt[1]]),y=[rt[0]+Id*At[0],rt[1]+Id*At[1]],F=St+zt,V=a.length;a.push({from:Yt,to:y,t0:St,duration:zt,style:"shot",...Jt?{fromHeight:Jt}:{}}),a.push({from:y,to:y,t0:F,duration:RA,style:"drop"}),at(((j=Mt[C-1])==null?void 0:j.t)??0,wt,Yt);let K=!1;for(const O of Lt){const st=rn=>{const Be=D(O.id,C,rn);if(Be.afterT>-1/0)return Be.atArrival;const Je=m[O.id];return Je&&rn<Je.t0+Ce(Je)?En(Je,rn).pos:[...s[O.id]]},ft=St+fd(Math.max(zt,_d)),_t=pd(St,zt,bn.dive.left.contact).t0,pt=_.type==="shoot"?_.deflect:void 0,gt=Re||!!pt,Tt=st(gt?ft:_t),Ht=[rt[0]-Tt[0],rt[1]-Tt[1]],le=ke(Tt,Yt),$t=gt?_A(Tt,le,Yt,y,yt):null;if(pt&&!$t&&console.warn(`[engine3d] deflect on the shot at t=${_.t} is dropped: ${O.id} is ${$p(Tt,Yt,y).reach.toFixed(2)} m off the ball line at body scale ${yt} (his reach is ${(qp*yt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!$t){if(Math.hypot(Ht[0],Ht[1])>jp*yt)continue;const rn=nm(Tt,le,y),Be=NE[rn],Je=t.clips[Be],{t0:ye,timeScale:We}=pd(St,zt,bn.dive[rn].contact);if(T({player:O.id,at:[...Yt],t0:Math.max(wt-xr,0,f[O.id]??0),...Je?{lock:[wt,ye+Je.duration/We]}:{}}),Je){o.push({player:O.id,clip:Be,t0:ye,...We>1?{timeScale:We}:{}});const Oe=st(ye),ze=bA(Oe,Yt,y,yt),Xe=[ze[0]-Oe[0],ze[1]-Oe[1]],xi=Math.hypot(Xe[0],Xe[1]),jn=Math.min(xi,HE*yt),mh=xi>1e-9?[Oe[0]+Xe[0]/xi*jn,Oe[1]+Xe[1]/xi*jn]:[...Oe],Bm=Math.min(VE,Math.max(GE,F-ye));h.push({player:O.id,from:Oe,to:mh,t0:ye,duration:Bm}),E[O.id]={t0:ye,at:[...s[O.id]]},s[O.id]=[...mh]}continue}if(K)continue;K=!0;const be=a[V];a.splice(V+1,1);let xe,he=$t.contact,qt=zn*yt;if($t.kind==="dive"){be.duration=Math.max(be.duration,_d),xe=St+fd(be.duration);const rn=St+be.duration,Be={player:O.id,from:[...Tt],to:$t.travelTo,t0:xe,duration:$t.contactOffset};h.push(Be);const Je=Zp(Be,rn),ye=Math.min(1,(rn-xe)/$t.contactOffset),We=bn.dive[$t.side],Oe=ye*We.reach*yt,ze=je([$t.contact[0]-Tt[0],$t.contact[1]-Tt[1]]);he=[Je[0]+Oe*ze[0],Je[1]+Oe*ze[1]],qt=(zn+(We.hand-zn)*ye)*yt,E[O.id]={t0:xe,at:[...s[O.id]]},s[O.id]=[...$t.travelTo]}else xe=Math.max(wt,St+be.duration-$t.contactOffset);const Le=St+be.duration;be.to=he,be.toHeight=qt,o.push({player:O.id,clip:$t.clip,t0:xe,contact:$t.contactOffset});const ve=xe+$t.clipDuration;if(T({player:O.id,at:[...Yt],t0:Math.max(wt-xr,0,f[O.id]??0),lock:[wt,ve]}),pt){a.push(xd(he,qt,pt,Le,yt)),x[O.id]=Le,k[O.id]=ve+Cs;continue}p.push({t:Le,player:O.id});const hn=dc(s[O.id],Yt,he);$t.kind==="catch"?u.push({player:O.id,at:Le,carry:he,hand:{height:zn*yt,follow:!0,bone:hn}}):(u.push({player:O.id,at:Le,carry:he,hand:{height:Aa*yt,from:qt,rise:YE,follow:!0,bone:hn}}),u.push({player:O.id,at:ve,carry:he,hand:{height:zn*yt,from:Aa*yt,rise:oc,follow:!0,bone:hn}})),x[O.id]=Le,k[O.id]=ve+Cs}}if(_.type==="pass"&&!Et&&Vt){const ht=t.groups.walk,zt=ht!=null&&ht.length?t.clips[ht[0]].speed??Rn:Rn,At=[s[N][0]+Fr*Math.sin(te),s[N][1]+Fr*Math.cos(te)],y=m[N],F=y?y.t0+Ce(y):-1/0;let V=1/0;for(let pt=C+1;pt<Mt.length;pt++){const gt=Mt[pt];if((gt.type==="pass"?gt.from:gt.player)===N){V=gt.t;break}}const K={from:[...s[N]],to:At,t0:Us(t,Vt),cruise:zt,accel:Vi},O=K.t0+Ce(K)+Ki<=V;let st=null,ft=null;if(y&&g.has(y)&&St>=F&&St-F<=qT&&uh(r[N],St)<fm){const pt=$T(),gt={...y,to:[...y.to],cruise:Math.max(y.cruise,pt),endSpeed:pt};gt.t0=St-Ce(gt),gt.t0>=y.t0-1e-9&&tr(gt).peak>=pt-1e-9&&(st=gt,ft=O?{from:[...s[N]],to:At,t0:St,cruise:pt,accel:io,startSpeed:pt}:t1(s[N],te,pt,V-St,St,Tt=>P(Tt)&&A(Tt)))}if(st&&y){for(const pt of b[N]??[]){const gt=o.indexOf(pt);gt>=0&&o.splice(gt,1)}Object.assign(y,st),b[N]=nt(y,N)}const _t=ft??(O?K:null);_t&&((r[N]??(r[N]=[])).push(_t),m[N]=_t,b[N]=nt(_t,N),s[N]=[..._t.to])}p.push({t:St,player:null})}const q=Qt.get(G);q!==void 0&&q<_.t&&Qt.delete(G)}X(1/0),p.sort((C,_)=>C.t-_.t),o.sort((C,_)=>C.t0-_.t0),NT(o,r,t);const dt=jT(o,r,t);return{moves:r,flights:a,anims:o,faces:c,departures:l,arrivals:u,dives:h,turns:d,bounces:dt,attachTo(C){let _=null;for(const G of p)G.t<=C&&(_=G.player);return _}}}const n1=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Yd=new Map,$d=30;function i1(i,t=0){const e=`${i.uuid}@${t}`;let n=Yd.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>n1.test(we.parseTrackName(s.name).nodeName??"")),D_.makeClipAdditive(n,t*$d,n,$d),Yd.set(e,n)),n}function s1(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/am),n=Math.min(1,(t-i)/om);return UT*Math.max(0,Math.min(e,n))}function r1(i,t,e,n=[]){const s=m=>Us(i,m),r=(m,b)=>dm(t,i,m,b);function a(m,b){let g=0;for(const f of t){if(f.player!==m)continue;const x=s(f);x<=b&&x>g&&(g=x)}return g}const o=new Map,c=new Map,l=new Map,u=new Map,h=sm(i),d=new Map;for(const m of h)for(const b of i.groups[m.gait]??[])d.set(b,m.gait);function p(m,b,g,f,x){const E=r(m,g),v=E!=null&&E.additive?E:null,T=v?ch(h,x):null,w=T?$n(i.groups[T.gait],m,v.t0):null,R=v?null:E,L=R??(w?v:null),S=w??(R==null?void 0:R.clip)??IT(OA(i,e.get(m)),m,PT(m,g-a(m,g))),M=o.get(m);if(ST(M,S,R)){const J=i.clips[S],mt=b.mixer.clipAction(b.clips.get(S));mt.reset(),mt.loop=J.loop?Va:al,mt.clampWhenFinished=!0,R!=null&&R.offset&&(mt.time=R.offset),M&&M.action!==mt&&(M.action.fadeOut(cT(i,M.clip,S)),mt.fadeIn(cm(i,S,M.clip))),mt.play(),o.set(m,{clip:S,offset:R==null?void 0:R.offset,action:mt})}const I=o.get(m).action,z=!!L&&L.timeScale===void 0&&i.clips[S].category==="locomotion",H=z?d.get(S):void 0,W=z?H?nT(h,x,H):{timeScale:tT(x,i.clips[S].speed??Rn),partner:null,weight:0}:null,et=W!=null&&W.partner&&L?$n(i.groups[W.partner],m,L.t0):null,B=c.get(m);if(B&&B.clip!==et&&(B.clip!==S&&(B.action.weight=0,B.action.stop()),c.delete(m)),L)if((R==null?void 0:R.timeScale)!==void 0)I.timeScale=R.timeScale,I.weight=1;else if(W){if(I.timeScale=W.timeScale,I.weight=1-W.weight,et){let J=c.get(m);if(!J){const Q=b.mixer.clipAction(b.clips.get(et));Q.reset(),Q.loop=Va,Q.play(),J={clip:et,action:Q},c.set(m,J)}J.action.weight=W.weight,J.action.timeScale=W.timeScale;const mt=i.clips[S].duration,kt=i.clips[et].duration;mt>0&&(J.action.time=I.time/mt%1*kt)}}else I.timeScale=1,I.weight=1;else{I.weight=1,I.timeScale=jd(m);const J=i.clips[S].duration;I.time=((Xd(m,J)+g*I.timeScale)%J+J)%J}const X=XT(n,m,g),D=u.get(m),nt=X>0?b.clips.get(HT):void 0;if(nt){let J=D;J||(J=b.mixer.clipAction(nt),J.reset(),J.loop=Va,J.timeScale=0,J.play(),u.set(m,J));const mt=nt.duration;J.time=((Xd(m,mt)+g*jd(m))%mt+mt)%mt,J.weight=X,I.weight*=1-X}else D&&(D.weight=0,D.stop(),D.enabled=!1,u.delete(m));const Y=l.get(m);if(v){const J=v.offset??0,mt=Math.max(0,i.clips[v.clip].duration-J),kt=s1(g-v.t0,mt);let Q=Y;if(!Q||Q.clip!==v.clip||Q.offset!==J){Q&&(Q.action.weight=0,Q.action.stop(),Q.action.enabled=!1);const at=b.mixer.clipAction(i1(b.clips.get(v.clip),J));at.reset(),at.loop=al,at.clampWhenFinished=!0,at.timeScale=0,at.play(),l.set(m,Q={clip:v.clip,offset:J,action:at})}Q.action.time=Math.min(i.clips[v.clip].duration,J+Math.max(0,g-v.t0)),Q.action.weight=kt}else Y&&(Y.action.weight=0,Y.action.stop(),Y.action.enabled=!1,l.delete(m));b.mixer.update(f)}return{applyAnim:p,cueAt:r}}class a1{constructor(t,e){un(this,"_t",0);un(this,"_playing",!1);un(this,"speed",1);un(this,"loopCbs",[]);un(this,"endCbs",[]);un(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function o1(i,t){const e=new Map(t),n=new Map,s=new Map;function r(a,o,c,l,u,h,d){const p=e.get(a)??0,m=hm(i,a,o);let b;if(m){const E=s.get(a);E&&E.span===m?b=E.from:(b=p,s.set(a,{span:m,from:b}))}else s.delete(a);const g=m?lT(i,a,o,b):null,f=g?hT(li[m.clip],l):d?_E:Gp(l),x=g?od(p,g.heading,c,f):h?p:od(p,u,c,f);return n.set(a,c>0?(x-p)/c:0),e.set(a,x),{h:x,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const c1=.2,l1=.5,h1=.06,u1=.25,Zd=.15,d1=.25,f1=.2;function p1(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=c1*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function m1(i,t,e=1){return i.speed>l1*e||i.y>t+h1*e}function g1(i,t,e=1){const n=Math.hypot(i,t),s=u1*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function _1(i,t){for(const e of i??[]){const n=e.t0+Ce(e);if(t>n-d1&&t<=n)return!0}return!1}const b1=new Set(["turn","transition","receive","pass","idle"]);function x1(i,t,e){return e||i===null?!0:b1.has(t??"")}function v1(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const a=(r-s.outAt)/Zd;if(a>=1)return[0,0];const o=1-a*a*(3-2*a);return[s.outX*o,s.outZ*o]}function n(s,r,a,o,c,l,u){let h=i.get(s);if(h||i.set(s,h=t()),c<=0&&o===h.prevT){const[v,T]=e(h,o);return[h.corrX+v,h.corrZ+T]}if(c<=0||o<h.prevT||o-h.prevT>.5)return h.foot=-1,h.corrX=0,h.corrZ=0,h.outX=0,h.outZ=0,h.outAt=-1/0,h.prevT=o,h.prev=r.map(v=>[...v]),h.prevRoot=[a[0],a[1]],[0,0];const d=a[0]-h.prevRoot[0],p=a[1]-h.prevRoot[1],m=h.rootV=Math.hypot(d,p)/c,b=r.map((v,T)=>{const w=h.prev[T],R=w?Math.hypot(v[0]-w[0]-d,v[2]-w[2]-p)/c:1/0;return{x:v[0],y:v[1],z:v[2],speed:R}}),g=v=>{h.foot<0||(h.foot=-1,h.outX=h.corrX,h.outZ=h.corrZ,h.outAt=o,h.corrX=0,h.corrZ=0)};if(!l||m>=f1)g();else if(h.foot>=0&&m1(b[h.foot],h.plantY,u)&&g(),h.foot<0){const v=p1(b,u);v>=0&&((h.corrX||h.corrZ)&&(h.outX=h.corrX,h.outZ=h.corrZ,h.outAt=o,h.corrX=0,h.corrZ=0),h.foot=v,h.plantY=b[v].y,h.anchorX=r[v][0],h.anchorZ=r[v][2])}else{const[v,T]=g1(h.anchorX-r[h.foot][0],h.anchorZ-r[h.foot][2],u);h.corrX=v,h.corrZ=T}const[f,x]=e(h,o);(o-h.outAt)/Zd>=1&&(h.outX=0,h.outZ=0);const E=[h.corrX+f,h.corrZ+x];return h.prev=r.map(v=>[...v]),h.prevRoot=[a[0],a[1]],h.prevT=o,E}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const dh=Math.PI/180,_m=2*dh,bm=4*dh,y1=8*dh,M1=bm/_m,Jd=.12,S1=.6,E1=.08;function A1(i){return i<M1?0:Math.min(y1,Math.max(bm,_m*i))}function T1(i,t){const e=Math.hypot(i[0],i[1]),n=A1(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function mc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function w1(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,a,o){const c=T1(s,r),l=mc(i.get(n)??0,c.pitch*a,o,Jd),u=mc(t.get(n)??0,c.roll*a,o,Jd);return i.set(n,l),t.set(n,u),{pitch:l,roll:u}},shoulder(n,s,r){const a=mo(s)*S1,o=mc(e.get(n)??0,a,r,E1);return e.set(n,o),o},reset(){i.clear(),t.clear(),e.clear()}}}const gc=new sn,Qd=new sn,tf=new sn,so=new sn,R1=new Un;function C1(i,t){gc.identity();for(let e=i.parent;e&&e!==t;e=e.parent)gc.premultiply(e.quaternion);return gc}const kr=new WeakMap;function xm(i){const t=kr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function vm(i,t){const e=kr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):kr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function ef(i,t,e,n,s){if(xm(t),!e&&!n&&!s){kr.delete(t);return}so.copy(t.quaternion);const r=C1(t,i);Qd.setFromEuler(R1.set(e,n,s,"YXZ")),tf.copy(r).invert().multiply(Qd).multiply(r),t.quaternion.premultiply(tf),vm(t,so)}function P1(i,t){if(xm(i),!t){kr.delete(i);return}so.copy(i.quaternion),i.rotation.y+=t,vm(i,so)}function ro(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function I1(i){var r;const t=[i.root[0]+Ue*Math.sin(i.heading),i.root[1]+Ue*Math.cos(i.heading)];let e=t,n=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!n||a.at>=n.at)&&(n=a);if(n)if((r=n.hand)!=null&&r.follow){const a=n.hand.rise?ro((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*a,n.carry[1]+(t[1]-n.carry[1])*a]}else e=n.carry;const s=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(s){const a=[i.root[0]+Ue*Math.sin(s.heading),i.root[1]+Ue*Math.cos(s.heading)],o=ro((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(a[0]-e[0])*o,e[1]+(a[1]-e[1])*o]}return e}function L1(i){let t=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!t||o.at>=t.at)&&(t=o);if(!(t!=null&&t.hand))return 0;const e=t.hand,n=e.from??e.height,s=e.rise?ro((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const a=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(a&&a.toHeight!==void 0){const o=ro((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6));r+=(a.toHeight-r)*o}return r}function qa(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=os(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:TE(e),speed:Vp(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:I1(n),height:L1(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const D1=1.2,U1=40;function ym(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=En(s,e).pos);return Jp(i.dives,i.moves[t],t,e)??n}function nf(i,t){const e=i.attachTo(t),n=qa({t,holderId:e,holderRoot:e?ym(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const Mm=.55,N1=.3,sf=.6,F1=.6,O1=.4,go=i=>Math.min(Math.max(i,0),1);function k1(i,t){if(t<=i.t0)return 0;if(t>=i.t0+Ce(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=En(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function B1(i,t,e,n,s,r,a){const o=Math.hypot(t[0]-i[0],t[1]-i[1]);if(o<1e-6)return[];const c=(t[0]-i[0])/o,l=(t[1]-i[1])/o,u=-l,h=c,d=o-s-.1,p=b=>{const g=e?e*Math.sin(2*Math.PI*b/n):0;return[i[0]+c*b+u*g,i[1]+l*b+h*g]},m=[];for(let b=.15;b+r*.5<=d;b+=r+a){const g=Math.min(b+r,d),[f,x]=p(b),[E,v]=p(g);m.push({ax:f,ay:x,bx:E,by:v,k:(b+g)/2/o})}return m}function rf(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,a=Mm*e,o=N1*e,c=t[0]-a*s,l=t[1]-a*r;return[[t[0],t[1]],[c-r*o,l+s*o],[c+r*o,l-s*o]]}const af=1.6,Ca=2.2,z1=5,H1=5,G1=6,of=14,V1=4,W1=20,X1="#E8ECEF",j1="#8D949B",q1=1.2,K1=3,Y1=.4;function cf(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(G1*n,s*.5),a=i==="dribble",o=i==="pass"?W1*n:a?of*n/8:z1*n;return{dashes:B1(t,e,a?V1*n:0,of*n,r,o,i==="move"?H1*n:0),headScale:r/Mm}}function $1(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function Z1(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,a=0,o=1/0;for(const u of e){const h=(u.y-i[1])/s;!(h>1)||!isFinite(h)||h-1<o&&(o=h-1,a=h,r=u)}if(!r)return null;const c=Math.max(r.halfW-n,0),l=i[0]+(t[0]-i[0])*a;return[Math.min(Math.max(l,r.x-c),r.x+c),r.y]}function _o(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=q1}function J1(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,a)=>{const o=Math.hypot(a.start[0]-t[0],a.start[1]-t[1]);return o<r.d?{team:a.team,d:o}:r},{d:1/0}).team}const lf=.012,Q1=.14,tw=.38,hf=.15,Sm=.3,ew="#bfe333";function nw(i){const t=1-2*Sm,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const Pa=1.5,iw=.3,sw=24;function uf(i){return hf+(tw-hf)*go(i)}function El(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=Pa?0:1-s/Pa;if(e===void 0)return r;const a=Math.max(e,n);if(i<a)return r;const o=1-Math.min(a-n,Pa)/Pa;return Math.min(r,o*Math.max(1-(i-a)/iw,0))}function Al(i,t){for(let e=t+1;e<i.length;e++)if(_o(i[e]))return i[e].t0}function rw(i,t){const e=[];for(let n=0;n<i.length;n++)_o(i[n])&&El(t,i[n],Al(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function aw(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=os(i,t).pos;return go(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function ow(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const o=os(n,e).pos;return[o[0],o[1]]}const r=i[t+1];if(!r||_o(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const a=os(r,e).pos;return[a[0],a[1]]}function df(i,t){const e=go((i-t)/.06);return sf+(1-sf)*e}function cw(i,t){return go((i-(t-F1))/O1)}const lw=.35;function hw(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+lw}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const a=Math.max(s.t0,0);n.push({player:s.player,t0:a,t1:a+(r.ballContact??0)+Yn})}return n.sort((s,r)=>s.t0-r.t0)}function uw(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const ff=1e-6;function Tl(i,t,e){return Kp(i,t,e)>0}function dw(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-ff);if(r&&Tl(i.arrivals,r,s.t0-ff))return{kind:"halo"}}const n=uw(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(a=>e>=a.t0&&e<a.t0+a.duration),r=i.arrivals.some(a=>a.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Tl(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function fw(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const pw=.85;function mw(i,t){return i>0?{draw:t>=i*pw,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const gw=.15,_w=1e-6;function pf(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function bw(i,t,e){var r;const n=i.filter(a=>a.player===t).sort((a,o)=>a.at-o.at);let s=e.at;for(let a=n.indexOf(e)-1;a>=0&&((r=n[a].hand)==null?void 0:r.bone)===e.hand.bone;a--)s=n[a].at;return s}function Em(i,t,e,n){var a;const s=Bs(i,e,n);if(!((a=s==null?void 0:s.hand)!=null&&a.bone))return 0;let r=pf((n-bw(i,e,s))/gw);for(const o of t)o.player!==e||n<o.windowStart||n>o.contact||(r*=1-pf((n-o.windowStart)/Math.max(o.contact-o.windowStart,_w)));return r}function xw(i,t,e){var s,r;const n=(r=(s=Bs(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function vw(i,t,e,n){return Tl(i,e,n)||Em(i,t,e,n)>0}const yw=25;function Mw(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function Sw(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(Mw(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=Vp(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/yw),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const Ew=.02;function Aw(i,t,e,n,s,r,a,o=!1){if(!o)for(let c=0;c<t.length;c++){const l=t[c];e<l.t&&n>=l.t&&(l.net?i.net():i.kick(l.power,l.shot))}i.roll(s&&r<=Ew,a)}function Tw(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,a,o,c)=>{Aw(e,n,s,r,a,o,c,t),t=!1}}const mf=new ln,Ia=new U;class Am extends $_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ge(t,3)),this.setAttribute("uv",new Ge(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new fl(e,6,1);return this.setAttribute("instanceStart",new Vn(n,3,0)),this.setAttribute("instanceEnd",new Vn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new fl(e,6,1);return this.setAttribute("instanceColorStart",new Vn(n,3,0)),this.setAttribute("instanceColorEnd",new Vn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new R_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),mf.setFromBufferAttribute(e),this.boundingBox.union(mf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ia.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ia)),Ia.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ia));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Zt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};xn.line={uniforms:Hl.merge([Rt.common,Rt.fog,Rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class fh extends bi{constructor(t){super({type:"LineMaterial",uniforms:Hl.clone(xn.line.uniforms),vertexShader:xn.line.vertexShader,fragmentShader:xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const _c=new _e,gf=new U,_f=new U,Qe=new _e,tn=new _e,qn=new _e,bc=new U,xc=new ae,en=new d0,bf=new U,La=new ln,Da=new Nn,Kn=new _e;let Zn,es;function xf(i,t,e){return Kn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Kn.multiplyScalar(1/Kn.w),Kn.x=es/e.width,Kn.y=es/e.height,Kn.applyMatrix4(i.projectionMatrixInverse),Kn.multiplyScalar(1/Kn.w),Math.abs(Math.max(Kn.x,Kn.y))}function ww(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){en.start.fromBufferAttribute(s,o),en.end.fromBufferAttribute(r,o),en.applyMatrix4(e);const l=new U,u=new U;Zn.distanceSqToSegment(en.start,en.end,u,l),u.distanceTo(l)<es*.5&&t.push({point:u,pointOnLine:l,distance:Zn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function Rw(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),h=-t.near;Zn.at(1,qn),qn.w=1,qn.applyMatrix4(t.matrixWorldInverse),qn.applyMatrix4(n),qn.multiplyScalar(1/qn.w),qn.x*=r.x/2,qn.y*=r.y/2,qn.z=0,bc.copy(qn),xc.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=u;d<p;d++){if(Qe.fromBufferAttribute(c,d),tn.fromBufferAttribute(l,d),Qe.w=1,tn.w=1,Qe.applyMatrix4(xc),tn.applyMatrix4(xc),Qe.z>h&&tn.z>h)continue;if(Qe.z>h){const E=Qe.z-tn.z,v=(Qe.z-h)/E;Qe.lerp(tn,v)}else if(tn.z>h){const E=tn.z-Qe.z,v=(tn.z-h)/E;tn.lerp(Qe,v)}Qe.applyMatrix4(n),tn.applyMatrix4(n),Qe.multiplyScalar(1/Qe.w),tn.multiplyScalar(1/tn.w),Qe.x*=r.x/2,Qe.y*=r.y/2,tn.x*=r.x/2,tn.y*=r.y/2,en.start.copy(Qe),en.start.z=0,en.end.copy(tn),en.end.z=0;const b=en.closestPointToPointParameter(bc,!0);en.at(b,bf);const g=Qf.lerp(Qe.z,tn.z,b),f=g>=-1&&g<=1,x=bc.distanceTo(bf)<es*.5;if(f&&x){en.start.fromBufferAttribute(c,d),en.end.fromBufferAttribute(l,d),en.start.applyMatrix4(a),en.end.applyMatrix4(a);const E=new U,v=new U;Zn.distanceSqToSegment(en.start,en.end,v,E),e.push({point:v,pointOnLine:E,distance:Zn.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class Cw extends Se{constructor(t=new Am,e=new fh({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)gf.fromBufferAttribute(e,a),_f.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+gf.distanceTo(_f);const r=new fl(s,2,1);return t.setAttribute("instanceDistanceStart",new Vn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Vn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Zn=t.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;es=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),Da.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=es*.5;else{const h=Math.max(s.near,Da.distanceToPoint(Zn.origin));l=xf(s,h,c.resolution)}if(Da.radius+=l,Zn.intersectsSphere(Da)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),La.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=es*.5;else{const h=Math.max(s.near,La.distanceToPoint(Zn.origin));u=xf(s,h,c.resolution)}La.expandByScalar(u),Zn.intersectsBox(La)!==!1&&(n?ww(this,e):Rw(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(_c),this.material.uniforms.resolution.value.set(_c.z,_c.w))}}class Tm extends Am{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Pw extends Cw{constructor(t=new Tm,e=new fh({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function Iw(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const a=n/r;return{axis:[s/r,0,-a],angle:r/e}}const vf=.55,wm=.55,yf=.006,Lw=i=>1/(1+Math.max(i,0)),Dw=i=>wm/(1+2*Math.max(i,0)),Uw=.6,Nw=(i,t)=>t>0?i/t*Uw:0,Fw=14,Ow=.25,Rm=.25,Ua=Math.round(Rm*60)+2,kw=2,Bw=.5,zw=16774102,Hw=20,vc=.06,yc=.06,Mf=.09;function Gw(i){if(!(i>=0)||i>=yc+Mf)return[1,1,1];const t=i<yc?1:1-(i-yc)/Mf;return[1+vc*t,1-vc*t,1+vc*t]}const Vw=.02,Ww=2;let Mr=null;function Xw(){if(Mr)return Mr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Mr=new Fn(i),Mr.userData.shared=!0,Mr}function jw(i){let{bodyScale:t,radius:e}=i;const n=new Ze({map:Xw(),transparent:!0,depthWrite:!1,opacity:wm,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Se(new Xn(vf,vf).rotateX(-Math.PI/2),n);s.position.y=yf,s.renderOrder=1,i.root.add(s);const r=new fh({linewidth:kw,color:zw,vertexColors:!0,transparent:!0,opacity:Bw,blending:ts,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const a=new Tm;a.setPositions(new Float32Array(Ua*3)),a.setColors(new Float32Array(Ua*3));const o=a.attributes.instanceStart.data,c=a.attributes.instanceColorStart.data,l=new Pw(a,r);l.frustumCulled=!1,l.renderOrder=Hw,l.visible=!1,i.root.add(l);const u=[],h=new U;let d=!1,p=!1,m=-1;const b=new U;function g(){s.scale.setScalar(t)}g();function f(x){const E=d?h.distanceTo(x.pos):0,v=d&&E>Ww,T=x.height<=Vw;if(s.visible=!x.held,s.visible&&(s.position.set(x.pos.x,yf,x.pos.z),s.scale.setScalar(t*Lw(x.height)),n.opacity=Dw(x.height)),d&&!v&&x.dt>0&&E>1e-9){const{axis:M,angle:I}=Iw([h.x,h.z],[x.pos.x,x.pos.z],e);if(M[0]!==0||M[2]!==0){b.set(M[0],M[1],M[2]);const z=T?I:Nw(E/x.dt,e)*x.dt;z>0&&i.mesh.rotateOnWorldAxis(b,z)}}T&&p&&!v&&(m=x.t),v&&(m=-1),p=!T;const[w,R,L]=m<0?[1,1,1]:Gw(x.t-m);if(i.mesh.scale.set(t*w,t*R,t*L),v&&(u.length=0),x.dt>0){for(u.push({t:x.t,p:x.pos.clone()});u.length&&x.t-u[0].t>Rm;)u.shift();for(;u.length>Ua;)u.shift()}if((x.speed>Fw||(x.apex??0)>=Ow)&&u.length>=2){const I=u.length-1,z=o.array,H=c.array;for(let W=0;W<Ua-1;W++)for(const[et,B]of[[0,W],[3,W+1]]){const X=u[Math.min(B,I)].p,D=6*W+et;z[D]=X.x,z[D+1]=X.y,z[D+2]=X.z;const nt=Math.min(B,I)/I;H[D]=H[D+1]=H[D+2]=nt}o.needsUpdate=!0,c.needsUpdate=!0,a.instanceCount=I,l.visible=!0}else l.visible=!1;h.copy(x.pos),d=!0}return{update:f,resize(x,E,v){t=x,e=E,g(),r.resolution.set(v.width,v.height)},__state:()=>({shadow:s,streak:l,trailLength:u.length,squashFrom:m})}}const qw=.055,Kw=.17,Xi=.015,Sf=2.1,Yw=.16,$w=.1,Zw=1.6,Jw=.45,Qw=.11,tR={technical:VM,tactical:WM,physical:XM,social:jM};function eR(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Fn(i)}function nR(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function iR(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?tR[i.color]??i.color:as,r=Math.min(t.width,t.height)*.14;if(nR(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=Yw,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const o=i.label.toUpperCase(),c=mw(n.measureText(o).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(o,18,34,c.maxWidth))}const a=new Fn(t);return a.colorSpace=Fe,a}function sR(i){var E,v;const{scene:t,drill:e,schedule:n}=i,s=(...T)=>{for(const w of T)w.traverse(R=>{const L=R.material;for(const S of Array.isArray(L)?L:L?[L]:[])S.toneMapped=!1});t.add(...T)},r=i.pathM??$w,a=T=>T*r*(i.pathWidthK??1),o=fw(i.search??location.search,(E=e.overlays)==null?void 0:E.runPaths),{width:c,length:l}=e.pitch,u=T=>T-c/2,h=T=>T-l/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(T=>[T.id,T.start])),ballStart:e.ball.start,headingAt:i.headingAt},p=J1(e.players,e.ball.start,n.attachTo(0)),m=new Map(e.players.map(T=>[T.id,T.team])),b=T=>m.get(T)===p?X1:j1,g=[];{const T=U1,w=new Float32Array(T*3),R=new He;R.setAttribute("position",new Ae(new Float32Array(T*2*3),3)),R.setAttribute("color",new Ae(new Float32Array(T*2*3),3));const L=new Float32Array(T*2*2);for(let B=0;B<T;B++)L.set([0,B/(T-1),1,B/(T-1)],B*4);R.setAttribute("uv",new Ae(L,2));const S=new Uint16Array((T-1)*6);for(let B=0;B<T-1;B++){const X=B*2;S.set([X,X+1,X+2,X+1,X+3,X+2],B*6)}R.setIndex(new Ae(S,1));const M=(()=>{const B=document.createElement("canvas");B.width=64,B.height=1;const X=B.getContext("2d"),[D,nt,Y]=GM,J=X.createLinearGradient(0,0,64,0);J.addColorStop(0,`rgba(${D},${nt},${Y},0)`),J.addColorStop(.28,`rgba(${D},${nt},${Y},0.28)`),J.addColorStop(.44,"rgba(216,247,120,0.8)"),J.addColorStop(.5,"rgba(255,255,255,1)"),J.addColorStop(.56,"rgba(216,247,120,0.8)"),J.addColorStop(.72,`rgba(${D},${nt},${Y},0.28)`),J.addColorStop(1,`rgba(${D},${nt},${Y},0)`),X.fillStyle=J,X.fillRect(0,0,64,1);const mt=new Fn(B);return mt.colorSpace=Fe,mt})(),I=new Se(R,new Ze({map:M,vertexColors:!0,blending:ts,transparent:!0,depthWrite:!1,side:mn}));I.frustumCulled=!1,I.renderOrder=6,s(I);const z=new U,H=new U,W=new U,et=D1/(T-1);g.push((B,X)=>{if(I.visible=o.trail,!o.trail)return;for(let Y=0;Y<T;Y++){const J=nf(d,B-Y*et);w[Y*3]=u(J.pos[0]),w[Y*3+1]=qw+J.height,w[Y*3+2]=h(J.pos[1])}const D=R.getAttribute("position"),nt=R.getAttribute("color");W.set(1,0,0);for(let Y=0;Y<T;Y++){const J=Math.min(Y,T-2);z.set(w[J*3]-w[J*3+3],w[J*3+1]-w[J*3+4],w[J*3+2]-w[J*3+5]),H.set(w[Y*3],w[Y*3+1],w[Y*3+2]).sub(X.position),z.lengthSq()>1e-10&&(z.cross(H),z.lengthSq()>1e-10&&W.copy(z.normalize()));const mt=Math.pow(1-Y/(T-1),1.2),kt=Kw*(.35+.65*mt),Q=w[Y*3],at=w[Y*3+1],ct=w[Y*3+2];D.setXYZ(Y*2,Q+W.x*kt,at+W.y*kt,ct+W.z*kt),D.setXYZ(Y*2+1,Q-W.x*kt,at-W.y*kt,ct-W.z*kt);const Z=mt;nt.setXYZ(Y*2,Z,Z,Z),nt.setXYZ(Y*2+1,Z,Z,Z)}D.needsUpdate=nt.needsUpdate=!0})}{const T=[];let w=0,R=0;for(const L of e.events){if(L.type!=="move"&&L.type!=="dribble")continue;const S=(n.moves[L.player]??[]).find(z=>z.t0===L.t&&z.to[0]===L.to[0]&&z.to[1]===L.to[1]);if(!S)continue;const M=cf(L.type,S.from,S.to,r);if(!M)continue;const I=new ne(b(L.player));T.push({m:S,authored:L.runPath===!0,stroke:M,baseR:I.r,baseG:I.g,baseB:I.b,baseA:1,vert0:w,vertCount:M.dashes.length*4+3}),w+=M.dashes.length*4+3,R+=M.dashes.length*6+3}if(T.length){const L=new Float32Array(w*3),S=new Float32Array(w*4),M=new Uint16Array(R);let I=0,z=0;const H=a(af)/2;for(const X of T){const D=Math.hypot(X.m.to[0]-X.m.from[0],X.m.to[1]-X.m.from[1])||1,nt=-(X.m.to[1]-X.m.from[1])/D,Y=(X.m.to[0]-X.m.from[0])/D;for(const at of X.stroke.dashes){const ct=I/3;L.set([u(at.ax+nt*H),Xi,h(at.ay+Y*H),u(at.ax-nt*H),Xi,h(at.ay-Y*H),u(at.bx+nt*H),Xi,h(at.by+Y*H),u(at.bx-nt*H),Xi,h(at.by-Y*H)],I),I+=12,M.set([ct,ct+1,ct+2,ct+1,ct+3,ct+2],z),z+=6}const[J,mt,kt]=rf(X.m.from,X.m.to,X.stroke.headScale),Q=I/3;L.set([u(J[0]),Xi,h(J[1]),u(mt[0]),Xi,h(mt[1]),u(kt[0]),Xi,h(kt[1])],I),I+=9,M.set([Q,Q+1,Q+2],z),z+=3}const W=new He;W.setAttribute("position",new Ae(L,3)),W.setAttribute("color",new Ae(S,4)),W.setIndex(new Ae(M,1));const et=new Se(W,new Ze({vertexColors:!0,transparent:!0,depthWrite:!1,side:mn}));et.renderOrder=2,s(et);const B=W.getAttribute("color");g.push(X=>{if(et.visible=o.runPaths!=="off",!!et.visible){for(const D of T){const nt=o.runPaths==="authored"&&!D.authored?0:cw(X,D.m.t0),Y=k1(D.m,X);let J=D.vert0;for(const kt of D.stroke.dashes){const Q=D.baseA*nt*df(kt.k,Y);for(let at=0;at<4;at++)B.setXYZW(J++,D.baseR,D.baseG,D.baseB,Q)}const mt=D.baseA*nt*df(1,Y);for(let kt=0;kt<3;kt++)B.setXYZW(J++,D.baseR,D.baseG,D.baseB,mt)}B.needsUpdate=!0}})}}{const T=sw,w=Q1/2,R=[-1,-.4,1-2*Sm,1],L=R.map(nw),S=R.length,M=n.flights.map((H,W)=>Al(n.flights,W)),I=()=>{const H=new He,W=new Float32Array((T+1)*S*3);for(let D=0;D<(T+1)*S;D++)W[D*3+1]=lf;const et=new Float32Array((T+1)*S*4),B=new Uint16Array(T*(S-1)*6);for(let D=0,nt=0;D<T;D++)for(let Y=0;Y<S-1;Y++,nt++){const J=D*S+Y;B.set([J,J+1,J+S,J+1,J+S+1,J+S],nt*6)}H.setAttribute("position",new Ae(W,3)),H.setAttribute("color",new Ae(et,4)),H.setIndex(new Ae(B,1));const X=new Se(H,new Ze({color:ew,vertexColors:!0,transparent:!0,depthWrite:!1,side:mn}));return X.frustumCulled=!1,X.renderOrder=2,X.name="passRibbon",s(X),{mesh:X,posAttr:H.getAttribute("position"),colAttr:H.getAttribute("color")}},z=[I(),I()];g.push(H=>{const W=o.runPaths==="auto"?rw(n.flights,H):[];for(let et=0;et<z.length;et++){const B=z[et],X=W[W.length-1-et]??-1;if(B.mesh.visible=X>=0,X<0)continue;const D=n.flights[X],nt=El(H,D,M[X]),Y=aw(D,H),J=Math.hypot(D.to[0]-D.from[0],D.to[1]-D.from[1])||1,mt=-(D.to[1]-D.from[1])/J*w,kt=(D.to[0]-D.from[0])/J*w,Q=D.from[0]+(D.to[0]-D.from[0])*Y,at=D.from[1]+(D.to[1]-D.from[1])*Y,ct=ow(n.flights,X,H);for(let Z=0;Z<=T;Z++){const vt=Z/T,Ut=Z===T?ct[0]:D.from[0]+(Q-D.from[0])*vt,Lt=Z===T?ct[1]:D.from[1]+(at-D.from[1])*vt,yt=nt*uf(vt);for(let Gt=0;Gt<S;Gt++){const Re=R[Gt],k=Z*S+Gt;B.posAttr.setX(k,u(Ut+mt*Re)),B.posAttr.setZ(k,h(Lt+kt*Re)),B.colAttr.setXYZW(k,1,1,1,yt*L[Gt])}}B.posAttr.needsUpdate=B.colAttr.needsUpdate=!0}})}{const T=(e.equipment??[]).filter(I=>I.type==="goal").map(I=>({x:I.at[0],y:I.at[1],halfW:Or*i.goalScale})),w=a(Ca)/2,R=[],L=[],S=[],M=[];for(let I=0;I<n.flights.length;I++){const z=n.flights[I];if(!_o(z))continue;const H=$1(z,n.arrivals);if(!H&&!z.pop)continue;const W=Math.hypot(z.to[0]-z.from[0],z.to[1]-z.from[1])||1,et=-(z.to[1]-z.from[1])/W,B=(z.to[0]-z.from[0])/W,X=B,D=-et;let nt=0;if(H){const Y=K1*2*w/2;L.push({ax:z.to[0]-X*w,ay:z.to[1]-D*w,bx:z.to[0]+X*w,by:z.to[1]+D*w,h:Y,px:et,py:B});const J=Z1(z.from,z.to,T,a(Ca))??z.to;L.push({ax:z.to[0],ay:z.to[1],bx:J[0],by:J[1],h:Y1*w,px:et,py:B}),nt=8}else{L.push({ax:z.from[0],ay:z.from[1],bx:z.to[0],by:z.to[1],h:af/Ca*w,px:et,py:B});const Y=cf("pass",z.from,z.to,r);S.push(rf(z.from,z.to,Y?Y.headScale:0)),nt=7}M.push({i:I,verts:nt})}if(M.length){const I=M.reduce((ct,Z)=>ct+Z.verts,0),z=M.reduce((ct,Z)=>ct+(Z.verts===8?12:9),0),H=new Float32Array(I*3),W=new Float32Array(I*4),et=new Uint16Array(z);let B=0,X=0,D=0,nt=0;const Y=lf,J=()=>{const ct=L[D++],Z=B/3;H.set([u(ct.ax+ct.px*ct.h),Y,h(ct.ay+ct.py*ct.h),u(ct.ax-ct.px*ct.h),Y,h(ct.ay-ct.py*ct.h),u(ct.bx+ct.px*ct.h),Y,h(ct.by+ct.py*ct.h),u(ct.bx-ct.px*ct.h),Y,h(ct.by-ct.py*ct.h)],B),B+=12,et.set([Z,Z+1,Z+2,Z+1,Z+3,Z+2],X),X+=6};for(const ct of M){const Z=B/3;if(ct.verts===8)J(),J();else{J();const[vt,Ut,Lt]=S[nt++],yt=B/3;H.set([u(vt[0]),Y,h(vt[1]),u(Ut[0]),Y,h(Ut[1]),u(Lt[0]),Y,h(Lt[1])],B),B+=9,et.set([yt,yt+1,yt+2],X),X+=3}R.push({flight:ct.i,vert0:Z,vertCount:ct.verts})}const mt=new He;mt.setAttribute("position",new Ae(H,3)),mt.setAttribute("color",new Ae(W,4)),mt.setIndex(new Ae(et,1));const kt=new Se(mt,new Ze({color:KM,vertexColors:!0,transparent:!0,depthWrite:!1,side:mn}));kt.renderOrder=2.5,kt.name="passMarks",s(kt);const Q=mt.getAttribute("color"),at=n.flights.map((ct,Z)=>Al(n.flights,Z));g.push(ct=>{if(kt.visible=o.runPaths==="auto",!!kt.visible){for(const Z of R){const vt=n.flights[Z.flight],Ut=ct<vt.t0+vt.duration?0:El(ct,vt,at[Z.flight])*uf(1);let Lt=Z.vert0;for(let yt=0;yt<Z.vertCount;yt++,Lt++)Q.setXYZW(Lt,1,1,1,Ut)}Q.needsUpdate=!0}})}}{const T=hw(n.departures,n.anims,i.clips),w={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:e.ball.static===!0},R=new Ze({map:eR(),color:as,blending:ts,transparent:!0,depthWrite:!1}),L=new Se(new Xn(Sf,Sf).rotateX(-Math.PI/2),R);L.position.y=.02,L.renderOrder=3,s(L);const S=i.ballRadius??Qw,M=Zw*S,I=Ca*r,z=new Ze({color:as,blending:ts,transparent:!0,depthWrite:!1,depthTest:!1,side:mn}),H=new Se(new ho(Math.max(M-I/2,1e-4),M+I/2,40),z);H.frustumCulled=!1,H.renderOrder=8,s(H),g.push((W,et)=>{const B=dw(w,T,W);L.visible=o.highlight&&B.kind==="ring",H.visible=o.highlight&&(B.kind==="halo"||B.kind==="free");const X=Math.sin(W*2*Math.PI/1.6);if(B.kind==="ring"){const D=ym(d,B.player,W);L.position.x=u(D[0]),L.position.z=h(D[1]);const nt=1+.05*X;L.scale.x=L.scale.z=nt,R.opacity=.72+.18*X}else if(B.kind==="halo"||B.kind==="free"){const D=nf(d,W);H.position.set(u(D.pos[0]),S+D.height,h(D.pos[1])),H.quaternion.copy(et.quaternion),z.opacity=B.kind==="free"?Jw:.72+.18*X}})}const f=[];for(const T of((v=e.overlays)==null?void 0:v.zones)??[]){const w=new Se(new Xn(T.w,T.h).rotateX(-Math.PI/2).rotateY(Math.PI),new Ze({map:iR(T),transparent:!0,depthWrite:!1}));w.position.set(u(T.at[0]),.004,h(T.at[1])),w.renderOrder=.5,s(w),f.push(w)}const x=()=>{for(const T of f)T.visible=o.zones};return x(),{update(T,w){for(const R of g)R(T,w)},set(T){Object.assign(o,T),x()}}}const rR=.16,aR=.25,Cm=.8,Pm=.6,Im=8,oR=Pm*Im;function cR(i,t){return!(i>=0)||i>=Cm||t>oR*i?0:rR*Math.exp(-i/aR)*Math.sin(2*Math.PI*(t/Pm-Im*i))}function lR(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??hR})}return t}const hR=.6,Ef=.15,uR=.12,dR=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Af(i){return dR(Math.min(i,1-i)/uR)}function fR(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const a=[];for(let X=0;X<4;X++)a.push([n.getX(X),n.getY(X),n.getZ(X)]);const o=[0,1,2].map(X=>Math.min(...a.map(D=>D[X]))),c=[0,1,2].map(X=>Math.max(...a.map(D=>D[X]))),l=[0,1,2].map(X=>c[X]-o[X]),u=l.indexOf(Math.min(...l));if(l[u]>.001)return null;const[h,d]=[0,1,2].filter(X=>X!==u);if(!(l[h]>0&&l[d]>0))return null;const p=(X,D)=>{let nt=0,Y=1/0;for(let J=0;J<4;J++){const mt=Math.abs((a[J][h]-o[h])/l[h]-X)+Math.abs((a[J][d]-o[d])/l[d]-D);mt<Y&&(Y=mt,nt=J)}return nt},m=p(0,0),b=p(1,0),g=p(0,1),f=p(1,1),x=(X,D)=>s?D?s.getY(X):s.getX(X):0,E=new U().setFromMatrixScale(t).x,v=Math.max(2,Math.min(96,Math.ceil(l[h]*E/Ef))),T=Math.max(2,Math.min(96,Math.ceil(l[d]*E/Ef))),w=(v+1)*(T+1),R=new Float32Array(w*3),L=new Float32Array(w*2),S=new Float32Array(w*3),M=new Float32Array(w),I=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let X=0;X<=T;X++)for(let D=0;D<=v;D++){const nt=X*(v+1)+D,Y=D/v,J=X/T;R[nt*3+u]=a[0][u],R[nt*3+h]=o[h]+l[h]*Y,R[nt*3+d]=o[d]+l[d]*J;for(const mt of[0,1])L[nt*2+mt]=x(m,mt)*(1-Y)*(1-J)+x(b,mt)*Y*(1-J)+x(g,mt)*(1-Y)*J+x(f,mt)*Y*J;S.set(I,nt*3),M[nt]=Af(Y)*Af(J)}const z=[];for(let X=0;X<T;X++)for(let D=0;D<v;D++){const nt=X*(v+1)+D;z.push(nt,nt+1,nt+v+1,nt+1,nt+v+2,nt+v+1)}const H=new He;H.setAttribute("position",new Ae(R,3)),H.setAttribute("uv",new Ae(L,2)),H.setAttribute("normal",new Ae(S,3)),H.setIndex(z),H.userData.drillOwned=!0,i.geometry=H;const W=new Float32Array(R),et=new Float32Array(w*3),B=new U;for(let X=0;X<w;X++)B.fromArray(W,X*3).applyMatrix4(t).toArray(et,X*3);return{mesh:i,axis:u,rest:W,world:et,weight:M,scale:E}}function Tf(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new ae().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=Jn.zMin;i.placed.copy(i.goal.matrixWorld)}function pR(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const a=e(r.at,r.height);let o=0,c=1/0;i.forEach((l,u)=>{const h=l.position.distanceToSquared(a);h<c&&(c=h,o=u)}),s[o].push(r)}i.forEach((r,a)=>{if(!s[a].length)return;r.updateMatrixWorld(!0);const o=new ae().copy(r.matrixWorld).invert(),c=[];if(r.traverse(u=>{const h=u;if(!h.isMesh||!mR(h))return;const d=fR(h,new ae().multiplyMatrices(o,h.matrixWorld));d&&c.push(d)}),!c.length)return;const l={panels:c,goal:r,dirty:!1,placed:new ae,hits:s[a].map(u=>({t:u.t,w:e(u.at,u.height),p:new U}))};Tf(l,!0),n.push(l)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const a=gR(r.hits,s);if(!a){if(!r.dirty)continue;for(const c of r.panels)_R(c);r.dirty=!1;continue}Tf(r);const o=s-a.t;for(const c of r.panels){const l=c.mesh.geometry.getAttribute("position"),u=l.array;for(let h=0;h<c.weight.length;h++){const d=c.world[h*3]-a.p.x,p=c.world[h*3+1]-a.p.y,m=c.world[h*3+2]-a.p.z,b=cR(o,Math.hypot(d,p,m))*c.weight[h];u[h*3+c.axis]=c.rest[h*3+c.axis]+b/c.scale}l.needsUpdate=!0}r.dirty=!0}}}}const mR=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function gR(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<Cm&&(e=n);return e}function _R(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const ph=new U(0,1,0),Lm=.04,Dm=8,Br=.1,er=46,nr=25,wf=70;function ao(i,t){return new U(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function bo(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let ns=new Float64Array(64),Na=new Float64Array(64),Fa=new Float64Array(64);const Um=new U,Nm=new U,Ii=new U;function Rf(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+ns[r]/2),s=Math.max(s,-i[r]/(2*e)+ns[r]/2);return n+s}function Cf(i,t,e,n){let s=-1/0,r=1/0;for(let a=0;a<t;a++)s=Math.max(s,i[a]-(n-ns[a])*e),r=Math.min(r,i[a]+(n-ns[a])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function oo(i,t,e,n,s){const r=i.length;ns.length<r&&(ns=new Float64Array(r),Na=new Float64Array(r),Fa=new Float64Array(r));const a=Um.crossVectors(ph,e).normalize(),o=Nm.crossVectors(e,a).normalize(),c=Math.tan(s),l=Math.tan(n);for(let b=0;b<r;b++)Ii.subVectors(i[b],t),ns[b]=Ii.dot(e),Na[b]=Ii.dot(a),Fa[b]=Ii.dot(o);const u=Math.max(Math.max(Rf(Na,r,c),Rf(Fa,r,l))*(1+Lm),Dm),[h,d]=Cf(Na,r,c,u),[p,m]=Cf(Fa,r,l,u);return{dist:u,offset:new U().addScaledVector(a,h).addScaledVector(o,p),slack:new Zt(d,m)}}function bR(i,t,e,n,s){const r=Um.crossVectors(ph,e).normalize(),a=Nm.crossVectors(e,r).normalize(),o=Math.tan(s),c=Math.tan(n);let l=0;for(const u of i){Ii.subVectors(u,t);const h=Ii.dot(e);l=Math.max(l,Math.abs(Ii.dot(r))/o+h,Math.abs(Ii.dot(a))/c+h)}return Math.max(l*(1+Lm),Dm)}function Fm(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Br)?!0:r>s*(1+Br)?!1:n}function Om(i,t,e=er,n=nr){const s=new ln().setFromPoints(i),r=s.getCenter(new U),a=s.getSize(new U),{vHalf:o,hHalf:c}=bo(t),l=e*Math.PI/180,u=n*Math.PI/180,h=oo(i,r,ao(l,u),o,c).dist,d=oo(i,r,ao(l,u+Math.PI/2),o,c).dist,p=Fm(a.x,a.z,t.aspect<1,d<h*(1-Br));return{dist:p?d:h,alt:p}}function Mc(i,t,e,n=er,s=nr){const{dist:r}=Om(i,t,n,s);return 2*r*Math.tan(bo(t).vHalf)/e}function Pf(i=er){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const wl=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),If=.6,xR=.8,vR=30,yR=nr,MR=12,Lf=1.03,SR=1.5;function ER(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return Lf+(1-Lf)*(e*e*(3-2*e))}const AR=2,Rl=.5,TR=i=>{const t=Math.floor(Math.max(i,0)/Rl)*Rl;return[t,t+AR]},wR=.25,RR=.06;function CR(i,t){const e=new U;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(wR)}class PR{constructor(t,e=er,n=nr){un(this,"target",new U);un(this,"wanted",new U);un(this,"useAlt",!1);un(this,"pushAt",-1);un(this,"pushFor",0);un(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:ER(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new ln().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new U),a=s.getSize(new U),{vHalf:o,hHalf:c}=bo(this.camera),l=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?l:this.elevAt+(l-this.elevAt)*wl(e,If);const u=this.elevAt*Math.PI/180,h=(n.azDeg??this.azDeg)*Math.PI/180,d=h+Math.PI/2,p=ao(u,h),m=ao(u,d),b=oo(t,r,p,o,c),g=oo(t,r,m,o,c);!this.useAlt&&g.dist<b.dist*(1-Br)?this.useAlt=!0:this.useAlt&&b.dist<g.dist*(1-Br)?this.useAlt=!1:this.useAlt=Fm(a.x,a.z,this.camera.aspect<1,this.useAlt);const f=this.useAlt?g:b,x=this.useAlt?m:p,E=n.lookAt?r:r.clone().add(f.offset),v=n.lookAt?bR(t,r,x,o,c):f.dist;if(n.breath&&!n.lookAt){const R=new U().crossVectors(ph,x).normalize(),L=new U().crossVectors(x,R).normalize(),S=RR*f.dist,M=(I,z)=>{const H=Math.min(z,S);return Math.min(Math.max(I,-H),H)};E.addScaledVector(R,M(n.breath.dot(R),f.slack.x)).addScaledVector(L,M(n.breath.dot(L),f.slack.y))}const T=v*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(x).multiplyScalar(T).add(E);const w=wl(e,If);this.camera.position.lerp(this.wanted,w),this.target.lerp(E,w),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const IR=1.8,LR=34,DR=844,UR=1,km=4;function Df(i,t,e=er,n=nr){const{vHalf:s}=bo(t),r=e*Math.PI/180,{dist:a}=Om(i,t,e,n),o=LR*2*a*Math.tan(s)/(DR*IR*Math.cos(r));return Math.min(km,Math.max(UR,o))}function NR(i,t,e,n=er,s=nr,r=km){const a=u=>Nr(i,Math.min(r,u));let o=a(Df(t,e,n,s)),c=0,l=0;for(let u=0;u<8;u++){c++;const h=a(Df([...t,..._l(i,o)],e,n,s));if(l=Math.abs(h-o)/o,o=h,l<=.005)break}return{scale:o,rounds:c,residual:l,framed:[...t,..._l(i,o)]}}class FR{constructor(){un(this,"last",-1);un(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Sr={clips:0,schedule:0,build:0};let Uf=null;function OR(){return Uf??(Uf=fetch(po("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Qp(i)).catch(i=>{throw Uf=null,i}))}let Nf=null;function kR(i){return Nf??(Nf=eh().loadAsync(po("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Nf=null,t}))}function BR(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}async function HR(i,t,e={}){var N,ut;const n=performance.now(),s=aE(i),r=await OR();Sr.clips=performance.now()-n;const a=e.stage??jS(t),o=new Ln,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([tt,rt])=>new U(tt*s.pitch.width/2,0,rt*s.pitch.length/2)),l=s.players.map(tt=>new U(tt.start[0]-s.pitch.width/2,0,tt.start[1]-s.pitch.length/2)),u=[...c,...l],h=()=>e.bodyScale??NR(s,u,a.camera,e.elev,e.az).scale,d=tt=>[...u,..._l(s,tt)],p=a.size();let m=h(),b=d(m);Dd(.35*m);let g=Nr(s,m);const f=performance.now(),x=((N=e.schedules)==null?void 0:N.get(g))??e1(s,r,g);(ut=e.schedules)==null||ut.set(g,x),Sr.schedule=performance.now()-f;const E=aS(s),v=(tt=e.elev??0)=>tt>=wf?[...b,...E]:b;let T=Mc(v(),a.camera,a.size().height,e.elev,e.az),w=Pf(e.elev);const R=_S(s.pitch.width,s.pitch.length),{toWorld:L,goals:S,cones:M,setWorld:I,setMasts:z}=await BS(o,s,a.renderer.capabilities.getMaxAnisotropy(),m,R),H=pR(S,lR(x.flights),L);let W=b.slice(u.length);a.fitShadow(b),a.setFog(mS(s.pitch.width,s.pitch.length)),a.setHorizon(R),a.setSky(!1);const et=await $S(o,s.players.length),B=new Map,X=new Map;s.players.forEach((tt,rt)=>{const it=et[rt];B.set(tt.id,it),it.root.rotation.order="YXZ",it.root.scale.setScalar(m),nE(it,s.teams[tt.team].kit.primary),it.root.position.copy(L(tt.start));const Bt=nS(.9);Bt.scale.setScalar(m),Bt.position.x=it.root.position.x,Bt.position.z=it.root.position.z,o.add(Bt),X.set(tt.id,Bt)});const D=(await kR()).clone();D.scale.setScalar(m),o.add(D);const nt=jw({root:o,mesh:D,bodyScale:m,radius:.11*m,resolution:a.size()}),Y=new PR(a.camera,e.elev,e.az);Y.armPushIn(SR,performance.now()/1e3);let J="fit",mt=-1,kt=[];const Q=new U,at=new U,ct=new U;let Z=!1,vt=[],Ut=-1/0;const Lt=new a1(s.duration,e.loop??!0),yt=new FR,Gt=new Map(s.players.map(tt=>[tt.id,tt.role])),{applyAnim:Re,cueAt:k}=r1(r,x.anims,Gt,x.bounces),Ie=o1(x.turns,s.players.map(tt=>[tt.id,tt.role==="keeper"?ke(tt.start,s.ball.start):0])),Qt=Ie.heading,oe=Ie.rateOf,Mt=new Map(s.players.map(tt=>[tt.id,tt.start]));function ge(){const tt=new Set(o.children);return{built:sR({scene:o,drill:s,schedule:x,clips:r,headingAt:it=>Qt.get(it)??0,search:e.search,pathM:T,pathWidthK:w,ballRadius:.11*m,goalScale:g}),owned:o.children.filter(it=>!tt.has(it))}}let Wt=ge();const P={},A={update:(tt,rt)=>Wt.built.update(tt,rt),set:tt=>{Object.assign(P,tt),Wt.built.set(tt)}};function $(){for(const tt of Wt.owned)o.remove(tt),Bp(tt);Wt=ge(),Wt.built.set(P)}const lt=v1(),dt=[],ot=w1(),Xt=()=>{ot.reset(),lt.reset()};Lt.onSeek(Xt),Lt.onLoop(Xt);const Pt=Tw(Lt);function Nt(){const tt=h();if(tt!==m){m=tt,b=d(m),W=b.slice(u.length),g=Nr(s,m),Dd(.35*m);for(const rt of B.values())rt.root.scale.setScalar(m);for(const rt of X.values())rt.scale.setScalar(m);D.scale.setScalar(m);for(const rt of M)rt.scale.setScalar(m);for(const rt of S)rt.scale.setScalar(g);a.fitShadow(b),Xt()}nt.resize(m,.11*m,a.size()),T=Mc(v(Y.elev),a.camera,a.size().height,Y.elev,Y.az),$(),a.rule.wake()}let ce=0;const bt=a.onBox(()=>{ce||(ce=requestAnimationFrame(()=>{ce=0,Nt()}))}),Ft=a.size();(Ft.width!==p.width||Ft.height!==p.height)&&Nt();const Kt=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:B,heading:Qt,camera:a.camera,ball:D,schedule:x,goals:S,bodyScale:m,lockDbg:Kt},__pathMetrics:()=>({metresPerPx:T,widthK:w,runHalfM:1.6*T*w/2,passHalfM:2.2*T*w/2})});function ie(tt,rt=30,it=.12,Bt=4,Ct=1){const It=[];for(const[Dt,Vt]of B)Vt.root.traverse(te=>{te.isBone&&/foot/i.test(te.name)&&It.push({id:Dt,name:te.name,bone:te})});Lt.pause(),Lt.seek(0);for(let Dt=0;Dt<90;Dt++)a.step(1/60);Lt.play();const xt=1/rt,wt=Math.min(tt??s.duration,s.duration),jt=Math.max(0,Math.round(wt*rt)-1),St=It.map(()=>[]),re=new U;for(let Dt=0;Dt<=jt;Dt++){for(let Vt=0;Vt<It.length;Vt++){const te=It[Vt].bone.matrixWorld.elements;re.set(te[12],te[13],te[14]);const Yt=B.get(It[Vt].id).root.worldToLocal(re.clone());St[Vt].push([Dt*xt,te[12],te[13],te[14],Yt.x,Yt.z])}a.step(xt)}Lt.pause();const Jt=(Dt,Vt)=>{var te;return((te=k(Dt,Vt))==null?void 0:te.clip)??"idle"},Et=[];return It.forEach((Dt,Vt)=>{const te=(ht,zt)=>{if(zt-ht<Bt)return;const At=St[Vt].slice(ht,zt);let y=0,F=0;for(let V=1;V<At.length;V++)y=Math.max(y,Math.hypot(At[V][1]-At[0][1],At[V][3]-At[0][3])),F+=Math.hypot(At[V][4]-At[V-1][4],At[V][5]-At[V-1][5])/xt;Et.push({player:Dt.id,foot:Dt.name,t0:+At[0][0].toFixed(2),t1:+At[At.length-1][0].toFixed(2),drift:+y.toFixed(3),localSpeed:+(F/(At.length-1)).toFixed(2),clip0:Jt(Dt.id,At[0][0]),clip1:Jt(Dt.id,At[At.length-1][0])})},Yt=St[Vt].map((ht,zt)=>zt===0?1/0:Math.hypot(ht[1]-St[Vt][zt-1][1],ht[3]-St[Vt][zt-1][3])/xt);let Ee=-1;St[Vt].forEach((ht,zt)=>{const At=ht[2]<it,y=zt>0&&Jt(Dt.id,ht[0])!==Jt(Dt.id,St[Vt][zt-1][0]),F=Yt[zt]>Ct&&zt>0&&Yt[zt-1]>Ct;Ee>=0&&(!At||y||F)&&(te(Ee,zt),Ee=-1),Ee<0&&At&&Yt[zt]<Ct&&(Ee=zt)}),Ee>=0&&te(Ee,St[Vt].length)}),Et.sort((Dt,Vt)=>Vt.drift-Dt.drift),{feet:It.map(Dt=>({id:Dt.id,name:Dt.name})),hPlant:it,fps:rt,phases:Et}}e.embed||Object.assign(window,{__footAudit:ie}),e.embed&&a.rule.enable();const Ot=new Map,de=new U;let se=0;const Te=e.sfx?Sw(x.flights):[];let j=0;a.scene.add(o);const C=(tt,rt)=>{var re,Jt;Lt.advance(tt);const it=Lt.t,Bt=Lt.playing?tt:0,Ct=x.attachTo(it),It=qa({t:it,holderId:Ct,holderRoot:Ct?Mt.get(Ct):null,holderHeading:Ct?Qt.get(Ct):0,ballStart:s.ball.start,flights:x.flights,departures:x.departures,arrivals:x.arrivals}).pos;for(const Et of s.players){const Dt=B.get(Et.id);let Vt=Et.start,te=0;for(const gt of x.moves[Et.id]??[])if(it>=gt.t0){const Tt=En(gt,it);Vt=Tt.pos,te=Tt.speed}const Yt=Jp(x.dives,x.moves[Et.id],Et.id,it),Ee=Yt!==null;Yt&&(Vt=Yt),Dt.root.position.copy(L(Vt));const ht=x.moves[Et.id]??[],zt=Ee?0:hE(ht,it);Dt.root.rotation.x=0,Dt.root.rotation.z=0,Ee||(Dt.root.position.y-=pE(ht,it)-zT(x.bounces,Et.id,it)*m),Mt.set(Et.id,Vt);let At=null,y=!1;for(const gt of x.faces)gt.player===Et.id&&it>=gt.t0&&(At=gt.until===void 0||it<=gt.until?gt.at:null,gt.lock&&it>=gt.lock[0]&&it<=gt.lock[1]&&(y=!0));const F=At!==null&&Ji(Vt,At),V=yE(Vt,It,F,Et.id===Ct),K=F?ke(Vt,At):V??Qt.get(Et.id),{h:O,clipYaw:st}=Ie.step(Et.id,it,Bt,te,K,y,!F&&V!==null);Dt.root.rotation.y=mE(O,st),Re(Et.id,Dt,it,Bt,te);const ft=Yu(Dt);if(ft.length){const gt=ot.tilt(Et.id,Ee?[0,0]:cE(ht,it),Qt.get(Et.id),zt,Bt);ef(Dt.root,ft[0],gt.pitch,0,gt.roll)}const _t=JS(Dt);if(_t.length&&!Ee){Dt.root.updateMatrixWorld(!0);for(let $t=0;$t<_t.length;$t++){const be=_t[$t].matrixWorld.elements;dt[$t]=[be[12],be[13],be[14]]}dt.length=_t.length;const gt=k(Et.id,it),Tt=x1((gt==null?void 0:gt.clip)??null,gt?(re=r.clips[gt.clip])==null?void 0:re.category:void 0,_1(ht,it)),[Ht,le]=lt.step(Et.id,dt,[Dt.root.position.x,Dt.root.position.z],it,Bt,Tt,m);Dt.root.position.x+=Ht,Dt.root.position.z+=le,Kt&&Kt.set(Et.id,[Tt?1:0,Math.hypot(Ht,le),lt.foot(Et.id),te,lt.rootSpeed(Et.id)])}const pt=X.get(Et.id);if(pt.position.x=Dt.root.position.x,pt.position.z=Dt.root.position.z,Et.id===Ct){const gt=xw(x.arrivals,Et.id,it),Tt=gt>=0?QS(Dt)[gt]:void 0;if(Tt){Dt.root.updateMatrixWorld(!0);const Ht=Tt.matrixWorld.elements;de.set(Ht[12],Ht[13],Ht[14]),se=Em(x.arrivals,x.departures,Et.id,it)}}}const xt=qa({t:it,holderId:Ct,holderRoot:Ct?Mt.get(Ct):null,holderHeading:Ct?Qt.get(Ct):0,ballStart:s.ball.start,flights:x.flights,departures:x.departures,arrivals:x.arrivals});D.position.copy(L(xt.pos,.11*m+xt.height)),se>0&&(D.position.lerp(de,se),se=0),nt.update({pos:D.position,height:xt.height,t:it,dt:Bt,apex:xt.apex,speed:xt.speed,held:Ct!==null&&vw(x.arrivals,x.departures,Ct,it)}),e.sfx&&(Pt(e.sfx,Te,j,it,Lt.playing,xt.height,xt.speed),j=it),A.update(it,a.camera),H.update(it);for(const Et of s.players){const Dt=B.get(Et.id),Vt=ZS(Dt);if(!Vt)continue;const te=AT(x.faces,Et.id,it),Yt=te?L(te):D.position,Ee=gE(Math.atan2(Yt.x-Dt.root.position.x,Yt.z-Dt.root.position.z)-Qt.get(Et.id)+xE(oe.get(Et.id)??0)),ht=Ot.get(Et.id)??0,zt=Bt>0?ht+(Ee-ht)*.3:ht;Ot.set(Et.id,zt);const At=Yu(Dt),y=At.length>1?ot.shoulder(Et.id,zt,Bt):0;At.length>1&&ef(Dt.root,At[1],0,y,0),P1(Vt,-(zt-y))}const wt=[...B.values()].map(Et=>new U(Et.root.position.x,0,Et.root.position.z)),jt=a.rule.snap()?1/0:tt,St=rt/1e3;if(J==="broadcast"){let Et=-1/0;for(const Vt of x.departures)it>=Vt.contact&&Vt.contact>Et&&(Et=Vt.contact);Et!==Ut&&(Ut=Et,vt=s.players.filter(Vt=>L(Mt.get(Vt.id)??Vt.start).distanceTo(D.position)<=MR).map(Vt=>Vt.id)),!Z||jt===1/0?(ct.copy(D.position),Z=!0):ct.lerp(D.position,wl(tt,xR));const Dt=vt.length?vt.map(Vt=>{const te=B.get(Vt);return new U((te==null?void 0:te.root.position.x)??0,0,(te==null?void 0:te.root.position.z)??0)}):wt;Y.frame([...Dt,D.position.clone()],jt,{now:St,lookAt:ct.clone(),elevDeg:vR,azDeg:yR})}else{const[Et,Dt]=TR(it);if(Et!==mt){mt=Et,kt=[];const Vt=[];for(let te=Et;te<=Dt+1e-9;te+=Rl){const Yt=new Map;for(const At of s.players){let y=At.start;for(const V of x.moves[At.id]??[])te>=V.t0&&(y=En(V,te).pos);Yt.set(At.id,y);const F=L(y);kt.push(new U(F.x,0,F.z)),Math.abs(F.x)<=s.pitch.width/2&&Math.abs(F.z)<=s.pitch.length/2&&Vt.push(new U(F.x,0,F.z))}const Ee=x.attachTo(te),ht=qa({t:te,holderId:Ee,holderRoot:Ee?Yt.get(Ee)??null:null,holderHeading:Ee?Qt.get(Ee)??0:0,ballStart:s.ball.start,flights:x.flights,departures:x.departures,arrivals:x.arrivals}),zt=L(ht.pos);Vt.push(new U(zt.x,0,zt.z))}Q.copy(CR(Vt,at))}wt.push(...kt),wt.push(...c,...W),Y.elevNow>=wf&&wt.push(...E),Y.frame([...wt,D.position.clone()],jt,{now:St,breath:Q})}yt.tick(rt),BR(!!e.embed,`t ${it.toFixed(1)}s  fps ${yt.avg.toFixed(0)}
[space] play/pause  [r] restart`),(Jt=e.onFrame)==null||Jt.call(e,it,rt)};a.start(C);const _=tt=>{tt.code==="Space"&&(Lt.playing?Lt.pause():Lt.play()),tt.code==="KeyR"&&Lt.seek(0)};e.embed||addEventListener("keydown",_);function G(tt){tt!==J&&(J=tt,I(!0),a.setSky(tt==="broadcast"),z(tt==="broadcast"),Z=!1,Ut=-1/0,a.rule.wake())}function q(tt,rt=Y.az){tt===Y.elev&&rt===Y.az||(Y.setElev(tt),Y.setAz(rt),T=Mc(v(tt),a.camera,a.size().height,tt,rt),w=Pf(tt),$(),a.rule.wake())}return Sr.build=performance.now()-n-Sr.clips-Sr.schedule,{timeline:Lt,step:tt=>a.step(tt),stage:a,overlays:A,setCamera:q,setFollow:G,setPushIn:tt=>Y.armPushIn(tt,performance.now()/1e3),dispose(){removeEventListener("keydown",_),bt(),ce&&(cancelAnimationFrame(ce),ce=0),a.scene.remove(o),qS(o,[...et.map(tt=>tt.root),D,...S]),a.setFog(null),a.setHorizon(null),a.setSky(!0),e.stage?a.park(C):a.dispose()}}}export{as as B,pn as P,Yy as W,po as a,Sr as b,jS as c,ln as d,Of as e,HR as r};
