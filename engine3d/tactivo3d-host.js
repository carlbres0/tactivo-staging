var r0=Object.defineProperty;var o0=(i,t,e)=>t in i?r0(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ie=(i,t,e)=>o0(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Iu="attached",a0="detached";const Xe="srgb",wn="srgb-linear",ma="linear",je="srgb";const Pu="300 es";class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const zr=Math.PI/180,sr=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Vl(i,t){return(i%t+t)%t}function c0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function l0(i,t,e){return i!==t?(e-i)/(t-i):0}function Hr(i,t,e){return(1-e)*i+e*t}function u0(i,t,e,n){return Hr(i,t,1-Math.exp(-e*n))}function h0(i,t=1){return t-Math.abs(Vl(i,t*2)-t)}function f0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function d0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function p0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function m0(i,t){return i+Math.random()*(t-i)}function g0(i){return i*(.5-Math.random())}function _0(i){i!==void 0&&(Lu=i);let t=Lu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b0(i){return i*zr}function x0(i){return i*sr}function v0(i){return(i&i-1)===0&&i!==0}function y0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function M0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function S0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*f,a*u);break;case"YZY":i.set(c*f,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*f,a*h,a*u);break;case"XZX":i.set(a*h,c*g,c*p,a*u);break;case"YXY":i.set(c*p,a*h,c*g,a*u);break;case"ZYZ":i.set(c*g,c*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Kp={DEG2RAD:zr,RAD2DEG:sr,generateUUID:ri,clamp:Te,euclideanModulo:Vl,mapLinear:c0,inverseLerp:l0,lerp:Hr,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:b0,radToDeg:x0,isPowerOfTwo:v0,ceilPowerOfTwo:y0,floorPowerOfTwo:M0,setQuaternionFromProperEuler:S0,normalize:Ve,denormalize:ei};class ee{constructor(t=0,e=0){ee.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ye{constructor(t,e,n,s,r,o,a,c,u){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],v=s[1],M=s[4],y=s[7],E=s[2],A=s[5],w=s[8];return r[0]=o*_+a*v+c*E,r[3]=o*m+a*M+c*A,r[6]=o*d+a*y+c*w,r[1]=u*_+h*v+l*E,r[4]=u*m+h*M+l*A,r[7]=u*d+h*y+l*w,r[2]=f*_+p*v+g*E,r[5]=f*m+p*M+g*A,r[8]=f*d+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,f=a*c-h*r,p=u*r-o*c,g=e*l+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=l*_,t[1]=(s*u-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-u*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new ye;function $p(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function A0(){const i=Xr("canvas");return i.style.display="block",i}const Du={};function Ys(i){i in Du||(Du[i]=!0,console.warn(i))}function E0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function T0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function w0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Fu=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){const i={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===je&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===je&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?ma:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wn]:{primaries:t,whitePoint:n,transfer:ma,toXYZ:Fu,fromXYZ:Nu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:je,toXYZ:Fu,fromXYZ:Nu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const Pe=R0();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ts;class C0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=Xr("canvas")),Ts.width=t.width,Ts.height=t.height;const n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fi(e[n]/255)*255):e[n]=Fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let I0=0;class Yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=ri(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ka(s[o].image)):r.push(Ka(s[o]))}else r=Ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?C0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let P0=0;class on extends Ms{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=on.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ri(),this.name="",this.source=new Yp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=300;on.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(l-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(l+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,y=(p+1)/2,E=(d+1)/2,A=(h+f)/4,w=(l+_)/4,C=(g+m)/4;return M>y&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=A/n,r=w/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(l-_)*(l-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(l-_)/v,this.z=(f-h)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L0 extends Ms{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends L0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zp extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class D0 extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(l!==_||c!==f||u!==p||h!==g){let m=1-a;const d=c*f+u*p+h*g+l*_,v=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const E=Math.sqrt(M),A=Math.atan2(E,d*v);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const y=a*v;if(c=c*m+f*y,u=u*m+p*y,h=h*m+g*y,l=l*m+_*y,m===1-a){const E=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=E,u*=E,h*=E,l*=E}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*l+c*p-u*f,t[e+1]=c*g+h*f+u*l-a*p,t[e+2]=u*g+h*p+a*f-c*l,t[e+3]=h*g-a*l-c*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*l+u*p*g,this._y=u*p*l-f*h*g,this._z=u*h*g+f*p*l,this._w=u*h*l-f*p*g;break;case"YXZ":this._x=f*h*l+u*p*g,this._y=u*p*l-f*h*g,this._z=u*h*g-f*p*l,this._w=u*h*l+f*p*g;break;case"ZXY":this._x=f*h*l-u*p*g,this._y=u*p*l+f*h*g,this._z=u*h*g+f*p*l,this._w=u*h*l-f*p*g;break;case"ZYX":this._x=f*h*l-u*p*g,this._y=u*p*l+f*h*g,this._z=u*h*g-f*p*l,this._w=u*h*l+f*p*g;break;case"YZX":this._x=f*h*l+u*p*g,this._y=u*p*l+f*h*g,this._z=u*h*g-f*p*l,this._w=u*h*l-f*p*g;break;case"XZY":this._x=f*h*l-u*p*g,this._y=u*p*l-f*h*g,this._z=u*h*g+f*p*l,this._w=u*h*l+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],f=n+a+l;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>l){const p=2*Math.sqrt(1+n-a-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>l){const p=2*Math.sqrt(1+a-n-l);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,f=Math.sin(e*h)/u;return this._w=o*l+this._w*f,this._x=n*l+this._x*f,this._y=s*l+this._y*f,this._z=r*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,n=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new W,Uu=new rn;class _n{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),so.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(t.matrixWorld),this.union(so)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),ro.subVectors(this.max,br),ws.subVectors(t.a,br),Rs.subVectors(t.b,br),Cs.subVectors(t.c,br),zi.subVectors(Rs,ws),Hi.subVectors(Cs,Rs),ns.subVectors(ws,Cs);let e=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-ns.z,ns.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,ns.z,0,-ns.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-ns.y,ns.x,0];return!Ya(e,ws,Rs,Cs,ro)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,ws,Rs,Cs,ro))?!1:(oo.crossVectors(zi,Hi),e=[oo.x,oo.y,oo.z],Ya(e,ws,Rs,Cs,ro))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mi=[new W,new W,new W,new W,new W,new W,new W,new W],Yn=new W,so=new _n,ws=new W,Rs=new W,Cs=new W,zi=new W,Hi=new W,ns=new W,br=new W,ro=new W,oo=new W,is=new W;function Ya(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){is.fromArray(i,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),u=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const F0=new _n,xr=new W,Za=new W;class Xn{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):F0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Za)),this.expandByPoint(xr.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new W,Ja=new W,ao=new W,Vi=new W,Qa=new W,co=new W,tc=new W;class La{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Si.copy(this.origin).addScaledVector(this.direction,e),Si.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ja.copy(t).add(e).multiplyScalar(.5),ao.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(Ja);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ao),a=Vi.dot(this.direction),c=-Vi.dot(ao),u=Vi.lengthSq(),h=Math.abs(1-o*o);let l,f,p,g;if(h>0)if(l=o*c-a,f=o*a-c,g=r*h,l>=0)if(f>=-g)if(f<=g){const _=1/h;l*=_,f*=_,p=l*(l+o*f+2*a)+f*(o*l+f+2*c)+u}else f=r,l=Math.max(0,-(o*f+a)),p=-l*l+f*(f+2*c)+u;else f=-r,l=Math.max(0,-(o*f+a)),p=-l*l+f*(f+2*c)+u;else f<=-g?(l=Math.max(0,-(-o*r+a)),f=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+f*(f+2*c)+u):f<=g?(l=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+u):(l=Math.max(0,-(o*r+a)),f=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+f*(f+2*c)+u);else f=o>0?-r:r,l=Math.max(0,-(o*f+a)),p=-l*l+f*(f+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Ja).addScaledVector(ao,f),p}intersectSphere(t,e){Si.subVectors(t.center,this.origin);const n=Si.dot(this.direction),s=Si.dot(Si)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,f=this.origin;return u>=0?(n=(t.min.x-f.x)*u,s=(t.max.x-f.x)*u):(n=(t.max.x-f.x)*u,s=(t.min.x-f.x)*u),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-f.z)*l,c=(t.max.z-f.z)*l):(a=(t.max.z-f.z)*l,c=(t.min.z-f.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Si)!==null}intersectTriangle(t,e,n,s,r){Qa.subVectors(e,t),co.subVectors(n,t),tc.crossVectors(Qa,co);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);const c=a*this.direction.dot(co.crossVectors(Vi,co));if(c<0)return null;const u=a*this.direction.dot(Qa.cross(Vi));if(u<0||c+u>o)return null;const h=-a*Vi.dot(tc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,c,u,h,l,f,p,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,u,h,l,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=u,d[6]=h,d[10]=l,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),r=1/Is.setFromMatrixColumn(t,1).length(),o=1/Is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*l,g=a*h,_=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=p+g*u,e[5]=f-_*u,e[9]=-a*c,e[2]=_-f*u,e[6]=g+p*u,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*l,g=u*h,_=u*l;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*l,g=u*h,_=u*l;e[0]=f-_*a,e[4]=-o*l,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*l,g=a*h,_=a*l;e[0]=c*h,e[4]=g*u-p,e[8]=f*u+_,e[1]=c*l,e[5]=_*u+f,e[9]=p*u-g,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*u,g=a*c,_=a*u;e[0]=c*h,e[4]=_-f*l,e[8]=g*l+p,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=p*l+g,e[10]=f-_*l}else if(t.order==="XZY"){const f=o*c,p=o*u,g=a*c,_=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=f*l+_,e[5]=o*h,e[9]=p*l-g,e[2]=g*l-p,e[6]=a*h,e[10]=_*l+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(N0,t,U0)}lookAt(t,e,n){const s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Wi.crossVectors(n,Ln),Wi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Wi.crossVectors(n,Ln)),Wi.normalize(),lo.crossVectors(Ln,Wi),s[0]=Wi.x,s[4]=lo.x,s[8]=Ln.x,s[1]=Wi.y,s[5]=lo.y,s[9]=Ln.y,s[2]=Wi.z,s[6]=lo.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],v=n[3],M=n[7],y=n[11],E=n[15],A=s[0],w=s[4],C=s[8],T=s[12],S=s[1],L=s[5],H=s[9],F=s[13],O=s[2],G=s[6],N=s[10],V=s[14],B=s[3],J=s[7],Z=s[11],lt=s[15];return r[0]=o*A+a*S+c*O+u*B,r[4]=o*w+a*L+c*G+u*J,r[8]=o*C+a*H+c*N+u*Z,r[12]=o*T+a*F+c*V+u*lt,r[1]=h*A+l*S+f*O+p*B,r[5]=h*w+l*L+f*G+p*J,r[9]=h*C+l*H+f*N+p*Z,r[13]=h*T+l*F+f*V+p*lt,r[2]=g*A+_*S+m*O+d*B,r[6]=g*w+_*L+m*G+d*J,r[10]=g*C+_*H+m*N+d*Z,r[14]=g*T+_*F+m*V+d*lt,r[3]=v*A+M*S+y*O+E*B,r[7]=v*w+M*L+y*G+E*J,r[11]=v*C+M*H+y*N+E*Z,r[15]=v*T+M*F+y*V+E*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*l-s*u*l-r*a*f+n*u*f+s*a*p-n*c*p)+_*(+e*c*p-e*u*f+r*o*f-s*o*p+s*u*h-r*c*h)+m*(+e*u*l-e*a*p-r*o*l+n*o*p+r*a*h-n*u*h)+d*(-s*a*h-e*c*l+e*a*f+s*o*l-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=l*m*u-_*f*u+_*c*p-a*m*p-l*c*d+a*f*d,M=g*f*u-h*m*u-g*c*p+o*m*p+h*c*d-o*f*d,y=h*_*u-g*l*u+g*a*p-o*_*p-h*a*d+o*l*d,E=g*l*c-h*_*c-g*a*f+o*_*f+h*a*m-o*l*m,A=e*v+n*M+s*y+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=v*w,t[1]=(_*f*r-l*m*r-_*s*p+n*m*p+l*s*d-n*f*d)*w,t[2]=(a*m*r-_*c*r+_*s*u-n*m*u-a*s*d+n*c*d)*w,t[3]=(l*c*r-a*f*r-l*s*u+n*f*u+a*s*p-n*c*p)*w,t[4]=M*w,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*w,t[6]=(g*c*r-o*m*r-g*s*u+e*m*u+o*s*d-e*c*d)*w,t[7]=(o*f*r-h*c*r+h*s*u-e*f*u-o*s*p+e*c*p)*w,t[8]=y*w,t[9]=(g*l*r-h*_*r-g*n*p+e*_*p+h*n*d-e*l*d)*w,t[10]=(o*_*r-g*a*r+g*n*u-e*_*u-o*n*d+e*a*d)*w,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*p-e*a*p)*w,t[12]=E*w,t[13]=(h*_*s-g*l*s+g*n*f-e*_*f-h*n*m+e*l*m)*w,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*w,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,f=r*u,p=r*h,g=r*l,_=o*h,m=o*l,d=a*l,v=c*u,M=c*h,y=c*l,E=n.x,A=n.y,w=n.z;return s[0]=(1-(_+d))*E,s[1]=(p+y)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(f+d))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+M)*w,s[9]=(m-v)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Is.set(s[0],s[1],s[2]).length();const o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Zn.copy(this);const u=1/r,h=1/o,l=1/a;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=l,Zn.elements[9]*=l,Zn.elements[10]*=l,e.setFromRotationMatrix(Zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===2e3)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),f=(e+t)*u,p=(n+s)*h;let g,_;if(a===2e3)g=(o+r)*l,_=-2*l;else if(a===2001)g=r*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Is=new W,Zn=new he,N0=new W(0,0,0),U0=new W(1,1,1),Wi=new W,lo=new W,Ln=new W,ku=new he,Ou=new rn;class jn{constructor(t=0,e=0,n=0,s=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ku.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ku,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Jp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let k0=0;const Bu=new W,Ps=new rn,Ai=new he,uo=new W,vr=new W,O0=new W,B0=new rn,Gu=new W(1,0,0),zu=new W(0,1,0),Hu=new W(0,0,1),Vu={type:"added"},G0={type:"removed"},Ls={type:"childadded",child:null},ec={type:"childremoved",child:null};class qe extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new W,e=new jn,n=new rn,s=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new ye}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(zu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,e){return Bu.copy(t).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(zu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(vr,uo,this.up):Ai.lookAt(uo,vr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(Ai),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G0),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,O0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,B0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}qe.DEFAULT_UP=new W(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new W,Ei=new W,nc=new W,Ti=new W,Ds=new W,Fs=new W,Wu=new W,ic=new W,sc=new W,rc=new W,oc=new Se,ac=new Se,cc=new Se;class Vn{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Jn.subVectors(t,e),s.cross(Jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Jn.subVectors(s,e),Ei.subVectors(n,e),nc.subVectors(t,e);const o=Jn.dot(Jn),a=Jn.dot(Ei),c=Jn.dot(nc),u=Ei.dot(Ei),h=Ei.dot(nc),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const f=1/l,p=(u*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ti.x),c.addScaledVector(o,Ti.y),c.addScaledVector(a,Ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(cc,r.z),o}static isFrontFacing(t,e,n,s){return Jn.subVectors(n,e),Ei.subVectors(t,e),Jn.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Jn.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ds.subVectors(s,n),Fs.subVectors(r,n),ic.subVectors(t,n);const c=Ds.dot(ic),u=Fs.dot(ic);if(c<=0&&u<=0)return e.copy(n);sc.subVectors(t,s);const h=Ds.dot(sc),l=Fs.dot(sc);if(h>=0&&l<=h)return e.copy(s);const f=c*l-h*u;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ds,o);rc.subVectors(t,r);const p=Ds.dot(rc),g=Fs.dot(rc);if(g>=0&&p<=g)return e.copy(r);const _=p*u-c*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(Fs,a);const m=h*g-p*l;if(m<=0&&l-h>=0&&p-g>=0)return Wu.subVectors(r,s),a=(l-h)/(l-h+(p-g)),e.copy(s).addScaledVector(Wu,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(Ds,o).addScaledVector(Fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ho={h:0,s:0,l:0};function lc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,Pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Pe.workingColorSpace){if(t=Vl(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=lc(o,r,t+1/3),this.g=lc(o,r,t),this.b=lc(o,r,t-1/3)}return Pe.toWorkingColorSpace(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Qp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Pe.fromWorkingColorSpace(xn.copy(this),t),Math.round(Te(xn.r*255,0,255))*65536+Math.round(Te(xn.g*255,0,255))*256+Math.round(Te(xn.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Xe){Pe.fromWorkingColorSpace(xn.copy(this),t);const e=xn.r,n=xn.g,s=xn.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(ho);const n=Hr(ji.h,ho.h,e),s=Hr(ji.s,ho.s,e),r=Hr(ji.l,ho.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new ie;ie.NAMES=Qp;let z0=0;class Wn extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fn extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new W,fo=new ee;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class tm extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class em extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $e extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let H0=0;const On=new he,uc=new qe,Ns=new W,Dn=new _n,yr=new _n,hn=new W;class Ze extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($p(t)?em:tm)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Dn.min,yr.min),Dn.expandByPoint(hn),hn.addVectors(Dn.max,yr.max),Dn.expandByPoint(hn)):(Dn.expandByPoint(yr.min),Dn.expandByPoint(yr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)hn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(hn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)hn.fromBufferAttribute(a,u),c&&(Ns.fromBufferAttribute(t,u),hn.add(Ns)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new W,c[C]=new W;const u=new W,h=new W,l=new W,f=new ee,p=new ee,g=new ee,_=new W,m=new W;function d(C,T,S){u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,T),l.fromBufferAttribute(n,S),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),h.sub(u),l.sub(u),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(l,-p.y).multiplyScalar(L),m.copy(l).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(_),a[T].add(_),a[S].add(_),c[C].add(m),c[T].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,T=v.length;C<T;++C){const S=v[C],L=S.start,H=S.count;for(let F=L,O=L+H;F<O;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new W,y=new W,E=new W,A=new W;function w(C){E.fromBufferAttribute(s,C),A.copy(E);const T=a[C];M.copy(T),M.sub(E.multiplyScalar(E.dot(T))).normalize(),y.crossVectors(A,T);const L=y.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,L)}for(let C=0,T=v.length;C<T;++C){const S=v[C],L=S.start,H=S.count;for(let F=L,O=L+H;F<O;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new W,r=new W,o=new W,a=new W,c=new W,u=new W,h=new W,l=new W;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,m),a.add(h),c.add(h),u.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)hn.fromBufferAttribute(t,e),hn.normalize(),t.setXYZ(e,hn.x,hn.y,hn.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,f=new u.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=u[p++]}return new De(f,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const f=u[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,f=u.length;l<f;l++){const p=u[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let f=0,p=l.length;f<p;f++)h.push(l[f].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ju=new he,ss=new La,po=new Xn,Xu=new W,mo=new W,go=new W,_o=new W,hc=new W,bo=new W,qu=new W,xo=new W;class we extends qe{constructor(t=new Ze,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(hc.fromBufferAttribute(l,t),o?bo.addScaledVector(hc,h):bo.addScaledVector(hc.sub(e),h))}e.add(bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(po.containsPoint(ss.origin)===!1&&(ss.intersectSphere(po,Xu)===null||ss.origin.distanceToSquared(Xu)>(t.far-t.near)**2))&&(ju.copy(r).invert(),ss.copy(t.ray).applyMatrix4(ju),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=M;y<E;y+=3){const A=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);s=vo(this,d,t,n,u,h,l,A,w,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=vo(this,o,t,n,u,h,l,v,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=M;y<E;y+=3){const A=y,w=y+1,C=y+2;s=vo(this,d,t,n,u,h,l,A,w,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,M=m+1,y=m+2;s=vo(this,o,t,n,u,h,l,v,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function V0(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(xo);return u<e.near||u>e.far?null:{distance:u,point:xo.clone(),object:i}}function vo(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,mo),i.getVertexPosition(c,go),i.getVertexPosition(u,_o);const h=V0(i,t,e,n,mo,go,_o,qu);if(h){const l=new W;Vn.getBarycoord(qu,mo,go,_o,l),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,c,u,l,new ee)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,a,c,u,l,new ee)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,c,u,l,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:u,normal:new W,materialIndex:0};Vn.getNormal(mo,go,_o,f.normal),h.face=f,h.barycoord=l}return h}class Ui extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(l,2));function g(_,m,d,v,M,y,E,A,w,C,T){const S=y/w,L=E/C,H=y/2,F=E/2,O=A/2,G=w+1,N=C+1;let V=0,B=0;const J=new W;for(let Z=0;Z<N;Z++){const lt=Z*L-F;for(let St=0;St<G;St++){const kt=St*S-H;J[_]=kt*v,J[m]=lt*M,J[d]=O,u.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[d]=A>0?1:-1,h.push(J.x,J.y,J.z),l.push(St/w),l.push(1-Z/C),V+=1}}for(let Z=0;Z<C;Z++)for(let lt=0;lt<w;lt++){const St=f+lt+G*Z,kt=f+lt+G*(Z+1),rt=f+(lt+1)+G*(Z+1),_t=f+(lt+1)+G*Z;c.push(St,kt,_t),c.push(kt,rt,_t),B+=6}a.addGroup(p,B,T),p+=B,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Sn(i){const t={};for(let e=0;e<i.length;e++){const n=rr(i[e]);for(const s in n)t[s]=n[s]}return t}function W0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const Wl={clone:rr,merge:Sn};var j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rr(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class im extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new W,Ku=new ee,$u=new ee;class En extends im{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,Ku,$u),e.subVectors($u,Ku)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Us=-90,ks=1;class q0 extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(Us,ks,t,e);s.layers=this.layers,this.add(s);const r=new En(Us,ks,t,e);r.layers=this.layers,this.add(r);const o=new En(Us,ks,t,e);o.layers=this.layers,this.add(o);const a=new En(Us,ks,t,e);a.layers=this.layers,this.add(a);const c=new En(Us,ks,t,e);c.layers=this.layers,this.add(c);const u=new En(Us,ks,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sm extends on{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class K0 extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ui(5,5,5),r=new ki({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new we(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new q0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class jl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new jl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $0 extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new W;class ni{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ni(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class rm extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Os;const Mr=new W,Bs=new W,Gs=new W,zs=new ee,Sr=new ee,om=new he,yo=new W,Ar=new W,Mo=new W,Yu=new ee,fc=new ee,Zu=new ee;class Y0 extends qe{constructor(t=new rm){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Ze;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xl(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new ni(n,3,0,!1)),Os.setAttribute("uv",new ni(n,2,3,!1))}this.geometry=Os,this.material=t,this.center=new ee(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),om.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-Gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;So(yo.set(-.5,-.5,0),Gs,o,Bs,s,r),So(Ar.set(.5,-.5,0),Gs,o,Bs,s,r),So(Mo.set(.5,.5,0),Gs,o,Bs,s,r),Yu.set(0,0),fc.set(1,0),Zu.set(1,1);let a=t.ray.intersectTriangle(yo,Ar,Mo,!1,Mr);if(a===null&&(So(Ar.set(-.5,.5,0),Gs,o,Bs,s,r),fc.set(0,1),a=t.ray.intersectTriangle(yo,Mo,Ar,!1,Mr),a===null))return;const c=t.ray.origin.distanceTo(Mr);c<t.near||c>t.far||e.push({distance:c,point:Mr.clone(),uv:Vn.getInterpolation(Mr,yo,Ar,Mo,Yu,fc,Zu,new ee),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function So(i,t,e,n,s,r){zs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Sr.x=r*zs.x-s*zs.y,Sr.y=s*zs.x+r*zs.y):Sr.copy(zs),i.copy(t),i.x+=Sr.x,i.y+=Sr.y,i.applyMatrix4(om)}const Ju=new W,Qu=new Se,th=new Se,Z0=new W,eh=new he,Ao=new W,dc=new Xn,nh=new he,pc=new La;class J0 extends we{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new he,this.bindMatrixInverse=new he,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dc.copy(this.boundingSphere),dc.applyMatrix4(s),t.ray.intersectsSphere(dc)!==!1&&(nh.copy(s).invert(),pc.copy(t.ray).applyMatrix4(nh),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,pc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===a0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Qu.fromBufferAttribute(s.attributes.skinIndex,t),th.fromBufferAttribute(s.attributes.skinWeight,t),Ju.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=th.getComponent(r);if(o!==0){const a=Qu.getComponent(r);eh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Z0.copy(Ju).applyMatrix4(eh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class am extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cm extends on{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,f){super(null,o,a,c,u,h,s,r,l,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ih=new he,Q0=new he;class ql{constructor(t=[],e=[]){this.uuid=ri(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new he)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new he;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Q0;ih.multiplyMatrices(a,e[r]),ih.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ql(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new cm(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new am),this.bones.push(o),this.boneInverses.push(new he().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class _l extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hs=new he,sh=new he,Eo=[],rh=new _n,t_=new he,Er=new we,Tr=new Xn;class e_ extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,t_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),rh.copy(t.boundingBox).applyMatrix4(Hs),this.boundingBox.union(rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hs),Tr.copy(t.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Tr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tr.copy(this.boundingSphere),Tr.applyMatrix4(n),t.ray.intersectsSphere(Tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),sh.multiplyMatrices(n,Hs),Er.matrixWorld=sh,Er.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){const c=Eo[o];c.instanceId=r,c.object=this,e.push(c)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cm(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const mc=new W,n_=new W,i_=new ye;class fs{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=mc.subVectors(n,e).cross(n_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||i_.getNormalMatrix(t),s=this.coplanarPoint(mc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Xn,To=new W;class Kl{constructor(t=new fs,e=new fs,n=new fs,s=new fs,r=new fs,o=new fs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,f-u,m-p,y-d).normalize(),n[1].setComponents(c+r,f+u,m+p,y+d).normalize(),n[2].setComponents(c+o,f+h,m+g,y+v).normalize(),n[3].setComponents(c-o,f-h,m-g,y-v).normalize(),n[4].setComponents(c-a,f-l,m-_,y-M).normalize(),e===2e3)n[5].setComponents(c+a,f+l,m+_,y+M).normalize();else if(e===2001)n[5].setComponents(a,l,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lm extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new W,_a=new W,oh=new he,wr=new La,wo=new Xn,gc=new W,ah=new W;class $l extends qe{constructor(t=new Ze,e=new lm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),_a.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(s),wo.radius+=r,t.ray.intersectsSphere(wo)===!1)return;oh.copy(s).invert(),wr.copy(t.ray).applyMatrix4(oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=h.getX(_),v=h.getX(_+1),M=Ro(this,t,wr,c,d,v);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Ro(this,t,wr,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=u){const d=Ro(this,t,wr,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Ro(this,t,wr,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ro(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(ga.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(ga,_a,gc,ah)>n)return;gc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(gc);if(!(c<t.near||c>t.far))return{distance:c,point:ah.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const ch=new W,lh=new W;class s_ extends $l{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ch.fromBufferAttribute(e,s),lh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ch.distanceTo(lh);t.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class r_ extends $l{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Yl extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const uh=new he,bl=new La,Co=new Xn,Io=new W;class um extends qe{constructor(t=new Ze,e=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;uh.copy(s).invert(),bl.copy(t.ray).applyMatrix4(uh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);Io.fromBufferAttribute(l,m),hh(Io,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Io.fromBufferAttribute(l,g),hh(Io,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hh(i,t,e,n,s,r,o){const a=bl.distanceSqToPoint(i);if(a<e){const c=new W;bl.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vn extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Pn extends on{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hm extends on{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zl extends Ze{constructor(t=[new ee(0,-.5),new ee(.5,0),new ee(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new W,f=new ee,p=new W,g=new W,_=new W;let m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=e;v++){const M=n+v*h*s,y=Math.sin(M),E=Math.cos(M);for(let A=0;A<=t.length-1;A++){l.x=t[A].x*y,l.y=t[A].y,l.z=t[A].x*E,o.push(l.x,l.y,l.z),f.x=v/e,f.y=A/(t.length-1),a.push(f.x,f.y);const w=c[3*A+0]*y,C=c[3*A+1],T=c[3*A+0]*E;u.push(w,C,T)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const y=M+v*t.length,E=y,A=y+t.length,w=y+t.length+1,C=y+1;r.push(E,A,C),r.push(w,C,A)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zl(t.points,t.segments,t.phiStart,t.phiLength)}}class Da extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new W,h=new ee;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,f=3;l<=e;l++,f+=3){const p=n+l/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Da(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qr extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(p,2));function v(){const y=new W,E=new W;let A=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const T=[],S=C/r,L=S*(e-t)+t;for(let H=0;H<=s;H++){const F=H/s,O=F*c+a,G=Math.sin(O),N=Math.cos(O);E.x=L*G,E.y=-S*n+m,E.z=L*N,l.push(E.x,E.y,E.z),y.set(G,w,N).normalize(),f.push(y.x,y.y,y.z),p.push(F,1-S),T.push(g++)}_.push(T)}for(let C=0;C<s;C++)for(let T=0;T<r;T++){const S=_[T][C],L=_[T+1][C],H=_[T+1][C+1],F=_[T][C+1];(t>0||T!==0)&&(h.push(S,L,F),A+=3),(e>0||T!==r-1)&&(h.push(L,H,F),A+=3)}u.addGroup(d,A,0),d+=A}function M(y){const E=g,A=new ee,w=new W;let C=0;const T=y===!0?t:e,S=y===!0?1:-1;for(let H=1;H<=s;H++)l.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let H=0;H<=s;H++){const O=H/s*c+a,G=Math.cos(O),N=Math.sin(O);w.x=T*N,w.y=m*S,w.z=T*G,l.push(w.x,w.y,w.z),f.push(0,S,0),A.x=G*.5+.5,A.y=N*.5*S+.5,p.push(A.x,A.y),g++}for(let H=0;H<s;H++){const F=E+H,O=L+H;y===!0?h.push(O,O+1,F):h.push(O+1,O,F),C+=3}u.addGroup(d,C,y===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oi extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const v=d*f-o;for(let M=0;M<u;M++){const y=M*l-r;g.push(y,-v,0),_.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<a;v++){const M=v+u*d,y=v+u*(d+1),E=v+1+u*(d+1),A=v+1+u*d;p.push(M,y,A),p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fa extends Ze{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const f=(e-t)/s,p=new W,g=new ee;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=l*Math.cos(d),p.y=l*Math.sin(d),c.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}l+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const v=d+m,M=v,y=v+n+1,E=v+n+2,A=v+1;a.push(M,y,A),a.push(y,E,A)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class o_ extends Ze{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new W,r=new W;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],f=l.start,p=l.count;for(let g=f,_=f+p;g<_;g+=3)for(let m=0;m<3;m++){const d=a.getX(g+m),v=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,v),fh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),fh(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new $e(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function fh(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class Oi extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _i extends Oi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Kr extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class a_ extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c_ extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function gs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dm(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function xl(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Jl(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function l_(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],f=[];for(let p=0;p<u.times.length;++p){const g=u.times[p]*s;if(!(g<e||g>=n)){l.push(u.times[p]);for(let _=0;_<h;++_)f.push(u.values[p*h+_])}}l.length!==0&&(u.times=gs(l,u.times.constructor),u.values=gs(f,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function u_(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(d){return d.name===a.name&&d.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let f=0;const p=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=p/3);const g=a.times.length-1;let _;if(r<=a.times[0]){const d=h,v=l-h;_=a.values.slice(d,v)}else if(r>=a.times[g]){const d=g*l+h,v=d+l-h;_=a.values.slice(d,v)}else{const d=a.createInterpolant(),v=h,M=l-h;d.evaluate(r),_=d.resultBuffer.slice(v,M)}c==="quaternion"&&new rn().fromArray(_).normalize().conjugate().toArray(_);const m=u.times.length;for(let d=0;d<m;++d){const v=d*p+f;if(c==="quaternion")rn.multiplyQuaternionsFlat(u.values,v,_,0,u.values,v);else{const M=p-f*2;for(let y=0;y<M;++y)u.values[v+y]-=_[y]}}}return i.blendMode=2501,i}const h_={convertArray:gs,isTypedArray:fm,getKeyframeOrder:dm,sortedArray:xl,flattenJSON:Jl,subclip:l_,makeClipAdditive:u_};class Qr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f_ extends Qr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-p)*m+(1.5+p)*_+.5*g,y=p*m-p*_;for(let E=0;E!==a;++E)r[E]=d*o[h+E]+v*o[u+E]+M*o[c+E]+y*o[l+E];return r}}class pm extends Qr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let f=0;f!==a;++f)r[f]=o[u+f]*l+o[c+f]*h;return r}}class d_ extends Qr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class bi{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new d_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new f_(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&fm(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,f=l-n,p=l+n;for(let g=0;g!==n;++g){const _=e[l+g];if(_!==e[f+g]||_!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[l+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=2301;class ur extends bi{constructor(t,e,n){super(t,e,n)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=2300;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class mm extends bi{}mm.prototype.ValueTypeName="color";class or extends bi{}or.prototype.ValueTypeName="number";class p_ extends Qr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)rn.slerpFlat(r,0,o,u-a,o,u,c);return r}}class ar extends bi{InterpolantFactoryMethodLinear(t){return new p_(this.times,this.values,this.getValueSize(),t)}}ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends bi{constructor(t,e,n){super(t,e,n)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=2300;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class cr extends bi{}cr.prototype.ValueTypeName="vector";class vl{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(g_(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(bi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=dm(c);c=xl(c,1,h),u=xl(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new or(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let f=s[l];f||(s[l]=f=[]),f.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,f,p,g,_){if(p.length!==0){const m=[],d=[];Jl(p,m,d,g),m.length!==0&&_.push(new l(f,m,d))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const f=u[l].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let v=0;v!==f[g].morphTargets.length;++v){const M=f[g];m.push(M.time),d.push(M.morphTarget===_?1:0)}s.push(new or(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{const p=".bones["+e[l].name+"]";n(cr,p+".position",f,"pos",s),n(ar,p+".quaternion",f,"rot",s),n(cr,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function m_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return or;case"vector":case"vector2":case"vector3":case"vector4":return cr;case"color":return mm;case"quaternion":return ar;case"bool":case"boolean":return ur;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function g_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=m_(i.type);if(i.times===void 0){const e=[],n=[];Jl(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Yi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class __{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,f=u.length;l<f;l+=2){const p=u[l],g=u[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const b_=new __;class fr{constructor(t){this.manager=t!==void 0?t:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class x_ extends Error{constructor(t,e){super(t),this.response=e}}class gm extends fr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Yi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(wi[t]!==void 0){wi[t].push({onLoad:e,onProgress:n,onError:s});return}wi[t]=[],wi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=wi[t],l=u.body.getReader(),f=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){v();function v(){l.read().then(({done:M,value:y})=>{if(M)d.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,w=h.length;A<w;A++){const C=h[A];C.onProgress&&C.onProgress(E)}d.enqueue(y),v()}},M=>{d.error(M)})}}});return new Response(m)}else throw new x_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),f=l&&l[1]?l[1].toLowerCase():void 0,p=new TextDecoder(f);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{Yi.add(t,u);const h=wi[t];delete wi[t];for(let l=0,f=h.length;l<f;l++){const p=h[l];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=wi[t];if(h===void 0)throw this.manager.itemError(t),u;delete wi[t];for(let l=0,f=h.length;l<f;l++){const p=h[l];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class v_ extends fr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Yi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Xr("img");function c(){h(),Yi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Ql extends fr{constructor(t){super(t)}load(t,e,n,s){const r=new on,o=new v_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class to extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class y_ extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _c=new he,dh=new W,ph=new W;class tu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),ph.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ph),e.updateMatrixWorld(),_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M_ extends tu{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=sr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class S_ extends to{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new M_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const mh=new he,Rr=new W,bc=new W;class A_ extends tu{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rr),bc.copy(n.position),bc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bc),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),mh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh)}}class E_ extends to{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new A_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class eu extends im{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class T_ extends tu{constructor(){super(new eu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nu extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new T_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class w_ extends to{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class R_ extends Ze{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class C_ extends fr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Yi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Yi.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),Yi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Yi.add(t,c),r.manager.itemStart(t)}}class I_ extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class P_{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){rn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;rn.multiplyQuaternionsFlat(t,o,t,e,t,n),rn.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const iu="\\[\\]\\.:\\/",L_=new RegExp("["+iu+"]","g"),su="[^"+iu+"]",D_="[^"+iu.replace("\\.","")+"]",F_=/((?:WC+[\/:])*)/.source.replace("WC",su),N_=/(WCOD+)?/.source.replace("WCOD",D_),U_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",su),k_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",su),O_=new RegExp("^"+F_+N_+U_+k_+"$"),B_=["material","materials","bones","map"];class G_{constructor(t,e,n){const s=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ke{constructor(t,e,n){this.path=e,this.parsedPath=n||ke.parseTrackName(e),this.node=ke.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ke.Composite(t,e,n):new ke(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(t){const e=O_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);B_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=ke.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ke.Composite=G_;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class z_{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const H_=new Float32Array(1);class V_ extends Ms{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const f=s[l],p=f.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[l]=g;else{if(g=o[l],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const _=e&&e._propertyBindings[l].binding.parsedPath;g=new P_(ke.create(n,p,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[l]=g}a[l].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,f=(t._localRoot||this._root).uuid;delete l[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new pm(new Float32Array(2),new Float32Array(2),1,H_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?vl.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new z_(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?vl.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class yl extends Xl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const gh=new W,Po=new W;class _m{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){gh.subVectors(t,this.start),Po.subVectors(this.end,this.start);const n=Po.dot(Po);let r=Po.dot(gh)/n;return e&&(r=Te(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function _h(i,t,e,n){const s=W_(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function W_(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bm(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function j_(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<l.length;p++){const g=l[f],_=l[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,l[f]=_)}l.length=f+1;for(let p=0,g=l.length;p<g;p++){const _=l[p];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var X_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q_=`#ifdef USE_ALPHAHASH
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
#endif`,K_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J_=`#ifdef USE_AOMAP
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
#endif`,Q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tb=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rb=`#ifdef USE_IRIDESCENCE
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
#endif`,ob=`#ifdef USE_BUMPMAP
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
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mb=`#define PI 3.141592653589793
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
} // validated`,gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Db=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,jb=`
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
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ex=`#if defined( USE_POINTS_UV )
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
#endif`,nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ax=`#ifdef USE_MORPHTARGETS
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
#endif`,cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,px=`#ifdef USE_NORMALMAP
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
#endif`,mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ix=`float getShadowMask() {
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
}`,Px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,Nx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bx=`#ifdef USE_TRANSMISSION
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
#endif`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xx=`uniform sampler2D t2D;
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
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
}`,Qx=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`uniform float scale;
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
}`,sv=`uniform vec3 diffuse;
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
}`,rv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,lv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,dv=`#define PHONG
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
}`,pv=`#define PHONG
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
}`,mv=`#define STANDARD
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
}`,gv=`#define STANDARD
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
}`,_v=`#define TOON
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
}`,bv=`#define TOON
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
}`,xv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 color;
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
}`,Sv=`uniform float rotation;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:X_,alphahash_pars_fragment:q_,alphamap_fragment:K_,alphamap_pars_fragment:$_,alphatest_fragment:Y_,alphatest_pars_fragment:Z_,aomap_fragment:J_,aomap_pars_fragment:Q_,batching_pars_vertex:tb,batching_vertex:eb,begin_vertex:nb,beginnormal_vertex:ib,bsdfs:sb,iridescence_fragment:rb,bumpmap_pars_fragment:ob,clipping_planes_fragment:ab,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:lb,clipping_planes_vertex:ub,color_fragment:hb,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:pb,common:mb,cube_uv_reflection_fragment:gb,defaultnormal_vertex:_b,displacementmap_pars_vertex:bb,displacementmap_vertex:xb,emissivemap_fragment:vb,emissivemap_pars_fragment:yb,colorspace_fragment:Mb,colorspace_pars_fragment:Sb,envmap_fragment:Ab,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Ob,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:Ib,fog_fragment:Pb,fog_pars_fragment:Lb,gradientmap_pars_fragment:Db,lightmap_pars_fragment:Fb,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ub,lights_pars_begin:kb,lights_toon_fragment:Bb,lights_toon_pars_fragment:Gb,lights_phong_fragment:zb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Wb,lights_fragment_begin:jb,lights_fragment_maps:Xb,lights_fragment_end:qb,logdepthbuf_fragment:Kb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:Yb,logdepthbuf_vertex:Zb,map_fragment:Jb,map_pars_fragment:Qb,map_particle_fragment:tx,map_particle_pars_fragment:ex,metalnessmap_fragment:nx,metalnessmap_pars_fragment:ix,morphinstance_vertex:sx,morphcolor_vertex:rx,morphnormal_vertex:ox,morphtarget_pars_vertex:ax,morphtarget_vertex:cx,normal_fragment_begin:lx,normal_fragment_maps:ux,normal_pars_fragment:hx,normal_pars_vertex:fx,normal_vertex:dx,normalmap_pars_fragment:px,clearcoat_normal_fragment_begin:mx,clearcoat_normal_fragment_maps:gx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:bx,opaque_fragment:xx,packing:vx,premultiplied_alpha_fragment:yx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:Ax,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Tx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:Rx,shadowmap_vertex:Cx,shadowmask_pars_fragment:Ix,skinbase_vertex:Px,skinning_pars_vertex:Lx,skinning_vertex:Dx,skinnormal_vertex:Fx,specularmap_fragment:Nx,specularmap_pars_fragment:Ux,tonemapping_fragment:kx,tonemapping_pars_fragment:Ox,transmission_fragment:Bx,transmission_pars_fragment:Gx,uv_pars_fragment:zx,uv_pars_vertex:Hx,uv_vertex:Vx,worldpos_vertex:Wx,background_vert:jx,background_frag:Xx,backgroundCube_vert:qx,backgroundCube_frag:Kx,cube_vert:$x,cube_frag:Yx,depth_vert:Zx,depth_frag:Jx,distanceRGBA_vert:Qx,distanceRGBA_frag:tv,equirect_vert:ev,equirect_frag:nv,linedashed_vert:iv,linedashed_frag:sv,meshbasic_vert:rv,meshbasic_frag:ov,meshlambert_vert:av,meshlambert_frag:cv,meshmatcap_vert:lv,meshmatcap_frag:uv,meshnormal_vert:hv,meshnormal_frag:fv,meshphong_vert:dv,meshphong_frag:pv,meshphysical_vert:mv,meshphysical_frag:gv,meshtoon_vert:_v,meshtoon_frag:bv,points_vert:xv,points_frag:vv,shadow_vert:yv,shadow_frag:Mv,sprite_vert:Sv,sprite_frag:Av},zt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},In={basic:{uniforms:Sn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Sn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Sn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Sn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Sn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Sn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Sn([zt.points,zt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Sn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Sn([zt.common,zt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Sn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Sn([zt.sprite,zt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Sn([zt.common,zt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Sn([zt.lights,zt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};In.physical={uniforms:Sn([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Lo={r:0,b:0,g:0},os=new jn,Ev=new he;function Tv(i,t,e,n,s,r,o){const a=new ie(0);let c=r===!0?0:1,u,h,l=null,f=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const E=g(M);E===null?d(a,c):E&&E.isColor&&(d(E,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===306)?(h===void 0&&(h=new we(new Ui(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:rr(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),os.copy(y.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(os)),h.material.toneMapped=Pe.getTransfer(E.colorSpace)!==je,(l!==E||f!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=E,f=E.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new we(new oi(2,2),new ki({name:"BackgroundMaterial",uniforms:rr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Pe.getTransfer(E.colorSpace)!==je,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(l!==E||f!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=E,f=E.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function d(M,y){M.getRGB(Lo,nm(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:_,addToRenderList:m,dispose:v}}function wv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,L,H,F,O){let G=!1;const N=l(F,H,L);r!==N&&(r=N,u(r.object)),G=p(S,F,H,O),G&&g(S,F,H,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(S,L,H,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function l(S,L,H){const F=H.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let G=O[L.id];G===void 0&&(G={},O[L.id]=G);let N=G[F];return N===void 0&&(N=f(c()),G[F]=N),N}function f(S){const L=[],H=[],F=[];for(let O=0;O<e;O++)L[O]=0,H[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,L,H,F){const O=r.attributes,G=L.attributes;let N=0;const V=H.getAttributes();for(const B in V)if(V[B].location>=0){const Z=O[B];let lt=G[B];if(lt===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),Z===void 0||Z.attribute!==lt||lt&&Z.data!==lt.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(S,L,H,F){const O={},G=L.attributes;let N=0;const V=H.getAttributes();for(const B in V)if(V[B].location>=0){let Z=G[B];Z===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const lt={};lt.attribute=Z,Z&&Z.data&&(lt.data=Z.data),O[B]=lt,N++}r.attributes=O,r.attributesNum=N,r.index=F}function _(){const S=r.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const H=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;H[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),O[S]!==L&&(i.vertexAttribDivisor(S,L),O[S]=L)}function v(){const S=r.newAttributes,L=r.enabledAttributes;for(let H=0,F=L.length;H<F;H++)L[H]!==S[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function M(S,L,H,F,O,G,N){N===!0?i.vertexAttribIPointer(S,L,H,O,G):i.vertexAttribPointer(S,L,H,F,O,G)}function y(S,L,H,F){_();const O=F.attributes,G=H.getAttributes(),N=L.defaultAttributeValues;for(const V in G){const B=G[V];if(B.location>=0){let J=O[V];if(J===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),J!==void 0){const Z=J.normalized,lt=J.itemSize,St=t.get(J);if(St===void 0)continue;const kt=St.buffer,rt=St.type,_t=St.bytesPerElement,ot=rt===i.INT||rt===i.UNSIGNED_INT||J.gpuType===1013;if(J.isInterleavedBufferAttribute){const j=J.data,bt=j.stride,It=J.offset;if(j.isInstancedInterleavedBuffer){for(let Dt=0;Dt<B.locationSize;Dt++)d(B.location+Dt,j.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Dt=0;Dt<B.locationSize;Dt++)m(B.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let Dt=0;Dt<B.locationSize;Dt++)M(B.location+Dt,lt/B.locationSize,rt,Z,bt*_t,(It+lt/B.locationSize*Dt)*_t,ot)}else{if(J.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)d(B.location+j,J.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let j=0;j<B.locationSize;j++)m(B.location+j);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let j=0;j<B.locationSize;j++)M(B.location+j,lt/B.locationSize,rt,Z,lt*_t,lt/B.locationSize*j*_t,ot)}}else if(N!==void 0){const Z=N[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(B.location,Z);break;case 3:i.vertexAttrib3fv(B.location,Z);break;case 4:i.vertexAttrib4fv(B.location,Z);break;default:i.vertexAttrib1fv(B.location,Z)}}}}v()}function E(){C();for(const S in n){const L=n[S];for(const H in L){const F=L[H];for(const O in F)h(F[O].object),delete F[O];delete L[H]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const H in L){const F=L[H];for(const O in F)h(F[O].object),delete F[O];delete L[H]}delete n[S.id]}function w(S){for(const L in n){const H=n[L];if(H[S.id]===void 0)continue;const F=H[S.id];for(const O in F)h(F[O].object),delete F[O];delete H[S.id]}}function C(){T(),o=!0,r!==s&&(r=s,u(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Rv(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let p=0;for(let g=0;g<l;g++)p+=h[g];e.update(p,n,1)}function c(u,h,l,f){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,f,0,l);let g=0;for(let _=0;_<l;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Cv(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==1009&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:E,maxSamples:A}}function Iv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new fs,a=new ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const p=l.length!==0||f||n!==0||s;return s=f,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,f){e=h(l,f,0)},this.setState=function(l,f,p){const g=l.clippingPlanes,_=l.clipIntersection,m=l.clipShadows,d=i.get(l);if(!s||g===null||g.length===0||r&&!m)r?h(null):u();else{const v=r?0:n,M=v*4;let y=d.clippingState||null;c.value=y,y=h(g,f,M,p);for(let E=0;E!==M;++E)y[E]=e[E];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,f,p,g){const _=l!==null?l.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,y=p;M!==_;++M,y+=4)o.copy(l[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Pv(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new K0(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zs=4,bh=[.125,.215,.35,.446,.526,.582],ms=20,xc=new eu,xh=new ie;let vc=null,yc=0,Mc=0,Sc=!1;const ds=(1+Math.sqrt(5))/2,Vs=1/ds,vh=[new W(-ds,Vs,0),new W(ds,Vs,0),new W(-Vs,0,ds),new W(Vs,0,ds),new W(0,ds,-Vs),new W(0,ds,Vs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vc,yc,Mc),this._renderer.xr.enabled=Sc,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:wn,depthBuffer:!1},s=Mh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lv(r)),this._blurMaterial=Dv(r,t,e)}return s}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,xc)}_sceneToCubeUV(t,e,n,s){const a=new En(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,f=h.toneMapping;h.getClearColor(xh),h.toneMapping=0,h.autoClear=!1;const p=new fn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new we(new Ui,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(xh),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,c[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,c[d]),a.lookAt(0,u[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,u[d]));const M=this._cubeSize;Do(s,v*M,d>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Do(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,xc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=vh[(s-r-1)%vh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new we(this._lodPlanes[s],u),f=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);const d=[];let v=0;for(let w=0;w<ms;++w){const C=w/_,T=Math.exp(-C*C/2);d.push(T),w===0?v+=T:w<m&&(v+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const y=this._sizeLods[s],E=3*y*(s>M-Zs?s-M+Zs:0),A=4*(this._cubeSize-y);Do(e,E,A,3*y,2*y),c.setRenderTarget(e),c.render(l,xc)}}function Lv(i){const t=[],e=[],n=[];let s=i;const r=i-Zs+1+bh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Zs?c=bh[o-i+Zs-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,f=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),M=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,T=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];v.set(T,_*g*A),M.set(f,m*g*A);const S=[A,A,A,A,A,A];y.set(S,d*g*A)}const E=new Ze;E.setAttribute("position",new De(v,_)),E.setAttribute("uv",new De(M,m)),E.setAttribute("faceIndex",new De(y,d)),t.push(E),s>Zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mh(i,t,e){const n=new ys(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Dv(i,t,e){const n=new Float32Array(ms),s=new W(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ru(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sh(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ah(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function Fv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const f=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new yh(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new yh(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Uv(i,t,e,n){const s={},r=new WeakMap;function o(l){const f=l.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(l,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(l){const f=l.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function u(l){const f=[],p=l.index,g=l.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let M=0,y=v.length;M<y;M+=3){const E=v[M+0],A=v[M+1],w=v[M+2];f.push(E,A,A,w,w,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const E=M+0,A=M+1,w=M+2;f.push(E,A,A,w,w,E)}}else return;const m=new($p(f)?em:tm)(f,1);m.version=_;const d=r.get(l);d&&t.remove(d),r.set(l,m)}function h(l){const f=r.get(l);if(f){const p=l.index;p!==null&&f.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function kv(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function u(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function l(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Ov(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bv(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==l){let T=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const A=new Float32Array(y*E*4*l),w=new Zp(A,y,E,l);w.type=1015,w.needsUpdate=!0;const C=M*4;for(let S=0;S<l;S++){const L=m[S],H=d[S],F=v[S],O=y*E*4*S;for(let G=0;G<L.count;G++){const N=G*C;p===!0&&(s.fromBufferAttribute(L,G),A[O+N+0]=s.x,A[O+N+1]=s.y,A[O+N+2]=s.z,A[O+N+3]=0),g===!0&&(s.fromBufferAttribute(H,G),A[O+N+4]=s.x,A[O+N+5]=s.y,A[O+N+6]=s.z,A[O+N+7]=0),_===!0&&(s.fromBufferAttribute(F,G),A[O+N+8]=s.x,A[O+N+9]=s.y,A[O+N+10]=s.z,A[O+N+11]=F.itemSize===4?s.w:1)}}f={count:l,texture:w,size:new ee(y,E)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<u.length;_++)p+=u[_];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Gv(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const xm=new on,Eh=new hm(1,1),vm=new Zp,ym=new D0,Mm=new sm,Th=[],wh=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Ih=new Float32Array(4);function dr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Th[s];if(r===void 0&&(r=new Float32Array(s),Th[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function an(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function cn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Na(i,t){let e=wh[t];e===void 0&&(e=new Int32Array(t),wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2fv(this.addr,t),cn(e,t)}}function Vv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;i.uniform3fv(this.addr,t),cn(e,t)}}function Wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4fv(this.addr,t),cn(e,t)}}function jv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(an(e,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),cn(e,n)}}function Xv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(an(e,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),cn(e,n)}}function qv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(an(e,n))return;Rh.set(n),i.uniformMatrix4fv(this.addr,!1,Rh),cn(e,n)}}function Kv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $v(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2iv(this.addr,t),cn(e,t)}}function Yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3iv(this.addr,t),cn(e,t)}}function Zv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4iv(this.addr,t),cn(e,t)}}function Jv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;i.uniform2uiv(this.addr,t),cn(e,t)}}function ty(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;i.uniform3uiv(this.addr,t),cn(e,t)}}function ey(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;i.uniform4uiv(this.addr,t),cn(e,t)}}function ny(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eh.compareFunction=515,r=Eh):r=xm,e.setTexture2D(t||r,s)}function iy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ym,s)}function sy(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mm,s)}function ry(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vm,s)}function oy(i){switch(i){case 5126:return zv;case 35664:return Hv;case 35665:return Vv;case 35666:return Wv;case 35674:return jv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Kv;case 35667:case 35671:return $v;case 35668:case 35672:return Yv;case 35669:case 35673:return Zv;case 5125:return Jv;case 36294:return Qv;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function ay(i,t){i.uniform1fv(this.addr,t)}function cy(i,t){const e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function ly(i,t){const e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function uy(i,t){const e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function hy(i,t){const e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fy(i,t){const e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dy(i,t){const e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function py(i,t){i.uniform1iv(this.addr,t)}function my(i,t){i.uniform2iv(this.addr,t)}function gy(i,t){i.uniform3iv(this.addr,t)}function _y(i,t){i.uniform4iv(this.addr,t)}function by(i,t){i.uniform1uiv(this.addr,t)}function xy(i,t){i.uniform2uiv(this.addr,t)}function vy(i,t){i.uniform3uiv(this.addr,t)}function yy(i,t){i.uniform4uiv(this.addr,t)}function My(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xm,r[o])}function Sy(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ym,r[o])}function Ay(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mm,r[o])}function Ey(i,t,e){const n=this.cache,s=t.length,r=Na(e,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vm,r[o])}function Ty(i){switch(i){case 5126:return ay;case 35664:return cy;case 35665:return ly;case 35666:return uy;case 35674:return hy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return by;case 36294:return xy;case 36295:return vy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ey}}class wy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=oy(e.type)}}class Ry{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ty(e.type)}}class Cy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Ph(i,t){i.seq.push(t),i.map[t.id]=t}function Iy(i,t,e){const n=i.name,s=n.length;for(Ac.lastIndex=0;;){const r=Ac.exec(n),o=Ac.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Ph(e,u===void 0?new wy(a,i,t):new Ry(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new Cy(a),Ph(e,l)),e=l}}}class aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Iy(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Lh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Py=37297;let Ly=0;function Dy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Dh=new ye;function Fy(i){Pe._getMatrix(Dh,Pe.workingColorSpace,i);const t=`mat3( ${Dh.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(i)){case ma:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dy(i.getShaderSource(t),o)}else return s}function Ny(i,t){const e=Fy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Uy(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new W;function ky(){Pe.getLuminanceCoefficients(Fo);const i=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Oy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function By(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Br(i){return i!==""}function Nh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(i){return i.replace(zy,Vy)}const Hy=new Map;function Vy(i,t){let e=Me[t];if(e===void 0){const n=Hy.get(t);if(n!==void 0)e=Me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ml(e)}const Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(i){return i.replace(Wy,jy)}function jy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Xy(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function qy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ky(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function $y(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Yy(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Xy(e),u=qy(e),h=Ky(e),l=$y(e),f=Yy(e),p=Oy(e),g=By(r),_=s.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Br).join(`
`),d.length>0&&(d+=`
`)):(m=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),d=[Oh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Me.tonemapping_pars_fragment:"",e.toneMapping!==0?Uy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,Ny("linearToOutputTexel",e.outputColorSpace),ky(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Br).join(`
`)),o=Ml(o),o=Nh(o,e),o=Uh(o,e),a=Ml(a),a=Nh(a,e),a=Uh(a,e),o=kh(o),a=kh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+m+o,y=v+d+a,E=Lh(s,s.VERTEX_SHADER,M),A=Lh(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(E).trim(),O=s.getShaderInfoLog(A).trim();let G=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,A);else{const V=Fh(s,E,"vertex"),B=Fh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+V+`
`+B)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||O==="")&&(N=!1);N&&(L.diagnostics={runnable:G,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:O,prefix:d}})}s.deleteShader(E),s.deleteShader(A),C=new aa(s,_),T=Gy(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Py)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ly++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}let Jy=0;class Qy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tM(t),e.set(t,n)),n}}class tM{constructor(t){this.id=Jy++,this.code=t,this.usedTimes=0}}function eM(i,t,e,n,s,r,o){const a=new Jp,c=new Qy,u=new Set,h=[],l=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,L,H,F){const O=H.fog,G=F.geometry,N=T.isMeshStandardMaterial?H.environment:null,V=(T.isMeshStandardMaterial?e:t).get(T.envMap||N),B=V&&V.mapping===306?V.image.height:null,J=g[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Z=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,lt=Z!==void 0?Z.length:0;let St=0;G.morphAttributes.position!==void 0&&(St=1),G.morphAttributes.normal!==void 0&&(St=2),G.morphAttributes.color!==void 0&&(St=3);let kt,rt,_t,ot;if(J){const Ae=In[J];kt=Ae.vertexShader,rt=Ae.fragmentShader}else kt=T.vertexShader,rt=T.fragmentShader,c.update(T),_t=c.getVertexShaderID(T),ot=c.getFragmentShaderID(T);const j=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,qt=!!T.map,jt=!!T.matcap,ce=!!V,X=!!T.aoMap,be=!!T.lightMap,se=!!T.bumpMap,Qt=!!T.normalMap,Ot=!!T.displacementMap,me=!!T.emissiveMap,wt=!!T.metalnessMap,D=!!T.roughnessMap,R=T.anisotropy>0,q=T.clearcoat>0,st=T.dispersion>0,vt=T.iridescence>0,tt=T.sheen>0,Ft=T.transmission>0,At=R&&!!T.anisotropyMap,Nt=q&&!!T.clearcoatMap,fe=q&&!!T.clearcoatNormalMap,Rt=q&&!!T.clearcoatRoughnessMap,Ht=vt&&!!T.iridescenceMap,Kt=vt&&!!T.iridescenceThicknessMap,Yt=tt&&!!T.sheenColorMap,Vt=tt&&!!T.sheenRoughnessMap,ge=!!T.specularMap,Lt=!!T.specularColorMap,Et=!!T.specularIntensityMap,Y=Ft&&!!T.transmissionMap,Ut=Ft&&!!T.thicknessMap,ut=!!T.gradientMap,yt=!!T.alphaMap,Bt=T.alphaTest>0,Gt=!!T.alphaHash,ne=!!T.extensions;let xe=0;T.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Fe={shaderID:J,shaderType:T.type,shaderName:T.name,vertexShader:kt,fragmentShader:rt,defines:T.defines,customVertexShaderID:_t,customFragmentShaderID:ot,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:wn,alphaToCoverage:!!T.alphaToCoverage,map:qt,matcap:jt,envMap:ce,envMapMode:ce&&V.mapping,envMapCubeUVHeight:B,aoMap:X,lightMap:be,bumpMap:se,normalMap:Qt,displacementMap:f&&Ot,emissiveMap:me,normalMapObjectSpace:Qt&&T.normalMapType===1,normalMapTangentSpace:Qt&&T.normalMapType===0,metalnessMap:wt,roughnessMap:D,anisotropy:R,anisotropyMap:At,clearcoat:q,clearcoatMap:Nt,clearcoatNormalMap:fe,clearcoatRoughnessMap:Rt,dispersion:st,iridescence:vt,iridescenceMap:Ht,iridescenceThicknessMap:Kt,sheen:tt,sheenColorMap:Yt,sheenRoughnessMap:Vt,specularMap:ge,specularColorMap:Lt,specularIntensityMap:Et,transmission:Ft,transmissionMap:Y,thicknessMap:Ut,gradientMap:ut,opaque:T.transparent===!1&&T.blending===1&&T.alphaToCoverage===!1,alphaMap:yt,alphaTest:Bt,alphaHash:Gt,combine:T.combine,mapUv:qt&&_(T.map.channel),aoMapUv:X&&_(T.aoMap.channel),lightMapUv:be&&_(T.lightMap.channel),bumpMapUv:se&&_(T.bumpMap.channel),normalMapUv:Qt&&_(T.normalMap.channel),displacementMapUv:Ot&&_(T.displacementMap.channel),emissiveMapUv:me&&_(T.emissiveMap.channel),metalnessMapUv:wt&&_(T.metalnessMap.channel),roughnessMapUv:D&&_(T.roughnessMap.channel),anisotropyMapUv:At&&_(T.anisotropyMap.channel),clearcoatMapUv:Nt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&_(T.sheenRoughnessMap.channel),specularMapUv:ge&&_(T.specularMap.channel),specularColorMapUv:Lt&&_(T.specularColorMap.channel),specularIntensityMapUv:Et&&_(T.specularIntensityMap.channel),transmissionMapUv:Y&&_(T.transmissionMap.channel),thicknessMapUv:Ut&&_(T.thicknessMap.channel),alphaMapUv:yt&&_(T.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Qt||R),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(qt||yt),fog:!!O,useFog:T.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:bt,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:qt&&T.map.isVideoTexture===!0&&Pe.getTransfer(T.map.colorSpace)===je,decodeVideoTextureEmissive:me&&T.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(T.emissiveMap.colorSpace)===je,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===2,flipSided:T.side===1,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ne&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&T.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Fe.vertexUv1s=u.has(1),Fe.vertexUv2s=u.has(2),Fe.vertexUv3s=u.has(3),u.clear(),Fe}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(v(S,T),M(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=g[T.type];let L;if(S){const H=In[S];L=Wl.clone(H.uniforms)}else L=T.uniforms;return L}function E(T,S){let L;for(let H=0,F=h.length;H<F;H++){const O=h[H];if(O.cacheKey===S){L=O,++L.usedTimes;break}}return L===void 0&&(L=new Zy(i,S,T,r),h.push(L)),L}function A(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function w(T){c.remove(T)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function nM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:l.id,object:l,geometry:f,material:p,groupOrder:g,renderOrder:l.renderOrder,z:_,group:m},i[t]=d):(d.id=l.id,d.object=l,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=l.renderOrder,d.z=_,d.group=m),t++,d}function a(l,f,p,g,_,m){const d=o(l,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(l,f,p,g,_,m){const d=o(l,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function u(l,f){e.length>1&&e.sort(l||iM),n.length>1&&n.sort(f||Bh),s.length>1&&s.sort(f||Bh)}function h(){for(let l=t,f=i.length;l<f;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function sM(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Gh,i.set(n,[o])):s>=r.length?(o=new Gh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function rM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new ie};break;case"SpotLight":e={position:new W,direction:new W,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function oM(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let aM=0;function cM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function lM(i){const t=new rM,e=oM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new W);const s=new W,r=new he,o=new he;function a(u){let h=0,l=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,M=0,y=0,E=0,A=0,w=0;u.sort(cM);for(let T=0,S=u.length;T<S;T++){const L=u[T],H=L.color,F=L.intensity,O=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=H.r*F,l+=H.g*F,f+=H.b*F;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],F);w++}else if(L.isDirectionalLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const V=L.shadow,B=e.get(L);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.directionalShadow[p]=B,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=N,p++}else if(L.isSpotLight){const N=t.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(H).multiplyScalar(F),N.distance=O,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[_]=N;const V=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,V.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=V.matrix,L.castShadow){const B=e.get(L);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=G,y++}_++}else if(L.isRectAreaLight){const N=t.get(L);N.color.copy(H).multiplyScalar(F),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=N,m++}else if(L.isPointLight){const N=t.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){const V=L.shadow,B=e.get(L);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=N,g++}else if(L.isHemisphereLight){const N=t.get(L);N.skyColor.copy(L.color).multiplyScalar(F),N.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[d]=N,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==y||C.numSpotMaps!==E||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=y,C.numSpotMaps=E,C.numLightProbes=w,n.version=aM++)}function c(u,h){let l=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const M=u[d];if(M.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),l++}else if(M.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function zh(i){const t=new lM(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function uM(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zh(i),t.set(s,[a])):r>=o.length?(a=new zh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`;function dM(i,t,e){let n=new Kl;const s=new ee,r=new ee,o=new Se,a=new a_({depthPacking:3201}),c=new c_,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:hM,fragmentShader:fM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let d=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),H=i.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=d!==3&&this.type===3,O=d===3&&this.type!==3;for(let G=0,N=A.length;G<N;G++){const V=A[G],B=V.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();if(s.multiply(J),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||F===!0||O===!0){const lt=this.type!==3?{minFilter:1003,magFilter:1003}:{};B.map!==null&&B.map.dispose(),B.map=new ys(s.x,s.y,lt),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const Z=B.getViewportCount();for(let lt=0;lt<Z;lt++){const St=B.getViewport(lt);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),H.viewport(o),B.updateMatrices(V,lt),n=B.getFrustum(),y(w,C,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===3&&v(B,C),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(T,S,L)};function v(A,w){const C=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ys(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,C,p,_,null)}function M(A,w,C,T){let S=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=C.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,F=w.uuid;let O=u[H];O===void 0&&(O={},u[H]=O);let G=O[F];G===void 0&&(G=S.clone(),O[F]=G,w.addEventListener("dispose",E)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,T===3?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:l[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=i.properties.get(S);H.light=C}return S}function y(A,w,C,T,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===3)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=t.update(A),O=A.material;if(Array.isArray(O)){const G=F.groups;for(let N=0,V=G.length;N<V;N++){const B=G[N],J=O[B.materialIndex];if(J&&J.visible){const Z=M(A,J,T,S);A.onBeforeShadow(i,A,w,C,F,Z,B),i.renderBufferDirect(C,null,F,Z,A,B),A.onAfterShadow(i,A,w,C,F,Z,B)}}}else if(O.visible){const G=M(A,O,T,S);A.onBeforeShadow(i,A,w,C,F,G,null),i.renderBufferDirect(C,null,F,G,A,null),A.onAfterShadow(i,A,w,C,F,G,null)}}const H=A.children;for(let F=0,O=H.length;F<O;F++)y(H[F],w,C,T,S)}function E(A){A.target.removeEventListener("dispose",E);for(const C in u){const T=u[C],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const pM={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function mM(i,t){function e(){let Y=!1;const Ut=new Se;let ut=null;const yt=new Se(0,0,0,0);return{setMask:function(Bt){ut!==Bt&&!Y&&(i.colorMask(Bt,Bt,Bt,Bt),ut=Bt)},setLocked:function(Bt){Y=Bt},setClear:function(Bt,Gt,ne,xe,Fe){Fe===!0&&(Bt*=xe,Gt*=xe,ne*=xe),Ut.set(Bt,Gt,ne,xe),yt.equals(Ut)===!1&&(i.clearColor(Bt,Gt,ne,xe),yt.copy(Ut))},reset:function(){Y=!1,ut=null,yt.set(-1,0,0,0)}}}function n(){let Y=!1,Ut=!1,ut=null,yt=null,Bt=null;return{setReversed:function(Gt){if(Ut!==Gt){const ne=t.get("EXT_clip_control");Ut?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const xe=Bt;Bt=null,this.setClear(xe)}Ut=Gt},getReversed:function(){return Ut},setTest:function(Gt){Gt?j(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Gt){ut!==Gt&&!Y&&(i.depthMask(Gt),ut=Gt)},setFunc:function(Gt){if(Ut&&(Gt=pM[Gt]),yt!==Gt){switch(Gt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Gt}},setLocked:function(Gt){Y=Gt},setClear:function(Gt){Bt!==Gt&&(Ut&&(Gt=1-Gt),i.clearDepth(Gt),Bt=Gt)},reset:function(){Y=!1,ut=null,yt=null,Bt=null,Ut=!1}}}function s(){let Y=!1,Ut=null,ut=null,yt=null,Bt=null,Gt=null,ne=null,xe=null,Fe=null;return{setTest:function(Ae){Y||(Ae?j(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!Y&&(i.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,ln,un){(ut!==Ae||yt!==ln||Bt!==un)&&(i.stencilFunc(Ae,ln,un),ut=Ae,yt=ln,Bt=un)},setOp:function(Ae,ln,un){(Gt!==Ae||ne!==ln||xe!==un)&&(i.stencilOp(Ae,ln,un),Gt=Ae,ne=ln,xe=un)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){Fe!==Ae&&(i.clearStencil(Ae),Fe=Ae)},reset:function(){Y=!1,Ut=null,ut=null,yt=null,Bt=null,Gt=null,ne=null,xe=null,Fe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,M=null,y=null,E=null,A=null,w=new ie(0,0,0),C=0,T=!1,S=null,L=null,H=null,F=null,O=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,V=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),N=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),N=V>=2);let J=null,Z={};const lt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),kt=new Se().fromArray(lt),rt=new Se().fromArray(St);function _t(Y,Ut,ut,yt){const Bt=new Uint8Array(4),Gt=i.createTexture();i.bindTexture(Y,Gt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<ut;ne++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(Ut+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Gt}const ot={};ot[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(3),se(!1),Qt(1),j(i.CULL_FACE),X(0);function j(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function bt(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function It(Y,Ut){return l[Y]!==Ut?(i.bindFramebuffer(Y,Ut),l[Y]=Ut,Y===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Ut),Y===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Dt(Y,Ut){let ut=p,yt=!1;if(Y){ut=f.get(Ut),ut===void 0&&(ut=[],f.set(Ut,ut));const Bt=Y.textures;if(ut.length!==Bt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Gt=0,ne=Bt.length;Gt<ne;Gt++)ut[Gt]=i.COLOR_ATTACHMENT0+Gt;ut.length=Bt.length,yt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ut)}function qt(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}const jt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};jt[103]=i.MIN,jt[104]=i.MAX;const ce={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function X(Y,Ut,ut,yt,Bt,Gt,ne,xe,Fe,Ae){if(Y===0){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),Y!==5){if(Y!==m||Ae!==T){if((d!==100||y!==100)&&(i.blendEquation(i.FUNC_ADD),d=100,y=100),Ae)switch(Y){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}v=null,M=null,E=null,A=null,w.set(0,0,0),C=0,m=Y,T=Ae}return}Bt=Bt||Ut,Gt=Gt||ut,ne=ne||yt,(Ut!==d||Bt!==y)&&(i.blendEquationSeparate(jt[Ut],jt[Bt]),d=Ut,y=Bt),(ut!==v||yt!==M||Gt!==E||ne!==A)&&(i.blendFuncSeparate(ce[ut],ce[yt],ce[Gt],ce[ne]),v=ut,M=yt,E=Gt,A=ne),(xe.equals(w)===!1||Fe!==C)&&(i.blendColor(xe.r,xe.g,xe.b,Fe),w.copy(xe),C=Fe),m=Y,T=!1}function be(Y,Ut){Y.side===2?bt(i.CULL_FACE):j(i.CULL_FACE);let ut=Y.side===1;Ut&&(ut=!ut),se(ut),Y.blending===1&&Y.transparent===!1?X(0):X(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const yt=Y.stencilWrite;a.setTest(yt),yt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),me(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(Y){S!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),S=Y)}function Qt(Y){Y!==0?(j(i.CULL_FACE),Y!==L&&(Y===1?i.cullFace(i.BACK):Y===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=Y}function Ot(Y){Y!==H&&(N&&i.lineWidth(Y),H=Y)}function me(Y,Ut,ut){Y?(j(i.POLYGON_OFFSET_FILL),(F!==Ut||O!==ut)&&(i.polygonOffset(Ut,ut),F=Ut,O=ut)):bt(i.POLYGON_OFFSET_FILL)}function wt(Y){Y?j(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function D(Y){Y===void 0&&(Y=i.TEXTURE0+G-1),J!==Y&&(i.activeTexture(Y),J=Y)}function R(Y,Ut,ut){ut===void 0&&(J===null?ut=i.TEXTURE0+G-1:ut=J);let yt=Z[ut];yt===void 0&&(yt={type:void 0,texture:void 0},Z[ut]=yt),(yt.type!==Y||yt.texture!==Ut)&&(J!==ut&&(i.activeTexture(ut),J=ut),i.bindTexture(Y,Ut||ot[Y]),yt.type=Y,yt.texture=Ut)}function q(){const Y=Z[J];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Rt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(Y){kt.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),kt.copy(Y))}function Vt(Y){rt.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),rt.copy(Y))}function ge(Y,Ut){let ut=u.get(Ut);ut===void 0&&(ut=new WeakMap,u.set(Ut,ut));let yt=ut.get(Y);yt===void 0&&(yt=i.getUniformBlockIndex(Ut,Y.name),ut.set(Y,yt))}function Lt(Y,Ut){const yt=u.get(Ut).get(Y);c.get(Ut)!==yt&&(i.uniformBlockBinding(Ut,yt,Y.__bindingPointIndex),c.set(Ut,yt))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},J=null,Z={},l={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,M=null,y=null,E=null,A=null,w=new ie(0,0,0),C=0,T=!1,S=null,L=null,H=null,F=null,O=null,kt.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:bt,bindFramebuffer:It,drawBuffers:Dt,useProgram:qt,setBlending:X,setMaterial:be,setFlipSided:se,setCullFace:Qt,setLineWidth:Ot,setPolygonOffset:me,setScissorTest:wt,activeTexture:D,bindTexture:R,unbindTexture:q,compressedTexImage2D:st,compressedTexImage3D:vt,texImage2D:Ht,texImage3D:Kt,updateUBOMapping:ge,uniformBlockBinding:Lt,texStorage2D:fe,texStorage3D:Rt,texSubImage2D:tt,texSubImage3D:Ft,compressedTexSubImage2D:At,compressedTexSubImage3D:Nt,scissor:Yt,viewport:Vt,reset:Et}}function gM(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ee,h=new WeakMap;let l;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return p?new OffscreenCanvas(D,R):Xr("canvas")}function _(D,R,q){let st=1;const vt=wt(D);if((vt.width>q||vt.height>q)&&(st=q/Math.max(vt.width,vt.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const tt=Math.floor(st*vt.width),Ft=Math.floor(st*vt.height);l===void 0&&(l=g(tt,Ft));const At=R?g(tt,Ft):l;return At.width=tt,At.height=Ft,At.getContext("2d").drawImage(D,0,0,tt,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+tt+"x"+Ft+")."),At}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function m(D){return D.generateMipmaps}function d(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(D,R,q,st,vt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let tt=R;if(R===i.RED&&(q===i.FLOAT&&(tt=i.R32F),q===i.HALF_FLOAT&&(tt=i.R16F),q===i.UNSIGNED_BYTE&&(tt=i.R8)),R===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.R8UI),q===i.UNSIGNED_SHORT&&(tt=i.R16UI),q===i.UNSIGNED_INT&&(tt=i.R32UI),q===i.BYTE&&(tt=i.R8I),q===i.SHORT&&(tt=i.R16I),q===i.INT&&(tt=i.R32I)),R===i.RG&&(q===i.FLOAT&&(tt=i.RG32F),q===i.HALF_FLOAT&&(tt=i.RG16F),q===i.UNSIGNED_BYTE&&(tt=i.RG8)),R===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RG8UI),q===i.UNSIGNED_SHORT&&(tt=i.RG16UI),q===i.UNSIGNED_INT&&(tt=i.RG32UI),q===i.BYTE&&(tt=i.RG8I),q===i.SHORT&&(tt=i.RG16I),q===i.INT&&(tt=i.RG32I)),R===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),q===i.UNSIGNED_INT&&(tt=i.RGB32UI),q===i.BYTE&&(tt=i.RGB8I),q===i.SHORT&&(tt=i.RGB16I),q===i.INT&&(tt=i.RGB32I)),R===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),q===i.UNSIGNED_INT&&(tt=i.RGBA32UI),q===i.BYTE&&(tt=i.RGBA8I),q===i.SHORT&&(tt=i.RGBA16I),q===i.INT&&(tt=i.RGBA32I)),R===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),R===i.RGBA){const Ft=vt?ma:Pe.getTransfer(st);q===i.FLOAT&&(tt=i.RGBA32F),q===i.HALF_FLOAT&&(tt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(tt=Ft===je?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(D,R){let q;return D?R===null||R===1014||R===1020?q=i.DEPTH24_STENCIL8:R===1015?q=i.DEPTH32F_STENCIL8:R===1012&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===1014||R===1020?q=i.DEPTH_COMPONENT24:R===1015?q=i.DEPTH_COMPONENT32F:R===1012&&(q=i.DEPTH_COMPONENT16),q}function E(D,R){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==1003&&D.minFilter!==1006?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function A(D){const R=D.target;R.removeEventListener("dispose",A),C(R),R.isVideoTexture&&h.delete(R)}function w(D){const R=D.target;R.removeEventListener("dispose",w),S(R)}function C(D){const R=n.get(D);if(R.__webglInit===void 0)return;const q=D.source,st=f.get(q);if(st){const vt=st[R.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(D),Object.keys(st).length===0&&f.delete(q)}n.remove(D)}function T(D){const R=n.get(D);i.deleteTexture(R.__webglTexture);const q=D.source,st=f.get(q);delete st[R.__cacheKey],o.memory.textures--}function S(D){const R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(R.__webglFramebuffer[st]))for(let vt=0;vt<R.__webglFramebuffer[st].length;vt++)i.deleteFramebuffer(R.__webglFramebuffer[st][vt]);else i.deleteFramebuffer(R.__webglFramebuffer[st]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[st])}else{if(Array.isArray(R.__webglFramebuffer))for(let st=0;st<R.__webglFramebuffer.length;st++)i.deleteFramebuffer(R.__webglFramebuffer[st]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let st=0;st<R.__webglColorRenderbuffer.length;st++)R.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[st]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const q=D.textures;for(let st=0,vt=q.length;st<vt;st++){const tt=n.get(q[st]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(q[st])}n.remove(D)}let L=0;function H(){L=0}function F(){const D=L;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function O(D){const R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function G(D,R){const q=n.get(D);if(D.isVideoTexture&&Ot(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const st=D.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(q,D,R);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+R)}function N(D,R){const q=n.get(D);if(D.version>0&&q.__version!==D.version){rt(q,D,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+R)}function V(D,R){const q=n.get(D);if(D.version>0&&q.__version!==D.version){rt(q,D,R);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+R)}function B(D,R){const q=n.get(D);if(D.version>0&&q.__version!==D.version){_t(q,D,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+R)}const J={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Z={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},lt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function St(D,R){if(R.type===1015&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===1006||R.magFilter===1007||R.magFilter===1005||R.magFilter===1008||R.minFilter===1006||R.minFilter===1007||R.minFilter===1005||R.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,J[R.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,J[R.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,J[R.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Z[R.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Z[R.minFilter]),R.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,lt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===1003||R.minFilter!==1005&&R.minFilter!==1008||R.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function kt(D,R){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",A));const st=R.source;let vt=f.get(st);vt===void 0&&(vt={},f.set(st,vt));const tt=O(R);if(tt!==D.__cacheKey){vt[tt]===void 0&&(vt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),vt[tt].usedTimes++;const Ft=vt[D.__cacheKey];Ft!==void 0&&(vt[D.__cacheKey].usedTimes--,Ft.usedTimes===0&&T(R)),D.__cacheKey=tt,D.__webglTexture=vt[tt].texture}return q}function rt(D,R,q){let st=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(st=i.TEXTURE_3D);const vt=kt(D,R),tt=R.source;e.bindTexture(st,D.__webglTexture,i.TEXTURE0+q);const Ft=n.get(tt);if(tt.version!==Ft.__version||vt===!0){e.activeTexture(i.TEXTURE0+q);const At=Pe.getPrimaries(Pe.workingColorSpace),Nt=R.colorSpace===""?null:Pe.getPrimaries(R.colorSpace),fe=R.colorSpace===""||At===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Rt=_(R.image,!1,s.maxTextureSize);Rt=me(R,Rt);const Ht=r.convert(R.format,R.colorSpace),Kt=r.convert(R.type);let Yt=M(R.internalFormat,Ht,Kt,R.colorSpace,R.isVideoTexture);St(st,R);let Vt;const ge=R.mipmaps,Lt=R.isVideoTexture!==!0,Et=Ft.__version===void 0||vt===!0,Y=tt.dataReady,Ut=E(R,Rt);if(R.isDepthTexture)Yt=y(R.format===1027,R.type),Et&&(Lt?e.texStorage2D(i.TEXTURE_2D,1,Yt,Rt.width,Rt.height):e.texImage2D(i.TEXTURE_2D,0,Yt,Rt.width,Rt.height,0,Ht,Kt,null));else if(R.isDataTexture)if(ge.length>0){Lt&&Et&&e.texStorage2D(i.TEXTURE_2D,Ut,Yt,ge[0].width,ge[0].height);for(let ut=0,yt=ge.length;ut<yt;ut++)Vt=ge[ut],Lt?Y&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Vt.width,Vt.height,Ht,Kt,Vt.data):e.texImage2D(i.TEXTURE_2D,ut,Yt,Vt.width,Vt.height,0,Ht,Kt,Vt.data);R.generateMipmaps=!1}else Lt?(Et&&e.texStorage2D(i.TEXTURE_2D,Ut,Yt,Rt.width,Rt.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Ht,Kt,Rt.data)):e.texImage2D(i.TEXTURE_2D,0,Yt,Rt.width,Rt.height,0,Ht,Kt,Rt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Lt&&Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Yt,ge[0].width,ge[0].height,Rt.depth);for(let ut=0,yt=ge.length;ut<yt;ut++)if(Vt=ge[ut],R.format!==1023)if(Ht!==null)if(Lt){if(Y)if(R.layerUpdates.size>0){const Bt=_h(Vt.width,Vt.height,R.format,R.type);for(const Gt of R.layerUpdates){const ne=Vt.data.subarray(Gt*Bt/Vt.data.BYTES_PER_ELEMENT,(Gt+1)*Bt/Vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Gt,Vt.width,Vt.height,1,Ht,ne)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Vt.width,Vt.height,Rt.depth,Ht,Vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Yt,Vt.width,Vt.height,Rt.depth,0,Vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Vt.width,Vt.height,Rt.depth,Ht,Kt,Vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Yt,Vt.width,Vt.height,Rt.depth,0,Ht,Kt,Vt.data)}else{Lt&&Et&&e.texStorage2D(i.TEXTURE_2D,Ut,Yt,ge[0].width,ge[0].height);for(let ut=0,yt=ge.length;ut<yt;ut++)Vt=ge[ut],R.format!==1023?Ht!==null?Lt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Vt.width,Vt.height,Ht,Vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Yt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?Y&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Vt.width,Vt.height,Ht,Kt,Vt.data):e.texImage2D(i.TEXTURE_2D,ut,Yt,Vt.width,Vt.height,0,Ht,Kt,Vt.data)}else if(R.isDataArrayTexture)if(Lt){if(Et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ut,Yt,Rt.width,Rt.height,Rt.depth),Y)if(R.layerUpdates.size>0){const ut=_h(Rt.width,Rt.height,R.format,R.type);for(const yt of R.layerUpdates){const Bt=Rt.data.subarray(yt*ut/Rt.data.BYTES_PER_ELEMENT,(yt+1)*ut/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,Rt.width,Rt.height,1,Ht,Kt,Bt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Kt,Rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Yt,Rt.width,Rt.height,Rt.depth,0,Ht,Kt,Rt.data);else if(R.isData3DTexture)Lt?(Et&&e.texStorage3D(i.TEXTURE_3D,Ut,Yt,Rt.width,Rt.height,Rt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Kt,Rt.data)):e.texImage3D(i.TEXTURE_3D,0,Yt,Rt.width,Rt.height,Rt.depth,0,Ht,Kt,Rt.data);else if(R.isFramebufferTexture){if(Et)if(Lt)e.texStorage2D(i.TEXTURE_2D,Ut,Yt,Rt.width,Rt.height);else{let ut=Rt.width,yt=Rt.height;for(let Bt=0;Bt<Ut;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,Yt,ut,yt,0,Ht,Kt,null),ut>>=1,yt>>=1}}else if(ge.length>0){if(Lt&&Et){const ut=wt(ge[0]);e.texStorage2D(i.TEXTURE_2D,Ut,Yt,ut.width,ut.height)}for(let ut=0,yt=ge.length;ut<yt;ut++)Vt=ge[ut],Lt?Y&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Ht,Kt,Vt):e.texImage2D(i.TEXTURE_2D,ut,Yt,Ht,Kt,Vt);R.generateMipmaps=!1}else if(Lt){if(Et){const ut=wt(Rt);e.texStorage2D(i.TEXTURE_2D,Ut,Yt,ut.width,ut.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ht,Kt,Rt)}else e.texImage2D(i.TEXTURE_2D,0,Yt,Ht,Kt,Rt);m(R)&&d(st),Ft.__version=tt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function _t(D,R,q){if(R.image.length!==6)return;const st=kt(D,R),vt=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const tt=n.get(vt);if(vt.version!==tt.__version||st===!0){e.activeTexture(i.TEXTURE0+q);const Ft=Pe.getPrimaries(Pe.workingColorSpace),At=R.colorSpace===""?null:Pe.getPrimaries(R.colorSpace),Nt=R.colorSpace===""||Ft===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const fe=R.isCompressedTexture||R.image[0].isCompressedTexture,Rt=R.image[0]&&R.image[0].isDataTexture,Ht=[];for(let yt=0;yt<6;yt++)!fe&&!Rt?Ht[yt]=_(R.image[yt],!0,s.maxCubemapSize):Ht[yt]=Rt?R.image[yt].image:R.image[yt],Ht[yt]=me(R,Ht[yt]);const Kt=Ht[0],Yt=r.convert(R.format,R.colorSpace),Vt=r.convert(R.type),ge=M(R.internalFormat,Yt,Vt,R.colorSpace),Lt=R.isVideoTexture!==!0,Et=tt.__version===void 0||st===!0,Y=vt.dataReady;let Ut=E(R,Kt);St(i.TEXTURE_CUBE_MAP,R);let ut;if(fe){Lt&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,ge,Kt.width,Kt.height);for(let yt=0;yt<6;yt++){ut=Ht[yt].mipmaps;for(let Bt=0;Bt<ut.length;Bt++){const Gt=ut[Bt];R.format!==1023?Yt!==null?Lt?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,Gt.width,Gt.height,Yt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,ge,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,Gt.width,Gt.height,Yt,Vt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,ge,Gt.width,Gt.height,0,Yt,Vt,Gt.data)}}}else{if(ut=R.mipmaps,Lt&&Et){ut.length>0&&Ut++;const yt=wt(Ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,ge,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Rt){Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ht[yt].width,Ht[yt].height,Yt,Vt,Ht[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ge,Ht[yt].width,Ht[yt].height,0,Yt,Vt,Ht[yt].data);for(let Bt=0;Bt<ut.length;Bt++){const ne=ut[Bt].image[yt].image;Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,ne.width,ne.height,Yt,Vt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,ge,ne.width,ne.height,0,Yt,Vt,ne.data)}}else{Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Yt,Vt,Ht[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ge,Yt,Vt,Ht[yt]);for(let Bt=0;Bt<ut.length;Bt++){const Gt=ut[Bt];Lt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,Yt,Vt,Gt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,ge,Yt,Vt,Gt.image[yt])}}}m(R)&&d(i.TEXTURE_CUBE_MAP),tt.__version=vt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function ot(D,R,q,st,vt,tt){const Ft=r.convert(q.format,q.colorSpace),At=r.convert(q.type),Nt=M(q.internalFormat,Ft,At,q.colorSpace),fe=n.get(R),Rt=n.get(q);if(Rt.__renderTarget=R,!fe.__hasExternalTextures){const Ht=Math.max(1,R.width>>tt),Kt=Math.max(1,R.height>>tt);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,tt,Nt,Ht,Kt,R.depth,0,Ft,At,null):e.texImage2D(vt,tt,Nt,Ht,Kt,0,Ft,At,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Qt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,vt,Rt.__webglTexture,0,se(R)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,vt,Rt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function j(D,R,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),R.depthBuffer){const st=R.depthTexture,vt=st&&st.isDepthTexture?st.type:null,tt=y(R.stencilBuffer,vt),Ft=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=se(R);Qt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,tt,R.width,R.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,tt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,tt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,D)}else{const st=R.textures;for(let vt=0;vt<st.length;vt++){const tt=st[vt],Ft=r.convert(tt.format,tt.colorSpace),At=r.convert(tt.type),Nt=M(tt.internalFormat,Ft,At,tt.colorSpace),fe=se(R);q&&Qt(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Nt,R.width,R.height):Qt(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Nt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(R.depthTexture);st.__renderTarget=R,(!st.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),G(R.depthTexture,0);const vt=st.__webglTexture,tt=se(R);if(R.depthTexture.format===1026)Qt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(R.depthTexture.format===1027)Qt(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function It(D){const R=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){const st=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),st){const vt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,st.removeEventListener("dispose",vt)};st.addEventListener("dispose",vt),R.__depthDisposeCallback=vt}R.__boundDepthTexture=st}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");bt(R.__webglFramebuffer,D)}else if(q){R.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[st]),R.__webglDepthbuffer[st]===void 0)R.__webglDepthbuffer[st]=i.createRenderbuffer(),j(R.__webglDepthbuffer[st],D,!1);else{const vt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=R.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),j(R.__webglDepthbuffer,D,!1);else{const st=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(D,R,q){const st=n.get(D);R!==void 0&&ot(st.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&It(D)}function qt(D){const R=D.texture,q=n.get(D),st=n.get(R);D.addEventListener("dispose",w);const vt=D.textures,tt=D.isWebGLCubeRenderTarget===!0,Ft=vt.length>1;if(Ft||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=R.version,o.memory.textures++),tt){q.__webglFramebuffer=[];for(let At=0;At<6;At++)if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[At]=[];for(let Nt=0;Nt<R.mipmaps.length;Nt++)q.__webglFramebuffer[At][Nt]=i.createFramebuffer()}else q.__webglFramebuffer[At]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let At=0;At<R.mipmaps.length;At++)q.__webglFramebuffer[At]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let At=0,Nt=vt.length;At<Nt;At++){const fe=n.get(vt[At]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Qt(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const Nt=vt[At];q.__webglColorRenderbuffer[At]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[At]);const fe=r.convert(Nt.format,Nt.colorSpace),Rt=r.convert(Nt.type),Ht=M(Nt.internalFormat,fe,Rt,Nt.colorSpace,D.isXRRenderTarget===!0),Kt=se(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Ht,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,q.__webglColorRenderbuffer[At])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),j(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),St(i.TEXTURE_CUBE_MAP,R);for(let At=0;At<6;At++)if(R.mipmaps&&R.mipmaps.length>0)for(let Nt=0;Nt<R.mipmaps.length;Nt++)ot(q.__webglFramebuffer[At][Nt],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,Nt);else ot(q.__webglFramebuffer[At],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);m(R)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let At=0,Nt=vt.length;At<Nt;At++){const fe=vt[At],Rt=n.get(fe);e.bindTexture(i.TEXTURE_2D,Rt.__webglTexture),St(i.TEXTURE_2D,fe),ot(q.__webglFramebuffer,D,fe,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,0),m(fe)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let At=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(At=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,st.__webglTexture),St(At,R),R.mipmaps&&R.mipmaps.length>0)for(let Nt=0;Nt<R.mipmaps.length;Nt++)ot(q.__webglFramebuffer[Nt],D,R,i.COLOR_ATTACHMENT0,At,Nt);else ot(q.__webglFramebuffer,D,R,i.COLOR_ATTACHMENT0,At,0);m(R)&&d(At),e.unbindTexture()}D.depthBuffer&&It(D)}function jt(D){const R=D.textures;for(let q=0,st=R.length;q<st;q++){const vt=R[q];if(m(vt)){const tt=v(D),Ft=n.get(vt).__webglTexture;e.bindTexture(tt,Ft),d(tt),e.unbindTexture()}}}const ce=[],X=[];function be(D){if(D.samples>0){if(Qt(D)===!1){const R=D.textures,q=D.width,st=D.height;let vt=i.COLOR_BUFFER_BIT;const tt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(D),At=R.length>1;if(At)for(let Nt=0;Nt<R.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Nt=0;Nt<R.length;Nt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),At){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);const fe=n.get(R[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,q,st,0,0,q,st,vt,i.NEAREST),c===!0&&(ce.length=0,X.length=0,ce.push(i.COLOR_ATTACHMENT0+Nt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ce.push(tt),X.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),At)for(let Nt=0;Nt<R.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Nt]);const fe=n.get(R[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,fe,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const R=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function se(D){return Math.min(s.maxSamples,D.samples)}function Qt(D){const R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ot(D){const R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function me(D,R){const q=D.colorSpace,st=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==wn&&q!==""&&(Pe.getTransfer(q)===je?(st!==1023||vt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}function wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Dt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Qt}function _M(i,t){function e(n,s=""){let r;const o=Pe.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===je)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const bM={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],f=h.position.distanceTo(l.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vM=`
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

}`;class yM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ki({vertexShader:xM,fragmentShader:vM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MM extends Ms{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,f=null,p=null,g=null;const _=new yM,m=e.getContextAttributes();let d=null,v=null;const M=[],y=[],E=new ee;let A=null;const w=new En;w.viewport=new Se;const C=new En;C.viewport=new Se;const T=[w,C],S=new I_;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let _t=M[rt];return _t===void 0&&(_t=new Ec,M[rt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(rt){let _t=M[rt];return _t===void 0&&(_t=new Ec,M[rt]=_t),_t.getGripSpace()},this.getHand=function(rt){let _t=M[rt];return _t===void 0&&(_t=new Ec,M[rt]=_t),_t.getHandSpace()};function F(rt){const _t=y.indexOf(rt.inputSource);if(_t===-1)return;const ot=M[_t];ot!==void 0&&(ot.update(rt.inputSource,rt.frame,u||o),ot.dispatchEvent({type:rt.type,data:rt.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",G);for(let rt=0;rt<M.length;rt++){const _t=y[rt];_t!==null&&(y[rt]=null,M[rt].disconnect(_t))}L=null,H=null,_.reset(),t.setRenderTarget(d),p=null,f=null,l=null,s=null,v=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(rt){u=rt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ys(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let _t=null,ot=null,j=null;m.depth&&(j=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?1027:1026,ot=m.stencil?1020:1014);const bt={colorFormat:e.RGBA8,depthFormat:j,scaleFactor:r};l=new XRWebGLBinding(s,e),f=l.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ys(f.textureWidth,f.textureHeight,{format:1023,type:1009,depthTexture:new hm(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(rt){for(let _t=0;_t<rt.removed.length;_t++){const ot=rt.removed[_t],j=y.indexOf(ot);j>=0&&(y[j]=null,M[j].disconnect(ot))}for(let _t=0;_t<rt.added.length;_t++){const ot=rt.added[_t];let j=y.indexOf(ot);if(j===-1){for(let It=0;It<M.length;It++)if(It>=y.length){y.push(ot),j=It;break}else if(y[It]===null){y[It]=ot,j=It;break}if(j===-1)break}const bt=M[j];bt&&bt.connect(ot)}}const N=new W,V=new W;function B(rt,_t,ot){N.setFromMatrixPosition(_t.matrixWorld),V.setFromMatrixPosition(ot.matrixWorld);const j=N.distanceTo(V),bt=_t.projectionMatrix.elements,It=ot.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),qt=bt[14]/(bt[10]+1),jt=(bt[9]+1)/bt[5],ce=(bt[9]-1)/bt[5],X=(bt[8]-1)/bt[0],be=(It[8]+1)/It[0],se=Dt*X,Qt=Dt*be,Ot=j/(-X+be),me=Ot*-X;if(_t.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(me),rt.translateZ(Ot),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),bt[10]===-1)rt.projectionMatrix.copy(_t.projectionMatrix),rt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const wt=Dt+Ot,D=qt+Ot,R=se-me,q=Qt+(j-me),st=jt*qt/D*wt,vt=ce*qt/D*wt;rt.projectionMatrix.makePerspective(R,q,st,vt,wt,D),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function J(rt,_t){_t===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(_t.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let _t=rt.near,ot=rt.far;_.texture!==null&&(_.depthNear>0&&(_t=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),S.near=C.near=w.near=_t,S.far=C.far=w.far=ot,(L!==S.near||H!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far),w.layers.mask=rt.layers.mask|2,C.layers.mask=rt.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const j=rt.parent,bt=S.cameras;J(S,j);for(let It=0;It<bt.length;It++)J(bt[It],j);bt.length===2?B(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),Z(rt,S,j)};function Z(rt,_t,ot){ot===null?rt.matrix.copy(_t.matrixWorld):(rt.matrix.copy(ot.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(_t.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(_t.projectionMatrix),rt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=sr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(rt){c=rt,f!==null&&(f.fixedFoveation=rt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=rt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let lt=null;function St(rt,_t){if(h=_t.getViewerPose(u||o),g=_t,h!==null){const ot=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let j=!1;ot.length!==S.cameras.length&&(S.cameras.length=0,j=!0);for(let It=0;It<ot.length;It++){const Dt=ot[It];let qt=null;if(p!==null)qt=p.getViewport(Dt);else{const ce=l.getViewSubImage(f,Dt);qt=ce.viewport,It===0&&(t.setRenderTargetTextures(v,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(v))}let jt=T[It];jt===void 0&&(jt=new En,jt.layers.enable(It),jt.viewport=new Se,T[It]=jt),jt.matrix.fromArray(Dt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Dt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(qt.x,qt.y,qt.width,qt.height),It===0&&(S.matrix.copy(jt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),j===!0&&S.cameras.push(jt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const It=l.getDepthInformation(ot[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let ot=0;ot<M.length;ot++){const j=y[ot],bt=M[ot];j!==null&&bt!==void 0&&bt.update(j,_t,u||o)}lt&&lt(rt,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),g=null}const kt=new bm;kt.setAnimationLoop(St),this.setAnimationLoop=function(rt){lt=rt},this.dispose=function(){}}}const as=new jn,SM=new he;function AM(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,nm(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,M,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),l(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,v,M):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===1&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===1&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,as.copy(y),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(SM.makeRotationFromEuler(as)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function l(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===1&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function EM(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function u(v,M){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(v,E);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){const M=l();v.__bindingPointIndex=M;const y=i.createBuffer(),E=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,w=y.length;A<w;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,S=C.length;T<S;T++){const L=C[T];if(p(L,A,T,E)===!0){const H=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let O=0;for(let G=0;G<F.length;G++){const N=F[G],V=_(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,H+O,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,y,E){const A=v.value,w=M+"_"+y;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const C=E[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return E[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const M=v.uniforms;let y=0;const E=16;for(let w=0,C=M.length;w<C;w++){const T=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,L=T.length;S<L;S++){const H=T[S],F=Array.isArray(H.value)?H.value:[H.value];for(let O=0,G=F.length;O<G;O++){const N=F[O],V=_(N),B=y%E,J=B%V.boundary,Z=B+J;y+=J,Z!==0&&E-Z<V.storage&&(y+=E-Z),H.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=V.storage}}}const A=y%E;return A>0&&(y+=E-A),v.__size=y,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:d}}class TM{constructor(t={}){const{canvas:e=A0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let E=!1,A=0,w=0,C=null,T=-1,S=null;const L=new Se,H=new Se;let F=null;const O=new ie(0);let G=0,N=e.width,V=e.height,B=1,J=null,Z=null;const lt=new Se(0,0,N,V),St=new Se(0,0,N,V);let kt=!1;const rt=new Kl;let _t=!1,ot=!1;const j=new he,bt=new he,It=new W,Dt=new Se,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ce(){return C===null?B:1}let X=n;function be(b,P){return e.getContext(b,P)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),X===null){const P="webgl2";if(X=be(P,b),X===null)throw be(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,Qt,Ot,me,wt,D,R,q,st,vt,tt,Ft,At,Nt,fe,Rt,Ht,Kt,Yt,Vt,ge,Lt,Et,Y;function Ut(){se=new Nv(X),se.init(),Lt=new _M(X,se),Qt=new Cv(X,se,t,Lt),Ot=new mM(X,se),Qt.reverseDepthBuffer&&f&&Ot.buffers.depth.setReversed(!0),me=new Ov(X),wt=new nM,D=new gM(X,se,Ot,wt,Qt,Lt,me),R=new Pv(y),q=new Fv(y),st=new j_(X),Et=new wv(X,st),vt=new Uv(X,st,me,Et),tt=new Gv(X,vt,st,me),Yt=new Bv(X,Qt,D),Rt=new Iv(wt),Ft=new eM(y,R,q,se,Qt,Et,Rt),At=new AM(y,wt),Nt=new sM,fe=new uM(se),Kt=new Tv(y,R,q,Ot,tt,p,c),Ht=new dM(y,tt,Qt),Y=new EM(X,me,Qt,Ot),Vt=new Rv(X,se,me),ge=new kv(X,se,me),me.programs=Ft.programs,y.capabilities=Qt,y.extensions=se,y.properties=wt,y.renderLists=Nt,y.shadowMap=Ht,y.state=Ot,y.info=me}Ut();const ut=new MM(y,X);this.xr=ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(N,V,!1))},this.getSize=function(b){return b.set(N,V)},this.setSize=function(b,P,k=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,V=P,e.width=Math.floor(b*B),e.height=Math.floor(P*B),k===!0&&(e.style.width=b+"px",e.style.height=P+"px"),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(N*B,V*B).floor()},this.setDrawingBufferSize=function(b,P,k){N=b,V=P,B=k,e.width=Math.floor(b*k),e.height=Math.floor(P*k),this.setViewport(0,0,b,P)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,P,k,z){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,P,k,z),Ot.viewport(L.copy(lt).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(St)},this.setScissor=function(b,P,k,z){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,P,k,z),Ot.scissor(H.copy(St).multiplyScalar(B).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(b){Ot.setScissorTest(kt=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(b=!0,P=!0,k=!0){let z=0;if(b){let U=!1;if(C!==null){const K=C.texture.format;U=K===1033||K===1031||K===1029}if(U){const K=C.texture.type,it=K===1009||K===1014||K===1012||K===1020||K===1017||K===1018,dt=Kt.getClearColor(),Q=Kt.getClearAlpha(),et=dt.r,ft=dt.g,Tt=dt.b;it?(g[0]=et,g[1]=ft,g[2]=Tt,g[3]=Q,X.clearBufferuiv(X.COLOR,0,g)):(_[0]=et,_[1]=ft,_[2]=Tt,_[3]=Q,X.clearBufferiv(X.COLOR,0,_))}else z|=X.COLOR_BUFFER_BIT}P&&(z|=X.DEPTH_BUFFER_BIT),k&&(z|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),Kt.dispose(),Nt.dispose(),fe.dispose(),wt.dispose(),R.dispose(),q.dispose(),tt.dispose(),Et.dispose(),Y.dispose(),Ft.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ai),ut.removeEventListener("sessionend",Nn),yn.stop()};function yt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=me.autoReset,P=Ht.enabled,k=Ht.autoUpdate,z=Ht.needsUpdate,U=Ht.type;Ut(),me.autoReset=b,Ht.enabled=P,Ht.autoUpdate=k,Ht.needsUpdate=z,Ht.type=U}function Gt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const P=b.target;P.removeEventListener("dispose",ne),xe(P)}function xe(b){Fe(b),wt.remove(b)}function Fe(b){const P=wt.get(b).programs;P!==void 0&&(P.forEach(function(k){Ft.releaseProgram(k)}),b.isShaderMaterial&&Ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,k,z,U,K){P===null&&(P=qt);const it=U.isMesh&&U.matrixWorld.determinant()<0,dt=Ct(b,P,k,z,U);Ot.setMaterial(z,it);let Q=k.index,et=1;if(z.wireframe===!0){if(Q=vt.getWireframeAttribute(k),Q===void 0)return;et=2}const ft=k.drawRange,Tt=k.attributes.position;let pt=ft.start*et,at=(ft.start+ft.count)*et;K!==null&&(pt=Math.max(pt,K.start*et),at=Math.min(at,(K.start+K.count)*et)),Q!==null?(pt=Math.max(pt,0),at=Math.min(at,Q.count)):Tt!=null&&(pt=Math.max(pt,0),at=Math.min(at,Tt.count));const ct=at-pt;if(ct<0||ct===1/0)return;Et.setup(U,z,dt,k,Q);let mt,gt=Vt;if(Q!==null&&(mt=st.get(Q),gt=ge,gt.setIndex(mt)),U.isMesh)z.wireframe===!0?(Ot.setLineWidth(z.wireframeLinewidth*ce()),gt.setMode(X.LINES)):gt.setMode(X.TRIANGLES);else if(U.isLine){let xt=z.linewidth;xt===void 0&&(xt=1),Ot.setLineWidth(xt*ce()),U.isLineSegments?gt.setMode(X.LINES):U.isLineLoop?gt.setMode(X.LINE_LOOP):gt.setMode(X.LINE_STRIP)}else U.isPoints?gt.setMode(X.POINTS):U.isSprite&&gt.setMode(X.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)gt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))gt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const xt=U._multiDrawStarts,Wt=U._multiDrawCounts,Jt=U._multiDrawCount,Ne=Q?st.get(Q).bytesPerElement:1,$t=wt.get(z).currentProgram.getUniforms();for(let le=0;le<Jt;le++)$t.setValue(X,"_gl_DrawID",le),gt.render(xt[le]/Ne,Wt[le])}else if(U.isInstancedMesh)gt.renderInstances(pt,ct,U.count);else if(k.isInstancedBufferGeometry){const xt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Wt=Math.min(k.instanceCount,xt);gt.renderInstances(pt,ct,Wt)}else gt.render(pt,ct)};function Ae(b,P,k){b.transparent===!0&&b.side===2&&b.forceSinglePass===!1?(b.side=1,b.needsUpdate=!0,ve(b,P,k),b.side=0,b.needsUpdate=!0,ve(b,P,k),b.side=2):ve(b,P,k)}this.compile=function(b,P,k=null){k===null&&(k=b),d=fe.get(k),d.init(P),M.push(d),k.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),b!==k&&b.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const z=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const K=U.material;if(K)if(Array.isArray(K))for(let it=0;it<K.length;it++){const dt=K[it];Ae(dt,k,U),z.add(dt)}else Ae(K,k,U),z.add(K)}),M.pop(),d=null,z},this.compileAsync=function(b,P,k=null){const z=this.compile(b,P,k);return new Promise(U=>{function K(){if(z.forEach(function(it){wt.get(it).currentProgram.isReady()&&z.delete(it)}),z.size===0){U(b);return}setTimeout(K,10)}se.get("KHR_parallel_shader_compile")!==null?K():setTimeout(K,10)})};let ln=null;function un(b){ln&&ln(b)}function ai(){yn.stop()}function Nn(){yn.start()}const yn=new bm;yn.setAnimationLoop(un),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(b){ln=b,ut.setAnimationLoop(b),b===null?yn.stop():yn.start()},ut.addEventListener("sessionstart",ai),ut.addEventListener("sessionend",Nn),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(P),P=ut.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,P,C),d=fe.get(b,M.length),d.init(P),M.push(d),bt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),rt.setFromProjectionMatrix(bt),ot=this.localClippingEnabled,_t=Rt.init(this.clippingPlanes,ot),m=Nt.get(b,v.length),m.init(),v.push(m),ut.enabled===!0&&ut.isPresenting===!0){const K=y.xr.getDepthSensingMesh();K!==null&&Un(K,P,-1/0,y.sortObjects)}Un(b,P,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,Z),jt=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,jt&&Kt.addToRenderList(m,b),this.info.render.frame++,_t===!0&&Rt.beginShadows();const k=d.state.shadowsArray;Ht.render(k,b,P),_t===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(d.setupLights(),P.isArrayCamera){const K=P.cameras;if(U.length>0)for(let it=0,dt=K.length;it<dt;it++){const Q=K[it];ht(z,U,b,Q)}jt&&Kt.render(b);for(let it=0,dt=K.length;it<dt;it++){const Q=K[it];qn(m,b,Q,Q.viewport)}}else U.length>0&&ht(z,U,b,P),jt&&Kt.render(b),qn(m,b,P);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(y,b,P),Et.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(d=M[M.length-1],_t===!0&&Rt.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Un(b,P,k,z){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||rt.intersectsSprite(b)){z&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(bt);const it=tt.update(b),dt=b.material;dt.visible&&m.push(b,it,dt,k,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||rt.intersectsObject(b))){const it=tt.update(b),dt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(it.boundingSphere===null&&it.computeBoundingSphere(),Dt.copy(it.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(bt)),Array.isArray(dt)){const Q=it.groups;for(let et=0,ft=Q.length;et<ft;et++){const Tt=Q[et],pt=dt[Tt.materialIndex];pt&&pt.visible&&m.push(b,it,pt,k,Dt.z,Tt)}}else dt.visible&&m.push(b,it,dt,k,Dt.z,null)}}const K=b.children;for(let it=0,dt=K.length;it<dt;it++)Un(K[it],P,k,z)}function qn(b,P,k,z){const U=b.opaque,K=b.transmissive,it=b.transparent;d.setupLightsView(k),_t===!0&&Rt.setGlobalState(y.clippingPlanes,k),z&&Ot.viewport(L.copy(z)),U.length>0&&Pt(U,P,k),K.length>0&&Pt(K,P,k),it.length>0&&Pt(it,P,k),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function ht(b,P,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new ys(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const K=d.state.transmissionRenderTarget[z.id],it=z.viewport||L;K.setSize(it.z,it.w);const dt=y.getRenderTarget();y.setRenderTarget(K),y.getClearColor(O),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),jt&&Kt.render(k);const Q=y.toneMapping;y.toneMapping=0;const et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),_t===!0&&Rt.setGlobalState(y.clippingPlanes,z),Pt(b,k,z),D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K),se.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Tt=0,pt=P.length;Tt<pt;Tt++){const at=P[Tt],ct=at.object,mt=at.geometry,gt=at.material,xt=at.group;if(gt.side===2&&ct.layers.test(z.layers)){const Wt=gt.side;gt.side=1,gt.needsUpdate=!0,te(ct,k,z,mt,gt,xt),gt.side=Wt,gt.needsUpdate=!0,ft=!0}}ft===!0&&(D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K))}y.setRenderTarget(dt),y.setClearColor(O,G),et!==void 0&&(z.viewport=et),y.toneMapping=Q}function Pt(b,P,k){const z=P.isScene===!0?P.overrideMaterial:null;for(let U=0,K=b.length;U<K;U++){const it=b[U],dt=it.object,Q=it.geometry,et=z===null?it.material:z,ft=it.group;dt.layers.test(k.layers)&&te(dt,P,k,Q,et,ft)}}function te(b,P,k,z,U,K){b.onBeforeRender(y,P,k,z,U,K),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(y,P,k,z,b,K),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,y.renderBufferDirect(k,P,z,U,b,K),U.side=0,U.needsUpdate=!0,y.renderBufferDirect(k,P,z,U,b,K),U.side=2):y.renderBufferDirect(k,P,z,U,b,K),b.onAfterRender(y,P,k,z,U,K)}function ve(b,P,k){P.isScene!==!0&&(P=qt);const z=wt.get(b),U=d.state.lights,K=d.state.shadowsArray,it=U.state.version,dt=Ft.getParameters(b,U.state,K,P,k),Q=Ft.getProgramCacheKey(dt);let et=z.programs;z.environment=b.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(b.isMeshStandardMaterial?q:R).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,et===void 0&&(b.addEventListener("dispose",ne),et=new Map,z.programs=et);let ft=et.get(Q);if(ft!==void 0){if(z.currentProgram===ft&&z.lightsStateVersion===it)return Qe(b,dt),ft}else dt.uniforms=Ft.getUniforms(b),b.onBeforeCompile(dt,y),ft=Ft.acquireProgram(dt,Q),et.set(Q,ft),z.uniforms=dt.uniforms;const Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=Rt.uniform),Qe(b,dt),z.needsLights=x(b),z.lightsStateVersion=it,z.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=ft,z.uniformsList=null,ft}function He(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=aa.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Qe(b,P){const k=wt.get(b);k.outputColorSpace=P.outputColorSpace,k.batching=P.batching,k.batchingColor=P.batchingColor,k.instancing=P.instancing,k.instancingColor=P.instancingColor,k.instancingMorph=P.instancingMorph,k.skinning=P.skinning,k.morphTargets=P.morphTargets,k.morphNormals=P.morphNormals,k.morphColors=P.morphColors,k.morphTargetsCount=P.morphTargetsCount,k.numClippingPlanes=P.numClippingPlanes,k.numIntersection=P.numClipIntersection,k.vertexAlphas=P.vertexAlphas,k.vertexTangents=P.vertexTangents,k.toneMapping=P.toneMapping}function Ct(b,P,k,z,U){P.isScene!==!0&&(P=qt),D.resetTextureUnits();const K=P.fog,it=z.isMeshStandardMaterial?P.environment:null,dt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:wn,Q=(z.isMeshStandardMaterial?q:R).get(z.envMap||it),et=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ft=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!k.morphAttributes.position,pt=!!k.morphAttributes.normal,at=!!k.morphAttributes.color;let ct=0;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ct=y.toneMapping);const mt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,gt=mt!==void 0?mt.length:0,xt=wt.get(z),Wt=d.state.lights;if(_t===!0&&(ot===!0||b!==S)){const ue=b===S&&z.id===T;Rt.setState(z,b,ue)}let Jt=!1;z.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==Wt.state.version||xt.outputColorSpace!==dt||U.isBatchedMesh&&xt.batching===!1||!U.isBatchedMesh&&xt.batching===!0||U.isBatchedMesh&&xt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&xt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&xt.instancing===!1||!U.isInstancedMesh&&xt.instancing===!0||U.isSkinnedMesh&&xt.skinning===!1||!U.isSkinnedMesh&&xt.skinning===!0||U.isInstancedMesh&&xt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&xt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&xt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&xt.instancingMorph===!1&&U.morphTexture!==null||xt.envMap!==Q||z.fog===!0&&xt.fog!==K||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Rt.numPlanes||xt.numIntersection!==Rt.numIntersection)||xt.vertexAlphas!==et||xt.vertexTangents!==ft||xt.morphTargets!==Tt||xt.morphNormals!==pt||xt.morphColors!==at||xt.toneMapping!==ct||xt.morphTargetsCount!==gt)&&(Jt=!0):(Jt=!0,xt.__version=z.version);let Ne=xt.currentProgram;Jt===!0&&(Ne=ve(z,P,U));let $t=!1,le=!1,de=!1;const _e=Ne.getUniforms(),Mt=xt.uniforms;if(Ot.useProgram(Ne.program)&&($t=!0,le=!0,de=!0),z.id!==T&&(T=z.id,le=!0),$t||S!==b){Ot.buffers.depth.getReversed()?(j.copy(b.projectionMatrix),T0(j),w0(j),_e.setValue(X,"projectionMatrix",j)):_e.setValue(X,"projectionMatrix",b.projectionMatrix),_e.setValue(X,"viewMatrix",b.matrixWorldInverse);const ae=_e.map.cameraPosition;ae!==void 0&&ae.setValue(X,It.setFromMatrixPosition(b.matrixWorld)),Qt.logarithmicDepthBuffer&&_e.setValue(X,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_e.setValue(X,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,le=!0,de=!0)}if(U.isSkinnedMesh){_e.setOptional(X,U,"bindMatrix"),_e.setOptional(X,U,"bindMatrixInverse");const ue=U.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),_e.setValue(X,"boneTexture",ue.boneTexture,D))}U.isBatchedMesh&&(_e.setOptional(X,U,"batchingTexture"),_e.setValue(X,"batchingTexture",U._matricesTexture,D),_e.setOptional(X,U,"batchingIdTexture"),_e.setValue(X,"batchingIdTexture",U._indirectTexture,D),_e.setOptional(X,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(X,"batchingColorTexture",U._colorsTexture,D));const oe=k.morphAttributes;if((oe.position!==void 0||oe.normal!==void 0||oe.color!==void 0)&&Yt.update(U,k,Ne),(le||xt.receiveShadow!==U.receiveShadow)&&(xt.receiveShadow=U.receiveShadow,_e.setValue(X,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Mt.envMap.value=Q,Mt.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(Mt.envMapIntensity.value=P.environmentIntensity),le&&(_e.setValue(X,"toneMappingExposure",y.toneMappingExposure),xt.needsLights&&I(Mt,de),K&&z.fog===!0&&At.refreshFogUniforms(Mt,K),At.refreshMaterialUniforms(Mt,z,B,V,d.state.transmissionRenderTarget[b.id]),aa.upload(X,He(xt),Mt,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(aa.upload(X,He(xt),Mt,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_e.setValue(X,"center",U.center),_e.setValue(X,"modelViewMatrix",U.modelViewMatrix),_e.setValue(X,"normalMatrix",U.normalMatrix),_e.setValue(X,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ue=z.uniformsGroups;for(let ae=0,We=ue.length;ae<We;ae++){const Oe=ue[ae];Y.update(Oe,Ne),Y.bind(Oe,Ne)}}return Ne}function I(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function x(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,P,k){wt.get(b.texture).__webglTexture=P,wt.get(b.depthTexture).__webglTexture=k;const z=wt.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,P){const k=wt.get(b);k.__webglFramebuffer=P,k.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,k=0){C=b,A=P,w=k;let z=!0,U=null,K=!1,it=!1;if(b){const Q=wt.get(b);if(Q.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(X.FRAMEBUFFER,null),z=!1;else if(Q.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Q.__hasExternalTextures)D.rebindTextures(b,wt.get(b.texture).__webglTexture,wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(Q.__boundDepthTexture!==Tt){if(Tt!==null&&wt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const et=b.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(it=!0);const ft=wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ft[P])?U=ft[P][k]:U=ft[P],K=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?U=wt.get(b).__webglMultisampledFramebuffer:Array.isArray(ft)?U=ft[k]:U=ft,L.copy(b.viewport),H.copy(b.scissor),F=b.scissorTest}else L.copy(lt).multiplyScalar(B).floor(),H.copy(St).multiplyScalar(B).floor(),F=kt;if(Ot.bindFramebuffer(X.FRAMEBUFFER,U)&&z&&Ot.drawBuffers(b,U),Ot.viewport(L),Ot.scissor(H),Ot.setScissorTest(F),K){const Q=wt.get(b.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+P,Q.__webglTexture,k)}else if(it){const Q=wt.get(b.texture),et=P||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Q.__webglTexture,k||0,et)}T=-1},this.readRenderTargetPixels=function(b,P,k,z,U,K,it){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&it!==void 0&&(dt=dt[it]),dt){Ot.bindFramebuffer(X.FRAMEBUFFER,dt);try{const Q=b.texture,et=Q.format,ft=Q.type;if(!Qt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-z&&k>=0&&k<=b.height-U&&X.readPixels(P,k,z,U,Lt.convert(et),Lt.convert(ft),K)}finally{const Q=C!==null?wt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(X.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(b,P,k,z,U,K,it){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&it!==void 0&&(dt=dt[it]),dt){const Q=b.texture,et=Q.format,ft=Q.type;if(!Qt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=b.width-z&&k>=0&&k<=b.height-U){Ot.bindFramebuffer(X.FRAMEBUFFER,dt);const Tt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Tt),X.bufferData(X.PIXEL_PACK_BUFFER,K.byteLength,X.STREAM_READ),X.readPixels(P,k,z,U,Lt.convert(et),Lt.convert(ft),0);const pt=C!==null?wt.get(C).__webglFramebuffer:null;Ot.bindFramebuffer(X.FRAMEBUFFER,pt);const at=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await E0(X,at,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Tt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,K),X.deleteBuffer(Tt),X.deleteSync(at),K}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,P=null,k=0){b.isTexture!==!0&&(Ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(b.image.width*z),K=Math.floor(b.image.height*z),it=P!==null?P.x:0,dt=P!==null?P.y:0;D.setTexture2D(b,0),X.copyTexSubImage2D(X.TEXTURE_2D,k,0,0,it,dt,U,K),Ot.unbindTexture()};const nt=X.createFramebuffer(),$=X.createFramebuffer();this.copyTextureToTexture=function(b,P,k=null,z=null,U=0,K=null){b.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],P=arguments[2],K=arguments[3]||0,k=null),K===null&&(U!==0?(Ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),K=U,U=0):K=0);let it,dt,Q,et,ft,Tt,pt,at,ct;const mt=b.isCompressedTexture?b.mipmaps[K]:b.image;if(k!==null)it=k.max.x-k.min.x,dt=k.max.y-k.min.y,Q=k.isBox3?k.max.z-k.min.z:1,et=k.min.x,ft=k.min.y,Tt=k.isBox3?k.min.z:0;else{const oe=Math.pow(2,-U);it=Math.floor(mt.width*oe),dt=Math.floor(mt.height*oe),b.isDataArrayTexture?Q=mt.depth:b.isData3DTexture?Q=Math.floor(mt.depth*oe):Q=1,et=0,ft=0,Tt=0}z!==null?(pt=z.x,at=z.y,ct=z.z):(pt=0,at=0,ct=0);const gt=Lt.convert(P.format),xt=Lt.convert(P.type);let Wt;P.isData3DTexture?(D.setTexture3D(P,0),Wt=X.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(D.setTexture2DArray(P,0),Wt=X.TEXTURE_2D_ARRAY):(D.setTexture2D(P,0),Wt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,P.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,P.unpackAlignment);const Jt=X.getParameter(X.UNPACK_ROW_LENGTH),Ne=X.getParameter(X.UNPACK_IMAGE_HEIGHT),$t=X.getParameter(X.UNPACK_SKIP_PIXELS),le=X.getParameter(X.UNPACK_SKIP_ROWS),de=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,mt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,et),X.pixelStorei(X.UNPACK_SKIP_ROWS,ft),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Tt);const _e=b.isDataArrayTexture||b.isData3DTexture,Mt=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){const oe=wt.get(b),ue=wt.get(P),ae=wt.get(oe.__renderTarget),We=wt.get(ue.__renderTarget);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,ae.__webglFramebuffer),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Oe=0;Oe<Q;Oe++)_e&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wt.get(b).__webglTexture,U,Tt+Oe),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,wt.get(P).__webglTexture,K,ct+Oe)),X.blitFramebuffer(et,ft,it,dt,pt,at,it,dt,X.DEPTH_BUFFER_BIT,X.NEAREST);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||wt.has(b)){const oe=wt.get(b),ue=wt.get(P);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,nt),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,$);for(let ae=0;ae<Q;ae++)_e?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,oe.__webglTexture,U,Tt+ae):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,oe.__webglTexture,U),Mt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ue.__webglTexture,K,ct+ae):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ue.__webglTexture,K),U!==0?X.blitFramebuffer(et,ft,it,dt,pt,at,it,dt,X.COLOR_BUFFER_BIT,X.NEAREST):Mt?X.copyTexSubImage3D(Wt,K,pt,at,ct+ae,et,ft,it,dt):X.copyTexSubImage2D(Wt,K,pt,at,et,ft,it,dt);Ot.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Mt?b.isDataTexture||b.isData3DTexture?X.texSubImage3D(Wt,K,pt,at,ct,it,dt,Q,gt,xt,mt.data):P.isCompressedArrayTexture?X.compressedTexSubImage3D(Wt,K,pt,at,ct,it,dt,Q,gt,mt.data):X.texSubImage3D(Wt,K,pt,at,ct,it,dt,Q,gt,xt,mt):b.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,K,pt,at,it,dt,gt,xt,mt.data):b.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,K,pt,at,mt.width,mt.height,gt,mt.data):X.texSubImage2D(X.TEXTURE_2D,K,pt,at,it,dt,gt,xt,mt);X.pixelStorei(X.UNPACK_ROW_LENGTH,Jt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ne),X.pixelStorei(X.UNPACK_SKIP_PIXELS,$t),X.pixelStorei(X.UNPACK_SKIP_ROWS,le),X.pixelStorei(X.UNPACK_SKIP_IMAGES,de),K===0&&P.generateMipmaps&&X.generateMipmap(Wt),Ot.unbindTexture()},this.copyTextureToTexture3D=function(b,P,k=null,z=null,U=0){return b.isTexture!==!0&&(Ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,b=arguments[2],P=arguments[3],U=arguments[4]||0),Ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,P,k,z,U)},this.initRenderTarget=function(b){wt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Ot.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,Ot.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}function Hh(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class wM extends fr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new LM(e)}),this.register(function(e){return new DM(e)}),this.register(function(e){return new HM(e)}),this.register(function(e){return new VM(e)}),this.register(function(e){return new WM(e)}),this.register(function(e){return new NM(e)}),this.register(function(e){return new UM(e)}),this.register(function(e){return new kM(e)}),this.register(function(e){return new OM(e)}),this.register(function(e){return new PM(e)}),this.register(function(e){return new BM(e)}),this.register(function(e){return new FM(e)}),this.register(function(e){return new zM(e)}),this.register(function(e){return new GM(e)}),this.register(function(e){return new CM(e)}),this.register(function(e){return new jM(e)}),this.register(function(e){return new XM(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Vr.extractUrlBase(t);o=Vr.resolveURL(u,this.path)}else o=Vr.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new gm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Sm){try{o[Re.KHR_BINARY_GLTF]=new qM(t)}catch(l){s&&s(l);return}r=JSON.parse(o[Re.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new oS(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(l){case Re.KHR_MATERIALS_UNLIT:o[l]=new IM;break;case Re.KHR_DRACO_MESH_COMPRESSION:o[l]=new KM(r,this.dracoLoader);break;case Re.KHR_TEXTURE_TRANSFORM:o[l]=new $M;break;case Re.KHR_MESH_QUANTIZATION:o[l]=new YM;break;default:f.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function RM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class CM{constructor(t){this.parser=t,this.name=Re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],wn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new nu(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new E_(h),u.distance=l;break;case"spot":u=new S_(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Ii(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class IM{constructor(){this.name=Re.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(t,e,n){const s=[];t.color=new ie(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],wn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Xe))}return Promise.all(s)}}class PM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class LM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ee(a,a)}return Promise.all(r)}}class DM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class FM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class NM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ie(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],wn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Xe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class UM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class kM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new ie().setRGB(a[0],a[1],a[2],wn),Promise.all(r)}}class OM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class BM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new ie().setRGB(a[0],a[1],a[2],wn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Xe)),Promise.all(r)}}class GM{constructor(t){this.parser=t,this.name=Re.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class zM{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_i}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class HM{constructor(t){this.parser=t,this.name=Re.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class VM{constructor(t){this.parser=t,this.name=Re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class WM{constructor(t){this.parser=t,this.name=Re.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class jM{constructor(t){this.name=Re.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,f=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,f,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(p),h,l,f,s.mode,s.filter),p})})}else return null}}class XM{constructor(t){this.name=Re.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Hn.TRIANGLES&&u.mode!==Hn.TRIANGLE_STRIP&&u.mode!==Hn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],f=u[0].count,p=[];for(const g of l){const _=new he,m=new W,d=new rn,v=new W(1,1,1),M=new e_(g.geometry,g.material,f);for(let y=0;y<f;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,_.compose(m,d,v));for(const y in c)if(y==="_COLOR_0"){const E=c[y];M.instanceColor=new _l(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);qe.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Sm="glTF",Cr=12,Vh={JSON:1313821514,BIN:5130562};class qM{constructor(t){this.name=Re.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Sm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Cr,r=new DataView(t,Cr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Vh.JSON){const u=new Uint8Array(t,Cr+o,a);this.content=n.decode(u)}else if(c===Vh.BIN){const u=Cr+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class KM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Re.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=Sl[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=Sl[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],p=er[f.componentType];u[l]=p.name,c[l]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,f){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}l(p)},a,u,wn,f)})})}}class $M{constructor(){this.name=Re.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class YM{constructor(){this.name=Re.KHR_MESH_QUANTIZATION}}class Am extends Qr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,f=l*l,p=f*l,g=t*u,_=g-u,m=-2*p+3*f,d=p-f,v=1-m,M=d-f+l;for(let y=0;y!==a;y++){const E=o[_+y+a],A=o[_+y+c]*h,w=o[g+y+a],C=o[g+y]*h;r[y]=v*E+M*A+m*w+d*C}return r}}const ZM=new rn;class JM extends Am{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return ZM.fromArray(r).normalize().toArray(r),r}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},er={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wh={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},jh={33071:1001,33648:1002,10497:1e3},Tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},QM={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},wc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Oi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function cs(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ii(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function eS(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const f=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(f)}if(s){const f=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],f=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function nS(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iS(i){let t;const e=i.extensions&&i.extensions[Re.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Rc(e.attributes):t=i.indices+":"+Rc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Rc(i.targets[n]);return t}function Rc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Al(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rS=new he;class oS{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new RM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ql(this.options.manager):this.textureLoader=new C_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cs(r,a,s),Ii(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Re.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Vr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Tc[s.type],a=er[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new De(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Tc[s.type],u=er[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==l){const d=Math.floor(f/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let M=e.cache.get(v);M||(_=new u(a,d*p,s.count*p/h),M=new Xl(_,p/h),e.cache.add(v,M)),m=new ni(M,c,f%p/h,g)}else a===null?_=new u(s.count*c):_=new u(a,f,s.count*c),m=new De(_,c,g);if(s.sparse!==void 0){const d=Tc.SCALAR,v=er[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new v(o[1],M,s.sparse.count*d),A=new u(o[2],y,s.sparse.count*c);a!==null&&(m=new De(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,C=E.length;w<C;w++){const T=E[w];if(m.setX(T,A[w*c]),c>=2&&m.setY(T,A[w*c+1]),c>=3&&m.setZ(T,A[w*c+2]),c>=4&&m.setW(T,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Wh[f.magFilter]||1006,h.minFilter=Wh[f.minFilter]||1008,h.wrapS=jh[f.wrapS]||1e3,h.wrapT=jh[f.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const f=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(f,p){let g=f;e.isImageBitmapLoader===!0&&(g=function(_){const m=new on(_);m.needsUpdate=!0,f(m)}),e.load(Vr.resolveURL(l,r.path),g,void 0,p)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),Ii(l,o),l.userData.mimeType=o.mimeType||sS(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Re.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Re.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Re.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Yl,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new lm,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Oi}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[Re.KHR_MATERIALS_UNLIT]){const l=s[Re.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new ie(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const f=l.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],wn),a.opacity=f[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,Xe)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||wc.OPAQUE;if(h===wc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===wc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fn&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ee(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==fn&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fn){const l=r.emissiveFactor;a.emissive=new ie().setRGB(l[0],l[1],l[2],wn)}return r.emissiveTexture!==void 0&&o!==fn&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Xe)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),Ii(l,r),e.associations.set(l,{materials:t}),r.extensions&&cs(s,l,r),l})}createUniqueName(t){const e=ke.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Xh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=iS(u),l=s[h];if(l)o.push(l.promise);else{let f;u.extensions&&u.extensions[Re.KHR_DRACO_MESH_COMPRESSION]?f=r(u):f=Xh(new Ze,u,e),s[h]={primitive:u,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?tS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let d;const v=u[p];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new J0(_,v):new we(_,v),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Hn.TRIANGLE_STRIP?d.geometry=Hh(d.geometry,1):m.mode===Hn.TRIANGLE_FAN&&(d.geometry=Hh(d.geometry,2));else if(m.mode===Hn.LINES)d=new s_(_,v);else if(m.mode===Hn.LINE_STRIP)d=new $l(_,v);else if(m.mode===Hn.LINE_LOOP)d=new r_(_,v);else if(m.mode===Hn.POINTS)d=new um(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&nS(d,r),d.name=e.createUniqueName(r.name||"mesh_"+t),Ii(d,r),m.extensions&&cs(s,d,m),e.assignFinalMaterial(d),l.push(d)}for(let p=0,g=l.length;p<g;p++)e.associations.set(l[p],{meshes:t,primitives:p});if(l.length===1)return r.extensions&&cs(s,l[0],r),l[0];const f=new vn;r.extensions&&cs(s,f,r),e.associations.set(f,{meshes:t});for(let p=0,g=l.length;p<g;p++)f.add(l[p]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new En(Kp.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new eu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ii(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const f=new he;r!==null&&f.fromArray(r.array,u*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new ql(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,f=s.channels.length;l<f;l++){const p=s.channels[l],g=s.samplers[p.sampler],_=p.target,m=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",v)),u.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const f=l[0],p=l[1],g=l[2],_=l[3],m=l[4],d=[];for(let v=0,M=f.length;v<M;v++){const y=f[v],E=p[v],A=g[v],w=_[v],C=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=n._createAnimationTracks(y,E,A,w,C);if(T)for(let S=0;S<T.length;S++)d.push(T[S])}return new vl(r,void 0,d)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],f=u[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,rS)});for(let p=0,g=l.length;p<g;p++)h.add(l[p]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new am:u.length>1?h=new vn:u.length===1?h=u[0]:h=new qe,h!==u[0])for(let l=0,f=u.length;l<f;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),Ii(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){const l=new he;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new vn;n.name&&(r.name=s.createUniqueName(n.name)),Ii(r,n),n.extensions&&cs(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[f,p]of s.associations)(f instanceof Wn||f instanceof on)&&l.set(f,p);return h.traverse(f=>{const p=s.associations.get(f);p!=null&&l.set(f,p)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];qi[r.path]===qi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let u;switch(qi[r.path]){case qi.weights:u=or;break;case qi.rotation:u=ar;break;case qi.position:case qi.scale:u=cr;break;default:switch(n.itemSize){case 1:u=or;break;case 2:case 3:default:u=cr;break}break}const h=s.interpolation!==void 0?QM[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const g=new u(c[f]+"."+qi[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Al(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof ar?JM:Am;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function aS(i,t,e){const n=t.attributes,s=new _n;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new W(c[0],c[1],c[2]),new W(u[0],u[1],u[2])),a.normalized){const h=Al(er[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new W,c=new W;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const f=e.json.accessors[l.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=Al(er[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Xh(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Sl[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Pe.workingColorSpace!==wn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pe.workingColorSpace}" not supported.`),Ii(i,t),aS(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?eS(i,t.targets,e):i})}var cS=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function a(d){for(var v=new Uint8Array(d.length),M=0;M<d.length;++M){var y=d.charCodeAt(M);v[M]=y>96?y-97:y>64?y-39:y+4}for(var E=0,M=0;M<d.length;++M)v[E++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,E)}function c(d,v,M,y,E,A){var w=r.exports.sbrk,C=M+3&-4,T=w(C*y),S=w(E.length),L=new Uint8Array(r.exports.memory.buffer);L.set(E,S);var H=d(T,M,y,S,E.length);if(H==0&&A&&A(T,C,y),v.set(L.subarray(T,T+M*y)),w(T-w(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],f=0;function p(d){var v={object:new Worker(d),pending:0,requests:{}};return v.object.onmessage=function(M){var y=M.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function g(d){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),M=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(M),E=0;E<d;++E)l[E]=p(y);URL.revokeObjectURL(y)}function _(d,v,M,y,E){for(var A=l[0],w=1;w<l.length;++w)l[w].pending<A.pending&&(A=l[w]);return new Promise(function(C,T){var S=new Uint8Array(M),L=f++;A.pending+=d,A.requests[L]={resolve:C,reject:T},A.object.postMessage({id:L,count:d,size:v,source:S,mode:y,filter:E},[S.buffer])})}function m(d){o.then(function(){var v=d.data;try{var M=new Uint8Array(v.count*v.size);c(r.exports[v.mode],M,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:M},[M.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,v,M,y,E){c(r.exports.meshopt_decodeVertexBuffer,d,v,M,y,r.exports[u[E]])},decodeIndexBuffer:function(d,v,M,y){c(r.exports.meshopt_decodeIndexBuffer,d,v,M,y)},decodeIndexSequence:function(d,v,M,y){c(r.exports.meshopt_decodeIndexSequence,d,v,M,y)},decodeGltfBuffer:function(d,v,M,y,E,A){c(r.exports[h[E]],d,v,M,y,r.exports[u[A]])},decodeGltfBufferAsync:function(d,v,M,y,E){return l.length>0?_(d,v,M,h[y],u[E]):o.then(function(){var A=new Uint8Array(d*v);return c(r.exports[h[y]],A,d,v,M,r.exports[u[E]]),A})}}})();function ou(){return new wM().setMeshoptDecoder(cS)}let Em="";function lS(i){Em=i===""||i.endsWith("/")?i:`${i}/`}const Tn=i=>`${Em}${i}`,uS=.001,hS=.5,qh={playing:!1,settling:!1,stillFor:0,pending:1},Tm=i=>i.playing||i.settling||i.pending>0,fS=i=>!i.playing&&!i.settling,dS=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),pS=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,mS=i=>Tm(i)?i:{...i,pending:1};function gS(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<uS?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<hS}}function Kh(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const ts="#c8f323",_S="#0b0f10";function bS(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const xS=bS(ts),vS=ts,yS="#7aa2ff",MS="#ffb340",SS="#b18cff",AS=ts,ES=ts,Ir=new W;function Bn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ir.copy(t),Ir[n]=0,Ir.normalize();const u=.5*o/(o+a),h=1-Ir.angleTo(i)/c;return Math.sign(Ir[e])===1?h*u:a/(o+a)+u+u*(1-h)}class TS extends Ui{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new W,c=new W,u=new W(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,g=new W,_=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=u.x*Math.sign(a.x)+c.x*r,h[m+1]=u.y*Math.sign(a.y)+c.y*r,h[m+2]=u.z*Math.sign(a.z)+c.z*r,l[m+0]=c.x,l[m+1]=c.y,l[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),f[d+0]=Bn(g,c,"z","y",r,n),f[d+1]=1-Bn(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),f[d+0]=1-Bn(g,c,"z","y",r,n),f[d+1]=1-Bn(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),f[d+0]=1-Bn(g,c,"x","z",r,t),f[d+1]=Bn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[d+0]=1-Bn(g,c,"x","z",r,t),f[d+1]=1-Bn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[d+0]=1-Bn(g,c,"x","y",r,t),f[d+1]=1-Bn(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),f[d+0]=Bn(g,c,"x","y",r,t),f[d+1]=1-Bn(g,c,"y","x",r,e);break}}}const $h=["technical","tactical","physical","social"],Yh=["auto","authored","off"],wm=/\bwall\b/i,Zh=["n","e","s","w"],wS={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},Jh=1.8,Qh=7.32,RS=6;function Ss(i,t){return i.width!==void 0&&i.width<RS?i.width/2:t}function Rm(i){return Math.min(Math.max(i*.5,1),2.44)}const tf=["save","beaten"],No=["throw","roll","kick"],Uo=["throw","roll"],ef=["lofted","ground"],CS=3.35,IS=1,nf=12,El=["walk","jog","run","sprint"],sf=["walk","jog","run"];function ba(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const PS=new Set(["move","dribble","pass","shoot","tackle","collect"]),rf=/^#[0-9a-fA-F]{6}$/;function Xt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function Ri(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&Xt(t,"expected [x, y] numbers"),i}function LS(i){var o,a,c,u,h;const t=i;t.version!==1&&Xt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||Xt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&Xt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&Xt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||Xt("teams","at least one team");for(const l of e){const f=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof f!="string"||!rf.test(f))&&Xt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||Xt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,f)=>{(!l.id||n.has(l.id))&&Xt(`players[${f}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||Xt(`players[${f}].team`,`unknown team ${l.team}`),Ri(l.start,`players[${f}].start`),l.role!==void 0&&l.role!=="keeper"&&Xt(`players[${f}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(Ri((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&Xt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||Xt("balls","expected an array"),t.balls.forEach((l,f)=>{(typeof l!="object"||l===null||Array.isArray(l))&&Xt(`balls[${f}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&Xt(`balls[${f}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&Xt(`balls[${f}].path`,"expected at least one { t, at }"),l.path.forEach((p,g)=>{(typeof(p==null?void 0:p.t)!="number"||p.t<0)&&Xt(`balls[${f}].path[${g}].t`,"seconds >= 0 required"),g>0&&p.t<=l.path[g-1].t&&Xt(`balls[${f}].path[${g}].t`,"times must ascend"),Ri(p.at,`balls[${f}].path[${g}].at`)})})),(t.equipment??[]).forEach((l,f)=>{l.type!=="cone"&&l.type!=="goal"&&Xt(`equipment[${f}].type`,String(l.type)),Ri(l.at,`equipment[${f}].at`),l.width!==void 0&&(l.type!=="goal"&&Xt(`equipment[${f}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=Jh-1e-9&&l.width<=Qh+1e-9||Xt(`equipment[${f}].width`,`expected ${Jh}..${Qh} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&Xt(`equipment[${f}].facing`,"only a goal has a facing"),Zh.includes(l.facing)||Xt(`equipment[${f}].facing`,`expected one of ${Zh.join("|")}, got ${String(l.facing)}`))});const r=(l,f)=>{n.has(l)||Xt(f,`unknown player ${l}`)};if((t.balls??[]).forEach((l,f)=>{l.carrier!==void 0&&r(l.carrier,`balls[${f}].carrier`)}),Array.isArray(t.events)||Xt("events","expected an array"),t.events.forEach((l,f)=>{var p;if((typeof l.t!="number"||l.t<0)&&Xt(`events[${f}].t`,"seconds >= 0 required"),PS.has(l.type)||Xt(`events[${f}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${f}].player`),Ri(l.to,`events[${f}].to`),l.gait!==void 0&&!El.includes(l.gait)&&Xt(`events[${f}].gait`,`expected one of ${El.join("|")}, got ${String(l.gait)}`)),l.type==="dribble"&&(r(l.player,`events[${f}].player`),Ri(l.to,`events[${f}].to`),l.gait!==void 0&&!sf.includes(l.gait)&&Xt(`events[${f}].gait`,`expected one of ${sf.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&Xt(`events[${f}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${f}].from`),r(l.to,`events[${f}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&Xt(`events[${f}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&Xt(`events[${f}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(No.includes(l.style)||Xt(`events[${f}].style`,`expected one of ${No.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!Uo.includes(l.style)&&Xt(`events[${f}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${Uo.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&Xt(`events[${f}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||Xt(`events[${f}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let g=[...((p=t.players.find(_=>_.id===l.to))==null?void 0:p.start)??[0,0]];for(let _=0;_<f;_++){const m=t.events[_];(m.type==="move"||m.type==="dribble")&&m.player===l.to&&(g=[...m.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const m=Math.hypot(g[0]-_.at[0],g[1]-_.at[1]);m<nf&&Xt(`events[${f}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${m.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${nf} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&Xt(`events[${f}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||Xt(`events[${f}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((g,_)=>_<f&&g.type!=="move")&&Xt(`events[${f}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const g=l.deflect;(typeof g!="object"||g===null||Array.isArray(g))&&Xt(`events[${f}].deflect`,"expected { to: [x, y], style: lofted | ground }"),Ri(g.to,`events[${f}].deflect.to`),ef.includes(g.style)||Xt(`events[${f}].deflect.style`,`expected one of ${ef.join("|")}, got ${String(g.style)}`),l.type==="pass"&&!s.has(l.to)&&Xt(`events[${f}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&g.style==="ground")&&!s.size&&Xt(`events[${f}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const d=_.facing==="e"||_.facing==="w"?g.to[1]-_.at[1]:g.to[0]-_.at[0];if(Math.abs(d)>Ss(_,CS))continue;(_.facing!==void 0?{n:g.to[1]-_.at[1],s:_.at[1]-g.to[1],e:g.to[0]-_.at[0],w:_.at[0]-g.to[0]}[_.facing]:_.at[1]<=t.pitch.length/2?g.to[1]-_.at[1]:_.at[1]-g.to[1])<=IS&&Xt(`events[${f}].deflect.to`,`[${g.to[0]}, ${g.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${f}].player`),r(l.from,`events[${f}].from`),l.from===l.player&&Xt(`events[${f}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&Xt(`events[${f}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${f}].player`),l.type==="shoot"&&(r(l.player,`events[${f}].player`),Ri(l.at,`events[${f}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&Xt(`events[${f}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&Xt(`events[${f}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&Xt(`events[${f}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&Xt(`events[${f}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&Xt(`events[${f}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(No.includes(l.style)||Xt(`events[${f}].style`,`expected one of ${No.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!Uo.includes(l.style)&&Xt(`events[${f}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${Uo.join(" or ")})`),l.flightStyle!=="ground"&&Xt(`events[${f}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&Xt(`events[${f}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&Xt(`events[${f}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&Xt(`events[${f}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const g=l.newBall;g!==void 0&&(typeof g!="boolean"&&Xt(`events[${f}].newBall`,`expected a boolean, got ${String(g)}`),g&&!t.events.some((_,m)=>m<f&&_.type!=="move")&&Xt(`events[${f}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&Xt("overlays","expected an object"),l.runPaths!==void 0&&!Yh.includes(l.runPaths)&&Xt("overlays.runPaths",`expected one of ${Yh.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||Xt("overlays.zones","expected an array"),l.zones.forEach((f,p)=>{Ri(f.at,`overlays.zones[${p}].at`),typeof f.w=="number"&&f.w>0&&typeof f.h=="number"&&f.h>0||Xt(`overlays.zones[${p}]`,"w/h metres > 0 required"),f.color!==void 0&&!$h.includes(f.color)&&!rf.test(f.color)&&Xt(`overlays.zones[${p}].color`,`expected ${$h.join("|")} or a hex colour, got ${String(f.color)}`),f.label!==void 0&&typeof f.label!="string"&&Xt(`overlays.zones[${p}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&Xt("keeper","expected { outcome: save | beaten }"),tf.includes(t.keeper.outcome)||Xt("keeper.outcome",`expected one of ${tf.join("|")}, got ${String(t.keeper.outcome)}`)),t}function DS(i){const t=new Oi({color:AS,roughness:.6,toneMapped:!1}),e=new vn,n=new we(new TS(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new ee(.17,.06),new ee(.15,.1)];for(let o=0;o<=8;o++)s.push(new ee(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new ee(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new we(new Zl(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function Cm(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,f=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(f.addColorStop(0,"#0f563c"),f.addColorStop(1,"#0d4e35")):(f.addColorStop(0,"#094027"),f.addColorStop(1,"#0b432b")),i.fillStyle=f,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),f=(Math.floor(h/5)+.15+a()*.7)*(e/4),p=(40+a()*120)*(t/1024),g=a()>.5,_=i.createRadialGradient(l,f,0,l,f,p);_.addColorStop(0,g?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(l-p,f-p,2*p,2*p)}Im(i,t,e,a,1)}function Im(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function FS(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Cm(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),Pm(n);const s=new Pn(e);return s.colorSpace=Xe,s.flipY=!1,s}function Pm(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const NS=2.5;function Lm(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const gn=6;function US(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Cm(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),Pm(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,f,p]of a){const g=s.createLinearGradient(h,l,f,p);g.addColorStop(0,"rgba(0,0,0,0.55)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(0,0,1024,1024)}const c=NS*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",Lm(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new Pn(n);return u.colorSpace=Xe,u.flipY=!1,u}function kS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",Lm(t,40,40,176,176,34),t.fill();const e=new Pn(i);return e.flipY=!1,e}let Pr=null;function OS(){if(Pr)return Pr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Pr=new Pn(i),Pr.userData.shared=!0,Pr}function BS(i){const t=new we(new Da(i/2,24).rotateX(-Math.PI/2),new fn({map:OS(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const ii={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},GS=.5;function $r(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*Ss(s,ii.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*GS*(o/r.length)))}return n}function zS(i){const t=Ss(i,ii.halfW);return t===ii.halfW?ii:{halfW:t,top:Rm(i.width),zMin:-Ki,zMax:Ki}}function Dm(i,t){return i.facing!==void 0?wS[i.facing]:i.at[1]>t/2?Math.PI:0}const Ki=.08;function HS(i){const t=Rm(i),e=new Oi({color:"#FFFFFF",roughness:.5}),n=new vn,s=i/2-Ki;for(const o of[-1,1]){const a=new we(new qr(Ki,Ki,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new we(new qr(Ki,Ki,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Ki,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const Fm=.8;function VS(i,t,e){const n=new we(new Ui(e?i:t,Fm,e?t:i),new Oi({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function Nm(i,t){i.scale.set(1,t,1),i.position.y=Fm*t/2}let of=null;function WS(i){return of??(of=i.loadAsync(Tn("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw of=null,t}))}let af=!1;function jS(i,t){if(af||!t)return;af=!0;const e=new _n().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-ii.halfW)>.05||Math.abs(s-ii.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${ii.halfW}, top ${s.toFixed(3)} vs ${ii.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function XS(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new W(n*(t/2+gn),0,s*(e/2+gn)))}function Tl(i,t){const{width:e,length:n}=i.pitch,s=$r(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=zS(o),h=Dm(o,n),l=Math.cos(h),f=Math.sin(h);for(const p of[-u.halfW*s,u.halfW*s])for(const g of[0,u.top*s])for(const _ of[u.zMin*s,u.zMax*s])r.push(new W(a+p*l+_*f,g,c-p*f+_*l))}return r}const qS=600,Um=qS/2*Math.SQRT2,cf=30,KS=-.06,$S=-.04,YS=660496,ZS="#04170c",lf=.7,km=1.2;function JS(i,t,e){const n=Math.max(t,e),s=n/2+gn,r=km*n;return r>s?1-(1-lf)*au((i-s)/(r-s)):i>=s?lf:1}function au(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const QS=1.6,tA=2.6;function eA(i,t){const e=Math.max(i,t);return{near:QS*e+gn,far:tA*e+gn}}const uf="#0b1f22",Cc="#010203",nA=1.02;function iA(i,t){return Math.hypot(i/2+gn,t/2+gn)*nA}const sA=.12,rA=1.15,cu=(i,t)=>Math.hypot(i/2,t/2),Om=(i,t)=>cu(i,t)*rA,ko=12,Ic=18,hf=.3,oA=2.4,ff=1.2,aA=.4,cA=6;function lA(i,t,e=1/0){const n=i/2+gn,s=t/2+gn,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=uA(o,a,e*hA),u=[-(a+c),a+c],h=-(o+c),l=u.map(f=>r==="z"?[h,f]:[f,h]);return{axis:r,masts:l}}function uA(i,t,e){if(!(e<Math.hypot(i+ko,t+ko)))return ko;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(ko,(-n+Math.sqrt(r))/2)):0}const hA=.97;function lu(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=ZS,t.fillRect(0,0,512,512);let e=7;Im(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new Pn(i);return n.colorSpace=Xe,n.wrapS=n.wrapT=1e3,n}function fA(){const i=new vn,t=new Kr({color:1251867}),e=new we(new Ui(hf,Ic,hf),t);e.position.y=Ic/2;const n=new we(new Ui(oA,ff,aA),t);n.position.y=Ic+ff/2;const s=new Y0(new rm({map:dA(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(cA),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let Lr=null;function dA(){if(Lr)return Lr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Lr=new Pn(i),Lr.userData.shared=!0,Lr}function pA(){return[[0,Cc],[Rl,uf],[_A,uf],[uu,Cc],[1,Cc]]}function mA(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of pA())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new Pn(i);return n.colorSpace=Xe,n.wrapS=n.wrapT=1001,n}const wl=.03,df=.06,gA=.28,uu=1,Rl=uu*df/(df+gA-wl),_A=.85;function bA(i,t={repeat:0,offset:0}){const e=Math.max(i,wl+.03);return t.repeat=(uu-Rl)/(e-wl),t.offset=Rl-t.repeat*(1-e),t}const xA=60,vA=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<xA,yA=-1e3;function Bm(i,t,e,n,s,r){const o=new Kr({map:e,vertexColors:!0}),a=new Kr({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=km*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,f,p]of u){const g=l===n,_=new Fa(l,f,128,p).rotateX(-Math.PI/2),m=_.getAttribute("position"),d=_.getAttribute("uv"),v=g?4:3,M=new Float32Array(m.count*v);for(let E=0;E<m.count;E++){const A=m.getX(E),w=m.getZ(E);d.setXY(E,A/cf,w/cf);const C=Math.hypot(A,w),T=JS(C,i,t);M[v*E]=M[v*E+1]=M[v*E+2]=T,g&&(M[v*E+3]=f>l?1-au((C-l)/(f-l)):1)}d.needsUpdate=!0,_.setAttribute("color",new De(M,v));const y=new we(_,g?a:o);y.userData[r]=g,y.position.y=KS,h.push(y)}return h}function MA(i,t,e=1,n=lu()){const s=new vn;n.anisotropy=e;for(const r of Bm(i,t,n,cu(i,t),Om(i,t),"floatRim"))s.add(r);return s}const Pc=16;function SA(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=cu(i,t),c=Om(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=Pc;l++){const f=Math.round(255*(1-au(l/Pc)));u.addColorStop(l/Pc,`rgb(${f},${f},${f})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new Pn(n);return h.flipY=!1,h}function AA(i,t,e=1,n=Um,s=lu()){const r=new vn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+gn+1),a=o*(1-sA),c=Math.max(a,Math.max(i,t)/2+gn);for(const h of Bm(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=lA(i,t,o);for(const[h,l]of u){const f=fA();f.name="mast",f.position.set(h,0,l),r.add(f)}return r}async function EA(i,t,e=1,n=1,s=Um){var S;const r=$r(t,n),{width:o,length:a}=t.pitch,c=(L,H=0)=>new W(L[0]-o/2,H,L[1]-a/2),u=L=>(L.anisotropy=e,L),h=u(US(o,a,gn)),l=()=>new oi(o+2*gn,a+2*gn).rotateX(-Math.PI/2),f=new we(l(),new Kr({map:h,transparent:!0})),p=new we(l(),new Kr({map:h,alphaMap:SA(o,a,gn),transparent:!0}));for(const L of[f,p])L.position.y=-.02,L.renderOrder=-1,L.receiveShadow=!0;const g=new we(new oi((o+2*gn)*1.5,(a+2*gn)*1.5).rotateX(-Math.PI/2),new fn({map:kS(),transparent:!0,depthWrite:!1}));g.position.y=$S,g.renderOrder=-2,i.add(g);const _=new we(new oi(o,a).rotateX(-Math.PI/2),new Oi({map:u(FS(o,a)),roughness:.9}));_.receiveShadow=!0;const m=lu(),d=AA(o,a,e,s,m),v=MA(o,a,e,m);i.add(f,p,_,d,v);const M=L=>{d.visible=L,g.visible=L,f.visible=L,v.visible=!L,p.visible=!L};M(!0);const y=d.children.filter(L=>L.name==="mast"),E=L=>{for(const H of y)H.visible=L};E(!1);const A=ou(),w=[],C=[];for(const L of t.equipment??[])if(L.type==="cone"){const H=DS(n);H.position.copy(c(L.at,0)),i.add(H),C.push(H)}else{const H=Ss(L,ii.halfW)!==ii.halfW,F=H?HS(L.width):(await WS(A)).clone();F.position.copy(c(L.at)),F.rotation.y=Dm(L,a),F.scale.setScalar(r),i.add(F),w.push(F),H||jS(F,r)}const T=[];for(const L of((S=t.overlays)==null?void 0:S.zones)??[]){if(!wm.test(L.label??""))continue;const H=VS(Math.max(L.w,L.h),Math.min(L.w,L.h),L.w>=L.h),F=c(L.at);H.position.set(F.x,0,F.z),Nm(H,n),i.add(H),T.push(H)}return{toWorld:c,goals:w,cones:C,boards:T,setWorld:M,setMasts:E}}const pf=new W(10,20,8).normalize(),TA=1.05,Cl=2048,wA=1024,RA=1600,CA=(i,t)=>Math.max(i,t)>=RA?Cl:wA,IA=5;function PA(i){const t=new _n().setFromPoints(i).getCenter(new W);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function Ua(i,t=()=>new TM({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=Kh(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=TA,e.outputColorSpace=Xe,i.appendChild(o);const a=new $0;a.background=new ie(_S);const c=new En(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new nu(16772564,IA);u.position.copy(pf).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(Cl,Cl),u.shadow.radius=4,a.add(u,u.target,new y_(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var bt;const j=CA(s.width*h,s.height*h);u.shadow.mapSize.width!==j&&(u.shadow.mapSize.set(j,j),(bt=u.shadow.map)==null||bt.dispose(),u.shadow.map=null)}l();function f(){const j=Kh(i,window,s),bt=Math.min(devicePixelRatio,2),It=bt!==h;if(It&&(h=bt,e.setPixelRatio(h)),j.width!==s.width||j.height!==s.height){s=j,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),S();for(const Dt of[...r])Dt()}else It&&(e.setSize(s.width,s.height,!1),l(),S())}const p=typeof ResizeObserver=="function"?new ResizeObserver(f):null;p?p.observe(i):addEventListener("resize",f);let g=null;const _=()=>{m(),f()};function m(){g==null||g.removeEventListener("change",_),g=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,g==null||g.addEventListener("change",_)}m();let d=!0,v=!1,M=0;function y(){v||(v=!0,M=requestAnimationFrame(B))}function E(){d=!document.hidden,d&&(H=-1,y())}document.addEventListener("visibilitychange",E);let A=!0,w=qh,C=0;const T=new W;function S(){w=mS(w),d&&(v||(H=-1),y())}let L=()=>{},H=-1,F=null,O=null,G=null,N=!0;function V(j,bt){if(L(j,bt),ot(),F&&a.fog){const It=c.position.length();a.fog.near=It+F.near,a.fog.far=It+F.far}e.render(a,c),C++}function B(j){if(v=!1,!d)return;const bt=H<0?0:(j-H)/1e3;H=j,T.copy(c.position),V(bt,j),w=gS(w,T.distanceTo(c.position),bt),A||Tm(w)?y():H=-1}function J(j){if(!j.length)return;const{centre:bt,radius:It,distance:Dt,far:qt}=PA(j);u.target.position.copy(bt),u.target.updateMatrixWorld(),u.position.copy(pf).multiplyScalar(Dt).add(bt);const jt=u.shadow.camera;jt.left=-It,jt.right=It,jt.top=It,jt.bottom=-It,jt.near=.5,jt.far=qt,jt.updateProjectionMatrix()}function Z(j){if(F=j,!j){a.fog=null;return}a.fog??(a.fog=new jl(YS,j.near,j.far))}function lt(j){if(G=j,!j){O&&(O.visible=!1);return}O||(O=new we(new oi(1,1),new fn({map:mA(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),O.renderOrder=yA,O.frustumCulled=!1,a.add(O)),O.visible=N}function St(j){N=j,O&&(O.visible=j&&!!G)}const kt=new W,rt=new W,_t={repeat:0,offset:0};function ot(){if(!O||!G)return;if(!N){O.visible=!1;return}if(c.getWorldDirection(kt),O.visible=vA(kt.y),!O.visible)return;const j=Math.hypot(c.position.x,c.position.z)||1;rt.set(-c.position.x/j*G,0,-c.position.z/j*G),rt.project(c);const bt=(1-rt.y)/2,It=c.near*1.5,Dt=2*It*Math.tan(c.fov*Math.PI/360);O.scale.set(Dt*c.aspect,Dt,1),O.quaternion.copy(c.quaternion),O.position.copy(c.position).addScaledVector(kt,It),bA(bt,_t);const qt=O.material.map;qt.repeat.set(1,_t.repeat),qt.offset.set(0,_t.offset)}return{scene:a,camera:c,renderer:e,fitShadow:J,setFog:Z,setHorizon:lt,setSky:St,size:()=>({...s}),remeasure:f,onBox(j){return r.add(j),()=>{r.delete(j)}},start(j){L=j,y()},park(j){L===j&&(cancelAnimationFrame(M),v=!1,L=()=>{},w=qh,C=0,H=-1)},step(j,bt=performance.now()){V(j,bt)},frames:()=>C,rule:{enable(){A=!1},play(){w=dS(w),S()},pause(){w=pS(w),S()},wake:S,snap:()=>fS(w)},dispose(){d=!1,r.clear(),g==null||g.removeEventListener("change",_),p?p.disconnect():removeEventListener("resize",f),document.removeEventListener("visibilitychange",E),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function Gm(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of zm(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);hu(i)}function hu(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of zm(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const zm=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function LA(i){const t=new Map,e=new Map,n=i.clone();return Hm(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Hm(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Hm(i.children[n],t.children[n],e)}const mf="b4aabedc",Vm=24,DA=/^[\w-]+$/,FA=async i=>await(await fetch(Tn(`drills/${i}.json`))).json();class NA{constructor(t=FA,e=null,n=Vm){Ie(this,"mem",new Map);Ie(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===mf)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:mf,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&DA.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const UA="tactivo-engine",ls="drills",gf=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function kA(){try{return globalThis.indexedDB}catch{return}}function OA(i=kA()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(UA,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(ls)&&r.result.deleteObjectStore(ls),r.result.createObjectStore(ls)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(ls,"readonly").objectStore(ls);return await gf(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await gf(r.transaction(ls,"readwrite").objectStore(ls).put(s,n))}catch{}}}}const Il=["plain","stripes","hoops","halves","sash","sleeves"],_f=["mixed","light","mediumLight","medium","mediumDark","dark"],BA="mixed",Wm="#FFFFFF",Lc=/^#[0-9a-fA-F]{6}$/;function bf(i){if(typeof i!="object"||i===null)return Ke("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!Lc.test(t.a)))return Ke("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!Lc.test(t.b)))return Ke("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!Il.includes(t.pattern)))return Ke(`kit: pattern must be one of ${Il.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!Lc.test(t[e])))return Ke(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!_f.includes(t.skin))?Ke(`kit: skin must be one of ${_f.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??Wm,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const xf=["boys","girls","mixed"],fu="mixed";function vf(i){return i==null?fu:typeof i!="string"||!xf.includes(i)?Ke(`squad: must be one of ${xf.join(", ")}`):i}const yf=["shirt","full"],ka="shirt";function Mf(i){return i==null?ka:typeof i!="string"||!yf.includes(i)?Ke(`framing: must be one of ${yf.join(", ")}`):i}const Sf=new Set(["fit","broadcast"]),du=.5,GA=5,zA={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},HA=100,xa=1/0,VA=2e3,Dc=/^[\w-]+$/,WA=/^[A-Za-z0-9_./-]{1,80}$/,jA=i=>WA.test(i)&&!i.includes(".."),XA=30,qA=85,KA=i=>Math.min(Math.max(i,XA),qA),nr=i=>({state:i,effects:[],out:[]}),ca=(i,t,e,n)=>({state:i,effects:[],out:[{type:"error",code:t,message:e,...n!==void 0?{key:n}:{}}]}),$A=new Set(["auto","authored","off"]),YA=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function ZA(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?jm(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const jm=i=>Math.min(Math.max(i,du),GA);function Xm(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const pu=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},mu=(i,t)=>{var n;const e=pu(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},Ke=i=>({error:i,code:"bad_message"}),Af=i=>{const t=i.narrationBase;return typeof t=="string"&&/^https?:\/\/[^\s]+\/$/.test(t)?{narrationBase:t}:{}};function JA(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||YA.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return Ke("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return Ke("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!Dc.test(n.key)))return{error:`load: key must match ${Dc.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return Ke("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return Ke("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return Ke("load: intro.hold must be a finite number");s={text:a.text,hold:jm(a.hold)}}let r;if(t.kit!==void 0){const a=bf(t.kit);if("error"in a)return a;r=a}const o=vf(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{},...Af(t)}}case"preview":case"kit":{const e=bf(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=Mf(t.framing);if(typeof n!="string")return n;const s=vf(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=Mf(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return Ke("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&jA(n)?{track:n}:{},...Af(t)}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&Dc.test(e)).slice(0,Vm)}:Ke("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?Ke("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?Ke("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?Ke("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?Ke("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!Sf.has(t.follow)?Ke(`setCamera: follow must be one of ${[...Sf].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?Ke("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return Ke(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!$A.has(t.runPaths))return Ke("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return Ke(`unknown message type: ${t.type}`)}}function QA(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{},...t.narrationBase?{narrationBase:t.narrationBase}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??ka,squad:t.squad??fu}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return ca(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return ca(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:KA(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?nr(i):ca(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function us(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return nr(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:Xm(n,0),a=r?s?Math.max(t.hookHold,du):r.hold:0,c=r?a:pu(n,o),u=s?xa:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+VA:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:mu(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?nr(i):ca({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`,t.key);case"hookEnded":return i.holdUntilMs!==xa?nr(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function tE(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===xa?i.hookCeilingMs:i.holdUntilMs;return e<c?nr(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=Xm(i.narration,t),s=i.playing&&e-i.lastTimeMs>=HA;if(n===i.cue&&!s)return nr(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?pu(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[mu(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const gu=["shirt","jersey","top","tshirt"];let Cn=null;async function Oa(i,t,e=Tn("assets/ochi.glb"),n,s=0,r){if(!Cn||Cn.url!==e){const a=await(n??ou()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});Cn={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=Cn.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=LA(Cn.variants[(h%Cn.variants.length+Cn.variants.length)%Cn.variants.length]);l.traverse(p=>{p.castShadow=p.type==="SkinnedMesh",c&&p.isBone&&(p.name=p.name.replace(/_\d+$/,""))}),i.add(l);const f=new V_(l);o.push({root:l,mixer:f,clips:new Map(Cn.clips.map(p=>[p.name,p]))})}return o}const Ef=new WeakMap;function eE(i){let t=Ef.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),Ef.set(i.root,t)),t}function _u(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const nE=_u(/^foot[LR]$/),iE=_u(/^hand[LR]$/),Tf=_u(/^spine00[12]$/),va=.6499;function qm(i){const t=new ie(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/va,1/e)):t}let Fc=null;const Km=3e3;function $m(i){return Fc??(Fc=(async()=>{let t;try{return await Promise.race([i(Tn("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),Km)})])}finally{clearTimeout(t)}})().catch(t=>{throw Fc=null,t})),Fc}async function sE(i,t=Tn("assets/ochi.glb"),e){await Oa(new vn,0,t,e);const n=i.toLowerCase();return Cn?Cn.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function rE(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();gu.some(o=>r.includes(o))&&t.push(r)}}),t}async function oE(i,t=Tn("assets/ochi.glb"),e){await Oa(new vn,0,t,e);const n=Cn?Cn.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>rE(Cn.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const Ym=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function Zm(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;gu.some(o=>r.toLowerCase().includes(o))&&t.push(Ym(r))}}),t}async function Jm(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>Tn(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await $m(r),c=[...new Set(n.map(f=>{var p;return(p=a.channels[f])==null?void 0:p.file}).filter(f=>f!==void 0))];if(!c.length)return null;const u=e.loader??new Ql,h=new Map,l=new Map;for(const f of new Set(t))for(const p of c){const g=(o=a.characters[f])==null?void 0:o.files[p];if(!g)continue;let _=l.get(g);_||(_=await u.loadAsync(s(g)),_.colorSpace="",_.flipY=!1,_.anisotropy=16,_.needsUpdate=!0,l.set(g,_));const m=h.get(f)??[];m[p]=_,h.set(f,m)}return h.size?{channels:a.channels,textures:h,dispose(){for(const f of l.values())f.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function Qm(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await $m(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const wf=new Map;function aE(i){if(!i)return null;let t=wf.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new Pn(n),t.colorSpace="",t.anisotropy=8,wf.set(i,t)}return t}const Nc=new ie("#14181B"),Uc=new ie("#FFFFFF"),cE=.5;function Pl(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??Wm},a=n.from!==void 0&&mE(n.from,s),c=[];return i.root.traverse(u=>{const h=u;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((f,p)=>{const g=f.name||h.name,_=g.toLowerCase();if(!gu.some(m=>_.includes(m))){const m=Lf.get(f)??f,d=pE(s);if(!d&&f===m||a&&f!==m)return;const v=d?m.clone():m;d&&(v.userData.drillOwned=!0,Lf.set(v,m),gE(v,s,h,r),c.push(v)),f!==v&&f.userData.drillOwned&&f.dispose(),Array.isArray(h.material)?h.material[p]=v:h.material=v;return}{const m=f.clone();f.userData.drillOwned&&f.dispose(),m.userData.drillOwned=!0,m.color=qm(o.a),bE(m,o,e,Ym(g),{...n,exact:r}),c.push(m),Array.isArray(h.material)?h.material[p]=m:h.material=m}})}),c}const lE=/^(thigh[LR]|pelvis[LR]|spine)$/,uE=/^shin[LR]$/,hE=8,Rf=i=>Math.round(i*100)/100,ya=[.8,.9],Cf=[Rf(1-ya[1]),Rf(1-ya[0])],fE=8,If=1,dE={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},la=i=>i!==void 0&&i!==BA;function Pf(i,t){var r;const e=[new Se(-1,-1,-1,-1),new Se(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<hE;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const pE=i=>{const t=tg(i);return!!(t.shorts||t.socks||t.tone)},tg=i=>({shorts:i.shorts,socks:i.socks,tone:la(i.skin)?dE[i.skin]:void 0}),mE=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&la(i.skin)===la(t.skin)&&(!la(i.skin)||i.skin===t.skin),Lf=new WeakMap;function gE(i,t,e,n){const s=Pf(e,lE),r=Pf(e,uE),o=tg(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:_s(o.shorts??"#000000",n)},kitSocksC:{value:_s(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:_s(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
	float kitBand = vMapUv.x * ${fE.toFixed(1)};
	float kitSkinAt = step( ${If.toFixed(1)}, kitBand ) * step( kitBand, ${(If+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${Cf[0].toFixed(2)}, ${Cf[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${ya[0].toFixed(2)}, ${ya[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const _E=i=>{const t=new ie(i),e=Math.max(t.r,t.g,t.b);return e>va?va/e:1},_s=(i,t)=>t?new ie(i):qm(i).multiplyScalar(va);function Df(i,t){const e=[new Se(0,0,0,0),new Se(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function bE(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=Df(e==null?void 0:e.channels,t.pattern),l=Df(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),f=o?a==null?void 0:a[n]:void 0,p=f?aE(o):null,g={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:_s(t.a,c)},kitB:{value:_s(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:_s((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:_s((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:p},kitNumO:{value:new ee(...(f==null?void 0:f.o)??[0,0])},kitNumIX:{value:new ee(...(f==null?void 0:f.ix)??[1,0])},kitNumIY:{value:new ee(...(f==null?void 0:f.iy)??[0,1])},kitNumOn:{value:p?1:0},kitNumFlip:{value:cE*(c?1:_E(t.a))}};i.userData.kitUniforms=g,i.onBeforeCompile=_=>{Object.assign(_.uniforms,g),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${Nc.r.toFixed(4)}, ${Nc.g.toFixed(4)}, ${Nc.b.toFixed(4)} )
		: vec3( ${Uc.r.toFixed(4)}, ${Uc.g.toFixed(4)}, ${Uc.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const xE=.18;function Ff(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const lr=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function gi(i){const t=lr(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=t-s*(i.hold??0),a=(n*n-r*r)/(2*e),c=(n*n-s*s)/(2*e);if(a+c<=o){const h=o-a-c;return{D:t,t1:(n-r)/e,t2:h/n,t3:(n-s)/e,d1:a,d2:h,peak:n}}const u=Math.sqrt(e*o+(r*r+s*s)/2);return{D:t,t1:(u-r)/e,t2:0,t3:(u-s)/e,d1:(u*u-r*r)/(2*e),d2:0,peak:u}}function pe(i){const t=gi(i);return t.t1+t.t2+t.t3+(i.hold??0)}function kc(i,t){const e=gi(i),n=i.accel,s=Math.min(i.startSpeed??0,i.cruise),r=i.endSpeed??0,o=Math.min(Math.max(t,0),e.D);if(o<=e.d1)return(Math.sqrt(s*s+2*n*o)-s)/n;if(o<=e.d1+e.d2)return e.t1+(o-e.d1)/e.peak;const a=e.D-r*(i.hold??0);return o>a&&r>0?e.t1+e.t2+e.t3+(o-a)/r:e.t1+e.t2+(e.peak-Math.sqrt(Math.max(0,e.peak*e.peak-2*n*(o-e.d1-e.d2))))/n}function si(i,t){const e=gi(i),n=e.t1+e.t2+e.t3,s=n+(i.hold??0),r=Math.min(Math.max(t-i.t0,0),s),o=i.accel;let a,c;if(r<=e.t1){const h=Math.min(i.startSpeed??0,i.cruise);a=h*r+.5*o*r*r,c=h+o*r}else if(r<=e.t1+e.t2)a=e.d1+e.peak*(r-e.t1),c=e.peak;else if(r<=n){const h=r-e.t1-e.t2;a=e.d1+e.d2+e.peak*h-.5*o*h*h,c=e.peak-o*h}else c=i.endSpeed??0,a=e.D-c*(s-r);const u=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*u,i.from[1]+(i.to[1]-i.from[1])*u],speed:c}}const vE=.25,eg=.5,Ma=.5,yE=1e-4,Nf=1e-6;function bu(i,t){return!!t.flow&&(i.endSpeed??0)>0&&i.endSpeed===t.startSpeed&&Math.abs(i.t0+pe(i)-t.t0)<Nf&&lr(i.to,t.from)<Nf}function Ll(i,t){if(!bu(i,t))return null;const e=lr(i.from,i.to),n=lr(t.from,t.to);if(e<=0||n<=0)return null;const s=[(i.to[0]-i.from[0])/e,(i.to[1]-i.from[1])/e],r=[(t.to[0]-t.from[0])/n,(t.to[1]-t.from[1])/n],o=Math.acos(Math.min(1,Math.max(-1,s[0]*r[0]+s[1]*r[1])));if(o<yE)return null;const a=Math.min(2*eg/Math.sin(o/2),Ma*e,Ma*n);return{corner:[i.to[0],i.to[1]],dA:s,dB:r,L:a,turn:o}}function ng(i,t){const e=-(1-t)*(1-t),n=t*t,{corner:s,dA:r,dB:o,L:a}=i;return{pos:[s[0]+a*(e*r[0]+n*o[0]),s[1]+a*(e*r[1]+n*o[1])],tan:[(1-t)*r[0]+t*o[0],(1-t)*r[1]+t*o[1]]}}function ME(i,t){const e=Math.sin(t);return e/(e+Math.sin(i-t))}function Zi(i,t){let e=-1;for(let a=0;a<i.length;a++)t>=i[a].t0&&(e=a);if(e<0)return null;const n=i[e],{pos:s,speed:r}=si(n,t),o=lr(n.from,n.to);if(o>0){const a=Math.hypot(s[0]-n.from[0],s[1]-n.from[1]);let c=null,u=0;const h=e+1<i.length?Ll(n,i[e+1]):null;if(h&&a>o-h.L)c=h,u=(a-(o-h.L))/(2*h.L);else{const l=e>0?Ll(i[e-1],n):null;l&&a<l.L&&(c=l,u=(l.L+a)/(2*l.L))}if(c){const{pos:l,tan:f}=ng(c,u);return{pos:l,speed:r*Math.hypot(f[0],f[1]),vel:[r*f[0],r*f[1]]}}}return t>n.t0+pe(n)||o<=0?{pos:s,speed:r,vel:[0,0]}:{pos:s,speed:r,vel:[(n.to[0]-n.from[0])/o*r,(n.to[1]-n.from[1])/o*r]}}function Uf(i,t){var e;return((e=Zi(i,t))==null?void 0:e.vel)??[0,0]}function SE(i,t,e=vE){const n=Uf(i,t),s=Uf(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const AE=2.5;function EE(i,t){let e=0;for(const n of i)t>=n.t0&&(e=gi(n).peak);return Math.min(1,e/AE)}const TE=.035,wE=.1,kf=.4,RE=1;function CE(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||lr(s.from,s.to)<RE)continue;const r=s.t0+pe(s)-wE,o=(t-r)/kf;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+kf)||(e=Math.max(e,TE*.5*(1-Math.cos(2*Math.PI*o))))}return e}function Be(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function IE(i,t=0){return i-t}function Ba(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function PE(i,t=58*Math.PI/180,e=.85){const n=Ba(i);return Math.min(t,Math.max(-t,n))*e}const LE=.3;function DE(i,t,e){return e>0?i+(t-i)*(1-Math.pow(1-LE,e*60)):i}const FE=1.2,Oc=180*Math.PI/180,Bc=120*Math.PI/180,Of=70*Math.PI/180;function xu(i){return i<=0?Oc:i<=2.3?Oc+(Bc-Oc)*i/2.3:i>=5.48?Of:Bc+(Of-Bc)*(i-2.3)/(5.48-2.3)}const NE=.12,Bf=15*Math.PI/180;function UE(i){return Math.max(-Bf,Math.min(Bf,i*NE))}const kE=.001;function Pi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=kE}function OE(i,t,e,n){return e||n||!Pi(i,t)?null:Be(i,t)}function Gf(i,t,e,n=Math.PI*2){const s=t-i,r=Ba(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const BE=2.3,Gr=1.1,GE=1.15,zf=.6,Hf=1.2,ua=.88,zE=1-ua,HE=.15,Oo=.28;function es(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?GE:BE),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?zf:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??Hf;u=(e<ua?h*Math.sin(Math.PI*e/ua):HE*h*Math.sin(Math.PI*(e-ua)/zE))+c}else if(n==="lofted")u=(i.loft??Hf)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=Oo?o+(h-o)*Math.sin(Math.PI/2*(e/Oo)):a+(h-a)*Math.cos(Math.PI/2*((e-Oo)/(1-Oo)))}else n==="drop"?u=(i.fromHeight??zf)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const Vf=new WeakMap;function VE(i){const t=Vf.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,es(i,i.t0+i.duration*n/32).height);return Vf.set(i,e),e}function ig(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=es(i,n),r=es(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function sg(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const Wf=3,Fn=2.52,Gn=4,Ws=.8,Bo=1,Ci=.3,Dr=.6,Rn=.15,WE=.5,fi=.45,rg=.4,og=.7,jf=Math.PI/12,js=4,jE=.6,Xf=.4,XE=.3,qE=.15,KE=.4,$E=.35,Yr=.3,YE=Math.PI/4,ZE=.25,JE={left:"gk_dive_a",right:"gk_dive_b"},ag=4,QE=.12,t1=.25,e1=.35;function qf(i){return Math.min(t1,Math.max(QE,i*e1))}const n1=1.3,i1=.15;function Kf(i,t,e){const n=i-i1,s=i+t-n,r=Math.min(n1,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const s1=1.8,$f=.3,r1=.7,o1=.9,a1=2.5,An={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},c1={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:An.roll},Go={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},l1=.8;function u1(i,t,e,n=Ga){const s=ag*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-pg)*t)}const h1=3;function f1(i,t,e){if(t<=0)return null;const n=Math.min(h1,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Qn=1,zo=.25,Gc=.5,Yf=.8,d1=.4,cg=3,p1=.6,m1=2.3,Zf=.9,Xs=.3,Jf=.4,g1=12,_1=8,b1=3,x1=.25;function Qf(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Dl,r/_1),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(x1*r,b1)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Dl,r/g1),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const v1=.6,Dl=.2;function y1(i,t,e){const n=v1*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Dl,e/n)}const M1=16,S1=12,zc=2,A1=8,E1=.1,T1=2.44;function bs(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function lg(i,t,e){const n=bs(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const Hc=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],Ho={id:"pass_a",duration:.567,contact:.167,reach:.89},td="jog_back_a",Fr=.5,w1=.5,R1=.3,C1=.9,ed=.5,I1=.2,nd=.8,Vc=.5,P1=1.6,Vo={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},id=3,L1=.1,Wo=["walk","jog","run"],ha=.5,D1=1.5*ha,F1=.42*Math.SQRT1_2,N1=12,U1=.15;function k1(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=Ss(n,Ga)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function sd(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const p of t){const g=Math.hypot(s[0]-p[0],s[1]-p[1]);e-g>u+1e-9&&(u=e-g,c=p)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?sn(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const f=n(s);f>o+1e-9&&(r=s,o=f)}return r}function rd(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Nr(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const O1=.2;function od(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function ad(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?sn([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=ze+L1?null:[t[0]-ze*s[0],t[1]-ze*s[1]],o=e?sn([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(ze,rg),og);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function B1(i){return i<15?"roll":i<30?"throw":"kick"}function ug(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function G1(i,t,e,n,s){const{reach:r,at:o}=ug(i,e,n);if(r>cg*s)return null;const a=sn([e[0]-i[0],e[1]-i[1]]);if(r<=p1*s)return{kind:"catch",clip:An.catch.id,clipDuration:An.catch.duration,contactOffset:An.catch.contact,contact:[i[0]+ze*a[0],i[1]+ze*a[1]],travelTo:null};const c=gg(i,t,n),u=An.dive[c],h=sn([o[0]-i[0],o[1]-i[1]]),l=Math.min(m1*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function z1(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=sn(c);return[a[0]+$f*n*u[0],a[1]+$f*n*u[1]]}function hg(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function fg(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=hg(r,n))}return s}const H1=[{id:"header_a",duration:1.9,contact:1}],V1=1.57,cd=.1,ld=.6,Wc=2,jo=.02,jc=.6,W1=2.5,j1=.22,X1=3,q1=6.5;function Xc(i,t){return Math.min(Math.max(j1*i,X1),q1)*t}const K1=10,$1=1.7;function Y1(i,t,e,n){const s=e??[t[0],t[1]],r=sn([s[0]-i[0],s[1]-i[1]]),o=[i[0]+cd*n*r[0],i[1]+cd*n*r[1]],a=H1[0];return{contact:o,height:V1*n,clip:a,set:[i[0]+ze*r[0],i[1]+ze*r[1]],faceAt:s}}const ud=.4,Z1=.3,J1=18,Q1=10,tT=.45,eT=.8,fa={id:"strike_jog_a",contact:.4},nT=1,iT={strike_jog_a:{loop:!1,category:"shoot",ballContact:fa.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function dg(i){var t;for(const[e,n]of Object.entries(iT))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const hd=.15,sT=.2,Ga=3.35,pg=.5;function rT(i,t,e,n,s=1){let r=null,o=1/0;for(const g of e){const _=Math.hypot(g.at[0]-t[0],g.at[1]-t[1]);_<o&&(o=_,r=g)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-pg)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const g=Be(i,c),_=m=>(m[0]-i[0])*Math.cos(g)-(m[1]-i[1])*Math.sin(g);return u.sort((m,d)=>_(d)-_(m)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const f=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),p=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return f<p-1e-6?u[0]:u[1]}function fd(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const mg=.35;let ze=mg;function dd(i){ze=i}function oT(){return ze/mg}function ti(i,t){return[i[0]+ze*Math.sin(t),i[1]+ze*Math.cos(t)]}function qc(i,t,e){const n=Be(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function gg(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function sn(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function pd(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function aT(i,t,e){const n=sn([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=sn([e[0]-i[0],e[1]-i[1]]);const p=n[0]*s[1]-n[1]*s[0];r=Math.abs(p)<1e-6?1:Math.sign(p)}else r=1,s=pd([-n[0],-n[1]],-r*jf);const o=pd(n,r*jf),a=[i[0]+ze*o[0],i[1]+ze*o[1]],c=[i[0]+ze*s[0],i[1]+ze*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,f=Math.min(Math.max(h,rg),og);return{contact:a,set:[a[0]+f*l[0],a[1]+f*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const cT=.5,lT=1.4,md={walk:.8,jog:1.2,run:2.2},uT=.25,hT=.7,fT=.3,dT=2,Ur=.4,pT=10,mT=8,gT=2.5,gd=6,_T=2,_d=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],bd=1.4;function xd(i,t,e){const n=i.t0+pe(i),s=Kc(i,t);let r=0,o=Math.max(n-t,.001);if(Kc(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;Kc(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function Kc(i,t){const e=si(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function bT(i,t,e,n,s,r={}){const o=pe(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=sn([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Be(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=w=>(w[0]-i.from[0])*a[0]+(w[1]-i.from[1])*a[1],l=i.t0+o,f=h(e),p=oT(),g=(r.others??[]).filter(w=>Math.abs((w[0]-i.from[0])*Math.cos(c)-(w[1]-i.from[1])*Math.sin(c))<=_T).map(w=>h(w)),_=hT*p,m=uT*p,d=w=>h(si(i,w).pos),v=[],M=[];let y=i.t0,E=[...t];const A=Math.ceil(gi(i).D/(.5*Math.min(n,Ur*3)))+8;for(let w=0;;w++){M.push(y);const C=h(E),T=f-C,S=r.turnOut?Ur:n,L=Ur*(1+bd),H=w===0&&!!r.turnIn||!!r.turnOut&&T<=L,F=H?ze:_;if(T<=bd*S||w===A-1||f-(d(y)+F)<.05){const X=Math.hypot(e[0]-E[0],e[1]-E[1]);let be=y;if(X>1e-6){const se=Math.max(si(i,y).speed,cT*i.cruise),Qt=Math.min(2*X/(se+Gr*(X/se)/2),Math.max(l-y,.2));v.push({from:E,to:[...e],t0:y,duration:Qt,style:"push",endFrac:0}),be=y+Qt}return be<l&&v.push({from:[...e],to:[...e],t0:be,duration:l-be,style:"ground"}),{flights:v,touches:M,restEnd:Math.max(be,l)}}let O=H?Ur:n;if(!H&&T>pT){let X=T;for(const be of g)be>C&&(X=Math.min(X,be-C));O*=Math.min(Math.max(X/mT,1),gT)}const G=O;O*=1+_d[w%_d.length],!H&&r.turnOut&&T-O<L&&(O=Math.max(T-L,Ur));const N=Math.min(O,lT*i.cruise*i.cruise/Gr),V=xd(i,y,N),B=Math.max(i.cruise*V-N,0),J=Math.min(F,C-d(y)+B),Z=d(y)+J,lt=Math.max(C,Z),St=G>dT?s:s*(w%2?-1:1),kt=Math.min(m,fT*N),rt=(E[0]-i.from[0])*u[0]+(E[1]-i.from[1])*u[1],_t=Math.abs(St*kt-rt),ot=Math.sqrt(Math.max(gd*gd-_t*_t,0)),j=Math.min(lt+N,C+ot,f),bt=xd(i,y,j-Z),It=(j-C)/bt,Dt=It+Gr*bt/2,qt=It-Gr*bt/2,jt=[i.from[0]+a[0]*j+u[0]*St*kt,i.from[1]+a[1]*j+u[1]*St*kt],ce={from:E,to:jt,t0:y,duration:bt,style:"push",endFrac:Math.max(qt,0)/Dt};v.push(ce),E=[...jt],y+=bt}}function mi(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function zn(i,t,e){const n=mi(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const vu=.3,_g=[{gait:"run_slow",clip:"run_slow_a"},{gait:"run_b",clip:"run_b"}];function bg(i){const t=El.filter(n=>{var s;return(s=i.groups[n])==null?void 0:s.length}).map(n=>({gait:n,clipSpeed:i.clips[i.groups[n][0]].speed??Fn})).sort((n,s)=>n.clipSpeed-s.clipSpeed);return[...t.map((n,s)=>({...n,min:s===0?vu:Math.sqrt(t[s-1].clipSpeed*n.clipSpeed)})),..._g.filter(n=>{var s;return(s=i.clips[n.clip])==null?void 0:s.speed}).map(n=>({gait:n.gait,clipSpeed:i.clips[n.clip].speed,min:1/0}))].sort((n,s)=>n.clipSpeed-s.clipSpeed)}function da(i,t,e,n){const s=i.groups[t];return s!=null&&s.length?zn(s,e,n):_g.find(r=>r.gait===t).clip}function za(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function xT(i,t,e=!0){const n=gi(i),s=n.t1+n.t2+n.t3,r=s+(i.hold??0);if(r<=0||!t.length)return[];const o=i.endSpeed??0,a=i.startSpeed??0,c=new Set([0,r]);for(const l of t)l.min>n.peak||(l.min>a&&c.add((l.min-a)/i.accel),l.min>o&&c.add(s-(l.min-o)/i.accel));const u=[...c].sort((l,f)=>l-f),h=[];for(let l=0;l+1<u.length;l++){if(u[l+1]-u[l]<1e-9)continue;const f=za(t,si(i,i.t0+(u[l]+u[l+1])/2).speed);if(!f)continue;const p=h[h.length-1];p&&p.gait===f.gait&&Math.abs(p.t1-(i.t0+u[l]))<1e-9?p.t1=i.t0+u[l+1]:h.push({gait:f.gait,t0:i.t0+u[l],t1:i.t0+u[l+1]})}return e?xg(h):h}const vT=.3;function xg(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=vT;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const Ha=.85,Di=1.15,vd=.5;function vg(i){return vd+(Ha-vd)*Math.min(1,Math.max(0,i))}function yT(i,t){const e=i/t;return e>Di?Di:Math.max(vg(e),e)}function MT(i,t){return Math.min(Di,Math.max(Ha,i/t))}function ST(i,t,e){const n=i.findIndex(h=>h.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=Ha&&r<=Di)return{timeScale:r,partner:null,weight:0};const o=r>Di?1:-1;let a;for(let h=n+o;h>=0&&h<i.length;h+=o)(!a||Math.abs(i[h].clipSpeed-t)<Math.abs(a.clipSpeed-t))&&(a=i[h]);if(!a)return{timeScale:r>Di?Di:Math.max(vg(r),r),partner:null,weight:0};const c=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),u=(1-c)*s.clipSpeed+c*a.clipSpeed;return{timeScale:MT(t,u),partner:a.gait,weight:c}}const AT=new Set(["pass","shoot","receive","header","defensive"]),Sa=new Set(["turn","transition"]),Ni=.15,yg=.1,Mg=.3,ET=.45,TT=.2,wT=.12,RT=.6;function yu(i,t){var e;return AT.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function Sg(i,t,e){var r,o;if(yu(i,t))return yg;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return Sa.has(n??"")?Ni:n==="idle"?s==="idle"?RT:s==="locomotion"?wT:Ea:n==="locomotion"&&s==="locomotion"?TT:Sa.has(s??"")?Ni:Ea}function Ag(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?ET:Sa.has(e??"")?Ni:yu(i,t)?Mg:Ea}function CT(i,t,e){var n;return yu(i,t)||Sa.has(((n=i.clips[t])==null?void 0:n.category)??"")?Ag(i,t):Sg(i,e,t)}function IT(i,t,e){var r,o;const n=(r=i.clips[t])==null?void 0:r.category,s=(o=i.clips[e])==null?void 0:o.category;return n==="turn"||s==="turn"?!0:n==="locomotion"?s==="idle"||e===Aa:t===Aa&&s==="idle"}const tn=Math.PI/180,Li={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*tn,t50:.567,t90:.8,peak:159*tn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*tn,t50:.533,t90:.8,peak:213*tn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*tn,t50:.4,t90:.6,peak:366*tn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*tn,t50:.767,t90:1.033,peak:192*tn,standing:!1}};function $c(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function Eg(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+Ni&&(n=s);return n}function PT(i,t,e,n){const s=Eg(i,t,e);if(!s)return null;const r=Li[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=$c(r,s.offset),u=$c(r,s.offset+o),h=$c(r,a),l=u-c>1e-9?(h-c)/(u-c):1,f=n??s.from,p=n===void 0?s.to-s.from:di(n,s.to),g=Math.min(1,(e-s.t0)/Ni),_=e<=s.end?1:Math.max(0,1-(e-s.end)/Ni),m=Math.max(0,Math.min(g,_));return{heading:f+p*l,clipYaw:r.yaw*h*m}}function LT(i,t){return i.peak+xu(t)}function DT(i,t,e){const n=Math.abs(i);return n<Fl?null:n>qT&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Fl=45*tn,yd=60*tn,FT=.3,NT=.5,UT=.7,kT=130*tn,Aa="run_stop_a",Md=.75,OT=.167;function BT(i,t){var s;if((i.endSpeed??0)>0)return null;const e=gi(i),n=(s=za(t,e.peak))==null?void 0:s.gait;return n!=="run"&&n!=="sprint"||e.t3<Md-OT?null:i.t0+e.t1+e.t2+e.t3-Md}const Xo=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Sd={left:"strafe_l_a",right:"strafe_r_a"},GT=3.2,zT=3.2,Tg=60*tn,HT=120*tn,VT=100*tn,Ad=[{id:"jog_back_diag_a",axis:225.5*tn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*tn,speed:2.27}],WT=5;function jT(i,t){if(Math.abs(i)>Tg)return null;const e=i>=0?Ad[0]:Ad[1];return t<=e.speed*Di?{id:e.id,axis:e.axis}:null}function XT(i,t){const e=Math.abs(i);return e<=Tg?t>GT?null:t>(Xo[0].speed+Xo[1].speed)/2?Xo[1].id:Xo[0].id:e>HT||t>zT?null:i>0?Sd.right:Sd.left}const qT=120*tn;function di(i,t){return Ba(t-i)}const Ea=.25;function Js(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?sT:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=Ag(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function KT(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function wg(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Js(t,r)&&(s=r);return s}const $T=.15;function YT(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const ZT=.1,Ed=2,JT=6,QT=.4;function Ta(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function qo(i,t){return Ta(mi(i),20973)*t}function Ko(i){return 1+ZT*(2*Ta(mi(i),10196)-1)}function Rg(i,t){return(Ed+Ta(mi(i),7047)*(JT-Ed))*(1+QT*(2*Ta(mi(i)+t*2654435761,28490)-1))}function tw(i,t){let e=0;for(let n=0;n<64;n++)if(e+=Rg(i,n),t<e)return n;return 64}function Td(i,t,e){const n=i.length;if(n<=1)return i[0];const s=mi(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function ew(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const nw=new Set(["receive_a","pass_a","pass_b"]),Cg=.8,iw=.7;function Ig(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function Mu(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+pe(n)?0:si(n,t).speed);return e}function sw(i,t,e){for(const n of i)nw.has(n.clip)&&Mu(t[n.player],Ig(e,n))>=Cg&&(n.additive=!0)}const rw=1,ow=2,aw=.025,wd=.2,cw=.4,Rd="idle_transition";function lw(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/wd,(o-r)/wd);a<=0||(n=Math.max(n,aw*a*.5*(1-Math.cos(2*Math.PI*ow*r))))}return n}const Cd="idle_b",uw=.5,hw=.3,fw=.15;function dw(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,uw*Math.min(1,(e-s.t0)/hw)*Math.min(1,(s.t1-e)/fw)));return n}function pw(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=Ig(e,r)-rw,a=r.t0;if(a-o<cw||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(Mu(t[r.player],u)>vu){c=!0;break}const h=wg(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[Rd]&&s.push({player:r.player,clip:Rd,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const mw=.6,Pg=.5,Lg=.6,Wr=2*Pg/Lg,wa=Wr/Lg,gw=Pg-Yr;function _w(i){return(Wr-Math.sqrt(Math.max(0,Wr*Wr-2*wa*i)))/wa}function bw(){return Wr-wa*_w(gw)}const xw=.15,vw=.05;function yw(i,t,e){const n=Be(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(ZE,s/2):Yr,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+YE;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function Mw(i,t,e,n,s,r){const o=Math.min(Yr,e*(n-Ci)/2);for(let a=o;a>=xw-1e-9;a-=vw){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}const $o=.05,Nl=.3,Sw=3,Aw=1.5,Ew=100*tn,Id=1.3,Pd=.5,Tw=.5,Ld=.5;function ww(i){return i<=30*tn?1:i<=60*tn?.75:.5}function Rw(i,t){if(t<=1e-9)return 0;const e=i.endSpeed??0,n=gi({...i,hold:0});if(e>=i.cruise-1e-9||n.peak<i.cruise-1e-9)return null;const s=t/(1-e/i.cruise);return e*s<=n.d2+1e-9?s:null}const Cw=10*tn,Dd=50;function Iw(i,t,e=1){var Gt,ne,xe,Fe,Ae,ln,un,ai,Nn,yn,Un,qn,ht,Pt,te,ve,He,Qe,Ct;ew(t),dg(t);const n=ba(i),s=bg(t),r={};i.players.forEach(I=>r[I.id]=[...I.start]);const o={},a=[],c=[],u=[],h=[],l=[],f=[],p=[],g=[],_={},m={},d=new Map,v=new Map,M=new Set,y={},E={},A={},w={};function C(I){u.push(I),y[I.player]=I.t0,Pi(r[I.player],I.at)&&(T[I.player]=Be(r[I.player],I.at))}const T={},S={},L={};function H(I){const x=_[I];let nt=Math.max(x?x.t0+pe(x):0,S[I]??0,0);for(const $ of c)$.player===I&&t.clips[$.clip]&&(nt=Math.max(nt,Js(t,$)));return nt}function F(I,x,nt,$){if(D.has(I)||!Pi(r[I],nt))return null;const b=T[I]??0,P=di(b,Be(r[I],nt));if(Math.abs(P)<yd)return null;const k=Li[P>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[k.id])return null;const z=O(k),U=H(I),K=Math.max(U,Math.min(x,$-z));return K+z>$+1e-9?null:(N(I,k,K,0,b,b+P),K)}function O(I,x=0){return I.duration-x-Ni}function G(I,x){const nt=Math.abs(x)>kT,$=I==="run"?Li.turn_180_a:null,b=nt&&$&&t.clips[$.id]?$:Li.turn_to_run_a,P=b.id===Li.turn_to_run_a.id?NT:0,k=b.id===Li.turn_to_run_a.id?UT:O(b,P);return{c:b,offset:P,play:k}}function N(I,x,nt,$,b,P,k){const z=k??O(x,$),U={player:I,clip:x.id,t0:nt,offset:$,end:nt+z,from:b,to:P},K={player:I,clip:x.id,t0:nt,...$?{offset:$}:{},...k!==void 0?{loopUntil:nt+z}:{}};p.push(U),c.push(K),L[I]={span:U,cue:K},S[I]=U.end+Ni}function V(I,x){const nt=L[I];return!nt||nt.span.end<=x+1e-9?!0:x-nt.span.t0<FT?!1:(nt.span.end=x,nt.cue.loopUntil=x,S[I]=x+Ni,!0)}function B(I,x){if(V(I,x))return;const nt=L[I];p.splice(p.indexOf(nt.span),1);const $=c.indexOf(nt.cue);$>=0&&c.splice($,1),delete L[I],S[I]=0}function J(I,x=1/0){const nt=F(I.player,I.t0,I.at,x);C(nt===null?I:{...I,t0:nt})}const Z=[];function lt(I){var x;for(let nt=0;nt<Z.length;nt++){const $=Z[nt];$.afterT>=I||(Z.splice(nt--,1),(o[x=$.player]??(o[x]=[])).push($.move),_[$.player]=$.move,m[$.player]=rt($.move,$.player),C({player:$.player,at:$.faceBall,t0:$.move.t0}),C({player:$.player,at:$.faceSettle,t0:$.arrival}),r[$.player]=[...$.move.to])}}function St(I,x,nt){let $=[...r[I]],b=[...r[I]];const P=_[I];let k=Math.max(P?P.t0+pe(P):0,E[I]??0),z=-1/0,U=null;for(let K=x+1;K<At.length;K++){const it=At[K];if(it.t>=nt)break;if((it.type==="pass"?it.from:it.player)!==I)continue;if(it.type!=="move"){U=`${it.type} at t=${it.t}`;break}const Q=t.groups[it.gait??"jog"]??t.groups.jog,et=t.clips[zn(Q,I,it.t)].speed??Fn,ft={from:$,to:[...it.to],t0:it.t,cruise:et,accel:Gn},Tt=it.t+pe(ft);k=Math.max(k,Tt),$=[...it.to],b=Tt>nt?si(ft,nt).pos:[...it.to],z=it.t}return{expected:$,atArrival:b,busyUntil:k,afterT:z,blocked:U}}function kt(I,x,nt=I[0].t0){const $=[];for(const k of I)for(const z of xT(k,s,!1)){const U=$[$.length-1];U&&U.gait===z.gait&&Math.abs(U.t1-z.t0)<1e-9?U.t1=z.t1:$.push(z)}const b=t.clips[Aa]?BT(I[I.length-1],s):null,P=xg($).filter(k=>b===null||k.t0<b-1e-9).map(k=>({player:x,clip:da(t,k.gait,x,nt),t0:k.t0,loopUntil:b===null?k.t1:Math.min(k.t1,b)}));return b!==null&&P.push({player:x,clip:Aa,t0:b}),P}function rt(I,x){const nt=kt([I],x),$=L[x];if($){let b=1/0;for(const P of nt)P.t0>$.span.t0+1e-9&&P.t0<$.span.end-1e-9&&(b=Math.min(b,P.t0));b<1/0&&B(x,b)}return c.push(...nt),d.set(I,nt),nt}function _t(I,x){return I.filter(nt=>{if(nt.t0>=x-1e-9)return!0;if((nt.loopUntil??1/0)<=x+1e-9){const $=c.indexOf(nt);return $>=0&&c.splice($,1),!1}return nt.t0=x,!0})}function ot(I,x,nt="event"){(st[I]??0)>x&&console.warn(`[engine3d] ${I} is on the ground until t=${st[I].toFixed(2)}s but has a ${nt} at t=${x} — schedule it later`);const $=_[I];if(!$)return;const b=$.t0+pe($);if(x<b){const P=`buildSchedule: player ${I} has an event at t=${x} while still moving from a move started at t=${$.t0} (in flight until t=${b.toFixed(3)})`;if(vt.has(I))console.warn(`[engine3d] ${P} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(P)}}function j(I){let x=null,nt=-1/0;for(const $ of g)$.t<=I&&$.t>=nt&&(x=$.player,nt=$.t);return x}const bt=[];function It(I,x,nt){const $=i.balls??[],b=Q=>Q.carrier&&r[Q.carrier]?ti(r[Q.carrier],T[Q.carrier]??0):sg(Q,x);let P=-1,k=1/0;const z=r[I];if($.forEach((Q,et)=>{if(bt.some(pt=>pt.take===et))return;const ft=b(Q),Tt=Math.hypot(ft[0]-z[0],ft[1]-z[1]);Tt<k&&(k=Tt,P=et)}),P<0||k>Wf){const Q=$.length?P<0?"every spare has already been used":`the nearest is ${k.toFixed(1)} m away (needs ${Wf} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${nt} by ${I} at t=${x.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${Q} — played with the ball already in play`);return}const U=j(x),K=U?bs(l,U,x):null,it=K?[...K.carry]:U&&r[U]?ti(r[U],T[U]??0):Nr(a,n,x).at,dt=b($[P]);bt.push({t:x,drop:it,take:P,at:dt}),g.push({t:x,player:I}),l.push({player:I,at:x,carry:dt}),E[I]=x}const Dt=Object.fromEntries(i.players.map(I=>[I.id,I.team]));function qt(I,x,nt,$,b,P){const k=j($);if(!k||k===I||D.has(I)||Dt[I]==="coach"||Dt[k]===Dt[I])return null;const z=Q=>{if(!Pi(x,Q)||!Pi(x,nt))return null;const et=Be(x,nt),ft=di(Be(Q,x),et),Tt=Math.hypot(Q[0]-x[0],Q[1]-x[1])<=WT?jT(ft,b):null;if(Tt&&t.clips[Tt.id]){const at=et-Tt.axis,ct=Math.hypot(Q[0]-x[0],Q[1]-x[1])||1;return{clip:Tt.id,ball:[x[0]+ct*Math.sin(at),x[1]+ct*Math.cos(at)]}}const pt=XT(ft,b);return pt&&t.clips[pt]?{clip:pt,ball:Q}:null},U=z(r[k]?[...r[k]]:Nr(a,n,$).at),K=i.events.find(Q=>Q.type==="pass"&&Q.from===k&&Q.t>=$-1e-9&&Q.t<=$+P/2),it=(K==null?void 0:K.type)==="pass"&&r[K.to]?[...r[K.to]]:null,dt=U?U.ball:nt;return!it||!Pi(x,it)||!Pi(x,dt)||Math.abs(di(Be(x,dt),Be(x,it)))<=VT?U:z(it)}const jt={};for(const I of i.events)I.type==="move"&&(jt[Gt=I.player]??(jt[Gt]=[])).push(I.t);function ce(I,x,nt){for(const $ of me){const b=$.id;if(!Nt.length||j(I)===b||!t.clips[Go.left.id]||!t.clips[Go.right.id])continue;const P=_[b],k=Math.max(I,q[b]??0,P?P.t0+pe(P):0);if(f.some(gt=>gt.player===b))continue;const z=Nt.reduce((gt,xt)=>Math.hypot(xt.at[0]-$.start[0],xt.at[1]-$.start[1])<Math.hypot(gt.at[0]-$.start[0],gt.at[1]-$.start[1])?xt:gt,Nt[0]),U=z.at,K=z.sideways?1:0,it=z.sideways?0:1,dt=u1(wt,e,Math.abs(r[b][it]-U[it]),z.halfW),et=U[K]+Math.min(dt,Math.max(-dt,(nt[K]-U[K])*l1))-r[b][K],ft=Be(U,[i.pitch.width/2,i.pitch.length/2]),Tt=z.sideways?-Math.sin(ft):Math.cos(ft),pt=f1(et,Go[et*Tt>0?"left":"right"].dist*wt,Math.sign(Tt)||1);if(!pt)continue;const at=Go[pt.side],ct=Math.min(x,i.duration)-pt.steps*at.duration;if(ct<k-1e-9||(jt[b]??[]).some(gt=>gt>=ct-1e-9))continue;const mt=Math.sign(et)*at.dist*wt;for(let gt=0;gt<pt.steps;gt++){const xt=[...r[b]],Wt=[...xt];Wt[K]=xt[K]+mt;const Jt=rd(xt,Wt,ct+gt*at.duration,at.duration);(o[b]??(o[b]=[])).push(Jt),r[b]=[...Jt.to],_[b]=Jt}c.push({player:b,clip:at.id,t0:ct,loopUntil:ct+pt.steps*at.duration}),m[b]=[]}}function X(I,x){var P;const nt=(P=i.players.find(k=>k.id===I))==null?void 0:P.start;if(!nt||!Nt.length)return!1;let $=Nt[0].at,b=1/0;for(const k of Nt){const z=Math.hypot(k.at[0]-nt[0],k.at[1]-nt[1]);z<b&&(b=z,$=k.at)}return Math.hypot(x[0]-$[0],x[1]-$[1])<=N1*wt}function be(I,x){const nt=_[I];if(!nt||nt.endSpeed)return;const $=nt.t0+pe(nt);if(x-$>=Bo)return;nt.endSpeed=Ws;const b=nt.t0+pe(nt);for(const P of m[I]??[]){const k=c.indexOf(P);k>=0&&c.splice(k,1)}if(m[I]=rt(nt,I),b>x-Ci){if(vt.has(I)){console.warn(`[engine3d] player ${I}'s move started at t=${nt.t0} still arrives at t=${b.toFixed(3)}, less than ${Ci}s before their action at t=${x} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${I}'s move started at t=${nt.t0} still arrives at t=${b.toFixed(3)} even flowing into their action at ${Ws} m/s, less than ${Ci}s before their action at t=${x} — move the event later or start the approach move earlier`)}}function se(I,x,nt,$,b){const P=_[I],k=P?P.t0+pe(P):0;if(P&&(P.endSpeed!==void 0||x-k<Bo))return null;const z=yw(r[I],nt,b),U=t.groups.walk,K=U!=null&&U.length?t.clips[U[0]].speed??Fn:Fn,it={from:[...r[I]],to:z,t0:0,cruise:K,accel:Gn};let dt=x-$-pe(it);return dt<Math.max(k,E[I]??0)||!V(I,dt)?null:(it.t0=dt,(o[I]??(o[I]=[])).push(it),b&&M.add(it),_[I]=it,m[I]=rt(it,I),r[I]=[...z],dt)}function Qt(I,x,nt){const $=Nr(a,n,x).at,b=Be($,nt),P=[$[0]-ze*Math.sin(b),$[1]-ze*Math.cos(b)],k=Math.hypot(P[0]-r[I][0],P[1]-r[I][1]);if(k<E1){r[I]=[...P];return}const z=_[I],U=z?z.t0+pe(z):0,K=Math.max(U,E[I]??0,0);let it;for(let dt=k<id?0:1;dt<Wo.length;dt++){const Q=t.groups[Wo[dt]]??t.groups.jog,et=t.clips[zn(Q,I,x)].speed??Fn;if(it={from:[...r[I]],to:P,t0:0,cruise:et,accel:Gn,endSpeed:Ws},it.t0=x-Ci-pe(it),it.t0>=K)break}it.t0<K&&(console.warn(`[engine3d] dead-ball run-up for ${I} at t=${x.toFixed(2)}s wants to start at t=${it.t0.toFixed(2)}s but he is not free until t=${K.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),it.t0=K),V(I,it.t0),(o[I]??(o[I]=[])).push(it),_[I]=it,m[I]=rt(it,I),r[I]=[...P]}function Ot(I,x,nt){const $=Nr(a,n,x);{const Q=sd($.at,fe,D1*wt);if(Math.hypot(Q[0]-$.at[0],Q[1]-$.at[1])>1e-6){const et=a.filter(ft=>ft.t0<=x&&Math.hypot(ft.to[0]-$.at[0],ft.to[1]-$.at[1])<1e-9);if(et.length){for(const ft of et)Math.hypot(ft.from[0]-$.at[0],ft.from[1]-$.at[1])<1e-9&&(ft.from=[...Q]),ft.to=[...Q];$.at=Q}}}const b=j(x);b&&b!==I&&g.push({t:x,player:null});const P=$.moving?$.restT+O1:-1/0;let k=null;for(let Q=nt+1;Q<At.length;Q++){const et=Yt[Q];if(!(!et||et.actor!==I)){et.t-x<=js+3&&(k=et.target);break}}let z=ad(r[I],$.at,k);if(z.stepTo){const Q=sd(z.stepTo,fe,F1*wt),et=[Q[0]-$.at[0],Q[1]-$.at[1]];if(Math.hypot(et[0],et[1])>1e-6){const ft=sn(et),Tt=ze+1,pt=ad([$.at[0]+Tt*ft[0],$.at[1]+Tt*ft[1]],$.at,k);pt.stepTo&&Rt(pt.stepTo)&&(z=pt)}}let U=1/0;for(let Q=nt+1;Q<At.length;Q++){const et=At[Q];if((et.type==="pass"?et.from:et.player)===I){U=et.t;break}}let K=x;if(z.stepTo){const Q=Math.hypot(z.stepTo[0]-r[I][0],z.stepTo[1]-r[I][1]);let et;for(let ft=Q<id?0:1;ft<Wo.length;ft++){const Tt=t.groups[Wo[ft]]??t.groups.jog,pt=t.clips[zn(Tt,I,x)].speed??Fn;if(et={from:[...r[I]],to:z.stepTo,t0:x,cruise:pt,accel:Gn,endSpeed:Ws},x+pe(et)+fi+Ci<=U)break}if(P>x+pe(et)){const ft=P-x,Tt=Math.hypot(z.stepTo[0]-et.from[0],z.stepTo[1]-et.from[1]),pt=Gn*Gn*ft*ft-4*Gn*Tt,at=pt>0?(Gn*ft-Math.sqrt(pt))/2:et.cruise,ct=(t.clips[zn(t.groups.walk,I,x)].speed??vu)*Ha;et={...et,cruise:Math.max(Math.min(at,et.cruise),ct),endSpeed:0}}(o[I]??(o[I]=[])).push(et),vt.set(I,x),_[I]=et,m[I]=rt(et,I),K=x+pe(et),r[I]=[...z.stepTo]}K=Math.max(K,P),C({player:I,at:[...$.at],t0:Math.max(x,y[I]??0),lock:[K-Rn,K+Rn]});const it=Q=>{for(const et of m[I]??[]){const ft=c.indexOf(et);et.t0>=Q?ft>=0&&c.splice(ft,1):(et.loopUntil??0)>Q&&(et.loopUntil=Q)}};if(D.has(I)&&X(I,$.at)){const Q=An.scoop[0],et=K-Q.contact;return et<x&&console.warn(`[engine3d] keeper ${I}'s scoop at t=${K.toFixed(2)}s wants to start at t=${et.toFixed(2)}s, before his collect at t=${x.toFixed(2)}s — schedule the collect earlier`),it(Math.max(et,0)),c.push({player:I,clip:Q.id,t0:Math.max(et,0),contact:Q.contact}),C({player:I,at:[...z.faceAt],t0:K}),g.push({t:K,player:I}),l.push({player:I,at:K,carry:[...$.at],hand:{height:Qn*wt,from:U1*wt,rise:Yf,follow:!0}}),E[I]=K,q[I]=Math.max(et,0)+Q.duration+Xs,K}const dt=zn(t.groups.pass,I,K);return it(K-(t.clips[dt].ballContact??0)),c.push({player:I,clip:dt,t0:K-(t.clips[dt].ballContact??0)}),a.push({from:[...$.at],to:z.set,t0:K,duration:fi,style:"ground"}),C({player:I,at:[...z.faceAt],t0:K}),g.push({t:K,player:I}),l.push({player:I,at:K+fi,carry:z.set}),E[I]=K+fi,K+fi}const me=i.players.filter(I=>I.role==="keeper"),wt=e,D=new Set(me.map(I=>I.id));i.players.forEach(I=>T[I.id]=I.role==="keeper"?Be(I.start,n):0);const R=((ne=i.keeper)==null?void 0:ne.outcome)==="save",q={},st={},vt=new Map,tt={},Ft={},At=[...i.events].sort((I,x)=>I.t-x.t);if(i.ball&&!i.ball.static){const I=n,x=i.players.reduce((b,P)=>Math.hypot(P.start[0]-I[0],P.start[1]-I[1])<Math.hypot(b.start[0]-I[0],b.start[1]-I[1])?P:b,i.players[0]),nt=At.find(b=>b.type!=="move"||b.player===(x==null?void 0:x.id)&&D.has(b.player)),$=nt?nt.type==="pass"?nt.from:nt.player:null;if(!((nt==null?void 0:nt.type)==="collect"||((nt==null?void 0:nt.type)==="pass"||(nt==null?void 0:nt.type)==="shoot")&&nt.deadBall))if($&&D.has($))g.push({t:0,player:$}),E[$]=0,(nt==null?void 0:nt.type)==="pass"&&!!nt.fromFeet||l.push({player:$,at:0,carry:[...n],hand:{height:Qn*wt,follow:!0}});else{const b=i.players.filter(z=>z.role!=="keeper"),P=b.length?b:i.players,k=P.reduce((z,U)=>Math.hypot(U.start[0]-n[0],U.start[1]-n[1])<Math.hypot(r[z.id][0]-n[0],r[z.id][1]-n[1])?U:z,P[0]).id;g.push({t:0,player:k}),E[k]=0}}const Nt=(i.equipment??[]).filter(I=>I.type==="goal").map(I=>({at:I.at,halfW:Ss(I,Ga),sideways:I.facing==="e"||I.facing==="w"})),fe=k1(i.equipment,e),Rt=I=>I[0]>=0&&I[0]<=i.pitch.width&&I[1]>=0&&I[1]<=i.pitch.length,Ht=I=>fe.every(x=>Math.hypot(x[0]-I[0],x[1]-I[1])>=ha*wt),Kt={};i.players.forEach(I=>Kt[I.id]=[...I.start]);const Yt=At.map(I=>{if(I.type==="move")return Kt[I.player]=[...I.to],null;if(I.type==="dribble")return Kt[I.player]=[...I.to],{actor:I.player,target:[...I.to],t:I.t};if(I.type==="collect"||I.type==="tackle")return null;const x=I.type==="pass"?I.from:I.player;I.deadBall&&(Kt[x]=[...n]);const nt=I.type==="pass"?[...Kt[I.to]]:I.flightStyle==="ground"?[...I.at]:rT(Kt[I.player],I.at,Nt,I.corner,e);return{actor:x,target:nt,t:I.t}});for(let I=0;I<At.length;I++){const x=At[I];lt(x.t);const nt=x.type==="pass"?x.from:x.player;if(x.newBall&&It(nt,x.t,x.type),x.type!=="dribble"&&x.type!=="move"&&delete w[nt],x.type==="move"){ot(x.player,x.t,x.type);const b=D.has(x.player)&&(((Fe=(xe=bs(l,x.player,x.t))==null?void 0:xe.hand)==null?void 0:Fe.height)??0)>0;j(x.t)===x.player&&!b&&console.warn(`[engine3d] move event for ${x.player} at t=${x.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const P=t.groups[x.gait??"jog"]??t.groups.jog,k=t.clips[zn(P,x.player,x.t)].speed??Fn,z=A[x.player],K={from:z&&x.t<z.t0?[...z.at]:[...r[x.player]],to:x.to,t0:x.t,cruise:k,accel:Gn},it=qt(x.player,K.from,x.to,x.t,k,pe(K)),dt=it?null:(()=>{const et=za(s,k);if((et==null?void 0:et.gait)!=="run"&&(et==null?void 0:et.gait)!=="sprint"||!t.clips[Li.turn_to_run_a.id]||D.has(x.player)||H(x.player)>x.t+1e-9||!Pi(K.from,x.to))return null;const ft=di(T[x.player]??0,Be(K.from,x.to));return Math.abs(ft)>=yd?{delta:ft,gait:et.gait}:null})();(o[Ae=x.player]??(o[Ae]=[])).push(K),_[x.player]=K,m[x.player]=rt(K,x.player);const Q={t0:x.t,face:null,r11:!!it,start:null};if(v.set(K,Q),it){for(const ft of m[x.player]??[]){const Tt=c.indexOf(ft);Tt>=0&&c.splice(Tt,1)}const et={player:x.player,clip:it.clip,t0:x.t,loopUntil:x.t+pe(K)};c.push(et),m[x.player]=[et],d.set(K,[et]),Q.face={player:x.player,at:it.ball,t0:x.t,until:x.t+pe(K)},C(Q.face)}else{if(dt){const{c:et,offset:ft,play:Tt}=G(dt.gait,dt.delta),pt=T[x.player]??0;N(x.player,et,x.t,ft,pt,pt+dt.delta,Tt);const at=x.t+Tt;Q.start={...L[x.player],end:at},m[x.player]=_t(m[x.player]??[],at),d.set(K,m[x.player])}Q.face={player:x.player,at:x.to,t0:x.t},C(Q.face)}r[x.player]=[...x.to]}else if(x.type==="dribble"){ot(x.player,x.t,x.type),j(x.t)!==x.player&&console.warn(`[engine3d] dribble event for ${x.player} at t=${x.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const b=x.gait??"jog",P=t.groups[b]??t.groups.jog,k=t.clips[zn(P,x.player,x.t)].speed??Fn,z=Be(r[x.player],x.to),U=(((un=(ln=bs(l,x.player,x.t))==null?void 0:ln.hand)==null?void 0:un.height)??0)>0,K=U?lg(l,x.player,x.t):0,it=U?x.t+Jf:x.t,dt={from:[...r[x.player]],to:[...x.to],t0:it,cruise:k,accel:Gn};let Q=null;for(let le=I+1;le<At.length;le++){const de=Yt[le];if(!(!de||de.actor!==x.player)){Q={target:de.target,t:de.t};break}}const et=it+pe(dt);let ft=null;for(let le=I+1;le<At.length;le++){const de=At[le];if((de.type==="pass"?de.from:de.player)===x.player){ft=de;break}}let Tt=null;if((ft==null?void 0:ft.type)==="dribble"&&ft.t-et<=js){const le=di(z,Be(x.to,ft.to)),de=DT(le,b),_e=de?Li[de]:null;if(_e&&t.clips[_e.id]){const Mt=_e.standing?et:it+pe({...dt,endSpeed:Ws});ft.t-Mt>=O(_e)-1e-9&&(Tt={c:_e,delta:le})}}Q&&Q.t-et<Bo&&!(Tt!=null&&Tt.c.standing)&&(dt.endSpeed=Ws),Tt&&N(x.player,Tt.c,ft.t-O(Tt.c),0,z,z+Tt.delta),(o[ai=x.player]??(o[ai]=[])).push(dt),_[x.player]=dt,m[x.player]=rt(dt,x.player),C({player:x.player,at:[...x.to],t0:x.t});let pt=null;for(const le of l)le.player===x.player&&(!pt||le.at>pt.at)&&(pt=le);pt&&pt.at>x.t+1e-9&&console.warn(`[engine3d] dribble for ${x.player} at t=${x.t.toFixed(2)}s starts during their settle (ends t=${pt.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let at=pt?[...pt.carry]:ti(r[x.player],z);U&&(at=ti(r[x.player],z),l.push({player:x.player,at:x.t,carry:[...at],hand:{height:0,from:K,rise:Jf,follow:!0}}),E[x.player]=x.t);const ct=Q&&Q.t-et<=js?ti(x.to,Be(x.to,Q.target)):ti(x.to,z),mt=mi(x.player)%2===0?1:-1;let gt=mt,xt=!1;for(let le=I+1;le<At.length;le++){const de=At[le];if((de.type==="pass"?de.from:de.player)===x.player){if(de.type==="dribble"&&de.t-et<=js){const Mt=sn([x.to[0]-dt.from[0],x.to[1]-dt.from[1]]),oe=sn([de.to[0]-x.to[0],de.to[1]-x.to[1]]),ue=Mt[0]*oe[1]-Mt[1]*oe[0],ae=ue<0?1:-1;Math.abs(ue)>.05&&ae===-mt&&(gt=ae),xt=Math.abs(di(Be(dt.from,x.to),Be(x.to,de.to)))>Fl}break}}const Wt=w[x.player],Jt=!!Wt&&it-Wt.end<=js&&Math.abs(di(Wt.h,z))>Fl;w[x.player]={h:z,end:et};const Ne=Object.entries(r).filter(([le])=>le!==x.player).map(([,le])=>[...le]),$t=bT(dt,at,ct,md[b]??md.jog,gt,{turnIn:Jt,turnOut:xt,others:Ne});a.push(...$t.flights),l.push({player:x.player,at:$t.restEnd,carry:[...ct]}),E[x.player]=$t.restEnd,r[x.player]=[...x.to],ce($t.restEnd,((Nn=At[I+1])==null?void 0:Nn.t)??i.duration,[...ct])}else if(x.type==="collect")ot(x.player,x.t,x.type),Ot(x.player,x.t,I);else if(x.type==="tackle"){ot(x.player,x.t,x.type),be(x.player,x.t);const b=x.from;j(x.t)!==b&&console.warn(`[engine3d] tackle by ${x.player} at t=${x.t.toFixed(2)}s from ${b}, but ${j(x.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const P=D.has(x.player)&&!!t.clips[Vo.id],k=!P&&x.style!=="slide"&&!!t.clips[Ho.id],z=x.t+(P?Vo:k?Ho:Hc[0]).contact;let U=null,K=-1/0;for(const pt of l)pt.player===b&&pt.at<=z&&pt.at>K&&(K=pt.at,U=[...pt.carry]);if(U||(U=ti(r[b],Be(r[b],r[x.player]))),k){const pt=C1*wt,at=sn([r[x.player][0]-r[b][0],r[x.player][1]-r[b][1]]);if(Math.hypot(r[x.player][0]-r[b][0],r[x.player][1]-r[b][1])<pt){const ct=[r[b][0]+pt*at[0],r[b][1]+pt*at[1]],mt=_[x.player];if(mt&&Math.hypot(mt.to[0]-r[x.player][0],mt.to[1]-r[x.player][1])<1e-6){const gt=(t.clips[zn(t.groups.sprint??t.groups.run??t.groups.jog,x.player,x.t)].speed??mt.cruise)*Di,xt=Math.min(pe(mt),Math.max(z-mt.t0,.2));mt.to=ct;for(let Wt=0;Wt<8&&pe(mt)>xt+1e-6&&mt.cruise<gt;Wt++)mt.cruise=Math.min(gt,mt.cruise*pe(mt)/xt);for(const Wt of m[x.player]??[]){const Jt=c.indexOf(Wt);Jt>=0&&c.splice(Jt,1)}m[x.player]=rt(mt,x.player),r[x.player]=z<mt.t0+pe(mt)?si(mt,z).pos:ct}else r[x.player]=ct}}const it=k?Math.hypot(r[b][0]-r[x.player][0],r[b][1]-r[x.player][1]):Math.hypot(U[0]-r[x.player][0],U[1]-r[x.player][1]),dt=P?Vo.reach:k?Ho.reach+ze:P1;it>dt*wt&&console.warn(`[engine3d] tackle by ${x.player} at t=${x.t.toFixed(2)}s: the ball is ${it.toFixed(2)} m away (reach ${(dt*wt).toFixed(2)}) — move the tackler closer first`),k&&it<ha*wt-1e-6&&console.warn(`[engine3d] tackle by ${x.player} at t=${x.t.toFixed(2)}s: he is ${it.toFixed(2)} m from ${b}, inside a body width (${(ha*wt).toFixed(2)} m at this body scale) — the two of them draw as one`);const Q=P?Vo:k?Ho:Hc[Math.abs(mi(x.player)+Math.floor(x.t*10))%Hc.length],et=x.t+Q.contact,ft={player:x.player,clip:Q.id,t0:x.t,contact:Q.contact};if(c.push(ft),C({player:x.player,at:U,t0:Math.max(x.t-Dr,0,y[x.player]??0),lock:[x.t,x.t+Q.duration]}),P){const pt=Js(t,ft),at=ti(r[x.player],Be(r[x.player],U));g.push({t:et,player:x.player});const ct=qc(r[x.player],r[b],U);l.push({player:x.player,at:et,carry:[...U],hand:{height:zo*wt,follow:!0,bone:ct}}),l.push({player:x.player,at:pt,carry:at,hand:{height:Qn*wt,from:zo*wt,rise:Gc,follow:!0,bone:ct}}),E[x.player]=et,q[x.player]=x.t+Q.duration+Xs}let Tt;if(!P){const pt=sn([r[b][0]-r[x.player][0],r[b][1]-r[x.player][1]]),at=[-pt[1],pt[0]],ct=(U[0]-r[b][0])*at[0]+(U[1]-r[b][1])*at[1]>=0?1:-1,mt=gt=>[r[b][0]+ct*gt*wt*at[0]+nd*wt*pt[0],r[b][1]+ct*gt*wt*at[1]+nd*wt*pt[1]];if(Tt=mt(ed),k){let gt=od(r[b],U,Tt);for(let xt=ed+.05;xt<=1&&!(gt>=R1*wt);xt+=.05){const Wt=mt(xt),Jt=od(r[b],U,Wt);Jt>gt&&(gt=Jt,Tt=Wt)}}a.push({from:U,to:Tt,t0:et,duration:Vc,style:"ground",pop:!0}),g.push({t:et,player:null})}if(k){let pt=1/0;for(let xt=I+1;xt<At.length;xt++){const Wt=At[xt];if((Wt.type==="pass"?Wt.from:Wt.player)===b){pt=Wt.t;break}}const at=[...Tt],ct=Math.max(et,y[b]??0),mt=F(b,ct,at,pt-Ci),gt=Math.min(pt,Math.max(et+Vc,mt===null?0:S[b]));(mt??ct)<gt&&C({player:b,at,t0:mt??ct,until:gt})}else if(t.clips[td]){let pt=1/0;for(let xt=I+1;xt<At.length;xt++){const Wt=At[xt];if((Wt.type==="pass"?Wt.from:Wt.player)===b){pt=Wt.t;break}}const at=sn([r[b][0]-U[0],r[b][1]-U[1]]),ct=w1*wt,mt=et+I1,gt=rd([...r[b]],[r[b][0]+ct*at[0],r[b][1]+ct*at[1]],mt,Fr);if(mt+Fr+Ci<=pt){(o[b]??(o[b]=[])).push(gt),_[b]=gt,c.push({player:b,clip:td,t0:mt,loopUntil:mt+Fr}),m[b]=[];const xt=Math.max(mt,y[b]??0);xt<mt+Fr&&C({player:b,at:[...U],t0:xt,until:mt+Fr}),r[b]=[...gt.to]}}P||Ot(x.player,Math.max(Js(t,ft),et+Vc),I)}else{const b=x.type==="pass"?x.from:x.player,P=tt[b],k=!!P&&x.t>=P.at-jo&&x.t-P.at<=Wc;P&&!k&&console.warn(`[engine3d] header for ${b} at t=${x.t} does not meet the cross at their forehead (t=${P.at.toFixed(2)}s) — played as an ordinary ${x.type}`),delete tt[b];const z=Ft[b],U=!!z&&!!x.firstTime&&!k;x.firstTime&&!z&&!k&&console.warn(`[engine3d] firstTime ${x.type} for ${b} at t=${x.t} has no ball arriving at their boot — played as an ordinary strike`),delete Ft[b],k&&x.t-P.at>ld&&console.warn(`[engine3d] header for ${b} at t=${x.t} pulled to the ball's arrival (t=${P.at.toFixed(2)}s) — the ball cannot wait in the air`),ot(b,x.t,x.type),k||be(b,x.t);const K=x.type==="pass"?r[x.to]:Yt[I].target,it=x.type==="shoot"&&x.flightStyle!=="ground",dt=it?tT:$E,Q=it?eT:Dr;x.deadBall&&!k&&Qt(b,x.t,K);const et=D.has(b)&&j(x.t)===b&&(((Un=(yn=bs(l,b,x.t))==null?void 0:yn.hand)==null?void 0:Un.height)??0)>0,ft=!et&&(x.style==="throw"||x.style==="roll")?x.style:null;D.has(b)&&(q[b]??0)>x.t&&console.warn(`[engine3d] keeper ${b} is busy until t=${q[b].toFixed(2)}s (save / catch clip still playing) but has a ${x.type} at t=${x.t} — schedule it later`);const Tt=Mt=>{if(!k)return null;const oe=Math.hypot(Mt[0]-$t[0],Mt[1]-$t[1]);return oe>=K1?{style:"headed",loft:Xc(oe,wt)}:null};let pt=x.t;if(x.type==="shoot"&&!x.touch){const Mt=_[b],oe=Mt?Mt.t0+pe(Mt):-1/0;Mt&&(Mt.endSpeed??0)>0&&x.t-oe>hd&&x.t-oe<Bo&&(pt=oe-hd)}let at="",ct,mt,gt=0,xt=null,Wt=null;if(k)ct=P.at,gt=P.height;else if(U)at=zn(t.groups[it?"shoot":"pass"],b,pt),mt=t.clips[at].ballContact??0,pt=z.at-mt,ct=z.at,pt<0&&console.warn(`[engine3d] first-time ${x.type} for ${b} wants its cue at t=${pt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((et||ft)&&(x.type==="pass"||x.flightStyle==="ground")){xt=x.style??B1(Math.hypot(K[0]-r[b][0],K[1]-r[b][1]));const Mt=ft?c1[ft]:An[xt];at=Mt.id,mt=Mt.contact,ct=x.t+Mt.contact,gt=xt==="roll"?0:Mt.release*wt,q[b]=x.t+Mt.duration+Xs}else{const Mt=_[b],oe=x.type==="shoot"&&Mt&&(Mt.endSpeed??0)>0&&pt<=Mt.t0+pe(Mt)+1e-9?si(Mt,pt).speed:0;Wt=se(b,pt,K,dt,x.type==="pass"||x.type==="shoot"&&!!x.touch),oe>nT&&t.clips[fa.id]&&!(x.type==="shoot"&&x.touch)?(at=fa.id,mt=fa.contact):at=zn(t.groups[it?"shoot":"pass"],b,x.t),ct=pt+(mt??t.clips[at].ballContact??0)}let Jt=null;k||(Jt={player:b,clip:at,t0:pt,...mt!==void 0?{contact:mt}:{}},c.push(Jt),J({player:b,at:[...K],t0:Math.max(pt-Q,0,y[b]??0),lock:[pt,ct+Rn],until:ct+Rn,headUntil:ct-$T},Math.min(pt,Wt??1/0)));const Ne=Be(r[b],K),$t=k?[...P.from]:U?[...z.from]:ti(r[b],Ne),le=ft?S1:M1,de=x.type==="pass"&&D.has(x.to)&&!x.toFeet?x.flight:0,_e=x.type!=="pass"?0:xt==="throw"?Math.max(.4,de,Math.hypot(K[0]-$t[0],K[1]-$t[1])/le):x.style==="roll"?Math.max(x.flight,Math.hypot(K[0]-$t[0],K[1]-$t[1])/A1):x.flight;if(!k&&!U){const Mt=Math.max(pt-WE,E[b]??0);Mt>ct&&console.warn(`[engine3d] departure window for ${b} is inverted (starts t=${Mt.toFixed(2)}s, ball contact t=${ct.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:b,windowStart:Mt,contact:ct,heading:Ne,...xt?{toHeight:gt}:{}})}if(x.type==="pass"&&D.has(x.to)&&!x.toFeet){const Mt=ct+_e,oe=St(x.to,I,Mt);oe.blocked&&console.warn(`[engine3d] ball to the keeper ${x.to} at t=${x.t}: their authored ${oe.blocked} runs during the flight, so where they stand at t=${Mt.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const ue=oe.atArrival,ae=sn([$t[0]-ue[0],$t[1]-ue[1]]),We=[ue[0]+ze*ae[0],ue[1]+ze*ae[1]],Oe=(x.flightStyle==="clipped"||x.flightStyle==="lofted")&&x.style!=="roll",Ee=((qn=x.deflect)==null?void 0:qn.style)==="lofted",Zt=Oe?(x.loft??0)>a1||Ee?An.catchHigh:An.catch:An.scoop[Math.abs(mi(x.to)+Math.floor(Mt*10))%An.scoop.length],re=Oe?Math.min(Qn*(Zt===An.catchHigh?2:1),T1)*wt:0,Ce=Mt-Zt.contact;Ce<0&&console.warn(`[engine3d] receive cue for ${x.to} wants t0=${Ce.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Ce<oe.busyUntil&&console.warn(`[engine3d] catch cue for ${x.to} at t=${Mt.toFixed(2)}s wants t0=${Ce.toFixed(2)}s but their move is still running (until t=${oe.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Ce<ct&&console.warn(`[engine3d] catch cue for ${x.to} at t=${Mt.toFixed(2)}s wants t0=${Ce.toFixed(2)}s, before the ball leaves ${b} at t=${ct.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:x.to,clip:Zt.id,t0:Ce,contact:Zt.contact});const Ye=x.flightStyle==="lofted"?Xc(Math.hypot(We[0]-$t[0],We[1]-$t[1]),wt)-(gt+re)/2:xt==="throw"?Math.max(ft?zc:1.5,x.loft??0):x.loft;if(a.push({from:$t,to:We,t0:ct,duration:_e,style:xt==="kick"?"clipped":Oe||xt==="throw"?"lofted":"ground",...Ye!==void 0?{loft:Ye}:{},...re?{toHeight:re}:{},...gt?{fromHeight:gt}:{}}),C({player:x.to,at:[...r[b]],t0:x.t,lock:[Mt-Rn,Mt+Rn]}),x.deflect)a.push(Qf(We,re,x.deflect,Mt,wt)),E[x.to]=Mt;else{g.push({t:Mt,player:x.to});const Le=qc(r[x.to],r[b],We);l.push({player:x.to,at:Mt,carry:We,hand:Oe?{height:Qn*wt,from:re,rise:Gc,follow:!0,bone:Le}:{height:Qn*wt,from:0,rise:Yf,follow:!0,bone:Le}}),E[x.to]=Mt}q[x.to]=Ce+Zt.duration+Xs}else if(x.type==="pass"&&!x.toFeet&&x.flightStyle==="lofted"&&(x.loft??W1)>=$1){const Mt=ct+_e;let oe=null,ue=1/0,ae=!1,We=!1,Oe;for(let Le=I+1;Le<At.length;Le++){const Ue=Yt[Le],Ge=At[Le];if((Ge.type==="move"||Ge.type==="collect")&&Ge.player===x.to&&Oe===void 0&&Ge.t>=Mt-jo&&(Oe=Ge.t),!(!Ue||Ue.actor!==x.to)){oe=Ue.target,ue=Ue.t,We=Ge.type==="pass"||Ge.type==="shoot",ae=We&&!!Ge.header;break}}Oe!==void 0&&We&&ue-Mt<=Wc&&console.warn(`[engine3d] ${x.to} has a move at t=${Oe.toFixed(2)}s between the cross landing on their forehead (t=${Mt.toFixed(2)}s) and their strike at t=${ue} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const Ee=We&&Oe===void 0&&ue>=Mt-jo&&(ue-Mt<=ld||ae&&ue-Mt<=Wc),Zt=St(x.to,I,Mt);Zt.blocked&&!Ee&&console.warn(`[engine3d] cross to ${x.to} at t=${x.t}: their authored ${Zt.blocked} runs during the flight, so where they stand at t=${Mt.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const re=Y1(Zt.atArrival,$t,oe,wt),Ce=Mt-re.clip.contact;Ce<0&&console.warn(`[engine3d] header cue for ${x.to} wants t0=${Ce.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Ce<Zt.busyUntil&&console.warn(`[engine3d] header cue for ${x.to} wants t0=${Ce.toFixed(2)}s but their move is still running (until t=${Zt.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:x.to,clip:re.clip.id,t0:Ce,contact:re.clip.contact});const Ye=Math.hypot(re.contact[0]-$t[0],re.contact[1]-$t[1]);a.push({from:$t,to:re.contact,t0:ct,duration:_e,style:"lofted",loft:Xc(Ye,wt)-(gt+re.height)/2,toHeight:re.height,...gt?{fromHeight:gt}:{}}),Ee?(tt[x.to]={at:Mt,from:re.contact,height:re.height},C({player:x.to,at:[...oe],t0:Math.max(Ce-Dr,0,y[x.to]??0),lock:[Ce,Mt+Rn],until:Mt+Rn})):(We&&ue<Mt-jo?console.warn(`[engine3d] ${x.to}'s own strike at t=${ue} is ${(Mt-ue).toFixed(2)}s BEFORE the cross reaches their forehead (t=${Mt.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):ae&&console.warn(`[engine3d] header for ${x.to} at t=${ue} is ${(ue-Mt).toFixed(2)}s after the ball arrives (t=${Mt.toFixed(2)}s) — ignored, cushioned instead`),C({player:x.to,at:[...r[b]],t0:x.t,lock:[Mt-Rn,Mt+Rn]}),a.push({from:re.contact,to:re.set,t0:Mt,duration:jc,style:"drop",fromHeight:re.height}),C({player:x.to,at:[...re.faceAt],t0:Mt}),g.push({t:Mt,player:x.to}),E[x.to]=Mt+jc,l.push({player:x.to,at:Mt+jc,carry:re.set}))}else if(x.type==="pass"){const Mt=ct+_e,oe=zn(t.groups.receive,x.to,Mt),ue=t.clips[oe];let ae=null,We=1/0,Oe=!1;for(let Ee=I+1;Ee<At.length;Ee++){const Zt=At[Ee];(Zt.type==="pass"?Zt.from:Zt.player)===x.to&&We===1/0&&(We=Zt.t);const Ce=Yt[Ee];if(!(!Ce||Ce.actor!==x.to)){Ce.t-Mt<=js&&(ae=Ce.target,Oe=(Zt.type==="pass"||Zt.type==="shoot")&&!!Zt.firstTime);break}}if(Oe&&ae){const Ee=St(x.to,I,Mt),Zt=ti(Ee.atArrival,Be(Ee.atArrival,ae));a.push({from:$t,to:Zt,t0:ct,duration:_e,style:x.flightStyle==="lofted"?"lofted":x.flightStyle==="clipped"?"clipped":"ground",...x.loft!==void 0?{loft:x.loft}:{},...gt?{fromHeight:gt}:{}}),C({player:x.to,at:[...r[b]],t0:x.t,lock:[Mt-Rn,Mt+Rn]}),Ft[x.to]={at:Mt,from:Zt},ce(Mt,((ht=At[I+1])==null?void 0:ht.t)??i.duration,Zt)}else{const Ee=aT(K,$t,ae);let Zt=x.t;{const Le=St(x.to,I,Mt),Ue=Le.expected,Ge=Math.max(x.t,Le.busyUntil),eo=Math.max(Le.afterT,x.t),gr=Le.blocked;Zt=Ge;const en=Math.hypot(Ee.contact[0]-Ue[0],Ee.contact[1]-Ue[1]);if(en>jE)if(gr)console.warn(`[engine3d] receive for ${x.to}: the ball lands ${en.toFixed(2)}m away at t=${Mt.toFixed(2)}s, but their authored ${gr} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Kn=sn([Ee.contact[0]-Ue[0],Ee.contact[1]-Ue[1]]),xi=[Ee.contact[0]-ze*Kn[0],Ee.contact[1]-ze*Kn[1]],kn=t.groups.walk,As=kn!=null&&kn.length?t.clips[kn[0]].speed??Fn:Fn,ci={from:Ue,to:xi,t0:0,cruise:As,accel:Gn},Bi=Mt-Xf-pe(ci);Bi<Ge-1e-9?console.warn(`[engine3d] receive adjustment for ${x.to}: the ${(en-ze).toFixed(2)}m walk to the contact point would need to start at t=${Bi.toFixed(2)}s but they're busy until t=${Ge.toFixed(2)}s — skipped (the standing stretch stays)`):(ci.t0=Bi,Zt=Mt-Xf,Z.push({player:x.to,afterT:eo,move:ci,faceBall:[...$t],faceSettle:[...Ee.faceAt],arrival:Mt}))}}const re=ue.ballContact??0,Ce=Math.min(re,Math.max(qE,Math.min(XE,KE*_e,Mt-(Zt+Ea)))),Ye=Mt-Ce;Ye<0&&console.warn(`[engine3d] receive cue for ${x.to} wants t0=${Ye.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:x.to,clip:oe,t0:Ye,...re>Ce?{offset:re-Ce}:{}}),a.push({from:$t,to:Ee.contact,t0:ct,duration:_e,style:xt==="throw"||x.flightStyle==="lofted"?"lofted":xt==="kick"||x.flightStyle==="clipped"?"clipped":"ground",...xt==="throw"?{loft:Math.max(ft?zc:1.5,x.loft??0)}:xt==="kick"?{loft:Math.max(3,x.loft??0)}:x.loft!==void 0?{loft:x.loft}:{},...gt?{fromHeight:gt}:{},...Tt(Ee.contact)??{}}),a.push({from:Ee.contact,to:Ee.set,t0:Mt,duration:fi,style:"ground"}),C({player:x.to,at:[...r[b]],t0:x.t,lock:[Mt-Rn,Mt+Rn]}),J({player:x.to,at:[...Ee.faceAt],t0:Mt},We),g.push({t:Mt,player:x.to}),E[x.to]=Mt+fi,l.push({player:x.to,at:Mt+fi,carry:Ee.set}),ce(Mt+fi,((Pt=At[I+1])==null?void 0:Pt.t)??i.duration,Ee.set)}}else if(x.flightStyle==="ground"){const Mt=Math.hypot(K[0]-$t[0],K[1]-$t[1]),oe=x.flight??(x.touch?Math.sqrt(2*Mt/Gr):xt==="throw"?Math.max(.4,Mt/le):Mt/Q1);if(a.push({from:$t,to:[...K],t0:ct,duration:oe,style:x.touch?"push":xt==="throw"?"lofted":xt==="kick"?"clipped":"ground",...x.touch?{endFrac:0}:{},...xt==="throw"?{loft:ft?zc:1.5}:xt==="kick"?{loft:3}:{},...gt?{fromHeight:gt}:{},...Tt(K)??{}}),x.deflect){const ue=Math.hypot(x.deflect.to[0]-K[0],x.deflect.to[1]-K[1]);a.push({from:[...K],to:[...x.deflect.to],t0:ct+oe,style:"ground",duration:y1(Mt,oe,ue)})}}else{const Mt=Math.hypot(K[0]-$t[0],K[1]-$t[1]),oe=x.flight??Mt/J1,ue=sn([K[0]-$t[0],K[1]-$t[1]]),ae=[K[0]+ud*ue[0],K[1]+ud*ue[1]],We=ct+oe,Oe=a.length;a.push({from:$t,to:ae,t0:ct,duration:oe,style:"shot",...gt?{fromHeight:gt}:{}}),a.push({from:ae,to:ae,t0:We,duration:Z1,style:"drop"}),ce(((te=At[I-1])==null?void 0:te.t)??0,pt,$t);let Ee=!1;for(const Zt of me){const re=vi=>{const Gi=St(Zt.id,I,vi);if(Gi.afterT>-1/0)return Gi.atArrival;const $n=_[Zt.id];return $n&&vi<$n.t0+pe($n)?si($n,vi).pos:[...r[Zt.id]]},Ce=ct+qf(Math.max(oe,Zf)),Ye=Kf(ct,oe,An.dive.left.contact).t0,Le=x.type==="shoot"?x.deflect:void 0,Ue=R||!!Le,Ge=re(Ue?Ce:Ye),eo=[K[0]-Ge[0],K[1]-Ge[1]],gr=Be(Ge,$t),en=Ue?G1(Ge,gr,$t,ae,wt):null;if(Le&&!en&&console.warn(`[engine3d] deflect on the shot at t=${x.t} is dropped: ${Zt.id} is ${ug(Ge,$t,ae).reach.toFixed(2)} m off the ball line at body scale ${wt} (his reach is ${(cg*wt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!en){if(Math.hypot(eo[0],eo[1])>ag*wt)continue;const vi=gg(Ge,gr,ae),Gi=JE[vi],$n=t.clips[Gi],{t0:yi,timeScale:Es}=Kf(ct,oe,An.dive[vi].contact);if(C({player:Zt.id,at:[...$t],t0:Math.max(pt-Dr,0,y[Zt.id]??0),...$n?{lock:[pt,yi+$n.duration/Es]}:{}}),$n){c.push({player:Zt.id,clip:Gi,t0:yi,...Es>1?{timeScale:Es}:{}});const li=re(yi),_r=z1(li,$t,ae,wt),no=[_r[0]-li[0],_r[1]-li[1]],io=Math.hypot(no[0],no[1]),Ru=Math.min(io,s1*wt),Cu=io>1e-9?[li[0]+no[0]/io*Ru,li[1]+no[1]/io*Ru]:[...li],s0=Math.min(o1,Math.max(r1,We-yi));f.push({player:Zt.id,from:li,to:Cu,t0:yi,duration:s0}),A[Zt.id]={t0:yi,at:[...r[Zt.id]]},r[Zt.id]=[...Cu]}continue}if(Ee)continue;Ee=!0;const Kn=a[Oe];a.splice(Oe+1,1);let xi,kn=en.contact,As=Qn*wt;if(en.kind==="dive"){Kn.duration=Math.max(Kn.duration,Zf),xi=ct+qf(Kn.duration);const vi=ct+Kn.duration,Gi={player:Zt.id,from:[...Ge],to:en.travelTo,t0:xi,duration:en.contactOffset};f.push(Gi);const $n=hg(Gi,vi),yi=Math.min(1,(vi-xi)/en.contactOffset),Es=An.dive[en.side],li=yi*Es.reach*wt,_r=sn([en.contact[0]-Ge[0],en.contact[1]-Ge[1]]);kn=[$n[0]+li*_r[0],$n[1]+li*_r[1]],As=(Qn+(Es.hand-Qn)*yi)*wt,A[Zt.id]={t0:xi,at:[...r[Zt.id]]},r[Zt.id]=[...en.travelTo]}else xi=Math.max(pt,ct+Kn.duration-en.contactOffset);const ci=ct+Kn.duration;Kn.to=kn,Kn.toHeight=As,c.push({player:Zt.id,clip:en.clip,t0:xi,contact:en.contactOffset});const Bi=xi+en.clipDuration;if(C({player:Zt.id,at:[...$t],t0:Math.max(pt-Dr,0,y[Zt.id]??0),lock:[pt,Bi]}),Le){a.push(Qf(kn,As,Le,ci,wt)),E[Zt.id]=ci,q[Zt.id]=Bi+Xs;continue}g.push({t:ci,player:Zt.id});const Xa=qc(r[Zt.id],$t,kn);en.kind==="catch"?l.push({player:Zt.id,at:ci,carry:kn,hand:{height:Qn*wt,follow:!0,bone:Xa}}):(l.push({player:Zt.id,at:ci,carry:kn,hand:{height:zo*wt,from:As,rise:d1,follow:!0,bone:Xa}}),l.push({player:Zt.id,at:Bi,carry:kn,hand:{height:Qn*wt,from:zo*wt,rise:Gc,follow:!0,bone:Xa}})),E[Zt.id]=ci,q[Zt.id]=Bi+Xs}}if(x.type==="pass"&&!xt&&Jt){const Mt=t.groups.walk,oe=Mt!=null&&Mt.length?t.clips[Mt[0]].speed??Fn:Fn,ue=[r[b][0]+Yr*Math.sin(Ne),r[b][1]+Yr*Math.cos(Ne)],ae=_[b],We=ae?ae.t0+pe(ae):-1/0;let Oe=1/0;for(let Le=I+1;Le<At.length;Le++){const Ue=At[Le];if((Ue.type==="pass"?Ue.from:Ue.player)===b){Oe=Ue.t;break}}const Ee={from:[...r[b]],to:ue,t0:Js(t,Jt),cruise:oe,accel:Gn},Zt=Ee.t0+pe(Ee)+Ci<=Oe;let re=null,Ce=null;if(ae&&M.has(ae)&&ct>=We&&ct-We<=mw&&Mu(o[b],ct)<Cg){const Le=bw(),Ue={...ae,to:[...ae.to],cruise:Math.max(ae.cruise,Le),endSpeed:Le};Ue.t0=ct-pe(Ue),Ue.t0>=ae.t0-1e-9&&gi(Ue).peak>=Le-1e-9&&(re=Ue,Ce=Zt?{from:[...r[b]],to:ue,t0:ct,cruise:Le,accel:wa,startSpeed:Le}:Mw(r[b],Ne,Le,Oe-ct,ct,Ge=>Rt(Ge)&&Ht(Ge)))}if(re&&ae){for(const Le of m[b]??[]){const Ue=c.indexOf(Le);Ue>=0&&c.splice(Ue,1)}Object.assign(ae,re),m[b]=rt(ae,b)}const Ye=Ce??(Zt?Ee:null);Ye&&((o[b]??(o[b]=[])).push(Ye),_[b]=Ye,m[b]=rt(Ye,b),r[b]=[...Ye.to])}g.push({t:ct,player:null})}const $=vt.get(nt);$!==void 0&&$<x.t&&vt.delete(nt)}lt(1/0);const Vt=I=>Math.hypot(I.to[0]-I.from[0],I.to[1]-I.from[1]);function ge(I,x,nt,$,b=$){const P=(k,z=$)=>k>nt-1e-9&&k<z-1e-9;return(o[I]??[]).some(k=>!x.has(k)&&P(k.t0))||c.some(k=>k.player===I&&!x.has(k)&&P(k.t0))||p.some(k=>k.player===I&&!x.has(k)&&P(k.t0))||u.some(k=>k.player===I&&!x.has(k)&&(P(k.t0,b)||!!k.lock&&k.lock[1]>nt&&k.lock[0]<$))||g.some(k=>k.player===I&&P(k.t))||l.some(k=>k.player===I&&P(k.at))||h.some(k=>k.player===I&&k.contact>nt-1e-9&&k.windowStart<$-1e-9)}function Lt(I){var $;let x=null;for(const b of a)I>=b.t0&&I<b.t0+b.duration&&(!x||b.t0>=x.t0)&&(x=b);if(x)return es(x,I).pos;const nt=j(I);return nt?(($=Zi(o[nt]??[],I))==null?void 0:$.pos)??[...i.players.find(b=>b.id===nt).start]:Nr(a,n,I).at}const Et=new Map;for(const[I,x]of Object.entries(o))for(const nt of x){if(Vt(nt)<=1e-6)continue;const $=Math.round(nt.t0*100),b=Et.get($);b?b.push({player:I,m:nt}):Et.set($,[{player:I,m:nt}])}for(const I of[...Et.keys()].sort((x,nt)=>x-nt)){const x=Et.get(I);if(new Set(x.map(b=>b.player)).size<Sw)continue;const nt=Lt(I/100),$=x.filter(({player:b,m:P})=>v.has(P)&&!D.has(b)&&!P.endSpeed&&!P.startSpeed&&j(P.t0)!==b).map(b=>({...b,d:Math.hypot(b.m.from[0]-nt[0],b.m.from[1]-nt[1])})).sort((b,P)=>b.d-P.d||(b.player<P.player?-1:b.player>P.player?1:0));$.forEach(({player:b,m:P},k)=>{var Q,et;const z=v.get(P),U=new Set([P,...d.get(P)??[],z.face,(Q=z.start)==null?void 0:Q.span,(et=z.start)==null?void 0:et.cue]),K=P.t0+pe(P),it=ft=>!ge(b,U,P.t0,K+ft);let dt=$o+($.length>1?(Nl-$o)*k/($.length-1):0);if(!it(dt)){if(!it($o))return;let ft=$o;for(let Tt=0;Tt<20;Tt++){const pt=(ft+dt)/2;it(pt)?ft=pt:dt=pt}dt=ft}P.t0+=dt;for(const ft of d.get(P)??[])ft.t0+=dt,ft.loopUntil!==void 0&&(ft.loopUntil+=dt);z.face&&(z.face.t0+=dt,z.face.until!==void 0&&(z.face.until+=dt)),z.start&&(z.start.span.t0+=dt,z.start.span.end+=dt,z.start.end+=dt,z.start.cue.t0+=dt,z.start.cue.loopUntil!==void 0&&(z.start.cue.loopUntil+=dt))})}const Y=new Map,Ut=I=>Y.get(I)??I,ut=[],yt=new Map;for(const[I,x]of Object.entries(o))if(!D.has(I))for(let nt=0;nt+1<x.length;nt++){const $=x[nt],b=x[nt+1],P=v.get($),k=v.get(b);if(!P||!k||P.r11||k.r11)continue;const z=Ut($),U=Ut(b);if((z.endSpeed??0)>0||(b.startSpeed??0)>0)continue;const K=Vt($),it=Vt(b);if(K<Ld||it<Ld||Math.hypot(b.from[0]-$.to[0],b.from[1]-$.to[1])>1e-6)continue;const dt=b.t0-($.t0+pe(z)),Q=Math.abs(di(Be($.from,$.to),Be(b.from,b.to)));if(dt<-1e-9||dt>Aw||Q>Ew)continue;const et=$.startSpeed??0,ft=b.endSpeed??0,Tt=Math.min(z.cruise,U.cruise),pt=Math.min(Math.max(ww(Q)*Tt,Id),Tt);if(pt<Id-1e-9||2*$.accel*K<pt*pt-et*et||2*b.accel*it<pt*pt-ft*ft)continue;const at={...$,endSpeed:pt},ct=b.t0-($.t0+pe(at)),mt=et>0?0:$.t0-P.t0>1e-9?Pd-Nl:Pd,gt=Math.max(0,Math.min(ct,mt)),xt=Rw(at,ct-gt);if(xt===null||gi(at).t3+xt>Tw*pe(z)+1e-9)continue;const Wt={...at,t0:$.t0+gt,...xt>0?{hold:xt}:{}};if(Math.abs(Wt.t0+pe(Wt)-b.t0)>1e-7)continue;const Jt=Math.min(2*eg/Math.sin(Math.max(Q,1e-9)/2),Ma*K,Ma*it);if(pt*Math.tan(Q/2)/Jt>xu(pt*Math.cos(Q/2)))continue;const Ne=b.t0+kc({...b,startSpeed:pt},Jt),$t=new Set([$,b,...d.get($)??[],...d.get(b)??[],P.face,k.face,(ve=P.start)==null?void 0:ve.span,(He=P.start)==null?void 0:He.cue,(Qe=k.start)==null?void 0:Qe.span,(Ct=k.start)==null?void 0:Ct.cue]);j($.t0)===I||ge(I,$t,$.t0,b.t0+pe(U),Ne)||(Y.has($)||Y.set($,{...$}),Y.has(b)||Y.set(b,{...b}),gt>0&&(P.face&&(P.face.t0+=gt,P.face.until!==void 0&&(P.face.until+=gt)),P.start&&(P.start.span.t0+=gt,P.start.span.end+=gt,P.start.end+=gt,P.start.cue.t0+=gt,P.start.cue.loopUntil!==void 0&&(P.start.cue.loopUntil+=gt))),Object.assign($,Wt),b.startSpeed=pt,b.flow=!0,ut.push({player:I,A:$,B:b}),yt.set($,I),yt.set(b,I))}for(const[I,x]of Object.entries(o))for(let nt=0;nt<x.length;nt++){if(!yt.has(x[nt])||x[nt].flow)continue;let $=nt;for(;$+1<x.length&&x[$+1].flow&&bu(x[$],x[$+1]);)$++;const b=x.slice(nt,$+1);for(const z of b){for(const K of d.get(z)??[]){const it=c.indexOf(K);it>=0&&c.splice(it,1)}const U=v.get(z);if(U.start&&z.flow){const K=p.indexOf(U.start.span);K>=0&&p.splice(K,1);const it=c.indexOf(U.start.cue);it>=0&&c.splice(it,1),U.start=null}}const P=v.get(b[0]);let k=kt(b,I,P.t0);P.start&&p.includes(P.start.span)&&(k=_t(k,P.start.end)),c.push(...k);for(const z of b)d.set(z,k)}for(const{player:I,A:x,B:nt}of ut){const $=Ll(x,nt),b=v.get(nt).face,P=b?u.indexOf(b):-1;if(!$||!b||P<0)continue;const k=Vt(x),z=Be(x.from,x.to),U=di(z,Be(nt.from,nt.to))<0?-1:1,K=Q=>Q<=.5?x.t0+kc(x,k-$.L+2*$.L*Q):nt.t0+kc(nt,2*$.L*(Q-.5)),it=Math.max(1,Math.ceil($.turn/Cw-1e-9)),dt=[];for(let Q=0;Q<=it;Q++){const et=Q===0?0:ME($.turn,(Q-.5)/it*$.turn),ft=z+U*Q*$.turn/it,Tt=ng($,et).pos;dt.push({player:I,at:[Tt[0]+Dd*Math.sin(ft),Tt[1]+Dd*Math.cos(ft)],t0:K(et)})}u.splice(P,0,...dt),b.t0=K(1)}g.sort((I,x)=>I.t-x.t),c.sort((I,x)=>I.t0-x.t0),sw(c,o,t);const Bt=pw(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:f,turns:p,bounces:Bt,ballSwaps:bt,attachTo(I){let x=null;for(const nt of g)nt.t<=I&&(x=nt.player);return x}}}const Yc=2*Math.LN2,Zc=1e-5,Fd=.5*Math.PI/180,Jc=5;function Nd(i,t,e,n,s,r=0){n<0&&(i=-i,t=-t,e=-e,n=-n);const o=Math.sqrt(i*i+t*t+e*e),a=o<1e-8?2:2*Math.atan2(o,n)/o;s[r]=a*i,s[r+1]=a*t,s[r+2]=a*e}function Qc(i,t,e,n){const s=.5*Math.sqrt(i*i+t*t+e*e);if(s<1e-8)return n.set(.5*i,.5*t,.5*e,1).normalize();const r=Math.sin(s)/(2*s);return n.set(r*i,r*t,r*e,Math.cos(s))}const Ud=new WeakMap;function kd(i){let t=Ud.get(i);if(!t){t={q:new Map};for(const e of i.tracks){const n=ke.parseTrackName(e.name);n.propertyName==="quaternion"&&t.q.set(n.nodeName??"",e.createInterpolant())}Ud.set(i,t)}return t}function Yo(i,t,e){return e?t>0?(i%t+t)%t:0:Math.max(0,Math.min(t,i))}const Od=new WeakMap;function Pw(i){let t=Od.get(i);return t||(t=new Map,i.traverse(e=>{e.name&&!t.has(e.name)&&t.set(e.name,e)}),Od.set(i,t)),t}const Je=new rn,qs=new rn,Bd=new rn,Ks=new Float64Array(3);function Lw(i){const t=new Map;function e(_,m,d,v,M){const y=_.q.get(m);if(!y)return!1;const E=y.evaluate(d);return v[M]=E[0],v[M+1]=E[1],v[M+2]=E[2],v[M+3]=E[3],!0}function n(_,m,d,v){const M=Yc/(_.hl+Zc),y=Math.exp(-M*d);for(let E=0;E<3;E++){const A=_.rx[m*3+E],w=_.rv[m*3+E];v[E]=y*(A+(w+A*M)*d)}}const s=new Float64Array(4),r=new Float64Array(4),o=new Float64Array(4),a=new Float64Array(4),c=new Float64Array(3),u=new Float64Array(3),h=new Float64Array(3),l=new Float64Array(3);function f(_,m,d,v,M,y,E){const A=i??E;if(!(A>0)){t.delete(_);return}const w=kd(d.clip),C=kd(v.clip),T=t.get(_),S=T?M-T.t0:0,L=Pw(m),H=Yo(d.time,d.clip.duration,d.loop),F=Yo(d.time-y*d.rate,d.clip.duration,d.loop),O=Yo(v.time,v.clip.duration,v.loop),G=Yo(v.time-y*v.rate,v.clip.duration,v.loop),N=[],V=[],B=[];for(const J of w.q.keys()){if(!C.q.has(J))continue;e(w,J,H,s,0),e(w,J,F,r,0),e(C,J,O,o,0),e(C,J,G,a,0);const Z=T?T.names.indexOf(J):-1;Z>=0&&(n(T,Z,S,c),n(T,Z,Math.max(0,S-y),u),Je.set(s[0],s[1],s[2],s[3]),Je.premultiply(Qc(c[0],c[1],c[2],qs)),s[0]=Je.x,s[1]=Je.y,s[2]=Je.z,s[3]=Je.w,Je.set(r[0],r[1],r[2],r[3]),Je.premultiply(Qc(u[0],u[1],u[2],qs)),r[0]=Je.x,r[1]=Je.y,r[2]=Je.z,r[3]=Je.w),Je.set(s[0],s[1],s[2],s[3]).multiply(qs.set(-o[0],-o[1],-o[2],o[3])),Nd(Je.x,Je.y,Je.z,Je.w,h,0),Bd.set(r[0],r[1],r[2],r[3]).multiply(qs.set(-a[0],-a[1],-a[2],a[3])),Je.multiply(qs.copy(Bd).invert()),Nd(Je.x,Je.y,Je.z,Je.w,l,0);const lt=Math.hypot(h[0],h[1],h[2]),St=Math.hypot(l[0],l[1],l[2])/y;lt<Fd&&St<Fd/y||(N.push(J),V.push(h[0],h[1],h[2]),B.push(l[0]/y,l[1]/y,l[2]/y))}if(!N.length){t.delete(_);return}t.set(_,{t0:M,hl:A,n:N.length,names:N,nodes:N.map(J=>L.get(J)),rx:Float64Array.from(V),rv:Float64Array.from(B),ql:new Float64Array(N.length*4),written:!1})}function p(_,m,d){var w;const v=t.get(_);if(!v)return;const M=v.ql;if(d===0&&v.written){for(let C=0;C<v.n;C++){const T=C*4;(w=v.nodes[C])==null||w.quaternion.set(M[T],M[T+1],M[T+2],M[T+3])}return}const y=m-v.t0;if(y<0||y>Jc*v.hl){t.delete(_);return}const E=Yc/(v.hl+Zc),A=Math.exp(-E*y);for(let C=0;C<v.n;C++){const T=v.nodes[C];if(!T)continue;const S=C*3,L=C*4,H=v.rx,F=v.rv;Ks[0]=A*(H[S]+(F[S]+H[S]*E)*y),Ks[1]=A*(H[S+1]+(F[S+1]+H[S+1]*E)*y),Ks[2]=A*(H[S+2]+(F[S+2]+H[S+2]*E)*y);const O=T.quaternion.premultiply(Qc(Ks[0],Ks[1],Ks[2],qs));M[L]=O.x,M[L+1]=O.y,M[L+2]=O.z,M[L+3]=O.w}v.written=!0}function g(_,m){const d=t.get(_);if(!d)return 0;const v=m-d.t0;if(v<0||v>Jc*d.hl)return 0;const M=Yc/(d.hl+Zc),y=Math.exp(-M*v);let E=0;for(let A=0;A<d.n;A++){const w=A*3;let C=0;for(let T=0;T<3;T++){const S=d.rx[w+T],L=d.rv[w+T],H=y*(S+(L+S*M)*v);C+=H*H}E=Math.max(E,Math.sqrt(C))}return E}return{transition:f,apply:p,peak:g,alive:(_,m)=>{const d=t.get(_);return!!d&&m-d.t0>=0&&m-d.t0<=Jc*d.hl},reset:()=>t.clear()}}const tl="idle_b",Gd=.5,Dw=.3,Fw=15,Nw=6,Uw=1.5,kw=2,Ow=2,el=.5,Su=Math.PI/180,zd=2.5,Hd=5,nl=.4,Vd=.08,Wd=60*Su,Bw=90*Su,Gw=1.5,zw=85*Su;function Zo(i,t,e){let n=(mi(i)^Math.imul(t+1,2654435761)^e)>>>0;return n=Math.imul(n^n>>>16,73244475)>>>0,n=Math.imul(n^n>>>16,73244475)>>>0,((n^n>>>16)>>>0)/4294967296}function jd(i,t,e){var n;return((n=Zi(t??[],e))==null?void 0:n.pos)??i}function Hw(i,t,e,n){var p,g,_;const s=new Map(i.map(m=>[m.id,m.start])),r=[...t.flights].sort((m,d)=>m.t0-d.t0);function o(m){let d=n;for(const M of r){if(m>=M.t0&&m<=M.t0+M.duration){const y=(m-M.t0)/M.duration;return[M.from[0]+(M.to[0]-M.from[0])*y,M.from[1]+(M.to[1]-M.from[1])*y]}M.t0+M.duration<m&&(d=M.to)}const v=t.attachTo(m);return v&&s.has(v)?jd(s.get(v),t.moves[v],m):d}const a=new Map(i.map(m=>[m.id,[]]));for(const m of t.anims)(p=a.get(m.player))==null||p.push(m.t0);for(const[m,d]of Object.entries(t.moves))for(const v of d)(g=a.get(m))==null||g.push(v.t0);for(const m of t.arrivals)(_=a.get(m.player))==null||_.push(m.at);for(const m of a.values())m.sort((d,v)=>d-v);const c=(m,d)=>{for(const v of a.get(m)??[])if(v>=d)return v;return 1/0},u=Math.ceil(e/el)+2,h=new Map(i.map(m=>[m.id,new Uint8Array(u)]));for(let m=0;m<u;m++){const d=m*el,v=o(d),M=i.map(y=>jd(y.start,t.moves[y.id],d));i.forEach((y,E)=>{const A=c(y.id,d)-d,w=Math.hypot(M[E][0]-v[0],M[E][1]-v[1])<=Fw;let C=0;for(let S=0;S<M.length;S++)S!==E&&Math.hypot(M[E][0]-M[S][0],M[E][1]-M[S][1])<=Uw&&C++;const T=C>=kw&&A>Ow;h.get(y.id)[m]=!T&&(w||A<=Nw)?1:0})}const l=new Map;for(const m of i){const d=[];let v=Zo(m.id,0,23721)*Hd;for(let M=1;v<e&&M<512;M++)d.push(v),v+=zd+Zo(m.id,M,27313)*(Hd-zd);l.set(m.id,d)}const f=new Map;for(const m of t.arrivals)(f.get(m.player)??f.set(m.player,[]).get(m.player)).push(m.at);return{ready(m,d){const v=h.get(m);if(!v)return!1;const M=Math.max(0,Math.min(u-1,Math.floor(d/el)));return v[M]===1||M+1<u&&v[M+1]===1},scan(m,d,v){if(!v)return{yaw:0,env:0};for(const y of f.get(m)??[])if(y>=d&&y-d<=Gw+nl)return{yaw:0,env:0};const M=l.get(m)??[];for(let y=0;y<M.length;y++){const E=d-M[y];if(E<0)break;if(E>nl)continue;const A=Math.max(0,Math.min(1,E/Vd,(nl-E)/Vd)),w=Wd+Zo(m,y,15383)*(Bw-Wd);return{yaw:(Zo(m,y,4563)<.5?1:-1)*w*A,env:A}}return{yaw:0,env:0}}}}const Vw=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Xd=new Map,qd=30;function Ww(i,t=0){const e=`${i.uuid}@${t}`;let n=Xd.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>Vw.test(ke.parseTrackName(s.name).nodeName??"")),h_.makeClipAdditive(n,t*qd,n,qd),Xd.set(e,n)),n}function jw(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/yg),n=Math.min(1,(t-i)/Mg);return iw*Math.max(0,Math.min(e,n))}const Kd=.1,Xw=1;function qw(i,t,e,n=[],s,r){const o=G=>Js(i,G),a=(G,N)=>wg(t,i,G,N);function c(G,N){let V=0;for(const B of t){if(B.player!==G)continue;const J=o(B);J<=N&&J>V&&(V=J)}return V}function u(G,N){const V=e.get(G);return V!=="keeper"&&i.clips[tl]&&(r!=null&&r(G,N))?tl:Td(fd(i,V),G,tw(G,N-c(G,N)))}const h=new Map,l=new Map,f=new Map,p=new Map,g=new Map,_=new Map,m=bg(i),d=new Map;for(const G of m)for(const N of i.groups[G.gait]??[da(i,G.gait,"",0)])d.set(N,G.gait);const v=s!=null&&s.off?null:Lw(s==null?void 0:s.halflife),M=!!(s!=null&&s.all),y=(G,N)=>!!v&&(M||IT(i,G,N));let E=0;const A=new Map;function w(G,N){const V=a(G,N);if(V!=null&&V.additive)return null;if(V){const lt=i.clips[V.clip];if(lt.category==="locomotion")return null;const St=V.timeScale??1;return{id:V.clip,loop:lt.loop,rate:St,time:(V.offset??0)+(N-Math.max(V.t0,0))*St}}const B=u(G,N),J=Ko(G),Z=i.clips[B].duration;return{id:B,loop:!0,rate:J,time:((qo(G,Z)+N*J)%Z+Z)%Z}}function C(G,N,V){const B=[];for(const Z of t)if(Z.player===G)for(const lt of[Math.max(Z.t0,0),o(Z)])lt>N&&lt<=V&&B.push(lt);let J=c(G,V);for(let Z=0;Z<64&&J<=V;Z++)J+=Rg(G,Z),J>N&&J<=V&&B.push(J);return B.sort((Z,lt)=>lt-Z)}const T=1/60,S=1e-4;function L(G,N){return[w(G,N-S),w(G,N+S)]}function H(G,N,V,B){const[J,Z]=L(G,V);if(!J||!Z||J.id===Z.id||Z.id!==B||!y(J.id,Z.id))return!1;const lt=N.clips.get(J.id),St=N.clips.get(Z.id);return!lt||!St?!1:(v.transition(G,N.mixer.getRoot(),{clip:lt,time:J.time,rate:J.rate,loop:J.loop},{clip:St,time:Z.time,rate:Z.rate,loop:Z.loop},V,T,Kd),!0)}function F(G,N,V,B,J){for(const Z of C(G,V,B)){const[lt,St]=L(G,Z);if(!(lt&&St&&lt.id===St.id))return H(G,N,Z,J)}return!1}function O(G,N,V,B,J){var R;const Z=v?A.get(G)!==E:!1;v&&A.set(G,E);let lt=null;const St=a(G,V),kt=St!=null&&St.additive?St:null,rt=kt?za(m,J):null,_t=rt?da(i,rt.gait,G,kt.t0):null,ot=kt?null:St,j=ot??(_t?kt:null),bt=_t??(ot==null?void 0:ot.clip)??u(G,V),It=h.get(G);if(KT(It,bt,ot)){const q=i.clips[bt],st=N.mixer.clipAction(N.clips.get(bt)),vt=!!It&&d.has(It.clip)&&d.has(bt)&&!(ot!=null&&ot.offset),tt=vt&&((R=l.get(G))==null?void 0:R.action)===st;if(tt||st.reset(),vt&&!tt){const Ft=i.clips[It.clip].duration;Ft>0&&(st.time=It.action.time/Ft%1*q.duration)}st.loop=q.loop?2201:2200,st.clampWhenFinished=!0,ot!=null&&ot.offset&&(st.time=ot.offset),It&&It.action!==st&&(y(It.clip,bt)?(Z||(lt={src:{clip:It.action.getClip(),loop:i.clips[It.clip].loop,rate:It.action.timeScale,time:It.action.time+B*It.action.timeScale},hl:Kd}),It.action.weight=0,It.action.stop(),It.action.enabled=!1):(It.action.fadeOut(CT(i,It.clip,bt)),vt||st.fadeIn(Sg(i,bt,It.clip)))),st.play(),h.set(G,{clip:bt,offset:ot==null?void 0:ot.offset,action:st})}const Dt=h.get(G).action,qt=!!j&&j.timeScale===void 0&&i.clips[bt].category==="locomotion",jt=qt?d.get(bt):void 0,ce=qt?jt?ST(m,J,jt):{timeScale:yT(J,i.clips[bt].speed??Fn),partner:null,weight:0}:null,X=ce!=null&&ce.partner&&j?da(i,ce.partner,G,j.t0):null,be=l.get(G);if(be&&be.clip!==X&&(be.clip!==bt&&(be.action.weight=0,be.action.stop()),l.delete(G)),j)if((ot==null?void 0:ot.timeScale)!==void 0)Dt.timeScale=ot.timeScale,Dt.weight=1;else if(ce){if(Dt.timeScale=ce.timeScale,Dt.weight=1-ce.weight,X){let q=l.get(G);if(!q){const tt=N.mixer.clipAction(N.clips.get(X));tt.isRunning()&&tt.getEffectiveWeight()>0?tt.stopFading():(tt.reset(),tt.play()),tt.loop=2201,q={clip:X,action:tt},l.set(G,q)}q.action.weight=ce.weight,q.action.timeScale=ce.timeScale;const st=i.clips[bt].duration,vt=i.clips[X].duration;st>0&&(q.action.time=Dt.time/st%1*vt)}}else Dt.timeScale=1,Dt.weight=1;else{Dt.weight=1,Dt.timeScale=Ko(G);const q=i.clips[bt].duration;Dt.time=((qo(G,q)+V*Dt.timeScale)%q+q)%q}const se=bt===Cd?0:dw(n,G,V),Qt=p.get(G),Ot=se>0?N.clips.get(Cd):void 0;if(Ot){let q=Qt;q||(q=N.mixer.clipAction(Ot),q.reset(),q.loop=2201,q.timeScale=0,q.play(),p.set(G,q));const st=Ot.duration;q.time=((qo(G,st)+V*Ko(G))%st+st)%st,q.weight=se,Dt.weight*=1-se}else Qt&&(Qt.weight=0,Qt.stop(),Qt.enabled=!1,p.delete(G));const me=g.get(G),wt=!j&&bt===tl?1-Gd:0;if(wt>0||me){const q=(me==null?void 0:me.clip)??Td(fd(i,void 0),G,0);let st=me;if(!st){let tt=_.get(q);tt||_.set(q,tt=N.clips.get(q).clone());const Ft=N.mixer.clipAction(tt);Ft.reset(),Ft.loop=2201,Ft.timeScale=0,Ft.play(),st={clip:q,action:Ft,w:Z?wt:0},g.set(G,st)}const vt=(B>0?B:0)*(1-Gd)/Dw;if(st.w=Z?wt:st.w+Math.max(-vt,Math.min(vt,wt-st.w)),st.w<=0&&wt===0)st.action.weight=0,st.action.stop(),st.action.enabled=!1,g.delete(G);else{const tt=i.clips[q].duration;st.action.time=((qo(G,tt)+V*Ko(G))%tt+tt)%tt,st.action.weight=st.w,Dt.weight*=1-st.w}}const D=f.get(G);if(kt){const q=kt.offset??0,st=Math.max(0,i.clips[kt.clip].duration-q),vt=jw(V-kt.t0,st);let tt=D;if(!tt||tt.clip!==kt.clip||tt.offset!==q){tt&&(tt.action.weight=0,tt.action.stop(),tt.action.enabled=!1);const Ft=N.mixer.clipAction(Ww(N.clips.get(kt.clip),q));Ft.reset(),Ft.loop=2200,Ft.clampWhenFinished=!0,Ft.timeScale=0,Ft.play(),f.set(G,tt={clip:kt.clip,offset:q,action:Ft})}tt.action.time=Math.min(i.clips[kt.clip].duration,q+Math.max(0,V-kt.t0)),tt.action.weight=vt}else D&&(D.action.weight=0,D.action.stop(),D.action.enabled=!1,f.delete(G));if(N.mixer.update(B),v){const q=h.get(G);lt?F(G,N,V-B,V,q.clip)||v.transition(G,N.mixer.getRoot(),lt.src,{clip:q.action.getClip(),time:q.action.time,rate:q.action.timeScale,loop:i.clips[q.clip].loop},V,Math.max(B,1/240),lt.hl):Z&&F(G,N,V-Xw,V,q.clip),v.apply(G,V,B)}}return{applyAnim:O,cueAt:a,inert:v,reset:()=>{v&&(v.reset(),E++)}}}class Kw{constructor(t,e){Ie(this,"_t",0);Ie(this,"_playing",!1);Ie(this,"speed",1);Ie(this,"loopCbs",[]);Ie(this,"endCbs",[]);Ie(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function $w(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,f){const p=e.get(o)??0,g=Eg(i,o,a);let _;if(g){const M=s.get(o);M&&M.span===g?_=M.from:(_=p,s.set(o,{span:g,from:_}))}else s.delete(o);const m=g?PT(i,o,a,_):null,d=m?LT(Li[g.clip],u):f?FE:xu(u),v=m?Gf(p,m.heading,c,d):l?p:Gf(p,h,c,d);return n.set(o,c>0?(v-p)/c:0),e.set(o,v),{h:v,clipYaw:(m==null?void 0:m.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const Yw=.2,Zw=.5,Jw=.06,Qw=.25,$d=.15,tR=.25,eR=.2;function nR(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=Yw*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function iR(i,t,e=1){return i.speed>Zw*e||i.y>t+Jw*e}function sR(i,t,e=1){const n=Math.hypot(i,t),s=Qw*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function rR(i,t){const e=i??[];for(let n=0;n<e.length;n++){const s=e[n];if(n+1<e.length&&bu(s,e[n+1]))continue;const r=s.t0+pe(s);if(t>r-tR&&t<=r)return!0}return!1}const oR=new Set(["turn","transition","receive","pass","idle"]);function aR(i,t,e){return e||i===null?!0:oR.has(t??"")}function cR(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/$d;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[y,E]=e(l,a);return[l.corrX+y,l.corrZ+E]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],[0,0];const f=o[0]-l.prevRoot[0],p=o[1]-l.prevRoot[1],g=l.rootV=Math.hypot(f,p)/c,_=r.map((y,E)=>{const A=l.prev[E],w=A?Math.hypot(y[0]-A[0]-f,y[2]-A[2]-p)/c:1/0;return{x:y[0],y:y[1],z:y[2],speed:w}}),m=y=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||g>=eR)m();else if(l.foot>=0&&iR(_[l.foot],l.plantY,h)&&m(),l.foot<0){const y=nR(_,h);y>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=y,l.plantY=_[y].y,l.anchorX=r[y][0],l.anchorZ=r[y][2])}else{const[y,E]=sR(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=y,l.corrZ=E}const[d,v]=e(l,a);(a-l.outAt)/$d>=1&&(l.outX=0,l.outZ=0);const M=[l.corrX+d,l.corrZ+v];return l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],l.prevT=a,M}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const Au=Math.PI/180,Dg=2*Au,Fg=4*Au,lR=8*Au,uR=Fg/Dg,Yd=.12,hR=.6,fR=.08,Zd=.4;function dR(i){return i<uR?0:Math.min(lR,Math.max(Fg,Dg*i))}function pR(i,t){const e=Math.hypot(i[0],i[1]),n=dR(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function il(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function mR(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=pR(s,r),u=il(i.get(n)??0,c.pitch*o,a,Yd),h=il(t.get(n)??0,c.roll*o,a,Yd);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=Ba(s)*hR,a=il(e.get(n)??0,o,r,fR);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const sl=new rn,Jd=new rn,Qd=new rn,Ra=new rn,gR=new jn;function _R(i,t){sl.identity();for(let e=i.parent;e&&e!==t;e=e.parent)sl.premultiply(e.quaternion);return sl}const Zr=new WeakMap;function Ng(i){const t=Zr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function Ug(i,t){const e=Zr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):Zr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function tp(i,t,e,n,s){if(Ng(t),!e&&!n&&!s){Zr.delete(t);return}Ra.copy(t.quaternion);const r=_R(t,i);Jd.setFromEuler(gR.set(e,n,s,"YXZ")),Qd.copy(r).invert().multiply(Jd).multiply(r),t.quaternion.premultiply(Qd),Ug(t,Ra)}function bR(i,t){if(Ng(i),!t){Zr.delete(i);return}Ra.copy(i.quaternion),i.rotation.y+=t,Ug(i,Ra)}const xR=.58,vR=.15,yR=.5,rl=6,MR=.3,Qs=.5,SR=.7;function AR(i,t,e,n,s=new Map,r=!1){const o=new Map(i.map(a=>[a,[0,0]]));for(let a=0;a<i.length;a++)for(let c=a+1;c<i.length;c++){const u=e.has(i[a]),h=e.has(i[c]);if(u&&h)continue;let l=1/0,f=1,p=0;const g=A=>{const w=A.get(i[a]),C=A.get(i[c]);return w&&C?[C[0]-w[0],C[1]-w[1]]:null};for(let A=0;A<t.length;A++){const w=g(t[A]);if(!w)continue;const C=A+1<t.length?g(t[A+1]):null,T=C?C[0]-w[0]:0,S=C?C[1]-w[1]:0,L=T*T+S*S,H=L>1e-12?Math.min(1,Math.max(0,-(w[0]*T+w[1]*S)/L)):0;let F=w[0]+H*T,O=w[1]+H*S;const G=Math.hypot(F,O);if(G>=l)continue;if(l=G,G<1e-6)if(L>1e-12){const V=Math.sqrt(L);F=-S/V,O=T/V}else F=1,O=0;const N=Math.hypot(F,O);f=F/N,p=O/N}if(l>=n)continue;const _=n-l,m=u?0:r?Math.max(s.get(i[a])??0,Qs):(s.get(i[a])??0)<Qs?0:s.get(i[a]),d=h?0:r?Math.max(s.get(i[c])??0,Qs):(s.get(i[c])??0)<Qs?0:s.get(i[c]);if(m+d<=0)continue;const v=m/(m+d),M=d/(m+d),y=o.get(i[a]),E=o.get(i[c]);y[0]-=f*_*v,y[1]-=p*_*v,E[0]+=f*_*M,E[1]+=p*_*M}return o}function ER(){const i=new Map;let t=-1/0;return{step(e,n,s,r,o,a,c){const u=Math.abs(o-t)>.25,h=AR(e,n,s,r,c,u);t=o;const l=u?1:a>0?1-Math.exp(-a/vR):0;for(const f of e){const p=(c==null?void 0:c.get(f))??0;if(!u&&p<Qs&&!s.has(f))continue;const g=h.get(f),_=i.get(f)??[0,0];let m=(g[0]-_[0])*l,d=(g[1]-_[1])*l;const v=Math.hypot(m,d),M=SR*Math.max(p,Qs)*a;!u&&v>M&&(m*=M/v,d*=M/v),i.set(f,[_[0]+m,_[1]+d])}return i}}}function jr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function TR(i){var r;const t=[i.root[0]+ze*Math.sin(i.heading),i.root[1]+ze*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?jr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+ze*Math.sin(s.heading),i.root[1]+ze*Math.cos(s.heading)],a=jr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function wR(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*jr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?jr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=jr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function pa(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=es(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:VE(e),speed:ig(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:TR(n),height:wR(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const RR=1.2,CR=40;function kg(i,t,e){var s;const n=((s=Zi(i.moves[t]??[],e))==null?void 0:s.pos)??i.starts[t]??[0,0];return fg(i.dives,i.moves[t],t,e)??n}function ep(i,t){const e=i.attachTo(t),n=pa({t,holderId:e,holderRoot:e?kg(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const Og=.55,IR=.3,np=.6,PR=.6,LR=.4,Va=i=>Math.min(Math.max(i,0),1);function DR(i,t){if(t<=i.t0)return 0;if(t>=i.t0+pe(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=si(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function FR(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,f=a-s-.1,p=_=>{const m=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+h*m,i[1]+u*_+l*m]},g=[];for(let _=.15;_+r*.5<=f;_+=r+o){const m=Math.min(_+r,f),[d,v]=p(_),[M,y]=p(m);g.push({ax:d,ay:v,bx:M,by:y,k:(_+m)/2/a})}return g}function ip(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=Og*e,a=IR*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const sp=1.6,Jo=2.2,NR=5,UR=5,kR=6,rp=14,OR=4,BR=20,GR="#E8ECEF",zR="#8D949B",HR=1.2,VR=3,WR=.4;function op(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(kR*n,s*.5),o=i==="dribble",a=i==="pass"?BR*n:o?rp*n/8:NR*n;return{dashes:FR(t,e,o?OR*n:0,rp*n,r,a,i==="move"?UR*n:0),headScale:r/Og}}function jR(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function XR(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function Wa(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=HR}function qR(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const ap=.012,KR=.14,$R=.38,cp=.15,Bg=.3,YR="#bfe333";function ZR(i){const t=1-2*Bg,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const Qo=1.5,JR=.3,QR=24;function lp(i){return cp+($R-cp)*Va(i)}function Ul(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=Qo?0:1-s/Qo;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,Qo)/Qo;return Math.min(r,a*Math.max(1-(i-o)/JR,0))}function kl(i,t){for(let e=t+1;e<i.length;e++)if(Wa(i[e]))return i[e].t0}function tC(i,t){const e=[];for(let n=0;n<i.length;n++)Wa(i[n])&&Ul(t,i[n],kl(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function eC(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=es(i,t).pos;return Va(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function nC(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=es(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||Wa(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=es(r,e).pos;return[o[0],o[1]]}function up(i,t){const e=Va((i-t)/.06);return np+(1-np)*e}function iC(i,t){return Va((i-(t-PR))/LR)}const sC=.35;function rC(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+sC}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+fi})}return n.sort((s,r)=>s.t0-r.t0)}function oC(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const hp=1e-6;function Ol(i,t,e){return lg(i,t,e)>0}function aC(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-hp);if(r&&Ol(i.arrivals,r,s.t0-hp))return{kind:"halo"}}const n=oC(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Ol(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function cC(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const lC=.85;function uC(i,t){return i>0?{draw:t>=i*lC,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const hC=.15,fC=1e-6;function fp(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function dC(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function Gg(i,t,e,n){var o;const s=bs(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=fp((n-dC(i,e,s))/hC);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-fp((n-a.windowStart)/Math.max(a.contact-a.windowStart,fC)));return r}function pC(i,t,e){var s,r;const n=(r=(s=bs(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function mC(i,t,e,n){return Ol(i,e,n)||Gg(i,t,e,n)>0}const gC=25;function _C(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function bC(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(_C(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=ig(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/gC),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const xC=.02;function vC(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=xC,o)}function yC(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{vC(e,n,s,r,o,a,c,t),t=!1}}const dp=new _n,ta=new W;class zg extends R_{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new $e(t,3)),this.setAttribute("uv",new $e(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new yl(e,6,1);return this.setAttribute("instanceStart",new ni(n,3,0)),this.setAttribute("instanceEnd",new ni(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new yl(e,6,1);return this.setAttribute("instanceColorStart",new ni(n,3,0)),this.setAttribute("instanceColorEnd",new ni(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new o_(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),dp.setFromBufferAttribute(e),this.boundingBox.union(dp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ta.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ta)),ta.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ta));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}zt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ee(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};In.line={uniforms:Wl.merge([zt.common,zt.fog,zt.line]),vertexShader:`
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
		`};class Eu extends ki{constructor(t){super({type:"LineMaterial",uniforms:Wl.clone(In.line.uniforms),vertexShader:In.line.vertexShader,fragmentShader:In.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const ol=new Se,pp=new W,mp=new W,dn=new Se,pn=new Se,ui=new Se,al=new W,cl=new he,mn=new _m,gp=new W,ea=new _n,na=new Xn,hi=new Se;let pi,xs;function _p(i,t,e){return hi.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),hi.multiplyScalar(1/hi.w),hi.x=xs/e.width,hi.y=xs/e.height,hi.applyMatrix4(i.projectionMatrixInverse),hi.multiplyScalar(1/hi.w),Math.abs(Math.max(hi.x,hi.y))}function MC(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){mn.start.fromBufferAttribute(s,a),mn.end.fromBufferAttribute(r,a),mn.applyMatrix4(e);const u=new W,h=new W;pi.distanceSqToSegment(mn.start,mn.end,h,u),h.distanceTo(u)<xs*.5&&t.push({point:h,pointOnLine:u,distance:pi.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function SC(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;pi.at(1,ui),ui.w=1,ui.applyMatrix4(t.matrixWorldInverse),ui.applyMatrix4(n),ui.multiplyScalar(1/ui.w),ui.x*=r.x/2,ui.y*=r.y/2,ui.z=0,al.copy(ui),cl.multiplyMatrices(t.matrixWorldInverse,o);for(let f=0,p=h;f<p;f++){if(dn.fromBufferAttribute(c,f),pn.fromBufferAttribute(u,f),dn.w=1,pn.w=1,dn.applyMatrix4(cl),pn.applyMatrix4(cl),dn.z>l&&pn.z>l)continue;if(dn.z>l){const M=dn.z-pn.z,y=(dn.z-l)/M;dn.lerp(pn,y)}else if(pn.z>l){const M=pn.z-dn.z,y=(pn.z-l)/M;pn.lerp(dn,y)}dn.applyMatrix4(n),pn.applyMatrix4(n),dn.multiplyScalar(1/dn.w),pn.multiplyScalar(1/pn.w),dn.x*=r.x/2,dn.y*=r.y/2,pn.x*=r.x/2,pn.y*=r.y/2,mn.start.copy(dn),mn.start.z=0,mn.end.copy(pn),mn.end.z=0;const _=mn.closestPointToPointParameter(al,!0);mn.at(_,gp);const m=Kp.lerp(dn.z,pn.z,_),d=m>=-1&&m<=1,v=al.distanceTo(gp)<xs*.5;if(d&&v){mn.start.fromBufferAttribute(c,f),mn.end.fromBufferAttribute(u,f),mn.start.applyMatrix4(o),mn.end.applyMatrix4(o);const M=new W,y=new W;pi.distanceSqToSegment(mn.start,mn.end,y,M),e.push({point:y,pointOnLine:M,distance:pi.origin.distanceTo(y),object:i,face:null,faceIndex:f,uv:null,uv1:null})}}}class AC extends we{constructor(t=new zg,e=new Eu({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)pp.fromBufferAttribute(e,o),mp.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+pp.distanceTo(mp);const r=new yl(s,2,1);return t.setAttribute("instanceDistanceStart",new ni(r,1,0)),t.setAttribute("instanceDistanceEnd",new ni(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;pi=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;xs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),na.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=xs*.5;else{const l=Math.max(s.near,na.distanceToPoint(pi.origin));u=_p(s,l,c.resolution)}if(na.radius+=u,pi.intersectsSphere(na)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ea.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=xs*.5;else{const l=Math.max(s.near,ea.distanceToPoint(pi.origin));h=_p(s,l,c.resolution)}ea.expandByScalar(h),pi.intersectsBox(ea)!==!1&&(n?MC(this,e):SC(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(ol),this.material.uniforms.resolution.value.set(ol.z,ol.w))}}class Hg extends zg{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class EC extends AC{constructor(t=new Hg,e=new Eu({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function TC(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const bp=.55,Vg=.55,xp=.006,wC=i=>1/(1+Math.max(i,0)),RC=i=>Vg/(1+2*Math.max(i,0)),CC=.6,IC=(i,t)=>t>0?i/t*CC:0,PC=14,LC=.25,Wg=.25,ia=Math.round(Wg*60)+2,DC=2,FC=.5,NC=16774102,UC=20,ll=.06,ul=.06,vp=.09;function kC(i){if(!(i>=0)||i>=ul+vp)return[1,1,1];const t=i<ul?1:1-(i-ul)/vp;return[1+ll*t,1-ll*t,1+ll*t]}const OC=.02,BC=2;let kr=null;function GC(){if(kr)return kr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),kr=new Pn(i),kr.userData.shared=!0,kr}function yp(i){let{bodyScale:t,radius:e}=i;const n=new fn({map:GC(),transparent:!0,depthWrite:!1,opacity:Vg,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new we(new oi(bp,bp).rotateX(-Math.PI/2),n);s.position.y=xp,s.renderOrder=1,i.root.add(s);const r=new Eu({linewidth:DC,color:NC,vertexColors:!0,transparent:!0,opacity:FC,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new Hg;o.setPositions(new Float32Array(ia*3)),o.setColors(new Float32Array(ia*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new EC(o,r);u.frustumCulled=!1,u.renderOrder=UC,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],f=new W;let p=!1,g=!1,_=-1;const m=new W;function d(){s.scale.setScalar(t)}d();function v(M){const y=p?f.distanceTo(M.pos):0,E=p&&y>BC,A=M.height<=OC;if(s.visible=!M.held,s.visible&&(s.position.set(M.pos.x,xp,M.pos.z),s.scale.setScalar(t*wC(M.height)),n.opacity=RC(M.height)),p&&!E&&M.dt>0&&y>1e-9){const{axis:L,angle:H}=TC([f.x,f.z],[M.pos.x,M.pos.z],e);if(L[0]!==0||L[2]!==0){m.set(L[0],L[1],L[2]);const F=A?H:IC(y/M.dt,e)*M.dt;F>0&&i.mesh.rotateOnWorldAxis(m,F)}}A&&g&&!E&&(_=M.t),E&&(_=-1),g=!A;const[w,C,T]=_<0?[1,1,1]:kC(M.t-_);if(i.mesh.scale.set(t*w,t*C,t*T),E&&(l.length=0),h&&M.dt>0){for(l.push({t:M.t,p:M.pos.clone()});l.length&&M.t-l[0].t>Wg;)l.shift();for(;l.length>ia;)l.shift()}if(h&&(M.speed>PC||(M.apex??0)>=LC)&&l.length>=2){const H=l.length-1,F=a.array,O=c.array;for(let G=0;G<ia-1;G++)for(const[N,V]of[[0,G],[3,G+1]]){const B=l[Math.min(V,H)].p,J=6*G+N;F[J]=B.x,F[J+1]=B.y,F[J+2]=B.z;const Z=Math.min(V,H)/H;O[J]=O[J+1]=O[J+2]=Z}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=H,u.visible=!0}else u.visible=!1;f.copy(M.pos),p=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(M,y,E){t=M,e=y,d(),r.resolution.set(E.width,E.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:_})}}const zC=.055,HC=.17,hs=.015,Mp=2.1,VC=.16,WC=.1,jC=1.6,XC=.45,qC=.11,KC={technical:vS,tactical:yS,physical:MS,social:SS};function $C(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Pn(i)}function YC(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function ZC(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?KC[i.color]??i.color:ts,r=Math.min(t.width,t.height)*.14;if(YC(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=VC,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=uC(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new Pn(t);return o.colorSpace=Xe,o}function JC(i){var M,y;const{scene:t,drill:e,schedule:n}=i,s=(...E)=>{for(const A of E)A.traverse(w=>{const C=w.material;for(const T of Array.isArray(C)?C:C?[C]:[])T.toneMapped=!1});t.add(...E)},r=i.pathM??WC,o=E=>E*r*(i.pathWidthK??1),a=cC(i.search??location.search,(M=e.overlays)==null?void 0:M.runPaths),{width:c,length:u}=e.pitch,h=E=>E-c/2,l=E=>E-u/2,f={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(E=>[E.id,E.start])),ballStart:ba(e),headingAt:i.headingAt},p=qR(e.players,ba(e),n.attachTo(0)),g=new Map(e.players.map(E=>[E.id,E.team])),_=E=>g.get(E)===p?GR:zR,m=[];{const E=CR,A=new Float32Array(E*3),w=new Ze;w.setAttribute("position",new De(new Float32Array(E*2*3),3)),w.setAttribute("color",new De(new Float32Array(E*2*3),3));const C=new Float32Array(E*2*2);for(let N=0;N<E;N++)C.set([0,N/(E-1),1,N/(E-1)],N*4);w.setAttribute("uv",new De(C,2));const T=new Uint16Array((E-1)*6);for(let N=0;N<E-1;N++){const V=N*2;T.set([V,V+1,V+2,V+1,V+3,V+2],N*6)}w.setIndex(new De(T,1));const S=(()=>{const N=document.createElement("canvas");N.width=64,N.height=1;const V=N.getContext("2d"),[B,J,Z]=xS,lt=V.createLinearGradient(0,0,64,0);lt.addColorStop(0,`rgba(${B},${J},${Z},0)`),lt.addColorStop(.28,`rgba(${B},${J},${Z},0.28)`),lt.addColorStop(.44,"rgba(216,247,120,0.8)"),lt.addColorStop(.5,"rgba(255,255,255,1)"),lt.addColorStop(.56,"rgba(216,247,120,0.8)"),lt.addColorStop(.72,`rgba(${B},${J},${Z},0.28)`),lt.addColorStop(1,`rgba(${B},${J},${Z},0)`),V.fillStyle=lt,V.fillRect(0,0,64,1);const St=new Pn(N);return St.colorSpace=Xe,St})(),L=new we(w,new fn({map:S,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));L.frustumCulled=!1,L.renderOrder=6,s(L);const H=new W,F=new W,O=new W,G=RR/(E-1);m.push((N,V)=>{if(L.visible=a.trail,!a.trail)return;for(let Z=0;Z<E;Z++){const lt=ep(f,N-Z*G);A[Z*3]=h(lt.pos[0]),A[Z*3+1]=zC+lt.height,A[Z*3+2]=l(lt.pos[1])}const B=w.getAttribute("position"),J=w.getAttribute("color");O.set(1,0,0);for(let Z=0;Z<E;Z++){const lt=Math.min(Z,E-2);H.set(A[lt*3]-A[lt*3+3],A[lt*3+1]-A[lt*3+4],A[lt*3+2]-A[lt*3+5]),F.set(A[Z*3],A[Z*3+1],A[Z*3+2]).sub(V.position),H.lengthSq()>1e-10&&(H.cross(F),H.lengthSq()>1e-10&&O.copy(H.normalize()));const St=Math.pow(1-Z/(E-1),1.2),kt=HC*(.35+.65*St),rt=A[Z*3],_t=A[Z*3+1],ot=A[Z*3+2];B.setXYZ(Z*2,rt+O.x*kt,_t+O.y*kt,ot+O.z*kt),B.setXYZ(Z*2+1,rt-O.x*kt,_t-O.y*kt,ot-O.z*kt);const j=St;J.setXYZ(Z*2,j,j,j),J.setXYZ(Z*2+1,j,j,j)}B.needsUpdate=J.needsUpdate=!0})}{const E=[];let A=0,w=0;for(const C of e.events){if(C.type!=="move"&&C.type!=="dribble")continue;const T=(n.moves[C.player]??[]).find(H=>H.t0>=C.t&&H.t0<=C.t+Nl+1e-9&&H.to[0]===C.to[0]&&H.to[1]===C.to[1]);if(!T)continue;const S=op(C.type,T.from,T.to,r);if(!S)continue;const L=new ie(_(C.player));E.push({m:T,authored:C.runPath===!0,stroke:S,baseR:L.r,baseG:L.g,baseB:L.b,baseA:1,vert0:A,vertCount:S.dashes.length*4+3}),A+=S.dashes.length*4+3,w+=S.dashes.length*6+3}if(E.length){const C=new Float32Array(A*3),T=new Float32Array(A*4),S=new Uint16Array(w);let L=0,H=0;const F=o(sp)/2;for(const V of E){const B=Math.hypot(V.m.to[0]-V.m.from[0],V.m.to[1]-V.m.from[1])||1,J=-(V.m.to[1]-V.m.from[1])/B,Z=(V.m.to[0]-V.m.from[0])/B;for(const _t of V.stroke.dashes){const ot=L/3;C.set([h(_t.ax+J*F),hs,l(_t.ay+Z*F),h(_t.ax-J*F),hs,l(_t.ay-Z*F),h(_t.bx+J*F),hs,l(_t.by+Z*F),h(_t.bx-J*F),hs,l(_t.by-Z*F)],L),L+=12,S.set([ot,ot+1,ot+2,ot+1,ot+3,ot+2],H),H+=6}const[lt,St,kt]=ip(V.m.from,V.m.to,V.stroke.headScale),rt=L/3;C.set([h(lt[0]),hs,l(lt[1]),h(St[0]),hs,l(St[1]),h(kt[0]),hs,l(kt[1])],L),L+=9,S.set([rt,rt+1,rt+2],H),H+=3}const O=new Ze;O.setAttribute("position",new De(C,3)),O.setAttribute("color",new De(T,4)),O.setIndex(new De(S,1));const G=new we(O,new fn({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));G.renderOrder=2,s(G);const N=O.getAttribute("color");m.push(V=>{if(G.visible=a.runPaths!=="off",!!G.visible){for(const B of E){const J=a.runPaths==="authored"&&!B.authored?0:iC(V,B.m.t0),Z=DR(B.m,V);let lt=B.vert0;for(const kt of B.stroke.dashes){const rt=B.baseA*J*up(kt.k,Z);for(let _t=0;_t<4;_t++)N.setXYZW(lt++,B.baseR,B.baseG,B.baseB,rt)}const St=B.baseA*J*up(1,Z);for(let kt=0;kt<3;kt++)N.setXYZW(lt++,B.baseR,B.baseG,B.baseB,St)}N.needsUpdate=!0}})}}{const E=QR,A=KR/2,w=[-1,-.4,1-2*Bg,1],C=w.map(ZR),T=w.length,S=n.flights.map((F,O)=>kl(n.flights,O)),L=()=>{const F=new Ze,O=new Float32Array((E+1)*T*3);for(let B=0;B<(E+1)*T;B++)O[B*3+1]=ap;const G=new Float32Array((E+1)*T*4),N=new Uint16Array(E*(T-1)*6);for(let B=0,J=0;B<E;B++)for(let Z=0;Z<T-1;Z++,J++){const lt=B*T+Z;N.set([lt,lt+1,lt+T,lt+1,lt+T+1,lt+T],J*6)}F.setAttribute("position",new De(O,3)),F.setAttribute("color",new De(G,4)),F.setIndex(new De(N,1));const V=new we(F,new fn({color:YR,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return V.frustumCulled=!1,V.renderOrder=2,V.name="passRibbon",s(V),{mesh:V,posAttr:F.getAttribute("position"),colAttr:F.getAttribute("color")}},H=[L(),L()];m.push(F=>{const O=a.runPaths==="auto"?tC(n.flights,F):[];for(let G=0;G<H.length;G++){const N=H[G],V=O[O.length-1-G]??-1;if(N.mesh.visible=V>=0,V<0)continue;const B=n.flights[V],J=Ul(F,B,S[V]),Z=eC(B,F),lt=Math.hypot(B.to[0]-B.from[0],B.to[1]-B.from[1])||1,St=-(B.to[1]-B.from[1])/lt*A,kt=(B.to[0]-B.from[0])/lt*A,rt=B.from[0]+(B.to[0]-B.from[0])*Z,_t=B.from[1]+(B.to[1]-B.from[1])*Z,ot=nC(n.flights,V,F);for(let j=0;j<=E;j++){const bt=j/E,It=j===E?ot[0]:B.from[0]+(rt-B.from[0])*bt,Dt=j===E?ot[1]:B.from[1]+(_t-B.from[1])*bt,qt=J*lp(bt);for(let jt=0;jt<T;jt++){const ce=w[jt],X=j*T+jt;N.posAttr.setX(X,h(It+St*ce)),N.posAttr.setZ(X,l(Dt+kt*ce)),N.colAttr.setXYZW(X,1,1,1,qt*C[jt])}}N.posAttr.needsUpdate=N.colAttr.needsUpdate=!0}})}{const E=(e.equipment??[]).filter(L=>L.type==="goal").map(L=>({x:L.at[0],y:L.at[1],halfW:Ss(L,Ga)*i.goalScale})),A=o(Jo)/2,w=[],C=[],T=[],S=[];for(let L=0;L<n.flights.length;L++){const H=n.flights[L];if(!Wa(H))continue;const F=jR(H,n.arrivals);if(!F&&!H.pop)continue;const O=Math.hypot(H.to[0]-H.from[0],H.to[1]-H.from[1])||1,G=-(H.to[1]-H.from[1])/O,N=(H.to[0]-H.from[0])/O,V=N,B=-G;let J=0;if(F){const Z=VR*2*A/2;C.push({ax:H.to[0]-V*A,ay:H.to[1]-B*A,bx:H.to[0]+V*A,by:H.to[1]+B*A,h:Z,px:G,py:N});const lt=XR(H.from,H.to,E,o(Jo))??H.to;C.push({ax:H.to[0],ay:H.to[1],bx:lt[0],by:lt[1],h:WR*A,px:G,py:N}),J=8}else{C.push({ax:H.from[0],ay:H.from[1],bx:H.to[0],by:H.to[1],h:sp/Jo*A,px:G,py:N});const Z=op("pass",H.from,H.to,r);T.push(ip(H.from,H.to,Z?Z.headScale:0)),J=7}S.push({i:L,verts:J})}if(S.length){const L=S.reduce((ot,j)=>ot+j.verts,0),H=S.reduce((ot,j)=>ot+(j.verts===8?12:9),0),F=new Float32Array(L*3),O=new Float32Array(L*4),G=new Uint16Array(H);let N=0,V=0,B=0,J=0;const Z=ap,lt=()=>{const ot=C[B++],j=N/3;F.set([h(ot.ax+ot.px*ot.h),Z,l(ot.ay+ot.py*ot.h),h(ot.ax-ot.px*ot.h),Z,l(ot.ay-ot.py*ot.h),h(ot.bx+ot.px*ot.h),Z,l(ot.by+ot.py*ot.h),h(ot.bx-ot.px*ot.h),Z,l(ot.by-ot.py*ot.h)],N),N+=12,G.set([j,j+1,j+2,j+1,j+3,j+2],V),V+=6};for(const ot of S){const j=N/3;if(ot.verts===8)lt(),lt();else{lt();const[bt,It,Dt]=T[J++],qt=N/3;F.set([h(bt[0]),Z,l(bt[1]),h(It[0]),Z,l(It[1]),h(Dt[0]),Z,l(Dt[1])],N),N+=9,G.set([qt,qt+1,qt+2],V),V+=3}w.push({flight:ot.i,vert0:j,vertCount:ot.verts})}const St=new Ze;St.setAttribute("position",new De(F,3)),St.setAttribute("color",new De(O,4)),St.setIndex(new De(G,1));const kt=new we(St,new fn({color:ES,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));kt.renderOrder=2.5,kt.name="passMarks",s(kt);const rt=St.getAttribute("color"),_t=n.flights.map((ot,j)=>kl(n.flights,j));m.push(ot=>{if(kt.visible=a.runPaths==="auto",!!kt.visible){for(const j of w){const bt=n.flights[j.flight],It=ot<bt.t0+bt.duration?0:Ul(ot,bt,_t[j.flight])*lp(1);let Dt=j.vert0;for(let qt=0;qt<j.vertCount;qt++,Dt++)rt.setXYZW(Dt,1,1,1,It)}rt.needsUpdate=!0}})}}{const E=rC(n.departures,n.anims,i.clips),A={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},w=new fn({map:$C(),color:ts,blending:2,transparent:!0,depthWrite:!1}),C=new we(new oi(Mp,Mp).rotateX(-Math.PI/2),w);C.position.y=.02,C.renderOrder=3,C.name="possessionRing",s(C);const T=i.ballRadius??qC,S=jC*T,L=Jo*r,H=new fn({color:ts,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),F=new we(new Fa(Math.max(S-L/2,1e-4),S+L/2,40),H);F.frustumCulled=!1,F.renderOrder=8,F.name="possessionHalo",s(F),m.push((O,G)=>{const N=aC(A,E,O);C.visible=a.highlight&&N.kind==="ring",F.visible=a.highlight&&(N.kind==="halo"||N.kind==="free");const V=Math.sin(O*2*Math.PI/1.6);if(N.kind==="ring"){const B=kg(f,N.player,O);C.position.x=h(B[0]),C.position.z=l(B[1]);const J=1+.05*V;C.scale.x=C.scale.z=J,w.opacity=.72+.18*V}else if(N.kind==="halo"||N.kind==="free"){const B=ep(f,O);F.position.set(h(B.pos[0]),T+B.height,l(B.pos[1])),F.quaternion.copy(G.quaternion),H.opacity=N.kind==="free"?XC:.72+.18*V}})}const d=[];for(const E of((y=e.overlays)==null?void 0:y.zones)??[]){if(wm.test(E.label??""))continue;const A=new we(new oi(E.w,E.h).rotateX(-Math.PI/2).rotateY(Math.PI),new fn({map:ZC(E),transparent:!0,depthWrite:!1}));A.position.set(h(E.at[0]),.004,l(E.at[1])),A.renderOrder=.5,s(A),d.push(A)}const v=()=>{for(const E of d)E.visible=a.zones};return v(),{update(E,A){for(const w of m)w(E,A)},set(E){Object.assign(a,E),v()}}}const QC=.16,tI=.25,jg=.8,Xg=.6,qg=8,eI=Xg*qg;function nI(i,t){return!(i>=0)||i>=jg||t>eI*i?0:QC*Math.exp(-i/tI)*Math.sin(2*Math.PI*(t/Xg-qg*i))}function iI(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??sI})}return t}const sI=.6,Sp=.15,rI=.12,oI=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Ap(i){return oI(Math.min(i,1-i)/rI)}function aI(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let V=0;V<4;V++)o.push([n.getX(V),n.getY(V),n.getZ(V)]);const a=[0,1,2].map(V=>Math.min(...o.map(B=>B[V]))),c=[0,1,2].map(V=>Math.max(...o.map(B=>B[V]))),u=[0,1,2].map(V=>c[V]-a[V]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,f]=[0,1,2].filter(V=>V!==h);if(!(u[l]>0&&u[f]>0))return null;const p=(V,B)=>{let J=0,Z=1/0;for(let lt=0;lt<4;lt++){const St=Math.abs((o[lt][l]-a[l])/u[l]-V)+Math.abs((o[lt][f]-a[f])/u[f]-B);St<Z&&(Z=St,J=lt)}return J},g=p(0,0),_=p(1,0),m=p(0,1),d=p(1,1),v=(V,B)=>s?B?s.getY(V):s.getX(V):0,M=new W().setFromMatrixScale(t).x,y=Math.max(2,Math.min(96,Math.ceil(u[l]*M/Sp))),E=Math.max(2,Math.min(96,Math.ceil(u[f]*M/Sp))),A=(y+1)*(E+1),w=new Float32Array(A*3),C=new Float32Array(A*2),T=new Float32Array(A*3),S=new Float32Array(A),L=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let V=0;V<=E;V++)for(let B=0;B<=y;B++){const J=V*(y+1)+B,Z=B/y,lt=V/E;w[J*3+h]=o[0][h],w[J*3+l]=a[l]+u[l]*Z,w[J*3+f]=a[f]+u[f]*lt;for(const St of[0,1])C[J*2+St]=v(g,St)*(1-Z)*(1-lt)+v(_,St)*Z*(1-lt)+v(m,St)*(1-Z)*lt+v(d,St)*Z*lt;T.set(L,J*3),S[J]=Ap(Z)*Ap(lt)}const H=[];for(let V=0;V<E;V++)for(let B=0;B<y;B++){const J=V*(y+1)+B;H.push(J,J+1,J+y+1,J+1,J+y+2,J+y+1)}const F=new Ze;F.setAttribute("position",new De(w,3)),F.setAttribute("uv",new De(C,2)),F.setAttribute("normal",new De(T,3)),F.setIndex(H),F.userData.drillOwned=!0,i.geometry=F;const O=new Float32Array(w),G=new Float32Array(A*3),N=new W;for(let V=0;V<A;V++)N.fromArray(O,V*3).applyMatrix4(t).toArray(G,V*3);return{mesh:i,axis:h,rest:O,world:G,weight:S,scale:M}}function Ep(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new he().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=ii.zMin;i.placed.copy(i.goal.matrixWorld)}function cI(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new he().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!lI(l))return;const f=aI(l,new he().multiplyMatrices(a,l.matrixWorld));f&&c.push(f)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new he,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new W}))};Ep(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=uI(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)hI(c);r.dirty=!1;continue}Ep(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const f=c.world[l*3]-o.p.x,p=c.world[l*3+1]-o.p.y,g=c.world[l*3+2]-o.p.z,_=nI(a,Math.hypot(f,p,g))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+_/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const lI=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function uI(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<jg&&(e=n);return e}function hI(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const Tu=new W(0,1,0),Kg=.04,$g=8,Jr=.1,pr=46,mr=25,Tp=70;function Ca(i,t){return new W(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function ja(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let vs=new Float64Array(64),sa=new Float64Array(64),ra=new Float64Array(64);const Yg=new W,Zg=new W,Ji=new W;function wp(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+vs[r]/2),s=Math.max(s,-i[r]/(2*e)+vs[r]/2);return n+s}function Rp(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-vs[o])*e),r=Math.min(r,i[o]+(n-vs[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Ia(i,t,e,n,s){const r=i.length;vs.length<r&&(vs=new Float64Array(r),sa=new Float64Array(r),ra=new Float64Array(r));const o=Yg.crossVectors(Tu,e).normalize(),a=Zg.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let _=0;_<r;_++)Ji.subVectors(i[_],t),vs[_]=Ji.dot(e),sa[_]=Ji.dot(o),ra[_]=Ji.dot(a);const h=Math.max(Math.max(wp(sa,r,c),wp(ra,r,u))*(1+Kg),$g),[l,f]=Rp(sa,r,c,h),[p,g]=Rp(ra,r,u,h);return{dist:h,offset:new W().addScaledVector(o,l).addScaledVector(a,p),slack:new ee(f,g)}}function fI(i,t,e,n,s){const r=Yg.crossVectors(Tu,e).normalize(),o=Zg.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){Ji.subVectors(h,t);const l=Ji.dot(e);u=Math.max(u,Math.abs(Ji.dot(r))/a+l,Math.abs(Ji.dot(o))/c+l)}return Math.max(u*(1+Kg),$g)}function Jg(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Jr)?!0:r>s*(1+Jr)?!1:n}function Qg(i,t,e=pr,n=mr){const s=new _n().setFromPoints(i),r=s.getCenter(new W),o=s.getSize(new W),{vHalf:a,hHalf:c}=ja(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Ia(i,r,Ca(u,h),a,c).dist,f=Ia(i,r,Ca(u,h+Math.PI/2),a,c).dist,p=Jg(o.x,o.z,t.aspect<1,f<l*(1-Jr));return{dist:p?f:l,alt:p}}function hl(i,t,e,n=pr,s=mr){const{dist:r}=Qg(i,t,n,s);return 2*r*Math.tan(ja(t).vHalf)/e}function Cp(i=pr){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const Bl=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),Ip=.6,dI=.8,pI=30,mI=mr,gI=12,Pp=1.03,_I=1.5;function bI(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return Pp+(1-Pp)*(e*e*(3-2*e))}const xI=2,Gl=.5,vI=i=>{const t=Math.floor(Math.max(i,0)/Gl)*Gl;return[t,t+xI]},yI=.25,MI=.06;function SI(i,t){const e=new W;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(yI)}class AI{constructor(t,e=pr,n=mr){Ie(this,"target",new W);Ie(this,"wanted",new W);Ie(this,"useAlt",!1);Ie(this,"pushAt",-1);Ie(this,"pushFor",0);Ie(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:bI(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new _n().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new W),o=s.getSize(new W),{vHalf:a,hHalf:c}=ja(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*Bl(e,Ip);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,f=l+Math.PI/2,p=Ca(h,l),g=Ca(h,f),_=Ia(t,r,p,a,c),m=Ia(t,r,g,a,c);!this.useAlt&&m.dist<_.dist*(1-Jr)?this.useAlt=!0:this.useAlt&&_.dist<m.dist*(1-Jr)?this.useAlt=!1:this.useAlt=Jg(o.x,o.z,this.camera.aspect<1,this.useAlt);const d=this.useAlt?m:_,v=this.useAlt?g:p,M=n.lookAt?r:r.clone().add(d.offset),y=n.lookAt?fI(t,r,v,a,c):d.dist;if(n.breath&&!n.lookAt){const w=new W().crossVectors(Tu,v).normalize(),C=new W().crossVectors(v,w).normalize(),T=MI*d.dist,S=(L,H)=>{const F=Math.min(H,T);return Math.min(Math.max(L,-F),F)};M.addScaledVector(w,S(n.breath.dot(w),d.slack.x)).addScaledVector(C,S(n.breath.dot(C),d.slack.y))}const E=y*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(E).add(M);const A=Bl(e,Ip);this.camera.position.lerp(this.wanted,A),this.target.lerp(M,A),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const EI=1.8,TI=34,wI=844,RI=1,t0=4;function Lp(i,t,e=pr,n=mr){const{vHalf:s}=ja(t),r=e*Math.PI/180,{dist:o}=Qg(i,t,e,n),a=TI*2*o*Math.tan(s)/(wI*EI*Math.cos(r));return Math.min(t0,Math.max(RI,a))}function CI(i,t,e,n=pr,s=mr,r=t0){const o=h=>$r(i,Math.min(r,h));let a=o(Lp(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(Lp([...t,...Tl(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...Tl(i,a)]}}class II{constructor(){Ie(this,"last",-1);Ie(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const $i={clips:0,schedule:0,build:0};let Dp=null;function PI(){return Dp??(Dp=fetch(Tn("assets/clips_ochi.json")).then(i=>i.json()).then(i=>dg(i)).catch(i=>{throw Dp=null,i}))}let Fp=null;function LI(i){return Fp??(Fp=ou().loadAsync(Tn("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Fp=null,t}))}function DI(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const e0="coach";function FI(i){return i.team===e0||i.number===void 0?void 0:String(i.number)}function NI(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==e0)??t[0]}const UI=i=>i==="boys"||i==="girls";async function kI(i,t,e,n=oE){if(!UI(e))return;let s=null;try{s=await n(e)}catch{s=null}return BI(i,t,s)}const OI=(i,t,e)=>i===t&&e!==void 0;function BI(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function n0(i,t,e={}){var ve,He,Qe;const n=performance.now(),s=LS(i),r=await PI();$i.clips=performance.now()-n;const o=e.stage??Ua(t),a=new vn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Ct,I])=>new W(Ct*s.pitch.width/2,0,I*s.pitch.length/2)),u=s.players.map(Ct=>new W(Ct.start[0]-s.pitch.width/2,0,Ct.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??CI(s,h,o.camera,e.elev,e.az).scale,f=Ct=>[...h,...Tl(s,Ct)],p=o.size();let g=l(),_=f(g);dd(.35*g);let m=$r(s,g);const d=performance.now(),v=((ve=e.schedules)==null?void 0:ve.get(m))??Iw(s,r,m);(He=e.schedules)==null||He.set(m,v),$i.schedule=performance.now()-d;const M=XS(s),y=(Ct=e.elev??0)=>Ct>=Tp?[..._,...M]:_;let E=hl(y(),o.camera,o.size().height,e.elev,e.az),A=Cp(e.elev);const w=iA(s.pitch.width,s.pitch.length),{toWorld:C,goals:T,cones:S,boards:L,setWorld:H,setMasts:F}=await EA(a,s,o.renderer.capabilities.getMaxAnisotropy(),g,w),O=cI(T,iI(v.flights),C);let G=_.slice(h.length);o.fitShadow(_),o.setFog(eA(s.pitch.width,s.pitch.length)),o.setHorizon(w),o.setSky(!1);const N=NI(s.teams),V=await Oa(a,s.players.length,void 0,void 0,0,await kI(s.players,N,e.squad)),B=e.kit?await Jm(e.kit.pattern,s.players.flatMap((Ct,I)=>Ct.team===N?Zm(V[I]):[])):null,J=await Qm(),Z=new Map,lt=new Map;s.players.forEach((Ct,I)=>{const x=V[I];Z.set(Ct.id,x),x.root.rotation.order="YXZ",x.root.scale.setScalar(g);const nt=OI(Ct.team,N,e.kit),$=s.teams[Ct.team].kit.primary;Pl(x,nt?e.kit:$,nt?B:null,{label:FI(Ct),boxes:J,base:$}),x.root.position.copy(C(Ct.start));const b=BS(.9);b.scale.setScalar(g),b.position.x=x.root.position.x,b.position.z=x.root.position.z,a.add(b),lt.set(Ct.id,b)});const St=(await LI()).clone();St.scale.setScalar(g),a.add(St);const kt=yp({root:a,mesh:St,bodyScale:g,radius:.11*g,resolution:o.size()}),rt=!!s.ball,_t=ba(s);rt||(St.visible=!1,kt.hide());const ot=Array.from({length:(((Qe=s.balls)==null?void 0:Qe.length)??0)+v.ballSwaps.length},()=>St.clone()),j=ot.map(Ct=>(Ct.scale.setScalar(g),a.add(Ct),yp({root:a,mesh:Ct,bodyScale:g,radius:.11*g,resolution:o.size(),streak:!1}))),bt=new AI(o.camera,e.elev,e.az);bt.armPushIn(_I,performance.now()/1e3);let It="fit",Dt=-1,qt=[];const jt=new W,ce=new W,X=new W;let be=!1,se=[],Qt=-1/0;const Ot=new Kw(s.duration,e.loop??!0),me=new II,wt=new Map(s.players.map(Ct=>[Ct.id,Ct.role])),D=Hw(s.players,v,s.duration,_t),R=qw(r,v.anims,wt,v.bounces,e.inertial,D.ready),{applyAnim:q,cueAt:st}=R,vt=$w(v.turns,s.players.map(Ct=>[Ct.id,Ct.role==="keeper"?Be(Ct.start,_t):0])),tt=vt.heading,Ft=vt.rateOf,At=new Map(s.players.map(Ct=>[Ct.id,Ct.start])),Nt=Array.from({length:rl},()=>new Map),fe=new Map,Rt=ER(),Ht=new Map;for(const Ct of v.departures)(Ht.get(Ct.player)??Ht.set(Ct.player,[]).get(Ct.player)).push(Ct.contact);for(const Ct of v.arrivals)(Ht.get(Ct.player)??Ht.set(Ct.player,[]).get(Ct.player)).push(Ct.at);const Kt=s.players.map(Ct=>Ct.id);function Yt(){const Ct=new Set(a.children);return{built:JC({scene:a,drill:s,schedule:v,clips:r,headingAt:x=>tt.get(x)??0,search:e.search,pathM:E,pathWidthK:A,ballRadius:.11*g,goalScale:m}),owned:a.children.filter(x=>!Ct.has(x))}}let Vt=Yt();const ge={},Lt={update:(Ct,I)=>Vt.built.update(Ct,I),set:Ct=>{Object.assign(ge,Ct),Vt.built.set(Ct)}};function Et(){for(const Ct of Vt.owned)a.remove(Ct),hu(Ct);Vt=Yt(),Vt.built.set(ge)}const Y=cR(),Ut=[],ut=mR(),yt=()=>{ut.reset(),Y.reset(),R.reset()};Ot.onSeek(yt),Ot.onLoop(yt);const Bt=yC(Ot);function Gt(){const Ct=l();if(Ct!==g){g=Ct,_=f(g),G=_.slice(h.length),m=$r(s,g),dd(.35*g);for(const I of Z.values())I.root.scale.setScalar(g);for(const I of lt.values())I.scale.setScalar(g);St.scale.setScalar(g);for(const I of ot)I.scale.setScalar(g);for(const I of S)I.scale.setScalar(g);for(const I of L)Nm(I,g);for(const I of T)I.scale.setScalar(m);o.fitShadow(_),yt()}kt.resize(g,.11*g,o.size());for(const I of j)I.resize(g,.11*g,o.size());E=hl(y(bt.elev),o.camera,o.size().height,bt.elev,bt.az),Et(),o.rule.wake()}let ne=0;const xe=o.onBox(()=>{ne||(ne=requestAnimationFrame(()=>{ne=0,Gt()}))}),Fe=o.size();(Fe.width!==p.width||Fe.height!==p.height)&&Gt();const Ae=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Z,heading:tt,camera:o.camera,ball:St,spare:ot,schedule:v,goals:T,bodyScale:g,lockDbg:Ae,clips:r,cueAt:st,inert:R.inert},__pathMetrics:()=>({metresPerPx:E,widthK:A,runHalfM:1.6*E*A/2,passHalfM:2.2*E*A/2})});function ln(Ct,I=30,x=.12,nt=4,$=1){const b=[];for(const[Q,et]of Z)et.root.traverse(ft=>{ft.isBone&&/foot/i.test(ft.name)&&b.push({id:Q,name:ft.name,bone:ft})});Ot.pause(),Ot.seek(0);for(let Q=0;Q<90;Q++)o.step(1/60);Ot.play();const P=1/I,k=Math.min(Ct??s.duration,s.duration),z=Math.max(0,Math.round(k*I)-1),U=b.map(()=>[]),K=new W;for(let Q=0;Q<=z;Q++){for(let et=0;et<b.length;et++){const ft=b[et].bone.matrixWorld.elements;K.set(ft[12],ft[13],ft[14]);const Tt=Z.get(b[et].id).root.worldToLocal(K.clone());U[et].push([Q*P,ft[12],ft[13],ft[14],Tt.x,Tt.z])}o.step(P)}Ot.pause();const it=(Q,et)=>{var ft;return((ft=st(Q,et))==null?void 0:ft.clip)??"idle"},dt=[];return b.forEach((Q,et)=>{const ft=(at,ct)=>{if(ct-at<nt)return;const mt=U[et].slice(at,ct);let gt=0,xt=0;for(let Wt=1;Wt<mt.length;Wt++)gt=Math.max(gt,Math.hypot(mt[Wt][1]-mt[0][1],mt[Wt][3]-mt[0][3])),xt+=Math.hypot(mt[Wt][4]-mt[Wt-1][4],mt[Wt][5]-mt[Wt-1][5])/P;dt.push({player:Q.id,foot:Q.name,t0:+mt[0][0].toFixed(2),t1:+mt[mt.length-1][0].toFixed(2),drift:+gt.toFixed(3),localSpeed:+(xt/(mt.length-1)).toFixed(2),clip0:it(Q.id,mt[0][0]),clip1:it(Q.id,mt[mt.length-1][0])})},Tt=U[et].map((at,ct)=>ct===0?1/0:Math.hypot(at[1]-U[et][ct-1][1],at[3]-U[et][ct-1][3])/P);let pt=-1;U[et].forEach((at,ct)=>{const mt=at[2]<x,gt=ct>0&&it(Q.id,at[0])!==it(Q.id,U[et][ct-1][0]),xt=Tt[ct]>$&&ct>0&&Tt[ct-1]>$;pt>=0&&(!mt||gt||xt)&&(ft(pt,ct),pt=-1),pt<0&&mt&&Tt[ct]<$&&(pt=ct)}),pt>=0&&ft(pt,U[et].length)}),dt.sort((Q,et)=>et.drift-Q.drift),{feet:b.map(Q=>({id:Q.id,name:Q.name})),hPlant:x,fps:I,phases:dt}}e.embed||Object.assign(window,{__footAudit:ln}),e.embed&&o.rule.enable();const un=new Map,ai=new W;let Nn=0;const yn=e.sfx?bC(v.flights):[];let Un=0;o.scene.add(a);const qn=(Ct,I)=>{var dt,Q,et,ft,Tt,pt;Ot.advance(Ct);const x=Ot.t,nt=Ot.playing?Ct:0,$=v.attachTo(x),b=pa({t:x,holderId:$,holderRoot:$?At.get($):null,holderHeading:$?tt.get($):0,ballStart:_t,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos,P=new Set;$&&P.add($);for(const[at,ct]of Ht)ct.some(mt=>Math.abs(x-mt)<=MR)&&P.add(at);for(const at of s.players){const ct=v.moves[at.id]??[];for(let gt=0;gt<rl;gt++)Nt[gt].set(at.id,((dt=Zi(ct,x+yR*gt/(rl-1)))==null?void 0:dt.pos)??at.start);const mt=Zi(ct,x);fe.set(at.id,mt?Math.hypot(mt.vel[0],mt.vel[1]):0)}const k=Rt.step(Kt,Nt,P,xR*g,x,nt,fe);for(const at of s.players){const ct=Z.get(at.id);let mt=at.start,gt=0;const xt=Zi(v.moves[at.id]??[],x);xt&&(mt=xt.pos,gt=xt.speed);const Wt=fg(v.dives,v.moves[at.id],at.id,x),Jt=Wt!==null;Wt&&(mt=Wt);const Ne=k.get(at.id);Ne&&!Jt&&(Ne[0]||Ne[1])&&(mt=[mt[0]+Ne[0],mt[1]+Ne[1]]),ct.root.position.copy(C(mt));const $t=v.moves[at.id]??[],le=Jt?0:EE($t,x+Zd);ct.root.rotation.x=0,ct.root.rotation.z=0,Jt||(ct.root.position.y-=CE($t,x)-lw(v.bounces,at.id,x)*g),At.set(at.id,mt);let de=null,_e=!1;for(const re of v.faces)re.player===at.id&&x>=re.t0&&(de=re.until===void 0||x<=re.until?re.at:null,re.lock&&x>=re.lock[0]&&x<=re.lock[1]&&(_e=!0));const Mt=de!==null&&Pi(mt,de),oe=OE(mt,b,Mt,at.id===$),ue=Mt?Be(mt,de):oe??tt.get(at.id),{h:ae,clipYaw:We}=vt.step(at.id,x,nt,gt,ue,_e,!Mt&&oe!==null);ct.root.rotation.y=IE(ae,We),q(at.id,ct,x,nt,gt);const Oe=Tf(ct);if(Oe.length){const re=ut.tilt(at.id,Jt?[0,0]:SE($t,x+Zd),tt.get(at.id),le,nt);tp(ct.root,Oe[0],re.pitch,0,re.roll)}const Ee=nE(ct);if(Ee.length&&!Jt){ct.root.updateMatrixWorld(!0);for(let Ue=0;Ue<Ee.length;Ue++){const Ge=Ee[Ue].matrixWorld.elements;Ut[Ue]=[Ge[12],Ge[13],Ge[14]]}Ut.length=Ee.length;const re=st(at.id,x),Ce=aR((re==null?void 0:re.clip)??null,re?(Q=r.clips[re.clip])==null?void 0:Q.category:void 0,rR($t,x)),[Ye,Le]=Y.step(at.id,Ut,[ct.root.position.x,ct.root.position.z],x,nt,Ce,g);ct.root.position.x+=Ye,ct.root.position.z+=Le,Ae&&Ae.set(at.id,[Ce?1:0,Math.hypot(Ye,Le),Y.foot(at.id),gt,Y.rootSpeed(at.id)])}const Zt=lt.get(at.id);if(Zt.position.x=ct.root.position.x,Zt.position.z=ct.root.position.z,at.id===$){const re=pC(v.arrivals,at.id,x),Ce=re>=0?iE(ct)[re]:void 0;if(Ce){ct.root.updateMatrixWorld(!0);const Ye=Ce.matrixWorld.elements;ai.set(Ye[12],Ye[13],Ye[14]),Nn=Gg(v.arrivals,v.departures,at.id,x)}}}const z=pa({t:x,holderId:$,holderRoot:$?At.get($):null,holderHeading:$?tt.get($):0,ballStart:_t,flights:v.flights,departures:v.departures,arrivals:v.arrivals});St.position.copy(C(z.pos,.11*g+z.height)),Nn>0&&(St.position.lerp(ai,Nn),Nn=0),rt&&kt.update({pos:St.position,height:z.height,t:x,dt:nt,apex:z.apex,speed:z.speed,held:$!==null&&mC(v.arrivals,v.departures,$,x)});for(let at=0;at<ot.length;at++){const ct=(et=s.balls)==null?void 0:et[at],mt=ct?v.ballSwaps.find(Wt=>Wt.take===at):v.ballSwaps[at-(((ft=s.balls)==null?void 0:ft.length)??0)],gt=ct?!(mt&&x>=mt.t):x>=mt.t;if(ot[at].visible=gt,!gt){j[at].hide();continue}let xt;ct?ct.carrier&&At.has(ct.carrier)?xt=ti(At.get(ct.carrier),tt.get(ct.carrier)??0):xt=sg(ct,x):xt=mt.drop,ot[at].position.copy(C(xt,.11*g)),j[at].update({pos:ot[at].position,height:0,t:x,dt:nt,held:!1,speed:0})}e.sfx&&(Bt(e.sfx,yn,Un,x,Ot.playing,z.height,z.speed),Un=x),Lt.update(x,o.camera),O.update(x);for(const at of s.players){const ct=Z.get(at.id),mt=eE(ct);if(!mt)continue;const gt=YT(v.faces,at.id,x),xt=gt?C(gt):St.position,Wt=D.scan(at.id,x,!st(at.id,x)&&at.id!==$&&at.role!=="keeper"),Jt=PE(Math.atan2(xt.x-ct.root.position.x,xt.z-ct.root.position.z)-tt.get(at.id)+UE(Ft.get(at.id)??0)+Wt.yaw,58*Math.PI/180+Wt.env*(zw-58*Math.PI/180),.85+.15*Wt.env),Ne=un.get(at.id)??0,$t=DE(Ne,Jt,nt);un.set(at.id,$t);const le=Tf(ct),de=le.length>1?ut.shoulder(at.id,$t,nt):0;le.length>1&&tp(ct.root,le[1],0,de,0),bR(mt,-($t-de))}const U=[...Z.values()].map(at=>new W(at.root.position.x,0,at.root.position.z)),K=o.rule.snap()?1/0:Ct,it=I/1e3;if(It==="broadcast"){let at=-1/0;for(const mt of v.departures)x>=mt.contact&&mt.contact>at&&(at=mt.contact);at!==Qt&&(Qt=at,se=s.players.filter(mt=>C(At.get(mt.id)??mt.start).distanceTo(St.position)<=gI).map(mt=>mt.id)),!be||K===1/0?(X.copy(St.position),be=!0):X.lerp(St.position,Bl(Ct,dI));const ct=se.length?se.map(mt=>{const gt=Z.get(mt);return new W((gt==null?void 0:gt.root.position.x)??0,0,(gt==null?void 0:gt.root.position.z)??0)}):U;bt.frame([...ct,St.position.clone()],K,{now:it,lookAt:X.clone(),elevDeg:pI,azDeg:mI})}else{const[at,ct]=vI(x);if(at!==Dt){Dt=at,qt=[];const mt=[];for(let gt=at;gt<=ct+1e-9;gt+=Gl){const xt=new Map;for(const $t of s.players){const le=((Tt=Zi(v.moves[$t.id]??[],gt))==null?void 0:Tt.pos)??$t.start;xt.set($t.id,le);const de=C(le);qt.push(new W(de.x,0,de.z)),Math.abs(de.x)<=s.pitch.width/2&&Math.abs(de.z)<=s.pitch.length/2&&mt.push(new W(de.x,0,de.z))}const Wt=v.attachTo(gt),Jt=pa({t:gt,holderId:Wt,holderRoot:Wt?xt.get(Wt)??null:null,holderHeading:Wt?tt.get(Wt)??0:0,ballStart:_t,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),Ne=C(Jt.pos);mt.push(new W(Ne.x,0,Ne.z))}jt.copy(SI(mt,ce))}U.push(...qt),U.push(...c,...G),bt.elevNow>=Tp&&U.push(...M),bt.frame([...U,St.position.clone()],K,{now:it,breath:jt})}me.tick(I),DI(!!e.embed,`t ${x.toFixed(1)}s  fps ${me.avg.toFixed(0)}
[space] play/pause  [r] restart`),(pt=e.onFrame)==null||pt.call(e,x,I)};o.start(qn);const ht=Ct=>{Ct.code==="Space"&&(Ot.playing?Ot.pause():Ot.play()),Ct.code==="KeyR"&&Ot.seek(0)};e.embed||addEventListener("keydown",ht);function Pt(Ct){Ct!==It&&(It=Ct,H(!0),o.setSky(Ct==="broadcast"),F(Ct==="broadcast"),be=!1,Qt=-1/0,o.rule.wake())}function te(Ct,I=bt.az){Ct===bt.elev&&I===bt.az||(bt.setElev(Ct),bt.setAz(I),E=hl(y(Ct),o.camera,o.size().height,Ct,I),A=Cp(Ct),Et(),o.rule.wake())}return $i.build=performance.now()-n-$i.clips-$i.schedule,{timeline:Ot,step:Ct=>o.step(Ct),stage:o,overlays:Lt,setCamera:te,setFollow:Pt,setPushIn:Ct=>bt.armPushIn(Ct,performance.now()/1e3),dispose(){removeEventListener("keydown",ht),xe(),ne&&(cancelAnimationFrame(ne),ne=0),o.scene.remove(a),Gm(a,[...V.map(Ct=>Ct.root),St,...ot,...T]),B==null||B.dispose(),o.setFog(null),o.setHorizon(null),o.setSky(!0),e.stage?o.park(qn):o.dispose()}}}const Np="Shirt Soccer Man B",GI={boys:Np,mixed:Np,girls:"Shirt Soccer Woman A"},zI="10",Up=12,HI=23.9,VI=32,WI=4,ir={shirt:{top:1.055856,bottom:.512852,fill:.88},full:{top:1.014873,bottom:-.142881,fill:.92}},jI=.35,XI=ir.shirt.top,qI=ir.shirt.bottom;ir.shirt.fill;const ps=.62,kp=.09,Op=3,KI=.86,$I=.002,YI=724752,fl=90,ZI=.014,JI=.5,dl=[2.6,5],Bp=1.15,$s=.14,pl=.1,QI=.26,tP=.02,eP="idle_relaxed_c",Gp=[eP,"idle_relaxed_a","idle_a","idle_b"];async function nP(i,t,e={}){var wt;const n=e.stage??Ua(i),s=n.scene,r=new vn;let o=!0;const a=s.children.find(D=>D.isDirectionalLight),c=s.children.find(D=>D.isHemisphereLight),u={background:s.background,fog:s.fog,sun:a&&{position:a.position.clone(),intensity:a.intensity,colour:a.color.clone(),normalBias:a.shadow.normalBias},hemi:c&&{sky:c.color.clone(),ground:c.groundColor.clone(),intensity:c.intensity}};s.background=new ie(YI),s.fog=null,a&&(a.position.set(-3.2,4.4,3.6),a.color.set(16773856),a.intensity=3.2,a.shadow.normalBias=.02),c&&(c.color.set(10466248),c.groundColor.set(724752),c.intensity=.7);const h=new nu(12374240,1.35);h.position.set(2.8,2.2,-3.4),r.add(h,h.target);const l=new w_(9082530,1.35);r.add(l);const f=new we(new qr(ps,ps*1.04,kp,48),new Oi({color:1448991,roughness:.85,metalness:0}));f.position.y=-kp/2,f.receiveShadow=!0,r.add(f);const p=iP((wt=e.maskDeps)==null?void 0:wt.loader);let g;const _=Promise.race([p,new Promise(D=>{g=setTimeout(()=>D(null),Km)})]),m=await sE(e.material??GI[e.squad??fu]),[d]=await Oa(r,1,void 0,void 0,Math.max(m,0));d.root.traverse(D=>{D.castShadow=D.type==="SkinnedMesh"});let v=await Jm([...Il],Zm(d),e.maskDeps);const M=await Qm(e.maskDeps),y={label:zI,boxes:M};let E=Pl(d,t,v,y),A=null;const C=(e.clip?[e.clip,...Gp]:Gp).find(D=>d.clips.has(D))??[...d.clips.keys()][0],T=C?d.mixer.clipAction(d.clips.get(C)):null;T==null||T.play();const S=await _;clearTimeout(g),S?r.add(S):p.then(D=>{D&&(o?r.add(D):hu(D))}).catch(()=>{}),s.add(r),d.mixer.update(1/60),d.root.updateWorldMatrix(!0,!0);const L=new _n().setFromObject(d.root,!0),H=Math.max(.5,L.max.y-L.min.y),F={fov:n.camera.fov,near:n.camera.near,far:n.camera.far},O=n.camera;O.fov=HI,O.near=.1,O.far=60;const G=new W(0,L.min.y+H*(XI+qI)/2,0);let N=ka,V=ir[N],B=V,J=1;const Z=D=>1-(1-D)**3;function lt(){const D=J>=1?1:Z(J),R=Nt=>D>=1?B[Nt]:V[Nt]+(B[Nt]-V[Nt])*D,q=R("top"),st=R("bottom");G.y=L.min.y+H*(q+st)/2;const tt=H*(q-st)/R("fill")/2/Math.tan(O.fov*Math.PI/360),Ft=VI*Math.PI/180,At=WI*Math.PI/180;O.position.set(Math.sin(Ft)*Math.cos(At)*tt,G.y+Math.sin(At)*tt,Math.cos(Ft)*Math.cos(At)*tt),O.lookAt(G),O.updateProjectionMatrix()}lt(),n.fitShadow([new W(-ps,0,-ps),new W(ps,H,ps)]),n.setSky(!1);const St=n.onBox(lt);O.updateMatrixWorld(!0);const kt=new W(0,G.y+H*.22,0),rt=new Float32Array(fl*3),_t=new W,ot=new W,j=new _m(O.position,kt),bt=new W,It=Math.tan(O.fov*Math.PI/360),Dt=It*O.aspect,qt=O.position.distanceTo(new W(0,G.y,0)),jt=D=>{for(const R of[-$s,$s])for(const q of[-pl,pl])for(const st of[-$s,$s])if(ot.set(D.x+R,D.y+q,D.z+st),ot.y<.03||ot.distanceTo(O.position)<qt+tP||(j.closestPointToPoint(ot,!0,bt),bt.distanceTo(ot)<QI))return!1;return!0};for(let D=0,R=0;D<fl&&R<fl*40;R++){const q=dl[0]+Math.random()*(dl[1]-dl[0]);_t.set((Math.random()*2-1)*Dt*q*Bp,(Math.random()*2-1)*It*q*Bp,-q).applyMatrix4(O.matrixWorld),jt(_t)&&(_t.toArray(rt,D*3),D++)}const ce=new um(new Ze().setAttribute("position",new De(rt,3)),new Yl({color:ts,size:ZI,transparent:!0,opacity:JI,depthWrite:!1}));r.add(ce),e.framing&&e.framing!==N&&(N=e.framing,V=B=ir[N],lt());let X=t,be=0;function se(D){be=(D%1+1)%1,d.root.rotation.y=be*Math.PI*2,f.rotation.y=d.root.rotation.y}let Qt=0;function Ot(D){var R;se(be+D/Up),Qt+=D,ce.position.set(Math.sin(Qt*.043)*$s,Math.sin(Qt*.4)*pl,Math.sin(Qt*.031)*$s),J<1&&(J=Math.min(1,J+D/jI),lt()),A&&(A.at+=D/xE,Ff(A.mats,A.at)>=1&&(A=null)),d.mixer.update(D),(R=e.onFrame)==null||R.call(e,be*Up,performance.now())}const me=D=>Ot(D);return e.embed&&n.rule.enable(),n.start(me),n.rule.play(),{stage:n,step:Ot,setTurn:se,get framing(){return N},clip:C??"",bodyBox:[L.min.y,L.max.y],setFraming(D){if(D===N)return;const R=J>=1?1:Z(J),q=st=>R>=1?B[st]:V[st]+(B[st]-V[st])*R;V={top:q("top"),bottom:q("bottom"),fill:q("fill")},N=D,B=ir[D],J=0,n.rule.wake()},async setKit(D){const R=X;X=D,E=Pl(d,D,v,{...y,from:R}),A={at:0,mats:E},Ff(E,0),n.rule.wake()},dispose(){o=!1,St(),s.remove(r),d.mixer.stopAllAction(),Gm(r,[d.root]),v==null||v.dispose(),s.background=u.background,s.fog=u.fog,a&&u.sun&&(a.position.copy(u.sun.position),a.intensity=u.sun.intensity,a.color.copy(u.sun.colour),a.shadow.normalBias=u.sun.normalBias),c&&u.hemi&&(c.color.copy(u.hemi.sky),c.groundColor.copy(u.hemi.ground),c.intensity=u.hemi.intensity),Object.assign(O,F),O.updateProjectionMatrix(),e.stage?n.park(me):n.dispose()}}}async function iP(i){Or||(Or=(async()=>{let r;try{r=await(i??new Ql).loadAsync(Tn("assets/turf.webp"))}catch{return null}return r.colorSpace=Xe,r.wrapS=r.wrapT=1e3,r.repeat.set(Op,Op),r.anisotropy=8,r.needsUpdate=!0,r.userData.shared=!0,r})().catch(()=>null),Or.then(r=>{r||(Or=null)}));const t=await Or;if(!t)return null;const e=new Oi({map:t,roughness:1,metalness:0,transparent:!0,depthWrite:!1}),n=sP();n&&(e.alphaMap=n),oa||(oa=new Da(ps,64),oa.userData.shared=!0);const s=new we(oa,e);return s.rotation.x=-Math.PI/2,s.position.y=$I,s.receiveShadow=!0,s}let Or=null,oa=null,ml=null;function sP(){if(ml)return ml;if(typeof document>"u")return null;const i=128,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)return null;const n=e.createRadialGradient(i/2,i/2,i/2*KI,i/2,i/2,i/2);n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#000000"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new Pn(t);return s.colorSpace="",s.userData.shared=!0,ml=s,s}const i0="assets/narration/",rP=new Set(["progression","why"]),zp=i=>Math.round(i*100)/100,Qi=1;function oP(i,t,e){const n=t.map((h,l)=>({l:h,index:l})).filter(h=>h.l.beat==="take");if(n.length){const h=i?e[i]:void 0,l=typeof h=="number"&&Number.isFinite(h)&&h>0,f=l?h/Qi:0,p=n.map(M=>(M.l.text??"").length),g=p.reduce((M,y)=>M+y,0)||1,_=[];let m=0;for(const M of p)_.push(zp(m/g*f)),m+=M;const d=t.map((M,y)=>({index:y,clip:null,hold:M.hold??0,tail:!1}));l&&n.forEach((M,y)=>{const E=y+1<n.length?_[y+1]:f;d[M.index]={index:M.index,clip:y===0?i:null,hold:zp(E-_[y]),tail:!1,...y>0?{at:_[y]}:{}}});const v=l?d[n[0].index]:null;return{lines:d,hook:null,tail:[],queue:v?[v]:[],script:v?[i]:[],hasAudio:l,take:!0}}let s=0,r=-1;const o=[],a=t.map((h,l)=>{const f=h.beat==="action"?`action-${++s}`:h.beat,p=i&&f?`${i}-${f}`:null,g=p?e[p]:void 0,_=typeof g=="number"&&Number.isFinite(g)&&g>0?p:null,m={index:l,clip:_,hold:_?g/Qi:h.hold??0,tail:rP.has(h.beat??"")};return h.beat==="hook"?r=l:m.tail&&o.push(m),m}),c=r<0?null:a[r],u=a.filter(h=>h!==c&&h.clip!==null);return{lines:a,hook:c,tail:o,queue:u,script:[...c!=null&&c.clip?[c.clip]:[],...u.map(h=>h.clip)],hasAudio:a.some(h=>h.clip!==null),take:!1}}async function aP(i=Tn(i0)){try{const t=await fetch(`${i}index.json`);if(!t.ok)return{};const e=await t.json();return e&&typeof e=="object"?e:{}}catch{return{}}}const cP=.0056,lP=.01;function uP(i){const t=i.length,e=i.sampleRate,n=Math.max(1,Math.round(e*lP)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const u=Math.min(c+n,t);let h=0,l=0;for(const f of s)for(let p=c;p<u;p++)h+=f[p]*f[p],l++;return l>0&&Math.sqrt(h/l)>cP};let o=-1,a=-1;for(let c=0;c<t;c+=n)if(r(c)){o=c;break}if(o<0)return{lead:0,tail:0,end:t/e};for(let c=Math.floor((t-1)/n)*n;c>=0;c-=n)if(r(c)){a=Math.min(c+n,t);break}return{lead:o/e,tail:Math.max((t-a)/e,0),end:a/e}}function Hp(i,t,e){return t&&e?Math.max(i-(e.lead+e.tail)/Qi,0):i}function hP(i,t,e){if(!e)return i.hold;const n=i.at===void 0?e.lead:0;return Math.max(i.hold-(n+(t?e.tail:0))/Qi,0)}const fP=40,dP=3,pP=.75,mP=1.5,zl="data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==";function Pa(i){return(i==null?void 0:i.name)!=="AbortError"}class gP{constructor(t=Tn(i0),e=n=>new Audio(n)){Ie(this,"blocked",!1);Ie(this,"shared",null);Ie(this,"srcNow","");Ie(this,"unlocked",!1);Ie(this,"el",null);Ie(this,"finish",null);Ie(this,"held",new Map);Ie(this,"inflight",new Map);Ie(this,"trims",new Map);Ie(this,"ctx",null);Ie(this,"noCtx",!1);Ie(this,"gen",0);Ie(this,"walks",0);Ie(this,"playing",null);Ie(this,"playGen",0);Ie(this,"arm",null);Ie(this,"onTrim",null);Ie(this,"onStarted",null);this.dir=t,this.make=e}setDir(t){if(t!==this.dir){this.dir=t;for(const[e,n]of this.held)if(e!==this.playing)try{URL.revokeObjectURL(n)}catch{}this.held.clear(),this.inflight.clear()}}fetched(){return[...this.held.keys()]}open(t){var n;if(!this.shared)return this.shared=this.make(t),this.srcNow=t,this.shared;const e=this.shared;if(this.srcNow!==t){this.srcNow=t;try{e.src=t}catch{}try{(n=e.load)==null||n.call(e)}catch{}}return e}unlock(){if(!this.unlocked&&(this.unlocked=!0,this.blocked=!1,this.playing===null))try{const t=this.open(zl);Promise.resolve(t.play()).then(()=>{if(this.playing===null)try{t.pause()}catch{}}).catch(()=>{})}catch{}}newGeneration(){this.gen++}trim(t){return this.trims.get(t)}remaining(t){const e=this.el;if(!e||this.playing!==t)return;const n=this.trims.get(t),s=n&&n.tail>0?Math.min(n.end,e.duration):e.duration;if(Number.isFinite(s))return Math.max((s-(e.currentTime||0))/(e.playbackRate||1),0)}closeCtx(){const t=this.ctx;this.ctx=null;try{Promise.resolve(t==null?void 0:t.close()).catch(()=>{})}catch{}}async measure(t,e){var n,s;if(!(this.trims.has(t)||this.noCtx))try{if(!this.ctx){const a=globalThis,c=a.AudioContext??a.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await e.arrayBuffer()).slice(0));if(!r)return;const o=uP(r);this.trims.set(t,o),this.playing===t&&((n=this.arm)==null||n.call(this,o),(s=this.onTrim)==null||s.call(this,t,o))}catch{}}touch(t){const e=this.held.get(t);if(e!==void 0)return this.held.delete(t),this.held.set(t,e),e}async prefetch(t){if(this.touch(t)!==void 0||this.inflight.has(t))return;const e=this.pull(t);this.inflight.set(t,e);try{await e}finally{this.inflight.delete(t)}}async pull(t){try{const e=await fetch(`${this.dir}${t}.m4a`);if(!e.ok)return;const n=await e.blob(),s=URL.createObjectURL(n);this.held.set(t,s),await this.measure(t,n);for(const r of[...this.held.keys()]){if(this.held.size<=fP)break;if(r===this.playing)continue;const o=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(o)}catch{}}}catch{}}async prefetchAll(t){const e=this.gen;this.walks++;try{for(const n of t){if(e!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(t,e=0,n=0){if(!this.held.has(t)&&this.inflight.has(t)){this.stop();const s=this.playGen;return this.waitHeld(t).then(()=>s===this.playGen?this.start(t,e,n):void 0)}return this.start(t,e,n)}waitHeld(t){const e=this.inflight.get(t);if(!e)return Promise.resolve();let n;return Promise.race([e.catch(()=>{}),new Promise(s=>{n=setTimeout(s,pP*1e3)})]).then(()=>{n!==void 0&&clearTimeout(n)})}start(t,e,n){this.stop();let s;try{s=this.open(this.touch(t)??`${this.dir}${t}.m4a`)}catch{return Promise.resolve()}try{s.preservesPitch=!0,s.webkitPreservesPitch=!0,s.playbackRate=Qi}catch{}try{s.currentTime=n}catch{}this.el=s;const r=this.trims.get(t);return new Promise(o=>{let a,c,u=()=>{},h,l,f,p,g;const _=(w,C)=>{if(C)try{s.removeEventListener(w,C)}catch{}};let m=!1;const d=()=>{m||(m=!0,a!==void 0&&(clearTimeout(a),a=void 0),c!==void 0&&(clearTimeout(c),c=void 0),_("timeupdate",h),h=void 0,_("playing",l),l=void 0,_("loadedmetadata",f),f=void 0,_("playing",p),p=void 0,_("timeupdate",g),g=void 0,_("ended",d),_("error",d),this.el===s&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),o())};this.finish=d,s.addEventListener("ended",d),s.addEventListener("error",d);let v=!1;const M=w=>{if(v||!(w.lead>0||w.tail>0))return;v=!0;const C=()=>{if(w.lead>s.currentTime)try{s.currentTime=w.lead}catch{}const T=Math.min(w.end,s.duration);if(!(w.tail>0)||!Number.isFinite(T)||T<=0)return;let S=-1;const L=()=>{if(s.currentTime>S&&s.currentTime<T){H();return}try{s.pause()}catch{}d()},H=()=>{a!==void 0&&clearTimeout(a),S=s.currentTime||0;const F=(T-S)/(s.playbackRate||1);a=setTimeout(L,Math.max(F,0)*1e3)};h=()=>{s.currentTime>=T?L():s.currentTime>0&&H()},s.addEventListener("timeupdate",h),l=()=>{H(),u()},s.addEventListener("playing",l),H()};(s.readyState??0)>=1?C():(f=C,s.addEventListener("loadedmetadata",f))};this.playing=t,this.arm=M,r&&M(r);{const w=Number.isFinite(s.duration)&&s.duration>0?s.duration:e;if(w>0){let C=-1;const T=()=>{if(s.currentTime>C){u();return}try{s.pause()}catch{}d()};u=()=>{c!==void 0&&clearTimeout(c),C=s.currentTime||0;const S=Math.max(w-C,0)/(s.playbackRate||1);c=setTimeout(T,(S+dP)*1e3)},u()}}let y=!1;const E=()=>{var w;y||(y=!0,_("playing",p),p=void 0,_("timeupdate",g),g=void 0,this.el===s&&((w=this.onStarted)==null||w.call(this,t)))};p=E,g=()=>{(s.currentTime||0)>0&&E()};let A=!1;try{s.addEventListener("playing",p),s.addEventListener("timeupdate",g),A=!0}catch{}A||(p=void 0,g=void 0);try{Promise.resolve(s.play()).then(()=>{this.blocked=!1}).catch(w=>{console.warn(`narration: play() rejected ${String((w==null?void 0:w.name)??w)} for ${t}`),Pa(w)&&(this.blocked=!0),d()})}catch(w){Pa(w)&&(this.blocked=!0),d()}A||E()})}stop(){this.playGen++;const t=this.el,e=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{t==null||t.pause()}catch{}e==null||e()}}const _P="assets/sfx/",bP=.9,xP=.35,vP=.45,yP=.06,MP=["kick-soft-1","kick-soft-2","kick-soft-3"],SP=["kick-hard-1","kick-hard-2"],gl=.3,AP=6,EP=.25,Vp=.04,TP=.001,Wp=.125,Hl=400,wP=Hl/3e3,jp=25,RP=.5;function CP(i){if(!(i>gl))return 0;const t=(i-gl)/(AP-gl);return EP*Math.min(t,1)}function wu(){const i=globalThis,t=i.AudioContext??i.webkitAudioContext;return t?new t:null}function IP(i){const t=i.dir,e=i.make??(F=>new Audio(F)),n=i.now??(()=>Date.now()),s=i.random??Math.random,r=i.makeCtx??wu,o=new Map,a=new Map,c=new Map;let u=null,h=!1,l=!1,f=!1,p=!1,g=!1,_=0,m=0,d;function v(F,O){const G=o.get(F);if(G)return G;if(p)return null;let N;try{N=e(`${t}${F}.mp3`)}catch{return null}try{N.loop=O,N.volume=0}catch{}return o.set(F,N),y(F,N),N}function M(){var F;if(!(u||h)){try{u=r()}catch{u=null}if(!u){h=!0;return}try{Promise.resolve((F=u.resume)==null?void 0:F.call(u)).catch(()=>{})}catch{}}}function y(F,O){if(u)try{const G=u.createGain();G.gain.value=0,u.createMediaElementSource(O).connect(G),G.connect(u.destination),a.set(F,G);try{O.volume=1}catch{}}catch{}}function E(F){try{Promise.resolve(F.play()).catch(O=>{Pa(O)&&(f=!0)})}catch(O){Pa(O)&&(f=!0)}}function A(F){try{F==null||F.pause()}catch{}}function w(F,O,G,N=0){const V=Math.max(0,Math.min(1,G)),B=a.get(F);if(!B||!u){try{O.volume=V}catch{}return}try{const J=u.currentTime,Z=B.gain;Z.cancelScheduledValues(J),N>0?(Z.setValueAtTime(Z.value,J),Z.setTargetAtTime(V,J,N)):Z.setValueAtTime(V,J)}catch{}}function C(F,O){let G=Math.min(Math.floor(s()*O.length),O.length-1);return O.length>1&&O[G]===c.get(F)&&(G=(G+1)%O.length),c.set(F,O[G]),O[G]}function T(F,O,G=1){if(!l)return;const N=v(F,!1);if(N){w(F,N,O);try{G!==1&&(N.preservesPitch=!1,N.webkitPreservesPitch=!1),N.playbackRate=G}catch{}try{N.currentTime=0}catch{}E(N)}}function S(){d!==void 0&&(clearInterval(d),d=void 0)}function L(F){S();const O=v("ambience",!0);if(!O)return;if(F>0&&!f&&E(O),a.has("ambience")){w("ambience",O,F,wP),F<=0&&(d=setTimeout(()=>{d=void 0,A(O)},Hl));return}const G=O.volume??0,N=Math.max(1,Math.round(Hl/jp));let V=0;d=setInterval(()=>{V++;const B=G+(F-G)*Math.min(V/N,1);w("ambience",O,B),V>=N&&(S(),F<=0&&A(O))},jp)}function H(){S();for(const[F,O]of o)w(F,O,0),A(O);_=0}return{get blocked(){return f},kick(F,O=!1){if(!l)return;const G=Math.max(0,Math.min(1,F)),N=O||G>=bP,V=C(N?"hard":"soft",N?SP:MP),B=1+(s()*2-1)*yP;T(V,xP+vP*G,B)},roll(F,O){const G=n(),N=m===0,V=N?0:Math.max(G-m,0)/1e3;if(m=G,!l){_=0;return}const B=F?CP(O):0;_+=(B-_)*(N?1:1-Math.exp(-V/Vp));const J=v("roll",!0);if(!J)return;if(_<=TP){_=0,w("roll",J,0),A(J);return}const Z=a.has("roll");w("roll",J,Z?B:_,Z?Vp:0),!f&&J.paused!==!1&&E(J)},whistle(){},net(){T("net",RP)},ambience(F){g=F,l&&L(F?Wp:0)},setEnabled(F){if(F&&(f=!1,M()),F!==l){if(l=F,!F){H();return}m=0,g&&L(Wp)}},dispose(){var O,G,N;p=!0,l=!1,g=!1,H();for(const V of o.values())try{(O=V.removeAttribute)==null||O.call(V,"src"),(G=V.load)==null||G.call(V)}catch{}o.clear(),a.clear();const F=u;u=null;try{Promise.resolve((N=F==null?void 0:F.close)==null?void 0:N.call(F)).catch(()=>{})}catch{}}}}const Xp="assets/music/",PP=.3,LP=.42;function DP(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function FP(i,t){return i.length?i[DP(t)%i.length]:null}function qp(i,t){return/\.(mp3|m4a)$/.test(t)?`${i}${t}`:`${i}${t}.mp3`}async function NP(i){try{const t=await fetch(`${i}index.json`);if(!t.ok)return[];const e=await t.json();return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function UP(i){const t=i.make??(A=>new Audio(A)),e=i.makeCtx??wu;let n=null,s=null,r="",o=PP,a=!1,c=!1,u=!1,h=null,l=!1,f=null,p=null;const g=()=>o*(a?LP:1);function _(){const A=g();if(f&&h)try{const w=h.currentTime;f.gain.cancelScheduledValues(w),f.gain.setValueAtTime(A,w);return}catch{}if(n)try{n.volume=A}catch{}}function m(){var A;if(!h&&!l){try{h=e()}catch{h=null}if(!h){l=!0;return}}try{Promise.resolve((A=h==null?void 0:h.resume)==null?void 0:A.call(h)).catch(()=>{})}catch{}}function d(A){if(m(),!!h)try{const w=h.createGain();w.gain.value=g(),p=h.createMediaElementSource(A),p.connect(w),w.connect(h.destination),f=w;try{A.volume=1}catch{}}catch{}}function v(){var w,C;const A=n;n=null;try{p==null||p.disconnect()}catch{}try{f==null||f.disconnect()}catch{}if(p=null,f=null,!!A){try{A.pause()}catch{}try{(w=A.removeAttribute)==null||w.call(A,"src"),(C=A.load)==null||C.call(A)}catch{}}}function M(){var w;if(!n)return;const A=s?qp(i.dir,s):zl;if(r!==A){r=A;try{n.src=A}catch{}try{(w=n.load)==null||w.call(n)}catch{}}}function y(A=!1){if(!(n||u)&&!(!s&&!A)){r=s?qp(i.dir,s):zl;try{n=t(r)}catch{n=null}if(n){try{n.loop=!0,n.preload="auto"}catch{}d(n)}}}function E(){if(!(!s||u)&&(y(),!!n)){_();try{Promise.resolve(n.play()).catch(()=>{})}catch{}}}return{unlock(){if(u)return;m(),y(!0);const A=n;if(A)try{Promise.resolve(A.play()).then(()=>{if(!c)try{A.pause(),A.currentTime=0}catch{}}).catch(()=>{})}catch{}},pick(A,w){const C=w||FP(i.tracks,A);C!==s&&(s=C,n?M():y(),c&&E())},set(A){if(c=A&&!u,c)E();else try{n==null||n.pause()}catch{}},restart(){if(!u){if(c=!0,n)try{n.currentTime=0}catch{}E()}},gain(A){Number.isFinite(A)&&(o=Math.max(0,Math.min(1,A)),_())},duck(A){A!==a&&(a=A,_())},dispose(){var w;u=!0,c=!1,v();const A=h;h=null;try{Promise.resolve((w=A==null?void 0:A.close)==null?void 0:w.call(A)).catch(()=>{})}catch{}}}}function kP(i=window,t={createStage:Ua,runDrill:n0}){var yn,Un,qn;const e=i.document,n=t.warm??new NA(void 0,OA()),s=t.narrator??new gP;let r=null;s.onStarted=ht=>r==null?void 0:r(ht);const o=()=>{var ht;return((ht=t.sfx)==null?void 0:ht.call(t))??IP({dir:Tn(_P)})};let a=o(),c=!1,u=!1;const h=ht=>{c=ht,a.setEnabled(ht),S()};let l=null,f=!1,p,g="",_,m=!1,d=0,v=null,M=!1;const y=ht=>{var Pt;try{Promise.resolve((Pt=ht==null?void 0:ht.resume)==null?void 0:Pt.call(ht)).catch(()=>{})}catch{}},E=()=>{if(!v&&!M){try{v=(t.makeCtx??wu)()}catch{v=null}if(!v)return M=!0,null}return y(v),v},A=()=>{v&&y(v)},w=()=>{var Pt;const ht=v;v=null,M=!1;try{Promise.resolve((Pt=ht==null?void 0:ht.close)==null?void 0:Pt.call(ht)).catch(()=>{})}catch{}};let C=!1;const T=()=>f&&F&&Lt.playing&&be();function S(){l==null||l.set(T())}function L(){T()?l==null||l.restart():S()}function H(){if(l||m||!f)return;m=!0;const ht=++d;(t.musicIndex??(()=>NP(Tn(Xp))))().then(Pt=>{var te;if(!(ht!==d||l)){if(!Pt.length){m=!1;return}l=((te=t.music)==null?void 0:te.call(t,Pt))??UP({dir:Tn(Xp),tracks:Pt,makeCtx:E}),J&&l.unlock(),p!==void 0&&l.gain(p),l.duck(C),g&&l.pick(g,_),S()}}).catch(()=>{m=!1})}let F=!1,O=!1;function G(){return F?!1:(F=!0,N(),a.ambience(!0),L(),!0)}function N(){O||!c||(O=!0,a.whistle())}function V(){F=!1,a.ambience(!1),a.roll(!1,0),S()}const B=()=>h(se());(yn=e==null?void 0:e.addEventListener)==null||yn.call(e,"visibilitychange",B);let J=!1,Z=null;function lt(ht){var Pt;if(!ht){try{(Pt=Z==null?void 0:Z.remove)==null||Pt.call(Z)}catch{}Z=null;return}if(!(Z||J||!(e!=null&&e.createElement)||!e.body))try{const te=e.createElement("div");te.textContent="Tap for sound",te.setAttribute("style",'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9;pointer-events:none;padding:12px 20px;border-radius:999px;background:#C8F323;color:#0B0F10;font:700 15px/1 -apple-system,"Helvetica Neue",Arial,sans-serif;white-space:nowrap;'),e.body.appendChild(te),Z=te}catch{}}function St(){var ht,Pt;if(!J){J=!0;try{(ht=e==null?void 0:e.removeEventListener)==null||ht.call(e,"pointerdown",St,!0)}catch{}try{(Pt=e==null?void 0:e.removeEventListener)==null||Pt.call(e,"touchend",St,!0)}catch{}s.unlock(),A(),l==null||l.unlock(),lt(!1),jt=!1,h(se()),F&&N(),qt&&(q(Lt.narration),j!=null&&j.script.length&&s.prefetchAll(j.script.filter(te=>{var ve;return!Dt.has(te)&&te!==((ve=j==null?void 0:j.hook)==null?void 0:ve.clip)}))),xe([Qt()]),Yt()}}(Un=e==null?void 0:e.addEventListener)==null||Un.call(e,"pointerdown",St,!0),(qn=e==null?void 0:e.addEventListener)==null||qn.call(e,"touchend",St,!0);let kt=null;const rt=()=>kt??(kt=(t.audioIndex??aP)(s.dir)),_t=()=>{let ht;return Promise.race([rt().catch(()=>({})),new Promise(Pt=>{ht=setTimeout(()=>Pt({}),mP*1e3)})]).then(Pt=>(ht!==void 0&&clearTimeout(ht),Pt))},ot=ht=>{ht===void 0||ht===s.dir||(s.setDir(ht),kt=null)};let j=null,bt=[];const It=ht=>{var Pt;return((Pt=Lt.narration[ht]??bt[ht])==null?void 0:Pt.text)??null};let Dt=new Set,qt=!0,jt=!1,ce=[];const X=()=>qt&&!s.blocked,be=()=>X()&&!(e!=null&&e.hidden),se=()=>be()&&u,Qt=()=>({type:"audio",state:qt?s.blocked||a.blocked?"blocked":"playing":"muted",hasTake:j?j.hasAudio:!0}),Ot=()=>X()&&(j==null?void 0:j.hasAudio)===!0,me=ht=>{var Pt,te;return Ot()&&(ht<0||((Pt=j==null?void 0:j.lines[ht])==null?void 0:Pt.clip)!=null||((te=j==null?void 0:j.lines[ht])==null?void 0:te.at)!==void 0)},wt=()=>((j==null?void 0:j.lines)??[]).reduce((ht,Pt)=>Pt.clip!==null||Pt.at!==void 0?Pt.index:ht,-1),D=()=>((j==null?void 0:j.lines)??[]).reduce((ht,Pt)=>Pt.clip!==null||Pt.at!==void 0?ht+Pt.hold:ht,0)*Qi,R=(ht,Pt)=>j!=null&&j.take?hP(ht,ht.index===wt(),s.trim(Pt)):Hp(ht.hold,Pt,s.trim(Pt));function q(ht){if(j)for(const Pt of j.lines){const te=ht[Pt.index];te&&(te.hold=0)}}function st(){!s.blocked||jt||(jt=!0,h(!1),q(Lt.narration),qt&&lt(!0),xe([{type:"audio",state:"blocked"}]))}let vt=Promise.resolve(),tt=!1,Ft=0,At=null,Nt=null,fe=!1;s.onTrim=ht=>{if(!tt||ht!==At)return;const Pt=s.remaining(ht);Pt!==void 0&&(Ft=performance.now()+Pt*1e3,fe&&Nt!==null&&xe([{type:"cue",index:-1,text:Nt,hold:Math.max(Pt,du)}]))};let Rt=0,Ht=!1,Kt=[];const Yt=()=>{const ht=Kt;Kt=[];for(const Pt of ht)Pt()},Vt=(ht,Pt)=>new Promise(te=>{const ve=()=>{ht!==Lt.seq?te(!1):Pt()?te(!0):Kt.push(ve)};ve()});async function ge(ht){var te;const Pt=(j==null?void 0:j.queue)??[];for(;ht===Lt.seq&&Rt<Pt.length;){const ve=Pt[Rt],He=ve.clip;if(!He||Dt.has(He)){Rt++;continue}if(!X()){const $=!qt;if(!await Vt(ht,X))return;if($){const b=Pt.findIndex(P=>P.index===Lt.cue);b>Rt&&(Rt=b)}continue}Dt.add(He);const Qe=j!=null&&j.take?((te=j.lines[Lt.cue])==null?void 0:te.at)??0:0,Ct=(Qe>0?j==null?void 0:j.lines[Lt.cue]:void 0)??ve;xe([{type:"cue",index:Ct.index,text:It(Ct.index),hold:R(Ct,He)}]);const I=((j==null?void 0:j.lines)??[]).filter($=>$.at!==void 0&&$.at>Qe&&$.index>Ct.index);let x=[];const nt=r=$=>{$!==He||ht!==Lt.seq||(r=null,x=I.map(b=>setTimeout(()=>{ht!==Lt.seq||!X()||Ht||xe([{type:"cue",index:b.index,text:It(b.index),hold:R(b,He)}])},(b.at-Qe)*1e3)))};await s.play(He,j!=null&&j.take?D():ve.hold*Qi,Qe),r===nt&&(r=null);for(const $ of x)clearTimeout($);if(ht!==Lt.seq)return;if(s.blocked){Dt.delete(He),st();continue}if(j!=null&&j.take&&!qt){Dt.delete(He);continue}st(),Rt++}ht===Lt.seq&&Pt.length>0&&Rt>=Pt.length&&(Ht=!0,xe([{type:"cue",index:-1,text:null}]))}let Lt=zA,Et=null,Y=null,Ut=ka,ut=null,yt=Promise.resolve(),Bt=null,Gt={},ne=0;function xe(ht){for(const Pt of ht)Pt.type==="cue"&&(C=Pt.index>=0,l==null||l.duck(C));if(Bt)for(const Pt of ht)Bt.source.postMessage(Pt,{targetOrigin:Bt.origin==="null"||!Bt.origin?"*":Bt.origin})}function Fe(ht,Pt=!1){Lt=ht.state;for(const te of ht.effects)Ae(te);xe(Pt?ht.out.filter(te=>!(te.type==="cue"&&me(te.index))):ht.out)}function Ae(ht){var Pt;switch(ht.kind){case"dispose":{s.stop(),s.newGeneration(),s.closeCtx(),V(),tt=!1,Yt();const te=performance.now();Et==null||Et.dispose(),Et=null,Y==null||Y.dispose(),Y=null,ne=performance.now()-te,Lt.phase==="idle"&&(ut==null||ut.dispose(),ut=null,h(!1),a.dispose(),a=o(),l==null||l.dispose(),l=null,m=!1,d++,w(),(Pt=e==null?void 0:e.removeEventListener)==null||Pt.call(e,"visibilitychange",B));return}case"unload":{s.stop(),s.newGeneration(),V(),h(!1),tt=!1,Yt(),Et==null||Et.dispose(),Et=null,Y==null||Y.dispose(),Y=null;return}case"load":{s.stop(),s.newGeneration(),s.blocked=!1,j=null,bt=[],Dt=new Set,Rt=0,tt=!1,At=null,Nt=null,fe=!1,Ht=!1,F=!1,O=!1,g="key"in ht.source?ht.source.key:String(ht.source.json.key??""),l?l.pick(g,_):H(),h(se()),Yt(),Y==null||Y.dispose(),Y=null,ot(ht.narrationBase),vt=ln(ht.seq,ht.source),yt=yt.catch(()=>{}).then(()=>Nn(ht.seq,ht.source,ht.loop,ht.kit,ht.squad));return}case"preview":{s.stop(),s.newGeneration(),V(),h(!1),tt=!1,Yt(),Et==null||Et.dispose(),Et=null,Ut=ht.framing,yt=yt.catch(()=>{}).then(()=>ai(ht.seq,ht.kit,ht.squad));return}case"setKit":Y==null||Y.setKit(ht.kit).catch(()=>{});return;case"setFraming":Ut=ht.framing,Y==null||Y.setFraming(ht.framing);return;case"play":Et==null||Et.timeline.play(),Et==null||Et.stage.rule.play(),G()||S();return;case"pause":Et==null||Et.timeline.pause(),Et==null||Et.stage.rule.pause(),S();return;case"seek":Et==null||Et.timeline.seek(ht.t),Et==null||Et.stage.rule.wake();return;case"setSpeed":Et==null||Et.timeline.setSpeed(ht.x);return;case"setOverlays":Et==null||Et.overlays.set(ht.flags),Et==null||Et.stage.rule.wake();return;case"setCamera":Et==null||Et.setCamera(ht.elev,ht.az);return;case"setFollow":Et==null||Et.setFollow(ht.follow);return;case"hold":ht.on?(Et==null||Et.timeline.pause(),Et==null||Et.stage.rule.play()):Lt.playing?(Et==null||Et.timeline.play(),Et==null||Et.stage.rule.play(),G()):Et==null||Et.stage.rule.pause();return;case"warm":{const te=ht.keys;ce=te.slice(0,3);const ve=Lt.seq;yt.catch(()=>{}).then(()=>n.warm(te)).then(()=>un(ce,ve)).catch(()=>{});return}case"setAudio":{qt=ht.enabled,ot(ht.narrationBase),u=ht.sfx??!1,f=ht.enabled&&(ht.music??!0),ht.musicGain!==void 0&&(p=ht.musicGain,l==null||l.gain(ht.musicGain)),ht.track!==_&&(_=ht.track,g&&(l==null||l.pick(g,_))),f&&(E(),H()),qt?(s.blocked=!1,jt=!1,Lt.holdUntilMs!==null&&Lt.holdUntilMs!==xa&&(Lt={...Lt,holdUntilMs:null},Ae({kind:"hold",on:!1})),j!=null&&j.script.length&&s.prefetchAll(j.script.filter(te=>{var ve;return!Dt.has(te)&&te!==((ve=j==null?void 0:j.hook)==null?void 0:ve.clip)})),ce.length&&un(ce,Lt.seq)):(s.stop(),s.newGeneration(),lt(!1)),h(se()),F&&N(),q(Lt.narration),xe([Qt()]),!qt&&Lt.phase==="ready"&&!(fe&&tt)&&xe([mu(Lt.narration,Lt.cue)]),qt&&Lt.phase==="ready"&&Ht&&xe([{type:"cue",index:-1,text:null}]),Yt();return}case"stats":xe([{type:"statsReply",frames:(Et==null?void 0:Et.stage.frames())??0,t:(Et==null?void 0:Et.timeline.t)??0,playing:Lt.playing,phases:{...Gt},warm:n.keys().length}]);return}}async function ln(ht,Pt){if(!("key"in Pt))return;const te=`${Pt.key}-hook`,ve=await rt();if(ht!==Lt.seq||!(ve[te]>0)||!X())return;Dt.add(te),tt=!0,At=te;const He=s.trim(te);Ft=performance.now()+Hp(ve[te]/Qi,te,He)*1e3,await s.play(te,ve[te]),tt=!1,st(),ht===Lt.seq&&Fe(us(Lt,{kind:"hookEnded"}))}async function un(ht,Pt){if(!qt)return;const te=await rt();if(Pt!==Lt.seq)return;const ve=[];for(const He of ht)te[He]>0&&ve.push(He);await s.prefetchAll(ve)}async function ai(ht,Pt,te){let ve;const He=Ut;try{ut??(ut=t.createStage(i.document.body)),ut.remeasure(),ve=await(t.runPreview??nP)(i.document.body,Pt,{stage:ut,embed:!0,framing:He,squad:te})}catch(Qe){Fe(us(Lt,{kind:"loadFailed",seq:ht,message:Qe instanceof Error?Qe.message:String(Qe)},performance.now()));return}if(ht!==Lt.seq||Lt.phase!=="loading"){ve.dispose();return}Y=ve,Ut!==He&&ve.setFraming(Ut),ve.step(0),Fe(us(Lt,{kind:"loaded",seq:ht,duration:0},performance.now()))}async function Nn(ht,Pt,te,ve,He){var z;let Qe,Ct=[];const I=performance.now();let x=I,nt=0;try{let U=null,K;if("key"in Pt?(U=await n.take(Pt.key),K=U.json):K=Pt.json,ht!==Lt.seq)return;x=performance.now(),Ct=ZA(K==null?void 0:K.narration);const it=await _t();if(ht!==Lt.seq)return;j=oP("key"in Pt?Pt.key:null,Ct,it),bt=Ct,j.hasAudio||xe([Qt()]),j.take&&ge(ht),qt&&j.script.length&&s.prefetchAll(j.script),q(Ct);const dt=ut!==null;ut??(ut=t.createStage(i.document.body)),ut.remeasure(),nt=dt?0:performance.now()-x,Qe=await t.runDrill(K,i.document.body,{loop:te,embed:!0,search:"",stage:ut,sfx:a,...ve?{kit:ve}:{},...He?{squad:He}:{},...U?{schedules:U.schedules}:{},onFrame:(Q,et)=>Fe(tE(Lt,Q,et),!0)})}catch(U){Fe(us(Lt,{kind:"loadFailed",seq:ht,message:U instanceof Error?U.message:String(U),..."key"in Pt?{key:Pt.key}:{}},performance.now()));return}if(ht!==Lt.seq||Lt.phase!=="loading"){Qe.dispose();return}Et=Qe;const $=performance.now();Et.step(0),Gt={dispose:ne,fetch:x-I+$i.clips,stage:nt,schedule:$i.schedule,build:$i.build,firstFrame:performance.now()-$,total:ne+performance.now()-I},ne=0;let b=0;if(Et.timeline.onLoop(()=>{L(),Fe(us(Lt,{kind:"looped",n:++b}))}),Et.timeline.onEnd(()=>{Et==null||Et.stage.rule.pause(),Fe(us(Lt,{kind:"ended",t:(Et==null?void 0:Et.timeline.t)??0}))}),tt&&At!==null){const U=s.remaining(At);U!==void 0&&(Ft=performance.now()+U*1e3)}const P=tt?Math.max((Ft-performance.now())/1e3,0):void 0;P!==void 0&&P>0&&Et.setPushIn(P),Nt=((z=Lt.intro)==null?void 0:z.text)??null;const k=P!==void 0&&Nt!==null;q(Ct),Fe(us(Lt,{kind:"loaded",seq:ht,duration:Et.timeline.duration,narration:Ct,voiced:Ot(),...P!==void 0?{hookHold:P}:{},..."key"in Pt?{key:Pt.key}:{}},performance.now())),fe=k,j!=null&&j.take||vt.then(()=>{ht===Lt.seq&&ge(ht)})}i.addEventListener("message",ht=>{if(ht.source===i)return;const Pt=JA(ht.data);if(Pt!==null){if(ht.source&&(Bt={source:ht.source,origin:ht.origin}),"error"in Pt){xe([{type:"error",code:Pt.code,message:Pt.error}]);return}Fe(QA(Lt,Pt,(Et==null?void 0:Et.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function OP(i,t={}){const e=t.mountEmbed??kP,n=new Set;let s=null,r=!1;const o={stages:0,mounts:0,reparents:0},a=i.doc.createElement("div");a.style.position="absolute",a.style.inset="0",a.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(a);function u(p){p.type==="hello"&&(r=!0);for(const g of[...n])try{g(p)}catch(_){console.error("tactivo3d: listener failed",_),setTimeout(()=>{throw _})}}const h={postMessage(p){queueMicrotask(()=>u(p))}},l={document:{body:a},parent:h,addEventListener(p,g){p==="message"&&(s=g)},removeEventListener(){}};let f=!1;return{mount(p,g){o.mounts++,a.parentElement!==p&&(p.appendChild(a),f&&o.reparents++),!f&&(lS((g==null?void 0:g.base)??i.base),e(l,{createStage:_=>(o.stages++,Ua(_)),runDrill:n0,...t.warm?{warm:t.warm}:{},...t.narrator?{narrator:t.narrator}:{},...t.audioIndex?{audioIndex:t.audioIndex}:{}}),f=!0)},unmount(){c.appendChild(a)},post(p){s==null||s({data:p,source:h,origin:""})},onMessage(p){return n.add(p),r&&queueMicrotask(()=>{n.has(p)&&p({type:"hello"})}),()=>{n.delete(p)}},stats:()=>({...o})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=OP({doc:document,base:new URL("./",import.meta.url).href})));
