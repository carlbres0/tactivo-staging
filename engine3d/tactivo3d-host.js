var Wm=Object.defineProperty;var jm=(i,t,e)=>t in i?Wm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pe=(i,t,e)=>jm(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bl="attached",Xm="detached";const He="srgb",xn="srgb-linear",Go="linear",Be="srgb";const Gl="300 es";class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const br=Math.PI/180,ks=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function Qc(i,t){return(i%t+t)%t}function qm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Km(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function $m(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function Ym(i,t=1){return t-Math.abs(Qc(i,t*2)-t)}function Zm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Qm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function tg(i,t){return i+Math.random()*(t-i)}function eg(i){return i*(.5-Math.random())}function ng(i){i!==void 0&&(zl=i);let t=zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ig(i){return i*br}function sg(i){return i*ks}function rg(i){return(i&i-1)===0&&i!==0}function og(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ag(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cg(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*d,a*u);break;case"YZY":i.set(c*d,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*d,a*h,a*u);break;case"XZX":i.set(a*h,c*m,c*f,a*u);break;case"YXY":i.set(c*f,a*h,c*m,a*u);break;case"ZYZ":i.set(c*m,c*f,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const kf={DEG2RAD:br,RAD2DEG:ks,generateUUID:Kn,clamp:Te,euclideanModulo:Qc,mapLinear:qm,inverseLerp:Km,lerp:xr,damp:$m,pingpong:Ym,smoothstep:Zm,smootherstep:Jm,randInt:Qm,randFloat:tg,randFloatSpread:eg,seededRandom:ng,degToRad:ig,radToDeg:sg,isPowerOfTwo:rg,ceilPowerOfTwo:og,floorPowerOfTwo:ag,setQuaternionFromProperEuler:cg,normalize:Ue,denormalize:jn};class ce{constructor(t=0,e=0){ce.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ye{constructor(t,e,n,s,r,o,a,c,u){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],v=s[1],y=s[4],x=s[7],R=s[2],M=s[5],T=s[8];return r[0]=o*_+a*v+c*R,r[3]=o*g+a*y+c*M,r[6]=o*p+a*x+c*T,r[1]=u*_+h*v+l*R,r[4]=u*g+h*y+l*M,r[7]=u*p+h*x+l*T,r[2]=d*_+f*v+m*R,r[5]=d*g+f*y+m*M,r[8]=d*p+f*x+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,d=a*c-h*r,f=u*r-o*c,m=e*l+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=l*_,t[1]=(s*u-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-u*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new ye;function Of(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lg(){const i=Sr("canvas");return i.style.display="block",i}const Hl={};function Is(i){i in Hl||(Hl[i]=!0,console.warn(i))}function ug(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Vl=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fg(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Be&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Be&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Go:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:t,whitePoint:n,transfer:Go,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:Be,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}const Le=fg();function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class pg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Sr("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=gi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mg=0;class Bf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ga(s[o].image)):r.push(ga(s[o]))}else r=ga(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gg=0;class Ze extends rs{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=Ze.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Kn(),this.name="",this.source=new Bf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=300;Ze.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+_)<.1&&Math.abs(m+g)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,x=(f+1)/2,R=(p+1)/2,M=(h+d)/4,T=(l+_)/4,P=(m+g)/4;return y>x&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=T/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-m)*(g-m)+(l-_)*(l-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(l-_)/v,this.z=(d-h)/v,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this.w=Te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this.w=Te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _g extends rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends _g{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gf extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class an{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(l!==_||c!==d||u!==f||h!==m){let g=1-a;const p=c*d+u*f+h*m+l*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),M=Math.atan2(R,p*v);g=Math.sin(g*M)/R,a=Math.sin(a*M)/R}const x=a*v;if(c=c*g+d*x,u=u*g+f*x,h=h*g+m*x,l=l*g+_*x,g===1-a){const R=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=R,u*=R,h*=R,l*=R}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*l+c*f-u*d,t[e+1]=c*m+h*d+u*l-a*f,t[e+2]=u*m+h*f+a*d-c*l,t[e+3]=h*m-a*l-c*d-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*l+u*f*m,this._y=u*f*l-d*h*m,this._z=u*h*m+d*f*l,this._w=u*h*l-d*f*m;break;case"YXZ":this._x=d*h*l+u*f*m,this._y=u*f*l-d*h*m,this._z=u*h*m-d*f*l,this._w=u*h*l+d*f*m;break;case"ZXY":this._x=d*h*l-u*f*m,this._y=u*f*l+d*h*m,this._z=u*h*m+d*f*l,this._w=u*h*l-d*f*m;break;case"ZYX":this._x=d*h*l-u*f*m,this._y=u*f*l+d*h*m,this._z=u*h*m-d*f*l,this._w=u*h*l+d*f*m;break;case"YZX":this._x=d*h*l+u*f*m,this._y=u*f*l+d*h*m,this._z=u*h*m-d*f*l,this._w=u*h*l-d*f*m;break;case"XZY":this._x=d*h*l-u*f*m,this._y=u*f*l-d*h*m,this._z=u*h*m+d*f*l,this._w=u*h*l+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+a+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-u)*f,this._z=(o-s)*f}else if(n>a&&n>l){const f=2*Math.sqrt(1+n-a-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+u)/f}else if(a>l){const f=2*Math.sqrt(1+a-n-l);this._w=(r-u)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-a);this._w=(o-s)/f,this._x=(r+u)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Te(this.x,t.x,e.x),this.y=Te(this.y,t.y,e.y),this.z=Te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Te(this.x,t,e),this.y=Te(this.y,t,e),this.z=Te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new U,jl=new an;class cn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Nr.subVectors(this.max,Ys),ls.subVectors(t.a,Ys),us.subVectors(t.b,Ys),hs.subVectors(t.c,Ys),Mi.subVectors(us,ls),Si.subVectors(hs,us),Ui.subVectors(ls,hs);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Ui.y,Ui.x,0];return!ba(e,ls,us,hs,Nr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ls,us,hs,Nr))?!1:(Ur.crossVectors(Mi,Si),e=[Ur.x,Ur.y,Ur.z],ba(e,ls,us,hs,Nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new U,new U,new U,new U,new U,new U,new U,new U],Gn=new U,Fr=new cn,ls=new U,us=new U,hs=new U,Mi=new U,Si=new U,Ui=new U,Ys=new U,Nr=new U,Ur=new U,ki=new U;function ba(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);const a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),u=e.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const xg=new cn,Zs=new U,xa=new U;class On{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xg.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(xa)),this.expandByPoint(Zs.copy(t.center).sub(xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new U,va=new U,kr=new U,Ai=new U,ya=new U,Or=new U,Ma=new U;class ea{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){va.copy(t).add(e).multiplyScalar(.5),kr.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(kr),a=Ai.dot(this.direction),c=-Ai.dot(kr),u=Ai.lengthSq(),h=Math.abs(1-o*o);let l,d,f,m;if(h>0)if(l=o*c-a,d=o*a-c,m=r*h,l>=0)if(d>=-m)if(d<=m){const _=1/h;l*=_,d*=_,f=l*(l+o*d+2*a)+d*(o*l+d+2*c)+u}else d=r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;else d<=-m?(l=Math.max(0,-(-o*r+a)),d=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u):d<=m?(l=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(l=Math.max(0,-(o*r+a)),d=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u);else d=o>0?-r:r,l=Math.max(0,-(o*d+a)),f=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(va).addScaledVector(kr,d),f}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(a=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){ya.subVectors(e,t),Or.subVectors(n,t),Ma.crossVectors(ya,Or);let o=this.direction.dot(Ma),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const c=a*this.direction.dot(Or.crossVectors(Ai,Or));if(c<0)return null;const u=a*this.direction.dot(ya.cross(Ai));if(u<0||c+u>o)return null;const h=-a*Ai.dot(Ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,o,a,c,u,h,l,d,f,m,_,g){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,d,f,m,_,g)}set(t,e,n,s,r,o,a,c,u,h,l,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=h,p[10]=l,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*l,m=a*h,_=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=f+m*u,e[5]=d-_*u,e[9]=-a*c,e[2]=_-d*u,e[6]=m+f*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*l,m=u*h,_=u*l;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*l,m=u*h,_=u*l;e[0]=d-_*a,e[4]=-o*l,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*l,m=a*h,_=a*l;e[0]=c*h,e[4]=m*u-f,e[8]=d*u+_,e[1]=c*l,e[5]=_*u+d,e[9]=f*u-m,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*u,m=a*c,_=a*u;e[0]=c*h,e[4]=_-d*l,e[8]=m*l+f,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=f*l+m,e[10]=d-_*l}else if(t.order==="XZY"){const d=o*c,f=o*u,m=a*c,_=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+_,e[5]=o*h,e[9]=f*l-m,e[2]=m*l-f,e[6]=a*h,e[10]=_*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vg,t,yg)}lookAt(t,e,n){const s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ei.crossVectors(n,Rn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ei.crossVectors(n,Rn)),Ei.normalize(),Br.crossVectors(Rn,Ei),s[0]=Ei.x,s[4]=Br.x,s[8]=Rn.x,s[1]=Ei.y,s[5]=Br.y,s[9]=Rn.y,s[2]=Ei.z,s[6]=Br.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],y=n[7],x=n[11],R=n[15],M=s[0],T=s[4],P=s[8],A=s[12],S=s[1],C=s[5],k=s[9],L=s[13],F=s[2],Z=s[6],B=s[10],j=s[14],O=s[3],et=s[7],Q=s[11],nt=s[15];return r[0]=o*M+a*S+c*F+u*O,r[4]=o*T+a*C+c*Z+u*et,r[8]=o*P+a*k+c*B+u*Q,r[12]=o*A+a*L+c*j+u*nt,r[1]=h*M+l*S+d*F+f*O,r[5]=h*T+l*C+d*Z+f*et,r[9]=h*P+l*k+d*B+f*Q,r[13]=h*A+l*L+d*j+f*nt,r[2]=m*M+_*S+g*F+p*O,r[6]=m*T+_*C+g*Z+p*et,r[10]=m*P+_*k+g*B+p*Q,r[14]=m*A+_*L+g*j+p*nt,r[3]=v*M+y*S+x*F+R*O,r[7]=v*T+y*C+x*Z+R*et,r[11]=v*P+y*k+x*B+R*Q,r[15]=v*A+y*L+x*j+R*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*l-s*u*l-r*a*d+n*u*d+s*a*f-n*c*f)+_*(+e*c*f-e*u*d+r*o*d-s*o*f+s*u*h-r*c*h)+g*(+e*u*l-e*a*f-r*o*l+n*o*f+r*a*h-n*u*h)+p*(-s*a*h-e*c*l+e*a*d+s*o*l-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=l*g*u-_*d*u+_*c*f-a*g*f-l*c*p+a*d*p,y=m*d*u-h*g*u-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*u-m*l*u+m*a*f-o*_*f-h*a*p+o*l*p,R=m*l*c-h*_*c-m*a*d+o*_*d+h*a*g-o*l*g,M=e*v+n*y+s*x+r*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/M;return t[0]=v*T,t[1]=(_*d*r-l*g*r-_*s*f+n*g*f+l*s*p-n*d*p)*T,t[2]=(a*g*r-_*c*r+_*s*u-n*g*u-a*s*p+n*c*p)*T,t[3]=(l*c*r-a*d*r-l*s*u+n*d*u+a*s*f-n*c*f)*T,t[4]=y*T,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*T,t[6]=(m*c*r-o*g*r-m*s*u+e*g*u+o*s*p-e*c*p)*T,t[7]=(o*d*r-h*c*r+h*s*u-e*d*u-o*s*f+e*c*f)*T,t[8]=x*T,t[9]=(m*l*r-h*_*r-m*n*f+e*_*f+h*n*p-e*l*p)*T,t[10]=(o*_*r-m*a*r+m*n*u-e*_*u-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*f-e*a*f)*T,t[12]=R*T,t[13]=(h*_*s-m*l*s+m*n*d-e*_*d-h*n*g+e*l*g)*T,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*T,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,d=r*u,f=r*h,m=r*l,_=o*h,g=o*l,p=a*l,v=c*u,y=c*h,x=c*l,R=n.x,M=n.y,T=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+x)*R,s[2]=(m-y)*R,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+p))*M,s[6]=(g+v)*M,s[7]=0,s[8]=(m+y)*T,s[9]=(g-v)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const o=ds.set(s[4],s[5],s[6]).length(),a=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const u=1/r,h=1/o,l=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=l,zn.elements[9]*=l,zn.elements[10]*=l,e.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===2e3)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===2001)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),d=(e+t)*u,f=(n+s)*h;let m,_;if(a===2e3)m=(o+r)*l,_=-2*l;else if(a===2001)m=r*l,_=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new U,zn=new ge,vg=new U(0,0,0),yg=new U(1,1,1),Ei=new U,Br=new U,Rn=new U,Xl=new ge,ql=new an;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class zf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mg=0;const Kl=new U,fs=new an,ci=new ge,Gr=new U,Js=new U,Sg=new U,Ag=new an,$l=new U(1,0,0),Yl=new U(0,1,0),Zl=new U(0,0,1),Jl={type:"added"},Eg={type:"removed"},ps={type:"childadded",child:null},Sa={type:"childremoved",child:null};class Ve extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new U,e=new kn,n=new an,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new ye}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(Yl,t)}rotateZ(t){return this.rotateOnAxis(Zl,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(Yl,t)}translateZ(t){return this.translateOnAxis(Zl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gr.copy(t):Gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Js,Gr,this.up):ci.lookAt(Gr,Js,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ci),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jl),ps.child=t,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eg),Sa.child=t,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jl),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Sg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new U(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new U,li=new U,Aa=new U,ui=new U,ms=new U,gs=new U,Ql=new U,Ea=new U,Ta=new U,wa=new U,Ra=new Se,Ca=new Se,Ia=new Se;class Nn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),li.subVectors(n,e),Aa.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(li),c=Hn.dot(Aa),u=li.dot(li),h=li.dot(Aa),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const d=1/l,f=(u*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ra.setScalar(0),Ca.setScalar(0),Ia.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Ia.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ca,r.y),o.addScaledVector(Ia,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),li.subVectors(t,e),Hn.cross(li).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,n),gs.subVectors(r,n),Ea.subVectors(t,n);const c=ms.dot(Ea),u=gs.dot(Ea);if(c<=0&&u<=0)return e.copy(n);Ta.subVectors(t,s);const h=ms.dot(Ta),l=gs.dot(Ta);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ms,o);wa.subVectors(t,r);const f=ms.dot(wa),m=gs.dot(wa);if(m>=0&&f<=m)return e.copy(r);const _=f*u-c*m;if(_<=0&&u>=0&&m<=0)return a=u/(u-m),e.copy(n).addScaledVector(gs,a);const g=h*m-f*l;if(g<=0&&l-h>=0&&f-m>=0)return Ql.subVectors(r,s),a=(l-h)/(l-h+(f-m)),e.copy(s).addScaledVector(Ql,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Pa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class he{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Le.workingColorSpace){if(t=Qc(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return Le.toWorkingColorSpace(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=Hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Ds(t.r),this.g=Ds(t.g),this.b=Ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Le.fromWorkingColorSpace(hn.copy(this),t),Math.round(Te(hn.r*255,0,255))*65536+Math.round(Te(hn.g*255,0,255))*256+Math.round(Te(hn.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=He){Le.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(zr);const n=xr(Ti.h,zr.h,e),s=xr(Ti.s,zr.s,e),r=xr(Ti.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new he;he.NAMES=Hf;let Tg=0;class Un extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class en extends Un{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new U,Hr=new ce;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Vf extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wf extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wg=0;const Pn=new ge,La=new Ve,_s=new U,Cn=new cn,Qs=new cn,tn=new U;class Xe extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Of(t)?Wf:Vf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ye().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Cn.min,Qs.min),Cn.expandByPoint(tn),tn.addVectors(Cn.max,Qs.max),Cn.expandByPoint(tn)):(Cn.expandByPoint(Qs.min),Cn.expandByPoint(Qs.max))}Cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)tn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(tn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)tn.fromBufferAttribute(a,u),c&&(_s.fromBufferAttribute(t,u),tn.add(_s)),s=Math.max(s,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new U,c[P]=new U;const u=new U,h=new U,l=new U,d=new ce,f=new ce,m=new ce,_=new U,g=new U;function p(P,A,S){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),l.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),h.sub(u),l.sub(u),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(l,-f.y).multiplyScalar(C),g.copy(l).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[P].add(_),a[A].add(_),a[S].add(_),c[P].add(g),c[A].add(g),c[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,A=v.length;P<A;++P){const S=v[P],C=S.start,k=S.count;for(let L=C,F=C+k;L<F;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new U,x=new U,R=new U,M=new U;function T(P){R.fromBufferAttribute(s,P),M.copy(R);const A=a[P];y.copy(A),y.sub(R.multiplyScalar(R.dot(A))).normalize(),x.crossVectors(M,A);const C=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,A=v.length;P<A;++P){const S=v[P],C=S.start,k=S.count;for(let L=C,F=C+k;L<F;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,u=new U,h=new U,l=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),a.add(h),c.add(h),u.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,d=new u.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=u[f++]}return new De(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const d=u[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,f=l.length;d<f;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new ge,Oi=new ea,Vr=new On,eu=new U,Wr=new U,jr=new U,Xr=new U,Da=new U,qr=new U,nu=new U,Kr=new U;class we extends Ve{constructor(t=new Xe,e=new en){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(Da.fromBufferAttribute(l,t),o?qr.addScaledVector(Da,h):qr.addScaledVector(Da.sub(e),h))}e.add(qr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Vr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Vr,eu)===null||Oi.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){const M=a.getX(x),T=a.getX(x+1),P=a.getX(x+2);s=$r(this,p,t,n,u,h,l,M,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=$r(this,o,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){const M=x,T=x+1,P=x+2;s=$r(this,p,t,n,u,h,l,M,T,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,x=g+2;s=$r(this,o,t,n,u,h,l,v,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Rg(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Kr);return u<e.near||u>e.far?null:{distance:u,point:Kr.clone(),object:i}}function $r(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,Wr),i.getVertexPosition(c,jr),i.getVertexPosition(u,Xr);const h=Rg(i,t,e,n,Wr,jr,Xr,nu);if(h){const l=new U;Nn.getBarycoord(nu,Wr,jr,Xr,l),s&&(h.uv=Nn.getInterpolatedAttribute(s,a,c,u,l,new ce)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,c,u,l,new ce)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,c,u,l,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new U,materialIndex:0};Nn.getNormal(Wr,jr,Xr,d.normal),h.face=d,h.barycoord=l}return h}class bi extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new je(u,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(l,2));function m(_,g,p,v,y,x,R,M,T,P,A){const S=x/T,C=R/P,k=x/2,L=R/2,F=M/2,Z=T+1,B=P+1;let j=0,O=0;const et=new U;for(let Q=0;Q<B;Q++){const nt=Q*C-L;for(let ft=0;ft<Z;ft++){const jt=ft*S-k;et[_]=jt*v,et[g]=nt*y,et[p]=F,u.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=M>0?1:-1,h.push(et.x,et.y,et.z),l.push(ft/T),l.push(1-Q/P),j+=1}}for(let Q=0;Q<P;Q++)for(let nt=0;nt<T;nt++){const ft=d+nt+Z*Q,jt=d+nt+Z*(Q+1),it=d+(nt+1)+Z*(Q+1),ht=d+(nt+1)+Z*Q;c.push(ft,jt,ht),c.push(jt,it,ht),O+=6}a.addGroup(f,O,A),f+=O,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Os(i[e]);for(const s in n)t[s]=n[s]}return t}function Cg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const tl={clone:Os,merge:mn};var Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Un{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=Cg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new U,iu=new ce,su=new ce;class _n extends Xf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,xs=1;class Lg extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(bs,xs,t,e);s.layers=this.layers,this.add(s);const r=new _n(bs,xs,t,e);r.layers=this.layers,this.add(r);const o=new _n(bs,xs,t,e);o.layers=this.layers,this.add(o);const a=new _n(bs,xs,t,e);a.layers=this.layers,this.add(a);const c=new _n(bs,xs,t,e);c.layers=this.layers,this.add(c);const u=new _n(bs,xs,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qf extends Ze{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dg extends is{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new we(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Lg(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class el{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new he(t),this.near=e,this.far=n}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fg extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class nl{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new U;class Xn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kf extends Un{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vs;const tr=new U,ys=new U,Ms=new U,Ss=new ce,er=new ce,$f=new ge,Yr=new U,nr=new U,Zr=new U,ru=new ce,Fa=new ce,ou=new ce;class Ng extends Ve{constructor(t=new Kf){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nl(e,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new Xn(n,3,0,!1)),vs.setAttribute("uv",new Xn(n,2,3,!1))}this.geometry=vs,this.material=t,this.center=new ce(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),$f.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Jr(Yr.set(-.5,-.5,0),Ms,o,ys,s,r),Jr(nr.set(.5,-.5,0),Ms,o,ys,s,r),Jr(Zr.set(.5,.5,0),Ms,o,ys,s,r),ru.set(0,0),Fa.set(1,0),ou.set(1,1);let a=t.ray.intersectTriangle(Yr,nr,Zr,!1,tr);if(a===null&&(Jr(nr.set(-.5,.5,0),Ms,o,ys,s,r),Fa.set(0,1),a=t.ray.intersectTriangle(Yr,Zr,nr,!1,tr),a===null))return;const c=t.ray.origin.distanceTo(tr);c<t.near||c>t.far||e.push({distance:c,point:tr.clone(),uv:Nn.getInterpolation(tr,Yr,nr,Zr,ru,Fa,ou,new ce),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Jr(i,t,e,n,s,r){Ss.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(er.x=r*Ss.x-s*Ss.y,er.y=s*Ss.x+r*Ss.y):er.copy(Ss),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4($f)}const au=new U,cu=new Se,lu=new Se,Ug=new U,uu=new ge,Qr=new U,Na=new On,hu=new ge,Ua=new ea;class kg extends we{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Bl,this.bindMatrix=new ge,this.bindMatrixInverse=new ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Qr),this.boundingSphere.expandByPoint(Qr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(s),t.ray.intersectsSphere(Na)!==!1&&(hu.copy(s).invert(),Ua.copy(t.ray).applyMatrix4(hu),!(this.boundingBox!==null&&Ua.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ua)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Bl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;cu.fromBufferAttribute(s.attributes.skinIndex,t),lu.fromBufferAttribute(s.attributes.skinWeight,t),au.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=lu.getComponent(r);if(o!==0){const a=cu.getComponent(r);uu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Ug.copy(au).applyMatrix4(uu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Yf extends Ve{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zf extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,d){super(null,o,a,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const du=new ge,Og=new ge;class il{constructor(t=[],e=[]){this.uuid=Kn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ge)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ge;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Og;du.multiplyMatrices(a,e[r]),du.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new il(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Zf(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yf),this.bones.push(o),this.boneInverses.push(new ge().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class Cc extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const As=new ge,fu=new ge,to=[],pu=new cn,Bg=new ge,ir=new we,sr=new On;class Gg extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),pu.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(pu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),sr.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),t.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),fu.multiplyMatrices(n,As),ir.matrixWorld=fu,ir.raycast(t,to);for(let o=0,a=to.length;o<a;o++){const c=to[o];c.instanceId=r,c.object=this,e.push(c)}to.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zf(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ka=new U,zg=new U,Hg=new ye;class Xi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ka.subVectors(n,e).cross(zg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ka),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hg.getNormalMatrix(t),s=this.coplanarPoint(ka).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new On,eo=new U;class sl{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,d-u,g-f,x-p).normalize(),n[1].setComponents(c+r,d+u,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+v).normalize(),n[3].setComponents(c-o,d-h,g-m,x-v).normalize(),n[4].setComponents(c-a,d-l,g-_,x-y).normalize(),e===2e3)n[5].setComponents(c+a,d+l,g+_,x+y).normalize();else if(e===2001)n[5].setComponents(a,l,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(eo.x=s.normal.x>0?t.max.x:t.min.x,eo.y=s.normal.y>0?t.max.y:t.min.y,eo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jf extends Un{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zo=new U,Ho=new U,mu=new ge,rr=new ea,no=new On,Oa=new U,gu=new U;class rl extends Ve{constructor(t=new Xe,e=new Jf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)zo.fromBufferAttribute(e,s-1),Ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=zo.distanceTo(Ho);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),no.radius+=r,t.ray.intersectsSphere(no)===!1)return;mu.copy(s).invert(),rr.copy(t.ray).applyMatrix4(mu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=u){const p=h.getX(_),v=h.getX(_+1),y=io(this,t,rr,c,p,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=io(this,t,rr,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=u){const p=io(this,t,rr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=io(this,t,rr,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function io(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(zo.fromBufferAttribute(o,s),Ho.fromBufferAttribute(o,r),e.distanceSqToSegment(zo,Ho,Oa,gu)>n)return;Oa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Oa);if(!(c<t.near||c>t.far))return{distance:c,point:gu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _u=new U,bu=new U;class Vg extends rl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_u.fromBufferAttribute(e,s),bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_u.distanceTo(bu);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wg extends rl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ol extends Un{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xu=new ge,Ic=new ea,so=new On,ro=new U;class Qf extends Ve{constructor(t=new Xe,e=new ol){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;xu.copy(s).invert(),Ic.copy(t.ray).applyMatrix4(xu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++){const g=u.getX(m);ro.fromBufferAttribute(l,g),vu(ro,g,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,_=f;m<_;m++)ro.fromBufferAttribute(l,m),vu(ro,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vu(i,t,e,n,s,r,o){const a=Ic.distanceSqToPoint(i);if(a<e){const c=new U;Ic.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fn extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}class wn extends Ze{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tp extends Ze{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class al extends Xe{constructor(t=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Te(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new U,d=new ce,f=new U,m=new U,_=new U;let g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let v=0;v<=e;v++){const y=n+v*h*s,x=Math.sin(y),R=Math.cos(y);for(let M=0;M<=t.length-1;M++){l.x=t[M].x*x,l.y=t[M].y,l.z=t[M].x*R,o.push(l.x,l.y,l.z),d.x=v/e,d.y=M/(t.length-1),a.push(d.x,d.y);const T=c[3*M+0]*x,P=c[3*M+1],A=c[3*M+0]*R;u.push(T,P,A)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){const x=y+v*t.length,R=x,M=x+t.length,T=x+t.length+1,P=x+1;r.push(R,M,P),r.push(T,P,M)}this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("uv",new je(a,2)),this.setAttribute("normal",new je(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.points,t.segments,t.phiStart,t.phiLength)}}class na extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new U,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const f=n+l/e*s;u.x=t*Math.cos(f),u.y=t*Math.sin(f),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new je(o,3)),this.setAttribute("normal",new je(a,3)),this.setAttribute("uv",new je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ar extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new je(l,3)),this.setAttribute("normal",new je(d,3)),this.setAttribute("uv",new je(f,2));function v(){const x=new U,R=new U;let M=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const A=[],S=P/r,C=S*(e-t)+t;for(let k=0;k<=s;k++){const L=k/s,F=L*c+a,Z=Math.sin(F),B=Math.cos(F);R.x=C*Z,R.y=-S*n+g,R.z=C*B,l.push(R.x,R.y,R.z),x.set(Z,T,B).normalize(),d.push(x.x,x.y,x.z),f.push(L,1-S),A.push(m++)}_.push(A)}for(let P=0;P<s;P++)for(let A=0;A<r;A++){const S=_[A][P],C=_[A+1][P],k=_[A+1][P+1],L=_[A][P+1];(t>0||A!==0)&&(h.push(S,C,L),M+=3),(e>0||A!==r-1)&&(h.push(C,k,L),M+=3)}u.addGroup(p,M,0),p+=M}function y(x){const R=m,M=new ce,T=new U;let P=0;const A=x===!0?t:e,S=x===!0?1:-1;for(let k=1;k<=s;k++)l.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),m++;const C=m;for(let k=0;k<=s;k++){const F=k/s*c+a,Z=Math.cos(F),B=Math.sin(F);T.x=A*B,T.y=g*S,T.z=A*Z,l.push(T.x,T.y,T.z),d.push(0,S,0),M.x=Z*.5+.5,M.y=B*.5*S+.5,f.push(M.x,M.y),m++}for(let k=0;k<s;k++){const L=R+k,F=C+k;x===!0?h.push(F,F+1,L):h.push(F+1,F,L),P+=3}u.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $n extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-o;for(let y=0;y<u;y++){const x=y*l-r;m.push(x,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+u*p,x=v+u*(p+1),R=v+1+u*(p+1),M=v+1+u*p;f.push(y,x,M),f.push(x,R,M)}this.setIndex(f),this.setAttribute("position",new je(m,3)),this.setAttribute("normal",new je(_,3)),this.setAttribute("uv",new je(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class ia extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,f=new U,m=new ce;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=l*Math.cos(p),f.y=l*Math.sin(p),c.push(f.x,f.y,f.z),u.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}l+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const v=p+g,y=v,x=v+n+1,R=v+n+2,M=v+1;a.push(y,x,M),a.push(x,R,M)}}this.setIndex(a),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class jg extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new U,r=new U;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,f=l.count;for(let m=d,_=d+f;m<_;m+=3)for(let g=0;g<3;g++){const p=a.getX(m+g),v=a.getX(m+(g+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,v),yu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),yu(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new je(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function yu(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class vi extends Un{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ni extends vi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Er extends Un{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xg extends Un{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qg extends Un{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Ji(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ep(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function np(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Pc(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function cl(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function Kg(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let f=0;f<u.times.length;++f){const m=u.times[f]*s;if(!(m<e||m>=n)){l.push(u.times[f]);for(let _=0;_<h;++_)d.push(u.values[f*h+_])}}l.length!==0&&(u.times=Ji(l,u.times.constructor),u.values=Ji(d,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function $g(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const f=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=h,v=l-h;_=a.values.slice(p,v)}else if(r>=a.times[m]){const p=m*l+h,v=p+l-h;_=a.values.slice(p,v)}else{const p=a.createInterpolant(),v=h,y=l-h;p.evaluate(r),_=p.resultBuffer.slice(v,y)}c==="quaternion"&&new an().fromArray(_).normalize().conjugate().toArray(_);const g=u.times.length;for(let p=0;p<g;++p){const v=p*f+d;if(c==="quaternion")an.multiplyQuaternionsFlat(u.values,v,_,0,u.values,v);else{const y=f-d*2;for(let x=0;x<y;++x)u.values[v+x]-=_[x]}}}return i.blendMode=2501,i}const Yg={convertArray:Ji,isTypedArray:ep,getKeyframeOrder:np,sortedArray:Pc,flattenJSON:cl,subclip:Kg,makeClipAdditive:$g};class Ir{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zg extends Ir{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+v*o[u+R]+y*o[c+R]+x*o[l+R];return r}}class ip extends Ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*l+o[c+d]*h;return r}}class Jg extends Ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class ii{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(e,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Jg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ip(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ep(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,d=l-n,f=l+n;for(let m=0;m!==n;++m){const _=e[l+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[l+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=2301;class Hs extends ii{constructor(t,e,n){super(t,e,n)}}Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=2300;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class sp extends ii{}sp.prototype.ValueTypeName="color";class Bs extends ii{}Bs.prototype.ValueTypeName="number";class Qg extends Ir{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)an.slerpFlat(r,0,o,u-a,o,u,c);return r}}class Gs extends ii{InterpolantFactoryMethodLinear(t){return new Qg(this.times,this.values,this.getValueSize(),t)}}Gs.prototype.ValueTypeName="quaternion";Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends ii{constructor(t,e,n){super(t,e,n)}}Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=2300;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class zs extends ii{}zs.prototype.ValueTypeName="vector";class Lc{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Kn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(e0(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(ii.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=np(c);c=Pc(c,1,h),u=Pc(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new Bs(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,f,m,_){if(f.length!==0){const g=[],p=[];cl(f,g,p,m),g.length!==0&&_.push(new l(d,g,p))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const y=d[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Bs(".morphTargetInfluence["+_+"]",g,p))}c=f.length*o}else{const f=".bones["+e[l].name+"]";n(zs,f+".position",d,"pos",s),n(Gs,f+".quaternion",d,"rot",s),n(zs,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function t0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return zs;case"color":return sp;case"quaternion":return Gs;case"bool":case"boolean":return Hs;case"string":return Vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function e0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=t0(i.type);if(i.times===void 0){const e=[],n=[];cl(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const Li={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class n0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const f=u[l],m=u[l+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const i0=new n0;class Ws{constructor(t){this.manager=t!==void 0?t:i0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class s0 extends Error{constructor(t,e){super(t),this.response=e}}class rp extends Ws{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Li.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(hi[t]!==void 0){hi[t].push({onLoad:e,onProgress:n,onError:s});return}hi[t]=[],hi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=hi[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){l.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let M=0,T=h.length;M<T;M++){const P=h[M];P.onProgress&&P.onProgress(R)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(g)}else throw new s0(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),d=l&&l[1]?l[1].toLowerCase():void 0,f=new TextDecoder(d);return u.arrayBuffer().then(m=>f.decode(m))}}}).then(u=>{Li.add(t,u);const h=hi[t];delete hi[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onLoad&&f.onLoad(u)}}).catch(u=>{const h=hi[t];if(h===void 0)throw this.manager.itemError(t),u;delete hi[t];for(let l=0,d=h.length;l<d;l++){const f=h[l];f.onError&&f.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class r0 extends Ws{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Li.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Sr("img");function c(){h(),Li.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class ll extends Ws{constructor(t){super(t)}load(t,e,n,s){const r=new Ze,o=new r0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Pr extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class o0 extends Pr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ba=new ge,Mu=new U,Su=new U;class ul{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),Su.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Su),e.updateMatrixWorld(),Ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ba),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class a0 extends ul{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class c0 extends Pr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new a0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Au=new ge,or=new U,Ga=new U;class l0 extends ul{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new Se(2,1,1,1),new Se(0,1,1,1),new Se(3,1,1,1),new Se(1,1,1,1),new Se(3,0,1,1),new Se(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(t.matrixWorld),n.position.copy(or),Ga.copy(n.position),Ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ga),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au)}}class u0 extends Pr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new l0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hl extends Xf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class h0 extends ul{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dl extends Pr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new h0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class d0 extends Pr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class vr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class f0 extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class p0 extends Ws{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Li.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return Li.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),Li.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Li.add(t,c),r.manager.itemStart(t)}}class m0 extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class g0{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){an.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;an.multiplyQuaternionsFlat(t,o,t,e,t,n),an.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const fl="\\[\\]\\.:\\/",_0=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",b0="[^"+fl.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",pl),v0=/(WCOD+)?/.source.replace("WCOD",b0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),M0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),S0=new RegExp("^"+x0+v0+y0+M0+"$"),A0=["material","materials","bones","map"];class E0{constructor(t,e,n){const s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Fe{constructor(t,e,n){this.path=e,this.parsedPath=n||Fe.parseTrackName(e),this.node=Fe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Fe.Composite(t,e,n):new Fe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(t){const e=S0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);A0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Fe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Fe.Composite=E0;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class T0{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const w0=new Float32Array(1);class R0 extends rs{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[l]=m;else{if(m=o[l],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const _=e&&e._propertyBindings[l].binding.parsedPath;m=new g0(Fe.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[l]=m}a[l].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new ip(new Float32Array(2),new Float32Array(2),1,w0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?Lc.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new T0(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Lc.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Dc extends nl{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Eu=new U,oo=new U;class op{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Eu.subVectors(t,this.start),oo.subVectors(this.end,this.start);const n=oo.dot(oo);let r=oo.dot(Eu)/n;return e&&(r=Te(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Tu(i,t,e,n){const s=C0(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function C0(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ap(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function I0(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<l.length;f++){const m=l[d],_=l[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,l[d]=_)}l.length=d+1;for(let f=0,m=l.length;f<m;f++){const _=l[f];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,j0=`#ifdef USE_BUMPMAP
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
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t_=`#define PI 3.141592653589793
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
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,d_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
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
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
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
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,A_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
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
#endif`,C_=`struct PhysicalMaterial {
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
}`,I_=`
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
#endif`,P_=`#if defined( RE_IndirectDiffuse )
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G_=`#if defined( USE_POINTS_UV )
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
#endif`,z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
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
#endif`,tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mb=`float getShadowMask() {
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
}`,gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,bb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#ifdef USE_TRANSMISSION
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pb=`uniform sampler2D t2D;
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,Bb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Wb=`#include <common>
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
}`,jb=`uniform vec3 diffuse;
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
}`,Xb=`#define LAMBERT
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
}`,qb=`#define LAMBERT
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
}`,Kb=`#define MATCAP
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
}`,$b=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,Zb=`#define NORMAL
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
}`,Jb=`#define PHONG
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
}`,Qb=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,ex=`#define STANDARD
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
}`,nx=`#define TOON
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
}`,ix=`#define TOON
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
}`,sx=`uniform float size;
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
}`,rx=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,ax=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,lx=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:F0,alphatest_fragment:N0,alphatest_pars_fragment:U0,aomap_fragment:k0,aomap_pars_fragment:O0,batching_pars_vertex:B0,batching_vertex:G0,begin_vertex:z0,beginnormal_vertex:H0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:j0,clipping_planes_fragment:X0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:$0,color_fragment:Y0,color_pars_fragment:Z0,color_pars_vertex:J0,color_vertex:Q0,common:t_,cube_uv_reflection_fragment:e_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:c_,envmap_fragment:l_,envmap_common_pars_fragment:u_,envmap_pars_fragment:h_,envmap_pars_vertex:d_,envmap_physical_pars_fragment:S_,envmap_vertex:f_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:b_,lightmap_pars_fragment:x_,lights_lambert_fragment:v_,lights_lambert_pars_fragment:y_,lights_pars_begin:M_,lights_toon_fragment:A_,lights_toon_pars_fragment:E_,lights_phong_fragment:T_,lights_phong_pars_fragment:w_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:I_,lights_fragment_maps:P_,lights_fragment_end:L_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:F_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:U_,map_fragment:k_,map_pars_fragment:O_,map_particle_fragment:B_,map_particle_pars_fragment:G_,metalnessmap_fragment:z_,metalnessmap_pars_fragment:H_,morphinstance_vertex:V_,morphcolor_vertex:W_,morphnormal_vertex:j_,morphtarget_pars_vertex:X_,morphtarget_vertex:q_,normal_fragment_begin:K_,normal_fragment_maps:$_,normal_pars_fragment:Y_,normal_pars_vertex:Z_,normal_vertex:J_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:tb,clearcoat_normal_fragment_maps:eb,clearcoat_pars_fragment:nb,iridescence_pars_fragment:ib,opaque_fragment:sb,packing:rb,premultiplied_alpha_fragment:ob,project_vertex:ab,dithering_fragment:cb,dithering_pars_fragment:lb,roughnessmap_fragment:ub,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:fb,shadowmap_vertex:pb,shadowmask_pars_fragment:mb,skinbase_vertex:gb,skinning_pars_vertex:_b,skinning_vertex:bb,skinnormal_vertex:xb,specularmap_fragment:vb,specularmap_pars_fragment:yb,tonemapping_fragment:Mb,tonemapping_pars_fragment:Sb,transmission_fragment:Ab,transmission_pars_fragment:Eb,uv_pars_fragment:Tb,uv_pars_vertex:wb,uv_vertex:Rb,worldpos_vertex:Cb,background_vert:Ib,background_frag:Pb,backgroundCube_vert:Lb,backgroundCube_frag:Db,cube_vert:Fb,cube_frag:Nb,depth_vert:Ub,depth_frag:kb,distanceRGBA_vert:Ob,distanceRGBA_frag:Bb,equirect_vert:Gb,equirect_frag:zb,linedashed_vert:Hb,linedashed_frag:Vb,meshbasic_vert:Wb,meshbasic_frag:jb,meshlambert_vert:Xb,meshlambert_frag:qb,meshmatcap_vert:Kb,meshmatcap_frag:$b,meshnormal_vert:Yb,meshnormal_frag:Zb,meshphong_vert:Jb,meshphong_frag:Qb,meshphysical_vert:tx,meshphysical_frag:ex,meshtoon_vert:nx,meshtoon_frag:ix,points_vert:sx,points_frag:rx,shadow_vert:ox,shadow_frag:ax,sprite_vert:cx,sprite_frag:lx},Ht={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},En={basic:{uniforms:mn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:mn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:mn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:mn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:mn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:mn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:mn([Ht.points,Ht.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:mn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:mn([Ht.common,Ht.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:mn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:mn([Ht.sprite,Ht.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:mn([Ht.common,Ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:mn([Ht.lights,Ht.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};En.physical={uniforms:mn([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const ao={r:0,b:0,g:0},Gi=new kn,ux=new ge;function hx(i,t,e,n,s,r,o){const a=new he(0);let c=r===!0?0:1,u,h,l=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const R=m(y);R===null?p(a,c):R&&R.isColor&&(p(R,1),x=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const R=m(x);R&&(R.isCubeTexture||R.mapping===306)?(h===void 0&&(h=new we(new bi(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Os(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gi.copy(x.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(Gi)),h.material.toneMapped=Le.getTransfer(R.colorSpace)!==Be,(l!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,l=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new we(new $n(2,2),new xi({name:"BackgroundMaterial",uniforms:Os(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Le.getTransfer(R.colorSpace)!==Be,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(l!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,l=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,x){y.getRGB(ao,jf(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:g,dispose:v}}function dx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,C,k,L,F){let Z=!1;const B=l(L,k,C);r!==B&&(r=B,u(r.object)),Z=f(S,L,k,F),Z&&m(S,L,k,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(S,C,k,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function l(S,C,k){const L=k.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let Z=F[C.id];Z===void 0&&(Z={},F[C.id]=Z);let B=Z[L];return B===void 0&&(B=d(c()),Z[L]=B),B}function d(S){const C=[],k=[],L=[];for(let F=0;F<e;F++)C[F]=0,k[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,C,k,L){const F=r.attributes,Z=C.attributes;let B=0;const j=k.getAttributes();for(const O in j)if(j[O].location>=0){const Q=F[O];let nt=Z[O];if(nt===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),Q===void 0||Q.attribute!==nt||nt&&Q.data!==nt.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function m(S,C,k,L){const F={},Z=C.attributes;let B=0;const j=k.getAttributes();for(const O in j)if(j[O].location>=0){let Q=Z[O];Q===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const nt={};nt.attribute=Q,Q&&Q.data&&(nt.data=Q.data),F[O]=nt,B++}r.attributes=F,r.attributesNum=B,r.index=L}function _(){const S=r.newAttributes;for(let C=0,k=S.length;C<k;C++)S[C]=0}function g(S){p(S,0)}function p(S,C){const k=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;k[S]=1,L[S]===0&&(i.enableVertexAttribArray(S),L[S]=1),F[S]!==C&&(i.vertexAttribDivisor(S,C),F[S]=C)}function v(){const S=r.newAttributes,C=r.enabledAttributes;for(let k=0,L=C.length;k<L;k++)C[k]!==S[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function y(S,C,k,L,F,Z,B){B===!0?i.vertexAttribIPointer(S,C,k,F,Z):i.vertexAttribPointer(S,C,k,L,F,Z)}function x(S,C,k,L){_();const F=L.attributes,Z=k.getAttributes(),B=C.defaultAttributeValues;for(const j in Z){const O=Z[j];if(O.location>=0){let et=F[j];if(et===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const Q=et.normalized,nt=et.itemSize,ft=t.get(et);if(ft===void 0)continue;const jt=ft.buffer,it=ft.type,ht=ft.bytesPerElement,dt=it===i.INT||it===i.UNSIGNED_INT||et.gpuType===1013;if(et.isInterleavedBufferAttribute){const V=et.data,xt=V.stride,Vt=et.offset;if(V.isInstancedInterleavedBuffer){for(let $t=0;$t<O.locationSize;$t++)p(O.location+$t,V.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let $t=0;$t<O.locationSize;$t++)g(O.location+$t);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let $t=0;$t<O.locationSize;$t++)y(O.location+$t,nt/O.locationSize,it,Q,xt*ht,(Vt+nt/O.locationSize*$t)*ht,dt)}else{if(et.isInstancedBufferAttribute){for(let V=0;V<O.locationSize;V++)p(O.location+V,et.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let V=0;V<O.locationSize;V++)g(O.location+V);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let V=0;V<O.locationSize;V++)y(O.location+V,nt/O.locationSize,it,Q,nt*ht,nt/O.locationSize*V*ht,dt)}}else if(B!==void 0){const Q=B[j];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(O.location,Q);break;case 3:i.vertexAttrib3fv(O.location,Q);break;case 4:i.vertexAttrib4fv(O.location,Q);break;default:i.vertexAttrib1fv(O.location,Q)}}}}v()}function R(){P();for(const S in n){const C=n[S];for(const k in C){const L=C[k];for(const F in L)h(L[F].object),delete L[F];delete C[k]}delete n[S]}}function M(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const k in C){const L=C[k];for(const F in L)h(L[F].object),delete L[F];delete C[k]}delete n[S.id]}function T(S){for(const C in n){const k=n[C];if(k[S.id]===void 0)continue;const L=k[S.id];for(const F in L)h(L[F].object),delete L[F];delete k[S.id]}}function P(){A(),o=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:R,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function fx(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let f=0;for(let m=0;m<l;m++)f+=h[m];e.update(f,n,1)}function c(u,h,l,d){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u.length;m++)o(u[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let m=0;for(let _=0;_<l;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function px(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==1023&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==1009&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==1015&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:M}}function mx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xi,a=new ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,f){const m=l.clippingPlanes,_=l.clipIntersection,g=l.clipShadows,p=i.get(l);if(!s||m===null||m.length===0||r&&!g)r?h(null):u();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(m,d,y,f);for(let R=0;R!==y;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,f,m){const _=l!==null?l.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(l[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function gx(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new Dg(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ps=4,wu=[.125,.215,.35,.446,.526,.582],Yi=20,za=new hl,Ru=new he;let Ha=null,Va=0,Wa=0,ja=!1;const qi=(1+Math.sqrt(5))/2,Es=1/qi,Cu=[new U(-qi,Es,0),new U(qi,Es,0),new U(-Es,0,qi),new U(Es,0,qi),new U(0,qi,-Es),new U(0,qi,Es),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Iu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ha,Va,Wa),this._renderer.xr.enabled=ja,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ha=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:xn,depthBuffer:!1},s=Pu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_x(r)),this._blurMaterial=bx(r,t,e)}return s}_compileMaterial(t){const e=new we(this._lodPlanes[0],t);this._renderer.compile(e,za)}_sceneToCubeUV(t,e,n,s){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=0,h.autoClear=!1;const f=new en({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new we(new bi,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Ru),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(u[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,u[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,u[p]));const y=this._cubeSize;co(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new we(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,za)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new we(this._lodPlanes[s],u),d=u.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Yi;g>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yi}`);const p=[];let v=0;for(let T=0;T<Yi;++T){const P=T/_,A=Math.exp(-P*P/2);p.push(A),T===0?v+=A:T<g&&(v+=2*A)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const x=this._sizeLods[s],R=3*x*(s>y-Ps?s-y+Ps:0),M=4*(this._cubeSize-x);co(e,R,M,3*x,2*x),c.setRenderTarget(e),c.render(l,za)}}function _x(i){const t=[],e=[],n=[];let s=i;const r=i-Ps+1+wu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ps?c=wu[o-i+Ps-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let M=0;M<f;M++){const T=M%3*2/3-1,P=M>2?0:-1,A=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];v.set(A,_*m*M),y.set(d,g*m*M);const S=[M,M,M,M,M,M];x.set(S,p*m*M)}const R=new Xe;R.setAttribute("position",new De(v,_)),R.setAttribute("uv",new De(y,g)),R.setAttribute("faceIndex",new De(x,p)),t.push(R),s>Ps&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pu(i,t,e){const n=new is(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bx(i,t,e){const n=new Float32Array(Yi),s=new U(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Lu(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Du(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function xx(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const d=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Iu(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const f=a.image;return u&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Iu(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yx(i,t,e,n){const s={},r=new WeakMap;function o(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(l,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function u(l){const d=[],f=l.index,m=l.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const R=v[y+0],M=v[y+1],T=v[y+2];d.push(R,M,M,T,T,R)}}else if(m!==void 0){const v=m.array;_=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const R=y+0,M=y+1,T=y+2;d.push(R,M,M,T,T,R)}}else return;const g=new(Of(d)?Wf:Vf)(d,1);g.version=_;const p=r.get(l);p&&t.remove(p),r.set(l,g)}function h(l){const d=r.get(l);if(d){const f=l.index;f!==null&&d.version<f.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function Mx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function u(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function l(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)u(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function Sx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ax(i,t,e){const n=new WeakMap,s=new Se;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==l){let A=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>t.maxTextureSize&&(R=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const M=new Float32Array(x*R*4*l),T=new Gf(M,x,R,l);T.type=1015,T.needsUpdate=!0;const P=y*4;for(let S=0;S<l;S++){const C=g[S],k=p[S],L=v[S],F=x*R*4*S;for(let Z=0;Z<C.count;Z++){const B=Z*P;f===!0&&(s.fromBufferAttribute(C,Z),M[F+B+0]=s.x,M[F+B+1]=s.y,M[F+B+2]=s.z,M[F+B+3]=0),m===!0&&(s.fromBufferAttribute(k,Z),M[F+B+4]=s.x,M[F+B+5]=s.y,M[F+B+6]=s.z,M[F+B+7]=0),_===!0&&(s.fromBufferAttribute(L,Z),M[F+B+8]=s.x,M[F+B+9]=s.y,M[F+B+10]=s.z,M[F+B+11]=L.itemSize===4?s.w:1)}}d={count:l,texture:T,size:new ce(x,R)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];const m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ex(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const cp=new Ze,Fu=new tp(1,1),lp=new Gf,up=new bg,hp=new qf,Nu=[],Uu=[],ku=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Je(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=Uu[t];e===void 0&&(e=new Int32Array(t),Uu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2fv(this.addr,t),Qe(e,t)}}function Rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;i.uniform3fv(this.addr,t),Qe(e,t)}}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4fv(this.addr,t),Qe(e,t)}}function Ix(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),Qe(e,n)}}function Px(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),Qe(e,n)}}function Lx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(Je(e,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),Qe(e,n)}}function Dx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2iv(this.addr,t),Qe(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3iv(this.addr,t),Qe(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4iv(this.addr,t),Qe(e,t)}}function kx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ox(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;i.uniform2uiv(this.addr,t),Qe(e,t)}}function Bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;i.uniform3uiv(this.addr,t),Qe(e,t)}}function Gx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;i.uniform4uiv(this.addr,t),Qe(e,t)}}function zx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fu.compareFunction=515,r=Fu):r=cp,e.setTexture2D(t||r,s)}function Hx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||up,s)}function Vx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hp,s)}function Wx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lp,s)}function jx(i){switch(i){case 5126:return Tx;case 35664:return wx;case 35665:return Rx;case 35666:return Cx;case 35674:return Ix;case 35675:return Px;case 35676:return Lx;case 5124:case 35670:return Dx;case 35667:case 35671:return Fx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return kx;case 36294:return Ox;case 36295:return Bx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Wx}}function Xx(i,t){i.uniform1fv(this.addr,t)}function qx(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function Kx(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function $x(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function Yx(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Zx(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Jx(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qx(i,t){i.uniform1iv(this.addr,t)}function tv(i,t){i.uniform2iv(this.addr,t)}function ev(i,t){i.uniform3iv(this.addr,t)}function nv(i,t){i.uniform4iv(this.addr,t)}function iv(i,t){i.uniform1uiv(this.addr,t)}function sv(i,t){i.uniform2uiv(this.addr,t)}function rv(i,t){i.uniform3uiv(this.addr,t)}function ov(i,t){i.uniform4uiv(this.addr,t)}function av(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cp,r[o])}function cv(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||up,r[o])}function lv(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||hp,r[o])}function uv(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);Je(n,r)||(i.uniform1iv(this.addr,r),Qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||lp,r[o])}function hv(i){switch(i){case 5126:return Xx;case 35664:return qx;case 35665:return Kx;case 35666:return $x;case 35674:return Yx;case 35675:return Zx;case 35676:return Jx;case 5124:case 35670:return Qx;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return uv}}class dv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jx(e.type)}}class fv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hv(e.type)}}class pv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Xa=/(\w+)(\])?(\[|\.)?/g;function Gu(i,t){i.seq.push(t),i.map[t.id]=t}function mv(i,t,e){const n=i.name,s=n.length;for(Xa.lastIndex=0;;){const r=Xa.exec(n),o=Xa.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){Gu(e,u===void 0?new dv(a,i,t):new fv(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new pv(a),Gu(e,l)),e=l}}}class Do{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);mv(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function zu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const gv=37297;let _v=0;function bv(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Hu=new ye;function xv(i){Le._getMatrix(Hu,Le.workingColorSpace,i);const t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(i)){case Go:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+bv(i.getShaderSource(t),o)}else return s}function vv(i,t){const e=xv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yv(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new U;function Mv(){Le.getLuminanceCoefficients(lo);const i=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function Av(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ev(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gr(i){return i!==""}function Wu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(i){return i.replace(Tv,Rv)}const wv=new Map;function Rv(i,t){let e=Me[t];if(e===void 0){const n=wv.get(t);if(n!==void 0)e=Me[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Cv,Iv)}function Iv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Pv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Lv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Fv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Nv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Uv(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Pv(e),u=Lv(e),h=Dv(e),l=Fv(e),d=Nv(e),f=Sv(e),m=Av(r),_=s.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(g=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Me.tonemapping_pars_fragment:"",e.toneMapping!==0?yv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),Mv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),o=Fc(o),o=Wu(o,e),o=ju(o,e),a=Fc(a),a=Wu(a,e),a=ju(a,e),o=Xu(o),a=Xu(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,x=v+p+a,R=zu(s,s.VERTEX_SHADER,y),M=zu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(R).trim(),F=s.getShaderInfoLog(M).trim();let Z=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,M);else{const j=Vu(s,R,"vertex"),O=Vu(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+j+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(L===""||F==="")&&(B=!1);B&&(C.diagnostics={runnable:Z,programLog:k,vertexShader:{log:L,prefix:g},fragmentShader:{log:F,prefix:p}})}s.deleteShader(R),s.deleteShader(M),P=new Do(s,_),A=Ev(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,gv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_v++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=M,this}let kv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Bv(t),e.set(t,n)),n}}class Bv{constructor(t){this.id=kv++,this.code=t,this.usedTimes=0}}function Gv(i,t,e,n,s,r,o){const a=new zf,c=new Ov,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(A){return u.add(A),A===0?"uv":`uv${A}`}function g(A,S,C,k,L){const F=k.fog,Z=L.geometry,B=A.isMeshStandardMaterial?k.environment:null,j=(A.isMeshStandardMaterial?e:t).get(A.envMap||B),O=j&&j.mapping===306?j.image.height:null,et=m[A.type];A.precision!==null&&(f=s.getMaxPrecision(A.precision),f!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",f,"instead."));const Q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,nt=Q!==void 0?Q.length:0;let ft=0;Z.morphAttributes.position!==void 0&&(ft=1),Z.morphAttributes.normal!==void 0&&(ft=2),Z.morphAttributes.color!==void 0&&(ft=3);let jt,it,ht,dt;if(et){const ut=En[et];jt=ut.vertexShader,it=ut.fragmentShader}else jt=A.vertexShader,it=A.fragmentShader,c.update(A),ht=c.getVertexShaderID(A),dt=c.getFragmentShaderID(A);const V=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Vt=L.isInstancedMesh===!0,$t=L.isBatchedMesh===!0,re=!!A.map,ie=!!A.matcap,Ae=!!j,W=!!A.aoMap,Gt=!!A.lightMap,se=!!A.bumpMap,fe=!!A.normalMap,Lt=!!A.displacementMap,Ce=!!A.emissiveMap,te=!!A.metalnessMap,I=!!A.roughnessMap,w=A.anisotropy>0,K=A.clearcoat>0,ct=A.dispersion>0,vt=A.iridescence>0,lt=A.sheen>0,Yt=A.transmission>0,wt=w&&!!A.anisotropyMap,Ft=K&&!!A.clearcoatMap,_e=K&&!!A.clearcoatNormalMap,St=K&&!!A.clearcoatRoughnessMap,Wt=vt&&!!A.iridescenceMap,oe=vt&&!!A.iridescenceThicknessMap,ae=lt&&!!A.sheenColorMap,Kt=lt&&!!A.sheenRoughnessMap,be=!!A.specularMap,Tt=!!A.specularColorMap,gt=!!A.specularIntensityMap,q=Yt&&!!A.transmissionMap,Nt=Yt&&!!A.thicknessMap,rt=!!A.gradientMap,_t=!!A.alphaMap,Ot=A.alphaTest>0,zt=!!A.alphaHash,de=!!A.extensions;let D=0;A.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(D=i.toneMapping);const b={shaderID:et,shaderType:A.type,shaderName:A.name,vertexShader:jt,fragmentShader:it,defines:A.defines,customVertexShaderID:ht,customFragmentShaderID:dt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:f,batching:$t,batchingColor:$t&&L._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&L.instanceColor!==null,instancingMorph:Vt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:xn,alphaToCoverage:!!A.alphaToCoverage,map:re,matcap:ie,envMap:Ae,envMapMode:Ae&&j.mapping,envMapCubeUVHeight:O,aoMap:W,lightMap:Gt,bumpMap:se,normalMap:fe,displacementMap:d&&Lt,emissiveMap:Ce,normalMapObjectSpace:fe&&A.normalMapType===1,normalMapTangentSpace:fe&&A.normalMapType===0,metalnessMap:te,roughnessMap:I,anisotropy:w,anisotropyMap:wt,clearcoat:K,clearcoatMap:Ft,clearcoatNormalMap:_e,clearcoatRoughnessMap:St,dispersion:ct,iridescence:vt,iridescenceMap:Wt,iridescenceThicknessMap:oe,sheen:lt,sheenColorMap:ae,sheenRoughnessMap:Kt,specularMap:be,specularColorMap:Tt,specularIntensityMap:gt,transmission:Yt,transmissionMap:q,thicknessMap:Nt,gradientMap:rt,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ot,alphaHash:zt,combine:A.combine,mapUv:re&&_(A.map.channel),aoMapUv:W&&_(A.aoMap.channel),lightMapUv:Gt&&_(A.lightMap.channel),bumpMapUv:se&&_(A.bumpMap.channel),normalMapUv:fe&&_(A.normalMap.channel),displacementMapUv:Lt&&_(A.displacementMap.channel),emissiveMapUv:Ce&&_(A.emissiveMap.channel),metalnessMapUv:te&&_(A.metalnessMap.channel),roughnessMapUv:I&&_(A.roughnessMap.channel),anisotropyMapUv:wt&&_(A.anisotropyMap.channel),clearcoatMapUv:Ft&&_(A.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&_(A.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(A.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(A.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&_(A.sheenRoughnessMap.channel),specularMapUv:be&&_(A.specularMap.channel),specularColorMapUv:Tt&&_(A.specularColorMap.channel),specularIntensityMapUv:gt&&_(A.specularIntensityMap.channel),transmissionMapUv:q&&_(A.transmissionMap.channel),thicknessMapUv:Nt&&_(A.thicknessMap.channel),alphaMapUv:_t&&_(A.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(fe||w),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Z.attributes.uv&&(re||_t),fog:!!F,useFog:A.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:xt,skinning:L.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:D,decodeVideoTexture:re&&A.map.isVideoTexture===!0&&Le.getTransfer(A.map.colorSpace)===Be,decodeVideoTextureEmissive:Ce&&A.emissiveMap.isVideoTexture===!0&&Le.getTransfer(A.emissiveMap.colorSpace)===Be,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:de&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&A.extensions.multiDraw===!0||$t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return b.vertexUv1s=u.has(1),b.vertexUv2s=u.has(2),b.vertexUv3s=u.has(3),u.clear(),b}function p(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const C in A.defines)S.push(C),S.push(A.defines[C]);return A.isRawShaderMaterial===!1&&(v(S,A),y(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function v(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function y(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function x(A){const S=m[A.type];let C;if(S){const k=En[S];C=tl.clone(k.uniforms)}else C=A.uniforms;return C}function R(A,S){let C;for(let k=0,L=h.length;k<L;k++){const F=h[k];if(F.cacheKey===S){C=F,++C.usedTimes;break}}return C===void 0&&(C=new Uv(i,S,A,r),h.push(C)),C}function M(A){if(--A.usedTimes===0){const S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function T(A){c.remove(A)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:P}}function zv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ku(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $u(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:l.id,object:l,geometry:d,material:f,groupOrder:m,renderOrder:l.renderOrder,z:_,group:g},i[t]=p):(p.id=l.id,p.object=l,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=l.renderOrder,p.z=_,p.group=g),t++,p}function a(l,d,f,m,_,g){const p=o(l,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(l,d,f,m,_,g){const p=o(l,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function u(l,d){e.length>1&&e.sort(l||Hv),n.length>1&&n.sort(d||Ku),s.length>1&&s.sort(d||Ku)}function h(){for(let l=t,d=i.length;l<d;l++){const f=i[l];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function Vv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new $u,i.set(n,[o])):s>=r.length?(o=new $u,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new he};break;case"SpotLight":e={position:new U,direction:new U,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new he,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new he,groundColor:new he};break;case"RectAreaLight":e={color:new he,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function jv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xv=0;function qv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kv(i){const t=new Wv,e=jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);const s=new U,r=new ge,o=new ge;function a(u){let h=0,l=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,v=0,y=0,x=0,R=0,M=0,T=0;u.sort(qv);for(let A=0,S=u.length;A<S;A++){const C=u[A],k=C.color,L=C.intensity,F=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*L,l+=k.g*L,d+=k.b*L;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],L);T++}else if(C.isDirectionalLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,O=e.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=B,f++}else if(C.isSpotLight){const B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(k).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[_]=B;const j=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,j.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[_]=j.matrix,C.castShadow){const O=e.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=Z,x++}_++}else if(C.isRectAreaLight){const B=t.get(C);B.color.copy(k).multiplyScalar(L),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=B,g++}else if(C.isPointLight){const B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const j=C.shadow,O=e.get(C);O.shadowIntensity=j.intensity,O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=B,m++}else if(C.isHemisphereLight){const B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(L),B.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=B,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-M,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=T,n.version=Xv++)}function c(u,h){let l=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,v=u.length;p<v;p++){const y=u[p];if(y.isDirectionalLight){const x=n.directional[l];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),l++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Yu(i){const t=new Kv(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $v(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Yu(i),t.set(s,[a])):r>=o.length?(a=new Yu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
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
}`;function Jv(i,t,e){let n=new sl;const s=new ce,r=new ce,o=new Se,a=new Xg({depthPacking:3201}),c=new qg,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Yv,fragmentShader:Zv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xe;m.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new we(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(M,T,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const A=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(0),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const L=p!==3&&this.type===3,F=p===3&&this.type!==3;for(let Z=0,B=M.length;Z<B;Z++){const j=M[Z],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const et=O.getFrameExtents();if(s.multiply(et),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,O.mapSize.y=r.y)),O.map===null||L===!0||F===!0){const nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};O.map!==null&&O.map.dispose(),O.map=new is(s.x,s.y,nt),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const Q=O.getViewportCount();for(let nt=0;nt<Q;nt++){const ft=O.getViewport(nt);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),k.viewport(o),O.updateMatrices(j,nt),n=O.getFrustum(),x(T,P,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===3&&v(O,P),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,S,C)};function v(M,T){const P=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new is(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,P,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,P,f,_,null)}function y(M,T,P,A){let S=null;const C=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=S.uuid,L=T.uuid;let F=u[k];F===void 0&&(F={},u[k]=F);let Z=F[L];Z===void 0&&(Z=S.clone(),F[L]=Z,T.addEventListener("dispose",R)),S=Z}if(S.visible=T.visible,S.wireframe=T.wireframe,A===3?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:l[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=i.properties.get(S);k.light=P}return S}function x(M,T,P,A,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===3)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const L=t.update(M),F=M.material;if(Array.isArray(F)){const Z=L.groups;for(let B=0,j=Z.length;B<j;B++){const O=Z[B],et=F[O.materialIndex];if(et&&et.visible){const Q=y(M,et,A,S);M.onBeforeShadow(i,M,T,P,L,Q,O),i.renderBufferDirect(P,null,L,Q,M,O),M.onAfterShadow(i,M,T,P,L,Q,O)}}}else if(F.visible){const Z=y(M,F,A,S);M.onBeforeShadow(i,M,T,P,L,Z,null),i.renderBufferDirect(P,null,L,Z,M,null),M.onAfterShadow(i,M,T,P,L,Z,null)}}const k=M.children;for(let L=0,F=k.length;L<F;L++)x(k[L],T,P,A,S)}function R(M){M.target.removeEventListener("dispose",R);for(const P in u){const A=u[P],S=M.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const Qv={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ty(i,t){function e(){let q=!1;const Nt=new Se;let rt=null;const _t=new Se(0,0,0,0);return{setMask:function(Ot){rt!==Ot&&!q&&(i.colorMask(Ot,Ot,Ot,Ot),rt=Ot)},setLocked:function(Ot){q=Ot},setClear:function(Ot,zt,de,D,b){b===!0&&(Ot*=D,zt*=D,de*=D),Nt.set(Ot,zt,de,D),_t.equals(Nt)===!1&&(i.clearColor(Ot,zt,de,D),_t.copy(Nt))},reset:function(){q=!1,rt=null,_t.set(-1,0,0,0)}}}function n(){let q=!1,Nt=!1,rt=null,_t=null,Ot=null;return{setReversed:function(zt){if(Nt!==zt){const de=t.get("EXT_clip_control");Nt?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT);const D=Ot;Ot=null,this.setClear(D)}Nt=zt},getReversed:function(){return Nt},setTest:function(zt){zt?V(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(zt){rt!==zt&&!q&&(i.depthMask(zt),rt=zt)},setFunc:function(zt){if(Nt&&(zt=Qv[zt]),_t!==zt){switch(zt){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=zt}},setLocked:function(zt){q=zt},setClear:function(zt){Ot!==zt&&(Nt&&(zt=1-zt),i.clearDepth(zt),Ot=zt)},reset:function(){q=!1,rt=null,_t=null,Ot=null,Nt=!1}}}function s(){let q=!1,Nt=null,rt=null,_t=null,Ot=null,zt=null,de=null,D=null,b=null;return{setTest:function(ut){q||(ut?V(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ut){Nt!==ut&&!q&&(i.stencilMask(ut),Nt=ut)},setFunc:function(ut,mt,Y){(rt!==ut||_t!==mt||Ot!==Y)&&(i.stencilFunc(ut,mt,Y),rt=ut,_t=mt,Ot=Y)},setOp:function(ut,mt,Y){(zt!==ut||de!==mt||D!==Y)&&(i.stencilOp(ut,mt,Y),zt=ut,de=mt,D=Y)},setLocked:function(ut){q=ut},setClear:function(ut){b!==ut&&(i.clearStencil(ut),b=ut)},reset:function(){q=!1,Nt=null,rt=null,_t=null,Ot=null,zt=null,de=null,D=null,b=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,R=null,M=null,T=new he(0,0,0),P=0,A=!1,S=null,C=null,k=null,L=null,F=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=j>=1):O.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=j>=2);let et=null,Q={};const nt=i.getParameter(i.SCISSOR_BOX),ft=i.getParameter(i.VIEWPORT),jt=new Se().fromArray(nt),it=new Se().fromArray(ft);function ht(q,Nt,rt,_t){const Ot=new Uint8Array(4),zt=i.createTexture();i.bindTexture(q,zt),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<rt;de++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Nt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,Ot):i.texImage2D(Nt+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ot);return zt}const dt={};dt[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(i.DEPTH_TEST),o.setFunc(3),se(!1),fe(1),V(i.CULL_FACE),W(0);function V(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function xt(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Vt(q,Nt){return l[q]!==Nt?(i.bindFramebuffer(q,Nt),l[q]=Nt,q===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Nt),q===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Nt),!0):!1}function $t(q,Nt){let rt=f,_t=!1;if(q){rt=d.get(Nt),rt===void 0&&(rt=[],d.set(Nt,rt));const Ot=q.textures;if(rt.length!==Ot.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let zt=0,de=Ot.length;zt<de;zt++)rt[zt]=i.COLOR_ATTACHMENT0+zt;rt.length=Ot.length,_t=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(rt)}function re(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const ie={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};ie[103]=i.MIN,ie[104]=i.MAX;const Ae={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function W(q,Nt,rt,_t,Ot,zt,de,D,b,ut){if(q===0){_===!0&&(xt(i.BLEND),_=!1);return}if(_===!1&&(V(i.BLEND),_=!0),q!==5){if(q!==g||ut!==A){if((p!==100||x!==100)&&(i.blendEquation(i.FUNC_ADD),p=100,x=100),ut)switch(q){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}v=null,y=null,R=null,M=null,T.set(0,0,0),P=0,g=q,A=ut}return}Ot=Ot||Nt,zt=zt||rt,de=de||_t,(Nt!==p||Ot!==x)&&(i.blendEquationSeparate(ie[Nt],ie[Ot]),p=Nt,x=Ot),(rt!==v||_t!==y||zt!==R||de!==M)&&(i.blendFuncSeparate(Ae[rt],Ae[_t],Ae[zt],Ae[de]),v=rt,y=_t,R=zt,M=de),(D.equals(T)===!1||b!==P)&&(i.blendColor(D.r,D.g,D.b,b),T.copy(D),P=b),g=q,A=!1}function Gt(q,Nt){q.side===2?xt(i.CULL_FACE):V(i.CULL_FACE);let rt=q.side===1;Nt&&(rt=!rt),se(rt),q.blending===1&&q.transparent===!1?W(0):W(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),r.setMask(q.colorWrite);const _t=q.stencilWrite;a.setTest(_t),_t&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ce(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){S!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),S=q)}function fe(q){q!==0?(V(i.CULL_FACE),q!==C&&(q===1?i.cullFace(i.BACK):q===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),C=q}function Lt(q){q!==k&&(B&&i.lineWidth(q),k=q)}function Ce(q,Nt,rt){q?(V(i.POLYGON_OFFSET_FILL),(L!==Nt||F!==rt)&&(i.polygonOffset(Nt,rt),L=Nt,F=rt)):xt(i.POLYGON_OFFSET_FILL)}function te(q){q?V(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function I(q){q===void 0&&(q=i.TEXTURE0+Z-1),et!==q&&(i.activeTexture(q),et=q)}function w(q,Nt,rt){rt===void 0&&(et===null?rt=i.TEXTURE0+Z-1:rt=et);let _t=Q[rt];_t===void 0&&(_t={type:void 0,texture:void 0},Q[rt]=_t),(_t.type!==q||_t.texture!==Nt)&&(et!==rt&&(i.activeTexture(rt),et=rt),i.bindTexture(q,Nt||dt[q]),_t.type=q,_t.texture=Nt)}function K(){const q=Q[et];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Yt(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function oe(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ae(q){jt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),jt.copy(q))}function Kt(q){it.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),it.copy(q))}function be(q,Nt){let rt=u.get(Nt);rt===void 0&&(rt=new WeakMap,u.set(Nt,rt));let _t=rt.get(q);_t===void 0&&(_t=i.getUniformBlockIndex(Nt,q.name),rt.set(q,_t))}function Tt(q,Nt){const _t=u.get(Nt).get(q);c.get(Nt)!==_t&&(i.uniformBlockBinding(Nt,_t,q.__bindingPointIndex),c.set(Nt,_t))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,Q={},l={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,v=null,y=null,x=null,R=null,M=null,T=new he(0,0,0),P=0,A=!1,S=null,C=null,k=null,L=null,F=null,jt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:xt,bindFramebuffer:Vt,drawBuffers:$t,useProgram:re,setBlending:W,setMaterial:Gt,setFlipSided:se,setCullFace:fe,setLineWidth:Lt,setPolygonOffset:Ce,setScissorTest:te,activeTexture:I,bindTexture:w,unbindTexture:K,compressedTexImage2D:ct,compressedTexImage3D:vt,texImage2D:Wt,texImage3D:oe,updateUBOMapping:be,uniformBlockBinding:Tt,texStorage2D:_e,texStorage3D:St,texSubImage2D:lt,texSubImage3D:Yt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ft,scissor:ae,viewport:Kt,reset:gt}}function ey(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ce,h=new WeakMap;let l;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,w){return f?new OffscreenCanvas(I,w):Sr("canvas")}function _(I,w,K){let ct=1;const vt=te(I);if((vt.width>K||vt.height>K)&&(ct=K/Math.max(vt.width,vt.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const lt=Math.floor(ct*vt.width),Yt=Math.floor(ct*vt.height);l===void 0&&(l=m(lt,Yt));const wt=w?m(lt,Yt):l;return wt.width=lt,wt.height=Yt,wt.getContext("2d").drawImage(I,0,0,lt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Yt+")."),wt}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),I;return I}function g(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,w,K,ct,vt=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let lt=w;if(w===i.RED&&(K===i.FLOAT&&(lt=i.R32F),K===i.HALF_FLOAT&&(lt=i.R16F),K===i.UNSIGNED_BYTE&&(lt=i.R8)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.R8UI),K===i.UNSIGNED_SHORT&&(lt=i.R16UI),K===i.UNSIGNED_INT&&(lt=i.R32UI),K===i.BYTE&&(lt=i.R8I),K===i.SHORT&&(lt=i.R16I),K===i.INT&&(lt=i.R32I)),w===i.RG&&(K===i.FLOAT&&(lt=i.RG32F),K===i.HALF_FLOAT&&(lt=i.RG16F),K===i.UNSIGNED_BYTE&&(lt=i.RG8)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RG8UI),K===i.UNSIGNED_SHORT&&(lt=i.RG16UI),K===i.UNSIGNED_INT&&(lt=i.RG32UI),K===i.BYTE&&(lt=i.RG8I),K===i.SHORT&&(lt=i.RG16I),K===i.INT&&(lt=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),K===i.UNSIGNED_INT&&(lt=i.RGB32UI),K===i.BYTE&&(lt=i.RGB8I),K===i.SHORT&&(lt=i.RGB16I),K===i.INT&&(lt=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),K===i.UNSIGNED_INT&&(lt=i.RGBA32UI),K===i.BYTE&&(lt=i.RGBA8I),K===i.SHORT&&(lt=i.RGBA16I),K===i.INT&&(lt=i.RGBA32I)),w===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),w===i.RGBA){const Yt=vt?Go:Le.getTransfer(ct);K===i.FLOAT&&(lt=i.RGBA32F),K===i.HALF_FLOAT&&(lt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(lt=Yt===Be?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function x(I,w){let K;return I?w===null||w===1014||w===1020?K=i.DEPTH24_STENCIL8:w===1015?K=i.DEPTH32F_STENCIL8:w===1012&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===1014||w===1020?K=i.DEPTH_COMPONENT24:w===1015?K=i.DEPTH_COMPONENT32F:w===1012&&(K=i.DEPTH_COMPONENT16),K}function R(I,w){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==1003&&I.minFilter!==1006?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function M(I){const w=I.target;w.removeEventListener("dispose",M),P(w),w.isVideoTexture&&h.delete(w)}function T(I){const w=I.target;w.removeEventListener("dispose",T),S(w)}function P(I){const w=n.get(I);if(w.__webglInit===void 0)return;const K=I.source,ct=d.get(K);if(ct){const vt=ct[w.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&A(I),Object.keys(ct).length===0&&d.delete(K)}n.remove(I)}function A(I){const w=n.get(I);i.deleteTexture(w.__webglTexture);const K=I.source,ct=d.get(K);delete ct[w.__cacheKey],o.memory.textures--}function S(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(w.__webglFramebuffer[ct]))for(let vt=0;vt<w.__webglFramebuffer[ct].length;vt++)i.deleteFramebuffer(w.__webglFramebuffer[ct][vt]);else i.deleteFramebuffer(w.__webglFramebuffer[ct]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ct])}else{if(Array.isArray(w.__webglFramebuffer))for(let ct=0;ct<w.__webglFramebuffer.length;ct++)i.deleteFramebuffer(w.__webglFramebuffer[ct]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ct=0;ct<w.__webglColorRenderbuffer.length;ct++)w.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ct]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=I.textures;for(let ct=0,vt=K.length;ct<vt;ct++){const lt=n.get(K[ct]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(K[ct])}n.remove(I)}let C=0;function k(){C=0}function L(){const I=C;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),C+=1,I}function F(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function Z(I,w){const K=n.get(I);if(I.isVideoTexture&&Lt(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const ct=I.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,I,w);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function B(I,w){const K=n.get(I);if(I.version>0&&K.__version!==I.version){it(K,I,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function j(I,w){const K=n.get(I);if(I.version>0&&K.__version!==I.version){it(K,I,w);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function O(I,w){const K=n.get(I);if(I.version>0&&K.__version!==I.version){ht(K,I,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}const et={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Q={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},nt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function ft(I,w){if(w.type===1015&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===1006||w.magFilter===1007||w.magFilter===1005||w.magFilter===1008||w.minFilter===1006||w.minFilter===1007||w.minFilter===1005||w.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,et[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,et[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,et[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Q[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,nt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===1003||w.minFilter!==1005&&w.minFilter!==1008||w.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function jt(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",M));const ct=w.source;let vt=d.get(ct);vt===void 0&&(vt={},d.set(ct,vt));const lt=F(w);if(lt!==I.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),vt[lt].usedTimes++;const Yt=vt[I.__cacheKey];Yt!==void 0&&(vt[I.__cacheKey].usedTimes--,Yt.usedTimes===0&&A(w)),I.__cacheKey=lt,I.__webglTexture=vt[lt].texture}return K}function it(I,w,K){let ct=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ct=i.TEXTURE_3D);const vt=jt(I,w),lt=w.source;e.bindTexture(ct,I.__webglTexture,i.TEXTURE0+K);const Yt=n.get(lt);if(lt.version!==Yt.__version||vt===!0){e.activeTexture(i.TEXTURE0+K);const wt=Le.getPrimaries(Le.workingColorSpace),Ft=w.colorSpace===""?null:Le.getPrimaries(w.colorSpace),_e=w.colorSpace===""||wt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let St=_(w.image,!1,s.maxTextureSize);St=Ce(w,St);const Wt=r.convert(w.format,w.colorSpace),oe=r.convert(w.type);let ae=y(w.internalFormat,Wt,oe,w.colorSpace,w.isVideoTexture);ft(ct,w);let Kt;const be=w.mipmaps,Tt=w.isVideoTexture!==!0,gt=Yt.__version===void 0||vt===!0,q=lt.dataReady,Nt=R(w,St);if(w.isDepthTexture)ae=x(w.format===1027,w.type),gt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,ae,St.width,St.height):e.texImage2D(i.TEXTURE_2D,0,ae,St.width,St.height,0,Wt,oe,null));else if(w.isDataTexture)if(be.length>0){Tt&&gt&&e.texStorage2D(i.TEXTURE_2D,Nt,ae,be[0].width,be[0].height);for(let rt=0,_t=be.length;rt<_t;rt++)Kt=be[rt],Tt?q&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Kt.width,Kt.height,Wt,oe,Kt.data):e.texImage2D(i.TEXTURE_2D,rt,ae,Kt.width,Kt.height,0,Wt,oe,Kt.data);w.generateMipmaps=!1}else Tt?(gt&&e.texStorage2D(i.TEXTURE_2D,Nt,ae,St.width,St.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St.width,St.height,Wt,oe,St.data)):e.texImage2D(i.TEXTURE_2D,0,ae,St.width,St.height,0,Wt,oe,St.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Tt&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,ae,be[0].width,be[0].height,St.depth);for(let rt=0,_t=be.length;rt<_t;rt++)if(Kt=be[rt],w.format!==1023)if(Wt!==null)if(Tt){if(q)if(w.layerUpdates.size>0){const Ot=Tu(Kt.width,Kt.height,w.format,w.type);for(const zt of w.layerUpdates){const de=Kt.data.subarray(zt*Ot/Kt.data.BYTES_PER_ELEMENT,(zt+1)*Ot/Kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,zt,Kt.width,Kt.height,1,Wt,de)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Kt.width,Kt.height,St.depth,Wt,Kt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,ae,Kt.width,Kt.height,St.depth,0,Kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Kt.width,Kt.height,St.depth,Wt,oe,Kt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,ae,Kt.width,Kt.height,St.depth,0,Wt,oe,Kt.data)}else{Tt&&gt&&e.texStorage2D(i.TEXTURE_2D,Nt,ae,be[0].width,be[0].height);for(let rt=0,_t=be.length;rt<_t;rt++)Kt=be[rt],w.format!==1023?Wt!==null?Tt?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Kt.width,Kt.height,Wt,Kt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,ae,Kt.width,Kt.height,0,Kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?q&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Kt.width,Kt.height,Wt,oe,Kt.data):e.texImage2D(i.TEXTURE_2D,rt,ae,Kt.width,Kt.height,0,Wt,oe,Kt.data)}else if(w.isDataArrayTexture)if(Tt){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,ae,St.width,St.height,St.depth),q)if(w.layerUpdates.size>0){const rt=Tu(St.width,St.height,w.format,w.type);for(const _t of w.layerUpdates){const Ot=St.data.subarray(_t*rt/St.data.BYTES_PER_ELEMENT,(_t+1)*rt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,St.width,St.height,1,Wt,oe,Ot)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Wt,oe,St.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,St.width,St.height,St.depth,0,Wt,oe,St.data);else if(w.isData3DTexture)Tt?(gt&&e.texStorage3D(i.TEXTURE_3D,Nt,ae,St.width,St.height,St.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Wt,oe,St.data)):e.texImage3D(i.TEXTURE_3D,0,ae,St.width,St.height,St.depth,0,Wt,oe,St.data);else if(w.isFramebufferTexture){if(gt)if(Tt)e.texStorage2D(i.TEXTURE_2D,Nt,ae,St.width,St.height);else{let rt=St.width,_t=St.height;for(let Ot=0;Ot<Nt;Ot++)e.texImage2D(i.TEXTURE_2D,Ot,ae,rt,_t,0,Wt,oe,null),rt>>=1,_t>>=1}}else if(be.length>0){if(Tt&&gt){const rt=te(be[0]);e.texStorage2D(i.TEXTURE_2D,Nt,ae,rt.width,rt.height)}for(let rt=0,_t=be.length;rt<_t;rt++)Kt=be[rt],Tt?q&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Wt,oe,Kt):e.texImage2D(i.TEXTURE_2D,rt,ae,Wt,oe,Kt);w.generateMipmaps=!1}else if(Tt){if(gt){const rt=te(St);e.texStorage2D(i.TEXTURE_2D,Nt,ae,rt.width,rt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,oe,St)}else e.texImage2D(i.TEXTURE_2D,0,ae,Wt,oe,St);g(w)&&p(ct),Yt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ht(I,w,K){if(w.image.length!==6)return;const ct=jt(I,w),vt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);const lt=n.get(vt);if(vt.version!==lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+K);const Yt=Le.getPrimaries(Le.workingColorSpace),wt=w.colorSpace===""?null:Le.getPrimaries(w.colorSpace),Ft=w.colorSpace===""||Yt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const _e=w.isCompressedTexture||w.image[0].isCompressedTexture,St=w.image[0]&&w.image[0].isDataTexture,Wt=[];for(let _t=0;_t<6;_t++)!_e&&!St?Wt[_t]=_(w.image[_t],!0,s.maxCubemapSize):Wt[_t]=St?w.image[_t].image:w.image[_t],Wt[_t]=Ce(w,Wt[_t]);const oe=Wt[0],ae=r.convert(w.format,w.colorSpace),Kt=r.convert(w.type),be=y(w.internalFormat,ae,Kt,w.colorSpace),Tt=w.isVideoTexture!==!0,gt=lt.__version===void 0||ct===!0,q=vt.dataReady;let Nt=R(w,oe);ft(i.TEXTURE_CUBE_MAP,w);let rt;if(_e){Tt&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,be,oe.width,oe.height);for(let _t=0;_t<6;_t++){rt=Wt[_t].mipmaps;for(let Ot=0;Ot<rt.length;Ot++){const zt=rt[Ot];w.format!==1023?ae!==null?Tt?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,0,0,zt.width,zt.height,ae,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,be,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,0,0,zt.width,zt.height,ae,Kt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot,be,zt.width,zt.height,0,ae,Kt,zt.data)}}}else{if(rt=w.mipmaps,Tt&&gt){rt.length>0&&Nt++;const _t=te(Wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,be,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(St){Tt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt[_t].width,Wt[_t].height,ae,Kt,Wt[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,be,Wt[_t].width,Wt[_t].height,0,ae,Kt,Wt[_t].data);for(let Ot=0;Ot<rt.length;Ot++){const de=rt[Ot].image[_t].image;Tt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,0,0,de.width,de.height,ae,Kt,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,be,de.width,de.height,0,ae,Kt,de.data)}}else{Tt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ae,Kt,Wt[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,be,ae,Kt,Wt[_t]);for(let Ot=0;Ot<rt.length;Ot++){const zt=rt[Ot];Tt?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,0,0,ae,Kt,zt.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ot+1,be,ae,Kt,zt.image[_t])}}}g(w)&&p(i.TEXTURE_CUBE_MAP),lt.__version=vt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function dt(I,w,K,ct,vt,lt){const Yt=r.convert(K.format,K.colorSpace),wt=r.convert(K.type),Ft=y(K.internalFormat,Yt,wt,K.colorSpace),_e=n.get(w),St=n.get(K);if(St.__renderTarget=w,!_e.__hasExternalTextures){const Wt=Math.max(1,w.width>>lt),oe=Math.max(1,w.height>>lt);vt===i.TEXTURE_3D||vt===i.TEXTURE_2D_ARRAY?e.texImage3D(vt,lt,Ft,Wt,oe,w.depth,0,Yt,wt,null):e.texImage2D(vt,lt,Ft,Wt,oe,0,Yt,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,vt,St.__webglTexture,0,se(w)):(vt===i.TEXTURE_2D||vt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,vt,St.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function V(I,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){const ct=w.depthTexture,vt=ct&&ct.isDepthTexture?ct.type:null,lt=x(w.stencilBuffer,vt),Yt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=se(w);fe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,lt,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,lt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,lt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Yt,i.RENDERBUFFER,I)}else{const ct=w.textures;for(let vt=0;vt<ct.length;vt++){const lt=ct[vt],Yt=r.convert(lt.format,lt.colorSpace),wt=r.convert(lt.type),Ft=y(lt.internalFormat,Yt,wt,lt.colorSpace),_e=se(w);K&&fe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,Ft,w.width,w.height):fe(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,Ft,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(w.depthTexture);ct.__renderTarget=w,(!ct.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z(w.depthTexture,0);const vt=ct.__webglTexture,lt=se(w);if(w.depthTexture.format===1026)fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,vt,0);else if(w.depthTexture.format===1027)fe(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Vt(I){const w=n.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ct){const vt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ct.removeEventListener("dispose",vt)};ct.addEventListener("dispose",vt),w.__depthDisposeCallback=vt}w.__boundDepthTexture=ct}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");xt(w.__webglFramebuffer,I)}else if(K){w.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ct]),w.__webglDepthbuffer[ct]===void 0)w.__webglDepthbuffer[ct]=i.createRenderbuffer(),V(w.__webglDepthbuffer[ct],I,!1);else{const vt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=w.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),V(w.__webglDepthbuffer,I,!1);else{const ct=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(I,w,K){const ct=n.get(I);w!==void 0&&dt(ct.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Vt(I)}function re(I){const w=I.texture,K=n.get(I),ct=n.get(w);I.addEventListener("dispose",T);const vt=I.textures,lt=I.isWebGLCubeRenderTarget===!0,Yt=vt.length>1;if(Yt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=w.version,o.memory.textures++),lt){K.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[wt]=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)K.__webglFramebuffer[wt][Ft]=i.createFramebuffer()}else K.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let wt=0;wt<w.mipmaps.length;wt++)K.__webglFramebuffer[wt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Yt)for(let wt=0,Ft=vt.length;wt<Ft;wt++){const _e=n.get(vt[wt]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&fe(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const Ft=vt[wt];K.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[wt]);const _e=r.convert(Ft.format,Ft.colorSpace),St=r.convert(Ft.type),Wt=y(Ft.internalFormat,_e,St,Ft.colorSpace,I.isXRRenderTarget===!0),oe=se(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Wt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,K.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),V(K.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),ft(i.TEXTURE_CUBE_MAP,w);for(let wt=0;wt<6;wt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)dt(K.__webglFramebuffer[wt][Ft],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft);else dt(K.__webglFramebuffer[wt],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);g(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Yt){for(let wt=0,Ft=vt.length;wt<Ft;wt++){const _e=vt[wt],St=n.get(_e);e.bindTexture(i.TEXTURE_2D,St.__webglTexture),ft(i.TEXTURE_2D,_e),dt(K.__webglFramebuffer,I,_e,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),g(_e)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(wt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,ct.__webglTexture),ft(wt,w),w.mipmaps&&w.mipmaps.length>0)for(let Ft=0;Ft<w.mipmaps.length;Ft++)dt(K.__webglFramebuffer[Ft],I,w,i.COLOR_ATTACHMENT0,wt,Ft);else dt(K.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,wt,0);g(w)&&p(wt),e.unbindTexture()}I.depthBuffer&&Vt(I)}function ie(I){const w=I.textures;for(let K=0,ct=w.length;K<ct;K++){const vt=w[K];if(g(vt)){const lt=v(I),Yt=n.get(vt).__webglTexture;e.bindTexture(lt,Yt),p(lt),e.unbindTexture()}}}const Ae=[],W=[];function Gt(I){if(I.samples>0){if(fe(I)===!1){const w=I.textures,K=I.width,ct=I.height;let vt=i.COLOR_BUFFER_BIT;const lt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Yt=n.get(I),wt=w.length>1;if(wt)for(let Ft=0;Ft<w.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Ft=0;Ft<w.length;Ft++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(vt|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(vt|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Yt.__webglColorRenderbuffer[Ft]);const _e=n.get(w[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,K,ct,0,0,K,ct,vt,i.NEAREST),c===!0&&(Ae.length=0,W.length=0,Ae.push(i.COLOR_ATTACHMENT0+Ft),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ae.push(lt),W.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Ft=0;Ft<w.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,Yt.__webglColorRenderbuffer[Ft]);const _e=n.get(w[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,_e,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function se(I){return Math.min(s.maxSamples,I.samples)}function fe(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Lt(I){const w=o.render.frame;h.get(I)!==w&&(h.set(I,w),I.update())}function Ce(I,w){const K=I.colorSpace,ct=I.format,vt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==xn&&K!==""&&(Le.getTransfer(K)===Be?(ct!==1023||vt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function te(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=$t,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=fe}function ny(i,t){function e(n,s=""){let r;const o=Le.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const iy={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(u,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),f=.02,m=.005;u.inputState.pinching&&d>f+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=f-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ry=`
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

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xi({vertexShader:sy,fragmentShader:ry,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends rs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,d=null,f=null,m=null;const _=new oy,g=e.getContextAttributes();let p=null,v=null;const y=[],x=[],R=new ce;let M=null;const T=new _n;T.viewport=new Se;const P=new _n;P.viewport=new Se;const A=[T,P],S=new m0;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=y[it];return ht===void 0&&(ht=new qa,y[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=y[it];return ht===void 0&&(ht=new qa,y[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=y[it];return ht===void 0&&(ht=new qa,y[it]=ht),ht.getHandSpace()};function L(it){const ht=x.indexOf(it.inputSource);if(ht===-1)return;const dt=y[ht];dt!==void 0&&(dt.update(it.inputSource,it.frame,u||o),dt.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Z);for(let it=0;it<y.length;it++){const ht=x[it];ht!==null&&(x[it]=null,y[it].disconnect(ht))}C=null,k=null,_.reset(),t.setRenderTarget(p),f=null,d=null,l=null,s=null,v=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){a=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const ht={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new is(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ht=null,dt=null,V=null;g.depth&&(V=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=g.stencil?1027:1026,dt=g.stencil?1020:1014);const xt={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new is(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new tp(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(it){for(let ht=0;ht<it.removed.length;ht++){const dt=it.removed[ht],V=x.indexOf(dt);V>=0&&(x[V]=null,y[V].disconnect(dt))}for(let ht=0;ht<it.added.length;ht++){const dt=it.added[ht];let V=x.indexOf(dt);if(V===-1){for(let Vt=0;Vt<y.length;Vt++)if(Vt>=x.length){x.push(dt),V=Vt;break}else if(x[Vt]===null){x[Vt]=dt,V=Vt;break}if(V===-1)break}const xt=y[V];xt&&xt.connect(dt)}}const B=new U,j=new U;function O(it,ht,dt){B.setFromMatrixPosition(ht.matrixWorld),j.setFromMatrixPosition(dt.matrixWorld);const V=B.distanceTo(j),xt=ht.projectionMatrix.elements,Vt=dt.projectionMatrix.elements,$t=xt[14]/(xt[10]-1),re=xt[14]/(xt[10]+1),ie=(xt[9]+1)/xt[5],Ae=(xt[9]-1)/xt[5],W=(xt[8]-1)/xt[0],Gt=(Vt[8]+1)/Vt[0],se=$t*W,fe=$t*Gt,Lt=V/(-W+Gt),Ce=Lt*-W;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ce),it.translateZ(Lt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),xt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const te=$t+Lt,I=re+Lt,w=se-Ce,K=fe+(V-Ce),ct=ie*re/I*te,vt=Ae*re/I*te;it.projectionMatrix.makePerspective(w,K,ct,vt,te,I),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function et(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ht=it.near,dt=it.far;_.texture!==null&&(_.depthNear>0&&(ht=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),S.near=P.near=T.near=ht,S.far=P.far=T.far=dt,(C!==S.near||k!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,k=S.far),T.layers.mask=it.layers.mask|2,P.layers.mask=it.layers.mask|4,S.layers.mask=T.layers.mask|P.layers.mask;const V=it.parent,xt=S.cameras;et(S,V);for(let Vt=0;Vt<xt.length;Vt++)et(xt[Vt],V);xt.length===2?O(S,T,P):S.projectionMatrix.copy(T.projectionMatrix),Q(it,S,V)};function Q(it,ht,dt){dt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ks*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let nt=null;function ft(it,ht){if(h=ht.getViewerPose(u||o),m=ht,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let V=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,V=!0);for(let Vt=0;Vt<dt.length;Vt++){const $t=dt[Vt];let re=null;if(f!==null)re=f.getViewport($t);else{const Ae=l.getViewSubImage(d,$t);re=Ae.viewport,Vt===0&&(t.setRenderTargetTextures(v,Ae.colorTexture,d.ignoreDepthValues?void 0:Ae.depthStencilTexture),t.setRenderTarget(v))}let ie=A[Vt];ie===void 0&&(ie=new _n,ie.layers.enable(Vt),ie.viewport=new Se,A[Vt]=ie),ie.matrix.fromArray($t.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray($t.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),Vt===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),V===!0&&S.cameras.push(ie)}const xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Vt=l.getDepthInformation(dt[0]);Vt&&Vt.isValid&&Vt.texture&&_.init(t,Vt,s.renderState)}}for(let dt=0;dt<y.length;dt++){const V=x[dt],xt=y[dt];V!==null&&xt!==void 0&&xt.update(V,ht,u||o)}nt&&nt(it,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}const jt=new ap;jt.setAnimationLoop(ft),this.setAnimationLoop=function(it){nt=it},this.dispose=function(){}}}const zi=new kn,cy=new ge;function ly(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,jf(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),l(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,y):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===1&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===1&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,zi.copy(x),zi.x*=-1,zi.y*=-1,zi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),g.envMapRotation.value.setFromMatrix4(cy.makeRotationFromEuler(zi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function l(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function u(v,y){let x=s[v.id];x===void 0&&(m(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",g));const R=y.program;n.updateUBOMapping(v,R);const M=t.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function h(v){const y=l();v.__bindingPointIndex=y;const x=i.createBuffer(),R=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],x=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,T=x.length;M<T;M++){const P=Array.isArray(x[M])?x[M]:[x[M]];for(let A=0,S=P.length;A<S;A++){const C=P[A];if(f(C,M,A,R)===!0){const k=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let Z=0;Z<L.length;Z++){const B=L[Z],j=_(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+F,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,x,R){const M=v.value,T=y+"_"+x;if(R[T]===void 0)return typeof M=="number"||typeof M=="boolean"?R[T]=M:R[T]=M.clone(),!0;{const P=R[T];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return R[T]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function m(v){const y=v.uniforms;let x=0;const R=16;for(let T=0,P=y.length;T<P;T++){const A=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,C=A.length;S<C;S++){const k=A[S],L=Array.isArray(k.value)?k.value:[k.value];for(let F=0,Z=L.length;F<Z;F++){const B=L[F],j=_(B),O=x%R,et=O%j.boundary,Q=O+et;x+=et,Q!==0&&R-Q<j.storage&&(x+=R-Q),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=j.storage}}}const M=x%R;return M>0&&(x+=R-M),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:p}}class hy{constructor(t={}){const{canvas:e=lg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let R=!1,M=0,T=0,P=null,A=-1,S=null;const C=new Se,k=new Se;let L=null;const F=new he(0);let Z=0,B=e.width,j=e.height,O=1,et=null,Q=null;const nt=new Se(0,0,B,j),ft=new Se(0,0,B,j);let jt=!1;const it=new sl;let ht=!1,dt=!1;const V=new ge,xt=new ge,Vt=new U,$t=new Se,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Ae(){return P===null?O:1}let W=n;function Gt(E,H){return e.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",zt,!1),W===null){const H="webgl2";if(W=Gt(H,E),W===null)throw Gt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,fe,Lt,Ce,te,I,w,K,ct,vt,lt,Yt,wt,Ft,_e,St,Wt,oe,ae,Kt,be,Tt,gt,q;function Nt(){se=new vx(W),se.init(),Tt=new ny(W,se),fe=new px(W,se,t,Tt),Lt=new ty(W,se),fe.reverseDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),Ce=new Sx(W),te=new zv,I=new ey(W,se,Lt,te,fe,Tt,Ce),w=new gx(x),K=new xx(x),ct=new I0(W),gt=new dx(W,ct),vt=new yx(W,ct,Ce,gt),lt=new Ex(W,vt,ct,Ce),ae=new Ax(W,fe,I),St=new mx(te),Yt=new Gv(x,w,K,se,fe,gt,St),wt=new ly(x,te),Ft=new Vv,_e=new $v(se),oe=new hx(x,w,K,Lt,lt,f,c),Wt=new Jv(x,lt,fe),q=new uy(W,Ce,fe,Lt),Kt=new fx(W,se,Ce),be=new Mx(W,se,Ce),Ce.programs=Yt.programs,x.capabilities=fe,x.extensions=se,x.properties=te,x.renderLists=Ft,x.shadowMap=Wt,x.state=Lt,x.info=Ce}Nt();const rt=new ay(x,W);this.xr=rt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(B,j,!1))},this.getSize=function(E){return E.set(B,j)},this.setSize=function(E,H,z=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,j=H,e.width=Math.floor(E*O),e.height=Math.floor(H*O),z===!0&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(B*O,j*O).floor()},this.setDrawingBufferSize=function(E,H,z){B=E,j=H,O=z,e.width=Math.floor(E*z),e.height=Math.floor(H*z),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(nt)},this.setViewport=function(E,H,z,X){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,H,z,X),Lt.viewport(C.copy(nt).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,H,z,X){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,H,z,X),Lt.scissor(k.copy(ft).multiplyScalar(O).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(E){Lt.setScissorTest(jt=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(E=!0,H=!0,z=!0){let X=0;if(E){let N=!1;if(P!==null){const st=P.texture.format;N=st===1033||st===1031||st===1029}if(N){const st=P.texture.type,pt=st===1009||st===1014||st===1012||st===1020||st===1017||st===1018,bt=oe.getClearColor(),$=oe.getClearAlpha(),Et=bt.r,Rt=bt.g,yt=bt.b;pt?(m[0]=Et,m[1]=Rt,m[2]=yt,m[3]=$,W.clearBufferuiv(W.COLOR,0,m)):(_[0]=Et,_[1]=Rt,_[2]=yt,_[3]=$,W.clearBufferiv(W.COLOR,0,_))}else X|=W.COLOR_BUFFER_BIT}H&&(X|=W.DEPTH_BUFFER_BIT),z&&(X|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",zt,!1),oe.dispose(),Ft.dispose(),_e.dispose(),te.dispose(),w.dispose(),K.dispose(),lt.dispose(),gt.dispose(),q.dispose(),Yt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ct),rt.removeEventListener("sessionend",Bt),It.stop()};function _t(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=Ce.autoReset,H=Wt.enabled,z=Wt.autoUpdate,X=Wt.needsUpdate,N=Wt.type;Nt(),Ce.autoReset=E,Wt.enabled=H,Wt.autoUpdate=z,Wt.needsUpdate=X,Wt.type=N}function zt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function de(E){const H=E.target;H.removeEventListener("dispose",de),D(H)}function D(E){b(E),te.remove(E)}function b(E){const H=te.get(E).programs;H!==void 0&&(H.forEach(function(z){Yt.releaseProgram(z)}),E.isShaderMaterial&&Yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,z,X,N,st){H===null&&(H=re);const pt=N.isMesh&&N.matrixWorld.determinant()<0,bt=Pt(E,H,z,X,N);Lt.setMaterial(X,pt);let $=z.index,Et=1;if(X.wireframe===!0){if($=vt.getWireframeAttribute(z),$===void 0)return;Et=2}const Rt=z.drawRange,yt=z.attributes.position;let Qt=Rt.start*Et,le=(Rt.start+Rt.count)*Et;st!==null&&(Qt=Math.max(Qt,st.start*Et),le=Math.min(le,(st.start+st.count)*Et)),$!==null?(Qt=Math.max(Qt,0),le=Math.min(le,$.count)):yt!=null&&(Qt=Math.max(Qt,0),le=Math.min(le,yt.count));const ue=le-Qt;if(ue<0||ue===1/0)return;gt.setup(N,X,bt,z,$);let kt,Zt=Kt;if($!==null&&(kt=ct.get($),Zt=be,Zt.setIndex(kt)),N.isMesh)X.wireframe===!0?(Lt.setLineWidth(X.wireframeLinewidth*Ae()),Zt.setMode(W.LINES)):Zt.setMode(W.TRIANGLES);else if(N.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),Lt.setLineWidth(Dt*Ae()),N.isLineSegments?Zt.setMode(W.LINES):N.isLineLoop?Zt.setMode(W.LINE_LOOP):Zt.setMode(W.LINE_STRIP)}else N.isPoints?Zt.setMode(W.POINTS):N.isSprite&&Zt.setMode(W.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Dt=N._multiDrawStarts,Ee=N._multiDrawCounts,ee=N._multiDrawCount,ne=$?ct.get($).bytesPerElement:1,xe=te.get(X).currentProgram.getUniforms();for(let Ge=0;Ge<ee;Ge++)xe.setValue(W,"_gl_DrawID",Ge),Zt.render(Dt[Ge]/ne,Ee[Ge])}else if(N.isInstancedMesh)Zt.renderInstances(Qt,ue,N.count);else if(z.isInstancedBufferGeometry){const Dt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ee=Math.min(z.instanceCount,Dt);Zt.renderInstances(Qt,ue,Ee)}else Zt.render(Qt,ue)};function ut(E,H,z){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,at(E,H,z),E.side=0,E.needsUpdate=!0,at(E,H,z),E.side=2):at(E,H,z)}this.compile=function(E,H,z=null){z===null&&(z=E),p=_e.get(z),p.init(H),y.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(H.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(H.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const X=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const bt=st[pt];ut(bt,z,N),X.add(bt)}else ut(st,z,N),X.add(st)}),y.pop(),p=null,X},this.compileAsync=function(E,H,z=null){const X=this.compile(E,H,z);return new Promise(N=>{function st(){if(X.forEach(function(pt){te.get(pt).currentProgram.isReady()&&X.delete(pt)}),X.size===0){N(E);return}setTimeout(st,10)}se.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let mt=null;function Y(E){mt&&mt(E)}function Ct(){It.stop()}function Bt(){It.start()}const It=new ap;It.setAnimationLoop(Y),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(E){mt=E,rt.setAnimationLoop(E),E===null?It.stop():It.start()},rt.addEventListener("sessionstart",Ct),rt.addEventListener("sessionend",Bt),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(H),H=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,H,P),p=_e.get(E,y.length),p.init(H),y.push(p),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(xt),dt=this.localClippingEnabled,ht=St.init(this.clippingPlanes,dt),g=Ft.get(E,v.length),g.init(),v.push(g),rt.enabled===!0&&rt.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Xt(st,H,-1/0,x.sortObjects)}Xt(E,H,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,Q),ie=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,ie&&oe.addToRenderList(g,E),this.info.render.frame++,ht===!0&&St.beginShadows();const z=p.state.shadowsArray;Wt.render(z,E,H),ht===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,N=g.transmissive;if(p.setupLights(),H.isArrayCamera){const st=H.cameras;if(N.length>0)for(let pt=0,bt=st.length;pt<bt;pt++){const $=st[pt];G(X,N,E,$)}ie&&oe.render(E);for(let pt=0,bt=st.length;pt<bt;pt++){const $=st[pt];tt(g,E,$,$.viewport)}}else N.length>0&&G(X,N,E,H),ie&&oe.render(E),tt(g,E,H);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,H),gt.resetDefaultState(),A=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],ht===!0&&St.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Xt(E,H,z,X){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||it.intersectsSprite(E)){X&&$t.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);const pt=lt.update(E),bt=E.material;bt.visible&&g.push(E,pt,bt,z,$t.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||it.intersectsObject(E))){const pt=lt.update(E),bt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$t.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),$t.copy(pt.boundingSphere.center)),$t.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(bt)){const $=pt.groups;for(let Et=0,Rt=$.length;Et<Rt;Et++){const yt=$[Et],Qt=bt[yt.materialIndex];Qt&&Qt.visible&&g.push(E,pt,Qt,z,$t.z,yt)}}else bt.visible&&g.push(E,pt,bt,z,$t.z,null)}}const st=E.children;for(let pt=0,bt=st.length;pt<bt;pt++)Xt(st[pt],H,z,X)}function tt(E,H,z,X){const N=E.opaque,st=E.transmissive,pt=E.transparent;p.setupLightsView(z),ht===!0&&St.setGlobalState(x.clippingPlanes,z),X&&Lt.viewport(C.copy(X)),N.length>0&&J(N,H,z),st.length>0&&J(st,H,z),pt.length>0&&J(pt,H,z),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function G(E,H,z,X){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new is(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const st=p.state.transmissionRenderTarget[X.id],pt=X.viewport||C;st.setSize(pt.z,pt.w);const bt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(F),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),ie&&oe.render(z);const $=x.toneMapping;x.toneMapping=0;const Et=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ht===!0&&St.setGlobalState(x.clippingPlanes,X),J(E,z,X),I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st),se.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let yt=0,Qt=H.length;yt<Qt;yt++){const le=H[yt],ue=le.object,kt=le.geometry,Zt=le.material,Dt=le.group;if(Zt.side===2&&ue.layers.test(X.layers)){const Ee=Zt.side;Zt.side=1,Zt.needsUpdate=!0,ot(ue,z,X,kt,Zt,Dt),Zt.side=Ee,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(I.updateMultisampleRenderTarget(st),I.updateRenderTargetMipmap(st))}x.setRenderTarget(bt),x.setClearColor(F,Z),Et!==void 0&&(X.viewport=Et),x.toneMapping=$}function J(E,H,z){const X=H.isScene===!0?H.overrideMaterial:null;for(let N=0,st=E.length;N<st;N++){const pt=E[N],bt=pt.object,$=pt.geometry,Et=X===null?pt.material:X,Rt=pt.group;bt.layers.test(z.layers)&&ot(bt,H,z,$,Et,Rt)}}function ot(E,H,z,X,N,st){E.onBeforeRender(x,H,z,X,N,st),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,H,z,X,E,st),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,x.renderBufferDirect(z,H,X,N,E,st),N.side=0,N.needsUpdate=!0,x.renderBufferDirect(z,H,X,N,E,st),N.side=2):x.renderBufferDirect(z,H,X,N,E,st),E.onAfterRender(x,H,z,X,N,st)}function at(E,H,z){H.isScene!==!0&&(H=re);const X=te.get(E),N=p.state.lights,st=p.state.shadowsArray,pt=N.state.version,bt=Yt.getParameters(E,N.state,st,H,z),$=Yt.getProgramCacheKey(bt);let Et=X.programs;X.environment=E.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(E.isMeshStandardMaterial?K:w).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",de),Et=new Map,X.programs=Et);let Rt=Et.get($);if(Rt!==void 0){if(X.currentProgram===Rt&&X.lightsStateVersion===pt)return Ut(E,bt),Rt}else bt.uniforms=Yt.getUniforms(E),E.onBeforeCompile(bt,x),Rt=Yt.acquireProgram(bt,$),Et.set($,Rt),X.uniforms=bt.uniforms;const yt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=St.uniform),Ut(E,bt),X.needsLights=Mt(E),X.lightsStateVersion=pt,X.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Rt,X.uniformsList=null,Rt}function At(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Do.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function Ut(E,H){const z=te.get(E);z.outputColorSpace=H.outputColorSpace,z.batching=H.batching,z.batchingColor=H.batchingColor,z.instancing=H.instancing,z.instancingColor=H.instancingColor,z.instancingMorph=H.instancingMorph,z.skinning=H.skinning,z.morphTargets=H.morphTargets,z.morphNormals=H.morphNormals,z.morphColors=H.morphColors,z.morphTargetsCount=H.morphTargetsCount,z.numClippingPlanes=H.numClippingPlanes,z.numIntersection=H.numClipIntersection,z.vertexAlphas=H.vertexAlphas,z.vertexTangents=H.vertexTangents,z.toneMapping=H.toneMapping}function Pt(E,H,z,X,N){H.isScene!==!0&&(H=re),I.resetTextureUnits();const st=H.fog,pt=X.isMeshStandardMaterial?H.environment:null,bt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xn,$=(X.isMeshStandardMaterial?K:w).get(X.envMap||pt),Et=X.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Rt=!!z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),yt=!!z.morphAttributes.position,Qt=!!z.morphAttributes.normal,le=!!z.morphAttributes.color;let ue=0;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ue=x.toneMapping);const kt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=kt!==void 0?kt.length:0,Dt=te.get(X),Ee=p.state.lights;if(ht===!0&&(dt===!0||E!==S)){const Oe=E===S&&X.id===A;St.setState(X,E,Oe)}let ee=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ee.state.version||Dt.outputColorSpace!==bt||N.isBatchedMesh&&Dt.batching===!1||!N.isBatchedMesh&&Dt.batching===!0||N.isBatchedMesh&&Dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Dt.instancing===!1||!N.isInstancedMesh&&Dt.instancing===!0||N.isSkinnedMesh&&Dt.skinning===!1||!N.isSkinnedMesh&&Dt.skinning===!0||N.isInstancedMesh&&Dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Dt.instancingMorph===!1&&N.morphTexture!==null||Dt.envMap!==$||X.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==St.numPlanes||Dt.numIntersection!==St.numIntersection)||Dt.vertexAlphas!==Et||Dt.vertexTangents!==Rt||Dt.morphTargets!==yt||Dt.morphNormals!==Qt||Dt.morphColors!==le||Dt.toneMapping!==ue||Dt.morphTargetsCount!==Zt)&&(ee=!0):(ee=!0,Dt.__version=X.version);let ne=Dt.currentProgram;ee===!0&&(ne=at(X,H,N));let xe=!1,Ge=!1,vn=!1;const me=ne.getUniforms(),ke=Dt.uniforms;if(Lt.useProgram(ne.program)&&(xe=!0,Ge=!0,vn=!0),X.id!==A&&(A=X.id,Ge=!0),xe||S!==E){Lt.buffers.depth.getReversed()?(V.copy(E.projectionMatrix),hg(V),dg(V),me.setValue(W,"projectionMatrix",V)):me.setValue(W,"projectionMatrix",E.projectionMatrix),me.setValue(W,"viewMatrix",E.matrixWorldInverse);const Ke=me.map.cameraPosition;Ke!==void 0&&Ke.setValue(W,Vt.setFromMatrixPosition(E.matrixWorld)),fe.logarithmicDepthBuffer&&me.setValue(W,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&me.setValue(W,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Ge=!0,vn=!0)}if(N.isSkinnedMesh){me.setOptional(W,N,"bindMatrix"),me.setOptional(W,N,"bindMatrixInverse");const Oe=N.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),me.setValue(W,"boneTexture",Oe.boneTexture,I))}N.isBatchedMesh&&(me.setOptional(W,N,"batchingTexture"),me.setValue(W,"batchingTexture",N._matricesTexture,I),me.setOptional(W,N,"batchingIdTexture"),me.setValue(W,"batchingIdTexture",N._indirectTexture,I),me.setOptional(W,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(W,"batchingColorTexture",N._colorsTexture,I));const qe=z.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&ae.update(N,z,ne),(Ge||Dt.receiveShadow!==N.receiveShadow)&&(Dt.receiveShadow=N.receiveShadow,me.setValue(W,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ke.envMap.value=$,ke.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(ke.envMapIntensity.value=H.environmentIntensity),Ge&&(me.setValue(W,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&pe(ke,vn),st&&X.fog===!0&&wt.refreshFogUniforms(ke,st),wt.refreshMaterialUniforms(ke,X,O,j,p.state.transmissionRenderTarget[E.id]),Do.upload(W,At(Dt),ke,I)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Do.upload(W,At(Dt),ke,I),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&me.setValue(W,"center",N.center),me.setValue(W,"modelViewMatrix",N.modelViewMatrix),me.setValue(W,"normalMatrix",N.normalMatrix),me.setValue(W,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let Ke=0,yn=Oe.length;Ke<yn;Ke++){const ln=Oe[Ke];q.update(ln,ne),q.bind(ln,ne)}}return ne}function pe(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Mt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,H,z){te.get(E.texture).__webglTexture=H,te.get(E.depthTexture).__webglTexture=z;const X=te.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=z===void 0,X.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,H){const z=te.get(E);z.__webglFramebuffer=H,z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,z=0){P=E,M=H,T=z;let X=!0,N=null,st=!1,pt=!1;if(E){const $=te.get(E);if($.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(W.FRAMEBUFFER,null),X=!1;else if($.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if($.__hasExternalTextures)I.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const yt=E.depthTexture;if($.__boundDepthTexture!==yt){if(yt!==null&&te.has(yt)&&(E.width!==yt.image.width||E.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(pt=!0);const Rt=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[H])?N=Rt[H][z]:N=Rt[H],st=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?N=te.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?N=Rt[z]:N=Rt,C.copy(E.viewport),k.copy(E.scissor),L=E.scissorTest}else C.copy(nt).multiplyScalar(O).floor(),k.copy(ft).multiplyScalar(O).floor(),L=jt;if(Lt.bindFramebuffer(W.FRAMEBUFFER,N)&&X&&Lt.drawBuffers(E,N),Lt.viewport(C),Lt.scissor(k),Lt.setScissorTest(L),st){const $=te.get(E.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+H,$.__webglTexture,z)}else if(pt){const $=te.get(E.texture),Et=H||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,$.__webglTexture,z||0,Et)}A=-1},this.readRenderTargetPixels=function(E,H,z,X,N,st,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){Lt.bindFramebuffer(W.FRAMEBUFFER,bt);try{const $=E.texture,Et=$.format,Rt=$.type;if(!fe.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-X&&z>=0&&z<=E.height-N&&W.readPixels(H,z,X,N,Tt.convert(Et),Tt.convert(Rt),st)}finally{const $=P!==null?te.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(W.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(E,H,z,X,N,st,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){const $=E.texture,Et=$.format,Rt=$.type;if(!fe.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=E.width-X&&z>=0&&z<=E.height-N){Lt.bindFramebuffer(W.FRAMEBUFFER,bt);const yt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,yt),W.bufferData(W.PIXEL_PACK_BUFFER,st.byteLength,W.STREAM_READ),W.readPixels(H,z,X,N,Tt.convert(Et),Tt.convert(Rt),0);const Qt=P!==null?te.get(P).__webglFramebuffer:null;Lt.bindFramebuffer(W.FRAMEBUFFER,Qt);const le=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ug(W,le,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,yt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,st),W.deleteBuffer(yt),W.deleteSync(le),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,H=null,z=0){E.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-z),N=Math.floor(E.image.width*X),st=Math.floor(E.image.height*X),pt=H!==null?H.x:0,bt=H!==null?H.y:0;I.setTexture2D(E,0),W.copyTexSubImage2D(W.TEXTURE_2D,z,0,0,pt,bt,N,st),Lt.unbindTexture()};const ve=W.createFramebuffer(),qt=W.createFramebuffer();this.copyTextureToTexture=function(E,H,z=null,X=null,N=0,st=null){E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],H=arguments[2],st=arguments[3]||0,z=null),st===null&&(N!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=N,N=0):st=0);let pt,bt,$,Et,Rt,yt,Qt,le,ue;const kt=E.isCompressedTexture?E.mipmaps[st]:E.image;if(z!==null)pt=z.max.x-z.min.x,bt=z.max.y-z.min.y,$=z.isBox3?z.max.z-z.min.z:1,Et=z.min.x,Rt=z.min.y,yt=z.isBox3?z.min.z:0;else{const qe=Math.pow(2,-N);pt=Math.floor(kt.width*qe),bt=Math.floor(kt.height*qe),E.isDataArrayTexture?$=kt.depth:E.isData3DTexture?$=Math.floor(kt.depth*qe):$=1,Et=0,Rt=0,yt=0}X!==null?(Qt=X.x,le=X.y,ue=X.z):(Qt=0,le=0,ue=0);const Zt=Tt.convert(H.format),Dt=Tt.convert(H.type);let Ee;H.isData3DTexture?(I.setTexture3D(H,0),Ee=W.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(I.setTexture2DArray(H,0),Ee=W.TEXTURE_2D_ARRAY):(I.setTexture2D(H,0),Ee=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const ee=W.getParameter(W.UNPACK_ROW_LENGTH),ne=W.getParameter(W.UNPACK_IMAGE_HEIGHT),xe=W.getParameter(W.UNPACK_SKIP_PIXELS),Ge=W.getParameter(W.UNPACK_SKIP_ROWS),vn=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,kt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,kt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Et),W.pixelStorei(W.UNPACK_SKIP_ROWS,Rt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,yt);const me=E.isDataArrayTexture||E.isData3DTexture,ke=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const qe=te.get(E),Oe=te.get(H),Ke=te.get(qe.__renderTarget),yn=te.get(Oe.__renderTarget);Lt.bindFramebuffer(W.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Lt.bindFramebuffer(W.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let ln=0;ln<$;ln++)me&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,te.get(E).__webglTexture,N,yt+ln),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,te.get(H).__webglTexture,st,ue+ln)),W.blitFramebuffer(Et,Rt,pt,bt,Qt,le,pt,bt,W.DEPTH_BUFFER_BIT,W.NEAREST);Lt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||te.has(E)){const qe=te.get(E),Oe=te.get(H);Lt.bindFramebuffer(W.READ_FRAMEBUFFER,ve),Lt.bindFramebuffer(W.DRAW_FRAMEBUFFER,qt);for(let Ke=0;Ke<$;Ke++)me?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,qe.__webglTexture,N,yt+Ke):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,qe.__webglTexture,N),ke?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Oe.__webglTexture,st,ue+Ke):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Oe.__webglTexture,st),N!==0?W.blitFramebuffer(Et,Rt,pt,bt,Qt,le,pt,bt,W.COLOR_BUFFER_BIT,W.NEAREST):ke?W.copyTexSubImage3D(Ee,st,Qt,le,ue+Ke,Et,Rt,pt,bt):W.copyTexSubImage2D(Ee,st,Qt,le,Et,Rt,pt,bt);Lt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ke?E.isDataTexture||E.isData3DTexture?W.texSubImage3D(Ee,st,Qt,le,ue,pt,bt,$,Zt,Dt,kt.data):H.isCompressedArrayTexture?W.compressedTexSubImage3D(Ee,st,Qt,le,ue,pt,bt,$,Zt,kt.data):W.texSubImage3D(Ee,st,Qt,le,ue,pt,bt,$,Zt,Dt,kt):E.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,st,Qt,le,pt,bt,Zt,Dt,kt.data):E.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,st,Qt,le,kt.width,kt.height,Zt,kt.data):W.texSubImage2D(W.TEXTURE_2D,st,Qt,le,pt,bt,Zt,Dt,kt);W.pixelStorei(W.UNPACK_ROW_LENGTH,ee),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ne),W.pixelStorei(W.UNPACK_SKIP_PIXELS,xe),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ge),W.pixelStorei(W.UNPACK_SKIP_IMAGES,vn),st===0&&H.generateMipmaps&&W.generateMipmap(Ee),Lt.unbindTexture()},this.copyTextureToTexture3D=function(E,H,z=null,X=null,N=0){return E.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,X=arguments[1]||null,E=arguments[2],H=arguments[3],N=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,H,z,X,N)},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),Lt.unbindTexture()},this.resetState=function(){M=0,T=0,P=null,Lt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}}function Zu(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class dy extends Ws{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _y(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new wy(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new vy(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new My(e)}),this.register(function(e){return new Sy(e)}),this.register(function(e){return new gy(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new xy(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new py(e)}),this.register(function(e){return new Iy(e)}),this.register(function(e){return new Py(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=vr.extractUrlBase(t);o=vr.resolveURL(u,this.path)}else o=vr.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new rp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===dp){try{o[Re.KHR_BINARY_GLTF]=new Ly(t)}catch(l){s&&s(l);return}r=JSON.parse(o[Re.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new jy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case Re.KHR_MATERIALS_UNLIT:o[l]=new my;break;case Re.KHR_DRACO_MESH_COMPRESSION:o[l]=new Dy(r,this.dracoLoader);break;case Re.KHR_TEXTURE_TRANSFORM:o[l]=new Fy;break;case Re.KHR_MESH_QUANTIZATION:o[l]=new Ny;break;default:d.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function fy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const Re={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class py{constructor(t){this.parser=t,this.name=Re.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new he(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],xn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new dl(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new u0(h),u.distance=l;break;case"spot":u=new c0(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,fi(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class my{constructor(){this.name=Re.KHR_MATERIALS_UNLIT}getMaterialType(){return en}extendParams(t,e,n){const s=[];t.color=new he(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],xn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,He))}return Promise.all(s)}}class gy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class _y{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}}class by{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class xy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class vy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new he(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],xn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,He)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class yy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class My{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new he().setRGB(a[0],a[1],a[2],xn),Promise.all(r)}}class Sy{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ay{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new he().setRGB(a[0],a[1],a[2],xn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,He)),Promise.all(r)}}class Ey{constructor(t){this.parser=t,this.name=Re.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ty{constructor(t){this.parser=t,this.name=Re.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class wy{constructor(t){this.parser=t,this.name=Re.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Ry{constructor(t){this.parser=t,this.name=Re.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Cy{constructor(t){this.parser=t,this.name=Re.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Iy{constructor(t){this.name=Re.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(f),h,l,d,s.mode,s.filter),f})})}else return null}}class Py{constructor(t){this.name=Re.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Fn.TRIANGLES&&u.mode!==Fn.TRIANGLE_STRIP&&u.mode!==Fn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,f=[];for(const m of l){const _=new ge,g=new U,p=new an,v=new U(1,1,1),y=new Gg(m.geometry,m.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,v));for(const x in c)if(x==="_COLOR_0"){const R=c[x];y.instanceColor=new Cc(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);Ve.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const dp="glTF",ar=12,Ju={JSON:1313821514,BIN:5130562};class Ly{constructor(t){this.name=Re.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,ar),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==dp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ar,r=new DataView(t,ar);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Ju.JSON){const u=new Uint8Array(t,ar+o,a);this.content=n.decode(u)}else if(c===Ju.BIN){const u=ar+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Re.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=Nc[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=Nc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Fs[d.componentType];u[l]=f.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const _=f.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}l(f)},a,u,xn,d)})})}}class Fy{constructor(){this.name=Re.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Ny{constructor(){this.name=Re.KHR_MESH_QUANTIZATION}}class fp extends Ir{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,d=l*l,f=d*l,m=t*u,_=m-u,g=-2*f+3*d,p=f-d,v=1-g,y=p-d+l;for(let x=0;x!==a;x++){const R=o[_+x+a],M=o[_+x+c]*h,T=o[m+x+a],P=o[m+x]*h;r[x]=v*R+y*M+g*T+p*P}return r}}const Uy=new an;class ky extends fp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Uy.fromArray(r).normalize().toArray(r),r}}const Fn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qu={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},th={33071:1001,33648:1002,10497:1e3},Ka={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Oy={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},$a={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function By(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new vi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function Hi(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function fi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Gy(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function zy(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hy(i){let t;const e=i.extensions&&i.extensions[Re.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Ya(e.attributes):t=i.indices+":"+Ya(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Ya(i.targets[n]);return t}function Ya(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Uc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wy=new ge;class jy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ll(this.options.manager):this.textureLoader=new p0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Hi(r,a,s),fi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Re.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(vr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ka[s.type],a=Fs[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new De(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ka[s.type],u=Fs[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(f&&f!==l){const p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=e.cache.get(v);y||(_=new u(a,p*f,s.count*f/h),y=new nl(_,f/h),e.cache.add(v,y)),g=new Xn(y,c,d%f/h,m)}else a===null?_=new u(s.count*c):_=new u(a,d,s.count*c),g=new De(_,c,m);if(s.sparse!==void 0){const p=Ka.SCALAR,v=Fs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,R=new v(o[1],y,s.sparse.count*p),M=new u(o[2],x,s.sparse.count*c);a!==null&&(g=new De(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,P=R.length;T<P;T++){const A=R[T];if(g.setX(A,M[T*c]),c>=2&&g.setY(A,M[T*c+1]),c>=3&&g.setZ(A,M[T*c+2]),c>=4&&g.setW(A,M[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Qu[d.magFilter]||1006,h.minFilter=Qu[d.minFilter]||1008,h.wrapS=th[d.wrapS]||1e3,h.wrapT=th[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Ze(_);g.needsUpdate=!0,d(g)}),e.load(vr.resolveURL(l,r.path),m,void 0,f)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),fi(l,o),l.userData.mimeType=o.mimeType||Vy(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Re.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Re.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Re.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ol,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Jf,Un.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return vi}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[Re.KHR_MATERIALS_UNLIT]){const l=s[Re.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new he(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],xn),a.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,He)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||$a.OPAQUE;if(h===$a.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===$a.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==en&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==en&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==en){const l=r.emissiveFactor;a.emissive=new he().setRGB(l[0],l[1],l[2],xn)}return r.emissiveTexture!==void 0&&o!==en&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,He)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),fi(l,r),e.associations.set(l,{materials:t}),r.extensions&&Hi(s,l,r),l})}createUniqueName(t){const e=Fe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Re.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return eh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=Hy(u),l=s[h];if(l)o.push(l.promise);else{let d;u.extensions&&u.extensions[Re.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=eh(new Xe,u,e),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?By(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=o[f];let p;const v=u[f];if(g.mode===Fn.TRIANGLES||g.mode===Fn.TRIANGLE_STRIP||g.mode===Fn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new kg(_,v):new we(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Fn.TRIANGLE_STRIP?p.geometry=Zu(p.geometry,1):g.mode===Fn.TRIANGLE_FAN&&(p.geometry=Zu(p.geometry,2));else if(g.mode===Fn.LINES)p=new Vg(_,v);else if(g.mode===Fn.LINE_STRIP)p=new rl(_,v);else if(g.mode===Fn.LINE_LOOP)p=new Wg(_,v);else if(g.mode===Fn.POINTS)p=new Qf(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&zy(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),fi(p,r),g.extensions&&Hi(s,p,g),e.assignFinalMaterial(p),l.push(p)}for(let f=0,m=l.length;f<m;f++)e.associations.set(l[f],{meshes:t,primitives:f});if(l.length===1)return r.extensions&&Hi(s,l[0],r),l[0];const d=new fn;r.extensions&&Hi(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=l.length;f<m;f++)d.add(l[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new _n(kf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new hl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),fi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const d=new ge;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new il(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const f=s.channels[l],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,v=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),u.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],f=l[1],m=l[2],_=l[3],g=l[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],R=f[v],M=m[v],T=_[v],P=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const A=n._createAnimationTracks(x,R,M,T,P);if(A)for(let S=0;S<A.length;S++)p.push(A[S])}return new Lc(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Wy)});for(let f=0,m=l.length;f<m;f++)h.add(l[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Yf:u.length>1?h=new fn:u.length===1?h=u[0]:h=new Ve,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),fi(h,r),r.extensions&&Hi(n,h,r),r.matrix!==void 0){const l=new ge;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new fn;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Hi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,f]of s.associations)(d instanceof Un||d instanceof Ze)&&l.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&l.set(d,f)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];Ri[r.path]===Ri.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(Ri[r.path]){case Ri.weights:u=Bs;break;case Ri.rotation:u=Gs;break;case Ri.position:case Ri.scale:u=zs;break;default:switch(n.itemSize){case 1:u=Bs;break;case 2:case 3:default:u=zs;break}break}const h=s.interpolation!==void 0?Oy[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new u(c[d]+"."+Ri[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Uc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Gs?ky:fp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Xy(i,t,e){const n=t.attributes,s=new cn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(u[0],u[1],u[2])),a.normalized){const h=Uc(Fs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new U,c=new U;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=Uc(Fs[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function eh(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Nc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Le.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Le.workingColorSpace}" not supported.`),fi(i,t),Xy(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Gy(i,t.targets,e):i})}var qy=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function a(p){for(var v=new Uint8Array(p.length),y=0;y<p.length;++y){var x=p.charCodeAt(y);v[y]=x>96?x-97:x>64?x-39:x+4}for(var R=0,y=0;y<p.length;++y)v[R++]=v[y]<60?n[v[y]]:(v[y]-60)*64+v[++y];return v.buffer.slice(0,R)}function c(p,v,y,x,R,M){var T=r.exports.sbrk,P=y+3&-4,A=T(P*x),S=T(R.length),C=new Uint8Array(r.exports.memory.buffer);C.set(R,S);var k=p(A,y,x,S,R.length);if(k==0&&M&&M(A,P,x),v.set(C.subarray(A,A+y*x)),T(A-T(0)),k!=0)throw new Error("Malformed buffer data: "+k)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(y){var x=y.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function m(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),y=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(y),R=0;R<p;++R)l[R]=f(x);URL.revokeObjectURL(x)}function _(p,v,y,x,R){for(var M=l[0],T=1;T<l.length;++T)l[T].pending<M.pending&&(M=l[T]);return new Promise(function(P,A){var S=new Uint8Array(y),C=d++;M.pending+=p,M.requests[C]={resolve:P,reject:A},M.object.postMessage({id:C,count:p,size:v,source:S,mode:x,filter:R},[S.buffer])})}function g(p){o.then(function(){var v=p.data;try{var y=new Uint8Array(v.count*v.size);c(r.exports[v.mode],y,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(x){self.postMessage({id:v.id,count:v.count,action:"reject",value:x})}})}return{ready:o,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,y,x,R){c(r.exports.meshopt_decodeVertexBuffer,p,v,y,x,r.exports[u[R]])},decodeIndexBuffer:function(p,v,y,x){c(r.exports.meshopt_decodeIndexBuffer,p,v,y,x)},decodeIndexSequence:function(p,v,y,x){c(r.exports.meshopt_decodeIndexSequence,p,v,y,x)},decodeGltfBuffer:function(p,v,y,x,R,M){c(r.exports[h[R]],p,v,y,x,r.exports[u[M]])},decodeGltfBufferAsync:function(p,v,y,x,R){return l.length>0?_(p,v,y,h[x],u[R]):o.then(function(){var M=new Uint8Array(p*v);return c(r.exports[h[x]],M,p,v,y,r.exports[u[R]]),M})}}})();function gl(){return new dy().setMeshoptDecoder(qy)}let pp="";function Ky(i){pp=i===""||i.endsWith("/")?i:`${i}/`}const bn=i=>`${pp}${i}`,$y=.001,Yy=.5,nh={playing:!1,settling:!1,stillFor:0,pending:1},mp=i=>i.playing||i.settling||i.pending>0,Zy=i=>!i.playing&&!i.settling,Jy=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),Qy=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,tM=i=>mp(i)?i:{...i,pending:1};function eM(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<$y?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<Yy}}function ih(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const Ni="#c8f323",nM="#0b0f10";function iM(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const sM=iM(Ni),rM=Ni,oM="#7aa2ff",aM="#ffb340",cM="#b18cff",lM=Ni,uM=Ni,cr=new U;function Ln(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;cr.copy(t),cr[n]=0,cr.normalize();const u=.5*o/(o+a),h=1-cr.angleTo(i)/c;return Math.sign(cr[e])===1?h*u:a/(o+a)+u+u*(1-h)}class hM extends bi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new U,c=new U,u=new U(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,m=new U,_=.5/s;for(let g=0,p=0;g<h.length;g+=3,p+=2)switch(a.fromArray(h,g),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[g+0]=u.x*Math.sign(a.x)+c.x*r,h[g+1]=u.y*Math.sign(a.y)+c.y*r,h[g+2]=u.z*Math.sign(a.z)+c.z*r,l[g+0]=c.x,l[g+1]=c.y,l[g+2]=c.z,Math.floor(g/f)){case 0:m.set(1,0,0),d[p+0]=Ln(m,c,"z","y",r,n),d[p+1]=1-Ln(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[p+0]=1-Ln(m,c,"z","y",r,n),d[p+1]=1-Ln(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[p+0]=1-Ln(m,c,"x","z",r,t),d[p+1]=Ln(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[p+0]=1-Ln(m,c,"x","z",r,t),d[p+1]=1-Ln(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[p+0]=1-Ln(m,c,"x","y",r,t),d[p+1]=1-Ln(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[p+0]=Ln(m,c,"x","y",r,t),d[p+1]=1-Ln(m,c,"y","x",r,e);break}}}const sh=["technical","tactical","physical","social"],rh=["auto","authored","off"],gp=/\bwall\b/i,oh=["n","e","s","w"],dM={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},ah=1.8,ch=7.32,fM=6;function os(i,t){return i.width!==void 0&&i.width<fM?i.width/2:t}function _p(i){return Math.min(Math.max(i*.5,1),2.44)}const lh=["save","beaten"],uo=["throw","roll","kick"],ho=["throw","roll"],uh=["lofted","ground"],pM=3.35,mM=1,hh=12,kc=["walk","jog","run","sprint"],dh=["walk","jog","run"];function Vo(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const gM=new Set(["move","dribble","pass","shoot","tackle","collect"]),fh=/^#[0-9a-fA-F]{6}$/;function Jt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function di(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&Jt(t,"expected [x, y] numbers"),i}function _M(i){var o,a,c,u,h;const t=i;t.version!==1&&Jt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||Jt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&Jt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&Jt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||Jt("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!fh.test(d))&&Jt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||Jt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&Jt(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||Jt(`players[${d}].team`,`unknown team ${l.team}`),di(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&Jt(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(di((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&Jt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||Jt("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&Jt(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&Jt(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&Jt(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((f,m)=>{(typeof(f==null?void 0:f.t)!="number"||f.t<0)&&Jt(`balls[${d}].path[${m}].t`,"seconds >= 0 required"),m>0&&f.t<=l.path[m-1].t&&Jt(`balls[${d}].path[${m}].t`,"times must ascend"),di(f.at,`balls[${d}].path[${m}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&Jt(`equipment[${d}].type`,String(l.type)),di(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&Jt(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=ah-1e-9&&l.width<=ch+1e-9||Jt(`equipment[${d}].width`,`expected ${ah}..${ch} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&Jt(`equipment[${d}].facing`,"only a goal has a facing"),oh.includes(l.facing)||Jt(`equipment[${d}].facing`,`expected one of ${oh.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||Jt(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||Jt("events","expected an array"),t.events.forEach((l,d)=>{var f;if((typeof l.t!="number"||l.t<0)&&Jt(`events[${d}].t`,"seconds >= 0 required"),gM.has(l.type)||Jt(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),di(l.to,`events[${d}].to`),l.gait!==void 0&&!kc.includes(l.gait)&&Jt(`events[${d}].gait`,`expected one of ${kc.join("|")}, got ${String(l.gait)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),di(l.to,`events[${d}].to`),l.gait!==void 0&&!dh.includes(l.gait)&&Jt(`events[${d}].gait`,`expected one of ${dh.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&Jt(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&Jt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&Jt(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(uo.includes(l.style)||Jt(`events[${d}].style`,`expected one of ${uo.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!ho.includes(l.style)&&Jt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${ho.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&Jt(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||Jt(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let m=[...((f=t.players.find(_=>_.id===l.to))==null?void 0:f.start)??[0,0]];for(let _=0;_<d;_++){const g=t.events[_];(g.type==="move"||g.type==="dribble")&&g.player===l.to&&(m=[...g.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const g=Math.hypot(m[0]-_.at[0],m[1]-_.at[1]);g<hh&&Jt(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${g.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${hh} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&Jt(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||Jt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((m,_)=>_<d&&m.type!=="move")&&Jt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const m=l.deflect;(typeof m!="object"||m===null||Array.isArray(m))&&Jt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),di(m.to,`events[${d}].deflect.to`),uh.includes(m.style)||Jt(`events[${d}].deflect.style`,`expected one of ${uh.join("|")}, got ${String(m.style)}`),l.type==="pass"&&!s.has(l.to)&&Jt(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&m.style==="ground")&&!s.size&&Jt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const p=_.facing==="e"||_.facing==="w"?m.to[1]-_.at[1]:m.to[0]-_.at[0];if(Math.abs(p)>os(_,pM))continue;(_.facing!==void 0?{n:m.to[1]-_.at[1],s:_.at[1]-m.to[1],e:m.to[0]-_.at[0],w:_.at[0]-m.to[0]}[_.facing]:_.at[1]<=t.pitch.length/2?m.to[1]-_.at[1]:_.at[1]-m.to[1])<=mM&&Jt(`events[${d}].deflect.to`,`[${m.to[0]}, ${m.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&Jt(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&Jt(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),di(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&Jt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&Jt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&Jt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&Jt(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&Jt(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(uo.includes(l.style)||Jt(`events[${d}].style`,`expected one of ${uo.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!ho.includes(l.style)&&Jt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${ho.join(" or ")})`),l.flightStyle!=="ground"&&Jt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&Jt(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&Jt(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&Jt(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const m=l.newBall;m!==void 0&&(typeof m!="boolean"&&Jt(`events[${d}].newBall`,`expected a boolean, got ${String(m)}`),m&&!t.events.some((_,g)=>g<d&&_.type!=="move")&&Jt(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&Jt("overlays","expected an object"),l.runPaths!==void 0&&!rh.includes(l.runPaths)&&Jt("overlays.runPaths",`expected one of ${rh.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||Jt("overlays.zones","expected an array"),l.zones.forEach((d,f)=>{di(d.at,`overlays.zones[${f}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||Jt(`overlays.zones[${f}]`,"w/h metres > 0 required"),d.color!==void 0&&!sh.includes(d.color)&&!fh.test(d.color)&&Jt(`overlays.zones[${f}].color`,`expected ${sh.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&Jt(`overlays.zones[${f}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&Jt("keeper","expected { outcome: save | beaten }"),lh.includes(t.keeper.outcome)||Jt("keeper.outcome",`expected one of ${lh.join("|")}, got ${String(t.keeper.outcome)}`)),t}function bM(i){const t=new vi({color:lM,roughness:.6,toneMapped:!1}),e=new fn,n=new we(new hM(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new ce(.17,.06),new ce(.15,.1)];for(let o=0;o<=8;o++)s.push(new ce(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new ce(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new we(new al(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function bp(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),d=(Math.floor(h/5)+.15+a()*.7)*(e/4),f=(40+a()*120)*(t/1024),m=a()>.5,_=i.createRadialGradient(l,d,0,l,d,f);_.addColorStop(0,m?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(l-f,d-f,2*f,2*f)}xp(i,t,e,a,1)}function xp(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function xM(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");bp(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),vp(n);const s=new wn(e);return s.colorSpace=He,s.flipY=!1,s}function vp(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const vM=2.5;function yp(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const on=6;function yM(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");bp(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),vp(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,d,f]of a){const m=s.createLinearGradient(h,l,d,f);m.addColorStop(0,"rgba(0,0,0,0.55)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(0,0,1024,1024)}const c=vM*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",yp(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new wn(n);return u.colorSpace=He,u.flipY=!1,u}function MM(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",yp(t,40,40,176,176,34),t.fill();const e=new wn(i);return e.flipY=!1,e}let lr=null;function SM(){if(lr)return lr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),lr=new wn(i),lr.userData.shared=!0,lr}function AM(i){const t=new we(new na(i/2,24).rotateX(-Math.PI/2),new en({map:SM(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const qn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},EM=.5;function Tr(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*os(s,qn.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*EM*(o/r.length)))}return n}function TM(i){const t=os(i,qn.halfW);return t===qn.halfW?qn:{halfW:t,top:_p(i.width),zMin:-Ii,zMax:Ii}}function Mp(i,t){return i.facing!==void 0?dM[i.facing]:i.at[1]>t/2?Math.PI:0}const Ii=.08;function wM(i){const t=_p(i),e=new vi({color:"#FFFFFF",roughness:.5}),n=new fn,s=i/2-Ii;for(const o of[-1,1]){const a=new we(new Ar(Ii,Ii,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new we(new Ar(Ii,Ii,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Ii,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const Sp=.8;function RM(i,t,e){const n=new we(new bi(e?i:t,Sp,e?t:i),new vi({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function Ap(i,t){i.scale.set(1,t,1),i.position.y=Sp*t/2}let ph=null;function CM(i){return ph??(ph=i.loadAsync(bn("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw ph=null,t}))}let mh=!1;function IM(i,t){if(mh||!t)return;mh=!0;const e=new cn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-qn.halfW)>.05||Math.abs(s-qn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${qn.halfW}, top ${s.toFixed(3)} vs ${qn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function PM(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new U(n*(t/2+on),0,s*(e/2+on)))}function Oc(i,t){const{width:e,length:n}=i.pitch,s=Tr(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=TM(o),h=Mp(o,n),l=Math.cos(h),d=Math.sin(h);for(const f of[-u.halfW*s,u.halfW*s])for(const m of[0,u.top*s])for(const _ of[u.zMin*s,u.zMax*s])r.push(new U(a+f*l+_*d,m,c-f*d+_*l))}return r}const LM=600,Ep=LM/2*Math.SQRT2,gh=30,DM=-.06,FM=-.04,NM=660496,UM="#04170c",_h=.7,Tp=1.2;function kM(i,t,e){const n=Math.max(t,e),s=n/2+on,r=Tp*n;return r>s?1-(1-_h)*_l((i-s)/(r-s)):i>=s?_h:1}function _l(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const OM=1.6,BM=2.6;function GM(i,t){const e=Math.max(i,t);return{near:OM*e+on,far:BM*e+on}}const bh="#0b1f22",Za="#010203",zM=1.02;function HM(i,t){return Math.hypot(i/2+on,t/2+on)*zM}const VM=.12,WM=1.15,bl=(i,t)=>Math.hypot(i/2,t/2),wp=(i,t)=>bl(i,t)*WM,fo=12,Ja=18,xh=.3,jM=2.4,vh=1.2,XM=.4,qM=6;function KM(i,t,e=1/0){const n=i/2+on,s=t/2+on,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=$M(o,a,e*YM),u=[-(a+c),a+c],h=-(o+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function $M(i,t,e){if(!(e<Math.hypot(i+fo,t+fo)))return fo;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(fo,(-n+Math.sqrt(r))/2)):0}const YM=.97;function xl(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=UM,t.fillRect(0,0,512,512);let e=7;xp(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new wn(i);return n.colorSpace=He,n.wrapS=n.wrapT=1e3,n}function ZM(){const i=new fn,t=new Er({color:1251867}),e=new we(new bi(xh,Ja,xh),t);e.position.y=Ja/2;const n=new we(new bi(jM,vh,XM),t);n.position.y=Ja+vh/2;const s=new Ng(new Kf({map:JM(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(qM),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let ur=null;function JM(){if(ur)return ur;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),ur=new wn(i),ur.userData.shared=!0,ur}function QM(){return[[0,Za],[Gc,bh],[nS,bh],[vl,Za],[1,Za]]}function tS(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of QM())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new wn(i);return n.colorSpace=He,n.wrapS=n.wrapT=1001,n}const Bc=.03,yh=.06,eS=.28,vl=1,Gc=vl*yh/(yh+eS-Bc),nS=.85;function iS(i,t={repeat:0,offset:0}){const e=Math.max(i,Bc+.03);return t.repeat=(vl-Gc)/(e-Bc),t.offset=Gc-t.repeat*(1-e),t}const sS=60,rS=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<sS,oS=-1e3;function Rp(i,t,e,n,s,r){const o=new Er({map:e,vertexColors:!0}),a=new Er({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=Tp*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,f]of u){const m=l===n,_=new ia(l,d,128,f).rotateX(-Math.PI/2),g=_.getAttribute("position"),p=_.getAttribute("uv"),v=m?4:3,y=new Float32Array(g.count*v);for(let R=0;R<g.count;R++){const M=g.getX(R),T=g.getZ(R);p.setXY(R,M/gh,T/gh);const P=Math.hypot(M,T),A=kM(P,i,t);y[v*R]=y[v*R+1]=y[v*R+2]=A,m&&(y[v*R+3]=d>l?1-_l((P-l)/(d-l)):1)}p.needsUpdate=!0,_.setAttribute("color",new De(y,v));const x=new we(_,m?a:o);x.userData[r]=m,x.position.y=DM,h.push(x)}return h}function aS(i,t,e=1,n=xl()){const s=new fn;n.anisotropy=e;for(const r of Rp(i,t,n,bl(i,t),wp(i,t),"floatRim"))s.add(r);return s}const Qa=16;function cS(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=bl(i,t),c=wp(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=Qa;l++){const d=Math.round(255*(1-_l(l/Qa)));u.addColorStop(l/Qa,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new wn(n);return h.flipY=!1,h}function lS(i,t,e=1,n=Ep,s=xl()){const r=new fn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+on+1),a=o*(1-VM),c=Math.max(a,Math.max(i,t)/2+on);for(const h of Rp(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=KM(i,t,o);for(const[h,l]of u){const d=ZM();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function uS(i,t,e=1,n=1,s=Ep){var S;const r=Tr(t,n),{width:o,length:a}=t.pitch,c=(C,k=0)=>new U(C[0]-o/2,k,C[1]-a/2),u=C=>(C.anisotropy=e,C),h=u(yM(o,a,on)),l=()=>new $n(o+2*on,a+2*on).rotateX(-Math.PI/2),d=new we(l(),new Er({map:h,transparent:!0})),f=new we(l(),new Er({map:h,alphaMap:cS(o,a,on),transparent:!0}));for(const C of[d,f])C.position.y=-.02,C.renderOrder=-1,C.receiveShadow=!0;const m=new we(new $n((o+2*on)*1.5,(a+2*on)*1.5).rotateX(-Math.PI/2),new en({map:MM(),transparent:!0,depthWrite:!1}));m.position.y=FM,m.renderOrder=-2,i.add(m);const _=new we(new $n(o,a).rotateX(-Math.PI/2),new vi({map:u(xM(o,a)),roughness:.9}));_.receiveShadow=!0;const g=xl(),p=lS(o,a,e,s,g),v=aS(o,a,e,g);i.add(d,f,_,p,v);const y=C=>{p.visible=C,m.visible=C,d.visible=C,v.visible=!C,f.visible=!C};y(!0);const x=p.children.filter(C=>C.name==="mast"),R=C=>{for(const k of x)k.visible=C};R(!1);const M=gl(),T=[],P=[];for(const C of t.equipment??[])if(C.type==="cone"){const k=bM(n);k.position.copy(c(C.at,0)),i.add(k),P.push(k)}else{const k=os(C,qn.halfW)!==qn.halfW,L=k?wM(C.width):(await CM(M)).clone();L.position.copy(c(C.at)),L.rotation.y=Mp(C,a),L.scale.setScalar(r),i.add(L),T.push(L),k||IM(L,r)}const A=[];for(const C of((S=t.overlays)==null?void 0:S.zones)??[]){if(!gp.test(C.label??""))continue;const k=RM(Math.max(C.w,C.h),Math.min(C.w,C.h),C.w>=C.h),L=c(C.at);k.position.set(L.x,0,L.z),Ap(k,n),i.add(k),A.push(k)}return{toWorld:c,goals:T,cones:P,boards:A,setWorld:y,setMasts:R}}const Mh=new U(10,20,8).normalize(),hS=1.05,zc=2048,dS=1024,fS=1600,pS=(i,t)=>Math.max(i,t)>=fS?zc:dS,mS=5;function gS(i){const t=new cn().setFromPoints(i).getCenter(new U);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function ra(i,t=()=>new hy({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=ih(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=hS,e.outputColorSpace=He,i.appendChild(o);const a=new Fg;a.background=new he(nM);const c=new _n(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new dl(16772564,mS);u.position.copy(Mh).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(zc,zc),u.shadow.radius=4,a.add(u,u.target,new o0(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var xt;const V=pS(s.width*h,s.height*h);u.shadow.mapSize.width!==V&&(u.shadow.mapSize.set(V,V),(xt=u.shadow.map)==null||xt.dispose(),u.shadow.map=null)}l();function d(){const V=ih(i,window,s),xt=Math.min(devicePixelRatio,2),Vt=xt!==h;if(Vt&&(h=xt,e.setPixelRatio(h)),V.width!==s.width||V.height!==s.height){s=V,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),S();for(const $t of[...r])$t()}else Vt&&(e.setSize(s.width,s.height,!1),l(),S())}const f=typeof ResizeObserver=="function"?new ResizeObserver(d):null;f?f.observe(i):addEventListener("resize",d);let m=null;const _=()=>{g(),d()};function g(){m==null||m.removeEventListener("change",_),m=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,m==null||m.addEventListener("change",_)}g();let p=!0,v=!1,y=0;function x(){v||(v=!0,y=requestAnimationFrame(O))}function R(){p=!document.hidden,p&&(k=-1,x())}document.addEventListener("visibilitychange",R);let M=!0,T=nh,P=0;const A=new U;function S(){T=tM(T),p&&(v||(k=-1),x())}let C=()=>{},k=-1,L=null,F=null,Z=null,B=!0;function j(V,xt){if(C(V,xt),dt(),L&&a.fog){const Vt=c.position.length();a.fog.near=Vt+L.near,a.fog.far=Vt+L.far}e.render(a,c),P++}function O(V){if(v=!1,!p)return;const xt=k<0?0:(V-k)/1e3;k=V,A.copy(c.position),j(xt,V),T=eM(T,A.distanceTo(c.position),xt),M||mp(T)?x():k=-1}function et(V){if(!V.length)return;const{centre:xt,radius:Vt,distance:$t,far:re}=gS(V);u.target.position.copy(xt),u.target.updateMatrixWorld(),u.position.copy(Mh).multiplyScalar($t).add(xt);const ie=u.shadow.camera;ie.left=-Vt,ie.right=Vt,ie.top=Vt,ie.bottom=-Vt,ie.near=.5,ie.far=re,ie.updateProjectionMatrix()}function Q(V){if(L=V,!V){a.fog=null;return}a.fog??(a.fog=new el(NM,V.near,V.far))}function nt(V){if(Z=V,!V){F&&(F.visible=!1);return}F||(F=new we(new $n(1,1),new en({map:tS(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),F.renderOrder=oS,F.frustumCulled=!1,a.add(F)),F.visible=B}function ft(V){B=V,F&&(F.visible=V&&!!Z)}const jt=new U,it=new U,ht={repeat:0,offset:0};function dt(){if(!F||!Z)return;if(!B){F.visible=!1;return}if(c.getWorldDirection(jt),F.visible=rS(jt.y),!F.visible)return;const V=Math.hypot(c.position.x,c.position.z)||1;it.set(-c.position.x/V*Z,0,-c.position.z/V*Z),it.project(c);const xt=(1-it.y)/2,Vt=c.near*1.5,$t=2*Vt*Math.tan(c.fov*Math.PI/360);F.scale.set($t*c.aspect,$t,1),F.quaternion.copy(c.quaternion),F.position.copy(c.position).addScaledVector(jt,Vt),iS(xt,ht);const re=F.material.map;re.repeat.set(1,ht.repeat),re.offset.set(0,ht.offset)}return{scene:a,camera:c,renderer:e,fitShadow:et,setFog:Q,setHorizon:nt,setSky:ft,size:()=>({...s}),remeasure:d,onBox(V){return r.add(V),()=>{r.delete(V)}},start(V){C=V,x()},park(V){C===V&&(cancelAnimationFrame(y),v=!1,C=()=>{},T=nh,P=0,k=-1)},step(V,xt=performance.now()){j(V,xt)},frames:()=>P,rule:{enable(){M=!1},play(){T=Jy(T),S()},pause(){T=Qy(T),S()},wake:S,snap:()=>Zy(T)},dispose(){p=!1,r.clear(),m==null||m.removeEventListener("change",_),f?f.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",R),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function Cp(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of Ip(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);yl(i)}function yl(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of Ip(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const Ip=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function _S(i){const t=new Map,e=new Map,n=i.clone();return Pp(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Pp(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Pp(i.children[n],t.children[n],e)}const Sh="61f2b76e",Lp=24,bS=/^[\w-]+$/,xS=async i=>await(await fetch(bn(`drills/${i}.json`))).json();class vS{constructor(t=xS,e=null,n=Lp){Pe(this,"mem",new Map);Pe(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===Sh)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:Sh,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&bS.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const yS="tactivo-engine",Vi="drills",Ah=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function MS(){try{return globalThis.indexedDB}catch{return}}function SS(i=MS()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(yS,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(Vi)&&r.result.deleteObjectStore(Vi),r.result.createObjectStore(Vi)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(Vi,"readonly").objectStore(Vi);return await Ah(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await Ah(r.transaction(Vi,"readwrite").objectStore(Vi).put(s,n))}catch{}}}}const Hc=["plain","stripes","hoops","halves","sash","sleeves"],Eh=["mixed","light","mediumLight","medium","mediumDark","dark"],AS="mixed",Dp="#FFFFFF",tc=/^#[0-9a-fA-F]{6}$/;function Th(i){if(typeof i!="object"||i===null)return We("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!tc.test(t.a)))return We("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!tc.test(t.b)))return We("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!Hc.includes(t.pattern)))return We(`kit: pattern must be one of ${Hc.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!tc.test(t[e])))return We(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!Eh.includes(t.skin))?We(`kit: skin must be one of ${Eh.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??Dp,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const wh=["boys","girls","mixed"],Ml="mixed";function Rh(i){return i==null?Ml:typeof i!="string"||!wh.includes(i)?We(`squad: must be one of ${wh.join(", ")}`):i}const Ch=["shirt","full"],oa="shirt";function Ih(i){return i==null?oa:typeof i!="string"||!Ch.includes(i)?We(`framing: must be one of ${Ch.join(", ")}`):i}const Ph=new Set(["fit","broadcast"]),Sl=.5,ES=5,TS={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},wS=100,Wo=1/0,RS=2e3,ec=/^[\w-]+$/,CS=/^[A-Za-z0-9_./-]{1,80}$/,IS=i=>CS.test(i)&&!i.includes(".."),PS=30,LS=85,DS=i=>Math.min(Math.max(i,PS),LS),Ns=i=>({state:i,effects:[],out:[]}),Fo=(i,t,e,n)=>({state:i,effects:[],out:[{type:"error",code:t,message:e,...n!==void 0?{key:n}:{}}]}),FS=new Set(["auto","authored","off"]),NS=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function US(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?Fp(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const Fp=i=>Math.min(Math.max(i,Sl),ES);function Np(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const Al=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},El=(i,t)=>{var n;const e=Al(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},We=i=>({error:i,code:"bad_message"}),Lh=i=>{const t=i.narrationBase;return typeof t=="string"&&/^https?:\/\/[^\s]+\/$/.test(t)?{narrationBase:t}:{}};function kS(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||NS.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return We("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return We("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!ec.test(n.key)))return{error:`load: key must match ${ec.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return We("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return We("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return We("load: intro.hold must be a finite number");s={text:a.text,hold:Fp(a.hold)}}let r;if(t.kit!==void 0){const a=Th(t.kit);if("error"in a)return a;r=a}const o=Rh(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{},...Lh(t)}}case"preview":case"kit":{const e=Th(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=Ih(t.framing);if(typeof n!="string")return n;const s=Rh(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=Ih(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return We("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&IS(n)?{track:n}:{},...Lh(t)}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&ec.test(e)).slice(0,Lp)}:We("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?We("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?We("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?We("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?We("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!Ph.has(t.follow)?We(`setCamera: follow must be one of ${[...Ph].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?We("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return We(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!FS.has(t.runPaths))return We("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return We(`unknown message type: ${t.type}`)}}function OS(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{},...t.narrationBase?{narrationBase:t.narrationBase}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??oa,squad:t.squad??Ml}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return Fo(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return Fo(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:DS(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?Ns(i):Fo(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function Wi(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return Ns(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:Np(n,0),a=r?s?Math.max(t.hookHold,Sl):r.hold:0,c=r?a:Al(n,o),u=s?Wo:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+RS:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:El(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?Ns(i):Fo({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`,t.key);case"hookEnded":return i.holdUntilMs!==Wo?Ns(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function BS(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Wo?i.hookCeilingMs:i.holdUntilMs;return e<c?Ns(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=Np(i.narration,t),s=i.playing&&e-i.lastTimeMs>=wS;if(n===i.cue&&!s)return Ns(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?Al(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[El(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const Tl=["shirt","jersey","top","tshirt"];let An=null;async function aa(i,t,e=bn("assets/ochi.glb"),n,s=0,r){if(!An||An.url!==e){const a=await(n??gl()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});An={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=An.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=_S(An.variants[(h%An.variants.length+An.variants.length)%An.variants.length]);l.traverse(f=>{f.castShadow=f.type==="SkinnedMesh",c&&f.isBone&&(f.name=f.name.replace(/_\d+$/,""))}),i.add(l);const d=new R0(l);o.push({root:l,mixer:d,clips:new Map(An.clips.map(f=>[f.name,f]))})}return o}const Dh=new WeakMap;function GS(i){let t=Dh.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),Dh.set(i.root,t)),t}function wl(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const zS=wl(/^foot[LR]$/),HS=wl(/^hand[LR]$/),Fh=wl(/^spine00[12]$/),jo=.6499;function Up(i){const t=new he(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/jo,1/e)):t}let nc=null;const kp=3e3;function Op(i){return nc??(nc=(async()=>{let t;try{return await Promise.race([i(bn("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),kp)})])}finally{clearTimeout(t)}})().catch(t=>{throw nc=null,t})),nc}async function VS(i,t=bn("assets/ochi.glb"),e){await aa(new fn,0,t,e);const n=i.toLowerCase();return An?An.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function WS(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();Tl.some(o=>r.includes(o))&&t.push(r)}}),t}async function jS(i,t=bn("assets/ochi.glb"),e){await aa(new fn,0,t,e);const n=An?An.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>WS(An.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const Bp=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function Gp(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;Tl.some(o=>r.toLowerCase().includes(o))&&t.push(Bp(r))}}),t}async function zp(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>bn(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await Op(r),c=[...new Set(n.map(d=>{var f;return(f=a.channels[d])==null?void 0:f.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new ll,h=new Map,l=new Map;for(const d of new Set(t))for(const f of c){const m=(o=a.characters[d])==null?void 0:o.files[f];if(!m)continue;let _=l.get(m);_||(_=await u.loadAsync(s(m)),_.colorSpace="",_.flipY=!1,_.anisotropy=16,_.needsUpdate=!0,l.set(m,_));const g=h.get(d)??[];g[f]=_,h.set(d,g)}return h.size?{channels:a.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function Hp(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await Op(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const Nh=new Map;function XS(i){if(!i)return null;let t=Nh.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new wn(n),t.colorSpace="",t.anisotropy=8,Nh.set(i,t)}return t}const ic=new he("#14181B"),sc=new he("#FFFFFF"),qS=.5;function Vc(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??Dp},a=n.from!==void 0&&tA(n.from,s),c=[];return i.root.traverse(u=>{const h=u;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((d,f)=>{const m=d.name||h.name,_=m.toLowerCase();if(!Tl.some(g=>_.includes(g))){const g=Gh.get(d)??d,p=QS(s);if(!p&&d===g||a&&d!==g)return;const v=p?g.clone():g;p&&(v.userData.drillOwned=!0,Gh.set(v,g),eA(v,s,h,r),c.push(v)),d!==v&&d.userData.drillOwned&&d.dispose(),Array.isArray(h.material)?h.material[f]=v:h.material=v;return}{const g=d.clone();d.userData.drillOwned&&d.dispose(),g.userData.drillOwned=!0,g.color=Up(o.a),iA(g,o,e,Bp(m),{...n,exact:r}),c.push(g),Array.isArray(h.material)?h.material[f]=g:h.material=g}})}),c}const KS=/^(thigh[LR]|pelvis[LR]|spine)$/,$S=/^shin[LR]$/,YS=8,Uh=i=>Math.round(i*100)/100,Xo=[.8,.9],kh=[Uh(1-Xo[1]),Uh(1-Xo[0])],ZS=8,Oh=1,JS={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},No=i=>i!==void 0&&i!==AS;function Bh(i,t){var r;const e=[new Se(-1,-1,-1,-1),new Se(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<YS;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const QS=i=>{const t=Vp(i);return!!(t.shorts||t.socks||t.tone)},Vp=i=>({shorts:i.shorts,socks:i.socks,tone:No(i.skin)?JS[i.skin]:void 0}),tA=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&No(i.skin)===No(t.skin)&&(!No(i.skin)||i.skin===t.skin),Gh=new WeakMap;function eA(i,t,e,n){const s=Bh(e,KS),r=Bh(e,$S),o=Vp(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:Qi(o.shorts??"#000000",n)},kitSocksC:{value:Qi(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:Qi(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
	float kitBand = vMapUv.x * ${ZS.toFixed(1)};
	float kitSkinAt = step( ${Oh.toFixed(1)}, kitBand ) * step( kitBand, ${(Oh+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${kh[0].toFixed(2)}, ${kh[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${Xo[0].toFixed(2)}, ${Xo[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const nA=i=>{const t=new he(i),e=Math.max(t.r,t.g,t.b);return e>jo?jo/e:1},Qi=(i,t)=>t?new he(i):Up(i).multiplyScalar(jo);function zh(i,t){const e=[new Se(0,0,0,0),new Se(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function iA(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=zh(e==null?void 0:e.channels,t.pattern),l=zh(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=o?a==null?void 0:a[n]:void 0,f=d?XS(o):null,m={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:Qi(t.a,c)},kitB:{value:Qi(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:Qi((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:Qi((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:f},kitNumO:{value:new ce(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new ce(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new ce(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:f?1:0},kitNumFlip:{value:qS*(c?1:nA(t.a))}};i.userData.kitUniforms=m,i.onBeforeCompile=_=>{Object.assign(_.uniforms,m),_.fragmentShader=_.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${ic.r.toFixed(4)}, ${ic.g.toFixed(4)}, ${ic.b.toFixed(4)} )
		: vec3( ${sc.r.toFixed(4)}, ${sc.g.toFixed(4)}, ${sc.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const sA=.18;function Hh(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const Rl=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function Xs(i){const t=Rl(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=(n*n-r*r)/(2*e),a=(n*n-s*s)/(2*e);if(o+a<=t){const u=t-o-a;return{D:t,t1:(n-r)/e,t2:u/n,t3:(n-s)/e,d1:o,d2:u,peak:n}}const c=Math.sqrt(e*t+(r*r+s*s)/2);return{D:t,t1:(c-r)/e,t2:0,t3:(c-s)/e,d1:(c*c-r*r)/(2*e),d2:0,peak:c}}function Ie(i){const t=Xs(i);return t.t1+t.t2+t.t3}function Tn(i,t){const e=Xs(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let o,a;if(s<=e.t1){const u=Math.min(i.startSpeed??0,i.cruise);o=u*s+.5*r*s*s,a=u+r*s}else if(s<=e.t1+e.t2)o=e.d1+e.peak*(s-e.t1),a=e.peak;else{const u=s-e.t1-e.t2;o=e.d1+e.d2+e.peak*u-.5*r*u*u,a=e.peak-r*u}const c=e.D>0?o/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:a}}const rA=.25;function Vh(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+Ie(n)){e=[0,0];continue}const s=Rl(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=Tn(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function oA(i,t,e=rA){const n=Vh(i,t),s=Vh(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const aA=2.5;function cA(i,t){let e=0;for(const n of i)t>=n.t0&&(e=Xs(n).peak);return Math.min(1,e/aA)}const lA=.035,uA=.1,Wh=.4,hA=1;function dA(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||Rl(s.from,s.to)<hA)continue;const r=s.t0+Ie(s)-uA,o=(t-r)/Wh;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+Wh)||(e=Math.max(e,lA*.5*(1-Math.cos(2*Math.PI*o))))}return e}function ze(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function fA(i,t=0){return i-t}function ca(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function pA(i,t=58*Math.PI/180,e=.85){const n=ca(i);return Math.min(t,Math.max(-t,n))*e}const mA=1.2,rc=180*Math.PI/180,oc=120*Math.PI/180,jh=70*Math.PI/180;function Wp(i){return i<=0?rc:i<=2.3?rc+(oc-rc)*i/2.3:i>=5.48?jh:oc+(jh-oc)*(i-2.3)/(5.48-2.3)}const gA=.12,Xh=15*Math.PI/180;function _A(i){return Math.max(-Xh,Math.min(Xh,i*gA))}const bA=.001;function Zi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=bA}function xA(i,t,e,n){return e||n||!Zi(i,t)?null:ze(i,t)}function qh(i,t,e,n=Math.PI*2){const s=t-i,r=ca(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const vA=2.3,_r=1.1,yA=1.15,Kh=.6,$h=1.2,Uo=.88,MA=1-Uo,SA=.15,po=.28;function ss(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?yA:vA),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?Kh:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??$h;u=(e<Uo?h*Math.sin(Math.PI*e/Uo):SA*h*Math.sin(Math.PI*(e-Uo)/MA))+c}else if(n==="lofted")u=(i.loft??$h)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=po?o+(h-o)*Math.sin(Math.PI/2*(e/po)):a+(h-a)*Math.cos(Math.PI/2*((e-po)/(1-po)))}else n==="drop"?u=(i.fromHeight??Kh)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const Yh=new WeakMap;function AA(i){const t=Yh.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,ss(i,i.t0+i.duration*n/32).height);return Yh.set(i,e),e}function jp(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=ss(i,n),r=ss(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function Xp(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const Zh=3,In=2.52,Dn=4,Ts=.8,mo=1,Ci=.3,hr=.6,Mn=.15,EA=.5,Qn=.45,qp=.4,Kp=.7,Jh=Math.PI/12,ws=4,TA=.6,Qh=.4,wA=.3,RA=.15,CA=.4,IA=.35,wr=.3,PA=Math.PI/4,LA=.25,DA={left:"gk_dive_a",right:"gk_dive_b"},$p=4,FA=.12,NA=.25,UA=.35;function td(i){return Math.min(NA,Math.max(FA,i*UA))}const kA=1.3,OA=.15;function ed(i,t,e){const n=i-OA,s=i+t-n,r=Math.min(kA,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const BA=1.8,nd=.3,GA=.7,zA=.9,HA=2.5,gn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},VA={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:gn.roll},go={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},WA=.8;function jA(i,t,e,n=la){const s=$p*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-nm)*t)}const XA=3;function qA(i,t,e){if(t<=0)return null;const n=Math.min(XA,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Vn=1,_o=.25,ac=.5,id=.8,KA=.4,Yp=3,$A=.6,YA=2.3,sd=.9,Rs=.3,rd=.4,ZA=12,JA=8,QA=3,tE=.25;function od(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Wc,r/JA),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(tE*r,QA)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Wc,r/ZA),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const eE=.6,Wc=.2;function nE(i,t,e){const n=eE*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Wc,e/n)}const iE=16,sE=12,cc=2,rE=8,oE=.1,aE=2.44;function ts(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Zp(i,t,e){const n=ts(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const lc=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],bo={id:"pass_a",duration:.567,contact:.167,reach:.89},cE=["stall_c"],ad="jog_back_a",dr=.5,lE=.5,uE=.3,hE=.9,cd=.5,dE=.2,ld=.8,ud=.5,fE=1.6,xo={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},hd=3,pE=.1,vo=["walk","jog","run"],ko=.5,mE=1.5*ko,gE=.42*Math.SQRT1_2,_E=12,bE=.15;function xE(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=os(n,la)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function dd(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const f of t){const m=Math.hypot(s[0]-f[0],s[1]-f[1]);e-m>u+1e-9&&(u=e-m,c=f)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?Ye(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>o+1e-9&&(r=s,o=d)}return r}function fd(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function yo(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const vE=.2;function pd(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function md(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Ye([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ne+pE?null:[t[0]-Ne*s[0],t[1]-Ne*s[1]],o=e?Ye([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Ne,qp),Kp);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function yE(i){return i<15?"roll":i<30?"throw":"kick"}function Jp(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function ME(i,t,e,n,s){const{reach:r,at:o}=Jp(i,e,n);if(r>Yp*s)return null;const a=Ye([e[0]-i[0],e[1]-i[1]]);if(r<=$A*s)return{kind:"catch",clip:gn.catch.id,clipDuration:gn.catch.duration,contactOffset:gn.catch.contact,contact:[i[0]+Ne*a[0],i[1]+Ne*a[1]],travelTo:null};const c=sm(i,t,n),u=gn.dive[c],h=Ye([o[0]-i[0],o[1]-i[1]]),l=Math.min(YA*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function SE(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=Ye(c);return[a[0]+nd*n*u[0],a[1]+nd*n*u[1]]}function Qp(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function tm(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=Qp(r,n))}return s}const AE=[{id:"header_a",duration:1.9,contact:1}],EE=1.57,gd=.1,_d=.6,uc=2,Mo=.02,hc=.6,TE=2.5,wE=.22,RE=3,CE=6.5;function dc(i,t){return Math.min(Math.max(wE*i,RE),CE)*t}const IE=10,PE=1.7;function LE(i,t,e,n){const s=e??[t[0],t[1]],r=Ye([s[0]-i[0],s[1]-i[1]]),o=[i[0]+gd*n*r[0],i[1]+gd*n*r[1]],a=AE[0];return{contact:o,height:EE*n,clip:a,set:[i[0]+Ne*r[0],i[1]+Ne*r[1]],faceAt:s}}const bd=.4,DE=.3,FE=18,NE=10,UE=.45,kE=.8,Oo={id:"strike_jog_a",contact:.4},OE=1,BE={strike_jog_a:{loop:!1,category:"shoot",ballContact:Oo.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function em(i){var t;for(const[e,n]of Object.entries(BE))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const xd=.15,GE=.2,la=3.35,nm=.5;function zE(i,t,e,n,s=1){let r=null,o=1/0;for(const m of e){const _=Math.hypot(m.at[0]-t[0],m.at[1]-t[1]);_<o&&(o=_,r=m)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-nm)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const m=ze(i,c),_=g=>(g[0]-i[0])*Math.cos(m)-(g[1]-i[1])*Math.sin(m);return u.sort((g,p)=>_(p)-_(g)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),f=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<f-1e-6?u[0]:u[1]}function HE(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const im=.35;let Ne=im;function vd(i){Ne=i}function VE(){return Ne/im}function Wn(i,t){return[i[0]+Ne*Math.sin(t),i[1]+Ne*Math.cos(t)]}function fc(i,t,e){const n=ze(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function sm(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Ye(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function yd(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function WE(i,t,e){const n=Ye([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Ye([e[0]-i[0],e[1]-i[1]]);const f=n[0]*s[1]-n[1]*s[0];r=Math.abs(f)<1e-6?1:Math.sign(f)}else r=1,s=yd([-n[0],-n[1]],-r*Jh);const o=yd(n,r*Jh),a=[i[0]+Ne*o[0],i[1]+Ne*o[1]],c=[i[0]+Ne*s[0],i[1]+Ne*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,qp),Kp);return{contact:a,set:[a[0]+d*l[0],a[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const jE=.5,XE=1.4,Md={walk:.8,jog:1.2,run:2.2},qE=.25,KE=.7,$E=.3,YE=2,fr=.4,ZE=10,JE=8,QE=2.5,Sd=6,tT=2,Ad=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Ed=1.4;function Td(i,t,e){const n=i.t0+Ie(i),s=pc(i,t);let r=0,o=Math.max(n-t,.001);if(pc(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;pc(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function pc(i,t){const e=Tn(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function eT(i,t,e,n,s,r={}){const o=Ie(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=Ye([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=ze(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=T=>(T[0]-i.from[0])*a[0]+(T[1]-i.from[1])*a[1],l=i.t0+o,d=h(e),f=VE(),m=(r.others??[]).filter(T=>Math.abs((T[0]-i.from[0])*Math.cos(c)-(T[1]-i.from[1])*Math.sin(c))<=tT).map(T=>h(T)),_=KE*f,g=qE*f,p=T=>h(Tn(i,T).pos),v=[],y=[];let x=i.t0,R=[...t];const M=Math.ceil(Xs(i).D/(.5*Math.min(n,fr*3)))+8;for(let T=0;;T++){y.push(x);const P=h(R),A=d-P,S=r.turnOut?fr:n,C=fr*(1+Ed),k=T===0&&!!r.turnIn||!!r.turnOut&&A<=C,L=k?Ne:_;if(A<=Ed*S||T===M-1||d-(p(x)+L)<.05){const W=Math.hypot(e[0]-R[0],e[1]-R[1]);let Gt=x;if(W>1e-6){const se=Math.max(Tn(i,x).speed,jE*i.cruise),fe=Math.min(2*W/(se+_r*(W/se)/2),Math.max(l-x,.2));v.push({from:R,to:[...e],t0:x,duration:fe,style:"push",endFrac:0}),Gt=x+fe}return Gt<l&&v.push({from:[...e],to:[...e],t0:Gt,duration:l-Gt,style:"ground"}),{flights:v,touches:y,restEnd:Math.max(Gt,l)}}let F=k?fr:n;if(!k&&A>ZE){let W=A;for(const Gt of m)Gt>P&&(W=Math.min(W,Gt-P));F*=Math.min(Math.max(W/JE,1),QE)}const Z=F;F*=1+Ad[T%Ad.length],!k&&r.turnOut&&A-F<C&&(F=Math.max(A-C,fr));const B=Math.min(F,XE*i.cruise*i.cruise/_r),j=Td(i,x,B),O=Math.max(i.cruise*j-B,0),et=Math.min(L,P-p(x)+O),Q=p(x)+et,nt=Math.max(P,Q),ft=Z>YE?s:s*(T%2?-1:1),jt=Math.min(g,$E*B),it=(R[0]-i.from[0])*u[0]+(R[1]-i.from[1])*u[1],ht=Math.abs(ft*jt-it),dt=Math.sqrt(Math.max(Sd*Sd-ht*ht,0)),V=Math.min(nt+B,P+dt,d),xt=Td(i,x,V-Q),Vt=(V-P)/xt,$t=Vt+_r*xt/2,re=Vt-_r*xt/2,ie=[i.from[0]+a[0]*V+u[0]*ft*jt,i.from[1]+a[1]*V+u[1]*ft*jt],Ae={from:R,to:ie,t0:x,duration:xt,style:"push",endFrac:Math.max(re,0)/$t};v.push(Ae),R=[...ie],x+=xt}}function ei(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Sn(i,t,e){const n=ei(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const Cl=.3;function rm(i){const t=kc.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??In})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?Cl:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function Il(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function nT(i,t){const e=Xs(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=i.startSpeed??0,o=new Set([0,n]);for(const u of t)u.min>e.peak||(u.min>r&&o.add((u.min-r)/i.accel),u.min>s&&o.add(n-(u.min-s)/i.accel));const a=[...o].sort((u,h)=>u-h),c=[];for(let u=0;u+1<a.length;u++){if(a[u+1]-a[u]<1e-9)continue;const h=Il(t,Tn(i,i.t0+(a[u]+a[u+1])/2).speed);if(!h)continue;const l=c[c.length-1];l&&l.gait===h.gait&&Math.abs(l.t1-(i.t0+a[u]))<1e-9?l.t1=i.t0+a[u+1]:c.push({gait:h.gait,t0:i.t0+a[u],t1:i.t0+a[u+1]})}return sT(c)}const iT=.3;function sT(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=iT;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const ua=.85,mi=1.15,wd=.5;function om(i){return wd+(ua-wd)*Math.min(1,Math.max(0,i))}function rT(i,t){const e=i/t;return e>mi?mi:Math.max(om(e),e)}function oT(i,t){return Math.min(mi,Math.max(ua,i/t))}function aT(i,t,e){const n=i.findIndex(u=>u.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=ua&&r<=mi)return{timeScale:r,partner:null,weight:0};const o=i[r>mi?n+1:n-1];if(!o)return{timeScale:r>mi?mi:Math.max(om(r),r),partner:null,weight:0};const a=Math.min(1,Math.max(0,(t-s.clipSpeed)/(o.clipSpeed-s.clipSpeed))),c=(1-a)*s.clipSpeed+a*o.clipSpeed;return{timeScale:oT(t,c),partner:o.gait,weight:a}}const cT=new Set(["pass","shoot","receive","header","defensive"]),qo=new Set(["turn","transition"]),_i=.15,am=.1,cm=.3,lT=.45,uT=.2,hT=.12,dT=.6;function Pl(i,t){var e;return cT.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function lm(i,t,e){var r,o;if(Pl(i,t))return am;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return qo.has(n??"")?_i:n==="idle"?s==="idle"?dT:s==="locomotion"?hT:Ko:n==="locomotion"&&s==="locomotion"?uT:qo.has(s??"")?_i:Ko}function um(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?lT:qo.has(e??"")?_i:Pl(i,t)?cm:Ko}function fT(i,t,e){var n;return Pl(i,t)||qo.has(((n=i.clips[t])==null?void 0:n.category)??"")?um(i,t):lm(i,e,t)}const dn=Math.PI/180,pi={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*dn,t50:.567,t90:.8,peak:159*dn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*dn,t50:.533,t90:.8,peak:213*dn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*dn,t50:.4,t90:.6,peak:366*dn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*dn,t50:.767,t90:1.033,peak:192*dn,standing:!1}};function mc(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function hm(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+_i&&(n=s);return n}function pT(i,t,e,n){const s=hm(i,t,e);if(!s)return null;const r=pi[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=mc(r,s.offset),u=mc(r,s.offset+o),h=mc(r,a),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,f=n===void 0?s.to-s.from:Ki(n,s.to),m=Math.min(1,(e-s.t0)/_i),_=e<=s.end?1:Math.max(0,1-(e-s.end)/_i),g=Math.max(0,Math.min(m,_));return{heading:d+f*l,clipYaw:r.yaw*h*g}}function mT(i,t){return i.peak+Wp(t)}function gT(i,t,e){const n=Math.abs(i);return n<jc?null:n>wT&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const jc=45*dn,Rd=60*dn,_T=.3,bT=.5,xT=.7,vT=130*dn,So=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Cd={left:"strafe_l_a",right:"strafe_r_a"},yT=3.2,MT=3.2,dm=60*dn,ST=120*dn,Id=[{id:"jog_back_diag_a",axis:225.5*dn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*dn,speed:2.27}],AT=5;function ET(i,t){if(Math.abs(i)>dm)return null;const e=i>=0?Id[0]:Id[1];return t<=e.speed*mi?{id:e.id,axis:e.axis}:null}function TT(i,t){const e=Math.abs(i);return e<=dm?t>yT?null:t>(So[0].speed+So[1].speed)/2?So[1].id:So[0].id:e>ST||t>MT?null:i>0?Cd.right:Cd.left}const wT=120*dn;function Ki(i,t){return ca(t-i)}const Ko=.25;function Ls(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?GE:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=um(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function RT(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function fm(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<Ls(t,r)&&(s=r);return s}const CT=.15;function IT(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const PT=.06,Pd=2,LT=6,DT=.4;function $o(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Ld(i,t){return $o(ei(i),20973)*t}function Dd(i){return 1+PT*(2*$o(ei(i),10196)-1)}function FT(i,t){return(Pd+$o(ei(i),7047)*(LT-Pd))*(1+DT*(2*$o(ei(i)+t*2654435761,28490)-1))}function NT(i,t){let e=0;for(let n=0;n<64;n++)if(e+=FT(i,n),t<e)return n;return 64}function UT(i,t,e){const n=i.length;if(n<=1)return i[0];const s=ei(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function kT(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const OT=new Set(["receive_a","pass_a","pass_b"]),pm=.8,BT=.7;function mm(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function Ll(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+Ie(n)?0:Tn(n,t).speed);return e}function GT(i,t,e){for(const n of i)OT.has(n.clip)&&Ll(t[n.player],mm(e,n))>=pm&&(n.additive=!0)}const zT=1,HT=2,VT=.025,Fd=.2,WT=.4,Nd="idle_transition";function jT(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/Fd,(o-r)/Fd);a<=0||(n=Math.max(n,VT*a*.5*(1-Math.cos(2*Math.PI*HT*r))))}return n}const XT="idle_b",qT=.5,KT=.3,$T=.15;function YT(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,qT*Math.min(1,(e-s.t0)/KT)*Math.min(1,(s.t1-e)/$T)));return n}function ZT(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=mm(e,r)-zT,a=r.t0;if(a-o<WT||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(Ll(t[r.player],u)>Cl){c=!0;break}const h=fm(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[Nd]&&s.push({player:r.player,clip:Nd,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const JT=.6,gm=.5,_m=.6,yr=2*gm/_m,Yo=yr/_m,QT=gm-wr;function t1(i){return(yr-Math.sqrt(Math.max(0,yr*yr-2*Yo*i)))/Yo}function e1(){return yr-Yo*t1(QT)}const n1=.15,i1=.05;function s1(i,t,e){const n=ze(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(LA,s/2):wr,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+PA;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function r1(i,t,e,n,s,r){const o=Math.min(wr,e*(n-Ci)/2);for(let a=o;a>=n1-1e-9;a-=i1){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}function o1(i,t,e=1){var St,Wt,oe,ae,Kt,be,Tt,gt,q,Nt,rt,_t,Ot,zt,de;kT(t),em(t);const n=Vo(i),s=rm(t),r={};i.players.forEach(D=>r[D.id]=[...D.start]);const o={},a=[],c=[],u=[],h=[],l=[],d=[],f=[],m=[],_={},g={},p=new Set,v={},y={},x={},R={};function M(D){u.push(D),v[D.player]=D.t0,Zi(r[D.player],D.at)&&(T[D.player]=ze(r[D.player],D.at))}const T={},P={},A={};function S(D){const b=_[D];let ut=Math.max(b?b.t0+Ie(b):0,P[D]??0,0);for(const mt of c)mt.player===D&&t.clips[mt.clip]&&(ut=Math.max(ut,Ls(t,mt)));return ut}function C(D,b,ut,mt){if(se.has(D)||!Zi(r[D],ut))return null;const Y=T[D]??0,Ct=Ki(Y,ze(r[D],ut));if(Math.abs(Ct)<Rd)return null;const Bt=pi[Ct>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[Bt.id])return null;const It=k(Bt),Xt=S(D),tt=Math.max(Xt,Math.min(b,mt-It));return tt+It>mt+1e-9?null:(L(D,Bt,tt,0,Y,Y+Ct),tt)}function k(D,b=0){return D.duration-b-_i}function L(D,b,ut,mt,Y,Ct,Bt){const It=Bt??k(b,mt),Xt={player:D,clip:b.id,t0:ut,offset:mt,end:ut+It,from:Y,to:Ct},tt={player:D,clip:b.id,t0:ut,...mt?{offset:mt}:{},...Bt!==void 0?{loopUntil:ut+It}:{}};f.push(Xt),c.push(tt),A[D]={span:Xt,cue:tt},P[D]=Xt.end+_i}function F(D,b){const ut=A[D];return!ut||ut.span.end<=b+1e-9?!0:b-ut.span.t0<_T?!1:(ut.span.end=b,ut.cue.loopUntil=b,P[D]=b+_i,!0)}function Z(D,b){if(F(D,b))return;const ut=A[D];f.splice(f.indexOf(ut.span),1);const mt=c.indexOf(ut.cue);mt>=0&&c.splice(mt,1),delete A[D],P[D]=0}function B(D,b=1/0){const ut=C(D.player,D.t0,D.at,b);M(ut===null?D:{...D,t0:ut})}const j=[];function O(D){var b;for(let ut=0;ut<j.length;ut++){const mt=j[ut];mt.afterT>=D||(j.splice(ut--,1),(o[b=mt.player]??(o[b]=[])).push(mt.move),_[mt.player]=mt.move,g[mt.player]=Q(mt.move,mt.player),M({player:mt.player,at:mt.faceBall,t0:mt.move.t0}),M({player:mt.player,at:mt.faceSettle,t0:mt.arrival}),r[mt.player]=[...mt.move.to])}}function et(D,b,ut){let mt=[...r[D]],Y=[...r[D]];const Ct=_[D];let Bt=Math.max(Ct?Ct.t0+Ie(Ct):0,y[D]??0),It=-1/0,Xt=null;for(let tt=b+1;tt<K.length;tt++){const G=K[tt];if(G.t>=ut)break;if((G.type==="pass"?G.from:G.player)!==D)continue;if(G.type!=="move"){Xt=`${G.type} at t=${G.t}`;break}const ot=t.groups[G.gait??"jog"]??t.groups.jog,at=t.clips[Sn(ot,D,G.t)].speed??In,At={from:mt,to:[...G.to],t0:G.t,cruise:at,accel:Dn},Ut=G.t+Ie(At);Bt=Math.max(Bt,Ut),mt=[...G.to],Y=Ut>ut?Tn(At,ut).pos:[...G.to],It=G.t}return{expected:mt,atArrival:Y,busyUntil:Bt,afterT:It,blocked:Xt}}function Q(D,b){const ut=nT(D,s).map(Y=>({player:b,clip:Sn(t.groups[Y.gait],b,D.t0),t0:Y.t0,loopUntil:Y.t1})),mt=A[b];if(mt){let Y=1/0;for(const Ct of ut)Ct.t0>mt.span.t0+1e-9&&Ct.t0<mt.span.end-1e-9&&(Y=Math.min(Y,Ct.t0));Y<1/0&&Z(b,Y)}return c.push(...ut),ut}function nt(D,b,ut="event"){(Ce[D]??0)>b&&console.warn(`[engine3d] ${D} is on the ground until t=${Ce[D].toFixed(2)}s but has a ${ut} at t=${b} — schedule it later`);const mt=_[D];if(!mt)return;const Y=mt.t0+Ie(mt);if(b<Y){const Ct=`buildSchedule: player ${D} has an event at t=${b} while still moving from a move started at t=${mt.t0} (in flight until t=${Y.toFixed(3)})`;if(te.has(D))console.warn(`[engine3d] ${Ct} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(Ct)}}function ft(D){let b=null,ut=-1/0;for(const mt of m)mt.t<=D&&mt.t>=ut&&(b=mt.player,ut=mt.t);return b}const jt=[];function it(D,b,ut){const mt=i.balls??[],Y=ot=>ot.carrier&&r[ot.carrier]?Wn(r[ot.carrier],T[ot.carrier]??0):Xp(ot,b);let Ct=-1,Bt=1/0;const It=r[D];if(mt.forEach((ot,at)=>{if(jt.some(Pt=>Pt.take===at))return;const At=Y(ot),Ut=Math.hypot(At[0]-It[0],At[1]-It[1]);Ut<Bt&&(Bt=Ut,Ct=at)}),Ct<0||Bt>Zh){const ot=mt.length?Ct<0?"every spare has already been used":`the nearest is ${Bt.toFixed(1)} m away (needs ${Zh} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${ut} by ${D} at t=${b.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${ot} — played with the ball already in play`);return}const Xt=ft(b),tt=Xt?ts(l,Xt,b):null,G=tt?[...tt.carry]:Xt&&r[Xt]?Wn(r[Xt],T[Xt]??0):yo(a,n,b).at,J=Y(mt[Ct]);jt.push({t:b,drop:G,take:Ct,at:J}),m.push({t:b,player:D}),l.push({player:D,at:b,carry:J}),y[D]=b}const ht=Object.fromEntries(i.players.map(D=>[D.id,D.team]));function dt(D,b,ut,mt,Y){const Ct=ft(mt);if(!Ct||Ct===D||se.has(D)||ht[D]==="coach"||ht[Ct]===ht[D])return null;const Bt=r[Ct]?[...r[Ct]]:yo(a,n,mt).at;if(!Zi(b,Bt)||!Zi(b,ut))return null;const It=ze(b,ut),Xt=Ki(ze(Bt,b),It),tt=Math.hypot(Bt[0]-b[0],Bt[1]-b[1])<=AT?ET(Xt,Y):null;if(tt&&t.clips[tt.id]){const J=It-tt.axis,ot=Math.hypot(Bt[0]-b[0],Bt[1]-b[1])||1;return{clip:tt.id,ball:[b[0]+ot*Math.sin(J),b[1]+ot*Math.cos(J)]}}const G=TT(Xt,Y);return G&&t.clips[G]?{clip:G,ball:Bt}:null}const V={};for(const D of i.events)D.type==="move"&&(V[St=D.player]??(V[St]=[])).push(D.t);function xt(D,b,ut){for(const mt of W){const Y=mt.id;if(!ct.length||ft(D)===Y||!t.clips[go.left.id]||!t.clips[go.right.id])continue;const Ct=_[Y],Bt=Math.max(D,Lt[Y]??0,Ct?Ct.t0+Ie(Ct):0);if(d.some(qt=>qt.player===Y))continue;const It=ct.reduce((qt,E)=>Math.hypot(E.at[0]-mt.start[0],E.at[1]-mt.start[1])<Math.hypot(qt.at[0]-mt.start[0],qt.at[1]-mt.start[1])?E:qt,ct[0]),Xt=It.at,tt=It.sideways?1:0,G=It.sideways?0:1,J=jA(Gt,e,Math.abs(r[Y][G]-Xt[G]),It.halfW),at=Xt[tt]+Math.min(J,Math.max(-J,(ut[tt]-Xt[tt])*WA))-r[Y][tt],At=ze(Xt,[i.pitch.width/2,i.pitch.length/2]),Ut=It.sideways?-Math.sin(At):Math.cos(At),Pt=qA(at,go[at*Ut>0?"left":"right"].dist*Gt,Math.sign(Ut)||1);if(!Pt)continue;const pe=go[Pt.side],Mt=Math.min(b,i.duration)-Pt.steps*pe.duration;if(Mt<Bt-1e-9||(V[Y]??[]).some(qt=>qt>=Mt-1e-9))continue;const ve=Math.sign(at)*pe.dist*Gt;for(let qt=0;qt<Pt.steps;qt++){const E=[...r[Y]],H=[...E];H[tt]=E[tt]+ve;const z=fd(E,H,Mt+qt*pe.duration,pe.duration);(o[Y]??(o[Y]=[])).push(z),r[Y]=[...z.to],_[Y]=z}c.push({player:Y,clip:pe.id,t0:Mt,loopUntil:Mt+Pt.steps*pe.duration}),g[Y]=[]}}function Vt(D,b){var Ct;const ut=(Ct=i.players.find(Bt=>Bt.id===D))==null?void 0:Ct.start;if(!ut||!ct.length)return!1;let mt=ct[0].at,Y=1/0;for(const Bt of ct){const It=Math.hypot(Bt.at[0]-ut[0],Bt.at[1]-ut[1]);It<Y&&(Y=It,mt=Bt.at)}return Math.hypot(b[0]-mt[0],b[1]-mt[1])<=_E*Gt}function $t(D,b){const ut=_[D];if(!ut||ut.endSpeed)return;const mt=ut.t0+Ie(ut);if(b-mt>=mo)return;ut.endSpeed=Ts;const Y=ut.t0+Ie(ut);for(const Ct of g[D]??[]){const Bt=c.indexOf(Ct);Bt>=0&&c.splice(Bt,1)}if(g[D]=Q(ut,D),Y>b-Ci){if(te.has(D)){console.warn(`[engine3d] player ${D}'s move started at t=${ut.t0} still arrives at t=${Y.toFixed(3)}, less than ${Ci}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${D}'s move started at t=${ut.t0} still arrives at t=${Y.toFixed(3)} even flowing into their action at ${Ts} m/s, less than ${Ci}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function re(D,b,ut,mt,Y){const Ct=_[D],Bt=Ct?Ct.t0+Ie(Ct):0;if(Ct&&(Ct.endSpeed!==void 0||b-Bt<mo))return null;const It=s1(r[D],ut,Y),Xt=t.groups.walk,tt=Xt!=null&&Xt.length?t.clips[Xt[0]].speed??In:In,G={from:[...r[D]],to:It,t0:0,cruise:tt,accel:Dn};let J=b-mt-Ie(G);return J<Math.max(Bt,y[D]??0)||!F(D,J)?null:(G.t0=J,(o[D]??(o[D]=[])).push(G),Y&&p.add(G),_[D]=G,g[D]=Q(G,D),r[D]=[...It],J)}function ie(D,b,ut){const mt=yo(a,n,b).at,Y=ze(mt,ut),Ct=[mt[0]-Ne*Math.sin(Y),mt[1]-Ne*Math.cos(Y)],Bt=Math.hypot(Ct[0]-r[D][0],Ct[1]-r[D][1]);if(Bt<oE){r[D]=[...Ct];return}const It=_[D],Xt=It?It.t0+Ie(It):0,tt=Math.max(Xt,y[D]??0,0);let G;for(let J=Bt<hd?0:1;J<vo.length;J++){const ot=t.groups[vo[J]]??t.groups.jog,at=t.clips[Sn(ot,D,b)].speed??In;if(G={from:[...r[D]],to:Ct,t0:0,cruise:at,accel:Dn,endSpeed:Ts},G.t0=b-Ci-Ie(G),G.t0>=tt)break}G.t0<tt&&(console.warn(`[engine3d] dead-ball run-up for ${D} at t=${b.toFixed(2)}s wants to start at t=${G.t0.toFixed(2)}s but he is not free until t=${tt.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),G.t0=tt),F(D,G.t0),(o[D]??(o[D]=[])).push(G),_[D]=G,g[D]=Q(G,D),r[D]=[...Ct]}function Ae(D,b,ut){const mt=yo(a,n,b);{const ot=dd(mt.at,vt,mE*Gt);if(Math.hypot(ot[0]-mt.at[0],ot[1]-mt.at[1])>1e-6){const at=a.filter(At=>At.t0<=b&&Math.hypot(At.to[0]-mt.at[0],At.to[1]-mt.at[1])<1e-9);if(at.length){for(const At of at)Math.hypot(At.from[0]-mt.at[0],At.from[1]-mt.at[1])<1e-9&&(At.from=[...ot]),At.to=[...ot];mt.at=ot}}}const Y=ft(b);Y&&Y!==D&&m.push({t:b,player:null});const Ct=mt.moving?mt.restT+vE:-1/0;let Bt=null;for(let ot=ut+1;ot<K.length;ot++){const at=Ft[ot];if(!(!at||at.actor!==D)){at.t-b<=ws+3&&(Bt=at.target);break}}let It=md(r[D],mt.at,Bt);if(It.stepTo){const ot=dd(It.stepTo,vt,gE*Gt),at=[ot[0]-mt.at[0],ot[1]-mt.at[1]];if(Math.hypot(at[0],at[1])>1e-6){const At=Ye(at),Ut=Ne+1,Pt=md([mt.at[0]+Ut*At[0],mt.at[1]+Ut*At[1]],mt.at,Bt);Pt.stepTo&&lt(Pt.stepTo)&&(It=Pt)}}let Xt=1/0;for(let ot=ut+1;ot<K.length;ot++){const at=K[ot];if((at.type==="pass"?at.from:at.player)===D){Xt=at.t;break}}let tt=b;if(It.stepTo){const ot=Math.hypot(It.stepTo[0]-r[D][0],It.stepTo[1]-r[D][1]);let at;for(let At=ot<hd?0:1;At<vo.length;At++){const Ut=t.groups[vo[At]]??t.groups.jog,Pt=t.clips[Sn(Ut,D,b)].speed??In;if(at={from:[...r[D]],to:It.stepTo,t0:b,cruise:Pt,accel:Dn,endSpeed:Ts},b+Ie(at)+Qn+Ci<=Xt)break}if(Ct>b+Ie(at)){const At=Ct-b,Ut=Math.hypot(It.stepTo[0]-at.from[0],It.stepTo[1]-at.from[1]),Pt=Dn*Dn*At*At-4*Dn*Ut,pe=Pt>0?(Dn*At-Math.sqrt(Pt))/2:at.cruise,Mt=(t.clips[Sn(t.groups.walk,D,b)].speed??Cl)*ua;at={...at,cruise:Math.max(Math.min(pe,at.cruise),Mt),endSpeed:0}}(o[D]??(o[D]=[])).push(at),te.set(D,b),_[D]=at,g[D]=Q(at,D),tt=b+Ie(at),r[D]=[...It.stepTo]}tt=Math.max(tt,Ct),M({player:D,at:[...mt.at],t0:Math.max(b,v[D]??0),lock:[tt-Mn,tt+Mn]});const G=ot=>{for(const at of g[D]??[]){const At=c.indexOf(at);at.t0>=ot?At>=0&&c.splice(At,1):(at.loopUntil??0)>ot&&(at.loopUntil=ot)}};if(se.has(D)&&Vt(D,mt.at)){const ot=gn.scoop[0],at=tt-ot.contact;return at<b&&console.warn(`[engine3d] keeper ${D}'s scoop at t=${tt.toFixed(2)}s wants to start at t=${at.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),G(Math.max(at,0)),c.push({player:D,clip:ot.id,t0:Math.max(at,0),contact:ot.contact}),M({player:D,at:[...It.faceAt],t0:tt}),m.push({t:tt,player:D}),l.push({player:D,at:tt,carry:[...mt.at],hand:{height:Vn*Gt,from:bE*Gt,rise:id,follow:!0}}),y[D]=tt,Lt[D]=Math.max(at,0)+ot.duration+Rs,tt}const J=Sn(t.groups.pass,D,tt);return G(tt-(t.clips[J].ballContact??0)),c.push({player:D,clip:J,t0:tt-(t.clips[J].ballContact??0)}),a.push({from:[...mt.at],to:It.set,t0:tt,duration:Qn,style:"ground"}),M({player:D,at:[...It.faceAt],t0:tt}),m.push({t:tt,player:D}),l.push({player:D,at:tt+Qn,carry:It.set}),y[D]=tt+Qn,tt+Qn}const W=i.players.filter(D=>D.role==="keeper"),Gt=e,se=new Set(W.map(D=>D.id));i.players.forEach(D=>T[D.id]=D.role==="keeper"?ze(D.start,n):0);const fe=((Wt=i.keeper)==null?void 0:Wt.outcome)==="save",Lt={},Ce={},te=new Map,I={},w={},K=[...i.events].sort((D,b)=>D.t-b.t);if(i.ball&&!i.ball.static){const D=n,b=i.players.reduce((Y,Ct)=>Math.hypot(Ct.start[0]-D[0],Ct.start[1]-D[1])<Math.hypot(Y.start[0]-D[0],Y.start[1]-D[1])?Ct:Y,i.players[0]),ut=K.find(Y=>Y.type!=="move"||Y.player===(b==null?void 0:b.id)&&se.has(Y.player)),mt=ut?ut.type==="pass"?ut.from:ut.player:null;if(!((ut==null?void 0:ut.type)==="collect"||((ut==null?void 0:ut.type)==="pass"||(ut==null?void 0:ut.type)==="shoot")&&ut.deadBall))if(mt&&se.has(mt))m.push({t:0,player:mt}),y[mt]=0,(ut==null?void 0:ut.type)==="pass"&&!!ut.fromFeet||l.push({player:mt,at:0,carry:[...n],hand:{height:Vn*Gt,follow:!0}});else{const Y=i.players.filter(It=>It.role!=="keeper"),Ct=Y.length?Y:i.players,Bt=Ct.reduce((It,Xt)=>Math.hypot(Xt.start[0]-n[0],Xt.start[1]-n[1])<Math.hypot(r[It.id][0]-n[0],r[It.id][1]-n[1])?Xt:It,Ct[0]).id;m.push({t:0,player:Bt}),y[Bt]=0}}const ct=(i.equipment??[]).filter(D=>D.type==="goal").map(D=>({at:D.at,halfW:os(D,la),sideways:D.facing==="e"||D.facing==="w"})),vt=xE(i.equipment,e),lt=D=>D[0]>=0&&D[0]<=i.pitch.width&&D[1]>=0&&D[1]<=i.pitch.length,Yt=D=>vt.every(b=>Math.hypot(b[0]-D[0],b[1]-D[1])>=ko*Gt),wt={};i.players.forEach(D=>wt[D.id]=[...D.start]);const Ft=K.map(D=>{if(D.type==="move")return wt[D.player]=[...D.to],null;if(D.type==="dribble")return wt[D.player]=[...D.to],{actor:D.player,target:[...D.to],t:D.t};if(D.type==="collect"||D.type==="tackle")return null;const b=D.type==="pass"?D.from:D.player;D.deadBall&&(wt[b]=[...n]);const ut=D.type==="pass"?[...wt[D.to]]:D.flightStyle==="ground"?[...D.at]:zE(wt[D.player],D.at,ct,D.corner,e);return{actor:b,target:ut,t:D.t}});for(let D=0;D<K.length;D++){const b=K[D];O(b.t);const ut=b.type==="pass"?b.from:b.player;if(b.newBall&&it(ut,b.t,b.type),b.type!=="dribble"&&b.type!=="move"&&delete R[ut],b.type==="move"){nt(b.player,b.t,b.type);const Y=se.has(b.player)&&(((ae=(oe=ts(l,b.player,b.t))==null?void 0:oe.hand)==null?void 0:ae.height)??0)>0;ft(b.t)===b.player&&!Y&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const Ct=t.groups[b.gait??"jog"]??t.groups.jog,Bt=t.clips[Sn(Ct,b.player,b.t)].speed??In,It=x[b.player],tt={from:It&&b.t<It.t0?[...It.at]:[...r[b.player]],to:b.to,t0:b.t,cruise:Bt,accel:Dn},G=dt(b.player,tt.from,b.to,b.t,Bt),J=G?null:(()=>{const ot=Il(s,Bt);if((ot==null?void 0:ot.gait)!=="run"&&(ot==null?void 0:ot.gait)!=="sprint"||!t.clips[pi.turn_to_run_a.id]||se.has(b.player)||S(b.player)>b.t+1e-9||!Zi(tt.from,b.to))return null;const at=Ki(T[b.player]??0,ze(tt.from,b.to));return Math.abs(at)>=Rd?{delta:at,gait:ot.gait}:null})();if((o[Kt=b.player]??(o[Kt]=[])).push(tt),_[b.player]=tt,g[b.player]=Q(tt,b.player),G){for(const at of g[b.player]??[]){const At=c.indexOf(at);At>=0&&c.splice(At,1)}const ot={player:b.player,clip:G.clip,t0:b.t,loopUntil:b.t+Ie(tt)};c.push(ot),g[b.player]=[ot],M({player:b.player,at:G.ball,t0:b.t,until:b.t+Ie(tt)})}else{if(J){const ot=Math.abs(J.delta)>vT,at=J.gait==="run"?pi.turn_180_a:null,At=ot&&at&&t.clips[at.id]?at:pi.turn_to_run_a,Ut=At.id===pi.turn_to_run_a.id?bT:0,Pt=At.id===pi.turn_to_run_a.id?xT:k(At,Ut),pe=T[b.player]??0;L(b.player,At,b.t,Ut,pe,pe+J.delta,Pt);const Mt=b.t+Pt;g[b.player]=(g[b.player]??[]).filter(ve=>{if(ve.t0>=Mt-1e-9)return!0;if((ve.loopUntil??1/0)<=Mt+1e-9){const qt=c.indexOf(ve);return qt>=0&&c.splice(qt,1),!1}return ve.t0=Mt,!0})}M({player:b.player,at:b.to,t0:b.t})}r[b.player]=[...b.to]}else if(b.type==="dribble"){nt(b.player,b.t,b.type),ft(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const Y=b.gait??"jog",Ct=t.groups[Y]??t.groups.jog,Bt=t.clips[Sn(Ct,b.player,b.t)].speed??In,It=ze(r[b.player],b.to),Xt=(((Tt=(be=ts(l,b.player,b.t))==null?void 0:be.hand)==null?void 0:Tt.height)??0)>0,tt=Xt?Zp(l,b.player,b.t):0,G=Xt?b.t+rd:b.t,J={from:[...r[b.player]],to:[...b.to],t0:G,cruise:Bt,accel:Dn};let ot=null;for(let st=D+1;st<K.length;st++){const pt=Ft[st];if(!(!pt||pt.actor!==b.player)){ot={target:pt.target,t:pt.t};break}}const at=G+Ie(J);let At=null;for(let st=D+1;st<K.length;st++){const pt=K[st];if((pt.type==="pass"?pt.from:pt.player)===b.player){At=pt;break}}let Ut=null;if((At==null?void 0:At.type)==="dribble"&&At.t-at<=ws){const st=Ki(It,ze(b.to,At.to)),pt=gT(st,Y),bt=pt?pi[pt]:null;if(bt&&t.clips[bt.id]){const $=bt.standing?at:G+Ie({...J,endSpeed:Ts});At.t-$>=k(bt)-1e-9&&(Ut={c:bt,delta:st})}}ot&&ot.t-at<mo&&!(Ut!=null&&Ut.c.standing)&&(J.endSpeed=Ts),Ut&&L(b.player,Ut.c,At.t-k(Ut.c),0,It,It+Ut.delta),(o[gt=b.player]??(o[gt]=[])).push(J),_[b.player]=J,g[b.player]=Q(J,b.player),M({player:b.player,at:[...b.to],t0:b.t});let Pt=null;for(const st of l)st.player===b.player&&(!Pt||st.at>Pt.at)&&(Pt=st);Pt&&Pt.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${Pt.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let pe=Pt?[...Pt.carry]:Wn(r[b.player],It);Xt&&(pe=Wn(r[b.player],It),l.push({player:b.player,at:b.t,carry:[...pe],hand:{height:0,from:tt,rise:rd,follow:!0}}),y[b.player]=b.t);const Mt=ot&&ot.t-at<=ws?Wn(b.to,ze(b.to,ot.target)):Wn(b.to,It),ve=ei(b.player)%2===0?1:-1;let qt=ve,E=!1;for(let st=D+1;st<K.length;st++){const pt=K[st];if((pt.type==="pass"?pt.from:pt.player)===b.player){if(pt.type==="dribble"&&pt.t-at<=ws){const $=Ye([b.to[0]-J.from[0],b.to[1]-J.from[1]]),Et=Ye([pt.to[0]-b.to[0],pt.to[1]-b.to[1]]),Rt=$[0]*Et[1]-$[1]*Et[0],yt=Rt<0?1:-1;Math.abs(Rt)>.05&&yt===-ve&&(qt=yt),E=Math.abs(Ki(ze(J.from,b.to),ze(b.to,pt.to)))>jc}break}}const H=R[b.player],z=!!H&&G-H.end<=ws&&Math.abs(Ki(H.h,It))>jc;R[b.player]={h:It,end:at};const X=Object.entries(r).filter(([st])=>st!==b.player).map(([,st])=>[...st]),N=eT(J,pe,Mt,Md[Y]??Md.jog,qt,{turnIn:z,turnOut:E,others:X});a.push(...N.flights),l.push({player:b.player,at:N.restEnd,carry:[...Mt]}),y[b.player]=N.restEnd,r[b.player]=[...b.to],xt(N.restEnd,((q=K[D+1])==null?void 0:q.t)??i.duration,[...Mt])}else if(b.type==="collect")nt(b.player,b.t,b.type),Ae(b.player,b.t,D);else if(b.type==="tackle"){nt(b.player,b.t,b.type),$t(b.player,b.t);const Y=b.from;ft(b.t)!==Y&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${Y}, but ${ft(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const Ct=se.has(b.player)&&!!t.clips[xo.id],Bt=!Ct&&b.style!=="slide"&&!!t.clips[bo.id],It=b.t+(Ct?xo:Bt?bo:lc[0]).contact;let Xt=null,tt=-1/0;for(const Ut of l)Ut.player===Y&&Ut.at<=It&&Ut.at>tt&&(tt=Ut.at,Xt=[...Ut.carry]);if(Xt||(Xt=Wn(r[Y],ze(r[Y],r[b.player]))),Bt){const Ut=hE*Gt,Pt=Ye([r[b.player][0]-r[Y][0],r[b.player][1]-r[Y][1]]);if(Math.hypot(r[b.player][0]-r[Y][0],r[b.player][1]-r[Y][1])<Ut){const pe=[r[Y][0]+Ut*Pt[0],r[Y][1]+Ut*Pt[1]],Mt=_[b.player];if(Mt&&Math.hypot(Mt.to[0]-r[b.player][0],Mt.to[1]-r[b.player][1])<1e-6){const ve=(t.clips[Sn(t.groups.sprint??t.groups.run??t.groups.jog,b.player,b.t)].speed??Mt.cruise)*mi,qt=Math.min(Ie(Mt),Math.max(It-Mt.t0,.2));Mt.to=pe;for(let E=0;E<8&&Ie(Mt)>qt+1e-6&&Mt.cruise<ve;E++)Mt.cruise=Math.min(ve,Mt.cruise*Ie(Mt)/qt);for(const E of g[b.player]??[]){const H=c.indexOf(E);H>=0&&c.splice(H,1)}g[b.player]=Q(Mt,b.player),r[b.player]=It<Mt.t0+Ie(Mt)?Tn(Mt,It).pos:pe}else r[b.player]=pe}}const G=Bt?Math.hypot(r[Y][0]-r[b.player][0],r[Y][1]-r[b.player][1]):Math.hypot(Xt[0]-r[b.player][0],Xt[1]-r[b.player][1]),J=Ct?xo.reach:Bt?bo.reach+Ne:fE;G>J*Gt&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${G.toFixed(2)} m away (reach ${(J*Gt).toFixed(2)}) — move the tackler closer first`),Bt&&G<ko*Gt-1e-6&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: he is ${G.toFixed(2)} m from ${Y}, inside a body width (${(ko*Gt).toFixed(2)} m at this body scale) — the two of them draw as one`);const ot=Ct?xo:Bt?bo:lc[Math.abs(ei(b.player)+Math.floor(b.t*10))%lc.length],at=b.t+ot.contact,At={player:b.player,clip:ot.id,t0:b.t,contact:ot.contact};if(c.push(At),M({player:b.player,at:Xt,t0:Math.max(b.t-hr,0,v[b.player]??0),lock:[b.t,b.t+ot.duration]}),Ct){const Ut=Ls(t,At),Pt=Wn(r[b.player],ze(r[b.player],Xt));m.push({t:at,player:b.player});const pe=fc(r[b.player],r[Y],Xt);l.push({player:b.player,at,carry:[...Xt],hand:{height:_o*Gt,follow:!0,bone:pe}}),l.push({player:b.player,at:Ut,carry:Pt,hand:{height:Vn*Gt,from:_o*Gt,rise:ac,follow:!0,bone:pe}}),y[b.player]=at,Lt[b.player]=b.t+ot.duration+Rs}if(!Ct){const Ut=Ye([r[Y][0]-r[b.player][0],r[Y][1]-r[b.player][1]]),Pt=[-Ut[1],Ut[0]],pe=(Xt[0]-r[Y][0])*Pt[0]+(Xt[1]-r[Y][1])*Pt[1]>=0?1:-1,Mt=qt=>[r[Y][0]+pe*qt*Gt*Pt[0]+ld*Gt*Ut[0],r[Y][1]+pe*qt*Gt*Pt[1]+ld*Gt*Ut[1]];let ve=Mt(cd);if(Bt){let qt=pd(r[Y],Xt,ve);for(let E=cd+.05;E<=1&&!(qt>=uE*Gt);E+=.05){const H=Mt(E),z=pd(r[Y],Xt,H);z>qt&&(qt=z,ve=H)}}a.push({from:Xt,to:ve,t0:at,duration:ud,style:"ground",pop:!0}),m.push({t:at,player:null})}if(Bt){const Ut=cE.filter(Pt=>t.clips[Pt]);if(Ut.length){const Pt=Ut[Math.abs(ei(Y)+Math.floor(b.t*10))%Ut.length];c.push({player:Y,clip:Pt,t0:at}),M({player:Y,at:[...Xt],t0:Math.max(at,v[Y]??0),until:at+t.clips[Pt].duration})}}else if(t.clips[ad]){let Ut=1/0;for(let qt=D+1;qt<K.length;qt++){const E=K[qt];if((E.type==="pass"?E.from:E.player)===Y){Ut=E.t;break}}const Pt=Ye([r[Y][0]-Xt[0],r[Y][1]-Xt[1]]),pe=lE*Gt,Mt=at+dE,ve=fd([...r[Y]],[r[Y][0]+pe*Pt[0],r[Y][1]+pe*Pt[1]],Mt,dr);if(Mt+dr+Ci<=Ut){(o[Y]??(o[Y]=[])).push(ve),_[Y]=ve,c.push({player:Y,clip:ad,t0:Mt,loopUntil:Mt+dr}),g[Y]=[];const qt=Math.max(Mt,v[Y]??0);qt<Mt+dr&&M({player:Y,at:[...Xt],t0:qt,until:Mt+dr}),r[Y]=[...ve.to]}}Ct||Ae(b.player,Math.max(Ls(t,At),at+ud),D)}else{const Y=b.type==="pass"?b.from:b.player,Ct=I[Y],Bt=!!Ct&&b.t>=Ct.at-Mo&&b.t-Ct.at<=uc;Ct&&!Bt&&console.warn(`[engine3d] header for ${Y} at t=${b.t} does not meet the cross at their forehead (t=${Ct.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete I[Y];const It=w[Y],Xt=!!It&&!!b.firstTime&&!Bt;b.firstTime&&!It&&!Bt&&console.warn(`[engine3d] firstTime ${b.type} for ${Y} at t=${b.t} has no ball arriving at their boot — played as an ordinary strike`),delete w[Y],Bt&&b.t-Ct.at>_d&&console.warn(`[engine3d] header for ${Y} at t=${b.t} pulled to the ball's arrival (t=${Ct.at.toFixed(2)}s) — the ball cannot wait in the air`),nt(Y,b.t,b.type),Bt||$t(Y,b.t);const tt=b.type==="pass"?r[b.to]:Ft[D].target,G=b.type==="shoot"&&b.flightStyle!=="ground",J=G?UE:IA,ot=G?kE:hr;b.deadBall&&!Bt&&ie(Y,b.t,tt);const at=se.has(Y)&&ft(b.t)===Y&&(((rt=(Nt=ts(l,Y,b.t))==null?void 0:Nt.hand)==null?void 0:rt.height)??0)>0,At=!at&&(b.style==="throw"||b.style==="roll")?b.style:null;se.has(Y)&&(Lt[Y]??0)>b.t&&console.warn(`[engine3d] keeper ${Y} is busy until t=${Lt[Y].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const Ut=$=>{if(!Bt)return null;const Et=Math.hypot($[0]-N[0],$[1]-N[1]);return Et>=IE?{style:"headed",loft:dc(Et,Gt)}:null};let Pt=b.t;if(b.type==="shoot"&&!b.touch){const $=_[Y],Et=$?$.t0+Ie($):-1/0;$&&($.endSpeed??0)>0&&b.t-Et>xd&&b.t-Et<mo&&(Pt=Et-xd)}let pe="",Mt,ve,qt=0,E=null,H=null;if(Bt)Mt=Ct.at,qt=Ct.height;else if(Xt)pe=Sn(t.groups[G?"shoot":"pass"],Y,Pt),ve=t.clips[pe].ballContact??0,Pt=It.at-ve,Mt=It.at,Pt<0&&console.warn(`[engine3d] first-time ${b.type} for ${Y} wants its cue at t=${Pt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((at||At)&&(b.type==="pass"||b.flightStyle==="ground")){E=b.style??yE(Math.hypot(tt[0]-r[Y][0],tt[1]-r[Y][1]));const $=At?VA[At]:gn[E];pe=$.id,ve=$.contact,Mt=b.t+$.contact,qt=E==="roll"?0:$.release*Gt,Lt[Y]=b.t+$.duration+Rs}else{const $=_[Y],Et=b.type==="shoot"&&$&&($.endSpeed??0)>0&&Pt<=$.t0+Ie($)+1e-9?Tn($,Pt).speed:0;H=re(Y,Pt,tt,J,b.type==="pass"||b.type==="shoot"&&!!b.touch),Et>OE&&t.clips[Oo.id]&&!(b.type==="shoot"&&b.touch)?(pe=Oo.id,ve=Oo.contact):pe=Sn(t.groups[G?"shoot":"pass"],Y,b.t),Mt=Pt+(ve??t.clips[pe].ballContact??0)}let z=null;Bt||(z={player:Y,clip:pe,t0:Pt,...ve!==void 0?{contact:ve}:{}},c.push(z),B({player:Y,at:[...tt],t0:Math.max(Pt-ot,0,v[Y]??0),lock:[Pt,Mt+Mn],until:Mt+Mn,headUntil:Mt-CT},Math.min(Pt,H??1/0)));const X=ze(r[Y],tt),N=Bt?[...Ct.from]:Xt?[...It.from]:Wn(r[Y],X),st=At?sE:iE,pt=b.type==="pass"&&se.has(b.to)&&!b.toFeet?b.flight:0,bt=b.type!=="pass"?0:E==="throw"?Math.max(.4,pt,Math.hypot(tt[0]-N[0],tt[1]-N[1])/st):b.style==="roll"?Math.max(b.flight,Math.hypot(tt[0]-N[0],tt[1]-N[1])/rE):b.flight;if(!Bt&&!Xt){const $=Math.max(Pt-EA,y[Y]??0);$>Mt&&console.warn(`[engine3d] departure window for ${Y} is inverted (starts t=${$.toFixed(2)}s, ball contact t=${Mt.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:Y,windowStart:$,contact:Mt,heading:X,...E?{toHeight:qt}:{}})}if(b.type==="pass"&&se.has(b.to)&&!b.toFeet){const $=Mt+bt,Et=et(b.to,D,$);Et.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${Et.blocked} runs during the flight, so where they stand at t=${$.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const Rt=Et.atArrival,yt=Ye([N[0]-Rt[0],N[1]-Rt[1]]),Qt=[Rt[0]+Ne*yt[0],Rt[1]+Ne*yt[1]],le=(b.flightStyle==="clipped"||b.flightStyle==="lofted")&&b.style!=="roll",ue=((_t=b.deflect)==null?void 0:_t.style)==="lofted",kt=le?(b.loft??0)>HA||ue?gn.catchHigh:gn.catch:gn.scoop[Math.abs(ei(b.to)+Math.floor($*10))%gn.scoop.length],Zt=le?Math.min(Vn*(kt===gn.catchHigh?2:1),aE)*Gt:0,Dt=$-kt.contact;Dt<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Dt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),Dt<Et.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${$.toFixed(2)}s wants t0=${Dt.toFixed(2)}s but their move is still running (until t=${Et.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),Dt<Mt&&console.warn(`[engine3d] catch cue for ${b.to} at t=${$.toFixed(2)}s wants t0=${Dt.toFixed(2)}s, before the ball leaves ${Y} at t=${Mt.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:b.to,clip:kt.id,t0:Dt,contact:kt.contact});const Ee=b.flightStyle==="lofted"?dc(Math.hypot(Qt[0]-N[0],Qt[1]-N[1]),Gt)-(qt+Zt)/2:E==="throw"?Math.max(At?cc:1.5,b.loft??0):b.loft;if(a.push({from:N,to:Qt,t0:Mt,duration:bt,style:E==="kick"?"clipped":le||E==="throw"?"lofted":"ground",...Ee!==void 0?{loft:Ee}:{},...Zt?{toHeight:Zt}:{},...qt?{fromHeight:qt}:{}}),M({player:b.to,at:[...r[Y]],t0:b.t,lock:[$-Mn,$+Mn]}),b.deflect)a.push(od(Qt,Zt,b.deflect,$,Gt)),y[b.to]=$;else{m.push({t:$,player:b.to});const ee=fc(r[b.to],r[Y],Qt);l.push({player:b.to,at:$,carry:Qt,hand:le?{height:Vn*Gt,from:Zt,rise:ac,follow:!0,bone:ee}:{height:Vn*Gt,from:0,rise:id,follow:!0,bone:ee}}),y[b.to]=$}Lt[b.to]=Dt+kt.duration+Rs}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??TE)>=PE){const $=Mt+bt;let Et=null,Rt=1/0,yt=!1,Qt=!1,le;for(let ee=D+1;ee<K.length;ee++){const ne=Ft[ee],xe=K[ee];if((xe.type==="move"||xe.type==="collect")&&xe.player===b.to&&le===void 0&&xe.t>=$-Mo&&(le=xe.t),!(!ne||ne.actor!==b.to)){Et=ne.target,Rt=ne.t,Qt=xe.type==="pass"||xe.type==="shoot",yt=Qt&&!!xe.header;break}}le!==void 0&&Qt&&Rt-$<=uc&&console.warn(`[engine3d] ${b.to} has a move at t=${le.toFixed(2)}s between the cross landing on their forehead (t=${$.toFixed(2)}s) and their strike at t=${Rt} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ue=Qt&&le===void 0&&Rt>=$-Mo&&(Rt-$<=_d||yt&&Rt-$<=uc),kt=et(b.to,D,$);kt.blocked&&!ue&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${kt.blocked} runs during the flight, so where they stand at t=${$.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const Zt=LE(kt.atArrival,N,Et,Gt),Dt=$-Zt.clip.contact;Dt<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Dt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),Dt<kt.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${Dt.toFixed(2)}s but their move is still running (until t=${kt.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:b.to,clip:Zt.clip.id,t0:Dt,contact:Zt.clip.contact});const Ee=Math.hypot(Zt.contact[0]-N[0],Zt.contact[1]-N[1]);a.push({from:N,to:Zt.contact,t0:Mt,duration:bt,style:"lofted",loft:dc(Ee,Gt)-(qt+Zt.height)/2,toHeight:Zt.height,...qt?{fromHeight:qt}:{}}),ue?(I[b.to]={at:$,from:Zt.contact,height:Zt.height},M({player:b.to,at:[...Et],t0:Math.max(Dt-hr,0,v[b.to]??0),lock:[Dt,$+Mn],until:$+Mn})):(Qt&&Rt<$-Mo?console.warn(`[engine3d] ${b.to}'s own strike at t=${Rt} is ${($-Rt).toFixed(2)}s BEFORE the cross reaches their forehead (t=${$.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):yt&&console.warn(`[engine3d] header for ${b.to} at t=${Rt} is ${(Rt-$).toFixed(2)}s after the ball arrives (t=${$.toFixed(2)}s) — ignored, cushioned instead`),M({player:b.to,at:[...r[Y]],t0:b.t,lock:[$-Mn,$+Mn]}),a.push({from:Zt.contact,to:Zt.set,t0:$,duration:hc,style:"drop",fromHeight:Zt.height}),M({player:b.to,at:[...Zt.faceAt],t0:$}),m.push({t:$,player:b.to}),y[b.to]=$+hc,l.push({player:b.to,at:$+hc,carry:Zt.set}))}else if(b.type==="pass"){const $=Mt+bt,Et=Sn(t.groups.receive,b.to,$),Rt=t.clips[Et];let yt=null,Qt=1/0,le=!1;for(let ue=D+1;ue<K.length;ue++){const kt=K[ue];(kt.type==="pass"?kt.from:kt.player)===b.to&&Qt===1/0&&(Qt=kt.t);const Dt=Ft[ue];if(!(!Dt||Dt.actor!==b.to)){Dt.t-$<=ws&&(yt=Dt.target,le=(kt.type==="pass"||kt.type==="shoot")&&!!kt.firstTime);break}}if(le&&yt){const ue=et(b.to,D,$),kt=Wn(ue.atArrival,ze(ue.atArrival,yt));a.push({from:N,to:kt,t0:Mt,duration:bt,style:b.flightStyle==="lofted"?"lofted":b.flightStyle==="clipped"?"clipped":"ground",...b.loft!==void 0?{loft:b.loft}:{},...qt?{fromHeight:qt}:{}}),M({player:b.to,at:[...r[Y]],t0:b.t,lock:[$-Mn,$+Mn]}),w[b.to]={at:$,from:kt},xt($,((Ot=K[D+1])==null?void 0:Ot.t)??i.duration,kt)}else{const ue=WE(tt,N,yt);let kt=b.t;{const ee=et(b.to,D,$),ne=ee.expected,xe=Math.max(b.t,ee.busyUntil),Ge=Math.max(ee.afterT,b.t),vn=ee.blocked;kt=xe;const me=Math.hypot(ue.contact[0]-ne[0],ue.contact[1]-ne[1]);if(me>TA)if(vn)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${me.toFixed(2)}m away at t=${$.toFixed(2)}s, but their authored ${vn} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const ke=Ye([ue.contact[0]-ne[0],ue.contact[1]-ne[1]]),qe=[ue.contact[0]-Ne*ke[0],ue.contact[1]-Ne*ke[1]],Oe=t.groups.walk,Ke=Oe!=null&&Oe.length?t.clips[Oe[0]].speed??In:In,yn={from:ne,to:qe,t0:0,cruise:Ke,accel:Dn},ln=$-Qh-Ie(yn);ln<xe-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(me-Ne).toFixed(2)}m walk to the contact point would need to start at t=${ln.toFixed(2)}s but they're busy until t=${xe.toFixed(2)}s — skipped (the standing stretch stays)`):(yn.t0=ln,kt=$-Qh,j.push({player:b.to,afterT:Ge,move:yn,faceBall:[...N],faceSettle:[...ue.faceAt],arrival:$}))}}const Zt=Rt.ballContact??0,Dt=Math.min(Zt,Math.max(RA,Math.min(wA,CA*bt,$-(kt+Ko)))),Ee=$-Dt;Ee<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${Ee.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:b.to,clip:Et,t0:Ee,...Zt>Dt?{offset:Zt-Dt}:{}}),a.push({from:N,to:ue.contact,t0:Mt,duration:bt,style:E==="throw"||b.flightStyle==="lofted"?"lofted":E==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...E==="throw"?{loft:Math.max(At?cc:1.5,b.loft??0)}:E==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...qt?{fromHeight:qt}:{},...Ut(ue.contact)??{}}),a.push({from:ue.contact,to:ue.set,t0:$,duration:Qn,style:"ground"}),M({player:b.to,at:[...r[Y]],t0:b.t,lock:[$-Mn,$+Mn]}),B({player:b.to,at:[...ue.faceAt],t0:$},Qt),m.push({t:$,player:b.to}),y[b.to]=$+Qn,l.push({player:b.to,at:$+Qn,carry:ue.set}),xt($+Qn,((zt=K[D+1])==null?void 0:zt.t)??i.duration,ue.set)}}else if(b.flightStyle==="ground"){const $=Math.hypot(tt[0]-N[0],tt[1]-N[1]),Et=b.flight??(b.touch?Math.sqrt(2*$/_r):E==="throw"?Math.max(.4,$/st):$/NE);if(a.push({from:N,to:[...tt],t0:Mt,duration:Et,style:b.touch?"push":E==="throw"?"lofted":E==="kick"?"clipped":"ground",...b.touch?{endFrac:0}:{},...E==="throw"?{loft:At?cc:1.5}:E==="kick"?{loft:3}:{},...qt?{fromHeight:qt}:{},...Ut(tt)??{}}),b.deflect){const Rt=Math.hypot(b.deflect.to[0]-tt[0],b.deflect.to[1]-tt[1]);a.push({from:[...tt],to:[...b.deflect.to],t0:Mt+Et,style:"ground",duration:nE($,Et,Rt)})}}else{const $=Math.hypot(tt[0]-N[0],tt[1]-N[1]),Et=b.flight??$/FE,Rt=Ye([tt[0]-N[0],tt[1]-N[1]]),yt=[tt[0]+bd*Rt[0],tt[1]+bd*Rt[1]],Qt=Mt+Et,le=a.length;a.push({from:N,to:yt,t0:Mt,duration:Et,style:"shot",...qt?{fromHeight:qt}:{}}),a.push({from:yt,to:yt,t0:Qt,duration:DE,style:"drop"}),xt(((de=K[D-1])==null?void 0:de.t)??0,Pt,N);let ue=!1;for(const kt of W){const Zt=si=>{const yi=et(kt.id,D,si);if(yi.afterT>-1/0)return yi.atArrival;const Bn=_[kt.id];return Bn&&si<Bn.t0+Ie(Bn)?Tn(Bn,si).pos:[...r[kt.id]]},Dt=Mt+td(Math.max(Et,sd)),Ee=ed(Mt,Et,gn.dive.left.contact).t0,ee=b.type==="shoot"?b.deflect:void 0,ne=fe||!!ee,xe=Zt(ne?Dt:Ee),Ge=[tt[0]-xe[0],tt[1]-xe[1]],vn=ze(xe,N),me=ne?ME(xe,vn,N,yt,Gt):null;if(ee&&!me&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${kt.id} is ${Jp(xe,N,yt).reach.toFixed(2)} m off the ball line at body scale ${Gt} (his reach is ${(Yp*Gt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!me){if(Math.hypot(Ge[0],Ge[1])>$p*Gt)continue;const si=sm(xe,vn,yt),yi=DA[si],Bn=t.clips[yi],{t0:ri,timeScale:as}=ed(Mt,Et,gn.dive[si].contact);if(M({player:kt.id,at:[...N],t0:Math.max(Pt-hr,0,v[kt.id]??0),...Bn?{lock:[Pt,ri+Bn.duration/as]}:{}}),Bn){c.push({player:kt.id,clip:yi,t0:ri,...as>1?{timeScale:as}:{}});const Yn=Zt(ri),$s=SE(Yn,N,yt,Gt),Lr=[$s[0]-Yn[0],$s[1]-Yn[1]],Dr=Math.hypot(Lr[0],Lr[1]),kl=Math.min(Dr,BA*Gt),Ol=Dr>1e-9?[Yn[0]+Lr[0]/Dr*kl,Yn[1]+Lr[1]/Dr*kl]:[...Yn],Vm=Math.min(zA,Math.max(GA,Qt-ri));d.push({player:kt.id,from:Yn,to:Ol,t0:ri,duration:Vm}),x[kt.id]={t0:ri,at:[...r[kt.id]]},r[kt.id]=[...Ol]}continue}if(ue)continue;ue=!0;const ke=a[le];a.splice(le+1,1);let qe,Oe=me.contact,Ke=Vn*Gt;if(me.kind==="dive"){ke.duration=Math.max(ke.duration,sd),qe=Mt+td(ke.duration);const si=Mt+ke.duration,yi={player:kt.id,from:[...xe],to:me.travelTo,t0:qe,duration:me.contactOffset};d.push(yi);const Bn=Qp(yi,si),ri=Math.min(1,(si-qe)/me.contactOffset),as=gn.dive[me.side],Yn=ri*as.reach*Gt,$s=Ye([me.contact[0]-xe[0],me.contact[1]-xe[1]]);Oe=[Bn[0]+Yn*$s[0],Bn[1]+Yn*$s[1]],Ke=(Vn+(as.hand-Vn)*ri)*Gt,x[kt.id]={t0:qe,at:[...r[kt.id]]},r[kt.id]=[...me.travelTo]}else qe=Math.max(Pt,Mt+ke.duration-me.contactOffset);const yn=Mt+ke.duration;ke.to=Oe,ke.toHeight=Ke,c.push({player:kt.id,clip:me.clip,t0:qe,contact:me.contactOffset});const ln=qe+me.clipDuration;if(M({player:kt.id,at:[...N],t0:Math.max(Pt-hr,0,v[kt.id]??0),lock:[Pt,ln]}),ee){a.push(od(Oe,Ke,ee,yn,Gt)),y[kt.id]=yn,Lt[kt.id]=ln+Rs;continue}m.push({t:yn,player:kt.id});const pa=fc(r[kt.id],N,Oe);me.kind==="catch"?l.push({player:kt.id,at:yn,carry:Oe,hand:{height:Vn*Gt,follow:!0,bone:pa}}):(l.push({player:kt.id,at:yn,carry:Oe,hand:{height:_o*Gt,from:Ke,rise:KA,follow:!0,bone:pa}}),l.push({player:kt.id,at:ln,carry:Oe,hand:{height:Vn*Gt,from:_o*Gt,rise:ac,follow:!0,bone:pa}})),y[kt.id]=yn,Lt[kt.id]=ln+Rs}}if(b.type==="pass"&&!E&&z){const $=t.groups.walk,Et=$!=null&&$.length?t.clips[$[0]].speed??In:In,Rt=[r[Y][0]+wr*Math.sin(X),r[Y][1]+wr*Math.cos(X)],yt=_[Y],Qt=yt?yt.t0+Ie(yt):-1/0;let le=1/0;for(let ee=D+1;ee<K.length;ee++){const ne=K[ee];if((ne.type==="pass"?ne.from:ne.player)===Y){le=ne.t;break}}const ue={from:[...r[Y]],to:Rt,t0:Ls(t,z),cruise:Et,accel:Dn},kt=ue.t0+Ie(ue)+Ci<=le;let Zt=null,Dt=null;if(yt&&p.has(yt)&&Mt>=Qt&&Mt-Qt<=JT&&Ll(o[Y],Mt)<pm){const ee=e1(),ne={...yt,to:[...yt.to],cruise:Math.max(yt.cruise,ee),endSpeed:ee};ne.t0=Mt-Ie(ne),ne.t0>=yt.t0-1e-9&&Xs(ne).peak>=ee-1e-9&&(Zt=ne,Dt=kt?{from:[...r[Y]],to:Rt,t0:Mt,cruise:ee,accel:Yo,startSpeed:ee}:r1(r[Y],X,ee,le-Mt,Mt,xe=>lt(xe)&&Yt(xe)))}if(Zt&&yt){for(const ee of g[Y]??[]){const ne=c.indexOf(ee);ne>=0&&c.splice(ne,1)}Object.assign(yt,Zt),g[Y]=Q(yt,Y)}const Ee=Dt??(kt?ue:null);Ee&&((o[Y]??(o[Y]=[])).push(Ee),_[Y]=Ee,g[Y]=Q(Ee,Y),r[Y]=[...Ee.to])}m.push({t:Mt,player:null})}const mt=te.get(ut);mt!==void 0&&mt<b.t&&te.delete(ut)}O(1/0),m.sort((D,b)=>D.t-b.t),c.sort((D,b)=>D.t0-b.t0),GT(c,o,t);const _e=ZT(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:f,bounces:_e,ballSwaps:jt,attachTo(D){let b=null;for(const ut of m)ut.t<=D&&(b=ut.player);return b}}}const a1=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,Ud=new Map,kd=30;function c1(i,t=0){const e=`${i.uuid}@${t}`;let n=Ud.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>a1.test(Fe.parseTrackName(s.name).nodeName??"")),Yg.makeClipAdditive(n,t*kd,n,kd),Ud.set(e,n)),n}function l1(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/am),n=Math.min(1,(t-i)/cm);return BT*Math.max(0,Math.min(e,n))}function u1(i,t,e,n=[]){const s=m=>Ls(i,m),r=(m,_)=>fm(t,i,m,_);function o(m,_){let g=0;for(const p of t){if(p.player!==m)continue;const v=s(p);v<=_&&v>g&&(g=v)}return g}const a=new Map,c=new Map,u=new Map,h=new Map,l=rm(i),d=new Map;for(const m of l)for(const _ of i.groups[m.gait]??[])d.set(_,m.gait);function f(m,_,g,p,v){const y=r(m,g),x=y!=null&&y.additive?y:null,R=x?Il(l,v):null,M=R?Sn(i.groups[R.gait],m,x.t0):null,T=x?null:y,P=T??(M?x:null),A=M??(T==null?void 0:T.clip)??UT(HE(i,e.get(m)),m,NT(m,g-o(m,g))),S=a.get(m);if(RT(S,A,T)){const nt=i.clips[A],ft=_.mixer.clipAction(_.clips.get(A));ft.reset(),ft.loop=nt.loop?2201:2200,ft.clampWhenFinished=!0,T!=null&&T.offset&&(ft.time=T.offset),S&&S.action!==ft&&(S.action.fadeOut(fT(i,S.clip,A)),ft.fadeIn(lm(i,A,S.clip))),ft.play(),a.set(m,{clip:A,offset:T==null?void 0:T.offset,action:ft})}const C=a.get(m).action,k=!!P&&P.timeScale===void 0&&i.clips[A].category==="locomotion",L=k?d.get(A):void 0,F=k?L?aT(l,v,L):{timeScale:rT(v,i.clips[A].speed??In),partner:null,weight:0}:null,Z=F!=null&&F.partner&&P?Sn(i.groups[F.partner],m,P.t0):null,B=c.get(m);if(B&&B.clip!==Z&&(B.clip!==A&&(B.action.weight=0,B.action.stop()),c.delete(m)),P)if((T==null?void 0:T.timeScale)!==void 0)C.timeScale=T.timeScale,C.weight=1;else if(F){if(C.timeScale=F.timeScale,C.weight=1-F.weight,Z){let nt=c.get(m);if(!nt){const it=_.mixer.clipAction(_.clips.get(Z));it.reset(),it.loop=2201,it.play(),nt={clip:Z,action:it},c.set(m,nt)}nt.action.weight=F.weight,nt.action.timeScale=F.timeScale;const ft=i.clips[A].duration,jt=i.clips[Z].duration;ft>0&&(nt.action.time=C.time/ft%1*jt)}}else C.timeScale=1,C.weight=1;else{C.weight=1,C.timeScale=Dd(m);const nt=i.clips[A].duration;C.time=((Ld(m,nt)+g*C.timeScale)%nt+nt)%nt}const j=YT(n,m,g),O=h.get(m),et=j>0?_.clips.get(XT):void 0;if(et){let nt=O;nt||(nt=_.mixer.clipAction(et),nt.reset(),nt.loop=2201,nt.timeScale=0,nt.play(),h.set(m,nt));const ft=et.duration;nt.time=((Ld(m,ft)+g*Dd(m))%ft+ft)%ft,nt.weight=j,C.weight*=1-j}else O&&(O.weight=0,O.stop(),O.enabled=!1,h.delete(m));const Q=u.get(m);if(x){const nt=x.offset??0,ft=Math.max(0,i.clips[x.clip].duration-nt),jt=l1(g-x.t0,ft);let it=Q;if(!it||it.clip!==x.clip||it.offset!==nt){it&&(it.action.weight=0,it.action.stop(),it.action.enabled=!1);const ht=_.mixer.clipAction(c1(_.clips.get(x.clip),nt));ht.reset(),ht.loop=2200,ht.clampWhenFinished=!0,ht.timeScale=0,ht.play(),u.set(m,it={clip:x.clip,offset:nt,action:ht})}it.action.time=Math.min(i.clips[x.clip].duration,nt+Math.max(0,g-x.t0)),it.action.weight=jt}else Q&&(Q.action.weight=0,Q.action.stop(),Q.action.enabled=!1,u.delete(m));_.mixer.update(p)}return{applyAnim:f,cueAt:r}}class h1{constructor(t,e){Pe(this,"_t",0);Pe(this,"_playing",!1);Pe(this,"speed",1);Pe(this,"loopCbs",[]);Pe(this,"endCbs",[]);Pe(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function d1(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,d){const f=e.get(o)??0,m=hm(i,o,a);let _;if(m){const y=s.get(o);y&&y.span===m?_=y.from:(_=f,s.set(o,{span:m,from:_}))}else s.delete(o);const g=m?pT(i,o,a,_):null,p=g?mT(pi[m.clip],u):d?mA:Wp(u),v=g?qh(f,g.heading,c,p):l?f:qh(f,h,c,p);return n.set(o,c>0?(v-f)/c:0),e.set(o,v),{h:v,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const f1=.2,p1=.5,m1=.06,g1=.25,Od=.15,_1=.25,b1=.2;function x1(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=f1*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function v1(i,t,e=1){return i.speed>p1*e||i.y>t+m1*e}function y1(i,t,e=1){const n=Math.hypot(i,t),s=g1*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function M1(i,t){for(const e of i??[]){const n=e.t0+Ie(e);if(t>n-_1&&t<=n)return!0}return!1}const S1=new Set(["turn","transition","receive","pass","idle"]);function A1(i,t,e){return e||i===null?!0:S1.has(t??"")}function E1(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/Od;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[x,R]=e(l,a);return[l.corrX+x,l.corrZ+R]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(x=>[...x]),l.prevRoot=[o[0],o[1]],[0,0];const d=o[0]-l.prevRoot[0],f=o[1]-l.prevRoot[1],m=l.rootV=Math.hypot(d,f)/c,_=r.map((x,R)=>{const M=l.prev[R],T=M?Math.hypot(x[0]-M[0]-d,x[2]-M[2]-f)/c:1/0;return{x:x[0],y:x[1],z:x[2],speed:T}}),g=x=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||m>=b1)g();else if(l.foot>=0&&v1(_[l.foot],l.plantY,h)&&g(),l.foot<0){const x=x1(_,h);x>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=x,l.plantY=_[x].y,l.anchorX=r[x][0],l.anchorZ=r[x][2])}else{const[x,R]=y1(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=x,l.corrZ=R}const[p,v]=e(l,a);(a-l.outAt)/Od>=1&&(l.outX=0,l.outZ=0);const y=[l.corrX+p,l.corrZ+v];return l.prev=r.map(x=>[...x]),l.prevRoot=[o[0],o[1]],l.prevT=a,y}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const Dl=Math.PI/180,bm=2*Dl,xm=4*Dl,T1=8*Dl,w1=xm/bm,Bd=.12,R1=.6,C1=.08;function I1(i){return i<w1?0:Math.min(T1,Math.max(xm,bm*i))}function P1(i,t){const e=Math.hypot(i[0],i[1]),n=I1(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function gc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function L1(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=P1(s,r),u=gc(i.get(n)??0,c.pitch*o,a,Bd),h=gc(t.get(n)??0,c.roll*o,a,Bd);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=ca(s)*R1,a=gc(e.get(n)??0,o,r,C1);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const _c=new an,Gd=new an,zd=new an,Zo=new an,D1=new kn;function F1(i,t){_c.identity();for(let e=i.parent;e&&e!==t;e=e.parent)_c.premultiply(e.quaternion);return _c}const Rr=new WeakMap;function vm(i){const t=Rr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function ym(i,t){const e=Rr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):Rr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function Hd(i,t,e,n,s){if(vm(t),!e&&!n&&!s){Rr.delete(t);return}Zo.copy(t.quaternion);const r=F1(t,i);Gd.setFromEuler(D1.set(e,n,s,"YXZ")),zd.copy(r).invert().multiply(Gd).multiply(r),t.quaternion.premultiply(zd),ym(t,Zo)}function N1(i,t){if(vm(i),!t){Rr.delete(i);return}Zo.copy(i.quaternion),i.rotation.y+=t,ym(i,Zo)}function Mr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function U1(i){var r;const t=[i.root[0]+Ne*Math.sin(i.heading),i.root[1]+Ne*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?Mr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Ne*Math.sin(s.heading),i.root[1]+Ne*Math.cos(s.heading)],a=Mr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function k1(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*Mr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?Mr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=Mr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function Bo(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=ss(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:AA(e),speed:jp(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:U1(n),height:k1(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const O1=1.2,B1=40;function Mm(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=Tn(s,e).pos);return tm(i.dives,i.moves[t],t,e)??n}function Vd(i,t){const e=i.attachTo(t),n=Bo({t,holderId:e,holderRoot:e?Mm(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const Sm=.55,G1=.3,Wd=.6,z1=.6,H1=.4,ha=i=>Math.min(Math.max(i,0),1);function V1(i,t){if(t<=i.t0)return 0;if(t>=i.t0+Ie(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=Tn(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function W1(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,d=a-s-.1,f=_=>{const g=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+h*g,i[1]+u*_+l*g]},m=[];for(let _=.15;_+r*.5<=d;_+=r+o){const g=Math.min(_+r,d),[p,v]=f(_),[y,x]=f(g);m.push({ax:p,ay:v,bx:y,by:x,k:(_+g)/2/a})}return m}function jd(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=Sm*e,a=G1*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const Xd=1.6,Ao=2.2,j1=5,X1=5,q1=6,qd=14,K1=4,$1=20,Y1="#E8ECEF",Z1="#8D949B",J1=1.2,Q1=3,tw=.4;function Kd(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(q1*n,s*.5),o=i==="dribble",a=i==="pass"?$1*n:o?qd*n/8:j1*n;return{dashes:W1(t,e,o?K1*n:0,qd*n,r,a,i==="move"?X1*n:0),headScale:r/Sm}}function ew(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function nw(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function da(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=J1}function iw(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const $d=.012,sw=.14,rw=.38,Yd=.15,Am=.3,ow="#bfe333";function aw(i){const t=1-2*Am,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const Eo=1.5,cw=.3,lw=24;function Zd(i){return Yd+(rw-Yd)*ha(i)}function Xc(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=Eo?0:1-s/Eo;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,Eo)/Eo;return Math.min(r,a*Math.max(1-(i-o)/cw,0))}function qc(i,t){for(let e=t+1;e<i.length;e++)if(da(i[e]))return i[e].t0}function uw(i,t){const e=[];for(let n=0;n<i.length;n++)da(i[n])&&Xc(t,i[n],qc(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function hw(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=ss(i,t).pos;return ha(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function dw(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=ss(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||da(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=ss(r,e).pos;return[o[0],o[1]]}function Jd(i,t){const e=ha((i-t)/.06);return Wd+(1-Wd)*e}function fw(i,t){return ha((i-(t-z1))/H1)}const pw=.35;function mw(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+pw}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+Qn})}return n.sort((s,r)=>s.t0-r.t0)}function gw(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const Qd=1e-6;function Kc(i,t,e){return Zp(i,t,e)>0}function _w(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Qd);if(r&&Kc(i.arrivals,r,s.t0-Qd))return{kind:"halo"}}const n=gw(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Kc(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function bw(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const xw=.85;function vw(i,t){return i>0?{draw:t>=i*xw,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const yw=.15,Mw=1e-6;function tf(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function Sw(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function Em(i,t,e,n){var o;const s=ts(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=tf((n-Sw(i,e,s))/yw);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-tf((n-a.windowStart)/Math.max(a.contact-a.windowStart,Mw)));return r}function Aw(i,t,e){var s,r;const n=(r=(s=ts(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function Ew(i,t,e,n){return Kc(i,e,n)||Em(i,t,e,n)>0}const Tw=25;function ww(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function Rw(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(ww(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=jp(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/Tw),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const Cw=.02;function Iw(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=Cw,o)}function Pw(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{Iw(e,n,s,r,o,a,c,t),t=!1}}const ef=new cn,To=new U;class Tm extends f0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new je(t,3)),this.setAttribute("uv",new je(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Dc(e,6,1);return this.setAttribute("instanceStart",new Xn(n,3,0)),this.setAttribute("instanceEnd",new Xn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Dc(e,6,1);return this.setAttribute("instanceColorStart",new Xn(n,3,0)),this.setAttribute("instanceColorEnd",new Xn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new jg(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ef.setFromBufferAttribute(e),this.boundingBox.union(ef))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)To.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(To)),To.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(To));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Ht.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ce(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};En.line={uniforms:tl.merge([Ht.common,Ht.fog,Ht.line]),vertexShader:`
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
		`};class Fl extends xi{constructor(t){super({type:"LineMaterial",uniforms:tl.clone(En.line.uniforms),vertexShader:En.line.vertexShader,fragmentShader:En.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const bc=new Se,nf=new U,sf=new U,nn=new Se,sn=new Se,Zn=new Se,xc=new U,vc=new ge,rn=new op,rf=new U,wo=new cn,Ro=new On,Jn=new Se;let ti,es;function of(i,t,e){return Jn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Jn.multiplyScalar(1/Jn.w),Jn.x=es/e.width,Jn.y=es/e.height,Jn.applyMatrix4(i.projectionMatrixInverse),Jn.multiplyScalar(1/Jn.w),Math.abs(Math.max(Jn.x,Jn.y))}function Lw(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){rn.start.fromBufferAttribute(s,a),rn.end.fromBufferAttribute(r,a),rn.applyMatrix4(e);const u=new U,h=new U;ti.distanceSqToSegment(rn.start,rn.end,h,u),h.distanceTo(u)<es*.5&&t.push({point:h,pointOnLine:u,distance:ti.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Dw(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;ti.at(1,Zn),Zn.w=1,Zn.applyMatrix4(t.matrixWorldInverse),Zn.applyMatrix4(n),Zn.multiplyScalar(1/Zn.w),Zn.x*=r.x/2,Zn.y*=r.y/2,Zn.z=0,xc.copy(Zn),vc.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,f=h;d<f;d++){if(nn.fromBufferAttribute(c,d),sn.fromBufferAttribute(u,d),nn.w=1,sn.w=1,nn.applyMatrix4(vc),sn.applyMatrix4(vc),nn.z>l&&sn.z>l)continue;if(nn.z>l){const y=nn.z-sn.z,x=(nn.z-l)/y;nn.lerp(sn,x)}else if(sn.z>l){const y=sn.z-nn.z,x=(sn.z-l)/y;sn.lerp(nn,x)}nn.applyMatrix4(n),sn.applyMatrix4(n),nn.multiplyScalar(1/nn.w),sn.multiplyScalar(1/sn.w),nn.x*=r.x/2,nn.y*=r.y/2,sn.x*=r.x/2,sn.y*=r.y/2,rn.start.copy(nn),rn.start.z=0,rn.end.copy(sn),rn.end.z=0;const _=rn.closestPointToPointParameter(xc,!0);rn.at(_,rf);const g=kf.lerp(nn.z,sn.z,_),p=g>=-1&&g<=1,v=xc.distanceTo(rf)<es*.5;if(p&&v){rn.start.fromBufferAttribute(c,d),rn.end.fromBufferAttribute(u,d),rn.start.applyMatrix4(o),rn.end.applyMatrix4(o);const y=new U,x=new U;ti.distanceSqToSegment(rn.start,rn.end,x,y),e.push({point:x,pointOnLine:y,distance:ti.origin.distanceTo(x),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class Fw extends we{constructor(t=new Tm,e=new Fl({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)nf.fromBufferAttribute(e,o),sf.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+nf.distanceTo(sf);const r=new Dc(s,2,1);return t.setAttribute("instanceDistanceStart",new Xn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Xn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ti=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;es=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ro.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=es*.5;else{const l=Math.max(s.near,Ro.distanceToPoint(ti.origin));u=of(s,l,c.resolution)}if(Ro.radius+=u,ti.intersectsSphere(Ro)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),wo.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=es*.5;else{const l=Math.max(s.near,wo.distanceToPoint(ti.origin));h=of(s,l,c.resolution)}wo.expandByScalar(h),ti.intersectsBox(wo)!==!1&&(n?Lw(this,e):Dw(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(bc),this.material.uniforms.resolution.value.set(bc.z,bc.w))}}class wm extends Tm{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Nw extends Fw{constructor(t=new wm,e=new Fl({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function Uw(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const af=.55,Rm=.55,cf=.006,kw=i=>1/(1+Math.max(i,0)),Ow=i=>Rm/(1+2*Math.max(i,0)),Bw=.6,Gw=(i,t)=>t>0?i/t*Bw:0,zw=14,Hw=.25,Cm=.25,Co=Math.round(Cm*60)+2,Vw=2,Ww=.5,jw=16774102,Xw=20,yc=.06,Mc=.06,lf=.09;function qw(i){if(!(i>=0)||i>=Mc+lf)return[1,1,1];const t=i<Mc?1:1-(i-Mc)/lf;return[1+yc*t,1-yc*t,1+yc*t]}const Kw=.02,$w=2;let pr=null;function Yw(){if(pr)return pr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),pr=new wn(i),pr.userData.shared=!0,pr}function uf(i){let{bodyScale:t,radius:e}=i;const n=new en({map:Yw(),transparent:!0,depthWrite:!1,opacity:Rm,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new we(new $n(af,af).rotateX(-Math.PI/2),n);s.position.y=cf,s.renderOrder=1,i.root.add(s);const r=new Fl({linewidth:Vw,color:jw,vertexColors:!0,transparent:!0,opacity:Ww,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new wm;o.setPositions(new Float32Array(Co*3)),o.setColors(new Float32Array(Co*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new Nw(o,r);u.frustumCulled=!1,u.renderOrder=Xw,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new U;let f=!1,m=!1,_=-1;const g=new U;function p(){s.scale.setScalar(t)}p();function v(y){const x=f?d.distanceTo(y.pos):0,R=f&&x>$w,M=y.height<=Kw;if(s.visible=!y.held,s.visible&&(s.position.set(y.pos.x,cf,y.pos.z),s.scale.setScalar(t*kw(y.height)),n.opacity=Ow(y.height)),f&&!R&&y.dt>0&&x>1e-9){const{axis:C,angle:k}=Uw([d.x,d.z],[y.pos.x,y.pos.z],e);if(C[0]!==0||C[2]!==0){g.set(C[0],C[1],C[2]);const L=M?k:Gw(x/y.dt,e)*y.dt;L>0&&i.mesh.rotateOnWorldAxis(g,L)}}M&&m&&!R&&(_=y.t),R&&(_=-1),m=!M;const[T,P,A]=_<0?[1,1,1]:qw(y.t-_);if(i.mesh.scale.set(t*T,t*P,t*A),R&&(l.length=0),h&&y.dt>0){for(l.push({t:y.t,p:y.pos.clone()});l.length&&y.t-l[0].t>Cm;)l.shift();for(;l.length>Co;)l.shift()}if(h&&(y.speed>zw||(y.apex??0)>=Hw)&&l.length>=2){const k=l.length-1,L=a.array,F=c.array;for(let Z=0;Z<Co-1;Z++)for(const[B,j]of[[0,Z],[3,Z+1]]){const O=l[Math.min(j,k)].p,et=6*Z+B;L[et]=O.x,L[et+1]=O.y,L[et+2]=O.z;const Q=Math.min(j,k)/k;F[et]=F[et+1]=F[et+2]=Q}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=k,u.visible=!0}else u.visible=!1;d.copy(y.pos),f=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(y,x,R){t=y,e=x,p(),r.resolution.set(R.width,R.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:_})}}const Zw=.055,Jw=.17,ji=.015,hf=2.1,Qw=.16,tR=.1,eR=1.6,nR=.45,iR=.11,sR={technical:rM,tactical:oM,physical:aM,social:cM};function rR(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new wn(i)}function oR(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function aR(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?sR[i.color]??i.color:Ni,r=Math.min(t.width,t.height)*.14;if(oR(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=Qw,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=vw(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new wn(t);return o.colorSpace=He,o}function cR(i){var y,x;const{scene:t,drill:e,schedule:n}=i,s=(...R)=>{for(const M of R)M.traverse(T=>{const P=T.material;for(const A of Array.isArray(P)?P:P?[P]:[])A.toneMapped=!1});t.add(...R)},r=i.pathM??tR,o=R=>R*r*(i.pathWidthK??1),a=bw(i.search??location.search,(y=e.overlays)==null?void 0:y.runPaths),{width:c,length:u}=e.pitch,h=R=>R-c/2,l=R=>R-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(R=>[R.id,R.start])),ballStart:Vo(e),headingAt:i.headingAt},f=iw(e.players,Vo(e),n.attachTo(0)),m=new Map(e.players.map(R=>[R.id,R.team])),_=R=>m.get(R)===f?Y1:Z1,g=[];{const R=B1,M=new Float32Array(R*3),T=new Xe;T.setAttribute("position",new De(new Float32Array(R*2*3),3)),T.setAttribute("color",new De(new Float32Array(R*2*3),3));const P=new Float32Array(R*2*2);for(let B=0;B<R;B++)P.set([0,B/(R-1),1,B/(R-1)],B*4);T.setAttribute("uv",new De(P,2));const A=new Uint16Array((R-1)*6);for(let B=0;B<R-1;B++){const j=B*2;A.set([j,j+1,j+2,j+1,j+3,j+2],B*6)}T.setIndex(new De(A,1));const S=(()=>{const B=document.createElement("canvas");B.width=64,B.height=1;const j=B.getContext("2d"),[O,et,Q]=sM,nt=j.createLinearGradient(0,0,64,0);nt.addColorStop(0,`rgba(${O},${et},${Q},0)`),nt.addColorStop(.28,`rgba(${O},${et},${Q},0.28)`),nt.addColorStop(.44,"rgba(216,247,120,0.8)"),nt.addColorStop(.5,"rgba(255,255,255,1)"),nt.addColorStop(.56,"rgba(216,247,120,0.8)"),nt.addColorStop(.72,`rgba(${O},${et},${Q},0.28)`),nt.addColorStop(1,`rgba(${O},${et},${Q},0)`),j.fillStyle=nt,j.fillRect(0,0,64,1);const ft=new wn(B);return ft.colorSpace=He,ft})(),C=new we(T,new en({map:S,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));C.frustumCulled=!1,C.renderOrder=6,s(C);const k=new U,L=new U,F=new U,Z=O1/(R-1);g.push((B,j)=>{if(C.visible=a.trail,!a.trail)return;for(let Q=0;Q<R;Q++){const nt=Vd(d,B-Q*Z);M[Q*3]=h(nt.pos[0]),M[Q*3+1]=Zw+nt.height,M[Q*3+2]=l(nt.pos[1])}const O=T.getAttribute("position"),et=T.getAttribute("color");F.set(1,0,0);for(let Q=0;Q<R;Q++){const nt=Math.min(Q,R-2);k.set(M[nt*3]-M[nt*3+3],M[nt*3+1]-M[nt*3+4],M[nt*3+2]-M[nt*3+5]),L.set(M[Q*3],M[Q*3+1],M[Q*3+2]).sub(j.position),k.lengthSq()>1e-10&&(k.cross(L),k.lengthSq()>1e-10&&F.copy(k.normalize()));const ft=Math.pow(1-Q/(R-1),1.2),jt=Jw*(.35+.65*ft),it=M[Q*3],ht=M[Q*3+1],dt=M[Q*3+2];O.setXYZ(Q*2,it+F.x*jt,ht+F.y*jt,dt+F.z*jt),O.setXYZ(Q*2+1,it-F.x*jt,ht-F.y*jt,dt-F.z*jt);const V=ft;et.setXYZ(Q*2,V,V,V),et.setXYZ(Q*2+1,V,V,V)}O.needsUpdate=et.needsUpdate=!0})}{const R=[];let M=0,T=0;for(const P of e.events){if(P.type!=="move"&&P.type!=="dribble")continue;const A=(n.moves[P.player]??[]).find(k=>k.t0===P.t&&k.to[0]===P.to[0]&&k.to[1]===P.to[1]);if(!A)continue;const S=Kd(P.type,A.from,A.to,r);if(!S)continue;const C=new he(_(P.player));R.push({m:A,authored:P.runPath===!0,stroke:S,baseR:C.r,baseG:C.g,baseB:C.b,baseA:1,vert0:M,vertCount:S.dashes.length*4+3}),M+=S.dashes.length*4+3,T+=S.dashes.length*6+3}if(R.length){const P=new Float32Array(M*3),A=new Float32Array(M*4),S=new Uint16Array(T);let C=0,k=0;const L=o(Xd)/2;for(const j of R){const O=Math.hypot(j.m.to[0]-j.m.from[0],j.m.to[1]-j.m.from[1])||1,et=-(j.m.to[1]-j.m.from[1])/O,Q=(j.m.to[0]-j.m.from[0])/O;for(const ht of j.stroke.dashes){const dt=C/3;P.set([h(ht.ax+et*L),ji,l(ht.ay+Q*L),h(ht.ax-et*L),ji,l(ht.ay-Q*L),h(ht.bx+et*L),ji,l(ht.by+Q*L),h(ht.bx-et*L),ji,l(ht.by-Q*L)],C),C+=12,S.set([dt,dt+1,dt+2,dt+1,dt+3,dt+2],k),k+=6}const[nt,ft,jt]=jd(j.m.from,j.m.to,j.stroke.headScale),it=C/3;P.set([h(nt[0]),ji,l(nt[1]),h(ft[0]),ji,l(ft[1]),h(jt[0]),ji,l(jt[1])],C),C+=9,S.set([it,it+1,it+2],k),k+=3}const F=new Xe;F.setAttribute("position",new De(P,3)),F.setAttribute("color",new De(A,4)),F.setIndex(new De(S,1));const Z=new we(F,new en({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Z.renderOrder=2,s(Z);const B=F.getAttribute("color");g.push(j=>{if(Z.visible=a.runPaths!=="off",!!Z.visible){for(const O of R){const et=a.runPaths==="authored"&&!O.authored?0:fw(j,O.m.t0),Q=V1(O.m,j);let nt=O.vert0;for(const jt of O.stroke.dashes){const it=O.baseA*et*Jd(jt.k,Q);for(let ht=0;ht<4;ht++)B.setXYZW(nt++,O.baseR,O.baseG,O.baseB,it)}const ft=O.baseA*et*Jd(1,Q);for(let jt=0;jt<3;jt++)B.setXYZW(nt++,O.baseR,O.baseG,O.baseB,ft)}B.needsUpdate=!0}})}}{const R=lw,M=sw/2,T=[-1,-.4,1-2*Am,1],P=T.map(aw),A=T.length,S=n.flights.map((L,F)=>qc(n.flights,F)),C=()=>{const L=new Xe,F=new Float32Array((R+1)*A*3);for(let O=0;O<(R+1)*A;O++)F[O*3+1]=$d;const Z=new Float32Array((R+1)*A*4),B=new Uint16Array(R*(A-1)*6);for(let O=0,et=0;O<R;O++)for(let Q=0;Q<A-1;Q++,et++){const nt=O*A+Q;B.set([nt,nt+1,nt+A,nt+1,nt+A+1,nt+A],et*6)}L.setAttribute("position",new De(F,3)),L.setAttribute("color",new De(Z,4)),L.setIndex(new De(B,1));const j=new we(L,new en({color:ow,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return j.frustumCulled=!1,j.renderOrder=2,j.name="passRibbon",s(j),{mesh:j,posAttr:L.getAttribute("position"),colAttr:L.getAttribute("color")}},k=[C(),C()];g.push(L=>{const F=a.runPaths==="auto"?uw(n.flights,L):[];for(let Z=0;Z<k.length;Z++){const B=k[Z],j=F[F.length-1-Z]??-1;if(B.mesh.visible=j>=0,j<0)continue;const O=n.flights[j],et=Xc(L,O,S[j]),Q=hw(O,L),nt=Math.hypot(O.to[0]-O.from[0],O.to[1]-O.from[1])||1,ft=-(O.to[1]-O.from[1])/nt*M,jt=(O.to[0]-O.from[0])/nt*M,it=O.from[0]+(O.to[0]-O.from[0])*Q,ht=O.from[1]+(O.to[1]-O.from[1])*Q,dt=dw(n.flights,j,L);for(let V=0;V<=R;V++){const xt=V/R,Vt=V===R?dt[0]:O.from[0]+(it-O.from[0])*xt,$t=V===R?dt[1]:O.from[1]+(ht-O.from[1])*xt,re=et*Zd(xt);for(let ie=0;ie<A;ie++){const Ae=T[ie],W=V*A+ie;B.posAttr.setX(W,h(Vt+ft*Ae)),B.posAttr.setZ(W,l($t+jt*Ae)),B.colAttr.setXYZW(W,1,1,1,re*P[ie])}}B.posAttr.needsUpdate=B.colAttr.needsUpdate=!0}})}{const R=(e.equipment??[]).filter(C=>C.type==="goal").map(C=>({x:C.at[0],y:C.at[1],halfW:os(C,la)*i.goalScale})),M=o(Ao)/2,T=[],P=[],A=[],S=[];for(let C=0;C<n.flights.length;C++){const k=n.flights[C];if(!da(k))continue;const L=ew(k,n.arrivals);if(!L&&!k.pop)continue;const F=Math.hypot(k.to[0]-k.from[0],k.to[1]-k.from[1])||1,Z=-(k.to[1]-k.from[1])/F,B=(k.to[0]-k.from[0])/F,j=B,O=-Z;let et=0;if(L){const Q=Q1*2*M/2;P.push({ax:k.to[0]-j*M,ay:k.to[1]-O*M,bx:k.to[0]+j*M,by:k.to[1]+O*M,h:Q,px:Z,py:B});const nt=nw(k.from,k.to,R,o(Ao))??k.to;P.push({ax:k.to[0],ay:k.to[1],bx:nt[0],by:nt[1],h:tw*M,px:Z,py:B}),et=8}else{P.push({ax:k.from[0],ay:k.from[1],bx:k.to[0],by:k.to[1],h:Xd/Ao*M,px:Z,py:B});const Q=Kd("pass",k.from,k.to,r);A.push(jd(k.from,k.to,Q?Q.headScale:0)),et=7}S.push({i:C,verts:et})}if(S.length){const C=S.reduce((dt,V)=>dt+V.verts,0),k=S.reduce((dt,V)=>dt+(V.verts===8?12:9),0),L=new Float32Array(C*3),F=new Float32Array(C*4),Z=new Uint16Array(k);let B=0,j=0,O=0,et=0;const Q=$d,nt=()=>{const dt=P[O++],V=B/3;L.set([h(dt.ax+dt.px*dt.h),Q,l(dt.ay+dt.py*dt.h),h(dt.ax-dt.px*dt.h),Q,l(dt.ay-dt.py*dt.h),h(dt.bx+dt.px*dt.h),Q,l(dt.by+dt.py*dt.h),h(dt.bx-dt.px*dt.h),Q,l(dt.by-dt.py*dt.h)],B),B+=12,Z.set([V,V+1,V+2,V+1,V+3,V+2],j),j+=6};for(const dt of S){const V=B/3;if(dt.verts===8)nt(),nt();else{nt();const[xt,Vt,$t]=A[et++],re=B/3;L.set([h(xt[0]),Q,l(xt[1]),h(Vt[0]),Q,l(Vt[1]),h($t[0]),Q,l($t[1])],B),B+=9,Z.set([re,re+1,re+2],j),j+=3}T.push({flight:dt.i,vert0:V,vertCount:dt.verts})}const ft=new Xe;ft.setAttribute("position",new De(L,3)),ft.setAttribute("color",new De(F,4)),ft.setIndex(new De(Z,1));const jt=new we(ft,new en({color:uM,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));jt.renderOrder=2.5,jt.name="passMarks",s(jt);const it=ft.getAttribute("color"),ht=n.flights.map((dt,V)=>qc(n.flights,V));g.push(dt=>{if(jt.visible=a.runPaths==="auto",!!jt.visible){for(const V of T){const xt=n.flights[V.flight],Vt=dt<xt.t0+xt.duration?0:Xc(dt,xt,ht[V.flight])*Zd(1);let $t=V.vert0;for(let re=0;re<V.vertCount;re++,$t++)it.setXYZW($t,1,1,1,Vt)}it.needsUpdate=!0}})}}{const R=mw(n.departures,n.anims,i.clips),M={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},T=new en({map:rR(),color:Ni,blending:2,transparent:!0,depthWrite:!1}),P=new we(new $n(hf,hf).rotateX(-Math.PI/2),T);P.position.y=.02,P.renderOrder=3,P.name="possessionRing",s(P);const A=i.ballRadius??iR,S=eR*A,C=Ao*r,k=new en({color:Ni,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),L=new we(new ia(Math.max(S-C/2,1e-4),S+C/2,40),k);L.frustumCulled=!1,L.renderOrder=8,L.name="possessionHalo",s(L),g.push((F,Z)=>{const B=_w(M,R,F);P.visible=a.highlight&&B.kind==="ring",L.visible=a.highlight&&(B.kind==="halo"||B.kind==="free");const j=Math.sin(F*2*Math.PI/1.6);if(B.kind==="ring"){const O=Mm(d,B.player,F);P.position.x=h(O[0]),P.position.z=l(O[1]);const et=1+.05*j;P.scale.x=P.scale.z=et,T.opacity=.72+.18*j}else if(B.kind==="halo"||B.kind==="free"){const O=Vd(d,F);L.position.set(h(O.pos[0]),A+O.height,l(O.pos[1])),L.quaternion.copy(Z.quaternion),k.opacity=B.kind==="free"?nR:.72+.18*j}})}const p=[];for(const R of((x=e.overlays)==null?void 0:x.zones)??[]){if(gp.test(R.label??""))continue;const M=new we(new $n(R.w,R.h).rotateX(-Math.PI/2).rotateY(Math.PI),new en({map:aR(R),transparent:!0,depthWrite:!1}));M.position.set(h(R.at[0]),.004,l(R.at[1])),M.renderOrder=.5,s(M),p.push(M)}const v=()=>{for(const R of p)R.visible=a.zones};return v(),{update(R,M){for(const T of g)T(R,M)},set(R){Object.assign(a,R),v()}}}const lR=.16,uR=.25,Im=.8,Pm=.6,Lm=8,hR=Pm*Lm;function dR(i,t){return!(i>=0)||i>=Im||t>hR*i?0:lR*Math.exp(-i/uR)*Math.sin(2*Math.PI*(t/Pm-Lm*i))}function fR(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??pR})}return t}const pR=.6,df=.15,mR=.12,gR=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function ff(i){return gR(Math.min(i,1-i)/mR)}function _R(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let j=0;j<4;j++)o.push([n.getX(j),n.getY(j),n.getZ(j)]);const a=[0,1,2].map(j=>Math.min(...o.map(O=>O[j]))),c=[0,1,2].map(j=>Math.max(...o.map(O=>O[j]))),u=[0,1,2].map(j=>c[j]-a[j]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(j=>j!==h);if(!(u[l]>0&&u[d]>0))return null;const f=(j,O)=>{let et=0,Q=1/0;for(let nt=0;nt<4;nt++){const ft=Math.abs((o[nt][l]-a[l])/u[l]-j)+Math.abs((o[nt][d]-a[d])/u[d]-O);ft<Q&&(Q=ft,et=nt)}return et},m=f(0,0),_=f(1,0),g=f(0,1),p=f(1,1),v=(j,O)=>s?O?s.getY(j):s.getX(j):0,y=new U().setFromMatrixScale(t).x,x=Math.max(2,Math.min(96,Math.ceil(u[l]*y/df))),R=Math.max(2,Math.min(96,Math.ceil(u[d]*y/df))),M=(x+1)*(R+1),T=new Float32Array(M*3),P=new Float32Array(M*2),A=new Float32Array(M*3),S=new Float32Array(M),C=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let j=0;j<=R;j++)for(let O=0;O<=x;O++){const et=j*(x+1)+O,Q=O/x,nt=j/R;T[et*3+h]=o[0][h],T[et*3+l]=a[l]+u[l]*Q,T[et*3+d]=a[d]+u[d]*nt;for(const ft of[0,1])P[et*2+ft]=v(m,ft)*(1-Q)*(1-nt)+v(_,ft)*Q*(1-nt)+v(g,ft)*(1-Q)*nt+v(p,ft)*Q*nt;A.set(C,et*3),S[et]=ff(Q)*ff(nt)}const k=[];for(let j=0;j<R;j++)for(let O=0;O<x;O++){const et=j*(x+1)+O;k.push(et,et+1,et+x+1,et+1,et+x+2,et+x+1)}const L=new Xe;L.setAttribute("position",new De(T,3)),L.setAttribute("uv",new De(P,2)),L.setAttribute("normal",new De(A,3)),L.setIndex(k),L.userData.drillOwned=!0,i.geometry=L;const F=new Float32Array(T),Z=new Float32Array(M*3),B=new U;for(let j=0;j<M;j++)B.fromArray(F,j*3).applyMatrix4(t).toArray(Z,j*3);return{mesh:i,axis:h,rest:F,world:Z,weight:S,scale:y}}function pf(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new ge().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=qn.zMin;i.placed.copy(i.goal.matrixWorld)}function bR(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new ge().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!xR(l))return;const d=_R(l,new ge().multiplyMatrices(a,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new ge,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new U}))};pf(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=vR(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)yR(c);r.dirty=!1;continue}pf(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-o.p.x,f=c.world[l*3+1]-o.p.y,m=c.world[l*3+2]-o.p.z,_=dR(a,Math.hypot(d,f,m))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+_/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const xR=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function vR(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<Im&&(e=n);return e}function yR(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const Nl=new U(0,1,0),Dm=.04,Fm=8,Cr=.1,qs=46,Ks=25,mf=70;function Jo(i,t){return new U(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function fa(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let ns=new Float64Array(64),Io=new Float64Array(64),Po=new Float64Array(64);const Nm=new U,Um=new U,Di=new U;function gf(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+ns[r]/2),s=Math.max(s,-i[r]/(2*e)+ns[r]/2);return n+s}function _f(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-ns[o])*e),r=Math.min(r,i[o]+(n-ns[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Qo(i,t,e,n,s){const r=i.length;ns.length<r&&(ns=new Float64Array(r),Io=new Float64Array(r),Po=new Float64Array(r));const o=Nm.crossVectors(Nl,e).normalize(),a=Um.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let _=0;_<r;_++)Di.subVectors(i[_],t),ns[_]=Di.dot(e),Io[_]=Di.dot(o),Po[_]=Di.dot(a);const h=Math.max(Math.max(gf(Io,r,c),gf(Po,r,u))*(1+Dm),Fm),[l,d]=_f(Io,r,c,h),[f,m]=_f(Po,r,u,h);return{dist:h,offset:new U().addScaledVector(o,l).addScaledVector(a,f),slack:new ce(d,m)}}function MR(i,t,e,n,s){const r=Nm.crossVectors(Nl,e).normalize(),o=Um.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){Di.subVectors(h,t);const l=Di.dot(e);u=Math.max(u,Math.abs(Di.dot(r))/a+l,Math.abs(Di.dot(o))/c+l)}return Math.max(u*(1+Dm),Fm)}function km(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Cr)?!0:r>s*(1+Cr)?!1:n}function Om(i,t,e=qs,n=Ks){const s=new cn().setFromPoints(i),r=s.getCenter(new U),o=s.getSize(new U),{vHalf:a,hHalf:c}=fa(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Qo(i,r,Jo(u,h),a,c).dist,d=Qo(i,r,Jo(u,h+Math.PI/2),a,c).dist,f=km(o.x,o.z,t.aspect<1,d<l*(1-Cr));return{dist:f?d:l,alt:f}}function Sc(i,t,e,n=qs,s=Ks){const{dist:r}=Om(i,t,n,s);return 2*r*Math.tan(fa(t).vHalf)/e}function bf(i=qs){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const $c=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),xf=.6,SR=.8,AR=30,ER=Ks,TR=12,vf=1.03,wR=1.5;function RR(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return vf+(1-vf)*(e*e*(3-2*e))}const CR=2,Yc=.5,IR=i=>{const t=Math.floor(Math.max(i,0)/Yc)*Yc;return[t,t+CR]},PR=.25,LR=.06;function DR(i,t){const e=new U;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(PR)}class FR{constructor(t,e=qs,n=Ks){Pe(this,"target",new U);Pe(this,"wanted",new U);Pe(this,"useAlt",!1);Pe(this,"pushAt",-1);Pe(this,"pushFor",0);Pe(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:RR(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new cn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new U),o=s.getSize(new U),{vHalf:a,hHalf:c}=fa(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*$c(e,xf);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,f=Jo(h,l),m=Jo(h,d),_=Qo(t,r,f,a,c),g=Qo(t,r,m,a,c);!this.useAlt&&g.dist<_.dist*(1-Cr)?this.useAlt=!0:this.useAlt&&_.dist<g.dist*(1-Cr)?this.useAlt=!1:this.useAlt=km(o.x,o.z,this.camera.aspect<1,this.useAlt);const p=this.useAlt?g:_,v=this.useAlt?m:f,y=n.lookAt?r:r.clone().add(p.offset),x=n.lookAt?MR(t,r,v,a,c):p.dist;if(n.breath&&!n.lookAt){const T=new U().crossVectors(Nl,v).normalize(),P=new U().crossVectors(v,T).normalize(),A=LR*p.dist,S=(C,k)=>{const L=Math.min(k,A);return Math.min(Math.max(C,-L),L)};y.addScaledVector(T,S(n.breath.dot(T),p.slack.x)).addScaledVector(P,S(n.breath.dot(P),p.slack.y))}const R=x*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(R).add(y);const M=$c(e,xf);this.camera.position.lerp(this.wanted,M),this.target.lerp(y,M),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const NR=1.8,UR=34,kR=844,OR=1,Bm=4;function yf(i,t,e=qs,n=Ks){const{vHalf:s}=fa(t),r=e*Math.PI/180,{dist:o}=Om(i,t,e,n),a=UR*2*o*Math.tan(s)/(kR*NR*Math.cos(r));return Math.min(Bm,Math.max(OR,a))}function BR(i,t,e,n=qs,s=Ks,r=Bm){const o=h=>Tr(i,Math.min(r,h));let a=o(yf(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(yf([...t,...Oc(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...Oc(i,a)]}}class GR{constructor(){Pe(this,"last",-1);Pe(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Pi={clips:0,schedule:0,build:0};let Mf=null;function zR(){return Mf??(Mf=fetch(bn("assets/clips_ochi.json")).then(i=>i.json()).then(i=>em(i)).catch(i=>{throw Mf=null,i}))}let Sf=null;function HR(i){return Sf??(Sf=gl().loadAsync(bn("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw Sf=null,t}))}function VR(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const Gm="coach";function WR(i){return i.team===Gm||i.number===void 0?void 0:String(i.number)}function jR(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==Gm)??t[0]}const XR=i=>i==="boys"||i==="girls";async function qR(i,t,e,n=jS){if(!XR(e))return;let s=null;try{s=await n(e)}catch{s=null}return $R(i,t,s)}const KR=(i,t,e)=>i===t&&e!==void 0;function $R(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function zm(i,t,e={}){var Bt,It,Xt;const n=performance.now(),s=_M(i),r=await zR();Pi.clips=performance.now()-n;const o=e.stage??ra(t),a=new fn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([tt,G])=>new U(tt*s.pitch.width/2,0,G*s.pitch.length/2)),u=s.players.map(tt=>new U(tt.start[0]-s.pitch.width/2,0,tt.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??BR(s,h,o.camera,e.elev,e.az).scale,d=tt=>[...h,...Oc(s,tt)],f=o.size();let m=l(),_=d(m);vd(.35*m);let g=Tr(s,m);const p=performance.now(),v=((Bt=e.schedules)==null?void 0:Bt.get(g))??o1(s,r,g);(It=e.schedules)==null||It.set(g,v),Pi.schedule=performance.now()-p;const y=PM(s),x=(tt=e.elev??0)=>tt>=mf?[..._,...y]:_;let R=Sc(x(),o.camera,o.size().height,e.elev,e.az),M=bf(e.elev);const T=HM(s.pitch.width,s.pitch.length),{toWorld:P,goals:A,cones:S,boards:C,setWorld:k,setMasts:L}=await uS(a,s,o.renderer.capabilities.getMaxAnisotropy(),m,T),F=bR(A,fR(v.flights),P);let Z=_.slice(h.length);o.fitShadow(_),o.setFog(GM(s.pitch.width,s.pitch.length)),o.setHorizon(T),o.setSky(!1);const B=jR(s.teams),j=await aa(a,s.players.length,void 0,void 0,0,await qR(s.players,B,e.squad)),O=e.kit?await zp(e.kit.pattern,s.players.flatMap((tt,G)=>tt.team===B?Gp(j[G]):[])):null,et=await Hp(),Q=new Map,nt=new Map;s.players.forEach((tt,G)=>{const J=j[G];Q.set(tt.id,J),J.root.rotation.order="YXZ",J.root.scale.setScalar(m);const ot=KR(tt.team,B,e.kit),at=s.teams[tt.team].kit.primary;Vc(J,ot?e.kit:at,ot?O:null,{label:WR(tt),boxes:et,base:at}),J.root.position.copy(P(tt.start));const At=AM(.9);At.scale.setScalar(m),At.position.x=J.root.position.x,At.position.z=J.root.position.z,a.add(At),nt.set(tt.id,At)});const ft=(await HR()).clone();ft.scale.setScalar(m),a.add(ft);const jt=uf({root:a,mesh:ft,bodyScale:m,radius:.11*m,resolution:o.size()}),it=!!s.ball,ht=Vo(s);it||(ft.visible=!1,jt.hide());const dt=Array.from({length:(((Xt=s.balls)==null?void 0:Xt.length)??0)+v.ballSwaps.length},()=>ft.clone()),V=dt.map(tt=>(tt.scale.setScalar(m),a.add(tt),uf({root:a,mesh:tt,bodyScale:m,radius:.11*m,resolution:o.size(),streak:!1}))),xt=new FR(o.camera,e.elev,e.az);xt.armPushIn(wR,performance.now()/1e3);let Vt="fit",$t=-1,re=[];const ie=new U,Ae=new U,W=new U;let Gt=!1,se=[],fe=-1/0;const Lt=new h1(s.duration,e.loop??!0),Ce=new GR,te=new Map(s.players.map(tt=>[tt.id,tt.role])),{applyAnim:I,cueAt:w}=u1(r,v.anims,te,v.bounces),K=d1(v.turns,s.players.map(tt=>[tt.id,tt.role==="keeper"?ze(tt.start,ht):0])),ct=K.heading,vt=K.rateOf,lt=new Map(s.players.map(tt=>[tt.id,tt.start]));function Yt(){const tt=new Set(a.children);return{built:cR({scene:a,drill:s,schedule:v,clips:r,headingAt:J=>ct.get(J)??0,search:e.search,pathM:R,pathWidthK:M,ballRadius:.11*m,goalScale:g}),owned:a.children.filter(J=>!tt.has(J))}}let wt=Yt();const Ft={},_e={update:(tt,G)=>wt.built.update(tt,G),set:tt=>{Object.assign(Ft,tt),wt.built.set(tt)}};function St(){for(const tt of wt.owned)a.remove(tt),yl(tt);wt=Yt(),wt.built.set(Ft)}const Wt=E1(),oe=[],ae=L1(),Kt=()=>{ae.reset(),Wt.reset()};Lt.onSeek(Kt),Lt.onLoop(Kt);const be=Pw(Lt);function Tt(){const tt=l();if(tt!==m){m=tt,_=d(m),Z=_.slice(h.length),g=Tr(s,m),vd(.35*m);for(const G of Q.values())G.root.scale.setScalar(m);for(const G of nt.values())G.scale.setScalar(m);ft.scale.setScalar(m);for(const G of dt)G.scale.setScalar(m);for(const G of S)G.scale.setScalar(m);for(const G of C)Ap(G,m);for(const G of A)G.scale.setScalar(g);o.fitShadow(_),Kt()}jt.resize(m,.11*m,o.size());for(const G of V)G.resize(m,.11*m,o.size());R=Sc(x(xt.elev),o.camera,o.size().height,xt.elev,xt.az),St(),o.rule.wake()}let gt=0;const q=o.onBox(()=>{gt||(gt=requestAnimationFrame(()=>{gt=0,Tt()}))}),Nt=o.size();(Nt.width!==f.width||Nt.height!==f.height)&&Tt();const rt=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Q,heading:ct,camera:o.camera,ball:ft,spare:dt,schedule:v,goals:A,bodyScale:m,lockDbg:rt},__pathMetrics:()=>({metresPerPx:R,widthK:M,runHalfM:1.6*R*M/2,passHalfM:2.2*R*M/2})});function _t(tt,G=30,J=.12,ot=4,at=1){const At=[];for(const[H,z]of Q)z.root.traverse(X=>{X.isBone&&/foot/i.test(X.name)&&At.push({id:H,name:X.name,bone:X})});Lt.pause(),Lt.seek(0);for(let H=0;H<90;H++)o.step(1/60);Lt.play();const Ut=1/G,Pt=Math.min(tt??s.duration,s.duration),pe=Math.max(0,Math.round(Pt*G)-1),Mt=At.map(()=>[]),ve=new U;for(let H=0;H<=pe;H++){for(let z=0;z<At.length;z++){const X=At[z].bone.matrixWorld.elements;ve.set(X[12],X[13],X[14]);const N=Q.get(At[z].id).root.worldToLocal(ve.clone());Mt[z].push([H*Ut,X[12],X[13],X[14],N.x,N.z])}o.step(Ut)}Lt.pause();const qt=(H,z)=>{var X;return((X=w(H,z))==null?void 0:X.clip)??"idle"},E=[];return At.forEach((H,z)=>{const X=(pt,bt)=>{if(bt-pt<ot)return;const $=Mt[z].slice(pt,bt);let Et=0,Rt=0;for(let yt=1;yt<$.length;yt++)Et=Math.max(Et,Math.hypot($[yt][1]-$[0][1],$[yt][3]-$[0][3])),Rt+=Math.hypot($[yt][4]-$[yt-1][4],$[yt][5]-$[yt-1][5])/Ut;E.push({player:H.id,foot:H.name,t0:+$[0][0].toFixed(2),t1:+$[$.length-1][0].toFixed(2),drift:+Et.toFixed(3),localSpeed:+(Rt/($.length-1)).toFixed(2),clip0:qt(H.id,$[0][0]),clip1:qt(H.id,$[$.length-1][0])})},N=Mt[z].map((pt,bt)=>bt===0?1/0:Math.hypot(pt[1]-Mt[z][bt-1][1],pt[3]-Mt[z][bt-1][3])/Ut);let st=-1;Mt[z].forEach((pt,bt)=>{const $=pt[2]<J,Et=bt>0&&qt(H.id,pt[0])!==qt(H.id,Mt[z][bt-1][0]),Rt=N[bt]>at&&bt>0&&N[bt-1]>at;st>=0&&(!$||Et||Rt)&&(X(st,bt),st=-1),st<0&&$&&N[bt]<at&&(st=bt)}),st>=0&&X(st,Mt[z].length)}),E.sort((H,z)=>z.drift-H.drift),{feet:At.map(H=>({id:H.id,name:H.name})),hPlant:J,fps:G,phases:E}}e.embed||Object.assign(window,{__footAudit:_t}),e.embed&&o.rule.enable();const Ot=new Map,zt=new U;let de=0;const D=e.sfx?Rw(v.flights):[];let b=0;o.scene.add(a);const ut=(tt,G)=>{var ve,qt,E,H;Lt.advance(tt);const J=Lt.t,ot=Lt.playing?tt:0,at=v.attachTo(J),At=Bo({t:J,holderId:at,holderRoot:at?lt.get(at):null,holderHeading:at?ct.get(at):0,ballStart:ht,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos;for(const z of s.players){const X=Q.get(z.id);let N=z.start,st=0;for(const ne of v.moves[z.id]??[])if(J>=ne.t0){const xe=Tn(ne,J);N=xe.pos,st=xe.speed}const pt=tm(v.dives,v.moves[z.id],z.id,J),bt=pt!==null;pt&&(N=pt),X.root.position.copy(P(N));const $=v.moves[z.id]??[],Et=bt?0:cA($,J);X.root.rotation.x=0,X.root.rotation.z=0,bt||(X.root.position.y-=dA($,J)-jT(v.bounces,z.id,J)*m),lt.set(z.id,N);let Rt=null,yt=!1;for(const ne of v.faces)ne.player===z.id&&J>=ne.t0&&(Rt=ne.until===void 0||J<=ne.until?ne.at:null,ne.lock&&J>=ne.lock[0]&&J<=ne.lock[1]&&(yt=!0));const Qt=Rt!==null&&Zi(N,Rt),le=xA(N,At,Qt,z.id===at),ue=Qt?ze(N,Rt):le??ct.get(z.id),{h:kt,clipYaw:Zt}=K.step(z.id,J,ot,st,ue,yt,!Qt&&le!==null);X.root.rotation.y=fA(kt,Zt),I(z.id,X,J,ot,st);const Dt=Fh(X);if(Dt.length){const ne=ae.tilt(z.id,bt?[0,0]:oA($,J),ct.get(z.id),Et,ot);Hd(X.root,Dt[0],ne.pitch,0,ne.roll)}const Ee=zS(X);if(Ee.length&&!bt){X.root.updateMatrixWorld(!0);for(let me=0;me<Ee.length;me++){const ke=Ee[me].matrixWorld.elements;oe[me]=[ke[12],ke[13],ke[14]]}oe.length=Ee.length;const ne=w(z.id,J),xe=A1((ne==null?void 0:ne.clip)??null,ne?(ve=r.clips[ne.clip])==null?void 0:ve.category:void 0,M1($,J)),[Ge,vn]=Wt.step(z.id,oe,[X.root.position.x,X.root.position.z],J,ot,xe,m);X.root.position.x+=Ge,X.root.position.z+=vn,rt&&rt.set(z.id,[xe?1:0,Math.hypot(Ge,vn),Wt.foot(z.id),st,Wt.rootSpeed(z.id)])}const ee=nt.get(z.id);if(ee.position.x=X.root.position.x,ee.position.z=X.root.position.z,z.id===at){const ne=Aw(v.arrivals,z.id,J),xe=ne>=0?HS(X)[ne]:void 0;if(xe){X.root.updateMatrixWorld(!0);const Ge=xe.matrixWorld.elements;zt.set(Ge[12],Ge[13],Ge[14]),de=Em(v.arrivals,v.departures,z.id,J)}}}const Ut=Bo({t:J,holderId:at,holderRoot:at?lt.get(at):null,holderHeading:at?ct.get(at):0,ballStart:ht,flights:v.flights,departures:v.departures,arrivals:v.arrivals});ft.position.copy(P(Ut.pos,.11*m+Ut.height)),de>0&&(ft.position.lerp(zt,de),de=0),it&&jt.update({pos:ft.position,height:Ut.height,t:J,dt:ot,apex:Ut.apex,speed:Ut.speed,held:at!==null&&Ew(v.arrivals,v.departures,at,J)});for(let z=0;z<dt.length;z++){const X=(qt=s.balls)==null?void 0:qt[z],N=X?v.ballSwaps.find(bt=>bt.take===z):v.ballSwaps[z-(((E=s.balls)==null?void 0:E.length)??0)],st=X?!(N&&J>=N.t):J>=N.t;if(dt[z].visible=st,!st){V[z].hide();continue}let pt;X?X.carrier&&lt.has(X.carrier)?pt=Wn(lt.get(X.carrier),ct.get(X.carrier)??0):pt=Xp(X,J):pt=N.drop,dt[z].position.copy(P(pt,.11*m)),V[z].update({pos:dt[z].position,height:0,t:J,dt:ot,held:!1,speed:0})}e.sfx&&(be(e.sfx,D,b,J,Lt.playing,Ut.height,Ut.speed),b=J),_e.update(J,o.camera),F.update(J);for(const z of s.players){const X=Q.get(z.id),N=GS(X);if(!N)continue;const st=IT(v.faces,z.id,J),pt=st?P(st):ft.position,bt=pA(Math.atan2(pt.x-X.root.position.x,pt.z-X.root.position.z)-ct.get(z.id)+_A(vt.get(z.id)??0)),$=Ot.get(z.id)??0,Et=ot>0?$+(bt-$)*.3:$;Ot.set(z.id,Et);const Rt=Fh(X),yt=Rt.length>1?ae.shoulder(z.id,Et,ot):0;Rt.length>1&&Hd(X.root,Rt[1],0,yt,0),N1(N,-(Et-yt))}const Pt=[...Q.values()].map(z=>new U(z.root.position.x,0,z.root.position.z)),pe=o.rule.snap()?1/0:tt,Mt=G/1e3;if(Vt==="broadcast"){let z=-1/0;for(const N of v.departures)J>=N.contact&&N.contact>z&&(z=N.contact);z!==fe&&(fe=z,se=s.players.filter(N=>P(lt.get(N.id)??N.start).distanceTo(ft.position)<=TR).map(N=>N.id)),!Gt||pe===1/0?(W.copy(ft.position),Gt=!0):W.lerp(ft.position,$c(tt,SR));const X=se.length?se.map(N=>{const st=Q.get(N);return new U((st==null?void 0:st.root.position.x)??0,0,(st==null?void 0:st.root.position.z)??0)}):Pt;xt.frame([...X,ft.position.clone()],pe,{now:Mt,lookAt:W.clone(),elevDeg:AR,azDeg:ER})}else{const[z,X]=IR(J);if(z!==$t){$t=z,re=[];const N=[];for(let st=z;st<=X+1e-9;st+=Yc){const pt=new Map;for(const Rt of s.players){let yt=Rt.start;for(const le of v.moves[Rt.id]??[])st>=le.t0&&(yt=Tn(le,st).pos);pt.set(Rt.id,yt);const Qt=P(yt);re.push(new U(Qt.x,0,Qt.z)),Math.abs(Qt.x)<=s.pitch.width/2&&Math.abs(Qt.z)<=s.pitch.length/2&&N.push(new U(Qt.x,0,Qt.z))}const bt=v.attachTo(st),$=Bo({t:st,holderId:bt,holderRoot:bt?pt.get(bt)??null:null,holderHeading:bt?ct.get(bt)??0:0,ballStart:ht,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),Et=P($.pos);N.push(new U(Et.x,0,Et.z))}ie.copy(DR(N,Ae))}Pt.push(...re),Pt.push(...c,...Z),xt.elevNow>=mf&&Pt.push(...y),xt.frame([...Pt,ft.position.clone()],pe,{now:Mt,breath:ie})}Ce.tick(G),VR(!!e.embed,`t ${J.toFixed(1)}s  fps ${Ce.avg.toFixed(0)}
[space] play/pause  [r] restart`),(H=e.onFrame)==null||H.call(e,J,G)};o.start(ut);const mt=tt=>{tt.code==="Space"&&(Lt.playing?Lt.pause():Lt.play()),tt.code==="KeyR"&&Lt.seek(0)};e.embed||addEventListener("keydown",mt);function Y(tt){tt!==Vt&&(Vt=tt,k(!0),o.setSky(tt==="broadcast"),L(tt==="broadcast"),Gt=!1,fe=-1/0,o.rule.wake())}function Ct(tt,G=xt.az){tt===xt.elev&&G===xt.az||(xt.setElev(tt),xt.setAz(G),R=Sc(x(tt),o.camera,o.size().height,tt,G),M=bf(tt),St(),o.rule.wake())}return Pi.build=performance.now()-n-Pi.clips-Pi.schedule,{timeline:Lt,step:tt=>o.step(tt),stage:o,overlays:_e,setCamera:Ct,setFollow:Y,setPushIn:tt=>xt.armPushIn(tt,performance.now()/1e3),dispose(){removeEventListener("keydown",mt),q(),gt&&(cancelAnimationFrame(gt),gt=0),o.scene.remove(a),Cp(a,[...j.map(tt=>tt.root),ft,...dt,...A]),O==null||O.dispose(),o.setFog(null),o.setHorizon(null),o.setSky(!0),e.stage?o.park(ut):o.dispose()}}}const Af="Shirt Soccer Man B",YR={boys:Af,mixed:Af,girls:"Shirt Soccer Woman A"},ZR="10",Ef=12,JR=23.9,QR=32,tC=4,Us={shirt:{top:1.055856,bottom:.512852,fill:.88},full:{top:1.014873,bottom:-.142881,fill:.92}},eC=.35,nC=Us.shirt.top,iC=Us.shirt.bottom;Us.shirt.fill;const $i=.62,Tf=.09,wf=3,sC=.86,rC=.002,oC=724752,Ac=90,aC=.014,cC=.5,Ec=[2.6,5],Rf=1.15,Cs=.14,Tc=.1,lC=.26,uC=.02,hC="idle_relaxed_c",Cf=[hC,"idle_relaxed_a","idle_a","idle_b"];async function dC(i,t,e={}){var te;const n=e.stage??ra(i),s=n.scene,r=new fn;let o=!0;const a=s.children.find(I=>I.isDirectionalLight),c=s.children.find(I=>I.isHemisphereLight),u={background:s.background,fog:s.fog,sun:a&&{position:a.position.clone(),intensity:a.intensity,colour:a.color.clone(),normalBias:a.shadow.normalBias},hemi:c&&{sky:c.color.clone(),ground:c.groundColor.clone(),intensity:c.intensity}};s.background=new he(oC),s.fog=null,a&&(a.position.set(-3.2,4.4,3.6),a.color.set(16773856),a.intensity=3.2,a.shadow.normalBias=.02),c&&(c.color.set(10466248),c.groundColor.set(724752),c.intensity=.7);const h=new dl(12374240,1.35);h.position.set(2.8,2.2,-3.4),r.add(h,h.target);const l=new d0(9082530,1.35);r.add(l);const d=new we(new Ar($i,$i*1.04,Tf,48),new vi({color:1448991,roughness:.85,metalness:0}));d.position.y=-Tf/2,d.receiveShadow=!0,r.add(d);const f=fC((te=e.maskDeps)==null?void 0:te.loader);let m;const _=Promise.race([f,new Promise(I=>{m=setTimeout(()=>I(null),kp)})]),g=await VS(e.material??YR[e.squad??Ml]),[p]=await aa(r,1,void 0,void 0,Math.max(g,0));p.root.traverse(I=>{I.castShadow=I.type==="SkinnedMesh"});let v=await zp([...Hc],Gp(p),e.maskDeps);const y=await Hp(e.maskDeps),x={label:ZR,boxes:y};let R=Vc(p,t,v,x),M=null;const P=(e.clip?[e.clip,...Cf]:Cf).find(I=>p.clips.has(I))??[...p.clips.keys()][0],A=P?p.mixer.clipAction(p.clips.get(P)):null;A==null||A.play();const S=await _;clearTimeout(m),S?r.add(S):f.then(I=>{I&&(o?r.add(I):yl(I))}).catch(()=>{}),s.add(r),p.mixer.update(1/60),p.root.updateWorldMatrix(!0,!0);const C=new cn().setFromObject(p.root,!0),k=Math.max(.5,C.max.y-C.min.y),L={fov:n.camera.fov,near:n.camera.near,far:n.camera.far},F=n.camera;F.fov=JR,F.near=.1,F.far=60;const Z=new U(0,C.min.y+k*(nC+iC)/2,0);let B=oa,j=Us[B],O=j,et=1;const Q=I=>1-(1-I)**3;function nt(){const I=et>=1?1:Q(et),w=Ft=>I>=1?O[Ft]:j[Ft]+(O[Ft]-j[Ft])*I,K=w("top"),ct=w("bottom");Z.y=C.min.y+k*(K+ct)/2;const lt=k*(K-ct)/w("fill")/2/Math.tan(F.fov*Math.PI/360),Yt=QR*Math.PI/180,wt=tC*Math.PI/180;F.position.set(Math.sin(Yt)*Math.cos(wt)*lt,Z.y+Math.sin(wt)*lt,Math.cos(Yt)*Math.cos(wt)*lt),F.lookAt(Z),F.updateProjectionMatrix()}nt(),n.fitShadow([new U(-$i,0,-$i),new U($i,k,$i)]),n.setSky(!1);const ft=n.onBox(nt);F.updateMatrixWorld(!0);const jt=new U(0,Z.y+k*.22,0),it=new Float32Array(Ac*3),ht=new U,dt=new U,V=new op(F.position,jt),xt=new U,Vt=Math.tan(F.fov*Math.PI/360),$t=Vt*F.aspect,re=F.position.distanceTo(new U(0,Z.y,0)),ie=I=>{for(const w of[-Cs,Cs])for(const K of[-Tc,Tc])for(const ct of[-Cs,Cs])if(dt.set(I.x+w,I.y+K,I.z+ct),dt.y<.03||dt.distanceTo(F.position)<re+uC||(V.closestPointToPoint(dt,!0,xt),xt.distanceTo(dt)<lC))return!1;return!0};for(let I=0,w=0;I<Ac&&w<Ac*40;w++){const K=Ec[0]+Math.random()*(Ec[1]-Ec[0]);ht.set((Math.random()*2-1)*$t*K*Rf,(Math.random()*2-1)*Vt*K*Rf,-K).applyMatrix4(F.matrixWorld),ie(ht)&&(ht.toArray(it,I*3),I++)}const Ae=new Qf(new Xe().setAttribute("position",new De(it,3)),new ol({color:Ni,size:aC,transparent:!0,opacity:cC,depthWrite:!1}));r.add(Ae),e.framing&&e.framing!==B&&(B=e.framing,j=O=Us[B],nt());let W=t,Gt=0;function se(I){Gt=(I%1+1)%1,p.root.rotation.y=Gt*Math.PI*2,d.rotation.y=p.root.rotation.y}let fe=0;function Lt(I){var w;se(Gt+I/Ef),fe+=I,Ae.position.set(Math.sin(fe*.043)*Cs,Math.sin(fe*.4)*Tc,Math.sin(fe*.031)*Cs),et<1&&(et=Math.min(1,et+I/eC),nt()),M&&(M.at+=I/sA,Hh(M.mats,M.at)>=1&&(M=null)),p.mixer.update(I),(w=e.onFrame)==null||w.call(e,Gt*Ef,performance.now())}const Ce=I=>Lt(I);return e.embed&&n.rule.enable(),n.start(Ce),n.rule.play(),{stage:n,step:Lt,setTurn:se,get framing(){return B},clip:P??"",bodyBox:[C.min.y,C.max.y],setFraming(I){if(I===B)return;const w=et>=1?1:Q(et),K=ct=>w>=1?O[ct]:j[ct]+(O[ct]-j[ct])*w;j={top:K("top"),bottom:K("bottom"),fill:K("fill")},B=I,O=Us[I],et=0,n.rule.wake()},async setKit(I){const w=W;W=I,R=Vc(p,I,v,{...x,from:w}),M={at:0,mats:R},Hh(R,0),n.rule.wake()},dispose(){o=!1,ft(),s.remove(r),p.mixer.stopAllAction(),Cp(r,[p.root]),v==null||v.dispose(),s.background=u.background,s.fog=u.fog,a&&u.sun&&(a.position.copy(u.sun.position),a.intensity=u.sun.intensity,a.color.copy(u.sun.colour),a.shadow.normalBias=u.sun.normalBias),c&&u.hemi&&(c.color.copy(u.hemi.sky),c.groundColor.copy(u.hemi.ground),c.intensity=u.hemi.intensity),Object.assign(F,L),F.updateProjectionMatrix(),e.stage?n.park(Ce):n.dispose()}}}async function fC(i){mr||(mr=(async()=>{let r;try{r=await(i??new ll).loadAsync(bn("assets/turf.webp"))}catch{return null}return r.colorSpace=He,r.wrapS=r.wrapT=1e3,r.repeat.set(wf,wf),r.anisotropy=8,r.needsUpdate=!0,r.userData.shared=!0,r})().catch(()=>null),mr.then(r=>{r||(mr=null)}));const t=await mr;if(!t)return null;const e=new vi({map:t,roughness:1,metalness:0,transparent:!0,depthWrite:!1}),n=pC();n&&(e.alphaMap=n),Lo||(Lo=new na($i,64),Lo.userData.shared=!0);const s=new we(Lo,e);return s.rotation.x=-Math.PI/2,s.position.y=rC,s.receiveShadow=!0,s}let mr=null,Lo=null,wc=null;function pC(){if(wc)return wc;if(typeof document>"u")return null;const i=128,t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d");if(!e)return null;const n=e.createRadialGradient(i/2,i/2,i/2*sC,i/2,i/2,i/2);n.addColorStop(0,"#ffffff"),n.addColorStop(1,"#000000"),e.fillStyle=n,e.fillRect(0,0,i,i);const s=new wn(t);return s.colorSpace="",s.userData.shared=!0,wc=s,s}const Hm="assets/narration/",mC=new Set(["progression","why"]),If=i=>Math.round(i*100)/100,Fi=1;function gC(i,t,e){const n=t.map((h,l)=>({l:h,index:l})).filter(h=>h.l.beat==="take");if(n.length){const h=i?e[i]:void 0,l=typeof h=="number"&&Number.isFinite(h)&&h>0,d=l?h/Fi:0,f=n.map(y=>(y.l.text??"").length),m=f.reduce((y,x)=>y+x,0)||1,_=[];let g=0;for(const y of f)_.push(If(g/m*d)),g+=y;const p=t.map((y,x)=>({index:x,clip:null,hold:y.hold??0,tail:!1}));l&&n.forEach((y,x)=>{const R=x+1<n.length?_[x+1]:d;p[y.index]={index:y.index,clip:x===0?i:null,hold:If(R-_[x]),tail:!1,...x>0?{at:_[x]}:{}}});const v=l?p[n[0].index]:null;return{lines:p,hook:null,tail:[],queue:v?[v]:[],script:v?[i]:[],hasAudio:l,take:!0}}let s=0,r=-1;const o=[],a=t.map((h,l)=>{const d=h.beat==="action"?`action-${++s}`:h.beat,f=i&&d?`${i}-${d}`:null,m=f?e[f]:void 0,_=typeof m=="number"&&Number.isFinite(m)&&m>0?f:null,g={index:l,clip:_,hold:_?m/Fi:h.hold??0,tail:mC.has(h.beat??"")};return h.beat==="hook"?r=l:g.tail&&o.push(g),g}),c=r<0?null:a[r],u=a.filter(h=>h!==c&&h.clip!==null);return{lines:a,hook:c,tail:o,queue:u,script:[...c!=null&&c.clip?[c.clip]:[],...u.map(h=>h.clip)],hasAudio:a.some(h=>h.clip!==null),take:!1}}async function _C(i=bn(Hm)){try{const t=await fetch(`${i}index.json`);if(!t.ok)return{};const e=await t.json();return e&&typeof e=="object"?e:{}}catch{return{}}}const bC=.0056,xC=.01;function vC(i){const t=i.length,e=i.sampleRate,n=Math.max(1,Math.round(e*xC)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const u=Math.min(c+n,t);let h=0,l=0;for(const d of s)for(let f=c;f<u;f++)h+=d[f]*d[f],l++;return l>0&&Math.sqrt(h/l)>bC};let o=-1,a=-1;for(let c=0;c<t;c+=n)if(r(c)){o=c;break}if(o<0)return{lead:0,tail:0,end:t/e};for(let c=Math.floor((t-1)/n)*n;c>=0;c-=n)if(r(c)){a=Math.min(c+n,t);break}return{lead:o/e,tail:Math.max((t-a)/e,0),end:a/e}}function Pf(i,t,e){return t&&e?Math.max(i-(e.lead+e.tail)/Fi,0):i}function yC(i,t,e){if(!e)return i.hold;const n=i.at===void 0?e.lead:0;return Math.max(i.hold-(n+(t?e.tail:0))/Fi,0)}const MC=40,SC=3,AC=.75,EC=1.5,Zc="data:audio/wav;base64,UklGRiwAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQgAAACAgICAgICAgA==";function ta(i){return(i==null?void 0:i.name)!=="AbortError"}class TC{constructor(t=bn(Hm),e=n=>new Audio(n)){Pe(this,"blocked",!1);Pe(this,"shared",null);Pe(this,"srcNow","");Pe(this,"unlocked",!1);Pe(this,"el",null);Pe(this,"finish",null);Pe(this,"held",new Map);Pe(this,"inflight",new Map);Pe(this,"trims",new Map);Pe(this,"ctx",null);Pe(this,"noCtx",!1);Pe(this,"gen",0);Pe(this,"walks",0);Pe(this,"playing",null);Pe(this,"playGen",0);Pe(this,"arm",null);Pe(this,"onTrim",null);Pe(this,"onStarted",null);this.dir=t,this.make=e}setDir(t){if(t!==this.dir){this.dir=t;for(const[e,n]of this.held)if(e!==this.playing)try{URL.revokeObjectURL(n)}catch{}this.held.clear(),this.inflight.clear()}}fetched(){return[...this.held.keys()]}open(t){var n;if(!this.shared)return this.shared=this.make(t),this.srcNow=t,this.shared;const e=this.shared;if(this.srcNow!==t){this.srcNow=t;try{e.src=t}catch{}try{(n=e.load)==null||n.call(e)}catch{}}return e}unlock(){if(!this.unlocked&&(this.unlocked=!0,this.blocked=!1,this.playing===null))try{const t=this.open(Zc);Promise.resolve(t.play()).then(()=>{if(this.playing===null)try{t.pause()}catch{}}).catch(()=>{})}catch{}}newGeneration(){this.gen++}trim(t){return this.trims.get(t)}remaining(t){const e=this.el;if(!e||this.playing!==t)return;const n=this.trims.get(t),s=n&&n.tail>0?Math.min(n.end,e.duration):e.duration;if(Number.isFinite(s))return Math.max((s-(e.currentTime||0))/(e.playbackRate||1),0)}closeCtx(){const t=this.ctx;this.ctx=null;try{Promise.resolve(t==null?void 0:t.close()).catch(()=>{})}catch{}}async measure(t,e){var n,s;if(!(this.trims.has(t)||this.noCtx))try{if(!this.ctx){const a=globalThis,c=a.AudioContext??a.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await e.arrayBuffer()).slice(0));if(!r)return;const o=vC(r);this.trims.set(t,o),this.playing===t&&((n=this.arm)==null||n.call(this,o),(s=this.onTrim)==null||s.call(this,t,o))}catch{}}touch(t){const e=this.held.get(t);if(e!==void 0)return this.held.delete(t),this.held.set(t,e),e}async prefetch(t){if(this.touch(t)!==void 0||this.inflight.has(t))return;const e=this.pull(t);this.inflight.set(t,e);try{await e}finally{this.inflight.delete(t)}}async pull(t){try{const e=await fetch(`${this.dir}${t}.m4a`);if(!e.ok)return;const n=await e.blob(),s=URL.createObjectURL(n);this.held.set(t,s),await this.measure(t,n);for(const r of[...this.held.keys()]){if(this.held.size<=MC)break;if(r===this.playing)continue;const o=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(o)}catch{}}}catch{}}async prefetchAll(t){const e=this.gen;this.walks++;try{for(const n of t){if(e!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(t,e=0,n=0){if(!this.held.has(t)&&this.inflight.has(t)){this.stop();const s=this.playGen;return this.waitHeld(t).then(()=>s===this.playGen?this.start(t,e,n):void 0)}return this.start(t,e,n)}waitHeld(t){const e=this.inflight.get(t);if(!e)return Promise.resolve();let n;return Promise.race([e.catch(()=>{}),new Promise(s=>{n=setTimeout(s,AC*1e3)})]).then(()=>{n!==void 0&&clearTimeout(n)})}start(t,e,n){this.stop();let s;try{s=this.open(this.touch(t)??`${this.dir}${t}.m4a`)}catch{return Promise.resolve()}try{s.preservesPitch=!0,s.webkitPreservesPitch=!0,s.playbackRate=Fi}catch{}try{s.currentTime=n}catch{}this.el=s;const r=this.trims.get(t);return new Promise(o=>{let a,c,u=()=>{},h,l,d,f,m;const _=(T,P)=>{if(P)try{s.removeEventListener(T,P)}catch{}};let g=!1;const p=()=>{g||(g=!0,a!==void 0&&(clearTimeout(a),a=void 0),c!==void 0&&(clearTimeout(c),c=void 0),_("timeupdate",h),h=void 0,_("playing",l),l=void 0,_("loadedmetadata",d),d=void 0,_("playing",f),f=void 0,_("timeupdate",m),m=void 0,_("ended",p),_("error",p),this.el===s&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),o())};this.finish=p,s.addEventListener("ended",p),s.addEventListener("error",p);let v=!1;const y=T=>{if(v||!(T.lead>0||T.tail>0))return;v=!0;const P=()=>{if(T.lead>s.currentTime)try{s.currentTime=T.lead}catch{}const A=Math.min(T.end,s.duration);if(!(T.tail>0)||!Number.isFinite(A)||A<=0)return;let S=-1;const C=()=>{if(s.currentTime>S&&s.currentTime<A){k();return}try{s.pause()}catch{}p()},k=()=>{a!==void 0&&clearTimeout(a),S=s.currentTime||0;const L=(A-S)/(s.playbackRate||1);a=setTimeout(C,Math.max(L,0)*1e3)};h=()=>{s.currentTime>=A?C():s.currentTime>0&&k()},s.addEventListener("timeupdate",h),l=()=>{k(),u()},s.addEventListener("playing",l),k()};(s.readyState??0)>=1?P():(d=P,s.addEventListener("loadedmetadata",d))};this.playing=t,this.arm=y,r&&y(r);{const T=Number.isFinite(s.duration)&&s.duration>0?s.duration:e;if(T>0){let P=-1;const A=()=>{if(s.currentTime>P){u();return}try{s.pause()}catch{}p()};u=()=>{c!==void 0&&clearTimeout(c),P=s.currentTime||0;const S=Math.max(T-P,0)/(s.playbackRate||1);c=setTimeout(A,(S+SC)*1e3)},u()}}let x=!1;const R=()=>{var T;x||(x=!0,_("playing",f),f=void 0,_("timeupdate",m),m=void 0,this.el===s&&((T=this.onStarted)==null||T.call(this,t)))};f=R,m=()=>{(s.currentTime||0)>0&&R()};let M=!1;try{s.addEventListener("playing",f),s.addEventListener("timeupdate",m),M=!0}catch{}M||(f=void 0,m=void 0);try{Promise.resolve(s.play()).then(()=>{this.blocked=!1}).catch(T=>{console.warn(`narration: play() rejected ${String((T==null?void 0:T.name)??T)} for ${t}`),ta(T)&&(this.blocked=!0),p()})}catch(T){ta(T)&&(this.blocked=!0),p()}M||R()})}stop(){this.playGen++;const t=this.el,e=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{t==null||t.pause()}catch{}e==null||e()}}const wC="assets/sfx/",RC=.9,CC=.35,IC=.45,PC=.06,LC=["kick-soft-1","kick-soft-2","kick-soft-3"],DC=["kick-hard-1","kick-hard-2"],Rc=.3,FC=6,NC=.25,Lf=.04,UC=.001,Df=.125,Jc=400,kC=Jc/3e3,Ff=25,OC=.5;function BC(i){if(!(i>Rc))return 0;const t=(i-Rc)/(FC-Rc);return NC*Math.min(t,1)}function Ul(){const i=globalThis,t=i.AudioContext??i.webkitAudioContext;return t?new t:null}function GC(i){const t=i.dir,e=i.make??(L=>new Audio(L)),n=i.now??(()=>Date.now()),s=i.random??Math.random,r=i.makeCtx??Ul,o=new Map,a=new Map,c=new Map;let u=null,h=!1,l=!1,d=!1,f=!1,m=!1,_=0,g=0,p;function v(L,F){const Z=o.get(L);if(Z)return Z;if(f)return null;let B;try{B=e(`${t}${L}.mp3`)}catch{return null}try{B.loop=F,B.volume=0}catch{}return o.set(L,B),x(L,B),B}function y(){var L;if(!(u||h)){try{u=r()}catch{u=null}if(!u){h=!0;return}try{Promise.resolve((L=u.resume)==null?void 0:L.call(u)).catch(()=>{})}catch{}}}function x(L,F){if(u)try{const Z=u.createGain();Z.gain.value=0,u.createMediaElementSource(F).connect(Z),Z.connect(u.destination),a.set(L,Z);try{F.volume=1}catch{}}catch{}}function R(L){try{Promise.resolve(L.play()).catch(F=>{ta(F)&&(d=!0)})}catch(F){ta(F)&&(d=!0)}}function M(L){try{L==null||L.pause()}catch{}}function T(L,F,Z,B=0){const j=Math.max(0,Math.min(1,Z)),O=a.get(L);if(!O||!u){try{F.volume=j}catch{}return}try{const et=u.currentTime,Q=O.gain;Q.cancelScheduledValues(et),B>0?(Q.setValueAtTime(Q.value,et),Q.setTargetAtTime(j,et,B)):Q.setValueAtTime(j,et)}catch{}}function P(L,F){let Z=Math.min(Math.floor(s()*F.length),F.length-1);return F.length>1&&F[Z]===c.get(L)&&(Z=(Z+1)%F.length),c.set(L,F[Z]),F[Z]}function A(L,F,Z=1){if(!l)return;const B=v(L,!1);if(B){T(L,B,F);try{Z!==1&&(B.preservesPitch=!1,B.webkitPreservesPitch=!1),B.playbackRate=Z}catch{}try{B.currentTime=0}catch{}R(B)}}function S(){p!==void 0&&(clearInterval(p),p=void 0)}function C(L){S();const F=v("ambience",!0);if(!F)return;if(L>0&&!d&&R(F),a.has("ambience")){T("ambience",F,L,kC),L<=0&&(p=setTimeout(()=>{p=void 0,M(F)},Jc));return}const Z=F.volume??0,B=Math.max(1,Math.round(Jc/Ff));let j=0;p=setInterval(()=>{j++;const O=Z+(L-Z)*Math.min(j/B,1);T("ambience",F,O),j>=B&&(S(),L<=0&&M(F))},Ff)}function k(){S();for(const[L,F]of o)T(L,F,0),M(F);_=0}return{get blocked(){return d},kick(L,F=!1){if(!l)return;const Z=Math.max(0,Math.min(1,L)),B=F||Z>=RC,j=P(B?"hard":"soft",B?DC:LC),O=1+(s()*2-1)*PC;A(j,CC+IC*Z,O)},roll(L,F){const Z=n(),B=g===0,j=B?0:Math.max(Z-g,0)/1e3;if(g=Z,!l){_=0;return}const O=L?BC(F):0;_+=(O-_)*(B?1:1-Math.exp(-j/Lf));const et=v("roll",!0);if(!et)return;if(_<=UC){_=0,T("roll",et,0),M(et);return}const Q=a.has("roll");T("roll",et,Q?O:_,Q?Lf:0),!d&&et.paused!==!1&&R(et)},whistle(){},net(){A("net",OC)},ambience(L){m=L,l&&C(L?Df:0)},setEnabled(L){if(L&&(d=!1,y()),L!==l){if(l=L,!L){k();return}g=0,m&&C(Df)}},dispose(){var F,Z,B;f=!0,l=!1,m=!1,k();for(const j of o.values())try{(F=j.removeAttribute)==null||F.call(j,"src"),(Z=j.load)==null||Z.call(j)}catch{}o.clear(),a.clear();const L=u;u=null;try{Promise.resolve((B=L==null?void 0:L.close)==null?void 0:B.call(L)).catch(()=>{})}catch{}}}}const Nf="assets/music/",zC=.3,HC=.42;function VC(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function WC(i,t){return i.length?i[VC(t)%i.length]:null}function Uf(i,t){return/\.(mp3|m4a)$/.test(t)?`${i}${t}`:`${i}${t}.mp3`}async function jC(i){try{const t=await fetch(`${i}index.json`);if(!t.ok)return[];const e=await t.json();return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function XC(i){const t=i.make??(M=>new Audio(M)),e=i.makeCtx??Ul;let n=null,s=null,r="",o=zC,a=!1,c=!1,u=!1,h=null,l=!1,d=null,f=null;const m=()=>o*(a?HC:1);function _(){const M=m();if(d&&h)try{const T=h.currentTime;d.gain.cancelScheduledValues(T),d.gain.setValueAtTime(M,T);return}catch{}if(n)try{n.volume=M}catch{}}function g(){var M;if(!h&&!l){try{h=e()}catch{h=null}if(!h){l=!0;return}}try{Promise.resolve((M=h==null?void 0:h.resume)==null?void 0:M.call(h)).catch(()=>{})}catch{}}function p(M){if(g(),!!h)try{const T=h.createGain();T.gain.value=m(),f=h.createMediaElementSource(M),f.connect(T),T.connect(h.destination),d=T;try{M.volume=1}catch{}}catch{}}function v(){var T,P;const M=n;n=null;try{f==null||f.disconnect()}catch{}try{d==null||d.disconnect()}catch{}if(f=null,d=null,!!M){try{M.pause()}catch{}try{(T=M.removeAttribute)==null||T.call(M,"src"),(P=M.load)==null||P.call(M)}catch{}}}function y(){var T;if(!n)return;const M=s?Uf(i.dir,s):Zc;if(r!==M){r=M;try{n.src=M}catch{}try{(T=n.load)==null||T.call(n)}catch{}}}function x(M=!1){if(!(n||u)&&!(!s&&!M)){r=s?Uf(i.dir,s):Zc;try{n=t(r)}catch{n=null}if(n){try{n.loop=!0,n.preload="auto"}catch{}p(n)}}}function R(){if(!(!s||u)&&(x(),!!n)){_();try{Promise.resolve(n.play()).catch(()=>{})}catch{}}}return{unlock(){if(u)return;g(),x(!0);const M=n;if(M)try{Promise.resolve(M.play()).then(()=>{if(!c)try{M.pause(),M.currentTime=0}catch{}}).catch(()=>{})}catch{}},pick(M,T){const P=T||WC(i.tracks,M);P!==s&&(s=P,n?y():x(),c&&R())},set(M){if(c=M&&!u,c)R();else try{n==null||n.pause()}catch{}},restart(){if(!u){if(c=!0,n)try{n.currentTime=0}catch{}R()}},gain(M){Number.isFinite(M)&&(o=Math.max(0,Math.min(1,M)),_())},duck(M){M!==a&&(a=M,_())},dispose(){var T;u=!0,c=!1,v();const M=h;h=null;try{Promise.resolve((T=M==null?void 0:M.close)==null?void 0:T.call(M)).catch(()=>{})}catch{}}}}function qC(i=window,t={createStage:ra,runDrill:zm}){var It,Xt,tt;const e=i.document,n=t.warm??new vS(void 0,SS()),s=t.narrator??new TC;let r=null;s.onStarted=G=>r==null?void 0:r(G);const o=()=>{var G;return((G=t.sfx)==null?void 0:G.call(t))??GC({dir:bn(wC)})};let a=o(),c=!1,u=!1;const h=G=>{c=G,a.setEnabled(G),S()};let l=null,d=!1,f,m="",_,g=!1,p=0,v=null,y=!1;const x=G=>{var J;try{Promise.resolve((J=G==null?void 0:G.resume)==null?void 0:J.call(G)).catch(()=>{})}catch{}},R=()=>{if(!v&&!y){try{v=(t.makeCtx??Ul)()}catch{v=null}if(!v)return y=!0,null}return x(v),v},M=()=>{v&&x(v)},T=()=>{var J;const G=v;v=null,y=!1;try{Promise.resolve((J=G==null?void 0:G.close)==null?void 0:J.call(G)).catch(()=>{})}catch{}};let P=!1;const A=()=>d&&L&&Tt.playing&&Gt();function S(){l==null||l.set(A())}function C(){A()?l==null||l.restart():S()}function k(){if(l||g||!d)return;g=!0;const G=++p;(t.musicIndex??(()=>jC(bn(Nf))))().then(J=>{var ot;if(!(G!==p||l)){if(!J.length){g=!1;return}l=((ot=t.music)==null?void 0:ot.call(t,J))??XC({dir:bn(Nf),tracks:J,makeCtx:R}),et&&l.unlock(),f!==void 0&&l.gain(f),l.duck(P),m&&l.pick(m,_),S()}}).catch(()=>{g=!1})}let L=!1,F=!1;function Z(){return L?!1:(L=!0,B(),a.ambience(!0),C(),!0)}function B(){F||!c||(F=!0,a.whistle())}function j(){L=!1,a.ambience(!1),a.roll(!1,0),S()}const O=()=>h(se());(It=e==null?void 0:e.addEventListener)==null||It.call(e,"visibilitychange",O);let et=!1,Q=null;function nt(G){var J;if(!G){try{(J=Q==null?void 0:Q.remove)==null||J.call(Q)}catch{}Q=null;return}if(!(Q||et||!(e!=null&&e.createElement)||!e.body))try{const ot=e.createElement("div");ot.textContent="Tap for sound",ot.setAttribute("style",'position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:9;pointer-events:none;padding:12px 20px;border-radius:999px;background:#C8F323;color:#0B0F10;font:700 15px/1 -apple-system,"Helvetica Neue",Arial,sans-serif;white-space:nowrap;'),e.body.appendChild(ot),Q=ot}catch{}}function ft(){var G,J;if(!et){et=!0;try{(G=e==null?void 0:e.removeEventListener)==null||G.call(e,"pointerdown",ft,!0)}catch{}try{(J=e==null?void 0:e.removeEventListener)==null||J.call(e,"touchend",ft,!0)}catch{}s.unlock(),M(),l==null||l.unlock(),nt(!1),ie=!1,h(se()),L&&B(),re&&(K(Tt.narration),V!=null&&V.script.length&&s.prefetchAll(V.script.filter(ot=>{var at;return!$t.has(ot)&&ot!==((at=V==null?void 0:V.hook)==null?void 0:at.clip)}))),D([fe()]),ae()}}(Xt=e==null?void 0:e.addEventListener)==null||Xt.call(e,"pointerdown",ft,!0),(tt=e==null?void 0:e.addEventListener)==null||tt.call(e,"touchend",ft,!0);let jt=null;const it=()=>jt??(jt=(t.audioIndex??_C)(s.dir)),ht=()=>{let G;return Promise.race([it().catch(()=>({})),new Promise(J=>{G=setTimeout(()=>J({}),EC*1e3)})]).then(J=>(G!==void 0&&clearTimeout(G),J))},dt=G=>{G===void 0||G===s.dir||(s.setDir(G),jt=null)};let V=null,xt=[];const Vt=G=>{var J;return((J=Tt.narration[G]??xt[G])==null?void 0:J.text)??null};let $t=new Set,re=!0,ie=!1,Ae=[];const W=()=>re&&!s.blocked,Gt=()=>W()&&!(e!=null&&e.hidden),se=()=>Gt()&&u,fe=()=>({type:"audio",state:re?s.blocked||a.blocked?"blocked":"playing":"muted",hasTake:V?V.hasAudio:!0}),Lt=()=>W()&&(V==null?void 0:V.hasAudio)===!0,Ce=G=>{var J,ot;return Lt()&&(G<0||((J=V==null?void 0:V.lines[G])==null?void 0:J.clip)!=null||((ot=V==null?void 0:V.lines[G])==null?void 0:ot.at)!==void 0)},te=()=>((V==null?void 0:V.lines)??[]).reduce((G,J)=>J.clip!==null||J.at!==void 0?J.index:G,-1),I=()=>((V==null?void 0:V.lines)??[]).reduce((G,J)=>J.clip!==null||J.at!==void 0?G+J.hold:G,0)*Fi,w=(G,J)=>V!=null&&V.take?yC(G,G.index===te(),s.trim(J)):Pf(G.hold,J,s.trim(J));function K(G){if(V)for(const J of V.lines){const ot=G[J.index];ot&&(ot.hold=0)}}function ct(){!s.blocked||ie||(ie=!0,h(!1),K(Tt.narration),re&&nt(!0),D([{type:"audio",state:"blocked"}]))}let vt=Promise.resolve(),lt=!1,Yt=0,wt=null,Ft=null,_e=!1;s.onTrim=G=>{if(!lt||G!==wt)return;const J=s.remaining(G);J!==void 0&&(Yt=performance.now()+J*1e3,_e&&Ft!==null&&D([{type:"cue",index:-1,text:Ft,hold:Math.max(J,Sl)}]))};let St=0,Wt=!1,oe=[];const ae=()=>{const G=oe;oe=[];for(const J of G)J()},Kt=(G,J)=>new Promise(ot=>{const at=()=>{G!==Tt.seq?ot(!1):J()?ot(!0):oe.push(at)};at()});async function be(G){var ot;const J=(V==null?void 0:V.queue)??[];for(;G===Tt.seq&&St<J.length;){const at=J[St],At=at.clip;if(!At||$t.has(At)){St++;continue}if(!W()){const qt=!re;if(!await Kt(G,W))return;if(qt){const E=J.findIndex(H=>H.index===Tt.cue);E>St&&(St=E)}continue}$t.add(At);const Ut=V!=null&&V.take?((ot=V.lines[Tt.cue])==null?void 0:ot.at)??0:0,Pt=(Ut>0?V==null?void 0:V.lines[Tt.cue]:void 0)??at;D([{type:"cue",index:Pt.index,text:Vt(Pt.index),hold:w(Pt,At)}]);const pe=((V==null?void 0:V.lines)??[]).filter(qt=>qt.at!==void 0&&qt.at>Ut&&qt.index>Pt.index);let Mt=[];const ve=r=qt=>{qt!==At||G!==Tt.seq||(r=null,Mt=pe.map(E=>setTimeout(()=>{G!==Tt.seq||!W()||Wt||D([{type:"cue",index:E.index,text:Vt(E.index),hold:w(E,At)}])},(E.at-Ut)*1e3)))};await s.play(At,V!=null&&V.take?I():at.hold*Fi,Ut),r===ve&&(r=null);for(const qt of Mt)clearTimeout(qt);if(G!==Tt.seq)return;if(s.blocked){$t.delete(At),ct();continue}if(V!=null&&V.take&&!re){$t.delete(At);continue}ct(),St++}G===Tt.seq&&J.length>0&&St>=J.length&&(Wt=!0,D([{type:"cue",index:-1,text:null}]))}let Tt=TS,gt=null,q=null,Nt=oa,rt=null,_t=Promise.resolve(),Ot=null,zt={},de=0;function D(G){for(const J of G)J.type==="cue"&&(P=J.index>=0,l==null||l.duck(P));if(Ot)for(const J of G)Ot.source.postMessage(J,{targetOrigin:Ot.origin==="null"||!Ot.origin?"*":Ot.origin})}function b(G,J=!1){Tt=G.state;for(const ot of G.effects)ut(ot);D(J?G.out.filter(ot=>!(ot.type==="cue"&&Ce(ot.index))):G.out)}function ut(G){var J;switch(G.kind){case"dispose":{s.stop(),s.newGeneration(),s.closeCtx(),j(),lt=!1,ae();const ot=performance.now();gt==null||gt.dispose(),gt=null,q==null||q.dispose(),q=null,de=performance.now()-ot,Tt.phase==="idle"&&(rt==null||rt.dispose(),rt=null,h(!1),a.dispose(),a=o(),l==null||l.dispose(),l=null,g=!1,p++,T(),(J=e==null?void 0:e.removeEventListener)==null||J.call(e,"visibilitychange",O));return}case"unload":{s.stop(),s.newGeneration(),j(),h(!1),lt=!1,ae(),gt==null||gt.dispose(),gt=null,q==null||q.dispose(),q=null;return}case"load":{s.stop(),s.newGeneration(),s.blocked=!1,V=null,xt=[],$t=new Set,St=0,lt=!1,wt=null,Ft=null,_e=!1,Wt=!1,L=!1,F=!1,m="key"in G.source?G.source.key:String(G.source.json.key??""),l?l.pick(m,_):k(),h(se()),ae(),q==null||q.dispose(),q=null,dt(G.narrationBase),vt=mt(G.seq,G.source),_t=_t.catch(()=>{}).then(()=>Bt(G.seq,G.source,G.loop,G.kit,G.squad));return}case"preview":{s.stop(),s.newGeneration(),j(),h(!1),lt=!1,ae(),gt==null||gt.dispose(),gt=null,Nt=G.framing,_t=_t.catch(()=>{}).then(()=>Ct(G.seq,G.kit,G.squad));return}case"setKit":q==null||q.setKit(G.kit).catch(()=>{});return;case"setFraming":Nt=G.framing,q==null||q.setFraming(G.framing);return;case"play":gt==null||gt.timeline.play(),gt==null||gt.stage.rule.play(),Z()||S();return;case"pause":gt==null||gt.timeline.pause(),gt==null||gt.stage.rule.pause(),S();return;case"seek":gt==null||gt.timeline.seek(G.t),gt==null||gt.stage.rule.wake();return;case"setSpeed":gt==null||gt.timeline.setSpeed(G.x);return;case"setOverlays":gt==null||gt.overlays.set(G.flags),gt==null||gt.stage.rule.wake();return;case"setCamera":gt==null||gt.setCamera(G.elev,G.az);return;case"setFollow":gt==null||gt.setFollow(G.follow);return;case"hold":G.on?(gt==null||gt.timeline.pause(),gt==null||gt.stage.rule.play()):Tt.playing?(gt==null||gt.timeline.play(),gt==null||gt.stage.rule.play(),Z()):gt==null||gt.stage.rule.pause();return;case"warm":{const ot=G.keys;Ae=ot.slice(0,3);const at=Tt.seq;_t.catch(()=>{}).then(()=>n.warm(ot)).then(()=>Y(Ae,at)).catch(()=>{});return}case"setAudio":{re=G.enabled,dt(G.narrationBase),u=G.sfx??!1,d=G.enabled&&(G.music??!0),G.musicGain!==void 0&&(f=G.musicGain,l==null||l.gain(G.musicGain)),G.track!==_&&(_=G.track,m&&(l==null||l.pick(m,_))),d&&(R(),k()),re?(s.blocked=!1,ie=!1,Tt.holdUntilMs!==null&&Tt.holdUntilMs!==Wo&&(Tt={...Tt,holdUntilMs:null},ut({kind:"hold",on:!1})),V!=null&&V.script.length&&s.prefetchAll(V.script.filter(ot=>{var at;return!$t.has(ot)&&ot!==((at=V==null?void 0:V.hook)==null?void 0:at.clip)})),Ae.length&&Y(Ae,Tt.seq)):(s.stop(),s.newGeneration(),nt(!1)),h(se()),L&&B(),K(Tt.narration),D([fe()]),!re&&Tt.phase==="ready"&&!(_e&&lt)&&D([El(Tt.narration,Tt.cue)]),re&&Tt.phase==="ready"&&Wt&&D([{type:"cue",index:-1,text:null}]),ae();return}case"stats":D([{type:"statsReply",frames:(gt==null?void 0:gt.stage.frames())??0,t:(gt==null?void 0:gt.timeline.t)??0,playing:Tt.playing,phases:{...zt},warm:n.keys().length}]);return}}async function mt(G,J){if(!("key"in J))return;const ot=`${J.key}-hook`,at=await it();if(G!==Tt.seq||!(at[ot]>0)||!W())return;$t.add(ot),lt=!0,wt=ot;const At=s.trim(ot);Yt=performance.now()+Pf(at[ot]/Fi,ot,At)*1e3,await s.play(ot,at[ot]),lt=!1,ct(),G===Tt.seq&&b(Wi(Tt,{kind:"hookEnded"}))}async function Y(G,J){if(!re)return;const ot=await it();if(J!==Tt.seq)return;const at=[];for(const At of G)ot[At]>0&&at.push(At);await s.prefetchAll(at)}async function Ct(G,J,ot){let at;const At=Nt;try{rt??(rt=t.createStage(i.document.body)),rt.remeasure(),at=await(t.runPreview??dC)(i.document.body,J,{stage:rt,embed:!0,framing:At,squad:ot})}catch(Ut){b(Wi(Tt,{kind:"loadFailed",seq:G,message:Ut instanceof Error?Ut.message:String(Ut)},performance.now()));return}if(G!==Tt.seq||Tt.phase!=="loading"){at.dispose();return}q=at,Nt!==At&&at.setFraming(Nt),at.step(0),b(Wi(Tt,{kind:"loaded",seq:G,duration:0},performance.now()))}async function Bt(G,J,ot,at,At){var X;let Ut,Pt=[];const pe=performance.now();let Mt=pe,ve=0;try{let N=null,st;if("key"in J?(N=await n.take(J.key),st=N.json):st=J.json,G!==Tt.seq)return;Mt=performance.now(),Pt=US(st==null?void 0:st.narration);const pt=await ht();if(G!==Tt.seq)return;V=gC("key"in J?J.key:null,Pt,pt),xt=Pt,V.hasAudio||D([fe()]),V.take&&be(G),re&&V.script.length&&s.prefetchAll(V.script),K(Pt);const bt=rt!==null;rt??(rt=t.createStage(i.document.body)),rt.remeasure(),ve=bt?0:performance.now()-Mt,Ut=await t.runDrill(st,i.document.body,{loop:ot,embed:!0,search:"",stage:rt,sfx:a,...at?{kit:at}:{},...At?{squad:At}:{},...N?{schedules:N.schedules}:{},onFrame:($,Et)=>b(BS(Tt,$,Et),!0)})}catch(N){b(Wi(Tt,{kind:"loadFailed",seq:G,message:N instanceof Error?N.message:String(N),..."key"in J?{key:J.key}:{}},performance.now()));return}if(G!==Tt.seq||Tt.phase!=="loading"){Ut.dispose();return}gt=Ut;const qt=performance.now();gt.step(0),zt={dispose:de,fetch:Mt-pe+Pi.clips,stage:ve,schedule:Pi.schedule,build:Pi.build,firstFrame:performance.now()-qt,total:de+performance.now()-pe},de=0;let E=0;if(gt.timeline.onLoop(()=>{C(),b(Wi(Tt,{kind:"looped",n:++E}))}),gt.timeline.onEnd(()=>{gt==null||gt.stage.rule.pause(),b(Wi(Tt,{kind:"ended",t:(gt==null?void 0:gt.timeline.t)??0}))}),lt&&wt!==null){const N=s.remaining(wt);N!==void 0&&(Yt=performance.now()+N*1e3)}const H=lt?Math.max((Yt-performance.now())/1e3,0):void 0;H!==void 0&&H>0&&gt.setPushIn(H),Ft=((X=Tt.intro)==null?void 0:X.text)??null;const z=H!==void 0&&Ft!==null;K(Pt),b(Wi(Tt,{kind:"loaded",seq:G,duration:gt.timeline.duration,narration:Pt,voiced:Lt(),...H!==void 0?{hookHold:H}:{},..."key"in J?{key:J.key}:{}},performance.now())),_e=z,V!=null&&V.take||vt.then(()=>{G===Tt.seq&&be(G)})}i.addEventListener("message",G=>{if(G.source===i)return;const J=kS(G.data);if(J!==null){if(G.source&&(Ot={source:G.source,origin:G.origin}),"error"in J){D([{type:"error",code:J.code,message:J.error}]);return}b(OS(Tt,J,(gt==null?void 0:gt.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function KC(i,t={}){const e=t.mountEmbed??qC,n=new Set;let s=null,r=!1;const o={stages:0,mounts:0,reparents:0},a=i.doc.createElement("div");a.style.position="absolute",a.style.inset="0",a.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(a);function u(f){f.type==="hello"&&(r=!0);for(const m of[...n])try{m(f)}catch(_){console.error("tactivo3d: listener failed",_),setTimeout(()=>{throw _})}}const h={postMessage(f){queueMicrotask(()=>u(f))}},l={document:{body:a},parent:h,addEventListener(f,m){f==="message"&&(s=m)},removeEventListener(){}};let d=!1;return{mount(f,m){o.mounts++,a.parentElement!==f&&(f.appendChild(a),d&&o.reparents++),!d&&(Ky((m==null?void 0:m.base)??i.base),e(l,{createStage:_=>(o.stages++,ra(_)),runDrill:zm,...t.warm?{warm:t.warm}:{},...t.narrator?{narrator:t.narrator}:{},...t.audioIndex?{audioIndex:t.audioIndex}:{}}),d=!0)},unmount(){c.appendChild(a)},post(f){s==null||s({data:f,source:h,origin:""})},onMessage(f){return n.add(f),r&&queueMicrotask(()=>{n.has(f)&&f({type:"hello"})}),()=>{n.delete(f)}},stats:()=>({...o})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=KC({doc:document,base:new URL("./",import.meta.url).href})));
