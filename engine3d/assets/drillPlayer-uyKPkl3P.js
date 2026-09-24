var Ig=Object.defineProperty;var Pg=(i,t,e)=>t in i?Ig(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var sn=(i,t,e)=>Pg(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eI=2;const lu="attached",Lg="detached";const nI=1e3;const iI="",ze="srgb",xn="srgb-linear",la="linear",Oe="srgb";const uu="300 es";class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hu=1234567;const Nr=Math.PI/180,Js=180/Math.PI;function $n(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function wl(i,t){return(i%t+t)%t}function Dg(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fg(i,t,e){return i!==t?(e-i)/(t-i):0}function Ur(i,t,e){return(1-e)*i+e*t}function Ng(i,t,e,n){return Ur(i,t,1-Math.exp(-e*n))}function Ug(i,t=1){return t-Math.abs(wl(i,t*2)-t)}function Og(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function kg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Bg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Gg(i,t){return i+Math.random()*(t-i)}function zg(i){return i*(.5-Math.random())}function Hg(i){i!==void 0&&(hu=i);let t=hu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vg(i){return i*Nr}function Wg(i){return i*Js}function jg(i){return(i&i-1)===0&&i!==0}function Xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function qg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kg(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+n)/2),h=o((t+n)/2),l=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*l,c*d,a*u);break;case"YZY":i.set(c*d,a*h,c*l,a*u);break;case"ZXZ":i.set(c*l,c*d,a*h,a*u);break;case"XZX":i.set(a*h,c*g,c*p,a*u);break;case"YXY":i.set(c*p,a*h,c*g,a*u);break;case"ZYZ":i.set(c*g,c*p,a*h,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const up={DEG2RAD:Nr,RAD2DEG:Js,generateUUID:$n,clamp:_e,euclideanModulo:wl,mapLinear:Dg,inverseLerp:Fg,lerp:Ur,damp:Ng,pingpong:Ug,smoothstep:Og,smootherstep:kg,randInt:Bg,randFloat:Gg,randFloatSpread:zg,seededRandom:Hg,degToRad:Vg,radToDeg:Wg,isPowerOfTwo:jg,ceilPowerOfTwo:Xg,floorPowerOfTwo:qg,setQuaternionFromProperEuler:Kg,normalize:Ne,denormalize:jn};class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(t,e,n,s,r,o,a,c,u){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u)}set(t,e,n,s,r,o,a,c,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],p=n[5],g=n[8],b=s[0],m=s[3],f=s[6],v=s[1],M=s[4],y=s[7],E=s[2],w=s[5],C=s[8];return r[0]=o*b+a*v+c*E,r[3]=o*m+a*M+c*w,r[6]=o*f+a*y+c*C,r[1]=u*b+h*v+l*E,r[4]=u*m+h*M+l*w,r[7]=u*f+h*y+l*C,r[2]=d*b+p*v+g*E,r[5]=d*m+p*M+g*w,r[8]=d*f+p*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8];return e*o*h-e*a*u-n*r*h+n*a*c+s*r*u-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=h*o-a*u,d=a*c-h*r,p=u*r-o*c,g=e*l+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return t[0]=l*b,t[1]=(s*u-h*n)*b,t[2]=(a*n-s*o)*b,t[3]=d*b,t[4]=(h*e-s*c)*b,t[5]=(s*r-a*e)*b,t[6]=p*b,t[7]=(n*c-u*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+t,-s*u,s*c,-s*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Na.makeScale(t,e)),this}rotate(t){return this.premultiply(Na.makeRotation(-t)),this}translate(t,e){return this.premultiply(Na.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Na=new he;function hp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $g(){const i=zr("canvas");return i.style.display="block",i}const du={};function js(i){i in du||(du[i]=!0,console.warn(i))}function Yg(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zg(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Jg(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fu=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qg(){const i={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Oe&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Oe&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?la:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xn]:{primaries:t,whitePoint:n,transfer:la,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}const Ee=Qg();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ms;class t0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=zr("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let e0=0;class dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=$n(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?t0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class Je extends _s{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=1001,s=1001,r=1006,o=1008,a=1023,c=1009,u=Je.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=$n(),this.name="",this.source=new dp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=300;Je.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,u=c[0],h=c[4],l=c[8],d=c[1],p=c[5],g=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+b)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(u+1)/2,y=(p+1)/2,E=(f+1)/2,w=(h+d)/4,C=(l+b)/4,P=(g+m)/4;return M>y&&M>E?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=C/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=P/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(l-b)*(l-b)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(l-b)/v,this.z=(d-h)/v,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i0 extends _s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends i0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fp extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ze{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],b=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=b;return}if(l!==b||c!==d||u!==p||h!==g){let m=1-a;const f=c*d+u*p+h*g+l*b,v=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const E=Math.sqrt(M),w=Math.atan2(E,f*v);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const y=a*v;if(c=c*m+d*y,u=u*m+p*y,h=h*m+g*y,l=l*m+b*y,m===1-a){const E=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=E,u*=E,h*=E,l*=E}}t[e]=c,t[e+1]=u,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*l+c*p-u*d,t[e+1]=c*g+h*d+u*l-a*p,t[e+2]=u*g+h*p+a*d-c*l,t[e+3]=h*g-a*l-c*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(n/2),h=a(s/2),l=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*l+u*p*g,this._y=u*p*l-d*h*g,this._z=u*h*g+d*p*l,this._w=u*h*l-d*p*g;break;case"YXZ":this._x=d*h*l+u*p*g,this._y=u*p*l-d*h*g,this._z=u*h*g-d*p*l,this._w=u*h*l+d*p*g;break;case"ZXY":this._x=d*h*l-u*p*g,this._y=u*p*l+d*h*g,this._z=u*h*g+d*p*l,this._w=u*h*l-d*p*g;break;case"ZYX":this._x=d*h*l-u*p*g,this._y=u*p*l+d*h*g,this._z=u*h*g-d*p*l,this._w=u*h*l+d*p*g;break;case"YZX":this._x=d*h*l+u*p*g,this._y=u*p*l+d*h*g,this._z=u*h*g-d*p*l,this._w=u*h*l-d*p*g;break;case"XZY":this._x=d*h*l-u*p*g,this._y=u*p*l-d*h*g,this._z=u*h*g+d*p*l,this._w=u*h*l+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],h=e[6],l=e[10],d=n+a+l;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>l){const p=2*Math.sqrt(1+n-a-l);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>l){const p=2*Math.sqrt(1+a-n-l);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,h=e._w;return this._x=n*h+o*a+s*u-r*c,this._y=s*h+o*c+r*a-n*u,this._z=r*h+o*u+n*c-s*a,this._w=o*h-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,a),l=Math.sin((1-e)*h)/u,d=Math.sin(e*h)/u;return this._w=o*l+this._w*d,this._x=n*l+this._x*d,this._y=s*l+this._y*d,this._z=r*l+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=2*(o*s-a*n),h=2*(a*e-r*s),l=2*(r*n-o*e);return this.x=e+c*u+o*l-a*h,this.y=n+c*h+a*u-r*l,this.z=s+c*l+r*h-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Oa.copy(this).projectOnVector(t),this.sub(Oa)}reflect(t){return this.sub(Oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new k,mu=new Ze;class dn{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gn):Gn.fromBufferAttribute(r,o),Gn.applyMatrix4(t.matrixWorld),this.expandByPoint(Gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gn),Gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(dr),eo.subVectors(this.max,dr),Ss.subVectors(t.a,dr),As.subVectors(t.b,dr),Es.subVectors(t.c,dr),Bi.subVectors(As,Ss),Gi.subVectors(Es,As),Ji.subVectors(Ss,Es);let e=[0,-Bi.z,Bi.y,0,-Gi.z,Gi.y,0,-Ji.z,Ji.y,Bi.z,0,-Bi.x,Gi.z,0,-Gi.x,Ji.z,0,-Ji.x,-Bi.y,Bi.x,0,-Gi.y,Gi.x,0,-Ji.y,Ji.x,0];return!ka(e,Ss,As,Es,eo)||(e=[1,0,0,0,1,0,0,0,1],!ka(e,Ss,As,Es,eo))?!1:(no.crossVectors(Bi,Gi),e=[no.x,no.y,no.z],ka(e,Ss,As,Es,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mi=[new k,new k,new k,new k,new k,new k,new k,new k],Gn=new k,to=new dn,Ss=new k,As=new k,Es=new k,Bi=new k,Gi=new k,Ji=new k,dr=new k,eo=new k,no=new k,Qi=new k;function ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),u=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>a)return!1}return!0}const r0=new dn,fr=new k,Ba=new k;class On{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):r0.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(Ba)),this.expandByPoint(fr.copy(t.center).sub(Ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new k,Ga=new k,io=new k,zi=new k,za=new k,so=new k,Ha=new k;class Sa{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ga.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),zi.copy(this.origin).sub(Ga);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=zi.dot(this.direction),c=-zi.dot(io),u=zi.lengthSq(),h=Math.abs(1-o*o);let l,d,p,g;if(h>0)if(l=o*c-a,d=o*a-c,g=r*h,l>=0)if(d>=-g)if(d<=g){const b=1/h;l*=b,d*=b,p=l*(l+o*d+2*a)+d*(o*l+d+2*c)+u}else d=r,l=Math.max(0,-(o*d+a)),p=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(o*d+a)),p=-l*l+d*(d+2*c)+u;else d<=-g?(l=Math.max(0,-(-o*r+a)),d=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u):d<=g?(l=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+u):(l=Math.max(0,-(o*r+a)),d=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+d*(d+2*c)+u);else d=o>0?-r:r,l=Math.max(0,-(o*d+a)),p=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Ga).addScaledVector(io,d),p}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),l>=0?(a=(t.min.z-d.z)*l,c=(t.max.z-d.z)*l):(a=(t.max.z-d.z)*l,c=(t.min.z-d.z)*l),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,s,r){za.subVectors(e,t),so.subVectors(n,t),Ha.crossVectors(za,so);let o=this.direction.dot(Ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,t);const c=a*this.direction.dot(so.crossVectors(zi,so));if(c<0)return null;const u=a*this.direction.dot(za.cross(zi));if(u<0||c+u>o)return null;const h=-a*zi.dot(Ha);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,n,s,r,o,a,c,u,h,l,d,p,g,b,m){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,u,h,l,d,p,g,b,m)}set(t,e,n,s,r,o,a,c,u,h,l,d,p,g,b,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=h,f[10]=l,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*l,g=a*h,b=a*l;e[0]=c*h,e[4]=-c*l,e[8]=u,e[1]=p+g*u,e[5]=d-b*u,e[9]=-a*c,e[2]=b-d*u,e[6]=g+p*u,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,p=c*l,g=u*h,b=u*l;e[0]=d+b*a,e[4]=g*a-p,e[8]=o*u,e[1]=o*l,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=b+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,p=c*l,g=u*h,b=u*l;e[0]=d-b*a,e[4]=-o*l,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=b-d*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,p=o*l,g=a*h,b=a*l;e[0]=c*h,e[4]=g*u-p,e[8]=d*u+b,e[1]=c*l,e[5]=b*u+d,e[9]=p*u-g,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*u,g=a*c,b=a*u;e[0]=c*h,e[4]=b-d*l,e[8]=g*l+p,e[1]=l,e[5]=o*h,e[9]=-a*h,e[2]=-u*h,e[6]=p*l+g,e[10]=d-b*l}else if(t.order==="XZY"){const d=o*c,p=o*u,g=a*c,b=a*u;e[0]=c*h,e[4]=-l,e[8]=u*h,e[1]=d*l+b,e[5]=o*h,e[9]=p*l-g,e[2]=g*l-p,e[6]=a*h,e[10]=b*l+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o0,t,a0)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Hi.crossVectors(n,Sn),Hi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Hi.crossVectors(n,Sn)),Hi.normalize(),ro.crossVectors(Sn,Hi),s[0]=Hi.x,s[4]=ro.x,s[8]=Sn.x,s[1]=Hi.y,s[5]=ro.y,s[9]=Sn.y,s[2]=Hi.z,s[6]=ro.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],v=n[3],M=n[7],y=n[11],E=n[15],w=s[0],C=s[4],P=s[8],A=s[12],S=s[1],L=s[5],B=s[9],z=s[13],X=s[2],V=s[6],O=s[10],H=s[14],G=s[3],Q=s[7],Y=s[11],ut=s[15];return r[0]=o*w+a*S+c*X+u*G,r[4]=o*C+a*L+c*V+u*Q,r[8]=o*P+a*B+c*O+u*Y,r[12]=o*A+a*z+c*H+u*ut,r[1]=h*w+l*S+d*X+p*G,r[5]=h*C+l*L+d*V+p*Q,r[9]=h*P+l*B+d*O+p*Y,r[13]=h*A+l*z+d*H+p*ut,r[2]=g*w+b*S+m*X+f*G,r[6]=g*C+b*L+m*V+f*Q,r[10]=g*P+b*B+m*O+f*Y,r[14]=g*A+b*z+m*H+f*ut,r[3]=v*w+M*S+y*X+E*G,r[7]=v*C+M*L+y*V+E*Q,r[11]=v*P+M*B+y*O+E*Y,r[15]=v*A+M*z+y*H+E*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],h=t[2],l=t[6],d=t[10],p=t[14],g=t[3],b=t[7],m=t[11],f=t[15];return g*(+r*c*l-s*u*l-r*a*d+n*u*d+s*a*p-n*c*p)+b*(+e*c*p-e*u*d+r*o*d-s*o*p+s*u*h-r*c*h)+m*(+e*u*l-e*a*p-r*o*l+n*o*p+r*a*h-n*u*h)+f*(-s*a*h-e*c*l+e*a*d+s*o*l-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],h=t[8],l=t[9],d=t[10],p=t[11],g=t[12],b=t[13],m=t[14],f=t[15],v=l*m*u-b*d*u+b*c*p-a*m*p-l*c*f+a*d*f,M=g*d*u-h*m*u-g*c*p+o*m*p+h*c*f-o*d*f,y=h*b*u-g*l*u+g*a*p-o*b*p-h*a*f+o*l*f,E=g*l*c-h*b*c-g*a*d+o*b*d+h*a*m-o*l*m,w=e*v+n*M+s*y+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=v*C,t[1]=(b*d*r-l*m*r-b*s*p+n*m*p+l*s*f-n*d*f)*C,t[2]=(a*m*r-b*c*r+b*s*u-n*m*u-a*s*f+n*c*f)*C,t[3]=(l*c*r-a*d*r-l*s*u+n*d*u+a*s*p-n*c*p)*C,t[4]=M*C,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*C,t[6]=(g*c*r-o*m*r-g*s*u+e*m*u+o*s*f-e*c*f)*C,t[7]=(o*d*r-h*c*r+h*s*u-e*d*u-o*s*p+e*c*p)*C,t[8]=y*C,t[9]=(g*l*r-h*b*r-g*n*p+e*b*p+h*n*f-e*l*f)*C,t[10]=(o*b*r-g*a*r+g*n*u-e*b*u-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*l*r-h*n*u+e*l*u+o*n*p-e*a*p)*C,t[12]=E*C,t[13]=(h*b*s-g*l*s+g*n*d-e*b*d-h*n*m+e*l*m)*C,t[14]=(g*a*s-o*b*s-g*n*c+e*b*c+o*n*m-e*a*m)*C,t[15]=(o*l*s-h*a*s+h*n*c-e*l*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,u=r*o,h=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,h*a+n,h*c-s*o,0,u*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,h=o+o,l=a+a,d=r*u,p=r*h,g=r*l,b=o*h,m=o*l,f=a*l,v=c*u,M=c*h,y=c*l,E=n.x,w=n.y,C=n.z;return s[0]=(1-(b+f))*E,s[1]=(p+y)*E,s[2]=(g-M)*E,s[3]=0,s[4]=(p-y)*w,s[5]=(1-(d+f))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+M)*C,s[9]=(m-v)*C,s[10]=(1-(d+b))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);const u=1/r,h=1/o,l=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=l,zn.elements[9]*=l,zn.elements[10]*=l,e.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=2e3){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),l=(e+t)/(e-t),d=(n+s)/(n-s);let p,g;if(a===2e3)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===2001)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=2e3){const c=this.elements,u=1/(e-t),h=1/(n-s),l=1/(o-r),d=(e+t)*u,p=(n+s)*h;let g,b;if(a===2e3)g=(o+r)*l,b=-2*l;else if(a===2001)g=r*l,b=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ts=new k,zn=new re,o0=new k(0,0,0),a0=new k(1,1,1),Hi=new k,ro=new k,Sn=new k,gu=new re,_u=new Ze;class Un{constructor(t=0,e=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let c0=0;const bu=new k,ws=new Ze,_i=new re,oo=new k,pr=new k,l0=new k,u0=new Ze,xu=new k(1,0,0),vu=new k(0,1,0),yu=new k(0,0,1),Mu={type:"added"},h0={type:"removed"},Rs={type:"childadded",child:null},Va={type:"childremoved",child:null};class Be extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new k,e=new Un,n=new Ze,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new re},normalMatrix:{value:new he}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(vu,t)}rotateZ(t){return this.rotateOnAxis(yu,t)}translateOnAxis(t,e){return bu.copy(t).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(vu,t)}translateZ(t){return this.translateOnAxis(yu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(pr,oo,this.up):_i.lookAt(oo,pr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(_i),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Mu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(h0),Va.child=t,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_i.multiply(t.parent.matrixWorld)),t.applyMatrix4(_i),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Mu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,l0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,u0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),h=o(t.images),l=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new k(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new k,bi=new k,Wa=new k,xi=new k,Cs=new k,Is=new k,Su=new k,ja=new k,Xa=new k,qa=new k,Ka=new me,$a=new me,Ya=new me;class Fn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Hn.subVectors(t,e),s.cross(Hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Hn.subVectors(s,e),bi.subVectors(n,e),Wa.subVectors(t,e);const o=Hn.dot(Hn),a=Hn.dot(bi),c=Hn.dot(Wa),u=bi.dot(bi),h=bi.dot(Wa),l=o*u-a*a;if(l===0)return r.set(0,0,0),null;const d=1/l,p=(u*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ka.setScalar(0),$a.setScalar(0),Ya.setScalar(0),Ka.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ka,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,s){return Hn.subVectors(n,e),bi.subVectors(t,e),Hn.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Hn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Fn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Cs.subVectors(s,n),Is.subVectors(r,n),ja.subVectors(t,n);const c=Cs.dot(ja),u=Is.dot(ja);if(c<=0&&u<=0)return e.copy(n);Xa.subVectors(t,s);const h=Cs.dot(Xa),l=Is.dot(Xa);if(h>=0&&l<=h)return e.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Cs,o);qa.subVectors(t,r);const p=Cs.dot(qa),g=Is.dot(qa);if(g>=0&&p<=g)return e.copy(r);const b=p*u-c*g;if(b<=0&&u>=0&&g<=0)return a=u/(u-g),e.copy(n).addScaledVector(Is,a);const m=h*g-p*l;if(m<=0&&l-h>=0&&p-g>=0)return Su.subVectors(r,s),a=(l-h)/(l-h+(p-g)),e.copy(s).addScaledVector(Su,a);const f=1/(m+b+d);return o=b*f,a=d*f,e.copy(n).addScaledVector(Cs,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ao={h:0,s:0,l:0};function Za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Ee.workingColorSpace){if(t=wl(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Za(o,r,t+1/3),this.g=Za(o,r,t),this.b=Za(o,r,t-1/3)}return Ee.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=mp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Ee.fromWorkingColorSpace(hn.copy(this),t),Math.round(_e(hn.r*255,0,255))*65536+Math.round(_e(hn.g*255,0,255))*256+Math.round(_e(hn.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.fromWorkingColorSpace(hn.copy(this),e);const n=hn.r,s=hn.g,r=hn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const h=(a+o)/2;if(a===o)c=0,u=0;else{const l=o-a;switch(u=h<=.5?l/(o+a):l/(2-o-a),o){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return t.h=c,t.s=u,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.fromWorkingColorSpace(hn.copy(this),e),t.r=hn.r,t.g=hn.g,t.b=hn.b,t}getStyle(t=ze){Ee.fromWorkingColorSpace(hn.copy(this),t);const e=hn.r,n=hn.g,s=hn.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(ao);const n=Ur(Vi.h,ao.h,e),s=Ur(Vi.s,ao.s,e),r=Ur(Vi.l,ao.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Kt;Kt.NAMES=mp;let d0=0;class Nn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nn extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new k,co=new qt;class Ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)co.fromBufferAttribute(this,e),co.applyMatrix3(t),this.setXY(e,co.x,co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class gp extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _p extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class He extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let f0=0;const Cn=new re,Ja=new Be,Ps=new k,An=new dn,mr=new dn,en=new k;class Xe extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?_p:gp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new he().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return Ja.lookAt(t),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(An.min,mr.min),An.expandByPoint(en),en.addVectors(An.max,mr.max),An.expandByPoint(en)):(An.expandByPoint(mr.min),An.expandByPoint(mr.max))}An.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,h=a.count;u<h;u++)en.fromBufferAttribute(a,u),c&&(Ps.fromBufferAttribute(t,u),en.add(Ps)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new k,c[P]=new k;const u=new k,h=new k,l=new k,d=new qt,p=new qt,g=new qt,b=new k,m=new k;function f(P,A,S){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,A),l.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,A),g.fromBufferAttribute(r,S),h.sub(u),l.sub(u),p.sub(d),g.sub(d);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(l,-p.y).multiplyScalar(L),m.copy(l).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(b),a[A].add(b),a[S].add(b),c[P].add(m),c[A].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,A=v.length;P<A;++P){const S=v[P],L=S.start,B=S.count;for(let z=L,X=L+B;z<X;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new k,y=new k,E=new k,w=new k;function C(P){E.fromBufferAttribute(s,P),w.copy(E);const A=a[P];M.copy(A),M.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(w,A);const L=y.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,L)}for(let P=0,A=v.length;P<A;++P){const S=v[P],L=S.start,B=S.count;for(let z=L,X=L+B;z<X;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,h=new k,l=new k;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,m),a.add(h),c.add(h),u.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,c){const u=a.array,h=a.itemSize,l=a.normalized,d=new u.constructor(c.length*h);let p=0,g=0;for(let b=0,m=c.length;b<m;b++){a.isInterleavedBufferAttribute?p=c[b]*a.data.stride+a.offset:p=c[b]*h;for(let f=0;f<h;f++)d[g++]=u[p++]}return new Ce(d,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=t(c,n);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let h=0,l=u.length;h<l;h++){const d=u[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const p=u[l];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,p=l.length;d<p;d++)h.push(l[d].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,h=o.length;u<h;u++){const l=o[u];this.addGroup(l.start,l.count,l.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new re,ts=new Sa,lo=new On,Eu=new k,uo=new k,ho=new k,fo=new k,Qa=new k,po=new k,Tu=new k,mo=new k;class Me extends Be{constructor(t=new Xe,e=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){po.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=a[c],l=r[c];h!==0&&(Qa.fromBufferAttribute(l,t),o?po.addScaledVector(Qa,h):po.addScaledVector(Qa.sub(e),h))}e.add(po)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(lo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(lo,Eu)===null||ts.origin.distanceToSquared(Eu)>(t.far-t.near)**2))&&(Au.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=M;y<E;y+=3){const w=a.getX(y),C=a.getX(y+1),P=a.getX(y+2);s=go(this,f,t,n,u,h,l,w,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=go(this,o,t,n,u,h,l,v,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,E=M;y<E;y+=3){const w=y,C=y+1,P=y+2;s=go(this,f,t,n,u,h,l,w,C,P),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const v=m,M=m+1,y=m+2;s=go(this,o,t,n,u,h,l,v,M,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function p0(i,t,e,n,s,r,o,a){let c;if(t.side===1?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===0,a),c===null)return null;mo.copy(a),mo.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(mo);return u<e.near||u>e.far?null:{distance:u,point:mo.clone(),object:i}}function go(i,t,e,n,s,r,o,a,c,u){i.getVertexPosition(a,uo),i.getVertexPosition(c,ho),i.getVertexPosition(u,fo);const h=p0(i,t,e,n,uo,ho,fo,Tu);if(h){const l=new k;Fn.getBarycoord(Tu,uo,ho,fo,l),s&&(h.uv=Fn.getInterpolatedAttribute(s,a,c,u,l,new qt)),r&&(h.uv1=Fn.getInterpolatedAttribute(r,a,c,u,l,new qt)),o&&(h.normal=Fn.getInterpolatedAttribute(o,a,c,u,l,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new k,materialIndex:0};Fn.getNormal(uo,ho,fo,d.normal),h.face=d,h.barycoord=l}return h}class Ci extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],h=[],l=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(l,2));function g(b,m,f,v,M,y,E,w,C,P,A){const S=y/C,L=E/P,B=y/2,z=E/2,X=w/2,V=C+1,O=P+1;let H=0,G=0;const Q=new k;for(let Y=0;Y<O;Y++){const ut=Y*L-z;for(let St=0;St<V;St++){const Ct=St*S-B;Q[b]=Ct*v,Q[m]=ut*M,Q[f]=X,u.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[f]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),l.push(St/C),l.push(1-Y/P),H+=1}}for(let Y=0;Y<P;Y++)for(let ut=0;ut<C;ut++){const St=d+ut+V*Y,Ct=d+ut+V*(Y+1),at=d+(ut+1)+V*(Y+1),_t=d+(ut+1)+V*Y;c.push(St,Ct,_t),c.push(Ct,at,_t),G+=6}a.addGroup(p,G,A),p+=G,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=Qs(i[e]);for(const s in n)t[s]=n[s]}return t}function m0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}const Rl={clone:Qs,merge:mn};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=m0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xp extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new k,wu=new qt,Ru=new qt;class _n extends xp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,wu,Ru),e.subVectors(Ru,wu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Ds=1;class b0 extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ls,Ds,t,e);s.layers=this.layers,this.add(s);const r=new _n(Ls,Ds,t,e);r.layers=this.layers,this.add(r);const o=new _n(Ls,Ds,t,e);o.layers=this.layers,this.add(o);const a=new _n(Ls,Ds,t,e);a.layers=this.layers,this.add(a);const c=new _n(Ls,Ds,t,e);c.layers=this.layers,this.add(c);const u=new _n(Ls,Ds,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,h]=this.children,l=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(l,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vp extends Je{constructor(t,e,n,s,r,o,a,c,u,h){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,o,a,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class x0 extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new Ii({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const o=new Me(s,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new b0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Cl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new Cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v0 extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Il{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new k;class Xn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yp extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fs;const gr=new k,Ns=new k,Us=new k,Os=new qt,_r=new qt,Mp=new re,_o=new k,br=new k,bo=new k,Cu=new qt,tc=new qt,Iu=new qt;class y0 extends Be{constructor(t=new yp){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Il(e,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Xn(n,3,0,!1)),Fs.setAttribute("uv",new Xn(n,2,3,!1))}this.geometry=Fs,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Mp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Us.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;xo(_o.set(-.5,-.5,0),Us,o,Ns,s,r),xo(br.set(.5,-.5,0),Us,o,Ns,s,r),xo(bo.set(.5,.5,0),Us,o,Ns,s,r),Cu.set(0,0),tc.set(1,0),Iu.set(1,1);let a=t.ray.intersectTriangle(_o,br,bo,!1,gr);if(a===null&&(xo(br.set(-.5,.5,0),Us,o,Ns,s,r),tc.set(0,1),a=t.ray.intersectTriangle(_o,bo,br,!1,gr),a===null))return;const c=t.ray.origin.distanceTo(gr);c<t.near||c>t.far||e.push({distance:c,point:gr.clone(),uv:Fn.getInterpolation(gr,_o,br,bo,Cu,tc,Iu,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xo(i,t,e,n,s,r){Os.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(_r.x=r*Os.x-s*Os.y,_r.y=s*Os.x+r*Os.y):_r.copy(Os),i.copy(t),i.x+=_r.x,i.y+=_r.y,i.applyMatrix4(Mp)}const Pu=new k,Lu=new me,Du=new me,M0=new k,Fu=new re,vo=new k,ec=new On,Nu=new re,nc=new Sa;class S0 extends Me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new re,this.bindMatrixInverse=new re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,vo),this.boundingBox.expandByPoint(vo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,vo),this.boundingSphere.expandByPoint(vo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ec.copy(this.boundingSphere),ec.applyMatrix4(s),t.ray.intersectsSphere(ec)!==!1&&(Nu.copy(s).invert(),nc.copy(t.ray).applyMatrix4(Nu),!(this.boundingBox!==null&&nc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,nc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new me,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Lu.fromBufferAttribute(s.attributes.skinIndex,t),Du.fromBufferAttribute(s.attributes.skinWeight,t),Pu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Du.getComponent(r);if(o!==0){const a=Lu.getComponent(r);Fu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(M0.copy(Pu).applyMatrix4(Fu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Sp extends Be{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ap extends Je{constructor(t=null,e=1,n=1,s,r,o,a,c,u=1003,h=1003,l,d){super(null,o,a,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uu=new re,A0=new re;class Pl{constructor(t=[],e=[]){this.uuid=$n(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new re)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new re;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:A0;Uu.multiplyMatrices(a,e[r]),Uu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Pl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ap(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Sp),this.bones.push(o),this.boneInverses.push(new re().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class tl extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ks=new re,Ou=new re,yo=[],ku=new dn,E0=new re,xr=new Me,vr=new On;class T0 extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,E0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),ku.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(ku)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ks),vr.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(n),t.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),Ou.multiplyMatrices(n,ks),xr.matrixWorld=Ou,xr.raycast(t,yo);for(let o=0,a=yo.length;o<a;o++){const c=yo[o];c.instanceId=r,c.object=this,e.push(c)}yo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ap(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ic=new k,w0=new k,R0=new he;class as{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ic.subVectors(n,e).cross(w0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||R0.getNormalMatrix(t),s=this.coplanarPoint(ic).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new On,Mo=new k;class Ll{constructor(t=new as,e=new as,n=new as,s=new as,r=new as,o=new as){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],u=s[4],h=s[5],l=s[6],d=s[7],p=s[8],g=s[9],b=s[10],m=s[11],f=s[12],v=s[13],M=s[14],y=s[15];if(n[0].setComponents(c-r,d-u,m-p,y-f).normalize(),n[1].setComponents(c+r,d+u,m+p,y+f).normalize(),n[2].setComponents(c+o,d+h,m+g,y+v).normalize(),n[3].setComponents(c-o,d-h,m-g,y-v).normalize(),n[4].setComponents(c-a,d-l,m-b,y-M).normalize(),e===2e3)n[5].setComponents(c+a,d+l,m+b,y+M).normalize();else if(e===2001)n[5].setComponents(a,l,b,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Mo.x=s.normal.x>0?t.max.x:t.min.x,Mo.y=s.normal.y>0?t.max.y:t.min.y,Mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ep extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ua=new k,ha=new k,Bu=new re,yr=new Sa,So=new On,sc=new k,Gu=new k;class Dl extends Be{constructor(t=new Xe,e=new Ep){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ua.fromBufferAttribute(e,s-1),ha.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ua.distanceTo(ha);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),So.radius+=r,t.ray.intersectsSphere(So)===!1)return;Bu.copy(s).invert(),yr.copy(t.ray).applyMatrix4(Bu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=u){const f=h.getX(b),v=h.getX(b+1),M=Ao(this,t,yr,c,f,v);M&&e.push(M)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(p),f=Ao(this,t,yr,c,b,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=u){const f=Ao(this,t,yr,c,b,b+1);f&&e.push(f)}if(this.isLineLoop){const b=Ao(this,t,yr,c,g-1,p);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ao(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(ua.fromBufferAttribute(o,s),ha.fromBufferAttribute(o,r),e.distanceSqToSegment(ua,ha,sc,Gu)>n)return;sc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(sc);if(!(c<t.near||c>t.far))return{distance:c,point:Gu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const zu=new k,Hu=new k;class C0 extends Dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)zu.fromBufferAttribute(e,s),Hu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+zu.distanceTo(Hu);t.setAttribute("lineDistance",new He(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I0 extends Dl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Tp extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vu=new re,el=new Sa,Eo=new On,To=new k;class P0 extends Be{constructor(t=new Xe,e=new Tp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,t.ray.intersectsSphere(Eo)===!1)return;Vu.copy(s).invert(),el.copy(t.ray).applyMatrix4(Vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,b=p;g<b;g++){const m=u.getX(g);To.fromBufferAttribute(l,m),Wu(To,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,b=p;g<b;g++)To.fromBufferAttribute(l,g),Wu(To,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wu(i,t,e,n,s,r,o){const a=el.distanceSqToPoint(i);if(a<e){const c=new k;el.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class bn extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Tn extends Je{constructor(t,e,n,s,r,o,a,c,u){super(t,e,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wp extends Je{constructor(t,e,n,s,r,o,a,c,u,h=1026){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===1026&&(n=1014),n===void 0&&h===1027&&(n=1020),super(null,s,r,o,a,c,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Fl extends Xe{constructor(t=[new qt(0,-.5),new qt(.5,0),new qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],h=1/e,l=new k,d=new qt,p=new k,g=new k,b=new k;let m=0,f=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(b.x,b.y,b.z);break;default:m=t[v+1].x-t[v].x,f=t[v+1].y-t[v].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(g)}for(let v=0;v<=e;v++){const M=n+v*h*s,y=Math.sin(M),E=Math.cos(M);for(let w=0;w<=t.length-1;w++){l.x=t[w].x*y,l.y=t[w].y,l.z=t[w].x*E,o.push(l.x,l.y,l.z),d.x=v/e,d.y=w/(t.length-1),a.push(d.x,d.y);const C=c[3*w+0]*y,P=c[3*w+1],A=c[3*w+0]*E;u.push(C,P,A)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const y=M+v*t.length,E=y,w=y+t.length,C=y+t.length+1,P=y+1;r.push(E,w,P),r.push(C,P,w)}this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("uv",new He(a,2)),this.setAttribute("normal",new He(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fl(t.points,t.segments,t.phiStart,t.phiLength)}}class Nl extends Xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],u=new k,h=new qt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let l=0,d=3;l<=e;l++,d+=3){const p=n+l/e*s;u.x=t*Math.cos(p),u.y=t*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let l=1;l<=e;l++)r.push(l,l+1,0);this.setIndex(r),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(a,3)),this.setAttribute("uv",new He(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class da extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],p=[];let g=0;const b=[],m=n/2;let f=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(p,2));function v(){const y=new k,E=new k;let w=0;const C=(e-t)/n;for(let P=0;P<=r;P++){const A=[],S=P/r,L=S*(e-t)+t;for(let B=0;B<=s;B++){const z=B/s,X=z*c+a,V=Math.sin(X),O=Math.cos(X);E.x=L*V,E.y=-S*n+m,E.z=L*O,l.push(E.x,E.y,E.z),y.set(V,C,O).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-S),A.push(g++)}b.push(A)}for(let P=0;P<s;P++)for(let A=0;A<r;A++){const S=b[A][P],L=b[A+1][P],B=b[A+1][P+1],z=b[A][P+1];(t>0||A!==0)&&(h.push(S,L,z),w+=3),(e>0||A!==r-1)&&(h.push(L,B,z),w+=3)}u.addGroup(f,w,0),f+=w}function M(y){const E=g,w=new qt,C=new k;let P=0;const A=y===!0?t:e,S=y===!0?1:-1;for(let B=1;B<=s;B++)l.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const L=g;for(let B=0;B<=s;B++){const X=B/s*c+a,V=Math.cos(X),O=Math.sin(X);C.x=A*O,C.y=m*S,C.z=A*V,l.push(C.x,C.y,C.z),d.push(0,S,0),w.x=V*.5+.5,w.y=O*.5*S+.5,p.push(w.x,w.y),g++}for(let B=0;B<s;B++){const z=E+B,X=L+B;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),P+=3}u.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yn extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),u=a+1,h=c+1,l=t/a,d=e/c,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){const v=f*d-o;for(let M=0;M<u;M++){const y=M*l-r;g.push(y,-v,0),b.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const M=v+u*f,y=v+u*(f+1),E=v+1+u*(f+1),w=v+1+u*f;p.push(M,y,w),p.push(y,E,w)}this.setIndex(p),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(b,3)),this.setAttribute("uv",new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Aa extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],u=[],h=[];let l=t;const d=(e-t)/s,p=new k,g=new qt;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=l*Math.cos(f),p.y=l*Math.sin(f),c.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}l+=d}for(let b=0;b<s;b++){const m=b*(n+1);for(let f=0;f<n;f++){const v=f+m,M=v,y=v+n+1,E=v+n+2,w=v+1;a.push(M,y,w),a.push(y,E,w)}}this.setIndex(a),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Aa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class L0 extends Xe{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new k,r=new k;if(t.index!==null){const o=t.attributes.position,a=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let u=0,h=c.length;u<h;++u){const l=c[u],d=l.start,p=l.count;for(let g=d,b=d+p;g<b;g+=3)for(let m=0;m<3;m++){const f=a.getX(g+m),v=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,v),ju(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let u=0;u<3;u++){const h=3*a+u,l=3*a+(u+1)%3;s.fromBufferAttribute(o,h),r.fromBufferAttribute(o,l),ju(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new He(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ju(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class bs extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ci extends bs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Hr extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class D0 extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class F0 extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function us(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cp(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function nl(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)s[o++]=i[a+c]}return s}function Ul(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}function N0(i,t,e,n,s=30){const r=i.clone();r.name=t;const o=[];for(let c=0;c<r.tracks.length;++c){const u=r.tracks[c],h=u.getValueSize(),l=[],d=[];for(let p=0;p<u.times.length;++p){const g=u.times[p]*s;if(!(g<e||g>=n)){l.push(u.times[p]);for(let b=0;b<h;++b)d.push(u.values[p*h+b])}}l.length!==0&&(u.times=us(l,u.times.constructor),u.values=us(d,u.values.constructor),o.push(u))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r}function U0(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let o=0;o<s;++o){const a=e.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const u=i.tracks.find(function(f){return f.name===a.name&&f.ValueTypeName===c});if(u===void 0)continue;let h=0;const l=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=l/3);let d=0;const p=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const g=a.times.length-1;let b;if(r<=a.times[0]){const f=h,v=l-h;b=a.values.slice(f,v)}else if(r>=a.times[g]){const f=g*l+h,v=f+l-h;b=a.values.slice(f,v)}else{const f=a.createInterpolant(),v=h,M=l-h;f.evaluate(r),b=f.resultBuffer.slice(v,M)}c==="quaternion"&&new Ze().fromArray(b).normalize().conjugate().toArray(b);const m=u.times.length;for(let f=0;f<m;++f){const v=f*p+d;if(c==="quaternion")Ze.multiplyQuaternionsFlat(u.values,v,b,0,u.values,v);else{const M=p-d*2;for(let y=0;y<M;++y)u.values[v+y]-=b[y]}}}return i.blendMode=2501,i}const O0={convertArray:us,isTypedArray:Rp,getKeyframeOrder:Cp,sortedArray:nl,flattenJSON:Ul,subclip:N0,makeClipAdditive:U0};class $r{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class k0 extends $r{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,a=2*e-n;break;case 2402:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:o=t,c=2*n-e;break;case 2402:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}const u=(n-e)*.5,h=this.valueSize;this._weightPrev=u/(e-a),this._weightNext=u/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=this._offsetPrev,l=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*b+.5*g,y=p*m-p*b;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+v*o[u+E]+M*o[c+E]+y*o[l+E];return r}}class Ip extends $r{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,u=c-a,h=(n-e)/(s-e),l=1-h;for(let d=0;d!==a;++d)r[d]=o[u+d]*l+o[c+d]*h;return r}}class B0 extends $r{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class li{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new B0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ip(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new k0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Rp(s))for(let a=0,c=s.length;a!==c;++a){const u=s[a];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const u=t[a],h=t[a+1];if(u!==h&&(a!==1||u!==t[0]))if(s)c=!0;else{const l=a*n,d=l-n,p=l+n;for(let g=0;g!==n;++g){const b=e[l+g];if(b!==e[d+g]||b!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const l=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[l+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,u=0;u!==n;++u)e[c+u]=e[a+u];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}li.prototype.TimeBufferType=Float32Array;li.prototype.ValueBufferType=Float32Array;li.prototype.DefaultInterpolation=2301;class sr extends li{constructor(t,e,n){super(t,e,n)}}sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=2300;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class Pp extends li{}Pp.prototype.ValueTypeName="color";class tr extends li{}tr.prototype.ValueTypeName="number";class G0 extends $r{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e);let u=t*a;for(let h=u+a;u!==h;u+=4)Ze.slerpFlat(r,0,o,u-a,o,u,c);return r}}class er extends li{InterpolantFactoryMethodLinear(t){return new G0(this.times,this.values,this.getValueSize(),t)}}er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends li{constructor(t,e,n){super(t,e,n)}}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=2300;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends li{}nr.prototype.ValueTypeName="vector";class il{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=$n(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(H0(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(li.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],u=[];c.push((a+r-1)%r,a,(a+1)%r),u.push(0,1,0);const h=Cp(c);c=nl(c,1,h),u=nl(u,1,h),!s&&c[0]===0&&(c.push(r),u.push(u[0])),o.push(new tr(".morphTargetInfluences["+e[a].name+"]",c,u).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const u=t[a],h=u.name.match(r);if(h&&h.length>1){const l=h[1];let d=s[l];d||(s[l]=d=[]),d.push(u)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(l,d,p,g,b){if(p.length!==0){const m=[],f=[];Ul(p,m,f,g),m.length!==0&&b.push(new l(d,m,f))}},s=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const u=t.hierarchy||[];for(let l=0;l<u.length;l++){const d=u[l].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),f.push(M.morphTarget===b?1:0)}s.push(new tr(".morphTargetInfluence["+b+"]",m,f))}c=p.length*o}else{const p=".bones["+e[l].name+"]";n(nr,p+".position",d,"pos",s),n(er,p+".quaternion",d,"rot",s),n(nr,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function z0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return tr;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return Pp;case"quaternion":return er;case"bool":case"boolean":return sr;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function H0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=z0(i.type);if(i.times===void 0){const e=[],n=[];Ul(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const qi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class V0{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return u.push(h,l),this},this.removeHandler=function(h){const l=u.indexOf(h);return l!==-1&&u.splice(l,2),this},this.getHandler=function(h){for(let l=0,d=u.length;l<d;l+=2){const p=u[l],g=u[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const W0=new V0;class or{constructor(t){this.manager=t!==void 0?t:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}or.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class j0 extends Error{constructor(t,e){super(t),this.response=e}}class Lp extends or{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=qi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(vi[t]!==void 0){vi[t].push({onLoad:e,onProgress:n,onError:s});return}vi[t]=[],vi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=vi[t],l=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){v();function v(){l.read().then(({done:M,value:y})=>{if(M)f.close();else{b+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let w=0,C=h.length;w<C;w++){const P=h[w];P.onProgress&&P.onProgress(E)}f.enqueue(y),v()}},M=>{f.error(M)})}}});return new Response(m)}else throw new j0(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return u.json();default:if(a===void 0)return u.text();{const l=/charset="?([^;"\s]*)"?/i.exec(a),d=l&&l[1]?l[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{qi.add(t,u);const h=vi[t];delete vi[t];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=vi[t];if(h===void 0)throw this.manager.itemError(t),u;delete vi[t];for(let l=0,d=h.length;l<d;l++){const p=h[l];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class X0 extends or{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=zr("img");function c(){h(),qi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(l){h(),s&&s(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Dp extends or{constructor(t){super(t)}load(t,e,n,s){const r=new Je,o=new X0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Yr extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class q0 extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const rc=new re,Xu=new k,qu=new k;class Ol{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xu),qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qu),e.updateMatrixWorld(),rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class K0 extends Ol{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Js*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class $0 extends Yr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new K0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ku=new re,Mr=new k,oc=new k;class Y0 extends Ol{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Mr),oc.copy(n.position),oc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oc),n.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku)}}class Z0 extends Yr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kl extends xp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class J0 extends Ol{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new J0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sI extends Yr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Or{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Q0 extends Xe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class t_ extends or{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=qi.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(u=>{e&&e(u),r.manager.itemEnd(t)}).catch(u=>{s&&s(u)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(u){return qi.add(t,u),e&&e(u),r.manager.itemEnd(t),u}).catch(function(u){s&&s(u),qi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});qi.add(t,c),r.manager.itemStart(t)}}class e_ extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class n_{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,o;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,u=e+e;c!==u;++c)if(n[c]!==n[c+e]){a.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,o=s;r!==o;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,s){Ze.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const o=this._workIndex*r;Ze.multiplyQuaternionsFlat(t,o,t,e,t,n),Ze.slerpFlat(t,e,t,e,t,o,s)}_lerp(t,e,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=e+a;t[c]=t[c]*o+t[n+a]*s}}_lerpAdditive(t,e,n,s,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*s}}}const Bl="\\[\\]\\.:\\/",i_=new RegExp("["+Bl+"]","g"),Gl="[^"+Bl+"]",s_="[^"+Bl.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",Gl),o_=/(WCOD+)?/.source.replace("WCOD",s_),a_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),c_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),l_=new RegExp("^"+r_+o_+a_+c_+"$"),u_=["material","materials","bones","map"];class h_{constructor(t,e,n){const s=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Ie{constructor(t,e,n){this.path=e,this.parsedPath=n||Ie.parseTrackName(e),this.node=Ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ie.Composite(t,e,n):new Ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(t){const e=l_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);u_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const o=t[s];if(o===void 0){const u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ie.Composite=h_;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class d_{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,o=r.length,a=new Array(o),c={endingStart:2400,endingEnd:2400};for(let u=0;u!==o;++u){const h=r[u].createInterpolant(null);a[u]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,o=r/s,a=s/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,u=a.sampleValues;return c[0]=r,c[1]=r+n,u[0]=t/o,u[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const c=this._interpolants,u=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulateAdditive(a);break;case 2500:default:for(let h=0,l=c.length;h!==l;++h)c[h].evaluate(o),u[h].accumulate(s,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const o=n===2202;if(t===0)return r===-1?s:o&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=e||s<0){const a=Math.floor(s/e);s-=e*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const u=t<0;this._setEndings(u,!u,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=e,a[1]=r+t,c[1]=n,this}}const f_=new Float32Array(1);class p_ extends _s{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,o=t._propertyBindings,a=t._interpolants,c=n.uuid,u=this._bindingsByRootAndName;let h=u[c];h===void 0&&(h={},u[c]=h);for(let l=0;l!==r;++l){const d=s[l],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[l]=g;else{if(g=o[l],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}const b=e&&e._propertyBindings[l].binding.parsedPath;g=new n_(Ie.create(n,p,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),o[l]=g}a[l].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=s.length,s.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,u=c[c.length-1],h=t._byClipCacheIndex;u._byClipCacheIndex=h,c[h]=u,c.pop(),t._byClipCacheIndex=null;const l=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete l[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[e];o===void 0&&(o={},s[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=e[e.length-1],u=t._cacheIndex;c._cacheIndex=u,e[u]=c,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Ip(new Float32Array(2),new Float32Array(2),1,f_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let o=typeof t=="string"?il.findByName(s,t):t;const a=o!==null?o.uuid:t,c=this._actionsByClip[a];let u=null;if(n===void 0&&(o!==null?n=o.blendMode:n=2500),c!==void 0){const l=c.actionByRoot[r];if(l!==void 0&&l.blendMode===n)return l;u=c.knownActions[0],o===null&&(o=u._clip)}if(o===null)return null;const h=new d_(this,o,e,n);return this._bindAction(h,u),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?il.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let u=0;u!==n;++u)e[u]._update(s,t,r,o);const a=this._bindings,c=this._nActiveBindings;for(let u=0;u!==c;++u)a[u].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const u=o[a];this._deactivateAction(u);const h=u._cacheIndex,l=e[e.length-1];u._cacheIndex=null,u._byClipCacheIndex=null,l._cacheIndex=h,e[h]=l,e.pop(),this._removeInactiveBindingsForAction(u)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class sl extends Il{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const $u=new k,wo=new k;class m_{constructor(t=new k,e=new k){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){$u.subVectors(t,this.start),wo.subVectors(this.end,this.start);const n=wo.dot(wo);let r=wo.dot($u)/n;return e&&(r=_e(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Yu(i,t,e,n){const s=g_(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function g_(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Np(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function __(i){const t=new WeakMap;function e(a,c){const u=a.array,h=a.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:l}}function n(a,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,a),l.length===0)i.bufferSubData(u,0,h);else{l.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<l.length;p++){const g=l[d],b=l[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,l[d]=b)}l.length=d+1;for(let p=0,g=l.length;p<g;p++){const b=l[p];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
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
#endif`,v_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A_=`#ifdef USE_AOMAP
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
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_=`#ifdef USE_BATCHING
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
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,P_=`#ifdef USE_IRIDESCENCE
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
#endif`,L_=`#ifdef USE_BUMPMAP
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,z_=`#define PI 3.141592653589793
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
} // validated`,H_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V_=`vec3 transformedNormal = objectNormal;
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
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,J_=`#ifdef USE_ENVMAP
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
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rb=`#ifdef USE_GRADIENTMAP
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
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
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
#endif`,gb=`struct PhysicalMaterial {
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
}`,_b=`
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
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
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nx=`float getShadowMask() {
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
}`,ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
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
#endif`,rx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
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
#endif`,ax=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hx=`#ifdef USE_TRANSMISSION
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
#endif`,dx=`#ifdef USE_TRANSMISSION
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
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Ex=`#define DISTANCE
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
}`,Tx=`#define DISTANCE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`uniform float scale;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,Px=`#include <common>
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Dx=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,Nx=`#define MATCAP
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
}`,Ux=`#define MATCAP
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
}`,Ox=`#define NORMAL
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
}`,kx=`#define NORMAL
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
}`,Bx=`#define PHONG
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
}`,Gx=`#define PHONG
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
}`,zx=`#define STANDARD
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
}`,Hx=`#define STANDARD
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
}`,Vx=`#define TOON
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
}`,Wx=`#define TOON
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
}`,jx=`uniform float size;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,$x=`uniform float rotation;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:b_,alphahash_pars_fragment:x_,alphamap_fragment:v_,alphamap_pars_fragment:y_,alphatest_fragment:M_,alphatest_pars_fragment:S_,aomap_fragment:A_,aomap_pars_fragment:E_,batching_pars_vertex:T_,batching_vertex:w_,begin_vertex:R_,beginnormal_vertex:C_,bsdfs:I_,iridescence_fragment:P_,bumpmap_pars_fragment:L_,clipping_planes_fragment:D_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:U_,color_fragment:O_,color_pars_fragment:k_,color_pars_vertex:B_,color_vertex:G_,common:z_,cube_uv_reflection_fragment:H_,defaultnormal_vertex:V_,displacementmap_pars_vertex:W_,displacementmap_vertex:j_,emissivemap_fragment:X_,emissivemap_pars_fragment:q_,colorspace_fragment:K_,colorspace_pars_fragment:$_,envmap_fragment:Y_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:J_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:ub,envmap_vertex:tb,fog_vertex:eb,fog_pars_vertex:nb,fog_fragment:ib,fog_pars_fragment:sb,gradientmap_pars_fragment:rb,lightmap_pars_fragment:ob,lights_lambert_fragment:ab,lights_lambert_pars_fragment:cb,lights_pars_begin:lb,lights_toon_fragment:hb,lights_toon_pars_fragment:db,lights_phong_fragment:fb,lights_phong_pars_fragment:pb,lights_physical_fragment:mb,lights_physical_pars_fragment:gb,lights_fragment_begin:_b,lights_fragment_maps:bb,lights_fragment_end:xb,logdepthbuf_fragment:vb,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:Mb,logdepthbuf_vertex:Sb,map_fragment:Ab,map_pars_fragment:Eb,map_particle_fragment:Tb,map_particle_pars_fragment:wb,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:Cb,morphinstance_vertex:Ib,morphcolor_vertex:Pb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Db,morphtarget_vertex:Fb,normal_fragment_begin:Nb,normal_fragment_maps:Ub,normal_pars_fragment:Ob,normal_pars_vertex:kb,normal_vertex:Bb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Vb,iridescence_pars_fragment:Wb,opaque_fragment:jb,packing:Xb,premultiplied_alpha_fragment:qb,project_vertex:Kb,dithering_fragment:$b,dithering_pars_fragment:Yb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:tx,shadowmap_vertex:ex,shadowmask_pars_fragment:nx,skinbase_vertex:ix,skinning_pars_vertex:sx,skinning_vertex:rx,skinnormal_vertex:ox,specularmap_fragment:ax,specularmap_pars_fragment:cx,tonemapping_fragment:lx,tonemapping_pars_fragment:ux,transmission_fragment:hx,transmission_pars_fragment:dx,uv_pars_fragment:fx,uv_pars_vertex:px,uv_vertex:mx,worldpos_vertex:gx,background_vert:_x,background_frag:bx,backgroundCube_vert:xx,backgroundCube_frag:vx,cube_vert:yx,cube_frag:Mx,depth_vert:Sx,depth_frag:Ax,distanceRGBA_vert:Ex,distanceRGBA_frag:Tx,equirect_vert:wx,equirect_frag:Rx,linedashed_vert:Cx,linedashed_frag:Ix,meshbasic_vert:Px,meshbasic_frag:Lx,meshlambert_vert:Dx,meshlambert_frag:Fx,meshmatcap_vert:Nx,meshmatcap_frag:Ux,meshnormal_vert:Ox,meshnormal_frag:kx,meshphong_vert:Bx,meshphong_frag:Gx,meshphysical_vert:zx,meshphysical_frag:Hx,meshtoon_vert:Vx,meshtoon_frag:Wx,points_vert:jx,points_frag:Xx,shadow_vert:qx,shadow_frag:Kx,sprite_vert:$x,sprite_frag:Yx},Pt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Mn={basic:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:mn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:mn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:mn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:mn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:mn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:mn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:mn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:mn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:mn([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:mn([Pt.lights,Pt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Mn.physical={uniforms:mn([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Ro={r:0,b:0,g:0},ns=new Un,Zx=new re;function Jx(i,t,e,n,s,r,o){const a=new Kt(0);let c=r===!0?0:1,u,h,l=null,d=0,p=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function b(M){let y=!1;const E=g(M);E===null?f(a,c):E&&E.isColor&&(f(E,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===306)?(h===void 0&&(h=new Me(new Ci(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:Qs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(y.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zx.makeRotationFromEuler(ns)),h.material.toneMapped=Ee.getTransfer(E.colorSpace)!==Oe,(l!==E||d!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=E,d=E.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Me(new Yn(2,2),new Ii({name:"BackgroundMaterial",uniforms:Qs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Ee.getTransfer(E.colorSpace)!==Oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(l!==E||d!==E.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,l=E,d=E.version,p=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function f(M,y){M.getRGB(Ro,bp(i)),n.buffers.color.setClear(Ro.r,Ro.g,Ro.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:b,addToRenderList:m,dispose:v}}function Qx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(S,L,B,z,X){let V=!1;const O=l(z,B,L);r!==O&&(r=O,u(r.object)),V=p(S,z,B,X),V&&g(S,z,B,X),X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(S,L,B,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return i.createVertexArray()}function u(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function l(S,L,B){const z=B.wireframe===!0;let X=n[S.id];X===void 0&&(X={},n[S.id]=X);let V=X[L.id];V===void 0&&(V={},X[L.id]=V);let O=V[z];return O===void 0&&(O=d(c()),V[z]=O),O}function d(S){const L=[],B=[],z=[];for(let X=0;X<e;X++)L[X]=0,B[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,B,z){const X=r.attributes,V=L.attributes;let O=0;const H=B.getAttributes();for(const G in H)if(H[G].location>=0){const Y=X[G];let ut=V[G];if(ut===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),Y===void 0||Y.attribute!==ut||ut&&Y.data!==ut.data)return!0;O++}return r.attributesNum!==O||r.index!==z}function g(S,L,B,z){const X={},V=L.attributes;let O=0;const H=B.getAttributes();for(const G in H)if(H[G].location>=0){let Y=V[G];Y===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const ut={};ut.attribute=Y,Y&&Y.data&&(ut.data=Y.data),X[G]=ut,O++}r.attributes=X,r.attributesNum=O,r.index=z}function b(){const S=r.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const B=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;B[S]=1,z[S]===0&&(i.enableVertexAttribArray(S),z[S]=1),X[S]!==L&&(i.vertexAttribDivisor(S,L),X[S]=L)}function v(){const S=r.newAttributes,L=r.enabledAttributes;for(let B=0,z=L.length;B<z;B++)L[B]!==S[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function M(S,L,B,z,X,V,O){O===!0?i.vertexAttribIPointer(S,L,B,X,V):i.vertexAttribPointer(S,L,B,z,X,V)}function y(S,L,B,z){b();const X=z.attributes,V=B.getAttributes(),O=L.defaultAttributeValues;for(const H in V){const G=V[H];if(G.location>=0){let Q=X[H];if(Q===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const Y=Q.normalized,ut=Q.itemSize,St=t.get(Q);if(St===void 0)continue;const Ct=St.buffer,at=St.type,_t=St.bytesPerElement,ct=at===i.INT||at===i.UNSIGNED_INT||Q.gpuType===1013;if(Q.isInterleavedBufferAttribute){const J=Q.data,vt=J.stride,Tt=Q.offset;if(J.isInstancedInterleavedBuffer){for(let Nt=0;Nt<G.locationSize;Nt++)f(G.location+Nt,J.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Nt=0;Nt<G.locationSize;Nt++)m(G.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Nt=0;Nt<G.locationSize;Nt++)M(G.location+Nt,ut/G.locationSize,at,Y,vt*_t,(Tt+ut/G.locationSize*Nt)*_t,ct)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)f(G.location+J,Q.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let J=0;J<G.locationSize;J++)M(G.location+J,ut/G.locationSize,at,Y,ut*_t,ut/G.locationSize*J*_t,ct)}}else if(O!==void 0){const Y=O[H];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(G.location,Y);break;case 3:i.vertexAttrib3fv(G.location,Y);break;case 4:i.vertexAttrib4fv(G.location,Y);break;default:i.vertexAttrib1fv(G.location,Y)}}}}v()}function E(){P();for(const S in n){const L=n[S];for(const B in L){const z=L[B];for(const X in z)h(z[X].object),delete z[X];delete L[B]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const B in L){const z=L[B];for(const X in z)h(z[X].object),delete z[X];delete L[B]}delete n[S.id]}function C(S){for(const L in n){const B=n[L];if(B[S.id]===void 0)continue;const z=B[S.id];for(const X in z)h(z[X].object),delete z[X];delete B[S.id]}}function P(){A(),o=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function tv(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function o(u,h,l){l!==0&&(i.drawArraysInstanced(n,u,h,l),e.update(h,n,l))}function a(u,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,l);let p=0;for(let g=0;g<l;g++)p+=h[g];e.update(p,n,1)}function c(u,h,l,d){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,l);let g=0;for(let b=0;b<l;b++)g+=h[b]*d[b];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ev(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==1023&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:E,maxSamples:w}}function nv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new as,a=new he,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const p=l.length!==0||d||n!==0||s;return s=d,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){e=h(l,d,0)},this.setState=function(l,d,p){const g=l.clippingPlanes,b=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!s||g===null||g.length===0||r&&!m)r?h(null):u();else{const v=r?0:n,M=v*4;let y=f.clippingState||null;c.value=y,y=h(g,d,M,p);for(let E=0;E!==M;++E)y[E]=e[E];f.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,d,p,g){const b=l!==null?l.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const f=p+b*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,y=p;M!==b;++M,y+=4)o.copy(l[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function iv(i){let t=new WeakMap;function e(o,a){return a===303?o.mapping=301:a===304&&(o.mapping=302),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===303||a===304)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new x0(c.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Xs=4,Zu=[.125,.215,.35,.446,.526,.582],ls=20,ac=new kl,Ju=new Kt;let cc=null,lc=0,uc=0,hc=!1;const cs=(1+Math.sqrt(5))/2,Bs=1/cs,Qu=[new k(-cs,Bs,0),new k(cs,Bs,0),new k(-Bs,0,cs),new k(Bs,0,cs),new k(0,cs,-Bs),new k(0,cs,Bs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class th{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=hc,t.scissorTest=!1,Co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:xn,depthBuffer:!1},s=eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sv(r)),this._blurMaterial=rv(r,t,e)}return s}_compileMaterial(t){const e=new Me(this._lodPlanes[0],t);this._renderer.compile(e,ac)}_sceneToCubeUV(t,e,n,s){const a=new _n(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,d=h.toneMapping;h.getClearColor(Ju),h.toneMapping=0,h.autoClear=!1;const p=new nn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),g=new Me(new Ci,p);let b=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,b=!0):(p.color.copy(Ju),b=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,u[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,u[f]));const M=this._cubeSize;Co(s,v*M,f>2?M:0,M,M),h.setRenderTarget(s),b&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=l,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Co(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ac)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qu[(s-r-1)%Qu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new Me(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ls-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const f=[];let v=0;for(let C=0;C<ls;++C){const P=C/b,A=Math.exp(-P*P/2);f.push(A),C===0?v+=A:C<m&&(v+=2*A)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const y=this._sizeLods[s],E=3*y*(s>M-Xs?s-M+Xs:0),w=4*(this._cubeSize-y);Co(e,E,w,3*y,2*y),c.setRenderTarget(e),c.render(l,ac)}}function sv(i){const t=[],e=[],n=[];let s=i;const r=i-Xs+1+Zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Xs?c=Zu[o-i+Xs-1]:o===0&&(c=0),n.push(c);const u=1/(a-2),h=-u,l=1+u,d=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,g=6,b=3,m=2,f=1,v=new Float32Array(b*g*p),M=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,P=w>2?0:-1,A=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(A,b*g*w),M.set(d,m*g*w);const S=[w,w,w,w,w,w];y.set(S,f*g*w)}const E=new Xe;E.setAttribute("position",new Ce(v,b)),E.setAttribute("uv",new Ce(M,m)),E.setAttribute("faceIndex",new Ce(y,f)),t.push(E),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function eh(i,t,e){const n=new ms(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Co(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rv(i,t,e){const n=new Float32Array(ls),s=new k(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function nh(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ih(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zl(){return`

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
	`}function ov(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===303||c===304,h=c===301||c===302;if(u||h){let l=t.get(a);const d=l!==void 0?l.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new th(i)),l=u?e.fromEquirectangular(a,l):e.fromCubemap(a,l),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),l.texture;if(l!==void 0)return l.texture;{const p=a.image;return u&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new th(i)),l=u?e.fromEquirectangular(a):e.fromCubemap(a),l.texture.pmremVersion=a.pmremVersion,t.set(a,l),a.addEventListener("dispose",r),l.texture):null}}}return a}function s(a){let c=0;const u=6;for(let h=0;h<u;h++)a[h]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function av(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cv(i,t,e,n){const s={},r=new WeakMap;function o(l){const d=l.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(l,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(l){const d=l.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function u(l){const d=[],p=l.index,g=l.attributes.position;let b=0;if(p!==null){const v=p.array;b=p.version;for(let M=0,y=v.length;M<y;M+=3){const E=v[M+0],w=v[M+1],C=v[M+2];d.push(E,w,w,C,C,E)}}else if(g!==void 0){const v=g.array;b=g.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const E=M+0,w=M+1,C=M+2;d.push(E,w,w,C,C,E)}}else return;const m=new(hp(d)?_p:gp)(d,1);m.version=b;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const d=r.get(l);if(d){const p=l.index;p!==null&&d.version<p.version&&u(l)}else u(l);return r.get(l)}return{get:a,update:c,getWireframeAttribute:h}}function lv(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function u(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function l(d,p,g,b){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,b,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*b[v];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function uv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hv(i,t,e){const n=new WeakMap,s=new me;function r(o,a,c){const u=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==l){let A=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;p===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let y=a.attributes.position.count*M,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*E*4*l),C=new fp(w,y,E,l);C.type=1015,C.needsUpdate=!0;const P=M*4;for(let S=0;S<l;S++){const L=m[S],B=f[S],z=v[S],X=y*E*4*S;for(let V=0;V<L.count;V++){const O=V*P;p===!0&&(s.fromBufferAttribute(L,V),w[X+O+0]=s.x,w[X+O+1]=s.y,w[X+O+2]=s.z,w[X+O+3]=0),g===!0&&(s.fromBufferAttribute(B,V),w[X+O+4]=s.x,w[X+O+5]=s.y,w[X+O+6]=s.z,w[X+O+7]=0),b===!0&&(s.fromBufferAttribute(z,V),w[X+O+8]=s.x,w[X+O+9]=s.y,w[X+O+10]=s.z,w[X+O+11]=z.itemSize===4?s.w:1)}}d={count:l,texture:C,size:new qt(y,E)},n.set(a,d),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let b=0;b<u.length;b++)p+=u[b];const g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dv(i,t,e,n){let s=new WeakMap;function r(c){const u=n.render.frame,h=c.geometry,l=t.get(c,h);if(s.get(l)!==u&&(t.update(l),s.set(l,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return l}function o(){s=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const Up=new Je,sh=new wp(1,1),Op=new fp,kp=new s0,Bp=new vp,rh=[],oh=[],ah=new Float32Array(16),ch=new Float32Array(9),lh=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rh[s];if(r===void 0&&(r=new Float32Array(s),rh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=oh[t];e===void 0&&(e=new Int32Array(t),oh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function gv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function _v(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;lh.set(n),i.uniformMatrix2fv(this.addr,!1,lh),tn(e,n)}}function bv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;ch.set(n),i.uniformMatrix3fv(this.addr,!1,ch),tn(e,n)}}function xv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;ah.set(n),i.uniformMatrix4fv(this.addr,!1,ah),tn(e,n)}}function vv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function Mv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function Sv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function Av(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ev(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function Rv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sh.compareFunction=515,r=sh):r=Up,e.setTexture2D(t||r,s)}function Cv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kp,s)}function Iv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bp,s)}function Pv(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Op,s)}function Lv(i){switch(i){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return _v;case 35675:return bv;case 35676:return xv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return Mv;case 35669:case 35673:return Sv;case 5125:return Av;case 36294:return Ev;case 36295:return Tv;case 36296:return wv;case 35678:case 36198:case 36298:case 36306:case 35682:return Rv;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Dv(i,t){i.uniform1fv(this.addr,t)}function Fv(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function Nv(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Uv(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function Ov(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kv(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bv(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gv(i,t){i.uniform1iv(this.addr,t)}function zv(i,t){i.uniform2iv(this.addr,t)}function Hv(i,t){i.uniform3iv(this.addr,t)}function Vv(i,t){i.uniform4iv(this.addr,t)}function Wv(i,t){i.uniform1uiv(this.addr,t)}function jv(i,t){i.uniform2uiv(this.addr,t)}function Xv(i,t){i.uniform3uiv(this.addr,t)}function qv(i,t){i.uniform4uiv(this.addr,t)}function Kv(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Up,r[o])}function $v(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kp,r[o])}function Yv(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bp,r[o])}function Zv(i,t,e){const n=this.cache,s=t.length,r=Ea(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Op,r[o])}function Jv(i){switch(i){case 5126:return Dv;case 35664:return Fv;case 35665:return Nv;case 35666:return Uv;case 35674:return Ov;case 35675:return kv;case 35676:return Bv;case 5124:case 35670:return Gv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return jv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Zv}}class Qv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lv(e.type)}}class ty{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jv(e.type)}}class ey{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function uh(i,t){i.seq.push(t),i.map[t.id]=t}function ny(i,t,e){const n=i.name,s=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),o=dc.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){uh(e,u===void 0?new Qv(a,i,t):new ty(a,i,t));break}else{let l=e.map[a];l===void 0&&(l=new ey(a),uh(e,l)),e=l}}}class na{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ny(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function hh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const iy=37297;let sy=0;function ry(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const dh=new he;function oy(i){Ee._getMatrix(dh,Ee.workingColorSpace,i);const t=`mat3( ${dh.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(i)){case la:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ry(i.getShaderSource(t),o)}else return s}function ay(i,t){const e=oy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cy(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Io=new k;function ly(){Ee.getLuminanceCoefficients(Io);const i=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function hy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Dr(i){return i!==""}function ph(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(fy,my)}const py=new Map;function my(i,t){let e=pe[t];if(e===void 0){const n=py.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gh(i){return i.replace(gy,_y)}function _y(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function by(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function xy(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vy(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function yy(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function My(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Sy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=by(e),u=xy(e),h=vy(e),l=yy(e),d=My(e),p=uy(e),g=hy(r),b=s.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),f.length>0&&(f+=`
`)):(m=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),f=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?pe.tonemapping_pars_fragment:"",e.toneMapping!==0?cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=rl(o),o=ph(o,e),o=mh(o,e),a=rl(a),a=ph(a,e),a=mh(a,e),o=gh(o),a=gh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=v+m+o,y=v+f+a,E=hh(s,s.VERTEX_SHADER,M),w=hh(s,s.FRAGMENT_SHADER,y);s.attachShader(b,E),s.attachShader(b,w),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function C(L){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(b).trim(),z=s.getShaderInfoLog(E).trim(),X=s.getShaderInfoLog(w).trim();let V=!0,O=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,E,w);else{const H=fh(s,E,"vertex"),G=fh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+H+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||X==="")&&(O=!1);O&&(L.diagnostics={runnable:V,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:f}})}s.deleteShader(E),s.deleteShader(w),P=new na(s,b),A=dy(s,b)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(b,iy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=w,this}let Ay=0;class Ey{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ty(t),e.set(t,n)),n}}class Ty{constructor(t){this.id=Ay++,this.code=t,this.usedTimes=0}}function wy(i,t,e,n,s,r,o){const a=new pp,c=new Ey,u=new Set,h=[],l=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return u.add(A),A===0?"uv":`uv${A}`}function m(A,S,L,B,z){const X=B.fog,V=z.geometry,O=A.isMeshStandardMaterial?B.environment:null,H=(A.isMeshStandardMaterial?e:t).get(A.envMap||O),G=H&&H.mapping===306?H.image.height:null,Q=g[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const Y=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=Y!==void 0?Y.length:0;let St=0;V.morphAttributes.position!==void 0&&(St=1),V.morphAttributes.normal!==void 0&&(St=2),V.morphAttributes.color!==void 0&&(St=3);let Ct,at,_t,ct;if(Q){const ve=Mn[Q];Ct=ve.vertexShader,at=ve.fragmentShader}else Ct=A.vertexShader,at=A.fragmentShader,c.update(A),_t=c.getVertexShaderID(A),ct=c.getFragmentShaderID(A);const J=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Tt=z.isInstancedMesh===!0,Nt=z.isBatchedMesh===!0,ee=!!A.map,Vt=!!A.matcap,le=!!H,W=!!A.aoMap,Se=!!A.lightMap,ie=!!A.bumpMap,te=!!A.normalMap,Dt=!!A.displacementMap,be=!!A.emissiveMap,At=!!A.metalnessMap,D=!!A.roughnessMap,T=A.anisotropy>0,q=A.clearcoat>0,ot=A.dispersion>0,xt=A.iridescence>0,it=A.sheen>0,Lt=A.transmission>0,Et=T&&!!A.anisotropyMap,Ut=q&&!!A.clearcoatMap,de=q&&!!A.clearcoatNormalMap,wt=q&&!!A.clearcoatRoughnessMap,Gt=xt&&!!A.iridescenceMap,Xt=xt&&!!A.iridescenceThicknessMap,$t=it&&!!A.sheenColorMap,Ot=it&&!!A.sheenRoughnessMap,fe=!!A.specularMap,oe=!!A.specularColorMap,Ae=!!A.specularIntensityMap,$=Lt&&!!A.transmissionMap,It=Lt&&!!A.thicknessMap,ft=!!A.gradientMap,Mt=!!A.alphaMap,Bt=A.alphaTest>0,Ft=!!A.alphaHash,Qt=!!A.extensions;let ke=0;A.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=i.toneMapping);const We={shaderID:Q,shaderType:A.type,shaderName:A.name,vertexShader:Ct,fragmentShader:at,defines:A.defines,customVertexShaderID:_t,customFragmentShaderID:ct,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&z._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&z.instanceColor!==null,instancingMorph:Tt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:xn,alphaToCoverage:!!A.alphaToCoverage,map:ee,matcap:Vt,envMap:le,envMapMode:le&&H.mapping,envMapCubeUVHeight:G,aoMap:W,lightMap:Se,bumpMap:ie,normalMap:te,displacementMap:d&&Dt,emissiveMap:be,normalMapObjectSpace:te&&A.normalMapType===1,normalMapTangentSpace:te&&A.normalMapType===0,metalnessMap:At,roughnessMap:D,anisotropy:T,anisotropyMap:Et,clearcoat:q,clearcoatMap:Ut,clearcoatNormalMap:de,clearcoatRoughnessMap:wt,dispersion:ot,iridescence:xt,iridescenceMap:Gt,iridescenceThicknessMap:Xt,sheen:it,sheenColorMap:$t,sheenRoughnessMap:Ot,specularMap:fe,specularColorMap:oe,specularIntensityMap:Ae,transmission:Lt,transmissionMap:$,thicknessMap:It,gradientMap:ft,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Bt,alphaHash:Ft,combine:A.combine,mapUv:ee&&b(A.map.channel),aoMapUv:W&&b(A.aoMap.channel),lightMapUv:Se&&b(A.lightMap.channel),bumpMapUv:ie&&b(A.bumpMap.channel),normalMapUv:te&&b(A.normalMap.channel),displacementMapUv:Dt&&b(A.displacementMap.channel),emissiveMapUv:be&&b(A.emissiveMap.channel),metalnessMapUv:At&&b(A.metalnessMap.channel),roughnessMapUv:D&&b(A.roughnessMap.channel),anisotropyMapUv:Et&&b(A.anisotropyMap.channel),clearcoatMapUv:Ut&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:de&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&b(A.sheenRoughnessMap.channel),specularMapUv:fe&&b(A.specularMap.channel),specularColorMapUv:oe&&b(A.specularColorMap.channel),specularIntensityMapUv:Ae&&b(A.specularIntensityMap.channel),transmissionMapUv:$&&b(A.transmissionMap.channel),thicknessMapUv:It&&b(A.thicknessMap.channel),alphaMapUv:Mt&&b(A.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(te||T),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(ee||Mt),fog:!!X,useFog:A.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:vt,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:ee&&A.map.isVideoTexture===!0&&Ee.getTransfer(A.map.colorSpace)===Oe,decodeVideoTextureEmissive:be&&A.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(A.emissiveMap.colorSpace)===Oe,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Qt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&A.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return We.vertexUv1s=u.has(1),We.vertexUv2s=u.has(2),We.vertexUv3s=u.has(3),u.clear(),We}function f(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const L in A.defines)S.push(L),S.push(A.defines[L]);return A.isRawShaderMaterial===!1&&(v(S,A),M(S,A),S.push(i.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function v(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function M(A,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const S=g[A.type];let L;if(S){const B=Mn[S];L=Rl.clone(B.uniforms)}else L=A.uniforms;return L}function E(A,S){let L;for(let B=0,z=h.length;B<z;B++){const X=h[B];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new Sy(i,S,A,r),h.push(L)),L}function w(A){if(--A.usedTimes===0){const S=h.indexOf(A);h[S]=h[h.length-1],h.pop(),A.destroy()}}function C(A){c.remove(A)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:P}}function Ry(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(l,d,p,g,b,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:d,material:p,groupOrder:g,renderOrder:l.renderOrder,z:b,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=l.renderOrder,f.z=b,f.group=m),t++,f}function a(l,d,p,g,b,m){const f=o(l,d,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(l,d,p,g,b,m){const f=o(l,d,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function u(l,d){e.length>1&&e.sort(l||Cy),n.length>1&&n.sort(d||bh),s.length>1&&s.sort(d||bh)}function h(){for(let l=t,d=i.length;l<d;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:u}}function Iy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xh,i.set(n,[o])):s>=r.length?(o=new xh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Py(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Kt};break;case"SpotLight":e={position:new k,direction:new k,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function Ly(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dy=0;function Fy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ny(i){const t=new Py,e=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);const s=new k,r=new re,o=new re;function a(u){let h=0,l=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,v=0,M=0,y=0,E=0,w=0,C=0;u.sort(Fy);for(let A=0,S=u.length;A<S;A++){const L=u[A],B=L.color,z=L.intensity,X=L.distance,V=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*z,l+=B.g*z,d+=B.b*z;else if(L.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(L.sh.coefficients[O],z);C++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,G=e.get(L);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=O,p++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(B).multiplyScalar(z),O.distance=X,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,n.spot[b]=O;const H=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,H.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[b]=H.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[b]=G,n.spotShadowMap[b]=V,y++}b++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(B).multiplyScalar(z),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=O,m++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){const H=L.shadow,G=e.get(L);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=L.shadow.matrix,M++}n.point[g]=O,g++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(z),O.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[f]=O,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==y||P.numSpotMaps!==E||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=b,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=y,P.numSpotMaps=E,P.numLightProbes=C,n.version=Dy++)}function c(u,h){let l=0,d=0,p=0,g=0,b=0;const m=h.matrixWorldInverse;for(let f=0,v=u.length;f<v;f++){const M=u[f];if(M.isDirectionalLight){const y=n.directional[l];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),l++}else if(M.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const y=n.hemi[b];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),b++}}}return{setup:a,setupView:c,state:n}}function vh(i){const t=new Ny(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Uy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new vh(i),t.set(s,[a])):r>=o.length?(a=new vh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
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
}`;function By(i,t,e){let n=new Ll;const s=new qt,r=new qt,o=new me,a=new D0({depthPacking:3201}),c=new F0,u={},h=e.maxTextureSize,l={0:1,1:0,2:2},d=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Oy,fragmentShader:ky}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Me(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const A=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(0),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=f!==3&&this.type===3,X=f===3&&this.type!==3;for(let V=0,O=w.length;V<O;V++){const H=w[V],G=H.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Q=G.getFrameExtents();if(s.multiply(Q),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,G.mapSize.y=r.y)),G.map===null||z===!0||X===!0){const ut=this.type!==3?{minFilter:1003,magFilter:1003}:{};G.map!==null&&G.map.dispose(),G.map=new ms(s.x,s.y,ut),G.map.texture.name=H.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const Y=G.getViewportCount();for(let ut=0;ut<Y;ut++){const St=G.getViewport(ut);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),B.viewport(o),G.updateMatrices(H,ut),n=G.getFrustum(),y(C,P,G.camera,H,this.type)}G.isPointLightShadow!==!0&&this.type===3&&v(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,S,L)};function v(w,C){const P=t.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ms(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,p,b,null)}function M(w,C,P,A){let S=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)S=L;else if(S=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=S.uuid,z=C.uuid;let X=u[B];X===void 0&&(X={},u[B]=X);let V=X[z];V===void 0&&(V=S.clone(),X[z]=V,C.addEventListener("dispose",E)),S=V}if(S.visible=C.visible,S.wireframe=C.wireframe,A===3?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:l[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=P}return S}function y(w,C,P,A,S){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=t.update(w),X=w.material;if(Array.isArray(X)){const V=z.groups;for(let O=0,H=V.length;O<H;O++){const G=V[O],Q=X[G.materialIndex];if(Q&&Q.visible){const Y=M(w,Q,A,S);w.onBeforeShadow(i,w,C,P,z,Y,G),i.renderBufferDirect(P,null,z,Y,w,G),w.onAfterShadow(i,w,C,P,z,Y,G)}}}else if(X.visible){const V=M(w,X,A,S);w.onBeforeShadow(i,w,C,P,z,V,null),i.renderBufferDirect(P,null,z,V,w,null),w.onAfterShadow(i,w,C,P,z,V,null)}}const B=w.children;for(let z=0,X=B.length;z<X;z++)y(B[z],C,P,A,S)}function E(w){w.target.removeEventListener("dispose",E);for(const P in u){const A=u[P],S=w.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const Gy={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function zy(i,t){function e(){let $=!1;const It=new me;let ft=null;const Mt=new me(0,0,0,0);return{setMask:function(Bt){ft!==Bt&&!$&&(i.colorMask(Bt,Bt,Bt,Bt),ft=Bt)},setLocked:function(Bt){$=Bt},setClear:function(Bt,Ft,Qt,ke,We){We===!0&&(Bt*=ke,Ft*=ke,Qt*=ke),It.set(Bt,Ft,Qt,ke),Mt.equals(It)===!1&&(i.clearColor(Bt,Ft,Qt,ke),Mt.copy(It))},reset:function(){$=!1,ft=null,Mt.set(-1,0,0,0)}}}function n(){let $=!1,It=!1,ft=null,Mt=null,Bt=null;return{setReversed:function(Ft){if(It!==Ft){const Qt=t.get("EXT_clip_control");It?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT);const ke=Bt;Bt=null,this.setClear(ke)}It=Ft},getReversed:function(){return It},setTest:function(Ft){Ft?J(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(Ft){ft!==Ft&&!$&&(i.depthMask(Ft),ft=Ft)},setFunc:function(Ft){if(It&&(Ft=Gy[Ft]),Mt!==Ft){switch(Ft){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=Ft}},setLocked:function(Ft){$=Ft},setClear:function(Ft){Bt!==Ft&&(It&&(Ft=1-Ft),i.clearDepth(Ft),Bt=Ft)},reset:function(){$=!1,ft=null,Mt=null,Bt=null,It=!1}}}function s(){let $=!1,It=null,ft=null,Mt=null,Bt=null,Ft=null,Qt=null,ke=null,We=null;return{setTest:function(ve){$||(ve?J(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(ve){It!==ve&&!$&&(i.stencilMask(ve),It=ve)},setFunc:function(ve,ln,fn){(ft!==ve||Mt!==ln||Bt!==fn)&&(i.stencilFunc(ve,ln,fn),ft=ve,Mt=ln,Bt=fn)},setOp:function(ve,ln,fn){(Ft!==ve||Qt!==ln||ke!==fn)&&(i.stencilOp(ve,ln,fn),Ft=ve,Qt=ln,ke=fn)},setLocked:function(ve){$=ve},setClear:function(ve){We!==ve&&(i.clearStencil(ve),We=ve)},reset:function(){$=!1,It=null,ft=null,Mt=null,Bt=null,Ft=null,Qt=null,ke=null,We=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,u=new WeakMap;let h={},l={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,v=null,M=null,y=null,E=null,w=null,C=new Kt(0,0,0),P=0,A=!1,S=null,L=null,B=null,z=null,X=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=H>=2);let Q=null,Y={};const ut=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ct=new me().fromArray(ut),at=new me().fromArray(St);function _t($,It,ft,Mt){const Bt=new Uint8Array(4),Ft=i.createTexture();i.bindTexture($,Ft),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<ft;Qt++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Bt):i.texImage2D(It+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Bt);return Ft}const ct={};ct[i.TEXTURE_2D]=_t(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=_t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=_t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=_t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(3),ie(!1),te(1),J(i.CULL_FACE),W(0);function J($){h[$]!==!0&&(i.enable($),h[$]=!0)}function vt($){h[$]!==!1&&(i.disable($),h[$]=!1)}function Tt($,It){return l[$]!==It?(i.bindFramebuffer($,It),l[$]=It,$===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=It),$===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Nt($,It){let ft=p,Mt=!1;if($){ft=d.get(It),ft===void 0&&(ft=[],d.set(It,ft));const Bt=$.textures;if(ft.length!==Bt.length||ft[0]!==i.COLOR_ATTACHMENT0){for(let Ft=0,Qt=Bt.length;Ft<Qt;Ft++)ft[Ft]=i.COLOR_ATTACHMENT0+Ft;ft.length=Bt.length,Mt=!0}}else ft[0]!==i.BACK&&(ft[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ft)}function ee($){return g!==$?(i.useProgram($),g=$,!0):!1}const Vt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Vt[103]=i.MIN,Vt[104]=i.MAX;const le={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function W($,It,ft,Mt,Bt,Ft,Qt,ke,We,ve){if($===0){b===!0&&(vt(i.BLEND),b=!1);return}if(b===!1&&(J(i.BLEND),b=!0),$!==5){if($!==m||ve!==A){if((f!==100||y!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,y=100),ve)switch($){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}v=null,M=null,E=null,w=null,C.set(0,0,0),P=0,m=$,A=ve}return}Bt=Bt||It,Ft=Ft||ft,Qt=Qt||Mt,(It!==f||Bt!==y)&&(i.blendEquationSeparate(Vt[It],Vt[Bt]),f=It,y=Bt),(ft!==v||Mt!==M||Ft!==E||Qt!==w)&&(i.blendFuncSeparate(le[ft],le[Mt],le[Ft],le[Qt]),v=ft,M=Mt,E=Ft,w=Qt),(ke.equals(C)===!1||We!==P)&&(i.blendColor(ke.r,ke.g,ke.b,We),C.copy(ke),P=We),m=$,A=!1}function Se($,It){$.side===2?vt(i.CULL_FACE):J(i.CULL_FACE);let ft=$.side===1;It&&(ft=!ft),ie(ft),$.blending===1&&$.transparent===!1?W(0):W($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const Mt=$.stencilWrite;a.setTest(Mt),Mt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),be($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie($){S!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),S=$)}function te($){$!==0?(J(i.CULL_FACE),$!==L&&($===1?i.cullFace(i.BACK):$===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),L=$}function Dt($){$!==B&&(O&&i.lineWidth($),B=$)}function be($,It,ft){$?(J(i.POLYGON_OFFSET_FILL),(z!==It||X!==ft)&&(i.polygonOffset(It,ft),z=It,X=ft)):vt(i.POLYGON_OFFSET_FILL)}function At($){$?J(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function D($){$===void 0&&($=i.TEXTURE0+V-1),Q!==$&&(i.activeTexture($),Q=$)}function T($,It,ft){ft===void 0&&(Q===null?ft=i.TEXTURE0+V-1:ft=Q);let Mt=Y[ft];Mt===void 0&&(Mt={type:void 0,texture:void 0},Y[ft]=Mt),(Mt.type!==$||Mt.texture!==It)&&(Q!==ft&&(i.activeTexture(ft),Q=ft),i.bindTexture($,It||ct[$]),Mt.type=$,Mt.texture=It)}function q(){const $=Y[Q];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function wt(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Gt(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function $t($){Ct.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),Ct.copy($))}function Ot($){at.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),at.copy($))}function fe($,It){let ft=u.get(It);ft===void 0&&(ft=new WeakMap,u.set(It,ft));let Mt=ft.get($);Mt===void 0&&(Mt=i.getUniformBlockIndex(It,$.name),ft.set($,Mt))}function oe($,It){const Mt=u.get(It).get($);c.get(It)!==Mt&&(i.uniformBlockBinding(It,Mt,$.__bindingPointIndex),c.set(It,Mt))}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,Y={},l={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,v=null,M=null,y=null,E=null,w=null,C=new Kt(0,0,0),P=0,A=!1,S=null,L=null,B=null,z=null,X=null,Ct.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:vt,bindFramebuffer:Tt,drawBuffers:Nt,useProgram:ee,setBlending:W,setMaterial:Se,setFlipSided:ie,setCullFace:te,setLineWidth:Dt,setPolygonOffset:be,setScissorTest:At,activeTexture:D,bindTexture:T,unbindTexture:q,compressedTexImage2D:ot,compressedTexImage3D:xt,texImage2D:Gt,texImage3D:Xt,updateUBOMapping:fe,uniformBlockBinding:oe,texStorage2D:de,texStorage3D:wt,texSubImage2D:it,texSubImage3D:Lt,compressedTexSubImage2D:Et,compressedTexSubImage3D:Ut,scissor:$t,viewport:Ot,reset:Ae}}function Hy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qt,h=new WeakMap;let l;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return p?new OffscreenCanvas(D,T):zr("canvas")}function b(D,T,q){let ot=1;const xt=At(D);if((xt.width>q||xt.height>q)&&(ot=q/Math.max(xt.width,xt.height)),ot<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const it=Math.floor(ot*xt.width),Lt=Math.floor(ot*xt.height);l===void 0&&(l=g(it,Lt));const Et=T?g(it,Lt):l;return Et.width=it,Et.height=Lt,Et.getContext("2d").drawImage(D,0,0,it,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+it+"x"+Lt+")."),Et}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),D;return D}function m(D){return D.generateMipmaps}function f(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(D,T,q,ot,xt=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let it=T;if(T===i.RED&&(q===i.FLOAT&&(it=i.R32F),q===i.HALF_FLOAT&&(it=i.R16F),q===i.UNSIGNED_BYTE&&(it=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.R8UI),q===i.UNSIGNED_SHORT&&(it=i.R16UI),q===i.UNSIGNED_INT&&(it=i.R32UI),q===i.BYTE&&(it=i.R8I),q===i.SHORT&&(it=i.R16I),q===i.INT&&(it=i.R32I)),T===i.RG&&(q===i.FLOAT&&(it=i.RG32F),q===i.HALF_FLOAT&&(it=i.RG16F),q===i.UNSIGNED_BYTE&&(it=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RG8UI),q===i.UNSIGNED_SHORT&&(it=i.RG16UI),q===i.UNSIGNED_INT&&(it=i.RG32UI),q===i.BYTE&&(it=i.RG8I),q===i.SHORT&&(it=i.RG16I),q===i.INT&&(it=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGB8UI),q===i.UNSIGNED_SHORT&&(it=i.RGB16UI),q===i.UNSIGNED_INT&&(it=i.RGB32UI),q===i.BYTE&&(it=i.RGB8I),q===i.SHORT&&(it=i.RGB16I),q===i.INT&&(it=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),q===i.UNSIGNED_INT&&(it=i.RGBA32UI),q===i.BYTE&&(it=i.RGBA8I),q===i.SHORT&&(it=i.RGBA16I),q===i.INT&&(it=i.RGBA32I)),T===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),T===i.RGBA){const Lt=xt?la:Ee.getTransfer(ot);q===i.FLOAT&&(it=i.RGBA32F),q===i.HALF_FLOAT&&(it=i.RGBA16F),q===i.UNSIGNED_BYTE&&(it=Lt===Oe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function y(D,T){let q;return D?T===null||T===1014||T===1020?q=i.DEPTH24_STENCIL8:T===1015?q=i.DEPTH32F_STENCIL8:T===1012&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===1014||T===1020?q=i.DEPTH_COMPONENT24:T===1015?q=i.DEPTH_COMPONENT32F:T===1012&&(q=i.DEPTH_COMPONENT16),q}function E(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==1003&&D.minFilter!==1006?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function w(D){const T=D.target;T.removeEventListener("dispose",w),P(T),T.isVideoTexture&&h.delete(T)}function C(D){const T=D.target;T.removeEventListener("dispose",C),S(T)}function P(D){const T=n.get(D);if(T.__webglInit===void 0)return;const q=D.source,ot=d.get(q);if(ot){const xt=ot[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&A(D),Object.keys(ot).length===0&&d.delete(q)}n.remove(D)}function A(D){const T=n.get(D);i.deleteTexture(T.__webglTexture);const q=D.source,ot=d.get(q);delete ot[T.__cacheKey],o.memory.textures--}function S(D){const T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(T.__webglFramebuffer[ot]))for(let xt=0;xt<T.__webglFramebuffer[ot].length;xt++)i.deleteFramebuffer(T.__webglFramebuffer[ot][xt]);else i.deleteFramebuffer(T.__webglFramebuffer[ot]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ot])}else{if(Array.isArray(T.__webglFramebuffer))for(let ot=0;ot<T.__webglFramebuffer.length;ot++)i.deleteFramebuffer(T.__webglFramebuffer[ot]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ot=0;ot<T.__webglColorRenderbuffer.length;ot++)T.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ot]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=D.textures;for(let ot=0,xt=q.length;ot<xt;ot++){const it=n.get(q[ot]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),n.remove(q[ot])}n.remove(D)}let L=0;function B(){L=0}function z(){const D=L;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function X(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function V(D,T){const q=n.get(D);if(D.isVideoTexture&&Dt(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const ot=D.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(q,D,T);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function O(D,T){const q=n.get(D);if(D.version>0&&q.__version!==D.version){at(q,D,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function H(D,T){const q=n.get(D);if(D.version>0&&q.__version!==D.version){at(q,D,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function G(D,T){const q=n.get(D);if(D.version>0&&q.__version!==D.version){_t(q,D,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}const Q={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Y={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},ut={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function St(D,T){if(T.type===1015&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===1006||T.magFilter===1007||T.magFilter===1005||T.magFilter===1008||T.minFilter===1006||T.minFilter===1007||T.minFilter===1005||T.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[T.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[T.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[T.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Y[T.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Y[T.minFilter]),T.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===1003||T.minFilter!==1005&&T.minFilter!==1008||T.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ct(D,T){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",w));const ot=T.source;let xt=d.get(ot);xt===void 0&&(xt={},d.set(ot,xt));const it=X(T);if(it!==D.__cacheKey){xt[it]===void 0&&(xt[it]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),xt[it].usedTimes++;const Lt=xt[D.__cacheKey];Lt!==void 0&&(xt[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&A(T)),D.__cacheKey=it,D.__webglTexture=xt[it].texture}return q}function at(D,T,q){let ot=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ot=i.TEXTURE_3D);const xt=Ct(D,T),it=T.source;e.bindTexture(ot,D.__webglTexture,i.TEXTURE0+q);const Lt=n.get(it);if(it.version!==Lt.__version||xt===!0){e.activeTexture(i.TEXTURE0+q);const Et=Ee.getPrimaries(Ee.workingColorSpace),Ut=T.colorSpace===""?null:Ee.getPrimaries(T.colorSpace),de=T.colorSpace===""||Et===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let wt=b(T.image,!1,s.maxTextureSize);wt=be(T,wt);const Gt=r.convert(T.format,T.colorSpace),Xt=r.convert(T.type);let $t=M(T.internalFormat,Gt,Xt,T.colorSpace,T.isVideoTexture);St(ot,T);let Ot;const fe=T.mipmaps,oe=T.isVideoTexture!==!0,Ae=Lt.__version===void 0||xt===!0,$=it.dataReady,It=E(T,wt);if(T.isDepthTexture)$t=y(T.format===1027,T.type),Ae&&(oe?e.texStorage2D(i.TEXTURE_2D,1,$t,wt.width,wt.height):e.texImage2D(i.TEXTURE_2D,0,$t,wt.width,wt.height,0,Gt,Xt,null));else if(T.isDataTexture)if(fe.length>0){oe&&Ae&&e.texStorage2D(i.TEXTURE_2D,It,$t,fe[0].width,fe[0].height);for(let ft=0,Mt=fe.length;ft<Mt;ft++)Ot=fe[ft],oe?$&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Gt,Xt,Ot.data):e.texImage2D(i.TEXTURE_2D,ft,$t,Ot.width,Ot.height,0,Gt,Xt,Ot.data);T.generateMipmaps=!1}else oe?(Ae&&e.texStorage2D(i.TEXTURE_2D,It,$t,wt.width,wt.height),$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt.width,wt.height,Gt,Xt,wt.data)):e.texImage2D(i.TEXTURE_2D,0,$t,wt.width,wt.height,0,Gt,Xt,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){oe&&Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,$t,fe[0].width,fe[0].height,wt.depth);for(let ft=0,Mt=fe.length;ft<Mt;ft++)if(Ot=fe[ft],T.format!==1023)if(Gt!==null)if(oe){if($)if(T.layerUpdates.size>0){const Bt=Yu(Ot.width,Ot.height,T.format,T.type);for(const Ft of T.layerUpdates){const Qt=Ot.data.subarray(Ft*Bt/Ot.data.BYTES_PER_ELEMENT,(Ft+1)*Bt/Ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Ft,Ot.width,Ot.height,1,Gt,Qt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,wt.depth,Gt,Ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,$t,Ot.width,Ot.height,wt.depth,0,Ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?$&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,Ot.width,Ot.height,wt.depth,Gt,Xt,Ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,$t,Ot.width,Ot.height,wt.depth,0,Gt,Xt,Ot.data)}else{oe&&Ae&&e.texStorage2D(i.TEXTURE_2D,It,$t,fe[0].width,fe[0].height);for(let ft=0,Mt=fe.length;ft<Mt;ft++)Ot=fe[ft],T.format!==1023?Gt!==null?oe?$&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Gt,Ot.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,$t,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?$&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Ot.width,Ot.height,Gt,Xt,Ot.data):e.texImage2D(i.TEXTURE_2D,ft,$t,Ot.width,Ot.height,0,Gt,Xt,Ot.data)}else if(T.isDataArrayTexture)if(oe){if(Ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,$t,wt.width,wt.height,wt.depth),$)if(T.layerUpdates.size>0){const ft=Yu(wt.width,wt.height,T.format,T.type);for(const Mt of T.layerUpdates){const Bt=wt.data.subarray(Mt*ft/wt.data.BYTES_PER_ELEMENT,(Mt+1)*ft/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,wt.width,wt.height,1,Gt,Xt,Bt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Gt,Xt,wt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,wt.width,wt.height,wt.depth,0,Gt,Xt,wt.data);else if(T.isData3DTexture)oe?(Ae&&e.texStorage3D(i.TEXTURE_3D,It,$t,wt.width,wt.height,wt.depth),$&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Gt,Xt,wt.data)):e.texImage3D(i.TEXTURE_3D,0,$t,wt.width,wt.height,wt.depth,0,Gt,Xt,wt.data);else if(T.isFramebufferTexture){if(Ae)if(oe)e.texStorage2D(i.TEXTURE_2D,It,$t,wt.width,wt.height);else{let ft=wt.width,Mt=wt.height;for(let Bt=0;Bt<It;Bt++)e.texImage2D(i.TEXTURE_2D,Bt,$t,ft,Mt,0,Gt,Xt,null),ft>>=1,Mt>>=1}}else if(fe.length>0){if(oe&&Ae){const ft=At(fe[0]);e.texStorage2D(i.TEXTURE_2D,It,$t,ft.width,ft.height)}for(let ft=0,Mt=fe.length;ft<Mt;ft++)Ot=fe[ft],oe?$&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,Gt,Xt,Ot):e.texImage2D(i.TEXTURE_2D,ft,$t,Gt,Xt,Ot);T.generateMipmaps=!1}else if(oe){if(Ae){const ft=At(wt);e.texStorage2D(i.TEXTURE_2D,It,$t,ft.width,ft.height)}$&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Gt,Xt,wt)}else e.texImage2D(i.TEXTURE_2D,0,$t,Gt,Xt,wt);m(T)&&f(ot),Lt.__version=it.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function _t(D,T,q){if(T.image.length!==6)return;const ot=Ct(D,T),xt=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const it=n.get(xt);if(xt.version!==it.__version||ot===!0){e.activeTexture(i.TEXTURE0+q);const Lt=Ee.getPrimaries(Ee.workingColorSpace),Et=T.colorSpace===""?null:Ee.getPrimaries(T.colorSpace),Ut=T.colorSpace===""||Lt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const de=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Gt=[];for(let Mt=0;Mt<6;Mt++)!de&&!wt?Gt[Mt]=b(T.image[Mt],!0,s.maxCubemapSize):Gt[Mt]=wt?T.image[Mt].image:T.image[Mt],Gt[Mt]=be(T,Gt[Mt]);const Xt=Gt[0],$t=r.convert(T.format,T.colorSpace),Ot=r.convert(T.type),fe=M(T.internalFormat,$t,Ot,T.colorSpace),oe=T.isVideoTexture!==!0,Ae=it.__version===void 0||ot===!0,$=xt.dataReady;let It=E(T,Xt);St(i.TEXTURE_CUBE_MAP,T);let ft;if(de){oe&&Ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,fe,Xt.width,Xt.height);for(let Mt=0;Mt<6;Mt++){ft=Gt[Mt].mipmaps;for(let Bt=0;Bt<ft.length;Bt++){const Ft=ft[Bt];T.format!==1023?$t!==null?oe?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt,0,0,Ft.width,Ft.height,$t,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt,fe,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt,0,0,Ft.width,Ft.height,$t,Ot,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt,fe,Ft.width,Ft.height,0,$t,Ot,Ft.data)}}}else{if(ft=T.mipmaps,oe&&Ae){ft.length>0&&It++;const Mt=At(Gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,fe,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(wt){oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Gt[Mt].width,Gt[Mt].height,$t,Ot,Gt[Mt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,Gt[Mt].width,Gt[Mt].height,0,$t,Ot,Gt[Mt].data);for(let Bt=0;Bt<ft.length;Bt++){const Qt=ft[Bt].image[Mt].image;oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt+1,0,0,Qt.width,Qt.height,$t,Ot,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt+1,fe,Qt.width,Qt.height,0,$t,Ot,Qt.data)}}else{oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,$t,Ot,Gt[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,fe,$t,Ot,Gt[Mt]);for(let Bt=0;Bt<ft.length;Bt++){const Ft=ft[Bt];oe?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt+1,0,0,$t,Ot,Ft.image[Mt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Bt+1,fe,$t,Ot,Ft.image[Mt])}}}m(T)&&f(i.TEXTURE_CUBE_MAP),it.__version=xt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ct(D,T,q,ot,xt,it){const Lt=r.convert(q.format,q.colorSpace),Et=r.convert(q.type),Ut=M(q.internalFormat,Lt,Et,q.colorSpace),de=n.get(T),wt=n.get(q);if(wt.__renderTarget=T,!de.__hasExternalTextures){const Gt=Math.max(1,T.width>>it),Xt=Math.max(1,T.height>>it);xt===i.TEXTURE_3D||xt===i.TEXTURE_2D_ARRAY?e.texImage3D(xt,it,Ut,Gt,Xt,T.depth,0,Lt,Et,null):e.texImage2D(xt,it,Ut,Gt,Xt,0,Lt,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),te(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,xt,wt.__webglTexture,0,ie(T)):(xt===i.TEXTURE_2D||xt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,xt,wt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(D,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),T.depthBuffer){const ot=T.depthTexture,xt=ot&&ot.isDepthTexture?ot.type:null,it=y(T.stencilBuffer,xt),Lt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=ie(T);te(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,it,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,it,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,it,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,D)}else{const ot=T.textures;for(let xt=0;xt<ot.length;xt++){const it=ot[xt],Lt=r.convert(it.format,it.colorSpace),Et=r.convert(it.type),Ut=M(it.internalFormat,Lt,Et,it.colorSpace),de=ie(T);q&&te(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Ut,T.width,T.height):te(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Ut,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function vt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=n.get(T.depthTexture);ot.__renderTarget=T,(!ot.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);const xt=ot.__webglTexture,it=ie(T);if(T.depthTexture.format===1026)te(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xt,0);else if(T.depthTexture.format===1027)te(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Tt(D){const T=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ot=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ot){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ot.removeEventListener("dispose",xt)};ot.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=ot}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,D)}else if(q){T.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ot]),T.__webglDepthbuffer[ot]===void 0)T.__webglDepthbuffer[ot]=i.createRenderbuffer(),J(T.__webglDepthbuffer[ot],D,!1);else{const xt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer[ot];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),J(T.__webglDepthbuffer,D,!1);else{const ot=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(D,T,q){const ot=n.get(D);T!==void 0&&ct(ot.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Tt(D)}function ee(D){const T=D.texture,q=n.get(D),ot=n.get(T);D.addEventListener("dispose",C);const xt=D.textures,it=D.isWebGLCubeRenderTarget===!0,Lt=xt.length>1;if(Lt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=T.version,o.memory.textures++),it){q.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Et]=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)q.__webglFramebuffer[Et][Ut]=i.createFramebuffer()}else q.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Et=0;Et<T.mipmaps.length;Et++)q.__webglFramebuffer[Et]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let Et=0,Ut=xt.length;Et<Ut;Et++){const de=n.get(xt[Et]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&te(D)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Et=0;Et<xt.length;Et++){const Ut=xt[Et];q.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Et]);const de=r.convert(Ut.format,Ut.colorSpace),wt=r.convert(Ut.type),Gt=M(Ut.internalFormat,de,wt,Ut.colorSpace,D.isXRRenderTarget===!0),Xt=ie(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Gt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,q.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),J(q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),St(i.TEXTURE_CUBE_MAP,T);for(let Et=0;Et<6;Et++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)ct(q.__webglFramebuffer[Et][Ut],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ut);else ct(q.__webglFramebuffer[Et],D,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(T)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let Et=0,Ut=xt.length;Et<Ut;Et++){const de=xt[Et],wt=n.get(de);e.bindTexture(i.TEXTURE_2D,wt.__webglTexture),St(i.TEXTURE_2D,de),ct(q.__webglFramebuffer,D,de,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),m(de)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,ot.__webglTexture),St(Et,T),T.mipmaps&&T.mipmaps.length>0)for(let Ut=0;Ut<T.mipmaps.length;Ut++)ct(q.__webglFramebuffer[Ut],D,T,i.COLOR_ATTACHMENT0,Et,Ut);else ct(q.__webglFramebuffer,D,T,i.COLOR_ATTACHMENT0,Et,0);m(T)&&f(Et),e.unbindTexture()}D.depthBuffer&&Tt(D)}function Vt(D){const T=D.textures;for(let q=0,ot=T.length;q<ot;q++){const xt=T[q];if(m(xt)){const it=v(D),Lt=n.get(xt).__webglTexture;e.bindTexture(it,Lt),f(it),e.unbindTexture()}}}const le=[],W=[];function Se(D){if(D.samples>0){if(te(D)===!1){const T=D.textures,q=D.width,ot=D.height;let xt=i.COLOR_BUFFER_BIT;const it=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(D),Et=T.length>1;if(Et)for(let Ut=0;Ut<T.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ut=0;Ut<T.length;Ut++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xt|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const de=n.get(T[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,q,ot,0,0,q,ot,xt,i.NEAREST),c===!0&&(le.length=0,W.length=0,le.push(i.COLOR_ATTACHMENT0+Ut),D.depthBuffer&&D.resolveDepthBuffer===!1&&(le.push(it),W.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,W)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Ut=0;Ut<T.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ut]);const de=n.get(T[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,de,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ie(D){return Math.min(s.maxSamples,D.samples)}function te(D){const T=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(D){const T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function be(D,T){const q=D.colorSpace,ot=D.format,xt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==xn&&q!==""&&(Ee.getTransfer(q)===Oe?(ot!==1023||xt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function At(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=Nt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=te}function Vy(i,t){function e(n,s=""){let r;const o=Ee.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(o===Oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return o===Oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===Oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return o===Oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Wy={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const b of t.hand.values()){const m=e.getJointPose(b,n),f=this._getHandJoint(u,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
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

}`;class qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ii({vertexShader:jy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ky extends _s{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,h=null,l=null,d=null,p=null,g=null;const b=new qy,m=e.getContextAttributes();let f=null,v=null;const M=[],y=[],E=new qt;let w=null;const C=new _n;C.viewport=new me;const P=new _n;P.viewport=new me;const A=[C,P],S=new e_;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let _t=M[at];return _t===void 0&&(_t=new fc,M[at]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(at){let _t=M[at];return _t===void 0&&(_t=new fc,M[at]=_t),_t.getGripSpace()},this.getHand=function(at){let _t=M[at];return _t===void 0&&(_t=new fc,M[at]=_t),_t.getHandSpace()};function z(at){const _t=y.indexOf(at.inputSource);if(_t===-1)return;const ct=M[_t];ct!==void 0&&(ct.update(at.inputSource,at.frame,u||o),ct.dispatchEvent({type:at.type,data:at.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",V);for(let at=0;at<M.length;at++){const _t=y[at];_t!==null&&(y[at]=null,M[at].disconnect(_t))}L=null,B=null,b.reset(),t.setRenderTarget(f),p=null,d=null,l=null,s=null,v=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){r=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){a=at,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(at){u=at},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return l},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(at){if(s=at,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ms(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let _t=null,ct=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?1027:1026,ct=m.stencil?1020:1014);const vt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};l=new XRWebGLBinding(s,e),d=l.createProjectionLayer(vt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new ms(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new wp(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function V(at){for(let _t=0;_t<at.removed.length;_t++){const ct=at.removed[_t],J=y.indexOf(ct);J>=0&&(y[J]=null,M[J].disconnect(ct))}for(let _t=0;_t<at.added.length;_t++){const ct=at.added[_t];let J=y.indexOf(ct);if(J===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=y.length){y.push(ct),J=Tt;break}else if(y[Tt]===null){y[Tt]=ct,J=Tt;break}if(J===-1)break}const vt=M[J];vt&&vt.connect(ct)}}const O=new k,H=new k;function G(at,_t,ct){O.setFromMatrixPosition(_t.matrixWorld),H.setFromMatrixPosition(ct.matrixWorld);const J=O.distanceTo(H),vt=_t.projectionMatrix.elements,Tt=ct.projectionMatrix.elements,Nt=vt[14]/(vt[10]-1),ee=vt[14]/(vt[10]+1),Vt=(vt[9]+1)/vt[5],le=(vt[9]-1)/vt[5],W=(vt[8]-1)/vt[0],Se=(Tt[8]+1)/Tt[0],ie=Nt*W,te=Nt*Se,Dt=J/(-W+Se),be=Dt*-W;if(_t.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(be),at.translateZ(Dt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),vt[10]===-1)at.projectionMatrix.copy(_t.projectionMatrix),at.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const At=Nt+Dt,D=ee+Dt,T=ie-be,q=te+(J-be),ot=Vt*ee/D*At,xt=le*ee/D*At;at.projectionMatrix.makePerspective(T,q,ot,xt,At,D),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function Q(at,_t){_t===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(_t.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(s===null)return;let _t=at.near,ct=at.far;b.texture!==null&&(b.depthNear>0&&(_t=b.depthNear),b.depthFar>0&&(ct=b.depthFar)),S.near=P.near=C.near=_t,S.far=P.far=C.far=ct,(L!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,B=S.far),C.layers.mask=at.layers.mask|2,P.layers.mask=at.layers.mask|4,S.layers.mask=C.layers.mask|P.layers.mask;const J=at.parent,vt=S.cameras;Q(S,J);for(let Tt=0;Tt<vt.length;Tt++)Q(vt[Tt],J);vt.length===2?G(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),Y(at,S,J)};function Y(at,_t,ct){ct===null?at.matrix.copy(_t.matrixWorld):(at.matrix.copy(ct.matrixWorld),at.matrix.invert(),at.matrix.multiply(_t.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(_t.projectionMatrix),at.projectionMatrixInverse.copy(_t.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Js*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(at){c=at,d!==null&&(d.fixedFoveation=at),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=at)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(S)};let ut=null;function St(at,_t){if(h=_t.getViewerPose(u||o),g=_t,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let J=!1;ct.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let Tt=0;Tt<ct.length;Tt++){const Nt=ct[Tt];let ee=null;if(p!==null)ee=p.getViewport(Nt);else{const le=l.getViewSubImage(d,Nt);ee=le.viewport,Tt===0&&(t.setRenderTargetTextures(v,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(v))}let Vt=A[Tt];Vt===void 0&&(Vt=new _n,Vt.layers.enable(Tt),Vt.viewport=new me,A[Tt]=Vt),Vt.matrix.fromArray(Nt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Nt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ee.x,ee.y,ee.width,ee.height),Tt===0&&(S.matrix.copy(Vt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(Vt)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const Tt=l.getDepthInformation(ct[0]);Tt&&Tt.isValid&&Tt.texture&&b.init(t,Tt,s.renderState)}}for(let ct=0;ct<M.length;ct++){const J=y[ct],vt=M[ct];J!==null&&vt!==void 0&&vt.update(J,_t,u||o)}ut&&ut(at,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),g=null}const Ct=new Np;Ct.setAnimationLoop(St),this.setAnimationLoop=function(at){ut=at},this.dispose=function(){}}}const is=new Un,$y=new re;function Yy(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,bp(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,M,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,M):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===1&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===1&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,is.copy(y),is.x*=-1,is.y*=-1,is.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(is)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const y=M.program;n.uniformBlockBinding(v,y)}function u(v,M){let y=s[v.id];y===void 0&&(g(v),y=h(v),s[v.id]=y,v.addEventListener("dispose",m));const E=M.program;n.updateUBOMapping(v,E);const w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function h(v){const M=l();v.__bindingPointIndex=M;const y=i.createBuffer(),E=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function l(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],y=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,C=y.length;w<C;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let A=0,S=P.length;A<S;A++){const L=P[A];if(p(L,w,A,E)===!0){const B=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let V=0;V<z.length;V++){const O=z[V],H=b(O);typeof O=="number"||typeof O=="boolean"?(L.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,B+X,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=0,L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=0,L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=0):(O.toArray(L.__data,X),X+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,M,y,E){const w=v.value,C=M+"_"+y;if(E[C]===void 0)return typeof w=="number"||typeof w=="boolean"?E[C]=w:E[C]=w.clone(),!0;{const P=E[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return E[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const M=v.uniforms;let y=0;const E=16;for(let C=0,P=M.length;C<P;C++){const A=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,L=A.length;S<L;S++){const B=A[S],z=Array.isArray(B.value)?B.value:[B.value];for(let X=0,V=z.length;X<V;X++){const O=z[X],H=b(O),G=y%E,Q=G%H.boundary,Y=G+Q;y+=Q,Y!==0&&E-Y<H.storage&&(y+=E-Y),B.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=H.storage}}}const w=y%E;return w>0&&(y+=E-w),v.__size=y,v.__cache={},this}function b(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:u,dispose:f}}class Jy{constructor(t={}){const{canvas:e=$g(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=0,this.toneMappingExposure=1;const y=this;let E=!1,w=0,C=0,P=null,A=-1,S=null;const L=new me,B=new me;let z=null;const X=new Kt(0);let V=0,O=e.width,H=e.height,G=1,Q=null,Y=null;const ut=new me(0,0,O,H),St=new me(0,0,O,H);let Ct=!1;const at=new Ll;let _t=!1,ct=!1;const J=new re,vt=new re,Tt=new k,Nt=new me,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function le(){return P===null?G:1}let W=n;function Se(_,I){return e.getContext(_,I)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Bt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),W===null){const I="webgl2";if(W=Se(I,_),W===null)throw Se(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let ie,te,Dt,be,At,D,T,q,ot,xt,it,Lt,Et,Ut,de,wt,Gt,Xt,$t,Ot,fe,oe,Ae,$;function It(){ie=new av(W),ie.init(),oe=new Vy(W,ie),te=new ev(W,ie,t,oe),Dt=new zy(W,ie),te.reverseDepthBuffer&&d&&Dt.buffers.depth.setReversed(!0),be=new uv(W),At=new Ry,D=new Hy(W,ie,Dt,At,te,oe,be),T=new iv(y),q=new ov(y),ot=new __(W),Ae=new Qx(W,ot),xt=new cv(W,ot,be,Ae),it=new dv(W,xt,ot,be),$t=new hv(W,te,D),wt=new nv(At),Lt=new wy(y,T,q,ie,te,Ae,wt),Et=new Yy(y,At),Ut=new Iy,de=new Uy(ie),Xt=new Jx(y,T,q,Dt,it,p,c),Gt=new By(y,it,te),$=new Zy(W,be,te,Dt),Ot=new tv(W,ie,be),fe=new lv(W,ie,be),be.programs=Lt.programs,y.capabilities=te,y.extensions=ie,y.properties=At,y.renderLists=Ut,y.shadowMap=Gt,y.state=Dt,y.info=be}It();const ft=new Ky(y,W);this.xr=ft,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const _=ie.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=ie.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(_){_!==void 0&&(G=_,this.setSize(O,H,!1))},this.getSize=function(_){return _.set(O,H)},this.setSize=function(_,I,F=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=_,H=I,e.width=Math.floor(_*G),e.height=Math.floor(I*G),F===!0&&(e.style.width=_+"px",e.style.height=I+"px"),this.setViewport(0,0,_,I)},this.getDrawingBufferSize=function(_){return _.set(O*G,H*G).floor()},this.setDrawingBufferSize=function(_,I,F){O=_,H=I,G=F,e.width=Math.floor(_*F),e.height=Math.floor(I*F),this.setViewport(0,0,_,I)},this.getCurrentViewport=function(_){return _.copy(L)},this.getViewport=function(_){return _.copy(ut)},this.setViewport=function(_,I,F,U){_.isVector4?ut.set(_.x,_.y,_.z,_.w):ut.set(_,I,F,U),Dt.viewport(L.copy(ut).multiplyScalar(G).round())},this.getScissor=function(_){return _.copy(St)},this.setScissor=function(_,I,F,U){_.isVector4?St.set(_.x,_.y,_.z,_.w):St.set(_,I,F,U),Dt.scissor(B.copy(St).multiplyScalar(G).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(_){Dt.setScissorTest(Ct=_)},this.setOpaqueSort=function(_){Q=_},this.setTransparentSort=function(_){Y=_},this.getClearColor=function(_){return _.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(_=!0,I=!0,F=!0){let U=0;if(_){let N=!1;if(P!==null){const j=P.texture.format;N=j===1033||j===1031||j===1029}if(N){const j=P.texture.type,et=j===1009||j===1014||j===1012||j===1020||j===1017||j===1018,ht=Xt.getClearColor(),Z=Xt.getClearAlpha(),tt=ht.r,lt=ht.g,yt=ht.b;et?(g[0]=tt,g[1]=lt,g[2]=yt,g[3]=Z,W.clearBufferuiv(W.COLOR,0,g)):(b[0]=tt,b[1]=lt,b[2]=yt,b[3]=Z,W.clearBufferiv(W.COLOR,0,b))}else U|=W.COLOR_BUFFER_BIT}I&&(U|=W.DEPTH_BUFFER_BIT),F&&(U|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Bt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),Xt.dispose(),Ut.dispose(),de.dispose(),At.dispose(),T.dispose(),q.dispose(),it.dispose(),Ae.dispose(),$.dispose(),Lt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Li),ft.removeEventListener("sessionend",Zn),wn.stop()};function Mt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const _=be.autoReset,I=Gt.enabled,F=Gt.autoUpdate,U=Gt.needsUpdate,N=Gt.type;It(),be.autoReset=_,Gt.enabled=I,Gt.autoUpdate=F,Gt.needsUpdate=U,Gt.type=N}function Ft(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Qt(_){const I=_.target;I.removeEventListener("dispose",Qt),ke(I)}function ke(_){We(_),At.remove(_)}function We(_){const I=At.get(_).programs;I!==void 0&&(I.forEach(function(F){Lt.releaseProgram(F)}),_.isShaderMaterial&&Lt.releaseShaderCache(_))}this.renderBufferDirect=function(_,I,F,U,N,j){I===null&&(I=ee);const et=N.isMesh&&N.matrixWorld.determinant()<0,ht=Rt(_,I,F,U,N);Dt.setMaterial(U,et);let Z=F.index,tt=1;if(U.wireframe===!0){if(Z=xt.getWireframeAttribute(F),Z===void 0)return;tt=2}const lt=F.drawRange,yt=F.attributes.position;let dt=lt.start*tt,st=(lt.start+lt.count)*tt;j!==null&&(dt=Math.max(dt,j.start*tt),st=Math.min(st,(j.start+j.count)*tt)),Z!==null?(dt=Math.max(dt,0),st=Math.min(st,Z.count)):yt!=null&&(dt=Math.max(dt,0),st=Math.min(st,yt.count));const rt=st-dt;if(rt<0||rt===1/0)return;Ae.setup(N,U,ht,F,Z);let pt,mt=Ot;if(Z!==null&&(pt=ot.get(Z),mt=fe,mt.setIndex(pt)),N.isMesh)U.wireframe===!0?(Dt.setLineWidth(U.wireframeLinewidth*le()),mt.setMode(W.LINES)):mt.setMode(W.TRIANGLES);else if(N.isLine){let gt=U.linewidth;gt===void 0&&(gt=1),Dt.setLineWidth(gt*le()),N.isLineSegments?mt.setMode(W.LINES):N.isLineLoop?mt.setMode(W.LINE_LOOP):mt.setMode(W.LINE_STRIP)}else N.isPoints?mt.setMode(W.POINTS):N.isSprite&&mt.setMode(W.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)mt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))mt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const gt=N._multiDrawStarts,kt=N._multiDrawCounts,jt=N._multiDrawCount,we=Z?ot.get(Z).bytesPerElement:1,Ht=At.get(U).currentProgram.getUniforms();for(let ne=0;ne<jt;ne++)Ht.setValue(W,"_gl_DrawID",ne),mt.render(gt[ne]/we,kt[ne])}else if(N.isInstancedMesh)mt.renderInstances(dt,rt,N.count);else if(F.isInstancedBufferGeometry){const gt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,kt=Math.min(F.instanceCount,gt);mt.renderInstances(dt,rt,kt)}else mt.render(dt,rt)};function ve(_,I,F){_.transparent===!0&&_.side===2&&_.forceSinglePass===!1?(_.side=1,_.needsUpdate=!0,Jn(_,I,F),_.side=0,_.needsUpdate=!0,Jn(_,I,F),_.side=2):Jn(_,I,F)}this.compile=function(_,I,F=null){F===null&&(F=_),f=de.get(F),f.init(I),M.push(f),F.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),_!==F&&_.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const U=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const j=N.material;if(j)if(Array.isArray(j))for(let et=0;et<j.length;et++){const ht=j[et];ve(ht,F,N),U.add(ht)}else ve(j,F,N),U.add(j)}),M.pop(),f=null,U},this.compileAsync=function(_,I,F=null){const U=this.compile(_,I,F);return new Promise(N=>{function j(){if(U.forEach(function(et){At.get(et).currentProgram.isReady()&&U.delete(et)}),U.size===0){N(_);return}setTimeout(j,10)}ie.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let ln=null;function fn(_){ln&&ln(_)}function Li(){wn.stop()}function Zn(){wn.start()}const wn=new Np;wn.setAnimationLoop(fn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(_){ln=_,ft.setAnimationLoop(_),_===null?wn.stop():wn.start()},ft.addEventListener("sessionstart",Li),ft.addEventListener("sessionend",Zn),this.render=function(_,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(I),I=ft.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,I,P),f=de.get(_,M.length),f.init(I),M.push(f),vt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),at.setFromProjectionMatrix(vt),ct=this.localClippingEnabled,_t=wt.init(this.clippingPlanes,ct),m=Ut.get(_,v.length),m.init(),v.push(m),ft.enabled===!0&&ft.isPresenting===!0){const j=y.xr.getDepthSensingMesh();j!==null&&ui(j,I,-1/0,y.sortObjects)}ui(_,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Q,Y),Vt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Vt&&Xt.addToRenderList(m,_),this.info.render.frame++,_t===!0&&wt.beginShadows();const F=f.state.shadowsArray;Gt.render(F,_,I),_t===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=m.opaque,N=m.transmissive;if(f.setupLights(),I.isArrayCamera){const j=I.cameras;if(N.length>0)for(let et=0,ht=j.length;et<ht;et++){const Z=j[et];Fi(U,N,_,Z)}Vt&&Xt.render(_);for(let et=0,ht=j.length;et<ht;et++){const Z=j[et];Di(m,_,Z,Z.viewport)}}else N.length>0&&Fi(U,N,_,I),Vt&&Xt.render(_),Di(m,_,I);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),_.isScene===!0&&_.onAfterRender(y,_,I),Ae.resetDefaultState(),A=-1,S=null,M.pop(),M.length>0?(f=M[M.length-1],_t===!0&&wt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ui(_,I,F,U){if(_.visible===!1)return;if(_.layers.test(I.layers)){if(_.isGroup)F=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(I);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||at.intersectsSprite(_)){U&&Nt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(vt);const et=it.update(_),ht=_.material;ht.visible&&m.push(_,et,ht,F,Nt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||at.intersectsObject(_))){const et=it.update(_),ht=_.material;if(U&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Nt.copy(_.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),Nt.copy(et.boundingSphere.center)),Nt.applyMatrix4(_.matrixWorld).applyMatrix4(vt)),Array.isArray(ht)){const Z=et.groups;for(let tt=0,lt=Z.length;tt<lt;tt++){const yt=Z[tt],dt=ht[yt.materialIndex];dt&&dt.visible&&m.push(_,et,dt,F,Nt.z,yt)}}else ht.visible&&m.push(_,et,ht,F,Nt.z,null)}}const j=_.children;for(let et=0,ht=j.length;et<ht;et++)ui(j[et],I,F,U)}function Di(_,I,F,U){const N=_.opaque,j=_.transmissive,et=_.transparent;f.setupLightsView(F),_t===!0&&wt.setGlobalState(y.clippingPlanes,F),U&&Dt.viewport(L.copy(U)),N.length>0&&hi(N,I,F),j.length>0&&hi(j,I,F),et.length>0&&hi(et,I,F),Dt.buffers.depth.setTest(!0),Dt.buffers.depth.setMask(!0),Dt.buffers.color.setMask(!0),Dt.setPolygonOffset(!1)}function Fi(_,I,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[U.id]===void 0&&(f.state.transmissionRenderTarget[U.id]=new ms(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ee.workingColorSpace}));const j=f.state.transmissionRenderTarget[U.id],et=U.viewport||L;j.setSize(et.z,et.w);const ht=y.getRenderTarget();y.setRenderTarget(j),y.getClearColor(X),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&Xt.render(F);const Z=y.toneMapping;y.toneMapping=0;const tt=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),f.setupLightsView(U),_t===!0&&wt.setGlobalState(y.clippingPlanes,U),hi(_,F,U),D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j),ie.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let yt=0,dt=I.length;yt<dt;yt++){const st=I[yt],rt=st.object,pt=st.geometry,mt=st.material,gt=st.group;if(mt.side===2&&rt.layers.test(U.layers)){const kt=mt.side;mt.side=1,mt.needsUpdate=!0,Zi(rt,F,U,pt,mt,gt),mt.side=kt,mt.needsUpdate=!0,lt=!0}}lt===!0&&(D.updateMultisampleRenderTarget(j),D.updateRenderTargetMipmap(j))}y.setRenderTarget(ht),y.setClearColor(X,V),tt!==void 0&&(U.viewport=tt),y.toneMapping=Z}function hi(_,I,F){const U=I.isScene===!0?I.overrideMaterial:null;for(let N=0,j=_.length;N<j;N++){const et=_[N],ht=et.object,Z=et.geometry,tt=U===null?et.material:U,lt=et.group;ht.layers.test(F.layers)&&Zi(ht,I,F,Z,tt,lt)}}function Zi(_,I,F,U,N,j){_.onBeforeRender(y,I,F,U,N,j),_.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(y,I,F,U,_,j),N.transparent===!0&&N.side===2&&N.forceSinglePass===!1?(N.side=1,N.needsUpdate=!0,y.renderBufferDirect(F,I,U,N,_,j),N.side=0,N.needsUpdate=!0,y.renderBufferDirect(F,I,U,N,_,j),N.side=2):y.renderBufferDirect(F,I,U,N,_,j),_.onAfterRender(y,I,F,U,N,j)}function Jn(_,I,F){I.isScene!==!0&&(I=ee);const U=At.get(_),N=f.state.lights,j=f.state.shadowsArray,et=N.state.version,ht=Lt.getParameters(_,N.state,j,I,F),Z=Lt.getProgramCacheKey(ht);let tt=U.programs;U.environment=_.isMeshStandardMaterial?I.environment:null,U.fog=I.fog,U.envMap=(_.isMeshStandardMaterial?q:T).get(_.envMap||U.environment),U.envMapRotation=U.environment!==null&&_.envMap===null?I.environmentRotation:_.envMapRotation,tt===void 0&&(_.addEventListener("dispose",Qt),tt=new Map,U.programs=tt);let lt=tt.get(Z);if(lt!==void 0){if(U.currentProgram===lt&&U.lightsStateVersion===et)return Ui(_,ht),lt}else ht.uniforms=Lt.getUniforms(_),_.onBeforeCompile(ht,y),lt=Lt.acquireProgram(ht,Z),tt.set(Z,lt),U.uniforms=ht.uniforms;const yt=U.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(yt.clippingPlanes=wt.uniform),Ui(_,ht),U.needsLights=x(_),U.lightsStateVersion=et,U.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),U.currentProgram=lt,U.uniformsList=null,lt}function Ni(_){if(_.uniformsList===null){const I=_.currentProgram.getUniforms();_.uniformsList=na.seqWithValue(I.seq,_.uniforms)}return _.uniformsList}function Ui(_,I){const F=At.get(_);F.outputColorSpace=I.outputColorSpace,F.batching=I.batching,F.batchingColor=I.batchingColor,F.instancing=I.instancing,F.instancingColor=I.instancingColor,F.instancingMorph=I.instancingMorph,F.skinning=I.skinning,F.morphTargets=I.morphTargets,F.morphNormals=I.morphNormals,F.morphColors=I.morphColors,F.morphTargetsCount=I.morphTargetsCount,F.numClippingPlanes=I.numClippingPlanes,F.numIntersection=I.numClipIntersection,F.vertexAlphas=I.vertexAlphas,F.vertexTangents=I.vertexTangents,F.toneMapping=I.toneMapping}function Rt(_,I,F,U,N){I.isScene!==!0&&(I=ee),D.resetTextureUnits();const j=I.fog,et=U.isMeshStandardMaterial?I.environment:null,ht=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:xn,Z=(U.isMeshStandardMaterial?q:T).get(U.envMap||et),tt=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,lt=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),yt=!!F.morphAttributes.position,dt=!!F.morphAttributes.normal,st=!!F.morphAttributes.color;let rt=0;U.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(rt=y.toneMapping);const pt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,mt=pt!==void 0?pt.length:0,gt=At.get(U),kt=f.state.lights;if(_t===!0&&(ct===!0||_!==S)){const se=_===S&&U.id===A;wt.setState(U,_,se)}let jt=!1;U.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==kt.state.version||gt.outputColorSpace!==ht||N.isBatchedMesh&&gt.batching===!1||!N.isBatchedMesh&&gt.batching===!0||N.isBatchedMesh&&gt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&gt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&gt.instancing===!1||!N.isInstancedMesh&&gt.instancing===!0||N.isSkinnedMesh&&gt.skinning===!1||!N.isSkinnedMesh&&gt.skinning===!0||N.isInstancedMesh&&gt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&gt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&gt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&gt.instancingMorph===!1&&N.morphTexture!==null||gt.envMap!==Z||U.fog===!0&&gt.fog!==j||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==wt.numPlanes||gt.numIntersection!==wt.numIntersection)||gt.vertexAlphas!==tt||gt.vertexTangents!==lt||gt.morphTargets!==yt||gt.morphNormals!==dt||gt.morphColors!==st||gt.toneMapping!==rt||gt.morphTargetsCount!==mt)&&(jt=!0):(jt=!0,gt.__version=U.version);let we=gt.currentProgram;jt===!0&&(we=Jn(U,I,N));let Ht=!1,ne=!1,ae=!1;const ue=we.getUniforms(),bt=gt.uniforms;if(Dt.useProgram(we.program)&&(Ht=!0,ne=!0,ae=!0),U.id!==A&&(A=U.id,ne=!0),Ht||S!==_){Dt.buffers.depth.getReversed()?(J.copy(_.projectionMatrix),Zg(J),Jg(J),ue.setValue(W,"projectionMatrix",J)):ue.setValue(W,"projectionMatrix",_.projectionMatrix),ue.setValue(W,"viewMatrix",_.matrixWorldInverse);const Jt=ue.map.cameraPosition;Jt!==void 0&&Jt.setValue(W,Tt.setFromMatrixPosition(_.matrixWorld)),te.logarithmicDepthBuffer&&ue.setValue(W,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ue.setValue(W,"isOrthographic",_.isOrthographicCamera===!0),S!==_&&(S=_,ne=!0,ae=!0)}if(N.isSkinnedMesh){ue.setOptional(W,N,"bindMatrix"),ue.setOptional(W,N,"bindMatrixInverse");const se=N.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),ue.setValue(W,"boneTexture",se.boneTexture,D))}N.isBatchedMesh&&(ue.setOptional(W,N,"batchingTexture"),ue.setValue(W,"batchingTexture",N._matricesTexture,D),ue.setOptional(W,N,"batchingIdTexture"),ue.setValue(W,"batchingIdTexture",N._indirectTexture,D),ue.setOptional(W,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(W,"batchingColorTexture",N._colorsTexture,D));const Zt=F.morphAttributes;if((Zt.position!==void 0||Zt.normal!==void 0||Zt.color!==void 0)&&$t.update(N,F,we),(ne||gt.receiveShadow!==N.receiveShadow)&&(gt.receiveShadow=N.receiveShadow,ue.setValue(W,"receiveShadow",N.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(bt.envMap.value=Z,bt.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&I.environment!==null&&(bt.envMapIntensity.value=I.environmentIntensity),ne&&(ue.setValue(W,"toneMappingExposure",y.toneMappingExposure),gt.needsLights&&R(bt,ae),j&&U.fog===!0&&Et.refreshFogUniforms(bt,j),Et.refreshMaterialUniforms(bt,U,G,H,f.state.transmissionRenderTarget[_.id]),na.upload(W,Ni(gt),bt,D)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(na.upload(W,Ni(gt),bt,D),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ue.setValue(W,"center",N.center),ue.setValue(W,"modelViewMatrix",N.modelViewMatrix),ue.setValue(W,"normalMatrix",N.normalMatrix),ue.setValue(W,"modelMatrix",N.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const se=U.uniformsGroups;for(let Jt=0,Ue=se.length;Jt<Ue;Jt++){const Pe=se[Jt];$.update(Pe,we),$.bind(Pe,we)}}return we}function R(_,I){_.ambientLightColor.needsUpdate=I,_.lightProbe.needsUpdate=I,_.directionalLights.needsUpdate=I,_.directionalLightShadows.needsUpdate=I,_.pointLights.needsUpdate=I,_.pointLightShadows.needsUpdate=I,_.spotLights.needsUpdate=I,_.spotLightShadows.needsUpdate=I,_.rectAreaLights.needsUpdate=I,_.hemisphereLights.needsUpdate=I}function x(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(_,I,F){At.get(_.texture).__webglTexture=I,At.get(_.depthTexture).__webglTexture=F;const U=At.get(_);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=F===void 0,U.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,I){const F=At.get(_);F.__webglFramebuffer=I,F.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(_,I=0,F=0){P=_,w=I,C=F;let U=!0,N=null,j=!1,et=!1;if(_){const Z=At.get(_);if(Z.__useDefaultFramebuffer!==void 0)Dt.bindFramebuffer(W.FRAMEBUFFER,null),U=!1;else if(Z.__webglFramebuffer===void 0)D.setupRenderTarget(_);else if(Z.__hasExternalTextures)D.rebindTextures(_,At.get(_.texture).__webglTexture,At.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const yt=_.depthTexture;if(Z.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(_.width!==yt.image.width||_.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(_)}}const tt=_.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(et=!0);const lt=At.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(lt[I])?N=lt[I][F]:N=lt[I],j=!0):_.samples>0&&D.useMultisampledRTT(_)===!1?N=At.get(_).__webglMultisampledFramebuffer:Array.isArray(lt)?N=lt[F]:N=lt,L.copy(_.viewport),B.copy(_.scissor),z=_.scissorTest}else L.copy(ut).multiplyScalar(G).floor(),B.copy(St).multiplyScalar(G).floor(),z=Ct;if(Dt.bindFramebuffer(W.FRAMEBUFFER,N)&&U&&Dt.drawBuffers(_,N),Dt.viewport(L),Dt.scissor(B),Dt.setScissorTest(z),j){const Z=At.get(_.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+I,Z.__webglTexture,F)}else if(et){const Z=At.get(_.texture),tt=I||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Z.__webglTexture,F||0,tt)}A=-1},this.readRenderTargetPixels=function(_,I,F,U,N,j,et){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=At.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&et!==void 0&&(ht=ht[et]),ht){Dt.bindFramebuffer(W.FRAMEBUFFER,ht);try{const Z=_.texture,tt=Z.format,lt=Z.type;if(!te.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=_.width-U&&F>=0&&F<=_.height-N&&W.readPixels(I,F,U,N,oe.convert(tt),oe.convert(lt),j)}finally{const Z=P!==null?At.get(P).__webglFramebuffer:null;Dt.bindFramebuffer(W.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(_,I,F,U,N,j,et){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=At.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&et!==void 0&&(ht=ht[et]),ht){const Z=_.texture,tt=Z.format,lt=Z.type;if(!te.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=_.width-U&&F>=0&&F<=_.height-N){Dt.bindFramebuffer(W.FRAMEBUFFER,ht);const yt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,yt),W.bufferData(W.PIXEL_PACK_BUFFER,j.byteLength,W.STREAM_READ),W.readPixels(I,F,U,N,oe.convert(tt),oe.convert(lt),0);const dt=P!==null?At.get(P).__webglFramebuffer:null;Dt.bindFramebuffer(W.FRAMEBUFFER,dt);const st=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Yg(W,st,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,yt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,j),W.deleteBuffer(yt),W.deleteSync(st),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,I=null,F=0){_.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,_=arguments[1]);const U=Math.pow(2,-F),N=Math.floor(_.image.width*U),j=Math.floor(_.image.height*U),et=I!==null?I.x:0,ht=I!==null?I.y:0;D.setTexture2D(_,0),W.copyTexSubImage2D(W.TEXTURE_2D,F,0,0,et,ht,N,j),Dt.unbindTexture()};const nt=W.createFramebuffer(),K=W.createFramebuffer();this.copyTextureToTexture=function(_,I,F=null,U=null,N=0,j=null){_.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,_=arguments[1],I=arguments[2],j=arguments[3]||0,F=null),j===null&&(N!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=N,N=0):j=0);let et,ht,Z,tt,lt,yt,dt,st,rt;const pt=_.isCompressedTexture?_.mipmaps[j]:_.image;if(F!==null)et=F.max.x-F.min.x,ht=F.max.y-F.min.y,Z=F.isBox3?F.max.z-F.min.z:1,tt=F.min.x,lt=F.min.y,yt=F.isBox3?F.min.z:0;else{const Zt=Math.pow(2,-N);et=Math.floor(pt.width*Zt),ht=Math.floor(pt.height*Zt),_.isDataArrayTexture?Z=pt.depth:_.isData3DTexture?Z=Math.floor(pt.depth*Zt):Z=1,tt=0,lt=0,yt=0}U!==null?(dt=U.x,st=U.y,rt=U.z):(dt=0,st=0,rt=0);const mt=oe.convert(I.format),gt=oe.convert(I.type);let kt;I.isData3DTexture?(D.setTexture3D(I,0),kt=W.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),kt=W.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),kt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,I.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,I.unpackAlignment);const jt=W.getParameter(W.UNPACK_ROW_LENGTH),we=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ht=W.getParameter(W.UNPACK_SKIP_PIXELS),ne=W.getParameter(W.UNPACK_SKIP_ROWS),ae=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,pt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,tt),W.pixelStorei(W.UNPACK_SKIP_ROWS,lt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,yt);const ue=_.isDataArrayTexture||_.isData3DTexture,bt=I.isDataArrayTexture||I.isData3DTexture;if(_.isDepthTexture){const Zt=At.get(_),se=At.get(I),Jt=At.get(Zt.__renderTarget),Ue=At.get(se.__renderTarget);Dt.bindFramebuffer(W.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Dt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Pe=0;Pe<Z;Pe++)ue&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,At.get(_).__webglTexture,N,yt+Pe),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,At.get(I).__webglTexture,j,rt+Pe)),W.blitFramebuffer(tt,lt,et,ht,dt,st,et,ht,W.DEPTH_BUFFER_BIT,W.NEAREST);Dt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||At.has(_)){const Zt=At.get(_),se=At.get(I);Dt.bindFramebuffer(W.READ_FRAMEBUFFER,nt),Dt.bindFramebuffer(W.DRAW_FRAMEBUFFER,K);for(let Jt=0;Jt<Z;Jt++)ue?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Zt.__webglTexture,N,yt+Jt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Zt.__webglTexture,N),bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,se.__webglTexture,j,rt+Jt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,se.__webglTexture,j),N!==0?W.blitFramebuffer(tt,lt,et,ht,dt,st,et,ht,W.COLOR_BUFFER_BIT,W.NEAREST):bt?W.copyTexSubImage3D(kt,j,dt,st,rt+Jt,tt,lt,et,ht):W.copyTexSubImage2D(kt,j,dt,st,tt,lt,et,ht);Dt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Dt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else bt?_.isDataTexture||_.isData3DTexture?W.texSubImage3D(kt,j,dt,st,rt,et,ht,Z,mt,gt,pt.data):I.isCompressedArrayTexture?W.compressedTexSubImage3D(kt,j,dt,st,rt,et,ht,Z,mt,pt.data):W.texSubImage3D(kt,j,dt,st,rt,et,ht,Z,mt,gt,pt):_.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,dt,st,et,ht,mt,gt,pt.data):_.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,dt,st,pt.width,pt.height,mt,pt.data):W.texSubImage2D(W.TEXTURE_2D,j,dt,st,et,ht,mt,gt,pt);W.pixelStorei(W.UNPACK_ROW_LENGTH,jt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ht),W.pixelStorei(W.UNPACK_SKIP_ROWS,ne),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ae),j===0&&I.generateMipmaps&&W.generateMipmap(kt),Dt.unbindTexture()},this.copyTextureToTexture3D=function(_,I,F=null,U=null,N=0){return _.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,U=arguments[1]||null,_=arguments[2],I=arguments[3],N=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,I,F,U,N)},this.initRenderTarget=function(_){At.get(_).__webglFramebuffer===void 0&&D.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?D.setTextureCube(_,0):_.isData3DTexture?D.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?D.setTexture2DArray(_,0):D.setTexture2D(_,0),Dt.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,Dt.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}}function yh(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class Qy extends or{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new sM(e)}),this.register(function(e){return new rM(e)}),this.register(function(e){return new pM(e)}),this.register(function(e){return new mM(e)}),this.register(function(e){return new gM(e)}),this.register(function(e){return new aM(e)}),this.register(function(e){return new cM(e)}),this.register(function(e){return new lM(e)}),this.register(function(e){return new uM(e)}),this.register(function(e){return new iM(e)}),this.register(function(e){return new hM(e)}),this.register(function(e){return new oM(e)}),this.register(function(e){return new fM(e)}),this.register(function(e){return new dM(e)}),this.register(function(e){return new eM(e)}),this.register(function(e){return new _M(e)}),this.register(function(e){return new bM(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const u=Or.extractUrlBase(t);o=Or.resolveURL(u,this.path)}else o=Or.extractUrlBase(t);this.manager.itemStart(t);const a=function(u){s?s(u):console.error(u),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Lp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(u){try{r.parse(u,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Gp){try{o[xe.KHR_BINARY_GLTF]=new xM(t)}catch(l){s&&s(l);return}r=JSON.parse(o[xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new LM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const l=this.pluginCallbacks[h](u);l.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const l=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(l){case xe.KHR_MATERIALS_UNLIT:o[l]=new nM;break;case xe.KHR_DRACO_MESH_COMPRESSION:o[l]=new vM(r,this.dracoLoader);break;case xe.KHR_TEXTURE_TRANSFORM:o[l]=new yM;break;case xe.KHR_MESH_QUANTIZATION:o[l]=new MM;break;default:d.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}u.setExtensions(o),u.setPlugins(a),u.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function tM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class eM{constructor(t){this.parser=t,this.name=xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let u;const h=new Kt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],xn);const l=c.range!==void 0?c.range:0;switch(c.type){case"directional":u=new Fp(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new Z0(h),u.distance=l;break;case"spot":u=new $0(h),u.distance=l,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,u.angle=c.spot.outerConeAngle,u.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return u.position.set(0,0,0),u.decay=2,Si(u,c),c.intensity!==void 0&&(u.intensity=c.intensity),u.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(u),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class nM{constructor(){this.name=xe.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(t,e,n){const s=[];t.color=new Kt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],xn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,ze))}return Promise.all(s)}}class iM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class sM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new qt(a,a)}return Promise.all(r)}}class rM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class oM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class aM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Kt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],xn)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,ze)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class cM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class lM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Kt().setRGB(a[0],a[1],a[2],xn),Promise.all(r)}}class uM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Kt().setRGB(a[0],a[1],a[2],xn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,ze)),Promise.all(r)}}class dM{constructor(t){this.parser=t,this.name=xe.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class fM{constructor(t){this.parser=t,this.name=xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class pM{constructor(t){this.parser=t,this.name=xe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class mM{constructor(t){this.parser=t,this.name=xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class gM{constructor(t){this.parser=t,this.name=xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const u=n.options.manager.getHandler(a.uri);u!==null&&(c=u)}return this.detectSupport().then(function(u){if(u)return n.loadTextureImage(t,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class _M{constructor(t){this.name=xe.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,u=s.byteLength||0,h=s.count,l=s.byteStride,d=new Uint8Array(a,c,u);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,l,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*l);return o.decodeGltfBuffer(new Uint8Array(p),h,l,d,s.mode,s.filter),p})})}else return null}}class bM{constructor(t){this.name=xe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const u of s.primitives)if(u.mode!==Dn.TRIANGLES&&u.mode!==Dn.TRIANGLE_STRIP&&u.mode!==Dn.TRIANGLE_FAN&&u.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const u in o)a.push(this.parser.getDependency("accessor",o[u]).then(h=>(c[u]=h,c[u])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(u=>{const h=u.pop(),l=h.isGroup?h.children:[h],d=u[0].count,p=[];for(const g of l){const b=new re,m=new k,f=new Ze,v=new k(1,1,1),M=new T0(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),M.setMatrixAt(y,b.compose(m,f,v));for(const y in c)if(y==="_COLOR_0"){const E=c[y];M.instanceColor=new tl(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);Be.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Gp="glTF",Sr=12,Mh={JSON:1313821514,BIN:5130562};class xM{constructor(t){this.name=xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Sr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Gp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Sr,r=new DataView(t,Sr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Mh.JSON){const u=new Uint8Array(t,Sr+o,a);this.content=n.decode(u)}else if(c===Mh.BIN){const u=Sr+o;this.body=t.slice(u,u+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},u={};for(const h in o){const l=ol[h]||h.toLowerCase();a[l]=o[h]}for(const h in t.attributes){const l=ol[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],p=Ys[d.componentType];u[l]=p.name,c[l]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(l,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}l(p)},a,u,xn,d)})})}}class yM{constructor(){this.name=xe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class MM{constructor(){this.name=xe.KHR_MESH_QUANTIZATION}}class zp extends $r{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,u=a*3,h=s-e,l=(n-e)/h,d=l*l,p=d*l,g=t*u,b=g-u,m=-2*p+3*d,f=p-d,v=1-m,M=f-d+l;for(let y=0;y!==a;y++){const E=o[b+y+a],w=o[b+y+c]*h,C=o[g+y+a],P=o[g+y]*h;r[y]=v*E+M*w+m*C+f*P}return r}}const SM=new Ze;class AM extends zp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return SM.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Sh={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Ah={33071:1001,33648:1002,10497:1e3},pc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ol={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},EM={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},mc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function TM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function ss(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Si(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function wM(i,t,e){let n=!1,s=!1,r=!1;for(let u=0,h=t.length;u<h;u++){const l=t[u];if(l.POSITION!==void 0&&(n=!0),l.NORMAL!==void 0&&(s=!0),l.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let u=0,h=t.length;u<h;u++){const l=t[u];if(n){const d=l.POSITION!==void 0?e.getDependency("accessor",l.POSITION):i.attributes.position;o.push(d)}if(s){const d=l.NORMAL!==void 0?e.getDependency("accessor",l.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=l.COLOR_0!==void 0?e.getDependency("accessor",l.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(u){const h=u[0],l=u[1],d=u[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=l),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function RM(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CM(i){let t;const e=i.extensions&&i.extensions[xe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+gc(e.attributes):t=i.indices+":"+gc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+gc(i.targets[n]);return t}function gc(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function al(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const PM=new re;class LM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new tM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Dp(this.options.manager):this.textureLoader=new t_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ss(r,a,s),Si(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[u,h]of o.children.entries())r(h,a.children[u])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[xe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Or.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=pc[s.type],a=Ys[s.componentType],c=s.normalized===!0,u=new a(s.count*o);return Promise.resolve(new Ce(u,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=pc[s.type],u=Ys[s.componentType],h=u.BYTES_PER_ELEMENT,l=h*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let b,m;if(p&&p!==l){const f=Math.floor(d/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let M=e.cache.get(v);M||(b=new u(a,f*p,s.count*p/h),M=new Il(b,p/h),e.cache.add(v,M)),m=new Xn(M,c,d%p/h,g)}else a===null?b=new u(s.count*c):b=new u(a,d,s.count*c),m=new Ce(b,c,g);if(s.sparse!==void 0){const f=pc.SCALAR,v=Ys[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,E=new v(o[1],M,s.sparse.count*f),w=new u(o[2],y,s.sparse.count*c);a!==null&&(m=new Ce(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,P=E.length;C<P;C++){const A=E[C];if(m.setX(A,w[C*c]),c>=2&&m.setY(A,w[C*c+1]),c>=3&&m.setZ(A,w[C*c+2]),c>=4&&m.setW(A,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const u=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Sh[d.magFilter]||1006,h.minFilter=Sh[d.minFilter]||1008,h.wrapS=Ah[d.wrapS]||1e3,h.wrapT=Ah[d.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==1006,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=u,u}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(l=>l.clone());const o=s.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",u=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(l){u=!0;const d=new Blob([l],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(l){return new Promise(function(d,p){let g=d;e.isImageBitmapLoader===!0&&(g=function(b){const m=new Je(b);m.needsUpdate=!0,d(m)}),e.load(Or.resolveURL(l,r.path),g,void 0,p)})}).then(function(l){return u===!0&&a.revokeObjectURL(c),Si(l,o),l.userData.mimeType=o.mimeType||IM(o.uri),l}).catch(function(l){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),l});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[xe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[xe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Tp,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Ep,Nn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return bs}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},u=[];if(c[xe.KHR_MATERIALS_UNLIT]){const l=s[xe.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),u.push(l.extendParams(a,r,e))}else{const l=r.pbrMetallicRoughness||{};if(a.color=new Kt(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const d=l.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],xn),a.opacity=d[3]}l.baseColorTexture!==void 0&&u.push(e.assignTexture(a,"map",l.baseColorTexture,ze)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(u.push(e.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),u.push(e.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=2);const h=r.alphaMode||mc.OPAQUE;if(h===mc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===mc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nn&&(u.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qt(1,1),r.normalTexture.scale!==void 0)){const l=r.normalTexture.scale;a.normalScale.set(l,l)}if(r.occlusionTexture!==void 0&&o!==nn&&(u.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nn){const l=r.emissiveFactor;a.emissive=new Kt().setRGB(l[0],l[1],l[2],xn)}return r.emissiveTexture!==void 0&&o!==nn&&u.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ze)),Promise.all(u).then(function(){const l=new o(a);return r.name&&(l.name=r.name),Si(l,r),e.associations.set(l,{materials:t}),r.extensions&&ss(s,l,r),l})}createUniqueName(t){const e=Ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Eh(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const u=t[a],h=CM(u),l=s[h];if(l)o.push(l.promise);else{let d;u.extensions&&u.extensions[xe.KHR_DRACO_MESH_COMPRESSION]?d=r(u):d=Eh(new Xe,u,e),s[h]={primitive:u,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,u=o.length;c<u;c++){const h=o[c].material===void 0?TM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const u=c.slice(0,c.length-1),h=c[c.length-1],l=[];for(let p=0,g=h.length;p<g;p++){const b=h[p],m=o[p];let f;const v=u[p];if(m.mode===Dn.TRIANGLES||m.mode===Dn.TRIANGLE_STRIP||m.mode===Dn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new S0(b,v):new Me(b,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Dn.TRIANGLE_STRIP?f.geometry=yh(f.geometry,1):m.mode===Dn.TRIANGLE_FAN&&(f.geometry=yh(f.geometry,2));else if(m.mode===Dn.LINES)f=new C0(b,v);else if(m.mode===Dn.LINE_STRIP)f=new Dl(b,v);else if(m.mode===Dn.LINE_LOOP)f=new I0(b,v);else if(m.mode===Dn.POINTS)f=new P0(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&RM(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),Si(f,r),m.extensions&&ss(s,f,m),e.assignFinalMaterial(f),l.push(f)}for(let p=0,g=l.length;p<g;p++)e.associations.set(l[p],{meshes:t,primitives:p});if(l.length===1)return r.extensions&&ss(s,l[0],r),l[0];const d=new bn;r.extensions&&ss(s,d,r),e.associations.set(d,{meshes:t});for(let p=0,g=l.length;p<g;p++)d.add(l[p]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new _n(up.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new kl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Si(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let u=0,h=o.length;u<h;u++){const l=o[u];if(l){a.push(l);const d=new re;r!==null&&d.fromArray(r.array,u*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[u])}return new Pl(a,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],c=[],u=[],h=[];for(let l=0,d=s.channels.length;l<d;l++){const p=s.channels[l],g=s.samplers[p.sampler],b=p.target,m=b.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),u.push(g),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(u),Promise.all(h)]).then(function(l){const d=l[0],p=l[1],g=l[2],b=l[3],m=l[4],f=[];for(let v=0,M=d.length;v<M;v++){const y=d[v],E=p[v],w=g[v],C=b[v],P=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const A=n._createAnimationTracks(y,E,w,C,P);if(A)for(let S=0;S<A.length;S++)f.push(A[S])}return new il(r,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,u=s.weights.length;c<u;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let u=0,h=a.length;u<h;u++)o.push(n.getDependency("node",a[u]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(u){const h=u[0],l=u[1],d=u[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,PM)});for(let p=0,g=l.length;p<g;p++)h.add(l[p]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(u){return s._getNodeRef(s.cameraCache,r.camera,u)})),s._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){a.push(u)}),this.nodeCache[t]=Promise.all(a).then(function(u){let h;if(r.isBone===!0?h=new Sp:u.length>1?h=new bn:u.length===1?h=u[0]:h=new Be,h!==u[0])for(let l=0,d=u.length;l<d;l++)h.add(u[l]);if(r.name&&(h.userData.name=r.name,h.name=o),Si(h,r),r.extensions&&ss(n,h,r),r.matrix!==void 0){const l=new re;l.fromArray(r.matrix),h.applyMatrix4(l)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new bn;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&ss(e,r,n);const o=n.nodes||[],a=[];for(let c=0,u=o.length;c<u;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,l=c.length;h<l;h++)r.add(c[h]);const u=h=>{const l=new Map;for(const[d,p]of s.associations)(d instanceof Nn||d instanceof Je)&&l.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&l.set(d,p)}),l};return s.associations=u(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,c=[];ji[r.path]===ji.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let u;switch(ji[r.path]){case ji.weights:u=tr;break;case ji.rotation:u=er;break;case ji.position:case ji.scale:u=nr;break;default:switch(n.itemSize){case 1:u=tr;break;case 2:case 3:default:u=nr;break}break}const h=s.interpolation!==void 0?EM[s.interpolation]:2301,l=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const g=new u(c[d]+"."+ji[r.path],e.array,l,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=al(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof er?AM:zp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function DM(i,t,e){const n=t.attributes,s=new dn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,u=a.max;if(c!==void 0&&u!==void 0){if(s.set(new k(c[0],c[1],c[2]),new k(u[0],u[1],u[2])),a.normalized){const h=al(Ys[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new k,c=new k;for(let u=0,h=r.length;u<h;u++){const l=r[u];if(l.POSITION!==void 0){const d=e.json.accessors[l.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const b=al(Ys[d.componentType]);c.multiplyScalar(b)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Eh(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=ol[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Ee.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ee.workingColorSpace}" not supported.`),Si(i,t),DM(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?wM(i,t.targets,e):i})}var FM=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,o=WebAssembly.instantiate(a(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function a(f){for(var v=new Uint8Array(f.length),M=0;M<f.length;++M){var y=f.charCodeAt(M);v[M]=y>96?y-97:y>64?y-39:y+4}for(var E=0,M=0;M<f.length;++M)v[E++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,E)}function c(f,v,M,y,E,w){var C=r.exports.sbrk,P=M+3&-4,A=C(P*y),S=C(E.length),L=new Uint8Array(r.exports.memory.buffer);L.set(E,S);var B=f(A,M,y,S,E.length);if(B==0&&w&&w(A,P,y),v.set(L.subarray(A,A+M*y)),C(A-C(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var u={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},l=[],d=0;function p(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(M){var y=M.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function g(f){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),M=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(M),E=0;E<f;++E)l[E]=p(y);URL.revokeObjectURL(y)}function b(f,v,M,y,E){for(var w=l[0],C=1;C<l.length;++C)l[C].pending<w.pending&&(w=l[C]);return new Promise(function(P,A){var S=new Uint8Array(M),L=d++;w.pending+=f,w.requests[L]={resolve:P,reject:A},w.object.postMessage({id:L,count:f,size:v,source:S,mode:y,filter:E},[S.buffer])})}function m(f){o.then(function(){var v=f.data;try{var M=new Uint8Array(v.count*v.size);c(r.exports[v.mode],M,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:M},[M.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:o,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,v,M,y,E){c(r.exports.meshopt_decodeVertexBuffer,f,v,M,y,r.exports[u[E]])},decodeIndexBuffer:function(f,v,M,y){c(r.exports.meshopt_decodeIndexBuffer,f,v,M,y)},decodeIndexSequence:function(f,v,M,y){c(r.exports.meshopt_decodeIndexSequence,f,v,M,y)},decodeGltfBuffer:function(f,v,M,y,E,w){c(r.exports[h[E]],f,v,M,y,r.exports[u[w]])},decodeGltfBufferAsync:function(f,v,M,y,E){return l.length>0?b(f,v,M,h[y],u[E]):o.then(function(){var w=new Uint8Array(f*v);return c(r.exports[h[y]],w,f,v,M,r.exports[u[E]]),w})}}})();function Hl(){return new Qy().setMeshoptDecoder(FM)}let NM="";const Pi=i=>`${NM}${i}`,UM=.001,OM=.5,Th={playing:!1,settling:!1,stillFor:0,pending:1},Hp=i=>i.playing||i.settling||i.pending>0,kM=i=>!i.playing&&!i.settling,BM=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),GM=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,zM=i=>Hp(i)?i:{...i,pending:1};function HM(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<UM?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<OM}}function wh(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const gs="#c8f323",VM="#0b0f10";function WM(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const jM=WM(gs),XM=gs,qM="#7aa2ff",KM="#ffb340",$M="#b18cff",YM=gs,ZM=gs,Ar=new k;function In(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ar.copy(t),Ar[n]=0,Ar.normalize();const u=.5*o/(o+a),h=1-Ar.angleTo(i)/c;return Math.sign(Ar[e])===1?h*u:a/(o+a)+u+u*(1-h)}class JM extends Ci{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new k,c=new k,u=new k(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,l=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new k,b=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=u.x*Math.sign(a.x)+c.x*r,h[m+1]=u.y*Math.sign(a.y)+c.y*r,h[m+2]=u.z*Math.sign(a.z)+c.z*r,l[m+0]=c.x,l[m+1]=c.y,l[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=In(g,c,"z","y",r,n),d[f+1]=1-In(g,c,"y","z",r,e);break;case 1:g.set(-1,0,0),d[f+0]=1-In(g,c,"z","y",r,n),d[f+1]=1-In(g,c,"y","z",r,e);break;case 2:g.set(0,1,0),d[f+0]=1-In(g,c,"x","z",r,t),d[f+1]=In(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-In(g,c,"x","z",r,t),d[f+1]=1-In(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-In(g,c,"x","y",r,t),d[f+1]=1-In(g,c,"y","x",r,e);break;case 5:g.set(0,0,-1),d[f+0]=In(g,c,"x","y",r,t),d[f+1]=1-In(g,c,"y","x",r,e);break}}}const Rh=["technical","tactical","physical","social"],Ch=["auto","authored","off"],Vp=/\bwall\b/i,Ih=["n","e","s","w"],QM={n:0,e:Math.PI/2,s:Math.PI,w:-Math.PI/2},Ph=1.8,Lh=7.32,tS=6;function xs(i,t){return i.width!==void 0&&i.width<tS?i.width/2:t}function Wp(i){return Math.min(Math.max(i*.5,1),2.44)}const Dh=["save","beaten"],Po=["throw","roll","kick"],Lo=["throw","roll"],Fh=["lofted","ground"],eS=3.35,nS=1,Nh=12,cl=["walk","jog","run","sprint"],Uh=["walk","jog","run"];function fa(i){if(i.ball)return i.ball.start;if(!i.players.length)return[0,0];let t=0,e=0;for(const n of i.players)t+=n.start[0],e+=n.start[1];return[t/i.players.length,e/i.players.length]}const iS=new Set(["move","dribble","pass","shoot","tackle","collect"]),Oh=/^#[0-9a-fA-F]{6}$/;function zt(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function yi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&zt(t,"expected [x, y] numbers"),i}function sS(i){var o,a,c,u,h;const t=i;t.version!==1&&zt("version","must be 1"),((o=t.pitch)==null?void 0:o.width)>0&&((a=t.pitch)==null?void 0:a.length)>0||zt("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&zt("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&zt("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||zt("teams","at least one team");for(const l of e){const d=(u=(c=t.teams[l])==null?void 0:c.kit)==null?void 0:u.primary;(typeof d!="string"||!Oh.test(d))&&zt(`teams.${l}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||zt("players","expected an array");const n=new Set,s=new Set;t.players.forEach((l,d)=>{(!l.id||n.has(l.id))&&zt(`players[${d}].id`,"missing or duplicate"),n.add(l.id),e.has(l.team)||zt(`players[${d}].team`,`unknown team ${l.team}`),yi(l.start,`players[${d}].start`),l.role!==void 0&&l.role!=="keeper"&&zt(`players[${d}].role`,`expected "keeper" or absent, got ${String(l.role)}`),l.role==="keeper"&&s.add(l.id)}),t.ball!==void 0&&(yi((h=t.ball)==null?void 0:h.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&zt("ball.static","expected a boolean or absent")),t.balls!==void 0&&(Array.isArray(t.balls)||zt("balls","expected an array"),t.balls.forEach((l,d)=>{(typeof l!="object"||l===null||Array.isArray(l))&&zt(`balls[${d}]`,"expected { carrier?, path }"),l.carrier!==void 0&&typeof l.carrier!="string"&&zt(`balls[${d}].carrier`,`expected a player id or absent, got ${String(l.carrier)}`),(!Array.isArray(l.path)||!l.path.length)&&zt(`balls[${d}].path`,"expected at least one { t, at }"),l.path.forEach((p,g)=>{(typeof(p==null?void 0:p.t)!="number"||p.t<0)&&zt(`balls[${d}].path[${g}].t`,"seconds >= 0 required"),g>0&&p.t<=l.path[g-1].t&&zt(`balls[${d}].path[${g}].t`,"times must ascend"),yi(p.at,`balls[${d}].path[${g}].at`)})})),(t.equipment??[]).forEach((l,d)=>{l.type!=="cone"&&l.type!=="goal"&&zt(`equipment[${d}].type`,String(l.type)),yi(l.at,`equipment[${d}].at`),l.width!==void 0&&(l.type!=="goal"&&zt(`equipment[${d}].width`,"only a goal has a mouth width"),typeof l.width=="number"&&l.width>=Ph-1e-9&&l.width<=Lh+1e-9||zt(`equipment[${d}].width`,`expected ${Ph}..${Lh} m, got ${String(l.width)}`)),l.facing!==void 0&&(l.type!=="goal"&&zt(`equipment[${d}].facing`,"only a goal has a facing"),Ih.includes(l.facing)||zt(`equipment[${d}].facing`,`expected one of ${Ih.join("|")}, got ${String(l.facing)}`))});const r=(l,d)=>{n.has(l)||zt(d,`unknown player ${l}`)};if((t.balls??[]).forEach((l,d)=>{l.carrier!==void 0&&r(l.carrier,`balls[${d}].carrier`)}),Array.isArray(t.events)||zt("events","expected an array"),t.events.forEach((l,d)=>{var p;if((typeof l.t!="number"||l.t<0)&&zt(`events[${d}].t`,"seconds >= 0 required"),iS.has(l.type)||zt(`events[${d}].type`,`unknown type ${l.type}`),l.type==="move"&&(r(l.player,`events[${d}].player`),yi(l.to,`events[${d}].to`),l.gait!==void 0&&!cl.includes(l.gait)&&zt(`events[${d}].gait`,`expected one of ${cl.join("|")}, got ${String(l.gait)}`)),l.type==="dribble"&&(r(l.player,`events[${d}].player`),yi(l.to,`events[${d}].to`),l.gait!==void 0&&!Uh.includes(l.gait)&&zt(`events[${d}].gait`,`expected one of ${Uh.join("|")}, got ${String(l.gait)}`)),(l.type==="move"||l.type==="dribble")&&l.runPath!==void 0&&typeof l.runPath!="boolean"&&zt(`events[${d}].runPath`,`expected a boolean, got ${String(l.runPath)}`),l.type==="pass"){if(r(l.from,`events[${d}].from`),r(l.to,`events[${d}].to`),l.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(l.flightStyle)&&zt(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(l.flightStyle)}`),l.loft!==void 0&&!(typeof l.loft=="number"&&l.loft>0)&&zt(`events[${d}].loft`,"expected a number > 0 (metres)"),l.style!==void 0&&(Po.includes(l.style)||zt(`events[${d}].style`,`expected one of ${Po.join("|")}, got ${String(l.style)}`),!s.has(l.from)&&!Lo.includes(l.style)&&zt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.from} is not a keeper (anyone may ${Lo.join(" or ")})`)),l.toFeet!==void 0&&(typeof l.toFeet!="boolean"&&zt(`events[${d}].toFeet`,`expected a boolean, got ${String(l.toFeet)}`),s.has(l.to)||zt(`events[${d}].toFeet`,`toFeet is keeper-only; ${l.to} is not a keeper`),l.toFeet&&l.flightStyle!==void 0&&l.flightStyle!=="ground")){let g=[...((p=t.players.find(b=>b.id===l.to))==null?void 0:p.start)??[0,0]];for(let b=0;b<d;b++){const m=t.events[b];(m.type==="move"||m.type==="dribble")&&m.player===l.to&&(g=[...m.to])}for(const b of t.equipment??[]){if(b.type!=="goal")continue;const m=Math.hypot(g[0]-b.at[0],g[1]-b.at[1]);m<Nh&&zt(`events[${d}].toFeet`,`a ${l.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${l.to} meets it ${m.toFixed(1)} m from the goal at [${b.at[0]}, ${b.at[1]}] (needs ${Nh} m)`)}}l.fromFeet!==void 0&&(typeof l.fromFeet!="boolean"&&zt(`events[${d}].fromFeet`,`expected a boolean, got ${String(l.fromFeet)}`),s.has(l.from)||zt(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${l.from} is not a keeper`),l.fromFeet&&t.events.some((g,b)=>b<d&&g.type!=="move")&&zt(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((l.type==="pass"||l.type==="shoot")&&l.deflect!==void 0){const g=l.deflect;(typeof g!="object"||g===null||Array.isArray(g))&&zt(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),yi(g.to,`events[${d}].deflect.to`),Fh.includes(g.style)||zt(`events[${d}].deflect.style`,`expected one of ${Fh.join("|")}, got ${String(g.style)}`),l.type==="pass"&&!s.has(l.to)&&zt(`events[${d}].deflect`,`deflections are keeper-only; ${l.to} is not a keeper`),l.type==="shoot"&&!(l.flightStyle==="ground"&&g.style==="ground")&&!s.size&&zt(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const b of t.equipment??[]){if(b.type!=="goal")continue;const f=b.facing==="e"||b.facing==="w"?g.to[1]-b.at[1]:g.to[0]-b.at[0];if(Math.abs(f)>xs(b,eS))continue;(b.facing!==void 0?{n:g.to[1]-b.at[1],s:b.at[1]-g.to[1],e:g.to[0]-b.at[0],w:b.at[0]-g.to[0]}[b.facing]:b.at[1]<=t.pitch.length/2?g.to[1]-b.at[1]:b.at[1]-g.to[1])<=nS&&zt(`events[${d}].deflect.to`,`[${g.to[0]}, ${g.to[1]}] is inside the goal mouth at [${b.at[0]}, ${b.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}if(l.type==="tackle"&&(r(l.player,`events[${d}].player`),r(l.from,`events[${d}].from`),l.from===l.player&&zt(`events[${d}].from`,"a player cannot tackle himself"),l.style!==void 0&&l.style!=="poke"&&l.style!=="slide"&&zt(`events[${d}].style`,`expected "poke" or "slide", got ${String(l.style)}`)),l.type==="collect"&&r(l.player,`events[${d}].player`),l.type==="shoot"&&(r(l.player,`events[${d}].player`),yi(l.at,`events[${d}].at`),l.flight!==void 0&&!(typeof l.flight=="number"&&l.flight>0)&&zt(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),l.corner!==void 0&&l.corner!=="left"&&l.corner!=="right"&&zt(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(l.corner)}`),l.flightStyle!==void 0&&l.flightStyle!=="ground"&&zt(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(l.flightStyle)}`),l.touch!==void 0&&(typeof l.touch!="boolean"&&zt(`events[${d}].touch`,`expected a boolean, got ${String(l.touch)}`),l.touch&&l.flightStyle!=="ground"&&zt(`events[${d}].touch`,'a touch is a ground ball; it needs flightStyle "ground"')),l.style!==void 0&&(Po.includes(l.style)||zt(`events[${d}].style`,`expected one of ${Po.join("|")}, got ${String(l.style)}`),!s.has(l.player)&&!Lo.includes(l.style)&&zt(`events[${d}].style`,`"${l.style}" is keeper-only; ${l.player} is not a keeper (anyone may ${Lo.join(" or ")})`),l.flightStyle!=="ground"&&zt(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(l.type==="pass"||l.type==="shoot")&&l.header!==void 0&&typeof l.header!="boolean"&&zt(`events[${d}].header`,`expected a boolean, got ${String(l.header)}`),(l.type==="pass"||l.type==="shoot")&&l.deadBall!==void 0&&typeof l.deadBall!="boolean"&&zt(`events[${d}].deadBall`,`expected a boolean, got ${String(l.deadBall)}`),(l.type==="pass"||l.type==="shoot")&&l.firstTime!==void 0&&typeof l.firstTime!="boolean"&&zt(`events[${d}].firstTime`,`expected a boolean, got ${String(l.firstTime)}`),l.type==="pass"||l.type==="shoot"||l.type==="dribble"){const g=l.newBall;g!==void 0&&(typeof g!="boolean"&&zt(`events[${d}].newBall`,`expected a boolean, got ${String(g)}`),g&&!t.events.some((b,m)=>m<d&&b.type!=="move")&&zt(`events[${d}].newBall`,"newBall swaps the live ball for a spare; this is the drill's first ball action, so there is nothing to swap"))}}),t.overlays!==void 0){const l=t.overlays;(typeof l!="object"||l===null||Array.isArray(l))&&zt("overlays","expected an object"),l.runPaths!==void 0&&!Ch.includes(l.runPaths)&&zt("overlays.runPaths",`expected one of ${Ch.join("|")}, got ${String(l.runPaths)}`),l.zones!==void 0&&(Array.isArray(l.zones)||zt("overlays.zones","expected an array"),l.zones.forEach((d,p)=>{yi(d.at,`overlays.zones[${p}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||zt(`overlays.zones[${p}]`,"w/h metres > 0 required"),d.color!==void 0&&!Rh.includes(d.color)&&!Oh.test(d.color)&&zt(`overlays.zones[${p}].color`,`expected ${Rh.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&zt(`overlays.zones[${p}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&zt("keeper","expected { outcome: save | beaten }"),Dh.includes(t.keeper.outcome)||zt("keeper.outcome",`expected one of ${Dh.join("|")}, got ${String(t.keeper.outcome)}`)),t}function rS(i){const t=new bs({color:YM,roughness:.6,toneMapped:!1}),e=new bn,n=new Me(new JM(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new qt(.17,.06),new qt(.15,.1)];for(let o=0;o<=8;o++)s.push(new qt(.15-.11*o/8,.1+.31*o/8));for(let o=1;o<=4;o++){const a=o/4*(Math.PI/2);s.push(new qt(.04*Math.cos(a),.41+.04*Math.sin(a)))}const r=new Me(new Fl(s,24),t);return e.add(n,r),e.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),e.scale.setScalar(i),e}function jp(i,t,e,n,s,r){let o=r;const a=()=>(o=o*1103515245+12345&2147483647)/2147483647,c=e/n,u=5*c;for(let h=Math.floor(s/5)*5;h<s+n;h+=5){const l=(h-s)*c,d=i.createLinearGradient(0,l,0,l+u);(Math.floor(h/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,l,t,u+1)}for(let h=0;h<20;h++){const l=(h%5+.15+a()*.7)*(t/5),d=(Math.floor(h/5)+.15+a()*.7)*(e/4),p=(40+a()*120)*(t/1024),g=a()>.5,b=i.createRadialGradient(l,d,0,l,d,p);b.addColorStop(0,g?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),b.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=b,i.fillRect(l-p,d-p,2*p,2*p)}Xp(i,t,e,a,1)}function Xp(i,t,e,n,s){const r=a=>(a*s).toFixed(3),o=t*e/1048576;for(let a=0;a<6400*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let a=0;a<9600*o;a++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function oS(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");jp(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),qp(n);const s=new Tn(e);return s.colorSpace=ze,s.flipY=!1,s}function qp(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const aS=2.5;function Kp(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const cn=6;function cS(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");jp(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),qp(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,o=e/(t+2*e)*1024,a=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,o],[0,1024,0,1024-o]];for(const[h,l,d,p]of a){const g=s.createLinearGradient(h,l,d,p);g.addColorStop(0,"rgba(0,0,0,0.55)"),g.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=g,s.fillRect(0,0,1024,1024)}const c=aS*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",Kp(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const u=new Tn(n);return u.colorSpace=ze,u.flipY=!1,u}function lS(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",Kp(t,40,40,176,176,34),t.fill();const e=new Tn(i);return e.flipY=!1,e}let Er=null;function uS(){if(Er)return Er;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Er=new Tn(i),Er.userData.shared=!0,Er}function hS(i){const t=new Me(new Nl(i/2,24).rotateX(-Math.PI/2),new nn({map:uS(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const qn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},dS=.5;function Vr(i,t){const e=new Map;for(const s of i.equipment??[]){if(s.type!=="goal")continue;const r=s.facing==="e"||s.facing==="w",o=r?`x${s.at[0]}`:`z${s.at[1]}`,a=e.get(o)??{avail:r?i.pitch.length:i.pitch.width,widths:[]};a.widths.push(2*xs(s,qn.halfW)),e.set(o,a)}if(!e.size)return t;let n=t;for(const{avail:s,widths:r}of e.values()){const o=r.reduce((a,c)=>a+c,0);n=Math.min(n,s/(o+(r.length-1)*dS*(o/r.length)))}return n}function fS(i){const t=xs(i,qn.halfW);return t===qn.halfW?qn:{halfW:t,top:Wp(i.width),zMin:-Xi,zMax:Xi}}function $p(i,t){return i.facing!==void 0?QM[i.facing]:i.at[1]>t/2?Math.PI:0}const Xi=.08;function pS(i){const t=Wp(i),e=new bs({color:"#FFFFFF",roughness:.5}),n=new bn,s=i/2-Xi;for(const o of[-1,1]){const a=new Me(new da(Xi,Xi,t,12),e);a.position.set(o*s,t/2,0),n.add(a)}const r=new Me(new da(Xi,Xi,2*s,12),e);return r.rotation.z=Math.PI/2,r.position.y=t-Xi,n.add(r),e.userData.drillOwned=!0,n.traverse(o=>{const a=o;a.isMesh&&(a.castShadow=!0,a.geometry.userData.drillOwned=!0)}),n}const Yp=.8;function mS(i,t,e){const n=new Me(new Ci(e?i:t,Yp,e?t:i),new bs({color:"#FFFFFF",roughness:.55}));return n.castShadow=!0,n.receiveShadow=!0,n}function Zp(i,t){i.scale.set(1,t,1),i.position.y=Yp*t/2}let kh=null;function gS(i){return kh??(kh=i.loadAsync(Pi("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw kh=null,t}))}let Bh=!1;function _S(i,t){if(Bh||!t)return;Bh=!0;const e=new dn().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-qn.halfW)>.05||Math.abs(s-qn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${qn.halfW}, top ${s.toFixed(3)} vs ${qn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function bS(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new k(n*(t/2+cn),0,s*(e/2+cn)))}function ll(i,t){const{width:e,length:n}=i.pitch,s=Vr(i,t),r=[];for(const o of i.equipment??[]){if(o.type!=="goal")continue;const a=o.at[0]-e/2,c=o.at[1]-n/2,u=fS(o),h=$p(o,n),l=Math.cos(h),d=Math.sin(h);for(const p of[-u.halfW*s,u.halfW*s])for(const g of[0,u.top*s])for(const b of[u.zMin*s,u.zMax*s])r.push(new k(a+p*l+b*d,g,c-p*d+b*l))}return r}const xS=600,Jp=xS/2*Math.SQRT2,Gh=30,vS=-.06,yS=-.04,MS=660496,SS="#04170c",zh=.7,Qp=1.2;function AS(i,t,e){const n=Math.max(t,e),s=n/2+cn,r=Qp*n;return r>s?1-(1-zh)*Vl((i-s)/(r-s)):i>=s?zh:1}function Vl(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const ES=1.6,TS=2.6;function wS(i,t){const e=Math.max(i,t);return{near:ES*e+cn,far:TS*e+cn}}const Hh="#0b1f22",_c="#010203",RS=1.02;function CS(i,t){return Math.hypot(i/2+cn,t/2+cn)*RS}const IS=.12,PS=1.15,Wl=(i,t)=>Math.hypot(i/2,t/2),tm=(i,t)=>Wl(i,t)*PS,Do=12,bc=18,Vh=.3,LS=2.4,Wh=1.2,DS=.4,FS=6;function NS(i,t,e=1/0){const n=i/2+cn,s=t/2+cn,r=t>=i?"z":"x",o=r==="z"?n:s,a=r==="z"?s:n,c=US(o,a,e*OS),u=[-(a+c),a+c],h=-(o+c),l=u.map(d=>r==="z"?[h,d]:[d,h]);return{axis:r,masts:l}}function US(i,t,e){if(!(e<Math.hypot(i+Do,t+Do)))return Do;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(Do,(-n+Math.sqrt(r))/2)):0}const OS=.97;function jl(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=SS,t.fillRect(0,0,512,512);let e=7;Xp(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new Tn(i);return n.colorSpace=ze,n.wrapS=n.wrapT=1e3,n}function kS(){const i=new bn,t=new Hr({color:1251867}),e=new Me(new Ci(Vh,bc,Vh),t);e.position.y=bc/2;const n=new Me(new Ci(LS,Wh,DS),t);n.position.y=bc+Wh/2;const s=new y0(new yp({map:BS(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(FS),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let Tr=null;function BS(){if(Tr)return Tr;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Tr=new Tn(i),Tr.userData.shared=!0,Tr}function GS(){return[[0,_c],[hl,Hh],[VS,Hh],[Xl,_c],[1,_c]]}function zS(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of GS())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new Tn(i);return n.colorSpace=ze,n.wrapS=n.wrapT=1001,n}const ul=.03,jh=.06,HS=.28,Xl=1,hl=Xl*jh/(jh+HS-ul),VS=.85;function WS(i,t={repeat:0,offset:0}){const e=Math.max(i,ul+.03);return t.repeat=(Xl-hl)/(e-ul),t.offset=hl-t.repeat*(1-e),t}const jS=60,XS=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<jS,qS=-1e3;function em(i,t,e,n,s,r){const o=new Hr({map:e,vertexColors:!0}),a=new Hr({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=Qp*Math.max(i,t),u=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&u.push([n,s,16]);const h=[];for(const[l,d,p]of u){const g=l===n,b=new Aa(l,d,128,p).rotateX(-Math.PI/2),m=b.getAttribute("position"),f=b.getAttribute("uv"),v=g?4:3,M=new Float32Array(m.count*v);for(let E=0;E<m.count;E++){const w=m.getX(E),C=m.getZ(E);f.setXY(E,w/Gh,C/Gh);const P=Math.hypot(w,C),A=AS(P,i,t);M[v*E]=M[v*E+1]=M[v*E+2]=A,g&&(M[v*E+3]=d>l?1-Vl((P-l)/(d-l)):1)}f.needsUpdate=!0,b.setAttribute("color",new Ce(M,v));const y=new Me(b,g?a:o);y.userData[r]=g,y.position.y=vS,h.push(y)}return h}function KS(i,t,e=1,n=jl()){const s=new bn;n.anisotropy=e;for(const r of em(i,t,n,Wl(i,t),tm(i,t),"floatRim"))s.add(r);return s}const xc=16;function $S(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),o=512/(t+2*e),a=Wl(i,t),c=tm(i,t);s.save(),s.translate(256,256),s.scale(1,o/r);const u=s.createRadialGradient(0,0,a*r,0,0,c*r);for(let l=0;l<=xc;l++){const d=Math.round(255*(1-Vl(l/xc)));u.addColorStop(l/xc,`rgb(${d},${d},${d})`)}s.fillStyle=u,s.fillRect(-4096,-4096,8192,8192),s.restore();const h=new Tn(n);return h.flipY=!1,h}function YS(i,t,e=1,n=Jp,s=jl()){const r=new bn;s.anisotropy=e;const o=Math.max(n,Math.max(i,t)/2+cn+1),a=o*(1-IS),c=Math.max(a,Math.max(i,t)/2+cn);for(const h of em(i,t,s,c,o,"rimFade"))r.add(h);const{masts:u}=NS(i,t,o);for(const[h,l]of u){const d=kS();d.name="mast",d.position.set(h,0,l),r.add(d)}return r}async function ZS(i,t,e=1,n=1,s=Jp){var S;const r=Vr(t,n),{width:o,length:a}=t.pitch,c=(L,B=0)=>new k(L[0]-o/2,B,L[1]-a/2),u=L=>(L.anisotropy=e,L),h=u(cS(o,a,cn)),l=()=>new Yn(o+2*cn,a+2*cn).rotateX(-Math.PI/2),d=new Me(l(),new Hr({map:h,transparent:!0})),p=new Me(l(),new Hr({map:h,alphaMap:$S(o,a,cn),transparent:!0}));for(const L of[d,p])L.position.y=-.02,L.renderOrder=-1,L.receiveShadow=!0;const g=new Me(new Yn((o+2*cn)*1.5,(a+2*cn)*1.5).rotateX(-Math.PI/2),new nn({map:lS(),transparent:!0,depthWrite:!1}));g.position.y=yS,g.renderOrder=-2,i.add(g);const b=new Me(new Yn(o,a).rotateX(-Math.PI/2),new bs({map:u(oS(o,a)),roughness:.9}));b.receiveShadow=!0;const m=jl(),f=YS(o,a,e,s,m),v=KS(o,a,e,m);i.add(d,p,b,f,v);const M=L=>{f.visible=L,g.visible=L,d.visible=L,v.visible=!L,p.visible=!L};M(!0);const y=f.children.filter(L=>L.name==="mast"),E=L=>{for(const B of y)B.visible=L};E(!1);const w=Hl(),C=[],P=[];for(const L of t.equipment??[])if(L.type==="cone"){const B=rS(n);B.position.copy(c(L.at,0)),i.add(B),P.push(B)}else{const B=xs(L,qn.halfW)!==qn.halfW,z=B?pS(L.width):(await gS(w)).clone();z.position.copy(c(L.at)),z.rotation.y=$p(L,a),z.scale.setScalar(r),i.add(z),C.push(z),B||_S(z,r)}const A=[];for(const L of((S=t.overlays)==null?void 0:S.zones)??[]){if(!Vp.test(L.label??""))continue;const B=mS(Math.max(L.w,L.h),Math.min(L.w,L.h),L.w>=L.h),z=c(L.at);B.position.set(z.x,0,z.z),Zp(B,n),i.add(B),A.push(B)}return{toWorld:c,goals:C,cones:P,boards:A,setWorld:M,setMasts:E}}const Xh=new k(10,20,8).normalize(),JS=1.05,dl=2048,QS=1024,tA=1600,eA=(i,t)=>Math.max(i,t)>=tA?dl:QS,nA=5;function iA(i){const t=new dn().setFromPoints(i).getCenter(new k);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function sA(i,t=()=>new Jy({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=wh(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const o=e.domElement;o.style.width="100%",o.style.height="100%",o.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=JS,e.outputColorSpace=ze,i.appendChild(o);const a=new v0;a.background=new Kt(VM);const c=new _n(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const u=new Fp(16772564,nA);u.position.copy(Xh).multiplyScalar(40),u.castShadow=!0,u.shadow.mapSize.set(dl,dl),u.shadow.radius=4,a.add(u,u.target,new q0(12571874,2902572,.9));let h=Math.min(devicePixelRatio,2);function l(){var vt;const J=eA(s.width*h,s.height*h);u.shadow.mapSize.width!==J&&(u.shadow.mapSize.set(J,J),(vt=u.shadow.map)==null||vt.dispose(),u.shadow.map=null)}l();function d(){const J=wh(i,window,s),vt=Math.min(devicePixelRatio,2),Tt=vt!==h;if(Tt&&(h=vt,e.setPixelRatio(h)),J.width!==s.width||J.height!==s.height){s=J,l(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),S();for(const Nt of[...r])Nt()}else Tt&&(e.setSize(s.width,s.height,!1),l(),S())}const p=typeof ResizeObserver=="function"?new ResizeObserver(d):null;p?p.observe(i):addEventListener("resize",d);let g=null;const b=()=>{m(),d()};function m(){g==null||g.removeEventListener("change",b),g=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,g==null||g.addEventListener("change",b)}m();let f=!0,v=!1,M=0;function y(){v||(v=!0,M=requestAnimationFrame(G))}function E(){f=!document.hidden,f&&(B=-1,y())}document.addEventListener("visibilitychange",E);let w=!0,C=Th,P=0;const A=new k;function S(){C=zM(C),f&&(v||(B=-1),y())}let L=()=>{},B=-1,z=null,X=null,V=null,O=!0;function H(J,vt){if(L(J,vt),ct(),z&&a.fog){const Tt=c.position.length();a.fog.near=Tt+z.near,a.fog.far=Tt+z.far}e.render(a,c),P++}function G(J){if(v=!1,!f)return;const vt=B<0?0:(J-B)/1e3;B=J,A.copy(c.position),H(vt,J),C=HM(C,A.distanceTo(c.position),vt),w||Hp(C)?y():B=-1}function Q(J){if(!J.length)return;const{centre:vt,radius:Tt,distance:Nt,far:ee}=iA(J);u.target.position.copy(vt),u.target.updateMatrixWorld(),u.position.copy(Xh).multiplyScalar(Nt).add(vt);const Vt=u.shadow.camera;Vt.left=-Tt,Vt.right=Tt,Vt.top=Tt,Vt.bottom=-Tt,Vt.near=.5,Vt.far=ee,Vt.updateProjectionMatrix()}function Y(J){if(z=J,!J){a.fog=null;return}a.fog??(a.fog=new Cl(MS,J.near,J.far))}function ut(J){if(V=J,!J){X&&(X.visible=!1);return}X||(X=new Me(new Yn(1,1),new nn({map:zS(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),X.renderOrder=qS,X.frustumCulled=!1,a.add(X)),X.visible=O}function St(J){O=J,X&&(X.visible=J&&!!V)}const Ct=new k,at=new k,_t={repeat:0,offset:0};function ct(){if(!X||!V)return;if(!O){X.visible=!1;return}if(c.getWorldDirection(Ct),X.visible=XS(Ct.y),!X.visible)return;const J=Math.hypot(c.position.x,c.position.z)||1;at.set(-c.position.x/J*V,0,-c.position.z/J*V),at.project(c);const vt=(1-at.y)/2,Tt=c.near*1.5,Nt=2*Tt*Math.tan(c.fov*Math.PI/360);X.scale.set(Nt*c.aspect,Nt,1),X.quaternion.copy(c.quaternion),X.position.copy(c.position).addScaledVector(Ct,Tt),WS(vt,_t);const ee=X.material.map;ee.repeat.set(1,_t.repeat),ee.offset.set(0,_t.offset)}return{scene:a,camera:c,renderer:e,fitShadow:Q,setFog:Y,setHorizon:ut,setSky:St,size:()=>({...s}),remeasure:d,onBox(J){return r.add(J),()=>{r.delete(J)}},start(J){L=J,y()},park(J){L===J&&(cancelAnimationFrame(M),v=!1,L=()=>{},C=Th,P=0,B=-1)},step(J,vt=performance.now()){H(J,vt)},frames:()=>P,rule:{enable(){w=!1},play(){C=BM(C),S()},pause(){C=GM(C),S()},wake:S,snap:()=>kM(C)},dispose(){f=!1,r.clear(),g==null||g.removeEventListener("change",b),p?p.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",E),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function rA(i,t){for(const e of t)e.traverse(n=>{var r,o;const s=n;(r=s.skeleton)==null||r.dispose();for(const a of im(s))a.userData.drillOwned&&a.dispose();(o=s.geometry)!=null&&o.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);nm(i)}function nm(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of im(e)){for(const o of Object.values(r)){const a=o;a!=null&&a.isTexture&&!a.userData.shared&&a.dispose()}r.dispose()}})}const im=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function oA(i){const t=new Map,e=new Map,n=i.clone();return sm(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function sm(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)sm(i.children[n],t.children[n],e)}const qh="b4aabedc",rm=24,aA=/^[\w-]+$/,cA=async i=>await(await fetch(Pi(`drills/${i}.json`))).json();class rI{constructor(t=cA,e=null,n=rm){sn(this,"mem",new Map);sn(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===qh)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:qh,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&aA.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const lA="tactivo-engine",rs="drills",Kh=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function uA(){try{return globalThis.indexedDB}catch{return}}function oI(i=uA()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(lA,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(rs)&&r.result.deleteObjectStore(rs),r.result.createObjectStore(rs)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(rs,"readonly").objectStore(rs);return await Kh(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await Kh(r.transaction(rs,"readwrite").objectStore(rs).put(s,n))}catch{}}}}const $h=["plain","stripes","hoops","halves","sash","sleeves"],Yh=["mixed","light","mediumLight","medium","mediumDark","dark"],hA="mixed",om="#FFFFFF",vc=/^#[0-9a-fA-F]{6}$/;function Zh(i){if(typeof i!="object"||i===null)return Ge("kit: must be {a?, pattern?, b?, shorts?, socks?, skin?}");const t=i;if(t.a!==void 0&&t.a!==null&&(typeof t.a!="string"||!vc.test(t.a)))return Ge("kit: a must be a #RRGGBB colour or absent");if(t.b!==void 0&&(typeof t.b!="string"||!vc.test(t.b)))return Ge("kit: b must be a #RRGGBB colour");if(t.pattern!==void 0&&(typeof t.pattern!="string"||!$h.includes(t.pattern)))return Ge(`kit: pattern must be one of ${$h.join(", ")}`);for(const e of["shorts","socks"])if(t[e]!==void 0&&t[e]!==null&&(typeof t[e]!="string"||!vc.test(t[e])))return Ge(`kit: ${e} must be a #RRGGBB colour or absent`);return t.skin!==void 0&&t.skin!==null&&(typeof t.skin!="string"||!Yh.includes(t.skin))?Ge(`kit: skin must be one of ${Yh.join(", ")}`):{pattern:t.pattern??"plain",b:t.b??om,...typeof t.a=="string"?{a:t.a}:{},...typeof t.shorts=="string"?{shorts:t.shorts}:{},...typeof t.socks=="string"?{socks:t.socks}:{},...typeof t.skin=="string"?{skin:t.skin}:{}}}const Jh=["boys","girls","mixed"],am="mixed";function Qh(i){return i==null?am:typeof i!="string"||!Jh.includes(i)?Ge(`squad: must be one of ${Jh.join(", ")}`):i}const td=["shirt","full"],cm="shirt";function ed(i){return i==null?cm:typeof i!="string"||!td.includes(i)?Ge(`framing: must be one of ${td.join(", ")}`):i}const nd=new Set(["fit","broadcast"]),lm=.5,dA=5,aI={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},fA=100,fl=1/0,pA=2e3,yc=/^[\w-]+$/,mA=/^[A-Za-z0-9_./-]{1,80}$/,gA=i=>mA.test(i)&&!i.includes(".."),_A=30,bA=85,xA=i=>Math.min(Math.max(i,_A),bA),Zs=i=>({state:i,effects:[],out:[]}),ia=(i,t,e,n)=>({state:i,effects:[],out:[{type:"error",code:t,message:e,...n!==void 0?{key:n}:{}}]}),vA=new Set(["auto","authored","off"]),yA=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function cI(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,o=typeof r=="number"&&Number.isFinite(r)&&r>0?um(r):0,a=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:o,...a?{beat:a}:{}}}):[]}const um=i=>Math.min(Math.max(i,lm),dA);function hm(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const ql=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},dm=(i,t)=>{var n;const e=ql(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},Ge=i=>({error:i,code:"bad_message"}),id=i=>{const t=i.narrationBase;return typeof t=="string"&&/^https?:\/\/[^\s]+\/$/.test(t)?{narrationBase:t}:{}};function lI(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||yA.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return Ge("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return Ge("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!yc.test(n.key)))return{error:`load: key must match ${yc.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const a=t.intro;if(typeof a!="object"||a===null)return Ge("load: intro must be {text, hold}");if(typeof a.text!="string"||a.text==="")return Ge("load: intro.text must be a non-empty string");if(typeof a.hold!="number"||!Number.isFinite(a.hold))return Ge("load: intro.hold must be a finite number");s={text:a.text,hold:um(a.hold)}}let r;if(t.kit!==void 0){const a=Zh(t.kit);if("error"in a)return a;r=a}const o=Qh(t.squad);return typeof o!="string"?o:{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{},...r?{kit:r}:{},...t.squad!==void 0&&t.squad!==null?{squad:o}:{},...id(t)}}case"preview":case"kit":{const e=Zh(t.type==="preview"?t.kit:t);if("error"in e)return e;if(t.type==="kit")return{type:"kit",kit:e};const n=ed(t.framing);if(typeof n!="string")return n;const s=Qh(t.squad);return typeof s!="string"?s:{type:"preview",kit:e,framing:n,squad:s}}case"frame":{const e=ed(t.framing);return typeof e!="string"?e:{type:"frame",framing:e}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":{if(typeof t.enabled!="boolean")return Ge("setAudio: enabled must be a boolean");const e=t.musicGain,n=t.track;return{type:"setAudio",enabled:t.enabled,...typeof t.sfx=="boolean"?{sfx:t.sfx}:{},...typeof t.music=="boolean"?{music:t.music}:{},...typeof e=="number"&&Number.isFinite(e)&&e>=0&&e<=1?{musicGain:e}:{},...typeof n=="string"&&gA(n)?{track:n}:{},...id(t)}}case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&yc.test(e)).slice(0,rm)}:Ge("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?Ge("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?Ge("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?Ge("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?Ge("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!nd.has(t.follow)?Ge(`setCamera: follow must be one of ${[...nd].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?Ge("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return Ge(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!vA.has(t.runPaths))return Ge("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return Ge(`unknown message type: ${t.type}`)}}function uI(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop,...t.kit?{kit:t.kit}:{},...t.squad?{squad:t.squad}:{},...t.narrationBase?{narrationBase:t.narrationBase}:{}}],out:[]}}if(t.type==="preview"){const s=i.seq+1;return{state:{...i,phase:"loading",playing:!1,duration:0,seq:s,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"preview",seq:s,kit:t.kit,framing:t.framing??cm,squad:t.squad??am}],out:[]}}if(t.type==="kit")return{state:i,effects:[{kind:"setKit",kit:t.kit}],out:[]};if(t.type==="frame")return{state:i,effects:[{kind:"setFraming",framing:t.framing}],out:[]};if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio"){const{type:s,...r}=t;return{state:i,effects:[{kind:"setAudio",...r}],out:[]}}if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return ia(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return ia(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:xA(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?Zs(i):ia(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function hI(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return Zs(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,o=r?-1:hm(n,0),a=r?s?Math.max(t.hookHold,lm):r.hold:0,c=r?a:ql(n,o),u=s?fl:c>0?e+c*1e3:null,h={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:o,intro:null,holdUntilMs:u,hookCeilingMs:s?e+t.hookHold*1e3+pA:0,introSkip:r!==null},effects:u!==null?[{kind:"hold",on:!0}]:[],out:[h,r?{type:"cue",index:-1,text:r.text,hold:a}:dm(n,o)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?Zs(i):ia({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`,t.key);case"hookEnded":return i.holdUntilMs!==fl?Zs(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function dI(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===fl?i.hookCeilingMs:i.holdUntilMs;return e<c?Zs(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=hm(i.narration,t),s=i.playing&&e-i.lastTimeMs>=fA;if(n===i.cue&&!s)return Zs(i);const r=n!==i.cue,o=r&&i.introSkip&&n===0,a=r&&!o?ql(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...a>0?{holdUntilMs:e+a*1e3}:{}},effects:a>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[dm(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const Kl=["shirt","jersey","top","tshirt"];let yn=null;async function Ta(i,t,e=Pi("assets/ochi.glb"),n,s=0,r){if(!yn||yn.url!==e){const a=await(n??Hl()).loadAsync(e),c=a.scene.children.filter(u=>{let h=!1;return u.traverse(l=>{h||(h=l.isSkinnedMesh)}),h});yn={variants:c.length?c:[a.scene],clips:a.animations,url:e}}const o=[];for(let a=0;a<t;a++){const c=yn.variants.length>1,u=r==null?void 0:r[a],h=u===void 0?a+s:u,l=oA(yn.variants[(h%yn.variants.length+yn.variants.length)%yn.variants.length]);l.traverse(p=>{p.castShadow=p.type==="SkinnedMesh",c&&p.isBone&&(p.name=p.name.replace(/_\d+$/,""))}),i.add(l);const d=new p_(l);o.push({root:l,mixer:d,clips:new Map(yn.clips.map(p=>[p.name,p]))})}return o}const sd=new WeakMap;function fm(i){let t=sd.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),sd.set(i.root,t)),t}function $l(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const pm=$l(/^foot[LR]$/),mm=$l(/^hand[LR]$/),pl=$l(/^spine00[12]$/),Wr=.6499;function Yl(i){const t=new Kt(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/Wr,1/e)):t}let Mc=null;const gm=3e3;function _m(i){return Mc??(Mc=(async()=>{let t;try{return await Promise.race([i(Pi("assets/kit/kit_masks.json")),new Promise((e,n)=>{t=setTimeout(()=>n(new Error("kit_masks.json timed out")),gm)})])}finally{clearTimeout(t)}})().catch(t=>{throw Mc=null,t})),Mc}async function MA(i,t=Pi("assets/ochi.glb"),e){await Ta(new bn,0,t,e);const n=i.toLowerCase();return yn?yn.variants.findIndex(s=>{let r=!1;return s.traverse(o=>{const a=o;if(a.isMesh)for(const c of Array.isArray(a.material)?a.material:[a.material])r||(r=(c.name||"").toLowerCase()===n)}),r}):-1}function SA(i){const t=[];return i.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=(s.name||"").toLowerCase();Kl.some(o=>r.includes(o))&&t.push(r)}}),t}async function bm(i,t=Pi("assets/ochi.glb"),e){await Ta(new bn,0,t,e);const n=yn?yn.variants.map((r,o)=>o):[];if(i==="mixed")return n;const s=i==="girls"?"woman":"man";return n.filter(r=>SA(yn.variants[r]).some(a=>(a.includes("woman")?"woman":a.includes("man")?"man":"")===s))}const Zl=i=>i.replace(/^shirt\s+/i,"").toLowerCase().replace(/\s+/g,"-");function xm(i){const t=[];return i.root.traverse(e=>{const n=e;if(n.isMesh)for(const s of Array.isArray(n.material)?n.material:[n.material]){const r=s.name||n.name;Kl.some(o=>r.toLowerCase().includes(o))&&t.push(Zl(r))}}),t}async function vm(i,t,e={}){var o;const n=(Array.isArray(i)?i:[i]).filter(a=>a!=="plain");if(!n.length)return null;const s=a=>Pi(`assets/kit/${a}`),r=e.fetchJson??(a=>fetch(a).then(c=>c.json()));try{const a=await _m(r),c=[...new Set(n.map(d=>{var p;return(p=a.channels[d])==null?void 0:p.file}).filter(d=>d!==void 0))];if(!c.length)return null;const u=e.loader??new Dp,h=new Map,l=new Map;for(const d of new Set(t))for(const p of c){const g=(o=a.characters[d])==null?void 0:o.files[p];if(!g)continue;let b=l.get(g);b||(b=await u.loadAsync(s(g)),b.colorSpace="",b.flipY=!1,b.anisotropy=16,b.needsUpdate=!0,l.set(g,b));const m=h.get(d)??[];m[p]=b,h.set(d,m)}return h.size?{channels:a.channels,textures:h,dispose(){for(const d of l.values())d.dispose();l.clear(),h.clear()}}:null}catch{return null}}async function ym(i={}){const t=i.fetchJson??(e=>fetch(e).then(n=>n.json()));try{const e=await _m(t);return Object.fromEntries(Object.entries(e.characters).map(([n,s])=>[n,s.numberBox]).filter(([,n])=>n))}catch{return{}}}const rd=new Map;function Mm(i){if(!i)return null;let t=rd.get(i);if(!t){if(typeof document>"u")return null;const e=256,n=document.createElement("canvas");n.width=n.height=e;const s=n.getContext("2d");if(!s)return null;s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle";const r=c=>`700 ${c}px "Helvetica Neue", Helvetica, Arial, sans-serif`;let o=e*.92;s.font=r(o);const a=s.measureText(i).width;a>e*.84&&(o*=e*.84/a,s.font=r(o)),s.fillText(i,e/2,e*.54),t=new Tn(n),t.colorSpace="",t.anisotropy=8,rd.set(i,t)}return t}const Sc=new Kt("#14181B"),Ac=new Kt("#FFFFFF"),AA=.5;function Sm(i,t,e,n={}){const s=typeof t=="string"?{a:t,pattern:"plain",b:"#FFFFFF"}:t,r=typeof t!="string"&&s.a!==void 0,o={...s,a:s.a??n.base??om},a=n.from!==void 0&&RA(n.from,s),c=[];return i.root.traverse(u=>{const h=u;if(!h.isMesh)return;(Array.isArray(h.material)?h.material:[h.material]).forEach((d,p)=>{const g=d.name||h.name,b=g.toLowerCase();if(!Kl.some(m=>b.includes(m))){const m=cd.get(d)??d,f=Tm(s);if(!f&&d===m||a&&d!==m)return;const v=f?m.clone():m;f&&(v.userData.drillOwned=!0,cd.set(v,m),CA(v,s,h,r),c.push(v)),d!==v&&d.userData.drillOwned&&d.dispose(),Array.isArray(h.material)?h.material[p]=v:h.material=v;return}{const m=d.clone();d.userData.drillOwned&&d.dispose(),m.userData.drillOwned=!0,m.color=Yl(o.a),PA(m,o,e,Zl(g),{...n,exact:r}),c.push(m),Array.isArray(h.material)?h.material[p]=m:h.material=m}})}),c}const EA=/^(thigh[LR]|pelvis[LR]|spine)$/,TA=/^shin[LR]$/,wA=8,od=i=>Math.round(i*100)/100,jr=[.8,.9],ml=[od(1-jr[1]),od(1-jr[0])],Am=8,gl=1,Em={light:"#F5B595",mediumLight:"#E19774",medium:"#CC7A52",mediumDark:"#733727",dark:"#4C2B24"},kr=i=>i!==void 0&&i!==hA;function ad(i,t){var r;const e=[new me(-1,-1,-1,-1),new me(-1,-1,-1,-1)],n=((r=i.skeleton)==null?void 0:r.bones)??[];let s=0;for(let o=0;o<n.length&&s<wA;o++)t.test(n[o].name)&&e[s>>2].setComponent(s++&3,o);return e}const Tm=i=>{const t=wm(i);return!!(t.shorts||t.socks||t.tone)},wm=i=>({shorts:i.shorts,socks:i.socks,tone:kr(i.skin)?Em[i.skin]:void 0}),RA=(i,t)=>i.shorts===t.shorts&&i.socks===t.socks&&kr(i.skin)===kr(t.skin)&&(!kr(i.skin)||i.skin===t.skin),cd=new WeakMap;function CA(i,t,e,n){const s=ad(e,EA),r=ad(e,TA),o=wm(t),a={kitShortsB:{value:s[0]},kitShortsB2:{value:s[1]},kitSocksB:{value:r[0]},kitSocksB2:{value:r[1]},kitShortsC:{value:hs(o.shorts??"#000000",n)},kitSocksC:{value:hs(o.socks??"#000000",n)},kitShortsOn:{value:o.shorts?1:0},kitSocksOn:{value:o.socks?1:0},kitSkinC:{value:hs(o.tone??"#000000",!0)},kitSkinOn:{value:o.tone?1:0}};i.userData.kitBodyUniforms=a,i.onBeforeCompile=c=>{Object.assign(c.uniforms,a),c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
	float kitBand = vMapUv.x * ${Am.toFixed(1)};
	float kitSkinAt = step( ${gl.toFixed(1)}, kitBand ) * step( kitBand, ${(gl+1).toFixed(1)} );
	diffuseColor.rgb = mix( diffuseColor.rgb, kitSkinC, kitSkinAt * kitSkinOn );
#endif
	float kitShortsAt = smoothstep( ${ml[0].toFixed(2)}, ${ml[1].toFixed(2)}, vKitLeg.x ) * kitShortsOn;
	float kitSocksAt = smoothstep( ${jr[0].toFixed(2)}, ${jr[1].toFixed(2)}, vKitLeg.y ) * kitSocksOn;
	float kitLegAt = kitShortsAt + kitSocksAt;
	diffuseColor.rgb = mix( diffuseColor.rgb,
		( kitShortsC * kitShortsAt + kitSocksC * kitSocksAt ) / max( kitLegAt, 0.0001 ),
		min( kitLegAt, 1.0 ) );`)},i.customProgramCacheKey=()=>"kitbody",i.needsUpdate=!0}const IA=i=>{const t=new Kt(i),e=Math.max(t.r,t.g,t.b);return e>Wr?Wr/e:1},hs=(i,t)=>t?new Kt(i):Yl(i).multiplyScalar(Wr);function _l(i,t){const e=[new me(0,0,0,0),new me(0,0,0,0)],n=i==null?void 0:i[t],s=n?"rgba".indexOf(n.channel):-1;return n&&s>=0&&e[n.file]&&e[n.file].setComponent(s,1),e}function PA(i,t,e,n,s){const{from:r,label:o,boxes:a,exact:c=!1}=s,u=(e==null?void 0:e.textures.get(n))??[],h=_l(e==null?void 0:e.channels,t.pattern),l=_l(e==null?void 0:e.channels,(r==null?void 0:r.pattern)??t.pattern),d=o?a==null?void 0:a[n]:void 0,p=d?Mm(o):null,g={kitMask0:{value:u[0]??null},kitMask1:{value:u[1]??null},kitSel0:{value:h[0]},kitSel1:{value:h[1]},kitA:{value:hs(t.a,c)},kitB:{value:hs(t.b,c)},kitSelWas0:{value:l[0]},kitSelWas1:{value:l[1]},kitWasA:{value:hs((r==null?void 0:r.a)??t.a,c)},kitWasB:{value:hs((r==null?void 0:r.b)??t.b,c)},kitFade:{value:r?0:1},kitNumber:{value:p},kitNumO:{value:new qt(...(d==null?void 0:d.o)??[0,0])},kitNumIX:{value:new qt(...(d==null?void 0:d.ix)??[1,0])},kitNumIY:{value:new qt(...(d==null?void 0:d.iy)??[0,1])},kitNumOn:{value:p?1:0},kitNumFlip:{value:AA*(c?1:IA(t.a))}};i.userData.kitUniforms=g,i.onBeforeCompile=b=>{Object.assign(b.uniforms,g),b.fragmentShader=b.fragmentShader.replace("#include <common>",`#include <common>
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
		kitLum > kitNumFlip ? vec3( ${Sc.r.toFixed(4)}, ${Sc.g.toFixed(4)}, ${Sc.b.toFixed(4)} )
		: vec3( ${Ac.r.toFixed(4)}, ${Ac.g.toFixed(4)}, ${Ac.b.toFixed(4)} ), kitInk );
#endif`)},i.customProgramCacheKey=()=>"kit",i.needsUpdate=!0}const LA=.18;function DA(i,t){const e=Math.min(1,Math.max(0,t)),n=e*e*(3-2*e);for(const s of i){const r=s.userData.kitUniforms;r&&(r.kitFade.value=n)}return e}const fI=Object.freeze(Object.defineProperty({__proto__:null,ATLAS_BANDS:Am,KIT_FADE:LA,KIT_REGISTRY_TIMEOUT:gm,SHIRT_MAP_MEAN:Wr,SHORTS_CUT:ml,SKIN_BAND:gl,SKIN_TONES:Em,SOCKS_CUT:jr,bodyNarrows:Tm,findAnkles:pm,findHands:mm,findHead:fm,findTrunk:pl,kitNumberBoxes:ym,kitNumberTexture:Mm,kitSelectors:_l,kitSlugOf:Zl,kitTint:Yl,loadKitMasks:vm,loadPlayers:Ta,recolour:Sm,shirtSlugs:xm,skinNarrows:kr,squadVariants:bm,stepKitFade:DA,variantIndexOf:MA},Symbol.toStringTag,{value:"Module"})),ir=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function ai(i){const t=ir(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const o=t-s*(i.hold??0),a=(n*n-r*r)/(2*e),c=(n*n-s*s)/(2*e);if(a+c<=o){const h=o-a-c;return{D:t,t1:(n-r)/e,t2:h/n,t3:(n-s)/e,d1:a,d2:h,peak:n}}const u=Math.sqrt(e*o+(r*r+s*s)/2);return{D:t,t1:(u-r)/e,t2:0,t3:(u-s)/e,d1:(u*u-r*r)/(2*e),d2:0,peak:u}}function ce(i){const t=ai(i);return t.t1+t.t2+t.t3+(i.hold??0)}function Ec(i,t){const e=ai(i),n=i.accel,s=Math.min(i.startSpeed??0,i.cruise),r=i.endSpeed??0,o=Math.min(Math.max(t,0),e.D);if(o<=e.d1)return(Math.sqrt(s*s+2*n*o)-s)/n;if(o<=e.d1+e.d2)return e.t1+(o-e.d1)/e.peak;const a=e.D-r*(i.hold??0);return o>a&&r>0?e.t1+e.t2+e.t3+(o-a)/r:e.t1+e.t2+(e.peak-Math.sqrt(Math.max(0,e.peak*e.peak-2*n*(o-e.d1-e.d2))))/n}function Kn(i,t){const e=ai(i),n=e.t1+e.t2+e.t3,s=n+(i.hold??0),r=Math.min(Math.max(t-i.t0,0),s),o=i.accel;let a,c;if(r<=e.t1){const h=Math.min(i.startSpeed??0,i.cruise);a=h*r+.5*o*r*r,c=h+o*r}else if(r<=e.t1+e.t2)a=e.d1+e.peak*(r-e.t1),c=e.peak;else if(r<=n){const h=r-e.t1-e.t2;a=e.d1+e.d2+e.peak*h-.5*o*h*h,c=e.peak-o*h}else c=i.endSpeed??0,a=e.D-c*(s-r);const u=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*u,i.from[1]+(i.to[1]-i.from[1])*u],speed:c}}const FA=.25,Rm=.5,pa=.5,NA=1e-4,ld=1e-6;function Jl(i,t){return!!t.flow&&(i.endSpeed??0)>0&&i.endSpeed===t.startSpeed&&Math.abs(i.t0+ce(i)-t.t0)<ld&&ir(i.to,t.from)<ld}function bl(i,t){if(!Jl(i,t))return null;const e=ir(i.from,i.to),n=ir(t.from,t.to);if(e<=0||n<=0)return null;const s=[(i.to[0]-i.from[0])/e,(i.to[1]-i.from[1])/e],r=[(t.to[0]-t.from[0])/n,(t.to[1]-t.from[1])/n],o=Math.acos(Math.min(1,Math.max(-1,s[0]*r[0]+s[1]*r[1])));if(o<NA)return null;const a=Math.min(2*Rm/Math.sin(o/2),pa*e,pa*n);return{corner:[i.to[0],i.to[1]],dA:s,dB:r,L:a,turn:o}}function Cm(i,t){const e=-(1-t)*(1-t),n=t*t,{corner:s,dA:r,dB:o,L:a}=i;return{pos:[s[0]+a*(e*r[0]+n*o[0]),s[1]+a*(e*r[1]+n*o[1])],tan:[(1-t)*r[0]+t*o[0],(1-t)*r[1]+t*o[1]]}}function UA(i,t){const e=Math.sin(t);return e/(e+Math.sin(i-t))}function Ki(i,t){let e=-1;for(let a=0;a<i.length;a++)t>=i[a].t0&&(e=a);if(e<0)return null;const n=i[e],{pos:s,speed:r}=Kn(n,t),o=ir(n.from,n.to);if(o>0){const a=Math.hypot(s[0]-n.from[0],s[1]-n.from[1]);let c=null,u=0;const h=e+1<i.length?bl(n,i[e+1]):null;if(h&&a>o-h.L)c=h,u=(a-(o-h.L))/(2*h.L);else{const l=e>0?bl(i[e-1],n):null;l&&a<l.L&&(c=l,u=(l.L+a)/(2*l.L))}if(c){const{pos:l,tan:d}=Cm(c,u);return{pos:l,speed:r*Math.hypot(d[0],d[1]),vel:[r*d[0],r*d[1]]}}}return t>n.t0+ce(n)||o<=0?{pos:s,speed:r,vel:[0,0]}:{pos:s,speed:r,vel:[(n.to[0]-n.from[0])/o*r,(n.to[1]-n.from[1])/o*r]}}function ud(i,t){var e;return((e=Ki(i,t))==null?void 0:e.vel)??[0,0]}function OA(i,t,e=FA){const n=ud(i,t),s=ud(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const kA=2.5;function BA(i,t){let e=0;for(const n of i)t>=n.t0&&(e=ai(n).peak);return Math.min(1,e/kA)}const GA=.035,zA=.1,hd=.4,HA=1;function VA(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||ir(s.from,s.to)<HA)continue;const r=s.t0+ce(s)-zA,o=(t-r)/hd;o<=0||o>=1||i.some(a=>a.t0>s.t0&&a.t0<=r+hd)||(e=Math.max(e,GA*.5*(1-Math.cos(2*Math.PI*o))))}return e}function Le(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function WA(i,t=0){return i-t}function wa(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function jA(i,t=58*Math.PI/180,e=.85){const n=wa(i);return Math.min(t,Math.max(-t,n))*e}const XA=.3;function qA(i,t,e){return e>0?i+(t-i)*(1-Math.pow(1-XA,e*60)):i}const KA=1.2,Tc=180*Math.PI/180,wc=120*Math.PI/180,dd=70*Math.PI/180;function Ql(i){return i<=0?Tc:i<=2.3?Tc+(wc-Tc)*i/2.3:i>=5.48?dd:wc+(dd-wc)*(i-2.3)/(5.48-2.3)}const $A=.12,fd=15*Math.PI/180;function YA(i){return Math.max(-fd,Math.min(fd,i*$A))}const ZA=.001;function Ai(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=ZA}function JA(i,t,e,n){return e||n||!Ai(i,t)?null:Le(i,t)}function pd(i,t,e,n=Math.PI*2){const s=t-i,r=wa(s),o=r===Math.PI&&s<0?-Math.PI:r,a=n*e;return Math.abs(o)<=a?i+o:i+Math.sign(o)*a}const QA=2.3,Fr=1.1,tE=1.15,md=.6,gd=1.2,sa=.88,eE=1-sa,nE=.15,Fo=.28;function Yi(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?tE:QA),o=i.fromHeight??0,a=i.toHeight??(n==="shot"?md:0),c=o*(1-e)+a*e;let u;if(n==="clipped"){const h=i.loft??gd;u=(e<sa?h*Math.sin(Math.PI*e/sa):nE*h*Math.sin(Math.PI*(e-sa)/eE))+c}else if(n==="lofted")u=(i.loft??gd)*Math.sin(Math.PI*e)+c;else if(n==="shot")u=c;else if(n==="headed"){const h=i.loft??0;u=e<=Fo?o+(h-o)*Math.sin(Math.PI/2*(e/Fo)):a+(h-a)*Math.cos(Math.PI/2*((e-Fo)/(1-Fo)))}else n==="drop"?u=(i.fromHeight??md)*(1-e*e):u=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:u,done:e>=1}}const _d=new WeakMap;function iE(i){const t=_d.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,Yi(i,i.t0+i.duration*n/32).height);return _d.set(i,e),e}function Im(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=Yi(i,n),r=Yi(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}function Pm(i,t){const e=i.path;if(t<=e[0].t)return[...e[0].at];for(let n=1;n<e.length;n++)if(t<=e[n].t){const s=e[n-1],r=e[n],o=(t-s.t)/(r.t-s.t),a=o*o*(3-2*o);return[s.at[0]+(r.at[0]-s.at[0])*a,s.at[1]+(r.at[1]-s.at[1])*a]}return[...e[e.length-1].at]}const bd=3,En=2.52,Pn=4,Gs=.8,No=1,Mi=.3,wr=.6,vn=.15,sE=.5,ii=.45,Lm=.4,Dm=.7,xd=Math.PI/12,zs=4,rE=.6,vd=.4,oE=.3,aE=.15,cE=.4,lE=.35,Xr=.3,uE=Math.PI/4,hE=.25,dE={left:"gk_dive_a",right:"gk_dive_b"},Fm=4,fE=.12,pE=.25,mE=.35;function yd(i){return Math.min(pE,Math.max(fE,i*mE))}const gE=1.3,_E=.15;function Md(i,t,e){const n=i-_E,s=i+t-n,r=Math.min(gE,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const bE=1.8,Sd=.3,xE=.7,vE=.9,yE=2.5,gn={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},ME={throw:{id:"throw_in_a",duration:2.767,contact:1.45,release:1.47},roll:gn.roll},Uo={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},SE=.8;function AE(i,t,e,n=Ra){const s=Fm*i,r=Math.sqrt(Math.max(0,s*s-e*e));return Math.max(0,r-(n-zm)*t)}const EE=3;function TE(i,t,e){if(t<=0)return null;const n=Math.min(EE,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Vn=1,Oo=.25,Rc=.5,Ad=.8,wE=.4,Nm=3,RE=.6,CE=2.3,Ed=.9,Hs=.3,Td=.4,IE=12,PE=8,LE=3,DE=.25;function wd(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(xl,r/PE),style:"ground",...t?{fromHeight:t}:{}};const o=Math.max(DE*r,LE)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(xl,r/IE),style:"lofted",loft:Math.max(.1,o-t/2),...t?{fromHeight:t}:{}}}const FE=.6,xl=.2;function NE(i,t,e){const n=FE*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(xl,e/n)}const UE=16,OE=12,Cc=2,kE=8,BE=.1,GE=2.44;function ds(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function Um(i,t,e){const n=ds(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,o=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(o*o*(3-2*o))}const Ic=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],ko={id:"pass_a",duration:.567,contact:.167,reach:.89},Rd="jog_back_a",Rr=.5,zE=.5,HE=.3,VE=.9,Cd=.5,WE=.2,Id=.8,Pc=.5,jE=1.6,Bo={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},Pd=3,XE=.1,Go=["walk","jog","run"],ra=.5,qE=1.5*ra,KE=.42*Math.SQRT1_2,$E=12,YE=.15;function ZE(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=xs(n,Ra)*t;n.facing==="e"||n.facing==="w"?e.push([n.at[0],n.at[1]-s],[n.at[0],n.at[1]+s]):e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function Ld(i,t,e){const n=a=>t.reduce((c,u)=>Math.min(c,Math.hypot(a[0]-u[0],a[1]-u[1])),1/0);let s=[...i],r=s,o=n(s);for(let a=0;a<8;a++){let c=null,u=0;for(const p of t){const g=Math.hypot(s[0]-p[0],s[1]-p[1]);e-g>u+1e-9&&(u=e-g,c=p)}if(!c)return s;const h=[s[0]-c[0],s[1]-c[1]],l=Math.hypot(h[0],h[1])>1e-6?Ye(h):[1,0];s=[c[0]+e*l[0],c[1]+e*l[1]];const d=n(s);d>o+1e-9&&(r=s,o=d)}return r}function Dd(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Cr(i,t,e){let n=null;for(const r of i)r.t0<=e&&(!n||r.t0>=n.t0)&&(n=r);if(!n)return{at:[...t],moving:!1,restT:e};const s=n.t0+n.duration;return{at:[...n.to],moving:e<s,restT:s}}const JE=.2;function Fd(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(t[0]+o*n-i[0],t[1]+o*s-i[1])}function Nd(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?Ye([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Fe+XE?null:[t[0]-Fe*s[0],t[1]-Fe*s[1]],o=e?Ye([e[0]-t[0],e[1]-t[1]]):s,a=Math.min(Math.max(Fe,Lm),Dm);return{stepTo:r,set:[t[0]+a*o[0],t[1]+a*o[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function QE(i){return i<15?"roll":i<30?"throw":"kick"}function Om(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,o=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(o[0]-i[0],o[1]-i[1]),at:o}}function t1(i,t,e,n,s){const{reach:r,at:o}=Om(i,e,n);if(r>Nm*s)return null;const a=Ye([e[0]-i[0],e[1]-i[1]]);if(r<=RE*s)return{kind:"catch",clip:gn.catch.id,clipDuration:gn.catch.duration,contactOffset:gn.catch.contact,contact:[i[0]+Fe*a[0],i[1]+Fe*a[1]],travelTo:null};const c=Vm(i,t,n),u=gn.dive[c],h=Ye([o[0]-i[0],o[1]-i[1]]),l=Math.min(CE*s,Math.max(0,r-u.reach*s));return{kind:"dive",clip:u.id,clipDuration:u.duration,contactOffset:u.contact,contact:o,side:c,travelTo:[i[0]+l*h[0],i[1]+l*h[1]]}}function e1(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],o=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,a=[t[0]+o*s[0],t[1]+o*s[1]];let c=[i[0]-a[0],i[1]-a[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const u=Ye(c);return[a[0]+Sd*n*u[0],a[1]+Sd*n*u[1]]}function km(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function Bm(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let o=1/0;for(const a of t??[])a.t0>=r.t0&&a.t0<o&&(o=a.t0);n<o&&(s=km(r,n))}return s}const n1=[{id:"header_a",duration:1.9,contact:1}],i1=1.57,Ud=.1,Od=.6,Lc=2,zo=.02,Dc=.6,s1=2.5,r1=.22,o1=3,a1=6.5;function Fc(i,t){return Math.min(Math.max(r1*i,o1),a1)*t}const c1=10,l1=1.7;function u1(i,t,e,n){const s=e??[t[0],t[1]],r=Ye([s[0]-i[0],s[1]-i[1]]),o=[i[0]+Ud*n*r[0],i[1]+Ud*n*r[1]],a=n1[0];return{contact:o,height:i1*n,clip:a,set:[i[0]+Fe*r[0],i[1]+Fe*r[1]],faceAt:s}}const kd=.4,h1=.3,d1=18,f1=10,p1=.45,m1=.8,oa={id:"strike_jog_a",contact:.4},g1=1,_1={strike_jog_a:{loop:!1,category:"shoot",ballContact:oa.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function Gm(i){var t;for(const[e,n]of Object.entries(_1))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Bd=.15,b1=.2,Ra=3.35,zm=.5;function x1(i,t,e,n,s=1){let r=null,o=1/0;for(const g of e){const b=Math.hypot(g.at[0]-t[0],g.at[1]-t[1]);b<o&&(o=b,r=g)}if(!r||o>r.halfW*s+1)return[...t];const a=(r.halfW-zm)*s,c=r.at,u=r.sideways?[[c[0],c[1]-a],[c[0],c[1]+a]]:[[c[0]-a,c[1]],[c[0]+a,c[1]]];if(n){const g=Le(i,c),b=m=>(m[0]-i[0])*Math.cos(g)-(m[1]-i[1])*Math.sin(g);return u.sort((m,f)=>b(f)-b(m)),n==="left"?u[0]:u[1]}const h=Math.hypot(u[0][0]-i[0],u[0][1]-i[1]),l=Math.hypot(u[1][0]-i[0],u[1][1]-i[1]);if(Math.abs(h-l)>1e-6)return h>l?u[0]:u[1];const d=Math.hypot(u[0][0]-t[0],u[0][1]-t[1]),p=Math.hypot(u[1][0]-t[0],u[1][1]-t[1]);return d<p-1e-6?u[0]:u[1]}function Gd(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const Hm=.35;let Fe=Hm;function zd(i){Fe=i}function v1(){return Fe/Hm}function Wn(i,t){return[i[0]+Fe*Math.sin(t),i[1]+Fe*Math.cos(t)]}function Nc(i,t,e){const n=Le(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function Vm(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function Ye(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Hd(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function y1(i,t,e){const n=Ye([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=Ye([e[0]-i[0],e[1]-i[1]]);const p=n[0]*s[1]-n[1]*s[0];r=Math.abs(p)<1e-6?1:Math.sign(p)}else r=1,s=Hd([-n[0],-n[1]],-r*xd);const o=Hd(n,r*xd),a=[i[0]+Fe*o[0],i[1]+Fe*o[1]],c=[i[0]+Fe*s[0],i[1]+Fe*s[1]],u=[c[0]-a[0],c[1]-a[1]],h=Math.hypot(u[0],u[1]),l=h>1e-6?[u[0]/h,u[1]/h]:s,d=Math.min(Math.max(h,Lm),Dm);return{contact:a,set:[a[0]+d*l[0],a[1]+d*l[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const M1=.5,S1=1.4,Vd={walk:.8,jog:1.2,run:2.2},A1=.25,E1=.7,T1=.3,w1=2,Ir=.4,R1=10,C1=8,I1=2.5,Wd=6,P1=2,jd=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],Xd=1.4;function qd(i,t,e){const n=i.t0+ce(i),s=Uc(i,t);let r=0,o=Math.max(n-t,.001);if(Uc(i,t+o)-s<=e)return o;for(let a=0;a<48;a++){const c=(r+o)/2;Uc(i,t+c)-s>=e?o=c:r=c}return Math.max(o,.001)}function Uc(i,t){const e=Kn(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function L1(i,t,e,n,s,r={}){const o=ce(i);if(o<=0)return{flights:[],touches:[],restEnd:i.t0};const a=Ye([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Le(i.from,i.to),u=[Math.cos(c),-Math.sin(c)],h=C=>(C[0]-i.from[0])*a[0]+(C[1]-i.from[1])*a[1],l=i.t0+o,d=h(e),p=v1(),g=(r.others??[]).filter(C=>Math.abs((C[0]-i.from[0])*Math.cos(c)-(C[1]-i.from[1])*Math.sin(c))<=P1).map(C=>h(C)),b=E1*p,m=A1*p,f=C=>h(Kn(i,C).pos),v=[],M=[];let y=i.t0,E=[...t];const w=Math.ceil(ai(i).D/(.5*Math.min(n,Ir*3)))+8;for(let C=0;;C++){M.push(y);const P=h(E),A=d-P,S=r.turnOut?Ir:n,L=Ir*(1+Xd),B=C===0&&!!r.turnIn||!!r.turnOut&&A<=L,z=B?Fe:b;if(A<=Xd*S||C===w-1||d-(f(y)+z)<.05){const W=Math.hypot(e[0]-E[0],e[1]-E[1]);let Se=y;if(W>1e-6){const ie=Math.max(Kn(i,y).speed,M1*i.cruise),te=Math.min(2*W/(ie+Fr*(W/ie)/2),Math.max(l-y,.2));v.push({from:E,to:[...e],t0:y,duration:te,style:"push",endFrac:0}),Se=y+te}return Se<l&&v.push({from:[...e],to:[...e],t0:Se,duration:l-Se,style:"ground"}),{flights:v,touches:M,restEnd:Math.max(Se,l)}}let X=B?Ir:n;if(!B&&A>R1){let W=A;for(const Se of g)Se>P&&(W=Math.min(W,Se-P));X*=Math.min(Math.max(W/C1,1),I1)}const V=X;X*=1+jd[C%jd.length],!B&&r.turnOut&&A-X<L&&(X=Math.max(A-L,Ir));const O=Math.min(X,S1*i.cruise*i.cruise/Fr),H=qd(i,y,O),G=Math.max(i.cruise*H-O,0),Q=Math.min(z,P-f(y)+G),Y=f(y)+Q,ut=Math.max(P,Y),St=V>w1?s:s*(C%2?-1:1),Ct=Math.min(m,T1*O),at=(E[0]-i.from[0])*u[0]+(E[1]-i.from[1])*u[1],_t=Math.abs(St*Ct-at),ct=Math.sqrt(Math.max(Wd*Wd-_t*_t,0)),J=Math.min(ut+O,P+ct,d),vt=qd(i,y,J-Y),Tt=(J-P)/vt,Nt=Tt+Fr*vt/2,ee=Tt-Fr*vt/2,Vt=[i.from[0]+a[0]*J+u[0]*St*Ct,i.from[1]+a[1]*J+u[1]*St*Ct],le={from:E,to:Vt,t0:y,duration:vt,style:"push",endFrac:Math.max(ee,0)/Nt};v.push(le),E=[...Vt],y+=vt}}function oi(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Ln(i,t,e){const n=oi(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const tu=.3,Wm=[{gait:"run_slow",clip:"run_slow_a"},{gait:"run_b",clip:"run_b"}];function jm(i){const t=cl.filter(n=>{var s;return(s=i.groups[n])==null?void 0:s.length}).map(n=>({gait:n,clipSpeed:i.clips[i.groups[n][0]].speed??En})).sort((n,s)=>n.clipSpeed-s.clipSpeed);return[...t.map((n,s)=>({...n,min:s===0?tu:Math.sqrt(t[s-1].clipSpeed*n.clipSpeed)})),...Wm.filter(n=>{var s;return(s=i.clips[n.clip])==null?void 0:s.speed}).map(n=>({gait:n.gait,clipSpeed:i.clips[n.clip].speed,min:1/0}))].sort((n,s)=>n.clipSpeed-s.clipSpeed)}function aa(i,t,e,n){const s=i.groups[t];return s!=null&&s.length?Ln(s,e,n):Wm.find(r=>r.gait===t).clip}function Ca(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function D1(i,t,e=!0){const n=ai(i),s=n.t1+n.t2+n.t3,r=s+(i.hold??0);if(r<=0||!t.length)return[];const o=i.endSpeed??0,a=i.startSpeed??0,c=new Set([0,r]);for(const l of t)l.min>n.peak||(l.min>a&&c.add((l.min-a)/i.accel),l.min>o&&c.add(s-(l.min-o)/i.accel));const u=[...c].sort((l,d)=>l-d),h=[];for(let l=0;l+1<u.length;l++){if(u[l+1]-u[l]<1e-9)continue;const d=Ca(t,Kn(i,i.t0+(u[l]+u[l+1])/2).speed);if(!d)continue;const p=h[h.length-1];p&&p.gait===d.gait&&Math.abs(p.t1-(i.t0+u[l]))<1e-9?p.t1=i.t0+u[l+1]:h.push({gait:d.gait,t0:i.t0+u[l],t1:i.t0+u[l+1]})}return e?Xm(h):h}const F1=.3;function Xm(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=F1;for(let a=0;a<t.length;a++){const c=t[a].t1-t[a].t0;c<s-1e-9&&(s=c,n=a)}if(n<0)break;const r=t[n-1],o=t[n+1];o&&(!r||o.t1-o.t0>r.t1-r.t0)?o.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let a=0;a+1<t.length;)t[a].gait===t[a+1].gait?(t[a].t1=t[a+1].t1,t.splice(a+1,1)):a++}return t}const Ia=.85,Ti=1.15,Kd=.5;function qm(i){return Kd+(Ia-Kd)*Math.min(1,Math.max(0,i))}function N1(i,t){const e=i/t;return e>Ti?Ti:Math.max(qm(e),e)}function U1(i,t){return Math.min(Ti,Math.max(Ia,i/t))}function O1(i,t,e){const n=i.findIndex(h=>h.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=Ia&&r<=Ti)return{timeScale:r,partner:null,weight:0};const o=r>Ti?1:-1;let a;for(let h=n+o;h>=0&&h<i.length;h+=o)(!a||Math.abs(i[h].clipSpeed-t)<Math.abs(a.clipSpeed-t))&&(a=i[h]);if(!a)return{timeScale:r>Ti?Ti:Math.max(qm(r),r),partner:null,weight:0};const c=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),u=(1-c)*s.clipSpeed+c*a.clipSpeed;return{timeScale:U1(t,u),partner:a.gait,weight:c}}const k1=new Set(["pass","shoot","receive","header","defensive"]),ma=new Set(["turn","transition"]),Ri=.15,Km=.1,$m=.3,B1=.45,G1=.2,z1=.12,H1=.6;function eu(i,t){var e;return k1.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function Ym(i,t,e){var r,o;if(eu(i,t))return Km;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(o=i.clips[e])==null?void 0:o.category:void 0;return ma.has(n??"")?Ri:n==="idle"?s==="idle"?H1:s==="locomotion"?z1:_a:n==="locomotion"&&s==="locomotion"?G1:ma.has(s??"")?Ri:_a}function Zm(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?B1:ma.has(e??"")?Ri:eu(i,t)?$m:_a}function V1(i,t,e){var n;return eu(i,t)||ma.has(((n=i.clips[t])==null?void 0:n.category)??"")?Zm(i,t):Ym(i,e,t)}function W1(i,t,e){var r,o;const n=(r=i.clips[t])==null?void 0:r.category,s=(o=i.clips[e])==null?void 0:o.category;return n==="turn"||s==="turn"?!0:n==="locomotion"?s==="idle"||e===ga:t===ga&&s==="idle"}const qe=Math.PI/180,Ei={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*qe,t50:.567,t90:.8,peak:159*qe,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*qe,t50:.533,t90:.8,peak:213*qe,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*qe,t50:.4,t90:.6,peak:366*qe,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*qe,t50:.767,t90:1.033,peak:192*qe,standing:!1}};function Oc(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[o,a]=e[n+1];if(t<=o)return o-s>1e-9?r+(a-r)*(t-s)/(o-s):a}return 1}function Jm(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+Ri&&(n=s);return n}function j1(i,t,e,n){const s=Jm(i,t,e);if(!s)return null;const r=Ei[s.clip],o=s.end-s.t0,a=s.offset+Math.min(e-s.t0,o),c=Oc(r,s.offset),u=Oc(r,s.offset+o),h=Oc(r,a),l=u-c>1e-9?(h-c)/(u-c):1,d=n??s.from,p=n===void 0?s.to-s.from:si(n,s.to),g=Math.min(1,(e-s.t0)/Ri),b=e<=s.end?1:Math.max(0,1-(e-s.end)/Ri),m=Math.max(0,Math.min(g,b));return{heading:d+p*l,clipYaw:r.yaw*h*m}}function X1(i,t){return i.peak+Ql(t)}function q1(i,t,e){const n=Math.abs(i);return n<vl?null:n>aT&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const vl=45*qe,$d=60*qe,K1=.3,$1=.5,Y1=.7,Z1=130*qe,ga="run_stop_a",Yd=.75,J1=.167;function Q1(i,t){var s;if((i.endSpeed??0)>0)return null;const e=ai(i),n=(s=Ca(t,e.peak))==null?void 0:s.gait;return n!=="run"&&n!=="sprint"||e.t3<Yd-J1?null:i.t0+e.t1+e.t2+e.t3-Yd}const Ho=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],Zd={left:"strafe_l_a",right:"strafe_r_a"},tT=3.2,eT=3.2,Qm=60*qe,nT=120*qe,iT=100*qe,Jd=[{id:"jog_back_diag_a",axis:225.5*qe,speed:2.04},{id:"jog_back_diag_b",axis:135.5*qe,speed:2.27}],sT=5;function rT(i,t){if(Math.abs(i)>Qm)return null;const e=i>=0?Jd[0]:Jd[1];return t<=e.speed*Ti?{id:e.id,axis:e.axis}:null}function oT(i,t){const e=Math.abs(i);return e<=Qm?t>tT?null:t>(Ho[0].speed+Ho[1].speed)/2?Ho[1].id:Ho[0].id:e>nT||t>eT?null:i>0?Zd.right:Zd.left}const aT=120*qe;function si(i,t){return wa(t-i)}const _a=.25;function qs(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?b1:0,s=t.contact??e.ballContact??0,r=t.offset??0,o=t.timeScale??1,a=Zm(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/o-(e.loop?0:a)+n,(s-r)/o)}function cT(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function tg(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<qs(t,r)&&(s=r);return s}const lT=.15;function uT(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const hT=.1,Qd=2,dT=6,fT=.4;function ba(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function Vo(i,t){return ba(oi(i),20973)*t}function Wo(i){return 1+hT*(2*ba(oi(i),10196)-1)}function eg(i,t){return(Qd+ba(oi(i),7047)*(dT-Qd))*(1+fT*(2*ba(oi(i)+t*2654435761,28490)-1))}function pT(i,t){let e=0;for(let n=0;n<64;n++)if(e+=eg(i,n),t<e)return n;return 64}function tf(i,t,e){const n=i.length;if(n<=1)return i[0];const s=oi(t);let r=s%n;for(let o=1;o<=e;o++){const a=s+o*2654435761>>>0;r=(r+1+a%(n-1))%n}return i[r]}function mT(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const gT=new Set(["receive_a","pass_a","pass_b"]),ng=.8,_T=.7;function ig(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function nu(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+ce(n)?0:Kn(n,t).speed);return e}function bT(i,t,e){for(const n of i)gT.has(n.clip)&&nu(t[n.player],ig(e,n))>=ng&&(n.additive=!0)}const xT=1,vT=2,yT=.025,ef=.2,MT=.4,nf="idle_transition";function ST(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,o=s.t1-s.t0,a=Math.min(1,r/ef,(o-r)/ef);a<=0||(n=Math.max(n,yT*a*.5*(1-Math.cos(2*Math.PI*vT*r))))}return n}const sf="idle_b",AT=.5,ET=.3,TT=.15;function wT(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,AT*Math.min(1,(e-s.t0)/ET)*Math.min(1,(s.t1-e)/TT)));return n}function RT(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const o=ig(e,r)-xT,a=r.t0;if(a-o<MT||o<0)continue;let c=!1;for(let u=o;u<=a;u+=.1){if(nu(t[r.player],u)>tu){c=!0;break}const h=tg(i,e,r.player,u);if(h&&h!==r){c=!0;break}}c||(n.push({player:r.player,t0:o,t1:a}),e.clips[nf]&&s.push({player:r.player,clip:nf,t0:o,loopUntil:a}))}return i.push(...s),i.sort((r,o)=>r.t0-o.t0),n}const CT=.6,sg=.5,rg=.6,Br=2*sg/rg,xa=Br/rg,IT=sg-Xr;function PT(i){return(Br-Math.sqrt(Math.max(0,Br*Br-2*xa*i)))/xa}function LT(){return Br-xa*PT(IT)}const DT=.15,FT=.05;function NT(i,t,e){const n=Le(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(hE,s/2):Xr,o=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+uE;return[i[0]+r*Math.sin(o),i[1]+r*Math.cos(o)]}function UT(i,t,e,n,s,r){const o=Math.min(Xr,e*(n-Mi)/2);for(let a=o;a>=DT-1e-9;a-=FT){const c=[i[0]+a*Math.sin(t),i[1]+a*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*a),startSpeed:e}}return null}const jo=.05,yl=.3,OT=3,kT=1.5,BT=100*qe,rf=1.3,of=.5,GT=.5,af=.5;function zT(i){return i<=30*qe?1:i<=60*qe?.75:.5}function HT(i,t){if(t<=1e-9)return 0;const e=i.endSpeed??0,n=ai({...i,hold:0});if(e>=i.cruise-1e-9||n.peak<i.cruise-1e-9)return null;const s=t/(1-e/i.cruise);return e*s<=n.d2+1e-9?s:null}const VT=10*qe,cf=50;function WT(i,t,e=1){var Ft,Qt,ke,We,ve,ln,fn,Li,Zn,wn,ui,Di,Fi,hi,Zi,Jn,Ni,Ui,Rt;mT(t),Gm(t);const n=fa(i),s=jm(t),r={};i.players.forEach(R=>r[R.id]=[...R.start]);const o={},a=[],c=[],u=[],h=[],l=[],d=[],p=[],g=[],b={},m={},f=new Map,v=new Map,M=new Set,y={},E={},w={},C={};function P(R){u.push(R),y[R.player]=R.t0,Ai(r[R.player],R.at)&&(A[R.player]=Le(r[R.player],R.at))}const A={},S={},L={};function B(R){const x=b[R];let nt=Math.max(x?x.t0+ce(x):0,S[R]??0,0);for(const K of c)K.player===R&&t.clips[K.clip]&&(nt=Math.max(nt,qs(t,K)));return nt}function z(R,x,nt,K){if(D.has(R)||!Ai(r[R],nt))return null;const _=A[R]??0,I=si(_,Le(r[R],nt));if(Math.abs(I)<$d)return null;const F=Ei[I>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[F.id])return null;const U=X(F),N=B(R),j=Math.max(N,Math.min(x,K-U));return j+U>K+1e-9?null:(O(R,F,j,0,_,_+I),j)}function X(R,x=0){return R.duration-x-Ri}function V(R,x){const nt=Math.abs(x)>Z1,K=R==="run"?Ei.turn_180_a:null,_=nt&&K&&t.clips[K.id]?K:Ei.turn_to_run_a,I=_.id===Ei.turn_to_run_a.id?$1:0,F=_.id===Ei.turn_to_run_a.id?Y1:X(_,I);return{c:_,offset:I,play:F}}function O(R,x,nt,K,_,I,F){const U=F??X(x,K),N={player:R,clip:x.id,t0:nt,offset:K,end:nt+U,from:_,to:I},j={player:R,clip:x.id,t0:nt,...K?{offset:K}:{},...F!==void 0?{loopUntil:nt+U}:{}};p.push(N),c.push(j),L[R]={span:N,cue:j},S[R]=N.end+Ri}function H(R,x){const nt=L[R];return!nt||nt.span.end<=x+1e-9?!0:x-nt.span.t0<K1?!1:(nt.span.end=x,nt.cue.loopUntil=x,S[R]=x+Ri,!0)}function G(R,x){if(H(R,x))return;const nt=L[R];p.splice(p.indexOf(nt.span),1);const K=c.indexOf(nt.cue);K>=0&&c.splice(K,1),delete L[R],S[R]=0}function Q(R,x=1/0){const nt=z(R.player,R.t0,R.at,x);P(nt===null?R:{...R,t0:nt})}const Y=[];function ut(R){var x;for(let nt=0;nt<Y.length;nt++){const K=Y[nt];K.afterT>=R||(Y.splice(nt--,1),(o[x=K.player]??(o[x]=[])).push(K.move),b[K.player]=K.move,m[K.player]=at(K.move,K.player),P({player:K.player,at:K.faceBall,t0:K.move.t0}),P({player:K.player,at:K.faceSettle,t0:K.arrival}),r[K.player]=[...K.move.to])}}function St(R,x,nt){let K=[...r[R]],_=[...r[R]];const I=b[R];let F=Math.max(I?I.t0+ce(I):0,E[R]??0),U=-1/0,N=null;for(let j=x+1;j<Et.length;j++){const et=Et[j];if(et.t>=nt)break;if((et.type==="pass"?et.from:et.player)!==R)continue;if(et.type!=="move"){N=`${et.type} at t=${et.t}`;break}const Z=t.groups[et.gait??"jog"]??t.groups.jog,tt=t.clips[Ln(Z,R,et.t)].speed??En,lt={from:K,to:[...et.to],t0:et.t,cruise:tt,accel:Pn},yt=et.t+ce(lt);F=Math.max(F,yt),K=[...et.to],_=yt>nt?Kn(lt,nt).pos:[...et.to],U=et.t}return{expected:K,atArrival:_,busyUntil:F,afterT:U,blocked:N}}function Ct(R,x,nt=R[0].t0){const K=[];for(const F of R)for(const U of D1(F,s,!1)){const N=K[K.length-1];N&&N.gait===U.gait&&Math.abs(N.t1-U.t0)<1e-9?N.t1=U.t1:K.push(U)}const _=t.clips[ga]?Q1(R[R.length-1],s):null,I=Xm(K).filter(F=>_===null||F.t0<_-1e-9).map(F=>({player:x,clip:aa(t,F.gait,x,nt),t0:F.t0,loopUntil:_===null?F.t1:Math.min(F.t1,_)}));return _!==null&&I.push({player:x,clip:ga,t0:_}),I}function at(R,x){const nt=Ct([R],x),K=L[x];if(K){let _=1/0;for(const I of nt)I.t0>K.span.t0+1e-9&&I.t0<K.span.end-1e-9&&(_=Math.min(_,I.t0));_<1/0&&G(x,_)}return c.push(...nt),f.set(R,nt),nt}function _t(R,x){return R.filter(nt=>{if(nt.t0>=x-1e-9)return!0;if((nt.loopUntil??1/0)<=x+1e-9){const K=c.indexOf(nt);return K>=0&&c.splice(K,1),!1}return nt.t0=x,!0})}function ct(R,x,nt="event"){(ot[R]??0)>x&&console.warn(`[engine3d] ${R} is on the ground until t=${ot[R].toFixed(2)}s but has a ${nt} at t=${x} — schedule it later`);const K=b[R];if(!K)return;const _=K.t0+ce(K);if(x<_){const I=`buildSchedule: player ${R} has an event at t=${x} while still moving from a move started at t=${K.t0} (in flight until t=${_.toFixed(3)})`;if(xt.has(R))console.warn(`[engine3d] ${I} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(I)}}function J(R){let x=null,nt=-1/0;for(const K of g)K.t<=R&&K.t>=nt&&(x=K.player,nt=K.t);return x}const vt=[];function Tt(R,x,nt){const K=i.balls??[],_=Z=>Z.carrier&&r[Z.carrier]?Wn(r[Z.carrier],A[Z.carrier]??0):Pm(Z,x);let I=-1,F=1/0;const U=r[R];if(K.forEach((Z,tt)=>{if(vt.some(dt=>dt.take===tt))return;const lt=_(Z),yt=Math.hypot(lt[0]-U[0],lt[1]-U[1]);yt<F&&(F=yt,I=tt)}),I<0||F>bd){const Z=K.length?I<0?"every spare has already been used":`the nearest is ${F.toFixed(1)} m away (needs ${bd} m)`:"this drill has no balls[]";console.warn(`[engine3d] ${nt} by ${R} at t=${x.toFixed(2)}s is flagged newBall, but there is no spare ball to take: ${Z} — played with the ball already in play`);return}const N=J(x),j=N?ds(l,N,x):null,et=j?[...j.carry]:N&&r[N]?Wn(r[N],A[N]??0):Cr(a,n,x).at,ht=_(K[I]);vt.push({t:x,drop:et,take:I,at:ht}),g.push({t:x,player:R}),l.push({player:R,at:x,carry:ht}),E[R]=x}const Nt=Object.fromEntries(i.players.map(R=>[R.id,R.team]));function ee(R,x,nt,K,_,I){const F=J(K);if(!F||F===R||D.has(R)||Nt[R]==="coach"||Nt[F]===Nt[R])return null;const U=Z=>{if(!Ai(x,Z)||!Ai(x,nt))return null;const tt=Le(x,nt),lt=si(Le(Z,x),tt),yt=Math.hypot(Z[0]-x[0],Z[1]-x[1])<=sT?rT(lt,_):null;if(yt&&t.clips[yt.id]){const st=tt-yt.axis,rt=Math.hypot(Z[0]-x[0],Z[1]-x[1])||1;return{clip:yt.id,ball:[x[0]+rt*Math.sin(st),x[1]+rt*Math.cos(st)]}}const dt=oT(lt,_);return dt&&t.clips[dt]?{clip:dt,ball:Z}:null},N=U(r[F]?[...r[F]]:Cr(a,n,K).at),j=i.events.find(Z=>Z.type==="pass"&&Z.from===F&&Z.t>=K-1e-9&&Z.t<=K+I/2),et=(j==null?void 0:j.type)==="pass"&&r[j.to]?[...r[j.to]]:null,ht=N?N.ball:nt;return!et||!Ai(x,et)||!Ai(x,ht)||Math.abs(si(Le(x,ht),Le(x,et)))<=iT?N:U(et)}const Vt={};for(const R of i.events)R.type==="move"&&(Vt[Ft=R.player]??(Vt[Ft]=[])).push(R.t);function le(R,x,nt){for(const K of be){const _=K.id;if(!Ut.length||J(R)===_||!t.clips[Uo.left.id]||!t.clips[Uo.right.id])continue;const I=b[_],F=Math.max(R,q[_]??0,I?I.t0+ce(I):0);if(d.some(mt=>mt.player===_))continue;const U=Ut.reduce((mt,gt)=>Math.hypot(gt.at[0]-K.start[0],gt.at[1]-K.start[1])<Math.hypot(mt.at[0]-K.start[0],mt.at[1]-K.start[1])?gt:mt,Ut[0]),N=U.at,j=U.sideways?1:0,et=U.sideways?0:1,ht=AE(At,e,Math.abs(r[_][et]-N[et]),U.halfW),tt=N[j]+Math.min(ht,Math.max(-ht,(nt[j]-N[j])*SE))-r[_][j],lt=Le(N,[i.pitch.width/2,i.pitch.length/2]),yt=U.sideways?-Math.sin(lt):Math.cos(lt),dt=TE(tt,Uo[tt*yt>0?"left":"right"].dist*At,Math.sign(yt)||1);if(!dt)continue;const st=Uo[dt.side],rt=Math.min(x,i.duration)-dt.steps*st.duration;if(rt<F-1e-9||(Vt[_]??[]).some(mt=>mt>=rt-1e-9))continue;const pt=Math.sign(tt)*st.dist*At;for(let mt=0;mt<dt.steps;mt++){const gt=[...r[_]],kt=[...gt];kt[j]=gt[j]+pt;const jt=Dd(gt,kt,rt+mt*st.duration,st.duration);(o[_]??(o[_]=[])).push(jt),r[_]=[...jt.to],b[_]=jt}c.push({player:_,clip:st.id,t0:rt,loopUntil:rt+dt.steps*st.duration}),m[_]=[]}}function W(R,x){var I;const nt=(I=i.players.find(F=>F.id===R))==null?void 0:I.start;if(!nt||!Ut.length)return!1;let K=Ut[0].at,_=1/0;for(const F of Ut){const U=Math.hypot(F.at[0]-nt[0],F.at[1]-nt[1]);U<_&&(_=U,K=F.at)}return Math.hypot(x[0]-K[0],x[1]-K[1])<=$E*At}function Se(R,x){const nt=b[R];if(!nt||nt.endSpeed)return;const K=nt.t0+ce(nt);if(x-K>=No)return;nt.endSpeed=Gs;const _=nt.t0+ce(nt);for(const I of m[R]??[]){const F=c.indexOf(I);F>=0&&c.splice(F,1)}if(m[R]=at(nt,R),_>x-Mi){if(xt.has(R)){console.warn(`[engine3d] player ${R}'s move started at t=${nt.t0} still arrives at t=${_.toFixed(3)}, less than ${Mi}s before their action at t=${x} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${R}'s move started at t=${nt.t0} still arrives at t=${_.toFixed(3)} even flowing into their action at ${Gs} m/s, less than ${Mi}s before their action at t=${x} — move the event later or start the approach move earlier`)}}function ie(R,x,nt,K,_){const I=b[R],F=I?I.t0+ce(I):0;if(I&&(I.endSpeed!==void 0||x-F<No))return null;const U=NT(r[R],nt,_),N=t.groups.walk,j=N!=null&&N.length?t.clips[N[0]].speed??En:En,et={from:[...r[R]],to:U,t0:0,cruise:j,accel:Pn};let ht=x-K-ce(et);return ht<Math.max(F,E[R]??0)||!H(R,ht)?null:(et.t0=ht,(o[R]??(o[R]=[])).push(et),_&&M.add(et),b[R]=et,m[R]=at(et,R),r[R]=[...U],ht)}function te(R,x,nt){const K=Cr(a,n,x).at,_=Le(K,nt),I=[K[0]-Fe*Math.sin(_),K[1]-Fe*Math.cos(_)],F=Math.hypot(I[0]-r[R][0],I[1]-r[R][1]);if(F<BE){r[R]=[...I];return}const U=b[R],N=U?U.t0+ce(U):0,j=Math.max(N,E[R]??0,0);let et;for(let ht=F<Pd?0:1;ht<Go.length;ht++){const Z=t.groups[Go[ht]]??t.groups.jog,tt=t.clips[Ln(Z,R,x)].speed??En;if(et={from:[...r[R]],to:I,t0:0,cruise:tt,accel:Pn,endSpeed:Gs},et.t0=x-Mi-ce(et),et.t0>=j)break}et.t0<j&&(console.warn(`[engine3d] dead-ball run-up for ${R} at t=${x.toFixed(2)}s wants to start at t=${et.t0.toFixed(2)}s but he is not free until t=${j.toFixed(2)}s — he arrives late on the ball; schedule the strike later`),et.t0=j),H(R,et.t0),(o[R]??(o[R]=[])).push(et),b[R]=et,m[R]=at(et,R),r[R]=[...I]}function Dt(R,x,nt){const K=Cr(a,n,x);{const Z=Ld(K.at,de,qE*At);if(Math.hypot(Z[0]-K.at[0],Z[1]-K.at[1])>1e-6){const tt=a.filter(lt=>lt.t0<=x&&Math.hypot(lt.to[0]-K.at[0],lt.to[1]-K.at[1])<1e-9);if(tt.length){for(const lt of tt)Math.hypot(lt.from[0]-K.at[0],lt.from[1]-K.at[1])<1e-9&&(lt.from=[...Z]),lt.to=[...Z];K.at=Z}}}const _=J(x);_&&_!==R&&g.push({t:x,player:null});const I=K.moving?K.restT+JE:-1/0;let F=null;for(let Z=nt+1;Z<Et.length;Z++){const tt=$t[Z];if(!(!tt||tt.actor!==R)){tt.t-x<=zs+3&&(F=tt.target);break}}let U=Nd(r[R],K.at,F);if(U.stepTo){const Z=Ld(U.stepTo,de,KE*At),tt=[Z[0]-K.at[0],Z[1]-K.at[1]];if(Math.hypot(tt[0],tt[1])>1e-6){const lt=Ye(tt),yt=Fe+1,dt=Nd([K.at[0]+yt*lt[0],K.at[1]+yt*lt[1]],K.at,F);dt.stepTo&&wt(dt.stepTo)&&(U=dt)}}let N=1/0;for(let Z=nt+1;Z<Et.length;Z++){const tt=Et[Z];if((tt.type==="pass"?tt.from:tt.player)===R){N=tt.t;break}}let j=x;if(U.stepTo){const Z=Math.hypot(U.stepTo[0]-r[R][0],U.stepTo[1]-r[R][1]);let tt;for(let lt=Z<Pd?0:1;lt<Go.length;lt++){const yt=t.groups[Go[lt]]??t.groups.jog,dt=t.clips[Ln(yt,R,x)].speed??En;if(tt={from:[...r[R]],to:U.stepTo,t0:x,cruise:dt,accel:Pn,endSpeed:Gs},x+ce(tt)+ii+Mi<=N)break}if(I>x+ce(tt)){const lt=I-x,yt=Math.hypot(U.stepTo[0]-tt.from[0],U.stepTo[1]-tt.from[1]),dt=Pn*Pn*lt*lt-4*Pn*yt,st=dt>0?(Pn*lt-Math.sqrt(dt))/2:tt.cruise,rt=(t.clips[Ln(t.groups.walk,R,x)].speed??tu)*Ia;tt={...tt,cruise:Math.max(Math.min(st,tt.cruise),rt),endSpeed:0}}(o[R]??(o[R]=[])).push(tt),xt.set(R,x),b[R]=tt,m[R]=at(tt,R),j=x+ce(tt),r[R]=[...U.stepTo]}j=Math.max(j,I),P({player:R,at:[...K.at],t0:Math.max(x,y[R]??0),lock:[j-vn,j+vn]});const et=Z=>{for(const tt of m[R]??[]){const lt=c.indexOf(tt);tt.t0>=Z?lt>=0&&c.splice(lt,1):(tt.loopUntil??0)>Z&&(tt.loopUntil=Z)}};if(D.has(R)&&W(R,K.at)){const Z=gn.scoop[0],tt=j-Z.contact;return tt<x&&console.warn(`[engine3d] keeper ${R}'s scoop at t=${j.toFixed(2)}s wants to start at t=${tt.toFixed(2)}s, before his collect at t=${x.toFixed(2)}s — schedule the collect earlier`),et(Math.max(tt,0)),c.push({player:R,clip:Z.id,t0:Math.max(tt,0),contact:Z.contact}),P({player:R,at:[...U.faceAt],t0:j}),g.push({t:j,player:R}),l.push({player:R,at:j,carry:[...K.at],hand:{height:Vn*At,from:YE*At,rise:Ad,follow:!0}}),E[R]=j,q[R]=Math.max(tt,0)+Z.duration+Hs,j}const ht=Ln(t.groups.pass,R,j);return et(j-(t.clips[ht].ballContact??0)),c.push({player:R,clip:ht,t0:j-(t.clips[ht].ballContact??0)}),a.push({from:[...K.at],to:U.set,t0:j,duration:ii,style:"ground"}),P({player:R,at:[...U.faceAt],t0:j}),g.push({t:j,player:R}),l.push({player:R,at:j+ii,carry:U.set}),E[R]=j+ii,j+ii}const be=i.players.filter(R=>R.role==="keeper"),At=e,D=new Set(be.map(R=>R.id));i.players.forEach(R=>A[R.id]=R.role==="keeper"?Le(R.start,n):0);const T=((Qt=i.keeper)==null?void 0:Qt.outcome)==="save",q={},ot={},xt=new Map,it={},Lt={},Et=[...i.events].sort((R,x)=>R.t-x.t);if(i.ball&&!i.ball.static){const R=n,x=i.players.reduce((_,I)=>Math.hypot(I.start[0]-R[0],I.start[1]-R[1])<Math.hypot(_.start[0]-R[0],_.start[1]-R[1])?I:_,i.players[0]),nt=Et.find(_=>_.type!=="move"||_.player===(x==null?void 0:x.id)&&D.has(_.player)),K=nt?nt.type==="pass"?nt.from:nt.player:null;if(!((nt==null?void 0:nt.type)==="collect"||((nt==null?void 0:nt.type)==="pass"||(nt==null?void 0:nt.type)==="shoot")&&nt.deadBall))if(K&&D.has(K))g.push({t:0,player:K}),E[K]=0,(nt==null?void 0:nt.type)==="pass"&&!!nt.fromFeet||l.push({player:K,at:0,carry:[...n],hand:{height:Vn*At,follow:!0}});else{const _=i.players.filter(U=>U.role!=="keeper"),I=_.length?_:i.players,F=I.reduce((U,N)=>Math.hypot(N.start[0]-n[0],N.start[1]-n[1])<Math.hypot(r[U.id][0]-n[0],r[U.id][1]-n[1])?N:U,I[0]).id;g.push({t:0,player:F}),E[F]=0}}const Ut=(i.equipment??[]).filter(R=>R.type==="goal").map(R=>({at:R.at,halfW:xs(R,Ra),sideways:R.facing==="e"||R.facing==="w"})),de=ZE(i.equipment,e),wt=R=>R[0]>=0&&R[0]<=i.pitch.width&&R[1]>=0&&R[1]<=i.pitch.length,Gt=R=>de.every(x=>Math.hypot(x[0]-R[0],x[1]-R[1])>=ra*At),Xt={};i.players.forEach(R=>Xt[R.id]=[...R.start]);const $t=Et.map(R=>{if(R.type==="move")return Xt[R.player]=[...R.to],null;if(R.type==="dribble")return Xt[R.player]=[...R.to],{actor:R.player,target:[...R.to],t:R.t};if(R.type==="collect"||R.type==="tackle")return null;const x=R.type==="pass"?R.from:R.player;R.deadBall&&(Xt[x]=[...n]);const nt=R.type==="pass"?[...Xt[R.to]]:R.flightStyle==="ground"?[...R.at]:x1(Xt[R.player],R.at,Ut,R.corner,e);return{actor:x,target:nt,t:R.t}});for(let R=0;R<Et.length;R++){const x=Et[R];ut(x.t);const nt=x.type==="pass"?x.from:x.player;if(x.newBall&&Tt(nt,x.t,x.type),x.type!=="dribble"&&x.type!=="move"&&delete C[nt],x.type==="move"){ct(x.player,x.t,x.type);const _=D.has(x.player)&&(((We=(ke=ds(l,x.player,x.t))==null?void 0:ke.hand)==null?void 0:We.height)??0)>0;J(x.t)===x.player&&!_&&console.warn(`[engine3d] move event for ${x.player} at t=${x.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const I=t.groups[x.gait??"jog"]??t.groups.jog,F=t.clips[Ln(I,x.player,x.t)].speed??En,U=w[x.player],j={from:U&&x.t<U.t0?[...U.at]:[...r[x.player]],to:x.to,t0:x.t,cruise:F,accel:Pn},et=ee(x.player,j.from,x.to,x.t,F,ce(j)),ht=et?null:(()=>{const tt=Ca(s,F);if((tt==null?void 0:tt.gait)!=="run"&&(tt==null?void 0:tt.gait)!=="sprint"||!t.clips[Ei.turn_to_run_a.id]||D.has(x.player)||B(x.player)>x.t+1e-9||!Ai(j.from,x.to))return null;const lt=si(A[x.player]??0,Le(j.from,x.to));return Math.abs(lt)>=$d?{delta:lt,gait:tt.gait}:null})();(o[ve=x.player]??(o[ve]=[])).push(j),b[x.player]=j,m[x.player]=at(j,x.player);const Z={t0:x.t,face:null,r11:!!et,start:null};if(v.set(j,Z),et){for(const lt of m[x.player]??[]){const yt=c.indexOf(lt);yt>=0&&c.splice(yt,1)}const tt={player:x.player,clip:et.clip,t0:x.t,loopUntil:x.t+ce(j)};c.push(tt),m[x.player]=[tt],f.set(j,[tt]),Z.face={player:x.player,at:et.ball,t0:x.t,until:x.t+ce(j)},P(Z.face)}else{if(ht){const{c:tt,offset:lt,play:yt}=V(ht.gait,ht.delta),dt=A[x.player]??0;O(x.player,tt,x.t,lt,dt,dt+ht.delta,yt);const st=x.t+yt;Z.start={...L[x.player],end:st},m[x.player]=_t(m[x.player]??[],st),f.set(j,m[x.player])}Z.face={player:x.player,at:x.to,t0:x.t},P(Z.face)}r[x.player]=[...x.to]}else if(x.type==="dribble"){ct(x.player,x.t,x.type),J(x.t)!==x.player&&console.warn(`[engine3d] dribble event for ${x.player} at t=${x.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const _=x.gait??"jog",I=t.groups[_]??t.groups.jog,F=t.clips[Ln(I,x.player,x.t)].speed??En,U=Le(r[x.player],x.to),N=(((fn=(ln=ds(l,x.player,x.t))==null?void 0:ln.hand)==null?void 0:fn.height)??0)>0,j=N?Um(l,x.player,x.t):0,et=N?x.t+Td:x.t,ht={from:[...r[x.player]],to:[...x.to],t0:et,cruise:F,accel:Pn};let Z=null;for(let ne=R+1;ne<Et.length;ne++){const ae=$t[ne];if(!(!ae||ae.actor!==x.player)){Z={target:ae.target,t:ae.t};break}}const tt=et+ce(ht);let lt=null;for(let ne=R+1;ne<Et.length;ne++){const ae=Et[ne];if((ae.type==="pass"?ae.from:ae.player)===x.player){lt=ae;break}}let yt=null;if((lt==null?void 0:lt.type)==="dribble"&&lt.t-tt<=zs){const ne=si(U,Le(x.to,lt.to)),ae=q1(ne,_),ue=ae?Ei[ae]:null;if(ue&&t.clips[ue.id]){const bt=ue.standing?tt:et+ce({...ht,endSpeed:Gs});lt.t-bt>=X(ue)-1e-9&&(yt={c:ue,delta:ne})}}Z&&Z.t-tt<No&&!(yt!=null&&yt.c.standing)&&(ht.endSpeed=Gs),yt&&O(x.player,yt.c,lt.t-X(yt.c),0,U,U+yt.delta),(o[Li=x.player]??(o[Li]=[])).push(ht),b[x.player]=ht,m[x.player]=at(ht,x.player),P({player:x.player,at:[...x.to],t0:x.t});let dt=null;for(const ne of l)ne.player===x.player&&(!dt||ne.at>dt.at)&&(dt=ne);dt&&dt.at>x.t+1e-9&&console.warn(`[engine3d] dribble for ${x.player} at t=${x.t.toFixed(2)}s starts during their settle (ends t=${dt.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let st=dt?[...dt.carry]:Wn(r[x.player],U);N&&(st=Wn(r[x.player],U),l.push({player:x.player,at:x.t,carry:[...st],hand:{height:0,from:j,rise:Td,follow:!0}}),E[x.player]=x.t);const rt=Z&&Z.t-tt<=zs?Wn(x.to,Le(x.to,Z.target)):Wn(x.to,U),pt=oi(x.player)%2===0?1:-1;let mt=pt,gt=!1;for(let ne=R+1;ne<Et.length;ne++){const ae=Et[ne];if((ae.type==="pass"?ae.from:ae.player)===x.player){if(ae.type==="dribble"&&ae.t-tt<=zs){const bt=Ye([x.to[0]-ht.from[0],x.to[1]-ht.from[1]]),Zt=Ye([ae.to[0]-x.to[0],ae.to[1]-x.to[1]]),se=bt[0]*Zt[1]-bt[1]*Zt[0],Jt=se<0?1:-1;Math.abs(se)>.05&&Jt===-pt&&(mt=Jt),gt=Math.abs(si(Le(ht.from,x.to),Le(x.to,ae.to)))>vl}break}}const kt=C[x.player],jt=!!kt&&et-kt.end<=zs&&Math.abs(si(kt.h,U))>vl;C[x.player]={h:U,end:tt};const we=Object.entries(r).filter(([ne])=>ne!==x.player).map(([,ne])=>[...ne]),Ht=L1(ht,st,rt,Vd[_]??Vd.jog,mt,{turnIn:jt,turnOut:gt,others:we});a.push(...Ht.flights),l.push({player:x.player,at:Ht.restEnd,carry:[...rt]}),E[x.player]=Ht.restEnd,r[x.player]=[...x.to],le(Ht.restEnd,((Zn=Et[R+1])==null?void 0:Zn.t)??i.duration,[...rt])}else if(x.type==="collect")ct(x.player,x.t,x.type),Dt(x.player,x.t,R);else if(x.type==="tackle"){ct(x.player,x.t,x.type),Se(x.player,x.t);const _=x.from;J(x.t)!==_&&console.warn(`[engine3d] tackle by ${x.player} at t=${x.t.toFixed(2)}s from ${_}, but ${J(x.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const I=D.has(x.player)&&!!t.clips[Bo.id],F=!I&&x.style!=="slide"&&!!t.clips[ko.id],U=x.t+(I?Bo:F?ko:Ic[0]).contact;let N=null,j=-1/0;for(const dt of l)dt.player===_&&dt.at<=U&&dt.at>j&&(j=dt.at,N=[...dt.carry]);if(N||(N=Wn(r[_],Le(r[_],r[x.player]))),F){const dt=VE*At,st=Ye([r[x.player][0]-r[_][0],r[x.player][1]-r[_][1]]);if(Math.hypot(r[x.player][0]-r[_][0],r[x.player][1]-r[_][1])<dt){const rt=[r[_][0]+dt*st[0],r[_][1]+dt*st[1]],pt=b[x.player];if(pt&&Math.hypot(pt.to[0]-r[x.player][0],pt.to[1]-r[x.player][1])<1e-6){const mt=(t.clips[Ln(t.groups.sprint??t.groups.run??t.groups.jog,x.player,x.t)].speed??pt.cruise)*Ti,gt=Math.min(ce(pt),Math.max(U-pt.t0,.2));pt.to=rt;for(let kt=0;kt<8&&ce(pt)>gt+1e-6&&pt.cruise<mt;kt++)pt.cruise=Math.min(mt,pt.cruise*ce(pt)/gt);for(const kt of m[x.player]??[]){const jt=c.indexOf(kt);jt>=0&&c.splice(jt,1)}m[x.player]=at(pt,x.player),r[x.player]=U<pt.t0+ce(pt)?Kn(pt,U).pos:rt}else r[x.player]=rt}}const et=F?Math.hypot(r[_][0]-r[x.player][0],r[_][1]-r[x.player][1]):Math.hypot(N[0]-r[x.player][0],N[1]-r[x.player][1]),ht=I?Bo.reach:F?ko.reach+Fe:jE;et>ht*At&&console.warn(`[engine3d] tackle by ${x.player} at t=${x.t.toFixed(2)}s: the ball is ${et.toFixed(2)} m away (reach ${(ht*At).toFixed(2)}) — move the tackler closer first`),F&&et<ra*At-1e-6&&console.warn(`[engine3d] tackle by ${x.player} at t=${x.t.toFixed(2)}s: he is ${et.toFixed(2)} m from ${_}, inside a body width (${(ra*At).toFixed(2)} m at this body scale) — the two of them draw as one`);const Z=I?Bo:F?ko:Ic[Math.abs(oi(x.player)+Math.floor(x.t*10))%Ic.length],tt=x.t+Z.contact,lt={player:x.player,clip:Z.id,t0:x.t,contact:Z.contact};if(c.push(lt),P({player:x.player,at:N,t0:Math.max(x.t-wr,0,y[x.player]??0),lock:[x.t,x.t+Z.duration]}),I){const dt=qs(t,lt),st=Wn(r[x.player],Le(r[x.player],N));g.push({t:tt,player:x.player});const rt=Nc(r[x.player],r[_],N);l.push({player:x.player,at:tt,carry:[...N],hand:{height:Oo*At,follow:!0,bone:rt}}),l.push({player:x.player,at:dt,carry:st,hand:{height:Vn*At,from:Oo*At,rise:Rc,follow:!0,bone:rt}}),E[x.player]=tt,q[x.player]=x.t+Z.duration+Hs}let yt;if(!I){const dt=Ye([r[_][0]-r[x.player][0],r[_][1]-r[x.player][1]]),st=[-dt[1],dt[0]],rt=(N[0]-r[_][0])*st[0]+(N[1]-r[_][1])*st[1]>=0?1:-1,pt=mt=>[r[_][0]+rt*mt*At*st[0]+Id*At*dt[0],r[_][1]+rt*mt*At*st[1]+Id*At*dt[1]];if(yt=pt(Cd),F){let mt=Fd(r[_],N,yt);for(let gt=Cd+.05;gt<=1&&!(mt>=HE*At);gt+=.05){const kt=pt(gt),jt=Fd(r[_],N,kt);jt>mt&&(mt=jt,yt=kt)}}a.push({from:N,to:yt,t0:tt,duration:Pc,style:"ground",pop:!0}),g.push({t:tt,player:null})}if(F){let dt=1/0;for(let gt=R+1;gt<Et.length;gt++){const kt=Et[gt];if((kt.type==="pass"?kt.from:kt.player)===_){dt=kt.t;break}}const st=[...yt],rt=Math.max(tt,y[_]??0),pt=z(_,rt,st,dt-Mi),mt=Math.min(dt,Math.max(tt+Pc,pt===null?0:S[_]));(pt??rt)<mt&&P({player:_,at:st,t0:pt??rt,until:mt})}else if(t.clips[Rd]){let dt=1/0;for(let gt=R+1;gt<Et.length;gt++){const kt=Et[gt];if((kt.type==="pass"?kt.from:kt.player)===_){dt=kt.t;break}}const st=Ye([r[_][0]-N[0],r[_][1]-N[1]]),rt=zE*At,pt=tt+WE,mt=Dd([...r[_]],[r[_][0]+rt*st[0],r[_][1]+rt*st[1]],pt,Rr);if(pt+Rr+Mi<=dt){(o[_]??(o[_]=[])).push(mt),b[_]=mt,c.push({player:_,clip:Rd,t0:pt,loopUntil:pt+Rr}),m[_]=[];const gt=Math.max(pt,y[_]??0);gt<pt+Rr&&P({player:_,at:[...N],t0:gt,until:pt+Rr}),r[_]=[...mt.to]}}I||Dt(x.player,Math.max(qs(t,lt),tt+Pc),R)}else{const _=x.type==="pass"?x.from:x.player,I=it[_],F=!!I&&x.t>=I.at-zo&&x.t-I.at<=Lc;I&&!F&&console.warn(`[engine3d] header for ${_} at t=${x.t} does not meet the cross at their forehead (t=${I.at.toFixed(2)}s) — played as an ordinary ${x.type}`),delete it[_];const U=Lt[_],N=!!U&&!!x.firstTime&&!F;x.firstTime&&!U&&!F&&console.warn(`[engine3d] firstTime ${x.type} for ${_} at t=${x.t} has no ball arriving at their boot — played as an ordinary strike`),delete Lt[_],F&&x.t-I.at>Od&&console.warn(`[engine3d] header for ${_} at t=${x.t} pulled to the ball's arrival (t=${I.at.toFixed(2)}s) — the ball cannot wait in the air`),ct(_,x.t,x.type),F||Se(_,x.t);const j=x.type==="pass"?r[x.to]:$t[R].target,et=x.type==="shoot"&&x.flightStyle!=="ground",ht=et?p1:lE,Z=et?m1:wr;x.deadBall&&!F&&te(_,x.t,j);const tt=D.has(_)&&J(x.t)===_&&(((ui=(wn=ds(l,_,x.t))==null?void 0:wn.hand)==null?void 0:ui.height)??0)>0,lt=!tt&&(x.style==="throw"||x.style==="roll")?x.style:null;D.has(_)&&(q[_]??0)>x.t&&console.warn(`[engine3d] keeper ${_} is busy until t=${q[_].toFixed(2)}s (save / catch clip still playing) but has a ${x.type} at t=${x.t} — schedule it later`);const yt=bt=>{if(!F)return null;const Zt=Math.hypot(bt[0]-Ht[0],bt[1]-Ht[1]);return Zt>=c1?{style:"headed",loft:Fc(Zt,At)}:null};let dt=x.t;if(x.type==="shoot"&&!x.touch){const bt=b[_],Zt=bt?bt.t0+ce(bt):-1/0;bt&&(bt.endSpeed??0)>0&&x.t-Zt>Bd&&x.t-Zt<No&&(dt=Zt-Bd)}let st="",rt,pt,mt=0,gt=null,kt=null;if(F)rt=I.at,mt=I.height;else if(N)st=Ln(t.groups[et?"shoot":"pass"],_,dt),pt=t.clips[st].ballContact??0,dt=U.at-pt,rt=U.at,dt<0&&console.warn(`[engine3d] first-time ${x.type} for ${_} wants its cue at t=${dt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss the ball — schedule the pass into them later`);else if((tt||lt)&&(x.type==="pass"||x.flightStyle==="ground")){gt=x.style??QE(Math.hypot(j[0]-r[_][0],j[1]-r[_][1]));const bt=lt?ME[lt]:gn[gt];st=bt.id,pt=bt.contact,rt=x.t+bt.contact,mt=gt==="roll"?0:bt.release*At,q[_]=x.t+bt.duration+Hs}else{const bt=b[_],Zt=x.type==="shoot"&&bt&&(bt.endSpeed??0)>0&&dt<=bt.t0+ce(bt)+1e-9?Kn(bt,dt).speed:0;kt=ie(_,dt,j,ht,x.type==="pass"||x.type==="shoot"&&!!x.touch),Zt>g1&&t.clips[oa.id]&&!(x.type==="shoot"&&x.touch)?(st=oa.id,pt=oa.contact):st=Ln(t.groups[et?"shoot":"pass"],_,x.t),rt=dt+(pt??t.clips[st].ballContact??0)}let jt=null;F||(jt={player:_,clip:st,t0:dt,...pt!==void 0?{contact:pt}:{}},c.push(jt),Q({player:_,at:[...j],t0:Math.max(dt-Z,0,y[_]??0),lock:[dt,rt+vn],until:rt+vn,headUntil:rt-lT},Math.min(dt,kt??1/0)));const we=Le(r[_],j),Ht=F?[...I.from]:N?[...U.from]:Wn(r[_],we),ne=lt?OE:UE,ae=x.type==="pass"&&D.has(x.to)&&!x.toFeet?x.flight:0,ue=x.type!=="pass"?0:gt==="throw"?Math.max(.4,ae,Math.hypot(j[0]-Ht[0],j[1]-Ht[1])/ne):x.style==="roll"?Math.max(x.flight,Math.hypot(j[0]-Ht[0],j[1]-Ht[1])/kE):x.flight;if(!F&&!N){const bt=Math.max(dt-sE,E[_]??0);bt>rt&&console.warn(`[engine3d] departure window for ${_} is inverted (starts t=${bt.toFixed(2)}s, ball contact t=${rt.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),h.push({player:_,windowStart:bt,contact:rt,heading:we,...gt?{toHeight:mt}:{}})}if(x.type==="pass"&&D.has(x.to)&&!x.toFeet){const bt=rt+ue,Zt=St(x.to,R,bt);Zt.blocked&&console.warn(`[engine3d] ball to the keeper ${x.to} at t=${x.t}: their authored ${Zt.blocked} runs during the flight, so where they stand at t=${bt.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const se=Zt.atArrival,Jt=Ye([Ht[0]-se[0],Ht[1]-se[1]]),Ue=[se[0]+Fe*Jt[0],se[1]+Fe*Jt[1]],Pe=(x.flightStyle==="clipped"||x.flightStyle==="lofted")&&x.style!=="roll",ge=((Di=x.deflect)==null?void 0:Di.style)==="lofted",Wt=Pe?(x.loft??0)>yE||ge?gn.catchHigh:gn.catch:gn.scoop[Math.abs(oi(x.to)+Math.floor(bt*10))%gn.scoop.length],Yt=Pe?Math.min(Vn*(Wt===gn.catchHigh?2:1),GE)*At:0,ye=bt-Wt.contact;ye<0&&console.warn(`[engine3d] receive cue for ${x.to} wants t0=${ye.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),ye<Zt.busyUntil&&console.warn(`[engine3d] catch cue for ${x.to} at t=${bt.toFixed(2)}s wants t0=${ye.toFixed(2)}s but their move is still running (until t=${Zt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),ye<rt&&console.warn(`[engine3d] catch cue for ${x.to} at t=${bt.toFixed(2)}s wants t0=${ye.toFixed(2)}s, before the ball leaves ${_} at t=${rt.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),c.push({player:x.to,clip:Wt.id,t0:ye,contact:Wt.contact});const Ve=x.flightStyle==="lofted"?Fc(Math.hypot(Ue[0]-Ht[0],Ue[1]-Ht[1]),At)-(mt+Yt)/2:gt==="throw"?Math.max(lt?Cc:1.5,x.loft??0):x.loft;if(a.push({from:Ht,to:Ue,t0:rt,duration:ue,style:gt==="kick"?"clipped":Pe||gt==="throw"?"lofted":"ground",...Ve!==void 0?{loft:Ve}:{},...Yt?{toHeight:Yt}:{},...mt?{fromHeight:mt}:{}}),P({player:x.to,at:[...r[_]],t0:x.t,lock:[bt-vn,bt+vn]}),x.deflect)a.push(wd(Ue,Yt,x.deflect,bt,At)),E[x.to]=bt;else{g.push({t:bt,player:x.to});const Te=Nc(r[x.to],r[_],Ue);l.push({player:x.to,at:bt,carry:Ue,hand:Pe?{height:Vn*At,from:Yt,rise:Rc,follow:!0,bone:Te}:{height:Vn*At,from:0,rise:Ad,follow:!0,bone:Te}}),E[x.to]=bt}q[x.to]=ye+Wt.duration+Hs}else if(x.type==="pass"&&!x.toFeet&&x.flightStyle==="lofted"&&(x.loft??s1)>=l1){const bt=rt+ue;let Zt=null,se=1/0,Jt=!1,Ue=!1,Pe;for(let Te=R+1;Te<Et.length;Te++){const Re=$t[Te],De=Et[Te];if((De.type==="move"||De.type==="collect")&&De.player===x.to&&Pe===void 0&&De.t>=bt-zo&&(Pe=De.t),!(!Re||Re.actor!==x.to)){Zt=Re.target,se=Re.t,Ue=De.type==="pass"||De.type==="shoot",Jt=Ue&&!!De.header;break}}Pe!==void 0&&Ue&&se-bt<=Lc&&console.warn(`[engine3d] ${x.to} has a move at t=${Pe.toFixed(2)}s between the cross landing on their forehead (t=${bt.toFixed(2)}s) and their strike at t=${se} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const ge=Ue&&Pe===void 0&&se>=bt-zo&&(se-bt<=Od||Jt&&se-bt<=Lc),Wt=St(x.to,R,bt);Wt.blocked&&!ge&&console.warn(`[engine3d] cross to ${x.to} at t=${x.t}: their authored ${Wt.blocked} runs during the flight, so where they stand at t=${bt.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const Yt=u1(Wt.atArrival,Ht,Zt,At),ye=bt-Yt.clip.contact;ye<0&&console.warn(`[engine3d] header cue for ${x.to} wants t0=${ye.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),ye<Wt.busyUntil&&console.warn(`[engine3d] header cue for ${x.to} wants t0=${ye.toFixed(2)}s but their move is still running (until t=${Wt.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),c.push({player:x.to,clip:Yt.clip.id,t0:ye,contact:Yt.clip.contact});const Ve=Math.hypot(Yt.contact[0]-Ht[0],Yt.contact[1]-Ht[1]);a.push({from:Ht,to:Yt.contact,t0:rt,duration:ue,style:"lofted",loft:Fc(Ve,At)-(mt+Yt.height)/2,toHeight:Yt.height,...mt?{fromHeight:mt}:{}}),ge?(it[x.to]={at:bt,from:Yt.contact,height:Yt.height},P({player:x.to,at:[...Zt],t0:Math.max(ye-wr,0,y[x.to]??0),lock:[ye,bt+vn],until:bt+vn})):(Ue&&se<bt-zo?console.warn(`[engine3d] ${x.to}'s own strike at t=${se} is ${(bt-se).toFixed(2)}s BEFORE the cross reaches their forehead (t=${bt.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):Jt&&console.warn(`[engine3d] header for ${x.to} at t=${se} is ${(se-bt).toFixed(2)}s after the ball arrives (t=${bt.toFixed(2)}s) — ignored, cushioned instead`),P({player:x.to,at:[...r[_]],t0:x.t,lock:[bt-vn,bt+vn]}),a.push({from:Yt.contact,to:Yt.set,t0:bt,duration:Dc,style:"drop",fromHeight:Yt.height}),P({player:x.to,at:[...Yt.faceAt],t0:bt}),g.push({t:bt,player:x.to}),E[x.to]=bt+Dc,l.push({player:x.to,at:bt+Dc,carry:Yt.set}))}else if(x.type==="pass"){const bt=rt+ue,Zt=Ln(t.groups.receive,x.to,bt),se=t.clips[Zt];let Jt=null,Ue=1/0,Pe=!1;for(let ge=R+1;ge<Et.length;ge++){const Wt=Et[ge];(Wt.type==="pass"?Wt.from:Wt.player)===x.to&&Ue===1/0&&(Ue=Wt.t);const ye=$t[ge];if(!(!ye||ye.actor!==x.to)){ye.t-bt<=zs&&(Jt=ye.target,Pe=(Wt.type==="pass"||Wt.type==="shoot")&&!!Wt.firstTime);break}}if(Pe&&Jt){const ge=St(x.to,R,bt),Wt=Wn(ge.atArrival,Le(ge.atArrival,Jt));a.push({from:Ht,to:Wt,t0:rt,duration:ue,style:x.flightStyle==="lofted"?"lofted":x.flightStyle==="clipped"?"clipped":"ground",...x.loft!==void 0?{loft:x.loft}:{},...mt?{fromHeight:mt}:{}}),P({player:x.to,at:[...r[_]],t0:x.t,lock:[bt-vn,bt+vn]}),Lt[x.to]={at:bt,from:Wt},le(bt,((Fi=Et[R+1])==null?void 0:Fi.t)??i.duration,Wt)}else{const ge=y1(j,Ht,Jt);let Wt=x.t;{const Te=St(x.to,R,bt),Re=Te.expected,De=Math.max(x.t,Te.busyUntil),Zr=Math.max(Te.afterT,x.t),ur=Te.blocked;Wt=De;const Ke=Math.hypot(ge.contact[0]-Re[0],ge.contact[1]-Re[1]);if(Ke>rE)if(ur)console.warn(`[engine3d] receive for ${x.to}: the ball lands ${Ke.toFixed(2)}m away at t=${bt.toFixed(2)}s, but their authored ${ur} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const kn=Ye([ge.contact[0]-Re[0],ge.contact[1]-Re[1]]),di=[ge.contact[0]-Fe*kn[0],ge.contact[1]-Fe*kn[1]],Rn=t.groups.walk,vs=Rn!=null&&Rn.length?t.clips[Rn[0]].speed??En:En,Qn={from:Re,to:di,t0:0,cruise:vs,accel:Pn},Oi=bt-vd-ce(Qn);Oi<De-1e-9?console.warn(`[engine3d] receive adjustment for ${x.to}: the ${(Ke-Fe).toFixed(2)}m walk to the contact point would need to start at t=${Oi.toFixed(2)}s but they're busy until t=${De.toFixed(2)}s — skipped (the standing stretch stays)`):(Qn.t0=Oi,Wt=bt-vd,Y.push({player:x.to,afterT:Zr,move:Qn,faceBall:[...Ht],faceSettle:[...ge.faceAt],arrival:bt}))}}const Yt=se.ballContact??0,ye=Math.min(Yt,Math.max(aE,Math.min(oE,cE*ue,bt-(Wt+_a)))),Ve=bt-ye;Ve<0&&console.warn(`[engine3d] receive cue for ${x.to} wants t0=${Ve.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),c.push({player:x.to,clip:Zt,t0:Ve,...Yt>ye?{offset:Yt-ye}:{}}),a.push({from:Ht,to:ge.contact,t0:rt,duration:ue,style:gt==="throw"||x.flightStyle==="lofted"?"lofted":gt==="kick"||x.flightStyle==="clipped"?"clipped":"ground",...gt==="throw"?{loft:Math.max(lt?Cc:1.5,x.loft??0)}:gt==="kick"?{loft:Math.max(3,x.loft??0)}:x.loft!==void 0?{loft:x.loft}:{},...mt?{fromHeight:mt}:{},...yt(ge.contact)??{}}),a.push({from:ge.contact,to:ge.set,t0:bt,duration:ii,style:"ground"}),P({player:x.to,at:[...r[_]],t0:x.t,lock:[bt-vn,bt+vn]}),Q({player:x.to,at:[...ge.faceAt],t0:bt},Ue),g.push({t:bt,player:x.to}),E[x.to]=bt+ii,l.push({player:x.to,at:bt+ii,carry:ge.set}),le(bt+ii,((hi=Et[R+1])==null?void 0:hi.t)??i.duration,ge.set)}}else if(x.flightStyle==="ground"){const bt=Math.hypot(j[0]-Ht[0],j[1]-Ht[1]),Zt=x.flight??(x.touch?Math.sqrt(2*bt/Fr):gt==="throw"?Math.max(.4,bt/ne):bt/f1);if(a.push({from:Ht,to:[...j],t0:rt,duration:Zt,style:x.touch?"push":gt==="throw"?"lofted":gt==="kick"?"clipped":"ground",...x.touch?{endFrac:0}:{},...gt==="throw"?{loft:lt?Cc:1.5}:gt==="kick"?{loft:3}:{},...mt?{fromHeight:mt}:{},...yt(j)??{}}),x.deflect){const se=Math.hypot(x.deflect.to[0]-j[0],x.deflect.to[1]-j[1]);a.push({from:[...j],to:[...x.deflect.to],t0:rt+Zt,style:"ground",duration:NE(bt,Zt,se)})}}else{const bt=Math.hypot(j[0]-Ht[0],j[1]-Ht[1]),Zt=x.flight??bt/d1,se=Ye([j[0]-Ht[0],j[1]-Ht[1]]),Jt=[j[0]+kd*se[0],j[1]+kd*se[1]],Ue=rt+Zt,Pe=a.length;a.push({from:Ht,to:Jt,t0:rt,duration:Zt,style:"shot",...mt?{fromHeight:mt}:{}}),a.push({from:Jt,to:Jt,t0:Ue,duration:h1,style:"drop"}),le(((Zi=Et[R-1])==null?void 0:Zi.t)??0,dt,Ht);let ge=!1;for(const Wt of be){const Yt=fi=>{const ki=St(Wt.id,R,fi);if(ki.afterT>-1/0)return ki.atArrival;const Bn=b[Wt.id];return Bn&&fi<Bn.t0+ce(Bn)?Kn(Bn,fi).pos:[...r[Wt.id]]},ye=rt+yd(Math.max(Zt,Ed)),Ve=Md(rt,Zt,gn.dive.left.contact).t0,Te=x.type==="shoot"?x.deflect:void 0,Re=T||!!Te,De=Yt(Re?ye:Ve),Zr=[j[0]-De[0],j[1]-De[1]],ur=Le(De,Ht),Ke=Re?t1(De,ur,Ht,Jt,At):null;if(Te&&!Ke&&console.warn(`[engine3d] deflect on the shot at t=${x.t} is dropped: ${Wt.id} is ${Om(De,Ht,Jt).reach.toFixed(2)} m off the ball line at body scale ${At} (his reach is ${(Nm*At).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!Ke){if(Math.hypot(Zr[0],Zr[1])>Fm*At)continue;const fi=Vm(De,ur,Jt),ki=dE[fi],Bn=t.clips[ki],{t0:pi,timeScale:ys}=Md(rt,Zt,gn.dive[fi].contact);if(P({player:Wt.id,at:[...Ht],t0:Math.max(dt-wr,0,y[Wt.id]??0),...Bn?{lock:[dt,pi+Bn.duration/ys]}:{}}),Bn){c.push({player:Wt.id,clip:ki,t0:pi,...ys>1?{timeScale:ys}:{}});const ti=Yt(pi),hr=e1(ti,Ht,Jt,At),Jr=[hr[0]-ti[0],hr[1]-ti[1]],Qr=Math.hypot(Jr[0],Jr[1]),au=Math.min(Qr,bE*At),cu=Qr>1e-9?[ti[0]+Jr[0]/Qr*au,ti[1]+Jr[1]/Qr*au]:[...ti],Cg=Math.min(vE,Math.max(xE,Ue-pi));d.push({player:Wt.id,from:ti,to:cu,t0:pi,duration:Cg}),w[Wt.id]={t0:pi,at:[...r[Wt.id]]},r[Wt.id]=[...cu]}continue}if(ge)continue;ge=!0;const kn=a[Pe];a.splice(Pe+1,1);let di,Rn=Ke.contact,vs=Vn*At;if(Ke.kind==="dive"){kn.duration=Math.max(kn.duration,Ed),di=rt+yd(kn.duration);const fi=rt+kn.duration,ki={player:Wt.id,from:[...De],to:Ke.travelTo,t0:di,duration:Ke.contactOffset};d.push(ki);const Bn=km(ki,fi),pi=Math.min(1,(fi-di)/Ke.contactOffset),ys=gn.dive[Ke.side],ti=pi*ys.reach*At,hr=Ye([Ke.contact[0]-De[0],Ke.contact[1]-De[1]]);Rn=[Bn[0]+ti*hr[0],Bn[1]+ti*hr[1]],vs=(Vn+(ys.hand-Vn)*pi)*At,w[Wt.id]={t0:di,at:[...r[Wt.id]]},r[Wt.id]=[...Ke.travelTo]}else di=Math.max(dt,rt+kn.duration-Ke.contactOffset);const Qn=rt+kn.duration;kn.to=Rn,kn.toHeight=vs,c.push({player:Wt.id,clip:Ke.clip,t0:di,contact:Ke.contactOffset});const Oi=di+Ke.clipDuration;if(P({player:Wt.id,at:[...Ht],t0:Math.max(dt-wr,0,y[Wt.id]??0),lock:[dt,Oi]}),Te){a.push(wd(Rn,vs,Te,Qn,At)),E[Wt.id]=Qn,q[Wt.id]=Oi+Hs;continue}g.push({t:Qn,player:Wt.id});const Fa=Nc(r[Wt.id],Ht,Rn);Ke.kind==="catch"?l.push({player:Wt.id,at:Qn,carry:Rn,hand:{height:Vn*At,follow:!0,bone:Fa}}):(l.push({player:Wt.id,at:Qn,carry:Rn,hand:{height:Oo*At,from:vs,rise:wE,follow:!0,bone:Fa}}),l.push({player:Wt.id,at:Oi,carry:Rn,hand:{height:Vn*At,from:Oo*At,rise:Rc,follow:!0,bone:Fa}})),E[Wt.id]=Qn,q[Wt.id]=Oi+Hs}}if(x.type==="pass"&&!gt&&jt){const bt=t.groups.walk,Zt=bt!=null&&bt.length?t.clips[bt[0]].speed??En:En,se=[r[_][0]+Xr*Math.sin(we),r[_][1]+Xr*Math.cos(we)],Jt=b[_],Ue=Jt?Jt.t0+ce(Jt):-1/0;let Pe=1/0;for(let Te=R+1;Te<Et.length;Te++){const Re=Et[Te];if((Re.type==="pass"?Re.from:Re.player)===_){Pe=Re.t;break}}const ge={from:[...r[_]],to:se,t0:qs(t,jt),cruise:Zt,accel:Pn},Wt=ge.t0+ce(ge)+Mi<=Pe;let Yt=null,ye=null;if(Jt&&M.has(Jt)&&rt>=Ue&&rt-Ue<=CT&&nu(o[_],rt)<ng){const Te=LT(),Re={...Jt,to:[...Jt.to],cruise:Math.max(Jt.cruise,Te),endSpeed:Te};Re.t0=rt-ce(Re),Re.t0>=Jt.t0-1e-9&&ai(Re).peak>=Te-1e-9&&(Yt=Re,ye=Wt?{from:[...r[_]],to:se,t0:rt,cruise:Te,accel:xa,startSpeed:Te}:UT(r[_],we,Te,Pe-rt,rt,De=>wt(De)&&Gt(De)))}if(Yt&&Jt){for(const Te of m[_]??[]){const Re=c.indexOf(Te);Re>=0&&c.splice(Re,1)}Object.assign(Jt,Yt),m[_]=at(Jt,_)}const Ve=ye??(Wt?ge:null);Ve&&((o[_]??(o[_]=[])).push(Ve),b[_]=Ve,m[_]=at(Ve,_),r[_]=[...Ve.to])}g.push({t:rt,player:null})}const K=xt.get(nt);K!==void 0&&K<x.t&&xt.delete(nt)}ut(1/0);const Ot=R=>Math.hypot(R.to[0]-R.from[0],R.to[1]-R.from[1]);function fe(R,x,nt,K,_=K){const I=(F,U=K)=>F>nt-1e-9&&F<U-1e-9;return(o[R]??[]).some(F=>!x.has(F)&&I(F.t0))||c.some(F=>F.player===R&&!x.has(F)&&I(F.t0))||p.some(F=>F.player===R&&!x.has(F)&&I(F.t0))||u.some(F=>F.player===R&&!x.has(F)&&(I(F.t0,_)||!!F.lock&&F.lock[1]>nt&&F.lock[0]<K))||g.some(F=>F.player===R&&I(F.t))||l.some(F=>F.player===R&&I(F.at))||h.some(F=>F.player===R&&F.contact>nt-1e-9&&F.windowStart<K-1e-9)}function oe(R){var K;let x=null;for(const _ of a)R>=_.t0&&R<_.t0+_.duration&&(!x||_.t0>=x.t0)&&(x=_);if(x)return Yi(x,R).pos;const nt=J(R);return nt?((K=Ki(o[nt]??[],R))==null?void 0:K.pos)??[...i.players.find(_=>_.id===nt).start]:Cr(a,n,R).at}const Ae=new Map;for(const[R,x]of Object.entries(o))for(const nt of x){if(Ot(nt)<=1e-6)continue;const K=Math.round(nt.t0*100),_=Ae.get(K);_?_.push({player:R,m:nt}):Ae.set(K,[{player:R,m:nt}])}for(const R of[...Ae.keys()].sort((x,nt)=>x-nt)){const x=Ae.get(R);if(new Set(x.map(_=>_.player)).size<OT)continue;const nt=oe(R/100),K=x.filter(({player:_,m:I})=>v.has(I)&&!D.has(_)&&!I.endSpeed&&!I.startSpeed&&J(I.t0)!==_).map(_=>({..._,d:Math.hypot(_.m.from[0]-nt[0],_.m.from[1]-nt[1])})).sort((_,I)=>_.d-I.d||(_.player<I.player?-1:_.player>I.player?1:0));K.forEach(({player:_,m:I},F)=>{var Z,tt;const U=v.get(I),N=new Set([I,...f.get(I)??[],U.face,(Z=U.start)==null?void 0:Z.span,(tt=U.start)==null?void 0:tt.cue]),j=I.t0+ce(I),et=lt=>!fe(_,N,I.t0,j+lt);let ht=jo+(K.length>1?(yl-jo)*F/(K.length-1):0);if(!et(ht)){if(!et(jo))return;let lt=jo;for(let yt=0;yt<20;yt++){const dt=(lt+ht)/2;et(dt)?lt=dt:ht=dt}ht=lt}I.t0+=ht;for(const lt of f.get(I)??[])lt.t0+=ht,lt.loopUntil!==void 0&&(lt.loopUntil+=ht);U.face&&(U.face.t0+=ht,U.face.until!==void 0&&(U.face.until+=ht)),U.start&&(U.start.span.t0+=ht,U.start.span.end+=ht,U.start.end+=ht,U.start.cue.t0+=ht,U.start.cue.loopUntil!==void 0&&(U.start.cue.loopUntil+=ht))})}const $=new Map,It=R=>$.get(R)??R,ft=[],Mt=new Map;for(const[R,x]of Object.entries(o))if(!D.has(R))for(let nt=0;nt+1<x.length;nt++){const K=x[nt],_=x[nt+1],I=v.get(K),F=v.get(_);if(!I||!F||I.r11||F.r11)continue;const U=It(K),N=It(_);if((U.endSpeed??0)>0||(_.startSpeed??0)>0)continue;const j=Ot(K),et=Ot(_);if(j<af||et<af||Math.hypot(_.from[0]-K.to[0],_.from[1]-K.to[1])>1e-6)continue;const ht=_.t0-(K.t0+ce(U)),Z=Math.abs(si(Le(K.from,K.to),Le(_.from,_.to)));if(ht<-1e-9||ht>kT||Z>BT)continue;const tt=K.startSpeed??0,lt=_.endSpeed??0,yt=Math.min(U.cruise,N.cruise),dt=Math.min(Math.max(zT(Z)*yt,rf),yt);if(dt<rf-1e-9||2*K.accel*j<dt*dt-tt*tt||2*_.accel*et<dt*dt-lt*lt)continue;const st={...K,endSpeed:dt},rt=_.t0-(K.t0+ce(st)),pt=tt>0?0:K.t0-I.t0>1e-9?of-yl:of,mt=Math.max(0,Math.min(rt,pt)),gt=HT(st,rt-mt);if(gt===null||ai(st).t3+gt>GT*ce(U)+1e-9)continue;const kt={...st,t0:K.t0+mt,...gt>0?{hold:gt}:{}};if(Math.abs(kt.t0+ce(kt)-_.t0)>1e-7)continue;const jt=Math.min(2*Rm/Math.sin(Math.max(Z,1e-9)/2),pa*j,pa*et);if(dt*Math.tan(Z/2)/jt>Ql(dt*Math.cos(Z/2)))continue;const we=_.t0+Ec({..._,startSpeed:dt},jt),Ht=new Set([K,_,...f.get(K)??[],...f.get(_)??[],I.face,F.face,(Jn=I.start)==null?void 0:Jn.span,(Ni=I.start)==null?void 0:Ni.cue,(Ui=F.start)==null?void 0:Ui.span,(Rt=F.start)==null?void 0:Rt.cue]);J(K.t0)===R||fe(R,Ht,K.t0,_.t0+ce(N),we)||($.has(K)||$.set(K,{...K}),$.has(_)||$.set(_,{..._}),mt>0&&(I.face&&(I.face.t0+=mt,I.face.until!==void 0&&(I.face.until+=mt)),I.start&&(I.start.span.t0+=mt,I.start.span.end+=mt,I.start.end+=mt,I.start.cue.t0+=mt,I.start.cue.loopUntil!==void 0&&(I.start.cue.loopUntil+=mt))),Object.assign(K,kt),_.startSpeed=dt,_.flow=!0,ft.push({player:R,A:K,B:_}),Mt.set(K,R),Mt.set(_,R))}for(const[R,x]of Object.entries(o))for(let nt=0;nt<x.length;nt++){if(!Mt.has(x[nt])||x[nt].flow)continue;let K=nt;for(;K+1<x.length&&x[K+1].flow&&Jl(x[K],x[K+1]);)K++;const _=x.slice(nt,K+1);for(const U of _){for(const j of f.get(U)??[]){const et=c.indexOf(j);et>=0&&c.splice(et,1)}const N=v.get(U);if(N.start&&U.flow){const j=p.indexOf(N.start.span);j>=0&&p.splice(j,1);const et=c.indexOf(N.start.cue);et>=0&&c.splice(et,1),N.start=null}}const I=v.get(_[0]);let F=Ct(_,R,I.t0);I.start&&p.includes(I.start.span)&&(F=_t(F,I.start.end)),c.push(...F);for(const U of _)f.set(U,F)}for(const{player:R,A:x,B:nt}of ft){const K=bl(x,nt),_=v.get(nt).face,I=_?u.indexOf(_):-1;if(!K||!_||I<0)continue;const F=Ot(x),U=Le(x.from,x.to),N=si(U,Le(nt.from,nt.to))<0?-1:1,j=Z=>Z<=.5?x.t0+Ec(x,F-K.L+2*K.L*Z):nt.t0+Ec(nt,2*K.L*(Z-.5)),et=Math.max(1,Math.ceil(K.turn/VT-1e-9)),ht=[];for(let Z=0;Z<=et;Z++){const tt=Z===0?0:UA(K.turn,(Z-.5)/et*K.turn),lt=U+N*Z*K.turn/et,yt=Cm(K,tt).pos;ht.push({player:R,at:[yt[0]+cf*Math.sin(lt),yt[1]+cf*Math.cos(lt)],t0:j(tt)})}u.splice(I,0,...ht),_.t0=j(1)}g.sort((R,x)=>R.t-x.t),c.sort((R,x)=>R.t0-x.t0),bT(c,o,t);const Bt=RT(c,o,t);return{moves:o,flights:a,anims:c,faces:u,departures:h,arrivals:l,dives:d,turns:p,bounces:Bt,ballSwaps:vt,attachTo(R){let x=null;for(const nt of g)nt.t<=R&&(x=nt.player);return x}}}const kc=2*Math.LN2,Bc=1e-5,lf=.5*Math.PI/180,Gc=5;function uf(i,t,e,n,s,r=0){n<0&&(i=-i,t=-t,e=-e,n=-n);const o=Math.sqrt(i*i+t*t+e*e),a=o<1e-8?2:2*Math.atan2(o,n)/o;s[r]=a*i,s[r+1]=a*t,s[r+2]=a*e}function zc(i,t,e,n){const s=.5*Math.sqrt(i*i+t*t+e*e);if(s<1e-8)return n.set(.5*i,.5*t,.5*e,1).normalize();const r=Math.sin(s)/(2*s);return n.set(r*i,r*t,r*e,Math.cos(s))}const hf=new WeakMap;function df(i){let t=hf.get(i);if(!t){t={q:new Map};for(const e of i.tracks){const n=Ie.parseTrackName(e.name);n.propertyName==="quaternion"&&t.q.set(n.nodeName??"",e.createInterpolant())}hf.set(i,t)}return t}function Xo(i,t,e){return e?t>0?(i%t+t)%t:0:Math.max(0,Math.min(t,i))}const ff=new WeakMap;function jT(i){let t=ff.get(i);return t||(t=new Map,i.traverse(e=>{e.name&&!t.has(e.name)&&t.set(e.name,e)}),ff.set(i,t)),t}const je=new Ze,Vs=new Ze,pf=new Ze,Ws=new Float64Array(3);function XT(i){const t=new Map;function e(b,m,f,v,M){const y=b.q.get(m);if(!y)return!1;const E=y.evaluate(f);return v[M]=E[0],v[M+1]=E[1],v[M+2]=E[2],v[M+3]=E[3],!0}function n(b,m,f,v){const M=kc/(b.hl+Bc),y=Math.exp(-M*f);for(let E=0;E<3;E++){const w=b.rx[m*3+E],C=b.rv[m*3+E];v[E]=y*(w+(C+w*M)*f)}}const s=new Float64Array(4),r=new Float64Array(4),o=new Float64Array(4),a=new Float64Array(4),c=new Float64Array(3),u=new Float64Array(3),h=new Float64Array(3),l=new Float64Array(3);function d(b,m,f,v,M,y,E){const w=i??E;if(!(w>0)){t.delete(b);return}const C=df(f.clip),P=df(v.clip),A=t.get(b),S=A?M-A.t0:0,L=jT(m),B=Xo(f.time,f.clip.duration,f.loop),z=Xo(f.time-y*f.rate,f.clip.duration,f.loop),X=Xo(v.time,v.clip.duration,v.loop),V=Xo(v.time-y*v.rate,v.clip.duration,v.loop),O=[],H=[],G=[];for(const Q of C.q.keys()){if(!P.q.has(Q))continue;e(C,Q,B,s,0),e(C,Q,z,r,0),e(P,Q,X,o,0),e(P,Q,V,a,0);const Y=A?A.names.indexOf(Q):-1;Y>=0&&(n(A,Y,S,c),n(A,Y,Math.max(0,S-y),u),je.set(s[0],s[1],s[2],s[3]),je.premultiply(zc(c[0],c[1],c[2],Vs)),s[0]=je.x,s[1]=je.y,s[2]=je.z,s[3]=je.w,je.set(r[0],r[1],r[2],r[3]),je.premultiply(zc(u[0],u[1],u[2],Vs)),r[0]=je.x,r[1]=je.y,r[2]=je.z,r[3]=je.w),je.set(s[0],s[1],s[2],s[3]).multiply(Vs.set(-o[0],-o[1],-o[2],o[3])),uf(je.x,je.y,je.z,je.w,h,0),pf.set(r[0],r[1],r[2],r[3]).multiply(Vs.set(-a[0],-a[1],-a[2],a[3])),je.multiply(Vs.copy(pf).invert()),uf(je.x,je.y,je.z,je.w,l,0);const ut=Math.hypot(h[0],h[1],h[2]),St=Math.hypot(l[0],l[1],l[2])/y;ut<lf&&St<lf/y||(O.push(Q),H.push(h[0],h[1],h[2]),G.push(l[0]/y,l[1]/y,l[2]/y))}if(!O.length){t.delete(b);return}t.set(b,{t0:M,hl:w,n:O.length,names:O,nodes:O.map(Q=>L.get(Q)),rx:Float64Array.from(H),rv:Float64Array.from(G),ql:new Float64Array(O.length*4),written:!1})}function p(b,m,f){var C;const v=t.get(b);if(!v)return;const M=v.ql;if(f===0&&v.written){for(let P=0;P<v.n;P++){const A=P*4;(C=v.nodes[P])==null||C.quaternion.set(M[A],M[A+1],M[A+2],M[A+3])}return}const y=m-v.t0;if(y<0||y>Gc*v.hl){t.delete(b);return}const E=kc/(v.hl+Bc),w=Math.exp(-E*y);for(let P=0;P<v.n;P++){const A=v.nodes[P];if(!A)continue;const S=P*3,L=P*4,B=v.rx,z=v.rv;Ws[0]=w*(B[S]+(z[S]+B[S]*E)*y),Ws[1]=w*(B[S+1]+(z[S+1]+B[S+1]*E)*y),Ws[2]=w*(B[S+2]+(z[S+2]+B[S+2]*E)*y);const X=A.quaternion.premultiply(zc(Ws[0],Ws[1],Ws[2],Vs));M[L]=X.x,M[L+1]=X.y,M[L+2]=X.z,M[L+3]=X.w}v.written=!0}function g(b,m){const f=t.get(b);if(!f)return 0;const v=m-f.t0;if(v<0||v>Gc*f.hl)return 0;const M=kc/(f.hl+Bc),y=Math.exp(-M*v);let E=0;for(let w=0;w<f.n;w++){const C=w*3;let P=0;for(let A=0;A<3;A++){const S=f.rx[C+A],L=f.rv[C+A],B=y*(S+(L+S*M)*v);P+=B*B}E=Math.max(E,Math.sqrt(P))}return E}return{transition:d,apply:p,peak:g,alive:(b,m)=>{const f=t.get(b);return!!f&&m-f.t0>=0&&m-f.t0<=Gc*f.hl},reset:()=>t.clear()}}const Hc="idle_b",mf=.5,qT=.3,KT=15,$T=6,YT=1.5,ZT=2,JT=2,Vc=.5,iu=Math.PI/180,gf=2.5,_f=5,Wc=.4,bf=.08,xf=60*iu,QT=90*iu,tw=1.5,ew=85*iu;function qo(i,t,e){let n=(oi(i)^Math.imul(t+1,2654435761)^e)>>>0;return n=Math.imul(n^n>>>16,73244475)>>>0,n=Math.imul(n^n>>>16,73244475)>>>0,((n^n>>>16)>>>0)/4294967296}function vf(i,t,e){var n;return((n=Ki(t??[],e))==null?void 0:n.pos)??i}function nw(i,t,e,n){var p,g,b;const s=new Map(i.map(m=>[m.id,m.start])),r=[...t.flights].sort((m,f)=>m.t0-f.t0);function o(m){let f=n;for(const M of r){if(m>=M.t0&&m<=M.t0+M.duration){const y=(m-M.t0)/M.duration;return[M.from[0]+(M.to[0]-M.from[0])*y,M.from[1]+(M.to[1]-M.from[1])*y]}M.t0+M.duration<m&&(f=M.to)}const v=t.attachTo(m);return v&&s.has(v)?vf(s.get(v),t.moves[v],m):f}const a=new Map(i.map(m=>[m.id,[]]));for(const m of t.anims)(p=a.get(m.player))==null||p.push(m.t0);for(const[m,f]of Object.entries(t.moves))for(const v of f)(g=a.get(m))==null||g.push(v.t0);for(const m of t.arrivals)(b=a.get(m.player))==null||b.push(m.at);for(const m of a.values())m.sort((f,v)=>f-v);const c=(m,f)=>{for(const v of a.get(m)??[])if(v>=f)return v;return 1/0},u=Math.ceil(e/Vc)+2,h=new Map(i.map(m=>[m.id,new Uint8Array(u)]));for(let m=0;m<u;m++){const f=m*Vc,v=o(f),M=i.map(y=>vf(y.start,t.moves[y.id],f));i.forEach((y,E)=>{const w=c(y.id,f)-f,C=Math.hypot(M[E][0]-v[0],M[E][1]-v[1])<=KT;let P=0;for(let S=0;S<M.length;S++)S!==E&&Math.hypot(M[E][0]-M[S][0],M[E][1]-M[S][1])<=YT&&P++;const A=P>=ZT&&w>JT;h.get(y.id)[m]=!A&&(C||w<=$T)?1:0})}const l=new Map;for(const m of i){const f=[];let v=qo(m.id,0,23721)*_f;for(let M=1;v<e&&M<512;M++)f.push(v),v+=gf+qo(m.id,M,27313)*(_f-gf);l.set(m.id,f)}const d=new Map;for(const m of t.arrivals)(d.get(m.player)??d.set(m.player,[]).get(m.player)).push(m.at);return{ready(m,f){const v=h.get(m);if(!v)return!1;const M=Math.max(0,Math.min(u-1,Math.floor(f/Vc)));return v[M]===1||M+1<u&&v[M+1]===1},scan(m,f,v){if(!v)return{yaw:0,env:0};for(const y of d.get(m)??[])if(y>=f&&y-f<=tw+Wc)return{yaw:0,env:0};const M=l.get(m)??[];for(let y=0;y<M.length;y++){const E=f-M[y];if(E<0)break;if(E>Wc)continue;const w=Math.max(0,Math.min(1,E/bf,(Wc-E)/bf)),C=xf+qo(m,y,15383)*(QT-xf);return{yaw:(qo(m,y,4563)<.5?1:-1)*C*w,env:w}}return{yaw:0,env:0}}}}const iw=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,yf=new Map,Mf=30;function sw(i,t=0){const e=`${i.uuid}@${t}`;let n=yf.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>iw.test(Ie.parseTrackName(s.name).nodeName??"")),O0.makeClipAdditive(n,t*Mf,n,Mf),yf.set(e,n)),n}function rw(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/Km),n=Math.min(1,(t-i)/$m);return _T*Math.max(0,Math.min(e,n))}const Sf=.1,ow=1;function aw(i,t,e,n=[],s,r){const o=V=>qs(i,V),a=(V,O)=>tg(t,i,V,O);function c(V,O){let H=0;for(const G of t){if(G.player!==V)continue;const Q=o(G);Q<=O&&Q>H&&(H=Q)}return H}function u(V,O){const H=e.get(V);return H!=="keeper"&&i.clips[Hc]&&(r!=null&&r(V,O))?Hc:tf(Gd(i,H),V,pT(V,O-c(V,O)))}const h=new Map,l=new Map,d=new Map,p=new Map,g=new Map,b=new Map,m=jm(i),f=new Map;for(const V of m)for(const O of i.groups[V.gait]??[aa(i,V.gait,"",0)])f.set(O,V.gait);const v=s!=null&&s.off?null:XT(s==null?void 0:s.halflife),M=!!(s!=null&&s.all),y=(V,O)=>!!v&&(M||W1(i,V,O));let E=0;const w=new Map;function C(V,O){const H=a(V,O);if(H!=null&&H.additive)return null;if(H){const ut=i.clips[H.clip];if(ut.category==="locomotion")return null;const St=H.timeScale??1;return{id:H.clip,loop:ut.loop,rate:St,time:(H.offset??0)+(O-Math.max(H.t0,0))*St}}const G=u(V,O),Q=Wo(V),Y=i.clips[G].duration;return{id:G,loop:!0,rate:Q,time:((Vo(V,Y)+O*Q)%Y+Y)%Y}}function P(V,O,H){const G=[];for(const Y of t)if(Y.player===V)for(const ut of[Math.max(Y.t0,0),o(Y)])ut>O&&ut<=H&&G.push(ut);let Q=c(V,H);for(let Y=0;Y<64&&Q<=H;Y++)Q+=eg(V,Y),Q>O&&Q<=H&&G.push(Q);return G.sort((Y,ut)=>ut-Y)}const A=1/60,S=1e-4;function L(V,O){return[C(V,O-S),C(V,O+S)]}function B(V,O,H,G){const[Q,Y]=L(V,H);if(!Q||!Y||Q.id===Y.id||Y.id!==G||!y(Q.id,Y.id))return!1;const ut=O.clips.get(Q.id),St=O.clips.get(Y.id);return!ut||!St?!1:(v.transition(V,O.mixer.getRoot(),{clip:ut,time:Q.time,rate:Q.rate,loop:Q.loop},{clip:St,time:Y.time,rate:Y.rate,loop:Y.loop},H,A,Sf),!0)}function z(V,O,H,G,Q){for(const Y of P(V,H,G)){const[ut,St]=L(V,Y);if(!(ut&&St&&ut.id===St.id))return B(V,O,Y,Q)}return!1}function X(V,O,H,G,Q){var T;const Y=v?w.get(V)!==E:!1;v&&w.set(V,E);let ut=null;const St=a(V,H),Ct=St!=null&&St.additive?St:null,at=Ct?Ca(m,Q):null,_t=at?aa(i,at.gait,V,Ct.t0):null,ct=Ct?null:St,J=ct??(_t?Ct:null),vt=_t??(ct==null?void 0:ct.clip)??u(V,H),Tt=h.get(V);if(cT(Tt,vt,ct)){const q=i.clips[vt],ot=O.mixer.clipAction(O.clips.get(vt)),xt=!!Tt&&f.has(Tt.clip)&&f.has(vt)&&!(ct!=null&&ct.offset),it=xt&&((T=l.get(V))==null?void 0:T.action)===ot;if(it||ot.reset(),xt&&!it){const Lt=i.clips[Tt.clip].duration;Lt>0&&(ot.time=Tt.action.time/Lt%1*q.duration)}ot.loop=q.loop?2201:2200,ot.clampWhenFinished=!0,ct!=null&&ct.offset&&(ot.time=ct.offset),Tt&&Tt.action!==ot&&(y(Tt.clip,vt)?(Y||(ut={src:{clip:Tt.action.getClip(),loop:i.clips[Tt.clip].loop,rate:Tt.action.timeScale,time:Tt.action.time+G*Tt.action.timeScale},hl:Sf}),Tt.action.weight=0,Tt.action.stop(),Tt.action.enabled=!1):(Tt.action.fadeOut(V1(i,Tt.clip,vt)),xt||ot.fadeIn(Ym(i,vt,Tt.clip)))),ot.play(),h.set(V,{clip:vt,offset:ct==null?void 0:ct.offset,action:ot})}const Nt=h.get(V).action,ee=!!J&&J.timeScale===void 0&&i.clips[vt].category==="locomotion",Vt=ee?f.get(vt):void 0,le=ee?Vt?O1(m,Q,Vt):{timeScale:N1(Q,i.clips[vt].speed??En),partner:null,weight:0}:null,W=le!=null&&le.partner&&J?aa(i,le.partner,V,J.t0):null,Se=l.get(V);if(Se&&Se.clip!==W&&(Se.clip!==vt&&(Se.action.weight=0,Se.action.stop()),l.delete(V)),J)if((ct==null?void 0:ct.timeScale)!==void 0)Nt.timeScale=ct.timeScale,Nt.weight=1;else if(le){if(Nt.timeScale=le.timeScale,Nt.weight=1-le.weight,W){let q=l.get(V);if(!q){const it=O.mixer.clipAction(O.clips.get(W));it.isRunning()&&it.getEffectiveWeight()>0?it.stopFading():(it.reset(),it.play()),it.loop=2201,q={clip:W,action:it},l.set(V,q)}q.action.weight=le.weight,q.action.timeScale=le.timeScale;const ot=i.clips[vt].duration,xt=i.clips[W].duration;ot>0&&(q.action.time=Nt.time/ot%1*xt)}}else Nt.timeScale=1,Nt.weight=1;else{Nt.weight=1,Nt.timeScale=Wo(V);const q=i.clips[vt].duration;Nt.time=((Vo(V,q)+H*Nt.timeScale)%q+q)%q}const ie=vt===sf?0:wT(n,V,H),te=p.get(V),Dt=ie>0?O.clips.get(sf):void 0;if(Dt){let q=te;q||(q=O.mixer.clipAction(Dt),q.reset(),q.loop=2201,q.timeScale=0,q.play(),p.set(V,q));const ot=Dt.duration;q.time=((Vo(V,ot)+H*Wo(V))%ot+ot)%ot,q.weight=ie,Nt.weight*=1-ie}else te&&(te.weight=0,te.stop(),te.enabled=!1,p.delete(V));const be=g.get(V),At=!J&&vt===Hc?1-mf:0;if(At>0||be){const q=(be==null?void 0:be.clip)??tf(Gd(i,void 0),V,0);let ot=be;if(!ot){let it=b.get(q);it||b.set(q,it=O.clips.get(q).clone());const Lt=O.mixer.clipAction(it);Lt.reset(),Lt.loop=2201,Lt.timeScale=0,Lt.play(),ot={clip:q,action:Lt,w:Y?At:0},g.set(V,ot)}const xt=(G>0?G:0)*(1-mf)/qT;if(ot.w=Y?At:ot.w+Math.max(-xt,Math.min(xt,At-ot.w)),ot.w<=0&&At===0)ot.action.weight=0,ot.action.stop(),ot.action.enabled=!1,g.delete(V);else{const it=i.clips[q].duration;ot.action.time=((Vo(V,it)+H*Wo(V))%it+it)%it,ot.action.weight=ot.w,Nt.weight*=1-ot.w}}const D=d.get(V);if(Ct){const q=Ct.offset??0,ot=Math.max(0,i.clips[Ct.clip].duration-q),xt=rw(H-Ct.t0,ot);let it=D;if(!it||it.clip!==Ct.clip||it.offset!==q){it&&(it.action.weight=0,it.action.stop(),it.action.enabled=!1);const Lt=O.mixer.clipAction(sw(O.clips.get(Ct.clip),q));Lt.reset(),Lt.loop=2200,Lt.clampWhenFinished=!0,Lt.timeScale=0,Lt.play(),d.set(V,it={clip:Ct.clip,offset:q,action:Lt})}it.action.time=Math.min(i.clips[Ct.clip].duration,q+Math.max(0,H-Ct.t0)),it.action.weight=xt}else D&&(D.action.weight=0,D.action.stop(),D.action.enabled=!1,d.delete(V));if(O.mixer.update(G),v){const q=h.get(V);ut?z(V,O,H-G,H,q.clip)||v.transition(V,O.mixer.getRoot(),ut.src,{clip:q.action.getClip(),time:q.action.time,rate:q.action.timeScale,loop:i.clips[q.clip].loop},H,Math.max(G,1/240),ut.hl):Y&&z(V,O,H-ow,H,q.clip),v.apply(V,H,G)}}return{applyAnim:X,cueAt:a,inert:v,reset:()=>{v&&(v.reset(),E++)}}}class cw{constructor(t,e){sn(this,"_t",0);sn(this,"_playing",!1);sn(this,"speed",1);sn(this,"loopCbs",[]);sn(this,"endCbs",[]);sn(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function lw(i,t){const e=new Map(t),n=new Map,s=new Map;function r(o,a,c,u,h,l,d){const p=e.get(o)??0,g=Jm(i,o,a);let b;if(g){const M=s.get(o);M&&M.span===g?b=M.from:(b=p,s.set(o,{span:g,from:b}))}else s.delete(o);const m=g?j1(i,o,a,b):null,f=m?X1(Ei[g.clip],u):d?KA:Ql(u),v=m?pd(p,m.heading,c,f):l?p:pd(p,h,c,f);return n.set(o,c>0?(v-p)/c:0),e.set(o,v),{h:v,clipYaw:(m==null?void 0:m.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const uw=.2,hw=.5,dw=.06,fw=.25,Af=.15,pw=.25,mw=.2;function gw(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=uw*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function _w(i,t,e=1){return i.speed>hw*e||i.y>t+dw*e}function bw(i,t,e=1){const n=Math.hypot(i,t),s=fw*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function xw(i,t){const e=i??[];for(let n=0;n<e.length;n++){const s=e[n];if(n+1<e.length&&Jl(s,e[n+1]))continue;const r=s.t0+ce(s);if(t>r-pw&&t<=r)return!0}return!1}const vw=new Set(["turn","transition","receive","pass","idle"]);function yw(i,t,e){return e||i===null?!0:vw.has(t??"")}function Mw(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const o=(r-s.outAt)/Af;if(o>=1)return[0,0];const a=1-o*o*(3-2*o);return[s.outX*a,s.outZ*a]}function n(s,r,o,a,c,u,h){let l=i.get(s);if(l||i.set(s,l=t()),c<=0&&a===l.prevT){const[y,E]=e(l,a);return[l.corrX+y,l.corrZ+E]}if(c<=0||a<l.prevT||a-l.prevT>.5)return l.foot=-1,l.corrX=0,l.corrZ=0,l.outX=0,l.outZ=0,l.outAt=-1/0,l.prevT=a,l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],[0,0];const d=o[0]-l.prevRoot[0],p=o[1]-l.prevRoot[1],g=l.rootV=Math.hypot(d,p)/c,b=r.map((y,E)=>{const w=l.prev[E],C=w?Math.hypot(y[0]-w[0]-d,y[2]-w[2]-p)/c:1/0;return{x:y[0],y:y[1],z:y[2],speed:C}}),m=y=>{l.foot<0||(l.foot=-1,l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0)};if(!u||g>=mw)m();else if(l.foot>=0&&_w(b[l.foot],l.plantY,h)&&m(),l.foot<0){const y=gw(b,h);y>=0&&((l.corrX||l.corrZ)&&(l.outX=l.corrX,l.outZ=l.corrZ,l.outAt=a,l.corrX=0,l.corrZ=0),l.foot=y,l.plantY=b[y].y,l.anchorX=r[y][0],l.anchorZ=r[y][2])}else{const[y,E]=bw(l.anchorX-r[l.foot][0],l.anchorZ-r[l.foot][2],h);l.corrX=y,l.corrZ=E}const[f,v]=e(l,a);(a-l.outAt)/Af>=1&&(l.outX=0,l.outZ=0);const M=[l.corrX+f,l.corrZ+v];return l.prev=r.map(y=>[...y]),l.prevRoot=[o[0],o[1]],l.prevT=a,M}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const su=Math.PI/180,og=2*su,ag=4*su,Sw=8*su,Aw=ag/og,Ef=.12,Ew=.6,Tw=.08,Tf=.4;function ww(i){return i<Aw?0:Math.min(Sw,Math.max(ag,og*i))}function Rw(i,t){const e=Math.hypot(i[0],i[1]),n=ww(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function jc(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function Cw(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,o,a){const c=Rw(s,r),u=jc(i.get(n)??0,c.pitch*o,a,Ef),h=jc(t.get(n)??0,c.roll*o,a,Ef);return i.set(n,u),t.set(n,h),{pitch:u,roll:h}},shoulder(n,s,r){const o=wa(s)*Ew,a=jc(e.get(n)??0,o,r,Tw);return e.set(n,a),a},reset(){i.clear(),t.clear(),e.clear()}}}const Xc=new Ze,wf=new Ze,Rf=new Ze,va=new Ze,Iw=new Un;function Pw(i,t){Xc.identity();for(let e=i.parent;e&&e!==t;e=e.parent)Xc.premultiply(e.quaternion);return Xc}const qr=new WeakMap;function cg(i){const t=qr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function lg(i,t){const e=qr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):qr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function Cf(i,t,e,n,s){if(cg(t),!e&&!n&&!s){qr.delete(t);return}va.copy(t.quaternion);const r=Pw(t,i);wf.setFromEuler(Iw.set(e,n,s,"YXZ")),Rf.copy(r).invert().multiply(wf).multiply(r),t.quaternion.premultiply(Rf),lg(t,va)}function Lw(i,t){if(cg(i),!t){qr.delete(i);return}va.copy(i.quaternion),i.rotation.y+=t,lg(i,va)}const Dw=.58,Fw=.15,Nw=.5,qc=6,Uw=.3,Ks=.5,Ow=.7;function kw(i,t,e,n,s=new Map,r=!1){const o=new Map(i.map(a=>[a,[0,0]]));for(let a=0;a<i.length;a++)for(let c=a+1;c<i.length;c++){const u=e.has(i[a]),h=e.has(i[c]);if(u&&h)continue;let l=1/0,d=1,p=0;const g=w=>{const C=w.get(i[a]),P=w.get(i[c]);return C&&P?[P[0]-C[0],P[1]-C[1]]:null};for(let w=0;w<t.length;w++){const C=g(t[w]);if(!C)continue;const P=w+1<t.length?g(t[w+1]):null,A=P?P[0]-C[0]:0,S=P?P[1]-C[1]:0,L=A*A+S*S,B=L>1e-12?Math.min(1,Math.max(0,-(C[0]*A+C[1]*S)/L)):0;let z=C[0]+B*A,X=C[1]+B*S;const V=Math.hypot(z,X);if(V>=l)continue;if(l=V,V<1e-6)if(L>1e-12){const H=Math.sqrt(L);z=-S/H,X=A/H}else z=1,X=0;const O=Math.hypot(z,X);d=z/O,p=X/O}if(l>=n)continue;const b=n-l,m=u?0:r?Math.max(s.get(i[a])??0,Ks):(s.get(i[a])??0)<Ks?0:s.get(i[a]),f=h?0:r?Math.max(s.get(i[c])??0,Ks):(s.get(i[c])??0)<Ks?0:s.get(i[c]);if(m+f<=0)continue;const v=m/(m+f),M=f/(m+f),y=o.get(i[a]),E=o.get(i[c]);y[0]-=d*b*v,y[1]-=p*b*v,E[0]+=d*b*M,E[1]+=p*b*M}return o}function Bw(){const i=new Map;let t=-1/0;return{step(e,n,s,r,o,a,c){const u=Math.abs(o-t)>.25,h=kw(e,n,s,r,c,u);t=o;const l=u?1:a>0?1-Math.exp(-a/Fw):0;for(const d of e){const p=(c==null?void 0:c.get(d))??0;if(!u&&p<Ks&&!s.has(d))continue;const g=h.get(d),b=i.get(d)??[0,0];let m=(g[0]-b[0])*l,f=(g[1]-b[1])*l;const v=Math.hypot(m,f),M=Ow*Math.max(p,Ks)*a;!u&&v>M&&(m*=M/v,f*=M/v),i.set(d,[b[0]+m,b[1]+f])}return i}}}function Gr(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function Gw(i){var r;const t=[i.root[0]+Fe*Math.sin(i.heading),i.root[1]+Fe*Math.cos(i.heading)];let e=t,n=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!n||o.at>=n.at)&&(n=o);if(n)if((r=n.hand)!=null&&r.follow){const o=n.hand.rise?Gr((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*o,n.carry[1]+(t[1]-n.carry[1])*o]}else e=n.carry;const s=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(s){const o=[i.root[0]+Fe*Math.sin(s.heading),i.root[1]+Fe*Math.cos(s.heading)],a=Gr((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(o[0]-e[0])*a,e[1]+(o[1]-e[1])*a]}return e}function zw(i){let t=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!t||a.at>=t.at)&&(t=a);if(!(t!=null&&t.hand)){const a=i.departures.find(c=>c.player===i.player&&i.t>=c.windowStart&&i.t<=c.contact);return(a==null?void 0:a.toHeight)===void 0?0:a.toHeight*Gr((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6))}const e=t.hand,n=e.from??e.height,s=e.rise?Gr((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const o=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(o&&o.toHeight!==void 0){const a=Gr((i.t-o.windowStart)/Math.max(o.contact-o.windowStart,1e-6));r+=(o.toHeight-r)*a}return r}function ca(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=Yi(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:iE(e),speed:Im(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:Gw(n),height:zw(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const Hw=1.2,Vw=40;function ug(i,t,e){var s;const n=((s=Ki(i.moves[t]??[],e))==null?void 0:s.pos)??i.starts[t]??[0,0];return Bm(i.dives,i.moves[t],t,e)??n}function If(i,t){const e=i.attachTo(t),n=ca({t,holderId:e,holderRoot:e?ug(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const hg=.55,Ww=.3,Pf=.6,jw=.6,Xw=.4,Pa=i=>Math.min(Math.max(i,0),1);function qw(i,t){if(t<=i.t0)return 0;if(t>=i.t0+ce(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=Kn(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function Kw(i,t,e,n,s,r,o){const a=Math.hypot(t[0]-i[0],t[1]-i[1]);if(a<1e-6)return[];const c=(t[0]-i[0])/a,u=(t[1]-i[1])/a,h=-u,l=c,d=a-s-.1,p=b=>{const m=e?e*Math.sin(2*Math.PI*b/n):0;return[i[0]+c*b+h*m,i[1]+u*b+l*m]},g=[];for(let b=.15;b+r*.5<=d;b+=r+o){const m=Math.min(b+r,d),[f,v]=p(b),[M,y]=p(m);g.push({ax:f,ay:v,bx:M,by:y,k:(b+m)/2/a})}return g}function Lf(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,o=hg*e,a=Ww*e,c=t[0]-o*s,u=t[1]-o*r;return[[t[0],t[1]],[c-r*a,u+s*a],[c+r*a,u-s*a]]}const Df=1.6,Ko=2.2,$w=5,Yw=5,Zw=6,Ff=14,Jw=4,Qw=20,tR="#E8ECEF",eR="#8D949B",nR=1.2,iR=3,sR=.4;function Nf(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(Zw*n,s*.5),o=i==="dribble",a=i==="pass"?Qw*n:o?Ff*n/8:$w*n;return{dashes:Kw(t,e,o?Jw*n:0,Ff*n,r,a,i==="move"?Yw*n:0),headScale:r/hg}}function rR(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function oR(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,o=0,a=1/0;for(const h of e){const l=(h.y-i[1])/s;!(l>1)||!isFinite(l)||l-1<a&&(a=l-1,o=l,r=h)}if(!r)return null;const c=Math.max(r.halfW-n,0),u=i[0]+(t[0]-i[0])*o;return[Math.min(Math.max(u,r.x-c),r.x+c),r.y]}function La(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=nR}function aR(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,o)=>{const a=Math.hypot(o.start[0]-t[0],o.start[1]-t[1]);return a<r.d?{team:o.team,d:a}:r},{d:1/0}).team}const Uf=.012,cR=.14,lR=.38,Of=.15,dg=.3,uR="#bfe333";function hR(i){const t=1-2*dg,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const $o=1.5,dR=.3,fR=24;function kf(i){return Of+(lR-Of)*Pa(i)}function Ml(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=$o?0:1-s/$o;if(e===void 0)return r;const o=Math.max(e,n);if(i<o)return r;const a=1-Math.min(o-n,$o)/$o;return Math.min(r,a*Math.max(1-(i-o)/dR,0))}function Sl(i,t){for(let e=t+1;e<i.length;e++)if(La(i[e]))return i[e].t0}function pR(i,t){const e=[];for(let n=0;n<i.length;n++)La(i[n])&&Ml(t,i[n],Sl(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function mR(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=Yi(i,t).pos;return Pa(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function gR(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const a=Yi(n,e).pos;return[a[0],a[1]]}const r=i[t+1];if(!r||La(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const o=Yi(r,e).pos;return[o[0],o[1]]}function Bf(i,t){const e=Pa((i-t)/.06);return Pf+(1-Pf)*e}function _R(i,t){return Pa((i-(t-jw))/Xw)}const bR=.35;function xR(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+bR}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const o=Math.max(s.t0,0);n.push({player:s.player,t0:o,t1:o+(r.ballContact??0)+ii})}return n.sort((s,r)=>s.t0-r.t0)}function vR(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const Gf=1e-6;function Al(i,t,e){return Um(i,t,e)>0}function yR(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Gf);if(r&&Al(i.arrivals,r,s.t0-Gf))return{kind:"halo"}}const n=vR(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(o=>e>=o.t0&&e<o.t0+o.duration),r=i.arrivals.some(o=>o.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&Al(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function MR(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const SR=.85;function AR(i,t){return i>0?{draw:t>=i*SR,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const ER=.15,TR=1e-6;function zf(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function wR(i,t,e){var r;const n=i.filter(o=>o.player===t).sort((o,a)=>o.at-a.at);let s=e.at;for(let o=n.indexOf(e)-1;o>=0&&((r=n[o].hand)==null?void 0:r.bone)===e.hand.bone;o--)s=n[o].at;return s}function fg(i,t,e,n){var o;const s=ds(i,e,n);if(!((o=s==null?void 0:s.hand)!=null&&o.bone))return 0;let r=zf((n-wR(i,e,s))/ER);for(const a of t)a.player!==e||n<a.windowStart||n>a.contact||(r*=1-zf((n-a.windowStart)/Math.max(a.contact-a.windowStart,TR)));return r}function RR(i,t,e){var s,r;const n=(r=(s=ds(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function CR(i,t,e,n){return Al(i,e,n)||fg(i,t,e,n)>0}const IR=25;function PR(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function LR(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(PR(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=Im(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/IR),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const DR=.02;function FR(i,t,e,n,s,r,o,a=!1){if(!a)for(let c=0;c<t.length;c++){const u=t[c];e<u.t&&n>=u.t&&(u.net?i.net():i.kick(u.power,u.shot))}i.roll(s&&r<=DR,o)}function NR(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,o,a,c)=>{FR(e,n,s,r,o,a,c,t),t=!1}}const Hf=new dn,Yo=new k;class pg extends Q0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new He(t,3)),this.setAttribute("uv",new He(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new sl(e,6,1);return this.setAttribute("instanceStart",new Xn(n,3,0)),this.setAttribute("instanceEnd",new Xn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new sl(e,6,1);return this.setAttribute("instanceColorStart",new Xn(n,3,0)),this.setAttribute("instanceColorEnd",new Xn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new L0(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Hf.setFromBufferAttribute(e),this.boundingBox.union(Hf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Yo.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Yo)),Yo.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Pt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new qt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Mn.line={uniforms:Rl.merge([Pt.common,Pt.fog,Pt.line]),vertexShader:`
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
		`};class ru extends Ii{constructor(t){super({type:"LineMaterial",uniforms:Rl.clone(Mn.line.uniforms),vertexShader:Mn.line.vertexShader,fragmentShader:Mn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Kc=new me,Vf=new k,Wf=new k,rn=new me,on=new me,ei=new me,$c=new k,Yc=new re,an=new m_,jf=new k,Zo=new dn,Jo=new On,ni=new me;let ri,fs;function Xf(i,t,e){return ni.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),ni.multiplyScalar(1/ni.w),ni.x=fs/e.width,ni.y=fs/e.height,ni.applyMatrix4(i.projectionMatrixInverse),ni.multiplyScalar(1/ni.w),Math.abs(Math.max(ni.x,ni.y))}function UR(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,c=o;a<c;a++){an.start.fromBufferAttribute(s,a),an.end.fromBufferAttribute(r,a),an.applyMatrix4(e);const u=new k,h=new k;ri.distanceSqToSegment(an.start,an.end,h,u),h.distanceTo(u)<fs*.5&&t.push({point:h,pointOnLine:u,distance:ri.origin.distanceTo(h),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function OR(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,c=a.attributes.instanceStart,u=a.attributes.instanceEnd,h=Math.min(a.instanceCount,c.count),l=-t.near;ri.at(1,ei),ei.w=1,ei.applyMatrix4(t.matrixWorldInverse),ei.applyMatrix4(n),ei.multiplyScalar(1/ei.w),ei.x*=r.x/2,ei.y*=r.y/2,ei.z=0,$c.copy(ei),Yc.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(rn.fromBufferAttribute(c,d),on.fromBufferAttribute(u,d),rn.w=1,on.w=1,rn.applyMatrix4(Yc),on.applyMatrix4(Yc),rn.z>l&&on.z>l)continue;if(rn.z>l){const M=rn.z-on.z,y=(rn.z-l)/M;rn.lerp(on,y)}else if(on.z>l){const M=on.z-rn.z,y=(on.z-l)/M;on.lerp(rn,y)}rn.applyMatrix4(n),on.applyMatrix4(n),rn.multiplyScalar(1/rn.w),on.multiplyScalar(1/on.w),rn.x*=r.x/2,rn.y*=r.y/2,on.x*=r.x/2,on.y*=r.y/2,an.start.copy(rn),an.start.z=0,an.end.copy(on),an.end.z=0;const b=an.closestPointToPointParameter($c,!0);an.at(b,jf);const m=up.lerp(rn.z,on.z,b),f=m>=-1&&m<=1,v=$c.distanceTo(jf)<fs*.5;if(f&&v){an.start.fromBufferAttribute(c,d),an.end.fromBufferAttribute(u,d),an.start.applyMatrix4(o),an.end.applyMatrix4(o);const M=new k,y=new k;ri.distanceSqToSegment(an.start,an.end,y,M),e.push({point:y,pointOnLine:M,distance:ri.origin.distanceTo(y),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class kR extends Me{constructor(t=new pg,e=new ru({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let o=0,a=0,c=e.count;o<c;o++,a+=2)Vf.fromBufferAttribute(e,o),Wf.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Vf.distanceTo(Wf);const r=new sl(s,2,1);return t.setAttribute("instanceDistanceStart",new Xn(r,1,0)),t.setAttribute("instanceDistanceEnd",new Xn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;ri=t.ray;const o=this.matrixWorld,a=this.geometry,c=this.material;fs=c.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Jo.copy(a.boundingSphere).applyMatrix4(o);let u;if(n)u=fs*.5;else{const l=Math.max(s.near,Jo.distanceToPoint(ri.origin));u=Xf(s,l,c.resolution)}if(Jo.radius+=u,ri.intersectsSphere(Jo)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Zo.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=fs*.5;else{const l=Math.max(s.near,Zo.distanceToPoint(ri.origin));h=Xf(s,l,c.resolution)}Zo.expandByScalar(h),ri.intersectsBox(Zo)!==!1&&(n?UR(this,e):OR(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Kc),this.material.uniforms.resolution.value.set(Kc.z,Kc.w))}}class mg extends pg{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class BR extends kR{constructor(t=new mg,e=new ru({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function GR(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const o=n/r;return{axis:[s/r,0,-o],angle:r/e}}const qf=.55,gg=.55,Kf=.006,zR=i=>1/(1+Math.max(i,0)),HR=i=>gg/(1+2*Math.max(i,0)),VR=.6,WR=(i,t)=>t>0?i/t*VR:0,jR=14,XR=.25,_g=.25,Qo=Math.round(_g*60)+2,qR=2,KR=.5,$R=16774102,YR=20,Zc=.06,Jc=.06,$f=.09;function ZR(i){if(!(i>=0)||i>=Jc+$f)return[1,1,1];const t=i<Jc?1:1-(i-Jc)/$f;return[1+Zc*t,1-Zc*t,1+Zc*t]}const JR=.02,QR=2;let Pr=null;function tC(){if(Pr)return Pr;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Pr=new Tn(i),Pr.userData.shared=!0,Pr}function Yf(i){let{bodyScale:t,radius:e}=i;const n=new nn({map:tC(),transparent:!0,depthWrite:!1,opacity:gg,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Me(new Yn(qf,qf).rotateX(-Math.PI/2),n);s.position.y=Kf,s.renderOrder=1,i.root.add(s);const r=new ru({linewidth:qR,color:$R,vertexColors:!0,transparent:!0,opacity:KR,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const o=new mg;o.setPositions(new Float32Array(Qo*3)),o.setColors(new Float32Array(Qo*3));const a=o.attributes.instanceStart.data,c=o.attributes.instanceColorStart.data,u=new BR(o,r);u.frustumCulled=!1,u.renderOrder=YR,u.visible=!1;const h=i.streak!==!1;i.root.add(u);const l=[],d=new k;let p=!1,g=!1,b=-1;const m=new k;function f(){s.scale.setScalar(t)}f();function v(M){const y=p?d.distanceTo(M.pos):0,E=p&&y>QR,w=M.height<=JR;if(s.visible=!M.held,s.visible&&(s.position.set(M.pos.x,Kf,M.pos.z),s.scale.setScalar(t*zR(M.height)),n.opacity=HR(M.height)),p&&!E&&M.dt>0&&y>1e-9){const{axis:L,angle:B}=GR([d.x,d.z],[M.pos.x,M.pos.z],e);if(L[0]!==0||L[2]!==0){m.set(L[0],L[1],L[2]);const z=w?B:WR(y/M.dt,e)*M.dt;z>0&&i.mesh.rotateOnWorldAxis(m,z)}}w&&g&&!E&&(b=M.t),E&&(b=-1),g=!w;const[C,P,A]=b<0?[1,1,1]:ZR(M.t-b);if(i.mesh.scale.set(t*C,t*P,t*A),E&&(l.length=0),h&&M.dt>0){for(l.push({t:M.t,p:M.pos.clone()});l.length&&M.t-l[0].t>_g;)l.shift();for(;l.length>Qo;)l.shift()}if(h&&(M.speed>jR||(M.apex??0)>=XR)&&l.length>=2){const B=l.length-1,z=a.array,X=c.array;for(let V=0;V<Qo-1;V++)for(const[O,H]of[[0,V],[3,V+1]]){const G=l[Math.min(H,B)].p,Q=6*V+O;z[Q]=G.x,z[Q+1]=G.y,z[Q+2]=G.z;const Y=Math.min(H,B)/B;X[Q]=X[Q+1]=X[Q+2]=Y}a.needsUpdate=!0,c.needsUpdate=!0,o.instanceCount=B,u.visible=!0}else u.visible=!1;d.copy(M.pos),p=!0}return{update:v,hide(){s.visible=!1,u.visible=!1},resize(M,y,E){t=M,e=y,f(),r.resolution.set(E.width,E.height)},__state:()=>({shadow:s,streak:u,trailLength:l.length,squashFrom:b})}}const eC=.055,nC=.17,os=.015,Zf=2.1,iC=.16,sC=.1,rC=1.6,oC=.45,aC=.11,cC={technical:XM,tactical:qM,physical:KM,social:$M};function lC(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Tn(i)}function uC(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function hC(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?cC[i.color]??i.color:gs,r=Math.min(t.width,t.height)*.14;if(uC(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=iC,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const a=i.label.toUpperCase(),c=AR(n.measureText(a).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(a,18,34,c.maxWidth))}const o=new Tn(t);return o.colorSpace=ze,o}function dC(i){var M,y;const{scene:t,drill:e,schedule:n}=i,s=(...E)=>{for(const w of E)w.traverse(C=>{const P=C.material;for(const A of Array.isArray(P)?P:P?[P]:[])A.toneMapped=!1});t.add(...E)},r=i.pathM??sC,o=E=>E*r*(i.pathWidthK??1),a=MR(i.search??location.search,(M=e.overlays)==null?void 0:M.runPaths),{width:c,length:u}=e.pitch,h=E=>E-c/2,l=E=>E-u/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(E=>[E.id,E.start])),ballStart:fa(e),headingAt:i.headingAt},p=aR(e.players,fa(e),n.attachTo(0)),g=new Map(e.players.map(E=>[E.id,E.team])),b=E=>g.get(E)===p?tR:eR,m=[];{const E=Vw,w=new Float32Array(E*3),C=new Xe;C.setAttribute("position",new Ce(new Float32Array(E*2*3),3)),C.setAttribute("color",new Ce(new Float32Array(E*2*3),3));const P=new Float32Array(E*2*2);for(let O=0;O<E;O++)P.set([0,O/(E-1),1,O/(E-1)],O*4);C.setAttribute("uv",new Ce(P,2));const A=new Uint16Array((E-1)*6);for(let O=0;O<E-1;O++){const H=O*2;A.set([H,H+1,H+2,H+1,H+3,H+2],O*6)}C.setIndex(new Ce(A,1));const S=(()=>{const O=document.createElement("canvas");O.width=64,O.height=1;const H=O.getContext("2d"),[G,Q,Y]=jM,ut=H.createLinearGradient(0,0,64,0);ut.addColorStop(0,`rgba(${G},${Q},${Y},0)`),ut.addColorStop(.28,`rgba(${G},${Q},${Y},0.28)`),ut.addColorStop(.44,"rgba(216,247,120,0.8)"),ut.addColorStop(.5,"rgba(255,255,255,1)"),ut.addColorStop(.56,"rgba(216,247,120,0.8)"),ut.addColorStop(.72,`rgba(${G},${Q},${Y},0.28)`),ut.addColorStop(1,`rgba(${G},${Q},${Y},0)`),H.fillStyle=ut,H.fillRect(0,0,64,1);const St=new Tn(O);return St.colorSpace=ze,St})(),L=new Me(C,new nn({map:S,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));L.frustumCulled=!1,L.renderOrder=6,s(L);const B=new k,z=new k,X=new k,V=Hw/(E-1);m.push((O,H)=>{if(L.visible=a.trail,!a.trail)return;for(let Y=0;Y<E;Y++){const ut=If(d,O-Y*V);w[Y*3]=h(ut.pos[0]),w[Y*3+1]=eC+ut.height,w[Y*3+2]=l(ut.pos[1])}const G=C.getAttribute("position"),Q=C.getAttribute("color");X.set(1,0,0);for(let Y=0;Y<E;Y++){const ut=Math.min(Y,E-2);B.set(w[ut*3]-w[ut*3+3],w[ut*3+1]-w[ut*3+4],w[ut*3+2]-w[ut*3+5]),z.set(w[Y*3],w[Y*3+1],w[Y*3+2]).sub(H.position),B.lengthSq()>1e-10&&(B.cross(z),B.lengthSq()>1e-10&&X.copy(B.normalize()));const St=Math.pow(1-Y/(E-1),1.2),Ct=nC*(.35+.65*St),at=w[Y*3],_t=w[Y*3+1],ct=w[Y*3+2];G.setXYZ(Y*2,at+X.x*Ct,_t+X.y*Ct,ct+X.z*Ct),G.setXYZ(Y*2+1,at-X.x*Ct,_t-X.y*Ct,ct-X.z*Ct);const J=St;Q.setXYZ(Y*2,J,J,J),Q.setXYZ(Y*2+1,J,J,J)}G.needsUpdate=Q.needsUpdate=!0})}{const E=[];let w=0,C=0;for(const P of e.events){if(P.type!=="move"&&P.type!=="dribble")continue;const A=(n.moves[P.player]??[]).find(B=>B.t0>=P.t&&B.t0<=P.t+yl+1e-9&&B.to[0]===P.to[0]&&B.to[1]===P.to[1]);if(!A)continue;const S=Nf(P.type,A.from,A.to,r);if(!S)continue;const L=new Kt(b(P.player));E.push({m:A,authored:P.runPath===!0,stroke:S,baseR:L.r,baseG:L.g,baseB:L.b,baseA:1,vert0:w,vertCount:S.dashes.length*4+3}),w+=S.dashes.length*4+3,C+=S.dashes.length*6+3}if(E.length){const P=new Float32Array(w*3),A=new Float32Array(w*4),S=new Uint16Array(C);let L=0,B=0;const z=o(Df)/2;for(const H of E){const G=Math.hypot(H.m.to[0]-H.m.from[0],H.m.to[1]-H.m.from[1])||1,Q=-(H.m.to[1]-H.m.from[1])/G,Y=(H.m.to[0]-H.m.from[0])/G;for(const _t of H.stroke.dashes){const ct=L/3;P.set([h(_t.ax+Q*z),os,l(_t.ay+Y*z),h(_t.ax-Q*z),os,l(_t.ay-Y*z),h(_t.bx+Q*z),os,l(_t.by+Y*z),h(_t.bx-Q*z),os,l(_t.by-Y*z)],L),L+=12,S.set([ct,ct+1,ct+2,ct+1,ct+3,ct+2],B),B+=6}const[ut,St,Ct]=Lf(H.m.from,H.m.to,H.stroke.headScale),at=L/3;P.set([h(ut[0]),os,l(ut[1]),h(St[0]),os,l(St[1]),h(Ct[0]),os,l(Ct[1])],L),L+=9,S.set([at,at+1,at+2],B),B+=3}const X=new Xe;X.setAttribute("position",new Ce(P,3)),X.setAttribute("color",new Ce(A,4)),X.setIndex(new Ce(S,1));const V=new Me(X,new nn({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));V.renderOrder=2,s(V);const O=X.getAttribute("color");m.push(H=>{if(V.visible=a.runPaths!=="off",!!V.visible){for(const G of E){const Q=a.runPaths==="authored"&&!G.authored?0:_R(H,G.m.t0),Y=qw(G.m,H);let ut=G.vert0;for(const Ct of G.stroke.dashes){const at=G.baseA*Q*Bf(Ct.k,Y);for(let _t=0;_t<4;_t++)O.setXYZW(ut++,G.baseR,G.baseG,G.baseB,at)}const St=G.baseA*Q*Bf(1,Y);for(let Ct=0;Ct<3;Ct++)O.setXYZW(ut++,G.baseR,G.baseG,G.baseB,St)}O.needsUpdate=!0}})}}{const E=fR,w=cR/2,C=[-1,-.4,1-2*dg,1],P=C.map(hR),A=C.length,S=n.flights.map((z,X)=>Sl(n.flights,X)),L=()=>{const z=new Xe,X=new Float32Array((E+1)*A*3);for(let G=0;G<(E+1)*A;G++)X[G*3+1]=Uf;const V=new Float32Array((E+1)*A*4),O=new Uint16Array(E*(A-1)*6);for(let G=0,Q=0;G<E;G++)for(let Y=0;Y<A-1;Y++,Q++){const ut=G*A+Y;O.set([ut,ut+1,ut+A,ut+1,ut+A+1,ut+A],Q*6)}z.setAttribute("position",new Ce(X,3)),z.setAttribute("color",new Ce(V,4)),z.setIndex(new Ce(O,1));const H=new Me(z,new nn({color:uR,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return H.frustumCulled=!1,H.renderOrder=2,H.name="passRibbon",s(H),{mesh:H,posAttr:z.getAttribute("position"),colAttr:z.getAttribute("color")}},B=[L(),L()];m.push(z=>{const X=a.runPaths==="auto"?pR(n.flights,z):[];for(let V=0;V<B.length;V++){const O=B[V],H=X[X.length-1-V]??-1;if(O.mesh.visible=H>=0,H<0)continue;const G=n.flights[H],Q=Ml(z,G,S[H]),Y=mR(G,z),ut=Math.hypot(G.to[0]-G.from[0],G.to[1]-G.from[1])||1,St=-(G.to[1]-G.from[1])/ut*w,Ct=(G.to[0]-G.from[0])/ut*w,at=G.from[0]+(G.to[0]-G.from[0])*Y,_t=G.from[1]+(G.to[1]-G.from[1])*Y,ct=gR(n.flights,H,z);for(let J=0;J<=E;J++){const vt=J/E,Tt=J===E?ct[0]:G.from[0]+(at-G.from[0])*vt,Nt=J===E?ct[1]:G.from[1]+(_t-G.from[1])*vt,ee=Q*kf(vt);for(let Vt=0;Vt<A;Vt++){const le=C[Vt],W=J*A+Vt;O.posAttr.setX(W,h(Tt+St*le)),O.posAttr.setZ(W,l(Nt+Ct*le)),O.colAttr.setXYZW(W,1,1,1,ee*P[Vt])}}O.posAttr.needsUpdate=O.colAttr.needsUpdate=!0}})}{const E=(e.equipment??[]).filter(L=>L.type==="goal").map(L=>({x:L.at[0],y:L.at[1],halfW:xs(L,Ra)*i.goalScale})),w=o(Ko)/2,C=[],P=[],A=[],S=[];for(let L=0;L<n.flights.length;L++){const B=n.flights[L];if(!La(B))continue;const z=rR(B,n.arrivals);if(!z&&!B.pop)continue;const X=Math.hypot(B.to[0]-B.from[0],B.to[1]-B.from[1])||1,V=-(B.to[1]-B.from[1])/X,O=(B.to[0]-B.from[0])/X,H=O,G=-V;let Q=0;if(z){const Y=iR*2*w/2;P.push({ax:B.to[0]-H*w,ay:B.to[1]-G*w,bx:B.to[0]+H*w,by:B.to[1]+G*w,h:Y,px:V,py:O});const ut=oR(B.from,B.to,E,o(Ko))??B.to;P.push({ax:B.to[0],ay:B.to[1],bx:ut[0],by:ut[1],h:sR*w,px:V,py:O}),Q=8}else{P.push({ax:B.from[0],ay:B.from[1],bx:B.to[0],by:B.to[1],h:Df/Ko*w,px:V,py:O});const Y=Nf("pass",B.from,B.to,r);A.push(Lf(B.from,B.to,Y?Y.headScale:0)),Q=7}S.push({i:L,verts:Q})}if(S.length){const L=S.reduce((ct,J)=>ct+J.verts,0),B=S.reduce((ct,J)=>ct+(J.verts===8?12:9),0),z=new Float32Array(L*3),X=new Float32Array(L*4),V=new Uint16Array(B);let O=0,H=0,G=0,Q=0;const Y=Uf,ut=()=>{const ct=P[G++],J=O/3;z.set([h(ct.ax+ct.px*ct.h),Y,l(ct.ay+ct.py*ct.h),h(ct.ax-ct.px*ct.h),Y,l(ct.ay-ct.py*ct.h),h(ct.bx+ct.px*ct.h),Y,l(ct.by+ct.py*ct.h),h(ct.bx-ct.px*ct.h),Y,l(ct.by-ct.py*ct.h)],O),O+=12,V.set([J,J+1,J+2,J+1,J+3,J+2],H),H+=6};for(const ct of S){const J=O/3;if(ct.verts===8)ut(),ut();else{ut();const[vt,Tt,Nt]=A[Q++],ee=O/3;z.set([h(vt[0]),Y,l(vt[1]),h(Tt[0]),Y,l(Tt[1]),h(Nt[0]),Y,l(Nt[1])],O),O+=9,V.set([ee,ee+1,ee+2],H),H+=3}C.push({flight:ct.i,vert0:J,vertCount:ct.verts})}const St=new Xe;St.setAttribute("position",new Ce(z,3)),St.setAttribute("color",new Ce(X,4)),St.setIndex(new Ce(V,1));const Ct=new Me(St,new nn({color:ZM,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));Ct.renderOrder=2.5,Ct.name="passMarks",s(Ct);const at=St.getAttribute("color"),_t=n.flights.map((ct,J)=>Sl(n.flights,J));m.push(ct=>{if(Ct.visible=a.runPaths==="auto",!!Ct.visible){for(const J of C){const vt=n.flights[J.flight],Tt=ct<vt.t0+vt.duration?0:Ml(ct,vt,_t[J.flight])*kf(1);let Nt=J.vert0;for(let ee=0;ee<J.vertCount;ee++,Nt++)at.setXYZW(Nt,1,1,1,Tt)}at.needsUpdate=!0}})}}{const E=xR(n.departures,n.anims,i.clips),w={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:!e.ball||e.ball.static===!0},C=new nn({map:lC(),color:gs,blending:2,transparent:!0,depthWrite:!1}),P=new Me(new Yn(Zf,Zf).rotateX(-Math.PI/2),C);P.position.y=.02,P.renderOrder=3,P.name="possessionRing",s(P);const A=i.ballRadius??aC,S=rC*A,L=Ko*r,B=new nn({color:gs,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),z=new Me(new Aa(Math.max(S-L/2,1e-4),S+L/2,40),B);z.frustumCulled=!1,z.renderOrder=8,z.name="possessionHalo",s(z),m.push((X,V)=>{const O=yR(w,E,X);P.visible=a.highlight&&O.kind==="ring",z.visible=a.highlight&&(O.kind==="halo"||O.kind==="free");const H=Math.sin(X*2*Math.PI/1.6);if(O.kind==="ring"){const G=ug(d,O.player,X);P.position.x=h(G[0]),P.position.z=l(G[1]);const Q=1+.05*H;P.scale.x=P.scale.z=Q,C.opacity=.72+.18*H}else if(O.kind==="halo"||O.kind==="free"){const G=If(d,X);z.position.set(h(G.pos[0]),A+G.height,l(G.pos[1])),z.quaternion.copy(V.quaternion),B.opacity=O.kind==="free"?oC:.72+.18*H}})}const f=[];for(const E of((y=e.overlays)==null?void 0:y.zones)??[]){if(Vp.test(E.label??""))continue;const w=new Me(new Yn(E.w,E.h).rotateX(-Math.PI/2).rotateY(Math.PI),new nn({map:hC(E),transparent:!0,depthWrite:!1}));w.position.set(h(E.at[0]),.004,l(E.at[1])),w.renderOrder=.5,s(w),f.push(w)}const v=()=>{for(const E of f)E.visible=a.zones};return v(),{update(E,w){for(const C of m)C(E,w)},set(E){Object.assign(a,E),v()}}}const fC=.16,pC=.25,bg=.8,xg=.6,vg=8,mC=xg*vg;function gC(i,t){return!(i>=0)||i>=bg||t>mC*i?0:fC*Math.exp(-i/pC)*Math.sin(2*Math.PI*(t/xg-vg*i))}function _C(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??bC})}return t}const bC=.6,Jf=.15,xC=.12,vC=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Qf(i){return vC(Math.min(i,1-i)/xC)}function yC(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const o=[];for(let H=0;H<4;H++)o.push([n.getX(H),n.getY(H),n.getZ(H)]);const a=[0,1,2].map(H=>Math.min(...o.map(G=>G[H]))),c=[0,1,2].map(H=>Math.max(...o.map(G=>G[H]))),u=[0,1,2].map(H=>c[H]-a[H]),h=u.indexOf(Math.min(...u));if(u[h]>.001)return null;const[l,d]=[0,1,2].filter(H=>H!==h);if(!(u[l]>0&&u[d]>0))return null;const p=(H,G)=>{let Q=0,Y=1/0;for(let ut=0;ut<4;ut++){const St=Math.abs((o[ut][l]-a[l])/u[l]-H)+Math.abs((o[ut][d]-a[d])/u[d]-G);St<Y&&(Y=St,Q=ut)}return Q},g=p(0,0),b=p(1,0),m=p(0,1),f=p(1,1),v=(H,G)=>s?G?s.getY(H):s.getX(H):0,M=new k().setFromMatrixScale(t).x,y=Math.max(2,Math.min(96,Math.ceil(u[l]*M/Jf))),E=Math.max(2,Math.min(96,Math.ceil(u[d]*M/Jf))),w=(y+1)*(E+1),C=new Float32Array(w*3),P=new Float32Array(w*2),A=new Float32Array(w*3),S=new Float32Array(w),L=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let H=0;H<=E;H++)for(let G=0;G<=y;G++){const Q=H*(y+1)+G,Y=G/y,ut=H/E;C[Q*3+h]=o[0][h],C[Q*3+l]=a[l]+u[l]*Y,C[Q*3+d]=a[d]+u[d]*ut;for(const St of[0,1])P[Q*2+St]=v(g,St)*(1-Y)*(1-ut)+v(b,St)*Y*(1-ut)+v(m,St)*(1-Y)*ut+v(f,St)*Y*ut;A.set(L,Q*3),S[Q]=Qf(Y)*Qf(ut)}const B=[];for(let H=0;H<E;H++)for(let G=0;G<y;G++){const Q=H*(y+1)+G;B.push(Q,Q+1,Q+y+1,Q+1,Q+y+2,Q+y+1)}const z=new Xe;z.setAttribute("position",new Ce(C,3)),z.setAttribute("uv",new Ce(P,2)),z.setAttribute("normal",new Ce(A,3)),z.setIndex(B),z.userData.drillOwned=!0,i.geometry=z;const X=new Float32Array(C),V=new Float32Array(w*3),O=new k;for(let H=0;H<w;H++)O.fromArray(X,H*3).applyMatrix4(t).toArray(V,H*3);return{mesh:i,axis:h,rest:X,world:V,weight:S,scale:M}}function tp(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new re().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=qn.zMin;i.placed.copy(i.goal.matrixWorld)}function MC(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const o=e(r.at,r.height);let a=0,c=1/0;i.forEach((u,h)=>{const l=u.position.distanceToSquared(o);l<c&&(c=l,a=h)}),s[a].push(r)}i.forEach((r,o)=>{if(!s[o].length)return;r.updateMatrixWorld(!0);const a=new re().copy(r.matrixWorld).invert(),c=[];if(r.traverse(h=>{const l=h;if(!l.isMesh||!SC(l))return;const d=yC(l,new re().multiplyMatrices(a,l.matrixWorld));d&&c.push(d)}),!c.length)return;const u={panels:c,goal:r,dirty:!1,placed:new re,hits:s[o].map(h=>({t:h.t,w:e(h.at,h.height),p:new k}))};tp(u,!0),n.push(u)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const o=AC(r.hits,s);if(!o){if(!r.dirty)continue;for(const c of r.panels)EC(c);r.dirty=!1;continue}tp(r);const a=s-o.t;for(const c of r.panels){const u=c.mesh.geometry.getAttribute("position"),h=u.array;for(let l=0;l<c.weight.length;l++){const d=c.world[l*3]-o.p.x,p=c.world[l*3+1]-o.p.y,g=c.world[l*3+2]-o.p.z,b=gC(a,Math.hypot(d,p,g))*c.weight[l];h[l*3+c.axis]=c.rest[l*3+c.axis]+b/c.scale}u.needsUpdate=!0}r.dirty=!0}}}}const SC=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function AC(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<bg&&(e=n);return e}function EC(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const ou=new k(0,1,0),yg=.04,Mg=8,Kr=.1,cr=46,lr=25,ep=70;function ya(i,t){return new k(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function Da(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let ps=new Float64Array(64),ta=new Float64Array(64),ea=new Float64Array(64);const Sg=new k,Ag=new k,$i=new k;function np(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+ps[r]/2),s=Math.max(s,-i[r]/(2*e)+ps[r]/2);return n+s}function ip(i,t,e,n){let s=-1/0,r=1/0;for(let o=0;o<t;o++)s=Math.max(s,i[o]-(n-ps[o])*e),r=Math.min(r,i[o]+(n-ps[o])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Ma(i,t,e,n,s){const r=i.length;ps.length<r&&(ps=new Float64Array(r),ta=new Float64Array(r),ea=new Float64Array(r));const o=Sg.crossVectors(ou,e).normalize(),a=Ag.crossVectors(e,o).normalize(),c=Math.tan(s),u=Math.tan(n);for(let b=0;b<r;b++)$i.subVectors(i[b],t),ps[b]=$i.dot(e),ta[b]=$i.dot(o),ea[b]=$i.dot(a);const h=Math.max(Math.max(np(ta,r,c),np(ea,r,u))*(1+yg),Mg),[l,d]=ip(ta,r,c,h),[p,g]=ip(ea,r,u,h);return{dist:h,offset:new k().addScaledVector(o,l).addScaledVector(a,p),slack:new qt(d,g)}}function TC(i,t,e,n,s){const r=Sg.crossVectors(ou,e).normalize(),o=Ag.crossVectors(e,r).normalize(),a=Math.tan(s),c=Math.tan(n);let u=0;for(const h of i){$i.subVectors(h,t);const l=$i.dot(e);u=Math.max(u,Math.abs($i.dot(r))/a+l,Math.abs($i.dot(o))/c+l)}return Math.max(u*(1+yg),Mg)}function Eg(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+Kr)?!0:r>s*(1+Kr)?!1:n}function Tg(i,t,e=cr,n=lr){const s=new dn().setFromPoints(i),r=s.getCenter(new k),o=s.getSize(new k),{vHalf:a,hHalf:c}=Da(t),u=e*Math.PI/180,h=n*Math.PI/180,l=Ma(i,r,ya(u,h),a,c).dist,d=Ma(i,r,ya(u,h+Math.PI/2),a,c).dist,p=Eg(o.x,o.z,t.aspect<1,d<l*(1-Kr));return{dist:p?d:l,alt:p}}function Qc(i,t,e,n=cr,s=lr){const{dist:r}=Tg(i,t,n,s);return 2*r*Math.tan(Da(t).vHalf)/e}function sp(i=cr){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const El=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),rp=.6,wC=.8,RC=30,CC=lr,IC=12,op=1.03,PC=1.5;function LC(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return op+(1-op)*(e*e*(3-2*e))}const DC=2,Tl=.5,FC=i=>{const t=Math.floor(Math.max(i,0)/Tl)*Tl;return[t,t+DC]},NC=.25,UC=.06;function OC(i,t){const e=new k;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(NC)}class kC{constructor(t,e=cr,n=lr){sn(this,"target",new k);sn(this,"wanted",new k);sn(this,"useAlt",!1);sn(this,"pushAt",-1);sn(this,"pushFor",0);sn(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:LC(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new dn().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new k),o=s.getSize(new k),{vHalf:a,hHalf:c}=Da(this.camera),u=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?u:this.elevAt+(u-this.elevAt)*El(e,rp);const h=this.elevAt*Math.PI/180,l=(n.azDeg??this.azDeg)*Math.PI/180,d=l+Math.PI/2,p=ya(h,l),g=ya(h,d),b=Ma(t,r,p,a,c),m=Ma(t,r,g,a,c);!this.useAlt&&m.dist<b.dist*(1-Kr)?this.useAlt=!0:this.useAlt&&b.dist<m.dist*(1-Kr)?this.useAlt=!1:this.useAlt=Eg(o.x,o.z,this.camera.aspect<1,this.useAlt);const f=this.useAlt?m:b,v=this.useAlt?g:p,M=n.lookAt?r:r.clone().add(f.offset),y=n.lookAt?TC(t,r,v,a,c):f.dist;if(n.breath&&!n.lookAt){const C=new k().crossVectors(ou,v).normalize(),P=new k().crossVectors(v,C).normalize(),A=UC*f.dist,S=(L,B)=>{const z=Math.min(B,A);return Math.min(Math.max(L,-z),z)};M.addScaledVector(C,S(n.breath.dot(C),f.slack.x)).addScaledVector(P,S(n.breath.dot(P),f.slack.y))}const E=y*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(v).multiplyScalar(E).add(M);const w=El(e,rp);this.camera.position.lerp(this.wanted,w),this.target.lerp(M,w),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const BC=1.8,GC=34,zC=844,HC=1,wg=4;function ap(i,t,e=cr,n=lr){const{vHalf:s}=Da(t),r=e*Math.PI/180,{dist:o}=Tg(i,t,e,n),a=GC*2*o*Math.tan(s)/(zC*BC*Math.cos(r));return Math.min(wg,Math.max(HC,a))}function VC(i,t,e,n=cr,s=lr,r=wg){const o=h=>Vr(i,Math.min(r,h));let a=o(ap(t,e,n,s)),c=0,u=0;for(let h=0;h<8;h++){c++;const l=o(ap([...t,...ll(i,a)],e,n,s));if(u=Math.abs(l-a)/a,a=l,u<=.005)break}return{scale:a,rounds:c,residual:u,framed:[...t,...ll(i,a)]}}class WC{constructor(){sn(this,"last",-1);sn(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const Lr={clips:0,schedule:0,build:0};let cp=null;function jC(){return cp??(cp=fetch(Pi("assets/clips_ochi.json")).then(i=>i.json()).then(i=>Gm(i)).catch(i=>{throw cp=null,i}))}let lp=null;function XC(i){return lp??(lp=Hl().loadAsync(Pi("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw lp=null,t}))}function qC(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}const Rg="coach";function KC(i){return i.team===Rg||i.number===void 0?void 0:String(i.number)}function $C(i){const t=Object.keys(i);return t.includes("white")?"white":t.find(e=>e!==Rg)??t[0]}const YC=i=>i==="boys"||i==="girls";async function ZC(i,t,e,n=bm){if(!YC(e))return;let s=null;try{s=await n(e)}catch{s=null}return QC(i,t,s)}const JC=(i,t,e)=>i===t&&e!==void 0;function QC(i,t,e){if(!(e!=null&&e.length))return;let n=0;return i.map((s,r)=>s.team===t?e[n++%e.length]:r)}async function pI(i,t,e={}){var Jn,Ni,Ui;const n=performance.now(),s=sS(i),r=await jC();Lr.clips=performance.now()-n;const o=e.stage??sA(t),a=new bn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([Rt,R])=>new k(Rt*s.pitch.width/2,0,R*s.pitch.length/2)),u=s.players.map(Rt=>new k(Rt.start[0]-s.pitch.width/2,0,Rt.start[1]-s.pitch.length/2)),h=[...c,...u],l=()=>e.bodyScale??VC(s,h,o.camera,e.elev,e.az).scale,d=Rt=>[...h,...ll(s,Rt)],p=o.size();let g=l(),b=d(g);zd(.35*g);let m=Vr(s,g);const f=performance.now(),v=((Jn=e.schedules)==null?void 0:Jn.get(m))??WT(s,r,m);(Ni=e.schedules)==null||Ni.set(m,v),Lr.schedule=performance.now()-f;const M=bS(s),y=(Rt=e.elev??0)=>Rt>=ep?[...b,...M]:b;let E=Qc(y(),o.camera,o.size().height,e.elev,e.az),w=sp(e.elev);const C=CS(s.pitch.width,s.pitch.length),{toWorld:P,goals:A,cones:S,boards:L,setWorld:B,setMasts:z}=await ZS(a,s,o.renderer.capabilities.getMaxAnisotropy(),g,C),X=MC(A,_C(v.flights),P);let V=b.slice(h.length);o.fitShadow(b),o.setFog(wS(s.pitch.width,s.pitch.length)),o.setHorizon(C),o.setSky(!1);const O=$C(s.teams),H=await Ta(a,s.players.length,void 0,void 0,0,await ZC(s.players,O,e.squad)),G=e.kit?await vm(e.kit.pattern,s.players.flatMap((Rt,R)=>Rt.team===O?xm(H[R]):[])):null,Q=await ym(),Y=new Map,ut=new Map;s.players.forEach((Rt,R)=>{const x=H[R];Y.set(Rt.id,x),x.root.rotation.order="YXZ",x.root.scale.setScalar(g);const nt=JC(Rt.team,O,e.kit),K=s.teams[Rt.team].kit.primary;Sm(x,nt?e.kit:K,nt?G:null,{label:KC(Rt),boxes:Q,base:K}),x.root.position.copy(P(Rt.start));const _=hS(.9);_.scale.setScalar(g),_.position.x=x.root.position.x,_.position.z=x.root.position.z,a.add(_),ut.set(Rt.id,_)});const St=(await XC()).clone();St.scale.setScalar(g),a.add(St);const Ct=Yf({root:a,mesh:St,bodyScale:g,radius:.11*g,resolution:o.size()}),at=!!s.ball,_t=fa(s);at||(St.visible=!1,Ct.hide());const ct=Array.from({length:(((Ui=s.balls)==null?void 0:Ui.length)??0)+v.ballSwaps.length},()=>St.clone()),J=ct.map(Rt=>(Rt.scale.setScalar(g),a.add(Rt),Yf({root:a,mesh:Rt,bodyScale:g,radius:.11*g,resolution:o.size(),streak:!1}))),vt=new kC(o.camera,e.elev,e.az);vt.armPushIn(PC,performance.now()/1e3);let Tt="fit",Nt=-1,ee=[];const Vt=new k,le=new k,W=new k;let Se=!1,ie=[],te=-1/0;const Dt=new cw(s.duration,e.loop??!0),be=new WC,At=new Map(s.players.map(Rt=>[Rt.id,Rt.role])),D=nw(s.players,v,s.duration,_t),T=aw(r,v.anims,At,v.bounces,e.inertial,D.ready),{applyAnim:q,cueAt:ot}=T,xt=lw(v.turns,s.players.map(Rt=>[Rt.id,Rt.role==="keeper"?Le(Rt.start,_t):0])),it=xt.heading,Lt=xt.rateOf,Et=new Map(s.players.map(Rt=>[Rt.id,Rt.start])),Ut=Array.from({length:qc},()=>new Map),de=new Map,wt=Bw(),Gt=new Map;for(const Rt of v.departures)(Gt.get(Rt.player)??Gt.set(Rt.player,[]).get(Rt.player)).push(Rt.contact);for(const Rt of v.arrivals)(Gt.get(Rt.player)??Gt.set(Rt.player,[]).get(Rt.player)).push(Rt.at);const Xt=s.players.map(Rt=>Rt.id);function $t(){const Rt=new Set(a.children);return{built:dC({scene:a,drill:s,schedule:v,clips:r,headingAt:x=>it.get(x)??0,search:e.search,pathM:E,pathWidthK:w,ballRadius:.11*g,goalScale:m}),owned:a.children.filter(x=>!Rt.has(x))}}let Ot=$t();const fe={},oe={update:(Rt,R)=>Ot.built.update(Rt,R),set:Rt=>{Object.assign(fe,Rt),Ot.built.set(Rt)}};function Ae(){for(const Rt of Ot.owned)a.remove(Rt),nm(Rt);Ot=$t(),Ot.built.set(fe)}const $=Mw(),It=[],ft=Cw(),Mt=()=>{ft.reset(),$.reset(),T.reset()};Dt.onSeek(Mt),Dt.onLoop(Mt);const Bt=NR(Dt);function Ft(){const Rt=l();if(Rt!==g){g=Rt,b=d(g),V=b.slice(h.length),m=Vr(s,g),zd(.35*g);for(const R of Y.values())R.root.scale.setScalar(g);for(const R of ut.values())R.scale.setScalar(g);St.scale.setScalar(g);for(const R of ct)R.scale.setScalar(g);for(const R of S)R.scale.setScalar(g);for(const R of L)Zp(R,g);for(const R of A)R.scale.setScalar(m);o.fitShadow(b),Mt()}Ct.resize(g,.11*g,o.size());for(const R of J)R.resize(g,.11*g,o.size());E=Qc(y(vt.elev),o.camera,o.size().height,vt.elev,vt.az),Ae(),o.rule.wake()}let Qt=0;const ke=o.onBox(()=>{Qt||(Qt=requestAnimationFrame(()=>{Qt=0,Ft()}))}),We=o.size();(We.width!==p.width||We.height!==p.height)&&Ft();const ve=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:Y,heading:it,camera:o.camera,ball:St,spare:ct,schedule:v,goals:A,bodyScale:g,lockDbg:ve,clips:r,cueAt:ot,inert:T.inert},__pathMetrics:()=>({metresPerPx:E,widthK:w,runHalfM:1.6*E*w/2,passHalfM:2.2*E*w/2})});function ln(Rt,R=30,x=.12,nt=4,K=1){const _=[];for(const[Z,tt]of Y)tt.root.traverse(lt=>{lt.isBone&&/foot/i.test(lt.name)&&_.push({id:Z,name:lt.name,bone:lt})});Dt.pause(),Dt.seek(0);for(let Z=0;Z<90;Z++)o.step(1/60);Dt.play();const I=1/R,F=Math.min(Rt??s.duration,s.duration),U=Math.max(0,Math.round(F*R)-1),N=_.map(()=>[]),j=new k;for(let Z=0;Z<=U;Z++){for(let tt=0;tt<_.length;tt++){const lt=_[tt].bone.matrixWorld.elements;j.set(lt[12],lt[13],lt[14]);const yt=Y.get(_[tt].id).root.worldToLocal(j.clone());N[tt].push([Z*I,lt[12],lt[13],lt[14],yt.x,yt.z])}o.step(I)}Dt.pause();const et=(Z,tt)=>{var lt;return((lt=ot(Z,tt))==null?void 0:lt.clip)??"idle"},ht=[];return _.forEach((Z,tt)=>{const lt=(st,rt)=>{if(rt-st<nt)return;const pt=N[tt].slice(st,rt);let mt=0,gt=0;for(let kt=1;kt<pt.length;kt++)mt=Math.max(mt,Math.hypot(pt[kt][1]-pt[0][1],pt[kt][3]-pt[0][3])),gt+=Math.hypot(pt[kt][4]-pt[kt-1][4],pt[kt][5]-pt[kt-1][5])/I;ht.push({player:Z.id,foot:Z.name,t0:+pt[0][0].toFixed(2),t1:+pt[pt.length-1][0].toFixed(2),drift:+mt.toFixed(3),localSpeed:+(gt/(pt.length-1)).toFixed(2),clip0:et(Z.id,pt[0][0]),clip1:et(Z.id,pt[pt.length-1][0])})},yt=N[tt].map((st,rt)=>rt===0?1/0:Math.hypot(st[1]-N[tt][rt-1][1],st[3]-N[tt][rt-1][3])/I);let dt=-1;N[tt].forEach((st,rt)=>{const pt=st[2]<x,mt=rt>0&&et(Z.id,st[0])!==et(Z.id,N[tt][rt-1][0]),gt=yt[rt]>K&&rt>0&&yt[rt-1]>K;dt>=0&&(!pt||mt||gt)&&(lt(dt,rt),dt=-1),dt<0&&pt&&yt[rt]<K&&(dt=rt)}),dt>=0&&lt(dt,N[tt].length)}),ht.sort((Z,tt)=>tt.drift-Z.drift),{feet:_.map(Z=>({id:Z.id,name:Z.name})),hPlant:x,fps:R,phases:ht}}e.embed||Object.assign(window,{__footAudit:ln}),e.embed&&o.rule.enable();const fn=new Map,Li=new k;let Zn=0;const wn=e.sfx?LR(v.flights):[];let ui=0;o.scene.add(a);const Di=(Rt,R)=>{var ht,Z,tt,lt,yt,dt;Dt.advance(Rt);const x=Dt.t,nt=Dt.playing?Rt:0,K=v.attachTo(x),_=ca({t:x,holderId:K,holderRoot:K?Et.get(K):null,holderHeading:K?it.get(K):0,ballStart:_t,flights:v.flights,departures:v.departures,arrivals:v.arrivals}).pos,I=new Set;K&&I.add(K);for(const[st,rt]of Gt)rt.some(pt=>Math.abs(x-pt)<=Uw)&&I.add(st);for(const st of s.players){const rt=v.moves[st.id]??[];for(let mt=0;mt<qc;mt++)Ut[mt].set(st.id,((ht=Ki(rt,x+Nw*mt/(qc-1)))==null?void 0:ht.pos)??st.start);const pt=Ki(rt,x);de.set(st.id,pt?Math.hypot(pt.vel[0],pt.vel[1]):0)}const F=wt.step(Xt,Ut,I,Dw*g,x,nt,de);for(const st of s.players){const rt=Y.get(st.id);let pt=st.start,mt=0;const gt=Ki(v.moves[st.id]??[],x);gt&&(pt=gt.pos,mt=gt.speed);const kt=Bm(v.dives,v.moves[st.id],st.id,x),jt=kt!==null;kt&&(pt=kt);const we=F.get(st.id);we&&!jt&&(we[0]||we[1])&&(pt=[pt[0]+we[0],pt[1]+we[1]]),rt.root.position.copy(P(pt));const Ht=v.moves[st.id]??[],ne=jt?0:BA(Ht,x+Tf);rt.root.rotation.x=0,rt.root.rotation.z=0,jt||(rt.root.position.y-=VA(Ht,x)-ST(v.bounces,st.id,x)*g),Et.set(st.id,pt);let ae=null,ue=!1;for(const Yt of v.faces)Yt.player===st.id&&x>=Yt.t0&&(ae=Yt.until===void 0||x<=Yt.until?Yt.at:null,Yt.lock&&x>=Yt.lock[0]&&x<=Yt.lock[1]&&(ue=!0));const bt=ae!==null&&Ai(pt,ae),Zt=JA(pt,_,bt,st.id===K),se=bt?Le(pt,ae):Zt??it.get(st.id),{h:Jt,clipYaw:Ue}=xt.step(st.id,x,nt,mt,se,ue,!bt&&Zt!==null);rt.root.rotation.y=WA(Jt,Ue),q(st.id,rt,x,nt,mt);const Pe=pl(rt);if(Pe.length){const Yt=ft.tilt(st.id,jt?[0,0]:OA(Ht,x+Tf),it.get(st.id),ne,nt);Cf(rt.root,Pe[0],Yt.pitch,0,Yt.roll)}const ge=pm(rt);if(ge.length&&!jt){rt.root.updateMatrixWorld(!0);for(let Re=0;Re<ge.length;Re++){const De=ge[Re].matrixWorld.elements;It[Re]=[De[12],De[13],De[14]]}It.length=ge.length;const Yt=ot(st.id,x),ye=yw((Yt==null?void 0:Yt.clip)??null,Yt?(Z=r.clips[Yt.clip])==null?void 0:Z.category:void 0,xw(Ht,x)),[Ve,Te]=$.step(st.id,It,[rt.root.position.x,rt.root.position.z],x,nt,ye,g);rt.root.position.x+=Ve,rt.root.position.z+=Te,ve&&ve.set(st.id,[ye?1:0,Math.hypot(Ve,Te),$.foot(st.id),mt,$.rootSpeed(st.id)])}const Wt=ut.get(st.id);if(Wt.position.x=rt.root.position.x,Wt.position.z=rt.root.position.z,st.id===K){const Yt=RR(v.arrivals,st.id,x),ye=Yt>=0?mm(rt)[Yt]:void 0;if(ye){rt.root.updateMatrixWorld(!0);const Ve=ye.matrixWorld.elements;Li.set(Ve[12],Ve[13],Ve[14]),Zn=fg(v.arrivals,v.departures,st.id,x)}}}const U=ca({t:x,holderId:K,holderRoot:K?Et.get(K):null,holderHeading:K?it.get(K):0,ballStart:_t,flights:v.flights,departures:v.departures,arrivals:v.arrivals});St.position.copy(P(U.pos,.11*g+U.height)),Zn>0&&(St.position.lerp(Li,Zn),Zn=0),at&&Ct.update({pos:St.position,height:U.height,t:x,dt:nt,apex:U.apex,speed:U.speed,held:K!==null&&CR(v.arrivals,v.departures,K,x)});for(let st=0;st<ct.length;st++){const rt=(tt=s.balls)==null?void 0:tt[st],pt=rt?v.ballSwaps.find(kt=>kt.take===st):v.ballSwaps[st-(((lt=s.balls)==null?void 0:lt.length)??0)],mt=rt?!(pt&&x>=pt.t):x>=pt.t;if(ct[st].visible=mt,!mt){J[st].hide();continue}let gt;rt?rt.carrier&&Et.has(rt.carrier)?gt=Wn(Et.get(rt.carrier),it.get(rt.carrier)??0):gt=Pm(rt,x):gt=pt.drop,ct[st].position.copy(P(gt,.11*g)),J[st].update({pos:ct[st].position,height:0,t:x,dt:nt,held:!1,speed:0})}e.sfx&&(Bt(e.sfx,wn,ui,x,Dt.playing,U.height,U.speed),ui=x),oe.update(x,o.camera),X.update(x);for(const st of s.players){const rt=Y.get(st.id),pt=fm(rt);if(!pt)continue;const mt=uT(v.faces,st.id,x),gt=mt?P(mt):St.position,kt=D.scan(st.id,x,!ot(st.id,x)&&st.id!==K&&st.role!=="keeper"),jt=jA(Math.atan2(gt.x-rt.root.position.x,gt.z-rt.root.position.z)-it.get(st.id)+YA(Lt.get(st.id)??0)+kt.yaw,58*Math.PI/180+kt.env*(ew-58*Math.PI/180),.85+.15*kt.env),we=fn.get(st.id)??0,Ht=qA(we,jt,nt);fn.set(st.id,Ht);const ne=pl(rt),ae=ne.length>1?ft.shoulder(st.id,Ht,nt):0;ne.length>1&&Cf(rt.root,ne[1],0,ae,0),Lw(pt,-(Ht-ae))}const N=[...Y.values()].map(st=>new k(st.root.position.x,0,st.root.position.z)),j=o.rule.snap()?1/0:Rt,et=R/1e3;if(Tt==="broadcast"){let st=-1/0;for(const pt of v.departures)x>=pt.contact&&pt.contact>st&&(st=pt.contact);st!==te&&(te=st,ie=s.players.filter(pt=>P(Et.get(pt.id)??pt.start).distanceTo(St.position)<=IC).map(pt=>pt.id)),!Se||j===1/0?(W.copy(St.position),Se=!0):W.lerp(St.position,El(Rt,wC));const rt=ie.length?ie.map(pt=>{const mt=Y.get(pt);return new k((mt==null?void 0:mt.root.position.x)??0,0,(mt==null?void 0:mt.root.position.z)??0)}):N;vt.frame([...rt,St.position.clone()],j,{now:et,lookAt:W.clone(),elevDeg:RC,azDeg:CC})}else{const[st,rt]=FC(x);if(st!==Nt){Nt=st,ee=[];const pt=[];for(let mt=st;mt<=rt+1e-9;mt+=Tl){const gt=new Map;for(const Ht of s.players){const ne=((yt=Ki(v.moves[Ht.id]??[],mt))==null?void 0:yt.pos)??Ht.start;gt.set(Ht.id,ne);const ae=P(ne);ee.push(new k(ae.x,0,ae.z)),Math.abs(ae.x)<=s.pitch.width/2&&Math.abs(ae.z)<=s.pitch.length/2&&pt.push(new k(ae.x,0,ae.z))}const kt=v.attachTo(mt),jt=ca({t:mt,holderId:kt,holderRoot:kt?gt.get(kt)??null:null,holderHeading:kt?it.get(kt)??0:0,ballStart:_t,flights:v.flights,departures:v.departures,arrivals:v.arrivals}),we=P(jt.pos);pt.push(new k(we.x,0,we.z))}Vt.copy(OC(pt,le))}N.push(...ee),N.push(...c,...V),vt.elevNow>=ep&&N.push(...M),vt.frame([...N,St.position.clone()],j,{now:et,breath:Vt})}be.tick(R),qC(!!e.embed,`t ${x.toFixed(1)}s  fps ${be.avg.toFixed(0)}
[space] play/pause  [r] restart`),(dt=e.onFrame)==null||dt.call(e,x,R)};o.start(Di);const Fi=Rt=>{Rt.code==="Space"&&(Dt.playing?Dt.pause():Dt.play()),Rt.code==="KeyR"&&Dt.seek(0)};e.embed||addEventListener("keydown",Fi);function hi(Rt){Rt!==Tt&&(Tt=Rt,B(!0),o.setSky(Rt==="broadcast"),z(Rt==="broadcast"),Se=!1,te=-1/0,o.rule.wake())}function Zi(Rt,R=vt.az){Rt===vt.elev&&R===vt.az||(vt.setElev(Rt),vt.setAz(R),E=Qc(y(Rt),o.camera,o.size().height,Rt,R),w=sp(Rt),Ae(),o.rule.wake())}return Lr.build=performance.now()-n-Lr.clips-Lr.schedule,{timeline:Dt,step:Rt=>o.step(Rt),stage:o,overlays:oe,setCamera:Zi,setFollow:hi,setPushIn:Rt=>vt.armPushIn(Rt,performance.now()/1e3),dispose(){removeEventListener("keydown",Fi),ke(),Qt&&(cancelAnimationFrame(Qt),Qt=0),o.scene.remove(a),rA(a,[...H.map(Rt=>Rt.root),St,...ct,...A]),G==null||G.dispose(),o.setFog(null),o.setHorizon(null),o.setSky(!0),e.stage?o.park(Di):o.dispose()}}}export{iI as $,sI as A,gs as B,Kt as C,Fp as D,Sm as E,P0 as F,bn as G,fl as H,lm as I,Xe as J,gm as K,m_ as L,Me as M,Ce as N,Tp as O,cm as P,rA as Q,DA as R,Jh as S,Dp as T,ze as U,k as V,rI as W,nI as X,Nl as Y,LA as Z,Tn as _,Pi as a,nm as a0,fI as a1,uI as b,sA as c,dm as d,hI as e,cI as f,Lr as g,dn as h,aI as i,_n as j,Jy as k,eI as l,Zh as m,da as n,oI as o,lI as p,bs as q,pI as r,am as s,dI as t,Ta as u,MA as v,vm as w,xm as x,$h as y,ym as z};
