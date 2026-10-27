var Bg=Object.defineProperty;var Gg=(i,t,e)=>t in i?Bg(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var an=(i,t,e)=>Gg(i,typeof t!="symbol"?t+"":t,e);const zg="modulepreload",Hg=function(i,t){return new URL(i,t).href},bu={},gI=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let o=function(h){return Promise.all(h.map(l=>Promise.resolve(l).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(e.map(h=>{if(h=Hg(h,n),h in bu)return;bu[h]=!0;const l=h.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!n)for(let x=a.length-1;x>=0;x--){const g=a[x];if(g.href===h&&(!l||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const b=document.createElement("link");if(b.rel=l?"stylesheet":zg,l||(b.as="script"),b.crossOrigin="",b.href=h,u&&b.setAttribute("nonce",u),document.head.appendChild(b),l)return new Promise((x,g)=>{b.addEventListener("load",x),b.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _I=2;const bI=2;const xI=1;const xu="attached",Vg="detached";const vI=1e3;const yI="",We="srgb",yn="srgb-linear",ma="linear",ke="srgb";const vu="300 es";class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const Gr=Math.PI/180,ir=180/Math.PI;function Qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ge(i,t,e){return Math.max(t,Math.min(e,i))}function Ul(i,t){return(i%t+t)%t}function Wg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function jg(i,t,e){return i!==t?(e-i)/(t-i):0}function zr(i,t,e){return(1-e)*i+e*t}function Xg(i,t,e,n){return zr(i,t,1-Math.exp(-e*n))}function qg(i,t=1){return t-Math.abs(Ul(i,t*2)-t)}function Kg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $g(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zg(i,t){return i+Math.random()*(t-i)}function Jg(i){return i*(.5-Math.random())}function Qg(i){i!==void 0&&(yu=i);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function t0(i){return i*Gr}function e0(i){return i*ir}function n0(i){return(i&i-1)===0&&i!==0}function i0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function s0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function r0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),d=o((t-n)/2),m=r((n-t)/2),b=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*d,a*u);break;case"YZY":i.set(c*d,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*d,a*h,a*u);break;case"XZX":i.set(a*h,c*b,c*m,a*u);break;case"YXY":i.set(c*m,a*h,c*b,a*u);break;case"ZYZ":i.set(c*b,c*m,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gp={DEG2RAD:Gr,RAD2DEG:ir,generateUUID:Qn,clamp:ge,euclideanModulo:Ul,mapLinear:Wg,inverseLerp:jg,lerp:zr,damp:Xg,pingpong:qg,smoothstep:Kg,smootherstep:$g,randInt:Yg,randFloat:Zg,randFloatSpread:Jg,seededRandom:Qg,degToRad:t0,radToDeg:e0,isPowerOfTwo:n0,ceilPowerOfTwo:i0,floorPowerOfTwo:s0,setQuaternionFromProperEuler:r0,normalize:Oe,denormalize:$n};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,s,r,o,a,c,u){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],m=n[5],b=n[8],x=s[0],g=s[3],f=s[6],v=s[1],M=s[4],y=s[7],T=s[2],R=s[5],I=s[8];return r[0]=o*x+a*v+c*T,r[3]=o*g+a*M+c*R,r[6]=o*f+a*y+c*I,r[1]=u*x+h*v+l*T,r[4]=u*g+h*M+l*R,r[7]=u*f+h*y+l*I,r[2]=d*x+m*v+b*T,r[5]=d*g+m*M+b*R,r[8]=d*f+m*y+b*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,d=a*c-h*r,m=u*r-o*c,b=e*l+n*d+s*m;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/b;return t[0]=l*x,t[1]=(s*u-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=m*x,t[7]=(n*c-u*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new ue;function _p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function o0(){const i=Xr("canvas");return i.style.display="block",i}const Mu={};function Ys(i){i in Mu||(Mu[i]=!0,console.warn(i))}function a0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function c0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function l0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Su=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u0(){const i={enabled:!0,workingColorSpace:yn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ke&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ke&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[yn]:{primaries:t,whitePoint:n,transfer:ma,toXYZ:Su,fromXYZ:Au,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:ke,toXYZ:Su,fromXYZ:Au,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}const Te=u0();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class h0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=Xr("canvas")),Ts.width=t.width,Ts.height=t.height;const n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ri(e[n]/255)*255):e[n]=Ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d0=0;class bp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?h0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class en extends ys{constructor(t=en.DEFAULT_IMAGE,e=en.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=en.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Qn(),this.name="",this.source=new bp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=300;en.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],m=c[5],b=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-x)<.01&&Math.abs(b-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+x)<.1&&Math.abs(b+g)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,y=(m+1)/2,T=(f+1)/2,R=(h+d)/4,I=(l+x)/4,D=(b+g)/4;return M>y&&M>T?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=I/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=I/r,s=D/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-b)*(g-b)+(l-x)*(l-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-b)/v,this.y=(l-x)/v,this.z=(d-h)/v,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this.w=ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this.w=ge(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p0 extends ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new bp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends p0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class xp extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class m0 extends en{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[o+0],m=r[o+1],b=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=b,t[e+3]=x;return}if(l!==x||c!==d||u!==m||h!==b){let g=1-a;const f=c*d+u*m+h*b+l*x,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,f*v);g=Math.sin(g*R)/T,a=Math.sin(a*R)/T}const y=a*v;if(c=c*g+d*y,u=u*g+m*y,h=h*g+b*y,l=l*g+x*y,g===1-a){const T=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=T,u*=T,h*=T,l*=T}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],d=r[o+1],m=r[o+2],b=r[o+3];return t[e]=a*b+h*l+c*m-u*d,t[e+1]=c*b+h*d+u*l-a*m,t[e+2]=u*b+h*m+a*d-c*l,t[e+3]=h*b-a*l-c*d-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),d=c(n/2),m=c(s/2),b=c(r/2);switch(o){case"XYZ":this._x=d*h*l+u*m*b,this._y=u*m*l-d*h*b,this._z=u*h*b+d*m*l,this._w=u*h*l-d*m*b;break;case"YXZ":this._x=d*h*l+u*m*b,this._y=u*m*l-d*h*b,this._z=u*h*b-d*m*l,this._w=u*h*l+d*m*b;break;case"ZXY":this._x=d*h*l-u*m*b,this._y=u*m*l+d*h*b,this._z=u*h*b+d*m*l,this._w=u*h*l-d*m*b;break;case"ZYX":this._x=d*h*l-u*m*b,this._y=u*m*l+d*h*b,this._z=u*h*b-d*m*l,this._w=u*h*l+d*m*b;break;case"YZX":this._x=d*h*l+u*m*b,this._y=u*m*l+d*h*b,this._z=u*h*b-d*m*l,this._w=u*h*l-d*m*b;break;case"XZY":this._x=d*h*l-u*m*b,this._y=u*m*l-d*h*b,this._z=u*h*b+d*m*l,this._w=u*h*l+d*m*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+a+l;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-u)*m,this._z=(o-s)*m}else if(n>a&&n>l){const m=2*Math.sqrt(1+n-a-l);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+u)/m}else if(a>l){const m=2*Math.sqrt(1+a-n-l);this._w=(r-u)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+l-n-a);this._w=(o-s)/m,this._x=(r+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ge(this.x,t.x,e.x),this.y=ge(this.y,t.y,e.y),this.z=ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ge(this.x,t,e),this.y=ge(this.y,t,e),this.z=ge(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ge(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new O,Eu=new Je;class mn{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(t.matrixWorld),this.expandByPoint(Wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wn),Wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),oo.subVectors(this.max,_r),ws.subVectors(t.a,_r),Rs.subVectors(t.b,_r),Cs.subVectors(t.c,_r),Bi.subVectors(Rs,ws),Gi.subVectors(Cs,Rs),ns.subVectors(ws,Cs);let e=[0,-Bi.z,Bi.y,0,-Gi.z,Gi.y,0,-ns.z,ns.y,Bi.z,0,-Bi.x,Gi.z,0,-Gi.x,ns.z,0,-ns.x,-Bi.y,Bi.x,0,-Gi.y,Gi.x,0,-ns.y,ns.x,0];return!ja(e,ws,Rs,Cs,oo)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,ws,Rs,Cs,oo))?!1:(ao.crossVectors(Bi,Gi),e=[ao.x,ao.y,ao.z],ja(e,ws,Rs,Cs,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,ro=new mn,ws=new O,Rs=new O,Cs=new O,Bi=new O,Gi=new O,ns=new O,_r=new O,oo=new O,ao=new O,is=new O;function ja(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),u=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const g0=new mn,br=new O,Xa=new O;class Gn{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):g0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;br.subVectors(t,this.center);const e=br.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(br.copy(t.center).add(Xa)),this.expandByPoint(br.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new O,qa=new O,co=new O,zi=new O,Ka=new O,lo=new O,$a=new O;class Ia{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qa.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(qa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(co),a=zi.dot(this.direction),c=-zi.dot(co),u=zi.lengthSq(),h=Math.abs(1-o*o);let l,d,m,b;if(h>0)if(l=o*c-a,d=o*a-c,b=r*h,l>=0)if(d>=-b)if(d<=b){const x=1/h;l*=x,d*=x,m=l*(l+o*d+2*a)+d*(o*l+d+2*c)+u}else d=r,l=Math.max(0,-(o*d+a)),m=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(o*d+a)),m=-l*l+d*(d+2*c)+u;else d<=-b?(l=Math.max(0,-(-o*r+a)),d=l>0?-r:Math.min(Math.max(-r,-c),r),m=-l*l+d*(d+2*c)+u):d<=b?(l=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+u):(l=Math.max(0,-(o*r+a)),d=l>0?r:Math.min(Math.max(-r,-c),r),m=-l*l+d*(d+2*c)+u);else d=o>0?-r:r,l=Math.max(0,-(o*d+a)),m=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(qa).addScaledVector(co,d),m}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(a=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){Ka.subVectors(e,t),lo.subVectors(n,t),$a.crossVectors(Ka,lo);let o=this.direction.dot($a),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);const c=a*this.direction.dot(lo.crossVectors(zi,lo));if(c<0)return null;const u=a*this.direction.dot(Ka.cross(zi));if(u<0||c+u>o)return null;const h=-a*zi.dot($a);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,o,a,c,u,h,l,d,m,b,x,g){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,d,m,b,x,g)}set(t,e,n,s,r,o,a,c,u,h,l,d,m,b,x,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=h,f[10]=l,f[14]=d,f[3]=m,f[7]=b,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=o*h,m=o*l,b=a*h,x=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=m+b*u,e[5]=d-x*u,e[9]=-a*c,e[2]=x-d*u,e[6]=b+m*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,m=c*l,b=u*h,x=u*l;e[0]=d+x*a,e[4]=b*a-m,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=m*a-b,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,m=c*l,b=u*h,x=u*l;e[0]=d-x*a,e[4]=-o*l,e[8]=b+m*a,e[1]=m+b*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,m=o*l,b=a*h,x=a*l;e[0]=c*h,e[4]=b*u-m,e[8]=d*u+x,e[1]=c*l,e[5]=x*u+d,e[9]=m*u-b,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,m=o*u,b=a*c,x=a*u;e[0]=c*h,e[4]=x-d*l,e[8]=b*l+m,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=m*l+b,e[10]=d-x*l}else if(t.order==="XZY"){const d=o*c,m=o*u,b=a*c,x=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+x,e[5]=o*h,e[9]=m*l-b,e[2]=b*l-m,e[6]=a*h,e[10]=x*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_0,t,b0)}lookAt(t,e,n){const s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Hi.crossVectors(n,Tn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Hi.crossVectors(n,Tn)),Hi.normalize(),uo.crossVectors(Tn,Hi),s[0]=Hi.x,s[4]=uo.x,s[8]=Tn.x,s[1]=Hi.y,s[5]=uo.y,s[9]=Tn.y,s[2]=Hi.z,s[6]=uo.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],m=n[13],b=n[2],x=n[6],g=n[10],f=n[14],v=n[3],M=n[7],y=n[11],T=n[15],R=s[0],I=s[4],D=s[8],A=s[12],E=s[1],P=s[5],N=s[9],B=s[13],j=s[2],H=s[6],k=s[10],z=s[14],U=s[3],J=s[7],Y=s[11],ct=s[15];return r[0]=o*R+a*E+c*j+u*U,r[4]=o*I+a*P+c*H+u*J,r[8]=o*D+a*N+c*k+u*Y,r[12]=o*A+a*B+c*z+u*ct,r[1]=h*R+l*E+d*j+m*U,r[5]=h*I+l*P+d*H+m*J,r[9]=h*D+l*N+d*k+m*Y,r[13]=h*A+l*B+d*z+m*ct,r[2]=b*R+x*E+g*j+f*U,r[6]=b*I+x*P+g*H+f*J,r[10]=b*D+x*N+g*k+f*Y,r[14]=b*A+x*B+g*z+f*ct,r[3]=v*R+M*E+y*j+T*U,r[7]=v*I+M*P+y*H+T*J,r[11]=v*D+M*N+y*k+T*Y,r[15]=v*A+M*B+y*z+T*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],m=t[14],b=t[3],x=t[7],g=t[11],f=t[15];return b*(+r*c*l-s*u*l-r*a*d+n*u*d+s*a*m-n*c*m)+x*(+e*c*m-e*u*d+r*o*d-s*o*m+s*u*h-r*c*h)+g*(+e*u*l-e*a*m-r*o*l+n*o*m+r*a*h-n*u*h)+f*(-s*a*h-e*c*l+e*a*d+s*o*l-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],m=t[11],b=t[12],x=t[13],g=t[14],f=t[15],v=l*g*u-x*d*u+x*c*m-a*g*m-l*c*f+a*d*f,M=b*d*u-h*g*u-b*c*m+o*g*m+h*c*f-o*d*f,y=h*x*u-b*l*u+b*a*m-o*x*m-h*a*f+o*l*f,T=b*l*c-h*x*c-b*a*d+o*x*d+h*a*g-o*l*g,R=e*v+n*M+s*y+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/R;return t[0]=v*I,t[1]=(x*d*r-l*g*r-x*s*m+n*g*m+l*s*f-n*d*f)*I,t[2]=(a*g*r-x*c*r+x*s*u-n*g*u-a*s*f+n*c*f)*I,t[3]=(l*c*r-a*d*r-l*s*u+n*d*u+a*s*m-n*c*m)*I,t[4]=M*I,t[5]=(h*g*r-b*d*r+b*s*m-e*g*m-h*s*f+e*d*f)*I,t[6]=(b*c*r-o*g*r-b*s*u+e*g*u+o*s*f-e*c*f)*I,t[7]=(o*d*r-h*c*r+h*s*u-e*d*u-o*s*m+e*c*m)*I,t[8]=y*I,t[9]=(b*l*r-h*x*r-b*n*m+e*x*m+h*n*f-e*l*f)*I,t[10]=(o*x*r-b*a*r+b*n*u-e*x*u-o*n*f+e*a*f)*I,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*m-e*a*m)*I,t[12]=T*I,t[13]=(h*x*s-b*l*s+b*n*d-e*x*d-h*n*g+e*l*g)*I,t[14]=(b*a*s-o*x*s-b*n*c+e*x*c+o*n*g-e*a*g)*I,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*d+e*a*d)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,d=r*u,m=r*h,b=r*l,x=o*h,g=o*l,f=a*l,v=c*u,M=c*h,y=c*l,T=n.x,R=n.y,I=n.z;return s[0]=(1-(x+f))*T,s[1]=(m+y)*T,s[2]=(b-M)*T,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(d+f))*R,s[6]=(g+v)*R,s[7]=0,s[8]=(b+M)*I,s[9]=(g-v)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],jn.copy(this);const u=1/r,h=1/o,l=1/a;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=l,jn.elements[9]*=l,jn.elements[10]*=l,e.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let m,b;if(a===2e3)m=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===2001)m=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),d=(e+t)*u,m=(n+s)*h;let b,x;if(a===2e3)b=(o+r)*l,x=-2*l;else if(a===2001)b=r*l,x=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new O,jn=new te,_0=new O(0,0,0),b0=new O(1,1,1),Hi=new O,uo=new O,Tn=new O,Tu=new te,wu=new Je;class Bn{constructor(t=0,e=0,n=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wu.setFromEuler(this),this.setFromQuaternion(wu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class vp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let x0=0;const Ru=new O,Ps=new Je,bi=new te,ho=new O,xr=new O,v0=new O,y0=new Je,Cu=new O(1,0,0),Iu=new O(0,1,0),Pu=new O(0,0,1),Lu={type:"added"},M0={type:"removed"},Ls={type:"childadded",child:null},Ya={type:"childremoved",child:null};class Ve extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new O,e=new Bn,n=new Je,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new ue}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Cu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Pu,t)}translateOnAxis(t,e){return Ru.copy(t).applyQuaternion(this.quaternion),this.position.add(Ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ho.copy(t):ho.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(xr,ho,this.up):bi.lookAt(ho,xr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(bi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(M0),Ya.child=t,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,v0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,y0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),d=o(t.skeletons),m=o(t.animations),b=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),b.length>0&&(n.nodes=b)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new O(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new O,xi=new O,Za=new O,vi=new O,Ds=new O,Fs=new O,Du=new O,Ja=new O,Qa=new O,tc=new O,ec=new de,nc=new de,ic=new de;class Un{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),xi.subVectors(n,e),Za.subVectors(t,e);const o=Xn.dot(Xn),a=Xn.dot(xi),c=Xn.dot(Za),u=xi.dot(xi),h=xi.dot(Za),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const d=1/l,m=(u*c-a*h)*d,b=(o*h-a*c)*d;return r.set(1-m-b,b,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ec.setScalar(0),nc.setScalar(0),ic.setScalar(0),ec.fromBufferAttribute(t,e),nc.fromBufferAttribute(t,n),ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ec,r.x),o.addScaledVector(nc,r.y),o.addScaledVector(ic,r.z),o}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),xi.subVectors(t,e),Xn.cross(xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,n),Fs.subVectors(r,n),Ja.subVectors(t,n);const c=Ds.dot(Ja),u=Fs.dot(Ja);if(c<=0&&u<=0)return e.copy(n);Qa.subVectors(t,s);const h=Ds.dot(Qa),l=Fs.dot(Qa);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ds,o);tc.subVectors(t,r);const m=Ds.dot(tc),b=Fs.dot(tc);if(b>=0&&m<=b)return e.copy(r);const x=m*u-c*b;if(x<=0&&u>=0&&b<=0)return a=u/(u-b),e.copy(n).addScaledVector(Fs,a);const g=h*b-m*l;if(g<=0&&l-h>=0&&m-b>=0)return Du.subVectors(r,s),a=(l-h)/(l-h+(m-b)),e.copy(s).addScaledVector(Du,a);const f=1/(g+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(Ds,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},fo={h:0,s:0,l:0};function sc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=Ul(t,1),e=ge(e,0,1),n=ge(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sc(o,r,t+1/3),this.g=sc(o,r,t),this.b=sc(o,r,t-1/3)}return Te.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=yp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ri(t.r),this.g=Ri(t.g),this.b=Ri(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Te.fromWorkingColorSpace(pn.copy(this),t),Math.round(ge(pn.r*255,0,255))*65536+Math.round(ge(pn.g*255,0,255))*256+Math.round(ge(pn.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=We){Te.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,n=pn.g,s=pn.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(fo);const n=zr(Vi.h,fo.h,e),s=zr(Vi.s,fo.s,e),r=zr(Vi.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Yt;Yt.NAMES=yp;let S0=0;class On extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tn extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new O,po=new qt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Mp extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sp extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let A0=0;const Ln=new te,rc=new Ve,Ns=new O,wn=new mn,vr=new mn,rn=new O;class qe extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_p(t)?Sp:Mp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(wn.min,vr.min),wn.expandByPoint(rn),rn.addVectors(wn.max,vr.max),wn.expandByPoint(rn)):(wn.expandByPoint(vr.min),wn.expandByPoint(vr.max))}wn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)rn.fromBufferAttribute(a,u),c&&(Ns.fromBufferAttribute(t,u),rn.add(Ns)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new O,c[D]=new O;const u=new O,h=new O,l=new O,d=new qt,m=new qt,b=new qt,x=new O,g=new O;function f(D,A,E){u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,A),l.fromBufferAttribute(n,E),d.fromBufferAttribute(r,D),m.fromBufferAttribute(r,A),b.fromBufferAttribute(r,E),h.sub(u),l.sub(u),m.sub(d),b.sub(d);const P=1/(m.x*b.y-b.x*m.y);isFinite(P)&&(x.copy(h).multiplyScalar(b.y).addScaledVector(l,-m.y).multiplyScalar(P),g.copy(l).multiplyScalar(m.x).addScaledVector(h,-b.x).multiplyScalar(P),a[D].add(x),a[A].add(x),a[E].add(x),c[D].add(g),c[A].add(g),c[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let D=0,A=v.length;D<A;++D){const E=v[D],P=E.start,N=E.count;for(let B=P,j=P+N;B<j;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new O,y=new O,T=new O,R=new O;function I(D){T.fromBufferAttribute(s,D),R.copy(T);const A=a[D];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),y.crossVectors(R,A);const P=y.dot(c[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,A=v.length;D<A;++D){const E=v[D],P=E.start,N=E.count;for(let B=P,j=P+N;B<j;B+=3)I(t.getX(B+0)),I(t.getX(B+1)),I(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,u=new O,h=new O,l=new O;if(t)for(let d=0,m=t.count;d<m;d+=3){const b=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,b),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,b),c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(b,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,d=new u.constructor(c.length*h);let m=0,b=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*h;for(let f=0;f<h;f++)d[b++]=u[m++]}return new Ce(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const d=u[h],m=t(d,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const m=u[l];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,m=l.length;d<m;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new te,ss=new Ia,mo=new Gn,Nu=new O,go=new O,_o=new O,bo=new O,oc=new O,xo=new O,Uu=new O,vo=new O;class Me extends Ve{constructor(t=new qe,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(oc.fromBufferAttribute(l,t),o?xo.addScaledVector(oc,h):xo.addScaledVector(oc.sub(e),h))}e.add(xo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(mo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(mo,Nu)===null||ss.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(Fu.copy(r).invert(),ss.copy(t.ray).applyMatrix4(Fu),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let b=0,x=d.length;b<x;b++){const g=d[b],f=o[g.materialIndex],v=Math.max(g.start,m.start),M=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,T=M;y<T;y+=3){const R=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);s=yo(this,f,t,n,u,h,l,R,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const b=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let g=b,f=x;g<f;g+=3){const v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);s=yo(this,o,t,n,u,h,l,v,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let b=0,x=d.length;b<x;b++){const g=d[b],f=o[g.materialIndex],v=Math.max(g.start,m.start),M=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=v,T=M;y<T;y+=3){const R=y,I=y+1,D=y+2;s=yo(this,f,t,n,u,h,l,R,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const b=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=b,f=x;g<f;g+=3){const v=g,M=g+1,y=g+2;s=yo(this,o,t,n,u,h,l,v,M,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function E0(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;vo.copy(a),vo.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(vo);return u<e.near||u>e.far?null:{distance:u,point:vo.clone(),object:i}}function yo(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,go),i.getVertexPosition(c,_o),i.getVertexPosition(u,bo);const h=E0(i,t,e,n,go,_o,bo,Uu);if(h){const l=new O;Un.getBarycoord(Uu,go,_o,bo,l),s&&(h.uv=Un.getInterpolatedAttribute(s,a,c,u,l,new qt)),r&&(h.uv1=Un.getInterpolatedAttribute(r,a,c,u,l,new qt)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,c,u,l,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new O,materialIndex:0};Un.getNormal(go,_o,bo,d.normal),h.face=d,h.barycoord=l}return h}class Ii extends qe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let d=0,m=0;b("z","y","x",-1,-1,n,e,t,o,r,0),b("z","y","x",1,-1,n,e,-t,o,r,1),b("x","z","y",1,1,t,n,e,s,o,2),b("x","z","y",1,-1,t,n,-e,s,o,3),b("x","y","z",1,-1,t,e,n,s,r,4),b("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(l,2));function b(x,g,f,v,M,y,T,R,I,D,A){const E=y/I,P=T/D,N=y/2,B=T/2,j=R/2,H=I+1,k=D+1;let z=0,U=0;const J=new O;for(let Y=0;Y<k;Y++){const ct=Y*P-B;for(let St=0;St<H;St++){const Ft=St*E-N;J[x]=Ft*v,J[g]=ct*M,J[f]=j,u.push(J.x,J.y,J.z),J[x]=0,J[g]=0,J[f]=R>0?1:-1,h.push(J.x,J.y,J.z),l.push(St/I),l.push(1-Y/D),z+=1}}for(let Y=0;Y<D;Y++)for(let ct=0;ct<I;ct++){const St=d+ct+H*Y,Ft=d+ct+H*(Y+1),it=d+(ct+1)+H*(Y+1),mt=d+(ct+1)+H*Y;c.push(St,Ft,mt),c.push(Ft,it,mt),U+=6}a.addGroup(m,U,A),m+=U,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function _n(i){const t={};for(let e=0;e<i.length;e++){const n=sr(i[e]);for(const s in n)t[s]=n[s]}return t}function T0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ap(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const Ol={clone:sr,merge:_n};var w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=R0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=sr(t.uniforms),this.uniformsGroups=T0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ep extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new O,Ou=new qt,ku=new qt;class xn extends Ep{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,ku),e.subVectors(ku,Ou)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,Os=1;class C0 extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Us,Os,t,e);s.layers=this.layers,this.add(s);const r=new xn(Us,Os,t,e);r.layers=this.layers,this.add(r);const o=new xn(Us,Os,t,e);o.layers=this.layers,this.add(o);const a=new xn(Us,Os,t,e);a.layers=this.layers,this.add(a);const c=new xn(Us,Os,t,e);c.layers=this.layers,this.add(c);const u=new xn(Us,Os,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,m),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Tp extends en{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class I0 extends xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new Pi({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Me(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new C0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class kl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class P0 extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new O;class Yn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Yn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wp extends On{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ks;const yr=new O,Bs=new O,Gs=new O,zs=new qt,Mr=new qt,Rp=new te,Mo=new O,Sr=new O,So=new O,Bu=new qt,ac=new qt,Gu=new qt;class L0 extends Ve{constructor(t=new wp){if(super(),this.isSprite=!0,this.type="Sprite",ks===void 0){ks=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bl(e,5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute("position",new Yn(n,3,0,!1)),ks.setAttribute("uv",new Yn(n,2,3,!1))}this.geometry=ks,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),Rp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-Gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Ao(Mo.set(-.5,-.5,0),Gs,o,Bs,s,r),Ao(Sr.set(.5,-.5,0),Gs,o,Bs,s,r),Ao(So.set(.5,.5,0),Gs,o,Bs,s,r),Bu.set(0,0),ac.set(1,0),Gu.set(1,1);let a=t.ray.intersectTriangle(Mo,Sr,So,!1,yr);if(a===null&&(Ao(Sr.set(-.5,.5,0),Gs,o,Bs,s,r),ac.set(0,1),a=t.ray.intersectTriangle(Mo,So,Sr,!1,yr),a===null))return;const c=t.ray.origin.distanceTo(yr);c<t.near||c>t.far||e.push({distance:c,point:yr.clone(),uv:Un.getInterpolation(yr,Mo,Sr,So,Bu,ac,Gu,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ao(i,t,e,n,s,r){zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Mr.x=r*zs.x-s*zs.y,Mr.y=s*zs.x+r*zs.y):Mr.copy(zs),i.copy(t),i.x+=Mr.x,i.y+=Mr.y,i.applyMatrix4(Rp)}const zu=new O,Hu=new de,Vu=new de,D0=new O,Wu=new te,Eo=new O,cc=new Gn,ju=new te,lc=new Ia;class F0 extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xu,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Eo),this.boundingBox.expandByPoint(Eo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Eo),this.boundingSphere.expandByPoint(Eo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cc.copy(this.boundingSphere),cc.applyMatrix4(s),t.ray.intersectsSphere(cc)!==!1&&(ju.copy(s).invert(),lc.copy(t.ray).applyMatrix4(ju),!(this.boundingBox!==null&&lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,lc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===xu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Hu.fromBufferAttribute(s.attributes.skinIndex,t),Vu.fromBufferAttribute(s.attributes.skinWeight,t),zu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Vu.getComponent(r);if(o!==0){const a=Hu.getComponent(r);Wu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(D0.copy(zu).applyMatrix4(Wu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Cp extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ip extends en{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,d){super(null,o,a,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new te,N0=new te;class Gl{constructor(t=[],e=[]){this.uuid=Qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new te;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:N0;Xu.multiplyMatrices(a,e[r]),Xu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Gl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ip(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Cp),this.bones.push(o),this.boneInverses.push(new te().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class ol extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new te,qu=new te,To=[],Ku=new mn,U0=new te,Ar=new Me,Er=new Gn;class O0 extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,U0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Ku.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Ku)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Er.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Er.copy(this.boundingSphere),Er.applyMatrix4(n),t.ray.intersectsSphere(Er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),qu.multiplyMatrices(n,Hs),Ar.matrixWorld=qu,Ar.raycast(t,To);for(let o=0,a=To.length;o<a;o++){const c=To[o];c.instanceId=r,c.object=this,e.push(c)}To.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ip(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const uc=new O,k0=new O,B0=new ue;class hs{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=uc.subVectors(n,e).cross(k0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||B0.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Gn,wo=new O;class zl{constructor(t=new hs,e=new hs,n=new hs,s=new hs,r=new hs,o=new hs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],m=s[8],b=s[9],x=s[10],g=s[11],f=s[12],v=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,d-u,g-m,y-f).normalize(),n[1].setComponents(c+r,d+u,g+m,y+f).normalize(),n[2].setComponents(c+o,d+h,g+b,y+v).normalize(),n[3].setComponents(c-o,d-h,g-b,y-v).normalize(),n[4].setComponents(c-a,d-l,g-x,y-M).normalize(),e===2e3)n[5].setComponents(c+a,d+l,g+x,y+M).normalize();else if(e===2001)n[5].setComponents(a,l,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(wo.x=s.normal.x>0?t.max.x:t.min.x,wo.y=s.normal.y>0?t.max.y:t.min.y,wo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pp extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new O,_a=new O,$u=new te,Tr=new Ia,Ro=new Gn,hc=new O,Yu=new O;class Hl extends Ve{constructor(t=new qe,e=new Pp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),_a.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;$u.copy(s).invert(),Tr.copy(t.ray).applyMatrix4($u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),b=Math.min(h.count,o.start+o.count);for(let x=m,g=b-1;x<g;x+=u){const f=h.getX(x),v=h.getX(x+1),M=Co(this,t,Tr,c,f,v);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(b-1),g=h.getX(m),f=Co(this,t,Tr,c,x,g);f&&e.push(f)}}else{const m=Math.max(0,o.start),b=Math.min(d.count,o.start+o.count);for(let x=m,g=b-1;x<g;x+=u){const f=Co(this,t,Tr,c,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=Co(this,t,Tr,c,b-1,m);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Co(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(ga.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(ga,_a,hc,Yu)>n)return;hc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(hc);if(!(c<t.near||c>t.far))return{distance:c,point:Yu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Zu=new O,Ju=new O;class G0 extends Hl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Zu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Zu.distanceTo(Ju);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z0 extends Hl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Lp extends On{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qu=new te,al=new Ia,Io=new Gn,Po=new O;class H0 extends Ve{constructor(t=new qe,e=new Lp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,t.ray.intersectsSphere(Io)===!1)return;Qu.copy(s).invert(),al.copy(t.ray).applyMatrix4(Qu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let b=d,x=m;b<x;b++){const g=u.getX(b);Po.fromBufferAttribute(l,g),th(Po,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let b=d,x=m;b<x;b++)Po.fromBufferAttribute(l,b),th(Po,b,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function th(i,t,e,n,s,r,o){const a=al.distanceSqToPoint(i);if(a<e){const c=new O;al.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vn extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}class In extends en{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dp extends en{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vl extends qe{constructor(t=[new qt(0,-.5),new qt(.5,0),new qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ge(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new O,d=new qt,m=new O,b=new O,x=new O;let g=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,m.x=f*1,m.y=-g,m.z=f*0,x.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,m.x=f*1,m.y=-g,m.z=f*0,b.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),c.push(m.x,m.y,m.z),x.copy(b)}for(let v=0;v<=e;v++){const M=n+v*h*s,y=Math.sin(M),T=Math.cos(M);for(let R=0;R<=t.length-1;R++){l.x=t[R].x*y,l.y=t[R].y,l.z=t[R].x*T,o.push(l.x,l.y,l.z),d.x=v/e,d.y=R/(t.length-1),a.push(d.x,d.y);const I=c[3*R+0]*y,D=c[3*R+1],A=c[3*R+0]*T;u.push(I,D,A)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const y=M+v*t.length,T=y,R=y+t.length,I=y+t.length+1,D=y+1;r.push(T,R,D),r.push(I,D,R)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.points,t.segments,t.phiStart,t.phiLength)}}class Wl extends qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new O,h=new qt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const m=n+l/e*s;u.x=t*Math.cos(m),u.y=t*Math.sin(m),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ba extends qe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],m=[];let b=0;const x=[],g=n/2;let f=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(m,2));function v(){const y=new O,T=new O;let R=0;const I=(e-t)/n;for(let D=0;D<=r;D++){const A=[],E=D/r,P=E*(e-t)+t;for(let N=0;N<=s;N++){const B=N/s,j=B*c+a,H=Math.sin(j),k=Math.cos(j);T.x=P*H,T.y=-E*n+g,T.z=P*k,l.push(T.x,T.y,T.z),y.set(H,I,k).normalize(),d.push(y.x,y.y,y.z),m.push(B,1-E),A.push(b++)}x.push(A)}for(let D=0;D<s;D++)for(let A=0;A<r;A++){const E=x[A][D],P=x[A+1][D],N=x[A+1][D+1],B=x[A][D+1];(t>0||A!==0)&&(h.push(E,P,B),R+=3),(e>0||A!==r-1)&&(h.push(P,N,B),R+=3)}u.addGroup(f,R,0),f+=R}function M(y){const T=b,R=new qt,I=new O;let D=0;const A=y===!0?t:e,E=y===!0?1:-1;for(let N=1;N<=s;N++)l.push(0,g*E,0),d.push(0,E,0),m.push(.5,.5),b++;const P=b;for(let N=0;N<=s;N++){const j=N/s*c+a,H=Math.cos(j),k=Math.sin(j);I.x=A*k,I.y=g*E,I.z=A*H,l.push(I.x,I.y,I.z),d.push(0,E,0),R.x=H*.5+.5,R.y=k*.5*E+.5,m.push(R.x,R.y),b++}for(let N=0;N<s;N++){const B=T+N,j=P+N;y===!0?h.push(j,j+1,B):h.push(j+1,j,B),D+=3}u.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class kn extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,d=e/c,m=[],b=[],x=[],g=[];for(let f=0;f<h;f++){const v=f*d-o;for(let M=0;M<u;M++){const y=M*l-r;b.push(y,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const M=v+u*f,y=v+u*(f+1),T=v+1+u*(f+1),R=v+1+u*f;m.push(M,y,R),m.push(y,T,R)}this.setIndex(m),this.setAttribute("position",new je(b,3)),this.setAttribute("normal",new je(x,3)),this.setAttribute("uv",new je(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pa extends qe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,m=new O,b=new qt;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const f=r+g/n*o;m.x=l*Math.cos(f),m.y=l*Math.sin(f),c.push(m.x,m.y,m.z),u.push(0,0,1),b.x=(m.x/e+1)/2,b.y=(m.y/e+1)/2,h.push(b.x,b.y)}l+=d}for(let x=0;x<s;x++){const g=x*(n+1);for(let f=0;f<n;f++){const v=f+g,M=v,y=v+n+1,T=v+n+2,R=v+1;a.push(M,y,R),a.push(y,T,R)}}this.setIndex(a),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class V0 extends qe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new O,r=new O;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,m=l.count;for(let b=d,x=d+m;b<x;b+=3)for(let g=0;g<3;g++){const f=a.getX(b+g),v=a.getX(b+(g+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,v),eh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),eh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new je(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function eh(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Ms extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ui extends Ms{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class qr extends On{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class W0 extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j0 extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ps(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Fp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Np(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function cl(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function jl(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function X0(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let m=0;m<u.times.length;++m){const b=u.times[m]*s;if(!(b<e||b>=n)){l.push(u.times[m]);for(let x=0;x<h;++x)d.push(u.values[m*h+x])}}l.length!==0&&(u.times=ps(l,u.times.constructor),u.values=ps(d,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function q0(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(f){return f.name===a.name&&f.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const m=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=m/3);const b=a.times.length-1;let x;if(r<=a.times[0]){const f=h,v=l-h;x=a.values.slice(f,v)}else if(r>=a.times[b]){const f=b*l+h,v=f+l-h;x=a.values.slice(f,v)}else{const f=a.createInterpolant(),v=h,M=l-h;f.evaluate(r),x=f.resultBuffer.slice(v,M)}c==="quaternion"&&new Je().fromArray(x).normalize().conjugate().toArray(x);const g=u.times.length;for(let f=0;f<g;++f){const v=f*m+d;if(c==="quaternion")Je.multiplyQuaternionsFlat(u.values,v,x,0,u.values,v);else{const M=m-d*2;for(let y=0;y<M;++y)u.values[v+y]-=x[y]}}}return i.blendMode=2501,i}const K0={convertArray:ps,isTypedArray:Fp,getKeyframeOrder:Np,sortedArray:cl,flattenJSON:jl,subclip:X0,makeClipAdditive:q0};class to{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $0 extends to{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,m=this._weightNext,b=(n-e)/(s-e),x=b*b,g=x*b,f=-d*g+2*d*x-d*b,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*b+1,M=(-1-m)*g+(1.5+m)*x+.5*b,y=m*g-m*x;for(let T=0;T!==a;++T)r[T]=f*o[h+T]+v*o[u+T]+M*o[c+T]+y*o[l+T];return r}}class Up extends to{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*l+o[c+d]*h;return r}}class Y0 extends to{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class hi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ps(e,this.TimeBufferType),this.values=ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ps(t.times,Array),values:ps(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Y0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Up(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Fp(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,d=l-n,m=l+n;for(let b=0;b!==n;++b){const x=e[l+b];if(x!==e[d+b]||x!==e[m+b]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[l+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=2301;class lr extends hi{constructor(t,e,n){super(t,e,n)}}lr.prototype.ValueTypeName="bool";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=2300;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;class Op extends hi{}Op.prototype.ValueTypeName="color";class rr extends hi{}rr.prototype.ValueTypeName="number";class Z0 extends to{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)Je.slerpFlat(r,0,o,u-a,o,u,c);return r}}class or extends hi{InterpolantFactoryMethodLinear(t){return new Z0(this.times,this.values,this.getValueSize(),t)}}or.prototype.ValueTypeName="quaternion";or.prototype.InterpolantFactoryMethodSmooth=void 0;class ur extends hi{constructor(t,e,n){super(t,e,n)}}ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=2300;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends hi{}ar.prototype.ValueTypeName="vector";class ll{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Q0(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(hi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Np(c);c=cl(c,1,h),u=cl(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new rr(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,m,b,x){if(m.length!==0){const g=[],f=[];jl(m,g,f,b),g.length!==0&&x.push(new l(d,g,f))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let b;for(b=0;b<d.length;b++)if(d[b].morphTargets)for(let x=0;x<d[b].morphTargets.length;x++)m[d[b].morphTargets[x]]=-1;for(const x in m){const g=[],f=[];for(let v=0;v!==d[b].morphTargets.length;++v){const M=d[b];g.push(M.time),f.push(M.morphTarget===x?1:0)}s.push(new rr(".morphTargetInfluence["+x+"]",g,f))}c=m.length*o}else{const m=".bones["+e[l].name+"]";n(ar,m+".position",d,"pos",s),n(or,m+".quaternion",d,"rot",s),n(ar,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function J0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return ar;case"color":return Op;case"quaternion":return or;case"bool":case"boolean":return lr;case"string":return ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Q0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=J0(i.type);if(i.times===void 0){const e=[],n=[];jl(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const qi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class t_{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const m=u[l],b=u[l+1];if(m.global&&(m.lastIndex=0),m.test(h))return b}return null}}}const e_=new t_;class hr{constructor(t){this.manager=t!==void 0?t:e_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class n_ extends Error{constructor(t,e){super(t),this.response=e}}class kp extends hr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=qi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:s});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=yi[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=d?parseInt(d):0,b=m!==0;let x=0;const g=new ReadableStream({start(f){v();function v(){l.read().then(({done:M,value:y})=>{if(M)f.close();else{x+=y.byteLength;const T=new ProgressEvent("progress",{lengthComputable:b,loaded:x,total:m});for(let R=0,I=h.length;R<I;R++){const D=h[R];D.onProgress&&D.onProgress(T)}f.enqueue(y),v()}},M=>{f.error(M)})}}});return new Response(g)}else throw new n_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),d=l&&l[1]?l[1].toLowerCase():void 0,m=new TextDecoder(d);return u.arrayBuffer().then(b=>m.decode(b))}}}).then(u=>{qi.add(t,u);const h=yi[t];delete yi[t];for(let l=0,d=h.length;l<d;l++){const m=h[l];m.onLoad&&m.onLoad(u)}}).catch(u=>{const h=yi[t];if(h===void 0)throw this.manager.itemError(t),u;delete yi[t];for(let l=0,d=h.length;l<d;l++){const m=h[l];m.onError&&m.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class i_ extends hr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Xr("img");function c(){h(),qi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Bp extends hr{constructor(t){super(t)}load(t,e,n,s){const r=new en,o=new i_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class eo extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class s_ extends eo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const dc=new te,nh=new O,ih=new O;class Xl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zl,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class r_ extends Xl{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ir*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class o_ extends eo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new r_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sh=new te,wr=new O,fc=new O;class a_ extends Xl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(t.matrixWorld),n.position.copy(wr),fc.copy(n.position),fc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fc),n.updateMatrixWorld(),s.makeTranslation(-wr.x,-wr.y,-wr.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}}class c_ extends eo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new a_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ql extends Ep{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class l_ extends Xl{constructor(){super(new ql(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gp extends eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new l_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MI extends eo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class u_ extends qe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class h_ extends hr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return qi.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),qi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});qi.add(t,c),r.manager.itemStart(t)}}class d_ extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class f_{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){Je.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;Je.multiplyQuaternionsFlat(t,o,t,e,t,n),Je.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const Kl="\\[\\]\\.:\\/",p_=new RegExp("["+Kl+"]","g"),$l="[^"+Kl+"]",m_="[^"+Kl.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",$l),__=/(WCOD+)?/.source.replace("WCOD",m_),b_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),x_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),v_=new RegExp("^"+g_+__+b_+x_+"$"),y_=["material","materials","bones","map"];class M_{constructor(t,e,n){const s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ie{constructor(t,e,n){this.path=e,this.parsedPath=n||Ie.parseTrackName(e),this.node=Ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ie.Composite(t,e,n):new Ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(t){const e=v_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);y_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ie.Composite=M_;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class S_{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const A_=new Float32Array(1);class E_ extends ys{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],m=d.name;let b=h[m];if(b!==void 0)++b.referenceCount,o[l]=b;else{if(b=o[l],b!==void 0){b._cacheIndex===null&&(++b.referenceCount,this._addInactiveBinding(b,c,m));continue}const x=e&&e._propertyBindings[l].binding.parsedPath;b=new f_(Ie.create(n,m,x),d.ValueTypeName,d.getValueSize()),++b.referenceCount,this._addInactiveBinding(b,c,m),o[l]=b}a[l].resultBuffer=b.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Up(new Float32Array(2),new Float32Array(2),1,A_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?ll.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new S_(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?ll.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class ul extends Bl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const rh=new O,Lo=new O;class T_{constructor(t=new O,e=new O){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){rh.subVectors(t,this.start),Lo.subVectors(this.end,this.start);const n=Lo.dot(Lo);let r=Lo.dot(rh)/n;return e&&(r=ge(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function oh(i,t,e,n){const s=w_(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w_(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function R_(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((m,b)=>m.start-b.start);let d=0;for(let m=1;m<l.length;m++){const b=l[d],x=l[m];x.start<=b.start+b.count+1?b.count=Math.max(b.count,x.start+x.count-b.start):(++d,l[d]=x)}l.length=d+1;for(let m=0,b=l.length;m<b;m++){const x=l[m];i.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var C_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I_=`#ifdef USE_ALPHAHASH
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
#endif`,P_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N_=`#ifdef USE_AOMAP
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
#endif`,U_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
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
#endif`,k_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H_=`#ifdef USE_IRIDESCENCE
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
#endif`,V_=`#ifdef USE_BUMPMAP
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
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J_=`#define PI 3.141592653589793
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
} // validated`,Q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tb=`vec3 transformedNormal = objectNormal;
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
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
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
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,wb=`struct PhysicalMaterial {
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kb=`#if defined( USE_POINTS_UV )
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
#endif`,Bb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zb=`#ifdef USE_NORMALMAP
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
#endif`,Jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fx=`float getShadowMask() {
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
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
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
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Nx=`#if DEPTH_PACKING == 3200
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
}`,Ux=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Hx=`#include <common>
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
}`,Vx=`uniform vec3 diffuse;
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
}`,Wx=`#define LAMBERT
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
}`,jx=`#define LAMBERT
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
}`,Xx=`#define MATCAP
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
}`,qx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,$x=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Zx=`#define PHONG
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
}`,Jx=`#define STANDARD
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
}`,Qx=`#define STANDARD
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
}`,tv=`#define TOON
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
}`,ev=`#define TOON
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
}`,nv=`uniform float size;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,ov=`uniform float rotation;
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
}`,av=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:C_,alphahash_pars_fragment:I_,alphamap_fragment:P_,alphamap_pars_fragment:L_,alphatest_fragment:D_,alphatest_pars_fragment:F_,aomap_fragment:N_,aomap_pars_fragment:U_,batching_pars_vertex:O_,batching_vertex:k_,begin_vertex:B_,beginnormal_vertex:G_,bsdfs:z_,iridescence_fragment:H_,bumpmap_pars_fragment:V_,clipping_planes_fragment:W_,clipping_planes_pars_fragment:j_,clipping_planes_pars_vertex:X_,clipping_planes_vertex:q_,color_fragment:K_,color_pars_fragment:$_,color_pars_vertex:Y_,color_vertex:Z_,common:J_,cube_uv_reflection_fragment:Q_,defaultnormal_vertex:tb,displacementmap_pars_vertex:eb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ob,envmap_fragment:ab,envmap_common_pars_fragment:cb,envmap_pars_fragment:lb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:yb,envmap_vertex:hb,fog_vertex:db,fog_pars_vertex:fb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:bb,lights_lambert_pars_fragment:xb,lights_pars_begin:vb,lights_toon_fragment:Mb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Ab,lights_phong_pars_fragment:Eb,lights_physical_fragment:Tb,lights_physical_pars_fragment:wb,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:Ib,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Fb,map_fragment:Nb,map_pars_fragment:Ub,map_particle_fragment:Ob,map_particle_pars_fragment:kb,metalnessmap_fragment:Bb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:zb,morphcolor_vertex:Hb,morphnormal_vertex:Vb,morphtarget_pars_vertex:Wb,morphtarget_vertex:jb,normal_fragment_begin:Xb,normal_fragment_maps:qb,normal_pars_fragment:Kb,normal_pars_vertex:$b,normal_vertex:Yb,normalmap_pars_fragment:Zb,clearcoat_normal_fragment_begin:Jb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:tx,iridescence_pars_fragment:ex,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:rx,dithering_fragment:ox,dithering_pars_fragment:ax,roughnessmap_fragment:cx,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:hx,shadowmap_vertex:dx,shadowmask_pars_fragment:fx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:_x,specularmap_fragment:bx,specularmap_pars_fragment:xx,tonemapping_fragment:vx,tonemapping_pars_fragment:yx,transmission_fragment:Mx,transmission_pars_fragment:Sx,uv_pars_fragment:Ax,uv_pars_vertex:Ex,uv_vertex:Tx,worldpos_vertex:wx,background_vert:Rx,background_frag:Cx,backgroundCube_vert:Ix,backgroundCube_frag:Px,cube_vert:Lx,cube_frag:Dx,depth_vert:Fx,depth_frag:Nx,distanceRGBA_vert:Ux,distanceRGBA_frag:Ox,equirect_vert:kx,equirect_frag:Bx,linedashed_vert:Gx,linedashed_frag:zx,meshbasic_vert:Hx,meshbasic_frag:Vx,meshlambert_vert:Wx,meshlambert_frag:jx,meshmatcap_vert:Xx,meshmatcap_frag:qx,meshnormal_vert:Kx,meshnormal_frag:$x,meshphong_vert:Yx,meshphong_frag:Zx,meshphysical_vert:Jx,meshphysical_frag:Qx,meshtoon_vert:tv,meshtoon_frag:ev,points_vert:nv,points_frag:iv,shadow_vert:sv,shadow_frag:rv,sprite_vert:ov,sprite_frag:av},Dt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},An={basic:{uniforms:_n([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:_n([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:_n([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:_n([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:_n([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:_n([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:_n([Dt.points,Dt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:_n([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:_n([Dt.common,Dt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:_n([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:_n([Dt.sprite,Dt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:_n([Dt.common,Dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:_n([Dt.lights,Dt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};An.physical={uniforms:_n([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Do={r:0,b:0,g:0},os=new Bn,cv=new te;function lv(i,t,e,n,s,r,o){const a=new Yt(0);let c=r===!0?0:1,u,h,l=null,d=0,m=null;function b(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function x(M){let y=!1;const T=b(M);T===null?f(a,c):T&&T.isColor&&(f(T,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,y){const T=b(y);T&&(T.isCubeTexture||T.mapping===306)?(h===void 0&&(h=new Me(new Ii(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:sr(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cv.makeRotationFromEuler(os)),h.material.toneMapped=Te.getTransfer(T.colorSpace)!==ke,(l!==T||d!==T.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,l=T,d=T.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Me(new kn(2,2),new Pi({name:"BackgroundMaterial",uniforms:sr(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Te.getTransfer(T.colorSpace)!==ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(l!==T||d!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,l=T,d=T.version,m=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function f(M,y){M.getRGB(Do,Ap(i)),n.buffers.color.setClear(Do.r,Do.g,Do.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:x,addToRenderList:g,dispose:v}}function uv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,P,N,B,j){let H=!1;const k=l(B,N,P);r!==k&&(r=k,u(r.object)),H=m(E,B,N,j),H&&b(E,B,N,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(E,P,N,B),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function u(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function l(E,P,N){const B=N.wireframe===!0;let j=n[E.id];j===void 0&&(j={},n[E.id]=j);let H=j[P.id];H===void 0&&(H={},j[P.id]=H);let k=H[B];return k===void 0&&(k=d(c()),H[B]=k),k}function d(E){const P=[],N=[],B=[];for(let j=0;j<e;j++)P[j]=0,N[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:E,attributes:{},index:null}}function m(E,P,N,B){const j=r.attributes,H=P.attributes;let k=0;const z=N.getAttributes();for(const U in z)if(z[U].location>=0){const Y=j[U];let ct=H[U];if(ct===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor)),Y===void 0||Y.attribute!==ct||ct&&Y.data!==ct.data)return!0;k++}return r.attributesNum!==k||r.index!==B}function b(E,P,N,B){const j={},H=P.attributes;let k=0;const z=N.getAttributes();for(const U in z)if(z[U].location>=0){let Y=H[U];Y===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(Y=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(Y=E.instanceColor));const ct={};ct.attribute=Y,Y&&Y.data&&(ct.data=Y.data),j[U]=ct,k++}r.attributes=j,r.attributesNum=k,r.index=B}function x(){const E=r.newAttributes;for(let P=0,N=E.length;P<N;P++)E[P]=0}function g(E){f(E,0)}function f(E,P){const N=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;N[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),j[E]!==P&&(i.vertexAttribDivisor(E,P),j[E]=P)}function v(){const E=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==E[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function M(E,P,N,B,j,H,k){k===!0?i.vertexAttribIPointer(E,P,N,j,H):i.vertexAttribPointer(E,P,N,B,j,H)}function y(E,P,N,B){x();const j=B.attributes,H=N.getAttributes(),k=P.defaultAttributeValues;for(const z in H){const U=H[z];if(U.location>=0){let J=j[z];if(J===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(J=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(J=E.instanceColor)),J!==void 0){const Y=J.normalized,ct=J.itemSize,St=t.get(J);if(St===void 0)continue;const Ft=St.buffer,it=St.type,mt=St.bytesPerElement,ut=it===i.INT||it===i.UNSIGNED_INT||J.gpuType===1013;if(J.isInterleavedBufferAttribute){const Q=J.data,gt=Q.stride,At=J.offset;if(Q.isInstancedInterleavedBuffer){for(let wt=0;wt<U.locationSize;wt++)f(U.location+wt,Q.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let wt=0;wt<U.locationSize;wt++)g(U.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let wt=0;wt<U.locationSize;wt++)M(U.location+wt,ct/U.locationSize,it,Y,gt*mt,(At+ct/U.locationSize*wt)*mt,ut)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<U.locationSize;Q++)f(U.location+Q,J.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<U.locationSize;Q++)g(U.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Q=0;Q<U.locationSize;Q++)M(U.location+Q,ct/U.locationSize,it,Y,ct*mt,ct/U.locationSize*Q*mt,ut)}}else if(k!==void 0){const Y=k[z];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(U.location,Y);break;case 3:i.vertexAttrib3fv(U.location,Y);break;case 4:i.vertexAttrib4fv(U.location,Y);break;default:i.vertexAttrib1fv(U.location,Y)}}}}v()}function T(){D();for(const E in n){const P=n[E];for(const N in P){const B=P[N];for(const j in B)h(B[j].object),delete B[j];delete P[N]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const N in P){const B=P[N];for(const j in B)h(B[j].object),delete B[j];delete P[N]}delete n[E.id]}function I(E){for(const P in n){const N=n[P];if(N[E.id]===void 0)continue;const B=N[E.id];for(const j in B)h(B[j].object),delete B[j];delete N[E.id]}}function D(){A(),o=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function hv(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let m=0;for(let b=0;b<l;b++)m+=h[b];e.update(m,n,1)}function c(u,h,l,d){if(l===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let b=0;b<u.length;b++)o(u[b],h[b],d[b]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let b=0;for(let x=0;x<l;x++)b+=h[x]*d[x];e.update(b,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==1023&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==1009&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==1015&&!D)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=b>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:b,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:T,maxSamples:R}}function fv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new hs,a=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const m=l.length!==0||d||n!==0||s;return s=d,n=l.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,m){const b=l.clippingPlanes,x=l.clipIntersection,g=l.clipShadows,f=i.get(l);if(!s||b===null||b.length===0||r&&!g)r?h(null):u();else{const v=r?0:n,M=v*4;let y=f.clippingState||null;c.value=y,y=h(b,d,M,m);for(let T=0;T!==M;++T)y[T]=e[T];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,m,b){const x=l!==null?l.length:0;let g=null;if(x!==0){if(g=c.value,b!==!0||g===null){const f=m+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let M=0,y=m;M!==x;++M,y+=4)o.copy(l[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function pv(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new I0(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zs=4,ah=[.125,.215,.35,.446,.526,.582],fs=20,pc=new ql,ch=new Yt;let mc=null,gc=0,_c=0,bc=!1;const ds=(1+Math.sqrt(5))/2,Vs=1/ds,lh=[new O(-ds,Vs,0),new O(ds,Vs,0),new O(-Vs,0,ds),new O(Vs,0,ds),new O(0,ds,-Vs),new O(0,ds,Vs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class uh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=bc,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:yn,depthBuffer:!1},s=hh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(r)),this._blurMaterial=gv(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,pc)}_sceneToCubeUV(t,e,n,s){const a=new xn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(ch),h.toneMapping=0,h.autoClear=!1;const m=new tn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),b=new Me(new Ii,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(ch),x=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,u[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,u[f]));const M=this._cubeSize;Fo(s,v*M,f>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(b,a),h.render(t,a)}b.geometry.dispose(),b.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Fo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,pc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=lh[(s-r-1)%lh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Me(this._lodPlanes[s],u),d=u.uniforms,m=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*fs-1),x=r/b,g=isFinite(r)?1+Math.floor(h*x):fs;g>fs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fs}`);const f=[];let v=0;for(let I=0;I<fs;++I){const D=I/x,A=Math.exp(-D*D/2);f.push(A),I===0?v+=A:I<g&&(v+=2*A)}for(let I=0;I<f.length;I++)f[I]=f[I]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=b,d.mipInt.value=M-n;const y=this._sizeLods[s],T=3*y*(s>M-Zs?s-M+Zs:0),R=4*(this._cubeSize-y);Fo(e,T,R,3*y,2*y),c.setRenderTarget(e),c.render(l,pc)}}function mv(i){const t=[],e=[],n=[];let s=i;const r=i-Zs+1+ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zs?c=ah[o-i+Zs-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],m=6,b=6,x=3,g=2,f=1,v=new Float32Array(x*b*m),M=new Float32Array(g*b*m),y=new Float32Array(f*b*m);for(let R=0;R<m;R++){const I=R%3*2/3-1,D=R>2?0:-1,A=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];v.set(A,x*b*R),M.set(d,g*b*R);const E=[R,R,R,R,R,R];y.set(E,f*b*R)}const T=new qe;T.setAttribute("position",new Ce(v,x)),T.setAttribute("uv",new Ce(M,g)),T.setAttribute("faceIndex",new Ce(y,f)),t.push(T),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hh(i,t,e){const n=new xs(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gv(i,t,e){const n=new Float32Array(fs),s=new O(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function dh(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function fh(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function _v(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const d=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new uh(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const m=a.image;return u&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new uh(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xv(i,t,e,n){const s={},r=new WeakMap;function o(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const b in d.attributes)t.remove(d.attributes[b]);d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(l,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER)}function u(l){const d=[],m=l.index,b=l.attributes.position;let x=0;if(m!==null){const v=m.array;x=m.version;for(let M=0,y=v.length;M<y;M+=3){const T=v[M+0],R=v[M+1],I=v[M+2];d.push(T,R,R,I,I,T)}}else if(b!==void 0){const v=b.array;x=b.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const T=M+0,R=M+1,I=M+2;d.push(T,R,R,I,I,T)}}else return;const g=new(_p(d)?Sp:Mp)(d,1);g.version=x;const f=r.get(l);f&&t.remove(f),r.set(l,g)}function h(l){const d=r.get(l);if(d){const m=l.index;m!==null&&d.version<m.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function vv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*o),e.update(m,n,1)}function u(d,m,b){b!==0&&(i.drawElementsInstanced(n,m,r,d*o,b),e.update(m,n,b))}function h(d,m,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,b);let g=0;for(let f=0;f<b;f++)g+=m[f];e.update(g,n,1)}function l(d,m,b,x){if(b===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)u(d[f]/o,m[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,x,0,b);let f=0;for(let v=0;v<b;v++)f+=m[v]*x[v];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function yv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mv(i,t,e){const n=new WeakMap,s=new de;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==l){let A=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),b===!0&&(M=2),x===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*T*4*l),I=new xp(R,y,T,l);I.type=1015,I.needsUpdate=!0;const D=M*4;for(let E=0;E<l;E++){const P=g[E],N=f[E],B=v[E],j=y*T*4*E;for(let H=0;H<P.count;H++){const k=H*D;m===!0&&(s.fromBufferAttribute(P,H),R[j+k+0]=s.x,R[j+k+1]=s.y,R[j+k+2]=s.z,R[j+k+3]=0),b===!0&&(s.fromBufferAttribute(N,H),R[j+k+4]=s.x,R[j+k+5]=s.y,R[j+k+6]=s.z,R[j+k+7]=0),x===!0&&(s.fromBufferAttribute(B,H),R[j+k+8]=s.x,R[j+k+9]=s.y,R[j+k+10]=s.z,R[j+k+11]=B.itemSize===4?s.w:1)}}d={count:l,texture:I,size:new qt(y,T)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let x=0;x<u.length;x++)m+=u[x];const b=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sv(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const Hp=new en,ph=new Dp(1,1),Vp=new xp,Wp=new m0,jp=new Tp,mh=[],gh=[],_h=new Float32Array(16),bh=new Float32Array(9),xh=new Float32Array(4);function dr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=mh[s];if(r===void 0&&(r=new Float32Array(s),mh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function sn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function La(i,t){let e=gh[t];e===void 0&&(e=new Int32Array(t),gh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Av(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),sn(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),sn(e,t)}}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),sn(e,t)}}function Rv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;xh.set(n),i.uniformMatrix2fv(this.addr,!1,xh),sn(e,n)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),sn(e,n)}}function Iv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),sn(e,n)}}function Pv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),sn(e,t)}}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),sn(e,t)}}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),sn(e,t)}}function Nv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),sn(e,t)}}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),sn(e,t)}}function kv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),sn(e,t)}}function Bv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=515,r=ph):r=Hp,e.setTexture2D(t||r,s)}function Gv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wp,s)}function zv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jp,s)}function Hv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vp,s)}function Vv(i){switch(i){case 5126:return Av;case 35664:return Ev;case 35665:return Tv;case 35666:return wv;case 35674:return Rv;case 35675:return Cv;case 35676:return Iv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Fv;case 5125:return Nv;case 36294:return Uv;case 36295:return Ov;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(i,t){i.uniform1fv(this.addr,t)}function jv(i,t){const e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function Xv(i,t){const e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function qv(i,t){const e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function Kv(i,t){const e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $v(i,t){const e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yv(i,t){const e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zv(i,t){i.uniform1iv(this.addr,t)}function Jv(i,t){i.uniform2iv(this.addr,t)}function Qv(i,t){i.uniform3iv(this.addr,t)}function ty(i,t){i.uniform4iv(this.addr,t)}function ey(i,t){i.uniform1uiv(this.addr,t)}function ny(i,t){i.uniform2uiv(this.addr,t)}function iy(i,t){i.uniform3uiv(this.addr,t)}function sy(i,t){i.uniform4uiv(this.addr,t)}function ry(i,t,e){const n=this.cache,s=t.length,r=La(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Hp,r[o])}function oy(i,t,e){const n=this.cache,s=t.length,r=La(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Wp,r[o])}function ay(i,t,e){const n=this.cache,s=t.length,r=La(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jp,r[o])}function cy(i,t,e){const n=this.cache,s=t.length,r=La(e,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function ly(i){switch(i){case 5126:return Wv;case 35664:return jv;case 35665:return Xv;case 35666:return qv;case 35674:return Kv;case 35675:return $v;case 35676:return Yv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return Qv;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return cy}}class uy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vv(e.type)}}class hy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ly(e.type)}}class dy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function vh(i,t){i.seq.push(t),i.map[t.id]=t}function fy(i,t,e){const n=i.name,s=n.length;for(xc.lastIndex=0;;){const r=xc.exec(n),o=xc.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){vh(e,u===void 0?new uy(a,i,t):new hy(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new dy(a),vh(e,l)),e=l}}}class aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fy(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function yh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const py=37297;let my=0;function gy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Mh=new ue;function _y(i){Te._getMatrix(Mh,Te.workingColorSpace,i);const t=`mat3( ${Mh.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case ma:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Sh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gy(i.getShaderSource(t),o)}else return s}function by(i,t){const e=_y(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xy(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const No=new O;function vy(){Te.getLuminanceCoefficients(No);const i=No.x.toFixed(4),t=No.y.toFixed(4),e=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function My(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function kr(i){return i!==""}function Ah(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ay=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(Ay,Ty)}const Ey=new Map;function Ty(i,t){let e=he[t];if(e===void 0){const n=Ey.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hl(e)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Th(i){return i.replace(wy,Ry)}function Ry(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Iy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Py(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Ly(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Dy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Cy(e),u=Iy(e),h=Py(e),l=Ly(e),d=Dy(e),m=yy(e),b=My(r),x=s.createProgram();let g,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(kr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(kr).join(`
`),f.length>0&&(f+=`
`)):(g=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),f=[wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?he.tonemapping_pars_fragment:"",e.toneMapping!==0?xy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,by("linearToOutputTexel",e.outputColorSpace),vy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),o=hl(o),o=Ah(o,e),o=Eh(o,e),a=hl(a),a=Ah(a,e),a=Eh(a,e),o=Th(o),a=Th(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+g+o,y=v+f+a,T=yh(s,s.VERTEX_SHADER,M),R=yh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(P){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(T).trim(),j=s.getShaderInfoLog(R).trim();let H=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,R);else{const z=Sh(s,T,"vertex"),U=Sh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+z+`
`+U)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||j==="")&&(k=!1);k&&(P.diagnostics={runnable:H,programLog:N,vertexShader:{log:B,prefix:g},fragmentShader:{log:j,prefix:f}})}s.deleteShader(T),s.deleteShader(R),D=new aa(s,x),A=Sy(s,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,py)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=my++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=R,this}let Ny=0;class Uy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Oy(t),e.set(t,n)),n}}class Oy{constructor(t){this.id=Ny++,this.code=t,this.usedTimes=0}}function ky(i,t,e,n,s,r,o){const a=new vp,c=new Uy,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return u.add(A),A===0?"uv":`uv${A}`}function g(A,E,P,N,B){const j=N.fog,H=B.geometry,k=A.isMeshStandardMaterial?N.environment:null,z=(A.isMeshStandardMaterial?e:t).get(A.envMap||k),U=z&&z.mapping===306?z.image.height:null,J=b[A.type];A.precision!==null&&(m=s.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const Y=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ct=Y!==void 0?Y.length:0;let St=0;H.morphAttributes.position!==void 0&&(St=1),H.morphAttributes.normal!==void 0&&(St=2),H.morphAttributes.color!==void 0&&(St=3);let Ft,it,mt,ut;if(J){const Ee=An[J];Ft=Ee.vertexShader,it=Ee.fragmentShader}else Ft=A.vertexShader,it=A.fragmentShader,c.update(A),mt=c.getVertexShaderID(A),ut=c.getFragmentShaderID(A);const Q=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),At=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,jt=!!A.map,Wt=!!A.matcap,ce=!!z,V=!!A.aoMap,Pe=!!A.lightMap,Qt=!!A.bumpMap,Jt=!!A.normalMap,Ht=!!A.displacementMap,_e=!!A.emissiveMap,It=!!A.metalnessMap,F=!!A.roughnessMap,w=A.anisotropy>0,X=A.clearcoat>0,q=A.dispersion>0,pt=A.iridescence>0,ot=A.sheen>0,Rt=A.transmission>0,Ct=w&&!!A.anisotropyMap,Ot=X&&!!A.clearcoatMap,ie=X&&!!A.clearcoatNormalMap,Et=X&&!!A.clearcoatRoughnessMap,Mt=pt&&!!A.iridescenceMap,Xt=pt&&!!A.iridescenceThicknessMap,$t=ot&&!!A.sheenColorMap,zt=ot&&!!A.sheenRoughnessMap,fe=!!A.specularMap,Zt=!!A.specularColorMap,Se=!!A.specularIntensityMap,K=Rt&&!!A.transmissionMap,Nt=Rt&&!!A.thicknessMap,ht=!!A.gradientMap,bt=!!A.alphaMap,Pt=A.alphaTest>0,Ut=!!A.alphaHash,ee=!!A.extensions;let Ue=0;A.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ue=i.toneMapping);const ze={shaderID:J,shaderType:A.type,shaderName:A.name,vertexShader:Ft,fragmentShader:it,defines:A.defines,customVertexShaderID:mt,customFragmentShaderID:ut,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:yn,alphaToCoverage:!!A.alphaToCoverage,map:jt,matcap:Wt,envMap:ce,envMapMode:ce&&z.mapping,envMapCubeUVHeight:U,aoMap:V,lightMap:Pe,bumpMap:Qt,normalMap:Jt,displacementMap:d&&Ht,emissiveMap:_e,normalMapObjectSpace:Jt&&A.normalMapType===1,normalMapTangentSpace:Jt&&A.normalMapType===0,metalnessMap:It,roughnessMap:F,anisotropy:w,anisotropyMap:Ct,clearcoat:X,clearcoatMap:Ot,clearcoatNormalMap:ie,clearcoatRoughnessMap:Et,dispersion:q,iridescence:pt,iridescenceMap:Mt,iridescenceThicknessMap:Xt,sheen:ot,sheenColorMap:$t,sheenRoughnessMap:zt,specularMap:fe,specularColorMap:Zt,specularIntensityMap:Se,transmission:Rt,transmissionMap:K,thicknessMap:Nt,gradientMap:ht,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:bt,alphaTest:Pt,alphaHash:Ut,combine:A.combine,mapUv:jt&&x(A.map.channel),aoMapUv:V&&x(A.aoMap.channel),lightMapUv:Pe&&x(A.lightMap.channel),bumpMapUv:Qt&&x(A.bumpMap.channel),normalMapUv:Jt&&x(A.normalMap.channel),displacementMapUv:Ht&&x(A.displacementMap.channel),emissiveMapUv:_e&&x(A.emissiveMap.channel),metalnessMapUv:It&&x(A.metalnessMap.channel),roughnessMapUv:F&&x(A.roughnessMap.channel),anisotropyMapUv:Ct&&x(A.anisotropyMap.channel),clearcoatMapUv:Ot&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:zt&&x(A.sheenRoughnessMap.channel),specularMapUv:fe&&x(A.specularMap.channel),specularColorMapUv:Zt&&x(A.specularColorMap.channel),specularIntensityMapUv:Se&&x(A.specularIntensityMap.channel),transmissionMapUv:K&&x(A.transmissionMap.channel),thicknessMapUv:Nt&&x(A.thicknessMap.channel),alphaMapUv:bt&&x(A.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Jt||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(jt||bt),fog:!!j,useFog:A.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:St,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:jt&&A.map.isVideoTexture===!0&&Te.getTransfer(A.map.colorSpace)===ke,decodeVideoTextureEmissive:_e&&A.emissiveMap.isVideoTexture===!0&&Te.getTransfer(A.emissiveMap.colorSpace)===ke,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ee&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&A.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ze.vertexUv1s=u.has(1),ze.vertexUv2s=u.has(2),ze.vertexUv3s=u.has(3),u.clear(),ze}function f(A){const E=[];if(A.shaderID?E.push(A.shaderID):(E.push(A.customVertexShaderID),E.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)E.push(P),E.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(v(E,A),M(E,A),E.push(i.outputColorSpace)),E.push(A.customProgramCacheKey),E.join()}function v(A,E){A.push(E.precision),A.push(E.outputColorSpace),A.push(E.envMapMode),A.push(E.envMapCubeUVHeight),A.push(E.mapUv),A.push(E.alphaMapUv),A.push(E.lightMapUv),A.push(E.aoMapUv),A.push(E.bumpMapUv),A.push(E.normalMapUv),A.push(E.displacementMapUv),A.push(E.emissiveMapUv),A.push(E.metalnessMapUv),A.push(E.roughnessMapUv),A.push(E.anisotropyMapUv),A.push(E.clearcoatMapUv),A.push(E.clearcoatNormalMapUv),A.push(E.clearcoatRoughnessMapUv),A.push(E.iridescenceMapUv),A.push(E.iridescenceThicknessMapUv),A.push(E.sheenColorMapUv),A.push(E.sheenRoughnessMapUv),A.push(E.specularMapUv),A.push(E.specularColorMapUv),A.push(E.specularIntensityMapUv),A.push(E.transmissionMapUv),A.push(E.thicknessMapUv),A.push(E.combine),A.push(E.fogExp2),A.push(E.sizeAttenuation),A.push(E.morphTargetsCount),A.push(E.morphAttributeCount),A.push(E.numDirLights),A.push(E.numPointLights),A.push(E.numSpotLights),A.push(E.numSpotLightMaps),A.push(E.numHemiLights),A.push(E.numRectAreaLights),A.push(E.numDirLightShadows),A.push(E.numPointLightShadows),A.push(E.numSpotLightShadows),A.push(E.numSpotLightShadowsWithMaps),A.push(E.numLightProbes),A.push(E.shadowMapType),A.push(E.toneMapping),A.push(E.numClippingPlanes),A.push(E.numClipIntersection),A.push(E.depthPacking)}function M(A,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const E=b[A.type];let P;if(E){const N=An[E];P=Ol.clone(N.uniforms)}else P=A.uniforms;return P}function T(A,E){let P;for(let N=0,B=h.length;N<B;N++){const j=h[N];if(j.cacheKey===E){P=j,++P.usedTimes;break}}return P===void 0&&(P=new Fy(i,E,A,r),h.push(P)),P}function R(A){if(--A.usedTimes===0){const E=h.indexOf(A);h[E]=h[h.length-1],h.pop(),A.destroy()}}function I(A){c.remove(A)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:D}}function By(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ch(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,d,m,b,x,g){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:d,material:m,groupOrder:b,renderOrder:l.renderOrder,z:x,group:g},i[t]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=m,f.groupOrder=b,f.renderOrder=l.renderOrder,f.z=x,f.group=g),t++,f}function a(l,d,m,b,x,g){const f=o(l,d,m,b,x,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(l,d,m,b,x,g){const f=o(l,d,m,b,x,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function u(l,d){e.length>1&&e.sort(l||Gy),n.length>1&&n.sort(d||Rh),s.length>1&&s.sort(d||Rh)}function h(){for(let l=t,d=i.length;l<d;l++){const m=i[l];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function zy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ch,i.set(n,[o])):s>=r.length?(o=new Ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function Vy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wy=0;function jy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xy(i){const t=new Hy,e=Vy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new O);const s=new O,r=new te,o=new te;function a(u){let h=0,l=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,b=0,x=0,g=0,f=0,v=0,M=0,y=0,T=0,R=0,I=0;u.sort(jy);for(let A=0,E=u.length;A<E;A++){const P=u[A],N=P.color,B=P.intensity,j=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,l+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],B);I++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,U=e.get(P);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=P.shadow.matrix,v++}n.directional[m]=k,m++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(N).multiplyScalar(B),k.distance=j,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[x]=k;const z=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=z.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,n.spotShadow[x]=U,n.spotShadowMap[x]=H,y++}x++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(N).multiplyScalar(B),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=k,g++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const z=P.shadow,U=e.get(P);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,n.pointShadow[b]=U,n.pointShadowMap[b]=H,n.pointShadowMatrix[b]=P.shadow.matrix,M++}n.point[b]=k,b++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(B),k.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=k,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==m||D.pointLength!==b||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==v||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==I)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=b,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-R,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,D.directionalLength=m,D.pointLength=b,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=v,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=I,n.version=Wy++)}function c(u,h){let l=0,d=0,m=0,b=0,x=0;const g=h.matrixWorldInverse;for(let f=0,v=u.length;f<v;f++){const M=u[f];if(M.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),l++}else if(M.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const y=n.rectArea[b];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Ih(i){const t=new Xy(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ih(i),t.set(s,[a])):r>=o.length?(a=new Ih(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$y=`uniform sampler2D shadow_pass;
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
}`;function Yy(i,t,e){let n=new zl;const s=new qt,r=new qt,o=new de,a=new W0({depthPacking:3201}),c=new j0,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Ky,fragmentShader:$y}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const b=new qe;b.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Me(b,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(R,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const A=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==3&&this.type===3,j=f===3&&this.type!==3;for(let H=0,k=R.length;H<k;H++){const z=R[H],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const J=U.getFrameExtents();if(s.multiply(J),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,U.mapSize.y=r.y)),U.map===null||B===!0||j===!0){const ct=this.type!==3?{minFilter:1003,magFilter:1003}:{};U.map!==null&&U.map.dispose(),U.map=new xs(s.x,s.y,ct),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const Y=U.getViewportCount();for(let ct=0;ct<Y;ct++){const St=U.getViewport(ct);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),N.viewport(o),U.updateMatrices(z,ct),n=U.getFrustum(),y(I,D,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===3&&v(U,D),U.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(A,E,P)};function v(R,I){const D=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new xs(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,D,m,x,null)}function M(R,I,D,A){let E=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?c:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const N=E.uuid,B=I.uuid;let j=u[N];j===void 0&&(j={},u[N]=j);let H=j[B];H===void 0&&(H=E.clone(),j[B]=H,I.addEventListener("dispose",T)),E=H}if(E.visible=I.visible,E.wireframe=I.wireframe,A===3?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:l[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=i.properties.get(E);N.light=D}return E}function y(R,I,D,A,E){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===3)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const B=t.update(R),j=R.material;if(Array.isArray(j)){const H=B.groups;for(let k=0,z=H.length;k<z;k++){const U=H[k],J=j[U.materialIndex];if(J&&J.visible){const Y=M(R,J,A,E);R.onBeforeShadow(i,R,I,D,B,Y,U),i.renderBufferDirect(D,null,B,Y,R,U),R.onAfterShadow(i,R,I,D,B,Y,U)}}}else if(j.visible){const H=M(R,j,A,E);R.onBeforeShadow(i,R,I,D,B,H,null),i.renderBufferDirect(D,null,B,H,R,null),R.onAfterShadow(i,R,I,D,B,H,null)}}const N=R.children;for(let B=0,j=N.length;B<j;B++)y(N[B],I,D,A,E)}function T(R){R.target.removeEventListener("dispose",T);for(const D in u){const A=u[D],E=R.target.uuid;E in A&&(A[E].dispose(),delete A[E])}}}const Zy={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Jy(i,t){function e(){let K=!1;const Nt=new de;let ht=null;const bt=new de(0,0,0,0);return{setMask:function(Pt){ht!==Pt&&!K&&(i.colorMask(Pt,Pt,Pt,Pt),ht=Pt)},setLocked:function(Pt){K=Pt},setClear:function(Pt,Ut,ee,Ue,ze){ze===!0&&(Pt*=Ue,Ut*=Ue,ee*=Ue),Nt.set(Pt,Ut,ee,Ue),bt.equals(Nt)===!1&&(i.clearColor(Pt,Ut,ee,Ue),bt.copy(Nt))},reset:function(){K=!1,ht=null,bt.set(-1,0,0,0)}}}function n(){let K=!1,Nt=!1,ht=null,bt=null,Pt=null;return{setReversed:function(Ut){if(Nt!==Ut){const ee=t.get("EXT_clip_control");Nt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);const Ue=Pt;Pt=null,this.setClear(Ue)}Nt=Ut},getReversed:function(){return Nt},setTest:function(Ut){Ut?Q(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Ut){ht!==Ut&&!K&&(i.depthMask(Ut),ht=Ut)},setFunc:function(Ut){if(Nt&&(Ut=Zy[Ut]),bt!==Ut){switch(Ut){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Ut}},setLocked:function(Ut){K=Ut},setClear:function(Ut){Pt!==Ut&&(Nt&&(Ut=1-Ut),i.clearDepth(Ut),Pt=Ut)},reset:function(){K=!1,ht=null,bt=null,Pt=null,Nt=!1}}}function s(){let K=!1,Nt=null,ht=null,bt=null,Pt=null,Ut=null,ee=null,Ue=null,ze=null;return{setTest:function(Ee){K||(Ee?Q(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(Ee){Nt!==Ee&&!K&&(i.stencilMask(Ee),Nt=Ee)},setFunc:function(Ee,on,dn){(ht!==Ee||bt!==on||Pt!==dn)&&(i.stencilFunc(Ee,on,dn),ht=Ee,bt=on,Pt=dn)},setOp:function(Ee,on,dn){(Ut!==Ee||ee!==on||Ue!==dn)&&(i.stencilOp(Ee,on,dn),Ut=Ee,ee=on,Ue=dn)},setLocked:function(Ee){K=Ee},setClear:function(Ee){ze!==Ee&&(i.clearStencil(Ee),ze=Ee)},reset:function(){K=!1,Nt=null,ht=null,bt=null,Pt=null,Ut=null,ee=null,Ue=null,ze=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,m=[],b=null,x=!1,g=null,f=null,v=null,M=null,y=null,T=null,R=null,I=new Yt(0,0,0),D=0,A=!1,E=null,P=null,N=null,B=null,j=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,z=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),k=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),k=z>=2);let J=null,Y={};const ct=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ft=new de().fromArray(ct),it=new de().fromArray(St);function mt(K,Nt,ht,bt){const Pt=new Uint8Array(4),Ut=i.createTexture();i.bindTexture(K,Ut),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<ht;ee++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Nt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Nt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Ut}const ut={};ut[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(3),Qt(!1),Jt(1),Q(i.CULL_FACE),V(0);function Q(K){h[K]!==!0&&(i.enable(K),h[K]=!0)}function gt(K){h[K]!==!1&&(i.disable(K),h[K]=!1)}function At(K,Nt){return l[K]!==Nt?(i.bindFramebuffer(K,Nt),l[K]=Nt,K===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Nt),K===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Nt),!0):!1}function wt(K,Nt){let ht=m,bt=!1;if(K){ht=d.get(Nt),ht===void 0&&(ht=[],d.set(Nt,ht));const Pt=K.textures;if(ht.length!==Pt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Ut=0,ee=Pt.length;Ut<ee;Ut++)ht[Ut]=i.COLOR_ATTACHMENT0+Ut;ht.length=Pt.length,bt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,bt=!0);bt&&i.drawBuffers(ht)}function jt(K){return b!==K?(i.useProgram(K),b=K,!0):!1}const Wt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Wt[103]=i.MIN,Wt[104]=i.MAX;const ce={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function V(K,Nt,ht,bt,Pt,Ut,ee,Ue,ze,Ee){if(K===0){x===!0&&(gt(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),K!==5){if(K!==g||Ee!==A){if((f!==100||y!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,y=100),Ee)switch(K){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}v=null,M=null,T=null,R=null,I.set(0,0,0),D=0,g=K,A=Ee}return}Pt=Pt||Nt,Ut=Ut||ht,ee=ee||bt,(Nt!==f||Pt!==y)&&(i.blendEquationSeparate(Wt[Nt],Wt[Pt]),f=Nt,y=Pt),(ht!==v||bt!==M||Ut!==T||ee!==R)&&(i.blendFuncSeparate(ce[ht],ce[bt],ce[Ut],ce[ee]),v=ht,M=bt,T=Ut,R=ee),(Ue.equals(I)===!1||ze!==D)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ze),I.copy(Ue),D=ze),g=K,A=!1}function Pe(K,Nt){K.side===2?gt(i.CULL_FACE):Q(i.CULL_FACE);let ht=K.side===1;Nt&&(ht=!ht),Qt(ht),K.blending===1&&K.transparent===!1?V(0):V(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);const bt=K.stencilWrite;a.setTest(bt),bt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),_e(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function Jt(K){K!==0?(Q(i.CULL_FACE),K!==P&&(K===1?i.cullFace(i.BACK):K===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),P=K}function Ht(K){K!==N&&(k&&i.lineWidth(K),N=K)}function _e(K,Nt,ht){K?(Q(i.POLYGON_OFFSET_FILL),(B!==Nt||j!==ht)&&(i.polygonOffset(Nt,ht),B=Nt,j=ht)):gt(i.POLYGON_OFFSET_FILL)}function It(K){K?Q(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function F(K){K===void 0&&(K=i.TEXTURE0+H-1),J!==K&&(i.activeTexture(K),J=K)}function w(K,Nt,ht){ht===void 0&&(J===null?ht=i.TEXTURE0+H-1:ht=J);let bt=Y[ht];bt===void 0&&(bt={type:void 0,texture:void 0},Y[ht]=bt),(bt.type!==K||bt.texture!==Nt)&&(J!==ht&&(i.activeTexture(ht),J=ht),i.bindTexture(K,Nt||ut[K]),bt.type=K,bt.texture=Nt)}function X(){const K=Y[J];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function pt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Et(){try{i.texStorage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $t(K){Ft.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Ft.copy(K))}function zt(K){it.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),it.copy(K))}function fe(K,Nt){let ht=u.get(Nt);ht===void 0&&(ht=new WeakMap,u.set(Nt,ht));let bt=ht.get(K);bt===void 0&&(bt=i.getUniformBlockIndex(Nt,K.name),ht.set(K,bt))}function Zt(K,Nt){const bt=u.get(Nt).get(K);c.get(Nt)!==bt&&(i.uniformBlockBinding(Nt,bt,K.__bindingPointIndex),c.set(Nt,bt))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,Y={},l={},d=new WeakMap,m=[],b=null,x=!1,g=null,f=null,v=null,M=null,y=null,T=null,R=null,I=new Yt(0,0,0),D=0,A=!1,E=null,P=null,N=null,B=null,j=null,Ft.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:gt,bindFramebuffer:At,drawBuffers:wt,useProgram:jt,setBlending:V,setMaterial:Pe,setFlipSided:Qt,setCullFace:Jt,setLineWidth:Ht,setPolygonOffset:_e,setScissorTest:It,activeTexture:F,bindTexture:w,unbindTexture:X,compressedTexImage2D:q,compressedTexImage3D:pt,texImage2D:Mt,texImage3D:Xt,updateUBOMapping:fe,uniformBlockBinding:Zt,texStorage2D:ie,texStorage3D:Et,texSubImage2D:ot,texSubImage3D:Rt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ot,scissor:$t,viewport:zt,reset:Se}}function Qy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qt,h=new WeakMap;let l;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,w){return m?new OffscreenCanvas(F,w):Xr("canvas")}function x(F,w,X){let q=1;const pt=It(F);if((pt.width>X||pt.height>X)&&(q=X/Math.max(pt.width,pt.height)),q<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const ot=Math.floor(q*pt.width),Rt=Math.floor(q*pt.height);l===void 0&&(l=b(ot,Rt));const Ct=w?b(ot,Rt):l;return Ct.width=ot,Ct.height=Rt,Ct.getContext("2d").drawImage(F,0,0,ot,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+ot+"x"+Rt+")."),Ct}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),F;return F}function g(F){return F.generateMipmaps}function f(F){i.generateMipmap(F)}function v(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(F,w,X,q,pt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ot=w;if(w===i.RED&&(X===i.FLOAT&&(ot=i.R32F),X===i.HALF_FLOAT&&(ot=i.R16F),X===i.UNSIGNED_BYTE&&(ot=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.R8UI),X===i.UNSIGNED_SHORT&&(ot=i.R16UI),X===i.UNSIGNED_INT&&(ot=i.R32UI),X===i.BYTE&&(ot=i.R8I),X===i.SHORT&&(ot=i.R16I),X===i.INT&&(ot=i.R32I)),w===i.RG&&(X===i.FLOAT&&(ot=i.RG32F),X===i.HALF_FLOAT&&(ot=i.RG16F),X===i.UNSIGNED_BYTE&&(ot=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RG8UI),X===i.UNSIGNED_SHORT&&(ot=i.RG16UI),X===i.UNSIGNED_INT&&(ot=i.RG32UI),X===i.BYTE&&(ot=i.RG8I),X===i.SHORT&&(ot=i.RG16I),X===i.INT&&(ot=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),X===i.UNSIGNED_INT&&(ot=i.RGB32UI),X===i.BYTE&&(ot=i.RGB8I),X===i.SHORT&&(ot=i.RGB16I),X===i.INT&&(ot=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),X===i.UNSIGNED_INT&&(ot=i.RGBA32UI),X===i.BYTE&&(ot=i.RGBA8I),X===i.SHORT&&(ot=i.RGBA16I),X===i.INT&&(ot=i.RGBA32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),w===i.RGBA){const Rt=pt?ma:Te.getTransfer(q);X===i.FLOAT&&(ot=i.RGBA32F),X===i.HALF_FLOAT&&(ot=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ot=Rt===ke?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function y(F,w){let X;return F?w===null||w===1014||w===1020?X=i.DEPTH24_STENCIL8:w===1015?X=i.DEPTH32F_STENCIL8:w===1012&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===1014||w===1020?X=i.DEPTH_COMPONENT24:w===1015?X=i.DEPTH_COMPONENT32F:w===1012&&(X=i.DEPTH_COMPONENT16),X}function T(F,w){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==1003&&F.minFilter!==1006?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function R(F){const w=F.target;w.removeEventListener("dispose",R),D(w),w.isVideoTexture&&h.delete(w)}function I(F){const w=F.target;w.removeEventListener("dispose",I),E(w)}function D(F){const w=n.get(F);if(w.__webglInit===void 0)return;const X=F.source,q=d.get(X);if(q){const pt=q[w.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&A(F),Object.keys(q).length===0&&d.delete(X)}n.remove(F)}function A(F){const w=n.get(F);i.deleteTexture(w.__webglTexture);const X=F.source,q=d.get(X);delete q[w.__cacheKey],o.memory.textures--}function E(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(w.__webglFramebuffer[q]))for(let pt=0;pt<w.__webglFramebuffer[q].length;pt++)i.deleteFramebuffer(w.__webglFramebuffer[q][pt]);else i.deleteFramebuffer(w.__webglFramebuffer[q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[q])}else{if(Array.isArray(w.__webglFramebuffer))for(let q=0;q<w.__webglFramebuffer.length;q++)i.deleteFramebuffer(w.__webglFramebuffer[q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let q=0;q<w.__webglColorRenderbuffer.length;q++)w.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=F.textures;for(let q=0,pt=X.length;q<pt;q++){const ot=n.get(X[q]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(X[q])}n.remove(F)}let P=0;function N(){P=0}function B(){const F=P;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),P+=1,F}function j(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function H(F,w){const X=n.get(F);if(F.isVideoTexture&&Ht(F),F.isRenderTargetTexture===!1&&F.version>0&&X.__version!==F.version){const q=F.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,F,w);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function k(F,w){const X=n.get(F);if(F.version>0&&X.__version!==F.version){it(X,F,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function z(F,w){const X=n.get(F);if(F.version>0&&X.__version!==F.version){it(X,F,w);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function U(F,w){const X=n.get(F);if(F.version>0&&X.__version!==F.version){mt(X,F,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const J={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Y={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ct={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function St(F,w){if(w.type===1015&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===1006||w.magFilter===1007||w.magFilter===1005||w.magFilter===1008||w.minFilter===1006||w.minFilter===1007||w.minFilter===1005||w.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,J[w.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Y[w.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,ct[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===1003||w.minFilter!==1005&&w.minFilter!==1008||w.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ft(F,w){let X=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",R));const q=w.source;let pt=d.get(q);pt===void 0&&(pt={},d.set(q,pt));const ot=j(w);if(ot!==F.__cacheKey){pt[ot]===void 0&&(pt[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),pt[ot].usedTimes++;const Rt=pt[F.__cacheKey];Rt!==void 0&&(pt[F.__cacheKey].usedTimes--,Rt.usedTimes===0&&A(w)),F.__cacheKey=ot,F.__webglTexture=pt[ot].texture}return X}function it(F,w,X){let q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(q=i.TEXTURE_3D);const pt=Ft(F,w),ot=w.source;e.bindTexture(q,F.__webglTexture,i.TEXTURE0+X);const Rt=n.get(ot);if(ot.version!==Rt.__version||pt===!0){e.activeTexture(i.TEXTURE0+X);const Ct=Te.getPrimaries(Te.workingColorSpace),Ot=w.colorSpace===""?null:Te.getPrimaries(w.colorSpace),ie=w.colorSpace===""||Ct===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Et=x(w.image,!1,s.maxTextureSize);Et=_e(w,Et);const Mt=r.convert(w.format,w.colorSpace),Xt=r.convert(w.type);let $t=M(w.internalFormat,Mt,Xt,w.colorSpace,w.isVideoTexture);St(q,w);let zt;const fe=w.mipmaps,Zt=w.isVideoTexture!==!0,Se=Rt.__version===void 0||pt===!0,K=ot.dataReady,Nt=T(w,Et);if(w.isDepthTexture)$t=y(w.format===1027,w.type),Se&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,$t,Et.width,Et.height):e.texImage2D(i.TEXTURE_2D,0,$t,Et.width,Et.height,0,Mt,Xt,null));else if(w.isDataTexture)if(fe.length>0){Zt&&Se&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,fe[0].width,fe[0].height);for(let ht=0,bt=fe.length;ht<bt;ht++)zt=fe[ht],Zt?K&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,zt.width,zt.height,Mt,Xt,zt.data):e.texImage2D(i.TEXTURE_2D,ht,$t,zt.width,zt.height,0,Mt,Xt,zt.data);w.generateMipmaps=!1}else Zt?(Se&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,Et.width,Et.height),K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et.width,Et.height,Mt,Xt,Et.data)):e.texImage2D(i.TEXTURE_2D,0,$t,Et.width,Et.height,0,Mt,Xt,Et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Zt&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,$t,fe[0].width,fe[0].height,Et.depth);for(let ht=0,bt=fe.length;ht<bt;ht++)if(zt=fe[ht],w.format!==1023)if(Mt!==null)if(Zt){if(K)if(w.layerUpdates.size>0){const Pt=oh(zt.width,zt.height,w.format,w.type);for(const Ut of w.layerUpdates){const ee=zt.data.subarray(Ut*Pt/zt.data.BYTES_PER_ELEMENT,(Ut+1)*Pt/zt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,Ut,zt.width,zt.height,1,Mt,ee)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,zt.width,zt.height,Et.depth,Mt,zt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,$t,zt.width,zt.height,Et.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,zt.width,zt.height,Et.depth,Mt,Xt,zt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,$t,zt.width,zt.height,Et.depth,0,Mt,Xt,zt.data)}else{Zt&&Se&&e.texStorage2D(i.TEXTURE_2D,Nt,$t,fe[0].width,fe[0].height);for(let ht=0,bt=fe.length;ht<bt;ht++)zt=fe[ht],w.format!==1023?Mt!==null?Zt?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,zt.width,zt.height,Mt,zt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,$t,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?K&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,zt.width,zt.height,Mt,Xt,zt.data):e.texImage2D(i.TEXTURE_2D,ht,$t,zt.width,zt.height,0,Mt,Xt,zt.data)}else if(w.isDataArrayTexture)if(Zt){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,$t,Et.width,Et.height,Et.depth),K)if(w.layerUpdates.size>0){const ht=oh(Et.width,Et.height,w.format,w.type);for(const bt of w.layerUpdates){const Pt=Et.data.subarray(bt*ht/Et.data.BYTES_PER_ELEMENT,(bt+1)*ht/Et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,Et.width,Et.height,1,Mt,Xt,Pt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Mt,Xt,Et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,Et.width,Et.height,Et.depth,0,Mt,Xt,Et.data);else if(w.isData3DTexture)Zt?(Se&&e.texStorage3D(i.TEXTURE_3D,Nt,$t,Et.width,Et.height,Et.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Mt,Xt,Et.data)):e.texImage3D(i.TEXTURE_3D,0,$t,Et.width,Et.height,Et.depth,0,Mt,Xt,Et.data);else if(w.isFramebufferTexture){if(Se)if(Zt)e.texStorage2D(i.TEXTURE_2D,Nt,$t,Et.width,Et.height);else{let ht=Et.width,bt=Et.height;for(let Pt=0;Pt<Nt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,$t,ht,bt,0,Mt,Xt,null),ht>>=1,bt>>=1}}else if(fe.length>0){if(Zt&&Se){const ht=It(fe[0]);e.texStorage2D(i.TEXTURE_2D,Nt,$t,ht.width,ht.height)}for(let ht=0,bt=fe.length;ht<bt;ht++)zt=fe[ht],Zt?K&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt,Xt,zt):e.texImage2D(i.TEXTURE_2D,ht,$t,Mt,Xt,zt);w.generateMipmaps=!1}else if(Zt){if(Se){const ht=It(Et);e.texStorage2D(i.TEXTURE_2D,Nt,$t,ht.width,ht.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Xt,Et)}else e.texImage2D(i.TEXTURE_2D,0,$t,Mt,Xt,Et);g(w)&&f(q),Rt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function mt(F,w,X){if(w.image.length!==6)return;const q=Ft(F,w),pt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+X);const ot=n.get(pt);if(pt.version!==ot.__version||q===!0){e.activeTexture(i.TEXTURE0+X);const Rt=Te.getPrimaries(Te.workingColorSpace),Ct=w.colorSpace===""?null:Te.getPrimaries(w.colorSpace),Ot=w.colorSpace===""||Rt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const ie=w.isCompressedTexture||w.image[0].isCompressedTexture,Et=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let bt=0;bt<6;bt++)!ie&&!Et?Mt[bt]=x(w.image[bt],!0,s.maxCubemapSize):Mt[bt]=Et?w.image[bt].image:w.image[bt],Mt[bt]=_e(w,Mt[bt]);const Xt=Mt[0],$t=r.convert(w.format,w.colorSpace),zt=r.convert(w.type),fe=M(w.internalFormat,$t,zt,w.colorSpace),Zt=w.isVideoTexture!==!0,Se=ot.__version===void 0||q===!0,K=pt.dataReady;let Nt=T(w,Xt);St(i.TEXTURE_CUBE_MAP,w);let ht;if(ie){Zt&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,fe,Xt.width,Xt.height);for(let bt=0;bt<6;bt++){ht=Mt[bt].mipmaps;for(let Pt=0;Pt<ht.length;Pt++){const Ut=ht[Pt];w.format!==1023?$t!==null?Zt?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,0,0,Ut.width,Ut.height,$t,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,fe,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,0,0,Ut.width,Ut.height,$t,zt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt,fe,Ut.width,Ut.height,0,$t,zt,Ut.data)}}}else{if(ht=w.mipmaps,Zt&&Se){ht.length>0&&Nt++;const bt=It(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,fe,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if(Et){Zt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Mt[bt].width,Mt[bt].height,$t,zt,Mt[bt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,fe,Mt[bt].width,Mt[bt].height,0,$t,zt,Mt[bt].data);for(let Pt=0;Pt<ht.length;Pt++){const ee=ht[Pt].image[bt].image;Zt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,0,0,ee.width,ee.height,$t,zt,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,fe,ee.width,ee.height,0,$t,zt,ee.data)}}else{Zt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,$t,zt,Mt[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,fe,$t,zt,Mt[bt]);for(let Pt=0;Pt<ht.length;Pt++){const Ut=ht[Pt];Zt?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,0,0,$t,zt,Ut.image[bt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Pt+1,fe,$t,zt,Ut.image[bt])}}}g(w)&&f(i.TEXTURE_CUBE_MAP),ot.__version=pt.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ut(F,w,X,q,pt,ot){const Rt=r.convert(X.format,X.colorSpace),Ct=r.convert(X.type),Ot=M(X.internalFormat,Rt,Ct,X.colorSpace),ie=n.get(w),Et=n.get(X);if(Et.__renderTarget=w,!ie.__hasExternalTextures){const Mt=Math.max(1,w.width>>ot),Xt=Math.max(1,w.height>>ot);pt===i.TEXTURE_3D||pt===i.TEXTURE_2D_ARRAY?e.texImage3D(pt,ot,Ot,Mt,Xt,w.depth,0,Rt,Ct,null):e.texImage2D(pt,ot,Ot,Mt,Xt,0,Rt,Ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Jt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,pt,Et.__webglTexture,0,Qt(w)):(pt===i.TEXTURE_2D||pt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,pt,Et.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(F,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,F),w.depthBuffer){const q=w.depthTexture,pt=q&&q.isDepthTexture?q.type:null,ot=y(w.stencilBuffer,pt),Rt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=Qt(w);Jt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,ot,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ot,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ot,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,F)}else{const q=w.textures;for(let pt=0;pt<q.length;pt++){const ot=q[pt],Rt=r.convert(ot.format,ot.colorSpace),Ct=r.convert(ot.type),Ot=M(ot.internalFormat,Rt,Ct,ot.colorSpace),ie=Qt(w);X&&Jt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Ot,w.width,w.height):Jt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Ot,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(F,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(w.depthTexture);q.__renderTarget=w,(!q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const pt=q.__webglTexture,ot=Qt(w);if(w.depthTexture.format===1026)Jt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pt,0);else if(w.depthTexture.format===1027)Jt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function At(F){const w=n.get(F),X=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const q=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),q){const pt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,q.removeEventListener("dispose",pt)};q.addEventListener("dispose",pt),w.__depthDisposeCallback=pt}w.__boundDepthTexture=q}if(F.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");gt(w.__webglFramebuffer,F)}else if(X){w.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[q]),w.__webglDepthbuffer[q]===void 0)w.__webglDepthbuffer[q]=i.createRenderbuffer(),Q(w.__webglDepthbuffer[q],F,!1);else{const pt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Q(w.__webglDepthbuffer,F,!1);else{const q=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,pt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(F,w,X){const q=n.get(F);w!==void 0&&ut(q.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&At(F)}function jt(F){const w=F.texture,X=n.get(F),q=n.get(w);F.addEventListener("dispose",I);const pt=F.textures,ot=F.isWebGLCubeRenderTarget===!0,Rt=pt.length>1;if(Rt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=w.version,o.memory.textures++),ot){X.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[Ct]=[];for(let Ot=0;Ot<w.mipmaps.length;Ot++)X.__webglFramebuffer[Ct][Ot]=i.createFramebuffer()}else X.__webglFramebuffer[Ct]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ct=0;Ct<w.mipmaps.length;Ct++)X.__webglFramebuffer[Ct]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let Ct=0,Ot=pt.length;Ct<Ot;Ct++){const ie=n.get(pt[Ct]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Jt(F)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ct=0;Ct<pt.length;Ct++){const Ot=pt[Ct];X.__webglColorRenderbuffer[Ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Ct]);const ie=r.convert(Ot.format,Ot.colorSpace),Et=r.convert(Ot.type),Mt=M(Ot.internalFormat,ie,Et,Ot.colorSpace,F.isXRRenderTarget===!0),Xt=Qt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Mt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,X.__webglColorRenderbuffer[Ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(X.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),St(i.TEXTURE_CUBE_MAP,w);for(let Ct=0;Ct<6;Ct++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ot=0;Ot<w.mipmaps.length;Ot++)ut(X.__webglFramebuffer[Ct][Ot],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ot);else ut(X.__webglFramebuffer[Ct],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);g(w)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let Ct=0,Ot=pt.length;Ct<Ot;Ct++){const ie=pt[Ct],Et=n.get(ie);e.bindTexture(i.TEXTURE_2D,Et.__webglTexture),St(i.TEXTURE_2D,ie),ut(X.__webglFramebuffer,F,ie,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,0),g(ie)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Ct=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ct=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,q.__webglTexture),St(Ct,w),w.mipmaps&&w.mipmaps.length>0)for(let Ot=0;Ot<w.mipmaps.length;Ot++)ut(X.__webglFramebuffer[Ot],F,w,i.COLOR_ATTACHMENT0,Ct,Ot);else ut(X.__webglFramebuffer,F,w,i.COLOR_ATTACHMENT0,Ct,0);g(w)&&f(Ct),e.unbindTexture()}F.depthBuffer&&At(F)}function Wt(F){const w=F.textures;for(let X=0,q=w.length;X<q;X++){const pt=w[X];if(g(pt)){const ot=v(F),Rt=n.get(pt).__webglTexture;e.bindTexture(ot,Rt),f(ot),e.unbindTexture()}}}const ce=[],V=[];function Pe(F){if(F.samples>0){if(Jt(F)===!1){const w=F.textures,X=F.width,q=F.height;let pt=i.COLOR_BUFFER_BIT;const ot=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(F),Ct=w.length>1;if(Ct)for(let Ot=0;Ot<w.length;Ot++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Ot=0;Ot<w.length;Ot++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(pt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(pt|=i.STENCIL_BUFFER_BIT)),Ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ot]);const ie=n.get(w[Ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,X,q,0,0,X,q,pt,i.NEAREST),c===!0&&(ce.length=0,V.length=0,ce.push(i.COLOR_ATTACHMENT0+Ot),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ce.push(ot),V.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ct)for(let Ot=0;Ot<w.length;Ot++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Ot]);const ie=n.get(w[Ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ot,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){const w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Qt(F){return Math.min(s.maxSamples,F.samples)}function Jt(F){const w=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(F){const w=o.render.frame;h.get(F)!==w&&(h.set(F,w),F.update())}function _e(F,w){const X=F.colorSpace,q=F.format,pt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||X!==yn&&X!==""&&(Te.getTransfer(X)===ke?(q!==1023||pt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function It(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(u.width=F.naturalWidth||F.width,u.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(u.width=F.displayWidth,u.height=F.displayHeight):(u.width=F.width,u.height=F.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=H,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=U,this.rebindTextures=wt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Jt}function tM(i,t){function e(n,s=""){let r;const o=Te.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===ke)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const eM={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),f=this._getHandJoint(u,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),m=.02,b=.005;u.inputState.pinching&&d>m+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=m-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
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

}`;class sM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pi({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rM extends ys{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,d=null,m=null,b=null;const x=new sM,g=e.getContextAttributes();let f=null,v=null;const M=[],y=[],T=new qt;let R=null;const I=new xn;I.viewport=new de;const D=new xn;D.viewport=new de;const A=[I,D],E=new d_;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let mt=M[it];return mt===void 0&&(mt=new vc,M[it]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(it){let mt=M[it];return mt===void 0&&(mt=new vc,M[it]=mt),mt.getGripSpace()},this.getHand=function(it){let mt=M[it];return mt===void 0&&(mt=new vc,M[it]=mt),mt.getHandSpace()};function B(it){const mt=y.indexOf(it.inputSource);if(mt===-1)return;const ut=M[mt];ut!==void 0&&(ut.update(it.inputSource,it.frame,u||o),ut.dispatchEvent({type:it.type,data:it.inputSource}))}function j(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",H);for(let it=0;it<M.length;it++){const mt=y[it];mt!==null&&(y[it]=null,M[it].disconnect(mt))}P=null,N=null,x.reset(),t.setRenderTarget(f),m=null,d=null,l=null,s=null,v=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return l},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",j),s.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const mt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new xs(m.framebufferWidth,m.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let mt=null,ut=null,Q=null;g.depth&&(Q=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=g.stencil?1027:1026,ut=g.stencil?1020:1014);const gt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new xs(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Dp(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(it){for(let mt=0;mt<it.removed.length;mt++){const ut=it.removed[mt],Q=y.indexOf(ut);Q>=0&&(y[Q]=null,M[Q].disconnect(ut))}for(let mt=0;mt<it.added.length;mt++){const ut=it.added[mt];let Q=y.indexOf(ut);if(Q===-1){for(let At=0;At<M.length;At++)if(At>=y.length){y.push(ut),Q=At;break}else if(y[At]===null){y[At]=ut,Q=At;break}if(Q===-1)break}const gt=M[Q];gt&&gt.connect(ut)}}const k=new O,z=new O;function U(it,mt,ut){k.setFromMatrixPosition(mt.matrixWorld),z.setFromMatrixPosition(ut.matrixWorld);const Q=k.distanceTo(z),gt=mt.projectionMatrix.elements,At=ut.projectionMatrix.elements,wt=gt[14]/(gt[10]-1),jt=gt[14]/(gt[10]+1),Wt=(gt[9]+1)/gt[5],ce=(gt[9]-1)/gt[5],V=(gt[8]-1)/gt[0],Pe=(At[8]+1)/At[0],Qt=wt*V,Jt=wt*Pe,Ht=Q/(-V+Pe),_e=Ht*-V;if(mt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(_e),it.translateZ(Ht),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),gt[10]===-1)it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const It=wt+Ht,F=jt+Ht,w=Qt-_e,X=Jt+(Q-_e),q=Wt*jt/F*It,pt=ce*jt/F*It;it.projectionMatrix.makePerspective(w,X,q,pt,It,F),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function J(it,mt){mt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(mt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let mt=it.near,ut=it.far;x.texture!==null&&(x.depthNear>0&&(mt=x.depthNear),x.depthFar>0&&(ut=x.depthFar)),E.near=D.near=I.near=mt,E.far=D.far=I.far=ut,(P!==E.near||N!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,N=E.far),I.layers.mask=it.layers.mask|2,D.layers.mask=it.layers.mask|4,E.layers.mask=I.layers.mask|D.layers.mask;const Q=it.parent,gt=E.cameras;J(E,Q);for(let At=0;At<gt.length;At++)J(gt[At],Q);gt.length===2?U(E,I,D):E.projectionMatrix.copy(I.projectionMatrix),Y(it,E,Q)};function Y(it,mt,ut){ut===null?it.matrix.copy(mt.matrixWorld):(it.matrix.copy(ut.matrixWorld),it.matrix.invert(),it.matrix.multiply(mt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(mt.projectionMatrix),it.projectionMatrixInverse.copy(mt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ir*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let ct=null;function St(it,mt){if(h=mt.getViewerPose(u||o),b=mt,h!==null){const ut=h.views;m!==null&&(t.setRenderTargetFramebuffer(v,m.framebuffer),t.setRenderTarget(v));let Q=!1;ut.length!==E.cameras.length&&(E.cameras.length=0,Q=!0);for(let At=0;At<ut.length;At++){const wt=ut[At];let jt=null;if(m!==null)jt=m.getViewport(wt);else{const ce=l.getViewSubImage(d,wt);jt=ce.viewport,At===0&&(t.setRenderTargetTextures(v,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(v))}let Wt=A[At];Wt===void 0&&(Wt=new xn,Wt.layers.enable(At),Wt.viewport=new de,A[At]=Wt),Wt.matrix.fromArray(wt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(wt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(jt.x,jt.y,jt.width,jt.height),At===0&&(E.matrix.copy(Wt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Q===!0&&E.cameras.push(Wt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const At=l.getDepthInformation(ut[0]);At&&At.isValid&&At.texture&&x.init(t,At,s.renderState)}}for(let ut=0;ut<M.length;ut++){const Q=y[ut],gt=M[ut];Q!==null&&gt!==void 0&&gt.update(Q,mt,u||o)}ct&&ct(it,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),b=null}const Ft=new zp;Ft.setAnimationLoop(St),this.setAnimationLoop=function(it){ct=it},this.dispose=function(){}}}const as=new Bn,oM=new te;function aM(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Ap(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,v,M,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),l(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),b(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,v,M):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===1&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===1&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=t.get(f),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),g.envMapRotation.value.setFromMatrix4(oM.makeRotationFromEuler(as)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,v,M){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=M*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function l(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const v=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function u(v,M){let y=s[v.id];y===void 0&&(b(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",g));const T=M.program;n.updateUBOMapping(v,T);const R=t.render.frame;r[v.id]!==R&&(d(v),r[v.id]=R)}function h(v){const M=l();v.__bindingPointIndex=M;const y=i.createBuffer(),T=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],y=v.uniforms,T=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,I=y.length;R<I;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let A=0,E=D.length;A<E;A++){const P=D[A];if(m(P,R,A,T)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let j=0;for(let H=0;H<B.length;H++){const k=B[H],z=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+j,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(v,M,y,T){const R=v.value,I=M+"_"+y;if(T[I]===void 0)return typeof R=="number"||typeof R=="boolean"?T[I]=R:T[I]=R.clone(),!0;{const D=T[I];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return T[I]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function b(v){const M=v.uniforms;let y=0;const T=16;for(let I=0,D=M.length;I<D;I++){const A=Array.isArray(M[I])?M[I]:[M[I]];for(let E=0,P=A.length;E<P;E++){const N=A[E],B=Array.isArray(N.value)?N.value:[N.value];for(let j=0,H=B.length;j<H;j++){const k=B[j],z=x(k),U=y%T,J=U%z.boundary,Y=U+J;y+=J,Y!==0&&T-Y<z.storage&&(y+=T-Y),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=z.storage}}}const R=y%T;return R>0&&(y+=T-R),v.__size=y,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:f}}class lM{constructor(t={}){const{canvas:e=o0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const b=new Uint32Array(4),x=new Int32Array(4);let g=null,f=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let T=!1,R=0,I=0,D=null,A=-1,E=null;const P=new de,N=new de;let B=null;const j=new Yt(0);let H=0,k=e.width,z=e.height,U=1,J=null,Y=null;const ct=new de(0,0,k,z),St=new de(0,0,k,z);let Ft=!1;const it=new zl;let mt=!1,ut=!1;const Q=new te,gt=new te,At=new O,wt=new de,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ce(){return D===null?U:1}let V=n;function Pe(_,p){return e.getContext(_,p)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),V===null){const p="webgl2";if(V=Pe(p,_),V===null)throw Pe(p)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Qt,Jt,Ht,_e,It,F,w,X,q,pt,ot,Rt,Ct,Ot,ie,Et,Mt,Xt,$t,zt,fe,Zt,Se,K;function Nt(){Qt=new bv(V),Qt.init(),Zt=new tM(V,Qt),Jt=new dv(V,Qt,t,Zt),Ht=new Jy(V,Qt),Jt.reverseDepthBuffer&&d&&Ht.buffers.depth.setReversed(!0),_e=new yv(V),It=new By,F=new Qy(V,Qt,Ht,It,Jt,Zt,_e),w=new pv(y),X=new _v(y),q=new R_(V),Se=new uv(V,q),pt=new xv(V,q,_e,Se),ot=new Sv(V,pt,q,_e),$t=new Mv(V,Jt,F),Et=new fv(It),Rt=new ky(y,w,X,Qt,Jt,Se,Et),Ct=new aM(y,It),Ot=new zy,ie=new qy(Qt),Xt=new lv(y,w,X,Ht,ot,m,c),Mt=new Yy(y,ot,Jt),K=new cM(V,_e,Jt,Ht),zt=new hv(V,Qt,_e),fe=new vv(V,Qt,_e),_e.programs=Rt.programs,y.capabilities=Jt,y.extensions=Qt,y.properties=It,y.renderLists=Ot,y.shadowMap=Mt,y.state=Ht,y.info=_e}Nt();const ht=new rM(y,V);this.xr=ht,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const _=Qt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Qt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(_){_!==void 0&&(U=_,this.setSize(k,z,!1))},this.getSize=function(_){return _.set(k,z)},this.setSize=function(_,p,L=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=_,z=p,e.width=Math.floor(_*U),e.height=Math.floor(p*U),L===!0&&(e.style.width=_+"px",e.style.height=p+"px"),this.setViewport(0,0,_,p)},this.getDrawingBufferSize=function(_){return _.set(k*U,z*U).floor()},this.setDrawingBufferSize=function(_,p,L){k=_,z=p,U=L,e.width=Math.floor(_*L),e.height=Math.floor(p*L),this.setViewport(0,0,_,p)},this.getCurrentViewport=function(_){return _.copy(P)},this.getViewport=function(_){return _.copy(ct)},this.setViewport=function(_,p,L,C){_.isVector4?ct.set(_.x,_.y,_.z,_.w):ct.set(_,p,L,C),Ht.viewport(P.copy(ct).multiplyScalar(U).round())},this.getScissor=function(_){return _.copy(St)},this.setScissor=function(_,p,L,C){_.isVector4?St.set(_.x,_.y,_.z,_.w):St.set(_,p,L,C),Ht.scissor(N.copy(St).multiplyScalar(U).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(_){Ht.setScissorTest(Ft=_)},this.setOpaqueSort=function(_){J=_},this.setTransparentSort=function(_){Y=_},this.getClearColor=function(_){return _.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(_=!0,p=!0,L=!0){let C=0;if(_){let S=!1;if(D!==null){const G=D.texture.format;S=G===1033||G===1031||G===1029}if(S){const G=D.texture.type,W=G===1009||G===1014||G===1012||G===1020||G===1017||G===1018,Z=Xt.getClearColor(),st=Xt.getClearAlpha(),nt=Z.r,tt=Z.g,lt=Z.b;W?(b[0]=nt,b[1]=tt,b[2]=lt,b[3]=st,V.clearBufferuiv(V.COLOR,0,b)):(x[0]=nt,x[1]=tt,x[2]=lt,x[3]=st,V.clearBufferiv(V.COLOR,0,x))}else C|=V.COLOR_BUFFER_BIT}p&&(C|=V.DEPTH_BUFFER_BIT),L&&(C|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),Xt.dispose(),Ot.dispose(),ie.dispose(),It.dispose(),w.dispose(),X.dispose(),ot.dispose(),Se.dispose(),K.dispose(),Rt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Zi),ht.removeEventListener("sessionend",Di),En.stop()};function bt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const _=_e.autoReset,p=Mt.enabled,L=Mt.autoUpdate,C=Mt.needsUpdate,S=Mt.type;Nt(),_e.autoReset=_,Mt.enabled=p,Mt.autoUpdate=L,Mt.needsUpdate=C,Mt.type=S}function Ut(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ee(_){const p=_.target;p.removeEventListener("dispose",ee),Ue(p)}function Ue(_){ze(_),It.remove(_)}function ze(_){const p=It.get(_).programs;p!==void 0&&(p.forEach(function(L){Rt.releaseProgram(L)}),_.isShaderMaterial&&Rt.releaseShaderCache(_))}this.renderBufferDirect=function(_,p,L,C,S,G){p===null&&(p=jt);const W=S.isMesh&&S.matrixWorld.determinant()<0,Z=ts(_,p,L,C,S);Ht.setMaterial(C,W);let st=L.index,nt=1;if(C.wireframe===!0){if(st=pt.getWireframeAttribute(L),st===void 0)return;nt=2}const tt=L.drawRange,lt=L.attributes.position;let at=tt.start*nt,dt=(tt.start+tt.count)*nt;G!==null&&(at=Math.max(at,G.start*nt),dt=Math.min(dt,(G.start+G.count)*nt)),st!==null?(at=Math.max(at,0),dt=Math.min(dt,st.count)):lt!=null&&(at=Math.max(at,0),dt=Math.min(dt,lt.count));const _t=dt-at;if(_t<0||_t===1/0)return;Se.setup(S,C,Z,L,st);let rt,$=zt;if(st!==null&&(rt=q.get(st),$=fe,$.setIndex(rt)),S.isMesh)C.wireframe===!0?(Ht.setLineWidth(C.wireframeLinewidth*ce()),$.setMode(V.LINES)):$.setMode(V.TRIANGLES);else if(S.isLine){let et=C.linewidth;et===void 0&&(et=1),Ht.setLineWidth(et*ce()),S.isLineSegments?$.setMode(V.LINES):S.isLineLoop?$.setMode(V.LINE_LOOP):$.setMode(V.LINE_STRIP)}else S.isPoints?$.setMode(V.POINTS):S.isSprite&&$.setMode(V.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)$.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))$.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{const et=S._multiDrawStarts,ft=S._multiDrawCounts,vt=S._multiDrawCount,yt=st?q.get(st).bytesPerElement:1,Bt=It.get(C).currentProgram.getUniforms();for(let Kt=0;Kt<vt;Kt++)Bt.setValue(V,"_gl_DrawID",Kt),$.render(et[Kt]/yt,ft[Kt])}else if(S.isInstancedMesh)$.renderInstances(at,_t,S.count);else if(L.isInstancedBufferGeometry){const et=L._maxInstanceCount!==void 0?L._maxInstanceCount:1/0,ft=Math.min(L.instanceCount,et);$.renderInstances(at,_t,ft)}else $.render(at,_t)};function Ee(_,p,L){_.transparent===!0&&_.side===2&&_.forceSinglePass===!1?(_.side=1,_.needsUpdate=!0,di(_,p,L),_.side=0,_.needsUpdate=!0,di(_,p,L),_.side=2):di(_,p,L)}this.compile=function(_,p,L=null){L===null&&(L=_),f=ie.get(L),f.init(p),M.push(f),L.traverseVisible(function(S){S.isLight&&S.layers.test(p.layers)&&(f.pushLight(S),S.castShadow&&f.pushShadow(S))}),_!==L&&_.traverseVisible(function(S){S.isLight&&S.layers.test(p.layers)&&(f.pushLight(S),S.castShadow&&f.pushShadow(S))}),f.setupLights();const C=new Set;return _.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;const G=S.material;if(G)if(Array.isArray(G))for(let W=0;W<G.length;W++){const Z=G[W];Ee(Z,L,S),C.add(Z)}else Ee(G,L,S),C.add(G)}),M.pop(),f=null,C},this.compileAsync=function(_,p,L=null){const C=this.compile(_,p,L);return new Promise(S=>{function G(){if(C.forEach(function(W){It.get(W).currentProgram.isReady()&&C.delete(W)}),C.size===0){S(_);return}setTimeout(G,10)}Qt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let on=null;function dn(_){on&&on(_)}function Zi(){En.stop()}function Di(){En.start()}const En=new zp;En.setAnimationLoop(dn),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(_){on=_,ht.setAnimationLoop(_),_===null?En.stop():En.start()},ht.addEventListener("sessionstart",Zi),ht.addEventListener("sessionend",Di),this.render=function(_,p){if(p!==void 0&&p.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(p),p=ht.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,p,D),f=ie.get(_,M.length),f.init(p),M.push(f),gt.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),it.setFromProjectionMatrix(gt),ut=this.localClippingEnabled,mt=Et.init(this.clippingPlanes,ut),g=Ot.get(_,v.length),g.init(),v.push(g),ht.enabled===!0&&ht.isPresenting===!0){const G=y.xr.getDepthSensingMesh();G!==null&&zn(G,p,-1/0,y.sortObjects)}zn(_,p,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,Y),Wt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Wt&&Xt.addToRenderList(g,_),this.info.render.frame++,mt===!0&&Et.beginShadows();const L=f.state.shadowsArray;Mt.render(L,_,p),mt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const C=g.opaque,S=g.transmissive;if(f.setupLights(),p.isArrayCamera){const G=p.cameras;if(S.length>0)for(let W=0,Z=G.length;W<Z;W++){const st=G[W];Fi(C,S,_,st)}Wt&&Xt.render(_);for(let W=0,Z=G.length;W<Z;W++){const st=G[W];Ji(g,_,st,st.viewport)}}else S.length>0&&Fi(C,S,_,p),Wt&&Xt.render(_),Ji(g,_,p);D!==null&&(F.updateMultisampleRenderTarget(D),F.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(y,_,p),Se.resetDefaultState(),A=-1,E=null,M.pop(),M.length>0?(f=M[M.length-1],mt===!0&&Et.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function zn(_,p,L,C){if(_.visible===!1)return;if(_.layers.test(p.layers)){if(_.isGroup)L=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(p);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||it.intersectsSprite(_)){C&&wt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(gt);const W=ot.update(_),Z=_.material;Z.visible&&g.push(_,W,Z,L,wt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||it.intersectsObject(_))){const W=ot.update(_),Z=_.material;if(C&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),wt.copy(_.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),wt.copy(W.boundingSphere.center)),wt.applyMatrix4(_.matrixWorld).applyMatrix4(gt)),Array.isArray(Z)){const st=W.groups;for(let nt=0,tt=st.length;nt<tt;nt++){const lt=st[nt],at=Z[lt.materialIndex];at&&at.visible&&g.push(_,W,at,L,wt.z,lt)}}else Z.visible&&g.push(_,W,Z,L,wt.z,null)}}const G=_.children;for(let W=0,Z=G.length;W<Z;W++)zn(G[W],p,L,C)}function Ji(_,p,L,C){const S=_.opaque,G=_.transmissive,W=_.transparent;f.setupLightsView(L),mt===!0&&Et.setGlobalState(y.clippingPlanes,L),C&&Ht.viewport(P.copy(C)),S.length>0&&ti(S,p,L),G.length>0&&ti(G,p,L),W.length>0&&ti(W,p,L),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Fi(_,p,L,C){if((L.isScene===!0?L.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[C.id]===void 0&&(f.state.transmissionRenderTarget[C.id]=new xs(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace}));const G=f.state.transmissionRenderTarget[C.id],W=C.viewport||P;G.setSize(W.z,W.w);const Z=y.getRenderTarget();y.setRenderTarget(G),y.getClearColor(j),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&Xt.render(L);const st=y.toneMapping;y.toneMapping=0;const nt=C.viewport;if(C.viewport!==void 0&&(C.viewport=void 0),f.setupLightsView(C),mt===!0&&Et.setGlobalState(y.clippingPlanes,C),ti(_,L,C),F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let lt=0,at=p.length;lt<at;lt++){const dt=p[lt],_t=dt.object,rt=dt.geometry,$=dt.material,et=dt.group;if($.side===2&&_t.layers.test(C.layers)){const ft=$.side;$.side=1,$.needsUpdate=!0,Ni(_t,L,C,rt,$,et),$.side=ft,$.needsUpdate=!0,tt=!0}}tt===!0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G))}y.setRenderTarget(Z),y.setClearColor(j,H),nt!==void 0&&(C.viewport=nt),y.toneMapping=st}function ti(_,p,L){const C=p.isScene===!0?p.overrideMaterial:null;for(let S=0,G=_.length;S<G;S++){const W=_[S],Z=W.object,st=W.geometry,nt=C===null?W.material:C,tt=W.group;Z.layers.test(L.layers)&&Ni(Z,p,L,st,nt,tt)}}function Ni(_,p,L,C,S,G){_.onBeforeRender(y,p,L,C,S,G),_.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),S.onBeforeRender(y,p,L,C,_,G),S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,y.renderBufferDirect(L,p,C,S,_,G),S.side=0,S.needsUpdate=!0,y.renderBufferDirect(L,p,C,S,_,G),S.side=2):y.renderBufferDirect(L,p,C,S,_,G),_.onAfterRender(y,p,L,C,S,G)}function di(_,p,L){p.isScene!==!0&&(p=jt);const C=It.get(_),S=f.state.lights,G=f.state.shadowsArray,W=S.state.version,Z=Rt.getParameters(_,S.state,G,p,L),st=Rt.getProgramCacheKey(Z);let nt=C.programs;C.environment=_.isMeshStandardMaterial?p.environment:null,C.fog=p.fog,C.envMap=(_.isMeshStandardMaterial?X:w).get(_.envMap||C.environment),C.envMapRotation=C.environment!==null&&_.envMap===null?p.environmentRotation:_.envMapRotation,nt===void 0&&(_.addEventListener("dispose",ee),nt=new Map,C.programs=nt);let tt=nt.get(st);if(tt!==void 0){if(C.currentProgram===tt&&C.lightsStateVersion===W)return Ui(_,Z),tt}else Z.uniforms=Rt.getUniforms(_),_.onBeforeCompile(Z,y),tt=Rt.acquireProgram(Z,st),nt.set(st,tt),C.uniforms=Z.uniforms;const lt=C.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(lt.clippingPlanes=Et.uniform),Ui(_,Z),C.needsLights=Tt(_),C.lightsStateVersion=W,C.needsLights&&(lt.ambientLightColor.value=S.state.ambient,lt.lightProbe.value=S.state.probe,lt.directionalLights.value=S.state.directional,lt.directionalLightShadows.value=S.state.directionalShadow,lt.spotLights.value=S.state.spot,lt.spotLightShadows.value=S.state.spotShadow,lt.rectAreaLights.value=S.state.rectArea,lt.ltc_1.value=S.state.rectAreaLTC1,lt.ltc_2.value=S.state.rectAreaLTC2,lt.pointLights.value=S.state.point,lt.pointLightShadows.value=S.state.pointShadow,lt.hemisphereLights.value=S.state.hemi,lt.directionalShadowMap.value=S.state.directionalShadowMap,lt.directionalShadowMatrix.value=S.state.directionalShadowMatrix,lt.spotShadowMap.value=S.state.spotShadowMap,lt.spotLightMatrix.value=S.state.spotLightMatrix,lt.spotLightMap.value=S.state.spotLightMap,lt.pointShadowMap.value=S.state.pointShadowMap,lt.pointShadowMatrix.value=S.state.pointShadowMatrix),C.currentProgram=tt,C.uniformsList=null,tt}function Qi(_){if(_.uniformsList===null){const p=_.currentProgram.getUniforms();_.uniformsList=aa.seqWithValue(p.seq,_.uniforms)}return _.uniformsList}function Ui(_,p){const L=It.get(_);L.outputColorSpace=p.outputColorSpace,L.batching=p.batching,L.batchingColor=p.batchingColor,L.instancing=p.instancing,L.instancingColor=p.instancingColor,L.instancingMorph=p.instancingMorph,L.skinning=p.skinning,L.morphTargets=p.morphTargets,L.morphNormals=p.morphNormals,L.morphColors=p.morphColors,L.morphTargetsCount=p.morphTargetsCount,L.numClippingPlanes=p.numClippingPlanes,L.numIntersection=p.numClipIntersection,L.vertexAlphas=p.vertexAlphas,L.vertexTangents=p.vertexTangents,L.toneMapping=p.toneMapping}function ts(_,p,L,C,S){p.isScene!==!0&&(p=jt),F.resetTextureUnits();const G=p.fog,W=C.isMeshStandardMaterial?p.environment:null,Z=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:yn,st=(C.isMeshStandardMaterial?X:w).get(C.envMap||W),nt=C.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,tt=!!L.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),lt=!!L.morphAttributes.position,at=!!L.morphAttributes.normal,dt=!!L.morphAttributes.color;let _t=0;C.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_t=y.toneMapping);const rt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=rt!==void 0?rt.length:0,et=It.get(C),ft=f.state.lights;if(mt===!0&&(ut===!0||_!==E)){const ae=_===E&&C.id===A;Et.setState(C,_,ae)}let vt=!1;C.version===et.__version?(et.needsLights&&et.lightsStateVersion!==ft.state.version||et.outputColorSpace!==Z||S.isBatchedMesh&&et.batching===!1||!S.isBatchedMesh&&et.batching===!0||S.isBatchedMesh&&et.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&et.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&et.instancing===!1||!S.isInstancedMesh&&et.instancing===!0||S.isSkinnedMesh&&et.skinning===!1||!S.isSkinnedMesh&&et.skinning===!0||S.isInstancedMesh&&et.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&et.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&et.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&et.instancingMorph===!1&&S.morphTexture!==null||et.envMap!==st||C.fog===!0&&et.fog!==G||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Et.numPlanes||et.numIntersection!==Et.numIntersection)||et.vertexAlphas!==nt||et.vertexTangents!==tt||et.morphTargets!==lt||et.morphNormals!==at||et.morphColors!==dt||et.toneMapping!==_t||et.morphTargetsCount!==$)&&(vt=!0):(vt=!0,et.__version=C.version);let yt=et.currentProgram;vt===!0&&(yt=di(C,p,S));let Bt=!1,Kt=!1,be=!1;const oe=yt.getUniforms(),kt=et.uniforms;if(Ht.useProgram(yt.program)&&(Bt=!0,Kt=!0,be=!0),C.id!==A&&(A=C.id,Kt=!0),Bt||E!==_){Ht.buffers.depth.getReversed()?(Q.copy(_.projectionMatrix),c0(Q),l0(Q),oe.setValue(V,"projectionMatrix",Q)):oe.setValue(V,"projectionMatrix",_.projectionMatrix),oe.setValue(V,"viewMatrix",_.matrixWorldInverse);const we=oe.map.cameraPosition;we!==void 0&&we.setValue(V,At.setFromMatrixPosition(_.matrixWorld)),Jt.logarithmicDepthBuffer&&oe.setValue(V,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&oe.setValue(V,"isOrthographic",_.isOrthographicCamera===!0),E!==_&&(E=_,Kt=!0,be=!0)}if(S.isSkinnedMesh){oe.setOptional(V,S,"bindMatrix"),oe.setOptional(V,S,"bindMatrixInverse");const ae=S.skeleton;ae&&(ae.boneTexture===null&&ae.computeBoneTexture(),oe.setValue(V,"boneTexture",ae.boneTexture,F))}S.isBatchedMesh&&(oe.setOptional(V,S,"batchingTexture"),oe.setValue(V,"batchingTexture",S._matricesTexture,F),oe.setOptional(V,S,"batchingIdTexture"),oe.setValue(V,"batchingIdTexture",S._indirectTexture,F),oe.setOptional(V,S,"batchingColorTexture"),S._colorsTexture!==null&&oe.setValue(V,"batchingColorTexture",S._colorsTexture,F));const le=L.morphAttributes;if((le.position!==void 0||le.normal!==void 0||le.color!==void 0)&&$t.update(S,L,yt),(Kt||et.receiveShadow!==S.receiveShadow)&&(et.receiveShadow=S.receiveShadow,oe.setValue(V,"receiveShadow",S.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(kt.envMap.value=st,kt.flipEnvMap.value=st.isCubeTexture&&st.isRenderTargetTexture===!1?-1:1),C.isMeshStandardMaterial&&C.envMap===null&&p.environment!==null&&(kt.envMapIntensity.value=p.environmentIntensity),Kt&&(oe.setValue(V,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&es(kt,be),G&&C.fog===!0&&Ct.refreshFogUniforms(kt,G),Ct.refreshMaterialUniforms(kt,C,U,z,f.state.transmissionRenderTarget[_.id]),aa.upload(V,Qi(et),kt,F)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(aa.upload(V,Qi(et),kt,F),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&oe.setValue(V,"center",S.center),oe.setValue(V,"modelViewMatrix",S.modelViewMatrix),oe.setValue(V,"normalMatrix",S.normalMatrix),oe.setValue(V,"modelMatrix",S.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const ae=C.uniformsGroups;for(let we=0,xt=ae.length;we<xt;we++){const ne=ae[we];K.update(ne,yt),K.bind(ne,yt)}}return yt}function es(_,p){_.ambientLightColor.needsUpdate=p,_.lightProbe.needsUpdate=p,_.directionalLights.needsUpdate=p,_.directionalLightShadows.needsUpdate=p,_.pointLights.needsUpdate=p,_.pointLightShadows.needsUpdate=p,_.spotLights.needsUpdate=p,_.spotLightShadows.needsUpdate=p,_.rectAreaLights.needsUpdate=p,_.hemisphereLights.needsUpdate=p}function Tt(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,p,L){It.get(_.texture).__webglTexture=p,It.get(_.depthTexture).__webglTexture=L;const C=It.get(_);C.__hasExternalTextures=!0,C.__autoAllocateDepthBuffer=L===void 0,C.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,p){const L=It.get(_);L.__webglFramebuffer=p,L.__useDefaultFramebuffer=p===void 0},this.setRenderTarget=function(_,p=0,L=0){D=_,R=p,I=L;let C=!0,S=null,G=!1,W=!1;if(_){const st=It.get(_);if(st.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(V.FRAMEBUFFER,null),C=!1;else if(st.__webglFramebuffer===void 0)F.setupRenderTarget(_);else if(st.__hasExternalTextures)F.rebindTextures(_,It.get(_.texture).__webglTexture,It.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const lt=_.depthTexture;if(st.__boundDepthTexture!==lt){if(lt!==null&&It.has(lt)&&(_.width!==lt.image.width||_.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(_)}}const nt=_.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(W=!0);const tt=It.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(tt[p])?S=tt[p][L]:S=tt[p],G=!0):_.samples>0&&F.useMultisampledRTT(_)===!1?S=It.get(_).__webglMultisampledFramebuffer:Array.isArray(tt)?S=tt[L]:S=tt,P.copy(_.viewport),N.copy(_.scissor),B=_.scissorTest}else P.copy(ct).multiplyScalar(U).floor(),N.copy(St).multiplyScalar(U).floor(),B=Ft;if(Ht.bindFramebuffer(V.FRAMEBUFFER,S)&&C&&Ht.drawBuffers(_,S),Ht.viewport(P),Ht.scissor(N),Ht.setScissorTest(B),G){const st=It.get(_.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+p,st.__webglTexture,L)}else if(W){const st=It.get(_.texture),nt=p||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,st.__webglTexture,L||0,nt)}A=-1},this.readRenderTargetPixels=function(_,p,L,C,S,G,W){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Z=It.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&W!==void 0&&(Z=Z[W]),Z){Ht.bindFramebuffer(V.FRAMEBUFFER,Z);try{const st=_.texture,nt=st.format,tt=st.type;if(!Jt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}p>=0&&p<=_.width-C&&L>=0&&L<=_.height-S&&V.readPixels(p,L,C,S,Zt.convert(nt),Zt.convert(tt),G)}finally{const st=D!==null?It.get(D).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(_,p,L,C,S,G,W){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Z=It.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&W!==void 0&&(Z=Z[W]),Z){const st=_.texture,nt=st.format,tt=st.type;if(!Jt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(p>=0&&p<=_.width-C&&L>=0&&L<=_.height-S){Ht.bindFramebuffer(V.FRAMEBUFFER,Z);const lt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.bufferData(V.PIXEL_PACK_BUFFER,G.byteLength,V.STREAM_READ),V.readPixels(p,L,C,S,Zt.convert(nt),Zt.convert(tt),0);const at=D!==null?It.get(D).__webglFramebuffer:null;Ht.bindFramebuffer(V.FRAMEBUFFER,at);const dt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await a0(V,dt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,lt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,G),V.deleteBuffer(lt),V.deleteSync(dt),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,p=null,L=0){_.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),p=arguments[0]||null,_=arguments[1]);const C=Math.pow(2,-L),S=Math.floor(_.image.width*C),G=Math.floor(_.image.height*C),W=p!==null?p.x:0,Z=p!==null?p.y:0;F.setTexture2D(_,0),V.copyTexSubImage2D(V.TEXTURE_2D,L,0,0,W,Z,S,G),Ht.unbindTexture()};const re=V.createFramebuffer(),Vt=V.createFramebuffer();this.copyTextureToTexture=function(_,p,L=null,C=null,S=0,G=null){_.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),C=arguments[0]||null,_=arguments[1],p=arguments[2],G=arguments[3]||0,L=null),G===null&&(S!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),G=S,S=0):G=0);let W,Z,st,nt,tt,lt,at,dt,_t;const rt=_.isCompressedTexture?_.mipmaps[G]:_.image;if(L!==null)W=L.max.x-L.min.x,Z=L.max.y-L.min.y,st=L.isBox3?L.max.z-L.min.z:1,nt=L.min.x,tt=L.min.y,lt=L.isBox3?L.min.z:0;else{const le=Math.pow(2,-S);W=Math.floor(rt.width*le),Z=Math.floor(rt.height*le),_.isDataArrayTexture?st=rt.depth:_.isData3DTexture?st=Math.floor(rt.depth*le):st=1,nt=0,tt=0,lt=0}C!==null?(at=C.x,dt=C.y,_t=C.z):(at=0,dt=0,_t=0);const $=Zt.convert(p.format),et=Zt.convert(p.type);let ft;p.isData3DTexture?(F.setTexture3D(p,0),ft=V.TEXTURE_3D):p.isDataArrayTexture||p.isCompressedArrayTexture?(F.setTexture2DArray(p,0),ft=V.TEXTURE_2D_ARRAY):(F.setTexture2D(p,0),ft=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,p.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,p.unpackAlignment);const vt=V.getParameter(V.UNPACK_ROW_LENGTH),yt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bt=V.getParameter(V.UNPACK_SKIP_PIXELS),Kt=V.getParameter(V.UNPACK_SKIP_ROWS),be=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,rt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,lt);const oe=_.isDataArrayTexture||_.isData3DTexture,kt=p.isDataArrayTexture||p.isData3DTexture;if(_.isDepthTexture){const le=It.get(_),ae=It.get(p),we=It.get(le.__renderTarget),xt=It.get(ae.__renderTarget);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,we.__webglFramebuffer),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ne=0;ne<st;ne++)oe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(_).__webglTexture,S,lt+ne),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,It.get(p).__webglTexture,G,_t+ne)),V.blitFramebuffer(nt,tt,W,Z,at,dt,W,Z,V.DEPTH_BUFFER_BIT,V.NEAREST);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(S!==0||_.isRenderTargetTexture||It.has(_)){const le=It.get(_),ae=It.get(p);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,re),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vt);for(let we=0;we<st;we++)oe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,le.__webglTexture,S,lt+we):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,le.__webglTexture,S),kt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ae.__webglTexture,G,_t+we):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ae.__webglTexture,G),S!==0?V.blitFramebuffer(nt,tt,W,Z,at,dt,W,Z,V.COLOR_BUFFER_BIT,V.NEAREST):kt?V.copyTexSubImage3D(ft,G,at,dt,_t+we,nt,tt,W,Z):V.copyTexSubImage2D(ft,G,at,dt,nt,tt,W,Z);Ht.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kt?_.isDataTexture||_.isData3DTexture?V.texSubImage3D(ft,G,at,dt,_t,W,Z,st,$,et,rt.data):p.isCompressedArrayTexture?V.compressedTexSubImage3D(ft,G,at,dt,_t,W,Z,st,$,rt.data):V.texSubImage3D(ft,G,at,dt,_t,W,Z,st,$,et,rt):_.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,G,at,dt,W,Z,$,et,rt.data):_.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,G,at,dt,rt.width,rt.height,$,rt.data):V.texSubImage2D(V.TEXTURE_2D,G,at,dt,W,Z,$,et,rt);V.pixelStorei(V.UNPACK_ROW_LENGTH,vt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,be),G===0&&p.generateMipmaps&&V.generateMipmap(ft),Ht.unbindTexture()},this.copyTextureToTexture3D=function(_,p,L=null,C=null,S=0){return _.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),L=arguments[0]||null,C=arguments[1]||null,_=arguments[2],p=arguments[3],S=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,p,L,C,S)},this.initRenderTarget=function(_){It.get(_).__webglFramebuffer===void 0&&F.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?F.setTextureCube(_,0):_.isData3DTexture?F.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?F.setTexture2DArray(_,0):F.setTexture2D(_,0),Ht.unbindTexture()},this.resetState=function(){R=0,I=0,D=null,Ht.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}function Ph(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class uM extends hr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new mM(e)}),this.register(function(e){return new gM(e)}),this.register(function(e){return new EM(e)}),this.register(function(e){return new TM(e)}),this.register(function(e){return new wM(e)}),this.register(function(e){return new bM(e)}),this.register(function(e){return new xM(e)}),this.register(function(e){return new vM(e)}),this.register(function(e){return new yM(e)}),this.register(function(e){return new pM(e)}),this.register(function(e){return new MM(e)}),this.register(function(e){return new _M(e)}),this.register(function(e){return new AM(e)}),this.register(function(e){return new SM(e)}),this.register(function(e){return new dM(e)}),this.register(function(e){return new RM(e)}),this.register(function(e){return new CM(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Hr.extractUrlBase(t);o=Hr.resolveURL(u,this.path)}else o=Hr.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new kp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Xp){try{o[ye.KHR_BINARY_GLTF]=new IM(t)}catch(l){s&&s(l);return}r=JSON.parse(o[ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new VM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case ye.KHR_MATERIALS_UNLIT:o[l]=new fM;break;case ye.KHR_DRACO_MESH_COMPRESSION:o[l]=new PM(r,this.dracoLoader);break;case ye.KHR_TEXTURE_TRANSFORM:o[l]=new LM;break;case ye.KHR_MESH_QUANTIZATION:o[l]=new DM;break;default:d.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function hM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dM{constructor(t){this.parser=t,this.name=ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new Yt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],yn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Gp(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new c_(h),u.distance=l;break;case"spot":u=new o_(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Ai(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class fM{constructor(){this.name=ye.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(t,e,n){const s=[];t.color=new Yt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],yn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,We))}return Promise.all(s)}}class pM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class mM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new qt(a,a)}return Promise.all(r)}}class gM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class _M{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class bM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Yt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,We)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class xM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Yt().setRGB(a[0],a[1],a[2],yn),Promise.all(r)}}class yM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class MM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Yt().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,We)),Promise.all(r)}}class SM{constructor(t){this.parser=t,this.name=ye.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class AM{constructor(t){this.parser=t,this.name=ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class EM{constructor(t){this.parser=t,this.name=ye.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class TM{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class wM{constructor(t){this.parser=t,this.name=ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class RM{constructor(t){this.name=ye.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(m),h,l,d,s.mode,s.filter),m})})}else return null}}class CM{constructor(t){this.name=ye.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Nn.TRIANGLES&&u.mode!==Nn.TRIANGLE_STRIP&&u.mode!==Nn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,m=[];for(const b of l){const x=new te,g=new O,f=new Je,v=new O(1,1,1),M=new O0(b.geometry,b.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,x.compose(g,f,v));for(const y in c)if(y==="_COLOR_0"){const T=c[y];M.instanceColor=new ol(T.array,T.itemSize,T.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&b.geometry.setAttribute(y,c[y]);Ve.prototype.copy.call(M,b),this.parser.assignFinalMaterial(M),m.push(M)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Xp="glTF",Rr=12,Lh={JSON:1313821514,BIN:5130562};class IM{constructor(t){this.name=ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Xp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Rr,r=new DataView(t,Rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Lh.JSON){const u=new Uint8Array(t,Rr+o,a);this.content=n.decode(u)}else if(c===Lh.BIN){const u=Rr+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ye.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=dl[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=dl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],m=er[d.componentType];u[l]=m.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(m){for(const b in m.attributes){const x=m.attributes[b],g=c[b];g!==void 0&&(x.normalized=g)}l(m)},a,u,yn,d)})})}}class LM{constructor(){this.name=ye.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class DM{constructor(){this.name=ye.KHR_MESH_QUANTIZATION}}class qp extends to{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,d=l*l,m=d*l,b=t*u,x=b-u,g=-2*m+3*d,f=m-d,v=1-g,M=f-d+l;for(let y=0;y!==a;y++){const T=o[x+y+a],R=o[x+y+c]*h,I=o[b+y+a],D=o[b+y]*h;r[y]=v*T+M*R+g*I+f*D}return r}}const FM=new Je;class NM extends qp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return FM.fromArray(r).normalize().toArray(r),r}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dh={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Fh={33071:1001,33648:1002,10497:1e3},yc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UM={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function OM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function cs(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ai(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function kM(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function BM(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GM(i){let t;const e=i.extensions&&i.extensions[ye.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Sc(e.attributes):t=i.indices+":"+Sc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Sc(i.targets[n]);return t}function Sc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function fl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HM=new te;class VM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new hM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Bp(this.options.manager):this.textureLoader=new h_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new kp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cs(r,a,s),Ai(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Hr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=yc[s.type],a=er[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new Ce(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=yc[s.type],u=er[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,b=s.normalized===!0;let x,g;if(m&&m!==l){const f=Math.floor(d/m),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let M=e.cache.get(v);M||(x=new u(a,f*m,s.count*m/h),M=new Bl(x,m/h),e.cache.add(v,M)),g=new Yn(M,c,d%m/h,b)}else a===null?x=new u(s.count*c):x=new u(a,d,s.count*c),g=new Ce(x,c,b);if(s.sparse!==void 0){const f=yc.SCALAR,v=er[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,T=new v(o[1],M,s.sparse.count*f),R=new u(o[2],y,s.sparse.count*c);a!==null&&(g=new Ce(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,D=T.length;I<D;I++){const A=T[I];if(g.setX(A,R[I*c]),c>=2&&g.setY(A,R[I*c+1]),c>=3&&g.setZ(A,R[I*c+2]),c>=4&&g.setW(A,R[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=b}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Dh[d.magFilter]||1006,h.minFilter=Dh[d.minFilter]||1008,h.wrapS=Fh[d.wrapS]||1e3,h.wrapT=Fh[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,m){let b=d;e.isImageBitmapLoader===!0&&(b=function(x){const g=new en(x);g.needsUpdate=!0,d(g)}),e.load(Hr.resolveURL(l,r.path),b,void 0,m)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),Ai(l,o),l.userData.mimeType=o.mimeType||zM(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ye.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Lp,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Pp,On.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ms}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[ye.KHR_MATERIALS_UNLIT]){const l=s[ye.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new Yt(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],yn),a.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,We)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||Mc.OPAQUE;if(h===Mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==tn&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qt(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==tn&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==tn){const l=r.emissiveFactor;a.emissive=new Yt().setRGB(l[0],l[1],l[2],yn)}return r.emissiveTexture!==void 0&&o!==tn&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,We)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),Ai(l,r),e.associations.set(l,{materials:t}),r.extensions&&cs(s,l,r),l})}createUniqueName(t){const e=Ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Nh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=GM(u),l=s[h];if(l)o.push(l.promise);else{let d;u.extensions&&u.extensions[ye.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Nh(new qe,u,e),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?OM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let m=0,b=h.length;m<b;m++){const x=h[m],g=o[m];let f;const v=u[m];if(g.mode===Nn.TRIANGLES||g.mode===Nn.TRIANGLE_STRIP||g.mode===Nn.TRIANGLE_FAN||g.mode===void 0)f=r.isSkinnedMesh===!0?new F0(x,v):new Me(x,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Nn.TRIANGLE_STRIP?f.geometry=Ph(f.geometry,1):g.mode===Nn.TRIANGLE_FAN&&(f.geometry=Ph(f.geometry,2));else if(g.mode===Nn.LINES)f=new G0(x,v);else if(g.mode===Nn.LINE_STRIP)f=new Hl(x,v);else if(g.mode===Nn.LINE_LOOP)f=new z0(x,v);else if(g.mode===Nn.POINTS)f=new H0(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&BM(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),Ai(f,r),g.extensions&&cs(s,f,g),e.assignFinalMaterial(f),l.push(f)}for(let m=0,b=l.length;m<b;m++)e.associations.set(l[m],{meshes:t,primitives:m});if(l.length===1)return r.extensions&&cs(s,l[0],r),l[0];const d=new vn;r.extensions&&cs(s,d,r),e.associations.set(d,{meshes:t});for(let m=0,b=l.length;m<b;m++)d.add(l[m]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new xn(gp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new ql(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ai(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const d=new te;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Gl(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const m=s.channels[l],b=s.samplers[m.sampler],x=m.target,g=x.node,f=s.parameters!==void 0?s.parameters[b.input]:b.input,v=s.parameters!==void 0?s.parameters[b.output]:b.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),u.push(b),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],m=l[1],b=l[2],x=l[3],g=l[4],f=[];for(let v=0,M=d.length;v<M;v++){const y=d[v],T=m[v],R=b[v],I=x[v],D=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,T,R,I,D);if(A)for(let E=0;E<A.length;E++)f.push(A[E])}return new ll(r,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,HM)});for(let m=0,b=l.length;m<b;m++)h.add(l[m]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Cp:u.length>1?h=new vn:u.length===1?h=u[0]:h=new Ve,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),Ai(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){const l=new te;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new vn;n.name&&(r.name=s.createUniqueName(n.name)),Ai(r,n),n.extensions&&cs(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,m]of s.associations)(d instanceof On||d instanceof en)&&l.set(d,m);return h.traverse(d=>{const m=s.associations.get(d);m!=null&&l.set(d,m)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];ji[r.path]===ji.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(ji[r.path]){case ji.weights:u=rr;break;case ji.rotation:u=or;break;case ji.position:case ji.scale:u=ar;break;default:switch(n.itemSize){case 1:u=rr;break;case 2:case 3:default:u=ar;break}break}const h=s.interpolation!==void 0?UM[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const b=new u(c[d]+"."+ji[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),o.push(b)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=fl(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof or?NM:qp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function WM(i,t,e){const n=t.attributes,s=new mn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(u[0],u[1],u[2])),a.normalized){const h=fl(er[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new O,c=new O;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],m=d.min,b=d.max;if(m!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(b[2]))),d.normalized){const x=fl(er[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Nh(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=dl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Te.workingColorSpace!==yn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Te.workingColorSpace}" not supported.`),Ai(i,t),WM(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?kM(i,t.targets,e):i})}var jM=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function a(f){for(var v=new Uint8Array(f.length),M=0;M<f.length;++M){var y=f.charCodeAt(M);v[M]=y>96?y-97:y>64?y-39:y+4}for(var T=0,M=0;M<f.length;++M)v[T++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,T)}function c(f,v,M,y,T,R){var I=r.exports.sbrk,D=M+3&-4,A=I(D*y),E=I(T.length),P=new Uint8Array(r.exports.memory.buffer);P.set(T,E);var N=f(A,M,y,E,T.length);if(N==0&&R&&R(A,D,y),v.set(P.subarray(A,A+M*y)),I(A-I(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function m(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(M){var y=M.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function b(f){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),M=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(M),T=0;T<f;++T)l[T]=m(y);URL.revokeObjectURL(y)}function x(f,v,M,y,T){for(var R=l[0],I=1;I<l.length;++I)l[I].pending<R.pending&&(R=l[I]);return new Promise(function(D,A){var E=new Uint8Array(M),P=d++;R.pending+=f,R.requests[P]={resolve:D,reject:A},R.object.postMessage({id:P,count:f,size:v,source:E,mode:y,filter:T},[E.buffer])})}function g(f){o.then(function(){var v=f.data;try{var M=new Uint8Array(v.count*v.size);c(r.exports[v.mode],M,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:M},[M.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(f){b(f)},decodeVertexBuffer:function(f,v,M,y,T){c(r.exports.meshopt_decodeVertexBuffer,f,v,M,y,r.exports[u[T]])},decodeIndexBuffer:function(f,v,M,y){c(r.exports.meshopt_decodeIndexBuffer,f,v,M,y)},decodeIndexSequence:function(f,v,M,y){c(r.exports.meshopt_decodeIndexSequence,f,v,M,y)},decodeGltfBuffer:function(f,v,M,y,T,R){c(r.exports[h[T]],f,v,M,y,r.exports[u[R]])},decodeGltfBufferAsync:function(f,v,M,y,T){return l.length>0?x(f,v,M,h[y],u[T]):o.then(function(){var R=new Uint8Array(f*v);return c(r.exports[h[y]],R,f,v,M,r.exports[u[T]]),R})}}})();function Zl(){return new uM().setMeshoptDecoder(jM)}let XM="";const Li=i=>`${XM}${i}`,qM=.001,KM=.5,Uh={playing:!1,settling:!1,stillFor:0,pending:1},Kp=i=>i.playing||i.settling||i.pending>0,$M=i=>!i.playing&&!i.settling,YM=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),ZM=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,JM=i=>Kp(i)?i:{...i,pending:1};function QM(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<qM?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<KM}}function Oh(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const vs="#c8f323",tS="#0b0f10";function eS(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const nS=eS(vs),iS=vs,sS="#7aa2ff",$p="#ffb340",rS="#b18cff",oS=vs,aS=vs,SI=$p,Cr=new O;function Dn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Cr.copy(t),Cr[n]=0,Cr.normalize();const u=.5*o/(o+a),h=1-Cr.angleTo(i)/c;return Math.sign(Cr[e])===1?h*u:a/(o+a)+u+u*(1-h)}class cS extends Ii{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new O,c=new O,u=new O(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,b=new O,x=.5/s;for(let g=0,f=0;g<h.length;g+=3,f+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[g+0]=u.x*Math.sign(a.x)+c.x*r,h[g+1]=u.y*Math.sign(a.y)+c.y*r,h[g+2]=u.z*Math.sign(a.z)+c.z*r,l[g+0]=c.x,l[g+1]=c.y,l[g+2]=c.z,Math.floor(g/m)){case 0:b.set(1,0,0),d[f+0]=Dn(b,c,"z","y",r,n),d[f+1]=1-Dn(b,c,"y","z",r,e);break;case 1:b.set(-1,0,0),d[f+0]=1-Dn(b,c,"z","y",r,n),d[f+1]=1-Dn(b,c,"y","z",r,e);break;case 2:b.set(0,1,0),d[f+0]=1-Dn(b,c,"x","z",r,t),d[f+1]=Dn(b,c,"z","x",r,n);break;case 3:b.set(0,-1,0),d[f+0]=1-Dn(b,c,"x","z",r,t),d[f+1]=1-Dn(b,c,"z","x",r,n);break;case 4:b.set(0,0,1),d[f+0]=1-Dn(b,c,"x","y",r,t),d[f+1]=1-Dn(b,c,"y","x",r,e);break;case 5:b.set(0,0,-1),d[f+0]=Dn(b,c,"x","y",r,t),d[f+1]=1-Dn(b,c,"y","x",r,e);break}}}const kh=["technical","tactical","physical","social"],Bh=["auto","authored","off"],Yp=/\bwall\b/i,Gh=["n","e","s","w"],lS={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},zh=1.8,Hh=7.32,uS=6;function Ss(i,t){return i.width!==void 0&&i.width<uS?i.width/2:t}function Zp(i){return Math.min(Math.max(i*.5,1),2.44)}const Vh=["save","beaten"],Uo=["throw","roll","kick"],Oo=["throw","roll"],Wh=["lofted","ground"],hS=3.35,dS=1,jh=12,pl=["walk","jog","run","sprint"],Xh=["walk","jog","run"];function xa(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const fS=new Set(["move","dribble","pass","shoot","tackle","collect"]),qh=/^#[0-9a-fA-F]{6}$/;function Gt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function Mi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&Gt(t,"expected [x, y] numbers"),i}function pS(i){var o,a,c,u,h;const t=i;t.version!==1&&Gt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||Gt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&Gt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&Gt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||Gt("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!qh.test(d))&&Gt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||Gt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&Gt(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||Gt(`players[${d}].team`,`unknown team ${l.team}`),Mi(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&Gt(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(Mi((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&Gt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||Gt("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&Gt(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&Gt(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&Gt(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((m,b)=>{(typeof(m==null?void 0:m.t)!="number"||m.t<0)&&Gt(`balls[${d}].path[${b}].t`,"seconds >= 0 required"),b>0&&m.t<=l.path[b-1].t&&Gt(`balls[${d}].path[${b}].t`,"times must ascend"),Mi(m.at,`balls[${d}].path[${b}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&Gt(`equipment[${d}].type`,String(l.type)),Mi(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&Gt(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=zh-1e-9&&l.width<=Hh+1e-9||Gt(`equipment[${d}].width`,`expected ${zh}..${Hh} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&Gt(`equipment[${d}].facing`,"only a goal has a facing"),Gh.includes(l.facing)||Gt(`equipment[${d}].facing`,`expected one of ${Gh.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||Gt(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||Gt("events","expected an array"),t.events.forEach((l,d)=>{var m;if((typeof l.t!="number"||l.t<0)&&Gt(`events[${d}].t`,"seconds >= 0 required"),fS.has(l.type)||Gt(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),Mi(l.to,`events[${d}].to`),l.gait!==void 0&&!pl.includes(l.gait)&&Gt(`events[${d}].gait`,`expected one of ${pl.join("|")}, got ${String(l.gait)}`),l.dur!==void 0&&!(typeof l.dur=="number"&&l.dur>0&&Number.isFinite(l.dur))&&Gt(`events[${d}].dur`,`expected seconds > 0, got ${String(l.dur)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),Mi(l.to,`events[${d}].to`),l.gait!==void 0&&!Xh.includes(l.gait)&&Gt(`events[${d}].gait`,`expected one of ${Xh.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&Gt(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&Gt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&Gt(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(Uo.includes(l.style)||Gt(`events[${d}].style`,`expected one of ${Uo.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!Oo.includes(l.style)&&Gt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${Oo.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&Gt(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||Gt(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let b=[...((m=t.players.find(x=>x.id===l.to))==null?void 0:m.start)??[0,0]];for(let x=0;x<d;x++){const g=t.events[x];(g.type==="move"||g.type==="dribble")&&g.player===l.to&&(b=[...g.to])}for(const x of t.equipment??[]){if(x.type!=="goal")continue;const g=Math.hypot(b[0]-x.at[0],b[1]-x.at[1]);g<jh&&Gt(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${g.toFixed(1)} m from the goal at [${x.at[0]}, ${x.at[1]}] (needs ${jh} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&Gt(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||Gt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((b,x)=>x<d&&b.type!=="move")&&Gt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const b=l.deflect;(typeof b!="object"||b===null||Array.isArray(b))&&Gt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),Mi(b.to,`events[${d}].deflect.to`),Wh.includes(b.style)||Gt(`events[${d}].deflect.style`,`expected one of ${Wh.join("|")}, got ${String(b.style)}`),l.type==="pass"&&!s.has(l.to)&&Gt(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&b.style==="ground")&&!s.size&&Gt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const x of t.equipment??[]){if(x.type!=="goal")continue;const f=x.facing==="e"||x.facing==="w"?b.to[1]-x.at[1]:b.to[0]-x.at[0];if(Math.abs(f)>Ss(x,hS))continue;(x.facing!==void 0?{n:b.to[1]-x.at[1],s:x.at[1]-b.to[1],e:b.to[0]-x.at[0],w:x.at[0]-b.to[0]}[x.facing]:x.at[1]<=t.pitch.length/2?b.to[1]-x.at[1]:x.at[1]-b.to[1])<=dS&&Gt(`events[${d}].deflect.to`,`[${b.to[0]}, ${b.to[1]}] is inside the goal mouth at [${x.at[0]}, ${x.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&Gt(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&Gt(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),Mi(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&Gt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&Gt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&Gt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&Gt(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&Gt(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(Uo.includes(l.style)||Gt(`events[${d}].style`,`expected one of ${Uo.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!Oo.includes(l.style)&&Gt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${Oo.join(" or ")})`),l.flightStyle!=="ground"&&Gt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&Gt(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&Gt(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&Gt(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const b=l.newBall;b!==void 0&&(typeof b!="boolean"&&Gt(`events[${d}].newBall`,`expected a boolean, got ${String(b)}`),b&&!t.events.some((x,g)=>g<d&&x.type!=="move")&&Gt(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&Gt("overlays","expected an object"),l.runPaths!==void 0&&!Bh.includes(l.runPaths)&&Gt("overlays.runPaths",`expected one of ${Bh.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||Gt("overlays.zones","expected an array"),l.zones.forEach((d,m)=>{Mi(d.at,`overlays.zones[${m}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||Gt(`overlays.zones[${m}]`,"w/h metres > 0 required"),d.color!==void 0&&!kh.includes(d.color)&&!qh.test(d.color)&&Gt(`overlays.zones[${m}].color`,`expected ${kh.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&Gt(`overlays.zones[${m}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&Gt("keeper","expected { outcome: save | beaten }"),Vh.includes(t.keeper.outcome)||Gt("keeper.outcome",`expected one of ${Vh.join("|")}, got ${String(t.keeper.outcome)}`)),t}function mS(i){const t=new Ms({color:oS,roughness:.6,toneMapped:!1}),e=new vn,n=new Me(new cS(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new qt(.17,.06),new qt(.15,.1)];for(let o=0;o<=8;o++)s.push(new qt(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new qt(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new Me(new Vl(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function Jp(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),d=(Math.floor(h/5)+.15+a()*.7)*(e/4),m=(40+a()*120)*(t/1024),b=a()>.5,x=i.createRadialGradient(l,d,0,l,d,m);x.addColorStop(0,b?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),x.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=x,i.fillRect(l-m,d-m,2*m,2*m)}Qp(i,t,e,a,1)}function Qp(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function gS(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Jp(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),tm(n);const s=new In(e);return s.colorSpace=We,s.flipY=!1,s}function tm(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const _S=2.5;function em(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const hn=6;function bS(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Jp(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),tm(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,d,m]of a){const b=s.createLinearGradient(h,l,d,m);b.addColorStop(0,"rgba(0,0,0,0.55)"),b.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=b,s.fillRect(0,0,1024,1024)}const c=_S*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",em(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new In(n);return u.colorSpace=We,u.flipY=!1,u}function xS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",em(t,40,40,176,176,34),t.fill();const e=new In(i);return e.flipY=!1,e}let Ir=null;function vS(){if(Ir)return Ir;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Ir=new In(i),Ir.userData.shared=!0,Ir}function yS(i){const t=new Me(new Wl(i/2,24).rotateX(-Math.PI/2),new tn({map:vS(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const Zn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},MS=.5;function Kr(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*Ss(s,Zn.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*MS*(o/r.length)))}return n}function SS(i){const t=Ss(i,Zn.halfW);return t===Zn.halfW?Zn:{halfW:t,top:Zp(i.width),zMin:-Xi,zMax:Xi}}function nm(i,t){return i.facing!==void 0?lS[i.facing]:i.at[1]>t/2?Math.PI:0}const Xi=.08;function AS(i){const t=Zp(i),e=new Ms({color:"#FFFFFF",roughness:.5}),n=new vn,s=i/2-Xi;for(const o of[-1,1]){const a=new Me(new ba(Xi,Xi,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new Me(new ba(Xi,Xi,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Xi,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const im=.8;function ES(i,t,e){const n=new Me(new Ii(e?i:t,im,e?t:i),new Ms({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function sm(i,t){i.scale.set(1,t,1),i.position.y=im*t/2}let Kh=null;function TS(i){return Kh??(Kh=i.loadAsync(Li("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw Kh=null,t}))}let $h=!1;function wS(i,t){if($h||!t)return;$h=!0;const e=new mn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-Zn.halfW)>.05||Math.abs(s-Zn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${Zn.halfW}, top ${s.toFixed(3)} vs ${Zn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function RS(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new O(n*(t/2+hn),0,s*(e/2+hn)))}function ml(i,t){const{width:e,length:n}=i.pitch,s=Kr(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=SS(o),h=nm(o,n),l=Math.cos(h),d=Math.sin(h);for(const m of[-u.halfW*s,u.halfW*s])for(const b of[0,u.top*s])for(const x of[u.zMin*s,u.zMax*s])r.push(new O(a+m*l+x*d,b,c-m*d+x*l))}return r}const CS=600,rm=CS/2*Math.SQRT2,Yh=30,IS=-.06,PS=-.04,LS=660496,DS="#04170c",Zh=.7,om=1.2;function FS(i,t,e){const n=Math.max(t,e),s=n/2+hn,r=om*n;return r>s?1-(1-Zh)*Jl((i-s)/(r-s)):i>=s?Zh:1}function Jl(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const NS=1.6,US=2.6;function OS(i,t){const e=Math.max(i,t);return{near:NS*e+hn,far:US*e+hn}}const Jh="#0b1f22",Ac="#010203",kS=1.02;function BS(i,t){return Math.hypot(i/2+hn,t/2+hn)*kS}const GS=.12,zS=1.15,Ql=(i,t)=>Math.hypot(i/2,t/2),am=(i,t)=>Ql(i,t)*zS,ko=12,Ec=18,Qh=.3,HS=2.4,td=1.2,VS=.4,WS=6;function jS(i,t,e=1/0){const n=i/2+hn,s=t/2+hn,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=XS(o,a,e*qS),u=[-(a+c),a+c],h=-(o+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function XS(i,t,e){if(!(e<Math.hypot(i+ko,t+ko)))return ko;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(ko,(-n+Math.sqrt(r))/2)):0}const qS=.97;function tu(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=DS,t.fillRect(0,0,512,512);let e=7;Qp(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new In(i);return n.colorSpace=We,n.wrapS=n.wrapT=1e3,n}function KS(){const i=new vn,t=new qr({color:1251867}),e=new Me(new Ii(Qh,Ec,Qh),t);e.position.y=Ec/2;const n=new Me(new Ii(HS,td,VS),t);n.position.y=Ec+td/2;const s=new L0(new wp({map:$S(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(WS),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let Pr=null;function $S(){if(Pr)return Pr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Pr=new In(i),Pr.userData.shared=!0,Pr}function YS(){return[[0,Ac],[_l,Jh],[QS,Jh],[eu,Ac],[1,Ac]]}function ZS(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of YS())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new In(i);return n.colorSpace=We,n.wrapS=n.wrapT=1001,n}const gl=.03,ed=.06,JS=.28,eu=1,_l=eu*ed/(ed+JS-gl),QS=.85;function tA(i,t={repeat:0,offset:0}){const e=Math.max(i,gl+.03);return t.repeat=(eu-_l)/(e-gl),t.offset=_l-t.repeat*(1-e),t}const eA=60,nA=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<eA,iA=-1e3;function cm(i,t,e,n,s,r){const o=new qr({map:e,vertexColors:!0}),a=new qr({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=om*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,m]of u){const b=l===n,x=new Pa(l,d,128,m).rotateX(-Math.PI/2),g=x.getAttribute("position"),f=x.getAttribute("uv"),v=b?4:3,M=new Float32Array(g.count*v);for(let T=0;T<g.count;T++){const R=g.getX(T),I=g.getZ(T);f.setXY(T,R/Yh,I/Yh);const D=Math.hypot(R,I),A=FS(D,i,t);M[v*T]=M[v*T+1]=M[v*T+2]=A,b&&(M[v*T+3]=d>l?1-Jl((D-l)/(d-l)):1)}f.needsUpdate=!0,x.setAttribute("color",new Ce(M,v));const y=new Me(x,b?a:o);y.userData[r]=b,y.position.y=IS,h.push(y)}return h}function sA(i,t,e=1,n=tu()){const s=new vn;n.anisotropy=e;for(const r of cm(i,t,n,Ql(i,t),am(i,t),"floatRim"))s.add(r);return s}const Tc=16;function rA(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=Ql(i,t),c=am(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=Tc;l++){const d=Math.round(255*(1-Jl(l/Tc)));u.addColorStop(l/Tc,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new In(n);return h.flipY=!1,h}function oA(i,t,e=1,n=rm,s=tu()){const r=new vn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+hn+1),a=o*(1-GS),c=Math.max(a,Math.max(i,t)/2+hn);for(const h of cm(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=jS(i,t,o);for(const[h,l]of u){const d=KS();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function aA(i,t,e=1,n=1,s=rm){var E;const r=Kr(t,n),{width:o,length:a}=t.pitch,c=(P,N=0)=>new O(P[0]-o/2,N,P[1]-a/2),u=P=>(P.anisotropy=e,P),h=u(bS(o,a,hn)),l=()=>new kn(o+2*hn,a+2*hn).rotateX(-Math.PI/2),d=new Me(l(),new qr({map:h,transparent:!0})),m=new Me(l(),new qr({map:h,alphaMap:rA(o,a,hn),transparent:!0}));for(const P of[d,m])P.position.y=-.02,P.renderOrder=-1,P.receiveShadow=!0;const b=new Me(new kn((o+2*hn)*1.5,(a+2*hn)*1.5).rotateX(-Math.PI/2),new tn({map:xS(),transparent:!0,depthWrite:!1}));b.position.y=PS,b.renderOrder=-2,i.add(b);const x=new Me(new kn(o,a).rotateX(-Math.PI/2),new Ms({map:u(gS(o,a)),roughness:.9}));x.receiveShadow=!0;const g=tu(),f=oA(o,a,e,s,g),v=sA(o,a,e,g);i.add(d,m,x,f,v);const M=P=>{f.visible=P,b.visible=P,d.visible=P,v.visible=!P,m.visible=!P};M(!0);const y=f.children.filter(P=>P.name==="mast"),T=P=>{for(const N of y)N.visible=P};T(!1);const R=Zl(),I=[],D=[];for(const P of t.equipment??[])if(P.type==="cone"){const N=mS(n);N.position.copy(c(P.at,0)),i.add(N),D.push(N)}else{const N=Ss(P,Zn.halfW)!==Zn.halfW,B=N?AS(P.width):(await TS(R)).clone();B.position.copy(c(P.at)),B.rotation.y=nm(P,a),B.scale.setScalar(r),i.add(B),I.push(B),N||wS(B,r)}const A=[];for(const P of((E=t.overlays)==null?void 0:E.zones)??[]){if(!Yp.test(P.label??""))continue;const N=ES(Math.max(P.w,P.h),Math.min(P.w,P.h),P.w>=P.h),B=c(P.at);N.position.set(B.x,0,B.z),sm(N,n),i.add(N),A.push(N)}return{toWorld:c,goals:I,cones:D,boards:A,setWorld:M,setMasts:T}}const nd=new O(10,20,8).normalize(),cA=1.05,bl=2048,lA=1024,uA=1600,hA=(i,t)=>Math.max(i,t)>=uA?bl:lA,dA=5;function fA(i){const t=new mn().setFromPoints(i).getCenter(new O);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function pA(i,t=()=>new lM({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=Oh(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=cA,e.outputColorSpace=We,i.appendChild(o);const a=new P0;a.background=new Yt(tS);const c=new xn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new Gp(16772564,dA);u.position.copy(nd).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(bl,bl),u.shadow.radius=4,a.add(u,u.target,new s_(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var gt;const Q=hA(s.width*h,s.height*h);u.shadow.mapSize.width!==Q&&(u.shadow.mapSize.set(Q,Q),(gt=u.shadow.map)==null||gt.dispose(),u.shadow.map=null)}l();function d(){const Q=Oh(i,window,s),gt=Math.min(devicePixelRatio,2),At=gt!==h;if(At&&(h=gt,e.setPixelRatio(h)),Q.width!==s.width||Q.height!==s.height){s=Q,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),E();for(const wt of[...r])wt()}else At&&(e.setSize(s.width,s.height,!1),l(),E())}const m=typeof ResizeObserver=="function"?new ResizeObserver(d):null;m?m.observe(i):addEventListener("resize",d);let b=null;const x=()=>{g(),d()};function g(){b==null||b.removeEventListener("change",x),b=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,b==null||b.addEventListener("change",x)}g();let f=!0,v=!1,M=0;function y(){v||(v=!0,M=requestAnimationFrame(U))}function T(){f=!document.hidden,f&&(N=-1,y())}document.addEventListener("visibilitychange",T);let R=!0,I=Uh,D=0;const A=new O;function E(){I=JM(I),f&&(v||(N=-1),y())}let P=()=>{},N=-1,B=null,j=null,H=null,k=!0;function z(Q,gt){if(P(Q,gt),ut(),B&&a.fog){const At=c.position.length();a.fog.near=At+B.near,a.fog.far=At+B.far}e.render(a,c),D++}function U(Q){if(v=!1,!f)return;const gt=N<0?0:(Q-N)/1e3;N=Q,A.copy(c.position),z(gt,Q),I=QM(I,A.distanceTo(c.position),gt),R||Kp(I)?y():N=-1}function J(Q){if(!Q.length)return;const{centre:gt,radius:At,distance:wt,far:jt}=fA(Q);u.target.position.copy(gt),u.target.updateMatrixWorld(),u.position.copy(nd).multiplyScalar(wt).add(gt);const Wt=u.shadow.camera;Wt.left=-At,Wt.right=At,Wt.top=At,Wt.bottom=-At,Wt.near=.5,Wt.far=jt,Wt.updateProjectionMatrix()}function Y(Q){if(B=Q,!Q){a.fog=null;return}a.fog??(a.fog=new kl(LS,Q.near,Q.far))}function ct(Q){if(H=Q,!Q){j&&(j.visible=!1);return}j||(j=new Me(new kn(1,1),new tn({map:ZS(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),j.renderOrder=iA,j.frustumCulled=!1,a.add(j)),j.visible=k}function St(Q){k=Q,j&&(j.visible=Q&&!!H)}const Ft=new O,it=new O,mt={repeat:0,offset:0};function ut(){if(!j||!H)return;if(!k){j.visible=!1;return}if(c.getWorldDirection(Ft),j.visible=nA(Ft.y),!j.visible)return;const Q=Math.hypot(c.position.x,c.position.z)||1;it.set(-c.position.x/Q*H,0,-c.position.z/Q*H),it.project(c);const gt=(1-it.y)/2,At=c.near*1.5,wt=2*At*Math.tan(c.fov*Math.PI/360);j.scale.set(wt*c.aspect,wt,1),j.quaternion.copy(c.quaternion),j.position.copy(c.position).addScaledVector(Ft,At),tA(gt,mt);const jt=j.material.map;jt.repeat.set(1,mt.repeat),jt.offset.set(0,mt.offset)}return{scene:a,camera:c,renderer:e,fitShadow:J,setFog:Y,setHorizon:ct,setSky:St,size:()=>({...s}),remeasure:d,onBox(Q){return r.add(Q),()=>{r.delete(Q)}},start(Q){P=Q,y()},park(Q){return P!==Q?!1:(cancelAnimationFrame(M),v=!1,P=()=>{},I=Uh,D=0,N=-1,!0)},step(Q,gt=performance.now()){z(Q,gt)},frames:()=>D,rule:{enable(){R=!1},play(){I=YM(I),E()},pause(){I=ZM(I),E()},wake:E,snap:()=>$M(I)},dispose(){f=!1,r.clear(),b==null||b.removeEventListener("change",x),m?m.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",T),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function mA(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of um(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);lm(i)}function lm(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of um(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const um=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function gA(i){const t=new Map,e=new Map,n=i.clone();return hm(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function hm(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)hm(i.children[n],t.children[n],e)}const id="db7155c0",dm=24,_A=/^[\w-]+$/,bA=async i=>await(await fetch(Li(`drills/${i}.json`))).json();class AI{constructor(t=bA,e=null,n=dm){an(this,"mem",new Map);an(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===id)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:id,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&_A.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const xA="tactivo-engine",ls="drills",sd=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function vA(){try{return globalThis.indexedDB}catch{return}}function EI(i=vA()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(xA,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(ls)&&r.result.deleteObjectStore(ls),r.result.createObjectStore(ls)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(ls,"readonly").objectStore(ls);return await sd(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await sd(r.transaction(ls,"readwrite").objectStore(ls).put(s,n))}catch{}}}}const rd=["plain","stripes","hoops","halves","sash","sleeves"],od=["mixed","light","mediumLight","medium","mediumDark","dark"],yA="mixed",fm="#FFFFFF",wc=/^#[0-9a-fA-F]{6}$/;function xl(i){if(typeof i!="object"||i===null)return Re("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!wc.test(t.a)))return Re("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!wc.test(t.b)))return Re("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!rd.includes(t.pattern)))return Re(`kit: pattern must be one of ${rd.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!wc.test(t[e])))return Re(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!od.includes(t.skin))?Re(`kit: skin must be one of ${od.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??fm,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const ad=["boys","girls","mixed"],pm="mixed";function vl(i){return i==null?pm:typeof i!="string"||!ad.includes(i)?Re(`squad: must be one of ${ad.join(", ")}`):i}const cd=["shirt","full"],mm="shirt";function ld(i){return i==null?mm:typeof i!="string"||!cd.includes(i)?Re(`framing: must be one of ${cd.join(", ")}`):i}const ud=new Set(["fit","broadcast"]),gm=.5,MA=5,TI={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},SA=100,yl=1/0,AA=2e3,ca=/^[\w-]+$/,EA=/^[A-Za-z0-9_./-]{1,80}$/,TA=i=>EA.test(i)&&!i.includes(".."),wA=30,RA=85,CA=i=>Math.min(Math.max(i,wA),RA),nr=i=>({state:i,effects:[],out:[]}),la=(i,t,e,n)=>({state:i,effects:[],out:[{type:"error",code:t,message:e,...n!==void 0?{key:n}:{}}]}),IA=new Set(["auto","authored","off"]),_m=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply","customiseStage","customiseOutcome","customiseStrip","customiseSaved"]);function wI(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?bm(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const bm=i=>Math.min(Math.max(i,gm),MA);function xm(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const nu=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},vm=(i,t)=>{var n;const e=nu(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},Re=i=>({error:i,code:"bad_message"}),Ml=i=>{const t=i.narrationBase;return typeof t=="string"&&/^https?:\/\/[^\s]+\/$/.test(t)?{narrationBase:t}:{}};function RI(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||_m.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return Re("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return Re("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!ca.test(n.key)))return{error:`load: key must match ${ca.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return Re("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return Re("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return Re("load: intro.hold must be a finite number");s={text:a.text,hold:bm(a.hold)}}let r;if(t.kit!==void 0){const a=xl(t.kit);if("error"in a)return a;r=a}const o=vl(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{},...Ml(t)}}case"preview":case"kit":{const e=xl(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=ld(t.framing);if(typeof n!="string")return n;const s=vl(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=ld(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return Re("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&TA(n)?{track:n}:{},...Ml(t)}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&ca.test(e)).slice(0,dm)}:Re("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?Re("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?Re("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?Re("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?Re("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!ud.has(t.follow)?Re(`setCamera: follow must be one of ${[...ud].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?Re("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return Re(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!IA.has(t.runPaths))return Re("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return Re(`unknown message type: ${t.type}`)}}const PA=/^https?:\/\/[^\s]+$/,Ws=(i,t)=>typeof i=="string"&&i.length>0&&i.length<=t;function CI(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||!t.type.startsWith("customise")||_m.has(t.type))return null;const e=()=>typeof t.pilot=="string"&&ca.test(t.pilot)&&typeof t.age=="number"&&Number.isFinite(t.age)&&t.age>=5&&t.age<=18,n=()=>{let s;if(t.kit!==void 0&&t.kit!==null){const o=xl(t.kit);if("error"in o)return o;s=o}const r=vl(t.squad);return typeof r!="string"?r:{...s?{kit:s}:{},...t.squad!==void 0&&t.squad!==null?{squad:r}:{},...Ml(t)}};switch(t.type){case"customiseReset":{if(!e()||!Ws(t.fnBase,300)||!PA.test(t.fnBase)||!Ws(t.apikey,1024))return Re("customiseReset: {pilot, age, fnBase, apikey}");const s=n();if("error"in s)return s;const r=t.owner===void 0?"":Ws(t.owner,64)?t.owner:null;if(r===null)return Re("customiseReset: owner (1-64)");const o=t.device===void 0?"":typeof t.device=="string"&&/^[0-9a-f-]{36}$/.test(t.device)?t.device:null;return o===null?Re("customiseReset: device (36 chars of 0-9a-f-)"):{type:"customiseReset",pilot:t.pilot,age:t.age,fnBase:t.fnBase,apikey:t.apikey,...r?{owner:r}:{},...o?{device:o}:{},look:s}}case"customise":return!e()||!Ws(t.request,500)||!Ws(t.jwt,4096)?Re("customise: {pilot, age, request (1-500), jwt}"):{type:"customise",pilot:t.pilot,age:t.age,request:t.request,jwt:t.jwt};case"customiseVersion":case"customiseChip":return typeof t.index!="number"||!Number.isInteger(t.index)||t.index<0?Re(`${t.type}: index must be a whole number >= 0`):{type:t.type,index:t.index};case"customiseDrop":return typeof t.line!="number"||!Number.isInteger(t.line)||t.line<0?Re("customiseDrop: line must be a whole number >= 0"):{type:"customiseDrop",line:t.line};case"customiseSave":return Ws(t.jwt,4096)?{type:"customiseSave",jwt:t.jwt}:Re("customiseSave: {jwt}");case"customiseShow":{const s=t.version,r=typeof s=="object"&&s!==null&&Array.isArray(s.ops)&&typeof s.said=="string"&&(s.script===null||typeof s.script=="object")&&(s.changed===void 0||Array.isArray(s.changed)),o=t.voiceUrl===null||t.voiceUrl===void 0||typeof t.voiceUrl=="string"&&/^https:\/\/[^\s]+$/.test(t.voiceUrl),a=t.voiceScript===null||t.voiceScript===void 0||typeof t.voiceScript=="object"&&!Array.isArray(t.voiceScript);if(!e()||!r||!o||!a)return Re("customiseShow: {pilot, age, version {script, ops, said, changed}, voiceUrl, voiceScript}");const c=n();return"error"in c?c:{type:"customiseShow",pilot:t.pilot,age:t.age,version:{script:s.script,ops:s.ops,said:s.said,changed:s.changed??[]},voiceUrl:t.voiceUrl??null,voiceScript:t.voiceScript??null,look:c}}}return Re(`unknown customise message ${t.type}`)}function II(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{},...t.narrationBase?{narrationBase:t.narrationBase}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??mm,squad:t.squad??pm}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return la(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return la(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:CA(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?nr(i):la(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function PI(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return nr(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:xm(n,0),a=r?s?Math.max(t.hookHold,gm):r.hold:0,c=r?a:nu(n,o),u=s?yl:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+AA:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:vm(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?nr(i):la({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`,t.key);case"hookEnded":return i.holdUntilMs!==yl?nr(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function LI(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===yl?i.hookCeilingMs:i.holdUntilMs;return e<c?nr(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=xm(i.narration,t),s=i.playing&&e-i.lastTimeMs>=SA;if(n===i.cue&&!s)return nr(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?nu(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[vm(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const iu=["shirt","jersey","top","tshirt"];let Sn=null;async function Da(i,t,e=Li("assets/ochi.glb"),n,s=0,r){if(!Sn||Sn.url!==e){const a=await(n??Zl()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});Sn={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=Sn.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=gA(Sn.variants[(h%Sn.variants.length+Sn.variants.length)%Sn.variants.length]);l.traverse(m=>{m.castShadow=m.type==="SkinnedMesh",c&&m.isBone&&(m.name=m.name.replace(/_\d+$/,""))}),i.add(l);const d=new E_(l);o.push({root:l,mixer:d,clips:new Map(Sn.clips.map(m=>[m.name,m]))})}return o}const hd=new WeakMap;function ym(i){let t=hd.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),hd.set(i.root,t)),t}function su(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const Mm=su(/^foot[LR]$/),Sm=su(/^hand[LR]$/),Sl=su(/^spine00[12]$/),$r=.6499;function ru(i){const t=new Yt(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/$r,1/e)):t}let Rc=null;const Am=3e3;function Em(i){return Rc??(Rc=(async()=>{let t;try{return await Promise.race([i(Li("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),Am)})])}finally{clearTimeout(t)}})().catch(t=>{throw Rc=null,t})),Rc}async function LA(i,t=Li("assets/ochi.glb"),e){await Da(new vn,0,t,e);const n=i.toLowerCase();return Sn?Sn.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function DA(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();iu.some(o=>r.includes(o))&&t.push(r)}}),t}async function Tm(i,t=Li("assets/ochi.glb"),e){await Da(new vn,0,t,e);const n=Sn?Sn.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>DA(Sn.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const ou=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function wm(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;iu.some(o=>r.toLowerCase().includes(o))&&t.push(ou(r))}}),t}async function Rm(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>Li(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await Em(r),c=[...new Set(n.map(d=>{var m;return(m=a.channels[d])==null?void 0:m.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new Bp,h=new Map,l=new Map;for(const d of new Set(t))for(const m of c){const b=(o=a.characters[d])==null?void 0:o.files[m];if(!b)continue;let x=l.get(b);x||(x=await u.loadAsync(s(b)),x.colorSpace="",x.flipY=!1,x.anisotropy=16,x.needsUpdate=!0,l.set(b,x));const g=h.get(d)??[];g[m]=x,h.set(d,g)}return h.size?{channels:a.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function Cm(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await Em(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const dd=new Map;function Im(i){if(!i)return null;let t=dd.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new In(n),t.colorSpace="",t.anisotropy=8,dd.set(i,t)}return t}const Cc=new Yt("#14181B"),Ic=new Yt("#FFFFFF"),FA=.5;function Pm(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??fm},a=n.from!==void 0&&kA(n.from,s),c=[];return i.root.traverse(u=>{const h=u;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((d,m)=>{const b=d.name||h.name,x=b.toLowerCase();if(!iu.some(g=>x.includes(g))){const g=md.get(d)??d,f=Fm(s);if(!f&&d===g||a&&d!==g)return;const v=f?g.clone():g;f&&(v.userData.drillOwned=!0,md.set(v,g),BA(v,s,h,r),c.push(v)),d!==v&&d.userData.drillOwned&&d.dispose(),Array.isArray(h.material)?h.material[m]=v:h.material=v;return}{const g=d.clone();d.userData.drillOwned&&d.dispose(),g.userData.drillOwned=!0,g.color=ru(o.a),zA(g,o,e,ou(b),{...n,exact:r}),c.push(g),Array.isArray(h.material)?h.material[m]=g:h.material=g}})}),c}const NA=/^(thigh[LR]|pelvis[LR]|spine)$/,UA=/^shin[LR]$/,OA=8,fd=i=>Math.round(i*100)/100,Yr=[.8,.9],Al=[fd(1-Yr[1]),fd(1-Yr[0])],Lm=8,El=1,Dm={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},Vr=i=>i!==void 0&&i!==yA;function pd(i,t){var r;const e=[new de(-1,-1,-1,-1),new de(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<OA;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const Fm=i=>{const t=Nm(i);return!!(t.shorts||t.socks||t.tone)},Nm=i=>({shorts:i.shorts,socks:i.socks,tone:Vr(i.skin)?Dm[i.skin]:void 0}),kA=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&Vr(i.skin)===Vr(t.skin)&&(!Vr(i.skin)||i.skin===t.skin),md=new WeakMap;function BA(i,t,e,n){const s=pd(e,NA),r=pd(e,UA),o=Nm(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:ms(o.shorts??"#000000",n)},kitSocksC:{value:ms(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:ms(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
	float kitBand = vMapUv.x * ${Lm.toFixed(1)};
	float kitSkinAt = step( ${El.toFixed(1)}, kitBand ) * step( kitBand, ${(El+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${Al[0].toFixed(2)}, ${Al[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${Yr[0].toFixed(2)}, ${Yr[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const GA=i=>{const t=new Yt(i),e=Math.max(t.r,t.g,t.b);return e>$r?$r/e:1},ms=(i,t)=>t?new Yt(i):ru(i).multiplyScalar($r);function Tl(i,t){const e=[new de(0,0,0,0),new de(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function zA(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=Tl(e==null?void 0:e.channels,t.pattern),l=Tl(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=o?a==null?void 0:a[n]:void 0,m=d?Im(o):null,b={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:ms(t.a,c)},kitB:{value:ms(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:ms((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:ms((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:m},kitNumO:{value:new qt(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new qt(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new qt(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:m?1:0},kitNumFlip:{value:FA*(c?1:GA(t.a))}};i.userData.kitUniforms=b,i.onBeforeCompile=x=>{Object.assign(x.uniforms,b),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${Cc.r.toFixed(4)}, ${Cc.g.toFixed(4)}, ${Cc.b.toFixed(4)} )
		: vec3( ${Ic.r.toFixed(4)}, ${Ic.g.toFixed(4)}, ${Ic.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const HA=.18;function VA(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const DI=Object.freeze(Object.defineProperty({__proto__:null,ATLAS_BANDS:Lm,KIT_FADE:HA,KIT_REGISTRY_TIMEOUT:Am,SHIRT_MAP_MEAN:$r,SHORTS_CUT:Al,SKIN_BAND:El,SKIN_TONES:Dm,SOCKS_CUT:Yr,bodyNarrows:Fm,findAnkles:Mm,findHands:Sm,findHead:ym,findTrunk:Sl,kitNumberBoxes:Cm,kitNumberTexture:Im,kitSelectors:Tl,kitSlugOf:ou,kitTint:ru,loadKitMasks:Rm,loadPlayers:Da,recolour:Pm,shirtSlugs:wm,skinNarrows:Vr,squadVariants:Tm,stepKitFade:VA,variantIndexOf:LA},Symbol.toStringTag,{value:"Module"})),cr=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function li(i){const t=cr(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=t-s*(i.hold??0),a=(n*n-r*r)/(2*e),c=(n*n-s*s)/(2*e);if(a+c<=o){const h=o-a-c;return{D:t,t1:(n-r)/e,t2:h/n,t3:(n-s)/e,d1:a,d2:h,peak:n}}const u=Math.sqrt(e*o+(r*r+s*s)/2);return{D:t,t1:(u-r)/e,t2:0,t3:(u-s)/e,d1:(u*u-r*r)/(2*e),d2:0,peak:u}}function se(i){const t=li(i);return t.t1+t.t2+t.t3+(i.hold??0)}function Pc(i,t){const e=li(i),n=i.accel,s=Math.min(i.startSpeed??0,i.cruise),r=i.endSpeed??0,o=Math.min(Math.max(t,0),e.D);if(o<=e.d1)return(Math.sqrt(s*s+2*n*o)-s)/n;if(o<=e.d1+e.d2)return e.t1+(o-e.d1)/e.peak;const a=e.D-r*(i.hold??0);return o>a&&r>0?e.t1+e.t2+e.t3+(o-a)/r:e.t1+e.t2+(e.peak-Math.sqrt(Math.max(0,e.peak*e.peak-2*n*(o-e.d1-e.d2))))/n}function Jn(i,t){const e=li(i),n=e.t1+e.t2+e.t3,s=n+(i.hold??0),r=Math.min(Math.max(t-i.t0,0),s),o=i.accel;let a,c;if(r<=e.t1){const h=Math.min(i.startSpeed??0,i.cruise);a=h*r+.5*o*r*r,c=h+o*r}else if(r<=e.t1+e.t2)a=e.d1+e.peak*(r-e.t1),c=e.peak;else if(r<=n){const h=r-e.t1-e.t2;a=e.d1+e.d2+e.peak*h-.5*o*h*h,c=e.peak-o*h}else c=i.endSpeed??0,a=e.D-c*(s-r);const u=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*u,i.from[1]+(i.to[1]-i.from[1])*u],speed:c}}const WA=.25,Um=.5,va=.5,jA=1e-4,gd=1e-6;function au(i,t){return!!t.flow&&(i.endSpeed??0)>0&&i.endSpeed===t.startSpeed&&Math.abs(i.t0+se(i)-t.t0)<gd&&cr(i.to,t.from)<gd}function wl(i,t){if(!au(i,t))return null;const e=cr(i.from,i.to),n=cr(t.from,t.to);if(e<=0||n<=0)return null;const s=[(i.to[0]-i.from[0])/e,(i.to[1]-i.from[1])/e],r=[(t.to[0]-t.from[0])/n,(t.to[1]-t.from[1])/n],o=Math.acos(Math.min(1,Math.max(-1,s[0]*r[0]+s[1]*r[1])));if(o<jA)return null;const a=Math.min(2*Um/Math.sin(o/2),va*e,va*n);return{corner:[i.to[0],i.to[1]],dA:s,dB:r,L:a,turn:o}}function Om(i,t){const e=-(1-t)*(1-t),n=t*t,{corner:s,dA:r,dB:o,L:a}=i;return{pos:[s[0]+a*(e*r[0]+n*o[0]),s[1]+a*(e*r[1]+n*o[1])],tan:[(1-t)*r[0]+t*o[0],(1-t)*r[1]+t*o[1]]}}function XA(i,t){const e=Math.sin(t);return e/(e+Math.sin(i-t))}function Ki(i,t){let e=-1;for(let a=0;a<i.length;a++)t>=i[a].t0&&(e=a);if(e<0)return null;const n=i[e],{pos:s,speed:r}=Jn(n,t),o=cr(n.from,n.to);if(o>0){const a=Math.hypot(s[0]-n.from[0],s[1]-n.from[1]);let c=null,u=0;const h=e+1<i.length?wl(n,i[e+1]):null;if(h&&a>o-h.L)c=h,u=(a-(o-h.L))/(2*h.L);else{const l=e>0?wl(i[e-1],n):null;l&&a<l.L&&(c=l,u=(l.L+a)/(2*l.L))}if(c){const{pos:l,tan:d}=Om(c,u);return{pos:l,speed:r*Math.hypot(d[0],d[1]),vel:[r*d[0],r*d[1]]}}}return t>n.t0+se(n)||o<=0?{pos:s,speed:r,vel:[0,0]}:{pos:s,speed:r,vel:[(n.to[0]-n.from[0])/o*r,(n.to[1]-n.from[1])/o*r]}}function _d(i,t){var e;return((e=Ki(i,t))==null?void 0:e.vel)??[0,0]}function qA(i,t,e=WA){const n=_d(i,t),s=_d(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const KA=2.5;function $A(i,t){let e=0;for(const n of i)t>=n.t0&&(e=li(n).peak);return Math.min(1,e/KA)}const YA=.035,ZA=.1,bd=.4,JA=1;function QA(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||cr(s.from,s.to)<JA)continue;const r=s.t0+se(s)-ZA,o=(t-r)/bd;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+bd)||(e=Math.max(e,YA*.5*(1-Math.cos(2*Math.PI*o))))}return e}function Fe(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function tE(i,t=0){return i-t}function Fa(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function eE(i,t=58*Math.PI/180,e=.85){const n=Fa(i);return Math.min(t,Math.max(-t,n))*e}const nE=.3;function iE(i,t,e){return e>0?i+(t-i)*(1-Math.pow(1-nE,e*60)):i}const sE=1.2,Lc=180*Math.PI/180,Dc=120*Math.PI/180,xd=70*Math.PI/180;function cu(i){return i<=0?Lc:i<=2.3?Lc+(Dc-Lc)*i/2.3:i>=5.48?xd:Dc+(xd-Dc)*(i-2.3)/(5.48-2.3)}const rE=.12,vd=15*Math.PI/180;function oE(i){return Math.max(-vd,Math.min(vd,i*rE))}const aE=.001;function Ei(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=aE}function cE(i,t,e,n){return e||n||!Ei(i,t)?null:Fe(i,t)}function yd(i,t,e,n=Math.PI*2){const s=t-i,r=Fa(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const lE=2.3,Br=1.1,uE=1.15,Md=.6,Sd=1.2,ua=.88,hE=1-ua,dE=.15,Bo=.28;function Yi(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?uE:lE),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?Md:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??Sd;u=(e<ua?h*Math.sin(Math.PI*e/ua):dE*h*Math.sin(Math.PI*(e-ua)/hE))+c}else if(n==="lofted")u=(i.loft??Sd)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=Bo?o+(h-o)*Math.sin(Math.PI/2*(e/Bo)):a+(h-a)*Math.cos(Math.PI/2*((e-Bo)/(1-Bo)))}else n==="drop"?u=(i.fromHeight??Md)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const Ad=new WeakMap;function fE(i){const t=Ad.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,Yi(i,i.t0+i.duration*n/32).height);return Ad.set(i,e),e}function km(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=Yi(i,n),r=Yi(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function Bm(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const Ed=3,Cn=2.52,Rn=4,js=.8,Go=1,Si=.3,Lr=.6,Mn=.15,pE=.5,ri=.45,Gm=.4,zm=.7,Td=Math.PI/12,Xs=4,mE=.6,wd=.4,gE=.3,_E=.15,bE=.4,xE=.35,Zr=.3,vE=Math.PI/4,yE=.25,ME={left:"gk_dive_a",right:"gk_dive_b"},Hm=4,SE=.12,AE=.25,EE=.35;function Rd(i){return Math.min(AE,Math.max(SE,i*EE))}const TE=1.3,wE=.15;function Cd(i,t,e){const n=i-wE,s=i+t-n,r=Math.min(TE,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const RE=1.8,Id=.3,CE=.7,IE=.9,PE=2.5,bn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},LE={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:bn.roll},zo={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},DE=.8;function FE(i,t,e,n=Na){const s=Hm*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-$m)*t)}const NE=3;function UE(i,t,e){if(t<=0)return null;const n=Math.min(NE,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const qn=1,Ho=.25,Fc=.5,Pd=.8,OE=.4,Vm=3,kE=.6,BE=2.3,Ld=.9,qs=.3,Dd=.4,GE=12,zE=8,HE=3,VE=.25;function Fd(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Rl,r/zE),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(VE*r,HE)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Rl,r/GE),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const WE=.6,Rl=.2;function jE(i,t,e){const n=WE*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Rl,e/n)}const XE=16,qE=12,Nc=2,KE=8,FI=6,$E=.1,YE=2.44;function gs(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Wm(i,t,e){const n=gs(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const Uc=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],Vo={id:"pass_a",duration:.567,contact:.167,reach:.89},Nd="jog_back_a",Dr=.5,ZE=.5,JE=.3,QE=.9,Ud=.5,t1=.2,Od=.8,Oc=.5,e1=1.6,Wo={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},kd=3,n1=.1,jo=["walk","jog","run"],ha=.5,i1=1.5*ha,s1=.42*Math.SQRT1_2,r1=12,o1=.15;function a1(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=Ss(n,Na)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function Bd(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const m of t){const b=Math.hypot(s[0]-m[0],s[1]-m[1]);e-b>u+1e-9&&(u=e-b,c=m)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?Ze(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>o+1e-9&&(r=s,o=d)}return r}function Gd(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Fr(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const c1=.2;function zd(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function Hd(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Ze([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ne+n1?null:[t[0]-Ne*s[0],t[1]-Ne*s[1]],o=e?Ze([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Ne,Gm),zm);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function l1(i){return i<15?"roll":i<30?"throw":"kick"}function jm(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function u1(i,t,e,n,s){const{reach:r,at:o}=jm(i,e,n);if(r>Vm*s)return null;const a=Ze([e[0]-i[0],e[1]-i[1]]);if(r<=kE*s)return{kind:"catch",clip:bn.catch.id,clipDuration:bn.catch.duration,contactOffset:bn.catch.contact,contact:[i[0]+Ne*a[0],i[1]+Ne*a[1]],travelTo:null};const c=Zm(i,t,n),u=bn.dive[c],h=Ze([o[0]-i[0],o[1]-i[1]]),l=Math.min(BE*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function h1(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=Ze(c);return[a[0]+Id*n*u[0],a[1]+Id*n*u[1]]}function Xm(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function qm(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=Xm(r,n))}return s}const d1=[{id:"header_a",duration:1.9,contact:1}],f1=1.57,Vd=.1,Wd=.6,kc=2,Xo=.02,Bc=.6,p1=2.5,m1=.22,g1=3,_1=6.5;function Gc(i,t){return Math.min(Math.max(m1*i,g1),_1)*t}const b1=10,x1=1.7;function v1(i,t,e,n){const s=e??[t[0],t[1]],r=Ze([s[0]-i[0],s[1]-i[1]]),o=[i[0]+Vd*n*r[0],i[1]+Vd*n*r[1]],a=d1[0];return{contact:o,height:f1*n,clip:a,set:[i[0]+Ne*r[0],i[1]+Ne*r[1]],faceAt:s}}const jd=.4,y1=.3,M1=18,S1=10,A1=.45,E1=.8,da={id:"strike_jog_a",contact:.4},T1=1,w1={strike_jog_a:{loop:!1,category:"shoot",ballContact:da.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Km(i){var t;for(const[e,n]of Object.entries(w1))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Xd=.15,R1=.2,Na=3.35,$m=.5;function C1(i,t,e,n,s=1){let r=null,o=1/0;for(const b of e){const x=Math.hypot(b.at[0]-t[0],b.at[1]-t[1]);x<o&&(o=x,r=b)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-$m)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const b=Fe(i,c),x=g=>(g[0]-i[0])*Math.cos(b)-(g[1]-i[1])*Math.sin(b);return u.sort((g,f)=>x(f)-x(g)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),m=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<m-1e-6?u[0]:u[1]}function qd(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const Ym=.35;let Ne=Ym;function Kd(i){Ne=i}function I1(){return Ne/Ym}function Kn(i,t){return[i[0]+Ne*Math.sin(t),i[1]+Ne*Math.cos(t)]}function zc(i,t,e){const n=Fe(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function Zm(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Ze(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function $d(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function P1(i,t,e){const n=Ze([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Ze([e[0]-i[0],e[1]-i[1]]);const m=n[0]*s[1]-n[1]*s[0];r=Math.abs(m)<1e-6?1:Math.sign(m)}else r=1,s=$d([-n[0],-n[1]],-r*Td);const o=$d(n,r*Td),a=[i[0]+Ne*o[0],i[1]+Ne*o[1]],c=[i[0]+Ne*s[0],i[1]+Ne*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,Gm),zm);return{contact:a,set:[a[0]+d*l[0],a[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const L1=.5,D1=1.4,Yd={walk:.8,jog:1.2,run:2.2},F1=.25,N1=.7,U1=.3,O1=2,Nr=.4,k1=10,B1=8,G1=2.5,Zd=6,z1=2,Jd=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Qd=1.4;function tf(i,t,e){const n=i.t0+se(i),s=Hc(i,t);let r=0,o=Math.max(n-t,.001);if(Hc(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;Hc(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function Hc(i,t){const e=Jn(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function H1(i,t,e,n,s,r={}){const o=se(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=Ze([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Fe(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=I=>(I[0]-i.from[0])*a[0]+(I[1]-i.from[1])*a[1],l=i.t0+o,d=h(e),m=I1(),b=(r.others??[]).filter(I=>Math.abs((I[0]-i.from[0])*Math.cos(c)-(I[1]-i.from[1])*Math.sin(c))<=z1).map(I=>h(I)),x=N1*m,g=F1*m,f=I=>h(Jn(i,I).pos),v=[],M=[];let y=i.t0,T=[...t];const R=Math.ceil(li(i).D/(.5*Math.min(n,Nr*3)))+8;for(let I=0;;I++){M.push(y);const D=h(T),A=d-D,E=r.turnOut?Nr:n,P=Nr*(1+Qd),N=I===0&&!!r.turnIn||!!r.turnOut&&A<=P,B=N?Ne:x;if(A<=Qd*E||I===R-1||d-(f(y)+B)<.05){const V=Math.hypot(e[0]-T[0],e[1]-T[1]);let Pe=y;if(V>1e-6){const Qt=Math.max(Jn(i,y).speed,L1*i.cruise),Jt=Math.min(2*V/(Qt+Br*(V/Qt)/2),Math.max(l-y,.2));v.push({from:T,to:[...e],t0:y,duration:Jt,style:"push",endFrac:0}),Pe=y+Jt}return Pe<l&&v.push({from:[...e],to:[...e],t0:Pe,duration:l-Pe,style:"ground"}),{flights:v,touches:M,restEnd:Math.max(Pe,l)}}let j=N?Nr:n;if(!N&&A>k1){let V=A;for(const Pe of b)Pe>D&&(V=Math.min(V,Pe-D));j*=Math.min(Math.max(V/B1,1),G1)}const H=j;j*=1+Jd[I%Jd.length],!N&&r.turnOut&&A-j<P&&(j=Math.max(A-P,Nr));const k=Math.min(j,D1*i.cruise*i.cruise/Br),z=tf(i,y,k),U=Math.max(i.cruise*z-k,0),J=Math.min(B,D-f(y)+U),Y=f(y)+J,ct=Math.max(D,Y),St=H>O1?s:s*(I%2?-1:1),Ft=Math.min(g,U1*k),it=(T[0]-i.from[0])*u[0]+(T[1]-i.from[1])*u[1],mt=Math.abs(St*Ft-it),ut=Math.sqrt(Math.max(Zd*Zd-mt*mt,0)),Q=Math.min(ct+k,D+ut,d),gt=tf(i,y,Q-Y),At=(Q-D)/gt,wt=At+Br*gt/2,jt=At-Br*gt/2,Wt=[i.from[0]+a[0]*Q+u[0]*St*Ft,i.from[1]+a[1]*Q+u[1]*St*Ft],ce={from:T,to:Wt,t0:y,duration:gt,style:"push",endFrac:Math.max(jt,0)/wt};v.push(ce),T=[...Wt],y+=gt}}function ci(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Fn(i,t,e){const n=ci(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const lu=.3,Jm=[{gait:"run_slow",clip:"run_slow_a"},{gait:"run_b",clip:"run_b"}];function Qm(i){const t=pl.filter(n=>{var s;return(s=i.groups[n])==null?void 0:s.length}).map(n=>({gait:n,clipSpeed:i.clips[i.groups[n][0]].speed??Cn})).sort((n,s)=>n.clipSpeed-s.clipSpeed);return[...t.map((n,s)=>({...n,min:s===0?lu:Math.sqrt(t[s-1].clipSpeed*n.clipSpeed)})),...Jm.filter(n=>{var s;return(s=i.clips[n.clip])==null?void 0:s.speed}).map(n=>({gait:n.gait,clipSpeed:i.clips[n.clip].speed,min:1/0}))].sort((n,s)=>n.clipSpeed-s.clipSpeed)}function fa(i,t,e,n){const s=i.groups[t];return s!=null&&s.length?Fn(s,e,n):Jm.find(r=>r.gait===t).clip}function Ua(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function V1(i,t,e=!0){const n=li(i),s=n.t1+n.t2+n.t3,r=s+(i.hold??0);if(r<=0||!t.length)return[];const o=i.endSpeed??0,a=i.startSpeed??0,c=new Set([0,r]);for(const l of t)l.min>n.peak||(l.min>a&&c.add((l.min-a)/i.accel),l.min>o&&c.add(s-(l.min-o)/i.accel));const u=[...c].sort((l,d)=>l-d),h=[];for(let l=0;l+1<u.length;l++){if(u[l+1]-u[l]<1e-9)continue;const d=Ua(t,Jn(i,i.t0+(u[l]+u[l+1])/2).speed);if(!d)continue;const m=h[h.length-1];m&&m.gait===d.gait&&Math.abs(m.t1-(i.t0+u[l]))<1e-9?m.t1=i.t0+u[l+1]:h.push({gait:d.gait,t0:i.t0+u[l],t1:i.t0+u[l+1]})}return e?tg(h):h}const W1=.3;function tg(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=W1;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const Oa=.85,wi=1.15,ef=.5;function eg(i){return ef+(Oa-ef)*Math.min(1,Math.max(0,i))}function j1(i,t){const e=i/t;return e>wi?wi:Math.max(eg(e),e)}function X1(i,t){return Math.min(wi,Math.max(Oa,i/t))}function q1(i,t,e){const n=i.findIndex(h=>h.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=Oa&&r<=wi)return{timeScale:r,partner:null,weight:0};const o=r>wi?1:-1;let a;for(let h=n+o;h>=0&&h<i.length;h+=o)(!a||Math.abs(i[h].clipSpeed-t)<Math.abs(a.clipSpeed-t))&&(a=i[h]);if(!a)return{timeScale:r>wi?wi:Math.max(eg(r),r),partner:null,weight:0};const c=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),u=(1-c)*s.clipSpeed+c*a.clipSpeed;return{timeScale:X1(t,u),partner:a.gait,weight:c}}const K1=new Set(["pass","shoot","receive","header","defensive"]),ya=new Set(["turn","transition"]),Ci=.15,ng=.1,ig=.3,$1=.45,Y1=.2,Z1=.12,J1=.6;function uu(i,t){var e;return K1.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function sg(i,t,e){var r,o;if(uu(i,t))return ng;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return ya.has(n??"")?Ci:n==="idle"?s==="idle"?J1:s==="locomotion"?Z1:Sa:n==="locomotion"&&s==="locomotion"?Y1:ya.has(s??"")?Ci:Sa}function rg(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?$1:ya.has(e??"")?Ci:uu(i,t)?ig:Sa}function Q1(i,t,e){var n;return uu(i,t)||ya.has(((n=i.clips[t])==null?void 0:n.category)??"")?rg(i,t):sg(i,e,t)}function tT(i,t,e){var r,o;const n=(r=i.clips[t])==null?void 0:r.category,s=(o=i.clips[e])==null?void 0:o.category;return n==="turn"||s==="turn"?!0:n==="locomotion"?s==="idle"||e===Ma:t===Ma&&s==="idle"}const Ke=Math.PI/180,Ti={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*Ke,t50:.567,t90:.8,peak:159*Ke,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*Ke,t50:.533,t90:.8,peak:213*Ke,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*Ke,t50:.4,t90:.6,peak:366*Ke,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*Ke,t50:.767,t90:1.033,peak:192*Ke,standing:!1}};function Vc(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function og(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+Ci&&(n=s);return n}function eT(i,t,e,n){const s=og(i,t,e);if(!s)return null;const r=Ti[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=Vc(r,s.offset),u=Vc(r,s.offset+o),h=Vc(r,a),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,m=n===void 0?s.to-s.from:oi(n,s.to),b=Math.min(1,(e-s.t0)/Ci),x=e<=s.end?1:Math.max(0,1-(e-s.end)/Ci),g=Math.max(0,Math.min(b,x));return{heading:d+m*l,clipYaw:r.yaw*h*g}}function nT(i,t){return i.peak+cu(t)}function iT(i,t,e){const n=Math.abs(i);return n<Cl?null:n>_T&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Cl=45*Ke,nf=60*Ke,sT=.3,rT=.5,oT=.7,aT=130*Ke,Ma="run_stop_a",sf=.75,cT=.167;function lT(i,t){var s;if((i.endSpeed??0)>0)return null;const e=li(i),n=(s=Ua(t,e.peak))==null?void 0:s.gait;return n!=="run"&&n!=="sprint"||e.t3<sf-cT?null:i.t0+e.t1+e.t2+e.t3-sf}const qo=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],rf={left:"strafe_l_a",right:"strafe_r_a"},uT=3.2,hT=3.2,ag=60*Ke,dT=120*Ke,fT=100*Ke,of=[{id:"jog_back_diag_a",axis:225.5*Ke,speed:2.04},{id:"jog_back_diag_b",axis:135.5*Ke,speed:2.27}],pT=5;function mT(i,t){if(Math.abs(i)>ag)return null;const e=i>=0?of[0]:of[1];return t<=e.speed*wi?{id:e.id,axis:e.axis}:null}function gT(i,t){const e=Math.abs(i);return e<=ag?t>uT?null:t>(qo[0].speed+qo[1].speed)/2?qo[1].id:qo[0].id:e>dT||t>hT?null:i>0?rf.right:rf.left}const _T=120*Ke;function oi(i,t){return Fa(t-i)}const Sa=.25;function Js(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?R1:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=rg(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function bT(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function cg(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Js(t,r)&&(s=r);return s}const xT=.15;function vT(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const yT=.1,af=2,MT=6,ST=.4;function Aa(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Ko(i,t){return Aa(ci(i),20973)*t}function $o(i){return 1+yT*(2*Aa(ci(i),10196)-1)}function lg(i,t){return(af+Aa(ci(i),7047)*(MT-af))*(1+ST*(2*Aa(ci(i)+t*2654435761,28490)-1))}function AT(i,t){let e=0;for(let n=0;n<64;n++)if(e+=lg(i,n),t<e)return n;return 64}function cf(i,t,e){const n=i.length;if(n<=1)return i[0];const s=ci(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function ET(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const TT=new Set(["receive_a","pass_a","pass_b"]),ug=.8,wT=.7;function hg(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function hu(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+se(n)?0:Jn(n,t).speed);return e}function RT(i,t,e){for(const n of i)TT.has(n.clip)&&hu(t[n.player],hg(e,n))>=ug&&(n.additive=!0)}const CT=1,IT=2,PT=.025,lf=.2,LT=.4,uf="idle_transition";function DT(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/lf,(o-r)/lf);a<=0||(n=Math.max(n,PT*a*.5*(1-Math.cos(2*Math.PI*IT*r))))}return n}const hf="idle_b",FT=.5,NT=.3,UT=.15;function OT(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,FT*Math.min(1,(e-s.t0)/NT)*Math.min(1,(s.t1-e)/UT)));return n}function kT(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=hg(e,r)-CT,a=r.t0;if(a-o<LT||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(hu(t[r.player],u)>lu){c=!0;break}const h=cg(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[uf]&&s.push({player:r.player,clip:uf,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const BT=.6,dg=.5,fg=.6,Wr=2*dg/fg,Ea=Wr/fg,GT=dg-Zr;function zT(i){return(Wr-Math.sqrt(Math.max(0,Wr*Wr-2*Ea*i)))/Ea}function HT(){return Wr-Ea*zT(GT)}const VT=.15,WT=.05;function jT(i,t,e){const n=Fe(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(yE,s/2):Zr,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+vE;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function XT(i,t,e,n,s,r){const o=Math.min(Zr,e*(n-Si)/2);for(let a=o;a>=VT-1e-9;a-=WT){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}const Yo=.05,Il=.3,qT=3,KT=1.5,$T=100*Ke,df=1.3,ff=.5,YT=.5,pf=.5;function ZT(i){return i<=30*Ke?1:i<=60*Ke?.75:.5}function JT(i,t){if(t<=1e-9)return 0;const e=i.endSpeed??0,n=li({...i,hold:0});if(e>=i.cruise-1e-9||n.peak<i.cruise-1e-9)return null;const s=t/(1-e/i.cruise);return e*s<=n.d2+1e-9?s:null}const QT=10*Ke,mf=50;function tw(i,t,e=1){var Ee,on,dn,Zi,Di,En,zn,Ji,Fi,ti,Ni,di,Qi,Ui,ts,es,Tt,re,Vt;ET(t),Km(t);const n=xa(i),s=Qm(t),r={};i.players.forEach(_=>r[_.id]=[..._.start]);const o={},a=[],c=[],u=[],h=[],l=[],d=[],m=[],b=[],x={},g={},f=new Map,v=new Map,M=new Set,y=_=>!!_&&_.type==="move"&&!!_.dur,T=_=>{let p=_+1;for(;y(Mt[p]);)p++;return Mt[p]},R=_=>{let p=_-1;for(;y(Mt[p]);)p--;return Mt[p]},I=new Set,D={},A={},E={},P={};function N(_){u.push(_),D[_.player]=_.t0,Ei(r[_.player],_.at)&&(B[_.player]=Fe(r[_.player],_.at))}const B={},j={},H={};function k(_){const p=x[_];let L=Math.max(p?p.t0+se(p):0,j[_]??0,0);for(const C of c)C.player===_&&t.clips[C.clip]&&(L=Math.max(L,Js(t,C)));return L}function z(_,p,L,C){if(pt.has(_)||!Ei(r[_],L))return null;const S=B[_]??0,G=oi(S,Fe(r[_],L));if(Math.abs(G)<nf)return null;const W=Ti[G>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[W.id])return null;const Z=U(W),st=k(_),nt=Math.max(st,Math.min(p,C-Z));return nt+Z>C+1e-9?null:(Y(_,W,nt,0,S,S+G),nt)}function U(_,p=0){return _.duration-p-Ci}function J(_,p){const L=Math.abs(p)>aT,C=_==="run"?Ti.turn_180_a:null,S=L&&C&&t.clips[C.id]?C:Ti.turn_to_run_a,G=S.id===Ti.turn_to_run_a.id?rT:0,W=S.id===Ti.turn_to_run_a.id?oT:U(S,G);return{c:S,offset:G,play:W}}function Y(_,p,L,C,S,G,W){const Z=W??U(p,C),st={player:_,clip:p.id,t0:L,offset:C,end:L+Z,from:S,to:G},nt={player:_,clip:p.id,t0:L,...C?{offset:C}:{},...W!==void 0?{loopUntil:L+Z}:{}};m.push(st),c.push(nt),H[_]={span:st,cue:nt},j[_]=st.end+Ci}function ct(_,p){const L=H[_];return!L||L.span.end<=p+1e-9?!0:p-L.span.t0<sT?!1:(L.span.end=p,L.cue.loopUntil=p,j[_]=p+Ci,!0)}function St(_,p){if(ct(_,p))return;const L=H[_];m.splice(m.indexOf(L.span),1);const C=c.indexOf(L.cue);C>=0&&c.splice(C,1),delete H[_],j[_]=0}function Ft(_,p=1/0){const L=z(_.player,_.t0,_.at,p);N(L===null?_:{..._,t0:L})}const it=[];function mt(_){var p;for(let L=0;L<it.length;L++){const C=it[L];C.afterT>=_||(it.splice(L--,1),(o[p=C.player]??(o[p]=[])).push(C.move),x[C.player]=C.move,g[C.player]=gt(C.move,C.player),N({player:C.player,at:C.faceBall,t0:C.move.t0}),N({player:C.player,at:C.faceSettle,t0:C.arrival}),r[C.player]=[...C.move.to])}}function ut(_,p,L){let C=[...r[_]],S=[...r[_]];const G=x[_];let W=Math.max(G?G.t0+se(G):0,A[_]??0),Z=-1/0,st=null;for(let nt=p+1;nt<Mt.length;nt++){const tt=Mt[nt];if(tt.t>=L)break;if((tt.type==="pass"?tt.from:tt.player)!==_)continue;if(tt.type!=="move"){st=`${tt.type} at t=${tt.t}`;break}const at=t.groups[tt.gait??"jog"]??t.groups.jog,dt=t.clips[Fn(at,_,tt.t)].speed??Cn,_t={from:C,to:[...tt.to],t0:tt.t,cruise:dt,accel:Rn},rt=tt.t+se(_t);W=Math.max(W,rt),C=[...tt.to],S=rt>L?Jn(_t,L).pos:[...tt.to],Z=tt.t}return{expected:C,atArrival:S,busyUntil:W,afterT:Z,blocked:st}}function Q(_,p,L=_[0].t0){const C=[];for(const W of _)for(const Z of V1(W,s,!1)){const st=C[C.length-1];st&&st.gait===Z.gait&&Math.abs(st.t1-Z.t0)<1e-9?st.t1=Z.t1:C.push(Z)}const S=t.clips[Ma]?lT(_[_.length-1],s):null,G=tg(C).filter(W=>S===null||W.t0<S-1e-9).map(W=>({player:p,clip:fa(t,W.gait,p,L),t0:W.t0,loopUntil:S===null?W.t1:Math.min(W.t1,S)}));return S!==null&&G.push({player:p,clip:Ma,t0:S}),G}function gt(_,p){const L=Q([_],p),C=H[p];if(C){let S=1/0;for(const G of L)G.t0>C.span.t0+1e-9&&G.t0<C.span.end-1e-9&&(S=Math.min(S,G.t0));S<1/0&&St(p,S)}return c.push(...L),f.set(_,L),L}function At(_,p){return _.filter(L=>{if(L.t0>=p-1e-9)return!0;if((L.loopUntil??1/0)<=p+1e-9){const C=c.indexOf(L);return C>=0&&c.splice(C,1),!1}return L.t0=p,!0})}function wt(_,p,L="event"){(Ct[_]??0)>p&&console.warn(`[engine3d] ${_} is on the ground until t=${Ct[_].toFixed(2)}s but has a ${L} at t=${p} — schedule it later`);const C=x[_];if(!C)return;const S=C.t0+se(C);if(p<S){const G=`buildSchedule: player ${_} has an event at t=${p} while still moving from a move started at t=${C.t0} (in flight until t=${S.toFixed(3)})`;if(Ot.has(_))console.warn(`[engine3d] ${G} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(G)}}function jt(_){let p=null,L=-1/0;for(const C of b)C.t<=_&&C.t>=L&&(p=C.player,L=C.t);return p}const Wt=[];function ce(_,p,L){const C=i.balls??[],S=at=>at.carrier&&r[at.carrier]?Kn(r[at.carrier],B[at.carrier]??0):Bm(at,p);let G=-1,W=1/0;const Z=r[_];if(C.forEach((at,dt)=>{if(Wt.some($=>$.take===dt))return;const _t=S(at),rt=Math.hypot(_t[0]-Z[0],_t[1]-Z[1]);rt<W&&(W=rt,G=dt)}),G<0||W>Ed){const at=C.length?G<0?"every spare has already been used":`the nearest is ${W.toFixed(1)} m away (needs ${Ed} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${L} by ${_} at t=${p.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${at} — played with the ball already in play`);return}const st=jt(p),nt=st?gs(l,st,p):null,tt=nt?[...nt.carry]:st&&r[st]?Kn(r[st],B[st]??0):Fr(a,n,p).at,lt=S(C[G]);Wt.push({t:p,drop:tt,take:G,at:lt}),b.push({t:p,player:_}),l.push({player:_,at:p,carry:lt}),A[_]=p}const V=Object.fromEntries(i.players.map(_=>[_.id,_.team]));function Pe(_,p,L,C,S,G){const W=jt(C);if(!W||W===_||pt.has(_)||V[_]==="coach"||V[W]===V[_])return null;const Z=at=>{if(!Ei(p,at)||!Ei(p,L))return null;const dt=Fe(p,L),_t=oi(Fe(at,p),dt),rt=Math.hypot(at[0]-p[0],at[1]-p[1])<=pT?mT(_t,S):null;if(rt&&t.clips[rt.id]){const et=dt-rt.axis,ft=Math.hypot(at[0]-p[0],at[1]-p[1])||1;return{clip:rt.id,ball:[p[0]+ft*Math.sin(et),p[1]+ft*Math.cos(et)]}}const $=gT(_t,S);return $&&t.clips[$]?{clip:$,ball:at}:null},st=Z(r[W]?[...r[W]]:Fr(a,n,C).at),nt=i.events.find(at=>at.type==="pass"&&at.from===W&&at.t>=C-1e-9&&at.t<=C+G/2),tt=(nt==null?void 0:nt.type)==="pass"&&r[nt.to]?[...r[nt.to]]:null,lt=st?st.ball:L;return!tt||!Ei(p,tt)||!Ei(p,lt)||Math.abs(oi(Fe(p,lt),Fe(p,tt)))<=fT?st:Z(tt)}const Qt={};for(const _ of i.events)_.type==="move"&&(Qt[Ee=_.player]??(Qt[Ee]=[])).push(_.t);function Jt(_,p,L){for(const C of X){const S=C.id;if(!Xt.length||jt(_)===S||!t.clips[zo.left.id]||!t.clips[zo.right.id])continue;const G=x[S],W=Math.max(_,Rt[S]??0,G?G.t0+se(G):0);if(d.some(yt=>yt.player===S))continue;const Z=Xt.reduce((yt,Bt)=>Math.hypot(Bt.at[0]-C.start[0],Bt.at[1]-C.start[1])<Math.hypot(yt.at[0]-C.start[0],yt.at[1]-C.start[1])?Bt:yt,Xt[0]),st=Z.at,nt=Z.sideways?1:0,tt=Z.sideways?0:1,lt=FE(q,e,Math.abs(r[S][tt]-st[tt]),Z.halfW),dt=st[nt]+Math.min(lt,Math.max(-lt,(L[nt]-st[nt])*DE))-r[S][nt],_t=Fe(st,[i.pitch.width/2,i.pitch.length/2]),rt=Z.sideways?-Math.sin(_t):Math.cos(_t),$=UE(dt,zo[dt*rt>0?"left":"right"].dist*q,Math.sign(rt)||1);if(!$)continue;const et=zo[$.side],ft=Math.min(p,i.duration)-$.steps*et.duration;if(ft<W-1e-9||(Qt[S]??[]).some(yt=>yt>=ft-1e-9))continue;const vt=Math.sign(dt)*et.dist*q;for(let yt=0;yt<$.steps;yt++){const Bt=[...r[S]],Kt=[...Bt];Kt[nt]=Bt[nt]+vt;const be=Gd(Bt,Kt,ft+yt*et.duration,et.duration);(o[S]??(o[S]=[])).push(be),r[S]=[...be.to],x[S]=be}c.push({player:S,clip:et.id,t0:ft,loopUntil:ft+$.steps*et.duration}),g[S]=[]}}function Ht(_,p){var G;const L=(G=i.players.find(W=>W.id===_))==null?void 0:G.start;if(!L||!Xt.length)return!1;let C=Xt[0].at,S=1/0;for(const W of Xt){const Z=Math.hypot(W.at[0]-L[0],W.at[1]-L[1]);Z<S&&(S=Z,C=W.at)}return Math.hypot(p[0]-C[0],p[1]-C[1])<=r1*q}function _e(_,p){const L=x[_];if(!L||L.endSpeed)return;const C=L.t0+se(L);if(p-C>=Go)return;L.endSpeed=js;const S=L.t0+se(L);for(const G of g[_]??[]){const W=c.indexOf(G);W>=0&&c.splice(W,1)}if(g[_]=gt(L,_),S>p-Si){if(Ot.has(_)){console.warn(`[engine3d] player ${_}'s move started at t=${L.t0} still arrives at t=${S.toFixed(3)}, less than ${Si}s before their action at t=${p} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${_}'s move started at t=${L.t0} still arrives at t=${S.toFixed(3)} even flowing into their action at ${js} m/s, less than ${Si}s before their action at t=${p} — move the event later or start the approach move earlier`)}}function It(_,p,L,C,S){const G=x[_],W=G?G.t0+se(G):0;if(G&&(G.endSpeed!==void 0||p-W<Go))return null;const Z=jT(r[_],L,S),st=t.groups.walk,nt=st!=null&&st.length?t.clips[st[0]].speed??Cn:Cn,tt={from:[...r[_]],to:Z,t0:0,cruise:nt,accel:Rn};let lt=p-C-se(tt);return lt<Math.max(W,A[_]??0)||!ct(_,lt)?null:(tt.t0=lt,(o[_]??(o[_]=[])).push(tt),S&&I.add(tt),x[_]=tt,g[_]=gt(tt,_),r[_]=[...Z],lt)}function F(_,p,L){const C=Fr(a,n,p).at,S=Fe(C,L),G=[C[0]-Ne*Math.sin(S),C[1]-Ne*Math.cos(S)],W=Math.hypot(G[0]-r[_][0],G[1]-r[_][1]);if(W<$E){r[_]=[...G];return}const Z=x[_],st=Z?Z.t0+se(Z):0,nt=Math.max(st,A[_]??0,0);let tt;for(let lt=W<kd?0:1;lt<jo.length;lt++){const at=t.groups[jo[lt]]??t.groups.jog,dt=t.clips[Fn(at,_,p)].speed??Cn;if(tt={from:[...r[_]],to:G,t0:0,cruise:dt,accel:Rn,endSpeed:js},tt.t0=p-Si-se(tt),tt.t0>=nt)break}tt.t0<nt&&(console.warn(`[engine3d] dead-ball run-up for ${_} at t=${p.toFixed(2)}s wants to start at t=${tt.t0.toFixed(2)}s but he is not free until t=${nt.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),tt.t0=nt),ct(_,tt.t0),(o[_]??(o[_]=[])).push(tt),x[_]=tt,g[_]=gt(tt,_),r[_]=[...G]}function w(_,p,L){const C=Fr(a,n,p);{const at=Bd(C.at,$t,i1*q);if(Math.hypot(at[0]-C.at[0],at[1]-C.at[1])>1e-6){const dt=a.filter(_t=>_t.t0<=p&&Math.hypot(_t.to[0]-C.at[0],_t.to[1]-C.at[1])<1e-9);if(dt.length){for(const _t of dt)Math.hypot(_t.from[0]-C.at[0],_t.from[1]-C.at[1])<1e-9&&(_t.from=[...at]),_t.to=[...at];C.at=at}}}const S=jt(p);S&&S!==_&&b.push({t:p,player:null});const G=C.moving?C.restT+c1:-1/0;let W=null;for(let at=L+1;at<Mt.length;at++){const dt=Se[at];if(!(!dt||dt.actor!==_)){dt.t-p<=Xs+3&&(W=dt.target);break}}let Z=Hd(r[_],C.at,W);if(Z.stepTo){const at=Bd(Z.stepTo,$t,s1*q),dt=[at[0]-C.at[0],at[1]-C.at[1]];if(Math.hypot(dt[0],dt[1])>1e-6){const _t=Ze(dt),rt=Ne+1,$=Hd([C.at[0]+rt*_t[0],C.at[1]+rt*_t[1]],C.at,W);$.stepTo&&zt($.stepTo)&&(Z=$)}}let st=1/0;for(let at=L+1;at<Mt.length;at++){const dt=Mt[at];if((dt.type==="pass"?dt.from:dt.player)===_){st=dt.t;break}}let nt=p;if(Z.stepTo){const at=Math.hypot(Z.stepTo[0]-r[_][0],Z.stepTo[1]-r[_][1]);let dt;for(let _t=at<kd?0:1;_t<jo.length;_t++){const rt=t.groups[jo[_t]]??t.groups.jog,$=t.clips[Fn(rt,_,p)].speed??Cn;if(dt={from:[...r[_]],to:Z.stepTo,t0:p,cruise:$,accel:Rn,endSpeed:js},p+se(dt)+ri+Si<=st)break}if(G>p+se(dt)){const _t=G-p,rt=Math.hypot(Z.stepTo[0]-dt.from[0],Z.stepTo[1]-dt.from[1]),$=Rn*Rn*_t*_t-4*Rn*rt,et=$>0?(Rn*_t-Math.sqrt($))/2:dt.cruise,ft=(t.clips[Fn(t.groups.walk,_,p)].speed??lu)*Oa;dt={...dt,cruise:Math.max(Math.min(et,dt.cruise),ft),endSpeed:0}}(o[_]??(o[_]=[])).push(dt),Ot.set(_,p),x[_]=dt,g[_]=gt(dt,_),nt=p+se(dt),r[_]=[...Z.stepTo]}nt=Math.max(nt,G),N({player:_,at:[...C.at],t0:Math.max(p,D[_]??0),lock:[nt-Mn,nt+Mn]});const tt=at=>{for(const dt of g[_]??[]){const _t=c.indexOf(dt);dt.t0>=at?_t>=0&&c.splice(_t,1):(dt.loopUntil??0)>at&&(dt.loopUntil=at)}};if(pt.has(_)&&Ht(_,C.at)){const at=bn.scoop[0],dt=nt-at.contact;return dt<p&&console.warn(`[engine3d] keeper ${_}'s scoop at t=${nt.toFixed(2)}s wants to start at t=${dt.toFixed(2)}s, before his collect at t=${p.toFixed(2)}s — schedule the collect earlier`),tt(Math.max(dt,0)),c.push({player:_,clip:at.id,t0:Math.max(dt,0),contact:at.contact}),N({player:_,at:[...Z.faceAt],t0:nt}),b.push({t:nt,player:_}),l.push({player:_,at:nt,carry:[...C.at],hand:{height:qn*q,from:o1*q,rise:Pd,follow:!0}}),A[_]=nt,Rt[_]=Math.max(dt,0)+at.duration+qs,nt}const lt=Fn(t.groups.pass,_,nt);return tt(nt-(t.clips[lt].ballContact??0)),c.push({player:_,clip:lt,t0:nt-(t.clips[lt].ballContact??0)}),a.push({from:[...C.at],to:Z.set,t0:nt,duration:ri,style:"ground"}),N({player:_,at:[...Z.faceAt],t0:nt}),b.push({t:nt,player:_}),l.push({player:_,at:nt+ri,carry:Z.set}),A[_]=nt+ri,nt+ri}const X=i.players.filter(_=>_.role==="keeper"),q=e,pt=new Set(X.map(_=>_.id));i.players.forEach(_=>B[_.id]=_.role==="keeper"?Fe(_.start,n):0);const ot=((on=i.keeper)==null?void 0:on.outcome)==="save",Rt={},Ct={},Ot=new Map,ie={},Et={},Mt=[...i.events].sort((_,p)=>_.t-p.t);if(i.ball&&!i.ball.static){const _=n,p=i.players.reduce((S,G)=>Math.hypot(G.start[0]-_[0],G.start[1]-_[1])<Math.hypot(S.start[0]-_[0],S.start[1]-_[1])?G:S,i.players[0]),L=Mt.find(S=>S.type!=="move"||S.player===(p==null?void 0:p.id)&&pt.has(S.player)),C=L?L.type==="pass"?L.from:L.player:null;if(!((L==null?void 0:L.type)==="collect"||((L==null?void 0:L.type)==="pass"||(L==null?void 0:L.type)==="shoot")&&L.deadBall))if(C&&pt.has(C))b.push({t:0,player:C}),A[C]=0,(L==null?void 0:L.type)==="pass"&&!!L.fromFeet||l.push({player:C,at:0,carry:[...n],hand:{height:qn*q,follow:!0}});else{const S=i.players.filter(Z=>Z.role!=="keeper"),G=S.length?S:i.players,W=G.reduce((Z,st)=>Math.hypot(st.start[0]-n[0],st.start[1]-n[1])<Math.hypot(r[Z.id][0]-n[0],r[Z.id][1]-n[1])?st:Z,G[0]).id;b.push({t:0,player:W}),A[W]=0}}const Xt=(i.equipment??[]).filter(_=>_.type==="goal").map(_=>({at:_.at,halfW:Ss(_,Na),sideways:_.facing==="e"||_.facing==="w"})),$t=a1(i.equipment,e),zt=_=>_[0]>=0&&_[0]<=i.pitch.width&&_[1]>=0&&_[1]<=i.pitch.length,fe=_=>$t.every(p=>Math.hypot(p[0]-_[0],p[1]-_[1])>=ha*q),Zt={};i.players.forEach(_=>Zt[_.id]=[..._.start]);const Se=Mt.map(_=>{if(_.type==="move")return Zt[_.player]=[..._.to],null;if(_.type==="dribble")return Zt[_.player]=[..._.to],{actor:_.player,target:[..._.to],t:_.t};if(_.type==="collect"||_.type==="tackle")return null;const p=_.type==="pass"?_.from:_.player;_.deadBall&&(Zt[p]=[...n]);const L=_.type==="pass"?[...Zt[_.to]]:_.flightStyle==="ground"?[..._.at]:C1(Zt[_.player],_.at,Xt,_.corner,e);return{actor:p,target:L,t:_.t}});for(let _=0;_<Mt.length;_++){const p=Mt[_];mt(p.t);const L=p.type==="pass"?p.from:p.player;if(p.newBall&&ce(L,p.t,p.type),p.type!=="dribble"&&p.type!=="move"&&delete P[L],p.type==="move"){wt(p.player,p.t,p.type);const S=pt.has(p.player)&&(((Zi=(dn=gs(l,p.player,p.t))==null?void 0:dn.hand)==null?void 0:Zi.height)??0)>0;jt(p.t)===p.player&&!S&&console.warn(`[engine3d] move event for ${p.player} at t=${p.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const G=t.groups[p.gait??"jog"]??t.groups.jog,W=t.clips[Fn(G,p.player,p.t)].speed??Cn,Z=E[p.player],st=Z&&p.t<Z.t0?[...Z.at]:[...r[p.player]],nt=p.dur?Math.hypot(p.to[0]-st[0],p.to[1]-st[1])/p.dur:0,tt=p.dur?{from:st,to:p.to,t0:p.t,cruise:nt,accel:Rn,startSpeed:nt,endSpeed:nt}:{from:st,to:p.to,t0:p.t,cruise:W,accel:Rn};p.dur&&M.add(tt);const lt=Pe(p.player,tt.from,p.to,p.t,W,se(tt)),at=lt?null:(()=>{const _t=Ua(s,W);if((_t==null?void 0:_t.gait)!=="run"&&(_t==null?void 0:_t.gait)!=="sprint"||!t.clips[Ti.turn_to_run_a.id]||pt.has(p.player)||k(p.player)>p.t+1e-9||!Ei(tt.from,p.to))return null;const rt=oi(B[p.player]??0,Fe(tt.from,p.to));return Math.abs(rt)>=nf?{delta:rt,gait:_t.gait}:null})();(o[Di=p.player]??(o[Di]=[])).push(tt),x[p.player]=tt,g[p.player]=gt(tt,p.player);const dt={t0:p.t,face:null,r11:!!lt,start:null};if(p.dur||v.set(tt,dt),lt){for(const rt of g[p.player]??[]){const $=c.indexOf(rt);$>=0&&c.splice($,1)}const _t={player:p.player,clip:lt.clip,t0:p.t,loopUntil:p.t+se(tt)};c.push(_t),g[p.player]=[_t],f.set(tt,[_t]),dt.face={player:p.player,at:lt.ball,t0:p.t,until:p.t+se(tt)},N(dt.face)}else{if(at){const{c:_t,offset:rt,play:$}=J(at.gait,at.delta),et=B[p.player]??0;Y(p.player,_t,p.t,rt,et,et+at.delta,$);const ft=p.t+$;dt.start={...H[p.player],end:ft},g[p.player]=At(g[p.player]??[],ft),f.set(tt,g[p.player])}dt.face={player:p.player,at:p.to,t0:p.t},N(dt.face)}r[p.player]=[...p.to]}else if(p.type==="dribble"){wt(p.player,p.t,p.type),jt(p.t)!==p.player&&console.warn(`[engine3d] dribble event for ${p.player} at t=${p.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const S=p.gait??"jog",G=t.groups[S]??t.groups.jog,W=t.clips[Fn(G,p.player,p.t)].speed??Cn,Z=Fe(r[p.player],p.to),st=(((zn=(En=gs(l,p.player,p.t))==null?void 0:En.hand)==null?void 0:zn.height)??0)>0,nt=st?Wm(l,p.player,p.t):0,tt=st?p.t+Dd:p.t,lt={from:[...r[p.player]],to:[...p.to],t0:tt,cruise:W,accel:Rn};let at=null;for(let le=_+1;le<Mt.length;le++){const ae=Se[le];if(!(!ae||ae.actor!==p.player)){at={target:ae.target,t:ae.t};break}}const dt=tt+se(lt);let _t=null;for(let le=_+1;le<Mt.length;le++){const ae=Mt[le];if((ae.type==="pass"?ae.from:ae.player)===p.player){_t=ae;break}}let rt=null;if((_t==null?void 0:_t.type)==="dribble"&&_t.t-dt<=Xs){const le=oi(Z,Fe(p.to,_t.to)),ae=iT(le,S),we=ae?Ti[ae]:null;if(we&&t.clips[we.id]){const xt=we.standing?dt:tt+se({...lt,endSpeed:js});_t.t-xt>=U(we)-1e-9&&(rt={c:we,delta:le})}}at&&at.t-dt<Go&&!(rt!=null&&rt.c.standing)&&(lt.endSpeed=js),rt&&Y(p.player,rt.c,_t.t-U(rt.c),0,Z,Z+rt.delta),(o[Ji=p.player]??(o[Ji]=[])).push(lt),x[p.player]=lt,g[p.player]=gt(lt,p.player),N({player:p.player,at:[...p.to],t0:p.t});let $=null;for(const le of l)le.player===p.player&&(!$||le.at>$.at)&&($=le);$&&$.at>p.t+1e-9&&console.warn(`[engine3d] dribble for ${p.player} at t=${p.t.toFixed(2)}s starts during their settle (ends t=${$.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let et=$?[...$.carry]:Kn(r[p.player],Z);st&&(et=Kn(r[p.player],Z),l.push({player:p.player,at:p.t,carry:[...et],hand:{height:0,from:nt,rise:Dd,follow:!0}}),A[p.player]=p.t);const ft=at&&at.t-dt<=Xs?Kn(p.to,Fe(p.to,at.target)):Kn(p.to,Z),vt=ci(p.player)%2===0?1:-1;let yt=vt,Bt=!1;for(let le=_+1;le<Mt.length;le++){const ae=Mt[le];if((ae.type==="pass"?ae.from:ae.player)===p.player){if(ae.type==="dribble"&&ae.t-dt<=Xs){const xt=Ze([p.to[0]-lt.from[0],p.to[1]-lt.from[1]]),ne=Ze([ae.to[0]-p.to[0],ae.to[1]-p.to[1]]),Le=xt[0]*ne[1]-xt[1]*ne[0],xe=Le<0?1:-1;Math.abs(Le)>.05&&xe===-vt&&(yt=xe),Bt=Math.abs(oi(Fe(lt.from,p.to),Fe(p.to,ae.to)))>Cl}break}}const Kt=P[p.player],be=!!Kt&&tt-Kt.end<=Xs&&Math.abs(oi(Kt.h,Z))>Cl;P[p.player]={h:Z,end:dt};const oe=Object.entries(r).filter(([le])=>le!==p.player).map(([,le])=>[...le]),kt=H1(lt,et,ft,Yd[S]??Yd.jog,yt,{turnIn:be,turnOut:Bt,others:oe});a.push(...kt.flights),l.push({player:p.player,at:kt.restEnd,carry:[...ft]}),A[p.player]=kt.restEnd,r[p.player]=[...p.to],Jt(kt.restEnd,((Fi=T(_))==null?void 0:Fi.t)??i.duration,[...ft])}else if(p.type==="collect")wt(p.player,p.t,p.type),w(p.player,p.t,_);else if(p.type==="tackle"){wt(p.player,p.t,p.type),_e(p.player,p.t);const S=p.from;jt(p.t)!==S&&console.warn(`[engine3d] tackle by ${p.player} at t=${p.t.toFixed(2)}s from ${S}, but ${jt(p.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const G=pt.has(p.player)&&!!t.clips[Wo.id],W=!G&&p.style!=="slide"&&!!t.clips[Vo.id],Z=p.t+(G?Wo:W?Vo:Uc[0]).contact;let st=null,nt=-1/0;for(const $ of l)$.player===S&&$.at<=Z&&$.at>nt&&(nt=$.at,st=[...$.carry]);if(st||(st=Kn(r[S],Fe(r[S],r[p.player]))),W){const $=QE*q,et=Ze([r[p.player][0]-r[S][0],r[p.player][1]-r[S][1]]);if(Math.hypot(r[p.player][0]-r[S][0],r[p.player][1]-r[S][1])<$){const ft=[r[S][0]+$*et[0],r[S][1]+$*et[1]],vt=x[p.player];if(vt&&Math.hypot(vt.to[0]-r[p.player][0],vt.to[1]-r[p.player][1])<1e-6){const yt=(t.clips[Fn(t.groups.sprint??t.groups.run??t.groups.jog,p.player,p.t)].speed??vt.cruise)*wi,Bt=Math.min(se(vt),Math.max(Z-vt.t0,.2));vt.to=ft;for(let Kt=0;Kt<8&&se(vt)>Bt+1e-6&&vt.cruise<yt;Kt++)vt.cruise=Math.min(yt,vt.cruise*se(vt)/Bt);for(const Kt of g[p.player]??[]){const be=c.indexOf(Kt);be>=0&&c.splice(be,1)}g[p.player]=gt(vt,p.player),r[p.player]=Z<vt.t0+se(vt)?Jn(vt,Z).pos:ft}else r[p.player]=ft}}const tt=W?Math.hypot(r[S][0]-r[p.player][0],r[S][1]-r[p.player][1]):Math.hypot(st[0]-r[p.player][0],st[1]-r[p.player][1]),lt=G?Wo.reach:W?Vo.reach+Ne:e1;tt>lt*q&&console.warn(`[engine3d] tackle by ${p.player} at t=${p.t.toFixed(2)}s: the ball is ${tt.toFixed(2)} m away (reach ${(lt*q).toFixed(2)}) — move the tackler closer first`),W&&tt<ha*q-1e-6&&console.warn(`[engine3d] tackle by ${p.player} at t=${p.t.toFixed(2)}s: he is ${tt.toFixed(2)} m from ${S}, inside a body width (${(ha*q).toFixed(2)} m at this body scale) — the two of them draw as one`);const at=G?Wo:W?Vo:Uc[Math.abs(ci(p.player)+Math.floor(p.t*10))%Uc.length],dt=p.t+at.contact,_t={player:p.player,clip:at.id,t0:p.t,contact:at.contact};if(c.push(_t),N({player:p.player,at:st,t0:Math.max(p.t-Lr,0,D[p.player]??0),lock:[p.t,p.t+at.duration]}),G){const $=Js(t,_t),et=Kn(r[p.player],Fe(r[p.player],st));b.push({t:dt,player:p.player});const ft=zc(r[p.player],r[S],st);l.push({player:p.player,at:dt,carry:[...st],hand:{height:Ho*q,follow:!0,bone:ft}}),l.push({player:p.player,at:$,carry:et,hand:{height:qn*q,from:Ho*q,rise:Fc,follow:!0,bone:ft}}),A[p.player]=dt,Rt[p.player]=p.t+at.duration+qs}let rt;if(!G){const $=Ze([r[S][0]-r[p.player][0],r[S][1]-r[p.player][1]]),et=[-$[1],$[0]],ft=(st[0]-r[S][0])*et[0]+(st[1]-r[S][1])*et[1]>=0?1:-1,vt=yt=>[r[S][0]+ft*yt*q*et[0]+Od*q*$[0],r[S][1]+ft*yt*q*et[1]+Od*q*$[1]];if(rt=vt(Ud),W){let yt=zd(r[S],st,rt);for(let Bt=Ud+.05;Bt<=1&&!(yt>=JE*q);Bt+=.05){const Kt=vt(Bt),be=zd(r[S],st,Kt);be>yt&&(yt=be,rt=Kt)}}a.push({from:st,to:rt,t0:dt,duration:Oc,style:"ground",pop:!0}),b.push({t:dt,player:null})}if(W){let $=1/0;for(let Bt=_+1;Bt<Mt.length;Bt++){const Kt=Mt[Bt];if((Kt.type==="pass"?Kt.from:Kt.player)===S){$=Kt.t;break}}const et=[...rt],ft=Math.max(dt,D[S]??0),vt=z(S,ft,et,$-Si),yt=Math.min($,Math.max(dt+Oc,vt===null?0:j[S]));(vt??ft)<yt&&N({player:S,at:et,t0:vt??ft,until:yt})}else if(t.clips[Nd]){let $=1/0;for(let Bt=_+1;Bt<Mt.length;Bt++){const Kt=Mt[Bt];if((Kt.type==="pass"?Kt.from:Kt.player)===S){$=Kt.t;break}}const et=Ze([r[S][0]-st[0],r[S][1]-st[1]]),ft=ZE*q,vt=dt+t1,yt=Gd([...r[S]],[r[S][0]+ft*et[0],r[S][1]+ft*et[1]],vt,Dr);if(vt+Dr+Si<=$){(o[S]??(o[S]=[])).push(yt),x[S]=yt,c.push({player:S,clip:Nd,t0:vt,loopUntil:vt+Dr}),g[S]=[];const Bt=Math.max(vt,D[S]??0);Bt<vt+Dr&&N({player:S,at:[...st],t0:Bt,until:vt+Dr}),r[S]=[...yt.to]}}G||w(p.player,Math.max(Js(t,_t),dt+Oc),_)}else{const S=p.type==="pass"?p.from:p.player,G=ie[S],W=!!G&&p.t>=G.at-Xo&&p.t-G.at<=kc;G&&!W&&console.warn(`[engine3d] header for ${S} at t=${p.t} does not meet the cross at their forehead (t=${G.at.toFixed(2)}s) — played as an ordinary ${p.type}`),delete ie[S];const Z=Et[S],st=!!Z&&!!p.firstTime&&!W;p.firstTime&&!Z&&!W&&console.warn(`[engine3d] firstTime ${p.type} for ${S} at t=${p.t} has no ball arriving at their boot — played as an ordinary strike`),delete Et[S],W&&p.t-G.at>Wd&&console.warn(`[engine3d] header for ${S} at t=${p.t} pulled to the ball's arrival (t=${G.at.toFixed(2)}s) — the ball cannot wait in the air`),wt(S,p.t,p.type),W||_e(S,p.t);const nt=p.type==="pass"?r[p.to]:Se[_].target,tt=p.type==="shoot"&&p.flightStyle!=="ground",lt=tt?A1:xE,at=tt?E1:Lr;p.deadBall&&!W&&F(S,p.t,nt);const dt=pt.has(S)&&jt(p.t)===S&&(((Ni=(ti=gs(l,S,p.t))==null?void 0:ti.hand)==null?void 0:Ni.height)??0)>0,_t=!dt&&(p.style==="throw"||p.style==="roll")?p.style:null;pt.has(S)&&(Rt[S]??0)>p.t&&console.warn(`[engine3d] keeper ${S} is busy until t=${Rt[S].toFixed(2)}s (save / catch clip still playing) but has a ${p.type} at t=${p.t} — schedule it later`);const rt=xt=>{if(!W)return null;const ne=Math.hypot(xt[0]-kt[0],xt[1]-kt[1]);return ne>=b1?{style:"headed",loft:Gc(ne,q)}:null};let $=p.t;if(p.type==="shoot"&&!p.touch){const xt=x[S],ne=xt?xt.t0+se(xt):-1/0;xt&&(xt.endSpeed??0)>0&&p.t-ne>Xd&&p.t-ne<Go&&($=ne-Xd)}let et="",ft,vt,yt=0,Bt=null,Kt=null;if(W)ft=G.at,yt=G.height;else if(st)et=Fn(t.groups[tt?"shoot":"pass"],S,$),vt=t.clips[et].ballContact??0,$=Z.at-vt,ft=Z.at,$<0&&console.warn(`[engine3d] first-time ${p.type} for ${S} wants its cue at t=${$.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((dt||_t)&&(p.type==="pass"||p.flightStyle==="ground")){Bt=p.style??l1(Math.hypot(nt[0]-r[S][0],nt[1]-r[S][1]));const xt=_t?LE[_t]:bn[Bt];et=xt.id,vt=xt.contact,ft=p.t+xt.contact,yt=Bt==="roll"?0:xt.release*q,Rt[S]=p.t+xt.duration+qs}else{const xt=x[S],ne=p.type==="shoot"&&xt&&(xt.endSpeed??0)>0&&$<=xt.t0+se(xt)+1e-9?Jn(xt,$).speed:0;Kt=It(S,$,nt,lt,p.type==="pass"||p.type==="shoot"&&!!p.touch),ne>T1&&t.clips[da.id]&&!(p.type==="shoot"&&p.touch)?(et=da.id,vt=da.contact):et=Fn(t.groups[tt?"shoot":"pass"],S,p.t),ft=$+(vt??t.clips[et].ballContact??0)}let be=null;W||(be={player:S,clip:et,t0:$,...vt!==void 0?{contact:vt}:{}},c.push(be),Ft({player:S,at:[...nt],t0:Math.max($-at,0,D[S]??0),lock:[$,ft+Mn],until:ft+Mn,headUntil:ft-xT},Math.min($,Kt??1/0)));const oe=Fe(r[S],nt),kt=W?[...G.from]:st?[...Z.from]:Kn(r[S],oe),le=_t?qE:XE,ae=p.type==="pass"&&pt.has(p.to)&&!p.toFeet?p.flight:0,we=p.type!=="pass"?0:Bt==="throw"?Math.max(.4,ae,Math.hypot(nt[0]-kt[0],nt[1]-kt[1])/le):p.style==="roll"?Math.max(p.flight,Math.hypot(nt[0]-kt[0],nt[1]-kt[1])/KE):p.flight;if(!W&&!st){const xt=Math.max($-pE,A[S]??0);xt>ft&&console.warn(`[engine3d] departure window for ${S} is inverted (starts t=${xt.toFixed(2)}s, ball contact t=${ft.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:S,windowStart:xt,contact:ft,heading:oe,...Bt?{toHeight:yt}:{}})}if(p.type==="pass"&&pt.has(p.to)&&!p.toFeet){const xt=ft+we,ne=ut(p.to,_,xt);ne.blocked&&console.warn(`[engine3d] ball to the keeper ${p.to} at t=${p.t}: their authored ${ne.blocked} runs during the flight, so where they stand at t=${xt.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const Le=ne.atArrival,xe=Ze([kt[0]-Le[0],kt[1]-Le[1]]),Be=[Le[0]+Ne*xe[0],Le[1]+Ne*xe[1]],He=(p.flightStyle==="clipped"||p.flightStyle==="lofted")&&p.style!=="roll",pe=((di=p.deflect)==null?void 0:di.style)==="lofted",Lt=He?(p.loft??0)>PE||pe?bn.catchHigh:bn.catch:bn.scoop[Math.abs(ci(p.to)+Math.floor(xt*10))%bn.scoop.length],me=He?Math.min(qn*(Lt===bn.catchHigh?2:1),YE)*q:0,ve=xt-Lt.contact;ve<0&&console.warn(`[engine3d] receive cue for ${p.to} wants t0=${ve.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),ve<ne.busyUntil&&console.warn(`[engine3d] catch cue for ${p.to} at t=${xt.toFixed(2)}s wants t0=${ve.toFixed(2)}s but their move is still running (until t=${ne.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),ve<ft&&console.warn(`[engine3d] catch cue for ${p.to} at t=${xt.toFixed(2)}s wants t0=${ve.toFixed(2)}s, before the ball leaves ${S} at t=${ft.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:p.to,clip:Lt.id,t0:ve,contact:Lt.contact});const Qe=p.flightStyle==="lofted"?Gc(Math.hypot(Be[0]-kt[0],Be[1]-kt[1]),q)-(yt+me)/2:Bt==="throw"?Math.max(_t?Nc:1.5,p.loft??0):p.loft;if(a.push({from:kt,to:Be,t0:ft,duration:we,style:Bt==="kick"?"clipped":He||Bt==="throw"?"lofted":"ground",...Qe!==void 0?{loft:Qe}:{},...me?{toHeight:me}:{},...yt?{fromHeight:yt}:{}}),N({player:p.to,at:[...r[S]],t0:p.t,lock:[xt-Mn,xt+Mn]}),p.deflect)a.push(Fd(Be,me,p.deflect,xt,q)),A[p.to]=xt;else{b.push({t:xt,player:p.to});const Ae=zc(r[p.to],r[S],Be);l.push({player:p.to,at:xt,carry:Be,hand:He?{height:qn*q,from:me,rise:Fc,follow:!0,bone:Ae}:{height:qn*q,from:0,rise:Pd,follow:!0,bone:Ae}}),A[p.to]=xt}Rt[p.to]=ve+Lt.duration+qs}else if(p.type==="pass"&&!p.toFeet&&p.flightStyle==="lofted"&&(p.loft??p1)>=x1){const xt=ft+we;let ne=null,Le=1/0,xe=!1,Be=!1,He;for(let Ae=_+1;Ae<Mt.length;Ae++){const De=Se[Ae],Ge=Mt[Ae];if((Ge.type==="move"||Ge.type==="collect")&&Ge.player===p.to&&He===void 0&&Ge.t>=xt-Xo&&(He=Ge.t),!(!De||De.actor!==p.to)){ne=De.target,Le=De.t,Be=Ge.type==="pass"||Ge.type==="shoot",xe=Be&&!!Ge.header;break}}He!==void 0&&Be&&Le-xt<=kc&&console.warn(`[engine3d] ${p.to} has a move at t=${He.toFixed(2)}s between the cross landing on their forehead (t=${xt.toFixed(2)}s) and their strike at t=${Le} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const pe=Be&&He===void 0&&Le>=xt-Xo&&(Le-xt<=Wd||xe&&Le-xt<=kc),Lt=ut(p.to,_,xt);Lt.blocked&&!pe&&console.warn(`[engine3d] cross to ${p.to} at t=${p.t}: their authored ${Lt.blocked} runs during the flight, so where they stand at t=${xt.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const me=v1(Lt.atArrival,kt,ne,q),ve=xt-me.clip.contact;ve<0&&console.warn(`[engine3d] header cue for ${p.to} wants t0=${ve.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),ve<Lt.busyUntil&&console.warn(`[engine3d] header cue for ${p.to} wants t0=${ve.toFixed(2)}s but their move is still running (until t=${Lt.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:p.to,clip:me.clip.id,t0:ve,contact:me.clip.contact});const Qe=Math.hypot(me.contact[0]-kt[0],me.contact[1]-kt[1]);a.push({from:kt,to:me.contact,t0:ft,duration:we,style:"lofted",loft:Gc(Qe,q)-(yt+me.height)/2,toHeight:me.height,...yt?{fromHeight:yt}:{}}),pe?(ie[p.to]={at:xt,from:me.contact,height:me.height},N({player:p.to,at:[...ne],t0:Math.max(ve-Lr,0,D[p.to]??0),lock:[ve,xt+Mn],until:xt+Mn})):(Be&&Le<xt-Xo?console.warn(`[engine3d] ${p.to}'s own strike at t=${Le} is ${(xt-Le).toFixed(2)}s BEFORE the cross reaches their forehead (t=${xt.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):xe&&console.warn(`[engine3d] header for ${p.to} at t=${Le} is ${(Le-xt).toFixed(2)}s after the ball arrives (t=${xt.toFixed(2)}s) — ignored, cushioned instead`),N({player:p.to,at:[...r[S]],t0:p.t,lock:[xt-Mn,xt+Mn]}),a.push({from:me.contact,to:me.set,t0:xt,duration:Bc,style:"drop",fromHeight:me.height}),N({player:p.to,at:[...me.faceAt],t0:xt}),b.push({t:xt,player:p.to}),A[p.to]=xt+Bc,l.push({player:p.to,at:xt+Bc,carry:me.set}))}else if(p.type==="pass"){const xt=ft+we,ne=Fn(t.groups.receive,p.to,xt),Le=t.clips[ne];let xe=null,Be=1/0,He=!1;for(let pe=_+1;pe<Mt.length;pe++){const Lt=Mt[pe];(Lt.type==="pass"?Lt.from:Lt.player)===p.to&&Be===1/0&&(Be=Lt.t);const ve=Se[pe];if(!(!ve||ve.actor!==p.to)){ve.t-xt<=Xs&&(xe=ve.target,He=(Lt.type==="pass"||Lt.type==="shoot")&&!!Lt.firstTime);break}}if(He&&xe){const pe=ut(p.to,_,xt),Lt=Kn(pe.atArrival,Fe(pe.atArrival,xe));a.push({from:kt,to:Lt,t0:ft,duration:we,style:p.flightStyle==="lofted"?"lofted":p.flightStyle==="clipped"?"clipped":"ground",...p.loft!==void 0?{loft:p.loft}:{},...yt?{fromHeight:yt}:{}}),N({player:p.to,at:[...r[S]],t0:p.t,lock:[xt-Mn,xt+Mn]}),Et[p.to]={at:xt,from:Lt},Jt(xt,((Qi=T(_))==null?void 0:Qi.t)??i.duration,Lt)}else{const pe=P1(nt,kt,xe);let Lt=p.t;{const Ae=ut(p.to,_,xt),De=Ae.expected,Ge=Math.max(p.t,Ae.busyUntil),no=Math.max(Ae.afterT,p.t),mr=Ae.blocked;Lt=Ge;const $e=Math.hypot(pe.contact[0]-De[0],pe.contact[1]-De[1]);if($e>mE)if(mr)console.warn(`[engine3d] receive for ${p.to}: the ball lands ${$e.toFixed(2)}m away at t=${xt.toFixed(2)}s, but their authored ${mr} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Hn=Ze([pe.contact[0]-De[0],pe.contact[1]-De[1]]),fi=[pe.contact[0]-Ne*Hn[0],pe.contact[1]-Ne*Hn[1]],Pn=t.groups.walk,As=Pn!=null&&Pn.length?t.clips[Pn[0]].speed??Cn:Cn,ei={from:De,to:fi,t0:0,cruise:As,accel:Rn},Oi=xt-wd-se(ei);Oi<Ge-1e-9?console.warn(`[engine3d] receive adjustment for ${p.to}: the ${($e-Ne).toFixed(2)}m walk to the contact point would need to start at t=${Oi.toFixed(2)}s but they're busy until t=${Ge.toFixed(2)}s — skipped (the standing stretch stays)`):(ei.t0=Oi,Lt=xt-wd,it.push({player:p.to,afterT:no,move:ei,faceBall:[...kt],faceSettle:[...pe.faceAt],arrival:xt}))}}const me=Le.ballContact??0,ve=Math.min(me,Math.max(_E,Math.min(gE,bE*we,xt-(Lt+Sa)))),Qe=xt-ve;Qe<0&&console.warn(`[engine3d] receive cue for ${p.to} wants t0=${Qe.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:p.to,clip:ne,t0:Qe,...me>ve?{offset:me-ve}:{}}),a.push({from:kt,to:pe.contact,t0:ft,duration:we,style:Bt==="throw"||p.flightStyle==="lofted"?"lofted":Bt==="kick"||p.flightStyle==="clipped"?"clipped":"ground",...Bt==="throw"?{loft:Math.max(_t?Nc:1.5,p.loft??0)}:Bt==="kick"?{loft:Math.max(3,p.loft??0)}:p.loft!==void 0?{loft:p.loft}:{},...yt?{fromHeight:yt}:{},...rt(pe.contact)??{}}),a.push({from:pe.contact,to:pe.set,t0:xt,duration:ri,style:"ground"}),N({player:p.to,at:[...r[S]],t0:p.t,lock:[xt-Mn,xt+Mn]}),Ft({player:p.to,at:[...pe.faceAt],t0:xt},Be),b.push({t:xt,player:p.to}),A[p.to]=xt+ri,l.push({player:p.to,at:xt+ri,carry:pe.set}),Jt(xt+ri,((Ui=T(_))==null?void 0:Ui.t)??i.duration,pe.set)}}else if(p.flightStyle==="ground"){const xt=Math.hypot(nt[0]-kt[0],nt[1]-kt[1]),ne=p.flight??(p.touch?Math.sqrt(2*xt/Br):Bt==="throw"?Math.max(.4,xt/le):xt/S1);if(a.push({from:kt,to:[...nt],t0:ft,duration:ne,style:p.touch?"push":Bt==="throw"?"lofted":Bt==="kick"?"clipped":"ground",...p.touch?{endFrac:0}:{},...Bt==="throw"?{loft:_t?Nc:1.5}:Bt==="kick"?{loft:3}:{},...yt?{fromHeight:yt}:{},...rt(nt)??{}}),p.deflect){const Le=Math.hypot(p.deflect.to[0]-nt[0],p.deflect.to[1]-nt[1]);a.push({from:[...nt],to:[...p.deflect.to],t0:ft+ne,style:"ground",duration:jE(xt,ne,Le)})}}else{const xt=Math.hypot(nt[0]-kt[0],nt[1]-kt[1]),ne=p.flight??xt/M1,Le=Ze([nt[0]-kt[0],nt[1]-kt[1]]),xe=[nt[0]+jd*Le[0],nt[1]+jd*Le[1]],Be=ft+ne,He=a.length;a.push({from:kt,to:xe,t0:ft,duration:ne,style:"shot",...yt?{fromHeight:yt}:{}}),a.push({from:xe,to:xe,t0:Be,duration:y1,style:"drop"}),Jt(((ts=R(_))==null?void 0:ts.t)??0,$,kt);let pe=!1;for(const Lt of X){const me=pi=>{const ki=ut(Lt.id,_,pi);if(ki.afterT>-1/0)return ki.atArrival;const Vn=x[Lt.id];return Vn&&pi<Vn.t0+se(Vn)?Jn(Vn,pi).pos:[...r[Lt.id]]},ve=ft+Rd(Math.max(ne,Ld)),Qe=Cd(ft,ne,bn.dive.left.contact).t0,Ae=p.type==="shoot"?p.deflect:void 0,De=ot||!!Ae,Ge=me(De?ve:Qe),no=[nt[0]-Ge[0],nt[1]-Ge[1]],mr=Fe(Ge,kt),$e=De?u1(Ge,mr,kt,xe,q):null;if(Ae&&!$e&&console.warn(`[engine3d] deflect on the shot at t=${p.t} is dropped: ${Lt.id} is ${jm(Ge,kt,xe).reach.toFixed(2)} m off the ball line at body scale ${q} (his reach is ${(Vm*q).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!$e){if(Math.hypot(no[0],no[1])>Hm*q)continue;const pi=Zm(Ge,mr,xe),ki=ME[pi],Vn=t.clips[ki],{t0:mi,timeScale:Es}=Cd(ft,ne,bn.dive[pi].contact);if(N({player:Lt.id,at:[...kt],t0:Math.max($-Lr,0,D[Lt.id]??0),...Vn?{lock:[$,mi+Vn.duration/Es]}:{}}),Vn){c.push({player:Lt.id,clip:ki,t0:mi,...Es>1?{timeScale:Es}:{}});const ni=me(mi),gr=h1(ni,kt,xe,q),io=[gr[0]-ni[0],gr[1]-ni[1]],so=Math.hypot(io[0],io[1]),gu=Math.min(so,RE*q),_u=so>1e-9?[ni[0]+io[0]/so*gu,ni[1]+io[1]/so*gu]:[...ni],kg=Math.min(IE,Math.max(CE,Be-mi));d.push({player:Lt.id,from:ni,to:_u,t0:mi,duration:kg}),E[Lt.id]={t0:mi,at:[...r[Lt.id]]},r[Lt.id]=[..._u]}continue}if(pe)continue;pe=!0;const Hn=a[He];a.splice(He+1,1);let fi,Pn=$e.contact,As=qn*q;if($e.kind==="dive"){Hn.duration=Math.max(Hn.duration,Ld),fi=ft+Rd(Hn.duration);const pi=ft+Hn.duration,ki={player:Lt.id,from:[...Ge],to:$e.travelTo,t0:fi,duration:$e.contactOffset};d.push(ki);const Vn=Xm(ki,pi),mi=Math.min(1,(pi-fi)/$e.contactOffset),Es=bn.dive[$e.side],ni=mi*Es.reach*q,gr=Ze([$e.contact[0]-Ge[0],$e.contact[1]-Ge[1]]);Pn=[Vn[0]+ni*gr[0],Vn[1]+ni*gr[1]],As=(qn+(Es.hand-qn)*mi)*q,E[Lt.id]={t0:fi,at:[...r[Lt.id]]},r[Lt.id]=[...$e.travelTo]}else fi=Math.max($,ft+Hn.duration-$e.contactOffset);const ei=ft+Hn.duration;Hn.to=Pn,Hn.toHeight=As,c.push({player:Lt.id,clip:$e.clip,t0:fi,contact:$e.contactOffset});const Oi=fi+$e.clipDuration;if(N({player:Lt.id,at:[...kt],t0:Math.max($-Lr,0,D[Lt.id]??0),lock:[$,Oi]}),Ae){a.push(Fd(Pn,As,Ae,ei,q)),A[Lt.id]=ei,Rt[Lt.id]=Oi+qs;continue}b.push({t:ei,player:Lt.id});const za=zc(r[Lt.id],kt,Pn);$e.kind==="catch"?l.push({player:Lt.id,at:ei,carry:Pn,hand:{height:qn*q,follow:!0,bone:za}}):(l.push({player:Lt.id,at:ei,carry:Pn,hand:{height:Ho*q,from:As,rise:OE,follow:!0,bone:za}}),l.push({player:Lt.id,at:Oi,carry:Pn,hand:{height:qn*q,from:Ho*q,rise:Fc,follow:!0,bone:za}})),A[Lt.id]=ei,Rt[Lt.id]=Oi+qs}}if(p.type==="pass"&&!Bt&&be){const xt=t.groups.walk,ne=xt!=null&&xt.length?t.clips[xt[0]].speed??Cn:Cn,Le=[r[S][0]+Zr*Math.sin(oe),r[S][1]+Zr*Math.cos(oe)],xe=x[S],Be=xe?xe.t0+se(xe):-1/0;let He=1/0;for(let Ae=_+1;Ae<Mt.length;Ae++){const De=Mt[Ae];if((De.type==="pass"?De.from:De.player)===S){He=De.t;break}}const pe={from:[...r[S]],to:Le,t0:Js(t,be),cruise:ne,accel:Rn},Lt=pe.t0+se(pe)+Si<=He;let me=null,ve=null;if(xe&&I.has(xe)&&ft>=Be&&ft-Be<=BT&&hu(o[S],ft)<ug){const Ae=HT(),De={...xe,to:[...xe.to],cruise:Math.max(xe.cruise,Ae),endSpeed:Ae};De.t0=ft-se(De),De.t0>=xe.t0-1e-9&&li(De).peak>=Ae-1e-9&&(me=De,ve=Lt?{from:[...r[S]],to:Le,t0:ft,cruise:Ae,accel:Ea,startSpeed:Ae}:XT(r[S],oe,Ae,He-ft,ft,Ge=>zt(Ge)&&fe(Ge)))}if(me&&xe){for(const Ae of g[S]??[]){const De=c.indexOf(Ae);De>=0&&c.splice(De,1)}Object.assign(xe,me),g[S]=gt(xe,S)}const Qe=ve??(Lt?pe:null);Qe&&((o[S]??(o[S]=[])).push(Qe),x[S]=Qe,g[S]=gt(Qe,S),r[S]=[...Qe.to])}b.push({t:ft,player:null})}const C=Ot.get(L);C!==void 0&&C<p.t&&Ot.delete(L)}mt(1/0);const K=_=>Math.hypot(_.to[0]-_.from[0],_.to[1]-_.from[1]);function Nt(_,p,L,C,S=C){const G=(W,Z=C)=>W>L-1e-9&&W<Z-1e-9;return(o[_]??[]).some(W=>!p.has(W)&&G(W.t0))||c.some(W=>W.player===_&&!p.has(W)&&G(W.t0))||m.some(W=>W.player===_&&!p.has(W)&&G(W.t0))||u.some(W=>W.player===_&&!p.has(W)&&(G(W.t0,S)||!!W.lock&&W.lock[1]>L&&W.lock[0]<C))||b.some(W=>W.player===_&&G(W.t))||l.some(W=>W.player===_&&G(W.at))||h.some(W=>W.player===_&&W.contact>L-1e-9&&W.windowStart<C-1e-9)}function ht(_){var C;let p=null;for(const S of a)_>=S.t0&&_<S.t0+S.duration&&(!p||S.t0>=p.t0)&&(p=S);if(p)return Yi(p,_).pos;const L=jt(_);return L?((C=Ki(o[L]??[],_))==null?void 0:C.pos)??[...i.players.find(S=>S.id===L).start]:Fr(a,n,_).at}const bt=new Map;for(const[_,p]of Object.entries(o))for(const L of p){if(K(L)<=1e-6||M.has(L))continue;const C=Math.round(L.t0*100),S=bt.get(C);S?S.push({player:_,m:L}):bt.set(C,[{player:_,m:L}])}for(const _ of[...bt.keys()].sort((p,L)=>p-L)){const p=bt.get(_);if(new Set(p.map(S=>S.player)).size<qT)continue;const L=ht(_/100),C=p.filter(({player:S,m:G})=>v.has(G)&&!pt.has(S)&&!G.endSpeed&&!G.startSpeed&&jt(G.t0)!==S).map(S=>({...S,d:Math.hypot(S.m.from[0]-L[0],S.m.from[1]-L[1])})).sort((S,G)=>S.d-G.d||(S.player<G.player?-1:S.player>G.player?1:0));C.forEach(({player:S,m:G},W)=>{var at,dt;const Z=v.get(G),st=new Set([G,...f.get(G)??[],Z.face,(at=Z.start)==null?void 0:at.span,(dt=Z.start)==null?void 0:dt.cue]),nt=G.t0+se(G),tt=_t=>!Nt(S,st,G.t0,nt+_t);let lt=Yo+(C.length>1?(Il-Yo)*W/(C.length-1):0);if(!tt(lt)){if(!tt(Yo))return;let _t=Yo;for(let rt=0;rt<20;rt++){const $=(_t+lt)/2;tt($)?_t=$:lt=$}lt=_t}G.t0+=lt;for(const _t of f.get(G)??[])_t.t0+=lt,_t.loopUntil!==void 0&&(_t.loopUntil+=lt);Z.face&&(Z.face.t0+=lt,Z.face.until!==void 0&&(Z.face.until+=lt)),Z.start&&(Z.start.span.t0+=lt,Z.start.span.end+=lt,Z.start.end+=lt,Z.start.cue.t0+=lt,Z.start.cue.loopUntil!==void 0&&(Z.start.cue.loopUntil+=lt))})}const Pt=new Map,Ut=_=>Pt.get(_)??_,ee=[],Ue=new Map;for(const[_,p]of Object.entries(o))if(!pt.has(_))for(let L=0;L+1<p.length;L++){const C=p[L],S=p[L+1],G=v.get(C),W=v.get(S);if(!G||!W||G.r11||W.r11)continue;const Z=Ut(C),st=Ut(S);if((Z.endSpeed??0)>0||(S.startSpeed??0)>0)continue;const nt=K(C),tt=K(S);if(nt<pf||tt<pf||Math.hypot(S.from[0]-C.to[0],S.from[1]-C.to[1])>1e-6)continue;const lt=S.t0-(C.t0+se(Z)),at=Math.abs(oi(Fe(C.from,C.to),Fe(S.from,S.to)));if(lt<-1e-9||lt>KT||at>$T)continue;const dt=C.startSpeed??0,_t=S.endSpeed??0,rt=Math.min(Z.cruise,st.cruise),$=Math.min(Math.max(ZT(at)*rt,df),rt);if($<df-1e-9||2*C.accel*nt<$*$-dt*dt||2*S.accel*tt<$*$-_t*_t)continue;const et={...C,endSpeed:$},ft=S.t0-(C.t0+se(et)),vt=dt>0?0:C.t0-G.t0>1e-9?ff-Il:ff,yt=Math.max(0,Math.min(ft,vt)),Bt=JT(et,ft-yt);if(Bt===null||li(et).t3+Bt>YT*se(Z)+1e-9)continue;const Kt={...et,t0:C.t0+yt,...Bt>0?{hold:Bt}:{}};if(Math.abs(Kt.t0+se(Kt)-S.t0)>1e-7)continue;const be=Math.min(2*Um/Math.sin(Math.max(at,1e-9)/2),va*nt,va*tt);if($*Math.tan(at/2)/be>cu($*Math.cos(at/2)))continue;const oe=S.t0+Pc({...S,startSpeed:$},be),kt=new Set([C,S,...f.get(C)??[],...f.get(S)??[],G.face,W.face,(es=G.start)==null?void 0:es.span,(Tt=G.start)==null?void 0:Tt.cue,(re=W.start)==null?void 0:re.span,(Vt=W.start)==null?void 0:Vt.cue]);jt(C.t0)===_||Nt(_,kt,C.t0,S.t0+se(st),oe)||(Pt.has(C)||Pt.set(C,{...C}),Pt.has(S)||Pt.set(S,{...S}),yt>0&&(G.face&&(G.face.t0+=yt,G.face.until!==void 0&&(G.face.until+=yt)),G.start&&(G.start.span.t0+=yt,G.start.span.end+=yt,G.start.end+=yt,G.start.cue.t0+=yt,G.start.cue.loopUntil!==void 0&&(G.start.cue.loopUntil+=yt))),Object.assign(C,Kt),S.startSpeed=$,S.flow=!0,ee.push({player:_,A:C,B:S}),Ue.set(C,_),Ue.set(S,_))}for(const[_,p]of Object.entries(o))for(let L=0;L<p.length;L++){if(!Ue.has(p[L])||p[L].flow)continue;let C=L;for(;C+1<p.length&&p[C+1].flow&&au(p[C],p[C+1]);)C++;const S=p.slice(L,C+1);for(const Z of S){for(const nt of f.get(Z)??[]){const tt=c.indexOf(nt);tt>=0&&c.splice(tt,1)}const st=v.get(Z);if(st.start&&Z.flow){const nt=m.indexOf(st.start.span);nt>=0&&m.splice(nt,1);const tt=c.indexOf(st.start.cue);tt>=0&&c.splice(tt,1),st.start=null}}const G=v.get(S[0]);let W=Q(S,_,G.t0);G.start&&m.includes(G.start.span)&&(W=At(W,G.start.end)),c.push(...W);for(const Z of S)f.set(Z,W)}for(const{player:_,A:p,B:L}of ee){const C=wl(p,L),S=v.get(L).face,G=S?u.indexOf(S):-1;if(!C||!S||G<0)continue;const W=K(p),Z=Fe(p.from,p.to),st=oi(Z,Fe(L.from,L.to))<0?-1:1,nt=at=>at<=.5?p.t0+Pc(p,W-C.L+2*C.L*at):L.t0+Pc(L,2*C.L*(at-.5)),tt=Math.max(1,Math.ceil(C.turn/QT-1e-9)),lt=[];for(let at=0;at<=tt;at++){const dt=at===0?0:XA(C.turn,(at-.5)/tt*C.turn),_t=Z+st*at*C.turn/tt,rt=Om(C,dt).pos;lt.push({player:_,at:[rt[0]+mf*Math.sin(_t),rt[1]+mf*Math.cos(_t)],t0:nt(dt)})}u.splice(G,0,...lt),S.t0=nt(1)}b.sort((_,p)=>_.t-p.t),c.sort((_,p)=>_.t0-p.t0),RT(c,o,t);const ze=kT(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:m,bounces:ze,ballSwaps:Wt,attachTo(_){let p=null;for(const L of b)L.t<=_&&(p=L.player);return p}}}const Wc=2*Math.LN2,jc=1e-5,gf=.5*Math.PI/180,Xc=5;function _f(i,t,e,n,s,r=0){n<0&&(i=-i,t=-t,e=-e,n=-n);const o=Math.sqrt(i*i+t*t+e*e),a=o<1e-8?2:2*Math.atan2(o,n)/o;s[r]=a*i,s[r+1]=a*t,s[r+2]=a*e}function qc(i,t,e,n){const s=.5*Math.sqrt(i*i+t*t+e*e);if(s<1e-8)return n.set(.5*i,.5*t,.5*e,1).normalize();const r=Math.sin(s)/(2*s);return n.set(r*i,r*t,r*e,Math.cos(s))}const bf=new WeakMap;function xf(i){let t=bf.get(i);if(!t){t={q:new Map};for(const e of i.tracks){const n=Ie.parseTrackName(e.name);n.propertyName==="quaternion"&&t.q.set(n.nodeName??"",e.createInterpolant())}bf.set(i,t)}return t}function Zo(i,t,e){return e?t>0?(i%t+t)%t:0:Math.max(0,Math.min(t,i))}const vf=new WeakMap;function ew(i){let t=vf.get(i);return t||(t=new Map,i.traverse(e=>{e.name&&!t.has(e.name)&&t.set(e.name,e)}),vf.set(i,t)),t}const Xe=new Je,Ks=new Je,yf=new Je,$s=new Float64Array(3);function nw(i){const t=new Map;function e(x,g,f,v,M){const y=x.q.get(g);if(!y)return!1;const T=y.evaluate(f);return v[M]=T[0],v[M+1]=T[1],v[M+2]=T[2],v[M+3]=T[3],!0}function n(x,g,f,v){const M=Wc/(x.hl+jc),y=Math.exp(-M*f);for(let T=0;T<3;T++){const R=x.rx[g*3+T],I=x.rv[g*3+T];v[T]=y*(R+(I+R*M)*f)}}const s=new Float64Array(4),r=new Float64Array(4),o=new Float64Array(4),a=new Float64Array(4),c=new Float64Array(3),u=new Float64Array(3),h=new Float64Array(3),l=new Float64Array(3);function d(x,g,f,v,M,y,T){const R=i??T;if(!(R>0)){t.delete(x);return}const I=xf(f.clip),D=xf(v.clip),A=t.get(x),E=A?M-A.t0:0,P=ew(g),N=Zo(f.time,f.clip.duration,f.loop),B=Zo(f.time-y*f.rate,f.clip.duration,f.loop),j=Zo(v.time,v.clip.duration,v.loop),H=Zo(v.time-y*v.rate,v.clip.duration,v.loop),k=[],z=[],U=[];for(const J of I.q.keys()){if(!D.q.has(J))continue;e(I,J,N,s,0),e(I,J,B,r,0),e(D,J,j,o,0),e(D,J,H,a,0);const Y=A?A.names.indexOf(J):-1;Y>=0&&(n(A,Y,E,c),n(A,Y,Math.max(0,E-y),u),Xe.set(s[0],s[1],s[2],s[3]),Xe.premultiply(qc(c[0],c[1],c[2],Ks)),s[0]=Xe.x,s[1]=Xe.y,s[2]=Xe.z,s[3]=Xe.w,Xe.set(r[0],r[1],r[2],r[3]),Xe.premultiply(qc(u[0],u[1],u[2],Ks)),r[0]=Xe.x,r[1]=Xe.y,r[2]=Xe.z,r[3]=Xe.w),Xe.set(s[0],s[1],s[2],s[3]).multiply(Ks.set(-o[0],-o[1],-o[2],o[3])),_f(Xe.x,Xe.y,Xe.z,Xe.w,h,0),yf.set(r[0],r[1],r[2],r[3]).multiply(Ks.set(-a[0],-a[1],-a[2],a[3])),Xe.multiply(Ks.copy(yf).invert()),_f(Xe.x,Xe.y,Xe.z,Xe.w,l,0);const ct=Math.hypot(h[0],h[1],h[2]),St=Math.hypot(l[0],l[1],l[2])/y;ct<gf&&St<gf/y||(k.push(J),z.push(h[0],h[1],h[2]),U.push(l[0]/y,l[1]/y,l[2]/y))}if(!k.length){t.delete(x);return}t.set(x,{t0:M,hl:R,n:k.length,names:k,nodes:k.map(J=>P.get(J)),rx:Float64Array.from(z),rv:Float64Array.from(U),ql:new Float64Array(k.length*4),written:!1})}function m(x,g,f){var I;const v=t.get(x);if(!v)return;const M=v.ql;if(f===0&&v.written){for(let D=0;D<v.n;D++){const A=D*4;(I=v.nodes[D])==null||I.quaternion.set(M[A],M[A+1],M[A+2],M[A+3])}return}const y=g-v.t0;if(y<0||y>Xc*v.hl){t.delete(x);return}const T=Wc/(v.hl+jc),R=Math.exp(-T*y);for(let D=0;D<v.n;D++){const A=v.nodes[D];if(!A)continue;const E=D*3,P=D*4,N=v.rx,B=v.rv;$s[0]=R*(N[E]+(B[E]+N[E]*T)*y),$s[1]=R*(N[E+1]+(B[E+1]+N[E+1]*T)*y),$s[2]=R*(N[E+2]+(B[E+2]+N[E+2]*T)*y);const j=A.quaternion.premultiply(qc($s[0],$s[1],$s[2],Ks));M[P]=j.x,M[P+1]=j.y,M[P+2]=j.z,M[P+3]=j.w}v.written=!0}function b(x,g){const f=t.get(x);if(!f)return 0;const v=g-f.t0;if(v<0||v>Xc*f.hl)return 0;const M=Wc/(f.hl+jc),y=Math.exp(-M*v);let T=0;for(let R=0;R<f.n;R++){const I=R*3;let D=0;for(let A=0;A<3;A++){const E=f.rx[I+A],P=f.rv[I+A],N=y*(E+(P+E*M)*v);D+=N*N}T=Math.max(T,Math.sqrt(D))}return T}return{transition:d,apply:m,peak:b,alive:(x,g)=>{const f=t.get(x);return!!f&&g-f.t0>=0&&g-f.t0<=Xc*f.hl},reset:()=>t.clear()}}const Kc="idle_b",Mf=.5,iw=.3,sw=15,rw=6,ow=1.5,aw=2,cw=2,$c=.5,du=Math.PI/180,Sf=2.5,Af=5,Yc=.4,Ef=.08,Tf=60*du,lw=90*du,uw=1.5,hw=85*du;function Jo(i,t,e){let n=(ci(i)^Math.imul(t+1,2654435761)^e)>>>0;return n=Math.imul(n^n>>>16,73244475)>>>0,n=Math.imul(n^n>>>16,73244475)>>>0,((n^n>>>16)>>>0)/4294967296}function wf(i,t,e){var n;return((n=Ki(t??[],e))==null?void 0:n.pos)??i}function dw(i,t,e,n){var m,b,x;const s=new Map(i.map(g=>[g.id,g.start])),r=[...t.flights].sort((g,f)=>g.t0-f.t0);function o(g){let f=n;for(const M of r){if(g>=M.t0&&g<=M.t0+M.duration){const y=(g-M.t0)/M.duration;return[M.from[0]+(M.to[0]-M.from[0])*y,M.from[1]+(M.to[1]-M.from[1])*y]}M.t0+M.duration<g&&(f=M.to)}const v=t.attachTo(g);return v&&s.has(v)?wf(s.get(v),t.moves[v],g):f}const a=new Map(i.map(g=>[g.id,[]]));for(const g of t.anims)(m=a.get(g.player))==null||m.push(g.t0);for(const[g,f]of Object.entries(t.moves))for(const v of f)(b=a.get(g))==null||b.push(v.t0);for(const g of t.arrivals)(x=a.get(g.player))==null||x.push(g.at);for(const g of a.values())g.sort((f,v)=>f-v);const c=(g,f)=>{for(const v of a.get(g)??[])if(v>=f)return v;return 1/0},u=Math.ceil(e/$c)+2,h=new Map(i.map(g=>[g.id,new Uint8Array(u)]));for(let g=0;g<u;g++){const f=g*$c,v=o(f),M=i.map(y=>wf(y.start,t.moves[y.id],f));i.forEach((y,T)=>{const R=c(y.id,f)-f,I=Math.hypot(M[T][0]-v[0],M[T][1]-v[1])<=sw;let D=0;for(let E=0;E<M.length;E++)E!==T&&Math.hypot(M[T][0]-M[E][0],M[T][1]-M[E][1])<=ow&&D++;const A=D>=aw&&R>cw;h.get(y.id)[g]=!A&&(I||R<=rw)?1:0})}const l=new Map;for(const g of i){const f=[];let v=Jo(g.id,0,23721)*Af;for(let M=1;v<e&&M<512;M++)f.push(v),v+=Sf+Jo(g.id,M,27313)*(Af-Sf);l.set(g.id,f)}const d=new Map;for(const g of t.arrivals)(d.get(g.player)??d.set(g.player,[]).get(g.player)).push(g.at);return{ready(g,f){const v=h.get(g);if(!v)return!1;const M=Math.max(0,Math.min(u-1,Math.floor(f/$c)));return v[M]===1||M+1<u&&v[M+1]===1},scan(g,f,v){if(!v)return{yaw:0,env:0};for(const y of d.get(g)??[])if(y>=f&&y-f<=uw+Yc)return{yaw:0,env:0};const M=l.get(g)??[];for(let y=0;y<M.length;y++){const T=f-M[y];if(T<0)break;if(T>Yc)continue;const R=Math.max(0,Math.min(1,T/Ef,(Yc-T)/Ef)),I=Tf+Jo(g,y,15383)*(lw-Tf);return{yaw:(Jo(g,y,4563)<.5?1:-1)*I*R,env:R}}return{yaw:0,env:0}}}}const fw=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Rf=new Map,Cf=30;function pw(i,t=0){const e=`${i.uuid}@${t}`;let n=Rf.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>fw.test(Ie.parseTrackName(s.name).nodeName??"")),K0.makeClipAdditive(n,t*Cf,n,Cf),Rf.set(e,n)),n}function mw(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/ng),n=Math.min(1,(t-i)/ig);return wT*Math.max(0,Math.min(e,n))}const If=.1,gw=1;function _w(i,t,e,n=[],s,r){const o=H=>Js(i,H),a=(H,k)=>cg(t,i,H,k);function c(H,k){let z=0;for(const U of t){if(U.player!==H)continue;const J=o(U);J<=k&&J>z&&(z=J)}return z}function u(H,k){const z=e.get(H);return z!=="keeper"&&i.clips[Kc]&&(r!=null&&r(H,k))?Kc:cf(qd(i,z),H,AT(H,k-c(H,k)))}const h=new Map,l=new Map,d=new Map,m=new Map,b=new Map,x=new Map,g=Qm(i),f=new Map;for(const H of g)for(const k of i.groups[H.gait]??[fa(i,H.gait,"",0)])f.set(k,H.gait);const v=s!=null&&s.off?null:nw(s==null?void 0:s.halflife),M=!!(s!=null&&s.all),y=(H,k)=>!!v&&(M||tT(i,H,k));let T=0;const R=new Map;function I(H,k){const z=a(H,k);if(z!=null&&z.additive)return null;if(z){const ct=i.clips[z.clip];if(ct.category==="locomotion")return null;const St=z.timeScale??1;return{id:z.clip,loop:ct.loop,rate:St,time:(z.offset??0)+(k-Math.max(z.t0,0))*St}}const U=u(H,k),J=$o(H),Y=i.clips[U].duration;return{id:U,loop:!0,rate:J,time:((Ko(H,Y)+k*J)%Y+Y)%Y}}function D(H,k,z){const U=[];for(const Y of t)if(Y.player===H)for(const ct of[Math.max(Y.t0,0),o(Y)])ct>k&&ct<=z&&U.push(ct);let J=c(H,z);for(let Y=0;Y<64&&J<=z;Y++)J+=lg(H,Y),J>k&&J<=z&&U.push(J);return U.sort((Y,ct)=>ct-Y)}const A=1/60,E=1e-4;function P(H,k){return[I(H,k-E),I(H,k+E)]}function N(H,k,z,U){const[J,Y]=P(H,z);if(!J||!Y||J.id===Y.id||Y.id!==U||!y(J.id,Y.id))return!1;const ct=k.clips.get(J.id),St=k.clips.get(Y.id);return!ct||!St?!1:(v.transition(H,k.mixer.getRoot(),{clip:ct,time:J.time,rate:J.rate,loop:J.loop},{clip:St,time:Y.time,rate:Y.rate,loop:Y.loop},z,A,If),!0)}function B(H,k,z,U,J){for(const Y of D(H,z,U)){const[ct,St]=P(H,Y);if(!(ct&&St&&ct.id===St.id))return N(H,k,Y,J)}return!1}function j(H,k,z,U,J){var w;const Y=v?R.get(H)!==T:!1;v&&R.set(H,T);let ct=null;const St=a(H,z),Ft=St!=null&&St.additive?St:null,it=Ft?Ua(g,J):null,mt=it?fa(i,it.gait,H,Ft.t0):null,ut=Ft?null:St,Q=ut??(mt?Ft:null),gt=mt??(ut==null?void 0:ut.clip)??u(H,z),At=h.get(H);if(bT(At,gt,ut)){const X=i.clips[gt],q=k.mixer.clipAction(k.clips.get(gt)),pt=!!At&&f.has(At.clip)&&f.has(gt)&&!(ut!=null&&ut.offset),ot=pt&&((w=l.get(H))==null?void 0:w.action)===q;if(ot||q.reset(),pt&&!ot){const Rt=i.clips[At.clip].duration;Rt>0&&(q.time=At.action.time/Rt%1*X.duration)}q.loop=X.loop?2201:2200,q.clampWhenFinished=!0,ut!=null&&ut.offset&&(q.time=ut.offset),At&&At.action!==q&&(y(At.clip,gt)?(Y||(ct={src:{clip:At.action.getClip(),loop:i.clips[At.clip].loop,rate:At.action.timeScale,time:At.action.time+U*At.action.timeScale},hl:If}),At.action.weight=0,At.action.stop(),At.action.enabled=!1):(At.action.fadeOut(Q1(i,At.clip,gt)),pt||q.fadeIn(sg(i,gt,At.clip)))),q.play(),h.set(H,{clip:gt,offset:ut==null?void 0:ut.offset,action:q})}const wt=h.get(H).action,jt=!!Q&&Q.timeScale===void 0&&i.clips[gt].category==="locomotion",Wt=jt?f.get(gt):void 0,ce=jt?Wt?q1(g,J,Wt):{timeScale:j1(J,i.clips[gt].speed??Cn),partner:null,weight:0}:null,V=ce!=null&&ce.partner&&Q?fa(i,ce.partner,H,Q.t0):null,Pe=l.get(H);if(Pe&&Pe.clip!==V&&(Pe.clip!==gt&&(Pe.action.weight=0,Pe.action.stop()),l.delete(H)),Q)if((ut==null?void 0:ut.timeScale)!==void 0)wt.timeScale=ut.timeScale,wt.weight=1;else if(ce){if(wt.timeScale=ce.timeScale,wt.weight=1-ce.weight,V){let X=l.get(H);if(!X){const ot=k.mixer.clipAction(k.clips.get(V));ot.isRunning()&&ot.getEffectiveWeight()>0?ot.stopFading():(ot.reset(),ot.play()),ot.loop=2201,X={clip:V,action:ot},l.set(H,X)}X.action.weight=ce.weight,X.action.timeScale=ce.timeScale;const q=i.clips[gt].duration,pt=i.clips[V].duration;q>0&&(X.action.time=wt.time/q%1*pt)}}else wt.timeScale=1,wt.weight=1;else{wt.weight=1,wt.timeScale=$o(H);const X=i.clips[gt].duration;wt.time=((Ko(H,X)+z*wt.timeScale)%X+X)%X}const Qt=gt===hf?0:OT(n,H,z),Jt=m.get(H),Ht=Qt>0?k.clips.get(hf):void 0;if(Ht){let X=Jt;X||(X=k.mixer.clipAction(Ht),X.reset(),X.loop=2201,X.timeScale=0,X.play(),m.set(H,X));const q=Ht.duration;X.time=((Ko(H,q)+z*$o(H))%q+q)%q,X.weight=Qt,wt.weight*=1-Qt}else Jt&&(Jt.weight=0,Jt.stop(),Jt.enabled=!1,m.delete(H));const _e=b.get(H),It=!Q&&gt===Kc?1-Mf:0;if(It>0||_e){const X=(_e==null?void 0:_e.clip)??cf(qd(i,void 0),H,0);let q=_e;if(!q){let ot=x.get(X);ot||x.set(X,ot=k.clips.get(X).clone());const Rt=k.mixer.clipAction(ot);Rt.reset(),Rt.loop=2201,Rt.timeScale=0,Rt.play(),q={clip:X,action:Rt,w:Y?It:0},b.set(H,q)}const pt=(U>0?U:0)*(1-Mf)/iw;if(q.w=Y?It:q.w+Math.max(-pt,Math.min(pt,It-q.w)),q.w<=0&&It===0)q.action.weight=0,q.action.stop(),q.action.enabled=!1,b.delete(H);else{const ot=i.clips[X].duration;q.action.time=((Ko(H,ot)+z*$o(H))%ot+ot)%ot,q.action.weight=q.w,wt.weight*=1-q.w}}const F=d.get(H);if(Ft){const X=Ft.offset??0,q=Math.max(0,i.clips[Ft.clip].duration-X),pt=mw(z-Ft.t0,q);let ot=F;if(!ot||ot.clip!==Ft.clip||ot.offset!==X){ot&&(ot.action.weight=0,ot.action.stop(),ot.action.enabled=!1);const Rt=k.mixer.clipAction(pw(k.clips.get(Ft.clip),X));Rt.reset(),Rt.loop=2200,Rt.clampWhenFinished=!0,Rt.timeScale=0,Rt.play(),d.set(H,ot={clip:Ft.clip,offset:X,action:Rt})}ot.action.time=Math.min(i.clips[Ft.clip].duration,X+Math.max(0,z-Ft.t0)),ot.action.weight=pt}else F&&(F.action.weight=0,F.action.stop(),F.action.enabled=!1,d.delete(H));if(k.mixer.update(U),v){const X=h.get(H);ct?B(H,k,z-U,z,X.clip)||v.transition(H,k.mixer.getRoot(),ct.src,{clip:X.action.getClip(),time:X.action.time,rate:X.action.timeScale,loop:i.clips[X.clip].loop},z,Math.max(U,1/240),ct.hl):Y&&B(H,k,z-gw,z,X.clip),v.apply(H,z,U)}}return{applyAnim:j,cueAt:a,inert:v,reset:()=>{v&&(v.reset(),T++)}}}class bw{constructor(t,e){an(this,"_t",0);an(this,"_playing",!1);an(this,"speed",1);an(this,"loopCbs",[]);an(this,"endCbs",[]);an(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function xw(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,d){const m=e.get(o)??0,b=og(i,o,a);let x;if(b){const M=s.get(o);M&&M.span===b?x=M.from:(x=m,s.set(o,{span:b,from:x}))}else s.delete(o);const g=b?eT(i,o,a,x):null,f=g?nT(Ti[b.clip],u):d?sE:cu(u),v=g?yd(m,g.heading,c,f):l?m:yd(m,h,c,f);return n.set(o,c>0?(v-m)/c:0),e.set(o,v),{h:v,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const vw=.2,yw=.5,Mw=.06,Sw=.25,Pf=.15,Aw=.25,Ew=.2;function Tw(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=vw*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function ww(i,t,e=1){return i.speed>yw*e||i.y>t+Mw*e}function Rw(i,t,e=1){const n=Math.hypot(i,t),s=Sw*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function Cw(i,t){const e=i??[];for(let n=0;n<e.length;n++){const s=e[n];if(n+1<e.length&&au(s,e[n+1]))continue;const r=s.t0+se(s);if(t>r-Aw&&t<=r)return!0}return!1}const Iw=new Set(["turn","transition","receive","pass","idle"]);function Pw(i,t,e){return e||i===null?!0:Iw.has(t??"")}function Lw(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/Pf;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[y,T]=e(l,a);return[l.corrX+y,l.corrZ+T]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],[0,0];const d=o[0]-l.prevRoot[0],m=o[1]-l.prevRoot[1],b=l.rootV=Math.hypot(d,m)/c,x=r.map((y,T)=>{const R=l.prev[T],I=R?Math.hypot(y[0]-R[0]-d,y[2]-R[2]-m)/c:1/0;return{x:y[0],y:y[1],z:y[2],speed:I}}),g=y=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||b>=Ew)g();else if(l.foot>=0&&ww(x[l.foot],l.plantY,h)&&g(),l.foot<0){const y=Tw(x,h);y>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=y,l.plantY=x[y].y,l.anchorX=r[y][0],l.anchorZ=r[y][2])}else{const[y,T]=Rw(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=y,l.corrZ=T}const[f,v]=e(l,a);(a-l.outAt)/Pf>=1&&(l.outX=0,l.outZ=0);const M=[l.corrX+f,l.corrZ+v];return l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],l.prevT=a,M}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const fu=Math.PI/180,pg=2*fu,mg=4*fu,Dw=8*fu,Fw=mg/pg,Lf=.12,Nw=.6,Uw=.08,Df=.4;function Ow(i){return i<Fw?0:Math.min(Dw,Math.max(mg,pg*i))}function kw(i,t){const e=Math.hypot(i[0],i[1]),n=Ow(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function Zc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function Bw(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=kw(s,r),u=Zc(i.get(n)??0,c.pitch*o,a,Lf),h=Zc(t.get(n)??0,c.roll*o,a,Lf);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=Fa(s)*Nw,a=Zc(e.get(n)??0,o,r,Uw);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const Jc=new Je,Ff=new Je,Nf=new Je,Ta=new Je,Gw=new Bn;function zw(i,t){Jc.identity();for(let e=i.parent;e&&e!==t;e=e.parent)Jc.premultiply(e.quaternion);return Jc}const Jr=new WeakMap;function gg(i){const t=Jr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function _g(i,t){const e=Jr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):Jr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function Uf(i,t,e,n,s){if(gg(t),!e&&!n&&!s){Jr.delete(t);return}Ta.copy(t.quaternion);const r=zw(t,i);Ff.setFromEuler(Gw.set(e,n,s,"YXZ")),Nf.copy(r).invert().multiply(Ff).multiply(r),t.quaternion.premultiply(Nf),_g(t,Ta)}function Hw(i,t){if(gg(i),!t){Jr.delete(i);return}Ta.copy(i.quaternion),i.rotation.y+=t,_g(i,Ta)}const Vw=.58,Ww=.15,jw=.5,Qc=6,Xw=.3,Qs=.5,qw=.7;function Kw(i,t,e,n,s=new Map,r=!1){const o=new Map(i.map(a=>[a,[0,0]]));for(let a=0;a<i.length;a++)for(let c=a+1;c<i.length;c++){const u=e.has(i[a]),h=e.has(i[c]);if(u&&h)continue;let l=1/0,d=1,m=0;const b=R=>{const I=R.get(i[a]),D=R.get(i[c]);return I&&D?[D[0]-I[0],D[1]-I[1]]:null};for(let R=0;R<t.length;R++){const I=b(t[R]);if(!I)continue;const D=R+1<t.length?b(t[R+1]):null,A=D?D[0]-I[0]:0,E=D?D[1]-I[1]:0,P=A*A+E*E,N=P>1e-12?Math.min(1,Math.max(0,-(I[0]*A+I[1]*E)/P)):0;let B=I[0]+N*A,j=I[1]+N*E;const H=Math.hypot(B,j);if(H>=l)continue;if(l=H,H<1e-6)if(P>1e-12){const z=Math.sqrt(P);B=-E/z,j=A/z}else B=1,j=0;const k=Math.hypot(B,j);d=B/k,m=j/k}if(l>=n)continue;const x=n-l,g=u?0:r?Math.max(s.get(i[a])??0,Qs):(s.get(i[a])??0)<Qs?0:s.get(i[a]),f=h?0:r?Math.max(s.get(i[c])??0,Qs):(s.get(i[c])??0)<Qs?0:s.get(i[c]);if(g+f<=0)continue;const v=g/(g+f),M=f/(g+f),y=o.get(i[a]),T=o.get(i[c]);y[0]-=d*x*v,y[1]-=m*x*v,T[0]+=d*x*M,T[1]+=m*x*M}return o}function $w(){const i=new Map;let t=-1/0;return{step(e,n,s,r,o,a,c){const u=Math.abs(o-t)>.25,h=Kw(e,n,s,r,c,u);t=o;const l=u?1:a>0?1-Math.exp(-a/Ww):0;for(const d of e){const m=(c==null?void 0:c.get(d))??0;if(!u&&m<Qs&&!s.has(d))continue;const b=h.get(d),x=i.get(d)??[0,0];let g=(b[0]-x[0])*l,f=(b[1]-x[1])*l;const v=Math.hypot(g,f),M=qw*Math.max(m,Qs)*a;!u&&v>M&&(g*=M/v,f*=M/v),i.set(d,[x[0]+g,x[1]+f])}return i}}}function jr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function Yw(i){var r;const t=[i.root[0]+Ne*Math.sin(i.heading),i.root[1]+Ne*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?jr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Ne*Math.sin(s.heading),i.root[1]+Ne*Math.cos(s.heading)],a=jr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function Zw(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*jr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?jr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=jr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function pa(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=Yi(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:fE(e),speed:km(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:Yw(n),height:Zw(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const Jw=1.2,Qw=40;function bg(i,t,e){var s;const n=((s=Ki(i.moves[t]??[],e))==null?void 0:s.pos)??i.starts[t]??[0,0];return qm(i.dives,i.moves[t],t,e)??n}function Of(i,t){const e=i.attachTo(t),n=pa({t,holderId:e,holderRoot:e?bg(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const xg=.55,tR=.3,kf=.6,eR=.6,nR=.4,ka=i=>Math.min(Math.max(i,0),1);function iR(i,t){if(t<=i.t0)return 0;if(t>=i.t0+se(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=Jn(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function sR(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,d=a-s-.1,m=x=>{const g=e?e*Math.sin(2*Math.PI*x/n):0;return[i[0]+c*x+h*g,i[1]+u*x+l*g]},b=[];for(let x=.15;x+r*.5<=d;x+=r+o){const g=Math.min(x+r,d),[f,v]=m(x),[M,y]=m(g);b.push({ax:f,ay:v,bx:M,by:y,k:(x+g)/2/a})}return b}function Bf(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=xg*e,a=tR*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const Gf=1.6,Qo=2.2,rR=5,oR=5,aR=6,zf=14,cR=4,lR=20,uR="#E8ECEF",hR="#8D949B",dR=1.2,fR=3,pR=.4;function Hf(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(aR*n,s*.5),o=i==="dribble",a=i==="pass"?lR*n:o?zf*n/8:rR*n;return{dashes:sR(t,e,o?cR*n:0,zf*n,r,a,i==="move"?oR*n:0),headScale:r/xg}}function mR(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function gR(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function Ba(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=dR}function _R(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const Vf=.012,bR=.14,xR=.38,Wf=.15,vg=.3,vR="#bfe333";function yR(i){const t=1-2*vg,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const ta=1.5,MR=.3,SR=24;function jf(i){return Wf+(xR-Wf)*ka(i)}function Pl(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=ta?0:1-s/ta;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,ta)/ta;return Math.min(r,a*Math.max(1-(i-o)/MR,0))}function Ll(i,t){for(let e=t+1;e<i.length;e++)if(Ba(i[e]))return i[e].t0}function AR(i,t){const e=[];for(let n=0;n<i.length;n++)Ba(i[n])&&Pl(t,i[n],Ll(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function ER(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=Yi(i,t).pos;return ka(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function TR(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=Yi(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||Ba(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=Yi(r,e).pos;return[o[0],o[1]]}function Xf(i,t){const e=ka((i-t)/.06);return kf+(1-kf)*e}function wR(i,t){return ka((i-(t-eR))/nR)}const RR=.35;function CR(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+RR}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+ri})}return n.sort((s,r)=>s.t0-r.t0)}function IR(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const qf=1e-6;function Dl(i,t,e){return Wm(i,t,e)>0}function PR(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-qf);if(r&&Dl(i.arrivals,r,s.t0-qf))return{kind:"halo"}}const n=IR(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Dl(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function LR(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const DR=.85;function FR(i,t){return i>0?{draw:t>=i*DR,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const NR=.15,UR=1e-6;function Kf(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function OR(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function yg(i,t,e,n){var o;const s=gs(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=Kf((n-OR(i,e,s))/NR);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-Kf((n-a.windowStart)/Math.max(a.contact-a.windowStart,UR)));return r}function kR(i,t,e){var s,r;const n=(r=(s=gs(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function BR(i,t,e,n){return Dl(i,e,n)||yg(i,t,e,n)>0}const GR=25;function zR(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function HR(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(zR(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=km(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/GR),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const VR=.02;function WR(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=VR,o)}function jR(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{WR(e,n,s,r,o,a,c,t),t=!1}}const $f=new mn,ea=new O;class Mg extends u_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new je(t,3)),this.setAttribute("uv",new je(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new ul(e,6,1);return this.setAttribute("instanceStart",new Yn(n,3,0)),this.setAttribute("instanceEnd",new Yn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new ul(e,6,1);return this.setAttribute("instanceColorStart",new Yn(n,3,0)),this.setAttribute("instanceColorEnd",new Yn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new V0(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),$f.setFromBufferAttribute(e),this.boundingBox.union($f))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ea.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ea)),ea.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ea));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};An.line={uniforms:Ol.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};class pu extends Pi{constructor(t){super({type:"LineMaterial",uniforms:Ol.clone(An.line.uniforms),vertexShader:An.line.vertexShader,fragmentShader:An.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const tl=new de,Yf=new O,Zf=new O,cn=new de,ln=new de,ii=new de,el=new O,nl=new te,un=new T_,Jf=new O,na=new mn,ia=new Gn,si=new de;let ai,_s;function Qf(i,t,e){return si.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),si.multiplyScalar(1/si.w),si.x=_s/e.width,si.y=_s/e.height,si.applyMatrix4(i.projectionMatrixInverse),si.multiplyScalar(1/si.w),Math.abs(Math.max(si.x,si.y))}function XR(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){un.start.fromBufferAttribute(s,a),un.end.fromBufferAttribute(r,a),un.applyMatrix4(e);const u=new O,h=new O;ai.distanceSqToSegment(un.start,un.end,h,u),h.distanceTo(u)<_s*.5&&t.push({point:h,pointOnLine:u,distance:ai.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function qR(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;ai.at(1,ii),ii.w=1,ii.applyMatrix4(t.matrixWorldInverse),ii.applyMatrix4(n),ii.multiplyScalar(1/ii.w),ii.x*=r.x/2,ii.y*=r.y/2,ii.z=0,el.copy(ii),nl.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,m=h;d<m;d++){if(cn.fromBufferAttribute(c,d),ln.fromBufferAttribute(u,d),cn.w=1,ln.w=1,cn.applyMatrix4(nl),ln.applyMatrix4(nl),cn.z>l&&ln.z>l)continue;if(cn.z>l){const M=cn.z-ln.z,y=(cn.z-l)/M;cn.lerp(ln,y)}else if(ln.z>l){const M=ln.z-cn.z,y=(ln.z-l)/M;ln.lerp(cn,y)}cn.applyMatrix4(n),ln.applyMatrix4(n),cn.multiplyScalar(1/cn.w),ln.multiplyScalar(1/ln.w),cn.x*=r.x/2,cn.y*=r.y/2,ln.x*=r.x/2,ln.y*=r.y/2,un.start.copy(cn),un.start.z=0,un.end.copy(ln),un.end.z=0;const x=un.closestPointToPointParameter(el,!0);un.at(x,Jf);const g=gp.lerp(cn.z,ln.z,x),f=g>=-1&&g<=1,v=el.distanceTo(Jf)<_s*.5;if(f&&v){un.start.fromBufferAttribute(c,d),un.end.fromBufferAttribute(u,d),un.start.applyMatrix4(o),un.end.applyMatrix4(o);const M=new O,y=new O;ai.distanceSqToSegment(un.start,un.end,y,M),e.push({point:y,pointOnLine:M,distance:ai.origin.distanceTo(y),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class KR extends Me{constructor(t=new Mg,e=new pu({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Yf.fromBufferAttribute(e,o),Zf.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Yf.distanceTo(Zf);const r=new ul(s,2,1);return t.setAttribute("instanceDistanceStart",new Yn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Yn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ai=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;_s=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),ia.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=_s*.5;else{const l=Math.max(s.near,ia.distanceToPoint(ai.origin));u=Qf(s,l,c.resolution)}if(ia.radius+=u,ai.intersectsSphere(ia)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),na.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=_s*.5;else{const l=Math.max(s.near,na.distanceToPoint(ai.origin));h=Qf(s,l,c.resolution)}na.expandByScalar(h),ai.intersectsBox(na)!==!1&&(n?XR(this,e):qR(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(tl),this.material.uniforms.resolution.value.set(tl.z,tl.w))}}class Sg extends Mg{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class $R extends KR{constructor(t=new Sg,e=new pu({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function YR(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const tp=.55,Ag=.55,ep=.006,ZR=i=>1/(1+Math.max(i,0)),JR=i=>Ag/(1+2*Math.max(i,0)),QR=.6,tC=(i,t)=>t>0?i/t*QR:0,eC=14,nC=.25,Eg=.25,sa=Math.round(Eg*60)+2,iC=2,sC=.5,rC=16774102,oC=20,il=.06,sl=.06,np=.09;function aC(i){if(!(i>=0)||i>=sl+np)return[1,1,1];const t=i<sl?1:1-(i-sl)/np;return[1+il*t,1-il*t,1+il*t]}const cC=.02,lC=2;let Ur=null;function uC(){if(Ur)return Ur;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Ur=new In(i),Ur.userData.shared=!0,Ur}function ip(i){let{bodyScale:t,radius:e}=i;const n=new tn({map:uC(),transparent:!0,depthWrite:!1,opacity:Ag,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Me(new kn(tp,tp).rotateX(-Math.PI/2),n);s.position.y=ep,s.renderOrder=1,i.root.add(s);const r=new pu({linewidth:iC,color:rC,vertexColors:!0,transparent:!0,opacity:sC,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new Sg;o.setPositions(new Float32Array(sa*3)),o.setColors(new Float32Array(sa*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new $R(o,r);u.frustumCulled=!1,u.renderOrder=oC,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new O;let m=!1,b=!1,x=-1;const g=new O;function f(){s.scale.setScalar(t)}f();function v(M){const y=m?d.distanceTo(M.pos):0,T=m&&y>lC,R=M.height<=cC;if(s.visible=!M.held,s.visible&&(s.position.set(M.pos.x,ep,M.pos.z),s.scale.setScalar(t*ZR(M.height)),n.opacity=JR(M.height)),m&&!T&&M.dt>0&&y>1e-9){const{axis:P,angle:N}=YR([d.x,d.z],[M.pos.x,M.pos.z],e);if(P[0]!==0||P[2]!==0){g.set(P[0],P[1],P[2]);const B=R?N:tC(y/M.dt,e)*M.dt;B>0&&i.mesh.rotateOnWorldAxis(g,B)}}R&&b&&!T&&(x=M.t),T&&(x=-1),b=!R;const[I,D,A]=x<0?[1,1,1]:aC(M.t-x);if(i.mesh.scale.set(t*I,t*D,t*A),T&&(l.length=0),h&&M.dt>0){for(l.push({t:M.t,p:M.pos.clone()});l.length&&M.t-l[0].t>Eg;)l.shift();for(;l.length>sa;)l.shift()}if(h&&(M.speed>eC||(M.apex??0)>=nC)&&l.length>=2){const N=l.length-1,B=a.array,j=c.array;for(let H=0;H<sa-1;H++)for(const[k,z]of[[0,H],[3,H+1]]){const U=l[Math.min(z,N)].p,J=6*H+k;B[J]=U.x,B[J+1]=U.y,B[J+2]=U.z;const Y=Math.min(z,N)/N;j[J]=j[J+1]=j[J+2]=Y}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=N,u.visible=!0}else u.visible=!1;d.copy(M.pos),m=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(M,y,T){t=M,e=y,f(),r.resolution.set(T.width,T.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:x})}}const hC=.055,dC=.17,us=.015,wa=2.1,fC=.16,pC=.1,mC=1.6,gC=.45,_C=.11,bC={technical:iS,tactical:sS,physical:$p,social:rS},xC={inner:.62,peak:.76,shoulder:.84,outer:1},vC={inner:.7,peak:.76,shoulder:.79,outer:.84},yC=16777215;function MC(){const i=new tn({map:Tg(vC),color:yC,blending:2,transparent:!0,depthWrite:!1}),t=new Me(new kn(wa,wa).rotateX(-Math.PI/2),i);return t.position.y=.02,t.renderOrder=3,t.name="changeRing",t}function Tg(i=xC){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(i.inner,"rgba(255,255,255,0)"),n.addColorStop(i.peak,"rgba(255,255,255,0.9)"),n.addColorStop(i.shoulder,"rgba(255,255,255,0.5)"),n.addColorStop(i.outer,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),new In(t)}function SC(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function AC(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?bC[i.color]??i.color:vs,r=Math.min(t.width,t.height)*.14;if(SC(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=fC,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=FR(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new In(t);return o.colorSpace=We,o}function EC(i){var M,y;const{scene:t,drill:e,schedule:n}=i,s=(...T)=>{for(const R of T)R.traverse(I=>{const D=I.material;for(const A of Array.isArray(D)?D:D?[D]:[])A.toneMapped=!1});t.add(...T)},r=i.pathM??pC,o=T=>T*r*(i.pathWidthK??1),a=LR(i.search??location.search,(M=e.overlays)==null?void 0:M.runPaths),{width:c,length:u}=e.pitch,h=T=>T-c/2,l=T=>T-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(T=>[T.id,T.start])),ballStart:xa(e),headingAt:i.headingAt},m=_R(e.players,xa(e),n.attachTo(0)),b=new Map(e.players.map(T=>[T.id,T.team])),x=T=>b.get(T)===m?uR:hR,g=[];{const T=Qw,R=new Float32Array(T*3),I=new qe;I.setAttribute("position",new Ce(new Float32Array(T*2*3),3)),I.setAttribute("color",new Ce(new Float32Array(T*2*3),3));const D=new Float32Array(T*2*2);for(let k=0;k<T;k++)D.set([0,k/(T-1),1,k/(T-1)],k*4);I.setAttribute("uv",new Ce(D,2));const A=new Uint16Array((T-1)*6);for(let k=0;k<T-1;k++){const z=k*2;A.set([z,z+1,z+2,z+1,z+3,z+2],k*6)}I.setIndex(new Ce(A,1));const E=(()=>{const k=document.createElement("canvas");k.width=64,k.height=1;const z=k.getContext("2d"),[U,J,Y]=nS,ct=z.createLinearGradient(0,0,64,0);ct.addColorStop(0,`rgba(${U},${J},${Y},0)`),ct.addColorStop(.28,`rgba(${U},${J},${Y},0.28)`),ct.addColorStop(.44,"rgba(216,247,120,0.8)"),ct.addColorStop(.5,"rgba(255,255,255,1)"),ct.addColorStop(.56,"rgba(216,247,120,0.8)"),ct.addColorStop(.72,`rgba(${U},${J},${Y},0.28)`),ct.addColorStop(1,`rgba(${U},${J},${Y},0)`),z.fillStyle=ct,z.fillRect(0,0,64,1);const St=new In(k);return St.colorSpace=We,St})(),P=new Me(I,new tn({map:E,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));P.frustumCulled=!1,P.renderOrder=6,P.name="ballTrail",s(P);const N=new O,B=new O,j=new O,H=Jw/(T-1);g.push((k,z)=>{if(P.visible=a.trail,!a.trail)return;for(let Y=0;Y<T;Y++){const ct=Of(d,k-Y*H);R[Y*3]=h(ct.pos[0]),R[Y*3+1]=hC+ct.height,R[Y*3+2]=l(ct.pos[1])}const U=I.getAttribute("position"),J=I.getAttribute("color");j.set(1,0,0);for(let Y=0;Y<T;Y++){const ct=Math.min(Y,T-2);N.set(R[ct*3]-R[ct*3+3],R[ct*3+1]-R[ct*3+4],R[ct*3+2]-R[ct*3+5]),B.set(R[Y*3],R[Y*3+1],R[Y*3+2]).sub(z.position),N.lengthSq()>1e-10&&(N.cross(B),N.lengthSq()>1e-10&&j.copy(N.normalize()));const St=Math.pow(1-Y/(T-1),1.2),Ft=dC*(.35+.65*St),it=R[Y*3],mt=R[Y*3+1],ut=R[Y*3+2];U.setXYZ(Y*2,it+j.x*Ft,mt+j.y*Ft,ut+j.z*Ft),U.setXYZ(Y*2+1,it-j.x*Ft,mt-j.y*Ft,ut-j.z*Ft);const Q=St;J.setXYZ(Y*2,Q,Q,Q),J.setXYZ(Y*2+1,Q,Q,Q)}U.needsUpdate=J.needsUpdate=!0})}{const T=[];let R=0,I=0;for(const D of e.events){if(D.type!=="move"&&D.type!=="dribble")continue;const A=(n.moves[D.player]??[]).find(N=>N.t0>=D.t&&N.t0<=D.t+Il+1e-9&&N.to[0]===D.to[0]&&N.to[1]===D.to[1]);if(!A)continue;const E=Hf(D.type,A.from,A.to,r);if(!E)continue;const P=new Yt(x(D.player));T.push({m:A,authored:D.runPath===!0,stroke:E,baseR:P.r,baseG:P.g,baseB:P.b,baseA:1,vert0:R,vertCount:E.dashes.length*4+3}),R+=E.dashes.length*4+3,I+=E.dashes.length*6+3}if(T.length){const D=new Float32Array(R*3),A=new Float32Array(R*4),E=new Uint16Array(I);let P=0,N=0;const B=o(Gf)/2;for(const z of T){const U=Math.hypot(z.m.to[0]-z.m.from[0],z.m.to[1]-z.m.from[1])||1,J=-(z.m.to[1]-z.m.from[1])/U,Y=(z.m.to[0]-z.m.from[0])/U;for(const mt of z.stroke.dashes){const ut=P/3;D.set([h(mt.ax+J*B),us,l(mt.ay+Y*B),h(mt.ax-J*B),us,l(mt.ay-Y*B),h(mt.bx+J*B),us,l(mt.by+Y*B),h(mt.bx-J*B),us,l(mt.by-Y*B)],P),P+=12,E.set([ut,ut+1,ut+2,ut+1,ut+3,ut+2],N),N+=6}const[ct,St,Ft]=Bf(z.m.from,z.m.to,z.stroke.headScale),it=P/3;D.set([h(ct[0]),us,l(ct[1]),h(St[0]),us,l(St[1]),h(Ft[0]),us,l(Ft[1])],P),P+=9,E.set([it,it+1,it+2],N),N+=3}const j=new qe;j.setAttribute("position",new Ce(D,3)),j.setAttribute("color",new Ce(A,4)),j.setIndex(new Ce(E,1));const H=new Me(j,new tn({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));H.renderOrder=2,s(H);const k=j.getAttribute("color");g.push(z=>{if(H.visible=a.runPaths!=="off",!!H.visible){for(const U of T){const J=a.runPaths==="authored"&&!U.authored?0:wR(z,U.m.t0),Y=iR(U.m,z);let ct=U.vert0;for(const Ft of U.stroke.dashes){const it=U.baseA*J*Xf(Ft.k,Y);for(let mt=0;mt<4;mt++)k.setXYZW(ct++,U.baseR,U.baseG,U.baseB,it)}const St=U.baseA*J*Xf(1,Y);for(let Ft=0;Ft<3;Ft++)k.setXYZW(ct++,U.baseR,U.baseG,U.baseB,St)}k.needsUpdate=!0}})}}{const T=SR,R=bR/2,I=[-1,-.4,1-2*vg,1],D=I.map(yR),A=I.length,E=n.flights.map((B,j)=>Ll(n.flights,j)),P=()=>{const B=new qe,j=new Float32Array((T+1)*A*3);for(let U=0;U<(T+1)*A;U++)j[U*3+1]=Vf;const H=new Float32Array((T+1)*A*4),k=new Uint16Array(T*(A-1)*6);for(let U=0,J=0;U<T;U++)for(let Y=0;Y<A-1;Y++,J++){const ct=U*A+Y;k.set([ct,ct+1,ct+A,ct+1,ct+A+1,ct+A],J*6)}B.setAttribute("position",new Ce(j,3)),B.setAttribute("color",new Ce(H,4)),B.setIndex(new Ce(k,1));const z=new Me(B,new tn({color:vR,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return z.frustumCulled=!1,z.renderOrder=2,z.name="passRibbon",s(z),{mesh:z,posAttr:B.getAttribute("position"),colAttr:B.getAttribute("color")}},N=[P(),P()];g.push(B=>{const j=a.runPaths==="auto"?AR(n.flights,B):[];for(let H=0;H<N.length;H++){const k=N[H],z=j[j.length-1-H]??-1;if(k.mesh.visible=z>=0,z<0)continue;const U=n.flights[z],J=Pl(B,U,E[z]),Y=ER(U,B),ct=Math.hypot(U.to[0]-U.from[0],U.to[1]-U.from[1])||1,St=-(U.to[1]-U.from[1])/ct*R,Ft=(U.to[0]-U.from[0])/ct*R,it=U.from[0]+(U.to[0]-U.from[0])*Y,mt=U.from[1]+(U.to[1]-U.from[1])*Y,ut=TR(n.flights,z,B);for(let Q=0;Q<=T;Q++){const gt=Q/T,At=Q===T?ut[0]:U.from[0]+(it-U.from[0])*gt,wt=Q===T?ut[1]:U.from[1]+(mt-U.from[1])*gt,jt=J*jf(gt);for(let Wt=0;Wt<A;Wt++){const ce=I[Wt],V=Q*A+Wt;k.posAttr.setX(V,h(At+St*ce)),k.posAttr.setZ(V,l(wt+Ft*ce)),k.colAttr.setXYZW(V,1,1,1,jt*D[Wt])}}k.posAttr.needsUpdate=k.colAttr.needsUpdate=!0}})}{const T=(e.equipment??[]).filter(P=>P.type==="goal").map(P=>({x:P.at[0],y:P.at[1],halfW:Ss(P,Na)*i.goalScale})),R=o(Qo)/2,I=[],D=[],A=[],E=[];for(let P=0;P<n.flights.length;P++){const N=n.flights[P];if(!Ba(N))continue;const B=mR(N,n.arrivals);if(!B&&!N.pop)continue;const j=Math.hypot(N.to[0]-N.from[0],N.to[1]-N.from[1])||1,H=-(N.to[1]-N.from[1])/j,k=(N.to[0]-N.from[0])/j,z=k,U=-H;let J=0;if(B){const Y=fR*2*R/2;D.push({ax:N.to[0]-z*R,ay:N.to[1]-U*R,bx:N.to[0]+z*R,by:N.to[1]+U*R,h:Y,px:H,py:k});const ct=gR(N.from,N.to,T,o(Qo))??N.to;D.push({ax:N.to[0],ay:N.to[1],bx:ct[0],by:ct[1],h:pR*R,px:H,py:k}),J=8}else{D.push({ax:N.from[0],ay:N.from[1],bx:N.to[0],by:N.to[1],h:Gf/Qo*R,px:H,py:k});const Y=Hf("pass",N.from,N.to,r);A.push(Bf(N.from,N.to,Y?Y.headScale:0)),J=7}E.push({i:P,verts:J})}if(E.length){const P=E.reduce((ut,Q)=>ut+Q.verts,0),N=E.reduce((ut,Q)=>ut+(Q.verts===8?12:9),0),B=new Float32Array(P*3),j=new Float32Array(P*4),H=new Uint16Array(N);let k=0,z=0,U=0,J=0;const Y=Vf,ct=()=>{const ut=D[U++],Q=k/3;B.set([h(ut.ax+ut.px*ut.h),Y,l(ut.ay+ut.py*ut.h),h(ut.ax-ut.px*ut.h),Y,l(ut.ay-ut.py*ut.h),h(ut.bx+ut.px*ut.h),Y,l(ut.by+ut.py*ut.h),h(ut.bx-ut.px*ut.h),Y,l(ut.by-ut.py*ut.h)],k),k+=12,H.set([Q,Q+1,Q+2,Q+1,Q+3,Q+2],z),z+=6};for(const ut of E){const Q=k/3;if(ut.verts===8)ct(),ct();else{ct();const[gt,At,wt]=A[J++],jt=k/3;B.set([h(gt[0]),Y,l(gt[1]),h(At[0]),Y,l(At[1]),h(wt[0]),Y,l(wt[1])],k),k+=9,H.set([jt,jt+1,jt+2],z),z+=3}I.push({flight:ut.i,vert0:Q,vertCount:ut.verts})}const St=new qe;St.setAttribute("position",new Ce(B,3)),St.setAttribute("color",new Ce(j,4)),St.setIndex(new Ce(H,1));const Ft=new Me(St,new tn({color:aS,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Ft.renderOrder=2.5,Ft.name="passMarks",s(Ft);const it=St.getAttribute("color"),mt=n.flights.map((ut,Q)=>Ll(n.flights,Q));g.push(ut=>{if(Ft.visible=a.runPaths==="auto",!!Ft.visible){for(const Q of I){const gt=n.flights[Q.flight],At=ut<gt.t0+gt.duration?0:Pl(ut,gt,mt[Q.flight])*jf(1);let wt=Q.vert0;for(let jt=0;jt<Q.vertCount;jt++,wt++)it.setXYZW(wt,1,1,1,At)}it.needsUpdate=!0}})}}{const T=CR(n.departures,n.anims,i.clips),R={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},I=new tn({map:Tg(),color:vs,blending:2,transparent:!0,depthWrite:!1}),D=new Me(new kn(wa,wa).rotateX(-Math.PI/2),I);D.position.y=.02,D.renderOrder=3,D.name="possessionRing",s(D);const A=i.ballRadius??_C,E=mC*A,P=Qo*r,N=new tn({color:vs,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),B=new Me(new Pa(Math.max(E-P/2,1e-4),E+P/2,40),N);B.frustumCulled=!1,B.renderOrder=8,B.name="possessionHalo",s(B),g.push((j,H)=>{const k=PR(R,T,j);D.visible=a.highlight&&k.kind==="ring",B.visible=a.highlight&&(k.kind==="halo"||k.kind==="free");const z=Math.sin(j*2*Math.PI/1.6);if(k.kind==="ring"){const U=bg(d,k.player,j);D.position.x=h(U[0]),D.position.z=l(U[1]);const J=1+.05*z;D.scale.x=D.scale.z=J,I.opacity=.72+.18*z}else if(k.kind==="halo"||k.kind==="free"){const U=Of(d,j);B.position.set(h(U.pos[0]),A+U.height,l(U.pos[1])),B.quaternion.copy(H.quaternion),N.opacity=k.kind==="free"?gC:.72+.18*z}})}const f=[];for(const T of((y=e.overlays)==null?void 0:y.zones)??[]){if(Yp.test(T.label??""))continue;const R=new Me(new kn(T.w,T.h).rotateX(-Math.PI/2).rotateY(Math.PI),new tn({map:AC(T),transparent:!0,depthWrite:!1}));R.position.set(h(T.at[0]),.004,l(T.at[1])),R.renderOrder=.5,s(R),f.push(R)}const v=()=>{for(const T of f)T.visible=a.zones};return v(),{update(T,R){for(const I of g)I(T,R)},set(T){Object.assign(a,T),v()}}}const TC=.16,wC=.25,wg=.8,Rg=.6,Cg=8,RC=Rg*Cg;function CC(i,t){return!(i>=0)||i>=wg||t>RC*i?0:TC*Math.exp(-i/wC)*Math.sin(2*Math.PI*(t/Rg-Cg*i))}function IC(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??PC})}return t}const PC=.6,sp=.15,LC=.12,DC=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function rp(i){return DC(Math.min(i,1-i)/LC)}function FC(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let z=0;z<4;z++)o.push([n.getX(z),n.getY(z),n.getZ(z)]);const a=[0,1,2].map(z=>Math.min(...o.map(U=>U[z]))),c=[0,1,2].map(z=>Math.max(...o.map(U=>U[z]))),u=[0,1,2].map(z=>c[z]-a[z]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(z=>z!==h);if(!(u[l]>0&&u[d]>0))return null;const m=(z,U)=>{let J=0,Y=1/0;for(let ct=0;ct<4;ct++){const St=Math.abs((o[ct][l]-a[l])/u[l]-z)+Math.abs((o[ct][d]-a[d])/u[d]-U);St<Y&&(Y=St,J=ct)}return J},b=m(0,0),x=m(1,0),g=m(0,1),f=m(1,1),v=(z,U)=>s?U?s.getY(z):s.getX(z):0,M=new O().setFromMatrixScale(t).x,y=Math.max(2,Math.min(96,Math.ceil(u[l]*M/sp))),T=Math.max(2,Math.min(96,Math.ceil(u[d]*M/sp))),R=(y+1)*(T+1),I=new Float32Array(R*3),D=new Float32Array(R*2),A=new Float32Array(R*3),E=new Float32Array(R),P=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let z=0;z<=T;z++)for(let U=0;U<=y;U++){const J=z*(y+1)+U,Y=U/y,ct=z/T;I[J*3+h]=o[0][h],I[J*3+l]=a[l]+u[l]*Y,I[J*3+d]=a[d]+u[d]*ct;for(const St of[0,1])D[J*2+St]=v(b,St)*(1-Y)*(1-ct)+v(x,St)*Y*(1-ct)+v(g,St)*(1-Y)*ct+v(f,St)*Y*ct;A.set(P,J*3),E[J]=rp(Y)*rp(ct)}const N=[];for(let z=0;z<T;z++)for(let U=0;U<y;U++){const J=z*(y+1)+U;N.push(J,J+1,J+y+1,J+1,J+y+2,J+y+1)}const B=new qe;B.setAttribute("position",new Ce(I,3)),B.setAttribute("uv",new Ce(D,2)),B.setAttribute("normal",new Ce(A,3)),B.setIndex(N),B.userData.drillOwned=!0,i.geometry=B;const j=new Float32Array(I),H=new Float32Array(R*3),k=new O;for(let z=0;z<R;z++)k.fromArray(j,z*3).applyMatrix4(t).toArray(H,z*3);return{mesh:i,axis:h,rest:j,world:H,weight:E,scale:M}}function op(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new te().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=Zn.zMin;i.placed.copy(i.goal.matrixWorld)}function NC(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new te().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!UC(l))return;const d=FC(l,new te().multiplyMatrices(a,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new te,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new O}))};op(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=OC(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)kC(c);r.dirty=!1;continue}op(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-o.p.x,m=c.world[l*3+1]-o.p.y,b=c.world[l*3+2]-o.p.z,x=CC(a,Math.hypot(d,m,b))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+x/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const UC=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function OC(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<wg&&(e=n);return e}function kC(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const mu=new O(0,1,0),Ig=.04,Pg=8,Qr=.1,fr=46,pr=25,ap=70;function Ra(i,t){return new O(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function Ga(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let bs=new Float64Array(64),ra=new Float64Array(64),oa=new Float64Array(64);const Lg=new O,Dg=new O,$i=new O;function cp(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+bs[r]/2),s=Math.max(s,-i[r]/(2*e)+bs[r]/2);return n+s}function lp(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-bs[o])*e),r=Math.min(r,i[o]+(n-bs[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Ca(i,t,e,n,s){const r=i.length;bs.length<r&&(bs=new Float64Array(r),ra=new Float64Array(r),oa=new Float64Array(r));const o=Lg.crossVectors(mu,e).normalize(),a=Dg.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let x=0;x<r;x++)$i.subVectors(i[x],t),bs[x]=$i.dot(e),ra[x]=$i.dot(o),oa[x]=$i.dot(a);const h=Math.max(Math.max(cp(ra,r,c),cp(oa,r,u))*(1+Ig),Pg),[l,d]=lp(ra,r,c,h),[m,b]=lp(oa,r,u,h);return{dist:h,offset:new O().addScaledVector(o,l).addScaledVector(a,m),slack:new qt(d,b)}}function BC(i,t,e,n,s){const r=Lg.crossVectors(mu,e).normalize(),o=Dg.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){$i.subVectors(h,t);const l=$i.dot(e);u=Math.max(u,Math.abs($i.dot(r))/a+l,Math.abs($i.dot(o))/c+l)}return Math.max(u*(1+Ig),Pg)}function Fg(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Qr)?!0:r>s*(1+Qr)?!1:n}function Ng(i,t,e=fr,n=pr){const s=new mn().setFromPoints(i),r=s.getCenter(new O),o=s.getSize(new O),{vHalf:a,hHalf:c}=Ga(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Ca(i,r,Ra(u,h),a,c).dist,d=Ca(i,r,Ra(u,h+Math.PI/2),a,c).dist,m=Fg(o.x,o.z,t.aspect<1,d<l*(1-Qr));return{dist:m?d:l,alt:m}}function rl(i,t,e,n=fr,s=pr){const{dist:r}=Ng(i,t,n,s);return 2*r*Math.tan(Ga(t).vHalf)/e}function up(i=fr){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const Fl=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),hp=.6,GC=.8,zC=30,HC=pr,VC=12,dp=1.03,WC=1.5;function jC(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return dp+(1-dp)*(e*e*(3-2*e))}const XC=2,Nl=.5,qC=i=>{const t=Math.floor(Math.max(i,0)/Nl)*Nl;return[t,t+XC]},KC=.25,$C=.06;function YC(i,t){const e=new O;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(KC)}class ZC{constructor(t,e=fr,n=pr){an(this,"target",new O);an(this,"wanted",new O);an(this,"useAlt",!1);an(this,"pushAt",-1);an(this,"pushFor",0);an(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:jC(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new mn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new O),o=s.getSize(new O),{vHalf:a,hHalf:c}=Ga(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*Fl(e,hp);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,m=Ra(h,l),b=Ra(h,d),x=Ca(t,r,m,a,c),g=Ca(t,r,b,a,c);!this.useAlt&&g.dist<x.dist*(1-Qr)?this.useAlt=!0:this.useAlt&&x.dist<g.dist*(1-Qr)?this.useAlt=!1:this.useAlt=Fg(o.x,o.z,this.camera.aspect<1,this.useAlt);const f=this.useAlt?g:x,v=this.useAlt?b:m,M=n.lookAt?r:r.clone().add(f.offset),y=n.lookAt?BC(t,r,v,a,c):f.dist;if(n.breath&&!n.lookAt){const I=new O().crossVectors(mu,v).normalize(),D=new O().crossVectors(v,I).normalize(),A=$C*f.dist,E=(P,N)=>{const B=Math.min(N,A);return Math.min(Math.max(P,-B),B)};M.addScaledVector(I,E(n.breath.dot(I),f.slack.x)).addScaledVector(D,E(n.breath.dot(D),f.slack.y))}const T=y*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(T).add(M);const R=Fl(e,hp);this.camera.position.lerp(this.wanted,R),this.target.lerp(M,R),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const JC=1.8,QC=34,tI=844,eI=1,Ug=4;function fp(i,t,e=fr,n=pr){const{vHalf:s}=Ga(t),r=e*Math.PI/180,{dist:o}=Ng(i,t,e,n),a=QC*2*o*Math.tan(s)/(tI*JC*Math.cos(r));return Math.min(Ug,Math.max(eI,a))}function nI(i,t,e,n=fr,s=pr,r=Ug){const o=h=>Kr(i,Math.min(r,h));let a=o(fp(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(fp([...t,...ml(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...ml(i,a)]}}class iI{constructor(){an(this,"last",-1);an(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Or={clips:0,schedule:0,build:0};let pp=null;function sI(){return pp??(pp=fetch(Li("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Km(i)).catch(i=>{throw pp=null,i}))}let mp=null;function rI(i){return mp??(mp=Zl().loadAsync(Li("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw mp=null,t}))}function oI(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const aI=2,cI=(i,t,e=aI)=>i===null||t-i<e*1e3,Og="coach";function lI(i){return i.team===Og||i.number===void 0?void 0:String(i.number)}function uI(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==Og)??t[0]}const hI=i=>i==="boys"||i==="girls";async function dI(i,t,e,n=Tm){if(!hI(e))return;let s=null;try{s=await n(e)}catch{s=null}return pI(i,t,s)}const fI=(i,t,e)=>i===t&&e!==void 0;function pI(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function NI(i,t,e={}){var Ui,ts,es;const n=performance.now(),s=pS(i),r=await sI();Or.clips=performance.now()-n;const o=e.stage??pA(t),a=new vn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Tt,re])=>new O(Tt*s.pitch.width/2,0,re*s.pitch.length/2)),u=s.players.map(Tt=>new O(Tt.start[0]-s.pitch.width/2,0,Tt.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??nI(s,h,o.camera,e.elev,e.az).scale,d=Tt=>[...h,...ml(s,Tt)],m=o.size();let b=l(),x=d(b);Kd(.35*b);let g=Kr(s,b);const f=performance.now(),v=((Ui=e.schedules)==null?void 0:Ui.get(g))??tw(s,r,g);(ts=e.schedules)==null||ts.set(g,v),Or.schedule=performance.now()-f;const M=RS(s),y=(Tt=e.elev??0)=>Tt>=ap?[...x,...M]:x;let T=rl(y(),o.camera,o.size().height,e.elev,e.az),R=up(e.elev);const I=BS(s.pitch.width,s.pitch.length),{toWorld:D,goals:A,cones:E,boards:P,setWorld:N,setMasts:B}=await aA(a,s,o.renderer.capabilities.getMaxAnisotropy(),b,I),j=NC(A,IC(v.flights),D);let H=x.slice(h.length);o.fitShadow(x),o.setFog(OS(s.pitch.width,s.pitch.length)),o.setHorizon(I),o.setSky(!1);const k=uI(s.teams),z=await Da(a,s.players.length,void 0,void 0,0,await dI(s.players,k,e.squad)),U=e.kit?await Rm(e.kit.pattern,s.players.flatMap((Tt,re)=>Tt.team===k?wm(z[re]):[])):null,J=await Cm(),Y=new Map,ct=new Map,St=new Map;let Ft=null;s.players.forEach((Tt,re)=>{var C;const Vt=z[re];Y.set(Tt.id,Vt),Vt.root.rotation.order="YXZ",Vt.root.scale.setScalar(b);const _=fI(Tt.team,k,e.kit),p=s.teams[Tt.team].kit.primary;Pm(Vt,_?e.kit:p,_?U:null,{label:lI(Tt),boxes:J,base:p}),Vt.root.position.copy(D(Tt.start));const L=yS(.9);if(L.scale.setScalar(b),L.position.x=Vt.root.position.x,L.position.z=Vt.root.position.z,a.add(L),ct.set(Tt.id,L),(C=e.mark)!=null&&C.includes(Tt.id)){const S=MC();S.scale.setScalar(b),S.position.copy(L.position),S.position.y=.02,a.add(S),St.set(Tt.id,S)}});const it=(await rI()).clone();it.scale.setScalar(b),a.add(it);const mt=ip({root:a,mesh:it,bodyScale:b,radius:.11*b,resolution:o.size()}),ut=!!s.ball,Q=xa(s);ut||(it.visible=!1,mt.hide());const gt=Array.from({length:(((es=s.balls)==null?void 0:es.length)??0)+v.ballSwaps.length},()=>it.clone()),At=gt.map(Tt=>(Tt.scale.setScalar(b),a.add(Tt),ip({root:a,mesh:Tt,bodyScale:b,radius:.11*b,resolution:o.size(),streak:!1}))),wt=new ZC(o.camera,e.elev,e.az);wt.armPushIn(WC,performance.now()/1e3);let jt="fit",Wt=-1,ce=[];const V=new O,Pe=new O,Qt=new O;let Jt=!1,Ht=[],_e=-1/0;const It=new bw(s.duration,e.loop??!0),F=new iI,w=new Map(s.players.map(Tt=>[Tt.id,Tt.role])),X=dw(s.players,v,s.duration,Q),q=_w(r,v.anims,w,v.bounces,e.inertial,X.ready),{applyAnim:pt,cueAt:ot}=q,Rt=xw(v.turns,s.players.map(Tt=>[Tt.id,Tt.role==="keeper"?Fe(Tt.start,Q):0])),Ct=Rt.heading,Ot=Rt.rateOf,ie=new Map(s.players.map(Tt=>[Tt.id,Tt.start])),Et=Array.from({length:Qc},()=>new Map),Mt=new Map,Xt=$w(),$t=new Map;for(const Tt of v.departures)($t.get(Tt.player)??$t.set(Tt.player,[]).get(Tt.player)).push(Tt.contact);for(const Tt of v.arrivals)($t.get(Tt.player)??$t.set(Tt.player,[]).get(Tt.player)).push(Tt.at);const zt=s.players.map(Tt=>Tt.id);function fe(){const Tt=new Set(a.children);return{built:EC({scene:a,drill:s,schedule:v,clips:r,headingAt:Vt=>Ct.get(Vt)??0,search:e.search,pathM:T,pathWidthK:R,ballRadius:.11*b,goalScale:g}),owned:a.children.filter(Vt=>!Tt.has(Vt))}}let Zt=fe();const Se={},K={update:(Tt,re)=>Zt.built.update(Tt,re),set:Tt=>{Object.assign(Se,Tt),Zt.built.set(Tt)}};function Nt(){for(const Tt of Zt.owned)a.remove(Tt),lm(Tt);Zt=fe(),Zt.built.set(Se)}const ht=Lw(),bt=[],Pt=Bw(),Ut=()=>{Pt.reset(),ht.reset(),q.reset()};It.onSeek(Ut),It.onLoop(Ut);const ee=jR(It);function Ue(){const Tt=l();if(Tt!==b){b=Tt,x=d(b),H=x.slice(h.length),g=Kr(s,b),Kd(.35*b);for(const re of Y.values())re.root.scale.setScalar(b);for(const re of ct.values())re.scale.setScalar(b);it.scale.setScalar(b);for(const re of gt)re.scale.setScalar(b);for(const re of E)re.scale.setScalar(b);for(const re of P)sm(re,b);for(const re of A)re.scale.setScalar(g);o.fitShadow(x),Ut()}mt.resize(b,.11*b,o.size());for(const re of At)re.resize(b,.11*b,o.size());T=rl(y(wt.elev),o.camera,o.size().height,wt.elev,wt.az),Nt(),o.rule.wake()}let ze=0;const Ee=o.onBox(()=>{ze||(ze=requestAnimationFrame(()=>{ze=0,Ue()}))}),on=o.size();(on.width!==m.width||on.height!==m.height)&&Ue();const dn=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Y,heading:Ct,camera:o.camera,ball:it,spare:gt,schedule:v,goals:A,bodyScale:b,lockDbg:dn,clips:r,cueAt:ot,inert:q.inert},__pathMetrics:()=>({metresPerPx:T,widthK:R,runHalfM:1.6*T*R/2,passHalfM:2.2*T*R/2})});function Zi(Tt,re=30,Vt=.12,_=4,p=1){const L=[];for(const[tt,lt]of Y)lt.root.traverse(at=>{at.isBone&&/foot/i.test(at.name)&&L.push({id:tt,name:at.name,bone:at})});It.pause(),It.seek(0);for(let tt=0;tt<90;tt++)o.step(1/60);It.play();const C=1/re,S=Math.min(Tt??s.duration,s.duration),G=Math.max(0,Math.round(S*re)-1),W=L.map(()=>[]),Z=new O;for(let tt=0;tt<=G;tt++){for(let lt=0;lt<L.length;lt++){const at=L[lt].bone.matrixWorld.elements;Z.set(at[12],at[13],at[14]);const dt=Y.get(L[lt].id).root.worldToLocal(Z.clone());W[lt].push([tt*C,at[12],at[13],at[14],dt.x,dt.z])}o.step(C)}It.pause();const st=(tt,lt)=>{var at;return((at=ot(tt,lt))==null?void 0:at.clip)??"idle"},nt=[];return L.forEach((tt,lt)=>{const at=(rt,$)=>{if($-rt<_)return;const et=W[lt].slice(rt,$);let ft=0,vt=0;for(let yt=1;yt<et.length;yt++)ft=Math.max(ft,Math.hypot(et[yt][1]-et[0][1],et[yt][3]-et[0][3])),vt+=Math.hypot(et[yt][4]-et[yt-1][4],et[yt][5]-et[yt-1][5])/C;nt.push({player:tt.id,foot:tt.name,t0:+et[0][0].toFixed(2),t1:+et[et.length-1][0].toFixed(2),drift:+ft.toFixed(3),localSpeed:+(vt/(et.length-1)).toFixed(2),clip0:st(tt.id,et[0][0]),clip1:st(tt.id,et[et.length-1][0])})},dt=W[lt].map((rt,$)=>$===0?1/0:Math.hypot(rt[1]-W[lt][$-1][1],rt[3]-W[lt][$-1][3])/C);let _t=-1;W[lt].forEach((rt,$)=>{const et=rt[2]<Vt,ft=$>0&&st(tt.id,rt[0])!==st(tt.id,W[lt][$-1][0]),vt=dt[$]>p&&$>0&&dt[$-1]>p;_t>=0&&(!et||ft||vt)&&(at(_t,$),_t=-1),_t<0&&et&&dt[$]<p&&(_t=$)}),_t>=0&&at(_t,W[lt].length)}),nt.sort((tt,lt)=>lt.drift-tt.drift),{feet:L.map(tt=>({id:tt.id,name:tt.name})),hPlant:Vt,fps:re,phases:nt}}e.embed||Object.assign(window,{__footAudit:Zi}),e.embed&&o.rule.enable();const Di=new Map,En=new O;let zn=0;const Ji=e.sfx?HR(v.flights):[];let Fi=0;o.scene.add(a);const ti=(Tt,re)=>{var nt,tt,lt,at,dt,_t;It.advance(Tt);const Vt=It.t,_=It.playing?Tt:0,p=v.attachTo(Vt),L=pa({t:Vt,holderId:p,holderRoot:p?ie.get(p):null,holderHeading:p?Ct.get(p):0,ballStart:Q,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos,C=new Set;p&&C.add(p);for(const[rt,$]of $t)$.some(et=>Math.abs(Vt-et)<=Xw)&&C.add(rt);for(const rt of s.players){const $=v.moves[rt.id]??[];for(let ft=0;ft<Qc;ft++)Et[ft].set(rt.id,((nt=Ki($,Vt+jw*ft/(Qc-1)))==null?void 0:nt.pos)??rt.start);const et=Ki($,Vt);Mt.set(rt.id,et?Math.hypot(et.vel[0],et.vel[1]):0)}const S=Xt.step(zt,Et,C,Vw*b,Vt,_,Mt);for(const rt of s.players){const $=Y.get(rt.id);let et=rt.start,ft=0;const vt=Ki(v.moves[rt.id]??[],Vt);vt&&(et=vt.pos,ft=vt.speed);const yt=qm(v.dives,v.moves[rt.id],rt.id,Vt),Bt=yt!==null;yt&&(et=yt);const Kt=S.get(rt.id);Kt&&!Bt&&(Kt[0]||Kt[1])&&(et=[et[0]+Kt[0],et[1]+Kt[1]]),$.root.position.copy(D(et));const be=v.moves[rt.id]??[],oe=Bt?0:$A(be,Vt+Df);$.root.rotation.x=0,$.root.rotation.z=0,Bt||($.root.position.y-=QA(be,Vt)-DT(v.bounces,rt.id,Vt)*b),ie.set(rt.id,et);let kt=null,le=!1;for(const Lt of v.faces)Lt.player===rt.id&&Vt>=Lt.t0&&(kt=Lt.until===void 0||Vt<=Lt.until?Lt.at:null,Lt.lock&&Vt>=Lt.lock[0]&&Vt<=Lt.lock[1]&&(le=!0));const ae=kt!==null&&Ei(et,kt),we=cE(et,L,ae,rt.id===p),xt=ae?Fe(et,kt):we??Ct.get(rt.id),{h:ne,clipYaw:Le}=Rt.step(rt.id,Vt,_,ft,xt,le,!ae&&we!==null);$.root.rotation.y=tE(ne,Le),pt(rt.id,$,Vt,_,ft);const xe=Sl($);if(xe.length){const Lt=Pt.tilt(rt.id,Bt?[0,0]:qA(be,Vt+Df),Ct.get(rt.id),oe,_);Uf($.root,xe[0],Lt.pitch,0,Lt.roll)}const Be=Mm($);if(Be.length&&!Bt){$.root.updateMatrixWorld(!0);for(let Ae=0;Ae<Be.length;Ae++){const De=Be[Ae].matrixWorld.elements;bt[Ae]=[De[12],De[13],De[14]]}bt.length=Be.length;const Lt=ot(rt.id,Vt),me=Pw((Lt==null?void 0:Lt.clip)??null,Lt?(tt=r.clips[Lt.clip])==null?void 0:tt.category:void 0,Cw(be,Vt)),[ve,Qe]=ht.step(rt.id,bt,[$.root.position.x,$.root.position.z],Vt,_,me,b);$.root.position.x+=ve,$.root.position.z+=Qe,dn&&dn.set(rt.id,[me?1:0,Math.hypot(ve,Qe),ht.foot(rt.id),ft,ht.rootSpeed(rt.id)])}const He=ct.get(rt.id);He.position.x=$.root.position.x,He.position.z=$.root.position.z;const pe=St.get(rt.id);if(pe&&(It.playing&&(Ft??(Ft=re)),pe.position.x=He.position.x,pe.position.z=He.position.z,pe.visible=cI(Ft,re,e.markSeconds)),rt.id===p){const Lt=kR(v.arrivals,rt.id,Vt),me=Lt>=0?Sm($)[Lt]:void 0;if(me){$.root.updateMatrixWorld(!0);const ve=me.matrixWorld.elements;En.set(ve[12],ve[13],ve[14]),zn=yg(v.arrivals,v.departures,rt.id,Vt)}}}const G=pa({t:Vt,holderId:p,holderRoot:p?ie.get(p):null,holderHeading:p?Ct.get(p):0,ballStart:Q,flights:v.flights,departures:v.departures,arrivals:v.arrivals});it.position.copy(D(G.pos,.11*b+G.height)),zn>0&&(it.position.lerp(En,zn),zn=0),ut&&mt.update({pos:it.position,height:G.height,t:Vt,dt:_,apex:G.apex,speed:G.speed,held:p!==null&&BR(v.arrivals,v.departures,p,Vt)});for(let rt=0;rt<gt.length;rt++){const $=(lt=s.balls)==null?void 0:lt[rt],et=$?v.ballSwaps.find(yt=>yt.take===rt):v.ballSwaps[rt-(((at=s.balls)==null?void 0:at.length)??0)],ft=$?!(et&&Vt>=et.t):Vt>=et.t;if(gt[rt].visible=ft,!ft){At[rt].hide();continue}let vt;$?$.carrier&&ie.has($.carrier)?vt=Kn(ie.get($.carrier),Ct.get($.carrier)??0):vt=Bm($,Vt):vt=et.drop,gt[rt].position.copy(D(vt,.11*b)),At[rt].update({pos:gt[rt].position,height:0,t:Vt,dt:_,held:!1,speed:0})}e.sfx&&(ee(e.sfx,Ji,Fi,Vt,It.playing,G.height,G.speed),Fi=Vt),K.update(Vt,o.camera),j.update(Vt);for(const rt of s.players){const $=Y.get(rt.id),et=ym($);if(!et)continue;const ft=vT(v.faces,rt.id,Vt),vt=ft?D(ft):it.position,yt=X.scan(rt.id,Vt,!ot(rt.id,Vt)&&rt.id!==p&&rt.role!=="keeper"),Bt=eE(Math.atan2(vt.x-$.root.position.x,vt.z-$.root.position.z)-Ct.get(rt.id)+oE(Ot.get(rt.id)??0)+yt.yaw,58*Math.PI/180+yt.env*(hw-58*Math.PI/180),.85+.15*yt.env),Kt=Di.get(rt.id)??0,be=iE(Kt,Bt,_);Di.set(rt.id,be);const oe=Sl($),kt=oe.length>1?Pt.shoulder(rt.id,be,_):0;oe.length>1&&Uf($.root,oe[1],0,kt,0),Hw(et,-(be-kt))}const W=[...Y.values()].map(rt=>new O(rt.root.position.x,0,rt.root.position.z)),Z=o.rule.snap()?1/0:Tt,st=re/1e3;if(jt==="broadcast"){let rt=-1/0;for(const et of v.departures)Vt>=et.contact&&et.contact>rt&&(rt=et.contact);rt!==_e&&(_e=rt,Ht=s.players.filter(et=>D(ie.get(et.id)??et.start).distanceTo(it.position)<=VC).map(et=>et.id)),!Jt||Z===1/0?(Qt.copy(it.position),Jt=!0):Qt.lerp(it.position,Fl(Tt,GC));const $=Ht.length?Ht.map(et=>{const ft=Y.get(et);return new O((ft==null?void 0:ft.root.position.x)??0,0,(ft==null?void 0:ft.root.position.z)??0)}):W;wt.frame([...$,it.position.clone()],Z,{now:st,lookAt:Qt.clone(),elevDeg:zC,azDeg:HC})}else{const[rt,$]=qC(Vt);if(rt!==Wt){Wt=rt,ce=[];const et=[];for(let ft=rt;ft<=$+1e-9;ft+=Nl){const vt=new Map;for(const be of s.players){const oe=((dt=Ki(v.moves[be.id]??[],ft))==null?void 0:dt.pos)??be.start;vt.set(be.id,oe);const kt=D(oe);ce.push(new O(kt.x,0,kt.z)),Math.abs(kt.x)<=s.pitch.width/2&&Math.abs(kt.z)<=s.pitch.length/2&&et.push(new O(kt.x,0,kt.z))}const yt=v.attachTo(ft),Bt=pa({t:ft,holderId:yt,holderRoot:yt?vt.get(yt)??null:null,holderHeading:yt?Ct.get(yt)??0:0,ballStart:Q,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),Kt=D(Bt.pos);et.push(new O(Kt.x,0,Kt.z))}V.copy(YC(et,Pe))}W.push(...ce),W.push(...c,...H),wt.elevNow>=ap&&W.push(...M),wt.frame([...W,it.position.clone()],Z,{now:st,breath:V})}F.tick(re),oI(!!e.embed,`t ${Vt.toFixed(1)}s  fps ${F.avg.toFixed(0)}
[space] play/pause  [r] restart`),(_t=e.onFrame)==null||_t.call(e,Vt,re)};o.start(ti);const Ni=Tt=>{Tt.code==="Space"&&(It.playing?It.pause():It.play()),Tt.code==="KeyR"&&It.seek(0)};e.embed||addEventListener("keydown",Ni);function di(Tt){Tt!==jt&&(jt=Tt,N(!0),o.setSky(Tt==="broadcast"),B(Tt==="broadcast"),Jt=!1,_e=-1/0,o.rule.wake())}function Qi(Tt,re=wt.az){Tt===wt.elev&&re===wt.az||(wt.setElev(Tt),wt.setAz(re),T=rl(y(Tt),o.camera,o.size().height,Tt,re),R=up(Tt),Nt(),o.rule.wake())}return Or.build=performance.now()-n-Or.clips-Or.schedule,{timeline:It,step:Tt=>o.step(Tt),stage:o,overlays:K,setCamera:Qi,setFollow:di,setPushIn:Tt=>wt.armPushIn(Tt,performance.now()/1e3),dispose(){removeEventListener("keydown",Ni),Ee(),ze&&(cancelAnimationFrame(ze),ze=0),o.scene.remove(a),mA(a,[...z.map(re=>re.root),it,...gt,...A]),U==null||U.dispose();const Tt=()=>{o.setFog(null),o.setHorizon(null),o.setSky(!0)};e.stage?o.park(ti)&&Tt():(Tt(),o.dispose())}}}export{Na as $,bn as A,vs as B,PE as C,FI as D,GE as E,Rl as F,Wo as G,yl as H,gm as I,zE as J,Br as K,XE as L,Vo as M,Ne as N,oi as O,mm as P,ag as Q,KE as R,ad as S,qE as T,c1 as U,Oc as V,AI as W,Od as X,ri as Y,Uc as Z,gI as _,Li as a,ll as a$,$m as a0,jd as a1,tw as a2,Bd as a3,Yp as a4,Kd as a5,Ym as a6,ha as a7,kh as a8,pS as a9,Rm as aA,wm as aB,rd as aC,Cm as aD,Pm as aE,T_ as aF,H0 as aG,qe as aH,Ce as aI,Lp as aJ,mA as aK,VA as aL,Bp as aM,We as aN,vI as aO,Wl as aP,HA as aQ,In as aR,yI as aS,lm as aT,xI as aU,je as aV,tn as aW,bI as aX,Pa as aY,Zl as aZ,E_ as a_,zh as aa,SI as ab,sS as ac,O as ad,nI as ae,Ng as af,Ga as ag,Ra as ah,pr as ai,fr as aj,Ca as ak,pa as al,qm as am,Ki as an,sI as ao,vn as ap,Yt as aq,Gp as ar,MI as as,Me as at,ba as au,Ms as av,Am as aw,LA as ax,pm as ay,Da as az,RI as b,or as b0,DI as b1,pA as c,II as d,vm as e,PI as f,wI as g,Or as h,TI as i,mn as j,xn as k,lM as l,_I as m,xl as n,EI as o,CI as p,se as q,NI as r,LE as s,LI as t,Kn as u,Fe as v,jE as w,WE as x,QE as y,Gc as z};
