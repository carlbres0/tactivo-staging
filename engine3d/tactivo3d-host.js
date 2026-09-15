var Hm=Object.defineProperty;var Vm=(i,t,e)=>t in i?Hm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pe=(i,t,e)=>Vm(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kl="attached",Wm="detached";const He="srgb",xn="srgb-linear",Go="linear",Be="srgb";const Ol="300 es";class os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bl=1234567;const br=Math.PI/180,ks=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Jc(i,t){return(i%t+t)%t}function jm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xm(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function qm(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function Km(i,t=1){return t-Math.abs(Jc(i,t*2)-t)}function $m(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ym(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Jm(i,t){return i+Math.random()*(t-i)}function Qm(i){return i*(.5-Math.random())}function tg(i){i!==void 0&&(Bl=i);let t=Bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function eg(i){return i*br}function ng(i){return i*ks}function ig(i){return(i&i-1)===0&&i!==0}function sg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function og(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*d,a*u);break;case"YZY":i.set(c*d,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*d,a*h,a*u);break;case"XZX":i.set(a*h,c*m,c*f,a*u);break;case"YXY":i.set(c*f,a*h,c*m,a*u);break;case"ZYZ":i.set(c*m,c*f,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ff={DEG2RAD:br,RAD2DEG:ks,generateUUID:Kn,clamp:Ee,euclideanModulo:Jc,mapLinear:jm,inverseLerp:Xm,lerp:xr,damp:qm,pingpong:Km,smoothstep:$m,smootherstep:Ym,randInt:Zm,randFloat:Jm,randFloatSpread:Qm,seededRandom:tg,degToRad:eg,radToDeg:ng,isPowerOfTwo:ig,ceilPowerOfTwo:sg,floorPowerOfTwo:rg,setQuaternionFromProperEuler:og,normalize:Ue,denormalize:jn};class oe{constructor(t=0,e=0){oe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t,e,n,s,r,o,a,c,u){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],y=s[4],x=s[7],R=s[2],M=s[5],w=s[8];return r[0]=o*_+a*v+c*R,r[3]=o*g+a*y+c*M,r[6]=o*p+a*x+c*w,r[1]=u*_+h*v+l*R,r[4]=u*g+h*y+l*M,r[7]=u*p+h*x+l*w,r[2]=d*_+f*v+m*R,r[5]=d*g+f*y+m*M,r[8]=d*p+f*x+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,d=a*c-h*r,f=u*r-o*c,m=e*l+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=l*_,t[1]=(s*u-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-u*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const pa=new ve;function Nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ag(){const i=Sr("canvas");return i.style.display="block",i}const Gl={};function Ps(i){i in Gl||(Gl[i]=!0,console.warn(i))}function cg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ug(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zl=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Be&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Be&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Go:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:t,whitePoint:n,transfer:Go,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:zl,fromXYZ:Hl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}const Le=hg();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ls;class dg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ls===void 0&&(ls=Sr("canvas")),ls.width=t.width,ls.height=t.height;const n=ls.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ls}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fg=0;class Uf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ma(s[o].image)):r.push(ma(s[o]))}else r=ma(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ma(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pg=0;class Ze extends os{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=Ze.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Kn(),this.name="",this.source=new Uf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=300;Ze.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,R=(p+1)/2,M=(h+d)/4,w=(l+_)/4,P=(m+g)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=w/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(l-_)*(l-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(l-_)/v,this.z=(d-h)/v,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this.w=Ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this.w=Ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mg extends os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends mg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class kf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gg extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(l!==_||c!==d||u!==f||h!==m){let g=1-a;const p=c*d+u*f+h*m+l*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),M=Math.atan2(R,p*v);g=Math.sin(g*M)/R,a=Math.sin(a*M)/R}const x=a*v;if(c=c*g+d*x,u=u*g+f*x,h=h*g+m*x,l=l*g+_*x,g===1-a){const R=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=R,u*=R,h*=R,l*=R}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*l+c*f-u*d,t[e+1]=c*m+h*d+u*l-a*f,t[e+2]=u*m+h*f+a*d-c*l,t[e+3]=h*m-a*l-c*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*l+u*f*m,this._y=u*f*l-d*h*m,this._z=u*h*m+d*f*l,this._w=u*h*l-d*f*m;break;case"YXZ":this._x=d*h*l+u*f*m,this._y=u*f*l-d*h*m,this._z=u*h*m-d*f*l,this._w=u*h*l+d*f*m;break;case"ZXY":this._x=d*h*l-u*f*m,this._y=u*f*l+d*h*m,this._z=u*h*m+d*f*l,this._w=u*h*l-d*f*m;break;case"ZYX":this._x=d*h*l-u*f*m,this._y=u*f*l+d*h*m,this._z=u*h*m-d*f*l,this._w=u*h*l+d*f*m;break;case"YZX":this._x=d*h*l+u*f*m,this._y=u*f*l+d*h*m,this._z=u*h*m-d*f*l,this._w=u*h*l-d*f*m;break;case"XZY":this._x=d*h*l-u*f*m,this._y=u*f*l-d*h*m,this._z=u*h*m+d*f*l,this._w=u*h*l+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+a+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(n>a&&n>l){const f=2*Math.sqrt(1+n-a-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>l){const f=2*Math.sqrt(1+a-n-l);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ee(this.x,t.x,e.x),this.y=Ee(this.y,t.y,e.y),this.z=Ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ee(this.x,t,e),this.y=Ee(this.y,t,e),this.z=Ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new N,Vl=new an;class cn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Nr.subVectors(this.max,Ys),us.subVectors(t.a,Ys),hs.subVectors(t.b,Ys),ds.subVectors(t.c,Ys),Mi.subVectors(hs,us),Si.subVectors(ds,hs),Ui.subVectors(us,ds);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ui.y,Ui.x,0];return!_a(e,us,hs,ds,Nr)||(e=[1,0,0,0,1,0,0,0,1],!_a(e,us,hs,ds,Nr))?!1:(Ur.crossVectors(Mi,Si),e=[Ur.x,Ur.y,Ur.z],_a(e,us,hs,ds,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,Fr=new cn,us=new N,hs=new N,ds=new N,Mi=new N,Si=new N,Ui=new N,Ys=new N,Nr=new N,Ur=new N,ki=new N;function _a(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),u=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const _g=new cn,Zs=new N,ba=new N;class On{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):_g.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(ba)),this.expandByPoint(Zs.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new N,xa=new N,kr=new N,Ai=new N,va=new N,Or=new N,ya=new N;class ta{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xa.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(xa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(kr),a=Ai.dot(this.direction),c=-Ai.dot(kr),u=Ai.lengthSq(),h=Math.abs(1-o*o);let l,d,f,m;if(h>0)if(l=o*c-a,d=o*a-c,m=r*h,l>=0)if(d>=-m)if(d<=m){const _=1/h;l*=_,d*=_,f=l*(l+o*d+2*a)+d*(o*l+d+2*c)+u}else d=r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;else d<=-m?(l=Math.max(0,-(-o*r+a)),d=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u):d<=m?(l=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(l=Math.max(0,-(o*r+a)),d=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u);else d=o>0?-r:r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(xa).addScaledVector(kr,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(a=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),Or.subVectors(n,t),ya.crossVectors(va,Or);let o=this.direction.dot(ya),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const c=a*this.direction.dot(Or.crossVectors(Ai,Or));if(c<0)return null;const u=a*this.direction.dot(va.cross(Ai));if(u<0||c+u>o)return null;const h=-a*Ai.dot(ya);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,c,u,h,l,d,f,m,_,g){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,d,f,m,_,g)}set(t,e,n,s,r,o,a,c,u,h,l,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=h,p[10]=l,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*l,m=a*h,_=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=f+m*u,e[5]=d-_*u,e[9]=-a*c,e[2]=_-d*u,e[6]=m+f*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*l,m=u*h,_=u*l;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*l,m=u*h,_=u*l;e[0]=d-_*a,e[4]=-o*l,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*l,m=a*h,_=a*l;e[0]=c*h,e[4]=m*u-f,e[8]=d*u+_,e[1]=c*l,e[5]=_*u+d,e[9]=f*u-m,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*u,m=a*c,_=a*u;e[0]=c*h,e[4]=_-d*l,e[8]=m*l+f,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=f*l+m,e[10]=d-_*l}else if(t.order==="XZY"){const d=o*c,f=o*u,m=a*c,_=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+_,e[5]=o*h,e[9]=f*l-m,e[2]=m*l-f,e[6]=a*h,e[10]=_*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bg,t,xg)}lookAt(t,e,n){const s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ei.crossVectors(n,Rn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ei.crossVectors(n,Rn)),Ei.normalize(),Br.crossVectors(Rn,Ei),s[0]=Ei.x,s[4]=Br.x,s[8]=Rn.x,s[1]=Ei.y,s[5]=Br.y,s[9]=Rn.y,s[2]=Ei.z,s[6]=Br.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],R=n[15],M=s[0],w=s[4],P=s[8],S=s[12],A=s[1],C=s[5],k=s[9],L=s[13],F=s[2],J=s[6],G=s[10],X=s[14],U=s[3],V=s[7],Q=s[11],nt=s[15];return r[0]=o*M+a*A+c*F+u*U,r[4]=o*w+a*C+c*J+u*V,r[8]=o*P+a*k+c*G+u*Q,r[12]=o*S+a*L+c*X+u*nt,r[1]=h*M+l*A+d*F+f*U,r[5]=h*w+l*C+d*J+f*V,r[9]=h*P+l*k+d*G+f*Q,r[13]=h*S+l*L+d*X+f*nt,r[2]=m*M+_*A+g*F+p*U,r[6]=m*w+_*C+g*J+p*V,r[10]=m*P+_*k+g*G+p*Q,r[14]=m*S+_*L+g*X+p*nt,r[3]=v*M+y*A+x*F+R*U,r[7]=v*w+y*C+x*J+R*V,r[11]=v*P+y*k+x*G+R*Q,r[15]=v*S+y*L+x*X+R*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*l-s*u*l-r*a*d+n*u*d+s*a*f-n*c*f)+_*(+e*c*f-e*u*d+r*o*d-s*o*f+s*u*h-r*c*h)+g*(+e*u*l-e*a*f-r*o*l+n*o*f+r*a*h-n*u*h)+p*(-s*a*h-e*c*l+e*a*d+s*o*l-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=l*g*u-_*d*u+_*c*f-a*g*f-l*c*p+a*d*p,y=m*d*u-h*g*u-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*u-m*l*u+m*a*f-o*_*f-h*a*p+o*l*p,R=m*l*c-h*_*c-m*a*d+o*_*d+h*a*g-o*l*g,M=e*v+n*y+s*x+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return t[0]=v*w,t[1]=(_*d*r-l*g*r-_*s*f+n*g*f+l*s*p-n*d*p)*w,t[2]=(a*g*r-_*c*r+_*s*u-n*g*u-a*s*p+n*c*p)*w,t[3]=(l*c*r-a*d*r-l*s*u+n*d*u+a*s*f-n*c*f)*w,t[4]=y*w,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*w,t[6]=(m*c*r-o*g*r-m*s*u+e*g*u+o*s*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*s*u-e*d*u-o*s*f+e*c*f)*w,t[8]=x*w,t[9]=(m*l*r-h*_*r-m*n*f+e*_*f+h*n*p-e*l*p)*w,t[10]=(o*_*r-m*a*r+m*n*u-e*_*u-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*f-e*a*f)*w,t[12]=R*w,t[13]=(h*_*s-m*l*s+m*n*d-e*_*d-h*n*g+e*l*g)*w,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*w,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,d=r*u,f=r*h,m=r*l,_=o*h,g=o*l,p=a*l,v=c*u,y=c*h,x=c*l,R=n.x,M=n.y,w=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+x)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+p))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(m+y)*w,s[9]=(g-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=fs.set(s[0],s[1],s[2]).length();const o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const u=1/r,h=1/o,l=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=l,zn.elements[9]*=l,zn.elements[10]*=l,e.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===2e3)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),d=(e+t)*u,f=(n+s)*h;let m,_;if(a===2e3)m=(o+r)*l,_=-2*l;else if(a===2001)m=r*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new N,zn=new _e,bg=new N(0,0,0),xg=new N(1,1,1),Ei=new N,Br=new N,Rn=new N,Wl=new _e,jl=new an;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Of{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vg=0;const Xl=new N,ps=new an,ci=new _e,Gr=new N,Js=new N,yg=new N,Mg=new an,ql=new N(1,0,0),Kl=new N(0,1,0),$l=new N(0,0,1),Yl={type:"added"},Sg={type:"removed"},ms={type:"childadded",child:null},Ma={type:"childremoved",child:null};class Ve extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new N,e=new kn,n=new an,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new ve}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Xl.copy(t).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Js,Gr,this.up):ci.lookAt(Gr,Js,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(ci),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sg),Ma.child=t,this.dispatchEvent(Ma),Ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,yg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Mg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new N(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new N,li=new N,Sa=new N,ui=new N,gs=new N,_s=new N,Zl=new N,Aa=new N,Ea=new N,Ta=new N,wa=new Me,Ra=new Me,Ca=new Me;class Nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),li.subVectors(n,e),Sa.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(li),c=Hn.dot(Sa),u=li.dot(li),h=li.dot(Sa),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const d=1/l,f=(u*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return wa.setScalar(0),Ra.setScalar(0),Ca.setScalar(0),wa.fromBufferAttribute(t,e),Ra.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wa,r.x),o.addScaledVector(Ra,r.y),o.addScaledVector(Ca,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),li.subVectors(t,e),Hn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),_s.subVectors(r,n),Aa.subVectors(t,n);const c=gs.dot(Aa),u=_s.dot(Aa);if(c<=0&&u<=0)return e.copy(n);Ea.subVectors(t,s);const h=gs.dot(Ea),l=_s.dot(Ea);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(gs,o);Ta.subVectors(t,r);const f=gs.dot(Ta),m=_s.dot(Ta);if(m>=0&&f<=m)return e.copy(r);const _=f*u-c*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),e.copy(n).addScaledVector(_s,a);const g=h*m-f*l;if(g<=0&&l-h>=0&&f-m>=0)return Zl.subVectors(r,s),a=(l-h)/(l-h+(f-m)),e.copy(s).addScaledVector(Zl,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ue{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Jc(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ia(o,r,t+1/3),this.g=Ia(o,r,t),this.b=Ia(o,r,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Bf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Le.fromWorkingColorSpace(hn.copy(this),t),Math.round(Ee(hn.r*255,0,255))*65536+Math.round(Ee(hn.g*255,0,255))*256+Math.round(Ee(hn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=He){Le.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(zr);const n=xr(Ti.h,zr.h,e),s=xr(Ti.s,zr.s,e),r=xr(Ti.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new ue;ue.NAMES=Bf;let Ag=0;class Un extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new N,Hr=new oe;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Gf extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zf extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eg=0;const Pn=new _e,Pa=new Ve,bs=new N,Cn=new cn,Qs=new cn,tn=new N;class Xe extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nf(t)?zf:Gf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Cn.min,Qs.min),Cn.expandByPoint(tn),tn.addVectors(Cn.max,Qs.max),Cn.expandByPoint(tn)):(Cn.expandByPoint(Qs.min),Cn.expandByPoint(Qs.max))}Cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)tn.fromBufferAttribute(a,u),c&&(bs.fromBufferAttribute(t,u),tn.add(bs)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new N,c[P]=new N;const u=new N,h=new N,l=new N,d=new oe,f=new oe,m=new oe,_=new N,g=new N;function p(P,S,A){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),l.fromBufferAttribute(n,A),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,A),h.sub(u),l.sub(u),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(l,-f.y).multiplyScalar(C),g.copy(l).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[A].add(_),c[P].add(g),c[S].add(g),c[A].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,S=v.length;P<S;++P){const A=v[P],C=A.start,k=A.count;for(let L=C,F=C+k;L<F;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new N,x=new N,R=new N,M=new N;function w(P){R.fromBufferAttribute(s,P),M.copy(R);const S=a[P];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(M,S);const C=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,S=v.length;P<S;++P){const A=v[P],C=A.start,k=A.count;for(let L=C,F=C+k;L<F;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,u=new N,h=new N,l=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,d=new u.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=u[f++]}return new De(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const d=u[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,f=l.length;d<f;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new _e,Oi=new ta,Vr=new On,Ql=new N,Wr=new N,jr=new N,Xr=new N,La=new N,qr=new N,tu=new N,Kr=new N;class we extends Ve{constructor(t=new Xe,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(La.fromBufferAttribute(l,t),o?qr.addScaledVector(La,h):qr.addScaledVector(La.sub(e),h))}e.add(qr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Vr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Vr,Ql)===null||Oi.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){const M=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);s=$r(this,p,t,n,u,h,l,M,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=$r(this,o,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){const M=x,w=x+1,P=x+2;s=$r(this,p,t,n,u,h,l,M,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;s=$r(this,o,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Tg(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Kr);return u<e.near||u>e.far?null:{distance:u,point:Kr.clone(),object:i}}function $r(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,Wr),i.getVertexPosition(c,jr),i.getVertexPosition(u,Xr);const h=Tg(i,t,e,n,Wr,jr,Xr,tu);if(h){const l=new N;Nn.getBarycoord(tu,Wr,jr,Xr,l),s&&(h.uv=Nn.getInterpolatedAttribute(s,a,c,u,l,new oe)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,c,u,l,new oe)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,c,u,l,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new N,materialIndex:0};Nn.getNormal(Wr,jr,Xr,d.normal),h.face=d,h.barycoord=l}return h}class bi extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(l,2));function m(_,g,p,v,y,x,R,M,w,P,S){const A=x/w,C=R/P,k=x/2,L=R/2,F=M/2,J=w+1,G=P+1;let X=0,U=0;const V=new N;for(let Q=0;Q<G;Q++){const nt=Q*C-L;for(let ut=0;ut<J;ut++){const Dt=ut*A-k;V[_]=Dt*v,V[g]=nt*y,V[p]=F,u.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[p]=M>0?1:-1,h.push(V.x,V.y,V.z),l.push(ut/w),l.push(1-Q/P),X+=1}}for(let Q=0;Q<P;Q++)for(let nt=0;nt<w;nt++){const ut=d+nt+J*Q,Dt=d+nt+J*(Q+1),it=d+(nt+1)+J*(Q+1),ct=d+(nt+1)+J*Q;c.push(ut,Dt,ct),c.push(Dt,it,ct),U+=6}a.addGroup(f,U,S),f+=U,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Os(i[e]);for(const s in n)t[s]=n[s]}return t}function wg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Qc={clone:Os,merge:mn};var Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=wg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new N,eu=new oe,nu=new oe;class _n extends Vf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,eu,nu),e.subVectors(nu,eu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,vs=1;class Ig extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(xs,vs,t,e);s.layers=this.layers,this.add(s);const r=new _n(xs,vs,t,e);r.layers=this.layers,this.add(r);const o=new _n(xs,vs,t,e);o.layers=this.layers,this.add(o);const a=new _n(xs,vs,t,e);a.layers=this.layers,this.add(a);const c=new _n(xs,vs,t,e);c.layers=this.layers,this.add(c);const u=new _n(xs,vs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Wf extends Ze{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pg extends ss{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new we(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Ig(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=e,this.far=n}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lg extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class el{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new N;class Xn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class jf extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const tr=new N,Ms=new N,Ss=new N,As=new oe,er=new oe,Xf=new _e,Yr=new N,nr=new N,Zr=new N,iu=new oe,Da=new oe,su=new oe;class Dg extends Ve{constructor(t=new jf){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new el(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Xn(n,3,0,!1)),ys.setAttribute("uv",new Xn(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new oe(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),Xf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Jr(Yr.set(-.5,-.5,0),Ss,o,Ms,s,r),Jr(nr.set(.5,-.5,0),Ss,o,Ms,s,r),Jr(Zr.set(.5,.5,0),Ss,o,Ms,s,r),iu.set(0,0),Da.set(1,0),su.set(1,1);let a=t.ray.intersectTriangle(Yr,nr,Zr,!1,tr);if(a===null&&(Jr(nr.set(-.5,.5,0),Ss,o,Ms,s,r),Da.set(0,1),a=t.ray.intersectTriangle(Yr,Zr,nr,!1,tr),a===null))return;const c=t.ray.origin.distanceTo(tr);c<t.near||c>t.far||e.push({distance:c,point:tr.clone(),uv:Nn.getInterpolation(tr,Yr,nr,Zr,iu,Da,su,new oe),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,s,r){As.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(er.x=r*As.x-s*As.y,er.y=s*As.x+r*As.y):er.copy(As),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(Xf)}const ru=new N,ou=new Me,au=new Me,Fg=new N,cu=new _e,Qr=new N,Fa=new On,lu=new _e,Na=new ta;class Ng extends we{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kl,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(s),t.ray.intersectsSphere(Fa)!==!1&&(lu.copy(s).invert(),Na.copy(t.ray).applyMatrix4(lu),!(this.boundingBox!==null&&Na.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Na)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===kl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;ou.fromBufferAttribute(s.attributes.skinIndex,t),au.fromBufferAttribute(s.attributes.skinWeight,t),ru.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=au.getComponent(r);if(o!==0){const a=ou.getComponent(r);cu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Fg.copy(ru).applyMatrix4(cu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class qf extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kf extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,d){super(null,o,a,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uu=new _e,Ug=new _e;class nl{constructor(t=[],e=[]){this.uuid=Kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new _e;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Ug;uu.multiplyMatrices(a,e[r]),uu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new nl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Kf(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new qf),this.bones.push(o),this.boneInverses.push(new _e().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Rc extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Es=new _e,hu=new _e,to=[],du=new cn,kg=new _e,ir=new we,sr=new On;class Og extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),du.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(du)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),sr.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),hu.multiplyMatrices(n,Es),ir.matrixWorld=hu,ir.raycast(t,to);for(let o=0,a=to.length;o<a;o++){const c=to[o];c.instanceId=r,c.object=this,e.push(c)}to.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kf(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ua=new N,Bg=new N,Gg=new ve;class Xi{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ua.subVectors(n,e).cross(Bg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gg.getNormalMatrix(t),s=this.coplanarPoint(Ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new On,eo=new N;class il{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-u,g-f,x-p).normalize(),n[1].setComponents(c+r,d+u,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+v).normalize(),n[3].setComponents(c-o,d-h,g-m,x-v).normalize(),n[4].setComponents(c-a,d-l,g-_,x-y).normalize(),e===2e3)n[5].setComponents(c+a,d+l,g+_,x+y).normalize();else if(e===2001)n[5].setComponents(a,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $f extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zo=new N,Ho=new N,fu=new _e,rr=new ta,no=new On,ka=new N,pu=new N;class sl extends Ve{constructor(t=new Xe,e=new $f){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zo.fromBufferAttribute(e,s-1),Ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zo.distanceTo(Ho);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;fu.copy(s).invert(),rr.copy(t.ray).applyMatrix4(fu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=u){const p=h.getX(_),v=h.getX(_+1),y=io(this,t,rr,c,p,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=io(this,t,rr,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=u){const p=io(this,t,rr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=io(this,t,rr,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function io(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(zo.fromBufferAttribute(o,s),Ho.fromBufferAttribute(o,r),e.distanceSqToSegment(zo,Ho,ka,pu)>n)return;ka.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ka);if(!(c<t.near||c>t.far))return{distance:c,point:pu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const mu=new N,gu=new N;class zg extends sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mu.fromBufferAttribute(e,s),gu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mu.distanceTo(gu);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hg extends sl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class rl extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _u=new _e,Cc=new ta,so=new On,ro=new N;class Yf extends Ve{constructor(t=new Xe,e=new rl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;_u.copy(s).invert(),Cc.copy(t.ray).applyMatrix4(_u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=u.getX(m);ro.fromBufferAttribute(l,g),bu(ro,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++)ro.fromBufferAttribute(l,m),bu(ro,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bu(i,t,e,n,s,r,o){const a=Cc.distanceSqToPoint(i);if(a<e){const c=new N;Cc.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fn extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}class wn extends Ze{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zf extends Ze{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ol extends Xe{constructor(t=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ee(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new N,d=new oe,f=new N,m=new N,_=new N;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*s,x=Math.sin(y),R=Math.cos(y);for(let M=0;M<=t.length-1;M++){l.x=t[M].x*x,l.y=t[M].y,l.z=t[M].x*R,o.push(l.x,l.y,l.z),d.x=v/e,d.y=M/(t.length-1),a.push(d.x,d.y);const w=c[3*M+0]*x,P=c[3*M+1],S=c[3*M+0]*R;u.push(w,P,S)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,R=x,M=x+t.length,w=x+t.length+1,P=x+1;r.push(R,M,P),r.push(w,P,M)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.points,t.segments,t.phiStart,t.phiLength)}}class ea extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new N,h=new oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const f=n+l/e*s;u.x=t*Math.cos(f),u.y=t*Math.sin(f),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ar extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function v(){const x=new N,R=new N;let M=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const S=[],A=P/r,C=A*(e-t)+t;for(let k=0;k<=s;k++){const L=k/s,F=L*c+a,J=Math.sin(F),G=Math.cos(F);R.x=C*J,R.y=-A*n+g,R.z=C*G,l.push(R.x,R.y,R.z),x.set(J,w,G).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-A),S.push(m++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const A=_[S][P],C=_[S+1][P],k=_[S+1][P+1],L=_[S][P+1];(t>0||S!==0)&&(h.push(A,C,L),M+=3),(e>0||S!==r-1)&&(h.push(C,k,L),M+=3)}u.addGroup(p,M,0),p+=M}function y(x){const R=m,M=new oe,w=new N;let P=0;const S=x===!0?t:e,A=x===!0?1:-1;for(let k=1;k<=s;k++)l.push(0,g*A,0),d.push(0,A,0),f.push(.5,.5),m++;const C=m;for(let k=0;k<=s;k++){const F=k/s*c+a,J=Math.cos(F),G=Math.sin(F);w.x=S*G,w.y=g*A,w.z=S*J,l.push(w.x,w.y,w.z),d.push(0,A,0),M.x=J*.5+.5,M.y=G*.5*A+.5,f.push(M.x,M.y),m++}for(let k=0;k<s;k++){const L=R+k,F=C+k;x===!0?h.push(F,F+1,L):h.push(F+1,F,L),P+=3}u.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $n extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<u;y++){const x=y*l-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+u*p,x=v+u*(p+1),R=v+1+u*(p+1),M=v+1+u*p;f.push(y,x,M),f.push(x,R,M)}this.setIndex(f),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class na extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,f=new N,m=new oe;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=l*Math.cos(p),f.y=l*Math.sin(p),c.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}l+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,x=v+n+1,R=v+n+2,M=v+1;a.push(y,x,M),a.push(x,R,M)}}this.setIndex(a),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vg extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new N,r=new N;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,f=l.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),v=a.getX(m+(g+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),xu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),xu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new je(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function xu(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class vi extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ni extends vi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Er extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wg extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jg extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ji(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qf(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Ic(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function al(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function Xg(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let f=0;f<u.times.length;++f){const m=u.times[f]*s;if(!(m<e||m>=n)){l.push(u.times[f]);for(let _=0;_<h;++_)d.push(u.values[f*h+_])}}l.length!==0&&(u.times=Ji(l,u.times.constructor),u.values=Ji(d,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function qg(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const f=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=h,v=l-h;_=a.values.slice(p,v)}else if(r>=a.times[m]){const p=m*l+h,v=p+l-h;_=a.values.slice(p,v)}else{const p=a.createInterpolant(),v=h,y=l-h;p.evaluate(r),_=p.resultBuffer.slice(v,y)}c==="quaternion"&&new an().fromArray(_).normalize().conjugate().toArray(_);const g=u.times.length;for(let p=0;p<g;++p){const v=p*f+d;if(c==="quaternion")an.multiplyQuaternionsFlat(u.values,v,_,0,u.values,v);else{const y=f-d*2;for(let x=0;x<y;++x)u.values[v+x]-=_[x]}}}return i.blendMode=2501,i}const Kg={convertArray:Ji,isTypedArray:Jf,getKeyframeOrder:Qf,sortedArray:Ic,flattenJSON:al,subclip:Xg,makeClipAdditive:qg};class Ir{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $g extends Ir{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+v*o[u+R]+y*o[c+R]+x*o[l+R];return r}}class tp extends Ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*l+o[c+d]*h;return r}}class Yg extends Ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ii{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(e,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Yg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $g(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Jf(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,d=l-n,f=l+n;for(let m=0;m!==n;++m){const _=e[l+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[l+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=2301;class Hs extends ii{constructor(t,e,n){super(t,e,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=2300;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class ep extends ii{}ep.prototype.ValueTypeName="color";class Bs extends ii{}Bs.prototype.ValueTypeName="number";class Zg extends Ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)an.slerpFlat(r,0,o,u-a,o,u,c);return r}}class Gs extends ii{InterpolantFactoryMethodLinear(t){return new Zg(this.times,this.values,this.getValueSize(),t)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends ii{constructor(t,e,n){super(t,e,n)}}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=2300;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends ii{}zs.prototype.ValueTypeName="vector";class Pc{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Qg(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ii.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Qf(c);c=Ic(c,1,h),u=Ic(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Bs(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,f,m,_){if(f.length!==0){const g=[],p=[];al(f,g,p,m),g.length!==0&&_.push(new l(d,g,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Bs(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+e[l].name+"]";n(zs,f+".position",d,"pos",s),n(Gs,f+".quaternion",d,"rot",s),n(zs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Jg(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return ep;case"quaternion":return Gs;case"bool":case"boolean":return Hs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Qg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Jg(i.type);if(i.times===void 0){const e=[],n=[];al(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Li={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class t0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const f=u[l],m=u[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const e0=new t0;class Ws{constructor(t){this.manager=t!==void 0?t:e0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class n0 extends Error{constructor(t,e){super(t),this.response=e}}class np extends Ws{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Li.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(hi[t]!==void 0){hi[t].push({onLoad:e,onProgress:n,onError:s});return}hi[t]=[],hi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=hi[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){l.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,w=h.length;M<w;M++){const P=h[M];P.onProgress&&P.onProgress(R)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new n0(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(m=>f.decode(m))}}}).then(u=>{Li.add(t,u);const h=hi[t];delete hi[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=hi[t];if(h===void 0)throw this.manager.itemError(t),u;delete hi[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class i0 extends Ws{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Li.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Sr("img");function c(){h(),Li.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class cl extends Ws{constructor(t){super(t)}load(t,e,n,s){const r=new Ze,o=new i0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Pr extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class s0 extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Oa=new _e,vu=new N,yu=new N;class ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yu),e.updateMatrixWorld(),Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class r0 extends ll{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class o0 extends Pr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new r0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Mu=new _e,or=new N,Ba=new N;class a0 extends ll{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mu)}}class c0 extends Pr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new a0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ul extends Vf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class l0 extends ll{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new l0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class u0 extends Pr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class vr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class h0 extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class d0 extends Ws{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Li.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Li.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),Li.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Li.add(t,c),r.manager.itemStart(t)}}class f0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class p0{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){an.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(t,o,t,e,t,n),an.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const dl="\\[\\]\\.:\\/",m0=new RegExp("["+dl+"]","g"),fl="[^"+dl+"]",g0="[^"+dl.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",fl),b0=/(WCOD+)?/.source.replace("WCOD",g0),x0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),v0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),y0=new RegExp("^"+_0+b0+x0+v0+"$"),M0=["material","materials","bones","map"];class S0{constructor(t,e,n){const s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Fe{constructor(t,e,n){this.path=e,this.parsedPath=n||Fe.parseTrackName(e),this.node=Fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Fe.Composite(t,e,n):new Fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m0,"")}static parseTrackName(t){const e=y0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);M0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=S0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class A0{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const E0=new Float32Array(1);class T0 extends os{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[l]=m;else{if(m=o[l],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=e&&e._propertyBindings[l].binding.parsedPath;m=new p0(Fe.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[l]=m}a[l].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new tp(new Float32Array(2),new Float32Array(2),1,E0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Pc.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new A0(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Pc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Lc extends el{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Su=new N,oo=new N;class ip{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Su.subVectors(t,this.start),oo.subVectors(this.end,this.start);const n=oo.dot(oo);let r=oo.dot(Su)/n;return e&&(r=Ee(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Au(i,t,e,n){const s=w0(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w0(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function R0(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<l.length;f++){const m=l[d],_=l[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,l[d]=_)}l.length=d+1;for(let f=0,m=l.length;f<m;f++){const _=l[f];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
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
#endif`,P0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
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
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k0=`#ifdef USE_BATCHING
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
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,B0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H0=`#ifdef USE_IRIDESCENCE
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
#endif`,V0=`#ifdef USE_BUMPMAP
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
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,J0=`#define PI 3.141592653589793
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
} // validated`,Q0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,t_=`vec3 transformedNormal = objectNormal;
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
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",o_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g_=`#ifdef USE_GRADIENTMAP
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
}`,__=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T_=`PhysicalMaterial material;
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
#endif`,w_=`struct PhysicalMaterial {
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
}`,R_=`
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W_=`#ifdef USE_MORPHTARGETS
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
#endif`,j_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z_=`#ifdef USE_NORMALMAP
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
#endif`,J_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fb=`float getShadowMask() {
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
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fb=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,kb=`#define DISTANCE
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
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`uniform float scale;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Wb=`#define LAMBERT
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
}`,jb=`#define LAMBERT
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
}`,Xb=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Kb=`#define NORMAL
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
}`,$b=`#define NORMAL
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
}`,Yb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,Jb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,tx=`#define TOON
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
}`,ex=`#define TOON
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
}`,nx=`uniform float size;
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,rx=`uniform vec3 color;
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
}`,ox=`uniform float rotation;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:C0,alphahash_pars_fragment:I0,alphamap_fragment:P0,alphamap_pars_fragment:L0,alphatest_fragment:D0,alphatest_pars_fragment:F0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:k0,batching_vertex:O0,begin_vertex:B0,beginnormal_vertex:G0,bsdfs:z0,iridescence_fragment:H0,bumpmap_pars_fragment:V0,clipping_planes_fragment:W0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:K0,color_pars_fragment:$0,color_pars_vertex:Y0,color_vertex:Z0,common:J0,cube_uv_reflection_fragment:Q0,defaultnormal_vertex:t_,displacementmap_pars_vertex:e_,displacementmap_vertex:n_,emissivemap_fragment:i_,emissivemap_pars_fragment:s_,colorspace_fragment:r_,colorspace_pars_fragment:o_,envmap_fragment:a_,envmap_common_pars_fragment:c_,envmap_pars_fragment:l_,envmap_pars_vertex:u_,envmap_physical_pars_fragment:y_,envmap_vertex:h_,fog_vertex:d_,fog_pars_vertex:f_,fog_fragment:p_,fog_pars_fragment:m_,gradientmap_pars_fragment:g_,lightmap_pars_fragment:__,lights_lambert_fragment:b_,lights_lambert_pars_fragment:x_,lights_pars_begin:v_,lights_toon_fragment:M_,lights_toon_pars_fragment:S_,lights_phong_fragment:A_,lights_phong_pars_fragment:E_,lights_physical_fragment:T_,lights_physical_pars_fragment:w_,lights_fragment_begin:R_,lights_fragment_maps:C_,lights_fragment_end:I_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:D_,logdepthbuf_vertex:F_,map_fragment:N_,map_pars_fragment:U_,map_particle_fragment:k_,map_particle_pars_fragment:O_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:G_,morphinstance_vertex:z_,morphcolor_vertex:H_,morphnormal_vertex:V_,morphtarget_pars_vertex:W_,morphtarget_vertex:j_,normal_fragment_begin:X_,normal_fragment_maps:q_,normal_pars_fragment:K_,normal_pars_vertex:$_,normal_vertex:Y_,normalmap_pars_fragment:Z_,clearcoat_normal_fragment_begin:J_,clearcoat_normal_fragment_maps:Q_,clearcoat_pars_fragment:tb,iridescence_pars_fragment:eb,opaque_fragment:nb,packing:ib,premultiplied_alpha_fragment:sb,project_vertex:rb,dithering_fragment:ob,dithering_pars_fragment:ab,roughnessmap_fragment:cb,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:hb,shadowmap_vertex:db,shadowmask_pars_fragment:fb,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:gb,skinnormal_vertex:_b,specularmap_fragment:bb,specularmap_pars_fragment:xb,tonemapping_fragment:vb,tonemapping_pars_fragment:yb,transmission_fragment:Mb,transmission_pars_fragment:Sb,uv_pars_fragment:Ab,uv_pars_vertex:Eb,uv_vertex:Tb,worldpos_vertex:wb,background_vert:Rb,background_frag:Cb,backgroundCube_vert:Ib,backgroundCube_frag:Pb,cube_vert:Lb,cube_frag:Db,depth_vert:Fb,depth_frag:Nb,distanceRGBA_vert:Ub,distanceRGBA_frag:kb,equirect_vert:Ob,equirect_frag:Bb,linedashed_vert:Gb,linedashed_frag:zb,meshbasic_vert:Hb,meshbasic_frag:Vb,meshlambert_vert:Wb,meshlambert_frag:jb,meshmatcap_vert:Xb,meshmatcap_frag:qb,meshnormal_vert:Kb,meshnormal_frag:$b,meshphong_vert:Yb,meshphong_frag:Zb,meshphysical_vert:Jb,meshphysical_frag:Qb,meshtoon_vert:tx,meshtoon_frag:ex,points_vert:nx,points_frag:ix,shadow_vert:sx,shadow_frag:rx,sprite_vert:ox,sprite_frag:ax},Gt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},En={basic:{uniforms:mn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:mn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:mn([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:mn([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:mn([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:mn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:mn([Gt.points,Gt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:mn([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:mn([Gt.common,Gt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:mn([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:mn([Gt.sprite,Gt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:mn([Gt.common,Gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:mn([Gt.lights,Gt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};En.physical={uniforms:mn([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const ao={r:0,b:0,g:0},Gi=new kn,cx=new _e;function lx(i,t,e,n,s,r,o){const a=new ue(0);let c=r===!0?0:1,u,h,l=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const R=m(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const R=m(x);R&&(R.isCubeTexture||R.mapping===306)?(h===void 0&&(h=new we(new bi(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Os(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cx.makeRotationFromEuler(Gi)),h.material.toneMapped=Le.getTransfer(R.colorSpace)!==Be,(l!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new we(new $n(2,2),new xi({name:"BackgroundMaterial",uniforms:Os(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Le.getTransfer(R.colorSpace)!==Be,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(l!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,x){y.getRGB(ao,Hf(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:v}}function ux(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(A,C,k,L,F){let J=!1;const G=l(L,k,C);r!==G&&(r=G,u(r.object)),J=f(A,L,k,F),J&&m(A,L,k,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(A,C,k,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function u(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function l(A,C,k){const L=k.wireframe===!0;let F=n[A.id];F===void 0&&(F={},n[A.id]=F);let J=F[C.id];J===void 0&&(J={},F[C.id]=J);let G=J[L];return G===void 0&&(G=d(c()),J[L]=G),G}function d(A){const C=[],k=[],L=[];for(let F=0;F<e;F++)C[F]=0,k[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:L,object:A,attributes:{},index:null}}function f(A,C,k,L){const F=r.attributes,J=C.attributes;let G=0;const X=k.getAttributes();for(const U in X)if(X[U].location>=0){const Q=F[U];let nt=J[U];if(nt===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(nt=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(nt=A.instanceColor)),Q===void 0||Q.attribute!==nt||nt&&Q.data!==nt.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function m(A,C,k,L){const F={},J=C.attributes;let G=0;const X=k.getAttributes();for(const U in X)if(X[U].location>=0){let Q=J[U];Q===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));const nt={};nt.attribute=Q,Q&&Q.data&&(nt.data=Q.data),F[U]=nt,G++}r.attributes=F,r.attributesNum=G,r.index=L}function _(){const A=r.newAttributes;for(let C=0,k=A.length;C<k;C++)A[C]=0}function g(A){p(A,0)}function p(A,C){const k=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;k[A]=1,L[A]===0&&(i.enableVertexAttribArray(A),L[A]=1),F[A]!==C&&(i.vertexAttribDivisor(A,C),F[A]=C)}function v(){const A=r.newAttributes,C=r.enabledAttributes;for(let k=0,L=C.length;k<L;k++)C[k]!==A[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function y(A,C,k,L,F,J,G){G===!0?i.vertexAttribIPointer(A,C,k,F,J):i.vertexAttribPointer(A,C,k,L,F,J)}function x(A,C,k,L){_();const F=L.attributes,J=k.getAttributes(),G=C.defaultAttributeValues;for(const X in J){const U=J[X];if(U.location>=0){let V=F[X];if(V===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(V=A.instanceColor)),V!==void 0){const Q=V.normalized,nt=V.itemSize,ut=t.get(V);if(ut===void 0)continue;const Dt=ut.buffer,it=ut.type,ct=ut.bytesPerElement,ot=it===i.INT||it===i.UNSIGNED_INT||V.gpuType===1013;if(V.isInterleavedBufferAttribute){const et=V.data,yt=et.stride,zt=V.offset;if(et.isInstancedInterleavedBuffer){for(let Qt=0;Qt<U.locationSize;Qt++)p(U.location+Qt,et.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Qt=0;Qt<U.locationSize;Qt++)g(U.location+Qt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Qt=0;Qt<U.locationSize;Qt++)y(U.location+Qt,nt/U.locationSize,it,Q,yt*ct,(zt+nt/U.locationSize*Qt)*ct,ot)}else{if(V.isInstancedBufferAttribute){for(let et=0;et<U.locationSize;et++)p(U.location+et,V.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let et=0;et<U.locationSize;et++)g(U.location+et);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let et=0;et<U.locationSize;et++)y(U.location+et,nt/U.locationSize,it,Q,nt*ct,nt/U.locationSize*et*ct,ot)}}else if(G!==void 0){const Q=G[X];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(U.location,Q);break;case 3:i.vertexAttrib3fv(U.location,Q);break;case 4:i.vertexAttrib4fv(U.location,Q);break;default:i.vertexAttrib1fv(U.location,Q)}}}}v()}function R(){P();for(const A in n){const C=n[A];for(const k in C){const L=C[k];for(const F in L)h(L[F].object),delete L[F];delete C[k]}delete n[A]}}function M(A){if(n[A.id]===void 0)return;const C=n[A.id];for(const k in C){const L=C[k];for(const F in L)h(L[F].object),delete L[F];delete C[k]}delete n[A.id]}function w(A){for(const C in n){const k=n[C];if(k[A.id]===void 0)continue;const L=k[A.id];for(const F in L)h(L[F].object),delete L[F];delete k[A.id]}}function P(){S(),o=!0,r!==s&&(r=s,u(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function hx(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let f=0;for(let m=0;m<l;m++)f+=h[m];e.update(f,n,1)}function c(u,h,l,d){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)o(u[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let m=0;for(let _=0;_<l;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function dx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==1009&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==1015&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:M}}function fx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xi,a=new ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,f){const m=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,p=i.get(l);if(!s||m===null||m.length===0||r&&!g)r?h(null):u();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let R=0;R!==y;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,f,m){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(l[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function px(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Pg(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ls=4,Eu=[.125,.215,.35,.446,.526,.582],Yi=20,Ga=new ul,Tu=new ue;let za=null,Ha=0,Va=0,Wa=!1;const qi=(1+Math.sqrt(5))/2,Ts=1/qi,wu=[new N(-qi,Ts,0),new N(qi,Ts,0),new N(-Ts,0,qi),new N(Ts,0,qi),new N(0,qi,-Ts),new N(0,qi,Ts),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ru{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ha,Va),this._renderer.xr.enabled=Wa,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:xn,depthBuffer:!1},s=Cu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mx(r)),this._blurMaterial=gx(r,t,e)}return s}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,Ga)}_sceneToCubeUV(t,e,n,s){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Tu),h.toneMapping=0,h.autoClear=!1;const f=new en({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new we(new bi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Tu),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;co(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wu[(s-r-1)%wu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new we(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Yi;g>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);const p=[];let v=0;for(let w=0;w<Yi;++w){const P=w/_,S=Math.exp(-P*P/2);p.push(S),w===0?v+=S:w<g&&(v+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[s],R=3*x*(s>y-Ls?s-y+Ls:0),M=4*(this._cubeSize-x);co(e,R,M,3*x,2*x),c.setRenderTarget(e),c.render(l,Ga)}}function mx(i){const t=[],e=[],n=[];let s=i;const r=i-Ls+1+Eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ls?c=Eu[o-i+Ls-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let M=0;M<f;M++){const w=M%3*2/3-1,P=M>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(S,_*m*M),y.set(d,g*m*M);const A=[M,M,M,M,M,M];x.set(A,p*m*M)}const R=new Xe;R.setAttribute("position",new De(v,_)),R.setAttribute("uv",new De(y,g)),R.setAttribute("faceIndex",new De(x,p)),t.push(R),s>Ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cu(i,t,e){const n=new ss(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gx(i,t,e){const n=new Float32Array(Yi),s=new N(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Iu(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Pu(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function _x(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const d=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ru(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const f=a.image;return u&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ru(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ps("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xx(i,t,e,n){const s={},r=new WeakMap;function o(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(l,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function u(l){const d=[],f=l.index,m=l.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const R=v[y+0],M=v[y+1],w=v[y+2];d.push(R,M,M,w,w,R)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const R=y+0,M=y+1,w=y+2;d.push(R,M,M,w,w,R)}}else return;const g=new(Nf(d)?zf:Gf)(d,1);g.version=_;const p=r.get(l);p&&t.remove(p),r.set(l,g)}function h(l){const d=r.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function vx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function u(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function l(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)u(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function yx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mx(i,t,e){const n=new WeakMap,s=new Me;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==l){let S=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const M=new Float32Array(x*R*4*l),w=new kf(M,x,R,l);w.type=1015,w.needsUpdate=!0;const P=y*4;for(let A=0;A<l;A++){const C=g[A],k=p[A],L=v[A],F=x*R*4*A;for(let J=0;J<C.count;J++){const G=J*P;f===!0&&(s.fromBufferAttribute(C,J),M[F+G+0]=s.x,M[F+G+1]=s.y,M[F+G+2]=s.z,M[F+G+3]=0),m===!0&&(s.fromBufferAttribute(k,J),M[F+G+4]=s.x,M[F+G+5]=s.y,M[F+G+6]=s.z,M[F+G+7]=0),_===!0&&(s.fromBufferAttribute(L,J),M[F+G+8]=s.x,M[F+G+9]=s.y,M[F+G+10]=s.z,M[F+G+11]=L.itemSize===4?s.w:1)}}d={count:l,texture:w,size:new oe(x,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sx(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const rp=new Ze,Lu=new Zf(1,1),op=new kf,ap=new gg,cp=new Wf,Du=[],Fu=[],Nu=new Float32Array(16),Uu=new Float32Array(9),ku=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=Fu[t];e===void 0&&(e=new Int32Array(t),Fu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ax(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ex(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function Tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function Rx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;ku.set(n),i.uniformMatrix2fv(this.addr,!1,ku),Qe(e,n)}}function Cx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Uu.set(n),i.uniformMatrix3fv(this.addr,!1,Uu),Qe(e,n)}}function Ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),Qe(e,n)}}function Px(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function Nx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function kx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function Bx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lu.compareFunction=515,r=Lu):r=rp,e.setTexture2D(t||r,s)}function Gx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ap,s)}function zx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cp,s)}function Hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||op,s)}function Vx(i){switch(i){case 5126:return Ax;case 35664:return Ex;case 35665:return Tx;case 35666:return wx;case 35674:return Rx;case 35675:return Cx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Fx;case 5125:return Nx;case 36294:return Ux;case 36295:return kx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Gx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Wx(i,t){i.uniform1fv(this.addr,t)}function jx(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function Xx(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function qx(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function Kx(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $x(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zx(i,t){i.uniform1iv(this.addr,t)}function Jx(i,t){i.uniform2iv(this.addr,t)}function Qx(i,t){i.uniform3iv(this.addr,t)}function tv(i,t){i.uniform4iv(this.addr,t)}function ev(i,t){i.uniform1uiv(this.addr,t)}function nv(i,t){i.uniform2uiv(this.addr,t)}function iv(i,t){i.uniform3uiv(this.addr,t)}function sv(i,t){i.uniform4uiv(this.addr,t)}function rv(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rp,r[o])}function ov(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ap,r[o])}function av(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cp,r[o])}function cv(i,t,e){const n=this.cache,s=t.length,r=ia(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||op,r[o])}function lv(i){switch(i){case 5126:return Wx;case 35664:return jx;case 35665:return Xx;case 35666:return qx;case 35674:return Kx;case 35675:return $x;case 35676:return Yx;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return tv;case 5125:return ev;case 36294:return nv;case 36295:return iv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return cv}}class uv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vx(e.type)}}class hv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lv(e.type)}}class dv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function Ou(i,t){i.seq.push(t),i.map[t.id]=t}function fv(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),o=ja.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Ou(e,u===void 0?new uv(a,i,t):new hv(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new dv(a),Ou(e,l)),e=l}}}class Do{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Bu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pv=37297;let mv=0;function gv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gu=new ve;function _v(i){Le._getMatrix(Gu,Le.workingColorSpace,i);const t=`mat3( ${Gu.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Go:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gv(i.getShaderSource(t),o)}else return s}function bv(i,t){const e=_v(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xv(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new N;function vv(){Le.getLuminanceCoefficients(lo);const i=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Mv(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function Hu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(Av,Tv)}const Ev=new Map;function Tv(i,t){let e=ye[t];if(e===void 0){const n=Ev.get(t);if(n!==void 0)e=ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Dc(e)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(i){return i.replace(wv,Rv)}function Rv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Iv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Lv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Dv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Cv(e),u=Iv(e),h=Pv(e),l=Lv(e),d=Dv(e),f=yv(e),m=Mv(r),_=s.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(g=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[ju(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?ye.tonemapping_pars_fragment:"",e.toneMapping!==0?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,bv("linearToOutputTexel",e.outputColorSpace),vv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Dc(o),o=Hu(o,e),o=Vu(o,e),a=Dc(a),a=Hu(a,e),a=Vu(a,e),o=Wu(o),a=Wu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,x=v+p+a,R=Bu(s,s.VERTEX_SHADER,y),M=Bu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(R).trim(),F=s.getShaderInfoLog(M).trim();let J=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,M);else{const X=zu(s,R,"vertex"),U=zu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+X+`
`+U)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||F==="")&&(G=!1);G&&(C.diagnostics={runnable:J,programLog:k,vertexShader:{log:L,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(R),s.deleteShader(M),P=new Do(s,_),S=Sv(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,pv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=M,this}let Nv=0;class Uv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kv(t),e.set(t,n)),n}}class kv{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}}function Ov(i,t,e,n,s,r,o){const a=new Of,c=new Uv,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function g(S,A,C,k,L){const F=k.fog,J=L.geometry,G=S.isMeshStandardMaterial?k.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),U=X&&X.mapping===306?X.image.height:null,V=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Q=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,nt=Q!==void 0?Q.length:0;let ut=0;J.morphAttributes.position!==void 0&&(ut=1),J.morphAttributes.normal!==void 0&&(ut=2),J.morphAttributes.color!==void 0&&(ut=3);let Dt,it,ct,ot;if(V){const B=En[V];Dt=B.vertexShader,it=B.fragmentShader}else Dt=S.vertexShader,it=S.fragmentShader,c.update(S),ct=c.getVertexShaderID(S),ot=c.getFragmentShaderID(S);const et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,Qt=L.isBatchedMesh===!0,me=!!S.map,se=!!S.matcap,Ce=!!X,W=!!S.aoMap,Nt=!!S.lightMap,ie=!!S.bumpMap,de=!!S.normalMap,Ct=!!S.displacementMap,Se=!!S.emissiveMap,qt=!!S.metalnessMap,I=!!S.roughnessMap,T=S.anisotropy>0,K=S.clearcoat>0,rt=S.dispersion>0,Mt=S.iridescence>0,lt=S.sheen>0,Jt=S.transmission>0,Pt=T&&!!S.anisotropyMap,ht=K&&!!S.clearcoatMap,dt=K&&!!S.clearcoatNormalMap,bt=K&&!!S.clearcoatRoughnessMap,Vt=Mt&&!!S.iridescenceMap,Kt=Mt&&!!S.iridescenceThicknessMap,re=lt&&!!S.sheenColorMap,Wt=lt&&!!S.sheenRoughnessMap,be=!!S.specularMap,fe=!!S.specularColorMap,ge=!!S.specularIntensityMap,$=Jt&&!!S.transmissionMap,Ot=Jt&&!!S.thicknessMap,at=!!S.gradientMap,mt=!!S.alphaMap,jt=S.alphaTest>0,Ht=!!S.alphaHash,he=!!S.extensions;let D=0;S.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(D=i.toneMapping);const b={shaderID:V,shaderType:S.type,shaderName:S.name,vertexShader:Dt,fragmentShader:it,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Qt,batchingColor:Qt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:xn,alphaToCoverage:!!S.alphaToCoverage,map:me,matcap:se,envMap:Ce,envMapMode:Ce&&X.mapping,envMapCubeUVHeight:U,aoMap:W,lightMap:Nt,bumpMap:ie,normalMap:de,displacementMap:d&&Ct,emissiveMap:Se,normalMapObjectSpace:de&&S.normalMapType===1,normalMapTangentSpace:de&&S.normalMapType===0,metalnessMap:qt,roughnessMap:I,anisotropy:T,anisotropyMap:Pt,clearcoat:K,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:bt,dispersion:rt,iridescence:Mt,iridescenceMap:Vt,iridescenceThicknessMap:Kt,sheen:lt,sheenColorMap:re,sheenRoughnessMap:Wt,specularMap:be,specularColorMap:fe,specularIntensityMap:ge,transmission:Jt,transmissionMap:$,thicknessMap:Ot,gradientMap:at,opaque:S.transparent===!1&&S.blending===1&&S.alphaToCoverage===!1,alphaMap:mt,alphaTest:jt,alphaHash:Ht,combine:S.combine,mapUv:me&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:Nt&&_(S.lightMap.channel),bumpMapUv:ie&&_(S.bumpMap.channel),normalMapUv:de&&_(S.normalMap.channel),displacementMapUv:Ct&&_(S.displacementMap.channel),emissiveMapUv:Se&&_(S.emissiveMap.channel),metalnessMapUv:qt&&_(S.metalnessMap.channel),roughnessMapUv:I&&_(S.roughnessMap.channel),anisotropyMapUv:Pt&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:re&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&_(S.sheenRoughnessMap.channel),specularMapUv:be&&_(S.specularMap.channel),specularColorMapUv:fe&&_(S.specularColorMap.channel),specularIntensityMapUv:ge&&_(S.specularIntensityMap.channel),transmissionMapUv:$&&_(S.transmissionMap.channel),thicknessMapUv:Ot&&_(S.thicknessMap.channel),alphaMapUv:mt&&_(S.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(de||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!J.attributes.uv&&(me||mt),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:yt,skinning:L.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ut,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:D,decodeVideoTexture:me&&S.map.isVideoTexture===!0&&Le.getTransfer(S.map.colorSpace)===Be,decodeVideoTextureEmissive:Se&&S.emissiveMap.isVideoTexture===!0&&Le.getTransfer(S.emissiveMap.colorSpace)===Be,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===2,flipSided:S.side===1,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:he&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&S.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return b.vertexUv1s=u.has(1),b.vertexUv2s=u.has(2),b.vertexUv3s=u.has(3),u.clear(),b}function p(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)A.push(C),A.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(v(A,S),y(A,S),A.push(i.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function v(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function y(S,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const A=m[S.type];let C;if(A){const k=En[A];C=Qc.clone(k.uniforms)}else C=S.uniforms;return C}function R(S,A){let C;for(let k=0,L=h.length;k<L;k++){const F=h[k];if(F.cacheKey===A){C=F,++C.usedTimes;break}}return C===void 0&&(C=new Fv(i,A,S,r),h.push(C)),C}function M(S){if(--S.usedTimes===0){const A=h.indexOf(S);h[A]=h[h.length-1],h.pop(),S.destroy()}}function w(S){c.remove(S)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:M,releaseShaderCache:w,programs:h,dispose:P}}function Bv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Gv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qu(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:m,renderOrder:l.renderOrder,z:_,group:g},i[t]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=l.renderOrder,p.z=_,p.group=g),t++,p}function a(l,d,f,m,_,g){const p=o(l,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(l,d,f,m,_,g){const p=o(l,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(l,d){e.length>1&&e.sort(l||Gv),n.length>1&&n.sort(d||Xu),s.length>1&&s.sort(d||Xu)}function h(){for(let l=t,d=i.length;l<d;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function zv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new qu,i.set(n,[o])):s>=r.length?(o=new qu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ue};break;case"SpotLight":e={position:new N,direction:new N,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ue,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":e={color:new ue,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Vv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wv=0;function jv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xv(i){const t=new Hv,e=Vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new N);const s=new N,r=new _e,o=new _e;function a(u){let h=0,l=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,R=0,M=0,w=0;u.sort(jv);for(let S=0,A=u.length;S<A;S++){const C=u[S],k=C.color,L=C.intensity,F=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*L,l+=k.g*L,d+=k.b*L;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],L);w++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,U=e.get(C);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,n.directionalShadow[f]=U,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(k).multiplyScalar(L),G.distance=F,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const X=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,X.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[_]=X.matrix,C.castShadow){const U=e.get(C);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=J,x++}_++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(k).multiplyScalar(L),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=G,g++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const X=C.shadow,U=e.get(C);U.shadowIntensity=X.intensity,U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,n.pointShadow[m]=U,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=G,m++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(L),G.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Gt.LTC_FLOAT_1,n.rectAreaLTC2=Gt.LTC_FLOAT_2):(n.rectAreaLTC1=Gt.LTC_HALF_1,n.rectAreaLTC2=Gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-M,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=w,n.version=Wv++)}function c(u,h){let l=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const y=u[p];if(y.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),l++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Ku(i){const t=new Xv(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qv(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ku(i),t.set(s,[a])):r>=o.length?(a=new Ku(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`;function Yv(i,t,e){let n=new il;const s=new oe,r=new oe,o=new Me,a=new Wg({depthPacking:3201}),c=new jg,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Kv,fragmentShader:$v}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xe;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(M,w,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const S=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=p!==3&&this.type===3,F=p===3&&this.type!==3;for(let J=0,G=M.length;J<G;J++){const X=M[J],U=X.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const V=U.getFrameExtents();if(s.multiply(V),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||L===!0||F===!0){const nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};U.map!==null&&U.map.dispose(),U.map=new ss(s.x,s.y,nt),U.map.texture.name=X.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const Q=U.getViewportCount();for(let nt=0;nt<Q;nt++){const ut=U.getViewport(nt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),k.viewport(o),U.updateMatrices(X,nt),n=U.getFrustum(),x(w,P,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===3&&v(U,P),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,A,C)};function v(M,w){const P=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ss(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,P,f,_,null)}function y(M,w,P,S){let A=null;const C=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)A=C;else if(A=P.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=A.uuid,L=w.uuid;let F=u[k];F===void 0&&(F={},u[k]=F);let J=F[L];J===void 0&&(J=A.clone(),F[L]=J,w.addEventListener("dispose",R)),A=J}if(A.visible=w.visible,A.wireframe=w.wireframe,S===3?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:l[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const k=i.properties.get(A);k.light=P}return A}function x(M,w,P,S,A){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const L=t.update(M),F=M.material;if(Array.isArray(F)){const J=L.groups;for(let G=0,X=J.length;G<X;G++){const U=J[G],V=F[U.materialIndex];if(V&&V.visible){const Q=y(M,V,S,A);M.onBeforeShadow(i,M,w,P,L,Q,U),i.renderBufferDirect(P,null,L,Q,M,U),M.onAfterShadow(i,M,w,P,L,Q,U)}}}else if(F.visible){const J=y(M,F,S,A);M.onBeforeShadow(i,M,w,P,L,J,null),i.renderBufferDirect(P,null,L,J,M,null),M.onAfterShadow(i,M,w,P,L,J,null)}}const k=M.children;for(let L=0,F=k.length;L<F;L++)x(k[L],w,P,S,A)}function R(M){M.target.removeEventListener("dispose",R);for(const P in u){const S=u[P],A=M.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}const Zv={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Jv(i,t){function e(){let $=!1;const Ot=new Me;let at=null;const mt=new Me(0,0,0,0);return{setMask:function(jt){at!==jt&&!$&&(i.colorMask(jt,jt,jt,jt),at=jt)},setLocked:function(jt){$=jt},setClear:function(jt,Ht,he,D,b){b===!0&&(jt*=D,Ht*=D,he*=D),Ot.set(jt,Ht,he,D),mt.equals(Ot)===!1&&(i.clearColor(jt,Ht,he,D),mt.copy(Ot))},reset:function(){$=!1,at=null,mt.set(-1,0,0,0)}}}function n(){let $=!1,Ot=!1,at=null,mt=null,jt=null;return{setReversed:function(Ht){if(Ot!==Ht){const he=t.get("EXT_clip_control");Ot?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT);const D=jt;jt=null,this.setClear(D)}Ot=Ht},getReversed:function(){return Ot},setTest:function(Ht){Ht?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Ht){at!==Ht&&!$&&(i.depthMask(Ht),at=Ht)},setFunc:function(Ht){if(Ot&&(Ht=Zv[Ht]),mt!==Ht){switch(Ht){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=Ht}},setLocked:function(Ht){$=Ht},setClear:function(Ht){jt!==Ht&&(Ot&&(Ht=1-Ht),i.clearDepth(Ht),jt=Ht)},reset:function(){$=!1,at=null,mt=null,jt=null,Ot=!1}}}function s(){let $=!1,Ot=null,at=null,mt=null,jt=null,Ht=null,he=null,D=null,b=null;return{setTest:function(B){$||(B?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(B){Ot!==B&&!$&&(i.stencilMask(B),Ot=B)},setFunc:function(B,Z,z){(at!==B||mt!==Z||jt!==z)&&(i.stencilFunc(B,Z,z),at=B,mt=Z,jt=z)},setOp:function(B,Z,z){(Ht!==B||he!==Z||D!==z)&&(i.stencilOp(B,Z,z),Ht=B,he=Z,D=z)},setLocked:function(B){$=B},setClear:function(B){b!==B&&(i.clearStencil(B),b=B)},reset:function(){$=!1,Ot=null,at=null,mt=null,jt=null,Ht=null,he=null,D=null,b=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,R=null,M=null,w=new ue(0,0,0),P=0,S=!1,A=null,C=null,k=null,L=null,F=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=X>=1):U.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=X>=2);let V=null,Q={};const nt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Dt=new Me().fromArray(nt),it=new Me().fromArray(ut);function ct($,Ot,at,mt){const jt=new Uint8Array(4),Ht=i.createTexture();i.bindTexture($,Ht),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let he=0;he<at;he++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Ot,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,jt):i.texImage2D(Ot+he,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,jt);return Ht}const ot={};ot[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(3),ie(!1),de(1),et(i.CULL_FACE),W(0);function et($){h[$]!==!0&&(i.enable($),h[$]=!0)}function yt($){h[$]!==!1&&(i.disable($),h[$]=!1)}function zt($,Ot){return l[$]!==Ot?(i.bindFramebuffer($,Ot),l[$]=Ot,$===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Ot),$===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Qt($,Ot){let at=f,mt=!1;if($){at=d.get(Ot),at===void 0&&(at=[],d.set(Ot,at));const jt=$.textures;if(at.length!==jt.length||at[0]!==i.COLOR_ATTACHMENT0){for(let Ht=0,he=jt.length;Ht<he;Ht++)at[Ht]=i.COLOR_ATTACHMENT0+Ht;at.length=jt.length,mt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,mt=!0);mt&&i.drawBuffers(at)}function me($){return m!==$?(i.useProgram($),m=$,!0):!1}const se={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};se[103]=i.MIN,se[104]=i.MAX;const Ce={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function W($,Ot,at,mt,jt,Ht,he,D,b,B){if($===0){_===!0&&(yt(i.BLEND),_=!1);return}if(_===!1&&(et(i.BLEND),_=!0),$!==5){if($!==g||B!==S){if((p!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,x=100),B)switch($){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,y=null,R=null,M=null,w.set(0,0,0),P=0,g=$,S=B}return}jt=jt||Ot,Ht=Ht||at,he=he||mt,(Ot!==p||jt!==x)&&(i.blendEquationSeparate(se[Ot],se[jt]),p=Ot,x=jt),(at!==v||mt!==y||Ht!==R||he!==M)&&(i.blendFuncSeparate(Ce[at],Ce[mt],Ce[Ht],Ce[he]),v=at,y=mt,R=Ht,M=he),(D.equals(w)===!1||b!==P)&&(i.blendColor(D.r,D.g,D.b,b),w.copy(D),P=b),g=$,S=!1}function Nt($,Ot){$.side===2?yt(i.CULL_FACE):et(i.CULL_FACE);let at=$.side===1;Ot&&(at=!at),ie(at),$.blending===1&&$.transparent===!1?W(0):W($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const mt=$.stencilWrite;a.setTest(mt),mt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Se($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie($){A!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),A=$)}function de($){$!==0?(et(i.CULL_FACE),$!==C&&($===1?i.cullFace(i.BACK):$===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),C=$}function Ct($){$!==k&&(G&&i.lineWidth($),k=$)}function Se($,Ot,at){$?(et(i.POLYGON_OFFSET_FILL),(L!==Ot||F!==at)&&(i.polygonOffset(Ot,at),L=Ot,F=at)):yt(i.POLYGON_OFFSET_FILL)}function qt($){$?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function I($){$===void 0&&($=i.TEXTURE0+J-1),V!==$&&(i.activeTexture($),V=$)}function T($,Ot,at){at===void 0&&(V===null?at=i.TEXTURE0+J-1:at=V);let mt=Q[at];mt===void 0&&(mt={type:void 0,texture:void 0},Q[at]=mt),(mt.type!==$||mt.texture!==Ot)&&(V!==at&&(i.activeTexture(at),V=at),i.bindTexture($,Ot||ot[$]),mt.type=$,mt.texture=Ot)}function K(){const $=Q[V];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function rt(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Jt(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function dt(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function bt(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Vt(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function re($){Dt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Dt.copy($))}function Wt($){it.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),it.copy($))}function be($,Ot){let at=u.get(Ot);at===void 0&&(at=new WeakMap,u.set(Ot,at));let mt=at.get($);mt===void 0&&(mt=i.getUniformBlockIndex(Ot,$.name),at.set($,mt))}function fe($,Ot){const mt=u.get(Ot).get($);c.get(Ot)!==mt&&(i.uniformBlockBinding(Ot,mt,$.__bindingPointIndex),c.set(Ot,mt))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},V=null,Q={},l={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,R=null,M=null,w=new ue(0,0,0),P=0,S=!1,A=null,C=null,k=null,L=null,F=null,Dt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:yt,bindFramebuffer:zt,drawBuffers:Qt,useProgram:me,setBlending:W,setMaterial:Nt,setFlipSided:ie,setCullFace:de,setLineWidth:Ct,setPolygonOffset:Se,setScissorTest:qt,activeTexture:I,bindTexture:T,unbindTexture:K,compressedTexImage2D:rt,compressedTexImage3D:Mt,texImage2D:Vt,texImage3D:Kt,updateUBOMapping:be,uniformBlockBinding:fe,texStorage2D:dt,texStorage3D:bt,texSubImage2D:lt,texSubImage3D:Jt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:ht,scissor:re,viewport:Wt,reset:ge}}function Qv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new oe,h=new WeakMap;let l;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,T){return f?new OffscreenCanvas(I,T):Sr("canvas")}function _(I,T,K){let rt=1;const Mt=qt(I);if((Mt.width>K||Mt.height>K)&&(rt=K/Math.max(Mt.width,Mt.height)),rt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const lt=Math.floor(rt*Mt.width),Jt=Math.floor(rt*Mt.height);l===void 0&&(l=m(lt,Jt));const Pt=T?m(lt,Jt):l;return Pt.width=lt,Pt.height=Jt,Pt.getContext("2d").drawImage(I,0,0,lt,Jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+lt+"x"+Jt+")."),Pt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,T,K,rt,Mt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let lt=T;if(T===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),T===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),T===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),T===i.RGBA){const Jt=Mt?Go:Le.getTransfer(rt);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=Jt===Be?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function x(I,T){let K;return I?T===null||T===1014||T===1020?K=i.DEPTH24_STENCIL8:T===1015?K=i.DEPTH32F_STENCIL8:T===1012&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===1014||T===1020?K=i.DEPTH_COMPONENT24:T===1015?K=i.DEPTH_COMPONENT32F:T===1012&&(K=i.DEPTH_COMPONENT16),K}function R(I,T){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==1003&&I.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function M(I){const T=I.target;T.removeEventListener("dispose",M),P(T),T.isVideoTexture&&h.delete(T)}function w(I){const T=I.target;T.removeEventListener("dispose",w),A(T)}function P(I){const T=n.get(I);if(T.__webglInit===void 0)return;const K=I.source,rt=d.get(K);if(rt){const Mt=rt[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&S(I),Object.keys(rt).length===0&&d.delete(K)}n.remove(I)}function S(I){const T=n.get(I);i.deleteTexture(T.__webglTexture);const K=I.source,rt=d.get(K);delete rt[T.__cacheKey],o.memory.textures--}function A(I){const T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let Mt=0;Mt<T.__webglFramebuffer[rt].length;Mt++)i.deleteFramebuffer(T.__webglFramebuffer[rt][Mt]);else i.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)i.deleteFramebuffer(T.__webglFramebuffer[rt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=I.textures;for(let rt=0,Mt=K.length;rt<Mt;rt++){const lt=n.get(K[rt]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(K[rt])}n.remove(I)}let C=0;function k(){C=0}function L(){const I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function F(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function J(I,T){const K=n.get(I);if(I.isVideoTexture&&Ct(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const rt=I.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,I,T);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function G(I,T){const K=n.get(I);if(I.version>0&&K.__version!==I.version){it(K,I,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function X(I,T){const K=n.get(I);if(I.version>0&&K.__version!==I.version){it(K,I,T);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function U(I,T){const K=n.get(I);if(I.version>0&&K.__version!==I.version){ct(K,I,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}const V={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Q={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},nt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function ut(I,T){if(T.type===1015&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===1006||T.magFilter===1007||T.magFilter===1005||T.magFilter===1008||T.minFilter===1006||T.minFilter===1007||T.minFilter===1005||T.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,V[T.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,V[T.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,V[T.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Q[T.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,nt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Dt(I,T){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",M));const rt=T.source;let Mt=d.get(rt);Mt===void 0&&(Mt={},d.set(rt,Mt));const lt=F(T);if(lt!==I.__cacheKey){Mt[lt]===void 0&&(Mt[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),Mt[lt].usedTimes++;const Jt=Mt[I.__cacheKey];Jt!==void 0&&(Mt[I.__cacheKey].usedTimes--,Jt.usedTimes===0&&S(T)),I.__cacheKey=lt,I.__webglTexture=Mt[lt].texture}return K}function it(I,T,K){let rt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=i.TEXTURE_3D);const Mt=Dt(I,T),lt=T.source;e.bindTexture(rt,I.__webglTexture,i.TEXTURE0+K);const Jt=n.get(lt);if(lt.version!==Jt.__version||Mt===!0){e.activeTexture(i.TEXTURE0+K);const Pt=Le.getPrimaries(Le.workingColorSpace),ht=T.colorSpace===""?null:Le.getPrimaries(T.colorSpace),dt=T.colorSpace===""||Pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let bt=_(T.image,!1,s.maxTextureSize);bt=Se(T,bt);const Vt=r.convert(T.format,T.colorSpace),Kt=r.convert(T.type);let re=y(T.internalFormat,Vt,Kt,T.colorSpace,T.isVideoTexture);ut(rt,T);let Wt;const be=T.mipmaps,fe=T.isVideoTexture!==!0,ge=Jt.__version===void 0||Mt===!0,$=lt.dataReady,Ot=R(T,bt);if(T.isDepthTexture)re=x(T.format===1027,T.type),ge&&(fe?e.texStorage2D(i.TEXTURE_2D,1,re,bt.width,bt.height):e.texImage2D(i.TEXTURE_2D,0,re,bt.width,bt.height,0,Vt,Kt,null));else if(T.isDataTexture)if(be.length>0){fe&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,re,be[0].width,be[0].height);for(let at=0,mt=be.length;at<mt;at++)Wt=be[at],fe?$&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Wt.width,Wt.height,Vt,Kt,Wt.data):e.texImage2D(i.TEXTURE_2D,at,re,Wt.width,Wt.height,0,Vt,Kt,Wt.data);T.generateMipmaps=!1}else fe?(ge&&e.texStorage2D(i.TEXTURE_2D,Ot,re,bt.width,bt.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt.width,bt.height,Vt,Kt,bt.data)):e.texImage2D(i.TEXTURE_2D,0,re,bt.width,bt.height,0,Vt,Kt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){fe&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,re,be[0].width,be[0].height,bt.depth);for(let at=0,mt=be.length;at<mt;at++)if(Wt=be[at],T.format!==1023)if(Vt!==null)if(fe){if($)if(T.layerUpdates.size>0){const jt=Au(Wt.width,Wt.height,T.format,T.type);for(const Ht of T.layerUpdates){const he=Wt.data.subarray(Ht*jt/Wt.data.BYTES_PER_ELEMENT,(Ht+1)*jt/Wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,Ht,Wt.width,Wt.height,1,Vt,he)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Wt.width,Wt.height,bt.depth,Vt,Wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,re,Wt.width,Wt.height,bt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,Wt.width,Wt.height,bt.depth,Vt,Kt,Wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,re,Wt.width,Wt.height,bt.depth,0,Vt,Kt,Wt.data)}else{fe&&ge&&e.texStorage2D(i.TEXTURE_2D,Ot,re,be[0].width,be[0].height);for(let at=0,mt=be.length;at<mt;at++)Wt=be[at],T.format!==1023?Vt!==null?fe?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,Wt.width,Wt.height,Vt,Wt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,re,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?$&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Wt.width,Wt.height,Vt,Kt,Wt.data):e.texImage2D(i.TEXTURE_2D,at,re,Wt.width,Wt.height,0,Vt,Kt,Wt.data)}else if(T.isDataArrayTexture)if(fe){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,re,bt.width,bt.height,bt.depth),$)if(T.layerUpdates.size>0){const at=Au(bt.width,bt.height,T.format,T.type);for(const mt of T.layerUpdates){const jt=bt.data.subarray(mt*at/bt.data.BYTES_PER_ELEMENT,(mt+1)*at/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,bt.width,bt.height,1,Vt,Kt,jt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Vt,Kt,bt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,re,bt.width,bt.height,bt.depth,0,Vt,Kt,bt.data);else if(T.isData3DTexture)fe?(ge&&e.texStorage3D(i.TEXTURE_3D,Ot,re,bt.width,bt.height,bt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Vt,Kt,bt.data)):e.texImage3D(i.TEXTURE_3D,0,re,bt.width,bt.height,bt.depth,0,Vt,Kt,bt.data);else if(T.isFramebufferTexture){if(ge)if(fe)e.texStorage2D(i.TEXTURE_2D,Ot,re,bt.width,bt.height);else{let at=bt.width,mt=bt.height;for(let jt=0;jt<Ot;jt++)e.texImage2D(i.TEXTURE_2D,jt,re,at,mt,0,Vt,Kt,null),at>>=1,mt>>=1}}else if(be.length>0){if(fe&&ge){const at=qt(be[0]);e.texStorage2D(i.TEXTURE_2D,Ot,re,at.width,at.height)}for(let at=0,mt=be.length;at<mt;at++)Wt=be[at],fe?$&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,Vt,Kt,Wt):e.texImage2D(i.TEXTURE_2D,at,re,Vt,Kt,Wt);T.generateMipmaps=!1}else if(fe){if(ge){const at=qt(bt);e.texStorage2D(i.TEXTURE_2D,Ot,re,at.width,at.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Vt,Kt,bt)}else e.texImage2D(i.TEXTURE_2D,0,re,Vt,Kt,bt);g(T)&&p(rt),Jt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ct(I,T,K){if(T.image.length!==6)return;const rt=Dt(I,T),Mt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);const lt=n.get(Mt);if(Mt.version!==lt.__version||rt===!0){e.activeTexture(i.TEXTURE0+K);const Jt=Le.getPrimaries(Le.workingColorSpace),Pt=T.colorSpace===""?null:Le.getPrimaries(T.colorSpace),ht=T.colorSpace===""||Jt===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Vt=[];for(let mt=0;mt<6;mt++)!dt&&!bt?Vt[mt]=_(T.image[mt],!0,s.maxCubemapSize):Vt[mt]=bt?T.image[mt].image:T.image[mt],Vt[mt]=Se(T,Vt[mt]);const Kt=Vt[0],re=r.convert(T.format,T.colorSpace),Wt=r.convert(T.type),be=y(T.internalFormat,re,Wt,T.colorSpace),fe=T.isVideoTexture!==!0,ge=lt.__version===void 0||rt===!0,$=Mt.dataReady;let Ot=R(T,Kt);ut(i.TEXTURE_CUBE_MAP,T);let at;if(dt){fe&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,be,Kt.width,Kt.height);for(let mt=0;mt<6;mt++){at=Vt[mt].mipmaps;for(let jt=0;jt<at.length;jt++){const Ht=at[jt];T.format!==1023?re!==null?fe?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,Ht.width,Ht.height,re,Ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,be,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):fe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,0,0,Ht.width,Ht.height,re,Wt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt,be,Ht.width,Ht.height,0,re,Wt,Ht.data)}}}else{if(at=T.mipmaps,fe&&ge){at.length>0&&Ot++;const mt=qt(Vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,be,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(bt){fe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Vt[mt].width,Vt[mt].height,re,Wt,Vt[mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,be,Vt[mt].width,Vt[mt].height,0,re,Wt,Vt[mt].data);for(let jt=0;jt<at.length;jt++){const he=at[jt].image[mt].image;fe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,he.width,he.height,re,Wt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,be,he.width,he.height,0,re,Wt,he.data)}}else{fe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,re,Wt,Vt[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,be,re,Wt,Vt[mt]);for(let jt=0;jt<at.length;jt++){const Ht=at[jt];fe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,0,0,re,Wt,Ht.image[mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,jt+1,be,re,Wt,Ht.image[mt])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),lt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ot(I,T,K,rt,Mt,lt){const Jt=r.convert(K.format,K.colorSpace),Pt=r.convert(K.type),ht=y(K.internalFormat,Jt,Pt,K.colorSpace),dt=n.get(T),bt=n.get(K);if(bt.__renderTarget=T,!dt.__hasExternalTextures){const Vt=Math.max(1,T.width>>lt),Kt=Math.max(1,T.height>>lt);Mt===i.TEXTURE_3D||Mt===i.TEXTURE_2D_ARRAY?e.texImage3D(Mt,lt,ht,Vt,Kt,T.depth,0,Jt,Pt,null):e.texImage2D(Mt,lt,ht,Vt,Kt,0,Jt,Pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),de(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,Mt,bt.__webglTexture,0,ie(T)):(Mt===i.TEXTURE_2D||Mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,Mt,bt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(I,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),T.depthBuffer){const rt=T.depthTexture,Mt=rt&&rt.isDepthTexture?rt.type:null,lt=x(T.stencilBuffer,Mt),Jt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=ie(T);de(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,lt,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,lt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Jt,i.RENDERBUFFER,I)}else{const rt=T.textures;for(let Mt=0;Mt<rt.length;Mt++){const lt=rt[Mt],Jt=r.convert(lt.format,lt.colorSpace),Pt=r.convert(lt.type),ht=y(lt.internalFormat,Jt,Pt,lt.colorSpace),dt=ie(T);K&&de(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ht,T.width,T.height):de(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ht,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ht,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(T.depthTexture);rt.__renderTarget=T,(!rt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const Mt=rt.__webglTexture,lt=ie(T);if(T.depthTexture.format===1026)de(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Mt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===1027)de(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Mt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function zt(I){const T=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const rt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",Mt)};rt.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=rt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");yt(T.__webglFramebuffer,I)}else if(K){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=i.createRenderbuffer(),et(T.__webglDepthbuffer[rt],I,!1);else{const Mt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),et(T.__webglDepthbuffer,I,!1);else{const rt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,Mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(I,T,K){const rt=n.get(I);T!==void 0&&ot(rt.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&zt(I)}function me(I){const T=I.texture,K=n.get(I),rt=n.get(T);I.addEventListener("dispose",w);const Mt=I.textures,lt=I.isWebGLCubeRenderTarget===!0,Jt=Mt.length>1;if(Jt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=T.version,o.memory.textures++),lt){K.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Pt]=[];for(let ht=0;ht<T.mipmaps.length;ht++)K.__webglFramebuffer[Pt][ht]=i.createFramebuffer()}else K.__webglFramebuffer[Pt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Pt=0;Pt<T.mipmaps.length;Pt++)K.__webglFramebuffer[Pt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Jt)for(let Pt=0,ht=Mt.length;Pt<ht;Pt++){const dt=n.get(Mt[Pt]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&de(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Mt.length;Pt++){const ht=Mt[Pt];K.__webglColorRenderbuffer[Pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Pt]);const dt=r.convert(ht.format,ht.colorSpace),bt=r.convert(ht.type),Vt=y(ht.internalFormat,dt,bt,ht.colorSpace,I.isXRRenderTarget===!0),Kt=ie(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,Vt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),et(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ut(i.TEXTURE_CUBE_MAP,T);for(let Pt=0;Pt<6;Pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)ot(K.__webglFramebuffer[Pt][ht],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,ht);else ot(K.__webglFramebuffer[Pt],I,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);g(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Jt){for(let Pt=0,ht=Mt.length;Pt<ht;Pt++){const dt=Mt[Pt],bt=n.get(dt);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),ut(i.TEXTURE_2D,dt),ot(K.__webglFramebuffer,I,dt,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,0),g(dt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Pt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Pt,rt.__webglTexture),ut(Pt,T),T.mipmaps&&T.mipmaps.length>0)for(let ht=0;ht<T.mipmaps.length;ht++)ot(K.__webglFramebuffer[ht],I,T,i.COLOR_ATTACHMENT0,Pt,ht);else ot(K.__webglFramebuffer,I,T,i.COLOR_ATTACHMENT0,Pt,0);g(T)&&p(Pt),e.unbindTexture()}I.depthBuffer&&zt(I)}function se(I){const T=I.textures;for(let K=0,rt=T.length;K<rt;K++){const Mt=T[K];if(g(Mt)){const lt=v(I),Jt=n.get(Mt).__webglTexture;e.bindTexture(lt,Jt),p(lt),e.unbindTexture()}}}const Ce=[],W=[];function Nt(I){if(I.samples>0){if(de(I)===!1){const T=I.textures,K=I.width,rt=I.height;let Mt=i.COLOR_BUFFER_BIT;const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Jt=n.get(I),Pt=T.length>1;if(Pt)for(let ht=0;ht<T.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let ht=0;ht<T.length;ht++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Mt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Mt|=i.STENCIL_BUFFER_BIT)),Pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[ht]);const dt=n.get(T[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,K,rt,0,0,K,rt,Mt,i.NEAREST),c===!0&&(Ce.length=0,W.length=0,Ce.push(i.COLOR_ATTACHMENT0+ht),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ce.push(lt),W.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Pt)for(let ht=0;ht<T.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,Jt.__webglColorRenderbuffer[ht]);const dt=n.get(T[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Jt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const T=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ie(I){return Math.min(s.maxSamples,I.samples)}function de(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ct(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Se(I,T){const K=I.colorSpace,rt=I.format,Mt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==xn&&K!==""&&(Le.getTransfer(K)===Be?(rt!==1023||Mt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function qt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=U,this.rebindTextures=Qt,this.setupRenderTarget=me,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=de}function ty(i,t){function e(n,s=""){let r;const o=Le.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ey={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),f=.02,m=.005;u.inputState.pinching&&d>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ny=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iy=`
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

}`;class sy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:ny,fragmentShader:iy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends os{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,d=null,f=null,m=null;const _=new sy,g=e.getContextAttributes();let p=null,v=null;const y=[],x=[],R=new oe;let M=null;const w=new _n;w.viewport=new Me;const P=new _n;P.viewport=new Me;const S=[w,P],A=new f0;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=y[it];return ct===void 0&&(ct=new Xa,y[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=y[it];return ct===void 0&&(ct=new Xa,y[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=y[it];return ct===void 0&&(ct=new Xa,y[it]=ct),ct.getHandSpace()};function L(it){const ct=x.indexOf(it.inputSource);if(ct===-1)return;const ot=y[ct];ot!==void 0&&(ot.update(it.inputSource,it.frame,u||o),ot.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",J);for(let it=0;it<y.length;it++){const ct=x[it];ct!==null&&(x[it]=null,y[it].disconnect(ct))}C=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,l=null,s=null,v=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const ct={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ss(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ct=null,ot=null,et=null;g.depth&&(et=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=g.stencil?1027:1026,ot=g.stencil?1020:1014);const yt={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ss(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Zf(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(it){for(let ct=0;ct<it.removed.length;ct++){const ot=it.removed[ct],et=x.indexOf(ot);et>=0&&(x[et]=null,y[et].disconnect(ot))}for(let ct=0;ct<it.added.length;ct++){const ot=it.added[ct];let et=x.indexOf(ot);if(et===-1){for(let zt=0;zt<y.length;zt++)if(zt>=x.length){x.push(ot),et=zt;break}else if(x[zt]===null){x[zt]=ot,et=zt;break}if(et===-1)break}const yt=y[et];yt&&yt.connect(ot)}}const G=new N,X=new N;function U(it,ct,ot){G.setFromMatrixPosition(ct.matrixWorld),X.setFromMatrixPosition(ot.matrixWorld);const et=G.distanceTo(X),yt=ct.projectionMatrix.elements,zt=ot.projectionMatrix.elements,Qt=yt[14]/(yt[10]-1),me=yt[14]/(yt[10]+1),se=(yt[9]+1)/yt[5],Ce=(yt[9]-1)/yt[5],W=(yt[8]-1)/yt[0],Nt=(zt[8]+1)/zt[0],ie=Qt*W,de=Qt*Nt,Ct=et/(-W+Nt),Se=Ct*-W;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Se),it.translateZ(Ct),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),yt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const qt=Qt+Ct,I=me+Ct,T=ie-Se,K=de+(et-Se),rt=se*me/I*qt,Mt=Ce*me/I*qt;it.projectionMatrix.makePerspective(T,K,rt,Mt,qt,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function V(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ct=it.near,ot=it.far;_.texture!==null&&(_.depthNear>0&&(ct=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),A.near=P.near=w.near=ct,A.far=P.far=w.far=ot,(C!==A.near||k!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,k=A.far),w.layers.mask=it.layers.mask|2,P.layers.mask=it.layers.mask|4,A.layers.mask=w.layers.mask|P.layers.mask;const et=it.parent,yt=A.cameras;V(A,et);for(let zt=0;zt<yt.length;zt++)V(yt[zt],et);yt.length===2?U(A,w,P):A.projectionMatrix.copy(w.projectionMatrix),Q(it,A,et)};function Q(it,ct,ot){ot===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(ot.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ks*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)};let nt=null;function ut(it,ct){if(h=ct.getViewerPose(u||o),m=ct,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let et=!1;ot.length!==A.cameras.length&&(A.cameras.length=0,et=!0);for(let zt=0;zt<ot.length;zt++){const Qt=ot[zt];let me=null;if(f!==null)me=f.getViewport(Qt);else{const Ce=l.getViewSubImage(d,Qt);me=Ce.viewport,zt===0&&(t.setRenderTargetTextures(v,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(v))}let se=S[zt];se===void 0&&(se=new _n,se.layers.enable(zt),se.viewport=new Me,S[zt]=se),se.matrix.fromArray(Qt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Qt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(me.x,me.y,me.width,me.height),zt===0&&(A.matrix.copy(se.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),et===!0&&A.cameras.push(se)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const zt=l.getDepthInformation(ot[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let ot=0;ot<y.length;ot++){const et=x[ot],yt=y[ot];et!==null&&yt!==void 0&&yt.update(et,ct,u||o)}nt&&nt(it,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),m=null}const Dt=new sp;Dt.setAnimationLoop(ut),this.setAnimationLoop=function(it){nt=it},this.dispose=function(){}}}const zi=new kn,oy=new _e;function ay(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),l(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,zi.copy(x),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(oy.makeRotationFromEuler(zi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function l(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function cy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function u(v,y){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));const R=y.program;n.updateUBOMapping(v,R);const M=t.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){const y=l();v.__bindingPointIndex=y;const x=i.createBuffer(),R=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,w=x.length;M<w;M++){const P=Array.isArray(x[M])?x[M]:[x[M]];for(let S=0,A=P.length;S<A;S++){const C=P[S];if(f(C,M,S,R)===!0){const k=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let J=0;J<L.length;J++){const G=L[J],X=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,k+F,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,R){const M=v.value,w=y+"_"+x;if(R[w]===void 0)return typeof M=="number"||typeof M=="boolean"?R[w]=M:R[w]=M.clone(),!0;{const P=R[w];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return R[w]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function m(v){const y=v.uniforms;let x=0;const R=16;for(let w=0,P=y.length;w<P;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let A=0,C=S.length;A<C;A++){const k=S[A],L=Array.isArray(k.value)?k.value:[k.value];for(let F=0,J=L.length;F<J;F++){const G=L[F],X=_(G),U=x%R,V=U%X.boundary,Q=U+V;x+=V,Q!==0&&R-Q<X.storage&&(x+=R-Q),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=X.storage}}}const M=x%R;return M>0&&(x+=R-M),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:p}}class ly{constructor(t={}){const{canvas:e=ag(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let R=!1,M=0,w=0,P=null,S=-1,A=null;const C=new Me,k=new Me;let L=null;const F=new ue(0);let J=0,G=e.width,X=e.height,U=1,V=null,Q=null;const nt=new Me(0,0,G,X),ut=new Me(0,0,G,X);let Dt=!1;const it=new il;let ct=!1,ot=!1;const et=new _e,yt=new _e,zt=new N,Qt=new Me,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Ce(){return P===null?U:1}let W=n;function Nt(E,j){return e.getContext(E,j)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",jt,!1),e.addEventListener("webglcontextcreationerror",Ht,!1),W===null){const j="webgl2";if(W=Nt(j,E),W===null)throw Nt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,de,Ct,Se,qt,I,T,K,rt,Mt,lt,Jt,Pt,ht,dt,bt,Vt,Kt,re,Wt,be,fe,ge,$;function Ot(){ie=new bx(W),ie.init(),fe=new ty(W,ie),de=new dx(W,ie,t,fe),Ct=new Jv(W,ie),de.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),Se=new yx(W),qt=new Bv,I=new Qv(W,ie,Ct,qt,de,fe,Se),T=new px(x),K=new _x(x),rt=new R0(W),ge=new ux(W,rt),Mt=new xx(W,rt,Se,ge),lt=new Sx(W,Mt,rt,Se),re=new Mx(W,de,I),bt=new fx(qt),Jt=new Ov(x,T,K,ie,de,ge,bt),Pt=new ay(x,qt),ht=new zv,dt=new qv(ie),Kt=new lx(x,T,K,Ct,lt,f,c),Vt=new Yv(x,lt,de),$=new cy(W,Se,de,Ct),Wt=new hx(W,ie,Se),be=new vx(W,ie,Se),Se.programs=Jt.programs,x.capabilities=de,x.extensions=ie,x.properties=qt,x.renderLists=ht,x.shadowMap=Vt,x.state=Ct,x.info=Se}Ot();const at=new ry(x,W);this.xr=at,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(E){E!==void 0&&(U=E,this.setSize(G,X,!1))},this.getSize=function(E){return E.set(G,X)},this.setSize=function(E,j,H=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,X=j,e.width=Math.floor(E*U),e.height=Math.floor(j*U),H===!0&&(e.style.width=E+"px",e.style.height=j+"px"),this.setViewport(0,0,E,j)},this.getDrawingBufferSize=function(E){return E.set(G*U,X*U).floor()},this.setDrawingBufferSize=function(E,j,H){G=E,X=j,U=H,e.width=Math.floor(E*H),e.height=Math.floor(j*H),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(nt)},this.setViewport=function(E,j,H,q){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,j,H,q),Ct.viewport(C.copy(nt).multiplyScalar(U).round())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,j,H,q){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,j,H,q),Ct.scissor(k.copy(ut).multiplyScalar(U).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(E){Ct.setScissorTest(Dt=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(E=!0,j=!0,H=!0){let q=0;if(E){let O=!1;if(P!==null){const st=P.texture.format;O=st===1033||st===1031||st===1029}if(O){const st=P.texture.type,ft=st===1009||st===1014||st===1012||st===1020||st===1017||st===1018,xt=Kt.getClearColor(),Y=Kt.getClearAlpha(),Rt=xt.r,It=xt.g,St=xt.b;ft?(m[0]=Rt,m[1]=It,m[2]=St,m[3]=Y,W.clearBufferuiv(W.COLOR,0,m)):(_[0]=Rt,_[1]=It,_[2]=St,_[3]=Y,W.clearBufferiv(W.COLOR,0,_))}else q|=W.COLOR_BUFFER_BIT}j&&(q|=W.DEPTH_BUFFER_BIT),H&&(q|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",jt,!1),e.removeEventListener("webglcontextcreationerror",Ht,!1),Kt.dispose(),ht.dispose(),dt.dispose(),qt.dispose(),T.dispose(),K.dispose(),lt.dispose(),ge.dispose(),$.dispose(),Jt.dispose(),at.dispose(),at.removeEventListener("sessionstart",pt),at.removeEventListener("sessionend",Et),wt.stop()};function mt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Se.autoReset,j=Vt.enabled,H=Vt.autoUpdate,q=Vt.needsUpdate,O=Vt.type;Ot(),Se.autoReset=E,Vt.enabled=j,Vt.autoUpdate=H,Vt.needsUpdate=q,Vt.type=O}function Ht(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function he(E){const j=E.target;j.removeEventListener("dispose",he),D(j)}function D(E){b(E),qt.remove(E)}function b(E){const j=qt.get(E).programs;j!==void 0&&(j.forEach(function(H){Jt.releaseProgram(H)}),E.isShaderMaterial&&Jt.releaseShaderCache(E))}this.renderBufferDirect=function(E,j,H,q,O,st){j===null&&(j=me);const ft=O.isMesh&&O.matrixWorld.determinant()<0,xt=Bt(E,j,H,q,O);Ct.setMaterial(q,ft);let Y=H.index,Rt=1;if(q.wireframe===!0){if(Y=Mt.getWireframeAttribute(H),Y===void 0)return;Rt=2}const It=H.drawRange,St=H.attributes.position;let Zt=It.start*Rt,ae=(It.start+It.count)*Rt;st!==null&&(Zt=Math.max(Zt,st.start*Rt),ae=Math.min(ae,(st.start+st.count)*Rt)),Y!==null?(Zt=Math.max(Zt,0),ae=Math.min(ae,Y.count)):St!=null&&(Zt=Math.max(Zt,0),ae=Math.min(ae,St.count));const ce=ae-Zt;if(ce<0||ce===1/0)return;ge.setup(O,q,xt,H,Y);let kt,$t=Wt;if(Y!==null&&(kt=rt.get(Y),$t=be,$t.setIndex(kt)),O.isMesh)q.wireframe===!0?(Ct.setLineWidth(q.wireframeLinewidth*Ce()),$t.setMode(W.LINES)):$t.setMode(W.TRIANGLES);else if(O.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),Ct.setLineWidth(Ft*Ce()),O.isLineSegments?$t.setMode(W.LINES):O.isLineLoop?$t.setMode(W.LINE_LOOP):$t.setMode(W.LINE_STRIP)}else O.isPoints?$t.setMode(W.POINTS):O.isSprite&&$t.setMode(W.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)$t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))$t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,Ae=O._multiDrawCounts,ee=O._multiDrawCount,ne=Y?rt.get(Y).bytesPerElement:1,xe=qt.get(q).currentProgram.getUniforms();for(let Ge=0;Ge<ee;Ge++)xe.setValue(W,"_gl_DrawID",Ge),$t.render(Ft[Ge]/ne,Ae[Ge])}else if(O.isInstancedMesh)$t.renderInstances(Zt,ce,O.count);else if(H.isInstancedBufferGeometry){const Ft=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ae=Math.min(H.instanceCount,Ft);$t.renderInstances(Zt,ce,Ae)}else $t.render(Zt,ce)};function B(E,j,H){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,_t(E,j,H),E.side=0,E.needsUpdate=!0,_t(E,j,H),E.side=2):_t(E,j,H)}this.compile=function(E,j,H=null){H===null&&(H=E),p=dt.get(H),p.init(j),y.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(j.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==H&&E.traverseVisible(function(O){O.isLight&&O.layers.test(j.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const xt=st[ft];B(xt,H,O),q.add(xt)}else B(st,H,O),q.add(st)}),y.pop(),p=null,q},this.compileAsync=function(E,j,H=null){const q=this.compile(E,j,H);return new Promise(O=>{function st(){if(q.forEach(function(ft){qt.get(ft).currentProgram.isReady()&&q.delete(ft)}),q.size===0){O(E);return}setTimeout(st,10)}ie.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Z=null;function z(E){Z&&Z(E)}function pt(){wt.stop()}function Et(){wt.start()}const wt=new sp;wt.setAnimationLoop(z),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(E){Z=E,at.setAnimationLoop(E),E===null?wt.stop():wt.start()},at.addEventListener("sessionstart",pt),at.addEventListener("sessionend",Et),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(j),j=at.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,j,P),p=dt.get(E,y.length),p.init(j),y.push(p),yt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),it.setFromProjectionMatrix(yt),ot=this.localClippingEnabled,ct=bt.init(this.clippingPlanes,ot),g=ht.get(E,v.length),g.init(),v.push(g),at.enabled===!0&&at.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Ut(st,j,-1/0,x.sortObjects)}Ut(E,j,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(V,Q),se=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,se&&Kt.addToRenderList(g,E),this.info.render.frame++,ct===!0&&bt.beginShadows();const H=p.state.shadowsArray;Vt.render(H,E,j),ct===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,O=g.transmissive;if(p.setupLights(),j.isArrayCamera){const st=j.cameras;if(O.length>0)for(let ft=0,xt=st.length;ft<xt;ft++){const Y=st[ft];vt(q,O,E,Y)}se&&Kt.render(E);for(let ft=0,xt=st.length;ft<xt;ft++){const Y=st[ft];tt(g,E,Y,Y.viewport)}}else O.length>0&&vt(q,O,E,j),se&&Kt.render(E),tt(g,E,j);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,j),ge.resetDefaultState(),S=-1,A=null,y.pop(),y.length>0?(p=y[y.length-1],ct===!0&&bt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Ut(E,j,H,q){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){q&&Qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const ft=lt.update(E),xt=E.material;xt.visible&&g.push(E,ft,xt,H,Qt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){const ft=lt.update(E),xt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qt.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Qt.copy(ft.boundingSphere.center)),Qt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(xt)){const Y=ft.groups;for(let Rt=0,It=Y.length;Rt<It;Rt++){const St=Y[Rt],Zt=xt[St.materialIndex];Zt&&Zt.visible&&g.push(E,ft,Zt,H,Qt.z,St)}}else xt.visible&&g.push(E,ft,xt,H,Qt.z,null)}}const st=E.children;for(let ft=0,xt=st.length;ft<xt;ft++)Ut(st[ft],j,H,q)}function tt(E,j,H,q){const O=E.opaque,st=E.transmissive,ft=E.transparent;p.setupLightsView(H),ct===!0&&bt.setGlobalState(x.clippingPlanes,H),q&&Ct.viewport(C.copy(q)),O.length>0&&gt(O,j,H),st.length>0&&gt(st,j,H),ft.length>0&&gt(ft,j,H),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function vt(E,j,H,q){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ss(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const st=p.state.transmissionRenderTarget[q.id],ft=q.viewport||C;st.setSize(ft.z,ft.w);const xt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(F),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),se&&Kt.render(H);const Y=x.toneMapping;x.toneMapping=0;const Rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ct===!0&&bt.setGlobalState(x.clippingPlanes,q),gt(E,H,q),I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st),ie.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let St=0,Zt=j.length;St<Zt;St++){const ae=j[St],ce=ae.object,kt=ae.geometry,$t=ae.material,Ft=ae.group;if($t.side===2&&ce.layers.test(q.layers)){const Ae=$t.side;$t.side=1,$t.needsUpdate=!0,Tt(ce,H,q,kt,$t,Ft),$t.side=Ae,$t.needsUpdate=!0,It=!0}}It===!0&&(I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st))}x.setRenderTarget(xt),x.setClearColor(F,J),Rt!==void 0&&(q.viewport=Rt),x.toneMapping=Y}function gt(E,j,H){const q=j.isScene===!0?j.overrideMaterial:null;for(let O=0,st=E.length;O<st;O++){const ft=E[O],xt=ft.object,Y=ft.geometry,Rt=q===null?ft.material:q,It=ft.group;xt.layers.test(H.layers)&&Tt(xt,j,H,Y,Rt,It)}}function Tt(E,j,H,q,O,st){E.onBeforeRender(x,j,H,q,O,st),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,j,H,q,E,st),O.transparent===!0&&O.side===2&&O.forceSinglePass===!1?(O.side=1,O.needsUpdate=!0,x.renderBufferDirect(H,j,q,O,E,st),O.side=0,O.needsUpdate=!0,x.renderBufferDirect(H,j,q,O,E,st),O.side=2):x.renderBufferDirect(H,j,q,O,E,st),E.onAfterRender(x,j,H,q,O,st)}function _t(E,j,H){j.isScene!==!0&&(j=me);const q=qt.get(E),O=p.state.lights,st=p.state.shadowsArray,ft=O.state.version,xt=Jt.getParameters(E,O.state,st,j,H),Y=Jt.getProgramCacheKey(xt);let Rt=q.programs;q.environment=E.isMeshStandardMaterial?j.environment:null,q.fog=j.fog,q.envMap=(E.isMeshStandardMaterial?K:T).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?j.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",he),Rt=new Map,q.programs=Rt);let It=Rt.get(Y);if(It!==void 0){if(q.currentProgram===It&&q.lightsStateVersion===ft)return Xt(E,xt),It}else xt.uniforms=Jt.getUniforms(E),E.onBeforeCompile(xt,x),It=Jt.acquireProgram(xt,Y),Rt.set(Y,It),q.uniforms=xt.uniforms;const St=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=bt.uniform),Xt(E,xt),q.needsLights=At(E),q.lightsStateVersion=ft,q.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=It,q.uniformsList=null,It}function Lt(E){if(E.uniformsList===null){const j=E.currentProgram.getUniforms();E.uniformsList=Do.seqWithValue(j.seq,E.uniforms)}return E.uniformsList}function Xt(E,j){const H=qt.get(E);H.outputColorSpace=j.outputColorSpace,H.batching=j.batching,H.batchingColor=j.batchingColor,H.instancing=j.instancing,H.instancingColor=j.instancingColor,H.instancingMorph=j.instancingMorph,H.skinning=j.skinning,H.morphTargets=j.morphTargets,H.morphNormals=j.morphNormals,H.morphColors=j.morphColors,H.morphTargetsCount=j.morphTargetsCount,H.numClippingPlanes=j.numClippingPlanes,H.numIntersection=j.numClipIntersection,H.vertexAlphas=j.vertexAlphas,H.vertexTangents=j.vertexTangents,H.toneMapping=j.toneMapping}function Bt(E,j,H,q,O){j.isScene!==!0&&(j=me),I.resetTextureUnits();const st=j.fog,ft=q.isMeshStandardMaterial?j.environment:null,xt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xn,Y=(q.isMeshStandardMaterial?K:T).get(q.envMap||ft),Rt=q.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),St=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let ce=0;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=x.toneMapping);const kt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,$t=kt!==void 0?kt.length:0,Ft=qt.get(q),Ae=p.state.lights;if(ct===!0&&(ot===!0||E!==A)){const Oe=E===A&&q.id===S;bt.setState(q,E,Oe)}let ee=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Ae.state.version||Ft.outputColorSpace!==xt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==Y||q.fog===!0&&Ft.fog!==st||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==bt.numPlanes||Ft.numIntersection!==bt.numIntersection)||Ft.vertexAlphas!==Rt||Ft.vertexTangents!==It||Ft.morphTargets!==St||Ft.morphNormals!==Zt||Ft.morphColors!==ae||Ft.toneMapping!==ce||Ft.morphTargetsCount!==$t)&&(ee=!0):(ee=!0,Ft.__version=q.version);let ne=Ft.currentProgram;ee===!0&&(ne=_t(q,j,O));let xe=!1,Ge=!1,vn=!1;const pe=ne.getUniforms(),ke=Ft.uniforms;if(Ct.useProgram(ne.program)&&(xe=!0,Ge=!0,vn=!0),q.id!==S&&(S=q.id,Ge=!0),xe||A!==E){Ct.buffers.depth.getReversed()?(et.copy(E.projectionMatrix),lg(et),ug(et),pe.setValue(W,"projectionMatrix",et)):pe.setValue(W,"projectionMatrix",E.projectionMatrix),pe.setValue(W,"viewMatrix",E.matrixWorldInverse);const Ke=pe.map.cameraPosition;Ke!==void 0&&Ke.setValue(W,zt.setFromMatrixPosition(E.matrixWorld)),de.logarithmicDepthBuffer&&pe.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&pe.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,Ge=!0,vn=!0)}if(O.isSkinnedMesh){pe.setOptional(W,O,"bindMatrix"),pe.setOptional(W,O,"bindMatrixInverse");const Oe=O.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),pe.setValue(W,"boneTexture",Oe.boneTexture,I))}O.isBatchedMesh&&(pe.setOptional(W,O,"batchingTexture"),pe.setValue(W,"batchingTexture",O._matricesTexture,I),pe.setOptional(W,O,"batchingIdTexture"),pe.setValue(W,"batchingIdTexture",O._indirectTexture,I),pe.setOptional(W,O,"batchingColorTexture"),O._colorsTexture!==null&&pe.setValue(W,"batchingColorTexture",O._colorsTexture,I));const qe=H.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&re.update(O,H,ne),(Ge||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,pe.setValue(W,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ke.envMap.value=Y,ke.flipEnvMap.value=Y.isCubeTexture&&Y.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&j.environment!==null&&(ke.envMapIntensity.value=j.environmentIntensity),Ge&&(pe.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ft.needsLights&&le(ke,vn),st&&q.fog===!0&&Pt.refreshFogUniforms(ke,st),Pt.refreshMaterialUniforms(ke,q,U,X,p.state.transmissionRenderTarget[E.id]),Do.upload(W,Lt(Ft),ke,I)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Do.upload(W,Lt(Ft),ke,I),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&pe.setValue(W,"center",O.center),pe.setValue(W,"modelViewMatrix",O.modelViewMatrix),pe.setValue(W,"normalMatrix",O.normalMatrix),pe.setValue(W,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Oe=q.uniformsGroups;for(let Ke=0,yn=Oe.length;Ke<yn;Ke++){const ln=Oe[Ke];$.update(ln,ne),$.bind(ln,ne)}}return ne}function le(E,j){E.ambientLightColor.needsUpdate=j,E.lightProbe.needsUpdate=j,E.directionalLights.needsUpdate=j,E.directionalLightShadows.needsUpdate=j,E.pointLights.needsUpdate=j,E.pointLightShadows.needsUpdate=j,E.spotLights.needsUpdate=j,E.spotLightShadows.needsUpdate=j,E.rectAreaLights.needsUpdate=j,E.hemisphereLights.needsUpdate=j}function At(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,j,H){qt.get(E.texture).__webglTexture=j,qt.get(E.depthTexture).__webglTexture=H;const q=qt.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=H===void 0,q.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,j){const H=qt.get(E);H.__webglFramebuffer=j,H.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,H=0){P=E,M=j,w=H;let q=!0,O=null,st=!1,ft=!1;if(E){const Y=qt.get(E);if(Y.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(W.FRAMEBUFFER,null),q=!1;else if(Y.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(Y.__hasExternalTextures)I.rebindTextures(E,qt.get(E.texture).__webglTexture,qt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(Y.__boundDepthTexture!==St){if(St!==null&&qt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(ft=!0);const It=qt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[j])?O=It[j][H]:O=It[j],st=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?O=qt.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[H]:O=It,C.copy(E.viewport),k.copy(E.scissor),L=E.scissorTest}else C.copy(nt).multiplyScalar(U).floor(),k.copy(ut).multiplyScalar(U).floor(),L=Dt;if(Ct.bindFramebuffer(W.FRAMEBUFFER,O)&&q&&Ct.drawBuffers(E,O),Ct.viewport(C),Ct.scissor(k),Ct.setScissorTest(L),st){const Y=qt.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+j,Y.__webglTexture,H)}else if(ft){const Y=qt.get(E.texture),Rt=j||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Y.__webglTexture,H||0,Rt)}S=-1},this.readRenderTargetPixels=function(E,j,H,q,O,st,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=qt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){Ct.bindFramebuffer(W.FRAMEBUFFER,xt);try{const Y=E.texture,Rt=Y.format,It=Y.type;if(!de.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=E.width-q&&H>=0&&H<=E.height-O&&W.readPixels(j,H,q,O,fe.convert(Rt),fe.convert(It),st)}finally{const Y=P!==null?qt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(W.FRAMEBUFFER,Y)}}},this.readRenderTargetPixelsAsync=async function(E,j,H,q,O,st,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=qt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(xt=xt[ft]),xt){const Y=E.texture,Rt=Y.format,It=Y.type;if(!de.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=E.width-q&&H>=0&&H<=E.height-O){Ct.bindFramebuffer(W.FRAMEBUFFER,xt);const St=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,St),W.bufferData(W.PIXEL_PACK_BUFFER,st.byteLength,W.STREAM_READ),W.readPixels(j,H,q,O,fe.convert(Rt),fe.convert(It),0);const Zt=P!==null?qt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(W.FRAMEBUFFER,Zt);const ae=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await cg(W,ae,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,St),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,st),W.deleteBuffer(St),W.deleteSync(ae),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,j=null,H=0){E.isTexture!==!0&&(Ps("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-H),O=Math.floor(E.image.width*q),st=Math.floor(E.image.height*q),ft=j!==null?j.x:0,xt=j!==null?j.y:0;I.setTexture2D(E,0),W.copyTexSubImage2D(W.TEXTURE_2D,H,0,0,ft,xt,O,st),Ct.unbindTexture()};const Te=W.createFramebuffer(),te=W.createFramebuffer();this.copyTextureToTexture=function(E,j,H=null,q=null,O=0,st=null){E.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],j=arguments[2],st=arguments[3]||0,H=null),st===null&&(O!==0?(Ps("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=O,O=0):st=0);let ft,xt,Y,Rt,It,St,Zt,ae,ce;const kt=E.isCompressedTexture?E.mipmaps[st]:E.image;if(H!==null)ft=H.max.x-H.min.x,xt=H.max.y-H.min.y,Y=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,It=H.min.y,St=H.isBox3?H.min.z:0;else{const qe=Math.pow(2,-O);ft=Math.floor(kt.width*qe),xt=Math.floor(kt.height*qe),E.isDataArrayTexture?Y=kt.depth:E.isData3DTexture?Y=Math.floor(kt.depth*qe):Y=1,Rt=0,It=0,St=0}q!==null?(Zt=q.x,ae=q.y,ce=q.z):(Zt=0,ae=0,ce=0);const $t=fe.convert(j.format),Ft=fe.convert(j.type);let Ae;j.isData3DTexture?(I.setTexture3D(j,0),Ae=W.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(I.setTexture2DArray(j,0),Ae=W.TEXTURE_2D_ARRAY):(I.setTexture2D(j,0),Ae=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,j.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,j.unpackAlignment);const ee=W.getParameter(W.UNPACK_ROW_LENGTH),ne=W.getParameter(W.UNPACK_IMAGE_HEIGHT),xe=W.getParameter(W.UNPACK_SKIP_PIXELS),Ge=W.getParameter(W.UNPACK_SKIP_ROWS),vn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,kt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,kt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Rt),W.pixelStorei(W.UNPACK_SKIP_ROWS,It),W.pixelStorei(W.UNPACK_SKIP_IMAGES,St);const pe=E.isDataArrayTexture||E.isData3DTexture,ke=j.isDataArrayTexture||j.isData3DTexture;if(E.isDepthTexture){const qe=qt.get(E),Oe=qt.get(j),Ke=qt.get(qe.__renderTarget),yn=qt.get(Oe.__renderTarget);Ct.bindFramebuffer(W.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Ct.bindFramebuffer(W.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let ln=0;ln<Y;ln++)pe&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.get(E).__webglTexture,O,St+ln),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qt.get(j).__webglTexture,st,ce+ln)),W.blitFramebuffer(Rt,It,ft,xt,Zt,ae,ft,xt,W.DEPTH_BUFFER_BIT,W.NEAREST);Ct.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||qt.has(E)){const qe=qt.get(E),Oe=qt.get(j);Ct.bindFramebuffer(W.READ_FRAMEBUFFER,Te),Ct.bindFramebuffer(W.DRAW_FRAMEBUFFER,te);for(let Ke=0;Ke<Y;Ke++)pe?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.__webglTexture,O,St+Ke):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,qe.__webglTexture,O),ke?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Oe.__webglTexture,st,ce+Ke):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Oe.__webglTexture,st),O!==0?W.blitFramebuffer(Rt,It,ft,xt,Zt,ae,ft,xt,W.COLOR_BUFFER_BIT,W.NEAREST):ke?W.copyTexSubImage3D(Ae,st,Zt,ae,ce+Ke,Rt,It,ft,xt):W.copyTexSubImage2D(Ae,st,Zt,ae,Rt,It,ft,xt);Ct.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ke?E.isDataTexture||E.isData3DTexture?W.texSubImage3D(Ae,st,Zt,ae,ce,ft,xt,Y,$t,Ft,kt.data):j.isCompressedArrayTexture?W.compressedTexSubImage3D(Ae,st,Zt,ae,ce,ft,xt,Y,$t,kt.data):W.texSubImage3D(Ae,st,Zt,ae,ce,ft,xt,Y,$t,Ft,kt):E.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,st,Zt,ae,ft,xt,$t,Ft,kt.data):E.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,st,Zt,ae,kt.width,kt.height,$t,kt.data):W.texSubImage2D(W.TEXTURE_2D,st,Zt,ae,ft,xt,$t,Ft,kt);W.pixelStorei(W.UNPACK_ROW_LENGTH,ee),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ne),W.pixelStorei(W.UNPACK_SKIP_PIXELS,xe),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ge),W.pixelStorei(W.UNPACK_SKIP_IMAGES,vn),st===0&&j.generateMipmaps&&W.generateMipmap(Ae),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,j,H=null,q=null,O=0){return E.isTexture!==!0&&(Ps("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,q=arguments[1]||null,E=arguments[2],j=arguments[3],O=arguments[4]||0),Ps('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,j,H,q,O)},this.initRenderTarget=function(E){qt.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){M=0,w=0,P=null,Ct.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}function $u(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class uy extends Ws{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new my(e)}),this.register(function(e){return new gy(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new wy(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new xy(e)}),this.register(function(e){return new vy(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new py(e)}),this.register(function(e){return new My(e)}),this.register(function(e){return new _y(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new Sy(e)}),this.register(function(e){return new dy(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Cy(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=vr.extractUrlBase(t);o=vr.resolveURL(u,this.path)}else o=vr.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new np(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===lp){try{o[Re.KHR_BINARY_GLTF]=new Iy(t)}catch(l){s&&s(l);return}r=JSON.parse(o[Re.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Vy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case Re.KHR_MATERIALS_UNLIT:o[l]=new fy;break;case Re.KHR_DRACO_MESH_COMPRESSION:o[l]=new Py(r,this.dracoLoader);break;case Re.KHR_TEXTURE_TRANSFORM:o[l]=new Ly;break;case Re.KHR_MESH_QUANTIZATION:o[l]=new Dy;break;default:d.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function hy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dy{constructor(t){this.parser=t,this.name=Re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],xn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new hl(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new c0(h),u.distance=l;break;case"spot":u=new o0(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,fi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class fy{constructor(){this.name=Re.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(t,e,n){const s=[];t.color=new ue(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],xn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,He))}return Promise.all(s)}}class py{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class my{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new oe(a,a)}return Promise.all(r)}}class gy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class _y{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class by{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ue(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],xn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,He)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class xy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new ue().setRGB(a[0],a[1],a[2],xn),Promise.all(r)}}class yy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class My{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new ue().setRGB(a[0],a[1],a[2],xn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,He)),Promise.all(r)}}class Sy{constructor(t){this.parser=t,this.name=Re.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ay{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Ey{constructor(t){this.parser=t,this.name=Re.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Ty{constructor(t){this.parser=t,this.name=Re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class wy{constructor(t){this.parser=t,this.name=Re.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Ry{constructor(t){this.name=Re.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(f),h,l,d,s.mode,s.filter),f})})}else return null}}class Cy{constructor(t){this.name=Re.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Fn.TRIANGLES&&u.mode!==Fn.TRIANGLE_STRIP&&u.mode!==Fn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,f=[];for(const m of l){const _=new _e,g=new N,p=new an,v=new N(1,1,1),y=new Og(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,v));for(const x in c)if(x==="_COLOR_0"){const R=c[x];y.instanceColor=new Rc(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Ve.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const lp="glTF",ar=12,Yu={JSON:1313821514,BIN:5130562};class Iy{constructor(t){this.name=Re.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==lp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ar,r=new DataView(t,ar);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Yu.JSON){const u=new Uint8Array(t,ar+o,a);this.content=n.decode(u)}else if(c===Yu.BIN){const u=ar+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Py{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Re.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=Fc[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=Fc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Ns[d.componentType];u[l]=f.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}l(f)},a,u,xn,d)})})}}class Ly{constructor(){this.name=Re.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Dy{constructor(){this.name=Re.KHR_MESH_QUANTIZATION}}class up extends Ir{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,d=l*l,f=d*l,m=t*u,_=m-u,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+l;for(let x=0;x!==a;x++){const R=o[_+x+a],M=o[_+x+c]*h,w=o[m+x+a],P=o[m+x]*h;r[x]=v*R+y*M+g*w+p*P}return r}}const Fy=new an;class Ny extends up{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Fy.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zu={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Ju={33071:1001,33648:1002,10497:1e3},qa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Uy={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},Ka={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ky(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function Hi(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Oy(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function By(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Gy(i){let t;const e=i.extensions&&i.extensions[Re.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+$a(e.attributes):t=i.indices+":"+$a(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+$a(i.targets[n]);return t}function $a(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Nc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Hy=new _e;class Vy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new cl(this.options.manager):this.textureLoader=new d0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new np(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Hi(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Re.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(vr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=qa[s.type],a=Ns[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new De(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=qa[s.type],u=Ns[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(f&&f!==l){const p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=e.cache.get(v);y||(_=new u(a,p*f,s.count*f/h),y=new el(_,f/h),e.cache.add(v,y)),g=new Xn(y,c,d%f/h,m)}else a===null?_=new u(s.count*c):_=new u(a,d,s.count*c),g=new De(_,c,m);if(s.sparse!==void 0){const p=qa.SCALAR,v=Ns[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,R=new v(o[1],y,s.sparse.count*p),M=new u(o[2],x,s.sparse.count*c);a!==null&&(g=new De(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,P=R.length;w<P;w++){const S=R[w];if(g.setX(S,M[w*c]),c>=2&&g.setY(S,M[w*c+1]),c>=3&&g.setZ(S,M[w*c+2]),c>=4&&g.setW(S,M[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zu[d.magFilter]||1006,h.minFilter=Zu[d.minFilter]||1008,h.wrapS=Ju[d.wrapS]||1e3,h.wrapT=Ju[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Ze(_);g.needsUpdate=!0,d(g)}),e.load(vr.resolveURL(l,r.path),m,void 0,f)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),fi(l,o),l.userData.mimeType=o.mimeType||zy(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Re.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Re.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Re.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new rl,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new $f,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return vi}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[Re.KHR_MATERIALS_UNLIT]){const l=s[Re.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],xn),a.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,He)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||Ka.OPAQUE;if(h===Ka.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ka.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==en&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){const l=r.emissiveFactor;a.emissive=new ue().setRGB(l[0],l[1],l[2],xn)}return r.emissiveTexture!==void 0&&o!==en&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,He)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),fi(l,r),e.associations.set(l,{materials:t}),r.extensions&&Hi(s,l,r),l})}createUniqueName(t){const e=Fe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Qu(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=Gy(u),l=s[h];if(l)o.push(l.promise);else{let d;u.extensions&&u.extensions[Re.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Qu(new Xe,u,e),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?ky(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const v=u[f];if(g.mode===Fn.TRIANGLES||g.mode===Fn.TRIANGLE_STRIP||g.mode===Fn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Ng(_,v):new we(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Fn.TRIANGLE_STRIP?p.geometry=$u(p.geometry,1):g.mode===Fn.TRIANGLE_FAN&&(p.geometry=$u(p.geometry,2));else if(g.mode===Fn.LINES)p=new zg(_,v);else if(g.mode===Fn.LINE_STRIP)p=new sl(_,v);else if(g.mode===Fn.LINE_LOOP)p=new Hg(_,v);else if(g.mode===Fn.POINTS)p=new Yf(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&By(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),fi(p,r),g.extensions&&Hi(s,p,g),e.assignFinalMaterial(p),l.push(p)}for(let f=0,m=l.length;f<m;f++)e.associations.set(l[f],{meshes:t,primitives:f});if(l.length===1)return r.extensions&&Hi(s,l[0],r),l[0];const d=new fn;r.extensions&&Hi(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=l.length;f<m;f++)d.add(l[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new _n(Ff.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new ul(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const d=new _e;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new nl(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const f=s.channels[l],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),u.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],f=l[1],m=l[2],_=l[3],g=l[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],R=f[v],M=m[v],w=_[v],P=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,R,M,w,P);if(S)for(let A=0;A<S.length;A++)p.push(S[A])}return new Pc(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Hy)});for(let f=0,m=l.length;f<m;f++)h.add(l[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new qf:u.length>1?h=new fn:u.length===1?h=u[0]:h=new Ve,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&Hi(n,h,r),r.matrix!==void 0){const l=new _e;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new fn;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Hi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,f]of s.associations)(d instanceof Un||d instanceof Ze)&&l.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&l.set(d,f)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];Ri[r.path]===Ri.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(Ri[r.path]){case Ri.weights:u=Bs;break;case Ri.rotation:u=Gs;break;case Ri.position:case Ri.scale:u=zs;break;default:switch(n.itemSize){case 1:u=Bs;break;case 2:case 3:default:u=zs;break}break}const h=s.interpolation!==void 0?Uy[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new u(c[d]+"."+Ri[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Nc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Gs?Ny:up;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Wy(i,t,e){const n=t.attributes,s=new cn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(u[0],u[1],u[2])),a.normalized){const h=Nc(Ns[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new N,c=new N;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Nc(Ns[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Qu(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Fc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Le.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Le.workingColorSpace}" not supported.`),fi(i,t),Wy(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Oy(i,t.targets,e):i})}var jy=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function a(p){for(var v=new Uint8Array(p.length),y=0;y<p.length;++y){var x=p.charCodeAt(y);v[y]=x>96?x-97:x>64?x-39:x+4}for(var R=0,y=0;y<p.length;++y)v[R++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,R)}function c(p,v,y,x,R,M){var w=r.exports.sbrk,P=y+3&-4,S=w(P*x),A=w(R.length),C=new Uint8Array(r.exports.memory.buffer);C.set(R,A);var k=p(S,y,x,A,R.length);if(k==0&&M&&M(S,P,x),v.set(C.subarray(S,S+y*x)),w(S-w(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(y){var x=y.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),y=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(y),R=0;R<p;++R)l[R]=f(x);URL.revokeObjectURL(x)}function _(p,v,y,x,R){for(var M=l[0],w=1;w<l.length;++w)l[w].pending<M.pending&&(M=l[w]);return new Promise(function(P,S){var A=new Uint8Array(y),C=d++;M.pending+=p,M.requests[C]={resolve:P,reject:S},M.object.postMessage({id:C,count:p,size:v,source:A,mode:x,filter:R},[A.buffer])})}function g(p){o.then(function(){var v=p.data;try{var y=new Uint8Array(v.count*v.size);c(r.exports[v.mode],y,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(x){self.postMessage({id:v.id,count:v.count,action:"reject",value:x})}})}return{ready:o,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,y,x,R){c(r.exports.meshopt_decodeVertexBuffer,p,v,y,x,r.exports[u[R]])},decodeIndexBuffer:function(p,v,y,x){c(r.exports.meshopt_decodeIndexBuffer,p,v,y,x)},decodeIndexSequence:function(p,v,y,x){c(r.exports.meshopt_decodeIndexSequence,p,v,y,x)},decodeGltfBuffer:function(p,v,y,x,R,M){c(r.exports[h[R]],p,v,y,x,r.exports[u[M]])},decodeGltfBufferAsync:function(p,v,y,x,R){return l.length>0?_(p,v,y,h[x],u[R]):o.then(function(){var M=new Uint8Array(p*v);return c(r.exports[h[x]],M,p,v,y,r.exports[u[R]]),M})}}})();function ml(){return new uy().setMeshoptDecoder(jy)}let hp="";function Xy(i){hp=i===""||i.endsWith("/")?i:`${i}/`}const bn=i=>`${hp}${i}`,qy=.001,Ky=.5,th={playing:!1,settling:!1,stillFor:0,pending:1},dp=i=>i.playing||i.settling||i.pending>0,$y=i=>!i.playing&&!i.settling,Yy=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),Zy=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,Jy=i=>dp(i)?i:{...i,pending:1};function Qy(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<qy?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<Ky}}function eh(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const Ni="#c8f323",tM="#0b0f10";function eM(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const nM=eM(Ni),iM=Ni,sM="#7aa2ff",rM="#ffb340",oM="#b18cff",aM=Ni,cM=Ni,cr=new N;function Ln(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;cr.copy(t),cr[n]=0,cr.normalize();const u=.5*o/(o+a),h=1-cr.angleTo(i)/c;return Math.sign(cr[e])===1?h*u:a/(o+a)+u+u*(1-h)}class lM extends bi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,c=new N,u=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new N,_=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[g+0]=u.x*Math.sign(a.x)+c.x*r,h[g+1]=u.y*Math.sign(a.y)+c.y*r,h[g+2]=u.z*Math.sign(a.z)+c.z*r,l[g+0]=c.x,l[g+1]=c.y,l[g+2]=c.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=Ln(m,c,"z","y",r,n),d[p+1]=1-Ln(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[p+0]=1-Ln(m,c,"z","y",r,n),d[p+1]=1-Ln(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[p+0]=1-Ln(m,c,"x","z",r,t),d[p+1]=Ln(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-Ln(m,c,"x","z",r,t),d[p+1]=1-Ln(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-Ln(m,c,"x","y",r,t),d[p+1]=1-Ln(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[p+0]=Ln(m,c,"x","y",r,t),d[p+1]=1-Ln(m,c,"y","x",r,e);break}}}const nh=["technical","tactical","physical","social"],ih=["auto","authored","off"],fp=/\bwall\b/i,sh=["n","e","s","w"],uM={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},rh=1.8,oh=7.32,hM=6;function as(i,t){return i.width!==void 0&&i.width<hM?i.width/2:t}function pp(i){return Math.min(Math.max(i*.5,1),2.44)}const ah=["save","beaten"],uo=["throw","roll","kick"],ho=["throw","roll"],ch=["lofted","ground"],dM=3.35,fM=1,lh=12,Uc=["walk","jog","run","sprint"],uh=["walk","jog","run"];function Vo(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const pM=new Set(["move","dribble","pass","shoot","tackle","collect"]),hh=/^#[0-9a-fA-F]{6}$/;function Yt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function di(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&Yt(t,"expected [x, y] numbers"),i}function mM(i){var o,a,c,u,h;const t=i;t.version!==1&&Yt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||Yt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&Yt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&Yt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||Yt("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!hh.test(d))&&Yt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||Yt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&Yt(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||Yt(`players[${d}].team`,`unknown team ${l.team}`),di(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&Yt(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(di((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&Yt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||Yt("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&Yt(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&Yt(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&Yt(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((f,m)=>{(typeof(f==null?void 0:f.t)!="number"||f.t<0)&&Yt(`balls[${d}].path[${m}].t`,"seconds >= 0 required"),m>0&&f.t<=l.path[m-1].t&&Yt(`balls[${d}].path[${m}].t`,"times must ascend"),di(f.at,`balls[${d}].path[${m}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&Yt(`equipment[${d}].type`,String(l.type)),di(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&Yt(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=rh-1e-9&&l.width<=oh+1e-9||Yt(`equipment[${d}].width`,`expected ${rh}..${oh} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&Yt(`equipment[${d}].facing`,"only a goal has a facing"),sh.includes(l.facing)||Yt(`equipment[${d}].facing`,`expected one of ${sh.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||Yt(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||Yt("events","expected an array"),t.events.forEach((l,d)=>{var f;if((typeof l.t!="number"||l.t<0)&&Yt(`events[${d}].t`,"seconds >= 0 required"),pM.has(l.type)||Yt(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),di(l.to,`events[${d}].to`),l.gait!==void 0&&!Uc.includes(l.gait)&&Yt(`events[${d}].gait`,`expected one of ${Uc.join("|")}, got ${String(l.gait)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),di(l.to,`events[${d}].to`),l.gait!==void 0&&!uh.includes(l.gait)&&Yt(`events[${d}].gait`,`expected one of ${uh.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&Yt(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&Yt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&Yt(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(uo.includes(l.style)||Yt(`events[${d}].style`,`expected one of ${uo.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!ho.includes(l.style)&&Yt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${ho.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&Yt(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||Yt(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let m=[...((f=t.players.find(_=>_.id===l.to))==null?void 0:f.start)??[0,0]];for(let _=0;_<d;_++){const g=t.events[_];(g.type==="move"||g.type==="dribble")&&g.player===l.to&&(m=[...g.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const g=Math.hypot(m[0]-_.at[0],m[1]-_.at[1]);g<lh&&Yt(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${g.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${lh} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&Yt(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||Yt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((m,_)=>_<d&&m.type!=="move")&&Yt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const m=l.deflect;(typeof m!="object"||m===null||Array.isArray(m))&&Yt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),di(m.to,`events[${d}].deflect.to`),ch.includes(m.style)||Yt(`events[${d}].deflect.style`,`expected one of ${ch.join("|")}, got ${String(m.style)}`),l.type==="pass"&&!s.has(l.to)&&Yt(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&m.style==="ground")&&!s.size&&Yt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const p=_.facing==="e"||_.facing==="w"?m.to[1]-_.at[1]:m.to[0]-_.at[0];if(Math.abs(p)>as(_,dM))continue;(_.facing!==void 0?{n:m.to[1]-_.at[1],s:_.at[1]-m.to[1],e:m.to[0]-_.at[0],w:_.at[0]-m.to[0]}[_.facing]:_.at[1]<=t.pitch.length/2?m.to[1]-_.at[1]:_.at[1]-m.to[1])<=fM&&Yt(`events[${d}].deflect.to`,`[${m.to[0]}, ${m.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&Yt(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&Yt(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),di(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&Yt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&Yt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&Yt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&Yt(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&Yt(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(uo.includes(l.style)||Yt(`events[${d}].style`,`expected one of ${uo.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!ho.includes(l.style)&&Yt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${ho.join(" or ")})`),l.flightStyle!=="ground"&&Yt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&Yt(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&Yt(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&Yt(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const m=l.newBall;m!==void 0&&(typeof m!="boolean"&&Yt(`events[${d}].newBall`,`expected a boolean, got ${String(m)}`),m&&!t.events.some((_,g)=>g<d&&_.type!=="move")&&Yt(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&Yt("overlays","expected an object"),l.runPaths!==void 0&&!ih.includes(l.runPaths)&&Yt("overlays.runPaths",`expected one of ${ih.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||Yt("overlays.zones","expected an array"),l.zones.forEach((d,f)=>{di(d.at,`overlays.zones[${f}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||Yt(`overlays.zones[${f}]`,"w/h metres > 0 required"),d.color!==void 0&&!nh.includes(d.color)&&!hh.test(d.color)&&Yt(`overlays.zones[${f}].color`,`expected ${nh.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&Yt(`overlays.zones[${f}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&Yt("keeper","expected { outcome: save | beaten }"),ah.includes(t.keeper.outcome)||Yt("keeper.outcome",`expected one of ${ah.join("|")}, got ${String(t.keeper.outcome)}`)),t}function gM(i){const t=new vi({color:aM,roughness:.6,toneMapped:!1}),e=new fn,n=new we(new lM(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new oe(.17,.06),new oe(.15,.1)];for(let o=0;o<=8;o++)s.push(new oe(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new oe(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new we(new ol(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function mp(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),d=(Math.floor(h/5)+.15+a()*.7)*(e/4),f=(40+a()*120)*(t/1024),m=a()>.5,_=i.createRadialGradient(l,d,0,l,d,f);_.addColorStop(0,m?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(l-f,d-f,2*f,2*f)}gp(i,t,e,a,1)}function gp(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function _M(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");mp(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),_p(n);const s=new wn(e);return s.colorSpace=He,s.flipY=!1,s}function _p(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const bM=2.5;function bp(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const on=6;function xM(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");mp(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),_p(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,d,f]of a){const m=s.createLinearGradient(h,l,d,f);m.addColorStop(0,"rgba(0,0,0,0.55)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(0,0,1024,1024)}const c=bM*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",bp(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new wn(n);return u.colorSpace=He,u.flipY=!1,u}function vM(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",bp(t,40,40,176,176,34),t.fill();const e=new wn(i);return e.flipY=!1,e}let lr=null;function yM(){if(lr)return lr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),lr=new wn(i),lr.userData.shared=!0,lr}function MM(i){const t=new we(new ea(i/2,24).rotateX(-Math.PI/2),new en({map:yM(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const qn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},SM=.5;function Tr(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*as(s,qn.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*SM*(o/r.length)))}return n}function AM(i){const t=as(i,qn.halfW);return t===qn.halfW?qn:{halfW:t,top:pp(i.width),zMin:-Ii,zMax:Ii}}function xp(i,t){return i.facing!==void 0?uM[i.facing]:i.at[1]>t/2?Math.PI:0}const Ii=.08;function EM(i){const t=pp(i),e=new vi({color:"#FFFFFF",roughness:.5}),n=new fn,s=i/2-Ii;for(const o of[-1,1]){const a=new we(new Ar(Ii,Ii,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new we(new Ar(Ii,Ii,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Ii,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const vp=.8;function TM(i,t,e){const n=new we(new bi(e?i:t,vp,e?t:i),new vi({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function yp(i,t){i.scale.set(1,t,1),i.position.y=vp*t/2}let dh=null;function wM(i){return dh??(dh=i.loadAsync(bn("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw dh=null,t}))}let fh=!1;function RM(i,t){if(fh||!t)return;fh=!0;const e=new cn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-qn.halfW)>.05||Math.abs(s-qn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${qn.halfW}, top ${s.toFixed(3)} vs ${qn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function CM(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new N(n*(t/2+on),0,s*(e/2+on)))}function kc(i,t){const{width:e,length:n}=i.pitch,s=Tr(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=AM(o),h=xp(o,n),l=Math.cos(h),d=Math.sin(h);for(const f of[-u.halfW*s,u.halfW*s])for(const m of[0,u.top*s])for(const _ of[u.zMin*s,u.zMax*s])r.push(new N(a+f*l+_*d,m,c-f*d+_*l))}return r}const IM=600,Mp=IM/2*Math.SQRT2,ph=30,PM=-.06,LM=-.04,DM=660496,FM="#04170c",mh=.7,Sp=1.2;function NM(i,t,e){const n=Math.max(t,e),s=n/2+on,r=Sp*n;return r>s?1-(1-mh)*gl((i-s)/(r-s)):i>=s?mh:1}function gl(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const UM=1.6,kM=2.6;function OM(i,t){const e=Math.max(i,t);return{near:UM*e+on,far:kM*e+on}}const gh="#0b1f22",Ya="#010203",BM=1.02;function GM(i,t){return Math.hypot(i/2+on,t/2+on)*BM}const zM=.12,HM=1.15,_l=(i,t)=>Math.hypot(i/2,t/2),Ap=(i,t)=>_l(i,t)*HM,fo=12,Za=18,_h=.3,VM=2.4,bh=1.2,WM=.4,jM=6;function XM(i,t,e=1/0){const n=i/2+on,s=t/2+on,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=qM(o,a,e*KM),u=[-(a+c),a+c],h=-(o+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function qM(i,t,e){if(!(e<Math.hypot(i+fo,t+fo)))return fo;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(fo,(-n+Math.sqrt(r))/2)):0}const KM=.97;function bl(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=FM,t.fillRect(0,0,512,512);let e=7;gp(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new wn(i);return n.colorSpace=He,n.wrapS=n.wrapT=1e3,n}function $M(){const i=new fn,t=new Er({color:1251867}),e=new we(new bi(_h,Za,_h),t);e.position.y=Za/2;const n=new we(new bi(VM,bh,WM),t);n.position.y=Za+bh/2;const s=new Dg(new jf({map:YM(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(jM),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let ur=null;function YM(){if(ur)return ur;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ur=new wn(i),ur.userData.shared=!0,ur}function ZM(){return[[0,Ya],[Bc,gh],[tS,gh],[xl,Ya],[1,Ya]]}function JM(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of ZM())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new wn(i);return n.colorSpace=He,n.wrapS=n.wrapT=1001,n}const Oc=.03,xh=.06,QM=.28,xl=1,Bc=xl*xh/(xh+QM-Oc),tS=.85;function eS(i,t={repeat:0,offset:0}){const e=Math.max(i,Oc+.03);return t.repeat=(xl-Bc)/(e-Oc),t.offset=Bc-t.repeat*(1-e),t}const nS=60,iS=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<nS,sS=-1e3;function Ep(i,t,e,n,s,r){const o=new Er({map:e,vertexColors:!0}),a=new Er({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=Sp*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,f]of u){const m=l===n,_=new na(l,d,128,f).rotateX(-Math.PI/2),g=_.getAttribute("position"),p=_.getAttribute("uv"),v=m?4:3,y=new Float32Array(g.count*v);for(let R=0;R<g.count;R++){const M=g.getX(R),w=g.getZ(R);p.setXY(R,M/ph,w/ph);const P=Math.hypot(M,w),S=NM(P,i,t);y[v*R]=y[v*R+1]=y[v*R+2]=S,m&&(y[v*R+3]=d>l?1-gl((P-l)/(d-l)):1)}p.needsUpdate=!0,_.setAttribute("color",new De(y,v));const x=new we(_,m?a:o);x.userData[r]=m,x.position.y=PM,h.push(x)}return h}function rS(i,t,e=1,n=bl()){const s=new fn;n.anisotropy=e;for(const r of Ep(i,t,n,_l(i,t),Ap(i,t),"floatRim"))s.add(r);return s}const Ja=16;function oS(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=_l(i,t),c=Ap(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=Ja;l++){const d=Math.round(255*(1-gl(l/Ja)));u.addColorStop(l/Ja,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new wn(n);return h.flipY=!1,h}function aS(i,t,e=1,n=Mp,s=bl()){const r=new fn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+on+1),a=o*(1-zM),c=Math.max(a,Math.max(i,t)/2+on);for(const h of Ep(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=XM(i,t,o);for(const[h,l]of u){const d=$M();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function cS(i,t,e=1,n=1,s=Mp){var A;const r=Tr(t,n),{width:o,length:a}=t.pitch,c=(C,k=0)=>new N(C[0]-o/2,k,C[1]-a/2),u=C=>(C.anisotropy=e,C),h=u(xM(o,a,on)),l=()=>new $n(o+2*on,a+2*on).rotateX(-Math.PI/2),d=new we(l(),new Er({map:h,transparent:!0})),f=new we(l(),new Er({map:h,alphaMap:oS(o,a,on),transparent:!0}));for(const C of[d,f])C.position.y=-.02,C.renderOrder=-1,C.receiveShadow=!0;const m=new we(new $n((o+2*on)*1.5,(a+2*on)*1.5).rotateX(-Math.PI/2),new en({map:vM(),transparent:!0,depthWrite:!1}));m.position.y=LM,m.renderOrder=-2,i.add(m);const _=new we(new $n(o,a).rotateX(-Math.PI/2),new vi({map:u(_M(o,a)),roughness:.9}));_.receiveShadow=!0;const g=bl(),p=aS(o,a,e,s,g),v=rS(o,a,e,g);i.add(d,f,_,p,v);const y=C=>{p.visible=C,m.visible=C,d.visible=C,v.visible=!C,f.visible=!C};y(!0);const x=p.children.filter(C=>C.name==="mast"),R=C=>{for(const k of x)k.visible=C};R(!1);const M=ml(),w=[],P=[];for(const C of t.equipment??[])if(C.type==="cone"){const k=gM(n);k.position.copy(c(C.at,0)),i.add(k),P.push(k)}else{const k=as(C,qn.halfW)!==qn.halfW,L=k?EM(C.width):(await wM(M)).clone();L.position.copy(c(C.at)),L.rotation.y=xp(C,a),L.scale.setScalar(r),i.add(L),w.push(L),k||RM(L,r)}const S=[];for(const C of((A=t.overlays)==null?void 0:A.zones)??[]){if(!fp.test(C.label??""))continue;const k=TM(Math.max(C.w,C.h),Math.min(C.w,C.h),C.w>=C.h),L=c(C.at);k.position.set(L.x,0,L.z),yp(k,n),i.add(k),S.push(k)}return{toWorld:c,goals:w,cones:P,boards:S,setWorld:y,setMasts:R}}const vh=new N(10,20,8).normalize(),lS=1.05,Gc=2048,uS=1024,hS=1600,dS=(i,t)=>Math.max(i,t)>=hS?Gc:uS,fS=5;function pS(i){const t=new cn().setFromPoints(i).getCenter(new N);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function sa(i,t=()=>new ly({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=eh(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=lS,e.outputColorSpace=He,i.appendChild(o);const a=new Lg;a.background=new ue(tM);const c=new _n(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new hl(16772564,fS);u.position.copy(vh).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(Gc,Gc),u.shadow.radius=4,a.add(u,u.target,new s0(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var yt;const et=dS(s.width*h,s.height*h);u.shadow.mapSize.width!==et&&(u.shadow.mapSize.set(et,et),(yt=u.shadow.map)==null||yt.dispose(),u.shadow.map=null)}l();function d(){const et=eh(i,window,s),yt=Math.min(devicePixelRatio,2),zt=yt!==h;if(zt&&(h=yt,e.setPixelRatio(h)),et.width!==s.width||et.height!==s.height){s=et,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),A();for(const Qt of[...r])Qt()}else zt&&(e.setSize(s.width,s.height,!1),l(),A())}const f=typeof ResizeObserver=="function"?new ResizeObserver(d):null;f?f.observe(i):addEventListener("resize",d);let m=null;const _=()=>{g(),d()};function g(){m==null||m.removeEventListener("change",_),m=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,m==null||m.addEventListener("change",_)}g();let p=!0,v=!1,y=0;function x(){v||(v=!0,y=requestAnimationFrame(U))}function R(){p=!document.hidden,p&&(k=-1,x())}document.addEventListener("visibilitychange",R);let M=!0,w=th,P=0;const S=new N;function A(){w=Jy(w),p&&(v||(k=-1),x())}let C=()=>{},k=-1,L=null,F=null,J=null,G=!0;function X(et,yt){if(C(et,yt),ot(),L&&a.fog){const zt=c.position.length();a.fog.near=zt+L.near,a.fog.far=zt+L.far}e.render(a,c),P++}function U(et){if(v=!1,!p)return;const yt=k<0?0:(et-k)/1e3;k=et,S.copy(c.position),X(yt,et),w=Qy(w,S.distanceTo(c.position),yt),M||dp(w)?x():k=-1}function V(et){if(!et.length)return;const{centre:yt,radius:zt,distance:Qt,far:me}=pS(et);u.target.position.copy(yt),u.target.updateMatrixWorld(),u.position.copy(vh).multiplyScalar(Qt).add(yt);const se=u.shadow.camera;se.left=-zt,se.right=zt,se.top=zt,se.bottom=-zt,se.near=.5,se.far=me,se.updateProjectionMatrix()}function Q(et){if(L=et,!et){a.fog=null;return}a.fog??(a.fog=new tl(DM,et.near,et.far))}function nt(et){if(J=et,!et){F&&(F.visible=!1);return}F||(F=new we(new $n(1,1),new en({map:JM(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),F.renderOrder=sS,F.frustumCulled=!1,a.add(F)),F.visible=G}function ut(et){G=et,F&&(F.visible=et&&!!J)}const Dt=new N,it=new N,ct={repeat:0,offset:0};function ot(){if(!F||!J)return;if(!G){F.visible=!1;return}if(c.getWorldDirection(Dt),F.visible=iS(Dt.y),!F.visible)return;const et=Math.hypot(c.position.x,c.position.z)||1;it.set(-c.position.x/et*J,0,-c.position.z/et*J),it.project(c);const yt=(1-it.y)/2,zt=c.near*1.5,Qt=2*zt*Math.tan(c.fov*Math.PI/360);F.scale.set(Qt*c.aspect,Qt,1),F.quaternion.copy(c.quaternion),F.position.copy(c.position).addScaledVector(Dt,zt),eS(yt,ct);const me=F.material.map;me.repeat.set(1,ct.repeat),me.offset.set(0,ct.offset)}return{scene:a,camera:c,renderer:e,fitShadow:V,setFog:Q,setHorizon:nt,setSky:ut,size:()=>({...s}),remeasure:d,onBox(et){return r.add(et),()=>{r.delete(et)}},start(et){C=et,x()},park(et){C===et&&(cancelAnimationFrame(y),v=!1,C=()=>{},w=th,P=0,k=-1)},step(et,yt=performance.now()){X(et,yt)},frames:()=>P,rule:{enable(){M=!1},play(){w=Yy(w),A()},pause(){w=Zy(w),A()},wake:A,snap:()=>$y(w)},dispose(){p=!1,r.clear(),m==null||m.removeEventListener("change",_),f?f.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",R),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function Tp(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of wp(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);vl(i)}function vl(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of wp(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const wp=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function mS(i){const t=new Map,e=new Map,n=i.clone();return Rp(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Rp(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Rp(i.children[n],t.children[n],e)}const yh="134827f8",Cp=24,gS=/^[\w-]+$/,_S=async i=>await(await fetch(bn(`drills/${i}.json`))).json();class bS{constructor(t=_S,e=null,n=Cp){Pe(this,"mem",new Map);Pe(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===yh)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:yh,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&gS.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const xS="tactivo-engine",Vi="drills",Mh=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function vS(){try{return globalThis.indexedDB}catch{return}}function yS(i=vS()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(xS,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(Vi)&&r.result.deleteObjectStore(Vi),r.result.createObjectStore(Vi)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(Vi,"readonly").objectStore(Vi);return await Mh(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await Mh(r.transaction(Vi,"readwrite").objectStore(Vi).put(s,n))}catch{}}}}const zc=["plain","stripes","hoops","halves","sash","sleeves"],Sh=["mixed","light","mediumLight","medium","mediumDark","dark"],MS="mixed",Ip="#FFFFFF",Qa=/^#[0-9a-fA-F]{6}$/;function Ah(i){if(typeof i!="object"||i===null)return We("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!Qa.test(t.a)))return We("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!Qa.test(t.b)))return We("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!zc.includes(t.pattern)))return We(`kit: pattern must be one of ${zc.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!Qa.test(t[e])))return We(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!Sh.includes(t.skin))?We(`kit: skin must be one of ${Sh.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??Ip,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const Eh=["boys","girls","mixed"],yl="mixed";function Th(i){return i==null?yl:typeof i!="string"||!Eh.includes(i)?We(`squad: must be one of ${Eh.join(", ")}`):i}const wh=["shirt","full"],ra="shirt";function Rh(i){return i==null?ra:typeof i!="string"||!wh.includes(i)?We(`framing: must be one of ${wh.join(", ")}`):i}const Ch=new Set(["fit","broadcast"]),Ml=.5,SS=5,AS={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},ES=100,Wo=1/0,TS=2e3,tc=/^[\w-]+$/,wS=/^[A-Za-z0-9_./-]{1,80}$/,RS=i=>wS.test(i)&&!i.includes(".."),CS=30,IS=85,PS=i=>Math.min(Math.max(i,CS),IS),es=i=>({state:i,effects:[],out:[]}),Fo=(i,t,e)=>({state:i,effects:[],out:[{type:"error",code:t,message:e}]}),LS=new Set(["auto","authored","off"]),DS=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function FS(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?Pp(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const Pp=i=>Math.min(Math.max(i,Ml),SS);function Lp(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const Sl=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},Al=(i,t)=>{var n;const e=Sl(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},We=i=>({error:i,code:"bad_message"});function NS(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||DS.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return We("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return We("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!tc.test(n.key)))return{error:`load: key must match ${tc.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return We("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return We("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return We("load: intro.hold must be a finite number");s={text:a.text,hold:Pp(a.hold)}}let r;if(t.kit!==void 0){const a=Ah(t.kit);if("error"in a)return a;r=a}const o=Th(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{}}}case"preview":case"kit":{const e=Ah(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=Rh(t.framing);if(typeof n!="string")return n;const s=Th(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=Rh(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return We("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&RS(n)?{track:n}:{}}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&tc.test(e)).slice(0,Cp)}:We("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?We("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?We("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?We("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?We("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!Ch.has(t.follow)?We(`setCamera: follow must be one of ${[...Ch].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?We("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return We(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!LS.has(t.runPaths))return We("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return We(`unknown message type: ${t.type}`)}}function US(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??ra,squad:t.squad??yl}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return i.phase==="idle"?es(i):{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return Fo(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return Fo(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:PS(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?es(i):Fo(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function Wi(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return es(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:Lp(n,0),a=r?s?Math.max(t.hookHold,Ml):r.hold:0,c=r?a:Sl(n,o),u=s?Wo:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+TS:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:Al(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?es(i):Fo({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`);case"hookEnded":return i.holdUntilMs!==Wo?es(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function kS(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Wo?i.hookCeilingMs:i.holdUntilMs;return e<c?es(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=Lp(i.narration,t),s=i.playing&&e-i.lastTimeMs>=ES;if(n===i.cue&&!s)return es(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?Sl(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[Al(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const El=["shirt","jersey","top","tshirt"];let An=null;async function oa(i,t,e=bn("assets/ochi.glb"),n,s=0,r){if(!An||An.url!==e){const a=await(n??ml()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});An={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=An.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=mS(An.variants[(h%An.variants.length+An.variants.length)%An.variants.length]);l.traverse(f=>{f.castShadow=f.type==="SkinnedMesh",c&&f.isBone&&(f.name=f.name.replace(/_\d+$/,""))}),i.add(l);const d=new T0(l);o.push({root:l,mixer:d,clips:new Map(An.clips.map(f=>[f.name,f]))})}return o}const Ih=new WeakMap;function OS(i){let t=Ih.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),Ih.set(i.root,t)),t}function Tl(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const BS=Tl(/^foot[LR]$/),GS=Tl(/^hand[LR]$/),Ph=Tl(/^spine00[12]$/),jo=.6499;function Dp(i){const t=new ue(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/jo,1/e)):t}let ec=null;const Fp=3e3;function Np(i){return ec??(ec=(async()=>{let t;try{return await Promise.race([i(bn("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),Fp)})])}finally{clearTimeout(t)}})().catch(t=>{throw ec=null,t})),ec}async function zS(i,t=bn("assets/ochi.glb"),e){await oa(new fn,0,t,e);const n=i.toLowerCase();return An?An.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function HS(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();El.some(o=>r.includes(o))&&t.push(r)}}),t}async function VS(i,t=bn("assets/ochi.glb"),e){await oa(new fn,0,t,e);const n=An?An.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>HS(An.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const Up=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function kp(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;El.some(o=>r.toLowerCase().includes(o))&&t.push(Up(r))}}),t}async function Op(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>bn(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await Np(r),c=[...new Set(n.map(d=>{var f;return(f=a.channels[d])==null?void 0:f.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new cl,h=new Map,l=new Map;for(const d of new Set(t))for(const f of c){const m=(o=a.characters[d])==null?void 0:o.files[f];if(!m)continue;let _=l.get(m);_||(_=await u.loadAsync(s(m)),_.colorSpace="",_.flipY=!1,_.anisotropy=16,_.needsUpdate=!0,l.set(m,_));const g=h.get(d)??[];g[f]=_,h.set(d,g)}return h.size?{channels:a.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function Bp(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await Np(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const Lh=new Map;function WS(i){if(!i)return null;let t=Lh.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new wn(n),t.colorSpace="",t.anisotropy=8,Lh.set(i,t)}return t}const nc=new ue("#14181B"),ic=new ue("#FFFFFF"),jS=.5;function Hc(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??Ip},a=n.from!==void 0&&JS(n.from,s),c=[];return i.root.traverse(u=>{const h=u;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((d,f)=>{const m=d.name||h.name,_=m.toLowerCase();if(!El.some(g=>_.includes(g))){const g=kh.get(d)??d,p=ZS(s);if(!p&&d===g||a&&d!==g)return;const v=p?g.clone():g;p&&(v.userData.drillOwned=!0,kh.set(v,g),QS(v,s,h,r),c.push(v)),d!==v&&d.userData.drillOwned&&d.dispose(),Array.isArray(h.material)?h.material[f]=v:h.material=v;return}{const g=d.clone();d.userData.drillOwned&&d.dispose(),g.userData.drillOwned=!0,g.color=Dp(o.a),eA(g,o,e,Up(m),{...n,exact:r}),c.push(g),Array.isArray(h.material)?h.material[f]=g:h.material=g}})}),c}const XS=/^(thigh[LR]|pelvis[LR]|spine)$/,qS=/^shin[LR]$/,KS=8,Dh=i=>Math.round(i*100)/100,Xo=[.8,.9],Fh=[Dh(1-Xo[1]),Dh(1-Xo[0])],$S=8,Nh=1,YS={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},No=i=>i!==void 0&&i!==MS;function Uh(i,t){var r;const e=[new Me(-1,-1,-1,-1),new Me(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<KS;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const ZS=i=>{const t=Gp(i);return!!(t.shorts||t.socks||t.tone)},Gp=i=>({shorts:i.shorts,socks:i.socks,tone:No(i.skin)?YS[i.skin]:void 0}),JS=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&No(i.skin)===No(t.skin)&&(!No(i.skin)||i.skin===t.skin),kh=new WeakMap;function QS(i,t,e,n){const s=Uh(e,XS),r=Uh(e,qS),o=Gp(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:Qi(o.shorts??"#000000",n)},kitSocksC:{value:Qi(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:Qi(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
	float kitBand = vMapUv.x * ${$S.toFixed(1)};
	float kitSkinAt = step( ${Nh.toFixed(1)}, kitBand ) * step( kitBand, ${(Nh+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${Fh[0].toFixed(2)}, ${Fh[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${Xo[0].toFixed(2)}, ${Xo[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const tA=i=>{const t=new ue(i),e=Math.max(t.r,t.g,t.b);return e>jo?jo/e:1},Qi=(i,t)=>t?new ue(i):Dp(i).multiplyScalar(jo);function Oh(i,t){const e=[new Me(0,0,0,0),new Me(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function eA(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=Oh(e==null?void 0:e.channels,t.pattern),l=Oh(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=o?a==null?void 0:a[n]:void 0,f=d?WS(o):null,m={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:Qi(t.a,c)},kitB:{value:Qi(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:Qi((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:Qi((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:f},kitNumO:{value:new oe(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new oe(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new oe(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:f?1:0},kitNumFlip:{value:jS*(c?1:tA(t.a))}};i.userData.kitUniforms=m,i.onBeforeCompile=_=>{Object.assign(_.uniforms,m),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${nc.r.toFixed(4)}, ${nc.g.toFixed(4)}, ${nc.b.toFixed(4)} )
		: vec3( ${ic.r.toFixed(4)}, ${ic.g.toFixed(4)}, ${ic.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const nA=.18;function Bh(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const wl=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function Xs(i){const t=wl(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=(n*n-r*r)/(2*e),a=(n*n-s*s)/(2*e);if(o+a<=t){const u=t-o-a;return{D:t,t1:(n-r)/e,t2:u/n,t3:(n-s)/e,d1:o,d2:u,peak:n}}const c=Math.sqrt(e*t+(r*r+s*s)/2);return{D:t,t1:(c-r)/e,t2:0,t3:(c-s)/e,d1:(c*c-r*r)/(2*e),d2:0,peak:c}}function Ie(i){const t=Xs(i);return t.t1+t.t2+t.t3}function Tn(i,t){const e=Xs(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let o,a;if(s<=e.t1){const u=Math.min(i.startSpeed??0,i.cruise);o=u*s+.5*r*s*s,a=u+r*s}else if(s<=e.t1+e.t2)o=e.d1+e.peak*(s-e.t1),a=e.peak;else{const u=s-e.t1-e.t2;o=e.d1+e.d2+e.peak*u-.5*r*u*u,a=e.peak-r*u}const c=e.D>0?o/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:a}}const iA=.25;function Gh(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+Ie(n)){e=[0,0];continue}const s=wl(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=Tn(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function sA(i,t,e=iA){const n=Gh(i,t),s=Gh(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const rA=2.5;function oA(i,t){let e=0;for(const n of i)t>=n.t0&&(e=Xs(n).peak);return Math.min(1,e/rA)}const aA=.035,cA=.1,zh=.4,lA=1;function uA(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||wl(s.from,s.to)<lA)continue;const r=s.t0+Ie(s)-cA,o=(t-r)/zh;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+zh)||(e=Math.max(e,aA*.5*(1-Math.cos(2*Math.PI*o))))}return e}function ze(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function hA(i,t=0){return i-t}function aa(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function dA(i,t=58*Math.PI/180,e=.85){const n=aa(i);return Math.min(t,Math.max(-t,n))*e}const fA=1.2,sc=180*Math.PI/180,rc=120*Math.PI/180,Hh=70*Math.PI/180;function zp(i){return i<=0?sc:i<=2.3?sc+(rc-sc)*i/2.3:i>=5.48?Hh:rc+(Hh-rc)*(i-2.3)/(5.48-2.3)}const pA=.12,Vh=15*Math.PI/180;function mA(i){return Math.max(-Vh,Math.min(Vh,i*pA))}const gA=.001;function Zi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=gA}function _A(i,t,e,n){return e||n||!Zi(i,t)?null:ze(i,t)}function Wh(i,t,e,n=Math.PI*2){const s=t-i,r=aa(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const bA=2.3,_r=1.1,xA=1.15,jh=.6,Xh=1.2,Uo=.88,vA=1-Uo,yA=.15,po=.28;function rs(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?xA:bA),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?jh:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??Xh;u=(e<Uo?h*Math.sin(Math.PI*e/Uo):yA*h*Math.sin(Math.PI*(e-Uo)/vA))+c}else if(n==="lofted")u=(i.loft??Xh)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=po?o+(h-o)*Math.sin(Math.PI/2*(e/po)):a+(h-a)*Math.cos(Math.PI/2*((e-po)/(1-po)))}else n==="drop"?u=(i.fromHeight??jh)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const qh=new WeakMap;function MA(i){const t=qh.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,rs(i,i.t0+i.duration*n/32).height);return qh.set(i,e),e}function Hp(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=rs(i,n),r=rs(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function Vp(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const Kh=3,In=2.52,Dn=4,ws=.8,mo=1,Ci=.3,hr=.6,Mn=.15,SA=.5,Qn=.45,Wp=.4,jp=.7,$h=Math.PI/12,Rs=4,AA=.6,Yh=.4,EA=.3,TA=.15,wA=.4,RA=.35,wr=.3,CA=Math.PI/4,IA=.25,PA={left:"gk_dive_a",right:"gk_dive_b"},Xp=4,LA=.12,DA=.25,FA=.35;function Zh(i){return Math.min(DA,Math.max(LA,i*FA))}const NA=1.3,UA=.15;function Jh(i,t,e){const n=i-UA,s=i+t-n,r=Math.min(NA,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const kA=1.8,Qh=.3,OA=.7,BA=.9,GA=2.5,gn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},zA={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:gn.roll},go={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},HA=.8;function VA(i,t,e,n=ca){const s=Xp*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-Qp)*t)}const WA=3;function jA(i,t,e){if(t<=0)return null;const n=Math.min(WA,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Vn=1,_o=.25,oc=.5,td=.8,XA=.4,qp=3,qA=.6,KA=2.3,ed=.9,Cs=.3,nd=.4,$A=12,YA=8,ZA=3,JA=.25;function id(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Vc,r/YA),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(JA*r,ZA)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Vc,r/$A),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const QA=.6,Vc=.2;function tE(i,t,e){const n=QA*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Vc,e/n)}const eE=16,nE=12,ac=2,iE=8,sE=.1,rE=2.44;function ts(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Kp(i,t,e){const n=ts(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const cc=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],bo={id:"pass_a",duration:.567,contact:.167,reach:.89},oE=["stall_c"],sd="jog_back_a",dr=.5,aE=.5,cE=.3,lE=.9,rd=.5,uE=.2,od=.8,ad=.5,hE=1.6,xo={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},cd=3,dE=.1,vo=["walk","jog","run"],ko=.5,fE=1.5*ko,pE=.42*Math.SQRT1_2,mE=12,gE=.15;function _E(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=as(n,ca)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function ld(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const f of t){const m=Math.hypot(s[0]-f[0],s[1]-f[1]);e-m>u+1e-9&&(u=e-m,c=f)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?Ye(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>o+1e-9&&(r=s,o=d)}return r}function ud(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function yo(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const bE=.2;function hd(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function dd(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Ye([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ne+dE?null:[t[0]-Ne*s[0],t[1]-Ne*s[1]],o=e?Ye([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Ne,Wp),jp);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function xE(i){return i<15?"roll":i<30?"throw":"kick"}function $p(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function vE(i,t,e,n,s){const{reach:r,at:o}=$p(i,e,n);if(r>qp*s)return null;const a=Ye([e[0]-i[0],e[1]-i[1]]);if(r<=qA*s)return{kind:"catch",clip:gn.catch.id,clipDuration:gn.catch.duration,contactOffset:gn.catch.contact,contact:[i[0]+Ne*a[0],i[1]+Ne*a[1]],travelTo:null};const c=em(i,t,n),u=gn.dive[c],h=Ye([o[0]-i[0],o[1]-i[1]]),l=Math.min(KA*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function yE(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=Ye(c);return[a[0]+Qh*n*u[0],a[1]+Qh*n*u[1]]}function Yp(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Zp(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=Yp(r,n))}return s}const ME=[{id:"header_a",duration:1.9,contact:1}],SE=1.57,fd=.1,pd=.6,lc=2,Mo=.02,uc=.6,AE=2.5,EE=.22,TE=3,wE=6.5;function hc(i,t){return Math.min(Math.max(EE*i,TE),wE)*t}const RE=10,CE=1.7;function IE(i,t,e,n){const s=e??[t[0],t[1]],r=Ye([s[0]-i[0],s[1]-i[1]]),o=[i[0]+fd*n*r[0],i[1]+fd*n*r[1]],a=ME[0];return{contact:o,height:SE*n,clip:a,set:[i[0]+Ne*r[0],i[1]+Ne*r[1]],faceAt:s}}const md=.4,PE=.3,LE=18,DE=10,FE=.45,NE=.8,Oo={id:"strike_jog_a",contact:.4},UE=1,kE={strike_jog_a:{loop:!1,category:"shoot",ballContact:Oo.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Jp(i){var t;for(const[e,n]of Object.entries(kE))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const gd=.15,OE=.2,ca=3.35,Qp=.5;function BE(i,t,e,n,s=1){let r=null,o=1/0;for(const m of e){const _=Math.hypot(m.at[0]-t[0],m.at[1]-t[1]);_<o&&(o=_,r=m)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-Qp)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const m=ze(i,c),_=g=>(g[0]-i[0])*Math.cos(m)-(g[1]-i[1])*Math.sin(m);return u.sort((g,p)=>_(p)-_(g)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),f=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<f-1e-6?u[0]:u[1]}function GE(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const tm=.35;let Ne=tm;function _d(i){Ne=i}function zE(){return Ne/tm}function Wn(i,t){return[i[0]+Ne*Math.sin(t),i[1]+Ne*Math.cos(t)]}function dc(i,t,e){const n=ze(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function em(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Ye(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function bd(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function HE(i,t,e){const n=Ye([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Ye([e[0]-i[0],e[1]-i[1]]);const f=n[0]*s[1]-n[1]*s[0];r=Math.abs(f)<1e-6?1:Math.sign(f)}else r=1,s=bd([-n[0],-n[1]],-r*$h);const o=bd(n,r*$h),a=[i[0]+Ne*o[0],i[1]+Ne*o[1]],c=[i[0]+Ne*s[0],i[1]+Ne*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,Wp),jp);return{contact:a,set:[a[0]+d*l[0],a[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const VE=.5,WE=1.4,xd={walk:.8,jog:1.2,run:2.2},jE=.25,XE=.7,qE=.3,KE=2,fr=.4,$E=10,YE=8,ZE=2.5,vd=6,JE=2,yd=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Md=1.4;function Sd(i,t,e){const n=i.t0+Ie(i),s=fc(i,t);let r=0,o=Math.max(n-t,.001);if(fc(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;fc(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function fc(i,t){const e=Tn(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function QE(i,t,e,n,s,r={}){const o=Ie(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=Ye([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=ze(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=w=>(w[0]-i.from[0])*a[0]+(w[1]-i.from[1])*a[1],l=i.t0+o,d=h(e),f=zE(),m=(r.others??[]).filter(w=>Math.abs((w[0]-i.from[0])*Math.cos(c)-(w[1]-i.from[1])*Math.sin(c))<=JE).map(w=>h(w)),_=XE*f,g=jE*f,p=w=>h(Tn(i,w).pos),v=[],y=[];let x=i.t0,R=[...t];const M=Math.ceil(Xs(i).D/(.5*Math.min(n,fr*3)))+8;for(let w=0;;w++){y.push(x);const P=h(R),S=d-P,A=r.turnOut?fr:n,C=fr*(1+Md),k=w===0&&!!r.turnIn||!!r.turnOut&&S<=C,L=k?Ne:_;if(S<=Md*A||w===M-1||d-(p(x)+L)<.05){const W=Math.hypot(e[0]-R[0],e[1]-R[1]);let Nt=x;if(W>1e-6){const ie=Math.max(Tn(i,x).speed,VE*i.cruise),de=Math.min(2*W/(ie+_r*(W/ie)/2),Math.max(l-x,.2));v.push({from:R,to:[...e],t0:x,duration:de,style:"push",endFrac:0}),Nt=x+de}return Nt<l&&v.push({from:[...e],to:[...e],t0:Nt,duration:l-Nt,style:"ground"}),{flights:v,touches:y,restEnd:Math.max(Nt,l)}}let F=k?fr:n;if(!k&&S>$E){let W=S;for(const Nt of m)Nt>P&&(W=Math.min(W,Nt-P));F*=Math.min(Math.max(W/YE,1),ZE)}const J=F;F*=1+yd[w%yd.length],!k&&r.turnOut&&S-F<C&&(F=Math.max(S-C,fr));const G=Math.min(F,WE*i.cruise*i.cruise/_r),X=Sd(i,x,G),U=Math.max(i.cruise*X-G,0),V=Math.min(L,P-p(x)+U),Q=p(x)+V,nt=Math.max(P,Q),ut=J>KE?s:s*(w%2?-1:1),Dt=Math.min(g,qE*G),it=(R[0]-i.from[0])*u[0]+(R[1]-i.from[1])*u[1],ct=Math.abs(ut*Dt-it),ot=Math.sqrt(Math.max(vd*vd-ct*ct,0)),et=Math.min(nt+G,P+ot,d),yt=Sd(i,x,et-Q),zt=(et-P)/yt,Qt=zt+_r*yt/2,me=zt-_r*yt/2,se=[i.from[0]+a[0]*et+u[0]*ut*Dt,i.from[1]+a[1]*et+u[1]*ut*Dt],Ce={from:R,to:se,t0:x,duration:yt,style:"push",endFrac:Math.max(me,0)/Qt};v.push(Ce),R=[...se],x+=yt}}function ei(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Sn(i,t,e){const n=ei(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const Rl=.3;function nm(i){const t=Uc.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??In})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?Rl:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function Cl(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function tT(i,t){const e=Xs(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=i.startSpeed??0,o=new Set([0,n]);for(const u of t)u.min>e.peak||(u.min>r&&o.add((u.min-r)/i.accel),u.min>s&&o.add(n-(u.min-s)/i.accel));const a=[...o].sort((u,h)=>u-h),c=[];for(let u=0;u+1<a.length;u++){if(a[u+1]-a[u]<1e-9)continue;const h=Cl(t,Tn(i,i.t0+(a[u]+a[u+1])/2).speed);if(!h)continue;const l=c[c.length-1];l&&l.gait===h.gait&&Math.abs(l.t1-(i.t0+a[u]))<1e-9?l.t1=i.t0+a[u+1]:c.push({gait:h.gait,t0:i.t0+a[u],t1:i.t0+a[u+1]})}return nT(c)}const eT=.3;function nT(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=eT;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const la=.85,mi=1.15,Ad=.5;function im(i){return Ad+(la-Ad)*Math.min(1,Math.max(0,i))}function iT(i,t){const e=i/t;return e>mi?mi:Math.max(im(e),e)}function sT(i,t){return Math.min(mi,Math.max(la,i/t))}function rT(i,t,e){const n=i.findIndex(u=>u.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=la&&r<=mi)return{timeScale:r,partner:null,weight:0};const o=i[r>mi?n+1:n-1];if(!o)return{timeScale:r>mi?mi:Math.max(im(r),r),partner:null,weight:0};const a=Math.min(1,Math.max(0,(t-s.clipSpeed)/(o.clipSpeed-s.clipSpeed))),c=(1-a)*s.clipSpeed+a*o.clipSpeed;return{timeScale:sT(t,c),partner:o.gait,weight:a}}const oT=new Set(["pass","shoot","receive","header","defensive"]),qo=new Set(["turn","transition"]),_i=.15,sm=.1,rm=.3,aT=.45,cT=.2,lT=.12,uT=.6;function Il(i,t){var e;return oT.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function om(i,t,e){var r,o;if(Il(i,t))return sm;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return qo.has(n??"")?_i:n==="idle"?s==="idle"?uT:s==="locomotion"?lT:Ko:n==="locomotion"&&s==="locomotion"?cT:qo.has(s??"")?_i:Ko}function am(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?aT:qo.has(e??"")?_i:Il(i,t)?rm:Ko}function hT(i,t,e){var n;return Il(i,t)||qo.has(((n=i.clips[t])==null?void 0:n.category)??"")?am(i,t):om(i,e,t)}const dn=Math.PI/180,pi={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*dn,t50:.567,t90:.8,peak:159*dn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*dn,t50:.533,t90:.8,peak:213*dn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*dn,t50:.4,t90:.6,peak:366*dn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*dn,t50:.767,t90:1.033,peak:192*dn,standing:!1}};function pc(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function cm(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+_i&&(n=s);return n}function dT(i,t,e,n){const s=cm(i,t,e);if(!s)return null;const r=pi[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=pc(r,s.offset),u=pc(r,s.offset+o),h=pc(r,a),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,f=n===void 0?s.to-s.from:Ki(n,s.to),m=Math.min(1,(e-s.t0)/_i),_=e<=s.end?1:Math.max(0,1-(e-s.end)/_i),g=Math.max(0,Math.min(m,_));return{heading:d+f*l,clipYaw:r.yaw*h*g}}function fT(i,t){return i.peak+zp(t)}function pT(i,t,e){const n=Math.abs(i);return n<Wc?null:n>ET&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const Wc=45*dn,Ed=60*dn,mT=.3,gT=.5,_T=.7,bT=130*dn,So=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Td={left:"strafe_l_a",right:"strafe_r_a"},xT=3.2,vT=3.2,lm=60*dn,yT=120*dn,wd=[{id:"jog_back_diag_a",axis:225.5*dn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*dn,speed:2.27}],MT=5;function ST(i,t){if(Math.abs(i)>lm)return null;const e=i>=0?wd[0]:wd[1];return t<=e.speed*mi?{id:e.id,axis:e.axis}:null}function AT(i,t){const e=Math.abs(i);return e<=lm?t>xT?null:t>(So[0].speed+So[1].speed)/2?So[1].id:So[0].id:e>yT||t>vT?null:i>0?Td.right:Td.left}const ET=120*dn;function Ki(i,t){return aa(t-i)}const Ko=.25;function Ds(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?OE:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=am(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function TT(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function um(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Ds(t,r)&&(s=r);return s}const wT=.15;function RT(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const CT=.06,Rd=2,IT=6,PT=.4;function $o(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Cd(i,t){return $o(ei(i),20973)*t}function Id(i){return 1+CT*(2*$o(ei(i),10196)-1)}function LT(i,t){return(Rd+$o(ei(i),7047)*(IT-Rd))*(1+PT*(2*$o(ei(i)+t*2654435761,28490)-1))}function DT(i,t){let e=0;for(let n=0;n<64;n++)if(e+=LT(i,n),t<e)return n;return 64}function FT(i,t,e){const n=i.length;if(n<=1)return i[0];const s=ei(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function NT(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const UT=new Set(["receive_a","pass_a","pass_b"]),hm=.8,kT=.7;function dm(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function Pl(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+Ie(n)?0:Tn(n,t).speed);return e}function OT(i,t,e){for(const n of i)UT.has(n.clip)&&Pl(t[n.player],dm(e,n))>=hm&&(n.additive=!0)}const BT=1,GT=2,zT=.025,Pd=.2,HT=.4,Ld="idle_transition";function VT(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/Pd,(o-r)/Pd);a<=0||(n=Math.max(n,zT*a*.5*(1-Math.cos(2*Math.PI*GT*r))))}return n}const WT="idle_b",jT=.5,XT=.3,qT=.15;function KT(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,jT*Math.min(1,(e-s.t0)/XT)*Math.min(1,(s.t1-e)/qT)));return n}function $T(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=dm(e,r)-BT,a=r.t0;if(a-o<HT||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(Pl(t[r.player],u)>Rl){c=!0;break}const h=um(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[Ld]&&s.push({player:r.player,clip:Ld,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const YT=.6,fm=.5,pm=.6,yr=2*fm/pm,Yo=yr/pm,ZT=fm-wr;function JT(i){return(yr-Math.sqrt(Math.max(0,yr*yr-2*Yo*i)))/Yo}function QT(){return yr-Yo*JT(ZT)}const t1=.15,e1=.05;function n1(i,t,e){const n=ze(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(IA,s/2):wr,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+CA;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function i1(i,t,e,n,s,r){const o=Math.min(wr,e*(n-Ci)/2);for(let a=o;a>=t1-1e-9;a-=e1){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}function s1(i,t,e=1){var bt,Vt,Kt,re,Wt,be,fe,ge,$,Ot,at,mt,jt,Ht,he;NT(t),Jp(t);const n=Vo(i),s=nm(t),r={};i.players.forEach(D=>r[D.id]=[...D.start]);const o={},a=[],c=[],u=[],h=[],l=[],d=[],f=[],m=[],_={},g={},p=new Set,v={},y={},x={},R={};function M(D){u.push(D),v[D.player]=D.t0,Zi(r[D.player],D.at)&&(w[D.player]=ze(r[D.player],D.at))}const w={},P={},S={};function A(D){const b=_[D];let B=Math.max(b?b.t0+Ie(b):0,P[D]??0,0);for(const Z of c)Z.player===D&&t.clips[Z.clip]&&(B=Math.max(B,Ds(t,Z)));return B}function C(D,b,B,Z){if(ie.has(D)||!Zi(r[D],B))return null;const z=w[D]??0,pt=Ki(z,ze(r[D],B));if(Math.abs(pt)<Ed)return null;const Et=pi[pt>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[Et.id])return null;const wt=k(Et),Ut=A(D),tt=Math.max(Ut,Math.min(b,Z-wt));return tt+wt>Z+1e-9?null:(L(D,Et,tt,0,z,z+pt),tt)}function k(D,b=0){return D.duration-b-_i}function L(D,b,B,Z,z,pt,Et){const wt=Et??k(b,Z),Ut={player:D,clip:b.id,t0:B,offset:Z,end:B+wt,from:z,to:pt},tt={player:D,clip:b.id,t0:B,...Z?{offset:Z}:{},...Et!==void 0?{loopUntil:B+wt}:{}};f.push(Ut),c.push(tt),S[D]={span:Ut,cue:tt},P[D]=Ut.end+_i}function F(D,b){const B=S[D];return!B||B.span.end<=b+1e-9?!0:b-B.span.t0<mT?!1:(B.span.end=b,B.cue.loopUntil=b,P[D]=b+_i,!0)}function J(D,b){if(F(D,b))return;const B=S[D];f.splice(f.indexOf(B.span),1);const Z=c.indexOf(B.cue);Z>=0&&c.splice(Z,1),delete S[D],P[D]=0}function G(D,b=1/0){const B=C(D.player,D.t0,D.at,b);M(B===null?D:{...D,t0:B})}const X=[];function U(D){var b;for(let B=0;B<X.length;B++){const Z=X[B];Z.afterT>=D||(X.splice(B--,1),(o[b=Z.player]??(o[b]=[])).push(Z.move),_[Z.player]=Z.move,g[Z.player]=Q(Z.move,Z.player),M({player:Z.player,at:Z.faceBall,t0:Z.move.t0}),M({player:Z.player,at:Z.faceSettle,t0:Z.arrival}),r[Z.player]=[...Z.move.to])}}function V(D,b,B){let Z=[...r[D]],z=[...r[D]];const pt=_[D];let Et=Math.max(pt?pt.t0+Ie(pt):0,y[D]??0),wt=-1/0,Ut=null;for(let tt=b+1;tt<K.length;tt++){const vt=K[tt];if(vt.t>=B)break;if((vt.type==="pass"?vt.from:vt.player)!==D)continue;if(vt.type!=="move"){Ut=`${vt.type} at t=${vt.t}`;break}const Tt=t.groups[vt.gait??"jog"]??t.groups.jog,_t=t.clips[Sn(Tt,D,vt.t)].speed??In,Lt={from:Z,to:[...vt.to],t0:vt.t,cruise:_t,accel:Dn},Xt=vt.t+Ie(Lt);Et=Math.max(Et,Xt),Z=[...vt.to],z=Xt>B?Tn(Lt,B).pos:[...vt.to],wt=vt.t}return{expected:Z,atArrival:z,busyUntil:Et,afterT:wt,blocked:Ut}}function Q(D,b){const B=tT(D,s).map(z=>({player:b,clip:Sn(t.groups[z.gait],b,D.t0),t0:z.t0,loopUntil:z.t1})),Z=S[b];if(Z){let z=1/0;for(const pt of B)pt.t0>Z.span.t0+1e-9&&pt.t0<Z.span.end-1e-9&&(z=Math.min(z,pt.t0));z<1/0&&J(b,z)}return c.push(...B),B}function nt(D,b,B="event"){(Se[D]??0)>b&&console.warn(`[engine3d] ${D} is on the ground until t=${Se[D].toFixed(2)}s but has a ${B} at t=${b} — schedule it later`);const Z=_[D];if(!Z)return;const z=Z.t0+Ie(Z);if(b<z){const pt=`buildSchedule: player ${D} has an event at t=${b} while still moving from a move started at t=${Z.t0} (in flight until t=${z.toFixed(3)})`;if(qt.has(D))console.warn(`[engine3d] ${pt} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(pt)}}function ut(D){let b=null,B=-1/0;for(const Z of m)Z.t<=D&&Z.t>=B&&(b=Z.player,B=Z.t);return b}const Dt=[];function it(D,b,B){const Z=i.balls??[],z=Tt=>Tt.carrier&&r[Tt.carrier]?Wn(r[Tt.carrier],w[Tt.carrier]??0):Vp(Tt,b);let pt=-1,Et=1/0;const wt=r[D];if(Z.forEach((Tt,_t)=>{if(Dt.some(Bt=>Bt.take===_t))return;const Lt=z(Tt),Xt=Math.hypot(Lt[0]-wt[0],Lt[1]-wt[1]);Xt<Et&&(Et=Xt,pt=_t)}),pt<0||Et>Kh){const Tt=Z.length?pt<0?"every spare has already been used":`the nearest is ${Et.toFixed(1)} m away (needs ${Kh} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${B} by ${D} at t=${b.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${Tt} — played with the ball already in play`);return}const Ut=ut(b),tt=Ut?ts(l,Ut,b):null,vt=tt?[...tt.carry]:Ut&&r[Ut]?Wn(r[Ut],w[Ut]??0):yo(a,n,b).at,gt=z(Z[pt]);Dt.push({t:b,drop:vt,take:pt,at:gt}),m.push({t:b,player:D}),l.push({player:D,at:b,carry:gt}),y[D]=b}const ct=Object.fromEntries(i.players.map(D=>[D.id,D.team]));function ot(D,b,B,Z,z){const pt=ut(Z);if(!pt||pt===D||ie.has(D)||ct[D]==="coach"||ct[pt]===ct[D])return null;const Et=r[pt]?[...r[pt]]:yo(a,n,Z).at;if(!Zi(b,Et)||!Zi(b,B))return null;const wt=ze(b,B),Ut=Ki(ze(Et,b),wt),tt=Math.hypot(Et[0]-b[0],Et[1]-b[1])<=MT?ST(Ut,z):null;if(tt&&t.clips[tt.id]){const gt=wt-tt.axis,Tt=Math.hypot(Et[0]-b[0],Et[1]-b[1])||1;return{clip:tt.id,ball:[b[0]+Tt*Math.sin(gt),b[1]+Tt*Math.cos(gt)]}}const vt=AT(Ut,z);return vt&&t.clips[vt]?{clip:vt,ball:Et}:null}const et={};for(const D of i.events)D.type==="move"&&(et[bt=D.player]??(et[bt]=[])).push(D.t);function yt(D,b,B){for(const Z of W){const z=Z.id;if(!rt.length||ut(D)===z||!t.clips[go.left.id]||!t.clips[go.right.id])continue;const pt=_[z],Et=Math.max(D,Ct[z]??0,pt?pt.t0+Ie(pt):0);if(d.some(te=>te.player===z))continue;const wt=rt.reduce((te,E)=>Math.hypot(E.at[0]-Z.start[0],E.at[1]-Z.start[1])<Math.hypot(te.at[0]-Z.start[0],te.at[1]-Z.start[1])?E:te,rt[0]),Ut=wt.at,tt=wt.sideways?1:0,vt=wt.sideways?0:1,gt=VA(Nt,e,Math.abs(r[z][vt]-Ut[vt]),wt.halfW),_t=Ut[tt]+Math.min(gt,Math.max(-gt,(B[tt]-Ut[tt])*HA))-r[z][tt],Lt=ze(Ut,[i.pitch.width/2,i.pitch.length/2]),Xt=wt.sideways?-Math.sin(Lt):Math.cos(Lt),Bt=jA(_t,go[_t*Xt>0?"left":"right"].dist*Nt,Math.sign(Xt)||1);if(!Bt)continue;const le=go[Bt.side],At=Math.min(b,i.duration)-Bt.steps*le.duration;if(At<Et-1e-9||(et[z]??[]).some(te=>te>=At-1e-9))continue;const Te=Math.sign(_t)*le.dist*Nt;for(let te=0;te<Bt.steps;te++){const E=[...r[z]],j=[...E];j[tt]=E[tt]+Te;const H=ud(E,j,At+te*le.duration,le.duration);(o[z]??(o[z]=[])).push(H),r[z]=[...H.to],_[z]=H}c.push({player:z,clip:le.id,t0:At,loopUntil:At+Bt.steps*le.duration}),g[z]=[]}}function zt(D,b){var pt;const B=(pt=i.players.find(Et=>Et.id===D))==null?void 0:pt.start;if(!B||!rt.length)return!1;let Z=rt[0].at,z=1/0;for(const Et of rt){const wt=Math.hypot(Et.at[0]-B[0],Et.at[1]-B[1]);wt<z&&(z=wt,Z=Et.at)}return Math.hypot(b[0]-Z[0],b[1]-Z[1])<=mE*Nt}function Qt(D,b){const B=_[D];if(!B||B.endSpeed)return;const Z=B.t0+Ie(B);if(b-Z>=mo)return;B.endSpeed=ws;const z=B.t0+Ie(B);for(const pt of g[D]??[]){const Et=c.indexOf(pt);Et>=0&&c.splice(Et,1)}if(g[D]=Q(B,D),z>b-Ci){if(qt.has(D)){console.warn(`[engine3d] player ${D}'s move started at t=${B.t0} still arrives at t=${z.toFixed(3)}, less than ${Ci}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${D}'s move started at t=${B.t0} still arrives at t=${z.toFixed(3)} even flowing into their action at ${ws} m/s, less than ${Ci}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function me(D,b,B,Z,z){const pt=_[D],Et=pt?pt.t0+Ie(pt):0;if(pt&&(pt.endSpeed!==void 0||b-Et<mo))return null;const wt=n1(r[D],B,z),Ut=t.groups.walk,tt=Ut!=null&&Ut.length?t.clips[Ut[0]].speed??In:In,vt={from:[...r[D]],to:wt,t0:0,cruise:tt,accel:Dn};let gt=b-Z-Ie(vt);return gt<Math.max(Et,y[D]??0)||!F(D,gt)?null:(vt.t0=gt,(o[D]??(o[D]=[])).push(vt),z&&p.add(vt),_[D]=vt,g[D]=Q(vt,D),r[D]=[...wt],gt)}function se(D,b,B){const Z=yo(a,n,b).at,z=ze(Z,B),pt=[Z[0]-Ne*Math.sin(z),Z[1]-Ne*Math.cos(z)],Et=Math.hypot(pt[0]-r[D][0],pt[1]-r[D][1]);if(Et<sE){r[D]=[...pt];return}const wt=_[D],Ut=wt?wt.t0+Ie(wt):0,tt=Math.max(Ut,y[D]??0,0);let vt;for(let gt=Et<cd?0:1;gt<vo.length;gt++){const Tt=t.groups[vo[gt]]??t.groups.jog,_t=t.clips[Sn(Tt,D,b)].speed??In;if(vt={from:[...r[D]],to:pt,t0:0,cruise:_t,accel:Dn,endSpeed:ws},vt.t0=b-Ci-Ie(vt),vt.t0>=tt)break}vt.t0<tt&&(console.warn(`[engine3d] dead-ball run-up for ${D} at t=${b.toFixed(2)}s wants to start at t=${vt.t0.toFixed(2)}s but he is not free until t=${tt.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),vt.t0=tt),F(D,vt.t0),(o[D]??(o[D]=[])).push(vt),_[D]=vt,g[D]=Q(vt,D),r[D]=[...pt]}function Ce(D,b,B){const Z=yo(a,n,b);{const Tt=ld(Z.at,Mt,fE*Nt);if(Math.hypot(Tt[0]-Z.at[0],Tt[1]-Z.at[1])>1e-6){const _t=a.filter(Lt=>Lt.t0<=b&&Math.hypot(Lt.to[0]-Z.at[0],Lt.to[1]-Z.at[1])<1e-9);if(_t.length){for(const Lt of _t)Math.hypot(Lt.from[0]-Z.at[0],Lt.from[1]-Z.at[1])<1e-9&&(Lt.from=[...Tt]),Lt.to=[...Tt];Z.at=Tt}}}const z=ut(b);z&&z!==D&&m.push({t:b,player:null});const pt=Z.moving?Z.restT+bE:-1/0;let Et=null;for(let Tt=B+1;Tt<K.length;Tt++){const _t=ht[Tt];if(!(!_t||_t.actor!==D)){_t.t-b<=Rs+3&&(Et=_t.target);break}}let wt=dd(r[D],Z.at,Et);if(wt.stepTo){const Tt=ld(wt.stepTo,Mt,pE*Nt),_t=[Tt[0]-Z.at[0],Tt[1]-Z.at[1]];if(Math.hypot(_t[0],_t[1])>1e-6){const Lt=Ye(_t),Xt=Ne+1,Bt=dd([Z.at[0]+Xt*Lt[0],Z.at[1]+Xt*Lt[1]],Z.at,Et);Bt.stepTo&&lt(Bt.stepTo)&&(wt=Bt)}}let Ut=1/0;for(let Tt=B+1;Tt<K.length;Tt++){const _t=K[Tt];if((_t.type==="pass"?_t.from:_t.player)===D){Ut=_t.t;break}}let tt=b;if(wt.stepTo){const Tt=Math.hypot(wt.stepTo[0]-r[D][0],wt.stepTo[1]-r[D][1]);let _t;for(let Lt=Tt<cd?0:1;Lt<vo.length;Lt++){const Xt=t.groups[vo[Lt]]??t.groups.jog,Bt=t.clips[Sn(Xt,D,b)].speed??In;if(_t={from:[...r[D]],to:wt.stepTo,t0:b,cruise:Bt,accel:Dn,endSpeed:ws},b+Ie(_t)+Qn+Ci<=Ut)break}if(pt>b+Ie(_t)){const Lt=pt-b,Xt=Math.hypot(wt.stepTo[0]-_t.from[0],wt.stepTo[1]-_t.from[1]),Bt=Dn*Dn*Lt*Lt-4*Dn*Xt,le=Bt>0?(Dn*Lt-Math.sqrt(Bt))/2:_t.cruise,At=(t.clips[Sn(t.groups.walk,D,b)].speed??Rl)*la;_t={..._t,cruise:Math.max(Math.min(le,_t.cruise),At),endSpeed:0}}(o[D]??(o[D]=[])).push(_t),qt.set(D,b),_[D]=_t,g[D]=Q(_t,D),tt=b+Ie(_t),r[D]=[...wt.stepTo]}tt=Math.max(tt,pt),M({player:D,at:[...Z.at],t0:Math.max(b,v[D]??0),lock:[tt-Mn,tt+Mn]});const vt=Tt=>{for(const _t of g[D]??[]){const Lt=c.indexOf(_t);_t.t0>=Tt?Lt>=0&&c.splice(Lt,1):(_t.loopUntil??0)>Tt&&(_t.loopUntil=Tt)}};if(ie.has(D)&&zt(D,Z.at)){const Tt=gn.scoop[0],_t=tt-Tt.contact;return _t<b&&console.warn(`[engine3d] keeper ${D}'s scoop at t=${tt.toFixed(2)}s wants to start at t=${_t.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),vt(Math.max(_t,0)),c.push({player:D,clip:Tt.id,t0:Math.max(_t,0),contact:Tt.contact}),M({player:D,at:[...wt.faceAt],t0:tt}),m.push({t:tt,player:D}),l.push({player:D,at:tt,carry:[...Z.at],hand:{height:Vn*Nt,from:gE*Nt,rise:td,follow:!0}}),y[D]=tt,Ct[D]=Math.max(_t,0)+Tt.duration+Cs,tt}const gt=Sn(t.groups.pass,D,tt);return vt(tt-(t.clips[gt].ballContact??0)),c.push({player:D,clip:gt,t0:tt-(t.clips[gt].ballContact??0)}),a.push({from:[...Z.at],to:wt.set,t0:tt,duration:Qn,style:"ground"}),M({player:D,at:[...wt.faceAt],t0:tt}),m.push({t:tt,player:D}),l.push({player:D,at:tt+Qn,carry:wt.set}),y[D]=tt+Qn,tt+Qn}const W=i.players.filter(D=>D.role==="keeper"),Nt=e,ie=new Set(W.map(D=>D.id));i.players.forEach(D=>w[D.id]=D.role==="keeper"?ze(D.start,n):0);const de=((Vt=i.keeper)==null?void 0:Vt.outcome)==="save",Ct={},Se={},qt=new Map,I={},T={},K=[...i.events].sort((D,b)=>D.t-b.t);if(i.ball&&!i.ball.static){const D=n,b=i.players.reduce((z,pt)=>Math.hypot(pt.start[0]-D[0],pt.start[1]-D[1])<Math.hypot(z.start[0]-D[0],z.start[1]-D[1])?pt:z,i.players[0]),B=K.find(z=>z.type!=="move"||z.player===(b==null?void 0:b.id)&&ie.has(z.player)),Z=B?B.type==="pass"?B.from:B.player:null;if(!((B==null?void 0:B.type)==="collect"||((B==null?void 0:B.type)==="pass"||(B==null?void 0:B.type)==="shoot")&&B.deadBall))if(Z&&ie.has(Z))m.push({t:0,player:Z}),y[Z]=0,(B==null?void 0:B.type)==="pass"&&!!B.fromFeet||l.push({player:Z,at:0,carry:[...n],hand:{height:Vn*Nt,follow:!0}});else{const z=i.players.filter(wt=>wt.role!=="keeper"),pt=z.length?z:i.players,Et=pt.reduce((wt,Ut)=>Math.hypot(Ut.start[0]-n[0],Ut.start[1]-n[1])<Math.hypot(r[wt.id][0]-n[0],r[wt.id][1]-n[1])?Ut:wt,pt[0]).id;m.push({t:0,player:Et}),y[Et]=0}}const rt=(i.equipment??[]).filter(D=>D.type==="goal").map(D=>({at:D.at,halfW:as(D,ca),sideways:D.facing==="e"||D.facing==="w"})),Mt=_E(i.equipment,e),lt=D=>D[0]>=0&&D[0]<=i.pitch.width&&D[1]>=0&&D[1]<=i.pitch.length,Jt=D=>Mt.every(b=>Math.hypot(b[0]-D[0],b[1]-D[1])>=ko*Nt),Pt={};i.players.forEach(D=>Pt[D.id]=[...D.start]);const ht=K.map(D=>{if(D.type==="move")return Pt[D.player]=[...D.to],null;if(D.type==="dribble")return Pt[D.player]=[...D.to],{actor:D.player,target:[...D.to],t:D.t};if(D.type==="collect"||D.type==="tackle")return null;const b=D.type==="pass"?D.from:D.player;D.deadBall&&(Pt[b]=[...n]);const B=D.type==="pass"?[...Pt[D.to]]:D.flightStyle==="ground"?[...D.at]:BE(Pt[D.player],D.at,rt,D.corner,e);return{actor:b,target:B,t:D.t}});for(let D=0;D<K.length;D++){const b=K[D];U(b.t);const B=b.type==="pass"?b.from:b.player;if(b.newBall&&it(B,b.t,b.type),b.type!=="dribble"&&b.type!=="move"&&delete R[B],b.type==="move"){nt(b.player,b.t,b.type);const z=ie.has(b.player)&&(((re=(Kt=ts(l,b.player,b.t))==null?void 0:Kt.hand)==null?void 0:re.height)??0)>0;ut(b.t)===b.player&&!z&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const pt=t.groups[b.gait??"jog"]??t.groups.jog,Et=t.clips[Sn(pt,b.player,b.t)].speed??In,wt=x[b.player],tt={from:wt&&b.t<wt.t0?[...wt.at]:[...r[b.player]],to:b.to,t0:b.t,cruise:Et,accel:Dn},vt=ot(b.player,tt.from,b.to,b.t,Et),gt=vt?null:(()=>{const Tt=Cl(s,Et);if((Tt==null?void 0:Tt.gait)!=="run"&&(Tt==null?void 0:Tt.gait)!=="sprint"||!t.clips[pi.turn_to_run_a.id]||ie.has(b.player)||A(b.player)>b.t+1e-9||!Zi(tt.from,b.to))return null;const _t=Ki(w[b.player]??0,ze(tt.from,b.to));return Math.abs(_t)>=Ed?{delta:_t,gait:Tt.gait}:null})();if((o[Wt=b.player]??(o[Wt]=[])).push(tt),_[b.player]=tt,g[b.player]=Q(tt,b.player),vt){for(const _t of g[b.player]??[]){const Lt=c.indexOf(_t);Lt>=0&&c.splice(Lt,1)}const Tt={player:b.player,clip:vt.clip,t0:b.t,loopUntil:b.t+Ie(tt)};c.push(Tt),g[b.player]=[Tt],M({player:b.player,at:vt.ball,t0:b.t,until:b.t+Ie(tt)})}else{if(gt){const Tt=Math.abs(gt.delta)>bT,_t=gt.gait==="run"?pi.turn_180_a:null,Lt=Tt&&_t&&t.clips[_t.id]?_t:pi.turn_to_run_a,Xt=Lt.id===pi.turn_to_run_a.id?gT:0,Bt=Lt.id===pi.turn_to_run_a.id?_T:k(Lt,Xt),le=w[b.player]??0;L(b.player,Lt,b.t,Xt,le,le+gt.delta,Bt);const At=b.t+Bt;g[b.player]=(g[b.player]??[]).filter(Te=>{if(Te.t0>=At-1e-9)return!0;if((Te.loopUntil??1/0)<=At+1e-9){const te=c.indexOf(Te);return te>=0&&c.splice(te,1),!1}return Te.t0=At,!0})}M({player:b.player,at:b.to,t0:b.t})}r[b.player]=[...b.to]}else if(b.type==="dribble"){nt(b.player,b.t,b.type),ut(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const z=b.gait??"jog",pt=t.groups[z]??t.groups.jog,Et=t.clips[Sn(pt,b.player,b.t)].speed??In,wt=ze(r[b.player],b.to),Ut=(((fe=(be=ts(l,b.player,b.t))==null?void 0:be.hand)==null?void 0:fe.height)??0)>0,tt=Ut?Kp(l,b.player,b.t):0,vt=Ut?b.t+nd:b.t,gt={from:[...r[b.player]],to:[...b.to],t0:vt,cruise:Et,accel:Dn};let Tt=null;for(let st=D+1;st<K.length;st++){const ft=ht[st];if(!(!ft||ft.actor!==b.player)){Tt={target:ft.target,t:ft.t};break}}const _t=vt+Ie(gt);let Lt=null;for(let st=D+1;st<K.length;st++){const ft=K[st];if((ft.type==="pass"?ft.from:ft.player)===b.player){Lt=ft;break}}let Xt=null;if((Lt==null?void 0:Lt.type)==="dribble"&&Lt.t-_t<=Rs){const st=Ki(wt,ze(b.to,Lt.to)),ft=pT(st,z),xt=ft?pi[ft]:null;if(xt&&t.clips[xt.id]){const Y=xt.standing?_t:vt+Ie({...gt,endSpeed:ws});Lt.t-Y>=k(xt)-1e-9&&(Xt={c:xt,delta:st})}}Tt&&Tt.t-_t<mo&&!(Xt!=null&&Xt.c.standing)&&(gt.endSpeed=ws),Xt&&L(b.player,Xt.c,Lt.t-k(Xt.c),0,wt,wt+Xt.delta),(o[ge=b.player]??(o[ge]=[])).push(gt),_[b.player]=gt,g[b.player]=Q(gt,b.player),M({player:b.player,at:[...b.to],t0:b.t});let Bt=null;for(const st of l)st.player===b.player&&(!Bt||st.at>Bt.at)&&(Bt=st);Bt&&Bt.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${Bt.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let le=Bt?[...Bt.carry]:Wn(r[b.player],wt);Ut&&(le=Wn(r[b.player],wt),l.push({player:b.player,at:b.t,carry:[...le],hand:{height:0,from:tt,rise:nd,follow:!0}}),y[b.player]=b.t);const At=Tt&&Tt.t-_t<=Rs?Wn(b.to,ze(b.to,Tt.target)):Wn(b.to,wt),Te=ei(b.player)%2===0?1:-1;let te=Te,E=!1;for(let st=D+1;st<K.length;st++){const ft=K[st];if((ft.type==="pass"?ft.from:ft.player)===b.player){if(ft.type==="dribble"&&ft.t-_t<=Rs){const Y=Ye([b.to[0]-gt.from[0],b.to[1]-gt.from[1]]),Rt=Ye([ft.to[0]-b.to[0],ft.to[1]-b.to[1]]),It=Y[0]*Rt[1]-Y[1]*Rt[0],St=It<0?1:-1;Math.abs(It)>.05&&St===-Te&&(te=St),E=Math.abs(Ki(ze(gt.from,b.to),ze(b.to,ft.to)))>Wc}break}}const j=R[b.player],H=!!j&&vt-j.end<=Rs&&Math.abs(Ki(j.h,wt))>Wc;R[b.player]={h:wt,end:_t};const q=Object.entries(r).filter(([st])=>st!==b.player).map(([,st])=>[...st]),O=QE(gt,le,At,xd[z]??xd.jog,te,{turnIn:H,turnOut:E,others:q});a.push(...O.flights),l.push({player:b.player,at:O.restEnd,carry:[...At]}),y[b.player]=O.restEnd,r[b.player]=[...b.to],yt(O.restEnd,(($=K[D+1])==null?void 0:$.t)??i.duration,[...At])}else if(b.type==="collect")nt(b.player,b.t,b.type),Ce(b.player,b.t,D);else if(b.type==="tackle"){nt(b.player,b.t,b.type),Qt(b.player,b.t);const z=b.from;ut(b.t)!==z&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${z}, but ${ut(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const pt=ie.has(b.player)&&!!t.clips[xo.id],Et=!pt&&b.style!=="slide"&&!!t.clips[bo.id],wt=b.t+(pt?xo:Et?bo:cc[0]).contact;let Ut=null,tt=-1/0;for(const Xt of l)Xt.player===z&&Xt.at<=wt&&Xt.at>tt&&(tt=Xt.at,Ut=[...Xt.carry]);if(Ut||(Ut=Wn(r[z],ze(r[z],r[b.player]))),Et){const Xt=lE*Nt,Bt=Ye([r[b.player][0]-r[z][0],r[b.player][1]-r[z][1]]);if(Math.hypot(r[b.player][0]-r[z][0],r[b.player][1]-r[z][1])<Xt){const le=[r[z][0]+Xt*Bt[0],r[z][1]+Xt*Bt[1]],At=_[b.player];if(At&&Math.hypot(At.to[0]-r[b.player][0],At.to[1]-r[b.player][1])<1e-6){const Te=(t.clips[Sn(t.groups.sprint??t.groups.run??t.groups.jog,b.player,b.t)].speed??At.cruise)*mi,te=Math.min(Ie(At),Math.max(wt-At.t0,.2));At.to=le;for(let E=0;E<8&&Ie(At)>te+1e-6&&At.cruise<Te;E++)At.cruise=Math.min(Te,At.cruise*Ie(At)/te);for(const E of g[b.player]??[]){const j=c.indexOf(E);j>=0&&c.splice(j,1)}g[b.player]=Q(At,b.player),r[b.player]=wt<At.t0+Ie(At)?Tn(At,wt).pos:le}else r[b.player]=le}}const vt=Et?Math.hypot(r[z][0]-r[b.player][0],r[z][1]-r[b.player][1]):Math.hypot(Ut[0]-r[b.player][0],Ut[1]-r[b.player][1]),gt=pt?xo.reach:Et?bo.reach+Ne:hE;vt>gt*Nt&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${vt.toFixed(2)} m away (reach ${(gt*Nt).toFixed(2)}) — move the tackler closer first`),Et&&vt<ko*Nt-1e-6&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: he is ${vt.toFixed(2)} m from ${z}, inside a body width (${(ko*Nt).toFixed(2)} m at this body scale) — the two of them draw as one`);const Tt=pt?xo:Et?bo:cc[Math.abs(ei(b.player)+Math.floor(b.t*10))%cc.length],_t=b.t+Tt.contact,Lt={player:b.player,clip:Tt.id,t0:b.t,contact:Tt.contact};if(c.push(Lt),M({player:b.player,at:Ut,t0:Math.max(b.t-hr,0,v[b.player]??0),lock:[b.t,b.t+Tt.duration]}),pt){const Xt=Ds(t,Lt),Bt=Wn(r[b.player],ze(r[b.player],Ut));m.push({t:_t,player:b.player});const le=dc(r[b.player],r[z],Ut);l.push({player:b.player,at:_t,carry:[...Ut],hand:{height:_o*Nt,follow:!0,bone:le}}),l.push({player:b.player,at:Xt,carry:Bt,hand:{height:Vn*Nt,from:_o*Nt,rise:oc,follow:!0,bone:le}}),y[b.player]=_t,Ct[b.player]=b.t+Tt.duration+Cs}if(!pt){const Xt=Ye([r[z][0]-r[b.player][0],r[z][1]-r[b.player][1]]),Bt=[-Xt[1],Xt[0]],le=(Ut[0]-r[z][0])*Bt[0]+(Ut[1]-r[z][1])*Bt[1]>=0?1:-1,At=te=>[r[z][0]+le*te*Nt*Bt[0]+od*Nt*Xt[0],r[z][1]+le*te*Nt*Bt[1]+od*Nt*Xt[1]];let Te=At(rd);if(Et){let te=hd(r[z],Ut,Te);for(let E=rd+.05;E<=1&&!(te>=cE*Nt);E+=.05){const j=At(E),H=hd(r[z],Ut,j);H>te&&(te=H,Te=j)}}a.push({from:Ut,to:Te,t0:_t,duration:ad,style:"ground",pop:!0}),m.push({t:_t,player:null})}if(Et){const Xt=oE.filter(Bt=>t.clips[Bt]);if(Xt.length){const Bt=Xt[Math.abs(ei(z)+Math.floor(b.t*10))%Xt.length];c.push({player:z,clip:Bt,t0:_t}),M({player:z,at:[...Ut],t0:Math.max(_t,v[z]??0),until:_t+t.clips[Bt].duration})}}else if(t.clips[sd]){let Xt=1/0;for(let te=D+1;te<K.length;te++){const E=K[te];if((E.type==="pass"?E.from:E.player)===z){Xt=E.t;break}}const Bt=Ye([r[z][0]-Ut[0],r[z][1]-Ut[1]]),le=aE*Nt,At=_t+uE,Te=ud([...r[z]],[r[z][0]+le*Bt[0],r[z][1]+le*Bt[1]],At,dr);if(At+dr+Ci<=Xt){(o[z]??(o[z]=[])).push(Te),_[z]=Te,c.push({player:z,clip:sd,t0:At,loopUntil:At+dr}),g[z]=[];const te=Math.max(At,v[z]??0);te<At+dr&&M({player:z,at:[...Ut],t0:te,until:At+dr}),r[z]=[...Te.to]}}pt||Ce(b.player,Math.max(Ds(t,Lt),_t+ad),D)}else{const z=b.type==="pass"?b.from:b.player,pt=I[z],Et=!!pt&&b.t>=pt.at-Mo&&b.t-pt.at<=lc;pt&&!Et&&console.warn(`[engine3d] header for ${z} at t=${b.t} does not meet the cross at their forehead (t=${pt.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete I[z];const wt=T[z],Ut=!!wt&&!!b.firstTime&&!Et;b.firstTime&&!wt&&!Et&&console.warn(`[engine3d] firstTime ${b.type} for ${z} at t=${b.t} has no ball arriving at their boot — played as an ordinary strike`),delete T[z],Et&&b.t-pt.at>pd&&console.warn(`[engine3d] header for ${z} at t=${b.t} pulled to the ball's arrival (t=${pt.at.toFixed(2)}s) — the ball cannot wait in the air`),nt(z,b.t,b.type),Et||Qt(z,b.t);const tt=b.type==="pass"?r[b.to]:ht[D].target,vt=b.type==="shoot"&&b.flightStyle!=="ground",gt=vt?FE:RA,Tt=vt?NE:hr;b.deadBall&&!Et&&se(z,b.t,tt);const _t=ie.has(z)&&ut(b.t)===z&&(((at=(Ot=ts(l,z,b.t))==null?void 0:Ot.hand)==null?void 0:at.height)??0)>0,Lt=!_t&&(b.style==="throw"||b.style==="roll")?b.style:null;ie.has(z)&&(Ct[z]??0)>b.t&&console.warn(`[engine3d] keeper ${z} is busy until t=${Ct[z].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const Xt=Y=>{if(!Et)return null;const Rt=Math.hypot(Y[0]-O[0],Y[1]-O[1]);return Rt>=RE?{style:"headed",loft:hc(Rt,Nt)}:null};let Bt=b.t;if(b.type==="shoot"&&!b.touch){const Y=_[z],Rt=Y?Y.t0+Ie(Y):-1/0;Y&&(Y.endSpeed??0)>0&&b.t-Rt>gd&&b.t-Rt<mo&&(Bt=Rt-gd)}let le="",At,Te,te=0,E=null,j=null;if(Et)At=pt.at,te=pt.height;else if(Ut)le=Sn(t.groups[vt?"shoot":"pass"],z,Bt),Te=t.clips[le].ballContact??0,Bt=wt.at-Te,At=wt.at,Bt<0&&console.warn(`[engine3d] first-time ${b.type} for ${z} wants its cue at t=${Bt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((_t||Lt)&&(b.type==="pass"||b.flightStyle==="ground")){E=b.style??xE(Math.hypot(tt[0]-r[z][0],tt[1]-r[z][1]));const Y=Lt?zA[Lt]:gn[E];le=Y.id,Te=Y.contact,At=b.t+Y.contact,te=E==="roll"?0:Y.release*Nt,Ct[z]=b.t+Y.duration+Cs}else{const Y=_[z],Rt=b.type==="shoot"&&Y&&(Y.endSpeed??0)>0&&Bt<=Y.t0+Ie(Y)+1e-9?Tn(Y,Bt).speed:0;j=me(z,Bt,tt,gt,b.type==="pass"||b.type==="shoot"&&!!b.touch),Rt>UE&&t.clips[Oo.id]&&!(b.type==="shoot"&&b.touch)?(le=Oo.id,Te=Oo.contact):le=Sn(t.groups[vt?"shoot":"pass"],z,b.t),At=Bt+(Te??t.clips[le].ballContact??0)}let H=null;Et||(H={player:z,clip:le,t0:Bt,...Te!==void 0?{contact:Te}:{}},c.push(H),G({player:z,at:[...tt],t0:Math.max(Bt-Tt,0,v[z]??0),lock:[Bt,At+Mn],until:At+Mn,headUntil:At-wT},Math.min(Bt,j??1/0)));const q=ze(r[z],tt),O=Et?[...pt.from]:Ut?[...wt.from]:Wn(r[z],q),st=Lt?nE:eE,ft=b.type==="pass"&&ie.has(b.to)&&!b.toFeet?b.flight:0,xt=b.type!=="pass"?0:E==="throw"?Math.max(.4,ft,Math.hypot(tt[0]-O[0],tt[1]-O[1])/st):b.style==="roll"?Math.max(b.flight,Math.hypot(tt[0]-O[0],tt[1]-O[1])/iE):b.flight;if(!Et&&!Ut){const Y=Math.max(Bt-SA,y[z]??0);Y>At&&console.warn(`[engine3d] departure window for ${z} is inverted (starts t=${Y.toFixed(2)}s, ball contact t=${At.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:z,windowStart:Y,contact:At,heading:q,...E?{toHeight:te}:{}})}if(b.type==="pass"&&ie.has(b.to)&&!b.toFeet){const Y=At+xt,Rt=V(b.to,D,Y);Rt.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${Rt.blocked} runs during the flight, so where they stand at t=${Y.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const It=Rt.atArrival,St=Ye([O[0]-It[0],O[1]-It[1]]),Zt=[It[0]+Ne*St[0],It[1]+Ne*St[1]],ae=(b.flightStyle==="clipped"||b.flightStyle==="lofted")&&b.style!=="roll",ce=((mt=b.deflect)==null?void 0:mt.style)==="lofted",kt=ae?(b.loft??0)>GA||ce?gn.catchHigh:gn.catch:gn.scoop[Math.abs(ei(b.to)+Math.floor(Y*10))%gn.scoop.length],$t=ae?Math.min(Vn*(kt===gn.catchHigh?2:1),rE)*Nt:0,Ft=Y-kt.contact;Ft<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Ft<Rt.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${Y.toFixed(2)}s wants t0=${Ft.toFixed(2)}s but their move is still running (until t=${Rt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Ft<At&&console.warn(`[engine3d] catch cue for ${b.to} at t=${Y.toFixed(2)}s wants t0=${Ft.toFixed(2)}s, before the ball leaves ${z} at t=${At.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:b.to,clip:kt.id,t0:Ft,contact:kt.contact});const Ae=b.flightStyle==="lofted"?hc(Math.hypot(Zt[0]-O[0],Zt[1]-O[1]),Nt)-(te+$t)/2:E==="throw"?Math.max(Lt?ac:1.5,b.loft??0):b.loft;if(a.push({from:O,to:Zt,t0:At,duration:xt,style:E==="kick"?"clipped":ae||E==="throw"?"lofted":"ground",...Ae!==void 0?{loft:Ae}:{},...$t?{toHeight:$t}:{},...te?{fromHeight:te}:{}}),M({player:b.to,at:[...r[z]],t0:b.t,lock:[Y-Mn,Y+Mn]}),b.deflect)a.push(id(Zt,$t,b.deflect,Y,Nt)),y[b.to]=Y;else{m.push({t:Y,player:b.to});const ee=dc(r[b.to],r[z],Zt);l.push({player:b.to,at:Y,carry:Zt,hand:ae?{height:Vn*Nt,from:$t,rise:oc,follow:!0,bone:ee}:{height:Vn*Nt,from:0,rise:td,follow:!0,bone:ee}}),y[b.to]=Y}Ct[b.to]=Ft+kt.duration+Cs}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??AE)>=CE){const Y=At+xt;let Rt=null,It=1/0,St=!1,Zt=!1,ae;for(let ee=D+1;ee<K.length;ee++){const ne=ht[ee],xe=K[ee];if((xe.type==="move"||xe.type==="collect")&&xe.player===b.to&&ae===void 0&&xe.t>=Y-Mo&&(ae=xe.t),!(!ne||ne.actor!==b.to)){Rt=ne.target,It=ne.t,Zt=xe.type==="pass"||xe.type==="shoot",St=Zt&&!!xe.header;break}}ae!==void 0&&Zt&&It-Y<=lc&&console.warn(`[engine3d] ${b.to} has a move at t=${ae.toFixed(2)}s between the cross landing on their forehead (t=${Y.toFixed(2)}s) and their strike at t=${It} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ce=Zt&&ae===void 0&&It>=Y-Mo&&(It-Y<=pd||St&&It-Y<=lc),kt=V(b.to,D,Y);kt.blocked&&!ce&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${kt.blocked} runs during the flight, so where they stand at t=${Y.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const $t=IE(kt.atArrival,O,Rt,Nt),Ft=Y-$t.clip.contact;Ft<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Ft.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Ft<kt.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Ft.toFixed(2)}s but their move is still running (until t=${kt.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:b.to,clip:$t.clip.id,t0:Ft,contact:$t.clip.contact});const Ae=Math.hypot($t.contact[0]-O[0],$t.contact[1]-O[1]);a.push({from:O,to:$t.contact,t0:At,duration:xt,style:"lofted",loft:hc(Ae,Nt)-(te+$t.height)/2,toHeight:$t.height,...te?{fromHeight:te}:{}}),ce?(I[b.to]={at:Y,from:$t.contact,height:$t.height},M({player:b.to,at:[...Rt],t0:Math.max(Ft-hr,0,v[b.to]??0),lock:[Ft,Y+Mn],until:Y+Mn})):(Zt&&It<Y-Mo?console.warn(`[engine3d] ${b.to}'s own strike at t=${It} is ${(Y-It).toFixed(2)}s BEFORE the cross reaches their forehead (t=${Y.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):St&&console.warn(`[engine3d] header for ${b.to} at t=${It} is ${(It-Y).toFixed(2)}s after the ball arrives (t=${Y.toFixed(2)}s) — ignored, cushioned instead`),M({player:b.to,at:[...r[z]],t0:b.t,lock:[Y-Mn,Y+Mn]}),a.push({from:$t.contact,to:$t.set,t0:Y,duration:uc,style:"drop",fromHeight:$t.height}),M({player:b.to,at:[...$t.faceAt],t0:Y}),m.push({t:Y,player:b.to}),y[b.to]=Y+uc,l.push({player:b.to,at:Y+uc,carry:$t.set}))}else if(b.type==="pass"){const Y=At+xt,Rt=Sn(t.groups.receive,b.to,Y),It=t.clips[Rt];let St=null,Zt=1/0,ae=!1;for(let ce=D+1;ce<K.length;ce++){const kt=K[ce];(kt.type==="pass"?kt.from:kt.player)===b.to&&Zt===1/0&&(Zt=kt.t);const Ft=ht[ce];if(!(!Ft||Ft.actor!==b.to)){Ft.t-Y<=Rs&&(St=Ft.target,ae=(kt.type==="pass"||kt.type==="shoot")&&!!kt.firstTime);break}}if(ae&&St){const ce=V(b.to,D,Y),kt=Wn(ce.atArrival,ze(ce.atArrival,St));a.push({from:O,to:kt,t0:At,duration:xt,style:b.flightStyle==="lofted"?"lofted":b.flightStyle==="clipped"?"clipped":"ground",...b.loft!==void 0?{loft:b.loft}:{},...te?{fromHeight:te}:{}}),M({player:b.to,at:[...r[z]],t0:b.t,lock:[Y-Mn,Y+Mn]}),T[b.to]={at:Y,from:kt},yt(Y,((jt=K[D+1])==null?void 0:jt.t)??i.duration,kt)}else{const ce=HE(tt,O,St);let kt=b.t;{const ee=V(b.to,D,Y),ne=ee.expected,xe=Math.max(b.t,ee.busyUntil),Ge=Math.max(ee.afterT,b.t),vn=ee.blocked;kt=xe;const pe=Math.hypot(ce.contact[0]-ne[0],ce.contact[1]-ne[1]);if(pe>AA)if(vn)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${pe.toFixed(2)}m away at t=${Y.toFixed(2)}s, but their authored ${vn} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const ke=Ye([ce.contact[0]-ne[0],ce.contact[1]-ne[1]]),qe=[ce.contact[0]-Ne*ke[0],ce.contact[1]-Ne*ke[1]],Oe=t.groups.walk,Ke=Oe!=null&&Oe.length?t.clips[Oe[0]].speed??In:In,yn={from:ne,to:qe,t0:0,cruise:Ke,accel:Dn},ln=Y-Yh-Ie(yn);ln<xe-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(pe-Ne).toFixed(2)}m walk to the contact point would need to start at t=${ln.toFixed(2)}s but they're busy until t=${xe.toFixed(2)}s — skipped (the standing stretch stays)`):(yn.t0=ln,kt=Y-Yh,X.push({player:b.to,afterT:Ge,move:yn,faceBall:[...O],faceSettle:[...ce.faceAt],arrival:Y}))}}const $t=It.ballContact??0,Ft=Math.min($t,Math.max(TA,Math.min(EA,wA*xt,Y-(kt+Ko)))),Ae=Y-Ft;Ae<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Ae.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:b.to,clip:Rt,t0:Ae,...$t>Ft?{offset:$t-Ft}:{}}),a.push({from:O,to:ce.contact,t0:At,duration:xt,style:E==="throw"||b.flightStyle==="lofted"?"lofted":E==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...E==="throw"?{loft:Math.max(Lt?ac:1.5,b.loft??0)}:E==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...te?{fromHeight:te}:{},...Xt(ce.contact)??{}}),a.push({from:ce.contact,to:ce.set,t0:Y,duration:Qn,style:"ground"}),M({player:b.to,at:[...r[z]],t0:b.t,lock:[Y-Mn,Y+Mn]}),G({player:b.to,at:[...ce.faceAt],t0:Y},Zt),m.push({t:Y,player:b.to}),y[b.to]=Y+Qn,l.push({player:b.to,at:Y+Qn,carry:ce.set}),yt(Y+Qn,((Ht=K[D+1])==null?void 0:Ht.t)??i.duration,ce.set)}}else if(b.flightStyle==="ground"){const Y=Math.hypot(tt[0]-O[0],tt[1]-O[1]),Rt=b.flight??(b.touch?Math.sqrt(2*Y/_r):E==="throw"?Math.max(.4,Y/st):Y/DE);if(a.push({from:O,to:[...tt],t0:At,duration:Rt,style:b.touch?"push":E==="throw"?"lofted":E==="kick"?"clipped":"ground",...b.touch?{endFrac:0}:{},...E==="throw"?{loft:Lt?ac:1.5}:E==="kick"?{loft:3}:{},...te?{fromHeight:te}:{},...Xt(tt)??{}}),b.deflect){const It=Math.hypot(b.deflect.to[0]-tt[0],b.deflect.to[1]-tt[1]);a.push({from:[...tt],to:[...b.deflect.to],t0:At+Rt,style:"ground",duration:tE(Y,Rt,It)})}}else{const Y=Math.hypot(tt[0]-O[0],tt[1]-O[1]),Rt=b.flight??Y/LE,It=Ye([tt[0]-O[0],tt[1]-O[1]]),St=[tt[0]+md*It[0],tt[1]+md*It[1]],Zt=At+Rt,ae=a.length;a.push({from:O,to:St,t0:At,duration:Rt,style:"shot",...te?{fromHeight:te}:{}}),a.push({from:St,to:St,t0:Zt,duration:PE,style:"drop"}),yt(((he=K[D-1])==null?void 0:he.t)??0,Bt,O);let ce=!1;for(const kt of W){const $t=si=>{const yi=V(kt.id,D,si);if(yi.afterT>-1/0)return yi.atArrival;const Bn=_[kt.id];return Bn&&si<Bn.t0+Ie(Bn)?Tn(Bn,si).pos:[...r[kt.id]]},Ft=At+Zh(Math.max(Rt,ed)),Ae=Jh(At,Rt,gn.dive.left.contact).t0,ee=b.type==="shoot"?b.deflect:void 0,ne=de||!!ee,xe=$t(ne?Ft:Ae),Ge=[tt[0]-xe[0],tt[1]-xe[1]],vn=ze(xe,O),pe=ne?vE(xe,vn,O,St,Nt):null;if(ee&&!pe&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${kt.id} is ${$p(xe,O,St).reach.toFixed(2)} m off the ball line at body scale ${Nt} (his reach is ${(qp*Nt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!pe){if(Math.hypot(Ge[0],Ge[1])>Xp*Nt)continue;const si=em(xe,vn,St),yi=PA[si],Bn=t.clips[yi],{t0:ri,timeScale:cs}=Jh(At,Rt,gn.dive[si].contact);if(M({player:kt.id,at:[...O],t0:Math.max(Bt-hr,0,v[kt.id]??0),...Bn?{lock:[Bt,ri+Bn.duration/cs]}:{}}),Bn){c.push({player:kt.id,clip:yi,t0:ri,...cs>1?{timeScale:cs}:{}});const Yn=$t(ri),$s=yE(Yn,O,St,Nt),Lr=[$s[0]-Yn[0],$s[1]-Yn[1]],Dr=Math.hypot(Lr[0],Lr[1]),Nl=Math.min(Dr,kA*Nt),Ul=Dr>1e-9?[Yn[0]+Lr[0]/Dr*Nl,Yn[1]+Lr[1]/Dr*Nl]:[...Yn],zm=Math.min(BA,Math.max(OA,Zt-ri));d.push({player:kt.id,from:Yn,to:Ul,t0:ri,duration:zm}),x[kt.id]={t0:ri,at:[...r[kt.id]]},r[kt.id]=[...Ul]}continue}if(ce)continue;ce=!0;const ke=a[ae];a.splice(ae+1,1);let qe,Oe=pe.contact,Ke=Vn*Nt;if(pe.kind==="dive"){ke.duration=Math.max(ke.duration,ed),qe=At+Zh(ke.duration);const si=At+ke.duration,yi={player:kt.id,from:[...xe],to:pe.travelTo,t0:qe,duration:pe.contactOffset};d.push(yi);const Bn=Yp(yi,si),ri=Math.min(1,(si-qe)/pe.contactOffset),cs=gn.dive[pe.side],Yn=ri*cs.reach*Nt,$s=Ye([pe.contact[0]-xe[0],pe.contact[1]-xe[1]]);Oe=[Bn[0]+Yn*$s[0],Bn[1]+Yn*$s[1]],Ke=(Vn+(cs.hand-Vn)*ri)*Nt,x[kt.id]={t0:qe,at:[...r[kt.id]]},r[kt.id]=[...pe.travelTo]}else qe=Math.max(Bt,At+ke.duration-pe.contactOffset);const yn=At+ke.duration;ke.to=Oe,ke.toHeight=Ke,c.push({player:kt.id,clip:pe.clip,t0:qe,contact:pe.contactOffset});const ln=qe+pe.clipDuration;if(M({player:kt.id,at:[...O],t0:Math.max(Bt-hr,0,v[kt.id]??0),lock:[Bt,ln]}),ee){a.push(id(Oe,Ke,ee,yn,Nt)),y[kt.id]=yn,Ct[kt.id]=ln+Cs;continue}m.push({t:yn,player:kt.id});const fa=dc(r[kt.id],O,Oe);pe.kind==="catch"?l.push({player:kt.id,at:yn,carry:Oe,hand:{height:Vn*Nt,follow:!0,bone:fa}}):(l.push({player:kt.id,at:yn,carry:Oe,hand:{height:_o*Nt,from:Ke,rise:XA,follow:!0,bone:fa}}),l.push({player:kt.id,at:ln,carry:Oe,hand:{height:Vn*Nt,from:_o*Nt,rise:oc,follow:!0,bone:fa}})),y[kt.id]=yn,Ct[kt.id]=ln+Cs}}if(b.type==="pass"&&!E&&H){const Y=t.groups.walk,Rt=Y!=null&&Y.length?t.clips[Y[0]].speed??In:In,It=[r[z][0]+wr*Math.sin(q),r[z][1]+wr*Math.cos(q)],St=_[z],Zt=St?St.t0+Ie(St):-1/0;let ae=1/0;for(let ee=D+1;ee<K.length;ee++){const ne=K[ee];if((ne.type==="pass"?ne.from:ne.player)===z){ae=ne.t;break}}const ce={from:[...r[z]],to:It,t0:Ds(t,H),cruise:Rt,accel:Dn},kt=ce.t0+Ie(ce)+Ci<=ae;let $t=null,Ft=null;if(St&&p.has(St)&&At>=Zt&&At-Zt<=YT&&Pl(o[z],At)<hm){const ee=QT(),ne={...St,to:[...St.to],cruise:Math.max(St.cruise,ee),endSpeed:ee};ne.t0=At-Ie(ne),ne.t0>=St.t0-1e-9&&Xs(ne).peak>=ee-1e-9&&($t=ne,Ft=kt?{from:[...r[z]],to:It,t0:At,cruise:ee,accel:Yo,startSpeed:ee}:i1(r[z],q,ee,ae-At,At,xe=>lt(xe)&&Jt(xe)))}if($t&&St){for(const ee of g[z]??[]){const ne=c.indexOf(ee);ne>=0&&c.splice(ne,1)}Object.assign(St,$t),g[z]=Q(St,z)}const Ae=Ft??(kt?ce:null);Ae&&((o[z]??(o[z]=[])).push(Ae),_[z]=Ae,g[z]=Q(Ae,z),r[z]=[...Ae.to])}m.push({t:At,player:null})}const Z=qt.get(B);Z!==void 0&&Z<b.t&&qt.delete(B)}U(1/0),m.sort((D,b)=>D.t-b.t),c.sort((D,b)=>D.t0-b.t0),OT(c,o,t);const dt=$T(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:f,bounces:dt,ballSwaps:Dt,attachTo(D){let b=null;for(const B of m)B.t<=D&&(b=B.player);return b}}}const r1=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Dd=new Map,Fd=30;function o1(i,t=0){const e=`${i.uuid}@${t}`;let n=Dd.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>r1.test(Fe.parseTrackName(s.name).nodeName??"")),Kg.makeClipAdditive(n,t*Fd,n,Fd),Dd.set(e,n)),n}function a1(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/sm),n=Math.min(1,(t-i)/rm);return kT*Math.max(0,Math.min(e,n))}function c1(i,t,e,n=[]){const s=m=>Ds(i,m),r=(m,_)=>um(t,i,m,_);function o(m,_){let g=0;for(const p of t){if(p.player!==m)continue;const v=s(p);v<=_&&v>g&&(g=v)}return g}const a=new Map,c=new Map,u=new Map,h=new Map,l=nm(i),d=new Map;for(const m of l)for(const _ of i.groups[m.gait]??[])d.set(_,m.gait);function f(m,_,g,p,v){const y=r(m,g),x=y!=null&&y.additive?y:null,R=x?Cl(l,v):null,M=R?Sn(i.groups[R.gait],m,x.t0):null,w=x?null:y,P=w??(M?x:null),S=M??(w==null?void 0:w.clip)??FT(GE(i,e.get(m)),m,DT(m,g-o(m,g))),A=a.get(m);if(TT(A,S,w)){const nt=i.clips[S],ut=_.mixer.clipAction(_.clips.get(S));ut.reset(),ut.loop=nt.loop?2201:2200,ut.clampWhenFinished=!0,w!=null&&w.offset&&(ut.time=w.offset),A&&A.action!==ut&&(A.action.fadeOut(hT(i,A.clip,S)),ut.fadeIn(om(i,S,A.clip))),ut.play(),a.set(m,{clip:S,offset:w==null?void 0:w.offset,action:ut})}const C=a.get(m).action,k=!!P&&P.timeScale===void 0&&i.clips[S].category==="locomotion",L=k?d.get(S):void 0,F=k?L?rT(l,v,L):{timeScale:iT(v,i.clips[S].speed??In),partner:null,weight:0}:null,J=F!=null&&F.partner&&P?Sn(i.groups[F.partner],m,P.t0):null,G=c.get(m);if(G&&G.clip!==J&&(G.clip!==S&&(G.action.weight=0,G.action.stop()),c.delete(m)),P)if((w==null?void 0:w.timeScale)!==void 0)C.timeScale=w.timeScale,C.weight=1;else if(F){if(C.timeScale=F.timeScale,C.weight=1-F.weight,J){let nt=c.get(m);if(!nt){const it=_.mixer.clipAction(_.clips.get(J));it.reset(),it.loop=2201,it.play(),nt={clip:J,action:it},c.set(m,nt)}nt.action.weight=F.weight,nt.action.timeScale=F.timeScale;const ut=i.clips[S].duration,Dt=i.clips[J].duration;ut>0&&(nt.action.time=C.time/ut%1*Dt)}}else C.timeScale=1,C.weight=1;else{C.weight=1,C.timeScale=Id(m);const nt=i.clips[S].duration;C.time=((Cd(m,nt)+g*C.timeScale)%nt+nt)%nt}const X=KT(n,m,g),U=h.get(m),V=X>0?_.clips.get(WT):void 0;if(V){let nt=U;nt||(nt=_.mixer.clipAction(V),nt.reset(),nt.loop=2201,nt.timeScale=0,nt.play(),h.set(m,nt));const ut=V.duration;nt.time=((Cd(m,ut)+g*Id(m))%ut+ut)%ut,nt.weight=X,C.weight*=1-X}else U&&(U.weight=0,U.stop(),U.enabled=!1,h.delete(m));const Q=u.get(m);if(x){const nt=x.offset??0,ut=Math.max(0,i.clips[x.clip].duration-nt),Dt=a1(g-x.t0,ut);let it=Q;if(!it||it.clip!==x.clip||it.offset!==nt){it&&(it.action.weight=0,it.action.stop(),it.action.enabled=!1);const ct=_.mixer.clipAction(o1(_.clips.get(x.clip),nt));ct.reset(),ct.loop=2200,ct.clampWhenFinished=!0,ct.timeScale=0,ct.play(),u.set(m,it={clip:x.clip,offset:nt,action:ct})}it.action.time=Math.min(i.clips[x.clip].duration,nt+Math.max(0,g-x.t0)),it.action.weight=Dt}else Q&&(Q.action.weight=0,Q.action.stop(),Q.action.enabled=!1,u.delete(m));_.mixer.update(p)}return{applyAnim:f,cueAt:r}}class l1{constructor(t,e){Pe(this,"_t",0);Pe(this,"_playing",!1);Pe(this,"speed",1);Pe(this,"loopCbs",[]);Pe(this,"endCbs",[]);Pe(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function u1(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,d){const f=e.get(o)??0,m=cm(i,o,a);let _;if(m){const y=s.get(o);y&&y.span===m?_=y.from:(_=f,s.set(o,{span:m,from:_}))}else s.delete(o);const g=m?dT(i,o,a,_):null,p=g?fT(pi[m.clip],u):d?fA:zp(u),v=g?Wh(f,g.heading,c,p):l?f:Wh(f,h,c,p);return n.set(o,c>0?(v-f)/c:0),e.set(o,v),{h:v,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const h1=.2,d1=.5,f1=.06,p1=.25,Nd=.15,m1=.25,g1=.2;function _1(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=h1*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function b1(i,t,e=1){return i.speed>d1*e||i.y>t+f1*e}function x1(i,t,e=1){const n=Math.hypot(i,t),s=p1*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function v1(i,t){for(const e of i??[]){const n=e.t0+Ie(e);if(t>n-m1&&t<=n)return!0}return!1}const y1=new Set(["turn","transition","receive","pass","idle"]);function M1(i,t,e){return e||i===null?!0:y1.has(t??"")}function S1(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/Nd;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[x,R]=e(l,a);return[l.corrX+x,l.corrZ+R]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(x=>[...x]),l.prevRoot=[o[0],o[1]],[0,0];const d=o[0]-l.prevRoot[0],f=o[1]-l.prevRoot[1],m=l.rootV=Math.hypot(d,f)/c,_=r.map((x,R)=>{const M=l.prev[R],w=M?Math.hypot(x[0]-M[0]-d,x[2]-M[2]-f)/c:1/0;return{x:x[0],y:x[1],z:x[2],speed:w}}),g=x=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||m>=g1)g();else if(l.foot>=0&&b1(_[l.foot],l.plantY,h)&&g(),l.foot<0){const x=_1(_,h);x>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=x,l.plantY=_[x].y,l.anchorX=r[x][0],l.anchorZ=r[x][2])}else{const[x,R]=x1(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=x,l.corrZ=R}const[p,v]=e(l,a);(a-l.outAt)/Nd>=1&&(l.outX=0,l.outZ=0);const y=[l.corrX+p,l.corrZ+v];return l.prev=r.map(x=>[...x]),l.prevRoot=[o[0],o[1]],l.prevT=a,y}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const Ll=Math.PI/180,mm=2*Ll,gm=4*Ll,A1=8*Ll,E1=gm/mm,Ud=.12,T1=.6,w1=.08;function R1(i){return i<E1?0:Math.min(A1,Math.max(gm,mm*i))}function C1(i,t){const e=Math.hypot(i[0],i[1]),n=R1(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function mc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function I1(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=C1(s,r),u=mc(i.get(n)??0,c.pitch*o,a,Ud),h=mc(t.get(n)??0,c.roll*o,a,Ud);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=aa(s)*T1,a=mc(e.get(n)??0,o,r,w1);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const gc=new an,kd=new an,Od=new an,Zo=new an,P1=new kn;function L1(i,t){gc.identity();for(let e=i.parent;e&&e!==t;e=e.parent)gc.premultiply(e.quaternion);return gc}const Rr=new WeakMap;function _m(i){const t=Rr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function bm(i,t){const e=Rr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):Rr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function Bd(i,t,e,n,s){if(_m(t),!e&&!n&&!s){Rr.delete(t);return}Zo.copy(t.quaternion);const r=L1(t,i);kd.setFromEuler(P1.set(e,n,s,"YXZ")),Od.copy(r).invert().multiply(kd).multiply(r),t.quaternion.premultiply(Od),bm(t,Zo)}function D1(i,t){if(_m(i),!t){Rr.delete(i);return}Zo.copy(i.quaternion),i.rotation.y+=t,bm(i,Zo)}function Mr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function F1(i){var r;const t=[i.root[0]+Ne*Math.sin(i.heading),i.root[1]+Ne*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?Mr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Ne*Math.sin(s.heading),i.root[1]+Ne*Math.cos(s.heading)],a=Mr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function N1(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*Mr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?Mr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=Mr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function Bo(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=rs(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:MA(e),speed:Hp(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:F1(n),height:N1(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const U1=1.2,k1=40;function xm(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=Tn(s,e).pos);return Zp(i.dives,i.moves[t],t,e)??n}function Gd(i,t){const e=i.attachTo(t),n=Bo({t,holderId:e,holderRoot:e?xm(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const vm=.55,O1=.3,zd=.6,B1=.6,G1=.4,ua=i=>Math.min(Math.max(i,0),1);function z1(i,t){if(t<=i.t0)return 0;if(t>=i.t0+Ie(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=Tn(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function H1(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,d=a-s-.1,f=_=>{const g=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+h*g,i[1]+u*_+l*g]},m=[];for(let _=.15;_+r*.5<=d;_+=r+o){const g=Math.min(_+r,d),[p,v]=f(_),[y,x]=f(g);m.push({ax:p,ay:v,bx:y,by:x,k:(_+g)/2/a})}return m}function Hd(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=vm*e,a=O1*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const Vd=1.6,Ao=2.2,V1=5,W1=5,j1=6,Wd=14,X1=4,q1=20,K1="#E8ECEF",$1="#8D949B",Y1=1.2,Z1=3,J1=.4;function jd(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(j1*n,s*.5),o=i==="dribble",a=i==="pass"?q1*n:o?Wd*n/8:V1*n;return{dashes:H1(t,e,o?X1*n:0,Wd*n,r,a,i==="move"?W1*n:0),headScale:r/vm}}function Q1(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function tw(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function ha(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=Y1}function ew(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const Xd=.012,nw=.14,iw=.38,qd=.15,ym=.3,sw="#bfe333";function rw(i){const t=1-2*ym,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const Eo=1.5,ow=.3,aw=24;function Kd(i){return qd+(iw-qd)*ua(i)}function jc(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=Eo?0:1-s/Eo;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,Eo)/Eo;return Math.min(r,a*Math.max(1-(i-o)/ow,0))}function Xc(i,t){for(let e=t+1;e<i.length;e++)if(ha(i[e]))return i[e].t0}function cw(i,t){const e=[];for(let n=0;n<i.length;n++)ha(i[n])&&jc(t,i[n],Xc(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function lw(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=rs(i,t).pos;return ua(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function uw(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=rs(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||ha(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=rs(r,e).pos;return[o[0],o[1]]}function $d(i,t){const e=ua((i-t)/.06);return zd+(1-zd)*e}function hw(i,t){return ua((i-(t-B1))/G1)}const dw=.35;function fw(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+dw}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+Qn})}return n.sort((s,r)=>s.t0-r.t0)}function pw(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const Yd=1e-6;function qc(i,t,e){return Kp(i,t,e)>0}function mw(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Yd);if(r&&qc(i.arrivals,r,s.t0-Yd))return{kind:"halo"}}const n=pw(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&qc(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function gw(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const _w=.85;function bw(i,t){return i>0?{draw:t>=i*_w,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const xw=.15,vw=1e-6;function Zd(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function yw(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function Mm(i,t,e,n){var o;const s=ts(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=Zd((n-yw(i,e,s))/xw);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-Zd((n-a.windowStart)/Math.max(a.contact-a.windowStart,vw)));return r}function Mw(i,t,e){var s,r;const n=(r=(s=ts(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function Sw(i,t,e,n){return qc(i,e,n)||Mm(i,t,e,n)>0}const Aw=25;function Ew(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function Tw(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(Ew(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=Hp(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/Aw),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const ww=.02;function Rw(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=ww,o)}function Cw(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{Rw(e,n,s,r,o,a,c,t),t=!1}}const Jd=new cn,To=new N;class Sm extends h0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new je(t,3)),this.setAttribute("uv",new je(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Lc(e,6,1);return this.setAttribute("instanceStart",new Xn(n,3,0)),this.setAttribute("instanceEnd",new Xn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Lc(e,6,1);return this.setAttribute("instanceColorStart",new Xn(n,3,0)),this.setAttribute("instanceColorEnd",new Xn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Vg(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Jd.setFromBufferAttribute(e),this.boundingBox.union(Jd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)To.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(To)),To.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(To));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Gt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};En.line={uniforms:Qc.merge([Gt.common,Gt.fog,Gt.line]),vertexShader:`
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
		`};class Dl extends xi{constructor(t){super({type:"LineMaterial",uniforms:Qc.clone(En.line.uniforms),vertexShader:En.line.vertexShader,fragmentShader:En.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const _c=new Me,Qd=new N,tf=new N,nn=new Me,sn=new Me,Zn=new Me,bc=new N,xc=new _e,rn=new ip,ef=new N,wo=new cn,Ro=new On,Jn=new Me;let ti,ns;function nf(i,t,e){return Jn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Jn.multiplyScalar(1/Jn.w),Jn.x=ns/e.width,Jn.y=ns/e.height,Jn.applyMatrix4(i.projectionMatrixInverse),Jn.multiplyScalar(1/Jn.w),Math.abs(Math.max(Jn.x,Jn.y))}function Iw(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){rn.start.fromBufferAttribute(s,a),rn.end.fromBufferAttribute(r,a),rn.applyMatrix4(e);const u=new N,h=new N;ti.distanceSqToSegment(rn.start,rn.end,h,u),h.distanceTo(u)<ns*.5&&t.push({point:h,pointOnLine:u,distance:ti.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Pw(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;ti.at(1,Zn),Zn.w=1,Zn.applyMatrix4(t.matrixWorldInverse),Zn.applyMatrix4(n),Zn.multiplyScalar(1/Zn.w),Zn.x*=r.x/2,Zn.y*=r.y/2,Zn.z=0,bc.copy(Zn),xc.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(nn.fromBufferAttribute(c,d),sn.fromBufferAttribute(u,d),nn.w=1,sn.w=1,nn.applyMatrix4(xc),sn.applyMatrix4(xc),nn.z>l&&sn.z>l)continue;if(nn.z>l){const y=nn.z-sn.z,x=(nn.z-l)/y;nn.lerp(sn,x)}else if(sn.z>l){const y=sn.z-nn.z,x=(sn.z-l)/y;sn.lerp(nn,x)}nn.applyMatrix4(n),sn.applyMatrix4(n),nn.multiplyScalar(1/nn.w),sn.multiplyScalar(1/sn.w),nn.x*=r.x/2,nn.y*=r.y/2,sn.x*=r.x/2,sn.y*=r.y/2,rn.start.copy(nn),rn.start.z=0,rn.end.copy(sn),rn.end.z=0;const _=rn.closestPointToPointParameter(bc,!0);rn.at(_,ef);const g=Ff.lerp(nn.z,sn.z,_),p=g>=-1&&g<=1,v=bc.distanceTo(ef)<ns*.5;if(p&&v){rn.start.fromBufferAttribute(c,d),rn.end.fromBufferAttribute(u,d),rn.start.applyMatrix4(o),rn.end.applyMatrix4(o);const y=new N,x=new N;ti.distanceSqToSegment(rn.start,rn.end,x,y),e.push({point:x,pointOnLine:y,distance:ti.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class Lw extends we{constructor(t=new Sm,e=new Dl({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Qd.fromBufferAttribute(e,o),tf.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Qd.distanceTo(tf);const r=new Lc(s,2,1);return t.setAttribute("instanceDistanceStart",new Xn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Xn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ti=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;ns=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ro.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=ns*.5;else{const l=Math.max(s.near,Ro.distanceToPoint(ti.origin));u=nf(s,l,c.resolution)}if(Ro.radius+=u,ti.intersectsSphere(Ro)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),wo.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=ns*.5;else{const l=Math.max(s.near,wo.distanceToPoint(ti.origin));h=nf(s,l,c.resolution)}wo.expandByScalar(h),ti.intersectsBox(wo)!==!1&&(n?Iw(this,e):Pw(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(_c),this.material.uniforms.resolution.value.set(_c.z,_c.w))}}class Am extends Sm{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Dw extends Lw{constructor(t=new Am,e=new Dl({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function Fw(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const sf=.55,Em=.55,rf=.006,Nw=i=>1/(1+Math.max(i,0)),Uw=i=>Em/(1+2*Math.max(i,0)),kw=.6,Ow=(i,t)=>t>0?i/t*kw:0,Bw=14,Gw=.25,Tm=.25,Co=Math.round(Tm*60)+2,zw=2,Hw=.5,Vw=16774102,Ww=20,vc=.06,yc=.06,of=.09;function jw(i){if(!(i>=0)||i>=yc+of)return[1,1,1];const t=i<yc?1:1-(i-yc)/of;return[1+vc*t,1-vc*t,1+vc*t]}const Xw=.02,qw=2;let pr=null;function Kw(){if(pr)return pr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),pr=new wn(i),pr.userData.shared=!0,pr}function af(i){let{bodyScale:t,radius:e}=i;const n=new en({map:Kw(),transparent:!0,depthWrite:!1,opacity:Em,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new we(new $n(sf,sf).rotateX(-Math.PI/2),n);s.position.y=rf,s.renderOrder=1,i.root.add(s);const r=new Dl({linewidth:zw,color:Vw,vertexColors:!0,transparent:!0,opacity:Hw,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new Am;o.setPositions(new Float32Array(Co*3)),o.setColors(new Float32Array(Co*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new Dw(o,r);u.frustumCulled=!1,u.renderOrder=Ww,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new N;let f=!1,m=!1,_=-1;const g=new N;function p(){s.scale.setScalar(t)}p();function v(y){const x=f?d.distanceTo(y.pos):0,R=f&&x>qw,M=y.height<=Xw;if(s.visible=!y.held,s.visible&&(s.position.set(y.pos.x,rf,y.pos.z),s.scale.setScalar(t*Nw(y.height)),n.opacity=Uw(y.height)),f&&!R&&y.dt>0&&x>1e-9){const{axis:C,angle:k}=Fw([d.x,d.z],[y.pos.x,y.pos.z],e);if(C[0]!==0||C[2]!==0){g.set(C[0],C[1],C[2]);const L=M?k:Ow(x/y.dt,e)*y.dt;L>0&&i.mesh.rotateOnWorldAxis(g,L)}}M&&m&&!R&&(_=y.t),R&&(_=-1),m=!M;const[w,P,S]=_<0?[1,1,1]:jw(y.t-_);if(i.mesh.scale.set(t*w,t*P,t*S),R&&(l.length=0),h&&y.dt>0){for(l.push({t:y.t,p:y.pos.clone()});l.length&&y.t-l[0].t>Tm;)l.shift();for(;l.length>Co;)l.shift()}if(h&&(y.speed>Bw||(y.apex??0)>=Gw)&&l.length>=2){const k=l.length-1,L=a.array,F=c.array;for(let J=0;J<Co-1;J++)for(const[G,X]of[[0,J],[3,J+1]]){const U=l[Math.min(X,k)].p,V=6*J+G;L[V]=U.x,L[V+1]=U.y,L[V+2]=U.z;const Q=Math.min(X,k)/k;F[V]=F[V+1]=F[V+2]=Q}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=k,u.visible=!0}else u.visible=!1;d.copy(y.pos),f=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(y,x,R){t=y,e=x,p(),r.resolution.set(R.width,R.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:_})}}const $w=.055,Yw=.17,ji=.015,cf=2.1,Zw=.16,Jw=.1,Qw=1.6,tR=.45,eR=.11,nR={technical:iM,tactical:sM,physical:rM,social:oM};function iR(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new wn(i)}function sR(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function rR(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?nR[i.color]??i.color:Ni,r=Math.min(t.width,t.height)*.14;if(sR(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=Zw,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=bw(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new wn(t);return o.colorSpace=He,o}function oR(i){var y,x;const{scene:t,drill:e,schedule:n}=i,s=(...R)=>{for(const M of R)M.traverse(w=>{const P=w.material;for(const S of Array.isArray(P)?P:P?[P]:[])S.toneMapped=!1});t.add(...R)},r=i.pathM??Jw,o=R=>R*r*(i.pathWidthK??1),a=gw(i.search??location.search,(y=e.overlays)==null?void 0:y.runPaths),{width:c,length:u}=e.pitch,h=R=>R-c/2,l=R=>R-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(R=>[R.id,R.start])),ballStart:Vo(e),headingAt:i.headingAt},f=ew(e.players,Vo(e),n.attachTo(0)),m=new Map(e.players.map(R=>[R.id,R.team])),_=R=>m.get(R)===f?K1:$1,g=[];{const R=k1,M=new Float32Array(R*3),w=new Xe;w.setAttribute("position",new De(new Float32Array(R*2*3),3)),w.setAttribute("color",new De(new Float32Array(R*2*3),3));const P=new Float32Array(R*2*2);for(let G=0;G<R;G++)P.set([0,G/(R-1),1,G/(R-1)],G*4);w.setAttribute("uv",new De(P,2));const S=new Uint16Array((R-1)*6);for(let G=0;G<R-1;G++){const X=G*2;S.set([X,X+1,X+2,X+1,X+3,X+2],G*6)}w.setIndex(new De(S,1));const A=(()=>{const G=document.createElement("canvas");G.width=64,G.height=1;const X=G.getContext("2d"),[U,V,Q]=nM,nt=X.createLinearGradient(0,0,64,0);nt.addColorStop(0,`rgba(${U},${V},${Q},0)`),nt.addColorStop(.28,`rgba(${U},${V},${Q},0.28)`),nt.addColorStop(.44,"rgba(216,247,120,0.8)"),nt.addColorStop(.5,"rgba(255,255,255,1)"),nt.addColorStop(.56,"rgba(216,247,120,0.8)"),nt.addColorStop(.72,`rgba(${U},${V},${Q},0.28)`),nt.addColorStop(1,`rgba(${U},${V},${Q},0)`),X.fillStyle=nt,X.fillRect(0,0,64,1);const ut=new wn(G);return ut.colorSpace=He,ut})(),C=new we(w,new en({map:A,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));C.frustumCulled=!1,C.renderOrder=6,s(C);const k=new N,L=new N,F=new N,J=U1/(R-1);g.push((G,X)=>{if(C.visible=a.trail,!a.trail)return;for(let Q=0;Q<R;Q++){const nt=Gd(d,G-Q*J);M[Q*3]=h(nt.pos[0]),M[Q*3+1]=$w+nt.height,M[Q*3+2]=l(nt.pos[1])}const U=w.getAttribute("position"),V=w.getAttribute("color");F.set(1,0,0);for(let Q=0;Q<R;Q++){const nt=Math.min(Q,R-2);k.set(M[nt*3]-M[nt*3+3],M[nt*3+1]-M[nt*3+4],M[nt*3+2]-M[nt*3+5]),L.set(M[Q*3],M[Q*3+1],M[Q*3+2]).sub(X.position),k.lengthSq()>1e-10&&(k.cross(L),k.lengthSq()>1e-10&&F.copy(k.normalize()));const ut=Math.pow(1-Q/(R-1),1.2),Dt=Yw*(.35+.65*ut),it=M[Q*3],ct=M[Q*3+1],ot=M[Q*3+2];U.setXYZ(Q*2,it+F.x*Dt,ct+F.y*Dt,ot+F.z*Dt),U.setXYZ(Q*2+1,it-F.x*Dt,ct-F.y*Dt,ot-F.z*Dt);const et=ut;V.setXYZ(Q*2,et,et,et),V.setXYZ(Q*2+1,et,et,et)}U.needsUpdate=V.needsUpdate=!0})}{const R=[];let M=0,w=0;for(const P of e.events){if(P.type!=="move"&&P.type!=="dribble")continue;const S=(n.moves[P.player]??[]).find(k=>k.t0===P.t&&k.to[0]===P.to[0]&&k.to[1]===P.to[1]);if(!S)continue;const A=jd(P.type,S.from,S.to,r);if(!A)continue;const C=new ue(_(P.player));R.push({m:S,authored:P.runPath===!0,stroke:A,baseR:C.r,baseG:C.g,baseB:C.b,baseA:1,vert0:M,vertCount:A.dashes.length*4+3}),M+=A.dashes.length*4+3,w+=A.dashes.length*6+3}if(R.length){const P=new Float32Array(M*3),S=new Float32Array(M*4),A=new Uint16Array(w);let C=0,k=0;const L=o(Vd)/2;for(const X of R){const U=Math.hypot(X.m.to[0]-X.m.from[0],X.m.to[1]-X.m.from[1])||1,V=-(X.m.to[1]-X.m.from[1])/U,Q=(X.m.to[0]-X.m.from[0])/U;for(const ct of X.stroke.dashes){const ot=C/3;P.set([h(ct.ax+V*L),ji,l(ct.ay+Q*L),h(ct.ax-V*L),ji,l(ct.ay-Q*L),h(ct.bx+V*L),ji,l(ct.by+Q*L),h(ct.bx-V*L),ji,l(ct.by-Q*L)],C),C+=12,A.set([ot,ot+1,ot+2,ot+1,ot+3,ot+2],k),k+=6}const[nt,ut,Dt]=Hd(X.m.from,X.m.to,X.stroke.headScale),it=C/3;P.set([h(nt[0]),ji,l(nt[1]),h(ut[0]),ji,l(ut[1]),h(Dt[0]),ji,l(Dt[1])],C),C+=9,A.set([it,it+1,it+2],k),k+=3}const F=new Xe;F.setAttribute("position",new De(P,3)),F.setAttribute("color",new De(S,4)),F.setIndex(new De(A,1));const J=new we(F,new en({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));J.renderOrder=2,s(J);const G=F.getAttribute("color");g.push(X=>{if(J.visible=a.runPaths!=="off",!!J.visible){for(const U of R){const V=a.runPaths==="authored"&&!U.authored?0:hw(X,U.m.t0),Q=z1(U.m,X);let nt=U.vert0;for(const Dt of U.stroke.dashes){const it=U.baseA*V*$d(Dt.k,Q);for(let ct=0;ct<4;ct++)G.setXYZW(nt++,U.baseR,U.baseG,U.baseB,it)}const ut=U.baseA*V*$d(1,Q);for(let Dt=0;Dt<3;Dt++)G.setXYZW(nt++,U.baseR,U.baseG,U.baseB,ut)}G.needsUpdate=!0}})}}{const R=aw,M=nw/2,w=[-1,-.4,1-2*ym,1],P=w.map(rw),S=w.length,A=n.flights.map((L,F)=>Xc(n.flights,F)),C=()=>{const L=new Xe,F=new Float32Array((R+1)*S*3);for(let U=0;U<(R+1)*S;U++)F[U*3+1]=Xd;const J=new Float32Array((R+1)*S*4),G=new Uint16Array(R*(S-1)*6);for(let U=0,V=0;U<R;U++)for(let Q=0;Q<S-1;Q++,V++){const nt=U*S+Q;G.set([nt,nt+1,nt+S,nt+1,nt+S+1,nt+S],V*6)}L.setAttribute("position",new De(F,3)),L.setAttribute("color",new De(J,4)),L.setIndex(new De(G,1));const X=new we(L,new en({color:sw,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return X.frustumCulled=!1,X.renderOrder=2,X.name="passRibbon",s(X),{mesh:X,posAttr:L.getAttribute("position"),colAttr:L.getAttribute("color")}},k=[C(),C()];g.push(L=>{const F=a.runPaths==="auto"?cw(n.flights,L):[];for(let J=0;J<k.length;J++){const G=k[J],X=F[F.length-1-J]??-1;if(G.mesh.visible=X>=0,X<0)continue;const U=n.flights[X],V=jc(L,U,A[X]),Q=lw(U,L),nt=Math.hypot(U.to[0]-U.from[0],U.to[1]-U.from[1])||1,ut=-(U.to[1]-U.from[1])/nt*M,Dt=(U.to[0]-U.from[0])/nt*M,it=U.from[0]+(U.to[0]-U.from[0])*Q,ct=U.from[1]+(U.to[1]-U.from[1])*Q,ot=uw(n.flights,X,L);for(let et=0;et<=R;et++){const yt=et/R,zt=et===R?ot[0]:U.from[0]+(it-U.from[0])*yt,Qt=et===R?ot[1]:U.from[1]+(ct-U.from[1])*yt,me=V*Kd(yt);for(let se=0;se<S;se++){const Ce=w[se],W=et*S+se;G.posAttr.setX(W,h(zt+ut*Ce)),G.posAttr.setZ(W,l(Qt+Dt*Ce)),G.colAttr.setXYZW(W,1,1,1,me*P[se])}}G.posAttr.needsUpdate=G.colAttr.needsUpdate=!0}})}{const R=(e.equipment??[]).filter(C=>C.type==="goal").map(C=>({x:C.at[0],y:C.at[1],halfW:as(C,ca)*i.goalScale})),M=o(Ao)/2,w=[],P=[],S=[],A=[];for(let C=0;C<n.flights.length;C++){const k=n.flights[C];if(!ha(k))continue;const L=Q1(k,n.arrivals);if(!L&&!k.pop)continue;const F=Math.hypot(k.to[0]-k.from[0],k.to[1]-k.from[1])||1,J=-(k.to[1]-k.from[1])/F,G=(k.to[0]-k.from[0])/F,X=G,U=-J;let V=0;if(L){const Q=Z1*2*M/2;P.push({ax:k.to[0]-X*M,ay:k.to[1]-U*M,bx:k.to[0]+X*M,by:k.to[1]+U*M,h:Q,px:J,py:G});const nt=tw(k.from,k.to,R,o(Ao))??k.to;P.push({ax:k.to[0],ay:k.to[1],bx:nt[0],by:nt[1],h:J1*M,px:J,py:G}),V=8}else{P.push({ax:k.from[0],ay:k.from[1],bx:k.to[0],by:k.to[1],h:Vd/Ao*M,px:J,py:G});const Q=jd("pass",k.from,k.to,r);S.push(Hd(k.from,k.to,Q?Q.headScale:0)),V=7}A.push({i:C,verts:V})}if(A.length){const C=A.reduce((ot,et)=>ot+et.verts,0),k=A.reduce((ot,et)=>ot+(et.verts===8?12:9),0),L=new Float32Array(C*3),F=new Float32Array(C*4),J=new Uint16Array(k);let G=0,X=0,U=0,V=0;const Q=Xd,nt=()=>{const ot=P[U++],et=G/3;L.set([h(ot.ax+ot.px*ot.h),Q,l(ot.ay+ot.py*ot.h),h(ot.ax-ot.px*ot.h),Q,l(ot.ay-ot.py*ot.h),h(ot.bx+ot.px*ot.h),Q,l(ot.by+ot.py*ot.h),h(ot.bx-ot.px*ot.h),Q,l(ot.by-ot.py*ot.h)],G),G+=12,J.set([et,et+1,et+2,et+1,et+3,et+2],X),X+=6};for(const ot of A){const et=G/3;if(ot.verts===8)nt(),nt();else{nt();const[yt,zt,Qt]=S[V++],me=G/3;L.set([h(yt[0]),Q,l(yt[1]),h(zt[0]),Q,l(zt[1]),h(Qt[0]),Q,l(Qt[1])],G),G+=9,J.set([me,me+1,me+2],X),X+=3}w.push({flight:ot.i,vert0:et,vertCount:ot.verts})}const ut=new Xe;ut.setAttribute("position",new De(L,3)),ut.setAttribute("color",new De(F,4)),ut.setIndex(new De(J,1));const Dt=new we(ut,new en({color:cM,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Dt.renderOrder=2.5,Dt.name="passMarks",s(Dt);const it=ut.getAttribute("color"),ct=n.flights.map((ot,et)=>Xc(n.flights,et));g.push(ot=>{if(Dt.visible=a.runPaths==="auto",!!Dt.visible){for(const et of w){const yt=n.flights[et.flight],zt=ot<yt.t0+yt.duration?0:jc(ot,yt,ct[et.flight])*Kd(1);let Qt=et.vert0;for(let me=0;me<et.vertCount;me++,Qt++)it.setXYZW(Qt,1,1,1,zt)}it.needsUpdate=!0}})}}{const R=fw(n.departures,n.anims,i.clips),M={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},w=new en({map:iR(),color:Ni,blending:2,transparent:!0,depthWrite:!1}),P=new we(new $n(cf,cf).rotateX(-Math.PI/2),w);P.position.y=.02,P.renderOrder=3,P.name="possessionRing",s(P);const S=i.ballRadius??eR,A=Qw*S,C=Ao*r,k=new en({color:Ni,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),L=new we(new na(Math.max(A-C/2,1e-4),A+C/2,40),k);L.frustumCulled=!1,L.renderOrder=8,L.name="possessionHalo",s(L),g.push((F,J)=>{const G=mw(M,R,F);P.visible=a.highlight&&G.kind==="ring",L.visible=a.highlight&&(G.kind==="halo"||G.kind==="free");const X=Math.sin(F*2*Math.PI/1.6);if(G.kind==="ring"){const U=xm(d,G.player,F);P.position.x=h(U[0]),P.position.z=l(U[1]);const V=1+.05*X;P.scale.x=P.scale.z=V,w.opacity=.72+.18*X}else if(G.kind==="halo"||G.kind==="free"){const U=Gd(d,F);L.position.set(h(U.pos[0]),S+U.height,l(U.pos[1])),L.quaternion.copy(J.quaternion),k.opacity=G.kind==="free"?tR:.72+.18*X}})}const p=[];for(const R of((x=e.overlays)==null?void 0:x.zones)??[]){if(fp.test(R.label??""))continue;const M=new we(new $n(R.w,R.h).rotateX(-Math.PI/2).rotateY(Math.PI),new en({map:rR(R),transparent:!0,depthWrite:!1}));M.position.set(h(R.at[0]),.004,l(R.at[1])),M.renderOrder=.5,s(M),p.push(M)}const v=()=>{for(const R of p)R.visible=a.zones};return v(),{update(R,M){for(const w of g)w(R,M)},set(R){Object.assign(a,R),v()}}}const aR=.16,cR=.25,wm=.8,Rm=.6,Cm=8,lR=Rm*Cm;function uR(i,t){return!(i>=0)||i>=wm||t>lR*i?0:aR*Math.exp(-i/cR)*Math.sin(2*Math.PI*(t/Rm-Cm*i))}function hR(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??dR})}return t}const dR=.6,lf=.15,fR=.12,pR=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function uf(i){return pR(Math.min(i,1-i)/fR)}function mR(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let X=0;X<4;X++)o.push([n.getX(X),n.getY(X),n.getZ(X)]);const a=[0,1,2].map(X=>Math.min(...o.map(U=>U[X]))),c=[0,1,2].map(X=>Math.max(...o.map(U=>U[X]))),u=[0,1,2].map(X=>c[X]-a[X]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(X=>X!==h);if(!(u[l]>0&&u[d]>0))return null;const f=(X,U)=>{let V=0,Q=1/0;for(let nt=0;nt<4;nt++){const ut=Math.abs((o[nt][l]-a[l])/u[l]-X)+Math.abs((o[nt][d]-a[d])/u[d]-U);ut<Q&&(Q=ut,V=nt)}return V},m=f(0,0),_=f(1,0),g=f(0,1),p=f(1,1),v=(X,U)=>s?U?s.getY(X):s.getX(X):0,y=new N().setFromMatrixScale(t).x,x=Math.max(2,Math.min(96,Math.ceil(u[l]*y/lf))),R=Math.max(2,Math.min(96,Math.ceil(u[d]*y/lf))),M=(x+1)*(R+1),w=new Float32Array(M*3),P=new Float32Array(M*2),S=new Float32Array(M*3),A=new Float32Array(M),C=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let X=0;X<=R;X++)for(let U=0;U<=x;U++){const V=X*(x+1)+U,Q=U/x,nt=X/R;w[V*3+h]=o[0][h],w[V*3+l]=a[l]+u[l]*Q,w[V*3+d]=a[d]+u[d]*nt;for(const ut of[0,1])P[V*2+ut]=v(m,ut)*(1-Q)*(1-nt)+v(_,ut)*Q*(1-nt)+v(g,ut)*(1-Q)*nt+v(p,ut)*Q*nt;S.set(C,V*3),A[V]=uf(Q)*uf(nt)}const k=[];for(let X=0;X<R;X++)for(let U=0;U<x;U++){const V=X*(x+1)+U;k.push(V,V+1,V+x+1,V+1,V+x+2,V+x+1)}const L=new Xe;L.setAttribute("position",new De(w,3)),L.setAttribute("uv",new De(P,2)),L.setAttribute("normal",new De(S,3)),L.setIndex(k),L.userData.drillOwned=!0,i.geometry=L;const F=new Float32Array(w),J=new Float32Array(M*3),G=new N;for(let X=0;X<M;X++)G.fromArray(F,X*3).applyMatrix4(t).toArray(J,X*3);return{mesh:i,axis:h,rest:F,world:J,weight:A,scale:y}}function hf(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new _e().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=qn.zMin;i.placed.copy(i.goal.matrixWorld)}function gR(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new _e().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!_R(l))return;const d=mR(l,new _e().multiplyMatrices(a,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new _e,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new N}))};hf(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=bR(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)xR(c);r.dirty=!1;continue}hf(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-o.p.x,f=c.world[l*3+1]-o.p.y,m=c.world[l*3+2]-o.p.z,_=uR(a,Math.hypot(d,f,m))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+_/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const _R=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function bR(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<wm&&(e=n);return e}function xR(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const Fl=new N(0,1,0),Im=.04,Pm=8,Cr=.1,qs=46,Ks=25,df=70;function Jo(i,t){return new N(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function da(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let is=new Float64Array(64),Io=new Float64Array(64),Po=new Float64Array(64);const Lm=new N,Dm=new N,Di=new N;function ff(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+is[r]/2),s=Math.max(s,-i[r]/(2*e)+is[r]/2);return n+s}function pf(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-is[o])*e),r=Math.min(r,i[o]+(n-is[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Qo(i,t,e,n,s){const r=i.length;is.length<r&&(is=new Float64Array(r),Io=new Float64Array(r),Po=new Float64Array(r));const o=Lm.crossVectors(Fl,e).normalize(),a=Dm.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let _=0;_<r;_++)Di.subVectors(i[_],t),is[_]=Di.dot(e),Io[_]=Di.dot(o),Po[_]=Di.dot(a);const h=Math.max(Math.max(ff(Io,r,c),ff(Po,r,u))*(1+Im),Pm),[l,d]=pf(Io,r,c,h),[f,m]=pf(Po,r,u,h);return{dist:h,offset:new N().addScaledVector(o,l).addScaledVector(a,f),slack:new oe(d,m)}}function vR(i,t,e,n,s){const r=Lm.crossVectors(Fl,e).normalize(),o=Dm.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){Di.subVectors(h,t);const l=Di.dot(e);u=Math.max(u,Math.abs(Di.dot(r))/a+l,Math.abs(Di.dot(o))/c+l)}return Math.max(u*(1+Im),Pm)}function Fm(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Cr)?!0:r>s*(1+Cr)?!1:n}function Nm(i,t,e=qs,n=Ks){const s=new cn().setFromPoints(i),r=s.getCenter(new N),o=s.getSize(new N),{vHalf:a,hHalf:c}=da(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Qo(i,r,Jo(u,h),a,c).dist,d=Qo(i,r,Jo(u,h+Math.PI/2),a,c).dist,f=Fm(o.x,o.z,t.aspect<1,d<l*(1-Cr));return{dist:f?d:l,alt:f}}function Mc(i,t,e,n=qs,s=Ks){const{dist:r}=Nm(i,t,n,s);return 2*r*Math.tan(da(t).vHalf)/e}function mf(i=qs){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const Kc=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),gf=.6,yR=.8,MR=30,SR=Ks,AR=12,_f=1.03,ER=1.5;function TR(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return _f+(1-_f)*(e*e*(3-2*e))}const wR=2,$c=.5,RR=i=>{const t=Math.floor(Math.max(i,0)/$c)*$c;return[t,t+wR]},CR=.25,IR=.06;function PR(i,t){const e=new N;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(CR)}class LR{constructor(t,e=qs,n=Ks){Pe(this,"target",new N);Pe(this,"wanted",new N);Pe(this,"useAlt",!1);Pe(this,"pushAt",-1);Pe(this,"pushFor",0);Pe(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:TR(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new cn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new N),o=s.getSize(new N),{vHalf:a,hHalf:c}=da(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*Kc(e,gf);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,f=Jo(h,l),m=Jo(h,d),_=Qo(t,r,f,a,c),g=Qo(t,r,m,a,c);!this.useAlt&&g.dist<_.dist*(1-Cr)?this.useAlt=!0:this.useAlt&&_.dist<g.dist*(1-Cr)?this.useAlt=!1:this.useAlt=Fm(o.x,o.z,this.camera.aspect<1,this.useAlt);const p=this.useAlt?g:_,v=this.useAlt?m:f,y=n.lookAt?r:r.clone().add(p.offset),x=n.lookAt?vR(t,r,v,a,c):p.dist;if(n.breath&&!n.lookAt){const w=new N().crossVectors(Fl,v).normalize(),P=new N().crossVectors(v,w).normalize(),S=IR*p.dist,A=(C,k)=>{const L=Math.min(k,S);return Math.min(Math.max(C,-L),L)};y.addScaledVector(w,A(n.breath.dot(w),p.slack.x)).addScaledVector(P,A(n.breath.dot(P),p.slack.y))}const R=x*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(R).add(y);const M=Kc(e,gf);this.camera.position.lerp(this.wanted,M),this.target.lerp(y,M),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const DR=1.8,FR=34,NR=844,UR=1,Um=4;function bf(i,t,e=qs,n=Ks){const{vHalf:s}=da(t),r=e*Math.PI/180,{dist:o}=Nm(i,t,e,n),a=FR*2*o*Math.tan(s)/(NR*DR*Math.cos(r));return Math.min(Um,Math.max(UR,a))}function kR(i,t,e,n=qs,s=Ks,r=Um){const o=h=>Tr(i,Math.min(r,h));let a=o(bf(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(bf([...t,...kc(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...kc(i,a)]}}class OR{constructor(){Pe(this,"last",-1);Pe(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Pi={clips:0,schedule:0,build:0};let xf=null;function BR(){return xf??(xf=fetch(bn("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Jp(i)).catch(i=>{throw xf=null,i}))}let vf=null;function GR(i){return vf??(vf=ml().loadAsync(bn("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw vf=null,t}))}function zR(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const km="coach";function HR(i){return i.team===km||i.number===void 0?void 0:String(i.number)}function VR(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==km)??t[0]}const WR=i=>i==="boys"||i==="girls";async function jR(i,t,e,n=VS){if(!WR(e))return;let s=null;try{s=await n(e)}catch{s=null}return qR(i,t,s)}const XR=(i,t,e)=>i===t&&e!==void 0;function qR(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function Om(i,t,e={}){var Et,wt,Ut;const n=performance.now(),s=mM(i),r=await BR();Pi.clips=performance.now()-n;const o=e.stage??sa(t),a=new fn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([tt,vt])=>new N(tt*s.pitch.width/2,0,vt*s.pitch.length/2)),u=s.players.map(tt=>new N(tt.start[0]-s.pitch.width/2,0,tt.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??kR(s,h,o.camera,e.elev,e.az).scale,d=tt=>[...h,...kc(s,tt)],f=o.size();let m=l(),_=d(m);_d(.35*m);let g=Tr(s,m);const p=performance.now(),v=((Et=e.schedules)==null?void 0:Et.get(g))??s1(s,r,g);(wt=e.schedules)==null||wt.set(g,v),Pi.schedule=performance.now()-p;const y=CM(s),x=(tt=e.elev??0)=>tt>=df?[..._,...y]:_;let R=Mc(x(),o.camera,o.size().height,e.elev,e.az),M=mf(e.elev);const w=GM(s.pitch.width,s.pitch.length),{toWorld:P,goals:S,cones:A,boards:C,setWorld:k,setMasts:L}=await cS(a,s,o.renderer.capabilities.getMaxAnisotropy(),m,w),F=gR(S,hR(v.flights),P);let J=_.slice(h.length);o.fitShadow(_),o.setFog(OM(s.pitch.width,s.pitch.length)),o.setHorizon(w),o.setSky(!1);const G=VR(s.teams),X=await oa(a,s.players.length,void 0,void 0,0,await jR(s.players,G,e.squad)),U=e.kit?await Op(e.kit.pattern,s.players.flatMap((tt,vt)=>tt.team===G?kp(X[vt]):[])):null,V=await Bp(),Q=new Map,nt=new Map;s.players.forEach((tt,vt)=>{const gt=X[vt];Q.set(tt.id,gt),gt.root.rotation.order="YXZ",gt.root.scale.setScalar(m);const Tt=XR(tt.team,G,e.kit),_t=s.teams[tt.team].kit.primary;Hc(gt,Tt?e.kit:_t,Tt?U:null,{label:HR(tt),boxes:V,base:_t}),gt.root.position.copy(P(tt.start));const Lt=MM(.9);Lt.scale.setScalar(m),Lt.position.x=gt.root.position.x,Lt.position.z=gt.root.position.z,a.add(Lt),nt.set(tt.id,Lt)});const ut=(await GR()).clone();ut.scale.setScalar(m),a.add(ut);const Dt=af({root:a,mesh:ut,bodyScale:m,radius:.11*m,resolution:o.size()}),it=!!s.ball,ct=Vo(s);it||(ut.visible=!1,Dt.hide());const ot=Array.from({length:(((Ut=s.balls)==null?void 0:Ut.length)??0)+v.ballSwaps.length},()=>ut.clone()),et=ot.map(tt=>(tt.scale.setScalar(m),a.add(tt),af({root:a,mesh:tt,bodyScale:m,radius:.11*m,resolution:o.size(),streak:!1}))),yt=new LR(o.camera,e.elev,e.az);yt.armPushIn(ER,performance.now()/1e3);let zt="fit",Qt=-1,me=[];const se=new N,Ce=new N,W=new N;let Nt=!1,ie=[],de=-1/0;const Ct=new l1(s.duration,e.loop??!0),Se=new OR,qt=new Map(s.players.map(tt=>[tt.id,tt.role])),{applyAnim:I,cueAt:T}=c1(r,v.anims,qt,v.bounces),K=u1(v.turns,s.players.map(tt=>[tt.id,tt.role==="keeper"?ze(tt.start,ct):0])),rt=K.heading,Mt=K.rateOf,lt=new Map(s.players.map(tt=>[tt.id,tt.start]));function Jt(){const tt=new Set(a.children);return{built:oR({scene:a,drill:s,schedule:v,clips:r,headingAt:gt=>rt.get(gt)??0,search:e.search,pathM:R,pathWidthK:M,ballRadius:.11*m,goalScale:g}),owned:a.children.filter(gt=>!tt.has(gt))}}let Pt=Jt();const ht={},dt={update:(tt,vt)=>Pt.built.update(tt,vt),set:tt=>{Object.assign(ht,tt),Pt.built.set(tt)}};function bt(){for(const tt of Pt.owned)a.remove(tt),vl(tt);Pt=Jt(),Pt.built.set(ht)}const Vt=S1(),Kt=[],re=I1(),Wt=()=>{re.reset(),Vt.reset()};Ct.onSeek(Wt),Ct.onLoop(Wt);const be=Cw(Ct);function fe(){const tt=l();if(tt!==m){m=tt,_=d(m),J=_.slice(h.length),g=Tr(s,m),_d(.35*m);for(const vt of Q.values())vt.root.scale.setScalar(m);for(const vt of nt.values())vt.scale.setScalar(m);ut.scale.setScalar(m);for(const vt of ot)vt.scale.setScalar(m);for(const vt of A)vt.scale.setScalar(m);for(const vt of C)yp(vt,m);for(const vt of S)vt.scale.setScalar(g);o.fitShadow(_),Wt()}Dt.resize(m,.11*m,o.size());for(const vt of et)vt.resize(m,.11*m,o.size());R=Mc(x(yt.elev),o.camera,o.size().height,yt.elev,yt.az),bt(),o.rule.wake()}let ge=0;const $=o.onBox(()=>{ge||(ge=requestAnimationFrame(()=>{ge=0,fe()}))}),Ot=o.size();(Ot.width!==f.width||Ot.height!==f.height)&&fe();const at=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Q,heading:rt,camera:o.camera,ball:ut,spare:ot,schedule:v,goals:S,bodyScale:m,lockDbg:at},__pathMetrics:()=>({metresPerPx:R,widthK:M,runHalfM:1.6*R*M/2,passHalfM:2.2*R*M/2})});function mt(tt,vt=30,gt=.12,Tt=4,_t=1){const Lt=[];for(const[j,H]of Q)H.root.traverse(q=>{q.isBone&&/foot/i.test(q.name)&&Lt.push({id:j,name:q.name,bone:q})});Ct.pause(),Ct.seek(0);for(let j=0;j<90;j++)o.step(1/60);Ct.play();const Xt=1/vt,Bt=Math.min(tt??s.duration,s.duration),le=Math.max(0,Math.round(Bt*vt)-1),At=Lt.map(()=>[]),Te=new N;for(let j=0;j<=le;j++){for(let H=0;H<Lt.length;H++){const q=Lt[H].bone.matrixWorld.elements;Te.set(q[12],q[13],q[14]);const O=Q.get(Lt[H].id).root.worldToLocal(Te.clone());At[H].push([j*Xt,q[12],q[13],q[14],O.x,O.z])}o.step(Xt)}Ct.pause();const te=(j,H)=>{var q;return((q=T(j,H))==null?void 0:q.clip)??"idle"},E=[];return Lt.forEach((j,H)=>{const q=(ft,xt)=>{if(xt-ft<Tt)return;const Y=At[H].slice(ft,xt);let Rt=0,It=0;for(let St=1;St<Y.length;St++)Rt=Math.max(Rt,Math.hypot(Y[St][1]-Y[0][1],Y[St][3]-Y[0][3])),It+=Math.hypot(Y[St][4]-Y[St-1][4],Y[St][5]-Y[St-1][5])/Xt;E.push({player:j.id,foot:j.name,t0:+Y[0][0].toFixed(2),t1:+Y[Y.length-1][0].toFixed(2),drift:+Rt.toFixed(3),localSpeed:+(It/(Y.length-1)).toFixed(2),clip0:te(j.id,Y[0][0]),clip1:te(j.id,Y[Y.length-1][0])})},O=At[H].map((ft,xt)=>xt===0?1/0:Math.hypot(ft[1]-At[H][xt-1][1],ft[3]-At[H][xt-1][3])/Xt);let st=-1;At[H].forEach((ft,xt)=>{const Y=ft[2]<gt,Rt=xt>0&&te(j.id,ft[0])!==te(j.id,At[H][xt-1][0]),It=O[xt]>_t&&xt>0&&O[xt-1]>_t;st>=0&&(!Y||Rt||It)&&(q(st,xt),st=-1),st<0&&Y&&O[xt]<_t&&(st=xt)}),st>=0&&q(st,At[H].length)}),E.sort((j,H)=>H.drift-j.drift),{feet:Lt.map(j=>({id:j.id,name:j.name})),hPlant:gt,fps:vt,phases:E}}e.embed||Object.assign(window,{__footAudit:mt}),e.embed&&o.rule.enable();const jt=new Map,Ht=new N;let he=0;const D=e.sfx?Tw(v.flights):[];let b=0;o.scene.add(a);const B=(tt,vt)=>{var Te,te,E,j;Ct.advance(tt);const gt=Ct.t,Tt=Ct.playing?tt:0,_t=v.attachTo(gt),Lt=Bo({t:gt,holderId:_t,holderRoot:_t?lt.get(_t):null,holderHeading:_t?rt.get(_t):0,ballStart:ct,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos;for(const H of s.players){const q=Q.get(H.id);let O=H.start,st=0;for(const ne of v.moves[H.id]??[])if(gt>=ne.t0){const xe=Tn(ne,gt);O=xe.pos,st=xe.speed}const ft=Zp(v.dives,v.moves[H.id],H.id,gt),xt=ft!==null;ft&&(O=ft),q.root.position.copy(P(O));const Y=v.moves[H.id]??[],Rt=xt?0:oA(Y,gt);q.root.rotation.x=0,q.root.rotation.z=0,xt||(q.root.position.y-=uA(Y,gt)-VT(v.bounces,H.id,gt)*m),lt.set(H.id,O);let It=null,St=!1;for(const ne of v.faces)ne.player===H.id&&gt>=ne.t0&&(It=ne.until===void 0||gt<=ne.until?ne.at:null,ne.lock&&gt>=ne.lock[0]&&gt<=ne.lock[1]&&(St=!0));const Zt=It!==null&&Zi(O,It),ae=_A(O,Lt,Zt,H.id===_t),ce=Zt?ze(O,It):ae??rt.get(H.id),{h:kt,clipYaw:$t}=K.step(H.id,gt,Tt,st,ce,St,!Zt&&ae!==null);q.root.rotation.y=hA(kt,$t),I(H.id,q,gt,Tt,st);const Ft=Ph(q);if(Ft.length){const ne=re.tilt(H.id,xt?[0,0]:sA(Y,gt),rt.get(H.id),Rt,Tt);Bd(q.root,Ft[0],ne.pitch,0,ne.roll)}const Ae=BS(q);if(Ae.length&&!xt){q.root.updateMatrixWorld(!0);for(let pe=0;pe<Ae.length;pe++){const ke=Ae[pe].matrixWorld.elements;Kt[pe]=[ke[12],ke[13],ke[14]]}Kt.length=Ae.length;const ne=T(H.id,gt),xe=M1((ne==null?void 0:ne.clip)??null,ne?(Te=r.clips[ne.clip])==null?void 0:Te.category:void 0,v1(Y,gt)),[Ge,vn]=Vt.step(H.id,Kt,[q.root.position.x,q.root.position.z],gt,Tt,xe,m);q.root.position.x+=Ge,q.root.position.z+=vn,at&&at.set(H.id,[xe?1:0,Math.hypot(Ge,vn),Vt.foot(H.id),st,Vt.rootSpeed(H.id)])}const ee=nt.get(H.id);if(ee.position.x=q.root.position.x,ee.position.z=q.root.position.z,H.id===_t){const ne=Mw(v.arrivals,H.id,gt),xe=ne>=0?GS(q)[ne]:void 0;if(xe){q.root.updateMatrixWorld(!0);const Ge=xe.matrixWorld.elements;Ht.set(Ge[12],Ge[13],Ge[14]),he=Mm(v.arrivals,v.departures,H.id,gt)}}}const Xt=Bo({t:gt,holderId:_t,holderRoot:_t?lt.get(_t):null,holderHeading:_t?rt.get(_t):0,ballStart:ct,flights:v.flights,departures:v.departures,arrivals:v.arrivals});ut.position.copy(P(Xt.pos,.11*m+Xt.height)),he>0&&(ut.position.lerp(Ht,he),he=0),it&&Dt.update({pos:ut.position,height:Xt.height,t:gt,dt:Tt,apex:Xt.apex,speed:Xt.speed,held:_t!==null&&Sw(v.arrivals,v.departures,_t,gt)});for(let H=0;H<ot.length;H++){const q=(te=s.balls)==null?void 0:te[H],O=q?v.ballSwaps.find(xt=>xt.take===H):v.ballSwaps[H-(((E=s.balls)==null?void 0:E.length)??0)],st=q?!(O&&gt>=O.t):gt>=O.t;if(ot[H].visible=st,!st){et[H].hide();continue}let ft;q?q.carrier&&lt.has(q.carrier)?ft=Wn(lt.get(q.carrier),rt.get(q.carrier)??0):ft=Vp(q,gt):ft=O.drop,ot[H].position.copy(P(ft,.11*m)),et[H].update({pos:ot[H].position,height:0,t:gt,dt:Tt,held:!1,speed:0})}e.sfx&&(be(e.sfx,D,b,gt,Ct.playing,Xt.height,Xt.speed),b=gt),dt.update(gt,o.camera),F.update(gt);for(const H of s.players){const q=Q.get(H.id),O=OS(q);if(!O)continue;const st=RT(v.faces,H.id,gt),ft=st?P(st):ut.position,xt=dA(Math.atan2(ft.x-q.root.position.x,ft.z-q.root.position.z)-rt.get(H.id)+mA(Mt.get(H.id)??0)),Y=jt.get(H.id)??0,Rt=Tt>0?Y+(xt-Y)*.3:Y;jt.set(H.id,Rt);const It=Ph(q),St=It.length>1?re.shoulder(H.id,Rt,Tt):0;It.length>1&&Bd(q.root,It[1],0,St,0),D1(O,-(Rt-St))}const Bt=[...Q.values()].map(H=>new N(H.root.position.x,0,H.root.position.z)),le=o.rule.snap()?1/0:tt,At=vt/1e3;if(zt==="broadcast"){let H=-1/0;for(const O of v.departures)gt>=O.contact&&O.contact>H&&(H=O.contact);H!==de&&(de=H,ie=s.players.filter(O=>P(lt.get(O.id)??O.start).distanceTo(ut.position)<=AR).map(O=>O.id)),!Nt||le===1/0?(W.copy(ut.position),Nt=!0):W.lerp(ut.position,Kc(tt,yR));const q=ie.length?ie.map(O=>{const st=Q.get(O);return new N((st==null?void 0:st.root.position.x)??0,0,(st==null?void 0:st.root.position.z)??0)}):Bt;yt.frame([...q,ut.position.clone()],le,{now:At,lookAt:W.clone(),elevDeg:MR,azDeg:SR})}else{const[H,q]=RR(gt);if(H!==Qt){Qt=H,me=[];const O=[];for(let st=H;st<=q+1e-9;st+=$c){const ft=new Map;for(const It of s.players){let St=It.start;for(const ae of v.moves[It.id]??[])st>=ae.t0&&(St=Tn(ae,st).pos);ft.set(It.id,St);const Zt=P(St);me.push(new N(Zt.x,0,Zt.z)),Math.abs(Zt.x)<=s.pitch.width/2&&Math.abs(Zt.z)<=s.pitch.length/2&&O.push(new N(Zt.x,0,Zt.z))}const xt=v.attachTo(st),Y=Bo({t:st,holderId:xt,holderRoot:xt?ft.get(xt)??null:null,holderHeading:xt?rt.get(xt)??0:0,ballStart:ct,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),Rt=P(Y.pos);O.push(new N(Rt.x,0,Rt.z))}se.copy(PR(O,Ce))}Bt.push(...me),Bt.push(...c,...J),yt.elevNow>=df&&Bt.push(...y),yt.frame([...Bt,ut.position.clone()],le,{now:At,breath:se})}Se.tick(vt),zR(!!e.embed,`t ${gt.toFixed(1)}s  fps ${Se.avg.toFixed(0)}
[space] play/pause  [r] restart`),(j=e.onFrame)==null||j.call(e,gt,vt)};o.start(B);const Z=tt=>{tt.code==="Space"&&(Ct.playing?Ct.pause():Ct.play()),tt.code==="KeyR"&&Ct.seek(0)};e.embed||addEventListener("keydown",Z);function z(tt){tt!==zt&&(zt=tt,k(!0),o.setSky(tt==="broadcast"),L(tt==="broadcast"),Nt=!1,de=-1/0,o.rule.wake())}function pt(tt,vt=yt.az){tt===yt.elev&&vt===yt.az||(yt.setElev(tt),yt.setAz(vt),R=Mc(x(tt),o.camera,o.size().height,tt,vt),M=mf(tt),bt(),o.rule.wake())}return Pi.build=performance.now()-n-Pi.clips-Pi.schedule,{timeline:Ct,step:tt=>o.step(tt),stage:o,overlays:dt,setCamera:pt,setFollow:z,setPushIn:tt=>yt.armPushIn(tt,performance.now()/1e3),dispose(){removeEventListener("keydown",Z),$(),ge&&(cancelAnimationFrame(ge),ge=0),o.scene.remove(a),Tp(a,[...X.map(tt=>tt.root),ut,...ot,...S]),U==null||U.dispose(),o.setFog(null),o.setHorizon(null),o.setSky(!0),e.stage?o.park(B):o.dispose()}}}const yf="Shirt Soccer Man B",KR={boys:yf,mixed:yf,girls:"Shirt Soccer Woman A"},$R="10",Mf=12,YR=23.9,ZR=32,JR=4,Us={shirt:{top:1.055856,bottom:.512852,fill:.88},full:{top:1.014873,bottom:-.142881,fill:.92}},QR=.35,tC=Us.shirt.top,eC=Us.shirt.bottom;Us.shirt.fill;const $i=.62,Sf=.09,Af=3,nC=.86,iC=.002,sC=724752,Sc=90,rC=.014,oC=.5,Ac=[2.6,5],Ef=1.15,Is=.14,Ec=.1,aC=.26,cC=.02,lC="idle_relaxed_c",Tf=[lC,"idle_relaxed_a","idle_a","idle_b"];async function uC(i,t,e={}){var qt;const n=e.stage??sa(i),s=n.scene,r=new fn;let o=!0;const a=s.children.find(I=>I.isDirectionalLight),c=s.children.find(I=>I.isHemisphereLight),u={background:s.background,fog:s.fog,sun:a&&{position:a.position.clone(),intensity:a.intensity,colour:a.color.clone(),normalBias:a.shadow.normalBias},hemi:c&&{sky:c.color.clone(),ground:c.groundColor.clone(),intensity:c.intensity}};s.background=new ue(sC),s.fog=null,a&&(a.position.set(-3.2,4.4,3.6),a.color.set(16773856),a.intensity=3.2,a.shadow.normalBias=.02),c&&(c.color.set(10466248),c.groundColor.set(724752),c.intensity=.7);const h=new hl(12374240,1.35);h.position.set(2.8,2.2,-3.4),r.add(h,h.target);const l=new u0(9082530,1.35);r.add(l);const d=new we(new Ar($i,$i*1.04,Sf,48),new vi({color:1448991,roughness:.85,metalness:0}));d.position.y=-Sf/2,d.receiveShadow=!0,r.add(d);const f=hC((qt=e.maskDeps)==null?void 0:qt.loader);let m;const _=Promise.race([f,new Promise(I=>{m=setTimeout(()=>I(null),Fp)})]),g=await zS(e.material??KR[e.squad??yl]),[p]=await oa(r,1,void 0,void 0,Math.max(g,0));p.root.traverse(I=>{I.castShadow=I.type==="SkinnedMesh"});let v=await Op([...zc],kp(p),e.maskDeps);const y=await Bp(e.maskDeps),x={label:$R,boxes:y};let R=Hc(p,t,v,x),M=null;const P=(e.clip?[e.clip,...Tf]:Tf).find(I=>p.clips.has(I))??[...p.clips.keys()][0],S=P?p.mixer.clipAction(p.clips.get(P)):null;S==null||S.play();const A=await _;clearTimeout(m),A?r.add(A):f.then(I=>{I&&(o?r.add(I):vl(I))}).catch(()=>{}),s.add(r),p.mixer.update(1/60),p.root.updateWorldMatrix(!0,!0);const C=new cn().setFromObject(p.root,!0),k=Math.max(.5,C.max.y-C.min.y),L={fov:n.camera.fov,near:n.camera.near,far:n.camera.far},F=n.camera;F.fov=YR,F.near=.1,F.far=60;const J=new N(0,C.min.y+k*(tC+eC)/2,0);let G=ra,X=Us[G],U=X,V=1;const Q=I=>1-(1-I)**3;function nt(){const I=V>=1?1:Q(V),T=ht=>I>=1?U[ht]:X[ht]+(U[ht]-X[ht])*I,K=T("top"),rt=T("bottom");J.y=C.min.y+k*(K+rt)/2;const lt=k*(K-rt)/T("fill")/2/Math.tan(F.fov*Math.PI/360),Jt=ZR*Math.PI/180,Pt=JR*Math.PI/180;F.position.set(Math.sin(Jt)*Math.cos(Pt)*lt,J.y+Math.sin(Pt)*lt,Math.cos(Jt)*Math.cos(Pt)*lt),F.lookAt(J),F.updateProjectionMatrix()}nt(),n.fitShadow([new N(-$i,0,-$i),new N($i,k,$i)]),n.setSky(!1);const ut=n.onBox(nt);F.updateMatrixWorld(!0);const Dt=new N(0,J.y+k*.22,0),it=new Float32Array(Sc*3),ct=new N,ot=new N,et=new ip(F.position,Dt),yt=new N,zt=Math.tan(F.fov*Math.PI/360),Qt=zt*F.aspect,me=F.position.distanceTo(new N(0,J.y,0)),se=I=>{for(const T of[-Is,Is])for(const K of[-Ec,Ec])for(const rt of[-Is,Is])if(ot.set(I.x+T,I.y+K,I.z+rt),ot.y<.03||ot.distanceTo(F.position)<me+cC||(et.closestPointToPoint(ot,!0,yt),yt.distanceTo(ot)<aC))return!1;return!0};for(let I=0,T=0;I<Sc&&T<Sc*40;T++){const K=Ac[0]+Math.random()*(Ac[1]-Ac[0]);ct.set((Math.random()*2-1)*Qt*K*Ef,(Math.random()*2-1)*zt*K*Ef,-K).applyMatrix4(F.matrixWorld),se(ct)&&(ct.toArray(it,I*3),I++)}const Ce=new Yf(new Xe().setAttribute("position",new De(it,3)),new rl({color:Ni,size:rC,transparent:!0,opacity:oC,depthWrite:!1}));r.add(Ce),e.framing&&e.framing!==G&&(G=e.framing,X=U=Us[G],nt());let W=t,Nt=0;function ie(I){Nt=(I%1+1)%1,p.root.rotation.y=Nt*Math.PI*2,d.rotation.y=p.root.rotation.y}let de=0;function Ct(I){var T;ie(Nt+I/Mf),de+=I,Ce.position.set(Math.sin(de*.043)*Is,Math.sin(de*.4)*Ec,Math.sin(de*.031)*Is),V<1&&(V=Math.min(1,V+I/QR),nt()),M&&(M.at+=I/nA,Bh(M.mats,M.at)>=1&&(M=null)),p.mixer.update(I),(T=e.onFrame)==null||T.call(e,Nt*Mf,performance.now())}const Se=I=>Ct(I);return e.embed&&n.rule.enable(),n.start(Se),n.rule.play(),{stage:n,step:Ct,setTurn:ie,get framing(){return G},clip:P??"",bodyBox:[C.min.y,C.max.y],setFraming(I){if(I===G)return;const T=V>=1?1:Q(V),K=rt=>T>=1?U[rt]:X[rt]+(U[rt]-X[rt])*T;X={top:K("top"),bottom:K("bottom"),fill:K("fill")},G=I,U=Us[I],V=0,n.rule.wake()},async setKit(I){const T=W;W=I,R=Hc(p,I,v,{...x,from:T}),M={at:0,mats:R},Bh(R,0),n.rule.wake()},dispose(){o=!1,ut(),s.remove(r),p.mixer.stopAllAction(),Tp(r,[p.root]),v==null||v.dispose(),s.background=u.background,s.fog=u.fog,a&&u.sun&&(a.position.copy(u.sun.position),a.intensity=u.sun.intensity,a.color.copy(u.sun.colour),a.shadow.normalBias=u.sun.normalBias),c&&u.hemi&&(c.color.copy(u.hemi.sky),c.groundColor.copy(u.hemi.ground),c.intensity=u.hemi.intensity),Object.assign(F,L),F.updateProjectionMatrix(),e.stage?n.park(Se):n.dispose()}}}async function hC(i){mr||(mr=(async()=>{let r;try{r=await(i??new cl).loadAsync(bn("assets/turf.webp"))}catch{return null}return r.colorSpace=He,r.wrapS=r.wrapT=1e3,r.repeat.set(Af,Af),r.anisotropy=8,r.needsUpdate=!0,r.userData.shared=!0,r})().catch(()=>null),mr.then(r=>{r||(mr=null)}));const t=await mr;if(!t)return null;const e=new vi({map:t,roughness:1,metalness:0,transparent:!0,depthWrite:!1}),n=dC();n&&(e.alphaMap=n),Lo||(Lo=new ea($i,64),Lo.userData.shared=!0);const s=new we(Lo,e);return s.rotation.x=-Math.PI/2,s.position.y=iC,s.receiveShadow=!0,s}let mr=null,Lo=null,Tc=null;function dC(){if(Tc)return Tc;if(typeof document>"u")return null;const i=128,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)return null;const n=e.createRadialGradient(i/2,i/2,i/2*nC,i/2,i/2,i/2);n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#000000"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new wn(t);return s.colorSpace="",s.userData.shared=!0,Tc=s,s}const Bm="assets/narration/",fC=new Set(["progression","why"]),wf=i=>Math.round(i*100)/100,Fi=1;function pC(i,t,e){const n=t.map((h,l)=>({l:h,index:l})).filter(h=>h.l.beat==="take");if(n.length){const h=i?e[i]:void 0,l=typeof h=="number"&&Number.isFinite(h)&&h>0,d=l?h/Fi:0,f=n.map(y=>(y.l.text??"").length),m=f.reduce((y,x)=>y+x,0)||1,_=[];let g=0;for(const y of f)_.push(wf(g/m*d)),g+=y;const p=t.map((y,x)=>({index:x,clip:null,hold:y.hold??0,tail:!1}));l&&n.forEach((y,x)=>{const R=x+1<n.length?_[x+1]:d;p[y.index]={index:y.index,clip:x===0?i:null,hold:wf(R-_[x]),tail:!1,...x>0?{at:_[x]}:{}}});const v=l?p[n[0].index]:null;return{lines:p,hook:null,tail:[],queue:v?[v]:[],script:v?[i]:[],hasAudio:l,take:!0}}let s=0,r=-1;const o=[],a=t.map((h,l)=>{const d=h.beat==="action"?`action-${++s}`:h.beat,f=i&&d?`${i}-${d}`:null,m=f?e[f]:void 0,_=typeof m=="number"&&Number.isFinite(m)&&m>0?f:null,g={index:l,clip:_,hold:_?m/Fi:h.hold??0,tail:fC.has(h.beat??"")};return h.beat==="hook"?r=l:g.tail&&o.push(g),g}),c=r<0?null:a[r],u=a.filter(h=>h!==c&&h.clip!==null);return{lines:a,hook:c,tail:o,queue:u,script:[...c!=null&&c.clip?[c.clip]:[],...u.map(h=>h.clip)],hasAudio:a.some(h=>h.clip!==null),take:!1}}async function mC(i=bn(Bm)){try{const t=await fetch(`${i}index.json`);if(!t.ok)return{};const e=await t.json();return e&&typeof e=="object"?e:{}}catch{return{}}}const gC=.0056,_C=.01;function bC(i){const t=i.length,e=i.sampleRate,n=Math.max(1,Math.round(e*_C)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const u=Math.min(c+n,t);let h=0,l=0;for(const d of s)for(let f=c;f<u;f++)h+=d[f]*d[f],l++;return l>0&&Math.sqrt(h/l)>gC};let o=-1,a=-1;for(let c=0;c<t;c+=n)if(r(c)){o=c;break}if(o<0)return{lead:0,tail:0,end:t/e};for(let c=Math.floor((t-1)/n)*n;c>=0;c-=n)if(r(c)){a=Math.min(c+n,t);break}return{lead:o/e,tail:Math.max((t-a)/e,0),end:a/e}}function Rf(i,t,e){return t&&e?Math.max(i-(e.lead+e.tail)/Fi,0):i}function xC(i,t,e){if(!e)return i.hold;const n=i.at===void 0?e.lead:0;return Math.max(i.hold-(n+(t?e.tail:0))/Fi,0)}const vC=40,yC=3,MC=.75,Yc="data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==";class SC{constructor(t=bn(Bm),e=n=>new Audio(n)){Pe(this,"blocked",!1);Pe(this,"shared",null);Pe(this,"srcNow","");Pe(this,"unlocked",!1);Pe(this,"el",null);Pe(this,"finish",null);Pe(this,"held",new Map);Pe(this,"inflight",new Map);Pe(this,"trims",new Map);Pe(this,"ctx",null);Pe(this,"noCtx",!1);Pe(this,"gen",0);Pe(this,"walks",0);Pe(this,"playing",null);Pe(this,"playGen",0);Pe(this,"arm",null);Pe(this,"onTrim",null);Pe(this,"onStarted",null);this.dir=t,this.make=e}fetched(){return[...this.held.keys()]}open(t){var n;if(!this.shared)return this.shared=this.make(t),this.srcNow=t,this.shared;const e=this.shared;if(this.srcNow!==t){this.srcNow=t;try{e.src=t}catch{}try{(n=e.load)==null||n.call(e)}catch{}}return e}unlock(){if(!this.unlocked&&(this.unlocked=!0,this.blocked=!1,this.playing===null))try{const t=this.open(Yc);Promise.resolve(t.play()).then(()=>{if(this.playing===null)try{t.pause()}catch{}}).catch(()=>{})}catch{}}newGeneration(){this.gen++}trim(t){return this.trims.get(t)}remaining(t){const e=this.el;if(!e||this.playing!==t)return;const n=this.trims.get(t),s=n&&n.tail>0?Math.min(n.end,e.duration):e.duration;if(Number.isFinite(s))return Math.max((s-(e.currentTime||0))/(e.playbackRate||1),0)}closeCtx(){const t=this.ctx;this.ctx=null;try{Promise.resolve(t==null?void 0:t.close()).catch(()=>{})}catch{}}async measure(t,e){var n,s;if(!(this.trims.has(t)||this.noCtx))try{if(!this.ctx){const a=globalThis,c=a.AudioContext??a.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await e.arrayBuffer()).slice(0));if(!r)return;const o=bC(r);this.trims.set(t,o),this.playing===t&&((n=this.arm)==null||n.call(this,o),(s=this.onTrim)==null||s.call(this,t,o))}catch{}}touch(t){const e=this.held.get(t);if(e!==void 0)return this.held.delete(t),this.held.set(t,e),e}async prefetch(t){if(this.touch(t)!==void 0||this.inflight.has(t))return;const e=this.pull(t);this.inflight.set(t,e);try{await e}finally{this.inflight.delete(t)}}async pull(t){try{const e=await fetch(`${this.dir}${t}.m4a`);if(!e.ok)return;const n=await e.blob(),s=URL.createObjectURL(n);this.held.set(t,s),await this.measure(t,n);for(const r of[...this.held.keys()]){if(this.held.size<=vC)break;if(r===this.playing)continue;const o=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(o)}catch{}}}catch{}}async prefetchAll(t){const e=this.gen;this.walks++;try{for(const n of t){if(e!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(t,e=0,n=0){if(!this.held.has(t)&&this.inflight.has(t)){this.stop();const s=this.playGen;return this.waitHeld(t).then(()=>s===this.playGen?this.start(t,e,n):void 0)}return this.start(t,e,n)}waitHeld(t){const e=this.inflight.get(t);if(!e)return Promise.resolve();let n;return Promise.race([e.catch(()=>{}),new Promise(s=>{n=setTimeout(s,MC*1e3)})]).then(()=>{n!==void 0&&clearTimeout(n)})}start(t,e,n){this.stop();let s;try{s=this.open(this.touch(t)??`${this.dir}${t}.m4a`)}catch{return Promise.resolve()}try{s.preservesPitch=!0,s.webkitPreservesPitch=!0,s.playbackRate=Fi}catch{}try{s.currentTime=n}catch{}this.el=s;const r=this.trims.get(t);return new Promise(o=>{let a,c,u=()=>{},h,l,d,f,m;const _=(M,w)=>{if(w)try{s.removeEventListener(M,w)}catch{}},g=()=>{a!==void 0&&(clearTimeout(a),a=void 0),c!==void 0&&(clearTimeout(c),c=void 0),_("timeupdate",h),h=void 0,_("playing",l),l=void 0,_("loadedmetadata",d),d=void 0,_("playing",f),f=void 0,_("timeupdate",m),m=void 0,_("ended",g),_("error",g),this.el===s&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),o()};this.finish=g,s.addEventListener("ended",g),s.addEventListener("error",g);let p=!1;const v=M=>{if(p||!(M.lead>0||M.tail>0))return;p=!0;const w=()=>{if(M.lead>s.currentTime)try{s.currentTime=M.lead}catch{}const P=Math.min(M.end,s.duration);if(!(M.tail>0)||!Number.isFinite(P)||P<=0)return;let S=-1;const A=()=>{if(s.currentTime>S&&s.currentTime<P){C();return}try{s.pause()}catch{}g()},C=()=>{a!==void 0&&clearTimeout(a),S=s.currentTime||0;const k=(P-S)/(s.playbackRate||1);a=setTimeout(A,Math.max(k,0)*1e3)};h=()=>{s.currentTime>=P?A():s.currentTime>0&&C()},s.addEventListener("timeupdate",h),l=()=>{C(),u()},s.addEventListener("playing",l),C()};(s.readyState??0)>=1?w():(d=w,s.addEventListener("loadedmetadata",d))};this.playing=t,this.arm=v,r&&v(r);{const M=Number.isFinite(s.duration)&&s.duration>0?s.duration:e;if(M>0){let w=-1;const P=()=>{if(s.currentTime>w){u();return}try{s.pause()}catch{}g()};u=()=>{c!==void 0&&clearTimeout(c),w=s.currentTime||0;const S=Math.max(M-w,0)/(s.playbackRate||1);c=setTimeout(P,(S+yC)*1e3)},u()}}let y=!1;const x=()=>{var M;y||(y=!0,_("playing",f),f=void 0,_("timeupdate",m),m=void 0,this.el===s&&((M=this.onStarted)==null||M.call(this,t)))};f=x,m=()=>{(s.currentTime||0)>0&&x()};let R=!1;try{s.addEventListener("playing",f),s.addEventListener("timeupdate",m),R=!0}catch{}R||(f=void 0,m=void 0);try{Promise.resolve(s.play()).catch(()=>{this.blocked=!0,g()})}catch{this.blocked=!0,g()}R||x()})}stop(){this.playGen++;const t=this.el,e=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{t==null||t.pause()}catch{}e==null||e()}}const AC="assets/sfx/",EC=.9,TC=.35,wC=.45,RC=.06,CC=["kick-soft-1","kick-soft-2","kick-soft-3"],IC=["kick-hard-1","kick-hard-2"],wc=.3,PC=6,LC=.25,Cf=.04,DC=.001,If=.125,Zc=400,FC=Zc/3e3,Pf=25,NC=.5;function UC(i){if(!(i>wc))return 0;const t=(i-wc)/(PC-wc);return LC*Math.min(t,1)}function Gm(){const i=globalThis,t=i.AudioContext??i.webkitAudioContext;return t?new t:null}function kC(i){const t=i.dir,e=i.make??(L=>new Audio(L)),n=i.now??(()=>Date.now()),s=i.random??Math.random,r=i.makeCtx??Gm,o=new Map,a=new Map,c=new Map;let u=null,h=!1,l=!1,d=!1,f=!1,m=!1,_=0,g=0,p;function v(L,F){const J=o.get(L);if(J)return J;if(f)return null;let G;try{G=e(`${t}${L}.mp3`)}catch{return null}try{G.loop=F,G.volume=0}catch{}return o.set(L,G),x(L,G),G}function y(){var L;if(!(u||h)){try{u=r()}catch{u=null}if(!u){h=!0;return}try{Promise.resolve((L=u.resume)==null?void 0:L.call(u)).catch(()=>{})}catch{}}}function x(L,F){if(u)try{const J=u.createGain();J.gain.value=0,u.createMediaElementSource(F).connect(J),J.connect(u.destination),a.set(L,J);try{F.volume=1}catch{}}catch{}}function R(L){try{Promise.resolve(L.play()).catch(()=>{d=!0})}catch{d=!0}}function M(L){try{L==null||L.pause()}catch{}}function w(L,F,J,G=0){const X=Math.max(0,Math.min(1,J)),U=a.get(L);if(!U||!u){try{F.volume=X}catch{}return}try{const V=u.currentTime,Q=U.gain;Q.cancelScheduledValues(V),G>0?(Q.setValueAtTime(Q.value,V),Q.setTargetAtTime(X,V,G)):Q.setValueAtTime(X,V)}catch{}}function P(L,F){let J=Math.min(Math.floor(s()*F.length),F.length-1);return F.length>1&&F[J]===c.get(L)&&(J=(J+1)%F.length),c.set(L,F[J]),F[J]}function S(L,F,J=1){if(!l)return;const G=v(L,!1);if(G){w(L,G,F);try{J!==1&&(G.preservesPitch=!1,G.webkitPreservesPitch=!1),G.playbackRate=J}catch{}try{G.currentTime=0}catch{}R(G)}}function A(){p!==void 0&&(clearInterval(p),p=void 0)}function C(L){A();const F=v("ambience",!0);if(!F)return;if(L>0&&!d&&R(F),a.has("ambience")){w("ambience",F,L,FC),L<=0&&(p=setTimeout(()=>{p=void 0,M(F)},Zc));return}const J=F.volume??0,G=Math.max(1,Math.round(Zc/Pf));let X=0;p=setInterval(()=>{X++;const U=J+(L-J)*Math.min(X/G,1);w("ambience",F,U),X>=G&&(A(),L<=0&&M(F))},Pf)}function k(){A();for(const[L,F]of o)w(L,F,0),M(F);_=0}return{get blocked(){return d},kick(L,F=!1){if(!l)return;const J=Math.max(0,Math.min(1,L)),G=F||J>=EC,X=P(G?"hard":"soft",G?IC:CC),U=1+(s()*2-1)*RC;S(X,TC+wC*J,U)},roll(L,F){const J=n(),G=g===0,X=G?0:Math.max(J-g,0)/1e3;if(g=J,!l){_=0;return}const U=L?UC(F):0;_+=(U-_)*(G?1:1-Math.exp(-X/Cf));const V=v("roll",!0);if(!V)return;if(_<=DC){_=0,w("roll",V,0),M(V);return}const Q=a.has("roll");w("roll",V,Q?U:_,Q?Cf:0),!d&&V.paused!==!1&&R(V)},whistle(){},net(){S("net",NC)},ambience(L){m=L,l&&C(L?If:0)},setEnabled(L){if(L&&(d=!1,y()),L!==l){if(l=L,!L){k();return}g=0,m&&C(If)}},dispose(){var F,J,G;f=!0,l=!1,m=!1,k();for(const X of o.values())try{(F=X.removeAttribute)==null||F.call(X,"src"),(J=X.load)==null||J.call(X)}catch{}o.clear(),a.clear();const L=u;u=null;try{Promise.resolve((G=L==null?void 0:L.close)==null?void 0:G.call(L)).catch(()=>{})}catch{}}}}const Lf="assets/music/",OC=.3,BC=.42;function GC(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function zC(i,t){return i.length?i[GC(t)%i.length]:null}function Df(i,t){return/\.(mp3|m4a)$/.test(t)?`${i}${t}`:`${i}${t}.mp3`}async function HC(i){try{const t=await fetch(`${i}index.json`);if(!t.ok)return[];const e=await t.json();return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function VC(i){const t=i.make??(M=>new Audio(M)),e=i.makeCtx??Gm;let n=null,s=null,r="",o=OC,a=!1,c=!1,u=!1,h=null,l=!1,d=null,f=null;const m=()=>o*(a?BC:1);function _(){const M=m();if(d&&h)try{const w=h.currentTime;d.gain.cancelScheduledValues(w),d.gain.setValueAtTime(M,w);return}catch{}if(n)try{n.volume=M}catch{}}function g(){var M;if(!h&&!l){try{h=e()}catch{h=null}if(!h){l=!0;return}}try{Promise.resolve((M=h==null?void 0:h.resume)==null?void 0:M.call(h)).catch(()=>{})}catch{}}function p(M){if(g(),!!h)try{const w=h.createGain();w.gain.value=m(),f=h.createMediaElementSource(M),f.connect(w),w.connect(h.destination),d=w;try{M.volume=1}catch{}}catch{}}function v(){var w,P;const M=n;n=null;try{f==null||f.disconnect()}catch{}try{d==null||d.disconnect()}catch{}if(f=null,d=null,!!M){try{M.pause()}catch{}try{(w=M.removeAttribute)==null||w.call(M,"src"),(P=M.load)==null||P.call(M)}catch{}}}function y(){var w;if(!n)return;const M=s?Df(i.dir,s):Yc;if(r!==M){r=M;try{n.src=M}catch{}try{(w=n.load)==null||w.call(n)}catch{}}}function x(M=!1){if(!(n||u)&&!(!s&&!M)){r=s?Df(i.dir,s):Yc;try{n=t(r)}catch{n=null}if(n){try{n.loop=!0,n.preload="auto"}catch{}p(n)}}}function R(){if(!(!s||u)&&(x(),!!n)){_();try{Promise.resolve(n.play()).catch(()=>{})}catch{}}}return{unlock(){if(u)return;g(),x(!0);const M=n;if(M)try{Promise.resolve(M.play()).then(()=>{if(!c)try{M.pause(),M.currentTime=0}catch{}}).catch(()=>{})}catch{}},pick(M,w){const P=w||zC(i.tracks,M);P!==s&&(s=P,n?y():x(),c&&R())},set(M){if(c=M&&!u,c)R();else try{n==null||n.pause()}catch{}},restart(){if(!u){if(c=!0,n)try{n.currentTime=0}catch{}R()}},gain(M){Number.isFinite(M)&&(o=Math.max(0,Math.min(1,M)),_())},duck(M){M!==a&&(a=M,_())},dispose(){var w;u=!0,c=!1,v();const M=h;h=null;try{Promise.resolve((w=M==null?void 0:M.close)==null?void 0:w.call(M)).catch(()=>{})}catch{}}}}function WC(i=window,t={createStage:sa,runDrill:Om}){var he,D,b;const e=i.document,n=t.warm??new bS(void 0,yS()),s=t.narrator??new SC;let r=null;s.onStarted=B=>r==null?void 0:r(B);const o=()=>{var B;return((B=t.sfx)==null?void 0:B.call(t))??kC({dir:bn(AC)})};let a=o(),c=!1,u=!1;const h=B=>{c=B,a.setEnabled(B),x()};let l=null,d=!1,f,m="",_,g=!1,p=0,v=!1;const y=()=>d&&w&&ht.playing&&et();function x(){l==null||l.set(y())}function R(){y()?l==null||l.restart():x()}function M(){if(l||g||!d)return;g=!0;const B=++p;(t.musicIndex??(()=>HC(bn(Lf))))().then(Z=>{var z;if(!(B!==p||l)){if(!Z.length){g=!1;return}l=((z=t.music)==null?void 0:z.call(t,Z))??VC({dir:bn(Lf),tracks:Z}),L&&l.unlock(),f!==void 0&&l.gain(f),l.duck(v),m&&l.pick(m,_),x()}}).catch(()=>{g=!1})}let w=!1,P=!1;function S(){return w?!1:(w=!0,A(),a.ambience(!0),R(),!0)}function A(){P||!c||(P=!0,a.whistle())}function C(){w=!1,a.ambience(!1),a.roll(!1,0),x()}const k=()=>h(yt());(he=e==null?void 0:e.addEventListener)==null||he.call(e,"visibilitychange",k);let L=!1,F=null;function J(B){var Z;if(!B){try{(Z=F==null?void 0:F.remove)==null||Z.call(F)}catch{}F=null;return}if(!(F||L||!(e!=null&&e.createElement)||!e.body))try{const z=e.createElement("div");z.textContent="Tap for sound",z.setAttribute("style",'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9;pointer-events:none;padding:12px 20px;border-radius:999px;background:#C8F323;color:#0B0F10;font:700 15px/1 -apple-system,"Helvetica Neue",Arial,sans-serif;white-space:nowrap;'),e.body.appendChild(z),F=z}catch{}}function G(){var B,Z;if(!L){L=!0;try{(B=e==null?void 0:e.removeEventListener)==null||B.call(e,"pointerdown",G,!0)}catch{}try{(Z=e==null?void 0:e.removeEventListener)==null||Z.call(e,"touchend",G,!0)}catch{}s.unlock(),l==null||l.unlock(),J(!1),it=!1,h(yt()),w&&A(),Dt&&(Nt(ht.narration),V!=null&&V.script.length&&s.prefetchAll(V.script.filter(z=>{var pt;return!ut.has(z)&&z!==((pt=V==null?void 0:V.hook)==null?void 0:pt.clip)}))),ge([zt()]),lt()}}(D=e==null?void 0:e.addEventListener)==null||D.call(e,"pointerdown",G,!0),(b=e==null?void 0:e.addEventListener)==null||b.call(e,"touchend",G,!0);let X=null;const U=()=>X??(X=(t.audioIndex??mC)());let V=null,Q=[];const nt=B=>{var Z;return((Z=ht.narration[B]??Q[B])==null?void 0:Z.text)??null};let ut=new Set,Dt=!0,it=!1,ct=[];const ot=()=>Dt&&!s.blocked,et=()=>ot()&&!(e!=null&&e.hidden),yt=()=>et()&&u,zt=()=>({type:"audio",state:Dt?s.blocked||a.blocked?"blocked":"playing":"muted"}),Qt=()=>ot()&&(V==null?void 0:V.hasAudio)===!0,me=B=>{var Z,z;return Qt()&&(B<0||((Z=V==null?void 0:V.lines[B])==null?void 0:Z.clip)!=null||((z=V==null?void 0:V.lines[B])==null?void 0:z.at)!==void 0)},se=()=>((V==null?void 0:V.lines)??[]).reduce((B,Z)=>Z.clip!==null||Z.at!==void 0?Z.index:B,-1),Ce=()=>((V==null?void 0:V.lines)??[]).reduce((B,Z)=>Z.clip!==null||Z.at!==void 0?B+Z.hold:B,0)*Fi,W=(B,Z)=>V!=null&&V.take?xC(B,B.index===se(),s.trim(Z)):Rf(B.hold,Z,s.trim(Z));function Nt(B){if(V)for(const Z of V.lines){const z=B[Z.index];z&&(z.hold=0)}}function ie(){!s.blocked||it||(it=!0,h(!1),Nt(ht.narration),Dt&&J(!0),ge([{type:"audio",state:"blocked"}]))}let de=Promise.resolve(),Ct=!1,Se=0,qt=null,I=null,T=!1;s.onTrim=B=>{if(!Ct||B!==qt)return;const Z=s.remaining(B);Z!==void 0&&(Se=performance.now()+Z*1e3,T&&I!==null&&ge([{type:"cue",index:-1,text:I,hold:Math.max(Z,Ml)}]))};let K=0,rt=!1,Mt=[];const lt=()=>{const B=Mt;Mt=[];for(const Z of B)Z()},Jt=(B,Z)=>new Promise(z=>{const pt=()=>{B!==ht.seq?z(!1):Z()?z(!0):Mt.push(pt)};pt()});async function Pt(B){var z;const Z=(V==null?void 0:V.queue)??[];for(;B===ht.seq&&K<Z.length;){const pt=Z[K],Et=pt.clip;if(!Et||ut.has(Et)){K++;continue}if(!ot()){const gt=!Dt;if(!await Jt(B,ot))return;if(gt){const Tt=Z.findIndex(_t=>_t.index===ht.cue);Tt>K&&(K=Tt)}continue}ut.add(Et);const wt=V!=null&&V.take?((z=V.lines[ht.cue])==null?void 0:z.at)??0:0,Ut=(wt>0?V==null?void 0:V.lines[ht.cue]:void 0)??pt;ge([{type:"cue",index:Ut.index,text:nt(Ut.index),hold:W(Ut,Et)}]);const tt=((V==null?void 0:V.lines)??[]).filter(gt=>gt.at!==void 0&&gt.at>wt&&gt.index>Ut.index);let vt=[];r=gt=>{gt!==Et||B!==ht.seq||(r=null,vt=tt.map(Tt=>setTimeout(()=>{B!==ht.seq||!ot()||rt||ge([{type:"cue",index:Tt.index,text:nt(Tt.index),hold:W(Tt,Et)}])},(Tt.at-wt)*1e3)))},await s.play(Et,V!=null&&V.take?Ce():pt.hold*Fi,wt),r=null;for(const gt of vt)clearTimeout(gt);if(B!==ht.seq)return;if(s.blocked){ut.delete(Et),ie();continue}if(V!=null&&V.take&&!Dt){ut.delete(Et);continue}ie(),K++}B===ht.seq&&Z.length>0&&K>=Z.length&&(rt=!0,ge([{type:"cue",index:-1,text:null}]))}let ht=AS,dt=null,bt=null,Vt=ra,Kt=null,re=Promise.resolve(),Wt=null,be={},fe=0;function ge(B){for(const Z of B)Z.type==="cue"&&(v=Z.index>=0,l==null||l.duck(v));if(Wt)for(const Z of B)Wt.source.postMessage(Z,{targetOrigin:Wt.origin==="null"||!Wt.origin?"*":Wt.origin})}function $(B,Z=!1){ht=B.state;for(const z of B.effects)Ot(z);ge(Z?B.out.filter(z=>!(z.type==="cue"&&me(z.index))):B.out)}function Ot(B){var Z;switch(B.kind){case"dispose":{s.stop(),s.newGeneration(),s.closeCtx(),C(),Ct=!1,lt();const z=performance.now();dt==null||dt.dispose(),dt=null,bt==null||bt.dispose(),bt=null,fe=performance.now()-z,ht.phase==="idle"&&(Kt==null||Kt.dispose(),Kt=null,h(!1),a.dispose(),a=o(),l==null||l.dispose(),l=null,g=!1,p++,(Z=e==null?void 0:e.removeEventListener)==null||Z.call(e,"visibilitychange",k));return}case"unload":{s.stop(),s.newGeneration(),C(),h(!1),Ct=!1,lt(),dt==null||dt.dispose(),dt=null,bt==null||bt.dispose(),bt=null;return}case"load":{s.stop(),s.newGeneration(),V=null,Q=[],ut=new Set,K=0,Ct=!1,qt=null,I=null,T=!1,rt=!1,w=!1,P=!1,m="key"in B.source?B.source.key:String(B.source.json.key??""),l?l.pick(m,_):M(),h(yt()),lt(),bt==null||bt.dispose(),bt=null,de=at(B.seq,B.source),re=re.catch(()=>{}).then(()=>Ht(B.seq,B.source,B.loop,B.kit,B.squad));return}case"preview":{s.stop(),s.newGeneration(),C(),h(!1),Ct=!1,lt(),dt==null||dt.dispose(),dt=null,Vt=B.framing,re=re.catch(()=>{}).then(()=>jt(B.seq,B.kit,B.squad));return}case"setKit":bt==null||bt.setKit(B.kit).catch(()=>{});return;case"setFraming":Vt=B.framing,bt==null||bt.setFraming(B.framing);return;case"play":dt==null||dt.timeline.play(),dt==null||dt.stage.rule.play(),S()||x();return;case"pause":dt==null||dt.timeline.pause(),dt==null||dt.stage.rule.pause(),x();return;case"seek":dt==null||dt.timeline.seek(B.t),dt==null||dt.stage.rule.wake();return;case"setSpeed":dt==null||dt.timeline.setSpeed(B.x);return;case"setOverlays":dt==null||dt.overlays.set(B.flags),dt==null||dt.stage.rule.wake();return;case"setCamera":dt==null||dt.setCamera(B.elev,B.az);return;case"setFollow":dt==null||dt.setFollow(B.follow);return;case"hold":B.on?(dt==null||dt.timeline.pause(),dt==null||dt.stage.rule.play()):ht.playing?(dt==null||dt.timeline.play(),dt==null||dt.stage.rule.play(),S()):dt==null||dt.stage.rule.pause();return;case"warm":{const z=B.keys;ct=z.slice(0,3);const pt=ht.seq;re.catch(()=>{}).then(()=>n.warm(z)).then(()=>mt(ct,pt)).catch(()=>{});return}case"setAudio":{Dt=B.enabled,u=B.sfx??!1,d=B.music??B.enabled,B.musicGain!==void 0&&(f=B.musicGain,l==null||l.gain(B.musicGain)),B.track!==_&&(_=B.track,m&&(l==null||l.pick(m,_))),d&&M(),Dt?(s.blocked=!1,it=!1,ht.holdUntilMs!==null&&ht.holdUntilMs!==Wo&&(ht={...ht,holdUntilMs:null},Ot({kind:"hold",on:!1})),V!=null&&V.script.length&&s.prefetchAll(V.script.filter(z=>{var pt;return!ut.has(z)&&z!==((pt=V==null?void 0:V.hook)==null?void 0:pt.clip)})),ct.length&&mt(ct,ht.seq)):(s.stop(),s.newGeneration(),J(!1)),h(yt()),w&&A(),Nt(ht.narration),ge([zt()]),!Dt&&ht.phase==="ready"&&!(T&&Ct)&&ge([Al(ht.narration,ht.cue)]),Dt&&ht.phase==="ready"&&rt&&ge([{type:"cue",index:-1,text:null}]),lt();return}case"stats":ge([{type:"statsReply",frames:(dt==null?void 0:dt.stage.frames())??0,t:(dt==null?void 0:dt.timeline.t)??0,playing:ht.playing,phases:{...be},warm:n.keys().length}]);return}}async function at(B,Z){if(!("key"in Z))return;const z=`${Z.key}-hook`,pt=await U();if(B!==ht.seq||!(pt[z]>0)||!ot())return;ut.add(z),Ct=!0,qt=z;const Et=s.trim(z);Se=performance.now()+Rf(pt[z]/Fi,z,Et)*1e3,await s.play(z,pt[z]),Ct=!1,ie(),B===ht.seq&&$(Wi(ht,{kind:"hookEnded"}))}async function mt(B,Z){if(!Dt)return;const z=await U();if(Z!==ht.seq)return;const pt=[];for(const Et of B)z[Et]>0&&pt.push(Et);await s.prefetchAll(pt)}async function jt(B,Z,z){let pt;const Et=Vt;try{Kt??(Kt=t.createStage(i.document.body)),Kt.remeasure(),pt=await(t.runPreview??uC)(i.document.body,Z,{stage:Kt,embed:!0,framing:Et,squad:z})}catch(wt){$(Wi(ht,{kind:"loadFailed",seq:B,message:wt instanceof Error?wt.message:String(wt)},performance.now()));return}if(B!==ht.seq||ht.phase!=="loading"){pt.dispose();return}bt=pt,Vt!==Et&&pt.setFraming(Vt),pt.step(0),$(Wi(ht,{kind:"loaded",seq:B,duration:0},performance.now()))}async function Ht(B,Z,z,pt,Et){var Bt;let wt,Ut=[];const tt=performance.now();let vt=tt,gt=0;try{let le=null,At;if("key"in Z?(le=await n.take(Z.key),At=le.json):At=Z.json,B!==ht.seq)return;vt=performance.now(),Ut=FS(At==null?void 0:At.narration);const Te=await U();if(B!==ht.seq)return;V=pC("key"in Z?Z.key:null,Ut,Te),Q=Ut,V.take&&Pt(B),Dt&&V.script.length&&s.prefetchAll(V.script),Nt(Ut);const te=Kt!==null;Kt??(Kt=t.createStage(i.document.body)),Kt.remeasure(),gt=te?0:performance.now()-vt,wt=await t.runDrill(At,i.document.body,{loop:z,embed:!0,search:"",stage:Kt,sfx:a,...pt?{kit:pt}:{},...Et?{squad:Et}:{},...le?{schedules:le.schedules}:{},onFrame:(E,j)=>$(kS(ht,E,j),!0)})}catch(le){$(Wi(ht,{kind:"loadFailed",seq:B,message:le instanceof Error?le.message:String(le)},performance.now()));return}if(B!==ht.seq||ht.phase!=="loading"){wt.dispose();return}dt=wt;const Tt=performance.now();dt.step(0),be={dispose:fe,fetch:vt-tt+Pi.clips,stage:gt,schedule:Pi.schedule,build:Pi.build,firstFrame:performance.now()-Tt,total:fe+performance.now()-tt},fe=0;let _t=0;if(dt.timeline.onLoop(()=>{R(),$(Wi(ht,{kind:"looped",n:++_t}))}),dt.timeline.onEnd(()=>{dt==null||dt.stage.rule.pause(),$(Wi(ht,{kind:"ended",t:(dt==null?void 0:dt.timeline.t)??0}))}),Ct&&qt!==null){const le=s.remaining(qt);le!==void 0&&(Se=performance.now()+le*1e3)}const Lt=Ct?Math.max((Se-performance.now())/1e3,0):void 0;Lt!==void 0&&Lt>0&&dt.setPushIn(Lt),I=((Bt=ht.intro)==null?void 0:Bt.text)??null;const Xt=Lt!==void 0&&I!==null;Nt(Ut),$(Wi(ht,{kind:"loaded",seq:B,duration:dt.timeline.duration,narration:Ut,voiced:Qt(),...Lt!==void 0?{hookHold:Lt}:{},..."key"in Z?{key:Z.key}:{}},performance.now())),T=Xt,V!=null&&V.take||de.then(()=>{B===ht.seq&&Pt(B)})}i.addEventListener("message",B=>{if(B.source===i)return;const Z=NS(B.data);if(Z!==null){if(B.source&&(Wt={source:B.source,origin:B.origin}),"error"in Z){ge([{type:"error",code:Z.code,message:Z.error}]);return}$(US(ht,Z,(dt==null?void 0:dt.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function jC(i,t={}){const e=t.mountEmbed??WC,n=new Set;let s=null,r=!1;const o={stages:0,mounts:0,reparents:0},a=i.doc.createElement("div");a.style.position="absolute",a.style.inset="0",a.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(a);function u(f){f.type==="hello"&&(r=!0);for(const m of[...n])try{m(f)}catch(_){console.error("tactivo3d: listener failed",_),setTimeout(()=>{throw _})}}const h={postMessage(f){queueMicrotask(()=>u(f))}},l={document:{body:a},parent:h,addEventListener(f,m){f==="message"&&(s=m)},removeEventListener(){}};let d=!1;return{mount(f,m){o.mounts++,a.parentElement!==f&&(f.appendChild(a),d&&o.reparents++),!d&&(Xy((m==null?void 0:m.base)??i.base),e(l,{createStage:_=>(o.stages++,sa(_)),runDrill:Om,...t.warm?{warm:t.warm}:{},...t.narrator?{narrator:t.narrator}:{},...t.audioIndex?{audioIndex:t.audioIndex}:{}}),d=!0)},unmount(){c.appendChild(a)},post(f){s==null||s({data:f,source:h,origin:""})},onMessage(f){return n.add(f),r&&queueMicrotask(()=>{n.has(f)&&f({type:"hello"})}),()=>{n.delete(f)}},stats:()=>({...o})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=jC({doc:document,base:new URL("./",import.meta.url).href})));
