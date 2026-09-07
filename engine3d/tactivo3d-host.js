var sp=Object.defineProperty;var rp=(i,t,e)=>t in i?sp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Pe=(i,t,e)=>rp(i,typeof t!="symbol"?t+"":t,e);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zc="attached",ap="detached";const Oe="srgb",gn="srgb-linear",pa="linear",Fe="srgb";const Hc="300 es";class Ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const er=Math.PI/180,ys=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function oc(i,t){return(i%t+t)%t}function op(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cp(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function lp(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function hp(i,t=1){return t-Math.abs(oc(i,t*2)-t)}function up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pp(i,t){return i+Math.random()*(t-i)}function mp(i){return i*(.5-Math.random())}function gp(i){i!==void 0&&(Vc=i);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(i){return i*er}function bp(i){return i*ys}function xp(i){return(i&i-1)===0&&i!==0}function vp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const hd={DEG2RAD:er,RAD2DEG:ys,generateUUID:Bn,clamp:me,euclideanModulo:oc,mapLinear:op,inverseLerp:cp,lerp:nr,damp:lp,pingpong:hp,smoothstep:up,smootherstep:dp,randInt:fp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:_p,radToDeg:bp,isPowerOfTwo:xp,ceilPowerOfTwo:vp,floorPowerOfTwo:yp,setQuaternionFromProperEuler:Mp,normalize:Le,denormalize:On};class Qt{constructor(t=0,e=0){Qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,e,n,s,r,a,o,c,l){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],m=n[8],_=s[0],g=s[3],f=s[6],x=s[1],A=s[4],v=s[7],T=s[2],w=s[5],R=s[8];return r[0]=a*_+o*x+c*T,r[3]=a*g+o*A+c*w,r[6]=a*f+o*v+c*R,r[1]=l*_+u*x+h*T,r[4]=l*g+u*A+h*w,r[7]=l*f+u*v+h*R,r[2]=d*_+p*x+m*T,r[5]=d*g+p*A+m*w,r[8]=d*f+p*v+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,m=e*h+n*d+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Fa.makeScale(t,e)),this}rotate(t){return this.premultiply(Fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new fe;function ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sp(){const i=rr("canvas");return i.style.display="block",i}const Wc={};function ms(i){i in Wc||(Wc[i]=!0,console.warn(i))}function Ap(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ep(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xc=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wp(){const i={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Fe&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Fe&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[gn]:{primaries:t,whitePoint:n,transfer:pa,toXYZ:Xc,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:Fe,toXYZ:Xc,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}const Se=wp();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class Rp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=rr("canvas")),$i.width=t.width,$i.height=t.height;const n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cp=0;class dd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Na(s[a].image)):r.push(Na(s[a]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pp=0;class Ke extends Ki{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=1001,s=1001,r=1006,a=1008,o=1023,c=1009,l=Ke.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Bn(),this.name="",this.source=new dd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=300;Ke.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],m=c[9],_=c[2],g=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(l+1)/2,v=(p+1)/2,T=(f+1)/2,w=(u+d)/4,R=(h+_)/4,D=(m+g)/4;return A>v&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=D/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=D/r),this.set(n,s,r,e),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ip extends Ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new dd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class fd extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Lp extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],m=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(h!==_||c!==d||l!==p||u!==m){let g=1-o;const f=c*d+l*p+u*m+h*_,x=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const T=Math.sqrt(A),w=Math.atan2(T,f*x);g=Math.sin(g*w)/T,o=Math.sin(o*w)/T}const v=o*x;if(c=c*g+d*v,l=l*g+p*v,u=u*g+m*v,h=h*g+_*v,g===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return t[e]=o*m+u*h+c*p-l*d,t[e+1]=c*m+u*d+l*h-o*p,t[e+2]=l*m+u*p+o*d-c*h,t[e+3]=u*m-o*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"YXZ":this._x=d*u*h+l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"ZXY":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h-d*p*m;break;case"ZYX":this._x=d*u*h-l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h+d*p*m;break;case"YZX":this._x=d*u*h+l*p*m,this._y=l*p*h+d*u*m,this._z=l*u*m-d*p*h,this._w=l*u*h-d*p*m;break;case"XZY":this._x=d*u*h-l*p*m,this._y=l*p*h-d*u*m,this._z=l*u*m+d*p*h,this._w=l*u*h+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(me(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new N,qc=new rn;class un{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),gr.subVectors(this.max,Ds),Yi.subVectors(t.a,Ds),Zi.subVectors(t.b,Ds),Ji.subVectors(t.c,Ds),li.subVectors(Zi,Yi),hi.subVectors(Ji,Zi),Si.subVectors(Yi,Ji);let e=[0,-li.z,li.y,0,-hi.z,hi.y,0,-Si.z,Si.y,li.z,0,-li.x,hi.z,0,-hi.x,Si.z,0,-Si.x,-li.y,li.x,0,-hi.y,hi.x,0,-Si.y,Si.x,0];return!Oa(e,Yi,Zi,Ji,gr)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Yi,Zi,Ji,gr))?!1:(_r.crossVectors(li,hi),e=[_r.x,_r.y,_r.z],Oa(e,Yi,Zi,Ji,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Yn=[new N,new N,new N,new N,new N,new N,new N,new N],Dn=new N,mr=new un,Yi=new N,Zi=new N,Ji=new N,li=new N,hi=new N,Si=new N,Ds=new N,gr=new N,_r=new N,Ai=new N;function Oa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),u=n.dot(Ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Dp=new un,Fs=new N,ka=new N;class In{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(ka)),this.expandByPoint(Fs.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new N,Ba=new N,br=new N,ui=new N,Ga=new N,xr=new N,za=new N;class Ta{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ba.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=ui.dot(this.direction),c=-ui.dot(br),l=ui.lengthSq(),u=Math.abs(1-a*a);let h,d,p,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ba).addScaledVector(br,d),p}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){Ga.subVectors(e,t),xr.subVectors(n,t),za.crossVectors(Ga,xr);let a=this.direction.dot(za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);const c=o*this.direction.dot(xr.crossVectors(ui,xr));if(c<0)return null;const l=o*this.direction.dot(Ga.cross(ui));if(l<0||c+l>a)return null;const u=-o*ui.dot(za);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,c,l,u,h,d,p,m,_,g){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,p,m,_,g)}set(t,e,n,s,r,a,o,c,l,u,h,d,p,m,_,g){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=m,f[11]=_,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,p=a*h,m=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+p*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,m=l*u,_=l*h;e[0]=d+_*o,e[4]=m*o-p,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,m=l*u,_=l*h;e[0]=d-_*o,e[4]=-a*h,e[8]=m+p*o,e[1]=p+m*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,p=a*h,m=o*u,_=o*h;e[0]=c*u,e[4]=m*l-p,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=p*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,p=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=_-d*h,e[8]=m*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*h+m,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*c,p=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=a*u,e[9]=p*h-m,e[2]=m*h-p,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fp,t,Np)}lookAt(t,e,n){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),di.crossVectors(n,xn),di.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),di.crossVectors(n,xn)),di.normalize(),vr.crossVectors(xn,di),s[0]=di.x,s[4]=vr.x,s[8]=xn.x,s[1]=di.y,s[5]=vr.y,s[9]=xn.y,s[2]=di.z,s[6]=vr.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],m=n[2],_=n[6],g=n[10],f=n[14],x=n[3],A=n[7],v=n[11],T=n[15],w=s[0],R=s[4],D=s[8],M=s[12],S=s[1],I=s[5],V=s[9],F=s[13],U=s[2],K=s[6],O=s[10],H=s[14],L=s[3],tt=s[7],Y=s[11],nt=s[15];return r[0]=a*w+o*S+c*U+l*L,r[4]=a*R+o*I+c*K+l*tt,r[8]=a*D+o*V+c*O+l*Y,r[12]=a*M+o*F+c*H+l*nt,r[1]=u*w+h*S+d*U+p*L,r[5]=u*R+h*I+d*K+p*tt,r[9]=u*D+h*V+d*O+p*Y,r[13]=u*M+h*F+d*H+p*nt,r[2]=m*w+_*S+g*U+f*L,r[6]=m*R+_*I+g*K+f*tt,r[10]=m*D+_*V+g*O+f*Y,r[14]=m*M+_*F+g*H+f*nt,r[3]=x*w+A*S+v*U+T*L,r[7]=x*R+A*I+v*K+T*tt,r[11]=x*D+A*V+v*O+T*Y,r[15]=x*M+A*F+v*H+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],m=t[3],_=t[7],g=t[11],f=t[15];return m*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+_*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+g*(+e*l*h-e*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],m=t[12],_=t[13],g=t[14],f=t[15],x=h*g*l-_*d*l+_*c*p-o*g*p-h*c*f+o*d*f,A=m*d*l-u*g*l-m*c*p+a*g*p+u*c*f-a*d*f,v=u*_*l-m*h*l+m*o*p-a*_*p-u*o*f+a*h*f,T=m*h*c-u*_*c-m*o*d+a*_*d+u*o*g-a*h*g,w=e*x+n*A+s*v+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=x*R,t[1]=(_*d*r-h*g*r-_*s*p+n*g*p+h*s*f-n*d*f)*R,t[2]=(o*g*r-_*c*r+_*s*l-n*g*l-o*s*f+n*c*f)*R,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*R,t[4]=A*R,t[5]=(u*g*r-m*d*r+m*s*p-e*g*p-u*s*f+e*d*f)*R,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*f-e*c*f)*R,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*p+e*c*p)*R,t[8]=v*R,t[9]=(m*h*r-u*_*r-m*n*p+e*_*p+u*n*f-e*h*f)*R,t[10]=(a*_*r-m*o*r+m*n*l-e*_*l-a*n*f+e*o*f)*R,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*p-e*o*p)*R,t[12]=T*R,t[13]=(u*_*s-m*h*s+m*n*d-e*_*d-u*n*g+e*h*g)*R,t[14]=(m*o*s-a*_*s-m*n*c+e*_*c+a*n*g-e*o*g)*R,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,m=r*h,_=a*u,g=a*h,f=o*h,x=c*l,A=c*u,v=c*h,T=n.x,w=n.y,R=n.z;return s[0]=(1-(_+f))*T,s[1]=(p+v)*T,s[2]=(m-A)*T,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(d+f))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+A)*R,s[9]=(g-x)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const a=Qi.set(s[4],s[5],s[6]).length(),o=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Fn.copy(this);const l=1/r,u=1/a,h=1/o;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,e.setFromRotationMatrix(Fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=2e3){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let p,m;if(o===2e3)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===2001)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=2e3){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,p=(n+s)*u;let m,_;if(o===2e3)m=(a+r)*h,_=-2*h;else if(o===2001)m=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new N,Fn=new oe,Fp=new N(0,0,0),Np=new N(1,1,1),di=new N,vr=new N,xn=new N,Kc=new oe,$c=new rn;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Up=0;const Yc=new N,ts=new rn,Jn=new oe,yr=new N,Ns=new N,Op=new N,kp=new rn,Zc=new N(1,0,0),Jc=new N(0,1,0),Qc=new N(0,0,1),tl={type:"added"},Bp={type:"removed"},es={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Ue extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new N,e=new Pn,n=new rn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new fe}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return Yc.copy(t).applyQuaternion(this.quaternion),this.position.add(Yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?yr.copy(t):yr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Ns,yr,this.up):Jn.lookAt(yr,Ns,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Jn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tl),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bp),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tl),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Op),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,kp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),p=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new N(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new N,Qn=new N,Va=new N,ti=new N,ns=new N,is=new N,el=new N,Wa=new N,Xa=new N,ja=new N,qa=new be,Ka=new be,$a=new be;class wn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),Qn.subVectors(n,e),Va.subVectors(t,e);const a=Nn.dot(Nn),o=Nn.dot(Qn),c=Nn.dot(Va),l=Qn.dot(Qn),u=Qn.dot(Va),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return qa.setScalar(0),Ka.setScalar(0),$a.setScalar(0),qa.fromBufferAttribute(t,e),Ka.fromBufferAttribute(t,n),$a.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qa,r.x),a.addScaledVector(Ka,r.y),a.addScaledVector($a,r.z),a}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),Qn.subVectors(t,e),Nn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Nn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ns.subVectors(s,n),is.subVectors(r,n),Wa.subVectors(t,n);const c=ns.dot(Wa),l=is.dot(Wa);if(c<=0&&l<=0)return e.copy(n);Xa.subVectors(t,s);const u=ns.dot(Xa),h=is.dot(Xa);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ns,a);ja.subVectors(t,r);const p=ns.dot(ja),m=is.dot(ja);if(m>=0&&p<=m)return e.copy(r);const _=p*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(is,o);const g=u*m-p*h;if(g<=0&&h-u>=0&&p-m>=0)return el.subVectors(r,s),o=(h-u)/(h-u+(p-m)),e.copy(s).addScaledVector(el,o);const f=1/(g+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ya(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Se.workingColorSpace){return this.r=t,this.g=e,this.b=n,Se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Se.workingColorSpace){if(t=oc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ya(a,r,t+1/3),this.g=Ya(a,r,t),this.b=Ya(a,r,t-1/3)}return Se.toWorkingColorSpace(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=md[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Se.fromWorkingColorSpace(cn.copy(this),t),Math.round(me(cn.r*255,0,255))*65536+Math.round(me(cn.g*255,0,255))*256+Math.round(me(cn.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Se.workingColorSpace){Se.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Se.workingColorSpace){return Se.fromWorkingColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Oe){Se.fromWorkingColorSpace(cn.copy(this),t);const e=cn.r,n=cn.g,s=cn.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Mr);const n=nr(fi.h,Mr.h,e),s=nr(fi.s,Mr.s,e),r=nr(fi.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new se;se.NAMES=md;let Gp=0;class Cn extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Je extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new N,Sr=new Qt;class Te{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class gd extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class _d extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ve extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}}let zp=0;const Mn=new oe,Za=new Ue,ss=new N,vn=new un,Us=new un,Ze=new N;class He extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?_d:gd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ve(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(Ze.addVectors(vn.min,Us.min),vn.expandByPoint(Ze),Ze.addVectors(vn.max,Us.max),vn.expandByPoint(Ze)):(vn.expandByPoint(Us.min),vn.expandByPoint(Us.max))}vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ze.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(t,l),Ze.add(ss)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Te(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new N,c[D]=new N;const l=new N,u=new N,h=new N,d=new Qt,p=new Qt,m=new Qt,_=new N,g=new N;function f(D,M,S){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,S),u.sub(l),h.sub(l),p.sub(d),m.sub(d);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-p.y).multiplyScalar(I),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(I),o[D].add(_),o[M].add(_),o[S].add(_),c[D].add(g),c[M].add(g),c[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,M=x.length;D<M;++D){const S=x[D],I=S.start,V=S.count;for(let F=I,U=I+V;F<U;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const A=new N,v=new N,T=new N,w=new N;function R(D){T.fromBufferAttribute(s,D),w.copy(T);const M=o[D];A.copy(M),A.sub(T.multiplyScalar(T.dot(M))).normalize(),v.crossVectors(w,M);const I=v.dot(c[D])<0?-1:1;a.setXYZW(D,A.x,A.y,A.z,I)}for(let D=0,M=x.length;D<M;++D){const S=x[D],I=S.start,V=S.count;for(let F=I,U=I+V;F<U;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)d[m++]=l[p++]}return new Te(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new oe,Ei=new Ta,Ar=new In,il=new N,Er=new N,Tr=new N,wr=new N,Ja=new N,Rr=new N,sl=new N,Cr=new N;class Ae extends Ue{constructor(t=new He,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Rr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ja.fromBufferAttribute(h,t),a?Rr.addScaledVector(Ja,u):Rr.addScaledVector(Ja.sub(e),u))}e.add(Rr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Ar.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ar,il)===null||Ei.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(nl),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],f=a[g.materialIndex],x=Math.max(g.start,p.start),A=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,T=A;v<T;v+=3){const w=o.getX(v),R=o.getX(v+1),D=o.getX(v+2);s=Pr(this,f,t,n,l,u,h,w,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const x=o.getX(g),A=o.getX(g+1),v=o.getX(g+2);s=Pr(this,a,t,n,l,u,h,x,A,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const g=d[m],f=a[g.materialIndex],x=Math.max(g.start,p.start),A=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,T=A;v<T;v+=3){const w=v,R=v+1,D=v+2;s=Pr(this,f,t,n,l,u,h,w,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let g=m,f=_;g<f;g+=3){const x=g,A=g+1,v=g+2;s=Pr(this,a,t,n,l,u,h,x,A,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Hp(i,t,e,n,s,r,a,o){let c;if(t.side===1?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===0,o),c===null)return null;Cr.copy(o),Cr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Cr);return l<e.near||l>e.far?null:{distance:l,point:Cr.clone(),object:i}}function Pr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Er),i.getVertexPosition(c,Tr),i.getVertexPosition(l,wr);const u=Hp(i,t,e,n,Er,Tr,wr,sl);if(u){const h=new N;wn.getBarycoord(sl,Er,Tr,wr,h),s&&(u.uv=wn.getInterpolatedAttribute(s,o,c,l,h,new Qt)),r&&(u.uv1=wn.getInterpolatedAttribute(r,o,c,l,h,new Qt)),a&&(u.normal=wn.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};wn.getNormal(Er,Tr,wr,d.normal),u.face=d,u.barycoord=h}return u}class yi extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(h,2));function m(_,g,f,x,A,v,T,w,R,D,M){const S=v/R,I=T/D,V=v/2,F=T/2,U=w/2,K=R+1,O=D+1;let H=0,L=0;const tt=new N;for(let Y=0;Y<O;Y++){const nt=Y*I-F;for(let pt=0;pt<K;pt++){const zt=pt*S-V;tt[_]=zt*x,tt[g]=nt*A,tt[f]=U,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[g]=0,tt[f]=w>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(pt/R),h.push(1-Y/D),H+=1}}for(let Y=0;Y<D;Y++)for(let nt=0;nt<R;nt++){const pt=d+nt+K*Y,zt=d+nt+K*(Y+1),it=d+(nt+1)+K*(Y+1),et=d+(nt+1)+K*Y;c.push(pt,zt,et),c.push(zt,it,et),L+=6}o.addGroup(p,L,M),p+=L,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){const t={};for(let e=0;e<i.length;e++){const n=Ms(i[e]);for(const s in n)t[s]=n[s]}return t}function Vp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Se.workingColorSpace}const cc={clone:Ms,merge:pn};var Wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Vp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xd extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=2e3}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new N,rl=new Qt,al=new Qt;class mn extends xd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,rl,al),e.subVectors(al,rl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,as=1;class jp extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(rs,as,t,e);s.layers=this.layers,this.add(s);const r=new mn(rs,as,t,e);r.layers=this.layers,this.add(r);const a=new mn(rs,as,t,e);a.layers=this.layers,this.add(a);const o=new mn(rs,as,t,e);o.layers=this.layers,this.add(o);const c=new mn(rs,as,t,e);c.layers=this.layers,this.add(c);const l=new mn(rs,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class vd extends Ke{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:301,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qp extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new vd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yi(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const a=new Ae(s,r),o=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new jp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class lc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new se(t),this.near=e,this.far=n}clone(){return new lc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kp extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class hc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new N;class kn{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kn(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yd extends Cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let os;const Os=new N,cs=new N,ls=new N,hs=new Qt,ks=new Qt,Md=new oe,Ir=new N,Bs=new N,Lr=new N,ol=new Qt,Qa=new Qt,cl=new Qt;class $p extends Ue{constructor(t=new yd){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hc(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new kn(n,3,0,!1)),os.setAttribute("uv",new kn(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new Qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Dr(Ir.set(-.5,-.5,0),ls,a,cs,s,r),Dr(Bs.set(.5,-.5,0),ls,a,cs,s,r),Dr(Lr.set(.5,.5,0),ls,a,cs,s,r),ol.set(0,0),Qa.set(1,0),cl.set(1,1);let o=t.ray.intersectTriangle(Ir,Bs,Lr,!1,Os);if(o===null&&(Dr(Bs.set(-.5,.5,0),ls,a,cs,s,r),Qa.set(0,1),o=t.ray.intersectTriangle(Ir,Lr,Bs,!1,Os),o===null))return;const c=t.ray.origin.distanceTo(Os);c<t.near||c>t.far||e.push({distance:c,point:Os.clone(),uv:wn.getInterpolation(Os,Ir,Bs,Lr,ol,Qa,cl,new Qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(i,t,e,n,s,r){hs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ks.x=r*hs.x-s*hs.y,ks.y=s*hs.x+r*hs.y):ks.copy(hs),i.copy(t),i.x+=ks.x,i.y+=ks.y,i.applyMatrix4(Md)}const ll=new N,hl=new be,ul=new be,Yp=new N,dl=new oe,Fr=new N,to=new In,fl=new oe,eo=new Ta;class Zp extends Ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new oe,this.bindMatrixInverse=new oe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(s),t.ray.intersectsSphere(to)!==!1&&(fl.copy(s).invert(),eo.copy(t.ray).applyMatrix4(fl),!(this.boundingBox!==null&&eo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,eo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new be,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;hl.fromBufferAttribute(s.attributes.skinIndex,t),ul.fromBufferAttribute(s.attributes.skinWeight,t),ll.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=ul.getComponent(r);if(a!==0){const o=hl.getComponent(r);dl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Yp.copy(ll).applyMatrix4(dl),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Sd extends Ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ad extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,c,l=1003,u=1003,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pl=new oe,Jp=new oe;class uc{constructor(t=[],e=[]){this.uuid=Bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new oe)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new oe;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Jp;pl.multiplyMatrices(o,e[r]),pl.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new uc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Ad(e,t,t,1023,1015);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Sd),this.bones.push(a),this.boneInverses.push(new oe().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Go extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const us=new oe,ml=new oe,Nr=[],gl=new un,Qp=new oe,Gs=new Ae,zs=new In;class tm extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Go(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),gl.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(gl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),zs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),ml.multiplyMatrices(n,us),Gs.matrixWorld=ml,Gs.raycast(t,Nr);for(let a=0,o=Nr.length;a<o;a++){const c=Nr[a];c.instanceId=r,c.object=this,e.push(c)}Nr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Go(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ad(new Float32Array(s*this.count),s,this.count,1028,1015));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const no=new N,em=new N,nm=new fe;class Ni{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=no.subVectors(n,e).cross(em.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(no),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nm.getNormalMatrix(t),s=this.coplanarPoint(no).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new In,Ur=new N;class dc{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2e3){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],p=s[8],m=s[9],_=s[10],g=s[11],f=s[12],x=s[13],A=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,g-p,v-f).normalize(),n[1].setComponents(c+r,d+l,g+p,v+f).normalize(),n[2].setComponents(c+a,d+u,g+m,v+x).normalize(),n[3].setComponents(c-a,d-u,g-m,v-x).normalize(),n[4].setComponents(c-o,d-h,g-_,v-A).normalize(),e===2e3)n[5].setComponents(c+o,d+h,g+_,v+A).normalize();else if(e===2001)n[5].setComponents(o,h,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ed extends Cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ma=new N,ga=new N,_l=new oe,Hs=new Ta,Or=new In,io=new N,bl=new N;class fc extends Ue{constructor(t=new He,e=new Ed){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ma.fromBufferAttribute(e,s-1),ga.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;_l.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(_l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=p,g=m-1;_<g;_+=l){const f=u.getX(_),x=u.getX(_+1),A=kr(this,t,Hs,c,f,x);A&&e.push(A)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(p),f=kr(this,t,Hs,c,_,g);f&&e.push(f)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=p,g=m-1;_<g;_+=l){const f=kr(this,t,Hs,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=kr(this,t,Hs,c,m-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(ma.fromBufferAttribute(a,s),ga.fromBufferAttribute(a,r),e.distanceSqToSegment(ma,ga,io,bl)>n)return;io.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(io);if(!(c<t.near||c>t.far))return{distance:c,point:bl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const xl=new N,vl=new N;class im extends fc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)xl.fromBufferAttribute(e,s),vl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xl.distanceTo(vl);t.setAttribute("lineDistance",new Ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sm extends fc{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Td extends Cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yl=new oe,zo=new Ta,Br=new In,Gr=new N;class rm extends Ue{constructor(t=new He,e=new Td){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;yl.copy(s).invert(),zo.copy(t.ray).applyMatrix4(yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=d,_=p;m<_;m++){const g=l.getX(m);Gr.fromBufferAttribute(h,g),Ml(Gr,g,c,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=d,_=p;m<_;m++)Gr.fromBufferAttribute(h,m),Ml(Gr,m,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ml(i,t,e,n,s,r,a){const o=zo.distanceSqToPoint(i);if(o<e){const c=new N;zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Rn extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ln extends Ke{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wd extends Ke{constructor(t,e,n,s,r,a,o,c,l,u=1026){if(u!==1026&&u!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===1026&&(n=1014),n===void 0&&u===1027&&(n=1020),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:1003,this.minFilter=c!==void 0?c:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class pc extends He{constructor(t=[new Qt(0,-.5),new Qt(.5,0),new Qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/e,h=new N,d=new Qt,p=new N,m=new N,_=new N;let g=0,f=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[x+1].x-t[x].x,f=t[x+1].y-t[x].y,p.x=f*1,p.y=-g,p.z=f*0,m.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(m)}for(let x=0;x<=e;x++){const A=n+x*u*s,v=Math.sin(A),T=Math.cos(A);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*v,h.y=t[w].y,h.z=t[w].x*T,a.push(h.x,h.y,h.z),d.x=x/e,d.y=w/(t.length-1),o.push(d.x,d.y);const R=c[3*w+0]*v,D=c[3*w+1],M=c[3*w+0]*T;l.push(R,D,M)}}for(let x=0;x<e;x++)for(let A=0;A<t.length-1;A++){const v=A+x*t.length,T=v,w=v+t.length,R=v+t.length+1,D=v+1;r.push(T,w,D),r.push(R,D,w)}this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2)),this.setAttribute("normal",new Ve(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pc(t.points,t.segments,t.phiStart,t.phiLength)}}class mc extends He{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new N,u=new Qt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Gn extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,p=[],m=[],_=[],g=[];for(let f=0;f<u;f++){const x=f*d-a;for(let A=0;A<l;A++){const v=A*h-r;m.push(v,-x,0),_.push(0,0,1),g.push(A/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const A=x+l*f,v=x+l*(f+1),T=x+1+l*(f+1),w=x+1+l*f;p.push(A,v,w),p.push(v,T,w)}this.setIndex(p),this.setAttribute("position",new Ve(m,3)),this.setAttribute("normal",new Ve(_,3)),this.setAttribute("uv",new Ve(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.widthSegments,t.heightSegments)}}class wa extends He{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,p=new N,m=new Qt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const f=r+g/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,u.push(m.x,m.y)}h+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let f=0;f<n;f++){const x=f+g,A=x,v=x+n+1,T=x+n+2,w=x+1;o.push(A,v,w),o.push(v,T,w)}}this.setIndex(o),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class am extends He{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,s=new N,r=new N;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],d=h.start,p=h.count;for(let m=d,_=d+p;m<_;m+=3)for(let g=0;g<3;g++){const f=o.getX(m+g),x=o.getX(m+(g+1)%3);s.fromBufferAttribute(a,f),r.fromBufferAttribute(a,x),Sl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const u=3*o+l,h=3*o+(l+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Sl(s,r,n)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ve(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Sl(i,t,e){const n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}class fr extends Cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kn extends fr{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ar extends Cn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class om extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cm extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function zi(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cd(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Ho(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=i[o+c]}return s}function gc(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}function lm(i,t,e,n,s=30){const r=i.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],u=l.getValueSize(),h=[],d=[];for(let p=0;p<l.times.length;++p){const m=l.times[p]*s;if(!(m<e||m>=n)){h.push(l.times[p]);for(let _=0;_<u;++_)d.push(l.values[p*u+_])}}h.length!==0&&(l.times=zi(h,l.times.constructor),l.values=zi(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function hm(i,t=0,e=i,n=30){n<=0&&(n=30);const s=e.tracks.length,r=t/n;for(let a=0;a<s;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=i.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===c});if(l===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const p=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=p/3);const m=o.times.length-1;let _;if(r<=o.times[0]){const f=u,x=h-u;_=o.values.slice(f,x)}else if(r>=o.times[m]){const f=m*h+u,x=f+h-u;_=o.values.slice(f,x)}else{const f=o.createInterpolant(),x=u,A=h-u;f.evaluate(r),_=f.resultBuffer.slice(x,A)}c==="quaternion"&&new rn().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let f=0;f<g;++f){const x=f*p+d;if(c==="quaternion")rn.multiplyQuaternionsFlat(l.values,x,_,0,l.values,x);else{const A=p-d*2;for(let v=0;v<A;++v)l.values[x+v]-=_[v]}}}return i.blendMode=2501,i}const um={convertArray:zi,isTypedArray:Rd,getKeyframeOrder:Cd,sortedArray:Ho,flattenJSON:gc,subclip:lm,makeClipAdditive:hm};class pr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class dm extends pr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:r=t,o=2*e-n;break;case 2402:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:a=t,c=2*n-e;break;case 2402:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,f=-d*g+2*d*_-d*m,x=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,A=(-1-p)*g+(1.5+p)*_+.5*m,v=p*g-p*_;for(let T=0;T!==o;++T)r[T]=f*a[u+T]+x*a[l+T]+A*a[c+T]+v*a[h+T];return r}}class Pd extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class fm extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class $n{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zi(e,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zi(t.times,Array),values:zi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Rd(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===2302,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{const h=o*n,d=h-n,p=h+n;for(let m=0;m!==n;++m){const _=e[h+m];if(_!==e[d+m]||_!==e[p+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=2301;class Ts extends $n{constructor(t,e,n){super(t,e,n)}}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=2300;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Id extends $n{}Id.prototype.ValueTypeName="color";class Ss extends $n{}Ss.prototype.ValueTypeName="number";class pm extends pr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e);let l=t*o;for(let u=l+o;l!==u;l+=4)rn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class As extends $n{InterpolantFactoryMethodLinear(t){return new pm(this.times,this.values,this.getValueSize(),t)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends $n{constructor(t,e,n){super(t,e,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=2300;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends $n{}Es.prototype.ValueTypeName="vector";class Vo{constructor(t="",e=-1,n=[],s=2500){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(gm(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Cd(c);c=Ho(c,1,u),l=Ho(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Ss(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,m,_){if(p.length!==0){const g=[],f=[];gc(p,g,f,m),g.length!==0&&_.push(new h(d,g,f))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)p[d[m].morphTargets[_]]=-1;for(const _ in p){const g=[],f=[];for(let x=0;x!==d[m].morphTargets.length;++x){const A=d[m];g.push(A.time),f.push(A.morphTarget===_?1:0)}s.push(new Ss(".morphTargetInfluence["+_+"]",g,f))}c=p.length*a}else{const p=".bones["+e[h].name+"]";n(Es,p+".position",d,"pos",s),n(As,p+".quaternion",d,"rot",s),n(Es,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function mm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Id;case"quaternion":return As;case"bool":case"boolean":return Ts;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function gm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=mm(i.type);if(i.times===void 0){const e=[],n=[];gc(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const bi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _m{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],m=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const bm=new _m;class Rs{constructor(t){this.manager=t!==void 0?t:bm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class xm extends Error{constructor(t,e){super(t),this.response=e}}class Ld extends Rs{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=bi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ei[t]!==void 0){ei[t].push({onLoad:e,onProgress:n,onError:s});return}ei[t]=[],ei[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ei[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,m=p!==0;let _=0;const g=new ReadableStream({start(f){x();function x(){h.read().then(({done:A,value:v})=>{if(A)f.close();else{_+=v.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:p});for(let w=0,R=u.length;w<R;w++){const D=u[w];D.onProgress&&D.onProgress(T)}f.enqueue(v),x()}},A=>{f.error(A)})}}});return new Response(g)}else throw new xm(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(m=>p.decode(m))}}}).then(l=>{bi.add(t,l);const u=ei[t];delete ei[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ei[t];if(u===void 0)throw this.manager.itemError(t),l;delete ei[t];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class vm extends Rs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=rr("img");function c(){u(),bi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class ym extends Rs{constructor(t){super(t)}load(t,e,n,s){const r=new Ke,a=new vm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ra extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Mm extends Ra{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const so=new oe,Al=new N,El=new N;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),so.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Sm extends _c{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ys*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Am extends Ra{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Tl=new oe,Vs=new N,ro=new N;class Em extends _c{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),ro.copy(n.position),ro.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ro),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl)}}class Tm extends Ra{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Em}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bc extends xd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class wm extends _c{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dd extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new wm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ir{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Rm extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Cm extends Rs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=bi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),bi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});bi.add(t,c),r.manager.itemStart(t)}}class Pm extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Im{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,s,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){rn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;rn.multiplyQuaternionsFlat(t,a,t,e,t,n),rn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const xc="\\[\\]\\.:\\/",Lm=new RegExp("["+xc+"]","g"),vc="[^"+xc+"]",Dm="[^"+xc.replace("\\.","")+"]",Fm=/((?:WC+[\/:])*)/.source.replace("WC",vc),Nm=/(WCOD+)?/.source.replace("WCOD",Dm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vc),Om=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vc),km=new RegExp("^"+Fm+Nm+Um+Om+"$"),Bm=["material","materials","bones","map"];class Gm{constructor(t,e,n){const s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Re{constructor(t,e,n){this.path=e,this.parsedPath=n||Re.parseTrackName(e),this.node=Re.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Re.Composite(t,e,n):new Re(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(t){const e=km.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Bm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Re.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[s];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Re.Composite=Gm;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zm{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:2400,endingEnd:2400};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case 2501:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case 2500:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===2202;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===2200){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=2401,s.endingEnd=2401):(t?s.endingStart=this.zeroSlopeAtStart?2401:2400:s.endingStart=2402,e?s.endingEnd=this.zeroSlopeAtEnd?2401:2400:s.endingEnd=2402)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const Hm=new Float32Array(1);class Vm extends Ki{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],p=d.name;let m=u[p];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,p));continue}const _=e&&e._propertyBindings[h].binding.parsedPath;m=new Im(Re.create(n,p,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,p),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=t._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),t._byClipCacheIndex=null;const h=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Pd(new Float32Array(2),new Float32Array(2),1,Hm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?Vo.findByName(s,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=2500),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new zm(this,a,e,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?Vo.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(s,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,e[u]=h,e.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Wo extends hc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const wl=new N,zr=new N;class Wm{constructor(t=new N,e=new N){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){wl.subVectors(t,this.start),zr.subVectors(this.end,this.start);const n=zr.dot(zr);let r=zr.dot(wl)/n;return e&&(r=me(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Rl(i,t,e,n){const s=Xm(n);switch(e){case 1021:return i*t;case 1024:return i*t;case 1025:return i*t*2;case 1028:return i*t/s.components*s.byteLength;case 1029:return i*t/s.components*s.byteLength;case 1030:return i*t*2/s.components*s.byteLength;case 1031:return i*t*2/s.components*s.byteLength;case 1022:return i*t*3/s.components*s.byteLength;case 1023:return i*t*4/s.components*s.byteLength;case 1033:return i*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xm(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jm(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<h.length;p++){const m=h[d],_=h[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,m=h.length;p<m;p++){const _=h[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
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
#endif`,tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
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
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ig=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ag=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gg=`#define PI 3.141592653589793
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
} // validated`,_g=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bg=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wg=`#ifdef USE_ENVMAP
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
#endif`,Rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
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
}`,Ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kg=`uniform bool receiveShadow;
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
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wg=`PhysicalMaterial material;
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
#endif`,Xg=`struct PhysicalMaterial {
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
}`,jg=`
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n_=`#if defined( USE_POINTS_UV )
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
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I_=`float getShadowMask() {
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
}`,L_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,U_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
}`,t0=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,c0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,x0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:qm,alphahash_pars_fragment:Km,alphamap_fragment:$m,alphamap_pars_fragment:Ym,alphatest_fragment:Zm,alphatest_pars_fragment:Jm,aomap_fragment:Qm,aomap_pars_fragment:tg,batching_pars_vertex:eg,batching_vertex:ng,begin_vertex:ig,beginnormal_vertex:sg,bsdfs:rg,iridescence_fragment:ag,bumpmap_pars_fragment:og,clipping_planes_fragment:cg,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:hg,clipping_planes_vertex:ug,color_fragment:dg,color_pars_fragment:fg,color_pars_vertex:pg,color_vertex:mg,common:gg,cube_uv_reflection_fragment:_g,defaultnormal_vertex:bg,displacementmap_pars_vertex:xg,displacementmap_vertex:vg,emissivemap_fragment:yg,emissivemap_pars_fragment:Mg,colorspace_fragment:Sg,colorspace_pars_fragment:Ag,envmap_fragment:Eg,envmap_common_pars_fragment:Tg,envmap_pars_fragment:wg,envmap_pars_vertex:Rg,envmap_physical_pars_fragment:Bg,envmap_vertex:Cg,fog_vertex:Pg,fog_pars_vertex:Ig,fog_fragment:Lg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:Ng,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:Og,lights_pars_begin:kg,lights_toon_fragment:Gg,lights_toon_pars_fragment:zg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Wg,lights_physical_pars_fragment:Xg,lights_fragment_begin:jg,lights_fragment_maps:qg,lights_fragment_end:Kg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Zg,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:t_,map_particle_fragment:e_,map_particle_pars_fragment:n_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:s_,morphinstance_vertex:r_,morphcolor_vertex:a_,morphnormal_vertex:o_,morphtarget_pars_vertex:c_,morphtarget_vertex:l_,normal_fragment_begin:h_,normal_fragment_maps:u_,normal_pars_fragment:d_,normal_pars_vertex:f_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:b_,iridescence_pars_fragment:x_,opaque_fragment:v_,packing:y_,premultiplied_alpha_fragment:M_,project_vertex:S_,dithering_fragment:A_,dithering_pars_fragment:E_,roughnessmap_fragment:T_,roughnessmap_pars_fragment:w_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:I_,skinbase_vertex:L_,skinning_pars_vertex:D_,skinning_vertex:F_,skinnormal_vertex:N_,specularmap_fragment:U_,specularmap_pars_fragment:O_,tonemapping_fragment:k_,tonemapping_pars_fragment:B_,transmission_fragment:G_,transmission_pars_fragment:z_,uv_pars_fragment:H_,uv_pars_vertex:V_,uv_vertex:W_,worldpos_vertex:X_,background_vert:j_,background_frag:q_,backgroundCube_vert:K_,backgroundCube_frag:$_,cube_vert:Y_,cube_frag:Z_,depth_vert:J_,depth_frag:Q_,distanceRGBA_vert:t0,distanceRGBA_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:a0,meshbasic_frag:o0,meshlambert_vert:c0,meshlambert_frag:l0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:b0,meshtoon_frag:x0,points_vert:v0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:A0,sprite_frag:E0},Lt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},bn={basic:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new se(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:pn([Lt.points,Lt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:pn([Lt.common,Lt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:pn([Lt.sprite,Lt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:pn([Lt.lights,Lt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};bn.physical={uniforms:pn([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Hr={r:0,b:0,g:0},wi=new Pn,T0=new oe;function w0(i,t,e,n,s,r,a){const o=new se(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function m(A){let v=A.isScene===!0?A.background:null;return v&&v.isTexture&&(v=(A.backgroundBlurriness>0?e:t).get(v)),v}function _(A){let v=!1;const T=m(A);T===null?f(o,c):T&&T.isColor&&(f(T,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(A,v){const T=m(v);T&&(T.isCubeTexture||T.mapping===306)?(u===void 0&&(u=new Ae(new yi(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Ms(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(wi)),u.material.toneMapped=Se.getTransfer(T.colorSpace)!==Fe,(h!==T||d!==T.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,p=i.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ae(new Gn(2,2),new oi({name:"BackgroundMaterial",uniforms:Ms(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Se.getTransfer(T.colorSpace)!==Fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,p=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function f(A,v){A.getRGB(Hr,bd(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,v,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,v=1){o.set(A),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,f(o,c)},render:_,addToRenderList:g,dispose:x}}function R0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,I,V,F,U){let K=!1;const O=h(F,V,I);r!==O&&(r=O,l(r.object)),K=p(S,F,V,U),K&&m(S,F,V,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(S,I,V,F),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,I,V){const F=V.wireframe===!0;let U=n[S.id];U===void 0&&(U={},n[S.id]=U);let K=U[I.id];K===void 0&&(K={},U[I.id]=K);let O=K[F];return O===void 0&&(O=d(c()),K[F]=O),O}function d(S){const I=[],V=[],F=[];for(let U=0;U<e;U++)I[U]=0,V[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,I,V,F){const U=r.attributes,K=I.attributes;let O=0;const H=V.getAttributes();for(const L in H)if(H[L].location>=0){const Y=U[L];let nt=K[L];if(nt===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),Y===void 0||Y.attribute!==nt||nt&&Y.data!==nt.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function m(S,I,V,F){const U={},K=I.attributes;let O=0;const H=V.getAttributes();for(const L in H)if(H[L].location>=0){let Y=K[L];Y===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const nt={};nt.attribute=Y,Y&&Y.data&&(nt.data=Y.data),U[L]=nt,O++}r.attributes=U,r.attributesNum=O,r.index=F}function _(){const S=r.newAttributes;for(let I=0,V=S.length;I<V;I++)S[I]=0}function g(S){f(S,0)}function f(S,I){const V=r.newAttributes,F=r.enabledAttributes,U=r.attributeDivisors;V[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),U[S]!==I&&(i.vertexAttribDivisor(S,I),U[S]=I)}function x(){const S=r.newAttributes,I=r.enabledAttributes;for(let V=0,F=I.length;V<F;V++)I[V]!==S[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function A(S,I,V,F,U,K,O){O===!0?i.vertexAttribIPointer(S,I,V,U,K):i.vertexAttribPointer(S,I,V,F,U,K)}function v(S,I,V,F){_();const U=F.attributes,K=V.getAttributes(),O=I.defaultAttributeValues;for(const H in K){const L=K[H];if(L.location>=0){let tt=U[H];if(tt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){const Y=tt.normalized,nt=tt.itemSize,pt=t.get(tt);if(pt===void 0)continue;const zt=pt.buffer,it=pt.type,et=pt.bytesPerElement,X=it===i.INT||it===i.UNSIGNED_INT||tt.gpuType===1013;if(tt.isInterleavedBufferAttribute){const J=tt.data,yt=J.stride,It=tt.offset;if(J.isInstancedInterleavedBuffer){for(let Dt=0;Dt<L.locationSize;Dt++)f(L.location+Dt,J.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Dt=0;Dt<L.locationSize;Dt++)g(L.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Dt=0;Dt<L.locationSize;Dt++)A(L.location+Dt,nt/L.locationSize,it,Y,yt*et,(It+nt/L.locationSize*Dt)*et,X)}else{if(tt.isInstancedBufferAttribute){for(let J=0;J<L.locationSize;J++)f(L.location+J,tt.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let J=0;J<L.locationSize;J++)g(L.location+J);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let J=0;J<L.locationSize;J++)A(L.location+J,nt/L.locationSize,it,Y,nt*et,nt/L.locationSize*J*et,X)}}else if(O!==void 0){const Y=O[H];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(L.location,Y);break;case 3:i.vertexAttrib3fv(L.location,Y);break;case 4:i.vertexAttrib4fv(L.location,Y);break;default:i.vertexAttrib1fv(L.location,Y)}}}}x()}function T(){D();for(const S in n){const I=n[S];for(const V in I){const F=I[V];for(const U in F)u(F[U].object),delete F[U];delete I[V]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;const I=n[S.id];for(const V in I){const F=I[V];for(const U in F)u(F[U].object),delete F[U];delete I[V]}delete n[S.id]}function R(S){for(const I in n){const V=n[I];if(V[S.id]===void 0)continue;const F=V[S.id];for(const U in F)u(F[U].object),delete F[U];delete V[S.id]}}function D(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function C0(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function o(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let m=0;m<h;m++)p+=u[m];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function P0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==1023&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const D=R===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==1009&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:A,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function I0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ni,o=new fe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,f=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,A=x*4;let v=f.clippingState||null;c.value=v,v=u(m,d,A,p);for(let T=0;T!==A;++T)v[T]=e[T];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const f=p+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,v=p;A!==_;++A,v+=4)a.copy(h[A]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function L0(i){let t=new WeakMap;function e(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===303||o===304)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qp(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const gs=4,Cl=[.125,.215,.35,.446,.526,.582],Bi=20,ao=new bc,Pl=new se;let oo=null,co=0,lo=0,ho=!1;const Ui=(1+Math.sqrt(5))/2,ds=1/Ui,Il=[new N(-Ui,ds,0),new N(Ui,ds,0),new N(-ds,0,Ui),new N(ds,0,Ui),new N(0,Ui,-ds),new N(0,Ui,ds),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(oo,co,lo),this._renderer.xr.enabled=ho,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:gn,depthBuffer:!1},s=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=F0(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,ao)}_sceneToCubeUV(t,e,n,s){const o=new mn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Pl),u.toneMapping=0,u.autoClear=!1;const p=new Je({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new Ae(new yi,p);let _=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(Pl),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const A=this._cubeSize;Vr(s,x*A,f>2?A:0,A,A),u.setRenderTarget(s),_&&u.render(m,o),u.render(t,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===301||t.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Vr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ao)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Il[(s-r-1)%Il.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ae(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Bi;g>Bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const f=[];let x=0;for(let R=0;R<Bi;++R){const D=R/_,M=Math.exp(-D*D/2);f.push(M),R===0?x+=M:R<g&&(x+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:A}=this;d.dTheta.value=m,d.mipInt.value=A-n;const v=this._sizeLods[s],T=3*v*(s>A-gs?s-A+gs:0),w=4*(this._cubeSize-v);Vr(e,T,w,3*v,2*v),c.setRenderTarget(e),c.render(h,ao)}}function D0(i){const t=[],e=[],n=[];let s=i;const r=i-gs+1+Cl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-gs?c=Cl[a-i+gs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,m=6,_=3,g=2,f=1,x=new Float32Array(_*m*p),A=new Float32Array(g*m*p),v=new Float32Array(f*m*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,D=w>2?0:-1,M=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];x.set(M,_*m*w),A.set(d,g*m*w);const S=[w,w,w,w,w,w];v.set(S,f*m*w)}const T=new He;T.setAttribute("position",new Te(x,_)),T.setAttribute("uv",new Te(A,g)),T.setAttribute("faceIndex",new Te(v,f)),t.push(T),s>gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(i,t,e){const n=new Xi(i,t,e);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function F0(i,t,e){const n=new Float32Array(Bi),s=new N(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Nl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yc(){return`

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
	`}function N0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===303||c===304,u=c===301||c===302;if(l||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ll(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Ll(i)),h=l?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function U0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O0(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,m=h.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let A=0,v=x.length;A<v;A+=3){const T=x[A+0],w=x[A+1],R=x[A+2];d.push(T,w,w,R,R,T)}}else if(m!==void 0){const x=m.array;_=m.version;for(let A=0,v=x.length/3-1;A<v;A+=3){const T=A+0,w=A+1,R=A+2;d.push(T,w,w,R,R,T)}}else return;const g=new(ud(d)?_d:gd)(d,1);g.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,g)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function k0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*a),e.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,d*a,m),e.update(p,n,m))}function u(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];e.update(g,n,1)}function h(d,p,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],_[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,m);let f=0;for(let x=0;x<m;x++)f+=p[x]*_[x];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function B0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G0(i,t,e){const n=new WeakMap,s=new be;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let A=0;p===!0&&(A=1),m===!0&&(A=2),_===!0&&(A=3);let v=o.attributes.position.count*A,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*T*4*h),R=new fd(w,v,T,h);R.type=1015,R.needsUpdate=!0;const D=A*4;for(let S=0;S<h;S++){const I=g[S],V=f[S],F=x[S],U=v*T*4*S;for(let K=0;K<I.count;K++){const O=K*D;p===!0&&(s.fromBufferAttribute(I,K),w[U+O+0]=s.x,w[U+O+1]=s.y,w[U+O+2]=s.z,w[U+O+3]=0),m===!0&&(s.fromBufferAttribute(V,K),w[U+O+4]=s.x,w[U+O+5]=s.y,w[U+O+6]=s.z,w[U+O+7]=0),_===!0&&(s.fromBufferAttribute(F,K),w[U+O+8]=s.x,w[U+O+9]=s.y,w[U+O+10]=s.z,w[U+O+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new Qt(v,T)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function z0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Nd=new Ke,Ul=new wd(1,1),Ud=new fd,Od=new Lp,kd=new vd,Ol=[],kl=[],Bl=new Float32Array(16),Gl=new Float32Array(9),zl=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ca(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function H0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),Ye(e,n)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),Ye(e,n)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if($e(e,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),Ye(e,n)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function eb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function nb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function ib(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=515,r=Ul):r=Nd,e.setTexture2D(t||r,s)}function sb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Od,s)}function rb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||kd,s)}function ab(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ud,s)}function ob(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return j0;case 35675:return q0;case 35676:return K0;case 5124:case 35670:return $0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return tb;case 36295:return eb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}function cb(i,t){i.uniform1fv(this.addr,t)}function lb(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function hb(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function ub(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function db(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fb(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pb(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mb(i,t){i.uniform1iv(this.addr,t)}function gb(i,t){i.uniform2iv(this.addr,t)}function _b(i,t){i.uniform3iv(this.addr,t)}function bb(i,t){i.uniform4iv(this.addr,t)}function xb(i,t){i.uniform1uiv(this.addr,t)}function vb(i,t){i.uniform2uiv(this.addr,t)}function yb(i,t){i.uniform3uiv(this.addr,t)}function Mb(i,t){i.uniform4uiv(this.addr,t)}function Sb(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Nd,r[a])}function Ab(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Od,r[a])}function Eb(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||kd,r[a])}function Tb(i,t,e){const n=this.cache,s=t.length,r=Ca(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ud,r[a])}function wb(i){switch(i){case 5126:return cb;case 35664:return lb;case 35665:return hb;case 35666:return ub;case 35674:return db;case 35675:return fb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return bb;case 5125:return xb;case 36294:return vb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Ab;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Rb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ob(e.type)}}class Cb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wb(e.type)}}class Pb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Hl(i,t){i.seq.push(t),i.map[t.id]=t}function Ib(i,t,e){const n=i.name,s=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),a=uo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hl(e,l===void 0?new Rb(o,i,t):new Cb(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new Pb(o),Hl(e,h)),e=h}}}class la{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ib(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lb=37297;let Db=0;function Fb(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Wl=new fe;function Nb(i){Se._getMatrix(Wl,Se.workingColorSpace,i);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(Se.getTransfer(i)){case pa:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Fb(i.getShaderSource(t),a)}else return s}function Ub(i,t){const e=Nb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ob(i,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new N;function kb(){Se.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function Gb(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zb(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function tr(i){return i!==""}function jl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(Hb,Wb)}const Vb=new Map;function Wb(i,t){let e=pe[t];if(e===void 0){const n=Vb.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kl(i){return i.replace(Xb,jb)}function jb(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function qb(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Kb(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $b(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Yb(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function Zb(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jb(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=qb(e),l=Kb(e),u=$b(e),h=Yb(e),d=Zb(e),p=Bb(e),m=Gb(r),_=s.createProgram();let g,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(tr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(tr).join(`
`),f.length>0&&(f+=`
`)):(g=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),f=[$l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?pe.tonemapping_pars_fragment:"",e.toneMapping!==0?Ob("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Ub("linearToOutputTexel",e.outputColorSpace),kb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=Xo(a),a=jl(a,e),a=ql(a,e),o=Xo(o),o=jl(o,e),o=ql(o,e),a=Kl(a),o=Kl(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=x+g+a,v=x+f+o,T=Vl(s,s.VERTEX_SHADER,A),w=Vl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(w).trim();let K=!0,O=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,w);else{const H=Xl(s,T,"vertex"),L=Xl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+H+`
`+L)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(F===""||U==="")&&(O=!1);O&&(I.diagnostics={runnable:K,programLog:V,vertexShader:{log:F,prefix:g},fragmentShader:{log:U,prefix:f}})}s.deleteShader(T),s.deleteShader(w),D=new la(s,_),M=zb(s,_)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Lb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Db++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let Qb=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ex(t),e.set(t,n)),n}}class ex{constructor(t){this.id=Qb++,this.code=t,this.usedTimes=0}}function nx(i,t,e,n,s,r,a){const o=new pd,c=new tx,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,S,I,V,F){const U=V.fog,K=F.geometry,O=M.isMeshStandardMaterial?V.environment:null,H=(M.isMeshStandardMaterial?e:t).get(M.envMap||O),L=H&&H.mapping===306?H.image.height:null,tt=m[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Y=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,nt=Y!==void 0?Y.length:0;let pt=0;K.morphAttributes.position!==void 0&&(pt=1),K.morphAttributes.normal!==void 0&&(pt=2),K.morphAttributes.color!==void 0&&(pt=3);let zt,it,et,X;if(tt){const rt=bn[tt];zt=rt.vertexShader,it=rt.fragmentShader}else zt=M.vertexShader,it=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);const J=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),It=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,Mt=!!M.map,kt=!!M.matcap,ge=!!H,B=!!M.aoMap,Ce=!!M.lightMap,Yt=!!M.bumpMap,ce=!!M.normalMap,At=!!M.displacementMap,mt=!!M.emissiveMap,ft=!!M.metalnessMap,C=!!M.roughnessMap,E=M.anisotropy>0,$=M.clearcoat>0,ct=M.dispersion>0,dt=M.iridescence>0,lt=M.sheen>0,Ht=M.transmission>0,Ft=E&&!!M.anisotropyMap,Ut=$&&!!M.clearcoatMap,le=$&&!!M.clearcoatNormalMap,xt=$&&!!M.clearcoatRoughnessMap,Ct=dt&&!!M.iridescenceMap,qt=dt&&!!M.iridescenceThicknessMap,ee=lt&&!!M.sheenColorMap,Gt=lt&&!!M.sheenRoughnessMap,ue=!!M.specularMap,re=!!M.specularColorMap,we=!!M.specularIntensityMap,q=Ht&&!!M.transmissionMap,P=Ht&&!!M.thicknessMap,b=!!M.gradientMap,W=!!M.alphaMap,Z=M.alphaTest>0,k=!!M.alphaHash,ut=!!M.extensions;let st=0;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(st=i.toneMapping);const ot={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:zt,fragmentShader:it,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:It,instancingColor:It&&F.instanceColor!==null,instancingMorph:It&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:gn,alphaToCoverage:!!M.alphaToCoverage,map:Mt,matcap:kt,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:L,aoMap:B,lightMap:Ce,bumpMap:Yt,normalMap:ce,displacementMap:d&&At,emissiveMap:mt,normalMapObjectSpace:ce&&M.normalMapType===1,normalMapTangentSpace:ce&&M.normalMapType===0,metalnessMap:ft,roughnessMap:C,anisotropy:E,anisotropyMap:Ft,clearcoat:$,clearcoatMap:Ut,clearcoatNormalMap:le,clearcoatRoughnessMap:xt,dispersion:ct,iridescence:dt,iridescenceMap:Ct,iridescenceThicknessMap:qt,sheen:lt,sheenColorMap:ee,sheenRoughnessMap:Gt,specularMap:ue,specularColorMap:re,specularIntensityMap:we,transmission:Ht,transmissionMap:q,thicknessMap:P,gradientMap:b,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:W,alphaTest:Z,alphaHash:k,combine:M.combine,mapUv:Mt&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:Ce&&_(M.lightMap.channel),bumpMapUv:Yt&&_(M.bumpMap.channel),normalMapUv:ce&&_(M.normalMap.channel),displacementMapUv:At&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:ft&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:Ft&&_(M.anisotropyMap.channel),clearcoatMapUv:Ut&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(M.sheenRoughnessMap.channel),specularMapUv:ue&&_(M.specularMap.channel),specularColorMapUv:re&&_(M.specularColorMap.channel),specularIntensityMapUv:we&&_(M.specularIntensityMap.channel),transmissionMapUv:q&&_(M.transmissionMap.channel),thicknessMapUv:P&&_(M.thicknessMap.channel),alphaMapUv:W&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ce||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Mt||W),fog:!!U,useFog:M.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:yt,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:pt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&Se.getTransfer(M.map.colorSpace)===Fe,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&Se.getTransfer(M.emissiveMap.colorSpace)===Fe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&M.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(S,M),A(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function A(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const S=m[M.type];let I;if(S){const V=bn[S];I=cc.clone(V.uniforms)}else I=M.uniforms;return I}function T(M,S){let I;for(let V=0,F=u.length;V<F;V++){const U=u[V];if(U.cacheKey===S){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Jb(i,S,M,r),u.push(I)),I}function w(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:D}}function ix(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,p,m,_,g){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=h.renderOrder,f.z=_,f.group=g),t++,f}function o(h,d,p,m,_,g){const f=a(h,d,p,m,_,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,m,_,g){const f=a(h,d,p,m,_,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||sx),n.length>1&&n.sort(d||Yl),s.length>1&&s.sort(d||Yl)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function rx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zl,i.set(n,[a])):s>=r.length?(a=new Zl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new se};break;case"SpotLight":e={position:new N,direction:new N,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function ox(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let cx=0;function lx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hx(i){const t=new ax,e=ox(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new oe,a=new oe;function o(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,_=0,g=0,f=0,x=0,A=0,v=0,T=0,w=0,R=0;l.sort(lx);for(let M=0,S=l.length;M<S;M++){const I=l[M],V=I.color,F=I.intensity,U=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=V.r*F,h+=V.g*F,d+=V.b*F;else if(I.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(I.sh.coefficients[O],F);R++}else if(I.isDirectionalLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const H=I.shadow,L=e.get(I);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,x++}n.directional[p]=O,p++}else if(I.isSpotLight){const O=t.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(V).multiplyScalar(F),O.distance=U,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,n.spot[_]=O;const H=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,H.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=H.matrix,I.castShadow){const L=e.get(I);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=K,v++}_++}else if(I.isRectAreaLight){const O=t.get(I);O.color.copy(V).multiplyScalar(F),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=O,g++}else if(I.isPointLight){const O=t.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){const H=I.shadow,L=e.get(I);L.shadowIntensity=H.intensity,L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,n.pointShadow[m]=L,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=O,m++}else if(I.isHemisphereLight){const O=t.get(I);O.skyColor.copy(I.color).multiplyScalar(F),O.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[f]=O,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==x||D.numPointShadows!==A||D.numSpotShadows!==v||D.numSpotMaps!==T||D.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=x,D.numPointShadows=A,D.numSpotShadows=v,D.numSpotMaps=T,D.numLightProbes=R,n.version=cx++)}function c(l,u){let h=0,d=0,p=0,m=0,_=0;const g=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const A=l[f];if(A.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(A.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(A.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(A.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(A.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(A.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(A.width*.5,0,0),v.halfHeight.set(0,A.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(A.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(A.matrixWorld),v.position.applyMatrix4(g),d++}else if(A.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(A.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function Jl(i){const t=new hx(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ux(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Jl(i),t.set(s,[o])):r>=a.length?(o=new Jl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`;function px(i,t,e){let n=new dc;const s=new Qt,r=new Qt,a=new be,o=new om({depthPacking:3201}),c=new cm,l={},u=e.maxTextureSize,h={0:1,1:0,2:2},d=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new He;m.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(w,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(0),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=f!==3&&this.type===3,U=f===3&&this.type!==3;for(let K=0,O=w.length;K<O;K++){const H=w[K],L=H.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);const tt=L.getFrameExtents();if(s.multiply(tt),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,L.mapSize.y=r.y)),L.map===null||F===!0||U===!0){const nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};L.map!==null&&L.map.dispose(),L.map=new Xi(s.x,s.y,nt),L.map.texture.name=H.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();const Y=L.getViewportCount();for(let nt=0;nt<Y;nt++){const pt=L.getViewport(nt);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),V.viewport(a),L.updateMatrices(H,nt),n=L.getFrustum(),v(R,D,L.camera,H,this.type)}L.isPointLightShadow!==!0&&this.type===3&&x(L,D),L.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,I)};function x(w,R){const D=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,D,p,_,null)}function A(w,R,D,M){let S=null;const I=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)S=I;else if(S=D.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=S.uuid,F=R.uuid;let U=l[V];U===void 0&&(U={},l[V]=U);let K=U[F];K===void 0&&(K=S.clone(),U[F]=K,R.addEventListener("dispose",T)),S=K}if(S.visible=R.visible,S.wireframe=R.wireframe,M===3?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=i.properties.get(S);V.light=D}return S}function v(w,R,D,M,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const F=t.update(w),U=w.material;if(Array.isArray(U)){const K=F.groups;for(let O=0,H=K.length;O<H;O++){const L=K[O],tt=U[L.materialIndex];if(tt&&tt.visible){const Y=A(w,tt,M,S);w.onBeforeShadow(i,w,R,D,F,Y,L),i.renderBufferDirect(D,null,F,Y,w,L),w.onAfterShadow(i,w,R,D,F,Y,L)}}}else if(U.visible){const K=A(w,U,M,S);w.onBeforeShadow(i,w,R,D,F,K,null),i.renderBufferDirect(D,null,F,K,w,null),w.onAfterShadow(i,w,R,D,F,K,null)}}const V=w.children;for(let F=0,U=V.length;F<U;F++)v(V[F],R,D,M,S)}function T(w){w.target.removeEventListener("dispose",T);for(const D in l){const M=l[D],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const mx={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function gx(i,t){function e(){let q=!1;const P=new be;let b=null;const W=new be(0,0,0,0);return{setMask:function(Z){b!==Z&&!q&&(i.colorMask(Z,Z,Z,Z),b=Z)},setLocked:function(Z){q=Z},setClear:function(Z,k,ut,st,ot){ot===!0&&(Z*=st,k*=st,ut*=st),P.set(Z,k,ut,st),W.equals(P)===!1&&(i.clearColor(Z,k,ut,st),W.copy(P))},reset:function(){q=!1,b=null,W.set(-1,0,0,0)}}}function n(){let q=!1,P=!1,b=null,W=null,Z=null;return{setReversed:function(k){if(P!==k){const ut=t.get("EXT_clip_control");P?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const st=Z;Z=null,this.setClear(st)}P=k},getReversed:function(){return P},setTest:function(k){k?J(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(k){b!==k&&!q&&(i.depthMask(k),b=k)},setFunc:function(k){if(P&&(k=mx[k]),W!==k){switch(k){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=k}},setLocked:function(k){q=k},setClear:function(k){Z!==k&&(P&&(k=1-k),i.clearDepth(k),Z=k)},reset:function(){q=!1,b=null,W=null,Z=null,P=!1}}}function s(){let q=!1,P=null,b=null,W=null,Z=null,k=null,ut=null,st=null,ot=null;return{setTest:function(rt){q||(rt?J(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(rt){P!==rt&&!q&&(i.stencilMask(rt),P=rt)},setFunc:function(rt,Vt,Nt){(b!==rt||W!==Vt||Z!==Nt)&&(i.stencilFunc(rt,Vt,Nt),b=rt,W=Vt,Z=Nt)},setOp:function(rt,Vt,Nt){(k!==rt||ut!==Vt||st!==Nt)&&(i.stencilOp(rt,Vt,Nt),k=rt,ut=Vt,st=Nt)},setLocked:function(rt){q=rt},setClear:function(rt){ot!==rt&&(i.clearStencil(rt),ot=rt)},reset:function(){q=!1,P=null,b=null,W=null,Z=null,k=null,ut=null,st=null,ot=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,x=null,A=null,v=null,T=null,w=null,R=new se(0,0,0),D=0,M=!1,S=null,I=null,V=null,F=null,U=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(L)[1]),O=H>=1):L.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),O=H>=2);let tt=null,Y={};const nt=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),zt=new be().fromArray(nt),it=new be().fromArray(pt);function et(q,P,b,W){const Z=new Uint8Array(4),k=i.createTexture();i.bindTexture(q,k),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<b;ut++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(P,0,i.RGBA,1,1,W,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(P+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return k}const X={};X[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(3),Yt(!1),ce(1),J(i.CULL_FACE),B(0);function J(q){u[q]!==!0&&(i.enable(q),u[q]=!0)}function yt(q){u[q]!==!1&&(i.disable(q),u[q]=!1)}function It(q,P){return h[q]!==P?(i.bindFramebuffer(q,P),h[q]=P,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=P),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=P),!0):!1}function Dt(q,P){let b=p,W=!1;if(q){b=d.get(P),b===void 0&&(b=[],d.set(P,b));const Z=q.textures;if(b.length!==Z.length||b[0]!==i.COLOR_ATTACHMENT0){for(let k=0,ut=Z.length;k<ut;k++)b[k]=i.COLOR_ATTACHMENT0+k;b.length=Z.length,W=!0}}else b[0]!==i.BACK&&(b[0]=i.BACK,W=!0);W&&i.drawBuffers(b)}function Mt(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const kt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};kt[103]=i.MIN,kt[104]=i.MAX;const ge={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function B(q,P,b,W,Z,k,ut,st,ot,rt){if(q===0){_===!0&&(yt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),q!==5){if(q!==g||rt!==M){if((f!==100||v!==100)&&(i.blendEquation(i.FUNC_ADD),f=100,v=100),rt)switch(q){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,A=null,T=null,w=null,R.set(0,0,0),D=0,g=q,M=rt}return}Z=Z||P,k=k||b,ut=ut||W,(P!==f||Z!==v)&&(i.blendEquationSeparate(kt[P],kt[Z]),f=P,v=Z),(b!==x||W!==A||k!==T||ut!==w)&&(i.blendFuncSeparate(ge[b],ge[W],ge[k],ge[ut]),x=b,A=W,T=k,w=ut),(st.equals(R)===!1||ot!==D)&&(i.blendColor(st.r,st.g,st.b,ot),R.copy(st),D=ot),g=q,M=!1}function Ce(q,P){q.side===2?yt(i.CULL_FACE):J(i.CULL_FACE);let b=q.side===1;P&&(b=!b),Yt(b),q.blending===1&&q.transparent===!1?B(0):B(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),r.setMask(q.colorWrite);const W=q.stencilWrite;o.setTest(W),W&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),mt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(q){S!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),S=q)}function ce(q){q!==0?(J(i.CULL_FACE),q!==I&&(q===1?i.cullFace(i.BACK):q===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),I=q}function At(q){q!==V&&(O&&i.lineWidth(q),V=q)}function mt(q,P,b){q?(J(i.POLYGON_OFFSET_FILL),(F!==P||U!==b)&&(i.polygonOffset(P,b),F=P,U=b)):yt(i.POLYGON_OFFSET_FILL)}function ft(q){q?J(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function C(q){q===void 0&&(q=i.TEXTURE0+K-1),tt!==q&&(i.activeTexture(q),tt=q)}function E(q,P,b){b===void 0&&(tt===null?b=i.TEXTURE0+K-1:b=tt);let W=Y[b];W===void 0&&(W={type:void 0,texture:void 0},Y[b]=W),(W.type!==q||W.texture!==P)&&(tt!==b&&(i.activeTexture(b),tt=b),i.bindTexture(q,P||X[q]),W.type=q,W.texture=P)}function $(){const q=Y[tt];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ht(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function le(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xt(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ee(q){zt.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),zt.copy(q))}function Gt(q){it.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),it.copy(q))}function ue(q,P){let b=l.get(P);b===void 0&&(b=new WeakMap,l.set(P,b));let W=b.get(q);W===void 0&&(W=i.getUniformBlockIndex(P,q.name),b.set(q,W))}function re(q,P){const W=l.get(P).get(q);c.get(P)!==W&&(i.uniformBlockBinding(P,W,q.__bindingPointIndex),c.set(P,W))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,Y={},h={},d=new WeakMap,p=[],m=null,_=!1,g=null,f=null,x=null,A=null,v=null,T=null,w=null,R=new se(0,0,0),D=0,M=!1,S=null,I=null,V=null,F=null,U=null,zt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:yt,bindFramebuffer:It,drawBuffers:Dt,useProgram:Mt,setBlending:B,setMaterial:Ce,setFlipSided:Yt,setCullFace:ce,setLineWidth:At,setPolygonOffset:mt,setScissorTest:ft,activeTexture:C,bindTexture:E,unbindTexture:$,compressedTexImage2D:ct,compressedTexImage3D:dt,texImage2D:Ct,texImage3D:qt,updateUBOMapping:ue,uniformBlockBinding:re,texStorage2D:le,texStorage3D:xt,texSubImage2D:lt,texSubImage3D:Ht,compressedTexSubImage2D:Ft,compressedTexSubImage3D:Ut,scissor:ee,viewport:Gt,reset:we}}function _x(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,E){return p?new OffscreenCanvas(C,E):rr("canvas")}function _(C,E,$){let ct=1;const dt=ft(C);if((dt.width>$||dt.height>$)&&(ct=$/Math.max(dt.width,dt.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const lt=Math.floor(ct*dt.width),Ht=Math.floor(ct*dt.height);h===void 0&&(h=m(lt,Ht));const Ft=E?m(lt,Ht):h;return Ft.width=lt,Ft.height=Ht,Ft.getContext("2d").drawImage(C,0,0,lt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Ht+")."),Ft}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),C;return C}function g(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,E,$,ct,dt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt=E;if(E===i.RED&&($===i.FLOAT&&(lt=i.R32F),$===i.HALF_FLOAT&&(lt=i.R16F),$===i.UNSIGNED_BYTE&&(lt=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.R8UI),$===i.UNSIGNED_SHORT&&(lt=i.R16UI),$===i.UNSIGNED_INT&&(lt=i.R32UI),$===i.BYTE&&(lt=i.R8I),$===i.SHORT&&(lt=i.R16I),$===i.INT&&(lt=i.R32I)),E===i.RG&&($===i.FLOAT&&(lt=i.RG32F),$===i.HALF_FLOAT&&(lt=i.RG16F),$===i.UNSIGNED_BYTE&&(lt=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RG8UI),$===i.UNSIGNED_SHORT&&(lt=i.RG16UI),$===i.UNSIGNED_INT&&(lt=i.RG32UI),$===i.BYTE&&(lt=i.RG8I),$===i.SHORT&&(lt=i.RG16I),$===i.INT&&(lt=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),$===i.UNSIGNED_INT&&(lt=i.RGB32UI),$===i.BYTE&&(lt=i.RGB8I),$===i.SHORT&&(lt=i.RGB16I),$===i.INT&&(lt=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),$===i.UNSIGNED_INT&&(lt=i.RGBA32UI),$===i.BYTE&&(lt=i.RGBA8I),$===i.SHORT&&(lt=i.RGBA16I),$===i.INT&&(lt=i.RGBA32I)),E===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),E===i.RGBA){const Ht=dt?pa:Se.getTransfer(ct);$===i.FLOAT&&(lt=i.RGBA32F),$===i.HALF_FLOAT&&(lt=i.RGBA16F),$===i.UNSIGNED_BYTE&&(lt=Ht===Fe?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function v(C,E){let $;return C?E===null||E===1014||E===1020?$=i.DEPTH24_STENCIL8:E===1015?$=i.DEPTH32F_STENCIL8:E===1012&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?$=i.DEPTH_COMPONENT24:E===1015?$=i.DEPTH_COMPONENT32F:E===1012&&($=i.DEPTH_COMPONENT16),$}function T(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){const E=C.target;E.removeEventListener("dispose",w),D(E),E.isVideoTexture&&u.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),S(E)}function D(C){const E=n.get(C);if(E.__webglInit===void 0)return;const $=C.source,ct=d.get($);if(ct){const dt=ct[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&M(C),Object.keys(ct).length===0&&d.delete($)}n.remove(C)}function M(C){const E=n.get(C);i.deleteTexture(E.__webglTexture);const $=C.source,ct=d.get($);delete ct[E.__cacheKey],a.memory.textures--}function S(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(E.__webglFramebuffer[ct]))for(let dt=0;dt<E.__webglFramebuffer[ct].length;dt++)i.deleteFramebuffer(E.__webglFramebuffer[ct][dt]);else i.deleteFramebuffer(E.__webglFramebuffer[ct]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ct])}else{if(Array.isArray(E.__webglFramebuffer))for(let ct=0;ct<E.__webglFramebuffer.length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[ct]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ct=0;ct<E.__webglColorRenderbuffer.length;ct++)E.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ct]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=C.textures;for(let ct=0,dt=$.length;ct<dt;ct++){const lt=n.get($[ct]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove($[ct])}n.remove(C)}let I=0;function V(){I=0}function F(){const C=I;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),I+=1,C}function U(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function K(C,E){const $=n.get(C);if(C.isVideoTexture&&At(C),C.isRenderTargetTexture===!1&&C.version>0&&$.__version!==C.version){const ct=C.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it($,C,E);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function O(C,E){const $=n.get(C);if(C.version>0&&$.__version!==C.version){it($,C,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function H(C,E){const $=n.get(C);if(C.version>0&&$.__version!==C.version){it($,C,E);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function L(C,E){const $=n.get(C);if(C.version>0&&$.__version!==C.version){et($,C,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const tt={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Y={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},nt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function pt(C,E){if(E.type===1015&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,tt[E.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,tt[E.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,tt[E.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Y[E.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,nt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function zt(C,E){let $=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));const ct=E.source;let dt=d.get(ct);dt===void 0&&(dt={},d.set(ct,dt));const lt=U(E);if(lt!==C.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),dt[lt].usedTimes++;const Ht=dt[C.__cacheKey];Ht!==void 0&&(dt[C.__cacheKey].usedTimes--,Ht.usedTimes===0&&M(E)),C.__cacheKey=lt,C.__webglTexture=dt[lt].texture}return $}function it(C,E,$){let ct=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ct=i.TEXTURE_3D);const dt=zt(C,E),lt=E.source;e.bindTexture(ct,C.__webglTexture,i.TEXTURE0+$);const Ht=n.get(lt);if(lt.version!==Ht.__version||dt===!0){e.activeTexture(i.TEXTURE0+$);const Ft=Se.getPrimaries(Se.workingColorSpace),Ut=E.colorSpace===""?null:Se.getPrimaries(E.colorSpace),le=E.colorSpace===""||Ft===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let xt=_(E.image,!1,s.maxTextureSize);xt=mt(E,xt);const Ct=r.convert(E.format,E.colorSpace),qt=r.convert(E.type);let ee=A(E.internalFormat,Ct,qt,E.colorSpace,E.isVideoTexture);pt(ct,E);let Gt;const ue=E.mipmaps,re=E.isVideoTexture!==!0,we=Ht.__version===void 0||dt===!0,q=lt.dataReady,P=T(E,xt);if(E.isDepthTexture)ee=v(E.format===1027,E.type),we&&(re?e.texStorage2D(i.TEXTURE_2D,1,ee,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,ee,xt.width,xt.height,0,Ct,qt,null));else if(E.isDataTexture)if(ue.length>0){re&&we&&e.texStorage2D(i.TEXTURE_2D,P,ee,ue[0].width,ue[0].height);for(let b=0,W=ue.length;b<W;b++)Gt=ue[b],re?q&&e.texSubImage2D(i.TEXTURE_2D,b,0,0,Gt.width,Gt.height,Ct,qt,Gt.data):e.texImage2D(i.TEXTURE_2D,b,ee,Gt.width,Gt.height,0,Ct,qt,Gt.data);E.generateMipmaps=!1}else re?(we&&e.texStorage2D(i.TEXTURE_2D,P,ee,xt.width,xt.height),q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt.width,xt.height,Ct,qt,xt.data)):e.texImage2D(i.TEXTURE_2D,0,ee,xt.width,xt.height,0,Ct,qt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,P,ee,ue[0].width,ue[0].height,xt.depth);for(let b=0,W=ue.length;b<W;b++)if(Gt=ue[b],E.format!==1023)if(Ct!==null)if(re){if(q)if(E.layerUpdates.size>0){const Z=Rl(Gt.width,Gt.height,E.format,E.type);for(const k of E.layerUpdates){const ut=Gt.data.subarray(k*Z/Gt.data.BYTES_PER_ELEMENT,(k+1)*Z/Gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,k,Gt.width,Gt.height,1,Ct,ut)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,Gt.width,Gt.height,xt.depth,Ct,Gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,b,ee,Gt.width,Gt.height,xt.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,Gt.width,Gt.height,xt.depth,Ct,qt,Gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,b,ee,Gt.width,Gt.height,xt.depth,0,Ct,qt,Gt.data)}else{re&&we&&e.texStorage2D(i.TEXTURE_2D,P,ee,ue[0].width,ue[0].height);for(let b=0,W=ue.length;b<W;b++)Gt=ue[b],E.format!==1023?Ct!==null?re?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,b,0,0,Gt.width,Gt.height,Ct,Gt.data):e.compressedTexImage2D(i.TEXTURE_2D,b,ee,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?q&&e.texSubImage2D(i.TEXTURE_2D,b,0,0,Gt.width,Gt.height,Ct,qt,Gt.data):e.texImage2D(i.TEXTURE_2D,b,ee,Gt.width,Gt.height,0,Ct,qt,Gt.data)}else if(E.isDataArrayTexture)if(re){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,P,ee,xt.width,xt.height,xt.depth),q)if(E.layerUpdates.size>0){const b=Rl(xt.width,xt.height,E.format,E.type);for(const W of E.layerUpdates){const Z=xt.data.subarray(W*b/xt.data.BYTES_PER_ELEMENT,(W+1)*b/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,xt.width,xt.height,1,Ct,qt,Z)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ct,qt,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,xt.width,xt.height,xt.depth,0,Ct,qt,xt.data);else if(E.isData3DTexture)re?(we&&e.texStorage3D(i.TEXTURE_3D,P,ee,xt.width,xt.height,xt.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ct,qt,xt.data)):e.texImage3D(i.TEXTURE_3D,0,ee,xt.width,xt.height,xt.depth,0,Ct,qt,xt.data);else if(E.isFramebufferTexture){if(we)if(re)e.texStorage2D(i.TEXTURE_2D,P,ee,xt.width,xt.height);else{let b=xt.width,W=xt.height;for(let Z=0;Z<P;Z++)e.texImage2D(i.TEXTURE_2D,Z,ee,b,W,0,Ct,qt,null),b>>=1,W>>=1}}else if(ue.length>0){if(re&&we){const b=ft(ue[0]);e.texStorage2D(i.TEXTURE_2D,P,ee,b.width,b.height)}for(let b=0,W=ue.length;b<W;b++)Gt=ue[b],re?q&&e.texSubImage2D(i.TEXTURE_2D,b,0,0,Ct,qt,Gt):e.texImage2D(i.TEXTURE_2D,b,ee,Ct,qt,Gt);E.generateMipmaps=!1}else if(re){if(we){const b=ft(xt);e.texStorage2D(i.TEXTURE_2D,P,ee,b.width,b.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,qt,xt)}else e.texImage2D(i.TEXTURE_2D,0,ee,Ct,qt,xt);g(E)&&f(ct),Ht.__version=lt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function et(C,E,$){if(E.image.length!==6)return;const ct=zt(C,E),dt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+$);const lt=n.get(dt);if(dt.version!==lt.__version||ct===!0){e.activeTexture(i.TEXTURE0+$);const Ht=Se.getPrimaries(Se.workingColorSpace),Ft=E.colorSpace===""?null:Se.getPrimaries(E.colorSpace),Ut=E.colorSpace===""||Ht===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,xt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let W=0;W<6;W++)!le&&!xt?Ct[W]=_(E.image[W],!0,s.maxCubemapSize):Ct[W]=xt?E.image[W].image:E.image[W],Ct[W]=mt(E,Ct[W]);const qt=Ct[0],ee=r.convert(E.format,E.colorSpace),Gt=r.convert(E.type),ue=A(E.internalFormat,ee,Gt,E.colorSpace),re=E.isVideoTexture!==!0,we=lt.__version===void 0||ct===!0,q=dt.dataReady;let P=T(E,qt);pt(i.TEXTURE_CUBE_MAP,E);let b;if(le){re&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,P,ue,qt.width,qt.height);for(let W=0;W<6;W++){b=Ct[W].mipmaps;for(let Z=0;Z<b.length;Z++){const k=b[Z];E.format!==1023?ee!==null?re?q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,0,0,k.width,k.height,ee,k.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,ue,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,0,0,k.width,k.height,ee,Gt,k.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z,ue,k.width,k.height,0,ee,Gt,k.data)}}}else{if(b=E.mipmaps,re&&we){b.length>0&&P++;const W=ft(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,P,ue,W.width,W.height)}for(let W=0;W<6;W++)if(xt){re?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ct[W].width,Ct[W].height,ee,Gt,Ct[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ue,Ct[W].width,Ct[W].height,0,ee,Gt,Ct[W].data);for(let Z=0;Z<b.length;Z++){const ut=b[Z].image[W].image;re?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,0,0,ut.width,ut.height,ee,Gt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,ue,ut.width,ut.height,0,ee,Gt,ut.data)}}else{re?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ee,Gt,Ct[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ue,ee,Gt,Ct[W]);for(let Z=0;Z<b.length;Z++){const k=b[Z];re?q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,0,0,ee,Gt,k.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,Z+1,ue,ee,Gt,k.image[W])}}}g(E)&&f(i.TEXTURE_CUBE_MAP),lt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function X(C,E,$,ct,dt,lt){const Ht=r.convert($.format,$.colorSpace),Ft=r.convert($.type),Ut=A($.internalFormat,Ht,Ft,$.colorSpace),le=n.get(E),xt=n.get($);if(xt.__renderTarget=E,!le.__hasExternalTextures){const Ct=Math.max(1,E.width>>lt),qt=Math.max(1,E.height>>lt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,lt,Ut,Ct,qt,E.depth,0,Ht,Ft,null):e.texImage2D(dt,lt,Ut,Ct,qt,0,Ht,Ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ce(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,dt,xt.__webglTexture,0,Yt(E)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,dt,xt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(C,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,C),E.depthBuffer){const ct=E.depthTexture,dt=ct&&ct.isDepthTexture?ct.type:null,lt=v(E.stencilBuffer,dt),Ht=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=Yt(E);ce(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,lt,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,lt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,lt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ht,i.RENDERBUFFER,C)}else{const ct=E.textures;for(let dt=0;dt<ct.length;dt++){const lt=ct[dt],Ht=r.convert(lt.format,lt.colorSpace),Ft=r.convert(lt.type),Ut=A(lt.internalFormat,Ht,Ft,lt.colorSpace),le=Yt(E);$&&ce(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Ut,E.width,E.height):ce(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Ut,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ct=n.get(E.depthTexture);ct.__renderTarget=E,(!ct.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const dt=ct.__webglTexture,lt=Yt(E);if(E.depthTexture.format===1026)ce(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,dt,0);else if(E.depthTexture.format===1027)ce(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function It(C){const E=n.get(C),$=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ct=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ct){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ct.removeEventListener("dispose",dt)};ct.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=ct}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");yt(E.__webglFramebuffer,C)}else if($){E.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ct]),E.__webglDepthbuffer[ct]===void 0)E.__webglDepthbuffer[ct]=i.createRenderbuffer(),J(E.__webglDepthbuffer[ct],C,!1);else{const dt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=E.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,lt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),J(E.__webglDepthbuffer,C,!1);else{const ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(C,E,$){const ct=n.get(C);E!==void 0&&X(ct.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&It(C)}function Mt(C){const E=C.texture,$=n.get(C),ct=n.get(E);C.addEventListener("dispose",R);const dt=C.textures,lt=C.isWebGLCubeRenderTarget===!0,Ht=dt.length>1;if(Ht||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=E.version,a.memory.textures++),lt){$.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ft]=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)$.__webglFramebuffer[Ft][Ut]=i.createFramebuffer()}else $.__webglFramebuffer[Ft]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ft=0;Ft<E.mipmaps.length;Ft++)$.__webglFramebuffer[Ft]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Ht)for(let Ft=0,Ut=dt.length;Ft<Ut;Ft++){const le=n.get(dt[Ft]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&ce(C)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ft=0;Ft<dt.length;Ft++){const Ut=dt[Ft];$.__webglColorRenderbuffer[Ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[Ft]);const le=r.convert(Ut.format,Ut.colorSpace),xt=r.convert(Ut.type),Ct=A(Ut.internalFormat,le,xt,Ut.colorSpace,C.isXRRenderTarget===!0),qt=Yt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,Ct,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,$.__webglColorRenderbuffer[Ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),J($.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),pt(i.TEXTURE_CUBE_MAP,E);for(let Ft=0;Ft<6;Ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ut=0;Ut<E.mipmaps.length;Ut++)X($.__webglFramebuffer[Ft][Ut],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,Ut);else X($.__webglFramebuffer[Ft],C,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);g(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Ft=0,Ut=dt.length;Ft<Ut;Ft++){const le=dt[Ft],xt=n.get(le);e.bindTexture(i.TEXTURE_2D,xt.__webglTexture),pt(i.TEXTURE_2D,le),X($.__webglFramebuffer,C,le,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,0),g(le)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let Ft=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ft=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ft,ct.__webglTexture),pt(Ft,E),E.mipmaps&&E.mipmaps.length>0)for(let Ut=0;Ut<E.mipmaps.length;Ut++)X($.__webglFramebuffer[Ut],C,E,i.COLOR_ATTACHMENT0,Ft,Ut);else X($.__webglFramebuffer,C,E,i.COLOR_ATTACHMENT0,Ft,0);g(E)&&f(Ft),e.unbindTexture()}C.depthBuffer&&It(C)}function kt(C){const E=C.textures;for(let $=0,ct=E.length;$<ct;$++){const dt=E[$];if(g(dt)){const lt=x(C),Ht=n.get(dt).__webglTexture;e.bindTexture(lt,Ht),f(lt),e.unbindTexture()}}}const ge=[],B=[];function Ce(C){if(C.samples>0){if(ce(C)===!1){const E=C.textures,$=C.width,ct=C.height;let dt=i.COLOR_BUFFER_BIT;const lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ht=n.get(C),Ft=E.length>1;if(Ft)for(let Ut=0;Ut<E.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Ut=0;Ut<E.length;Ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),Ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Ut]);const le=n.get(E[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,$,ct,0,0,$,ct,dt,i.NEAREST),c===!0&&(ge.length=0,B.length=0,ge.push(i.COLOR_ATTACHMENT0+Ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ge.push(lt),B.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ft)for(let Ut=0;Ut<E.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,Ht.__webglColorRenderbuffer[Ut]);const le=n.get(E[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,le,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Yt(C){return Math.min(s.maxSamples,C.samples)}function ce(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function mt(C,E){const $=C.colorSpace,ct=C.format,dt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||$!==gn&&$!==""&&(Se.getTransfer($)===Fe?(ct!==1023||dt!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=L,this.rebindTextures=Dt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=X,this.useMultisampledRTT=ce}function bx(i,t){function e(n,s=""){let r;const a=Se.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1024)return i.LUMINANCE;if(n===1025)return i.LUMINANCE_ALPHA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===Fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===36196||n===37492)return a===Fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===37496)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===37808)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===Fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===36492)return a===Fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const xx={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),f=this._getHandJoint(l,_);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`;class Mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oi({vertexShader:vx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Ki{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,m=null;const _=new Mx,g=e.getContextAttributes();let f=null,x=null;const A=[],v=[],T=new Qt;let w=null;const R=new mn;R.viewport=new be;const D=new mn;D.viewport=new be;const M=[R,D],S=new Pm;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let et=A[it];return et===void 0&&(et=new fo,A[it]=et),et.getTargetRaySpace()},this.getControllerGrip=function(it){let et=A[it];return et===void 0&&(et=new fo,A[it]=et),et.getGripSpace()},this.getHand=function(it){let et=A[it];return et===void 0&&(et=new fo,A[it]=et),et.getHandSpace()};function F(it){const et=v.indexOf(it.inputSource);if(et===-1)return;const X=A[et];X!==void 0&&(X.update(it.inputSource,it.frame,l||a),X.dispatchEvent({type:it.type,data:it.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",K);for(let it=0;it<A.length;it++){const et=v[it];et!==null&&(v[it]=null,A[it].disconnect(et))}I=null,V=null,_.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,x=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(it){l=it},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0){const et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Xi(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,X=null,J=null;g.depth&&(J=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?1027:1026,X=g.stencil?1020:1014);const yt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(yt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Xi(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new wd(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(it){for(let et=0;et<it.removed.length;et++){const X=it.removed[et],J=v.indexOf(X);J>=0&&(v[J]=null,A[J].disconnect(X))}for(let et=0;et<it.added.length;et++){const X=it.added[et];let J=v.indexOf(X);if(J===-1){for(let It=0;It<A.length;It++)if(It>=v.length){v.push(X),J=It;break}else if(v[It]===null){v[It]=X,J=It;break}if(J===-1)break}const yt=A[J];yt&&yt.connect(X)}}const O=new N,H=new N;function L(it,et,X){O.setFromMatrixPosition(et.matrixWorld),H.setFromMatrixPosition(X.matrixWorld);const J=O.distanceTo(H),yt=et.projectionMatrix.elements,It=X.projectionMatrix.elements,Dt=yt[14]/(yt[10]-1),Mt=yt[14]/(yt[10]+1),kt=(yt[9]+1)/yt[5],ge=(yt[9]-1)/yt[5],B=(yt[8]-1)/yt[0],Ce=(It[8]+1)/It[0],Yt=Dt*B,ce=Dt*Ce,At=J/(-B+Ce),mt=At*-B;if(et.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(mt),it.translateZ(At),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),yt[10]===-1)it.projectionMatrix.copy(et.projectionMatrix),it.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const ft=Dt+At,C=Mt+At,E=Yt-mt,$=ce+(J-mt),ct=kt*Mt/C*ft,dt=ge*Mt/C*ft;it.projectionMatrix.makePerspective(E,$,ct,dt,ft,C),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function tt(it,et){et===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(et.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let et=it.near,X=it.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(X=_.depthFar)),S.near=D.near=R.near=et,S.far=D.far=R.far=X,(I!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,V=S.far),R.layers.mask=it.layers.mask|2,D.layers.mask=it.layers.mask|4,S.layers.mask=R.layers.mask|D.layers.mask;const J=it.parent,yt=S.cameras;tt(S,J);for(let It=0;It<yt.length;It++)tt(yt[It],J);yt.length===2?L(S,R,D):S.projectionMatrix.copy(R.projectionMatrix),Y(it,S,J)};function Y(it,et,X){X===null?it.matrix.copy(et.matrixWorld):(it.matrix.copy(X.matrixWorld),it.matrix.invert(),it.matrix.multiply(et.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(et.projectionMatrix),it.projectionMatrixInverse.copy(et.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ys*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(it){c=it,d!==null&&(d.fixedFoveation=it),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=it)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let nt=null;function pt(it,et){if(u=et.getViewerPose(l||a),m=et,u!==null){const X=u.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let J=!1;X.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let It=0;It<X.length;It++){const Dt=X[It];let Mt=null;if(p!==null)Mt=p.getViewport(Dt);else{const ge=h.getViewSubImage(d,Dt);Mt=ge.viewport,It===0&&(t.setRenderTargetTextures(x,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(x))}let kt=M[It];kt===void 0&&(kt=new mn,kt.layers.enable(It),kt.viewport=new be,M[It]=kt),kt.matrix.fromArray(Dt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Dt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),It===0&&(S.matrix.copy(kt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(kt)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const It=h.getDepthInformation(X[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let X=0;X<A.length;X++){const J=v[X],yt=A[X];J!==null&&yt!==void 0&&yt.update(J,et,l||a)}nt&&nt(it,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),m=null}const zt=new Fd;zt.setAnimationLoop(pt),this.setAnimationLoop=function(it){nt=it},this.dispose=function(){}}}const Ri=new Pn,Ax=new oe;function Ex(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,bd(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,x,A,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),h(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,v)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),_(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,x,A):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===1&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===1&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=t.get(f),A=x.envMap,v=x.envMapRotation;A&&(g.envMap.value=A,Ri.copy(v),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(Ri)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,x,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=A*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function _(g,f){const x=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,A){const v=A.program;n.uniformBlockBinding(x,v)}function l(x,A){let v=s[x.id];v===void 0&&(m(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",g));const T=A.program;n.updateUBOMapping(x,T);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function u(x){const A=h();x.__bindingPointIndex=A;const v=i.createBuffer(),T=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const A=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let w=0,R=v.length;w<R;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,S=D.length;M<S;M++){const I=D[M];if(p(I,w,M,T)===!0){const V=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let U=0;for(let K=0;K<F.length;K++){const O=F[K],H=_(O);typeof O=="number"||typeof O=="boolean"?(I.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,V+U,I.__data)):O.isMatrix3?(I.__data[0]=O.elements[0],I.__data[1]=O.elements[1],I.__data[2]=O.elements[2],I.__data[3]=0,I.__data[4]=O.elements[3],I.__data[5]=O.elements[4],I.__data[6]=O.elements[5],I.__data[7]=0,I.__data[8]=O.elements[6],I.__data[9]=O.elements[7],I.__data[10]=O.elements[8],I.__data[11]=0):(O.toArray(I.__data,U),U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,A,v,T){const w=x.value,R=A+"_"+v;if(T[R]===void 0)return typeof w=="number"||typeof w=="boolean"?T[R]=w:T[R]=w.clone(),!0;{const D=T[R];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return T[R]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function m(x){const A=x.uniforms;let v=0;const T=16;for(let R=0,D=A.length;R<D;R++){const M=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,I=M.length;S<I;S++){const V=M[S],F=Array.isArray(V.value)?V.value:[V.value];for(let U=0,K=F.length;U<K;U++){const O=F[U],H=_(O),L=v%T,tt=L%H.boundary,Y=L+tt;v+=tt,Y!==0&&T-Y<H.storage&&(v+=T-Y),V.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=H.storage}}}const w=v%T;return w>0&&(v+=T-w),x.__size=v,x.__cache={},this}function _(x){const A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),A}function g(x){const A=x.target;A.removeEventListener("dispose",g);const v=a.indexOf(A.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class wx{constructor(t={}){const{canvas:e=Sp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,f=null;const x=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=0,this.toneMappingExposure=1;const v=this;let T=!1,w=0,R=0,D=null,M=-1,S=null;const I=new be,V=new be;let F=null;const U=new se(0);let K=0,O=e.width,H=e.height,L=1,tt=null,Y=null;const nt=new be(0,0,O,H),pt=new be(0,0,O,H);let zt=!1;const it=new dc;let et=!1,X=!1;const J=new oe,yt=new oe,It=new N,Dt=new be,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function ge(){return D===null?L:1}let B=n;function Ce(y,G){return e.getContext(y,G)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r171"),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",Z,!1),e.addEventListener("webglcontextcreationerror",k,!1),B===null){const G="webgl2";if(B=Ce(G,y),B===null)throw Ce(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Yt,ce,At,mt,ft,C,E,$,ct,dt,lt,Ht,Ft,Ut,le,xt,Ct,qt,ee,Gt,ue,re,we,q;function P(){Yt=new U0(B),Yt.init(),re=new bx(B,Yt),ce=new P0(B,Yt,t,re),At=new gx(B,Yt),ce.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),mt=new B0(B),ft=new ix,C=new _x(B,Yt,At,ft,ce,re,mt),E=new L0(v),$=new N0(v),ct=new jm(B),we=new R0(B,ct),dt=new O0(B,ct,mt,we),lt=new z0(B,dt,ct,mt),ee=new G0(B,ce,C),xt=new I0(ft),Ht=new nx(v,E,$,Yt,ce,we,xt),Ft=new Ex(v,ft),Ut=new rx,le=new ux(Yt),qt=new w0(v,E,$,At,lt,p,c),Ct=new px(v,lt,ce),q=new Tx(B,mt,ce,At),Gt=new C0(B,Yt,mt),ue=new k0(B,Yt,mt),mt.programs=Ht.programs,v.capabilities=ce,v.extensions=Yt,v.properties=ft,v.renderLists=Ut,v.shadowMap=Ct,v.state=At,v.info=mt}P();const b=new Sx(v,B);this.xr=b,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=Yt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Yt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(y){y!==void 0&&(L=y,this.setSize(O,H,!1))},this.getSize=function(y){return y.set(O,H)},this.setSize=function(y,G,j=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,H=G,e.width=Math.floor(y*L),e.height=Math.floor(G*L),j===!0&&(e.style.width=y+"px",e.style.height=G+"px"),this.setViewport(0,0,y,G)},this.getDrawingBufferSize=function(y){return y.set(O*L,H*L).floor()},this.setDrawingBufferSize=function(y,G,j){O=y,H=G,L=j,e.width=Math.floor(y*j),e.height=Math.floor(G*j),this.setViewport(0,0,y,G)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(nt)},this.setViewport=function(y,G,j,Q){y.isVector4?nt.set(y.x,y.y,y.z,y.w):nt.set(y,G,j,Q),At.viewport(I.copy(nt).multiplyScalar(L).round())},this.getScissor=function(y){return y.copy(pt)},this.setScissor=function(y,G,j,Q){y.isVector4?pt.set(y.x,y.y,y.z,y.w):pt.set(y,G,j,Q),At.scissor(V.copy(pt).multiplyScalar(L).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(y){At.setScissorTest(zt=y)},this.setOpaqueSort=function(y){tt=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(y=!0,G=!0,j=!0){let Q=0;if(y){let z=!1;if(D!==null){const at=D.texture.format;z=at===1033||at===1031||at===1029}if(z){const at=D.texture.type,gt=at===1009||at===1014||at===1012||at===1020||at===1017||at===1018,vt=qt.getClearColor(),_t=qt.getClearAlpha(),bt=vt.r,Rt=vt.g,Xt=vt.b;gt?(m[0]=bt,m[1]=Rt,m[2]=Xt,m[3]=_t,B.clearBufferuiv(B.COLOR,0,m)):(_[0]=bt,_[1]=Rt,_[2]=Xt,_[3]=_t,B.clearBufferiv(B.COLOR,0,_))}else Q|=B.COLOR_BUFFER_BIT}G&&(Q|=B.DEPTH_BUFFER_BIT),j&&(Q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",Z,!1),e.removeEventListener("webglcontextcreationerror",k,!1),qt.dispose(),Ut.dispose(),le.dispose(),ft.dispose(),E.dispose(),$.dispose(),lt.dispose(),we.dispose(),q.dispose(),Ht.dispose(),b.dispose(),b.removeEventListener("sessionstart",Ot),b.removeEventListener("sessionend",St),Pt.stop()};function W(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const y=mt.autoReset,G=Ct.enabled,j=Ct.autoUpdate,Q=Ct.needsUpdate,z=Ct.type;P(),mt.autoReset=y,Ct.enabled=G,Ct.autoUpdate=j,Ct.needsUpdate=Q,Ct.type=z}function k(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ut(y){const G=y.target;G.removeEventListener("dispose",ut),st(G)}function st(y){ot(y),ft.remove(y)}function ot(y){const G=ft.get(y).programs;G!==void 0&&(G.forEach(function(j){Ht.releaseProgram(j)}),y.isShaderMaterial&&Ht.releaseShaderCache(y))}this.renderBufferDirect=function(y,G,j,Q,z,at){G===null&&(G=Mt);const gt=z.isMesh&&z.matrixWorld.determinant()<0,vt=Zt(y,G,j,Q,z);At.setMaterial(Q,gt);let _t=j.index,bt=1;if(Q.wireframe===!0){if(_t=dt.getWireframeAttribute(j),_t===void 0)return;bt=2}const Rt=j.drawRange,Xt=j.attributes.position;let he=Rt.start*bt,Jt=(Rt.start+Rt.count)*bt;at!==null&&(he=Math.max(he,at.start*bt),Jt=Math.min(Jt,(at.start+at.count)*bt)),_t!==null?(he=Math.max(he,0),Jt=Math.min(Jt,_t.count)):Xt!=null&&(he=Math.max(he,0),Jt=Math.min(Jt,Xt.count));const xe=Jt-he;if(xe<0||xe===1/0)return;we.setup(z,Q,vt,j,_t);let ve,de=Gt;if(_t!==null&&(ve=ct.get(_t),de=ue,de.setIndex(ve)),z.isMesh)Q.wireframe===!0?(At.setLineWidth(Q.wireframeLinewidth*ge()),de.setMode(B.LINES)):de.setMode(B.TRIANGLES);else if(z.isLine){let $t=Q.linewidth;$t===void 0&&($t=1),At.setLineWidth($t*ge()),z.isLineSegments?de.setMode(B.LINES):z.isLineLoop?de.setMode(B.LINE_LOOP):de.setMode(B.LINE_STRIP)}else z.isPoints?de.setMode(B.POINTS):z.isSprite&&de.setMode(B.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)de.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const $t=z._multiDrawStarts,De=z._multiDrawCounts,ye=z._multiDrawCount,dn=_t?ct.get(_t).bytesPerElement:1,an=ft.get(Q).currentProgram.getUniforms();for(let Ge=0;Ge<ye;Ge++)an.setValue(B,"_gl_DrawID",Ge),de.render($t[Ge]/dn,De[Ge])}else if(z.isInstancedMesh)de.renderInstances(he,xe,z.count);else if(j.isInstancedBufferGeometry){const $t=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,De=Math.min(j.instanceCount,$t);de.renderInstances(he,xe,De)}else de.render(he,xe)};function rt(y,G,j){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,Bt(y,G,j),y.side=0,y.needsUpdate=!0,Bt(y,G,j),y.side=2):Bt(y,G,j)}this.compile=function(y,G,j=null){j===null&&(j=y),f=le.get(j),f.init(G),A.push(f),j.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),y!==j&&y.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const Q=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let gt=0;gt<at.length;gt++){const vt=at[gt];rt(vt,j,z),Q.add(vt)}else rt(at,j,z),Q.add(at)}),A.pop(),f=null,Q},this.compileAsync=function(y,G,j=null){const Q=this.compile(y,G,j);return new Promise(z=>{function at(){if(Q.forEach(function(gt){ft.get(gt).currentProgram.isReady()&&Q.delete(gt)}),Q.size===0){z(y);return}setTimeout(at,10)}Yt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Vt=null;function Nt(y){Vt&&Vt(y)}function Ot(){Pt.stop()}function St(){Pt.start()}const Pt=new Fd;Pt.setAnimationLoop(Nt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(y){Vt=y,b.setAnimationLoop(y),y===null?Pt.stop():Pt.start()},b.addEventListener("sessionstart",Ot),b.addEventListener("sessionend",St),this.render=function(y,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(G),G=b.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,G,D),f=le.get(y,A.length),f.init(G),A.push(f),yt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),it.setFromProjectionMatrix(yt),X=this.localClippingEnabled,et=xt.init(this.clippingPlanes,X),g=Ut.get(y,x.length),g.init(),x.push(g),b.enabled===!0&&b.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&Kt(at,G,-1/0,v.sortObjects)}Kt(y,G,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,Y),kt=b.enabled===!1||b.isPresenting===!1||b.hasDepthSensing()===!1,kt&&qt.addToRenderList(g,y),this.info.render.frame++,et===!0&&xt.beginShadows();const j=f.state.shadowsArray;Ct.render(j,y,G),et===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=g.opaque,z=g.transmissive;if(f.setupLights(),G.isArrayCamera){const at=G.cameras;if(z.length>0)for(let gt=0,vt=at.length;gt<vt;gt++){const _t=at[gt];ae(Q,z,y,_t)}kt&&qt.render(y);for(let gt=0,vt=at.length;gt<vt;gt++){const _t=at[gt];Et(g,y,_t,_t.viewport)}}else z.length>0&&ae(Q,z,y,G),kt&&qt.render(y),Et(g,y,G);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),y.isScene===!0&&y.onAfterRender(v,y,G),we.resetDefaultState(),M=-1,S=null,A.pop(),A.length>0?(f=A[A.length-1],et===!0&&xt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Kt(y,G,j,Q){if(y.visible===!1)return;if(y.layers.test(G.layers)){if(y.isGroup)j=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(G);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||it.intersectsSprite(y)){Q&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(yt);const gt=lt.update(y),vt=y.material;vt.visible&&g.push(y,gt,vt,j,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||it.intersectsObject(y))){const gt=lt.update(y),vt=y.material;if(Q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Dt.copy(gt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(yt)),Array.isArray(vt)){const _t=gt.groups;for(let bt=0,Rt=_t.length;bt<Rt;bt++){const Xt=_t[bt],he=vt[Xt.materialIndex];he&&he.visible&&g.push(y,gt,he,j,Dt.z,Xt)}}else vt.visible&&g.push(y,gt,vt,j,Dt.z,null)}}const at=y.children;for(let gt=0,vt=at.length;gt<vt;gt++)Kt(at[gt],G,j,Q)}function Et(y,G,j,Q){const z=y.opaque,at=y.transmissive,gt=y.transparent;f.setupLightsView(j),et===!0&&xt.setGlobalState(v.clippingPlanes,j),Q&&At.viewport(I.copy(Q)),z.length>0&&te(z,G,j),at.length>0&&te(at,G,j),gt.length>0&&te(gt,G,j),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function ae(y,G,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Q.id]===void 0&&(f.state.transmissionRenderTarget[Q.id]=new Xi(1,1,{generateMipmaps:!0,type:Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Se.workingColorSpace}));const at=f.state.transmissionRenderTarget[Q.id],gt=Q.viewport||I;at.setSize(gt.z,gt.w);const vt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(U),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),kt&&qt.render(j);const _t=v.toneMapping;v.toneMapping=0;const bt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),f.setupLightsView(Q),et===!0&&xt.setGlobalState(v.clippingPlanes,Q),te(y,j,Q),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Xt=0,he=G.length;Xt<he;Xt++){const Jt=G[Xt],xe=Jt.object,ve=Jt.geometry,de=Jt.material,$t=Jt.group;if(de.side===2&&xe.layers.test(Q.layers)){const De=de.side;de.side=1,de.needsUpdate=!0,Tt(xe,j,Q,ve,de,$t),de.side=De,de.needsUpdate=!0,Rt=!0}}Rt===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}v.setRenderTarget(vt),v.setClearColor(U,K),bt!==void 0&&(Q.viewport=bt),v.toneMapping=_t}function te(y,G,j){const Q=G.isScene===!0?G.overrideMaterial:null;for(let z=0,at=y.length;z<at;z++){const gt=y[z],vt=gt.object,_t=gt.geometry,bt=Q===null?gt.material:Q,Rt=gt.group;vt.layers.test(j.layers)&&Tt(vt,G,j,_t,bt,Rt)}}function Tt(y,G,j,Q,z,at){y.onBeforeRender(v,G,j,Q,z,at),y.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(v,G,j,Q,y,at),z.transparent===!0&&z.side===2&&z.forceSinglePass===!1?(z.side=1,z.needsUpdate=!0,v.renderBufferDirect(j,G,Q,z,y,at),z.side=0,z.needsUpdate=!0,v.renderBufferDirect(j,G,Q,z,y,at),z.side=2):v.renderBufferDirect(j,G,Q,z,y,at),y.onAfterRender(v,G,j,Q,z,at)}function Bt(y,G,j){G.isScene!==!0&&(G=Mt);const Q=ft.get(y),z=f.state.lights,at=f.state.shadowsArray,gt=z.state.version,vt=Ht.getParameters(y,z.state,at,G,j),_t=Ht.getProgramCacheKey(vt);let bt=Q.programs;Q.environment=y.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(y.isMeshStandardMaterial?$:E).get(y.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&y.envMap===null?G.environmentRotation:y.envMapRotation,bt===void 0&&(y.addEventListener("dispose",ut),bt=new Map,Q.programs=bt);let Rt=bt.get(_t);if(Rt!==void 0){if(Q.currentProgram===Rt&&Q.lightsStateVersion===gt)return ne(y,vt),Rt}else vt.uniforms=Ht.getUniforms(y),y.onBeforeCompile(vt,v),Rt=Ht.acquireProgram(vt,_t),bt.set(_t,Rt),Q.uniforms=vt.uniforms;const Xt=Q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Xt.clippingPlanes=xt.uniform),ne(y,vt),Q.needsLights=ht(y),Q.lightsStateVersion=gt,Q.needsLights&&(Xt.ambientLightColor.value=z.state.ambient,Xt.lightProbe.value=z.state.probe,Xt.directionalLights.value=z.state.directional,Xt.directionalLightShadows.value=z.state.directionalShadow,Xt.spotLights.value=z.state.spot,Xt.spotLightShadows.value=z.state.spotShadow,Xt.rectAreaLights.value=z.state.rectArea,Xt.ltc_1.value=z.state.rectAreaLTC1,Xt.ltc_2.value=z.state.rectAreaLTC2,Xt.pointLights.value=z.state.point,Xt.pointLightShadows.value=z.state.pointShadow,Xt.hemisphereLights.value=z.state.hemi,Xt.directionalShadowMap.value=z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Xt.spotShadowMap.value=z.state.spotShadowMap,Xt.spotLightMatrix.value=z.state.spotLightMatrix,Xt.spotLightMap.value=z.state.spotLightMap,Xt.pointShadowMap.value=z.state.pointShadowMap,Xt.pointShadowMatrix.value=z.state.pointShadowMatrix),Q.currentProgram=Rt,Q.uniformsList=null,Rt}function jt(y){if(y.uniformsList===null){const G=y.currentProgram.getUniforms();y.uniformsList=la.seqWithValue(G.seq,y.uniforms)}return y.uniformsList}function ne(y,G){const j=ft.get(y);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function Zt(y,G,j,Q,z){G.isScene!==!0&&(G=Mt),C.resetTextureUnits();const at=G.fog,gt=Q.isMeshStandardMaterial?G.environment:null,vt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:gn,_t=(Q.isMeshStandardMaterial?$:E).get(Q.envMap||gt),bt=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Rt=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Xt=!!j.morphAttributes.position,he=!!j.morphAttributes.normal,Jt=!!j.morphAttributes.color;let xe=0;Q.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(xe=v.toneMapping);const ve=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=ve!==void 0?ve.length:0,$t=ft.get(Q),De=f.state.lights;if(et===!0&&(X===!0||y!==S)){const ze=y===S&&Q.id===M;xt.setState(Q,y,ze)}let ye=!1;Q.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==De.state.version||$t.outputColorSpace!==vt||z.isBatchedMesh&&$t.batching===!1||!z.isBatchedMesh&&$t.batching===!0||z.isBatchedMesh&&$t.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&$t.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&$t.instancing===!1||!z.isInstancedMesh&&$t.instancing===!0||z.isSkinnedMesh&&$t.skinning===!1||!z.isSkinnedMesh&&$t.skinning===!0||z.isInstancedMesh&&$t.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$t.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&$t.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&$t.instancingMorph===!1&&z.morphTexture!==null||$t.envMap!==_t||Q.fog===!0&&$t.fog!==at||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==xt.numPlanes||$t.numIntersection!==xt.numIntersection)||$t.vertexAlphas!==bt||$t.vertexTangents!==Rt||$t.morphTargets!==Xt||$t.morphNormals!==he||$t.morphColors!==Jt||$t.toneMapping!==xe||$t.morphTargetsCount!==de)&&(ye=!0):(ye=!0,$t.__version=Q.version);let dn=$t.currentProgram;ye===!0&&(dn=Bt(Q,G,z));let an=!1,Ge=!1,Qe=!1;const Me=dn.getUniforms(),Xe=$t.uniforms;if(At.useProgram(dn.program)&&(an=!0,Ge=!0,Qe=!0),Q.id!==M&&(M=Q.id,Ge=!0),an||S!==y){At.buffers.depth.getReversed()?(J.copy(y.projectionMatrix),Ep(J),Tp(J),Me.setValue(B,"projectionMatrix",J)):Me.setValue(B,"projectionMatrix",y.projectionMatrix),Me.setValue(B,"viewMatrix",y.matrixWorldInverse);const je=Me.map.cameraPosition;je!==void 0&&je.setValue(B,It.setFromMatrixPosition(y.matrixWorld)),ce.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Me.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,Ge=!0,Qe=!0)}if(z.isSkinnedMesh){Me.setOptional(B,z,"bindMatrix"),Me.setOptional(B,z,"bindMatrixInverse");const ze=z.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Me.setValue(B,"boneTexture",ze.boneTexture,C))}z.isBatchedMesh&&(Me.setOptional(B,z,"batchingTexture"),Me.setValue(B,"batchingTexture",z._matricesTexture,C),Me.setOptional(B,z,"batchingIdTexture"),Me.setValue(B,"batchingIdTexture",z._indirectTexture,C),Me.setOptional(B,z,"batchingColorTexture"),z._colorsTexture!==null&&Me.setValue(B,"batchingColorTexture",z._colorsTexture,C));const ke=j.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&ee.update(z,j,dn),(Ge||$t.receiveShadow!==z.receiveShadow)&&($t.receiveShadow=z.receiveShadow,Me.setValue(B,"receiveShadow",z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Xe.envMap.value=_t,Xe.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(Xe.envMapIntensity.value=G.environmentIntensity),Ge&&(Me.setValue(B,"toneMappingExposure",v.toneMappingExposure),$t.needsLights&&Ee(Xe,Qe),at&&Q.fog===!0&&Ft.refreshFogUniforms(Xe,at),Ft.refreshMaterialUniforms(Xe,Q,L,H,f.state.transmissionRenderTarget[y.id]),la.upload(B,jt($t),Xe,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(la.upload(B,jt($t),Xe,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Me.setValue(B,"center",z.center),Me.setValue(B,"modelViewMatrix",z.modelViewMatrix),Me.setValue(B,"normalMatrix",z.normalMatrix),Me.setValue(B,"modelMatrix",z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ze=Q.uniformsGroups;for(let je=0,ci=ze.length;je<ci;je++){const zn=ze[je];q.update(zn,dn),q.bind(zn,dn)}}return dn}function Ee(y,G){y.ambientLightColor.needsUpdate=G,y.lightProbe.needsUpdate=G,y.directionalLights.needsUpdate=G,y.directionalLightShadows.needsUpdate=G,y.pointLights.needsUpdate=G,y.pointLightShadows.needsUpdate=G,y.spotLights.needsUpdate=G,y.spotLightShadows.needsUpdate=G,y.rectAreaLights.needsUpdate=G,y.hemisphereLights.needsUpdate=G}function ht(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(y,G,j){ft.get(y.texture).__webglTexture=G,ft.get(y.depthTexture).__webglTexture=j;const Q=ft.get(y);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||Yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,G){const j=ft.get(y);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(y,G=0,j=0){D=y,w=G,R=j;let Q=!0,z=null,at=!1,gt=!1;if(y){const _t=ft.get(y);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(B.FRAMEBUFFER,null),Q=!1;else if(_t.__webglFramebuffer===void 0)C.setupRenderTarget(y);else if(_t.__hasExternalTextures)C.rebindTextures(y,ft.get(y.texture).__webglTexture,ft.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Xt=y.depthTexture;if(_t.__boundDepthTexture!==Xt){if(Xt!==null&&ft.has(Xt)&&(y.width!==Xt.image.width||y.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(y)}}const bt=y.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(gt=!0);const Rt=ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Rt[G])?z=Rt[G][j]:z=Rt[G],at=!0):y.samples>0&&C.useMultisampledRTT(y)===!1?z=ft.get(y).__webglMultisampledFramebuffer:Array.isArray(Rt)?z=Rt[j]:z=Rt,I.copy(y.viewport),V.copy(y.scissor),F=y.scissorTest}else I.copy(nt).multiplyScalar(L).floor(),V.copy(pt).multiplyScalar(L).floor(),F=zt;if(At.bindFramebuffer(B.FRAMEBUFFER,z)&&Q&&At.drawBuffers(y,z),At.viewport(I),At.scissor(V),At.setScissorTest(F),at){const _t=ft.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,_t.__webglTexture,j)}else if(gt){const _t=ft.get(y.texture),bt=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.__webglTexture,j||0,bt)}M=-1},this.readRenderTargetPixels=function(y,G,j,Q,z,at,gt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){At.bindFramebuffer(B.FRAMEBUFFER,vt);try{const _t=y.texture,bt=_t.format,Rt=_t.type;if(!ce.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=y.width-Q&&j>=0&&j<=y.height-z&&B.readPixels(G,j,Q,z,re.convert(bt),re.convert(Rt),at)}finally{const _t=D!==null?ft.get(D).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(y,G,j,Q,z,at,gt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){const _t=y.texture,bt=_t.format,Rt=_t.type;if(!ce.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=y.width-Q&&j>=0&&j<=y.height-z){At.bindFramebuffer(B.FRAMEBUFFER,vt);const Xt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Xt),B.bufferData(B.PIXEL_PACK_BUFFER,at.byteLength,B.STREAM_READ),B.readPixels(G,j,Q,z,re.convert(bt),re.convert(Rt),0);const he=D!==null?ft.get(D).__webglFramebuffer:null;At.bindFramebuffer(B.FRAMEBUFFER,he);const Jt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ap(B,Jt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Xt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,at),B.deleteBuffer(Xt),B.deleteSync(Jt),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,G=null,j=0){y.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,y=arguments[1]);const Q=Math.pow(2,-j),z=Math.floor(y.image.width*Q),at=Math.floor(y.image.height*Q),gt=G!==null?G.x:0,vt=G!==null?G.y:0;C.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,gt,vt,z,at),At.unbindTexture()};const Wt=B.createFramebuffer(),wt=B.createFramebuffer();this.copyTextureToTexture=function(y,G,j=null,Q=null,z=0,at=null){y.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,y=arguments[1],G=arguments[2],at=arguments[3]||0,j=null),at===null&&(z!==0?(ms("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=z,z=0):at=0);let gt,vt,_t,bt,Rt,Xt,he,Jt,xe;const ve=y.isCompressedTexture?y.mipmaps[at]:y.image;if(j!==null)gt=j.max.x-j.min.x,vt=j.max.y-j.min.y,_t=j.isBox3?j.max.z-j.min.z:1,bt=j.min.x,Rt=j.min.y,Xt=j.isBox3?j.min.z:0;else{const ke=Math.pow(2,-z);gt=Math.floor(ve.width*ke),vt=Math.floor(ve.height*ke),y.isDataArrayTexture?_t=ve.depth:y.isData3DTexture?_t=Math.floor(ve.depth*ke):_t=1,bt=0,Rt=0,Xt=0}Q!==null?(he=Q.x,Jt=Q.y,xe=Q.z):(he=0,Jt=0,xe=0);const de=re.convert(G.format),$t=re.convert(G.type);let De;G.isData3DTexture?(C.setTexture3D(G,0),De=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(C.setTexture2DArray(G,0),De=B.TEXTURE_2D_ARRAY):(C.setTexture2D(G,0),De=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const ye=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),an=B.getParameter(B.UNPACK_SKIP_PIXELS),Ge=B.getParameter(B.UNPACK_SKIP_ROWS),Qe=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ve.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ve.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Xt);const Me=y.isDataArrayTexture||y.isData3DTexture,Xe=G.isDataArrayTexture||G.isData3DTexture;if(y.isDepthTexture){const ke=ft.get(y),ze=ft.get(G),je=ft.get(ke.__renderTarget),ci=ft.get(ze.__renderTarget);At.bindFramebuffer(B.READ_FRAMEBUFFER,je.__webglFramebuffer),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let zn=0;zn<_t;zn++)Me&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ft.get(y).__webglTexture,z,Xt+zn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ft.get(G).__webglTexture,at,xe+zn)),B.blitFramebuffer(bt,Rt,gt,vt,he,Jt,gt,vt,B.DEPTH_BUFFER_BIT,B.NEAREST);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||ft.has(y)){const ke=ft.get(y),ze=ft.get(G);At.bindFramebuffer(B.READ_FRAMEBUFFER,Wt),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,wt);for(let je=0;je<_t;je++)Me?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,z,Xt+je):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ke.__webglTexture,z),Xe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ze.__webglTexture,at,xe+je):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ze.__webglTexture,at),z!==0?B.blitFramebuffer(bt,Rt,gt,vt,he,Jt,gt,vt,B.COLOR_BUFFER_BIT,B.NEAREST):Xe?B.copyTexSubImage3D(De,at,he,Jt,xe+je,bt,Rt,gt,vt):B.copyTexSubImage2D(De,at,he,Jt,bt,Rt,gt,vt);At.bindFramebuffer(B.READ_FRAMEBUFFER,null),At.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Xe?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(De,at,he,Jt,xe,gt,vt,_t,de,$t,ve.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(De,at,he,Jt,xe,gt,vt,_t,de,ve.data):B.texSubImage3D(De,at,he,Jt,xe,gt,vt,_t,de,$t,ve):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,at,he,Jt,gt,vt,de,$t,ve.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,at,he,Jt,ve.width,ve.height,de,ve.data):B.texSubImage2D(B.TEXTURE_2D,at,he,Jt,gt,vt,de,$t,ve);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,an),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ge),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe),at===0&&G.generateMipmaps&&B.generateMipmap(De),At.unbindTexture()},this.copyTextureToTexture3D=function(y,G,j=null,Q=null,z=0){return y.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,y=arguments[2],G=arguments[3],z=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,G,j,Q,z)},this.initRenderTarget=function(y){ft.get(y).__webglFramebuffer===void 0&&C.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?C.setTextureCube(y,0):y.isData3DTexture?C.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?C.setTexture2DArray(y,0):C.setTexture2D(y,0),At.unbindTexture()},this.resetState=function(){w=0,R=0,D=null,At.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Se._getDrawingBufferColorSpace(t),e.unpackColorSpace=Se._getUnpackColorSpace()}}function Ql(i,t){if(t===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===2||t===1){let e=i.getIndex();if(e===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===2)for(let a=1;a<=n;a++)s.push(e.getX(0)),s.push(e.getX(a)),s.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(e.getX(a)),s.push(e.getX(a+1)),s.push(e.getX(a+2))):(s.push(e.getX(a+2)),s.push(e.getX(a+1)),s.push(e.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}class Rx extends Rs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Dx(e)}),this.register(function(e){return new Fx(e)}),this.register(function(e){return new Vx(e)}),this.register(function(e){return new Wx(e)}),this.register(function(e){return new Xx(e)}),this.register(function(e){return new Ux(e)}),this.register(function(e){return new Ox(e)}),this.register(function(e){return new kx(e)}),this.register(function(e){return new Bx(e)}),this.register(function(e){return new Lx(e)}),this.register(function(e){return new Gx(e)}),this.register(function(e){return new Nx(e)}),this.register(function(e){return new Hx(e)}),this.register(function(e){return new zx(e)}),this.register(function(e){return new Px(e)}),this.register(function(e){return new jx(e)}),this.register(function(e){return new qx(e)})}load(t,e,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ir.extractUrlBase(t);a=ir.resolveURL(l,this.path)}else a=ir.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Ld(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(u){e(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Bd){try{a[_e.KHR_BINARY_GLTF]=new Kx(t)}catch(h){s&&s(h);return}r=JSON.parse(a[_e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new ov(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case _e.KHR_MATERIALS_UNLIT:a[h]=new Ix;break;case _e.KHR_DRACO_MESH_COMPRESSION:a[h]=new $x(r,this.dracoLoader);break;case _e.KHR_TEXTURE_TRANSFORM:a[h]=new Yx;break;case _e.KHR_MESH_QUANTIZATION:a[h]=new Zx;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function Cx(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}const _e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Px{constructor(t){this.parser=t,this.name=_e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const u=new se(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Dd(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Tm(u),l.distance=h;break;case"spot":l=new Am(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Ix{constructor(){this.name=_e.KHR_MATERIALS_UNLIT}getMaterialType(){return Je}extendParams(t,e,n){const s=[];t.color=new se(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],gn),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Oe))}return Promise.all(s)}}class Lx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Dx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Qt(o,o)}return Promise.all(r)}}class Fx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Nx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Ux{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new se(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],gn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Oe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Ox{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class kx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new se().setRGB(o[0],o[1],o[2],gn),Promise.all(r)}}class Bx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Gx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new se().setRGB(o[0],o[1],o[2],gn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Oe)),Promise.all(r)}}class zx{constructor(t){this.parser=t,this.name=_e.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Hx{constructor(t){this.parser=t,this.name=_e.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Kn}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Vx{constructor(t){this.parser=t,this.name=_e.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Wx{constructor(t){this.parser=t,this.name=_e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Xx{constructor(t){this.parser=t,this.name=_e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class jx{constructor(t){this.name=_e.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,s.mode,s.filter),p})})}else return null}}class qx{constructor(t){this.name=_e.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const m of h){const _=new oe,g=new N,f=new rn,x=new N(1,1,1),A=new tm(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,v),c.SCALE&&x.fromBufferAttribute(c.SCALE,v),A.setMatrixAt(v,_.compose(g,f,x));for(const v in c)if(v==="_COLOR_0"){const T=c[v];A.instanceColor=new Go(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);Ue.prototype.copy.call(A,m),this.parser.assignFinalMaterial(A),p.push(A)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Bd="glTF",Ws=12,th={JSON:1313821514,BIN:5130562};class Kx{constructor(t){this.name=_e.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Bd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ws,r=new DataView(t,Ws);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===th.JSON){const l=new Uint8Array(t,Ws+a,o);this.content=n.decode(l)}else if(c===th.BIN){const l=Ws+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $x{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_e.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=jo[u]||u.toLowerCase();o[h]=a[u]}for(const u in t.attributes){const h=jo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[t.attributes[u]],p=xs[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(p){for(const m in p.attributes){const _=p.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}h(p)},o,l,gn,d)})})}}class Yx{constructor(){this.name=_e.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Zx{constructor(){this.name=_e.KHR_MESH_QUANTIZATION}}class Gd extends pr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-e,h=(n-e)/u,d=h*h,p=d*h,m=t*l,_=m-l,g=-2*p+3*d,f=p-d,x=1-g,A=f-d+h;for(let v=0;v!==o;v++){const T=a[_+v+o],w=a[_+v+c]*u,R=a[m+v+o],D=a[m+v]*u;r[v]=x*T+A*w+g*R+f*D}return r}}const Jx=new rn;class Qx extends Gd{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return Jx.fromArray(r).normalize().toArray(r),r}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},eh={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},nh={33071:1001,33648:1002,10497:1e3},po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tv={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},mo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ev(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),i.DefaultMaterial}function Ci(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ni(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function nv(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,u=t.length;l<u;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function iv(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sv(i){let t;const e=i.extensions&&i.extensions[_e.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+go(e.attributes):t=i.indices+":"+go(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+go(i.targets[n]);return t}function go(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function qo(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const av=new oe;class ov{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Cx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ym(this.options.manager):this.textureLoader=new Cm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ld(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ci(r,o,s),ni(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const a=e[s].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[_e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(ir.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const a=po[s.type],o=xs[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Te(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=po[s.type],l=xs[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(p&&p!==h){const f=Math.floor(d/p),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let A=e.cache.get(x);A||(_=new l(o,f*p,s.count*p/u),A=new hc(_,p/u),e.cache.add(x,A)),g=new kn(A,c,d%p/u,m)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),g=new Te(_,c,m);if(s.sparse!==void 0){const f=po.SCALAR,x=xs[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,T=new x(a[1],A,s.sparse.count*f),w=new l(a[2],v,s.sparse.count*c);o!==null&&(g=new Te(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,D=T.length;R<D;R++){const M=T[R];if(g.setX(M,w[R*c]),c>=2&&g.setY(M,w[R*c+1]),c>=3&&g.setZ(M,w[R*c+2]),c>=4&&g.setW(M,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const s=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=eh[d.magFilter]||1006,u.minFilter=eh[d.minFilter]||1008,u.wrapS=nh[d.wrapS]||1e3,u.wrapT=nh[d.wrapT]||1e3,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==1003&&u.minFilter!==1006,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const a=s.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Ke(_);g.needsUpdate=!0,d(g)}),e.load(ir.resolveURL(h,r.path),m,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),ni(h,a),h.userData.mimeType=a.mimeType||rv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[_e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[_e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[_e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Td,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ed,Cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return fr}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[_e.KHR_MATERIALS_UNLIT]){const h=s[_e.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,e))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],gn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",h.baseColorTexture,Oe)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=2);const u=r.alphaMode||mo.OPAQUE;if(u===mo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===mo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Je&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Qt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Je&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Je){const h=r.emissiveFactor;o.emissive=new se().setRGB(h[0],h[1],h[2],gn)}return r.emissiveTexture!==void 0&&a!==Je&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Oe)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ni(h,r),e.associations.set(h,{materials:t}),r.extensions&&Ci(s,h,r),h})}createUniqueName(t){const e=Re.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[_e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return ih(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],u=sv(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[_e.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ih(new He,l,e),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?ev(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,m=u.length;p<m;p++){const _=u[p],g=a[p];let f;const x=l[p];if(g.mode===Tn.TRIANGLES||g.mode===Tn.TRIANGLE_STRIP||g.mode===Tn.TRIANGLE_FAN||g.mode===void 0)f=r.isSkinnedMesh===!0?new Zp(_,x):new Ae(_,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===Tn.TRIANGLE_STRIP?f.geometry=Ql(f.geometry,1):g.mode===Tn.TRIANGLE_FAN&&(f.geometry=Ql(f.geometry,2));else if(g.mode===Tn.LINES)f=new im(_,x);else if(g.mode===Tn.LINE_STRIP)f=new fc(_,x);else if(g.mode===Tn.LINE_LOOP)f=new sm(_,x);else if(g.mode===Tn.POINTS)f=new rm(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&iv(f,r),f.name=e.createUniqueName(r.name||"mesh_"+t),ni(f,r),g.extensions&&Ci(s,f,g),e.assignFinalMaterial(f),h.push(f)}for(let p=0,m=h.length;p<m;p++)e.associations.set(h[p],{meshes:t,primitives:p});if(h.length===1)return r.extensions&&Ci(s,h[0],r),h[0];const d=new Rn;r.extensions&&Ci(s,d,r),e.associations.set(d,{meshes:t});for(let p=0,m=h.length;p<m;p++)d.add(h[p]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new mn(hd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new bc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ni(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new oe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new uc(o,c)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const p=s.channels[h],m=s.samplers[p.sampler],_=p.target,g=_.node,f=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],m=h[2],_=h[3],g=h[4],f=[];for(let x=0,A=d.length;x<A;x++){const v=d[x],T=p[x],w=m[x],R=_[x],D=g[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,T,w,R,D);if(M)for(let S=0;S<M.length;S++)f.push(M[S])}return new Vo(r,void 0,f)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,av)});for(let p=0,m=h.length;p<m;p++)u.add(h[p]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Sd:l.length>1?u=new Rn:l.length===1?u=l[0]:u=new Ue,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ni(u,r),r.extensions&&Ci(n,u,r),r.matrix!==void 0){const h=new oe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new Rn;n.name&&(r.name=s.createUniqueName(n.name)),ni(r,n),n.extensions&&Ci(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of s.associations)(d instanceof Cn||d instanceof Ke)&&h.set(d,p);return u.traverse(d=>{const p=s.associations.get(d);p!=null&&h.set(d,p)}),h};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){const a=[],o=t.name?t.name:t.uuid,c=[];mi[r.path]===mi.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(mi[r.path]){case mi.weights:l=Ss;break;case mi.rotation:l=As;break;case mi.position:case mi.scale:l=Es;break;default:switch(n.itemSize){case 1:l=Ss;break;case 2:case 3:default:l=Es;break}break}const u=s.interpolation!==void 0?tv[s.interpolation]:2301,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const m=new l(c[d]+"."+mi[r.path],e.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=qo(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof As?Qx:Gd;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cv(i,t,e){const n=t.attributes,s=new un;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){const u=qo(xs[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new N,c=new N;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],p=d.min,m=d.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),d.normalized){const _=qo(xs[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new In;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ih(i,t,e){const n=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=jo[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!i.index){const a=e.getDependency("accessor",t.indices).then(function(o){i.setIndex(o)});s.push(a)}return Se.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Se.workingColorSpace}" not supported.`),ni(i,t),cv(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?nv(i,t.targets,e):i})}var lv=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?t:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var x=new Uint8Array(f.length),A=0;A<f.length;++A){var v=f.charCodeAt(A);x[A]=v>96?v-97:v>64?v-39:v+4}for(var T=0,A=0;A<f.length;++A)x[T++]=x[A]<60?n[x[A]]:(x[A]-60)*64+x[++A];return x.buffer.slice(0,T)}function c(f,x,A,v,T,w){var R=r.exports.sbrk,D=A+3&-4,M=R(D*v),S=R(T.length),I=new Uint8Array(r.exports.memory.buffer);I.set(T,S);var V=f(M,A,v,S,T.length);if(V==0&&w&&w(M,D,v),x.set(I.subarray(M,M+A*v)),R(M-R(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function p(f){var x={object:new Worker(f),pending:0,requests:{}};return x.object.onmessage=function(A){var v=A.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(f){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),A=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(A),T=0;T<f;++T)h[T]=p(v);URL.revokeObjectURL(v)}function _(f,x,A,v,T){for(var w=h[0],R=1;R<h.length;++R)h[R].pending<w.pending&&(w=h[R]);return new Promise(function(D,M){var S=new Uint8Array(A),I=d++;w.pending+=f,w.requests[I]={resolve:D,reject:M},w.object.postMessage({id:I,count:f,size:x,source:S,mode:v,filter:T},[S.buffer])})}function g(f){a.then(function(){var x=f.data;try{var A=new Uint8Array(x.count*x.size);c(r.exports[x.mode],A,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:A},[A.buffer])}catch(v){self.postMessage({id:x.id,count:x.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(f){m(f)},decodeVertexBuffer:function(f,x,A,v,T){c(r.exports.meshopt_decodeVertexBuffer,f,x,A,v,r.exports[l[T]])},decodeIndexBuffer:function(f,x,A,v){c(r.exports.meshopt_decodeIndexBuffer,f,x,A,v)},decodeIndexSequence:function(f,x,A,v){c(r.exports.meshopt_decodeIndexSequence,f,x,A,v)},decodeGltfBuffer:function(f,x,A,v,T,w){c(r.exports[u[T]],f,x,A,v,r.exports[l[w]])},decodeGltfBufferAsync:function(f,x,A,v,T){return h.length>0?_(f,x,A,u[v],l[T]):a.then(function(){var w=new Uint8Array(f*x);return c(r.exports[u[v]],w,f,x,A,r.exports[l[T]]),w})}}})();function Mc(){return new Rx().setMeshoptDecoder(lv)}let zd="";function hv(i){zd=i===""||i.endsWith("/")?i:`${i}/`}const Mi=i=>`${zd}${i}`,uv=.001,dv=.5,sh={playing:!1,settling:!1,stillFor:0,pending:1},Hd=i=>i.playing||i.settling||i.pending>0,fv=i=>!i.playing&&!i.settling,pv=i=>({...i,playing:!0,settling:!1,stillFor:0,pending:0}),mv=i=>i.playing?{...i,playing:!1,settling:!0,stillFor:0}:i,gv=i=>Hd(i)?i:{...i,pending:1};function _v(i,t,e){const n=Math.max(0,i.pending-1);if(!i.settling)return{...i,pending:n};const s=t<uv?i.stillFor+e:0;return{...i,pending:n,stillFor:s,settling:s<dv}}function rh(i,t,e){return i&&i.clientWidth>0&&i.clientHeight>0?{width:i.clientWidth,height:i.clientHeight}:e||(t.innerWidth>0&&t.innerHeight>0?{width:t.innerWidth,height:t.innerHeight}:{width:1280,height:720})}const ji="#c8f323",bv="#0b0f10";function xv(i){const t=parseInt(i.slice(1),16);return[t>>16&255,t>>8&255,t&255]}const vv=xv(ji),yv=ji,Mv="#7aa2ff",Sv="#ffb340",Av="#b18cff",Ev=ji,Tv=ji,Xs=new N;function Sn(i,t,e,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Xs.copy(t),Xs[n]=0,Xs.normalize();const l=.5*a/(a+o),u=1-Xs.angleTo(i)/c;return Math.sign(Xs[e])===1?u*l:o/(a+o)+l+l*(1-u)}class wv extends yi{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new N,c=new N,l=new N(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,m=new N,_=.5/s;for(let g=0,f=0;g<u.length;g+=3,f+=2)switch(o.fromArray(u,g),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[g+0]=l.x*Math.sign(o.x)+c.x*r,u[g+1]=l.y*Math.sign(o.y)+c.y*r,u[g+2]=l.z*Math.sign(o.z)+c.z*r,h[g+0]=c.x,h[g+1]=c.y,h[g+2]=c.z,Math.floor(g/p)){case 0:m.set(1,0,0),d[f+0]=Sn(m,c,"z","y",r,n),d[f+1]=1-Sn(m,c,"y","z",r,e);break;case 1:m.set(-1,0,0),d[f+0]=1-Sn(m,c,"z","y",r,n),d[f+1]=1-Sn(m,c,"y","z",r,e);break;case 2:m.set(0,1,0),d[f+0]=1-Sn(m,c,"x","z",r,t),d[f+1]=Sn(m,c,"z","x",r,n);break;case 3:m.set(0,-1,0),d[f+0]=1-Sn(m,c,"x","z",r,t),d[f+1]=1-Sn(m,c,"z","x",r,n);break;case 4:m.set(0,0,1),d[f+0]=1-Sn(m,c,"x","y",r,t),d[f+1]=1-Sn(m,c,"y","x",r,e);break;case 5:m.set(0,0,-1),d[f+0]=Sn(m,c,"x","y",r,t),d[f+1]=1-Sn(m,c,"y","x",r,e);break}}}function Rv(i){const t=new fr({color:Ev,roughness:.6,toneMapped:!1}),e=new Rn,n=new Ae(new wv(.42,.09,.42,4,.035),t);n.position.y=.045;const s=[new Qt(.17,.06),new Qt(.15,.1)];for(let a=0;a<=8;a++)s.push(new Qt(.15-.11*a/8,.1+.31*a/8));for(let a=1;a<=4;a++){const o=a/4*(Math.PI/2);s.push(new Qt(.04*Math.cos(o),.41+.04*Math.sin(o)))}const r=new Ae(new pc(s,24),t);return e.add(n,r),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e.scale.setScalar(i),e}function Vd(i,t,e,n,s,r){let a=r;const o=()=>(a=a*1103515245+12345&2147483647)/2147483647,c=e/n,l=5*c;for(let u=Math.floor(s/5)*5;u<s+n;u+=5){const h=(u-s)*c,d=i.createLinearGradient(0,h,0,h+l);(Math.floor(u/5)%2+2)%2===0?(d.addColorStop(0,"#0f563c"),d.addColorStop(1,"#0d4e35")):(d.addColorStop(0,"#094027"),d.addColorStop(1,"#0b432b")),i.fillStyle=d,i.fillRect(0,h,t,l+1)}for(let u=0;u<20;u++){const h=(u%5+.15+o()*.7)*(t/5),d=(Math.floor(u/5)+.15+o()*.7)*(e/4),p=(40+o()*120)*(t/1024),m=o()>.5,_=i.createRadialGradient(h,d,0,h,d,p);_.addColorStop(0,m?"rgba(130,140,60,0.078)":"rgba(8,30,12,0.09)"),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.fillRect(h-p,d-p,2*p,2*p)}Wd(i,t,e,o,1)}function Wd(i,t,e,n,s){const r=o=>(o*s).toFixed(3),a=t*e/1048576;for(let o=0;o<6400*a;o++){const c=n()>.5;i.fillStyle=c?`rgba(175,220,185,${r(.05)})`:`rgba(0,16,4,${r(.07)})`,i.fillRect(n()*t,n()*e,6+n()*22,1)}for(let o=0;o<9600*a;o++){const c=n()>.5;i.fillStyle=c?`rgba(180,220,190,${r(.04)})`:`rgba(0,12,3,${r(.05)})`,i.fillRect(n()*t,n()*e,2+n()*5,1)}}function Cv(i,t){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");Vd(n,1024,1024,t,0,7),n.strokeStyle="rgba(255,255,255,0.8)",n.lineWidth=5,n.strokeRect(10,10,1004,1004),Xd(n);const s=new Ln(e);return s.colorSpace=Oe,s.flipY=!1,s}function Xd(i,t=1,e=1,n=.12){i.save(),i.translate(512,512),i.scale(t,e);const s=i.createRadialGradient(0,0,480,0,0,760);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,`rgba(0,0,0,${n})`),i.fillStyle=s,i.fillRect(-2048,-2048,4096,4096),i.restore()}const Pv=2.5;function jd(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}const sn=6;function Iv(i,t,e){const n=document.createElement("canvas");n.width=1024,n.height=1024;const s=n.getContext("2d");Vd(s,1024,1024,t+2*e,-e,7),s.fillStyle="rgba(0,0,0,0.12)",s.fillRect(0,0,1024,1024),Xd(s,i/(i+2*e),t/(t+2*e));const r=e/(i+2*e)*1024,a=e/(t+2*e)*1024,o=[[0,0,r,0],[1024,0,1024-r,0],[0,0,0,a],[0,1024,0,1024-a]];for(const[u,h,d,p]of o){const m=s.createLinearGradient(u,h,d,p);m.addColorStop(0,"rgba(0,0,0,0.55)"),m.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=m,s.fillRect(0,0,1024,1024)}const c=Pv*2/(i+t+4*e)*1024;s.globalCompositeOperation="destination-in",s.fillStyle="#fff",jd(s,1,1,1022,1022,c),s.fill(),s.globalCompositeOperation="source-over";const l=new Ln(n);return l.colorSpace=Oe,l.flipY=!1,l}function Lv(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d");t.filter="blur(14px)",t.fillStyle="rgba(0,0,0,0.9)",jd(t,40,40,176,176,34),t.fill();const e=new Ln(i);return e.flipY=!1,e}let js=null;function Dv(){if(js)return js;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(0,0,0,0.9)"),e.addColorStop(.6,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),js=new Ln(i),js.userData.shared=!0,js}function Fv(i){const t=new Ae(new mc(i/2,24).rotateX(-Math.PI/2),new Je({map:Dv(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return t.position.y=.005,t.renderOrder=1,t}const qn={halfW:3.348,top:2.5,zMin:-1.4688,zMax:.0576},Nv=.5;function or(i,t){const e=new Map;for(const r of i.equipment??[])r.type==="goal"&&e.set(r.at[1],(e.get(r.at[1])??0)+1);if(!e.size)return t;const n=Math.max(...e.values()),s=n+(n-1)*Nv;return Math.min(t,i.pitch.width/(2*qn.halfW*s))}let ah=null;function Uv(i){return ah??(ah=i.loadAsync(Mi("assets/goal.glb")).then(t=>t.scene).catch(t=>{throw ah=null,t}))}let oh=!1;function Ov(i,t){if(oh||!t)return;oh=!0;const e=new un().setFromObject(i),n=Math.max(Math.abs(e.max.x-i.position.x),Math.abs(e.min.x-i.position.x))/t,s=(e.max.y-i.position.y)/t;(Math.abs(n-qn.halfW)>.05||Math.abs(s-qn.top)>.05)&&console.warn(`[engine3d] goal.glb no longer matches GOAL_BOX (half-width ${n.toFixed(3)} vs ${qn.halfW}, top ${s.toFixed(3)} vs ${qn.top}) — the camera fit and tools/look/corpus_check.ts size the goal from those numbers; update scene/pitch.ts`)}function kv(i){const{width:t,length:e}=i.pitch;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([n,s])=>new N(n*(t/2+sn),0,s*(e/2+sn)))}function Ko(i,t){const{width:e,length:n}=i.pitch,s=or(i,t),r=[];for(const a of i.equipment??[]){if(a.type!=="goal")continue;const o=a.at[0]-e/2,c=a.at[1]-n/2,l=a.at[1]>n/2?-1:1,u=[qn.zMin*s*l,qn.zMax*s*l];for(const h of[-3.348*s,qn.halfW*s])for(const d of[0,qn.top*s])for(const p of u)r.push(new N(o+h,d,c+p))}return r}const Bv=600,qd=Bv/2*Math.SQRT2,ch=30,Gv=-.06,zv=-.04,Hv=660496,Vv="#04170c",lh=.7,Kd=1.2;function Wv(i,t,e){const n=Math.max(t,e),s=n/2+sn,r=Kd*n;return r>s?1-(1-lh)*Sc((i-s)/(r-s)):i>=s?lh:1}function Sc(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}const Xv=1.6,jv=2.6;function qv(i,t){const e=Math.max(i,t);return{near:Xv*e+sn,far:jv*e+sn}}const hh="#0b1f22",_o="#010203",Kv=1.02;function $v(i,t){return Math.hypot(i/2+sn,t/2+sn)*Kv}const Yv=.12,Zv=1.15,Ac=(i,t)=>Math.hypot(i/2,t/2),$d=(i,t)=>Ac(i,t)*Zv,Xr=12,bo=18,uh=.3,Jv=2.4,dh=1.2,Qv=.4,ty=6;function ey(i,t,e=1/0){const n=i/2+sn,s=t/2+sn,r=t>=i?"z":"x",a=r==="z"?n:s,o=r==="z"?s:n,c=ny(a,o,e*iy),l=[-(o+c),o+c],u=-(a+c),h=l.map(d=>r==="z"?[u,d]:[d,u]);return{axis:r,masts:h}}function ny(i,t,e){if(!(e<Math.hypot(i+Xr,t+Xr)))return Xr;const n=i+t,s=i*i+t*t-e*e,r=n*n-2*s;return r>0?Math.max(0,Math.min(Xr,(-n+Math.sqrt(r))/2)):0}const iy=.97;function Ec(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d");t.fillStyle=Vv,t.fillRect(0,0,512,512);let e=7;Wd(t,512,512,()=>(e=e*1103515245+12345&2147483647)/2147483647,.25);const n=new Ln(i);return n.colorSpace=Oe,n.wrapS=n.wrapT=1e3,n}function sy(){const i=new Rn,t=new ar({color:1251867}),e=new Ae(new yi(uh,bo,uh),t);e.position.y=bo/2;const n=new Ae(new yi(Jv,dh,Qv),t);n.position.y=bo+dh/2;const s=new $p(new yd({map:ry(),color:16772564,opacity:.18,blending:2,depthWrite:!1,transparent:!0,fog:!1,toneMapped:!1}));return s.scale.setScalar(ty),s.position.y=n.position.y,s.geometry.userData.shared=!0,i.add(e,n,s),i}let qs=null;function ry(){if(qs)return qs;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,237,212,1)"),e.addColorStop(.35,"rgba(255,237,212,0.45)"),e.addColorStop(1,"rgba(255,237,212,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),qs=new Ln(i),qs.userData.shared=!0,qs}function ay(){return[[0,_o],[Yo,hh],[ly,hh],[Tc,_o],[1,_o]]}function oy(){const i=document.createElement("canvas");i.width=4,i.height=256;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);for(const[s,r]of ay())e.addColorStop(Math.min(1,Math.max(0,1-s)),r);t.fillStyle=e,t.fillRect(0,0,4,256);const n=new Ln(i);return n.colorSpace=Oe,n.wrapS=n.wrapT=1001,n}const $o=.03,fh=.06,cy=.28,Tc=1,Yo=Tc*fh/(fh+cy-$o),ly=.85;function hy(i,t={repeat:0,offset:0}){const e=Math.max(i,$o+.03);return t.repeat=(Tc-Yo)/(e-$o),t.offset=Yo-t.repeat*(1-e),t}const uy=60,dy=i=>Math.asin(Math.min(Math.max(-i,-1),1))*180/Math.PI<uy,fy=-1e3;function Yd(i,t,e,n,s,r){const a=new ar({map:e,vertexColors:!0}),o=new ar({map:e,vertexColors:!0,transparent:!0,depthWrite:!1}),c=Kd*Math.max(i,t),l=n>c?[[0,c,96],[c,n,8]]:[[0,n,96]];s>n&&l.push([n,s,16]);const u=[];for(const[h,d,p]of l){const m=h===n,_=new wa(h,d,128,p).rotateX(-Math.PI/2),g=_.getAttribute("position"),f=_.getAttribute("uv"),x=m?4:3,A=new Float32Array(g.count*x);for(let T=0;T<g.count;T++){const w=g.getX(T),R=g.getZ(T);f.setXY(T,w/ch,R/ch);const D=Math.hypot(w,R),M=Wv(D,i,t);A[x*T]=A[x*T+1]=A[x*T+2]=M,m&&(A[x*T+3]=d>h?1-Sc((D-h)/(d-h)):1)}f.needsUpdate=!0,_.setAttribute("color",new Te(A,x));const v=new Ae(_,m?o:a);v.userData[r]=m,v.position.y=Gv,u.push(v)}return u}function py(i,t,e=1,n=Ec()){const s=new Rn;n.anisotropy=e;for(const r of Yd(i,t,n,Ac(i,t),$d(i,t),"floatRim"))s.add(r);return s}const xo=16;function my(i,t,e){const n=document.createElement("canvas");n.width=n.height=512;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,512,512);const r=512/(i+2*e),a=512/(t+2*e),o=Ac(i,t),c=$d(i,t);s.save(),s.translate(256,256),s.scale(1,a/r);const l=s.createRadialGradient(0,0,o*r,0,0,c*r);for(let h=0;h<=xo;h++){const d=Math.round(255*(1-Sc(h/xo)));l.addColorStop(h/xo,`rgb(${d},${d},${d})`)}s.fillStyle=l,s.fillRect(-4096,-4096,8192,8192),s.restore();const u=new Ln(n);return u.flipY=!1,u}function gy(i,t,e=1,n=qd,s=Ec()){const r=new Rn;s.anisotropy=e;const a=Math.max(n,Math.max(i,t)/2+sn+1),o=a*(1-Yv),c=Math.max(o,Math.max(i,t)/2+sn);for(const u of Yd(i,t,s,c,a,"rimFade"))r.add(u);const{masts:l}=ey(i,t,a);for(const[u,h]of l){const d=sy();d.name="mast",d.position.set(u,0,h),r.add(d)}return r}async function _y(i,t,e=1,n=1,s=qd){const r=or(t,n),{width:a,length:o}=t.pitch,c=(M,S=0)=>new N(M[0]-a/2,S,M[1]-o/2),l=M=>(M.anisotropy=e,M),u=l(Iv(a,o,sn)),h=()=>new Gn(a+2*sn,o+2*sn).rotateX(-Math.PI/2),d=new Ae(h(),new ar({map:u,transparent:!0})),p=new Ae(h(),new ar({map:u,alphaMap:my(a,o,sn),transparent:!0}));for(const M of[d,p])M.position.y=-.02,M.renderOrder=-1,M.receiveShadow=!0;const m=new Ae(new Gn((a+2*sn)*1.5,(o+2*sn)*1.5).rotateX(-Math.PI/2),new Je({map:Lv(),transparent:!0,depthWrite:!1}));m.position.y=zv,m.renderOrder=-2,i.add(m);const _=new Ae(new Gn(a,o).rotateX(-Math.PI/2),new fr({map:l(Cv(a,o)),roughness:.9}));_.receiveShadow=!0;const g=Ec(),f=gy(a,o,e,s,g),x=py(a,o,e,g);i.add(d,p,_,f,x);const A=M=>{f.visible=M,m.visible=M,d.visible=M,x.visible=!M,p.visible=!M};A(!0);const v=f.children.filter(M=>M.name==="mast"),T=M=>{for(const S of v)S.visible=M};T(!1);const w=Mc(),R=[],D=[];for(const M of t.equipment??[])if(M.type==="cone"){const S=Rv(n);S.position.copy(c(M.at,0)),i.add(S),D.push(S)}else{const S=(await Uv(w)).clone();S.position.copy(c(M.at)),M.at[1]>o/2&&(S.rotation.y=Math.PI),S.scale.setScalar(r),i.add(S),R.push(S),Ov(S,r)}return{toWorld:c,goals:R,cones:D,setWorld:A,setMasts:T}}const ph=new N(10,20,8).normalize(),by=1.05,Zo=2048,xy=1024,vy=1600,yy=(i,t)=>Math.max(i,t)>=vy?Zo:xy,My=5;function Sy(i){const t=new un().setFromPoints(i).getCenter(new N);let e=0;for(const r of i)e=Math.max(e,r.distanceTo(t));const n=Math.max(e*1.15,8),s=n*2;return{centre:t,radius:n,distance:s,far:s+n}}function wc(i,t=()=>new wx({antialias:!0})){const e=t();e.setPixelRatio(Math.min(devicePixelRatio,2));let s=rh(i,window);const r=new Set;e.setSize(s.width,s.height,!1);const a=e.domElement;a.style.width="100%",a.style.height="100%",a.style.display="block",e.shadowMap.enabled=!0,e.shadowMap.type=2,e.toneMapping=4,e.toneMappingExposure=by,e.outputColorSpace=Oe,i.appendChild(a);const o=new Kp;o.background=new se(bv);const c=new mn(45,s.width/s.height,1,1e3);c.position.set(8,6,12),c.lookAt(0,1,0);const l=new Dd(16772564,My);l.position.copy(ph).multiplyScalar(40),l.castShadow=!0,l.shadow.mapSize.set(Zo,Zo),l.shadow.radius=4,o.add(l,l.target,new Mm(12571874,2902572,.9));let u=Math.min(devicePixelRatio,2);function h(){var yt;const J=yy(s.width*u,s.height*u);l.shadow.mapSize.width!==J&&(l.shadow.mapSize.set(J,J),(yt=l.shadow.map)==null||yt.dispose(),l.shadow.map=null)}h();function d(){const J=rh(i,window,s),yt=Math.min(devicePixelRatio,2),It=yt!==u;if(It&&(u=yt,e.setPixelRatio(u)),J.width!==s.width||J.height!==s.height){s=J,h(),c.aspect=s.width/s.height,c.updateProjectionMatrix(),e.setSize(s.width,s.height,!1),S();for(const Dt of[...r])Dt()}else It&&(e.setSize(s.width,s.height,!1),h(),S())}const p=typeof ResizeObserver=="function"?new ResizeObserver(d):null;p?p.observe(i):addEventListener("resize",d);let m=null;const _=()=>{g(),d()};function g(){m==null||m.removeEventListener("change",_),m=typeof matchMedia=="function"?matchMedia(`(resolution: ${devicePixelRatio}dppx)`):null,m==null||m.addEventListener("change",_)}g();let f=!0,x=!1,A=0;function v(){x||(x=!0,A=requestAnimationFrame(L))}function T(){f=!document.hidden,f&&(V=-1,v())}document.addEventListener("visibilitychange",T);let w=!0,R=sh,D=0;const M=new N;function S(){R=gv(R),f&&(x||(V=-1),v())}let I=()=>{},V=-1,F=null,U=null,K=null,O=!0;function H(J,yt){if(I(J,yt),X(),F&&o.fog){const It=c.position.length();o.fog.near=It+F.near,o.fog.far=It+F.far}e.render(o,c),D++}function L(J){if(x=!1,!f)return;const yt=V<0?0:(J-V)/1e3;V=J,M.copy(c.position),H(yt,J),R=_v(R,M.distanceTo(c.position),yt),w||Hd(R)?v():V=-1}function tt(J){if(!J.length)return;const{centre:yt,radius:It,distance:Dt,far:Mt}=Sy(J);l.target.position.copy(yt),l.target.updateMatrixWorld(),l.position.copy(ph).multiplyScalar(Dt).add(yt);const kt=l.shadow.camera;kt.left=-It,kt.right=It,kt.top=It,kt.bottom=-It,kt.near=.5,kt.far=Mt,kt.updateProjectionMatrix()}function Y(J){if(F=J,!J){o.fog=null;return}o.fog??(o.fog=new lc(Hv,J.near,J.far))}function nt(J){if(K=J,!J){U&&(U.visible=!1);return}U||(U=new Ae(new Gn(1,1),new Je({map:oy(),depthWrite:!1,depthTest:!1,toneMapped:!1,fog:!1})),U.renderOrder=fy,U.frustumCulled=!1,o.add(U)),U.visible=O}function pt(J){O=J,U&&(U.visible=J&&!!K)}const zt=new N,it=new N,et={repeat:0,offset:0};function X(){if(!U||!K)return;if(!O){U.visible=!1;return}if(c.getWorldDirection(zt),U.visible=dy(zt.y),!U.visible)return;const J=Math.hypot(c.position.x,c.position.z)||1;it.set(-c.position.x/J*K,0,-c.position.z/J*K),it.project(c);const yt=(1-it.y)/2,It=c.near*1.5,Dt=2*It*Math.tan(c.fov*Math.PI/360);U.scale.set(Dt*c.aspect,Dt,1),U.quaternion.copy(c.quaternion),U.position.copy(c.position).addScaledVector(zt,It),hy(yt,et);const Mt=U.material.map;Mt.repeat.set(1,et.repeat),Mt.offset.set(0,et.offset)}return{scene:o,camera:c,renderer:e,fitShadow:tt,setFog:Y,setHorizon:nt,setSky:pt,size:()=>({...s}),remeasure:d,onBox(J){return r.add(J),()=>{r.delete(J)}},start(J){I=J,v()},park(J){I===J&&(cancelAnimationFrame(A),x=!1,I=()=>{},R=sh,D=0,V=-1)},step(J,yt=performance.now()){H(J,yt)},frames:()=>D,rule:{enable(){w=!1},play(){R=pv(R),S()},pause(){R=mv(R),S()},wake:S,snap:()=>fv(R)},dispose(){f=!1,r.clear(),m==null||m.removeEventListener("change",_),p?p.disconnect():removeEventListener("resize",d),document.removeEventListener("visibilitychange",T),e.dispose(),e.forceContextLoss(),e.domElement.remove()}}}function Ay(i,t){for(const e of t)e.traverse(n=>{var r,a;const s=n;(r=s.skeleton)==null||r.dispose();for(const o of Jd(s))o.userData.drillOwned&&o.dispose();(a=s.geometry)!=null&&a.userData.drillOwned&&s.geometry.dispose()}),i.remove(e);Zd(i)}function Zd(i){i.traverse(t=>{var n,s;const e=t;(n=e.geometry)!=null&&n.userData.shared||(s=e.geometry)==null||s.dispose();for(const r of Jd(e)){for(const a of Object.values(r)){const o=a;o!=null&&o.isTexture&&!o.userData.shared&&o.dispose()}r.dispose()}})}const Jd=i=>Array.isArray(i.material)?i.material:i.material?[i.material]:[];function Ey(i){const t=new Map,e=new Map,n=i.clone();return Qd(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Qd(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Qd(i.children[n],t.children[n],e)}const Ty=["shirt","jersey","top","tshirt"];let Pi=null;async function wy(i,t,e=Mi("assets/ochi.glb"),n){if(!Pi||Pi.url!==e){const r=await Mc().loadAsync(e),a=r.scene.children.filter(o=>{let c=!1;return o.traverse(l=>{c||(c=l.isSkinnedMesh)}),c});Pi={variants:a.length?a:[r.scene],clips:r.animations,url:e}}const s=[];for(let r=0;r<t;r++){const a=Pi.variants.length>1,o=Ey(Pi.variants[r%Pi.variants.length]);o.traverse(l=>{l.castShadow=l.type==="SkinnedMesh",a&&l.isBone&&(l.name=l.name.replace(/_\d+$/,""))}),i.add(o);const c=new Vm(o);s.push({root:o,mixer:c,clips:new Map(Pi.clips.map(l=>[l.name,l]))})}return s}const mh=new WeakMap;function Ry(i){let t=mh.get(i.root);return t===void 0&&(t=null,i.root.traverse(e=>{e.isBone&&e.name==="spine006"&&(t=e)}),mh.set(i.root,t)),t}function Rc(i){const t=new WeakMap;return e=>{let n=t.get(e.root);return n||(n=[],e.root.traverse(s=>{s.isBone&&i.test(s.name)&&n.push(s)}),n.sort((s,r)=>s.name.localeCompare(r.name)),t.set(e.root,n)),n}}const Cy=Rc(/^foot[LR]$/),Py=Rc(/^hand[LR]$/),gh=Rc(/^spine00[12]$/),Iy=.2016;function Ly(i){const t=new se(i),e=Math.max(t.r,t.g,t.b);return e>0?t.multiplyScalar(Math.min(1/Iy,1/e)):t}function Dy(i,t){i.root.traverse(e=>{const n=e;if(!n.isMesh)return;(Array.isArray(n.material)?n.material:[n.material]).forEach((r,a)=>{const o=(r.name||n.name).toLowerCase();if(Ty.some(c=>o.includes(c))){const c=r.clone();c.userData.drillOwned=!0,c.color=Ly(t),Array.isArray(n.material)?n.material[a]=c:n.material=c}})})}const _h=["technical","tactical","physical","social"],bh=["auto","authored","off"],xh=["save","beaten"],jr=["throw","roll","kick"],vh=["lofted","ground"],Fy=3.35,Ny=1,yh=12,Jo=["walk","jog","run","sprint"],Mh=["walk","jog","run"],Uy=new Set(["move","dribble","pass","shoot","tackle","collect"]),Sh=/^#[0-9a-fA-F]{6}$/;function ie(i,t){throw new Error(`DrillScene3D ${i}: ${t}`)}function gi(i,t){return(!Array.isArray(i)||i.length!==2||i.some(e=>typeof e!="number"))&&ie(t,"expected [x, y] numbers"),i}function Oy(i){var a,o,c,l,u;const t=i;t.version!==1&&ie("version","must be 1"),((a=t.pitch)==null?void 0:a.width)>0&&((o=t.pitch)==null?void 0:o.length)>0||ie("pitch","width/length > 0 required"),(typeof t.duration!="number"||t.duration<=0)&&ie("duration","seconds > 0 required"),(typeof t.teams!="object"||t.teams===null||Array.isArray(t.teams))&&ie("teams","expected an object of team -> { kit }");const e=new Set(Object.keys(t.teams));e.size||ie("teams","at least one team");for(const h of e){const d=(l=(c=t.teams[h])==null?void 0:c.kit)==null?void 0:l.primary;(typeof d!="string"||!Sh.test(d))&&ie(`teams.${h}.kit.primary`,"expected a hex colour, e.g. #1B4FD8")}Array.isArray(t.players)||ie("players","expected an array");const n=new Set,s=new Set;t.players.forEach((h,d)=>{(!h.id||n.has(h.id))&&ie(`players[${d}].id`,"missing or duplicate"),n.add(h.id),e.has(h.team)||ie(`players[${d}].team`,`unknown team ${h.team}`),gi(h.start,`players[${d}].start`),h.role!==void 0&&h.role!=="keeper"&&ie(`players[${d}].role`,`expected "keeper" or absent, got ${String(h.role)}`),h.role==="keeper"&&s.add(h.id)}),gi((u=t.ball)==null?void 0:u.start,"ball.start"),t.ball.static!==void 0&&typeof t.ball.static!="boolean"&&ie("ball.static","expected a boolean or absent"),(t.equipment??[]).forEach((h,d)=>{h.type!=="cone"&&h.type!=="goal"&&ie(`equipment[${d}].type`,String(h.type)),gi(h.at,`equipment[${d}].at`)});const r=(h,d)=>{n.has(h)||ie(d,`unknown player ${h}`)};if(Array.isArray(t.events)||ie("events","expected an array"),t.events.forEach((h,d)=>{var p;if((typeof h.t!="number"||h.t<0)&&ie(`events[${d}].t`,"seconds >= 0 required"),Uy.has(h.type)||ie(`events[${d}].type`,`unknown type ${h.type}`),h.type==="move"&&(r(h.player,`events[${d}].player`),gi(h.to,`events[${d}].to`),h.gait!==void 0&&!Jo.includes(h.gait)&&ie(`events[${d}].gait`,`expected one of ${Jo.join("|")}, got ${String(h.gait)}`)),h.type==="dribble"&&(r(h.player,`events[${d}].player`),gi(h.to,`events[${d}].to`),h.gait!==void 0&&!Mh.includes(h.gait)&&ie(`events[${d}].gait`,`expected one of ${Mh.join("|")}, got ${String(h.gait)}`)),(h.type==="move"||h.type==="dribble")&&h.runPath!==void 0&&typeof h.runPath!="boolean"&&ie(`events[${d}].runPath`,`expected a boolean, got ${String(h.runPath)}`),h.type==="pass"){if(r(h.from,`events[${d}].from`),r(h.to,`events[${d}].to`),h.flightStyle!==void 0&&!["ground","clipped","lofted"].includes(h.flightStyle)&&ie(`events[${d}].flightStyle`,`expected "ground", "clipped" or "lofted", got ${String(h.flightStyle)}`),h.loft!==void 0&&!(typeof h.loft=="number"&&h.loft>0)&&ie(`events[${d}].loft`,"expected a number > 0 (metres)"),h.style!==void 0&&(jr.includes(h.style)||ie(`events[${d}].style`,`expected one of ${jr.join("|")}, got ${String(h.style)}`),s.has(h.from)||ie(`events[${d}].style`,`distribution styles are keeper-only; ${h.from} is not a keeper`)),h.toFeet!==void 0&&(typeof h.toFeet!="boolean"&&ie(`events[${d}].toFeet`,`expected a boolean, got ${String(h.toFeet)}`),s.has(h.to)||ie(`events[${d}].toFeet`,`toFeet is keeper-only; ${h.to} is not a keeper`),h.toFeet&&h.flightStyle!==void 0&&h.flightStyle!=="ground")){let m=[...((p=t.players.find(_=>_.id===h.to))==null?void 0:p.start)??[0,0]];for(let _=0;_<d;_++){const g=t.events[_];(g.type==="move"||g.type==="dribble")&&g.player===h.to&&(m=[...g.to])}for(const _ of t.equipment??[]){if(_.type!=="goal")continue;const g=Math.hypot(m[0]-_.at[0],m[1]-_.at[1]);g<yh&&ie(`events[${d}].toFeet`,`a ${h.flightStyle} ball is taken in the hands unless he is sweeping outside his area; ${h.to} meets it ${g.toFixed(1)} m from the goal at [${_.at[0]}, ${_.at[1]}] (needs ${yh} m)`)}}h.fromFeet!==void 0&&(typeof h.fromFeet!="boolean"&&ie(`events[${d}].fromFeet`,`expected a boolean, got ${String(h.fromFeet)}`),s.has(h.from)||ie(`events[${d}].fromFeet`,`fromFeet is keeper-only; ${h.from} is not a keeper`),h.fromFeet&&t.events.some((m,_)=>_<d&&m.type!=="move")&&ie(`events[${d}].fromFeet`,"fromFeet is the opener's flag; this is not the drill's first ball action"))}if((h.type==="pass"||h.type==="shoot")&&h.deflect!==void 0){const m=h.deflect;(typeof m!="object"||m===null||Array.isArray(m))&&ie(`events[${d}].deflect`,"expected { to: [x, y], style: lofted | ground }"),gi(m.to,`events[${d}].deflect.to`),vh.includes(m.style)||ie(`events[${d}].deflect.style`,`expected one of ${vh.join("|")}, got ${String(m.style)}`),h.type==="pass"&&!s.has(h.to)&&ie(`events[${d}].deflect`,`deflections are keeper-only; ${h.to} is not a keeper`),h.type==="shoot"&&!(h.flightStyle==="ground"&&m.style==="ground")&&!s.size&&ie(`events[${d}].deflect`,"a deflected shot is a keeper's parry; this drill has no keeper");for(const _ of t.equipment??[]){if(_.type!=="goal"||Math.abs(m.to[0]-_.at[0])>Fy)continue;(_.at[1]<=t.pitch.length/2?m.to[1]-_.at[1]:_.at[1]-m.to[1])<=Ny&&ie(`events[${d}].deflect.to`,`[${m.to[0]}, ${m.to[1]}] is inside the goal mouth at [${_.at[0]}, ${_.at[1]}] — a punch or a parry puts the ball out, never back into the net`)}}h.type==="tackle"&&(r(h.player,`events[${d}].player`),r(h.from,`events[${d}].from`),h.from===h.player&&ie(`events[${d}].from`,"a player cannot tackle himself")),h.type==="collect"&&r(h.player,`events[${d}].player`),h.type==="shoot"&&(r(h.player,`events[${d}].player`),gi(h.at,`events[${d}].at`),h.flight!==void 0&&!(typeof h.flight=="number"&&h.flight>0)&&ie(`events[${d}].flight`,"expected seconds > 0, or absent (engine derives from distance)"),h.corner!==void 0&&h.corner!=="left"&&h.corner!=="right"&&ie(`events[${d}].corner`,`expected "left" or "right" (as seen by the shooter), got ${String(h.corner)}`),h.flightStyle!==void 0&&h.flightStyle!=="ground"&&ie(`events[${d}].flightStyle`,`expected "ground" or absent on a shoot, got ${String(h.flightStyle)}`),h.style!==void 0&&(jr.includes(h.style)||ie(`events[${d}].style`,`expected one of ${jr.join("|")}, got ${String(h.style)}`),s.has(h.player)||ie(`events[${d}].style`,`distribution styles are keeper-only; ${h.player} is not a keeper`),h.flightStyle!=="ground"&&ie(`events[${d}].style`,"a distribution to a point needs a ground flight"))),(h.type==="pass"||h.type==="shoot")&&h.header!==void 0&&typeof h.header!="boolean"&&ie(`events[${d}].header`,`expected a boolean, got ${String(h.header)}`)}),t.overlays!==void 0){const h=t.overlays;(typeof h!="object"||h===null||Array.isArray(h))&&ie("overlays","expected an object"),h.runPaths!==void 0&&!bh.includes(h.runPaths)&&ie("overlays.runPaths",`expected one of ${bh.join("|")}, got ${String(h.runPaths)}`),h.zones!==void 0&&(Array.isArray(h.zones)||ie("overlays.zones","expected an array"),h.zones.forEach((d,p)=>{gi(d.at,`overlays.zones[${p}].at`),typeof d.w=="number"&&d.w>0&&typeof d.h=="number"&&d.h>0||ie(`overlays.zones[${p}]`,"w/h metres > 0 required"),d.color!==void 0&&!_h.includes(d.color)&&!Sh.test(d.color)&&ie(`overlays.zones[${p}].color`,`expected ${_h.join("|")} or a hex colour, got ${String(d.color)}`),d.label!==void 0&&typeof d.label!="string"&&ie(`overlays.zones[${p}].label`,"expected a string")}))}return t.keeper!==void 0&&((typeof t.keeper!="object"||t.keeper===null||Array.isArray(t.keeper))&&ie("keeper","expected { outcome: save | beaten }"),xh.includes(t.keeper.outcome)||ie("keeper.outcome",`expected one of ${xh.join("|")}, got ${String(t.keeper.outcome)}`)),t}const Cc=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]);function Ps(i){const t=Cc(i.from,i.to),e=i.accel,n=i.cruise,s=i.endSpeed??0,r=Math.min(i.startSpeed??0,n);if(t<=0)return{D:0,t1:0,t2:0,t3:0,d1:0,d2:0,peak:0};const a=(n*n-r*r)/(2*e),o=(n*n-s*s)/(2*e);if(a+o<=t){const l=t-a-o;return{D:t,t1:(n-r)/e,t2:l/n,t3:(n-s)/e,d1:a,d2:l,peak:n}}const c=Math.sqrt(e*t+(r*r+s*s)/2);return{D:t,t1:(c-r)/e,t2:0,t3:(c-s)/e,d1:(c*c-r*r)/(2*e),d2:0,peak:c}}function Ie(i){const t=Ps(i);return t.t1+t.t2+t.t3}function yn(i,t){const e=Ps(i),n=e.t1+e.t2+e.t3,s=Math.min(Math.max(t-i.t0,0),n),r=i.accel;let a,o;if(s<=e.t1){const l=Math.min(i.startSpeed??0,i.cruise);a=l*s+.5*r*s*s,o=l+r*s}else if(s<=e.t1+e.t2)a=e.d1+e.peak*(s-e.t1),o=e.peak;else{const l=s-e.t1-e.t2;a=e.d1+e.d2+e.peak*l-.5*r*l*l,o=e.peak-r*l}const c=e.D>0?a/e.D:0;return{pos:[i.from[0]+(i.to[0]-i.from[0])*c,i.from[1]+(i.to[1]-i.from[1])*c],speed:o}}const ky=.25;function Ah(i,t){let e=[0,0];for(const n of i)if(t>=n.t0){if(t>n.t0+Ie(n)){e=[0,0];continue}const s=Cc(n.from,n.to);if(s<=0){e=[0,0];continue}const{speed:r}=yn(n,t);e=[(n.to[0]-n.from[0])/s*r,(n.to[1]-n.from[1])/s*r]}return e}function By(i,t,e=ky){const n=Ah(i,t),s=Ah(i,t-e);return[(n[0]-s[0])/e,(n[1]-s[1])/e]}const Gy=2.5;function zy(i,t){let e=0;for(const n of i)t>=n.t0&&(e=Ps(n).peak);return Math.min(1,e/Gy)}const Hy=.035,Vy=.1,Eh=.4,Wy=1;function Xy(i,t){let e=0;for(let n=0;n<i.length;n++){const s=i[n];if((s.endSpeed??0)>0||Cc(s.from,s.to)<Wy)continue;const r=s.t0+Ie(s)-Vy,a=(t-r)/Eh;a<=0||a>=1||i.some(o=>o.t0>s.t0&&o.t0<=r+Eh)||(e=Math.max(e,Hy*.5*(1-Math.cos(2*Math.PI*a))))}return e}function Be(i,t){return Math.atan2(t[0]-i[0],t[1]-i[1])}function jy(i,t=0){return i-t}function Pa(i){for(;i>Math.PI;)i-=2*Math.PI;for(;i<=-Math.PI;)i+=2*Math.PI;return i}function qy(i,t=58*Math.PI/180,e=.85){const n=Pa(i);return Math.min(t,Math.max(-t,n))*e}const Ky=1.2,vo=180*Math.PI/180,yo=120*Math.PI/180,Th=70*Math.PI/180;function tf(i){return i<=0?vo:i<=2.3?vo+(yo-vo)*i/2.3:i>=5.48?Th:yo+(Th-yo)*(i-2.3)/(5.48-2.3)}const $y=.12,wh=15*Math.PI/180;function Yy(i){return Math.max(-wh,Math.min(wh,i*$y))}const Zy=.001;function Gi(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1])>=Zy}function Jy(i,t,e,n){return e||n||!Gi(i,t)?null:Be(i,t)}function Rh(i,t,e,n=Math.PI*2){const s=t-i,r=Pa(s),a=r===Math.PI&&s<0?-Math.PI:r,o=n*e;return Math.abs(a)<=o?i+a:i+Math.sign(a)*o}const Qy=2.3,qr=1.1,tM=1.15,Ch=.6,Ph=1.2,ha=.88,eM=1-ha,nM=.15,Kr=.28;function qi(i,t){const e=Math.min(Math.max((t-i.t0)/i.duration,0),1),n=i.style??"ground",s=n==="push"?Math.min(Math.max(i.endFrac??0,0),1):0,r=n==="push"?(2*e-(1-s)*e*e)/(1+s):1-Math.pow(1-e,n==="shot"?tM:Qy),a=i.fromHeight??0,o=i.toHeight??(n==="shot"?Ch:0),c=a*(1-e)+o*e;let l;if(n==="clipped"){const u=i.loft??Ph;l=(e<ha?u*Math.sin(Math.PI*e/ha):nM*u*Math.sin(Math.PI*(e-ha)/eM))+c}else if(n==="lofted")l=(i.loft??Ph)*Math.sin(Math.PI*e)+c;else if(n==="shot")l=c;else if(n==="headed"){const u=i.loft??0;l=e<=Kr?a+(u-a)*Math.sin(Math.PI/2*(e/Kr)):o+(u-o)*Math.cos(Math.PI/2*((e-Kr)/(1-Kr)))}else n==="drop"?l=(i.fromHeight??Ch)*(1-e*e):l=(i.loft??0)*Math.sin(Math.PI*e)+c;return{pos:[i.from[0]+(i.to[0]-i.from[0])*r,i.from[1]+(i.to[1]-i.from[1])*r],height:l,done:e>=1}}const Ih=new WeakMap;function iM(i){const t=Ih.get(i);if(t!==void 0)return t;let e=0;for(let n=0;n<=32;n++)e=Math.max(e,qi(i,i.t0+i.duration*n/32).height);return Ih.set(i,e),e}function ef(i,t){if(!(i.duration>0))return 0;const e=i.duration/1e3,n=Math.min(Math.max(t-e/2,i.t0),i.t0+i.duration-e),s=qi(i,n),r=qi(i,n+e);return Math.hypot(r.pos[0]-s.pos[0],r.pos[1]-s.pos[1],r.height-s.height)/e}const En=2.52,Ii=4,Ks=.8,$r=1,Oi=.3,$s=.6,An=.15,sM=.5,Wn=.45,nf=.4,sf=.7,Lh=Math.PI/12,fs=4,rM=.6,Dh=.4,aM=.3,oM=.15,cM=.4,lM=.35,cr=.3,hM=Math.PI/4,uM=.25,dM={left:"gk_dive_a",right:"gk_dive_b"},rf=4,fM=.12,pM=.25,mM=.35;function Fh(i){return Math.min(pM,Math.max(fM,i*mM))}const gM=1.3,_M=.15;function Nh(i,t,e){const n=i-_M,s=i+t-n,r=Math.min(gM,Math.max(1,e/s));return{t0:Math.max(i+t-e/r,n),timeScale:r}}const bM=1.8,Uh=.3,xM=.7,vM=.9,yM=2.5,_n={catch:{id:"gk_catch_b",duration:.967,contact:.66},catchHigh:{id:"gk_catch_d",duration:2.733,contact:.85},scoop:[{id:"gk_scoop_a",duration:2.5,contact:.87},{id:"gk_catch_a",duration:2.033,contact:.8}],dive:{left:{id:"gk_dive_a",duration:3.167,contact:.97,hand:.65,reach:.72},right:{id:"gk_dive_b",duration:3.2,contact:.97,hand:.94,reach:1.03}},throw:{id:"gk_throw_a",duration:2.833,contact:1.57,release:1.4},roll:{id:"gk_pass_a",duration:3.133,contact:1.4,release:.3},kick:{id:"gk_dropkick_a",duration:3.9,contact:2.4,release:.4}},Yr={left:{id:"gk_sidestep_a",duration:.533,dist:1.12},right:{id:"gk_sidestep_b",duration:.5,dist:1.39}},MM=.8;function SM(i,t,e){const n=rf*i,s=Math.sqrt(Math.max(0,n*n-e*e));return Math.max(0,s-(lr-ff)*t)}const AM=3;function EM(i,t,e){if(t<=0)return null;const n=Math.min(AM,Math.floor(Math.abs(i)/t));return n<1?null:{side:i*e>0?"left":"right",steps:n}}const Un=1,Zr=.25,Mo=.5,Oh=.8,TM=.4,af=3,wM=.6,RM=2.3,kh=.9,ps=.3,Bh=.4,CM=12,PM=8,IM=3,LM=.25;function Gh(i,t,e,n,s){const r=Math.hypot(e.to[0]-i[0],e.to[1]-i[1]);if(e.style==="ground")return{from:i,to:[...e.to],t0:n,duration:Math.max(Qo,r/PM),style:"ground",...t?{fromHeight:t}:{}};const a=Math.max(LM*r,IM)*s;return{from:i,to:[...e.to],t0:n,duration:Math.max(Qo,r/CM),style:"lofted",loft:Math.max(.1,a-t/2),...t?{fromHeight:t}:{}}}const DM=.6,Qo=.2;function FM(i,t,e){const n=DM*i/t;if(!(n>0))throw new Error(`[engine3d] a wall rebound needs a real strike: ${i.toFixed(2)} m over ${t.toFixed(2)} s leaves the ball no arrival speed to come back on`);return Math.max(Qo,e/n)}const zh=16,NM=2.44;function vs(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.at&&(!n||s.at>=n.at)&&(n=s);return n}function of(i,t,e){const n=vs(i,t,e);if(!(n!=null&&n.hand))return 0;const s=n.hand,r=s.from??s.height,a=s.rise?Math.min(1,Math.max(0,(e-n.at)/s.rise)):1;return r+(s.height-r)*(a*a*(3-2*a))}const So=[{id:"tackle_b",duration:1.767,contact:.63,reach:.89}],Hh="jog_back_a",Ys=.5,UM=.5,Vh=.5,OM=.2,Wh=.8,kM=.5,BM=1.6,Jr={id:"gk_block_a",duration:2.633,contact:.94,reach:.65},GM=3,zM=.1,Xh=["walk","jog","run"],cf=.5,HM=1.5*cf,VM=.42*Math.SQRT1_2,WM=12,XM=.15;function jM(i,t=1){const e=[];for(const n of i??[]){if(n.type!=="goal"){e.push([...n.at]);continue}const s=lr*t;e.push([n.at[0]-s,n.at[1]],[n.at[0]+s,n.at[1]])}return e}function jh(i,t,e){const n=o=>t.reduce((c,l)=>Math.min(c,Math.hypot(o[0]-l[0],o[1]-l[1])),1/0);let s=[...i],r=s,a=n(s);for(let o=0;o<8;o++){let c=null,l=0;for(const p of t){const m=Math.hypot(s[0]-p[0],s[1]-p[1]);e-m>l+1e-9&&(l=e-m,c=p)}if(!c)return s;const u=[s[0]-c[0],s[1]-c[1]],h=Math.hypot(u[0],u[1])>1e-6?qe(u):[1,0];s=[c[0]+e*h[0],c[1]+e*h[1]];const d=n(s);d>a+1e-9&&(r=s,a=d)}return r}function qh(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=4*s/(n*n);return{from:i,to:t,t0:e,cruise:Math.sqrt(r*s),accel:r}}function Kh(i,t,e){let n=null;for(const s of i)s.t0<=e&&(!n||s.t0>=n.t0)&&(n=s);return n?{at:[...n.to],moving:e<n.t0+n.duration}:{at:[...t],moving:!1}}function $h(i,t,e){const n=Math.hypot(t[0]-i[0],t[1]-i[1]),s=n>1e-6?qe([t[0]-i[0],t[1]-i[1]]):[0,1],r=n<=Ne+zM?null:[t[0]-Ne*s[0],t[1]-Ne*s[1]],a=e?qe([e[0]-t[0],e[1]-t[1]]):s,o=Math.min(Math.max(Ne,nf),sf);return{stepTo:r,set:[t[0]+o*a[0],t[1]+o*a[1]],faceAt:e??[t[0]+s[0],t[1]+s[1]]}}function qM(i){return i<15?"roll":i<30?"throw":"kick"}function lf(i,t,e){const n=[e[0]-t[0],e[1]-t[1]],s=n[0]*n[0]+n[1]*n[1],r=s>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*n[0]+(i[1]-t[1])*n[1])/s)):0,a=[t[0]+r*n[0],t[1]+r*n[1]];return{reach:Math.hypot(a[0]-i[0],a[1]-i[1]),at:a}}function KM(i,t,e,n,s){const{reach:r,at:a}=lf(i,e,n);if(r>af*s)return null;const o=qe([e[0]-i[0],e[1]-i[1]]);if(r<=wM*s)return{kind:"catch",clip:_n.catch.id,clipDuration:_n.catch.duration,contactOffset:_n.catch.contact,contact:[i[0]+Ne*o[0],i[1]+Ne*o[1]],travelTo:null};const c=mf(i,t,n),l=_n.dive[c],u=qe([a[0]-i[0],a[1]-i[1]]),h=Math.min(RM*s,Math.max(0,r-l.reach*s));return{kind:"dive",clip:l.id,clipDuration:l.duration,contactOffset:l.contact,contact:a,side:c,travelTo:[i[0]+h*u[0],i[1]+h*u[1]]}}function $M(i,t,e,n=1){const s=[e[0]-t[0],e[1]-t[1]],r=s[0]*s[0]+s[1]*s[1],a=r>1e-12?Math.min(1,Math.max(0,((i[0]-t[0])*s[0]+(i[1]-t[1])*s[1])/r)):0,o=[t[0]+a*s[0],t[1]+a*s[1]];let c=[i[0]-o[0],i[1]-o[1]];Math.hypot(c[0],c[1])<1e-6&&(c=[-s[0],-s[1]]);const l=qe(c);return[o[0]+Uh*n*l[0],o[1]+Uh*n*l[1]]}function hf(i,t){const e=Math.min(1,Math.max(0,(t-i.t0)/i.duration)),n=1-(1-e)*(1-e);return[i.from[0]+(i.to[0]-i.from[0])*n,i.from[1]+(i.to[1]-i.from[1])*n]}function uf(i,t,e,n){let s=null;for(const r of i){if(r.player!==e||n<r.t0)continue;let a=1/0;for(const o of t??[])o.t0>=r.t0&&o.t0<a&&(a=o.t0);n<a&&(s=hf(r,n))}return s}const YM=[{id:"header_a",duration:1.9,contact:1}],ZM=1.57,Yh=.1,Zh=.6,Ao=2,Qr=.02,Eo=.6,JM=2.5,QM=.22,tS=3,eS=6.5;function To(i,t){return Math.min(Math.max(QM*i,tS),eS)*t}const nS=10,iS=1.7;function sS(i,t,e,n){const s=e??[t[0],t[1]],r=qe([s[0]-i[0],s[1]-i[1]]),a=[i[0]+Yh*n*r[0],i[1]+Yh*n*r[1]],o=YM[0];return{contact:a,height:ZM*n,clip:o,set:[i[0]+Ne*r[0],i[1]+Ne*r[1]],faceAt:s}}const Jh=.4,rS=.3,aS=18,oS=10,cS=.45,lS=.8,ua={id:"strike_jog_a",contact:.4},hS=1,uS={strike_jog_a:{loop:!1,category:"shoot",ballContact:ua.contact},gk_sidestep_a:{loop:!0},gk_sidestep_b:{loop:!0}};function df(i){var t;for(const[e,n]of Object.entries(uS))(t=i.clips)!=null&&t[e]&&Object.assign(i.clips[e],n);return i}const Qh=.15,dS=.2,lr=3.35,ff=.5;function fS(i,t,e,n,s=1){let r=null,a=1/0;for(const p of e){const m=Math.hypot(p[0]-t[0],p[1]-t[1]);m<a&&(a=m,r=p)}if(!r||a>lr*s+1)return[...t];const o=(lr-ff)*s,c=[[r[0]-o,r[1]],[r[0]+o,r[1]]];if(n){const p=Be(i,r),m=_=>(_[0]-i[0])*Math.cos(p)-(_[1]-i[1])*Math.sin(p);return c.sort((_,g)=>m(g)-m(_)),n==="left"?c[0]:c[1]}const l=Math.hypot(c[0][0]-i[0],c[0][1]-i[1]),u=Math.hypot(c[1][0]-i[0],c[1][1]-i[1]);if(Math.abs(l-u)>1e-6)return l>u?c[0]:c[1];const h=Math.hypot(c[0][0]-t[0],c[0][1]-t[1]),d=Math.hypot(c[1][0]-t[0],c[1][1]-t[1]);return h<d-1e-6?c[0]:c[1]}function pS(i,t){var e;return t==="keeper"&&((e=i.groups.gk_ready)!=null&&e.length)?i.groups.gk_ready:i.groups.idle}const pf=.35;let Ne=pf;function tu(i){Ne=i}function mS(){return Ne/pf}function Li(i,t){return[i[0]+Ne*Math.sin(t),i[1]+Ne*Math.cos(t)]}function wo(i,t,e){const n=Be(i,t);return(e[0]-i[0])*Math.cos(n)-(e[1]-i[1])*Math.sin(n)>=0?"L":"R"}function mf(i,t,e){return(e[0]-i[0])*Math.cos(t)-(e[1]-i[1])*Math.sin(t)>1e-9?"left":"right"}function qe(i){const t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function eu(i,t){const e=Math.cos(t),n=Math.sin(t);return[i[0]*e-i[1]*n,i[0]*n+i[1]*e]}function gS(i,t,e){const n=qe([t[0]-i[0],t[1]-i[1]]);let s,r;if(e){s=qe([e[0]-i[0],e[1]-i[1]]);const p=n[0]*s[1]-n[1]*s[0];r=Math.abs(p)<1e-6?1:Math.sign(p)}else r=1,s=eu([-n[0],-n[1]],-r*Lh);const a=eu(n,r*Lh),o=[i[0]+Ne*a[0],i[1]+Ne*a[1]],c=[i[0]+Ne*s[0],i[1]+Ne*s[1]],l=[c[0]-o[0],c[1]-o[1]],u=Math.hypot(l[0],l[1]),h=u>1e-6?[l[0]/u,l[1]/u]:s,d=Math.min(Math.max(u,nf),sf);return{contact:o,set:[o[0]+d*h[0],o[1]+d*h[1]],faceAt:e??[i[0]+s[0],i[1]+s[1]]}}const _S=.5,bS=1.4,nu={walk:.8,jog:1.2,run:2.2},xS=.25,vS=.7,yS=.3,MS=2,Zs=.4,SS=10,AS=8,ES=2.5,iu=6,TS=2,su=[.06,-.09,.1,-.04,.08,-.1,.03,-.07],ru=1.4;function au(i,t,e){const n=i.t0+Ie(i),s=Ro(i,t);let r=0,a=Math.max(n-t,.001);if(Ro(i,t+a)-s<=e)return a;for(let o=0;o<48;o++){const c=(r+a)/2;Ro(i,t+c)-s>=e?a=c:r=c}return Math.max(a,.001)}function Ro(i,t){const e=yn(i,t).pos;return Math.hypot(e[0]-i.from[0],e[1]-i.from[1])}function wS(i,t,e,n,s,r={}){const a=Ie(i);if(a<=0)return{flights:[],touches:[],restEnd:i.t0};const o=qe([i.to[0]-i.from[0],i.to[1]-i.from[1]]),c=Be(i.from,i.to),l=[Math.cos(c),-Math.sin(c)],u=R=>(R[0]-i.from[0])*o[0]+(R[1]-i.from[1])*o[1],h=i.t0+a,d=u(e),p=mS(),m=(r.others??[]).filter(R=>Math.abs((R[0]-i.from[0])*Math.cos(c)-(R[1]-i.from[1])*Math.sin(c))<=TS).map(R=>u(R)),_=vS*p,g=xS*p,f=R=>u(yn(i,R).pos),x=[],A=[];let v=i.t0,T=[...t];const w=Math.ceil(Ps(i).D/(.5*Math.min(n,Zs*3)))+8;for(let R=0;;R++){A.push(v);const D=u(T),M=d-D,S=r.turnOut?Zs:n,I=Zs*(1+ru),V=R===0&&!!r.turnIn||!!r.turnOut&&M<=I,F=V?Ne:_;if(M<=ru*S||R===w-1||d-(f(v)+F)<.05){const B=Math.hypot(e[0]-T[0],e[1]-T[1]);let Ce=v;if(B>1e-6){const Yt=Math.max(yn(i,v).speed,_S*i.cruise),ce=Math.min(2*B/(Yt+qr*(B/Yt)/2),Math.max(h-v,.2));x.push({from:T,to:[...e],t0:v,duration:ce,style:"push",endFrac:0}),Ce=v+ce}return Ce<h&&x.push({from:[...e],to:[...e],t0:Ce,duration:h-Ce,style:"ground"}),{flights:x,touches:A,restEnd:Math.max(Ce,h)}}let U=V?Zs:n;if(!V&&M>SS){let B=M;for(const Ce of m)Ce>D&&(B=Math.min(B,Ce-D));U*=Math.min(Math.max(B/AS,1),ES)}const K=U;U*=1+su[R%su.length],!V&&r.turnOut&&M-U<I&&(U=Math.max(M-I,Zs));const O=Math.min(U,bS*i.cruise*i.cruise/qr),H=au(i,v,O),L=Math.max(i.cruise*H-O,0),tt=Math.min(F,D-f(v)+L),Y=f(v)+tt,nt=Math.max(D,Y),pt=K>MS?s:s*(R%2?-1:1),zt=Math.min(g,yS*O),it=(T[0]-i.from[0])*l[0]+(T[1]-i.from[1])*l[1],et=Math.abs(pt*zt-it),X=Math.sqrt(Math.max(iu*iu-et*et,0)),J=Math.min(nt+O,D+X,d),yt=au(i,v,J-Y),It=(J-D)/yt,Dt=It+qr*yt/2,Mt=It-qr*yt/2,kt=[i.from[0]+o[0]*J+l[0]*pt*zt,i.from[1]+o[1]*J+l[1]*pt*zt],ge={from:T,to:kt,t0:v,duration:yt,style:"push",endFrac:Math.max(Mt,0)/Dt};x.push(ge),T=[...kt],v+=yt}}function ri(i){return[...i].reduce((t,e)=>t*31+e.charCodeAt(0)>>>0,0)}function Xn(i,t,e){const n=ri(t);return i[Math.abs(n+Math.floor(e*10))%i.length]}const gf=.3;function _f(i){const t=Jo.filter(e=>{var n;return(n=i.groups[e])==null?void 0:n.length}).map(e=>({gait:e,clipSpeed:i.clips[i.groups[e][0]].speed??En})).sort((e,n)=>e.clipSpeed-n.clipSpeed);return t.map((e,n)=>({gait:e.gait,min:n===0?gf:Math.sqrt(t[n-1].clipSpeed*e.clipSpeed),clipSpeed:e.clipSpeed}))}function Pc(i,t){let e=null;for(const n of i)t>=n.min&&(e=n);return e}function RS(i,t){const e=Ps(i),n=e.t1+e.t2+e.t3;if(n<=0||!t.length)return[];const s=i.endSpeed??0,r=i.startSpeed??0,a=new Set([0,n]);for(const l of t)l.min>e.peak||(l.min>r&&a.add((l.min-r)/i.accel),l.min>s&&a.add(n-(l.min-s)/i.accel));const o=[...a].sort((l,u)=>l-u),c=[];for(let l=0;l+1<o.length;l++){if(o[l+1]-o[l]<1e-9)continue;const u=Pc(t,yn(i,i.t0+(o[l]+o[l+1])/2).speed);if(!u)continue;const h=c[c.length-1];h&&h.gait===u.gait&&Math.abs(h.t1-(i.t0+o[l]))<1e-9?h.t1=i.t0+o[l+1]:c.push({gait:u.gait,t0:i.t0+o[l],t1:i.t0+o[l+1]})}return PS(c)}const CS=.3;function PS(i){const t=i.map(e=>({...e}));for(let e=0;e<32&&t.length>1;e++){let n=-1,s=CS;for(let o=0;o<t.length;o++){const c=t[o].t1-t[o].t0;c<s-1e-9&&(s=c,n=o)}if(n<0)break;const r=t[n-1],a=t[n+1];a&&(!r||a.t1-a.t0>r.t1-r.t0)?a.t0=t[n].t0:r.t1=t[n].t1,t.splice(n,1);for(let o=0;o+1<t.length;)t[o].gait===t[o+1].gait?(t[o].t1=t[o+1].t1,t.splice(o+1,1)):o++}return t}const Ic=.85,xi=1.15,ou=.5;function bf(i){return ou+(Ic-ou)*Math.min(1,Math.max(0,i))}function IS(i,t){const e=i/t;return e>xi?xi:Math.max(bf(e),e)}function LS(i,t){return Math.min(xi,Math.max(Ic,i/t))}function DS(i,t,e){const n=i.findIndex(l=>l.gait===e);if(n<0)return{timeScale:1,partner:null,weight:0};const s=i[n],r=t/s.clipSpeed;if(r>=Ic&&r<=xi)return{timeScale:r,partner:null,weight:0};const a=i[r>xi?n+1:n-1];if(!a)return{timeScale:r>xi?xi:Math.max(bf(r),r),partner:null,weight:0};const o=Math.min(1,Math.max(0,(t-s.clipSpeed)/(a.clipSpeed-s.clipSpeed))),c=(1-o)*s.clipSpeed+o*a.clipSpeed;return{timeScale:LS(t,c),partner:a.gait,weight:o}}const FS=new Set(["pass","shoot","receive","header","defensive"]),_a=new Set(["turn","transition"]),ai=.15,xf=.1,vf=.3,NS=.45,US=.2,OS=.12,kS=.6;function Lc(i,t){var e;return FS.has(((e=i.clips[t])==null?void 0:e.category)??"")||t.startsWith("header_")}function yf(i,t,e){var r,a;if(Lc(i,t))return xf;const n=(r=i.clips[t])==null?void 0:r.category,s=e?(a=i.clips[e])==null?void 0:a.category:void 0;return _a.has(n??"")?ai:n==="idle"?s==="idle"?kS:s==="locomotion"?OS:ba:n==="locomotion"&&s==="locomotion"?US:_a.has(s??"")?ai:ba}function Mf(i,t){var n;const e=(n=i.clips[t])==null?void 0:n.category;return e==="receive"?NS:_a.has(e??"")?ai:Lc(i,t)?vf:ba}function BS(i,t,e){var n;return Lc(i,t)||_a.has(((n=i.clips[t])==null?void 0:n.category)??"")?Mf(i,t):yf(i,e,t)}const hn=Math.PI/180,ii={turn_l90_a:{id:"turn_l90_a",duration:.9,yaw:82.6*hn,t50:.567,t90:.8,peak:159*hn,standing:!0},turn_r90_a:{id:"turn_r90_a",duration:.933,yaw:-97.2*hn,t50:.533,t90:.8,peak:213*hn,standing:!0},turn_180_a:{id:"turn_180_a",duration:.667,yaw:-162.5*hn,t50:.4,t90:.6,peak:366*hn,standing:!1},turn_to_run_a:{id:"turn_to_run_a",duration:1.7,yaw:-106.7*hn,t50:.767,t90:1.033,peak:192*hn,standing:!1}};function Co(i,t){const e=[[0,0],[i.t50,.5],[i.t90,.9],[i.duration,1]];if(t<=0)return 0;for(let n=0;n+1<e.length;n++){const[s,r]=e[n],[a,o]=e[n+1];if(t<=a)return a-s>1e-9?r+(o-r)*(t-s)/(a-s):o}return 1}function Sf(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&e<s.end+ai&&(n=s);return n}function GS(i,t,e,n){const s=Sf(i,t,e);if(!s)return null;const r=ii[s.clip],a=s.end-s.t0,o=s.offset+Math.min(e-s.t0,a),c=Co(r,s.offset),l=Co(r,s.offset+a),u=Co(r,o),h=l-c>1e-9?(u-c)/(l-c):1,d=n??s.from,p=n===void 0?s.to-s.from:ki(n,s.to),m=Math.min(1,(e-s.t0)/ai),_=e<=s.end?1:Math.max(0,1-(e-s.end)/ai),g=Math.max(0,Math.min(m,_));return{heading:d+p*h,clipYaw:r.yaw*u*g}}function zS(i,t){return i.peak+tf(t)}function HS(i,t,e){const n=Math.abs(i);return n<tc?null:n>QS&&(t==="jog"||t==="run"||t==="sprint")?"turn_180_a":i>0?"turn_l90_a":"turn_r90_a"}const tc=45*hn,cu=60*hn,VS=.3,WS=.5,XS=.7,jS=130*hn,ta=[{id:"jog_back_a",speed:2.11},{id:"run_back_a",speed:2.81}],lu={left:"strafe_l_a",right:"strafe_r_a"},qS=3.2,KS=3.2,Af=60*hn,$S=120*hn,hu=[{id:"jog_back_diag_a",axis:225.5*hn,speed:2.04},{id:"jog_back_diag_b",axis:135.5*hn,speed:2.27}],YS=3;function ZS(i,t){if(Math.abs(i)>Af)return null;const e=i>=0?hu[0]:hu[1];return t<=e.speed*xi?{id:e.id,axis:e.axis}:null}function JS(i,t){const e=Math.abs(i);return e<=Af?t>qS?null:t>(ta[0].speed+ta[1].speed)/2?ta[1].id:ta[0].id:e>$S||t>KS?null:i>0?lu.right:lu.left}const QS=120*hn;function ki(i,t){return Pa(t-i)}const ba=.25;function _s(i,t){const e=i.clips[t.clip];if(t.loopUntil!==void 0)return t.loopUntil;const n=e.category==="shoot"?dS:0,s=t.contact??e.ballContact??0,r=t.offset??0,a=t.timeScale??1,o=Mf(i,t.clip);return Math.max(t.t0,0)+Math.max((e.duration-r)/a-(e.loop?0:o)+n,(s-r)/a)}function tA(i,t,e){return(i==null?void 0:i.clip)!==t||i.offset!==(e==null?void 0:e.offset)}function Ef(i,t,e,n){let s=null;for(const r of i)r.player===e&&n>=Math.max(r.t0,0)&&n<_s(t,r)&&(s=r);return s}const eA=.15;function nA(i,t,e){let n=null;for(const s of i)s.player===t&&e>=s.t0&&(n=s.headUntil!==void 0&&e<s.headUntil?[...s.at]:null);return n}const iA=.06,uu=2,sA=6,rA=.4;function xa(i,t){let e=(i^t)>>>0;return e=Math.imul(e^e>>>16,73244475)>>>0,e=Math.imul(e^e>>>16,73244475)>>>0,((e^e>>>16)>>>0)/4294967296}function du(i,t){return xa(ri(i),20973)*t}function fu(i){return 1+iA*(2*xa(ri(i),10196)-1)}function aA(i,t){return(uu+xa(ri(i),7047)*(sA-uu))*(1+rA*(2*xa(ri(i)+t*2654435761,28490)-1))}function oA(i,t){let e=0;for(let n=0;n<64;n++)if(e+=aA(i,n),t<e)return n;return 64}function cA(i,t,e){const n=i.length;if(n<=1)return i[0];const s=ri(t);let r=s%n;for(let a=1;a<=e;a++){const o=s+a*2654435761>>>0;r=(r+1+o%(n-1))%n}return i[r]}function lA(i){if(!i||typeof i!="object"||!i.clips||!i.groups)throw new Error("manifest v2 required: expected { clips: {...}, groups: {...} } shape")}const hA=new Set(["receive_a","pass_a","pass_b"]),Tf=.8,uA=.7;function wf(i,t){var n;const e=t.contact??((n=i.clips[t.clip])==null?void 0:n.ballContact)??0;return t.t0+e-(t.offset??0)}function Dc(i,t){let e=0;for(const n of i??[])t>=n.t0&&(e=t>n.t0+Ie(n)?0:yn(n,t).speed);return e}function dA(i,t,e){for(const n of i)hA.has(n.clip)&&Dc(t[n.player],wf(e,n))>=Tf&&(n.additive=!0)}const fA=1,pA=2,mA=.025,pu=.2,gA=.4,mu="idle_transition";function _A(i,t,e){let n=0;for(const s of i){if(s.player!==t||e<s.t0||e>s.t1)continue;const r=e-s.t0,a=s.t1-s.t0,o=Math.min(1,r/pu,(a-r)/pu);o<=0||(n=Math.max(n,mA*o*.5*(1-Math.cos(2*Math.PI*pA*r))))}return n}const bA="idle_b",xA=.5,vA=.3,yA=.15;function MA(i,t,e){let n=0;for(const s of i)s.player!==t||e<s.t0||e>s.t1||(n=Math.max(n,xA*Math.min(1,(e-s.t0)/vA)*Math.min(1,(s.t1-e)/yA)));return n}function SA(i,t,e){const n=[],s=[];for(const r of i){if(r.clip!=="receive_a"||r.additive)continue;const a=wf(e,r)-fA,o=r.t0;if(o-a<gA||a<0)continue;let c=!1;for(let l=a;l<=o;l+=.1){if(Dc(t[r.player],l)>gf){c=!0;break}const u=Ef(i,e,r.player,l);if(u&&u!==r){c=!0;break}}c||(n.push({player:r.player,t0:a,t1:o}),e.clips[mu]&&s.push({player:r.player,clip:mu,t0:a,loopUntil:o}))}return i.push(...s),i.sort((r,a)=>r.t0-a.t0),n}const AA=.6,Rf=.5,Cf=.6,sr=2*Rf/Cf,va=sr/Cf,EA=Rf-cr;function TA(i){return(sr-Math.sqrt(Math.max(0,sr*sr-2*va*i)))/va}function wA(){return sr-va*TA(EA)}const RA=.15,CA=.05;function PA(i,t,e){const n=Be(i,t),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=e?Math.min(uM,s/2):cr,a=e?n-Math.acos(Math.min(1,r/Math.max(s,1e-6))):n+Math.PI+hM;return[i[0]+r*Math.sin(a),i[1]+r*Math.cos(a)]}function IA(i,t,e,n,s,r){const a=Math.min(cr,e*(n-Oi)/2);for(let o=a;o>=RA-1e-9;o-=CA){const c=[i[0]+o*Math.sin(t),i[1]+o*Math.cos(t)];if(r(c))return{from:[...i],to:c,t0:s,cruise:e,accel:e*e/(2*o),startSpeed:e}}return null}function LA(i,t,e=1){var lt,Ht,Ft,Ut,le,xt,Ct,qt,ee,Gt,ue,re,we,q;lA(t),df(t);const n=_f(t),s={};i.players.forEach(P=>s[P.id]=[...P.start]);const r={},a=[],o=[],c=[],l=[],u=[],h=[],d=[],p=[],m={},_={},g=new Set,f={},x={},A={},v={};function T(P){c.push(P),f[P.player]=P.t0,Gi(s[P.player],P.at)&&(w[P.player]=Be(s[P.player],P.at))}const w={},R={},D={};function M(P){const b=m[P];let W=Math.max(b?b.t0+Ie(b):0,R[P]??0,0);for(const Z of o)Z.player===P&&t.clips[Z.clip]&&(W=Math.max(W,_s(t,Z)));return W}function S(P,b,W,Z){if(kt.has(P)||!Gi(s[P],W))return null;const k=w[P]??0,ut=ki(k,Be(s[P],W));if(Math.abs(ut)<cu)return null;const st=ii[ut>0?"turn_l90_a":"turn_r90_a"];if(!t.clips[st.id])return null;const ot=I(st),rt=M(P),Vt=Math.max(rt,Math.min(b,Z-ot));return Vt+ot>Z+1e-9?null:(V(P,st,Vt,0,k,k+ut),Vt)}function I(P,b=0){return P.duration-b-ai}function V(P,b,W,Z,k,ut,st){const ot=st??I(b,Z),rt={player:P,clip:b.id,t0:W,offset:Z,end:W+ot,from:k,to:ut},Vt={player:P,clip:b.id,t0:W,...Z?{offset:Z}:{},...st!==void 0?{loopUntil:W+ot}:{}};d.push(rt),o.push(Vt),D[P]={span:rt,cue:Vt},R[P]=rt.end+ai}function F(P,b){const W=D[P];return!W||W.span.end<=b+1e-9?!0:b-W.span.t0<VS?!1:(W.span.end=b,W.cue.loopUntil=b,R[P]=b+ai,!0)}function U(P,b){if(F(P,b))return;const W=D[P];d.splice(d.indexOf(W.span),1);const Z=o.indexOf(W.cue);Z>=0&&o.splice(Z,1),delete D[P],R[P]=0}function K(P,b=1/0){const W=S(P.player,P.t0,P.at,b);T(W===null?P:{...P,t0:W})}const O=[];function H(P){var b;for(let W=0;W<O.length;W++){const Z=O[W];Z.afterT>=P||(O.splice(W--,1),(r[b=Z.player]??(r[b]=[])).push(Z.move),m[Z.player]=Z.move,_[Z.player]=tt(Z.move,Z.player),T({player:Z.player,at:Z.faceBall,t0:Z.move.t0}),T({player:Z.player,at:Z.faceSettle,t0:Z.arrival}),s[Z.player]=[...Z.move.to])}}function L(P,b,W){let Z=[...s[P]],k=[...s[P]];const ut=m[P];let st=Math.max(ut?ut.t0+Ie(ut):0,x[P]??0),ot=-1/0,rt=null;for(let Vt=b+1;Vt<At.length;Vt++){const Nt=At[Vt];if(Nt.t>=W)break;if((Nt.type==="pass"?Nt.from:Nt.player)!==P)continue;if(Nt.type!=="move"){rt=`${Nt.type} at t=${Nt.t}`;break}const St=t.groups[Nt.gait??"jog"]??t.groups.jog,Pt=t.clips[Xn(St,P,Nt.t)].speed??En,Kt={from:Z,to:[...Nt.to],t0:Nt.t,cruise:Pt,accel:Ii},Et=Nt.t+Ie(Kt);st=Math.max(st,Et),Z=[...Nt.to],k=Et>W?yn(Kt,W).pos:[...Nt.to],ot=Nt.t}return{expected:Z,atArrival:k,busyUntil:st,afterT:ot,blocked:rt}}function tt(P,b){const W=RS(P,n).map(k=>({player:b,clip:Xn(t.groups[k.gait],b,P.t0),t0:k.t0,loopUntil:k.t1})),Z=D[b];if(Z){let k=1/0;for(const ut of W)ut.t0>Z.span.t0+1e-9&&ut.t0<Z.span.end-1e-9&&(k=Math.min(k,ut.t0));k<1/0&&U(b,k)}return o.push(...W),W}function Y(P,b,W="event"){(Ce[P]??0)>b&&console.warn(`[engine3d] ${P} is on the ground until t=${Ce[P].toFixed(2)}s but has a ${W} at t=${b} — schedule it later`);const Z=m[P];if(!Z)return;const k=Z.t0+Ie(Z);if(b<k){const ut=`buildSchedule: player ${P} has an event at t=${b} while still moving from a move started at t=${Z.t0} (in flight until t=${k.toFixed(3)})`;if(Yt.has(P))console.warn(`[engine3d] ${ut} — he fetched a free ball, so where the engine left him is its own estimate: this warns instead of throwing; schedule it later`);else throw new Error(ut)}}function nt(P){let b=null,W=-1/0;for(const Z of p)Z.t<=P&&Z.t>=W&&(b=Z.player,W=Z.t);return b}const pt=Object.fromEntries(i.players.map(P=>[P.id,P.team]));function zt(P,b,W,Z,k){const ut=nt(Z);if(!ut||ut===P||kt.has(P)||pt[P]==="coach"||pt[ut]===pt[P])return null;const st=s[ut]?[...s[ut]]:Kh(a,i.ball.start,Z).at;if(!Gi(b,st)||!Gi(b,W))return null;const ot=Be(b,W),rt=ki(Be(st,b),ot),Vt=Math.hypot(st[0]-b[0],st[1]-b[1])<=YS?ZS(rt,k):null;if(Vt&&t.clips[Vt.id]){const Ot=ot-Vt.axis,St=Math.hypot(st[0]-b[0],st[1]-b[1])||1;return{clip:Vt.id,ball:[b[0]+St*Math.sin(Ot),b[1]+St*Math.cos(Ot)]}}const Nt=JS(rt,k);return Nt&&t.clips[Nt]?{clip:Nt,ball:st}:null}const it={};for(const P of i.events)P.type==="move"&&(it[lt=P.player]??(it[lt]=[])).push(P.t);function et(P,b,W){for(const Z of Dt){const k=Z.id;if(!mt.length||nt(P)===k||!t.clips[Yr.left.id]||!t.clips[Yr.right.id])continue;const ut=m[k],st=Math.max(P,B[k]??0,ut?ut.t0+Ie(ut):0);if(h.some(ae=>ae.player===k))continue;const ot=mt.reduce((ae,te)=>Math.hypot(te[0]-Z.start[0],te[1]-Z.start[1])<Math.hypot(ae[0]-Z.start[0],ae[1]-Z.start[1])?te:ae,mt[0]),rt=SM(Mt,e,Math.abs(s[k][1]-ot[1])),Nt=ot[0]+Math.min(rt,Math.max(-rt,(W[0]-ot[0])*MM))-s[k][0],Ot=Be(ot,[i.pitch.width/2,i.pitch.length/2]),St=EM(Nt,Yr[Nt*Math.cos(Ot)>0?"left":"right"].dist*Mt,Math.sign(Math.cos(Ot))||1);if(!St)continue;const Pt=Yr[St.side],Kt=Math.min(b,i.duration)-St.steps*Pt.duration;if(Kt<st-1e-9||(it[k]??[]).some(ae=>ae>=Kt-1e-9))continue;const Et=Math.sign(Nt)*Pt.dist*Mt;for(let ae=0;ae<St.steps;ae++){const te=[...s[k]],Tt=qh(te,[te[0]+Et,te[1]],Kt+ae*Pt.duration,Pt.duration);(r[k]??(r[k]=[])).push(Tt),s[k]=[...Tt.to],m[k]=Tt}o.push({player:k,clip:Pt.id,t0:Kt,loopUntil:Kt+St.steps*Pt.duration}),_[k]=[]}}function X(P,b){var ut;const W=(ut=i.players.find(st=>st.id===P))==null?void 0:ut.start;if(!W||!mt.length)return!1;let Z=mt[0],k=1/0;for(const st of mt){const ot=Math.hypot(st[0]-W[0],st[1]-W[1]);ot<k&&(k=ot,Z=st)}return Math.hypot(b[0]-Z[0],b[1]-Z[1])<=WM*Mt}function J(P,b){const W=m[P];if(!W||W.endSpeed)return;const Z=W.t0+Ie(W);if(b-Z>=$r)return;W.endSpeed=Ks;const k=W.t0+Ie(W);for(const ut of _[P]??[]){const st=o.indexOf(ut);st>=0&&o.splice(st,1)}if(_[P]=tt(W,P),k>b-Oi){if(Yt.has(P)){console.warn(`[engine3d] player ${P}'s move started at t=${W.t0} still arrives at t=${k.toFixed(3)}, less than ${Oi}s before their action at t=${b} — he fetched a free ball, so this warns instead of throwing; schedule it later`);return}throw new Error(`buildSchedule: player ${P}'s move started at t=${W.t0} still arrives at t=${k.toFixed(3)} even flowing into their action at ${Ks} m/s, less than ${Oi}s before their action at t=${b} — move the event later or start the approach move earlier`)}}function yt(P,b,W,Z,k){const ut=m[P],st=ut?ut.t0+Ie(ut):0;if(ut&&(ut.endSpeed!==void 0||b-st<$r))return null;const ot=PA(s[P],W,k),rt=t.groups.walk,Vt=rt!=null&&rt.length?t.clips[rt[0]].speed??En:En,Nt={from:[...s[P]],to:ot,t0:0,cruise:Vt,accel:Ii};let Ot=b-Z-Ie(Nt);return Ot<Math.max(st,x[P]??0)||!F(P,Ot)?null:(Nt.t0=Ot,(r[P]??(r[P]=[])).push(Nt),k&&g.add(Nt),m[P]=Nt,_[P]=tt(Nt,P),s[P]=[...ot],Ot)}function It(P,b,W){const Z=Kh(a,i.ball.start,b);{const Ot=jh(Z.at,ft,HM*Mt);if(Math.hypot(Ot[0]-Z.at[0],Ot[1]-Z.at[1])>1e-6){const St=a.filter(Pt=>Pt.t0<=b&&Math.hypot(Pt.to[0]-Z.at[0],Pt.to[1]-Z.at[1])<1e-9);if(St.length){for(const Pt of St)Math.hypot(Pt.from[0]-Z.at[0],Pt.from[1]-Z.at[1])<1e-9&&(Pt.from=[...Ot]),Pt.to=[...Ot];Z.at=Ot}}}const k=nt(b);k&&k!==P&&p.push({t:b,player:null}),Z.moving&&console.warn(`[engine3d] collect for ${P} at t=${b.toFixed(2)}s: the ball is still moving — he sets off for where it will stop; schedule it later`);let ut=null;for(let Ot=W+1;Ot<At.length;Ot++){const St=ct[Ot];if(!(!St||St.actor!==P)){St.t-b<=fs+3&&(ut=St.target);break}}let st=$h(s[P],Z.at,ut);if(st.stepTo){const Ot=jh(st.stepTo,ft,VM*Mt),St=[Ot[0]-Z.at[0],Ot[1]-Z.at[1]];if(Math.hypot(St[0],St[1])>1e-6){const Pt=qe(St),Kt=Ne+1,Et=$h([Z.at[0]+Kt*Pt[0],Z.at[1]+Kt*Pt[1]],Z.at,ut);Et.stepTo&&C(Et.stepTo)&&(st=Et)}}let ot=1/0;for(let Ot=W+1;Ot<At.length;Ot++){const St=At[Ot];if((St.type==="pass"?St.from:St.player)===P){ot=St.t;break}}let rt=b;if(st.stepTo){const Ot=Math.hypot(st.stepTo[0]-s[P][0],st.stepTo[1]-s[P][1]);let St;for(let Pt=Ot<GM?0:1;Pt<Xh.length;Pt++){const Kt=t.groups[Xh[Pt]]??t.groups.jog,Et=t.clips[Xn(Kt,P,b)].speed??En;if(St={from:[...s[P]],to:st.stepTo,t0:b,cruise:Et,accel:Ii,endSpeed:Ks},b+Ie(St)+Wn+Oi<=ot)break}(r[P]??(r[P]=[])).push(St),Yt.set(P,b),m[P]=St,_[P]=tt(St,P),rt=b+Ie(St),s[P]=[...st.stepTo]}T({player:P,at:[...Z.at],t0:Math.max(b,f[P]??0),lock:[rt-An,rt+An]});const Vt=Ot=>{for(const St of _[P]??[]){const Pt=o.indexOf(St);St.t0>=Ot?Pt>=0&&o.splice(Pt,1):(St.loopUntil??0)>Ot&&(St.loopUntil=Ot)}};if(kt.has(P)&&X(P,Z.at)){const Ot=_n.scoop[0],St=rt-Ot.contact;return St<b&&console.warn(`[engine3d] keeper ${P}'s scoop at t=${rt.toFixed(2)}s wants to start at t=${St.toFixed(2)}s, before his collect at t=${b.toFixed(2)}s — schedule the collect earlier`),Vt(Math.max(St,0)),o.push({player:P,clip:Ot.id,t0:Math.max(St,0),contact:Ot.contact}),T({player:P,at:[...st.faceAt],t0:rt}),p.push({t:rt,player:P}),u.push({player:P,at:rt,carry:[...Z.at],hand:{height:Un*Mt,from:XM*Mt,rise:Oh,follow:!0}}),x[P]=rt,B[P]=Math.max(St,0)+Ot.duration+ps,rt}const Nt=Xn(t.groups.pass,P,rt);return Vt(rt-(t.clips[Nt].ballContact??0)),o.push({player:P,clip:Nt,t0:rt-(t.clips[Nt].ballContact??0)}),a.push({from:[...Z.at],to:st.set,t0:rt,duration:Wn,style:"ground"}),T({player:P,at:[...st.faceAt],t0:rt}),p.push({t:rt,player:P}),u.push({player:P,at:rt+Wn,carry:st.set}),x[P]=rt+Wn,rt+Wn}const Dt=i.players.filter(P=>P.role==="keeper"),Mt=e,kt=new Set(Dt.map(P=>P.id));i.players.forEach(P=>w[P.id]=P.role==="keeper"?Be(P.start,i.ball.start):0);const ge=((Ht=i.keeper)==null?void 0:Ht.outcome)==="save",B={},Ce={},Yt=new Map,ce={},At=[...i.events].sort((P,b)=>P.t-b.t);if(!i.ball.static){const P=i.ball.start,b=i.players.reduce((k,ut)=>Math.hypot(ut.start[0]-P[0],ut.start[1]-P[1])<Math.hypot(k.start[0]-P[0],k.start[1]-P[1])?ut:k,i.players[0]),W=At.find(k=>k.type!=="move"||k.player===(b==null?void 0:b.id)&&kt.has(k.player)),Z=W?W.type==="pass"?W.from:W.player:null;if((W==null?void 0:W.type)!=="collect")if(Z&&kt.has(Z))p.push({t:0,player:Z}),x[Z]=0,(W==null?void 0:W.type)==="pass"&&!!W.fromFeet||u.push({player:Z,at:0,carry:[...i.ball.start],hand:{height:Un*Mt,follow:!0}});else{const k=i.players.filter(ot=>ot.role!=="keeper"),ut=k.length?k:i.players,st=ut.reduce((ot,rt)=>Math.hypot(rt.start[0]-i.ball.start[0],rt.start[1]-i.ball.start[1])<Math.hypot(s[ot.id][0]-i.ball.start[0],s[ot.id][1]-i.ball.start[1])?rt:ot,ut[0]).id;p.push({t:0,player:st}),x[st]=0}}const mt=(i.equipment??[]).filter(P=>P.type==="goal").map(P=>P.at),ft=jM(i.equipment,e),C=P=>P[0]>=0&&P[0]<=i.pitch.width&&P[1]>=0&&P[1]<=i.pitch.length,E=P=>ft.every(b=>Math.hypot(b[0]-P[0],b[1]-P[1])>=cf*Mt),$={};i.players.forEach(P=>$[P.id]=[...P.start]);const ct=At.map(P=>{if(P.type==="move")return $[P.player]=[...P.to],null;if(P.type==="dribble")return $[P.player]=[...P.to],{actor:P.player,target:[...P.to],t:P.t};if(P.type==="collect"||P.type==="tackle")return null;const b=P.type==="pass"?P.from:P.player,W=P.type==="pass"?[...$[P.to]]:P.flightStyle==="ground"?[...P.at]:fS($[P.player],P.at,mt,P.corner,e);return{actor:b,target:W,t:P.t}});for(let P=0;P<At.length;P++){const b=At[P];H(b.t);const W=b.type==="pass"?b.from:b.player;if(b.type!=="dribble"&&b.type!=="move"&&delete v[W],b.type==="move"){Y(b.player,b.t,b.type);const k=kt.has(b.player)&&(((Ut=(Ft=vs(u,b.player,b.t))==null?void 0:Ft.hand)==null?void 0:Ut.height)??0)>0;nt(b.t)===b.player&&!k&&console.warn(`[engine3d] move event for ${b.player} at t=${b.t.toFixed(2)}s starts while they hold the ball (plain moves don't carry): the ball stays parked at its rest point instead of following — pass first, or use a dribble event`);const ut=t.groups[b.gait??"jog"]??t.groups.jog,st=t.clips[Xn(ut,b.player,b.t)].speed??En,ot=A[b.player],Vt={from:ot&&b.t<ot.t0?[...ot.at]:[...s[b.player]],to:b.to,t0:b.t,cruise:st,accel:Ii},Nt=zt(b.player,Vt.from,b.to,b.t,st),Ot=Nt?null:(()=>{const St=Pc(n,st);if((St==null?void 0:St.gait)!=="run"&&(St==null?void 0:St.gait)!=="sprint"||!t.clips[ii.turn_to_run_a.id]||kt.has(b.player)||M(b.player)>b.t+1e-9||!Gi(Vt.from,b.to))return null;const Pt=ki(w[b.player]??0,Be(Vt.from,b.to));return Math.abs(Pt)>=cu?{delta:Pt,gait:St.gait}:null})();if((r[le=b.player]??(r[le]=[])).push(Vt),m[b.player]=Vt,_[b.player]=tt(Vt,b.player),Nt){for(const Pt of _[b.player]??[]){const Kt=o.indexOf(Pt);Kt>=0&&o.splice(Kt,1)}const St={player:b.player,clip:Nt.clip,t0:b.t,loopUntil:b.t+Ie(Vt)};o.push(St),_[b.player]=[St],T({player:b.player,at:Nt.ball,t0:b.t,until:b.t+Ie(Vt)})}else{if(Ot){const St=Math.abs(Ot.delta)>jS,Pt=Ot.gait==="run"?ii.turn_180_a:null,Kt=St&&Pt&&t.clips[Pt.id]?Pt:ii.turn_to_run_a,Et=Kt.id===ii.turn_to_run_a.id?WS:0,ae=Kt.id===ii.turn_to_run_a.id?XS:I(Kt,Et),te=w[b.player]??0;V(b.player,Kt,b.t,Et,te,te+Ot.delta,ae);const Tt=b.t+ae;_[b.player]=(_[b.player]??[]).filter(Bt=>{if(Bt.t0>=Tt-1e-9)return!0;if((Bt.loopUntil??1/0)<=Tt+1e-9){const jt=o.indexOf(Bt);return jt>=0&&o.splice(jt,1),!1}return Bt.t0=Tt,!0})}T({player:b.player,at:b.to,t0:b.t})}s[b.player]=[...b.to]}else if(b.type==="dribble"){Y(b.player,b.t,b.type),nt(b.t)!==b.player&&console.warn(`[engine3d] dribble event for ${b.player} at t=${b.t.toFixed(2)}s but they don't hold the ball — the touch chain plays anyway; fix the authoring`);const k=b.gait??"jog",ut=t.groups[k]??t.groups.jog,st=t.clips[Xn(ut,b.player,b.t)].speed??En,ot=Be(s[b.player],b.to),rt=(((Ct=(xt=vs(u,b.player,b.t))==null?void 0:xt.hand)==null?void 0:Ct.height)??0)>0,Vt=rt?of(u,b.player,b.t):0,Nt=rt?b.t+Bh:b.t,Ot={from:[...s[b.player]],to:[...b.to],t0:Nt,cruise:st,accel:Ii};let St=null;for(let wt=P+1;wt<At.length;wt++){const y=ct[wt];if(!(!y||y.actor!==b.player)){St={target:y.target,t:y.t};break}}const Pt=Nt+Ie(Ot);let Kt=null;for(let wt=P+1;wt<At.length;wt++){const y=At[wt];if((y.type==="pass"?y.from:y.player)===b.player){Kt=y;break}}let Et=null;if((Kt==null?void 0:Kt.type)==="dribble"&&Kt.t-Pt<=fs){const wt=ki(ot,Be(b.to,Kt.to)),y=HS(wt,k),G=y?ii[y]:null;if(G&&t.clips[G.id]){const j=G.standing?Pt:Nt+Ie({...Ot,endSpeed:Ks});Kt.t-j>=I(G)-1e-9&&(Et={c:G,delta:wt})}}St&&St.t-Pt<$r&&!(Et!=null&&Et.c.standing)&&(Ot.endSpeed=Ks),Et&&V(b.player,Et.c,Kt.t-I(Et.c),0,ot,ot+Et.delta),(r[qt=b.player]??(r[qt]=[])).push(Ot),m[b.player]=Ot,_[b.player]=tt(Ot,b.player),T({player:b.player,at:[...b.to],t0:b.t});let ae=null;for(const wt of u)wt.player===b.player&&(!ae||wt.at>ae.at)&&(ae=wt);ae&&ae.at>b.t+1e-9&&console.warn(`[engine3d] dribble for ${b.player} at t=${b.t.toFixed(2)}s starts during their settle (ends t=${ae.at.toFixed(2)}s): the first touch cuts the settle short — schedule it later`);let te=ae?[...ae.carry]:Li(s[b.player],ot);rt&&(te=Li(s[b.player],ot),u.push({player:b.player,at:b.t,carry:[...te],hand:{height:0,from:Vt,rise:Bh,follow:!0}}),x[b.player]=b.t);const Tt=St&&St.t-Pt<=fs?Li(b.to,Be(b.to,St.target)):Li(b.to,ot),Bt=ri(b.player)%2===0?1:-1;let jt=Bt,ne=!1;for(let wt=P+1;wt<At.length;wt++){const y=At[wt];if((y.type==="pass"?y.from:y.player)===b.player){if(y.type==="dribble"&&y.t-Pt<=fs){const j=qe([b.to[0]-Ot.from[0],b.to[1]-Ot.from[1]]),Q=qe([y.to[0]-b.to[0],y.to[1]-b.to[1]]),z=j[0]*Q[1]-j[1]*Q[0],at=z<0?1:-1;Math.abs(z)>.05&&at===-Bt&&(jt=at),ne=Math.abs(ki(Be(Ot.from,b.to),Be(b.to,y.to)))>tc}break}}const Zt=v[b.player],Ee=!!Zt&&Nt-Zt.end<=fs&&Math.abs(ki(Zt.h,ot))>tc;v[b.player]={h:ot,end:Pt};const ht=Object.entries(s).filter(([wt])=>wt!==b.player).map(([,wt])=>[...wt]),Wt=wS(Ot,te,Tt,nu[k]??nu.jog,jt,{turnIn:Ee,turnOut:ne,others:ht});a.push(...Wt.flights),u.push({player:b.player,at:Wt.restEnd,carry:[...Tt]}),x[b.player]=Wt.restEnd,s[b.player]=[...b.to],et(Wt.restEnd,((ee=At[P+1])==null?void 0:ee.t)??i.duration,[...Tt])}else if(b.type==="collect")Y(b.player,b.t,b.type),It(b.player,b.t,P);else if(b.type==="tackle"){Y(b.player,b.t,b.type),J(b.player,b.t);const k=b.from;nt(b.t)!==k&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s from ${k}, but ${nt(b.t)??"nobody"} holds the ball — plays anyway; fix the authoring`);const ut=kt.has(b.player)&&!!t.clips[Jr.id],st=b.t+(ut?Jr:So[0]).contact;let ot=null,rt=-1/0;for(const Kt of u)Kt.player===k&&Kt.at<=st&&Kt.at>rt&&(rt=Kt.at,ot=[...Kt.carry]);ot||(ot=Li(s[k],Be(s[k],s[b.player])));const Vt=Math.hypot(ot[0]-s[b.player][0],ot[1]-s[b.player][1]),Nt=ut?Jr.reach:BM;Vt>Nt*Mt&&console.warn(`[engine3d] tackle by ${b.player} at t=${b.t.toFixed(2)}s: the ball is ${Vt.toFixed(2)} m away (reach ${(Nt*Mt).toFixed(2)}) — move the tackler closer first`);const Ot=ut?Jr:So[Math.abs(ri(b.player)+Math.floor(b.t*10))%So.length],St=b.t+Ot.contact,Pt={player:b.player,clip:Ot.id,t0:b.t,contact:Ot.contact};if(o.push(Pt),T({player:b.player,at:ot,t0:Math.max(b.t-$s,0,f[b.player]??0),lock:[b.t,b.t+Ot.duration]}),ut){const Kt=_s(t,Pt),Et=Li(s[b.player],Be(s[b.player],ot));p.push({t:St,player:b.player});const ae=wo(s[b.player],s[k],ot);u.push({player:b.player,at:St,carry:[...ot],hand:{height:Zr*Mt,follow:!0,bone:ae}}),u.push({player:b.player,at:Kt,carry:Et,hand:{height:Un*Mt,from:Zr*Mt,rise:Mo,follow:!0,bone:ae}}),x[b.player]=St,B[b.player]=b.t+Ot.duration+ps}if(!ut){const Kt=qe([s[k][0]-s[b.player][0],s[k][1]-s[b.player][1]]),Et=[-Kt[1],Kt[0]],ae=(ot[0]-s[k][0])*Et[0]+(ot[1]-s[k][1])*Et[1]>=0?1:-1,te=[s[k][0]+ae*Vh*Mt*Et[0]+Wh*Mt*Kt[0],s[k][1]+ae*Vh*Mt*Et[1]+Wh*Mt*Kt[1]];a.push({from:ot,to:te,t0:St,duration:kM,style:"ground",pop:!0}),p.push({t:St,player:null})}if(t.clips[Hh]){let Kt=1/0;for(let Bt=P+1;Bt<At.length;Bt++){const jt=At[Bt];if((jt.type==="pass"?jt.from:jt.player)===k){Kt=jt.t;break}}const Et=qe([s[k][0]-ot[0],s[k][1]-ot[1]]),ae=UM*Mt,te=St+OM,Tt=qh([...s[k]],[s[k][0]+ae*Et[0],s[k][1]+ae*Et[1]],te,Ys);if(te+Ys+Oi<=Kt){(r[k]??(r[k]=[])).push(Tt),m[k]=Tt,o.push({player:k,clip:Hh,t0:te,loopUntil:te+Ys}),_[k]=[];const Bt=Math.max(te,f[k]??0);Bt<te+Ys&&T({player:k,at:[...ot],t0:Bt,until:te+Ys}),s[k]=[...Tt.to]}}ut||It(b.player,_s(t,Pt),P)}else{const k=b.type==="pass"?b.from:b.player,ut=ce[k],st=!!ut&&b.t>=ut.at-Qr&&b.t-ut.at<=Ao;ut&&!st&&console.warn(`[engine3d] header for ${k} at t=${b.t} does not meet the cross at their forehead (t=${ut.at.toFixed(2)}s) — played as an ordinary ${b.type}`),delete ce[k],st&&b.t-ut.at>Zh&&console.warn(`[engine3d] header for ${k} at t=${b.t} pulled to the ball's arrival (t=${ut.at.toFixed(2)}s) — the ball cannot wait in the air`),Y(k,b.t,b.type),st||J(k,b.t);const ot=b.type==="pass"?s[b.to]:ct[P].target,rt=b.type==="shoot"&&b.flightStyle!=="ground",Vt=rt?cS:lM,Nt=rt?lS:$s,Ot=kt.has(k)&&nt(b.t)===k&&(((ue=(Gt=vs(u,k,b.t))==null?void 0:Gt.hand)==null?void 0:ue.height)??0)>0;kt.has(k)&&(B[k]??0)>b.t&&console.warn(`[engine3d] keeper ${k} is busy until t=${B[k].toFixed(2)}s (save / catch clip still playing) but has a ${b.type} at t=${b.t} — schedule it later`);const St=ht=>{if(!st)return null;const Wt=Math.hypot(ht[0]-Zt[0],ht[1]-Zt[1]);return Wt>=nS?{style:"headed",loft:To(Wt,Mt)}:null};let Pt=b.t;if(b.type==="shoot"){const ht=m[k],Wt=ht?ht.t0+Ie(ht):-1/0;ht&&(ht.endSpeed??0)>0&&b.t-Wt>Qh&&b.t-Wt<$r&&(Pt=Wt-Qh)}let Kt="",Et,ae,te=0,Tt=null,Bt=null;if(st)Et=ut.at,te=ut.height;else if(Ot&&(b.type==="pass"||b.flightStyle==="ground")){Tt=b.style??qM(Math.hypot(ot[0]-s[k][0],ot[1]-s[k][1]));const ht=_n[Tt];Kt=ht.id,ae=ht.contact,Et=b.t+ht.contact,te=ht.release*Mt,B[k]=b.t+ht.duration+ps}else{const ht=m[k],Wt=b.type==="shoot"&&ht&&(ht.endSpeed??0)>0&&Pt<=ht.t0+Ie(ht)+1e-9?yn(ht,Pt).speed:0;Bt=yt(k,Pt,ot,Vt,b.type==="pass"),Wt>hS&&t.clips[ua.id]?(Kt=ua.id,ae=ua.contact):Kt=Xn(t.groups[rt?"shoot":"pass"],k,b.t),Et=Pt+(ae??t.clips[Kt].ballContact??0)}let jt=null;st||(jt={player:k,clip:Kt,t0:Pt,...ae!==void 0?{contact:ae}:{}},o.push(jt),K({player:k,at:[...ot],t0:Math.max(Pt-Nt,0,f[k]??0),lock:[Pt,Et+An],until:Et+An,headUntil:Et-eA},Math.min(Pt,Bt??1/0)));const ne=Be(s[k],ot),Zt=st?[...ut.from]:Li(s[k],ne),Ee=b.type!=="pass"?0:Tt==="throw"?Math.max(.4,Math.hypot(ot[0]-Zt[0],ot[1]-Zt[1])/zh):b.flight;if(!st){const ht=Math.max(Pt-sM,x[k]??0);ht>Et&&console.warn(`[engine3d] departure window for ${k} is inverted (starts t=${ht.toFixed(2)}s, ball contact t=${Et.toFixed(2)}s): the return pass strikes during the settle — schedule it later`),l.push({player:k,windowStart:ht,contact:Et,heading:ne,...Tt?{toHeight:te}:{}})}if(b.type==="pass"&&kt.has(b.to)&&!b.toFeet){const ht=Et+Ee,Wt=L(b.to,P,ht);Wt.blocked&&console.warn(`[engine3d] ball to the keeper ${b.to} at t=${b.t}: their authored ${Wt.blocked} runs during the flight, so where they stand at t=${ht.toFixed(2)}s cannot be known — the ball is aimed at where they are now; fix the authoring`);const wt=Wt.atArrival,y=qe([Zt[0]-wt[0],Zt[1]-wt[1]]),G=[wt[0]+Ne*y[0],wt[1]+Ne*y[1]],j=b.flightStyle==="clipped"||b.flightStyle==="lofted",Q=((re=b.deflect)==null?void 0:re.style)==="lofted",z=j?(b.loft??0)>yM||Q?_n.catchHigh:_n.catch:_n.scoop[Math.abs(ri(b.to)+Math.floor(ht*10))%_n.scoop.length],at=j?Math.min(Un*(z===_n.catchHigh?2:1),NM)*Mt:0,gt=ht-z.contact;gt<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${gt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),gt<Wt.busyUntil&&console.warn(`[engine3d] catch cue for ${b.to} at t=${ht.toFixed(2)}s wants t0=${gt.toFixed(2)}s but their move is still running (until t=${Wt.busyUntil.toFixed(2)}s) — the run will play over the catch; schedule the ball later`),gt<Et&&console.warn(`[engine3d] catch cue for ${b.to} at t=${ht.toFixed(2)}s wants t0=${gt.toFixed(2)}s, before the ball leaves ${k} at t=${Et.toFixed(2)}s — the catch would play out on a ball still at the server's boot; lengthen the flight or schedule the ball later`),o.push({player:b.to,clip:z.id,t0:gt,contact:z.contact});const vt=b.flightStyle==="lofted"?To(Math.hypot(G[0]-Zt[0],G[1]-Zt[1]),Mt)-(te+at)/2:b.loft;if(a.push({from:Zt,to:G,t0:Et,duration:Ee,style:Tt==="kick"?"clipped":j||Tt==="throw"?"lofted":"ground",...vt!==void 0?{loft:vt}:{},...at?{toHeight:at}:{},...te?{fromHeight:te}:{}}),T({player:b.to,at:[...s[k]],t0:b.t,lock:[ht-An,ht+An]}),b.deflect)a.push(Gh(G,at,b.deflect,ht,Mt)),x[b.to]=ht;else{p.push({t:ht,player:b.to});const _t=wo(s[b.to],s[k],G);u.push({player:b.to,at:ht,carry:G,hand:j?{height:Un*Mt,from:at,rise:Mo,follow:!0,bone:_t}:{height:Un*Mt,from:0,rise:Oh,follow:!0,bone:_t}}),x[b.to]=ht}B[b.to]=gt+z.duration+ps}else if(b.type==="pass"&&!b.toFeet&&b.flightStyle==="lofted"&&(b.loft??JM)>=iS){const ht=Et+Ee;let Wt=null,wt=1/0,y=!1,G=!1,j;for(let _t=P+1;_t<At.length;_t++){const bt=ct[_t],Rt=At[_t];if((Rt.type==="move"||Rt.type==="collect")&&Rt.player===b.to&&j===void 0&&Rt.t>=ht-Qr&&(j=Rt.t),!(!bt||bt.actor!==b.to)){Wt=bt.target,wt=bt.t,G=Rt.type==="pass"||Rt.type==="shoot",y=G&&!!Rt.header;break}}j!==void 0&&G&&wt-ht<=Ao&&console.warn(`[engine3d] ${b.to} has a move at t=${j.toFixed(2)}s between the cross landing on their forehead (t=${ht.toFixed(2)}s) and their strike at t=${wt} — they cannot run and head it, so the ball is cushioned down and the strike plays from the boot`);const Q=G&&j===void 0&&wt>=ht-Qr&&(wt-ht<=Zh||y&&wt-ht<=Ao),z=L(b.to,P,ht);z.blocked&&!Q&&console.warn(`[engine3d] cross to ${b.to} at t=${b.t}: their authored ${z.blocked} runs during the flight, so where they stand at t=${ht.toFixed(2)}s cannot be known — the ball is aimed at where they are now and may land behind them; fix the authoring`);const at=sS(z.atArrival,Zt,Wt,Mt),gt=ht-at.clip.contact;gt<0&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${gt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the cross later or shorten the flight`),gt<z.busyUntil&&console.warn(`[engine3d] header cue for ${b.to} wants t0=${gt.toFixed(2)}s but their move is still running (until t=${z.busyUntil.toFixed(2)}s) — the wind-up will cut it short; schedule the cross later`),o.push({player:b.to,clip:at.clip.id,t0:gt,contact:at.clip.contact});const vt=Math.hypot(at.contact[0]-Zt[0],at.contact[1]-Zt[1]);a.push({from:Zt,to:at.contact,t0:Et,duration:Ee,style:"lofted",loft:To(vt,Mt)-(te+at.height)/2,toHeight:at.height,...te?{fromHeight:te}:{}}),Q?(ce[b.to]={at:ht,from:at.contact,height:at.height},T({player:b.to,at:[...Wt],t0:Math.max(gt-$s,0,f[b.to]??0),lock:[gt,ht+An],until:ht+An})):(G&&wt<ht-Qr?console.warn(`[engine3d] ${b.to}'s own strike at t=${wt} is ${(ht-wt).toFixed(2)}s BEFORE the cross reaches their forehead (t=${ht.toFixed(2)}s) — the ball cannot arrive early, so it is cushioned down instead; schedule the strike at the arrival`):y&&console.warn(`[engine3d] header for ${b.to} at t=${wt} is ${(wt-ht).toFixed(2)}s after the ball arrives (t=${ht.toFixed(2)}s) — ignored, cushioned instead`),T({player:b.to,at:[...s[k]],t0:b.t,lock:[ht-An,ht+An]}),a.push({from:at.contact,to:at.set,t0:ht,duration:Eo,style:"drop",fromHeight:at.height}),T({player:b.to,at:[...at.faceAt],t0:ht}),p.push({t:ht,player:b.to}),x[b.to]=ht+Eo,u.push({player:b.to,at:ht+Eo,carry:at.set}))}else if(b.type==="pass"){const ht=Et+Ee,Wt=Xn(t.groups.receive,b.to,ht),wt=t.clips[Wt];let y=null,G=1/0;for(let vt=P+1;vt<At.length;vt++){const _t=At[vt];(_t.type==="pass"?_t.from:_t.player)===b.to&&G===1/0&&(G=_t.t);const Rt=ct[vt];if(!(!Rt||Rt.actor!==b.to)){Rt.t-ht<=fs&&(y=Rt.target);break}}const j=gS(ot,Zt,y);let Q=b.t;{const vt=L(b.to,P,ht),_t=vt.expected,bt=Math.max(b.t,vt.busyUntil),Rt=Math.max(vt.afterT,b.t),Xt=vt.blocked;Q=bt;const he=Math.hypot(j.contact[0]-_t[0],j.contact[1]-_t[1]);if(he>rM)if(Xt)console.warn(`[engine3d] receive for ${b.to}: the ball lands ${he.toFixed(2)}m away at t=${ht.toFixed(2)}s, but their authored ${Xt} is in the way — no adjustment step synthesized (the standing stretch stays); fix the authoring`);else{const Jt=qe([j.contact[0]-_t[0],j.contact[1]-_t[1]]),xe=[j.contact[0]-Ne*Jt[0],j.contact[1]-Ne*Jt[1]],ve=t.groups.walk,de=ve!=null&&ve.length?t.clips[ve[0]].speed??En:En,$t={from:_t,to:xe,t0:0,cruise:de,accel:Ii},De=ht-Dh-Ie($t);De<bt-1e-9?console.warn(`[engine3d] receive adjustment for ${b.to}: the ${(he-Ne).toFixed(2)}m walk to the contact point would need to start at t=${De.toFixed(2)}s but they're busy until t=${bt.toFixed(2)}s — skipped (the standing stretch stays)`):($t.t0=De,Q=ht-Dh,O.push({player:b.to,afterT:Rt,move:$t,faceBall:[...Zt],faceSettle:[...j.faceAt],arrival:ht}))}}const z=wt.ballContact??0,at=Math.min(z,Math.max(oM,Math.min(aM,cM*Ee,ht-(Q+ba)))),gt=ht-at;gt<0&&console.warn(`[engine3d] receive cue for ${b.to} wants t0=${gt.toFixed(2)}s; the player clamps it to 0, so its contact frame will miss ball arrival — schedule the pass later or shorten the flight`),o.push({player:b.to,clip:Wt,t0:gt,...z>at?{offset:z-at}:{}}),a.push({from:Zt,to:j.contact,t0:Et,duration:Ee,style:Tt==="throw"||b.flightStyle==="lofted"?"lofted":Tt==="kick"||b.flightStyle==="clipped"?"clipped":"ground",...Tt==="throw"?{loft:Math.max(1.5,b.loft??0)}:Tt==="kick"?{loft:Math.max(3,b.loft??0)}:b.loft!==void 0?{loft:b.loft}:{},...te?{fromHeight:te}:{},...St(j.contact)??{}}),a.push({from:j.contact,to:j.set,t0:ht,duration:Wn,style:"ground"}),T({player:b.to,at:[...s[k]],t0:b.t,lock:[ht-An,ht+An]}),K({player:b.to,at:[...j.faceAt],t0:ht},G),p.push({t:ht,player:b.to}),x[b.to]=ht+Wn,u.push({player:b.to,at:ht+Wn,carry:j.set}),et(ht+Wn,((we=At[P+1])==null?void 0:we.t)??i.duration,j.set)}else if(b.flightStyle==="ground"){const ht=Math.hypot(ot[0]-Zt[0],ot[1]-Zt[1]),Wt=b.flight??(Tt==="throw"?Math.max(.4,ht/zh):ht/oS);if(a.push({from:Zt,to:[...ot],t0:Et,duration:Wt,style:Tt==="throw"?"lofted":Tt==="kick"?"clipped":"ground",...Tt==="throw"?{loft:1.5}:Tt==="kick"?{loft:3}:{},...te?{fromHeight:te}:{},...St(ot)??{}}),b.deflect){const wt=Math.hypot(b.deflect.to[0]-ot[0],b.deflect.to[1]-ot[1]);a.push({from:[...ot],to:[...b.deflect.to],t0:Et+Wt,style:"ground",duration:FM(ht,Wt,wt)})}}else{const ht=Math.hypot(ot[0]-Zt[0],ot[1]-Zt[1]),Wt=b.flight??ht/aS,wt=qe([ot[0]-Zt[0],ot[1]-Zt[1]]),y=[ot[0]+Jh*wt[0],ot[1]+Jh*wt[1]],G=Et+Wt,j=a.length;a.push({from:Zt,to:y,t0:Et,duration:Wt,style:"shot",...te?{fromHeight:te}:{}}),a.push({from:y,to:y,t0:G,duration:rS,style:"drop"}),et(((q=At[P-1])==null?void 0:q.t)??0,Pt,Zt);let Q=!1;for(const z of Dt){const at=an=>{const Ge=L(z.id,P,an);if(Ge.afterT>-1/0)return Ge.atArrival;const Qe=m[z.id];return Qe&&an<Qe.t0+Ie(Qe)?yn(Qe,an).pos:[...s[z.id]]},gt=Et+Fh(Math.max(Wt,kh)),vt=Nh(Et,Wt,_n.dive.left.contact).t0,_t=b.type==="shoot"?b.deflect:void 0,bt=ge||!!_t,Rt=at(bt?gt:vt),Xt=[ot[0]-Rt[0],ot[1]-Rt[1]],he=Be(Rt,Zt),Jt=bt?KM(Rt,he,Zt,y,Mt):null;if(_t&&!Jt&&console.warn(`[engine3d] deflect on the shot at t=${b.t} is dropped: ${z.id} is ${lf(Rt,Zt,y).reach.toFixed(2)} m off the ball line at body scale ${Mt} (his reach is ${(af*Mt).toFixed(2)} m) — he cannot get a hand to it, so there is nothing to parry; move him or the shot`),!Jt){if(Math.hypot(Xt[0],Xt[1])>rf*Mt)continue;const an=mf(Rt,he,y),Ge=dM[an],Qe=t.clips[Ge],{t0:Me,timeScale:Xe}=Nh(Et,Wt,_n.dive[an].contact);if(T({player:z.id,at:[...Zt],t0:Math.max(Pt-$s,0,f[z.id]??0),...Qe?{lock:[Pt,Me+Qe.duration/Xe]}:{}}),Qe){o.push({player:z.id,clip:Ge,t0:Me,...Xe>1?{timeScale:Xe}:{}});const ke=at(Me),ze=$M(ke,Zt,y,Mt),je=[ze[0]-ke[0],ze[1]-ke[1]],ci=Math.hypot(je[0],je[1]),zn=Math.min(ci,bM*Mt),Gc=ci>1e-9?[ke[0]+je[0]/ci*zn,ke[1]+je[1]/ci*zn]:[...ke],ip=Math.min(vM,Math.max(xM,G-Me));h.push({player:z.id,from:ke,to:Gc,t0:Me,duration:ip}),A[z.id]={t0:Me,at:[...s[z.id]]},s[z.id]=[...Gc]}continue}if(Q)continue;Q=!0;const xe=a[j];a.splice(j+1,1);let ve,de=Jt.contact,$t=Un*Mt;if(Jt.kind==="dive"){xe.duration=Math.max(xe.duration,kh),ve=Et+Fh(xe.duration);const an=Et+xe.duration,Ge={player:z.id,from:[...Rt],to:Jt.travelTo,t0:ve,duration:Jt.contactOffset};h.push(Ge);const Qe=hf(Ge,an),Me=Math.min(1,(an-ve)/Jt.contactOffset),Xe=_n.dive[Jt.side],ke=Me*Xe.reach*Mt,ze=qe([Jt.contact[0]-Rt[0],Jt.contact[1]-Rt[1]]);de=[Qe[0]+ke*ze[0],Qe[1]+ke*ze[1]],$t=(Un+(Xe.hand-Un)*Me)*Mt,A[z.id]={t0:ve,at:[...s[z.id]]},s[z.id]=[...Jt.travelTo]}else ve=Math.max(Pt,Et+xe.duration-Jt.contactOffset);const De=Et+xe.duration;xe.to=de,xe.toHeight=$t,o.push({player:z.id,clip:Jt.clip,t0:ve,contact:Jt.contactOffset});const ye=ve+Jt.clipDuration;if(T({player:z.id,at:[...Zt],t0:Math.max(Pt-$s,0,f[z.id]??0),lock:[Pt,ye]}),_t){a.push(Gh(de,$t,_t,De,Mt)),x[z.id]=De,B[z.id]=ye+ps;continue}p.push({t:De,player:z.id});const dn=wo(s[z.id],Zt,de);Jt.kind==="catch"?u.push({player:z.id,at:De,carry:de,hand:{height:Un*Mt,follow:!0,bone:dn}}):(u.push({player:z.id,at:De,carry:de,hand:{height:Zr*Mt,from:$t,rise:TM,follow:!0,bone:dn}}),u.push({player:z.id,at:ye,carry:de,hand:{height:Un*Mt,from:Zr*Mt,rise:Mo,follow:!0,bone:dn}})),x[z.id]=De,B[z.id]=ye+ps}}if(b.type==="pass"&&!Tt&&jt){const ht=t.groups.walk,Wt=ht!=null&&ht.length?t.clips[ht[0]].speed??En:En,wt=[s[k][0]+cr*Math.sin(ne),s[k][1]+cr*Math.cos(ne)],y=m[k],G=y?y.t0+Ie(y):-1/0;let j=1/0;for(let _t=P+1;_t<At.length;_t++){const bt=At[_t];if((bt.type==="pass"?bt.from:bt.player)===k){j=bt.t;break}}const Q={from:[...s[k]],to:wt,t0:_s(t,jt),cruise:Wt,accel:Ii},z=Q.t0+Ie(Q)+Oi<=j;let at=null,gt=null;if(y&&g.has(y)&&Et>=G&&Et-G<=AA&&Dc(r[k],Et)<Tf){const _t=wA(),bt={...y,to:[...y.to],cruise:Math.max(y.cruise,_t),endSpeed:_t};bt.t0=Et-Ie(bt),bt.t0>=y.t0-1e-9&&Ps(bt).peak>=_t-1e-9&&(at=bt,gt=z?{from:[...s[k]],to:wt,t0:Et,cruise:_t,accel:va,startSpeed:_t}:IA(s[k],ne,_t,j-Et,Et,Rt=>C(Rt)&&E(Rt)))}if(at&&y){for(const _t of _[k]??[]){const bt=o.indexOf(_t);bt>=0&&o.splice(bt,1)}Object.assign(y,at),_[k]=tt(y,k)}const vt=gt??(z?Q:null);vt&&((r[k]??(r[k]=[])).push(vt),m[k]=vt,_[k]=tt(vt,k),s[k]=[...vt.to])}p.push({t:Et,player:null})}const Z=Yt.get(W);Z!==void 0&&Z<b.t&&Yt.delete(W)}H(1/0),p.sort((P,b)=>P.t-b.t),o.sort((P,b)=>P.t0-b.t0),dA(o,r,t);const dt=SA(o,r,t);return{moves:r,flights:a,anims:o,faces:c,departures:l,arrivals:u,dives:h,turns:d,bounces:dt,attachTo(P){let b=null;for(const W of p)W.t<=P&&(b=W.player);return b}}}const DA=/^(spine00[1-6]|breast[LR]|shoulder[LR]|upper_arm[LR]|forearm[LR]|hand[LR]|Fingers[LR]|Index[LR]|Thumb[LR])/,gu=new Map,_u=30;function FA(i,t=0){const e=`${i.uuid}@${t}`;let n=gu.get(e);return n||(n=i.clone(),n.name=`${i.name}__upper`,n.tracks=n.tracks.filter(s=>DA.test(Re.parseTrackName(s.name).nodeName??"")),um.makeClipAdditive(n,t*_u,n,_u),gu.set(e,n)),n}function NA(i,t){if(i<0||i>t)return 0;const e=Math.min(1,i/xf),n=Math.min(1,(t-i)/vf);return uA*Math.max(0,Math.min(e,n))}function UA(i,t,e,n=[]){const s=m=>_s(i,m),r=(m,_)=>Ef(t,i,m,_);function a(m,_){let g=0;for(const f of t){if(f.player!==m)continue;const x=s(f);x<=_&&x>g&&(g=x)}return g}const o=new Map,c=new Map,l=new Map,u=new Map,h=_f(i),d=new Map;for(const m of h)for(const _ of i.groups[m.gait]??[])d.set(_,m.gait);function p(m,_,g,f,x){const A=r(m,g),v=A!=null&&A.additive?A:null,T=v?Pc(h,x):null,w=T?Xn(i.groups[T.gait],m,v.t0):null,R=v?null:A,D=R??(w?v:null),M=w??(R==null?void 0:R.clip)??cA(pS(i,e.get(m)),m,oA(m,g-a(m,g))),S=o.get(m);if(tA(S,M,R)){const nt=i.clips[M],pt=_.mixer.clipAction(_.clips.get(M));pt.reset(),pt.loop=nt.loop?2201:2200,pt.clampWhenFinished=!0,R!=null&&R.offset&&(pt.time=R.offset),S&&S.action!==pt&&(S.action.fadeOut(BS(i,S.clip,M)),pt.fadeIn(yf(i,M,S.clip))),pt.play(),o.set(m,{clip:M,offset:R==null?void 0:R.offset,action:pt})}const I=o.get(m).action,V=!!D&&D.timeScale===void 0&&i.clips[M].category==="locomotion",F=V?d.get(M):void 0,U=V?F?DS(h,x,F):{timeScale:IS(x,i.clips[M].speed??En),partner:null,weight:0}:null,K=U!=null&&U.partner&&D?Xn(i.groups[U.partner],m,D.t0):null,O=c.get(m);if(O&&O.clip!==K&&(O.clip!==M&&(O.action.weight=0,O.action.stop()),c.delete(m)),D)if((R==null?void 0:R.timeScale)!==void 0)I.timeScale=R.timeScale,I.weight=1;else if(U){if(I.timeScale=U.timeScale,I.weight=1-U.weight,K){let nt=c.get(m);if(!nt){const it=_.mixer.clipAction(_.clips.get(K));it.reset(),it.loop=2201,it.play(),nt={clip:K,action:it},c.set(m,nt)}nt.action.weight=U.weight,nt.action.timeScale=U.timeScale;const pt=i.clips[M].duration,zt=i.clips[K].duration;pt>0&&(nt.action.time=I.time/pt%1*zt)}}else I.timeScale=1,I.weight=1;else{I.weight=1,I.timeScale=fu(m);const nt=i.clips[M].duration;I.time=((du(m,nt)+g*I.timeScale)%nt+nt)%nt}const H=MA(n,m,g),L=u.get(m),tt=H>0?_.clips.get(bA):void 0;if(tt){let nt=L;nt||(nt=_.mixer.clipAction(tt),nt.reset(),nt.loop=2201,nt.timeScale=0,nt.play(),u.set(m,nt));const pt=tt.duration;nt.time=((du(m,pt)+g*fu(m))%pt+pt)%pt,nt.weight=H,I.weight*=1-H}else L&&(L.weight=0,L.stop(),L.enabled=!1,u.delete(m));const Y=l.get(m);if(v){const nt=v.offset??0,pt=Math.max(0,i.clips[v.clip].duration-nt),zt=NA(g-v.t0,pt);let it=Y;if(!it||it.clip!==v.clip||it.offset!==nt){it&&(it.action.weight=0,it.action.stop(),it.action.enabled=!1);const et=_.mixer.clipAction(FA(_.clips.get(v.clip),nt));et.reset(),et.loop=2200,et.clampWhenFinished=!0,et.timeScale=0,et.play(),l.set(m,it={clip:v.clip,offset:nt,action:et})}it.action.time=Math.min(i.clips[v.clip].duration,nt+Math.max(0,g-v.t0)),it.action.weight=zt}else Y&&(Y.action.weight=0,Y.action.stop(),Y.action.enabled=!1,l.delete(m));_.mixer.update(f)}return{applyAnim:p,cueAt:r}}class OA{constructor(t,e){Pe(this,"_t",0);Pe(this,"_playing",!1);Pe(this,"speed",1);Pe(this,"loopCbs",[]);Pe(this,"endCbs",[]);Pe(this,"seekCbs",[]);if(this.duration=t,this.loop=e,!Number.isFinite(t)||t<=0)throw new Error(`Timeline: duration must be a finite number > 0 (got ${t})`)}get t(){return this._t}get playing(){return this._playing}play(){this._playing=!0}pause(){this._playing=!1}setSpeed(t){this.speed=t}seek(t){this._t=Math.min(Math.max(t,0),this.duration),this.seekCbs.forEach(e=>e())}onLoop(t){this.loopCbs.push(t)}onSeek(t){this.seekCbs.push(t)}onEnd(t){this.endCbs.push(t)}advance(t){if(this._playing)for(this._t+=t*this.speed;this._t>=this.duration;){if(!this.loop){this._t=this.duration,this._playing=!1,this.endCbs.forEach(e=>e());return}this._t-=this.duration,this.loopCbs.forEach(e=>e())}}}function kA(i,t){const e=new Map(t),n=new Map,s=new Map;function r(a,o,c,l,u,h,d){const p=e.get(a)??0,m=Sf(i,a,o);let _;if(m){const A=s.get(a);A&&A.span===m?_=A.from:(_=p,s.set(a,{span:m,from:_}))}else s.delete(a);const g=m?GS(i,a,o,_):null,f=g?zS(ii[m.clip],l):d?Ky:tf(l),x=g?Rh(p,g.heading,c,f):h?p:Rh(p,u,c,f);return n.set(a,c>0?(x-p)/c:0),e.set(a,x),{h:x,clipYaw:(g==null?void 0:g.clipYaw)??0}}return{heading:e,rateOf:n,step:r}}const BA=.2,GA=.5,zA=.06,HA=.25,bu=.15,VA=.25,WA=.2;function XA(i,t=1){let e=-1;for(let n=0;n<i.length;n++)i[n].speed>=BA*t||(e<0||i[n].y<i[e].y)&&(e=n);return e}function jA(i,t,e=1){return i.speed>GA*e||i.y>t+zA*e}function qA(i,t,e=1){const n=Math.hypot(i,t),s=HA*e;return n<=s||n===0?[i,t]:[i/n*s,t/n*s]}function KA(i,t){for(const e of i??[]){const n=e.t0+Ie(e);if(t>n-VA&&t<=n)return!0}return!1}const $A=new Set(["turn","transition","receive","pass","idle"]);function YA(i,t,e){return e||i===null?!0:$A.has(t??"")}function ZA(){const i=new Map;function t(){return{foot:-1,anchorX:0,anchorZ:0,plantY:0,corrX:0,corrZ:0,outX:0,outZ:0,outAt:-1/0,rootV:0,prev:[],prevRoot:[0,0],prevT:-1/0}}function e(s,r){const a=(r-s.outAt)/bu;if(a>=1)return[0,0];const o=1-a*a*(3-2*a);return[s.outX*o,s.outZ*o]}function n(s,r,a,o,c,l,u){let h=i.get(s);if(h||i.set(s,h=t()),c<=0&&o===h.prevT){const[v,T]=e(h,o);return[h.corrX+v,h.corrZ+T]}if(c<=0||o<h.prevT||o-h.prevT>.5)return h.foot=-1,h.corrX=0,h.corrZ=0,h.outX=0,h.outZ=0,h.outAt=-1/0,h.prevT=o,h.prev=r.map(v=>[...v]),h.prevRoot=[a[0],a[1]],[0,0];const d=a[0]-h.prevRoot[0],p=a[1]-h.prevRoot[1],m=h.rootV=Math.hypot(d,p)/c,_=r.map((v,T)=>{const w=h.prev[T],R=w?Math.hypot(v[0]-w[0]-d,v[2]-w[2]-p)/c:1/0;return{x:v[0],y:v[1],z:v[2],speed:R}}),g=v=>{h.foot<0||(h.foot=-1,h.outX=h.corrX,h.outZ=h.corrZ,h.outAt=o,h.corrX=0,h.corrZ=0)};if(!l||m>=WA)g();else if(h.foot>=0&&jA(_[h.foot],h.plantY,u)&&g(),h.foot<0){const v=XA(_,u);v>=0&&((h.corrX||h.corrZ)&&(h.outX=h.corrX,h.outZ=h.corrZ,h.outAt=o,h.corrX=0,h.corrZ=0),h.foot=v,h.plantY=_[v].y,h.anchorX=r[v][0],h.anchorZ=r[v][2])}else{const[v,T]=qA(h.anchorX-r[h.foot][0],h.anchorZ-r[h.foot][2],u);h.corrX=v,h.corrZ=T}const[f,x]=e(h,o);(o-h.outAt)/bu>=1&&(h.outX=0,h.outZ=0);const A=[h.corrX+f,h.corrZ+x];return h.prev=r.map(v=>[...v]),h.prevRoot=[a[0],a[1]],h.prevT=o,A}return{step:n,foot:s=>{var r;return((r=i.get(s))==null?void 0:r.foot)??-1},rootSpeed:s=>{var r;return((r=i.get(s))==null?void 0:r.rootV)??0},reset:()=>i.clear()}}const Fc=Math.PI/180,Pf=2*Fc,If=4*Fc,JA=8*Fc,QA=If/Pf,xu=.12,tE=.6,eE=.08;function nE(i){return i<QA?0:Math.min(JA,Math.max(If,Pf*i))}function iE(i,t){const e=Math.hypot(i[0],i[1]),n=nE(e);if(n===0)return{pitch:0,roll:0};const s=i[0]*Math.sin(t)+i[1]*Math.cos(t),r=i[0]*Math.cos(t)-i[1]*Math.sin(t);return{pitch:n*s/e,roll:-n*r/e}}function Po(i,t,e,n){return e<=0?i:i+(t-i)*(1-Math.exp(-e/n))}function sE(){const i=new Map,t=new Map,e=new Map;return{tilt(n,s,r,a,o){const c=iE(s,r),l=Po(i.get(n)??0,c.pitch*a,o,xu),u=Po(t.get(n)??0,c.roll*a,o,xu);return i.set(n,l),t.set(n,u),{pitch:l,roll:u}},shoulder(n,s,r){const a=Pa(s)*tE,o=Po(e.get(n)??0,a,r,eE);return e.set(n,o),o},reset(){i.clear(),t.clear(),e.clear()}}}const Io=new rn,vu=new rn,yu=new rn,ya=new rn,rE=new Pn;function aE(i,t){Io.identity();for(let e=i.parent;e&&e!==t;e=e.parent)Io.premultiply(e.quaternion);return Io}const hr=new WeakMap;function Lf(i){const t=hr.get(i);t&&i.quaternion.equals(t.left)&&i.quaternion.copy(t.base)}function Df(i,t){const e=hr.get(i);e?(e.base.copy(t),e.left.copy(i.quaternion)):hr.set(i,{base:t.clone(),left:i.quaternion.clone()})}function Mu(i,t,e,n,s){if(Lf(t),!e&&!n&&!s){hr.delete(t);return}ya.copy(t.quaternion);const r=aE(t,i);vu.setFromEuler(rE.set(e,n,s,"YXZ")),yu.copy(r).invert().multiply(vu).multiply(r),t.quaternion.premultiply(yu),Df(t,ya)}function oE(i,t){if(Lf(i),!t){hr.delete(i);return}ya.copy(i.quaternion),i.rotation.y+=t,Df(i,ya)}function Ma(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function cE(i){var r;const t=[i.root[0]+Ne*Math.sin(i.heading),i.root[1]+Ne*Math.cos(i.heading)];let e=t,n=null;for(const a of i.arrivals)a.player===i.player&&i.t>=a.at&&(!n||a.at>=n.at)&&(n=a);if(n)if((r=n.hand)!=null&&r.follow){const a=n.hand.rise?Ma((i.t-n.at)/n.hand.rise):1;e=[n.carry[0]+(t[0]-n.carry[0])*a,n.carry[1]+(t[1]-n.carry[1])*a]}else e=n.carry;const s=i.departures.find(a=>a.player===i.player&&i.t>=a.windowStart&&i.t<=a.contact);if(s){const a=[i.root[0]+Ne*Math.sin(s.heading),i.root[1]+Ne*Math.cos(s.heading)],o=Ma((i.t-s.windowStart)/Math.max(s.contact-s.windowStart,1e-6));return[e[0]+(a[0]-e[0])*o,e[1]+(a[1]-e[1])*o]}return e}function lE(i){let t=null;for(const o of i.arrivals)o.player===i.player&&i.t>=o.at&&(!t||o.at>=t.at)&&(t=o);if(!(t!=null&&t.hand))return 0;const e=t.hand,n=e.from??e.height,s=e.rise?Ma((i.t-t.at)/e.rise):1;let r=n+(e.height-n)*s;const a=i.departures.find(o=>o.player===i.player&&i.t>=o.windowStart&&i.t<=o.contact);if(a&&a.toHeight!==void 0){const o=Ma((i.t-a.windowStart)/Math.max(a.contact-a.windowStart,1e-6));r+=(a.toHeight-r)*o}return r}function da(i){let t=null,e=null;for(const n of i.flights)i.t>=n.t0&&(t=qi(n,i.t),e=n);if(t&&!t.done)return{pos:t.pos,height:t.height,apex:iM(e),speed:ef(e,i.t)};if(i.holderId&&i.holderRoot){const n={t:i.t,player:i.holderId,root:i.holderRoot,heading:i.holderHeading,departures:i.departures,arrivals:i.arrivals};return{pos:cE(n),height:lE(n),apex:0,speed:0}}return t?{pos:t.pos,height:0,apex:0,speed:0}:{pos:i.ballStart,height:0,apex:0,speed:0}}const hE=1.2,uE=40;function Ff(i,t,e){let n=i.starts[t]??[0,0];for(const s of i.moves[t]??[])e>=s.t0&&(n=yn(s,e).pos);return uf(i.dives,i.moves[t],t,e)??n}function Su(i,t){const e=i.attachTo(t),n=da({t,holderId:e,holderRoot:e?Ff(i,e,t):null,holderHeading:e?i.headingAt(e):0,ballStart:i.ballStart,flights:i.flights,departures:i.departures,arrivals:i.arrivals});return{pos:n.pos,height:n.height}}const Nf=.55,dE=.3,Au=.6,fE=.6,pE=.4,Ia=i=>Math.min(Math.max(i,0),1);function mE(i,t){if(t<=i.t0)return 0;if(t>=i.t0+Ie(i))return 1;const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(e<=0)return 1;const n=yn(i,t).pos;return Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e}function gE(i,t,e,n,s,r,a){const o=Math.hypot(t[0]-i[0],t[1]-i[1]);if(o<1e-6)return[];const c=(t[0]-i[0])/o,l=(t[1]-i[1])/o,u=-l,h=c,d=o-s-.1,p=_=>{const g=e?e*Math.sin(2*Math.PI*_/n):0;return[i[0]+c*_+u*g,i[1]+l*_+h*g]},m=[];for(let _=.15;_+r*.5<=d;_+=r+a){const g=Math.min(_+r,d),[f,x]=p(_),[A,v]=p(g);m.push({ax:f,ay:x,bx:A,by:v,k:(_+g)/2/o})}return m}function Eu(i,t,e=1){const n=Math.hypot(t[0]-i[0],t[1]-i[1])||1,s=(t[0]-i[0])/n,r=(t[1]-i[1])/n,a=Nf*e,o=dE*e,c=t[0]-a*s,l=t[1]-a*r;return[[t[0],t[1]],[c-r*o,l+s*o],[c+r*o,l-s*o]]}const Tu=1.6,ea=2.2,_E=5,bE=5,xE=6,wu=14,vE=4,yE=20,ME="#E8ECEF",SE="#8D949B",AE=1.2,EE=3,TE=.4;function Ru(i,t,e,n){const s=Math.hypot(e[0]-t[0],e[1]-t[1]);if(s<1e-6)return null;const r=Math.min(xE*n,s*.5),a=i==="dribble",o=i==="pass"?yE*n:a?wu*n/8:_E*n;return{dashes:gE(t,e,a?vE*n:0,wu*n,r,o,i==="move"?bE*n:0),headScale:r/Nf}}function wE(i,t){if(i.style!=="shot"||!(i.toHeight!==void 0&&i.toHeight>0))return!1;const e=i.t0+(i.duration??0);return t.some(n=>n.hand!==void 0&&Math.abs(n.at-e)<1e-6&&Math.hypot(n.carry[0]-i.to[0],n.carry[1]-i.to[1])<1e-6)}function RE(i,t,e,n=0){const s=t[1]-i[1];if(Math.abs(s)<1e-6)return null;let r=null,a=0,o=1/0;for(const u of e){const h=(u.y-i[1])/s;!(h>1)||!isFinite(h)||h-1<o&&(o=h-1,a=h,r=u)}if(!r)return null;const c=Math.max(r.halfW-n,0),l=i[0]+(t[0]-i[0])*a;return[Math.min(Math.max(l,r.x-c),r.x+c),r.y]}function La(i){return i.style==="push"?!1:!!i.pop||Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1])>=AE}function CE(i,t,e){const n=i.filter(r=>r.team!=="coach");if(!n.length)return;if(new Set(n.map(r=>r.team)).size===1)return n[0].team;const s=n.find(r=>r.id===e);return s?s.team:n.reduce((r,a)=>{const o=Math.hypot(a.start[0]-t[0],a.start[1]-t[1]);return o<r.d?{team:a.team,d:o}:r},{d:1/0}).team}const Cu=.012,PE=.14,IE=.38,Pu=.15,Uf=.3,LE="#bfe333";function DE(i){const t=1-2*Uf,e=Math.abs(i);return e<=t?1:e>=1?0:(1-e)/(1-t)}const na=1.5,FE=.3,NE=24;function Iu(i){return Pu+(IE-Pu)*Ia(i)}function ec(i,t,e){if(i<t.t0)return 0;const n=t.t0+t.duration,s=i-n;if(s<=0)return 1;const r=s>=na?0:1-s/na;if(e===void 0)return r;const a=Math.max(e,n);if(i<a)return r;const o=1-Math.min(a-n,na)/na;return Math.min(r,o*Math.max(1-(i-a)/FE,0))}function nc(i,t){for(let e=t+1;e<i.length;e++)if(La(i[e]))return i[e].t0}function UE(i,t){const e=[];for(let n=0;n<i.length;n++)La(i[n])&&ec(t,i[n],nc(i,n))>0&&e.push(n);return e.length>2?e.slice(-2):e}function OE(i,t){const e=Math.hypot(i.to[0]-i.from[0],i.to[1]-i.from[1]);if(!(e>0))return 1;const n=qi(i,t).pos;return Ia(Math.hypot(n[0]-i.from[0],n[1]-i.from[1])/e)}function kE(i,t,e){const n=i[t],s=n.t0+n.duration;if(e<=s){const o=qi(n,e).pos;return[o[0],o[1]]}const r=i[t+1];if(!r||La(r)||Math.abs(r.t0-s)>1e-6||Math.hypot(r.from[0]-n.to[0],r.from[1]-n.to[1])>1e-6)return[...n.to];if(e>=r.t0+r.duration)return[...r.to];const a=qi(r,e).pos;return[a[0],a[1]]}function Lu(i,t){const e=Ia((i-t)/.06);return Au+(1-Au)*e}function BE(i,t){return Ia((i-(t-fE))/pE)}const GE=.35;function zE(i,t,e){const n=i.map(s=>({player:s.player,t0:s.windowStart,t1:s.contact+GE}));for(const s of t){const r=e.clips[s.clip];if((r==null?void 0:r.category)!=="receive")continue;const a=Math.max(s.t0,0);n.push({player:s.player,t0:a,t1:a+(r.ballContact??0)+Wn})}return n.sort((s,r)=>s.t0-r.t0)}function HE(i,t,e){let n=null;for(const s of i)e>=s.t0&&e<=s.t1&&(n=s.player);return n??t(e)}const Du=1e-6;function ic(i,t,e){return of(i,t,e)>0}function VE(i,t,e){for(const s of i.flights){if(!(s.fromHeight!==void 0&&s.fromHeight>0)||e<s.t0||e>=s.t0+s.duration)continue;const r=i.attachTo(s.t0-Du);if(r&&ic(i.arrivals,r,s.t0-Du))return{kind:"halo"}}const n=HE(t,i.attachTo,e);if(!n){if(i.staticBall)return{kind:"none"};const s=i.flights.some(a=>e>=a.t0&&e<a.t0+a.duration),r=i.arrivals.some(a=>a.at>e);return s||!r?{kind:"none"}:{kind:"free"}}return i.attachTo(e)===n&&ic(i.arrivals,n,e)?{kind:"halo"}:i.attachTo(e)===n?{kind:"ring",player:n}:{kind:"none"}}function WE(i,t){const e=new URLSearchParams(i.startsWith("?")?i.slice(1):i),n=e.get("runpaths");return{trail:e.get("trail")!=="off",highlight:e.get("highlight")!=="off",runPaths:n==="auto"||n==="authored"||n==="off"?n:t??"auto",zones:e.get("zones")!=="off"}}const XE=.85;function jE(i,t){return i>0?{draw:t>=i*XE,maxWidth:Math.min(i,t)}:{draw:!1,maxWidth:0}}const qE=.15,KE=1e-6;function Fu(i){const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)}function $E(i,t,e){var r;const n=i.filter(a=>a.player===t).sort((a,o)=>a.at-o.at);let s=e.at;for(let a=n.indexOf(e)-1;a>=0&&((r=n[a].hand)==null?void 0:r.bone)===e.hand.bone;a--)s=n[a].at;return s}function Of(i,t,e,n){var a;const s=vs(i,e,n);if(!((a=s==null?void 0:s.hand)!=null&&a.bone))return 0;let r=Fu((n-$E(i,e,s))/qE);for(const o of t)o.player!==e||n<o.windowStart||n>o.contact||(r*=1-Fu((n-o.windowStart)/Math.max(o.contact-o.windowStart,KE)));return r}function YE(i,t,e){var s,r;const n=(r=(s=vs(i,t,e))==null?void 0:s.hand)==null?void 0:r.bone;return n==="L"?0:n==="R"?1:-1}function ZE(i,t,e,n){return ic(i,e,n)||Of(i,t,e,n)>0}const JE=25;function QE(i,t){return i.style==="drop"&&(t==null?void 0:t.style)==="shot"&&i.fromHeight===void 0&&i.from[0]===i.to[0]&&i.from[1]===i.to[1]}function tT(i){const t=[];for(let e=0;e<i.length;e++){const n=i[e];if(QE(n,i[e-1])){t.push({t:n.t0,power:0,shot:!1,net:!0});continue}if(n.style==="drop"||n.style==="headed")continue;const s=ef(n,n.t0);s>0&&t.push({t:n.t0,power:Math.min(1,s/JE),shot:n.style==="shot",net:!1})}return t.sort((e,n)=>e.t-n.t)}const eT=.02;function nT(i,t,e,n,s,r,a,o=!1){if(!o)for(let c=0;c<t.length;c++){const l=t[c];e<l.t&&n>=l.t&&(l.net?i.net():i.kick(l.power,l.shot))}i.roll(s&&r<=eT,a)}function iT(i){let t=!1;return i.onSeek(()=>{t=!0}),(e,n,s,r,a,o,c)=>{nT(e,n,s,r,a,o,c,t),t=!1}}const Nu=new un,ia=new N;class kf extends Rm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ve(t,3)),this.setAttribute("uv",new Ve(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Wo(e,6,1);return this.setAttribute("instanceStart",new kn(n,3,0)),this.setAttribute("instanceEnd",new kn(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Wo(e,6,1);return this.setAttribute("instanceColorStart",new kn(n,3,0)),this.setAttribute("instanceColorEnd",new kn(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new am(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Nu.setFromBufferAttribute(e),this.boundingBox.union(Nu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ia.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ia)),ia.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ia));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Lt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Qt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};bn.line={uniforms:cc.merge([Lt.common,Lt.fog,Lt.line]),vertexShader:`
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
		`};class Nc extends oi{constructor(t){super({type:"LineMaterial",uniforms:cc.clone(bn.line.uniforms),vertexShader:bn.line.vertexShader,fragmentShader:bn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Lo=new be,Uu=new N,Ou=new N,tn=new be,en=new be,Hn=new be,Do=new N,Fo=new oe,nn=new Wm,ku=new N,sa=new un,ra=new In,Vn=new be;let jn,Hi;function Bu(i,t,e){return Vn.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Vn.multiplyScalar(1/Vn.w),Vn.x=Hi/e.width,Vn.y=Hi/e.height,Vn.applyMatrix4(i.projectionMatrixInverse),Vn.multiplyScalar(1/Vn.w),Math.abs(Math.max(Vn.x,Vn.y))}function sT(i,t){const e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,s.count);for(let o=0,c=a;o<c;o++){nn.start.fromBufferAttribute(s,o),nn.end.fromBufferAttribute(r,o),nn.applyMatrix4(e);const l=new N,u=new N;jn.distanceSqToSegment(nn.start,nn.end,u,l),u.distanceTo(l)<Hi*.5&&t.push({point:u,pointOnLine:l,distance:jn.origin.distanceTo(u),object:i,face:null,faceIndex:o,uv:null,uv1:null})}}function rT(i,t,e){const n=t.projectionMatrix,r=i.material.resolution,a=i.matrixWorld,o=i.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),h=-t.near;jn.at(1,Hn),Hn.w=1,Hn.applyMatrix4(t.matrixWorldInverse),Hn.applyMatrix4(n),Hn.multiplyScalar(1/Hn.w),Hn.x*=r.x/2,Hn.y*=r.y/2,Hn.z=0,Do.copy(Hn),Fo.multiplyMatrices(t.matrixWorldInverse,a);for(let d=0,p=u;d<p;d++){if(tn.fromBufferAttribute(c,d),en.fromBufferAttribute(l,d),tn.w=1,en.w=1,tn.applyMatrix4(Fo),en.applyMatrix4(Fo),tn.z>h&&en.z>h)continue;if(tn.z>h){const A=tn.z-en.z,v=(tn.z-h)/A;tn.lerp(en,v)}else if(en.z>h){const A=en.z-tn.z,v=(en.z-h)/A;en.lerp(tn,v)}tn.applyMatrix4(n),en.applyMatrix4(n),tn.multiplyScalar(1/tn.w),en.multiplyScalar(1/en.w),tn.x*=r.x/2,tn.y*=r.y/2,en.x*=r.x/2,en.y*=r.y/2,nn.start.copy(tn),nn.start.z=0,nn.end.copy(en),nn.end.z=0;const _=nn.closestPointToPointParameter(Do,!0);nn.at(_,ku);const g=hd.lerp(tn.z,en.z,_),f=g>=-1&&g<=1,x=Do.distanceTo(ku)<Hi*.5;if(f&&x){nn.start.fromBufferAttribute(c,d),nn.end.fromBufferAttribute(l,d),nn.start.applyMatrix4(a),nn.end.applyMatrix4(a);const A=new N,v=new N;jn.distanceSqToSegment(nn.start,nn.end,v,A),e.push({point:v,pointOnLine:A,distance:jn.origin.distanceTo(v),object:i,face:null,faceIndex:d,uv:null,uv1:null})}}}class aT extends Ae{constructor(t=new kf,e=new Nc({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,c=e.count;a<c;a++,o+=2)Uu.fromBufferAttribute(e,a),Ou.fromBufferAttribute(n,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Uu.distanceTo(Ou);const r=new Wo(s,2,1);return t.setAttribute("instanceDistanceStart",new kn(r,1,0)),t.setAttribute("instanceDistanceEnd",new kn(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;jn=t.ray;const a=this.matrixWorld,o=this.geometry,c=this.material;Hi=c.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ra.copy(o.boundingSphere).applyMatrix4(a);let l;if(n)l=Hi*.5;else{const h=Math.max(s.near,ra.distanceToPoint(jn.origin));l=Bu(s,h,c.resolution)}if(ra.radius+=l,jn.intersectsSphere(ra)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),sa.copy(o.boundingBox).applyMatrix4(a);let u;if(n)u=Hi*.5;else{const h=Math.max(s.near,sa.distanceToPoint(jn.origin));u=Bu(s,h,c.resolution)}sa.expandByScalar(u),jn.intersectsBox(sa)!==!1&&(n?sT(this,e):rT(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Lo),this.material.uniforms.resolution.value.set(Lo.z,Lo.w))}}class Bf extends kf{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let s=0;s<e;s+=3)n[2*s]=t[s],n[2*s+1]=t[s+1],n[2*s+2]=t[s+2],n[2*s+3]=t[s+3],n[2*s+4]=t[s+4],n[2*s+5]=t[s+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let s=0;s<e;s++)n[6*s]=t[s].x,n[6*s+1]=t[s].y,n[6*s+2]=t[s].z||0,n[6*s+3]=t[s+1].x,n[6*s+4]=t[s+1].y,n[6*s+5]=t[s+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class oT extends aT{constructor(t=new Bf,e=new Nc({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}function cT(i,t,e){const n=t[0]-i[0],s=t[1]-i[1],r=Math.hypot(n,s);if(r<1e-9)return{axis:[0,0,0],angle:0};const a=n/r;return{axis:[s/r,0,-a],angle:r/e}}const Gu=.55,Gf=.55,zu=.006,lT=i=>1/(1+Math.max(i,0)),hT=i=>Gf/(1+2*Math.max(i,0)),uT=.6,dT=(i,t)=>t>0?i/t*uT:0,fT=14,pT=.25,zf=.25,aa=Math.round(zf*60)+2,mT=2,gT=.5,_T=16774102,bT=20,No=.06,Uo=.06,Hu=.09;function xT(i){if(!(i>=0)||i>=Uo+Hu)return[1,1,1];const t=i<Uo?1:1-(i-Uo)/Hu;return[1+No*t,1-No*t,1+No*t]}const vT=.02,yT=2;let Js=null;function MT(){if(Js)return Js;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,1)"),e.addColorStop(.55,"rgba(0,0,0,0.55)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Js=new Ln(i),Js.userData.shared=!0,Js}function ST(i){let{bodyScale:t,radius:e}=i;const n=new Je({map:MT(),transparent:!0,depthWrite:!1,opacity:Gf,fog:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),s=new Ae(new Gn(Gu,Gu).rotateX(-Math.PI/2),n);s.position.y=zu,s.renderOrder=1,i.root.add(s);const r=new Nc({linewidth:mT,color:_T,vertexColors:!0,transparent:!0,opacity:gT,blending:2,depthWrite:!1,depthTest:!0,toneMapped:!1});r.resolution.set(i.resolution.width,i.resolution.height);const a=new Bf;a.setPositions(new Float32Array(aa*3)),a.setColors(new Float32Array(aa*3));const o=a.attributes.instanceStart.data,c=a.attributes.instanceColorStart.data,l=new oT(a,r);l.frustumCulled=!1,l.renderOrder=bT,l.visible=!1,i.root.add(l);const u=[],h=new N;let d=!1,p=!1,m=-1;const _=new N;function g(){s.scale.setScalar(t)}g();function f(x){const A=d?h.distanceTo(x.pos):0,v=d&&A>yT,T=x.height<=vT;if(s.visible=!x.held,s.visible&&(s.position.set(x.pos.x,zu,x.pos.z),s.scale.setScalar(t*lT(x.height)),n.opacity=hT(x.height)),d&&!v&&x.dt>0&&A>1e-9){const{axis:S,angle:I}=cT([h.x,h.z],[x.pos.x,x.pos.z],e);if(S[0]!==0||S[2]!==0){_.set(S[0],S[1],S[2]);const V=T?I:dT(A/x.dt,e)*x.dt;V>0&&i.mesh.rotateOnWorldAxis(_,V)}}T&&p&&!v&&(m=x.t),v&&(m=-1),p=!T;const[w,R,D]=m<0?[1,1,1]:xT(x.t-m);if(i.mesh.scale.set(t*w,t*R,t*D),v&&(u.length=0),x.dt>0){for(u.push({t:x.t,p:x.pos.clone()});u.length&&x.t-u[0].t>zf;)u.shift();for(;u.length>aa;)u.shift()}if((x.speed>fT||(x.apex??0)>=pT)&&u.length>=2){const I=u.length-1,V=o.array,F=c.array;for(let U=0;U<aa-1;U++)for(const[K,O]of[[0,U],[3,U+1]]){const H=u[Math.min(O,I)].p,L=6*U+K;V[L]=H.x,V[L+1]=H.y,V[L+2]=H.z;const tt=Math.min(O,I)/I;F[L]=F[L+1]=F[L+2]=tt}o.needsUpdate=!0,c.needsUpdate=!0,a.instanceCount=I,l.visible=!0}else l.visible=!1;h.copy(x.pos),d=!0}return{update:f,resize(x,A,v){t=x,e=A,g(),r.resolution.set(v.width,v.height)},__state:()=>({shadow:s,streak:l,trailLength:u.length,squashFrom:m})}}const AT=.055,ET=.17,Di=.015,Vu=2.1,TT=.16,wT=.1,RT=1.6,CT=.45,PT=.11,IT={technical:yv,tactical:Mv,physical:Sv,social:Av};function LT(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.62,"rgba(255,255,255,0)"),e.addColorStop(.76,"rgba(255,255,255,0.9)"),e.addColorStop(.84,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Ln(i)}function DT(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function FT(i){const t=document.createElement("canvas"),e=48;t.width=Math.max(64,Math.round(i.w*e)),t.height=Math.max(64,Math.round(i.h*e));const n=t.getContext("2d"),s=i.color!==void 0?IT[i.color]??i.color:ji,r=Math.min(t.width,t.height)*.14;if(DT(n,3,3,t.width-6,t.height-6,r),n.globalAlpha=TT,n.fillStyle=s,n.fill(),n.globalAlpha=.55,n.lineWidth=4,n.strokeStyle=s,n.stroke(),i.label){n.font="600 22px system-ui, sans-serif";const o=i.label.toUpperCase(),c=jE(n.measureText(o).width,t.width-30);c.draw&&(n.globalAlpha=.85,n.fillStyle=s,n.fillText(o,18,34,c.maxWidth))}const a=new Ln(t);return a.colorSpace=Oe,a}function NT(i){var A,v;const{scene:t,drill:e,schedule:n}=i,s=(...T)=>{for(const w of T)w.traverse(R=>{const D=R.material;for(const M of Array.isArray(D)?D:D?[D]:[])M.toneMapped=!1});t.add(...T)},r=i.pathM??wT,a=T=>T*r*(i.pathWidthK??1),o=WE(i.search??location.search,(A=e.overlays)==null?void 0:A.runPaths),{width:c,length:l}=e.pitch,u=T=>T-c/2,h=T=>T-l/2,d={moves:n.moves,flights:n.flights,departures:n.departures,arrivals:n.arrivals,dives:n.dives,attachTo:n.attachTo,starts:Object.fromEntries(e.players.map(T=>[T.id,T.start])),ballStart:e.ball.start,headingAt:i.headingAt},p=CE(e.players,e.ball.start,n.attachTo(0)),m=new Map(e.players.map(T=>[T.id,T.team])),_=T=>m.get(T)===p?ME:SE,g=[];{const T=uE,w=new Float32Array(T*3),R=new He;R.setAttribute("position",new Te(new Float32Array(T*2*3),3)),R.setAttribute("color",new Te(new Float32Array(T*2*3),3));const D=new Float32Array(T*2*2);for(let O=0;O<T;O++)D.set([0,O/(T-1),1,O/(T-1)],O*4);R.setAttribute("uv",new Te(D,2));const M=new Uint16Array((T-1)*6);for(let O=0;O<T-1;O++){const H=O*2;M.set([H,H+1,H+2,H+1,H+3,H+2],O*6)}R.setIndex(new Te(M,1));const S=(()=>{const O=document.createElement("canvas");O.width=64,O.height=1;const H=O.getContext("2d"),[L,tt,Y]=vv,nt=H.createLinearGradient(0,0,64,0);nt.addColorStop(0,`rgba(${L},${tt},${Y},0)`),nt.addColorStop(.28,`rgba(${L},${tt},${Y},0.28)`),nt.addColorStop(.44,"rgba(216,247,120,0.8)"),nt.addColorStop(.5,"rgba(255,255,255,1)"),nt.addColorStop(.56,"rgba(216,247,120,0.8)"),nt.addColorStop(.72,`rgba(${L},${tt},${Y},0.28)`),nt.addColorStop(1,`rgba(${L},${tt},${Y},0)`),H.fillStyle=nt,H.fillRect(0,0,64,1);const pt=new Ln(O);return pt.colorSpace=Oe,pt})(),I=new Ae(R,new Je({map:S,vertexColors:!0,blending:2,transparent:!0,depthWrite:!1,side:2}));I.frustumCulled=!1,I.renderOrder=6,s(I);const V=new N,F=new N,U=new N,K=hE/(T-1);g.push((O,H)=>{if(I.visible=o.trail,!o.trail)return;for(let Y=0;Y<T;Y++){const nt=Su(d,O-Y*K);w[Y*3]=u(nt.pos[0]),w[Y*3+1]=AT+nt.height,w[Y*3+2]=h(nt.pos[1])}const L=R.getAttribute("position"),tt=R.getAttribute("color");U.set(1,0,0);for(let Y=0;Y<T;Y++){const nt=Math.min(Y,T-2);V.set(w[nt*3]-w[nt*3+3],w[nt*3+1]-w[nt*3+4],w[nt*3+2]-w[nt*3+5]),F.set(w[Y*3],w[Y*3+1],w[Y*3+2]).sub(H.position),V.lengthSq()>1e-10&&(V.cross(F),V.lengthSq()>1e-10&&U.copy(V.normalize()));const pt=Math.pow(1-Y/(T-1),1.2),zt=ET*(.35+.65*pt),it=w[Y*3],et=w[Y*3+1],X=w[Y*3+2];L.setXYZ(Y*2,it+U.x*zt,et+U.y*zt,X+U.z*zt),L.setXYZ(Y*2+1,it-U.x*zt,et-U.y*zt,X-U.z*zt);const J=pt;tt.setXYZ(Y*2,J,J,J),tt.setXYZ(Y*2+1,J,J,J)}L.needsUpdate=tt.needsUpdate=!0})}{const T=[];let w=0,R=0;for(const D of e.events){if(D.type!=="move"&&D.type!=="dribble")continue;const M=(n.moves[D.player]??[]).find(V=>V.t0===D.t&&V.to[0]===D.to[0]&&V.to[1]===D.to[1]);if(!M)continue;const S=Ru(D.type,M.from,M.to,r);if(!S)continue;const I=new se(_(D.player));T.push({m:M,authored:D.runPath===!0,stroke:S,baseR:I.r,baseG:I.g,baseB:I.b,baseA:1,vert0:w,vertCount:S.dashes.length*4+3}),w+=S.dashes.length*4+3,R+=S.dashes.length*6+3}if(T.length){const D=new Float32Array(w*3),M=new Float32Array(w*4),S=new Uint16Array(R);let I=0,V=0;const F=a(Tu)/2;for(const H of T){const L=Math.hypot(H.m.to[0]-H.m.from[0],H.m.to[1]-H.m.from[1])||1,tt=-(H.m.to[1]-H.m.from[1])/L,Y=(H.m.to[0]-H.m.from[0])/L;for(const et of H.stroke.dashes){const X=I/3;D.set([u(et.ax+tt*F),Di,h(et.ay+Y*F),u(et.ax-tt*F),Di,h(et.ay-Y*F),u(et.bx+tt*F),Di,h(et.by+Y*F),u(et.bx-tt*F),Di,h(et.by-Y*F)],I),I+=12,S.set([X,X+1,X+2,X+1,X+3,X+2],V),V+=6}const[nt,pt,zt]=Eu(H.m.from,H.m.to,H.stroke.headScale),it=I/3;D.set([u(nt[0]),Di,h(nt[1]),u(pt[0]),Di,h(pt[1]),u(zt[0]),Di,h(zt[1])],I),I+=9,S.set([it,it+1,it+2],V),V+=3}const U=new He;U.setAttribute("position",new Te(D,3)),U.setAttribute("color",new Te(M,4)),U.setIndex(new Te(S,1));const K=new Ae(U,new Je({vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));K.renderOrder=2,s(K);const O=U.getAttribute("color");g.push(H=>{if(K.visible=o.runPaths!=="off",!!K.visible){for(const L of T){const tt=o.runPaths==="authored"&&!L.authored?0:BE(H,L.m.t0),Y=mE(L.m,H);let nt=L.vert0;for(const zt of L.stroke.dashes){const it=L.baseA*tt*Lu(zt.k,Y);for(let et=0;et<4;et++)O.setXYZW(nt++,L.baseR,L.baseG,L.baseB,it)}const pt=L.baseA*tt*Lu(1,Y);for(let zt=0;zt<3;zt++)O.setXYZW(nt++,L.baseR,L.baseG,L.baseB,pt)}O.needsUpdate=!0}})}}{const T=NE,w=PE/2,R=[-1,-.4,1-2*Uf,1],D=R.map(DE),M=R.length,S=n.flights.map((F,U)=>nc(n.flights,U)),I=()=>{const F=new He,U=new Float32Array((T+1)*M*3);for(let L=0;L<(T+1)*M;L++)U[L*3+1]=Cu;const K=new Float32Array((T+1)*M*4),O=new Uint16Array(T*(M-1)*6);for(let L=0,tt=0;L<T;L++)for(let Y=0;Y<M-1;Y++,tt++){const nt=L*M+Y;O.set([nt,nt+1,nt+M,nt+1,nt+M+1,nt+M],tt*6)}F.setAttribute("position",new Te(U,3)),F.setAttribute("color",new Te(K,4)),F.setIndex(new Te(O,1));const H=new Ae(F,new Je({color:LE,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));return H.frustumCulled=!1,H.renderOrder=2,H.name="passRibbon",s(H),{mesh:H,posAttr:F.getAttribute("position"),colAttr:F.getAttribute("color")}},V=[I(),I()];g.push(F=>{const U=o.runPaths==="auto"?UE(n.flights,F):[];for(let K=0;K<V.length;K++){const O=V[K],H=U[U.length-1-K]??-1;if(O.mesh.visible=H>=0,H<0)continue;const L=n.flights[H],tt=ec(F,L,S[H]),Y=OE(L,F),nt=Math.hypot(L.to[0]-L.from[0],L.to[1]-L.from[1])||1,pt=-(L.to[1]-L.from[1])/nt*w,zt=(L.to[0]-L.from[0])/nt*w,it=L.from[0]+(L.to[0]-L.from[0])*Y,et=L.from[1]+(L.to[1]-L.from[1])*Y,X=kE(n.flights,H,F);for(let J=0;J<=T;J++){const yt=J/T,It=J===T?X[0]:L.from[0]+(it-L.from[0])*yt,Dt=J===T?X[1]:L.from[1]+(et-L.from[1])*yt,Mt=tt*Iu(yt);for(let kt=0;kt<M;kt++){const ge=R[kt],B=J*M+kt;O.posAttr.setX(B,u(It+pt*ge)),O.posAttr.setZ(B,h(Dt+zt*ge)),O.colAttr.setXYZW(B,1,1,1,Mt*D[kt])}}O.posAttr.needsUpdate=O.colAttr.needsUpdate=!0}})}{const T=(e.equipment??[]).filter(I=>I.type==="goal").map(I=>({x:I.at[0],y:I.at[1],halfW:lr*i.goalScale})),w=a(ea)/2,R=[],D=[],M=[],S=[];for(let I=0;I<n.flights.length;I++){const V=n.flights[I];if(!La(V))continue;const F=wE(V,n.arrivals);if(!F&&!V.pop)continue;const U=Math.hypot(V.to[0]-V.from[0],V.to[1]-V.from[1])||1,K=-(V.to[1]-V.from[1])/U,O=(V.to[0]-V.from[0])/U,H=O,L=-K;let tt=0;if(F){const Y=EE*2*w/2;D.push({ax:V.to[0]-H*w,ay:V.to[1]-L*w,bx:V.to[0]+H*w,by:V.to[1]+L*w,h:Y,px:K,py:O});const nt=RE(V.from,V.to,T,a(ea))??V.to;D.push({ax:V.to[0],ay:V.to[1],bx:nt[0],by:nt[1],h:TE*w,px:K,py:O}),tt=8}else{D.push({ax:V.from[0],ay:V.from[1],bx:V.to[0],by:V.to[1],h:Tu/ea*w,px:K,py:O});const Y=Ru("pass",V.from,V.to,r);M.push(Eu(V.from,V.to,Y?Y.headScale:0)),tt=7}S.push({i:I,verts:tt})}if(S.length){const I=S.reduce((X,J)=>X+J.verts,0),V=S.reduce((X,J)=>X+(J.verts===8?12:9),0),F=new Float32Array(I*3),U=new Float32Array(I*4),K=new Uint16Array(V);let O=0,H=0,L=0,tt=0;const Y=Cu,nt=()=>{const X=D[L++],J=O/3;F.set([u(X.ax+X.px*X.h),Y,h(X.ay+X.py*X.h),u(X.ax-X.px*X.h),Y,h(X.ay-X.py*X.h),u(X.bx+X.px*X.h),Y,h(X.by+X.py*X.h),u(X.bx-X.px*X.h),Y,h(X.by-X.py*X.h)],O),O+=12,K.set([J,J+1,J+2,J+1,J+3,J+2],H),H+=6};for(const X of S){const J=O/3;if(X.verts===8)nt(),nt();else{nt();const[yt,It,Dt]=M[tt++],Mt=O/3;F.set([u(yt[0]),Y,h(yt[1]),u(It[0]),Y,h(It[1]),u(Dt[0]),Y,h(Dt[1])],O),O+=9,K.set([Mt,Mt+1,Mt+2],H),H+=3}R.push({flight:X.i,vert0:J,vertCount:X.verts})}const pt=new He;pt.setAttribute("position",new Te(F,3)),pt.setAttribute("color",new Te(U,4)),pt.setIndex(new Te(K,1));const zt=new Ae(pt,new Je({color:Tv,vertexColors:!0,transparent:!0,depthWrite:!1,side:2}));zt.renderOrder=2.5,zt.name="passMarks",s(zt);const it=pt.getAttribute("color"),et=n.flights.map((X,J)=>nc(n.flights,J));g.push(X=>{if(zt.visible=o.runPaths==="auto",!!zt.visible){for(const J of R){const yt=n.flights[J.flight],It=X<yt.t0+yt.duration?0:ec(X,yt,et[J.flight])*Iu(1);let Dt=J.vert0;for(let Mt=0;Mt<J.vertCount;Mt++,Dt++)it.setXYZW(Dt,1,1,1,It)}it.needsUpdate=!0}})}}{const T=zE(n.departures,n.anims,i.clips),w={arrivals:n.arrivals,flights:n.flights,attachTo:n.attachTo,staticBall:e.ball.static===!0},R=new Je({map:LT(),color:ji,blending:2,transparent:!0,depthWrite:!1}),D=new Ae(new Gn(Vu,Vu).rotateX(-Math.PI/2),R);D.position.y=.02,D.renderOrder=3,s(D);const M=i.ballRadius??PT,S=RT*M,I=ea*r,V=new Je({color:ji,blending:2,transparent:!0,depthWrite:!1,depthTest:!1,side:2}),F=new Ae(new wa(Math.max(S-I/2,1e-4),S+I/2,40),V);F.frustumCulled=!1,F.renderOrder=8,s(F),g.push((U,K)=>{const O=VE(w,T,U);D.visible=o.highlight&&O.kind==="ring",F.visible=o.highlight&&(O.kind==="halo"||O.kind==="free");const H=Math.sin(U*2*Math.PI/1.6);if(O.kind==="ring"){const L=Ff(d,O.player,U);D.position.x=u(L[0]),D.position.z=h(L[1]);const tt=1+.05*H;D.scale.x=D.scale.z=tt,R.opacity=.72+.18*H}else if(O.kind==="halo"||O.kind==="free"){const L=Su(d,U);F.position.set(u(L.pos[0]),M+L.height,h(L.pos[1])),F.quaternion.copy(K.quaternion),V.opacity=O.kind==="free"?CT:.72+.18*H}})}const f=[];for(const T of((v=e.overlays)==null?void 0:v.zones)??[]){const w=new Ae(new Gn(T.w,T.h).rotateX(-Math.PI/2).rotateY(Math.PI),new Je({map:FT(T),transparent:!0,depthWrite:!1}));w.position.set(u(T.at[0]),.004,h(T.at[1])),w.renderOrder=.5,s(w),f.push(w)}const x=()=>{for(const T of f)T.visible=o.zones};return x(),{update(T,w){for(const R of g)R(T,w)},set(T){Object.assign(o,T),x()}}}const UT=.16,OT=.25,Hf=.8,Vf=.6,Wf=8,kT=Vf*Wf;function BT(i,t){return!(i>=0)||i>=Hf||t>kT*i?0:UT*Math.exp(-i/OT)*Math.sin(2*Math.PI*(t/Vf-Wf*i))}function GT(i){const t=[];for(let e=0;e<i.length-1;e++){const n=i[e],s=i[e+1];n.style!=="shot"||s.style!=="drop"||s.from[0]!==n.to[0]||s.from[1]!==n.to[1]||t.push({t:n.t0+n.duration,at:[...n.to],height:s.fromHeight??zT})}return t}const zT=.6,Wu=.15,HT=.12,VT=i=>{const t=Math.min(Math.max(i,0),1);return t*t*(3-2*t)};function Xu(i){return VT(Math.min(i,1-i)/HT)}function WT(i,t){const e=i.geometry,n=e.getAttribute("position"),s=e.getAttribute("uv"),r=e.getAttribute("normal");if(!n||n.count!==4)return null;const a=[];for(let H=0;H<4;H++)a.push([n.getX(H),n.getY(H),n.getZ(H)]);const o=[0,1,2].map(H=>Math.min(...a.map(L=>L[H]))),c=[0,1,2].map(H=>Math.max(...a.map(L=>L[H]))),l=[0,1,2].map(H=>c[H]-o[H]),u=l.indexOf(Math.min(...l));if(l[u]>.001)return null;const[h,d]=[0,1,2].filter(H=>H!==u);if(!(l[h]>0&&l[d]>0))return null;const p=(H,L)=>{let tt=0,Y=1/0;for(let nt=0;nt<4;nt++){const pt=Math.abs((a[nt][h]-o[h])/l[h]-H)+Math.abs((a[nt][d]-o[d])/l[d]-L);pt<Y&&(Y=pt,tt=nt)}return tt},m=p(0,0),_=p(1,0),g=p(0,1),f=p(1,1),x=(H,L)=>s?L?s.getY(H):s.getX(H):0,A=new N().setFromMatrixScale(t).x,v=Math.max(2,Math.min(96,Math.ceil(l[h]*A/Wu))),T=Math.max(2,Math.min(96,Math.ceil(l[d]*A/Wu))),w=(v+1)*(T+1),R=new Float32Array(w*3),D=new Float32Array(w*2),M=new Float32Array(w*3),S=new Float32Array(w),I=r?[r.getX(0),r.getY(0),r.getZ(0)]:[0,0,0];for(let H=0;H<=T;H++)for(let L=0;L<=v;L++){const tt=H*(v+1)+L,Y=L/v,nt=H/T;R[tt*3+u]=a[0][u],R[tt*3+h]=o[h]+l[h]*Y,R[tt*3+d]=o[d]+l[d]*nt;for(const pt of[0,1])D[tt*2+pt]=x(m,pt)*(1-Y)*(1-nt)+x(_,pt)*Y*(1-nt)+x(g,pt)*(1-Y)*nt+x(f,pt)*Y*nt;M.set(I,tt*3),S[tt]=Xu(Y)*Xu(nt)}const V=[];for(let H=0;H<T;H++)for(let L=0;L<v;L++){const tt=H*(v+1)+L;V.push(tt,tt+1,tt+v+1,tt+1,tt+v+2,tt+v+1)}const F=new He;F.setAttribute("position",new Te(R,3)),F.setAttribute("uv",new Te(D,2)),F.setAttribute("normal",new Te(M,3)),F.setIndex(V),F.userData.drillOwned=!0,i.geometry=F;const U=new Float32Array(R),K=new Float32Array(w*3),O=new N;for(let H=0;H<w;H++)O.fromArray(U,H*3).applyMatrix4(t).toArray(K,H*3);return{mesh:i,axis:u,rest:U,world:K,weight:S,scale:A}}function ju(i,t=!1){if(i.goal.updateWorldMatrix(!0,!1),!t&&i.placed.equals(i.goal.matrixWorld))return;const e=new oe().copy(i.goal.matrixWorld).invert();for(const n of i.hits)n.p.copy(n.w).applyMatrix4(e),n.p.z=qn.zMin;i.placed.copy(i.goal.matrixWorld)}function XT(i,t,e){const n=[];if(i.length&&t.length){const s=i.map(()=>[]);for(const r of t){const a=e(r.at,r.height);let o=0,c=1/0;i.forEach((l,u)=>{const h=l.position.distanceToSquared(a);h<c&&(c=h,o=u)}),s[o].push(r)}i.forEach((r,a)=>{if(!s[a].length)return;r.updateMatrixWorld(!0);const o=new oe().copy(r.matrixWorld).invert(),c=[];if(r.traverse(u=>{const h=u;if(!h.isMesh||!jT(h))return;const d=WT(h,new oe().multiplyMatrices(o,h.matrixWorld));d&&c.push(d)}),!c.length)return;const l={panels:c,goal:r,dirty:!1,placed:new oe,hits:s[a].map(u=>({t:u.t,w:e(u.at,u.height),p:new N}))};ju(l,!0),n.push(l)})}return{panels:n.reduce((s,r)=>s+r.panels.length,0),update(s){for(const r of n){const a=qT(r.hits,s);if(!a){if(!r.dirty)continue;for(const c of r.panels)KT(c);r.dirty=!1;continue}ju(r);const o=s-a.t;for(const c of r.panels){const l=c.mesh.geometry.getAttribute("position"),u=l.array;for(let h=0;h<c.weight.length;h++){const d=c.world[h*3]-a.p.x,p=c.world[h*3+1]-a.p.y,m=c.world[h*3+2]-a.p.z,_=BT(o,Math.hypot(d,p,m))*c.weight[h];u[h*3+c.axis]=c.rest[h*3+c.axis]+_/c.scale}l.needsUpdate=!0}r.dirty=!0}}}}const jT=i=>(Array.isArray(i.material)?i.material:i.material?[i.material]:[]).some(e=>/^net/i.test(e.name))||/^net/i.test(i.name);function qT(i,t){let e=null;for(const n of i)t>=n.t&&t-n.t<Hf&&(e=n);return e}function KT(i){const t=i.mesh.geometry.getAttribute("position");t.array.set(i.rest),t.needsUpdate=!0}const Uc=new N(0,1,0),Xf=.04,jf=8,ur=.1,Is=46,Ls=25,qu=70;function Sa(i,t){return new N(Math.cos(i)*Math.sin(t),Math.sin(i),-Math.cos(i)*Math.cos(t))}function Da(i){const t=i.fov*Math.PI/360;return{vHalf:t,hHalf:Math.atan(Math.tan(t)*i.aspect)}}let Vi=new Float64Array(64),oa=new Float64Array(64),ca=new Float64Array(64);const qf=new N,Kf=new N,vi=new N;function Ku(i,t,e){let n=-1/0,s=-1/0;for(let r=0;r<t;r++)n=Math.max(n,i[r]/(2*e)+Vi[r]/2),s=Math.max(s,-i[r]/(2*e)+Vi[r]/2);return n+s}function $u(i,t,e,n){let s=-1/0,r=1/0;for(let a=0;a<t;a++)s=Math.max(s,i[a]-(n-Vi[a])*e),r=Math.min(r,i[a]+(n-Vi[a])*e);return[(s+r)/2,Math.max((r-s)/2,0)]}function Aa(i,t,e,n,s){const r=i.length;Vi.length<r&&(Vi=new Float64Array(r),oa=new Float64Array(r),ca=new Float64Array(r));const a=qf.crossVectors(Uc,e).normalize(),o=Kf.crossVectors(e,a).normalize(),c=Math.tan(s),l=Math.tan(n);for(let _=0;_<r;_++)vi.subVectors(i[_],t),Vi[_]=vi.dot(e),oa[_]=vi.dot(a),ca[_]=vi.dot(o);const u=Math.max(Math.max(Ku(oa,r,c),Ku(ca,r,l))*(1+Xf),jf),[h,d]=$u(oa,r,c,u),[p,m]=$u(ca,r,l,u);return{dist:u,offset:new N().addScaledVector(a,h).addScaledVector(o,p),slack:new Qt(d,m)}}function $T(i,t,e,n,s){const r=qf.crossVectors(Uc,e).normalize(),a=Kf.crossVectors(e,r).normalize(),o=Math.tan(s),c=Math.tan(n);let l=0;for(const u of i){vi.subVectors(u,t);const h=vi.dot(e);l=Math.max(l,Math.abs(vi.dot(r))/o+h,Math.abs(vi.dot(a))/c+h)}return Math.max(l*(1+Xf),jf)}function $f(i,t,e,n){const[s,r]=e?[i,t]:[t,i];return s>r*(1+ur)?!0:r>s*(1+ur)?!1:n}function Yf(i,t,e=Is,n=Ls){const s=new un().setFromPoints(i),r=s.getCenter(new N),a=s.getSize(new N),{vHalf:o,hHalf:c}=Da(t),l=e*Math.PI/180,u=n*Math.PI/180,h=Aa(i,r,Sa(l,u),o,c).dist,d=Aa(i,r,Sa(l,u+Math.PI/2),o,c).dist,p=$f(a.x,a.z,t.aspect<1,d<h*(1-ur));return{dist:p?d:h,alt:p}}function Oo(i,t,e,n=Is,s=Ls){const{dist:r}=Yf(i,t,n,s);return 2*r*Math.tan(Da(t).vHalf)/e}function Yu(i=Is){return 1/Math.sqrt(Math.sin(i*Math.PI/180))}const sc=(i,t)=>!(t>0)||!Number.isFinite(i)?1:1-Math.exp(-i/t),Zu=.6,YT=.8,ZT=30,JT=Ls,QT=12,Ju=1.03,t1=1.5;function e1(i,t){if(!(t>0)||!(i>=0))return 1;const e=Math.min(i/t,1);return Ju+(1-Ju)*(e*e*(3-2*e))}const n1=2,rc=.5,i1=i=>{const t=Math.floor(Math.max(i,0)/rc)*rc;return[t,t+n1]},s1=.25,r1=.06;function a1(i,t){const e=new N;if(!i.length)return e;for(const n of i)e.add(n);return e.divideScalar(i.length).sub(t).multiplyScalar(s1)}class o1{constructor(t,e=Is,n=Ls){Pe(this,"target",new N);Pe(this,"wanted",new N);Pe(this,"useAlt",!1);Pe(this,"pushAt",-1);Pe(this,"pushFor",0);Pe(this,"elevAt",-1);this.camera=t,this.elevDeg=e,this.azDeg=n}armPushIn(t,e){this.pushAt<0&&(this.pushAt=e),this.pushFor=Math.max(t,0)}pushInAt(t){return this.pushAt<0?1:e1(t-this.pushAt,this.pushFor)}setElev(t){this.elevDeg=t}get elev(){return this.elevDeg}setAz(t){this.azDeg=t}get az(){return this.azDeg}get elevNow(){return this.elevAt<0?this.elevDeg:this.elevAt}frame(t,e,n={}){if(!t.length)return;const s=new un().setFromPoints(t),r=n.lookAt?n.lookAt.clone():s.getCenter(new N),a=s.getSize(new N),{vHalf:o,hHalf:c}=Da(this.camera),l=n.elevDeg??this.elevDeg;this.elevAt=this.elevAt<0?l:this.elevAt+(l-this.elevAt)*sc(e,Zu);const u=this.elevAt*Math.PI/180,h=(n.azDeg??this.azDeg)*Math.PI/180,d=h+Math.PI/2,p=Sa(u,h),m=Sa(u,d),_=Aa(t,r,p,o,c),g=Aa(t,r,m,o,c);!this.useAlt&&g.dist<_.dist*(1-ur)?this.useAlt=!0:this.useAlt&&_.dist<g.dist*(1-ur)?this.useAlt=!1:this.useAlt=$f(a.x,a.z,this.camera.aspect<1,this.useAlt);const f=this.useAlt?g:_,x=this.useAlt?m:p,A=n.lookAt?r:r.clone().add(f.offset),v=n.lookAt?$T(t,r,x,o,c):f.dist;if(n.breath&&!n.lookAt){const R=new N().crossVectors(Uc,x).normalize(),D=new N().crossVectors(x,R).normalize(),M=r1*f.dist,S=(I,V)=>{const F=Math.min(V,M);return Math.min(Math.max(I,-F),F)};A.addScaledVector(R,S(n.breath.dot(R),f.slack.x)).addScaledVector(D,S(n.breath.dot(D),f.slack.y))}const T=v*(n.now!==void 0?this.pushInAt(n.now):1);this.wanted.copy(x).multiplyScalar(T).add(A);const w=sc(e,Zu);this.camera.position.lerp(this.wanted,w),this.target.lerp(A,w),this.camera.lookAt(this.target)}get lookTarget(){return this.target.clone()}}const c1=1.8,l1=34,h1=844,u1=1,Zf=4;function Qu(i,t,e=Is,n=Ls){const{vHalf:s}=Da(t),r=e*Math.PI/180,{dist:a}=Yf(i,t,e,n),o=l1*2*a*Math.tan(s)/(h1*c1*Math.cos(r));return Math.min(Zf,Math.max(u1,o))}function d1(i,t,e,n=Is,s=Ls,r=Zf){const a=u=>or(i,Math.min(r,u));let o=a(Qu(t,e,n,s)),c=0,l=0;for(let u=0;u<8;u++){c++;const h=a(Qu([...t,...Ko(i,o)],e,n,s));if(l=Math.abs(h-o)/o,o=h,l<=.005)break}return{scale:o,rounds:c,residual:l,framed:[...t,...Ko(i,o)]}}class f1{constructor(){Pe(this,"last",-1);Pe(this,"dts",[])}tick(t){this.last>=0&&(this.dts.push(t-this.last),this.dts.length>120&&this.dts.shift()),this.last=t}get avg(){return this.dts.length?1e3/(this.dts.reduce((t,e)=>t+e)/this.dts.length):0}get min(){return this.dts.length?1e3/Math.max(...this.dts):0}}const _i={clips:0,schedule:0,build:0};let td=null;function p1(){return td??(td=fetch(Mi("assets/clips_ochi.json")).then(i=>i.json()).then(i=>df(i)).catch(i=>{throw td=null,i}))}let ed=null;function m1(i){return ed??(ed=Mc().loadAsync(Mi("assets/ball.glb")).then(t=>(t.scene.traverse(e=>{const n=e.material;n!=null&&n.isMeshStandardMaterial&&(n.emissive.set(16777215),n.emissiveIntensity=.32)}),t.scene)).catch(t=>{throw ed=null,t}))}function g1(i,t,e){if(i)return;const n=document.getElementById("hud");n&&(n.textContent=t)}async function Jf(i,t,e={}){var k,ut;const n=performance.now(),s=Oy(i),r=await p1();_i.clips=performance.now()-n;const a=e.stage??wc(t),o=new Rn,c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([st,ot])=>new N(st*s.pitch.width/2,0,ot*s.pitch.length/2)),l=s.players.map(st=>new N(st.start[0]-s.pitch.width/2,0,st.start[1]-s.pitch.length/2)),u=[...c,...l],h=()=>e.bodyScale??d1(s,u,a.camera,e.elev,e.az).scale,d=st=>[...u,...Ko(s,st)],p=a.size();let m=h(),_=d(m);tu(.35*m);let g=or(s,m);const f=performance.now(),x=((k=e.schedules)==null?void 0:k.get(g))??LA(s,r,g);(ut=e.schedules)==null||ut.set(g,x),_i.schedule=performance.now()-f;const A=kv(s),v=(st=e.elev??0)=>st>=qu?[..._,...A]:_;let T=Oo(v(),a.camera,a.size().height,e.elev,e.az),w=Yu(e.elev);const R=$v(s.pitch.width,s.pitch.length),{toWorld:D,goals:M,cones:S,setWorld:I,setMasts:V}=await _y(o,s,a.renderer.capabilities.getMaxAnisotropy(),m,R),F=XT(M,GT(x.flights),D);let U=_.slice(u.length);a.fitShadow(_),a.setFog(qv(s.pitch.width,s.pitch.length)),a.setHorizon(R),a.setSky(!1);const K=await wy(o,s.players.length),O=new Map,H=new Map;s.players.forEach((st,ot)=>{const rt=K[ot];O.set(st.id,rt),rt.root.rotation.order="YXZ",rt.root.scale.setScalar(m),Dy(rt,s.teams[st.team].kit.primary),rt.root.position.copy(D(st.start));const Vt=Fv(.9);Vt.scale.setScalar(m),Vt.position.x=rt.root.position.x,Vt.position.z=rt.root.position.z,o.add(Vt),H.set(st.id,Vt)});const L=(await m1()).clone();L.scale.setScalar(m),o.add(L);const tt=ST({root:o,mesh:L,bodyScale:m,radius:.11*m,resolution:a.size()}),Y=new o1(a.camera,e.elev,e.az);Y.armPushIn(t1,performance.now()/1e3);let nt="fit",pt=-1,zt=[];const it=new N,et=new N,X=new N;let J=!1,yt=[],It=-1/0;const Dt=new OA(s.duration,e.loop??!0),Mt=new f1,kt=new Map(s.players.map(st=>[st.id,st.role])),{applyAnim:ge,cueAt:B}=UA(r,x.anims,kt,x.bounces),Ce=kA(x.turns,s.players.map(st=>[st.id,st.role==="keeper"?Be(st.start,s.ball.start):0])),Yt=Ce.heading,ce=Ce.rateOf,At=new Map(s.players.map(st=>[st.id,st.start]));function mt(){const st=new Set(o.children);return{built:NT({scene:o,drill:s,schedule:x,clips:r,headingAt:rt=>Yt.get(rt)??0,search:e.search,pathM:T,pathWidthK:w,ballRadius:.11*m,goalScale:g}),owned:o.children.filter(rt=>!st.has(rt))}}let ft=mt();const C={},E={update:(st,ot)=>ft.built.update(st,ot),set:st=>{Object.assign(C,st),ft.built.set(st)}};function $(){for(const st of ft.owned)o.remove(st),Zd(st);ft=mt(),ft.built.set(C)}const ct=ZA(),dt=[],lt=sE(),Ht=()=>{lt.reset(),ct.reset()};Dt.onSeek(Ht),Dt.onLoop(Ht);const Ft=iT(Dt);function Ut(){const st=h();if(st!==m){m=st,_=d(m),U=_.slice(u.length),g=or(s,m),tu(.35*m);for(const ot of O.values())ot.root.scale.setScalar(m);for(const ot of H.values())ot.scale.setScalar(m);L.scale.setScalar(m);for(const ot of S)ot.scale.setScalar(m);for(const ot of M)ot.scale.setScalar(g);a.fitShadow(_),Ht()}tt.resize(m,.11*m,a.size()),T=Oo(v(Y.elev),a.camera,a.size().height,Y.elev,Y.az),$(),a.rule.wake()}let le=0;const xt=a.onBox(()=>{le||(le=requestAnimationFrame(()=>{le=0,Ut()}))}),Ct=a.size();(Ct.width!==p.width||Ct.height!==p.height)&&Ut();const qt=e.embed?null:new Map;e.embed||Object.assign(window,{__world:{byId:O,heading:Yt,camera:a.camera,ball:L,schedule:x,goals:M,bodyScale:m,lockDbg:qt},__pathMetrics:()=>({metresPerPx:T,widthK:w,runHalfM:1.6*T*w/2,passHalfM:2.2*T*w/2})});function ee(st,ot=30,rt=.12,Vt=4,Nt=1){const Ot=[];for(const[Bt,jt]of O)jt.root.traverse(ne=>{ne.isBone&&/foot/i.test(ne.name)&&Ot.push({id:Bt,name:ne.name,bone:ne})});Dt.pause(),Dt.seek(0);for(let Bt=0;Bt<90;Bt++)a.step(1/60);Dt.play();const St=1/ot,Pt=Math.min(st??s.duration,s.duration),Kt=Math.max(0,Math.round(Pt*ot)-1),Et=Ot.map(()=>[]),ae=new N;for(let Bt=0;Bt<=Kt;Bt++){for(let jt=0;jt<Ot.length;jt++){const ne=Ot[jt].bone.matrixWorld.elements;ae.set(ne[12],ne[13],ne[14]);const Zt=O.get(Ot[jt].id).root.worldToLocal(ae.clone());Et[jt].push([Bt*St,ne[12],ne[13],ne[14],Zt.x,Zt.z])}a.step(St)}Dt.pause();const te=(Bt,jt)=>{var ne;return((ne=B(Bt,jt))==null?void 0:ne.clip)??"idle"},Tt=[];return Ot.forEach((Bt,jt)=>{const ne=(ht,Wt)=>{if(Wt-ht<Vt)return;const wt=Et[jt].slice(ht,Wt);let y=0,G=0;for(let j=1;j<wt.length;j++)y=Math.max(y,Math.hypot(wt[j][1]-wt[0][1],wt[j][3]-wt[0][3])),G+=Math.hypot(wt[j][4]-wt[j-1][4],wt[j][5]-wt[j-1][5])/St;Tt.push({player:Bt.id,foot:Bt.name,t0:+wt[0][0].toFixed(2),t1:+wt[wt.length-1][0].toFixed(2),drift:+y.toFixed(3),localSpeed:+(G/(wt.length-1)).toFixed(2),clip0:te(Bt.id,wt[0][0]),clip1:te(Bt.id,wt[wt.length-1][0])})},Zt=Et[jt].map((ht,Wt)=>Wt===0?1/0:Math.hypot(ht[1]-Et[jt][Wt-1][1],ht[3]-Et[jt][Wt-1][3])/St);let Ee=-1;Et[jt].forEach((ht,Wt)=>{const wt=ht[2]<rt,y=Wt>0&&te(Bt.id,ht[0])!==te(Bt.id,Et[jt][Wt-1][0]),G=Zt[Wt]>Nt&&Wt>0&&Zt[Wt-1]>Nt;Ee>=0&&(!wt||y||G)&&(ne(Ee,Wt),Ee=-1),Ee<0&&wt&&Zt[Wt]<Nt&&(Ee=Wt)}),Ee>=0&&ne(Ee,Et[jt].length)}),Tt.sort((Bt,jt)=>jt.drift-Bt.drift),{feet:Ot.map(Bt=>({id:Bt.id,name:Bt.name})),hPlant:rt,fps:ot,phases:Tt}}e.embed||Object.assign(window,{__footAudit:ee}),e.embed&&a.rule.enable();const Gt=new Map,ue=new N;let re=0;const we=e.sfx?tT(x.flights):[];let q=0;a.scene.add(o);const P=(st,ot)=>{var ae,te;Dt.advance(st);const rt=Dt.t,Vt=Dt.playing?st:0,Nt=x.attachTo(rt),Ot=da({t:rt,holderId:Nt,holderRoot:Nt?At.get(Nt):null,holderHeading:Nt?Yt.get(Nt):0,ballStart:s.ball.start,flights:x.flights,departures:x.departures,arrivals:x.arrivals}).pos;for(const Tt of s.players){const Bt=O.get(Tt.id);let jt=Tt.start,ne=0;for(const bt of x.moves[Tt.id]??[])if(rt>=bt.t0){const Rt=yn(bt,rt);jt=Rt.pos,ne=Rt.speed}const Zt=uf(x.dives,x.moves[Tt.id],Tt.id,rt),Ee=Zt!==null;Zt&&(jt=Zt),Bt.root.position.copy(D(jt));const ht=x.moves[Tt.id]??[],Wt=Ee?0:zy(ht,rt);Bt.root.rotation.x=0,Bt.root.rotation.z=0,Ee||(Bt.root.position.y-=Xy(ht,rt)-_A(x.bounces,Tt.id,rt)*m),At.set(Tt.id,jt);let wt=null,y=!1;for(const bt of x.faces)bt.player===Tt.id&&rt>=bt.t0&&(wt=bt.until===void 0||rt<=bt.until?bt.at:null,bt.lock&&rt>=bt.lock[0]&&rt<=bt.lock[1]&&(y=!0));const G=wt!==null&&Gi(jt,wt),j=Jy(jt,Ot,G,Tt.id===Nt),Q=G?Be(jt,wt):j??Yt.get(Tt.id),{h:z,clipYaw:at}=Ce.step(Tt.id,rt,Vt,ne,Q,y,!G&&j!==null);Bt.root.rotation.y=jy(z,at),ge(Tt.id,Bt,rt,Vt,ne);const gt=gh(Bt);if(gt.length){const bt=lt.tilt(Tt.id,Ee?[0,0]:By(ht,rt),Yt.get(Tt.id),Wt,Vt);Mu(Bt.root,gt[0],bt.pitch,0,bt.roll)}const vt=Cy(Bt);if(vt.length&&!Ee){Bt.root.updateMatrixWorld(!0);for(let Jt=0;Jt<vt.length;Jt++){const xe=vt[Jt].matrixWorld.elements;dt[Jt]=[xe[12],xe[13],xe[14]]}dt.length=vt.length;const bt=B(Tt.id,rt),Rt=YA((bt==null?void 0:bt.clip)??null,bt?(ae=r.clips[bt.clip])==null?void 0:ae.category:void 0,KA(ht,rt)),[Xt,he]=ct.step(Tt.id,dt,[Bt.root.position.x,Bt.root.position.z],rt,Vt,Rt,m);Bt.root.position.x+=Xt,Bt.root.position.z+=he,qt&&qt.set(Tt.id,[Rt?1:0,Math.hypot(Xt,he),ct.foot(Tt.id),ne,ct.rootSpeed(Tt.id)])}const _t=H.get(Tt.id);if(_t.position.x=Bt.root.position.x,_t.position.z=Bt.root.position.z,Tt.id===Nt){const bt=YE(x.arrivals,Tt.id,rt),Rt=bt>=0?Py(Bt)[bt]:void 0;if(Rt){Bt.root.updateMatrixWorld(!0);const Xt=Rt.matrixWorld.elements;ue.set(Xt[12],Xt[13],Xt[14]),re=Of(x.arrivals,x.departures,Tt.id,rt)}}}const St=da({t:rt,holderId:Nt,holderRoot:Nt?At.get(Nt):null,holderHeading:Nt?Yt.get(Nt):0,ballStart:s.ball.start,flights:x.flights,departures:x.departures,arrivals:x.arrivals});L.position.copy(D(St.pos,.11*m+St.height)),re>0&&(L.position.lerp(ue,re),re=0),tt.update({pos:L.position,height:St.height,t:rt,dt:Vt,apex:St.apex,speed:St.speed,held:Nt!==null&&ZE(x.arrivals,x.departures,Nt,rt)}),e.sfx&&(Ft(e.sfx,we,q,rt,Dt.playing,St.height,St.speed),q=rt),E.update(rt,a.camera),F.update(rt);for(const Tt of s.players){const Bt=O.get(Tt.id),jt=Ry(Bt);if(!jt)continue;const ne=nA(x.faces,Tt.id,rt),Zt=ne?D(ne):L.position,Ee=qy(Math.atan2(Zt.x-Bt.root.position.x,Zt.z-Bt.root.position.z)-Yt.get(Tt.id)+Yy(ce.get(Tt.id)??0)),ht=Gt.get(Tt.id)??0,Wt=Vt>0?ht+(Ee-ht)*.3:ht;Gt.set(Tt.id,Wt);const wt=gh(Bt),y=wt.length>1?lt.shoulder(Tt.id,Wt,Vt):0;wt.length>1&&Mu(Bt.root,wt[1],0,y,0),oE(jt,-(Wt-y))}const Pt=[...O.values()].map(Tt=>new N(Tt.root.position.x,0,Tt.root.position.z)),Kt=a.rule.snap()?1/0:st,Et=ot/1e3;if(nt==="broadcast"){let Tt=-1/0;for(const jt of x.departures)rt>=jt.contact&&jt.contact>Tt&&(Tt=jt.contact);Tt!==It&&(It=Tt,yt=s.players.filter(jt=>D(At.get(jt.id)??jt.start).distanceTo(L.position)<=QT).map(jt=>jt.id)),!J||Kt===1/0?(X.copy(L.position),J=!0):X.lerp(L.position,sc(st,YT));const Bt=yt.length?yt.map(jt=>{const ne=O.get(jt);return new N((ne==null?void 0:ne.root.position.x)??0,0,(ne==null?void 0:ne.root.position.z)??0)}):Pt;Y.frame([...Bt,L.position.clone()],Kt,{now:Et,lookAt:X.clone(),elevDeg:ZT,azDeg:JT})}else{const[Tt,Bt]=i1(rt);if(Tt!==pt){pt=Tt,zt=[];const jt=[];for(let ne=Tt;ne<=Bt+1e-9;ne+=rc){const Zt=new Map;for(const wt of s.players){let y=wt.start;for(const j of x.moves[wt.id]??[])ne>=j.t0&&(y=yn(j,ne).pos);Zt.set(wt.id,y);const G=D(y);zt.push(new N(G.x,0,G.z)),Math.abs(G.x)<=s.pitch.width/2&&Math.abs(G.z)<=s.pitch.length/2&&jt.push(new N(G.x,0,G.z))}const Ee=x.attachTo(ne),ht=da({t:ne,holderId:Ee,holderRoot:Ee?Zt.get(Ee)??null:null,holderHeading:Ee?Yt.get(Ee)??0:0,ballStart:s.ball.start,flights:x.flights,departures:x.departures,arrivals:x.arrivals}),Wt=D(ht.pos);jt.push(new N(Wt.x,0,Wt.z))}it.copy(a1(jt,et))}Pt.push(...zt),Pt.push(...c,...U),Y.elevNow>=qu&&Pt.push(...A),Y.frame([...Pt,L.position.clone()],Kt,{now:Et,breath:it})}Mt.tick(ot),g1(!!e.embed,`t ${rt.toFixed(1)}s  fps ${Mt.avg.toFixed(0)}
[space] play/pause  [r] restart`),(te=e.onFrame)==null||te.call(e,rt,ot)};a.start(P);const b=st=>{st.code==="Space"&&(Dt.playing?Dt.pause():Dt.play()),st.code==="KeyR"&&Dt.seek(0)};e.embed||addEventListener("keydown",b);function W(st){st!==nt&&(nt=st,I(!0),a.setSky(st==="broadcast"),V(st==="broadcast"),J=!1,It=-1/0,a.rule.wake())}function Z(st,ot=Y.az){st===Y.elev&&ot===Y.az||(Y.setElev(st),Y.setAz(ot),T=Oo(v(st),a.camera,a.size().height,st,ot),w=Yu(st),$(),a.rule.wake())}return _i.build=performance.now()-n-_i.clips-_i.schedule,{timeline:Dt,step:st=>a.step(st),stage:a,overlays:E,setCamera:Z,setFollow:W,setPushIn:st=>Y.armPushIn(st,performance.now()/1e3),dispose(){removeEventListener("keydown",b),xt(),le&&(cancelAnimationFrame(le),le=0),a.scene.remove(o),Ay(o,[...K.map(st=>st.root),L,...M]),a.setFog(null),a.setHorizon(null),a.setSky(!0),e.stage?a.park(P):a.dispose()}}}const nd="298c62de",Qf=24,_1=/^[\w-]+$/,b1=async i=>await(await fetch(Mi(`drills/${i}.json`))).json();class x1{constructor(t=b1,e=null,n=Qf){Pe(this,"mem",new Map);Pe(this,"inflight",new Map);this.fetchJson=t,this.db=e,this.cap=n}keys(){return[...this.mem.keys()]}get size(){return this.mem.size}peek(t){const e=this.mem.get(t);return e===void 0?null:(this.mem.delete(t),this.mem.set(t,e),e)}put(t,e){const s=this.mem.get(t)??{json:e,schedules:new Map};s.json=e,this.mem.delete(t),this.mem.set(t,s);for(const r of this.mem.keys()){if(this.mem.size<=this.cap)break;this.mem.delete(r)}return s}async take(t){const e=this.peek(t);if(e)return e;let n=this.inflight.get(t);return n||(n=this.miss(t).finally(()=>this.inflight.delete(t)),this.inflight.set(t,n)),n}async miss(t){var r;const e=this.db?await this.db.read(t).catch(()=>null):null;if(e&&e.build===nd)return this.put(t,e.json);const n=await this.fetchJson(t),s=this.put(t,n);return(r=this.db)==null||r.write(t,{build:nd,json:n}).catch(()=>{}),s}async warm(t){const e=t.filter(n=>typeof n=="string"&&_1.test(n)).slice(0,this.cap);for(const n of e)try{await this.take(n)}catch{}for(const n of[...e].reverse())this.peek(n)}}const v1="tactivo-engine",Fi="drills",id=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});function y1(){try{return globalThis.indexedDB}catch{return}}function M1(i=y1()){if(!i)return null;let t=null;const e=()=>t??(t=new Promise((n,s)=>{const r=i.open(v1,2);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(Fi)&&r.result.deleteObjectStore(Fi),r.result.createObjectStore(Fi)},r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error),r.onblocked=()=>s(new Error("blocked"))}).catch(n=>{throw t=null,n}));return{async read(n){try{const r=(await e()).transaction(Fi,"readonly").objectStore(Fi);return await id(r.get(n))??null}catch{return null}},async write(n,s){try{const r=await e();await id(r.transaction(Fi,"readwrite").objectStore(Fi).put(s,n))}catch{}}}}const sd=new Set(["fit","broadcast"]),Oc=.5,S1=5,A1={phase:"idle",playing:!1,loop:!0,duration:0,seq:0,lastTimeMs:-1/0,narration:[],cue:-1,intro:null,holdUntilMs:null,hookCeilingMs:0,introSkip:!1},E1=100,Ea=1/0,T1=2e3,ko=/^[\w-]+$/,w1=30,R1=85,C1=i=>Math.min(Math.max(i,w1),R1),Wi=i=>({state:i,effects:[],out:[]}),fa=(i,t,e)=>({state:i,effects:[],out:[{type:"error",code:t,message:e}]}),P1=new Set(["auto","authored","off"]),I1=new Set(["hello","ready","time","looped","ended","error","paused","playing","cue","audio","statsReply"]);function L1(i){return Array.isArray(i)?i.map(t=>{const e=t,n=typeof(e==null?void 0:e.text)=="string"&&e.text!==""?e.text:null,s=typeof(e==null?void 0:e.t)=="number"&&Number.isFinite(e.t)?e.t:1/0,r=e==null?void 0:e.hold,a=typeof r=="number"&&Number.isFinite(r)&&r>0?tp(r):0,o=typeof(e==null?void 0:e.beat)=="string"?e.beat:void 0;return{t:n===null?1/0:s,text:n,hold:a,...o?{beat:o}:{}}}):[]}const tp=i=>Math.min(Math.max(i,Oc),S1);function ep(i,t){let e=-1;for(let n=0;n<i.length;n++)i[n].t<=t&&(e=n);return e}const kc=(i,t)=>{var e;return((e=i[t])==null?void 0:e.hold)??0},Bc=(i,t)=>{var n;const e=kc(i,t);return{type:"cue",index:t,text:((n=i[t])==null?void 0:n.text)??null,...e>0?{hold:e}:{}}},ln=i=>({error:i,code:"bad_message"});function D1(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.type!="string"||I1.has(t.type))return null;switch(t.type){case"load":{const e=t.drill;if(typeof e!="object"||e===null)return ln("load: drill must be a DrillScene3D object or {key}");if(t.loop!==void 0&&typeof t.loop!="boolean")return ln("load: loop must be a boolean");const n=e;if("key"in n&&Object.keys(n).length===1&&(typeof n.key!="string"||!ko.test(n.key)))return{error:`load: key must match ${ko.source}`,code:"bad_key"};let s;if(t.intro!==void 0){const r=t.intro;if(typeof r!="object"||r===null)return ln("load: intro must be {text, hold}");if(typeof r.text!="string"||r.text==="")return ln("load: intro.text must be a non-empty string");if(typeof r.hold!="number"||!Number.isFinite(r.hold))return ln("load: intro.hold must be a finite number");s={text:r.text,hold:tp(r.hold)}}return{type:"load",drill:e,loop:t.loop!==!1,...s?{intro:s}:{}}}case"play":case"pause":case"dispose":case"stats":case"unload":return{type:t.type};case"setAudio":return typeof t.enabled!="boolean"?ln("setAudio: enabled must be a boolean"):{type:"setAudio",enabled:t.enabled};case"warm":return Array.isArray(t.keys)?{type:"warm",keys:t.keys.filter(e=>typeof e=="string"&&ko.test(e)).slice(0,Qf)}:ln("warm: keys must be an array of drill keys");case"seek":return typeof t.t!="number"||!Number.isFinite(t.t)?ln("seek: t must be a finite number"):{type:"seek",t:t.t};case"setSpeed":return typeof t.x!="number"||!Number.isFinite(t.x)||t.x<=0?ln("setSpeed: x must be a finite number > 0"):{type:"setSpeed",x:t.x};case"setCamera":return t.elev!==void 0?typeof t.elev!="number"||!Number.isFinite(t.elev)?ln("setCamera: elev must be a finite number"):t.az!==void 0&&(typeof t.az!="number"||!Number.isFinite(t.az))?ln("setCamera: az must be a finite number"):{type:"setCamera",elev:t.elev,...t.az!==void 0?{az:t.az}:{}}:t.follow!==void 0?typeof t.follow!="string"||!sd.has(t.follow)?ln(`setCamera: follow must be one of ${[...sd].join(", ")}`):{type:"setCamera",follow:t.follow}:typeof t.mode!="string"?ln("setCamera: mode must be a string, or elev a number"):{type:"setCamera",mode:t.mode};case"setOverlays":{const e={type:"setOverlays"};for(const n of["trail","highlight","zones"])if(t[n]!==void 0){if(typeof t[n]!="boolean")return ln(`setOverlays: ${n} must be a boolean`);e[n]=t[n]}if(t.runPaths!==void 0){if(typeof t.runPaths!="string"||!P1.has(t.runPaths))return ln("setOverlays: runPaths must be auto|authored|off");e.runPaths=t.runPaths}return e}default:return ln(`unknown message type: ${t.type}`)}}function F1(i,t,e=0){if(t.type==="load"){const s=i.seq+1,r="key"in t.drill&&typeof t.drill.key=="string"&&Object.keys(t.drill).length===1?{key:t.drill.key}:{json:t.drill};return{state:{...i,phase:"loading",playing:!1,loop:t.loop,duration:0,seq:s,narration:[],cue:-1,intro:t.intro??null,holdUntilMs:null,introSkip:!1},effects:[...i.phase==="idle"?[]:[{kind:"dispose"}],{kind:"load",seq:s,source:r,loop:t.loop}],out:[]}}if(t.type==="stats")return{state:i,effects:[{kind:"stats"}],out:[]};if(t.type==="warm")return{state:i,effects:[{kind:"warm",keys:t.keys}],out:[]};if(t.type==="setAudio")return{state:i,effects:[{kind:"setAudio",enabled:t.enabled}],out:[]};if(t.type==="dispose")return{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"dispose"}],out:[]};if(t.type==="unload")return i.phase==="idle"?Wi(i):{state:{...i,phase:"idle",playing:!1,duration:0,seq:i.seq+1,narration:[],cue:-1,intro:null,holdUntilMs:null,introSkip:!1},effects:[{kind:"unload"}],out:[]};if(i.phase==="idle")return fa(i,"not_loaded",`${t.type}: no drill loaded`);if(i.phase==="loading")return fa(i,"still_loading",`${t.type}: still loading`);const n=i.holdUntilMs!==null;switch(t.type){case"play":return{state:{...i,playing:!0},effects:n?[]:[{kind:"play"}],out:[{type:"playing",t:e}]};case"pause":return{state:{...i,playing:!1,holdUntilMs:null},effects:[{kind:"pause"}],out:[{type:"paused",t:e}]};case"seek":return{state:{...i,holdUntilMs:null},effects:[{kind:"seek",t:Math.min(Math.max(t.t,0),i.duration)},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setSpeed":return{state:{...i,holdUntilMs:null},effects:[{kind:"setSpeed",x:t.x},...n?[{kind:"hold",on:!1}]:[]],out:[]};case"setCamera":return"follow"in t?{state:i,effects:[{kind:"setFollow",follow:t.follow}],out:[]}:"elev"in t?{state:i,effects:[{kind:"setCamera",elev:C1(t.elev),...t.az!==void 0?{az:t.az}:{}}],out:[]}:t.mode==="tactical"?Wi(i):fa(i,"bad_camera",`setCamera: unknown mode ${t.mode} (only tactical)`);case"setOverlays":{const{type:s,...r}=t;return{state:i,effects:[{kind:"setOverlays",flags:r}],out:[]}}}}function Qs(i,t,e=0){switch(t.kind){case"loaded":if(t.seq!==i.seq||i.phase!=="loading")return Wi(i);{const n=t.narration??[],s=typeof t.hookHold=="number"&&Number.isFinite(t.hookHold),r=t.voiced&&!s?null:i.intro,a=r?-1:ep(n,0),o=r?s?Math.max(t.hookHold,Oc):r.hold:0,c=r?o:kc(n,a),l=s?Ea:c>0?e+c*1e3:null,u={type:"ready",duration:t.duration,...t.key!==void 0?{key:t.key}:{}};return{state:{...i,phase:"ready",duration:t.duration,narration:n,cue:a,intro:null,holdUntilMs:l,hookCeilingMs:s?e+t.hookHold*1e3+T1:0,introSkip:r!==null},effects:l!==null?[{kind:"hold",on:!0}]:[],out:[u,r?{type:"cue",index:-1,text:r.text,hold:o}:Bc(n,a)]}}case"loadFailed":return t.seq!==i.seq||i.phase!=="loading"?Wi(i):fa({...i,phase:"idle",playing:!1,intro:null,holdUntilMs:null,introSkip:!1},"load_failed",`load failed: ${t.message}`);case"hookEnded":return i.holdUntilMs!==Ea?Wi(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]};case"looped":return{state:i,effects:[],out:[{type:"looped",n:t.n}]};case"ended":return{state:{...i,playing:!1},effects:[],out:[{type:"ended",t:t.t}]}}}function N1(i,t,e){if(i.holdUntilMs!==null){const c=i.holdUntilMs===Ea?i.hookCeilingMs:i.holdUntilMs;return e<c?Wi(i):{state:{...i,holdUntilMs:null},effects:[{kind:"hold",on:!1}],out:[]}}const n=ep(i.narration,t),s=i.playing&&e-i.lastTimeMs>=E1;if(n===i.cue&&!s)return Wi(i);const r=n!==i.cue,a=r&&i.introSkip&&n===0,o=r&&!a?kc(i.narration,n):0;return{state:{...i,cue:n,...r?{introSkip:!1}:{},...s?{lastTimeMs:e}:{},...o>0?{holdUntilMs:e+o*1e3}:{}},effects:o>0?[{kind:"hold",on:!0}]:[],out:[...n!==i.cue?[Bc(i.narration,n)]:[],...s?[{type:"time",t}]:[]]}}const np="assets/narration/",U1=new Set(["progression","why"]),dr=1.15;function O1(i,t,e){let n=0,s=-1;const r=[],a=t.map((l,u)=>{const h=l.beat==="action"?`action-${++n}`:l.beat,d=i&&h?`${i}-${h}`:null,p=d?e[d]:void 0,m=typeof p=="number"&&Number.isFinite(p)&&p>0?d:null,_={index:u,clip:m,hold:m?p/dr:l.hold??0,tail:U1.has(l.beat??"")};return l.beat==="hook"?s=u:_.tail&&r.push(_),_}),o=s<0?null:a[s],c=a.filter(l=>l!==o&&l.clip!==null);return{lines:a,hook:o,tail:r,queue:c,script:[...o!=null&&o.clip?[o.clip]:[],...c.map(l=>l.clip)],hasAudio:a.some(l=>l.clip!==null)}}async function k1(i=Mi(np)){try{const t=await fetch(`${i}index.json`);if(!t.ok)return{};const e=await t.json();return e&&typeof e=="object"?e:{}}catch{return{}}}const B1=.0056,G1=.01;function z1(i){const t=i.length,e=i.sampleRate,n=Math.max(1,Math.round(e*G1)),s=[];for(let c=0;c<i.numberOfChannels;c++)s.push(i.getChannelData(c));const r=c=>{const l=Math.min(c+n,t);let u=0,h=0;for(const d of s)for(let p=c;p<l;p++)u+=d[p]*d[p],h++;return h>0&&Math.sqrt(u/h)>B1};let a=-1,o=-1;for(let c=0;c<t;c+=n)if(r(c)){a=c;break}if(a<0)return{lead:0,tail:0,end:t/e};for(let c=Math.floor((t-1)/n)*n;c>=0;c-=n)if(r(c)){o=Math.min(c+n,t);break}return{lead:a/e,tail:Math.max((t-o)/e,0),end:o/e}}function rd(i,t,e){return t&&e?Math.max(i-(e.lead+e.tail)/dr,0):i}const H1=40,V1=3;class W1{constructor(t=Mi(np),e=n=>new Audio(n)){Pe(this,"blocked",!1);Pe(this,"el",null);Pe(this,"finish",null);Pe(this,"held",new Map);Pe(this,"inflight",new Set);Pe(this,"trims",new Map);Pe(this,"ctx",null);Pe(this,"noCtx",!1);Pe(this,"gen",0);Pe(this,"walks",0);Pe(this,"playing",null);Pe(this,"arm",null);Pe(this,"onTrim",null);this.dir=t,this.make=e}fetched(){return[...this.held.keys()]}newGeneration(){this.gen++}trim(t){return this.trims.get(t)}remaining(t){const e=this.el;if(!e||this.playing!==t)return;const n=this.trims.get(t),s=n&&n.tail>0?Math.min(n.end,e.duration):e.duration;if(Number.isFinite(s))return Math.max((s-(e.currentTime||0))/(e.playbackRate||1),0)}closeCtx(){const t=this.ctx;this.ctx=null;try{Promise.resolve(t==null?void 0:t.close()).catch(()=>{})}catch{}}async measure(t,e){var n,s;if(!(this.trims.has(t)||this.noCtx))try{if(!this.ctx){const o=globalThis,c=o.AudioContext??o.webkitAudioContext;if(!c){this.noCtx=!0;return}this.ctx=new c}const r=await this.ctx.decodeAudioData((await e.arrayBuffer()).slice(0));if(!r)return;const a=z1(r);this.trims.set(t,a),this.playing===t&&((n=this.arm)==null||n.call(this,a),(s=this.onTrim)==null||s.call(this,t,a))}catch{}}touch(t){const e=this.held.get(t);if(e!==void 0)return this.held.delete(t),this.held.set(t,e),e}async prefetch(t){if(!(this.touch(t)!==void 0||this.inflight.has(t))){this.inflight.add(t);try{const e=await fetch(`${this.dir}${t}.mp3`);if(!e.ok)return;const n=await e.blob(),s=URL.createObjectURL(n);this.held.set(t,s),await this.measure(t,n);for(const r of[...this.held.keys()]){if(this.held.size<=H1)break;if(r===this.playing)continue;const a=this.held.get(r);this.held.delete(r);try{URL.revokeObjectURL(a)}catch{}}}catch{}finally{this.inflight.delete(t)}}}async prefetchAll(t){const e=this.gen;this.walks++;try{for(const n of t){if(e!==this.gen)return;await this.prefetch(n)}}finally{this.walks--}this.walks===0&&this.inflight.size===0&&this.closeCtx()}play(t,e=0){this.stop();let n;try{n=this.make(this.touch(t)??`${this.dir}${t}.mp3`)}catch{return Promise.resolve()}try{n.preservesPitch=!0,n.webkitPreservesPitch=!0,n.playbackRate=dr}catch{}this.el=n;const s=this.trims.get(t);return new Promise(r=>{let a,o,c=()=>{},l,u,h;const d=(g,f)=>{if(f)try{n.removeEventListener(g,f)}catch{}},p=()=>{a!==void 0&&(clearTimeout(a),a=void 0),o!==void 0&&(clearTimeout(o),o=void 0),d("timeupdate",l),l=void 0,d("playing",u),u=void 0,d("loadedmetadata",h),h=void 0,this.el===n&&(this.el=null,this.finish=null,this.arm=null,this.playing=null),r()};this.finish=p,n.addEventListener("ended",p),n.addEventListener("error",p);let m=!1;const _=g=>{if(m||!(g.lead>0||g.tail>0))return;m=!0;const f=()=>{if(g.lead>n.currentTime)try{n.currentTime=g.lead}catch{}const x=Math.min(g.end,n.duration);if(!(g.tail>0)||!Number.isFinite(x)||x<=0)return;let A=-1;const v=()=>{if(n.currentTime>A&&n.currentTime<x){T();return}try{n.pause()}catch{}p()},T=()=>{a!==void 0&&clearTimeout(a),A=n.currentTime||0;const w=(x-A)/(n.playbackRate||1);a=setTimeout(v,Math.max(w,0)*1e3)};l=()=>{n.currentTime>=x?v():n.currentTime>0&&T()},n.addEventListener("timeupdate",l),u=()=>{T(),c()},n.addEventListener("playing",u),T()};(n.readyState??0)>=1?f():(h=f,n.addEventListener("loadedmetadata",h))};this.playing=t,this.arm=_,s&&_(s);{const g=Number.isFinite(n.duration)&&n.duration>0?n.duration:e;if(g>0){let f=-1;const x=()=>{if(n.currentTime>f){c();return}try{n.pause()}catch{}p()};c=()=>{o!==void 0&&clearTimeout(o),f=n.currentTime||0;const A=Math.max(g-f,0)/(n.playbackRate||1);o=setTimeout(x,(A+V1)*1e3)},c()}}try{Promise.resolve(n.play()).catch(()=>{this.blocked=!0,p()})}catch{this.blocked=!0,p()}})}stop(){const t=this.el,e=this.finish;this.el=null,this.finish=null,this.playing=null,this.arm=null;try{t==null||t.pause()}catch{}e==null||e()}}const X1="assets/sfx/",j1=.9,q1=.35,K1=.45,$1=.06,Y1=["kick-soft-1","kick-soft-2","kick-soft-3"],Z1=["kick-hard-1","kick-hard-2"],Bo=.3,J1=6,Q1=.25,ad=.04,tw=.001,od=.125,ac=400,ew=ac/3e3,cd=25,ld=.5;function nw(i){if(!(i>Bo))return 0;const t=(i-Bo)/(J1-Bo);return Q1*Math.min(t,1)}function iw(){const i=globalThis,t=i.AudioContext??i.webkitAudioContext;return t?new t:null}function sw(i){const t=i.dir,e=i.make??(F=>new Audio(F)),n=i.now??(()=>Date.now()),s=i.random??Math.random,r=i.makeCtx??iw,a=new Map,o=new Map,c=new Map;let l=null,u=!1,h=!1,d=!1,p=!1,m=!1,_=0,g=0,f;function x(F,U){const K=a.get(F);if(K)return K;if(p)return null;let O;try{O=e(`${t}${F}.mp3`)}catch{return null}try{O.loop=U,O.volume=0}catch{}return a.set(F,O),v(F,O),O}function A(){var F;if(!(l||u)){try{l=r()}catch{l=null}if(!l){u=!0;return}try{Promise.resolve((F=l.resume)==null?void 0:F.call(l)).catch(()=>{})}catch{}}}function v(F,U){if(l)try{const K=l.createGain();K.gain.value=0,l.createMediaElementSource(U).connect(K),K.connect(l.destination),o.set(F,K);try{U.volume=1}catch{}}catch{}}function T(F){try{Promise.resolve(F.play()).catch(()=>{d=!0})}catch{d=!0}}function w(F){try{F==null||F.pause()}catch{}}function R(F,U,K,O=0){const H=Math.max(0,Math.min(1,K)),L=o.get(F);if(!L||!l){try{U.volume=H}catch{}return}try{const tt=l.currentTime,Y=L.gain;Y.cancelScheduledValues(tt),O>0?(Y.setValueAtTime(Y.value,tt),Y.setTargetAtTime(H,tt,O)):Y.setValueAtTime(H,tt)}catch{}}function D(F,U){let K=Math.min(Math.floor(s()*U.length),U.length-1);return U.length>1&&U[K]===c.get(F)&&(K=(K+1)%U.length),c.set(F,U[K]),U[K]}function M(F,U,K=1){if(!h)return;const O=x(F,!1);if(O){R(F,O,U);try{K!==1&&(O.preservesPitch=!1,O.webkitPreservesPitch=!1),O.playbackRate=K}catch{}try{O.currentTime=0}catch{}T(O)}}function S(){f!==void 0&&(clearInterval(f),f=void 0)}function I(F){S();const U=x("ambience",!0);if(!U)return;if(F>0&&!d&&T(U),o.has("ambience")){R("ambience",U,F,ew),F<=0&&(f=setTimeout(()=>{f=void 0,w(U)},ac));return}const K=U.volume??0,O=Math.max(1,Math.round(ac/cd));let H=0;f=setInterval(()=>{H++;const L=K+(F-K)*Math.min(H/O,1);R("ambience",U,L),H>=O&&(S(),F<=0&&w(U))},cd)}function V(){S();for(const[F,U]of a)R(F,U,0),w(U);_=0}return{get blocked(){return d},kick(F,U=!1){if(!h)return;const K=Math.max(0,Math.min(1,F)),O=U||K>=j1,H=D(O?"hard":"soft",O?Z1:Y1),L=1+(s()*2-1)*$1;M(H,q1+K1*K,L)},roll(F,U){const K=n(),O=g===0,H=O?0:Math.max(K-g,0)/1e3;if(g=K,!h){_=0;return}const L=F?nw(U):0;_+=(L-_)*(O?1:1-Math.exp(-H/ad));const tt=x("roll",!0);if(!tt)return;if(_<=tw){_=0,R("roll",tt,0),w(tt);return}const Y=o.has("roll");R("roll",tt,Y?L:_,Y?ad:0),!d&&tt.paused!==!1&&T(tt)},whistle(){M("whistle",ld)},net(){M("net",ld)},ambience(F){m=F,h&&I(F?od:0)},setEnabled(F){if(F&&(d=!1,A()),F!==h){if(h=F,!F){V();return}g=0,m&&I(od)}},dispose(){var U,K,O;p=!0,h=!1,m=!1,V();for(const H of a.values())try{(U=H.removeAttribute)==null||U.call(H,"src"),(K=H.load)==null||K.call(H)}catch{}a.clear(),o.clear();const F=l;l=null;try{Promise.resolve((O=F==null?void 0:F.close)==null?void 0:O.call(F)).catch(()=>{})}catch{}}}}function rw(i=window,t={createStage:wc,runDrill:Jf}){var At;const e=i.document,n=t.warm??new x1(void 0,M1()),s=t.narrator??new W1,r=()=>{var mt;return((mt=t.sfx)==null?void 0:mt.call(t))??sw({dir:Mi(X1)})};let a=r(),o=!1;const c=mt=>{o=mt,a.setEnabled(mt)};let l=!1,u=!1;function h(){l||(l=!0,d(),a.ambience(!0))}function d(){u||!o||(u=!0,a.whistle())}function p(){l=!1,a.ambience(!1),a.roll(!1,0)}const m=()=>c(R());(At=e==null?void 0:e.addEventListener)==null||At.call(e,"visibilitychange",m);let _=null;const g=()=>_??(_=(t.audioIndex??k1)());let f=null,x=new Set,A=!0,v=!1,T=[];const w=()=>A&&!s.blocked,R=()=>w()&&!(e!=null&&e.hidden),D=()=>({type:"audio",state:A?s.blocked||a.blocked?"blocked":"playing":"muted"}),M=()=>w()&&(f==null?void 0:f.hasAudio)===!0,S=mt=>{var ft;return M()&&(mt<0||((ft=f==null?void 0:f.lines[mt])==null?void 0:ft.clip)!=null)};function I(mt){if(f)for(const ft of f.lines){const C=mt[ft.index];C&&(C.hold=0)}}function V(){!s.blocked||v||(v=!0,c(!1),I(et.narration),kt([{type:"audio",state:"blocked"}]))}let F=Promise.resolve(),U=!1,K=0,O=null,H=null,L=!1;s.onTrim=mt=>{if(!U||mt!==O)return;const ft=s.remaining(mt);ft!==void 0&&(K=performance.now()+ft*1e3,L&&H!==null&&kt([{type:"cue",index:-1,text:H,hold:Math.max(ft,Oc)}]))};let tt=0,Y=!1,nt=[];const pt=()=>{const mt=nt;nt=[];for(const ft of mt)ft()},zt=(mt,ft)=>new Promise(C=>{const E=()=>{mt!==et.seq?C(!1):ft()?C(!0):nt.push(E)};E()});async function it(mt){var C;const ft=(f==null?void 0:f.queue)??[];for(;mt===et.seq&&tt<ft.length;){const E=ft[tt],$=E.clip;if(!$||x.has($)){tt++;continue}if(!w()){const ct=!A;if(!await zt(mt,w))return;if(ct){const dt=ft.findIndex(lt=>lt.index===et.cue);dt>tt&&(tt=dt)}continue}if(x.add($),kt([{type:"cue",index:E.index,text:((C=et.narration[E.index])==null?void 0:C.text)??null,hold:rd(E.hold,$,s.trim($))}]),await s.play($,E.hold*dr),mt!==et.seq)return;if(s.blocked){x.delete($),V();continue}V(),tt++}mt===et.seq&&ft.length>0&&tt>=ft.length&&(Y=!0,kt([{type:"cue",index:-1,text:null}]))}let et=A1,X=null,J=null,yt=Promise.resolve(),It=null,Dt={},Mt=0;function kt(mt){if(It)for(const ft of mt)It.source.postMessage(ft,{targetOrigin:It.origin==="null"||!It.origin?"*":It.origin})}function ge(mt,ft=!1){et=mt.state;for(const C of mt.effects)B(C);kt(ft?mt.out.filter(C=>!(C.type==="cue"&&S(C.index))):mt.out)}function B(mt){var ft;switch(mt.kind){case"dispose":{s.stop(),s.newGeneration(),s.closeCtx(),p(),U=!1,pt();const C=performance.now();X==null||X.dispose(),X=null,Mt=performance.now()-C,et.phase==="idle"&&(J==null||J.dispose(),J=null,c(!1),a.dispose(),a=r(),(ft=e==null?void 0:e.removeEventListener)==null||ft.call(e,"visibilitychange",m));return}case"unload":{s.stop(),s.newGeneration(),p(),c(!1),U=!1,pt(),X==null||X.dispose(),X=null;return}case"load":{s.stop(),s.newGeneration(),f=null,x=new Set,tt=0,U=!1,O=null,H=null,L=!1,Y=!1,l=!1,u=!1,c(R()),pt(),F=Ce(mt.seq,mt.source),yt=yt.catch(()=>{}).then(()=>ce(mt.seq,mt.source,mt.loop));return}case"play":X==null||X.timeline.play(),X==null||X.stage.rule.play(),h();return;case"pause":X==null||X.timeline.pause(),X==null||X.stage.rule.pause();return;case"seek":X==null||X.timeline.seek(mt.t),X==null||X.stage.rule.wake();return;case"setSpeed":X==null||X.timeline.setSpeed(mt.x);return;case"setOverlays":X==null||X.overlays.set(mt.flags),X==null||X.stage.rule.wake();return;case"setCamera":X==null||X.setCamera(mt.elev,mt.az);return;case"setFollow":X==null||X.setFollow(mt.follow);return;case"hold":mt.on?(X==null||X.timeline.pause(),X==null||X.stage.rule.play()):et.playing?(X==null||X.timeline.play(),X==null||X.stage.rule.play(),h()):X==null||X.stage.rule.pause();return;case"warm":{const C=mt.keys;T=C.slice(0,3);const E=et.seq;yt.catch(()=>{}).then(()=>n.warm(C)).then(()=>Yt(T,E)).catch(()=>{});return}case"setAudio":{A=mt.enabled,A?(s.blocked=!1,v=!1,et.holdUntilMs!==null&&et.holdUntilMs!==Ea&&(et={...et,holdUntilMs:null},B({kind:"hold",on:!1})),f!=null&&f.script.length&&s.prefetchAll(f.script.filter(C=>{var E;return!x.has(C)&&C!==((E=f==null?void 0:f.hook)==null?void 0:E.clip)})),T.length&&Yt(T,et.seq)):(s.stop(),s.newGeneration()),c(R()),l&&d(),I(et.narration),kt([D()]),!A&&et.phase==="ready"&&!(L&&U)&&kt([Bc(et.narration,et.cue)]),A&&et.phase==="ready"&&Y&&kt([{type:"cue",index:-1,text:null}]),pt();return}case"stats":kt([{type:"statsReply",frames:(X==null?void 0:X.stage.frames())??0,t:(X==null?void 0:X.timeline.t)??0,playing:et.playing,phases:{...Dt},warm:n.keys().length}]);return}}async function Ce(mt,ft){if(!("key"in ft))return;const C=`${ft.key}-hook`,E=await g();if(mt!==et.seq||!(E[C]>0)||!w())return;x.add(C),U=!0,O=C;const $=s.trim(C);K=performance.now()+rd(E[C]/dr,C,$)*1e3,await s.play(C,E[C]),U=!1,V(),mt===et.seq&&ge(Qs(et,{kind:"hookEnded"}))}async function Yt(mt,ft){if(!A)return;const C=await g();if(ft!==et.seq)return;const E=[];for(const $ of mt)for(const ct of["hook","picture"]){const dt=`${$}-${ct}`;C[dt]>0&&E.push(dt)}await s.prefetchAll(E)}async function ce(mt,ft,C){var xt;let E,$=[];const ct=performance.now();let dt=ct,lt=0;try{let Ct=null,qt;if("key"in ft?(Ct=await n.take(ft.key),qt=Ct.json):qt=ft.json,mt!==et.seq)return;dt=performance.now(),$=L1(qt==null?void 0:qt.narration);const ee=await g();if(mt!==et.seq)return;f=O1("key"in ft?ft.key:null,$,ee),A&&f.script.length&&s.prefetchAll(f.script),I($);const Gt=J!==null;J??(J=t.createStage(i.document.body)),J.remeasure(),lt=Gt?0:performance.now()-dt,E=await t.runDrill(qt,i.document.body,{loop:C,embed:!0,search:"",stage:J,sfx:a,...Ct?{schedules:Ct.schedules}:{},onFrame:(ue,re)=>ge(N1(et,ue,re),!0)})}catch(Ct){ge(Qs(et,{kind:"loadFailed",seq:mt,message:Ct instanceof Error?Ct.message:String(Ct)},performance.now()));return}if(mt!==et.seq||et.phase!=="loading"){E.dispose();return}X=E;const Ht=performance.now();X.step(0),Dt={dispose:Mt,fetch:dt-ct+_i.clips,stage:lt,schedule:_i.schedule,build:_i.build,firstFrame:performance.now()-Ht,total:Mt+performance.now()-ct},Mt=0;let Ft=0;if(X.timeline.onLoop(()=>ge(Qs(et,{kind:"looped",n:++Ft}))),X.timeline.onEnd(()=>{X==null||X.stage.rule.pause(),ge(Qs(et,{kind:"ended",t:(X==null?void 0:X.timeline.t)??0}))}),U&&O!==null){const Ct=s.remaining(O);Ct!==void 0&&(K=performance.now()+Ct*1e3)}const Ut=U?Math.max((K-performance.now())/1e3,0):void 0;Ut!==void 0&&Ut>0&&X.setPushIn(Ut),H=((xt=et.intro)==null?void 0:xt.text)??null;const le=Ut!==void 0&&H!==null;I($),ge(Qs(et,{kind:"loaded",seq:mt,duration:X.timeline.duration,narration:$,voiced:M(),...Ut!==void 0?{hookHold:Ut}:{},..."key"in ft?{key:ft.key}:{}},performance.now())),L=le,F.then(()=>{mt===et.seq&&it(mt)})}i.addEventListener("message",mt=>{if(mt.source===i)return;const ft=D1(mt.data);if(ft!==null){if(mt.source&&(It={source:mt.source,origin:mt.origin}),"error"in ft){kt([{type:"error",code:ft.code,message:ft.error}]);return}ge(F1(et,ft,(X==null?void 0:X.timeline.t)??0))}}),i.parent&&i.parent!==i&&i.parent.postMessage({type:"hello"},"*")}function aw(i,t={}){const e=t.mountEmbed??rw,n=new Set;let s=null,r=!1;const a={stages:0,mounts:0,reparents:0},o=i.doc.createElement("div");o.style.position="absolute",o.style.inset="0",o.style.pointerEvents="none";const c=i.doc.createElement("div");c.style.display="none",i.doc.body.appendChild(c),c.appendChild(o);function l(p){p.type==="hello"&&(r=!0);for(const m of[...n])try{m(p)}catch(_){console.error("tactivo3d: listener failed",_),setTimeout(()=>{throw _})}}const u={postMessage(p){queueMicrotask(()=>l(p))}},h={document:{body:o},parent:u,addEventListener(p,m){p==="message"&&(s=m)},removeEventListener(){}};let d=!1;return{mount(p,m){a.mounts++,o.parentElement!==p&&(p.appendChild(o),d&&a.reparents++),!d&&(hv((m==null?void 0:m.base)??i.base),e(h,{createStage:_=>(a.stages++,wc(_)),runDrill:Jf,...t.warm?{warm:t.warm}:{},...t.narrator?{narrator:t.narrator}:{},...t.audioIndex?{audioIndex:t.audioIndex}:{}}),d=!0)},unmount(){c.appendChild(o)},post(p){s==null||s({data:p,source:u,origin:""})},onMessage(p){return n.add(p),r&&queueMicrotask(()=>{n.has(p)&&p({type:"hello"})}),()=>{n.delete(p)}},stats:()=>({...a})}}typeof window<"u"&&typeof document<"u"&&(window.tactivo3d??(window.tactivo3d=aw({doc:document,base:new URL("./",import.meta.url).href})));
