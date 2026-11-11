var n_=Object.defineProperty;var i_=(i,t,e)=>t in i?n_(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Qe=(i,t,e)=>i_(i,typeof t!="symbol"?t+"":t,e);const s_="modulepreload",r_=function(i,t){return new URL(i,t).href},rh={},MP=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(e.map(h=>{if(h=r_(h,n),h in rh)return;rh[h]=!0;const u=h.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!n)for(let b=a.length-1;b>=0;b--){const p=a[b];if(p.href===h&&(!u||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const _=document.createElement("link");if(_.rel=u?"stylesheet":s_,u||(_.as="script"),_.crossOrigin="",_.href=h,l&&_.setAttribute("nonce",l),document.head.appendChild(_),u)return new Promise((b,p)=>{_.addEventListener("load",b),_.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const SP=2;const AP=2;const EP=1;const oh="attached",o_="detached";const TP=1e3;const wP="",He="srgb",vn="srgb-linear",za="linear",Be="srgb";const ah="300 es";class Ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const co=Math.PI/180,vr=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function gu(i,t){return(i%t+t)%t}function a_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function c_(i,t,e){return i!==t?(e-i)/(t-i):0}function lo(i,t,e){return(1-e)*i+e*t}function l_(i,t,e,n){return lo(i,t,1-Math.exp(-e*n))}function u_(i,t=1){return t-Math.abs(gu(i,t*2)-t)}function h_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function f_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function d_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function p_(i,t){return i+Math.random()*(t-i)}function m_(i){return i*(.5-Math.random())}function g_(i){i!==void 0&&(ch=i);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function __(i){return i*co}function b_(i){return i*vr}function x_(i){return(i&i-1)===0&&i!==0}function v_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function y_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function M_(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),g=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*g,a*l);break;case"YXY":i.set(c*g,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Am={DEG2RAD:co,RAD2DEG:vr,generateUUID:ii,clamp:pe,euclideanModulo:gu,mapLinear:a_,inverseLerp:c_,lerp:lo,damp:l_,pingpong:u_,smoothstep:h_,smootherstep:f_,randInt:d_,randFloat:p_,randFloatSpread:m_,seededRandom:g_,degToRad:__,radToDeg:b_,isPowerOfTwo:x_,ceilPowerOfTwo:v_,floorPowerOfTwo:y_,setQuaternionFromProperEuler:M_,normalize:Ue,denormalize:ti};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,c,l){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],g=n[5],_=n[8],b=s[0],p=s[3],d=s[6],v=s[1],M=s[4],y=s[7],T=s[2],R=s[5],w=s[8];return r[0]=o*b+a*v+c*T,r[3]=o*p+a*M+c*R,r[6]=o*d+a*y+c*w,r[1]=l*b+h*v+u*T,r[4]=l*p+h*M+u*R,r[7]=l*d+h*y+u*w,r[2]=f*b+g*v+_*T,r[5]=f*p+g*M+_*R,r[8]=f*d+g*y+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,g=l*r-o*c,_=e*u+n*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return t[0]=u*b,t[1]=(s*l-h*n)*b,t[2]=(a*n-s*o)*b,t[3]=f*b,t[4]=(h*e-s*c)*b,t[5]=(s*r-a*e)*b,t[6]=g*b,t[7]=(n*c-l*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new he;function Em(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function go(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function S_(){const i=go("canvas");return i.style.display="block",i}const lh={};function fr(i){i in lh||(lh[i]=!0,console.warn(i))}function A_(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function E_(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function T_(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const uh=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hh=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function w_(){const i={enabled:!0,workingColorSpace:vn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Be&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Be&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?za:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vn]:{primaries:t,whitePoint:n,transfer:za,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:uh,fromXYZ:hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}const we=w_();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ks;class R_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ks===void 0&&(ks=go("canvas")),ks.width=t.width,ks.height=t.height;const n=ks.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ks}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=go("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let C_=0;class Tm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ii(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?R_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let I_=0;class en extends Ls{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,l=en.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=ii(),this.name="",this.source=new Tm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=300;en.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],g=c[5],_=c[9],b=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(_+p)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,y=(g+1)/2,T=(d+1)/2,R=(h+f)/4,w=(u+b)/4,D=(_+p)/4;return M>y&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=w/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=D/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-_)*(p-_)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(u-b)/v,this.z=(f-h)/v,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends Ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Is extends P_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wm extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class L_ extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],g=r[o+1],_=r[o+2],b=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=b;return}if(u!==b||c!==f||l!==g||h!==_){let p=1-a;const d=c*f+l*g+h*_+u*b,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,d*v);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T}const y=a*v;if(c=c*p+f*y,l=l*p+g*y,h=h*p+_*y,u=u*p+b*y,p===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*g-l*f,t[e+1]=c*_+h*f+l*u-a*g,t[e+2]=l*_+h*g+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*g*_,this._y=l*g*u-f*h*_,this._z=l*h*_+f*g*u,this._w=l*h*u-f*g*_;break;case"YXZ":this._x=f*h*u+l*g*_,this._y=l*g*u-f*h*_,this._z=l*h*_-f*g*u,this._w=l*h*u+f*g*_;break;case"ZXY":this._x=f*h*u-l*g*_,this._y=l*g*u+f*h*_,this._z=l*h*_+f*g*u,this._w=l*h*u-f*g*_;break;case"ZYX":this._x=f*h*u-l*g*_,this._y=l*g*u+f*h*_,this._z=l*h*_-f*g*u,this._w=l*h*u+f*g*_;break;case"YZX":this._x=f*h*u+l*g*_,this._y=l*g*u+f*h*_,this._z=l*h*_-f*g*u,this._w=l*h*u-f*g*_;break;case"XZY":this._x=f*h*u-l*g*_,this._y=l*g*u-f*h*_,this._z=l*h*_+f*g*u,this._w=l*h*u+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>u){const g=2*Math.sqrt(1+n-a-u);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>u){const g=2*Math.sqrt(1+a-n-u);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+u-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new H,fh=new Oe;class dn{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(t.matrixWorld),this.expandByPoint(Kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Kn),Kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Co.subVectors(this.max,Fr),Bs.subVectors(t.a,Fr),zs.subVectors(t.b,Fr),Gs.subVectors(t.c,Fr),qi.subVectors(zs,Bs),Ki.subVectors(Gs,zs),us.subVectors(Bs,Gs);let e=[0,-qi.z,qi.y,0,-Ki.z,Ki.y,0,-us.z,us.y,qi.z,0,-qi.x,Ki.z,0,-Ki.x,us.z,0,-us.x,-qi.y,qi.x,0,-Ki.y,Ki.x,0,-us.y,us.x,0];return!bc(e,Bs,zs,Gs,Co)||(e=[1,0,0,0,1,0,0,0,1],!bc(e,Bs,zs,Gs,Co))?!1:(Io.crossVectors(qi,Ki),e=[Io.x,Io.y,Io.z],bc(e,Bs,zs,Gs,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ei=[new H,new H,new H,new H,new H,new H,new H,new H],Kn=new H,Ro=new dn,Bs=new H,zs=new H,Gs=new H,qi=new H,Ki=new H,us=new H,Fr=new H,Co=new H,Io=new H,hs=new H;function bc(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){hs.fromArray(i,r);const a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=t.dot(hs),l=e.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const D_=new dn,Nr=new H,xc=new H;class jn{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):D_.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(xc)),this.expandByPoint(Nr.copy(t.center).sub(xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new H,vc=new H,Po=new H,$i=new H,yc=new H,Lo=new H,Mc=new H;class sc{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vc.copy(t).add(e).multiplyScalar(.5),Po.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(vc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Po),a=$i.dot(this.direction),c=-$i.dot(Po),l=$i.lengthSq(),h=Math.abs(1-o*o);let u,f,g,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const b=1/h;u*=b,f*=b,g=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),g=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),g=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),g=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vc).addScaledVector(Po,f),g}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,r){yc.subVectors(e,t),Lo.subVectors(n,t),Mc.crossVectors(yc,Lo);let o=this.direction.dot(Mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);const c=a*this.direction.dot(Lo.crossVectors($i,Lo));if(c<0)return null;const l=a*this.direction.dot(yc.cross($i));if(l<0||c+l>o)return null;const h=-a*$i.dot(Mc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,c,l,h,u,f,g,_,b,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,g,_,b,p)}set(t,e,n,s,r,o,a,c,l,h,u,f,g,_,b,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=g,d[7]=_,d[11]=b,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hs.setFromMatrixColumn(t,0).length(),r=1/Hs.setFromMatrixColumn(t,1).length(),o=1/Hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,g=o*u,_=a*h,b=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=g+_*l,e[5]=f-b*l,e[9]=-a*c,e[2]=b-f*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,g=c*u,_=l*h,b=l*u;e[0]=f+b*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=b+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,g=c*u,_=l*h,b=l*u;e[0]=f-b*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=b-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,g=o*u,_=a*h,b=a*u;e[0]=c*h,e[4]=_*l-g,e[8]=f*l+b,e[1]=c*u,e[5]=b*l+f,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,g=o*l,_=a*c,b=a*l;e[0]=c*h,e[4]=b-f*u,e[8]=_*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*u+_,e[10]=f-b*u}else if(t.order==="XZY"){const f=o*c,g=o*l,_=a*c,b=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+b,e[5]=o*h,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*h,e[10]=b*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(F_,t,N_)}lookAt(t,e,n){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Yi.crossVectors(n,Tn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Yi.crossVectors(n,Tn)),Yi.normalize(),Do.crossVectors(Tn,Yi),s[0]=Yi.x,s[4]=Do.x,s[8]=Tn.x,s[1]=Yi.y,s[5]=Do.y,s[9]=Tn.y,s[2]=Yi.z,s[6]=Do.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],g=n[13],_=n[2],b=n[6],p=n[10],d=n[14],v=n[3],M=n[7],y=n[11],T=n[15],R=s[0],w=s[4],D=s[8],A=s[12],E=s[1],P=s[5],C=s[9],z=s[13],U=s[2],W=s[6],O=s[10],B=s[14],N=s[3],Y=s[7],k=s[11],ct=s[15];return r[0]=o*R+a*E+c*U+l*N,r[4]=o*w+a*P+c*W+l*Y,r[8]=o*D+a*C+c*O+l*k,r[12]=o*A+a*z+c*B+l*ct,r[1]=h*R+u*E+f*U+g*N,r[5]=h*w+u*P+f*W+g*Y,r[9]=h*D+u*C+f*O+g*k,r[13]=h*A+u*z+f*B+g*ct,r[2]=_*R+b*E+p*U+d*N,r[6]=_*w+b*P+p*W+d*Y,r[10]=_*D+b*C+p*O+d*k,r[14]=_*A+b*z+p*B+d*ct,r[3]=v*R+M*E+y*U+T*N,r[7]=v*w+M*P+y*W+T*Y,r[11]=v*D+M*C+y*O+T*k,r[15]=v*A+M*z+y*B+T*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],g=t[14],_=t[3],b=t[7],p=t[11],d=t[15];return _*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*g-n*c*g)+b*(+e*c*g-e*l*f+r*o*f-s*o*g+s*l*h-r*c*h)+p*(+e*l*u-e*a*g-r*o*u+n*o*g+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],g=t[11],_=t[12],b=t[13],p=t[14],d=t[15],v=u*p*l-b*f*l+b*c*g-a*p*g-u*c*d+a*f*d,M=_*f*l-h*p*l-_*c*g+o*p*g+h*c*d-o*f*d,y=h*b*l-_*u*l+_*a*g-o*b*g-h*a*d+o*u*d,T=_*u*c-h*b*c-_*a*f+o*b*f+h*a*p-o*u*p,R=e*v+n*M+s*y+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=v*w,t[1]=(b*f*r-u*p*r-b*s*g+n*p*g+u*s*d-n*f*d)*w,t[2]=(a*p*r-b*c*r+b*s*l-n*p*l-a*s*d+n*c*d)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*g-n*c*g)*w,t[4]=M*w,t[5]=(h*p*r-_*f*r+_*s*g-e*p*g-h*s*d+e*f*d)*w,t[6]=(_*c*r-o*p*r-_*s*l+e*p*l+o*s*d-e*c*d)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*g+e*c*g)*w,t[8]=y*w,t[9]=(_*u*r-h*b*r-_*n*g+e*b*g+h*n*d-e*u*d)*w,t[10]=(o*b*r-_*a*r+_*n*l-e*b*l-o*n*d+e*a*d)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*g-e*a*g)*w,t[12]=T*w,t[13]=(h*b*s-_*u*s+_*n*f-e*b*f-h*n*p+e*u*p)*w,t[14]=(_*a*s-o*b*s-_*n*c+e*b*c+o*n*p-e*a*p)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,g=r*h,_=r*u,b=o*h,p=o*u,d=a*u,v=c*l,M=c*h,y=c*u,T=n.x,R=n.y,w=n.z;return s[0]=(1-(b+d))*T,s[1]=(g+y)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(g-y)*R,s[5]=(1-(f+d))*R,s[6]=(p+v)*R,s[7]=0,s[8]=(_+M)*w,s[9]=(p-v)*w,s[10]=(1-(f+b))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Hs.set(s[0],s[1],s[2]).length();const o=Hs.set(s[4],s[5],s[6]).length(),a=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const l=1/r,h=1/o,u=1/a;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(a===2e3)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===2001)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,g=(n+s)*h;let _,b;if(a===2e3)_=(o+r)*u,b=-2*u;else if(a===2001)_=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=b,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hs=new H,$n=new se,F_=new H(0,0,0),N_=new H(1,1,1),Yi=new H,Do=new H,Tn=new H,dh=new se,ph=new Oe;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let U_=0;const mh=new H,Vs=new Oe,wi=new se,Fo=new H,Ur=new H,O_=new H,k_=new Oe,gh=new H(1,0,0),_h=new H(0,1,0),bh=new H(0,0,1),xh={type:"added"},B_={type:"removed"},Ws={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Ge extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ge.DEFAULT_UP.clone();const t=new H,e=new Vn,n=new Oe,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new he}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fo.copy(t):Fo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Ur,Fo,this.up):wi.lookAt(Fo,Ur,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(wi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,O_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,k_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ge.DEFAULT_UP=new H(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new H,Ri=new H,Ac=new H,Ci=new H,js=new H,Xs=new H,vh=new H,Ec=new H,Tc=new H,wc=new H,Rc=new de,Cc=new de,Ic=new de;class kn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Yn.subVectors(t,e),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Yn.subVectors(s,e),Ri.subVectors(n,e),Ac.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(Ri),c=Yn.dot(Ac),l=Ri.dot(Ri),h=Ri.dot(Ac),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,g=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(o,Ci.y),c.addScaledVector(a,Ci.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,n),Ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(t,e,n,s){return Yn.subVectors(n,e),Ri.subVectors(t,e),Yn.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Yn.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return kn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return kn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return kn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return kn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return kn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,n),Xs.subVectors(r,n),Ec.subVectors(t,n);const c=js.dot(Ec),l=Xs.dot(Ec);if(c<=0&&l<=0)return e.copy(n);Tc.subVectors(t,s);const h=js.dot(Tc),u=Xs.dot(Tc);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(js,o);wc.subVectors(t,r);const g=js.dot(wc),_=Xs.dot(wc);if(_>=0&&g<=_)return e.copy(r);const b=g*l-c*_;if(b<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Xs,a);const p=h*_-g*u;if(p<=0&&u-h>=0&&g-_>=0)return vh.subVectors(r,s),a=(u-h)/(u-h+(g-_)),e.copy(s).addScaledVector(vh,a);const d=1/(p+b+f);return o=b*d,a=f*d,e.copy(n).addScaledVector(js,o).addScaledVector(Xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},No={h:0,s:0,l:0};function Pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=we.workingColorSpace){if(t=gu(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pc(o,r,t+1/3),this.g=Pc(o,r,t),this.b=Pc(o,r,t-1/3)}return we.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Cm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return we.fromWorkingColorSpace(fn.copy(this),t),Math.round(pe(fn.r*255,0,255))*65536+Math.round(pe(fn.g*255,0,255))*256+Math.round(pe(fn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=He){we.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,s=fn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(No);const n=lo(Ji.h,No.h,e),s=lo(Ji.s,No.s,e),r=lo(Ji.l,No.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new $t;$t.NAMES=Cm;let z_=0;class Gn extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new H,Uo=new qt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Im extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pm extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let G_=0;const Dn=new se,Lc=new Ge,qs=new H,wn=new dn,Or=new dn,rn=new H;class je extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Em(t)?Pm:Im)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(wn.min,Or.min),wn.expandByPoint(rn),rn.addVectors(wn.max,Or.max),wn.expandByPoint(rn)):(wn.expandByPoint(Or.min),wn.expandByPoint(Or.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(qs.fromBufferAttribute(t,l),rn.add(qs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new H,c[D]=new H;const l=new H,h=new H,u=new H,f=new qt,g=new qt,_=new qt,b=new H,p=new H;function d(D,A,E){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,E),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,E),h.sub(l),u.sub(l),g.sub(f),_.sub(f);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(P),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(P),a[D].add(b),a[A].add(b),a[E].add(b),c[D].add(p),c[A].add(p),c[E].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,A=v.length;D<A;++D){const E=v[D],P=E.start,C=E.count;for(let z=P,U=P+C;z<U;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new H,y=new H,T=new H,R=new H;function w(D){T.fromBufferAttribute(s,D),R.copy(T);const A=a[D];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(R,A);const P=y.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,A=v.length;D<A;++D){const E=v[D],P=E.start,C=E.count;for(let z=P,U=P+C;z<U;z+=3)w(t.getX(z+0)),w(t.getX(z+1)),w(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,c=new H,l=new H,h=new H,u=new H;if(t)for(let f=0,g=t.count;f<g;f+=3){const _=t.getX(f+0),b=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let g=0,_=0;for(let b=0,p=c.length;b<p;b++){a.isInterleavedBufferAttribute?g=c[b]*a.data.stride+a.offset:g=c[b]*h;for(let d=0;d<h;d++)f[_++]=l[g++]}return new Re(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],g=t(f,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const g=l[u];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new se,fs=new sc,Oo=new jn,Mh=new H,ko=new H,Bo=new H,zo=new H,Dc=new H,Go=new H,Sh=new H,Ho=new H;class ye extends Ge{constructor(t=new je,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Dc.fromBufferAttribute(u,t),o?Go.addScaledVector(Dc,h):Go.addScaledVector(Dc.sub(e),h))}e.add(Go)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(r),fs.copy(t.ray).recast(t.near),!(Oo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Oo,Mh)===null||fs.origin.distanceToSquared(Mh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),fs.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){const p=f[_],d=o[p.materialIndex],v=Math.max(p.start,g.start),M=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let y=v,T=M;y<T;y+=3){const R=a.getX(y),w=a.getX(y+1),D=a.getX(y+2);s=Vo(this,d,t,n,l,h,u,R,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let p=_,d=b;p<d;p+=3){const v=a.getX(p),M=a.getX(p+1),y=a.getX(p+2);s=Vo(this,o,t,n,l,h,u,v,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){const p=f[_],d=o[p.materialIndex],v=Math.max(p.start,g.start),M=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let y=v,T=M;y<T;y+=3){const R=y,w=y+1,D=y+2;s=Vo(this,d,t,n,l,h,u,R,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let p=_,d=b;p<d;p+=3){const v=p,M=p+1,y=p+2;s=Vo(this,o,t,n,l,h,u,v,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function H_(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;Ho.copy(a),Ho.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ho);return l<e.near||l>e.far?null:{distance:l,point:Ho.clone(),object:i}}function Vo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ko),i.getVertexPosition(c,Bo),i.getVertexPosition(l,zo);const h=H_(i,t,e,n,ko,Bo,zo,Sh);if(h){const u=new H;kn.getBarycoord(Sh,ko,Bo,zo,u),s&&(h.uv=kn.getInterpolatedAttribute(s,a,c,l,u,new qt)),r&&(h.uv1=kn.getInterpolatedAttribute(r,a,c,l,u,new qt)),o&&(h.normal=kn.getInterpolatedAttribute(o,a,c,l,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new H,materialIndex:0};kn.getNormal(ko,Bo,zo,f.normal),h.face=f,h.barycoord=u}return h}class Oi extends je{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2));function _(b,p,d,v,M,y,T,R,w,D,A){const E=y/w,P=T/D,C=y/2,z=T/2,U=R/2,W=w+1,O=D+1;let B=0,N=0;const Y=new H;for(let k=0;k<O;k++){const ct=k*P-z;for(let yt=0;yt<W;yt++){const Rt=yt*E-C;Y[b]=Rt*v,Y[p]=ct*M,Y[d]=U,l.push(Y.x,Y.y,Y.z),Y[b]=0,Y[p]=0,Y[d]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(yt/w),u.push(1-k/D),B+=1}}for(let k=0;k<D;k++)for(let ct=0;ct<w;ct++){const yt=f+ct+W*k,Rt=f+ct+W*(k+1),Q=f+(ct+1)+W*(k+1),ft=f+(ct+1)+W*k;c.push(yt,Rt,ft),c.push(Rt,Q,ft),N+=6}a.addGroup(g,N,A),g+=N,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function gn(i){const t={};for(let e=0;e<i.length;e++){const n=yr(i[e]);for(const s in n)t[s]=n[s]}return t}function V_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const _u={clone:yr,merge:gn};var W_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=W_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=V_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dm extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new H,Ah=new qt,Eh=new qt;class bn extends Dm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,Eh),e.subVectors(Eh,Ah)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ks=-90,$s=1;class X_ extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Ks,$s,t,e);s.layers=this.layers,this.add(s);const r=new bn(Ks,$s,t,e);r.layers=this.layers,this.add(r);const o=new bn(Ks,$s,t,e);o.layers=this.layers,this.add(o);const a=new bn(Ks,$s,t,e);a.layers=this.layers,this.add(a);const c=new bn(Ks,$s,t,e);c.layers=this.layers,this.add(c);const l=new bn(Ks,$s,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Fm extends en{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class q_ extends Is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Fm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new ye(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new X_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class bu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=n}clone(){return new bu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class K_ extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class xu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new H;class ei{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Re(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ei(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nm extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ys;const kr=new H,Js=new H,Zs=new H,Qs=new qt,Br=new qt,Um=new se,Wo=new H,zr=new H,jo=new H,Th=new qt,Fc=new qt,wh=new qt;class $_ extends Ge{constructor(t=new Nm){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new xu(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new ei(n,3,0,!1)),Ys.setAttribute("uv",new ei(n,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Um.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Zs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Xo(Wo.set(-.5,-.5,0),Zs,o,Js,s,r),Xo(zr.set(.5,-.5,0),Zs,o,Js,s,r),Xo(jo.set(.5,.5,0),Zs,o,Js,s,r),Th.set(0,0),Fc.set(1,0),wh.set(1,1);let a=t.ray.intersectTriangle(Wo,zr,jo,!1,kr);if(a===null&&(Xo(zr.set(-.5,.5,0),Zs,o,Js,s,r),Fc.set(0,1),a=t.ray.intersectTriangle(Wo,jo,zr,!1,kr),a===null))return;const c=t.ray.origin.distanceTo(kr);c<t.near||c>t.far||e.push({distance:c,point:kr.clone(),uv:kn.getInterpolation(kr,Wo,zr,jo,Th,Fc,wh,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xo(i,t,e,n,s,r){Qs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*Qs.x-s*Qs.y,Br.y=s*Qs.x+r*Qs.y):Br.copy(Qs),i.copy(t),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(Um)}const Rh=new H,Ch=new de,Ih=new de,Y_=new H,Ph=new se,qo=new H,Nc=new jn,Lh=new se,Uc=new sc;class J_ extends ye{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=oh,this.bindMatrix=new se,this.bindMatrixInverse=new se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(s),t.ray.intersectsSphere(Nc)!==!1&&(Lh.copy(s).invert(),Uc.copy(t.ray).applyMatrix4(Lh),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Uc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===oh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===o_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Ch.fromBufferAttribute(s.attributes.skinIndex,t),Ih.fromBufferAttribute(s.attributes.skinWeight,t),Rh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Ih.getComponent(r);if(o!==0){const a=Ch.getComponent(r);Ph.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Y_.copy(Rh).applyMatrix4(Ph),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Om extends Ge{constructor(){super(),this.isBone=!0,this.type="Bone"}}class km extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,l=1003,h=1003,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new se,Z_=new se;class vu{constructor(t=[],e=[]){this.uuid=ii(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new se)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new se;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Z_;Dh.multiplyMatrices(a,e[r]),Dh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new vu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new km(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Om),this.bones.push(o),this.boneInverses.push(new se().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Ul extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const tr=new se,Fh=new se,Ko=[],Nh=new dn,Q_=new se,Gr=new ye,Hr=new jn;class tb extends ye{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Q_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),Nh.copy(t.boundingBox).applyMatrix4(tr),this.boundingBox.union(Nh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,tr),Hr.copy(t.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),Fh.multiplyMatrices(n,tr),Gr.matrixWorld=Fh,Gr.raycast(t,Ko);for(let o=0,a=Ko.length;o<a;o++){const c=Ko[o];c.instanceId=r,c.object=this,e.push(c)}Ko.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new km(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Oc=new H,eb=new H,nb=new he;class ys{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Oc.subVectors(n,e).cross(eb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nb.getNormalMatrix(t),s=this.coplanarPoint(Oc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new jn,$o=new H;class yu{constructor(t=new ys,e=new ys,n=new ys,s=new ys,r=new ys,o=new ys){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],g=s[8],_=s[9],b=s[10],p=s[11],d=s[12],v=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,p-g,y-d).normalize(),n[1].setComponents(c+r,f+l,p+g,y+d).normalize(),n[2].setComponents(c+o,f+h,p+_,y+v).normalize(),n[3].setComponents(c-o,f-h,p-_,y-v).normalize(),n[4].setComponents(c-a,f-u,p-b,y-M).normalize(),e===2e3)n[5].setComponents(c+a,f+u,p+b,y+M).normalize();else if(e===2001)n[5].setComponents(a,u,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if($o.x=s.normal.x>0?t.max.x:t.min.x,$o.y=s.normal.y>0?t.max.y:t.min.y,$o.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($o)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bm extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ga=new H,Ha=new H,Uh=new se,Vr=new sc,Yo=new jn,kc=new H,Oh=new H;class Mu extends Ge{constructor(t=new je,e=new Bm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),Ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Ha);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,t.ray.intersectsSphere(Yo)===!1)return;Uh.copy(s).invert(),Vr.copy(t.ray).applyMatrix4(Uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const g=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let b=g,p=_-1;b<p;b+=l){const d=h.getX(b),v=h.getX(b+1),M=Jo(this,t,Vr,c,d,v);M&&e.push(M)}if(this.isLineLoop){const b=h.getX(_-1),p=h.getX(g),d=Jo(this,t,Vr,c,b,p);d&&e.push(d)}}else{const g=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let b=g,p=_-1;b<p;b+=l){const d=Jo(this,t,Vr,c,b,b+1);d&&e.push(d)}if(this.isLineLoop){const b=Jo(this,t,Vr,c,_-1,g);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Jo(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),e.distanceSqToSegment(Ga,Ha,kc,Oh)>n)return;kc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(kc);if(!(c<t.near||c>t.far))return{distance:c,point:Oh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const kh=new H,Bh=new H;class ib extends Mu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)kh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kh.distanceTo(Bh);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sb extends Mu{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class zm extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zh=new se,Ol=new sc,Zo=new jn,Qo=new H;class rb extends Ge{constructor(t=new je,e=new zm){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(s),Zo.radius+=r,t.ray.intersectsSphere(Zo)===!1)return;zh.copy(s).invert(),Ol.copy(t.ray).applyMatrix4(zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=f,b=g;_<b;_++){const p=l.getX(_);Qo.fromBufferAttribute(u,p),Gh(Qo,p,c,s,t,e,this)}}else{const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,b=g;_<b;_++)Qo.fromBufferAttribute(u,_),Gh(Qo,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(i,t,e,n,s,r,o){const a=Ol.distanceSqToPoint(i);if(a<e){const c=new H;Ol.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class xn extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}class In extends en{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gm extends en{constructor(t,e,n,s,r,o,a,c,l,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Su extends je{constructor(t=[new qt(0,-.5),new qt(.5,0),new qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=pe(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new H,f=new qt,g=new H,_=new H,b=new H;let p=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,g.x=d*1,g.y=-p,g.z=d*0,b.copy(g),g.normalize(),c.push(g.x,g.y,g.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:p=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,g.x=d*1,g.y=-p,g.z=d*0,_.copy(g),g.x+=b.x,g.y+=b.y,g.z+=b.z,g.normalize(),c.push(g.x,g.y,g.z),b.copy(_)}for(let v=0;v<=e;v++){const M=n+v*h*s,y=Math.sin(M),T=Math.cos(M);for(let R=0;R<=t.length-1;R++){u.x=t[R].x*y,u.y=t[R].y,u.z=t[R].x*T,o.push(u.x,u.y,u.z),f.x=v/e,f.y=R/(t.length-1),a.push(f.x,f.y);const w=c[3*R+0]*y,D=c[3*R+1],A=c[3*R+0]*T;l.push(w,D,A)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const y=M+v*t.length,T=y,R=y+t.length,w=y+t.length+1,D=y+1;r.push(T,R,D),r.push(w,D,R)}this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("uv",new Ve(a,2)),this.setAttribute("normal",new Ve(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.points,t.segments,t.phiStart,t.phiLength)}}class Au extends je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new H,h=new qt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const g=n+u/e*s;l.x=t*Math.cos(g),l.y=t*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(a,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Va extends je{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],g=[];let _=0;const b=[],p=n/2;let d=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(f,3)),this.setAttribute("uv",new Ve(g,2));function v(){const y=new H,T=new H;let R=0;const w=(e-t)/n;for(let D=0;D<=r;D++){const A=[],E=D/r,P=E*(e-t)+t;for(let C=0;C<=s;C++){const z=C/s,U=z*c+a,W=Math.sin(U),O=Math.cos(U);T.x=P*W,T.y=-E*n+p,T.z=P*O,u.push(T.x,T.y,T.z),y.set(W,w,O).normalize(),f.push(y.x,y.y,y.z),g.push(z,1-E),A.push(_++)}b.push(A)}for(let D=0;D<s;D++)for(let A=0;A<r;A++){const E=b[A][D],P=b[A+1][D],C=b[A+1][D+1],z=b[A][D+1];(t>0||A!==0)&&(h.push(E,P,z),R+=3),(e>0||A!==r-1)&&(h.push(P,C,z),R+=3)}l.addGroup(d,R,0),d+=R}function M(y){const T=_,R=new qt,w=new H;let D=0;const A=y===!0?t:e,E=y===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,p*E,0),f.push(0,E,0),g.push(.5,.5),_++;const P=_;for(let C=0;C<=s;C++){const U=C/s*c+a,W=Math.cos(U),O=Math.sin(U);w.x=A*O,w.y=p*E,w.z=A*W,u.push(w.x,w.y,w.z),f.push(0,E,0),R.x=W*.5+.5,R.y=O*.5*E+.5,g.push(R.x,R.y),_++}for(let C=0;C<s;C++){const z=T+C,U=P+C;y===!0?h.push(U,U+1,z):h.push(U+1,U,z),D+=3}l.addGroup(d,D,y===!0?1:2),d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hn extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,g=[],_=[],b=[],p=[];for(let d=0;d<h;d++){const v=d*f-o;for(let M=0;M<l;M++){const y=M*u-r;_.push(y,-v,0),b.push(0,0,1),p.push(M/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){const M=v+l*d,y=v+l*(d+1),T=v+1+l*(d+1),R=v+1+l*d;g.push(M,y,R),g.push(y,T,R)}this.setIndex(g),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(b,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.widthSegments,t.heightSegments)}}class rc extends je{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,g=new H,_=new qt;for(let b=0;b<=s;b++){for(let p=0;p<=n;p++){const d=r+p/n*o;g.x=u*Math.cos(d),g.y=u*Math.sin(d),c.push(g.x,g.y,g.z),l.push(0,0,1),_.x=(g.x/e+1)/2,_.y=(g.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let b=0;b<s;b++){const p=b*(n+1);for(let d=0;d<n;d++){const v=d+p,M=v,y=v+n+1,T=v+n+2,R=v+1;a.push(M,y,R),a.push(y,T,R)}}this.setIndex(a),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ob extends je{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new H,r=new H;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],f=u.start,g=u.count;for(let _=f,b=f+g;_<b;_+=3)for(let p=0;p<3;p++){const d=a.getX(_+p),v=a.getX(_+(p+1)%3);s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,v),Hh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l,u=3*a+(l+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Hh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Hh(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Ds extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _i extends Ds{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class _o extends Gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ab extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cb extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Es(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vm(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function kl(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Eu(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function lb(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],f=[];for(let g=0;g<l.times.length;++g){const _=l.times[g]*s;if(!(_<e||_>=n)){u.push(l.times[g]);for(let b=0;b<h;++b)f.push(l.values[g*h+b])}}u.length!==0&&(l.times=Es(u,l.times.constructor),l.values=Es(f,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function ub(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(d){return d.name===a.name&&d.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const g=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=g/3);const _=a.times.length-1;let b;if(r<=a.times[0]){const d=h,v=u-h;b=a.values.slice(d,v)}else if(r>=a.times[_]){const d=_*u+h,v=d+u-h;b=a.values.slice(d,v)}else{const d=a.createInterpolant(),v=h,M=u-h;d.evaluate(r),b=d.resultBuffer.slice(v,M)}c==="quaternion"&&new Oe().fromArray(b).normalize().conjugate().toArray(b);const p=l.times.length;for(let d=0;d<p;++d){const v=d*g+f;if(c==="quaternion")Oe.multiplyQuaternionsFlat(l.values,v,b,0,l.values,v);else{const M=g-f*2;for(let y=0;y<M;++y)l.values[v+y]-=b[y]}}}return i.blendMode=2501,i}const hb={convertArray:Es,isTypedArray:Hm,getKeyframeOrder:Vm,sortedArray:kl,flattenJSON:Eu,subclip:lb,makeClipAdditive:ub};class Tr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fb extends Tr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,g=this._weightNext,_=(n-e)/(s-e),b=_*_,p=b*_,d=-f*p+2*f*b-f*_,v=(1+f)*p+(-1.5-2*f)*b+(-.5+f)*_+1,M=(-1-g)*p+(1.5+g)*b+.5*_,y=g*p-g*b;for(let T=0;T!==a;++T)r[T]=d*o[h+T]+v*o[l+T]+M*o[c+T]+y*o[u+T];return r}}class Wm extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class db extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class bi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new db(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Wm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fb(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Hm(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{const u=a*n,f=u-n,g=u+n;for(let _=0;_!==n;++_){const b=e[u+_];if(b!==e[f+_]||b!==e[g+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let g=0;g!==n;++g)e[f+g]=e[u+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=2301;class wr extends bi{constructor(t,e,n){super(t,e,n)}}wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=2300;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class jm extends bi{}jm.prototype.ValueTypeName="color";class Mr extends bi{}Mr.prototype.ValueTypeName="number";class pb extends Tr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let l=t*a;for(let h=l+a;l!==h;l+=4)Oe.slerpFlat(r,0,o,l-a,o,l,c);return r}}class is extends bi{InterpolantFactoryMethodLinear(t){return new pb(this.times,this.values,this.getValueSize(),t)}}is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;class Rr extends bi{constructor(t,e,n){super(t,e,n)}}Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=2300;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sr extends bi{}Sr.prototype.ValueTypeName="vector";class Bl{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(gb(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Vm(c);c=kl(c,1,h),l=kl(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Mr(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,g,_,b){if(g.length!==0){const p=[],d=[];Eu(g,p,d,_),p.length!==0&&b.push(new u(f,p,d))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const g={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let b=0;b<f[_].morphTargets.length;b++)g[f[_].morphTargets[b]]=-1;for(const b in g){const p=[],d=[];for(let v=0;v!==f[_].morphTargets.length;++v){const M=f[_];p.push(M.time),d.push(M.morphTarget===b?1:0)}s.push(new Mr(".morphTargetInfluence["+b+"]",p,d))}c=g.length*o}else{const g=".bones["+e[u].name+"]";n(Sr,g+".position",f,"pos",s),n(is,g+".quaternion",f,"rot",s),n(Sr,g+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mr;case"vector":case"vector2":case"vector3":case"vector4":return Sr;case"color":return jm;case"quaternion":return is;case"bool":case"boolean":return wr;case"string":return Rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=mb(i.type);if(i.times===void 0){const e=[],n=[];Eu(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const es={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _b{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const g=l[u],_=l[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return _}return null}}}const bb=new _b;class Cr{constructor(t){this.manager=t!==void 0?t:bb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class xb extends Error{constructor(t,e){super(t),this.response=e}}class Xm extends Cr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=es.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ii[t]!==void 0){Ii[t].push({onLoad:e,onProgress:n,onError:s});return}Ii[t]=[],Ii[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ii[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=f?parseInt(f):0,_=g!==0;let b=0;const p=new ReadableStream({start(d){v();function v(){u.read().then(({done:M,value:y})=>{if(M)d.close();else{b+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:_,loaded:b,total:g});for(let R=0,w=h.length;R<w;R++){const D=h[R];D.onProgress&&D.onProgress(T)}d.enqueue(y),v()}},M=>{d.error(M)})}}});return new Response(p)}else throw new xb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,g=new TextDecoder(f);return l.arrayBuffer().then(_=>g.decode(_))}}}).then(l=>{es.add(t,l);const h=Ii[t];delete Ii[t];for(let u=0,f=h.length;u<f;u++){const g=h[u];g.onLoad&&g.onLoad(l)}}).catch(l=>{const h=Ii[t];if(h===void 0)throw this.manager.itemError(t),l;delete Ii[t];for(let u=0,f=h.length;u<f;u++){const g=h[u];g.onError&&g.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class vb extends Cr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=es.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=go("img");function c(){h(),es.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class qm extends Cr{constructor(t){super(t)}load(t,e,n,s){const r=new en,o=new vb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ao extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yb extends Ao{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Bc=new se,Vh=new H,Wh=new H;class Tu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mb extends Tu{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=vr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sb extends Ao{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const jh=new se,Wr=new H,zc=new H;class Ab extends Tu{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Wr),zc.copy(n.position),zc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zc),n.updateMatrixWorld(),s.makeTranslation(-Wr.x,-Wr.y,-Wr.z),jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jh)}}class Eb extends Ao{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ab}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wu extends Dm{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Tb extends Tu{constructor(){super(new wu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Km extends Ao{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new Tb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class RP extends Ao{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class uo{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class wb extends je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Rb extends Cr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=es.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return es.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),es.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});es.add(t,c),r.manager.itemStart(t)}}class Cb extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ib{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){Oe.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;Oe.multiplyQuaternionsFlat(t,o,t,e,t,n),Oe.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const Ru="\\[\\]\\.:\\/",Pb=new RegExp("["+Ru+"]","g"),Cu="[^"+Ru+"]",Lb="[^"+Ru.replace("\\.","")+"]",Db=/((?:WC+[\/:])*)/.source.replace("WC",Cu),Fb=/(WCOD+)?/.source.replace("WCOD",Lb),Nb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cu),Ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cu),Ob=new RegExp("^"+Db+Fb+Nb+Ub+"$"),kb=["material","materials","bones","map"];class Bb{constructor(t,e,n){const s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ce{constructor(t,e,n){this.path=e,this.parsedPath=n||Ce.parseTrackName(e),this.node=Ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ce.Composite(t,e,n):new Ce(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pb,"")}static parseTrackName(t){const e=Ob.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);kb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Ce.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[s];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ce.Composite=Bb;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zb{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/o,l[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const Gb=new Float32Array(1);class Hb extends Ls{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const f=s[u],g=f.name;let _=h[g];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,g));continue}const b=e&&e._propertyBindings[u].binding.parsedPath;_=new Ib(Ce.create(n,g,b),f.ValueTypeName,f.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,g),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete u[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Wm(new Float32Array(2),new Float32Array(2),1,Gb),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Bl.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new zb(this,o,e,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Bl.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class zl extends xu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Xh=new H,ta=new H;class Vb{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Xh.subVectors(t,this.start),ta.subVectors(this.end,this.start);const n=ta.dot(ta);let r=ta.dot(Xh)/n;return e&&(r=pe(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function qh(i,t,e,n){const s=Wb(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wb(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $m(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jb(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<u.length;g++){const _=u[f],b=u[g];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,u[f]=b)}u.length=f+1;for(let g=0,_=u.length;g<_;g++){const b=u[g];i.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Xb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
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
#endif`,Kb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
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
#endif`,Qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rx=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mx=`#define PI 3.141592653589793
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
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_x=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
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
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vx=`PhysicalMaterial material;
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
#endif`,Wx=`struct PhysicalMaterial {
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
}`,jx=`
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
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
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
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ev=`#if defined( USE_POINTS_UV )
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
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
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
#endif`,cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
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
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iv=`float getShadowMask() {
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
}`,Pv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`#include <common>
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
}`,Zv=`#if DEPTH_PACKING == 3200
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
}`,Qv=`#define DISTANCE
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
}`,ty=`#define DISTANCE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ry=`#include <common>
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
}`,oy=`uniform vec3 diffuse;
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
}`,ay=`#define LAMBERT
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
}`,cy=`#define LAMBERT
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
}`,ly=`#define MATCAP
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
}`,uy=`#define MATCAP
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
}`,hy=`#define NORMAL
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
}`,fy=`#define NORMAL
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
}`,dy=`#define PHONG
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
}`,py=`#define PHONG
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
}`,my=`#define STANDARD
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
}`,gy=`#define STANDARD
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
}`,_y=`#define TOON
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
}`,by=`#define TOON
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
}`,xy=`uniform float size;
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
}`,vy=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,My=`uniform vec3 color;
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
}`,Sy=`uniform float rotation;
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
}`,Ay=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Xb,alphahash_pars_fragment:qb,alphamap_fragment:Kb,alphamap_pars_fragment:$b,alphatest_fragment:Yb,alphatest_pars_fragment:Jb,aomap_fragment:Zb,aomap_pars_fragment:Qb,batching_pars_vertex:tx,batching_vertex:ex,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:sx,iridescence_fragment:rx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:hx,color_pars_fragment:fx,color_pars_vertex:dx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:_x,displacementmap_pars_vertex:bx,displacementmap_vertex:xx,emissivemap_fragment:vx,emissivemap_pars_fragment:yx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:Ax,envmap_common_pars_fragment:Ex,envmap_pars_fragment:Tx,envmap_pars_vertex:wx,envmap_physical_pars_fragment:kx,envmap_vertex:Rx,fog_vertex:Cx,fog_pars_vertex:Ix,fog_fragment:Px,fog_pars_fragment:Lx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Fx,lights_lambert_fragment:Nx,lights_lambert_pars_fragment:Ux,lights_pars_begin:Ox,lights_toon_fragment:Bx,lights_toon_pars_fragment:zx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Hx,lights_physical_fragment:Vx,lights_physical_pars_fragment:Wx,lights_fragment_begin:jx,lights_fragment_maps:Xx,lights_fragment_end:qx,logdepthbuf_fragment:Kx,logdepthbuf_pars_fragment:$x,logdepthbuf_pars_vertex:Yx,logdepthbuf_vertex:Jx,map_fragment:Zx,map_pars_fragment:Qx,map_particle_fragment:tv,map_particle_pars_fragment:ev,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:sv,morphcolor_vertex:rv,morphnormal_vertex:ov,morphtarget_pars_vertex:av,morphtarget_vertex:cv,normal_fragment_begin:lv,normal_fragment_maps:uv,normal_pars_fragment:hv,normal_pars_vertex:fv,normal_vertex:dv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:bv,opaque_fragment:xv,packing:vv,premultiplied_alpha_fragment:yv,project_vertex:Mv,dithering_fragment:Sv,dithering_pars_fragment:Av,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:wv,shadowmap_pars_vertex:Rv,shadowmap_vertex:Cv,shadowmask_pars_fragment:Iv,skinbase_vertex:Pv,skinning_pars_vertex:Lv,skinning_vertex:Dv,skinnormal_vertex:Fv,specularmap_fragment:Nv,specularmap_pars_fragment:Uv,tonemapping_fragment:Ov,tonemapping_pars_fragment:kv,transmission_fragment:Bv,transmission_pars_fragment:zv,uv_pars_fragment:Gv,uv_pars_vertex:Hv,uv_vertex:Vv,worldpos_vertex:Wv,background_vert:jv,background_frag:Xv,backgroundCube_vert:qv,backgroundCube_frag:Kv,cube_vert:$v,cube_frag:Yv,depth_vert:Jv,depth_frag:Zv,distanceRGBA_vert:Qv,distanceRGBA_frag:ty,equirect_vert:ey,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:cy,meshmatcap_vert:ly,meshmatcap_frag:uy,meshnormal_vert:hy,meshnormal_frag:fy,meshphong_vert:dy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:_y,meshtoon_frag:by,points_vert:xy,points_frag:vy,shadow_vert:yy,shadow_frag:My,sprite_vert:Sy,sprite_frag:Ay},Nt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},En={basic:{uniforms:gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:gn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:gn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new $t(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:gn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:gn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:gn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:gn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:gn([Nt.common,Nt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:gn([Nt.lights,Nt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};En.physical={uniforms:gn([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const ea={r:0,b:0,g:0},ps=new Vn,Ey=new se;function Ty(i,t,e,n,s,r,o){const a=new $t(0);let c=r===!0?0:1,l,h,u=null,f=0,g=null;function _(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function b(M){let y=!1;const T=_(M);T===null?d(a,c):T&&T.isColor&&(d(T,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,y){const T=_(y);T&&(T.isCubeTexture||T.mapping===306)?(h===void 0&&(h=new ye(new Oi(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:yr(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(y.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(ps)),h.material.toneMapped=we.getTransfer(T.colorSpace)!==Be,(u!==T||f!==T.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,f=T.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new ye(new Hn(2,2),new ki({name:"BackgroundMaterial",uniforms:yr(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=we.getTransfer(T.colorSpace)!==Be,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||f!==T.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,f=T.version,g=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,y){M.getRGB(ea,Lm(i)),n.buffers.color.setClear(ea.r,ea.g,ea.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:b,addToRenderList:p,dispose:v}}function wy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(E,P,C,z,U){let W=!1;const O=u(z,C,P);r!==O&&(r=O,l(r.object)),W=g(E,z,C,U),W&&_(E,z,C,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(E,P,C,z),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,P,C){const z=C.wireframe===!0;let U=n[E.id];U===void 0&&(U={},n[E.id]=U);let W=U[P.id];W===void 0&&(W={},U[P.id]=W);let O=W[z];return O===void 0&&(O=f(c()),W[z]=O),O}function f(E){const P=[],C=[],z=[];for(let U=0;U<e;U++)P[U]=0,C[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:C,attributeDivisors:z,object:E,attributes:{},index:null}}function g(E,P,C,z){const U=r.attributes,W=P.attributes;let O=0;const B=C.getAttributes();for(const N in B)if(B[N].location>=0){const k=U[N];let ct=W[N];if(ct===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor)),k===void 0||k.attribute!==ct||ct&&k.data!==ct.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function _(E,P,C,z){const U={},W=P.attributes;let O=0;const B=C.getAttributes();for(const N in B)if(B[N].location>=0){let k=W[N];k===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(k=E.instanceColor));const ct={};ct.attribute=k,k&&k.data&&(ct.data=k.data),U[N]=ct,O++}r.attributes=U,r.attributesNum=O,r.index=z}function b(){const E=r.newAttributes;for(let P=0,C=E.length;P<C;P++)E[P]=0}function p(E){d(E,0)}function d(E,P){const C=r.newAttributes,z=r.enabledAttributes,U=r.attributeDivisors;C[E]=1,z[E]===0&&(i.enableVertexAttribArray(E),z[E]=1),U[E]!==P&&(i.vertexAttribDivisor(E,P),U[E]=P)}function v(){const E=r.newAttributes,P=r.enabledAttributes;for(let C=0,z=P.length;C<z;C++)P[C]!==E[C]&&(i.disableVertexAttribArray(C),P[C]=0)}function M(E,P,C,z,U,W,O){O===!0?i.vertexAttribIPointer(E,P,C,U,W):i.vertexAttribPointer(E,P,C,z,U,W)}function y(E,P,C,z){b();const U=z.attributes,W=C.getAttributes(),O=P.defaultAttributeValues;for(const B in W){const N=W[B];if(N.location>=0){let Y=U[B];if(Y===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor)),Y!==void 0){const k=Y.normalized,ct=Y.itemSize,yt=t.get(Y);if(yt===void 0)continue;const Rt=yt.buffer,Q=yt.type,ft=yt.bytesPerElement,ut=Q===i.INT||Q===i.UNSIGNED_INT||Y.gpuType===1013;if(Y.isInterleavedBufferAttribute){const Z=Y.data,xt=Z.stride,Pt=Y.offset;if(Z.isInstancedInterleavedBuffer){for(let Ct=0;Ct<N.locationSize;Ct++)d(N.location+Ct,Z.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ct=0;Ct<N.locationSize;Ct++)p(N.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Ct=0;Ct<N.locationSize;Ct++)M(N.location+Ct,ct/N.locationSize,Q,k,xt*ft,(Pt+ct/N.locationSize*Ct)*ft,ut)}else{if(Y.isInstancedBufferAttribute){for(let Z=0;Z<N.locationSize;Z++)d(N.location+Z,Y.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Z=0;Z<N.locationSize;Z++)p(N.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Rt);for(let Z=0;Z<N.locationSize;Z++)M(N.location+Z,ct/N.locationSize,Q,k,ct*ft,ct/N.locationSize*Z*ft,ut)}}else if(O!==void 0){const k=O[B];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(N.location,k);break;case 3:i.vertexAttrib3fv(N.location,k);break;case 4:i.vertexAttrib4fv(N.location,k);break;default:i.vertexAttrib1fv(N.location,k)}}}}v()}function T(){D();for(const E in n){const P=n[E];for(const C in P){const z=P[C];for(const U in z)h(z[U].object),delete z[U];delete P[C]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const C in P){const z=P[C];for(const U in z)h(z[U].object),delete z[U];delete P[C]}delete n[E.id]}function w(E){for(const P in n){const C=n[P];if(C[E.id]===void 0)continue;const z=C[E.id];for(const U in z)h(z[U].object),delete z[U];delete C[E.id]}}function D(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:p,disableUnusedAttributes:v}}function Ry(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,n,1)}function c(l,h,u,f){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let b=0;b<u;b++)_+=h[b]*f[b];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const D=w===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==1009&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!D)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:R}}function Iy(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ys,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const g=u.length!==0||f||n!==0||s;return s=f,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){const _=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{const v=r?0:n,M=v*4;let y=d.clippingState||null;c.value=y,y=h(_,f,M,g);for(let T=0;T!==M;++T)y[T]=e[T];d.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,g,_){const b=u!==null?u.length:0;let p=null;if(b!==0){if(p=c.value,_!==!0||p===null){const d=g+b*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,y=g;M!==b;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,p}}function Py(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new q_(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const dr=4,Kh=[.125,.215,.35,.446,.526,.582],Ss=20,Gc=new wu,$h=new $t;let Hc=null,Vc=0,Wc=0,jc=!1;const Ms=(1+Math.sqrt(5))/2,er=1/Ms,Yh=[new H(-Ms,er,0),new H(Ms,er,0),new H(-er,0,Ms),new H(er,0,Ms),new H(0,Ms,-er),new H(0,Ms,er),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hc,Vc,Wc),this._renderer.xr.enabled=jc,t.scissorTest=!1,na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:vn,depthBuffer:!1},s=Zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ly(r)),this._blurMaterial=Dy(r,t,e)}return s}_compileMaterial(t){const e=new ye(this._lodPlanes[0],t);this._renderer.compile(e,Gc)}_sceneToCubeUV(t,e,n,s){const a=new bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor($h),h.toneMapping=0,h.autoClear=!1;const g=new tn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new ye(new Oi,g);let b=!1;const p=t.background;p?p.isColor&&(g.color.copy(p),t.background=null,b=!0):(g.color.copy($h),b=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;na(s,v*M,d>2?M:0,M,M),h.setRenderTarget(s),b&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ye(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;na(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Gc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Yh[(s-r-1)%Yh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ye(this._lodPlanes[s],l),f=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ss-1),b=r/_,p=isFinite(r)?1+Math.floor(h*b):Ss;p>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ss}`);const d=[];let v=0;for(let w=0;w<Ss;++w){const D=w/b,A=Math.exp(-D*D/2);d.push(A),w===0?v+=A:w<p&&(v+=2*A)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const y=this._sizeLods[s],T=3*y*(s>M-dr?s-M+dr:0),R=4*(this._cubeSize-y);na(e,T,R,3*y,2*y),c.setRenderTarget(e),c.render(u,Gc)}}function Ly(i){const t=[],e=[],n=[];let s=i;const r=i-dr+1+Kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-dr?c=Kh[o-i+dr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,_=6,b=3,p=2,d=1,v=new Float32Array(b*_*g),M=new Float32Array(p*_*g),y=new Float32Array(d*_*g);for(let R=0;R<g;R++){const w=R%3*2/3-1,D=R>2?0:-1,A=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set(A,b*_*R),M.set(f,p*_*R);const E=[R,R,R,R,R,R];y.set(E,d*_*R)}const T=new je;T.setAttribute("position",new Re(v,b)),T.setAttribute("uv",new Re(M,p)),T.setAttribute("faceIndex",new Re(y,d)),t.push(T),s>dr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zh(i,t,e){const n=new Is(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function na(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dy(i,t,e){const n=new Float32Array(Ss),s=new H(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qh(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function tf(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function Fy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===303||c===304,h=c===301||c===302;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Jh(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const g=a.image;return l&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new Jh(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ny(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uy(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER)}function l(u){const f=[],g=u.index,_=u.attributes.position;let b=0;if(g!==null){const v=g.array;b=g.version;for(let M=0,y=v.length;M<y;M+=3){const T=v[M+0],R=v[M+1],w=v[M+2];f.push(T,R,R,w,w,T)}}else if(_!==void 0){const v=_.array;b=_.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const T=M+0,R=M+1,w=M+2;f.push(T,R,R,w,w,T)}}else return;const p=new(Em(f)?Pm:Im)(f,1);p.version=b;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const g=u.index;g!==null&&f.version<g.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Oy(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,g){i.drawElements(n,g,r,f*o),e.update(g,n,1)}function l(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,f*o,_),e.update(g,n,_))}function h(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=g[d];e.update(p,n,1)}function u(f,g,_,b){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/o,g[d],b[d]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,b,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v]*b[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ky(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function By(i,t,e){const n=new WeakMap,s=new de;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let A=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),b===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*T*4*u),w=new wm(R,y,T,u);w.type=1015,w.needsUpdate=!0;const D=M*4;for(let E=0;E<u;E++){const P=p[E],C=d[E],z=v[E],U=y*T*4*E;for(let W=0;W<P.count;W++){const O=W*D;g===!0&&(s.fromBufferAttribute(P,W),R[U+O+0]=s.x,R[U+O+1]=s.y,R[U+O+2]=s.z,R[U+O+3]=0),_===!0&&(s.fromBufferAttribute(C,W),R[U+O+4]=s.x,R[U+O+5]=s.y,R[U+O+6]=s.z,R[U+O+7]=0),b===!0&&(s.fromBufferAttribute(z,W),R[U+O+8]=s.x,R[U+O+9]=s.y,R[U+O+10]=s.z,R[U+O+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new qt(y,T)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<l.length;b++)g+=l[b];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zy(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Ym=new en,ef=new Gm(1,1),Jm=new wm,Zm=new L_,Qm=new Fm,nf=[],sf=[],rf=new Float32Array(16),of=new Float32Array(9),af=new Float32Array(4);function Ir(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=nf[s];if(r===void 0&&(r=new Float32Array(s),nf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function oc(i,t){let e=sf[t];e===void 0&&(e=new Int32Array(t),sf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Vy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function Wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function jy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;af.set(n),i.uniformMatrix2fv(this.addr,!1,af),sn(e,n)}}function Xy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;of.set(n),i.uniformMatrix3fv(this.addr,!1,of),sn(e,n)}}function qy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;rf.set(n),i.uniformMatrix4fv(this.addr,!1,rf),sn(e,n)}}function Ky(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $y(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Yy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Zy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function tM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function eM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function nM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ef.compareFunction=515,r=ef):r=Ym,e.setTexture2D(t||r,s)}function iM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zm,s)}function sM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qm,s)}function rM(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jm,s)}function oM(i){switch(i){case 5126:return Gy;case 35664:return Hy;case 35665:return Vy;case 35666:return Wy;case 35674:return jy;case 35675:return Xy;case 35676:return qy;case 5124:case 35670:return Ky;case 35667:case 35671:return $y;case 35668:case 35672:return Yy;case 35669:case 35673:return Jy;case 5125:return Zy;case 36294:return Qy;case 36295:return tM;case 36296:return eM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return rM}}function aM(i,t){i.uniform1fv(this.addr,t)}function cM(i,t){const e=Ir(t,this.size,2);i.uniform2fv(this.addr,e)}function lM(i,t){const e=Ir(t,this.size,3);i.uniform3fv(this.addr,e)}function uM(i,t){const e=Ir(t,this.size,4);i.uniform4fv(this.addr,e)}function hM(i,t){const e=Ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fM(i,t){const e=Ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dM(i,t){const e=Ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pM(i,t){i.uniform1iv(this.addr,t)}function mM(i,t){i.uniform2iv(this.addr,t)}function gM(i,t){i.uniform3iv(this.addr,t)}function _M(i,t){i.uniform4iv(this.addr,t)}function bM(i,t){i.uniform1uiv(this.addr,t)}function xM(i,t){i.uniform2uiv(this.addr,t)}function vM(i,t){i.uniform3uiv(this.addr,t)}function yM(i,t){i.uniform4uiv(this.addr,t)}function MM(i,t,e){const n=this.cache,s=t.length,r=oc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ym,r[o])}function SM(i,t,e){const n=this.cache,s=t.length,r=oc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zm,r[o])}function AM(i,t,e){const n=this.cache,s=t.length,r=oc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Qm,r[o])}function EM(i,t,e){const n=this.cache,s=t.length,r=oc(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Jm,r[o])}function TM(i){switch(i){case 5126:return aM;case 35664:return cM;case 35665:return lM;case 35666:return uM;case 35674:return hM;case 35675:return fM;case 35676:return dM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return bM;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return EM}}class wM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=oM(e.type)}}class RM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=TM(e.type)}}class CM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function cf(i,t){i.seq.push(t),i.map[t.id]=t}function IM(i,t,e){const n=i.name,s=n.length;for(Xc.lastIndex=0;;){const r=Xc.exec(n),o=Xc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cf(e,l===void 0?new wM(a,i,t):new RM(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new CM(a),cf(e,u)),e=u}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);IM(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function lf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const PM=37297;let LM=0;function DM(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const uf=new he;function FM(i){we._getMatrix(uf,we.workingColorSpace,i);const t=`mat3( ${uf.elements.map(e=>e.toFixed(4))} )`;switch(we.getTransfer(i)){case za:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+DM(i.getShaderSource(t),o)}else return s}function NM(i,t){const e=FM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function UM(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ia=new H;function OM(){we.getLuminanceCoefficients(ia);const i=ia.x.toFixed(4),t=ia.y.toFixed(4),e=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function BM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function oo(i){return i!==""}function ff(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function df(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(i){return i.replace(GM,VM)}const HM=new Map;function VM(i,t){let e=fe[t];if(e===void 0){const n=HM.get(t);if(n!==void 0)e=fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gl(e)}const WM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pf(i){return i.replace(WM,jM)}function jM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function XM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function qM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function $M(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function YM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function JM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=XM(e),l=qM(e),h=KM(e),u=$M(e),f=YM(e),g=kM(e),_=BM(r),b=s.createProgram();let p,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(oo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(oo).join(`
`),d.length>0&&(d+=`
`)):(p=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),d=[mf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?fe.tonemapping_pars_fragment:"",e.toneMapping!==0?UM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,NM("linearToOutputTexel",e.outputColorSpace),OM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oo).join(`
`)),o=Gl(o),o=ff(o,e),o=df(o,e),a=Gl(a),a=ff(a,e),a=df(a,e),o=pf(o),a=pf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+p+o,y=v+d+a,T=lf(s,s.VERTEX_SHADER,M),R=lf(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,R),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(P){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(b).trim(),z=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(R).trim();let W=!0,O=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,T,R);else{const B=hf(s,T,"vertex"),N=hf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+C+`
`+B+`
`+N)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(z===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:W,programLog:C,vertexShader:{log:z,prefix:p},fragmentShader:{log:U,prefix:d}})}s.deleteShader(T),s.deleteShader(R),D=new Da(s,b),A=zM(s,b)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(b,PM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LM++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=R,this}let ZM=0;class QM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tS(t),e.set(t,n)),n}}class tS{constructor(t){this.id=ZM++,this.code=t,this.usedTimes=0}}function eS(i,t,e,n,s,r,o){const a=new Rm,c=new QM,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return l.add(A),A===0?"uv":`uv${A}`}function p(A,E,P,C,z){const U=C.fog,W=z.geometry,O=A.isMeshStandardMaterial?C.environment:null,B=(A.isMeshStandardMaterial?e:t).get(A.envMap||O),N=B&&B.mapping===306?B.image.height:null,Y=_[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const k=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ct=k!==void 0?k.length:0;let yt=0;W.morphAttributes.position!==void 0&&(yt=1),W.morphAttributes.normal!==void 0&&(yt=2),W.morphAttributes.color!==void 0&&(yt=3);let Rt,Q,ft,ut;if(Y){const Me=En[Y];Rt=Me.vertexShader,Q=Me.fragmentShader}else Rt=A.vertexShader,Q=A.fragmentShader,c.update(A),ft=c.getVertexShaderID(A),ut=c.getFragmentShaderID(A);const Z=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,Ct=z.isBatchedMesh===!0,zt=!!A.map,Xt=!!A.matcap,Ae=!!B,j=!!A.aoMap,Le=!!A.lightMap,Kt=!!A.bumpMap,Zt=!!A.normalMap,Wt=!!A.displacementMap,_e=!!A.emissiveMap,Vt=!!A.metalnessMap,G=!!A.roughnessMap,I=A.anisotropy>0,J=A.clearcoat>0,tt=A.dispersion>0,it=A.iridescence>0,rt=A.sheen>0,At=A.transmission>0,Mt=I&&!!A.anisotropyMap,Lt=J&&!!A.clearcoatMap,re=J&&!!A.clearcoatNormalMap,vt=J&&!!A.clearcoatRoughnessMap,Et=it&&!!A.iridescenceMap,Gt=it&&!!A.iridescenceThicknessMap,Qt=rt&&!!A.sheenColorMap,Ot=rt&&!!A.sheenRoughnessMap,me=!!A.specularMap,Jt=!!A.specularColorMap,Ee=!!A.specularIntensityMap,K=At&&!!A.transmissionMap,Dt=At&&!!A.thicknessMap,dt=!!A.gradientMap,_t=!!A.alphaMap,Ut=A.alphaTest>0,Ft=!!A.alphaHash,ee=!!A.extensions;let De=0;A.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=i.toneMapping);const Ke={shaderID:Y,shaderType:A.type,shaderName:A.name,vertexShader:Rt,fragmentShader:Q,defines:A.defines,customVertexShaderID:ft,customFragmentShaderID:ut,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:Ct,batchingColor:Ct&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:vn,alphaToCoverage:!!A.alphaToCoverage,map:zt,matcap:Xt,envMap:Ae,envMapMode:Ae&&B.mapping,envMapCubeUVHeight:N,aoMap:j,lightMap:Le,bumpMap:Kt,normalMap:Zt,displacementMap:f&&Wt,emissiveMap:_e,normalMapObjectSpace:Zt&&A.normalMapType===1,normalMapTangentSpace:Zt&&A.normalMapType===0,metalnessMap:Vt,roughnessMap:G,anisotropy:I,anisotropyMap:Mt,clearcoat:J,clearcoatMap:Lt,clearcoatNormalMap:re,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:it,iridescenceMap:Et,iridescenceThicknessMap:Gt,sheen:rt,sheenColorMap:Qt,sheenRoughnessMap:Ot,specularMap:me,specularColorMap:Jt,specularIntensityMap:Ee,transmission:At,transmissionMap:K,thicknessMap:Dt,gradientMap:dt,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ut,alphaHash:Ft,combine:A.combine,mapUv:zt&&b(A.map.channel),aoMapUv:j&&b(A.aoMap.channel),lightMapUv:Le&&b(A.lightMap.channel),bumpMapUv:Kt&&b(A.bumpMap.channel),normalMapUv:Zt&&b(A.normalMap.channel),displacementMapUv:Wt&&b(A.displacementMap.channel),emissiveMapUv:_e&&b(A.emissiveMap.channel),metalnessMapUv:Vt&&b(A.metalnessMap.channel),roughnessMapUv:G&&b(A.roughnessMap.channel),anisotropyMapUv:Mt&&b(A.anisotropyMap.channel),clearcoatMapUv:Lt&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:re&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(A.sheenRoughnessMap.channel),specularMapUv:me&&b(A.specularMap.channel),specularColorMapUv:Jt&&b(A.specularColorMap.channel),specularIntensityMapUv:Ee&&b(A.specularIntensityMap.channel),transmissionMapUv:K&&b(A.transmissionMap.channel),thicknessMapUv:Dt&&b(A.thicknessMap.channel),alphaMapUv:_t&&b(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Zt||I),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(zt||_t),fog:!!U,useFog:A.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:yt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:zt&&A.map.isVideoTexture===!0&&we.getTransfer(A.map.colorSpace)===Be,decodeVideoTextureEmissive:_e&&A.emissiveMap.isVideoTexture===!0&&we.getTransfer(A.emissiveMap.colorSpace)===Be,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ee&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&A.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ke.vertexUv1s=l.has(1),Ke.vertexUv2s=l.has(2),Ke.vertexUv3s=l.has(3),l.clear(),Ke}function d(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)E.push(P),E.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(v(E,A),M(E,A),E.push(i.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function v(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function M(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const E=_[A.type];let P;if(E){const C=En[E];P=_u.clone(C.uniforms)}else P=A.uniforms;return P}function T(A,E){let P;for(let C=0,z=h.length;C<z;C++){const U=h[C];if(U.cacheKey===E){P=U,++P.usedTimes;break}}return P===void 0&&(P=new JM(i,E,A,r),h.push(P)),P}function R(A){if(--A.usedTimes===0){const E=h.indexOf(A);h[E]=h[h.length-1],h.pop(),A.destroy()}}function w(A){c.remove(A)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:R,releaseShaderCache:w,programs:h,dispose:D}}function nS(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iS(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _f(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,g,_,b,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:g,groupOrder:_,renderOrder:u.renderOrder,z:b,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=g,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=b,d.group=p),t++,d}function a(u,f,g,_,b,p){const d=o(u,f,g,_,b,p);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):e.push(d)}function c(u,f,g,_,b,p){const d=o(u,f,g,_,b,p);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||iS),n.length>1&&n.sort(f||gf),s.length>1&&s.sort(f||gf)}function h(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function sS(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _f,i.set(n,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new $t};break;case"SpotLight":e={position:new H,direction:new H,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function oS(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let aS=0;function cS(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lS(i){const t=new rS,e=oS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new H);const s=new H,r=new se,o=new se;function a(l){let h=0,u=0,f=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let g=0,_=0,b=0,p=0,d=0,v=0,M=0,y=0,T=0,R=0,w=0;l.sort(cS);for(let A=0,E=l.length;A<E;A++){const P=l[A],C=P.color,z=P.intensity,U=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=C.r*z,u+=C.g*z,f+=C.b*z;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],z);w++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,N=e.get(P);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.directionalShadow[g]=N,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=P.shadow.matrix,v++}n.directional[g]=O,g++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(C).multiplyScalar(z),O.distance=U,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[b]=O;const B=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,B.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[b]=B.matrix,P.castShadow){const N=e.get(P);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,n.spotShadow[b]=N,n.spotShadowMap[b]=W,y++}b++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(C).multiplyScalar(z),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=O,p++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const B=P.shadow,N=e.get(P);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,n.pointShadow[_]=N,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=O,_++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(z),O.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[d]=O,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==g||D.pointLength!==_||D.spotLength!==b||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==v||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,D.directionalLength=g,D.pointLength=_,D.spotLength=b,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=v,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=w,n.version=aS++)}function c(l,h){let u=0,f=0,g=0,_=0,b=0;const p=h.matrixWorldInverse;for(let d=0,v=l.length;d<v;d++){const M=l[d];if(M.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(M.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const y=n.hemi[b];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(p),b++}}}return{setup:a,setupView:c,state:n}}function bf(i){const t=new lS(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function uS(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new bf(i),t.set(s,[a])):r>=o.length?(a=new bf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const hS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fS=`uniform sampler2D shadow_pass;
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
}`;function dS(i,t,e){let n=new yu;const s=new qt,r=new qt,o=new de,a=new ab({depthPacking:3201}),c=new cb,l={},h=e.maxTextureSize,u={0:1,1:0,2:2},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:hS,fragmentShader:fS}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new je;_.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ye(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(R,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const A=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),C=i.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const z=d!==3&&this.type===3,U=d===3&&this.type!==3;for(let W=0,O=R.length;W<O;W++){const B=R[W],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Y=N.getFrameExtents();if(s.multiply(Y),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,N.mapSize.y=r.y)),N.map===null||z===!0||U===!0){const ct=this.type!==3?{minFilter:1003,magFilter:1003}:{};N.map!==null&&N.map.dispose(),N.map=new Is(s.x,s.y,ct),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const k=N.getViewportCount();for(let ct=0;ct<k;ct++){const yt=N.getViewport(ct);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),C.viewport(o),N.updateMatrices(B,ct),n=N.getFrustum(),y(w,D,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===3&&v(N,D),N.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(A,E,P)};function v(R,w){const D=t.update(b);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Is(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,D,f,b,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,D,g,b,null)}function M(R,w,D,A){let E=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const C=E.uuid,z=w.uuid;let U=l[C];U===void 0&&(U={},l[C]=U);let W=U[z];W===void 0&&(W=E.clone(),U[z]=W,w.addEventListener("dispose",T)),E=W}if(E.visible=w.visible,E.wireframe=w.wireframe,A===3?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const C=i.properties.get(E);C.light=D}return E}function y(R,w,D,A,E){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const z=t.update(R),U=R.material;if(Array.isArray(U)){const W=z.groups;for(let O=0,B=W.length;O<B;O++){const N=W[O],Y=U[N.materialIndex];if(Y&&Y.visible){const k=M(R,Y,A,E);R.onBeforeShadow(i,R,w,D,z,k,N),i.renderBufferDirect(D,null,z,k,R,N),R.onAfterShadow(i,R,w,D,z,k,N)}}}else if(U.visible){const W=M(R,U,A,E);R.onBeforeShadow(i,R,w,D,z,W,null),i.renderBufferDirect(D,null,z,W,R,null),R.onAfterShadow(i,R,w,D,z,W,null)}}const C=R.children;for(let z=0,U=C.length;z<U;z++)y(C[z],w,D,A,E)}function T(R){R.target.removeEventListener("dispose",T);for(const D in l){const A=l[D],E=R.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const pS={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function mS(i,t){function e(){let K=!1;const Dt=new de;let dt=null;const _t=new de(0,0,0,0);return{setMask:function(Ut){dt!==Ut&&!K&&(i.colorMask(Ut,Ut,Ut,Ut),dt=Ut)},setLocked:function(Ut){K=Ut},setClear:function(Ut,Ft,ee,De,Ke){Ke===!0&&(Ut*=De,Ft*=De,ee*=De),Dt.set(Ut,Ft,ee,De),_t.equals(Dt)===!1&&(i.clearColor(Ut,Ft,ee,De),_t.copy(Dt))},reset:function(){K=!1,dt=null,_t.set(-1,0,0,0)}}}function n(){let K=!1,Dt=!1,dt=null,_t=null,Ut=null;return{setReversed:function(Ft){if(Dt!==Ft){const ee=t.get("EXT_clip_control");Dt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const De=Ut;Ut=null,this.setClear(De)}Dt=Ft},getReversed:function(){return Dt},setTest:function(Ft){Ft?Z(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(Ft){dt!==Ft&&!K&&(i.depthMask(Ft),dt=Ft)},setFunc:function(Ft){if(Dt&&(Ft=pS[Ft]),_t!==Ft){switch(Ft){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=Ft}},setLocked:function(Ft){K=Ft},setClear:function(Ft){Ut!==Ft&&(Dt&&(Ft=1-Ft),i.clearDepth(Ft),Ut=Ft)},reset:function(){K=!1,dt=null,_t=null,Ut=null,Dt=!1}}}function s(){let K=!1,Dt=null,dt=null,_t=null,Ut=null,Ft=null,ee=null,De=null,Ke=null;return{setTest:function(Me){K||(Me?Z(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Me){Dt!==Me&&!K&&(i.stencilMask(Me),Dt=Me)},setFunc:function(Me,Xe,yn){(dt!==Me||_t!==Xe||Ut!==yn)&&(i.stencilFunc(Me,Xe,yn),dt=Me,_t=Xe,Ut=yn)},setOp:function(Me,Xe,yn){(Ft!==Me||ee!==Xe||De!==yn)&&(i.stencilOp(Me,Xe,yn),Ft=Me,ee=Xe,De=yn)},setLocked:function(Me){K=Me},setClear:function(Me){Ke!==Me&&(i.clearStencil(Me),Ke=Me)},reset:function(){K=!1,Dt=null,dt=null,_t=null,Ut=null,Ft=null,ee=null,De=null,Ke=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,g=[],_=null,b=!1,p=null,d=null,v=null,M=null,y=null,T=null,R=null,w=new $t(0,0,0),D=0,A=!1,E=null,P=null,C=null,z=null,U=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,B=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=B>=1):N.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=B>=2);let Y=null,k={};const ct=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),Rt=new de().fromArray(ct),Q=new de().fromArray(yt);function ft(K,Dt,dt,_t){const Ut=new Uint8Array(4),Ft=i.createTexture();i.bindTexture(K,Ft),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<dt;ee++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Dt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Dt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return Ft}const ut={};ut[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(3),Kt(!1),Zt(1),Z(i.CULL_FACE),j(0);function Z(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function xt(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function Pt(K,Dt){return u[K]!==Dt?(i.bindFramebuffer(K,Dt),u[K]=Dt,K===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Dt),K===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Ct(K,Dt){let dt=g,_t=!1;if(K){dt=f.get(Dt),dt===void 0&&(dt=[],f.set(Dt,dt));const Ut=K.textures;if(dt.length!==Ut.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Ft=0,ee=Ut.length;Ft<ee;Ft++)dt[Ft]=i.COLOR_ATTACHMENT0+Ft;dt.length=Ut.length,_t=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(dt)}function zt(K){return _!==K?(i.useProgram(K),_=K,!0):!1}const Xt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Xt[103]=i.MIN,Xt[104]=i.MAX;const Ae={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function j(K,Dt,dt,_t,Ut,Ft,ee,De,Ke,Me){if(K===0){b===!0&&(xt(i.BLEND),b=!1);return}if(b===!1&&(Z(i.BLEND),b=!0),K!==5){if(K!==p||Me!==A){if((d!==100||y!==100)&&(i.blendEquation(i.FUNC_ADD),d=100,y=100),Me)switch(K){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,M=null,T=null,R=null,w.set(0,0,0),D=0,p=K,A=Me}return}Ut=Ut||Dt,Ft=Ft||dt,ee=ee||_t,(Dt!==d||Ut!==y)&&(i.blendEquationSeparate(Xt[Dt],Xt[Ut]),d=Dt,y=Ut),(dt!==v||_t!==M||Ft!==T||ee!==R)&&(i.blendFuncSeparate(Ae[dt],Ae[_t],Ae[Ft],Ae[ee]),v=dt,M=_t,T=Ft,R=ee),(De.equals(w)===!1||Ke!==D)&&(i.blendColor(De.r,De.g,De.b,Ke),w.copy(De),D=Ke),p=K,A=!1}function Le(K,Dt){K.side===2?xt(i.CULL_FACE):Z(i.CULL_FACE);let dt=K.side===1;Dt&&(dt=!dt),Kt(dt),K.blending===1&&K.transparent===!1?j(0):j(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);const _t=K.stencilWrite;a.setTest(_t),_t&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),_e(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function Zt(K){K!==0?(Z(i.CULL_FACE),K!==P&&(K===1?i.cullFace(i.BACK):K===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),P=K}function Wt(K){K!==C&&(O&&i.lineWidth(K),C=K)}function _e(K,Dt,dt){K?(Z(i.POLYGON_OFFSET_FILL),(z!==Dt||U!==dt)&&(i.polygonOffset(Dt,dt),z=Dt,U=dt)):xt(i.POLYGON_OFFSET_FILL)}function Vt(K){K?Z(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function G(K){K===void 0&&(K=i.TEXTURE0+W-1),Y!==K&&(i.activeTexture(K),Y=K)}function I(K,Dt,dt){dt===void 0&&(Y===null?dt=i.TEXTURE0+W-1:dt=Y);let _t=k[dt];_t===void 0&&(_t={type:void 0,texture:void 0},k[dt]=_t),(_t.type!==K||_t.texture!==Dt)&&(Y!==dt&&(i.activeTexture(dt),Y=dt),i.bindTexture(K,Dt||ut[K]),_t.type=K,_t.texture=Dt)}function J(){const K=k[Y];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Qt(K){Rt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Rt.copy(K))}function Ot(K){Q.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),Q.copy(K))}function me(K,Dt){let dt=l.get(Dt);dt===void 0&&(dt=new WeakMap,l.set(Dt,dt));let _t=dt.get(K);_t===void 0&&(_t=i.getUniformBlockIndex(Dt,K.name),dt.set(K,_t))}function Jt(K,Dt){const _t=l.get(Dt).get(K);c.get(Dt)!==_t&&(i.uniformBlockBinding(Dt,_t,K.__bindingPointIndex),c.set(Dt,_t))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Y=null,k={},u={},f=new WeakMap,g=[],_=null,b=!1,p=null,d=null,v=null,M=null,y=null,T=null,R=null,w=new $t(0,0,0),D=0,A=!1,E=null,P=null,C=null,z=null,U=null,Rt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:xt,bindFramebuffer:Pt,drawBuffers:Ct,useProgram:zt,setBlending:j,setMaterial:Le,setFlipSided:Kt,setCullFace:Zt,setLineWidth:Wt,setPolygonOffset:_e,setScissorTest:Vt,activeTexture:G,bindTexture:I,unbindTexture:J,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:Et,texImage3D:Gt,updateUBOMapping:me,uniformBlockBinding:Jt,texStorage2D:re,texStorage3D:vt,texSubImage2D:rt,texSubImage3D:At,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Lt,scissor:Qt,viewport:Ot,reset:Ee}}function gS(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(G,I){return g?new OffscreenCanvas(G,I):go("canvas")}function b(G,I,J){let tt=1;const it=Vt(G);if((it.width>J||it.height>J)&&(tt=J/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const rt=Math.floor(tt*it.width),At=Math.floor(tt*it.height);u===void 0&&(u=_(rt,At));const Mt=I?_(rt,At):u;return Mt.width=rt,Mt.height=At,Mt.getContext("2d").drawImage(G,0,0,rt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+rt+"x"+At+")."),Mt}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),G;return G}function p(G){return G.generateMipmaps}function d(G){i.generateMipmap(G)}function v(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(G,I,J,tt,it=!1){if(G!==null){if(i[G]!==void 0)return i[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let rt=I;if(I===i.RED&&(J===i.FLOAT&&(rt=i.R32F),J===i.HALF_FLOAT&&(rt=i.R16F),J===i.UNSIGNED_BYTE&&(rt=i.R8)),I===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.R8UI),J===i.UNSIGNED_SHORT&&(rt=i.R16UI),J===i.UNSIGNED_INT&&(rt=i.R32UI),J===i.BYTE&&(rt=i.R8I),J===i.SHORT&&(rt=i.R16I),J===i.INT&&(rt=i.R32I)),I===i.RG&&(J===i.FLOAT&&(rt=i.RG32F),J===i.HALF_FLOAT&&(rt=i.RG16F),J===i.UNSIGNED_BYTE&&(rt=i.RG8)),I===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RG8UI),J===i.UNSIGNED_SHORT&&(rt=i.RG16UI),J===i.UNSIGNED_INT&&(rt=i.RG32UI),J===i.BYTE&&(rt=i.RG8I),J===i.SHORT&&(rt=i.RG16I),J===i.INT&&(rt=i.RG32I)),I===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),J===i.UNSIGNED_INT&&(rt=i.RGB32UI),J===i.BYTE&&(rt=i.RGB8I),J===i.SHORT&&(rt=i.RGB16I),J===i.INT&&(rt=i.RGB32I)),I===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),J===i.UNSIGNED_INT&&(rt=i.RGBA32UI),J===i.BYTE&&(rt=i.RGBA8I),J===i.SHORT&&(rt=i.RGBA16I),J===i.INT&&(rt=i.RGBA32I)),I===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),I===i.RGBA){const At=it?za:we.getTransfer(tt);J===i.FLOAT&&(rt=i.RGBA32F),J===i.HALF_FLOAT&&(rt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(rt=At===Be?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function y(G,I){let J;return G?I===null||I===1014||I===1020?J=i.DEPTH24_STENCIL8:I===1015?J=i.DEPTH32F_STENCIL8:I===1012&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===1014||I===1020?J=i.DEPTH_COMPONENT24:I===1015?J=i.DEPTH_COMPONENT32F:I===1012&&(J=i.DEPTH_COMPONENT16),J}function T(G,I){return p(G)===!0||G.isFramebufferTexture&&G.minFilter!==1003&&G.minFilter!==1006?Math.log2(Math.max(I.width,I.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?I.mipmaps.length:1}function R(G){const I=G.target;I.removeEventListener("dispose",R),D(I),I.isVideoTexture&&h.delete(I)}function w(G){const I=G.target;I.removeEventListener("dispose",w),E(I)}function D(G){const I=n.get(G);if(I.__webglInit===void 0)return;const J=G.source,tt=f.get(J);if(tt){const it=tt[I.__cacheKey];it.usedTimes--,it.usedTimes===0&&A(G),Object.keys(tt).length===0&&f.delete(J)}n.remove(G)}function A(G){const I=n.get(G);i.deleteTexture(I.__webglTexture);const J=G.source,tt=f.get(J);delete tt[I.__cacheKey],o.memory.textures--}function E(G){const I=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(I.__webglFramebuffer[tt]))for(let it=0;it<I.__webglFramebuffer[tt].length;it++)i.deleteFramebuffer(I.__webglFramebuffer[tt][it]);else i.deleteFramebuffer(I.__webglFramebuffer[tt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[tt])}else{if(Array.isArray(I.__webglFramebuffer))for(let tt=0;tt<I.__webglFramebuffer.length;tt++)i.deleteFramebuffer(I.__webglFramebuffer[tt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let tt=0;tt<I.__webglColorRenderbuffer.length;tt++)I.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[tt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const J=G.textures;for(let tt=0,it=J.length;tt<it;tt++){const rt=n.get(J[tt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(J[tt])}n.remove(G)}let P=0;function C(){P=0}function z(){const G=P;return G>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+s.maxTextures),P+=1,G}function U(G){const I=[];return I.push(G.wrapS),I.push(G.wrapT),I.push(G.wrapR||0),I.push(G.magFilter),I.push(G.minFilter),I.push(G.anisotropy),I.push(G.internalFormat),I.push(G.format),I.push(G.type),I.push(G.generateMipmaps),I.push(G.premultiplyAlpha),I.push(G.flipY),I.push(G.unpackAlignment),I.push(G.colorSpace),I.join()}function W(G,I){const J=n.get(G);if(G.isVideoTexture&&Wt(G),G.isRenderTargetTexture===!1&&G.version>0&&J.__version!==G.version){const tt=G.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,G,I);return}}e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+I)}function O(G,I){const J=n.get(G);if(G.version>0&&J.__version!==G.version){Q(J,G,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+I)}function B(G,I){const J=n.get(G);if(G.version>0&&J.__version!==G.version){Q(J,G,I);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+I)}function N(G,I){const J=n.get(G);if(G.version>0&&J.__version!==G.version){ft(J,G,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+I)}const Y={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},k={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ct={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function yt(G,I){if(I.type===1015&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===1006||I.magFilter===1007||I.magFilter===1005||I.magFilter===1008||I.minFilter===1006||I.minFilter===1007||I.minFilter===1005||I.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,Y[I.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,Y[I.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,Y[I.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,k[I.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,k[I.minFilter]),I.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,ct[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===1003||I.minFilter!==1005&&I.minFilter!==1008||I.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,s.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Rt(G,I){let J=!1;G.__webglInit===void 0&&(G.__webglInit=!0,I.addEventListener("dispose",R));const tt=I.source;let it=f.get(tt);it===void 0&&(it={},f.set(tt,it));const rt=U(I);if(rt!==G.__cacheKey){it[rt]===void 0&&(it[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),it[rt].usedTimes++;const At=it[G.__cacheKey];At!==void 0&&(it[G.__cacheKey].usedTimes--,At.usedTimes===0&&A(I)),G.__cacheKey=rt,G.__webglTexture=it[rt].texture}return J}function Q(G,I,J){let tt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(tt=i.TEXTURE_3D);const it=Rt(G,I),rt=I.source;e.bindTexture(tt,G.__webglTexture,i.TEXTURE0+J);const At=n.get(rt);if(rt.version!==At.__version||it===!0){e.activeTexture(i.TEXTURE0+J);const Mt=we.getPrimaries(we.workingColorSpace),Lt=I.colorSpace===""?null:we.getPrimaries(I.colorSpace),re=I.colorSpace===""||Mt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let vt=b(I.image,!1,s.maxTextureSize);vt=_e(I,vt);const Et=r.convert(I.format,I.colorSpace),Gt=r.convert(I.type);let Qt=M(I.internalFormat,Et,Gt,I.colorSpace,I.isVideoTexture);yt(tt,I);let Ot;const me=I.mipmaps,Jt=I.isVideoTexture!==!0,Ee=At.__version===void 0||it===!0,K=rt.dataReady,Dt=T(I,vt);if(I.isDepthTexture)Qt=y(I.format===1027,I.type),Ee&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Qt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Qt,vt.width,vt.height,0,Et,Gt,null));else if(I.isDataTexture)if(me.length>0){Jt&&Ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Qt,me[0].width,me[0].height);for(let dt=0,_t=me.length;dt<_t;dt++)Ot=me[dt],Jt?K&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Et,Gt,Ot.data):e.texImage2D(i.TEXTURE_2D,dt,Qt,Ot.width,Ot.height,0,Et,Gt,Ot.data);I.generateMipmaps=!1}else Jt?(Ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Qt,vt.width,vt.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Et,Gt,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Qt,vt.width,vt.height,0,Et,Gt,vt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Jt&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Qt,me[0].width,me[0].height,vt.depth);for(let dt=0,_t=me.length;dt<_t;dt++)if(Ot=me[dt],I.format!==1023)if(Et!==null)if(Jt){if(K)if(I.layerUpdates.size>0){const Ut=qh(Ot.width,Ot.height,I.format,I.type);for(const Ft of I.layerUpdates){const ee=Ot.data.subarray(Ft*Ut/Ot.data.BYTES_PER_ELEMENT,(Ft+1)*Ut/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Ft,Ot.width,Ot.height,1,Et,ee)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Ot.width,Ot.height,vt.depth,Et,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Qt,Ot.width,Ot.height,vt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Ot.width,Ot.height,vt.depth,Et,Gt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Qt,Ot.width,Ot.height,vt.depth,0,Et,Gt,Ot.data)}else{Jt&&Ee&&e.texStorage2D(i.TEXTURE_2D,Dt,Qt,me[0].width,me[0].height);for(let dt=0,_t=me.length;dt<_t;dt++)Ot=me[dt],I.format!==1023?Et!==null?Jt?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Et,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Qt,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?K&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Ot.width,Ot.height,Et,Gt,Ot.data):e.texImage2D(i.TEXTURE_2D,dt,Qt,Ot.width,Ot.height,0,Et,Gt,Ot.data)}else if(I.isDataArrayTexture)if(Jt){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Qt,vt.width,vt.height,vt.depth),K)if(I.layerUpdates.size>0){const dt=qh(vt.width,vt.height,I.format,I.type);for(const _t of I.layerUpdates){const Ut=vt.data.subarray(_t*dt/vt.data.BYTES_PER_ELEMENT,(_t+1)*dt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,vt.width,vt.height,1,Et,Gt,Ut)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Et,Gt,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Qt,vt.width,vt.height,vt.depth,0,Et,Gt,vt.data);else if(I.isData3DTexture)Jt?(Ee&&e.texStorage3D(i.TEXTURE_3D,Dt,Qt,vt.width,vt.height,vt.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Et,Gt,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Qt,vt.width,vt.height,vt.depth,0,Et,Gt,vt.data);else if(I.isFramebufferTexture){if(Ee)if(Jt)e.texStorage2D(i.TEXTURE_2D,Dt,Qt,vt.width,vt.height);else{let dt=vt.width,_t=vt.height;for(let Ut=0;Ut<Dt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Qt,dt,_t,0,Et,Gt,null),dt>>=1,_t>>=1}}else if(me.length>0){if(Jt&&Ee){const dt=Vt(me[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Qt,dt.width,dt.height)}for(let dt=0,_t=me.length;dt<_t;dt++)Ot=me[dt],Jt?K&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et,Gt,Ot):e.texImage2D(i.TEXTURE_2D,dt,Qt,Et,Gt,Ot);I.generateMipmaps=!1}else if(Jt){if(Ee){const dt=Vt(vt);e.texStorage2D(i.TEXTURE_2D,Dt,Qt,dt.width,dt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Gt,vt)}else e.texImage2D(i.TEXTURE_2D,0,Qt,Et,Gt,vt);p(I)&&d(tt),At.__version=rt.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function ft(G,I,J){if(I.image.length!==6)return;const tt=Rt(G,I),it=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+J);const rt=n.get(it);if(it.version!==rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+J);const At=we.getPrimaries(we.workingColorSpace),Mt=I.colorSpace===""?null:we.getPrimaries(I.colorSpace),Lt=I.colorSpace===""||At===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const re=I.isCompressedTexture||I.image[0].isCompressedTexture,vt=I.image[0]&&I.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!re&&!vt?Et[_t]=b(I.image[_t],!0,s.maxCubemapSize):Et[_t]=vt?I.image[_t].image:I.image[_t],Et[_t]=_e(I,Et[_t]);const Gt=Et[0],Qt=r.convert(I.format,I.colorSpace),Ot=r.convert(I.type),me=M(I.internalFormat,Qt,Ot,I.colorSpace),Jt=I.isVideoTexture!==!0,Ee=rt.__version===void 0||tt===!0,K=it.dataReady;let Dt=T(I,Gt);yt(i.TEXTURE_CUBE_MAP,I);let dt;if(re){Jt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,me,Gt.width,Gt.height);for(let _t=0;_t<6;_t++){dt=Et[_t].mipmaps;for(let Ut=0;Ut<dt.length;Ut++){const Ft=dt[Ut];I.format!==1023?Qt!==null?Jt?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Ft.width,Ft.height,Qt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,me,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,0,0,Ft.width,Ft.height,Qt,Ot,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut,me,Ft.width,Ft.height,0,Qt,Ot,Ft.data)}}}else{if(dt=I.mipmaps,Jt&&Ee){dt.length>0&&Dt++;const _t=Vt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,me,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(vt){Jt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Qt,Ot,Et[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,me,Et[_t].width,Et[_t].height,0,Qt,Ot,Et[_t].data);for(let Ut=0;Ut<dt.length;Ut++){const ee=dt[Ut].image[_t].image;Jt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,ee.width,ee.height,Qt,Ot,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,me,ee.width,ee.height,0,Qt,Ot,ee.data)}}else{Jt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Qt,Ot,Et[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,me,Qt,Ot,Et[_t]);for(let Ut=0;Ut<dt.length;Ut++){const Ft=dt[Ut];Jt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,0,0,Qt,Ot,Ft.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ut+1,me,Qt,Ot,Ft.image[_t])}}}p(I)&&d(i.TEXTURE_CUBE_MAP),rt.__version=it.version,I.onUpdate&&I.onUpdate(I)}G.__version=I.version}function ut(G,I,J,tt,it,rt){const At=r.convert(J.format,J.colorSpace),Mt=r.convert(J.type),Lt=M(J.internalFormat,At,Mt,J.colorSpace),re=n.get(I),vt=n.get(J);if(vt.__renderTarget=I,!re.__hasExternalTextures){const Et=Math.max(1,I.width>>rt),Gt=Math.max(1,I.height>>rt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,Lt,Et,Gt,I.depth,0,At,Mt,null):e.texImage2D(it,rt,Lt,Et,Gt,0,At,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),Zt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,it,vt.__webglTexture,0,Kt(I)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,it,vt.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(G,I,J){if(i.bindRenderbuffer(i.RENDERBUFFER,G),I.depthBuffer){const tt=I.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,rt=y(I.stencilBuffer,it),At=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=Kt(I);Zt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,rt,I.width,I.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,rt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,rt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,G)}else{const tt=I.textures;for(let it=0;it<tt.length;it++){const rt=tt[it],At=r.convert(rt.format,rt.colorSpace),Mt=r.convert(rt.type),Lt=M(rt.internalFormat,At,Mt,rt.colorSpace),re=Kt(I);J&&Zt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,Lt,I.width,I.height):Zt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,Lt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(G,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(I.depthTexture);tt.__renderTarget=I,(!tt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),W(I.depthTexture,0);const it=tt.__webglTexture,rt=Kt(I);if(I.depthTexture.format===1026)Zt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(I.depthTexture.format===1027)Zt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Pt(G){const I=n.get(G),J=G.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==G.depthTexture){const tt=G.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),tt){const it=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),I.__depthDisposeCallback=it}I.__boundDepthTexture=tt}if(G.depthTexture&&!I.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");xt(I.__webglFramebuffer,G)}else if(J){I.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[tt]),I.__webglDepthbuffer[tt]===void 0)I.__webglDepthbuffer[tt]=i.createRenderbuffer(),Z(I.__webglDepthbuffer[tt],G,!1);else{const it=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=I.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),Z(I.__webglDepthbuffer,G,!1);else{const tt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(G,I,J){const tt=n.get(G);I!==void 0&&ut(tt.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Pt(G)}function zt(G){const I=G.texture,J=n.get(G),tt=n.get(I);G.addEventListener("dispose",w);const it=G.textures,rt=G.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=I.version,o.memory.textures++),rt){J.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(I.mipmaps&&I.mipmaps.length>0){J.__webglFramebuffer[Mt]=[];for(let Lt=0;Lt<I.mipmaps.length;Lt++)J.__webglFramebuffer[Mt][Lt]=i.createFramebuffer()}else J.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){J.__webglFramebuffer=[];for(let Mt=0;Mt<I.mipmaps.length;Mt++)J.__webglFramebuffer[Mt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(At)for(let Mt=0,Lt=it.length;Mt<Lt;Mt++){const re=n.get(it[Mt]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(G.samples>0&&Zt(G)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Mt=0;Mt<it.length;Mt++){const Lt=it[Mt];J.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Mt]);const re=r.convert(Lt.format,Lt.colorSpace),vt=r.convert(Lt.type),Et=M(Lt.internalFormat,re,vt,Lt.colorSpace,G.isXRRenderTarget===!0),Gt=Kt(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Et,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,J.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(J.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),yt(i.TEXTURE_CUBE_MAP,I);for(let Mt=0;Mt<6;Mt++)if(I.mipmaps&&I.mipmaps.length>0)for(let Lt=0;Lt<I.mipmaps.length;Lt++)ut(J.__webglFramebuffer[Mt][Lt],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Lt);else ut(J.__webglFramebuffer[Mt],G,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);p(I)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let Mt=0,Lt=it.length;Mt<Lt;Mt++){const re=it[Mt],vt=n.get(re);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),yt(i.TEXTURE_2D,re),ut(J.__webglFramebuffer,G,re,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),p(re)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Mt=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,tt.__webglTexture),yt(Mt,I),I.mipmaps&&I.mipmaps.length>0)for(let Lt=0;Lt<I.mipmaps.length;Lt++)ut(J.__webglFramebuffer[Lt],G,I,i.COLOR_ATTACHMENT0,Mt,Lt);else ut(J.__webglFramebuffer,G,I,i.COLOR_ATTACHMENT0,Mt,0);p(I)&&d(Mt),e.unbindTexture()}G.depthBuffer&&Pt(G)}function Xt(G){const I=G.textures;for(let J=0,tt=I.length;J<tt;J++){const it=I[J];if(p(it)){const rt=v(G),At=n.get(it).__webglTexture;e.bindTexture(rt,At),d(rt),e.unbindTexture()}}}const Ae=[],j=[];function Le(G){if(G.samples>0){if(Zt(G)===!1){const I=G.textures,J=G.width,tt=G.height;let it=i.COLOR_BUFFER_BIT;const rt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(G),Mt=I.length>1;if(Mt)for(let Lt=0;Lt<I.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Lt=0;Lt<I.length;Lt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const re=n.get(I[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,J,tt,0,0,J,tt,it,i.NEAREST),c===!0&&(Ae.length=0,j.length=0,Ae.push(i.COLOR_ATTACHMENT0+Lt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Ae.push(rt),j.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Lt=0;Lt<I.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,At.__webglColorRenderbuffer[Lt]);const re=n.get(I[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&c){const I=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function Kt(G){return Math.min(s.maxSamples,G.samples)}function Zt(G){const I=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function Wt(G){const I=o.render.frame;h.get(G)!==I&&(h.set(G,I),G.update())}function _e(G,I){const J=G.colorSpace,tt=G.format,it=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||J!==vn&&J!==""&&(we.getTransfer(J)===Be?(tt!==1023||it!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),I}function Vt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(l.width=G.naturalWidth||G.width,l.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(l.width=G.displayWidth,l.height=G.displayHeight):(l.width=G.width,l.height=G.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=C,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=B,this.setTextureCube=N,this.rebindTextures=Ct,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Zt}function _S(i,t){function e(n,s=""){let r;const o=we.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const bS={type:"move"};class qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const b of t.hand.values()){const p=e.getJointPose(b,n),d=this._getHandJoint(l,b);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,_=.005;l.inputState.pinching&&f>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bS)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vS=`
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

}`;class yS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ki({vertexShader:xS,fragmentShader:vS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ye(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MS extends Ls{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,g=null,_=null;const b=new yS,p=e.getContextAttributes();let d=null,v=null;const M=[],y=[],T=new qt;let R=null;const w=new bn;w.viewport=new de;const D=new bn;D.viewport=new de;const A=[w,D],E=new Cb;let P=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=M[Q];return ft===void 0&&(ft=new qc,M[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=M[Q];return ft===void 0&&(ft=new qc,M[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=M[Q];return ft===void 0&&(ft=new qc,M[Q]=ft),ft.getHandSpace()};function z(Q){const ft=y.indexOf(Q.inputSource);if(ft===-1)return;const ut=M[ft];ut!==void 0&&(ut.update(Q.inputSource,Q.frame,l||o),ut.dispatchEvent({type:Q.type,data:Q.inputSource}))}function U(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let Q=0;Q<M.length;Q++){const ft=y[Q];ft!==null&&(y[Q]=null,M[Q].disconnect(ft))}P=null,C=null,b.reset(),t.setRenderTarget(d),g=null,f=null,u=null,s=null,v=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const ft={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Is(g.framebufferWidth,g.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let ft=null,ut=null,Z=null;p.depth&&(Z=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=p.stencil?1027:1026,ut=p.stencil?1020:1014);const xt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Is(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new Gm(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Rt.setContext(s),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function W(Q){for(let ft=0;ft<Q.removed.length;ft++){const ut=Q.removed[ft],Z=y.indexOf(ut);Z>=0&&(y[Z]=null,M[Z].disconnect(ut))}for(let ft=0;ft<Q.added.length;ft++){const ut=Q.added[ft];let Z=y.indexOf(ut);if(Z===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=y.length){y.push(ut),Z=Pt;break}else if(y[Pt]===null){y[Pt]=ut,Z=Pt;break}if(Z===-1)break}const xt=M[Z];xt&&xt.connect(ut)}}const O=new H,B=new H;function N(Q,ft,ut){O.setFromMatrixPosition(ft.matrixWorld),B.setFromMatrixPosition(ut.matrixWorld);const Z=O.distanceTo(B),xt=ft.projectionMatrix.elements,Pt=ut.projectionMatrix.elements,Ct=xt[14]/(xt[10]-1),zt=xt[14]/(xt[10]+1),Xt=(xt[9]+1)/xt[5],Ae=(xt[9]-1)/xt[5],j=(xt[8]-1)/xt[0],Le=(Pt[8]+1)/Pt[0],Kt=Ct*j,Zt=Ct*Le,Wt=Z/(-j+Le),_e=Wt*-j;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(_e),Q.translateZ(Wt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),xt[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Vt=Ct+Wt,G=zt+Wt,I=Kt-_e,J=Zt+(Z-_e),tt=Xt*zt/G*Vt,it=Ae*zt/G*Vt;Q.projectionMatrix.makePerspective(I,J,tt,it,Vt,G),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Y(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ft=Q.near,ut=Q.far;b.texture!==null&&(b.depthNear>0&&(ft=b.depthNear),b.depthFar>0&&(ut=b.depthFar)),E.near=D.near=w.near=ft,E.far=D.far=w.far=ut,(P!==E.near||C!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,C=E.far),w.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,E.layers.mask=w.layers.mask|D.layers.mask;const Z=Q.parent,xt=E.cameras;Y(E,Z);for(let Pt=0;Pt<xt.length;Pt++)Y(xt[Pt],Z);xt.length===2?N(E,w,D):E.projectionMatrix.copy(w.projectionMatrix),k(Q,E,Z)};function k(Q,ft,ut){ut===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(ut.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(E)};let ct=null;function yt(Q,ft){if(h=ft.getViewerPose(l||o),_=ft,h!==null){const ut=h.views;g!==null&&(t.setRenderTargetFramebuffer(v,g.framebuffer),t.setRenderTarget(v));let Z=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,Z=!0);for(let Pt=0;Pt<ut.length;Pt++){const Ct=ut[Pt];let zt=null;if(g!==null)zt=g.getViewport(Ct);else{const Ae=u.getViewSubImage(f,Ct);zt=Ae.viewport,Pt===0&&(t.setRenderTargetTextures(v,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),t.setRenderTarget(v))}let Xt=A[Pt];Xt===void 0&&(Xt=new bn,Xt.layers.enable(Pt),Xt.viewport=new de,A[Pt]=Xt),Xt.matrix.fromArray(Ct.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ct.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(zt.x,zt.y,zt.width,zt.height),Pt===0&&(E.matrix.copy(Xt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Z===!0&&E.cameras.push(Xt)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Pt=u.getDepthInformation(ut[0]);Pt&&Pt.isValid&&Pt.texture&&b.init(t,Pt,s.renderState)}}for(let ut=0;ut<M.length;ut++){const Z=y[ut],xt=M[ut];Z!==null&&xt!==void 0&&xt.update(Z,ft,l||o)}ct&&ct(Q,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),_=null}const Rt=new $m;Rt.setAnimationLoop(yt),this.setAnimationLoop=function(Q){ct=Q},this.dispose=function(){}}}const ms=new Vn,SS=new se;function AS(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Lm(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,v,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&g(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),b(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,v,M):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===1&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===1&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=t.get(d),M=v.envMap,y=v.envMapRotation;M&&(p.envMap.value=M,ms.copy(y),ms.x*=-1,ms.y*=-1,ms.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),p.envMapRotation.value.setFromMatrix4(SS.makeRotationFromEuler(ms)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,v,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function b(p,d){const v=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ES(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function l(v,M){let y=s[v.id];y===void 0&&(_(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",p));const T=M.program;n.updateUBOMapping(v,T);const R=t.render.frame;r[v.id]!==R&&(f(v),r[v.id]=R)}function h(v){const M=u();v.__bindingPointIndex=M;const y=i.createBuffer(),T=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,w=y.length;R<w;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let A=0,E=D.length;A<E;A++){const P=D[A];if(g(P,R,A,T)===!0){const C=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let W=0;W<z.length;W++){const O=z[W],B=b(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,C+U,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,U),U+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(v,M,y,T){const R=v.value,w=M+"_"+y;if(T[w]===void 0)return typeof R=="number"||typeof R=="boolean"?T[w]=R:T[w]=R.clone(),!0;{const D=T[w];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return T[w]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function _(v){const M=v.uniforms;let y=0;const T=16;for(let w=0,D=M.length;w<D;w++){const A=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,P=A.length;E<P;E++){const C=A[E],z=Array.isArray(C.value)?C.value:[C.value];for(let U=0,W=z.length;U<W;U++){const O=z[U],B=b(O),N=y%T,Y=N%B.boundary,k=N+Y;y+=Y,k!==0&&T-k<B.storage&&(y+=T-k),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=B.storage}}}const R=y%T;return R>0&&(y+=T-R),v.__size=y,v.__cache={},this}function b(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){const M=v.target;M.removeEventListener("dispose",p);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class TS{constructor(t={}){const{canvas:e=S_(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),b=new Int32Array(4);let p=null,d=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let T=!1,R=0,w=0,D=null,A=-1,E=null;const P=new de,C=new de;let z=null;const U=new $t(0);let W=0,O=e.width,B=e.height,N=1,Y=null,k=null;const ct=new de(0,0,O,B),yt=new de(0,0,O,B);let Rt=!1;const Q=new yu;let ft=!1,ut=!1;const Z=new se,xt=new se,Pt=new H,Ct=new de,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Ae(){return D===null?N:1}let j=n;function Le(x,m){return e.getContext(x,m)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),j===null){const m="webgl2";if(j=Le(m,x),j===null)throw Le(m)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Kt,Zt,Wt,_e,Vt,G,I,J,tt,it,rt,At,Mt,Lt,re,vt,Et,Gt,Qt,Ot,me,Jt,Ee,K;function Dt(){Kt=new Ny(j),Kt.init(),Jt=new _S(j,Kt),Zt=new Cy(j,Kt,t,Jt),Wt=new mS(j,Kt),Zt.reverseDepthBuffer&&f&&Wt.buffers.depth.setReversed(!0),_e=new ky(j),Vt=new nS,G=new gS(j,Kt,Wt,Vt,Zt,Jt,_e),I=new Py(y),J=new Fy(y),tt=new jb(j),Ee=new wy(j,tt),it=new Uy(j,tt,_e,Ee),rt=new zy(j,it,tt,_e),Qt=new By(j,Zt,G),vt=new Iy(Vt),At=new eS(y,I,J,Kt,Zt,Ee,vt),Mt=new AS(y,Vt),Lt=new sS,re=new uS(Kt),Gt=new Ty(y,I,J,Wt,rt,g,c),Et=new dS(y,rt,Zt),K=new ES(j,_e,Zt,Wt),Ot=new Ry(j,Kt,_e),me=new Oy(j,Kt,_e),_e.programs=At.programs,y.capabilities=Zt,y.extensions=Kt,y.properties=Vt,y.renderLists=Lt,y.shadowMap=Et,y.state=Wt,y.info=_e}Dt();const dt=new MS(y,j);this.xr=dt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const x=Kt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Kt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(x){x!==void 0&&(N=x,this.setSize(O,B,!1))},this.getSize=function(x){return x.set(O,B)},this.setSize=function(x,m,F=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=x,B=m,e.width=Math.floor(x*N),e.height=Math.floor(m*N),F===!0&&(e.style.width=x+"px",e.style.height=m+"px"),this.setViewport(0,0,x,m)},this.getDrawingBufferSize=function(x){return x.set(O*N,B*N).floor()},this.setDrawingBufferSize=function(x,m,F){O=x,B=m,N=F,e.width=Math.floor(x*F),e.height=Math.floor(m*F),this.setViewport(0,0,x,m)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(ct)},this.setViewport=function(x,m,F,L){x.isVector4?ct.set(x.x,x.y,x.z,x.w):ct.set(x,m,F,L),Wt.viewport(P.copy(ct).multiplyScalar(N).round())},this.getScissor=function(x){return x.copy(yt)},this.setScissor=function(x,m,F,L){x.isVector4?yt.set(x.x,x.y,x.z,x.w):yt.set(x,m,F,L),Wt.scissor(C.copy(yt).multiplyScalar(N).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(x){Wt.setScissorTest(Rt=x)},this.setOpaqueSort=function(x){Y=x},this.setTransparentSort=function(x){k=x},this.getClearColor=function(x){return x.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(x=!0,m=!0,F=!0){let L=0;if(x){let S=!1;if(D!==null){const V=D.texture.format;S=V===1033||V===1031||V===1029}if(S){const V=D.texture.type,q=V===1009||V===1014||V===1012||V===1020||V===1017||V===1018,$=Gt.getClearColor(),et=Gt.getClearAlpha(),nt=$.r,lt=$.g,mt=$.b;q?(_[0]=nt,_[1]=lt,_[2]=mt,_[3]=et,j.clearBufferuiv(j.COLOR,0,_)):(b[0]=nt,b[1]=lt,b[2]=mt,b[3]=et,j.clearBufferiv(j.COLOR,0,b))}else L|=j.COLOR_BUFFER_BIT}m&&(L|=j.DEPTH_BUFFER_BIT),F&&(L|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),Gt.dispose(),Lt.dispose(),re.dispose(),Vt.dispose(),I.dispose(),J.dispose(),rt.dispose(),Ee.dispose(),K.dispose(),At.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",zi),dt.removeEventListener("sessionend",xi),Pn.stop()};function _t(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=_e.autoReset,m=Et.enabled,F=Et.autoUpdate,L=Et.needsUpdate,S=Et.type;Dt(),_e.autoReset=x,Et.enabled=m,Et.autoUpdate=F,Et.needsUpdate=L,Et.type=S}function Ft(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ee(x){const m=x.target;m.removeEventListener("dispose",ee),De(m)}function De(x){Ke(x),Vt.remove(x)}function Ke(x){const m=Vt.get(x).programs;m!==void 0&&(m.forEach(function(F){At.releaseProgram(F)}),x.isShaderMaterial&&At.releaseShaderCache(x))}this.renderBufferDirect=function(x,m,F,L,S,V){m===null&&(m=zt);const q=S.isMesh&&S.matrixWorld.determinant()<0,$=Ns(x,m,F,L,S);Wt.setMaterial(L,q);let et=F.index,nt=1;if(L.wireframe===!0){if(et=it.getWireframeAttribute(F),et===void 0)return;nt=2}const lt=F.drawRange,mt=F.attributes.position;let st=lt.start*nt,ht=(lt.start+lt.count)*nt;V!==null&&(st=Math.max(st,V.start*nt),ht=Math.min(ht,(V.start+V.count)*nt)),et!==null?(st=Math.max(st,0),ht=Math.min(ht,et.count)):mt!=null&&(st=Math.max(st,0),ht=Math.min(ht,mt.count));const pt=ht-st;if(pt<0||pt===1/0)return;Ee.setup(S,L,$,F,et);let wt,X=Ot;if(et!==null&&(wt=tt.get(et),X=me,X.setIndex(wt)),S.isMesh)L.wireframe===!0?(Wt.setLineWidth(L.wireframeLinewidth*Ae()),X.setMode(j.LINES)):X.setMode(j.TRIANGLES);else if(S.isLine){let at=L.linewidth;at===void 0&&(at=1),Wt.setLineWidth(at*Ae()),S.isLineSegments?X.setMode(j.LINES):S.isLineLoop?X.setMode(j.LINE_LOOP):X.setMode(j.LINE_STRIP)}else S.isPoints?X.setMode(j.POINTS):S.isSprite&&X.setMode(j.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)X.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))X.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const at=S._multiDrawStarts,ot=S._multiDrawCounts,gt=S._multiDrawCount,St=et?tt.get(et).bytesPerElement:1,It=Vt.get(L).currentProgram.getUniforms();for(let Ht=0;Ht<gt;Ht++)It.setValue(j,"_gl_DrawID",Ht),X.render(at[Ht]/St,ot[Ht])}else if(S.isInstancedMesh)X.renderInstances(st,pt,S.count);else if(F.isInstancedBufferGeometry){const at=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ot=Math.min(F.instanceCount,at);X.renderInstances(st,pt,ot)}else X.render(st,pt)};function Me(x,m,F){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,ri(x,m,F),x.side=0,x.needsUpdate=!0,ri(x,m,F),x.side=2):ri(x,m,F)}this.compile=function(x,m,F=null){F===null&&(F=x),d=re.get(F),d.init(m),M.push(d),F.traverseVisible(function(S){S.isLight&&S.layers.test(m.layers)&&(d.pushLight(S),S.castShadow&&d.pushShadow(S))}),x!==F&&x.traverseVisible(function(S){S.isLight&&S.layers.test(m.layers)&&(d.pushLight(S),S.castShadow&&d.pushShadow(S))}),d.setupLights();const L=new Set;return x.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const V=S.material;if(V)if(Array.isArray(V))for(let q=0;q<V.length;q++){const $=V[q];Me($,F,S),L.add($)}else Me(V,F,S),L.add(V)}),M.pop(),d=null,L},this.compileAsync=function(x,m,F=null){const L=this.compile(x,m,F);return new Promise(S=>{function V(){if(L.forEach(function(q){Vt.get(q).currentProgram.isReady()&&L.delete(q)}),L.size===0){S(x);return}setTimeout(V,10)}Kt.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let Xe=null;function yn(x){Xe&&Xe(x)}function zi(){Pn.stop()}function xi(){Pn.start()}const Pn=new $m;Pn.setAnimationLoop(yn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(x){Xe=x,dt.setAnimationLoop(x),x===null?Pn.stop():Pn.start()},dt.addEventListener("sessionstart",zi),dt.addEventListener("sessionend",xi),this.render=function(x,m){if(m!==void 0&&m.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(m),m=dt.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,m,D),d=re.get(x,M.length),d.init(m),M.push(d),xt.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse),Q.setFromProjectionMatrix(xt),ut=this.localClippingEnabled,ft=vt.init(this.clippingPlanes,ut),p=Lt.get(x,v.length),p.init(),v.push(p),dt.enabled===!0&&dt.isPresenting===!0){const V=y.xr.getDepthSensingMesh();V!==null&&Xn(V,m,-1/0,y.sortObjects)}Xn(x,m,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(Y,k),Xt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Xt&&Gt.addToRenderList(p,x),this.info.render.frame++,ft===!0&&vt.beginShadows();const F=d.state.shadowsArray;Et.render(F,x,m),ft===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const L=p.opaque,S=p.transmissive;if(d.setupLights(),m.isArrayCamera){const V=m.cameras;if(S.length>0)for(let q=0,$=V.length;q<$;q++){const et=V[q];si(L,S,x,et)}Xt&&Gt.render(x);for(let q=0,$=V.length;q<$;q++){const et=V[q];Gi(p,x,et,et.viewport)}}else S.length>0&&si(L,S,x,m),Xt&&Gt.render(x),Gi(p,x,m);D!==null&&(G.updateMultisampleRenderTarget(D),G.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(y,x,m),Ee.resetDefaultState(),A=-1,E=null,M.pop(),M.length>0?(d=M[M.length-1],ft===!0&&vt.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Xn(x,m,F,L){if(x.visible===!1)return;if(x.layers.test(m.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(m);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Q.intersectsSprite(x)){L&&Ct.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xt);const q=rt.update(x),$=x.material;$.visible&&p.push(x,q,$,F,Ct.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Q.intersectsObject(x))){const q=rt.update(x),$=x.material;if(L&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ct.copy(x.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),Ct.copy(q.boundingSphere.center)),Ct.applyMatrix4(x.matrixWorld).applyMatrix4(xt)),Array.isArray($)){const et=q.groups;for(let nt=0,lt=et.length;nt<lt;nt++){const mt=et[nt],st=$[mt.materialIndex];st&&st.visible&&p.push(x,q,st,F,Ct.z,mt)}}else $.visible&&p.push(x,q,$,F,Ct.z,null)}}const V=x.children;for(let q=0,$=V.length;q<$;q++)Xn(V[q],m,F,L)}function Gi(x,m,F,L){const S=x.opaque,V=x.transmissive,q=x.transparent;d.setupLightsView(F),ft===!0&&vt.setGlobalState(y.clippingPlanes,F),L&&Wt.viewport(P.copy(L)),S.length>0&&vi(S,m,F),V.length>0&&vi(V,m,F),q.length>0&&vi(q,m,F),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function si(x,m,F,L){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[L.id]===void 0&&(d.state.transmissionRenderTarget[L.id]=new Is(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const V=d.state.transmissionRenderTarget[L.id],q=L.viewport||P;V.setSize(q.z,q.w);const $=y.getRenderTarget();y.setRenderTarget(V),y.getClearColor(U),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&Gt.render(F);const et=y.toneMapping;y.toneMapping=0;const nt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),d.setupLightsView(L),ft===!0&&vt.setGlobalState(y.clippingPlanes,L),vi(x,F,L),G.updateMultisampleRenderTarget(V),G.updateRenderTargetMipmap(V),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let mt=0,st=m.length;mt<st;mt++){const ht=m[mt],pt=ht.object,wt=ht.geometry,X=ht.material,at=ht.group;if(X.side===2&&pt.layers.test(L.layers)){const ot=X.side;X.side=1,X.needsUpdate=!0,Hi(pt,F,L,wt,X,at),X.side=ot,X.needsUpdate=!0,lt=!0}}lt===!0&&(G.updateMultisampleRenderTarget(V),G.updateRenderTargetMipmap(V))}y.setRenderTarget($),y.setClearColor(U,W),nt!==void 0&&(L.viewport=nt),y.toneMapping=et}function vi(x,m,F){const L=m.isScene===!0?m.overrideMaterial:null;for(let S=0,V=x.length;S<V;S++){const q=x[S],$=q.object,et=q.geometry,nt=L===null?q.material:L,lt=q.group;$.layers.test(F.layers)&&Hi($,m,F,et,nt,lt)}}function Hi(x,m,F,L,S,V){x.onBeforeRender(y,m,F,L,S,V),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),S.onBeforeRender(y,m,F,L,x,V),S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,y.renderBufferDirect(F,m,L,S,x,V),S.side=0,S.needsUpdate=!0,y.renderBufferDirect(F,m,L,S,x,V),S.side=2):y.renderBufferDirect(F,m,L,S,x,V),x.onAfterRender(y,m,F,L,S,V)}function ri(x,m,F){m.isScene!==!0&&(m=zt);const L=Vt.get(x),S=d.state.lights,V=d.state.shadowsArray,q=S.state.version,$=At.getParameters(x,S.state,V,m,F),et=At.getProgramCacheKey($);let nt=L.programs;L.environment=x.isMeshStandardMaterial?m.environment:null,L.fog=m.fog,L.envMap=(x.isMeshStandardMaterial?J:I).get(x.envMap||L.environment),L.envMapRotation=L.environment!==null&&x.envMap===null?m.environmentRotation:x.envMapRotation,nt===void 0&&(x.addEventListener("dispose",ee),nt=new Map,L.programs=nt);let lt=nt.get(et);if(lt!==void 0){if(L.currentProgram===lt&&L.lightsStateVersion===q)return rs(x,$),lt}else $.uniforms=At.getUniforms(x),x.onBeforeCompile($,y),lt=At.acquireProgram($,et),nt.set(et,lt),L.uniforms=$.uniforms;const mt=L.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(mt.clippingPlanes=vt.uniform),rs(x,$),L.needsLights=as(x),L.lightsStateVersion=q,L.needsLights&&(mt.ambientLightColor.value=S.state.ambient,mt.lightProbe.value=S.state.probe,mt.directionalLights.value=S.state.directional,mt.directionalLightShadows.value=S.state.directionalShadow,mt.spotLights.value=S.state.spot,mt.spotLightShadows.value=S.state.spotShadow,mt.rectAreaLights.value=S.state.rectArea,mt.ltc_1.value=S.state.rectAreaLTC1,mt.ltc_2.value=S.state.rectAreaLTC2,mt.pointLights.value=S.state.point,mt.pointLightShadows.value=S.state.pointShadow,mt.hemisphereLights.value=S.state.hemi,mt.directionalShadowMap.value=S.state.directionalShadowMap,mt.directionalShadowMatrix.value=S.state.directionalShadowMatrix,mt.spotShadowMap.value=S.state.spotShadowMap,mt.spotLightMatrix.value=S.state.spotLightMatrix,mt.spotLightMap.value=S.state.spotLightMap,mt.pointShadowMap.value=S.state.pointShadowMap,mt.pointShadowMatrix.value=S.state.pointShadowMatrix),L.currentProgram=lt,L.uniformsList=null,lt}function Vi(x){if(x.uniformsList===null){const m=x.currentProgram.getUniforms();x.uniformsList=Da.seqWithValue(m.seq,x.uniforms)}return x.uniformsList}function rs(x,m){const F=Vt.get(x);F.outputColorSpace=m.outputColorSpace,F.batching=m.batching,F.batchingColor=m.batchingColor,F.instancing=m.instancing,F.instancingColor=m.instancingColor,F.instancingMorph=m.instancingMorph,F.skinning=m.skinning,F.morphTargets=m.morphTargets,F.morphNormals=m.morphNormals,F.morphColors=m.morphColors,F.morphTargetsCount=m.morphTargetsCount,F.numClippingPlanes=m.numClippingPlanes,F.numIntersection=m.numClipIntersection,F.vertexAlphas=m.vertexAlphas,F.vertexTangents=m.vertexTangents,F.toneMapping=m.toneMapping}function Ns(x,m,F,L,S){m.isScene!==!0&&(m=zt),G.resetTextureUnits();const V=m.fog,q=L.isMeshStandardMaterial?m.environment:null,$=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:vn,et=(L.isMeshStandardMaterial?J:I).get(L.envMap||q),nt=L.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,lt=!!F.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),mt=!!F.morphAttributes.position,st=!!F.morphAttributes.normal,ht=!!F.morphAttributes.color;let pt=0;L.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=y.toneMapping);const wt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,X=wt!==void 0?wt.length:0,at=Vt.get(L),ot=d.state.lights;if(ft===!0&&(ut===!0||x!==E)){const oe=x===E&&L.id===A;vt.setState(L,x,oe)}let gt=!1;L.version===at.__version?(at.needsLights&&at.lightsStateVersion!==ot.state.version||at.outputColorSpace!==$||S.isBatchedMesh&&at.batching===!1||!S.isBatchedMesh&&at.batching===!0||S.isBatchedMesh&&at.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&at.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&at.instancing===!1||!S.isInstancedMesh&&at.instancing===!0||S.isSkinnedMesh&&at.skinning===!1||!S.isSkinnedMesh&&at.skinning===!0||S.isInstancedMesh&&at.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&at.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&at.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&at.instancingMorph===!1&&S.morphTexture!==null||at.envMap!==et||L.fog===!0&&at.fog!==V||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==vt.numPlanes||at.numIntersection!==vt.numIntersection)||at.vertexAlphas!==nt||at.vertexTangents!==lt||at.morphTargets!==mt||at.morphNormals!==st||at.morphColors!==ht||at.toneMapping!==pt||at.morphTargetsCount!==X)&&(gt=!0):(gt=!0,at.__version=L.version);let St=at.currentProgram;gt===!0&&(St=ri(L,m,S));let It=!1,Ht=!1,ae=!1;const ne=St.getUniforms(),Bt=at.uniforms;if(Wt.useProgram(St.program)&&(It=!0,Ht=!0,ae=!0),L.id!==A&&(A=L.id,Ht=!0),It||E!==x){Wt.buffers.depth.getReversed()?(Z.copy(x.projectionMatrix),E_(Z),T_(Z),ne.setValue(j,"projectionMatrix",Z)):ne.setValue(j,"projectionMatrix",x.projectionMatrix),ne.setValue(j,"viewMatrix",x.matrixWorldInverse);const be=ne.map.cameraPosition;be!==void 0&&be.setValue(j,Pt.setFromMatrixPosition(x.matrixWorld)),Zt.logarithmicDepthBuffer&&ne.setValue(j,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ne.setValue(j,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,Ht=!0,ae=!0)}if(S.isSkinnedMesh){ne.setOptional(j,S,"bindMatrix"),ne.setOptional(j,S,"bindMatrixInverse");const oe=S.skeleton;oe&&(oe.boneTexture===null&&oe.computeBoneTexture(),ne.setValue(j,"boneTexture",oe.boneTexture,G))}S.isBatchedMesh&&(ne.setOptional(j,S,"batchingTexture"),ne.setValue(j,"batchingTexture",S._matricesTexture,G),ne.setOptional(j,S,"batchingIdTexture"),ne.setValue(j,"batchingIdTexture",S._indirectTexture,G),ne.setOptional(j,S,"batchingColorTexture"),S._colorsTexture!==null&&ne.setValue(j,"batchingColorTexture",S._colorsTexture,G));const ie=F.morphAttributes;if((ie.position!==void 0||ie.normal!==void 0||ie.color!==void 0)&&Qt.update(S,F,St),(Ht||at.receiveShadow!==S.receiveShadow)&&(at.receiveShadow=S.receiveShadow,ne.setValue(j,"receiveShadow",S.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(Bt.envMap.value=et,Bt.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),L.isMeshStandardMaterial&&L.envMap===null&&m.environment!==null&&(Bt.envMapIntensity.value=m.environmentIntensity),Ht&&(ne.setValue(j,"toneMappingExposure",y.toneMappingExposure),at.needsLights&&os(Bt,ae),V&&L.fog===!0&&Mt.refreshFogUniforms(Bt,V),Mt.refreshMaterialUniforms(Bt,L,N,B,d.state.transmissionRenderTarget[x.id]),Da.upload(j,Vi(at),Bt,G)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Da.upload(j,Vi(at),Bt,G),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ne.setValue(j,"center",S.center),ne.setValue(j,"modelViewMatrix",S.modelViewMatrix),ne.setValue(j,"normalMatrix",S.normalMatrix),ne.setValue(j,"modelMatrix",S.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const oe=L.uniformsGroups;for(let be=0,bt=oe.length;be<bt;be++){const Yt=oe[be];K.update(Yt,St),K.bind(Yt,St)}}return St}function os(x,m){x.ambientLightColor.needsUpdate=m,x.lightProbe.needsUpdate=m,x.directionalLights.needsUpdate=m,x.directionalLightShadows.needsUpdate=m,x.pointLights.needsUpdate=m,x.pointLightShadows.needsUpdate=m,x.spotLights.needsUpdate=m,x.spotLightShadows.needsUpdate=m,x.rectAreaLights.needsUpdate=m,x.hemisphereLights.needsUpdate=m}function as(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,m,F){Vt.get(x.texture).__webglTexture=m,Vt.get(x.depthTexture).__webglTexture=F;const L=Vt.get(x);L.__hasExternalTextures=!0,L.__autoAllocateDepthBuffer=F===void 0,L.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,m){const F=Vt.get(x);F.__webglFramebuffer=m,F.__useDefaultFramebuffer=m===void 0},this.setRenderTarget=function(x,m=0,F=0){D=x,R=m,w=F;let L=!0,S=null,V=!1,q=!1;if(x){const et=Vt.get(x);if(et.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(j.FRAMEBUFFER,null),L=!1;else if(et.__webglFramebuffer===void 0)G.setupRenderTarget(x);else if(et.__hasExternalTextures)G.rebindTextures(x,Vt.get(x.texture).__webglTexture,Vt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const mt=x.depthTexture;if(et.__boundDepthTexture!==mt){if(mt!==null&&Vt.has(mt)&&(x.width!==mt.image.width||x.height!==mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(x)}}const nt=x.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(q=!0);const lt=Vt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(lt[m])?S=lt[m][F]:S=lt[m],V=!0):x.samples>0&&G.useMultisampledRTT(x)===!1?S=Vt.get(x).__webglMultisampledFramebuffer:Array.isArray(lt)?S=lt[F]:S=lt,P.copy(x.viewport),C.copy(x.scissor),z=x.scissorTest}else P.copy(ct).multiplyScalar(N).floor(),C.copy(yt).multiplyScalar(N).floor(),z=Rt;if(Wt.bindFramebuffer(j.FRAMEBUFFER,S)&&L&&Wt.drawBuffers(x,S),Wt.viewport(P),Wt.scissor(C),Wt.setScissorTest(z),V){const et=Vt.get(x.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+m,et.__webglTexture,F)}else if(q){const et=Vt.get(x.texture),nt=m||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,et.__webglTexture,F||0,nt)}A=-1},this.readRenderTargetPixels=function(x,m,F,L,S,V,q){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $=Vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&q!==void 0&&($=$[q]),$){Wt.bindFramebuffer(j.FRAMEBUFFER,$);try{const et=x.texture,nt=et.format,lt=et.type;if(!Zt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Zt.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}m>=0&&m<=x.width-L&&F>=0&&F<=x.height-S&&j.readPixels(m,F,L,S,Jt.convert(nt),Jt.convert(lt),V)}finally{const et=D!==null?Vt.get(D).__webglFramebuffer:null;Wt.bindFramebuffer(j.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(x,m,F,L,S,V,q){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $=Vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&q!==void 0&&($=$[q]),$){const et=x.texture,nt=et.format,lt=et.type;if(!Zt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Zt.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(m>=0&&m<=x.width-L&&F>=0&&F<=x.height-S){Wt.bindFramebuffer(j.FRAMEBUFFER,$);const mt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,mt),j.bufferData(j.PIXEL_PACK_BUFFER,V.byteLength,j.STREAM_READ),j.readPixels(m,F,L,S,Jt.convert(nt),Jt.convert(lt),0);const st=D!==null?Vt.get(D).__webglFramebuffer:null;Wt.bindFramebuffer(j.FRAMEBUFFER,st);const ht=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await A_(j,ht,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,mt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,V),j.deleteBuffer(mt),j.deleteSync(ht),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,m=null,F=0){x.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),m=arguments[0]||null,x=arguments[1]);const L=Math.pow(2,-F),S=Math.floor(x.image.width*L),V=Math.floor(x.image.height*L),q=m!==null?m.x:0,$=m!==null?m.y:0;G.setTexture2D(x,0),j.copyTexSubImage2D(j.TEXTURE_2D,F,0,0,q,$,S,V),Wt.unbindTexture()};const cs=j.createFramebuffer(),Tt=j.createFramebuffer();this.copyTextureToTexture=function(x,m,F=null,L=null,S=0,V=null){x.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1],m=arguments[2],V=arguments[3]||0,F=null),V===null&&(S!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),V=S,S=0):V=0);let q,$,et,nt,lt,mt,st,ht,pt;const wt=x.isCompressedTexture?x.mipmaps[V]:x.image;if(F!==null)q=F.max.x-F.min.x,$=F.max.y-F.min.y,et=F.isBox3?F.max.z-F.min.z:1,nt=F.min.x,lt=F.min.y,mt=F.isBox3?F.min.z:0;else{const ie=Math.pow(2,-S);q=Math.floor(wt.width*ie),$=Math.floor(wt.height*ie),x.isDataArrayTexture?et=wt.depth:x.isData3DTexture?et=Math.floor(wt.depth*ie):et=1,nt=0,lt=0,mt=0}L!==null?(st=L.x,ht=L.y,pt=L.z):(st=0,ht=0,pt=0);const X=Jt.convert(m.format),at=Jt.convert(m.type);let ot;m.isData3DTexture?(G.setTexture3D(m,0),ot=j.TEXTURE_3D):m.isDataArrayTexture||m.isCompressedArrayTexture?(G.setTexture2DArray(m,0),ot=j.TEXTURE_2D_ARRAY):(G.setTexture2D(m,0),ot=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,m.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,m.unpackAlignment);const gt=j.getParameter(j.UNPACK_ROW_LENGTH),St=j.getParameter(j.UNPACK_IMAGE_HEIGHT),It=j.getParameter(j.UNPACK_SKIP_PIXELS),Ht=j.getParameter(j.UNPACK_SKIP_ROWS),ae=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,wt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,wt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,nt),j.pixelStorei(j.UNPACK_SKIP_ROWS,lt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,mt);const ne=x.isDataArrayTexture||x.isData3DTexture,Bt=m.isDataArrayTexture||m.isData3DTexture;if(x.isDepthTexture){const ie=Vt.get(x),oe=Vt.get(m),be=Vt.get(ie.__renderTarget),bt=Vt.get(oe.__renderTarget);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,be.__webglFramebuffer),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Yt=0;Yt<et;Yt++)ne&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vt.get(x).__webglTexture,S,mt+Yt),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Vt.get(m).__webglTexture,V,pt+Yt)),j.blitFramebuffer(nt,lt,q,$,st,ht,q,$,j.DEPTH_BUFFER_BIT,j.NEAREST);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(S!==0||x.isRenderTargetTexture||Vt.has(x)){const ie=Vt.get(x),oe=Vt.get(m);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,cs),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Tt);for(let be=0;be<et;be++)ne?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ie.__webglTexture,S,mt+be):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ie.__webglTexture,S),Bt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.__webglTexture,V,pt+be):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,oe.__webglTexture,V),S!==0?j.blitFramebuffer(nt,lt,q,$,st,ht,q,$,j.COLOR_BUFFER_BIT,j.NEAREST):Bt?j.copyTexSubImage3D(ot,V,st,ht,pt+be,nt,lt,q,$):j.copyTexSubImage2D(ot,V,st,ht,nt,lt,q,$);Wt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Bt?x.isDataTexture||x.isData3DTexture?j.texSubImage3D(ot,V,st,ht,pt,q,$,et,X,at,wt.data):m.isCompressedArrayTexture?j.compressedTexSubImage3D(ot,V,st,ht,pt,q,$,et,X,wt.data):j.texSubImage3D(ot,V,st,ht,pt,q,$,et,X,at,wt):x.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,V,st,ht,q,$,X,at,wt.data):x.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,V,st,ht,wt.width,wt.height,X,wt.data):j.texSubImage2D(j.TEXTURE_2D,V,st,ht,q,$,X,at,wt);j.pixelStorei(j.UNPACK_ROW_LENGTH,gt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,St),j.pixelStorei(j.UNPACK_SKIP_PIXELS,It),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ht),j.pixelStorei(j.UNPACK_SKIP_IMAGES,ae),V===0&&m.generateMipmaps&&j.generateMipmap(ot),Wt.unbindTexture()},this.copyTextureToTexture3D=function(x,m,F=null,L=null,S=0){return x.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,L=arguments[1]||null,x=arguments[2],m=arguments[3],S=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,m,F,L,S)},this.initRenderTarget=function(x){Vt.get(x).__webglFramebuffer===void 0&&G.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?G.setTextureCube(x,0):x.isData3DTexture?G.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?G.setTexture2DArray(x,0):G.setTexture2D(x,0),Wt.unbindTexture()},this.resetState=function(){R=0,w=0,D=null,Wt.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),e.unpackColorSpace=we._getUnpackColorSpace()}}function xf(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class wS extends Cr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new LS(e)}),this.register(function(e){return new DS(e)}),this.register(function(e){return new HS(e)}),this.register(function(e){return new VS(e)}),this.register(function(e){return new WS(e)}),this.register(function(e){return new NS(e)}),this.register(function(e){return new US(e)}),this.register(function(e){return new OS(e)}),this.register(function(e){return new kS(e)}),this.register(function(e){return new PS(e)}),this.register(function(e){return new BS(e)}),this.register(function(e){return new FS(e)}),this.register(function(e){return new GS(e)}),this.register(function(e){return new zS(e)}),this.register(function(e){return new CS(e)}),this.register(function(e){return new jS(e)}),this.register(function(e){return new XS(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=uo.extractUrlBase(t);o=uo.resolveURL(l,this.path)}else o=uo.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Xm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===tg){try{o[ve.KHR_BINARY_GLTF]=new qS(t)}catch(u){s&&s(u);return}r=JSON.parse(o[ve.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new oA(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ve.KHR_MATERIALS_UNLIT:o[u]=new IS;break;case ve.KHR_DRACO_MESH_COMPRESSION:o[u]=new KS(r,this.dracoLoader);break;case ve.KHR_TEXTURE_TRANSFORM:o[u]=new $S;break;case ve.KHR_MESH_QUANTIZATION:o[u]=new YS;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function RS(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CS{constructor(t){this.parser=t,this.name=ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new $t(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],vn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Km(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Eb(h),l.distance=u;break;case"spot":l=new Sb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class IS{constructor(){this.name=ve.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(t,e,n){const s=[];t.color=new $t(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],vn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,He))}return Promise.all(s)}}class PS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class LS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new qt(a,a)}return Promise.all(r)}}class DS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class FS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class NS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new $t(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],vn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,He)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class US{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class OS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new $t().setRGB(a[0],a[1],a[2],vn),Promise.all(r)}}class kS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class BS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new $t().setRGB(a[0],a[1],a[2],vn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,He)),Promise.all(r)}}class zS{constructor(t){this.parser=t,this.name=ve.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class GS{constructor(t){this.parser=t,this.name=ve.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class HS{constructor(t){this.parser=t,this.name=ve.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class VS{constructor(t){this.parser=t,this.name=ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class WS{constructor(t){this.parser=t,this.name=ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class jS{constructor(t){this.name=ve.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(g){return g.buffer}):o.ready.then(function(){const g=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(g),h,u,f,s.mode,s.filter),g})})}else return null}}class XS{constructor(t){this.name=ve.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,g=[];for(const _ of u){const b=new se,p=new H,d=new Oe,v=new H(1,1,1),M=new tb(_.geometry,_.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,b.compose(p,d,v));for(const y in c)if(y==="_COLOR_0"){const T=c[y];M.instanceColor=new Ul(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Ge.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),g.push(M)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const tg="glTF",jr=12,vf={JSON:1313821514,BIN:5130562};class qS{constructor(t){this.name=ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==tg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-jr,r=new DataView(t,jr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===vf.JSON){const l=new Uint8Array(t,jr+o,a);this.content=n.decode(l)}else if(c===vf.BIN){const l=jr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ve.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Hl[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Hl[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],g=br[f.componentType];l[u]=g.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(g){for(const _ in g.attributes){const b=g.attributes[_],p=c[_];p!==void 0&&(b.normalized=p)}u(g)},a,l,vn,f)})})}}class $S{constructor(){this.name=ve.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class YS{constructor(){this.name=ve.KHR_MESH_QUANTIZATION}}class eg extends Tr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-e,u=(n-e)/h,f=u*u,g=f*u,_=t*l,b=_-l,p=-2*g+3*f,d=g-f,v=1-p,M=d-f+u;for(let y=0;y!==a;y++){const T=o[b+y+a],R=o[b+y+c]*h,w=o[_+y+a],D=o[_+y]*h;r[y]=v*T+M*R+p*w+d*D}return r}}const JS=new Oe;class ZS extends eg{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return JS.fromArray(r).normalize().toArray(r),r}}const Un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},br={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Mf={33071:1001,33648:1002,10497:1e3},Kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QS={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tA(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function gs(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Di(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function eA(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function nA(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iA(i){let t;const e=i.extensions&&i.extensions[ve.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Yc(e.attributes):t=i.indices+":"+Yc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Yc(i.targets[n]);return t}function Yc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Vl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sA(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rA=new se;class oA{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new RS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new qm(this.options.manager):this.textureLoader=new Rb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return gs(r,a,s),Di(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ve.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(uo.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Kc[s.type],a=br[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Re(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Kc[s.type],l=br[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let b,p;if(g&&g!==u){const d=Math.floor(f/g),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let M=e.cache.get(v);M||(b=new l(a,d*g,s.count*g/h),M=new xu(b,g/h),e.cache.add(v,M)),p=new ei(M,c,f%g/h,_)}else a===null?b=new l(s.count*c):b=new l(a,f,s.count*c),p=new Re(b,c,_);if(s.sparse!==void 0){const d=Kc.SCALAR,v=br[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new v(o[1],M,s.sparse.count*d),R=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new Re(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,D=T.length;w<D;w++){const A=T[w];if(p.setX(A,R[w*c]),c>=2&&p.setY(A,R[w*c+1]),c>=3&&p.setZ(A,R[w*c+2]),c>=4&&p.setW(A,R[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=yf[f.magFilter]||1006,h.minFilter=yf[f.minFilter]||1008,h.wrapS=Mf[f.wrapS]||1e3,h.wrapT=Mf[f.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,g){let _=f;e.isImageBitmapLoader===!0&&(_=function(b){const p=new en(b);p.needsUpdate=!0,f(p)}),e.load(uo.resolveURL(u,r.path),_,void 0,g)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Di(u,o),u.userData.mimeType=o.mimeType||sA(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new zm,Gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Bm,Gn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ds}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[ve.KHR_MATERIALS_UNLIT]){const u=s[ve.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new $t(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],vn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,He)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||$c.OPAQUE;if(h===$c.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$c.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==tn&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){const u=r.emissiveFactor;a.emissive=new $t().setRGB(u[0],u[1],u[2],vn)}return r.emissiveTexture!==void 0&&o!==tn&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,He)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Di(u,r),e.associations.set(u,{materials:t}),r.extensions&&gs(s,u,r),u})}createUniqueName(t){const e=Ce.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Sf(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=iA(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[ve.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Sf(new je,l,e),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?tA(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let g=0,_=h.length;g<_;g++){const b=h[g],p=o[g];let d;const v=l[g];if(p.mode===Un.TRIANGLES||p.mode===Un.TRIANGLE_STRIP||p.mode===Un.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new J_(b,v):new ye(b,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===Un.TRIANGLE_STRIP?d.geometry=xf(d.geometry,1):p.mode===Un.TRIANGLE_FAN&&(d.geometry=xf(d.geometry,2));else if(p.mode===Un.LINES)d=new ib(b,v);else if(p.mode===Un.LINE_STRIP)d=new Mu(b,v);else if(p.mode===Un.LINE_LOOP)d=new sb(b,v);else if(p.mode===Un.POINTS)d=new rb(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&nA(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),Di(d,r),p.extensions&&gs(s,d,p),e.assignFinalMaterial(d),u.push(d)}for(let g=0,_=u.length;g<_;g++)e.associations.set(u[g],{meshes:t,primitives:g});if(u.length===1)return r.extensions&&gs(s,u[0],r),u[0];const f=new xn;r.extensions&&gs(s,f,r),e.associations.set(f,{meshes:t});for(let g=0,_=u.length;g<_;g++)f.add(u[g]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new bn(Am.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new wu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Di(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new se;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new vu(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const g=s.channels[u],_=s.samplers[g.sampler],b=g.target,p=b.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,v=s.parameters!==void 0?s.parameters[_.output]:_.output;b.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),l.push(_),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],g=u[1],_=u[2],b=u[3],p=u[4],d=[];for(let v=0,M=f.length;v<M;v++){const y=f[v],T=g[v],R=_[v],w=b[v],D=p[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,T,R,w,D);if(A)for(let E=0;E<A.length;E++)d.push(A[E])}return new Bl(r,void 0,d)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(f,rA)});for(let g=0,_=u.length;g<_;g++)h.add(u[g]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Om:l.length>1?h=new xn:l.length===1?h=l[0]:h=new Ge,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Di(h,r),r.extensions&&gs(n,h,r),r.matrix!==void 0){const u=new se;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new xn;n.name&&(r.name=s.createUniqueName(n.name)),Di(r,n),n.extensions&&gs(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,g]of s.associations)(f instanceof Gn||f instanceof en)&&u.set(f,g);return h.traverse(f=>{const g=s.associations.get(f);g!=null&&u.set(f,g)}),u};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];Qi[r.path]===Qi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(Qi[r.path]){case Qi.weights:l=Mr;break;case Qi.rotation:l=is;break;case Qi.position:case Qi.scale:l=Sr;break;default:switch(n.itemSize){case 1:l=Mr;break;case 2:case 3:default:l=Sr;break}break}const h=s.interpolation!==void 0?QS[s.interpolation]:2301,u=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){const _=new l(c[f]+"."+Qi[r.path],e.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Vl(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof is?ZS:eg;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aA(i,t,e){const n=t.attributes,s=new dn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new H(c[0],c[1],c[2]),new H(l[0],l[1],l[2])),a.normalized){const h=Vl(br[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new H,c=new H;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],g=f.min,_=f.max;if(g!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(_[2]))),f.normalized){const b=Vl(br[f.componentType]);c.multiplyScalar(b)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Sf(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Hl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return we.workingColorSpace!==vn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${we.workingColorSpace}" not supported.`),Di(i,t),aA(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?eA(i,t.targets,e):i})}var cA=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function a(d){for(var v=new Uint8Array(d.length),M=0;M<d.length;++M){var y=d.charCodeAt(M);v[M]=y>96?y-97:y>64?y-39:y+4}for(var T=0,M=0;M<d.length;++M)v[T++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,T)}function c(d,v,M,y,T,R){var w=r.exports.sbrk,D=M+3&-4,A=w(D*y),E=w(T.length),P=new Uint8Array(r.exports.memory.buffer);P.set(T,E);var C=d(A,M,y,E,T.length);if(C==0&&R&&R(A,D,y),v.set(P.subarray(A,A+M*y)),w(A-w(0)),C!=0)throw new Error("Malformed buffer data: "+C)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function g(d){var v={object:new Worker(d),pending:0,requests:{}};return v.object.onmessage=function(M){var y=M.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function _(d){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),M=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(M),T=0;T<d;++T)u[T]=g(y);URL.revokeObjectURL(y)}function b(d,v,M,y,T){for(var R=u[0],w=1;w<u.length;++w)u[w].pending<R.pending&&(R=u[w]);return new Promise(function(D,A){var E=new Uint8Array(M),P=f++;R.pending+=d,R.requests[P]={resolve:D,reject:A},R.object.postMessage({id:P,count:d,size:v,source:E,mode:y,filter:T},[E.buffer])})}function p(d){o.then(function(){var v=d.data;try{var M=new Uint8Array(v.count*v.size);c(r.exports[v.mode],M,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:M},[M.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(d){_(d)},decodeVertexBuffer:function(d,v,M,y,T){c(r.exports.meshopt_decodeVertexBuffer,d,v,M,y,r.exports[l[T]])},decodeIndexBuffer:function(d,v,M,y){c(r.exports.meshopt_decodeIndexBuffer,d,v,M,y)},decodeIndexSequence:function(d,v,M,y){c(r.exports.meshopt_decodeIndexSequence,d,v,M,y)},decodeGltfBuffer:function(d,v,M,y,T,R){c(r.exports[h[T]],d,v,M,y,r.exports[l[R]])},decodeGltfBufferAsync:function(d,v,M,y,T){return u.length>0?b(d,v,M,h[y],l[T]):o.then(function(){var R=new Uint8Array(d*v);return c(r.exports[h[y]],R,d,v,M,r.exports[l[T]]),R})}}})();function Pu(){return new wS().setMeshoptDecoder(cA)}let lA="";const Bi=i=>`${lA}${i}`,uA=.001,hA=.5,Af={playing:!1,settling:!1,stillFor:0,pending:1},ng=i=>i.playing||i.settling||i.pending>0,fA=i=>!i.playing&&!i.settling,dA=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),pA=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,mA=i=>ng(i)?i:{...i,pending:1};function gA(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<uA?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<hA}}function Ef(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const Ps="#c8f323",_A="#0b0f10";function bA(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const xA=bA(Ps),vA=Ps,yA="#7aa2ff",ig="#ffb340",MA="#b18cff",SA=Ps,AA=Ps,CP=ig,Xr=new H;function Fn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Xr.copy(t),Xr[n]=0,Xr.normalize();const l=.5*o/(o+a),h=1-Xr.angleTo(i)/c;return Math.sign(Xr[e])===1?h*l:a/(o+a)+l+l*(1-h)}class EA extends Oi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new H,c=new H,l=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new H,b=.5/s;for(let p=0,d=0;p<h.length;p+=3,d+=2)switch(a.fromArray(h,p),c.copy(a),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[p+0]=l.x*Math.sign(a.x)+c.x*r,h[p+1]=l.y*Math.sign(a.y)+c.y*r,h[p+2]=l.z*Math.sign(a.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[d+0]=Fn(_,c,"z","y",r,n),f[d+1]=1-Fn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[d+0]=1-Fn(_,c,"z","y",r,n),f[d+1]=1-Fn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[d+0]=1-Fn(_,c,"x","z",r,t),f[d+1]=Fn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[d+0]=1-Fn(_,c,"x","z",r,t),f[d+1]=1-Fn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[d+0]=1-Fn(_,c,"x","y",r,t),f[d+1]=1-Fn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[d+0]=Fn(_,c,"x","y",r,t),f[d+1]=1-Fn(_,c,"y","x",r,e);break}}}const Tf=["technical","tactical","physical","social"],wf=["auto","authored","off"],sg=/\bwall\b/i,Rf=["n","e","s","w"],TA={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},Cf=1.8,If=7.32,wA=6;function Fs(i,t){return i.width!==void 0&&i.width<wA?i.width/2:t}function rg(i){return Math.min(Math.max(i*.5,1),2.44)}const Pf=["save","beaten"],sa=["throw","roll","kick"],ra=["throw","roll"],Lf=["lofted","ground"],RA=3.35,CA=1,Df=12,Wl=["walk","jog","run","sprint"],Ff=["walk","jog","run"];function Wa(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const IA=new Set(["move","dribble","pass","shoot","tackle","collect"]),Nf=/^#[0-9a-fA-F]{6}$/;function kt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function Pi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&kt(t,"expected [x, y] numbers"),i}function PA(i){var o,a,c,l,h;const t=i;t.version!==1&&kt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||kt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&kt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&kt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||kt("teams","at least one team");for(const u of e){const f=(l=(c=t.teams[u])==null?void 0:c.kit)==null?void 0:l.primary;(typeof f!="string"||!Nf.test(f))&&kt(`teams.${u}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||kt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((u,f)=>{(!u.id||n.has(u.id))&&kt(`players[${f}].id`,"missing or duplicate"),n.add(u.id),e.has(u.team)||kt(`players[${f}].team`,`unknown team ${u.team}`),Pi(u.start,`players[${f}].start`),u.role!==void 0&&u.role!=="keeper"&&kt(`players[${f}].role`,`expected "keeper" or absent, got ${String(u.role)}`),u.role==="keeper"&&s.add(u.id)}),t.ball!==void 0&&(Pi((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&kt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||kt("balls","expected an array"),t.balls.forEach((u,f)=>{(typeof u!="object"||u===null||Array.isArray(u))&&kt(`balls[${f}]`,"expected { carrier?, path }"),u.carrier!==void 0&&typeof u.carrier!="string"&&kt(`balls[${f}].carrier`,`expected a player id or absent, got ${String(u.carrier)}`),(!Array.isArray(u.path)||!u.path.length)&&kt(`balls[${f}].path`,"expected at least one { t, at }"),u.path.forEach((g,_)=>{(typeof(g==null?void 0:g.t)!="number"||g.t<0)&&kt(`balls[${f}].path[${_}].t`,"seconds >= 0 required"),_>0&&g.t<=u.path[_-1].t&&kt(`balls[${f}].path[${_}].t`,"times must ascend"),Pi(g.at,`balls[${f}].path[${_}].at`)})})),(t.equipment??[]).forEach((u,f)=>{u.type!=="cone"&&u.type!=="goal"&&kt(`equipment[${f}].type`,String(u.type)),Pi(u.at,`equipment[${f}].at`),u.width!==void 0&&(u.type!=="goal"&&kt(`equipment[${f}].width`,"only a goal has a mouth width"),typeof u.width=="number"&&u.width>=Cf-1e-9&&u.width<=If+1e-9||kt(`equipment[${f}].width`,`expected ${Cf}..${If} m, got ${String(u.width)}`)),u.facing!==void 0&&(u.type!=="goal"&&kt(`equipment[${f}].facing`,"only a goal has a facing"),Rf.includes(u.facing)||kt(`equipment[${f}].facing`,`expected one of ${Rf.join("|")}, got ${String(u.facing)}`))});const r=(u,f)=>{n.has(u)||kt(f,`unknown player ${u}`)};if((t.balls??[]).forEach((u,f)=>{u.carrier!==void 0&&r(u.carrier,`balls[${f}].carrier`)}),Array.isArray(t.events)||kt("events","expected an array"),t.events.forEach((u,f)=>{var g;if((typeof u.t!="number"||u.t<0)&&kt(`events[${f}].t`,"seconds >= 0 required"),IA.has(u.type)||kt(`events[${f}].type`,`unknown type ${u.type}`),u.type==="move"&&(r(u.player,`events[${f}].player`),Pi(u.to,`events[${f}].to`),u.gait!==void 0&&!Wl.includes(u.gait)&&kt(`events[${f}].gait`,`expected one of ${Wl.join("|")}, got ${String(u.gait)}`),u.dur!==void 0&&!(typeof u.dur=="number"&&u.dur>0&&Number.isFinite(u.dur))&&kt(`events[${f}].dur`,`expected seconds > 0, got ${String(u.dur)}`)),u.type==="dribble"&&(r(u.player,`events[${f}].player`),Pi(u.to,`events[${f}].to`),u.gait!==void 0&&!Ff.includes(u.gait)&&kt(`events[${f}].gait`,`expected one of ${Ff.join("|")}, got ${String(u.gait)}`)),(u.type==="move"||u.type==="dribble")&&u.runPath!==void 0&&typeof u.runPath!="boolean"&&kt(`events[${f}].runPath`,`expected a boolean, got ${String(u.runPath)}`),u.type==="pass"){if(r(u.from,`events[${f}].from`),r(u.to,`events[${f}].to`),u.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(u.flightStyle)&&kt(`events[${f}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(u.flightStyle)}`),u.loft!==void 0&&!(typeof u.loft=="number"&&u.loft>0)&&kt(`events[${f}].loft`,"expected a number > 0 (metres)"),u.style!==void 0&&(sa.includes(u.style)||kt(`events[${f}].style`,`expected one of ${sa.join("|")}, got ${String(u.style)}`),!s.has(u.from)&&!ra.includes(u.style)&&kt(`events[${f}].style`,`"${u.style}" is keeper-only; ${u.from} is not a keeper (anyone may ${ra.join(" or ")})`)),u.toFeet!==void 0&&(typeof u.toFeet!="boolean"&&kt(`events[${f}].toFeet`,`expected a boolean, got ${String(u.toFeet)}`),s.has(u.to)||kt(`events[${f}].toFeet`,`toFeet is keeper-only; ${u.to} is not a keeper`),u.toFeet&&u.flightStyle!==void 0&&u.flightStyle!=="ground")){let _=[...((g=t.players.find(b=>b.id===u.to))==null?void 0:g.start)??[0,0]];for(let b=0;b<f;b++){const p=t.events[b];(p.type==="move"||p.type==="dribble")&&p.player===u.to&&(_=[...p.to])}for(const b of t.equipment??[]){if(b.type!=="goal")continue;const p=Math.hypot(_[0]-b.at[0],_[1]-b.at[1]);p<Df&&kt(`events[${f}].toFeet`,`a ${u.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${u.to} meets it ${p.toFixed(1)} m from the goal at [${b.at[0]}, ${b.at[1]}] (needs ${Df} m)`)}}u.fromFeet!==void 0&&(typeof u.fromFeet!="boolean"&&kt(`events[${f}].fromFeet`,`expected a boolean, got ${String(u.fromFeet)}`),s.has(u.from)||kt(`events[${f}].fromFeet`,`fromFeet is keeper-only; ${u.from} is not a keeper`),u.fromFeet&&t.events.some((_,b)=>b<f&&_.type!=="move")&&kt(`events[${f}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((u.type==="pass"||u.type==="shoot")&&u.deflect!==void 0){const _=u.deflect;(typeof _!="object"||_===null||Array.isArray(_))&&kt(`events[${f}].deflect`,"expected { to: [x, y], style: lofted | ground }"),Pi(_.to,`events[${f}].deflect.to`),Lf.includes(_.style)||kt(`events[${f}].deflect.style`,`expected one of ${Lf.join("|")}, got ${String(_.style)}`),u.type==="pass"&&!s.has(u.to)&&kt(`events[${f}].deflect`,`deflections are keeper-only; ${u.to} is not a keeper`),u.type==="shoot"&&!(u.flightStyle==="ground"&&_.style==="ground")&&!s.size&&kt(`events[${f}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const b of t.equipment??[]){if(b.type!=="goal")continue;const d=b.facing==="e"||b.facing==="w"?_.to[1]-b.at[1]:_.to[0]-b.at[0];if(Math.abs(d)>Fs(b,RA))continue;(b.facing!==void 0?{n:_.to[1]-b.at[1],s:b.at[1]-_.to[1],e:_.to[0]-b.at[0],w:b.at[0]-_.to[0]}[b.facing]:b.at[1]<=t.pitch.length/2?_.to[1]-b.at[1]:b.at[1]-_.to[1])<=CA&&kt(`events[${f}].deflect.to`,`[${_.to[0]}, ${_.to[1]}] is inside the goal mouth at [${b.at[0]}, ${b.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(u.type==="tackle"&&(r(u.player,`events[${f}].player`),r(u.from,`events[${f}].from`),u.from===u.player&&kt(`events[${f}].from`,"a player cannot tackle himself"),u.style!==void 0&&u.style!=="poke"&&u.style!=="slide"&&kt(`events[${f}].style`,`expected "poke" or "slide", got ${String(u.style)}`)),u.type==="collect"&&r(u.player,`events[${f}].player`),u.type==="shoot"&&(r(u.player,`events[${f}].player`),Pi(u.at,`events[${f}].at`),u.flight!==void 0&&!(typeof u.flight=="number"&&u.flight>0)&&kt(`events[${f}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),u.corner!==void 0&&u.corner!=="left"&&u.corner!=="right"&&kt(`events[${f}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(u.corner)}`),u.flightStyle!==void 0&&u.flightStyle!=="ground"&&kt(`events[${f}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(u.flightStyle)}`),u.touch!==void 0&&(typeof u.touch!="boolean"&&kt(`events[${f}].touch`,`expected a boolean, got ${String(u.touch)}`),u.touch&&u.flightStyle!=="ground"&&kt(`events[${f}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),u.style!==void 0&&(sa.includes(u.style)||kt(`events[${f}].style`,`expected one of ${sa.join("|")}, got ${String(u.style)}`),!s.has(u.player)&&!ra.includes(u.style)&&kt(`events[${f}].style`,`"${u.style}" is keeper-only; ${u.player} is not a keeper (anyone may ${ra.join(" or ")})`),u.flightStyle!=="ground"&&kt(`events[${f}].style`,"a distribution to a point needs a ground flight"))),(u.type==="pass"||u.type==="shoot")&&u.header!==void 0&&typeof u.header!="boolean"&&kt(`events[${f}].header`,`expected a boolean, got ${String(u.header)}`),(u.type==="pass"||u.type==="shoot")&&u.deadBall!==void 0&&typeof u.deadBall!="boolean"&&kt(`events[${f}].deadBall`,`expected a boolean, got ${String(u.deadBall)}`),(u.type==="pass"||u.type==="shoot")&&u.firstTime!==void 0&&typeof u.firstTime!="boolean"&&kt(`events[${f}].firstTime`,`expected a boolean, got ${String(u.firstTime)}`),u.type==="pass"||u.type==="shoot"||u.type==="dribble"){const _=u.newBall;_!==void 0&&(typeof _!="boolean"&&kt(`events[${f}].newBall`,`expected a boolean, got ${String(_)}`),_&&!t.events.some((b,p)=>p<f&&b.type!=="move")&&kt(`events[${f}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const u=t.overlays;(typeof u!="object"||u===null||Array.isArray(u))&&kt("overlays","expected an object"),u.runPaths!==void 0&&!wf.includes(u.runPaths)&&kt("overlays.runPaths",`expected one of ${wf.join("|")}, got ${String(u.runPaths)}`),u.zones!==void 0&&(Array.isArray(u.zones)||kt("overlays.zones","expected an array"),u.zones.forEach((f,g)=>{Pi(f.at,`overlays.zones[${g}].at`),typeof f.w=="number"&&f.w>0&&typeof f.h=="number"&&f.h>0||kt(`overlays.zones[${g}]`,"w/h metres > 0 required"),f.color!==void 0&&!Tf.includes(f.color)&&!Nf.test(f.color)&&kt(`overlays.zones[${g}].color`,`expected ${Tf.join("|")} or a hex colour, got ${String(f.color)}`),f.label!==void 0&&typeof f.label!="string"&&kt(`overlays.zones[${g}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&kt("keeper","expected { outcome: save | beaten }"),Pf.includes(t.keeper.outcome)||kt("keeper.outcome",`expected one of ${Pf.join("|")}, got ${String(t.keeper.outcome)}`)),t}function LA(i){const t=new Ds({color:SA,roughness:.6,toneMapped:!1}),e=new xn,n=new ye(new EA(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new qt(.17,.06),new qt(.15,.1)];for(let o=0;o<=8;o++)s.push(new qt(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new qt(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new ye(new Su(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function og(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,l=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const u=(h-s)*c,f=i.createLinearGradient(0,u,0,u+l);(Math.floor(h/5)%2+2)%2===0?(f.addColorStop(0,"#0f563c"),f.addColorStop(1,"#0d4e35")):(f.addColorStop(0,"#094027"),f.addColorStop(1,"#0b432b")),i.fillStyle=f,i.fillRect(0,u,t,l+1)}for(let h=0;h<20;h++){const u=(h%5+.15+a()*.7)*(t/5),f=(Math.floor(h/5)+.15+a()*.7)*(e/4),g=(40+a()*120)*(t/1024),_=a()>.5,b=i.createRadialGradient(u,f,0,u,f,g);b.addColorStop(0,_?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),b.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=b,i.fillRect(u-g,f-g,2*g,2*g)}ag(i,t,e,a,1)}function ag(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function DA(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");og(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),cg(n);const s=new In(e);return s.colorSpace=He,s.flipY=!1,s}function cg(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const FA=2.5;function lg(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const un=6;function NA(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");og(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),cg(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,u,f,g]of a){const _=s.createLinearGradient(h,u,f,g);_.addColorStop(0,"rgba(0,0,0,0.55)"),_.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=_,s.fillRect(0,0,1024,1024)}const c=FA*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",lg(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const l=new In(n);return l.colorSpace=He,l.flipY=!1,l}function UA(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",lg(t,40,40,176,176,34),t.fill();const e=new In(i);return e.flipY=!1,e}let qr=null;function OA(){if(qr)return qr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),qr=new In(i),qr.userData.shared=!0,qr}function kA(i){const t=new ye(new Au(i/2,24).rotateX(-Math.PI/2),new tn({map:OA(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const ni={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},BA=.5;function bo(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*Fs(s,ni.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*BA*(o/r.length)))}return n}function zA(i){const t=Fs(i,ni.halfW);return t===ni.halfW?ni:{halfW:t,top:rg(i.width),zMin:-ts,zMax:ts}}function ug(i,t){return i.facing!==void 0?TA[i.facing]:i.at[1]>t/2?Math.PI:0}const ts=.08;function GA(i){const t=rg(i),e=new Ds({color:"#FFFFFF",roughness:.5}),n=new xn,s=i/2-ts;for(const o of[-1,1]){const a=new ye(new Va(ts,ts,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new ye(new Va(ts,ts,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-ts,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const hg=.8;function HA(i,t,e){const n=new ye(new Oi(e?i:t,hg,e?t:i),new Ds({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function fg(i,t){i.scale.set(1,t,1),i.position.y=hg*t/2}let Uf=null;function VA(i){return Uf??(Uf=i.loadAsync(Bi("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw Uf=null,t}))}let Of=!1;function WA(i,t){if(Of||!t)return;Of=!0;const e=new dn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-ni.halfW)>.05||Math.abs(s-ni.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${ni.halfW}, top ${s.toFixed(3)} vs ${ni.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function jA(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new H(n*(t/2+un),0,s*(e/2+un)))}function jl(i,t){const{width:e,length:n}=i.pitch,s=bo(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,l=zA(o),h=ug(o,n),u=Math.cos(h),f=Math.sin(h);for(const g of[-l.halfW*s,l.halfW*s])for(const _ of[0,l.top*s])for(const b of[l.zMin*s,l.zMax*s])r.push(new H(a+g*u+b*f,_,c-g*f+b*u))}return r}const XA=600,dg=XA/2*Math.SQRT2,kf=30,qA=-.06,KA=-.04,$A=660496,YA="#04170c",Bf=.7,pg=1.2;function JA(i,t,e){const n=Math.max(t,e),s=n/2+un,r=pg*n;return r>s?1-(1-Bf)*Lu((i-s)/(r-s)):i>=s?Bf:1}function Lu(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const ZA=1.6,QA=2.6;function tE(i,t){const e=Math.max(i,t);return{near:ZA*e+un,far:QA*e+un}}const zf="#0b1f22",Jc="#010203",eE=1.02;function nE(i,t){return Math.hypot(i/2+un,t/2+un)*eE}const iE=.12,sE=1.15,Du=(i,t)=>Math.hypot(i/2,t/2),mg=(i,t)=>Du(i,t)*sE,oa=12,Zc=18,Gf=.3,rE=2.4,Hf=1.2,oE=.4,aE=6;function cE(i,t,e=1/0){const n=i/2+un,s=t/2+un,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=lE(o,a,e*uE),l=[-(a+c),a+c],h=-(o+c),u=l.map(f=>r==="z"?[h,f]:[f,h]);return{axis:r,masts:u}}function lE(i,t,e){if(!(e<Math.hypot(i+oa,t+oa)))return oa;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(oa,(-n+Math.sqrt(r))/2)):0}const uE=.97;function Fu(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=YA,t.fillRect(0,0,512,512);let e=7;ag(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new In(i);return n.colorSpace=He,n.wrapS=n.wrapT=1e3,n}function hE(){const i=new xn,t=new _o({color:1251867}),e=new ye(new Oi(Gf,Zc,Gf),t);e.position.y=Zc/2;const n=new ye(new Oi(rE,Hf,oE),t);n.position.y=Zc+Hf/2;const s=new $_(new Nm({map:fE(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(aE),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let Kr=null;function fE(){if(Kr)return Kr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Kr=new In(i),Kr.userData.shared=!0,Kr}function dE(){return[[0,Jc],[ql,zf],[gE,zf],[Nu,Jc],[1,Jc]]}function pE(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of dE())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new In(i);return n.colorSpace=He,n.wrapS=n.wrapT=1001,n}const Xl=.03,Vf=.06,mE=.28,Nu=1,ql=Nu*Vf/(Vf+mE-Xl),gE=.85;function _E(i,t={repeat:0,offset:0}){const e=Math.max(i,Xl+.03);return t.repeat=(Nu-ql)/(e-Xl),t.offset=ql-t.repeat*(1-e),t}const bE=60,xE=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<bE,vE=-1e3;function gg(i,t,e,n,s,r){const o=new _o({map:e,vertexColors:!0}),a=new _o({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=pg*Math.max(i,t),l=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&l.push([n,s,16]);const h=[];for(const[u,f,g]of l){const _=u===n,b=new rc(u,f,128,g).rotateX(-Math.PI/2),p=b.getAttribute("position"),d=b.getAttribute("uv"),v=_?4:3,M=new Float32Array(p.count*v);for(let T=0;T<p.count;T++){const R=p.getX(T),w=p.getZ(T);d.setXY(T,R/kf,w/kf);const D=Math.hypot(R,w),A=JA(D,i,t);M[v*T]=M[v*T+1]=M[v*T+2]=A,_&&(M[v*T+3]=f>u?1-Lu((D-u)/(f-u)):1)}d.needsUpdate=!0,b.setAttribute("color",new Re(M,v));const y=new ye(b,_?a:o);y.userData[r]=_,y.position.y=qA,h.push(y)}return h}function yE(i,t,e=1,n=Fu()){const s=new xn;n.anisotropy=e;for(const r of gg(i,t,n,Du(i,t),mg(i,t),"floatRim"))s.add(r);return s}const Qc=16;function ME(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=Du(i,t),c=mg(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const l=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let u=0;u<=Qc;u++){const f=Math.round(255*(1-Lu(u/Qc)));l.addColorStop(u/Qc,`rgb(${f},${f},${f})`)}s.fillStyle=l,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new In(n);return h.flipY=!1,h}function SE(i,t,e=1,n=dg,s=Fu()){const r=new xn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+un+1),a=o*(1-iE),c=Math.max(a,Math.max(i,t)/2+un);for(const h of gg(i,t,s,c,o,"rimFade"))r.add(h);const{masts:l}=cE(i,t,o);for(const[h,u]of l){const f=hE();f.name="mast",f.position.set(h,0,u),r.add(f)}return r}async function AE(i,t,e=1,n=1,s=dg){var E;const r=bo(t,n),{width:o,length:a}=t.pitch,c=(P,C=0)=>new H(P[0]-o/2,C,P[1]-a/2),l=P=>(P.anisotropy=e,P),h=l(NA(o,a,un)),u=()=>new Hn(o+2*un,a+2*un).rotateX(-Math.PI/2),f=new ye(u(),new _o({map:h,transparent:!0})),g=new ye(u(),new _o({map:h,alphaMap:ME(o,a,un),transparent:!0}));for(const P of[f,g])P.position.y=-.02,P.renderOrder=-1,P.receiveShadow=!0;const _=new ye(new Hn((o+2*un)*1.5,(a+2*un)*1.5).rotateX(-Math.PI/2),new tn({map:UA(),transparent:!0,depthWrite:!1}));_.position.y=KA,_.renderOrder=-2,i.add(_);const b=new ye(new Hn(o,a).rotateX(-Math.PI/2),new Ds({map:l(DA(o,a)),roughness:.9}));b.receiveShadow=!0;const p=Fu(),d=SE(o,a,e,s,p),v=yE(o,a,e,p);i.add(f,g,b,d,v);const M=P=>{d.visible=P,_.visible=P,f.visible=P,v.visible=!P,g.visible=!P};M(!0);const y=d.children.filter(P=>P.name==="mast"),T=P=>{for(const C of y)C.visible=P};T(!1);const R=Pu(),w=[],D=[];for(const P of t.equipment??[])if(P.type==="cone"){const C=LA(n);C.position.copy(c(P.at,0)),i.add(C),D.push(C)}else{const C=Fs(P,ni.halfW)!==ni.halfW,z=C?GA(P.width):(await VA(R)).clone();z.position.copy(c(P.at)),z.rotation.y=ug(P,a),z.scale.setScalar(r),i.add(z),w.push(z),C||WA(z,r)}const A=[];for(const P of((E=t.overlays)==null?void 0:E.zones)??[]){if(!sg.test(P.label??""))continue;const C=HA(Math.max(P.w,P.h),Math.min(P.w,P.h),P.w>=P.h),z=c(P.at);C.position.set(z.x,0,z.z),fg(C,n),i.add(C),A.push(C)}return{toWorld:c,goals:w,cones:D,boards:A,setWorld:M,setMasts:T}}const Wf=new H(10,20,8).normalize(),EE=1.05,Kl=2048,TE=1024,wE=1600,RE=(i,t)=>Math.max(i,t)>=wE?Kl:TE,CE=5;function IE(i){const t=new dn().setFromPoints(i).getCenter(new H);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function PE(i,t=()=>new TS({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=Ef(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=EE,e.outputColorSpace=He,i.appendChild(o);const a=new K_;a.background=new $t(_A);const c=new bn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const l=new Km(16772564,CE);l.position.copy(Wf).multiplyScalar(40),l.castShadow=!0,l.shadow.mapSize.set(Kl,Kl),l.shadow.radius=4,a.add(l,l.target,new yb(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function u(){var xt;const Z=RE(s.width*h,s.height*h);l.shadow.mapSize.width!==Z&&(l.shadow.mapSize.set(Z,Z),(xt=l.shadow.map)==null||xt.dispose(),l.shadow.map=null)}u();function f(){const Z=Ef(i,window,s),xt=Math.min(devicePixelRatio,2),Pt=xt!==h;if(Pt&&(h=xt,e.setPixelRatio(h)),Z.width!==s.width||Z.height!==s.height){s=Z,u(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),E();for(const Ct of[...r])Ct()}else Pt&&(e.setSize(s.width,s.height,!1),u(),E())}const g=typeof ResizeObserver=="function"?new ResizeObserver(f):null;g?g.observe(i):addEventListener("resize",f);let _=null;const b=()=>{p(),f()};function p(){_==null||_.removeEventListener("change",b),_=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,_==null||_.addEventListener("change",b)}p();let d=!0,v=!1,M=0;function y(){v||(v=!0,M=requestAnimationFrame(N))}function T(){d=!document.hidden,d&&(C=-1,y())}document.addEventListener("visibilitychange",T);let R=!0,w=Af,D=0;const A=new H;function E(){w=mA(w),d&&(v||(C=-1),y())}let P=()=>{},C=-1,z=null,U=null,W=null,O=!0;function B(Z,xt){if(P(Z,xt),ut(),z&&a.fog){const Pt=c.position.length();a.fog.near=Pt+z.near,a.fog.far=Pt+z.far}e.render(a,c),D++}function N(Z){if(v=!1,!d)return;const xt=C<0?0:(Z-C)/1e3;C=Z,A.copy(c.position),B(xt,Z),w=gA(w,A.distanceTo(c.position),xt),R||ng(w)?y():C=-1}function Y(Z){if(!Z.length)return;const{centre:xt,radius:Pt,distance:Ct,far:zt}=IE(Z);l.target.position.copy(xt),l.target.updateMatrixWorld(),l.position.copy(Wf).multiplyScalar(Ct).add(xt);const Xt=l.shadow.camera;Xt.left=-Pt,Xt.right=Pt,Xt.top=Pt,Xt.bottom=-Pt,Xt.near=.5,Xt.far=zt,Xt.updateProjectionMatrix()}function k(Z){if(z=Z,!Z){a.fog=null;return}a.fog??(a.fog=new bu($A,Z.near,Z.far))}function ct(Z){if(W=Z,!Z){U&&(U.visible=!1);return}U||(U=new ye(new Hn(1,1),new tn({map:pE(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),U.renderOrder=vE,U.frustumCulled=!1,a.add(U)),U.visible=O}function yt(Z){O=Z,U&&(U.visible=Z&&!!W)}const Rt=new H,Q=new H,ft={repeat:0,offset:0};function ut(){if(!U||!W)return;if(!O){U.visible=!1;return}if(c.getWorldDirection(Rt),U.visible=xE(Rt.y),!U.visible)return;const Z=Math.hypot(c.position.x,c.position.z)||1;Q.set(-c.position.x/Z*W,0,-c.position.z/Z*W),Q.project(c);const xt=(1-Q.y)/2,Pt=c.near*1.5,Ct=2*Pt*Math.tan(c.fov*Math.PI/360);U.scale.set(Ct*c.aspect,Ct,1),U.quaternion.copy(c.quaternion),U.position.copy(c.position).addScaledVector(Rt,Pt),_E(xt,ft);const zt=U.material.map;zt.repeat.set(1,ft.repeat),zt.offset.set(0,ft.offset)}return{scene:a,camera:c,renderer:e,fitShadow:Y,setFog:k,setHorizon:ct,setSky:yt,size:()=>({...s}),remeasure:f,onBox(Z){return r.add(Z),()=>{r.delete(Z)}},start(Z){P=Z,y()},park(Z){return P!==Z?!1:(cancelAnimationFrame(M),v=!1,P=()=>{},w=Af,D=0,C=-1,!0)},step(Z,xt=performance.now()){B(Z,xt)},frames:()=>D,rule:{enable(){R=!1},play(){w=dA(w),E()},pause(){w=pA(w),E()},wake:E,snap:()=>fA(w)},dispose(){d=!1,r.clear(),_==null||_.removeEventListener("change",b),g?g.disconnect():removeEventListener("resize",f),document.removeEventListener("visibilitychange",T),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function LE(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of bg(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);_g(i)}function _g(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of bg(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const bg=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function DE(i){const t=new Map,e=new Map,n=i.clone();return xg(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function xg(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)xg(i.children[n],t.children[n],e)}const jf="6f36b4a5",vg=24,FE=/^[\w-]+$/,NE=async i=>await(await fetch(Bi(`drills/${i}.json`))).json();class IP{constructor(t=NE,e=null,n=vg){Qe(this,"mem",new Map);Qe(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===jf)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:jf,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&FE.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const UE="tactivo-engine",_s="drills",Xf=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function OE(){try{return globalThis.indexedDB}catch{return}}function PP(i=OE()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(UE,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(_s)&&r.result.deleteObjectStore(_s),r.result.createObjectStore(_s)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(_s,"readonly").objectStore(_s);return await Xf(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await Xf(r.transaction(_s,"readwrite").objectStore(_s).put(s,n))}catch{}}}}const qf=["plain","stripes","hoops","halves","sash","sleeves"],Kf=["mixed","light","mediumLight","medium","mediumDark","dark"],kE="mixed",yg="#FFFFFF",tl=/^#[0-9a-fA-F]{6}$/;function $l(i){if(typeof i!="object"||i===null)return ce("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!tl.test(t.a)))return ce("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!tl.test(t.b)))return ce("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!qf.includes(t.pattern)))return ce(`kit: pattern must be one of ${qf.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!tl.test(t[e])))return ce(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!Kf.includes(t.skin))?ce(`kit: skin must be one of ${Kf.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??yg,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const $f=["boys","girls","mixed"],Mg="mixed";function Yl(i){return i==null?Mg:typeof i!="string"||!$f.includes(i)?ce(`squad: must be one of ${$f.join(", ")}`):i}const Yf=["shirt","full"],Sg="shirt";function Jf(i){return i==null?Sg:typeof i!="string"||!Yf.includes(i)?ce(`framing: must be one of ${Yf.join(", ")}`):i}const Zf=new Set(["fit","broadcast"]),Ag=.5,BE=5,zE=["possession","finishing","passing","dribbling","defending","pressing","firstTouch","setPieces","goalkeeping"],LP={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},GE=100,Jl=1/0,HE=2e3,ho=/^[\w-]+$/,VE=/^[A-Za-z0-9_./-]{1,80}$/,WE=i=>VE.test(i)&&!i.includes(".."),jE=30,XE=85,qE=i=>Math.min(Math.max(i,jE),XE),xr=i=>({state:i,effects:[],out:[]}),Fa=(i,t,e,n)=>({state:i,effects:[],out:[{type:"error",code:t,message:e,...n!==void 0?{key:n}:{}}]}),KE=new Set(["auto","authored","off"]),Eg=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply","customiseStage","customiseOutcome","customiseStrip","customiseSaved","authorOutcome","authorCard","authorSaved"]);function DP(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?Tg(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const Tg=i=>Math.min(Math.max(i,Ag),BE);function wg(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const Uu=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},Rg=(i,t)=>{var n;const e=Uu(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},ce=i=>({error:i,code:"bad_message"}),Zl=i=>{const t=i.narrationBase;return typeof t=="string"&&/^https?:\/\/[^\s]+\/$/.test(t)?{narrationBase:t}:{}};function FP(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||Eg.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return ce("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return ce("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!ho.test(n.key)))return{error:`load: key must match ${ho.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return ce("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return ce("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return ce("load: intro.hold must be a finite number");s={text:a.text,hold:Tg(a.hold)}}let r;if(t.kit!==void 0){const a=$l(t.kit);if("error"in a)return a;r=a}const o=Yl(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{},...Zl(t)}}case"preview":case"kit":{const e=$l(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=Jf(t.framing);if(typeof n!="string")return n;const s=Yl(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=Jf(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return ce("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&WE(n)?{track:n}:{},...Zl(t)}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&ho.test(e)).slice(0,vg)}:ce("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?ce("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?ce("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?ce("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?ce("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!Zf.has(t.follow)?ce(`setCamera: follow must be one of ${[...Zf].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?ce("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return ce(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!KE.has(t.runPaths))return ce("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return ce(`unknown message type: ${t.type}`)}}const Qf=/^https?:\/\/[^\s]+$/,td=i=>typeof i=="number"&&Number.isFinite(i)&&i>=10&&i<=50,$E=i=>i==null||typeof i=="object"&&td(i.w_m)&&td(i.h_m),el=i=>typeof i=="object"&&i!==null&&!Array.isArray(i)&&["players","balls","beats"].every(t=>Array.isArray(i[t]))&&JSON.stringify(i).length<=24*1024,mn=(i,t)=>typeof i=="string"&&i.length>0&&i.length<=t,nl=i=>i===void 0||typeof i=="number"&&Number.isSafeInteger(i)&&i>=0;function NP(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||!/^(customise|author)/.test(t.type)||Eg.has(t.type))return null;const e=()=>typeof t.pilot=="string"&&ho.test(t.pilot)&&typeof t.age=="number"&&Number.isFinite(t.age)&&t.age>=5&&t.age<=18,n=()=>{let s;if(t.kit!==void 0&&t.kit!==null){const o=$l(t.kit);if("error"in o)return o;s=o}const r=Yl(t.squad);return typeof r!="string"?r:{...s?{kit:s}:{},...t.squad!==void 0&&t.squad!==null?{squad:r}:{},...Zl(t)}};switch(t.type){case"authorReset":case"authorShow":{const s=typeof t.age=="number"&&Number.isFinite(t.age)&&t.age>=5&&t.age<=18,r=t.pilot===null||typeof t.pilot=="string"&&ho.test(t.pilot);if(!s||!r||!$E(t.dims))return ce(`${t.type}: {pilot (id or null), dims ({w_m, h_m} 10-50 m, or null), age 5-18}`);const o=n();if("error"in o)return o;const a=t.dims?{w_m:t.dims.w_m,h_m:t.dims.h_m}:null;if(t.type==="authorShow"){const h=t.voiceUrl===null||t.voiceUrl===void 0||typeof t.voiceUrl=="string"&&/^https:\/\/[^\s]+$/.test(t.voiceUrl),u=t.voiceScript===null||t.voiceScript===void 0||typeof t.voiceScript=="object"&&!Array.isArray(t.voiceScript);return!el(t.script)||!h||!u?ce("authorShow: {script, voiceUrl (https or null), voiceScript}"):{type:"authorShow",pilot:t.pilot,age:t.age,dims:a,script:t.script,voiceUrl:t.voiceUrl??null,voiceScript:t.voiceScript??null,look:o}}if(!mn(t.fnBase,300)||!Qf.test(t.fnBase)||!mn(t.apikey,1024))return ce("authorReset: {fnBase, apikey}");const c=t.owner===void 0?"":mn(t.owner,64)?t.owner:null,l=t.device===void 0?"":typeof t.device=="string"&&/^[0-9a-f-]{36}$/.test(t.device)?t.device:null;return c===null||l===null?ce("authorReset: owner (1-64), device (36 chars of 0-9a-f-)"):{type:"authorReset",pilot:t.pilot,dims:a,age:t.age,fnBase:t.fnBase,apikey:t.apikey,...c?{owner:c}:{},...l?{device:l}:{},look:o}}case"authorBuild":return!mn(t.words,2400)||!t.words.trim()||!mn(t.jwt,4096)||t.retry!==void 0&&typeof t.retry!="boolean"||!nl(t.id)?ce("authorBuild: {words (1-2400), jwt, retry?, id?}"):{type:"authorBuild",words:t.words,jwt:t.jwt,...t.retry===!1?{retry:!1}:{},...t.id!==void 0?{id:t.id}:{}};case"authorAdapt":return typeof t.request!="string"||t.request.length>500||!mn(t.jwt,4096)||!nl(t.id)?ce("authorAdapt: {request (0-500), jwt, id?}"):{type:"authorAdapt",request:t.request,jwt:t.jwt,...t.id!==void 0?{id:t.id}:{}};case"authorScript":return!el(t.script)||!nl(t.id)?ce("authorScript: {script {players, balls, beats}, id?}"):{type:"authorScript",script:t.script,...t.id!==void 0?{id:t.id}:{}};case"authorPlay":return el(t.script)?{type:"authorPlay",script:t.script}:ce("authorPlay: {script {players, balls, beats}}");case"authorSave":{const s=t.captions,r=Array.isArray(s)&&s.length>=1&&s.length<=6&&s.every(a=>mn(a,90));return mn(t.jwt,4096)&&mn(t.title,40)&&r&&zE.includes(t.topic)&&Number.isInteger(t.minutes)&&t.minutes>=5&&t.minutes<=30?{type:"authorSave",jwt:t.jwt,title:t.title,captions:s,topic:t.topic,minutes:t.minutes}:ce("authorSave: {jwt, title (1-40), captions (1-6 of 1-90), topic (one of the nine), minutes (5-30)}")}case"customiseReset":{if(!e()||!mn(t.fnBase,300)||!Qf.test(t.fnBase)||!mn(t.apikey,1024))return ce("customiseReset: {pilot, age, fnBase, apikey}");const s=n();if("error"in s)return s;const r=t.owner===void 0?"":mn(t.owner,64)?t.owner:null;if(r===null)return ce("customiseReset: owner (1-64)");const o=t.device===void 0?"":typeof t.device=="string"&&/^[0-9a-f-]{36}$/.test(t.device)?t.device:null;return o===null?ce("customiseReset: device (36 chars of 0-9a-f-)"):{type:"customiseReset",pilot:t.pilot,age:t.age,fnBase:t.fnBase,apikey:t.apikey,...r?{owner:r}:{},...o?{device:o}:{},look:s}}case"customise":return!e()||!mn(t.request,500)||!mn(t.jwt,4096)?ce("customise: {pilot, age, request (1-500), jwt}"):{type:"customise",pilot:t.pilot,age:t.age,request:t.request,jwt:t.jwt};case"customiseVersion":case"customiseChip":return typeof t.index!="number"||!Number.isInteger(t.index)||t.index<0?ce(`${t.type}: index must be a whole number >= 0`):{type:t.type,index:t.index};case"customiseDrop":return typeof t.line!="number"||!Number.isInteger(t.line)||t.line<0?ce("customiseDrop: line must be a whole number >= 0"):{type:"customiseDrop",line:t.line};case"customiseSave":return mn(t.jwt,4096)?{type:"customiseSave",jwt:t.jwt}:ce("customiseSave: {jwt}");case"customiseShow":{const s=t.version,r=typeof s=="object"&&s!==null&&Array.isArray(s.ops)&&typeof s.said=="string"&&(s.script===null||typeof s.script=="object")&&(s.changed===void 0||Array.isArray(s.changed)),o=t.voiceUrl===null||t.voiceUrl===void 0||typeof t.voiceUrl=="string"&&/^https:\/\/[^\s]+$/.test(t.voiceUrl),a=t.voiceScript===null||t.voiceScript===void 0||typeof t.voiceScript=="object"&&!Array.isArray(t.voiceScript);if(!e()||!r||!o||!a)return ce("customiseShow: {pilot, age, version {script, ops, said, changed}, voiceUrl, voiceScript}");const c=n();return"error"in c?c:{type:"customiseShow",pilot:t.pilot,age:t.age,version:{script:s.script,ops:s.ops,said:s.said,changed:s.changed??[]},voiceUrl:t.voiceUrl??null,voiceScript:t.voiceScript??null,look:c}}}return ce(`unknown customise message ${t.type}`)}function UP(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{},...t.narrationBase?{narrationBase:t.narrationBase}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??Sg,squad:t.squad??Mg}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return Fa(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return Fa(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:qE(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?xr(i):Fa(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function OP(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return xr(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:wg(n,0),a=r?s?Math.max(t.hookHold,Ag):r.hold:0,c=r?a:Uu(n,o),l=s?Jl:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:l,hookCeilingMs:s?e+t.hookHold*1e3+HE:0,introSkip:r!==null},effects:l!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:Rg(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?xr(i):Fa({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`,t.key);case"hookEnded":return i.holdUntilMs!==Jl?xr(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function kP(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Jl?i.hookCeilingMs:i.holdUntilMs;return e<c?xr(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=wg(i.narration,t),s=i.playing&&e-i.lastTimeMs>=GE;if(n===i.cue&&!s)return xr(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?Uu(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[Rg(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const Ou=["shirt","jersey","top","tshirt"];let An=null;async function ac(i,t,e=Bi("assets/ochi.glb"),n,s=0,r){if(!An||An.url!==e){const a=await(n??Pu()).loadAsync(e),c=a.scene.children.filter(l=>{let h=!1;return l.traverse(u=>{h||(h=u.isSkinnedMesh)}),h});An={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=An.variants.length>1,l=r==null?void 0:r[a],h=l===void 0?a+s:l,u=DE(An.variants[(h%An.variants.length+An.variants.length)%An.variants.length]);u.traverse(g=>{g.castShadow=g.type==="SkinnedMesh",c&&g.isBone&&(g.name=g.name.replace(/_\d+$/,""))}),i.add(u);const f=new Hb(u);o.push({root:u,mixer:f,clips:new Map(An.clips.map(g=>[g.name,g]))})}return o}const ed=new WeakMap;function Cg(i){let t=ed.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),ed.set(i.root,t)),t}function ku(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const Ig=ku(/^foot[LR]$/),Pg=ku(/^hand[LR]$/),Ql=ku(/^spine00[12]$/),xo=.6499;function Bu(i){const t=new $t(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/xo,1/e)):t}let il=null;const Lg=3e3;function Dg(i){return il??(il=(async()=>{let t;try{return await Promise.race([i(Bi("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),Lg)})])}finally{clearTimeout(t)}})().catch(t=>{throw il=null,t})),il}async function YE(i,t=Bi("assets/ochi.glb"),e){await ac(new xn,0,t,e);const n=i.toLowerCase();return An?An.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function JE(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();Ou.some(o=>r.includes(o))&&t.push(r)}}),t}async function Fg(i,t=Bi("assets/ochi.glb"),e){await ac(new xn,0,t,e);const n=An?An.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>JE(An.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const zu=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function Ng(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;Ou.some(o=>r.toLowerCase().includes(o))&&t.push(zu(r))}}),t}async function Ug(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>Bi(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await Dg(r),c=[...new Set(n.map(f=>{var g;return(g=a.channels[f])==null?void 0:g.file}).filter(f=>f!==void 0))];if(!c.length)return null;const l=e.loader??new qm,h=new Map,u=new Map;for(const f of new Set(t))for(const g of c){const _=(o=a.characters[f])==null?void 0:o.files[g];if(!_)continue;let b=u.get(_);b||(b=await l.loadAsync(s(_)),b.colorSpace="",b.flipY=!1,b.anisotropy=16,b.needsUpdate=!0,u.set(_,b));const p=h.get(f)??[];p[g]=b,h.set(f,p)}return h.size?{channels:a.channels,textures:h,dispose(){for(const f of u.values())f.dispose();u.clear(),h.clear()}}:null}catch{return null}}async function Og(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await Dg(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const nd=new Map;function kg(i){if(!i)return null;let t=nd.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new In(n),t.colorSpace="",t.anisotropy=8,nd.set(i,t)}return t}const sl=new $t("#14181B"),rl=new $t("#FFFFFF"),ZE=.5;function Bg(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??yg},a=n.from!==void 0&&n1(n.from,s),c=[];return i.root.traverse(l=>{const h=l;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((f,g)=>{const _=f.name||h.name,b=_.toLowerCase();if(!Ou.some(p=>b.includes(p))){const p=rd.get(f)??f,d=Hg(s);if(!d&&f===p||a&&f!==p)return;const v=d?p.clone():p;d&&(v.userData.drillOwned=!0,rd.set(v,p),i1(v,s,h,r),c.push(v)),f!==v&&f.userData.drillOwned&&f.dispose(),Array.isArray(h.material)?h.material[g]=v:h.material=v;return}{const p=f.clone();f.userData.drillOwned&&f.dispose(),p.userData.drillOwned=!0,p.color=Bu(o.a),r1(p,o,e,zu(_),{...n,exact:r}),c.push(p),Array.isArray(h.material)?h.material[g]=p:h.material=p}})}),c}const QE=/^(thigh[LR]|pelvis[LR]|spine)$/,t1=/^shin[LR]$/,e1=8,id=i=>Math.round(i*100)/100,vo=[.8,.9],tu=[id(1-vo[1]),id(1-vo[0])],zg=8,eu=1,Gg={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},fo=i=>i!==void 0&&i!==kE;function sd(i,t){var r;const e=[new de(-1,-1,-1,-1),new de(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<e1;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const Hg=i=>{const t=Vg(i);return!!(t.shorts||t.socks||t.tone)},Vg=i=>({shorts:i.shorts,socks:i.socks,tone:fo(i.skin)?Gg[i.skin]:void 0}),n1=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&fo(i.skin)===fo(t.skin)&&(!fo(i.skin)||i.skin===t.skin),rd=new WeakMap;function i1(i,t,e,n){const s=sd(e,QE),r=sd(e,t1),o=Vg(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:Ts(o.shorts??"#000000",n)},kitSocksC:{value:Ts(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:Ts(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vKitLeg;`).replace("#include <skinning_pars_vertex>",`#include <skinning_pars_vertex>
#ifdef USE_SKINNING
uniform vec4 kitShortsB;
uniform vec4 kitShortsB2;
uniform vec4 kitSocksB;
uniform vec4 kitSocksB2;
float kitHit( float idx, vec4 a, vec4 b ) {
	return min( 1.0, step( abs( idx - a.x ), 0.25 ) + step( abs( idx - a.y ), 0.25 )
		+ step( abs( idx - a.z ), 0.25 ) + step( abs( idx - a.w ), 0.25 )
		+ step( abs( idx - b.x ), 0.25 ) + step( abs( idx - b.y ), 0.25 )
		+ step( abs( idx - b.z ), 0.25 ) + step( abs( idx - b.w ), 0.25 ) );
}
float kitLegW( vec4 a, vec4 b ) {
	return clamp( skinWeight.x * kitHit( skinIndex.x, a, b ) + skinWeight.y * kitHit( skinIndex.y, a, b )
		+ skinWeight.z * kitHit( skinIndex.z, a, b ) + skinWeight.w * kitHit( skinIndex.w, a, b ), 0.0, 1.0 );
}
#endif`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_SKINNING
	vKitLeg = vec2( kitLegW( kitShortsB, kitShortsB2 ), kitLegW( kitSocksB, kitSocksB2 ) );
#else
	vKitLeg = vec2( 0.0 );
#endif`),c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vKitLeg;
uniform vec3 kitShortsC;
uniform vec3 kitSocksC;
uniform vec3 kitSkinC;
uniform float kitShortsOn;
uniform float kitSocksOn;
uniform float kitSkinOn;`).replace("#include <map_fragment>",`#include <map_fragment>
#ifdef USE_MAP
	float kitBand = vMapUv.x * ${zg.toFixed(1)};
	float kitSkinAt = step( ${eu.toFixed(1)}, kitBand ) * step( kitBand, ${(eu+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${tu[0].toFixed(2)}, ${tu[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${vo[0].toFixed(2)}, ${vo[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const s1=i=>{const t=new $t(i),e=Math.max(t.r,t.g,t.b);return e>xo?xo/e:1},Ts=(i,t)=>t?new $t(i):Bu(i).multiplyScalar(xo);function nu(i,t){const e=[new de(0,0,0,0),new de(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function r1(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,l=(e==null?void 0:e.textures.get(n))??[],h=nu(e==null?void 0:e.channels,t.pattern),u=nu(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),f=o?a==null?void 0:a[n]:void 0,g=f?kg(o):null,_={kitMask0:{value:l[0]??null},kitMask1:{value:l[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:Ts(t.a,c)},kitB:{value:Ts(t.b,c)},kitSelWas0:{value:u[0]},kitSelWas1:{value:u[1]},kitWasA:{value:Ts((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:Ts((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:g},kitNumO:{value:new qt(...(f==null?void 0:f.o)??[0,0])},kitNumIX:{value:new qt(...(f==null?void 0:f.ix)??[1,0])},kitNumIY:{value:new qt(...(f==null?void 0:f.iy)??[0,1])},kitNumOn:{value:g?1:0},kitNumFlip:{value:ZE*(c?1:s1(t.a))}};i.userData.kitUniforms=_,i.onBeforeCompile=b=>{Object.assign(b.uniforms,_),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D kitMask0;
uniform sampler2D kitMask1;
uniform vec4 kitSel0;
uniform vec4 kitSel1;
uniform vec4 kitSelWas0;
uniform vec4 kitSelWas1;
uniform vec3 kitA;
uniform vec3 kitB;
uniform vec3 kitWasA;
uniform vec3 kitWasB;
uniform float kitFade;
uniform sampler2D kitNumber;
uniform vec2 kitNumO;
uniform vec2 kitNumIX;
uniform vec2 kitNumIY;
uniform float kitNumOn;
uniform float kitNumFlip;`).replace("#include <map_fragment>",`#ifdef USE_MAP
	vec4 kitM0 = texture2D( kitMask0, vMapUv );
	vec4 kitM1 = texture2D( kitMask1, vMapUv );
	vec3 kitNow = mix( kitA, kitB, dot( kitM0, kitSel0 ) + dot( kitM1, kitSel1 ) );
	vec3 kitWas = mix( kitWasA, kitWasB, dot( kitM0, kitSelWas0 ) + dot( kitM1, kitSelWas1 ) );
	diffuseColor.rgb = mix( kitWas, kitNow, kitFade );
	vec2 kitD = vMapUv - kitNumO;
	vec2 kitNuv = vec2( dot( kitD, kitNumIX ), dot( kitD, kitNumIY ) );
	float kitOnBack = kitNumOn
		* step( 0.0, kitNuv.x ) * step( kitNuv.x, 1.0 )
		* step( 0.0, kitNuv.y ) * step( kitNuv.y, 1.0 );
	float kitInk = texture2D( kitNumber, clamp( kitNuv, 0.0, 1.0 ) ).a * kitOnBack;
	float kitLum = dot( diffuseColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
	diffuseColor.rgb = mix( diffuseColor.rgb,
		kitLum > kitNumFlip ? vec3( ${sl.r.toFixed(4)}, ${sl.g.toFixed(4)}, ${sl.b.toFixed(4)} )
		: vec3( ${rl.r.toFixed(4)}, ${rl.g.toFixed(4)}, ${rl.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const o1=.18;function a1(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const BP=Object.freeze(Object.defineProperty({__proto__:null,ATLAS_BANDS:zg,KIT_FADE:o1,KIT_REGISTRY_TIMEOUT:Lg,SHIRT_MAP_MEAN:xo,SHORTS_CUT:tu,SKIN_BAND:eu,SKIN_TONES:Gg,SOCKS_CUT:vo,bodyNarrows:Hg,findAnkles:Ig,findHands:Pg,findHead:Cg,findTrunk:Ql,kitNumberBoxes:Og,kitNumberTexture:kg,kitSelectors:nu,kitSlugOf:zu,kitTint:Bu,loadKitMasks:Ug,loadPlayers:ac,recolour:Bg,shirtSlugs:Ng,skinNarrows:fo,squadVariants:Fg,stepKitFade:a1,variantIndexOf:YE},Symbol.toStringTag,{value:"Module"})),gi=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function Wn(i){const t=gi(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=t-s*(i.hold??0),a=(n*n-r*r)/(2*e),c=(n*n-s*s)/(2*e);if(a+c<=o){const h=o-a-c;return{D:t,t1:(n-r)/e,t2:h/n,t3:(n-s)/e,d1:a,d2:h,peak:n}}const l=Math.sqrt(e*o+(r*r+s*s)/2);return{D:t,t1:(l-r)/e,t2:0,t3:(l-s)/e,d1:(l*l-r*r)/(2*e),d2:0,peak:l}}function te(i){const t=Wn(i);return t.t1+t.t2+t.t3+(i.hold??0)}function ol(i,t){const e=Wn(i),n=i.accel,s=Math.min(i.startSpeed??0,i.cruise),r=i.endSpeed??0,o=Math.min(Math.max(t,0),e.D);if(o<=e.d1)return(Math.sqrt(s*s+2*n*o)-s)/n;if(o<=e.d1+e.d2)return e.t1+(o-e.d1)/e.peak;const a=e.D-r*(i.hold??0);return o>a&&r>0?e.t1+e.t2+e.t3+(o-a)/r:e.t1+e.t2+(e.peak-Math.sqrt(Math.max(0,e.peak*e.peak-2*n*(o-e.d1-e.d2))))/n}function Bn(i,t){const e=Wn(i),n=e.t1+e.t2+e.t3,s=n+(i.hold??0),r=Math.min(Math.max(t-i.t0,0),s),o=i.accel;let a,c;if(r<=e.t1){const h=Math.min(i.startSpeed??0,i.cruise);a=h*r+.5*o*r*r,c=h+o*r}else if(r<=e.t1+e.t2)a=e.d1+e.peak*(r-e.t1),c=e.peak;else if(r<=n){const h=r-e.t1-e.t2;a=e.d1+e.d2+e.peak*h-.5*o*h*h,c=e.peak-o*h}else c=i.endSpeed??0,a=e.D-c*(s-r);const l=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*l,i.from[1]+(i.to[1]-i.from[1])*l],speed:c}}const c1=.25,Wg=.5,ja=.5,l1=1e-4,Ar=1e-6;function Gu(i,t){return!!t.flow&&(i.endSpeed??0)>0&&i.endSpeed===t.startSpeed&&Math.abs(i.t0+te(i)-t.t0)<Ar&&gi(i.to,t.from)<Ar}function Xa(i,t){if(!Gu(i,t))return null;const e=gi(i.from,i.to),n=gi(t.from,t.to);if(e<=0||n<=0)return null;const s=[(i.to[0]-i.from[0])/e,(i.to[1]-i.from[1])/e],r=[(t.to[0]-t.from[0])/n,(t.to[1]-t.from[1])/n],o=Math.acos(Math.min(1,Math.max(-1,s[0]*r[0]+s[1]*r[1])));if(o<l1)return null;const a=Math.min(2*Wg/Math.sin(o/2),ja*e,ja*n);return{corner:[i.to[0],i.to[1]],dA:s,dB:r,L:a,turn:o}}function jg(i,t){const e=-(1-t)*(1-t),n=t*t,{corner:s,dA:r,dB:o,L:a}=i;return{pos:[s[0]+a*(e*r[0]+n*o[0]),s[1]+a*(e*r[1]+n*o[1])],tan:[(1-t)*r[0]+t*o[0],(1-t)*r[1]+t*o[1]]}}function u1(i,t){const e=Math.sin(t);return e/(e+Math.sin(i-t))}const Xg=.3,iu=.5,h1=.05,f1=20;function od(i,t){const e=gi(i.from,i.to);return e>0?[(i.to[0]-i.from[0])/e*t,(i.to[1]-i.from[1])/e*t]:[0,0]}const ad=i=>(i.startSpeed??0)>0&&i.startSpeed===i.endSpeed&&i.cruise===i.startSpeed;function cd(i,t){if(ad(i)||t&&ad(t))return null;const e=i.endSpeed??0,n=i.t0+te(i),s=t&&Math.abs(t.t0-n)<Ar&&gi(i.to,t.from)<Ar;if(s&&Xa(i,t))return null;const r=od(i,e),o=s?od(t,Math.min(t.startSpeed??0,t.cruise)):[0,0],a=[o[0]-r[0],o[1]-r[1]];if(Math.hypot(a[0],a[1])<h1)return null;const c=Math.min(Xg,iu*te(i));if(!s){const l=Wn(i);if(l.t2>0&&!(i.hold??0)){const h=l.t3*(l.peak-e)/l.peak;if(l.peak/h<=f1)return{k:a,w:l.t3,corner:!1,brake:h}}return{k:a,w:c,corner:!1}}return{k:[a[0]/2,a[1]/2],w:Math.min(c,iu*te(t)),corner:!0}}function ld(i,t,e,n,s){if(t.brake!==void 0){const u=Wn(s).peak,f=t.brake,g=(1-e)*t.w,_=g>f?u*(g-f)+u*f/2:u/f*g*g/2,b=g>f?u:u/f*g,p=gi(s.from,s.to),d=(p-_)/p,v=(s.to[0]-s.from[0])/p,M=(s.to[1]-s.from[1])/p;i.pos=[s.from[0]+(s.to[0]-s.from[0])*d,s.from[1]+(s.to[1]-s.from[1])*d],i.vel=[v*b,M*b];return}const{k:r,w:o}=t,a=n?1-e:e,c=n?-1:1,l=t.corner?a*(-3+a*(6-2*a)):(3*a-2)*a,h=t.corner?a*a*(-1.5+a*(2-.5*a)):a*a*(a-1);i.pos[0]+=r[0]*o*h,i.pos[1]+=r[1]*o*h,i.vel[0]+=c*r[0]*l,i.vel[1]+=c*r[1]*l}function zn(i,t,e=!0){let n=-1;for(let l=0;l<i.length;l++)t>=i[l].t0&&(n=l);if(n<0)return null;const s=d1(i,n,t);if(!e)return s;const r=i[n],o=r.t0+te(r),a=cd(r,i[n+1]);a&&t>=o-a.w&&t<=o&&ld(s,a,(t-(o-a.w))/a.w,!1,r);const c=i[n-1];if(c&&Math.abs(c.t0+te(c)-r.t0)<Ar&&gi(c.to,r.from)<Ar){const l=cd(c,r);l&&t<r.t0+l.w&&ld(s,l,(t-r.t0)/l.w,!0,r)}else if(c!=null&&c.overrun){const l=Math.min(Xg,iu*te(r)),h=(t-r.t0)/l;if(h<1){const u=Bn(c,r.t0).pos,f=u[0]-r.from[0],g=u[1]-r.from[1],_=1-h*h*(3-2*h),b=6*h*(1-h)/l;s.pos[0]+=f*_,s.pos[1]+=g*_,s.vel[0]-=f*b,s.vel[1]-=g*b}}return s}function d1(i,t,e){const n=i[t],{pos:s,speed:r}=Bn(n,e),o=gi(n.from,n.to);if(o>0){const a=Math.hypot(s[0]-n.from[0],s[1]-n.from[1]);let c=null,l=0;const h=t+1<i.length?Xa(n,i[t+1]):null;if(h&&a>o-h.L)c=h,l=(a-(o-h.L))/(2*h.L);else{const u=t>0?Xa(i[t-1],n):null;u&&a<u.L&&(c=u,l=(u.L+a)/(2*u.L))}if(c){const{pos:u,tan:f}=jg(c,l);return{pos:u,speed:r*Math.hypot(f[0],f[1]),vel:[r*f[0],r*f[1]]}}}return e>n.t0+te(n)||o<=0?{pos:s,speed:r,vel:[0,0]}:{pos:s,speed:r,vel:[(n.to[0]-n.from[0])/o*r,(n.to[1]-n.from[1])/o*r]}}function ud(i,t){var e;return((e=zn(i,t))==null?void 0:e.vel)??[0,0]}function p1(i,t,e=c1){const n=ud(i,t),s=ud(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const m1=2.5;function g1(i,t){let e=0;for(const n of i)t>=n.t0&&(e=Wn(n).peak);return Math.min(1,e/m1)}const _1=.035,b1=.1,hd=.4,x1=1;function v1(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||gi(s.from,s.to)<x1)continue;const r=s.t0+te(s)-b1,o=(t-r)/hd;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+hd)||(e=Math.max(e,_1*.5*(1-Math.cos(2*Math.PI*o))))}return e}function Pe(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function y1(i,t=0){return i-t}function cc(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function M1(i,t=58*Math.PI/180,e=.85){const n=cc(i);return Math.min(t,Math.max(-t,n))*e}const S1=1.2,Na=180*Math.PI/180,al=120*Math.PI/180,fd=70*Math.PI/180;function Hu(i){return i<=0?Na:i<=2.3?Na+(al-Na)*i/2.3:i>=5.48?fd:al+(fd-al)*(i-2.3)/(5.48-2.3)}const qa=.125;function dd(i,t){const e=t-i,n=cc(e);return n===Math.PI&&e<0?-Math.PI:n}function qg(i,t,e){const n=t*e,s=Math.floor((Math.sqrt(1+8*i/(n*e))-1)/2);return i/((s+1)*e)+n*s/2}function A1(i,t,e,n){const s=Math.max(n,Na)/qa,r=Math.sign(t)*Math.min(n,qg(Math.abs(t),s,e)),o=Math.max(s*e,Math.abs(i)*e/qa);return Math.max(i-o,Math.min(i+o,r))}const E1=.12,pd=15*Math.PI/180;function T1(i){return Math.max(-pd,Math.min(pd,i*E1))}const w1=.001;function Fi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=w1}function R1(i,t,e,n){return e||n||!Fi(i,t)?null:Pe(i,t)}function C1(i,t){const e=i?zn(i,t):null;return e?Math.hypot(e.vel[0],e.vel[1]):0}const I1=2.3,ao=1.1,md=.6,P1=1.15,gd=.6,_d=1.2,Ua=.88,L1=1-Ua,D1=.15,aa=.28;function ss(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"||n==="ground"&&i.endFrac!==void 0,r=s?Math.min(Math.max(i.endFrac??0,0),1):0,o=s?(2*e-(1-r)*e*e)/(1+r):1-Math.pow(1-e,n==="shot"?P1:I1),a=i.fromHeight??0,c=i.toHeight??(n==="shot"?gd:0),l=a*(1-e)+c*e;let h;if(n==="clipped"){const u=i.loft??_d;h=(e<Ua?u*Math.sin(Math.PI*e/Ua):D1*u*Math.sin(Math.PI*(e-Ua)/L1))+l}else if(n==="lofted")h=(i.loft??_d)*Math.sin(Math.PI*e)+l;else if(n==="shot")h=l;else if(n==="headed"){const u=i.loft??0;h=e<=aa?a+(u-a)*Math.sin(Math.PI/2*(e/aa)):c+(u-c)*Math.cos(Math.PI/2*((e-aa)/(1-aa)))}else n==="drop"?h=(i.fromHeight??gd)*(1-e*e):h=(i.loft??0)*Math.sin(Math.PI*e)+l;return{pos:[i.from[0]+(i.to[0]-i.from[0])*o,i.from[1]+(i.to[1]-i.from[1])*o],height:h,done:e>=1}}const bd=new WeakMap;function F1(i){const t=bd.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,ss(i,i.t0+i.duration*n/32).height);return bd.set(i,e),e}function su(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=ss(i,n),r=ss(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}const xd=new WeakMap;function Kg(i,t){if(i.style!=="ground"||i.endFrac===void 0)return su(i,t);let e=xd.get(i);return e||(e={...i},delete e.endFrac,xd.set(i,e)),su(e,t)}function $g(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const vd=3,Cn=2.52,Rn=4,nr=.8,ca=1,Li=.3,$r=.6,Mn=.15,N1=.5,hi=.45,Yg=.4,Jg=.7,yd=Math.PI/12,ir=4,U1=.6,Md=.4,O1=.3,k1=.15,B1=.4,z1=.35,yo=.3,G1=Math.PI/4,H1=.25,V1={left:"gk_dive_a",right:"gk_dive_b"},Zg=4,W1=.12,j1=.25,X1=.35;function Sd(i){return Math.min(j1,Math.max(W1,i*X1))}const q1=1.3,K1=.15;function Ad(i,t,e){const n=i-K1,s=i+t-n,r=Math.min(q1,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const $1=1.8,Ed=.3,Y1=.7,J1=.9,Z1=2.5,_n={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},Q1={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:_n.roll},la={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},tT=.8;function eT(i,t,e,n=lc){const s=Zg*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-r0)*t)}const nT=3;function iT(i,t,e){if(t<=0)return null;const n=Math.min(nT,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Jn=1,ua=.25,cl=.5,Td=.8,sT=.4,Qg=3,rT=.6,oT=2.3,wd=.9,sr=.3,Rd=.4,aT=12,cT=8,lT=3,uT=.25;function Cd(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(ru,r/cT),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(uT*r,lT)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(ru,r/aT),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const hT=.6,ru=.2;function fT(i,t,e){const n=hT*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(ru,e/n)}const dT=16,pT=12,ll=2,mT=8,zP=6,gT=.1,_T=2.44;function ws(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function t0(i,t,e){const n=ws(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const ul=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],ha={id:"pass_a",duration:.567,contact:.167,reach:.89},Id="jog_back_a",Yr=.5,bT=.5,xT=.3,vT=.9,Pd=.5,yT=.2,Ld=.8,hl=.5,MT=1.6,fa={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},Dd=3,ST=.1,da=["walk","jog","run"],Oa=.5,AT=1.5*Oa,ET=.42*Math.SQRT1_2,TT=12,wT=.15;function RT(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=Fs(n,lc)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function Fd(i,t,e){const n=a=>t.reduce((c,l)=>Math.min(c,Math.hypot(a[0]-l[0],a[1]-l[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,l=0;for(const g of t){const _=Math.hypot(s[0]-g[0],s[1]-g[1]);e-_>l+1e-9&&(l=e-_,c=g)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],u=Math.hypot(h[0],h[1])>1e-6?Je(h):[1,0];s=[c[0]+e*u[0],c[1]+e*u[1]];const f=n(s);f>o+1e-9&&(r=s,o=f)}return r}function Nd(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Jr(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const CT=.2;function Ud(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function Od(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Je([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ne+ST?null:[t[0]-Ne*s[0],t[1]-Ne*s[1]],o=e?Je([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Ne,Yg),Jg);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function IT(i){return i<15?"roll":i<30?"throw":"kick"}function e0(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function PT(i,t,e,n,s){const{reach:r,at:o}=e0(i,e,n);if(r>Qg*s)return null;const a=Je([e[0]-i[0],e[1]-i[1]]);if(r<=rT*s)return{kind:"catch",clip:_n.catch.id,clipDuration:_n.catch.duration,contactOffset:_n.catch.contact,contact:[i[0]+Ne*a[0],i[1]+Ne*a[1]],travelTo:null};const c=a0(i,t,n),l=_n.dive[c],h=Je([o[0]-i[0],o[1]-i[1]]),u=Math.min(oT*s,Math.max(0,r-l.reach*s));return{kind:"dive",clip:l.id,clipDuration:l.duration,contactOffset:l.contact,contact:o,side:c,travelTo:[i[0]+u*h[0],i[1]+u*h[1]]}}function LT(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const l=Je(c);return[a[0]+Ed*n*l[0],a[1]+Ed*n*l[1]]}const n0=.25,DT=20;function i0(i,t){var s;const e=((s=zn(t??[],i.t0-1e-9))==null?void 0:s.vel)??[0,0],n=[2*(i.to[0]-i.from[0])/i.duration-e[0],2*(i.to[1]-i.from[1])/i.duration-e[1]];return{e:n,W:Math.min(n0,Math.max(.05,.75*Math.hypot(n[0],n[1])/DT))}}function Ka(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function ou(i,t,e,n,s=!0){var o;let r=null;if(!s){for(const a of i)a.player===e&&n>=a.t0&&n<Vu(a,t)&&(r=Ka(a,n));return r}for(const a of i){if(a.player!==e||n<a.t0-n0)continue;const{e:c,W:l}=i0(a,t);if(n<a.t0-l)continue;const h=n>=a.t0?FT(a,t,n):r??((o=zn(t??[],n))==null?void 0:o.pos)??(t!=null&&t.length&&t[0].t0<a.t0?t[0].from:a.from);if(h)if(n<a.t0+l){const u=(n-a.t0+l)/(2*l),f=2*l*(u*u*u-u*u*u*u/2-Math.max(0,u-.5));r=[h[0]+c[0]*f,h[1]+c[1]*f]}else r=h}return r}function FT(i,t,e){const n=Vu(i,t);if(e<n)return Ka(i,e);const s=t.find(u=>u.t0===n),r=[i.to[0]-s.from[0],i.to[1]-s.from[1]],o=s.t0+te(s);if(e>=Math.max(i.t0+i.duration,Math.hypot(r[0],r[1])>1e-6?o:-1/0))return null;const a=zn(t,e),c=Ka(i,e),l=o>n?Math.min(1,(e-n)/(o-n)):1,h=1-l*l*(3-2*l);return[a.pos[0]+c[0]-i.to[0]+r[0]*h,a.pos[1]+c[1]-i.to[1]+r[1]*h]}function Vu(i,t){let e=1/0;for(const n of t??[])n.t0>=i.t0&&n.t0<e&&(e=n.t0);return e}function NT(i,t,e,n){return i.some(s=>s.player===e&&n>=s.t0-i0(s,t).W&&n<Vu(s,t))}const UT=[{id:"header_a",duration:1.9,contact:1}],OT=1.57,kd=.1,Bd=.6,fl=2,pa=.02,dl=.6,kT=2.5,BT=.22,zT=3,GT=6.5;function pl(i,t){return Math.min(Math.max(BT*i,zT),GT)*t}const HT=10,VT=1.7;function WT(i,t,e,n){const s=e??[t[0],t[1]],r=Je([s[0]-i[0],s[1]-i[1]]),o=[i[0]+kd*n*r[0],i[1]+kd*n*r[1]],a=UT[0];return{contact:o,height:OT*n,clip:a,set:[i[0]+Ne*r[0],i[1]+Ne*r[1]],faceAt:s}}const zd=.4,jT=.3,XT=18,qT=10,KT=.45,$T=.8,ka={id:"strike_jog_a",contact:.4},YT=1,JT={strike_jog_a:{loop:!1,category:"shoot",ballContact:ka.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function s0(i){var t;for(const[e,n]of Object.entries(JT))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Gd=.15,ZT=.2,lc=3.35,r0=.5;function QT(i,t,e,n,s=1){let r=null,o=1/0;for(const _ of e){const b=Math.hypot(_.at[0]-t[0],_.at[1]-t[1]);b<o&&(o=b,r=_)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-r0)*s,c=r.at,l=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const _=Pe(i,c),b=p=>(p[0]-i[0])*Math.cos(_)-(p[1]-i[1])*Math.sin(_);return l.sort((p,d)=>b(d)-b(p)),n==="left"?l[0]:l[1]}const h=Math.hypot(l[0][0]-i[0],l[0][1]-i[1]),u=Math.hypot(l[1][0]-i[0],l[1][1]-i[1]);if(Math.abs(h-u)>1e-6)return h>u?l[0]:l[1];const f=Math.hypot(l[0][0]-t[0],l[0][1]-t[1]),g=Math.hypot(l[1][0]-t[0],l[1][1]-t[1]);return f<g-1e-6?l[0]:l[1]}function Hd(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const o0=.35;let Ne=o0;function Vd(i){Ne=i}function tw(){return Ne/o0}function Qn(i,t){return[i[0]+Ne*Math.sin(t),i[1]+Ne*Math.cos(t)]}function ml(i,t,e){const n=Pe(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function a0(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Je(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Wd(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function ew(i,t,e){const n=Je([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Je([e[0]-i[0],e[1]-i[1]]);const g=n[0]*s[1]-n[1]*s[0];r=Math.abs(g)<1e-6?1:Math.sign(g)}else r=1,s=Wd([-n[0],-n[1]],-r*yd);const o=Wd(n,r*yd),a=[i[0]+Ne*o[0],i[1]+Ne*o[1]],c=[i[0]+Ne*s[0],i[1]+Ne*s[1]],l=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(l[0],l[1]),u=h>1e-6?[l[0]/h,l[1]/h]:s,f=Math.min(Math.max(h,Yg),Jg);return{contact:a,set:[a[0]+f*u[0],a[1]+f*u[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const nw=.5,iw=1.4,jd={walk:.8,jog:1.2,run:2.2},sw=.25,rw=.7,ow=.3,aw=2,Zr=.4,cw=10,lw=8,uw=2.5,Xd=6,hw=2,qd=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Kd=1.4;function $d(i,t,e){const n=i.t0+te(i),s=gl(i,t);let r=0,o=Math.max(n-t,.001);if(gl(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;gl(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function gl(i,t){const e=Bn(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function fw(i,t,e,n,s,r={}){const o=te(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=Je([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Pe(i.from,i.to),l=[Math.cos(c),-Math.sin(c)],h=w=>(w[0]-i.from[0])*a[0]+(w[1]-i.from[1])*a[1],u=i.t0+o,f=h(e),g=tw(),_=(r.others??[]).filter(w=>Math.abs((w[0]-i.from[0])*Math.cos(c)-(w[1]-i.from[1])*Math.sin(c))<=hw).map(w=>h(w)),b=rw*g,p=sw*g,d=w=>h(Bn(i,w).pos),v=[],M=[];let y=i.t0,T=[...t];const R=Math.ceil(Wn(i).D/(.5*Math.min(n,Zr*3)))+8;for(let w=0;;w++){M.push(y);const D=h(T),A=f-D,E=r.turnOut?Zr:n,P=Zr*(1+Kd),C=w===0&&!!r.turnIn||!!r.turnOut&&A<=P,z=C?Ne:b;if(A<=Kd*E||w===R-1||f-(d(y)+z)<.05){const j=Math.hypot(e[0]-T[0],e[1]-T[1]);let Le=y;if(j>1e-6){const Kt=Math.max(Bn(i,y).speed,nw*i.cruise),Zt=Math.min(2*j/(Kt+ao*(j/Kt)/2),Math.max(u-y,.2));v.push({from:T,to:[...e],t0:y,duration:Zt,style:"push",endFrac:0}),Le=y+Zt}return Le<u&&v.push({from:[...e],to:[...e],t0:Le,duration:u-Le,style:"ground"}),{flights:v,touches:M,restEnd:Math.max(Le,u)}}let U=C?Zr:n;if(!C&&A>cw){let j=A;for(const Le of _)Le>D&&(j=Math.min(j,Le-D));U*=Math.min(Math.max(j/lw,1),uw)}const W=U;U*=1+qd[w%qd.length],!C&&r.turnOut&&A-U<P&&(U=Math.max(A-P,Zr));const O=Math.min(U,iw*i.cruise*i.cruise/ao),B=$d(i,y,O),N=Math.max(i.cruise*B-O,0),Y=Math.min(z,D-d(y)+N),k=d(y)+Y,ct=Math.max(D,k),yt=W>aw?s:s*(w%2?-1:1),Rt=Math.min(p,ow*O),Q=(T[0]-i.from[0])*l[0]+(T[1]-i.from[1])*l[1],ft=Math.abs(yt*Rt-Q),ut=Math.sqrt(Math.max(Xd*Xd-ft*ft,0)),Z=Math.min(ct+O,D+ut,f),xt=$d(i,y,Z-k),Pt=(Z-D)/xt,Ct=Pt+ao*xt/2,zt=Pt-ao*xt/2,Xt=[i.from[0]+a[0]*Z+l[0]*yt*Rt,i.from[1]+a[1]*Z+l[1]*yt*Rt],Ae={from:T,to:Xt,t0:y,duration:xt,style:"push",endFrac:Math.max(zt,0)/Ct};v.push(Ae),T=[...Xt],y+=xt}}function mi(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Nn(i,t,e){const n=mi(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const Wu=.3;function ju(i){const t=Wl.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??Cn})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({...e,min:n===0?Wu:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed)}))}function Xu(i,t,e,n){return Nn(i.groups[t],e,n)}function uc(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function dw(i,t,e=!0){const n=Wn(i),s=n.t1+n.t2+n.t3,r=s+(i.hold??0);if(r<=0||!t.length)return[];const o=i.endSpeed??0,a=i.startSpeed??0,c=new Set([0,r]);for(const u of t)u.min>n.peak||(u.min>a&&c.add((u.min-a)/i.accel),u.min>o&&c.add(s-(u.min-o)/i.accel));const l=[...c].sort((u,f)=>u-f),h=[];for(let u=0;u+1<l.length;u++){if(l[u+1]-l[u]<1e-9)continue;const f=uc(t,Bn(i,i.t0+(l[u]+l[u+1])/2).speed);if(!f)continue;const g=h[h.length-1];g&&g.gait===f.gait&&Math.abs(g.t1-(i.t0+l[u]))<1e-9?g.t1=i.t0+l[u+1]:h.push({gait:f.gait,t0:i.t0+l[u],t1:i.t0+l[u+1]})}return e?c0(h):h}const pw=.3;function c0(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=pw;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const l0=.85,Er=1.15,Yd=.5;function u0(i){return Yd+(l0-Yd)*Math.min(1,Math.max(0,i))}function mw(i,t){const e=i/t;return e>Er?Er:Math.max(u0(e),e)}function gw(i,t){return ju(i).map(e=>{const n=Xu(i,e.gait,t,0);return{gait:e.gait,clip:n,speed:e.clipSpeed,duration:i.clips[n].duration}})}const Jd=.07,_w=.15,Zd=5;function Qd(i,t,e,n={lo:0,w:0,cadence:0}){const s=i.length;let r=0;for(;r+2<s&&t>=i[r+1].speed;)r++;const o=i[r],a=i[Math.min(r+1,s-1)],c=a===o?0:Math.min(1,Math.max(0,(t-o.speed)/(a.speed-o.speed))),l=c*c*(3-2*c),h=(1-l)*o.speed*o.duration+l*a.speed*a.duration,u=(1-l)/o.duration+l/a.duration,f=e/h/u,_=(1-Math.min(1,Math.max(0,(t-e)/_w)))*u0(f);return n.lo=r,n.w=l,n.cadence=u*(f>Er?Er:Math.max(_,f)),n}const bw=new Set(["pass","shoot","receive","header","defensive"]),$a=new Set(["turn","transition"]),Ui=.15,h0=.1,f0=.3,xw=.45,vw=.2,yw=.12,Mw=.6;function qu(i,t){var e;return bw.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function Ku(i,t,e){var r,o;if(qu(i,t))return h0;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return $a.has(n??"")?Ui:n==="idle"?s==="idle"?Mw:s==="locomotion"?yw:Ya:n==="locomotion"&&s==="locomotion"?vw:$a.has(s??"")?Ui:Ya}function d0(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?xw:$a.has(e??"")?Ui:qu(i,t)?f0:Ya}function Sw(i,t,e){var n;return qu(i,t)||$a.has(((n=i.clips[t])==null?void 0:n.category)??"")?d0(i,t):Ku(i,e,t)}const p0=.1,Aw=.2;function m0(i,t,e){const n=Math.max(Ku(i,e,t),Sw(i,t,e));return Math.min(Aw,Math.max(p0,n/3))}const Ew=.035;function Tw(i,t,e){return Math.min(m0(i,t,e),Math.max(Ew,Ku(i,e,t)/3))}const qe=Math.PI/180,di={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*qe,t50:.567,t90:.8,peak:159*qe,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*qe,t50:.533,t90:.8,peak:213*qe,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*qe,t50:.4,t90:.6,peak:366*qe,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*qe,t50:.767,t90:1.033,peak:192*qe,standing:!1}};function As(i,t){if(t<=0)return 0;if(t>=i.duration)return 1;const e=i.t50,n=i.t90-i.t50,s=i.duration-i.t90,r=.5/e,o=.4/n,a=.1/s,c=3*(e+n)/((2*n+e)/r+(n+2*e)/o),l=3*(n+s)/((2*s+n)/o+(s+2*n)/a),h=t<=i.t50?0:t<=i.t90?1:2,u=h===0?e:h===1?n:s,f=(t-(h===0?0:h===1?i.t50:i.t90))/u,g=h===0?0:h===1?.5:.9,_=h===0?.5:h===1?.9:1,b=h===0?r:h===1?c:l,p=h===0?c:h===1?l:a,d=f*f,v=d*f;return g*(2*v-3*d+1)+_*(3*d-2*v)+u*(b*(v-2*d+f)+p*(v-d))}function g0(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+Ui&&(n=s);return n}function ww(i,t,e,n,s=0){const r=g0(i,t,e);if(!r)return null;const o=di[r.clip],a=r.end-r.t0,c=r.offset+Math.min(e-r.t0,a),l=As(o,r.offset),h=As(o,r.offset+a),u=As(o,c),f=s?As(o,r.offset+Math.min(e+s-r.t0,a)):u,g=h-l>1e-9?(f-l)/(h-l):1,_=n??r.from,b=n===void 0?r.to-r.from:fi(n,r.to),p=Math.min(1,(e-r.t0)/Ui),d=e<=r.end?1:Math.max(0,1-(e-r.end)/Ui),v=Math.max(0,Math.min(p,d)),M=e<=r.end?u:As(o,r.offset+(e-r.t0));return{heading:_+b*g,clipYaw:o.yaw*M*v*v*(3-2*v)}}function Rw(i,t){return i.peak+Hu(t)}function Cw(i,t,e){const n=Math.abs(i);return n<au?null:n>Vw&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const au=45*qe,tp=60*qe,Iw=.3,Pw=.5,Lw=.7,Dw=130*qe,ep="run_stop_a",np=.75,Fw=.167;function Nw(i,t){var s;if((i.endSpeed??0)>0)return null;const e=Wn(i),n=(s=uc(t,e.peak))==null?void 0:s.gait;return n!=="run"&&n!=="sprint"||e.t3<np-Fw?null:i.t0+e.t1+e.t2+e.t3-np}const ma=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],ip={left:"strafe_l_a",right:"strafe_r_a"},Uw=3.2,Ow=3.2,_0=60*qe,kw=120*qe,Bw=100*qe,sp=[{id:"jog_back_diag_a",axis:225.5*qe,speed:2.04},{id:"jog_back_diag_b",axis:135.5*qe,speed:2.27}],zw=5;function Gw(i,t){if(Math.abs(i)>_0)return null;const e=i>=0?sp[0]:sp[1];return t<=e.speed*Er?{id:e.id,axis:e.axis}:null}function Hw(i,t){const e=Math.abs(i);return e<=_0?t>Uw?null:t>(ma[0].speed+ma[1].speed)/2?ma[1].id:ma[0].id:e>kw||t>Ow?null:i>0?ip.right:ip.left}const Vw=120*qe;function fi(i,t){return cc(t-i)}const Ya=.25;function pr(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?ZT:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=d0(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function b0(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<pr(t,r)&&(s=r);return s}const Ww=.15;function jw(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const Xw=.1,rp=2,qw=6,Kw=.4;function Ja(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function $w(i,t){return Ja(mi(i),20973)*t}function ga(i){return 1+Xw*(2*Ja(mi(i),10196)-1)}function Yw(i,t){return(rp+Ja(mi(i),7047)*(qw-rp))*(1+Kw*(2*Ja(mi(i)+t*2654435761,28490)-1))}function Jw(i,t){let e=0;for(let n=0;n<64;n++)if(e+=Yw(i,n),t<e)return n;return 64}function op(i,t,e){const n=i.length;if(n<=1)return i[0];const s=mi(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function Zw(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const Qw=new Set(["receive_a","pass_a","pass_b"]),x0=.8,tR=.7;function v0(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function $u(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+te(n)?0:Bn(n,t).speed);return e}function eR(i,t,e){for(const n of i)Qw.has(n.clip)&&$u(t[n.player],v0(e,n))>=x0&&(n.additive=!0)}const nR=1,iR=2,sR=.025,ap=.2,rR=.4,cp="idle_transition";function oR(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/ap,(o-r)/ap);a<=0||(n=Math.max(n,sR*a*.5*(1-Math.cos(2*Math.PI*iR*r))))}return n}const _a="idle_b",aR=.5,cR=.3;function lR(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=Math.min(1,(e-s.t0)/cR);n=Math.max(n,aR*r*r*(3-2*r))}return n}function uR(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=v0(e,r)-nR,a=r.t0;if(a-o<rR||o<0)continue;let c=!1;for(let l=o;l<=a;l+=.1){if($u(t[r.player],l)>Wu){c=!0;break}const h=b0(i,e,r.player,l);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[cp]&&s.push({player:r.player,clip:cp,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const hR=.6,y0=.5,M0=.6,po=2*y0/M0,Za=po/M0,fR=y0-yo;function dR(i){return(po-Math.sqrt(Math.max(0,po*po-2*Za*i)))/Za}function pR(){return po-Za*dR(fR)}const mR=.15,gR=.05;function _R(i,t,e){const n=Pe(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(H1,s/2):yo,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+G1;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function bR(i,t,e,n,s,r){const o=Math.min(yo,e*(n-Li)/2);for(let a=o;a>=mR-1e-9;a-=gR){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}const ba=.05,cu=.3,xR=3,vR=1.5,yR=100*qe,lp=1.3,up=.5,MR=.5,hp=.5;function SR(i){return i<=30*qe?1:i<=60*qe?.75:.5}function AR(i,t){if(t<=1e-9)return 0;const e=i.endSpeed??0,n=Wn({...i,hold:0});if(e>=i.cruise-1e-9||n.peak<i.cruise-1e-9)return null;const s=t/(1-e/i.cruise);return e*s<=n.d2+1e-9?s:null}const ER=10*qe,fp=50;function TR(i,t,e=1){var Me,Xe,yn,zi,xi,Pn,Xn,Gi,si,vi,Hi,ri,Vi,rs,Ns,os,as,cs,Tt;Zw(t),s0(t);const n=Wa(i),s=ju(t),r={};i.players.forEach(x=>r[x.id]=[...x.start]);const o={},a=[],c=[],l=[],h=[],u=[],f=[],g=[],_=[],b={},p={},d=new Map,v=new Map,M=new Set,y=x=>!!x&&x.type==="move"&&!!x.dur,T=x=>{let m=x+1;for(;y(Et[m]);)m++;return Et[m]},R=x=>{let m=x-1;for(;y(Et[m]);)m--;return Et[m]},w=new Set,D={},A={},E={},P={};function C(x){l.push(x),D[x.player]=x.t0,Fi(r[x.player],x.at)&&(z[x.player]=Pe(r[x.player],x.at))}const z={},U={},W={};function O(x){const m=b[x];let F=Math.max(m?m.t0+te(m):0,U[x]??0,0);for(const L of c)L.player===x&&t.clips[L.clip]&&(F=Math.max(F,pr(t,L)));return F}function B(x,m,F,L){if(it.has(x)||!Fi(r[x],F))return null;const S=z[x]??0,V=fi(S,Pe(r[x],F));if(Math.abs(V)<tp)return null;const q=di[V>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[q.id])return null;const $=N(q),et=O(x),nt=Math.max(et,Math.min(m,L-$));return nt+$>L+1e-9?null:(k(x,q,nt,0,S,S+V),nt)}function N(x,m=0){return x.duration-m-Ui}function Y(x,m){const F=Math.abs(m)>Dw,L=x==="run"?di.turn_180_a:null,S=F&&L&&t.clips[L.id]?L:di.turn_to_run_a,V=S.id===di.turn_to_run_a.id?Pw:0,q=S.id===di.turn_to_run_a.id?Lw:N(S,V);return{c:S,offset:V,play:q}}function k(x,m,F,L,S,V,q){const $=q??N(m,L),et={player:x,clip:m.id,t0:F,offset:L,end:F+$,from:S,to:V},nt={player:x,clip:m.id,t0:F,...L?{offset:L}:{},...q!==void 0?{loopUntil:F+$}:{}};g.push(et),c.push(nt),W[x]={span:et,cue:nt},U[x]=et.end+Ui}function ct(x,m){const F=W[x];return!F||F.span.end<=m+1e-9?!0:m-F.span.t0<Iw?!1:(F.span.end=m,F.cue.loopUntil=m,U[x]=m+Ui,!0)}function yt(x,m){if(ct(x,m))return;const F=W[x];g.splice(g.indexOf(F.span),1);const L=c.indexOf(F.cue);L>=0&&c.splice(L,1),delete W[x],U[x]=0}function Rt(x,m=1/0){const F=B(x.player,x.t0,x.at,m);C(F===null?x:{...x,t0:F})}const Q=[];function ft(x){var m;for(let F=0;F<Q.length;F++){const L=Q[F];L.afterT>=x||(Q.splice(F--,1),(o[m=L.player]??(o[m]=[])).push(L.move),b[L.player]=L.move,p[L.player]=xt(L.move,L.player),C({player:L.player,at:L.faceBall,t0:L.move.t0}),C({player:L.player,at:L.faceSettle,t0:L.arrival}),r[L.player]=[...L.move.to])}}function ut(x,m,F){let L=[...r[x]],S=[...r[x]];const V=b[x];let q=Math.max(V?V.t0+te(V):0,A[x]??0),$=-1/0,et=null;for(let nt=m+1;nt<Et.length;nt++){const lt=Et[nt];if(lt.t>=F)break;if((lt.type==="pass"?lt.from:lt.player)!==x)continue;if(lt.type!=="move"){et=`${lt.type} at t=${lt.t}`;break}const st=t.groups[lt.gait??"jog"]??t.groups.jog,ht=t.clips[Nn(st,x,lt.t)].speed??Cn,pt={from:L,to:[...lt.to],t0:lt.t,cruise:ht,accel:Rn},wt=lt.t+te(pt);q=Math.max(q,wt),L=[...lt.to],S=wt>F?Bn(pt,F).pos:[...lt.to],$=lt.t}return{expected:L,atArrival:S,busyUntil:q,afterT:$,blocked:et}}function Z(x,m,F=x[0].t0){const L=[];for(const q of x)for(const $ of dw(q,s,!1)){const et=L[L.length-1];et&&et.gait===$.gait&&Math.abs(et.t1-$.t0)<1e-9?et.t1=$.t1:L.push($)}const S=t.clips[ep]?Nw(x[x.length-1],s):null,V=c0(L).filter(q=>S===null||q.t0<S-1e-9).map(q=>({player:m,clip:Xu(t,q.gait,m,F),t0:q.t0,loopUntil:S===null?q.t1:Math.min(q.t1,S)}));return S!==null&&V.push({player:m,clip:ep,t0:S}),V}function xt(x,m){const F=Z([x],m),L=W[m];if(L){let S=1/0;for(const V of F)V.t0>L.span.t0+1e-9&&V.t0<L.span.end-1e-9&&(S=Math.min(S,V.t0));S<1/0&&yt(m,S)}return c.push(...F),d.set(x,F),F}function Pt(x,m){return x.filter(F=>{if(F.t0>=m-1e-9)return!0;if((F.loopUntil??1/0)<=m+1e-9){const L=c.indexOf(F);return L>=0&&c.splice(L,1),!1}return F.t0=m,!0})}function Ct(x,m,F="event"){(Mt[x]??0)>m&&console.warn(`[engine3d] ${x} is on the ground until t=${Mt[x].toFixed(2)}s but has a ${F} at t=${m} — schedule it later`);const L=b[x];if(!L)return;const S=L.t0+te(L);if(m<S){const V=`buildSchedule: player ${x} has an event at t=${m} while still moving from a move started at t=${L.t0} (in flight until t=${S.toFixed(3)})`;if(Lt.has(x))console.warn(`[engine3d] ${V} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(V)}}function zt(x){let m=null,F=-1/0;for(const L of _)L.t<=x&&L.t>=F&&(m=L.player,F=L.t);return m}const Xt=[];function Ae(x,m,F){const L=i.balls??[],S=st=>st.carrier&&r[st.carrier]?Qn(r[st.carrier],z[st.carrier]??0):$g(st,m);let V=-1,q=1/0;const $=r[x];if(L.forEach((st,ht)=>{if(Xt.some(X=>X.take===ht))return;const pt=S(st),wt=Math.hypot(pt[0]-$[0],pt[1]-$[1]);wt<q&&(q=wt,V=ht)}),V<0||q>vd){const st=L.length?V<0?"every spare has already been used":`the nearest is ${q.toFixed(1)} m away (needs ${vd} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${F} by ${x} at t=${m.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${st} — played with the ball already in play`);return}const et=zt(m),nt=et?ws(u,et,m):null,lt=nt?[...nt.carry]:et&&r[et]?Qn(r[et],z[et]??0):Jr(a,n,m).at,mt=S(L[V]);Xt.push({t:m,drop:lt,take:V,at:mt}),_.push({t:m,player:x}),u.push({player:x,at:m,carry:mt}),A[x]=m}const j=Object.fromEntries(i.players.map(x=>[x.id,x.team]));function Le(x,m,F,L,S,V){const q=zt(L);if(!q||q===x||it.has(x)||j[x]==="coach"||j[q]===j[x])return null;const $=st=>{if(!Fi(m,st)||!Fi(m,F))return null;const ht=Pe(m,F),pt=fi(Pe(st,m),ht),wt=Math.hypot(st[0]-m[0],st[1]-m[1])<=zw?Gw(pt,S):null;if(wt&&t.clips[wt.id]){const at=ht-wt.axis,ot=Math.hypot(st[0]-m[0],st[1]-m[1])||1;return{clip:wt.id,ball:[m[0]+ot*Math.sin(at),m[1]+ot*Math.cos(at)]}}const X=Hw(pt,S);return X&&t.clips[X]?{clip:X,ball:st}:null},et=$(r[q]?[...r[q]]:Jr(a,n,L).at),nt=i.events.find(st=>st.type==="pass"&&st.from===q&&st.t>=L-1e-9&&st.t<=L+V/2),lt=(nt==null?void 0:nt.type)==="pass"&&r[nt.to]?[...r[nt.to]]:null,mt=et?et.ball:F;return!lt||!Fi(m,lt)||!Fi(m,mt)||Math.abs(fi(Pe(m,mt),Pe(m,lt)))<=Bw?et:$(lt)}const Kt={};for(const x of i.events)x.type==="move"&&(Kt[Me=x.player]??(Kt[Me]=[])).push(x.t);function Zt(x,m,F){for(const L of J){const S=L.id;if(!Gt.length||zt(x)===S||!t.clips[la.left.id]||!t.clips[la.right.id])continue;const V=b[S],q=Math.max(x,At[S]??0,V?V.t0+te(V):0);if(f.some(St=>St.player===S))continue;const $=Gt.reduce((St,It)=>Math.hypot(It.at[0]-L.start[0],It.at[1]-L.start[1])<Math.hypot(St.at[0]-L.start[0],St.at[1]-L.start[1])?It:St,Gt[0]),et=$.at,nt=$.sideways?1:0,lt=$.sideways?0:1,mt=eT(tt,e,Math.abs(r[S][lt]-et[lt]),$.halfW),ht=et[nt]+Math.min(mt,Math.max(-mt,(F[nt]-et[nt])*tT))-r[S][nt],pt=Pe(et,[i.pitch.width/2,i.pitch.length/2]),wt=$.sideways?-Math.sin(pt):Math.cos(pt),X=iT(ht,la[ht*wt>0?"left":"right"].dist*tt,Math.sign(wt)||1);if(!X)continue;const at=la[X.side],ot=Math.min(m,i.duration)-X.steps*at.duration;if(ot<q-1e-9||(Kt[S]??[]).some(St=>St>=ot-1e-9))continue;const gt=Math.sign(ht)*at.dist*tt;for(let St=0;St<X.steps;St++){const It=[...r[S]],Ht=[...It];Ht[nt]=It[nt]+gt;const ae=Nd(It,Ht,ot+St*at.duration,at.duration);(o[S]??(o[S]=[])).push(ae),r[S]=[...ae.to],b[S]=ae}c.push({player:S,clip:at.id,t0:ot,loopUntil:ot+X.steps*at.duration}),p[S]=[]}}function Wt(x,m){var V;const F=(V=i.players.find(q=>q.id===x))==null?void 0:V.start;if(!F||!Gt.length)return!1;let L=Gt[0].at,S=1/0;for(const q of Gt){const $=Math.hypot(q.at[0]-F[0],q.at[1]-F[1]);$<S&&(S=$,L=q.at)}return Math.hypot(m[0]-L[0],m[1]-L[1])<=TT*tt}function _e(x,m){const F=b[x];if(!F||F.endSpeed)return;const L=F.t0+te(F);if(m-L>=ca)return;F.endSpeed=nr;const S=F.t0+te(F);for(const V of p[x]??[]){const q=c.indexOf(V);q>=0&&c.splice(q,1)}if(p[x]=xt(F,x),S>m-Li){if(Lt.has(x)){console.warn(`[engine3d] player ${x}'s move started at t=${F.t0} still arrives at t=${S.toFixed(3)}, less than ${Li}s before their action at t=${m} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${x}'s move started at t=${F.t0} still arrives at t=${S.toFixed(3)} even flowing into their action at ${nr} m/s, less than ${Li}s before their action at t=${m} — move the event later or start the approach move earlier`)}}function Vt(x,m,F,L,S){const V=b[x],q=V?V.t0+te(V):0;if(V&&(V.endSpeed!==void 0||m-q<ca))return null;const $=_R(r[x],F,S),et=t.groups.walk,nt=et!=null&&et.length?t.clips[et[0]].speed??Cn:Cn,lt={from:[...r[x]],to:$,t0:0,cruise:nt,accel:Rn};let mt=m-L-te(lt);return mt<Math.max(q,A[x]??0)||!ct(x,mt)?null:(lt.t0=mt,(o[x]??(o[x]=[])).push(lt),S&&w.add(lt),b[x]=lt,p[x]=xt(lt,x),r[x]=[...$],mt)}function G(x,m,F){const L=Jr(a,n,m).at,S=Pe(L,F),V=[L[0]-Ne*Math.sin(S),L[1]-Ne*Math.cos(S)],q=Math.hypot(V[0]-r[x][0],V[1]-r[x][1]);if(q<gT){r[x]=[...V];return}const $=b[x],et=$?$.t0+te($):0,nt=Math.max(et,A[x]??0,0);let lt;for(let mt=q<Dd?0:1;mt<da.length;mt++){const st=t.groups[da[mt]]??t.groups.jog,ht=t.clips[Nn(st,x,m)].speed??Cn;if(lt={from:[...r[x]],to:V,t0:0,cruise:ht,accel:Rn,endSpeed:nr},lt.t0=m-Li-te(lt),lt.t0>=nt)break}lt.t0<nt&&(console.warn(`[engine3d] dead-ball run-up for ${x} at t=${m.toFixed(2)}s wants to start at t=${lt.t0.toFixed(2)}s but he is not free until t=${nt.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),lt.t0=nt),ct(x,lt.t0),(o[x]??(o[x]=[])).push(lt),b[x]=lt,p[x]=xt(lt,x),r[x]=[...V]}function I(x,m,F){const L=Jr(a,n,m);{const st=Fd(L.at,Qt,AT*tt);if(Math.hypot(st[0]-L.at[0],st[1]-L.at[1])>1e-6){const ht=a.filter(pt=>pt.t0<=m&&Math.hypot(pt.to[0]-L.at[0],pt.to[1]-L.at[1])<1e-9);if(ht.length){for(const pt of ht)Math.hypot(pt.from[0]-L.at[0],pt.from[1]-L.at[1])<1e-9&&(pt.from=[...st]),pt.to=[...st];L.at=st}}}const S=zt(m);S&&S!==x&&_.push({t:m,player:null});const V=L.moving?L.restT+CT:-1/0;let q=null;for(let st=F+1;st<Et.length;st++){const ht=Ee[st];if(!(!ht||ht.actor!==x)){ht.t-m<=ir+3&&(q=ht.target);break}}let $=Od(r[x],L.at,q);if($.stepTo){const st=Fd($.stepTo,Qt,ET*tt),ht=[st[0]-L.at[0],st[1]-L.at[1]];if(Math.hypot(ht[0],ht[1])>1e-6){const pt=Je(ht),wt=Ne+1,X=Od([L.at[0]+wt*pt[0],L.at[1]+wt*pt[1]],L.at,q);X.stepTo&&Ot(X.stepTo)&&($=X)}}let et=1/0;for(let st=F+1;st<Et.length;st++){const ht=Et[st];if((ht.type==="pass"?ht.from:ht.player)===x){et=ht.t;break}}let nt=m;if($.stepTo){const st=Math.hypot($.stepTo[0]-r[x][0],$.stepTo[1]-r[x][1]);let ht;for(let pt=st<Dd?0:1;pt<da.length;pt++){const wt=t.groups[da[pt]]??t.groups.jog,X=t.clips[Nn(wt,x,m)].speed??Cn;if(ht={from:[...r[x]],to:$.stepTo,t0:m,cruise:X,accel:Rn,endSpeed:nr},m+te(ht)+hi+Li<=et)break}if(V>m+te(ht)){const pt=V-m,wt=Math.hypot($.stepTo[0]-ht.from[0],$.stepTo[1]-ht.from[1]),X=Rn*Rn*pt*pt-4*Rn*wt,at=X>0?(Rn*pt-Math.sqrt(X))/2:ht.cruise,ot=(t.clips[Nn(t.groups.walk,x,m)].speed??Wu)*l0;ht={...ht,cruise:Math.max(Math.min(at,ht.cruise),ot),endSpeed:0}}(o[x]??(o[x]=[])).push(ht),Lt.set(x,m),b[x]=ht,p[x]=xt(ht,x),nt=m+te(ht),r[x]=[...$.stepTo]}nt=Math.max(nt,V),C({player:x,at:[...L.at],t0:Math.max(m,D[x]??0),lock:[nt-Mn,nt+Mn]});const lt=st=>{for(const ht of p[x]??[]){const pt=c.indexOf(ht);ht.t0>=st?pt>=0&&c.splice(pt,1):(ht.loopUntil??0)>st&&(ht.loopUntil=st)}};if(it.has(x)&&Wt(x,L.at)){const st=_n.scoop[0],ht=nt-st.contact;return ht<m&&console.warn(`[engine3d] keeper ${x}'s scoop at t=${nt.toFixed(2)}s wants to start at t=${ht.toFixed(2)}s, before his collect at t=${m.toFixed(2)}s — schedule the collect earlier`),lt(Math.max(ht,0)),c.push({player:x,clip:st.id,t0:Math.max(ht,0),contact:st.contact}),C({player:x,at:[...$.faceAt],t0:nt}),_.push({t:nt,player:x}),u.push({player:x,at:nt,carry:[...L.at],hand:{height:Jn*tt,from:wT*tt,rise:Td,follow:!0}}),A[x]=nt,At[x]=Math.max(ht,0)+st.duration+sr,nt}const mt=Nn(t.groups.pass,x,nt);return lt(nt-(t.clips[mt].ballContact??0)),c.push({player:x,clip:mt,t0:nt-(t.clips[mt].ballContact??0)}),a.push({from:[...L.at],to:$.set,t0:nt,duration:hi,style:"ground"}),C({player:x,at:[...$.faceAt],t0:nt}),_.push({t:nt,player:x}),u.push({player:x,at:nt+hi,carry:$.set}),A[x]=nt+hi,nt+hi}const J=i.players.filter(x=>x.role==="keeper"),tt=e,it=new Set(J.map(x=>x.id));i.players.forEach(x=>z[x.id]=x.role==="keeper"?Pe(x.start,n):0);const rt=((Xe=i.keeper)==null?void 0:Xe.outcome)==="save",At={},Mt={},Lt=new Map,re={},vt={},Et=[...i.events].sort((x,m)=>x.t-m.t);if(i.ball&&!i.ball.static){const x=n,m=i.players.reduce((S,V)=>Math.hypot(V.start[0]-x[0],V.start[1]-x[1])<Math.hypot(S.start[0]-x[0],S.start[1]-x[1])?V:S,i.players[0]),F=Et.find(S=>S.type!=="move"||S.player===(m==null?void 0:m.id)&&it.has(S.player)),L=F?F.type==="pass"?F.from:F.player:null;if(!((F==null?void 0:F.type)==="collect"||((F==null?void 0:F.type)==="pass"||(F==null?void 0:F.type)==="shoot")&&F.deadBall))if(L&&it.has(L))_.push({t:0,player:L}),A[L]=0,(F==null?void 0:F.type)==="pass"&&!!F.fromFeet||u.push({player:L,at:0,carry:[...n],hand:{height:Jn*tt,follow:!0}});else{const S=i.players.filter($=>$.role!=="keeper"),V=S.length?S:i.players,q=V.reduce(($,et)=>Math.hypot(et.start[0]-n[0],et.start[1]-n[1])<Math.hypot(r[$.id][0]-n[0],r[$.id][1]-n[1])?et:$,V[0]).id;_.push({t:0,player:q}),A[q]=0}}const Gt=(i.equipment??[]).filter(x=>x.type==="goal").map(x=>({at:x.at,halfW:Fs(x,lc),sideways:x.facing==="e"||x.facing==="w"})),Qt=RT(i.equipment,e),Ot=x=>x[0]>=0&&x[0]<=i.pitch.width&&x[1]>=0&&x[1]<=i.pitch.length,me=x=>Qt.every(m=>Math.hypot(m[0]-x[0],m[1]-x[1])>=Oa*tt),Jt={};i.players.forEach(x=>Jt[x.id]=[...x.start]);const Ee=Et.map(x=>{if(x.type==="move")return Jt[x.player]=[...x.to],null;if(x.type==="dribble")return Jt[x.player]=[...x.to],{actor:x.player,target:[...x.to],t:x.t};if(x.type==="collect"||x.type==="tackle")return null;const m=x.type==="pass"?x.from:x.player;x.deadBall&&(Jt[m]=[...n]);const F=x.type==="pass"?[...Jt[x.to]]:x.flightStyle==="ground"?[...x.at]:QT(Jt[x.player],x.at,Gt,x.corner,e);return{actor:m,target:F,t:x.t}});for(let x=0;x<Et.length;x++){const m=Et[x];ft(m.t);const F=m.type==="pass"?m.from:m.player;if(m.newBall&&Ae(F,m.t,m.type),m.type!=="dribble"&&m.type!=="move"&&delete P[F],m.type==="move"){Ct(m.player,m.t,m.type);const S=it.has(m.player)&&(((zi=(yn=ws(u,m.player,m.t))==null?void 0:yn.hand)==null?void 0:zi.height)??0)>0;zt(m.t)===m.player&&!S&&console.warn(`[engine3d] move event for ${m.player} at t=${m.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const V=t.groups[m.gait??"jog"]??t.groups.jog,q=t.clips[Nn(V,m.player,m.t)].speed??Cn,$=E[m.player],et=$&&m.t<$.t0?[...$.at]:[...r[m.player]],nt=m.dur?Math.hypot(m.to[0]-et[0],m.to[1]-et[1])/m.dur:0,lt=m.dur?{from:et,to:m.to,t0:m.t,cruise:nt,accel:Rn,startSpeed:nt,endSpeed:nt}:{from:et,to:m.to,t0:m.t,cruise:q,accel:Rn};m.dur&&M.add(lt);const mt=Le(m.player,lt.from,m.to,m.t,q,te(lt)),st=mt?null:(()=>{const pt=uc(s,q);if((pt==null?void 0:pt.gait)!=="run"&&(pt==null?void 0:pt.gait)!=="sprint"||!t.clips[di.turn_to_run_a.id]||it.has(m.player)||O(m.player)>m.t+1e-9||!Fi(lt.from,m.to))return null;const wt=fi(z[m.player]??0,Pe(lt.from,m.to));return Math.abs(wt)>=tp?{delta:wt,gait:pt.gait}:null})();(o[xi=m.player]??(o[xi]=[])).push(lt),b[m.player]=lt,p[m.player]=xt(lt,m.player);const ht={t0:m.t,face:null,r11:!!mt,start:null};if(m.dur||v.set(lt,ht),mt){for(const wt of p[m.player]??[]){const X=c.indexOf(wt);X>=0&&c.splice(X,1)}const pt={player:m.player,clip:mt.clip,t0:m.t,loopUntil:m.t+te(lt)};c.push(pt),p[m.player]=[pt],d.set(lt,[pt]),ht.face={player:m.player,at:mt.ball,t0:m.t,until:m.t+te(lt)},C(ht.face)}else{if(st){const{c:pt,offset:wt,play:X}=Y(st.gait,st.delta),at=z[m.player]??0;k(m.player,pt,m.t,wt,at,at+st.delta,X);const ot=m.t+X;ht.start={...W[m.player],end:ot},p[m.player]=Pt(p[m.player]??[],ot),d.set(lt,p[m.player])}ht.face={player:m.player,at:m.to,t0:m.t},C(ht.face)}r[m.player]=[...m.to]}else if(m.type==="dribble"){Ct(m.player,m.t,m.type),zt(m.t)!==m.player&&console.warn(`[engine3d] dribble event for ${m.player} at t=${m.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const S=m.gait??"jog",V=t.groups[S]??t.groups.jog,q=t.clips[Nn(V,m.player,m.t)].speed??Cn,$=Pe(r[m.player],m.to),et=(((Xn=(Pn=ws(u,m.player,m.t))==null?void 0:Pn.hand)==null?void 0:Xn.height)??0)>0,nt=et?t0(u,m.player,m.t):0,lt=et?m.t+Rd:m.t,mt={from:[...r[m.player]],to:[...m.to],t0:lt,cruise:q,accel:Rn};let st=null;for(let ie=x+1;ie<Et.length;ie++){const oe=Ee[ie];if(!(!oe||oe.actor!==m.player)){st={target:oe.target,t:oe.t};break}}const ht=lt+te(mt);let pt=null;for(let ie=x+1;ie<Et.length;ie++){const oe=Et[ie];if((oe.type==="pass"?oe.from:oe.player)===m.player){pt=oe;break}}let wt=null;if((pt==null?void 0:pt.type)==="dribble"&&pt.t-ht<=ir){const ie=fi($,Pe(m.to,pt.to)),oe=Cw(ie,S),be=oe?di[oe]:null;if(be&&t.clips[be.id]){const bt=be.standing?ht:lt+te({...mt,endSpeed:nr});pt.t-bt>=N(be)-1e-9&&(wt={c:be,delta:ie})}}st&&st.t-ht<ca&&!(wt!=null&&wt.c.standing)&&(mt.endSpeed=nr),wt&&k(m.player,wt.c,pt.t-N(wt.c),0,$,$+wt.delta),(o[Gi=m.player]??(o[Gi]=[])).push(mt),b[m.player]=mt,p[m.player]=xt(mt,m.player),C({player:m.player,at:[...m.to],t0:m.t});let X=null;for(const ie of u)ie.player===m.player&&(!X||ie.at>X.at)&&(X=ie);X&&X.at>m.t+1e-9&&console.warn(`[engine3d] dribble for ${m.player} at t=${m.t.toFixed(2)}s starts during their settle (ends t=${X.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let at=X?[...X.carry]:Qn(r[m.player],$);et&&(at=Qn(r[m.player],$),u.push({player:m.player,at:m.t,carry:[...at],hand:{height:0,from:nt,rise:Rd,follow:!0}}),A[m.player]=m.t);const ot=st&&st.t-ht<=ir?Qn(m.to,Pe(m.to,st.target)):Qn(m.to,$),gt=mi(m.player)%2===0?1:-1;let St=gt,It=!1;for(let ie=x+1;ie<Et.length;ie++){const oe=Et[ie];if((oe.type==="pass"?oe.from:oe.player)===m.player){if(oe.type==="dribble"&&oe.t-ht<=ir){const bt=Je([m.to[0]-mt.from[0],m.to[1]-mt.from[1]]),Yt=Je([oe.to[0]-m.to[0],oe.to[1]-m.to[1]]),Ie=bt[0]*Yt[1]-bt[1]*Yt[0],xe=Ie<0?1:-1;Math.abs(Ie)>.05&&xe===-gt&&(St=xe),It=Math.abs(fi(Pe(mt.from,m.to),Pe(m.to,oe.to)))>au}break}}const Ht=P[m.player],ae=!!Ht&&lt-Ht.end<=ir&&Math.abs(fi(Ht.h,$))>au;P[m.player]={h:$,end:ht};const ne=Object.entries(r).filter(([ie])=>ie!==m.player).map(([,ie])=>[...ie]),Bt=fw(mt,at,ot,jd[S]??jd.jog,St,{turnIn:ae,turnOut:It,others:ne});a.push(...Bt.flights),u.push({player:m.player,at:Bt.restEnd,carry:[...ot]}),A[m.player]=Bt.restEnd,r[m.player]=[...m.to],Zt(Bt.restEnd,((si=T(x))==null?void 0:si.t)??i.duration,[...ot])}else if(m.type==="collect")Ct(m.player,m.t,m.type),I(m.player,m.t,x);else if(m.type==="tackle"){Ct(m.player,m.t,m.type),_e(m.player,m.t);const S=m.from;zt(m.t)!==S&&console.warn(`[engine3d] tackle by ${m.player} at t=${m.t.toFixed(2)}s from ${S}, but ${zt(m.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const V=it.has(m.player)&&!!t.clips[fa.id],q=!V&&m.style!=="slide"&&!!t.clips[ha.id],$=m.t+(V?fa:q?ha:ul[0]).contact;let et=null,nt=-1/0;for(const X of u)X.player===S&&X.at<=$&&X.at>nt&&(nt=X.at,et=[...X.carry]);if(et||(et=Qn(r[S],Pe(r[S],r[m.player]))),q){const X=vT*tt,at=Je([r[m.player][0]-r[S][0],r[m.player][1]-r[S][1]]);if(Math.hypot(r[m.player][0]-r[S][0],r[m.player][1]-r[S][1])<X){const ot=[r[S][0]+X*at[0],r[S][1]+X*at[1]],gt=b[m.player];if(gt&&Math.hypot(gt.to[0]-r[m.player][0],gt.to[1]-r[m.player][1])<1e-6){const St=(t.clips[Nn(t.groups.sprint??t.groups.run??t.groups.jog,m.player,m.t)].speed??gt.cruise)*Er,It=Math.min(te(gt),Math.max($-gt.t0,.2));gt.to=ot;for(let ae=0;ae<8&&te(gt)>It+1e-6&&gt.cruise<St;ae++)gt.cruise=Math.min(St,gt.cruise*te(gt)/It);for(const ae of p[m.player]??[]){const ne=c.indexOf(ae);ne>=0&&c.splice(ne,1)}p[m.player]=xt(gt,m.player);const Ht=$<gt.t0+te(gt);Ht&&(gt.overrun=!0),r[m.player]=Ht?Bn(gt,$).pos:ot}else r[m.player]=ot}}const lt=q?Math.hypot(r[S][0]-r[m.player][0],r[S][1]-r[m.player][1]):Math.hypot(et[0]-r[m.player][0],et[1]-r[m.player][1]),mt=V?fa.reach:q?ha.reach+Ne:MT;lt>mt*tt&&console.warn(`[engine3d] tackle by ${m.player} at t=${m.t.toFixed(2)}s: the ball is ${lt.toFixed(2)} m away (reach ${(mt*tt).toFixed(2)}) — move the tackler closer first`),q&&lt<Oa*tt-1e-6&&console.warn(`[engine3d] tackle by ${m.player} at t=${m.t.toFixed(2)}s: he is ${lt.toFixed(2)} m from ${S}, inside a body width (${(Oa*tt).toFixed(2)} m at this body scale) — the two of them draw as one`);const st=V?fa:q?ha:ul[Math.abs(mi(m.player)+Math.floor(m.t*10))%ul.length],ht=m.t+st.contact,pt={player:m.player,clip:st.id,t0:m.t,contact:st.contact};if(c.push(pt),C({player:m.player,at:et,t0:Math.max(m.t-$r,0,D[m.player]??0),lock:[m.t,m.t+st.duration]}),V){const X=pr(t,pt),at=Qn(r[m.player],Pe(r[m.player],et));_.push({t:ht,player:m.player});const ot=ml(r[m.player],r[S],et);u.push({player:m.player,at:ht,carry:[...et],hand:{height:ua*tt,follow:!0,bone:ot}}),u.push({player:m.player,at:X,carry:at,hand:{height:Jn*tt,from:ua*tt,rise:cl,follow:!0,bone:ot}}),A[m.player]=ht,At[m.player]=m.t+st.duration+sr}let wt;if(!V){const X=Je([r[S][0]-r[m.player][0],r[S][1]-r[m.player][1]]),at=[-X[1],X[0]],ot=(et[0]-r[S][0])*at[0]+(et[1]-r[S][1])*at[1]>=0?1:-1,gt=St=>[r[S][0]+ot*St*tt*at[0]+Ld*tt*X[0],r[S][1]+ot*St*tt*at[1]+Ld*tt*X[1]];if(wt=gt(Pd),q){let St=Ud(r[S],et,wt);for(let It=Pd+.05;It<=1&&!(St>=xT*tt);It+=.05){const Ht=gt(It),ae=Ud(r[S],et,Ht);ae>St&&(St=ae,wt=Ht)}}a.push({from:et,to:wt,t0:ht,duration:hl,style:"ground",pop:!0}),_.push({t:ht,player:null})}if(q){let X=1/0;for(let It=x+1;It<Et.length;It++){const Ht=Et[It];if((Ht.type==="pass"?Ht.from:Ht.player)===S){X=Ht.t;break}}const at=[...wt],ot=Math.max(ht,D[S]??0),gt=B(S,ot,at,X-Li),St=Math.min(X,Math.max(ht+hl,gt===null?0:U[S]));(gt??ot)<St&&C({player:S,at,t0:gt??ot,until:St})}else if(t.clips[Id]){let X=1/0;for(let It=x+1;It<Et.length;It++){const Ht=Et[It];if((Ht.type==="pass"?Ht.from:Ht.player)===S){X=Ht.t;break}}const at=Je([r[S][0]-et[0],r[S][1]-et[1]]),ot=bT*tt,gt=ht+yT,St=Nd([...r[S]],[r[S][0]+ot*at[0],r[S][1]+ot*at[1]],gt,Yr);if(gt+Yr+Li<=X){(o[S]??(o[S]=[])).push(St),b[S]=St,c.push({player:S,clip:Id,t0:gt,loopUntil:gt+Yr}),p[S]=[];const It=Math.max(gt,D[S]??0);It<gt+Yr&&C({player:S,at:[...et],t0:It,until:gt+Yr}),r[S]=[...St.to]}}V||I(m.player,Math.max(pr(t,pt),ht+hl),x)}else{const S=m.type==="pass"?m.from:m.player,V=re[S],q=!!V&&m.t>=V.at-pa&&m.t-V.at<=fl;V&&!q&&console.warn(`[engine3d] header for ${S} at t=${m.t} does not meet the cross at their forehead (t=${V.at.toFixed(2)}s) — played as an ordinary ${m.type}`),delete re[S];const $=vt[S],et=!!$&&!!m.firstTime&&!q;m.firstTime&&!$&&!q&&console.warn(`[engine3d] firstTime ${m.type} for ${S} at t=${m.t} has no ball arriving at their boot — played as an ordinary strike`),delete vt[S],q&&m.t-V.at>Bd&&console.warn(`[engine3d] header for ${S} at t=${m.t} pulled to the ball's arrival (t=${V.at.toFixed(2)}s) — the ball cannot wait in the air`),Ct(S,m.t,m.type),q||_e(S,m.t);const nt=m.type==="pass"?r[m.to]:Ee[x].target,lt=m.type==="shoot"&&m.flightStyle!=="ground",mt=lt?KT:z1,st=lt?$T:$r;m.deadBall&&!q&&G(S,m.t,nt);const ht=it.has(S)&&zt(m.t)===S&&(((Hi=(vi=ws(u,S,m.t))==null?void 0:vi.hand)==null?void 0:Hi.height)??0)>0,pt=!ht&&(m.style==="throw"||m.style==="roll")?m.style:null;it.has(S)&&(At[S]??0)>m.t&&console.warn(`[engine3d] keeper ${S} is busy until t=${At[S].toFixed(2)}s (save / catch clip still playing) but has a ${m.type} at t=${m.t} — schedule it later`);const wt=bt=>{if(!q)return null;const Yt=Math.hypot(bt[0]-Bt[0],bt[1]-Bt[1]);return Yt>=HT?{style:"headed",loft:pl(Yt,tt)}:null};let X=m.t;if(m.type==="shoot"&&!m.touch){const bt=b[S],Yt=bt?bt.t0+te(bt):-1/0;bt&&(bt.endSpeed??0)>0&&m.t-Yt>Gd&&m.t-Yt<ca&&(X=Yt-Gd)}let at="",ot,gt,St=0,It=null,Ht=null;if(q)ot=V.at,St=V.height;else if(et)at=Nn(t.groups[lt?"shoot":"pass"],S,X),gt=t.clips[at].ballContact??0,X=$.at-gt,ot=$.at,X<0&&console.warn(`[engine3d] first-time ${m.type} for ${S} wants its cue at t=${X.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((ht||pt)&&(m.type==="pass"||m.flightStyle==="ground")){It=m.style??IT(Math.hypot(nt[0]-r[S][0],nt[1]-r[S][1]));const bt=pt?Q1[pt]:_n[It];at=bt.id,gt=bt.contact,ot=m.t+bt.contact,St=It==="roll"?0:bt.release*tt,At[S]=m.t+bt.duration+sr}else{const bt=b[S],Yt=m.type==="shoot"&&bt&&(bt.endSpeed??0)>0&&X<=bt.t0+te(bt)+1e-9?Bn(bt,X).speed:0;Ht=Vt(S,X,nt,mt,m.type==="pass"||m.type==="shoot"&&!!m.touch),Yt>YT&&t.clips[ka.id]&&!(m.type==="shoot"&&m.touch)?(at=ka.id,gt=ka.contact):at=Nn(t.groups[lt?"shoot":"pass"],S,m.t),ot=X+(gt??t.clips[at].ballContact??0)}let ae=null;q||(ae={player:S,clip:at,t0:X,...gt!==void 0?{contact:gt}:{}},c.push(ae),Rt({player:S,at:[...nt],t0:Math.max(X-st,0,D[S]??0),lock:[X,ot+Mn],until:ot+Mn,headUntil:ot-Ww},Math.min(X,Ht??1/0)));const ne=Pe(r[S],nt),Bt=q?[...V.from]:et?[...$.from]:Qn(r[S],ne),ie=pt?pT:dT,oe=m.type==="pass"&&it.has(m.to)&&!m.toFeet?m.flight:0,be=m.type!=="pass"?0:It==="throw"?Math.max(.4,oe,Math.hypot(nt[0]-Bt[0],nt[1]-Bt[1])/ie):m.style==="roll"?Math.max(m.flight,Math.hypot(nt[0]-Bt[0],nt[1]-Bt[1])/mT):m.flight;if(!q&&!et){const bt=Math.max(X-N1,A[S]??0);bt>ot&&console.warn(`[engine3d] departure window for ${S} is inverted (starts t=${bt.toFixed(2)}s, ball contact t=${ot.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:S,windowStart:bt,contact:ot,heading:ne,...It?{toHeight:St}:{}})}if(m.type==="pass"&&it.has(m.to)&&!m.toFeet){const bt=ot+be,Yt=ut(m.to,x,bt);Yt.blocked&&console.warn(`[engine3d] ball to the keeper ${m.to} at t=${m.t}: their authored ${Yt.blocked} runs during the flight, so where they stand at t=${bt.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const Ie=Yt.atArrival,xe=Je([Bt[0]-Ie[0],Bt[1]-Ie[1]]),ze=[Ie[0]+Ne*xe[0],Ie[1]+Ne*xe[1]],We=(m.flightStyle==="clipped"||m.flightStyle==="lofted")&&m.style!=="roll",ge=((ri=m.deflect)==null?void 0:ri.style)==="lofted",jt=We?(m.loft??0)>Z1||ge?_n.catchHigh:_n.catch:_n.scoop[Math.abs(mi(m.to)+Math.floor(bt*10))%_n.scoop.length],le=We?Math.min(Jn*(jt===_n.catchHigh?2:1),_T)*tt:0,Se=bt-jt.contact;Se<0&&console.warn(`[engine3d] receive cue for ${m.to} wants t0=${Se.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Se<Yt.busyUntil&&console.warn(`[engine3d] catch cue for ${m.to} at t=${bt.toFixed(2)}s wants t0=${Se.toFixed(2)}s but their move is still running (until t=${Yt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Se<ot&&console.warn(`[engine3d] catch cue for ${m.to} at t=${bt.toFixed(2)}s wants t0=${Se.toFixed(2)}s, before the ball leaves ${S} at t=${ot.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:m.to,clip:jt.id,t0:Se,contact:jt.contact});const ue=m.flightStyle==="lofted"?pl(Math.hypot(ze[0]-Bt[0],ze[1]-Bt[1]),tt)-(St+le)/2:It==="throw"?Math.max(pt?ll:1.5,m.loft??0):m.loft;if(a.push({from:Bt,to:ze,t0:ot,duration:be,style:It==="kick"?"clipped":We||It==="throw"?"lofted":"ground",...ue!==void 0?{loft:ue}:{},...le?{toHeight:le}:{},...St?{fromHeight:St}:{}}),C({player:m.to,at:[...r[S]],t0:m.t,lock:[bt-Mn,bt+Mn]}),m.deflect)a.push(Cd(ze,le,m.deflect,bt,tt)),A[m.to]=bt;else{_.push({t:bt,player:m.to});const Te=ml(r[m.to],r[S],ze);u.push({player:m.to,at:bt,carry:ze,hand:We?{height:Jn*tt,from:le,rise:cl,follow:!0,bone:Te}:{height:Jn*tt,from:0,rise:Td,follow:!0,bone:Te}}),A[m.to]=bt}At[m.to]=Se+jt.duration+sr}else if(m.type==="pass"&&!m.toFeet&&m.flightStyle==="lofted"&&(m.loft??kT)>=VT){const bt=ot+be;let Yt=null,Ie=1/0,xe=!1,ze=!1,We;for(let Te=x+1;Te<Et.length;Te++){const Fe=Ee[Te],ke=Et[Te];if((ke.type==="move"||ke.type==="collect")&&ke.player===m.to&&We===void 0&&ke.t>=bt-pa&&(We=ke.t),!(!Fe||Fe.actor!==m.to)){Yt=Fe.target,Ie=Fe.t,ze=ke.type==="pass"||ke.type==="shoot",xe=ze&&!!ke.header;break}}We!==void 0&&ze&&Ie-bt<=fl&&console.warn(`[engine3d] ${m.to} has a move at t=${We.toFixed(2)}s between the cross landing on their forehead (t=${bt.toFixed(2)}s) and their strike at t=${Ie} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ge=ze&&We===void 0&&Ie>=bt-pa&&(Ie-bt<=Bd||xe&&Ie-bt<=fl),jt=ut(m.to,x,bt);jt.blocked&&!ge&&console.warn(`[engine3d] cross to ${m.to} at t=${m.t}: their authored ${jt.blocked} runs during the flight, so where they stand at t=${bt.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const le=WT(jt.atArrival,Bt,Yt,tt),Se=bt-le.clip.contact;Se<0&&console.warn(`[engine3d] header cue for ${m.to} wants t0=${Se.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Se<jt.busyUntil&&console.warn(`[engine3d] header cue for ${m.to} wants t0=${Se.toFixed(2)}s but their move is still running (until t=${jt.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:m.to,clip:le.clip.id,t0:Se,contact:le.clip.contact});const ue=Math.hypot(le.contact[0]-Bt[0],le.contact[1]-Bt[1]);a.push({from:Bt,to:le.contact,t0:ot,duration:be,style:"lofted",loft:pl(ue,tt)-(St+le.height)/2,toHeight:le.height,...St?{fromHeight:St}:{}}),ge?(re[m.to]={at:bt,from:le.contact,height:le.height},C({player:m.to,at:[...Yt],t0:Math.max(Se-$r,0,D[m.to]??0),lock:[Se,bt+Mn],until:bt+Mn})):(ze&&Ie<bt-pa?console.warn(`[engine3d] ${m.to}'s own strike at t=${Ie} is ${(bt-Ie).toFixed(2)}s BEFORE the cross reaches their forehead (t=${bt.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):xe&&console.warn(`[engine3d] header for ${m.to} at t=${Ie} is ${(Ie-bt).toFixed(2)}s after the ball arrives (t=${bt.toFixed(2)}s) — ignored, cushioned instead`),C({player:m.to,at:[...r[S]],t0:m.t,lock:[bt-Mn,bt+Mn]}),a.push({from:le.contact,to:le.set,t0:bt,duration:dl,style:"drop",fromHeight:le.height}),C({player:m.to,at:[...le.faceAt],t0:bt}),_.push({t:bt,player:m.to}),A[m.to]=bt+dl,u.push({player:m.to,at:bt+dl,carry:le.set}))}else if(m.type==="pass"){const bt=ot+be,Yt=Nn(t.groups.receive,m.to,bt),Ie=t.clips[Yt];let xe=null,ze=1/0,We=!1;for(let ge=x+1;ge<Et.length;ge++){const jt=Et[ge];(jt.type==="pass"?jt.from:jt.player)===m.to&&ze===1/0&&(ze=jt.t);const Se=Ee[ge];if(!(!Se||Se.actor!==m.to)){Se.t-bt<=ir&&(xe=Se.target,We=(jt.type==="pass"||jt.type==="shoot")&&!!jt.firstTime);break}}if(We&&xe){const ge=ut(m.to,x,bt),jt=Qn(ge.atArrival,Pe(ge.atArrival,xe)),le=m.flightStyle==="lofted"?"lofted":m.flightStyle==="clipped"?"clipped":"ground";a.push({from:Bt,to:jt,t0:ot,duration:be,style:le,...le==="ground"?{endFrac:md}:{},...m.loft!==void 0?{loft:m.loft}:{},...St?{fromHeight:St}:{}}),C({player:m.to,at:[...r[S]],t0:m.t,lock:[bt-Mn,bt+Mn]}),vt[m.to]={at:bt,from:jt},Zt(bt,((Vi=T(x))==null?void 0:Vi.t)??i.duration,jt)}else{const ge=ew(nt,Bt,xe);let jt=m.t;{const Fe=ut(m.to,x,bt),ke=Fe.expected,Us=Math.max(m.t,Fe.busyUntil),Eo=Math.max(Fe.afterT,m.t),Ze=Fe.blocked;jt=Us;const Ln=Math.hypot(ge.contact[0]-ke[0],ge.contact[1]-ke[1]);if(Ln>U1)if(Ze)console.warn(`[engine3d] receive for ${m.to}: the ball lands ${Ln.toFixed(2)}m away at t=${bt.toFixed(2)}s, but their authored ${Ze} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const oi=Je([ge.contact[0]-ke[0],ge.contact[1]-ke[1]]),yi=[ge.contact[0]-Ne*oi[0],ge.contact[1]-Ne*oi[1]],Mi=t.groups.walk,Wi=Mi!=null&&Mi.length?t.clips[Mi[0]].speed??Cn:Cn,ji={from:ke,to:yi,t0:0,cruise:Wi,accel:Rn},ls=bt-Md-te(ji);ls<Us-1e-9?console.warn(`[engine3d] receive adjustment for ${m.to}: the ${(Ln-Ne).toFixed(2)}m walk to the contact point would need to start at t=${ls.toFixed(2)}s but they're busy until t=${Us.toFixed(2)}s — skipped (the standing stretch stays)`):(ji.t0=ls,jt=bt-Md,Q.push({player:m.to,afterT:Eo,move:ji,faceBall:[...Bt],faceSettle:[...ge.faceAt],arrival:bt}))}}const le=Ie.ballContact??0,Se=Math.min(le,Math.max(k1,Math.min(O1,B1*be,bt-(jt+Ya)))),ue=bt-Se;ue<0&&console.warn(`[engine3d] receive cue for ${m.to} wants t0=${ue.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:m.to,clip:Yt,t0:ue,...le>Se?{offset:le-Se}:{}});const Te=wt(ge.contact)?"headed":It==="throw"||m.flightStyle==="lofted"?"lofted":It==="kick"||m.flightStyle==="clipped"?"clipped":"ground";a.push({from:Bt,to:ge.contact,t0:ot,duration:be,style:Te,...Te==="ground"?{endFrac:md}:{},...It==="throw"?{loft:Math.max(pt?ll:1.5,m.loft??0)}:It==="kick"?{loft:Math.max(3,m.loft??0)}:m.loft!==void 0?{loft:m.loft}:{},...St?{fromHeight:St}:{},...wt(ge.contact)??{}}),a.push({from:ge.contact,to:ge.set,t0:bt,duration:hi,style:"ground"}),C({player:m.to,at:[...r[S]],t0:m.t,lock:[bt-Mn,bt+Mn]}),Rt({player:m.to,at:[...ge.faceAt],t0:bt},ze),_.push({t:bt,player:m.to}),A[m.to]=bt+hi,u.push({player:m.to,at:bt+hi,carry:ge.set}),Zt(bt+hi,((rs=T(x))==null?void 0:rs.t)??i.duration,ge.set)}}else if(m.flightStyle==="ground"){const bt=Math.hypot(nt[0]-Bt[0],nt[1]-Bt[1]),Yt=m.flight??(m.touch?Math.sqrt(2*bt/ao):It==="throw"?Math.max(.4,bt/ie):bt/qT);if(a.push({from:Bt,to:[...nt],t0:ot,duration:Yt,style:m.touch?"push":It==="throw"?"lofted":It==="kick"?"clipped":"ground",...m.touch?{endFrac:0}:{},...It==="throw"?{loft:pt?ll:1.5}:It==="kick"?{loft:3}:{},...St?{fromHeight:St}:{},...wt(nt)??{}}),m.deflect){const Ie=Math.hypot(m.deflect.to[0]-nt[0],m.deflect.to[1]-nt[1]);a.push({from:[...nt],to:[...m.deflect.to],t0:ot+Yt,style:"ground",duration:fT(bt,Yt,Ie)})}}else{const bt=Math.hypot(nt[0]-Bt[0],nt[1]-Bt[1]),Yt=m.flight??bt/XT,Ie=Je([nt[0]-Bt[0],nt[1]-Bt[1]]),xe=[nt[0]+zd*Ie[0],nt[1]+zd*Ie[1]],ze=ot+Yt,We=a.length;a.push({from:Bt,to:xe,t0:ot,duration:Yt,style:"shot",...St?{fromHeight:St}:{}}),a.push({from:xe,to:xe,t0:ze,duration:jT,style:"drop"}),Zt(((Ns=R(x))==null?void 0:Ns.t)??0,X,Bt);let ge=!1;for(const jt of J){const le=Si=>{const Xi=ut(jt.id,x,Si);if(Xi.afterT>-1/0)return Xi.atArrival;const qn=b[jt.id];return qn&&Si<qn.t0+te(qn)?Bn(qn,Si).pos:[...r[jt.id]]},Se=ot+Sd(Math.max(Yt,wd)),ue=Ad(ot,Yt,_n.dive.left.contact).t0,Te=m.type==="shoot"?m.deflect:void 0,Fe=rt||!!Te,ke=le(Fe?Se:ue),Us=[nt[0]-ke[0],nt[1]-ke[1]],Eo=Pe(ke,Bt),Ze=Fe?PT(ke,Eo,Bt,xe,tt):null;if(Te&&!Ze&&console.warn(`[engine3d] deflect on the shot at t=${m.t} is dropped: ${jt.id} is ${e0(ke,Bt,xe).reach.toFixed(2)} m off the ball line at body scale ${tt} (his reach is ${(Qg*tt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!Ze){if(Math.hypot(Us[0],Us[1])>Zg*tt)continue;const Si=a0(ke,Eo,xe),Xi=V1[Si],qn=t.clips[Xi],{t0:Ai,timeScale:Os}=Ad(ot,Yt,_n.dive[Si].contact);if(C({player:jt.id,at:[...Bt],t0:Math.max(X-$r,0,D[jt.id]??0),...qn?{lock:[X,Ai+qn.duration/Os]}:{}}),qn){c.push({player:jt.id,clip:Xi,t0:Ai,...Os>1?{timeScale:Os}:{}});const ai=le(Ai),Dr=LT(ai,Bt,xe,tt),To=[Dr[0]-ai[0],Dr[1]-ai[1]],wo=Math.hypot(To[0],To[1]),ih=Math.min(wo,$1*tt),sh=wo>1e-9?[ai[0]+To[0]/wo*ih,ai[1]+To[1]/wo*ih]:[...ai],e_=Math.min(J1,Math.max(Y1,ze-Ai));f.push({player:jt.id,from:ai,to:sh,t0:Ai,duration:e_}),E[jt.id]={t0:Ai,at:[...r[jt.id]]},r[jt.id]=[...sh]}continue}if(ge)continue;ge=!0;const Ln=a[We];a.splice(We+1,1);let oi,yi=Ze.contact,Mi=Jn*tt;if(Ze.kind==="dive"){Ln.duration=Math.max(Ln.duration,wd),oi=ot+Sd(Ln.duration);const Si=ot+Ln.duration,Xi={player:jt.id,from:[...ke],to:Ze.travelTo,t0:oi,duration:Ze.contactOffset};f.push(Xi);const qn=Ka(Xi,Si),Ai=Math.min(1,(Si-oi)/Ze.contactOffset),Os=_n.dive[Ze.side],ai=Ai*Os.reach*tt,Dr=Je([Ze.contact[0]-ke[0],Ze.contact[1]-ke[1]]);yi=[qn[0]+ai*Dr[0],qn[1]+ai*Dr[1]],Mi=(Jn+(Os.hand-Jn)*Ai)*tt,E[jt.id]={t0:oi,at:[...r[jt.id]]},r[jt.id]=[...Ze.travelTo]}else oi=Math.max(X,ot+Ln.duration-Ze.contactOffset);const Wi=ot+Ln.duration;Ln.to=yi,Ln.toHeight=Mi,c.push({player:jt.id,clip:Ze.clip,t0:oi,contact:Ze.contactOffset});const ji=oi+Ze.clipDuration;if(C({player:jt.id,at:[...Bt],t0:Math.max(X-$r,0,D[jt.id]??0),lock:[X,ji]}),Te){a.push(Cd(yi,Mi,Te,Wi,tt)),A[jt.id]=Wi,At[jt.id]=ji+sr;continue}_.push({t:Wi,player:jt.id});const ls=ml(r[jt.id],Bt,yi);Ze.kind==="catch"?u.push({player:jt.id,at:Wi,carry:yi,hand:{height:Jn*tt,follow:!0,bone:ls}}):(u.push({player:jt.id,at:Wi,carry:yi,hand:{height:ua*tt,from:Mi,rise:sT,follow:!0,bone:ls}}),u.push({player:jt.id,at:ji,carry:yi,hand:{height:Jn*tt,from:ua*tt,rise:cl,follow:!0,bone:ls}})),A[jt.id]=Wi,At[jt.id]=ji+sr}}if(m.type==="pass"&&!It&&ae){const bt=t.groups.walk,Yt=bt!=null&&bt.length?t.clips[bt[0]].speed??Cn:Cn,Ie=[r[S][0]+yo*Math.sin(ne),r[S][1]+yo*Math.cos(ne)],xe=b[S],ze=xe?xe.t0+te(xe):-1/0;let We=1/0;for(let Te=x+1;Te<Et.length;Te++){const Fe=Et[Te];if((Fe.type==="pass"?Fe.from:Fe.player)===S){We=Fe.t;break}}const ge={from:[...r[S]],to:Ie,t0:pr(t,ae),cruise:Yt,accel:Rn},jt=ge.t0+te(ge)+Li<=We;let le=null,Se=null;if(xe&&w.has(xe)&&ot>=ze&&ot-ze<=hR&&$u(o[S],ot)<x0){const Te=pR(),Fe={...xe,to:[...xe.to],cruise:Math.max(xe.cruise,Te),endSpeed:Te};Fe.t0=ot-te(Fe),Fe.t0>=xe.t0-1e-9&&Wn(Fe).peak>=Te-1e-9&&(le=Fe,Se=jt?{from:[...r[S]],to:Ie,t0:ot,cruise:Te,accel:Za,startSpeed:Te}:bR(r[S],ne,Te,We-ot,ot,ke=>Ot(ke)&&me(ke)))}if(le&&xe){for(const Te of p[S]??[]){const Fe=c.indexOf(Te);Fe>=0&&c.splice(Fe,1)}Object.assign(xe,le),p[S]=xt(xe,S)}const ue=Se??(jt?ge:null);ue&&((o[S]??(o[S]=[])).push(ue),b[S]=ue,p[S]=xt(ue,S),r[S]=[...ue.to])}_.push({t:ot,player:null})}const L=Lt.get(F);L!==void 0&&L<m.t&&Lt.delete(F)}ft(1/0);const K=x=>Math.hypot(x.to[0]-x.from[0],x.to[1]-x.from[1]);function Dt(x,m,F,L,S=L){const V=(q,$=L)=>q>F-1e-9&&q<$-1e-9;return(o[x]??[]).some(q=>!m.has(q)&&V(q.t0))||c.some(q=>q.player===x&&!m.has(q)&&V(q.t0))||g.some(q=>q.player===x&&!m.has(q)&&V(q.t0))||l.some(q=>q.player===x&&!m.has(q)&&(V(q.t0,S)||!!q.lock&&q.lock[1]>F&&q.lock[0]<L))||_.some(q=>q.player===x&&V(q.t))||u.some(q=>q.player===x&&V(q.at))||h.some(q=>q.player===x&&q.contact>F-1e-9&&q.windowStart<L-1e-9)}function dt(x){var L;let m=null;for(const S of a)x>=S.t0&&x<S.t0+S.duration&&(!m||S.t0>=m.t0)&&(m=S);if(m)return ss(m,x).pos;const F=zt(x);return F?((L=zn(o[F]??[],x,!1))==null?void 0:L.pos)??[...i.players.find(S=>S.id===F).start]:Jr(a,n,x).at}const _t=new Map;for(const[x,m]of Object.entries(o))for(const F of m){if(K(F)<=1e-6||M.has(F))continue;const L=Math.round(F.t0*100),S=_t.get(L);S?S.push({player:x,m:F}):_t.set(L,[{player:x,m:F}])}for(const x of[..._t.keys()].sort((m,F)=>m-F)){const m=_t.get(x);if(new Set(m.map(S=>S.player)).size<xR)continue;const F=dt(x/100),L=m.filter(({player:S,m:V})=>v.has(V)&&!it.has(S)&&!V.endSpeed&&!V.startSpeed&&zt(V.t0)!==S).map(S=>({...S,d:Math.hypot(S.m.from[0]-F[0],S.m.from[1]-F[1])})).sort((S,V)=>S.d-V.d||(S.player<V.player?-1:S.player>V.player?1:0));L.forEach(({player:S,m:V},q)=>{var st,ht;const $=v.get(V),et=new Set([V,...d.get(V)??[],$.face,(st=$.start)==null?void 0:st.span,(ht=$.start)==null?void 0:ht.cue]),nt=V.t0+te(V),lt=pt=>!Dt(S,et,V.t0,nt+pt);let mt=ba+(L.length>1?(cu-ba)*q/(L.length-1):0);if(!lt(mt)){if(!lt(ba))return;let pt=ba;for(let wt=0;wt<20;wt++){const X=(pt+mt)/2;lt(X)?pt=X:mt=X}mt=pt}V.t0+=mt;for(const pt of d.get(V)??[])pt.t0+=mt,pt.loopUntil!==void 0&&(pt.loopUntil+=mt);$.face&&($.face.t0+=mt,$.face.until!==void 0&&($.face.until+=mt)),$.start&&($.start.span.t0+=mt,$.start.span.end+=mt,$.start.end+=mt,$.start.cue.t0+=mt,$.start.cue.loopUntil!==void 0&&($.start.cue.loopUntil+=mt))})}const Ut=new Map,Ft=x=>Ut.get(x)??x,ee=[],De=new Map;for(const[x,m]of Object.entries(o))if(!it.has(x))for(let F=0;F+1<m.length;F++){const L=m[F],S=m[F+1],V=v.get(L),q=v.get(S);if(!V||!q||V.r11||q.r11)continue;const $=Ft(L),et=Ft(S);if(($.endSpeed??0)>0||(S.startSpeed??0)>0)continue;const nt=K(L),lt=K(S);if(nt<hp||lt<hp||Math.hypot(S.from[0]-L.to[0],S.from[1]-L.to[1])>1e-6)continue;const mt=S.t0-(L.t0+te($)),st=Math.abs(fi(Pe(L.from,L.to),Pe(S.from,S.to)));if(mt<-1e-9||mt>vR||st>yR)continue;const ht=L.startSpeed??0,pt=S.endSpeed??0,wt=Math.min($.cruise,et.cruise),X=Math.min(Math.max(SR(st)*wt,lp),wt);if(X<lp-1e-9||2*L.accel*nt<X*X-ht*ht||2*S.accel*lt<X*X-pt*pt)continue;const at={...L,endSpeed:X},ot=S.t0-(L.t0+te(at)),gt=ht>0?0:L.t0-V.t0>1e-9?up-cu:up,St=Math.max(0,Math.min(ot,gt)),It=AR(at,ot-St);if(It===null||Wn(at).t3+It>MR*te($)+1e-9)continue;const Ht={...at,t0:L.t0+St,...It>0?{hold:It}:{}};if(Math.abs(Ht.t0+te(Ht)-S.t0)>1e-7)continue;const ae=Math.min(2*Wg/Math.sin(Math.max(st,1e-9)/2),ja*nt,ja*lt);if(X*Math.tan(st/2)/ae>Hu(X*Math.cos(st/2)))continue;const ne=S.t0+ol({...S,startSpeed:X},ae),Bt=new Set([L,S,...d.get(L)??[],...d.get(S)??[],V.face,q.face,(os=V.start)==null?void 0:os.span,(as=V.start)==null?void 0:as.cue,(cs=q.start)==null?void 0:cs.span,(Tt=q.start)==null?void 0:Tt.cue]);zt(L.t0)===x||Dt(x,Bt,L.t0,S.t0+te(et),ne)||(Ut.has(L)||Ut.set(L,{...L}),Ut.has(S)||Ut.set(S,{...S}),St>0&&(V.face&&(V.face.t0+=St,V.face.until!==void 0&&(V.face.until+=St)),V.start&&(V.start.span.t0+=St,V.start.span.end+=St,V.start.end+=St,V.start.cue.t0+=St,V.start.cue.loopUntil!==void 0&&(V.start.cue.loopUntil+=St))),Object.assign(L,Ht),S.startSpeed=X,S.flow=!0,ee.push({player:x,A:L,B:S}),De.set(L,x),De.set(S,x))}for(const[x,m]of Object.entries(o))for(let F=0;F<m.length;F++){if(!De.has(m[F])||m[F].flow)continue;let L=F;for(;L+1<m.length&&m[L+1].flow&&Gu(m[L],m[L+1]);)L++;const S=m.slice(F,L+1);for(const $ of S){for(const nt of d.get($)??[]){const lt=c.indexOf(nt);lt>=0&&c.splice(lt,1)}const et=v.get($);if(et.start&&$.flow){const nt=g.indexOf(et.start.span);nt>=0&&g.splice(nt,1);const lt=c.indexOf(et.start.cue);lt>=0&&c.splice(lt,1),et.start=null}}const V=v.get(S[0]);let q=Z(S,x,V.t0);V.start&&g.includes(V.start.span)&&(q=Pt(q,V.start.end)),c.push(...q);for(const $ of S)d.set($,q)}for(const{player:x,A:m,B:F}of ee){const L=Xa(m,F),S=v.get(F).face,V=S?l.indexOf(S):-1;if(!L||!S||V<0)continue;const q=K(m),$=Pe(m.from,m.to),et=fi($,Pe(F.from,F.to))<0?-1:1,nt=st=>st<=.5?m.t0+ol(m,q-L.L+2*L.L*st):F.t0+ol(F,2*L.L*(st-.5)),lt=Math.max(1,Math.ceil(L.turn/ER-1e-9)),mt=[];for(let st=0;st<=lt;st++){const ht=st===0?0:u1(L.turn,(st-.5)/lt*L.turn),pt=$+et*st*L.turn/lt,wt=jg(L,ht).pos;mt.push({player:x,at:[wt[0]+fp*Math.sin(pt),wt[1]+fp*Math.cos(pt)],t0:nt(ht)})}l.splice(V,0,...mt),S.t0=nt(1)}_.sort((x,m)=>x.t-m.t),c.sort((x,m)=>x.t0-m.t0),eR(c,o,t);const Ke=uR(c,o,t);return{moves:o,flights:a,anims:c,faces:l,departures:h,arrivals:u,dives:f,turns:g,bounces:Ke,ballSwaps:Xt,attachTo(x){let m=null;for(const F of _)F.t<=x&&(m=F.player);return m}}}const wR=.98,RR=.94;function S0(i,t,e){const n=Math.max(t,wR*e),s=Math.max(t,RR*e);if(i<=s)return i;const r=n-s;return r<1e-9?n:s+r*(1-Math.exp(-(i-s)/r))}const dp=new WeakMap,pp=(i,t)=>!!i&&i.isBone===!0&&t.test(i.name);function CR(i){let t=dp.get(i);if(t===void 0){const e=i.parent,n=e==null?void 0:e.parent,s=()=>new Oe;t=pp(e,/^shin/)&&pp(n,/^thigh/)?{thigh:n,shin:e,foot:i,base:[s(),s(),s()],left:[s(),s(),s()],wrote:!1}:null,dp.set(i,t)}return t}function IR(i){i.wrote&&(i.thigh.quaternion.equals(i.left[0])&&i.thigh.quaternion.copy(i.base[0]),i.shin.quaternion.equals(i.left[1])&&i.shin.quaternion.copy(i.base[1]),i.foot.quaternion.equals(i.left[2])&&i.foot.quaternion.copy(i.base[2]),i.wrote=!1)}const rr=new H,or=new H,ar=new H,bs=new H,Qr=new H,xs=new H,cr=new H,_l=new H,lr=new Oe,xa=new Oe,mp=new Oe,bl=new Oe,to=new Oe,PR=new Oe,va=i=>Math.acos(i<-1?-1:i>1?1:i);function LR(i,t,e,n){const{thigh:s,shin:r,foot:o}=i;s.matrixWorld.decompose(rr,lr,_l),r.matrixWorld.decompose(or,xa,_l),o.matrixWorld.decompose(ar,mp,_l),xs.subVectors(or,rr);const a=xs.length(),c=or.distanceTo(ar),l=a+c;bs.subVectors(ar,rr);const h=bs.length();if(!(a>1e-9&&c>1e-9&&h>1e-9))return 0;bs.divideScalar(h),Qr.set(t-rr.x,e-rr.y,n-rr.z);const u=Qr.length();u>1e-9?Qr.divideScalar(u):Qr.copy(bs);const f=Math.min(l,Math.max(S0(u,h,l),Math.abs(a-c)+1e-4*l)),g=va(xs.dot(bs)/a),_=va(-(xs.x*(ar.x-or.x)+xs.y*(ar.y-or.y)+xs.z*(ar.z-or.z))/(a*c)),b=va((a*a+f*f-c*c)/(2*a*f)),p=va((a*a+c*c-f*f)/(2*a*c));return cr.crossVectors(bs,xs),cr.lengthSq()<1e-12*a*a&&cr.set(-1,0,0).applyQuaternion(lr),cr.normalize(),bl.setFromUnitVectors(bs,Qr),i.base[0].copy(s.quaternion),i.base[1].copy(r.quaternion),i.base[2].copy(o.quaternion),to.setFromAxisAngle(cr,b-g).premultiply(bl),s.quaternion.multiply(PR.copy(lr).invert().multiply(to).multiply(lr)),lr.premultiply(to),to.setFromAxisAngle(cr,b+p-g-_).premultiply(bl),xa.premultiply(to),r.quaternion.copy(lr).invert().multiply(xa),o.quaternion.copy(xa).invert().multiply(mp),i.left[0].copy(s.quaternion),i.left[1].copy(r.quaternion),i.left[2].copy(o.quaternion),i.wrote=!0,Math.abs(u-f)}const DR=.2,Yu=.5,lu=.06,Ju=.11,Zu=.25,FR=35*Math.PI/180,NR=.006,eo=.2,UR=.04,OR=.08,kR=1,BR=.25,zR=.2,GR=2;function HR(i,t=1){return i.speed<DR*t&&i.h<Ju*t}function VR(i,t,e=1){return i.speed>Yu*e||i.h>t+lu*e}function gp(i,t,e){if(e>=1)return 0;const n=e*e*e;return i*(1-n*(10-15*e+6*e*e))+t*(e-n*(6-8*e+3*e*e))}function WR(i){if(i<=0||i>=1)return 0;const t=4*i*(1-i);return t*t}function jR(i,t){const e=i??[];for(let n=0;n<e.length;n++){const s=e[n];if(n+1<e.length&&Gu(s,e[n+1]))continue;const r=s.t0+te(s);if(t>r-BR&&t<=r)return!0}return!1}const XR=new Set(["turn","transition","receive","pass","idle"]);function qR(i,t,e){return e||i===null?!0:XR.has(t??"")}const _p=()=>({held:!1,ox:0,oy:0,oz:0,ax:0,az:0,h0:0,yaw0:0,sx:0,sz:0,svx:0,svz:0,t0:-1/0,arc:0,air:!1,lx:0,lz:0,seen:!1,speed:1/0,h:0,dx:0,dz:0,over:0,far:0,must:!1}),KR=i=>i-2*Math.PI*Math.round(i/(2*Math.PI));function $R(i,t,e){if(!(i.len>0))return 0;const n=Math.hypot(i.x+t-i.hx,i.y-i.hy,i.z+e-i.hz);return n-S0(n,Math.hypot(i.x-i.hx,i.y-i.hy,i.z-i.hz),i.len)}function YR(){const i=new Map;function t(a,c){a.dx=a.ax-c.x,a.dz=a.az-c.z,a.ox=a.dx,a.oy=0,a.oz=a.dz}function e(a,c,l,h,u){a.sx=a.dx,a.sz=a.dz;let f=(a.sx-a.ox)/l,g=(a.sz-a.oz)/l;const _=Math.hypot(f,g),b=GR*h;_>b&&(f*=b/_,g*=b/_),a.svx=f*eo,a.svz=g*eo,a.held=!1,a.t0=c;const p=Math.hypot(a.sx,a.sz)+.5*eo*Math.min(_,b);a.arc=u*Math.min(1,p/(OR*h)),a.air=a.arc>0}function n(a,c,l,h,u,f,g,_,b,p){let d=i.get(a);d||i.set(a,d={feet:[],rx:0,rz:0,rootV:0,prevT:-1/0});const v=d.feet;for(;v.length<c.length;)v.push(_p());if(_<=0&&g===d.prevT){for(let P=0;P<c.length;P++)v[P].held&&t(v[P],c[P]);return v}const M=_<=0||g<d.prevT||g-d.prevT>.5,y=d.rootV=M?0:Math.hypot(l-d.rx,u-d.rz)/_;d.rx=l,d.rz=u,d.prevT=g;const T=b&&y<zR,R=Math.cos(f),w=Math.sin(f);let D=-1,A=-1,E=!1;for(let P=0;P<c.length;P++){const C=v[P],z=c[P],U=z.x-l,W=z.z-u,O=U*R-W*w,B=U*w+W*R;if(C.speed=!M&&C.seen?Math.hypot(O-C.lx,B-C.lz)/_:1/0,C.lx=O,C.lz=B,C.seen=!0,C.h=z.y-h,M){Object.assign(C,_p(),{lx:O,lz:B,seen:!0});continue}if(!C.held){g-C.t0<eo/2&&(E=!0);continue}C.dx=C.ax-z.x,C.dz=C.az-z.z;const N=Math.hypot(C.dx,C.dz),Y=VR(C,C.h0,p)&&(N>C.far||C.h>C.h0+lu*p),k=Y||N>Zu*p||Math.abs(KR(f-C.yaw0))>FR||$R(z,C.dx,C.dz)>NR*p;C.far=N,C.over=k?C.over+1:0,C.over>=2&&N>A&&(A=N,D=P),C.must=C.over>=2&&(C.h>C.h0+lu*p||Y&&C.speed>kR*p)}if(M)return v;E&&(D=-1);for(let P=0;P<c.length;P++){const C=v[P],z=c[P];if(C.held&&(T?P===D||C.must?e(C,g,_,p,UR*p):t(C,z):e(C,g,_,p,0)),C.held)continue;const U=(g-C.t0)/eo,W=C.air&&U>=1;U>=1?(C.ox=0,C.oy=0,C.oz=0,C.air=!1):(C.ox=gp(C.sx,C.svx,U),C.oz=gp(C.sz,C.svz,U),C.oy=Math.max(0,C.arc*WR(U)-Math.max(0,C.h-C.h0)));const O=W?C.h<Ju*p&&C.speed<=Yu*p:HR(C,p);T&&!C.air&&O&&(C.held=!0,C.h0=C.h,C.yaw0=f,C.over=0,C.far=Math.hypot(C.ox,C.oz),C.ax=z.x+C.ox,C.az=z.z+C.oz,C.oy=0)}return v}const s=[],r=[];function o(a,c,l,h,u,f,g){for(let p=0;p<l.length;p++){const d=CR(l[p]);if(!d)return;IR(d),r[p]=d}c.updateMatrixWorld(!0);for(let p=0;p<l.length;p++){const d=s[p]??(s[p]={x:0,y:0,z:0,hx:0,hy:0,hz:0,len:0}),v=r[p].foot.matrixWorld.elements,M=r[p].shin.matrixWorld.elements,y=r[p].thigh.matrixWorld.elements;d.x=v[12],d.y=v[13],d.z=v[14],d.hx=y[12],d.hy=y[13],d.hz=y[14],d.len=Math.hypot(M[12]-y[12],M[13]-y[13],M[14]-y[14])+Math.hypot(v[12]-M[12],v[13]-M[13],v[14]-M[14])}s.length=l.length;const _=c.matrixWorld.elements,b=n(a,s,_[12],_[13],_[14],c.rotation.y,h,u,f,g);for(let p=0;p<l.length;p++){const d=b[p];(d.ox!==0||d.oy!==0||d.oz!==0)&&LR(r[p],s[p].x+d.ox,s[p].y+d.oy,s[p].z+d.oz)}}return{step:n,pose:o,held:a=>{var c;return(((c=i.get(a))==null?void 0:c.feet)??[]).reduce((l,h,u)=>l|(h.held?1<<u:0),0)},offset:a=>{var c;return(((c=i.get(a))==null?void 0:c.feet)??[]).reduce((l,h)=>Math.max(l,Math.hypot(h.ox,h.oz)),0)},rootSpeed:a=>{var c;return((c=i.get(a))==null?void 0:c.rootV)??0},reset:()=>i.clear()}}const Qa=2*Math.LN2,bp=1e-5,xp=.5*Math.PI/180,vp=5,yp=.25,JR=24,ZR=34,QR=.3,Mp=.6,Sp=.1,Ap=1.5*(Qa/Math.E)*(Zu/Yu);function Ep(i,t,e){const n=i>1e-6?(-t+Math.sqrt(t*t+e*i))/i:t>1e-6?e/(2*t):1/0;return Qa/n}function xl(i,t,e,n,s,r=0){n<0&&(i=-i,t=-t,e=-e,n=-n);const o=Math.sqrt(i*i+t*t+e*e),a=o<1e-8?2:2*Math.atan2(o,n)/o;s[r]=a*i,s[r+1]=a*t,s[r+2]=a*e}function Tp(i,t,e,n){const s=.5*Math.sqrt(i*i+t*t+e*e);if(s<1e-8)return n.set(.5*i,.5*t,.5*e,1).normalize();const r=Math.sin(s)/(2*s);return n.set(r*i,r*t,r*e,Math.cos(s))}const Ye=new Oe,ur=new Oe,Sn=new Oe,vl=new Oe,ya=new H,Zn=new Float64Array(3),ci=new Float64Array(3),hr=new Float64Array(3),no=new Float64Array(3),Ma=new Float64Array(3);function tC(i,t=!0){const e=new Map;function n(b,p){let d=e.get(b);if(d&&d.root===p)return d;const v=[];p.traverse(E=>{E.isBone&&v.push(E)});const M=v.length,y=v.find(E=>{var P;return!((P=E.parent)!=null&&P.isBone)})??null;let T=null;for(let E=y==null?void 0:y.parent;E&&E!==p;E=E.parent)T=T?T.premultiply(E.quaternion):E.quaternion.clone();let R=-1,w=1;for(const E of(y==null?void 0:y.children)??[]){let P=0,C=!1;E.traverse(z=>{z.isBone&&P++,/^foot[LR]$/.test(z.name)&&(C=!0)}),!C&&P>w&&(w=P,R=v.indexOf(E))}const D=new Uint8Array(M),A=R>=0?[R]:[];for(const E of R>=0?y.children:[]){let P=0;E.traverse(C=>{const z=/^foot([LR])$/.exec(C.name);z&&(P=z[1]==="L"?1:2)}),P&&(E.traverse(C=>{const z=v.indexOf(C);z>=0&&(D[z]=P)}),A.push(v.indexOf(E)))}return d={root:p,bones:v,n:M,hips:y,frame:T,hi:y?v.indexOf(y):-1,chest:R,grp:D,under:A,mix:new Float64Array(M*4+3),mixed:!1,a:new Float64Array(M*4+3),b:new Float64Array(M*4+3),ta:0,tb:0,have:0,d0:new Float64Array(M*4+3),marked:!1,seam:!1,idx:new Int16Array(M),m:0,rx:new Float64Array(M*3+3),rv:new Float64Array(M*3+3),t0:0,hl:0,hlLegs:0,grip:0,life:0,live:!1},e.set(b,d),d}function s(b,p){for(let d=0;d<b.n;d++){const v=b.bones[d].quaternion,M=d*4;p[M]=v.x,p[M+1]=v.y,p[M+2]=v.z,p[M+3]=v.w}if(b.hips){const d=b.hips.position,v=b.n*4;p[v]=d.x,p[v+1]=d.y,p[v+2]=d.z}}function r(b,p){return vl.set(0,Math.sin(p/2),0,Math.cos(p/2)),b.frame?vl.premultiply(ur.copy(b.frame).invert()).multiply(b.frame):vl}function o(b,p){if(!p||!b.hips)return;const d=r(b,p);b.hips.quaternion.premultiply(d),b.hips.position.applyQuaternion(d)}function a(b,p){hr[0]=Qa/(b.hl+bp),no[0]=p;for(let d=1;d<3;d++){const v=b.grip>>d-1&1;hr[d]=Qa/((v?Ap:b.hlLegs)+bp),no[d]=v?Math.max(0,p-Sp):p}for(let d=0;d<3;d++)Ma[d]=Math.exp(-hr[d]*no[d])}function c(b){const p=e.get(b);if(!p||!p.mixed)return;const d=p.mix;for(let v=0;v<p.n;v++){const M=v*4,y=p.bones[v].quaternion;(y.x!==d[M]||y.y!==d[M+1]||y.z!==d[M+2]||y.w!==d[M+3])&&y.set(d[M],d[M+1],d[M+2],d[M+3])}if(p.hips){const v=p.n*4;p.hips.position.set(d[v],d[v+1],d[v+2])}}function l(b,p,d,v){const M=n(b,p);if(s(M,M.d0),M.marked=!0,M.seam=!1,!M.hips)return;const y=M.d0,T=M.hi*4,R=M.n*4;Ye.set(y[T],y[T+1],y[T+2],y[T+3]),d&&(Ye.premultiply(r(M,-d)),y[T]=Ye.x,y[T+1]=Ye.y,y[T+2]=Ye.z,y[T+3]=Ye.w),v&&(ya.set(y[R],y[R+1],y[R+2]).applyQuaternion(r(M,-v)),y[R]=ya.x,y[R+1]=ya.y,y[R+2]=ya.z);for(const w of M.under){const D=w*4;Sn.copy(Ye).multiply(ur.set(y[D],y[D+1],y[D+2],y[D+3])),y[D]=Sn.x,y[D+1]=Sn.y,y[D+2]=Sn.z,y[D+3]=Sn.w}}function h(b,p){const d=n(b,p);d.marked=!0,d.seam=!0}function u(b,p,d,v,M){b.grip=M;const y=p-b.ta,T=b.ta-b.tb,R=T>1e-6&&T<yp?Math.min(2,y/T):0,w=b.a,D=b.b,A=b.d0;let E=0,P=0;b.m=0;for(let B=0;B<b.n;B++){const N=B*4,Y=b.bones[B].quaternion;Ye.set(w[N],w[N+1],w[N+2],w[N+3]),R>0&&(Sn.set(-D[N],-D[N+1],-D[N+2],D[N+3]).premultiply(Ye),xl(Sn.x,Sn.y,Sn.z,Sn.w,Zn,0),Ye.premultiply(Tp(Zn[0]*R,Zn[1]*R,Zn[2]*R,ur))),Ye.multiply(ur.set(-Y.x,-Y.y,-Y.z,Y.w)),xl(Ye.x,Ye.y,Ye.z,Ye.w,Zn,0);const k=b.grp[B];b.seam||k>0&&M>>k-1&1?ci[0]=ci[1]=ci[2]=0:(Sn.set(w[N],w[N+1],w[N+2],w[N+3]).multiply(ur.set(-A[N],-A[N+1],-A[N+2],A[N+3])),Ye.multiply(Sn.invert()),xl(Ye.x,Ye.y,Ye.z,Ye.w,ci,0));const ct=Math.hypot(Zn[0],Zn[1],Zn[2]),yt=Math.hypot(ci[0],ci[1],ci[2])/y;if(B===b.chest&&(E=ct,P=yt),ct<xp&&yt<xp/y)continue;const Rt=b.m++*3;b.idx[b.m-1]=B,b.rx[Rt]=Zn[0],b.rx[Rt+1]=Zn[1],b.rx[Rt+2]=Zn[2],b.rv[Rt]=ci[0]/y,b.rv[Rt+1]=ci[1]/y,b.rv[Rt+2]=ci[2]/y}const C=b.n*3,z=b.n*4;if(b.hips){const B=b.hips.position;for(let N=0;N<3;N++){const Y=N===0?B.x:N===1?B.y:B.z,k=w[z+N]+(w[z+N]-D[z+N])*R;b.rx[C+N]=k-Y,b.rv[C+N]=b.seam?0:(k-w[z+N]-(Y-A[z+N]))/y}}const U=Math.hypot(b.rx[C],b.rx[C+1],b.rx[C+2]),W=Math.hypot(b.rv[C],b.rv[C+1],b.rv[C+2]),O=i!==void 0?d:Math.min(QR,Math.max(d,Ep(U,W,JR),b.chest>=0?Ep(U+Mp*E,W+Mp*P,ZR):0));b.t0=p,b.hl=O,b.hlLegs=Math.min(O,v),b.live=!0,b.life=M?vp*Math.max(O,Ap)+Sp:vp*O}function f(b,p,d,v,M,y,T=y,R=0){const w=n(b,p);s(w,w.mix),w.mixed=!0,o(w,-v),v!==M&&w.hips&&w.hips.position.applyQuaternion(r(w,v-M));for(const A of w.under)w.bones[A].quaternion.premultiply(w.hips.quaternion);if(y>0){const A=i??y;t&&A>0&&w.have>=2&&w.marked&&d>w.ta&&d-w.ta<yp?u(w,d,A,i??T,i===void 0?R:0):w.live=!1}if(w.marked=w.seam=!1,w.live){const A=d-w.t0;if(A<0||A>w.life)w.live=!1;else{a(w,A);const E=hr[0],P=Ma[0],C=w.rx,z=w.rv;for(let U=0;U<w.m;U++){const W=U*3,O=w.idx[U],B=w.grp[O],N=hr[B],Y=Ma[B],k=no[B];w.bones[O].quaternion.premultiply(Tp(Y*(C[W]+(z[W]+C[W]*N)*k),Y*(C[W+1]+(z[W+1]+C[W+1]*N)*k),Y*(C[W+2]+(z[W+2]+C[W+2]*N)*k),ur))}if(w.hips){const U=w.n*3,W=w.hips.position;W.set(W.x+P*(C[U]+(z[U]+C[U]*E)*A),W.y+P*(C[U+1]+(z[U+1]+C[U+1]*E)*A),W.z+P*(C[U+2]+(z[U+2]+C[U+2]*E)*A))}}}const D=w.b;if(w.b=w.a,w.tb=w.ta,w.a=D,w.ta=d,s(w,w.a),w.have<2&&w.have++,w.under.length){Sn.copy(w.hips.quaternion).invert();for(const A of w.under)w.bones[A].quaternion.premultiply(Sn)}o(w,M)}function g(b,p){const d=e.get(b);if(!d||!d.live)return 0;const v=p-d.t0;if(v<0||v>d.life)return 0;a(d,v);let M=0;for(let y=0;y<d.m;y++){const T=d.grp[d.idx[y]],R=hr[T],w=Ma[T],D=no[T];let A=0;for(let E=0;E<3;E++){const P=d.rx[y*3+E],C=d.rv[y*3+E],z=w*(P+(C+P*R)*D);A+=z*z}M=Math.max(M,Math.sqrt(A))}return M}const _=(b,p)=>{const d=e.get(b);return!!d&&d.live&&p-d.t0>=0&&p-d.t0<=d.life};return{restore:c,mark:l,markSeam:h,settle:f,peak:g,alive:_,gripped:(b,p)=>_(b,p)?e.get(b).grip:0,reset:()=>{for(const b of e.values())b.have=0,b.live=!1,b.marked=b.seam=!1}}}const yl="idle_b",eC=.5,nC=15,iC=6,sC=1.5,rC=2,oC=2,Ml=.5,hc=Math.PI/180,wp=2.5,Rp=5,uu=.34,Sl=2*uu+.24,Cp=60*hc,aC=90*hc,cC=1.5,lC=85*hc;function Sa(i,t,e){let n=(mi(i)^Math.imul(t+1,2654435761)^e)>>>0;return n=Math.imul(n^n>>>16,73244475)>>>0,n=Math.imul(n^n>>>16,73244475)>>>0,((n^n>>>16)>>>0)/4294967296}function Ip(i,t,e){var n;return((n=zn(t??[],e))==null?void 0:n.pos)??i}function uC(i,t,e,n){var g,_,b;const s=new Map(i.map(p=>[p.id,p.start])),r=[...t.flights].sort((p,d)=>p.t0-d.t0);function o(p){let d=n;for(const M of r){if(p>=M.t0&&p<=M.t0+M.duration){const y=(p-M.t0)/M.duration;return[M.from[0]+(M.to[0]-M.from[0])*y,M.from[1]+(M.to[1]-M.from[1])*y]}M.t0+M.duration<p&&(d=M.to)}const v=t.attachTo(p);return v&&s.has(v)?Ip(s.get(v),t.moves[v],p):d}const a=new Map(i.map(p=>[p.id,[]]));for(const p of t.anims)(g=a.get(p.player))==null||g.push(p.t0);for(const[p,d]of Object.entries(t.moves))for(const v of d)(_=a.get(p))==null||_.push(v.t0);for(const p of t.arrivals)(b=a.get(p.player))==null||b.push(p.at);for(const p of a.values())p.sort((d,v)=>d-v);const c=(p,d)=>{for(const v of a.get(p)??[])if(v>=d)return v;return 1/0},l=Math.ceil(e/Ml)+2,h=new Map(i.map(p=>[p.id,new Uint8Array(l)]));for(let p=0;p<l;p++){const d=p*Ml,v=o(d),M=i.map(y=>Ip(y.start,t.moves[y.id],d));i.forEach((y,T)=>{const R=c(y.id,d)-d,w=Math.hypot(M[T][0]-v[0],M[T][1]-v[1])<=nC;let D=0;for(let E=0;E<M.length;E++)E!==T&&Math.hypot(M[T][0]-M[E][0],M[T][1]-M[E][1])<=sC&&D++;const A=D>=rC&&R>oC;h.get(y.id)[p]=!A&&(w||R<=iC)?1:0})}const u=new Map;for(const p of i){const d=[];let v=Sa(p.id,0,23721)*Rp;for(let M=1;v<e&&M<512;M++)d.push(v),v+=wp+Sa(p.id,M,27313)*(Rp-wp);u.set(p.id,d)}const f=new Map;for(const p of t.arrivals)(f.get(p.player)??f.set(p.player,[]).get(p.player)).push(p.at);return{ready(p,d){const v=h.get(p);if(!v)return!1;const M=Math.max(0,Math.min(l-1,Math.floor(d/Ml)));return v[M]===1||M+1<l&&v[M+1]===1},scan(p,d,v){if(!v)return{yaw:0,env:0};for(const y of f.get(p)??[])if(y>=d&&y-d<=cC+Sl)return{yaw:0,env:0};const M=u.get(p)??[];for(let y=0;y<M.length;y++){const T=d-M[y];if(T<0)break;if(T>Sl)continue;const R=Math.max(0,Math.min(1,T/uu,(Sl-T)/uu)),w=R*R*(3-2*R),D=Cp+Sa(p,y,15383)*(aC-Cp);return{yaw:(Sa(p,y,4563)<.5?1:-1)*D*w,env:w}}return{yaw:0,env:0}}}}const hC=10,fC=400*hc,Al=60,dC=1/60;function pC(i,t,e){if(!(e>0))return i.yaw;for(let n=Math.ceil(e/dC-1e-9),s=e/n;n>0;n--){const r=t-i.yaw,o=Math.min(fC,Math.sqrt(2*Al*Math.abs(r))),a=Math.max(-o,Math.min(o,hC*r));i.vel+=Math.max(-Al*s,Math.min(Al*s,a-i.vel)),i.yaw+=i.vel*s}return i.yaw}const mC=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Pp=new Map,Lp=30;function gC(i,t=0){const e=`${i.uuid}@${t}`;let n=Pp.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>mC.test(Ce.parseTrackName(s.name).nodeName??"")),hb.makeClipAdditive(n,t*Lp,n,Lp),Pp.set(e,n)),n}function _C(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/h0),n=Math.min(1,(t-i)/f0);return tR*Math.max(0,Math.min(e,n))}class bC extends Tr{constructor(t,e,n,s,r,o){super(t,e,n,s),this.loop=r,this.unit=o}interpolate_(t,e,n,s){const r=this.parameterPositions,o=this.sampleValues,a=this.resultBuffer,c=r.length,l=this.valueSize;let h=t-2,u=t+1,f=0,g=0;h<0?this.loop?(h=c-2,f=e-(r[c-1]-r[c-2])):(h=0,f=e):f=r[h],u>=c?this.loop?(u=1,g=s+(r[1]-r[0])):(u=c-1,g=s):g=r[u];const _=(t-1)*l,b=t*l,p=h*l,d=u*l,v=s-e,M=(n-e)/v,y=M*M,T=y*M,R=2*T-3*y+1,w=T-2*y+M,D=-2*T+3*y,A=T-y,E=s>f?w*v/(s-f):0,P=g>e?A*v/(g-e):0;let C=1,z=1,U=1;if(this.unit){let O=0,B=0,N=0;for(let Y=0;Y<4;Y++)O+=o[_+Y]*o[b+Y],B+=o[_+Y]*o[p+Y],N+=o[b+Y]*o[d+Y];O<0&&(C=-1),B<0&&(z=-1),N*C<0&&(U=-1)}let W=0;for(let O=0;O<l;O++){const B=o[_+O],N=C*o[b+O],Y=R*B+D*N+E*(N-z*o[p+O])+P*(U*o[d+O]-B);a[O]=Y,W+=Y*Y}if(this.unit&&W>0){W=1/Math.sqrt(W);for(let O=0;O<l;O++)a[O]*=W}return a}}const hu=new WeakMap,A0=.03,xC=.08;function vC(i,t){if(hu.has(i))return i;let e=0;if(t)for(const s of i.tracks){const r=s.values,o=r.length-4;if(!(s instanceof is)||o<=0)continue;const a=Math.hypot(r[0],r[1],r[2],r[3]),c=Math.hypot(r[o],r[o+1],r[o+2],r[o+3]),l=Math.abs(r[0]*r[o]+r[1]*r[o+1]+r[2]*r[o+2]+r[3]*r[o+3])/(a*c);e=Math.max(e,2*Math.acos(Math.min(1,l)))}hu.set(i,e);const n=t&&e<=A0;for(const s of i.tracks){if(s.times.length<3||s.getInterpolation()!==2301)continue;const r=s instanceof is;s.createInterpolant=function(o){return new bC(this.times,this.values,this.getValueSize(),o,n,r)}}return i}const io=32,Dp=new WeakMap,Fp=new WeakMap,ln=new H,El=new Oe,On=i=>i-Math.floor(i);function Qu(i){let t=Fp.get(i);return t||(t=[],i.traverse(e=>{e.isBone&&/^foot[LR]$/.test(e.name)&&t.push(e)}),t.sort((e,n)=>e.name.localeCompare(n.name)),Fp.set(i,t)),t}function E0(i,t){let e=Dp.get(i);if(e)return e;e={at:0,swing:0,amp:0,level:[.25,.75]},Dp.set(i,e);const n=Qu(t);if(n.length!==2||!(i.duration>0))return e;const s=new Map,r=new Map;for(const _ of i.tracks){const b=Ce.parseTrackName(_.name);b.propertyName==="position"?s.set(b.nodeName??"",_.createInterpolant()):b.propertyName==="quaternion"&&r.set(b.nodeName??"",_.createInterpolant())}const o=(_,b)=>{var d,v,M;const p=(d=s.get(_.name))==null?void 0:d.evaluate(b);p?ln.set(p[0],p[1],p[2]):ln.copy(_.position);for(let y=_.parent;y&&y!==t;y=y.parent){const T=(v=r.get(y.name))==null?void 0:v.evaluate(b);T?El.set(T[0],T[1],T[2],T[3]):El.copy(y.quaternion),ln.applyQuaternion(El);const R=(M=s.get(y.name))==null?void 0:M.evaluate(b);R?(ln.x+=R[0],ln.y+=R[1],ln.z+=R[2]):ln.add(y.position)}return ln.z};let a=0,c=0;const l=[[],[]];for(let _=0;_<io;_++){const b=_/io*i.duration;l[0][_]=o(n[0],b),l[1][_]=o(n[1],b);const p=l[0][_]-l[1][_],d=2*Math.PI*_/io;a+=p*Math.cos(d),c-=p*Math.sin(d)}e.amp=2*Math.hypot(a,c)/io,e.swing=On(-Math.atan2(c,a)/(2*Math.PI));const h=io,u=[.25,.75];for(let _=0;_<2;_++){let b=1/0;for(let p=0;p<h;p++){const d=l[_][p],v=l[_][(p+1)%h];d>0&&v<=0&&d-v<b&&(b=d-v,u[_]=(p+d/(d-v))/h)}}const f=u[0]-.25,g=u[1]-.75;e.at=On(f+.5*(On(g-f+.5)-.5));for(let _=0;_<2;_++){let b=1;for(let p=0;p<h;p++){const d=l[0][p]-l[1][p],v=l[0][(p+1)%h]-l[1][(p+1)%h];if(_===0?d>0&&v<=0:d<0&&v>=0){const M=(p+d/(d-v))/h,y=Math.abs(On(M-u[_]+.5)-.5);y<b&&(b=y,e.level[_]=M)}}}return e}function yC(i,t){const e=i.map(n=>E0(n,t));return e.map((n,s)=>s<2?n.at:On(e[1].at+n.swing-e[1].swing))}function MC(i){const t=Qu(i);if(t.length!==2)return 0;let e=0;for(let n=0;n<2;n++){ln.copy(t[n].position);for(let s=t[n].parent;s&&s!==i;s=s.parent)ln.applyQuaternion(s.quaternion).add(s.position);e+=n===0?ln.z:-ln.z}return e}const SC=.4,fu=new Float64Array(4),Tl=new Float64Array(4);function T0(i,t){const e=Qu(i);let n=0;for(let s=0;s<e.length&&s<2;s++){ln.copy(e[s].position);for(let r=e[s].parent;r&&r!==i;r=r.parent)ln.applyQuaternion(r.quaternion).add(r.position);t[2*s]=ln.x,t[2*s+1]=ln.z,ln.y<Ju&&(n|=1<<s)}return n}const AC=1.5*Zu;function EC(i,t){T0(i,Tl);for(let e=0;e<2;e++)Math.hypot(Tl[2*e]-fu[2*e],Tl[2*e+1]-fu[2*e+1])>AC&&(t&=~(1<<e));return t}function TC(i,t){if(!(t>0))return .25;const e=Math.acos(Math.min(1,Math.abs(i)/t))/(2*Math.PI);return i>=0?e:.5+e}const Np=.15,Aa=.05,wC=15,RC=.25,CC=.04,IC=.05,PC=.25,LC=.05,DC=.06,Up=i=>i-Math.round(i),Op=new WeakMap,FC="~stride",NC=.1,kp=[];function UC(i,t,e,n=[],s,r,o){const a=U=>pr(i,U),c=(U,W)=>b0(t,i,U,W);function l(U,W){let O=0;for(const B of t){if(B.player!==U)continue;const N=a(B);N<=W&&N>O&&(O=N)}return O}function h(U,W){const O=e.get(U);return O!=="keeper"&&i.clips[yl]&&(r!=null&&r(U,W))?yl:op(Hd(i,O),U,Jw(U,W-l(U,W)))}function u(U,W,O){const B=i.clips[W].duration;return(($w(U,B)+O*ga(U))%B+B)%B}function f(U,W){let O=null;for(const B of t){if(B.player!==U)continue;const N=Math.max(B.t0,0);if(W<N)continue;const Y=i.clips[B.clip];B.additive?W<N+Y.duration-(B.offset??0)&&(O=B):O&&Y.category!=="locomotion"&&W<a(B)&&(O=null)}return O}const g=ju(i),_=new Set;for(const U of g)for(const W of i.groups[U.gait]??[])_.add(W);const b=new Map,p=(U,W)=>vC(U.clips.get(W),i.clips[W].loop);function d(U,W){var B;let O=b.get(U);if(!O){const N=W.mixer.getRoot(),Y=gw(i,U).filter(ut=>W.clips.has(ut.clip)),k=Y.map(ut=>p(W,ut.clip)),ct=k.map(ut=>E0(ut,N)),yt=yC(k,N),Rt=ct.map((ut,Z)=>.5*(On(ut.level[0]-yt[Z]-.25+.5)-.5+(On(ut.level[1]-yt[Z]-.75+.5)-.5))),Q=((B=ct[0])==null?void 0:B.level)??[.25,.75],ft=yt[0]??0;b.set(U,O={rungs:Y,clip:k,at:yt,amp:ct.map(ut=>ut.amp),lev:Rt,mid:[On(Q[0]-ft),On(Q[1]-ft)]})}return O}function v(U,W,O){const B=p(U,O);let N=Op.get(B);N||Op.set(B,N=new Map);let Y=N.get(W);Y||N.set(W,Y=B.clone());const k=U.mixer.clipAction(Y);return k.reset(),k.loop=2201,k.play(),k}const M=U=>{U.weight=0,U.stop(),U.enabled=!1},y={add:null,band:null,legs:null,striding:!1};function T(U,W,O){const B=c(U,W),N=f(U,W),Y=B&&!B.additive?B:null,k=N&&!Y?uc(g,O):null,ct=Y??(k?N:null);return y.add=N,y.band=k,y.legs=ct,y.striding=!!k||!!ct&&ct.timeScale===void 0&&_.has(ct.clip),y}const R=tC(s==null?void 0:s.halflife,!(s!=null&&s.off));let w=0;const D=new Map,A={lo:0,w:0,cadence:0},E={lo:0,w:0,cadence:0};function P(U,W,O){if(W.aim=!1,W.exit=O,W.carry=-1/0,!!o)for(let B=O+Aa;B<O+wC;B+=Aa){const N=T(U,B,o(U,B));if(N.add&&(W.carry=B),N.striding)continue;let Y=B-Aa,k=B;for(let ct=0;ct<4;ct++){const yt=.5*(Y+k);T(U,yt,o(U,yt)).striding?Y=yt:k=yt}W.exit=k,W.aim=!T(U,k,o(U,k)).legs&&o(U,k+PC)<LC;return}}function C(U,W,O,B,N,Y){let k=O.u,ct=O.du,yt=O.goal,Rt=Y*N;const Q=2*Math.LN2/Jd;for(let ft=B;ft<O.exit-1e-6;){const ut=Math.min(Aa,O.exit-ft);ft+=ut;const Z=o(U,ft);yt=Math.max(Z,yt-Zd*ut);const xt=k-yt,Pt=ct+xt*Q,Ct=Math.exp(-Q*ut);k=yt+Ct*(xt+Pt*ut),ct=Ct*(ct-Pt*Q*ut);const zt=Qd(W.rungs,k,Z,E).cadence;Rt+=.5*(Y+zt)*ut,Y=zt}return Rt}function z(U,W,O,B,N,Y=0){let k=D.get(U);k||D.set(U,k={lead:void 0,as:"",offset:void 0,action:null,rungs:kp,phi:0,u:N,du:0,goal:N,exit:0,aim:!1,nrem:0,planned:0,tgt:0,carry:0,stance:null,sw:0,soft:null,upper:null,yaw:Y,epoch:-1});const ct=k.epoch!==w;k.epoch=w;const yt=W.mixer.getRoot(),{add:Rt,band:Q,legs:ft,striding:ut}=T(U,O,N),Z=ut?FC:ft?ft.clip:h(U,O),xt=ut?Q?Xu(i,Q.gait,U,0):ft.clip:Z,Pt=ut||!ft?void 0:ft.offset,Ct=k.lead!==Z||k.offset!==Pt,zt=Z===_a||!W.clips.has(_a)?0:lR(n,U,O),Xt=!Ct&&!ct&&Math.abs(zt-k.sw)>NC;k.sw=zt;const Ae=Ct&&ut?MC(yt):0,j=!ft&&N<=SC,Le=(Ct||Xt)&&j?T0(yt,fu):0;R.restore(U);let Kt=0,Zt=0,Wt=!1;if(Ct){const it=k.action,rt=k.rungs;if(ut)k.rungs=d(U,W).clip.map(At=>{const Mt=W.mixer.clipAction(At);return Mt.reset(),Mt.loop=2201,Mt.weight=0,Mt.play(),Mt}),k.action=null;else{const At=i.clips[Z],Mt=W.mixer.clipAction(p(W,Z));Mt.reset(),Mt.loop=At.loop?2201:2200,Mt.clampWhenFinished=!0,Pt&&(Mt.time=Pt),Mt.play(),k.action=Mt,k.rungs=kp}for(const At of rt)At!==k.action&&!k.rungs.includes(At)&&M(At);it&&it!==k.action&&!k.rungs.includes(it)&&M(it),k.lead!==void 0&&!ct&&(Kt=m0(i,k.as,xt),Zt=Tw(i,k.as,xt),j&&(Zt=Math.max(Zt,DC))),k.lead=Z,k.as=xt,k.offset=Pt}Xt&&(Kt=Zt=p0);const _e=!ft&&Z===yl?op(Hd(i,void 0),U,0):null,Vt=_e&&W.clips.has(_e)?1-eC:0,G=Math.max(0,1-zt-Vt);if(ut){const it=d(U,W);if(Ct||ct)k.u=k.goal=N,k.du=0;else if(B>0){k.goal=Math.max(N,k.goal-Zd*B);const rt=2*Math.LN2/Jd,At=k.u-k.goal,Mt=k.du+At*rt,Lt=Math.exp(-rt*B);k.u=k.goal+Lt*(At+Mt*B),k.du=Lt*(k.du-Mt*rt*B)}if(Qd(it.rungs,k.u,N,A),Ct){const rt=A.w>.5?A.lo+1:A.lo;k.phi=On(TC(Ae,it.amp[rt])+(it.lev[rt]??0))}if((Ct||ct)&&P(U,k,O),k.aim&&B>0){const rt=Ct||ct;(rt||O-k.planned>=RC)&&(k.nrem=C(U,it,k,O,B,A.cadence),k.planned=O);const At=k.phi+k.nrem;let Mt=Up(it.mid[k.tgt]-At);const Lt=Up(it.mid[1-k.tgt]-At);Math.abs(Lt)+(rt?0:IC)<Math.abs(Mt)&&(k.tgt=1-k.tgt,Mt=Lt);const re=A.cadence,vt=Np*(A.lo>=2?0:A.lo===1?1-A.w:1);k.nrem>CC&&O>k.carry&&(A.cadence=re*(1+Math.max(-Np,Math.min(vt,Mt/k.nrem)))),k.nrem=Math.max(0,k.nrem-re*B)}for(let rt=0;rt<k.rungs.length;rt++){const At=k.rungs[rt],Mt=it.clip[rt].duration;At.weight=G*(rt===A.lo?1-A.w:rt===A.lo+1?A.w:0),At.timeScale=A.cadence*Mt,At.time=On(k.phi+it.at[rt])*Mt}}else{const it=k.action;it.weight=G,ft?ft.timeScale!==void 0?it.timeScale=ft.timeScale:i.clips[Z].category==="locomotion"?it.timeScale=mw(N,i.clips[Z].speed??Cn):it.timeScale=1:(it.timeScale=ga(U),it.time=u(U,Z,O-B));const rt=it.getClip();!Kt&&!ct&&B>0&&ft&&it.loop===2201&&(hu.get(rt)??0)>A0&&it.time+B*it.timeScale>=rt.duration&&(Kt=Zt=xC,Wt=!0)}if(zt>0){const it=k.stance??(k.stance=v(W,"stance",_a));it.timeScale=ga(U),it.time=u(U,_a,O-B),it.weight=zt}else k.stance&&(M(k.stance),k.stance=null);if(Vt>0){const it=k.soft??(k.soft=v(W,"soft",_e));it.timeScale=ga(U),it.time=u(U,_e,O-B),it.weight=Vt}else k.soft&&(M(k.soft),k.soft=null);let I=0,J=0;if(Rt){const it=Rt.offset??0;J=i.clips[Rt.clip].duration;let rt=k.upper;if(!rt||rt.clip!==Rt.clip||rt.offset!==it){rt&&M(rt.action);const At=W.mixer.clipAction(gC(p(W,Rt.clip),it));At.reset(),At.loop=2200,At.clampWhenFinished=!0,At.timeScale=0,At.play(),k.upper=rt={clip:Rt.clip,offset:it,action:At}}I=it-Rt.t0,rt.action.time=Math.min(J,it+Math.max(0,O-Rt.t0)),rt.action.weight=_C(O-Rt.t0,Math.max(0,J-it))}else k.upper&&(M(k.upper.action),k.upper=null);const tt=k.action?di[Z]:void 0;Kt=B>0?Kt:0,Wt?R.markSeam(U,yt):Kt>0&&(k.upper&&(k.upper.action.time=Math.min(J,Math.max(k.upper.offset,I+O-B))),W.mixer.update(0),R.mark(U,yt,tt?tt.yaw*As(tt,k.action.time):0,k.yaw),k.upper&&(k.upper.action.time=Math.min(J,Math.max(k.upper.offset,I+O)))),W.mixer.update(B),R.settle(U,yt,O,tt?tt.yaw*As(tt,k.action.time):0,Y,Kt,Zt,Le&&Kt>0&&!Wt?EC(yt,Le):0),k.yaw=Y,ut&&B>0&&(k.phi=On(k.phi+A.cadence*B))}return{applyAnim:z,cueAt:c,inert:R,reset:()=>{R.reset(),w++}}}class OC{constructor(t,e){Qe(this,"_t",0);Qe(this,"_playing",!1);Qe(this,"speed",1);Qe(this,"loopCbs",[]);Qe(this,"endCbs",[]);Qe(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function kC(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,l,h,u,f){const g=e.get(o)??0,_=g0(i,o,a);let b;if(_){const T=s.get(o);T&&T.span===_?b=T.from:(b=g,s.set(o,{span:_,from:b}))}else s.delete(o);const p=_?ww(i,o,a,b,qa/4):null,d=p?Rw(di[_.clip],l):f?S1:Hu(l);if(c<=0)return{h:g,clipYaw:(p==null?void 0:p.clipYaw)??0};const v=p?dd(g,p.heading):u?0:dd(g,h),M=A1(n.get(o)??0,v,c,d),y=g+(Math.abs(v-M*c)<1e-9?v:M*c);return n.set(o,M),e.set(o,y),{h:y,clipYaw:(p==null?void 0:p.clipYaw)??0}}return{heading:e,rateOf:n,step:r,reset:()=>n.clear()}}const th=Math.PI/180,w0=2*th,R0=4*th,BC=8*th,zC=R0/w0,Bp=.12,GC=.6,HC=.08,zp=.4;function VC(i){return i<zC?0:Math.min(BC,Math.max(R0,w0*i))}function WC(i,t){const e=Math.hypot(i[0],i[1]),n=VC(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function wl(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function jC(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=WC(s,r),l=wl(i.get(n)??0,c.pitch*o,a,Bp),h=wl(t.get(n)??0,c.roll*o,a,Bp);return i.set(n,l),t.set(n,h),{pitch:l,roll:h}},shoulder(n,s,r){const o=cc(s)*GC,a=wl(e.get(n)??0,o,r,HC);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const Rl=new Oe,Gp=new Oe,Hp=new Oe,tc=new Oe,XC=new Vn;function qC(i,t){Rl.identity();for(let e=i.parent;e&&e!==t;e=e.parent)Rl.premultiply(e.quaternion);return Rl}const Mo=new WeakMap;function C0(i){const t=Mo.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function I0(i,t){const e=Mo.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):Mo.set(i,{base:t.clone(),left:i.quaternion.clone()})}function Vp(i,t,e,n,s){if(C0(t),!e&&!n&&!s){Mo.delete(t);return}tc.copy(t.quaternion);const r=qC(t,i);Gp.setFromEuler(XC.set(e,n,s,"YXZ")),Hp.copy(r).invert().multiply(Gp).multiply(r),t.quaternion.premultiply(Hp),I0(t,tc)}function KC(i,t){if(C0(i),!t){Mo.delete(i);return}tc.copy(i.quaternion),i.rotation.y+=t,I0(i,tc)}const P0=.58,$C=.15,YC=.5,Cl=6,JC=.3,mr=.5,ZC=.7,QC=10;function t2(i,t,e,n,s=new Map,r=!1){const o=new Map(i.map(a=>[a,[0,0]]));for(let a=0;a<i.length;a++)for(let c=a+1;c<i.length;c++){const l=e.has(i[a]),h=e.has(i[c]);if(l&&h)continue;let u=1/0,f=1,g=0;const _=R=>{const w=R.get(i[a]),D=R.get(i[c]);return w&&D?[D[0]-w[0],D[1]-w[1]]:null};for(let R=0;R<t.length;R++){const w=_(t[R]);if(!w)continue;const D=R+1<t.length?_(t[R+1]):null,A=D?D[0]-w[0]:0,E=D?D[1]-w[1]:0,P=A*A+E*E,C=P>1e-12?Math.min(1,Math.max(0,-(w[0]*A+w[1]*E)/P)):0;let z=w[0]+C*A,U=w[1]+C*E;const W=Math.hypot(z,U);if(W>=u)continue;if(u=W,W<1e-6)if(P>1e-12){const B=Math.sqrt(P);z=-E/B,U=A/B}else z=1,U=0;const O=Math.hypot(z,U);f=z/O,g=U/O}if(u>=n)continue;const b=n-u,p=l?0:r?Math.max(s.get(i[a])??0,mr):(s.get(i[a])??0)<mr?0:s.get(i[a]),d=h?0:r?Math.max(s.get(i[c])??0,mr):(s.get(i[c])??0)<mr?0:s.get(i[c]);if(p+d<=0)continue;const v=p/(p+d),M=d/(p+d),y=o.get(i[a]),T=o.get(i[c]);y[0]-=f*b*v,y[1]-=g*b*v,T[0]+=f*b*M,T[1]+=g*b*M}return o}function e2(){const i=new Map,t=new Map;let e=-1/0;return{step(n,s,r,o,a,c,l){const h=Math.abs(a-e)>.25,u=t2(n,s,r,o,l,h);e=a;const f=QC*o/P0,g=f*c;for(const _ of n){const b=u.get(_);let p=i.get(_),d=t.get(_);if((!p||!d)&&(i.set(_,p=[0,0]),t.set(_,d=[0,0])),h){p[0]=b[0],p[1]=b[1],d[0]=d[1]=0;continue}if(!(c>0))continue;const v=(l==null?void 0:l.get(_))??0,M=v<mr&&!r.has(_),y=M?0:b[0]-p[0],T=M?0:b[1]-p[1],R=Math.hypot(y,T),w=R>0?Math.min(ZC*Math.max(v,mr),R/$C,qg(R,f,c))/R:0;let D=y*w-d[0],A=T*w-d[1];const E=Math.hypot(D,A);E>g&&(D*=g/E,A*=g/E),d[0]+=D,d[1]+=A,p[0]+=d[0]*c,p[1]+=d[1]*c}return i}}}function mo(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function n2(i){var r;const t=[i.root[0]+Ne*Math.sin(i.heading),i.root[1]+Ne*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?mo((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Ne*Math.sin(s.heading),i.root[1]+Ne*Math.cos(s.heading)],a=mo((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function i2(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*mo((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?mo((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=mo((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function Ba(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=ss(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:F1(e),speed:su(e,i.t),soundSpeed:Kg(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:n2(n),height:i2(n),apex:0,speed:0,soundSpeed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0,soundSpeed:0}:{pos:i.ballStart,height:0,apex:0,speed:0,soundSpeed:0}}const s2=1.2,r2=40;function L0(i,t,e){var s;const n=((s=zn(i.moves[t]??[],e))==null?void 0:s.pos)??i.starts[t]??[0,0];return ou(i.dives,i.moves[t],t,e)??n}function Wp(i,t){const e=i.attachTo(t),n=Ba({t,holderId:e,holderRoot:e?L0(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const D0=.55,o2=.3,jp=.6,a2=.6,c2=.4,fc=i=>Math.min(Math.max(i,0),1);function l2(i,t){if(t<=i.t0)return 0;if(t>=i.t0+te(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=Bn(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function u2(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,l=(t[1]-i[1])/a,h=-l,u=c,f=a-s-.1,g=b=>{const p=e?e*Math.sin(2*Math.PI*b/n):0;return[i[0]+c*b+h*p,i[1]+l*b+u*p]},_=[];for(let b=.15;b+r*.5<=f;b+=r+o){const p=Math.min(b+r,f),[d,v]=g(b),[M,y]=g(p);_.push({ax:d,ay:v,bx:M,by:y,k:(b+p)/2/a})}return _}function Xp(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=D0*e,a=o2*e,c=t[0]-o*s,l=t[1]-o*r;return[[t[0],t[1]],[c-r*a,l+s*a],[c+r*a,l-s*a]]}const qp=1.6,Ea=2.2,h2=5,f2=5,d2=6,Kp=14,p2=4,m2=20,g2="#E8ECEF",_2="#8D949B",b2=1.2,x2=3,v2=.4;function $p(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(d2*n,s*.5),o=i==="dribble",a=i==="pass"?m2*n:o?Kp*n/8:h2*n;return{dashes:u2(t,e,o?p2*n:0,Kp*n,r,a,i==="move"?f2*n:0),headScale:r/D0}}function y2(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function M2(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const u=(h.y-i[1])/s;!(u>1)||!isFinite(u)||u-1<a&&(a=u-1,o=u,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),l=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(l,r.x-c),r.x+c),r.y]}function dc(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=b2}function S2(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const Yp=.012,A2=.14,E2=.38,Jp=.15,F0=.3,T2="#bfe333";function w2(i){const t=1-2*F0,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const Ta=1.5,R2=.3,C2=24;function Zp(i){return Jp+(E2-Jp)*fc(i)}function du(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=Ta?0:1-s/Ta;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,Ta)/Ta;return Math.min(r,a*Math.max(1-(i-o)/R2,0))}function pu(i,t){for(let e=t+1;e<i.length;e++)if(dc(i[e]))return i[e].t0}function I2(i,t){const e=[];for(let n=0;n<i.length;n++)dc(i[n])&&du(t,i[n],pu(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function P2(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=ss(i,t).pos;return fc(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function L2(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=ss(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||dc(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=ss(r,e).pos;return[o[0],o[1]]}function Qp(i,t){const e=fc((i-t)/.06);return jp+(1-jp)*e}function D2(i,t){return fc((i-(t-a2))/c2)}const F2=.35;function N2(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+F2}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+hi})}return n.sort((s,r)=>s.t0-r.t0)}function U2(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const tm=1e-6;function mu(i,t,e){return t0(i,t,e)>0}function O2(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-tm);if(r&&mu(i.arrivals,r,s.t0-tm))return{kind:"halo"}}const n=U2(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&mu(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function k2(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const B2=.85;function z2(i,t){return i>0?{draw:t>=i*B2,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const G2=.15,H2=1e-6;function em(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function V2(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function N0(i,t,e,n){var o;const s=ws(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=em((n-V2(i,e,s))/G2);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-em((n-a.windowStart)/Math.max(a.contact-a.windowStart,H2)));return r}function W2(i,t,e){var s,r;const n=(r=(s=ws(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function j2(i,t,e,n){return mu(i,e,n)||N0(i,t,e,n)>0}const X2=25;function q2(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function K2(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(q2(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=Kg(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/X2),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const $2=.02;function Y2(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const l=t[c];e<l.t&&n>=l.t&&(l.net?i.net():i.kick(l.power,l.shot))}i.roll(s&&r<=$2,o)}function J2(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{Y2(e,n,s,r,o,a,c,t),t=!1}}const nm=new dn,wa=new H;class U0 extends wb{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ve(t,3)),this.setAttribute("uv",new Ve(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new zl(e,6,1);return this.setAttribute("instanceStart",new ei(n,3,0)),this.setAttribute("instanceEnd",new ei(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new zl(e,6,1);return this.setAttribute("instanceColorStart",new ei(n,3,0)),this.setAttribute("instanceColorEnd",new ei(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ob(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),nm.setFromBufferAttribute(e),this.boundingBox.union(nm))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)wa.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(wa)),wa.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wa));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Nt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};En.line={uniforms:_u.merge([Nt.common,Nt.fog,Nt.line]),vertexShader:`
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
		`};class eh extends ki{constructor(t){super({type:"LineMaterial",uniforms:_u.clone(En.line.uniforms),vertexShader:En.line.vertexShader,fragmentShader:En.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Il=new de,im=new H,sm=new H,on=new de,an=new de,li=new de,Pl=new H,Ll=new se,cn=new Vb,rm=new H,Ra=new dn,Ca=new jn,ui=new de;let pi,Rs;function om(i,t,e){return ui.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ui.multiplyScalar(1/ui.w),ui.x=Rs/e.width,ui.y=Rs/e.height,ui.applyMatrix4(i.projectionMatrixInverse),ui.multiplyScalar(1/ui.w),Math.abs(Math.max(ui.x,ui.y))}function Z2(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){cn.start.fromBufferAttribute(s,a),cn.end.fromBufferAttribute(r,a),cn.applyMatrix4(e);const l=new H,h=new H;pi.distanceSqToSegment(cn.start,cn.end,h,l),h.distanceTo(l)<Rs*.5&&t.push({point:h,pointOnLine:l,distance:pi.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Q2(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,l=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),u=-t.near;pi.at(1,li),li.w=1,li.applyMatrix4(t.matrixWorldInverse),li.applyMatrix4(n),li.multiplyScalar(1/li.w),li.x*=r.x/2,li.y*=r.y/2,li.z=0,Pl.copy(li),Ll.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,g=h;f<g;f++){if(on.fromBufferAttribute(c,f),an.fromBufferAttribute(l,f),on.w=1,an.w=1,on.applyMatrix4(Ll),an.applyMatrix4(Ll),on.z>u&&an.z>u)continue;if(on.z>u){const M=on.z-an.z,y=(on.z-u)/M;on.lerp(an,y)}else if(an.z>u){const M=an.z-on.z,y=(an.z-u)/M;an.lerp(on,y)}on.applyMatrix4(n),an.applyMatrix4(n),on.multiplyScalar(1/on.w),an.multiplyScalar(1/an.w),on.x*=r.x/2,on.y*=r.y/2,an.x*=r.x/2,an.y*=r.y/2,cn.start.copy(on),cn.start.z=0,cn.end.copy(an),cn.end.z=0;const b=cn.closestPointToPointParameter(Pl,!0);cn.at(b,rm);const p=Am.lerp(on.z,an.z,b),d=p>=-1&&p<=1,v=Pl.distanceTo(rm)<Rs*.5;if(d&&v){cn.start.fromBufferAttribute(c,f),cn.end.fromBufferAttribute(l,f),cn.start.applyMatrix4(o),cn.end.applyMatrix4(o);const M=new H,y=new H;pi.distanceSqToSegment(cn.start,cn.end,y,M),e.push({point:y,pointOnLine:M,distance:pi.origin.distanceTo(y),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class tI extends ye{constructor(t=new U0,e=new eh({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)im.fromBufferAttribute(e,o),sm.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+im.distanceTo(sm);const r=new zl(s,2,1);return t.setAttribute("instanceDistanceStart",new ei(r,1,0)),t.setAttribute("instanceDistanceEnd",new ei(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;pi=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Rs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ca.copy(a.boundingSphere).applyMatrix4(o);let l;if(n)l=Rs*.5;else{const u=Math.max(s.near,Ca.distanceToPoint(pi.origin));l=om(s,u,c.resolution)}if(Ca.radius+=l,pi.intersectsSphere(Ca)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ra.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Rs*.5;else{const u=Math.max(s.near,Ra.distanceToPoint(pi.origin));h=om(s,u,c.resolution)}Ra.expandByScalar(h),pi.intersectsBox(Ra)!==!1&&(n?Z2(this,e):Q2(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Il),this.material.uniforms.resolution.value.set(Il.z,Il.w))}}class O0 extends U0{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class eI extends tI{constructor(t=new O0,e=new eh({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function nI(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const am=.55,k0=.55,cm=.006,iI=i=>1/(1+Math.max(i,0)),sI=i=>k0/(1+2*Math.max(i,0)),rI=.6,oI=(i,t)=>t>0?i/t*rI:0,aI=14,cI=.25,B0=.25,Ia=Math.round(B0*60)+2,lI=2,uI=.5,hI=16774102,fI=20,Dl=.06,Fl=.06,lm=.09;function dI(i){if(!(i>=0)||i>=Fl+lm)return[1,1,1];const t=i<Fl?1:1-(i-Fl)/lm;return[1+Dl*t,1-Dl*t,1+Dl*t]}const pI=.02,mI=2;let so=null;function gI(){if(so)return so;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),so=new In(i),so.userData.shared=!0,so}function um(i){let{bodyScale:t,radius:e}=i;const n=new tn({map:gI(),transparent:!0,depthWrite:!1,opacity:k0,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new ye(new Hn(am,am).rotateX(-Math.PI/2),n);s.position.y=cm,s.renderOrder=1,i.root.add(s);const r=new eh({linewidth:lI,color:hI,vertexColors:!0,transparent:!0,opacity:uI,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new O0;o.setPositions(new Float32Array(Ia*3)),o.setColors(new Float32Array(Ia*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,l=new eI(o,r);l.frustumCulled=!1,l.renderOrder=fI,l.visible=!1;const h=i.streak!==!1;i.root.add(l);const u=[],f=new H;let g=!1,_=!1,b=-1;const p=new H;function d(){s.scale.setScalar(t)}d();function v(M){const y=g?f.distanceTo(M.pos):0,T=g&&y>mI,R=M.height<=pI;if(s.visible=!M.held,s.visible&&(s.position.set(M.pos.x,cm,M.pos.z),s.scale.setScalar(t*iI(M.height)),n.opacity=sI(M.height)),g&&!T&&M.dt>0&&y>1e-9){const{axis:P,angle:C}=nI([f.x,f.z],[M.pos.x,M.pos.z],e);if(P[0]!==0||P[2]!==0){p.set(P[0],P[1],P[2]);const z=R?C:oI(y/M.dt,e)*M.dt;z>0&&i.mesh.rotateOnWorldAxis(p,z)}}R&&_&&!T&&(b=M.t),T&&(b=-1),_=!R;const[w,D,A]=b<0?[1,1,1]:dI(M.t-b);if(i.mesh.scale.set(t*w,t*D,t*A),T&&(u.length=0),h&&M.dt>0){for(u.push({t:M.t,p:M.pos.clone()});u.length&&M.t-u[0].t>B0;)u.shift();for(;u.length>Ia;)u.shift()}if(h&&(M.speed>aI||(M.apex??0)>=cI)&&u.length>=2){const C=u.length-1,z=a.array,U=c.array;for(let W=0;W<Ia-1;W++)for(const[O,B]of[[0,W],[3,W+1]]){const N=u[Math.min(B,C)].p,Y=6*W+O;z[Y]=N.x,z[Y+1]=N.y,z[Y+2]=N.z;const k=Math.min(B,C)/C;U[Y]=U[Y+1]=U[Y+2]=k}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=C,l.visible=!0}else l.visible=!1;f.copy(M.pos),g=!0}return{update:v,hide(){s.visible=!1,l.visible=!1},resize(M,y,T){t=M,e=y,d(),r.resolution.set(T.width,T.height)},__state:()=>({shadow:s,streak:l,trailLength:u.length,squashFrom:b})}}const _I=.055,bI=.17,vs=.015,ec=2.1,xI=.16,vI=.1,yI=1.6,MI=.45,SI=.11,AI={technical:vA,tactical:yA,physical:ig,social:MA},EI={inner:.62,peak:.76,shoulder:.84,outer:1},TI={inner:.7,peak:.76,shoulder:.79,outer:.84},wI=16777215;function RI(){const i=new tn({map:z0(TI),color:wI,blending:2,transparent:!0,depthWrite:!1}),t=new ye(new Hn(ec,ec).rotateX(-Math.PI/2),i);return t.position.y=.02,t.renderOrder=3,t.name="changeRing",t}function z0(i=EI){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(i.inner,"rgba(255,255,255,0)"),n.addColorStop(i.peak,"rgba(255,255,255,0.9)"),n.addColorStop(i.shoulder,"rgba(255,255,255,0.5)"),n.addColorStop(i.outer,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),new In(t)}function CI(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function II(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?AI[i.color]??i.color:Ps,r=Math.min(t.width,t.height)*.14;if(CI(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=xI,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=z2(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new In(t);return o.colorSpace=He,o}function PI(i){var M,y;const{scene:t,drill:e,schedule:n}=i,s=(...T)=>{for(const R of T)R.traverse(w=>{const D=w.material;for(const A of Array.isArray(D)?D:D?[D]:[])A.toneMapped=!1});t.add(...T)},r=i.pathM??vI,o=T=>T*r*(i.pathWidthK??1),a=k2(i.search??location.search,(M=e.overlays)==null?void 0:M.runPaths),{width:c,length:l}=e.pitch,h=T=>T-c/2,u=T=>T-l/2,f={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(T=>[T.id,T.start])),ballStart:Wa(e),headingAt:i.headingAt},g=S2(e.players,Wa(e),n.attachTo(0)),_=new Map(e.players.map(T=>[T.id,T.team])),b=T=>_.get(T)===g?g2:_2,p=[];{const T=r2,R=new Float32Array(T*3),w=new je;w.setAttribute("position",new Re(new Float32Array(T*2*3),3)),w.setAttribute("color",new Re(new Float32Array(T*2*3),3));const D=new Float32Array(T*2*2);for(let O=0;O<T;O++)D.set([0,O/(T-1),1,O/(T-1)],O*4);w.setAttribute("uv",new Re(D,2));const A=new Uint16Array((T-1)*6);for(let O=0;O<T-1;O++){const B=O*2;A.set([B,B+1,B+2,B+1,B+3,B+2],O*6)}w.setIndex(new Re(A,1));const E=(()=>{const O=document.createElement("canvas");O.width=64,O.height=1;const B=O.getContext("2d"),[N,Y,k]=xA,ct=B.createLinearGradient(0,0,64,0);ct.addColorStop(0,`rgba(${N},${Y},${k},0)`),ct.addColorStop(.28,`rgba(${N},${Y},${k},0.28)`),ct.addColorStop(.44,"rgba(216,247,120,0.8)"),ct.addColorStop(.5,"rgba(255,255,255,1)"),ct.addColorStop(.56,"rgba(216,247,120,0.8)"),ct.addColorStop(.72,`rgba(${N},${Y},${k},0.28)`),ct.addColorStop(1,`rgba(${N},${Y},${k},0)`),B.fillStyle=ct,B.fillRect(0,0,64,1);const yt=new In(O);return yt.colorSpace=He,yt})(),P=new ye(w,new tn({map:E,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));P.frustumCulled=!1,P.renderOrder=6,P.name="ballTrail",s(P);const C=new H,z=new H,U=new H,W=s2/(T-1);p.push((O,B)=>{if(P.visible=a.trail,!a.trail)return;for(let k=0;k<T;k++){const ct=Wp(f,O-k*W);R[k*3]=h(ct.pos[0]),R[k*3+1]=_I+ct.height,R[k*3+2]=u(ct.pos[1])}const N=w.getAttribute("position"),Y=w.getAttribute("color");U.set(1,0,0);for(let k=0;k<T;k++){const ct=Math.min(k,T-2);C.set(R[ct*3]-R[ct*3+3],R[ct*3+1]-R[ct*3+4],R[ct*3+2]-R[ct*3+5]),z.set(R[k*3],R[k*3+1],R[k*3+2]).sub(B.position),C.lengthSq()>1e-10&&(C.cross(z),C.lengthSq()>1e-10&&U.copy(C.normalize()));const yt=Math.pow(1-k/(T-1),1.2),Rt=bI*(.35+.65*yt),Q=R[k*3],ft=R[k*3+1],ut=R[k*3+2];N.setXYZ(k*2,Q+U.x*Rt,ft+U.y*Rt,ut+U.z*Rt),N.setXYZ(k*2+1,Q-U.x*Rt,ft-U.y*Rt,ut-U.z*Rt);const Z=yt;Y.setXYZ(k*2,Z,Z,Z),Y.setXYZ(k*2+1,Z,Z,Z)}N.needsUpdate=Y.needsUpdate=!0})}{const T=[];let R=0,w=0;for(const D of e.events){if(D.type!=="move"&&D.type!=="dribble")continue;const A=(n.moves[D.player]??[]).find(C=>C.t0>=D.t&&C.t0<=D.t+cu+1e-9&&C.to[0]===D.to[0]&&C.to[1]===D.to[1]);if(!A)continue;const E=$p(D.type,A.from,A.to,r);if(!E)continue;const P=new $t(b(D.player));T.push({m:A,authored:D.runPath===!0,stroke:E,baseR:P.r,baseG:P.g,baseB:P.b,baseA:1,vert0:R,vertCount:E.dashes.length*4+3}),R+=E.dashes.length*4+3,w+=E.dashes.length*6+3}if(T.length){const D=new Float32Array(R*3),A=new Float32Array(R*4),E=new Uint16Array(w);let P=0,C=0;const z=o(qp)/2;for(const B of T){const N=Math.hypot(B.m.to[0]-B.m.from[0],B.m.to[1]-B.m.from[1])||1,Y=-(B.m.to[1]-B.m.from[1])/N,k=(B.m.to[0]-B.m.from[0])/N;for(const ft of B.stroke.dashes){const ut=P/3;D.set([h(ft.ax+Y*z),vs,u(ft.ay+k*z),h(ft.ax-Y*z),vs,u(ft.ay-k*z),h(ft.bx+Y*z),vs,u(ft.by+k*z),h(ft.bx-Y*z),vs,u(ft.by-k*z)],P),P+=12,E.set([ut,ut+1,ut+2,ut+1,ut+3,ut+2],C),C+=6}const[ct,yt,Rt]=Xp(B.m.from,B.m.to,B.stroke.headScale),Q=P/3;D.set([h(ct[0]),vs,u(ct[1]),h(yt[0]),vs,u(yt[1]),h(Rt[0]),vs,u(Rt[1])],P),P+=9,E.set([Q,Q+1,Q+2],C),C+=3}const U=new je;U.setAttribute("position",new Re(D,3)),U.setAttribute("color",new Re(A,4)),U.setIndex(new Re(E,1));const W=new ye(U,new tn({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));W.renderOrder=2,s(W);const O=U.getAttribute("color");p.push(B=>{if(W.visible=a.runPaths!=="off",!!W.visible){for(const N of T){const Y=a.runPaths==="authored"&&!N.authored?0:D2(B,N.m.t0),k=l2(N.m,B);let ct=N.vert0;for(const Rt of N.stroke.dashes){const Q=N.baseA*Y*Qp(Rt.k,k);for(let ft=0;ft<4;ft++)O.setXYZW(ct++,N.baseR,N.baseG,N.baseB,Q)}const yt=N.baseA*Y*Qp(1,k);for(let Rt=0;Rt<3;Rt++)O.setXYZW(ct++,N.baseR,N.baseG,N.baseB,yt)}O.needsUpdate=!0}})}}{const T=C2,R=A2/2,w=[-1,-.4,1-2*F0,1],D=w.map(w2),A=w.length,E=n.flights.map((z,U)=>pu(n.flights,U)),P=()=>{const z=new je,U=new Float32Array((T+1)*A*3);for(let N=0;N<(T+1)*A;N++)U[N*3+1]=Yp;const W=new Float32Array((T+1)*A*4),O=new Uint16Array(T*(A-1)*6);for(let N=0,Y=0;N<T;N++)for(let k=0;k<A-1;k++,Y++){const ct=N*A+k;O.set([ct,ct+1,ct+A,ct+1,ct+A+1,ct+A],Y*6)}z.setAttribute("position",new Re(U,3)),z.setAttribute("color",new Re(W,4)),z.setIndex(new Re(O,1));const B=new ye(z,new tn({color:T2,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return B.frustumCulled=!1,B.renderOrder=2,B.name="passRibbon",s(B),{mesh:B,posAttr:z.getAttribute("position"),colAttr:z.getAttribute("color")}},C=[P(),P()];p.push(z=>{const U=a.runPaths==="auto"?I2(n.flights,z):[];for(let W=0;W<C.length;W++){const O=C[W],B=U[U.length-1-W]??-1;if(O.mesh.visible=B>=0,B<0)continue;const N=n.flights[B],Y=du(z,N,E[B]),k=P2(N,z),ct=Math.hypot(N.to[0]-N.from[0],N.to[1]-N.from[1])||1,yt=-(N.to[1]-N.from[1])/ct*R,Rt=(N.to[0]-N.from[0])/ct*R,Q=N.from[0]+(N.to[0]-N.from[0])*k,ft=N.from[1]+(N.to[1]-N.from[1])*k,ut=L2(n.flights,B,z);for(let Z=0;Z<=T;Z++){const xt=Z/T,Pt=Z===T?ut[0]:N.from[0]+(Q-N.from[0])*xt,Ct=Z===T?ut[1]:N.from[1]+(ft-N.from[1])*xt,zt=Y*Zp(xt);for(let Xt=0;Xt<A;Xt++){const Ae=w[Xt],j=Z*A+Xt;O.posAttr.setX(j,h(Pt+yt*Ae)),O.posAttr.setZ(j,u(Ct+Rt*Ae)),O.colAttr.setXYZW(j,1,1,1,zt*D[Xt])}}O.posAttr.needsUpdate=O.colAttr.needsUpdate=!0}})}{const T=(e.equipment??[]).filter(P=>P.type==="goal").map(P=>({x:P.at[0],y:P.at[1],halfW:Fs(P,lc)*i.goalScale})),R=o(Ea)/2,w=[],D=[],A=[],E=[];for(let P=0;P<n.flights.length;P++){const C=n.flights[P];if(!dc(C))continue;const z=y2(C,n.arrivals);if(!z&&!C.pop)continue;const U=Math.hypot(C.to[0]-C.from[0],C.to[1]-C.from[1])||1,W=-(C.to[1]-C.from[1])/U,O=(C.to[0]-C.from[0])/U,B=O,N=-W;let Y=0;if(z){const k=x2*2*R/2;D.push({ax:C.to[0]-B*R,ay:C.to[1]-N*R,bx:C.to[0]+B*R,by:C.to[1]+N*R,h:k,px:W,py:O});const ct=M2(C.from,C.to,T,o(Ea))??C.to;D.push({ax:C.to[0],ay:C.to[1],bx:ct[0],by:ct[1],h:v2*R,px:W,py:O}),Y=8}else{D.push({ax:C.from[0],ay:C.from[1],bx:C.to[0],by:C.to[1],h:qp/Ea*R,px:W,py:O});const k=$p("pass",C.from,C.to,r);A.push(Xp(C.from,C.to,k?k.headScale:0)),Y=7}E.push({i:P,verts:Y})}if(E.length){const P=E.reduce((ut,Z)=>ut+Z.verts,0),C=E.reduce((ut,Z)=>ut+(Z.verts===8?12:9),0),z=new Float32Array(P*3),U=new Float32Array(P*4),W=new Uint16Array(C);let O=0,B=0,N=0,Y=0;const k=Yp,ct=()=>{const ut=D[N++],Z=O/3;z.set([h(ut.ax+ut.px*ut.h),k,u(ut.ay+ut.py*ut.h),h(ut.ax-ut.px*ut.h),k,u(ut.ay-ut.py*ut.h),h(ut.bx+ut.px*ut.h),k,u(ut.by+ut.py*ut.h),h(ut.bx-ut.px*ut.h),k,u(ut.by-ut.py*ut.h)],O),O+=12,W.set([Z,Z+1,Z+2,Z+1,Z+3,Z+2],B),B+=6};for(const ut of E){const Z=O/3;if(ut.verts===8)ct(),ct();else{ct();const[xt,Pt,Ct]=A[Y++],zt=O/3;z.set([h(xt[0]),k,u(xt[1]),h(Pt[0]),k,u(Pt[1]),h(Ct[0]),k,u(Ct[1])],O),O+=9,W.set([zt,zt+1,zt+2],B),B+=3}w.push({flight:ut.i,vert0:Z,vertCount:ut.verts})}const yt=new je;yt.setAttribute("position",new Re(z,3)),yt.setAttribute("color",new Re(U,4)),yt.setIndex(new Re(W,1));const Rt=new ye(yt,new tn({color:AA,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Rt.renderOrder=2.5,Rt.name="passMarks",s(Rt);const Q=yt.getAttribute("color"),ft=n.flights.map((ut,Z)=>pu(n.flights,Z));p.push(ut=>{if(Rt.visible=a.runPaths==="auto",!!Rt.visible){for(const Z of w){const xt=n.flights[Z.flight],Pt=ut<xt.t0+xt.duration?0:du(ut,xt,ft[Z.flight])*Zp(1);let Ct=Z.vert0;for(let zt=0;zt<Z.vertCount;zt++,Ct++)Q.setXYZW(Ct,1,1,1,Pt)}Q.needsUpdate=!0}})}}{const T=N2(n.departures,n.anims,i.clips),R={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},w=new tn({map:z0(),color:Ps,blending:2,transparent:!0,depthWrite:!1}),D=new ye(new Hn(ec,ec).rotateX(-Math.PI/2),w);D.position.y=.02,D.renderOrder=3,D.name="possessionRing",s(D);const A=i.ballRadius??SI,E=yI*A,P=Ea*r,C=new tn({color:Ps,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),z=new ye(new rc(Math.max(E-P/2,1e-4),E+P/2,40),C);z.frustumCulled=!1,z.renderOrder=8,z.name="possessionHalo",s(z),p.push((U,W)=>{const O=O2(R,T,U);D.visible=a.highlight&&O.kind==="ring",z.visible=a.highlight&&(O.kind==="halo"||O.kind==="free");const B=Math.sin(U*2*Math.PI/1.6);if(O.kind==="ring"){const N=L0(f,O.player,U);D.position.x=h(N[0]),D.position.z=u(N[1]);const Y=1+.05*B;D.scale.x=D.scale.z=Y,w.opacity=.72+.18*B}else if(O.kind==="halo"||O.kind==="free"){const N=Wp(f,U);z.position.set(h(N.pos[0]),A+N.height,u(N.pos[1])),z.quaternion.copy(W.quaternion),C.opacity=O.kind==="free"?MI:.72+.18*B}})}const d=[];for(const T of((y=e.overlays)==null?void 0:y.zones)??[]){if(sg.test(T.label??""))continue;const R=new ye(new Hn(T.w,T.h).rotateX(-Math.PI/2).rotateY(Math.PI),new tn({map:II(T),transparent:!0,depthWrite:!1}));R.position.set(h(T.at[0]),.004,u(T.at[1])),R.renderOrder=.5,s(R),d.push(R)}const v=()=>{for(const T of d)T.visible=a.zones};return v(),{update(T,R){for(const w of p)w(T,R)},set(T){Object.assign(a,T),v()}}}const LI=.16,DI=.25,G0=.8,H0=.6,V0=8,FI=H0*V0;function NI(i,t){return!(i>=0)||i>=G0||t>FI*i?0:LI*Math.exp(-i/DI)*Math.sin(2*Math.PI*(t/H0-V0*i))}function UI(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??OI})}return t}const OI=.6,hm=.15,kI=.12,BI=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function fm(i){return BI(Math.min(i,1-i)/kI)}function zI(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let B=0;B<4;B++)o.push([n.getX(B),n.getY(B),n.getZ(B)]);const a=[0,1,2].map(B=>Math.min(...o.map(N=>N[B]))),c=[0,1,2].map(B=>Math.max(...o.map(N=>N[B]))),l=[0,1,2].map(B=>c[B]-a[B]),h=l.indexOf(Math.min(...l));if(l[h]>.001)return null;const[u,f]=[0,1,2].filter(B=>B!==h);if(!(l[u]>0&&l[f]>0))return null;const g=(B,N)=>{let Y=0,k=1/0;for(let ct=0;ct<4;ct++){const yt=Math.abs((o[ct][u]-a[u])/l[u]-B)+Math.abs((o[ct][f]-a[f])/l[f]-N);yt<k&&(k=yt,Y=ct)}return Y},_=g(0,0),b=g(1,0),p=g(0,1),d=g(1,1),v=(B,N)=>s?N?s.getY(B):s.getX(B):0,M=new H().setFromMatrixScale(t).x,y=Math.max(2,Math.min(96,Math.ceil(l[u]*M/hm))),T=Math.max(2,Math.min(96,Math.ceil(l[f]*M/hm))),R=(y+1)*(T+1),w=new Float32Array(R*3),D=new Float32Array(R*2),A=new Float32Array(R*3),E=new Float32Array(R),P=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let B=0;B<=T;B++)for(let N=0;N<=y;N++){const Y=B*(y+1)+N,k=N/y,ct=B/T;w[Y*3+h]=o[0][h],w[Y*3+u]=a[u]+l[u]*k,w[Y*3+f]=a[f]+l[f]*ct;for(const yt of[0,1])D[Y*2+yt]=v(_,yt)*(1-k)*(1-ct)+v(b,yt)*k*(1-ct)+v(p,yt)*(1-k)*ct+v(d,yt)*k*ct;A.set(P,Y*3),E[Y]=fm(k)*fm(ct)}const C=[];for(let B=0;B<T;B++)for(let N=0;N<y;N++){const Y=B*(y+1)+N;C.push(Y,Y+1,Y+y+1,Y+1,Y+y+2,Y+y+1)}const z=new je;z.setAttribute("position",new Re(w,3)),z.setAttribute("uv",new Re(D,2)),z.setAttribute("normal",new Re(A,3)),z.setIndex(C),z.userData.drillOwned=!0,i.geometry=z;const U=new Float32Array(w),W=new Float32Array(R*3),O=new H;for(let B=0;B<R;B++)O.fromArray(U,B*3).applyMatrix4(t).toArray(W,B*3);return{mesh:i,axis:h,rest:U,world:W,weight:E,scale:M}}function dm(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new se().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=ni.zMin;i.placed.copy(i.goal.matrixWorld)}function GI(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((l,h)=>{const u=l.position.distanceToSquared(o);u<c&&(c=u,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new se().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const u=h;if(!u.isMesh||!HI(u))return;const f=zI(u,new se().multiplyMatrices(a,u.matrixWorld));f&&c.push(f)}),!c.length)return;const l={panels:c,goal:r,dirty:!1,placed:new se,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new H}))};dm(l,!0),n.push(l)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=VI(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)WI(c);r.dirty=!1;continue}dm(r);const a=s-o.t;for(const c of r.panels){const l=c.mesh.geometry.getAttribute("position"),h=l.array;for(let u=0;u<c.weight.length;u++){const f=c.world[u*3]-o.p.x,g=c.world[u*3+1]-o.p.y,_=c.world[u*3+2]-o.p.z,b=NI(a,Math.hypot(f,g,_))*c.weight[u];h[u*3+c.axis]=c.rest[u*3+c.axis]+b/c.scale}l.needsUpdate=!0}r.dirty=!0}}}}const HI=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function VI(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<G0&&(e=n);return e}function WI(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const nh=new H(0,1,0),W0=.04,j0=8,So=.1,Pr=46,Lr=25,pm=70;function nc(i,t){return new H(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function pc(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let Cs=new Float64Array(64),Pa=new Float64Array(64),La=new Float64Array(64);const X0=new H,q0=new H,ns=new H;function mm(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+Cs[r]/2),s=Math.max(s,-i[r]/(2*e)+Cs[r]/2);return n+s}function gm(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-Cs[o])*e),r=Math.min(r,i[o]+(n-Cs[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function ic(i,t,e,n,s){const r=i.length;Cs.length<r&&(Cs=new Float64Array(r),Pa=new Float64Array(r),La=new Float64Array(r));const o=X0.crossVectors(nh,e).normalize(),a=q0.crossVectors(e,o).normalize(),c=Math.tan(s),l=Math.tan(n);for(let b=0;b<r;b++)ns.subVectors(i[b],t),Cs[b]=ns.dot(e),Pa[b]=ns.dot(o),La[b]=ns.dot(a);const h=Math.max(Math.max(mm(Pa,r,c),mm(La,r,l))*(1+W0),j0),[u,f]=gm(Pa,r,c,h),[g,_]=gm(La,r,l,h);return{dist:h,offset:new H().addScaledVector(o,u).addScaledVector(a,g),slack:new qt(f,_)}}function jI(i,t,e,n,s){const r=X0.crossVectors(nh,e).normalize(),o=q0.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let l=0;for(const h of i){ns.subVectors(h,t);const u=ns.dot(e);l=Math.max(l,Math.abs(ns.dot(r))/a+u,Math.abs(ns.dot(o))/c+u)}return Math.max(l*(1+W0),j0)}function K0(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+So)?!0:r>s*(1+So)?!1:n}function $0(i,t,e=Pr,n=Lr){const s=new dn().setFromPoints(i),r=s.getCenter(new H),o=s.getSize(new H),{vHalf:a,hHalf:c}=pc(t),l=e*Math.PI/180,h=n*Math.PI/180,u=ic(i,r,nc(l,h),a,c).dist,f=ic(i,r,nc(l,h+Math.PI/2),a,c).dist,g=K0(o.x,o.z,t.aspect<1,f<u*(1-So));return{dist:g?f:u,alt:g}}function Nl(i,t,e,n=Pr,s=Lr){const{dist:r}=$0(i,t,n,s);return 2*r*Math.tan(pc(t).vHalf)/e}function _m(i=Pr){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const Y0=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),J0=.6,bm=2/J0,XI=["x","y","z"];function xm(i,t,e,n,s){if(!Number.isFinite(n)){i.copy(e),t.set(0,0,0);return}if(!(n>0))return;const r=Math.exp(-s*n);for(const o of XI){const a=i[o]-e[o],c=t[o]+s*a;i[o]=e[o]+(a+c*n)*r,t[o]=(t[o]-s*c*n)*r}}const qI=.8,KI=30,$I=Lr,YI=12,vm=1.03,JI=1.5;function ZI(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return vm+(1-vm)*(e*e*(3-2*e))}const Z0=2,gr=.5,QI=i=>{const t=Math.floor(Math.max(i,0)/gr)*gr;return[t,t+Z0]},tP=.25,eP=.06;function nP(i,t){const e=new H;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(tP)}class iP{constructor(t,e=Pr,n=Lr){Qe(this,"target",new H);Qe(this,"wanted",new H);Qe(this,"posVel",new H);Qe(this,"targetVel",new H);Qe(this,"useAlt",!1);Qe(this,"pushAt",-1);Qe(this,"pushFor",0);Qe(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:ZI(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new dn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new H),o=s.getSize(new H),{vHalf:a,hHalf:c}=pc(this.camera),l=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?l:this.elevAt+(l-this.elevAt)*Y0(e,J0);const h=this.elevAt*Math.PI/180,u=(n.azDeg??this.azDeg)*Math.PI/180,f=u+Math.PI/2,g=nc(h,u),_=nc(h,f),b=ic(t,r,g,a,c),p=ic(t,r,_,a,c);!this.useAlt&&p.dist<b.dist*(1-So)?this.useAlt=!0:this.useAlt&&b.dist<p.dist*(1-So)?this.useAlt=!1:this.useAlt=K0(o.x,o.z,this.camera.aspect<1,this.useAlt);const d=this.useAlt?p:b,v=this.useAlt?_:g,M=n.lookAt?r:r.clone().add(d.offset),y=n.lookAt?jI(t,r,v,a,c):d.dist;if(n.breath&&!n.lookAt){const R=new H().crossVectors(nh,v).normalize(),w=new H().crossVectors(v,R).normalize(),D=eP*d.dist,A=(E,P)=>{const C=Math.min(P,D);return Math.min(Math.max(E,-C),C)};M.addScaledVector(R,A(n.breath.dot(R),d.slack.x)).addScaledVector(w,A(n.breath.dot(w),d.slack.y))}const T=y*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(T).add(M),xm(this.camera.position,this.posVel,this.wanted,e,bm),xm(this.target,this.targetVel,M,e,bm),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const sP=1.8,rP=34,oP=844,aP=1,Q0=4;function ym(i,t,e=Pr,n=Lr){const{vHalf:s}=pc(t),r=e*Math.PI/180,{dist:o}=$0(i,t,e,n),a=rP*2*o*Math.tan(s)/(oP*sP*Math.cos(r));return Math.min(Q0,Math.max(aP,a))}function cP(i,t,e,n=Pr,s=Lr,r=Q0){const o=h=>bo(i,Math.min(r,h));let a=o(ym(t,e,n,s)),c=0,l=0;for(let h=0;h<8;h++){c++;const u=o(ym([...t,...jl(i,a)],e,n,s));if(l=Math.abs(u-a)/a,a=u,l<=.005)break}return{scale:a,rounds:c,residual:l,framed:[...t,...jl(i,a)]}}class lP{constructor(){Qe(this,"last",-1);Qe(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const ro={clips:0,schedule:0,build:0};let Mm=null;function uP(){return Mm??(Mm=fetch(Bi("assets/clips_ochi.json")).then(i=>i.json()).then(i=>s0(i)).catch(i=>{throw Mm=null,i}))}let Sm=null;function hP(i){return Sm??(Sm=Pu().loadAsync(Bi("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Sm=null,t}))}function fP(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const dP=2,pP=(i,t,e=dP)=>i===null||t-i<e*1e3,t_="coach";function mP(i){return i.team===t_||i.number===void 0?void 0:String(i.number)}function gP(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==t_)??t[0]}const _P=i=>i==="boys"||i==="girls";async function bP(i,t,e,n=Fg){if(!_P(e))return;let s=null;try{s=await n(e)}catch{s=null}return vP(i,t,s)}const xP=(i,t,e)=>i===t&&e!==void 0;function vP(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function GP(i,t,e={}){var os,as,cs;const n=performance.now(),s=PA(i),r=await uP();ro.clips=performance.now()-n;const o=e.stage??PE(t),a=new xn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Tt,x])=>new H(Tt*s.pitch.width/2,0,x*s.pitch.length/2)),l=s.players.map(Tt=>new H(Tt.start[0]-s.pitch.width/2,0,Tt.start[1]-s.pitch.length/2)),h=[...c,...l],u=()=>e.bodyScale??cP(s,h,o.camera,e.elev,e.az).scale,f=Tt=>[...h,...jl(s,Tt)],g=o.size();let _=u(),b=f(_);Vd(.35*_);let p=bo(s,_);const d=performance.now(),v=((os=e.schedules)==null?void 0:os.get(p))??TR(s,r,p);(as=e.schedules)==null||as.set(p,v),ro.schedule=performance.now()-d;const M=jA(s),y=(Tt=e.elev??0)=>Tt>=pm?[...b,...M]:b;let T=Nl(y(),o.camera,o.size().height,e.elev,e.az),R=_m(e.elev);const w=nE(s.pitch.width,s.pitch.length),{toWorld:D,goals:A,cones:E,boards:P,setWorld:C,setMasts:z}=await AE(a,s,o.renderer.capabilities.getMaxAnisotropy(),_,w),U=GI(A,UI(v.flights),D);let W=b.slice(h.length);o.fitShadow(b),o.setFog(tE(s.pitch.width,s.pitch.length)),o.setHorizon(w),o.setSky(!1);const O=gP(s.teams),B=await ac(a,s.players.length,void 0,void 0,0,await bP(s.players,O,e.squad)),N=e.kit?await Ug(e.kit.pattern,s.players.flatMap((Tt,x)=>Tt.team===O?Ng(B[x]):[])):null,Y=await Og(),k=new Map,ct=new Map,yt=new Map;let Rt=null;s.players.forEach((Tt,x)=>{var V;const m=B[x];k.set(Tt.id,m),m.root.rotation.order="YXZ",m.root.scale.setScalar(_);const F=xP(Tt.team,O,e.kit),L=s.teams[Tt.team].kit.primary;Bg(m,F?e.kit:L,F?N:null,{label:mP(Tt),boxes:Y,base:L}),m.root.position.copy(D(Tt.start));const S=kA(.9);if(S.scale.setScalar(_),S.position.x=m.root.position.x,S.position.z=m.root.position.z,a.add(S),ct.set(Tt.id,S),(V=e.mark)!=null&&V.includes(Tt.id)){const q=RI();q.scale.setScalar(_),q.position.copy(S.position),q.position.y=.02,a.add(q),yt.set(Tt.id,q)}});const Q=(await hP()).clone();Q.scale.setScalar(_),a.add(Q);const ft=um({root:a,mesh:Q,bodyScale:_,radius:.11*_,resolution:o.size()}),ut=!!s.ball,Z=Wa(s);ut||(Q.visible=!1,ft.hide());const xt=Array.from({length:(((cs=s.balls)==null?void 0:cs.length)??0)+v.ballSwaps.length},()=>Q.clone()),Pt=xt.map(Tt=>(Tt.scale.setScalar(_),a.add(Tt),um({root:a,mesh:Tt,bodyScale:_,radius:.11*_,resolution:o.size(),streak:!1}))),Ct=new iP(o.camera,e.elev,e.az);Ct.armPushIn(JI,performance.now()/1e3);let zt="fit",Xt=-1,Ae=[];const j=new H,Le=new H,Kt=new H;let Zt=-1;const Wt=new H,_e=new H;let Vt=!1,G=[],I=-1/0;const J=new OC(s.duration,e.loop??!0),tt=new lP,it=new Map(s.players.map(Tt=>[Tt.id,Tt.role])),rt=uC(s.players,v,s.duration,Z),At=UC(r,v.anims,it,v.bounces,e.inertial,rt.ready,(Tt,x)=>C1(v.moves[Tt],x)),{applyAnim:Mt,cueAt:Lt}=At,re=kC(v.turns,s.players.map(Tt=>[Tt.id,Tt.role==="keeper"?Pe(Tt.start,Z):0])),vt=re.heading,Et=re.rateOf,Gt=new Map(s.players.map(Tt=>[Tt.id,Tt.start])),Qt=Array.from({length:Cl},()=>new Map),Ot=new Map,me=e2(),Jt=new Map;for(const Tt of v.departures)(Jt.get(Tt.player)??Jt.set(Tt.player,[]).get(Tt.player)).push(Tt.contact);for(const Tt of v.arrivals)(Jt.get(Tt.player)??Jt.set(Tt.player,[]).get(Tt.player)).push(Tt.at);const Ee=s.players.map(Tt=>Tt.id);function K(){const Tt=new Set(a.children);return{built:PI({scene:a,drill:s,schedule:v,clips:r,headingAt:m=>vt.get(m)??0,search:e.search,pathM:T,pathWidthK:R,ballRadius:.11*_,goalScale:p}),owned:a.children.filter(m=>!Tt.has(m))}}let Dt=K();const dt={},_t={update:(Tt,x)=>Dt.built.update(Tt,x),set:Tt=>{Object.assign(dt,Tt),Dt.built.set(Tt)}};function Ut(){for(const Tt of Dt.owned)a.remove(Tt),_g(Tt);Dt=K(),Dt.built.set(dt)}const Ft=YR(),ee=jC(),De=()=>{ee.reset(),Ft.reset(),At.reset(),re.reset()};J.onSeek(De),J.onLoop(De);const Ke=J2(J);function Me(){const Tt=u();if(Tt!==_){_=Tt,b=f(_),W=b.slice(h.length),p=bo(s,_),Vd(.35*_);for(const x of k.values())x.root.scale.setScalar(_);for(const x of ct.values())x.scale.setScalar(_);Q.scale.setScalar(_);for(const x of xt)x.scale.setScalar(_);for(const x of E)x.scale.setScalar(_);for(const x of P)fg(x,_);for(const x of A)x.scale.setScalar(p);o.fitShadow(b),De()}ft.resize(_,.11*_,o.size());for(const x of Pt)x.resize(_,.11*_,o.size());T=Nl(y(Ct.elev),o.camera,o.size().height,Ct.elev,Ct.az),Ut(),o.rule.wake()}let Xe=0;const yn=o.onBox(()=>{Xe||(Xe=requestAnimationFrame(()=>{Xe=0,Me()}))}),zi=o.size();(zi.width!==g.width||zi.height!==g.height)&&Me();const xi=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:k,heading:vt,camera:o.camera,ball:Q,spare:xt,schedule:v,goals:A,bodyScale:_,lockDbg:xi,clips:r,cueAt:Lt,inert:At.inert},__pathMetrics:()=>({metresPerPx:T,widthK:R,runHalfM:1.6*T*R/2,passHalfM:2.2*T*R/2})});function Pn(Tt,x=30,m=.12,F=4,L=1){const S=[];for(const[st,ht]of k)ht.root.traverse(pt=>{pt.isBone&&/foot/i.test(pt.name)&&S.push({id:st,name:pt.name,bone:pt})});J.pause(),J.seek(0);for(let st=0;st<90;st++)o.step(1/60);J.play();const V=1/x,q=Math.min(Tt??s.duration,s.duration),$=Math.max(0,Math.round(q*x)-1),et=S.map(()=>[]),nt=new H;for(let st=0;st<=$;st++){for(let ht=0;ht<S.length;ht++){const pt=S[ht].bone.matrixWorld.elements;nt.set(pt[12],pt[13],pt[14]);const wt=k.get(S[ht].id).root.worldToLocal(nt.clone());et[ht].push([st*V,pt[12],pt[13],pt[14],wt.x,wt.z])}o.step(V)}J.pause();const lt=(st,ht)=>{var pt;return((pt=Lt(st,ht))==null?void 0:pt.clip)??"idle"},mt=[];return S.forEach((st,ht)=>{const pt=(at,ot)=>{if(ot-at<F)return;const gt=et[ht].slice(at,ot);let St=0,It=0;for(let Ht=1;Ht<gt.length;Ht++)St=Math.max(St,Math.hypot(gt[Ht][1]-gt[0][1],gt[Ht][3]-gt[0][3])),It+=Math.hypot(gt[Ht][4]-gt[Ht-1][4],gt[Ht][5]-gt[Ht-1][5])/V;mt.push({player:st.id,foot:st.name,t0:+gt[0][0].toFixed(2),t1:+gt[gt.length-1][0].toFixed(2),drift:+St.toFixed(3),localSpeed:+(It/(gt.length-1)).toFixed(2),clip0:lt(st.id,gt[0][0]),clip1:lt(st.id,gt[gt.length-1][0])})},wt=et[ht].map((at,ot)=>ot===0?1/0:Math.hypot(at[1]-et[ht][ot-1][1],at[3]-et[ht][ot-1][3])/V);let X=-1;et[ht].forEach((at,ot)=>{const gt=at[2]<m,St=ot>0&&lt(st.id,at[0])!==lt(st.id,et[ht][ot-1][0]),It=wt[ot]>L&&ot>0&&wt[ot-1]>L;X>=0&&(!gt||St||It)&&(pt(X,ot),X=-1),X<0&&gt&&wt[ot]<L&&(X=ot)}),X>=0&&pt(X,et[ht].length)}),mt.sort((st,ht)=>ht.drift-st.drift),{feet:S.map(st=>({id:st.id,name:st.name})),hPlant:m,fps:x,phases:mt}}e.embed||Object.assign(window,{__footAudit:Pn}),e.embed&&o.rule.enable();const Xn=new Map;J.onSeek(()=>Xn.clear()),J.onLoop(()=>Xn.clear());const Gi=new H;let si=0;const vi=e.sfx?K2(v.flights):[];let Hi=0;o.scene.add(a);const ri=(Tt,x)=>{var mt,st,ht,pt,wt;J.advance(Tt);const m=J.t,F=J.playing?Tt:0,L=v.attachTo(m),S=Ba({t:m,holderId:L,holderRoot:L?Gt.get(L):null,holderHeading:L?vt.get(L):0,ballStart:Z,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos,V=new Set;L&&V.add(L);for(const[X,at]of Jt)at.some(ot=>Math.abs(m-ot)<=JC)&&V.add(X);for(const X of s.players){const at=v.moves[X.id]??[];for(let gt=0;gt<Cl;gt++)Qt[gt].set(X.id,((mt=zn(at,m+YC*gt/(Cl-1)))==null?void 0:mt.pos)??X.start);const ot=zn(at,m);Ot.set(X.id,ot?Math.hypot(ot.vel[0],ot.vel[1]):0)}const q=me.step(Ee,Qt,V,P0*_,m,F,Ot);for(const X of s.players){const at=k.get(X.id);let ot=X.start,gt=0;const St=zn(v.moves[X.id]??[],m);St&&(ot=St.pos,gt=St.speed);const It=ou(v.dives,v.moves[X.id],X.id,m),Ht=It!==null&&NT(v.dives,v.moves[X.id],X.id,m);if(It&&(ot=It),It&&!Ht){const ue=ou(v.dives,v.moves[X.id],X.id,m-.008333333333333333);ue&&(gt=Math.hypot(It[0]-ue[0],It[1]-ue[1])*120)}const ae=q.get(X.id);ae&&(ae[0]||ae[1])&&(ot=[ot[0]+ae[0],ot[1]+ae[1]]),at.root.position.copy(D(ot));const ne=v.moves[X.id]??[],Bt=Ht?0:g1(ne,m+zp);at.root.rotation.x=0,at.root.rotation.z=0,Ht||(at.root.position.y-=v1(ne,m)-oR(v.bounces,X.id,m)*_),Gt.set(X.id,ot);let ie=null,oe=!1;const be=m+qa/2;for(const ue of v.faces)ue.player===X.id&&be>=ue.t0&&(ie=ue.until===void 0||be<=ue.until?ue.at:null,ue.lock&&m>=ue.lock[0]&&m<=ue.lock[1]&&(oe=!0));const bt=ie!==null&&Fi(ot,ie),Yt=R1(ot,S,bt,X.id===L),Ie=bt?Pe(ot,ie):Yt??vt.get(X.id),{h:xe,clipYaw:ze}=re.step(X.id,m,F,gt,Ie,oe,!bt&&Yt!==null);at.root.rotation.y=y1(xe,ze);const We=It?gt:St?Math.hypot(St.vel[0],St.vel[1]):0;Mt(X.id,at,m,F,We,ze);const ge=Ql(at);if(ge.length){const ue=ee.tilt(X.id,Ht?[0,0]:p1(ne,m+zp),vt.get(X.id),Bt,F);Vp(at.root,ge[0],ue.pitch,0,ue.roll)}const jt=Ig(at);if(jt.length){const ue=Lt(X.id,m),Te=!Ht&&qR((ue==null?void 0:ue.clip)??null,ue?(st=r.clips[ue.clip])==null?void 0:st.category:void 0,jR(ne,m));Ft.pose(X.id,at.root,jt,m,F,Te,_),xi&&xi.set(X.id,[Te?1:0,Ft.offset(X.id),Ft.held(X.id),gt,Ft.rootSpeed(X.id)])}const le=ct.get(X.id);le.position.x=at.root.position.x,le.position.z=at.root.position.z;const Se=yt.get(X.id);if(Se&&(J.playing&&(Rt??(Rt=x)),Se.position.x=le.position.x,Se.position.z=le.position.z,Se.visible=pP(Rt,x,e.markSeconds)),X.id===L){const ue=W2(v.arrivals,X.id,m),Te=ue>=0?Pg(at)[ue]:void 0;if(Te){at.root.updateMatrixWorld(!0);const Fe=Te.matrixWorld.elements;Gi.set(Fe[12],Fe[13],Fe[14]),si=N0(v.arrivals,v.departures,X.id,m)}}}const $=Ba({t:m,holderId:L,holderRoot:L?Gt.get(L):null,holderHeading:L?vt.get(L):0,ballStart:Z,flights:v.flights,departures:v.departures,arrivals:v.arrivals});Q.position.copy(D($.pos,.11*_+$.height)),si>0&&(Q.position.lerp(Gi,si),si=0),ut&&ft.update({pos:Q.position,height:$.height,t:m,dt:F,apex:$.apex,speed:$.speed,held:L!==null&&j2(v.arrivals,v.departures,L,m)});for(let X=0;X<xt.length;X++){const at=(ht=s.balls)==null?void 0:ht[X],ot=at?v.ballSwaps.find(It=>It.take===X):v.ballSwaps[X-(((pt=s.balls)==null?void 0:pt.length)??0)],gt=at?!(ot&&m>=ot.t):m>=ot.t;if(xt[X].visible=gt,!gt){Pt[X].hide();continue}let St;at?at.carrier&&Gt.has(at.carrier)?St=Qn(Gt.get(at.carrier),vt.get(at.carrier)??0):St=$g(at,m):St=ot.drop,xt[X].position.copy(D(St,.11*_)),Pt[X].update({pos:xt[X].position,height:0,t:m,dt:F,held:!1,speed:0})}e.sfx&&(Ke(e.sfx,vi,Hi,m,J.playing,$.height,$.soundSpeed),Hi=m),_t.update(m,o.camera),U.update(m);for(const X of s.players){const at=k.get(X.id),ot=Cg(at);if(!ot)continue;const gt=jw(v.faces,X.id,m),St=gt?D(gt):Q.position,It=rt.scan(X.id,m,!Lt(X.id,m)&&X.id!==L&&X.role!=="keeper"),Ht=M1(Math.atan2(St.x-at.root.position.x,St.z-at.root.position.z)-vt.get(X.id)+T1(Et.get(X.id)??0)+It.yaw,58*Math.PI/180+It.env*(lC-58*Math.PI/180),.85+.15*It.env);let ae=Xn.get(X.id);ae||Xn.set(X.id,ae={yaw:Ht,vel:0});const ne=pC(ae,Ht,F),Bt=Ql(at),ie=Bt.length>1?ee.shoulder(X.id,ne,F):0;Bt.length>1&&Vp(at.root,Bt[1],0,ie,0),KC(ot,-(ne-ie))}const et=[...k.values()].map(X=>new H(X.root.position.x,0,X.root.position.z)),nt=o.rule.snap()?1/0:Tt,lt=x/1e3;if(zt==="broadcast"){let X=-1/0;for(const ot of v.departures)m>=ot.contact&&ot.contact>X&&(X=ot.contact);X!==I&&(I=X,G=s.players.filter(ot=>D(Gt.get(ot.id)??ot.start).distanceTo(Q.position)<=YI).map(ot=>ot.id)),!Vt||nt===1/0?(_e.copy(Q.position),Vt=!0):_e.lerp(Q.position,Y0(Tt,qI));const at=G.length?G.map(ot=>{const gt=k.get(ot);return new H((gt==null?void 0:gt.root.position.x)??0,0,(gt==null?void 0:gt.root.position.z)??0)}):et;Ct.frame([...at,Q.position.clone()],nt,{now:lt,lookAt:_e.clone(),elevDeg:KI,azDeg:$I})}else{const[X]=QI(m),at=(ot,gt,St)=>{var Ht;const It=[];for(let ae=ot;ae<=ot+Z0+1e-9;ae+=gr){const ne=new Map;for(const be of s.players){const bt=((Ht=zn(v.moves[be.id]??[],ae))==null?void 0:Ht.pos)??be.start;ne.set(be.id,bt);const Yt=D(bt);St==null||St.push(new H(Yt.x,0,Yt.z)),Math.abs(Yt.x)<=s.pitch.width/2&&Math.abs(Yt.z)<=s.pitch.length/2&&It.push(new H(Yt.x,0,Yt.z))}const Bt=v.attachTo(ae),ie=Ba({t:ae,holderId:Bt,holderRoot:Bt?ne.get(Bt)??null:null,holderHeading:Bt?vt.get(Bt)??0:0,ballStart:Z,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),oe=D(ie.pos);It.push(new H(oe.x,0,oe.z))}gt.copy(nP(It,Wt))};X!==Xt&&(Xt=X,Ae=[],at(X,Le,Ae),Zt===X&&Le.copy(Kt),at(X+gr,Kt,null),Zt=X+gr),j.lerpVectors(Le,Kt,Math.min(Math.max((m-X)/gr,0),1)),et.push(...Ae),et.push(...c,...W),Ct.elevNow>=pm&&et.push(...M),Ct.frame([...et,Q.position.clone()],nt,{now:lt,breath:j})}tt.tick(x),fP(!!e.embed,`t ${m.toFixed(1)}s  fps ${tt.avg.toFixed(0)}
[space] play/pause  [r] restart`),(wt=e.onFrame)==null||wt.call(e,m,x)};o.start(ri);const Vi=Tt=>{Tt.code==="Space"&&(J.playing?J.pause():J.play()),Tt.code==="KeyR"&&J.seek(0)};e.embed||addEventListener("keydown",Vi);function rs(Tt){Tt!==zt&&(zt=Tt,C(!0),o.setSky(Tt==="broadcast"),z(Tt==="broadcast"),Vt=!1,I=-1/0,o.rule.wake())}function Ns(Tt,x=Ct.az){Tt===Ct.elev&&x===Ct.az||(Ct.setElev(Tt),Ct.setAz(x),T=Nl(y(Tt),o.camera,o.size().height,Tt,x),R=_m(Tt),Ut(),o.rule.wake())}return ro.build=performance.now()-n-ro.clips-ro.schedule,{timeline:J,step:Tt=>o.step(Tt),stage:o,overlays:_t,setCamera:Ns,setFollow:rs,setPushIn:Tt=>Ct.armPushIn(Tt,performance.now()/1e3),dispose(){removeEventListener("keydown",Vi),yn(),Xe&&(cancelAnimationFrame(Xe),Xe=0),o.scene.remove(a),LE(a,[...B.map(x=>x.root),Q,...xt,...A]),N==null||N.dispose();const Tt=()=>{o.setFog(null),o.setHorizon(null),o.setSky(!0)};e.stage?o.park(ri)&&Tt():(Tt(),o.dispose())}}}export{lc as $,_n as A,Ps as B,Z1 as C,zP as D,aT as E,ru as F,fa as G,Jl as H,Ag as I,cT as J,ao as K,dT as L,ha as M,Ne as N,fi as O,Sg as P,_0 as Q,mT as R,$f as S,pT as T,CT as U,hl as V,IP as W,Ld as X,hi as Y,ul as Z,MP as _,Bi as a,Bl as a$,r0 as a0,zd as a1,TR as a2,Fd as a3,sg as a4,Vd as a5,o0 as a6,Oa as a7,Tf as a8,PA as a9,Ug as aA,Ng as aB,qf as aC,Og as aD,Bg as aE,Vb as aF,rb as aG,je as aH,Re as aI,zm as aJ,LE as aK,a1 as aL,qm as aM,He as aN,TP as aO,Au as aP,o1 as aQ,In as aR,wP as aS,_g as aT,EP as aU,Ve as aV,tn as aW,AP as aX,rc as aY,Pu as aZ,Hb as a_,Cf as aa,CP as ab,yA as ac,H as ad,cP as ae,$0 as af,pc as ag,nc as ah,Lr as ai,Pr as aj,ic as ak,Ba as al,ou as am,zn as an,uP as ao,xn as ap,$t as aq,Km as ar,RP as as,ye as at,Va as au,Ds as av,Lg as aw,YE as ax,Mg as ay,ac as az,FP as b,is as b0,BP as b1,PE as c,UP as d,Rg as e,OP as f,DP as g,ro as h,LP as i,dn as j,bn as k,TS as l,SP as m,$l as n,PP as o,NP as p,te as q,GP as r,Q1 as s,kP as t,Qn as u,Pe as v,fT as w,hT as x,vT as y,pl as z};
