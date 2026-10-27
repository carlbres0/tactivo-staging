var _0=Object.defineProperty;var b0=(i,t,e)=>t in i?_0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pe=(i,t,e)=>b0(i,typeof t!="symbol"?t+"":t,e);const v0="modulepreload",x0=function(i,t){return new URL(i,t).href},Bu={},y0=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(e.map(h=>{if(h=x0(h,n),h in Bu)return;Bu[h]=!0;const l=h.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!n)for(let v=a.length-1;v>=0;v--){const g=a[v];if(g.href===h&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const _=document.createElement("link");if(_.rel=l?"stylesheet":v0,l||(_.as="script"),_.crossOrigin="",_.href=h,u&&_.setAttribute("nonce",u),document.head.appendChild(_),l)return new Promise((v,g)=>{_.addEventListener("load",v),_.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gu="attached",M0="detached";const qe="srgb",En="srgb-linear",ya="linear",Ve="srgb";const zu="300 es";class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hu=1234567;const Xr=Math.PI/180,lr=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[t&255]+_n[t>>8&255]+"-"+_n[t>>16&15|64]+_n[t>>24&255]+"-"+_n[e&63|128]+_n[e>>8&255]+"-"+_n[e>>16&255]+_n[e>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Jl(i,t){return(i%t+t)%t}function S0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function A0(i,t,e){return i!==t?(e-i)/(t-i):0}function qr(i,t,e){return(1-e)*i+e*t}function E0(i,t,e,n){return qr(i,t,1-Math.exp(-e*n))}function T0(i,t=1){return t-Math.abs(Jl(i,t*2)-t)}function w0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function R0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function C0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function I0(i,t){return i+Math.random()*(t-i)}function P0(i){return i*(.5-Math.random())}function L0(i){i!==void 0&&(Hu=i);let t=Hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function D0(i){return i*Xr}function F0(i){return i*lr}function N0(i){return(i&i-1)===0&&i!==0}function U0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function k0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*d,a*u);break;case"YZY":i.set(c*d,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*d,a*h,a*u);break;case"XZX":i.set(a*h,c*_,c*p,a*u);break;case"YXY":i.set(c*p,a*h,c*_,a*u);break;case"ZYZ":i.set(c*_,c*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const im={DEG2RAD:Xr,RAD2DEG:lr,generateUUID:ai,clamp:Se,euclideanModulo:Jl,mapLinear:S0,inverseLerp:A0,lerp:qr,damp:E0,pingpong:T0,smoothstep:w0,smootherstep:R0,randInt:C0,randFloat:I0,randFloatSpread:P0,seededRandom:L0,degToRad:D0,radToDeg:F0,isPowerOfTwo:N0,ceilPowerOfTwo:U0,floorPowerOfTwo:k0,setQuaternionFromProperEuler:O0,normalize:He,denormalize:ii};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t,e,n,s,r,o,a,c,u){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],p=n[5],_=n[8],v=s[0],g=s[3],f=s[6],x=s[1],M=s[4],y=s[7],w=s[2],T=s[5],R=s[8];return r[0]=o*v+a*x+c*w,r[3]=o*g+a*M+c*T,r[6]=o*f+a*y+c*R,r[1]=u*v+h*x+l*w,r[4]=u*g+h*M+l*T,r[7]=u*f+h*y+l*R,r[2]=d*v+p*x+_*w,r[5]=d*g+p*M+_*T,r[8]=d*f+p*y+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,d=a*c-h*r,p=u*r-o*c,_=e*l+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=l*v,t[1]=(s*u-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*c-u*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tc.makeScale(t,e)),this}rotate(t){return this.premultiply(tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new _e;function sm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function B0(){const i=Zr("canvas");return i.style.display="block",i}const Vu={};function er(i){i in Vu||(Vu[i]=!0,console.warn(i))}function G0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function z0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function H0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wu=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ju=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V0(){const i={enabled:!0,workingColorSpace:En,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ve&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ve&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?ya:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[En]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:Wu,fromXYZ:ju,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:Ve,toXYZ:Wu,fromXYZ:ju,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}const Le=V0();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Is;class W0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Is===void 0&&(Is=Zr("canvas")),Is.width=t.width,Is.height=t.height;const n=Is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let j0=0;class rm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ec(s[o].image)):r.push(ec(s[o]))}else r=ec(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?W0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let X0=0;class an extends Ts{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=an.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ai(),this.name="",this.source=new rm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=300;an.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],p=c[5],_=c[9],v=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+v)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,y=(p+1)/2,w=(f+1)/2,T=(h+d)/4,R=(l+v)/4,P=(_+g)/4;return M>y&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=R/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=P/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-_)*(g-_)+(l-v)*(l-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(l-v)/x,this.z=(d-h)/x,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q0 extends Ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Es extends q0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class om extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class K0 extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(l!==v||c!==d||u!==p||h!==_){let g=1-a;const f=c*d+u*p+h*_+l*v,x=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const w=Math.sqrt(M),T=Math.atan2(w,f*x);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const y=a*x;if(c=c*g+d*y,u=u*g+p*y,h=h*g+_*y,l=l*g+v*y,g===1-a){const w=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=w,u*=w,h*=w,l*=w}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*l+c*p-u*d,t[e+1]=c*_+h*d+u*l-a*p,t[e+2]=u*_+h*p+a*d-c*l,t[e+3]=h*_-a*l-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*l+u*p*_,this._y=u*p*l-d*h*_,this._z=u*h*_+d*p*l,this._w=u*h*l-d*p*_;break;case"YXZ":this._x=d*h*l+u*p*_,this._y=u*p*l-d*h*_,this._z=u*h*_-d*p*l,this._w=u*h*l+d*p*_;break;case"ZXY":this._x=d*h*l-u*p*_,this._y=u*p*l+d*h*_,this._z=u*h*_+d*p*l,this._w=u*h*l-d*p*_;break;case"ZYX":this._x=d*h*l-u*p*_,this._y=u*p*l+d*h*_,this._z=u*h*_-d*p*l,this._w=u*h*l+d*p*_;break;case"YZX":this._x=d*h*l+u*p*_,this._y=u*p*l+d*h*_,this._z=u*h*_-d*p*l,this._w=u*h*l-d*p*_;break;case"XZY":this._x=d*h*l-u*p*_,this._y=u*p*l-d*h*_,this._z=u*h*_+d*p*l,this._w=u*h*l+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+a+l;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>l){const p=2*Math.sqrt(1+n-a-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>l){const p=2*Math.sqrt(1+a-n-l);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,e=0,n=0){H.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new H,Xu=new sn;class gn{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),uo.subVectors(this.max,Sr),Ps.subVectors(t.a,Sr),Ls.subVectors(t.b,Sr),Ds.subVectors(t.c,Sr),ji.subVectors(Ls,Ps),Xi.subVectors(Ds,Ls),os.subVectors(Ps,Ds);let e=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-os.z,os.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,os.z,0,-os.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-os.y,os.x,0];return!ic(e,Ps,Ls,Ds,uo)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,Ps,Ls,Ds,uo))?!1:(ho.crossVectors(ji,Xi),e=[ho.x,ho.y,ho.z],ic(e,Ps,Ls,Ds,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new H,new H,new H,new H,new H,new H,new H,new H],Jn=new H,lo=new gn,Ps=new H,Ls=new H,Ds=new H,ji=new H,Xi=new H,os=new H,Sr=new H,uo=new H,ho=new H,as=new H;function ic(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){as.fromArray(i,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),c=t.dot(as),u=e.dot(as),h=n.dot(as);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const $0=new gn,Ar=new H,sc=new H;class qn{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(sc)),this.expandByPoint(Ar.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new H,rc=new H,fo=new H,qi=new H,oc=new H,po=new H,ac=new H;class Ba{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,e),wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(rc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fo),a=qi.dot(this.direction),c=-qi.dot(fo),u=qi.lengthSq(),h=Math.abs(1-o*o);let l,d,p,_;if(h>0)if(l=o*c-a,d=o*a-c,_=r*h,l>=0)if(d>=-_)if(d<=_){const v=1/h;l*=v,d*=v,p=l*(l+o*d+2*a)+d*(o*l+d+2*c)+u}else d=r,l=Math.max(0,-(o*d+a)),p=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(o*d+a)),p=-l*l+d*(d+2*c)+u;else d<=-_?(l=Math.max(0,-(-o*r+a)),d=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u):d<=_?(l=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(l=Math.max(0,-(o*r+a)),d=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u);else d=o>0?-r:r,l=Math.max(0,-(o*d+a)),p=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(rc).addScaledVector(fo,d),p}intersectSphere(t,e){wi.subVectors(t.center,this.origin);const n=wi.dot(this.direction),s=wi.dot(wi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(a=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,e,n,s,r){oc.subVectors(e,t),po.subVectors(n,t),ac.crossVectors(oc,po);let o=this.direction.dot(ac),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const c=a*this.direction.dot(po.crossVectors(qi,po));if(c<0)return null;const u=a*this.direction.dot(oc.cross(qi));if(u<0||c+u>o)return null;const h=-a*qi.dot(ac);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,c,u,h,l,d,p,_,v,g){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,d,p,_,v,g)}set(t,e,n,s,r,o,a,c,u,h,l,d,p,_,v,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=h,f[10]=l,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Fs.setFromMatrixColumn(t,0).length(),r=1/Fs.setFromMatrixColumn(t,1).length(),o=1/Fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*l,_=a*h,v=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=p+_*u,e[5]=d-v*u,e[9]=-a*c,e[2]=v-d*u,e[6]=_+p*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*l,_=u*h,v=u*l;e[0]=d+v*a,e[4]=_*a-p,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*l,_=u*h,v=u*l;e[0]=d-v*a,e[4]=-o*l,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*l,_=a*h,v=a*l;e[0]=c*h,e[4]=_*u-p,e[8]=d*u+v,e[1]=c*l,e[5]=v*u+d,e[9]=p*u-_,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*u,_=a*c,v=a*u;e[0]=c*h,e[4]=v-d*l,e[8]=_*l+p,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=p*l+_,e[10]=d-v*l}else if(t.order==="XZY"){const d=o*c,p=o*u,_=a*c,v=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+v,e[5]=o*h,e[9]=p*l-_,e[2]=_*l-p,e[6]=a*h,e[10]=v*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Y0,t,Z0)}lookAt(t,e,n){const s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ki.crossVectors(n,Pn),Ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ki.crossVectors(n,Pn)),Ki.normalize(),mo.crossVectors(Pn,Ki),s[0]=Ki.x,s[4]=mo.x,s[8]=Pn.x,s[1]=Ki.y,s[5]=mo.y,s[9]=Pn.y,s[2]=Ki.z,s[6]=mo.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],p=n[13],_=n[2],v=n[6],g=n[10],f=n[14],x=n[3],M=n[7],y=n[11],w=n[15],T=s[0],R=s[4],P=s[8],A=s[12],E=s[1],L=s[5],k=s[9],N=s[13],B=s[2],G=s[6],U=s[10],z=s[14],O=s[3],Z=s[7],Y=s[11],lt=s[15];return r[0]=o*T+a*E+c*B+u*O,r[4]=o*R+a*L+c*G+u*Z,r[8]=o*P+a*k+c*U+u*Y,r[12]=o*A+a*N+c*z+u*lt,r[1]=h*T+l*E+d*B+p*O,r[5]=h*R+l*L+d*G+p*Z,r[9]=h*P+l*k+d*U+p*Y,r[13]=h*A+l*N+d*z+p*lt,r[2]=_*T+v*E+g*B+f*O,r[6]=_*R+v*L+g*G+f*Z,r[10]=_*P+v*k+g*U+f*Y,r[14]=_*A+v*N+g*z+f*lt,r[3]=x*T+M*E+y*B+w*O,r[7]=x*R+M*L+y*G+w*Z,r[11]=x*P+M*k+y*U+w*Y,r[15]=x*A+M*N+y*z+w*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],p=t[14],_=t[3],v=t[7],g=t[11],f=t[15];return _*(+r*c*l-s*u*l-r*a*d+n*u*d+s*a*p-n*c*p)+v*(+e*c*p-e*u*d+r*o*d-s*o*p+s*u*h-r*c*h)+g*(+e*u*l-e*a*p-r*o*l+n*o*p+r*a*h-n*u*h)+f*(-s*a*h-e*c*l+e*a*d+s*o*l-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],p=t[11],_=t[12],v=t[13],g=t[14],f=t[15],x=l*g*u-v*d*u+v*c*p-a*g*p-l*c*f+a*d*f,M=_*d*u-h*g*u-_*c*p+o*g*p+h*c*f-o*d*f,y=h*v*u-_*l*u+_*a*p-o*v*p-h*a*f+o*l*f,w=_*l*c-h*v*c-_*a*d+o*v*d+h*a*g-o*l*g,T=e*x+n*M+s*y+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=x*R,t[1]=(v*d*r-l*g*r-v*s*p+n*g*p+l*s*f-n*d*f)*R,t[2]=(a*g*r-v*c*r+v*s*u-n*g*u-a*s*f+n*c*f)*R,t[3]=(l*c*r-a*d*r-l*s*u+n*d*u+a*s*p-n*c*p)*R,t[4]=M*R,t[5]=(h*g*r-_*d*r+_*s*p-e*g*p-h*s*f+e*d*f)*R,t[6]=(_*c*r-o*g*r-_*s*u+e*g*u+o*s*f-e*c*f)*R,t[7]=(o*d*r-h*c*r+h*s*u-e*d*u-o*s*p+e*c*p)*R,t[8]=y*R,t[9]=(_*l*r-h*v*r-_*n*p+e*v*p+h*n*f-e*l*f)*R,t[10]=(o*v*r-_*a*r+_*n*u-e*v*u-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*p-e*a*p)*R,t[12]=w*R,t[13]=(h*v*s-_*l*s+_*n*d-e*v*d-h*n*g+e*l*g)*R,t[14]=(_*a*s-o*v*s-_*n*c+e*v*c+o*n*g-e*a*g)*R,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,d=r*u,p=r*h,_=r*l,v=o*h,g=o*l,f=a*l,x=c*u,M=c*h,y=c*l,w=n.x,T=n.y,R=n.z;return s[0]=(1-(v+f))*w,s[1]=(p+y)*w,s[2]=(_-M)*w,s[3]=0,s[4]=(p-y)*T,s[5]=(1-(d+f))*T,s[6]=(g+x)*T,s[7]=0,s[8]=(_+M)*R,s[9]=(g-x)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Fs.set(s[0],s[1],s[2]).length();const o=Fs.set(s[4],s[5],s[6]).length(),a=Fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qn.copy(this);const u=1/r,h=1/o,l=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=l,Qn.elements[9]*=l,Qn.elements[10]*=l,e.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let p,_;if(a===2e3)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===2001)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),d=(e+t)*u,p=(n+s)*h;let _,v;if(a===2e3)_=(o+r)*l,v=-2*l;else if(a===2001)_=r*l,v=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fs=new H,Qn=new ae,Y0=new H(0,0,0),Z0=new H(1,1,1),Ki=new H,mo=new H,Pn=new H,qu=new ae,Ku=new sn;class Xn{constructor(t=0,e=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J0=0;const $u=new H,Ns=new sn,Ri=new ae,go=new H,Er=new H,Q0=new H,t_=new sn,Yu=new H(1,0,0),Zu=new H(0,1,0),Ju=new H(0,0,1),Qu={type:"added"},e_={type:"removed"},Us={type:"childadded",child:null},cc={type:"childremoved",child:null};class Ke extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new H,e=new Xn,n=new sn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new _e}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Yu,t)}rotateY(t){return this.rotateOnAxis(Zu,t)}rotateZ(t){return this.rotateOnAxis(Ju,t)}translateOnAxis(t,e){return $u.copy(t).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yu,t)}translateY(t){return this.translateOnAxis(Zu,t)}translateZ(t){return this.translateOnAxis(Ju,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Er,go,this.up):Ri.lookAt(go,Er,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(Ri),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qu),Us.child=t,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(e_),cc.child=t,this.dispatchEvent(cc),cc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qu),Us.child=t,this.dispatchEvent(Us),Us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Q0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),d=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new H(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new H,Ci=new H,lc=new H,Ii=new H,ks=new H,Os=new H,th=new H,uc=new H,hc=new H,dc=new H,fc=new ve,pc=new ve,mc=new ve;class Vn{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),Ci.subVectors(n,e),lc.subVectors(t,e);const o=ti.dot(ti),a=ti.dot(Ci),c=ti.dot(lc),u=Ci.dot(Ci),h=Ci.dot(lc),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const d=1/l,p=(u*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ii.x),c.addScaledVector(o,Ii.y),c.addScaledVector(a,Ii.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return fc.setScalar(0),pc.setScalar(0),mc.setScalar(0),fc.fromBufferAttribute(t,e),pc.fromBufferAttribute(t,n),mc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fc,r.x),o.addScaledVector(pc,r.y),o.addScaledVector(mc,r.z),o}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),Ci.subVectors(t,e),ti.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ti.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ks.subVectors(s,n),Os.subVectors(r,n),uc.subVectors(t,n);const c=ks.dot(uc),u=Os.dot(uc);if(c<=0&&u<=0)return e.copy(n);hc.subVectors(t,s);const h=ks.dot(hc),l=Os.dot(hc);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ks,o);dc.subVectors(t,r);const p=ks.dot(dc),_=Os.dot(dc);if(_>=0&&p<=_)return e.copy(r);const v=p*u-c*_;if(v<=0&&u>=0&&_<=0)return a=u/(u-_),e.copy(n).addScaledVector(Os,a);const g=h*_-p*l;if(g<=0&&l-h>=0&&p-_>=0)return th.subVectors(r,s),a=(l-h)/(l-h+(p-_)),e.copy(s).addScaledVector(th,a);const f=1/(g+v+d);return o=v*f,a=d*f,e.copy(n).addScaledVector(ks,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},_o={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Jl(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=gc(o,r,t+1/3),this.g=gc(o,r,t),this.b=gc(o,r,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const n=cm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Le.fromWorkingColorSpace(bn.copy(this),t),Math.round(Se(bn.r*255,0,255))*65536+Math.round(Se(bn.g*255,0,255))*256+Math.round(Se(bn.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(bn.copy(this),e);const n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=qe){Le.fromWorkingColorSpace(bn.copy(this),t);const e=bn.r,n=bn.g,s=bn.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(_o);const n=qr($i.h,_o.h,e),s=qr($i.s,_o.s,e),r=qr($i.l,_o.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new ie;ie.NAMES=cm;let n_=0;class Wn extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new H,bo=new ee;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class lm extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class um extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ye extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let i_=0;const Bn=new ae,_c=new Ke,Bs=new H,Ln=new gn,Tr=new gn,hn=new H;class Ze extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sm(t)?um:lm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new _e().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Ln.min,Tr.min),Ln.expandByPoint(hn),hn.addVectors(Ln.max,Tr.max),Ln.expandByPoint(hn)):(Ln.expandByPoint(Tr.min),Ln.expandByPoint(Tr.max))}Ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)hn.fromBufferAttribute(a,u),c&&(Bs.fromBufferAttribute(t,u),hn.add(Bs)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new H,c[P]=new H;const u=new H,h=new H,l=new H,d=new ee,p=new ee,_=new ee,v=new H,g=new H;function f(P,A,E){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),l.fromBufferAttribute(n,E),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,E),h.sub(u),l.sub(u),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(l,-p.y).multiplyScalar(L),g.copy(l).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),a[P].add(v),a[A].add(v),a[E].add(v),c[P].add(g),c[A].add(g),c[E].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,A=x.length;P<A;++P){const E=x[P],L=E.start,k=E.count;for(let N=L,B=L+k;N<B;N+=3)f(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new H,y=new H,w=new H,T=new H;function R(P){w.fromBufferAttribute(s,P),T.copy(w);const A=a[P];M.copy(A),M.sub(w.multiplyScalar(w.dot(A))).normalize(),y.crossVectors(T,A);const L=y.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,A=x.length;P<A;++P){const E=x[P],L=E.start,k=E.count;for(let N=L,B=L+k;N<B;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new H,r=new H,o=new H,a=new H,c=new H,u=new H,h=new H,l=new H;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,d=new u.constructor(c.length*h);let p=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let f=0;f<h;f++)d[_++]=u[p++]}return new Ne(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const d=u[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const p=u[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,p=l.length;d<p;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new ae,cs=new Ba,vo=new qn,nh=new H,xo=new H,yo=new H,Mo=new H,bc=new H,So=new H,ih=new H,Ao=new H;class Ae extends Ke{constructor(t=new Ze,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){So.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(bc.fromBufferAttribute(l,t),o?So.addScaledVector(bc,h):So.addScaledVector(bc.sub(e),h))}e.add(So)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(r),cs.copy(t.ray).recast(t.near),!(vo.containsPoint(cs.origin)===!1&&(cs.intersectSphere(vo,nh)===null||cs.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),cs.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const g=d[_],f=o[g.materialIndex],x=Math.max(g.start,p.start),M=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,w=M;y<w;y+=3){const T=a.getX(y),R=a.getX(y+1),P=a.getX(y+2);s=Eo(this,f,t,n,u,h,l,T,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,f=v;g<f;g+=3){const x=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=Eo(this,o,t,n,u,h,l,x,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const g=d[_],f=o[g.materialIndex],x=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,w=M;y<w;y+=3){const T=y,R=y+1,P=y+2;s=Eo(this,f,t,n,u,h,l,T,R,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=_,f=v;g<f;g+=3){const x=g,M=g+1,y=g+2;s=Eo(this,o,t,n,u,h,l,x,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function s_(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Ao);return u<e.near||u>e.far?null:{distance:u,point:Ao.clone(),object:i}}function Eo(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,xo),i.getVertexPosition(c,yo),i.getVertexPosition(u,Mo);const h=s_(i,t,e,n,xo,yo,Mo,ih);if(h){const l=new H;Vn.getBarycoord(ih,xo,yo,Mo,l),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,c,u,l,new ee)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,a,c,u,l,new ee)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,c,u,l,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new H,materialIndex:0};Vn.getNormal(xo,yo,Mo,d.normal),h.face=d,h.barycoord=l}return h}class Gi extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let d=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(u,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(l,2));function _(v,g,f,x,M,y,w,T,R,P,A){const E=y/R,L=w/P,k=y/2,N=w/2,B=T/2,G=R+1,U=P+1;let z=0,O=0;const Z=new H;for(let Y=0;Y<U;Y++){const lt=Y*L-N;for(let Et=0;Et<G;Et++){const kt=Et*E-k;Z[v]=kt*x,Z[g]=lt*M,Z[f]=B,u.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),l.push(Et/R),l.push(1-Y/P),z+=1}}for(let Y=0;Y<P;Y++)for(let lt=0;lt<R;lt++){const Et=d+lt+G*Y,kt=d+lt+G*(Y+1),it=d+(lt+1)+G*(Y+1),bt=d+(lt+1)+G*Y;c.push(Et,kt,bt),c.push(kt,it,bt),O+=6}a.addGroup(p,O,A),p+=O,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function yn(i){const t={};for(let e=0;e<i.length;e++){const n=ur(i[e]);for(const s in n)t[s]=n[s]}return t}function r_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Ql={clone:ur,merge:yn};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=r_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dm extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,sh=new ee,rh=new ee;class Sn extends dm{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gs=-90,zs=1;class c_ extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(Gs,zs,t,e);s.layers=this.layers,this.add(s);const r=new Sn(Gs,zs,t,e);r.layers=this.layers,this.add(r);const o=new Sn(Gs,zs,t,e);o.layers=this.layers,this.add(o);const a=new Sn(Gs,zs,t,e);a.layers=this.layers,this.add(a);const c=new Sn(Gs,zs,t,e);c.layers=this.layers,this.add(c);const u=new Sn(Gs,zs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fm extends an{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class l_ extends Es{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new fm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gi(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Ae(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new c_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class tu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new tu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class u_ extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xn=new H;class si{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ii(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ii(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ii(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ii(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new si(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pm extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const wr=new H,Vs=new H,Ws=new H,js=new ee,Rr=new ee,mm=new ae,To=new H,Cr=new H,wo=new H,oh=new ee,vc=new ee,ah=new ee;class h_ extends Ke{constructor(t=new pm){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eu(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new si(n,3,0,!1)),Hs.setAttribute("uv",new si(n,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new ee(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),mm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ro(To.set(-.5,-.5,0),Ws,o,Vs,s,r),Ro(Cr.set(.5,-.5,0),Ws,o,Vs,s,r),Ro(wo.set(.5,.5,0),Ws,o,Vs,s,r),oh.set(0,0),vc.set(1,0),ah.set(1,1);let a=t.ray.intersectTriangle(To,Cr,wo,!1,wr);if(a===null&&(Ro(Cr.set(-.5,.5,0),Ws,o,Vs,s,r),vc.set(0,1),a=t.ray.intersectTriangle(To,wo,Cr,!1,wr),a===null))return;const c=t.ray.origin.distanceTo(wr);c<t.near||c>t.far||e.push({distance:c,point:wr.clone(),uv:Vn.getInterpolation(wr,To,Cr,wo,oh,vc,ah,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ro(i,t,e,n,s,r){js.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Rr.x=r*js.x-s*js.y,Rr.y=s*js.x+r*js.y):Rr.copy(js),i.copy(t),i.x+=Rr.x,i.y+=Rr.y,i.applyMatrix4(mm)}const ch=new H,lh=new ve,uh=new ve,d_=new H,hh=new ae,Co=new H,xc=new qn,dh=new ae,yc=new Ba;class f_ extends Ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new ae,this.bindMatrixInverse=new ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Co),this.boundingBox.expandByPoint(Co)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Co),this.boundingSphere.expandByPoint(Co)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(s),t.ray.intersectsSphere(xc)!==!1&&(dh.copy(s).invert(),yc.copy(t.ray).applyMatrix4(dh),!(this.boundingBox!==null&&yc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,yc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===M0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;lh.fromBufferAttribute(s.attributes.skinIndex,t),uh.fromBufferAttribute(s.attributes.skinWeight,t),ch.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=uh.getComponent(r);if(o!==0){const a=lh.getComponent(r);hh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(d_.copy(ch).applyMatrix4(hh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class gm extends Ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _m extends an{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,d){super(null,o,a,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fh=new ae,p_=new ae;class nu{constructor(t=[],e=[]){this.uuid=ai(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ae)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ae;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:p_;fh.multiplyMatrices(a,e[r]),fh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _m(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gm),this.bones.push(o),this.boneInverses.push(new ae().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Sl extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xs=new ae,ph=new ae,Io=[],mh=new gn,m_=new ae,Ir=new Ae,Pr=new qn;class g_ extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),mh.copy(t.boundingBox).applyMatrix4(Xs),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xs),Pr.copy(t.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pr.copy(this.boundingSphere),Pr.applyMatrix4(n),t.ray.intersectsSphere(Pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),ph.multiplyMatrices(n,Xs),Ir.matrixWorld=ph,Ir.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){const c=Io[o];c.instanceId=r,c.object=this,e.push(c)}Io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _m(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Mc=new H,__=new H,b_=new _e;class gs{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Mc.subVectors(n,e).cross(__.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||b_.getNormalMatrix(t),s=this.coplanarPoint(Mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new qn,Po=new H;class iu{constructor(t=new gs,e=new gs,n=new gs,s=new gs,r=new gs,o=new gs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],p=s[8],_=s[9],v=s[10],g=s[11],f=s[12],x=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,d-u,g-p,y-f).normalize(),n[1].setComponents(c+r,d+u,g+p,y+f).normalize(),n[2].setComponents(c+o,d+h,g+_,y+x).normalize(),n[3].setComponents(c-o,d-h,g-_,y-x).normalize(),n[4].setComponents(c-a,d-l,g-v,y-M).normalize(),e===2e3)n[5].setComponents(c+a,d+l,g+v,y+M).normalize();else if(e===2001)n[5].setComponents(a,l,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bm extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ma=new H,Sa=new H,gh=new ae,Lr=new Ba,Lo=new qn,Sc=new H,_h=new H;class su extends Ke{constructor(t=new Ze,e=new bm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ma.fromBufferAttribute(e,s-1),Sa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ma.distanceTo(Sa);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;gh.copy(s).invert(),Lr.copy(t.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const f=h.getX(v),x=h.getX(v+1),M=Do(this,t,Lr,c,f,x);M&&e.push(M)}if(this.isLineLoop){const v=h.getX(_-1),g=h.getX(p),f=Do(this,t,Lr,c,v,g);f&&e.push(f)}}else{const p=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=u){const f=Do(this,t,Lr,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Do(this,t,Lr,c,_-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Do(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ma.fromBufferAttribute(o,s),Sa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ma,Sa,Sc,_h)>n)return;Sc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sc);if(!(c<t.near||c>t.far))return{distance:c,point:_h.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bh=new H,vh=new H;class v_ extends su{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bh.fromBufferAttribute(e,s),vh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bh.distanceTo(vh);t.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x_ extends su{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ru extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xh=new ae,Al=new Ba,Fo=new qn,No=new H;class vm extends Ke{constructor(t=new Ze,e=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;xh.copy(s).invert(),Al.copy(t.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,v=p;_<v;_++){const g=u.getX(_);No.fromBufferAttribute(l,g),yh(No,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let _=d,v=p;_<v;_++)No.fromBufferAttribute(l,_),yh(No,_,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(i,t,e,n,s,r,o){const a=Al.distanceSqToPoint(i);if(a<e){const c=new H;Al.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vn extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}class In extends an{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xm extends an{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ou extends Ze{constructor(t=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new H,d=new ee,p=new H,_=new H,v=new H;let g=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,_.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(_)}for(let x=0;x<=e;x++){const M=n+x*h*s,y=Math.sin(M),w=Math.cos(M);for(let T=0;T<=t.length-1;T++){l.x=t[T].x*y,l.y=t[T].y,l.z=t[T].x*w,o.push(l.x,l.y,l.z),d.x=x/e,d.y=T/(t.length-1),a.push(d.x,d.y);const R=c[3*T+0]*y,P=c[3*T+1],A=c[3*T+0]*w;u.push(R,P,A)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const y=M+x*t.length,w=y,T=y+t.length,R=y+t.length+1,P=y+1;r.push(w,T,P),r.push(R,P,T)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.points,t.segments,t.phiStart,t.phiLength)}}class Ga extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new H,h=new ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const p=n+l/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jr extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],p=[];let _=0;const v=[],g=n/2;let f=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(p,2));function x(){const y=new H,w=new H;let T=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const A=[],E=P/r,L=E*(e-t)+t;for(let k=0;k<=s;k++){const N=k/s,B=N*c+a,G=Math.sin(B),U=Math.cos(B);w.x=L*G,w.y=-E*n+g,w.z=L*U,l.push(w.x,w.y,w.z),y.set(G,R,U).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-E),A.push(_++)}v.push(A)}for(let P=0;P<s;P++)for(let A=0;A<r;A++){const E=v[A][P],L=v[A+1][P],k=v[A+1][P+1],N=v[A][P+1];(t>0||A!==0)&&(h.push(E,L,N),T+=3),(e>0||A!==r-1)&&(h.push(L,k,N),T+=3)}u.addGroup(f,T,0),f+=T}function M(y){const w=_,T=new ee,R=new H;let P=0;const A=y===!0?t:e,E=y===!0?1:-1;for(let k=1;k<=s;k++)l.push(0,g*E,0),d.push(0,E,0),p.push(.5,.5),_++;const L=_;for(let k=0;k<=s;k++){const B=k/s*c+a,G=Math.cos(B),U=Math.sin(B);R.x=A*U,R.y=g*E,R.z=A*G,l.push(R.x,R.y,R.z),d.push(0,E,0),T.x=G*.5+.5,T.y=U*.5*E+.5,p.push(T.x,T.y),_++}for(let k=0;k<s;k++){const N=w+k,B=L+k;y===!0?h.push(B,B+1,N):h.push(B+1,B,N),P+=3}u.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,d=e/c,p=[],_=[],v=[],g=[];for(let f=0;f<h;f++){const x=f*d-o;for(let M=0;M<u;M++){const y=M*l-r;_.push(y,-x,0),v.push(0,0,1),g.push(M/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const M=x+u*f,y=x+u*(f+1),w=x+1+u*(f+1),T=x+1+u*f;p.push(M,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}class za extends Ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,p=new H,_=new ee;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const f=r+g/n*o;p.x=l*Math.cos(f),p.y=l*Math.sin(f),c.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}l+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let f=0;f<n;f++){const x=f+g,M=x,y=x+n+1,w=x+n+2,T=x+1;a.push(M,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class y_ extends Ze{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new H,r=new H;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,p=l.count;for(let _=d,v=d+p;_<v;_+=3)for(let g=0;g<3;g++){const f=a.getX(_+g),x=a.getX(_+(g+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,x),Mh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),Mh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ye(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Mh(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Hi extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xi extends Hi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qr extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class M_ extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class S_ extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function xs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mm(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function El(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function au(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function A_(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let p=0;p<u.times.length;++p){const _=u.times[p]*s;if(!(_<e||_>=n)){l.push(u.times[p]);for(let v=0;v<h;++v)d.push(u.values[p*h+v])}}l.length!==0&&(u.times=xs(l,u.times.constructor),u.values=xs(d,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function E_(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(f){return f.name===a.name&&f.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const p=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const _=a.times.length-1;let v;if(r<=a.times[0]){const f=h,x=l-h;v=a.values.slice(f,x)}else if(r>=a.times[_]){const f=_*l+h,x=f+l-h;v=a.values.slice(f,x)}else{const f=a.createInterpolant(),x=h,M=l-h;f.evaluate(r),v=f.resultBuffer.slice(x,M)}c==="quaternion"&&new sn().fromArray(v).normalize().conjugate().toArray(v);const g=u.times.length;for(let f=0;f<g;++f){const x=f*p+d;if(c==="quaternion")sn.multiplyQuaternionsFlat(u.values,x,v,0,u.values,x);else{const M=p-d*2;for(let y=0;y<M;++y)u.values[x+y]-=v[y]}}}return i.blendMode=2501,i}const T_={convertArray:xs,isTypedArray:ym,getKeyframeOrder:Mm,sortedArray:El,flattenJSON:au,subclip:A_,makeClipAdditive:E_};class so{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w_ extends so{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),v=_*_,g=v*_,f=-d*g+2*d*v-d*_,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*_+1,M=(-1-p)*g+(1.5+p)*v+.5*_,y=p*g-p*v;for(let w=0;w!==a;++w)r[w]=f*o[h+w]+x*o[u+w]+M*o[c+w]+y*o[l+w];return r}}class Sm extends so{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*l+o[c+d]*h;return r}}class R_ extends so{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class yi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xs(e,this.TimeBufferType),this.values=xs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xs(t.times,Array),values:xs(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new R_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new w_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ym(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,d=l-n,p=l+n;for(let _=0;_!==n;++_){const v=e[l+_];if(v!==e[d+_]||v!==e[p+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[l+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=2301;class mr extends yi{constructor(t,e,n){super(t,e,n)}}mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=2300;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Am extends yi{}Am.prototype.ValueTypeName="color";class hr extends yi{}hr.prototype.ValueTypeName="number";class C_ extends so{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)sn.slerpFlat(r,0,o,u-a,o,u,c);return r}}class dr extends yi{InterpolantFactoryMethodLinear(t){return new C_(this.times,this.values,this.getValueSize(),t)}}dr.prototype.ValueTypeName="quaternion";dr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends yi{constructor(t,e,n){super(t,e,n)}}gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=2300;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends yi{}fr.prototype.ValueTypeName="vector";class Tl{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(P_(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(yi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Mm(c);c=El(c,1,h),u=El(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new hr(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,p,_,v){if(p.length!==0){const g=[],f=[];au(p,g,f,_),g.length!==0&&v.push(new l(d,g,f))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let v=0;v<d[_].morphTargets.length;v++)p[d[_].morphTargets[v]]=-1;for(const v in p){const g=[],f=[];for(let x=0;x!==d[_].morphTargets.length;++x){const M=d[_];g.push(M.time),f.push(M.morphTarget===v?1:0)}s.push(new hr(".morphTargetInfluence["+v+"]",g,f))}c=p.length*o}else{const p=".bones["+e[l].name+"]";n(fr,p+".position",d,"pos",s),n(dr,p+".quaternion",d,"rot",s),n(fr,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function I_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hr;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return Am;case"quaternion":return dr;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function P_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=I_(i.type);if(i.times===void 0){const e=[],n=[];au(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const ts={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class L_{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const p=u[l],_=u[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const D_=new L_;class _r{constructor(t){this.manager=t!==void 0?t:D_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_r.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pi={};class F_ extends Error{constructor(t,e){super(t),this.response=e}}class Em extends _r{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ts.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Pi[t]!==void 0){Pi[t].push({onLoad:e,onProgress:n,onError:s});return}Pi[t]=[],Pi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Pi[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let v=0;const g=new ReadableStream({start(f){x();function x(){l.read().then(({done:M,value:y})=>{if(M)f.close();else{v+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let T=0,R=h.length;T<R;T++){const P=h[T];P.onProgress&&P.onProgress(w)}f.enqueue(y),x()}},M=>{f.error(M)})}}});return new Response(g)}else throw new F_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),d=l&&l[1]?l[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{ts.add(t,u);const h=Pi[t];delete Pi[t];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=Pi[t];if(h===void 0)throw this.manager.itemError(t),u;delete Pi[t];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class N_ extends _r{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ts.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Zr("img");function c(){h(),ts.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class cu extends _r{constructor(t){super(t)}load(t,e,n,s){const r=new an,o=new N_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ro extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class U_ extends ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ac=new ae,Sh=new H,Ah=new H;class lu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iu,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Ac.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ac)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class k_ extends lu{constructor(){super(new Sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class O_ extends ro{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Eh=new ae,Dr=new H,Ec=new H;class B_ extends lu{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Dr),Ec.copy(n.position),Ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ec),n.updateMatrixWorld(),s.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class G_ extends ro{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new B_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class uu extends dm{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class z_ extends lu{constructor(){super(new uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hu extends ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new z_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class H_ extends ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class V_ extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class W_ extends _r{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ts.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return ts.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),ts.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ts.add(t,c),r.manager.itemStart(t)}}class j_ extends Sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class X_{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){sn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;sn.multiplyQuaternionsFlat(t,o,t,e,t,n),sn.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const du="\\[\\]\\.:\\/",q_=new RegExp("["+du+"]","g"),fu="[^"+du+"]",K_="[^"+du.replace("\\.","")+"]",$_=/((?:WC+[\/:])*)/.source.replace("WC",fu),Y_=/(WCOD+)?/.source.replace("WCOD",K_),Z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),J_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),Q_=new RegExp("^"+$_+Y_+Z_+J_+"$"),tb=["material","materials","bones","map"];class eb{constructor(t,e,n){const s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ue{constructor(t,e,n){this.path=e,this.parsedPath=n||Ue.parseTrackName(e),this.node=Ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ue.Composite(t,e,n):new Ue(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(t){const e=Q_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);tb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ue.Composite=eb;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nb{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const ib=new Float32Array(1);class sb extends Ts{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],p=d.name;let _=h[p];if(_!==void 0)++_.referenceCount,o[l]=_;else{if(_=o[l],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,c,p));continue}const v=e&&e._propertyBindings[l].binding.parsedPath;_=new X_(Ue.create(n,p,v),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,c,p),o[l]=_}a[l].resultBuffer=_.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Sm(new Float32Array(2),new Float32Array(2),1,ib),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Tl.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new nb(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Tl.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class wl extends eu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Th=new H,Uo=new H;class Tm{constructor(t=new H,e=new H){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Th.subVectors(t,this.start),Uo.subVectors(this.end,this.start);const n=Uo.dot(Uo);let r=Uo.dot(Th)/n;return e&&(r=Se(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function wh(i,t,e,n){const s=rb(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rb(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wm(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ob(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<l.length;p++){const _=l[d],v=l[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,l[d]=v)}l.length=d+1;for(let p=0,_=l.length;p<_;p++){const v=l[p];i.bufferSubData(u,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
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
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fb=`#ifdef USE_AOMAP
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
#endif`,pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mb=`#ifdef USE_BATCHING
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
#endif`,gb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_b=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xb=`#ifdef USE_IRIDESCENCE
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
#endif`,yb=`#ifdef USE_BUMPMAP
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
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ib=`#define PI 3.141592653589793
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
} // validated`,Pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lb=`vec3 transformedNormal = objectNormal;
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
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kb=`#ifdef USE_GRADIENTMAP
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
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jb=`uniform bool receiveShadow;
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
#endif`,Qb=`#ifdef USE_ENVMAP
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
#endif`,tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sv=`PhysicalMaterial material;
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
#endif`,rv=`struct PhysicalMaterial {
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
}`,ov=`
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
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
#endif`,cv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gv=`#if defined( USE_POINTS_UV )
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
#endif`,_v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
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
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cv=`#ifdef USE_NORMALMAP
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
#endif`,Iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ov=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jv=`float getShadowMask() {
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
}`,Xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qv=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Yv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,ex=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ax=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,fx=`#if DEPTH_PACKING == 3200
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
}`,px=`#define DISTANCE
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
}`,mx=`#define DISTANCE
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
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_x=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`uniform float scale;
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
}`,vx=`uniform vec3 diffuse;
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
}`,xx=`#include <common>
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#define LAMBERT
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
}`,Sx=`#define LAMBERT
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
}`,Ax=`#define MATCAP
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
}`,Ex=`#define MATCAP
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
}`,Tx=`#define NORMAL
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
}`,wx=`#define NORMAL
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
}`,Rx=`#define PHONG
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
}`,Cx=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Px=`#define STANDARD
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
}`,Lx=`#define TOON
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
}`,Dx=`#define TOON
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
}`,Fx=`uniform float size;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,kx=`uniform vec3 color;
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
}`,Ox=`uniform float rotation;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:ab,alphahash_pars_fragment:cb,alphamap_fragment:lb,alphamap_pars_fragment:ub,alphatest_fragment:hb,alphatest_pars_fragment:db,aomap_fragment:fb,aomap_pars_fragment:pb,batching_pars_vertex:mb,batching_vertex:gb,begin_vertex:_b,beginnormal_vertex:bb,bsdfs:vb,iridescence_fragment:xb,bumpmap_pars_fragment:yb,clipping_planes_fragment:Mb,clipping_planes_pars_fragment:Sb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Eb,color_fragment:Tb,color_pars_fragment:wb,color_pars_vertex:Rb,color_vertex:Cb,common:Ib,cube_uv_reflection_fragment:Pb,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Db,displacementmap_vertex:Fb,emissivemap_fragment:Nb,emissivemap_pars_fragment:Ub,colorspace_fragment:kb,colorspace_pars_fragment:Ob,envmap_fragment:Bb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:zb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:Qb,envmap_vertex:Vb,fog_vertex:Wb,fog_pars_vertex:jb,fog_fragment:Xb,fog_pars_fragment:qb,gradientmap_pars_fragment:Kb,lightmap_pars_fragment:$b,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:Zb,lights_pars_begin:Jb,lights_toon_fragment:tv,lights_toon_pars_fragment:ev,lights_phong_fragment:nv,lights_phong_pars_fragment:iv,lights_physical_fragment:sv,lights_physical_pars_fragment:rv,lights_fragment_begin:ov,lights_fragment_maps:av,lights_fragment_end:cv,logdepthbuf_fragment:lv,logdepthbuf_pars_fragment:uv,logdepthbuf_pars_vertex:hv,logdepthbuf_vertex:dv,map_fragment:fv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:_v,metalnessmap_pars_fragment:bv,morphinstance_vertex:vv,morphcolor_vertex:xv,morphnormal_vertex:yv,morphtarget_pars_vertex:Mv,morphtarget_vertex:Sv,normal_fragment_begin:Av,normal_fragment_maps:Ev,normal_pars_fragment:Tv,normal_pars_vertex:wv,normal_vertex:Rv,normalmap_pars_fragment:Cv,clearcoat_normal_fragment_begin:Iv,clearcoat_normal_fragment_maps:Pv,clearcoat_pars_fragment:Lv,iridescence_pars_fragment:Dv,opaque_fragment:Fv,packing:Nv,premultiplied_alpha_fragment:Uv,project_vertex:kv,dithering_fragment:Ov,dithering_pars_fragment:Bv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:Hv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Wv,shadowmask_pars_fragment:jv,skinbase_vertex:Xv,skinning_pars_vertex:qv,skinning_vertex:Kv,skinnormal_vertex:$v,specularmap_fragment:Yv,specularmap_pars_fragment:Zv,tonemapping_fragment:Jv,tonemapping_pars_fragment:Qv,transmission_fragment:tx,transmission_pars_fragment:ex,uv_pars_fragment:nx,uv_pars_vertex:ix,uv_vertex:sx,worldpos_vertex:rx,background_vert:ox,background_frag:ax,backgroundCube_vert:cx,backgroundCube_frag:lx,cube_vert:ux,cube_frag:hx,depth_vert:dx,depth_frag:fx,distanceRGBA_vert:px,distanceRGBA_frag:mx,equirect_vert:gx,equirect_frag:_x,linedashed_vert:bx,linedashed_frag:vx,meshbasic_vert:xx,meshbasic_frag:yx,meshlambert_vert:Mx,meshlambert_frag:Sx,meshmatcap_vert:Ax,meshmatcap_frag:Ex,meshnormal_vert:Tx,meshnormal_frag:wx,meshphong_vert:Rx,meshphong_frag:Cx,meshphysical_vert:Ix,meshphysical_frag:Px,meshtoon_vert:Lx,meshtoon_frag:Dx,points_vert:Fx,points_frag:Nx,shadow_vert:Ux,shadow_frag:kx,sprite_vert:Ox,sprite_frag:Bx},Vt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Cn={basic:{uniforms:yn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:yn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ie(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:yn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:yn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:yn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new ie(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:yn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:yn([Vt.points,Vt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:yn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:yn([Vt.common,Vt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:yn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:yn([Vt.sprite,Vt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:yn([Vt.common,Vt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:yn([Vt.lights,Vt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};Cn.physical={uniforms:yn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const ko={r:0,b:0,g:0},us=new Xn,Gx=new ae;function zx(i,t,e,n,s,r,o){const a=new ie(0);let c=r===!0?0:1,u,h,l=null,d=0,p=null;function _(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function v(M){let y=!1;const w=_(M);w===null?f(a,c):w&&w.isColor&&(f(w,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,y){const w=_(y);w&&(w.isCubeTexture||w.mapping===306)?(h===void 0&&(h=new Ae(new Gi(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:ur(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),us.copy(y.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(us)),h.material.toneMapped=Le.getTransfer(w.colorSpace)!==Ve,(l!==w||d!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=w,d=w.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new Ae(new jn(2,2),new zi({name:"BackgroundMaterial",uniforms:ur(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Le.getTransfer(w.colorSpace)!==Ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(l!==w||d!==w.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=w,d=w.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function f(M,y){M.getRGB(ko,hm(i)),n.buffers.color.setClear(ko.r,ko.g,ko.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:v,addToRenderList:g,dispose:x}}function Hx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,L,k,N,B){let G=!1;const U=l(N,k,L);r!==U&&(r=U,u(r.object)),G=p(E,N,k,B),G&&_(E,N,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(E,L,k,N),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function u(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function l(E,L,k){const N=k.wireframe===!0;let B=n[E.id];B===void 0&&(B={},n[E.id]=B);let G=B[L.id];G===void 0&&(G={},B[L.id]=G);let U=G[N];return U===void 0&&(U=d(c()),G[N]=U),U}function d(E){const L=[],k=[],N=[];for(let B=0;B<e;B++)L[B]=0,k[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:N,object:E,attributes:{},index:null}}function p(E,L,k,N){const B=r.attributes,G=L.attributes;let U=0;const z=k.getAttributes();for(const O in z)if(z[O].location>=0){const Y=B[O];let lt=G[O];if(lt===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor)),Y===void 0||Y.attribute!==lt||lt&&Y.data!==lt.data)return!0;U++}return r.attributesNum!==U||r.index!==N}function _(E,L,k,N){const B={},G=L.attributes;let U=0;const z=k.getAttributes();for(const O in z)if(z[O].location>=0){let Y=G[O];Y===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor));const lt={};lt.attribute=Y,Y&&Y.data&&(lt.data=Y.data),B[O]=lt,U++}r.attributes=B,r.attributesNum=U,r.index=N}function v(){const E=r.newAttributes;for(let L=0,k=E.length;L<k;L++)E[L]=0}function g(E){f(E,0)}function f(E,L){const k=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;k[E]=1,N[E]===0&&(i.enableVertexAttribArray(E),N[E]=1),B[E]!==L&&(i.vertexAttribDivisor(E,L),B[E]=L)}function x(){const E=r.newAttributes,L=r.enabledAttributes;for(let k=0,N=L.length;k<N;k++)L[k]!==E[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function M(E,L,k,N,B,G,U){U===!0?i.vertexAttribIPointer(E,L,k,B,G):i.vertexAttribPointer(E,L,k,N,B,G)}function y(E,L,k,N){v();const B=N.attributes,G=k.getAttributes(),U=L.defaultAttributeValues;for(const z in G){const O=G[z];if(O.location>=0){let Z=B[z];if(Z===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor)),Z!==void 0){const Y=Z.normalized,lt=Z.itemSize,Et=t.get(Z);if(Et===void 0)continue;const kt=Et.buffer,it=Et.type,bt=Et.bytesPerElement,ht=it===i.INT||it===i.UNSIGNED_INT||Z.gpuType===1013;if(Z.isInterleavedBufferAttribute){const W=Z.data,_t=W.stride,wt=Z.offset;if(W.isInstancedInterleavedBuffer){for(let Rt=0;Rt<O.locationSize;Rt++)f(O.location+Rt,W.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Rt=0;Rt<O.locationSize;Rt++)g(O.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Rt=0;Rt<O.locationSize;Rt++)M(O.location+Rt,lt/O.locationSize,it,Y,_t*bt,(wt+lt/O.locationSize*Rt)*bt,ht)}else{if(Z.isInstancedBufferAttribute){for(let W=0;W<O.locationSize;W++)f(O.location+W,Z.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let W=0;W<O.locationSize;W++)g(O.location+W);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let W=0;W<O.locationSize;W++)M(O.location+W,lt/O.locationSize,it,Y,lt*bt,lt/O.locationSize*W*bt,ht)}}else if(U!==void 0){const Y=U[z];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(O.location,Y);break;case 3:i.vertexAttrib3fv(O.location,Y);break;case 4:i.vertexAttrib4fv(O.location,Y);break;default:i.vertexAttrib1fv(O.location,Y)}}}}x()}function w(){P();for(const E in n){const L=n[E];for(const k in L){const N=L[k];for(const B in N)h(N[B].object),delete N[B];delete L[k]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;const L=n[E.id];for(const k in L){const N=L[k];for(const B in N)h(N[B].object),delete N[B];delete L[k]}delete n[E.id]}function R(E){for(const L in n){const k=n[L];if(k[E.id]===void 0)continue;const N=k[E.id];for(const B in N)h(N[B].object),delete N[B];delete k[E.id]}}function P(){A(),o=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Vx(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let p=0;for(let _=0;_<l;_++)p+=h[_];e.update(p,n,1)}function c(u,h,l,d){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let _=0;for(let v=0;v<l;v++)_+=h[v]*d[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==1023&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:T}}function jx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new gs,a=new _e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const p=l.length!==0||d||n!==0||s;return s=d,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,p){const _=l.clippingPlanes,v=l.clipIntersection,g=l.clipShadows,f=i.get(l);if(!s||_===null||_.length===0||r&&!g)r?h(null):u();else{const x=r?0:n,M=x*4;let y=f.clippingState||null;c.value=y,y=h(_,d,M,p);for(let w=0;w!==M;++w)y[w]=e[w];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,p,_){const v=l!==null?l.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const f=p+v*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,y=p;M!==v;++M,y+=4)o.copy(l[M]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Xx(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new l_(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const nr=4,Rh=[.125,.215,.35,.446,.526,.582],vs=20,Tc=new uu,Ch=new ie;let wc=null,Rc=0,Cc=0,Ic=!1;const _s=(1+Math.sqrt(5))/2,qs=1/_s,Ih=[new H(-_s,qs,0),new H(_s,qs,0),new H(-qs,0,_s),new H(qs,0,_s),new H(0,_s,-qs),new H(0,_s,qs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){wc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wc,Rc,Cc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wc=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:En,depthBuffer:!1},s=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qx(r)),this._blurMaterial=Kx(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,n,s){const a=new Sn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Ch),h.toneMapping=0,h.autoClear=!1;const p=new on({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new Ae(new Gi,p);let v=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,v=!0):(p.color.copy(Ch),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(u[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,u[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,u[f]));const M=this._cubeSize;Oo(s,x*M,f>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Oo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Tc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ih[(s-r-1)%Ih.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Ae(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*vs-1),v=r/_,g=isFinite(r)?1+Math.floor(h*v):vs;g>vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${vs}`);const f=[];let x=0;for(let R=0;R<vs;++R){const P=R/v,A=Math.exp(-P*P/2);f.push(A),R===0?x+=A:R<g&&(x+=2*A)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const y=this._sizeLods[s],w=3*y*(s>M-nr?s-M+nr:0),T=4*(this._cubeSize-y);Oo(e,w,T,3*y,2*y),c.setRenderTarget(e),c.render(l,Tc)}}function qx(i){const t=[],e=[],n=[];let s=i;const r=i-nr+1+Rh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-nr?c=Rh[o-i+nr-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,_=6,v=3,g=2,f=1,x=new Float32Array(v*_*p),M=new Float32Array(g*_*p),y=new Float32Array(f*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,P=T>2?0:-1,A=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(A,v*_*T),M.set(d,g*_*T);const E=[T,T,T,T,T,T];y.set(E,f*_*T)}const w=new Ze;w.setAttribute("position",new Ne(x,v)),w.setAttribute("uv",new Ne(M,g)),w.setAttribute("faceIndex",new Ne(y,f)),t.push(w),s>nr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(i,t,e){const n=new Es(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kx(i,t,e){const n=new Float32Array(vs),s=new H(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dh(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fh(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function $x(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const d=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ph(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ph(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Yx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zx(i,t,e,n){const s={},r=new WeakMap;function o(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(l,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function u(l){const d=[],p=l.index,_=l.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let M=0,y=x.length;M<y;M+=3){const w=x[M+0],T=x[M+1],R=x[M+2];d.push(w,T,T,R,R,w)}}else if(_!==void 0){const x=_.array;v=_.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const w=M+0,T=M+1,R=M+2;d.push(w,T,T,R,R,w)}}else return;const g=new(sm(d)?um:lm)(d,1);g.version=v;const f=r.get(l);f&&t.remove(f),r.set(l,g)}function h(l){const d=r.get(l);if(d){const p=l.index;p!==null&&d.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function Jx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function u(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*o,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let g=0;for(let f=0;f<_;f++)g+=p[f];e.update(g,n,1)}function l(d,p,_,v){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],v[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,_);let f=0;for(let x=0;x<_;x++)f+=p[x]*v[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Qx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ty(i,t,e){const n=new WeakMap,s=new ve;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==l){let A=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*w*4*l),R=new om(T,y,w,l);R.type=1015,R.needsUpdate=!0;const P=M*4;for(let E=0;E<l;E++){const L=g[E],k=f[E],N=x[E],B=y*w*4*E;for(let G=0;G<L.count;G++){const U=G*P;p===!0&&(s.fromBufferAttribute(L,G),T[B+U+0]=s.x,T[B+U+1]=s.y,T[B+U+2]=s.z,T[B+U+3]=0),_===!0&&(s.fromBufferAttribute(k,G),T[B+U+4]=s.x,T[B+U+5]=s.y,T[B+U+6]=s.z,T[B+U+7]=0),v===!0&&(s.fromBufferAttribute(N,G),T[B+U+8]=s.x,T[B+U+9]=s.y,T[B+U+10]=s.z,T[B+U+11]=N.itemSize===4?s.w:1)}}d={count:l,texture:R,size:new ee(y,w)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<u.length;v++)p+=u[v];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ey(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const Rm=new an,Nh=new xm(1,1),Cm=new om,Im=new K0,Pm=new fm,Uh=[],kh=[],Oh=new Float32Array(16),Bh=new Float32Array(9),Gh=new Float32Array(4);function br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function cn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ln(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ha(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ny(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function iy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2fv(this.addr,t),ln(e,t)}}function sy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;i.uniform3fv(this.addr,t),ln(e,t)}}function ry(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4fv(this.addr,t),ln(e,t)}}function oy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),ln(e,n)}}function ay(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Bh.set(n),i.uniformMatrix3fv(this.addr,!1,Bh),ln(e,n)}}function cy(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(cn(e,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),ln(e,n)}}function ly(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2iv(this.addr,t),ln(e,t)}}function hy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3iv(this.addr,t),ln(e,t)}}function dy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4iv(this.addr,t),ln(e,t)}}function fy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function py(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;i.uniform2uiv(this.addr,t),ln(e,t)}}function my(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;i.uniform3uiv(this.addr,t),ln(e,t)}}function gy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;i.uniform4uiv(this.addr,t),ln(e,t)}}function _y(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nh.compareFunction=515,r=Nh):r=Rm,e.setTexture2D(t||r,s)}function by(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Im,s)}function vy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Pm,s)}function xy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Cm,s)}function yy(i){switch(i){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return cy;case 5124:case 35670:return ly;case 35667:case 35671:return uy;case 35668:case 35672:return hy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return xy}}function My(i,t){i.uniform1fv(this.addr,t)}function Sy(i,t){const e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function Ay(i,t){const e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function Ey(i,t){const e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function Ty(i,t){const e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wy(i,t){const e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ry(i,t){const e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Cy(i,t){i.uniform1iv(this.addr,t)}function Iy(i,t){i.uniform2iv(this.addr,t)}function Py(i,t){i.uniform3iv(this.addr,t)}function Ly(i,t){i.uniform4iv(this.addr,t)}function Dy(i,t){i.uniform1uiv(this.addr,t)}function Fy(i,t){i.uniform2uiv(this.addr,t)}function Ny(i,t){i.uniform3uiv(this.addr,t)}function Uy(i,t){i.uniform4uiv(this.addr,t)}function ky(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rm,r[o])}function Oy(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Im,r[o])}function By(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pm,r[o])}function Gy(i,t,e){const n=this.cache,s=t.length,r=Ha(e,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cm,r[o])}function zy(i){switch(i){case 5126:return My;case 35664:return Sy;case 35665:return Ay;case 35666:return Ey;case 35674:return Ty;case 35675:return wy;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Iy;case 35668:case 35672:return Py;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Fy;case 36295:return Ny;case 36296:return Uy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return Gy}}class Hy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yy(e.type)}}class Vy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zy(e.type)}}class Wy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function zh(i,t){i.seq.push(t),i.map[t.id]=t}function jy(i,t,e){const n=i.name,s=n.length;for(Pc.lastIndex=0;;){const r=Pc.exec(n),o=Pc.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){zh(e,u===void 0?new Hy(a,i,t):new Vy(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new Wy(a),zh(e,l)),e=l}}}class da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jy(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Hh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Xy=37297;let qy=0;function Ky(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Vh=new _e;function $y(i){Le._getMatrix(Vh,Le.workingColorSpace,i);const t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case ya:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ky(i.getShaderSource(t),o)}else return s}function Yy(i,t){const e=$y(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zy(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Bo=new H;function Jy(){Le.getLuminanceCoefficients(Bo);const i=Bo.x.toFixed(4),t=Bo.y.toFixed(4),e=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function tM(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eM(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Wr(i){return i!==""}function jh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(i){return i.replace(nM,sM)}const iM=new Map;function sM(i,t){let e=be[t];if(e===void 0){const n=iM.get(t);if(n!==void 0)e=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rl(e)}const rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(i){return i.replace(rM,oM)}function oM(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function aM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function cM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function uM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function hM(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dM(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=aM(e),u=cM(e),h=lM(e),l=uM(e),d=hM(e),p=Qy(e),_=tM(r),v=s.createProgram();let g,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Wr).join(`
`),f.length>0&&(f+=`
`)):(g=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),f=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?be.tonemapping_pars_fragment:"",e.toneMapping!==0?Zy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,Yy("linearToOutputTexel",e.outputColorSpace),Jy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),o=Rl(o),o=jh(o,e),o=Xh(o,e),a=Rl(a),a=jh(a,e),a=Xh(a,e),o=qh(o),a=qh(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+g+o,y=x+f+a,w=Hh(s,s.VERTEX_SHADER,M),T=Hh(s,s.FRAGMENT_SHADER,y);s.attachShader(v,w),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(w).trim(),B=s.getShaderInfoLog(T).trim();let G=!0,U=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,T);else{const z=Wh(s,w,"vertex"),O=Wh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+z+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(N===""||B==="")&&(U=!1);U&&(L.diagnostics={runnable:G,programLog:k,vertexShader:{log:N,prefix:g},fragmentShader:{log:B,prefix:f}})}s.deleteShader(w),s.deleteShader(T),P=new da(s,v),A=eM(s,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,Xy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qy++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let fM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mM(t),e.set(t,n)),n}}class mM{constructor(t){this.id=fM++,this.code=t,this.usedTimes=0}}function gM(i,t,e,n,s,r,o){const a=new am,c=new pM,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return u.add(A),A===0?"uv":`uv${A}`}function g(A,E,L,k,N){const B=k.fog,G=N.geometry,U=A.isMeshStandardMaterial?k.environment:null,z=(A.isMeshStandardMaterial?e:t).get(A.envMap||U),O=z&&z.mapping===306?z.image.height:null,Z=_[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=Y!==void 0?Y.length:0;let Et=0;G.morphAttributes.position!==void 0&&(Et=1),G.morphAttributes.normal!==void 0&&(Et=2),G.morphAttributes.color!==void 0&&(Et=3);let kt,it,bt,ht;if(Z){const Ee=Cn[Z];kt=Ee.vertexShader,it=Ee.fragmentShader}else kt=A.vertexShader,it=A.fragmentShader,c.update(A),bt=c.getVertexShaderID(A),ht=c.getFragmentShaderID(A);const W=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),wt=N.isInstancedMesh===!0,Rt=N.isBatchedMesh===!0,Wt=!!A.map,Yt=!!A.matcap,re=!!z,j=!!A.aoMap,xe=!!A.lightMap,te=!!A.bumpMap,Qt=!!A.normalMap,qt=!!A.displacementMap,he=!!A.emissiveMap,Nt=!!A.metalnessMap,F=!!A.roughnessMap,C=A.anisotropy>0,q=A.clearcoat>0,$=A.dispersion>0,gt=A.iridescence>0,et=A.sheen>0,Lt=A.transmission>0,Dt=C&&!!A.anisotropyMap,Ot=q&&!!A.clearcoatMap,oe=q&&!!A.clearcoatNormalMap,At=q&&!!A.clearcoatRoughnessMap,Tt=gt&&!!A.iridescenceMap,Zt=gt&&!!A.iridescenceThicknessMap,Jt=et&&!!A.sheenColorMap,jt=et&&!!A.sheenRoughnessMap,pe=!!A.specularMap,St=!!A.specularColorMap,vt=!!A.specularIntensityMap,K=Lt&&!!A.transmissionMap,Ut=Lt&&!!A.thicknessMap,dt=!!A.gradientMap,yt=!!A.alphaMap,Ft=A.alphaTest>0,zt=!!A.alphaHash,se=!!A.extensions;let ce=0;A.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ce=i.toneMapping);const ze={shaderID:Z,shaderType:A.type,shaderName:A.name,vertexShader:kt,fragmentShader:it,defines:A.defines,customVertexShaderID:bt,customFragmentShaderID:ht,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&N._colorsTexture!==null,instancing:wt,instancingColor:wt&&N.instanceColor!==null,instancingMorph:wt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:En,alphaToCoverage:!!A.alphaToCoverage,map:Wt,matcap:Yt,envMap:re,envMapMode:re&&z.mapping,envMapCubeUVHeight:O,aoMap:j,lightMap:xe,bumpMap:te,normalMap:Qt,displacementMap:d&&qt,emissiveMap:he,normalMapObjectSpace:Qt&&A.normalMapType===1,normalMapTangentSpace:Qt&&A.normalMapType===0,metalnessMap:Nt,roughnessMap:F,anisotropy:C,anisotropyMap:Dt,clearcoat:q,clearcoatMap:Ot,clearcoatNormalMap:oe,clearcoatRoughnessMap:At,dispersion:$,iridescence:gt,iridescenceMap:Tt,iridescenceThicknessMap:Zt,sheen:et,sheenColorMap:Jt,sheenRoughnessMap:jt,specularMap:pe,specularColorMap:St,specularIntensityMap:vt,transmission:Lt,transmissionMap:K,thicknessMap:Ut,gradientMap:dt,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:yt,alphaTest:Ft,alphaHash:zt,combine:A.combine,mapUv:Wt&&v(A.map.channel),aoMapUv:j&&v(A.aoMap.channel),lightMapUv:xe&&v(A.lightMap.channel),bumpMapUv:te&&v(A.bumpMap.channel),normalMapUv:Qt&&v(A.normalMap.channel),displacementMapUv:qt&&v(A.displacementMap.channel),emissiveMapUv:he&&v(A.emissiveMap.channel),metalnessMapUv:Nt&&v(A.metalnessMap.channel),roughnessMapUv:F&&v(A.roughnessMap.channel),anisotropyMapUv:Dt&&v(A.anisotropyMap.channel),clearcoatMapUv:Ot&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:jt&&v(A.sheenRoughnessMap.channel),specularMapUv:pe&&v(A.specularMap.channel),specularColorMapUv:St&&v(A.specularColorMap.channel),specularIntensityMapUv:vt&&v(A.specularIntensityMap.channel),transmissionMapUv:K&&v(A.transmissionMap.channel),thicknessMapUv:Ut&&v(A.thicknessMap.channel),alphaMapUv:yt&&v(A.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Qt||C),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Wt||yt),fog:!!B,useFog:A.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:_t,skinning:N.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:Wt&&A.map.isVideoTexture===!0&&Le.getTransfer(A.map.colorSpace)===Ve,decodeVideoTextureEmissive:he&&A.emissiveMap.isVideoTexture===!0&&Le.getTransfer(A.emissiveMap.colorSpace)===Ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:se&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&A.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ze.vertexUv1s=u.has(1),ze.vertexUv2s=u.has(2),ze.vertexUv3s=u.has(3),u.clear(),ze}function f(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)E.push(L),E.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(x(E,A),M(E,A),E.push(i.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function x(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function M(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const E=_[A.type];let L;if(E){const k=Cn[E];L=Ql.clone(k.uniforms)}else L=A.uniforms;return L}function w(A,E){let L;for(let k=0,N=h.length;k<N;k++){const B=h[k];if(B.cacheKey===E){L=B,++L.usedTimes;break}}return L===void 0&&(L=new dM(i,E,A,r),h.push(L)),L}function T(A){if(--A.usedTimes===0){const E=h.indexOf(A);h[E]=h[h.length-1],h.pop(),A.destroy()}}function R(A){c.remove(A)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function _M(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function bM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $h(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Yh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,d,p,_,v,g){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:d,material:p,groupOrder:_,renderOrder:l.renderOrder,z:v,group:g},i[t]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=l.renderOrder,f.z=v,f.group=g),t++,f}function a(l,d,p,_,v,g){const f=o(l,d,p,_,v,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(l,d,p,_,v,g){const f=o(l,d,p,_,v,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function u(l,d){e.length>1&&e.sort(l||bM),n.length>1&&n.sort(d||$h),s.length>1&&s.sort(d||$h)}function h(){for(let l=t,d=i.length;l<d;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function vM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Yh,i.set(n,[o])):s>=r.length?(o=new Yh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new H,color:new ie};break;case"SpotLight":e={position:new H,direction:new H,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function yM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let MM=0;function SM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function AM(i){const t=new xM,e=yM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new H);const s=new H,r=new ae,o=new ae;function a(u){let h=0,l=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,_=0,v=0,g=0,f=0,x=0,M=0,y=0,w=0,T=0,R=0;u.sort(SM);for(let A=0,E=u.length;A<E;A++){const L=u[A],k=L.color,N=L.intensity,B=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=k.r*N,l+=k.g*N,d+=k.b*N;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],N);R++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const z=L.shadow,O=e.get(L);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=L.shadow.matrix,x++}n.directional[p]=U,p++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(k).multiplyScalar(N),U.distance=B,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[v]=U;const z=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,z.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=z.matrix,L.castShadow){const O=e.get(L);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[v]=O,n.spotShadowMap[v]=G,y++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(k).multiplyScalar(N),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=U,g++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const z=L.shadow,O=e.get(L);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[_]=O,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=L.shadow.matrix,M++}n.point[_]=U,_++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(N),U.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[f]=U,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Vt.LTC_FLOAT_1,n.rectAreaLTC2=Vt.LTC_FLOAT_2):(n.rectAreaLTC1=Vt.LTC_HALF_1,n.rectAreaLTC2=Vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==g||P.hemiLength!==f||P.numDirectionalShadows!==x||P.numPointShadows!==M||P.numSpotShadows!==y||P.numSpotMaps!==w||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=p,P.pointLength=_,P.spotLength=v,P.rectAreaLength=g,P.hemiLength=f,P.numDirectionalShadows=x,P.numPointShadows=M,P.numSpotShadows=y,P.numSpotMaps=w,P.numLightProbes=R,n.version=MM++)}function c(u,h){let l=0,d=0,p=0,_=0,v=0;const g=h.matrixWorldInverse;for(let f=0,x=u.length;f<x;f++){const M=u[f];if(M.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),l++}else if(M.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Zh(i){const t=new AM(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function EM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Zh(i),t.set(s,[a])):r>=o.length?(a=new Zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`;function RM(i,t,e){let n=new iu;const s=new ee,r=new ee,o=new ve,a=new M_({depthPacking:3201}),c=new S_,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:TM,fragmentShader:wM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ze;_.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ae(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(T,R,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const A=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=f!==3&&this.type===3,B=f===3&&this.type!==3;for(let G=0,U=T.length;G<U;G++){const z=T[G],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Z=O.getFrameExtents();if(s.multiply(Z),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,O.mapSize.y=r.y)),O.map===null||N===!0||B===!0){const lt=this.type!==3?{minFilter:1003,magFilter:1003}:{};O.map!==null&&O.map.dispose(),O.map=new Es(s.x,s.y,lt),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Y=O.getViewportCount();for(let lt=0;lt<Y;lt++){const Et=O.getViewport(lt);o.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),k.viewport(o),O.updateMatrices(z,lt),n=O.getFrustum(),y(R,P,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===3&&x(O,P),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(A,E,L)};function x(T,R){const P=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Es(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,p,v,null)}function M(T,R,P,A){let E=null;const L=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=E.uuid,N=R.uuid;let B=u[k];B===void 0&&(B={},u[k]=B);let G=B[N];G===void 0&&(G=E.clone(),B[N]=G,R.addEventListener("dispose",w)),E=G}if(E.visible=R.visible,E.wireframe=R.wireframe,A===3?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:l[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=P}return E}function y(T,R,P,A,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===3)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=t.update(T),B=T.material;if(Array.isArray(B)){const G=N.groups;for(let U=0,z=G.length;U<z;U++){const O=G[U],Z=B[O.materialIndex];if(Z&&Z.visible){const Y=M(T,Z,A,E);T.onBeforeShadow(i,T,R,P,N,Y,O),i.renderBufferDirect(P,null,N,Y,T,O),T.onAfterShadow(i,T,R,P,N,Y,O)}}}else if(B.visible){const G=M(T,B,A,E);T.onBeforeShadow(i,T,R,P,N,G,null),i.renderBufferDirect(P,null,N,G,T,null),T.onAfterShadow(i,T,R,P,N,G,null)}}const k=T.children;for(let N=0,B=k.length;N<B;N++)y(k[N],R,P,A,E)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const A=u[P],E=T.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const CM={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function IM(i,t){function e(){let K=!1;const Ut=new ve;let dt=null;const yt=new ve(0,0,0,0);return{setMask:function(Ft){dt!==Ft&&!K&&(i.colorMask(Ft,Ft,Ft,Ft),dt=Ft)},setLocked:function(Ft){K=Ft},setClear:function(Ft,zt,se,ce,ze){ze===!0&&(Ft*=ce,zt*=ce,se*=ce),Ut.set(Ft,zt,se,ce),yt.equals(Ut)===!1&&(i.clearColor(Ft,zt,se,ce),yt.copy(Ut))},reset:function(){K=!1,dt=null,yt.set(-1,0,0,0)}}}function n(){let K=!1,Ut=!1,dt=null,yt=null,Ft=null;return{setReversed:function(zt){if(Ut!==zt){const se=t.get("EXT_clip_control");Ut?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const ce=Ft;Ft=null,this.setClear(ce)}Ut=zt},getReversed:function(){return Ut},setTest:function(zt){zt?W(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(zt){dt!==zt&&!K&&(i.depthMask(zt),dt=zt)},setFunc:function(zt){if(Ut&&(zt=CM[zt]),yt!==zt){switch(zt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=zt}},setLocked:function(zt){K=zt},setClear:function(zt){Ft!==zt&&(Ut&&(zt=1-zt),i.clearDepth(zt),Ft=zt)},reset:function(){K=!1,dt=null,yt=null,Ft=null,Ut=!1}}}function s(){let K=!1,Ut=null,dt=null,yt=null,Ft=null,zt=null,se=null,ce=null,ze=null;return{setTest:function(Ee){K||(Ee?W(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Ee){Ut!==Ee&&!K&&(i.stencilMask(Ee),Ut=Ee)},setFunc:function(Ee,me,un){(dt!==Ee||yt!==me||Ft!==un)&&(i.stencilFunc(Ee,me,un),dt=Ee,yt=me,Ft=un)},setOp:function(Ee,me,un){(zt!==Ee||se!==me||ce!==un)&&(i.stencilOp(Ee,me,un),zt=Ee,se=me,ce=un)},setLocked:function(Ee){K=Ee},setClear:function(Ee){ze!==Ee&&(i.clearStencil(Ee),ze=Ee)},reset:function(){K=!1,Ut=null,dt=null,yt=null,Ft=null,zt=null,se=null,ce=null,ze=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,p=[],_=null,v=!1,g=null,f=null,x=null,M=null,y=null,w=null,T=null,R=new ie(0,0,0),P=0,A=!1,E=null,L=null,k=null,N=null,B=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),U=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),U=z>=2);let Z=null,Y={};const lt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),kt=new ve().fromArray(lt),it=new ve().fromArray(Et);function bt(K,Ut,dt,yt){const Ft=new Uint8Array(4),zt=i.createTexture();i.bindTexture(K,zt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<dt;se++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Ft):i.texImage2D(Ut+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ft);return zt}const ht={};ht[i.TEXTURE_2D]=bt(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=bt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=bt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=bt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(3),te(!1),Qt(1),W(i.CULL_FACE),j(0);function W(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function _t(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function wt(K,Ut){return l[K]!==Ut?(i.bindFramebuffer(K,Ut),l[K]=Ut,K===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Ut),K===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Rt(K,Ut){let dt=p,yt=!1;if(K){dt=d.get(Ut),dt===void 0&&(dt=[],d.set(Ut,dt));const Ft=K.textures;if(dt.length!==Ft.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,se=Ft.length;zt<se;zt++)dt[zt]=i.COLOR_ATTACHMENT0+zt;dt.length=Ft.length,yt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,yt=!0);yt&&i.drawBuffers(dt)}function Wt(K){return _!==K?(i.useProgram(K),_=K,!0):!1}const Yt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Yt[103]=i.MIN,Yt[104]=i.MAX;const re={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function j(K,Ut,dt,yt,Ft,zt,se,ce,ze,Ee){if(K===0){v===!0&&(_t(i.BLEND),v=!1);return}if(v===!1&&(W(i.BLEND),v=!0),K!==5){if(K!==g||Ee!==A){if((f!==100||y!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,y=100),Ee)switch(K){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}x=null,M=null,w=null,T=null,R.set(0,0,0),P=0,g=K,A=Ee}return}Ft=Ft||Ut,zt=zt||dt,se=se||yt,(Ut!==f||Ft!==y)&&(i.blendEquationSeparate(Yt[Ut],Yt[Ft]),f=Ut,y=Ft),(dt!==x||yt!==M||zt!==w||se!==T)&&(i.blendFuncSeparate(re[dt],re[yt],re[zt],re[se]),x=dt,M=yt,w=zt,T=se),(ce.equals(R)===!1||ze!==P)&&(i.blendColor(ce.r,ce.g,ce.b,ze),R.copy(ce),P=ze),g=K,A=!1}function xe(K,Ut){K.side===2?_t(i.CULL_FACE):W(i.CULL_FACE);let dt=K.side===1;Ut&&(dt=!dt),te(dt),K.blending===1&&K.transparent===!1?j(0):j(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);const yt=K.stencilWrite;a.setTest(yt),yt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),he(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function Qt(K){K!==0?(W(i.CULL_FACE),K!==L&&(K===1?i.cullFace(i.BACK):K===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),L=K}function qt(K){K!==k&&(U&&i.lineWidth(K),k=K)}function he(K,Ut,dt){K?(W(i.POLYGON_OFFSET_FILL),(N!==Ut||B!==dt)&&(i.polygonOffset(Ut,dt),N=Ut,B=dt)):_t(i.POLYGON_OFFSET_FILL)}function Nt(K){K?W(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function F(K){K===void 0&&(K=i.TEXTURE0+G-1),Z!==K&&(i.activeTexture(K),Z=K)}function C(K,Ut,dt){dt===void 0&&(Z===null?dt=i.TEXTURE0+G-1:dt=Z);let yt=Y[dt];yt===void 0&&(yt={type:void 0,texture:void 0},Y[dt]=yt),(yt.type!==K||yt.texture!==Ut)&&(Z!==dt&&(i.activeTexture(dt),Z=dt),i.bindTexture(K,Ut||ht[K]),yt.type=K,yt.texture=Ut)}function q(){const K=Y[Z];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function gt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function oe(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function At(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Zt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Jt(K){kt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),kt.copy(K))}function jt(K){it.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),it.copy(K))}function pe(K,Ut){let dt=u.get(Ut);dt===void 0&&(dt=new WeakMap,u.set(Ut,dt));let yt=dt.get(K);yt===void 0&&(yt=i.getUniformBlockIndex(Ut,K.name),dt.set(K,yt))}function St(K,Ut){const yt=u.get(Ut).get(K);c.get(Ut)!==yt&&(i.uniformBlockBinding(Ut,yt,K.__bindingPointIndex),c.set(Ut,yt))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,Y={},l={},d=new WeakMap,p=[],_=null,v=!1,g=null,f=null,x=null,M=null,y=null,w=null,T=null,R=new ie(0,0,0),P=0,A=!1,E=null,L=null,k=null,N=null,B=null,kt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:_t,bindFramebuffer:wt,drawBuffers:Rt,useProgram:Wt,setBlending:j,setMaterial:xe,setFlipSided:te,setCullFace:Qt,setLineWidth:qt,setPolygonOffset:he,setScissorTest:Nt,activeTexture:F,bindTexture:C,unbindTexture:q,compressedTexImage2D:$,compressedTexImage3D:gt,texImage2D:Tt,texImage3D:Zt,updateUBOMapping:pe,uniformBlockBinding:St,texStorage2D:oe,texStorage3D:At,texSubImage2D:et,texSubImage3D:Lt,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ot,scissor:Jt,viewport:jt,reset:vt}}function PM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ee,h=new WeakMap;let l;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(F,C){return p?new OffscreenCanvas(F,C):Zr("canvas")}function v(F,C,q){let $=1;const gt=Nt(F);if((gt.width>q||gt.height>q)&&($=q/Math.max(gt.width,gt.height)),$<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const et=Math.floor($*gt.width),Lt=Math.floor($*gt.height);l===void 0&&(l=_(et,Lt));const Dt=C?_(et,Lt):l;return Dt.width=et,Dt.height=Lt,Dt.getContext("2d").drawImage(F,0,0,et,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+et+"x"+Lt+")."),Dt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),F;return F}function g(F){return F.generateMipmaps}function f(F){i.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,C,q,$,gt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let et=C;if(C===i.RED&&(q===i.FLOAT&&(et=i.R32F),q===i.HALF_FLOAT&&(et=i.R16F),q===i.UNSIGNED_BYTE&&(et=i.R8)),C===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.R8UI),q===i.UNSIGNED_SHORT&&(et=i.R16UI),q===i.UNSIGNED_INT&&(et=i.R32UI),q===i.BYTE&&(et=i.R8I),q===i.SHORT&&(et=i.R16I),q===i.INT&&(et=i.R32I)),C===i.RG&&(q===i.FLOAT&&(et=i.RG32F),q===i.HALF_FLOAT&&(et=i.RG16F),q===i.UNSIGNED_BYTE&&(et=i.RG8)),C===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RG8UI),q===i.UNSIGNED_SHORT&&(et=i.RG16UI),q===i.UNSIGNED_INT&&(et=i.RG32UI),q===i.BYTE&&(et=i.RG8I),q===i.SHORT&&(et=i.RG16I),q===i.INT&&(et=i.RG32I)),C===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGB8UI),q===i.UNSIGNED_SHORT&&(et=i.RGB16UI),q===i.UNSIGNED_INT&&(et=i.RGB32UI),q===i.BYTE&&(et=i.RGB8I),q===i.SHORT&&(et=i.RGB16I),q===i.INT&&(et=i.RGB32I)),C===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),q===i.UNSIGNED_INT&&(et=i.RGBA32UI),q===i.BYTE&&(et=i.RGBA8I),q===i.SHORT&&(et=i.RGBA16I),q===i.INT&&(et=i.RGBA32I)),C===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),C===i.RGBA){const Lt=gt?ya:Le.getTransfer($);q===i.FLOAT&&(et=i.RGBA32F),q===i.HALF_FLOAT&&(et=i.RGBA16F),q===i.UNSIGNED_BYTE&&(et=Lt===Ve?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function y(F,C){let q;return F?C===null||C===1014||C===1020?q=i.DEPTH24_STENCIL8:C===1015?q=i.DEPTH32F_STENCIL8:C===1012&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===1014||C===1020?q=i.DEPTH_COMPONENT24:C===1015?q=i.DEPTH_COMPONENT32F:C===1012&&(q=i.DEPTH_COMPONENT16),q}function w(F,C){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==1003&&F.minFilter!==1006?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function T(F){const C=F.target;C.removeEventListener("dispose",T),P(C),C.isVideoTexture&&h.delete(C)}function R(F){const C=F.target;C.removeEventListener("dispose",R),E(C)}function P(F){const C=n.get(F);if(C.__webglInit===void 0)return;const q=F.source,$=d.get(q);if($){const gt=$[C.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&A(F),Object.keys($).length===0&&d.delete(q)}n.remove(F)}function A(F){const C=n.get(F);i.deleteTexture(C.__webglTexture);const q=F.source,$=d.get(q);delete $[C.__cacheKey],o.memory.textures--}function E(F){const C=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(C.__webglFramebuffer[$]))for(let gt=0;gt<C.__webglFramebuffer[$].length;gt++)i.deleteFramebuffer(C.__webglFramebuffer[$][gt]);else i.deleteFramebuffer(C.__webglFramebuffer[$]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[$])}else{if(Array.isArray(C.__webglFramebuffer))for(let $=0;$<C.__webglFramebuffer.length;$++)i.deleteFramebuffer(C.__webglFramebuffer[$]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let $=0;$<C.__webglColorRenderbuffer.length;$++)C.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[$]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const q=F.textures;for(let $=0,gt=q.length;$<gt;$++){const et=n.get(q[$]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(q[$])}n.remove(F)}let L=0;function k(){L=0}function N(){const F=L;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),L+=1,F}function B(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function G(F,C){const q=n.get(F);if(F.isVideoTexture&&qt(F),F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){const $=F.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(q,F,C);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+C)}function U(F,C){const q=n.get(F);if(F.version>0&&q.__version!==F.version){it(q,F,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+C)}function z(F,C){const q=n.get(F);if(F.version>0&&q.__version!==F.version){it(q,F,C);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+C)}function O(F,C){const q=n.get(F);if(F.version>0&&q.__version!==F.version){bt(q,F,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+C)}const Z={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Y={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},lt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Et(F,C){if(C.type===1015&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===1006||C.magFilter===1007||C.magFilter===1005||C.magFilter===1008||C.minFilter===1006||C.minFilter===1007||C.minFilter===1005||C.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Z[C.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Z[C.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Z[C.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Y[C.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Y[C.minFilter]),C.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,lt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===1003||C.minFilter!==1005&&C.minFilter!==1008||C.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function kt(F,C){let q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",T));const $=C.source;let gt=d.get($);gt===void 0&&(gt={},d.set($,gt));const et=B(C);if(et!==F.__cacheKey){gt[et]===void 0&&(gt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),gt[et].usedTimes++;const Lt=gt[F.__cacheKey];Lt!==void 0&&(gt[F.__cacheKey].usedTimes--,Lt.usedTimes===0&&A(C)),F.__cacheKey=et,F.__webglTexture=gt[et].texture}return q}function it(F,C,q){let $=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&($=i.TEXTURE_3D);const gt=kt(F,C),et=C.source;e.bindTexture($,F.__webglTexture,i.TEXTURE0+q);const Lt=n.get(et);if(et.version!==Lt.__version||gt===!0){e.activeTexture(i.TEXTURE0+q);const Dt=Le.getPrimaries(Le.workingColorSpace),Ot=C.colorSpace===""?null:Le.getPrimaries(C.colorSpace),oe=C.colorSpace===""||Dt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let At=v(C.image,!1,s.maxTextureSize);At=he(C,At);const Tt=r.convert(C.format,C.colorSpace),Zt=r.convert(C.type);let Jt=M(C.internalFormat,Tt,Zt,C.colorSpace,C.isVideoTexture);Et($,C);let jt;const pe=C.mipmaps,St=C.isVideoTexture!==!0,vt=Lt.__version===void 0||gt===!0,K=et.dataReady,Ut=w(C,At);if(C.isDepthTexture)Jt=y(C.format===1027,C.type),vt&&(St?e.texStorage2D(i.TEXTURE_2D,1,Jt,At.width,At.height):e.texImage2D(i.TEXTURE_2D,0,Jt,At.width,At.height,0,Tt,Zt,null));else if(C.isDataTexture)if(pe.length>0){St&&vt&&e.texStorage2D(i.TEXTURE_2D,Ut,Jt,pe[0].width,pe[0].height);for(let dt=0,yt=pe.length;dt<yt;dt++)jt=pe[dt],St?K&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,jt.width,jt.height,Tt,Zt,jt.data):e.texImage2D(i.TEXTURE_2D,dt,Jt,jt.width,jt.height,0,Tt,Zt,jt.data);C.generateMipmaps=!1}else St?(vt&&e.texStorage2D(i.TEXTURE_2D,Ut,Jt,At.width,At.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At.width,At.height,Tt,Zt,At.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,At.width,At.height,0,Tt,Zt,At.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){St&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Jt,pe[0].width,pe[0].height,At.depth);for(let dt=0,yt=pe.length;dt<yt;dt++)if(jt=pe[dt],C.format!==1023)if(Tt!==null)if(St){if(K)if(C.layerUpdates.size>0){const Ft=wh(jt.width,jt.height,C.format,C.type);for(const zt of C.layerUpdates){const se=jt.data.subarray(zt*Ft/jt.data.BYTES_PER_ELEMENT,(zt+1)*Ft/jt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,zt,jt.width,jt.height,1,Tt,se)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,jt.width,jt.height,At.depth,Tt,jt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Jt,jt.width,jt.height,At.depth,0,jt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else St?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,jt.width,jt.height,At.depth,Tt,Zt,jt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Jt,jt.width,jt.height,At.depth,0,Tt,Zt,jt.data)}else{St&&vt&&e.texStorage2D(i.TEXTURE_2D,Ut,Jt,pe[0].width,pe[0].height);for(let dt=0,yt=pe.length;dt<yt;dt++)jt=pe[dt],C.format!==1023?Tt!==null?St?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,jt.width,jt.height,Tt,jt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Jt,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):St?K&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,jt.width,jt.height,Tt,Zt,jt.data):e.texImage2D(i.TEXTURE_2D,dt,Jt,jt.width,jt.height,0,Tt,Zt,jt.data)}else if(C.isDataArrayTexture)if(St){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Jt,At.width,At.height,At.depth),K)if(C.layerUpdates.size>0){const dt=wh(At.width,At.height,C.format,C.type);for(const yt of C.layerUpdates){const Ft=At.data.subarray(yt*dt/At.data.BYTES_PER_ELEMENT,(yt+1)*dt/At.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,At.width,At.height,1,Tt,Zt,Ft)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Tt,Zt,At.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,At.width,At.height,At.depth,0,Tt,Zt,At.data);else if(C.isData3DTexture)St?(vt&&e.texStorage3D(i.TEXTURE_3D,Ut,Jt,At.width,At.height,At.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Tt,Zt,At.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,At.width,At.height,At.depth,0,Tt,Zt,At.data);else if(C.isFramebufferTexture){if(vt)if(St)e.texStorage2D(i.TEXTURE_2D,Ut,Jt,At.width,At.height);else{let dt=At.width,yt=At.height;for(let Ft=0;Ft<Ut;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Jt,dt,yt,0,Tt,Zt,null),dt>>=1,yt>>=1}}else if(pe.length>0){if(St&&vt){const dt=Nt(pe[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Jt,dt.width,dt.height)}for(let dt=0,yt=pe.length;dt<yt;dt++)jt=pe[dt],St?K&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt,Zt,jt):e.texImage2D(i.TEXTURE_2D,dt,Jt,Tt,Zt,jt);C.generateMipmaps=!1}else if(St){if(vt){const dt=Nt(At);e.texStorage2D(i.TEXTURE_2D,Ut,Jt,dt.width,dt.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Zt,At)}else e.texImage2D(i.TEXTURE_2D,0,Jt,Tt,Zt,At);g(C)&&f($),Lt.__version=et.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function bt(F,C,q){if(C.image.length!==6)return;const $=kt(F,C),gt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+q);const et=n.get(gt);if(gt.version!==et.__version||$===!0){e.activeTexture(i.TEXTURE0+q);const Lt=Le.getPrimaries(Le.workingColorSpace),Dt=C.colorSpace===""?null:Le.getPrimaries(C.colorSpace),Ot=C.colorSpace===""||Lt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const oe=C.isCompressedTexture||C.image[0].isCompressedTexture,At=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let yt=0;yt<6;yt++)!oe&&!At?Tt[yt]=v(C.image[yt],!0,s.maxCubemapSize):Tt[yt]=At?C.image[yt].image:C.image[yt],Tt[yt]=he(C,Tt[yt]);const Zt=Tt[0],Jt=r.convert(C.format,C.colorSpace),jt=r.convert(C.type),pe=M(C.internalFormat,Jt,jt,C.colorSpace),St=C.isVideoTexture!==!0,vt=et.__version===void 0||$===!0,K=gt.dataReady;let Ut=w(C,Zt);Et(i.TEXTURE_CUBE_MAP,C);let dt;if(oe){St&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,pe,Zt.width,Zt.height);for(let yt=0;yt<6;yt++){dt=Tt[yt].mipmaps;for(let Ft=0;Ft<dt.length;Ft++){const zt=dt[Ft];C.format!==1023?Jt!==null?St?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,0,0,zt.width,zt.height,Jt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,pe,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):St?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,0,0,zt.width,zt.height,Jt,jt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft,pe,zt.width,zt.height,0,Jt,jt,zt.data)}}}else{if(dt=C.mipmaps,St&&vt){dt.length>0&&Ut++;const yt=Nt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,pe,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(At){St?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Tt[yt].width,Tt[yt].height,Jt,jt,Tt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,pe,Tt[yt].width,Tt[yt].height,0,Jt,jt,Tt[yt].data);for(let Ft=0;Ft<dt.length;Ft++){const se=dt[Ft].image[yt].image;St?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,0,0,se.width,se.height,Jt,jt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,pe,se.width,se.height,0,Jt,jt,se.data)}}else{St?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Jt,jt,Tt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,pe,Jt,jt,Tt[yt]);for(let Ft=0;Ft<dt.length;Ft++){const zt=dt[Ft];St?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,0,0,Jt,jt,zt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ft+1,pe,Jt,jt,zt.image[yt])}}}g(C)&&f(i.TEXTURE_CUBE_MAP),et.__version=gt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ht(F,C,q,$,gt,et){const Lt=r.convert(q.format,q.colorSpace),Dt=r.convert(q.type),Ot=M(q.internalFormat,Lt,Dt,q.colorSpace),oe=n.get(C),At=n.get(q);if(At.__renderTarget=C,!oe.__hasExternalTextures){const Tt=Math.max(1,C.width>>et),Zt=Math.max(1,C.height>>et);gt===i.TEXTURE_3D||gt===i.TEXTURE_2D_ARRAY?e.texImage3D(gt,et,Ot,Tt,Zt,C.depth,0,Lt,Dt,null):e.texImage2D(gt,et,Ot,Tt,Zt,0,Lt,Dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,gt,At.__webglTexture,0,te(C)):(gt===i.TEXTURE_2D||gt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,gt,At.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(F,C,q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),C.depthBuffer){const $=C.depthTexture,gt=$&&$.isDepthTexture?$.type:null,et=y(C.stencilBuffer,gt),Lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=te(C);Qt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,et,C.width,C.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,et,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,F)}else{const $=C.textures;for(let gt=0;gt<$.length;gt++){const et=$[gt],Lt=r.convert(et.format,et.colorSpace),Dt=r.convert(et.type),Ot=M(et.internalFormat,Lt,Dt,et.colorSpace),oe=te(C);q&&Qt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Ot,C.width,C.height):Qt(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Ot,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(C.depthTexture);$.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),G(C.depthTexture,0);const gt=$.__webglTexture,et=te(C);if(C.depthTexture.format===1026)Qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,gt,0);else if(C.depthTexture.format===1027)Qt(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function wt(F){const C=n.get(F),q=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const $=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),$){const gt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,$.removeEventListener("dispose",gt)};$.addEventListener("dispose",gt),C.__depthDisposeCallback=gt}C.__boundDepthTexture=$}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");_t(C.__webglFramebuffer,F)}else if(q){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]===void 0)C.__webglDepthbuffer[$]=i.createRenderbuffer(),W(C.__webglDepthbuffer[$],F,!1);else{const gt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=C.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),W(C.__webglDepthbuffer,F,!1);else{const $=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(F,C,q){const $=n.get(F);C!==void 0&&ht($.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&wt(F)}function Wt(F){const C=F.texture,q=n.get(F),$=n.get(C);F.addEventListener("dispose",R);const gt=F.textures,et=F.isWebGLCubeRenderTarget===!0,Lt=gt.length>1;if(Lt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=C.version,o.memory.textures++),et){q.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer[Dt]=[];for(let Ot=0;Ot<C.mipmaps.length;Ot++)q.__webglFramebuffer[Dt][Ot]=i.createFramebuffer()}else q.__webglFramebuffer[Dt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){q.__webglFramebuffer=[];for(let Dt=0;Dt<C.mipmaps.length;Dt++)q.__webglFramebuffer[Dt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let Dt=0,Ot=gt.length;Dt<Ot;Dt++){const oe=n.get(gt[Dt]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Qt(F)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Dt=0;Dt<gt.length;Dt++){const Ot=gt[Dt];q.__webglColorRenderbuffer[Dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Dt]);const oe=r.convert(Ot.format,Ot.colorSpace),At=r.convert(Ot.type),Tt=M(Ot.internalFormat,oe,At,Ot.colorSpace,F.isXRRenderTarget===!0),Zt=te(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt,Tt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),W(q.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Et(i.TEXTURE_CUBE_MAP,C);for(let Dt=0;Dt<6;Dt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ot=0;Ot<C.mipmaps.length;Ot++)ht(q.__webglFramebuffer[Dt][Ot],F,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ot);else ht(q.__webglFramebuffer[Dt],F,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);g(C)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Dt=0,Ot=gt.length;Dt<Ot;Dt++){const oe=gt[Dt],At=n.get(oe);e.bindTexture(i.TEXTURE_2D,At.__webglTexture),Et(i.TEXTURE_2D,oe),ht(q.__webglFramebuffer,F,oe,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,0),g(oe)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Dt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Dt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Dt,$.__webglTexture),Et(Dt,C),C.mipmaps&&C.mipmaps.length>0)for(let Ot=0;Ot<C.mipmaps.length;Ot++)ht(q.__webglFramebuffer[Ot],F,C,i.COLOR_ATTACHMENT0,Dt,Ot);else ht(q.__webglFramebuffer,F,C,i.COLOR_ATTACHMENT0,Dt,0);g(C)&&f(Dt),e.unbindTexture()}F.depthBuffer&&wt(F)}function Yt(F){const C=F.textures;for(let q=0,$=C.length;q<$;q++){const gt=C[q];if(g(gt)){const et=x(F),Lt=n.get(gt).__webglTexture;e.bindTexture(et,Lt),f(et),e.unbindTexture()}}}const re=[],j=[];function xe(F){if(F.samples>0){if(Qt(F)===!1){const C=F.textures,q=F.width,$=F.height;let gt=i.COLOR_BUFFER_BIT;const et=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(F),Dt=C.length>1;if(Dt)for(let Ot=0;Ot<C.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ot=0;Ot<C.length;Ot++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(gt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(gt|=i.STENCIL_BUFFER_BIT)),Dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const oe=n.get(C[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,q,$,0,0,q,$,gt,i.NEAREST),c===!0&&(re.length=0,j.length=0,re.push(i.COLOR_ATTACHMENT0+Ot),F.depthBuffer&&F.resolveDepthBuffer===!1&&(re.push(et),j.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,j)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Dt)for(let Ot=0;Ot<C.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const oe=n.get(C[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,oe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){const C=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function te(F){return Math.min(s.maxSamples,F.samples)}function Qt(F){const C=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function qt(F){const C=o.render.frame;h.get(F)!==C&&(h.set(F,C),F.update())}function he(F,C){const q=F.colorSpace,$=F.format,gt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||q!==En&&q!==""&&(Le.getTransfer(q)===Ve?($!==1023||gt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),C}function Nt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Rt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Qt}function LM(i,t){function e(n,s=""){let r;const o=Le.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const DM={type:"move"};class Lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),f=this._getHandJoint(u,v);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NM=`
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

}`;class UM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new an,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new zi({vertexShader:FM,fragmentShader:NM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,d=null,p=null,_=null;const v=new UM,g=e.getContextAttributes();let f=null,x=null;const M=[],y=[],w=new ee;let T=null;const R=new Sn;R.viewport=new ve;const P=new Sn;P.viewport=new ve;const A=[R,P],E=new j_;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let bt=M[it];return bt===void 0&&(bt=new Lc,M[it]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(it){let bt=M[it];return bt===void 0&&(bt=new Lc,M[it]=bt),bt.getGripSpace()},this.getHand=function(it){let bt=M[it];return bt===void 0&&(bt=new Lc,M[it]=bt),bt.getHandSpace()};function N(it){const bt=y.indexOf(it.inputSource);if(bt===-1)return;const ht=M[bt];ht!==void 0&&(ht.update(it.inputSource,it.frame,u||o),ht.dispatchEvent({type:it.type,data:it.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let it=0;it<M.length;it++){const bt=y[it];bt!==null&&(y[it]=null,M[it].disconnect(bt))}L=null,k=null,v.reset(),t.setRenderTarget(f),p=null,d=null,l=null,s=null,x=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return l},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0){const bt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Es(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let bt=null,ht=null,W=null;g.depth&&(W=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=g.stencil?1027:1026,ht=g.stencil?1020:1014);const _t={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(_t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Es(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new xm(d.textureWidth,d.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(it){for(let bt=0;bt<it.removed.length;bt++){const ht=it.removed[bt],W=y.indexOf(ht);W>=0&&(y[W]=null,M[W].disconnect(ht))}for(let bt=0;bt<it.added.length;bt++){const ht=it.added[bt];let W=y.indexOf(ht);if(W===-1){for(let wt=0;wt<M.length;wt++)if(wt>=y.length){y.push(ht),W=wt;break}else if(y[wt]===null){y[wt]=ht,W=wt;break}if(W===-1)break}const _t=M[W];_t&&_t.connect(ht)}}const U=new H,z=new H;function O(it,bt,ht){U.setFromMatrixPosition(bt.matrixWorld),z.setFromMatrixPosition(ht.matrixWorld);const W=U.distanceTo(z),_t=bt.projectionMatrix.elements,wt=ht.projectionMatrix.elements,Rt=_t[14]/(_t[10]-1),Wt=_t[14]/(_t[10]+1),Yt=(_t[9]+1)/_t[5],re=(_t[9]-1)/_t[5],j=(_t[8]-1)/_t[0],xe=(wt[8]+1)/wt[0],te=Rt*j,Qt=Rt*xe,qt=W/(-j+xe),he=qt*-j;if(bt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(he),it.translateZ(qt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),_t[10]===-1)it.projectionMatrix.copy(bt.projectionMatrix),it.projectionMatrixInverse.copy(bt.projectionMatrixInverse);else{const Nt=Rt+qt,F=Wt+qt,C=te-he,q=Qt+(W-he),$=Yt*Wt/F*Nt,gt=re*Wt/F*Nt;it.projectionMatrix.makePerspective(C,q,$,gt,Nt,F),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Z(it,bt){bt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(bt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let bt=it.near,ht=it.far;v.texture!==null&&(v.depthNear>0&&(bt=v.depthNear),v.depthFar>0&&(ht=v.depthFar)),E.near=P.near=R.near=bt,E.far=P.far=R.far=ht,(L!==E.near||k!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,k=E.far),R.layers.mask=it.layers.mask|2,P.layers.mask=it.layers.mask|4,E.layers.mask=R.layers.mask|P.layers.mask;const W=it.parent,_t=E.cameras;Z(E,W);for(let wt=0;wt<_t.length;wt++)Z(_t[wt],W);_t.length===2?O(E,R,P):E.projectionMatrix.copy(R.projectionMatrix),Y(it,E,W)};function Y(it,bt,ht){ht===null?it.matrix.copy(bt.matrixWorld):(it.matrix.copy(ht.matrixWorld),it.matrix.invert(),it.matrix.multiply(bt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(bt.projectionMatrix),it.projectionMatrixInverse.copy(bt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=lr*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let lt=null;function Et(it,bt){if(h=bt.getViewerPose(u||o),_=bt,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let W=!1;ht.length!==E.cameras.length&&(E.cameras.length=0,W=!0);for(let wt=0;wt<ht.length;wt++){const Rt=ht[wt];let Wt=null;if(p!==null)Wt=p.getViewport(Rt);else{const re=l.getViewSubImage(d,Rt);Wt=re.viewport,wt===0&&(t.setRenderTargetTextures(x,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(x))}let Yt=A[wt];Yt===void 0&&(Yt=new Sn,Yt.layers.enable(wt),Yt.viewport=new ve,A[wt]=Yt),Yt.matrix.fromArray(Rt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Rt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),wt===0&&(E.matrix.copy(Yt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),W===!0&&E.cameras.push(Yt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const wt=l.getDepthInformation(ht[0]);wt&&wt.isValid&&wt.texture&&v.init(t,wt,s.renderState)}}for(let ht=0;ht<M.length;ht++){const W=y[ht],_t=M[ht];W!==null&&_t!==void 0&&_t.update(W,bt,u||o)}lt&&lt(it,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),_=null}const kt=new wm;kt.setAnimationLoop(Et),this.setAnimationLoop=function(it){lt=it},this.dispose=function(){}}}const hs=new Xn,OM=new ae;function BM(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,hm(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,x,M,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),l(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),_(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),v(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,x,M):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===1&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===1&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=t.get(f),M=x.envMap,y=x.envMapRotation;M&&(g.envMap.value=M,hs.copy(y),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(hs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,x,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function l(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function v(g,f){const x=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function GM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function u(x,M){let y=s[x.id];y===void 0&&(_(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",g));const w=M.program;n.updateUBOMapping(x,w);const T=t.render.frame;r[x.id]!==T&&(d(x),r[x.id]=T)}function h(x){const M=l();x.__bindingPointIndex=M;const y=i.createBuffer(),w=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function l(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],y=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,R=y.length;T<R;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let A=0,E=P.length;A<E;A++){const L=P[A];if(p(L,T,A,w)===!0){const k=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let G=0;G<N.length;G++){const U=N[G],z=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+B,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,y,w){const T=x.value,R=M+"_"+y;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const P=w[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(x){const M=x.uniforms;let y=0;const w=16;for(let R=0,P=M.length;R<P;R++){const A=Array.isArray(M[R])?M[R]:[M[R]];for(let E=0,L=A.length;E<L;E++){const k=A[E],N=Array.isArray(k.value)?k.value:[k.value];for(let B=0,G=N.length;B<G;B++){const U=N[B],z=v(U),O=y%w,Z=O%z.boundary,Y=O+Z;y+=Z,Y!==0&&w-Y<z.storage&&(y+=w-Y),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=z.storage}}}const T=y%w;return T>0&&(y+=w-T),x.__size=y,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:u,dispose:f}}class zM{constructor(t={}){const{canvas:e=B0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,f=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let w=!1,T=0,R=0,P=null,A=-1,E=null;const L=new ve,k=new ve;let N=null;const B=new ie(0);let G=0,U=e.width,z=e.height,O=1,Z=null,Y=null;const lt=new ve(0,0,U,z),Et=new ve(0,0,U,z);let kt=!1;const it=new iu;let bt=!1,ht=!1;const W=new ae,_t=new ae,wt=new H,Rt=new ve,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function re(){return P===null?O:1}let j=n;function xe(b,m){return e.getContext(b,m)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",zt,!1),j===null){const m="webgl2";if(j=xe(m,b),j===null)throw xe(m)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let te,Qt,qt,he,Nt,F,C,q,$,gt,et,Lt,Dt,Ot,oe,At,Tt,Zt,Jt,jt,pe,St,vt,K;function Ut(){te=new Yx(j),te.init(),St=new LM(j,te),Qt=new Wx(j,te,t,St),qt=new IM(j,te),Qt.reverseDepthBuffer&&d&&qt.buffers.depth.setReversed(!0),he=new Qx(j),Nt=new _M,F=new PM(j,te,qt,Nt,Qt,St,he),C=new Xx(y),q=new $x(y),$=new ob(j),vt=new Hx(j,$),gt=new Zx(j,$,he,vt),et=new ey(j,gt,$,he),Jt=new ty(j,Qt,F),At=new jx(Nt),Lt=new gM(y,C,q,te,Qt,vt,At),Dt=new BM(y,Nt),Ot=new vM,oe=new EM(te),Zt=new zx(y,C,q,qt,et,p,c),Tt=new RM(y,et,Qt),K=new GM(j,he,Qt,qt),jt=new Vx(j,te,he),pe=new Jx(j,te,he),he.programs=Lt.programs,y.capabilities=Qt,y.extensions=te,y.properties=Nt,y.renderLists=Ot,y.shadowMap=Tt,y.state=qt,y.info=he}Ut();const dt=new kM(y,j);this.xr=dt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(U,z,!1))},this.getSize=function(b){return b.set(U,z)},this.setSize=function(b,m,D=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,z=m,e.width=Math.floor(b*O),e.height=Math.floor(m*O),D===!0&&(e.style.width=b+"px",e.style.height=m+"px"),this.setViewport(0,0,b,m)},this.getDrawingBufferSize=function(b){return b.set(U*O,z*O).floor()},this.setDrawingBufferSize=function(b,m,D){U=b,z=m,O=D,e.width=Math.floor(b*D),e.height=Math.floor(m*D),this.setViewport(0,0,b,m)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,m,D,I){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,m,D,I),qt.viewport(L.copy(lt).multiplyScalar(O).round())},this.getScissor=function(b){return b.copy(Et)},this.setScissor=function(b,m,D,I){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,m,D,I),qt.scissor(k.copy(Et).multiplyScalar(O).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){qt.setScissorTest(kt=b)},this.setOpaqueSort=function(b){Z=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(b=!0,m=!0,D=!0){let I=0;if(b){let S=!1;if(P!==null){const V=P.texture.format;S=V===1033||V===1031||V===1029}if(S){const V=P.texture.type,X=V===1009||V===1014||V===1012||V===1020||V===1017||V===1018,Q=Zt.getClearColor(),rt=Zt.getClearAlpha(),nt=Q.r,tt=Q.g,pt=Q.b;X?(_[0]=nt,_[1]=tt,_[2]=pt,_[3]=rt,j.clearBufferuiv(j.COLOR,0,_)):(v[0]=nt,v[1]=tt,v[2]=pt,v[3]=rt,j.clearBufferiv(j.COLOR,0,v))}else I|=j.COLOR_BUFFER_BIT}m&&(I|=j.DEPTH_BUFFER_BIT),D&&(I|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),Zt.dispose(),Ot.dispose(),oe.dispose(),Nt.dispose(),C.dispose(),q.dispose(),et.dispose(),vt.dispose(),K.dispose(),Lt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Nn),dt.removeEventListener("sessionend",ci),$e.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=he.autoReset,m=Tt.enabled,D=Tt.autoUpdate,I=Tt.needsUpdate,S=Tt.type;Ut(),he.autoReset=b,Tt.enabled=m,Tt.autoUpdate=D,Tt.needsUpdate=I,Tt.type=S}function zt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const m=b.target;m.removeEventListener("dispose",se),ce(m)}function ce(b){ze(b),Nt.remove(b)}function ze(b){const m=Nt.get(b).programs;m!==void 0&&(m.forEach(function(D){Lt.releaseProgram(D)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,m,D,I,S,V){m===null&&(m=Wt);const X=S.isMesh&&S.matrixWorld.determinant()<0,Q=ot(b,m,D,I,S);qt.setMaterial(I,X);let rt=D.index,nt=1;if(I.wireframe===!0){if(rt=gt.getWireframeAttribute(D),rt===void 0)return;nt=2}const tt=D.drawRange,pt=D.attributes.position;let ut=tt.start*nt,ft=(tt.start+tt.count)*nt;V!==null&&(ut=Math.max(ut,V.start*nt),ft=Math.min(ft,(V.start+V.count)*nt)),rt!==null?(ut=Math.max(ut,0),ft=Math.min(ft,rt.count)):pt!=null&&(ut=Math.max(ut,0),ft=Math.min(ft,pt.count));const xt=ft-ut;if(xt<0||xt===1/0)return;vt.setup(S,I,Q,D,rt);let at,J=jt;if(rt!==null&&(at=$.get(rt),J=pe,J.setIndex(at)),S.isMesh)I.wireframe===!0?(qt.setLineWidth(I.wireframeLinewidth*re()),J.setMode(j.LINES)):J.setMode(j.TRIANGLES);else if(S.isLine){let st=I.linewidth;st===void 0&&(st=1),qt.setLineWidth(st*re()),S.isLineSegments?J.setMode(j.LINES):S.isLineLoop?J.setMode(j.LINE_LOOP):J.setMode(j.LINE_STRIP)}else S.isPoints?J.setMode(j.POINTS):S.isSprite&&J.setMode(j.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)J.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))J.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const st=S._multiDrawStarts,mt=S._multiDrawCounts,It=S._multiDrawCount,Pt=rt?$.get(rt).bytesPerElement:1,Kt=Nt.get(I).currentProgram.getUniforms();for(let ne=0;ne<It;ne++)Kt.setValue(j,"_gl_DrawID",ne),J.render(st[ne]/Pt,mt[ne])}else if(S.isInstancedMesh)J.renderInstances(ut,xt,S.count);else if(D.isInstancedBufferGeometry){const st=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,mt=Math.min(D.instanceCount,st);J.renderInstances(ut,xt,mt)}else J.render(ut,xt)};function Ee(b,m,D){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,kn(b,m,D),b.side=0,b.needsUpdate=!0,kn(b,m,D),b.side=2):kn(b,m,D)}this.compile=function(b,m,D=null){D===null&&(D=b),f=oe.get(D),f.init(m),M.push(f),D.traverseVisible(function(S){S.isLight&&S.layers.test(m.layers)&&(f.pushLight(S),S.castShadow&&f.pushShadow(S))}),b!==D&&b.traverseVisible(function(S){S.isLight&&S.layers.test(m.layers)&&(f.pushLight(S),S.castShadow&&f.pushShadow(S))}),f.setupLights();const I=new Set;return b.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const V=S.material;if(V)if(Array.isArray(V))for(let X=0;X<V.length;X++){const Q=V[X];Ee(Q,D,S),I.add(Q)}else Ee(V,D,S),I.add(V)}),M.pop(),f=null,I},this.compileAsync=function(b,m,D=null){const I=this.compile(b,m,D);return new Promise(S=>{function V(){if(I.forEach(function(X){Nt.get(X).currentProgram.isReady()&&I.delete(X)}),I.size===0){S(b);return}setTimeout(V,10)}te.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let me=null;function un(b){me&&me(b)}function Nn(){$e.stop()}function ci(){$e.start()}const $e=new wm;$e.setAnimationLoop(un),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(b){me=b,dt.setAnimationLoop(b),b===null?$e.stop():$e.start()},dt.addEventListener("sessionstart",Nn),dt.addEventListener("sessionend",ci),this.render=function(b,m){if(m!==void 0&&m.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(m),m=dt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,m,P),f=oe.get(b,M.length),f.init(m),M.push(f),_t.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse),it.setFromProjectionMatrix(_t),ht=this.localClippingEnabled,bt=At.init(this.clippingPlanes,ht),g=Ot.get(b,x.length),g.init(),x.push(g),dt.enabled===!0&&dt.isPresenting===!0){const V=y.xr.getDepthSensingMesh();V!==null&&Tn(V,m,-1/0,y.sortObjects)}Tn(b,m,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(Z,Y),Yt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Yt&&Zt.addToRenderList(g,b),this.info.render.frame++,bt===!0&&At.beginShadows();const D=f.state.shadowsArray;Tt.render(D,b,m),bt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=g.opaque,S=g.transmissive;if(f.setupLights(),m.isArrayCamera){const V=m.cameras;if(S.length>0)for(let X=0,Q=V.length;X<Q;X++){const rt=V[X];Kn(I,S,b,rt)}Yt&&Zt.render(b);for(let X=0,Q=V.length;X<Q;X++){const rt=V[X];Mi(g,b,rt,rt.viewport)}}else S.length>0&&Kn(I,S,b,m),Yt&&Zt.render(b),Mi(g,b,m);P!==null&&(F.updateMultisampleRenderTarget(P),F.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,m),vt.resetDefaultState(),A=-1,E=null,M.pop(),M.length>0?(f=M[M.length-1],bt===!0&&At.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Tn(b,m,D,I){if(b.visible===!1)return;if(b.layers.test(m.layers)){if(b.isGroup)D=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(m);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||it.intersectsSprite(b)){I&&Rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);const X=et.update(b),Q=b.material;Q.visible&&g.push(b,X,Q,D,Rt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||it.intersectsObject(b))){const X=et.update(b),Q=b.material;if(I&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Rt.copy(b.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),Rt.copy(X.boundingSphere.center)),Rt.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(Q)){const rt=X.groups;for(let nt=0,tt=rt.length;nt<tt;nt++){const pt=rt[nt],ut=Q[pt.materialIndex];ut&&ut.visible&&g.push(b,X,ut,D,Rt.z,pt)}}else Q.visible&&g.push(b,X,Q,D,Rt.z,null)}}const V=b.children;for(let X=0,Q=V.length;X<Q;X++)Tn(V[X],m,D,I)}function Mi(b,m,D,I){const S=b.opaque,V=b.transmissive,X=b.transparent;f.setupLightsView(D),bt===!0&&At.setGlobalState(y.clippingPlanes,D),I&&qt.viewport(L.copy(I)),S.length>0&&Un(S,m,D),V.length>0&&Un(V,m,D),X.length>0&&Un(X,m,D),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Kn(b,m,D,I){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[I.id]===void 0&&(f.state.transmissionRenderTarget[I.id]=new Es(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const V=f.state.transmissionRenderTarget[I.id],X=I.viewport||L;V.setSize(X.z,X.w);const Q=y.getRenderTarget();y.setRenderTarget(V),y.getClearColor(B),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),Yt&&Zt.render(D);const rt=y.toneMapping;y.toneMapping=0;const nt=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),f.setupLightsView(I),bt===!0&&At.setGlobalState(y.clippingPlanes,I),Un(b,D,I),F.updateMultisampleRenderTarget(V),F.updateRenderTargetMipmap(V),te.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let pt=0,ut=m.length;pt<ut;pt++){const ft=m[pt],xt=ft.object,at=ft.geometry,J=ft.material,st=ft.group;if(J.side===2&&xt.layers.test(I.layers)){const mt=J.side;J.side=1,J.needsUpdate=!0,li(xt,D,I,at,J,st),J.side=mt,J.needsUpdate=!0,tt=!0}}tt===!0&&(F.updateMultisampleRenderTarget(V),F.updateRenderTargetMipmap(V))}y.setRenderTarget(Q),y.setClearColor(B,G),nt!==void 0&&(I.viewport=nt),y.toneMapping=rt}function Un(b,m,D){const I=m.isScene===!0?m.overrideMaterial:null;for(let S=0,V=b.length;S<V;S++){const X=b[S],Q=X.object,rt=X.geometry,nt=I===null?X.material:I,tt=X.group;Q.layers.test(D.layers)&&li(Q,m,D,rt,nt,tt)}}function li(b,m,D,I,S,V){b.onBeforeRender(y,m,D,I,S,V),b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),S.onBeforeRender(y,m,D,I,b,V),S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,y.renderBufferDirect(D,m,I,S,b,V),S.side=0,S.needsUpdate=!0,y.renderBufferDirect(D,m,I,S,b,V),S.side=2):y.renderBufferDirect(D,m,I,S,b,V),b.onAfterRender(y,m,D,I,S,V)}function kn(b,m,D){m.isScene!==!0&&(m=Wt);const I=Nt.get(b),S=f.state.lights,V=f.state.shadowsArray,X=S.state.version,Q=Lt.getParameters(b,S.state,V,m,D),rt=Lt.getProgramCacheKey(Q);let nt=I.programs;I.environment=b.isMeshStandardMaterial?m.environment:null,I.fog=m.fog,I.envMap=(b.isMeshStandardMaterial?q:C).get(b.envMap||I.environment),I.envMapRotation=I.environment!==null&&b.envMap===null?m.environmentRotation:b.envMapRotation,nt===void 0&&(b.addEventListener("dispose",se),nt=new Map,I.programs=nt);let tt=nt.get(rt);if(tt!==void 0){if(I.currentProgram===tt&&I.lightsStateVersion===X)return $n(b,Q),tt}else Q.uniforms=Lt.getUniforms(b),b.onBeforeCompile(Q,y),tt=Lt.acquireProgram(Q,rt),nt.set(rt,tt),I.uniforms=Q.uniforms;const pt=I.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(pt.clippingPlanes=At.uniform),$n(b,Q),I.needsLights=ct(b),I.lightsStateVersion=X,I.needsLights&&(pt.ambientLightColor.value=S.state.ambient,pt.lightProbe.value=S.state.probe,pt.directionalLights.value=S.state.directional,pt.directionalLightShadows.value=S.state.directionalShadow,pt.spotLights.value=S.state.spot,pt.spotLightShadows.value=S.state.spotShadow,pt.rectAreaLights.value=S.state.rectArea,pt.ltc_1.value=S.state.rectAreaLTC1,pt.ltc_2.value=S.state.rectAreaLTC2,pt.pointLights.value=S.state.point,pt.pointLightShadows.value=S.state.pointShadow,pt.hemisphereLights.value=S.state.hemi,pt.directionalShadowMap.value=S.state.directionalShadowMap,pt.directionalShadowMatrix.value=S.state.directionalShadowMatrix,pt.spotShadowMap.value=S.state.spotShadowMap,pt.spotLightMatrix.value=S.state.spotLightMatrix,pt.spotLightMap.value=S.state.spotLightMap,pt.pointShadowMap.value=S.state.pointShadowMap,pt.pointShadowMatrix.value=S.state.pointShadowMatrix),I.currentProgram=tt,I.uniformsList=null,tt}function ui(b){if(b.uniformsList===null){const m=b.currentProgram.getUniforms();b.uniformsList=da.seqWithValue(m.seq,b.uniforms)}return b.uniformsList}function $n(b,m){const D=Nt.get(b);D.outputColorSpace=m.outputColorSpace,D.batching=m.batching,D.batchingColor=m.batchingColor,D.instancing=m.instancing,D.instancingColor=m.instancingColor,D.instancingMorph=m.instancingMorph,D.skinning=m.skinning,D.morphTargets=m.morphTargets,D.morphNormals=m.morphNormals,D.morphColors=m.morphColors,D.morphTargetsCount=m.morphTargetsCount,D.numClippingPlanes=m.numClippingPlanes,D.numIntersection=m.numClipIntersection,D.vertexAlphas=m.vertexAlphas,D.vertexTangents=m.vertexTangents,D.toneMapping=m.toneMapping}function ot(b,m,D,I,S){m.isScene!==!0&&(m=Wt),F.resetTextureUnits();const V=m.fog,X=I.isMeshStandardMaterial?m.environment:null,Q=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:En,rt=(I.isMeshStandardMaterial?q:C).get(I.envMap||X),nt=I.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,tt=!!D.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),pt=!!D.morphAttributes.position,ut=!!D.morphAttributes.normal,ft=!!D.morphAttributes.color;let xt=0;I.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=y.toneMapping);const at=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=at!==void 0?at.length:0,st=Nt.get(I),mt=f.state.lights;if(bt===!0&&(ht===!0||b!==E)){const fe=b===E&&I.id===A;At.setState(I,b,fe)}let It=!1;I.version===st.__version?(st.needsLights&&st.lightsStateVersion!==mt.state.version||st.outputColorSpace!==Q||S.isBatchedMesh&&st.batching===!1||!S.isBatchedMesh&&st.batching===!0||S.isBatchedMesh&&st.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&st.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&st.instancing===!1||!S.isInstancedMesh&&st.instancing===!0||S.isSkinnedMesh&&st.skinning===!1||!S.isSkinnedMesh&&st.skinning===!0||S.isInstancedMesh&&st.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&st.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&st.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&st.instancingMorph===!1&&S.morphTexture!==null||st.envMap!==rt||I.fog===!0&&st.fog!==V||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==At.numPlanes||st.numIntersection!==At.numIntersection)||st.vertexAlphas!==nt||st.vertexTangents!==tt||st.morphTargets!==pt||st.morphNormals!==ut||st.morphColors!==ft||st.toneMapping!==xt||st.morphTargetsCount!==J)&&(It=!0):(It=!0,st.__version=I.version);let Pt=st.currentProgram;It===!0&&(Pt=kn(I,m,S));let Kt=!1,ne=!1,Te=!1;const de=Pt.getUniforms(),Xt=st.uniforms;if(qt.useProgram(Pt.program)&&(Kt=!0,ne=!0,Te=!0),I.id!==A&&(A=I.id,ne=!0),Kt||E!==b){qt.buffers.depth.getReversed()?(W.copy(b.projectionMatrix),z0(W),H0(W),de.setValue(j,"projectionMatrix",W)):de.setValue(j,"projectionMatrix",b.projectionMatrix),de.setValue(j,"viewMatrix",b.matrixWorldInverse);const De=de.map.cameraPosition;De!==void 0&&De.setValue(j,wt.setFromMatrixPosition(b.matrixWorld)),Qt.logarithmicDepthBuffer&&de.setValue(j,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&de.setValue(j,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,ne=!0,Te=!0)}if(S.isSkinnedMesh){de.setOptional(j,S,"bindMatrix"),de.setOptional(j,S,"bindMatrixInverse");const fe=S.skeleton;fe&&(fe.boneTexture===null&&fe.computeBoneTexture(),de.setValue(j,"boneTexture",fe.boneTexture,F))}S.isBatchedMesh&&(de.setOptional(j,S,"batchingTexture"),de.setValue(j,"batchingTexture",S._matricesTexture,F),de.setOptional(j,S,"batchingIdTexture"),de.setValue(j,"batchingIdTexture",S._indirectTexture,F),de.setOptional(j,S,"batchingColorTexture"),S._colorsTexture!==null&&de.setValue(j,"batchingColorTexture",S._colorsTexture,F));const ge=D.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&Jt.update(S,D,Pt),(ne||st.receiveShadow!==S.receiveShadow)&&(st.receiveShadow=S.receiveShadow,de.setValue(j,"receiveShadow",S.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Xt.envMap.value=rt,Xt.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&m.environment!==null&&(Xt.envMapIntensity.value=m.environmentIntensity),ne&&(de.setValue(j,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&Ct(Xt,Te),V&&I.fog===!0&&Dt.refreshFogUniforms(Xt,V),Dt.refreshMaterialUniforms(Xt,I,O,z,f.state.transmissionRenderTarget[b.id]),da.upload(j,ui(st),Xt,F)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(da.upload(j,ui(st),Xt,F),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&de.setValue(j,"center",S.center),de.setValue(j,"modelViewMatrix",S.modelViewMatrix),de.setValue(j,"normalMatrix",S.normalMatrix),de.setValue(j,"modelMatrix",S.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const fe=I.uniformsGroups;for(let De=0,Mt=fe.length;De<Mt;De++){const le=fe[De];K.update(le,Pt),K.bind(le,Pt)}}return Pt}function Ct(b,m){b.ambientLightColor.needsUpdate=m,b.lightProbe.needsUpdate=m,b.directionalLights.needsUpdate=m,b.directionalLightShadows.needsUpdate=m,b.pointLights.needsUpdate=m,b.pointLightShadows.needsUpdate=m,b.spotLights.needsUpdate=m,b.spotLightShadows.needsUpdate=m,b.rectAreaLights.needsUpdate=m,b.hemisphereLights.needsUpdate=m}function ct(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,m,D){Nt.get(b.texture).__webglTexture=m,Nt.get(b.depthTexture).__webglTexture=D;const I=Nt.get(b);I.__hasExternalTextures=!0,I.__autoAllocateDepthBuffer=D===void 0,I.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,m){const D=Nt.get(b);D.__webglFramebuffer=m,D.__useDefaultFramebuffer=m===void 0},this.setRenderTarget=function(b,m=0,D=0){P=b,T=m,R=D;let I=!0,S=null,V=!1,X=!1;if(b){const rt=Nt.get(b);if(rt.__useDefaultFramebuffer!==void 0)qt.bindFramebuffer(j.FRAMEBUFFER,null),I=!1;else if(rt.__webglFramebuffer===void 0)F.setupRenderTarget(b);else if(rt.__hasExternalTextures)F.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const pt=b.depthTexture;if(rt.__boundDepthTexture!==pt){if(pt!==null&&Nt.has(pt)&&(b.width!==pt.image.width||b.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(b)}}const nt=b.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(X=!0);const tt=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(tt[m])?S=tt[m][D]:S=tt[m],V=!0):b.samples>0&&F.useMultisampledRTT(b)===!1?S=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(tt)?S=tt[D]:S=tt,L.copy(b.viewport),k.copy(b.scissor),N=b.scissorTest}else L.copy(lt).multiplyScalar(O).floor(),k.copy(Et).multiplyScalar(O).floor(),N=kt;if(qt.bindFramebuffer(j.FRAMEBUFFER,S)&&I&&qt.drawBuffers(b,S),qt.viewport(L),qt.scissor(k),qt.setScissorTest(N),V){const rt=Nt.get(b.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+m,rt.__webglTexture,D)}else if(X){const rt=Nt.get(b.texture),nt=m||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,rt.__webglTexture,D||0,nt)}A=-1},this.readRenderTargetPixels=function(b,m,D,I,S,V,X){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Q=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&X!==void 0&&(Q=Q[X]),Q){qt.bindFramebuffer(j.FRAMEBUFFER,Q);try{const rt=b.texture,nt=rt.format,tt=rt.type;if(!Qt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}m>=0&&m<=b.width-I&&D>=0&&D<=b.height-S&&j.readPixels(m,D,I,S,St.convert(nt),St.convert(tt),V)}finally{const rt=P!==null?Nt.get(P).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(b,m,D,I,S,V,X){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Q=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&X!==void 0&&(Q=Q[X]),Q){const rt=b.texture,nt=rt.format,tt=rt.type;if(!Qt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(m>=0&&m<=b.width-I&&D>=0&&D<=b.height-S){qt.bindFramebuffer(j.FRAMEBUFFER,Q);const pt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,pt),j.bufferData(j.PIXEL_PACK_BUFFER,V.byteLength,j.STREAM_READ),j.readPixels(m,D,I,S,St.convert(nt),St.convert(tt),0);const ut=P!==null?Nt.get(P).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,ut);const ft=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await G0(j,ft,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,pt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,V),j.deleteBuffer(pt),j.deleteSync(ft),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,m=null,D=0){b.isTexture!==!0&&(er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),m=arguments[0]||null,b=arguments[1]);const I=Math.pow(2,-D),S=Math.floor(b.image.width*I),V=Math.floor(b.image.height*I),X=m!==null?m.x:0,Q=m!==null?m.y:0;F.setTexture2D(b,0),j.copyTexSubImage2D(j.TEXTURE_2D,D,0,0,X,Q,S,V),qt.unbindTexture()};const Bt=j.createFramebuffer(),Gt=j.createFramebuffer();this.copyTextureToTexture=function(b,m,D=null,I=null,S=0,V=null){b.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1],m=arguments[2],V=arguments[3]||0,D=null),V===null&&(S!==0?(er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),V=S,S=0):V=0);let X,Q,rt,nt,tt,pt,ut,ft,xt;const at=b.isCompressedTexture?b.mipmaps[V]:b.image;if(D!==null)X=D.max.x-D.min.x,Q=D.max.y-D.min.y,rt=D.isBox3?D.max.z-D.min.z:1,nt=D.min.x,tt=D.min.y,pt=D.isBox3?D.min.z:0;else{const ge=Math.pow(2,-S);X=Math.floor(at.width*ge),Q=Math.floor(at.height*ge),b.isDataArrayTexture?rt=at.depth:b.isData3DTexture?rt=Math.floor(at.depth*ge):rt=1,nt=0,tt=0,pt=0}I!==null?(ut=I.x,ft=I.y,xt=I.z):(ut=0,ft=0,xt=0);const J=St.convert(m.format),st=St.convert(m.type);let mt;m.isData3DTexture?(F.setTexture3D(m,0),mt=j.TEXTURE_3D):m.isDataArrayTexture||m.isCompressedArrayTexture?(F.setTexture2DArray(m,0),mt=j.TEXTURE_2D_ARRAY):(F.setTexture2D(m,0),mt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,m.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,m.unpackAlignment);const It=j.getParameter(j.UNPACK_ROW_LENGTH),Pt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Kt=j.getParameter(j.UNPACK_SKIP_PIXELS),ne=j.getParameter(j.UNPACK_SKIP_ROWS),Te=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,at.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,at.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,nt),j.pixelStorei(j.UNPACK_SKIP_ROWS,tt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,pt);const de=b.isDataArrayTexture||b.isData3DTexture,Xt=m.isDataArrayTexture||m.isData3DTexture;if(b.isDepthTexture){const ge=Nt.get(b),fe=Nt.get(m),De=Nt.get(ge.__renderTarget),Mt=Nt.get(fe.__renderTarget);qt.bindFramebuffer(j.READ_FRAMEBUFFER,De.__webglFramebuffer),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let le=0;le<rt;le++)de&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,S,pt+le),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Nt.get(m).__webglTexture,V,xt+le)),j.blitFramebuffer(nt,tt,X,Q,ut,ft,X,Q,j.DEPTH_BUFFER_BIT,j.NEAREST);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(S!==0||b.isRenderTargetTexture||Nt.has(b)){const ge=Nt.get(b),fe=Nt.get(m);qt.bindFramebuffer(j.READ_FRAMEBUFFER,Bt),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Gt);for(let De=0;De<rt;De++)de?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ge.__webglTexture,S,pt+De):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ge.__webglTexture,S),Xt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fe.__webglTexture,V,xt+De):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,fe.__webglTexture,V),S!==0?j.blitFramebuffer(nt,tt,X,Q,ut,ft,X,Q,j.COLOR_BUFFER_BIT,j.NEAREST):Xt?j.copyTexSubImage3D(mt,V,ut,ft,xt+De,nt,tt,X,Q):j.copyTexSubImage2D(mt,V,ut,ft,nt,tt,X,Q);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Xt?b.isDataTexture||b.isData3DTexture?j.texSubImage3D(mt,V,ut,ft,xt,X,Q,rt,J,st,at.data):m.isCompressedArrayTexture?j.compressedTexSubImage3D(mt,V,ut,ft,xt,X,Q,rt,J,at.data):j.texSubImage3D(mt,V,ut,ft,xt,X,Q,rt,J,st,at):b.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,V,ut,ft,X,Q,J,st,at.data):b.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,V,ut,ft,at.width,at.height,J,at.data):j.texSubImage2D(j.TEXTURE_2D,V,ut,ft,X,Q,J,st,at);j.pixelStorei(j.UNPACK_ROW_LENGTH,It),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Pt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Kt),j.pixelStorei(j.UNPACK_SKIP_ROWS,ne),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Te),V===0&&m.generateMipmaps&&j.generateMipmap(mt),qt.unbindTexture()},this.copyTextureToTexture3D=function(b,m,D=null,I=null,S=0){return b.isTexture!==!0&&(er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,I=arguments[1]||null,b=arguments[2],m=arguments[3],S=arguments[4]||0),er('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,m,D,I,S)},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&F.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?F.setTextureCube(b,0):b.isData3DTexture?F.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?F.setTexture2DArray(b,0):F.setTexture2D(b,0),qt.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,qt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}function Jh(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class HM extends _r{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new qM(e)}),this.register(function(e){return new KM(e)}),this.register(function(e){return new iS(e)}),this.register(function(e){return new sS(e)}),this.register(function(e){return new rS(e)}),this.register(function(e){return new YM(e)}),this.register(function(e){return new ZM(e)}),this.register(function(e){return new JM(e)}),this.register(function(e){return new QM(e)}),this.register(function(e){return new XM(e)}),this.register(function(e){return new tS(e)}),this.register(function(e){return new $M(e)}),this.register(function(e){return new nS(e)}),this.register(function(e){return new eS(e)}),this.register(function(e){return new WM(e)}),this.register(function(e){return new oS(e)}),this.register(function(e){return new aS(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Kr.extractUrlBase(t);o=Kr.resolveURL(u,this.path)}else o=Kr.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Em(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Lm){try{o[Ce.KHR_BINARY_GLTF]=new cS(t)}catch(l){s&&s(l);return}r=JSON.parse(o[Ce.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new yS(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case Ce.KHR_MATERIALS_UNLIT:o[l]=new jM;break;case Ce.KHR_DRACO_MESH_COMPRESSION:o[l]=new lS(r,this.dracoLoader);break;case Ce.KHR_TEXTURE_TRANSFORM:o[l]=new uS;break;case Ce.KHR_MESH_QUANTIZATION:o[l]=new hS;break;default:d.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function VM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WM{constructor(t){this.parser=t,this.name=Ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],En);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new hu(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new G_(h),u.distance=l;break;case"spot":u=new O_(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Fi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class jM{constructor(){this.name=Ce.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(t,e,n){const s=[];t.color=new ie(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],En),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,qe))}return Promise.all(s)}}class XM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class qM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ee(a,a)}return Promise.all(r)}}class KM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $M{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class YM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ie(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],En)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,qe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ZM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class JM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new ie().setRGB(a[0],a[1],a[2],En),Promise.all(r)}}class QM{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tS{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new ie().setRGB(a[0],a[1],a[2],En),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,qe)),Promise.all(r)}}class eS{constructor(t){this.parser=t,this.name=Ce.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class nS{constructor(t){this.parser=t,this.name=Ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:xi}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class iS{constructor(t){this.parser=t,this.name=Ce.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class sS{constructor(t){this.parser=t,this.name=Ce.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class rS{constructor(t){this.parser=t,this.name=Ce.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class oS{constructor(t){this.name=Ce.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(p),h,l,d,s.mode,s.filter),p})})}else return null}}class aS{constructor(t){this.name=Ce.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Hn.TRIANGLES&&u.mode!==Hn.TRIANGLE_STRIP&&u.mode!==Hn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,p=[];for(const _ of l){const v=new ae,g=new H,f=new sn,x=new H(1,1,1),M=new g_(_.geometry,_.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&x.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,v.compose(g,f,x));for(const y in c)if(y==="_COLOR_0"){const w=c[y];M.instanceColor=new Sl(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,c[y]);Ke.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Lm="glTF",Fr=12,Qh={JSON:1313821514,BIN:5130562};class cS{constructor(t){this.name=Ce.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Lm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Fr,r=new DataView(t,Fr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Qh.JSON){const u=new Uint8Array(t,Fr+o,a);this.content=n.decode(u)}else if(c===Qh.BIN){const u=Fr+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lS{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ce.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=Cl[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=Cl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],p=or[d.componentType];u[l]=p.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(p){for(const _ in p.attributes){const v=p.attributes[_],g=c[_];g!==void 0&&(v.normalized=g)}l(p)},a,u,En,d)})})}}class uS{constructor(){this.name=Ce.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class hS{constructor(){this.name=Ce.KHR_MESH_QUANTIZATION}}class Dm extends so{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,d=l*l,p=d*l,_=t*u,v=_-u,g=-2*p+3*d,f=p-d,x=1-g,M=f-d+l;for(let y=0;y!==a;y++){const w=o[v+y+a],T=o[v+y+c]*h,R=o[_+y+a],P=o[_+y]*h;r[y]=x*w+M*T+g*R+f*P}return r}}const dS=new sn;class fS extends Dm{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return dS.fromArray(r).normalize().toArray(r),r}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},td={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},ed={33071:1001,33648:1002,10497:1e3},Dc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pS={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Fc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Hi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function ds(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Fi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function gS(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _S(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bS(i){let t;const e=i.extensions&&i.extensions[Ce.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Nc(e.attributes):t=i.indices+":"+Nc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Nc(i.targets[n]);return t}function Nc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Il(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const xS=new ae;class yS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new VM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new cu(this.options.manager):this.textureLoader=new W_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Em(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ds(r,a,s),Fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ce.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Kr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Dc[s.type],a=or[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new Ne(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Dc[s.type],u=or[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let v,g;if(p&&p!==l){const f=Math.floor(d/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let M=e.cache.get(x);M||(v=new u(a,f*p,s.count*p/h),M=new eu(v,p/h),e.cache.add(x,M)),g=new si(M,c,d%p/h,_)}else a===null?v=new u(s.count*c):v=new u(a,d,s.count*c),g=new Ne(v,c,_);if(s.sparse!==void 0){const f=Dc.SCALAR,x=or[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,w=new x(o[1],M,s.sparse.count*f),T=new u(o[2],y,s.sparse.count*c);a!==null&&(g=new Ne(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,P=w.length;R<P;R++){const A=w[R];if(g.setX(A,T[R*c]),c>=2&&g.setY(A,T[R*c+1]),c>=3&&g.setZ(A,T[R*c+2]),c>=4&&g.setW(A,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=td[d.magFilter]||1006,h.minFilter=td[d.minFilter]||1008,h.wrapS=ed[d.wrapS]||1e3,h.wrapT=ed[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,p){let _=d;e.isImageBitmapLoader===!0&&(_=function(v){const g=new an(v);g.needsUpdate=!0,d(g)}),e.load(Kr.resolveURL(l,r.path),_,void 0,p)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),Fi(l,o),l.userData.mimeType=o.mimeType||vS(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ce.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ce.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ce.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ru,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bm,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Hi}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[Ce.KHR_MATERIALS_UNLIT]){const l=s[Ce.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new ie(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],En),a.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,qe)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||Fc.OPAQUE;if(h===Fc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Fc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==on&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){const l=r.emissiveFactor;a.emissive=new ie().setRGB(l[0],l[1],l[2],En)}return r.emissiveTexture!==void 0&&o!==on&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,qe)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),Fi(l,r),e.associations.set(l,{materials:t}),r.extensions&&ds(s,l,r),l})}createUniqueName(t){const e=Ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return nd(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=bS(u),l=s[h];if(l)o.push(l.promise);else{let d;u.extensions&&u.extensions[Ce.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=nd(new Ze,u,e),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?mS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let p=0,_=h.length;p<_;p++){const v=h[p],g=o[p];let f;const x=u[p];if(g.mode===Hn.TRIANGLES||g.mode===Hn.TRIANGLE_STRIP||g.mode===Hn.TRIANGLE_FAN||g.mode===void 0)f=r.isSkinnedMesh===!0?new f_(v,x):new Ae(v,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Hn.TRIANGLE_STRIP?f.geometry=Jh(f.geometry,1):g.mode===Hn.TRIANGLE_FAN&&(f.geometry=Jh(f.geometry,2));else if(g.mode===Hn.LINES)f=new v_(v,x);else if(g.mode===Hn.LINE_STRIP)f=new su(v,x);else if(g.mode===Hn.LINE_LOOP)f=new x_(v,x);else if(g.mode===Hn.POINTS)f=new vm(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&_S(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),Fi(f,r),g.extensions&&ds(s,f,g),e.assignFinalMaterial(f),l.push(f)}for(let p=0,_=l.length;p<_;p++)e.associations.set(l[p],{meshes:t,primitives:p});if(l.length===1)return r.extensions&&ds(s,l[0],r),l[0];const d=new vn;r.extensions&&ds(s,d,r),e.associations.set(d,{meshes:t});for(let p=0,_=l.length;p<_;p++)d.add(l[p]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Sn(im.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new uu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const d=new ae;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new nu(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const p=s.channels[l],_=s.samplers[p.sampler],v=p.target,g=v.node,f=s.parameters!==void 0?s.parameters[_.input]:_.input,x=s.parameters!==void 0?s.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),u.push(_),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],p=l[1],_=l[2],v=l[3],g=l[4],f=[];for(let x=0,M=d.length;x<M;x++){const y=d[x],w=p[x],T=_[x],R=v[x],P=g[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,w,T,R,P);if(A)for(let E=0;E<A.length;E++)f.push(A[E])}return new Tl(r,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,xS)});for(let p=0,_=l.length;p<_;p++)h.add(l[p]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new gm:u.length>1?h=new vn:u.length===1?h=u[0]:h=new Ke,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),Fi(h,r),r.extensions&&ds(n,h,r),r.matrix!==void 0){const l=new ae;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new vn;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&ds(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,p]of s.associations)(d instanceof Wn||d instanceof an)&&l.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&l.set(d,p)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];Zi[r.path]===Zi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(Zi[r.path]){case Zi.weights:u=hr;break;case Zi.rotation:u=dr;break;case Zi.position:case Zi.scale:u=fr;break;default:switch(n.itemSize){case 1:u=hr;break;case 2:case 3:default:u=fr;break}break}const h=s.interpolation!==void 0?pS[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const _=new u(c[d]+"."+Zi[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Il(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof dr?fS:Dm;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MS(i,t,e){const n=t.attributes,s=new gn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new H(c[0],c[1],c[2]),new H(u[0],u[1],u[2])),a.normalized){const h=Il(or[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new H,c=new H;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const v=Il(or[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function nd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Cl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Le.workingColorSpace!==En&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Le.workingColorSpace}" not supported.`),Fi(i,t),MS(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?gS(i,t.targets,e):i})}var SS=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function a(f){for(var x=new Uint8Array(f.length),M=0;M<f.length;++M){var y=f.charCodeAt(M);x[M]=y>96?y-97:y>64?y-39:y+4}for(var w=0,M=0;M<f.length;++M)x[w++]=x[M]<60?n[x[M]]:(x[M]-60)*64+x[++M];return x.buffer.slice(0,w)}function c(f,x,M,y,w,T){var R=r.exports.sbrk,P=M+3&-4,A=R(P*y),E=R(w.length),L=new Uint8Array(r.exports.memory.buffer);L.set(w,E);var k=f(A,M,y,E,w.length);if(k==0&&T&&T(A,P,y),x.set(L.subarray(A,A+M*y)),R(A-R(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function p(f){var x={object:new Worker(f),pending:0,requests:{}};return x.object.onmessage=function(M){var y=M.data;x.pending-=y.count,x.requests[y.id][y.action](y.value),delete x.requests[y.id]},x}function _(f){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),M=new Blob([x],{type:"text/javascript"}),y=URL.createObjectURL(M),w=0;w<f;++w)l[w]=p(y);URL.revokeObjectURL(y)}function v(f,x,M,y,w){for(var T=l[0],R=1;R<l.length;++R)l[R].pending<T.pending&&(T=l[R]);return new Promise(function(P,A){var E=new Uint8Array(M),L=d++;T.pending+=f,T.requests[L]={resolve:P,reject:A},T.object.postMessage({id:L,count:f,size:x,source:E,mode:y,filter:w},[E.buffer])})}function g(f){o.then(function(){var x=f.data;try{var M=new Uint8Array(x.count*x.size);c(r.exports[x.mode],M,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:M},[M.buffer])}catch(y){self.postMessage({id:x.id,count:x.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(f){_(f)},decodeVertexBuffer:function(f,x,M,y,w){c(r.exports.meshopt_decodeVertexBuffer,f,x,M,y,r.exports[u[w]])},decodeIndexBuffer:function(f,x,M,y){c(r.exports.meshopt_decodeIndexBuffer,f,x,M,y)},decodeIndexSequence:function(f,x,M,y){c(r.exports.meshopt_decodeIndexSequence,f,x,M,y)},decodeGltfBuffer:function(f,x,M,y,w,T){c(r.exports[h[w]],f,x,M,y,r.exports[u[T]])},decodeGltfBufferAsync:function(f,x,M,y,w){return l.length>0?v(f,x,M,h[y],u[w]):o.then(function(){var T=new Uint8Array(f*x);return c(r.exports[h[y]],T,f,x,M,r.exports[u[w]]),T})}}})();function mu(){return new HM().setMeshoptDecoder(SS)}let Fm="";function AS(i){Fm=i===""||i.endsWith("/")?i:`${i}/`}const An=i=>`${Fm}${i}`,ES=.001,TS=.5,id={playing:!1,settling:!1,stillFor:0,pending:1},Nm=i=>i.playing||i.settling||i.pending>0,wS=i=>!i.playing&&!i.settling,RS=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),CS=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,IS=i=>Nm(i)?i:{...i,pending:1};function PS(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<ES?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<TS}}function sd(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const ss="#c8f323",LS="#0b0f10";function DS(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const FS=DS(ss),NS=ss,US="#7aa2ff",Um="#ffb340",kS="#b18cff",OS=ss,BS=ss,s2=Um,Nr=new H;function Gn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Nr.copy(t),Nr[n]=0,Nr.normalize();const u=.5*o/(o+a),h=1-Nr.angleTo(i)/c;return Math.sign(Nr[e])===1?h*u:a/(o+a)+u+u*(1-h)}class GS extends Gi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new H,c=new H,u=new H(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new H,v=.5/s;for(let g=0,f=0;g<h.length;g+=3,f+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),h[g+0]=u.x*Math.sign(a.x)+c.x*r,h[g+1]=u.y*Math.sign(a.y)+c.y*r,h[g+2]=u.z*Math.sign(a.z)+c.z*r,l[g+0]=c.x,l[g+1]=c.y,l[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[f+0]=Gn(_,c,"z","y",r,n),d[f+1]=1-Gn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),d[f+0]=1-Gn(_,c,"z","y",r,n),d[f+1]=1-Gn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),d[f+0]=1-Gn(_,c,"x","z",r,t),d[f+1]=Gn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[f+0]=1-Gn(_,c,"x","z",r,t),d[f+1]=1-Gn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[f+0]=1-Gn(_,c,"x","y",r,t),d[f+1]=1-Gn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),d[f+0]=Gn(_,c,"x","y",r,t),d[f+1]=1-Gn(_,c,"y","x",r,e);break}}}const rd=["technical","tactical","physical","social"],od=["auto","authored","off"],km=/\bwall\b/i,ad=["n","e","s","w"],zS={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},cd=1.8,ld=7.32,HS=6;function ws(i,t){return i.width!==void 0&&i.width<HS?i.width/2:t}function Om(i){return Math.min(Math.max(i*.5,1),2.44)}const ud=["save","beaten"],Go=["throw","roll","kick"],zo=["throw","roll"],hd=["lofted","ground"],VS=3.35,WS=1,dd=12,Pl=["walk","jog","run","sprint"],fd=["walk","jog","run"];function Aa(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const jS=new Set(["move","dribble","pass","shoot","tackle","collect"]),pd=/^#[0-9a-fA-F]{6}$/;function $t(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function Li(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&$t(t,"expected [x, y] numbers"),i}function XS(i){var o,a,c,u,h;const t=i;t.version!==1&&$t("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||$t("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&$t("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&$t("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||$t("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!pd.test(d))&&$t(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||$t("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&$t(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||$t(`players[${d}].team`,`unknown team ${l.team}`),Li(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&$t(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(Li((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&$t("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||$t("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&$t(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&$t(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&$t(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((p,_)=>{(typeof(p==null?void 0:p.t)!="number"||p.t<0)&&$t(`balls[${d}].path[${_}].t`,"seconds >= 0 required"),_>0&&p.t<=l.path[_-1].t&&$t(`balls[${d}].path[${_}].t`,"times must ascend"),Li(p.at,`balls[${d}].path[${_}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&$t(`equipment[${d}].type`,String(l.type)),Li(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&$t(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=cd-1e-9&&l.width<=ld+1e-9||$t(`equipment[${d}].width`,`expected ${cd}..${ld} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&$t(`equipment[${d}].facing`,"only a goal has a facing"),ad.includes(l.facing)||$t(`equipment[${d}].facing`,`expected one of ${ad.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||$t(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||$t("events","expected an array"),t.events.forEach((l,d)=>{var p;if((typeof l.t!="number"||l.t<0)&&$t(`events[${d}].t`,"seconds >= 0 required"),jS.has(l.type)||$t(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),Li(l.to,`events[${d}].to`),l.gait!==void 0&&!Pl.includes(l.gait)&&$t(`events[${d}].gait`,`expected one of ${Pl.join("|")}, got ${String(l.gait)}`),l.dur!==void 0&&!(typeof l.dur=="number"&&l.dur>0&&Number.isFinite(l.dur))&&$t(`events[${d}].dur`,`expected seconds > 0, got ${String(l.dur)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),Li(l.to,`events[${d}].to`),l.gait!==void 0&&!fd.includes(l.gait)&&$t(`events[${d}].gait`,`expected one of ${fd.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&$t(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&$t(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&$t(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(Go.includes(l.style)||$t(`events[${d}].style`,`expected one of ${Go.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!zo.includes(l.style)&&$t(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${zo.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&$t(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||$t(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let _=[...((p=t.players.find(v=>v.id===l.to))==null?void 0:p.start)??[0,0]];for(let v=0;v<d;v++){const g=t.events[v];(g.type==="move"||g.type==="dribble")&&g.player===l.to&&(_=[...g.to])}for(const v of t.equipment??[]){if(v.type!=="goal")continue;const g=Math.hypot(_[0]-v.at[0],_[1]-v.at[1]);g<dd&&$t(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${g.toFixed(1)} m from the goal at [${v.at[0]}, ${v.at[1]}] (needs ${dd} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&$t(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||$t(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((_,v)=>v<d&&_.type!=="move")&&$t(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const _=l.deflect;(typeof _!="object"||_===null||Array.isArray(_))&&$t(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),Li(_.to,`events[${d}].deflect.to`),hd.includes(_.style)||$t(`events[${d}].deflect.style`,`expected one of ${hd.join("|")}, got ${String(_.style)}`),l.type==="pass"&&!s.has(l.to)&&$t(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&_.style==="ground")&&!s.size&&$t(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const v of t.equipment??[]){if(v.type!=="goal")continue;const f=v.facing==="e"||v.facing==="w"?_.to[1]-v.at[1]:_.to[0]-v.at[0];if(Math.abs(f)>ws(v,VS))continue;(v.facing!==void 0?{n:_.to[1]-v.at[1],s:v.at[1]-_.to[1],e:_.to[0]-v.at[0],w:v.at[0]-_.to[0]}[v.facing]:v.at[1]<=t.pitch.length/2?_.to[1]-v.at[1]:v.at[1]-_.to[1])<=WS&&$t(`events[${d}].deflect.to`,`[${_.to[0]}, ${_.to[1]}] is inside the goal mouth at [${v.at[0]}, ${v.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&$t(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&$t(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),Li(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&$t(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&$t(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&$t(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&$t(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&$t(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(Go.includes(l.style)||$t(`events[${d}].style`,`expected one of ${Go.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!zo.includes(l.style)&&$t(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${zo.join(" or ")})`),l.flightStyle!=="ground"&&$t(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&$t(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&$t(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&$t(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const _=l.newBall;_!==void 0&&(typeof _!="boolean"&&$t(`events[${d}].newBall`,`expected a boolean, got ${String(_)}`),_&&!t.events.some((v,g)=>g<d&&v.type!=="move")&&$t(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&$t("overlays","expected an object"),l.runPaths!==void 0&&!od.includes(l.runPaths)&&$t("overlays.runPaths",`expected one of ${od.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||$t("overlays.zones","expected an array"),l.zones.forEach((d,p)=>{Li(d.at,`overlays.zones[${p}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||$t(`overlays.zones[${p}]`,"w/h metres > 0 required"),d.color!==void 0&&!rd.includes(d.color)&&!pd.test(d.color)&&$t(`overlays.zones[${p}].color`,`expected ${rd.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&$t(`overlays.zones[${p}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&$t("keeper","expected { outcome: save | beaten }"),ud.includes(t.keeper.outcome)||$t("keeper.outcome",`expected one of ${ud.join("|")}, got ${String(t.keeper.outcome)}`)),t}function qS(i){const t=new Hi({color:OS,roughness:.6,toneMapped:!1}),e=new vn,n=new Ae(new GS(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new ee(.17,.06),new ee(.15,.1)];for(let o=0;o<=8;o++)s.push(new ee(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new ee(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new Ae(new ou(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function Bm(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),d=(Math.floor(h/5)+.15+a()*.7)*(e/4),p=(40+a()*120)*(t/1024),_=a()>.5,v=i.createRadialGradient(l,d,0,l,d,p);v.addColorStop(0,_?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),v.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=v,i.fillRect(l-p,d-p,2*p,2*p)}Gm(i,t,e,a,1)}function Gm(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function KS(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Bm(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),zm(n);const s=new In(e);return s.colorSpace=qe,s.flipY=!1,s}function zm(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const $S=2.5;function Hm(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const mn=6;function YS(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Bm(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),zm(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,d,p]of a){const _=s.createLinearGradient(h,l,d,p);_.addColorStop(0,"rgba(0,0,0,0.55)"),_.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=_,s.fillRect(0,0,1024,1024)}const c=$S*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",Hm(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new In(n);return u.colorSpace=qe,u.flipY=!1,u}function ZS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",Hm(t,40,40,176,176,34),t.fill();const e=new In(i);return e.flipY=!1,e}let Ur=null;function JS(){if(Ur)return Ur;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ur=new In(i),Ur.userData.shared=!0,Ur}function QS(i){const t=new Ae(new Ga(i/2,24).rotateX(-Math.PI/2),new on({map:JS(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const ri={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},tA=.5;function to(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*ws(s,ri.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*tA*(o/r.length)))}return n}function eA(i){const t=ws(i,ri.halfW);return t===ri.halfW?ri:{halfW:t,top:Om(i.width),zMin:-Ji,zMax:Ji}}function Vm(i,t){return i.facing!==void 0?zS[i.facing]:i.at[1]>t/2?Math.PI:0}const Ji=.08;function nA(i){const t=Om(i),e=new Hi({color:"#FFFFFF",roughness:.5}),n=new vn,s=i/2-Ji;for(const o of[-1,1]){const a=new Ae(new Jr(Ji,Ji,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new Ae(new Jr(Ji,Ji,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Ji,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const Wm=.8;function iA(i,t,e){const n=new Ae(new Gi(e?i:t,Wm,e?t:i),new Hi({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function jm(i,t){i.scale.set(1,t,1),i.position.y=Wm*t/2}let md=null;function sA(i){return md??(md=i.loadAsync(An("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw md=null,t}))}let gd=!1;function rA(i,t){if(gd||!t)return;gd=!0;const e=new gn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-ri.halfW)>.05||Math.abs(s-ri.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${ri.halfW}, top ${s.toFixed(3)} vs ${ri.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function oA(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new H(n*(t/2+mn),0,s*(e/2+mn)))}function Ll(i,t){const{width:e,length:n}=i.pitch,s=to(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=eA(o),h=Vm(o,n),l=Math.cos(h),d=Math.sin(h);for(const p of[-u.halfW*s,u.halfW*s])for(const _ of[0,u.top*s])for(const v of[u.zMin*s,u.zMax*s])r.push(new H(a+p*l+v*d,_,c-p*d+v*l))}return r}const aA=600,Xm=aA/2*Math.SQRT2,_d=30,cA=-.06,lA=-.04,uA=660496,hA="#04170c",bd=.7,qm=1.2;function dA(i,t,e){const n=Math.max(t,e),s=n/2+mn,r=qm*n;return r>s?1-(1-bd)*gu((i-s)/(r-s)):i>=s?bd:1}function gu(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const fA=1.6,pA=2.6;function mA(i,t){const e=Math.max(i,t);return{near:fA*e+mn,far:pA*e+mn}}const vd="#0b1f22",Uc="#010203",gA=1.02;function _A(i,t){return Math.hypot(i/2+mn,t/2+mn)*gA}const bA=.12,vA=1.15,_u=(i,t)=>Math.hypot(i/2,t/2),Km=(i,t)=>_u(i,t)*vA,Ho=12,kc=18,xd=.3,xA=2.4,yd=1.2,yA=.4,MA=6;function SA(i,t,e=1/0){const n=i/2+mn,s=t/2+mn,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=AA(o,a,e*EA),u=[-(a+c),a+c],h=-(o+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function AA(i,t,e){if(!(e<Math.hypot(i+Ho,t+Ho)))return Ho;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(Ho,(-n+Math.sqrt(r))/2)):0}const EA=.97;function bu(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=hA,t.fillRect(0,0,512,512);let e=7;Gm(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new In(i);return n.colorSpace=qe,n.wrapS=n.wrapT=1e3,n}function TA(){const i=new vn,t=new Qr({color:1251867}),e=new Ae(new Gi(xd,kc,xd),t);e.position.y=kc/2;const n=new Ae(new Gi(xA,yd,yA),t);n.position.y=kc+yd/2;const s=new h_(new pm({map:wA(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(MA),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let kr=null;function wA(){if(kr)return kr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),kr=new In(i),kr.userData.shared=!0,kr}function RA(){return[[0,Uc],[Fl,vd],[PA,vd],[vu,Uc],[1,Uc]]}function CA(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of RA())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new In(i);return n.colorSpace=qe,n.wrapS=n.wrapT=1001,n}const Dl=.03,Md=.06,IA=.28,vu=1,Fl=vu*Md/(Md+IA-Dl),PA=.85;function LA(i,t={repeat:0,offset:0}){const e=Math.max(i,Dl+.03);return t.repeat=(vu-Fl)/(e-Dl),t.offset=Fl-t.repeat*(1-e),t}const DA=60,FA=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<DA,NA=-1e3;function $m(i,t,e,n,s,r){const o=new Qr({map:e,vertexColors:!0}),a=new Qr({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=qm*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,p]of u){const _=l===n,v=new za(l,d,128,p).rotateX(-Math.PI/2),g=v.getAttribute("position"),f=v.getAttribute("uv"),x=_?4:3,M=new Float32Array(g.count*x);for(let w=0;w<g.count;w++){const T=g.getX(w),R=g.getZ(w);f.setXY(w,T/_d,R/_d);const P=Math.hypot(T,R),A=dA(P,i,t);M[x*w]=M[x*w+1]=M[x*w+2]=A,_&&(M[x*w+3]=d>l?1-gu((P-l)/(d-l)):1)}f.needsUpdate=!0,v.setAttribute("color",new Ne(M,x));const y=new Ae(v,_?a:o);y.userData[r]=_,y.position.y=cA,h.push(y)}return h}function UA(i,t,e=1,n=bu()){const s=new vn;n.anisotropy=e;for(const r of $m(i,t,n,_u(i,t),Km(i,t),"floatRim"))s.add(r);return s}const Oc=16;function kA(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=_u(i,t),c=Km(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=Oc;l++){const d=Math.round(255*(1-gu(l/Oc)));u.addColorStop(l/Oc,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new In(n);return h.flipY=!1,h}function OA(i,t,e=1,n=Xm,s=bu()){const r=new vn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+mn+1),a=o*(1-bA),c=Math.max(a,Math.max(i,t)/2+mn);for(const h of $m(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=SA(i,t,o);for(const[h,l]of u){const d=TA();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function BA(i,t,e=1,n=1,s=Xm){var E;const r=to(t,n),{width:o,length:a}=t.pitch,c=(L,k=0)=>new H(L[0]-o/2,k,L[1]-a/2),u=L=>(L.anisotropy=e,L),h=u(YS(o,a,mn)),l=()=>new jn(o+2*mn,a+2*mn).rotateX(-Math.PI/2),d=new Ae(l(),new Qr({map:h,transparent:!0})),p=new Ae(l(),new Qr({map:h,alphaMap:kA(o,a,mn),transparent:!0}));for(const L of[d,p])L.position.y=-.02,L.renderOrder=-1,L.receiveShadow=!0;const _=new Ae(new jn((o+2*mn)*1.5,(a+2*mn)*1.5).rotateX(-Math.PI/2),new on({map:ZS(),transparent:!0,depthWrite:!1}));_.position.y=lA,_.renderOrder=-2,i.add(_);const v=new Ae(new jn(o,a).rotateX(-Math.PI/2),new Hi({map:u(KS(o,a)),roughness:.9}));v.receiveShadow=!0;const g=bu(),f=OA(o,a,e,s,g),x=UA(o,a,e,g);i.add(d,p,v,f,x);const M=L=>{f.visible=L,_.visible=L,d.visible=L,x.visible=!L,p.visible=!L};M(!0);const y=f.children.filter(L=>L.name==="mast"),w=L=>{for(const k of y)k.visible=L};w(!1);const T=mu(),R=[],P=[];for(const L of t.equipment??[])if(L.type==="cone"){const k=qS(n);k.position.copy(c(L.at,0)),i.add(k),P.push(k)}else{const k=ws(L,ri.halfW)!==ri.halfW,N=k?nA(L.width):(await sA(T)).clone();N.position.copy(c(L.at)),N.rotation.y=Vm(L,a),N.scale.setScalar(r),i.add(N),R.push(N),k||rA(N,r)}const A=[];for(const L of((E=t.overlays)==null?void 0:E.zones)??[]){if(!km.test(L.label??""))continue;const k=iA(Math.max(L.w,L.h),Math.min(L.w,L.h),L.w>=L.h),N=c(L.at);k.position.set(N.x,0,N.z),jm(k,n),i.add(k),A.push(k)}return{toWorld:c,goals:R,cones:P,boards:A,setWorld:M,setMasts:w}}const Sd=new H(10,20,8).normalize(),GA=1.05,Nl=2048,zA=1024,HA=1600,VA=(i,t)=>Math.max(i,t)>=HA?Nl:zA,WA=5;function jA(i){const t=new gn().setFromPoints(i).getCenter(new H);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function Va(i,t=()=>new zM({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=sd(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=GA,e.outputColorSpace=qe,i.appendChild(o);const a=new u_;a.background=new ie(LS);const c=new Sn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new hu(16772564,WA);u.position.copy(Sd).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(Nl,Nl),u.shadow.radius=4,a.add(u,u.target,new U_(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var _t;const W=VA(s.width*h,s.height*h);u.shadow.mapSize.width!==W&&(u.shadow.mapSize.set(W,W),(_t=u.shadow.map)==null||_t.dispose(),u.shadow.map=null)}l();function d(){const W=sd(i,window,s),_t=Math.min(devicePixelRatio,2),wt=_t!==h;if(wt&&(h=_t,e.setPixelRatio(h)),W.width!==s.width||W.height!==s.height){s=W,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),E();for(const Rt of[...r])Rt()}else wt&&(e.setSize(s.width,s.height,!1),l(),E())}const p=typeof ResizeObserver=="function"?new ResizeObserver(d):null;p?p.observe(i):addEventListener("resize",d);let _=null;const v=()=>{g(),d()};function g(){_==null||_.removeEventListener("change",v),_=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,_==null||_.addEventListener("change",v)}g();let f=!0,x=!1,M=0;function y(){x||(x=!0,M=requestAnimationFrame(O))}function w(){f=!document.hidden,f&&(k=-1,y())}document.addEventListener("visibilitychange",w);let T=!0,R=id,P=0;const A=new H;function E(){R=IS(R),f&&(x||(k=-1),y())}let L=()=>{},k=-1,N=null,B=null,G=null,U=!0;function z(W,_t){if(L(W,_t),ht(),N&&a.fog){const wt=c.position.length();a.fog.near=wt+N.near,a.fog.far=wt+N.far}e.render(a,c),P++}function O(W){if(x=!1,!f)return;const _t=k<0?0:(W-k)/1e3;k=W,A.copy(c.position),z(_t,W),R=PS(R,A.distanceTo(c.position),_t),T||Nm(R)?y():k=-1}function Z(W){if(!W.length)return;const{centre:_t,radius:wt,distance:Rt,far:Wt}=jA(W);u.target.position.copy(_t),u.target.updateMatrixWorld(),u.position.copy(Sd).multiplyScalar(Rt).add(_t);const Yt=u.shadow.camera;Yt.left=-wt,Yt.right=wt,Yt.top=wt,Yt.bottom=-wt,Yt.near=.5,Yt.far=Wt,Yt.updateProjectionMatrix()}function Y(W){if(N=W,!W){a.fog=null;return}a.fog??(a.fog=new tu(uA,W.near,W.far))}function lt(W){if(G=W,!W){B&&(B.visible=!1);return}B||(B=new Ae(new jn(1,1),new on({map:CA(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),B.renderOrder=NA,B.frustumCulled=!1,a.add(B)),B.visible=U}function Et(W){U=W,B&&(B.visible=W&&!!G)}const kt=new H,it=new H,bt={repeat:0,offset:0};function ht(){if(!B||!G)return;if(!U){B.visible=!1;return}if(c.getWorldDirection(kt),B.visible=FA(kt.y),!B.visible)return;const W=Math.hypot(c.position.x,c.position.z)||1;it.set(-c.position.x/W*G,0,-c.position.z/W*G),it.project(c);const _t=(1-it.y)/2,wt=c.near*1.5,Rt=2*wt*Math.tan(c.fov*Math.PI/360);B.scale.set(Rt*c.aspect,Rt,1),B.quaternion.copy(c.quaternion),B.position.copy(c.position).addScaledVector(kt,wt),LA(_t,bt);const Wt=B.material.map;Wt.repeat.set(1,bt.repeat),Wt.offset.set(0,bt.offset)}return{scene:a,camera:c,renderer:e,fitShadow:Z,setFog:Y,setHorizon:lt,setSky:Et,size:()=>({...s}),remeasure:d,onBox(W){return r.add(W),()=>{r.delete(W)}},start(W){L=W,y()},park(W){return L!==W?!1:(cancelAnimationFrame(M),x=!1,L=()=>{},R=id,P=0,k=-1,!0)},step(W,_t=performance.now()){z(W,_t)},frames:()=>P,rule:{enable(){T=!1},play(){R=RS(R),E()},pause(){R=CS(R),E()},wake:E,snap:()=>wS(R)},dispose(){f=!1,r.clear(),_==null||_.removeEventListener("change",v),p?p.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",w),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function Ym(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of Zm(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);xu(i)}function xu(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of Zm(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const Zm=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function XA(i){const t=new Map,e=new Map,n=i.clone();return Jm(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Jm(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Jm(i.children[n],t.children[n],e)}const Ad="db7155c0",Qm=24,qA=/^[\w-]+$/,KA=async i=>await(await fetch(An(`drills/${i}.json`))).json();class $A{constructor(t=KA,e=null,n=Qm){Pe(this,"mem",new Map);Pe(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===Ad)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:Ad,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&qA.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const YA="tactivo-engine",fs="drills",Ed=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function ZA(){try{return globalThis.indexedDB}catch{return}}function JA(i=ZA()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(YA,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(fs)&&r.result.deleteObjectStore(fs),r.result.createObjectStore(fs)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(fs,"readonly").objectStore(fs);return await Ed(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await Ed(r.transaction(fs,"readwrite").objectStore(fs).put(s,n))}catch{}}}}const Ul=["plain","stripes","hoops","halves","sash","sleeves"],Td=["mixed","light","mediumLight","medium","mediumDark","dark"],QA="mixed",tg="#FFFFFF",Bc=/^#[0-9a-fA-F]{6}$/;function kl(i){if(typeof i!="object"||i===null)return Fe("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!Bc.test(t.a)))return Fe("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!Bc.test(t.b)))return Fe("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!Ul.includes(t.pattern)))return Fe(`kit: pattern must be one of ${Ul.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!Bc.test(t[e])))return Fe(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!Td.includes(t.skin))?Fe(`kit: skin must be one of ${Td.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??tg,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const wd=["boys","girls","mixed"],yu="mixed";function Ol(i){return i==null?yu:typeof i!="string"||!wd.includes(i)?Fe(`squad: must be one of ${wd.join(", ")}`):i}const Rd=["shirt","full"],Wa="shirt";function Cd(i){return i==null?Wa:typeof i!="string"||!Rd.includes(i)?Fe(`framing: must be one of ${Rd.join(", ")}`):i}const Id=new Set(["fit","broadcast"]),Mu=.5,tE=5,eE={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},nE=100,Ea=1/0,iE=2e3,fa=/^[\w-]+$/,sE=/^[A-Za-z0-9_./-]{1,80}$/,rE=i=>sE.test(i)&&!i.includes(".."),oE=30,aE=85,cE=i=>Math.min(Math.max(i,oE),aE),ar=i=>({state:i,effects:[],out:[]}),pa=(i,t,e,n)=>({state:i,effects:[],out:[{type:"error",code:t,message:e,...n!==void 0?{key:n}:{}}]}),lE=new Set(["auto","authored","off"]),eg=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply","customiseStage","customiseOutcome","customiseStrip","customiseSaved"]);function uE(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?ng(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const ng=i=>Math.min(Math.max(i,Mu),tE);function ig(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const Su=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},Au=(i,t)=>{var n;const e=Su(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},Fe=i=>({error:i,code:"bad_message"}),Bl=i=>{const t=i.narrationBase;return typeof t=="string"&&/^https?:\/\/[^\s]+\/$/.test(t)?{narrationBase:t}:{}};function hE(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||eg.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return Fe("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return Fe("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!fa.test(n.key)))return{error:`load: key must match ${fa.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return Fe("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return Fe("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return Fe("load: intro.hold must be a finite number");s={text:a.text,hold:ng(a.hold)}}let r;if(t.kit!==void 0){const a=kl(t.kit);if("error"in a)return a;r=a}const o=Ol(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{},...Bl(t)}}case"preview":case"kit":{const e=kl(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=Cd(t.framing);if(typeof n!="string")return n;const s=Ol(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=Cd(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return Fe("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&rE(n)?{track:n}:{},...Bl(t)}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&fa.test(e)).slice(0,Qm)}:Fe("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?Fe("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?Fe("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?Fe("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?Fe("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!Id.has(t.follow)?Fe(`setCamera: follow must be one of ${[...Id].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?Fe("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return Fe(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!lE.has(t.runPaths))return Fe("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return Fe(`unknown message type: ${t.type}`)}}const dE=/^https?:\/\/[^\s]+$/,Ks=(i,t)=>typeof i=="string"&&i.length>0&&i.length<=t;function fE(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||!t.type.startsWith("customise")||eg.has(t.type))return null;const e=()=>typeof t.pilot=="string"&&fa.test(t.pilot)&&typeof t.age=="number"&&Number.isFinite(t.age)&&t.age>=5&&t.age<=18,n=()=>{let s;if(t.kit!==void 0&&t.kit!==null){const o=kl(t.kit);if("error"in o)return o;s=o}const r=Ol(t.squad);return typeof r!="string"?r:{...s?{kit:s}:{},...t.squad!==void 0&&t.squad!==null?{squad:r}:{},...Bl(t)}};switch(t.type){case"customiseReset":{if(!e()||!Ks(t.fnBase,300)||!dE.test(t.fnBase)||!Ks(t.apikey,1024))return Fe("customiseReset: {pilot, age, fnBase, apikey}");const s=n();if("error"in s)return s;const r=t.owner===void 0?"":Ks(t.owner,64)?t.owner:null;if(r===null)return Fe("customiseReset: owner (1-64)");const o=t.device===void 0?"":typeof t.device=="string"&&/^[0-9a-f-]{36}$/.test(t.device)?t.device:null;return o===null?Fe("customiseReset: device (36 chars of 0-9a-f-)"):{type:"customiseReset",pilot:t.pilot,age:t.age,fnBase:t.fnBase,apikey:t.apikey,...r?{owner:r}:{},...o?{device:o}:{},look:s}}case"customise":return!e()||!Ks(t.request,500)||!Ks(t.jwt,4096)?Fe("customise: {pilot, age, request (1-500), jwt}"):{type:"customise",pilot:t.pilot,age:t.age,request:t.request,jwt:t.jwt};case"customiseVersion":case"customiseChip":return typeof t.index!="number"||!Number.isInteger(t.index)||t.index<0?Fe(`${t.type}: index must be a whole number >= 0`):{type:t.type,index:t.index};case"customiseDrop":return typeof t.line!="number"||!Number.isInteger(t.line)||t.line<0?Fe("customiseDrop: line must be a whole number >= 0"):{type:"customiseDrop",line:t.line};case"customiseSave":return Ks(t.jwt,4096)?{type:"customiseSave",jwt:t.jwt}:Fe("customiseSave: {jwt}");case"customiseShow":{const s=t.version,r=typeof s=="object"&&s!==null&&Array.isArray(s.ops)&&typeof s.said=="string"&&(s.script===null||typeof s.script=="object")&&(s.changed===void 0||Array.isArray(s.changed)),o=t.voiceUrl===null||t.voiceUrl===void 0||typeof t.voiceUrl=="string"&&/^https:\/\/[^\s]+$/.test(t.voiceUrl),a=t.voiceScript===null||t.voiceScript===void 0||typeof t.voiceScript=="object"&&!Array.isArray(t.voiceScript);if(!e()||!r||!o||!a)return Fe("customiseShow: {pilot, age, version {script, ops, said, changed}, voiceUrl, voiceScript}");const c=n();return"error"in c?c:{type:"customiseShow",pilot:t.pilot,age:t.age,version:{script:s.script,ops:s.ops,said:s.said,changed:s.changed??[]},voiceUrl:t.voiceUrl??null,voiceScript:t.voiceScript??null,look:c}}}return Fe(`unknown customise message ${t.type}`)}function Pd(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{},...t.narrationBase?{narrationBase:t.narrationBase}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??Wa,squad:t.squad??yu}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return pa(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return pa(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:cE(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?ar(i):pa(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function ps(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return ar(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:ig(n,0),a=r?s?Math.max(t.hookHold,Mu):r.hold:0,c=r?a:Su(n,o),u=s?Ea:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+iE:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:Au(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?ar(i):pa({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`,t.key);case"hookEnded":return i.holdUntilMs!==Ea?ar(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function pE(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Ea?i.hookCeilingMs:i.holdUntilMs;return e<c?ar(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=ig(i.narration,t),s=i.playing&&e-i.lastTimeMs>=nE;if(n===i.cue&&!s)return ar(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?Su(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[Au(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const Eu=["shirt","jersey","top","tshirt"];let Rn=null;async function ja(i,t,e=An("assets/ochi.glb"),n,s=0,r){if(!Rn||Rn.url!==e){const a=await(n??mu()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});Rn={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=Rn.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=XA(Rn.variants[(h%Rn.variants.length+Rn.variants.length)%Rn.variants.length]);l.traverse(p=>{p.castShadow=p.type==="SkinnedMesh",c&&p.isBone&&(p.name=p.name.replace(/_\d+$/,""))}),i.add(l);const d=new sb(l);o.push({root:l,mixer:d,clips:new Map(Rn.clips.map(p=>[p.name,p]))})}return o}const Ld=new WeakMap;function mE(i){let t=Ld.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),Ld.set(i.root,t)),t}function Tu(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const gE=Tu(/^foot[LR]$/),_E=Tu(/^hand[LR]$/),Dd=Tu(/^spine00[12]$/),Ta=.6499;function sg(i){const t=new ie(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/Ta,1/e)):t}let Gc=null;const rg=3e3;function og(i){return Gc??(Gc=(async()=>{let t;try{return await Promise.race([i(An("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),rg)})])}finally{clearTimeout(t)}})().catch(t=>{throw Gc=null,t})),Gc}async function bE(i,t=An("assets/ochi.glb"),e){await ja(new vn,0,t,e);const n=i.toLowerCase();return Rn?Rn.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function vE(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();Eu.some(o=>r.includes(o))&&t.push(r)}}),t}async function xE(i,t=An("assets/ochi.glb"),e){await ja(new vn,0,t,e);const n=Rn?Rn.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>vE(Rn.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const ag=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function cg(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;Eu.some(o=>r.toLowerCase().includes(o))&&t.push(ag(r))}}),t}async function lg(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>An(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await og(r),c=[...new Set(n.map(d=>{var p;return(p=a.channels[d])==null?void 0:p.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new cu,h=new Map,l=new Map;for(const d of new Set(t))for(const p of c){const _=(o=a.characters[d])==null?void 0:o.files[p];if(!_)continue;let v=l.get(_);v||(v=await u.loadAsync(s(_)),v.colorSpace="",v.flipY=!1,v.anisotropy=16,v.needsUpdate=!0,l.set(_,v));const g=h.get(d)??[];g[p]=v,h.set(d,g)}return h.size?{channels:a.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function ug(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await og(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const Fd=new Map;function yE(i){if(!i)return null;let t=Fd.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new In(n),t.colorSpace="",t.anisotropy=8,Fd.set(i,t)}return t}const zc=new ie("#14181B"),Hc=new ie("#FFFFFF"),ME=.5;function Gl(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??tg},a=n.from!==void 0&&CE(n.from,s),c=[];return i.root.traverse(u=>{const h=u;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((d,p)=>{const _=d.name||h.name,v=_.toLowerCase();if(!Eu.some(g=>v.includes(g))){const g=Bd.get(d)??d,f=RE(s);if(!f&&d===g||a&&d!==g)return;const x=f?g.clone():g;f&&(x.userData.drillOwned=!0,Bd.set(x,g),IE(x,s,h,r),c.push(x)),d!==x&&d.userData.drillOwned&&d.dispose(),Array.isArray(h.material)?h.material[p]=x:h.material=x;return}{const g=d.clone();d.userData.drillOwned&&d.dispose(),g.userData.drillOwned=!0,g.color=sg(o.a),LE(g,o,e,ag(_),{...n,exact:r}),c.push(g),Array.isArray(h.material)?h.material[p]=g:h.material=g}})}),c}const SE=/^(thigh[LR]|pelvis[LR]|spine)$/,AE=/^shin[LR]$/,EE=8,Nd=i=>Math.round(i*100)/100,wa=[.8,.9],Ud=[Nd(1-wa[1]),Nd(1-wa[0])],TE=8,kd=1,wE={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},ma=i=>i!==void 0&&i!==QA;function Od(i,t){var r;const e=[new ve(-1,-1,-1,-1),new ve(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<EE;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const RE=i=>{const t=hg(i);return!!(t.shorts||t.socks||t.tone)},hg=i=>({shorts:i.shorts,socks:i.socks,tone:ma(i.skin)?wE[i.skin]:void 0}),CE=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&ma(i.skin)===ma(t.skin)&&(!ma(i.skin)||i.skin===t.skin),Bd=new WeakMap;function IE(i,t,e,n){const s=Od(e,SE),r=Od(e,AE),o=hg(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:ys(o.shorts??"#000000",n)},kitSocksC:{value:ys(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:ys(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
	float kitBand = vMapUv.x * ${TE.toFixed(1)};
	float kitSkinAt = step( ${kd.toFixed(1)}, kitBand ) * step( kitBand, ${(kd+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${Ud[0].toFixed(2)}, ${Ud[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${wa[0].toFixed(2)}, ${wa[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const PE=i=>{const t=new ie(i),e=Math.max(t.r,t.g,t.b);return e>Ta?Ta/e:1},ys=(i,t)=>t?new ie(i):sg(i).multiplyScalar(Ta);function Gd(i,t){const e=[new ve(0,0,0,0),new ve(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function LE(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=Gd(e==null?void 0:e.channels,t.pattern),l=Gd(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=o?a==null?void 0:a[n]:void 0,p=d?yE(o):null,_={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:ys(t.a,c)},kitB:{value:ys(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:ys((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:ys((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:p},kitNumO:{value:new ee(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new ee(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new ee(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:p?1:0},kitNumFlip:{value:ME*(c?1:PE(t.a))}};i.userData.kitUniforms=_,i.onBeforeCompile=v=>{Object.assign(v.uniforms,_),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${zc.r.toFixed(4)}, ${zc.g.toFixed(4)}, ${zc.b.toFixed(4)} )
		: vec3( ${Hc.r.toFixed(4)}, ${Hc.g.toFixed(4)}, ${Hc.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const DE=.18;function zd(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const pr=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function vi(i){const t=pr(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=t-s*(i.hold??0),a=(n*n-r*r)/(2*e),c=(n*n-s*s)/(2*e);if(a+c<=o){const h=o-a-c;return{D:t,t1:(n-r)/e,t2:h/n,t3:(n-s)/e,d1:a,d2:h,peak:n}}const u=Math.sqrt(e*o+(r*r+s*s)/2);return{D:t,t1:(u-r)/e,t2:0,t3:(u-s)/e,d1:(u*u-r*r)/(2*e),d2:0,peak:u}}function ue(i){const t=vi(i);return t.t1+t.t2+t.t3+(i.hold??0)}function Vc(i,t){const e=vi(i),n=i.accel,s=Math.min(i.startSpeed??0,i.cruise),r=i.endSpeed??0,o=Math.min(Math.max(t,0),e.D);if(o<=e.d1)return(Math.sqrt(s*s+2*n*o)-s)/n;if(o<=e.d1+e.d2)return e.t1+(o-e.d1)/e.peak;const a=e.D-r*(i.hold??0);return o>a&&r>0?e.t1+e.t2+e.t3+(o-a)/r:e.t1+e.t2+(e.peak-Math.sqrt(Math.max(0,e.peak*e.peak-2*n*(o-e.d1-e.d2))))/n}function oi(i,t){const e=vi(i),n=e.t1+e.t2+e.t3,s=n+(i.hold??0),r=Math.min(Math.max(t-i.t0,0),s),o=i.accel;let a,c;if(r<=e.t1){const h=Math.min(i.startSpeed??0,i.cruise);a=h*r+.5*o*r*r,c=h+o*r}else if(r<=e.t1+e.t2)a=e.d1+e.peak*(r-e.t1),c=e.peak;else if(r<=n){const h=r-e.t1-e.t2;a=e.d1+e.d2+e.peak*h-.5*o*h*h,c=e.peak-o*h}else c=i.endSpeed??0,a=e.D-c*(s-r);const u=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*u,i.from[1]+(i.to[1]-i.from[1])*u],speed:c}}const FE=.25,dg=.5,Ra=.5,NE=1e-4,Hd=1e-6;function wu(i,t){return!!t.flow&&(i.endSpeed??0)>0&&i.endSpeed===t.startSpeed&&Math.abs(i.t0+ue(i)-t.t0)<Hd&&pr(i.to,t.from)<Hd}function zl(i,t){if(!wu(i,t))return null;const e=pr(i.from,i.to),n=pr(t.from,t.to);if(e<=0||n<=0)return null;const s=[(i.to[0]-i.from[0])/e,(i.to[1]-i.from[1])/e],r=[(t.to[0]-t.from[0])/n,(t.to[1]-t.from[1])/n],o=Math.acos(Math.min(1,Math.max(-1,s[0]*r[0]+s[1]*r[1])));if(o<NE)return null;const a=Math.min(2*dg/Math.sin(o/2),Ra*e,Ra*n);return{corner:[i.to[0],i.to[1]],dA:s,dB:r,L:a,turn:o}}function fg(i,t){const e=-(1-t)*(1-t),n=t*t,{corner:s,dA:r,dB:o,L:a}=i;return{pos:[s[0]+a*(e*r[0]+n*o[0]),s[1]+a*(e*r[1]+n*o[1])],tan:[(1-t)*r[0]+t*o[0],(1-t)*r[1]+t*o[1]]}}function UE(i,t){const e=Math.sin(t);return e/(e+Math.sin(i-t))}function es(i,t){let e=-1;for(let a=0;a<i.length;a++)t>=i[a].t0&&(e=a);if(e<0)return null;const n=i[e],{pos:s,speed:r}=oi(n,t),o=pr(n.from,n.to);if(o>0){const a=Math.hypot(s[0]-n.from[0],s[1]-n.from[1]);let c=null,u=0;const h=e+1<i.length?zl(n,i[e+1]):null;if(h&&a>o-h.L)c=h,u=(a-(o-h.L))/(2*h.L);else{const l=e>0?zl(i[e-1],n):null;l&&a<l.L&&(c=l,u=(l.L+a)/(2*l.L))}if(c){const{pos:l,tan:d}=fg(c,u);return{pos:l,speed:r*Math.hypot(d[0],d[1]),vel:[r*d[0],r*d[1]]}}}return t>n.t0+ue(n)||o<=0?{pos:s,speed:r,vel:[0,0]}:{pos:s,speed:r,vel:[(n.to[0]-n.from[0])/o*r,(n.to[1]-n.from[1])/o*r]}}function Vd(i,t){var e;return((e=es(i,t))==null?void 0:e.vel)??[0,0]}function kE(i,t,e=FE){const n=Vd(i,t),s=Vd(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const OE=2.5;function BE(i,t){let e=0;for(const n of i)t>=n.t0&&(e=vi(n).peak);return Math.min(1,e/OE)}const GE=.035,zE=.1,Wd=.4,HE=1;function VE(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||pr(s.from,s.to)<HE)continue;const r=s.t0+ue(s)-zE,o=(t-r)/Wd;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+Wd)||(e=Math.max(e,GE*.5*(1-Math.cos(2*Math.PI*o))))}return e}function Be(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function WE(i,t=0){return i-t}function Xa(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function jE(i,t=58*Math.PI/180,e=.85){const n=Xa(i);return Math.min(t,Math.max(-t,n))*e}const XE=.3;function qE(i,t,e){return e>0?i+(t-i)*(1-Math.pow(1-XE,e*60)):i}const KE=1.2,Wc=180*Math.PI/180,jc=120*Math.PI/180,jd=70*Math.PI/180;function Ru(i){return i<=0?Wc:i<=2.3?Wc+(jc-Wc)*i/2.3:i>=5.48?jd:jc+(jd-jc)*(i-2.3)/(5.48-2.3)}const $E=.12,Xd=15*Math.PI/180;function YE(i){return Math.max(-Xd,Math.min(Xd,i*$E))}const ZE=.001;function Ni(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=ZE}function JE(i,t,e,n){return e||n||!Ni(i,t)?null:Be(i,t)}function qd(i,t,e,n=Math.PI*2){const s=t-i,r=Xa(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const QE=2.3,jr=1.1,t1=1.15,Kd=.6,$d=1.2,ga=.88,e1=1-ga,n1=.15,Vo=.28;function rs(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?t1:QE),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?Kd:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??$d;u=(e<ga?h*Math.sin(Math.PI*e/ga):n1*h*Math.sin(Math.PI*(e-ga)/e1))+c}else if(n==="lofted")u=(i.loft??$d)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=Vo?o+(h-o)*Math.sin(Math.PI/2*(e/Vo)):a+(h-a)*Math.cos(Math.PI/2*((e-Vo)/(1-Vo)))}else n==="drop"?u=(i.fromHeight??Kd)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const Yd=new WeakMap;function i1(i){const t=Yd.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,rs(i,i.t0+i.duration*n/32).height);return Yd.set(i,e),e}function pg(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=rs(i,n),r=rs(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function mg(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const Zd=3,Fn=2.52,Dn=4,$s=.8,Wo=1,Di=.3,Or=.6,wn=.15,s1=.5,mi=.45,gg=.4,_g=.7,Jd=Math.PI/12,Ys=4,r1=.6,Qd=.4,o1=.3,a1=.15,c1=.4,l1=.35,eo=.3,u1=Math.PI/4,h1=.25,d1={left:"gk_dive_a",right:"gk_dive_b"},bg=4,f1=.12,p1=.25,m1=.35;function tf(i){return Math.min(p1,Math.max(f1,i*m1))}const g1=1.3,_1=.15;function ef(i,t,e){const n=i-_1,s=i+t-n,r=Math.min(g1,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const b1=1.8,nf=.3,v1=.7,x1=.9,y1=2.5,Mn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},M1={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:Mn.roll},jo={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},S1=.8;function A1(i,t,e,n=qa){const s=bg*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-Eg)*t)}const E1=3;function T1(i,t,e){if(t<=0)return null;const n=Math.min(E1,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const ei=1,Xo=.25,Xc=.5,sf=.8,w1=.4,vg=3,R1=.6,C1=2.3,rf=.9,Zs=.3,of=.4,I1=12,P1=8,L1=3,D1=.25;function af(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Hl,r/P1),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(D1*r,L1)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Hl,r/I1),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const F1=.6,Hl=.2;function N1(i,t,e){const n=F1*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Hl,e/n)}const U1=16,k1=12,qc=2,O1=8,r2=6,B1=.1,G1=2.44;function Ms(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function xg(i,t,e){const n=Ms(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const Kc=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],qo={id:"pass_a",duration:.567,contact:.167,reach:.89},cf="jog_back_a",Br=.5,z1=.5,H1=.3,V1=.9,lf=.5,W1=.2,uf=.8,$c=.5,j1=1.6,Ko={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},hf=3,X1=.1,$o=["walk","jog","run"],_a=.5,q1=1.5*_a,K1=.42*Math.SQRT1_2,$1=12,Y1=.15;function Z1(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=ws(n,qa)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function df(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const p of t){const _=Math.hypot(s[0]-p[0],s[1]-p[1]);e-_>u+1e-9&&(u=e-_,c=p)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?nn(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>o+1e-9&&(r=s,o=d)}return r}function ff(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Gr(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const J1=.2;function pf(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function mf(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?nn([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ge+X1?null:[t[0]-Ge*s[0],t[1]-Ge*s[1]],o=e?nn([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Ge,gg),_g);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function Q1(i){return i<15?"roll":i<30?"throw":"kick"}function yg(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function tT(i,t,e,n,s){const{reach:r,at:o}=yg(i,e,n);if(r>vg*s)return null;const a=nn([e[0]-i[0],e[1]-i[1]]);if(r<=R1*s)return{kind:"catch",clip:Mn.catch.id,clipDuration:Mn.catch.duration,contactOffset:Mn.catch.contact,contact:[i[0]+Ge*a[0],i[1]+Ge*a[1]],travelTo:null};const c=wg(i,t,n),u=Mn.dive[c],h=nn([o[0]-i[0],o[1]-i[1]]),l=Math.min(C1*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function eT(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=nn(c);return[a[0]+nf*n*u[0],a[1]+nf*n*u[1]]}function Mg(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Sg(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=Mg(r,n))}return s}const nT=[{id:"header_a",duration:1.9,contact:1}],iT=1.57,gf=.1,_f=.6,Yc=2,Yo=.02,Zc=.6,sT=2.5,rT=.22,oT=3,aT=6.5;function Jc(i,t){return Math.min(Math.max(rT*i,oT),aT)*t}const cT=10,lT=1.7;function uT(i,t,e,n){const s=e??[t[0],t[1]],r=nn([s[0]-i[0],s[1]-i[1]]),o=[i[0]+gf*n*r[0],i[1]+gf*n*r[1]],a=nT[0];return{contact:o,height:iT*n,clip:a,set:[i[0]+Ge*r[0],i[1]+Ge*r[1]],faceAt:s}}const bf=.4,hT=.3,dT=18,fT=10,pT=.45,mT=.8,ba={id:"strike_jog_a",contact:.4},gT=1,_T={strike_jog_a:{loop:!1,category:"shoot",ballContact:ba.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Ag(i){var t;for(const[e,n]of Object.entries(_T))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const vf=.15,bT=.2,qa=3.35,Eg=.5;function vT(i,t,e,n,s=1){let r=null,o=1/0;for(const _ of e){const v=Math.hypot(_.at[0]-t[0],_.at[1]-t[1]);v<o&&(o=v,r=_)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-Eg)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const _=Be(i,c),v=g=>(g[0]-i[0])*Math.cos(_)-(g[1]-i[1])*Math.sin(_);return u.sort((g,f)=>v(f)-v(g)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),p=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<p-1e-6?u[0]:u[1]}function xf(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const Tg=.35;let Ge=Tg;function yf(i){Ge=i}function xT(){return Ge/Tg}function ni(i,t){return[i[0]+Ge*Math.sin(t),i[1]+Ge*Math.cos(t)]}function Qc(i,t,e){const n=Be(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function wg(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function nn(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Mf(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function yT(i,t,e){const n=nn([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=nn([e[0]-i[0],e[1]-i[1]]);const p=n[0]*s[1]-n[1]*s[0];r=Math.abs(p)<1e-6?1:Math.sign(p)}else r=1,s=Mf([-n[0],-n[1]],-r*Jd);const o=Mf(n,r*Jd),a=[i[0]+Ge*o[0],i[1]+Ge*o[1]],c=[i[0]+Ge*s[0],i[1]+Ge*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,gg),_g);return{contact:a,set:[a[0]+d*l[0],a[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const MT=.5,ST=1.4,Sf={walk:.8,jog:1.2,run:2.2},AT=.25,ET=.7,TT=.3,wT=2,zr=.4,RT=10,CT=8,IT=2.5,Af=6,PT=2,Ef=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Tf=1.4;function wf(i,t,e){const n=i.t0+ue(i),s=tl(i,t);let r=0,o=Math.max(n-t,.001);if(tl(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;tl(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function tl(i,t){const e=oi(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function LT(i,t,e,n,s,r={}){const o=ue(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=nn([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Be(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=R=>(R[0]-i.from[0])*a[0]+(R[1]-i.from[1])*a[1],l=i.t0+o,d=h(e),p=xT(),_=(r.others??[]).filter(R=>Math.abs((R[0]-i.from[0])*Math.cos(c)-(R[1]-i.from[1])*Math.sin(c))<=PT).map(R=>h(R)),v=ET*p,g=AT*p,f=R=>h(oi(i,R).pos),x=[],M=[];let y=i.t0,w=[...t];const T=Math.ceil(vi(i).D/(.5*Math.min(n,zr*3)))+8;for(let R=0;;R++){M.push(y);const P=h(w),A=d-P,E=r.turnOut?zr:n,L=zr*(1+Tf),k=R===0&&!!r.turnIn||!!r.turnOut&&A<=L,N=k?Ge:v;if(A<=Tf*E||R===T-1||d-(f(y)+N)<.05){const j=Math.hypot(e[0]-w[0],e[1]-w[1]);let xe=y;if(j>1e-6){const te=Math.max(oi(i,y).speed,MT*i.cruise),Qt=Math.min(2*j/(te+jr*(j/te)/2),Math.max(l-y,.2));x.push({from:w,to:[...e],t0:y,duration:Qt,style:"push",endFrac:0}),xe=y+Qt}return xe<l&&x.push({from:[...e],to:[...e],t0:xe,duration:l-xe,style:"ground"}),{flights:x,touches:M,restEnd:Math.max(xe,l)}}let B=k?zr:n;if(!k&&A>RT){let j=A;for(const xe of _)xe>P&&(j=Math.min(j,xe-P));B*=Math.min(Math.max(j/CT,1),IT)}const G=B;B*=1+Ef[R%Ef.length],!k&&r.turnOut&&A-B<L&&(B=Math.max(A-L,zr));const U=Math.min(B,ST*i.cruise*i.cruise/jr),z=wf(i,y,U),O=Math.max(i.cruise*z-U,0),Z=Math.min(N,P-f(y)+O),Y=f(y)+Z,lt=Math.max(P,Y),Et=G>wT?s:s*(R%2?-1:1),kt=Math.min(g,TT*U),it=(w[0]-i.from[0])*u[0]+(w[1]-i.from[1])*u[1],bt=Math.abs(Et*kt-it),ht=Math.sqrt(Math.max(Af*Af-bt*bt,0)),W=Math.min(lt+U,P+ht,d),_t=wf(i,y,W-Y),wt=(W-P)/_t,Rt=wt+jr*_t/2,Wt=wt-jr*_t/2,Yt=[i.from[0]+a[0]*W+u[0]*Et*kt,i.from[1]+a[1]*W+u[1]*Et*kt],re={from:w,to:Yt,t0:y,duration:_t,style:"push",endFrac:Math.max(Wt,0)/Rt};x.push(re),w=[...Yt],y+=_t}}function bi(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function zn(i,t,e){const n=bi(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const Cu=.3,Rg=[{gait:"run_slow",clip:"run_slow_a"},{gait:"run_b",clip:"run_b"}];function Cg(i){const t=Pl.filter(n=>{var s;return(s=i.groups[n])==null?void 0:s.length}).map(n=>({gait:n,clipSpeed:i.clips[i.groups[n][0]].speed??Fn})).sort((n,s)=>n.clipSpeed-s.clipSpeed);return[...t.map((n,s)=>({...n,min:s===0?Cu:Math.sqrt(t[s-1].clipSpeed*n.clipSpeed)})),...Rg.filter(n=>{var s;return(s=i.clips[n.clip])==null?void 0:s.speed}).map(n=>({gait:n.gait,clipSpeed:i.clips[n.clip].speed,min:1/0}))].sort((n,s)=>n.clipSpeed-s.clipSpeed)}function va(i,t,e,n){const s=i.groups[t];return s!=null&&s.length?zn(s,e,n):Rg.find(r=>r.gait===t).clip}function Ka(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function DT(i,t,e=!0){const n=vi(i),s=n.t1+n.t2+n.t3,r=s+(i.hold??0);if(r<=0||!t.length)return[];const o=i.endSpeed??0,a=i.startSpeed??0,c=new Set([0,r]);for(const l of t)l.min>n.peak||(l.min>a&&c.add((l.min-a)/i.accel),l.min>o&&c.add(s-(l.min-o)/i.accel));const u=[...c].sort((l,d)=>l-d),h=[];for(let l=0;l+1<u.length;l++){if(u[l+1]-u[l]<1e-9)continue;const d=Ka(t,oi(i,i.t0+(u[l]+u[l+1])/2).speed);if(!d)continue;const p=h[h.length-1];p&&p.gait===d.gait&&Math.abs(p.t1-(i.t0+u[l]))<1e-9?p.t1=i.t0+u[l+1]:h.push({gait:d.gait,t0:i.t0+u[l],t1:i.t0+u[l+1]})}return e?Ig(h):h}const FT=.3;function Ig(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=FT;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const $a=.85,ki=1.15,Rf=.5;function Pg(i){return Rf+($a-Rf)*Math.min(1,Math.max(0,i))}function NT(i,t){const e=i/t;return e>ki?ki:Math.max(Pg(e),e)}function UT(i,t){return Math.min(ki,Math.max($a,i/t))}function kT(i,t,e){const n=i.findIndex(h=>h.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=$a&&r<=ki)return{timeScale:r,partner:null,weight:0};const o=r>ki?1:-1;let a;for(let h=n+o;h>=0&&h<i.length;h+=o)(!a||Math.abs(i[h].clipSpeed-t)<Math.abs(a.clipSpeed-t))&&(a=i[h]);if(!a)return{timeScale:r>ki?ki:Math.max(Pg(r),r),partner:null,weight:0};const c=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),u=(1-c)*s.clipSpeed+c*a.clipSpeed;return{timeScale:UT(t,u),partner:a.gait,weight:c}}const OT=new Set(["pass","shoot","receive","header","defensive"]),Ca=new Set(["turn","transition"]),Bi=.15,Lg=.1,Dg=.3,BT=.45,GT=.2,zT=.12,HT=.6;function Iu(i,t){var e;return OT.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function Fg(i,t,e){var r,o;if(Iu(i,t))return Lg;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return Ca.has(n??"")?Bi:n==="idle"?s==="idle"?HT:s==="locomotion"?zT:Pa:n==="locomotion"&&s==="locomotion"?GT:Ca.has(s??"")?Bi:Pa}function Ng(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?BT:Ca.has(e??"")?Bi:Iu(i,t)?Dg:Pa}function VT(i,t,e){var n;return Iu(i,t)||Ca.has(((n=i.clips[t])==null?void 0:n.category)??"")?Ng(i,t):Fg(i,e,t)}function WT(i,t,e){var r,o;const n=(r=i.clips[t])==null?void 0:r.category,s=(o=i.clips[e])==null?void 0:o.category;return n==="turn"||s==="turn"?!0:n==="locomotion"?s==="idle"||e===Ia:t===Ia&&s==="idle"}const Qe=Math.PI/180,Ui={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*Qe,t50:.567,t90:.8,peak:159*Qe,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*Qe,t50:.533,t90:.8,peak:213*Qe,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*Qe,t50:.4,t90:.6,peak:366*Qe,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*Qe,t50:.767,t90:1.033,peak:192*Qe,standing:!1}};function el(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function Ug(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+Bi&&(n=s);return n}function jT(i,t,e,n){const s=Ug(i,t,e);if(!s)return null;const r=Ui[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=el(r,s.offset),u=el(r,s.offset+o),h=el(r,a),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,p=n===void 0?s.to-s.from:gi(n,s.to),_=Math.min(1,(e-s.t0)/Bi),v=e<=s.end?1:Math.max(0,1-(e-s.end)/Bi),g=Math.max(0,Math.min(_,v));return{heading:d+p*l,clipYaw:r.yaw*h*g}}function XT(i,t){return i.peak+Ru(t)}function qT(i,t,e){const n=Math.abs(i);return n<Vl?null:n>aw&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Vl=45*Qe,Cf=60*Qe,KT=.3,$T=.5,YT=.7,ZT=130*Qe,Ia="run_stop_a",If=.75,JT=.167;function QT(i,t){var s;if((i.endSpeed??0)>0)return null;const e=vi(i),n=(s=Ka(t,e.peak))==null?void 0:s.gait;return n!=="run"&&n!=="sprint"||e.t3<If-JT?null:i.t0+e.t1+e.t2+e.t3-If}const Zo=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Pf={left:"strafe_l_a",right:"strafe_r_a"},tw=3.2,ew=3.2,kg=60*Qe,nw=120*Qe,iw=100*Qe,Lf=[{id:"jog_back_diag_a",axis:225.5*Qe,speed:2.04},{id:"jog_back_diag_b",axis:135.5*Qe,speed:2.27}],sw=5;function rw(i,t){if(Math.abs(i)>kg)return null;const e=i>=0?Lf[0]:Lf[1];return t<=e.speed*ki?{id:e.id,axis:e.axis}:null}function ow(i,t){const e=Math.abs(i);return e<=kg?t>tw?null:t>(Zo[0].speed+Zo[1].speed)/2?Zo[1].id:Zo[0].id:e>nw||t>ew?null:i>0?Pf.right:Pf.left}const aw=120*Qe;function gi(i,t){return Xa(t-i)}const Pa=.25;function ir(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?bT:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=Ng(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function cw(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function Og(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<ir(t,r)&&(s=r);return s}const lw=.15;function uw(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const hw=.1,Df=2,dw=6,fw=.4;function La(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Jo(i,t){return La(bi(i),20973)*t}function Qo(i){return 1+hw*(2*La(bi(i),10196)-1)}function Bg(i,t){return(Df+La(bi(i),7047)*(dw-Df))*(1+fw*(2*La(bi(i)+t*2654435761,28490)-1))}function pw(i,t){let e=0;for(let n=0;n<64;n++)if(e+=Bg(i,n),t<e)return n;return 64}function Ff(i,t,e){const n=i.length;if(n<=1)return i[0];const s=bi(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function mw(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const gw=new Set(["receive_a","pass_a","pass_b"]),Gg=.8,_w=.7;function zg(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function Pu(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+ue(n)?0:oi(n,t).speed);return e}function bw(i,t,e){for(const n of i)gw.has(n.clip)&&Pu(t[n.player],zg(e,n))>=Gg&&(n.additive=!0)}const vw=1,xw=2,yw=.025,Nf=.2,Mw=.4,Uf="idle_transition";function Sw(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/Nf,(o-r)/Nf);a<=0||(n=Math.max(n,yw*a*.5*(1-Math.cos(2*Math.PI*xw*r))))}return n}const kf="idle_b",Aw=.5,Ew=.3,Tw=.15;function ww(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,Aw*Math.min(1,(e-s.t0)/Ew)*Math.min(1,(s.t1-e)/Tw)));return n}function Rw(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=zg(e,r)-vw,a=r.t0;if(a-o<Mw||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(Pu(t[r.player],u)>Cu){c=!0;break}const h=Og(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[Uf]&&s.push({player:r.player,clip:Uf,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const Cw=.6,Hg=.5,Vg=.6,$r=2*Hg/Vg,Da=$r/Vg,Iw=Hg-eo;function Pw(i){return($r-Math.sqrt(Math.max(0,$r*$r-2*Da*i)))/Da}function Lw(){return $r-Da*Pw(Iw)}const Dw=.15,Fw=.05;function Nw(i,t,e){const n=Be(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(h1,s/2):eo,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+u1;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function Uw(i,t,e,n,s,r){const o=Math.min(eo,e*(n-Di)/2);for(let a=o;a>=Dw-1e-9;a-=Fw){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}const ta=.05,Wl=.3,kw=3,Ow=1.5,Bw=100*Qe,Of=1.3,Bf=.5,Gw=.5,Gf=.5;function zw(i){return i<=30*Qe?1:i<=60*Qe?.75:.5}function Hw(i,t){if(t<=1e-9)return 0;const e=i.endSpeed??0,n=vi({...i,hold:0});if(e>=i.cruise-1e-9||n.peak<i.cruise-1e-9)return null;const s=t/(1-e/i.cruise);return e*s<=n.d2+1e-9?s:null}const Vw=10*Qe,zf=50;function Ww(i,t,e=1){var Ee,me,un,Nn,ci,$e,Tn,Mi,Kn,Un,li,kn,ui,$n,ot,Ct,ct,Bt,Gt;mw(t),Ag(t);const n=Aa(i),s=Cg(t),r={};i.players.forEach(b=>r[b.id]=[...b.start]);const o={},a=[],c=[],u=[],h=[],l=[],d=[],p=[],_=[],v={},g={},f=new Map,x=new Map,M=new Set,y=b=>!!b&&b.type==="move"&&!!b.dur,w=b=>{let m=b+1;for(;y(Tt[m]);)m++;return Tt[m]},T=b=>{let m=b-1;for(;y(Tt[m]);)m--;return Tt[m]},R=new Set,P={},A={},E={},L={};function k(b){u.push(b),P[b.player]=b.t0,Ni(r[b.player],b.at)&&(N[b.player]=Be(r[b.player],b.at))}const N={},B={},G={};function U(b){const m=v[b];let D=Math.max(m?m.t0+ue(m):0,B[b]??0,0);for(const I of c)I.player===b&&t.clips[I.clip]&&(D=Math.max(D,ir(t,I)));return D}function z(b,m,D,I){if(gt.has(b)||!Ni(r[b],D))return null;const S=N[b]??0,V=gi(S,Be(r[b],D));if(Math.abs(V)<Cf)return null;const X=Ui[V>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[X.id])return null;const Q=O(X),rt=U(b),nt=Math.max(rt,Math.min(m,I-Q));return nt+Q>I+1e-9?null:(Y(b,X,nt,0,S,S+V),nt)}function O(b,m=0){return b.duration-m-Bi}function Z(b,m){const D=Math.abs(m)>ZT,I=b==="run"?Ui.turn_180_a:null,S=D&&I&&t.clips[I.id]?I:Ui.turn_to_run_a,V=S.id===Ui.turn_to_run_a.id?$T:0,X=S.id===Ui.turn_to_run_a.id?YT:O(S,V);return{c:S,offset:V,play:X}}function Y(b,m,D,I,S,V,X){const Q=X??O(m,I),rt={player:b,clip:m.id,t0:D,offset:I,end:D+Q,from:S,to:V},nt={player:b,clip:m.id,t0:D,...I?{offset:I}:{},...X!==void 0?{loopUntil:D+Q}:{}};p.push(rt),c.push(nt),G[b]={span:rt,cue:nt},B[b]=rt.end+Bi}function lt(b,m){const D=G[b];return!D||D.span.end<=m+1e-9?!0:m-D.span.t0<KT?!1:(D.span.end=m,D.cue.loopUntil=m,B[b]=m+Bi,!0)}function Et(b,m){if(lt(b,m))return;const D=G[b];p.splice(p.indexOf(D.span),1);const I=c.indexOf(D.cue);I>=0&&c.splice(I,1),delete G[b],B[b]=0}function kt(b,m=1/0){const D=z(b.player,b.t0,b.at,m);k(D===null?b:{...b,t0:D})}const it=[];function bt(b){var m;for(let D=0;D<it.length;D++){const I=it[D];I.afterT>=b||(it.splice(D--,1),(o[m=I.player]??(o[m]=[])).push(I.move),v[I.player]=I.move,g[I.player]=_t(I.move,I.player),k({player:I.player,at:I.faceBall,t0:I.move.t0}),k({player:I.player,at:I.faceSettle,t0:I.arrival}),r[I.player]=[...I.move.to])}}function ht(b,m,D){let I=[...r[b]],S=[...r[b]];const V=v[b];let X=Math.max(V?V.t0+ue(V):0,A[b]??0),Q=-1/0,rt=null;for(let nt=m+1;nt<Tt.length;nt++){const tt=Tt[nt];if(tt.t>=D)break;if((tt.type==="pass"?tt.from:tt.player)!==b)continue;if(tt.type!=="move"){rt=`${tt.type} at t=${tt.t}`;break}const ut=t.groups[tt.gait??"jog"]??t.groups.jog,ft=t.clips[zn(ut,b,tt.t)].speed??Fn,xt={from:I,to:[...tt.to],t0:tt.t,cruise:ft,accel:Dn},at=tt.t+ue(xt);X=Math.max(X,at),I=[...tt.to],S=at>D?oi(xt,D).pos:[...tt.to],Q=tt.t}return{expected:I,atArrival:S,busyUntil:X,afterT:Q,blocked:rt}}function W(b,m,D=b[0].t0){const I=[];for(const X of b)for(const Q of DT(X,s,!1)){const rt=I[I.length-1];rt&&rt.gait===Q.gait&&Math.abs(rt.t1-Q.t0)<1e-9?rt.t1=Q.t1:I.push(Q)}const S=t.clips[Ia]?QT(b[b.length-1],s):null,V=Ig(I).filter(X=>S===null||X.t0<S-1e-9).map(X=>({player:m,clip:va(t,X.gait,m,D),t0:X.t0,loopUntil:S===null?X.t1:Math.min(X.t1,S)}));return S!==null&&V.push({player:m,clip:Ia,t0:S}),V}function _t(b,m){const D=W([b],m),I=G[m];if(I){let S=1/0;for(const V of D)V.t0>I.span.t0+1e-9&&V.t0<I.span.end-1e-9&&(S=Math.min(S,V.t0));S<1/0&&Et(m,S)}return c.push(...D),f.set(b,D),D}function wt(b,m){return b.filter(D=>{if(D.t0>=m-1e-9)return!0;if((D.loopUntil??1/0)<=m+1e-9){const I=c.indexOf(D);return I>=0&&c.splice(I,1),!1}return D.t0=m,!0})}function Rt(b,m,D="event"){(Dt[b]??0)>m&&console.warn(`[engine3d] ${b} is on the ground until t=${Dt[b].toFixed(2)}s but has a ${D} at t=${m} — schedule it later`);const I=v[b];if(!I)return;const S=I.t0+ue(I);if(m<S){const V=`buildSchedule: player ${b} has an event at t=${m} while still moving from a move started at t=${I.t0} (in flight until t=${S.toFixed(3)})`;if(Ot.has(b))console.warn(`[engine3d] ${V} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(V)}}function Wt(b){let m=null,D=-1/0;for(const I of _)I.t<=b&&I.t>=D&&(m=I.player,D=I.t);return m}const Yt=[];function re(b,m,D){const I=i.balls??[],S=ut=>ut.carrier&&r[ut.carrier]?ni(r[ut.carrier],N[ut.carrier]??0):mg(ut,m);let V=-1,X=1/0;const Q=r[b];if(I.forEach((ut,ft)=>{if(Yt.some(J=>J.take===ft))return;const xt=S(ut),at=Math.hypot(xt[0]-Q[0],xt[1]-Q[1]);at<X&&(X=at,V=ft)}),V<0||X>Zd){const ut=I.length?V<0?"every spare has already been used":`the nearest is ${X.toFixed(1)} m away (needs ${Zd} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${D} by ${b} at t=${m.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${ut} — played with the ball already in play`);return}const rt=Wt(m),nt=rt?Ms(l,rt,m):null,tt=nt?[...nt.carry]:rt&&r[rt]?ni(r[rt],N[rt]??0):Gr(a,n,m).at,pt=S(I[V]);Yt.push({t:m,drop:tt,take:V,at:pt}),_.push({t:m,player:b}),l.push({player:b,at:m,carry:pt}),A[b]=m}const j=Object.fromEntries(i.players.map(b=>[b.id,b.team]));function xe(b,m,D,I,S,V){const X=Wt(I);if(!X||X===b||gt.has(b)||j[b]==="coach"||j[X]===j[b])return null;const Q=ut=>{if(!Ni(m,ut)||!Ni(m,D))return null;const ft=Be(m,D),xt=gi(Be(ut,m),ft),at=Math.hypot(ut[0]-m[0],ut[1]-m[1])<=sw?rw(xt,S):null;if(at&&t.clips[at.id]){const st=ft-at.axis,mt=Math.hypot(ut[0]-m[0],ut[1]-m[1])||1;return{clip:at.id,ball:[m[0]+mt*Math.sin(st),m[1]+mt*Math.cos(st)]}}const J=ow(xt,S);return J&&t.clips[J]?{clip:J,ball:ut}:null},rt=Q(r[X]?[...r[X]]:Gr(a,n,I).at),nt=i.events.find(ut=>ut.type==="pass"&&ut.from===X&&ut.t>=I-1e-9&&ut.t<=I+V/2),tt=(nt==null?void 0:nt.type)==="pass"&&r[nt.to]?[...r[nt.to]]:null,pt=rt?rt.ball:D;return!tt||!Ni(m,tt)||!Ni(m,pt)||Math.abs(gi(Be(m,pt),Be(m,tt)))<=iw?rt:Q(tt)}const te={};for(const b of i.events)b.type==="move"&&(te[Ee=b.player]??(te[Ee]=[])).push(b.t);function Qt(b,m,D){for(const I of q){const S=I.id;if(!Zt.length||Wt(b)===S||!t.clips[jo.left.id]||!t.clips[jo.right.id])continue;const V=v[S],X=Math.max(b,Lt[S]??0,V?V.t0+ue(V):0);if(d.some(Pt=>Pt.player===S))continue;const Q=Zt.reduce((Pt,Kt)=>Math.hypot(Kt.at[0]-I.start[0],Kt.at[1]-I.start[1])<Math.hypot(Pt.at[0]-I.start[0],Pt.at[1]-I.start[1])?Kt:Pt,Zt[0]),rt=Q.at,nt=Q.sideways?1:0,tt=Q.sideways?0:1,pt=A1($,e,Math.abs(r[S][tt]-rt[tt]),Q.halfW),ft=rt[nt]+Math.min(pt,Math.max(-pt,(D[nt]-rt[nt])*S1))-r[S][nt],xt=Be(rt,[i.pitch.width/2,i.pitch.length/2]),at=Q.sideways?-Math.sin(xt):Math.cos(xt),J=T1(ft,jo[ft*at>0?"left":"right"].dist*$,Math.sign(at)||1);if(!J)continue;const st=jo[J.side],mt=Math.min(m,i.duration)-J.steps*st.duration;if(mt<X-1e-9||(te[S]??[]).some(Pt=>Pt>=mt-1e-9))continue;const It=Math.sign(ft)*st.dist*$;for(let Pt=0;Pt<J.steps;Pt++){const Kt=[...r[S]],ne=[...Kt];ne[nt]=Kt[nt]+It;const Te=ff(Kt,ne,mt+Pt*st.duration,st.duration);(o[S]??(o[S]=[])).push(Te),r[S]=[...Te.to],v[S]=Te}c.push({player:S,clip:st.id,t0:mt,loopUntil:mt+J.steps*st.duration}),g[S]=[]}}function qt(b,m){var V;const D=(V=i.players.find(X=>X.id===b))==null?void 0:V.start;if(!D||!Zt.length)return!1;let I=Zt[0].at,S=1/0;for(const X of Zt){const Q=Math.hypot(X.at[0]-D[0],X.at[1]-D[1]);Q<S&&(S=Q,I=X.at)}return Math.hypot(m[0]-I[0],m[1]-I[1])<=$1*$}function he(b,m){const D=v[b];if(!D||D.endSpeed)return;const I=D.t0+ue(D);if(m-I>=Wo)return;D.endSpeed=$s;const S=D.t0+ue(D);for(const V of g[b]??[]){const X=c.indexOf(V);X>=0&&c.splice(X,1)}if(g[b]=_t(D,b),S>m-Di){if(Ot.has(b)){console.warn(`[engine3d] player ${b}'s move started at t=${D.t0} still arrives at t=${S.toFixed(3)}, less than ${Di}s before their action at t=${m} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${b}'s move started at t=${D.t0} still arrives at t=${S.toFixed(3)} even flowing into their action at ${$s} m/s, less than ${Di}s before their action at t=${m} — move the event later or start the approach move earlier`)}}function Nt(b,m,D,I,S){const V=v[b],X=V?V.t0+ue(V):0;if(V&&(V.endSpeed!==void 0||m-X<Wo))return null;const Q=Nw(r[b],D,S),rt=t.groups.walk,nt=rt!=null&&rt.length?t.clips[rt[0]].speed??Fn:Fn,tt={from:[...r[b]],to:Q,t0:0,cruise:nt,accel:Dn};let pt=m-I-ue(tt);return pt<Math.max(X,A[b]??0)||!lt(b,pt)?null:(tt.t0=pt,(o[b]??(o[b]=[])).push(tt),S&&R.add(tt),v[b]=tt,g[b]=_t(tt,b),r[b]=[...Q],pt)}function F(b,m,D){const I=Gr(a,n,m).at,S=Be(I,D),V=[I[0]-Ge*Math.sin(S),I[1]-Ge*Math.cos(S)],X=Math.hypot(V[0]-r[b][0],V[1]-r[b][1]);if(X<B1){r[b]=[...V];return}const Q=v[b],rt=Q?Q.t0+ue(Q):0,nt=Math.max(rt,A[b]??0,0);let tt;for(let pt=X<hf?0:1;pt<$o.length;pt++){const ut=t.groups[$o[pt]]??t.groups.jog,ft=t.clips[zn(ut,b,m)].speed??Fn;if(tt={from:[...r[b]],to:V,t0:0,cruise:ft,accel:Dn,endSpeed:$s},tt.t0=m-Di-ue(tt),tt.t0>=nt)break}tt.t0<nt&&(console.warn(`[engine3d] dead-ball run-up for ${b} at t=${m.toFixed(2)}s wants to start at t=${tt.t0.toFixed(2)}s but he is not free until t=${nt.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),tt.t0=nt),lt(b,tt.t0),(o[b]??(o[b]=[])).push(tt),v[b]=tt,g[b]=_t(tt,b),r[b]=[...V]}function C(b,m,D){const I=Gr(a,n,m);{const ut=df(I.at,Jt,q1*$);if(Math.hypot(ut[0]-I.at[0],ut[1]-I.at[1])>1e-6){const ft=a.filter(xt=>xt.t0<=m&&Math.hypot(xt.to[0]-I.at[0],xt.to[1]-I.at[1])<1e-9);if(ft.length){for(const xt of ft)Math.hypot(xt.from[0]-I.at[0],xt.from[1]-I.at[1])<1e-9&&(xt.from=[...ut]),xt.to=[...ut];I.at=ut}}}const S=Wt(m);S&&S!==b&&_.push({t:m,player:null});const V=I.moving?I.restT+J1:-1/0;let X=null;for(let ut=D+1;ut<Tt.length;ut++){const ft=vt[ut];if(!(!ft||ft.actor!==b)){ft.t-m<=Ys+3&&(X=ft.target);break}}let Q=mf(r[b],I.at,X);if(Q.stepTo){const ut=df(Q.stepTo,Jt,K1*$),ft=[ut[0]-I.at[0],ut[1]-I.at[1]];if(Math.hypot(ft[0],ft[1])>1e-6){const xt=nn(ft),at=Ge+1,J=mf([I.at[0]+at*xt[0],I.at[1]+at*xt[1]],I.at,X);J.stepTo&&jt(J.stepTo)&&(Q=J)}}let rt=1/0;for(let ut=D+1;ut<Tt.length;ut++){const ft=Tt[ut];if((ft.type==="pass"?ft.from:ft.player)===b){rt=ft.t;break}}let nt=m;if(Q.stepTo){const ut=Math.hypot(Q.stepTo[0]-r[b][0],Q.stepTo[1]-r[b][1]);let ft;for(let xt=ut<hf?0:1;xt<$o.length;xt++){const at=t.groups[$o[xt]]??t.groups.jog,J=t.clips[zn(at,b,m)].speed??Fn;if(ft={from:[...r[b]],to:Q.stepTo,t0:m,cruise:J,accel:Dn,endSpeed:$s},m+ue(ft)+mi+Di<=rt)break}if(V>m+ue(ft)){const xt=V-m,at=Math.hypot(Q.stepTo[0]-ft.from[0],Q.stepTo[1]-ft.from[1]),J=Dn*Dn*xt*xt-4*Dn*at,st=J>0?(Dn*xt-Math.sqrt(J))/2:ft.cruise,mt=(t.clips[zn(t.groups.walk,b,m)].speed??Cu)*$a;ft={...ft,cruise:Math.max(Math.min(st,ft.cruise),mt),endSpeed:0}}(o[b]??(o[b]=[])).push(ft),Ot.set(b,m),v[b]=ft,g[b]=_t(ft,b),nt=m+ue(ft),r[b]=[...Q.stepTo]}nt=Math.max(nt,V),k({player:b,at:[...I.at],t0:Math.max(m,P[b]??0),lock:[nt-wn,nt+wn]});const tt=ut=>{for(const ft of g[b]??[]){const xt=c.indexOf(ft);ft.t0>=ut?xt>=0&&c.splice(xt,1):(ft.loopUntil??0)>ut&&(ft.loopUntil=ut)}};if(gt.has(b)&&qt(b,I.at)){const ut=Mn.scoop[0],ft=nt-ut.contact;return ft<m&&console.warn(`[engine3d] keeper ${b}'s scoop at t=${nt.toFixed(2)}s wants to start at t=${ft.toFixed(2)}s, before his collect at t=${m.toFixed(2)}s — schedule the collect earlier`),tt(Math.max(ft,0)),c.push({player:b,clip:ut.id,t0:Math.max(ft,0),contact:ut.contact}),k({player:b,at:[...Q.faceAt],t0:nt}),_.push({t:nt,player:b}),l.push({player:b,at:nt,carry:[...I.at],hand:{height:ei*$,from:Y1*$,rise:sf,follow:!0}}),A[b]=nt,Lt[b]=Math.max(ft,0)+ut.duration+Zs,nt}const pt=zn(t.groups.pass,b,nt);return tt(nt-(t.clips[pt].ballContact??0)),c.push({player:b,clip:pt,t0:nt-(t.clips[pt].ballContact??0)}),a.push({from:[...I.at],to:Q.set,t0:nt,duration:mi,style:"ground"}),k({player:b,at:[...Q.faceAt],t0:nt}),_.push({t:nt,player:b}),l.push({player:b,at:nt+mi,carry:Q.set}),A[b]=nt+mi,nt+mi}const q=i.players.filter(b=>b.role==="keeper"),$=e,gt=new Set(q.map(b=>b.id));i.players.forEach(b=>N[b.id]=b.role==="keeper"?Be(b.start,n):0);const et=((me=i.keeper)==null?void 0:me.outcome)==="save",Lt={},Dt={},Ot=new Map,oe={},At={},Tt=[...i.events].sort((b,m)=>b.t-m.t);if(i.ball&&!i.ball.static){const b=n,m=i.players.reduce((S,V)=>Math.hypot(V.start[0]-b[0],V.start[1]-b[1])<Math.hypot(S.start[0]-b[0],S.start[1]-b[1])?V:S,i.players[0]),D=Tt.find(S=>S.type!=="move"||S.player===(m==null?void 0:m.id)&&gt.has(S.player)),I=D?D.type==="pass"?D.from:D.player:null;if(!((D==null?void 0:D.type)==="collect"||((D==null?void 0:D.type)==="pass"||(D==null?void 0:D.type)==="shoot")&&D.deadBall))if(I&&gt.has(I))_.push({t:0,player:I}),A[I]=0,(D==null?void 0:D.type)==="pass"&&!!D.fromFeet||l.push({player:I,at:0,carry:[...n],hand:{height:ei*$,follow:!0}});else{const S=i.players.filter(Q=>Q.role!=="keeper"),V=S.length?S:i.players,X=V.reduce((Q,rt)=>Math.hypot(rt.start[0]-n[0],rt.start[1]-n[1])<Math.hypot(r[Q.id][0]-n[0],r[Q.id][1]-n[1])?rt:Q,V[0]).id;_.push({t:0,player:X}),A[X]=0}}const Zt=(i.equipment??[]).filter(b=>b.type==="goal").map(b=>({at:b.at,halfW:ws(b,qa),sideways:b.facing==="e"||b.facing==="w"})),Jt=Z1(i.equipment,e),jt=b=>b[0]>=0&&b[0]<=i.pitch.width&&b[1]>=0&&b[1]<=i.pitch.length,pe=b=>Jt.every(m=>Math.hypot(m[0]-b[0],m[1]-b[1])>=_a*$),St={};i.players.forEach(b=>St[b.id]=[...b.start]);const vt=Tt.map(b=>{if(b.type==="move")return St[b.player]=[...b.to],null;if(b.type==="dribble")return St[b.player]=[...b.to],{actor:b.player,target:[...b.to],t:b.t};if(b.type==="collect"||b.type==="tackle")return null;const m=b.type==="pass"?b.from:b.player;b.deadBall&&(St[m]=[...n]);const D=b.type==="pass"?[...St[b.to]]:b.flightStyle==="ground"?[...b.at]:vT(St[b.player],b.at,Zt,b.corner,e);return{actor:m,target:D,t:b.t}});for(let b=0;b<Tt.length;b++){const m=Tt[b];bt(m.t);const D=m.type==="pass"?m.from:m.player;if(m.newBall&&re(D,m.t,m.type),m.type!=="dribble"&&m.type!=="move"&&delete L[D],m.type==="move"){Rt(m.player,m.t,m.type);const S=gt.has(m.player)&&(((Nn=(un=Ms(l,m.player,m.t))==null?void 0:un.hand)==null?void 0:Nn.height)??0)>0;Wt(m.t)===m.player&&!S&&console.warn(`[engine3d] move event for ${m.player} at t=${m.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const V=t.groups[m.gait??"jog"]??t.groups.jog,X=t.clips[zn(V,m.player,m.t)].speed??Fn,Q=E[m.player],rt=Q&&m.t<Q.t0?[...Q.at]:[...r[m.player]],nt=m.dur?Math.hypot(m.to[0]-rt[0],m.to[1]-rt[1])/m.dur:0,tt=m.dur?{from:rt,to:m.to,t0:m.t,cruise:nt,accel:Dn,startSpeed:nt,endSpeed:nt}:{from:rt,to:m.to,t0:m.t,cruise:X,accel:Dn};m.dur&&M.add(tt);const pt=xe(m.player,tt.from,m.to,m.t,X,ue(tt)),ut=pt?null:(()=>{const xt=Ka(s,X);if((xt==null?void 0:xt.gait)!=="run"&&(xt==null?void 0:xt.gait)!=="sprint"||!t.clips[Ui.turn_to_run_a.id]||gt.has(m.player)||U(m.player)>m.t+1e-9||!Ni(tt.from,m.to))return null;const at=gi(N[m.player]??0,Be(tt.from,m.to));return Math.abs(at)>=Cf?{delta:at,gait:xt.gait}:null})();(o[ci=m.player]??(o[ci]=[])).push(tt),v[m.player]=tt,g[m.player]=_t(tt,m.player);const ft={t0:m.t,face:null,r11:!!pt,start:null};if(m.dur||x.set(tt,ft),pt){for(const at of g[m.player]??[]){const J=c.indexOf(at);J>=0&&c.splice(J,1)}const xt={player:m.player,clip:pt.clip,t0:m.t,loopUntil:m.t+ue(tt)};c.push(xt),g[m.player]=[xt],f.set(tt,[xt]),ft.face={player:m.player,at:pt.ball,t0:m.t,until:m.t+ue(tt)},k(ft.face)}else{if(ut){const{c:xt,offset:at,play:J}=Z(ut.gait,ut.delta),st=N[m.player]??0;Y(m.player,xt,m.t,at,st,st+ut.delta,J);const mt=m.t+J;ft.start={...G[m.player],end:mt},g[m.player]=wt(g[m.player]??[],mt),f.set(tt,g[m.player])}ft.face={player:m.player,at:m.to,t0:m.t},k(ft.face)}r[m.player]=[...m.to]}else if(m.type==="dribble"){Rt(m.player,m.t,m.type),Wt(m.t)!==m.player&&console.warn(`[engine3d] dribble event for ${m.player} at t=${m.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const S=m.gait??"jog",V=t.groups[S]??t.groups.jog,X=t.clips[zn(V,m.player,m.t)].speed??Fn,Q=Be(r[m.player],m.to),rt=(((Tn=($e=Ms(l,m.player,m.t))==null?void 0:$e.hand)==null?void 0:Tn.height)??0)>0,nt=rt?xg(l,m.player,m.t):0,tt=rt?m.t+of:m.t,pt={from:[...r[m.player]],to:[...m.to],t0:tt,cruise:X,accel:Dn};let ut=null;for(let ge=b+1;ge<Tt.length;ge++){const fe=vt[ge];if(!(!fe||fe.actor!==m.player)){ut={target:fe.target,t:fe.t};break}}const ft=tt+ue(pt);let xt=null;for(let ge=b+1;ge<Tt.length;ge++){const fe=Tt[ge];if((fe.type==="pass"?fe.from:fe.player)===m.player){xt=fe;break}}let at=null;if((xt==null?void 0:xt.type)==="dribble"&&xt.t-ft<=Ys){const ge=gi(Q,Be(m.to,xt.to)),fe=qT(ge,S),De=fe?Ui[fe]:null;if(De&&t.clips[De.id]){const Mt=De.standing?ft:tt+ue({...pt,endSpeed:$s});xt.t-Mt>=O(De)-1e-9&&(at={c:De,delta:ge})}}ut&&ut.t-ft<Wo&&!(at!=null&&at.c.standing)&&(pt.endSpeed=$s),at&&Y(m.player,at.c,xt.t-O(at.c),0,Q,Q+at.delta),(o[Mi=m.player]??(o[Mi]=[])).push(pt),v[m.player]=pt,g[m.player]=_t(pt,m.player),k({player:m.player,at:[...m.to],t0:m.t});let J=null;for(const ge of l)ge.player===m.player&&(!J||ge.at>J.at)&&(J=ge);J&&J.at>m.t+1e-9&&console.warn(`[engine3d] dribble for ${m.player} at t=${m.t.toFixed(2)}s starts during their settle (ends t=${J.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let st=J?[...J.carry]:ni(r[m.player],Q);rt&&(st=ni(r[m.player],Q),l.push({player:m.player,at:m.t,carry:[...st],hand:{height:0,from:nt,rise:of,follow:!0}}),A[m.player]=m.t);const mt=ut&&ut.t-ft<=Ys?ni(m.to,Be(m.to,ut.target)):ni(m.to,Q),It=bi(m.player)%2===0?1:-1;let Pt=It,Kt=!1;for(let ge=b+1;ge<Tt.length;ge++){const fe=Tt[ge];if((fe.type==="pass"?fe.from:fe.player)===m.player){if(fe.type==="dribble"&&fe.t-ft<=Ys){const Mt=nn([m.to[0]-pt.from[0],m.to[1]-pt.from[1]]),le=nn([fe.to[0]-m.to[0],fe.to[1]-m.to[1]]),ke=Mt[0]*le[1]-Mt[1]*le[0],we=ke<0?1:-1;Math.abs(ke)>.05&&we===-It&&(Pt=we),Kt=Math.abs(gi(Be(pt.from,m.to),Be(m.to,fe.to)))>Vl}break}}const ne=L[m.player],Te=!!ne&&tt-ne.end<=Ys&&Math.abs(gi(ne.h,Q))>Vl;L[m.player]={h:Q,end:ft};const de=Object.entries(r).filter(([ge])=>ge!==m.player).map(([,ge])=>[...ge]),Xt=LT(pt,st,mt,Sf[S]??Sf.jog,Pt,{turnIn:Te,turnOut:Kt,others:de});a.push(...Xt.flights),l.push({player:m.player,at:Xt.restEnd,carry:[...mt]}),A[m.player]=Xt.restEnd,r[m.player]=[...m.to],Qt(Xt.restEnd,((Kn=w(b))==null?void 0:Kn.t)??i.duration,[...mt])}else if(m.type==="collect")Rt(m.player,m.t,m.type),C(m.player,m.t,b);else if(m.type==="tackle"){Rt(m.player,m.t,m.type),he(m.player,m.t);const S=m.from;Wt(m.t)!==S&&console.warn(`[engine3d] tackle by ${m.player} at t=${m.t.toFixed(2)}s from ${S}, but ${Wt(m.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const V=gt.has(m.player)&&!!t.clips[Ko.id],X=!V&&m.style!=="slide"&&!!t.clips[qo.id],Q=m.t+(V?Ko:X?qo:Kc[0]).contact;let rt=null,nt=-1/0;for(const J of l)J.player===S&&J.at<=Q&&J.at>nt&&(nt=J.at,rt=[...J.carry]);if(rt||(rt=ni(r[S],Be(r[S],r[m.player]))),X){const J=V1*$,st=nn([r[m.player][0]-r[S][0],r[m.player][1]-r[S][1]]);if(Math.hypot(r[m.player][0]-r[S][0],r[m.player][1]-r[S][1])<J){const mt=[r[S][0]+J*st[0],r[S][1]+J*st[1]],It=v[m.player];if(It&&Math.hypot(It.to[0]-r[m.player][0],It.to[1]-r[m.player][1])<1e-6){const Pt=(t.clips[zn(t.groups.sprint??t.groups.run??t.groups.jog,m.player,m.t)].speed??It.cruise)*ki,Kt=Math.min(ue(It),Math.max(Q-It.t0,.2));It.to=mt;for(let ne=0;ne<8&&ue(It)>Kt+1e-6&&It.cruise<Pt;ne++)It.cruise=Math.min(Pt,It.cruise*ue(It)/Kt);for(const ne of g[m.player]??[]){const Te=c.indexOf(ne);Te>=0&&c.splice(Te,1)}g[m.player]=_t(It,m.player),r[m.player]=Q<It.t0+ue(It)?oi(It,Q).pos:mt}else r[m.player]=mt}}const tt=X?Math.hypot(r[S][0]-r[m.player][0],r[S][1]-r[m.player][1]):Math.hypot(rt[0]-r[m.player][0],rt[1]-r[m.player][1]),pt=V?Ko.reach:X?qo.reach+Ge:j1;tt>pt*$&&console.warn(`[engine3d] tackle by ${m.player} at t=${m.t.toFixed(2)}s: the ball is ${tt.toFixed(2)} m away (reach ${(pt*$).toFixed(2)}) — move the tackler closer first`),X&&tt<_a*$-1e-6&&console.warn(`[engine3d] tackle by ${m.player} at t=${m.t.toFixed(2)}s: he is ${tt.toFixed(2)} m from ${S}, inside a body width (${(_a*$).toFixed(2)} m at this body scale) — the two of them draw as one`);const ut=V?Ko:X?qo:Kc[Math.abs(bi(m.player)+Math.floor(m.t*10))%Kc.length],ft=m.t+ut.contact,xt={player:m.player,clip:ut.id,t0:m.t,contact:ut.contact};if(c.push(xt),k({player:m.player,at:rt,t0:Math.max(m.t-Or,0,P[m.player]??0),lock:[m.t,m.t+ut.duration]}),V){const J=ir(t,xt),st=ni(r[m.player],Be(r[m.player],rt));_.push({t:ft,player:m.player});const mt=Qc(r[m.player],r[S],rt);l.push({player:m.player,at:ft,carry:[...rt],hand:{height:Xo*$,follow:!0,bone:mt}}),l.push({player:m.player,at:J,carry:st,hand:{height:ei*$,from:Xo*$,rise:Xc,follow:!0,bone:mt}}),A[m.player]=ft,Lt[m.player]=m.t+ut.duration+Zs}let at;if(!V){const J=nn([r[S][0]-r[m.player][0],r[S][1]-r[m.player][1]]),st=[-J[1],J[0]],mt=(rt[0]-r[S][0])*st[0]+(rt[1]-r[S][1])*st[1]>=0?1:-1,It=Pt=>[r[S][0]+mt*Pt*$*st[0]+uf*$*J[0],r[S][1]+mt*Pt*$*st[1]+uf*$*J[1]];if(at=It(lf),X){let Pt=pf(r[S],rt,at);for(let Kt=lf+.05;Kt<=1&&!(Pt>=H1*$);Kt+=.05){const ne=It(Kt),Te=pf(r[S],rt,ne);Te>Pt&&(Pt=Te,at=ne)}}a.push({from:rt,to:at,t0:ft,duration:$c,style:"ground",pop:!0}),_.push({t:ft,player:null})}if(X){let J=1/0;for(let Kt=b+1;Kt<Tt.length;Kt++){const ne=Tt[Kt];if((ne.type==="pass"?ne.from:ne.player)===S){J=ne.t;break}}const st=[...at],mt=Math.max(ft,P[S]??0),It=z(S,mt,st,J-Di),Pt=Math.min(J,Math.max(ft+$c,It===null?0:B[S]));(It??mt)<Pt&&k({player:S,at:st,t0:It??mt,until:Pt})}else if(t.clips[cf]){let J=1/0;for(let Kt=b+1;Kt<Tt.length;Kt++){const ne=Tt[Kt];if((ne.type==="pass"?ne.from:ne.player)===S){J=ne.t;break}}const st=nn([r[S][0]-rt[0],r[S][1]-rt[1]]),mt=z1*$,It=ft+W1,Pt=ff([...r[S]],[r[S][0]+mt*st[0],r[S][1]+mt*st[1]],It,Br);if(It+Br+Di<=J){(o[S]??(o[S]=[])).push(Pt),v[S]=Pt,c.push({player:S,clip:cf,t0:It,loopUntil:It+Br}),g[S]=[];const Kt=Math.max(It,P[S]??0);Kt<It+Br&&k({player:S,at:[...rt],t0:Kt,until:It+Br}),r[S]=[...Pt.to]}}V||C(m.player,Math.max(ir(t,xt),ft+$c),b)}else{const S=m.type==="pass"?m.from:m.player,V=oe[S],X=!!V&&m.t>=V.at-Yo&&m.t-V.at<=Yc;V&&!X&&console.warn(`[engine3d] header for ${S} at t=${m.t} does not meet the cross at their forehead (t=${V.at.toFixed(2)}s) — played as an ordinary ${m.type}`),delete oe[S];const Q=At[S],rt=!!Q&&!!m.firstTime&&!X;m.firstTime&&!Q&&!X&&console.warn(`[engine3d] firstTime ${m.type} for ${S} at t=${m.t} has no ball arriving at their boot — played as an ordinary strike`),delete At[S],X&&m.t-V.at>_f&&console.warn(`[engine3d] header for ${S} at t=${m.t} pulled to the ball's arrival (t=${V.at.toFixed(2)}s) — the ball cannot wait in the air`),Rt(S,m.t,m.type),X||he(S,m.t);const nt=m.type==="pass"?r[m.to]:vt[b].target,tt=m.type==="shoot"&&m.flightStyle!=="ground",pt=tt?pT:l1,ut=tt?mT:Or;m.deadBall&&!X&&F(S,m.t,nt);const ft=gt.has(S)&&Wt(m.t)===S&&(((li=(Un=Ms(l,S,m.t))==null?void 0:Un.hand)==null?void 0:li.height)??0)>0,xt=!ft&&(m.style==="throw"||m.style==="roll")?m.style:null;gt.has(S)&&(Lt[S]??0)>m.t&&console.warn(`[engine3d] keeper ${S} is busy until t=${Lt[S].toFixed(2)}s (save / catch clip still playing) but has a ${m.type} at t=${m.t} — schedule it later`);const at=Mt=>{if(!X)return null;const le=Math.hypot(Mt[0]-Xt[0],Mt[1]-Xt[1]);return le>=cT?{style:"headed",loft:Jc(le,$)}:null};let J=m.t;if(m.type==="shoot"&&!m.touch){const Mt=v[S],le=Mt?Mt.t0+ue(Mt):-1/0;Mt&&(Mt.endSpeed??0)>0&&m.t-le>vf&&m.t-le<Wo&&(J=le-vf)}let st="",mt,It,Pt=0,Kt=null,ne=null;if(X)mt=V.at,Pt=V.height;else if(rt)st=zn(t.groups[tt?"shoot":"pass"],S,J),It=t.clips[st].ballContact??0,J=Q.at-It,mt=Q.at,J<0&&console.warn(`[engine3d] first-time ${m.type} for ${S} wants its cue at t=${J.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((ft||xt)&&(m.type==="pass"||m.flightStyle==="ground")){Kt=m.style??Q1(Math.hypot(nt[0]-r[S][0],nt[1]-r[S][1]));const Mt=xt?M1[xt]:Mn[Kt];st=Mt.id,It=Mt.contact,mt=m.t+Mt.contact,Pt=Kt==="roll"?0:Mt.release*$,Lt[S]=m.t+Mt.duration+Zs}else{const Mt=v[S],le=m.type==="shoot"&&Mt&&(Mt.endSpeed??0)>0&&J<=Mt.t0+ue(Mt)+1e-9?oi(Mt,J).speed:0;ne=Nt(S,J,nt,pt,m.type==="pass"||m.type==="shoot"&&!!m.touch),le>gT&&t.clips[ba.id]&&!(m.type==="shoot"&&m.touch)?(st=ba.id,It=ba.contact):st=zn(t.groups[tt?"shoot":"pass"],S,m.t),mt=J+(It??t.clips[st].ballContact??0)}let Te=null;X||(Te={player:S,clip:st,t0:J,...It!==void 0?{contact:It}:{}},c.push(Te),kt({player:S,at:[...nt],t0:Math.max(J-ut,0,P[S]??0),lock:[J,mt+wn],until:mt+wn,headUntil:mt-lw},Math.min(J,ne??1/0)));const de=Be(r[S],nt),Xt=X?[...V.from]:rt?[...Q.from]:ni(r[S],de),ge=xt?k1:U1,fe=m.type==="pass"&&gt.has(m.to)&&!m.toFeet?m.flight:0,De=m.type!=="pass"?0:Kt==="throw"?Math.max(.4,fe,Math.hypot(nt[0]-Xt[0],nt[1]-Xt[1])/ge):m.style==="roll"?Math.max(m.flight,Math.hypot(nt[0]-Xt[0],nt[1]-Xt[1])/O1):m.flight;if(!X&&!rt){const Mt=Math.max(J-s1,A[S]??0);Mt>mt&&console.warn(`[engine3d] departure window for ${S} is inverted (starts t=${Mt.toFixed(2)}s, ball contact t=${mt.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:S,windowStart:Mt,contact:mt,heading:de,...Kt?{toHeight:Pt}:{}})}if(m.type==="pass"&&gt.has(m.to)&&!m.toFeet){const Mt=mt+De,le=ht(m.to,b,Mt);le.blocked&&console.warn(`[engine3d] ball to the keeper ${m.to} at t=${m.t}: their authored ${le.blocked} runs during the flight, so where they stand at t=${Mt.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const ke=le.atArrival,we=nn([Xt[0]-ke[0],Xt[1]-ke[1]]),We=[ke[0]+Ge*we[0],ke[1]+Ge*we[1]],Xe=(m.flightStyle==="clipped"||m.flightStyle==="lofted")&&m.style!=="roll",ye=((kn=m.deflect)==null?void 0:kn.style)==="lofted",Ht=Xe?(m.loft??0)>y1||ye?Mn.catchHigh:Mn.catch:Mn.scoop[Math.abs(bi(m.to)+Math.floor(Mt*10))%Mn.scoop.length],Me=Xe?Math.min(ei*(Ht===Mn.catchHigh?2:1),G1)*$:0,Re=Mt-Ht.contact;Re<0&&console.warn(`[engine3d] receive cue for ${m.to} wants t0=${Re.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Re<le.busyUntil&&console.warn(`[engine3d] catch cue for ${m.to} at t=${Mt.toFixed(2)}s wants t0=${Re.toFixed(2)}s but their move is still running (until t=${le.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Re<mt&&console.warn(`[engine3d] catch cue for ${m.to} at t=${Mt.toFixed(2)}s wants t0=${Re.toFixed(2)}s, before the ball leaves ${S} at t=${mt.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:m.to,clip:Ht.id,t0:Re,contact:Ht.contact});const rn=m.flightStyle==="lofted"?Jc(Math.hypot(We[0]-Xt[0],We[1]-Xt[1]),$)-(Pt+Me)/2:Kt==="throw"?Math.max(xt?qc:1.5,m.loft??0):m.loft;if(a.push({from:Xt,to:We,t0:mt,duration:De,style:Kt==="kick"?"clipped":Xe||Kt==="throw"?"lofted":"ground",...rn!==void 0?{loft:rn}:{},...Me?{toHeight:Me}:{},...Pt?{fromHeight:Pt}:{}}),k({player:m.to,at:[...r[S]],t0:m.t,lock:[Mt-wn,Mt+wn]}),m.deflect)a.push(af(We,Me,m.deflect,Mt,$)),A[m.to]=Mt;else{_.push({t:Mt,player:m.to});const Ie=Qc(r[m.to],r[S],We);l.push({player:m.to,at:Mt,carry:We,hand:Xe?{height:ei*$,from:Me,rise:Xc,follow:!0,bone:Ie}:{height:ei*$,from:0,rise:sf,follow:!0,bone:Ie}}),A[m.to]=Mt}Lt[m.to]=Re+Ht.duration+Zs}else if(m.type==="pass"&&!m.toFeet&&m.flightStyle==="lofted"&&(m.loft??sT)>=lT){const Mt=mt+De;let le=null,ke=1/0,we=!1,We=!1,Xe;for(let Ie=b+1;Ie<Tt.length;Ie++){const Oe=vt[Ie],je=Tt[Ie];if((je.type==="move"||je.type==="collect")&&je.player===m.to&&Xe===void 0&&je.t>=Mt-Yo&&(Xe=je.t),!(!Oe||Oe.actor!==m.to)){le=Oe.target,ke=Oe.t,We=je.type==="pass"||je.type==="shoot",we=We&&!!je.header;break}}Xe!==void 0&&We&&ke-Mt<=Yc&&console.warn(`[engine3d] ${m.to} has a move at t=${Xe.toFixed(2)}s between the cross landing on their forehead (t=${Mt.toFixed(2)}s) and their strike at t=${ke} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ye=We&&Xe===void 0&&ke>=Mt-Yo&&(ke-Mt<=_f||we&&ke-Mt<=Yc),Ht=ht(m.to,b,Mt);Ht.blocked&&!ye&&console.warn(`[engine3d] cross to ${m.to} at t=${m.t}: their authored ${Ht.blocked} runs during the flight, so where they stand at t=${Mt.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const Me=uT(Ht.atArrival,Xt,le,$),Re=Mt-Me.clip.contact;Re<0&&console.warn(`[engine3d] header cue for ${m.to} wants t0=${Re.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Re<Ht.busyUntil&&console.warn(`[engine3d] header cue for ${m.to} wants t0=${Re.toFixed(2)}s but their move is still running (until t=${Ht.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:m.to,clip:Me.clip.id,t0:Re,contact:Me.clip.contact});const rn=Math.hypot(Me.contact[0]-Xt[0],Me.contact[1]-Xt[1]);a.push({from:Xt,to:Me.contact,t0:mt,duration:De,style:"lofted",loft:Jc(rn,$)-(Pt+Me.height)/2,toHeight:Me.height,...Pt?{fromHeight:Pt}:{}}),ye?(oe[m.to]={at:Mt,from:Me.contact,height:Me.height},k({player:m.to,at:[...le],t0:Math.max(Re-Or,0,P[m.to]??0),lock:[Re,Mt+wn],until:Mt+wn})):(We&&ke<Mt-Yo?console.warn(`[engine3d] ${m.to}'s own strike at t=${ke} is ${(Mt-ke).toFixed(2)}s BEFORE the cross reaches their forehead (t=${Mt.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):we&&console.warn(`[engine3d] header for ${m.to} at t=${ke} is ${(ke-Mt).toFixed(2)}s after the ball arrives (t=${Mt.toFixed(2)}s) — ignored, cushioned instead`),k({player:m.to,at:[...r[S]],t0:m.t,lock:[Mt-wn,Mt+wn]}),a.push({from:Me.contact,to:Me.set,t0:Mt,duration:Zc,style:"drop",fromHeight:Me.height}),k({player:m.to,at:[...Me.faceAt],t0:Mt}),_.push({t:Mt,player:m.to}),A[m.to]=Mt+Zc,l.push({player:m.to,at:Mt+Zc,carry:Me.set}))}else if(m.type==="pass"){const Mt=mt+De,le=zn(t.groups.receive,m.to,Mt),ke=t.clips[le];let we=null,We=1/0,Xe=!1;for(let ye=b+1;ye<Tt.length;ye++){const Ht=Tt[ye];(Ht.type==="pass"?Ht.from:Ht.player)===m.to&&We===1/0&&(We=Ht.t);const Re=vt[ye];if(!(!Re||Re.actor!==m.to)){Re.t-Mt<=Ys&&(we=Re.target,Xe=(Ht.type==="pass"||Ht.type==="shoot")&&!!Ht.firstTime);break}}if(Xe&&we){const ye=ht(m.to,b,Mt),Ht=ni(ye.atArrival,Be(ye.atArrival,we));a.push({from:Xt,to:Ht,t0:mt,duration:De,style:m.flightStyle==="lofted"?"lofted":m.flightStyle==="clipped"?"clipped":"ground",...m.loft!==void 0?{loft:m.loft}:{},...Pt?{fromHeight:Pt}:{}}),k({player:m.to,at:[...r[S]],t0:m.t,lock:[Mt-wn,Mt+wn]}),At[m.to]={at:Mt,from:Ht},Qt(Mt,((ui=w(b))==null?void 0:ui.t)??i.duration,Ht)}else{const ye=yT(nt,Xt,we);let Ht=m.t;{const Ie=ht(m.to,b,Mt),Oe=Ie.expected,je=Math.max(m.t,Ie.busyUntil),oo=Math.max(Ie.afterT,m.t),yr=Ie.blocked;Ht=je;const tn=Math.hypot(ye.contact[0]-Oe[0],ye.contact[1]-Oe[1]);if(tn>r1)if(yr)console.warn(`[engine3d] receive for ${m.to}: the ball lands ${tn.toFixed(2)}m away at t=${Mt.toFixed(2)}s, but their authored ${yr} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Yn=nn([ye.contact[0]-Oe[0],ye.contact[1]-Oe[1]]),Si=[ye.contact[0]-Ge*Yn[0],ye.contact[1]-Ge*Yn[1]],On=t.groups.walk,Rs=On!=null&&On.length?t.clips[On[0]].speed??Fn:Fn,hi={from:Oe,to:Si,t0:0,cruise:Rs,accel:Dn},Vi=Mt-Qd-ue(hi);Vi<je-1e-9?console.warn(`[engine3d] receive adjustment for ${m.to}: the ${(tn-Ge).toFixed(2)}m walk to the contact point would need to start at t=${Vi.toFixed(2)}s but they're busy until t=${je.toFixed(2)}s — skipped (the standing stretch stays)`):(hi.t0=Vi,Ht=Mt-Qd,it.push({player:m.to,afterT:oo,move:hi,faceBall:[...Xt],faceSettle:[...ye.faceAt],arrival:Mt}))}}const Me=ke.ballContact??0,Re=Math.min(Me,Math.max(a1,Math.min(o1,c1*De,Mt-(Ht+Pa)))),rn=Mt-Re;rn<0&&console.warn(`[engine3d] receive cue for ${m.to} wants t0=${rn.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:m.to,clip:le,t0:rn,...Me>Re?{offset:Me-Re}:{}}),a.push({from:Xt,to:ye.contact,t0:mt,duration:De,style:Kt==="throw"||m.flightStyle==="lofted"?"lofted":Kt==="kick"||m.flightStyle==="clipped"?"clipped":"ground",...Kt==="throw"?{loft:Math.max(xt?qc:1.5,m.loft??0)}:Kt==="kick"?{loft:Math.max(3,m.loft??0)}:m.loft!==void 0?{loft:m.loft}:{},...Pt?{fromHeight:Pt}:{},...at(ye.contact)??{}}),a.push({from:ye.contact,to:ye.set,t0:Mt,duration:mi,style:"ground"}),k({player:m.to,at:[...r[S]],t0:m.t,lock:[Mt-wn,Mt+wn]}),kt({player:m.to,at:[...ye.faceAt],t0:Mt},We),_.push({t:Mt,player:m.to}),A[m.to]=Mt+mi,l.push({player:m.to,at:Mt+mi,carry:ye.set}),Qt(Mt+mi,(($n=w(b))==null?void 0:$n.t)??i.duration,ye.set)}}else if(m.flightStyle==="ground"){const Mt=Math.hypot(nt[0]-Xt[0],nt[1]-Xt[1]),le=m.flight??(m.touch?Math.sqrt(2*Mt/jr):Kt==="throw"?Math.max(.4,Mt/ge):Mt/fT);if(a.push({from:Xt,to:[...nt],t0:mt,duration:le,style:m.touch?"push":Kt==="throw"?"lofted":Kt==="kick"?"clipped":"ground",...m.touch?{endFrac:0}:{},...Kt==="throw"?{loft:xt?qc:1.5}:Kt==="kick"?{loft:3}:{},...Pt?{fromHeight:Pt}:{},...at(nt)??{}}),m.deflect){const ke=Math.hypot(m.deflect.to[0]-nt[0],m.deflect.to[1]-nt[1]);a.push({from:[...nt],to:[...m.deflect.to],t0:mt+le,style:"ground",duration:N1(Mt,le,ke)})}}else{const Mt=Math.hypot(nt[0]-Xt[0],nt[1]-Xt[1]),le=m.flight??Mt/dT,ke=nn([nt[0]-Xt[0],nt[1]-Xt[1]]),we=[nt[0]+bf*ke[0],nt[1]+bf*ke[1]],We=mt+le,Xe=a.length;a.push({from:Xt,to:we,t0:mt,duration:le,style:"shot",...Pt?{fromHeight:Pt}:{}}),a.push({from:we,to:we,t0:We,duration:hT,style:"drop"}),Qt(((ot=T(b))==null?void 0:ot.t)??0,J,Xt);let ye=!1;for(const Ht of q){const Me=Ai=>{const Wi=ht(Ht.id,b,Ai);if(Wi.afterT>-1/0)return Wi.atArrival;const Zn=v[Ht.id];return Zn&&Ai<Zn.t0+ue(Zn)?oi(Zn,Ai).pos:[...r[Ht.id]]},Re=mt+tf(Math.max(le,rf)),rn=ef(mt,le,Mn.dive.left.contact).t0,Ie=m.type==="shoot"?m.deflect:void 0,Oe=et||!!Ie,je=Me(Oe?Re:rn),oo=[nt[0]-je[0],nt[1]-je[1]],yr=Be(je,Xt),tn=Oe?tT(je,yr,Xt,we,$):null;if(Ie&&!tn&&console.warn(`[engine3d] deflect on the shot at t=${m.t} is dropped: ${Ht.id} is ${yg(je,Xt,we).reach.toFixed(2)} m off the ball line at body scale ${$} (his reach is ${(vg*$).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!tn){if(Math.hypot(oo[0],oo[1])>bg*$)continue;const Ai=wg(je,yr,we),Wi=d1[Ai],Zn=t.clips[Wi],{t0:Ei,timeScale:Cs}=ef(mt,le,Mn.dive[Ai].contact);if(k({player:Ht.id,at:[...Xt],t0:Math.max(J-Or,0,P[Ht.id]??0),...Zn?{lock:[J,Ei+Zn.duration/Cs]}:{}}),Zn){c.push({player:Ht.id,clip:Wi,t0:Ei,...Cs>1?{timeScale:Cs}:{}});const di=Me(Ei),Mr=eT(di,Xt,we,$),ao=[Mr[0]-di[0],Mr[1]-di[1]],co=Math.hypot(ao[0],ao[1]),ku=Math.min(co,b1*$),Ou=co>1e-9?[di[0]+ao[0]/co*ku,di[1]+ao[1]/co*ku]:[...di],g0=Math.min(x1,Math.max(v1,We-Ei));d.push({player:Ht.id,from:di,to:Ou,t0:Ei,duration:g0}),E[Ht.id]={t0:Ei,at:[...r[Ht.id]]},r[Ht.id]=[...Ou]}continue}if(ye)continue;ye=!0;const Yn=a[Xe];a.splice(Xe+1,1);let Si,On=tn.contact,Rs=ei*$;if(tn.kind==="dive"){Yn.duration=Math.max(Yn.duration,rf),Si=mt+tf(Yn.duration);const Ai=mt+Yn.duration,Wi={player:Ht.id,from:[...je],to:tn.travelTo,t0:Si,duration:tn.contactOffset};d.push(Wi);const Zn=Mg(Wi,Ai),Ei=Math.min(1,(Ai-Si)/tn.contactOffset),Cs=Mn.dive[tn.side],di=Ei*Cs.reach*$,Mr=nn([tn.contact[0]-je[0],tn.contact[1]-je[1]]);On=[Zn[0]+di*Mr[0],Zn[1]+di*Mr[1]],Rs=(ei+(Cs.hand-ei)*Ei)*$,E[Ht.id]={t0:Si,at:[...r[Ht.id]]},r[Ht.id]=[...tn.travelTo]}else Si=Math.max(J,mt+Yn.duration-tn.contactOffset);const hi=mt+Yn.duration;Yn.to=On,Yn.toHeight=Rs,c.push({player:Ht.id,clip:tn.clip,t0:Si,contact:tn.contactOffset});const Vi=Si+tn.clipDuration;if(k({player:Ht.id,at:[...Xt],t0:Math.max(J-Or,0,P[Ht.id]??0),lock:[J,Vi]}),Ie){a.push(af(On,Rs,Ie,hi,$)),A[Ht.id]=hi,Lt[Ht.id]=Vi+Zs;continue}_.push({t:hi,player:Ht.id});const Qa=Qc(r[Ht.id],Xt,On);tn.kind==="catch"?l.push({player:Ht.id,at:hi,carry:On,hand:{height:ei*$,follow:!0,bone:Qa}}):(l.push({player:Ht.id,at:hi,carry:On,hand:{height:Xo*$,from:Rs,rise:w1,follow:!0,bone:Qa}}),l.push({player:Ht.id,at:Vi,carry:On,hand:{height:ei*$,from:Xo*$,rise:Xc,follow:!0,bone:Qa}})),A[Ht.id]=hi,Lt[Ht.id]=Vi+Zs}}if(m.type==="pass"&&!Kt&&Te){const Mt=t.groups.walk,le=Mt!=null&&Mt.length?t.clips[Mt[0]].speed??Fn:Fn,ke=[r[S][0]+eo*Math.sin(de),r[S][1]+eo*Math.cos(de)],we=v[S],We=we?we.t0+ue(we):-1/0;let Xe=1/0;for(let Ie=b+1;Ie<Tt.length;Ie++){const Oe=Tt[Ie];if((Oe.type==="pass"?Oe.from:Oe.player)===S){Xe=Oe.t;break}}const ye={from:[...r[S]],to:ke,t0:ir(t,Te),cruise:le,accel:Dn},Ht=ye.t0+ue(ye)+Di<=Xe;let Me=null,Re=null;if(we&&R.has(we)&&mt>=We&&mt-We<=Cw&&Pu(o[S],mt)<Gg){const Ie=Lw(),Oe={...we,to:[...we.to],cruise:Math.max(we.cruise,Ie),endSpeed:Ie};Oe.t0=mt-ue(Oe),Oe.t0>=we.t0-1e-9&&vi(Oe).peak>=Ie-1e-9&&(Me=Oe,Re=Ht?{from:[...r[S]],to:ke,t0:mt,cruise:Ie,accel:Da,startSpeed:Ie}:Uw(r[S],de,Ie,Xe-mt,mt,je=>jt(je)&&pe(je)))}if(Me&&we){for(const Ie of g[S]??[]){const Oe=c.indexOf(Ie);Oe>=0&&c.splice(Oe,1)}Object.assign(we,Me),g[S]=_t(we,S)}const rn=Re??(Ht?ye:null);rn&&((o[S]??(o[S]=[])).push(rn),v[S]=rn,g[S]=_t(rn,S),r[S]=[...rn.to])}_.push({t:mt,player:null})}const I=Ot.get(D);I!==void 0&&I<m.t&&Ot.delete(D)}bt(1/0);const K=b=>Math.hypot(b.to[0]-b.from[0],b.to[1]-b.from[1]);function Ut(b,m,D,I,S=I){const V=(X,Q=I)=>X>D-1e-9&&X<Q-1e-9;return(o[b]??[]).some(X=>!m.has(X)&&V(X.t0))||c.some(X=>X.player===b&&!m.has(X)&&V(X.t0))||p.some(X=>X.player===b&&!m.has(X)&&V(X.t0))||u.some(X=>X.player===b&&!m.has(X)&&(V(X.t0,S)||!!X.lock&&X.lock[1]>D&&X.lock[0]<I))||_.some(X=>X.player===b&&V(X.t))||l.some(X=>X.player===b&&V(X.at))||h.some(X=>X.player===b&&X.contact>D-1e-9&&X.windowStart<I-1e-9)}function dt(b){var I;let m=null;for(const S of a)b>=S.t0&&b<S.t0+S.duration&&(!m||S.t0>=m.t0)&&(m=S);if(m)return rs(m,b).pos;const D=Wt(b);return D?((I=es(o[D]??[],b))==null?void 0:I.pos)??[...i.players.find(S=>S.id===D).start]:Gr(a,n,b).at}const yt=new Map;for(const[b,m]of Object.entries(o))for(const D of m){if(K(D)<=1e-6||M.has(D))continue;const I=Math.round(D.t0*100),S=yt.get(I);S?S.push({player:b,m:D}):yt.set(I,[{player:b,m:D}])}for(const b of[...yt.keys()].sort((m,D)=>m-D)){const m=yt.get(b);if(new Set(m.map(S=>S.player)).size<kw)continue;const D=dt(b/100),I=m.filter(({player:S,m:V})=>x.has(V)&&!gt.has(S)&&!V.endSpeed&&!V.startSpeed&&Wt(V.t0)!==S).map(S=>({...S,d:Math.hypot(S.m.from[0]-D[0],S.m.from[1]-D[1])})).sort((S,V)=>S.d-V.d||(S.player<V.player?-1:S.player>V.player?1:0));I.forEach(({player:S,m:V},X)=>{var ut,ft;const Q=x.get(V),rt=new Set([V,...f.get(V)??[],Q.face,(ut=Q.start)==null?void 0:ut.span,(ft=Q.start)==null?void 0:ft.cue]),nt=V.t0+ue(V),tt=xt=>!Ut(S,rt,V.t0,nt+xt);let pt=ta+(I.length>1?(Wl-ta)*X/(I.length-1):0);if(!tt(pt)){if(!tt(ta))return;let xt=ta;for(let at=0;at<20;at++){const J=(xt+pt)/2;tt(J)?xt=J:pt=J}pt=xt}V.t0+=pt;for(const xt of f.get(V)??[])xt.t0+=pt,xt.loopUntil!==void 0&&(xt.loopUntil+=pt);Q.face&&(Q.face.t0+=pt,Q.face.until!==void 0&&(Q.face.until+=pt)),Q.start&&(Q.start.span.t0+=pt,Q.start.span.end+=pt,Q.start.end+=pt,Q.start.cue.t0+=pt,Q.start.cue.loopUntil!==void 0&&(Q.start.cue.loopUntil+=pt))})}const Ft=new Map,zt=b=>Ft.get(b)??b,se=[],ce=new Map;for(const[b,m]of Object.entries(o))if(!gt.has(b))for(let D=0;D+1<m.length;D++){const I=m[D],S=m[D+1],V=x.get(I),X=x.get(S);if(!V||!X||V.r11||X.r11)continue;const Q=zt(I),rt=zt(S);if((Q.endSpeed??0)>0||(S.startSpeed??0)>0)continue;const nt=K(I),tt=K(S);if(nt<Gf||tt<Gf||Math.hypot(S.from[0]-I.to[0],S.from[1]-I.to[1])>1e-6)continue;const pt=S.t0-(I.t0+ue(Q)),ut=Math.abs(gi(Be(I.from,I.to),Be(S.from,S.to)));if(pt<-1e-9||pt>Ow||ut>Bw)continue;const ft=I.startSpeed??0,xt=S.endSpeed??0,at=Math.min(Q.cruise,rt.cruise),J=Math.min(Math.max(zw(ut)*at,Of),at);if(J<Of-1e-9||2*I.accel*nt<J*J-ft*ft||2*S.accel*tt<J*J-xt*xt)continue;const st={...I,endSpeed:J},mt=S.t0-(I.t0+ue(st)),It=ft>0?0:I.t0-V.t0>1e-9?Bf-Wl:Bf,Pt=Math.max(0,Math.min(mt,It)),Kt=Hw(st,mt-Pt);if(Kt===null||vi(st).t3+Kt>Gw*ue(Q)+1e-9)continue;const ne={...st,t0:I.t0+Pt,...Kt>0?{hold:Kt}:{}};if(Math.abs(ne.t0+ue(ne)-S.t0)>1e-7)continue;const Te=Math.min(2*dg/Math.sin(Math.max(ut,1e-9)/2),Ra*nt,Ra*tt);if(J*Math.tan(ut/2)/Te>Ru(J*Math.cos(ut/2)))continue;const de=S.t0+Vc({...S,startSpeed:J},Te),Xt=new Set([I,S,...f.get(I)??[],...f.get(S)??[],V.face,X.face,(Ct=V.start)==null?void 0:Ct.span,(ct=V.start)==null?void 0:ct.cue,(Bt=X.start)==null?void 0:Bt.span,(Gt=X.start)==null?void 0:Gt.cue]);Wt(I.t0)===b||Ut(b,Xt,I.t0,S.t0+ue(rt),de)||(Ft.has(I)||Ft.set(I,{...I}),Ft.has(S)||Ft.set(S,{...S}),Pt>0&&(V.face&&(V.face.t0+=Pt,V.face.until!==void 0&&(V.face.until+=Pt)),V.start&&(V.start.span.t0+=Pt,V.start.span.end+=Pt,V.start.end+=Pt,V.start.cue.t0+=Pt,V.start.cue.loopUntil!==void 0&&(V.start.cue.loopUntil+=Pt))),Object.assign(I,ne),S.startSpeed=J,S.flow=!0,se.push({player:b,A:I,B:S}),ce.set(I,b),ce.set(S,b))}for(const[b,m]of Object.entries(o))for(let D=0;D<m.length;D++){if(!ce.has(m[D])||m[D].flow)continue;let I=D;for(;I+1<m.length&&m[I+1].flow&&wu(m[I],m[I+1]);)I++;const S=m.slice(D,I+1);for(const Q of S){for(const nt of f.get(Q)??[]){const tt=c.indexOf(nt);tt>=0&&c.splice(tt,1)}const rt=x.get(Q);if(rt.start&&Q.flow){const nt=p.indexOf(rt.start.span);nt>=0&&p.splice(nt,1);const tt=c.indexOf(rt.start.cue);tt>=0&&c.splice(tt,1),rt.start=null}}const V=x.get(S[0]);let X=W(S,b,V.t0);V.start&&p.includes(V.start.span)&&(X=wt(X,V.start.end)),c.push(...X);for(const Q of S)f.set(Q,X)}for(const{player:b,A:m,B:D}of se){const I=zl(m,D),S=x.get(D).face,V=S?u.indexOf(S):-1;if(!I||!S||V<0)continue;const X=K(m),Q=Be(m.from,m.to),rt=gi(Q,Be(D.from,D.to))<0?-1:1,nt=ut=>ut<=.5?m.t0+Vc(m,X-I.L+2*I.L*ut):D.t0+Vc(D,2*I.L*(ut-.5)),tt=Math.max(1,Math.ceil(I.turn/Vw-1e-9)),pt=[];for(let ut=0;ut<=tt;ut++){const ft=ut===0?0:UE(I.turn,(ut-.5)/tt*I.turn),xt=Q+rt*ut*I.turn/tt,at=fg(I,ft).pos;pt.push({player:b,at:[at[0]+zf*Math.sin(xt),at[1]+zf*Math.cos(xt)],t0:nt(ft)})}u.splice(V,0,...pt),S.t0=nt(1)}_.sort((b,m)=>b.t-m.t),c.sort((b,m)=>b.t0-m.t0),bw(c,o,t);const ze=Rw(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:p,bounces:ze,ballSwaps:Yt,attachTo(b){let m=null;for(const D of _)D.t<=b&&(m=D.player);return m}}}const nl=2*Math.LN2,il=1e-5,Hf=.5*Math.PI/180,sl=5;function Vf(i,t,e,n,s,r=0){n<0&&(i=-i,t=-t,e=-e,n=-n);const o=Math.sqrt(i*i+t*t+e*e),a=o<1e-8?2:2*Math.atan2(o,n)/o;s[r]=a*i,s[r+1]=a*t,s[r+2]=a*e}function rl(i,t,e,n){const s=.5*Math.sqrt(i*i+t*t+e*e);if(s<1e-8)return n.set(.5*i,.5*t,.5*e,1).normalize();const r=Math.sin(s)/(2*s);return n.set(r*i,r*t,r*e,Math.cos(s))}const Wf=new WeakMap;function jf(i){let t=Wf.get(i);if(!t){t={q:new Map};for(const e of i.tracks){const n=Ue.parseTrackName(e.name);n.propertyName==="quaternion"&&t.q.set(n.nodeName??"",e.createInterpolant())}Wf.set(i,t)}return t}function ea(i,t,e){return e?t>0?(i%t+t)%t:0:Math.max(0,Math.min(t,i))}const Xf=new WeakMap;function jw(i){let t=Xf.get(i);return t||(t=new Map,i.traverse(e=>{e.name&&!t.has(e.name)&&t.set(e.name,e)}),Xf.set(i,t)),t}const Je=new sn,Js=new sn,qf=new sn,Qs=new Float64Array(3);function Xw(i){const t=new Map;function e(v,g,f,x,M){const y=v.q.get(g);if(!y)return!1;const w=y.evaluate(f);return x[M]=w[0],x[M+1]=w[1],x[M+2]=w[2],x[M+3]=w[3],!0}function n(v,g,f,x){const M=nl/(v.hl+il),y=Math.exp(-M*f);for(let w=0;w<3;w++){const T=v.rx[g*3+w],R=v.rv[g*3+w];x[w]=y*(T+(R+T*M)*f)}}const s=new Float64Array(4),r=new Float64Array(4),o=new Float64Array(4),a=new Float64Array(4),c=new Float64Array(3),u=new Float64Array(3),h=new Float64Array(3),l=new Float64Array(3);function d(v,g,f,x,M,y,w){const T=i??w;if(!(T>0)){t.delete(v);return}const R=jf(f.clip),P=jf(x.clip),A=t.get(v),E=A?M-A.t0:0,L=jw(g),k=ea(f.time,f.clip.duration,f.loop),N=ea(f.time-y*f.rate,f.clip.duration,f.loop),B=ea(x.time,x.clip.duration,x.loop),G=ea(x.time-y*x.rate,x.clip.duration,x.loop),U=[],z=[],O=[];for(const Z of R.q.keys()){if(!P.q.has(Z))continue;e(R,Z,k,s,0),e(R,Z,N,r,0),e(P,Z,B,o,0),e(P,Z,G,a,0);const Y=A?A.names.indexOf(Z):-1;Y>=0&&(n(A,Y,E,c),n(A,Y,Math.max(0,E-y),u),Je.set(s[0],s[1],s[2],s[3]),Je.premultiply(rl(c[0],c[1],c[2],Js)),s[0]=Je.x,s[1]=Je.y,s[2]=Je.z,s[3]=Je.w,Je.set(r[0],r[1],r[2],r[3]),Je.premultiply(rl(u[0],u[1],u[2],Js)),r[0]=Je.x,r[1]=Je.y,r[2]=Je.z,r[3]=Je.w),Je.set(s[0],s[1],s[2],s[3]).multiply(Js.set(-o[0],-o[1],-o[2],o[3])),Vf(Je.x,Je.y,Je.z,Je.w,h,0),qf.set(r[0],r[1],r[2],r[3]).multiply(Js.set(-a[0],-a[1],-a[2],a[3])),Je.multiply(Js.copy(qf).invert()),Vf(Je.x,Je.y,Je.z,Je.w,l,0);const lt=Math.hypot(h[0],h[1],h[2]),Et=Math.hypot(l[0],l[1],l[2])/y;lt<Hf&&Et<Hf/y||(U.push(Z),z.push(h[0],h[1],h[2]),O.push(l[0]/y,l[1]/y,l[2]/y))}if(!U.length){t.delete(v);return}t.set(v,{t0:M,hl:T,n:U.length,names:U,nodes:U.map(Z=>L.get(Z)),rx:Float64Array.from(z),rv:Float64Array.from(O),ql:new Float64Array(U.length*4),written:!1})}function p(v,g,f){var R;const x=t.get(v);if(!x)return;const M=x.ql;if(f===0&&x.written){for(let P=0;P<x.n;P++){const A=P*4;(R=x.nodes[P])==null||R.quaternion.set(M[A],M[A+1],M[A+2],M[A+3])}return}const y=g-x.t0;if(y<0||y>sl*x.hl){t.delete(v);return}const w=nl/(x.hl+il),T=Math.exp(-w*y);for(let P=0;P<x.n;P++){const A=x.nodes[P];if(!A)continue;const E=P*3,L=P*4,k=x.rx,N=x.rv;Qs[0]=T*(k[E]+(N[E]+k[E]*w)*y),Qs[1]=T*(k[E+1]+(N[E+1]+k[E+1]*w)*y),Qs[2]=T*(k[E+2]+(N[E+2]+k[E+2]*w)*y);const B=A.quaternion.premultiply(rl(Qs[0],Qs[1],Qs[2],Js));M[L]=B.x,M[L+1]=B.y,M[L+2]=B.z,M[L+3]=B.w}x.written=!0}function _(v,g){const f=t.get(v);if(!f)return 0;const x=g-f.t0;if(x<0||x>sl*f.hl)return 0;const M=nl/(f.hl+il),y=Math.exp(-M*x);let w=0;for(let T=0;T<f.n;T++){const R=T*3;let P=0;for(let A=0;A<3;A++){const E=f.rx[R+A],L=f.rv[R+A],k=y*(E+(L+E*M)*x);P+=k*k}w=Math.max(w,Math.sqrt(P))}return w}return{transition:d,apply:p,peak:_,alive:(v,g)=>{const f=t.get(v);return!!f&&g-f.t0>=0&&g-f.t0<=sl*f.hl},reset:()=>t.clear()}}const ol="idle_b",Kf=.5,qw=.3,Kw=15,$w=6,Yw=1.5,Zw=2,Jw=2,al=.5,Lu=Math.PI/180,$f=2.5,Yf=5,cl=.4,Zf=.08,Jf=60*Lu,Qw=90*Lu,tR=1.5,eR=85*Lu;function na(i,t,e){let n=(bi(i)^Math.imul(t+1,2654435761)^e)>>>0;return n=Math.imul(n^n>>>16,73244475)>>>0,n=Math.imul(n^n>>>16,73244475)>>>0,((n^n>>>16)>>>0)/4294967296}function Qf(i,t,e){var n;return((n=es(t??[],e))==null?void 0:n.pos)??i}function nR(i,t,e,n){var p,_,v;const s=new Map(i.map(g=>[g.id,g.start])),r=[...t.flights].sort((g,f)=>g.t0-f.t0);function o(g){let f=n;for(const M of r){if(g>=M.t0&&g<=M.t0+M.duration){const y=(g-M.t0)/M.duration;return[M.from[0]+(M.to[0]-M.from[0])*y,M.from[1]+(M.to[1]-M.from[1])*y]}M.t0+M.duration<g&&(f=M.to)}const x=t.attachTo(g);return x&&s.has(x)?Qf(s.get(x),t.moves[x],g):f}const a=new Map(i.map(g=>[g.id,[]]));for(const g of t.anims)(p=a.get(g.player))==null||p.push(g.t0);for(const[g,f]of Object.entries(t.moves))for(const x of f)(_=a.get(g))==null||_.push(x.t0);for(const g of t.arrivals)(v=a.get(g.player))==null||v.push(g.at);for(const g of a.values())g.sort((f,x)=>f-x);const c=(g,f)=>{for(const x of a.get(g)??[])if(x>=f)return x;return 1/0},u=Math.ceil(e/al)+2,h=new Map(i.map(g=>[g.id,new Uint8Array(u)]));for(let g=0;g<u;g++){const f=g*al,x=o(f),M=i.map(y=>Qf(y.start,t.moves[y.id],f));i.forEach((y,w)=>{const T=c(y.id,f)-f,R=Math.hypot(M[w][0]-x[0],M[w][1]-x[1])<=Kw;let P=0;for(let E=0;E<M.length;E++)E!==w&&Math.hypot(M[w][0]-M[E][0],M[w][1]-M[E][1])<=Yw&&P++;const A=P>=Zw&&T>Jw;h.get(y.id)[g]=!A&&(R||T<=$w)?1:0})}const l=new Map;for(const g of i){const f=[];let x=na(g.id,0,23721)*Yf;for(let M=1;x<e&&M<512;M++)f.push(x),x+=$f+na(g.id,M,27313)*(Yf-$f);l.set(g.id,f)}const d=new Map;for(const g of t.arrivals)(d.get(g.player)??d.set(g.player,[]).get(g.player)).push(g.at);return{ready(g,f){const x=h.get(g);if(!x)return!1;const M=Math.max(0,Math.min(u-1,Math.floor(f/al)));return x[M]===1||M+1<u&&x[M+1]===1},scan(g,f,x){if(!x)return{yaw:0,env:0};for(const y of d.get(g)??[])if(y>=f&&y-f<=tR+cl)return{yaw:0,env:0};const M=l.get(g)??[];for(let y=0;y<M.length;y++){const w=f-M[y];if(w<0)break;if(w>cl)continue;const T=Math.max(0,Math.min(1,w/Zf,(cl-w)/Zf)),R=Jf+na(g,y,15383)*(Qw-Jf);return{yaw:(na(g,y,4563)<.5?1:-1)*R*T,env:T}}return{yaw:0,env:0}}}}const iR=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,tp=new Map,ep=30;function sR(i,t=0){const e=`${i.uuid}@${t}`;let n=tp.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>iR.test(Ue.parseTrackName(s.name).nodeName??"")),T_.makeClipAdditive(n,t*ep,n,ep),tp.set(e,n)),n}function rR(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/Lg),n=Math.min(1,(t-i)/Dg);return _w*Math.max(0,Math.min(e,n))}const np=.1,oR=1;function aR(i,t,e,n=[],s,r){const o=G=>ir(i,G),a=(G,U)=>Og(t,i,G,U);function c(G,U){let z=0;for(const O of t){if(O.player!==G)continue;const Z=o(O);Z<=U&&Z>z&&(z=Z)}return z}function u(G,U){const z=e.get(G);return z!=="keeper"&&i.clips[ol]&&(r!=null&&r(G,U))?ol:Ff(xf(i,z),G,pw(G,U-c(G,U)))}const h=new Map,l=new Map,d=new Map,p=new Map,_=new Map,v=new Map,g=Cg(i),f=new Map;for(const G of g)for(const U of i.groups[G.gait]??[va(i,G.gait,"",0)])f.set(U,G.gait);const x=s!=null&&s.off?null:Xw(s==null?void 0:s.halflife),M=!!(s!=null&&s.all),y=(G,U)=>!!x&&(M||WT(i,G,U));let w=0;const T=new Map;function R(G,U){const z=a(G,U);if(z!=null&&z.additive)return null;if(z){const lt=i.clips[z.clip];if(lt.category==="locomotion")return null;const Et=z.timeScale??1;return{id:z.clip,loop:lt.loop,rate:Et,time:(z.offset??0)+(U-Math.max(z.t0,0))*Et}}const O=u(G,U),Z=Qo(G),Y=i.clips[O].duration;return{id:O,loop:!0,rate:Z,time:((Jo(G,Y)+U*Z)%Y+Y)%Y}}function P(G,U,z){const O=[];for(const Y of t)if(Y.player===G)for(const lt of[Math.max(Y.t0,0),o(Y)])lt>U&&lt<=z&&O.push(lt);let Z=c(G,z);for(let Y=0;Y<64&&Z<=z;Y++)Z+=Bg(G,Y),Z>U&&Z<=z&&O.push(Z);return O.sort((Y,lt)=>lt-Y)}const A=1/60,E=1e-4;function L(G,U){return[R(G,U-E),R(G,U+E)]}function k(G,U,z,O){const[Z,Y]=L(G,z);if(!Z||!Y||Z.id===Y.id||Y.id!==O||!y(Z.id,Y.id))return!1;const lt=U.clips.get(Z.id),Et=U.clips.get(Y.id);return!lt||!Et?!1:(x.transition(G,U.mixer.getRoot(),{clip:lt,time:Z.time,rate:Z.rate,loop:Z.loop},{clip:Et,time:Y.time,rate:Y.rate,loop:Y.loop},z,A,np),!0)}function N(G,U,z,O,Z){for(const Y of P(G,z,O)){const[lt,Et]=L(G,Y);if(!(lt&&Et&&lt.id===Et.id))return k(G,U,Y,Z)}return!1}function B(G,U,z,O,Z){var C;const Y=x?T.get(G)!==w:!1;x&&T.set(G,w);let lt=null;const Et=a(G,z),kt=Et!=null&&Et.additive?Et:null,it=kt?Ka(g,Z):null,bt=it?va(i,it.gait,G,kt.t0):null,ht=kt?null:Et,W=ht??(bt?kt:null),_t=bt??(ht==null?void 0:ht.clip)??u(G,z),wt=h.get(G);if(cw(wt,_t,ht)){const q=i.clips[_t],$=U.mixer.clipAction(U.clips.get(_t)),gt=!!wt&&f.has(wt.clip)&&f.has(_t)&&!(ht!=null&&ht.offset),et=gt&&((C=l.get(G))==null?void 0:C.action)===$;if(et||$.reset(),gt&&!et){const Lt=i.clips[wt.clip].duration;Lt>0&&($.time=wt.action.time/Lt%1*q.duration)}$.loop=q.loop?2201:2200,$.clampWhenFinished=!0,ht!=null&&ht.offset&&($.time=ht.offset),wt&&wt.action!==$&&(y(wt.clip,_t)?(Y||(lt={src:{clip:wt.action.getClip(),loop:i.clips[wt.clip].loop,rate:wt.action.timeScale,time:wt.action.time+O*wt.action.timeScale},hl:np}),wt.action.weight=0,wt.action.stop(),wt.action.enabled=!1):(wt.action.fadeOut(VT(i,wt.clip,_t)),gt||$.fadeIn(Fg(i,_t,wt.clip)))),$.play(),h.set(G,{clip:_t,offset:ht==null?void 0:ht.offset,action:$})}const Rt=h.get(G).action,Wt=!!W&&W.timeScale===void 0&&i.clips[_t].category==="locomotion",Yt=Wt?f.get(_t):void 0,re=Wt?Yt?kT(g,Z,Yt):{timeScale:NT(Z,i.clips[_t].speed??Fn),partner:null,weight:0}:null,j=re!=null&&re.partner&&W?va(i,re.partner,G,W.t0):null,xe=l.get(G);if(xe&&xe.clip!==j&&(xe.clip!==_t&&(xe.action.weight=0,xe.action.stop()),l.delete(G)),W)if((ht==null?void 0:ht.timeScale)!==void 0)Rt.timeScale=ht.timeScale,Rt.weight=1;else if(re){if(Rt.timeScale=re.timeScale,Rt.weight=1-re.weight,j){let q=l.get(G);if(!q){const et=U.mixer.clipAction(U.clips.get(j));et.isRunning()&&et.getEffectiveWeight()>0?et.stopFading():(et.reset(),et.play()),et.loop=2201,q={clip:j,action:et},l.set(G,q)}q.action.weight=re.weight,q.action.timeScale=re.timeScale;const $=i.clips[_t].duration,gt=i.clips[j].duration;$>0&&(q.action.time=Rt.time/$%1*gt)}}else Rt.timeScale=1,Rt.weight=1;else{Rt.weight=1,Rt.timeScale=Qo(G);const q=i.clips[_t].duration;Rt.time=((Jo(G,q)+z*Rt.timeScale)%q+q)%q}const te=_t===kf?0:ww(n,G,z),Qt=p.get(G),qt=te>0?U.clips.get(kf):void 0;if(qt){let q=Qt;q||(q=U.mixer.clipAction(qt),q.reset(),q.loop=2201,q.timeScale=0,q.play(),p.set(G,q));const $=qt.duration;q.time=((Jo(G,$)+z*Qo(G))%$+$)%$,q.weight=te,Rt.weight*=1-te}else Qt&&(Qt.weight=0,Qt.stop(),Qt.enabled=!1,p.delete(G));const he=_.get(G),Nt=!W&&_t===ol?1-Kf:0;if(Nt>0||he){const q=(he==null?void 0:he.clip)??Ff(xf(i,void 0),G,0);let $=he;if(!$){let et=v.get(q);et||v.set(q,et=U.clips.get(q).clone());const Lt=U.mixer.clipAction(et);Lt.reset(),Lt.loop=2201,Lt.timeScale=0,Lt.play(),$={clip:q,action:Lt,w:Y?Nt:0},_.set(G,$)}const gt=(O>0?O:0)*(1-Kf)/qw;if($.w=Y?Nt:$.w+Math.max(-gt,Math.min(gt,Nt-$.w)),$.w<=0&&Nt===0)$.action.weight=0,$.action.stop(),$.action.enabled=!1,_.delete(G);else{const et=i.clips[q].duration;$.action.time=((Jo(G,et)+z*Qo(G))%et+et)%et,$.action.weight=$.w,Rt.weight*=1-$.w}}const F=d.get(G);if(kt){const q=kt.offset??0,$=Math.max(0,i.clips[kt.clip].duration-q),gt=rR(z-kt.t0,$);let et=F;if(!et||et.clip!==kt.clip||et.offset!==q){et&&(et.action.weight=0,et.action.stop(),et.action.enabled=!1);const Lt=U.mixer.clipAction(sR(U.clips.get(kt.clip),q));Lt.reset(),Lt.loop=2200,Lt.clampWhenFinished=!0,Lt.timeScale=0,Lt.play(),d.set(G,et={clip:kt.clip,offset:q,action:Lt})}et.action.time=Math.min(i.clips[kt.clip].duration,q+Math.max(0,z-kt.t0)),et.action.weight=gt}else F&&(F.action.weight=0,F.action.stop(),F.action.enabled=!1,d.delete(G));if(U.mixer.update(O),x){const q=h.get(G);lt?N(G,U,z-O,z,q.clip)||x.transition(G,U.mixer.getRoot(),lt.src,{clip:q.action.getClip(),time:q.action.time,rate:q.action.timeScale,loop:i.clips[q.clip].loop},z,Math.max(O,1/240),lt.hl):Y&&N(G,U,z-oR,z,q.clip),x.apply(G,z,O)}}return{applyAnim:B,cueAt:a,inert:x,reset:()=>{x&&(x.reset(),w++)}}}class cR{constructor(t,e){Pe(this,"_t",0);Pe(this,"_playing",!1);Pe(this,"speed",1);Pe(this,"loopCbs",[]);Pe(this,"endCbs",[]);Pe(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function lR(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,d){const p=e.get(o)??0,_=Ug(i,o,a);let v;if(_){const M=s.get(o);M&&M.span===_?v=M.from:(v=p,s.set(o,{span:_,from:v}))}else s.delete(o);const g=_?jT(i,o,a,v):null,f=g?XT(Ui[_.clip],u):d?KE:Ru(u),x=g?qd(p,g.heading,c,f):l?p:qd(p,h,c,f);return n.set(o,c>0?(x-p)/c:0),e.set(o,x),{h:x,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const uR=.2,hR=.5,dR=.06,fR=.25,ip=.15,pR=.25,mR=.2;function gR(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=uR*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function _R(i,t,e=1){return i.speed>hR*e||i.y>t+dR*e}function bR(i,t,e=1){const n=Math.hypot(i,t),s=fR*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function vR(i,t){const e=i??[];for(let n=0;n<e.length;n++){const s=e[n];if(n+1<e.length&&wu(s,e[n+1]))continue;const r=s.t0+ue(s);if(t>r-pR&&t<=r)return!0}return!1}const xR=new Set(["turn","transition","receive","pass","idle"]);function yR(i,t,e){return e||i===null?!0:xR.has(t??"")}function MR(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/ip;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[y,w]=e(l,a);return[l.corrX+y,l.corrZ+w]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],[0,0];const d=o[0]-l.prevRoot[0],p=o[1]-l.prevRoot[1],_=l.rootV=Math.hypot(d,p)/c,v=r.map((y,w)=>{const T=l.prev[w],R=T?Math.hypot(y[0]-T[0]-d,y[2]-T[2]-p)/c:1/0;return{x:y[0],y:y[1],z:y[2],speed:R}}),g=y=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||_>=mR)g();else if(l.foot>=0&&_R(v[l.foot],l.plantY,h)&&g(),l.foot<0){const y=gR(v,h);y>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=y,l.plantY=v[y].y,l.anchorX=r[y][0],l.anchorZ=r[y][2])}else{const[y,w]=bR(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=y,l.corrZ=w}const[f,x]=e(l,a);(a-l.outAt)/ip>=1&&(l.outX=0,l.outZ=0);const M=[l.corrX+f,l.corrZ+x];return l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],l.prevT=a,M}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const Du=Math.PI/180,Wg=2*Du,jg=4*Du,SR=8*Du,AR=jg/Wg,sp=.12,ER=.6,TR=.08,rp=.4;function wR(i){return i<AR?0:Math.min(SR,Math.max(jg,Wg*i))}function RR(i,t){const e=Math.hypot(i[0],i[1]),n=wR(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function ll(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function CR(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=RR(s,r),u=ll(i.get(n)??0,c.pitch*o,a,sp),h=ll(t.get(n)??0,c.roll*o,a,sp);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=Xa(s)*ER,a=ll(e.get(n)??0,o,r,TR);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const ul=new sn,op=new sn,ap=new sn,Fa=new sn,IR=new Xn;function PR(i,t){ul.identity();for(let e=i.parent;e&&e!==t;e=e.parent)ul.premultiply(e.quaternion);return ul}const no=new WeakMap;function Xg(i){const t=no.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function qg(i,t){const e=no.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):no.set(i,{base:t.clone(),left:i.quaternion.clone()})}function cp(i,t,e,n,s){if(Xg(t),!e&&!n&&!s){no.delete(t);return}Fa.copy(t.quaternion);const r=PR(t,i);op.setFromEuler(IR.set(e,n,s,"YXZ")),ap.copy(r).invert().multiply(op).multiply(r),t.quaternion.premultiply(ap),qg(t,Fa)}function LR(i,t){if(Xg(i),!t){no.delete(i);return}Fa.copy(i.quaternion),i.rotation.y+=t,qg(i,Fa)}const DR=.58,FR=.15,NR=.5,hl=6,UR=.3,sr=.5,kR=.7;function OR(i,t,e,n,s=new Map,r=!1){const o=new Map(i.map(a=>[a,[0,0]]));for(let a=0;a<i.length;a++)for(let c=a+1;c<i.length;c++){const u=e.has(i[a]),h=e.has(i[c]);if(u&&h)continue;let l=1/0,d=1,p=0;const _=T=>{const R=T.get(i[a]),P=T.get(i[c]);return R&&P?[P[0]-R[0],P[1]-R[1]]:null};for(let T=0;T<t.length;T++){const R=_(t[T]);if(!R)continue;const P=T+1<t.length?_(t[T+1]):null,A=P?P[0]-R[0]:0,E=P?P[1]-R[1]:0,L=A*A+E*E,k=L>1e-12?Math.min(1,Math.max(0,-(R[0]*A+R[1]*E)/L)):0;let N=R[0]+k*A,B=R[1]+k*E;const G=Math.hypot(N,B);if(G>=l)continue;if(l=G,G<1e-6)if(L>1e-12){const z=Math.sqrt(L);N=-E/z,B=A/z}else N=1,B=0;const U=Math.hypot(N,B);d=N/U,p=B/U}if(l>=n)continue;const v=n-l,g=u?0:r?Math.max(s.get(i[a])??0,sr):(s.get(i[a])??0)<sr?0:s.get(i[a]),f=h?0:r?Math.max(s.get(i[c])??0,sr):(s.get(i[c])??0)<sr?0:s.get(i[c]);if(g+f<=0)continue;const x=g/(g+f),M=f/(g+f),y=o.get(i[a]),w=o.get(i[c]);y[0]-=d*v*x,y[1]-=p*v*x,w[0]+=d*v*M,w[1]+=p*v*M}return o}function BR(){const i=new Map;let t=-1/0;return{step(e,n,s,r,o,a,c){const u=Math.abs(o-t)>.25,h=OR(e,n,s,r,c,u);t=o;const l=u?1:a>0?1-Math.exp(-a/FR):0;for(const d of e){const p=(c==null?void 0:c.get(d))??0;if(!u&&p<sr&&!s.has(d))continue;const _=h.get(d),v=i.get(d)??[0,0];let g=(_[0]-v[0])*l,f=(_[1]-v[1])*l;const x=Math.hypot(g,f),M=kR*Math.max(p,sr)*a;!u&&x>M&&(g*=M/x,f*=M/x),i.set(d,[v[0]+g,v[1]+f])}return i}}}function Yr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function GR(i){var r;const t=[i.root[0]+Ge*Math.sin(i.heading),i.root[1]+Ge*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?Yr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Ge*Math.sin(s.heading),i.root[1]+Ge*Math.cos(s.heading)],a=Yr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function zR(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*Yr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?Yr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=Yr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function xa(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=rs(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:i1(e),speed:pg(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:GR(n),height:zR(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const HR=1.2,VR=40;function Kg(i,t,e){var s;const n=((s=es(i.moves[t]??[],e))==null?void 0:s.pos)??i.starts[t]??[0,0];return Sg(i.dives,i.moves[t],t,e)??n}function lp(i,t){const e=i.attachTo(t),n=xa({t,holderId:e,holderRoot:e?Kg(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const $g=.55,WR=.3,up=.6,jR=.6,XR=.4,Ya=i=>Math.min(Math.max(i,0),1);function qR(i,t){if(t<=i.t0)return 0;if(t>=i.t0+ue(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=oi(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function KR(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,d=a-s-.1,p=v=>{const g=e?e*Math.sin(2*Math.PI*v/n):0;return[i[0]+c*v+h*g,i[1]+u*v+l*g]},_=[];for(let v=.15;v+r*.5<=d;v+=r+o){const g=Math.min(v+r,d),[f,x]=p(v),[M,y]=p(g);_.push({ax:f,ay:x,bx:M,by:y,k:(v+g)/2/a})}return _}function hp(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=$g*e,a=WR*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const dp=1.6,ia=2.2,$R=5,YR=5,ZR=6,fp=14,JR=4,QR=20,tC="#E8ECEF",eC="#8D949B",nC=1.2,iC=3,sC=.4;function pp(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(ZR*n,s*.5),o=i==="dribble",a=i==="pass"?QR*n:o?fp*n/8:$R*n;return{dashes:KR(t,e,o?JR*n:0,fp*n,r,a,i==="move"?YR*n:0),headScale:r/$g}}function rC(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function oC(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function Za(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=nC}function aC(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const mp=.012,cC=.14,lC=.38,gp=.15,Yg=.3,uC="#bfe333";function hC(i){const t=1-2*Yg,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const sa=1.5,dC=.3,fC=24;function _p(i){return gp+(lC-gp)*Ya(i)}function jl(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=sa?0:1-s/sa;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,sa)/sa;return Math.min(r,a*Math.max(1-(i-o)/dC,0))}function Xl(i,t){for(let e=t+1;e<i.length;e++)if(Za(i[e]))return i[e].t0}function pC(i,t){const e=[];for(let n=0;n<i.length;n++)Za(i[n])&&jl(t,i[n],Xl(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function mC(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=rs(i,t).pos;return Ya(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function gC(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=rs(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||Za(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=rs(r,e).pos;return[o[0],o[1]]}function bp(i,t){const e=Ya((i-t)/.06);return up+(1-up)*e}function _C(i,t){return Ya((i-(t-jR))/XR)}const bC=.35;function vC(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+bC}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+mi})}return n.sort((s,r)=>s.t0-r.t0)}function xC(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const vp=1e-6;function ql(i,t,e){return xg(i,t,e)>0}function yC(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-vp);if(r&&ql(i.arrivals,r,s.t0-vp))return{kind:"halo"}}const n=xC(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&ql(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function MC(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const SC=.85;function AC(i,t){return i>0?{draw:t>=i*SC,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const EC=.15,TC=1e-6;function xp(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function wC(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function Zg(i,t,e,n){var o;const s=Ms(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=xp((n-wC(i,e,s))/EC);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-xp((n-a.windowStart)/Math.max(a.contact-a.windowStart,TC)));return r}function RC(i,t,e){var s,r;const n=(r=(s=Ms(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function CC(i,t,e,n){return ql(i,e,n)||Zg(i,t,e,n)>0}const IC=25;function PC(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function LC(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(PC(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=pg(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/IC),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const DC=.02;function FC(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=DC,o)}function NC(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{FC(e,n,s,r,o,a,c,t),t=!1}}const yp=new gn,ra=new H;class Jg extends V_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ye(t,3)),this.setAttribute("uv",new Ye(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new wl(e,6,1);return this.setAttribute("instanceStart",new si(n,3,0)),this.setAttribute("instanceEnd",new si(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new wl(e,6,1);return this.setAttribute("instanceColorStart",new si(n,3,0)),this.setAttribute("instanceColorEnd",new si(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new y_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),yp.setFromBufferAttribute(e),this.boundingBox.union(yp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ra.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ra)),ra.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ra));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Vt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Cn.line={uniforms:Ql.merge([Vt.common,Vt.fog,Vt.line]),vertexShader:`
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
		`};class Fu extends zi{constructor(t){super({type:"LineMaterial",uniforms:Ql.clone(Cn.line.uniforms),vertexShader:Cn.line.vertexShader,fragmentShader:Cn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const dl=new ve,Mp=new H,Sp=new H,dn=new ve,fn=new ve,fi=new ve,fl=new H,pl=new ae,pn=new Tm,Ap=new H,oa=new gn,aa=new qn,pi=new ve;let _i,Ss;function Ep(i,t,e){return pi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),pi.multiplyScalar(1/pi.w),pi.x=Ss/e.width,pi.y=Ss/e.height,pi.applyMatrix4(i.projectionMatrixInverse),pi.multiplyScalar(1/pi.w),Math.abs(Math.max(pi.x,pi.y))}function UC(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){pn.start.fromBufferAttribute(s,a),pn.end.fromBufferAttribute(r,a),pn.applyMatrix4(e);const u=new H,h=new H;_i.distanceSqToSegment(pn.start,pn.end,h,u),h.distanceTo(u)<Ss*.5&&t.push({point:h,pointOnLine:u,distance:_i.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function kC(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;_i.at(1,fi),fi.w=1,fi.applyMatrix4(t.matrixWorldInverse),fi.applyMatrix4(n),fi.multiplyScalar(1/fi.w),fi.x*=r.x/2,fi.y*=r.y/2,fi.z=0,fl.copy(fi),pl.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(dn.fromBufferAttribute(c,d),fn.fromBufferAttribute(u,d),dn.w=1,fn.w=1,dn.applyMatrix4(pl),fn.applyMatrix4(pl),dn.z>l&&fn.z>l)continue;if(dn.z>l){const M=dn.z-fn.z,y=(dn.z-l)/M;dn.lerp(fn,y)}else if(fn.z>l){const M=fn.z-dn.z,y=(fn.z-l)/M;fn.lerp(dn,y)}dn.applyMatrix4(n),fn.applyMatrix4(n),dn.multiplyScalar(1/dn.w),fn.multiplyScalar(1/fn.w),dn.x*=r.x/2,dn.y*=r.y/2,fn.x*=r.x/2,fn.y*=r.y/2,pn.start.copy(dn),pn.start.z=0,pn.end.copy(fn),pn.end.z=0;const v=pn.closestPointToPointParameter(fl,!0);pn.at(v,Ap);const g=im.lerp(dn.z,fn.z,v),f=g>=-1&&g<=1,x=fl.distanceTo(Ap)<Ss*.5;if(f&&x){pn.start.fromBufferAttribute(c,d),pn.end.fromBufferAttribute(u,d),pn.start.applyMatrix4(o),pn.end.applyMatrix4(o);const M=new H,y=new H;_i.distanceSqToSegment(pn.start,pn.end,y,M),e.push({point:y,pointOnLine:M,distance:_i.origin.distanceTo(y),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class OC extends Ae{constructor(t=new Jg,e=new Fu({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Mp.fromBufferAttribute(e,o),Sp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Mp.distanceTo(Sp);const r=new wl(s,2,1);return t.setAttribute("instanceDistanceStart",new si(r,1,0)),t.setAttribute("instanceDistanceEnd",new si(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;_i=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;Ss=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),aa.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=Ss*.5;else{const l=Math.max(s.near,aa.distanceToPoint(_i.origin));u=Ep(s,l,c.resolution)}if(aa.radius+=u,_i.intersectsSphere(aa)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),oa.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Ss*.5;else{const l=Math.max(s.near,oa.distanceToPoint(_i.origin));h=Ep(s,l,c.resolution)}oa.expandByScalar(h),_i.intersectsBox(oa)!==!1&&(n?UC(this,e):kC(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(dl),this.material.uniforms.resolution.value.set(dl.z,dl.w))}}class Qg extends Jg{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class BC extends OC{constructor(t=new Qg,e=new Fu({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function GC(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const Tp=.55,t0=.55,wp=.006,zC=i=>1/(1+Math.max(i,0)),HC=i=>t0/(1+2*Math.max(i,0)),VC=.6,WC=(i,t)=>t>0?i/t*VC:0,jC=14,XC=.25,e0=.25,ca=Math.round(e0*60)+2,qC=2,KC=.5,$C=16774102,YC=20,ml=.06,gl=.06,Rp=.09;function ZC(i){if(!(i>=0)||i>=gl+Rp)return[1,1,1];const t=i<gl?1:1-(i-gl)/Rp;return[1+ml*t,1-ml*t,1+ml*t]}const JC=.02,QC=2;let Hr=null;function tI(){if(Hr)return Hr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Hr=new In(i),Hr.userData.shared=!0,Hr}function Cp(i){let{bodyScale:t,radius:e}=i;const n=new on({map:tI(),transparent:!0,depthWrite:!1,opacity:t0,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Ae(new jn(Tp,Tp).rotateX(-Math.PI/2),n);s.position.y=wp,s.renderOrder=1,i.root.add(s);const r=new Fu({linewidth:qC,color:$C,vertexColors:!0,transparent:!0,opacity:KC,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new Qg;o.setPositions(new Float32Array(ca*3)),o.setColors(new Float32Array(ca*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new BC(o,r);u.frustumCulled=!1,u.renderOrder=YC,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new H;let p=!1,_=!1,v=-1;const g=new H;function f(){s.scale.setScalar(t)}f();function x(M){const y=p?d.distanceTo(M.pos):0,w=p&&y>QC,T=M.height<=JC;if(s.visible=!M.held,s.visible&&(s.position.set(M.pos.x,wp,M.pos.z),s.scale.setScalar(t*zC(M.height)),n.opacity=HC(M.height)),p&&!w&&M.dt>0&&y>1e-9){const{axis:L,angle:k}=GC([d.x,d.z],[M.pos.x,M.pos.z],e);if(L[0]!==0||L[2]!==0){g.set(L[0],L[1],L[2]);const N=T?k:WC(y/M.dt,e)*M.dt;N>0&&i.mesh.rotateOnWorldAxis(g,N)}}T&&_&&!w&&(v=M.t),w&&(v=-1),_=!T;const[R,P,A]=v<0?[1,1,1]:ZC(M.t-v);if(i.mesh.scale.set(t*R,t*P,t*A),w&&(l.length=0),h&&M.dt>0){for(l.push({t:M.t,p:M.pos.clone()});l.length&&M.t-l[0].t>e0;)l.shift();for(;l.length>ca;)l.shift()}if(h&&(M.speed>jC||(M.apex??0)>=XC)&&l.length>=2){const k=l.length-1,N=a.array,B=c.array;for(let G=0;G<ca-1;G++)for(const[U,z]of[[0,G],[3,G+1]]){const O=l[Math.min(z,k)].p,Z=6*G+U;N[Z]=O.x,N[Z+1]=O.y,N[Z+2]=O.z;const Y=Math.min(z,k)/k;B[Z]=B[Z+1]=B[Z+2]=Y}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=k,u.visible=!0}else u.visible=!1;d.copy(M.pos),p=!0}return{update:x,hide(){s.visible=!1,u.visible=!1},resize(M,y,w){t=M,e=y,f(),r.resolution.set(w.width,w.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:v})}}const eI=.055,nI=.17,ms=.015,Na=2.1,iI=.16,sI=.1,rI=1.6,oI=.45,aI=.11,cI={technical:NS,tactical:US,physical:Um,social:kS},lI={inner:.62,peak:.76,shoulder:.84,outer:1},uI={inner:.7,peak:.76,shoulder:.79,outer:.84},hI=16777215;function dI(){const i=new on({map:n0(uI),color:hI,blending:2,transparent:!0,depthWrite:!1}),t=new Ae(new jn(Na,Na).rotateX(-Math.PI/2),i);return t.position.y=.02,t.renderOrder=3,t.name="changeRing",t}function n0(i=lI){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(i.inner,"rgba(255,255,255,0)"),n.addColorStop(i.peak,"rgba(255,255,255,0.9)"),n.addColorStop(i.shoulder,"rgba(255,255,255,0.5)"),n.addColorStop(i.outer,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),new In(t)}function fI(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function pI(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?cI[i.color]??i.color:ss,r=Math.min(t.width,t.height)*.14;if(fI(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=iI,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=AC(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new In(t);return o.colorSpace=qe,o}function mI(i){var M,y;const{scene:t,drill:e,schedule:n}=i,s=(...w)=>{for(const T of w)T.traverse(R=>{const P=R.material;for(const A of Array.isArray(P)?P:P?[P]:[])A.toneMapped=!1});t.add(...w)},r=i.pathM??sI,o=w=>w*r*(i.pathWidthK??1),a=MC(i.search??location.search,(M=e.overlays)==null?void 0:M.runPaths),{width:c,length:u}=e.pitch,h=w=>w-c/2,l=w=>w-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(w=>[w.id,w.start])),ballStart:Aa(e),headingAt:i.headingAt},p=aC(e.players,Aa(e),n.attachTo(0)),_=new Map(e.players.map(w=>[w.id,w.team])),v=w=>_.get(w)===p?tC:eC,g=[];{const w=VR,T=new Float32Array(w*3),R=new Ze;R.setAttribute("position",new Ne(new Float32Array(w*2*3),3)),R.setAttribute("color",new Ne(new Float32Array(w*2*3),3));const P=new Float32Array(w*2*2);for(let U=0;U<w;U++)P.set([0,U/(w-1),1,U/(w-1)],U*4);R.setAttribute("uv",new Ne(P,2));const A=new Uint16Array((w-1)*6);for(let U=0;U<w-1;U++){const z=U*2;A.set([z,z+1,z+2,z+1,z+3,z+2],U*6)}R.setIndex(new Ne(A,1));const E=(()=>{const U=document.createElement("canvas");U.width=64,U.height=1;const z=U.getContext("2d"),[O,Z,Y]=FS,lt=z.createLinearGradient(0,0,64,0);lt.addColorStop(0,`rgba(${O},${Z},${Y},0)`),lt.addColorStop(.28,`rgba(${O},${Z},${Y},0.28)`),lt.addColorStop(.44,"rgba(216,247,120,0.8)"),lt.addColorStop(.5,"rgba(255,255,255,1)"),lt.addColorStop(.56,"rgba(216,247,120,0.8)"),lt.addColorStop(.72,`rgba(${O},${Z},${Y},0.28)`),lt.addColorStop(1,`rgba(${O},${Z},${Y},0)`),z.fillStyle=lt,z.fillRect(0,0,64,1);const Et=new In(U);return Et.colorSpace=qe,Et})(),L=new Ae(R,new on({map:E,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));L.frustumCulled=!1,L.renderOrder=6,L.name="ballTrail",s(L);const k=new H,N=new H,B=new H,G=HR/(w-1);g.push((U,z)=>{if(L.visible=a.trail,!a.trail)return;for(let Y=0;Y<w;Y++){const lt=lp(d,U-Y*G);T[Y*3]=h(lt.pos[0]),T[Y*3+1]=eI+lt.height,T[Y*3+2]=l(lt.pos[1])}const O=R.getAttribute("position"),Z=R.getAttribute("color");B.set(1,0,0);for(let Y=0;Y<w;Y++){const lt=Math.min(Y,w-2);k.set(T[lt*3]-T[lt*3+3],T[lt*3+1]-T[lt*3+4],T[lt*3+2]-T[lt*3+5]),N.set(T[Y*3],T[Y*3+1],T[Y*3+2]).sub(z.position),k.lengthSq()>1e-10&&(k.cross(N),k.lengthSq()>1e-10&&B.copy(k.normalize()));const Et=Math.pow(1-Y/(w-1),1.2),kt=nI*(.35+.65*Et),it=T[Y*3],bt=T[Y*3+1],ht=T[Y*3+2];O.setXYZ(Y*2,it+B.x*kt,bt+B.y*kt,ht+B.z*kt),O.setXYZ(Y*2+1,it-B.x*kt,bt-B.y*kt,ht-B.z*kt);const W=Et;Z.setXYZ(Y*2,W,W,W),Z.setXYZ(Y*2+1,W,W,W)}O.needsUpdate=Z.needsUpdate=!0})}{const w=[];let T=0,R=0;for(const P of e.events){if(P.type!=="move"&&P.type!=="dribble")continue;const A=(n.moves[P.player]??[]).find(k=>k.t0>=P.t&&k.t0<=P.t+Wl+1e-9&&k.to[0]===P.to[0]&&k.to[1]===P.to[1]);if(!A)continue;const E=pp(P.type,A.from,A.to,r);if(!E)continue;const L=new ie(v(P.player));w.push({m:A,authored:P.runPath===!0,stroke:E,baseR:L.r,baseG:L.g,baseB:L.b,baseA:1,vert0:T,vertCount:E.dashes.length*4+3}),T+=E.dashes.length*4+3,R+=E.dashes.length*6+3}if(w.length){const P=new Float32Array(T*3),A=new Float32Array(T*4),E=new Uint16Array(R);let L=0,k=0;const N=o(dp)/2;for(const z of w){const O=Math.hypot(z.m.to[0]-z.m.from[0],z.m.to[1]-z.m.from[1])||1,Z=-(z.m.to[1]-z.m.from[1])/O,Y=(z.m.to[0]-z.m.from[0])/O;for(const bt of z.stroke.dashes){const ht=L/3;P.set([h(bt.ax+Z*N),ms,l(bt.ay+Y*N),h(bt.ax-Z*N),ms,l(bt.ay-Y*N),h(bt.bx+Z*N),ms,l(bt.by+Y*N),h(bt.bx-Z*N),ms,l(bt.by-Y*N)],L),L+=12,E.set([ht,ht+1,ht+2,ht+1,ht+3,ht+2],k),k+=6}const[lt,Et,kt]=hp(z.m.from,z.m.to,z.stroke.headScale),it=L/3;P.set([h(lt[0]),ms,l(lt[1]),h(Et[0]),ms,l(Et[1]),h(kt[0]),ms,l(kt[1])],L),L+=9,E.set([it,it+1,it+2],k),k+=3}const B=new Ze;B.setAttribute("position",new Ne(P,3)),B.setAttribute("color",new Ne(A,4)),B.setIndex(new Ne(E,1));const G=new Ae(B,new on({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));G.renderOrder=2,s(G);const U=B.getAttribute("color");g.push(z=>{if(G.visible=a.runPaths!=="off",!!G.visible){for(const O of w){const Z=a.runPaths==="authored"&&!O.authored?0:_C(z,O.m.t0),Y=qR(O.m,z);let lt=O.vert0;for(const kt of O.stroke.dashes){const it=O.baseA*Z*bp(kt.k,Y);for(let bt=0;bt<4;bt++)U.setXYZW(lt++,O.baseR,O.baseG,O.baseB,it)}const Et=O.baseA*Z*bp(1,Y);for(let kt=0;kt<3;kt++)U.setXYZW(lt++,O.baseR,O.baseG,O.baseB,Et)}U.needsUpdate=!0}})}}{const w=fC,T=cC/2,R=[-1,-.4,1-2*Yg,1],P=R.map(hC),A=R.length,E=n.flights.map((N,B)=>Xl(n.flights,B)),L=()=>{const N=new Ze,B=new Float32Array((w+1)*A*3);for(let O=0;O<(w+1)*A;O++)B[O*3+1]=mp;const G=new Float32Array((w+1)*A*4),U=new Uint16Array(w*(A-1)*6);for(let O=0,Z=0;O<w;O++)for(let Y=0;Y<A-1;Y++,Z++){const lt=O*A+Y;U.set([lt,lt+1,lt+A,lt+1,lt+A+1,lt+A],Z*6)}N.setAttribute("position",new Ne(B,3)),N.setAttribute("color",new Ne(G,4)),N.setIndex(new Ne(U,1));const z=new Ae(N,new on({color:uC,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return z.frustumCulled=!1,z.renderOrder=2,z.name="passRibbon",s(z),{mesh:z,posAttr:N.getAttribute("position"),colAttr:N.getAttribute("color")}},k=[L(),L()];g.push(N=>{const B=a.runPaths==="auto"?pC(n.flights,N):[];for(let G=0;G<k.length;G++){const U=k[G],z=B[B.length-1-G]??-1;if(U.mesh.visible=z>=0,z<0)continue;const O=n.flights[z],Z=jl(N,O,E[z]),Y=mC(O,N),lt=Math.hypot(O.to[0]-O.from[0],O.to[1]-O.from[1])||1,Et=-(O.to[1]-O.from[1])/lt*T,kt=(O.to[0]-O.from[0])/lt*T,it=O.from[0]+(O.to[0]-O.from[0])*Y,bt=O.from[1]+(O.to[1]-O.from[1])*Y,ht=gC(n.flights,z,N);for(let W=0;W<=w;W++){const _t=W/w,wt=W===w?ht[0]:O.from[0]+(it-O.from[0])*_t,Rt=W===w?ht[1]:O.from[1]+(bt-O.from[1])*_t,Wt=Z*_p(_t);for(let Yt=0;Yt<A;Yt++){const re=R[Yt],j=W*A+Yt;U.posAttr.setX(j,h(wt+Et*re)),U.posAttr.setZ(j,l(Rt+kt*re)),U.colAttr.setXYZW(j,1,1,1,Wt*P[Yt])}}U.posAttr.needsUpdate=U.colAttr.needsUpdate=!0}})}{const w=(e.equipment??[]).filter(L=>L.type==="goal").map(L=>({x:L.at[0],y:L.at[1],halfW:ws(L,qa)*i.goalScale})),T=o(ia)/2,R=[],P=[],A=[],E=[];for(let L=0;L<n.flights.length;L++){const k=n.flights[L];if(!Za(k))continue;const N=rC(k,n.arrivals);if(!N&&!k.pop)continue;const B=Math.hypot(k.to[0]-k.from[0],k.to[1]-k.from[1])||1,G=-(k.to[1]-k.from[1])/B,U=(k.to[0]-k.from[0])/B,z=U,O=-G;let Z=0;if(N){const Y=iC*2*T/2;P.push({ax:k.to[0]-z*T,ay:k.to[1]-O*T,bx:k.to[0]+z*T,by:k.to[1]+O*T,h:Y,px:G,py:U});const lt=oC(k.from,k.to,w,o(ia))??k.to;P.push({ax:k.to[0],ay:k.to[1],bx:lt[0],by:lt[1],h:sC*T,px:G,py:U}),Z=8}else{P.push({ax:k.from[0],ay:k.from[1],bx:k.to[0],by:k.to[1],h:dp/ia*T,px:G,py:U});const Y=pp("pass",k.from,k.to,r);A.push(hp(k.from,k.to,Y?Y.headScale:0)),Z=7}E.push({i:L,verts:Z})}if(E.length){const L=E.reduce((ht,W)=>ht+W.verts,0),k=E.reduce((ht,W)=>ht+(W.verts===8?12:9),0),N=new Float32Array(L*3),B=new Float32Array(L*4),G=new Uint16Array(k);let U=0,z=0,O=0,Z=0;const Y=mp,lt=()=>{const ht=P[O++],W=U/3;N.set([h(ht.ax+ht.px*ht.h),Y,l(ht.ay+ht.py*ht.h),h(ht.ax-ht.px*ht.h),Y,l(ht.ay-ht.py*ht.h),h(ht.bx+ht.px*ht.h),Y,l(ht.by+ht.py*ht.h),h(ht.bx-ht.px*ht.h),Y,l(ht.by-ht.py*ht.h)],U),U+=12,G.set([W,W+1,W+2,W+1,W+3,W+2],z),z+=6};for(const ht of E){const W=U/3;if(ht.verts===8)lt(),lt();else{lt();const[_t,wt,Rt]=A[Z++],Wt=U/3;N.set([h(_t[0]),Y,l(_t[1]),h(wt[0]),Y,l(wt[1]),h(Rt[0]),Y,l(Rt[1])],U),U+=9,G.set([Wt,Wt+1,Wt+2],z),z+=3}R.push({flight:ht.i,vert0:W,vertCount:ht.verts})}const Et=new Ze;Et.setAttribute("position",new Ne(N,3)),Et.setAttribute("color",new Ne(B,4)),Et.setIndex(new Ne(G,1));const kt=new Ae(Et,new on({color:BS,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));kt.renderOrder=2.5,kt.name="passMarks",s(kt);const it=Et.getAttribute("color"),bt=n.flights.map((ht,W)=>Xl(n.flights,W));g.push(ht=>{if(kt.visible=a.runPaths==="auto",!!kt.visible){for(const W of R){const _t=n.flights[W.flight],wt=ht<_t.t0+_t.duration?0:jl(ht,_t,bt[W.flight])*_p(1);let Rt=W.vert0;for(let Wt=0;Wt<W.vertCount;Wt++,Rt++)it.setXYZW(Rt,1,1,1,wt)}it.needsUpdate=!0}})}}{const w=vC(n.departures,n.anims,i.clips),T={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},R=new on({map:n0(),color:ss,blending:2,transparent:!0,depthWrite:!1}),P=new Ae(new jn(Na,Na).rotateX(-Math.PI/2),R);P.position.y=.02,P.renderOrder=3,P.name="possessionRing",s(P);const A=i.ballRadius??aI,E=rI*A,L=ia*r,k=new on({color:ss,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),N=new Ae(new za(Math.max(E-L/2,1e-4),E+L/2,40),k);N.frustumCulled=!1,N.renderOrder=8,N.name="possessionHalo",s(N),g.push((B,G)=>{const U=yC(T,w,B);P.visible=a.highlight&&U.kind==="ring",N.visible=a.highlight&&(U.kind==="halo"||U.kind==="free");const z=Math.sin(B*2*Math.PI/1.6);if(U.kind==="ring"){const O=Kg(d,U.player,B);P.position.x=h(O[0]),P.position.z=l(O[1]);const Z=1+.05*z;P.scale.x=P.scale.z=Z,R.opacity=.72+.18*z}else if(U.kind==="halo"||U.kind==="free"){const O=lp(d,B);N.position.set(h(O.pos[0]),A+O.height,l(O.pos[1])),N.quaternion.copy(G.quaternion),k.opacity=U.kind==="free"?oI:.72+.18*z}})}const f=[];for(const w of((y=e.overlays)==null?void 0:y.zones)??[]){if(km.test(w.label??""))continue;const T=new Ae(new jn(w.w,w.h).rotateX(-Math.PI/2).rotateY(Math.PI),new on({map:pI(w),transparent:!0,depthWrite:!1}));T.position.set(h(w.at[0]),.004,l(w.at[1])),T.renderOrder=.5,s(T),f.push(T)}const x=()=>{for(const w of f)w.visible=a.zones};return x(),{update(w,T){for(const R of g)R(w,T)},set(w){Object.assign(a,w),x()}}}const gI=.16,_I=.25,i0=.8,s0=.6,r0=8,bI=s0*r0;function vI(i,t){return!(i>=0)||i>=i0||t>bI*i?0:gI*Math.exp(-i/_I)*Math.sin(2*Math.PI*(t/s0-r0*i))}function xI(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??yI})}return t}const yI=.6,Ip=.15,MI=.12,SI=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Pp(i){return SI(Math.min(i,1-i)/MI)}function AI(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let z=0;z<4;z++)o.push([n.getX(z),n.getY(z),n.getZ(z)]);const a=[0,1,2].map(z=>Math.min(...o.map(O=>O[z]))),c=[0,1,2].map(z=>Math.max(...o.map(O=>O[z]))),u=[0,1,2].map(z=>c[z]-a[z]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(z=>z!==h);if(!(u[l]>0&&u[d]>0))return null;const p=(z,O)=>{let Z=0,Y=1/0;for(let lt=0;lt<4;lt++){const Et=Math.abs((o[lt][l]-a[l])/u[l]-z)+Math.abs((o[lt][d]-a[d])/u[d]-O);Et<Y&&(Y=Et,Z=lt)}return Z},_=p(0,0),v=p(1,0),g=p(0,1),f=p(1,1),x=(z,O)=>s?O?s.getY(z):s.getX(z):0,M=new H().setFromMatrixScale(t).x,y=Math.max(2,Math.min(96,Math.ceil(u[l]*M/Ip))),w=Math.max(2,Math.min(96,Math.ceil(u[d]*M/Ip))),T=(y+1)*(w+1),R=new Float32Array(T*3),P=new Float32Array(T*2),A=new Float32Array(T*3),E=new Float32Array(T),L=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let z=0;z<=w;z++)for(let O=0;O<=y;O++){const Z=z*(y+1)+O,Y=O/y,lt=z/w;R[Z*3+h]=o[0][h],R[Z*3+l]=a[l]+u[l]*Y,R[Z*3+d]=a[d]+u[d]*lt;for(const Et of[0,1])P[Z*2+Et]=x(_,Et)*(1-Y)*(1-lt)+x(v,Et)*Y*(1-lt)+x(g,Et)*(1-Y)*lt+x(f,Et)*Y*lt;A.set(L,Z*3),E[Z]=Pp(Y)*Pp(lt)}const k=[];for(let z=0;z<w;z++)for(let O=0;O<y;O++){const Z=z*(y+1)+O;k.push(Z,Z+1,Z+y+1,Z+1,Z+y+2,Z+y+1)}const N=new Ze;N.setAttribute("position",new Ne(R,3)),N.setAttribute("uv",new Ne(P,2)),N.setAttribute("normal",new Ne(A,3)),N.setIndex(k),N.userData.drillOwned=!0,i.geometry=N;const B=new Float32Array(R),G=new Float32Array(T*3),U=new H;for(let z=0;z<T;z++)U.fromArray(B,z*3).applyMatrix4(t).toArray(G,z*3);return{mesh:i,axis:h,rest:B,world:G,weight:E,scale:M}}function Lp(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new ae().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=ri.zMin;i.placed.copy(i.goal.matrixWorld)}function EI(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new ae().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!TI(l))return;const d=AI(l,new ae().multiplyMatrices(a,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new ae,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new H}))};Lp(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=wI(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)RI(c);r.dirty=!1;continue}Lp(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-o.p.x,p=c.world[l*3+1]-o.p.y,_=c.world[l*3+2]-o.p.z,v=vI(a,Math.hypot(d,p,_))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+v/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const TI=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function wI(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<i0&&(e=n);return e}function RI(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const Nu=new H(0,1,0),o0=.04,a0=8,io=.1,vr=46,xr=25,Dp=70;function Ua(i,t){return new H(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function Ja(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let As=new Float64Array(64),la=new Float64Array(64),ua=new Float64Array(64);const c0=new H,l0=new H,ns=new H;function Fp(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+As[r]/2),s=Math.max(s,-i[r]/(2*e)+As[r]/2);return n+s}function Np(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-As[o])*e),r=Math.min(r,i[o]+(n-As[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function ka(i,t,e,n,s){const r=i.length;As.length<r&&(As=new Float64Array(r),la=new Float64Array(r),ua=new Float64Array(r));const o=c0.crossVectors(Nu,e).normalize(),a=l0.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let v=0;v<r;v++)ns.subVectors(i[v],t),As[v]=ns.dot(e),la[v]=ns.dot(o),ua[v]=ns.dot(a);const h=Math.max(Math.max(Fp(la,r,c),Fp(ua,r,u))*(1+o0),a0),[l,d]=Np(la,r,c,h),[p,_]=Np(ua,r,u,h);return{dist:h,offset:new H().addScaledVector(o,l).addScaledVector(a,p),slack:new ee(d,_)}}function CI(i,t,e,n,s){const r=c0.crossVectors(Nu,e).normalize(),o=l0.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){ns.subVectors(h,t);const l=ns.dot(e);u=Math.max(u,Math.abs(ns.dot(r))/a+l,Math.abs(ns.dot(o))/c+l)}return Math.max(u*(1+o0),a0)}function u0(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+io)?!0:r>s*(1+io)?!1:n}function h0(i,t,e=vr,n=xr){const s=new gn().setFromPoints(i),r=s.getCenter(new H),o=s.getSize(new H),{vHalf:a,hHalf:c}=Ja(t),u=e*Math.PI/180,h=n*Math.PI/180,l=ka(i,r,Ua(u,h),a,c).dist,d=ka(i,r,Ua(u,h+Math.PI/2),a,c).dist,p=u0(o.x,o.z,t.aspect<1,d<l*(1-io));return{dist:p?d:l,alt:p}}function _l(i,t,e,n=vr,s=xr){const{dist:r}=h0(i,t,n,s);return 2*r*Math.tan(Ja(t).vHalf)/e}function Up(i=vr){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const Kl=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),kp=.6,II=.8,PI=30,LI=xr,DI=12,Op=1.03,FI=1.5;function NI(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return Op+(1-Op)*(e*e*(3-2*e))}const UI=2,$l=.5,kI=i=>{const t=Math.floor(Math.max(i,0)/$l)*$l;return[t,t+UI]},OI=.25,BI=.06;function GI(i,t){const e=new H;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(OI)}class zI{constructor(t,e=vr,n=xr){Pe(this,"target",new H);Pe(this,"wanted",new H);Pe(this,"useAlt",!1);Pe(this,"pushAt",-1);Pe(this,"pushFor",0);Pe(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:NI(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new gn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new H),o=s.getSize(new H),{vHalf:a,hHalf:c}=Ja(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*Kl(e,kp);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,p=Ua(h,l),_=Ua(h,d),v=ka(t,r,p,a,c),g=ka(t,r,_,a,c);!this.useAlt&&g.dist<v.dist*(1-io)?this.useAlt=!0:this.useAlt&&v.dist<g.dist*(1-io)?this.useAlt=!1:this.useAlt=u0(o.x,o.z,this.camera.aspect<1,this.useAlt);const f=this.useAlt?g:v,x=this.useAlt?_:p,M=n.lookAt?r:r.clone().add(f.offset),y=n.lookAt?CI(t,r,x,a,c):f.dist;if(n.breath&&!n.lookAt){const R=new H().crossVectors(Nu,x).normalize(),P=new H().crossVectors(x,R).normalize(),A=BI*f.dist,E=(L,k)=>{const N=Math.min(k,A);return Math.min(Math.max(L,-N),N)};M.addScaledVector(R,E(n.breath.dot(R),f.slack.x)).addScaledVector(P,E(n.breath.dot(P),f.slack.y))}const w=y*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(x).multiplyScalar(w).add(M);const T=Kl(e,kp);this.camera.position.lerp(this.wanted,T),this.target.lerp(M,T),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const HI=1.8,VI=34,WI=844,jI=1,d0=4;function Bp(i,t,e=vr,n=xr){const{vHalf:s}=Ja(t),r=e*Math.PI/180,{dist:o}=h0(i,t,e,n),a=VI*2*o*Math.tan(s)/(WI*HI*Math.cos(r));return Math.min(d0,Math.max(jI,a))}function XI(i,t,e,n=vr,s=xr,r=d0){const o=h=>to(i,Math.min(r,h));let a=o(Bp(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(Bp([...t,...Ll(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...Ll(i,a)]}}class qI{constructor(){Pe(this,"last",-1);Pe(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Qi={clips:0,schedule:0,build:0};let Gp=null;function KI(){return Gp??(Gp=fetch(An("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Ag(i)).catch(i=>{throw Gp=null,i}))}let zp=null;function $I(i){return zp??(zp=mu().loadAsync(An("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw zp=null,t}))}function YI(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const ZI=2,JI=(i,t,e=ZI)=>i===null||t-i<e*1e3,f0="coach";function QI(i){return i.team===f0||i.number===void 0?void 0:String(i.number)}function tP(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==f0)??t[0]}const eP=i=>i==="boys"||i==="girls";async function nP(i,t,e,n=xE){if(!eP(e))return;let s=null;try{s=await n(e)}catch{s=null}return sP(i,t,s)}const iP=(i,t,e)=>i===t&&e!==void 0;function sP(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function p0(i,t,e={}){var $n,ot,Ct;const n=performance.now(),s=XS(i),r=await KI();Qi.clips=performance.now()-n;const o=e.stage??Va(t),a=new vn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([ct,Bt])=>new H(ct*s.pitch.width/2,0,Bt*s.pitch.length/2)),u=s.players.map(ct=>new H(ct.start[0]-s.pitch.width/2,0,ct.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??XI(s,h,o.camera,e.elev,e.az).scale,d=ct=>[...h,...Ll(s,ct)],p=o.size();let _=l(),v=d(_);yf(.35*_);let g=to(s,_);const f=performance.now(),x=(($n=e.schedules)==null?void 0:$n.get(g))??Ww(s,r,g);(ot=e.schedules)==null||ot.set(g,x),Qi.schedule=performance.now()-f;const M=oA(s),y=(ct=e.elev??0)=>ct>=Dp?[...v,...M]:v;let w=_l(y(),o.camera,o.size().height,e.elev,e.az),T=Up(e.elev);const R=_A(s.pitch.width,s.pitch.length),{toWorld:P,goals:A,cones:E,boards:L,setWorld:k,setMasts:N}=await BA(a,s,o.renderer.capabilities.getMaxAnisotropy(),_,R),B=EI(A,xI(x.flights),P);let G=v.slice(h.length);o.fitShadow(v),o.setFog(mA(s.pitch.width,s.pitch.length)),o.setHorizon(R),o.setSky(!1);const U=tP(s.teams),z=await ja(a,s.players.length,void 0,void 0,0,await nP(s.players,U,e.squad)),O=e.kit?await lg(e.kit.pattern,s.players.flatMap((ct,Bt)=>ct.team===U?cg(z[Bt]):[])):null,Z=await ug(),Y=new Map,lt=new Map,Et=new Map;let kt=null;s.players.forEach((ct,Bt)=>{var I;const Gt=z[Bt];Y.set(ct.id,Gt),Gt.root.rotation.order="YXZ",Gt.root.scale.setScalar(_);const b=iP(ct.team,U,e.kit),m=s.teams[ct.team].kit.primary;Gl(Gt,b?e.kit:m,b?O:null,{label:QI(ct),boxes:Z,base:m}),Gt.root.position.copy(P(ct.start));const D=QS(.9);if(D.scale.setScalar(_),D.position.x=Gt.root.position.x,D.position.z=Gt.root.position.z,a.add(D),lt.set(ct.id,D),(I=e.mark)!=null&&I.includes(ct.id)){const S=dI();S.scale.setScalar(_),S.position.copy(D.position),S.position.y=.02,a.add(S),Et.set(ct.id,S)}});const it=(await $I()).clone();it.scale.setScalar(_),a.add(it);const bt=Cp({root:a,mesh:it,bodyScale:_,radius:.11*_,resolution:o.size()}),ht=!!s.ball,W=Aa(s);ht||(it.visible=!1,bt.hide());const _t=Array.from({length:(((Ct=s.balls)==null?void 0:Ct.length)??0)+x.ballSwaps.length},()=>it.clone()),wt=_t.map(ct=>(ct.scale.setScalar(_),a.add(ct),Cp({root:a,mesh:ct,bodyScale:_,radius:.11*_,resolution:o.size(),streak:!1}))),Rt=new zI(o.camera,e.elev,e.az);Rt.armPushIn(FI,performance.now()/1e3);let Wt="fit",Yt=-1,re=[];const j=new H,xe=new H,te=new H;let Qt=!1,qt=[],he=-1/0;const Nt=new cR(s.duration,e.loop??!0),F=new qI,C=new Map(s.players.map(ct=>[ct.id,ct.role])),q=nR(s.players,x,s.duration,W),$=aR(r,x.anims,C,x.bounces,e.inertial,q.ready),{applyAnim:gt,cueAt:et}=$,Lt=lR(x.turns,s.players.map(ct=>[ct.id,ct.role==="keeper"?Be(ct.start,W):0])),Dt=Lt.heading,Ot=Lt.rateOf,oe=new Map(s.players.map(ct=>[ct.id,ct.start])),At=Array.from({length:hl},()=>new Map),Tt=new Map,Zt=BR(),Jt=new Map;for(const ct of x.departures)(Jt.get(ct.player)??Jt.set(ct.player,[]).get(ct.player)).push(ct.contact);for(const ct of x.arrivals)(Jt.get(ct.player)??Jt.set(ct.player,[]).get(ct.player)).push(ct.at);const jt=s.players.map(ct=>ct.id);function pe(){const ct=new Set(a.children);return{built:mI({scene:a,drill:s,schedule:x,clips:r,headingAt:Gt=>Dt.get(Gt)??0,search:e.search,pathM:w,pathWidthK:T,ballRadius:.11*_,goalScale:g}),owned:a.children.filter(Gt=>!ct.has(Gt))}}let St=pe();const vt={},K={update:(ct,Bt)=>St.built.update(ct,Bt),set:ct=>{Object.assign(vt,ct),St.built.set(ct)}};function Ut(){for(const ct of St.owned)a.remove(ct),xu(ct);St=pe(),St.built.set(vt)}const dt=MR(),yt=[],Ft=CR(),zt=()=>{Ft.reset(),dt.reset(),$.reset()};Nt.onSeek(zt),Nt.onLoop(zt);const se=NC(Nt);function ce(){const ct=l();if(ct!==_){_=ct,v=d(_),G=v.slice(h.length),g=to(s,_),yf(.35*_);for(const Bt of Y.values())Bt.root.scale.setScalar(_);for(const Bt of lt.values())Bt.scale.setScalar(_);it.scale.setScalar(_);for(const Bt of _t)Bt.scale.setScalar(_);for(const Bt of E)Bt.scale.setScalar(_);for(const Bt of L)jm(Bt,_);for(const Bt of A)Bt.scale.setScalar(g);o.fitShadow(v),zt()}bt.resize(_,.11*_,o.size());for(const Bt of wt)Bt.resize(_,.11*_,o.size());w=_l(y(Rt.elev),o.camera,o.size().height,Rt.elev,Rt.az),Ut(),o.rule.wake()}let ze=0;const Ee=o.onBox(()=>{ze||(ze=requestAnimationFrame(()=>{ze=0,ce()}))}),me=o.size();(me.width!==p.width||me.height!==p.height)&&ce();const un=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Y,heading:Dt,camera:o.camera,ball:it,spare:_t,schedule:x,goals:A,bodyScale:_,lockDbg:un,clips:r,cueAt:et,inert:$.inert},__pathMetrics:()=>({metresPerPx:w,widthK:T,runHalfM:1.6*w*T/2,passHalfM:2.2*w*T/2})});function Nn(ct,Bt=30,Gt=.12,b=4,m=1){const D=[];for(const[tt,pt]of Y)pt.root.traverse(ut=>{ut.isBone&&/foot/i.test(ut.name)&&D.push({id:tt,name:ut.name,bone:ut})});Nt.pause(),Nt.seek(0);for(let tt=0;tt<90;tt++)o.step(1/60);Nt.play();const I=1/Bt,S=Math.min(ct??s.duration,s.duration),V=Math.max(0,Math.round(S*Bt)-1),X=D.map(()=>[]),Q=new H;for(let tt=0;tt<=V;tt++){for(let pt=0;pt<D.length;pt++){const ut=D[pt].bone.matrixWorld.elements;Q.set(ut[12],ut[13],ut[14]);const ft=Y.get(D[pt].id).root.worldToLocal(Q.clone());X[pt].push([tt*I,ut[12],ut[13],ut[14],ft.x,ft.z])}o.step(I)}Nt.pause();const rt=(tt,pt)=>{var ut;return((ut=et(tt,pt))==null?void 0:ut.clip)??"idle"},nt=[];return D.forEach((tt,pt)=>{const ut=(at,J)=>{if(J-at<b)return;const st=X[pt].slice(at,J);let mt=0,It=0;for(let Pt=1;Pt<st.length;Pt++)mt=Math.max(mt,Math.hypot(st[Pt][1]-st[0][1],st[Pt][3]-st[0][3])),It+=Math.hypot(st[Pt][4]-st[Pt-1][4],st[Pt][5]-st[Pt-1][5])/I;nt.push({player:tt.id,foot:tt.name,t0:+st[0][0].toFixed(2),t1:+st[st.length-1][0].toFixed(2),drift:+mt.toFixed(3),localSpeed:+(It/(st.length-1)).toFixed(2),clip0:rt(tt.id,st[0][0]),clip1:rt(tt.id,st[st.length-1][0])})},ft=X[pt].map((at,J)=>J===0?1/0:Math.hypot(at[1]-X[pt][J-1][1],at[3]-X[pt][J-1][3])/I);let xt=-1;X[pt].forEach((at,J)=>{const st=at[2]<Gt,mt=J>0&&rt(tt.id,at[0])!==rt(tt.id,X[pt][J-1][0]),It=ft[J]>m&&J>0&&ft[J-1]>m;xt>=0&&(!st||mt||It)&&(ut(xt,J),xt=-1),xt<0&&st&&ft[J]<m&&(xt=J)}),xt>=0&&ut(xt,X[pt].length)}),nt.sort((tt,pt)=>pt.drift-tt.drift),{feet:D.map(tt=>({id:tt.id,name:tt.name})),hPlant:Gt,fps:Bt,phases:nt}}e.embed||Object.assign(window,{__footAudit:Nn}),e.embed&&o.rule.enable();const ci=new Map,$e=new H;let Tn=0;const Mi=e.sfx?LC(x.flights):[];let Kn=0;o.scene.add(a);const Un=(ct,Bt)=>{var nt,tt,pt,ut,ft,xt;Nt.advance(ct);const Gt=Nt.t,b=Nt.playing?ct:0,m=x.attachTo(Gt),D=xa({t:Gt,holderId:m,holderRoot:m?oe.get(m):null,holderHeading:m?Dt.get(m):0,ballStart:W,flights:x.flights,departures:x.departures,arrivals:x.arrivals}).pos,I=new Set;m&&I.add(m);for(const[at,J]of Jt)J.some(st=>Math.abs(Gt-st)<=UR)&&I.add(at);for(const at of s.players){const J=x.moves[at.id]??[];for(let mt=0;mt<hl;mt++)At[mt].set(at.id,((nt=es(J,Gt+NR*mt/(hl-1)))==null?void 0:nt.pos)??at.start);const st=es(J,Gt);Tt.set(at.id,st?Math.hypot(st.vel[0],st.vel[1]):0)}const S=Zt.step(jt,At,I,DR*_,Gt,b,Tt);for(const at of s.players){const J=Y.get(at.id);let st=at.start,mt=0;const It=es(x.moves[at.id]??[],Gt);It&&(st=It.pos,mt=It.speed);const Pt=Sg(x.dives,x.moves[at.id],at.id,Gt),Kt=Pt!==null;Pt&&(st=Pt);const ne=S.get(at.id);ne&&!Kt&&(ne[0]||ne[1])&&(st=[st[0]+ne[0],st[1]+ne[1]]),J.root.position.copy(P(st));const Te=x.moves[at.id]??[],de=Kt?0:BE(Te,Gt+rp);J.root.rotation.x=0,J.root.rotation.z=0,Kt||(J.root.position.y-=VE(Te,Gt)-Sw(x.bounces,at.id,Gt)*_),oe.set(at.id,st);let Xt=null,ge=!1;for(const Ht of x.faces)Ht.player===at.id&&Gt>=Ht.t0&&(Xt=Ht.until===void 0||Gt<=Ht.until?Ht.at:null,Ht.lock&&Gt>=Ht.lock[0]&&Gt<=Ht.lock[1]&&(ge=!0));const fe=Xt!==null&&Ni(st,Xt),De=JE(st,D,fe,at.id===m),Mt=fe?Be(st,Xt):De??Dt.get(at.id),{h:le,clipYaw:ke}=Lt.step(at.id,Gt,b,mt,Mt,ge,!fe&&De!==null);J.root.rotation.y=WE(le,ke),gt(at.id,J,Gt,b,mt);const we=Dd(J);if(we.length){const Ht=Ft.tilt(at.id,Kt?[0,0]:kE(Te,Gt+rp),Dt.get(at.id),de,b);cp(J.root,we[0],Ht.pitch,0,Ht.roll)}const We=gE(J);if(We.length&&!Kt){J.root.updateMatrixWorld(!0);for(let Ie=0;Ie<We.length;Ie++){const Oe=We[Ie].matrixWorld.elements;yt[Ie]=[Oe[12],Oe[13],Oe[14]]}yt.length=We.length;const Ht=et(at.id,Gt),Me=yR((Ht==null?void 0:Ht.clip)??null,Ht?(tt=r.clips[Ht.clip])==null?void 0:tt.category:void 0,vR(Te,Gt)),[Re,rn]=dt.step(at.id,yt,[J.root.position.x,J.root.position.z],Gt,b,Me,_);J.root.position.x+=Re,J.root.position.z+=rn,un&&un.set(at.id,[Me?1:0,Math.hypot(Re,rn),dt.foot(at.id),mt,dt.rootSpeed(at.id)])}const Xe=lt.get(at.id);Xe.position.x=J.root.position.x,Xe.position.z=J.root.position.z;const ye=Et.get(at.id);if(ye&&(Nt.playing&&(kt??(kt=Bt)),ye.position.x=Xe.position.x,ye.position.z=Xe.position.z,ye.visible=JI(kt,Bt,e.markSeconds)),at.id===m){const Ht=RC(x.arrivals,at.id,Gt),Me=Ht>=0?_E(J)[Ht]:void 0;if(Me){J.root.updateMatrixWorld(!0);const Re=Me.matrixWorld.elements;$e.set(Re[12],Re[13],Re[14]),Tn=Zg(x.arrivals,x.departures,at.id,Gt)}}}const V=xa({t:Gt,holderId:m,holderRoot:m?oe.get(m):null,holderHeading:m?Dt.get(m):0,ballStart:W,flights:x.flights,departures:x.departures,arrivals:x.arrivals});it.position.copy(P(V.pos,.11*_+V.height)),Tn>0&&(it.position.lerp($e,Tn),Tn=0),ht&&bt.update({pos:it.position,height:V.height,t:Gt,dt:b,apex:V.apex,speed:V.speed,held:m!==null&&CC(x.arrivals,x.departures,m,Gt)});for(let at=0;at<_t.length;at++){const J=(pt=s.balls)==null?void 0:pt[at],st=J?x.ballSwaps.find(Pt=>Pt.take===at):x.ballSwaps[at-(((ut=s.balls)==null?void 0:ut.length)??0)],mt=J?!(st&&Gt>=st.t):Gt>=st.t;if(_t[at].visible=mt,!mt){wt[at].hide();continue}let It;J?J.carrier&&oe.has(J.carrier)?It=ni(oe.get(J.carrier),Dt.get(J.carrier)??0):It=mg(J,Gt):It=st.drop,_t[at].position.copy(P(It,.11*_)),wt[at].update({pos:_t[at].position,height:0,t:Gt,dt:b,held:!1,speed:0})}e.sfx&&(se(e.sfx,Mi,Kn,Gt,Nt.playing,V.height,V.speed),Kn=Gt),K.update(Gt,o.camera),B.update(Gt);for(const at of s.players){const J=Y.get(at.id),st=mE(J);if(!st)continue;const mt=uw(x.faces,at.id,Gt),It=mt?P(mt):it.position,Pt=q.scan(at.id,Gt,!et(at.id,Gt)&&at.id!==m&&at.role!=="keeper"),Kt=jE(Math.atan2(It.x-J.root.position.x,It.z-J.root.position.z)-Dt.get(at.id)+YE(Ot.get(at.id)??0)+Pt.yaw,58*Math.PI/180+Pt.env*(eR-58*Math.PI/180),.85+.15*Pt.env),ne=ci.get(at.id)??0,Te=qE(ne,Kt,b);ci.set(at.id,Te);const de=Dd(J),Xt=de.length>1?Ft.shoulder(at.id,Te,b):0;de.length>1&&cp(J.root,de[1],0,Xt,0),LR(st,-(Te-Xt))}const X=[...Y.values()].map(at=>new H(at.root.position.x,0,at.root.position.z)),Q=o.rule.snap()?1/0:ct,rt=Bt/1e3;if(Wt==="broadcast"){let at=-1/0;for(const st of x.departures)Gt>=st.contact&&st.contact>at&&(at=st.contact);at!==he&&(he=at,qt=s.players.filter(st=>P(oe.get(st.id)??st.start).distanceTo(it.position)<=DI).map(st=>st.id)),!Qt||Q===1/0?(te.copy(it.position),Qt=!0):te.lerp(it.position,Kl(ct,II));const J=qt.length?qt.map(st=>{const mt=Y.get(st);return new H((mt==null?void 0:mt.root.position.x)??0,0,(mt==null?void 0:mt.root.position.z)??0)}):X;Rt.frame([...J,it.position.clone()],Q,{now:rt,lookAt:te.clone(),elevDeg:PI,azDeg:LI})}else{const[at,J]=kI(Gt);if(at!==Yt){Yt=at,re=[];const st=[];for(let mt=at;mt<=J+1e-9;mt+=$l){const It=new Map;for(const Te of s.players){const de=((ft=es(x.moves[Te.id]??[],mt))==null?void 0:ft.pos)??Te.start;It.set(Te.id,de);const Xt=P(de);re.push(new H(Xt.x,0,Xt.z)),Math.abs(Xt.x)<=s.pitch.width/2&&Math.abs(Xt.z)<=s.pitch.length/2&&st.push(new H(Xt.x,0,Xt.z))}const Pt=x.attachTo(mt),Kt=xa({t:mt,holderId:Pt,holderRoot:Pt?It.get(Pt)??null:null,holderHeading:Pt?Dt.get(Pt)??0:0,ballStart:W,flights:x.flights,departures:x.departures,arrivals:x.arrivals}),ne=P(Kt.pos);st.push(new H(ne.x,0,ne.z))}j.copy(GI(st,xe))}X.push(...re),X.push(...c,...G),Rt.elevNow>=Dp&&X.push(...M),Rt.frame([...X,it.position.clone()],Q,{now:rt,breath:j})}F.tick(Bt),YI(!!e.embed,`t ${Gt.toFixed(1)}s  fps ${F.avg.toFixed(0)}
[space] play/pause  [r] restart`),(xt=e.onFrame)==null||xt.call(e,Gt,Bt)};o.start(Un);const li=ct=>{ct.code==="Space"&&(Nt.playing?Nt.pause():Nt.play()),ct.code==="KeyR"&&Nt.seek(0)};e.embed||addEventListener("keydown",li);function kn(ct){ct!==Wt&&(Wt=ct,k(!0),o.setSky(ct==="broadcast"),N(ct==="broadcast"),Qt=!1,he=-1/0,o.rule.wake())}function ui(ct,Bt=Rt.az){ct===Rt.elev&&Bt===Rt.az||(Rt.setElev(ct),Rt.setAz(Bt),w=_l(y(ct),o.camera,o.size().height,ct,Bt),T=Up(ct),Ut(),o.rule.wake())}return Qi.build=performance.now()-n-Qi.clips-Qi.schedule,{timeline:Nt,step:ct=>o.step(ct),stage:o,overlays:K,setCamera:ui,setFollow:kn,setPushIn:ct=>Rt.armPushIn(ct,performance.now()/1e3),dispose(){removeEventListener("keydown",li),Ee(),ze&&(cancelAnimationFrame(ze),ze=0),o.scene.remove(a),Ym(a,[...z.map(Bt=>Bt.root),it,..._t,...A]),O==null||O.dispose();const ct=()=>{o.setFog(null),o.setHorizon(null),o.setSky(!0)};e.stage?o.park(Un)&&ct():(ct(),o.dispose())}}}const Hp="Shirt Soccer Man B",rP={boys:Hp,mixed:Hp,girls:"Shirt Soccer Woman A"},oP="10",Vp=12,aP=23.9,cP=32,lP=4,cr={shirt:{top:1.055856,bottom:.512852,fill:.88},full:{top:1.014873,bottom:-.142881,fill:.92}},uP=.35,hP=cr.shirt.top,dP=cr.shirt.bottom;cr.shirt.fill;const bs=.62,Wp=.09,jp=3,fP=.86,pP=.002,mP=724752,bl=90,gP=.014,_P=.5,vl=[2.6,5],Xp=1.15,tr=.14,xl=.1,bP=.26,vP=.02,xP="idle_relaxed_c",qp=[xP,"idle_relaxed_a","idle_a","idle_b"];async function yP(i,t,e={}){var Nt;const n=e.stage??Va(i),s=n.scene,r=new vn;let o=!0;const a=s.children.find(F=>F.isDirectionalLight),c=s.children.find(F=>F.isHemisphereLight),u={background:s.background,fog:s.fog,sun:a&&{position:a.position.clone(),intensity:a.intensity,colour:a.color.clone(),normalBias:a.shadow.normalBias},hemi:c&&{sky:c.color.clone(),ground:c.groundColor.clone(),intensity:c.intensity}};s.background=new ie(mP),s.fog=null,a&&(a.position.set(-3.2,4.4,3.6),a.color.set(16773856),a.intensity=3.2,a.shadow.normalBias=.02),c&&(c.color.set(10466248),c.groundColor.set(724752),c.intensity=.7);const h=new hu(12374240,1.35);h.position.set(2.8,2.2,-3.4),r.add(h,h.target);const l=new H_(9082530,1.35);r.add(l);const d=new Ae(new Jr(bs,bs*1.04,Wp,48),new Hi({color:1448991,roughness:.85,metalness:0}));d.position.y=-Wp/2,d.receiveShadow=!0,r.add(d);const p=MP((Nt=e.maskDeps)==null?void 0:Nt.loader);let _;const v=Promise.race([p,new Promise(F=>{_=setTimeout(()=>F(null),rg)})]),g=await bE(e.material??rP[e.squad??yu]),[f]=await ja(r,1,void 0,void 0,Math.max(g,0));f.root.traverse(F=>{F.castShadow=F.type==="SkinnedMesh"});let x=await lg([...Ul],cg(f),e.maskDeps);const M=await ug(e.maskDeps),y={label:oP,boxes:M};let w=Gl(f,t,x,y),T=null;const P=(e.clip?[e.clip,...qp]:qp).find(F=>f.clips.has(F))??[...f.clips.keys()][0],A=P?f.mixer.clipAction(f.clips.get(P)):null;A==null||A.play();const E=await v;clearTimeout(_),E?r.add(E):p.then(F=>{F&&(o?r.add(F):xu(F))}).catch(()=>{}),s.add(r),f.mixer.update(1/60),f.root.updateWorldMatrix(!0,!0);const L=new gn().setFromObject(f.root,!0),k=Math.max(.5,L.max.y-L.min.y),N={fov:n.camera.fov,near:n.camera.near,far:n.camera.far},B=n.camera;B.fov=aP,B.near=.1,B.far=60;const G=new H(0,L.min.y+k*(hP+dP)/2,0);let U=Wa,z=cr[U],O=z,Z=1;const Y=F=>1-(1-F)**3;function lt(){const F=Z>=1?1:Y(Z),C=Ot=>F>=1?O[Ot]:z[Ot]+(O[Ot]-z[Ot])*F,q=C("top"),$=C("bottom");G.y=L.min.y+k*(q+$)/2;const et=k*(q-$)/C("fill")/2/Math.tan(B.fov*Math.PI/360),Lt=cP*Math.PI/180,Dt=lP*Math.PI/180;B.position.set(Math.sin(Lt)*Math.cos(Dt)*et,G.y+Math.sin(Dt)*et,Math.cos(Lt)*Math.cos(Dt)*et),B.lookAt(G),B.updateProjectionMatrix()}lt(),n.fitShadow([new H(-bs,0,-bs),new H(bs,k,bs)]),n.setSky(!1);const Et=n.onBox(lt);B.updateMatrixWorld(!0);const kt=new H(0,G.y+k*.22,0),it=new Float32Array(bl*3),bt=new H,ht=new H,W=new Tm(B.position,kt),_t=new H,wt=Math.tan(B.fov*Math.PI/360),Rt=wt*B.aspect,Wt=B.position.distanceTo(new H(0,G.y,0)),Yt=F=>{for(const C of[-tr,tr])for(const q of[-xl,xl])for(const $ of[-tr,tr])if(ht.set(F.x+C,F.y+q,F.z+$),ht.y<.03||ht.distanceTo(B.position)<Wt+vP||(W.closestPointToPoint(ht,!0,_t),_t.distanceTo(ht)<bP))return!1;return!0};for(let F=0,C=0;F<bl&&C<bl*40;C++){const q=vl[0]+Math.random()*(vl[1]-vl[0]);bt.set((Math.random()*2-1)*Rt*q*Xp,(Math.random()*2-1)*wt*q*Xp,-q).applyMatrix4(B.matrixWorld),Yt(bt)&&(bt.toArray(it,F*3),F++)}const re=new vm(new Ze().setAttribute("position",new Ne(it,3)),new ru({color:ss,size:gP,transparent:!0,opacity:_P,depthWrite:!1}));r.add(re),e.framing&&e.framing!==U&&(U=e.framing,z=O=cr[U],lt());let j=t,xe=0;function te(F){xe=(F%1+1)%1,f.root.rotation.y=xe*Math.PI*2,d.rotation.y=f.root.rotation.y}let Qt=0;function qt(F){var C;te(xe+F/Vp),Qt+=F,re.position.set(Math.sin(Qt*.043)*tr,Math.sin(Qt*.4)*xl,Math.sin(Qt*.031)*tr),Z<1&&(Z=Math.min(1,Z+F/uP),lt()),T&&(T.at+=F/DE,zd(T.mats,T.at)>=1&&(T=null)),f.mixer.update(F),(C=e.onFrame)==null||C.call(e,xe*Vp,performance.now())}const he=F=>qt(F);return e.embed&&n.rule.enable(),n.start(he),n.rule.play(),{stage:n,step:qt,setTurn:te,get framing(){return U},clip:P??"",bodyBox:[L.min.y,L.max.y],setFraming(F){if(F===U)return;const C=Z>=1?1:Y(Z),q=$=>C>=1?O[$]:z[$]+(O[$]-z[$])*C;z={top:q("top"),bottom:q("bottom"),fill:q("fill")},U=F,O=cr[F],Z=0,n.rule.wake()},async setKit(F){const C=j;j=F,w=Gl(f,F,x,{...y,from:C}),T={at:0,mats:w},zd(w,0),n.rule.wake()},dispose(){o=!1,Et(),s.remove(r),f.mixer.stopAllAction(),Ym(r,[f.root]),x==null||x.dispose(),s.background=u.background,s.fog=u.fog,a&&u.sun&&(a.position.copy(u.sun.position),a.intensity=u.sun.intensity,a.color.copy(u.sun.colour),a.shadow.normalBias=u.sun.normalBias),c&&u.hemi&&(c.color.copy(u.hemi.sky),c.groundColor.copy(u.hemi.ground),c.intensity=u.hemi.intensity),Object.assign(B,N),B.updateProjectionMatrix(),e.stage?n.park(he):n.dispose()}}}async function MP(i){Vr||(Vr=(async()=>{let r;try{r=await(i??new cu).loadAsync(An("assets/turf.webp"))}catch{return null}return r.colorSpace=qe,r.wrapS=r.wrapT=1e3,r.repeat.set(jp,jp),r.anisotropy=8,r.needsUpdate=!0,r.userData.shared=!0,r})().catch(()=>null),Vr.then(r=>{r||(Vr=null)}));const t=await Vr;if(!t)return null;const e=new Hi({map:t,roughness:1,metalness:0,transparent:!0,depthWrite:!1}),n=SP();n&&(e.alphaMap=n),ha||(ha=new Ga(bs,64),ha.userData.shared=!0);const s=new Ae(ha,e);return s.rotation.x=-Math.PI/2,s.position.y=pP,s.receiveShadow=!0,s}let Vr=null,ha=null,yl=null;function SP(){if(yl)return yl;if(typeof document>"u")return null;const i=128,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)return null;const n=e.createRadialGradient(i/2,i/2,i/2*fP,i/2,i/2,i/2);n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#000000"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new In(t);return s.colorSpace="",s.userData.shared=!0,yl=s,s}const m0="assets/narration/",AP=new Set(["progression","why"]),Kp=i=>Math.round(i*100)/100,is=1,$p=(i,t)=>/^https?:\/\//.test(t)?t:`${i}${t}.m4a`;function Yp(i,t,e){const n=t.map((h,l)=>({l:h,index:l})).filter(h=>h.l.beat==="take");if(n.length){const h=i?e[i]:void 0,l=typeof h=="number"&&Number.isFinite(h)&&h>0,d=l?h/is:0,p=n.map(M=>(M.l.text??"").length),_=p.reduce((M,y)=>M+y,0)||1,v=[];let g=0;for(const M of p)v.push(Kp(g/_*d)),g+=M;const f=t.map((M,y)=>({index:y,clip:null,hold:M.hold??0,tail:!1}));l&&n.forEach((M,y)=>{const w=y+1<n.length?v[y+1]:d;f[M.index]={index:M.index,clip:y===0?i:null,hold:Kp(w-v[y]),tail:!1,...y>0?{at:v[y]}:{}}});const x=l?f[n[0].index]:null;return{lines:f,hook:null,tail:[],queue:x?[x]:[],script:x?[i]:[],hasAudio:l,take:!0}}let s=0,r=-1;const o=[],a=t.map((h,l)=>{const d=h.beat==="action"?`action-${++s}`:h.beat,p=i&&d?`${i}-${d}`:null,_=p?e[p]:void 0,v=typeof _=="number"&&Number.isFinite(_)&&_>0?p:null,g={index:l,clip:v,hold:v?_/is:h.hold??0,tail:AP.has(h.beat??"")};return h.beat==="hook"?r=l:g.tail&&o.push(g),g}),c=r<0?null:a[r],u=a.filter(h=>h!==c&&h.clip!==null);return{lines:a,hook:c,tail:o,queue:u,script:[...c!=null&&c.clip?[c.clip]:[],...u.map(h=>h.clip)],hasAudio:a.some(h=>h.clip!==null),take:!1}}async function EP(i=An(m0)){try{const t=await fetch(`${i}index.json`);if(!t.ok)return{};const e=await t.json();return e&&typeof e=="object"?e:{}}catch{return{}}}const TP=.0056,wP=.01;function RP(i){const t=i.length,e=i.sampleRate,n=Math.max(1,Math.round(e*wP)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const u=Math.min(c+n,t);let h=0,l=0;for(const d of s)for(let p=c;p<u;p++)h+=d[p]*d[p],l++;return l>0&&Math.sqrt(h/l)>TP};let o=-1,a=-1;for(let c=0;c<t;c+=n)if(r(c)){o=c;break}if(o<0)return{lead:0,tail:0,end:t/e};for(let c=Math.floor((t-1)/n)*n;c>=0;c-=n)if(r(c)){a=Math.min(c+n,t);break}return{lead:o/e,tail:Math.max((t-a)/e,0),end:a/e}}function Zp(i,t,e){return t&&e?Math.max(i-(e.lead+e.tail)/is,0):i}function CP(i,t,e){if(!e)return i.hold;const n=i.at===void 0?e.lead:0;return Math.max(i.hold-(n+(t?e.tail:0))/is,0)}const IP=40,PP=3,LP=.75,DP=1.5,Yl="data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==";function Oa(i){return(i==null?void 0:i.name)!=="AbortError"}class FP{constructor(t=An(m0),e=n=>new Audio(n)){Pe(this,"blocked",!1);Pe(this,"shared",null);Pe(this,"srcNow","");Pe(this,"unlocked",!1);Pe(this,"el",null);Pe(this,"finish",null);Pe(this,"held",new Map);Pe(this,"inflight",new Map);Pe(this,"trims",new Map);Pe(this,"ctx",null);Pe(this,"noCtx",!1);Pe(this,"gen",0);Pe(this,"walks",0);Pe(this,"playing",null);Pe(this,"playGen",0);Pe(this,"arm",null);Pe(this,"onTrim",null);Pe(this,"onStarted",null);this.dir=t,this.make=e}setDir(t){if(t!==this.dir){this.dir=t;for(const[e,n]of this.held)if(e!==this.playing)try{URL.revokeObjectURL(n)}catch{}this.held.clear(),this.inflight.clear()}}fetched(){return[...this.held.keys()]}open(t){var n;if(!this.shared)return this.shared=this.make(t),this.srcNow=t,this.shared;const e=this.shared;if(this.srcNow!==t){this.srcNow=t;try{e.src=t}catch{}try{(n=e.load)==null||n.call(e)}catch{}}return e}unlock(){if(!this.unlocked&&(this.unlocked=!0,this.blocked=!1,this.playing===null))try{const t=this.open(Yl);Promise.resolve(t.play()).then(()=>{if(this.playing===null)try{t.pause()}catch{}}).catch(()=>{})}catch{}}newGeneration(){this.gen++}trim(t){return this.trims.get(t)}remaining(t){const e=this.el;if(!e||this.playing!==t)return;const n=this.trims.get(t),s=n&&n.tail>0?Math.min(n.end,e.duration):e.duration;if(Number.isFinite(s))return Math.max((s-(e.currentTime||0))/(e.playbackRate||1),0)}closeCtx(){const t=this.ctx;this.ctx=null;try{Promise.resolve(t==null?void 0:t.close()).catch(()=>{})}catch{}}async measure(t,e){var n,s;if(!(this.trims.has(t)||this.noCtx))try{if(!this.ctx){const a=globalThis,c=a.AudioContext??a.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await e.arrayBuffer()).slice(0));if(!r)return;const o=RP(r);this.trims.set(t,o),this.playing===t&&((n=this.arm)==null||n.call(this,o),(s=this.onTrim)==null||s.call(this,t,o))}catch{}}touch(t){const e=this.held.get(t);if(e!==void 0)return this.held.delete(t),this.held.set(t,e),e}async prefetch(t){if(this.touch(t)!==void 0||this.inflight.has(t))return;const e=this.pull(t);this.inflight.set(t,e);try{await e}finally{this.inflight.delete(t)}}async pull(t){try{const e=await fetch($p(this.dir,t));if(!e.ok)return;const n=await e.blob(),s=URL.createObjectURL(n);this.held.set(t,s),await this.measure(t,n);for(const r of[...this.held.keys()]){if(this.held.size<=IP)break;if(r===this.playing)continue;const o=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(o)}catch{}}}catch{}}async prefetchAll(t){const e=this.gen;this.walks++;try{for(const n of t){if(e!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(t,e=0,n=0){if(!this.held.has(t)&&this.inflight.has(t)){this.stop();const s=this.playGen;return this.waitHeld(t).then(()=>s===this.playGen?this.start(t,e,n):void 0)}return this.start(t,e,n)}waitHeld(t){const e=this.inflight.get(t);if(!e)return Promise.resolve();let n;return Promise.race([e.catch(()=>{}),new Promise(s=>{n=setTimeout(s,LP*1e3)})]).then(()=>{n!==void 0&&clearTimeout(n)})}start(t,e,n){this.stop();let s;try{s=this.open(this.touch(t)??$p(this.dir,t))}catch{return Promise.resolve()}try{s.preservesPitch=!0,s.webkitPreservesPitch=!0,s.playbackRate=is}catch{}try{s.currentTime=n}catch{}this.el=s;const r=this.trims.get(t);return new Promise(o=>{let a,c,u=()=>{},h,l,d,p,_;const v=(R,P)=>{if(P)try{s.removeEventListener(R,P)}catch{}};let g=!1;const f=()=>{g||(g=!0,a!==void 0&&(clearTimeout(a),a=void 0),c!==void 0&&(clearTimeout(c),c=void 0),v("timeupdate",h),h=void 0,v("playing",l),l=void 0,v("loadedmetadata",d),d=void 0,v("playing",p),p=void 0,v("timeupdate",_),_=void 0,v("ended",f),v("error",f),this.el===s&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),o())};this.finish=f,s.addEventListener("ended",f),s.addEventListener("error",f);let x=!1;const M=R=>{if(x||!(R.lead>0||R.tail>0))return;x=!0;const P=()=>{if(R.lead>s.currentTime)try{s.currentTime=R.lead}catch{}const A=Math.min(R.end,s.duration);if(!(R.tail>0)||!Number.isFinite(A)||A<=0)return;let E=-1;const L=()=>{if(s.currentTime>E&&s.currentTime<A){k();return}try{s.pause()}catch{}f()},k=()=>{a!==void 0&&clearTimeout(a),E=s.currentTime||0;const N=(A-E)/(s.playbackRate||1);a=setTimeout(L,Math.max(N,0)*1e3)};h=()=>{s.currentTime>=A?L():s.currentTime>0&&k()},s.addEventListener("timeupdate",h),l=()=>{k(),u()},s.addEventListener("playing",l),k()};(s.readyState??0)>=1?P():(d=P,s.addEventListener("loadedmetadata",d))};this.playing=t,this.arm=M,r&&M(r);{const R=Number.isFinite(s.duration)&&s.duration>0?s.duration:e;if(R>0){let P=-1;const A=()=>{if(s.currentTime>P){u();return}try{s.pause()}catch{}f()};u=()=>{c!==void 0&&clearTimeout(c),P=s.currentTime||0;const E=Math.max(R-P,0)/(s.playbackRate||1);c=setTimeout(A,(E+PP)*1e3)},u()}}let y=!1;const w=()=>{var R;y||(y=!0,v("playing",p),p=void 0,v("timeupdate",_),_=void 0,this.el===s&&((R=this.onStarted)==null||R.call(this,t)))};p=w,_=()=>{(s.currentTime||0)>0&&w()};let T=!1;try{s.addEventListener("playing",p),s.addEventListener("timeupdate",_),T=!0}catch{}T||(p=void 0,_=void 0);try{Promise.resolve(s.play()).then(()=>{this.blocked=!1}).catch(R=>{console.warn(`narration: play() rejected ${String((R==null?void 0:R.name)??R)} for ${t}`),Oa(R)&&(this.blocked=!0),f()})}catch(R){Oa(R)&&(this.blocked=!0),f()}T||w()})}stop(){this.playGen++;const t=this.el,e=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{t==null||t.pause()}catch{}e==null||e()}}const NP="assets/sfx/",UP=.9,kP=.35,OP=.45,BP=.06,GP=["kick-soft-1","kick-soft-2","kick-soft-3"],zP=["kick-hard-1","kick-hard-2"],Ml=.3,HP=6,VP=.25,Jp=.04,WP=.001,Qp=.125,Zl=400,jP=Zl/3e3,tm=25,XP=.5;function qP(i){if(!(i>Ml))return 0;const t=(i-Ml)/(HP-Ml);return VP*Math.min(t,1)}function Uu(){const i=globalThis,t=i.AudioContext??i.webkitAudioContext;return t?new t:null}function KP(i){const t=i.dir,e=i.make??(N=>new Audio(N)),n=i.now??(()=>Date.now()),s=i.random??Math.random,r=i.makeCtx??Uu,o=new Map,a=new Map,c=new Map;let u=null,h=!1,l=!1,d=!1,p=!1,_=!1,v=0,g=0,f;function x(N,B){const G=o.get(N);if(G)return G;if(p)return null;let U;try{U=e(`${t}${N}.mp3`)}catch{return null}try{U.loop=B,U.volume=0}catch{}return o.set(N,U),y(N,U),U}function M(){var N;if(!(u||h)){try{u=r()}catch{u=null}if(!u){h=!0;return}try{Promise.resolve((N=u.resume)==null?void 0:N.call(u)).catch(()=>{})}catch{}}}function y(N,B){if(u)try{const G=u.createGain();G.gain.value=0,u.createMediaElementSource(B).connect(G),G.connect(u.destination),a.set(N,G);try{B.volume=1}catch{}}catch{}}function w(N){try{Promise.resolve(N.play()).catch(B=>{Oa(B)&&(d=!0)})}catch(B){Oa(B)&&(d=!0)}}function T(N){try{N==null||N.pause()}catch{}}function R(N,B,G,U=0){const z=Math.max(0,Math.min(1,G)),O=a.get(N);if(!O||!u){try{B.volume=z}catch{}return}try{const Z=u.currentTime,Y=O.gain;Y.cancelScheduledValues(Z),U>0?(Y.setValueAtTime(Y.value,Z),Y.setTargetAtTime(z,Z,U)):Y.setValueAtTime(z,Z)}catch{}}function P(N,B){let G=Math.min(Math.floor(s()*B.length),B.length-1);return B.length>1&&B[G]===c.get(N)&&(G=(G+1)%B.length),c.set(N,B[G]),B[G]}function A(N,B,G=1){if(!l)return;const U=x(N,!1);if(U){R(N,U,B);try{G!==1&&(U.preservesPitch=!1,U.webkitPreservesPitch=!1),U.playbackRate=G}catch{}try{U.currentTime=0}catch{}w(U)}}function E(){f!==void 0&&(clearInterval(f),f=void 0)}function L(N){E();const B=x("ambience",!0);if(!B)return;if(N>0&&!d&&w(B),a.has("ambience")){R("ambience",B,N,jP),N<=0&&(f=setTimeout(()=>{f=void 0,T(B)},Zl));return}const G=B.volume??0,U=Math.max(1,Math.round(Zl/tm));let z=0;f=setInterval(()=>{z++;const O=G+(N-G)*Math.min(z/U,1);R("ambience",B,O),z>=U&&(E(),N<=0&&T(B))},tm)}function k(){E();for(const[N,B]of o)R(N,B,0),T(B);v=0}return{get blocked(){return d},kick(N,B=!1){if(!l)return;const G=Math.max(0,Math.min(1,N)),U=B||G>=UP,z=P(U?"hard":"soft",U?zP:GP),O=1+(s()*2-1)*BP;A(z,kP+OP*G,O)},roll(N,B){const G=n(),U=g===0,z=U?0:Math.max(G-g,0)/1e3;if(g=G,!l){v=0;return}const O=N?qP(B):0;v+=(O-v)*(U?1:1-Math.exp(-z/Jp));const Z=x("roll",!0);if(!Z)return;if(v<=WP){v=0,R("roll",Z,0),T(Z);return}const Y=a.has("roll");R("roll",Z,Y?O:v,Y?Jp:0),!d&&Z.paused!==!1&&w(Z)},whistle(){},net(){A("net",XP)},ambience(N){_=N,l&&L(N?Qp:0)},setEnabled(N){if(N&&(d=!1,M()),N!==l){if(l=N,!N){k();return}g=0,_&&L(Qp)}},dispose(){var B,G,U;p=!0,l=!1,_=!1,k();for(const z of o.values())try{(B=z.removeAttribute)==null||B.call(z,"src"),(G=z.load)==null||G.call(z)}catch{}o.clear(),a.clear();const N=u;u=null;try{Promise.resolve((U=N==null?void 0:N.close)==null?void 0:U.call(N)).catch(()=>{})}catch{}}}}const em="assets/music/",$P=.3,YP=.42;function ZP(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function JP(i,t){return i.length?i[ZP(t)%i.length]:null}function nm(i,t){return/\.(mp3|m4a)$/.test(t)?`${i}${t}`:`${i}${t}.mp3`}async function QP(i){try{const t=await fetch(`${i}index.json`);if(!t.ok)return[];const e=await t.json();return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function t2(i){const t=i.make??(T=>new Audio(T)),e=i.makeCtx??Uu;let n=null,s=null,r="",o=$P,a=!1,c=!1,u=!1,h=null,l=!1,d=null,p=null;const _=()=>o*(a?YP:1);function v(){const T=_();if(d&&h)try{const R=h.currentTime;d.gain.cancelScheduledValues(R),d.gain.setValueAtTime(T,R);return}catch{}if(n)try{n.volume=T}catch{}}function g(){var T;if(!h&&!l){try{h=e()}catch{h=null}if(!h){l=!0;return}}try{Promise.resolve((T=h==null?void 0:h.resume)==null?void 0:T.call(h)).catch(()=>{})}catch{}}function f(T){if(g(),!!h)try{const R=h.createGain();R.gain.value=_(),p=h.createMediaElementSource(T),p.connect(R),R.connect(h.destination),d=R;try{T.volume=1}catch{}}catch{}}function x(){var R,P;const T=n;n=null;try{p==null||p.disconnect()}catch{}try{d==null||d.disconnect()}catch{}if(p=null,d=null,!!T){try{T.pause()}catch{}try{(R=T.removeAttribute)==null||R.call(T,"src"),(P=T.load)==null||P.call(T)}catch{}}}function M(){var R;if(!n)return;const T=s?nm(i.dir,s):Yl;if(r!==T){r=T;try{n.src=T}catch{}try{(R=n.load)==null||R.call(n)}catch{}}}function y(T=!1){if(!(n||u)&&!(!s&&!T)){r=s?nm(i.dir,s):Yl;try{n=t(r)}catch{n=null}if(n){try{n.loop=!0,n.preload="auto"}catch{}f(n)}}}function w(){if(!(!s||u)&&(y(),!!n)){v();try{Promise.resolve(n.play()).catch(()=>{})}catch{}}}return{unlock(){if(u)return;g(),y(!0);const T=n;if(T)try{Promise.resolve(T.play()).then(()=>{if(!c)try{T.pause(),T.currentTime=0}catch{}}).catch(()=>{})}catch{}},pick(T,R){const P=R||JP(i.tracks,T);P!==s&&(s=P,n?M():y(),c&&w())},set(T){if(c=T&&!u,c)w();else try{n==null||n.pause()}catch{}},restart(){if(!u){if(c=!0,n)try{n.currentTime=0}catch{}w()}},gain(T){Number.isFinite(T)&&(o=Math.max(0,Math.min(1,T)),v())},duck(T){T!==a&&(a=T,v())},dispose(){var R;u=!0,c=!1,x();const T=h;h=null;try{Promise.resolve((R=T==null?void 0:T.close)==null?void 0:R.call(T)).catch(()=>{})}catch{}}}}function e2(i=window,t={createStage:Va,runDrill:p0}){var kn,ui,$n;const e=i.document,n=t.warm??new $A(void 0,JA()),s=t.narrator??new FP;let r=null;s.onStarted=ot=>r==null?void 0:r(ot);const o=()=>{var ot;return((ot=t.sfx)==null?void 0:ot.call(t))??KP({dir:An(NP)})};let a=o(),c=!1,u=!1;const h=ot=>{c=ot,a.setEnabled(ot),E()};let l=null,d=!1,p,_="",v,g=!1,f=0,x=null,M=!1;const y=ot=>{var Ct;try{Promise.resolve((Ct=ot==null?void 0:ot.resume)==null?void 0:Ct.call(ot)).catch(()=>{})}catch{}},w=()=>{if(!x&&!M){try{x=(t.makeCtx??Uu)()}catch{x=null}if(!x)return M=!0,null}return y(x),x},T=()=>{x&&y(x)},R=()=>{var Ct;const ot=x;x=null,M=!1;try{Promise.resolve((Ct=ot==null?void 0:ot.close)==null?void 0:Ct.call(ot)).catch(()=>{})}catch{}};let P=!1;const A=()=>d&&N&&St.playing&&xe();function E(){l==null||l.set(A())}function L(){A()?l==null||l.restart():E()}function k(){if(l||g||!d)return;g=!0;const ot=++f;(t.musicIndex??(()=>QP(An(em))))().then(Ct=>{var ct;if(!(ot!==f||l)){if(!Ct.length){g=!1;return}l=((ct=t.music)==null?void 0:ct.call(t,Ct))??t2({dir:An(em),tracks:Ct,makeCtx:w}),Z&&l.unlock(),p!==void 0&&l.gain(p),l.duck(P),_&&l.pick(_,v),E()}}).catch(()=>{g=!1})}let N=!1,B=!1;function G(){return N?!1:(N=!0,U(),a.ambience(!0),L(),!0)}function U(){B||!c||(B=!0,a.whistle())}function z(){N=!1,a.ambience(!1),a.roll(!1,0),E()}const O=()=>h(te());(kn=e==null?void 0:e.addEventListener)==null||kn.call(e,"visibilitychange",O);let Z=!1,Y=null;function lt(ot){var Ct;if(!ot){try{(Ct=Y==null?void 0:Y.remove)==null||Ct.call(Y)}catch{}Y=null;return}if(!(Y||Z||!(e!=null&&e.createElement)||!e.body))try{const ct=e.createElement("div");ct.textContent="Tap for sound",ct.setAttribute("style",'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9;pointer-events:none;padding:12px 20px;border-radius:999px;background:#C8F323;color:#0B0F10;font:700 15px/1 -apple-system,"Helvetica Neue",Arial,sans-serif;white-space:nowrap;'),e.body.appendChild(ct),Y=ct}catch{}}function Et(){var ot,Ct;if(!Z){Z=!0;try{(ot=e==null?void 0:e.removeEventListener)==null||ot.call(e,"pointerdown",Et,!0)}catch{}try{(Ct=e==null?void 0:e.removeEventListener)==null||Ct.call(e,"touchend",Et,!0)}catch{}s.unlock(),T(),l==null||l.unlock(),lt(!1),Yt=!1,h(te()),N&&U(),Wt&&(q(St.narration),W!=null&&W.script.length&&s.prefetchAll(W.script.filter(ct=>{var Bt;return!Rt.has(ct)&&ct!==((Bt=W==null?void 0:W.hook)==null?void 0:Bt.clip)}))),ce([Qt()]),Jt()}}(ui=e==null?void 0:e.addEventListener)==null||ui.call(e,"pointerdown",Et,!0),($n=e==null?void 0:e.addEventListener)==null||$n.call(e,"touchend",Et,!0);let kt=null;const it=()=>kt??(kt=(t.audioIndex??EP)(s.dir)),bt=()=>{let ot;return Promise.race([it().catch(()=>({})),new Promise(Ct=>{ot=setTimeout(()=>Ct({}),DP*1e3)})]).then(Ct=>(ot!==void 0&&clearTimeout(ot),Ct))},ht=ot=>{ot===void 0||ot===s.dir||(s.setDir(ot),kt=null)};let W=null,_t=[];const wt=ot=>{var Ct;return((Ct=St.narration[ot]??_t[ot])==null?void 0:Ct.text)??null};let Rt=new Set,Wt=!0,Yt=!1,re=[];const j=()=>Wt&&!s.blocked,xe=()=>j()&&!(e!=null&&e.hidden),te=()=>xe()&&u,Qt=()=>({type:"audio",state:Wt?s.blocked||a.blocked?"blocked":"playing":"muted",hasTake:W?W.hasAudio:!0}),qt=()=>j()&&(W==null?void 0:W.hasAudio)===!0,he=ot=>{var Ct,ct;return qt()&&(ot<0||((Ct=W==null?void 0:W.lines[ot])==null?void 0:Ct.clip)!=null||((ct=W==null?void 0:W.lines[ot])==null?void 0:ct.at)!==void 0)},Nt=()=>((W==null?void 0:W.lines)??[]).reduce((ot,Ct)=>Ct.clip!==null||Ct.at!==void 0?Ct.index:ot,-1),F=()=>((W==null?void 0:W.lines)??[]).reduce((ot,Ct)=>Ct.clip!==null||Ct.at!==void 0?ot+Ct.hold:ot,0)*is,C=(ot,Ct)=>W!=null&&W.take?CP(ot,ot.index===Nt(),s.trim(Ct)):Zp(ot.hold,Ct,s.trim(Ct));function q(ot){if(W)for(const Ct of W.lines){const ct=ot[Ct.index];ct&&(ct.hold=0)}}function $(){!s.blocked||Yt||(Yt=!0,h(!1),q(St.narration),Wt&&lt(!0),ce([{type:"audio",state:"blocked"}]))}let gt=Promise.resolve(),et=!1,Lt=0,Dt=null,Ot=null,oe=!1;s.onTrim=ot=>{if(!et||ot!==Dt)return;const Ct=s.remaining(ot);Ct!==void 0&&(Lt=performance.now()+Ct*1e3,oe&&Ot!==null&&ce([{type:"cue",index:-1,text:Ot,hold:Math.max(Ct,Mu)}]))};let At=0,Tt=!1,Zt=[];const Jt=()=>{const ot=Zt;Zt=[];for(const Ct of ot)Ct()},jt=(ot,Ct)=>new Promise(ct=>{const Bt=()=>{ot!==St.seq?ct(!1):Ct()?ct(!0):Zt.push(Bt)};Bt()});async function pe(ot){var ct;const Ct=(W==null?void 0:W.queue)??[];for(;ot===St.seq&&At<Ct.length;){const Bt=Ct[At],Gt=Bt.clip;if(!Gt||Rt.has(Gt)){At++;continue}if(!j()){const V=!Wt;if(!await jt(ot,j))return;if(V){const X=Ct.findIndex(Q=>Q.index===St.cue);X>At&&(At=X)}continue}Rt.add(Gt);const b=W!=null&&W.take?((ct=W.lines[St.cue])==null?void 0:ct.at)??0:0,m=(b>0?W==null?void 0:W.lines[St.cue]:void 0)??Bt;ce([{type:"cue",index:m.index,text:wt(m.index),hold:C(m,Gt)}]);const D=((W==null?void 0:W.lines)??[]).filter(V=>V.at!==void 0&&V.at>b&&V.index>m.index);let I=[];const S=r=V=>{V!==Gt||ot!==St.seq||(r=null,I=D.map(X=>setTimeout(()=>{ot!==St.seq||!j()||Tt||ce([{type:"cue",index:X.index,text:wt(X.index),hold:C(X,Gt)}])},(X.at-b)*1e3)))};await s.play(Gt,W!=null&&W.take?F():Bt.hold*is,b),r===S&&(r=null);for(const V of I)clearTimeout(V);if(ot!==St.seq)return;if(s.blocked){Rt.delete(Gt),$();continue}if(W!=null&&W.take&&!Wt){Rt.delete(Gt);continue}$(),At++}ot===St.seq&&Ct.length>0&&At>=Ct.length&&(Tt=!0,ce([{type:"cue",index:-1,text:null}]))}let St=eE,vt=null,K=null,Ut=Wa,dt=null,yt=Promise.resolve(),Ft=null,zt={},se=0;function ce(ot){for(const Ct of ot)Ct.type==="cue"&&(P=Ct.index>=0,l==null||l.duck(P));if(Ft)for(const Ct of ot)Ft.source.postMessage(Ct,{targetOrigin:Ft.origin==="null"||!Ft.origin?"*":Ft.origin})}let ze={},Ee=!1,me=null;const un={show:(ot,Ct,ct)=>{ze=Ct,Ee=!0,$e(Pd(St,{type:"load",drill:ot,loop:!0,...ct},(vt==null?void 0:vt.timeline.t)??0)),Ee=!1},send:ot=>ce([ot])};let Nn=null;const ci=()=>Nn??(Nn=(t.customise??(ot=>y0(()=>import("./assets/host-customise-BHRpE5Kh.js"),[],import.meta.url).then(Ct=>Ct.createCustomise(ot))))(un).catch(ot=>{throw Nn=null,ot}));function $e(ot,Ct=!1){St=ot.state;for(const ct of ot.effects)Tn(ct);ce(Ct?ot.out.filter(ct=>!(ct.type==="cue"&&he(ct.index))):ot.out)}function Tn(ot){var Ct;switch(ot.kind){case"dispose":{s.stop(),s.newGeneration(),s.closeCtx(),z(),et=!1,Jt();const ct=performance.now();Ee&&St.phase==="loading"?vt&&(me==null||me.dispose(),me=vt,vt=null):(vt==null||vt.dispose(),vt=null,me==null||me.dispose(),me=null),K==null||K.dispose(),K=null,se=performance.now()-ct,St.phase==="idle"&&(dt==null||dt.dispose(),dt=null,h(!1),a.dispose(),a=o(),l==null||l.dispose(),l=null,g=!1,f++,R(),(Ct=e==null?void 0:e.removeEventListener)==null||Ct.call(e,"visibilitychange",O));return}case"unload":{s.stop(),s.newGeneration(),z(),h(!1),et=!1,Jt(),vt==null||vt.dispose(),vt=null,me==null||me.dispose(),me=null,K==null||K.dispose(),K=null;return}case"load":{const ct=ze;ze={},s.stop(),s.newGeneration(),s.blocked=!1,W=null,_t=[],Rt=new Set,At=0,et=!1,Dt=null,Ot=null,oe=!1,Tt=!1,N=!1,B=!1,_="key"in ot.source?ot.source.key:String(ot.source.json.key??""),l?l.pick(_,v):k(),h(te()),Jt(),K==null||K.dispose(),K=null,ht(ot.narrationBase),gt=Mi(ot.seq,ot.source),yt=yt.catch(()=>{}).then(()=>li(ot.seq,ot.source,ot.loop,ot.kit,ot.squad,ct));return}case"preview":{s.stop(),s.newGeneration(),z(),h(!1),et=!1,Jt(),vt==null||vt.dispose(),vt=null,me==null||me.dispose(),me=null,Ut=ot.framing,yt=yt.catch(()=>{}).then(()=>Un(ot.seq,ot.kit,ot.squad));return}case"setKit":K==null||K.setKit(ot.kit).catch(()=>{});return;case"setFraming":Ut=ot.framing,K==null||K.setFraming(ot.framing);return;case"play":vt==null||vt.timeline.play(),vt==null||vt.stage.rule.play(),G()||E();return;case"pause":vt==null||vt.timeline.pause(),vt==null||vt.stage.rule.pause(),E();return;case"seek":vt==null||vt.timeline.seek(ot.t),vt==null||vt.stage.rule.wake();return;case"setSpeed":vt==null||vt.timeline.setSpeed(ot.x);return;case"setOverlays":vt==null||vt.overlays.set(ot.flags),vt==null||vt.stage.rule.wake();return;case"setCamera":vt==null||vt.setCamera(ot.elev,ot.az);return;case"setFollow":vt==null||vt.setFollow(ot.follow);return;case"hold":ot.on?(vt==null||vt.timeline.pause(),vt==null||vt.stage.rule.play()):St.playing?(vt==null||vt.timeline.play(),vt==null||vt.stage.rule.play(),G()):vt==null||vt.stage.rule.pause();return;case"warm":{const ct=ot.keys;re=ct.slice(0,3);const Bt=St.seq;yt.catch(()=>{}).then(()=>n.warm(ct)).then(()=>Kn(re,Bt)).catch(()=>{});return}case"setAudio":{Wt=ot.enabled,ht(ot.narrationBase),u=ot.sfx??!1,d=ot.enabled&&(ot.music??!0),ot.musicGain!==void 0&&(p=ot.musicGain,l==null||l.gain(ot.musicGain)),ot.track!==v&&(v=ot.track,_&&(l==null||l.pick(_,v))),d&&(w(),k()),Wt?(s.blocked=!1,Yt=!1,St.holdUntilMs!==null&&St.holdUntilMs!==Ea&&(St={...St,holdUntilMs:null},Tn({kind:"hold",on:!1})),W!=null&&W.script.length&&s.prefetchAll(W.script.filter(ct=>{var Bt;return!Rt.has(ct)&&ct!==((Bt=W==null?void 0:W.hook)==null?void 0:Bt.clip)})),re.length&&Kn(re,St.seq)):(s.stop(),s.newGeneration(),lt(!1)),h(te()),N&&U(),q(St.narration),ce([Qt()]),!Wt&&St.phase==="ready"&&!(oe&&et)&&ce([Au(St.narration,St.cue)]),Wt&&St.phase==="ready"&&Tt&&ce([{type:"cue",index:-1,text:null}]),Jt();return}case"stats":ce([{type:"statsReply",frames:(vt==null?void 0:vt.stage.frames())??0,t:(vt==null?void 0:vt.timeline.t)??0,playing:St.playing,phases:{...zt},warm:n.keys().length}]);return}}async function Mi(ot,Ct){if(!("key"in Ct))return;const ct=`${Ct.key}-hook`,Bt=await it();if(ot!==St.seq||!(Bt[ct]>0)||!j())return;Rt.add(ct),et=!0,Dt=ct;const Gt=s.trim(ct);Lt=performance.now()+Zp(Bt[ct]/is,ct,Gt)*1e3,await s.play(ct,Bt[ct]),et=!1,$(),ot===St.seq&&$e(ps(St,{kind:"hookEnded"}))}async function Kn(ot,Ct){if(!Wt)return;const ct=await it();if(Ct!==St.seq)return;const Bt=[];for(const Gt of ot)ct[Gt]>0&&Bt.push(Gt);await s.prefetchAll(Bt)}async function Un(ot,Ct,ct){let Bt;const Gt=Ut;try{dt??(dt=t.createStage(i.document.body)),dt.remeasure(),Bt=await(t.runPreview??yP)(i.document.body,Ct,{stage:dt,embed:!0,framing:Gt,squad:ct})}catch(b){$e(ps(St,{kind:"loadFailed",seq:ot,message:b instanceof Error?b.message:String(b)},performance.now()));return}if(ot!==St.seq||St.phase!=="loading"){Bt.dispose();return}K=Bt,Ut!==Gt&&Bt.setFraming(Ut),Bt.step(0),$e(ps(St,{kind:"loaded",seq:ot,duration:0},performance.now()))}async function li(ot,Ct,ct,Bt,Gt,b={}){var pt,ut;let m,D=[];const I=performance.now();let S=I,V=0;try{let ft=null,xt;if("key"in Ct?(ft=await n.take(Ct.key),xt=ft.json):xt=Ct.json,ot!==St.seq)return;S=performance.now(),D=uE(xt==null?void 0:xt.narration);const at=await bt();if(ot!==St.seq)return;W=b.voice?Yp(b.voice.url,D,{[b.voice.url]:b.voice.seconds}):Yp("key"in Ct?Ct.key:null,D,at),_t=D,W.hasAudio||ce([Qt()]),W.take&&pe(ot),Wt&&W.script.length&&s.prefetchAll(W.script),q(D);const J=dt!==null;dt??(dt=t.createStage(i.document.body)),dt.remeasure(),V=J?0:performance.now()-S,m=await t.runDrill(xt,i.document.body,{loop:ct,embed:!0,search:"",stage:dt,sfx:a,...Bt?{kit:Bt}:{},...Gt?{squad:Gt}:{},...(pt=b.mark)!=null&&pt.length?{mark:b.mark}:{},...ft?{schedules:ft.schedules}:{},onFrame:(st,mt)=>$e(pE(St,st,mt),!0)})}catch(ft){ot===St.seq&&(me==null||me.dispose(),me=null),$e(ps(St,{kind:"loadFailed",seq:ot,message:ft instanceof Error?ft.message:String(ft),..."key"in Ct?{key:Ct.key}:{}},performance.now()));return}if(ot!==St.seq||St.phase!=="loading"){m.dispose();return}me==null||me.dispose(),me=null,vt=m;const X=performance.now();vt.step(0),zt={dispose:se,fetch:S-I+Qi.clips,stage:V,schedule:Qi.schedule,build:Qi.build,firstFrame:performance.now()-X,total:se+performance.now()-I},se=0;let Q=0;const rt=m;if(vt.timeline.onLoop(()=>{vt===rt&&(L(),$e(ps(St,{kind:"looped",n:++Q})))}),vt.timeline.onEnd(()=>{vt===rt&&(vt==null||vt.stage.rule.pause(),$e(ps(St,{kind:"ended",t:(vt==null?void 0:vt.timeline.t)??0})))}),et&&Dt!==null){const ft=s.remaining(Dt);ft!==void 0&&(Lt=performance.now()+ft*1e3)}const nt=et?Math.max((Lt-performance.now())/1e3,0):void 0;nt!==void 0&&nt>0&&vt.setPushIn(nt),Ot=((ut=St.intro)==null?void 0:ut.text)??null;const tt=nt!==void 0&&Ot!==null;q(D),$e(ps(St,{kind:"loaded",seq:ot,duration:vt.timeline.duration,narration:D,voiced:qt(),...nt!==void 0?{hookHold:nt}:{},..."key"in Ct?{key:Ct.key}:{}},performance.now())),oe=tt,W!=null&&W.take||gt.then(()=>{ot===St.seq&&pe(ot)})}i.addEventListener("message",ot=>{if(ot.source===i)return;const Ct=fE(ot.data);if(Ct!==null){if(ot.source&&(Ft={source:ot.source,origin:ot.origin}),"error"in Ct){ce([{type:"error",code:Ct.code,message:Ct.error}]);return}ci().then(Bt=>Bt.handle(Ct)).catch(Bt=>{ce([{type:"error",code:"load_failed",message:`customise: ${Bt instanceof Error?Bt.message:String(Bt)}`}])});return}const ct=hE(ot.data);if(ct!==null){if(ot.source&&(Ft={source:ot.source,origin:ot.origin}),"error"in ct){ce([{type:"error",code:ct.code,message:ct.error}]);return}Nn&&(ct.type==="load"||ct.type==="unload"||ct.type==="dispose"||ct.type==="preview")&&Nn.then(Bt=>Bt.leave(),()=>{}),$e(Pd(St,ct,(vt==null?void 0:vt.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function n2(i,t={}){const e=t.mountEmbed??e2,n=new Set;let s=null,r=!1;const o={stages:0,mounts:0,reparents:0},a=i.doc.createElement("div");a.style.position="absolute",a.style.inset="0",a.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(a);function u(p){p.type==="hello"&&(r=!0);for(const _ of[...n])try{_(p)}catch(v){console.error("tactivo3d: listener failed",v),setTimeout(()=>{throw v})}}const h={postMessage(p){queueMicrotask(()=>u(p))}},l={document:{body:a},parent:h,addEventListener(p,_){p==="message"&&(s=_)},removeEventListener(){}};let d=!1;return{mount(p,_){o.mounts++,a.parentElement!==p&&(p.appendChild(a),d&&o.reparents++),!d&&(AS((_==null?void 0:_.base)??i.base),e(l,{createStage:v=>(o.stages++,Va(v)),runDrill:p0,...t.warm?{warm:t.warm}:{},...t.narrator?{narrator:t.narrator}:{},...t.audioIndex?{audioIndex:t.audioIndex}:{}}),d=!0)},unmount(){c.appendChild(a)},post(p){s==null||s({data:p,source:h,origin:""})},onMessage(p){return n.add(p),r&&queueMicrotask(()=>{n.has(p)&&p({type:"hello"})}),()=>{n.delete(p)}},stats:()=>({...o})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=n2({doc:document,base:new URL("./",import.meta.url).href})));export{Sg as $,cd as A,Ge as B,J1 as C,r2 as D,US as E,Hl as F,Ko as G,M1 as H,Sn as I,XI as J,s2 as K,h0 as L,Ja as M,Ua as N,xr as O,V1 as P,vr as Q,O1 as R,mi as S,k1 as T,gn as U,H as V,F1 as W,ka as X,xa as Y,rd as Z,yf as _,Jc as a,es as a0,KI as a1,An as a2,Mn as b,ni as c,y1 as d,I1 as e,P1 as f,jr as g,Be as h,U1 as i,qo as j,gi as k,kg as l,$c as m,uf as n,Kc as o,ue as p,qa as q,Eg as r,bf as s,Ww as t,df as u,km as v,N1 as w,Tg as x,_a as y,XS as z};
